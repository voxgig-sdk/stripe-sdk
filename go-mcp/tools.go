package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/stripe-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"account | account_link | account_owner | account_session | active_entitlement | alert | apple_pay_domain | application_fee | association | authentication | authorization | balance | balance_setting | balance_transaction | bank_account | calculation | capability | card | cardholder | cash_balance | cash_balance_transaction | charge | configuration | confirmation_token | connection_token | country_spec | coupon | credit_balance_summary | credit_balance_transaction | credit_grant | credit_note | credit_note_line | credit_reversal | customer | customer_balance_transaction | customer_session | debit_reversal | deleted_account | deleted_apple_pay_domain | deleted_coupon | deleted_external_account | deleted_invoiceitem | deleted_person | deleted_plan | deleted_product_feature | deleted_subscription_item | deleted_webhook_endpoint | discount | dispute | domain | early_fraud_warning | ephemeral_key | event | exchange_rate | external_account | feature | feedback_option | file | file_link | financial_account | financial_account_feature | fund_cash_balance | funding_instruction | history | inbound_transfer | install | invoice | invoice_payment | invoice_rendering_template | invoiceitem | line | line_item | linked_account | linked_account_owner | location | login_link | mandate | meter | meter_event | meter_event_adjustment | meter_event_summary | onboarding_link | order | outbound_payment | outbound_transfer | payment_attempt_record | payment_evaluation | payment_intent | payment_intent_amount_details_line_item | payment_link | payment_method | payment_method_configuration | payment_method_domain | payment_record | payout | person | personalization_design | physical_bundle | plan | price | product | product_feature | promotion_code | quote | quote_computed_upfront_line_item | quote_pdf | reader | received_credit | received_debit | refund | registration | report_run | report_type | request | reversal | review | scheduled_query_run | search | secret | session | setting | settlement | setup_attempt | setup_intent | shipping_rate | sigma_api_query | source | source_mandate_notification | source_transaction | subscription | subscription_item | subscription_schedule | supplier | tax_code | tax_id | tax_rate | test_clock | token | topup | transaction | transaction_entry | transfer | trial_offer | value_list | value_list_item | verification_report | verification_session | webhook_endpoint"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.StripeSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "stripe_list",
		Description: "List records from Stripe. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "stripe_load",
		Description: "Load a single record from Stripe. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.StripeSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.StripeSDK, name string) (sdk.StripeEntity, error) {
	switch strings.ToLower(name) {
	case "account":
		return client.Account(nil), nil
	case "account_link":
		return client.AccountLink(nil), nil
	case "account_owner":
		return client.AccountOwner(nil), nil
	case "account_session":
		return client.AccountSession(nil), nil
	case "active_entitlement":
		return client.ActiveEntitlement(nil), nil
	case "alert":
		return client.Alert(nil), nil
	case "apple_pay_domain":
		return client.ApplePayDomain(nil), nil
	case "application_fee":
		return client.ApplicationFee(nil), nil
	case "association":
		return client.Association(nil), nil
	case "authentication":
		return client.Authentication(nil), nil
	case "authorization":
		return client.Authorization(nil), nil
	case "balance":
		return client.Balance(nil), nil
	case "balance_setting":
		return client.BalanceSetting(nil), nil
	case "balance_transaction":
		return client.BalanceTransaction(nil), nil
	case "bank_account":
		return client.BankAccount(nil), nil
	case "calculation":
		return client.Calculation(nil), nil
	case "capability":
		return client.Capability(nil), nil
	case "card":
		return client.Card(nil), nil
	case "cardholder":
		return client.Cardholder(nil), nil
	case "cash_balance":
		return client.CashBalance(nil), nil
	case "cash_balance_transaction":
		return client.CashBalanceTransaction(nil), nil
	case "charge":
		return client.Charge(nil), nil
	case "configuration":
		return client.Configuration(nil), nil
	case "confirmation_token":
		return client.ConfirmationToken(nil), nil
	case "connection_token":
		return client.ConnectionToken(nil), nil
	case "country_spec":
		return client.CountrySpec(nil), nil
	case "coupon":
		return client.Coupon(nil), nil
	case "credit_balance_summary":
		return client.CreditBalanceSummary(nil), nil
	case "credit_balance_transaction":
		return client.CreditBalanceTransaction(nil), nil
	case "credit_grant":
		return client.CreditGrant(nil), nil
	case "credit_note":
		return client.CreditNote(nil), nil
	case "credit_note_line":
		return client.CreditNoteLine(nil), nil
	case "credit_reversal":
		return client.CreditReversal(nil), nil
	case "customer":
		return client.Customer(nil), nil
	case "customer_balance_transaction":
		return client.CustomerBalanceTransaction(nil), nil
	case "customer_session":
		return client.CustomerSession(nil), nil
	case "debit_reversal":
		return client.DebitReversal(nil), nil
	case "deleted_account":
		return client.DeletedAccount(nil), nil
	case "deleted_apple_pay_domain":
		return client.DeletedApplePayDomain(nil), nil
	case "deleted_coupon":
		return client.DeletedCoupon(nil), nil
	case "deleted_external_account":
		return client.DeletedExternalAccount(nil), nil
	case "deleted_invoiceitem":
		return client.DeletedInvoiceitem(nil), nil
	case "deleted_person":
		return client.DeletedPerson(nil), nil
	case "deleted_plan":
		return client.DeletedPlan(nil), nil
	case "deleted_product_feature":
		return client.DeletedProductFeature(nil), nil
	case "deleted_subscription_item":
		return client.DeletedSubscriptionItem(nil), nil
	case "deleted_webhook_endpoint":
		return client.DeletedWebhookEndpoint(nil), nil
	case "discount":
		return client.Discount(nil), nil
	case "dispute":
		return client.Dispute(nil), nil
	case "domain":
		return client.Domain(nil), nil
	case "early_fraud_warning":
		return client.EarlyFraudWarning(nil), nil
	case "ephemeral_key":
		return client.EphemeralKey(nil), nil
	case "event":
		return client.Event(nil), nil
	case "exchange_rate":
		return client.ExchangeRate(nil), nil
	case "external_account":
		return client.ExternalAccount(nil), nil
	case "feature":
		return client.Feature(nil), nil
	case "feedback_option":
		return client.FeedbackOption(nil), nil
	case "file":
		return client.File(nil), nil
	case "file_link":
		return client.FileLink(nil), nil
	case "financial_account":
		return client.FinancialAccount(nil), nil
	case "financial_account_feature":
		return client.FinancialAccountFeature(nil), nil
	case "fund_cash_balance":
		return client.FundCashBalance(nil), nil
	case "funding_instruction":
		return client.FundingInstruction(nil), nil
	case "history":
		return client.History(nil), nil
	case "inbound_transfer":
		return client.InboundTransfer(nil), nil
	case "install":
		return client.Install(nil), nil
	case "invoice":
		return client.Invoice(nil), nil
	case "invoice_payment":
		return client.InvoicePayment(nil), nil
	case "invoice_rendering_template":
		return client.InvoiceRenderingTemplate(nil), nil
	case "invoiceitem":
		return client.Invoiceitem(nil), nil
	case "line":
		return client.Line(nil), nil
	case "line_item":
		return client.LineItem(nil), nil
	case "linked_account":
		return client.LinkedAccount(nil), nil
	case "linked_account_owner":
		return client.LinkedAccountOwner(nil), nil
	case "location":
		return client.Location(nil), nil
	case "login_link":
		return client.LoginLink(nil), nil
	case "mandate":
		return client.Mandate(nil), nil
	case "meter":
		return client.Meter(nil), nil
	case "meter_event":
		return client.MeterEvent(nil), nil
	case "meter_event_adjustment":
		return client.MeterEventAdjustment(nil), nil
	case "meter_event_summary":
		return client.MeterEventSummary(nil), nil
	case "onboarding_link":
		return client.OnboardingLink(nil), nil
	case "order":
		return client.Order(nil), nil
	case "outbound_payment":
		return client.OutboundPayment(nil), nil
	case "outbound_transfer":
		return client.OutboundTransfer(nil), nil
	case "payment_attempt_record":
		return client.PaymentAttemptRecord(nil), nil
	case "payment_evaluation":
		return client.PaymentEvaluation(nil), nil
	case "payment_intent":
		return client.PaymentIntent(nil), nil
	case "payment_intent_amount_details_line_item":
		return client.PaymentIntentAmountDetailsLineItem(nil), nil
	case "payment_link":
		return client.PaymentLink(nil), nil
	case "payment_method":
		return client.PaymentMethod(nil), nil
	case "payment_method_configuration":
		return client.PaymentMethodConfiguration(nil), nil
	case "payment_method_domain":
		return client.PaymentMethodDomain(nil), nil
	case "payment_record":
		return client.PaymentRecord(nil), nil
	case "payout":
		return client.Payout(nil), nil
	case "person":
		return client.Person(nil), nil
	case "personalization_design":
		return client.PersonalizationDesign(nil), nil
	case "physical_bundle":
		return client.PhysicalBundle(nil), nil
	case "plan":
		return client.Plan(nil), nil
	case "price":
		return client.Price(nil), nil
	case "product":
		return client.Product(nil), nil
	case "product_feature":
		return client.ProductFeature(nil), nil
	case "promotion_code":
		return client.PromotionCode(nil), nil
	case "quote":
		return client.Quote(nil), nil
	case "quote_computed_upfront_line_item":
		return client.QuoteComputedUpfrontLineItem(nil), nil
	case "quote_pdf":
		return client.QuotePdf(nil), nil
	case "reader":
		return client.Reader(nil), nil
	case "received_credit":
		return client.ReceivedCredit(nil), nil
	case "received_debit":
		return client.ReceivedDebit(nil), nil
	case "refund":
		return client.Refund(nil), nil
	case "registration":
		return client.Registration(nil), nil
	case "report_run":
		return client.ReportRun(nil), nil
	case "report_type":
		return client.ReportType(nil), nil
	case "request":
		return client.Request(nil), nil
	case "reversal":
		return client.Reversal(nil), nil
	case "review":
		return client.Review(nil), nil
	case "scheduled_query_run":
		return client.ScheduledQueryRun(nil), nil
	case "search":
		return client.Search(nil), nil
	case "secret":
		return client.Secret(nil), nil
	case "session":
		return client.Session(nil), nil
	case "setting":
		return client.Setting(nil), nil
	case "settlement":
		return client.Settlement(nil), nil
	case "setup_attempt":
		return client.SetupAttempt(nil), nil
	case "setup_intent":
		return client.SetupIntent(nil), nil
	case "shipping_rate":
		return client.ShippingRate(nil), nil
	case "sigma_api_query":
		return client.SigmaApiQuery(nil), nil
	case "source":
		return client.Source(nil), nil
	case "source_mandate_notification":
		return client.SourceMandateNotification(nil), nil
	case "source_transaction":
		return client.SourceTransaction(nil), nil
	case "subscription":
		return client.Subscription(nil), nil
	case "subscription_item":
		return client.SubscriptionItem(nil), nil
	case "subscription_schedule":
		return client.SubscriptionSchedule(nil), nil
	case "supplier":
		return client.Supplier(nil), nil
	case "tax_code":
		return client.TaxCode(nil), nil
	case "tax_id":
		return client.TaxId(nil), nil
	case "tax_rate":
		return client.TaxRate(nil), nil
	case "test_clock":
		return client.TestClock(nil), nil
	case "token":
		return client.Token(nil), nil
	case "topup":
		return client.Topup(nil), nil
	case "transaction":
		return client.Transaction(nil), nil
	case "transaction_entry":
		return client.TransactionEntry(nil), nil
	case "transfer":
		return client.Transfer(nil), nil
	case "trial_offer":
		return client.TrialOffer(nil), nil
	case "value_list":
		return client.ValueList(nil), nil
	case "value_list_item":
		return client.ValueListItem(nil), nil
	case "verification_report":
		return client.VerificationReport(nil), nil
	case "verification_session":
		return client.VerificationSession(nil), nil
	case "webhook_endpoint":
		return client.WebhookEndpoint(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
