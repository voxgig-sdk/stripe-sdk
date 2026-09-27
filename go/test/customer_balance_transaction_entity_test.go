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

func TestCustomerBalanceTransactionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomerBalanceTransaction(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomerBalanceTransactionEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := customer_balance_transactionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "customer_balance_transaction." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set STRIPE_TEST_CUSTOMER_BALANCE_TRANSACTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		customerBalanceTransactionRef01Ent := client.CustomerBalanceTransaction(nil)
		customerBalanceTransactionRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "customer_balance_transaction"}), "customer_balance_transaction_ref01"))
		customerBalanceTransactionRef01Data["customer"] = setup.idmap["customer01"]
		customerBalanceTransactionRef01Data["customer_id"] = setup.idmap["customer01"]

		customerBalanceTransactionRef01DataResult, err := customerBalanceTransactionRef01Ent.Create(customerBalanceTransactionRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		customerBalanceTransactionRef01Data = core.ToMapAny(entityData(customerBalanceTransactionRef01DataResult))
		if customerBalanceTransactionRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if customerBalanceTransactionRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		customerBalanceTransactionRef01MatchDt0 := map[string]any{
			"id": customerBalanceTransactionRef01Data["id"],
		}
		customerBalanceTransactionRef01DataDt0Loaded, err := customerBalanceTransactionRef01Ent.Load(customerBalanceTransactionRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		customerBalanceTransactionRef01DataDt0LoadResult := core.ToMapAny(entityData(customerBalanceTransactionRef01DataDt0Loaded))
		if customerBalanceTransactionRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if customerBalanceTransactionRef01DataDt0LoadResult["id"] != customerBalanceTransactionRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func customer_balance_transactionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "customer_balance_transaction", "CustomerBalanceTransactionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read customer_balance_transaction test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse customer_balance_transaction test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"customer_balance_transaction01", "customer_balance_transaction02", "customer_balance_transaction03", "customer01", "customer02", "customer03"},
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
	entidEnvRaw := os.Getenv("STRIPE_TEST_CUSTOMER_BALANCE_TRANSACTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"STRIPE_TEST_CUSTOMER_BALANCE_TRANSACTION_ENTID": idmap,
		"STRIPE_TEST_LIVE":      "FALSE",
		"STRIPE_TEST_EXPLAIN":   "FALSE",
		"STRIPE_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["STRIPE_TEST_CUSTOMER_BALANCE_TRANSACTION_ENTID"])
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
