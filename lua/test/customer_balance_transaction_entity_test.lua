-- CustomerBalanceTransaction entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("stripe_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("CustomerBalanceTransactionEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:CustomerBalanceTransaction(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = customer_balance_transaction_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "customer_balance_transaction." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set STRIPE_TEST_CUSTOMER_BALANCE_TRANSACTION_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local customer_balance_transaction_ref01_ent = client:CustomerBalanceTransaction(nil)
    local customer_balance_transaction_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.customer_balance_transaction"), "customer_balance_transaction_ref01"))
    customer_balance_transaction_ref01_data["customer"] = setup.idmap["customer01"]
    customer_balance_transaction_ref01_data["customer_id"] = setup.idmap["customer01"]

    local customer_balance_transaction_ref01_data_result, err = customer_balance_transaction_ref01_ent:create(customer_balance_transaction_ref01_data, nil)
    assert.is_nil(err)
    customer_balance_transaction_ref01_data = helpers.to_map(type(customer_balance_transaction_ref01_data_result) == 'table' and customer_balance_transaction_ref01_data_result.data_get and customer_balance_transaction_ref01_data_result:data_get() or customer_balance_transaction_ref01_data_result)
    assert.is_not_nil(customer_balance_transaction_ref01_data)
    assert.is_not_nil(customer_balance_transaction_ref01_data["id"])

    -- LOAD
    local customer_balance_transaction_ref01_match_dt0 = {
      id = customer_balance_transaction_ref01_data["id"],
    }
    local customer_balance_transaction_ref01_data_dt0_loaded, err = customer_balance_transaction_ref01_ent:load(customer_balance_transaction_ref01_match_dt0, nil)
    assert.is_nil(err)
    local customer_balance_transaction_ref01_data_dt0_load_result = helpers.to_map(type(customer_balance_transaction_ref01_data_dt0_loaded) == 'table' and customer_balance_transaction_ref01_data_dt0_loaded.data_get and customer_balance_transaction_ref01_data_dt0_loaded:data_get() or customer_balance_transaction_ref01_data_dt0_loaded)
    assert.is_not_nil(customer_balance_transaction_ref01_data_dt0_load_result)
    assert.are.equal(customer_balance_transaction_ref01_data_dt0_load_result["id"], customer_balance_transaction_ref01_data["id"])

  end)
end)

function customer_balance_transaction_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/customer_balance_transaction/CustomerBalanceTransactionTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read customer_balance_transaction test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "customer_balance_transaction01", "customer_balance_transaction02", "customer_balance_transaction03", "customer01", "customer02", "customer03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("STRIPE_TEST_CUSTOMER_BALANCE_TRANSACTION_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["STRIPE_TEST_CUSTOMER_BALANCE_TRANSACTION_ENTID"] = idmap,
    ["STRIPE_TEST_LIVE"] = "FALSE",
    ["STRIPE_TEST_EXPLAIN"] = "FALSE",
    ["STRIPE_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["STRIPE_TEST_CUSTOMER_BALANCE_TRANSACTION_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["STRIPE_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["STRIPE_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["STRIPE_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["STRIPE_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
