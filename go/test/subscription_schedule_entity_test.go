package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/stripe-sdk/go"
	"github.com/voxgig-sdk/stripe-sdk/go/core"

	vs "github.com/voxgig-sdk/stripe-sdk/go/utility/struct"
)

func TestSubscriptionScheduleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SubscriptionSchedule(nil)
		if ent == nil {
			t.Fatal("expected non-nil SubscriptionScheduleEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"subscription_schedule": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.SubscriptionSchedule(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.SubscriptionSchedule(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := subscription_scheduleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "subscription_schedule." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set STRIPE_TEST_SUBSCRIPTION_SCHEDULE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		subscriptionScheduleRef01Ent := client.SubscriptionSchedule(nil)
		subscriptionScheduleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "subscription_schedule"}), "subscription_schedule_ref01"))

		subscriptionScheduleRef01DataResult, err := subscriptionScheduleRef01Ent.Create(subscriptionScheduleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		subscriptionScheduleRef01Data = core.ToMapAny(entityData(subscriptionScheduleRef01DataResult))
		if subscriptionScheduleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if subscriptionScheduleRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		subscriptionScheduleRef01Match := map[string]any{}

		subscriptionScheduleRef01ListResult, err := subscriptionScheduleRef01Ent.List(subscriptionScheduleRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		subscriptionScheduleRef01List, subscriptionScheduleRef01ListOk := subscriptionScheduleRef01ListResult.([]any)
		if !subscriptionScheduleRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", subscriptionScheduleRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(subscriptionScheduleRef01List), map[string]any{"id": subscriptionScheduleRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		subscriptionScheduleRef01MatchDt0 := map[string]any{
			"id": subscriptionScheduleRef01Data["id"],
		}
		subscriptionScheduleRef01DataDt0Loaded, err := subscriptionScheduleRef01Ent.Load(subscriptionScheduleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		subscriptionScheduleRef01DataDt0LoadResult := core.ToMapAny(entityData(subscriptionScheduleRef01DataDt0Loaded))
		if subscriptionScheduleRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if subscriptionScheduleRef01DataDt0LoadResult["id"] != subscriptionScheduleRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func subscription_scheduleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "subscription_schedule", "SubscriptionScheduleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read subscription_schedule test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse subscription_schedule test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"subscription_schedule01", "subscription_schedule02", "subscription_schedule03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("STRIPE_TEST_SUBSCRIPTION_SCHEDULE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"STRIPE_TEST_SUBSCRIPTION_SCHEDULE_ENTID": idmap,
		"STRIPE_TEST_LIVE":      "FALSE",
		"STRIPE_TEST_EXPLAIN":   "FALSE",
		"STRIPE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["STRIPE_TEST_SUBSCRIPTION_SCHEDULE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["STRIPE_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["STRIPE_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewStripeSDK(core.ToMapAny(mergedOpts))
	}

	live := env["STRIPE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["STRIPE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
