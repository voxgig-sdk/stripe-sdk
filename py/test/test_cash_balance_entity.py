# CashBalance entity test

import json
import os
import time

import pytest

from stripe_sdk.utility.voxgig_struct import voxgig_struct as vs
from stripe_sdk import StripeSDK
from stripe_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestCashBalanceEntity:

    def test_should_create_instance(self):
        testsdk = StripeSDK.test(None, None)
        ent = testsdk.CashBalance(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _cash_balance_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "cash_balance." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set STRIPE_TEST_CASH_BALANCE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        cash_balance_ref01_ent = client.CashBalance(None)
        cash_balance_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.cash_balance"), "cash_balance_ref01"))
        cash_balance_ref01_data["customer_id"] = setup["idmap"]["customer01"]

        cash_balance_ref01_data = helpers.to_map(runner.entity_data(cash_balance_ref01_ent.create(cash_balance_ref01_data, None)))
        assert cash_balance_ref01_data is not None

        # LOAD
        cash_balance_ref01_match_dt0 = {}
        cash_balance_ref01_data_dt0_loaded = cash_balance_ref01_ent.load(cash_balance_ref01_match_dt0, None)
        assert cash_balance_ref01_data_dt0_loaded is not None



def _cash_balance_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/cash_balance/CashBalanceTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = StripeSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["cash_balance01", "cash_balance02", "cash_balance03", "customer01", "customer02", "customer03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "STRIPE_TEST_CASH_BALANCE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "STRIPE_TEST_CASH_BALANCE_ENTID": idmap,
        "STRIPE_TEST_LIVE": "FALSE",
        "STRIPE_TEST_EXPLAIN": "FALSE",
        "STRIPE_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("STRIPE_TEST_CASH_BALANCE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("STRIPE_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("STRIPE_APIKEY"),
            },
            extra or {},
        ])
        client = StripeSDK(helpers.to_map(merged_opts))

    _live = env.get("STRIPE_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("STRIPE_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
