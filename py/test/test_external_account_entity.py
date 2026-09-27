# ExternalAccount entity test

import json
import os
import time

import pytest

from stripe_sdk.utility.voxgig_struct import voxgig_struct as vs
from stripe_sdk import StripeSDK
from stripe_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestExternalAccountEntity:

    def test_should_create_instance(self):
        testsdk = StripeSDK.test(None, None)
        ent = testsdk.ExternalAccount(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "external_account": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = StripeSDK.test(seed, None)
        seen = list(base.ExternalAccount(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from stripe_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = StripeSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.ExternalAccount(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _external_account_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "external_account." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set STRIPE_TEST_EXTERNAL_ACCOUNT_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        external_account_ref01_ent = client.ExternalAccount(None)
        external_account_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.external_account"), "external_account_ref01"))
        external_account_ref01_data["account_id"] = setup["idmap"]["account01"]

        external_account_ref01_data = helpers.to_map(runner.entity_data(external_account_ref01_ent.create(external_account_ref01_data, None)))
        assert external_account_ref01_data is not None
        assert external_account_ref01_data["id"] is not None

        # LIST
        external_account_ref01_match = {
            "account_id": setup["idmap"]["account01"],
        }

        external_account_ref01_list_result = external_account_ref01_ent.list(external_account_ref01_match, None)
        assert isinstance(external_account_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(external_account_ref01_list_result),
            {"id": external_account_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # LOAD
        external_account_ref01_match_dt0 = {
            "id": external_account_ref01_data["id"],
        }
        external_account_ref01_data_dt0_loaded = external_account_ref01_ent.load(external_account_ref01_match_dt0, None)
        external_account_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(external_account_ref01_data_dt0_loaded))
        assert external_account_ref01_data_dt0_load_result is not None
        assert external_account_ref01_data_dt0_load_result["id"] == external_account_ref01_data["id"]



def _external_account_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/external_account/ExternalAccountTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = StripeSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["external_account01", "external_account02", "external_account03", "account01", "account02", "account03"],
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
        "STRIPE_TEST_EXTERNAL_ACCOUNT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "STRIPE_TEST_EXTERNAL_ACCOUNT_ENTID": idmap,
        "STRIPE_TEST_LIVE": "FALSE",
        "STRIPE_TEST_EXPLAIN": "FALSE",
        "STRIPE_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("STRIPE_TEST_EXTERNAL_ACCOUNT_ENTID"))
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
