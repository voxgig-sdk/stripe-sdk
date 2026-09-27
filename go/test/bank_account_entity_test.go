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

func TestBankAccountEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.BankAccount(nil)
		if ent == nil {
			t.Fatal("expected non-nil BankAccountEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"bank_account": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.BankAccount(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.BankAccount(nil).Stream("list", nil, nil) {
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
		setup := bank_accountBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "bank_account." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set STRIPE_TEST_BANK_ACCOUNT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		bankAccountRef01Ent := client.BankAccount(nil)
		bankAccountRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "bank_account"}), "bank_account_ref01"))
		bankAccountRef01Data["customer_id"] = setup.idmap["customer01"]

		bankAccountRef01DataResult, err := bankAccountRef01Ent.Create(bankAccountRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		bankAccountRef01Data = core.ToMapAny(entityData(bankAccountRef01DataResult))
		if bankAccountRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if bankAccountRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		bankAccountRef01Match := map[string]any{
			"customer_id": setup.idmap["customer01"],
		}

		bankAccountRef01ListResult, err := bankAccountRef01Ent.List(bankAccountRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		bankAccountRef01List, bankAccountRef01ListOk := bankAccountRef01ListResult.([]any)
		if !bankAccountRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", bankAccountRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(bankAccountRef01List), map[string]any{"id": bankAccountRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		bankAccountRef01MatchDt0 := map[string]any{
			"id": bankAccountRef01Data["id"],
		}
		bankAccountRef01DataDt0Loaded, err := bankAccountRef01Ent.Load(bankAccountRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		bankAccountRef01DataDt0LoadResult := core.ToMapAny(entityData(bankAccountRef01DataDt0Loaded))
		if bankAccountRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if bankAccountRef01DataDt0LoadResult["id"] != bankAccountRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		bankAccountRef01MatchRm0 := map[string]any{
			"id": bankAccountRef01Data["id"],
		}
		_, err = bankAccountRef01Ent.Remove(bankAccountRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		bankAccountRef01MatchRt0 := map[string]any{
			"customer_id": setup.idmap["customer01"],
		}

		bankAccountRef01ListRt0Result, err := bankAccountRef01Ent.List(bankAccountRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		bankAccountRef01ListRt0, bankAccountRef01ListRt0Ok := bankAccountRef01ListRt0Result.([]any)
		if !bankAccountRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", bankAccountRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(bankAccountRef01ListRt0), map[string]any{"id": bankAccountRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func bank_accountBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "bank_account", "BankAccountTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read bank_account test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse bank_account test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"bank_account01", "bank_account02", "bank_account03", "customer01", "customer02", "customer03", "source01", "source02", "source03"},
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
	entidEnvRaw := os.Getenv("STRIPE_TEST_BANK_ACCOUNT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"STRIPE_TEST_BANK_ACCOUNT_ENTID": idmap,
		"STRIPE_TEST_LIVE":      "FALSE",
		"STRIPE_TEST_EXPLAIN":   "FALSE",
		"STRIPE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["STRIPE_TEST_BANK_ACCOUNT_ENTID"])
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
