-- TaxId entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("stripe_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("TaxIdEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:TaxId(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["tax_id"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:TaxId(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:TaxId(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = tax_id_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "tax_id." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set STRIPE_TEST_TAX_ID_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local tax_id_ref01_ent = client:TaxId(nil)
    local tax_id_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.tax_id"), "tax_id_ref01"))
    tax_id_ref01_data["customer_id"] = setup.idmap["customer01"]

    local tax_id_ref01_data_result, err = tax_id_ref01_ent:create(tax_id_ref01_data, nil)
    assert.is_nil(err)
    tax_id_ref01_data = helpers.to_map(type(tax_id_ref01_data_result) == 'table' and tax_id_ref01_data_result.data_get and tax_id_ref01_data_result:data_get() or tax_id_ref01_data_result)
    assert.is_not_nil(tax_id_ref01_data)
    assert.is_not_nil(tax_id_ref01_data["id"])

    -- LIST
    local tax_id_ref01_match = {}

    local tax_id_ref01_list_result, err = tax_id_ref01_ent:list(tax_id_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(tax_id_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(tax_id_ref01_list_result),
      { id = tax_id_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- LOAD
    local tax_id_ref01_match_dt0 = {
      id = tax_id_ref01_data["id"],
    }
    local tax_id_ref01_data_dt0_loaded, err = tax_id_ref01_ent:load(tax_id_ref01_match_dt0, nil)
    assert.is_nil(err)
    local tax_id_ref01_data_dt0_load_result = helpers.to_map(type(tax_id_ref01_data_dt0_loaded) == 'table' and tax_id_ref01_data_dt0_loaded.data_get and tax_id_ref01_data_dt0_loaded:data_get() or tax_id_ref01_data_dt0_loaded)
    assert.is_not_nil(tax_id_ref01_data_dt0_load_result)
    assert.are.equal(tax_id_ref01_data_dt0_load_result["id"], tax_id_ref01_data["id"])

    -- REMOVE
    local tax_id_ref01_match_rm0 = {
      id = tax_id_ref01_data["id"],
    }
    local _, err = tax_id_ref01_ent:remove(tax_id_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local tax_id_ref01_match_rt0 = {}

    local tax_id_ref01_list_rt0_result, err = tax_id_ref01_ent:list(tax_id_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(tax_id_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(tax_id_ref01_list_rt0_result),
      { id = tax_id_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function tax_id_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/tax_id/TaxIdTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read tax_id test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "tax_id01", "tax_id02", "tax_id03", "customer01", "customer02", "customer03" },
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
  local entid_env_raw = os.getenv("STRIPE_TEST_TAX_ID_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["STRIPE_TEST_TAX_ID_ENTID"] = idmap,
    ["STRIPE_TEST_LIVE"] = "FALSE",
    ["STRIPE_TEST_EXPLAIN"] = "FALSE",
    ["STRIPE_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["STRIPE_TEST_TAX_ID_ENTID"])
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
