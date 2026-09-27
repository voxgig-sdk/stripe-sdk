-- Stripe SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("stripe_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local StripeSDK = {}
StripeSDK.__index = StripeSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

StripeSDK._make_feature = _make_feature


function StripeSDK.new(options)
  local self = setmetatable({}, StripeSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function StripeSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function StripeSDK:get_utility()
  return Utility.copy(self._utility)
end


function StripeSDK:get_root_ctx()
  return self._rootctx
end


function StripeSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function StripeSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function StripeSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function StripeSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "StripeSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function StripeSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function StripeSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "StripeSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Account():list() / client:Account():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Account(data)
  local EntityMod = require("entity.account_entity")
  if data == nil then
    if self._account == nil then
      self._account = EntityMod.new(self, nil)
    end
    return self._account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AccountLink():list() / client:AccountLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:AccountLink(data)
  local EntityMod = require("entity.account_link_entity")
  if data == nil then
    if self._account_link == nil then
      self._account_link = EntityMod.new(self, nil)
    end
    return self._account_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AccountOwner():list() / client:AccountOwner():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:AccountOwner(data)
  local EntityMod = require("entity.account_owner_entity")
  if data == nil then
    if self._account_owner == nil then
      self._account_owner = EntityMod.new(self, nil)
    end
    return self._account_owner
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AccountSession():list() / client:AccountSession():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:AccountSession(data)
  local EntityMod = require("entity.account_session_entity")
  if data == nil then
    if self._account_session == nil then
      self._account_session = EntityMod.new(self, nil)
    end
    return self._account_session
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActiveEntitlement():list() / client:ActiveEntitlement():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ActiveEntitlement(data)
  local EntityMod = require("entity.active_entitlement_entity")
  if data == nil then
    if self._active_entitlement == nil then
      self._active_entitlement = EntityMod.new(self, nil)
    end
    return self._active_entitlement
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Alert():list() / client:Alert():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Alert(data)
  local EntityMod = require("entity.alert_entity")
  if data == nil then
    if self._alert == nil then
      self._alert = EntityMod.new(self, nil)
    end
    return self._alert
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApplePayDomain():list() / client:ApplePayDomain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ApplePayDomain(data)
  local EntityMod = require("entity.apple_pay_domain_entity")
  if data == nil then
    if self._apple_pay_domain == nil then
      self._apple_pay_domain = EntityMod.new(self, nil)
    end
    return self._apple_pay_domain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApplicationFee():list() / client:ApplicationFee():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ApplicationFee(data)
  local EntityMod = require("entity.application_fee_entity")
  if data == nil then
    if self._application_fee == nil then
      self._application_fee = EntityMod.new(self, nil)
    end
    return self._application_fee
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Association():list() / client:Association():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Association(data)
  local EntityMod = require("entity.association_entity")
  if data == nil then
    if self._association == nil then
      self._association = EntityMod.new(self, nil)
    end
    return self._association
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Authentication():list() / client:Authentication():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Authentication(data)
  local EntityMod = require("entity.authentication_entity")
  if data == nil then
    if self._authentication == nil then
      self._authentication = EntityMod.new(self, nil)
    end
    return self._authentication
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Authorization():list() / client:Authorization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Authorization(data)
  local EntityMod = require("entity.authorization_entity")
  if data == nil then
    if self._authorization == nil then
      self._authorization = EntityMod.new(self, nil)
    end
    return self._authorization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Balance():list() / client:Balance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Balance(data)
  local EntityMod = require("entity.balance_entity")
  if data == nil then
    if self._balance == nil then
      self._balance = EntityMod.new(self, nil)
    end
    return self._balance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BalanceSetting():list() / client:BalanceSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:BalanceSetting(data)
  local EntityMod = require("entity.balance_setting_entity")
  if data == nil then
    if self._balance_setting == nil then
      self._balance_setting = EntityMod.new(self, nil)
    end
    return self._balance_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BalanceTransaction():list() / client:BalanceTransaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:BalanceTransaction(data)
  local EntityMod = require("entity.balance_transaction_entity")
  if data == nil then
    if self._balance_transaction == nil then
      self._balance_transaction = EntityMod.new(self, nil)
    end
    return self._balance_transaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BankAccount():list() / client:BankAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:BankAccount(data)
  local EntityMod = require("entity.bank_account_entity")
  if data == nil then
    if self._bank_account == nil then
      self._bank_account = EntityMod.new(self, nil)
    end
    return self._bank_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Calculation():list() / client:Calculation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Calculation(data)
  local EntityMod = require("entity.calculation_entity")
  if data == nil then
    if self._calculation == nil then
      self._calculation = EntityMod.new(self, nil)
    end
    return self._calculation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Capability():list() / client:Capability():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Capability(data)
  local EntityMod = require("entity.capability_entity")
  if data == nil then
    if self._capability == nil then
      self._capability = EntityMod.new(self, nil)
    end
    return self._capability
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Card():list() / client:Card():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Card(data)
  local EntityMod = require("entity.card_entity")
  if data == nil then
    if self._card == nil then
      self._card = EntityMod.new(self, nil)
    end
    return self._card
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Cardholder():list() / client:Cardholder():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Cardholder(data)
  local EntityMod = require("entity.cardholder_entity")
  if data == nil then
    if self._cardholder == nil then
      self._cardholder = EntityMod.new(self, nil)
    end
    return self._cardholder
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CashBalance():list() / client:CashBalance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:CashBalance(data)
  local EntityMod = require("entity.cash_balance_entity")
  if data == nil then
    if self._cash_balance == nil then
      self._cash_balance = EntityMod.new(self, nil)
    end
    return self._cash_balance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CashBalanceTransaction():list() / client:CashBalanceTransaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:CashBalanceTransaction(data)
  local EntityMod = require("entity.cash_balance_transaction_entity")
  if data == nil then
    if self._cash_balance_transaction == nil then
      self._cash_balance_transaction = EntityMod.new(self, nil)
    end
    return self._cash_balance_transaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Charge():list() / client:Charge():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Charge(data)
  local EntityMod = require("entity.charge_entity")
  if data == nil then
    if self._charge == nil then
      self._charge = EntityMod.new(self, nil)
    end
    return self._charge
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Configuration():list() / client:Configuration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Configuration(data)
  local EntityMod = require("entity.configuration_entity")
  if data == nil then
    if self._configuration == nil then
      self._configuration = EntityMod.new(self, nil)
    end
    return self._configuration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConfirmationToken():list() / client:ConfirmationToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ConfirmationToken(data)
  local EntityMod = require("entity.confirmation_token_entity")
  if data == nil then
    if self._confirmation_token == nil then
      self._confirmation_token = EntityMod.new(self, nil)
    end
    return self._confirmation_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConnectionToken():list() / client:ConnectionToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ConnectionToken(data)
  local EntityMod = require("entity.connection_token_entity")
  if data == nil then
    if self._connection_token == nil then
      self._connection_token = EntityMod.new(self, nil)
    end
    return self._connection_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CountrySpec():list() / client:CountrySpec():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:CountrySpec(data)
  local EntityMod = require("entity.country_spec_entity")
  if data == nil then
    if self._country_spec == nil then
      self._country_spec = EntityMod.new(self, nil)
    end
    return self._country_spec
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Coupon():list() / client:Coupon():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Coupon(data)
  local EntityMod = require("entity.coupon_entity")
  if data == nil then
    if self._coupon == nil then
      self._coupon = EntityMod.new(self, nil)
    end
    return self._coupon
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreditBalanceSummary():list() / client:CreditBalanceSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:CreditBalanceSummary(data)
  local EntityMod = require("entity.credit_balance_summary_entity")
  if data == nil then
    if self._credit_balance_summary == nil then
      self._credit_balance_summary = EntityMod.new(self, nil)
    end
    return self._credit_balance_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreditBalanceTransaction():list() / client:CreditBalanceTransaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:CreditBalanceTransaction(data)
  local EntityMod = require("entity.credit_balance_transaction_entity")
  if data == nil then
    if self._credit_balance_transaction == nil then
      self._credit_balance_transaction = EntityMod.new(self, nil)
    end
    return self._credit_balance_transaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreditGrant():list() / client:CreditGrant():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:CreditGrant(data)
  local EntityMod = require("entity.credit_grant_entity")
  if data == nil then
    if self._credit_grant == nil then
      self._credit_grant = EntityMod.new(self, nil)
    end
    return self._credit_grant
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreditNote():list() / client:CreditNote():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:CreditNote(data)
  local EntityMod = require("entity.credit_note_entity")
  if data == nil then
    if self._credit_note == nil then
      self._credit_note = EntityMod.new(self, nil)
    end
    return self._credit_note
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreditNoteLine():list() / client:CreditNoteLine():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:CreditNoteLine(data)
  local EntityMod = require("entity.credit_note_line_entity")
  if data == nil then
    if self._credit_note_line == nil then
      self._credit_note_line = EntityMod.new(self, nil)
    end
    return self._credit_note_line
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreditReversal():list() / client:CreditReversal():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:CreditReversal(data)
  local EntityMod = require("entity.credit_reversal_entity")
  if data == nil then
    if self._credit_reversal == nil then
      self._credit_reversal = EntityMod.new(self, nil)
    end
    return self._credit_reversal
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Customer():list() / client:Customer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Customer(data)
  local EntityMod = require("entity.customer_entity")
  if data == nil then
    if self._customer == nil then
      self._customer = EntityMod.new(self, nil)
    end
    return self._customer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomerBalanceTransaction():list() / client:CustomerBalanceTransaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:CustomerBalanceTransaction(data)
  local EntityMod = require("entity.customer_balance_transaction_entity")
  if data == nil then
    if self._customer_balance_transaction == nil then
      self._customer_balance_transaction = EntityMod.new(self, nil)
    end
    return self._customer_balance_transaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomerSession():list() / client:CustomerSession():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:CustomerSession(data)
  local EntityMod = require("entity.customer_session_entity")
  if data == nil then
    if self._customer_session == nil then
      self._customer_session = EntityMod.new(self, nil)
    end
    return self._customer_session
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DebitReversal():list() / client:DebitReversal():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:DebitReversal(data)
  local EntityMod = require("entity.debit_reversal_entity")
  if data == nil then
    if self._debit_reversal == nil then
      self._debit_reversal = EntityMod.new(self, nil)
    end
    return self._debit_reversal
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedAccount():list() / client:DeletedAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:DeletedAccount(data)
  local EntityMod = require("entity.deleted_account_entity")
  if data == nil then
    if self._deleted_account == nil then
      self._deleted_account = EntityMod.new(self, nil)
    end
    return self._deleted_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedApplePayDomain():list() / client:DeletedApplePayDomain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:DeletedApplePayDomain(data)
  local EntityMod = require("entity.deleted_apple_pay_domain_entity")
  if data == nil then
    if self._deleted_apple_pay_domain == nil then
      self._deleted_apple_pay_domain = EntityMod.new(self, nil)
    end
    return self._deleted_apple_pay_domain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedCoupon():list() / client:DeletedCoupon():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:DeletedCoupon(data)
  local EntityMod = require("entity.deleted_coupon_entity")
  if data == nil then
    if self._deleted_coupon == nil then
      self._deleted_coupon = EntityMod.new(self, nil)
    end
    return self._deleted_coupon
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedExternalAccount():list() / client:DeletedExternalAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:DeletedExternalAccount(data)
  local EntityMod = require("entity.deleted_external_account_entity")
  if data == nil then
    if self._deleted_external_account == nil then
      self._deleted_external_account = EntityMod.new(self, nil)
    end
    return self._deleted_external_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedInvoiceitem():list() / client:DeletedInvoiceitem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:DeletedInvoiceitem(data)
  local EntityMod = require("entity.deleted_invoiceitem_entity")
  if data == nil then
    if self._deleted_invoiceitem == nil then
      self._deleted_invoiceitem = EntityMod.new(self, nil)
    end
    return self._deleted_invoiceitem
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedPerson():list() / client:DeletedPerson():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:DeletedPerson(data)
  local EntityMod = require("entity.deleted_person_entity")
  if data == nil then
    if self._deleted_person == nil then
      self._deleted_person = EntityMod.new(self, nil)
    end
    return self._deleted_person
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedPlan():list() / client:DeletedPlan():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:DeletedPlan(data)
  local EntityMod = require("entity.deleted_plan_entity")
  if data == nil then
    if self._deleted_plan == nil then
      self._deleted_plan = EntityMod.new(self, nil)
    end
    return self._deleted_plan
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedProductFeature():list() / client:DeletedProductFeature():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:DeletedProductFeature(data)
  local EntityMod = require("entity.deleted_product_feature_entity")
  if data == nil then
    if self._deleted_product_feature == nil then
      self._deleted_product_feature = EntityMod.new(self, nil)
    end
    return self._deleted_product_feature
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedSubscriptionItem():list() / client:DeletedSubscriptionItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:DeletedSubscriptionItem(data)
  local EntityMod = require("entity.deleted_subscription_item_entity")
  if data == nil then
    if self._deleted_subscription_item == nil then
      self._deleted_subscription_item = EntityMod.new(self, nil)
    end
    return self._deleted_subscription_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedWebhookEndpoint():list() / client:DeletedWebhookEndpoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:DeletedWebhookEndpoint(data)
  local EntityMod = require("entity.deleted_webhook_endpoint_entity")
  if data == nil then
    if self._deleted_webhook_endpoint == nil then
      self._deleted_webhook_endpoint = EntityMod.new(self, nil)
    end
    return self._deleted_webhook_endpoint
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Discount():list() / client:Discount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Discount(data)
  local EntityMod = require("entity.discount_entity")
  if data == nil then
    if self._discount == nil then
      self._discount = EntityMod.new(self, nil)
    end
    return self._discount
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Dispute():list() / client:Dispute():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Dispute(data)
  local EntityMod = require("entity.dispute_entity")
  if data == nil then
    if self._dispute == nil then
      self._dispute = EntityMod.new(self, nil)
    end
    return self._dispute
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Domain():list() / client:Domain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Domain(data)
  local EntityMod = require("entity.domain_entity")
  if data == nil then
    if self._domain == nil then
      self._domain = EntityMod.new(self, nil)
    end
    return self._domain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EarlyFraudWarning():list() / client:EarlyFraudWarning():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:EarlyFraudWarning(data)
  local EntityMod = require("entity.early_fraud_warning_entity")
  if data == nil then
    if self._early_fraud_warning == nil then
      self._early_fraud_warning = EntityMod.new(self, nil)
    end
    return self._early_fraud_warning
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EphemeralKey():list() / client:EphemeralKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:EphemeralKey(data)
  local EntityMod = require("entity.ephemeral_key_entity")
  if data == nil then
    if self._ephemeral_key == nil then
      self._ephemeral_key = EntityMod.new(self, nil)
    end
    return self._ephemeral_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Event():list() / client:Event():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Event(data)
  local EntityMod = require("entity.event_entity")
  if data == nil then
    if self._event == nil then
      self._event = EntityMod.new(self, nil)
    end
    return self._event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ExchangeRate():list() / client:ExchangeRate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ExchangeRate(data)
  local EntityMod = require("entity.exchange_rate_entity")
  if data == nil then
    if self._exchange_rate == nil then
      self._exchange_rate = EntityMod.new(self, nil)
    end
    return self._exchange_rate
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ExternalAccount():list() / client:ExternalAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ExternalAccount(data)
  local EntityMod = require("entity.external_account_entity")
  if data == nil then
    if self._external_account == nil then
      self._external_account = EntityMod.new(self, nil)
    end
    return self._external_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Feature():list() / client:Feature():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Feature(data)
  local EntityMod = require("entity.feature_entity")
  if data == nil then
    if self._feature == nil then
      self._feature = EntityMod.new(self, nil)
    end
    return self._feature
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FeedbackOption():list() / client:FeedbackOption():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:FeedbackOption(data)
  local EntityMod = require("entity.feedback_option_entity")
  if data == nil then
    if self._feedback_option == nil then
      self._feedback_option = EntityMod.new(self, nil)
    end
    return self._feedback_option
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:File():list() / client:File():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:File(data)
  local EntityMod = require("entity.file_entity")
  if data == nil then
    if self._file == nil then
      self._file = EntityMod.new(self, nil)
    end
    return self._file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FileLink():list() / client:FileLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:FileLink(data)
  local EntityMod = require("entity.file_link_entity")
  if data == nil then
    if self._file_link == nil then
      self._file_link = EntityMod.new(self, nil)
    end
    return self._file_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FinancialAccount():list() / client:FinancialAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:FinancialAccount(data)
  local EntityMod = require("entity.financial_account_entity")
  if data == nil then
    if self._financial_account == nil then
      self._financial_account = EntityMod.new(self, nil)
    end
    return self._financial_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FinancialAccountFeature():list() / client:FinancialAccountFeature():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:FinancialAccountFeature(data)
  local EntityMod = require("entity.financial_account_feature_entity")
  if data == nil then
    if self._financial_account_feature == nil then
      self._financial_account_feature = EntityMod.new(self, nil)
    end
    return self._financial_account_feature
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FundCashBalance():list() / client:FundCashBalance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:FundCashBalance(data)
  local EntityMod = require("entity.fund_cash_balance_entity")
  if data == nil then
    if self._fund_cash_balance == nil then
      self._fund_cash_balance = EntityMod.new(self, nil)
    end
    return self._fund_cash_balance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FundingInstruction():list() / client:FundingInstruction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:FundingInstruction(data)
  local EntityMod = require("entity.funding_instruction_entity")
  if data == nil then
    if self._funding_instruction == nil then
      self._funding_instruction = EntityMod.new(self, nil)
    end
    return self._funding_instruction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:History():list() / client:History():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:History(data)
  local EntityMod = require("entity.history_entity")
  if data == nil then
    if self._history == nil then
      self._history = EntityMod.new(self, nil)
    end
    return self._history
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InboundTransfer():list() / client:InboundTransfer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:InboundTransfer(data)
  local EntityMod = require("entity.inbound_transfer_entity")
  if data == nil then
    if self._inbound_transfer == nil then
      self._inbound_transfer = EntityMod.new(self, nil)
    end
    return self._inbound_transfer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Install():list() / client:Install():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Install(data)
  local EntityMod = require("entity.install_entity")
  if data == nil then
    if self._install == nil then
      self._install = EntityMod.new(self, nil)
    end
    return self._install
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Invoice():list() / client:Invoice():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Invoice(data)
  local EntityMod = require("entity.invoice_entity")
  if data == nil then
    if self._invoice == nil then
      self._invoice = EntityMod.new(self, nil)
    end
    return self._invoice
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InvoicePayment():list() / client:InvoicePayment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:InvoicePayment(data)
  local EntityMod = require("entity.invoice_payment_entity")
  if data == nil then
    if self._invoice_payment == nil then
      self._invoice_payment = EntityMod.new(self, nil)
    end
    return self._invoice_payment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InvoiceRenderingTemplate():list() / client:InvoiceRenderingTemplate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:InvoiceRenderingTemplate(data)
  local EntityMod = require("entity.invoice_rendering_template_entity")
  if data == nil then
    if self._invoice_rendering_template == nil then
      self._invoice_rendering_template = EntityMod.new(self, nil)
    end
    return self._invoice_rendering_template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Invoiceitem():list() / client:Invoiceitem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Invoiceitem(data)
  local EntityMod = require("entity.invoiceitem_entity")
  if data == nil then
    if self._invoiceitem == nil then
      self._invoiceitem = EntityMod.new(self, nil)
    end
    return self._invoiceitem
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Line():list() / client:Line():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Line(data)
  local EntityMod = require("entity.line_entity")
  if data == nil then
    if self._line == nil then
      self._line = EntityMod.new(self, nil)
    end
    return self._line
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LineItem():list() / client:LineItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:LineItem(data)
  local EntityMod = require("entity.line_item_entity")
  if data == nil then
    if self._line_item == nil then
      self._line_item = EntityMod.new(self, nil)
    end
    return self._line_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LinkedAccount():list() / client:LinkedAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:LinkedAccount(data)
  local EntityMod = require("entity.linked_account_entity")
  if data == nil then
    if self._linked_account == nil then
      self._linked_account = EntityMod.new(self, nil)
    end
    return self._linked_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LinkedAccountOwner():list() / client:LinkedAccountOwner():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:LinkedAccountOwner(data)
  local EntityMod = require("entity.linked_account_owner_entity")
  if data == nil then
    if self._linked_account_owner == nil then
      self._linked_account_owner = EntityMod.new(self, nil)
    end
    return self._linked_account_owner
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Location():list() / client:Location():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Location(data)
  local EntityMod = require("entity.location_entity")
  if data == nil then
    if self._location == nil then
      self._location = EntityMod.new(self, nil)
    end
    return self._location
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LoginLink():list() / client:LoginLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:LoginLink(data)
  local EntityMod = require("entity.login_link_entity")
  if data == nil then
    if self._login_link == nil then
      self._login_link = EntityMod.new(self, nil)
    end
    return self._login_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Mandate():list() / client:Mandate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Mandate(data)
  local EntityMod = require("entity.mandate_entity")
  if data == nil then
    if self._mandate == nil then
      self._mandate = EntityMod.new(self, nil)
    end
    return self._mandate
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Meter():list() / client:Meter():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Meter(data)
  local EntityMod = require("entity.meter_entity")
  if data == nil then
    if self._meter == nil then
      self._meter = EntityMod.new(self, nil)
    end
    return self._meter
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MeterEvent():list() / client:MeterEvent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:MeterEvent(data)
  local EntityMod = require("entity.meter_event_entity")
  if data == nil then
    if self._meter_event == nil then
      self._meter_event = EntityMod.new(self, nil)
    end
    return self._meter_event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MeterEventAdjustment():list() / client:MeterEventAdjustment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:MeterEventAdjustment(data)
  local EntityMod = require("entity.meter_event_adjustment_entity")
  if data == nil then
    if self._meter_event_adjustment == nil then
      self._meter_event_adjustment = EntityMod.new(self, nil)
    end
    return self._meter_event_adjustment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MeterEventSummary():list() / client:MeterEventSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:MeterEventSummary(data)
  local EntityMod = require("entity.meter_event_summary_entity")
  if data == nil then
    if self._meter_event_summary == nil then
      self._meter_event_summary = EntityMod.new(self, nil)
    end
    return self._meter_event_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OnboardingLink():list() / client:OnboardingLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:OnboardingLink(data)
  local EntityMod = require("entity.onboarding_link_entity")
  if data == nil then
    if self._onboarding_link == nil then
      self._onboarding_link = EntityMod.new(self, nil)
    end
    return self._onboarding_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Order():list() / client:Order():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Order(data)
  local EntityMod = require("entity.order_entity")
  if data == nil then
    if self._order == nil then
      self._order = EntityMod.new(self, nil)
    end
    return self._order
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OutboundPayment():list() / client:OutboundPayment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:OutboundPayment(data)
  local EntityMod = require("entity.outbound_payment_entity")
  if data == nil then
    if self._outbound_payment == nil then
      self._outbound_payment = EntityMod.new(self, nil)
    end
    return self._outbound_payment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OutboundTransfer():list() / client:OutboundTransfer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:OutboundTransfer(data)
  local EntityMod = require("entity.outbound_transfer_entity")
  if data == nil then
    if self._outbound_transfer == nil then
      self._outbound_transfer = EntityMod.new(self, nil)
    end
    return self._outbound_transfer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentAttemptRecord():list() / client:PaymentAttemptRecord():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:PaymentAttemptRecord(data)
  local EntityMod = require("entity.payment_attempt_record_entity")
  if data == nil then
    if self._payment_attempt_record == nil then
      self._payment_attempt_record = EntityMod.new(self, nil)
    end
    return self._payment_attempt_record
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentEvaluation():list() / client:PaymentEvaluation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:PaymentEvaluation(data)
  local EntityMod = require("entity.payment_evaluation_entity")
  if data == nil then
    if self._payment_evaluation == nil then
      self._payment_evaluation = EntityMod.new(self, nil)
    end
    return self._payment_evaluation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentIntent():list() / client:PaymentIntent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:PaymentIntent(data)
  local EntityMod = require("entity.payment_intent_entity")
  if data == nil then
    if self._payment_intent == nil then
      self._payment_intent = EntityMod.new(self, nil)
    end
    return self._payment_intent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentIntentAmountDetailsLineItem():list() / client:PaymentIntentAmountDetailsLineItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:PaymentIntentAmountDetailsLineItem(data)
  local EntityMod = require("entity.payment_intent_amount_details_line_item_entity")
  if data == nil then
    if self._payment_intent_amount_details_line_item == nil then
      self._payment_intent_amount_details_line_item = EntityMod.new(self, nil)
    end
    return self._payment_intent_amount_details_line_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentLink():list() / client:PaymentLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:PaymentLink(data)
  local EntityMod = require("entity.payment_link_entity")
  if data == nil then
    if self._payment_link == nil then
      self._payment_link = EntityMod.new(self, nil)
    end
    return self._payment_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentMethod():list() / client:PaymentMethod():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:PaymentMethod(data)
  local EntityMod = require("entity.payment_method_entity")
  if data == nil then
    if self._payment_method == nil then
      self._payment_method = EntityMod.new(self, nil)
    end
    return self._payment_method
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentMethodConfiguration():list() / client:PaymentMethodConfiguration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:PaymentMethodConfiguration(data)
  local EntityMod = require("entity.payment_method_configuration_entity")
  if data == nil then
    if self._payment_method_configuration == nil then
      self._payment_method_configuration = EntityMod.new(self, nil)
    end
    return self._payment_method_configuration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentMethodDomain():list() / client:PaymentMethodDomain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:PaymentMethodDomain(data)
  local EntityMod = require("entity.payment_method_domain_entity")
  if data == nil then
    if self._payment_method_domain == nil then
      self._payment_method_domain = EntityMod.new(self, nil)
    end
    return self._payment_method_domain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentRecord():list() / client:PaymentRecord():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:PaymentRecord(data)
  local EntityMod = require("entity.payment_record_entity")
  if data == nil then
    if self._payment_record == nil then
      self._payment_record = EntityMod.new(self, nil)
    end
    return self._payment_record
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Payout():list() / client:Payout():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Payout(data)
  local EntityMod = require("entity.payout_entity")
  if data == nil then
    if self._payout == nil then
      self._payout = EntityMod.new(self, nil)
    end
    return self._payout
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Person():list() / client:Person():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Person(data)
  local EntityMod = require("entity.person_entity")
  if data == nil then
    if self._person == nil then
      self._person = EntityMod.new(self, nil)
    end
    return self._person
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PersonalizationDesign():list() / client:PersonalizationDesign():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:PersonalizationDesign(data)
  local EntityMod = require("entity.personalization_design_entity")
  if data == nil then
    if self._personalization_design == nil then
      self._personalization_design = EntityMod.new(self, nil)
    end
    return self._personalization_design
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PhysicalBundle():list() / client:PhysicalBundle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:PhysicalBundle(data)
  local EntityMod = require("entity.physical_bundle_entity")
  if data == nil then
    if self._physical_bundle == nil then
      self._physical_bundle = EntityMod.new(self, nil)
    end
    return self._physical_bundle
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Plan():list() / client:Plan():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Plan(data)
  local EntityMod = require("entity.plan_entity")
  if data == nil then
    if self._plan == nil then
      self._plan = EntityMod.new(self, nil)
    end
    return self._plan
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Price():list() / client:Price():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Price(data)
  local EntityMod = require("entity.price_entity")
  if data == nil then
    if self._price == nil then
      self._price = EntityMod.new(self, nil)
    end
    return self._price
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Product():list() / client:Product():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Product(data)
  local EntityMod = require("entity.product_entity")
  if data == nil then
    if self._product == nil then
      self._product = EntityMod.new(self, nil)
    end
    return self._product
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProductFeature():list() / client:ProductFeature():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ProductFeature(data)
  local EntityMod = require("entity.product_feature_entity")
  if data == nil then
    if self._product_feature == nil then
      self._product_feature = EntityMod.new(self, nil)
    end
    return self._product_feature
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PromotionCode():list() / client:PromotionCode():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:PromotionCode(data)
  local EntityMod = require("entity.promotion_code_entity")
  if data == nil then
    if self._promotion_code == nil then
      self._promotion_code = EntityMod.new(self, nil)
    end
    return self._promotion_code
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Quote():list() / client:Quote():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Quote(data)
  local EntityMod = require("entity.quote_entity")
  if data == nil then
    if self._quote == nil then
      self._quote = EntityMod.new(self, nil)
    end
    return self._quote
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:QuoteComputedUpfrontLineItem():list() / client:QuoteComputedUpfrontLineItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:QuoteComputedUpfrontLineItem(data)
  local EntityMod = require("entity.quote_computed_upfront_line_item_entity")
  if data == nil then
    if self._quote_computed_upfront_line_item == nil then
      self._quote_computed_upfront_line_item = EntityMod.new(self, nil)
    end
    return self._quote_computed_upfront_line_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:QuotePdf():list() / client:QuotePdf():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:QuotePdf(data)
  local EntityMod = require("entity.quote_pdf_entity")
  if data == nil then
    if self._quote_pdf == nil then
      self._quote_pdf = EntityMod.new(self, nil)
    end
    return self._quote_pdf
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Reader():list() / client:Reader():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Reader(data)
  local EntityMod = require("entity.reader_entity")
  if data == nil then
    if self._reader == nil then
      self._reader = EntityMod.new(self, nil)
    end
    return self._reader
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReceivedCredit():list() / client:ReceivedCredit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ReceivedCredit(data)
  local EntityMod = require("entity.received_credit_entity")
  if data == nil then
    if self._received_credit == nil then
      self._received_credit = EntityMod.new(self, nil)
    end
    return self._received_credit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReceivedDebit():list() / client:ReceivedDebit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ReceivedDebit(data)
  local EntityMod = require("entity.received_debit_entity")
  if data == nil then
    if self._received_debit == nil then
      self._received_debit = EntityMod.new(self, nil)
    end
    return self._received_debit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Refund():list() / client:Refund():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Refund(data)
  local EntityMod = require("entity.refund_entity")
  if data == nil then
    if self._refund == nil then
      self._refund = EntityMod.new(self, nil)
    end
    return self._refund
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Registration():list() / client:Registration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Registration(data)
  local EntityMod = require("entity.registration_entity")
  if data == nil then
    if self._registration == nil then
      self._registration = EntityMod.new(self, nil)
    end
    return self._registration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReportRun():list() / client:ReportRun():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ReportRun(data)
  local EntityMod = require("entity.report_run_entity")
  if data == nil then
    if self._report_run == nil then
      self._report_run = EntityMod.new(self, nil)
    end
    return self._report_run
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReportType():list() / client:ReportType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ReportType(data)
  local EntityMod = require("entity.report_type_entity")
  if data == nil then
    if self._report_type == nil then
      self._report_type = EntityMod.new(self, nil)
    end
    return self._report_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Request():list() / client:Request():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Request(data)
  local EntityMod = require("entity.request_entity")
  if data == nil then
    if self._request == nil then
      self._request = EntityMod.new(self, nil)
    end
    return self._request
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Reversal():list() / client:Reversal():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Reversal(data)
  local EntityMod = require("entity.reversal_entity")
  if data == nil then
    if self._reversal == nil then
      self._reversal = EntityMod.new(self, nil)
    end
    return self._reversal
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Review():list() / client:Review():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Review(data)
  local EntityMod = require("entity.review_entity")
  if data == nil then
    if self._review == nil then
      self._review = EntityMod.new(self, nil)
    end
    return self._review
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScheduledQueryRun():list() / client:ScheduledQueryRun():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ScheduledQueryRun(data)
  local EntityMod = require("entity.scheduled_query_run_entity")
  if data == nil then
    if self._scheduled_query_run == nil then
      self._scheduled_query_run = EntityMod.new(self, nil)
    end
    return self._scheduled_query_run
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Search():list() / client:Search():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Search(data)
  local EntityMod = require("entity.search_entity")
  if data == nil then
    if self._search == nil then
      self._search = EntityMod.new(self, nil)
    end
    return self._search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Secret():list() / client:Secret():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Secret(data)
  local EntityMod = require("entity.secret_entity")
  if data == nil then
    if self._secret == nil then
      self._secret = EntityMod.new(self, nil)
    end
    return self._secret
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Session():list() / client:Session():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Session(data)
  local EntityMod = require("entity.session_entity")
  if data == nil then
    if self._session == nil then
      self._session = EntityMod.new(self, nil)
    end
    return self._session
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Setting():list() / client:Setting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Setting(data)
  local EntityMod = require("entity.setting_entity")
  if data == nil then
    if self._setting == nil then
      self._setting = EntityMod.new(self, nil)
    end
    return self._setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Settlement():list() / client:Settlement():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Settlement(data)
  local EntityMod = require("entity.settlement_entity")
  if data == nil then
    if self._settlement == nil then
      self._settlement = EntityMod.new(self, nil)
    end
    return self._settlement
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SetupAttempt():list() / client:SetupAttempt():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:SetupAttempt(data)
  local EntityMod = require("entity.setup_attempt_entity")
  if data == nil then
    if self._setup_attempt == nil then
      self._setup_attempt = EntityMod.new(self, nil)
    end
    return self._setup_attempt
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SetupIntent():list() / client:SetupIntent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:SetupIntent(data)
  local EntityMod = require("entity.setup_intent_entity")
  if data == nil then
    if self._setup_intent == nil then
      self._setup_intent = EntityMod.new(self, nil)
    end
    return self._setup_intent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ShippingRate():list() / client:ShippingRate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ShippingRate(data)
  local EntityMod = require("entity.shipping_rate_entity")
  if data == nil then
    if self._shipping_rate == nil then
      self._shipping_rate = EntityMod.new(self, nil)
    end
    return self._shipping_rate
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SigmaApiQuery():list() / client:SigmaApiQuery():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:SigmaApiQuery(data)
  local EntityMod = require("entity.sigma_api_query_entity")
  if data == nil then
    if self._sigma_api_query == nil then
      self._sigma_api_query = EntityMod.new(self, nil)
    end
    return self._sigma_api_query
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Source():list() / client:Source():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Source(data)
  local EntityMod = require("entity.source_entity")
  if data == nil then
    if self._source == nil then
      self._source = EntityMod.new(self, nil)
    end
    return self._source
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SourceMandateNotification():list() / client:SourceMandateNotification():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:SourceMandateNotification(data)
  local EntityMod = require("entity.source_mandate_notification_entity")
  if data == nil then
    if self._source_mandate_notification == nil then
      self._source_mandate_notification = EntityMod.new(self, nil)
    end
    return self._source_mandate_notification
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SourceTransaction():list() / client:SourceTransaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:SourceTransaction(data)
  local EntityMod = require("entity.source_transaction_entity")
  if data == nil then
    if self._source_transaction == nil then
      self._source_transaction = EntityMod.new(self, nil)
    end
    return self._source_transaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Subscription():list() / client:Subscription():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Subscription(data)
  local EntityMod = require("entity.subscription_entity")
  if data == nil then
    if self._subscription == nil then
      self._subscription = EntityMod.new(self, nil)
    end
    return self._subscription
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionItem():list() / client:SubscriptionItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:SubscriptionItem(data)
  local EntityMod = require("entity.subscription_item_entity")
  if data == nil then
    if self._subscription_item == nil then
      self._subscription_item = EntityMod.new(self, nil)
    end
    return self._subscription_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionSchedule():list() / client:SubscriptionSchedule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:SubscriptionSchedule(data)
  local EntityMod = require("entity.subscription_schedule_entity")
  if data == nil then
    if self._subscription_schedule == nil then
      self._subscription_schedule = EntityMod.new(self, nil)
    end
    return self._subscription_schedule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Supplier():list() / client:Supplier():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Supplier(data)
  local EntityMod = require("entity.supplier_entity")
  if data == nil then
    if self._supplier == nil then
      self._supplier = EntityMod.new(self, nil)
    end
    return self._supplier
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TaxCode():list() / client:TaxCode():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:TaxCode(data)
  local EntityMod = require("entity.tax_code_entity")
  if data == nil then
    if self._tax_code == nil then
      self._tax_code = EntityMod.new(self, nil)
    end
    return self._tax_code
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TaxId():list() / client:TaxId():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:TaxId(data)
  local EntityMod = require("entity.tax_id_entity")
  if data == nil then
    if self._tax_id == nil then
      self._tax_id = EntityMod.new(self, nil)
    end
    return self._tax_id
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TaxRate():list() / client:TaxRate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:TaxRate(data)
  local EntityMod = require("entity.tax_rate_entity")
  if data == nil then
    if self._tax_rate == nil then
      self._tax_rate = EntityMod.new(self, nil)
    end
    return self._tax_rate
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TestClock():list() / client:TestClock():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:TestClock(data)
  local EntityMod = require("entity.test_clock_entity")
  if data == nil then
    if self._test_clock == nil then
      self._test_clock = EntityMod.new(self, nil)
    end
    return self._test_clock
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Token():list() / client:Token():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Token(data)
  local EntityMod = require("entity.token_entity")
  if data == nil then
    if self._token == nil then
      self._token = EntityMod.new(self, nil)
    end
    return self._token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Topup():list() / client:Topup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Topup(data)
  local EntityMod = require("entity.topup_entity")
  if data == nil then
    if self._topup == nil then
      self._topup = EntityMod.new(self, nil)
    end
    return self._topup
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Transaction():list() / client:Transaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Transaction(data)
  local EntityMod = require("entity.transaction_entity")
  if data == nil then
    if self._transaction == nil then
      self._transaction = EntityMod.new(self, nil)
    end
    return self._transaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TransactionEntry():list() / client:TransactionEntry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:TransactionEntry(data)
  local EntityMod = require("entity.transaction_entry_entity")
  if data == nil then
    if self._transaction_entry == nil then
      self._transaction_entry = EntityMod.new(self, nil)
    end
    return self._transaction_entry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Transfer():list() / client:Transfer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:Transfer(data)
  local EntityMod = require("entity.transfer_entity")
  if data == nil then
    if self._transfer == nil then
      self._transfer = EntityMod.new(self, nil)
    end
    return self._transfer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TrialOffer():list() / client:TrialOffer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:TrialOffer(data)
  local EntityMod = require("entity.trial_offer_entity")
  if data == nil then
    if self._trial_offer == nil then
      self._trial_offer = EntityMod.new(self, nil)
    end
    return self._trial_offer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ValueList():list() / client:ValueList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ValueList(data)
  local EntityMod = require("entity.value_list_entity")
  if data == nil then
    if self._value_list == nil then
      self._value_list = EntityMod.new(self, nil)
    end
    return self._value_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ValueListItem():list() / client:ValueListItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:ValueListItem(data)
  local EntityMod = require("entity.value_list_item_entity")
  if data == nil then
    if self._value_list_item == nil then
      self._value_list_item = EntityMod.new(self, nil)
    end
    return self._value_list_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:VerificationReport():list() / client:VerificationReport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:VerificationReport(data)
  local EntityMod = require("entity.verification_report_entity")
  if data == nil then
    if self._verification_report == nil then
      self._verification_report = EntityMod.new(self, nil)
    end
    return self._verification_report
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:VerificationSession():list() / client:VerificationSession():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:VerificationSession(data)
  local EntityMod = require("entity.verification_session_entity")
  if data == nil then
    if self._verification_session == nil then
      self._verification_session = EntityMod.new(self, nil)
    end
    return self._verification_session
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WebhookEndpoint():list() / client:WebhookEndpoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function StripeSDK:WebhookEndpoint(data)
  local EntityMod = require("entity.webhook_endpoint_entity")
  if data == nil then
    if self._webhook_endpoint == nil then
      self._webhook_endpoint = EntityMod.new(self, nil)
    end
    return self._webhook_endpoint
  end
  return EntityMod.new(self, data)
end




function StripeSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = StripeSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return StripeSDK
