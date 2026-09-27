<?php
declare(strict_types=1);

// FeedbackOption entity test

require_once __DIR__ . '/../stripe_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class FeedbackOptionEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = StripeSDK::test(null, null);
        $ent = $testsdk->FeedbackOption(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "feedback_option" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = StripeSDK::test($seed, null);
        $seen = iterator_to_array($base->FeedbackOption(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = StripeConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = StripeSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->FeedbackOption(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = feedback_option_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "feedback_option." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set STRIPE_TEST_FEEDBACK_OPTION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $feedback_option_ref01_ent = $client->FeedbackOption(null);
        $feedback_option_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.feedback_option"), "feedback_option_ref01"));

        $feedback_option_ref01_data_result = $feedback_option_ref01_ent->create($feedback_option_ref01_data, null);
        $feedback_option_ref01_data = Helpers::to_map(is_object($feedback_option_ref01_data_result) && method_exists($feedback_option_ref01_data_result, 'data_get') ? $feedback_option_ref01_data_result->data_get() : $feedback_option_ref01_data_result);
        $this->assertNotNull($feedback_option_ref01_data);
        $this->assertNotNull($feedback_option_ref01_data["id"]);

        // LIST
        $feedback_option_ref01_match = [];

        $feedback_option_ref01_list_result = $feedback_option_ref01_ent->list($feedback_option_ref01_match, null);
        $this->assertIsArray($feedback_option_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($feedback_option_ref01_list_result),
            ["id" => $feedback_option_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // LOAD
        $feedback_option_ref01_match_dt0 = [
            "id" => $feedback_option_ref01_data["id"],
        ];
        $feedback_option_ref01_data_dt0_loaded = $feedback_option_ref01_ent->load($feedback_option_ref01_match_dt0, null);
        $feedback_option_ref01_data_dt0_load_result = Helpers::to_map(is_object($feedback_option_ref01_data_dt0_loaded) && method_exists($feedback_option_ref01_data_dt0_loaded, 'data_get') ? $feedback_option_ref01_data_dt0_loaded->data_get() : $feedback_option_ref01_data_dt0_loaded);
        $this->assertNotNull($feedback_option_ref01_data_dt0_load_result);
        $this->assertEquals($feedback_option_ref01_data_dt0_load_result["id"], $feedback_option_ref01_data["id"]);

    }
}

function feedback_option_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/feedback_option/FeedbackOptionTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = StripeSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["feedback_option01", "feedback_option02", "feedback_option03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("STRIPE_TEST_FEEDBACK_OPTION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "STRIPE_TEST_FEEDBACK_OPTION_ENTID" => $idmap,
        "STRIPE_TEST_LIVE" => "FALSE",
        "STRIPE_TEST_EXPLAIN" => "FALSE",
        "STRIPE_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["STRIPE_TEST_FEEDBACK_OPTION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["STRIPE_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["STRIPE_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new StripeSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["STRIPE_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["STRIPE_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
