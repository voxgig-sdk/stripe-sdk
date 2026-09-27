package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/stripe-sdk/go/utility/struct"
)

type StripeSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewStripeSDK(options map[string]any) *StripeSDK {
	sdk := &StripeSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *StripeSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *StripeSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *StripeSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *StripeSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *StripeSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *StripeSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *StripeSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("StripeSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *StripeSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *StripeSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("StripeSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Account returns a Account entity bound to this client.
// Idiomatic usage: client.Account(nil).List(nil, nil) or
// client.Account(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Account(data map[string]any) StripeEntity {
	return NewAccountEntityFunc(sdk, data)
}


// AccountLink returns a AccountLink entity bound to this client.
// Idiomatic usage: client.AccountLink(nil).List(nil, nil) or
// client.AccountLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) AccountLink(data map[string]any) StripeEntity {
	return NewAccountLinkEntityFunc(sdk, data)
}


// AccountOwner returns a AccountOwner entity bound to this client.
// Idiomatic usage: client.AccountOwner(nil).List(nil, nil) or
// client.AccountOwner(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) AccountOwner(data map[string]any) StripeEntity {
	return NewAccountOwnerEntityFunc(sdk, data)
}


// AccountSession returns a AccountSession entity bound to this client.
// Idiomatic usage: client.AccountSession(nil).List(nil, nil) or
// client.AccountSession(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) AccountSession(data map[string]any) StripeEntity {
	return NewAccountSessionEntityFunc(sdk, data)
}


// ActiveEntitlement returns a ActiveEntitlement entity bound to this client.
// Idiomatic usage: client.ActiveEntitlement(nil).List(nil, nil) or
// client.ActiveEntitlement(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ActiveEntitlement(data map[string]any) StripeEntity {
	return NewActiveEntitlementEntityFunc(sdk, data)
}


// Alert returns a Alert entity bound to this client.
// Idiomatic usage: client.Alert(nil).List(nil, nil) or
// client.Alert(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Alert(data map[string]any) StripeEntity {
	return NewAlertEntityFunc(sdk, data)
}


// ApplePayDomain returns a ApplePayDomain entity bound to this client.
// Idiomatic usage: client.ApplePayDomain(nil).List(nil, nil) or
// client.ApplePayDomain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ApplePayDomain(data map[string]any) StripeEntity {
	return NewApplePayDomainEntityFunc(sdk, data)
}


// ApplicationFee returns a ApplicationFee entity bound to this client.
// Idiomatic usage: client.ApplicationFee(nil).List(nil, nil) or
// client.ApplicationFee(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ApplicationFee(data map[string]any) StripeEntity {
	return NewApplicationFeeEntityFunc(sdk, data)
}


// Association returns a Association entity bound to this client.
// Idiomatic usage: client.Association(nil).List(nil, nil) or
// client.Association(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Association(data map[string]any) StripeEntity {
	return NewAssociationEntityFunc(sdk, data)
}


// Authentication returns a Authentication entity bound to this client.
// Idiomatic usage: client.Authentication(nil).List(nil, nil) or
// client.Authentication(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Authentication(data map[string]any) StripeEntity {
	return NewAuthenticationEntityFunc(sdk, data)
}


// Authorization returns a Authorization entity bound to this client.
// Idiomatic usage: client.Authorization(nil).List(nil, nil) or
// client.Authorization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Authorization(data map[string]any) StripeEntity {
	return NewAuthorizationEntityFunc(sdk, data)
}


// Balance returns a Balance entity bound to this client.
// Idiomatic usage: client.Balance(nil).List(nil, nil) or
// client.Balance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Balance(data map[string]any) StripeEntity {
	return NewBalanceEntityFunc(sdk, data)
}


// BalanceSetting returns a BalanceSetting entity bound to this client.
// Idiomatic usage: client.BalanceSetting(nil).List(nil, nil) or
// client.BalanceSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) BalanceSetting(data map[string]any) StripeEntity {
	return NewBalanceSettingEntityFunc(sdk, data)
}


// BalanceTransaction returns a BalanceTransaction entity bound to this client.
// Idiomatic usage: client.BalanceTransaction(nil).List(nil, nil) or
// client.BalanceTransaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) BalanceTransaction(data map[string]any) StripeEntity {
	return NewBalanceTransactionEntityFunc(sdk, data)
}


// BankAccount returns a BankAccount entity bound to this client.
// Idiomatic usage: client.BankAccount(nil).List(nil, nil) or
// client.BankAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) BankAccount(data map[string]any) StripeEntity {
	return NewBankAccountEntityFunc(sdk, data)
}


// Calculation returns a Calculation entity bound to this client.
// Idiomatic usage: client.Calculation(nil).List(nil, nil) or
// client.Calculation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Calculation(data map[string]any) StripeEntity {
	return NewCalculationEntityFunc(sdk, data)
}


// Capability returns a Capability entity bound to this client.
// Idiomatic usage: client.Capability(nil).List(nil, nil) or
// client.Capability(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Capability(data map[string]any) StripeEntity {
	return NewCapabilityEntityFunc(sdk, data)
}


// Card returns a Card entity bound to this client.
// Idiomatic usage: client.Card(nil).List(nil, nil) or
// client.Card(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Card(data map[string]any) StripeEntity {
	return NewCardEntityFunc(sdk, data)
}


// Cardholder returns a Cardholder entity bound to this client.
// Idiomatic usage: client.Cardholder(nil).List(nil, nil) or
// client.Cardholder(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Cardholder(data map[string]any) StripeEntity {
	return NewCardholderEntityFunc(sdk, data)
}


// CashBalance returns a CashBalance entity bound to this client.
// Idiomatic usage: client.CashBalance(nil).List(nil, nil) or
// client.CashBalance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) CashBalance(data map[string]any) StripeEntity {
	return NewCashBalanceEntityFunc(sdk, data)
}


// CashBalanceTransaction returns a CashBalanceTransaction entity bound to this client.
// Idiomatic usage: client.CashBalanceTransaction(nil).List(nil, nil) or
// client.CashBalanceTransaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) CashBalanceTransaction(data map[string]any) StripeEntity {
	return NewCashBalanceTransactionEntityFunc(sdk, data)
}


// Charge returns a Charge entity bound to this client.
// Idiomatic usage: client.Charge(nil).List(nil, nil) or
// client.Charge(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Charge(data map[string]any) StripeEntity {
	return NewChargeEntityFunc(sdk, data)
}


// Configuration returns a Configuration entity bound to this client.
// Idiomatic usage: client.Configuration(nil).List(nil, nil) or
// client.Configuration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Configuration(data map[string]any) StripeEntity {
	return NewConfigurationEntityFunc(sdk, data)
}


// ConfirmationToken returns a ConfirmationToken entity bound to this client.
// Idiomatic usage: client.ConfirmationToken(nil).List(nil, nil) or
// client.ConfirmationToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ConfirmationToken(data map[string]any) StripeEntity {
	return NewConfirmationTokenEntityFunc(sdk, data)
}


// ConnectionToken returns a ConnectionToken entity bound to this client.
// Idiomatic usage: client.ConnectionToken(nil).List(nil, nil) or
// client.ConnectionToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ConnectionToken(data map[string]any) StripeEntity {
	return NewConnectionTokenEntityFunc(sdk, data)
}


// CountrySpec returns a CountrySpec entity bound to this client.
// Idiomatic usage: client.CountrySpec(nil).List(nil, nil) or
// client.CountrySpec(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) CountrySpec(data map[string]any) StripeEntity {
	return NewCountrySpecEntityFunc(sdk, data)
}


// Coupon returns a Coupon entity bound to this client.
// Idiomatic usage: client.Coupon(nil).List(nil, nil) or
// client.Coupon(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Coupon(data map[string]any) StripeEntity {
	return NewCouponEntityFunc(sdk, data)
}


// CreditBalanceSummary returns a CreditBalanceSummary entity bound to this client.
// Idiomatic usage: client.CreditBalanceSummary(nil).List(nil, nil) or
// client.CreditBalanceSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) CreditBalanceSummary(data map[string]any) StripeEntity {
	return NewCreditBalanceSummaryEntityFunc(sdk, data)
}


// CreditBalanceTransaction returns a CreditBalanceTransaction entity bound to this client.
// Idiomatic usage: client.CreditBalanceTransaction(nil).List(nil, nil) or
// client.CreditBalanceTransaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) CreditBalanceTransaction(data map[string]any) StripeEntity {
	return NewCreditBalanceTransactionEntityFunc(sdk, data)
}


// CreditGrant returns a CreditGrant entity bound to this client.
// Idiomatic usage: client.CreditGrant(nil).List(nil, nil) or
// client.CreditGrant(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) CreditGrant(data map[string]any) StripeEntity {
	return NewCreditGrantEntityFunc(sdk, data)
}


// CreditNote returns a CreditNote entity bound to this client.
// Idiomatic usage: client.CreditNote(nil).List(nil, nil) or
// client.CreditNote(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) CreditNote(data map[string]any) StripeEntity {
	return NewCreditNoteEntityFunc(sdk, data)
}


// CreditNoteLine returns a CreditNoteLine entity bound to this client.
// Idiomatic usage: client.CreditNoteLine(nil).List(nil, nil) or
// client.CreditNoteLine(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) CreditNoteLine(data map[string]any) StripeEntity {
	return NewCreditNoteLineEntityFunc(sdk, data)
}


// CreditReversal returns a CreditReversal entity bound to this client.
// Idiomatic usage: client.CreditReversal(nil).List(nil, nil) or
// client.CreditReversal(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) CreditReversal(data map[string]any) StripeEntity {
	return NewCreditReversalEntityFunc(sdk, data)
}


// Customer returns a Customer entity bound to this client.
// Idiomatic usage: client.Customer(nil).List(nil, nil) or
// client.Customer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Customer(data map[string]any) StripeEntity {
	return NewCustomerEntityFunc(sdk, data)
}


// CustomerBalanceTransaction returns a CustomerBalanceTransaction entity bound to this client.
// Idiomatic usage: client.CustomerBalanceTransaction(nil).List(nil, nil) or
// client.CustomerBalanceTransaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) CustomerBalanceTransaction(data map[string]any) StripeEntity {
	return NewCustomerBalanceTransactionEntityFunc(sdk, data)
}


// CustomerSession returns a CustomerSession entity bound to this client.
// Idiomatic usage: client.CustomerSession(nil).List(nil, nil) or
// client.CustomerSession(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) CustomerSession(data map[string]any) StripeEntity {
	return NewCustomerSessionEntityFunc(sdk, data)
}


// DebitReversal returns a DebitReversal entity bound to this client.
// Idiomatic usage: client.DebitReversal(nil).List(nil, nil) or
// client.DebitReversal(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) DebitReversal(data map[string]any) StripeEntity {
	return NewDebitReversalEntityFunc(sdk, data)
}


// DeletedAccount returns a DeletedAccount entity bound to this client.
// Idiomatic usage: client.DeletedAccount(nil).List(nil, nil) or
// client.DeletedAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) DeletedAccount(data map[string]any) StripeEntity {
	return NewDeletedAccountEntityFunc(sdk, data)
}


// DeletedApplePayDomain returns a DeletedApplePayDomain entity bound to this client.
// Idiomatic usage: client.DeletedApplePayDomain(nil).List(nil, nil) or
// client.DeletedApplePayDomain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) DeletedApplePayDomain(data map[string]any) StripeEntity {
	return NewDeletedApplePayDomainEntityFunc(sdk, data)
}


// DeletedCoupon returns a DeletedCoupon entity bound to this client.
// Idiomatic usage: client.DeletedCoupon(nil).List(nil, nil) or
// client.DeletedCoupon(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) DeletedCoupon(data map[string]any) StripeEntity {
	return NewDeletedCouponEntityFunc(sdk, data)
}


// DeletedExternalAccount returns a DeletedExternalAccount entity bound to this client.
// Idiomatic usage: client.DeletedExternalAccount(nil).List(nil, nil) or
// client.DeletedExternalAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) DeletedExternalAccount(data map[string]any) StripeEntity {
	return NewDeletedExternalAccountEntityFunc(sdk, data)
}


// DeletedInvoiceitem returns a DeletedInvoiceitem entity bound to this client.
// Idiomatic usage: client.DeletedInvoiceitem(nil).List(nil, nil) or
// client.DeletedInvoiceitem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) DeletedInvoiceitem(data map[string]any) StripeEntity {
	return NewDeletedInvoiceitemEntityFunc(sdk, data)
}


// DeletedPerson returns a DeletedPerson entity bound to this client.
// Idiomatic usage: client.DeletedPerson(nil).List(nil, nil) or
// client.DeletedPerson(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) DeletedPerson(data map[string]any) StripeEntity {
	return NewDeletedPersonEntityFunc(sdk, data)
}


// DeletedPlan returns a DeletedPlan entity bound to this client.
// Idiomatic usage: client.DeletedPlan(nil).List(nil, nil) or
// client.DeletedPlan(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) DeletedPlan(data map[string]any) StripeEntity {
	return NewDeletedPlanEntityFunc(sdk, data)
}


// DeletedProductFeature returns a DeletedProductFeature entity bound to this client.
// Idiomatic usage: client.DeletedProductFeature(nil).List(nil, nil) or
// client.DeletedProductFeature(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) DeletedProductFeature(data map[string]any) StripeEntity {
	return NewDeletedProductFeatureEntityFunc(sdk, data)
}


// DeletedSubscriptionItem returns a DeletedSubscriptionItem entity bound to this client.
// Idiomatic usage: client.DeletedSubscriptionItem(nil).List(nil, nil) or
// client.DeletedSubscriptionItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) DeletedSubscriptionItem(data map[string]any) StripeEntity {
	return NewDeletedSubscriptionItemEntityFunc(sdk, data)
}


// DeletedWebhookEndpoint returns a DeletedWebhookEndpoint entity bound to this client.
// Idiomatic usage: client.DeletedWebhookEndpoint(nil).List(nil, nil) or
// client.DeletedWebhookEndpoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) DeletedWebhookEndpoint(data map[string]any) StripeEntity {
	return NewDeletedWebhookEndpointEntityFunc(sdk, data)
}


// Discount returns a Discount entity bound to this client.
// Idiomatic usage: client.Discount(nil).List(nil, nil) or
// client.Discount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Discount(data map[string]any) StripeEntity {
	return NewDiscountEntityFunc(sdk, data)
}


// Dispute returns a Dispute entity bound to this client.
// Idiomatic usage: client.Dispute(nil).List(nil, nil) or
// client.Dispute(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Dispute(data map[string]any) StripeEntity {
	return NewDisputeEntityFunc(sdk, data)
}


// Domain returns a Domain entity bound to this client.
// Idiomatic usage: client.Domain(nil).List(nil, nil) or
// client.Domain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Domain(data map[string]any) StripeEntity {
	return NewDomainEntityFunc(sdk, data)
}


// EarlyFraudWarning returns a EarlyFraudWarning entity bound to this client.
// Idiomatic usage: client.EarlyFraudWarning(nil).List(nil, nil) or
// client.EarlyFraudWarning(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) EarlyFraudWarning(data map[string]any) StripeEntity {
	return NewEarlyFraudWarningEntityFunc(sdk, data)
}


// EphemeralKey returns a EphemeralKey entity bound to this client.
// Idiomatic usage: client.EphemeralKey(nil).List(nil, nil) or
// client.EphemeralKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) EphemeralKey(data map[string]any) StripeEntity {
	return NewEphemeralKeyEntityFunc(sdk, data)
}


// Event returns a Event entity bound to this client.
// Idiomatic usage: client.Event(nil).List(nil, nil) or
// client.Event(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Event(data map[string]any) StripeEntity {
	return NewEventEntityFunc(sdk, data)
}


// ExchangeRate returns a ExchangeRate entity bound to this client.
// Idiomatic usage: client.ExchangeRate(nil).List(nil, nil) or
// client.ExchangeRate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ExchangeRate(data map[string]any) StripeEntity {
	return NewExchangeRateEntityFunc(sdk, data)
}


// ExternalAccount returns a ExternalAccount entity bound to this client.
// Idiomatic usage: client.ExternalAccount(nil).List(nil, nil) or
// client.ExternalAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ExternalAccount(data map[string]any) StripeEntity {
	return NewExternalAccountEntityFunc(sdk, data)
}


// Feature returns a Feature entity bound to this client.
// Idiomatic usage: client.Feature(nil).List(nil, nil) or
// client.Feature(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Feature(data map[string]any) StripeEntity {
	return NewFeatureEntityFunc(sdk, data)
}


// FeedbackOption returns a FeedbackOption entity bound to this client.
// Idiomatic usage: client.FeedbackOption(nil).List(nil, nil) or
// client.FeedbackOption(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) FeedbackOption(data map[string]any) StripeEntity {
	return NewFeedbackOptionEntityFunc(sdk, data)
}


// File returns a File entity bound to this client.
// Idiomatic usage: client.File(nil).List(nil, nil) or
// client.File(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) File(data map[string]any) StripeEntity {
	return NewFileEntityFunc(sdk, data)
}


// FileLink returns a FileLink entity bound to this client.
// Idiomatic usage: client.FileLink(nil).List(nil, nil) or
// client.FileLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) FileLink(data map[string]any) StripeEntity {
	return NewFileLinkEntityFunc(sdk, data)
}


// FinancialAccount returns a FinancialAccount entity bound to this client.
// Idiomatic usage: client.FinancialAccount(nil).List(nil, nil) or
// client.FinancialAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) FinancialAccount(data map[string]any) StripeEntity {
	return NewFinancialAccountEntityFunc(sdk, data)
}


// FinancialAccountFeature returns a FinancialAccountFeature entity bound to this client.
// Idiomatic usage: client.FinancialAccountFeature(nil).List(nil, nil) or
// client.FinancialAccountFeature(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) FinancialAccountFeature(data map[string]any) StripeEntity {
	return NewFinancialAccountFeatureEntityFunc(sdk, data)
}


// FundCashBalance returns a FundCashBalance entity bound to this client.
// Idiomatic usage: client.FundCashBalance(nil).List(nil, nil) or
// client.FundCashBalance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) FundCashBalance(data map[string]any) StripeEntity {
	return NewFundCashBalanceEntityFunc(sdk, data)
}


// FundingInstruction returns a FundingInstruction entity bound to this client.
// Idiomatic usage: client.FundingInstruction(nil).List(nil, nil) or
// client.FundingInstruction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) FundingInstruction(data map[string]any) StripeEntity {
	return NewFundingInstructionEntityFunc(sdk, data)
}


// History returns a History entity bound to this client.
// Idiomatic usage: client.History(nil).List(nil, nil) or
// client.History(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) History(data map[string]any) StripeEntity {
	return NewHistoryEntityFunc(sdk, data)
}


// InboundTransfer returns a InboundTransfer entity bound to this client.
// Idiomatic usage: client.InboundTransfer(nil).List(nil, nil) or
// client.InboundTransfer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) InboundTransfer(data map[string]any) StripeEntity {
	return NewInboundTransferEntityFunc(sdk, data)
}


// Install returns a Install entity bound to this client.
// Idiomatic usage: client.Install(nil).List(nil, nil) or
// client.Install(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Install(data map[string]any) StripeEntity {
	return NewInstallEntityFunc(sdk, data)
}


// Invoice returns a Invoice entity bound to this client.
// Idiomatic usage: client.Invoice(nil).List(nil, nil) or
// client.Invoice(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Invoice(data map[string]any) StripeEntity {
	return NewInvoiceEntityFunc(sdk, data)
}


// InvoicePayment returns a InvoicePayment entity bound to this client.
// Idiomatic usage: client.InvoicePayment(nil).List(nil, nil) or
// client.InvoicePayment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) InvoicePayment(data map[string]any) StripeEntity {
	return NewInvoicePaymentEntityFunc(sdk, data)
}


// InvoiceRenderingTemplate returns a InvoiceRenderingTemplate entity bound to this client.
// Idiomatic usage: client.InvoiceRenderingTemplate(nil).List(nil, nil) or
// client.InvoiceRenderingTemplate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) InvoiceRenderingTemplate(data map[string]any) StripeEntity {
	return NewInvoiceRenderingTemplateEntityFunc(sdk, data)
}


// Invoiceitem returns a Invoiceitem entity bound to this client.
// Idiomatic usage: client.Invoiceitem(nil).List(nil, nil) or
// client.Invoiceitem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Invoiceitem(data map[string]any) StripeEntity {
	return NewInvoiceitemEntityFunc(sdk, data)
}


// Line returns a Line entity bound to this client.
// Idiomatic usage: client.Line(nil).List(nil, nil) or
// client.Line(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Line(data map[string]any) StripeEntity {
	return NewLineEntityFunc(sdk, data)
}


// LineItem returns a LineItem entity bound to this client.
// Idiomatic usage: client.LineItem(nil).List(nil, nil) or
// client.LineItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) LineItem(data map[string]any) StripeEntity {
	return NewLineItemEntityFunc(sdk, data)
}


// LinkedAccount returns a LinkedAccount entity bound to this client.
// Idiomatic usage: client.LinkedAccount(nil).List(nil, nil) or
// client.LinkedAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) LinkedAccount(data map[string]any) StripeEntity {
	return NewLinkedAccountEntityFunc(sdk, data)
}


// LinkedAccountOwner returns a LinkedAccountOwner entity bound to this client.
// Idiomatic usage: client.LinkedAccountOwner(nil).List(nil, nil) or
// client.LinkedAccountOwner(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) LinkedAccountOwner(data map[string]any) StripeEntity {
	return NewLinkedAccountOwnerEntityFunc(sdk, data)
}


// Location returns a Location entity bound to this client.
// Idiomatic usage: client.Location(nil).List(nil, nil) or
// client.Location(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Location(data map[string]any) StripeEntity {
	return NewLocationEntityFunc(sdk, data)
}


// LoginLink returns a LoginLink entity bound to this client.
// Idiomatic usage: client.LoginLink(nil).List(nil, nil) or
// client.LoginLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) LoginLink(data map[string]any) StripeEntity {
	return NewLoginLinkEntityFunc(sdk, data)
}


// Mandate returns a Mandate entity bound to this client.
// Idiomatic usage: client.Mandate(nil).List(nil, nil) or
// client.Mandate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Mandate(data map[string]any) StripeEntity {
	return NewMandateEntityFunc(sdk, data)
}


// Meter returns a Meter entity bound to this client.
// Idiomatic usage: client.Meter(nil).List(nil, nil) or
// client.Meter(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Meter(data map[string]any) StripeEntity {
	return NewMeterEntityFunc(sdk, data)
}


// MeterEvent returns a MeterEvent entity bound to this client.
// Idiomatic usage: client.MeterEvent(nil).List(nil, nil) or
// client.MeterEvent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) MeterEvent(data map[string]any) StripeEntity {
	return NewMeterEventEntityFunc(sdk, data)
}


// MeterEventAdjustment returns a MeterEventAdjustment entity bound to this client.
// Idiomatic usage: client.MeterEventAdjustment(nil).List(nil, nil) or
// client.MeterEventAdjustment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) MeterEventAdjustment(data map[string]any) StripeEntity {
	return NewMeterEventAdjustmentEntityFunc(sdk, data)
}


// MeterEventSummary returns a MeterEventSummary entity bound to this client.
// Idiomatic usage: client.MeterEventSummary(nil).List(nil, nil) or
// client.MeterEventSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) MeterEventSummary(data map[string]any) StripeEntity {
	return NewMeterEventSummaryEntityFunc(sdk, data)
}


// OnboardingLink returns a OnboardingLink entity bound to this client.
// Idiomatic usage: client.OnboardingLink(nil).List(nil, nil) or
// client.OnboardingLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) OnboardingLink(data map[string]any) StripeEntity {
	return NewOnboardingLinkEntityFunc(sdk, data)
}


// Order returns a Order entity bound to this client.
// Idiomatic usage: client.Order(nil).List(nil, nil) or
// client.Order(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Order(data map[string]any) StripeEntity {
	return NewOrderEntityFunc(sdk, data)
}


// OutboundPayment returns a OutboundPayment entity bound to this client.
// Idiomatic usage: client.OutboundPayment(nil).List(nil, nil) or
// client.OutboundPayment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) OutboundPayment(data map[string]any) StripeEntity {
	return NewOutboundPaymentEntityFunc(sdk, data)
}


// OutboundTransfer returns a OutboundTransfer entity bound to this client.
// Idiomatic usage: client.OutboundTransfer(nil).List(nil, nil) or
// client.OutboundTransfer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) OutboundTransfer(data map[string]any) StripeEntity {
	return NewOutboundTransferEntityFunc(sdk, data)
}


// PaymentAttemptRecord returns a PaymentAttemptRecord entity bound to this client.
// Idiomatic usage: client.PaymentAttemptRecord(nil).List(nil, nil) or
// client.PaymentAttemptRecord(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) PaymentAttemptRecord(data map[string]any) StripeEntity {
	return NewPaymentAttemptRecordEntityFunc(sdk, data)
}


// PaymentEvaluation returns a PaymentEvaluation entity bound to this client.
// Idiomatic usage: client.PaymentEvaluation(nil).List(nil, nil) or
// client.PaymentEvaluation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) PaymentEvaluation(data map[string]any) StripeEntity {
	return NewPaymentEvaluationEntityFunc(sdk, data)
}


// PaymentIntent returns a PaymentIntent entity bound to this client.
// Idiomatic usage: client.PaymentIntent(nil).List(nil, nil) or
// client.PaymentIntent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) PaymentIntent(data map[string]any) StripeEntity {
	return NewPaymentIntentEntityFunc(sdk, data)
}


// PaymentIntentAmountDetailsLineItem returns a PaymentIntentAmountDetailsLineItem entity bound to this client.
// Idiomatic usage: client.PaymentIntentAmountDetailsLineItem(nil).List(nil, nil) or
// client.PaymentIntentAmountDetailsLineItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) PaymentIntentAmountDetailsLineItem(data map[string]any) StripeEntity {
	return NewPaymentIntentAmountDetailsLineItemEntityFunc(sdk, data)
}


// PaymentLink returns a PaymentLink entity bound to this client.
// Idiomatic usage: client.PaymentLink(nil).List(nil, nil) or
// client.PaymentLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) PaymentLink(data map[string]any) StripeEntity {
	return NewPaymentLinkEntityFunc(sdk, data)
}


// PaymentMethod returns a PaymentMethod entity bound to this client.
// Idiomatic usage: client.PaymentMethod(nil).List(nil, nil) or
// client.PaymentMethod(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) PaymentMethod(data map[string]any) StripeEntity {
	return NewPaymentMethodEntityFunc(sdk, data)
}


// PaymentMethodConfiguration returns a PaymentMethodConfiguration entity bound to this client.
// Idiomatic usage: client.PaymentMethodConfiguration(nil).List(nil, nil) or
// client.PaymentMethodConfiguration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) PaymentMethodConfiguration(data map[string]any) StripeEntity {
	return NewPaymentMethodConfigurationEntityFunc(sdk, data)
}


// PaymentMethodDomain returns a PaymentMethodDomain entity bound to this client.
// Idiomatic usage: client.PaymentMethodDomain(nil).List(nil, nil) or
// client.PaymentMethodDomain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) PaymentMethodDomain(data map[string]any) StripeEntity {
	return NewPaymentMethodDomainEntityFunc(sdk, data)
}


// PaymentRecord returns a PaymentRecord entity bound to this client.
// Idiomatic usage: client.PaymentRecord(nil).List(nil, nil) or
// client.PaymentRecord(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) PaymentRecord(data map[string]any) StripeEntity {
	return NewPaymentRecordEntityFunc(sdk, data)
}


// Payout returns a Payout entity bound to this client.
// Idiomatic usage: client.Payout(nil).List(nil, nil) or
// client.Payout(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Payout(data map[string]any) StripeEntity {
	return NewPayoutEntityFunc(sdk, data)
}


// Person returns a Person entity bound to this client.
// Idiomatic usage: client.Person(nil).List(nil, nil) or
// client.Person(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Person(data map[string]any) StripeEntity {
	return NewPersonEntityFunc(sdk, data)
}


// PersonalizationDesign returns a PersonalizationDesign entity bound to this client.
// Idiomatic usage: client.PersonalizationDesign(nil).List(nil, nil) or
// client.PersonalizationDesign(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) PersonalizationDesign(data map[string]any) StripeEntity {
	return NewPersonalizationDesignEntityFunc(sdk, data)
}


// PhysicalBundle returns a PhysicalBundle entity bound to this client.
// Idiomatic usage: client.PhysicalBundle(nil).List(nil, nil) or
// client.PhysicalBundle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) PhysicalBundle(data map[string]any) StripeEntity {
	return NewPhysicalBundleEntityFunc(sdk, data)
}


// Plan returns a Plan entity bound to this client.
// Idiomatic usage: client.Plan(nil).List(nil, nil) or
// client.Plan(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Plan(data map[string]any) StripeEntity {
	return NewPlanEntityFunc(sdk, data)
}


// Price returns a Price entity bound to this client.
// Idiomatic usage: client.Price(nil).List(nil, nil) or
// client.Price(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Price(data map[string]any) StripeEntity {
	return NewPriceEntityFunc(sdk, data)
}


// Product returns a Product entity bound to this client.
// Idiomatic usage: client.Product(nil).List(nil, nil) or
// client.Product(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Product(data map[string]any) StripeEntity {
	return NewProductEntityFunc(sdk, data)
}


// ProductFeature returns a ProductFeature entity bound to this client.
// Idiomatic usage: client.ProductFeature(nil).List(nil, nil) or
// client.ProductFeature(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ProductFeature(data map[string]any) StripeEntity {
	return NewProductFeatureEntityFunc(sdk, data)
}


// PromotionCode returns a PromotionCode entity bound to this client.
// Idiomatic usage: client.PromotionCode(nil).List(nil, nil) or
// client.PromotionCode(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) PromotionCode(data map[string]any) StripeEntity {
	return NewPromotionCodeEntityFunc(sdk, data)
}


// Quote returns a Quote entity bound to this client.
// Idiomatic usage: client.Quote(nil).List(nil, nil) or
// client.Quote(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Quote(data map[string]any) StripeEntity {
	return NewQuoteEntityFunc(sdk, data)
}


// QuoteComputedUpfrontLineItem returns a QuoteComputedUpfrontLineItem entity bound to this client.
// Idiomatic usage: client.QuoteComputedUpfrontLineItem(nil).List(nil, nil) or
// client.QuoteComputedUpfrontLineItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) QuoteComputedUpfrontLineItem(data map[string]any) StripeEntity {
	return NewQuoteComputedUpfrontLineItemEntityFunc(sdk, data)
}


// QuotePdf returns a QuotePdf entity bound to this client.
// Idiomatic usage: client.QuotePdf(nil).List(nil, nil) or
// client.QuotePdf(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) QuotePdf(data map[string]any) StripeEntity {
	return NewQuotePdfEntityFunc(sdk, data)
}


// Reader returns a Reader entity bound to this client.
// Idiomatic usage: client.Reader(nil).List(nil, nil) or
// client.Reader(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Reader(data map[string]any) StripeEntity {
	return NewReaderEntityFunc(sdk, data)
}


// ReceivedCredit returns a ReceivedCredit entity bound to this client.
// Idiomatic usage: client.ReceivedCredit(nil).List(nil, nil) or
// client.ReceivedCredit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ReceivedCredit(data map[string]any) StripeEntity {
	return NewReceivedCreditEntityFunc(sdk, data)
}


// ReceivedDebit returns a ReceivedDebit entity bound to this client.
// Idiomatic usage: client.ReceivedDebit(nil).List(nil, nil) or
// client.ReceivedDebit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ReceivedDebit(data map[string]any) StripeEntity {
	return NewReceivedDebitEntityFunc(sdk, data)
}


// Refund returns a Refund entity bound to this client.
// Idiomatic usage: client.Refund(nil).List(nil, nil) or
// client.Refund(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Refund(data map[string]any) StripeEntity {
	return NewRefundEntityFunc(sdk, data)
}


// Registration returns a Registration entity bound to this client.
// Idiomatic usage: client.Registration(nil).List(nil, nil) or
// client.Registration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Registration(data map[string]any) StripeEntity {
	return NewRegistrationEntityFunc(sdk, data)
}


// ReportRun returns a ReportRun entity bound to this client.
// Idiomatic usage: client.ReportRun(nil).List(nil, nil) or
// client.ReportRun(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ReportRun(data map[string]any) StripeEntity {
	return NewReportRunEntityFunc(sdk, data)
}


// ReportType returns a ReportType entity bound to this client.
// Idiomatic usage: client.ReportType(nil).List(nil, nil) or
// client.ReportType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ReportType(data map[string]any) StripeEntity {
	return NewReportTypeEntityFunc(sdk, data)
}


// Request returns a Request entity bound to this client.
// Idiomatic usage: client.Request(nil).List(nil, nil) or
// client.Request(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Request(data map[string]any) StripeEntity {
	return NewRequestEntityFunc(sdk, data)
}


// Reversal returns a Reversal entity bound to this client.
// Idiomatic usage: client.Reversal(nil).List(nil, nil) or
// client.Reversal(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Reversal(data map[string]any) StripeEntity {
	return NewReversalEntityFunc(sdk, data)
}


// Review returns a Review entity bound to this client.
// Idiomatic usage: client.Review(nil).List(nil, nil) or
// client.Review(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Review(data map[string]any) StripeEntity {
	return NewReviewEntityFunc(sdk, data)
}


// ScheduledQueryRun returns a ScheduledQueryRun entity bound to this client.
// Idiomatic usage: client.ScheduledQueryRun(nil).List(nil, nil) or
// client.ScheduledQueryRun(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ScheduledQueryRun(data map[string]any) StripeEntity {
	return NewScheduledQueryRunEntityFunc(sdk, data)
}


// Search returns a Search entity bound to this client.
// Idiomatic usage: client.Search(nil).List(nil, nil) or
// client.Search(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Search(data map[string]any) StripeEntity {
	return NewSearchEntityFunc(sdk, data)
}


// Secret returns a Secret entity bound to this client.
// Idiomatic usage: client.Secret(nil).List(nil, nil) or
// client.Secret(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Secret(data map[string]any) StripeEntity {
	return NewSecretEntityFunc(sdk, data)
}


// Session returns a Session entity bound to this client.
// Idiomatic usage: client.Session(nil).List(nil, nil) or
// client.Session(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Session(data map[string]any) StripeEntity {
	return NewSessionEntityFunc(sdk, data)
}


// Setting returns a Setting entity bound to this client.
// Idiomatic usage: client.Setting(nil).List(nil, nil) or
// client.Setting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Setting(data map[string]any) StripeEntity {
	return NewSettingEntityFunc(sdk, data)
}


// Settlement returns a Settlement entity bound to this client.
// Idiomatic usage: client.Settlement(nil).List(nil, nil) or
// client.Settlement(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Settlement(data map[string]any) StripeEntity {
	return NewSettlementEntityFunc(sdk, data)
}


// SetupAttempt returns a SetupAttempt entity bound to this client.
// Idiomatic usage: client.SetupAttempt(nil).List(nil, nil) or
// client.SetupAttempt(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) SetupAttempt(data map[string]any) StripeEntity {
	return NewSetupAttemptEntityFunc(sdk, data)
}


// SetupIntent returns a SetupIntent entity bound to this client.
// Idiomatic usage: client.SetupIntent(nil).List(nil, nil) or
// client.SetupIntent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) SetupIntent(data map[string]any) StripeEntity {
	return NewSetupIntentEntityFunc(sdk, data)
}


// ShippingRate returns a ShippingRate entity bound to this client.
// Idiomatic usage: client.ShippingRate(nil).List(nil, nil) or
// client.ShippingRate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ShippingRate(data map[string]any) StripeEntity {
	return NewShippingRateEntityFunc(sdk, data)
}


// SigmaApiQuery returns a SigmaApiQuery entity bound to this client.
// Idiomatic usage: client.SigmaApiQuery(nil).List(nil, nil) or
// client.SigmaApiQuery(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) SigmaApiQuery(data map[string]any) StripeEntity {
	return NewSigmaApiQueryEntityFunc(sdk, data)
}


// Source returns a Source entity bound to this client.
// Idiomatic usage: client.Source(nil).List(nil, nil) or
// client.Source(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Source(data map[string]any) StripeEntity {
	return NewSourceEntityFunc(sdk, data)
}


// SourceMandateNotification returns a SourceMandateNotification entity bound to this client.
// Idiomatic usage: client.SourceMandateNotification(nil).List(nil, nil) or
// client.SourceMandateNotification(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) SourceMandateNotification(data map[string]any) StripeEntity {
	return NewSourceMandateNotificationEntityFunc(sdk, data)
}


// SourceTransaction returns a SourceTransaction entity bound to this client.
// Idiomatic usage: client.SourceTransaction(nil).List(nil, nil) or
// client.SourceTransaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) SourceTransaction(data map[string]any) StripeEntity {
	return NewSourceTransactionEntityFunc(sdk, data)
}


// Subscription returns a Subscription entity bound to this client.
// Idiomatic usage: client.Subscription(nil).List(nil, nil) or
// client.Subscription(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Subscription(data map[string]any) StripeEntity {
	return NewSubscriptionEntityFunc(sdk, data)
}


// SubscriptionItem returns a SubscriptionItem entity bound to this client.
// Idiomatic usage: client.SubscriptionItem(nil).List(nil, nil) or
// client.SubscriptionItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) SubscriptionItem(data map[string]any) StripeEntity {
	return NewSubscriptionItemEntityFunc(sdk, data)
}


// SubscriptionSchedule returns a SubscriptionSchedule entity bound to this client.
// Idiomatic usage: client.SubscriptionSchedule(nil).List(nil, nil) or
// client.SubscriptionSchedule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) SubscriptionSchedule(data map[string]any) StripeEntity {
	return NewSubscriptionScheduleEntityFunc(sdk, data)
}


// Supplier returns a Supplier entity bound to this client.
// Idiomatic usage: client.Supplier(nil).List(nil, nil) or
// client.Supplier(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Supplier(data map[string]any) StripeEntity {
	return NewSupplierEntityFunc(sdk, data)
}


// TaxCode returns a TaxCode entity bound to this client.
// Idiomatic usage: client.TaxCode(nil).List(nil, nil) or
// client.TaxCode(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) TaxCode(data map[string]any) StripeEntity {
	return NewTaxCodeEntityFunc(sdk, data)
}


// TaxId returns a TaxId entity bound to this client.
// Idiomatic usage: client.TaxId(nil).List(nil, nil) or
// client.TaxId(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) TaxId(data map[string]any) StripeEntity {
	return NewTaxIdEntityFunc(sdk, data)
}


// TaxRate returns a TaxRate entity bound to this client.
// Idiomatic usage: client.TaxRate(nil).List(nil, nil) or
// client.TaxRate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) TaxRate(data map[string]any) StripeEntity {
	return NewTaxRateEntityFunc(sdk, data)
}


// TestClock returns a TestClock entity bound to this client.
// Idiomatic usage: client.TestClock(nil).List(nil, nil) or
// client.TestClock(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) TestClock(data map[string]any) StripeEntity {
	return NewTestClockEntityFunc(sdk, data)
}


// Token returns a Token entity bound to this client.
// Idiomatic usage: client.Token(nil).List(nil, nil) or
// client.Token(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Token(data map[string]any) StripeEntity {
	return NewTokenEntityFunc(sdk, data)
}


// Topup returns a Topup entity bound to this client.
// Idiomatic usage: client.Topup(nil).List(nil, nil) or
// client.Topup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Topup(data map[string]any) StripeEntity {
	return NewTopupEntityFunc(sdk, data)
}


// Transaction returns a Transaction entity bound to this client.
// Idiomatic usage: client.Transaction(nil).List(nil, nil) or
// client.Transaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Transaction(data map[string]any) StripeEntity {
	return NewTransactionEntityFunc(sdk, data)
}


// TransactionEntry returns a TransactionEntry entity bound to this client.
// Idiomatic usage: client.TransactionEntry(nil).List(nil, nil) or
// client.TransactionEntry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) TransactionEntry(data map[string]any) StripeEntity {
	return NewTransactionEntryEntityFunc(sdk, data)
}


// Transfer returns a Transfer entity bound to this client.
// Idiomatic usage: client.Transfer(nil).List(nil, nil) or
// client.Transfer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) Transfer(data map[string]any) StripeEntity {
	return NewTransferEntityFunc(sdk, data)
}


// TrialOffer returns a TrialOffer entity bound to this client.
// Idiomatic usage: client.TrialOffer(nil).List(nil, nil) or
// client.TrialOffer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) TrialOffer(data map[string]any) StripeEntity {
	return NewTrialOfferEntityFunc(sdk, data)
}


// ValueList returns a ValueList entity bound to this client.
// Idiomatic usage: client.ValueList(nil).List(nil, nil) or
// client.ValueList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ValueList(data map[string]any) StripeEntity {
	return NewValueListEntityFunc(sdk, data)
}


// ValueListItem returns a ValueListItem entity bound to this client.
// Idiomatic usage: client.ValueListItem(nil).List(nil, nil) or
// client.ValueListItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) ValueListItem(data map[string]any) StripeEntity {
	return NewValueListItemEntityFunc(sdk, data)
}


// VerificationReport returns a VerificationReport entity bound to this client.
// Idiomatic usage: client.VerificationReport(nil).List(nil, nil) or
// client.VerificationReport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) VerificationReport(data map[string]any) StripeEntity {
	return NewVerificationReportEntityFunc(sdk, data)
}


// VerificationSession returns a VerificationSession entity bound to this client.
// Idiomatic usage: client.VerificationSession(nil).List(nil, nil) or
// client.VerificationSession(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) VerificationSession(data map[string]any) StripeEntity {
	return NewVerificationSessionEntityFunc(sdk, data)
}


// WebhookEndpoint returns a WebhookEndpoint entity bound to this client.
// Idiomatic usage: client.WebhookEndpoint(nil).List(nil, nil) or
// client.WebhookEndpoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *StripeSDK) WebhookEndpoint(data map[string]any) StripeEntity {
	return NewWebhookEndpointEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *StripeSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewStripeSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
