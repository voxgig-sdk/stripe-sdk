# Stripe Golang SDK



The Golang SDK for the Stripe API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Account(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/stripe-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/stripe-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/stripe-sdk/go=../stripe-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/stripe-sdk/go"
)

func main() {
    client := sdk.NewStripeSDK(map[string]any{
        "apikey": os.Getenv("STRIPE_APIKEY"),
    })

    // List account records — the value is the array of records itself.
    accounts, err := client.Account(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range accounts.([]any) {
        fmt.Println(item)
    }

    // Load a single account — the value is the loaded record.
    account, err := client.Account(nil).Load(map[string]any{"account": "example_account"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(account)

    // Create a account.
    created, err := client.Account(nil).Create(map[string]any{"id": "example_id", "category": "example_category", "controller": map[string]any{}, "created": 1, "external_accounts": map[string]any{}, "individual": map[string]any{}, "institution_name": "example_institution_name", "livemode": true, "object": "example_object", "status": "example_status", "subcategory": "example_subcategory", "supported_payment_method_types": []any{}}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
calculation, err := client.Calculation(nil).Load(map[string]any{"id": "example_id"}, nil)
if err != nil {
    // handle err
    return
}
_ = calculation
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

calculation, err := client.Calculation(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(calculation) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewStripeSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
STRIPE_TEST_LIVE=TRUE
STRIPE_APIKEY=<your-key>
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewStripeSDK

```go
func NewStripeSDK(options map[string]any) *StripeSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *StripeSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### StripeSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Account` | `(data map[string]any) StripeEntity` | Create an Account entity instance. |
| `AccountLink` | `(data map[string]any) StripeEntity` | Create an AccountLink entity instance. |
| `AccountOwner` | `(data map[string]any) StripeEntity` | Create an AccountOwner entity instance. |
| `AccountSession` | `(data map[string]any) StripeEntity` | Create an AccountSession entity instance. |
| `ActiveEntitlement` | `(data map[string]any) StripeEntity` | Create an ActiveEntitlement entity instance. |
| `Alert` | `(data map[string]any) StripeEntity` | Create an Alert entity instance. |
| `ApplePayDomain` | `(data map[string]any) StripeEntity` | Create an ApplePayDomain entity instance. |
| `ApplicationFee` | `(data map[string]any) StripeEntity` | Create an ApplicationFee entity instance. |
| `Association` | `(data map[string]any) StripeEntity` | Create an Association entity instance. |
| `Authentication` | `(data map[string]any) StripeEntity` | Create an Authentication entity instance. |
| `Authorization` | `(data map[string]any) StripeEntity` | Create an Authorization entity instance. |
| `Balance` | `(data map[string]any) StripeEntity` | Create a Balance entity instance. |
| `BalanceSetting` | `(data map[string]any) StripeEntity` | Create a BalanceSetting entity instance. |
| `BalanceTransaction` | `(data map[string]any) StripeEntity` | Create a BalanceTransaction entity instance. |
| `BankAccount` | `(data map[string]any) StripeEntity` | Create a BankAccount entity instance. |
| `Calculation` | `(data map[string]any) StripeEntity` | Create a Calculation entity instance. |
| `Capability` | `(data map[string]any) StripeEntity` | Create a Capability entity instance. |
| `Card` | `(data map[string]any) StripeEntity` | Create a Card entity instance. |
| `Cardholder` | `(data map[string]any) StripeEntity` | Create a Cardholder entity instance. |
| `CashBalance` | `(data map[string]any) StripeEntity` | Create a CashBalance entity instance. |
| `CashBalanceTransaction` | `(data map[string]any) StripeEntity` | Create a CashBalanceTransaction entity instance. |
| `Charge` | `(data map[string]any) StripeEntity` | Create a Charge entity instance. |
| `Configuration` | `(data map[string]any) StripeEntity` | Create a Configuration entity instance. |
| `ConfirmationToken` | `(data map[string]any) StripeEntity` | Create a ConfirmationToken entity instance. |
| `ConnectionToken` | `(data map[string]any) StripeEntity` | Create a ConnectionToken entity instance. |
| `CountrySpec` | `(data map[string]any) StripeEntity` | Create a CountrySpec entity instance. |
| `Coupon` | `(data map[string]any) StripeEntity` | Create a Coupon entity instance. |
| `CreditBalanceSummary` | `(data map[string]any) StripeEntity` | Create a CreditBalanceSummary entity instance. |
| `CreditBalanceTransaction` | `(data map[string]any) StripeEntity` | Create a CreditBalanceTransaction entity instance. |
| `CreditGrant` | `(data map[string]any) StripeEntity` | Create a CreditGrant entity instance. |
| `CreditNote` | `(data map[string]any) StripeEntity` | Create a CreditNote entity instance. |
| `CreditNoteLine` | `(data map[string]any) StripeEntity` | Create a CreditNoteLine entity instance. |
| `CreditReversal` | `(data map[string]any) StripeEntity` | Create a CreditReversal entity instance. |
| `Customer` | `(data map[string]any) StripeEntity` | Create a Customer entity instance. |
| `CustomerBalanceTransaction` | `(data map[string]any) StripeEntity` | Create a CustomerBalanceTransaction entity instance. |
| `CustomerSession` | `(data map[string]any) StripeEntity` | Create a CustomerSession entity instance. |
| `DebitReversal` | `(data map[string]any) StripeEntity` | Create a DebitReversal entity instance. |
| `DeletedAccount` | `(data map[string]any) StripeEntity` | Create a DeletedAccount entity instance. |
| `DeletedApplePayDomain` | `(data map[string]any) StripeEntity` | Create a DeletedApplePayDomain entity instance. |
| `DeletedCoupon` | `(data map[string]any) StripeEntity` | Create a DeletedCoupon entity instance. |
| `DeletedExternalAccount` | `(data map[string]any) StripeEntity` | Create a DeletedExternalAccount entity instance. |
| `DeletedInvoiceitem` | `(data map[string]any) StripeEntity` | Create a DeletedInvoiceitem entity instance. |
| `DeletedPerson` | `(data map[string]any) StripeEntity` | Create a DeletedPerson entity instance. |
| `DeletedPlan` | `(data map[string]any) StripeEntity` | Create a DeletedPlan entity instance. |
| `DeletedProductFeature` | `(data map[string]any) StripeEntity` | Create a DeletedProductFeature entity instance. |
| `DeletedSubscriptionItem` | `(data map[string]any) StripeEntity` | Create a DeletedSubscriptionItem entity instance. |
| `DeletedWebhookEndpoint` | `(data map[string]any) StripeEntity` | Create a DeletedWebhookEndpoint entity instance. |
| `Discount` | `(data map[string]any) StripeEntity` | Create a Discount entity instance. |
| `Dispute` | `(data map[string]any) StripeEntity` | Create a Dispute entity instance. |
| `Domain` | `(data map[string]any) StripeEntity` | Create a Domain entity instance. |
| `EarlyFraudWarning` | `(data map[string]any) StripeEntity` | Create an EarlyFraudWarning entity instance. |
| `EphemeralKey` | `(data map[string]any) StripeEntity` | Create an EphemeralKey entity instance. |
| `Event` | `(data map[string]any) StripeEntity` | Create an Event entity instance. |
| `ExchangeRate` | `(data map[string]any) StripeEntity` | Create an ExchangeRate entity instance. |
| `ExternalAccount` | `(data map[string]any) StripeEntity` | Create an ExternalAccount entity instance. |
| `Feature` | `(data map[string]any) StripeEntity` | Create a Feature entity instance. |
| `FeedbackOption` | `(data map[string]any) StripeEntity` | Create a FeedbackOption entity instance. |
| `File` | `(data map[string]any) StripeEntity` | Create a File entity instance. |
| `FileLink` | `(data map[string]any) StripeEntity` | Create a FileLink entity instance. |
| `FinancialAccount` | `(data map[string]any) StripeEntity` | Create a FinancialAccount entity instance. |
| `FinancialAccountFeature` | `(data map[string]any) StripeEntity` | Create a FinancialAccountFeature entity instance. |
| `FundCashBalance` | `(data map[string]any) StripeEntity` | Create a FundCashBalance entity instance. |
| `FundingInstruction` | `(data map[string]any) StripeEntity` | Create a FundingInstruction entity instance. |
| `History` | `(data map[string]any) StripeEntity` | Create a History entity instance. |
| `InboundTransfer` | `(data map[string]any) StripeEntity` | Create an InboundTransfer entity instance. |
| `Install` | `(data map[string]any) StripeEntity` | Create an Install entity instance. |
| `Invoice` | `(data map[string]any) StripeEntity` | Create an Invoice entity instance. |
| `InvoicePayment` | `(data map[string]any) StripeEntity` | Create an InvoicePayment entity instance. |
| `InvoiceRenderingTemplate` | `(data map[string]any) StripeEntity` | Create an InvoiceRenderingTemplate entity instance. |
| `Invoiceitem` | `(data map[string]any) StripeEntity` | Create an Invoiceitem entity instance. |
| `Line` | `(data map[string]any) StripeEntity` | Create a Line entity instance. |
| `LineItem` | `(data map[string]any) StripeEntity` | Create a LineItem entity instance. |
| `LinkedAccount` | `(data map[string]any) StripeEntity` | Create a LinkedAccount entity instance. |
| `LinkedAccountOwner` | `(data map[string]any) StripeEntity` | Create a LinkedAccountOwner entity instance. |
| `Location` | `(data map[string]any) StripeEntity` | Create a Location entity instance. |
| `LoginLink` | `(data map[string]any) StripeEntity` | Create a LoginLink entity instance. |
| `Mandate` | `(data map[string]any) StripeEntity` | Create a Mandate entity instance. |
| `Meter` | `(data map[string]any) StripeEntity` | Create a Meter entity instance. |
| `MeterEvent` | `(data map[string]any) StripeEntity` | Create a MeterEvent entity instance. |
| `MeterEventAdjustment` | `(data map[string]any) StripeEntity` | Create a MeterEventAdjustment entity instance. |
| `MeterEventSummary` | `(data map[string]any) StripeEntity` | Create a MeterEventSummary entity instance. |
| `OnboardingLink` | `(data map[string]any) StripeEntity` | Create an OnboardingLink entity instance. |
| `Order` | `(data map[string]any) StripeEntity` | Create an Order entity instance. |
| `OutboundPayment` | `(data map[string]any) StripeEntity` | Create an OutboundPayment entity instance. |
| `OutboundTransfer` | `(data map[string]any) StripeEntity` | Create an OutboundTransfer entity instance. |
| `PaymentAttemptRecord` | `(data map[string]any) StripeEntity` | Create a PaymentAttemptRecord entity instance. |
| `PaymentEvaluation` | `(data map[string]any) StripeEntity` | Create a PaymentEvaluation entity instance. |
| `PaymentIntent` | `(data map[string]any) StripeEntity` | Create a PaymentIntent entity instance. |
| `PaymentIntentAmountDetailsLineItem` | `(data map[string]any) StripeEntity` | Create a PaymentIntentAmountDetailsLineItem entity instance. |
| `PaymentLink` | `(data map[string]any) StripeEntity` | Create a PaymentLink entity instance. |
| `PaymentMethod` | `(data map[string]any) StripeEntity` | Create a PaymentMethod entity instance. |
| `PaymentMethodConfiguration` | `(data map[string]any) StripeEntity` | Create a PaymentMethodConfiguration entity instance. |
| `PaymentMethodDomain` | `(data map[string]any) StripeEntity` | Create a PaymentMethodDomain entity instance. |
| `PaymentRecord` | `(data map[string]any) StripeEntity` | Create a PaymentRecord entity instance. |
| `Payout` | `(data map[string]any) StripeEntity` | Create a Payout entity instance. |
| `Person` | `(data map[string]any) StripeEntity` | Create a Person entity instance. |
| `PersonalizationDesign` | `(data map[string]any) StripeEntity` | Create a PersonalizationDesign entity instance. |
| `PhysicalBundle` | `(data map[string]any) StripeEntity` | Create a PhysicalBundle entity instance. |
| `Plan` | `(data map[string]any) StripeEntity` | Create a Plan entity instance. |
| `Price` | `(data map[string]any) StripeEntity` | Create a Price entity instance. |
| `Product` | `(data map[string]any) StripeEntity` | Create a Product entity instance. |
| `ProductFeature` | `(data map[string]any) StripeEntity` | Create a ProductFeature entity instance. |
| `PromotionCode` | `(data map[string]any) StripeEntity` | Create a PromotionCode entity instance. |
| `Quote` | `(data map[string]any) StripeEntity` | Create a Quote entity instance. |
| `QuoteComputedUpfrontLineItem` | `(data map[string]any) StripeEntity` | Create a QuoteComputedUpfrontLineItem entity instance. |
| `QuotePdf` | `(data map[string]any) StripeEntity` | Create a QuotePdf entity instance. |
| `Reader` | `(data map[string]any) StripeEntity` | Create a Reader entity instance. |
| `ReceivedCredit` | `(data map[string]any) StripeEntity` | Create a ReceivedCredit entity instance. |
| `ReceivedDebit` | `(data map[string]any) StripeEntity` | Create a ReceivedDebit entity instance. |
| `Refund` | `(data map[string]any) StripeEntity` | Create a Refund entity instance. |
| `Registration` | `(data map[string]any) StripeEntity` | Create a Registration entity instance. |
| `ReportRun` | `(data map[string]any) StripeEntity` | Create a ReportRun entity instance. |
| `ReportType` | `(data map[string]any) StripeEntity` | Create a ReportType entity instance. |
| `Request` | `(data map[string]any) StripeEntity` | Create a Request entity instance. |
| `Reversal` | `(data map[string]any) StripeEntity` | Create a Reversal entity instance. |
| `Review` | `(data map[string]any) StripeEntity` | Create a Review entity instance. |
| `ScheduledQueryRun` | `(data map[string]any) StripeEntity` | Create a ScheduledQueryRun entity instance. |
| `Search` | `(data map[string]any) StripeEntity` | Create a Search entity instance. |
| `Secret` | `(data map[string]any) StripeEntity` | Create a Secret entity instance. |
| `Session` | `(data map[string]any) StripeEntity` | Create a Session entity instance. |
| `Setting` | `(data map[string]any) StripeEntity` | Create a Setting entity instance. |
| `Settlement` | `(data map[string]any) StripeEntity` | Create a Settlement entity instance. |
| `SetupAttempt` | `(data map[string]any) StripeEntity` | Create a SetupAttempt entity instance. |
| `SetupIntent` | `(data map[string]any) StripeEntity` | Create a SetupIntent entity instance. |
| `ShippingRate` | `(data map[string]any) StripeEntity` | Create a ShippingRate entity instance. |
| `SigmaApiQuery` | `(data map[string]any) StripeEntity` | Create a SigmaApiQuery entity instance. |
| `Source` | `(data map[string]any) StripeEntity` | Create a Source entity instance. |
| `SourceMandateNotification` | `(data map[string]any) StripeEntity` | Create a SourceMandateNotification entity instance. |
| `SourceTransaction` | `(data map[string]any) StripeEntity` | Create a SourceTransaction entity instance. |
| `Subscription` | `(data map[string]any) StripeEntity` | Create a Subscription entity instance. |
| `SubscriptionItem` | `(data map[string]any) StripeEntity` | Create a SubscriptionItem entity instance. |
| `SubscriptionSchedule` | `(data map[string]any) StripeEntity` | Create a SubscriptionSchedule entity instance. |
| `Supplier` | `(data map[string]any) StripeEntity` | Create a Supplier entity instance. |
| `TaxCode` | `(data map[string]any) StripeEntity` | Create a TaxCode entity instance. |
| `TaxId` | `(data map[string]any) StripeEntity` | Create a TaxId entity instance. |
| `TaxRate` | `(data map[string]any) StripeEntity` | Create a TaxRate entity instance. |
| `TestClock` | `(data map[string]any) StripeEntity` | Create a TestClock entity instance. |
| `Token` | `(data map[string]any) StripeEntity` | Create a Token entity instance. |
| `Topup` | `(data map[string]any) StripeEntity` | Create a Topup entity instance. |
| `Transaction` | `(data map[string]any) StripeEntity` | Create a Transaction entity instance. |
| `TransactionEntry` | `(data map[string]any) StripeEntity` | Create a TransactionEntry entity instance. |
| `Transfer` | `(data map[string]any) StripeEntity` | Create a Transfer entity instance. |
| `TrialOffer` | `(data map[string]any) StripeEntity` | Create a TrialOffer entity instance. |
| `ValueList` | `(data map[string]any) StripeEntity` | Create a ValueList entity instance. |
| `ValueListItem` | `(data map[string]any) StripeEntity` | Create a ValueListItem entity instance. |
| `VerificationReport` | `(data map[string]any) StripeEntity` | Create a VerificationReport entity instance. |
| `VerificationSession` | `(data map[string]any) StripeEntity` | Create a VerificationSession entity instance. |
| `WebhookEndpoint` | `(data map[string]any) StripeEntity` | Create a WebhookEndpoint entity instance. |

### Entity interface (StripeEntity)

All entities implement the `StripeEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    account, err := client.Account(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // account is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Account

| Field | Description |
| --- | --- |
| `"account_holder"` | The account holder that this account belongs to. |
| `"account_numbers"` | Details about the account numbers. |
| `"balance"` | The most recent information about the account's balance. |
| `"balance_refresh"` | The state of the most recent attempt to refresh the account balance. |
| `"business_profile"` | Business information about the account. |
| `"business_type"` | The business type. |
| `"capabilities"` |  |
| `"category"` | The type of the account. |
| `"charges_enabled"` | Whether the account can process charges. |
| `"company"` |  |
| `"controller"` |  |
| `"country"` | The account's country. |
| `"created"` | Time at which the object was created. |
| `"default_currency"` | Three-letter ISO currency code representing the default currency for the account. |
| `"details_submitted"` | Whether account details have been submitted. |
| `"display_name"` | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `"email"` | An email address associated with the account. |
| `"external_accounts"` | External accounts (bank accounts and debit cards) currently attached to this account. |
| `"future_requirements"` |  |
| `"groups"` | The groups associated with the account. |
| `"id"` | Unique identifier for the object. |
| `"individual"` | This is an object representing a person associated with a Stripe account. |
| `"institution_name"` | The name of the institution that holds this account. |
| `"last4"` | The last 4 digits of the account number. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"ownership"` | The most recent information about the account's owners. |
| `"ownership_refresh"` | The state of the most recent attempt to refresh the account owners. |
| `"payouts_enabled"` | Whether the funds in this account can be paid out. |
| `"permissions"` | The list of permissions granted by this account. |
| `"requirements"` |  |
| `"settings"` | Options for customizing how the account functions within Stripe. |
| `"status"` | The status of the link to the account. |
| `"status_details"` |  |
| `"subcategory"` | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `"subscriptions"` | The list of data refresh subscriptions requested on this account. |
| `"supported_payment_method_types"` | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `"tos_acceptance"` |  |
| `"transaction_refresh"` | The state of the most recent attempt to refresh the account transactions. |
| `"type"` | The Stripe account type. |

Operations: Create, List, Load.

API path: `/v1/accounts/{account}`

#### AccountLink

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"expires_at"` | The timestamp at which this account link will expire. |
| `"object"` | String representing the object's type. |
| `"url"` | The URL for the account link. |

Operations: Create.

API path: `/v1/account_links`

#### AccountOwner

| Field | Description |
| --- | --- |
| `"email"` | The email address of the owner. |
| `"id"` | Unique identifier for the object. |
| `"name"` | The full name of the owner. |
| `"object"` | String representing the object's type. |
| `"ownership"` | The ownership object that this owner belongs to. |
| `"phone"` | The raw phone number of the owner. |
| `"raw_address"` | The raw physical address of the owner. |
| `"refreshed_at"` | The timestamp of the refresh that updated this owner. |

Operations: List.

API path: `/v1/financial_connections/accounts/{account}/owners`

#### AccountSession

| Field | Description |
| --- | --- |
| `"account_management"` |  |
| `"account_onboarding"` |  |
| `"balance_report"` |  |
| `"balances"` |  |
| `"disputes_list"` |  |
| `"documents"` |  |
| `"financial_account"` |  |
| `"financial_account_transactions"` |  |
| `"instant_payouts_promotion"` |  |
| `"issuing_card"` |  |
| `"issuing_cards_list"` |  |
| `"notification_banner"` |  |
| `"payment_details"` |  |
| `"payment_disputes"` |  |
| `"payment_method_settings"` |  |
| `"payments"` |  |
| `"payout_details"` |  |
| `"payout_reconciliation_report"` |  |
| `"payouts"` |  |
| `"payouts_list"` |  |
| `"tax_registrations"` |  |
| `"tax_settings"` |  |

Operations: Create.

API path: `/v1/account_sessions`

#### ActiveEntitlement

| Field | Description |
| --- | --- |
| `"feature"` | The [Feature](https://docs.stripe.com/api/entitlements/feature) that the customer is entitled to. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"lookup_key"` | A unique key you provide as your own system identifier. |
| `"object"` | String representing the object's type. |

Operations: List, Load.

API path: `/v1/entitlements/active_entitlements`

#### Alert

| Field | Description |
| --- | --- |
| `"alert_type"` | Defines the type of the alert. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"status"` | Status of the alert. |
| `"title"` | Title of the alert. |
| `"usage_threshold"` | Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://docs.stripe.com/api/billing/meter). |

Operations: Create, List, Load.

API path: `/v1/billing/alerts/{id}/activate`

#### ApplePayDomain

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"domain_name"` |  |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |

Operations: Create, Load.

API path: `/v1/apple_pay/domains`

#### ApplicationFee

| Field | Description |
| --- | --- |
| `"account"` | ID of the Stripe account this fee was taken from. |
| `"amount"` | Amount earned, in cents (or local equivalent). |
| `"amount_refunded"` | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued) |
| `"application"` | ID of the Connect application that earned the fee. |
| `"balance_transaction"` | Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds). |
| `"charge"` | ID of the charge that the application fee was taken from. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"fee_source"` | Polymorphic source of the application fee. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"originating_transaction"` | ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter. |
| `"refunded"` | Whether the fee has been fully refunded. |
| `"refunds"` | A list of refunds that have been applied to the fee. |

Operations: Create, List, Load.

API path: `/v1/application_fees/{id}/refund`

#### Association

| Field | Description |
| --- | --- |

Operations: List.

API path: `/v1/tax/associations/find`

#### Authentication

| Field | Description |
| --- | --- |
| `"acquirer_details"` | Contains additional details about the acquirer for a 3DS Authentication. |
| `"amount"` | The amount for this 3DS Authentication. |
| `"challenge_url"` | The URL for presenting a challenge to your cardholder, present if status is requires_challenge. |
| `"channel"` | Contains details on the channel used (browser, 3RI) for a standalone 3DS Authentication. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"directory_server"` | The 3DS directory server with which this 3DS Authentication was processed. |
| `"fingerprinting_url"` | The URL for performing issuer fingerprinting, present if fingerprinting is supported for the given payment method. |
| `"flow_preference"` | Contains details of the flow preference used for a standalone 3DS Authentication. |
| `"future_usage"` | Contains information about the future authorisations related to this authentication |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"message_category"` | Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"outcome"` | The outcome of this 3DS Authentication. |
| `"outcome_details"` | Contains details on the result for a standalone 3DS Authentication. |
| `"payment_method"` | ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication. |
| `"reason"` | The reason for invoking this 3DS Authentication. |
| `"shipping_address"` | Contains details about the shipping address for a 3DS Authentication. |
| `"status"` | Status of this Authentication. |

Operations: Create, List, Load.

API path: `/v1/three_d_secure/authentications/{authentication}/cancel`

#### Authorization

| Field | Description |
| --- | --- |
| `"amount"` | The total amount that was authorized or rejected. |
| `"amount_details"` | Detailed breakdown of amount components. |
| `"approved"` | Whether the authorization has been approved. |
| `"authorization_method"` | How the card details were provided. |
| `"balance_transactions"` | List of balance transactions associated with this authorization. |
| `"card"` | You can [create physical or virtual cards](https://docs.stripe.com/issuing) that are issued to cardholders. |
| `"card_presence"` | Whether the card was present at the point of sale for the authorization. |
| `"cardholder"` | The cardholder to whom this authorization belongs. |
| `"created"` | Time at which the object was created. |
| `"currency"` | The currency of the cardholder. |
| `"fleet"` | Fleet-specific information for authorizations using Fleet cards. |
| `"fraud_challenges"` | Fraud challenges sent to the cardholder, if this authorization was declined for fraud risk reasons. |
| `"fuel"` | Information about fuel that was purchased with this transaction. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"merchant_amount"` | The total amount that was authorized or rejected. |
| `"merchant_currency"` | The local currency that was presented to the cardholder for the authorization. |
| `"merchant_data"` |  |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"network_data"` | Details about the authorization, such as identifiers, set by the card network. |
| `"object"` | String representing the object's type. |
| `"pending_request"` | The pending authorization request. |
| `"request_history"` | History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. |
| `"status"` | The current status of the authorization in its lifecycle. |
| `"token"` | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this authorization. |
| `"transactions"` | List of [transactions](https://docs.stripe.com/api/issuing/transactions) associated with this authorization. |
| `"treasury"` | [Treasury](https://docs.stripe.com/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts). |
| `"verification_data"` |  |
| `"verified_by_fraud_challenge"` | Whether the authorization bypassed fraud risk checks because the cardholder has previously completed a fraud challenge on a similar high-risk authorization from the same merchant. |
| `"wallet"` | The digital wallet used for this transaction. |

Operations: Create, List, Load.

API path: `/v1/issuing/authorizations/{authorization}`

#### Balance

| Field | Description |
| --- | --- |
| `"available"` | Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://docs.stripe.com/api#transfers) or [Payouts API](https://docs.stripe.com/api#payouts). |
| `"connect_reserved"` | Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. |
| `"instant_available"` | Funds that you can pay out using Instant Payouts. |
| `"issuing"` |  |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"pending"` | Funds that aren't available in the balance yet. |
| `"refund_and_dispute_prefunding"` |  |

Operations: List.

API path: `/v1/balance`

#### BalanceSetting

| Field | Description |
| --- | --- |
| `"debit_negative_balances"` | A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. |
| `"payouts"` | Settings specific to the account's payouts. |
| `"settlement_timing"` |  |

Operations: Create, Load.

API path: `/v1/balance_settings`

#### BalanceTransaction

| Field | Description |
| --- | --- |
| `"amount"` | Gross amount of this transaction (in cents (or local equivalent)). |
| `"available_on"` | The date that the transaction's net funds become available in the Stripe balance. |
| `"balance_type"` | The balance that this transaction impacts. |
| `"checkout_session"` | The ID of the checkout session (if any) that created the transaction. |
| `"created"` | Time at which the object was created. |
| `"credit_note"` | The ID of the credit note (if any) related to the transaction. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | The ID of the customer the transaction belongs to. |
| `"customer_account"` | The ID of an Account representing a customer that the transaction belongs to. |
| `"description"` | An arbitrary string attached to the object. |
| `"ending_balance"` | The customer's `balance` after the transaction was applied. |
| `"exchange_rate"` | If applicable, this transaction uses an exchange rate. |
| `"fee"` | Fees (in cents (or local equivalent)) paid for this transaction. |
| `"fee_details"` | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `"id"` | Unique identifier for the object. |
| `"invoice"` | The ID of the invoice (if any) related to the transaction. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"net"` | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `"object"` | String representing the object's type. |
| `"reporting_category"` | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `"source"` | This transaction relates to the Stripe object. |
| `"status"` | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `"type"` | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

Operations: List, Load.

API path: `/v1/balance_transactions`

#### BankAccount

| Field | Description |
| --- | --- |
| `"account"` | The account this bank account belongs to. |
| `"account_holder_name"` | The name of the person or business that owns the bank account. |
| `"account_holder_type"` | The type of entity that holds the account. |
| `"account_type"` | The bank account type. |
| `"available_payout_methods"` | A set of available payout methods for this bank account. |
| `"bank_name"` | Name of the bank associated with the routing number (e.g., `WELLS FARGO`). |
| `"country"` | Two-letter ISO code representing the country the bank account is located in. |
| `"currency"` | Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. |
| `"customer"` | The ID of the customer that the bank account is associated with. |
| `"default_for_currency"` | Whether this bank account is the default external account for its currency. |
| `"fingerprint"` | Uniquely identifies this particular bank account. |
| `"future_requirements"` | Information about the [upcoming new requirements for the bank account](https://docs.stripe.com/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when. |
| `"id"` | Unique identifier for the object. |
| `"last4"` | The last four digits of the bank account number. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"requirements"` | Information about the requirements for the bank account, including what information needs to be collected. |
| `"routing_number"` | The routing transit number for the bank account. |
| `"status"` | For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, `tokenized_account_number_deactivated` or `errored`. |

Operations: Create, List, Load, Remove.

API path: `/v1/customers/{customer}/bank_accounts/{id}`

#### Calculation

| Field | Description |
| --- | --- |
| `"amount_total"` | Total amount after taxes in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `"customer_details"` |  |
| `"expires_at"` | Timestamp of date at which the tax calculation will expire. |
| `"id"` | Unique identifier for the calculation. |
| `"line_items"` | The list of items the customer is purchasing. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"ship_from_details"` | The details of the ship from location, such as the address. |
| `"shipping_cost"` | The shipping cost details for the calculation. |
| `"tax_amount_exclusive"` | The amount of tax to be collected on top of the line item prices. |
| `"tax_amount_inclusive"` | The amount of tax already included in the line item prices. |
| `"tax_breakdown"` | Breakdown of individual tax amounts that add up to the total. |
| `"tax_date"` | The calculation uses the tax rules and rates that are in effect at this timestamp. |

Operations: Create, Load.

API path: `/v1/tax/calculations`

#### Capability

| Field | Description |
| --- | --- |
| `"account"` | The account for which the capability enables functionality. |
| `"future_requirements"` |  |
| `"id"` | The identifier for the capability. |
| `"object"` | String representing the object's type. |
| `"requested"` | Whether the capability has been requested. |
| `"requested_at"` | Time at which the capability was requested. |
| `"requirements"` |  |
| `"status"` | The status of the capability. |

Operations: Create, List, Load.

API path: `/v1/accounts/{account}/capabilities/{capability}`

#### Card

| Field | Description |
| --- | --- |
| `"account"` |  |
| `"address_city"` | City/District/Suburb/Town/Village. |
| `"address_country"` | Billing address country, if provided when creating card. |
| `"address_line1"` | Address line 1 (Street address/PO Box/Company name). |
| `"address_line1_check"` | If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `"address_line2"` | Address line 2 (Apartment/Suite/Unit/Building). |
| `"address_state"` | State/County/Province/Region. |
| `"address_zip"` | ZIP or postal code. |
| `"address_zip_check"` | If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `"allow_redisplay"` | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `"available_payout_methods"` | A set of available payout methods for this card. |
| `"brand"` | Card brand. |
| `"cancellation_reason"` | The reason why the card was canceled. |
| `"cardholder"` | An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://docs.stripe.com/issuing) cards. |
| `"country"` | Two-letter ISO code representing the country of the card. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. |
| `"customer"` | The customer that this card belongs to. |
| `"cvc"` | The card's CVC. |
| `"cvc_check"` | If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `"default_for_currency"` | Whether this card is the default external account for its currency. |
| `"dynamic_last4"` | (For tokenized numbers only.) The last four digits of the device account number. |
| `"exp_month"` | Two-digit number representing the card's expiration month. |
| `"exp_year"` | Four-digit number representing the card's expiration year. |
| `"financial_account"` | The financial account this card is attached to. |
| `"fingerprint"` | Uniquely identifies this particular card number. |
| `"funding"` | Card funding type. |
| `"id"` | Unique identifier for the object. |
| `"last4"` | The last four digits of the card. |
| `"latest_fraud_warning"` | Stripe’s assessment of whether this card’s details have been compromised. |
| `"lifecycle_controls"` | Rules that control the lifecycle of this card, such as automatic cancellation. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"name"` | Cardholder name. |
| `"networks"` |  |
| `"number"` | The full unredacted card number. |
| `"object"` | String representing the object's type. |
| `"personalization_design"` | The personalization design object belonging to this card. |
| `"regulated_status"` | Status of a card based on the card issuer. |
| `"replaced_by"` | The latest card that replaces this card, if any. |
| `"replacement_for"` | The card this card replaces, if any. |
| `"replacement_reason"` | The reason why the previous card needed to be replaced. |
| `"second_line"` | Text separate from cardholder name, printed on the card. |
| `"shipping"` | Where and how the card will be shipped. |
| `"spending_controls"` |  |
| `"status"` | For external accounts that are cards, possible values are `new` and `errored`. |
| `"tokenization_method"` | If the card number is tokenized, this is the method that was used. |
| `"type"` | The type of the card. |
| `"wallets"` | Information relating to digital wallets (like Apple Pay and Google Pay). |

Operations: Create, List, Load, Remove.

API path: `/v1/customers/{customer}/cards/{id}`

#### Cardholder

| Field | Description |
| --- | --- |
| `"billing"` |  |
| `"company"` | Additional information about a `company` cardholder. |
| `"created"` | Time at which the object was created. |
| `"email"` | The cardholder's email address. |
| `"id"` | Unique identifier for the object. |
| `"individual"` | Additional information about an `individual` cardholder. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"name"` | The cardholder's name. |
| `"object"` | String representing the object's type. |
| `"phone_number"` | The cardholder's phone number. |
| `"preferred_locales"` | The cardholder’s preferred locales (languages), ordered by preference. |
| `"requirements"` |  |
| `"spending_controls"` | Rules that control spending across this cardholder's cards. |
| `"status"` | Specifies whether to permit authorizations on this cardholder's cards. |
| `"type"` | One of `individual` or `company`. |

Operations: Create, List, Load.

API path: `/v1/issuing/cardholders/{cardholder}`

#### CashBalance

| Field | Description |
| --- | --- |
| `"available"` | A hash of all cash balances available to this customer. |
| `"customer"` | The ID of the customer whose cash balance this object represents. |
| `"customer_account"` | The ID of an Account representing a customer whose cash balance this object represents. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"settings"` |  |

Operations: Create, Load.

API path: `/v1/customers/{customer}/cash_balance`

#### CashBalanceTransaction

| Field | Description |
| --- | --- |
| `"adjusted_for_overdraft"` |  |
| `"applied_to_payment"` |  |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | The customer whose available cash balance changed as a result of this transaction. |
| `"customer_account"` | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `"ending_balance"` | The total available cash balance for the specified currency after this transaction was applied. |
| `"funded"` |  |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"net_amount"` | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `"object"` | String representing the object's type. |
| `"refunded_from_payment"` |  |
| `"transferred_to_balance"` |  |
| `"type"` | The type of the cash balance transaction. |
| `"unapplied_from_payment"` |  |

Operations: List, Load.

API path: `/v1/customers/{customer}/cash_balance_transactions`

#### Charge

| Field | Description |
| --- | --- |
| `"amount"` | Amount intended to be collected by this payment. |
| `"amount_captured"` | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `"amount_refunded"` | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `"application"` | ID of the Connect application that created the charge. |
| `"application_fee"` | The application fee (if any) for the charge. |
| `"application_fee_amount"` | The amount of the application fee (if any) requested for the charge. |
| `"balance_transaction"` | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `"billing_details"` |  |
| `"calculated_statement_descriptor"` | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `"captured"` | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | ID of the customer this charge is for if one exists. |
| `"description"` | An arbitrary string attached to the object. |
| `"disputed"` | Whether the charge has been disputed. |
| `"failure_balance_transaction"` | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `"failure_code"` | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `"failure_message"` | Message to user further explaining reason for charge failure if available. |
| `"fraud_details"` | Information on fraud assessments for the charge. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"on_behalf_of"` | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `"outcome"` | Details about whether the payment was accepted, and why. |
| `"paid"` | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `"payment_intent"` | ID of the PaymentIntent associated with this charge, if one exists. |
| `"payment_method"` | ID of the payment method used in this charge. |
| `"payment_method_details"` | Details about the payment method at the time of the transaction. |
| `"presentment_details"` |  |
| `"radar_options"` | Options to configure Radar. |
| `"receipt_email"` | This is the email address that the receipt for this charge was sent to. |
| `"receipt_number"` | This is the transaction number that appears on email receipts sent for this charge. |
| `"receipt_url"` | This is the URL to view the receipt for this charge. |
| `"refunded"` | Whether the charge has been fully refunded. |
| `"refunds"` | A list of refunds that have been applied to the charge. |
| `"review"` | ID of the review associated with this charge if one exists. |
| `"shipping"` | Shipping information for the charge. |
| `"source_transfer"` | The transfer ID which created this charge. |
| `"statement_descriptor"` | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `"statement_descriptor_suffix"` | Provides information about a card charge. |
| `"status"` | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `"transfer"` | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `"transfer_data"` | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `"transfer_group"` | A string that identifies this transaction as part of a group. |

Operations: Create, List, Load.

API path: `/v1/charges/{charge}`

#### Configuration

| Field | Description |
| --- | --- |
| `"active"` | Whether the configuration is active and can be used to create portal sessions. |
| `"application"` | ID of the Connect Application that created the configuration. |
| `"bbpos_wisepad3"` |  |
| `"bbpos_wisepos_e"` |  |
| `"business_profile"` |  |
| `"cellular"` |  |
| `"created"` | Time at which the object was created. |
| `"default_return_url"` | The default URL to redirect customers to when they click on the portal's link to return to your website. |
| `"features"` |  |
| `"id"` | Unique identifier for the object. |
| `"is_account_default"` | Whether this Configuration is the default for your account |
| `"is_default"` | Whether the configuration is the default. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"login_page"` |  |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"name"` | The name of the configuration. |
| `"object"` | String representing the object's type. |
| `"offline"` |  |
| `"reboot_window"` |  |
| `"stripe_s700"` |  |
| `"stripe_s710"` |  |
| `"tipping"` |  |
| `"updated"` | Time at which the object was last updated. |
| `"verifone_m425"` |  |
| `"verifone_p400"` |  |
| `"verifone_p630"` |  |
| `"verifone_ux700"` |  |
| `"verifone_v660p"` |  |
| `"wifi"` |  |

Operations: Create, List, Load, Remove.

API path: `/v1/billing_portal/configurations/{configuration}`

#### ConfirmationToken

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"expires_at"` | Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"mandate_data"` | Data used for generating a Mandate. |
| `"metadata"` | Set of key-value pairs that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"payment_intent"` | ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `"payment_method_options"` | Payment-method-specific configuration for this ConfirmationToken. |
| `"payment_method_preview"` | Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken. |
| `"return_url"` | Return URL used to confirm the Intent. |
| `"setup_future_usage"` | Indicates that you intend to make future payments with this ConfirmationToken's payment method. |
| `"setup_intent"` | ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `"shipping"` | Shipping information collected on this ConfirmationToken. |
| `"use_stripe_sdk"` | Indicates whether the Stripe SDK is used to handle confirmation flow. |

Operations: Create, Load.

API path: `/v1/test_helpers/confirmation_tokens`

#### ConnectionToken

| Field | Description |
| --- | --- |
| `"location"` | The id of the location that this connection token is scoped to. |
| `"object"` | String representing the object's type. |
| `"secret"` | Your application should pass this token to the Stripe Terminal SDK. |

Operations: Create.

API path: `/v1/terminal/connection_tokens`

#### CountrySpec

| Field | Description |
| --- | --- |
| `"default_currency"` | The default currency for this country. |
| `"id"` | Unique identifier for the object. |
| `"object"` | String representing the object's type. |
| `"supported_bank_account_currencies"` | Currencies that can be accepted in the specific country (for transfers). |
| `"supported_payment_currencies"` | Currencies that can be accepted in the specified country (for payments). |
| `"supported_payment_methods"` | Payment methods available in the specified country. |
| `"supported_transfer_countries"` | Countries that can accept transfers from the specified country. |
| `"verification_fields"` |  |

Operations: List, Load.

API path: `/v1/country_specs`

#### Coupon

| Field | Description |
| --- | --- |
| `"amount_off"` | Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer. |
| `"applies_to"` |  |
| `"created"` | Time at which the object was created. |
| `"currency"` | If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off. |
| `"currency_options"` | Coupons defined in each available currency option. |
| `"duration"` | One of `forever`, `once`, or `repeating`. |
| `"duration_in_months"` | If `duration` is `repeating`, the number of months the coupon applies. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"max_redemptions"` | Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"name"` | Name of the coupon displayed to customers on for instance invoices or receipts. |
| `"object"` | String representing the object's type. |
| `"percent_off"` | Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. |
| `"redeem_by"` | Date after which the coupon can no longer be redeemed. |
| `"times_redeemed"` | Number of times this coupon has been applied to a customer. |
| `"valid"` | Taking account of the above properties, whether this coupon can still be applied to a customer. |

Operations: Create, List, Load.

API path: `/v1/coupons/{coupon}`

#### CreditBalanceSummary

| Field | Description |
| --- | --- |
| `"available_balance"` |  |
| `"ledger_balance"` |  |

Operations: List.

API path: `/v1/billing/credit_balance_summary`

#### CreditBalanceTransaction

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"credit"` | Credit details for this credit balance transaction. |
| `"credit_grant"` | The credit grant associated with this credit balance transaction. |
| `"debit"` | Debit details for this credit balance transaction. |
| `"effective_at"` | The effective time of this credit balance transaction. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"test_clock"` | ID of the test clock this credit balance transaction belongs to. |
| `"type"` | The type of credit balance transaction (credit or debit). |

Operations: List, Load.

API path: `/v1/billing/credit_balance_transactions`

#### CreditGrant

| Field | Description |
| --- | --- |
| `"amount"` |  |
| `"applicability_config"` |  |
| `"category"` | The category of this credit grant. |
| `"created"` | Time at which the object was created. |
| `"customer"` | ID of the customer receiving the billing credits. |
| `"customer_account"` | ID of the account representing the customer receiving the billing credits |
| `"effective_at"` | The time when the billing credits become effective-when they're eligible for use. |
| `"expires_at"` | The time when the billing credits expire. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"name"` | A descriptive name shown in dashboard. |
| `"object"` | String representing the object's type. |
| `"priority"` | The priority for applying this credit grant. |
| `"test_clock"` | ID of the test clock this credit grant belongs to. |
| `"updated"` | Time at which the object was last updated. |
| `"voided_at"` | The time when this credit grant was voided. |

Operations: Create, List, Load.

API path: `/v1/billing/credit_grants/{id}`

#### CreditNote

| Field | Description |
| --- | --- |
| `"amount"` | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax. |
| `"amount_shipping"` | This is the sum of all the shipping amounts. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | ID of the customer. |
| `"customer_account"` | ID of the account representing the customer. |
| `"customer_balance_transaction"` | Customer balance transaction related to this credit note. |
| `"discount_amount"` | The integer amount in cents (or local equivalent) representing the total amount of discount that was credited. |
| `"discount_amounts"` | The aggregate amounts calculated per discount for all line items. |
| `"effective_at"` | The date when this credit note is in effect. |
| `"id"` | Unique identifier for the object. |
| `"invoice"` | ID of the invoice. |
| `"lines"` | Line items that make up the credit note |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"memo"` | Customer-facing text that appears on the credit note PDF. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"number"` | A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice. |
| `"object"` | String representing the object's type. |
| `"out_of_band_amount"` | Amount that was credited outside of Stripe. |
| `"pdf"` | The link to download the PDF of the credit note. |
| `"post_payment_amount"` | The amount of the credit note that was refunded to the customer, credited to the customer's balance, credited outside of Stripe, or any combination thereof. |
| `"pre_payment_amount"` | The amount of the credit note by which the invoice's `amount_remaining` and `amount_due` were reduced. |
| `"pretax_credit_amounts"` | The pretax credit amounts (ex: discount, credit grants, etc) for all line items. |
| `"reason"` | Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory` |
| `"refunds"` | Refunds related to this credit note. |
| `"shipping_cost"` | The details of the cost of shipping, including the ShippingRate applied to the invoice. |
| `"status"` | Status of this credit note, one of `issued` or `void`. |
| `"subtotal"` | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts. |
| `"subtotal_excluding_tax"` | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts. |
| `"total"` | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount. |
| `"total_excluding_tax"` | The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts. |
| `"total_taxes"` | The aggregate tax information for all line items. |
| `"type"` | Type of this credit note, one of `pre_payment` or `post_payment`. |
| `"voided_at"` | The time that the credit note was voided. |

Operations: Create, List, Load.

API path: `/v1/credit_notes/{id}`

#### CreditNoteLine

| Field | Description |
| --- | --- |
| `"amount"` | The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts. |
| `"description"` | Description of the item being credited. |
| `"discount_amount"` | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `"discount_amounts"` | The amount of discount calculated per discount for this line item |
| `"id"` | Unique identifier for the object. |
| `"invoice_line_item"` | ID of the invoice line item being credited |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"pretax_credit_amounts"` | The pretax credit amounts (ex: discount, credit grants, etc) for this line item. |
| `"quantity"` | The number of units of product being credited. |
| `"tax_rates"` | The tax rates which apply to the line item. |
| `"taxes"` | The tax information of the line item. |
| `"type"` | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `"unit_amount"` | The cost of each unit of product being credited. |
| `"unit_amount_decimal"` | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

Operations: List.

API path: `/v1/credit_notes/{credit_note}/lines`

#### CreditReversal

| Field | Description |
| --- | --- |
| `"amount"` | Amount (in cents) transferred. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"financial_account"` | The FinancialAccount to reverse funds from. |
| `"hosted_regulatory_receipt_url"` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"network"` | The rails used to reverse the funds. |
| `"object"` | String representing the object's type. |
| `"received_credit"` | The ReceivedCredit being reversed. |
| `"status"` | Status of the CreditReversal |
| `"status_transitions"` |  |
| `"transaction"` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/treasury/credit_reversals`

#### Customer

| Field | Description |
| --- | --- |
| `"address"` | The customer's billing address. |
| `"balance"` | The current balance, if any, that's stored on the customer in their default currency. |
| `"business_name"` | The customer's business name. |
| `"cash_balance"` | The current funds being held by Stripe on behalf of the customer. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes. |
| `"customer_account"` | The ID of an Account representing a customer. |
| `"default_source"` | ID of the default payment source for the customer. |
| `"delinquent"` | Tracks the most recent state change on any invoice belonging to the customer. |
| `"description"` | An arbitrary string attached to the object. |
| `"discount"` | Describes the current discount active on the customer, if there is one. |
| `"email"` | The customer's email address. |
| `"id"` | Unique identifier for the object. |
| `"individual_name"` | The customer's individual name. |
| `"invoice_credit_balance"` | The current multi-currency balances, if any, that's stored on the customer. |
| `"invoice_prefix"` | The prefix for the customer used to generate unique invoice numbers. |
| `"invoice_settings"` |  |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"name"` | The customer's full name or business name. |
| `"next_invoice_sequence"` | The suffix of the customer's next invoice number (for example, 0001). |
| `"object"` | String representing the object's type. |
| `"phone"` | The customer's phone number. |
| `"preferred_locales"` | The customer's preferred locales (languages), ordered by preference. |
| `"shipping"` | Mailing and shipping address for the customer. |
| `"sources"` | The customer's payment sources, if any. |
| `"subscriptions"` | The customer's current subscriptions, if any. |
| `"tax"` |  |
| `"tax_exempt"` | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `"tax_ids"` | The customer's tax IDs. |
| `"test_clock"` | ID of the test clock that this customer belongs to. |

Operations: Create, List, Load, Remove.

API path: `/v1/customers/{customer}`

#### CustomerBalanceTransaction

| Field | Description |
| --- | --- |
| `"amount"` | The amount of the transaction. |
| `"checkout_session"` | The ID of the checkout session (if any) that created the transaction. |
| `"created"` | Time at which the object was created. |
| `"credit_note"` | The ID of the credit note (if any) related to the transaction. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | The ID of the customer the transaction belongs to. |
| `"customer_account"` | The ID of an Account representing a customer that the transaction belongs to. |
| `"description"` | An arbitrary string attached to the object. |
| `"ending_balance"` | The customer's `balance` after the transaction was applied. |
| `"id"` | Unique identifier for the object. |
| `"invoice"` | The ID of the invoice (if any) related to the transaction. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"type"` | Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or… |

Operations: Create, Load.

API path: `/v1/customers/{customer}/balance_transactions/{transaction}`

#### CustomerSession

| Field | Description |
| --- | --- |
| `"client_secret"` | The client secret of this Customer Session. |
| `"components"` | Configuration for the components supported by this Customer Session. |
| `"created"` | Time at which the object was created. |
| `"customer"` | The Customer the Customer Session was created for. |
| `"customer_account"` | The Account that the Customer Session was created for. |
| `"expires_at"` | The timestamp at which this Customer Session will expire. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |

Operations: Create.

API path: `/v1/customer_sessions`

#### DebitReversal

| Field | Description |
| --- | --- |
| `"amount"` | Amount (in cents) transferred. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"financial_account"` | The FinancialAccount to reverse funds from. |
| `"hosted_regulatory_receipt_url"` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `"id"` | Unique identifier for the object. |
| `"linked_flows"` | Other flows linked to a DebitReversal. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"network"` | The rails used to reverse the funds. |
| `"object"` | String representing the object's type. |
| `"received_debit"` | The ReceivedDebit being reversed. |
| `"status"` | Status of the DebitReversal |
| `"status_transitions"` |  |
| `"transaction"` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/treasury/debit_reversals`

#### DeletedAccount

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/v1/accounts/{account}`

#### DeletedApplePayDomain

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/v1/apple_pay/domains/{domain}`

#### DeletedCoupon

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/v1/coupons/{coupon}`

#### DeletedExternalAccount

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/v1/accounts/{account}/bank_accounts/{id}`

#### DeletedInvoiceitem

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/v1/invoiceitems/{invoiceitem}`

#### DeletedPerson

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/v1/accounts/{account}/people/{person}`

#### DeletedPlan

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/v1/plans/{plan}`

#### DeletedProductFeature

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/v1/products/{product}/features/{id}`

#### DeletedSubscriptionItem

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/v1/subscription_items/{item}`

#### DeletedWebhookEndpoint

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/v1/webhook_endpoints/{webhook_endpoint}`

#### Discount

| Field | Description |
| --- | --- |
| `"checkout_session"` | The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. |
| `"customer"` | The ID of the customer associated with this discount. |
| `"customer_account"` | The ID of the account representing the customer associated with this discount. |
| `"end"` | If the coupon has a duration of `repeating`, the date that this discount will end. |
| `"id"` | The ID of the discount object. |
| `"invoice"` | The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice. |
| `"invoice_item"` | The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item. |
| `"object"` | String representing the object's type. |
| `"promotion_code"` | The promotion code applied to create this discount. |
| `"source"` |  |
| `"start"` | Date that the coupon was applied. |
| `"subscription"` | The subscription that this coupon is applied to, if it is applied to a particular subscription. |
| `"subscription_item"` | The subscription item that this coupon is applied to, if it is applied to a particular subscription item. |

Operations: Load, Remove.

API path: `/v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount`

#### Dispute

| Field | Description |
| --- | --- |
| `"amount"` | Disputed amount. |
| `"balance_transactions"` | List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute. |
| `"charge"` | ID of the charge that's disputed. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"enhanced_eligibility_types"` | List of eligibility types that are included in `enhanced_evidence`. |
| `"evidence"` |  |
| `"evidence_details"` |  |
| `"id"` | Unique identifier for the object. |
| `"is_charge_refundable"` | If true, it's still possible to refund the disputed payment. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"loss_reason"` | The enum that describes the dispute loss outcome. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"payment_intent"` | ID of the PaymentIntent that's disputed. |
| `"payment_method_details"` |  |
| `"reason"` | Reason given by cardholder for dispute. |
| `"status"` | The current status of a dispute. |
| `"transaction"` | The transaction being disputed. |
| `"treasury"` | [Treasury](https://docs.stripe.com/api/treasury) details related to this dispute if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts) |

Operations: Create, List, Load.

API path: `/v1/charges/{charge}/dispute`

#### Domain

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"domain_name"` |  |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |

Operations: List.

API path: `/v1/apple_pay/domains`

#### EarlyFraudWarning

| Field | Description |
| --- | --- |
| `"actionable"` | An EFW is actionable if it has not received a dispute and has not been fully refunded. |
| `"charge"` | ID of the charge this early fraud warning is for, optionally expanded. |
| `"created"` | Time at which the object was created. |
| `"fraud_type"` | The type of fraud labelled by the issuer. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"payment_intent"` | ID of the Payment Intent this early fraud warning is for, optionally expanded. |

Operations: List, Load.

API path: `/v1/radar/early_fraud_warnings`

#### EphemeralKey

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"expires"` | Time at which the key will expire. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"secret"` | The key's secret. |

Operations: Create, Remove.

API path: `/v1/ephemeral_keys`

#### Event

| Field | Description |
| --- | --- |
| `"account"` | The connected account that originates the event. |
| `"api_version"` | The Stripe API version used to render `data` when the event was created. |
| `"context"` | Authentication context needed to fetch the event or related object. |
| `"created"` | Time at which the object was created. |
| `"data"` |  |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"pending_webhooks"` | Number of webhooks that haven't been successfully delivered (for example, to return a 20x response) to the URLs you specify. |
| `"request"` | Information on the API request that triggers the event. |
| `"type"` | Description of the event (for example, `invoice.created` or `charge.refunded`). |

Operations: List, Load.

API path: `/v1/events`

#### ExchangeRate

| Field | Description |
| --- | --- |
| `"id"` | Unique identifier for the object. |
| `"object"` | String representing the object's type. |
| `"rates"` | Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency. |

Operations: List, Load.

API path: `/v1/exchange_rates`

#### ExternalAccount

| Field | Description |
| --- | --- |
| `"data"` | The list contains all external accounts that have been attached to the Stripe account. |
| `"has_more"` | True if this list has another page of items after this one that can be fetched. |
| `"id"` |  |
| `"object"` | String representing the object's type. |
| `"url"` | The URL where this list can be accessed. |

Operations: Create, List, Load.

API path: `/v1/accounts/{account}/bank_accounts/{id}`

#### Feature

| Field | Description |
| --- | --- |
| `"active"` | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `"entitlement_feature"` | A feature represents a monetizable ability or functionality in your system. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"lookup_key"` | A unique key you provide as your own system identifier. |
| `"metadata"` | Set of key-value pairs that you can attach to an object. |
| `"name"` | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `"object"` | String representing the object's type. |

Operations: Create, List, Load.

API path: `/v1/entitlements/features/{id}`

#### FeedbackOption

| Field | Description |
| --- | --- |
| `"deactivated_at"` | The time the feedback option was deactivated, if any. |
| `"description"` | An arbitrary string attached to the object. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"status"` | The feedback option's status. |
| `"status_transitions"` |  |

Operations: Create, List, Load.

API path: `/v1/billing/feedback_options/{id}`

#### File

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"data"` | Details about each object. |
| `"expires_at"` | The file expires and isn't available at this time in epoch seconds. |
| `"filename"` | The suitable name for saving the file to a filesystem. |
| `"has_more"` | True if this list has another page of items after this one that can be fetched. |
| `"id"` | Unique identifier for the object. |
| `"links"` | A list of [file links](https://docs.stripe.com/api#file_links) that point at this file. |
| `"object"` | String representing the object's type. |
| `"purpose"` | The [purpose](https://docs.stripe.com/file-upload#uploading-a-file) of the uploaded file. |
| `"size"` | The size of the file object in bytes. |
| `"title"` | A suitable title for the document. |
| `"type"` | The returned file type (for example, `csv`, `pdf`, `jpg`, or `png`). |
| `"url"` | The URL where this list can be accessed. |

Operations: Create, List, Load.

API path: `/v1/files`

#### FileLink

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"expired"` | Returns if the link is already expired. |
| `"expires_at"` | Time that the link expires. |
| `"file"` | The file object this link points to. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"url"` | The publicly accessible URL to download the file. |

Operations: Create, List, Load.

API path: `/v1/file_links/{link}`

#### FinancialAccount

| Field | Description |
| --- | --- |
| `"active_features"` | The array of paths to active Features in the Features hash. |
| `"balance"` | Balance information for the FinancialAccount |
| `"country"` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `"created"` | Time at which the object was created. |
| `"features"` | Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`. |
| `"financial_addresses"` | The set of credentials that resolve to a FinancialAccount. |
| `"id"` | Unique identifier for the object. |
| `"is_default"` |  |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"nickname"` | The nickname for the FinancialAccount. |
| `"object"` | String representing the object's type. |
| `"pending_features"` | The array of paths to pending Features in the Features hash. |
| `"platform_restrictions"` | The set of functionalities that the platform can restrict on the FinancialAccount. |
| `"restricted_features"` | The array of paths to restricted Features in the Features hash. |
| `"status"` | Status of this FinancialAccount. |
| `"status_details"` |  |
| `"supported_currencies"` | The currencies the FinancialAccount can hold a balance in. |

Operations: Create, List, Load.

API path: `/v1/treasury/financial_accounts/{financial_account}`

#### FinancialAccountFeature

| Field | Description |
| --- | --- |
| `"card_issuing"` | Toggle settings for enabling/disabling a feature |
| `"deposit_insurance"` | Toggle settings for enabling/disabling a feature |
| `"financial_addresses"` | Settings related to Financial Addresses features on a Financial Account |
| `"id"` |  |
| `"inbound_transfers"` | InboundTransfers contains inbound transfers features for a FinancialAccount. |
| `"intra_stripe_flows"` | Toggle settings for enabling/disabling a feature |
| `"object"` | String representing the object's type. |
| `"outbound_payments"` | Settings related to Outbound Payments features on a Financial Account |
| `"outbound_transfers"` | OutboundTransfers contains outbound transfers features for a FinancialAccount. |

Operations: Create, Load.

API path: `/v1/treasury/financial_accounts/{financial_account}/features`

#### FundCashBalance

| Field | Description |
| --- | --- |
| `"adjusted_for_overdraft"` |  |
| `"applied_to_payment"` |  |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | The customer whose available cash balance changed as a result of this transaction. |
| `"customer_account"` | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `"ending_balance"` | The total available cash balance for the specified currency after this transaction was applied. |
| `"funded"` |  |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"net_amount"` | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `"object"` | String representing the object's type. |
| `"refunded_from_payment"` |  |
| `"transferred_to_balance"` |  |
| `"type"` | The type of the cash balance transaction. |
| `"unapplied_from_payment"` |  |

Operations: Create.

API path: `/v1/test_helpers/customers/{customer}/fund_cash_balance`

#### FundingInstruction

| Field | Description |
| --- | --- |
| `"country"` | The country of the bank account to fund |
| `"financial_addresses"` | A list of financial addresses that can be used to fund a particular balance |
| `"type"` | The bank_transfer type |

Operations: Create.

API path: `/v1/customers/{customer}/funding_instructions`

#### History

| Field | Description |
| --- | --- |
| `"amount"` | Gross amount of this transaction (in cents (or local equivalent)). |
| `"available_on"` | The date that the transaction's net funds become available in the Stripe balance. |
| `"balance_type"` | The balance that this transaction impacts. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"description"` | An arbitrary string attached to the object. |
| `"exchange_rate"` | If applicable, this transaction uses an exchange rate. |
| `"fee"` | Fees (in cents (or local equivalent)) paid for this transaction. |
| `"fee_details"` | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `"id"` | Unique identifier for the object. |
| `"net"` | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `"object"` | String representing the object's type. |
| `"reporting_category"` | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `"source"` | This transaction relates to the Stripe object. |
| `"status"` | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `"type"` | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

Operations: List.

API path: `/v1/balance/history`

#### InboundTransfer

| Field | Description |
| --- | --- |
| `"amount"` | Amount (in cents) transferred. |
| `"cancelable"` | Returns `true` if the InboundTransfer is able to be canceled. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"description"` | An arbitrary string attached to the object. |
| `"failure_details"` | Details about this InboundTransfer's failure. |
| `"financial_account"` | The FinancialAccount that received the funds. |
| `"hosted_regulatory_receipt_url"` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `"id"` | Unique identifier for the object. |
| `"linked_flows"` |  |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"origin_payment_method"` | The origin payment method to be debited for an InboundTransfer. |
| `"origin_payment_method_details"` | Details about the PaymentMethod for an InboundTransfer. |
| `"returned"` | Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state. |
| `"statement_descriptor"` | Statement descriptor shown when funds are debited from the source. |
| `"status"` | Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. |
| `"status_transitions"` |  |
| `"transaction"` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/treasury/inbound_transfers/{inbound_transfer}/cancel`

#### Install

| Field | Description |
| --- | --- |
| `"account"` | The ID of the account that the app install belongs to. |
| `"app"` | The ID of the app installed. |
| `"approval_required"` | Whether the installer must authorize pending permissions, content security policy entries, or endpoints. |
| `"auth_code"` | The authorization code for an oauth app install. |
| `"channel"` | The distribution channel associated with the app install. |
| `"content_security_policy_granted"` |  |
| `"content_security_policy_pending"` |  |
| `"created"` | Time at which the object was created. |
| `"created_by"` | The ID of the embedding platform that created the install, if applicable. |
| `"endpoints_granted"` | The endpoint URLs authorized by the installer. |
| `"endpoints_pending"` | The endpoint URLs requested by the latest app version that the installer has not authorized. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"permissions_granted"` | The permissions authorized by the installer. |
| `"permissions_pending"` | The permissions requested by the latest app version that the installer has not authorized. |
| `"status"` | The status of the app install. |

Operations: Create, List, Load.

API path: `/v1/apps/installs/{id}`

#### Invoice

| Field | Description |
| --- | --- |
| `"account_country"` | The country of the business associated with this invoice, most often the business creating the invoice. |
| `"account_name"` | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `"account_tax_ids"` | The account tax IDs associated with the invoice. |
| `"amount_due"` | Final amount due at this time for this invoice. |
| `"amount_overpaid"` | Amount that was overpaid on the invoice. |
| `"amount_paid"` | The amount, in cents (or local equivalent), that was paid. |
| `"amount_paid_off_stripe"` | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `"amount_remaining"` | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `"amount_shipping"` | This is the sum of all the shipping amounts. |
| `"application"` | ID of the Connect Application that created the invoice. |
| `"attempt_count"` | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `"attempted"` | Whether an attempt has been made to pay the invoice. |
| `"auto_advance"` | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `"automatic_tax"` |  |
| `"automatically_finalizes_at"` | The time when this invoice is currently scheduled to be automatically finalized. |
| `"billing_reason"` | Indicates the reason why the invoice was created. |
| `"collection_method"` | Either `charge_automatically`, or `send_invoice`. |
| `"confirmation_secret"` | The confirmation secret associated with this invoice. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"custom_fields"` | Custom fields displayed on the invoice. |
| `"customer"` | The ID of the customer to bill. |
| `"customer_account"` | The ID of the account representing the customer to bill. |
| `"customer_address"` | The customer's address. |
| `"customer_email"` | The customer's email. |
| `"customer_name"` | The customer's name. |
| `"customer_phone"` | The customer's phone number. |
| `"customer_shipping"` | The customer's shipping information. |
| `"customer_tax_exempt"` | The customer's tax exempt status. |
| `"customer_tax_ids"` | The customer's tax IDs. |
| `"default_payment_method"` | ID of the default payment method for the invoice. |
| `"default_source"` | ID of the default payment source for the invoice. |
| `"default_tax_rates"` | The tax rates applied to this invoice, if any. |
| `"description"` | An arbitrary string attached to the object. |
| `"discounts"` | The discounts applied to the invoice. |
| `"due_date"` | The date on which payment for this invoice is due. |
| `"effective_at"` | The date when this invoice is in effect. |
| `"ending_balance"` | Ending customer balance after the invoice is finalized. |
| `"footer"` | Footer displayed on the invoice. |
| `"from_invoice"` | Details of the invoice that was cloned. |
| `"hosted_invoice_url"` | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `"id"` | Unique identifier for the object. |
| `"invoice_pdf"` | The link to download the PDF for the invoice. |
| `"issuer"` |  |
| `"last_finalization_error"` | The error encountered during the previous attempt to finalize the invoice. |
| `"latest_revision"` | The ID of the most recent non-draft revision of this invoice |
| `"lines"` | The individual line items that make up the invoice. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"next_payment_attempt"` | The time at which payment will next be attempted. |
| `"number"` | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `"object"` | String representing the object's type. |
| `"on_behalf_of"` | The account (if any) for which the funds of the invoice payment are intended. |
| `"parent"` | The parent that generated this invoice |
| `"payment_settings"` |  |
| `"payments"` | Payments for this invoice. |
| `"period_end"` | The latest timestamp at which invoice items can be associated with this invoice. |
| `"period_start"` | The earliest timestamp at which invoice items can be associated with this invoice. |
| `"post_payment_credit_notes_amount"` | Total amount of all post-payment credit notes issued for this invoice. |
| `"pre_payment_credit_notes_amount"` | Total amount of all pre-payment credit notes issued for this invoice. |
| `"receipt_number"` | This is the transaction number that appears on email receipts sent for this invoice. |
| `"rendering"` | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `"shipping_cost"` | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `"shipping_details"` | Shipping details for the invoice. |
| `"starting_balance"` | Starting customer balance before the invoice is finalized. |
| `"statement_descriptor"` | Extra information about an invoice for the customer's credit card statement. |
| `"status"` | The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. |
| `"status_details"` |  |
| `"status_transitions"` |  |
| `"subtotal"` | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `"subtotal_excluding_tax"` | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `"test_clock"` | ID of the test clock this invoice belongs to. |
| `"threshold_reason"` |  |
| `"total"` | Total after discounts and taxes. |
| `"total_discount_amounts"` | The aggregate amounts calculated per discount across all line items. |
| `"total_excluding_tax"` | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `"total_pretax_credit_amounts"` | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `"total_taxes"` | The aggregate tax information of all line items. |
| `"webhooks_delivered_at"` | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

Operations: Create, List, Load, Remove.

API path: `/v1/invoices/{invoice}`

#### InvoicePayment

| Field | Description |
| --- | --- |
| `"amount_paid"` | Amount that was actually paid for this invoice, in cents (or local equivalent). |
| `"amount_requested"` | Amount intended to be paid toward this invoice, in cents (or local equivalent) |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"id"` | Unique identifier for the object. |
| `"invoice"` | The invoice that was paid. |
| `"is_default"` | Stripe automatically creates a default InvoicePayment when the invoice is finalized, and keeps it synchronized with the invoice’s `amount_remaining`. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"payment"` |  |
| `"status"` | The status of the payment, one of `open`, `paid`, or `canceled`. |
| `"status_transitions"` |  |

Operations: List, Load.

API path: `/v1/invoice_payments`

#### InvoiceRenderingTemplate

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"nickname"` | A brief description of the template, hidden from customers |
| `"object"` | String representing the object's type. |
| `"status"` | The status of the template, one of `active` or `archived`. |
| `"version"` | Version of this template; version increases by one when an update on the template changes any field that controls invoice rendering |

Operations: Create, List, Load.

API path: `/v1/invoice_rendering_templates/{template}/archive`

#### Invoiceitem

| Field | Description |
| --- | --- |
| `"amount"` | Amount (in the `currency` specified) of the invoice item. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | The ID of the customer to bill for this invoice item. |
| `"customer_account"` | The ID of the account to bill for this invoice item. |
| `"date"` | Time at which the object was created. |
| `"description"` | An arbitrary string attached to the object. |
| `"discountable"` | If true, discounts will apply to this invoice item. |
| `"discounts"` | The discounts which apply to the invoice item. |
| `"frozen_fields"` | Array of field names that can't be modified. |
| `"id"` | Unique identifier for the object. |
| `"invoice"` | The ID of the invoice this invoice item belongs to. |
| `"invoicing_rules"` | The rules that control when this invoice item is eligible for invoicing. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"net_amount"` | The amount after discounts, but before credits and taxes. |
| `"object"` | String representing the object's type. |
| `"parent"` | The parent that generated this invoice item. |
| `"period"` |  |
| `"pricing"` | The pricing information of the invoice item. |
| `"proration"` | Whether the invoice item was created automatically as a proration adjustment when the customer switched plans. |
| `"proration_details"` |  |
| `"quantity"` | Quantity of units for the invoice item in integer format, with any decimal precision truncated. |
| `"quantity_decimal"` | Non-negative decimal with at most 12 decimal places. |
| `"tax_rates"` | The tax rates which apply to the invoice item. |
| `"test_clock"` | ID of the test clock this invoice item belongs to. |

Operations: Create, List, Load.

API path: `/v1/invoiceitems/{invoiceitem}`

#### Line

| Field | Description |
| --- | --- |
| `"amount"` | The amount, in cents (or local equivalent). |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"description"` | An arbitrary string attached to the object. |
| `"discount_amount"` | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `"discount_amounts"` | The amount of discount calculated per discount for this line item. |
| `"discountable"` | If true, discounts will apply to this line item. |
| `"discounts"` | The discounts applied to the invoice line item. |
| `"id"` | Unique identifier for the object. |
| `"invoice"` | The ID of the invoice that contains this line item. |
| `"invoice_line_item"` | ID of the invoice line item being credited |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"parent"` | The parent that generated this line item. |
| `"period"` |  |
| `"pretax_credit_amounts"` | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item. |
| `"pricing"` | The pricing information of the line item. |
| `"quantity"` | Quantity of units for the invoice line item in integer format, with any decimal precision truncated. |
| `"quantity_decimal"` | Non-negative decimal with at most 12 decimal places. |
| `"subscription"` |  |
| `"subtotal"` | The subtotal of the line item, in cents (or local equivalent), before any discounts or taxes. |
| `"tax_rates"` | The tax rates which apply to the line item. |
| `"taxes"` | The tax information of the line item. |
| `"type"` | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `"unit_amount"` | The cost of each unit of product being credited. |
| `"unit_amount_decimal"` | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

Operations: Create, List.

API path: `/v1/invoices/{invoice}/lines/{line_item_id}`

#### LineItem

| Field | Description |
| --- | --- |
| `"adjustable_quantity"` |  |
| `"amount"` | The line item amount in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `"amount_discount"` | Total discount amount applied. |
| `"amount_subtotal"` | Total before any discounts or taxes are applied. |
| `"amount_tax"` | The amount of tax calculated for this line item, in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `"amount_total"` | Total after discounts and taxes. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"description"` | An arbitrary string attached to the object. |
| `"discounts"` | The discounts applied to the line item. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"performance_location"` | Indicates the line item represents a performance where the venue location might determine the tax, not the customer address. |
| `"price"` | The price used to generate the line item. |
| `"product"` | The ID of an existing [Product](https://docs.stripe.com/api/products/object). |
| `"quantity"` | The number of units of the item being purchased. |
| `"reference"` | A custom identifier for this line item. |
| `"reversal"` | If `type=reversal`, contains information about what was reversed. |
| `"tax_behavior"` | Specifies whether the `amount` includes taxes. |
| `"tax_breakdown"` | Detailed account of taxes relevant to this line item. |
| `"tax_code"` | The [tax code](https://docs.stripe.com/tax/tax-categories) ID used for this resource. |
| `"taxes"` | The taxes applied to the line item. |
| `"type"` | If `reversal`, this line item reverses an earlier transaction. |

Operations: List.

API path: `/v1/tax/calculations/{calculation}/line_items`

#### LinkedAccount

| Field | Description |
| --- | --- |
| `"account_holder"` | The account holder that this account belongs to. |
| `"account_numbers"` | Details about the account numbers. |
| `"balance"` | The most recent information about the account's balance. |
| `"balance_refresh"` | The state of the most recent attempt to refresh the account balance. |
| `"category"` | The type of the account. |
| `"created"` | Time at which the object was created. |
| `"display_name"` | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `"id"` | Unique identifier for the object. |
| `"institution_name"` | The name of the institution that holds this account. |
| `"last4"` | The last 4 digits of the account number. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"ownership"` | The most recent information about the account's owners. |
| `"ownership_refresh"` | The state of the most recent attempt to refresh the account owners. |
| `"permissions"` | The list of permissions granted by this account. |
| `"status"` | The status of the link to the account. |
| `"status_details"` |  |
| `"subcategory"` | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `"subscriptions"` | The list of data refresh subscriptions requested on this account. |
| `"supported_payment_method_types"` | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `"transaction_refresh"` | The state of the most recent attempt to refresh the account transactions. |

Operations: List.

API path: `/v1/linked_accounts`

#### LinkedAccountOwner

| Field | Description |
| --- | --- |
| `"email"` | The email address of the owner. |
| `"id"` | Unique identifier for the object. |
| `"name"` | The full name of the owner. |
| `"object"` | String representing the object's type. |
| `"ownership"` | The ownership object that this owner belongs to. |
| `"phone"` | The raw phone number of the owner. |
| `"raw_address"` | The raw physical address of the owner. |
| `"refreshed_at"` | The timestamp of the refresh that updated this owner. |

Operations: List.

API path: `/v1/linked_accounts/{account}/owners`

#### Location

| Field | Description |
| --- | --- |
| `"address"` |  |
| `"address_kana"` |  |
| `"address_kanji"` |  |
| `"city"` | City, district, suburb, town, or village. |
| `"configuration_overrides"` | The ID of a configuration that will be used to customize all readers in this location. |
| `"country"` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `"description"` | A descriptive text providing additional context about the tax location. |
| `"display_name"` | The display name of the location. |
| `"display_name_kana"` | The Kana variation of the display name of the location. |
| `"display_name_kanji"` | The Kanji variation of the display name of the location. |
| `"id"` | Unique identifier for the object. |
| `"line1"` | Address line 1, such as the street, PO Box, or company name. |
| `"line2"` | Address line 2, such as the apartment, suite, unit, or building. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"phone"` | The phone number of the location. |
| `"postal_code"` | ZIP or postal code. |
| `"state"` | State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)). |
| `"type"` | The type of tax location to be defined. |

Operations: Create, List, Load, Remove.

API path: `/v1/terminal/locations/{location}`

#### LoginLink

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"object"` | String representing the object's type. |
| `"url"` | The URL for the login link. |

Operations: Create.

API path: `/v1/accounts/{account}/login_links`

#### Mandate

| Field | Description |
| --- | --- |
| `"customer_acceptance"` |  |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"multi_use"` |  |
| `"object"` | String representing the object's type. |
| `"on_behalf_of"` | The account (if any) that the mandate is intended for. |
| `"payment_method"` | ID of the payment method associated with this mandate. |
| `"payment_method_details"` |  |
| `"single_use"` |  |
| `"status"` | The mandate status indicates whether or not you can use it to initiate a payment. |
| `"type"` | The type of the mandate. |

Operations: Load.

API path: `/v1/mandates/{mandate}`

#### Meter

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"customer_mapping"` |  |
| `"default_aggregation"` |  |
| `"display_name"` | The meter's name. |
| `"event_name"` | The name of the meter event to record usage for. |
| `"event_time_window"` | The time window which meter events have been pre-aggregated for, if any. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"status"` | The meter's status. |
| `"status_transitions"` |  |
| `"updated"` | Time at which the object was last updated. |
| `"value_settings"` |  |

Operations: Create, List, Load.

API path: `/v1/billing/meters/{id}`

#### MeterEvent

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/v1/billing/meter_events`

#### MeterEventAdjustment

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/v1/billing/meter_event_adjustments`

#### MeterEventSummary

| Field | Description |
| --- | --- |
| `"aggregated_value"` | Aggregated value of all the events within `start_time` (inclusive) and `end_time` (inclusive). |
| `"end_time"` | End timestamp for this event summary (exclusive). |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"meter"` | The meter associated with this event summary. |
| `"object"` | String representing the object's type. |
| `"start_time"` | Start timestamp for this event summary (inclusive). |

Operations: List.

API path: `/v1/billing/meters/{id}/event_summaries`

#### OnboardingLink

| Field | Description |
| --- | --- |
| `"apple_terms_and_conditions"` | The options associated with the Apple Terms and Conditions link type. |

Operations: Create.

API path: `/v1/terminal/onboarding_links`

#### Order

| Field | Description |
| --- | --- |
| `"amount_fees"` | Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit. |
| `"amount_subtotal"` | Total amount of the carbon removal in the currency's smallest unit. |
| `"amount_total"` | Total amount of the order including fees in the currency's smallest unit. |
| `"beneficiary"` |  |
| `"canceled_at"` | Time at which the order was canceled. |
| `"cancellation_reason"` | Reason for the cancellation of this order. |
| `"certificate"` | For delivered orders, a URL to a delivery certificate for the order. |
| `"confirmed_at"` | Time at which the order was confirmed. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order. |
| `"delayed_at"` | Time at which the order's expected_delivery_year was delayed. |
| `"delivered_at"` | Time at which the order was delivered. |
| `"delivery_details"` | Details about the delivery of carbon removal for this order. |
| `"expected_delivery_year"` | The year this order is expected to be delivered. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"metric_tons"` | Quantity of carbon removal that is included in this order. |
| `"object"` | String representing the object's type. |
| `"product"` | Unique ID for the Climate `Product` this order is purchasing. |
| `"product_substituted_at"` | Time at which the order's product was substituted for a different product. |
| `"status"` | The current status of this order. |

Operations: Create, List, Load.

API path: `/v1/climate/orders/{order}`

#### OutboundPayment

| Field | Description |
| --- | --- |
| `"amount"` | Amount (in cents) transferred. |
| `"cancelable"` | Returns `true` if the object can be canceled, and `false` otherwise. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | ID of the [customer](https://docs.stripe.com/api/customers) to whom an OutboundPayment is sent. |
| `"description"` | An arbitrary string attached to the object. |
| `"destination_payment_method"` | The PaymentMethod via which an OutboundPayment is sent. |
| `"destination_payment_method_details"` | Details about the PaymentMethod for an OutboundPayment. |
| `"end_user_details"` | Details about the end user. |
| `"expected_arrival_date"` | The date when funds are expected to arrive in the destination account. |
| `"financial_account"` | The FinancialAccount that funds were pulled from. |
| `"hosted_regulatory_receipt_url"` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"returned_details"` | Details about a returned OutboundPayment. |
| `"statement_descriptor"` | The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer). |
| `"status"` | Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. |
| `"status_transitions"` |  |
| `"tracking_details"` | Details about network-specific tracking information if available. |
| `"transaction"` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/test_helpers/treasury/outbound_payments/{id}`

#### OutboundTransfer

| Field | Description |
| --- | --- |
| `"amount"` | Amount (in cents) transferred. |
| `"cancelable"` | Returns `true` if the object can be canceled, and `false` otherwise. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"description"` | An arbitrary string attached to the object. |
| `"destination_payment_method"` | The PaymentMethod used as the payment instrument for an OutboundTransfer. |
| `"destination_payment_method_details"` |  |
| `"expected_arrival_date"` | The date when funds are expected to arrive in the destination account. |
| `"financial_account"` | The FinancialAccount that funds were pulled from. |
| `"hosted_regulatory_receipt_url"` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"returned_details"` | Details about a returned OutboundTransfer. |
| `"statement_descriptor"` | Information about the OutboundTransfer to be sent to the recipient account. |
| `"status"` | Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. |
| `"status_transitions"` |  |
| `"tracking_details"` | Details about network-specific tracking information if available. |
| `"transaction"` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}`

#### PaymentAttemptRecord

| Field | Description |
| --- | --- |
| `"amount"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"amount_authorized"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"amount_canceled"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"amount_failed"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"amount_guaranteed"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"amount_refunded"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"amount_requested"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"application"` | ID of the Connect application that created the PaymentAttemptRecord. |
| `"created"` | Time at which the object was created. |
| `"customer_details"` | Customer information for this payment. |
| `"customer_presence"` | Indicates whether the customer was present in your checkout flow during this payment. |
| `"description"` | An arbitrary string attached to the object. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"payment_method_details"` | Information about the Payment Method debited for this payment. |
| `"payment_record"` | ID of the Payment Record this Payment Attempt Record belongs to. |
| `"processor_details"` | Processor information associated with this payment. |
| `"reported_by"` | Indicates who reported the payment. |
| `"shipping_details"` | Shipping information for this payment. |

Operations: List, Load.

API path: `/v1/payment_attempt_records`

#### PaymentEvaluation

| Field | Description |
| --- | --- |
| `"client_device_metadata_details"` | Client device metadata attached to this payment evaluation. |
| `"created_at"` | Time at which the object was created. |
| `"customer_details"` | Customer details attached to this payment evaluation. |
| `"events"` | Event information associated with the payment evaluation, such as refunds, dispute, early fraud warnings, or user interventions. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"outcome"` | Indicates the final outcome for the payment evaluation. |
| `"payment_details"` | Payment details attached to this payment evaluation. |
| `"recommended_action"` | Recommended action based on the score of the `fraudulent_payment` signal. |
| `"signals"` | Collection of signals for this payment evaluation. |

Operations: Create.

API path: `/v1/radar/payment_evaluations`

#### PaymentIntent

| Field | Description |
| --- | --- |
| `"allowed_payment_method_types"` | The list of payment method types allowed for use with this payment. |
| `"amount"` | Amount intended to be collected by this PaymentIntent. |
| `"amount_capturable"` | Amount that can be captured from this PaymentIntent. |
| `"amount_details"` |  |
| `"amount_received"` | Amount that this PaymentIntent collects. |
| `"application"` | ID of the Connect application that created the PaymentIntent. |
| `"application_fee_amount"` | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `"automatic_payment_methods"` | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `"canceled_at"` | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `"cancellation_reason"` | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `"capture_method"` | Controls when the funds will be captured from the customer's account. |
| `"client_secret"` | The client secret of this PaymentIntent. |
| `"confirmation_method"` | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | ID of the Customer this PaymentIntent belongs to, if one exists. |
| `"customer_account"` | ID of the Account representing the customer that this PaymentIntent belongs to, if one exists. |
| `"description"` | An arbitrary string attached to the object. |
| `"excluded_payment_method_types"` | The list of payment method types to exclude from use with this payment. |
| `"hooks"` |  |
| `"id"` | Unique identifier for the object. |
| `"last_payment_error"` | The payment error encountered in the previous PaymentIntent confirmation. |
| `"latest_charge"` | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"managed_payments"` | Settings for Managed Payments. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"next_action"` | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `"object"` | String representing the object's type. |
| `"on_behalf_of"` | You can specify the settlement merchant as the connected account using the `on_behalf_of` attribute on the charge. |
| `"payment_details"` |  |
| `"payment_method"` | ID of the payment method used in this PaymentIntent. |
| `"payment_method_configuration_details"` | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `"payment_method_options"` | Payment-method-specific configuration for this PaymentIntent. |
| `"payment_method_types"` | The list of payment method types (e.g. |
| `"payment_record"` | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `"presentment_details"` |  |
| `"processing"` | If present, this property tells you about the processing state of the payment. |
| `"receipt_email"` | Email address that the receipt for the resulting payment will be sent to. |
| `"review"` | ID of the review associated with this PaymentIntent, if any. |
| `"setup_future_usage"` | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `"shipping"` | Shipping information for this PaymentIntent. |
| `"statement_descriptor"` | Text that appears on the customer's statement as the statement descriptor for a non-card charge. |
| `"statement_descriptor_suffix"` | Provides information about a card charge. |
| `"status"` | Status of this PaymentIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `requires_capture`, `canceled`, or `succeeded`. |
| `"transfer_data"` | The data that automatically creates a Transfer after the payment finalizes. |
| `"transfer_group"` | A string that identifies the resulting payment as part of a group. |

Operations: Create, List, Load.

API path: `/v1/payment_intents/{intent}`

#### PaymentIntentAmountDetailsLineItem

| Field | Description |
| --- | --- |
| `"discount_amount"` | The discount applied on this line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `"id"` | Unique identifier for the object. |
| `"object"` | String representing the object's type. |
| `"payment_method_options"` | Payment method-specific information for line items. |
| `"product_code"` | The product code of the line item, such as an SKU. |
| `"product_name"` | The product name of the line item. |
| `"quantity"` | The quantity of items. |
| `"tax"` | Contains information about the tax on the item. |
| `"unit_cost"` | The unit cost of the line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `"unit_of_measure"` | A unit of measure for the line item, such as gallons, feet, meters, etc. |

Operations: List.

API path: `/v1/payment_intents/{intent}/amount_details_line_items`

#### PaymentLink

| Field | Description |
| --- | --- |
| `"active"` | Whether the payment link's `url` is active. |
| `"after_completion"` |  |
| `"allow_promotion_codes"` | Whether user redeemable promotion codes are enabled. |
| `"application"` | The ID of the Connect application that created the Payment Link. |
| `"application_fee_amount"` | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `"application_fee_percent"` | This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. |
| `"automatic_tax"` |  |
| `"billing_address_collection"` | Configuration for collecting the customer's billing address. |
| `"consent_collection"` | When set, provides configuration to gather active consent from customers. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"custom_fields"` | Collect additional information from your customer using custom fields. |
| `"custom_text"` |  |
| `"customer_creation"` | Configuration for Customer creation during checkout. |
| `"id"` | Unique identifier for the object. |
| `"inactive_message"` | The custom message to be displayed to a customer when a payment link is no longer active. |
| `"invoice_creation"` | Configuration for creating invoice for payment mode payment links. |
| `"line_items"` | The line items representing what is being sold. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"managed_payments"` | Settings for Managed Payments for this Payment Link and resulting [CheckoutSessions](/api/checkout/sessions/object), [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/ob… |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"name_collection"` |  |
| `"object"` | String representing the object's type. |
| `"on_behalf_of"` | The account on behalf of which to charge. |
| `"optional_items"` | The optional items presented to the customer at checkout. |
| `"payment_intent_data"` | Indicates the parameters to be passed to PaymentIntent creation during checkout. |
| `"payment_method_collection"` | Configuration for collecting a payment method during checkout. |
| `"payment_method_options"` | Payment-method-specific configuration. |
| `"payment_method_types"` | The list of payment method types that customers can use. |
| `"phone_number_collection"` |  |
| `"restrictions"` | Settings that restrict the usage of a payment link. |
| `"shipping_address_collection"` | Configuration for collecting the customer's shipping address. |
| `"shipping_options"` | The shipping rate options applied to the session. |
| `"submit_type"` | Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button. |
| `"subscription_data"` | When creating a subscription, the specified configuration data will be used. |
| `"tax_id_collection"` |  |
| `"transfer_data"` | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to. |
| `"url"` | The public URL that can be shared with customers. |

Operations: Create, List, Load.

API path: `/v1/payment_links/{payment_link}`

#### PaymentMethod

| Field | Description |
| --- | --- |
| `"acss_debit"` |  |
| `"affirm"` |  |
| `"afterpay_clearpay"` |  |
| `"alipay"` |  |
| `"allow_redisplay"` | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `"alma"` |  |
| `"amazon_pay"` |  |
| `"au_becs_debit"` |  |
| `"bacs_debit"` |  |
| `"bancontact"` |  |
| `"billie"` |  |
| `"billing_details"` |  |
| `"bizum"` |  |
| `"blik"` |  |
| `"boleto"` |  |
| `"card"` |  |
| `"card_present"` |  |
| `"cashapp"` |  |
| `"created"` | Time at which the object was created. |
| `"crypto"` |  |
| `"custom"` |  |
| `"customer"` | The ID of the Customer to which this PaymentMethod is saved. |
| `"customer_account"` |  |
| `"customer_balance"` |  |
| `"eps"` |  |
| `"fpx"` |  |
| `"giropay"` |  |
| `"grabpay"` |  |
| `"id"` | Unique identifier for the object. |
| `"ideal"` |  |
| `"interac_present"` |  |
| `"kakao_pay"` |  |
| `"klarna"` |  |
| `"konbini"` |  |
| `"kr_card"` |  |
| `"link"` |  |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"mb_way"` |  |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"mobilepay"` |  |
| `"multibanco"` |  |
| `"naver_pay"` |  |
| `"nz_bank_account"` |  |
| `"object"` | String representing the object's type. |
| `"oxxo"` |  |
| `"p24"` |  |
| `"pay_by_bank"` |  |
| `"payco"` |  |
| `"paynow"` |  |
| `"paypal"` |  |
| `"paypay"` |  |
| `"payto"` |  |
| `"pix"` |  |
| `"promptpay"` |  |
| `"radar_options"` | Options to configure Radar. |
| `"revolut_pay"` |  |
| `"samsung_pay"` |  |
| `"satispay"` |  |
| `"scalapay"` |  |
| `"sepa_debit"` |  |
| `"sequra"` |  |
| `"sofort"` |  |
| `"sunbit"` |  |
| `"swish"` |  |
| `"twint"` |  |
| `"type"` | The type of the PaymentMethod. |
| `"upi"` |  |
| `"us_bank_account"` |  |
| `"wechat_pay"` |  |
| `"zip"` |  |

Operations: Create, List, Load.

API path: `/v1/payment_methods/{payment_method}`

#### PaymentMethodConfiguration

| Field | Description |
| --- | --- |
| `"acss_debit"` |  |
| `"active"` | Whether the configuration can be used for new payments. |
| `"affirm"` |  |
| `"afterpay_clearpay"` |  |
| `"alipay"` |  |
| `"alma"` |  |
| `"amazon_pay"` |  |
| `"apple_pay"` |  |
| `"application"` | For child configs, the Connect application associated with the configuration. |
| `"au_becs_debit"` |  |
| `"bacs_debit"` |  |
| `"bancontact"` |  |
| `"billie"` |  |
| `"bizum"` |  |
| `"blik"` |  |
| `"boleto"` |  |
| `"card"` |  |
| `"cartes_bancaires"` |  |
| `"cashapp"` |  |
| `"crypto"` |  |
| `"customer_balance"` |  |
| `"eps"` |  |
| `"fpx"` |  |
| `"giropay"` |  |
| `"google_pay"` |  |
| `"grabpay"` |  |
| `"id"` | Unique identifier for the object. |
| `"ideal"` |  |
| `"is_default"` | The default configuration is used whenever a payment method configuration is not specified. |
| `"jcb"` |  |
| `"kakao_pay"` |  |
| `"klarna"` |  |
| `"konbini"` |  |
| `"kr_card"` |  |
| `"link"` |  |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"mb_way"` |  |
| `"mobilepay"` |  |
| `"multibanco"` |  |
| `"name"` | The configuration's name. |
| `"naver_pay"` |  |
| `"nz_bank_account"` |  |
| `"object"` | String representing the object's type. |
| `"oxxo"` |  |
| `"p24"` |  |
| `"parent"` | For child configs, the configuration's parent configuration. |
| `"pay_by_bank"` |  |
| `"payco"` |  |
| `"paynow"` |  |
| `"paypal"` |  |
| `"paypay"` |  |
| `"payto"` |  |
| `"pix"` |  |
| `"promptpay"` |  |
| `"revolut_pay"` |  |
| `"samsung_pay"` |  |
| `"satispay"` |  |
| `"scalapay"` |  |
| `"sepa_debit"` |  |
| `"sequra"` |  |
| `"sofort"` |  |
| `"sunbit"` |  |
| `"swish"` |  |
| `"twint"` |  |
| `"upi"` |  |
| `"us_bank_account"` |  |
| `"wechat_pay"` |  |
| `"zip"` |  |

Operations: Create, List, Load.

API path: `/v1/payment_method_configurations/{configuration}`

#### PaymentMethodDomain

| Field | Description |
| --- | --- |
| `"amazon_pay"` | Indicates the status of a specific payment method on a payment method domain. |
| `"apple_pay"` | Indicates the status of a specific payment method on a payment method domain. |
| `"created"` | Time at which the object was created. |
| `"domain_name"` | The domain name that this payment method domain object represents. |
| `"enabled"` | Whether this payment method domain is enabled. |
| `"google_pay"` | Indicates the status of a specific payment method on a payment method domain. |
| `"id"` | Unique identifier for the object. |
| `"klarna"` | Indicates the status of a specific payment method on a payment method domain. |
| `"link"` | Indicates the status of a specific payment method on a payment method domain. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"paypal"` | Indicates the status of a specific payment method on a payment method domain. |

Operations: Create, List, Load.

API path: `/v1/payment_method_domains/{payment_method_domain}`

#### PaymentRecord

| Field | Description |
| --- | --- |
| `"amount"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"amount_authorized"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"amount_canceled"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"amount_failed"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"amount_guaranteed"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"amount_refunded"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"amount_requested"` | A representation of an amount of money, consisting of an amount and a currency. |
| `"application"` | ID of the Connect application that created the PaymentRecord. |
| `"created"` | Time at which the object was created. |
| `"customer_details"` | Customer information for this payment. |
| `"customer_presence"` | Indicates whether the customer was present in your checkout flow during this payment. |
| `"description"` | An arbitrary string attached to the object. |
| `"id"` | Unique identifier for the object. |
| `"latest_payment_attempt_record"` | ID of the latest Payment Attempt Record attached to this Payment Record. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"payment_method_details"` | Information about the Payment Method debited for this payment. |
| `"processor_details"` | Processor information associated with this payment. |
| `"reported_by"` | Indicates who reported the payment. |
| `"shipping_details"` | Shipping information for this payment. |

Operations: Create, List, Load.

API path: `/v1/payment_records/{id}/report_payment_attempt`

#### Payout

| Field | Description |
| --- | --- |
| `"amount"` | The amount (in cents (or local equivalent)) that transfers to your bank account or debit card. |
| `"application_fee"` | The application fee (if any) for the payout. |
| `"application_fee_amount"` | The amount of the application fee (if any) requested for the payout. |
| `"arrival_date"` | Date that you can expect the payout to arrive in the bank. |
| `"automatic"` | Returns `true` if the payout is created by an [automated payout schedule](https://docs.stripe.com/payouts#payout-schedule) and `false` if it's [requested manually](https://stripe.com/docs/payouts#manual-payouts). |
| `"balance_transaction"` | ID of the balance transaction that describes the impact of this payout on your account balance. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"description"` | An arbitrary string attached to the object. |
| `"destination"` | ID of the bank account or card the payout is sent to. |
| `"failure_balance_transaction"` | If the payout fails or cancels, this is the ID of the balance transaction that reverses the initial balance transaction and returns the funds from the failed payout back in your balance. |
| `"failure_code"` | Error code that provides a reason for a payout failure, if available. |
| `"failure_message"` | Message that provides the reason for a payout failure, if available. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"method"` | The method used to send this payout, which can be `standard` or `instant`. |
| `"object"` | String representing the object's type. |
| `"original_payout"` | If the payout reverses another, this is the ID of the original payout. |
| `"payout_method"` | ID of the v2 FinancialAccount the funds are sent to. |
| `"reconciliation_status"` | If `completed`, you can use the [Balance Transactions API](https://docs.stripe.com/api/balance_transactions/list#balance_transaction_list-payout) to list all balance transactions that are paid out in this payout. |
| `"reversed_by"` | If the payout reverses, this is the ID of the payout that reverses this payout. |
| `"source_type"` | The source balance this payout came from, which can be one of the following: `card`, `fpx`, or `bank_account`. |
| `"statement_descriptor"` | Extra information about a payout that displays on the user's bank statement. |
| `"status"` | Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`. |
| `"trace_id"` | A value that generates from the beneficiary's bank that allows users to track payouts with their bank. |
| `"type"` | Can be `bank_account` or `card`. |

Operations: Create, List, Load.

API path: `/v1/payouts/{payout}`

#### Person

| Field | Description |
| --- | --- |
| `"account"` | The account the person is associated with. |
| `"additional_tos_acceptances"` |  |
| `"address"` |  |
| `"address_kana"` |  |
| `"address_kanji"` |  |
| `"created"` | Time at which the object was created. |
| `"dob"` |  |
| `"email"` | The person's email address. |
| `"first_name"` | The person's first name. |
| `"first_name_kana"` | The Kana variation of the person's first name (Japan only). |
| `"first_name_kanji"` | The Kanji variation of the person's first name (Japan only). |
| `"full_name_aliases"` | A list of alternate names or aliases that the person is known by. |
| `"future_requirements"` |  |
| `"gender"` | The person's gender. |
| `"id"` | Unique identifier for the object. |
| `"id_number_provided"` | Whether the person's `id_number` was provided. |
| `"id_number_secondary_provided"` | Whether the person's `id_number_secondary` was provided. |
| `"last_name"` | The person's last name. |
| `"last_name_kana"` | The Kana variation of the person's last name (Japan only). |
| `"last_name_kanji"` | The Kanji variation of the person's last name (Japan only). |
| `"maiden_name"` | The person's maiden name. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"nationality"` | The country where the person is a national. |
| `"object"` | String representing the object's type. |
| `"phone"` | The person's phone number. |
| `"political_exposure"` | Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction. |
| `"registered_address"` |  |
| `"relationship"` |  |
| `"requirements"` |  |
| `"ssn_last_4_provided"` | Whether the last four digits of the person's Social Security number have been provided (U.S. |
| `"us_cfpb_data"` | Demographic data related to the person. |
| `"verification"` |  |

Operations: Create, List, Load.

API path: `/v1/accounts/{account}/people/{person}`

#### PersonalizationDesign

| Field | Description |
| --- | --- |
| `"card_logo"` | The file for the card logo to use with physical bundles that support card logos. |
| `"carrier_text"` | Hash containing carrier text, for use with physical bundles that support carrier text. |
| `"created"` | Time at which the object was created. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"lookup_key"` | A lookup key used to retrieve personalization designs dynamically from a static string. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"name"` | Friendly display name. |
| `"object"` | String representing the object's type. |
| `"physical_bundle"` | The physical bundle object belonging to this personalization design. |
| `"preferences"` |  |
| `"rejection_reasons"` |  |
| `"status"` | Whether this personalization design can be used to create cards. |

Operations: Create, List, Load.

API path: `/v1/issuing/personalization_designs/{personalization_design}`

#### PhysicalBundle

| Field | Description |
| --- | --- |
| `"card_logo"` | The policy for how to use card logo images in a card design with this physical bundle. |
| `"carrier_text"` | The policy for how to use carrier letter text in a card design with this physical bundle. |
| `"features"` |  |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"name"` | Friendly display name. |
| `"object"` | String representing the object's type. |
| `"second_line"` | The policy for how to use a second line on a card with this physical bundle. |
| `"status"` | Whether this physical bundle can be used to create cards. |
| `"type"` | Whether this physical bundle is a standard Stripe offering or custom-made for you. |

Operations: List, Load.

API path: `/v1/issuing/physical_bundles`

#### Plan

| Field | Description |
| --- | --- |
| `"active"` | Whether the plan can be used for new purchases. |
| `"amount"` | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `"amount_decimal"` | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `"billing_scheme"` | Describes how to compute the price per period. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"id"` | Unique identifier for the object. |
| `"interval"` | The frequency at which a subscription is billed. |
| `"interval_count"` | The number of intervals (specified in the `interval` attribute) between subscription billings. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"meter"` | The meter tracking the usage of a metered price |
| `"nickname"` | A brief description of the plan, hidden from customers. |
| `"object"` | String representing the object's type. |
| `"product"` | The product whose pricing this plan determines. |
| `"tiers"` | Each element represents a pricing tier. |
| `"tiers_mode"` | Defines if the tiering price should be `graduated` or `volume` based. |
| `"transform_usage"` | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `"trial_period_days"` | Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://docs.stripe.com/api#create_subscription-trial_from_plan). |
| `"usage_type"` | Configures how the quantity per period should be determined. |

Operations: Create, List, Load.

API path: `/v1/plans/{plan}`

#### Price

| Field | Description |
| --- | --- |
| `"active"` | Whether the price can be used for new purchases. |
| `"billing_scheme"` | Describes how to compute the price per period. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"currency_options"` | Prices defined in each available currency option. |
| `"custom_unit_amount"` | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"lookup_key"` | A lookup key used to retrieve prices dynamically from a static string. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"nickname"` | A brief description of the price, hidden from customers. |
| `"object"` | String representing the object's type. |
| `"product"` | The ID of the product this price is associated with. |
| `"recurring"` | The recurring components of a price such as `interval` and `usage_type`. |
| `"tax_behavior"` | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `"tiers"` | Each element represents a pricing tier. |
| `"tiers_mode"` | Defines if the tiering price should be `graduated` or `volume` based. |
| `"transform_quantity"` | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `"type"` | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `"unit_amount"` | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `"unit_amount_decimal"` | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |

Operations: Create, List, Load.

API path: `/v1/prices/{price}`

#### Product

| Field | Description |
| --- | --- |
| `"active"` | Whether the product is currently available for purchase. |
| `"created"` | Time at which the object was created. |
| `"current_prices_per_metric_ton"` | Current prices for a metric ton of carbon removal in a currency's smallest unit. |
| `"default_price"` | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `"delivery_year"` | The year in which the carbon removal is expected to be delivered. |
| `"description"` | The product's description, meant to be displayable to the customer. |
| `"id"` | Unique identifier for the object. |
| `"images"` | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `"livemode"` | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `"marketing_features"` | A list of up to 15 marketing features for this product. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"metric_tons_available"` | The quantity of metric tons available for reservation. |
| `"name"` | The Climate product's name. |
| `"object"` | String representing the object's type. |
| `"package_dimensions"` | The dimensions of this product for shipping purposes. |
| `"shippable"` | Whether this product is shipped (i.e., physical goods). |
| `"statement_descriptor"` | Extra information about a product which will appear on your customer's credit card statement. |
| `"suppliers"` | The carbon removal suppliers that fulfill orders for this Climate product. |
| `"tax_code"` | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `"tax_details"` | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `"unit_label"` | A label that represents units of this product. |
| `"updated"` | Time at which the object was last updated. |
| `"url"` | A URL of a publicly-accessible webpage for this product. |

Operations: Create, List, Load, Remove.

API path: `/v1/products/{id}`

#### ProductFeature

| Field | Description |
| --- | --- |
| `"active"` | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"lookup_key"` | A unique key you provide as your own system identifier. |
| `"metadata"` | Set of key-value pairs that you can attach to an object. |
| `"name"` | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `"object"` | String representing the object's type. |

Operations: Create, Load.

API path: `/v1/products/{product}/features`

#### PromotionCode

| Field | Description |
| --- | --- |
| `"active"` | Whether the promotion code is currently active. |
| `"code"` | The customer-facing code. |
| `"created"` | Time at which the object was created. |
| `"customer"` | The customer who can use this promotion code. |
| `"customer_account"` | The account representing the customer who can use this promotion code. |
| `"expires_at"` | Date at which the promotion code can no longer be redeemed. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"max_redemptions"` | Maximum number of times this promotion code can be redeemed. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"promotion"` |  |
| `"restrictions"` |  |
| `"times_redeemed"` | Number of times this promotion code has been used. |

Operations: Create, List, Load.

API path: `/v1/promotion_codes/{promotion_code}`

#### Quote

| Field | Description |
| --- | --- |
| `"amount_subtotal"` | Total before any discounts or taxes are applied. |
| `"amount_total"` | Total after discounts and taxes are applied. |
| `"application"` | ID of the Connect Application that created the quote. |
| `"application_fee_amount"` | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `"application_fee_percent"` | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `"automatic_tax"` |  |
| `"collection_method"` | Either `charge_automatically`, or `send_invoice`. |
| `"computed"` |  |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | The customer who received this quote. |
| `"customer_account"` | The account representing the customer who received this quote. |
| `"default_tax_rates"` | The tax rates applied to this quote. |
| `"description"` | A description that will be displayed on the quote PDF. |
| `"discounts"` | The discounts applied to this quote. |
| `"expires_at"` | The date on which the quote will be canceled if in `open` or `draft` status. |
| `"footer"` | A footer that will be displayed on the quote PDF. |
| `"from_quote"` | Details of the quote that was cloned. |
| `"header"` | A header that will be displayed on the quote PDF. |
| `"id"` | Unique identifier for the object. |
| `"invoice"` | The invoice that was created from this quote. |
| `"invoice_settings"` |  |
| `"line_items"` | A list of items the customer is being quoted for. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"number"` | A unique number that identifies this particular quote. |
| `"object"` | String representing the object's type. |
| `"on_behalf_of"` | The account on behalf of which to charge. |
| `"status"` | The status of the quote. |
| `"status_transitions"` |  |
| `"subscription"` | The subscription that was created or updated from this quote. |
| `"subscription_data"` |  |
| `"subscription_schedule"` | The subscription schedule that was created or updated from this quote. |
| `"test_clock"` | ID of the test clock this quote belongs to. |
| `"total_details"` |  |
| `"transfer_data"` | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices. |

Operations: Create, List, Load.

API path: `/v1/quotes/{quote}`

#### QuoteComputedUpfrontLineItem

| Field | Description |
| --- | --- |
| `"adjustable_quantity"` |  |
| `"amount_discount"` | Total discount amount applied. |
| `"amount_subtotal"` | Total before any discounts or taxes are applied. |
| `"amount_tax"` | Total tax amount applied. |
| `"amount_total"` | Total after discounts and taxes. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"description"` | An arbitrary string attached to the object. |
| `"discounts"` | The discounts applied to the line item. |
| `"id"` | Unique identifier for the object. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"price"` | The price used to generate the line item. |
| `"quantity"` | The quantity of products being purchased. |
| `"taxes"` | The taxes applied to the line item. |

Operations: List.

API path: `/v1/quotes/{quote}/computed_upfront_line_items`

#### QuotePdf

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/v1/quotes/{quote}/pdf`

#### Reader

| Field | Description |
| --- | --- |
| `"action"` | The most recent action performed by the reader. |
| `"device_sw_version"` | The current software version of the reader. |
| `"device_type"` | Device type of the reader. |
| `"id"` | Unique identifier for the object. |
| `"ip_address"` | The local IP address of the reader. |
| `"label"` | Custom label given to the reader for easier identification. |
| `"last_seen_at"` | The last time this reader reported to Stripe backend. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"location"` | The location identifier of the reader. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"serial_number"` | Serial number of the reader. |
| `"status"` | The networking status of the reader. |

Operations: Create, List, Load, Remove.

API path: `/v1/terminal/readers/{reader}`

#### ReceivedCredit

| Field | Description |
| --- | --- |
| `"amount"` | Amount (in cents) transferred. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"description"` | An arbitrary string attached to the object. |
| `"failure_code"` | Reason for the failure. |
| `"financial_account"` | The FinancialAccount that received the funds. |
| `"hosted_regulatory_receipt_url"` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `"id"` | Unique identifier for the object. |
| `"initiating_payment_method_details"` |  |
| `"linked_flows"` |  |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"network"` | The rails used to send the funds. |
| `"object"` | String representing the object's type. |
| `"reversal_details"` | Details describing when a ReceivedCredit may be reversed. |
| `"status"` | Status of the ReceivedCredit. |
| `"transaction"` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/test_helpers/treasury/received_credits`

#### ReceivedDebit

| Field | Description |
| --- | --- |
| `"amount"` | Amount (in cents) transferred. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"description"` | An arbitrary string attached to the object. |
| `"failure_code"` | Reason for the failure. |
| `"financial_account"` | The FinancialAccount that funds were pulled from. |
| `"hosted_regulatory_receipt_url"` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `"id"` | Unique identifier for the object. |
| `"initiating_payment_method_details"` |  |
| `"linked_flows"` |  |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"network"` | The network used for the ReceivedDebit. |
| `"object"` | String representing the object's type. |
| `"reversal_details"` | Details describing when a ReceivedDebit might be reversed. |
| `"status"` | Status of the ReceivedDebit. |
| `"transaction"` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/test_helpers/treasury/received_debits`

#### Refund

| Field | Description |
| --- | --- |
| `"amount"` | Amount, in cents (or local equivalent). |
| `"balance_transaction"` | Balance transaction that describes the impact on your account balance. |
| `"charge"` | ID of the charge that's refunded. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | ID of the customer of this refund. |
| `"customer_account"` | ID of the account of this refund. |
| `"description"` | An arbitrary string attached to the object. |
| `"destination_details"` |  |
| `"failure_balance_transaction"` | After the refund fails, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction. |
| `"failure_reason"` | Provides the reason for the refund failure. |
| `"fee"` | ID of the application fee that was refunded. |
| `"id"` | Unique identifier for the object. |
| `"instructions_email"` | For payment methods without native refund support (for example, Konbini, PromptPay), provide an email address for the customer to receive refund instructions. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"next_action"` |  |
| `"object"` | String representing the object's type. |
| `"payment_intent"` | ID of the PaymentIntent that's refunded. |
| `"payment_method"` | ID of the payment method associated with this refund. |
| `"pending_reason"` | Provides the reason for why the refund is pending. |
| `"presentment_details"` |  |
| `"reason"` | Reason for the refund, which is either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`). |
| `"receipt_number"` | This is the transaction number that appears on email receipts sent for this refund. |
| `"source_transfer_reversal"` | The transfer reversal that's associated with the refund. |
| `"status"` | Status of the refund. |
| `"transfer_reversal"` | This refers to the transfer reversal object if the accompanying transfer reverses. |

Operations: Create, List, Load.

API path: `/v1/application_fees/{fee}/refunds/{id}`

#### Registration

| Field | Description |
| --- | --- |
| `"active_from"` | Time at which the registration becomes active. |
| `"ae"` |  |
| `"al"` |  |
| `"am"` |  |
| `"ao"` |  |
| `"at"` |  |
| `"au"` |  |
| `"aw"` |  |
| `"az"` |  |
| `"ba"` |  |
| `"bb"` |  |
| `"bd"` |  |
| `"be"` |  |
| `"bf"` |  |
| `"bg"` |  |
| `"bh"` |  |
| `"bj"` |  |
| `"bs"` |  |
| `"by"` |  |
| `"ca"` |  |
| `"cd"` |  |
| `"ch"` |  |
| `"cl"` |  |
| `"cm"` |  |
| `"co"` |  |
| `"country"` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `"country_options"` |  |
| `"cr"` |  |
| `"created"` | Time at which the object was created. |
| `"cv"` |  |
| `"cy"` |  |
| `"cz"` |  |
| `"de"` |  |
| `"dk"` |  |
| `"ec"` |  |
| `"ee"` |  |
| `"eg"` |  |
| `"es"` |  |
| `"et"` |  |
| `"expires_at"` | If set, the registration stops being active at this time. |
| `"fi"` |  |
| `"fr"` |  |
| `"gb"` |  |
| `"ge"` |  |
| `"gn"` |  |
| `"gr"` |  |
| `"hr"` |  |
| `"hu"` |  |
| `"id"` | Unique identifier for the object. |
| `"ie"` |  |
| `"in"` |  |
| `"is"` |  |
| `"it"` |  |
| `"jp"` |  |
| `"ke"` |  |
| `"kg"` |  |
| `"kh"` |  |
| `"kr"` |  |
| `"kz"` |  |
| `"la"` |  |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"lk"` |  |
| `"lt"` |  |
| `"lu"` |  |
| `"lv"` |  |
| `"ma"` |  |
| `"md"` |  |
| `"me"` |  |
| `"mk"` |  |
| `"mr"` |  |
| `"mt"` |  |
| `"mx"` |  |
| `"my"` |  |
| `"ng"` |  |
| `"nl"` |  |
| `"no"` |  |
| `"np"` |  |
| `"nz"` |  |
| `"object"` | String representing the object's type. |
| `"om"` |  |
| `"pe"` |  |
| `"ph"` |  |
| `"pl"` |  |
| `"pt"` |  |
| `"ro"` |  |
| `"rs"` |  |
| `"ru"` |  |
| `"sa"` |  |
| `"se"` |  |
| `"sg"` |  |
| `"si"` |  |
| `"sk"` |  |
| `"sn"` |  |
| `"sr"` |  |
| `"status"` | The status of the registration. |
| `"th"` |  |
| `"tj"` |  |
| `"tr"` |  |
| `"tw"` |  |
| `"tz"` |  |
| `"ua"` |  |
| `"ug"` |  |
| `"us"` |  |
| `"uy"` |  |
| `"uz"` |  |
| `"vn"` |  |
| `"za"` |  |
| `"zm"` |  |
| `"zw"` |  |

Operations: Create, List, Load.

API path: `/v1/tax/registrations/{id}`

#### ReportRun

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"error"` | If something should go wrong during the run, a message about the failure (populated when `status=failed`). |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | `true` if the report is run on live mode data and `false` if it is run on test mode data. |
| `"object"` | String representing the object's type. |
| `"parameters"` |  |
| `"report_type"` | The ID of the [report type](https://docs.stripe.com/reports/report-types) to run, such as `"balance.summary.1"`. |
| `"result"` | The file object representing the result of the report run (populated when `status=succeeded`). |
| `"status"` | Status of this report run. |
| `"succeeded_at"` | Timestamp at which this run successfully finished (populated when `status=succeeded`). |

Operations: Create, List, Load.

API path: `/v1/reporting/report_runs`

#### ReportType

| Field | Description |
| --- | --- |
| `"data_available_end"` | Most recent time for which this Report Type is available. |
| `"data_available_start"` | Earliest time for which this Report Type is available. |
| `"default_columns"` | List of column names that are included by default when this Report Type gets run. |
| `"id"` | The [ID of the Report Type](https://docs.stripe.com/reporting/statements/api#available-report-types), such as `balance.summary.1`. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"name"` | Human-readable name of the Report Type |
| `"object"` | String representing the object's type. |
| `"updated"` | When this Report Type was latest updated. |
| `"version"` | Version of the Report Type. |

Operations: List, Load.

API path: `/v1/reporting/report_types`

#### Request

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"payment_method"` | The PaymentMethod to insert into the forwarded request. |
| `"replacements"` | The field kinds to be replaced in the forwarded request. |
| `"request_context"` | Context about the request from Stripe's servers to the destination endpoint. |
| `"request_details"` | The request that was sent to the destination endpoint. |
| `"response_details"` | The response that the destination endpoint returned to us. |
| `"url"` | The destination URL for the forwarded request. |

Operations: Create, List, Load.

API path: `/v1/forwarding/requests`

#### Reversal

| Field | Description |
| --- | --- |
| `"amount"` | Amount, in cents (or local equivalent). |
| `"balance_transaction"` | Balance transaction that describes the impact on your account balance. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"destination_payment_refund"` | Linked payment refund for the transfer reversal. |
| `"id"` | Unique identifier for the object. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"source_refund"` | ID of the refund responsible for the transfer reversal. |
| `"transfer"` | ID of the transfer that was reversed. |

Operations: Create, List, Load.

API path: `/v1/transfers/{transfer}/reversals/{id}`

#### Review

| Field | Description |
| --- | --- |
| `"billing_zip"` | The ZIP or postal code of the card used, if applicable. |
| `"charge"` | The charge associated with this review. |
| `"closed_reason"` | The reason the review was closed, or null if it has not yet been closed. |
| `"created"` | Time at which the object was created. |
| `"id"` | Unique identifier for the object. |
| `"ip_address"` | The IP address where the payment originated. |
| `"ip_address_location"` | Information related to the location of the payment. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"open"` | If `true`, the review needs action. |
| `"opened_reason"` | The reason the review was opened. |
| `"payment_intent"` | The PaymentIntent ID associated with this review, if one exists. |
| `"reason"` | The reason the review is currently open or closed. |
| `"session"` | Information related to the browsing session of the user who initiated the payment. |

Operations: Create, List, Load.

API path: `/v1/reviews/{review}/approve`

#### ScheduledQueryRun

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"data_load_time"` | When the query was run, Sigma contained a snapshot of your Stripe data at this time. |
| `"error"` |  |
| `"file"` | The file object representing the results of the query. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"result_available_until"` | Time at which the result expires and is no longer available for download. |
| `"sql"` | SQL for the query. |
| `"status"` | The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise. |
| `"title"` | Title of the query. |

Operations: List, Load.

API path: `/v1/sigma/scheduled_query_runs`

#### Search

| Field | Description |
| --- | --- |
| `"account_country"` | The country of the business associated with this invoice, most often the business creating the invoice. |
| `"account_name"` | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `"account_tax_ids"` | The account tax IDs associated with the invoice. |
| `"active"` | Whether the price can be used for new purchases. |
| `"address"` | The customer's billing address. |
| `"allowed_payment_method_types"` | The list of payment method types allowed for use with this payment. |
| `"amount"` | Amount intended to be collected by this payment. |
| `"amount_capturable"` | Amount that can be captured from this PaymentIntent. |
| `"amount_captured"` | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `"amount_details"` |  |
| `"amount_due"` | Final amount due at this time for this invoice. |
| `"amount_overpaid"` | Amount that was overpaid on the invoice. |
| `"amount_paid"` | The amount, in cents (or local equivalent), that was paid. |
| `"amount_paid_off_stripe"` | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `"amount_received"` | Amount that this PaymentIntent collects. |
| `"amount_refunded"` | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `"amount_remaining"` | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `"amount_shipping"` | This is the sum of all the shipping amounts. |
| `"application"` | ID of the Connect application that created the charge. |
| `"application_fee"` | The application fee (if any) for the charge. |
| `"application_fee_amount"` | The amount of the application fee (if any) requested for the charge. |
| `"application_fee_percent"` | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `"attempt_count"` | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `"attempted"` | Whether an attempt has been made to pay the invoice. |
| `"auto_advance"` | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `"automatic_payment_methods"` | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `"automatic_tax"` |  |
| `"automatically_finalizes_at"` | The time when this invoice is currently scheduled to be automatically finalized. |
| `"balance"` | The current balance, if any, that's stored on the customer in their default currency. |
| `"balance_transaction"` | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `"billing_cycle_anchor"` | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `"billing_cycle_anchor_config"` | The fixed values used to calculate the `billing_cycle_anchor`. |
| `"billing_details"` |  |
| `"billing_mode"` | The billing mode of the subscription. |
| `"billing_reason"` | Indicates the reason why the invoice was created. |
| `"billing_schedules"` | Billing schedules for this subscription. |
| `"billing_scheme"` | Describes how to compute the price per period. |
| `"billing_thresholds"` | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `"business_name"` | The customer's business name. |
| `"calculated_statement_descriptor"` | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `"cancel_at"` | A date in the future at which the subscription will automatically get canceled |
| `"cancel_at_period_end"` | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `"canceled_at"` | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `"cancellation_details"` | Details about why this subscription was cancelled |
| `"cancellation_reason"` | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `"capture_method"` | Controls when the funds will be captured from the customer's account. |
| `"captured"` | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `"cash_balance"` | The current funds being held by Stripe on behalf of the customer. |
| `"client_secret"` | The client secret of this PaymentIntent. |
| `"collection_method"` | Either `charge_automatically`, or `send_invoice`. |
| `"confirmation_method"` | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `"confirmation_secret"` | The confirmation secret associated with this invoice. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"currency_options"` | Prices defined in each available currency option. |
| `"custom_fields"` | Custom fields displayed on the invoice. |
| `"custom_unit_amount"` | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `"customer"` | ID of the customer this charge is for if one exists. |
| `"customer_account"` | The ID of an Account representing a customer. |
| `"customer_address"` | The customer's address. |
| `"customer_email"` | The customer's email. |
| `"customer_name"` | The customer's name. |
| `"customer_phone"` | The customer's phone number. |
| `"customer_shipping"` | The customer's shipping information. |
| `"customer_tax_exempt"` | The customer's tax exempt status. |
| `"customer_tax_ids"` | The customer's tax IDs. |
| `"days_until_due"` | Number of days a customer has to pay invoices generated by this subscription. |
| `"default_payment_method"` | ID of the default payment method for the invoice. |
| `"default_price"` | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `"default_source"` | ID of the default payment source for the customer. |
| `"default_tax_rates"` | The tax rates applied to this invoice, if any. |
| `"delinquent"` | Tracks the most recent state change on any invoice belonging to the customer. |
| `"description"` | An arbitrary string attached to the object. |
| `"discount"` | Describes the current discount active on the customer, if there is one. |
| `"discounts"` | The discounts applied to the invoice. |
| `"disputed"` | Whether the charge has been disputed. |
| `"due_date"` | The date on which payment for this invoice is due. |
| `"effective_at"` | The date when this invoice is in effect. |
| `"email"` | The customer's email address. |
| `"ended_at"` | If the subscription has ended, the date the subscription ended. |
| `"ending_balance"` | Ending customer balance after the invoice is finalized. |
| `"excluded_payment_method_types"` | The list of payment method types to exclude from use with this payment. |
| `"failure_balance_transaction"` | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `"failure_code"` | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `"failure_message"` | Message to user further explaining reason for charge failure if available. |
| `"footer"` | Footer displayed on the invoice. |
| `"fraud_details"` | Information on fraud assessments for the charge. |
| `"from_invoice"` | Details of the invoice that was cloned. |
| `"hooks"` |  |
| `"hosted_invoice_url"` | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `"id"` | Unique identifier for the object. |
| `"images"` | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `"individual_name"` | The customer's individual name. |
| `"invoice_credit_balance"` | The current multi-currency balances, if any, that's stored on the customer. |
| `"invoice_pdf"` | The link to download the PDF for the invoice. |
| `"invoice_prefix"` | The prefix for the customer used to generate unique invoice numbers. |
| `"invoice_settings"` |  |
| `"issuer"` |  |
| `"items"` | List of subscription items, each with an attached price. |
| `"last_finalization_error"` | The error encountered during the previous attempt to finalize the invoice. |
| `"last_payment_error"` | The payment error encountered in the previous PaymentIntent confirmation. |
| `"latest_charge"` | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `"latest_invoice"` | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `"latest_revision"` | The ID of the most recent non-draft revision of this invoice |
| `"lines"` | The individual line items that make up the invoice. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"lookup_key"` | A lookup key used to retrieve prices dynamically from a static string. |
| `"managed_payments"` | Settings for Managed Payments. |
| `"marketing_features"` | A list of up to 15 marketing features for this product. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"name"` | The customer's full name or business name. |
| `"next_action"` | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `"next_invoice_sequence"` | The suffix of the customer's next invoice number (for example, 0001). |
| `"next_payment_attempt"` | The time at which payment will next be attempted. |
| `"next_pending_invoice_item_invoice"` | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `"nickname"` | A brief description of the price, hidden from customers. |
| `"number"` | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `"object"` | String representing the object's type. |
| `"on_behalf_of"` | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `"outcome"` | Details about whether the payment was accepted, and why. |
| `"package_dimensions"` | The dimensions of this product for shipping purposes. |
| `"paid"` | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `"parent"` | The parent that generated this invoice |
| `"pause_collection"` | If specified, payment collection for this subscription will be paused. |
| `"payment_details"` |  |
| `"payment_intent"` | ID of the PaymentIntent associated with this charge, if one exists. |
| `"payment_method"` | ID of the payment method used in this charge. |
| `"payment_method_configuration_details"` | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `"payment_method_details"` | Details about the payment method at the time of the transaction. |
| `"payment_method_options"` | Payment-method-specific configuration for this PaymentIntent. |
| `"payment_method_types"` | The list of payment method types (e.g. |
| `"payment_record"` | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `"payment_settings"` | Payment settings passed on to invoices created by the subscription. |
| `"payments"` | Payments for this invoice. |
| `"pending_invoice_item_interval"` | Specifies an interval for how often to bill for any pending invoice items. |
| `"pending_setup_intent"` | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `"pending_update"` | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `"period_end"` | The latest timestamp at which invoice items can be associated with this invoice. |
| `"period_start"` | The earliest timestamp at which invoice items can be associated with this invoice. |
| `"phone"` | The customer's phone number. |
| `"post_payment_credit_notes_amount"` | Total amount of all post-payment credit notes issued for this invoice. |
| `"pre_payment_credit_notes_amount"` | Total amount of all pre-payment credit notes issued for this invoice. |
| `"preferred_locales"` | The customer's preferred locales (languages), ordered by preference. |
| `"presentment_details"` |  |
| `"processing"` | If present, this property tells you about the processing state of the payment. |
| `"product"` | The ID of the product this price is associated with. |
| `"radar_options"` | Options to configure Radar. |
| `"receipt_email"` | This is the email address that the receipt for this charge was sent to. |
| `"receipt_number"` | This is the transaction number that appears on email receipts sent for this charge. |
| `"receipt_url"` | This is the URL to view the receipt for this charge. |
| `"recurring"` | The recurring components of a price such as `interval` and `usage_type`. |
| `"refunded"` | Whether the charge has been fully refunded. |
| `"refunds"` | A list of refunds that have been applied to the charge. |
| `"rendering"` | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `"review"` | ID of the review associated with this charge if one exists. |
| `"schedule"` | The schedule attached to the subscription |
| `"setup_future_usage"` | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `"shippable"` | Whether this product is shipped (i.e., physical goods). |
| `"shipping"` | Shipping information for the charge. |
| `"shipping_cost"` | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `"shipping_details"` | Shipping details for the invoice. |
| `"source_transfer"` | The transfer ID which created this charge. |
| `"sources"` | The customer's payment sources, if any. |
| `"start_date"` | Date when the subscription was first created. |
| `"starting_balance"` | Starting customer balance before the invoice is finalized. |
| `"statement_descriptor"` | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `"statement_descriptor_suffix"` | Provides information about a card charge. |
| `"status"` | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `"status_details"` | Describes changes to the subscription's status. |
| `"status_transitions"` |  |
| `"subscriptions"` | The customer's current subscriptions, if any. |
| `"subtotal"` | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `"subtotal_excluding_tax"` | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `"tax"` |  |
| `"tax_behavior"` | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `"tax_code"` | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `"tax_details"` | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `"tax_exempt"` | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `"tax_ids"` | The customer's tax IDs. |
| `"test_clock"` | ID of the test clock that this customer belongs to. |
| `"threshold_reason"` |  |
| `"tiers"` | Each element represents a pricing tier. |
| `"tiers_mode"` | Defines if the tiering price should be `graduated` or `volume` based. |
| `"total"` | Total after discounts and taxes. |
| `"total_discount_amounts"` | The aggregate amounts calculated per discount across all line items. |
| `"total_excluding_tax"` | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `"total_pretax_credit_amounts"` | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `"total_taxes"` | The aggregate tax information of all line items. |
| `"transfer"` | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `"transfer_data"` | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `"transfer_group"` | A string that identifies this transaction as part of a group. |
| `"transform_quantity"` | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `"trial_end"` | If the subscription has a trial, the end of that trial. |
| `"trial_settings"` | Settings related to subscription trials. |
| `"trial_start"` | If the subscription has a trial, the beginning of that trial. |
| `"type"` | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `"unit_amount"` | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `"unit_amount_decimal"` | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `"unit_label"` | A label that represents units of this product. |
| `"updated"` | Time at which the object was last updated. |
| `"url"` | A URL of a publicly-accessible webpage for this product. |
| `"webhooks_delivered_at"` | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

Operations: List.

API path: `/v1/charges/search`

#### Secret

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"deleted"` | If true, indicates that this secret has been deleted |
| `"expires_at"` | The Unix timestamp for the expiry time of the secret, after which the secret deletes. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"name"` | A name for the secret that's unique within the scope. |
| `"object"` | String representing the object's type. |
| `"payload"` | The plaintext secret value to be stored. |
| `"scope"` |  |
| `"type"` | The secret scope type. |
| `"user"` | The user ID, if type is set to "user" |

Operations: Create, List, Load.

API path: `/v1/apps/secrets`

#### Session

| Field | Description |
| --- | --- |
| `"account_holder"` | The account holder for whom accounts are collected in this session. |
| `"accounts"` | The accounts that were collected as part of this Session. |
| `"adaptive_pricing"` | Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing). |
| `"after_expiration"` | When set, provides configuration for actions to take if this Checkout Session expires. |
| `"allow_promotion_codes"` | Enables user redeemable promotion codes. |
| `"allowed_payment_method_types"` | A list of the types of payment methods (e.g., `card`) this Checkout Session can accept. |
| `"amount_subtotal"` | Total of all items before discounts or taxes are applied. |
| `"amount_total"` | Total of all items after discounts and taxes are applied. |
| `"automatic_tax"` |  |
| `"bank_account_token"` | Tokenization is the process Stripe uses to collect sensitive card or bank account details, or personally identifiable information (PII), directly from your customers in a secure manner. |
| `"billing_address_collection"` | Describes whether Checkout should collect the customer's billing address. |
| `"branding_settings"` |  |
| `"cancel_url"` | If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. |
| `"client_reference_id"` | A unique string to reference the Checkout Session. |
| `"client_secret"` | The client secret of your Checkout Session. |
| `"collected_information"` | Information about the customer collected within the Checkout Session. |
| `"configuration"` | The configuration used by this session, describing the features available. |
| `"consent"` | Results of `consent_collection` for this session. |
| `"consent_collection"` | When set, provides configuration for the Checkout Session to gather active consent from customers. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"currency_conversion"` | Currency conversion details for [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing) sessions created before 2025-03-31. |
| `"custom_fields"` | Collect additional information from your customer using custom fields. |
| `"custom_text"` |  |
| `"customer"` | The ID of the customer for this Session. |
| `"customer_account"` | The ID of the account for this Session. |
| `"customer_creation"` | Configure whether a Checkout Session creates a Customer when the Checkout Session completes. |
| `"customer_details"` | The customer details including the customer's tax exempt status and the customer's tax IDs. |
| `"customer_email"` | If provided, this value will be used when the Customer object is created. |
| `"discounts"` | List of coupons and promotion codes attached to the Checkout Session. |
| `"excluded_payment_method_types"` | A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session. |
| `"expires_at"` | The timestamp at which the Checkout Session will expire. |
| `"filters"` |  |
| `"flow"` | Information about a specific flow for the customer to go through. |
| `"id"` | Unique identifier for the object. |
| `"integration_identifier"` | The integration identifier for this Checkout Session. |
| `"invoice"` | ID of the invoice created by the Checkout Session, if it exists. |
| `"invoice_creation"` | Details on the state of invoice creation for the Checkout Session. |
| `"limits"` |  |
| `"line_items"` | The line items purchased by the customer. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"locale"` | The IETF language tag of the locale Checkout is displayed in. |
| `"managed_payments"` | Settings for Managed Payments for this Checkout Session and resulting [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/object). |
| `"manual_entry"` |  |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"mode"` | The mode of the Checkout Session. |
| `"name_collection"` |  |
| `"object"` | String representing the object's type. |
| `"on_behalf_of"` | The account for which the session was created on behalf of. |
| `"optional_items"` | The optional items presented to the customer at checkout. |
| `"origin_context"` | Where the user is coming from. |
| `"payment_intent"` | The ID of the PaymentIntent for Checkout Sessions in `payment` mode. |
| `"payment_link"` | The ID of the Payment Link that created this Session. |
| `"payment_method_collection"` | Configure whether a Checkout Session should collect a payment method for sessions with mode `payment`. |
| `"payment_method_configuration_details"` | Information about the payment method configuration used for this Checkout session if using dynamic payment methods. |
| `"payment_method_options"` | Payment-method-specific configuration for the PaymentIntent or SetupIntent of this CheckoutSession. |
| `"payment_method_types"` | A list of the types of payment methods (e.g. |
| `"payment_status"` | The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`. |
| `"permissions"` | This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object. |
| `"phone_number_collection"` |  |
| `"prefetch"` | Data features requested to be retrieved upon account creation. |
| `"presentment_details"` |  |
| `"recovered_from"` | The ID of the original expired Checkout Session that triggered the recovery flow. |
| `"redirect_on_completion"` | This parameter applies to `ui_mode: embedded_page`. |
| `"return_url"` | Applies to Checkout Sessions with `ui_mode: embedded_page` or `ui_mode: elements`. |
| `"saved_payment_method_options"` | Controls saved payment method settings for the session. |
| `"setup_intent"` | The ID of the SetupIntent for Checkout Sessions in `setup` mode. |
| `"shipping_address_collection"` | When set, provides configuration for Checkout to collect a shipping address from a customer. |
| `"shipping_cost"` | The details of the customer cost of shipping, including the customer chosen ShippingRate. |
| `"shipping_options"` | The shipping rate options applied to this Session. |
| `"status"` | The status of the Checkout Session, one of `open`, `complete`, or `expired`. |
| `"submit_type"` | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. |
| `"subscription"` | The ID of the [Subscription](https://docs.stripe.com/api/subscriptions) for Checkout Sessions in `subscription` mode. |
| `"success_url"` | The URL the customer will be directed to after the payment or subscription creation is successful. |
| `"tax_id_collection"` |  |
| `"total_details"` | Tax and discount details for the computed total amount. |
| `"ui_mode"` | The UI mode of the Session. |
| `"url"` | The URL to the Checkout Session. |
| `"wallet_options"` | Wallet-specific configuration for this Checkout Session. |

Operations: Create, List, Load.

API path: `/v1/checkout/sessions/{session}`

#### Setting

| Field | Description |
| --- | --- |
| `"defaults"` |  |
| `"head_office"` | The place where your business is located. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"status"` | The status of the Tax `Settings`. |
| `"status_details"` |  |

Operations: Create, Load.

API path: `/v1/tax/settings`

#### Settlement

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, Load.

API path: `/v1/issuing/settlements/{settlement}`

#### SetupAttempt

| Field | Description |
| --- | --- |
| `"application"` | The value of [application](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation. |
| `"attach_to_self"` | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `"created"` | Time at which the object was created. |
| `"customer"` | The value of [customer](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation. |
| `"customer_account"` | The value of [customer_account](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer_account) on the SetupIntent at the time of this confirmation. |
| `"flow_directions"` | Indicates the directions of money movement for which this payment method is intended to be used. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"on_behalf_of"` | The value of [on_behalf_of](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation. |
| `"payment_method"` | ID of the payment method used with this SetupAttempt. |
| `"payment_method_details"` |  |
| `"setup_error"` | The error encountered during this attempt to confirm the SetupIntent, if any. |
| `"setup_intent"` | ID of the SetupIntent that this attempt belongs to. |
| `"status"` | Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`. |
| `"usage"` | The value of [usage](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`. |

Operations: List.

API path: `/v1/setup_attempts`

#### SetupIntent

| Field | Description |
| --- | --- |
| `"allowed_payment_method_types"` | The list of payment method types to allow for this SetupIntent. |
| `"application"` | ID of the Connect application that created the SetupIntent. |
| `"attach_to_self"` | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `"automatic_payment_methods"` | Settings for dynamic payment methods compatible with this Setup Intent |
| `"cancellation_reason"` | Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`. |
| `"client_secret"` | The client secret of this SetupIntent. |
| `"created"` | Time at which the object was created. |
| `"customer"` | ID of the Customer this SetupIntent belongs to, if one exists. |
| `"customer_account"` | ID of the Account this SetupIntent belongs to, if one exists. |
| `"description"` | An arbitrary string attached to the object. |
| `"excluded_payment_method_types"` | Payment method types that are excluded from this SetupIntent. |
| `"flow_directions"` | Indicates the directions of money movement for which this payment method is intended to be used. |
| `"id"` | Unique identifier for the object. |
| `"last_setup_error"` | The error encountered in the previous SetupIntent confirmation. |
| `"latest_attempt"` | The most recent SetupAttempt for this SetupIntent. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"managed_payments"` |  |
| `"mandate"` | ID of the multi use Mandate generated by the SetupIntent. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"next_action"` | If present, this property tells you what actions you need to take in order for your customer to continue payment setup. |
| `"object"` | String representing the object's type. |
| `"on_behalf_of"` | The account (if any) for which the setup is intended. |
| `"payment_method"` | ID of the payment method used with this SetupIntent. |
| `"payment_method_configuration_details"` | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this Setup Intent. |
| `"payment_method_options"` | Payment method-specific configuration for this SetupIntent. |
| `"payment_method_types"` | The list of payment method types (e.g. |
| `"single_use_mandate"` | ID of the single_use Mandate generated by the SetupIntent. |
| `"status"` | [Status](https://docs.stripe.com/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`. |
| `"usage"` | Indicates how the payment method is intended to be used in the future. |

Operations: Create, List, Load.

API path: `/v1/setup_intents/{intent}`

#### ShippingRate

| Field | Description |
| --- | --- |
| `"active"` | Whether the shipping rate can be used for new purchases. |
| `"created"` | Time at which the object was created. |
| `"delivery_estimate"` | The estimated range for how long shipping will take, meant to be displayable to the customer. |
| `"display_name"` | The name of the shipping rate, meant to be displayable to the customer. |
| `"fixed_amount"` |  |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"tax_behavior"` | Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. |
| `"tax_code"` | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `"type"` | The type of calculation to use on the shipping rate. |

Operations: Create, List, Load.

API path: `/v1/shipping_rates/{shipping_rate_token}`

#### SigmaApiQuery

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"name"` | The name of the query. |
| `"object"` | String representing the object's type. |
| `"sql"` | The sql statement for the query. |

Operations: Create.

API path: `/v1/sigma/saved_queries/{id}`

#### Source

| Field | Description |
| --- | --- |
| `"ach_credit_transfer"` |  |
| `"ach_debit"` |  |
| `"acss_debit"` |  |
| `"alipay"` |  |
| `"allow_redisplay"` | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `"amount"` | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. |
| `"au_becs_debit"` |  |
| `"bancontact"` |  |
| `"card"` |  |
| `"card_present"` |  |
| `"client_secret"` | The client secret of the source. |
| `"code_verification"` |  |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. |
| `"customer"` | The ID of the customer to which this source is attached. |
| `"data"` | Details about each object. |
| `"eps"` |  |
| `"flow"` | The authentication `flow` of the source. |
| `"giropay"` |  |
| `"has_more"` | True if this list has another page of items after this one that can be fetched. |
| `"id"` | Unique identifier for the object. |
| `"ideal"` |  |
| `"klarna"` |  |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"multibanco"` |  |
| `"object"` | String representing the object's type. |
| `"owner"` | Information about the owner of the payment instrument that may be used or required by particular source types. |
| `"p24"` |  |
| `"receiver"` |  |
| `"redirect"` |  |
| `"sepa_debit"` |  |
| `"sofort"` |  |
| `"source_order"` |  |
| `"statement_descriptor"` | Extra information about a source. |
| `"status"` | The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. |
| `"three_d_secure"` |  |
| `"type"` | The `type` of the source. |
| `"url"` | The URL where this list can be accessed. |
| `"usage"` | Either `reusable` or `single_use`. |
| `"wechat"` |  |

Operations: Create, List, Load, Remove.

API path: `/v1/customers/{customer}/sources/{id}`

#### SourceMandateNotification

| Field | Description |
| --- | --- |
| `"acss_debit"` |  |
| `"amount"` | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. |
| `"bacs_debit"` |  |
| `"created"` | Time at which the object was created. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"reason"` | The reason of the mandate notification. |
| `"sepa_debit"` |  |
| `"source"` | `Source` objects allow you to accept a variety of payment methods. |
| `"status"` | The status of the mandate notification. |
| `"type"` | The type of source this mandate notification is attached to. |

Operations: Load.

API path: `/v1/sources/{source}/mandate_notifications/{mandate_notification}`

#### SourceTransaction

| Field | Description |
| --- | --- |
| `"ach_credit_transfer"` |  |
| `"amount"` | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver. |
| `"chf_credit_transfer"` |  |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"gbp_credit_transfer"` |  |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"paper_check"` |  |
| `"sepa_credit_transfer"` |  |
| `"source"` | The ID of the source this transaction is attached to. |
| `"status"` | The status of the transaction, one of `succeeded`, `pending`, or `failed`. |
| `"type"` | The type of source this transaction is attached to. |

Operations: List, Load.

API path: `/v1/sources/{source}/source_transactions`

#### Subscription

| Field | Description |
| --- | --- |
| `"application"` | ID of the Connect Application that created the subscription. |
| `"application_fee_percent"` | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `"automatic_tax"` |  |
| `"billing_cycle_anchor"` | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `"billing_cycle_anchor_config"` | The fixed values used to calculate the `billing_cycle_anchor`. |
| `"billing_mode"` | The billing mode of the subscription. |
| `"billing_schedules"` | Billing schedules for this subscription. |
| `"billing_thresholds"` | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `"cancel_at"` | A date in the future at which the subscription will automatically get canceled |
| `"cancel_at_period_end"` | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `"canceled_at"` | If the subscription has been canceled, the date of that cancellation. |
| `"cancellation_details"` | Details about why this subscription was cancelled |
| `"collection_method"` | Either `charge_automatically`, or `send_invoice`. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | ID of the customer who owns the subscription. |
| `"customer_account"` | ID of the account representing the customer who owns the subscription. |
| `"days_until_due"` | Number of days a customer has to pay invoices generated by this subscription. |
| `"default_payment_method"` | ID of the default payment method for the subscription. |
| `"default_source"` | ID of the default payment source for the subscription. |
| `"default_tax_rates"` | The tax rates that will apply to any subscription item that does not have `tax_rates` set. |
| `"description"` | The subscription's description, meant to be displayable to the customer. |
| `"discounts"` | The discounts applied to the subscription. |
| `"ended_at"` | If the subscription has ended, the date the subscription ended. |
| `"id"` | Unique identifier for the object. |
| `"invoice_settings"` |  |
| `"items"` | List of subscription items, each with an attached price. |
| `"latest_invoice"` | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"managed_payments"` | Settings for Managed Payments for this Subscription and resulting [Invoices](/api/invoices/object) and [PaymentIntents](/api/payment_intents/object). |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"next_pending_invoice_item_invoice"` | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `"object"` | String representing the object's type. |
| `"on_behalf_of"` | The account (if any) the charge was made on behalf of for charges associated with this subscription. |
| `"pause_collection"` | If specified, payment collection for this subscription will be paused. |
| `"payment_settings"` | Payment settings passed on to invoices created by the subscription. |
| `"pending_invoice_item_interval"` | Specifies an interval for how often to bill for any pending invoice items. |
| `"pending_setup_intent"` | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `"pending_update"` | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `"presentment_details"` |  |
| `"schedule"` | The schedule attached to the subscription |
| `"start_date"` | Date when the subscription was first created. |
| `"status"` | Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`. |
| `"status_details"` | Describes changes to the subscription's status. |
| `"test_clock"` | ID of the test clock this subscription belongs to. |
| `"transfer_data"` | The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices. |
| `"trial_end"` | If the subscription has a trial, the end of that trial. |
| `"trial_settings"` | Settings related to subscription trials. |
| `"trial_start"` | If the subscription has a trial, the beginning of that trial. |

Operations: Create, List, Load, Remove.

API path: `/v1/customers/{customer}/subscriptions/{subscription_exposed_id}`

#### SubscriptionItem

| Field | Description |
| --- | --- |
| `"billed_until"` | The time period the subscription item has been billed for. |
| `"billing_thresholds"` | Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period |
| `"created"` | Time at which the object was created. |
| `"current_period_end"` | The end time of this subscription item's current billing period. |
| `"current_period_start"` | The start time of this subscription item's current billing period. |
| `"current_trial"` | The current trial that is applied to this subscription item. |
| `"discounts"` | The discounts applied to the subscription item. |
| `"id"` | Unique identifier for the object. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"price"` | Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products. |
| `"quantity"` | The [quantity](https://docs.stripe.com/subscriptions/quantities) of the plan to which the customer should be subscribed. |
| `"subscription"` | The `subscription` this `subscription_item` belongs to. |
| `"tax_rates"` | The tax rates which apply to this `subscription_item`. |

Operations: Create, List, Load.

API path: `/v1/subscription_items/{item}`

#### SubscriptionSchedule

| Field | Description |
| --- | --- |
| `"application"` | ID of the Connect Application that created the schedule. |
| `"billing_mode"` | The billing mode of the subscription. |
| `"canceled_at"` | Time at which the subscription schedule was canceled. |
| `"completed_at"` | Time at which the subscription schedule was completed. |
| `"created"` | Time at which the object was created. |
| `"current_phase"` | Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`. |
| `"customer"` | ID of the customer who owns the subscription schedule. |
| `"customer_account"` | ID of the account who owns the subscription schedule. |
| `"default_settings"` |  |
| `"end_behavior"` | Behavior of the subscription schedule and underlying subscription when it ends. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"pause_schedules"` | The pause schedules for this subscription schedule. |
| `"phases"` | Configuration for the subscription schedule's phases. |
| `"released_at"` | Time at which the subscription schedule was released. |
| `"released_subscription"` | ID of the subscription once managed by the subscription schedule (if it is released). |
| `"status"` | The present status of the subscription schedule. |
| `"subscription"` | ID of the subscription managed by the subscription schedule. |
| `"test_clock"` | ID of the test clock this subscription schedule belongs to. |

Operations: Create, List, Load.

API path: `/v1/subscription_schedules/{schedule}`

#### Supplier

| Field | Description |
| --- | --- |
| `"id"` | Unique identifier for the object. |
| `"info_url"` | Link to a webpage to learn more about the supplier. |
| `"livemode"` | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `"locations"` | The locations in which this supplier operates. |
| `"name"` | Name of this carbon removal supplier. |
| `"object"` | String representing the object’s type. |
| `"removal_pathway"` | The scientific pathway used for carbon removal. |

Operations: List, Load.

API path: `/v1/climate/suppliers`

#### TaxCode

| Field | Description |
| --- | --- |
| `"description"` | A detailed description of which types of products the tax code represents. |
| `"id"` | Unique identifier for the object. |
| `"name"` | A short name for the tax code. |
| `"object"` | String representing the object's type. |
| `"requirements"` | An object that describes more information about the tax location required for this tax code. |

Operations: List, Load.

API path: `/v1/tax_codes`

#### TaxId

| Field | Description |
| --- | --- |
| `"country"` | Two-letter ISO code representing the country of the tax ID. |
| `"created"` | Time at which the object was created. |
| `"customer"` | ID of the customer. |
| `"customer_account"` | ID of the Account representing the customer. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"owner"` | The account or customer the tax ID belongs to. |
| `"type"` | Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`,… |
| `"value"` | Value of the tax ID. |
| `"verification"` | Tax ID verification information. |

Operations: Create, List, Load, Remove.

API path: `/v1/customers/{customer}/tax_ids`

#### TaxRate

| Field | Description |
| --- | --- |
| `"active"` | Defaults to `true`. |
| `"country"` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `"created"` | Time at which the object was created. |
| `"description"` | An arbitrary string attached to the tax rate for your internal use only. |
| `"display_name"` | The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page. |
| `"effective_percentage"` | Actual/effective tax rate percentage out of 100. |
| `"flat_amount"` | The amount of the tax rate when the `rate_type` is `flat_amount`. |
| `"id"` | Unique identifier for the object. |
| `"inclusive"` | This specifies if the tax rate is inclusive or exclusive. |
| `"jurisdiction"` | The jurisdiction for the tax rate. |
| `"jurisdiction_level"` | The level of the jurisdiction that imposes this tax rate. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"percentage"` | Tax rate percentage out of 100. |
| `"rate_type"` | Indicates the type of tax rate applied to the taxable amount. |
| `"state"` | [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. |
| `"tax_type"` | The high-level tax type, such as `vat` or `sales_tax`. |

Operations: Create, List, Load.

API path: `/v1/tax_rates/{tax_rate}`

#### TestClock

| Field | Description |
| --- | --- |
| `"advancing"` |  |
| `"created"` | Time at which the object was created. |
| `"deletes_after"` | Time at which this clock is scheduled to auto delete. |
| `"frozen_time"` | Time at which all objects belonging to this clock are frozen. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"name"` | The custom name supplied at creation. |
| `"object"` | String representing the object's type. |
| `"status"` | The status of the Test Clock. |
| `"status_details"` |  |

Operations: Create, List, Load, Remove.

API path: `/v1/test_helpers/test_clocks/{test_clock}/advance`

#### Token

| Field | Description |
| --- | --- |
| `"bank_account"` | These bank accounts are payment methods on `Customer` objects. |
| `"card"` | Card associated with this token. |
| `"client_ip"` | IP address of the client that generates the token. |
| `"created"` | Time at which the object was created. |
| `"device_fingerprint"` | The hashed ID derived from the device ID from the card network associated with the token. |
| `"id"` | Unique identifier for the object. |
| `"last4"` | The last four digits of the token. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"network"` | The token service provider / card network associated with the token. |
| `"network_data"` |  |
| `"network_updated_at"` | Time at which the token was last updated by the card network. |
| `"object"` | String representing the object's type. |
| `"status"` | The usage state of the token. |
| `"type"` | Type of the token: `account`, `bank_account`, `card`, or `pii`. |
| `"used"` | Determines if you have already used this token (you can only use tokens once). |
| `"wallet_provider"` | The digital wallet for this token, if one was used. |

Operations: Create, List, Load.

API path: `/v1/issuing/tokens/{token}`

#### Topup

| Field | Description |
| --- | --- |
| `"amount"` | Amount transferred. |
| `"balance_transaction"` | ID of the balance transaction that describes the impact of this top-up on your account balance. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"description"` | An arbitrary string attached to the object. |
| `"expected_availability_date"` | Date the funds are expected to arrive in your Stripe account for payouts. |
| `"failure_code"` | Error code explaining reason for top-up failure if available (see [the errors section](/api/errors) for a list of codes). |
| `"failure_message"` | Message to user further explaining reason for top-up failure if available. |
| `"id"` | Unique identifier for the object. |
| `"initiated_by"` | Indicates whether the top-up was initiated by Stripe or by the user. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"payment_method"` | The ID of a PaymentMethod representing the payment method used for the top-up. |
| `"payment_method_options"` | Payment-method-specific configuration for this top-up. |
| `"source"` | The source field is deprecated. |
| `"statement_descriptor"` | Extra information about a top-up. |
| `"status"` | The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`. |
| `"transfer_group"` | A string that identifies this top-up as part of a group. |

Operations: Create, List, Load.

API path: `/v1/topups/{topup}`

#### Transaction

| Field | Description |
| --- | --- |
| `"account"` | The ID of the Financial Connections Account this transaction belongs to. |
| `"amount"` | The transaction amount, which will be reflected in your balance. |
| `"amount_details"` | Detailed breakdown of amount components. |
| `"authorization"` | The `Authorization` object that led to this transaction. |
| `"balance_impact"` | Change to a FinancialAccount's balance |
| `"balance_transaction"` | ID of the [balance transaction](https://docs.stripe.com/api/balance_transactions) associated with this transaction. |
| `"card"` | The card used to make this transaction. |
| `"cardholder"` | The cardholder to whom this transaction belongs. |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"customer"` | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `"customer_details"` |  |
| `"description"` | An arbitrary string attached to the object. |
| `"dispute"` | If you've disputed the transaction, the ID of the dispute. |
| `"entries"` | A list of TransactionEntries that are part of this Transaction. |
| `"financial_account"` | The FinancialAccount associated with this object. |
| `"flow"` | ID of the flow that created the Transaction. |
| `"flow_details"` | Details of the flow that created the Transaction. |
| `"flow_type"` | Type of the flow that created the Transaction. |
| `"id"` | Unique identifier for the object. |
| `"line_items"` | The tax collected or refunded, by line item. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"merchant_amount"` | The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `"merchant_currency"` | The currency with which the merchant is taking payment. |
| `"merchant_data"` |  |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"network_data"` | Details about the transaction, such as processing dates, set by the card network. |
| `"object"` | String representing the object's type. |
| `"posted_at"` | Time at which this transaction posted. |
| `"purchase_details"` | Additional purchase information that is optionally provided by the merchant. |
| `"reference"` | A custom unique identifier, such as 'myOrder_123'. |
| `"reversal"` | If `type=reversal`, contains information about what was reversed. |
| `"ship_from_details"` | The details of the ship from location, such as the address. |
| `"shipping_cost"` | The shipping cost details for the transaction. |
| `"status"` | Status of the Transaction. |
| `"status_transitions"` |  |
| `"tax_date"` | The calculation uses the tax rules and rates that are in effect at this timestamp. |
| `"token"` | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this transaction. |
| `"transacted_at"` | Time at which the transaction was transacted. |
| `"transaction_refresh"` | The token of the transaction refresh that last updated or created this transaction. |
| `"treasury"` | [Treasury](https://docs.stripe.com/api/treasury) details related to this transaction if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts |
| `"type"` | The nature of the transaction. |
| `"updated"` | Time at which the object was last updated. |
| `"void_at"` | Time at which this transaction was voided. |
| `"wallet"` | The digital wallet used for this transaction. |

Operations: Create, List, Load.

API path: `/v1/issuing/transactions/{transaction}`

#### TransactionEntry

| Field | Description |
| --- | --- |
| `"balance_impact"` | Change to a FinancialAccount's balance |
| `"created"` | Time at which the object was created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"effective_at"` | When the TransactionEntry will impact the FinancialAccount's balance. |
| `"financial_account"` | The FinancialAccount associated with this object. |
| `"flow"` | Token of the flow associated with the TransactionEntry. |
| `"flow_details"` | Details of the flow associated with the TransactionEntry. |
| `"flow_type"` | Type of the flow associated with the TransactionEntry. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"transaction"` | The Transaction associated with this object. |
| `"type"` | The specific money movement that generated the TransactionEntry. |

Operations: List, Load.

API path: `/v1/treasury/transaction_entries`

#### Transfer

| Field | Description |
| --- | --- |
| `"amount"` | Amount in cents (or local equivalent) to be transferred. |
| `"amount_reversed"` | Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued). |
| `"balance_transaction"` | Balance transaction that describes the impact of this transfer on your account balance. |
| `"created"` | Time that this record of the transfer was first created. |
| `"currency"` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `"description"` | An arbitrary string attached to the object. |
| `"destination"` | ID of the Stripe account the transfer was sent to. |
| `"destination_payment"` | If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"reversals"` | A list of reversals that have been applied to the transfer. |
| `"reversed"` | Whether the transfer has been fully reversed. |
| `"source_transaction"` | ID of the charge that was used to fund the transfer. |
| `"source_type"` | The source balance this transfer came from. |
| `"transfer_group"` | A string that identifies this transaction as part of a group. |

Operations: Create, List, Load.

API path: `/v1/transfers/{transfer}`

#### TrialOffer

| Field | Description |
| --- | --- |
| `"active"` | Whether the trial offer is active. |
| `"duration"` |  |
| `"end_behavior"` |  |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"nickname"` | A brief description of the trial offer, hidden from customers. |
| `"object"` | String representing the object's type. |
| `"price"` | The price during the trial offer. |

Operations: Create, List, Load.

API path: `/v1/product_catalog/trial_offers/{id}`

#### ValueList

| Field | Description |
| --- | --- |
| `"alias"` | The name of the value list for use in rules. |
| `"created"` | Time at which the object was created. |
| `"created_by"` | The name or email address of the user who created this value list. |
| `"id"` | Unique identifier for the object. |
| `"item_type"` | The type of items in the value list. |
| `"list_items"` | List of items contained within this value list. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"name"` | The name of the value list. |
| `"object"` | String representing the object's type. |

Operations: Create, List, Load, Remove.

API path: `/v1/radar/value_lists/{value_list}`

#### ValueListItem

| Field | Description |
| --- | --- |
| `"created"` | Time at which the object was created. |
| `"created_by"` | The name or email address of the user who added this item to the value list. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"value"` | The value of the item. |
| `"value_list"` | The identifier of the value list this item belongs to. |

Operations: Create, List, Load, Remove.

API path: `/v1/radar/value_list_items`

#### VerificationReport

| Field | Description |
| --- | --- |
| `"client_reference_id"` | A string to reference this user. |
| `"created"` | Time at which the object was created. |
| `"document"` | Result from a document check |
| `"email"` | Result from a email check |
| `"id"` | Unique identifier for the object. |
| `"id_number"` | Result from an id_number check |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"object"` | String representing the object's type. |
| `"options"` |  |
| `"phone"` | Result from a phone check |
| `"selfie"` | Result from a selfie check |
| `"type"` | Type of report. |
| `"verification_flow"` | The configuration token of a verification flow from the dashboard. |
| `"verification_session"` | ID of the VerificationSession that created this report. |

Operations: List, Load.

API path: `/v1/identity/verification_reports`

#### VerificationSession

| Field | Description |
| --- | --- |
| `"client_reference_id"` | A string to reference this user. |
| `"client_secret"` | The short-lived client secret used by Stripe.js to [show a verification modal](https://docs.stripe.com/js/identity/modal) inside your app. |
| `"created"` | Time at which the object was created. |
| `"id"` | Unique identifier for the object. |
| `"last_error"` | If present, this property tells you the last error encountered when processing the verification. |
| `"last_verification_report"` | ID of the most recent VerificationReport. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"options"` | A set of options for the session’s verification checks. |
| `"provided_details"` | Details provided about the user being verified. |
| `"redaction"` | Redaction status of this VerificationSession. |
| `"related_customer"` | Customer ID |
| `"related_customer_account"` | The ID of the Account representing a customer. |
| `"related_person"` |  |
| `"status"` | Status of this VerificationSession. |
| `"type"` | The type of [verification check](https://docs.stripe.com/identity/verification-checks) to be performed. |
| `"url"` | The short-lived URL that you use to redirect a user to Stripe to submit their identity information. |
| `"verification_flow"` | The configuration token of a verification flow from the dashboard. |
| `"verified_outputs"` | The user’s verified data. |

Operations: Create, List, Load.

API path: `/v1/identity/verification_sessions/{session}`

#### WebhookEndpoint

| Field | Description |
| --- | --- |
| `"api_version"` | The API version that events are rendered as for this webhook endpoint. |
| `"application"` | The ID of the associated Connect application. |
| `"created"` | Time at which the object was created. |
| `"description"` | An optional description of what the webhook is used for. |
| `"enabled_events"` | The list of events to enable for this endpoint. |
| `"id"` | Unique identifier for the object. |
| `"livemode"` | If the object exists in live mode, the value is `true`. |
| `"metadata"` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `"object"` | String representing the object's type. |
| `"secret"` | The endpoint's secret, used to generate [webhook signatures](https://docs.stripe.com/webhooks/signatures). |
| `"status"` | The status of the webhook. |
| `"url"` | The URL of the webhook endpoint. |

Operations: Create, List, Load.

API path: `/v1/webhook_endpoints/{webhook_endpoint}`



## Entities


### Account

Create an instance: `account := client.Account(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_holder` | `any` | The account holder that this account belongs to. |
| `account_numbers` | `[]any` | Details about the account numbers. |
| `balance` | `any` | The most recent information about the account's balance. |
| `balance_refresh` | `any` | The state of the most recent attempt to refresh the account balance. |
| `business_profile` | `any` | Business information about the account. |
| `business_type` | `string` | The business type. |
| `capabilities` | `map[string]any` |  |
| `category` | `string` | The type of the account. |
| `charges_enabled` | `bool` | Whether the account can process charges. |
| `company` | `map[string]any` |  |
| `controller` | `map[string]any` |  |
| `country` | `string` | The account's country. |
| `created` | `int` | Time at which the object was created. |
| `default_currency` | `string` | Three-letter ISO currency code representing the default currency for the account. |
| `details_submitted` | `bool` | Whether account details have been submitted. |
| `display_name` | `string` | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `email` | `string` | An email address associated with the account. |
| `external_accounts` | `map[string]any` | External accounts (bank accounts and debit cards) currently attached to this account. |
| `future_requirements` | `map[string]any` |  |
| `groups` | `any` | The groups associated with the account. |
| `id` | `string` | Unique identifier for the object. |
| `individual` | `map[string]any` | This is an object representing a person associated with a Stripe account. |
| `institution_name` | `string` | The name of the institution that holds this account. |
| `last4` | `string` | The last 4 digits of the account number. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `ownership` | `any` | The most recent information about the account's owners. |
| `ownership_refresh` | `any` | The state of the most recent attempt to refresh the account owners. |
| `payouts_enabled` | `bool` | Whether the funds in this account can be paid out. |
| `permissions` | `[]any` | The list of permissions granted by this account. |
| `requirements` | `map[string]any` |  |
| `settings` | `any` | Options for customizing how the account functions within Stripe. |
| `status` | `string` | The status of the link to the account. |
| `status_details` | `map[string]any` |  |
| `subcategory` | `string` | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `[]any` | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `[]any` | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `tos_acceptance` | `map[string]any` |  |
| `transaction_refresh` | `any` | The state of the most recent attempt to refresh the account transactions. |
| `type` | `string` | The Stripe account type. |

#### Example: Load

```go
account, err := client.Account(nil).Load(map[string]any{"account": "account"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(account) // the loaded record
```

#### Example: List

```go
accounts, err := client.Account(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accounts) // the array of records
```

#### Example: Create

```go
result, err := client.Account(nil).Create(map[string]any{
    "id": "example_id",
    "category": "example_category",
    "controller": map[string]any{},
    "created": 1,
    "external_accounts": map[string]any{},
    "individual": map[string]any{},
    "institution_name": "example_institution_name",
    "livemode": true,
    "object": "example_object",
    "status": "example_status",
    "subcategory": "example_subcategory",
    "supported_payment_method_types": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AccountLink

Create an instance: `accountLink := client.AccountLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `expires_at` | `int` | The timestamp at which this account link will expire. |
| `object` | `string` | String representing the object's type. |
| `url` | `string` | The URL for the account link. |

#### Example: Create

```go
result, err := client.AccountLink(nil).Create(map[string]any{
    "created": 1,
    "expires_at": 1,
    "object": "example_object",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AccountOwner

Create an instance: `accountOwner := client.AccountOwner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | The email address of the owner. |
| `id` | `string` | Unique identifier for the object. |
| `name` | `string` | The full name of the owner. |
| `object` | `string` | String representing the object's type. |
| `ownership` | `string` | The ownership object that this owner belongs to. |
| `phone` | `string` | The raw phone number of the owner. |
| `raw_address` | `string` | The raw physical address of the owner. |
| `refreshed_at` | `int` | The timestamp of the refresh that updated this owner. |

#### Example: List

```go
accountOwners, err := client.AccountOwner(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountOwners) // the array of records
```


### AccountSession

Create an instance: `accountSession := client.AccountSession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_management` | `map[string]any` |  |
| `account_onboarding` | `map[string]any` |  |
| `balance_report` | `map[string]any` |  |
| `balances` | `map[string]any` |  |
| `disputes_list` | `map[string]any` |  |
| `documents` | `map[string]any` |  |
| `financial_account` | `map[string]any` |  |
| `financial_account_transactions` | `map[string]any` |  |
| `instant_payouts_promotion` | `map[string]any` |  |
| `issuing_card` | `map[string]any` |  |
| `issuing_cards_list` | `map[string]any` |  |
| `notification_banner` | `map[string]any` |  |
| `payment_details` | `map[string]any` |  |
| `payment_disputes` | `map[string]any` |  |
| `payment_method_settings` | `map[string]any` |  |
| `payments` | `map[string]any` |  |
| `payout_details` | `map[string]any` |  |
| `payout_reconciliation_report` | `map[string]any` |  |
| `payouts` | `map[string]any` |  |
| `payouts_list` | `map[string]any` |  |
| `tax_registrations` | `map[string]any` |  |
| `tax_settings` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.AccountSession(nil).Create(map[string]any{
    "account_management": map[string]any{},
    "account_onboarding": map[string]any{},
    "balance_report": map[string]any{},
    "balances": map[string]any{},
    "disputes_list": map[string]any{},
    "documents": map[string]any{},
    "financial_account": map[string]any{},
    "financial_account_transactions": map[string]any{},
    "instant_payouts_promotion": map[string]any{},
    "issuing_card": map[string]any{},
    "issuing_cards_list": map[string]any{},
    "notification_banner": map[string]any{},
    "payment_details": map[string]any{},
    "payment_disputes": map[string]any{},
    "payment_method_settings": map[string]any{},
    "payments": map[string]any{},
    "payout_details": map[string]any{},
    "payout_reconciliation_report": map[string]any{},
    "payouts": map[string]any{},
    "payouts_list": map[string]any{},
    "tax_registrations": map[string]any{},
    "tax_settings": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ActiveEntitlement

Create an instance: `activeEntitlement := client.ActiveEntitlement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `feature` | `any` | The [Feature](https://docs.stripe.com/api/entitlements/feature) that the customer is entitled to. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | A unique key you provide as your own system identifier. |
| `object` | `string` | String representing the object's type. |

#### Example: Load

```go
activeEntitlement, err := client.ActiveEntitlement(nil).Load(map[string]any{"id": "active_entitlement_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(activeEntitlement) // the loaded record
```

#### Example: List

```go
activeEntitlements, err := client.ActiveEntitlement(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(activeEntitlements) // the array of records
```


### Alert

Create an instance: `alert := client.Alert(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_type` | `string` | Defines the type of the alert. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | Status of the alert. |
| `title` | `string` | Title of the alert. |
| `usage_threshold` | `any` | Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://docs.stripe.com/api/billing/meter). |

#### Example: Load

```go
alert, err := client.Alert(nil).Load(map[string]any{"id": "alert_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alert) // the loaded record
```

#### Example: List

```go
alerts, err := client.Alert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(alerts) // the array of records
```

#### Example: Create

```go
result, err := client.Alert(nil).Create(map[string]any{
    "alert_type": "example_alert_type",
    "id": "example_id",
    "livemode": true,
    "object": "example_object",
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApplePayDomain

Create an instance: `applePayDomain := client.ApplePayDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `domain_name` | `string` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |

#### Example: Load

```go
applePayDomain, err := client.ApplePayDomain(nil).Load(map[string]any{"id": "apple_pay_domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(applePayDomain) // the loaded record
```

#### Example: Create

```go
result, err := client.ApplePayDomain(nil).Create(map[string]any{
    "created": 1,
    "domain_name": "example_domain_name",
    "id": "example_id",
    "livemode": true,
    "object": "example_object",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApplicationFee

Create an instance: `applicationFee := client.ApplicationFee(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `any` | ID of the Stripe account this fee was taken from. |
| `amount` | `int` | Amount earned, in cents (or local equivalent). |
| `amount_refunded` | `int` | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued) |
| `application` | `any` | ID of the Connect application that earned the fee. |
| `balance_transaction` | `any` | Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds). |
| `charge` | `any` | ID of the charge that the application fee was taken from. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `fee_source` | `any` | Polymorphic source of the application fee. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `originating_transaction` | `any` | ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter. |
| `refunded` | `bool` | Whether the fee has been fully refunded. |
| `refunds` | `map[string]any` | A list of refunds that have been applied to the fee. |

#### Example: Load

```go
applicationFee, err := client.ApplicationFee(nil).Load(map[string]any{"id": "application_fee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(applicationFee) // the loaded record
```

#### Example: List

```go
applicationFees, err := client.ApplicationFee(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(applicationFees) // the array of records
```

#### Example: Create

```go
result, err := client.ApplicationFee(nil).Create(map[string]any{
    "id": "example_id",
    "account": "example_account",
    "amount": 1,
    "amount_refunded": 1,
    "application": "example_application",
    "charge": "example_charge",
    "created": 1,
    "currency": "example_currency",
    "livemode": true,
    "object": "example_object",
    "refunded": true,
    "refunds": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Association

Create an instance: `association := client.Association(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
associations, err := client.Association(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(associations) // the array of records
```


### Authentication

Create an instance: `authentication := client.Authentication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acquirer_details` | `map[string]any` | Contains additional details about the acquirer for a 3DS Authentication. |
| `amount` | `int` | The amount for this 3DS Authentication. |
| `challenge_url` | `string` | The URL for presenting a challenge to your cardholder, present if status is requires_challenge. |
| `channel` | `map[string]any` | Contains details on the channel used (browser, 3RI) for a standalone 3DS Authentication. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `directory_server` | `string` | The 3DS directory server with which this 3DS Authentication was processed. |
| `fingerprinting_url` | `string` | The URL for performing issuer fingerprinting, present if fingerprinting is supported for the given payment method. |
| `flow_preference` | `map[string]any` | Contains details of the flow preference used for a standalone 3DS Authentication. |
| `future_usage` | `map[string]any` | Contains information about the future authorisations related to this authentication |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `message_category` | `string` | Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `outcome` | `string` | The outcome of this 3DS Authentication. |
| `outcome_details` | `map[string]any` | Contains details on the result for a standalone 3DS Authentication. |
| `payment_method` | `any` | ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication. |
| `reason` | `string` | The reason for invoking this 3DS Authentication. |
| `shipping_address` | `map[string]any` | Contains details about the shipping address for a 3DS Authentication. |
| `status` | `string` | Status of this Authentication. |

#### Example: Load

```go
authentication, err := client.Authentication(nil).Load(map[string]any{"id": "authentication_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(authentication) // the loaded record
```

#### Example: List

```go
authentications, err := client.Authentication(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(authentications) // the array of records
```

#### Example: Create

```go
result, err := client.Authentication(nil).Create(map[string]any{
    "channel": map[string]any{},
    "created": 1,
    "directory_server": "example_directory_server",
    "flow_preference": map[string]any{},
    "future_usage": map[string]any{},
    "id": "example_id",
    "livemode": true,
    "message_category": "example_message_category",
    "object": "example_object",
    "outcome_details": map[string]any{},
    "payment_method": "example_payment_method",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Authorization

Create an instance: `authorization := client.Authorization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | The total amount that was authorized or rejected. |
| `amount_details` | `any` | Detailed breakdown of amount components. |
| `approved` | `bool` | Whether the authorization has been approved. |
| `authorization_method` | `string` | How the card details were provided. |
| `balance_transactions` | `[]any` | List of balance transactions associated with this authorization. |
| `card` | `map[string]any` | You can [create physical or virtual cards](https://docs.stripe.com/issuing) that are issued to cardholders. |
| `card_presence` | `string` | Whether the card was present at the point of sale for the authorization. |
| `cardholder` | `any` | The cardholder to whom this authorization belongs. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | The currency of the cardholder. |
| `fleet` | `any` | Fleet-specific information for authorizations using Fleet cards. |
| `fraud_challenges` | `[]any` | Fraud challenges sent to the cardholder, if this authorization was declined for fraud risk reasons. |
| `fuel` | `any` | Information about fuel that was purchased with this transaction. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `int` | The total amount that was authorized or rejected. |
| `merchant_currency` | `string` | The local currency that was presented to the cardholder for the authorization. |
| `merchant_data` | `map[string]any` |  |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `any` | Details about the authorization, such as identifiers, set by the card network. |
| `object` | `string` | String representing the object's type. |
| `pending_request` | `any` | The pending authorization request. |
| `request_history` | `[]any` | History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. |
| `status` | `string` | The current status of the authorization in its lifecycle. |
| `token` | `string` | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this authorization. |
| `transactions` | `[]any` | List of [transactions](https://docs.stripe.com/api/issuing/transactions) associated with this authorization. |
| `treasury` | `any` | [Treasury](https://docs.stripe.com/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts). |
| `verification_data` | `map[string]any` |  |
| `verified_by_fraud_challenge` | `bool` | Whether the authorization bypassed fraud risk checks because the cardholder has previously completed a fraud challenge on a similar high-risk authorization from the same merchant. |
| `wallet` | `string` | The digital wallet used for this transaction. |

#### Example: Load

```go
authorization, err := client.Authorization(nil).Load(map[string]any{"id": "authorization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(authorization) // the loaded record
```

#### Example: List

```go
authorizations, err := client.Authorization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(authorizations) // the array of records
```

#### Example: Create

```go
result, err := client.Authorization(nil).Create(map[string]any{
    "id": "example_id",
    "amount": 1,
    "approved": true,
    "authorization_method": "example_authorization_method",
    "balance_transactions": []any{},
    "card": map[string]any{},
    "created": 1,
    "currency": "example_currency",
    "livemode": true,
    "merchant_amount": 1,
    "merchant_currency": "example_merchant_currency",
    "merchant_data": map[string]any{},
    "metadata": map[string]any{},
    "object": "example_object",
    "request_history": []any{},
    "status": "example_status",
    "transactions": []any{},
    "verification_data": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Balance

Create an instance: `balance := client.Balance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available` | `[]any` | Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://docs.stripe.com/api#transfers) or [Payouts API](https://docs.stripe.com/api#payouts). |
| `connect_reserved` | `[]any` | Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. |
| `instant_available` | `[]any` | Funds that you can pay out using Instant Payouts. |
| `issuing` | `map[string]any` |  |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `pending` | `[]any` | Funds that aren't available in the balance yet. |
| `refund_and_dispute_prefunding` | `map[string]any` |  |

#### Example: List

```go
balances, err := client.Balance(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(balances) // the array of records
```


### BalanceSetting

Create an instance: `balanceSetting := client.BalanceSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `debit_negative_balances` | `bool` | A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. |
| `payouts` | `any` | Settings specific to the account's payouts. |
| `settlement_timing` | `map[string]any` |  |

#### Example: Load

```go
balanceSetting, err := client.BalanceSetting(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(balanceSetting) // the loaded record
```

#### Example: Create

```go
result, err := client.BalanceSetting(nil).Create(map[string]any{
    "settlement_timing": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BalanceTransaction

Create an instance: `balanceTransaction := client.BalanceTransaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Gross amount of this transaction (in cents (or local equivalent)). |
| `available_on` | `int` | The date that the transaction's net funds become available in the Stripe balance. |
| `balance_type` | `string` | The balance that this transaction impacts. |
| `checkout_session` | `any` | The ID of the checkout session (if any) that created the transaction. |
| `created` | `int` | Time at which the object was created. |
| `credit_note` | `any` | The ID of the credit note (if any) related to the transaction. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | The ID of the customer the transaction belongs to. |
| `customer_account` | `string` | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | `string` | An arbitrary string attached to the object. |
| `ending_balance` | `int` | The customer's `balance` after the transaction was applied. |
| `exchange_rate` | `float64` | If applicable, this transaction uses an exchange rate. |
| `fee` | `int` | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | `[]any` | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `any` | The ID of the invoice (if any) related to the transaction. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net` | `int` | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `string` | String representing the object's type. |
| `reporting_category` | `string` | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `any` | This transaction relates to the Stripe object. |
| `status` | `string` | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `string` | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

#### Example: Load

```go
balanceTransaction, err := client.BalanceTransaction(nil).Load(map[string]any{"id": "balance_transaction_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(balanceTransaction) // the loaded record
```

#### Example: List

```go
balanceTransactions, err := client.BalanceTransaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(balanceTransactions) // the array of records
```


### BankAccount

Create an instance: `bankAccount := client.BankAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `any` | The account this bank account belongs to. |
| `account_holder_name` | `string` | The name of the person or business that owns the bank account. |
| `account_holder_type` | `string` | The type of entity that holds the account. |
| `account_type` | `string` | The bank account type. |
| `available_payout_methods` | `[]any` | A set of available payout methods for this bank account. |
| `bank_name` | `string` | Name of the bank associated with the routing number (e.g., `WELLS FARGO`). |
| `country` | `string` | Two-letter ISO code representing the country the bank account is located in. |
| `currency` | `string` | Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. |
| `customer` | `any` | The ID of the customer that the bank account is associated with. |
| `default_for_currency` | `bool` | Whether this bank account is the default external account for its currency. |
| `fingerprint` | `string` | Uniquely identifies this particular bank account. |
| `future_requirements` | `any` | Information about the [upcoming new requirements for the bank account](https://docs.stripe.com/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when. |
| `id` | `string` | Unique identifier for the object. |
| `last4` | `string` | The last four digits of the bank account number. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `requirements` | `any` | Information about the requirements for the bank account, including what information needs to be collected. |
| `routing_number` | `string` | The routing transit number for the bank account. |
| `status` | `string` | For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, `tokenized_account_number_deactivated` or `errored`. |

#### Example: Load

```go
bankAccount, err := client.BankAccount(nil).Load(map[string]any{"id": "bank_account_id", "customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(bankAccount) // the loaded record
```

#### Example: List

```go
bankAccounts, err := client.BankAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(bankAccounts) // the array of records
```

#### Example: Create

```go
result, err := client.BankAccount(nil).Create(map[string]any{
    "customer_id": "example_customer_id",
    "country": "example_country",
    "currency": "example_currency",
    "last4": "example_last4",
    "object": "example_object",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Calculation

Create an instance: `calculation := client.Calculation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount_total` | `int` | Total amount after taxes in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `map[string]any` |  |
| `expires_at` | `int` | Timestamp of date at which the tax calculation will expire. |
| `id` | `string` | Unique identifier for the calculation. |
| `line_items` | `map[string]any` | The list of items the customer is purchasing. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `ship_from_details` | `any` | The details of the ship from location, such as the address. |
| `shipping_cost` | `any` | The shipping cost details for the calculation. |
| `tax_amount_exclusive` | `int` | The amount of tax to be collected on top of the line item prices. |
| `tax_amount_inclusive` | `int` | The amount of tax already included in the line item prices. |
| `tax_breakdown` | `[]any` | Breakdown of individual tax amounts that add up to the total. |
| `tax_date` | `int` | The calculation uses the tax rules and rates that are in effect at this timestamp. |

#### Example: Load

```go
calculation, err := client.Calculation(nil).Load(map[string]any{"id": "calculation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(calculation) // the loaded record
```

#### Example: Create

```go
result, err := client.Calculation(nil).Create(map[string]any{
    "amount_total": 1,
    "currency": "example_currency",
    "customer_details": map[string]any{},
    "line_items": map[string]any{},
    "livemode": true,
    "object": "example_object",
    "tax_amount_exclusive": 1,
    "tax_amount_inclusive": 1,
    "tax_breakdown": []any{},
    "tax_date": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Capability

Create an instance: `capability := client.Capability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `any` | The account for which the capability enables functionality. |
| `future_requirements` | `map[string]any` |  |
| `id` | `string` | The identifier for the capability. |
| `object` | `string` | String representing the object's type. |
| `requested` | `bool` | Whether the capability has been requested. |
| `requested_at` | `int` | Time at which the capability was requested. |
| `requirements` | `map[string]any` |  |
| `status` | `string` | The status of the capability. |

#### Example: Load

```go
capability, err := client.Capability(nil).Load(map[string]any{"id": "capability_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(capability) // the loaded record
```

#### Example: List

```go
capabilitys, err := client.Capability(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(capabilitys) // the array of records
```

#### Example: Create

```go
result, err := client.Capability(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "id": "example_id",
    "account": "example_account",
    "future_requirements": map[string]any{},
    "object": "example_object",
    "requested": true,
    "requirements": map[string]any{},
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Card

Create an instance: `card := client.Card(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `any` |  |
| `address_city` | `string` | City/District/Suburb/Town/Village. |
| `address_country` | `string` | Billing address country, if provided when creating card. |
| `address_line1` | `string` | Address line 1 (Street address/PO Box/Company name). |
| `address_line1_check` | `string` | If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `address_line2` | `string` | Address line 2 (Apartment/Suite/Unit/Building). |
| `address_state` | `string` | State/County/Province/Region. |
| `address_zip` | `string` | ZIP or postal code. |
| `address_zip_check` | `string` | If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `allow_redisplay` | `bool` | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `available_payout_methods` | `[]any` | A set of available payout methods for this card. |
| `brand` | `string` | Card brand. |
| `cancellation_reason` | `string` | The reason why the card was canceled. |
| `cardholder` | `map[string]any` | An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://docs.stripe.com/issuing) cards. |
| `country` | `string` | Two-letter ISO code representing the country of the card. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. |
| `customer` | `any` | The customer that this card belongs to. |
| `cvc` | `string` | The card's CVC. |
| `cvc_check` | `string` | If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `default_for_currency` | `bool` | Whether this card is the default external account for its currency. |
| `dynamic_last4` | `string` | (For tokenized numbers only.) The last four digits of the device account number. |
| `exp_month` | `int` | Two-digit number representing the card's expiration month. |
| `exp_year` | `int` | Four-digit number representing the card's expiration year. |
| `financial_account` | `string` | The financial account this card is attached to. |
| `fingerprint` | `string` | Uniquely identifies this particular card number. |
| `funding` | `string` | Card funding type. |
| `id` | `string` | Unique identifier for the object. |
| `last4` | `string` | The last four digits of the card. |
| `latest_fraud_warning` | `any` | Stripe’s assessment of whether this card’s details have been compromised. |
| `lifecycle_controls` | `any` | Rules that control the lifecycle of this card, such as automatic cancellation. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Cardholder name. |
| `networks` | `map[string]any` |  |
| `number` | `string` | The full unredacted card number. |
| `object` | `string` | String representing the object's type. |
| `personalization_design` | `any` | The personalization design object belonging to this card. |
| `regulated_status` | `string` | Status of a card based on the card issuer. |
| `replaced_by` | `any` | The latest card that replaces this card, if any. |
| `replacement_for` | `any` | The card this card replaces, if any. |
| `replacement_reason` | `string` | The reason why the previous card needed to be replaced. |
| `second_line` | `string` | Text separate from cardholder name, printed on the card. |
| `shipping` | `any` | Where and how the card will be shipped. |
| `spending_controls` | `map[string]any` |  |
| `status` | `string` | For external accounts that are cards, possible values are `new` and `errored`. |
| `tokenization_method` | `string` | If the card number is tokenized, this is the method that was used. |
| `type` | `string` | The type of the card. |
| `wallets` | `any` | Information relating to digital wallets (like Apple Pay and Google Pay). |

#### Example: Load

```go
card, err := client.Card(nil).Load(map[string]any{"id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(card) // the loaded record
```

#### Example: List

```go
cards, err := client.Card(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cards) // the array of records
```

#### Example: Create

```go
result, err := client.Card(nil).Create(map[string]any{
    "id": "example_id",
    "brand": "example_brand",
    "cardholder": map[string]any{},
    "created": 1,
    "exp_month": 1,
    "exp_year": 1,
    "funding": "example_funding",
    "last4": "example_last4",
    "livemode": true,
    "object": "example_object",
    "spending_controls": map[string]any{},
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Cardholder

Create an instance: `cardholder := client.Cardholder(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing` | `map[string]any` |  |
| `company` | `any` | Additional information about a `company` cardholder. |
| `created` | `int` | Time at which the object was created. |
| `email` | `string` | The cardholder's email address. |
| `id` | `string` | Unique identifier for the object. |
| `individual` | `any` | Additional information about an `individual` cardholder. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | The cardholder's name. |
| `object` | `string` | String representing the object's type. |
| `phone_number` | `string` | The cardholder's phone number. |
| `preferred_locales` | `[]any` | The cardholder’s preferred locales (languages), ordered by preference. |
| `requirements` | `map[string]any` |  |
| `spending_controls` | `any` | Rules that control spending across this cardholder's cards. |
| `status` | `string` | Specifies whether to permit authorizations on this cardholder's cards. |
| `type` | `string` | One of `individual` or `company`. |

#### Example: Load

```go
cardholder, err := client.Cardholder(nil).Load(map[string]any{"id": "cardholder_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cardholder) // the loaded record
```

#### Example: List

```go
cardholders, err := client.Cardholder(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cardholders) // the array of records
```

#### Example: Create

```go
result, err := client.Cardholder(nil).Create(map[string]any{
    "id": "example_id",
    "billing": map[string]any{},
    "created": 1,
    "livemode": true,
    "metadata": map[string]any{},
    "name": "example_name",
    "object": "example_object",
    "requirements": map[string]any{},
    "status": "example_status",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CashBalance

Create an instance: `cashBalance := client.CashBalance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available` | `map[string]any` | A hash of all cash balances available to this customer. |
| `customer` | `string` | The ID of the customer whose cash balance this object represents. |
| `customer_account` | `string` | The ID of an Account representing a customer whose cash balance this object represents. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `settings` | `map[string]any` |  |

#### Example: Load

```go
cashBalance, err := client.CashBalance(nil).Load(map[string]any{"customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cashBalance) // the loaded record
```

#### Example: Create

```go
result, err := client.CashBalance(nil).Create(map[string]any{
    "customer_id": "example_customer_id",
    "customer": "example_customer",
    "livemode": true,
    "object": "example_object",
    "settings": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CashBalanceTransaction

Create an instance: `cashBalanceTransaction := client.CashBalanceTransaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adjusted_for_overdraft` | `map[string]any` |  |
| `applied_to_payment` | `map[string]any` |  |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `string` | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `int` | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `net_amount` | `int` | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `string` | String representing the object's type. |
| `refunded_from_payment` | `map[string]any` |  |
| `transferred_to_balance` | `map[string]any` |  |
| `type` | `string` | The type of the cash balance transaction. |
| `unapplied_from_payment` | `map[string]any` |  |

#### Example: Load

```go
cashBalanceTransaction, err := client.CashBalanceTransaction(nil).Load(map[string]any{"id": "cash_balance_transaction_id", "customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cashBalanceTransaction) // the loaded record
```

#### Example: List

```go
cashBalanceTransactions, err := client.CashBalanceTransaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cashBalanceTransactions) // the array of records
```


### Charge

Create an instance: `charge := client.Charge(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Amount intended to be collected by this payment. |
| `amount_captured` | `int` | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_refunded` | `int` | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `application` | `any` | ID of the Connect application that created the charge. |
| `application_fee` | `any` | The application fee (if any) for the charge. |
| `application_fee_amount` | `int` | The amount of the application fee (if any) requested for the charge. |
| `balance_transaction` | `any` | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_details` | `map[string]any` |  |
| `calculated_statement_descriptor` | `string` | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `captured` | `bool` | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | ID of the customer this charge is for if one exists. |
| `description` | `string` | An arbitrary string attached to the object. |
| `disputed` | `bool` | Whether the charge has been disputed. |
| `failure_balance_transaction` | `any` | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | `string` | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | `string` | Message to user further explaining reason for charge failure if available. |
| `fraud_details` | `any` | Information on fraud assessments for the charge. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | `any` | Details about whether the payment was accepted, and why. |
| `paid` | `bool` | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `payment_intent` | `any` | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `string` | ID of the payment method used in this charge. |
| `payment_method_details` | `any` | Details about the payment method at the time of the transaction. |
| `presentment_details` | `map[string]any` |  |
| `radar_options` | `map[string]any` | Options to configure Radar. |
| `receipt_email` | `string` | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `string` | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `string` | This is the URL to view the receipt for this charge. |
| `refunded` | `bool` | Whether the charge has been fully refunded. |
| `refunds` | `map[string]any` | A list of refunds that have been applied to the charge. |
| `review` | `any` | ID of the review associated with this charge if one exists. |
| `shipping` | `any` | Shipping information for the charge. |
| `source_transfer` | `any` | The transfer ID which created this charge. |
| `statement_descriptor` | `string` | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | `string` | Provides information about a card charge. |
| `status` | `string` | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `transfer` | `any` | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `transfer_data` | `any` | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `transfer_group` | `string` | A string that identifies this transaction as part of a group. |

#### Example: Load

```go
charge, err := client.Charge(nil).Load(map[string]any{"id": "charge_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(charge) // the loaded record
```

#### Example: List

```go
charges, err := client.Charge(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(charges) // the array of records
```

#### Example: Create

```go
result, err := client.Charge(nil).Create(map[string]any{
    "id": "example_id",
    "amount": 1,
    "amount_captured": 1,
    "amount_refunded": 1,
    "billing_details": map[string]any{},
    "captured": true,
    "created": 1,
    "currency": "example_currency",
    "disputed": true,
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "paid": true,
    "presentment_details": map[string]any{},
    "refunded": true,
    "refunds": map[string]any{},
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Configuration

Create an instance: `configuration := client.Configuration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the configuration is active and can be used to create portal sessions. |
| `application` | `any` | ID of the Connect Application that created the configuration. |
| `bbpos_wisepad3` | `map[string]any` |  |
| `bbpos_wisepos_e` | `map[string]any` |  |
| `business_profile` | `map[string]any` |  |
| `cellular` | `map[string]any` |  |
| `created` | `int` | Time at which the object was created. |
| `default_return_url` | `string` | The default URL to redirect customers to when they click on the portal's link to return to your website. |
| `features` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the object. |
| `is_account_default` | `bool` | Whether this Configuration is the default for your account |
| `is_default` | `bool` | Whether the configuration is the default. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `login_page` | `map[string]any` |  |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | The name of the configuration. |
| `object` | `string` | String representing the object's type. |
| `offline` | `map[string]any` |  |
| `reboot_window` | `map[string]any` |  |
| `stripe_s700` | `map[string]any` |  |
| `stripe_s710` | `map[string]any` |  |
| `tipping` | `map[string]any` |  |
| `updated` | `int` | Time at which the object was last updated. |
| `verifone_m425` | `map[string]any` |  |
| `verifone_p400` | `map[string]any` |  |
| `verifone_p630` | `map[string]any` |  |
| `verifone_ux700` | `map[string]any` |  |
| `verifone_v660p` | `map[string]any` |  |
| `wifi` | `map[string]any` |  |

#### Example: Load

```go
configuration, err := client.Configuration(nil).Load(map[string]any{"id": "configuration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(configuration) // the loaded record
```

#### Example: List

```go
configurations, err := client.Configuration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(configurations) // the array of records
```

#### Example: Create

```go
result, err := client.Configuration(nil).Create(map[string]any{
    "id": "example_id",
    "active": true,
    "business_profile": map[string]any{},
    "cellular": map[string]any{},
    "created": 1,
    "features": map[string]any{},
    "is_default": true,
    "livemode": true,
    "login_page": map[string]any{},
    "object": "example_object",
    "reboot_window": map[string]any{},
    "updated": 1,
    "wifi": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ConfirmationToken

Create an instance: `confirmationToken := client.ConfirmationToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `expires_at` | `int` | Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `mandate_data` | `any` | Data used for generating a Mandate. |
| `metadata` | `map[string]any` | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `payment_intent` | `string` | ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `payment_method_options` | `any` | Payment-method-specific configuration for this ConfirmationToken. |
| `payment_method_preview` | `any` | Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken. |
| `return_url` | `string` | Return URL used to confirm the Intent. |
| `setup_future_usage` | `string` | Indicates that you intend to make future payments with this ConfirmationToken's payment method. |
| `setup_intent` | `string` | ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `shipping` | `any` | Shipping information collected on this ConfirmationToken. |
| `use_stripe_sdk` | `bool` | Indicates whether the Stripe SDK is used to handle confirmation flow. |

#### Example: Load

```go
confirmationToken, err := client.ConfirmationToken(nil).Load(map[string]any{"id": "confirmation_token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(confirmationToken) // the loaded record
```

#### Example: Create

```go
result, err := client.ConfirmationToken(nil).Create(map[string]any{
    "created": 1,
    "id": "example_id",
    "livemode": true,
    "object": "example_object",
    "use_stripe_sdk": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ConnectionToken

Create an instance: `connectionToken := client.ConnectionToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `location` | `string` | The id of the location that this connection token is scoped to. |
| `object` | `string` | String representing the object's type. |
| `secret` | `string` | Your application should pass this token to the Stripe Terminal SDK. |

#### Example: Create

```go
result, err := client.ConnectionToken(nil).Create(map[string]any{
    "object": "example_object",
    "secret": "example_secret",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CountrySpec

Create an instance: `countrySpec := client.CountrySpec(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_currency` | `string` | The default currency for this country. |
| `id` | `string` | Unique identifier for the object. |
| `object` | `string` | String representing the object's type. |
| `supported_bank_account_currencies` | `map[string]any` | Currencies that can be accepted in the specific country (for transfers). |
| `supported_payment_currencies` | `[]any` | Currencies that can be accepted in the specified country (for payments). |
| `supported_payment_methods` | `[]any` | Payment methods available in the specified country. |
| `supported_transfer_countries` | `[]any` | Countries that can accept transfers from the specified country. |
| `verification_fields` | `map[string]any` |  |

#### Example: Load

```go
countrySpec, err := client.CountrySpec(nil).Load(map[string]any{"id": "country_spec_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(countrySpec) // the loaded record
```

#### Example: List

```go
countrySpecs, err := client.CountrySpec(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(countrySpecs) // the array of records
```


### Coupon

Create an instance: `coupon := client.Coupon(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount_off` | `int` | Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer. |
| `applies_to` | `map[string]any` |  |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off. |
| `currency_options` | `map[string]any` | Coupons defined in each available currency option. |
| `duration` | `string` | One of `forever`, `once`, or `repeating`. |
| `duration_in_months` | `int` | If `duration` is `repeating`, the number of months the coupon applies. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | `int` | Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Name of the coupon displayed to customers on for instance invoices or receipts. |
| `object` | `string` | String representing the object's type. |
| `percent_off` | `float64` | Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. |
| `redeem_by` | `int` | Date after which the coupon can no longer be redeemed. |
| `times_redeemed` | `int` | Number of times this coupon has been applied to a customer. |
| `valid` | `bool` | Taking account of the above properties, whether this coupon can still be applied to a customer. |

#### Example: Load

```go
coupon, err := client.Coupon(nil).Load(map[string]any{"id": "coupon_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(coupon) // the loaded record
```

#### Example: List

```go
coupons, err := client.Coupon(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(coupons) // the array of records
```

#### Example: Create

```go
result, err := client.Coupon(nil).Create(map[string]any{
    "id": "example_id",
    "applies_to": map[string]any{},
    "created": 1,
    "duration": "example_duration",
    "livemode": true,
    "object": "example_object",
    "times_redeemed": 1,
    "valid": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CreditBalanceSummary

Create an instance: `creditBalanceSummary := client.CreditBalanceSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_balance` | `map[string]any` |  |
| `ledger_balance` | `map[string]any` |  |

#### Example: List

```go
creditBalanceSummarys, err := client.CreditBalanceSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(creditBalanceSummarys) // the array of records
```


### CreditBalanceTransaction

Create an instance: `creditBalanceTransaction := client.CreditBalanceTransaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `credit` | `any` | Credit details for this credit balance transaction. |
| `credit_grant` | `any` | The credit grant associated with this credit balance transaction. |
| `debit` | `any` | Debit details for this credit balance transaction. |
| `effective_at` | `int` | The effective time of this credit balance transaction. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `test_clock` | `any` | ID of the test clock this credit balance transaction belongs to. |
| `type` | `string` | The type of credit balance transaction (credit or debit). |

#### Example: Load

```go
creditBalanceTransaction, err := client.CreditBalanceTransaction(nil).Load(map[string]any{"id": "credit_balance_transaction_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(creditBalanceTransaction) // the loaded record
```

#### Example: List

```go
creditBalanceTransactions, err := client.CreditBalanceTransaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(creditBalanceTransactions) // the array of records
```


### CreditGrant

Create an instance: `creditGrant := client.CreditGrant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `map[string]any` |  |
| `applicability_config` | `map[string]any` |  |
| `category` | `string` | The category of this credit grant. |
| `created` | `int` | Time at which the object was created. |
| `customer` | `any` | ID of the customer receiving the billing credits. |
| `customer_account` | `string` | ID of the account representing the customer receiving the billing credits |
| `effective_at` | `int` | The time when the billing credits become effective-when they're eligible for use. |
| `expires_at` | `int` | The time when the billing credits expire. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | A descriptive name shown in dashboard. |
| `object` | `string` | String representing the object's type. |
| `priority` | `int` | The priority for applying this credit grant. |
| `test_clock` | `any` | ID of the test clock this credit grant belongs to. |
| `updated` | `int` | Time at which the object was last updated. |
| `voided_at` | `int` | The time when this credit grant was voided. |

#### Example: Load

```go
creditGrant, err := client.CreditGrant(nil).Load(map[string]any{"id": "credit_grant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(creditGrant) // the loaded record
```

#### Example: List

```go
creditGrants, err := client.CreditGrant(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(creditGrants) // the array of records
```

#### Example: Create

```go
result, err := client.CreditGrant(nil).Create(map[string]any{
    "id": "example_id",
    "amount": map[string]any{},
    "applicability_config": map[string]any{},
    "category": "example_category",
    "created": 1,
    "customer": "example_customer",
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "updated": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CreditNote

Create an instance: `creditNote := client.CreditNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax. |
| `amount_shipping` | `int` | This is the sum of all the shipping amounts. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | ID of the customer. |
| `customer_account` | `string` | ID of the account representing the customer. |
| `customer_balance_transaction` | `any` | Customer balance transaction related to this credit note. |
| `discount_amount` | `int` | The integer amount in cents (or local equivalent) representing the total amount of discount that was credited. |
| `discount_amounts` | `[]any` | The aggregate amounts calculated per discount for all line items. |
| `effective_at` | `int` | The date when this credit note is in effect. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `any` | ID of the invoice. |
| `lines` | `map[string]any` | Line items that make up the credit note |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `memo` | `string` | Customer-facing text that appears on the credit note PDF. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `string` | A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice. |
| `object` | `string` | String representing the object's type. |
| `out_of_band_amount` | `int` | Amount that was credited outside of Stripe. |
| `pdf` | `string` | The link to download the PDF of the credit note. |
| `post_payment_amount` | `int` | The amount of the credit note that was refunded to the customer, credited to the customer's balance, credited outside of Stripe, or any combination thereof. |
| `pre_payment_amount` | `int` | The amount of the credit note by which the invoice's `amount_remaining` and `amount_due` were reduced. |
| `pretax_credit_amounts` | `[]any` | The pretax credit amounts (ex: discount, credit grants, etc) for all line items. |
| `reason` | `string` | Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory` |
| `refunds` | `[]any` | Refunds related to this credit note. |
| `shipping_cost` | `any` | The details of the cost of shipping, including the ShippingRate applied to the invoice. |
| `status` | `string` | Status of this credit note, one of `issued` or `void`. |
| `subtotal` | `int` | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts. |
| `subtotal_excluding_tax` | `int` | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts. |
| `total` | `int` | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount. |
| `total_excluding_tax` | `int` | The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts. |
| `total_taxes` | `[]any` | The aggregate tax information for all line items. |
| `type` | `string` | Type of this credit note, one of `pre_payment` or `post_payment`. |
| `voided_at` | `int` | The time that the credit note was voided. |

#### Example: Load

```go
creditNote, err := client.CreditNote(nil).Load(map[string]any{"id": "credit_note_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(creditNote) // the loaded record
```

#### Example: List

```go
creditNotes, err := client.CreditNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(creditNotes) // the array of records
```

#### Example: Create

```go
result, err := client.CreditNote(nil).Create(map[string]any{
    "id": "example_id",
    "amount": 1,
    "amount_shipping": 1,
    "created": 1,
    "currency": "example_currency",
    "customer": "example_customer",
    "discount_amount": 1,
    "discount_amounts": []any{},
    "invoice": "example_invoice",
    "lines": map[string]any{},
    "livemode": true,
    "number": "example_number",
    "object": "example_object",
    "pdf": "example_pdf",
    "post_payment_amount": 1,
    "pre_payment_amount": 1,
    "pretax_credit_amounts": []any{},
    "refunds": []any{},
    "status": "example_status",
    "subtotal": 1,
    "total": 1,
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CreditNoteLine

Create an instance: `creditNoteLine := client.CreditNoteLine(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts. |
| `description` | `string` | Description of the item being credited. |
| `discount_amount` | `int` | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `[]any` | The amount of discount calculated per discount for this line item |
| `id` | `string` | Unique identifier for the object. |
| `invoice_line_item` | `string` | ID of the invoice line item being credited |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `pretax_credit_amounts` | `[]any` | The pretax credit amounts (ex: discount, credit grants, etc) for this line item. |
| `quantity` | `int` | The number of units of product being credited. |
| `tax_rates` | `[]any` | The tax rates which apply to the line item. |
| `taxes` | `[]any` | The tax information of the line item. |
| `type` | `string` | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | `int` | The cost of each unit of product being credited. |
| `unit_amount_decimal` | `string` | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

#### Example: List

```go
creditNoteLines, err := client.CreditNoteLine(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(creditNoteLines) // the array of records
```


### CreditReversal

Create an instance: `creditReversal := client.CreditReversal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Amount (in cents) transferred. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `financial_account` | `string` | The FinancialAccount to reverse funds from. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `string` | The rails used to reverse the funds. |
| `object` | `string` | String representing the object's type. |
| `received_credit` | `string` | The ReceivedCredit being reversed. |
| `status` | `string` | Status of the CreditReversal |
| `status_transitions` | `map[string]any` |  |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```go
creditReversal, err := client.CreditReversal(nil).Load(map[string]any{"id": "credit_reversal_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(creditReversal) // the loaded record
```

#### Example: List

```go
creditReversals, err := client.CreditReversal(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(creditReversals) // the array of records
```

#### Example: Create

```go
result, err := client.CreditReversal(nil).Create(map[string]any{
    "amount": 1,
    "created": 1,
    "currency": "example_currency",
    "financial_account": "example_financial_account",
    "id": "example_id",
    "livemode": true,
    "metadata": map[string]any{},
    "network": "example_network",
    "object": "example_object",
    "received_credit": "example_received_credit",
    "status": "example_status",
    "status_transitions": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Customer

Create an instance: `customer := client.Customer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `any` | The customer's billing address. |
| `balance` | `int` | The current balance, if any, that's stored on the customer in their default currency. |
| `business_name` | `string` | The customer's business name. |
| `cash_balance` | `any` | The current funds being held by Stripe on behalf of the customer. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes. |
| `customer_account` | `string` | The ID of an Account representing a customer. |
| `default_source` | `any` | ID of the default payment source for the customer. |
| `delinquent` | `bool` | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discount` | `any` | Describes the current discount active on the customer, if there is one. |
| `email` | `string` | The customer's email address. |
| `id` | `string` | Unique identifier for the object. |
| `individual_name` | `string` | The customer's individual name. |
| `invoice_credit_balance` | `map[string]any` | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_prefix` | `string` | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `map[string]any` |  |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | The customer's full name or business name. |
| `next_invoice_sequence` | `int` | The suffix of the customer's next invoice number (for example, 0001). |
| `object` | `string` | String representing the object's type. |
| `phone` | `string` | The customer's phone number. |
| `preferred_locales` | `[]any` | The customer's preferred locales (languages), ordered by preference. |
| `shipping` | `any` | Mailing and shipping address for the customer. |
| `sources` | `map[string]any` | The customer's payment sources, if any. |
| `subscriptions` | `map[string]any` | The customer's current subscriptions, if any. |
| `tax` | `map[string]any` |  |
| `tax_exempt` | `string` | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `map[string]any` | The customer's tax IDs. |
| `test_clock` | `any` | ID of the test clock that this customer belongs to. |

#### Example: Load

```go
customer, err := client.Customer(nil).Load(map[string]any{"id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customer) // the loaded record
```

#### Example: List

```go
customers, err := client.Customer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customers) // the array of records
```

#### Example: Create

```go
result, err := client.Customer(nil).Create(map[string]any{
    "id": "example_id",
    "created": 1,
    "livemode": true,
    "object": "example_object",
    "sources": map[string]any{},
    "subscriptions": map[string]any{},
    "tax": map[string]any{},
    "tax_ids": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CustomerBalanceTransaction

Create an instance: `customerBalanceTransaction := client.CustomerBalanceTransaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | The amount of the transaction. |
| `checkout_session` | `any` | The ID of the checkout session (if any) that created the transaction. |
| `created` | `int` | Time at which the object was created. |
| `credit_note` | `any` | The ID of the credit note (if any) related to the transaction. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | The ID of the customer the transaction belongs to. |
| `customer_account` | `string` | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | `string` | An arbitrary string attached to the object. |
| `ending_balance` | `int` | The customer's `balance` after the transaction was applied. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `any` | The ID of the invoice (if any) related to the transaction. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `type` | `string` | Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or… |

#### Example: Load

```go
customerBalanceTransaction, err := client.CustomerBalanceTransaction(nil).Load(map[string]any{"id": "customer_balance_transaction_id", "customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customerBalanceTransaction) // the loaded record
```

#### Example: Create

```go
result, err := client.CustomerBalanceTransaction(nil).Create(map[string]any{
    "id": "example_id",
    "amount": 1,
    "created": 1,
    "currency": "example_currency",
    "customer": "example_customer",
    "ending_balance": 1,
    "livemode": true,
    "object": "example_object",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CustomerSession

Create an instance: `customerSession := client.CustomerSession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_secret` | `string` | The client secret of this Customer Session. |
| `components` | `map[string]any` | Configuration for the components supported by this Customer Session. |
| `created` | `int` | Time at which the object was created. |
| `customer` | `any` | The Customer the Customer Session was created for. |
| `customer_account` | `string` | The Account that the Customer Session was created for. |
| `expires_at` | `int` | The timestamp at which this Customer Session will expire. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |

#### Example: Create

```go
result, err := client.CustomerSession(nil).Create(map[string]any{
    "client_secret": "example_client_secret",
    "components": map[string]any{},
    "created": 1,
    "customer": "example_customer",
    "expires_at": 1,
    "livemode": true,
    "object": "example_object",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DebitReversal

Create an instance: `debitReversal := client.DebitReversal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Amount (in cents) transferred. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `financial_account` | `string` | The FinancialAccount to reverse funds from. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `linked_flows` | `any` | Other flows linked to a DebitReversal. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `string` | The rails used to reverse the funds. |
| `object` | `string` | String representing the object's type. |
| `received_debit` | `string` | The ReceivedDebit being reversed. |
| `status` | `string` | Status of the DebitReversal |
| `status_transitions` | `map[string]any` |  |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```go
debitReversal, err := client.DebitReversal(nil).Load(map[string]any{"id": "debit_reversal_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(debitReversal) // the loaded record
```

#### Example: List

```go
debitReversals, err := client.DebitReversal(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(debitReversals) // the array of records
```

#### Example: Create

```go
result, err := client.DebitReversal(nil).Create(map[string]any{
    "amount": 1,
    "created": 1,
    "currency": "example_currency",
    "id": "example_id",
    "livemode": true,
    "metadata": map[string]any{},
    "network": "example_network",
    "object": "example_object",
    "received_debit": "example_received_debit",
    "status": "example_status",
    "status_transitions": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DeletedAccount

Create an instance: `deletedAccount := client.DeletedAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedApplePayDomain

Create an instance: `deletedApplePayDomain := client.DeletedApplePayDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedCoupon

Create an instance: `deletedCoupon := client.DeletedCoupon(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedExternalAccount

Create an instance: `deletedExternalAccount := client.DeletedExternalAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedInvoiceitem

Create an instance: `deletedInvoiceitem := client.DeletedInvoiceitem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedPerson

Create an instance: `deletedPerson := client.DeletedPerson(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedPlan

Create an instance: `deletedPlan := client.DeletedPlan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedProductFeature

Create an instance: `deletedProductFeature := client.DeletedProductFeature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedSubscriptionItem

Create an instance: `deletedSubscriptionItem := client.DeletedSubscriptionItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedWebhookEndpoint

Create an instance: `deletedWebhookEndpoint := client.DeletedWebhookEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Discount

Create an instance: `discount := client.Discount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checkout_session` | `string` | The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. |
| `customer` | `any` | The ID of the customer associated with this discount. |
| `customer_account` | `string` | The ID of the account representing the customer associated with this discount. |
| `end` | `int` | If the coupon has a duration of `repeating`, the date that this discount will end. |
| `id` | `string` | The ID of the discount object. |
| `invoice` | `string` | The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice. |
| `invoice_item` | `string` | The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item. |
| `object` | `string` | String representing the object's type. |
| `promotion_code` | `any` | The promotion code applied to create this discount. |
| `source` | `map[string]any` |  |
| `start` | `int` | Date that the coupon was applied. |
| `subscription` | `string` | The subscription that this coupon is applied to, if it is applied to a particular subscription. |
| `subscription_item` | `string` | The subscription item that this coupon is applied to, if it is applied to a particular subscription item. |

#### Example: Load

```go
discount, err := client.Discount(nil).Load(map[string]any{"customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(discount) // the loaded record
```


### Dispute

Create an instance: `dispute := client.Dispute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Disputed amount. |
| `balance_transactions` | `[]any` | List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute. |
| `charge` | `any` | ID of the charge that's disputed. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `enhanced_eligibility_types` | `[]any` | List of eligibility types that are included in `enhanced_evidence`. |
| `evidence` | `map[string]any` |  |
| `evidence_details` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the object. |
| `is_charge_refundable` | `bool` | If true, it's still possible to refund the disputed payment. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `loss_reason` | `string` | The enum that describes the dispute loss outcome. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `payment_intent` | `any` | ID of the PaymentIntent that's disputed. |
| `payment_method_details` | `map[string]any` |  |
| `reason` | `string` | Reason given by cardholder for dispute. |
| `status` | `string` | The current status of a dispute. |
| `transaction` | `any` | The transaction being disputed. |
| `treasury` | `any` | [Treasury](https://docs.stripe.com/api/treasury) details related to this dispute if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts) |

#### Example: Load

```go
dispute, err := client.Dispute(nil).Load(map[string]any{"id": "dispute_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dispute) // the loaded record
```

#### Example: List

```go
disputes, err := client.Dispute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(disputes) // the array of records
```

#### Example: Create

```go
result, err := client.Dispute(nil).Create(map[string]any{
    "id": "example_id",
    "amount": 1,
    "balance_transactions": []any{},
    "charge": "example_charge",
    "created": 1,
    "currency": "example_currency",
    "enhanced_eligibility_types": []any{},
    "evidence": map[string]any{},
    "evidence_details": map[string]any{},
    "is_charge_refundable": true,
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "payment_method_details": map[string]any{},
    "reason": "example_reason",
    "status": "example_status",
    "transaction": "example_transaction",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Domain

Create an instance: `domain := client.Domain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `domain_name` | `string` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |

#### Example: List

```go
domains, err := client.Domain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(domains) // the array of records
```


### EarlyFraudWarning

Create an instance: `earlyFraudWarning := client.EarlyFraudWarning(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionable` | `bool` | An EFW is actionable if it has not received a dispute and has not been fully refunded. |
| `charge` | `any` | ID of the charge this early fraud warning is for, optionally expanded. |
| `created` | `int` | Time at which the object was created. |
| `fraud_type` | `string` | The type of fraud labelled by the issuer. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `payment_intent` | `any` | ID of the Payment Intent this early fraud warning is for, optionally expanded. |

#### Example: Load

```go
earlyFraudWarning, err := client.EarlyFraudWarning(nil).Load(map[string]any{"id": "early_fraud_warning_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(earlyFraudWarning) // the loaded record
```

#### Example: List

```go
earlyFraudWarnings, err := client.EarlyFraudWarning(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(earlyFraudWarnings) // the array of records
```


### EphemeralKey

Create an instance: `ephemeralKey := client.EphemeralKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `expires` | `int` | Time at which the key will expire. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `secret` | `string` | The key's secret. |

#### Example: Create

```go
result, err := client.EphemeralKey(nil).Create(map[string]any{
    "created": 1,
    "expires": 1,
    "id": "example_id",
    "livemode": true,
    "object": "example_object",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Event

Create an instance: `event := client.Event(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | The connected account that originates the event. |
| `api_version` | `string` | The Stripe API version used to render `data` when the event was created. |
| `context` | `string` | Authentication context needed to fetch the event or related object. |
| `created` | `int` | Time at which the object was created. |
| `data` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `pending_webhooks` | `int` | Number of webhooks that haven't been successfully delivered (for example, to return a 20x response) to the URLs you specify. |
| `request` | `any` | Information on the API request that triggers the event. |
| `type` | `string` | Description of the event (for example, `invoice.created` or `charge.refunded`). |

#### Example: Load

```go
event, err := client.Event(nil).Load(map[string]any{"id": "event_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(event) // the loaded record
```

#### Example: List

```go
events, err := client.Event(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(events) // the array of records
```


### ExchangeRate

Create an instance: `exchangeRate := client.ExchangeRate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the object. |
| `object` | `string` | String representing the object's type. |
| `rates` | `map[string]any` | Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency. |

#### Example: Load

```go
exchangeRate, err := client.ExchangeRate(nil).Load(map[string]any{"id": "exchange_rate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(exchangeRate) // the loaded record
```

#### Example: List

```go
exchangeRates, err := client.ExchangeRate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(exchangeRates) // the array of records
```


### ExternalAccount

Create an instance: `externalAccount := client.ExternalAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` | The list contains all external accounts that have been attached to the Stripe account. |
| `has_more` | `bool` | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` |  |
| `object` | `string` | String representing the object's type. |
| `url` | `string` | The URL where this list can be accessed. |

#### Example: Load

```go
externalAccount, err := client.ExternalAccount(nil).Load(map[string]any{"id": "external_account_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(externalAccount) // the loaded record
```

#### Example: List

```go
externalAccounts, err := client.ExternalAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(externalAccounts) // the array of records
```

#### Example: Create

```go
result, err := client.ExternalAccount(nil).Create(map[string]any{
    "id": "example_id",
    "data": []any{},
    "has_more": true,
    "object": "example_object",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Feature

Create an instance: `feature := client.Feature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `entitlement_feature` | `map[string]any` | A feature represents a monetizable ability or functionality in your system. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | A unique key you provide as your own system identifier. |
| `metadata` | `map[string]any` | Set of key-value pairs that you can attach to an object. |
| `name` | `string` | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `string` | String representing the object's type. |

#### Example: Load

```go
feature, err := client.Feature(nil).Load(map[string]any{"id": "feature_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(feature) // the loaded record
```

#### Example: List

```go
features, err := client.Feature(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(features) // the array of records
```

#### Example: Create

```go
result, err := client.Feature(nil).Create(map[string]any{
    "id": "example_id",
    "active": true,
    "entitlement_feature": map[string]any{},
    "livemode": true,
    "lookup_key": "example_lookup_key",
    "metadata": map[string]any{},
    "name": "example_name",
    "object": "example_object",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### FeedbackOption

Create an instance: `feedbackOption := client.FeedbackOption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deactivated_at` | `int` | The time the feedback option was deactivated, if any. |
| `description` | `string` | An arbitrary string attached to the object. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | The feedback option's status. |
| `status_transitions` | `map[string]any` |  |

#### Example: Load

```go
feedbackOption, err := client.FeedbackOption(nil).Load(map[string]any{"id": "feedback_option_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(feedbackOption) // the loaded record
```

#### Example: List

```go
feedbackOptions, err := client.FeedbackOption(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(feedbackOptions) // the array of records
```

#### Example: Create

```go
result, err := client.FeedbackOption(nil).Create(map[string]any{
    "id": "example_id",
    "description": "example_description",
    "livemode": true,
    "object": "example_object",
    "status": "example_status",
    "status_transitions": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### File

Create an instance: `file := client.File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `data` | `[]any` | Details about each object. |
| `expires_at` | `int` | The file expires and isn't available at this time in epoch seconds. |
| `filename` | `string` | The suitable name for saving the file to a filesystem. |
| `has_more` | `bool` | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | Unique identifier for the object. |
| `links` | `map[string]any` | A list of [file links](https://docs.stripe.com/api#file_links) that point at this file. |
| `object` | `string` | String representing the object's type. |
| `purpose` | `string` | The [purpose](https://docs.stripe.com/file-upload#uploading-a-file) of the uploaded file. |
| `size` | `int` | The size of the file object in bytes. |
| `title` | `string` | A suitable title for the document. |
| `type` | `string` | The returned file type (for example, `csv`, `pdf`, `jpg`, or `png`). |
| `url` | `string` | The URL where this list can be accessed. |

#### Example: Load

```go
file, err := client.File(nil).Load(map[string]any{"id": "file_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(file) // the loaded record
```

#### Example: List

```go
files, err := client.File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(files) // the array of records
```

#### Example: Create

```go
result, err := client.File(nil).Create(map[string]any{
    "created": 1,
    "data": []any{},
    "has_more": true,
    "id": "example_id",
    "links": map[string]any{},
    "object": "example_object",
    "purpose": "example_purpose",
    "size": 1,
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### FileLink

Create an instance: `fileLink := client.FileLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `expired` | `bool` | Returns if the link is already expired. |
| `expires_at` | `int` | Time that the link expires. |
| `file` | `any` | The file object this link points to. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `url` | `string` | The publicly accessible URL to download the file. |

#### Example: Load

```go
fileLink, err := client.FileLink(nil).Load(map[string]any{"id": "file_link_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(fileLink) // the loaded record
```

#### Example: List

```go
fileLinks, err := client.FileLink(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(fileLinks) // the array of records
```

#### Example: Create

```go
result, err := client.FileLink(nil).Create(map[string]any{
    "id": "example_id",
    "created": 1,
    "expired": true,
    "file": "example_file",
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### FinancialAccount

Create an instance: `financialAccount := client.FinancialAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_features` | `[]any` | The array of paths to active Features in the Features hash. |
| `balance` | `map[string]any` | Balance information for the FinancialAccount |
| `country` | `string` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | `int` | Time at which the object was created. |
| `features` | `map[string]any` | Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`. |
| `financial_addresses` | `[]any` | The set of credentials that resolve to a FinancialAccount. |
| `id` | `string` | Unique identifier for the object. |
| `is_default` | `bool` |  |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | The nickname for the FinancialAccount. |
| `object` | `string` | String representing the object's type. |
| `pending_features` | `[]any` | The array of paths to pending Features in the Features hash. |
| `platform_restrictions` | `any` | The set of functionalities that the platform can restrict on the FinancialAccount. |
| `restricted_features` | `[]any` | The array of paths to restricted Features in the Features hash. |
| `status` | `string` | Status of this FinancialAccount. |
| `status_details` | `map[string]any` |  |
| `supported_currencies` | `[]any` | The currencies the FinancialAccount can hold a balance in. |

#### Example: Load

```go
financialAccount, err := client.FinancialAccount(nil).Load(map[string]any{"id": "financial_account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(financialAccount) // the loaded record
```

#### Example: List

```go
financialAccounts, err := client.FinancialAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(financialAccounts) // the array of records
```

#### Example: Create

```go
result, err := client.FinancialAccount(nil).Create(map[string]any{
    "id": "example_id",
    "balance": map[string]any{},
    "country": "example_country",
    "created": 1,
    "features": map[string]any{},
    "financial_addresses": []any{},
    "livemode": true,
    "object": "example_object",
    "status": "example_status",
    "status_details": map[string]any{},
    "supported_currencies": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### FinancialAccountFeature

Create an instance: `financialAccountFeature := client.FinancialAccountFeature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `card_issuing` | `map[string]any` | Toggle settings for enabling/disabling a feature |
| `deposit_insurance` | `map[string]any` | Toggle settings for enabling/disabling a feature |
| `financial_addresses` | `map[string]any` | Settings related to Financial Addresses features on a Financial Account |
| `id` | `string` |  |
| `inbound_transfers` | `map[string]any` | InboundTransfers contains inbound transfers features for a FinancialAccount. |
| `intra_stripe_flows` | `map[string]any` | Toggle settings for enabling/disabling a feature |
| `object` | `string` | String representing the object's type. |
| `outbound_payments` | `map[string]any` | Settings related to Outbound Payments features on a Financial Account |
| `outbound_transfers` | `map[string]any` | OutboundTransfers contains outbound transfers features for a FinancialAccount. |

#### Example: Load

```go
financialAccountFeature, err := client.FinancialAccountFeature(nil).Load(map[string]any{"id": "financial_account_feature_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(financialAccountFeature) // the loaded record
```

#### Example: Create

```go
result, err := client.FinancialAccountFeature(nil).Create(map[string]any{
    "id": "example_id",
    "card_issuing": map[string]any{},
    "deposit_insurance": map[string]any{},
    "intra_stripe_flows": map[string]any{},
    "object": "example_object",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### FundCashBalance

Create an instance: `fundCashBalance := client.FundCashBalance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adjusted_for_overdraft` | `map[string]any` |  |
| `applied_to_payment` | `map[string]any` |  |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `string` | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `int` | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `net_amount` | `int` | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `string` | String representing the object's type. |
| `refunded_from_payment` | `map[string]any` |  |
| `transferred_to_balance` | `map[string]any` |  |
| `type` | `string` | The type of the cash balance transaction. |
| `unapplied_from_payment` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.FundCashBalance(nil).Create(map[string]any{
    "customer_id": "example_customer_id",
    "adjusted_for_overdraft": map[string]any{},
    "applied_to_payment": map[string]any{},
    "created": 1,
    "currency": "example_currency",
    "customer": "example_customer",
    "ending_balance": 1,
    "funded": map[string]any{},
    "id": "example_id",
    "livemode": true,
    "net_amount": 1,
    "object": "example_object",
    "refunded_from_payment": map[string]any{},
    "transferred_to_balance": map[string]any{},
    "type": "example_type",
    "unapplied_from_payment": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### FundingInstruction

Create an instance: `fundingInstruction := client.FundingInstruction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country` | `string` | The country of the bank account to fund |
| `financial_addresses` | `[]any` | A list of financial addresses that can be used to fund a particular balance |
| `type` | `string` | The bank_transfer type |

#### Example: Create

```go
result, err := client.FundingInstruction(nil).Create(map[string]any{
    "customer_id": "example_customer_id",
    "country": "example_country",
    "financial_addresses": []any{},
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### History

Create an instance: `history := client.History(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Gross amount of this transaction (in cents (or local equivalent)). |
| `available_on` | `int` | The date that the transaction's net funds become available in the Stripe balance. |
| `balance_type` | `string` | The balance that this transaction impacts. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `exchange_rate` | `float64` | If applicable, this transaction uses an exchange rate. |
| `fee` | `int` | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | `[]any` | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `string` | Unique identifier for the object. |
| `net` | `int` | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `string` | String representing the object's type. |
| `reporting_category` | `string` | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `any` | This transaction relates to the Stripe object. |
| `status` | `string` | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `string` | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

#### Example: List

```go
historys, err := client.History(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(historys) // the array of records
```


### InboundTransfer

Create an instance: `inboundTransfer := client.InboundTransfer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Amount (in cents) transferred. |
| `cancelable` | `bool` | Returns `true` if the InboundTransfer is able to be canceled. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `failure_details` | `any` | Details about this InboundTransfer's failure. |
| `financial_account` | `string` | The FinancialAccount that received the funds. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `linked_flows` | `map[string]any` |  |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `origin_payment_method` | `string` | The origin payment method to be debited for an InboundTransfer. |
| `origin_payment_method_details` | `any` | Details about the PaymentMethod for an InboundTransfer. |
| `returned` | `bool` | Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state. |
| `statement_descriptor` | `string` | Statement descriptor shown when funds are debited from the source. |
| `status` | `string` | Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. |
| `status_transitions` | `map[string]any` |  |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```go
inboundTransfer, err := client.InboundTransfer(nil).Load(map[string]any{"id": "inbound_transfer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(inboundTransfer) // the loaded record
```

#### Example: List

```go
inboundTransfers, err := client.InboundTransfer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(inboundTransfers) // the array of records
```

#### Example: Create

```go
result, err := client.InboundTransfer(nil).Create(map[string]any{
    "amount": 1,
    "cancelable": true,
    "created": 1,
    "currency": "example_currency",
    "financial_account": "example_financial_account",
    "id": "example_id",
    "linked_flows": map[string]any{},
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "statement_descriptor": "example_statement_descriptor",
    "status": "example_status",
    "status_transitions": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Install

Create an instance: `install := client.Install(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | The ID of the account that the app install belongs to. |
| `app` | `string` | The ID of the app installed. |
| `approval_required` | `bool` | Whether the installer must authorize pending permissions, content security policy entries, or endpoints. |
| `auth_code` | `string` | The authorization code for an oauth app install. |
| `channel` | `string` | The distribution channel associated with the app install. |
| `content_security_policy_granted` | `map[string]any` |  |
| `content_security_policy_pending` | `map[string]any` |  |
| `created` | `int` | Time at which the object was created. |
| `created_by` | `string` | The ID of the embedding platform that created the install, if applicable. |
| `endpoints_granted` | `[]any` | The endpoint URLs authorized by the installer. |
| `endpoints_pending` | `[]any` | The endpoint URLs requested by the latest app version that the installer has not authorized. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `permissions_granted` | `[]any` | The permissions authorized by the installer. |
| `permissions_pending` | `[]any` | The permissions requested by the latest app version that the installer has not authorized. |
| `status` | `string` | The status of the app install. |

#### Example: Load

```go
install, err := client.Install(nil).Load(map[string]any{"id": "install_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(install) // the loaded record
```

#### Example: List

```go
installs, err := client.Install(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(installs) // the array of records
```

#### Example: Create

```go
result, err := client.Install(nil).Create(map[string]any{
    "id": "example_id",
    "account": "example_account",
    "app": "example_app",
    "approval_required": true,
    "channel": "example_channel",
    "content_security_policy_granted": map[string]any{},
    "content_security_policy_pending": map[string]any{},
    "created": 1,
    "endpoints_granted": []any{},
    "endpoints_pending": []any{},
    "livemode": true,
    "object": "example_object",
    "permissions_granted": []any{},
    "permissions_pending": []any{},
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Invoice

Create an instance: `invoice := client.Invoice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_country` | `string` | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `string` | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `[]any` | The account tax IDs associated with the invoice. |
| `amount_due` | `int` | Final amount due at this time for this invoice. |
| `amount_overpaid` | `int` | Amount that was overpaid on the invoice. |
| `amount_paid` | `int` | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | `int` | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_remaining` | `int` | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | `int` | This is the sum of all the shipping amounts. |
| `application` | `any` | ID of the Connect Application that created the invoice. |
| `attempt_count` | `int` | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | `bool` | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | `bool` | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_tax` | `map[string]any` |  |
| `automatically_finalizes_at` | `int` | The time when this invoice is currently scheduled to be automatically finalized. |
| `billing_reason` | `string` | Indicates the reason why the invoice was created. |
| `collection_method` | `string` | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_secret` | `any` | The confirmation secret associated with this invoice. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `[]any` | Custom fields displayed on the invoice. |
| `customer` | `any` | The ID of the customer to bill. |
| `customer_account` | `string` | The ID of the account representing the customer to bill. |
| `customer_address` | `any` | The customer's address. |
| `customer_email` | `string` | The customer's email. |
| `customer_name` | `string` | The customer's name. |
| `customer_phone` | `string` | The customer's phone number. |
| `customer_shipping` | `any` | The customer's shipping information. |
| `customer_tax_exempt` | `string` | The customer's tax exempt status. |
| `customer_tax_ids` | `[]any` | The customer's tax IDs. |
| `default_payment_method` | `any` | ID of the default payment method for the invoice. |
| `default_source` | `any` | ID of the default payment source for the invoice. |
| `default_tax_rates` | `[]any` | The tax rates applied to this invoice, if any. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discounts` | `[]any` | The discounts applied to the invoice. |
| `due_date` | `int` | The date on which payment for this invoice is due. |
| `effective_at` | `int` | The date when this invoice is in effect. |
| `ending_balance` | `int` | Ending customer balance after the invoice is finalized. |
| `footer` | `string` | Footer displayed on the invoice. |
| `from_invoice` | `any` | Details of the invoice that was cloned. |
| `hosted_invoice_url` | `string` | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `string` | Unique identifier for the object. |
| `invoice_pdf` | `string` | The link to download the PDF for the invoice. |
| `issuer` | `map[string]any` |  |
| `last_finalization_error` | `any` | The error encountered during the previous attempt to finalize the invoice. |
| `latest_revision` | `any` | The ID of the most recent non-draft revision of this invoice |
| `lines` | `map[string]any` | The individual line items that make up the invoice. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_payment_attempt` | `int` | The time at which payment will next be attempted. |
| `number` | `string` | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account (if any) for which the funds of the invoice payment are intended. |
| `parent` | `any` | The parent that generated this invoice |
| `payment_settings` | `map[string]any` |  |
| `payments` | `map[string]any` | Payments for this invoice. |
| `period_end` | `int` | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | `int` | The earliest timestamp at which invoice items can be associated with this invoice. |
| `post_payment_credit_notes_amount` | `int` | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | `int` | Total amount of all pre-payment credit notes issued for this invoice. |
| `receipt_number` | `string` | This is the transaction number that appears on email receipts sent for this invoice. |
| `rendering` | `any` | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `shipping_cost` | `any` | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | `any` | Shipping details for the invoice. |
| `starting_balance` | `int` | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | `string` | Extra information about an invoice for the customer's credit card statement. |
| `status` | `string` | The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. |
| `status_details` | `map[string]any` |  |
| `status_transitions` | `map[string]any` |  |
| `subtotal` | `int` | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `int` | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `test_clock` | `any` | ID of the test clock this invoice belongs to. |
| `threshold_reason` | `map[string]any` |  |
| `total` | `int` | Total after discounts and taxes. |
| `total_discount_amounts` | `[]any` | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `int` | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `[]any` | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `[]any` | The aggregate tax information of all line items. |
| `webhooks_delivered_at` | `int` | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

#### Example: Load

```go
invoice, err := client.Invoice(nil).Load(map[string]any{"id": "invoice_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(invoice) // the loaded record
```

#### Example: List

```go
invoices, err := client.Invoice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(invoices) // the array of records
```

#### Example: Create

```go
result, err := client.Invoice(nil).Create(map[string]any{
    "id": "example_id",
    "amount_due": 1,
    "amount_overpaid": 1,
    "amount_paid": 1,
    "amount_paid_off_stripe": 1,
    "amount_remaining": 1,
    "amount_shipping": 1,
    "attempt_count": 1,
    "attempted": true,
    "auto_advance": true,
    "automatic_tax": map[string]any{},
    "collection_method": "example_collection_method",
    "created": 1,
    "currency": "example_currency",
    "customer": "example_customer",
    "default_tax_rates": []any{},
    "discounts": []any{},
    "issuer": map[string]any{},
    "lines": map[string]any{},
    "livemode": true,
    "object": "example_object",
    "payment_settings": map[string]any{},
    "payments": map[string]any{},
    "period_end": 1,
    "period_start": 1,
    "post_payment_credit_notes_amount": 1,
    "pre_payment_credit_notes_amount": 1,
    "starting_balance": 1,
    "status_transitions": map[string]any{},
    "subtotal": 1,
    "threshold_reason": map[string]any{},
    "total": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### InvoicePayment

Create an instance: `invoicePayment := client.InvoicePayment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount_paid` | `int` | Amount that was actually paid for this invoice, in cents (or local equivalent). |
| `amount_requested` | `int` | Amount intended to be paid toward this invoice, in cents (or local equivalent) |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `any` | The invoice that was paid. |
| `is_default` | `bool` | Stripe automatically creates a default InvoicePayment when the invoice is finalized, and keeps it synchronized with the invoice’s `amount_remaining`. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `payment` | `map[string]any` |  |
| `status` | `string` | The status of the payment, one of `open`, `paid`, or `canceled`. |
| `status_transitions` | `map[string]any` |  |

#### Example: Load

```go
invoicePayment, err := client.InvoicePayment(nil).Load(map[string]any{"id": "invoice_payment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(invoicePayment) // the loaded record
```

#### Example: List

```go
invoicePayments, err := client.InvoicePayment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(invoicePayments) // the array of records
```


### InvoiceRenderingTemplate

Create an instance: `invoiceRenderingTemplate := client.InvoiceRenderingTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | A brief description of the template, hidden from customers |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | The status of the template, one of `active` or `archived`. |
| `version` | `int` | Version of this template; version increases by one when an update on the template changes any field that controls invoice rendering |

#### Example: Load

```go
invoiceRenderingTemplate, err := client.InvoiceRenderingTemplate(nil).Load(map[string]any{"id": "invoice_rendering_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(invoiceRenderingTemplate) // the loaded record
```

#### Example: List

```go
invoiceRenderingTemplates, err := client.InvoiceRenderingTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(invoiceRenderingTemplates) // the array of records
```

#### Example: Create

```go
result, err := client.InvoiceRenderingTemplate(nil).Create(map[string]any{
    "template": "example_template",
    "created": 1,
    "id": "example_id",
    "livemode": true,
    "object": "example_object",
    "status": "example_status",
    "version": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Invoiceitem

Create an instance: `invoiceitem := client.Invoiceitem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Amount (in the `currency` specified) of the invoice item. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | The ID of the customer to bill for this invoice item. |
| `customer_account` | `string` | The ID of the account to bill for this invoice item. |
| `date` | `int` | Time at which the object was created. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discountable` | `bool` | If true, discounts will apply to this invoice item. |
| `discounts` | `[]any` | The discounts which apply to the invoice item. |
| `frozen_fields` | `[]any` | Array of field names that can't be modified. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `any` | The ID of the invoice this invoice item belongs to. |
| `invoicing_rules` | `[]any` | The rules that control when this invoice item is eligible for invoicing. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net_amount` | `int` | The amount after discounts, but before credits and taxes. |
| `object` | `string` | String representing the object's type. |
| `parent` | `any` | The parent that generated this invoice item. |
| `period` | `map[string]any` |  |
| `pricing` | `any` | The pricing information of the invoice item. |
| `proration` | `bool` | Whether the invoice item was created automatically as a proration adjustment when the customer switched plans. |
| `proration_details` | `map[string]any` |  |
| `quantity` | `int` | Quantity of units for the invoice item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `string` | Non-negative decimal with at most 12 decimal places. |
| `tax_rates` | `[]any` | The tax rates which apply to the invoice item. |
| `test_clock` | `any` | ID of the test clock this invoice item belongs to. |

#### Example: Load

```go
invoiceitem, err := client.Invoiceitem(nil).Load(map[string]any{"id": "invoiceitem_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(invoiceitem) // the loaded record
```

#### Example: List

```go
invoiceitems, err := client.Invoiceitem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(invoiceitems) // the array of records
```

#### Example: Create

```go
result, err := client.Invoiceitem(nil).Create(map[string]any{
    "id": "example_id",
    "amount": 1,
    "currency": "example_currency",
    "customer": "example_customer",
    "date": 1,
    "discountable": true,
    "livemode": true,
    "object": "example_object",
    "period": map[string]any{},
    "proration": true,
    "proration_details": map[string]any{},
    "quantity": 1,
    "quantity_decimal": "example_quantity_decimal",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Line

Create an instance: `line := client.Line(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | The amount, in cents (or local equivalent). |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discount_amount` | `int` | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `[]any` | The amount of discount calculated per discount for this line item. |
| `discountable` | `bool` | If true, discounts will apply to this line item. |
| `discounts` | `[]any` | The discounts applied to the invoice line item. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `string` | The ID of the invoice that contains this line item. |
| `invoice_line_item` | `string` | ID of the invoice line item being credited |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `parent` | `any` | The parent that generated this line item. |
| `period` | `map[string]any` |  |
| `pretax_credit_amounts` | `[]any` | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item. |
| `pricing` | `any` | The pricing information of the line item. |
| `quantity` | `int` | Quantity of units for the invoice line item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `string` | Non-negative decimal with at most 12 decimal places. |
| `subscription` | `any` |  |
| `subtotal` | `int` | The subtotal of the line item, in cents (or local equivalent), before any discounts or taxes. |
| `tax_rates` | `[]any` | The tax rates which apply to the line item. |
| `taxes` | `[]any` | The tax information of the line item. |
| `type` | `string` | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | `int` | The cost of each unit of product being credited. |
| `unit_amount_decimal` | `string` | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

#### Example: List

```go
lines, err := client.Line(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(lines) // the array of records
```

#### Example: Create

```go
result, err := client.Line(nil).Create(map[string]any{
    "id": "example_id",
    "invoice_id": "example_invoice_id",
    "amount": 1,
    "currency": "example_currency",
    "discount_amount": 1,
    "discountable": true,
    "discounts": []any{},
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "period": map[string]any{},
    "subtotal": 1,
    "tax_rates": []any{},
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### LineItem

Create an instance: `lineItem := client.LineItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adjustable_quantity` | `any` |  |
| `amount` | `int` | The line item amount in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_discount` | `int` | Total discount amount applied. |
| `amount_subtotal` | `int` | Total before any discounts or taxes are applied. |
| `amount_tax` | `int` | The amount of tax calculated for this line item, in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_total` | `int` | Total after discounts and taxes. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discounts` | `[]any` | The discounts applied to the line item. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `performance_location` | `string` | Indicates the line item represents a performance where the venue location might determine the tax, not the customer address. |
| `price` | `float64` | The price used to generate the line item. |
| `product` | `string` | The ID of an existing [Product](https://docs.stripe.com/api/products/object). |
| `quantity` | `int` | The number of units of the item being purchased. |
| `reference` | `string` | A custom identifier for this line item. |
| `reversal` | `any` | If `type=reversal`, contains information about what was reversed. |
| `tax_behavior` | `string` | Specifies whether the `amount` includes taxes. |
| `tax_breakdown` | `[]any` | Detailed account of taxes relevant to this line item. |
| `tax_code` | `string` | The [tax code](https://docs.stripe.com/tax/tax-categories) ID used for this resource. |
| `taxes` | `[]any` | The taxes applied to the line item. |
| `type` | `string` | If `reversal`, this line item reverses an earlier transaction. |

#### Example: List

```go
lineItems, err := client.LineItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(lineItems) // the array of records
```


### LinkedAccount

Create an instance: `linkedAccount := client.LinkedAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_holder` | `any` | The account holder that this account belongs to. |
| `account_numbers` | `[]any` | Details about the account numbers. |
| `balance` | `any` | The most recent information about the account's balance. |
| `balance_refresh` | `any` | The state of the most recent attempt to refresh the account balance. |
| `category` | `string` | The type of the account. |
| `created` | `int` | Time at which the object was created. |
| `display_name` | `string` | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `id` | `string` | Unique identifier for the object. |
| `institution_name` | `string` | The name of the institution that holds this account. |
| `last4` | `string` | The last 4 digits of the account number. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `ownership` | `any` | The most recent information about the account's owners. |
| `ownership_refresh` | `any` | The state of the most recent attempt to refresh the account owners. |
| `permissions` | `[]any` | The list of permissions granted by this account. |
| `status` | `string` | The status of the link to the account. |
| `status_details` | `map[string]any` |  |
| `subcategory` | `string` | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `[]any` | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `[]any` | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `transaction_refresh` | `any` | The state of the most recent attempt to refresh the account transactions. |

#### Example: List

```go
linkedAccounts, err := client.LinkedAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(linkedAccounts) // the array of records
```


### LinkedAccountOwner

Create an instance: `linkedAccountOwner := client.LinkedAccountOwner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | The email address of the owner. |
| `id` | `string` | Unique identifier for the object. |
| `name` | `string` | The full name of the owner. |
| `object` | `string` | String representing the object's type. |
| `ownership` | `string` | The ownership object that this owner belongs to. |
| `phone` | `string` | The raw phone number of the owner. |
| `raw_address` | `string` | The raw physical address of the owner. |
| `refreshed_at` | `int` | The timestamp of the refresh that updated this owner. |

#### Example: List

```go
linkedAccountOwners, err := client.LinkedAccountOwner(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(linkedAccountOwners) // the array of records
```


### Location

Create an instance: `location := client.Location(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `map[string]any` |  |
| `address_kana` | `map[string]any` |  |
| `address_kanji` | `map[string]any` |  |
| `city` | `string` | City, district, suburb, town, or village. |
| `configuration_overrides` | `string` | The ID of a configuration that will be used to customize all readers in this location. |
| `country` | `string` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `description` | `string` | A descriptive text providing additional context about the tax location. |
| `display_name` | `string` | The display name of the location. |
| `display_name_kana` | `string` | The Kana variation of the display name of the location. |
| `display_name_kanji` | `string` | The Kanji variation of the display name of the location. |
| `id` | `string` | Unique identifier for the object. |
| `line1` | `string` | Address line 1, such as the street, PO Box, or company name. |
| `line2` | `string` | Address line 2, such as the apartment, suite, unit, or building. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `phone` | `string` | The phone number of the location. |
| `postal_code` | `string` | ZIP or postal code. |
| `state` | `string` | State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)). |
| `type` | `string` | The type of tax location to be defined. |

#### Example: Load

```go
location, err := client.Location(nil).Load(map[string]any{"id": "location_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(location) // the loaded record
```

#### Example: List

```go
locations, err := client.Location(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(locations) // the array of records
```

#### Example: Create

```go
result, err := client.Location(nil).Create(map[string]any{
    "id": "example_id",
    "address": map[string]any{},
    "display_name": "example_display_name",
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### LoginLink

Create an instance: `loginLink := client.LoginLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `object` | `string` | String representing the object's type. |
| `url` | `string` | The URL for the login link. |

#### Example: Create

```go
result, err := client.LoginLink(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "created": 1,
    "object": "example_object",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Mandate

Create an instance: `mandate := client.Mandate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_acceptance` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `multi_use` | `map[string]any` |  |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `string` | The account (if any) that the mandate is intended for. |
| `payment_method` | `any` | ID of the payment method associated with this mandate. |
| `payment_method_details` | `map[string]any` |  |
| `single_use` | `map[string]any` |  |
| `status` | `string` | The mandate status indicates whether or not you can use it to initiate a payment. |
| `type` | `string` | The type of the mandate. |

#### Example: Load

```go
mandate, err := client.Mandate(nil).Load(map[string]any{"id": "mandate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(mandate) // the loaded record
```


### Meter

Create an instance: `meter := client.Meter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `customer_mapping` | `map[string]any` |  |
| `default_aggregation` | `map[string]any` |  |
| `display_name` | `string` | The meter's name. |
| `event_name` | `string` | The name of the meter event to record usage for. |
| `event_time_window` | `string` | The time window which meter events have been pre-aggregated for, if any. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | The meter's status. |
| `status_transitions` | `map[string]any` |  |
| `updated` | `int` | Time at which the object was last updated. |
| `value_settings` | `map[string]any` |  |

#### Example: Load

```go
meter, err := client.Meter(nil).Load(map[string]any{"id": "meter_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(meter) // the loaded record
```

#### Example: List

```go
meters, err := client.Meter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(meters) // the array of records
```

#### Example: Create

```go
result, err := client.Meter(nil).Create(map[string]any{
    "id": "example_id",
    "created": 1,
    "customer_mapping": map[string]any{},
    "default_aggregation": map[string]any{},
    "display_name": "example_display_name",
    "event_name": "example_event_name",
    "livemode": true,
    "object": "example_object",
    "status": "example_status",
    "status_transitions": map[string]any{},
    "updated": 1,
    "value_settings": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### MeterEvent

Create an instance: `meterEvent := client.MeterEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.MeterEvent(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### MeterEventAdjustment

Create an instance: `meterEventAdjustment := client.MeterEventAdjustment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.MeterEventAdjustment(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### MeterEventSummary

Create an instance: `meterEventSummary := client.MeterEventSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aggregated_value` | `float64` | Aggregated value of all the events within `start_time` (inclusive) and `end_time` (inclusive). |
| `end_time` | `int` | End timestamp for this event summary (exclusive). |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `meter` | `string` | The meter associated with this event summary. |
| `object` | `string` | String representing the object's type. |
| `start_time` | `int` | Start timestamp for this event summary (inclusive). |

#### Example: List

```go
meterEventSummarys, err := client.MeterEventSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(meterEventSummarys) // the array of records
```


### OnboardingLink

Create an instance: `onboardingLink := client.OnboardingLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apple_terms_and_conditions` | `any` | The options associated with the Apple Terms and Conditions link type. |

#### Example: Create

```go
result, err := client.OnboardingLink(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Order

Create an instance: `order := client.Order(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount_fees` | `int` | Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit. |
| `amount_subtotal` | `int` | Total amount of the carbon removal in the currency's smallest unit. |
| `amount_total` | `int` | Total amount of the order including fees in the currency's smallest unit. |
| `beneficiary` | `map[string]any` |  |
| `canceled_at` | `int` | Time at which the order was canceled. |
| `cancellation_reason` | `string` | Reason for the cancellation of this order. |
| `certificate` | `string` | For delivered orders, a URL to a delivery certificate for the order. |
| `confirmed_at` | `int` | Time at which the order was confirmed. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order. |
| `delayed_at` | `int` | Time at which the order's expected_delivery_year was delayed. |
| `delivered_at` | `int` | Time at which the order was delivered. |
| `delivery_details` | `[]any` | Details about the delivery of carbon removal for this order. |
| `expected_delivery_year` | `int` | The year this order is expected to be delivered. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons` | `string` | Quantity of carbon removal that is included in this order. |
| `object` | `string` | String representing the object's type. |
| `product` | `any` | Unique ID for the Climate `Product` this order is purchasing. |
| `product_substituted_at` | `int` | Time at which the order's product was substituted for a different product. |
| `status` | `string` | The current status of this order. |

#### Example: Load

```go
order, err := client.Order(nil).Load(map[string]any{"id": "order_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(order) // the loaded record
```

#### Example: List

```go
orders, err := client.Order(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(orders) // the array of records
```

#### Example: Create

```go
result, err := client.Order(nil).Create(map[string]any{
    "id": "example_id",
    "amount_fees": 1,
    "amount_subtotal": 1,
    "amount_total": 1,
    "beneficiary": map[string]any{},
    "created": 1,
    "currency": "example_currency",
    "delivery_details": []any{},
    "expected_delivery_year": 1,
    "livemode": true,
    "metadata": map[string]any{},
    "metric_tons": "example_metric_tons",
    "object": "example_object",
    "product": "example_product",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OutboundPayment

Create an instance: `outboundPayment := client.OutboundPayment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Amount (in cents) transferred. |
| `cancelable` | `bool` | Returns `true` if the object can be canceled, and `false` otherwise. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | ID of the [customer](https://docs.stripe.com/api/customers) to whom an OutboundPayment is sent. |
| `description` | `string` | An arbitrary string attached to the object. |
| `destination_payment_method` | `string` | The PaymentMethod via which an OutboundPayment is sent. |
| `destination_payment_method_details` | `any` | Details about the PaymentMethod for an OutboundPayment. |
| `end_user_details` | `any` | Details about the end user. |
| `expected_arrival_date` | `int` | The date when funds are expected to arrive in the destination account. |
| `financial_account` | `string` | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `returned_details` | `any` | Details about a returned OutboundPayment. |
| `statement_descriptor` | `string` | The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer). |
| `status` | `string` | Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. |
| `status_transitions` | `map[string]any` |  |
| `tracking_details` | `any` | Details about network-specific tracking information if available. |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```go
outboundPayment, err := client.OutboundPayment(nil).Load(map[string]any{"id": "outbound_payment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(outboundPayment) // the loaded record
```

#### Example: List

```go
outboundPayments, err := client.OutboundPayment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(outboundPayments) // the array of records
```

#### Example: Create

```go
result, err := client.OutboundPayment(nil).Create(map[string]any{
    "id": "example_id",
    "amount": 1,
    "cancelable": true,
    "created": 1,
    "currency": "example_currency",
    "expected_arrival_date": 1,
    "financial_account": "example_financial_account",
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "statement_descriptor": "example_statement_descriptor",
    "status": "example_status",
    "status_transitions": map[string]any{},
    "transaction": "example_transaction",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OutboundTransfer

Create an instance: `outboundTransfer := client.OutboundTransfer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Amount (in cents) transferred. |
| `cancelable` | `bool` | Returns `true` if the object can be canceled, and `false` otherwise. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `destination_payment_method` | `string` | The PaymentMethod used as the payment instrument for an OutboundTransfer. |
| `destination_payment_method_details` | `map[string]any` |  |
| `expected_arrival_date` | `int` | The date when funds are expected to arrive in the destination account. |
| `financial_account` | `string` | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `returned_details` | `any` | Details about a returned OutboundTransfer. |
| `statement_descriptor` | `string` | Information about the OutboundTransfer to be sent to the recipient account. |
| `status` | `string` | Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. |
| `status_transitions` | `map[string]any` |  |
| `tracking_details` | `any` | Details about network-specific tracking information if available. |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```go
outboundTransfer, err := client.OutboundTransfer(nil).Load(map[string]any{"id": "outbound_transfer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(outboundTransfer) // the loaded record
```

#### Example: List

```go
outboundTransfers, err := client.OutboundTransfer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(outboundTransfers) // the array of records
```

#### Example: Create

```go
result, err := client.OutboundTransfer(nil).Create(map[string]any{
    "id": "example_id",
    "amount": 1,
    "cancelable": true,
    "created": 1,
    "currency": "example_currency",
    "destination_payment_method_details": map[string]any{},
    "expected_arrival_date": 1,
    "financial_account": "example_financial_account",
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "statement_descriptor": "example_statement_descriptor",
    "status": "example_status",
    "status_transitions": map[string]any{},
    "transaction": "example_transaction",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PaymentAttemptRecord

Create an instance: `paymentAttemptRecord := client.PaymentAttemptRecord(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `string` | ID of the Connect application that created the PaymentAttemptRecord. |
| `created` | `int` | Time at which the object was created. |
| `customer_details` | `any` | Customer information for this payment. |
| `customer_presence` | `string` | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `string` | An arbitrary string attached to the object. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `payment_method_details` | `any` | Information about the Payment Method debited for this payment. |
| `payment_record` | `string` | ID of the Payment Record this Payment Attempt Record belongs to. |
| `processor_details` | `map[string]any` | Processor information associated with this payment. |
| `reported_by` | `string` | Indicates who reported the payment. |
| `shipping_details` | `any` | Shipping information for this payment. |

#### Example: Load

```go
paymentAttemptRecord, err := client.PaymentAttemptRecord(nil).Load(map[string]any{"id": "payment_attempt_record_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentAttemptRecord) // the loaded record
```

#### Example: List

```go
paymentAttemptRecords, err := client.PaymentAttemptRecord(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentAttemptRecords) // the array of records
```


### PaymentEvaluation

Create an instance: `paymentEvaluation := client.PaymentEvaluation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_device_metadata_details` | `map[string]any` | Client device metadata attached to this payment evaluation. |
| `created_at` | `int` | Time at which the object was created. |
| `customer_details` | `map[string]any` | Customer details attached to this payment evaluation. |
| `events` | `[]any` | Event information associated with the payment evaluation, such as refunds, dispute, early fraud warnings, or user interventions. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `outcome` | `any` | Indicates the final outcome for the payment evaluation. |
| `payment_details` | `map[string]any` | Payment details attached to this payment evaluation. |
| `recommended_action` | `string` | Recommended action based on the score of the `fraudulent_payment` signal. |
| `signals` | `map[string]any` | Collection of signals for this payment evaluation. |

#### Example: Create

```go
result, err := client.PaymentEvaluation(nil).Create(map[string]any{
    "client_device_metadata_details": map[string]any{},
    "created_at": 1,
    "events": []any{},
    "id": "example_id",
    "livemode": true,
    "object": "example_object",
    "payment_details": map[string]any{},
    "recommended_action": "example_recommended_action",
    "signals": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PaymentIntent

Create an instance: `paymentIntent := client.PaymentIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_payment_method_types` | `[]any` | The list of payment method types allowed for use with this payment. |
| `amount` | `int` | Amount intended to be collected by this PaymentIntent. |
| `amount_capturable` | `int` | Amount that can be captured from this PaymentIntent. |
| `amount_details` | `any` |  |
| `amount_received` | `int` | Amount that this PaymentIntent collects. |
| `application` | `any` | ID of the Connect application that created the PaymentIntent. |
| `application_fee_amount` | `int` | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `automatic_payment_methods` | `any` | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `canceled_at` | `int` | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_reason` | `string` | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | `string` | Controls when the funds will be captured from the customer's account. |
| `client_secret` | `string` | The client secret of this PaymentIntent. |
| `confirmation_method` | `string` | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | ID of the Customer this PaymentIntent belongs to, if one exists. |
| `customer_account` | `string` | ID of the Account representing the customer that this PaymentIntent belongs to, if one exists. |
| `description` | `string` | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | `[]any` | The list of payment method types to exclude from use with this payment. |
| `hooks` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the object. |
| `last_payment_error` | `any` | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `any` | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | Settings for Managed Payments. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `any` | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | You can specify the settlement merchant as the connected account using the `on_behalf_of` attribute on the charge. |
| `payment_details` | `map[string]any` |  |
| `payment_method` | `any` | ID of the payment method used in this PaymentIntent. |
| `payment_method_configuration_details` | `any` | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_options` | `any` | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `[]any` | The list of payment method types (e.g. |
| `payment_record` | `any` | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `presentment_details` | `map[string]any` |  |
| `processing` | `any` | If present, this property tells you about the processing state of the payment. |
| `receipt_email` | `string` | Email address that the receipt for the resulting payment will be sent to. |
| `review` | `any` | ID of the review associated with this PaymentIntent, if any. |
| `setup_future_usage` | `string` | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `shipping` | `any` | Shipping information for this PaymentIntent. |
| `statement_descriptor` | `string` | Text that appears on the customer's statement as the statement descriptor for a non-card charge. |
| `statement_descriptor_suffix` | `string` | Provides information about a card charge. |
| `status` | `string` | Status of this PaymentIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `requires_capture`, `canceled`, or `succeeded`. |
| `transfer_data` | `any` | The data that automatically creates a Transfer after the payment finalizes. |
| `transfer_group` | `string` | A string that identifies the resulting payment as part of a group. |

#### Example: Load

```go
paymentIntent, err := client.PaymentIntent(nil).Load(map[string]any{"id": "payment_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentIntent) // the loaded record
```

#### Example: List

```go
paymentIntents, err := client.PaymentIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentIntents) // the array of records
```

#### Example: Create

```go
result, err := client.PaymentIntent(nil).Create(map[string]any{
    "id": "example_id",
    "created": 1,
    "livemode": true,
    "object": "example_object",
    "presentment_details": map[string]any{},
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PaymentIntentAmountDetailsLineItem

Create an instance: `paymentIntentAmountDetailsLineItem := client.PaymentIntentAmountDetailsLineItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `discount_amount` | `int` | The discount applied on this line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `id` | `string` | Unique identifier for the object. |
| `object` | `string` | String representing the object's type. |
| `payment_method_options` | `any` | Payment method-specific information for line items. |
| `product_code` | `string` | The product code of the line item, such as an SKU. |
| `product_name` | `string` | The product name of the line item. |
| `quantity` | `int` | The quantity of items. |
| `tax` | `any` | Contains information about the tax on the item. |
| `unit_cost` | `int` | The unit cost of the line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `unit_of_measure` | `string` | A unit of measure for the line item, such as gallons, feet, meters, etc. |

#### Example: List

```go
paymentIntentAmountDetailsLineItems, err := client.PaymentIntentAmountDetailsLineItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentIntentAmountDetailsLineItems) // the array of records
```


### PaymentLink

Create an instance: `paymentLink := client.PaymentLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the payment link's `url` is active. |
| `after_completion` | `map[string]any` |  |
| `allow_promotion_codes` | `bool` | Whether user redeemable promotion codes are enabled. |
| `application` | `any` | The ID of the Connect application that created the Payment Link. |
| `application_fee_amount` | `int` | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `float64` | This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. |
| `automatic_tax` | `map[string]any` |  |
| `billing_address_collection` | `string` | Configuration for collecting the customer's billing address. |
| `consent_collection` | `any` | When set, provides configuration to gather active consent from customers. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `[]any` | Collect additional information from your customer using custom fields. |
| `custom_text` | `map[string]any` |  |
| `customer_creation` | `string` | Configuration for Customer creation during checkout. |
| `id` | `string` | Unique identifier for the object. |
| `inactive_message` | `string` | The custom message to be displayed to a customer when a payment link is no longer active. |
| `invoice_creation` | `any` | Configuration for creating invoice for payment mode payment links. |
| `line_items` | `map[string]any` | The line items representing what is being sold. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | Settings for Managed Payments for this Payment Link and resulting [CheckoutSessions](/api/checkout/sessions/object), [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/ob… |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name_collection` | `map[string]any` |  |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account on behalf of which to charge. |
| `optional_items` | `[]any` | The optional items presented to the customer at checkout. |
| `payment_intent_data` | `any` | Indicates the parameters to be passed to PaymentIntent creation during checkout. |
| `payment_method_collection` | `string` | Configuration for collecting a payment method during checkout. |
| `payment_method_options` | `any` | Payment-method-specific configuration. |
| `payment_method_types` | `[]any` | The list of payment method types that customers can use. |
| `phone_number_collection` | `map[string]any` |  |
| `restrictions` | `any` | Settings that restrict the usage of a payment link. |
| `shipping_address_collection` | `any` | Configuration for collecting the customer's shipping address. |
| `shipping_options` | `[]any` | The shipping rate options applied to the session. |
| `submit_type` | `string` | Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button. |
| `subscription_data` | `any` | When creating a subscription, the specified configuration data will be used. |
| `tax_id_collection` | `map[string]any` |  |
| `transfer_data` | `any` | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to. |
| `url` | `string` | The public URL that can be shared with customers. |

#### Example: Load

```go
paymentLink, err := client.PaymentLink(nil).Load(map[string]any{"id": "payment_link_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentLink) // the loaded record
```

#### Example: List

```go
paymentLinks, err := client.PaymentLink(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentLinks) // the array of records
```

#### Example: Create

```go
result, err := client.PaymentLink(nil).Create(map[string]any{
    "id": "example_id",
    "active": true,
    "after_completion": map[string]any{},
    "allow_promotion_codes": true,
    "automatic_tax": map[string]any{},
    "billing_address_collection": "example_billing_address_collection",
    "currency": "example_currency",
    "custom_fields": []any{},
    "custom_text": map[string]any{},
    "customer_creation": "example_customer_creation",
    "line_items": map[string]any{},
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "payment_method_collection": "example_payment_method_collection",
    "phone_number_collection": map[string]any{},
    "shipping_options": []any{},
    "submit_type": "example_submit_type",
    "tax_id_collection": map[string]any{},
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PaymentMethod

Create an instance: `paymentMethod := client.PaymentMethod(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acss_debit` | `map[string]any` |  |
| `affirm` | `map[string]any` |  |
| `afterpay_clearpay` | `map[string]any` |  |
| `alipay` | `map[string]any` |  |
| `allow_redisplay` | `bool` | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `alma` | `map[string]any` |  |
| `amazon_pay` | `map[string]any` |  |
| `au_becs_debit` | `map[string]any` |  |
| `bacs_debit` | `map[string]any` |  |
| `bancontact` | `map[string]any` |  |
| `billie` | `map[string]any` |  |
| `billing_details` | `map[string]any` |  |
| `bizum` | `map[string]any` |  |
| `blik` | `map[string]any` |  |
| `boleto` | `map[string]any` |  |
| `card` | `map[string]any` |  |
| `card_present` | `map[string]any` |  |
| `cashapp` | `map[string]any` |  |
| `created` | `int` | Time at which the object was created. |
| `crypto` | `map[string]any` |  |
| `custom` | `map[string]any` |  |
| `customer` | `any` | The ID of the Customer to which this PaymentMethod is saved. |
| `customer_account` | `string` |  |
| `customer_balance` | `map[string]any` |  |
| `eps` | `map[string]any` |  |
| `fpx` | `map[string]any` |  |
| `giropay` | `map[string]any` |  |
| `grabpay` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the object. |
| `ideal` | `map[string]any` |  |
| `interac_present` | `map[string]any` |  |
| `kakao_pay` | `map[string]any` |  |
| `klarna` | `map[string]any` |  |
| `konbini` | `map[string]any` |  |
| `kr_card` | `map[string]any` |  |
| `link` | `map[string]any` |  |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `mb_way` | `map[string]any` |  |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mobilepay` | `map[string]any` |  |
| `multibanco` | `map[string]any` |  |
| `naver_pay` | `map[string]any` |  |
| `nz_bank_account` | `map[string]any` |  |
| `object` | `string` | String representing the object's type. |
| `oxxo` | `map[string]any` |  |
| `p24` | `map[string]any` |  |
| `pay_by_bank` | `map[string]any` |  |
| `payco` | `map[string]any` |  |
| `paynow` | `map[string]any` |  |
| `paypal` | `map[string]any` |  |
| `paypay` | `map[string]any` |  |
| `payto` | `map[string]any` |  |
| `pix` | `map[string]any` |  |
| `promptpay` | `map[string]any` |  |
| `radar_options` | `map[string]any` | Options to configure Radar. |
| `revolut_pay` | `map[string]any` |  |
| `samsung_pay` | `map[string]any` |  |
| `satispay` | `map[string]any` |  |
| `scalapay` | `map[string]any` |  |
| `sepa_debit` | `map[string]any` |  |
| `sequra` | `map[string]any` |  |
| `sofort` | `map[string]any` |  |
| `sunbit` | `map[string]any` |  |
| `swish` | `map[string]any` |  |
| `twint` | `map[string]any` |  |
| `type` | `string` | The type of the PaymentMethod. |
| `upi` | `map[string]any` |  |
| `us_bank_account` | `map[string]any` |  |
| `wechat_pay` | `map[string]any` |  |
| `zip` | `map[string]any` |  |

#### Example: Load

```go
paymentMethod, err := client.PaymentMethod(nil).Load(map[string]any{"id": "payment_method_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentMethod) // the loaded record
```

#### Example: List

```go
paymentMethods, err := client.PaymentMethod(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentMethods) // the array of records
```

#### Example: Create

```go
result, err := client.PaymentMethod(nil).Create(map[string]any{
    "id": "example_id",
    "billing_details": map[string]any{},
    "boleto": map[string]any{},
    "card": map[string]any{},
    "card_present": map[string]any{},
    "created": 1,
    "custom": map[string]any{},
    "fpx": map[string]any{},
    "interac_present": map[string]any{},
    "livemode": true,
    "naver_pay": map[string]any{},
    "nz_bank_account": map[string]any{},
    "object": "example_object",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PaymentMethodConfiguration

Create an instance: `paymentMethodConfiguration := client.PaymentMethodConfiguration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acss_debit` | `map[string]any` |  |
| `active` | `bool` | Whether the configuration can be used for new payments. |
| `affirm` | `map[string]any` |  |
| `afterpay_clearpay` | `map[string]any` |  |
| `alipay` | `map[string]any` |  |
| `alma` | `map[string]any` |  |
| `amazon_pay` | `map[string]any` |  |
| `apple_pay` | `map[string]any` |  |
| `application` | `string` | For child configs, the Connect application associated with the configuration. |
| `au_becs_debit` | `map[string]any` |  |
| `bacs_debit` | `map[string]any` |  |
| `bancontact` | `map[string]any` |  |
| `billie` | `map[string]any` |  |
| `bizum` | `map[string]any` |  |
| `blik` | `map[string]any` |  |
| `boleto` | `map[string]any` |  |
| `card` | `map[string]any` |  |
| `cartes_bancaires` | `map[string]any` |  |
| `cashapp` | `map[string]any` |  |
| `crypto` | `map[string]any` |  |
| `customer_balance` | `map[string]any` |  |
| `eps` | `map[string]any` |  |
| `fpx` | `map[string]any` |  |
| `giropay` | `map[string]any` |  |
| `google_pay` | `map[string]any` |  |
| `grabpay` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the object. |
| `ideal` | `map[string]any` |  |
| `is_default` | `bool` | The default configuration is used whenever a payment method configuration is not specified. |
| `jcb` | `map[string]any` |  |
| `kakao_pay` | `map[string]any` |  |
| `klarna` | `map[string]any` |  |
| `konbini` | `map[string]any` |  |
| `kr_card` | `map[string]any` |  |
| `link` | `map[string]any` |  |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `mb_way` | `map[string]any` |  |
| `mobilepay` | `map[string]any` |  |
| `multibanco` | `map[string]any` |  |
| `name` | `string` | The configuration's name. |
| `naver_pay` | `map[string]any` |  |
| `nz_bank_account` | `map[string]any` |  |
| `object` | `string` | String representing the object's type. |
| `oxxo` | `map[string]any` |  |
| `p24` | `map[string]any` |  |
| `parent` | `string` | For child configs, the configuration's parent configuration. |
| `pay_by_bank` | `map[string]any` |  |
| `payco` | `map[string]any` |  |
| `paynow` | `map[string]any` |  |
| `paypal` | `map[string]any` |  |
| `paypay` | `map[string]any` |  |
| `payto` | `map[string]any` |  |
| `pix` | `map[string]any` |  |
| `promptpay` | `map[string]any` |  |
| `revolut_pay` | `map[string]any` |  |
| `samsung_pay` | `map[string]any` |  |
| `satispay` | `map[string]any` |  |
| `scalapay` | `map[string]any` |  |
| `sepa_debit` | `map[string]any` |  |
| `sequra` | `map[string]any` |  |
| `sofort` | `map[string]any` |  |
| `sunbit` | `map[string]any` |  |
| `swish` | `map[string]any` |  |
| `twint` | `map[string]any` |  |
| `upi` | `map[string]any` |  |
| `us_bank_account` | `map[string]any` |  |
| `wechat_pay` | `map[string]any` |  |
| `zip` | `map[string]any` |  |

#### Example: Load

```go
paymentMethodConfiguration, err := client.PaymentMethodConfiguration(nil).Load(map[string]any{"id": "payment_method_configuration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentMethodConfiguration) // the loaded record
```

#### Example: List

```go
paymentMethodConfigurations, err := client.PaymentMethodConfiguration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentMethodConfigurations) // the array of records
```

#### Example: Create

```go
result, err := client.PaymentMethodConfiguration(nil).Create(map[string]any{
    "id": "example_id",
    "acss_debit": map[string]any{},
    "active": true,
    "affirm": map[string]any{},
    "afterpay_clearpay": map[string]any{},
    "alipay": map[string]any{},
    "alma": map[string]any{},
    "amazon_pay": map[string]any{},
    "apple_pay": map[string]any{},
    "au_becs_debit": map[string]any{},
    "bacs_debit": map[string]any{},
    "bancontact": map[string]any{},
    "billie": map[string]any{},
    "bizum": map[string]any{},
    "blik": map[string]any{},
    "boleto": map[string]any{},
    "card": map[string]any{},
    "cartes_bancaires": map[string]any{},
    "cashapp": map[string]any{},
    "crypto": map[string]any{},
    "customer_balance": map[string]any{},
    "eps": map[string]any{},
    "fpx": map[string]any{},
    "giropay": map[string]any{},
    "google_pay": map[string]any{},
    "grabpay": map[string]any{},
    "ideal": map[string]any{},
    "is_default": true,
    "jcb": map[string]any{},
    "kakao_pay": map[string]any{},
    "klarna": map[string]any{},
    "konbini": map[string]any{},
    "kr_card": map[string]any{},
    "link": map[string]any{},
    "livemode": true,
    "mb_way": map[string]any{},
    "mobilepay": map[string]any{},
    "multibanco": map[string]any{},
    "name": "example_name",
    "naver_pay": map[string]any{},
    "nz_bank_account": map[string]any{},
    "object": "example_object",
    "oxxo": map[string]any{},
    "p24": map[string]any{},
    "pay_by_bank": map[string]any{},
    "payco": map[string]any{},
    "paynow": map[string]any{},
    "paypal": map[string]any{},
    "paypay": map[string]any{},
    "payto": map[string]any{},
    "pix": map[string]any{},
    "promptpay": map[string]any{},
    "revolut_pay": map[string]any{},
    "samsung_pay": map[string]any{},
    "satispay": map[string]any{},
    "scalapay": map[string]any{},
    "sepa_debit": map[string]any{},
    "sequra": map[string]any{},
    "sofort": map[string]any{},
    "sunbit": map[string]any{},
    "swish": map[string]any{},
    "twint": map[string]any{},
    "upi": map[string]any{},
    "us_bank_account": map[string]any{},
    "wechat_pay": map[string]any{},
    "zip": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PaymentMethodDomain

Create an instance: `paymentMethodDomain := client.PaymentMethodDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amazon_pay` | `map[string]any` | Indicates the status of a specific payment method on a payment method domain. |
| `apple_pay` | `map[string]any` | Indicates the status of a specific payment method on a payment method domain. |
| `created` | `int` | Time at which the object was created. |
| `domain_name` | `string` | The domain name that this payment method domain object represents. |
| `enabled` | `bool` | Whether this payment method domain is enabled. |
| `google_pay` | `map[string]any` | Indicates the status of a specific payment method on a payment method domain. |
| `id` | `string` | Unique identifier for the object. |
| `klarna` | `map[string]any` | Indicates the status of a specific payment method on a payment method domain. |
| `link` | `map[string]any` | Indicates the status of a specific payment method on a payment method domain. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `paypal` | `map[string]any` | Indicates the status of a specific payment method on a payment method domain. |

#### Example: Load

```go
paymentMethodDomain, err := client.PaymentMethodDomain(nil).Load(map[string]any{"id": "payment_method_domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentMethodDomain) // the loaded record
```

#### Example: List

```go
paymentMethodDomains, err := client.PaymentMethodDomain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentMethodDomains) // the array of records
```

#### Example: Create

```go
result, err := client.PaymentMethodDomain(nil).Create(map[string]any{
    "id": "example_id",
    "amazon_pay": map[string]any{},
    "apple_pay": map[string]any{},
    "created": 1,
    "domain_name": "example_domain_name",
    "enabled": true,
    "google_pay": map[string]any{},
    "klarna": map[string]any{},
    "link": map[string]any{},
    "livemode": true,
    "object": "example_object",
    "paypal": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PaymentRecord

Create an instance: `paymentRecord := client.PaymentRecord(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `map[string]any` | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `string` | ID of the Connect application that created the PaymentRecord. |
| `created` | `int` | Time at which the object was created. |
| `customer_details` | `any` | Customer information for this payment. |
| `customer_presence` | `string` | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `string` | An arbitrary string attached to the object. |
| `id` | `string` | Unique identifier for the object. |
| `latest_payment_attempt_record` | `string` | ID of the latest Payment Attempt Record attached to this Payment Record. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `payment_method_details` | `any` | Information about the Payment Method debited for this payment. |
| `processor_details` | `map[string]any` | Processor information associated with this payment. |
| `reported_by` | `string` | Indicates who reported the payment. |
| `shipping_details` | `any` | Shipping information for this payment. |

#### Example: Load

```go
paymentRecord, err := client.PaymentRecord(nil).Load(map[string]any{"id": "payment_record_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentRecord) // the loaded record
```

#### Example: List

```go
paymentRecords, err := client.PaymentRecord(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentRecords) // the array of records
```

#### Example: Create

```go
result, err := client.PaymentRecord(nil).Create(map[string]any{
    "amount": map[string]any{},
    "amount_authorized": map[string]any{},
    "amount_canceled": map[string]any{},
    "amount_failed": map[string]any{},
    "amount_guaranteed": map[string]any{},
    "amount_refunded": map[string]any{},
    "amount_requested": map[string]any{},
    "created": 1,
    "id": "example_id",
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "processor_details": map[string]any{},
    "reported_by": "example_reported_by",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Payout

Create an instance: `payout := client.Payout(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | The amount (in cents (or local equivalent)) that transfers to your bank account or debit card. |
| `application_fee` | `any` | The application fee (if any) for the payout. |
| `application_fee_amount` | `int` | The amount of the application fee (if any) requested for the payout. |
| `arrival_date` | `int` | Date that you can expect the payout to arrive in the bank. |
| `automatic` | `bool` | Returns `true` if the payout is created by an [automated payout schedule](https://docs.stripe.com/payouts#payout-schedule) and `false` if it's [requested manually](https://stripe.com/docs/payouts#manual-payouts). |
| `balance_transaction` | `any` | ID of the balance transaction that describes the impact of this payout on your account balance. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `destination` | `any` | ID of the bank account or card the payout is sent to. |
| `failure_balance_transaction` | `any` | If the payout fails or cancels, this is the ID of the balance transaction that reverses the initial balance transaction and returns the funds from the failed payout back in your balance. |
| `failure_code` | `string` | Error code that provides a reason for a payout failure, if available. |
| `failure_message` | `string` | Message that provides the reason for a payout failure, if available. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `method` | `string` | The method used to send this payout, which can be `standard` or `instant`. |
| `object` | `string` | String representing the object's type. |
| `original_payout` | `any` | If the payout reverses another, this is the ID of the original payout. |
| `payout_method` | `string` | ID of the v2 FinancialAccount the funds are sent to. |
| `reconciliation_status` | `string` | If `completed`, you can use the [Balance Transactions API](https://docs.stripe.com/api/balance_transactions/list#balance_transaction_list-payout) to list all balance transactions that are paid out in this payout. |
| `reversed_by` | `any` | If the payout reverses, this is the ID of the payout that reverses this payout. |
| `source_type` | `string` | The source balance this payout came from, which can be one of the following: `card`, `fpx`, or `bank_account`. |
| `statement_descriptor` | `string` | Extra information about a payout that displays on the user's bank statement. |
| `status` | `string` | Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`. |
| `trace_id` | `string` | A value that generates from the beneficiary's bank that allows users to track payouts with their bank. |
| `type` | `string` | Can be `bank_account` or `card`. |

#### Example: Load

```go
payout, err := client.Payout(nil).Load(map[string]any{"id": "payout_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(payout) // the loaded record
```

#### Example: List

```go
payouts, err := client.Payout(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(payouts) // the array of records
```

#### Example: Create

```go
result, err := client.Payout(nil).Create(map[string]any{
    "id": "example_id",
    "amount": 1,
    "arrival_date": 1,
    "automatic": true,
    "created": 1,
    "currency": "example_currency",
    "livemode": true,
    "method": "example_method",
    "object": "example_object",
    "reconciliation_status": "example_reconciliation_status",
    "source_type": "example_source_type",
    "status": "example_status",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Person

Create an instance: `person := client.Person(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | The account the person is associated with. |
| `additional_tos_acceptances` | `map[string]any` |  |
| `address` | `map[string]any` |  |
| `address_kana` | `any` |  |
| `address_kanji` | `any` |  |
| `created` | `int` | Time at which the object was created. |
| `dob` | `map[string]any` |  |
| `email` | `string` | The person's email address. |
| `first_name` | `string` | The person's first name. |
| `first_name_kana` | `string` | The Kana variation of the person's first name (Japan only). |
| `first_name_kanji` | `string` | The Kanji variation of the person's first name (Japan only). |
| `full_name_aliases` | `[]any` | A list of alternate names or aliases that the person is known by. |
| `future_requirements` | `any` |  |
| `gender` | `string` | The person's gender. |
| `id` | `string` | Unique identifier for the object. |
| `id_number_provided` | `bool` | Whether the person's `id_number` was provided. |
| `id_number_secondary_provided` | `bool` | Whether the person's `id_number_secondary` was provided. |
| `last_name` | `string` | The person's last name. |
| `last_name_kana` | `string` | The Kana variation of the person's last name (Japan only). |
| `last_name_kanji` | `string` | The Kanji variation of the person's last name (Japan only). |
| `maiden_name` | `string` | The person's maiden name. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nationality` | `string` | The country where the person is a national. |
| `object` | `string` | String representing the object's type. |
| `phone` | `string` | The person's phone number. |
| `political_exposure` | `string` | Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction. |
| `registered_address` | `map[string]any` |  |
| `relationship` | `map[string]any` |  |
| `requirements` | `any` |  |
| `ssn_last_4_provided` | `bool` | Whether the last four digits of the person's Social Security number have been provided (U.S. |
| `us_cfpb_data` | `any` | Demographic data related to the person. |
| `verification` | `map[string]any` |  |

#### Example: Load

```go
person, err := client.Person(nil).Load(map[string]any{"id": "person_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(person) // the loaded record
```

#### Example: List

```go
persons, err := client.Person(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(persons) // the array of records
```

#### Example: Create

```go
result, err := client.Person(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "account": "example_account",
    "created": 1,
    "object": "example_object",
    "verification": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PersonalizationDesign

Create an instance: `personalizationDesign := client.PersonalizationDesign(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `card_logo` | `any` | The file for the card logo to use with physical bundles that support card logos. |
| `carrier_text` | `any` | Hash containing carrier text, for use with physical bundles that support carrier text. |
| `created` | `int` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | A lookup key used to retrieve personalization designs dynamically from a static string. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Friendly display name. |
| `object` | `string` | String representing the object's type. |
| `physical_bundle` | `any` | The physical bundle object belonging to this personalization design. |
| `preferences` | `map[string]any` |  |
| `rejection_reasons` | `map[string]any` |  |
| `status` | `string` | Whether this personalization design can be used to create cards. |

#### Example: Load

```go
personalizationDesign, err := client.PersonalizationDesign(nil).Load(map[string]any{"id": "personalization_design_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(personalizationDesign) // the loaded record
```

#### Example: List

```go
personalizationDesigns, err := client.PersonalizationDesign(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(personalizationDesigns) // the array of records
```

#### Example: Create

```go
result, err := client.PersonalizationDesign(nil).Create(map[string]any{
    "id": "example_id",
    "created": 1,
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "physical_bundle": "example_physical_bundle",
    "preferences": map[string]any{},
    "rejection_reasons": map[string]any{},
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PhysicalBundle

Create an instance: `physicalBundle := client.PhysicalBundle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `card_logo` | `string` | The policy for how to use card logo images in a card design with this physical bundle. |
| `carrier_text` | `string` | The policy for how to use carrier letter text in a card design with this physical bundle. |
| `features` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Friendly display name. |
| `object` | `string` | String representing the object's type. |
| `second_line` | `string` | The policy for how to use a second line on a card with this physical bundle. |
| `status` | `string` | Whether this physical bundle can be used to create cards. |
| `type` | `string` | Whether this physical bundle is a standard Stripe offering or custom-made for you. |

#### Example: Load

```go
physicalBundle, err := client.PhysicalBundle(nil).Load(map[string]any{"id": "physical_bundle_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(physicalBundle) // the loaded record
```

#### Example: List

```go
physicalBundles, err := client.PhysicalBundle(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(physicalBundles) // the array of records
```


### Plan

Create an instance: `plan := client.Plan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the plan can be used for new purchases. |
| `amount` | `int` | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `amount_decimal` | `string` | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `billing_scheme` | `string` | Describes how to compute the price per period. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `id` | `string` | Unique identifier for the object. |
| `interval` | `string` | The frequency at which a subscription is billed. |
| `interval_count` | `int` | The number of intervals (specified in the `interval` attribute) between subscription billings. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `meter` | `string` | The meter tracking the usage of a metered price |
| `nickname` | `string` | A brief description of the plan, hidden from customers. |
| `object` | `string` | String representing the object's type. |
| `product` | `any` | The product whose pricing this plan determines. |
| `tiers` | `[]any` | Each element represents a pricing tier. |
| `tiers_mode` | `string` | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_usage` | `any` | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_period_days` | `int` | Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://docs.stripe.com/api#create_subscription-trial_from_plan). |
| `usage_type` | `string` | Configures how the quantity per period should be determined. |

#### Example: Load

```go
plan, err := client.Plan(nil).Load(map[string]any{"id": "plan_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(plan) // the loaded record
```

#### Example: List

```go
plans, err := client.Plan(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(plans) // the array of records
```

#### Example: Create

```go
result, err := client.Plan(nil).Create(map[string]any{
    "id": "example_id",
    "active": true,
    "billing_scheme": "example_billing_scheme",
    "created": 1,
    "currency": "example_currency",
    "interval": "example_interval",
    "interval_count": 1,
    "livemode": true,
    "object": "example_object",
    "usage_type": "example_usage_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Price

Create an instance: `price := client.Price(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the price can be used for new purchases. |
| `billing_scheme` | `string` | Describes how to compute the price per period. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | `map[string]any` | Prices defined in each available currency option. |
| `custom_unit_amount` | `any` | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | A lookup key used to retrieve prices dynamically from a static string. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | A brief description of the price, hidden from customers. |
| `object` | `string` | String representing the object's type. |
| `product` | `any` | The ID of the product this price is associated with. |
| `recurring` | `any` | The recurring components of a price such as `interval` and `usage_type`. |
| `tax_behavior` | `string` | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tiers` | `[]any` | Each element represents a pricing tier. |
| `tiers_mode` | `string` | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_quantity` | `any` | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `type` | `string` | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | `int` | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | `string` | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |

#### Example: Load

```go
price, err := client.Price(nil).Load(map[string]any{"id": "price_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(price) // the loaded record
```

#### Example: List

```go
prices, err := client.Price(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(prices) // the array of records
```

#### Example: Create

```go
result, err := client.Price(nil).Create(map[string]any{
    "id": "example_id",
    "active": true,
    "billing_scheme": "example_billing_scheme",
    "created": 1,
    "currency": "example_currency",
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "product": "example_product",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Product

Create an instance: `product := client.Product(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the product is currently available for purchase. |
| `created` | `int` | Time at which the object was created. |
| `current_prices_per_metric_ton` | `map[string]any` | Current prices for a metric ton of carbon removal in a currency's smallest unit. |
| `default_price` | `any` | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `delivery_year` | `int` | The year in which the carbon removal is expected to be delivered. |
| `description` | `string` | The product's description, meant to be displayable to the customer. |
| `id` | `string` | Unique identifier for the object. |
| `images` | `[]any` | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `livemode` | `bool` | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `marketing_features` | `[]any` | A list of up to 15 marketing features for this product. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons_available` | `string` | The quantity of metric tons available for reservation. |
| `name` | `string` | The Climate product's name. |
| `object` | `string` | String representing the object's type. |
| `package_dimensions` | `any` | The dimensions of this product for shipping purposes. |
| `shippable` | `bool` | Whether this product is shipped (i.e., physical goods). |
| `statement_descriptor` | `string` | Extra information about a product which will appear on your customer's credit card statement. |
| `suppliers` | `[]any` | The carbon removal suppliers that fulfill orders for this Climate product. |
| `tax_code` | `any` | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `any` | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `unit_label` | `string` | A label that represents units of this product. |
| `updated` | `int` | Time at which the object was last updated. |
| `url` | `string` | A URL of a publicly-accessible webpage for this product. |

#### Example: Load

```go
product, err := client.Product(nil).Load(map[string]any{"id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(product) // the loaded record
```

#### Example: List

```go
products, err := client.Product(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(products) // the array of records
```

#### Example: Create

```go
result, err := client.Product(nil).Create(map[string]any{
    "id": "example_id",
    "active": true,
    "created": 1,
    "current_prices_per_metric_ton": map[string]any{},
    "images": []any{},
    "livemode": true,
    "marketing_features": []any{},
    "metadata": map[string]any{},
    "metric_tons_available": "example_metric_tons_available",
    "name": "example_name",
    "object": "example_object",
    "suppliers": []any{},
    "updated": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProductFeature

Create an instance: `productFeature := client.ProductFeature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | A unique key you provide as your own system identifier. |
| `metadata` | `map[string]any` | Set of key-value pairs that you can attach to an object. |
| `name` | `string` | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `string` | String representing the object's type. |

#### Example: Load

```go
productFeature, err := client.ProductFeature(nil).Load(map[string]any{"id": "product_feature_id", "product_id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(productFeature) // the loaded record
```

#### Example: Create

```go
result, err := client.ProductFeature(nil).Create(map[string]any{
    "id": "example_id",
    "active": true,
    "livemode": true,
    "lookup_key": "example_lookup_key",
    "metadata": map[string]any{},
    "name": "example_name",
    "object": "example_object",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PromotionCode

Create an instance: `promotionCode := client.PromotionCode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the promotion code is currently active. |
| `code` | `string` | The customer-facing code. |
| `created` | `int` | Time at which the object was created. |
| `customer` | `any` | The customer who can use this promotion code. |
| `customer_account` | `string` | The account representing the customer who can use this promotion code. |
| `expires_at` | `int` | Date at which the promotion code can no longer be redeemed. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | `int` | Maximum number of times this promotion code can be redeemed. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `promotion` | `map[string]any` |  |
| `restrictions` | `map[string]any` |  |
| `times_redeemed` | `int` | Number of times this promotion code has been used. |

#### Example: Load

```go
promotionCode, err := client.PromotionCode(nil).Load(map[string]any{"id": "promotion_code_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(promotionCode) // the loaded record
```

#### Example: List

```go
promotionCodes, err := client.PromotionCode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(promotionCodes) // the array of records
```

#### Example: Create

```go
result, err := client.PromotionCode(nil).Create(map[string]any{
    "id": "example_id",
    "active": true,
    "code": "example_code",
    "created": 1,
    "livemode": true,
    "object": "example_object",
    "promotion": map[string]any{},
    "restrictions": map[string]any{},
    "times_redeemed": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Quote

Create an instance: `quote := client.Quote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount_subtotal` | `int` | Total before any discounts or taxes are applied. |
| `amount_total` | `int` | Total after discounts and taxes are applied. |
| `application` | `any` | ID of the Connect Application that created the quote. |
| `application_fee_amount` | `int` | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `float64` | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `map[string]any` |  |
| `collection_method` | `string` | Either `charge_automatically`, or `send_invoice`. |
| `computed` | `map[string]any` |  |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | The customer who received this quote. |
| `customer_account` | `string` | The account representing the customer who received this quote. |
| `default_tax_rates` | `[]any` | The tax rates applied to this quote. |
| `description` | `string` | A description that will be displayed on the quote PDF. |
| `discounts` | `[]any` | The discounts applied to this quote. |
| `expires_at` | `int` | The date on which the quote will be canceled if in `open` or `draft` status. |
| `footer` | `string` | A footer that will be displayed on the quote PDF. |
| `from_quote` | `any` | Details of the quote that was cloned. |
| `header` | `string` | A header that will be displayed on the quote PDF. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `any` | The invoice that was created from this quote. |
| `invoice_settings` | `map[string]any` |  |
| `line_items` | `map[string]any` | A list of items the customer is being quoted for. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `string` | A unique number that identifies this particular quote. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account on behalf of which to charge. |
| `status` | `string` | The status of the quote. |
| `status_transitions` | `map[string]any` |  |
| `subscription` | `any` | The subscription that was created or updated from this quote. |
| `subscription_data` | `map[string]any` |  |
| `subscription_schedule` | `any` | The subscription schedule that was created or updated from this quote. |
| `test_clock` | `any` | ID of the test clock this quote belongs to. |
| `total_details` | `map[string]any` |  |
| `transfer_data` | `any` | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices. |

#### Example: Load

```go
quote, err := client.Quote(nil).Load(map[string]any{"id": "quote_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(quote) // the loaded record
```

#### Example: List

```go
quotes, err := client.Quote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(quotes) // the array of records
```

#### Example: Create

```go
result, err := client.Quote(nil).Create(map[string]any{
    "id": "example_id",
    "amount_subtotal": 1,
    "amount_total": 1,
    "automatic_tax": map[string]any{},
    "collection_method": "example_collection_method",
    "computed": map[string]any{},
    "created": 1,
    "discounts": []any{},
    "expires_at": 1,
    "invoice_settings": map[string]any{},
    "line_items": map[string]any{},
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "status": "example_status",
    "status_transitions": map[string]any{},
    "subscription_data": map[string]any{},
    "total_details": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### QuoteComputedUpfrontLineItem

Create an instance: `quoteComputedUpfrontLineItem := client.QuoteComputedUpfrontLineItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adjustable_quantity` | `any` |  |
| `amount_discount` | `int` | Total discount amount applied. |
| `amount_subtotal` | `int` | Total before any discounts or taxes are applied. |
| `amount_tax` | `int` | Total tax amount applied. |
| `amount_total` | `int` | Total after discounts and taxes. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discounts` | `[]any` | The discounts applied to the line item. |
| `id` | `string` | Unique identifier for the object. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `price` | `float64` | The price used to generate the line item. |
| `quantity` | `int` | The quantity of products being purchased. |
| `taxes` | `[]any` | The taxes applied to the line item. |

#### Example: List

```go
quoteComputedUpfrontLineItems, err := client.QuoteComputedUpfrontLineItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(quoteComputedUpfrontLineItems) // the array of records
```


### QuotePdf

Create an instance: `quotePdf := client.QuotePdf(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
quotePdf, err := client.QuotePdf(nil).Load(map[string]any{"id": "quote_pdf_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(quotePdf) // the loaded record
```


### Reader

Create an instance: `reader := client.Reader(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `any` | The most recent action performed by the reader. |
| `device_sw_version` | `string` | The current software version of the reader. |
| `device_type` | `string` | Device type of the reader. |
| `id` | `string` | Unique identifier for the object. |
| `ip_address` | `string` | The local IP address of the reader. |
| `label` | `string` | Custom label given to the reader for easier identification. |
| `last_seen_at` | `int` | The last time this reader reported to Stripe backend. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `location` | `any` | The location identifier of the reader. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `serial_number` | `string` | Serial number of the reader. |
| `status` | `string` | The networking status of the reader. |

#### Example: Load

```go
reader, err := client.Reader(nil).Load(map[string]any{"id": "reader_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(reader) // the loaded record
```

#### Example: List

```go
readers, err := client.Reader(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(readers) // the array of records
```

#### Example: Create

```go
result, err := client.Reader(nil).Create(map[string]any{
    "id": "example_id",
    "device_type": "example_device_type",
    "label": "example_label",
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "serial_number": "example_serial_number",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ReceivedCredit

Create an instance: `receivedCredit := client.ReceivedCredit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Amount (in cents) transferred. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `failure_code` | `string` | Reason for the failure. |
| `financial_account` | `string` | The FinancialAccount that received the funds. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `initiating_payment_method_details` | `map[string]any` |  |
| `linked_flows` | `map[string]any` |  |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `network` | `string` | The rails used to send the funds. |
| `object` | `string` | String representing the object's type. |
| `reversal_details` | `any` | Details describing when a ReceivedCredit may be reversed. |
| `status` | `string` | Status of the ReceivedCredit. |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```go
receivedCredit, err := client.ReceivedCredit(nil).Load(map[string]any{"id": "received_credit_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(receivedCredit) // the loaded record
```

#### Example: List

```go
receivedCredits, err := client.ReceivedCredit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(receivedCredits) // the array of records
```

#### Example: Create

```go
result, err := client.ReceivedCredit(nil).Create(map[string]any{
    "amount": 1,
    "created": 1,
    "currency": "example_currency",
    "description": "example_description",
    "id": "example_id",
    "initiating_payment_method_details": map[string]any{},
    "linked_flows": map[string]any{},
    "livemode": true,
    "network": "example_network",
    "object": "example_object",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ReceivedDebit

Create an instance: `receivedDebit := client.ReceivedDebit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Amount (in cents) transferred. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `failure_code` | `string` | Reason for the failure. |
| `financial_account` | `string` | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `initiating_payment_method_details` | `map[string]any` |  |
| `linked_flows` | `map[string]any` |  |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `network` | `string` | The network used for the ReceivedDebit. |
| `object` | `string` | String representing the object's type. |
| `reversal_details` | `any` | Details describing when a ReceivedDebit might be reversed. |
| `status` | `string` | Status of the ReceivedDebit. |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```go
receivedDebit, err := client.ReceivedDebit(nil).Load(map[string]any{"id": "received_debit_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(receivedDebit) // the loaded record
```

#### Example: List

```go
receivedDebits, err := client.ReceivedDebit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(receivedDebits) // the array of records
```

#### Example: Create

```go
result, err := client.ReceivedDebit(nil).Create(map[string]any{
    "amount": 1,
    "created": 1,
    "currency": "example_currency",
    "description": "example_description",
    "id": "example_id",
    "initiating_payment_method_details": map[string]any{},
    "linked_flows": map[string]any{},
    "livemode": true,
    "network": "example_network",
    "object": "example_object",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Refund

Create an instance: `refund := client.Refund(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Amount, in cents (or local equivalent). |
| `balance_transaction` | `any` | Balance transaction that describes the impact on your account balance. |
| `charge` | `any` | ID of the charge that's refunded. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | ID of the customer of this refund. |
| `customer_account` | `string` | ID of the account of this refund. |
| `description` | `string` | An arbitrary string attached to the object. |
| `destination_details` | `map[string]any` |  |
| `failure_balance_transaction` | `any` | After the refund fails, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction. |
| `failure_reason` | `string` | Provides the reason for the refund failure. |
| `fee` | `any` | ID of the application fee that was refunded. |
| `id` | `string` | Unique identifier for the object. |
| `instructions_email` | `string` | For payment methods without native refund support (for example, Konbini, PromptPay), provide an email address for the customer to receive refund instructions. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `map[string]any` |  |
| `object` | `string` | String representing the object's type. |
| `payment_intent` | `any` | ID of the PaymentIntent that's refunded. |
| `payment_method` | `any` | ID of the payment method associated with this refund. |
| `pending_reason` | `string` | Provides the reason for why the refund is pending. |
| `presentment_details` | `map[string]any` |  |
| `reason` | `string` | Reason for the refund, which is either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`). |
| `receipt_number` | `string` | This is the transaction number that appears on email receipts sent for this refund. |
| `source_transfer_reversal` | `any` | The transfer reversal that's associated with the refund. |
| `status` | `string` | Status of the refund. |
| `transfer_reversal` | `any` | This refers to the transfer reversal object if the accompanying transfer reverses. |

#### Example: Load

```go
refund, err := client.Refund(nil).Load(map[string]any{"id": "refund_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(refund) // the loaded record
```

#### Example: List

```go
refunds, err := client.Refund(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(refunds) // the array of records
```

#### Example: Create

```go
result, err := client.Refund(nil).Create(map[string]any{
    "id": "example_id",
    "amount": 1,
    "created": 1,
    "currency": "example_currency",
    "destination_details": map[string]any{},
    "fee": "example_fee",
    "next_action": map[string]any{},
    "object": "example_object",
    "presentment_details": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Registration

Create an instance: `registration := client.Registration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_from` | `int` | Time at which the registration becomes active. |
| `ae` | `map[string]any` |  |
| `al` | `map[string]any` |  |
| `am` | `map[string]any` |  |
| `ao` | `map[string]any` |  |
| `at` | `map[string]any` |  |
| `au` | `map[string]any` |  |
| `aw` | `map[string]any` |  |
| `az` | `map[string]any` |  |
| `ba` | `map[string]any` |  |
| `bb` | `map[string]any` |  |
| `bd` | `map[string]any` |  |
| `be` | `map[string]any` |  |
| `bf` | `map[string]any` |  |
| `bg` | `map[string]any` |  |
| `bh` | `map[string]any` |  |
| `bj` | `map[string]any` |  |
| `bs` | `map[string]any` |  |
| `by` | `map[string]any` |  |
| `ca` | `map[string]any` |  |
| `cd` | `map[string]any` |  |
| `ch` | `map[string]any` |  |
| `cl` | `map[string]any` |  |
| `cm` | `map[string]any` |  |
| `co` | `map[string]any` |  |
| `country` | `string` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `country_options` | `map[string]any` |  |
| `cr` | `map[string]any` |  |
| `created` | `int` | Time at which the object was created. |
| `cv` | `map[string]any` |  |
| `cy` | `map[string]any` |  |
| `cz` | `map[string]any` |  |
| `de` | `map[string]any` |  |
| `dk` | `map[string]any` |  |
| `ec` | `map[string]any` |  |
| `ee` | `map[string]any` |  |
| `eg` | `map[string]any` |  |
| `es` | `map[string]any` |  |
| `et` | `map[string]any` |  |
| `expires_at` | `int` | If set, the registration stops being active at this time. |
| `fi` | `map[string]any` |  |
| `fr` | `map[string]any` |  |
| `gb` | `map[string]any` |  |
| `ge` | `map[string]any` |  |
| `gn` | `map[string]any` |  |
| `gr` | `map[string]any` |  |
| `hr` | `map[string]any` |  |
| `hu` | `map[string]any` |  |
| `id` | `map[string]any` | Unique identifier for the object. |
| `ie` | `map[string]any` |  |
| `in` | `map[string]any` |  |
| `is` | `map[string]any` |  |
| `it` | `map[string]any` |  |
| `jp` | `map[string]any` |  |
| `ke` | `map[string]any` |  |
| `kg` | `map[string]any` |  |
| `kh` | `map[string]any` |  |
| `kr` | `map[string]any` |  |
| `kz` | `map[string]any` |  |
| `la` | `map[string]any` |  |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `lk` | `map[string]any` |  |
| `lt` | `map[string]any` |  |
| `lu` | `map[string]any` |  |
| `lv` | `map[string]any` |  |
| `ma` | `map[string]any` |  |
| `md` | `map[string]any` |  |
| `me` | `map[string]any` |  |
| `mk` | `map[string]any` |  |
| `mr` | `map[string]any` |  |
| `mt` | `map[string]any` |  |
| `mx` | `map[string]any` |  |
| `my` | `map[string]any` |  |
| `ng` | `map[string]any` |  |
| `nl` | `map[string]any` |  |
| `no` | `map[string]any` |  |
| `np` | `map[string]any` |  |
| `nz` | `map[string]any` |  |
| `object` | `string` | String representing the object's type. |
| `om` | `map[string]any` |  |
| `pe` | `map[string]any` |  |
| `ph` | `map[string]any` |  |
| `pl` | `map[string]any` |  |
| `pt` | `map[string]any` |  |
| `ro` | `map[string]any` |  |
| `rs` | `map[string]any` |  |
| `ru` | `map[string]any` |  |
| `sa` | `map[string]any` |  |
| `se` | `map[string]any` |  |
| `sg` | `map[string]any` |  |
| `si` | `map[string]any` |  |
| `sk` | `map[string]any` |  |
| `sn` | `map[string]any` |  |
| `sr` | `map[string]any` |  |
| `status` | `string` | The status of the registration. |
| `th` | `map[string]any` |  |
| `tj` | `map[string]any` |  |
| `tr` | `map[string]any` |  |
| `tw` | `map[string]any` |  |
| `tz` | `map[string]any` |  |
| `ua` | `map[string]any` |  |
| `ug` | `map[string]any` |  |
| `us` | `map[string]any` |  |
| `uy` | `map[string]any` |  |
| `uz` | `map[string]any` |  |
| `vn` | `map[string]any` |  |
| `za` | `map[string]any` |  |
| `zm` | `map[string]any` |  |
| `zw` | `map[string]any` |  |

#### Example: Load

```go
registration, err := client.Registration(nil).Load(map[string]any{"id": "registration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(registration) // the loaded record
```

#### Example: List

```go
registrations, err := client.Registration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(registrations) // the array of records
```

#### Example: Create

```go
result, err := client.Registration(nil).Create(map[string]any{
    "id": "example_id",
    "active_from": 1,
    "ae": map[string]any{},
    "al": map[string]any{},
    "am": map[string]any{},
    "ao": map[string]any{},
    "at": map[string]any{},
    "au": map[string]any{},
    "aw": map[string]any{},
    "az": map[string]any{},
    "ba": map[string]any{},
    "bb": map[string]any{},
    "bd": map[string]any{},
    "be": map[string]any{},
    "bf": map[string]any{},
    "bg": map[string]any{},
    "bh": map[string]any{},
    "bj": map[string]any{},
    "bs": map[string]any{},
    "by": map[string]any{},
    "ca": map[string]any{},
    "cd": map[string]any{},
    "ch": map[string]any{},
    "cl": map[string]any{},
    "cm": map[string]any{},
    "co": map[string]any{},
    "country": "example_country",
    "country_options": map[string]any{},
    "cr": map[string]any{},
    "created": 1,
    "cv": map[string]any{},
    "cy": map[string]any{},
    "cz": map[string]any{},
    "de": map[string]any{},
    "dk": map[string]any{},
    "ec": map[string]any{},
    "ee": map[string]any{},
    "eg": map[string]any{},
    "es": map[string]any{},
    "et": map[string]any{},
    "fi": map[string]any{},
    "fr": map[string]any{},
    "gb": map[string]any{},
    "ge": map[string]any{},
    "gn": map[string]any{},
    "gr": map[string]any{},
    "hr": map[string]any{},
    "hu": map[string]any{},
    "ie": map[string]any{},
    "in": map[string]any{},
    "is": map[string]any{},
    "it": map[string]any{},
    "jp": map[string]any{},
    "ke": map[string]any{},
    "kg": map[string]any{},
    "kh": map[string]any{},
    "kr": map[string]any{},
    "kz": map[string]any{},
    "la": map[string]any{},
    "livemode": true,
    "lk": map[string]any{},
    "lt": map[string]any{},
    "lu": map[string]any{},
    "lv": map[string]any{},
    "ma": map[string]any{},
    "md": map[string]any{},
    "me": map[string]any{},
    "mk": map[string]any{},
    "mr": map[string]any{},
    "mt": map[string]any{},
    "mx": map[string]any{},
    "my": map[string]any{},
    "ng": map[string]any{},
    "nl": map[string]any{},
    "no": map[string]any{},
    "np": map[string]any{},
    "nz": map[string]any{},
    "object": "example_object",
    "om": map[string]any{},
    "pe": map[string]any{},
    "ph": map[string]any{},
    "pl": map[string]any{},
    "pt": map[string]any{},
    "ro": map[string]any{},
    "rs": map[string]any{},
    "ru": map[string]any{},
    "sa": map[string]any{},
    "se": map[string]any{},
    "sg": map[string]any{},
    "si": map[string]any{},
    "sk": map[string]any{},
    "sn": map[string]any{},
    "sr": map[string]any{},
    "status": "example_status",
    "th": map[string]any{},
    "tj": map[string]any{},
    "tr": map[string]any{},
    "tw": map[string]any{},
    "tz": map[string]any{},
    "ua": map[string]any{},
    "ug": map[string]any{},
    "us": map[string]any{},
    "uy": map[string]any{},
    "uz": map[string]any{},
    "vn": map[string]any{},
    "za": map[string]any{},
    "zm": map[string]any{},
    "zw": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ReportRun

Create an instance: `reportRun := client.ReportRun(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `error` | `string` | If something should go wrong during the run, a message about the failure (populated when `status=failed`). |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | `true` if the report is run on live mode data and `false` if it is run on test mode data. |
| `object` | `string` | String representing the object's type. |
| `parameters` | `map[string]any` |  |
| `report_type` | `string` | The ID of the [report type](https://docs.stripe.com/reports/report-types) to run, such as `"balance.summary.1"`. |
| `result` | `any` | The file object representing the result of the report run (populated when `status=succeeded`). |
| `status` | `string` | Status of this report run. |
| `succeeded_at` | `int` | Timestamp at which this run successfully finished (populated when `status=succeeded`). |

#### Example: Load

```go
reportRun, err := client.ReportRun(nil).Load(map[string]any{"id": "report_run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(reportRun) // the loaded record
```

#### Example: List

```go
reportRuns, err := client.ReportRun(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reportRuns) // the array of records
```

#### Example: Create

```go
result, err := client.ReportRun(nil).Create(map[string]any{
    "created": 1,
    "id": "example_id",
    "livemode": true,
    "object": "example_object",
    "parameters": map[string]any{},
    "report_type": "example_report_type",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ReportType

Create an instance: `reportType := client.ReportType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data_available_end` | `int` | Most recent time for which this Report Type is available. |
| `data_available_start` | `int` | Earliest time for which this Report Type is available. |
| `default_columns` | `[]any` | List of column names that are included by default when this Report Type gets run. |
| `id` | `string` | The [ID of the Report Type](https://docs.stripe.com/reporting/statements/api#available-report-types), such as `balance.summary.1`. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Human-readable name of the Report Type |
| `object` | `string` | String representing the object's type. |
| `updated` | `int` | When this Report Type was latest updated. |
| `version` | `int` | Version of the Report Type. |

#### Example: Load

```go
reportType, err := client.ReportType(nil).Load(map[string]any{"id": "report_type_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(reportType) // the loaded record
```

#### Example: List

```go
reportTypes, err := client.ReportType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reportTypes) // the array of records
```


### Request

Create an instance: `request := client.Request(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `payment_method` | `string` | The PaymentMethod to insert into the forwarded request. |
| `replacements` | `[]any` | The field kinds to be replaced in the forwarded request. |
| `request_context` | `any` | Context about the request from Stripe's servers to the destination endpoint. |
| `request_details` | `any` | The request that was sent to the destination endpoint. |
| `response_details` | `any` | The response that the destination endpoint returned to us. |
| `url` | `string` | The destination URL for the forwarded request. |

#### Example: Load

```go
request, err := client.Request(nil).Load(map[string]any{"id": "request_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(request) // the loaded record
```

#### Example: List

```go
requests, err := client.Request(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(requests) // the array of records
```

#### Example: Create

```go
result, err := client.Request(nil).Create(map[string]any{
    "created": 1,
    "id": "example_id",
    "livemode": true,
    "object": "example_object",
    "payment_method": "example_payment_method",
    "replacements": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Reversal

Create an instance: `reversal := client.Reversal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Amount, in cents (or local equivalent). |
| `balance_transaction` | `any` | Balance transaction that describes the impact on your account balance. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `destination_payment_refund` | `any` | Linked payment refund for the transfer reversal. |
| `id` | `string` | Unique identifier for the object. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `source_refund` | `any` | ID of the refund responsible for the transfer reversal. |
| `transfer` | `any` | ID of the transfer that was reversed. |

#### Example: Load

```go
reversal, err := client.Reversal(nil).Load(map[string]any{"id": "reversal_id", "transfer_id": "transfer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(reversal) // the loaded record
```

#### Example: List

```go
reversals, err := client.Reversal(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reversals) // the array of records
```

#### Example: Create

```go
result, err := client.Reversal(nil).Create(map[string]any{
    "transfer_id": "example_transfer_id",
    "amount": 1,
    "created": 1,
    "currency": "example_currency",
    "object": "example_object",
    "transfer": "example_transfer",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Review

Create an instance: `review := client.Review(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing_zip` | `string` | The ZIP or postal code of the card used, if applicable. |
| `charge` | `any` | The charge associated with this review. |
| `closed_reason` | `string` | The reason the review was closed, or null if it has not yet been closed. |
| `created` | `int` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `ip_address` | `string` | The IP address where the payment originated. |
| `ip_address_location` | `any` | Information related to the location of the payment. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `open` | `bool` | If `true`, the review needs action. |
| `opened_reason` | `string` | The reason the review was opened. |
| `payment_intent` | `any` | The PaymentIntent ID associated with this review, if one exists. |
| `reason` | `string` | The reason the review is currently open or closed. |
| `session` | `any` | Information related to the browsing session of the user who initiated the payment. |

#### Example: Load

```go
review, err := client.Review(nil).Load(map[string]any{"id": "review_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(review) // the loaded record
```

#### Example: List

```go
reviews, err := client.Review(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reviews) // the array of records
```

#### Example: Create

```go
result, err := client.Review(nil).Create(map[string]any{
    "id": "example_id",
    "created": 1,
    "livemode": true,
    "object": "example_object",
    "open": true,
    "opened_reason": "example_opened_reason",
    "reason": "example_reason",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ScheduledQueryRun

Create an instance: `scheduledQueryRun := client.ScheduledQueryRun(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `data_load_time` | `int` | When the query was run, Sigma contained a snapshot of your Stripe data at this time. |
| `error` | `map[string]any` |  |
| `file` | `any` | The file object representing the results of the query. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `result_available_until` | `int` | Time at which the result expires and is no longer available for download. |
| `sql` | `string` | SQL for the query. |
| `status` | `string` | The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise. |
| `title` | `string` | Title of the query. |

#### Example: Load

```go
scheduledQueryRun, err := client.ScheduledQueryRun(nil).Load(map[string]any{"id": "scheduled_query_run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(scheduledQueryRun) // the loaded record
```

#### Example: List

```go
scheduledQueryRuns, err := client.ScheduledQueryRun(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(scheduledQueryRuns) // the array of records
```


### Search

Create an instance: `search := client.Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_country` | `string` | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `string` | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `[]any` | The account tax IDs associated with the invoice. |
| `active` | `bool` | Whether the price can be used for new purchases. |
| `address` | `any` | The customer's billing address. |
| `allowed_payment_method_types` | `[]any` | The list of payment method types allowed for use with this payment. |
| `amount` | `int` | Amount intended to be collected by this payment. |
| `amount_capturable` | `int` | Amount that can be captured from this PaymentIntent. |
| `amount_captured` | `int` | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_details` | `any` |  |
| `amount_due` | `int` | Final amount due at this time for this invoice. |
| `amount_overpaid` | `int` | Amount that was overpaid on the invoice. |
| `amount_paid` | `int` | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | `int` | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_received` | `int` | Amount that this PaymentIntent collects. |
| `amount_refunded` | `int` | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `amount_remaining` | `int` | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | `int` | This is the sum of all the shipping amounts. |
| `application` | `any` | ID of the Connect application that created the charge. |
| `application_fee` | `any` | The application fee (if any) for the charge. |
| `application_fee_amount` | `int` | The amount of the application fee (if any) requested for the charge. |
| `application_fee_percent` | `float64` | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `attempt_count` | `int` | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | `bool` | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | `bool` | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_payment_methods` | `any` | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `automatic_tax` | `map[string]any` |  |
| `automatically_finalizes_at` | `int` | The time when this invoice is currently scheduled to be automatically finalized. |
| `balance` | `int` | The current balance, if any, that's stored on the customer in their default currency. |
| `balance_transaction` | `any` | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_cycle_anchor` | `int` | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `any` | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_details` | `map[string]any` |  |
| `billing_mode` | `map[string]any` | The billing mode of the subscription. |
| `billing_reason` | `string` | Indicates the reason why the invoice was created. |
| `billing_schedules` | `[]any` | Billing schedules for this subscription. |
| `billing_scheme` | `string` | Describes how to compute the price per period. |
| `billing_thresholds` | `any` | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `business_name` | `string` | The customer's business name. |
| `calculated_statement_descriptor` | `string` | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `cancel_at` | `int` | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | `bool` | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | `int` | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_details` | `any` | Details about why this subscription was cancelled |
| `cancellation_reason` | `string` | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | `string` | Controls when the funds will be captured from the customer's account. |
| `captured` | `bool` | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `cash_balance` | `any` | The current funds being held by Stripe on behalf of the customer. |
| `client_secret` | `string` | The client secret of this PaymentIntent. |
| `collection_method` | `string` | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_method` | `string` | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `confirmation_secret` | `any` | The confirmation secret associated with this invoice. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | `map[string]any` | Prices defined in each available currency option. |
| `custom_fields` | `[]any` | Custom fields displayed on the invoice. |
| `custom_unit_amount` | `any` | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `customer` | `any` | ID of the customer this charge is for if one exists. |
| `customer_account` | `string` | The ID of an Account representing a customer. |
| `customer_address` | `any` | The customer's address. |
| `customer_email` | `string` | The customer's email. |
| `customer_name` | `string` | The customer's name. |
| `customer_phone` | `string` | The customer's phone number. |
| `customer_shipping` | `any` | The customer's shipping information. |
| `customer_tax_exempt` | `string` | The customer's tax exempt status. |
| `customer_tax_ids` | `[]any` | The customer's tax IDs. |
| `days_until_due` | `int` | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | `any` | ID of the default payment method for the invoice. |
| `default_price` | `any` | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `default_source` | `any` | ID of the default payment source for the customer. |
| `default_tax_rates` | `[]any` | The tax rates applied to this invoice, if any. |
| `delinquent` | `bool` | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discount` | `any` | Describes the current discount active on the customer, if there is one. |
| `discounts` | `[]any` | The discounts applied to the invoice. |
| `disputed` | `bool` | Whether the charge has been disputed. |
| `due_date` | `int` | The date on which payment for this invoice is due. |
| `effective_at` | `int` | The date when this invoice is in effect. |
| `email` | `string` | The customer's email address. |
| `ended_at` | `int` | If the subscription has ended, the date the subscription ended. |
| `ending_balance` | `int` | Ending customer balance after the invoice is finalized. |
| `excluded_payment_method_types` | `[]any` | The list of payment method types to exclude from use with this payment. |
| `failure_balance_transaction` | `any` | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | `string` | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | `string` | Message to user further explaining reason for charge failure if available. |
| `footer` | `string` | Footer displayed on the invoice. |
| `fraud_details` | `any` | Information on fraud assessments for the charge. |
| `from_invoice` | `any` | Details of the invoice that was cloned. |
| `hooks` | `map[string]any` |  |
| `hosted_invoice_url` | `string` | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `string` | Unique identifier for the object. |
| `images` | `[]any` | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `individual_name` | `string` | The customer's individual name. |
| `invoice_credit_balance` | `map[string]any` | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_pdf` | `string` | The link to download the PDF for the invoice. |
| `invoice_prefix` | `string` | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `map[string]any` |  |
| `issuer` | `map[string]any` |  |
| `items` | `map[string]any` | List of subscription items, each with an attached price. |
| `last_finalization_error` | `any` | The error encountered during the previous attempt to finalize the invoice. |
| `last_payment_error` | `any` | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `any` | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `latest_invoice` | `any` | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `latest_revision` | `any` | The ID of the most recent non-draft revision of this invoice |
| `lines` | `map[string]any` | The individual line items that make up the invoice. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | A lookup key used to retrieve prices dynamically from a static string. |
| `managed_payments` | `any` | Settings for Managed Payments. |
| `marketing_features` | `[]any` | A list of up to 15 marketing features for this product. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | The customer's full name or business name. |
| `next_action` | `any` | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `next_invoice_sequence` | `int` | The suffix of the customer's next invoice number (for example, 0001). |
| `next_payment_attempt` | `int` | The time at which payment will next be attempted. |
| `next_pending_invoice_item_invoice` | `int` | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `nickname` | `string` | A brief description of the price, hidden from customers. |
| `number` | `string` | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | `any` | Details about whether the payment was accepted, and why. |
| `package_dimensions` | `any` | The dimensions of this product for shipping purposes. |
| `paid` | `bool` | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `parent` | `any` | The parent that generated this invoice |
| `pause_collection` | `any` | If specified, payment collection for this subscription will be paused. |
| `payment_details` | `map[string]any` |  |
| `payment_intent` | `any` | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `string` | ID of the payment method used in this charge. |
| `payment_method_configuration_details` | `any` | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_details` | `any` | Details about the payment method at the time of the transaction. |
| `payment_method_options` | `any` | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `[]any` | The list of payment method types (e.g. |
| `payment_record` | `any` | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `payment_settings` | `map[string]any` | Payment settings passed on to invoices created by the subscription. |
| `payments` | `map[string]any` | Payments for this invoice. |
| `pending_invoice_item_interval` | `any` | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `any` | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `any` | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `period_end` | `int` | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | `int` | The earliest timestamp at which invoice items can be associated with this invoice. |
| `phone` | `string` | The customer's phone number. |
| `post_payment_credit_notes_amount` | `int` | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | `int` | Total amount of all pre-payment credit notes issued for this invoice. |
| `preferred_locales` | `[]any` | The customer's preferred locales (languages), ordered by preference. |
| `presentment_details` | `map[string]any` |  |
| `processing` | `any` | If present, this property tells you about the processing state of the payment. |
| `product` | `any` | The ID of the product this price is associated with. |
| `radar_options` | `map[string]any` | Options to configure Radar. |
| `receipt_email` | `string` | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `string` | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `string` | This is the URL to view the receipt for this charge. |
| `recurring` | `any` | The recurring components of a price such as `interval` and `usage_type`. |
| `refunded` | `bool` | Whether the charge has been fully refunded. |
| `refunds` | `map[string]any` | A list of refunds that have been applied to the charge. |
| `rendering` | `any` | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `review` | `any` | ID of the review associated with this charge if one exists. |
| `schedule` | `any` | The schedule attached to the subscription |
| `setup_future_usage` | `string` | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `shippable` | `bool` | Whether this product is shipped (i.e., physical goods). |
| `shipping` | `any` | Shipping information for the charge. |
| `shipping_cost` | `any` | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | `any` | Shipping details for the invoice. |
| `source_transfer` | `any` | The transfer ID which created this charge. |
| `sources` | `map[string]any` | The customer's payment sources, if any. |
| `start_date` | `int` | Date when the subscription was first created. |
| `starting_balance` | `int` | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | `string` | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | `string` | Provides information about a card charge. |
| `status` | `string` | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `status_details` | `map[string]any` | Describes changes to the subscription's status. |
| `status_transitions` | `map[string]any` |  |
| `subscriptions` | `map[string]any` | The customer's current subscriptions, if any. |
| `subtotal` | `int` | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `int` | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `tax` | `map[string]any` |  |
| `tax_behavior` | `string` | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tax_code` | `any` | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `any` | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `tax_exempt` | `string` | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `map[string]any` | The customer's tax IDs. |
| `test_clock` | `any` | ID of the test clock that this customer belongs to. |
| `threshold_reason` | `map[string]any` |  |
| `tiers` | `[]any` | Each element represents a pricing tier. |
| `tiers_mode` | `string` | Defines if the tiering price should be `graduated` or `volume` based. |
| `total` | `int` | Total after discounts and taxes. |
| `total_discount_amounts` | `[]any` | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `int` | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `[]any` | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `[]any` | The aggregate tax information of all line items. |
| `transfer` | `any` | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `transfer_data` | `any` | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `transfer_group` | `string` | A string that identifies this transaction as part of a group. |
| `transform_quantity` | `any` | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_end` | `int` | If the subscription has a trial, the end of that trial. |
| `trial_settings` | `any` | Settings related to subscription trials. |
| `trial_start` | `int` | If the subscription has a trial, the beginning of that trial. |
| `type` | `string` | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | `int` | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | `string` | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `unit_label` | `string` | A label that represents units of this product. |
| `updated` | `int` | Time at which the object was last updated. |
| `url` | `string` | A URL of a publicly-accessible webpage for this product. |
| `webhooks_delivered_at` | `int` | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

#### Example: List

```go
searchs, err := client.Search(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(searchs) // the array of records
```


### Secret

Create an instance: `secret := client.Secret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `deleted` | `bool` | If true, indicates that this secret has been deleted |
| `expires_at` | `int` | The Unix timestamp for the expiry time of the secret, after which the secret deletes. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `name` | `string` | A name for the secret that's unique within the scope. |
| `object` | `string` | String representing the object's type. |
| `payload` | `string` | The plaintext secret value to be stored. |
| `scope` | `map[string]any` |  |
| `type` | `string` | The secret scope type. |
| `user` | `string` | The user ID, if type is set to "user" |

#### Example: Load

```go
secret, err := client.Secret(nil).Load(map[string]any{"name": "name", "scope": map[string]any{}}, nil)
if err != nil {
    panic(err)
}
fmt.Println(secret) // the loaded record
```

#### Example: List

```go
secrets, err := client.Secret(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(secrets) // the array of records
```

#### Example: Create

```go
result, err := client.Secret(nil).Create(map[string]any{
    "created": 1,
    "id": "example_id",
    "livemode": true,
    "name": "example_name",
    "object": "example_object",
    "scope": map[string]any{},
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Session

Create an instance: `session := client.Session(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_holder` | `any` | The account holder for whom accounts are collected in this session. |
| `accounts` | `map[string]any` | The accounts that were collected as part of this Session. |
| `adaptive_pricing` | `any` | Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing). |
| `after_expiration` | `any` | When set, provides configuration for actions to take if this Checkout Session expires. |
| `allow_promotion_codes` | `bool` | Enables user redeemable promotion codes. |
| `allowed_payment_method_types` | `[]any` | A list of the types of payment methods (e.g., `card`) this Checkout Session can accept. |
| `amount_subtotal` | `int` | Total of all items before discounts or taxes are applied. |
| `amount_total` | `int` | Total of all items after discounts and taxes are applied. |
| `automatic_tax` | `map[string]any` |  |
| `bank_account_token` | `map[string]any` | Tokenization is the process Stripe uses to collect sensitive card or bank account details, or personally identifiable information (PII), directly from your customers in a secure manner. |
| `billing_address_collection` | `string` | Describes whether Checkout should collect the customer's billing address. |
| `branding_settings` | `map[string]any` |  |
| `cancel_url` | `string` | If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. |
| `client_reference_id` | `string` | A unique string to reference the Checkout Session. |
| `client_secret` | `string` | The client secret of your Checkout Session. |
| `collected_information` | `any` | Information about the customer collected within the Checkout Session. |
| `configuration` | `any` | The configuration used by this session, describing the features available. |
| `consent` | `any` | Results of `consent_collection` for this session. |
| `consent_collection` | `any` | When set, provides configuration for the Checkout Session to gather active consent from customers. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_conversion` | `any` | Currency conversion details for [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing) sessions created before 2025-03-31. |
| `custom_fields` | `[]any` | Collect additional information from your customer using custom fields. |
| `custom_text` | `map[string]any` |  |
| `customer` | `any` | The ID of the customer for this Session. |
| `customer_account` | `string` | The ID of the account for this Session. |
| `customer_creation` | `string` | Configure whether a Checkout Session creates a Customer when the Checkout Session completes. |
| `customer_details` | `any` | The customer details including the customer's tax exempt status and the customer's tax IDs. |
| `customer_email` | `string` | If provided, this value will be used when the Customer object is created. |
| `discounts` | `[]any` | List of coupons and promotion codes attached to the Checkout Session. |
| `excluded_payment_method_types` | `[]any` | A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session. |
| `expires_at` | `int` | The timestamp at which the Checkout Session will expire. |
| `filters` | `map[string]any` |  |
| `flow` | `any` | Information about a specific flow for the customer to go through. |
| `id` | `string` | Unique identifier for the object. |
| `integration_identifier` | `string` | The integration identifier for this Checkout Session. |
| `invoice` | `any` | ID of the invoice created by the Checkout Session, if it exists. |
| `invoice_creation` | `any` | Details on the state of invoice creation for the Checkout Session. |
| `limits` | `map[string]any` |  |
| `line_items` | `map[string]any` | The line items purchased by the customer. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `locale` | `string` | The IETF language tag of the locale Checkout is displayed in. |
| `managed_payments` | `any` | Settings for Managed Payments for this Checkout Session and resulting [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/object). |
| `manual_entry` | `map[string]any` |  |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mode` | `string` | The mode of the Checkout Session. |
| `name_collection` | `map[string]any` |  |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `string` | The account for which the session was created on behalf of. |
| `optional_items` | `[]any` | The optional items presented to the customer at checkout. |
| `origin_context` | `string` | Where the user is coming from. |
| `payment_intent` | `any` | The ID of the PaymentIntent for Checkout Sessions in `payment` mode. |
| `payment_link` | `any` | The ID of the Payment Link that created this Session. |
| `payment_method_collection` | `string` | Configure whether a Checkout Session should collect a payment method for sessions with mode `payment`. |
| `payment_method_configuration_details` | `any` | Information about the payment method configuration used for this Checkout session if using dynamic payment methods. |
| `payment_method_options` | `any` | Payment-method-specific configuration for the PaymentIntent or SetupIntent of this CheckoutSession. |
| `payment_method_types` | `[]any` | A list of the types of payment methods (e.g. |
| `payment_status` | `string` | The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`. |
| `permissions` | `any` | This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object. |
| `phone_number_collection` | `map[string]any` |  |
| `prefetch` | `[]any` | Data features requested to be retrieved upon account creation. |
| `presentment_details` | `map[string]any` |  |
| `recovered_from` | `string` | The ID of the original expired Checkout Session that triggered the recovery flow. |
| `redirect_on_completion` | `string` | This parameter applies to `ui_mode: embedded_page`. |
| `return_url` | `string` | Applies to Checkout Sessions with `ui_mode: embedded_page` or `ui_mode: elements`. |
| `saved_payment_method_options` | `any` | Controls saved payment method settings for the session. |
| `setup_intent` | `any` | The ID of the SetupIntent for Checkout Sessions in `setup` mode. |
| `shipping_address_collection` | `any` | When set, provides configuration for Checkout to collect a shipping address from a customer. |
| `shipping_cost` | `any` | The details of the customer cost of shipping, including the customer chosen ShippingRate. |
| `shipping_options` | `[]any` | The shipping rate options applied to this Session. |
| `status` | `string` | The status of the Checkout Session, one of `open`, `complete`, or `expired`. |
| `submit_type` | `string` | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. |
| `subscription` | `any` | The ID of the [Subscription](https://docs.stripe.com/api/subscriptions) for Checkout Sessions in `subscription` mode. |
| `success_url` | `string` | The URL the customer will be directed to after the payment or subscription creation is successful. |
| `tax_id_collection` | `map[string]any` |  |
| `total_details` | `int` | Tax and discount details for the computed total amount. |
| `ui_mode` | `string` | The UI mode of the Session. |
| `url` | `string` | The URL to the Checkout Session. |
| `wallet_options` | `any` | Wallet-specific configuration for this Checkout Session. |

#### Example: Load

```go
session, err := client.Session(nil).Load(map[string]any{"session": "session"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(session) // the loaded record
```

#### Example: List

```go
sessions, err := client.Session(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sessions) // the array of records
```

#### Example: Create

```go
result, err := client.Session(nil).Create(map[string]any{
    "id": "example_id",
    "accounts": map[string]any{},
    "automatic_tax": map[string]any{},
    "bank_account_token": map[string]any{},
    "branding_settings": map[string]any{},
    "configuration": "example_configuration",
    "created": 1,
    "custom_fields": []any{},
    "custom_text": map[string]any{},
    "expires_at": 1,
    "limits": map[string]any{},
    "line_items": map[string]any{},
    "livemode": true,
    "mode": "example_mode",
    "object": "example_object",
    "payment_method_types": []any{},
    "payment_status": "example_payment_status",
    "phone_number_collection": map[string]any{},
    "presentment_details": map[string]any{},
    "shipping_options": []any{},
    "tax_id_collection": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Setting

Create an instance: `setting := client.Setting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `defaults` | `map[string]any` |  |
| `head_office` | `any` | The place where your business is located. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | The status of the Tax `Settings`. |
| `status_details` | `map[string]any` |  |

#### Example: Load

```go
setting, err := client.Setting(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(setting) // the loaded record
```

#### Example: Create

```go
result, err := client.Setting(nil).Create(map[string]any{
    "defaults": map[string]any{},
    "livemode": true,
    "object": "example_object",
    "status": "example_status",
    "status_details": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Settlement

Create an instance: `settlement := client.Settlement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
settlement, err := client.Settlement(nil).Load(map[string]any{"id": "settlement_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(settlement) // the loaded record
```

#### Example: Create

```go
result, err := client.Settlement(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SetupAttempt

Create an instance: `setupAttempt := client.SetupAttempt(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `any` | The value of [application](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation. |
| `attach_to_self` | `bool` | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `created` | `int` | Time at which the object was created. |
| `customer` | `any` | The value of [customer](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation. |
| `customer_account` | `string` | The value of [customer_account](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer_account) on the SetupIntent at the time of this confirmation. |
| `flow_directions` | `[]any` | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The value of [on_behalf_of](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation. |
| `payment_method` | `any` | ID of the payment method used with this SetupAttempt. |
| `payment_method_details` | `map[string]any` |  |
| `setup_error` | `any` | The error encountered during this attempt to confirm the SetupIntent, if any. |
| `setup_intent` | `any` | ID of the SetupIntent that this attempt belongs to. |
| `status` | `string` | Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`. |
| `usage` | `string` | The value of [usage](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`. |

#### Example: List

```go
setupAttempts, err := client.SetupAttempt(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(setupAttempts) // the array of records
```


### SetupIntent

Create an instance: `setupIntent := client.SetupIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_payment_method_types` | `[]any` | The list of payment method types to allow for this SetupIntent. |
| `application` | `any` | ID of the Connect application that created the SetupIntent. |
| `attach_to_self` | `bool` | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `automatic_payment_methods` | `any` | Settings for dynamic payment methods compatible with this Setup Intent |
| `cancellation_reason` | `string` | Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`. |
| `client_secret` | `string` | The client secret of this SetupIntent. |
| `created` | `int` | Time at which the object was created. |
| `customer` | `any` | ID of the Customer this SetupIntent belongs to, if one exists. |
| `customer_account` | `string` | ID of the Account this SetupIntent belongs to, if one exists. |
| `description` | `string` | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | `[]any` | Payment method types that are excluded from this SetupIntent. |
| `flow_directions` | `[]any` | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `string` | Unique identifier for the object. |
| `last_setup_error` | `any` | The error encountered in the previous SetupIntent confirmation. |
| `latest_attempt` | `any` | The most recent SetupAttempt for this SetupIntent. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` |  |
| `mandate` | `any` | ID of the multi use Mandate generated by the SetupIntent. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `any` | If present, this property tells you what actions you need to take in order for your customer to continue payment setup. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account (if any) for which the setup is intended. |
| `payment_method` | `any` | ID of the payment method used with this SetupIntent. |
| `payment_method_configuration_details` | `any` | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this Setup Intent. |
| `payment_method_options` | `any` | Payment method-specific configuration for this SetupIntent. |
| `payment_method_types` | `[]any` | The list of payment method types (e.g. |
| `single_use_mandate` | `any` | ID of the single_use Mandate generated by the SetupIntent. |
| `status` | `string` | [Status](https://docs.stripe.com/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`. |
| `usage` | `string` | Indicates how the payment method is intended to be used in the future. |

#### Example: Load

```go
setupIntent, err := client.SetupIntent(nil).Load(map[string]any{"id": "setup_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(setupIntent) // the loaded record
```

#### Example: List

```go
setupIntents, err := client.SetupIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(setupIntents) // the array of records
```

#### Example: Create

```go
result, err := client.SetupIntent(nil).Create(map[string]any{
    "id": "example_id",
    "created": 1,
    "livemode": true,
    "object": "example_object",
    "payment_method_types": []any{},
    "status": "example_status",
    "usage": "example_usage",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ShippingRate

Create an instance: `shippingRate := client.ShippingRate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the shipping rate can be used for new purchases. |
| `created` | `int` | Time at which the object was created. |
| `delivery_estimate` | `any` | The estimated range for how long shipping will take, meant to be displayable to the customer. |
| `display_name` | `string` | The name of the shipping rate, meant to be displayable to the customer. |
| `fixed_amount` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `tax_behavior` | `string` | Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. |
| `tax_code` | `any` | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `type` | `string` | The type of calculation to use on the shipping rate. |

#### Example: Load

```go
shippingRate, err := client.ShippingRate(nil).Load(map[string]any{"id": "shipping_rate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(shippingRate) // the loaded record
```

#### Example: List

```go
shippingRates, err := client.ShippingRate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(shippingRates) // the array of records
```

#### Example: Create

```go
result, err := client.ShippingRate(nil).Create(map[string]any{
    "id": "example_id",
    "active": true,
    "created": 1,
    "fixed_amount": map[string]any{},
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SigmaApiQuery

Create an instance: `sigmaApiQuery := client.SigmaApiQuery(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `name` | `string` | The name of the query. |
| `object` | `string` | String representing the object's type. |
| `sql` | `string` | The sql statement for the query. |

#### Example: Create

```go
result, err := client.SigmaApiQuery(nil).Create(map[string]any{
    "id": "example_id",
    "created": 1,
    "livemode": true,
    "name": "example_name",
    "object": "example_object",
    "sql": "example_sql",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Source

Create an instance: `source := client.Source(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ach_credit_transfer` | `map[string]any` |  |
| `ach_debit` | `map[string]any` |  |
| `acss_debit` | `map[string]any` |  |
| `alipay` | `map[string]any` |  |
| `allow_redisplay` | `bool` | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `amount` | `int` | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. |
| `au_becs_debit` | `map[string]any` |  |
| `bancontact` | `map[string]any` |  |
| `card` | `map[string]any` |  |
| `card_present` | `map[string]any` |  |
| `client_secret` | `string` | The client secret of the source. |
| `code_verification` | `map[string]any` |  |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. |
| `customer` | `string` | The ID of the customer to which this source is attached. |
| `data` | `[]any` | Details about each object. |
| `eps` | `map[string]any` |  |
| `flow` | `string` | The authentication `flow` of the source. |
| `giropay` | `map[string]any` |  |
| `has_more` | `bool` | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | Unique identifier for the object. |
| `ideal` | `map[string]any` |  |
| `klarna` | `map[string]any` |  |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `multibanco` | `map[string]any` |  |
| `object` | `string` | String representing the object's type. |
| `owner` | `any` | Information about the owner of the payment instrument that may be used or required by particular source types. |
| `p24` | `map[string]any` |  |
| `receiver` | `map[string]any` |  |
| `redirect` | `map[string]any` |  |
| `sepa_debit` | `map[string]any` |  |
| `sofort` | `map[string]any` |  |
| `source_order` | `map[string]any` |  |
| `statement_descriptor` | `string` | Extra information about a source. |
| `status` | `string` | The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. |
| `three_d_secure` | `map[string]any` |  |
| `type` | `string` | The `type` of the source. |
| `url` | `string` | The URL where this list can be accessed. |
| `usage` | `string` | Either `reusable` or `single_use`. |
| `wechat` | `map[string]any` |  |

#### Example: Load

```go
source, err := client.Source(nil).Load(map[string]any{"id": "source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(source) // the loaded record
```

#### Example: List

```go
sources, err := client.Source(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sources) // the array of records
```

#### Example: Create

```go
result, err := client.Source(nil).Create(map[string]any{
    "id": "example_id",
    "client_secret": "example_client_secret",
    "code_verification": map[string]any{},
    "created": 1,
    "data": []any{},
    "flow": "example_flow",
    "has_more": true,
    "livemode": true,
    "object": "example_object",
    "receiver": map[string]any{},
    "redirect": map[string]any{},
    "source_order": map[string]any{},
    "status": "example_status",
    "type": "example_type",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SourceMandateNotification

Create an instance: `sourceMandateNotification := client.SourceMandateNotification(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acss_debit` | `map[string]any` |  |
| `amount` | `int` | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. |
| `bacs_debit` | `map[string]any` |  |
| `created` | `int` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `reason` | `string` | The reason of the mandate notification. |
| `sepa_debit` | `map[string]any` |  |
| `source` | `map[string]any` | `Source` objects allow you to accept a variety of payment methods. |
| `status` | `string` | The status of the mandate notification. |
| `type` | `string` | The type of source this mandate notification is attached to. |

#### Example: Load

```go
sourceMandateNotification, err := client.SourceMandateNotification(nil).Load(map[string]any{"id": "source_mandate_notification_id", "source_id": "source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(sourceMandateNotification) // the loaded record
```


### SourceTransaction

Create an instance: `sourceTransaction := client.SourceTransaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ach_credit_transfer` | `map[string]any` |  |
| `amount` | `int` | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver. |
| `chf_credit_transfer` | `map[string]any` |  |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `gbp_credit_transfer` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `paper_check` | `map[string]any` |  |
| `sepa_credit_transfer` | `map[string]any` |  |
| `source` | `string` | The ID of the source this transaction is attached to. |
| `status` | `string` | The status of the transaction, one of `succeeded`, `pending`, or `failed`. |
| `type` | `string` | The type of source this transaction is attached to. |

#### Example: Load

```go
sourceTransaction, err := client.SourceTransaction(nil).Load(map[string]any{"id": "source_transaction_id", "source_id": "source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(sourceTransaction) // the loaded record
```

#### Example: List

```go
sourceTransactions, err := client.SourceTransaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sourceTransactions) // the array of records
```


### Subscription

Create an instance: `subscription := client.Subscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `any` | ID of the Connect Application that created the subscription. |
| `application_fee_percent` | `float64` | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `map[string]any` |  |
| `billing_cycle_anchor` | `int` | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `any` | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_mode` | `map[string]any` | The billing mode of the subscription. |
| `billing_schedules` | `[]any` | Billing schedules for this subscription. |
| `billing_thresholds` | `any` | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `cancel_at` | `int` | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | `bool` | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | `int` | If the subscription has been canceled, the date of that cancellation. |
| `cancellation_details` | `any` | Details about why this subscription was cancelled |
| `collection_method` | `string` | Either `charge_automatically`, or `send_invoice`. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | ID of the customer who owns the subscription. |
| `customer_account` | `string` | ID of the account representing the customer who owns the subscription. |
| `days_until_due` | `int` | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | `any` | ID of the default payment method for the subscription. |
| `default_source` | `any` | ID of the default payment source for the subscription. |
| `default_tax_rates` | `[]any` | The tax rates that will apply to any subscription item that does not have `tax_rates` set. |
| `description` | `string` | The subscription's description, meant to be displayable to the customer. |
| `discounts` | `[]any` | The discounts applied to the subscription. |
| `ended_at` | `int` | If the subscription has ended, the date the subscription ended. |
| `id` | `string` | Unique identifier for the object. |
| `invoice_settings` | `map[string]any` |  |
| `items` | `map[string]any` | List of subscription items, each with an attached price. |
| `latest_invoice` | `any` | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | Settings for Managed Payments for this Subscription and resulting [Invoices](/api/invoices/object) and [PaymentIntents](/api/payment_intents/object). |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_pending_invoice_item_invoice` | `int` | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account (if any) the charge was made on behalf of for charges associated with this subscription. |
| `pause_collection` | `any` | If specified, payment collection for this subscription will be paused. |
| `payment_settings` | `any` | Payment settings passed on to invoices created by the subscription. |
| `pending_invoice_item_interval` | `any` | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `any` | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `any` | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `presentment_details` | `map[string]any` |  |
| `schedule` | `any` | The schedule attached to the subscription |
| `start_date` | `int` | Date when the subscription was first created. |
| `status` | `string` | Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`. |
| `status_details` | `map[string]any` | Describes changes to the subscription's status. |
| `test_clock` | `any` | ID of the test clock this subscription belongs to. |
| `transfer_data` | `any` | The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices. |
| `trial_end` | `int` | If the subscription has a trial, the end of that trial. |
| `trial_settings` | `any` | Settings related to subscription trials. |
| `trial_start` | `int` | If the subscription has a trial, the beginning of that trial. |

#### Example: Load

```go
subscription, err := client.Subscription(nil).Load(map[string]any{"id": "subscription_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscription) // the loaded record
```

#### Example: List

```go
subscriptions, err := client.Subscription(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptions) // the array of records
```

#### Example: Create

```go
result, err := client.Subscription(nil).Create(map[string]any{
    "id": "example_id",
    "automatic_tax": map[string]any{},
    "billing_cycle_anchor": 1,
    "billing_mode": map[string]any{},
    "billing_schedules": []any{},
    "cancel_at_period_end": true,
    "collection_method": "example_collection_method",
    "created": 1,
    "currency": "example_currency",
    "customer": "example_customer",
    "discounts": []any{},
    "invoice_settings": map[string]any{},
    "items": map[string]any{},
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "presentment_details": map[string]any{},
    "start_date": 1,
    "status": "example_status",
    "status_details": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionItem

Create an instance: `subscriptionItem := client.SubscriptionItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billed_until` | `int` | The time period the subscription item has been billed for. |
| `billing_thresholds` | `any` | Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period |
| `created` | `int` | Time at which the object was created. |
| `current_period_end` | `int` | The end time of this subscription item's current billing period. |
| `current_period_start` | `int` | The start time of this subscription item's current billing period. |
| `current_trial` | `any` | The current trial that is applied to this subscription item. |
| `discounts` | `[]any` | The discounts applied to the subscription item. |
| `id` | `string` | Unique identifier for the object. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `price` | `map[string]any` | Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products. |
| `quantity` | `int` | The [quantity](https://docs.stripe.com/subscriptions/quantities) of the plan to which the customer should be subscribed. |
| `subscription` | `string` | The `subscription` this `subscription_item` belongs to. |
| `tax_rates` | `[]any` | The tax rates which apply to this `subscription_item`. |

#### Example: Load

```go
subscriptionItem, err := client.SubscriptionItem(nil).Load(map[string]any{"id": "subscription_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionItem) // the loaded record
```

#### Example: List

```go
subscriptionItems, err := client.SubscriptionItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionItems) // the array of records
```

#### Example: Create

```go
result, err := client.SubscriptionItem(nil).Create(map[string]any{
    "id": "example_id",
    "created": 1,
    "current_period_end": 1,
    "current_period_start": 1,
    "discounts": []any{},
    "metadata": map[string]any{},
    "object": "example_object",
    "price": map[string]any{},
    "subscription": "example_subscription",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionSchedule

Create an instance: `subscriptionSchedule := client.SubscriptionSchedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `any` | ID of the Connect Application that created the schedule. |
| `billing_mode` | `map[string]any` | The billing mode of the subscription. |
| `canceled_at` | `int` | Time at which the subscription schedule was canceled. |
| `completed_at` | `int` | Time at which the subscription schedule was completed. |
| `created` | `int` | Time at which the object was created. |
| `current_phase` | `any` | Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`. |
| `customer` | `any` | ID of the customer who owns the subscription schedule. |
| `customer_account` | `string` | ID of the account who owns the subscription schedule. |
| `default_settings` | `map[string]any` |  |
| `end_behavior` | `string` | Behavior of the subscription schedule and underlying subscription when it ends. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `pause_schedules` | `[]any` | The pause schedules for this subscription schedule. |
| `phases` | `[]any` | Configuration for the subscription schedule's phases. |
| `released_at` | `int` | Time at which the subscription schedule was released. |
| `released_subscription` | `string` | ID of the subscription once managed by the subscription schedule (if it is released). |
| `status` | `string` | The present status of the subscription schedule. |
| `subscription` | `any` | ID of the subscription managed by the subscription schedule. |
| `test_clock` | `any` | ID of the test clock this subscription schedule belongs to. |

#### Example: Load

```go
subscriptionSchedule, err := client.SubscriptionSchedule(nil).Load(map[string]any{"id": "subscription_schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionSchedule) // the loaded record
```

#### Example: List

```go
subscriptionSchedules, err := client.SubscriptionSchedule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionSchedules) // the array of records
```

#### Example: Create

```go
result, err := client.SubscriptionSchedule(nil).Create(map[string]any{
    "id": "example_id",
    "billing_mode": map[string]any{},
    "created": 1,
    "customer": "example_customer",
    "default_settings": map[string]any{},
    "end_behavior": "example_end_behavior",
    "livemode": true,
    "object": "example_object",
    "phases": []any{},
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Supplier

Create an instance: `supplier := client.Supplier(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the object. |
| `info_url` | `string` | Link to a webpage to learn more about the supplier. |
| `livemode` | `bool` | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `locations` | `[]any` | The locations in which this supplier operates. |
| `name` | `string` | Name of this carbon removal supplier. |
| `object` | `string` | String representing the object’s type. |
| `removal_pathway` | `string` | The scientific pathway used for carbon removal. |

#### Example: Load

```go
supplier, err := client.Supplier(nil).Load(map[string]any{"id": "supplier_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(supplier) // the loaded record
```

#### Example: List

```go
suppliers, err := client.Supplier(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(suppliers) // the array of records
```


### TaxCode

Create an instance: `taxCode := client.TaxCode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | A detailed description of which types of products the tax code represents. |
| `id` | `string` | Unique identifier for the object. |
| `name` | `string` | A short name for the tax code. |
| `object` | `string` | String representing the object's type. |
| `requirements` | `any` | An object that describes more information about the tax location required for this tax code. |

#### Example: Load

```go
taxCode, err := client.TaxCode(nil).Load(map[string]any{"id": "tax_code_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(taxCode) // the loaded record
```

#### Example: List

```go
taxCodes, err := client.TaxCode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(taxCodes) // the array of records
```


### TaxId

Create an instance: `taxId := client.TaxId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country` | `string` | Two-letter ISO code representing the country of the tax ID. |
| `created` | `int` | Time at which the object was created. |
| `customer` | `any` | ID of the customer. |
| `customer_account` | `string` | ID of the Account representing the customer. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `owner` | `any` | The account or customer the tax ID belongs to. |
| `type` | `string` | Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`,… |
| `value` | `string` | Value of the tax ID. |
| `verification` | `any` | Tax ID verification information. |

#### Example: Load

```go
taxId, err := client.TaxId(nil).Load(map[string]any{"id": "tax_id_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(taxId) // the loaded record
```

#### Example: List

```go
taxIds, err := client.TaxId(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(taxIds) // the array of records
```

#### Example: Create

```go
result, err := client.TaxId(nil).Create(map[string]any{
    "created": 1,
    "id": "example_id",
    "livemode": true,
    "object": "example_object",
    "type": "example_type",
    "value": "example_value",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TaxRate

Create an instance: `taxRate := client.TaxRate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Defaults to `true`. |
| `country` | `string` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | `int` | Time at which the object was created. |
| `description` | `string` | An arbitrary string attached to the tax rate for your internal use only. |
| `display_name` | `string` | The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page. |
| `effective_percentage` | `float64` | Actual/effective tax rate percentage out of 100. |
| `flat_amount` | `any` | The amount of the tax rate when the `rate_type` is `flat_amount`. |
| `id` | `string` | Unique identifier for the object. |
| `inclusive` | `bool` | This specifies if the tax rate is inclusive or exclusive. |
| `jurisdiction` | `string` | The jurisdiction for the tax rate. |
| `jurisdiction_level` | `string` | The level of the jurisdiction that imposes this tax rate. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `percentage` | `float64` | Tax rate percentage out of 100. |
| `rate_type` | `string` | Indicates the type of tax rate applied to the taxable amount. |
| `state` | `string` | [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. |
| `tax_type` | `string` | The high-level tax type, such as `vat` or `sales_tax`. |

#### Example: Load

```go
taxRate, err := client.TaxRate(nil).Load(map[string]any{"id": "tax_rate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(taxRate) // the loaded record
```

#### Example: List

```go
taxRates, err := client.TaxRate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(taxRates) // the array of records
```

#### Example: Create

```go
result, err := client.TaxRate(nil).Create(map[string]any{
    "id": "example_id",
    "active": true,
    "created": 1,
    "display_name": "example_display_name",
    "inclusive": true,
    "livemode": true,
    "object": "example_object",
    "percentage": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TestClock

Create an instance: `testClock := client.TestClock(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `advancing` | `map[string]any` |  |
| `created` | `int` | Time at which the object was created. |
| `deletes_after` | `int` | Time at which this clock is scheduled to auto delete. |
| `frozen_time` | `int` | Time at which all objects belonging to this clock are frozen. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `name` | `string` | The custom name supplied at creation. |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | The status of the Test Clock. |
| `status_details` | `map[string]any` |  |

#### Example: Load

```go
testClock, err := client.TestClock(nil).Load(map[string]any{"id": "test_clock_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(testClock) // the loaded record
```

#### Example: List

```go
testClocks, err := client.TestClock(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(testClocks) // the array of records
```

#### Example: Create

```go
result, err := client.TestClock(nil).Create(map[string]any{
    "advancing": map[string]any{},
    "created": 1,
    "deletes_after": 1,
    "frozen_time": 1,
    "id": "example_id",
    "livemode": true,
    "object": "example_object",
    "status": "example_status",
    "status_details": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Token

Create an instance: `token := client.Token(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bank_account` | `map[string]any` | These bank accounts are payment methods on `Customer` objects. |
| `card` | `any` | Card associated with this token. |
| `client_ip` | `string` | IP address of the client that generates the token. |
| `created` | `int` | Time at which the object was created. |
| `device_fingerprint` | `string` | The hashed ID derived from the device ID from the card network associated with the token. |
| `id` | `string` | Unique identifier for the object. |
| `last4` | `string` | The last four digits of the token. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `network` | `string` | The token service provider / card network associated with the token. |
| `network_data` | `map[string]any` |  |
| `network_updated_at` | `int` | Time at which the token was last updated by the card network. |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | The usage state of the token. |
| `type` | `string` | Type of the token: `account`, `bank_account`, `card`, or `pii`. |
| `used` | `bool` | Determines if you have already used this token (you can only use tokens once). |
| `wallet_provider` | `string` | The digital wallet for this token, if one was used. |

#### Example: Load

```go
token, err := client.Token(nil).Load(map[string]any{"id": "token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(token) // the loaded record
```

#### Example: List

```go
tokens, err := client.Token(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tokens) // the array of records
```

#### Example: Create

```go
result, err := client.Token(nil).Create(map[string]any{
    "id": "example_id",
    "bank_account": map[string]any{},
    "card": "example_card",
    "created": 1,
    "livemode": true,
    "network": "example_network",
    "network_data": map[string]any{},
    "network_updated_at": 1,
    "object": "example_object",
    "status": "example_status",
    "type": "example_type",
    "used": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Topup

Create an instance: `topup := client.Topup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Amount transferred. |
| `balance_transaction` | `any` | ID of the balance transaction that describes the impact of this top-up on your account balance. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `expected_availability_date` | `int` | Date the funds are expected to arrive in your Stripe account for payouts. |
| `failure_code` | `string` | Error code explaining reason for top-up failure if available (see [the errors section](/api/errors) for a list of codes). |
| `failure_message` | `string` | Message to user further explaining reason for top-up failure if available. |
| `id` | `string` | Unique identifier for the object. |
| `initiated_by` | `string` | Indicates whether the top-up was initiated by Stripe or by the user. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `payment_method` | `any` | The ID of a PaymentMethod representing the payment method used for the top-up. |
| `payment_method_options` | `any` | Payment-method-specific configuration for this top-up. |
| `source` | `any` | The source field is deprecated. |
| `statement_descriptor` | `string` | Extra information about a top-up. |
| `status` | `string` | The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`. |
| `transfer_group` | `string` | A string that identifies this top-up as part of a group. |

#### Example: Load

```go
topup, err := client.Topup(nil).Load(map[string]any{"id": "topup_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(topup) // the loaded record
```

#### Example: List

```go
topups, err := client.Topup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(topups) // the array of records
```

#### Example: Create

```go
result, err := client.Topup(nil).Create(map[string]any{
    "id": "example_id",
    "amount": 1,
    "created": 1,
    "currency": "example_currency",
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Transaction

Create an instance: `transaction := client.Transaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | The ID of the Financial Connections Account this transaction belongs to. |
| `amount` | `int` | The transaction amount, which will be reflected in your balance. |
| `amount_details` | `any` | Detailed breakdown of amount components. |
| `authorization` | `any` | The `Authorization` object that led to this transaction. |
| `balance_impact` | `map[string]any` | Change to a FinancialAccount's balance |
| `balance_transaction` | `any` | ID of the [balance transaction](https://docs.stripe.com/api/balance_transactions) associated with this transaction. |
| `card` | `any` | The card used to make this transaction. |
| `cardholder` | `any` | The cardholder to whom this transaction belongs. |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `map[string]any` |  |
| `description` | `string` | An arbitrary string attached to the object. |
| `dispute` | `any` | If you've disputed the transaction, the ID of the dispute. |
| `entries` | `map[string]any` | A list of TransactionEntries that are part of this Transaction. |
| `financial_account` | `string` | The FinancialAccount associated with this object. |
| `flow` | `string` | ID of the flow that created the Transaction. |
| `flow_details` | `any` | Details of the flow that created the Transaction. |
| `flow_type` | `string` | Type of the flow that created the Transaction. |
| `id` | `string` | Unique identifier for the object. |
| `line_items` | `map[string]any` | The tax collected or refunded, by line item. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `int` | The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `merchant_currency` | `string` | The currency with which the merchant is taking payment. |
| `merchant_data` | `map[string]any` |  |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `any` | Details about the transaction, such as processing dates, set by the card network. |
| `object` | `string` | String representing the object's type. |
| `posted_at` | `int` | Time at which this transaction posted. |
| `purchase_details` | `any` | Additional purchase information that is optionally provided by the merchant. |
| `reference` | `string` | A custom unique identifier, such as 'myOrder_123'. |
| `reversal` | `any` | If `type=reversal`, contains information about what was reversed. |
| `ship_from_details` | `any` | The details of the ship from location, such as the address. |
| `shipping_cost` | `any` | The shipping cost details for the transaction. |
| `status` | `string` | Status of the Transaction. |
| `status_transitions` | `map[string]any` |  |
| `tax_date` | `int` | The calculation uses the tax rules and rates that are in effect at this timestamp. |
| `token` | `string` | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this transaction. |
| `transacted_at` | `int` | Time at which the transaction was transacted. |
| `transaction_refresh` | `string` | The token of the transaction refresh that last updated or created this transaction. |
| `treasury` | `any` | [Treasury](https://docs.stripe.com/api/treasury) details related to this transaction if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts |
| `type` | `string` | The nature of the transaction. |
| `updated` | `int` | Time at which the object was last updated. |
| `void_at` | `int` | Time at which this transaction was voided. |
| `wallet` | `string` | The digital wallet used for this transaction. |

#### Example: Load

```go
transaction, err := client.Transaction(nil).Load(map[string]any{"id": "transaction_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(transaction) // the loaded record
```

#### Example: List

```go
transactions, err := client.Transaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(transactions) // the array of records
```

#### Example: Create

```go
result, err := client.Transaction(nil).Create(map[string]any{
    "id": "example_id",
    "account": "example_account",
    "amount": 1,
    "balance_impact": map[string]any{},
    "card": "example_card",
    "created": 1,
    "currency": "example_currency",
    "customer_details": map[string]any{},
    "description": "example_description",
    "entries": map[string]any{},
    "financial_account": "example_financial_account",
    "flow_type": "example_flow_type",
    "line_items": map[string]any{},
    "livemode": true,
    "merchant_amount": 1,
    "merchant_currency": "example_merchant_currency",
    "merchant_data": map[string]any{},
    "metadata": map[string]any{},
    "object": "example_object",
    "reference": "example_reference",
    "status": "example_status",
    "status_transitions": map[string]any{},
    "tax_date": 1,
    "transacted_at": 1,
    "transaction_refresh": "example_transaction_refresh",
    "type": "example_type",
    "updated": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TransactionEntry

Create an instance: `transactionEntry := client.TransactionEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `balance_impact` | `map[string]any` | Change to a FinancialAccount's balance |
| `created` | `int` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `effective_at` | `int` | When the TransactionEntry will impact the FinancialAccount's balance. |
| `financial_account` | `string` | The FinancialAccount associated with this object. |
| `flow` | `string` | Token of the flow associated with the TransactionEntry. |
| `flow_details` | `any` | Details of the flow associated with the TransactionEntry. |
| `flow_type` | `string` | Type of the flow associated with the TransactionEntry. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `transaction` | `any` | The Transaction associated with this object. |
| `type` | `string` | The specific money movement that generated the TransactionEntry. |

#### Example: Load

```go
transactionEntry, err := client.TransactionEntry(nil).Load(map[string]any{"id": "transaction_entry_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(transactionEntry) // the loaded record
```

#### Example: List

```go
transactionEntrys, err := client.TransactionEntry(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(transactionEntrys) // the array of records
```


### Transfer

Create an instance: `transfer := client.Transfer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `int` | Amount in cents (or local equivalent) to be transferred. |
| `amount_reversed` | `int` | Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued). |
| `balance_transaction` | `any` | Balance transaction that describes the impact of this transfer on your account balance. |
| `created` | `int` | Time that this record of the transfer was first created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `destination` | `any` | ID of the Stripe account the transfer was sent to. |
| `destination_payment` | `any` | If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `reversals` | `map[string]any` | A list of reversals that have been applied to the transfer. |
| `reversed` | `bool` | Whether the transfer has been fully reversed. |
| `source_transaction` | `any` | ID of the charge that was used to fund the transfer. |
| `source_type` | `string` | The source balance this transfer came from. |
| `transfer_group` | `string` | A string that identifies this transaction as part of a group. |

#### Example: Load

```go
transfer, err := client.Transfer(nil).Load(map[string]any{"id": "transfer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(transfer) // the loaded record
```

#### Example: List

```go
transfers, err := client.Transfer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(transfers) // the array of records
```

#### Example: Create

```go
result, err := client.Transfer(nil).Create(map[string]any{
    "id": "example_id",
    "amount": 1,
    "amount_reversed": 1,
    "created": 1,
    "currency": "example_currency",
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "reversals": map[string]any{},
    "reversed": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TrialOffer

Create an instance: `trialOffer := client.TrialOffer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the trial offer is active. |
| `duration` | `map[string]any` |  |
| `end_behavior` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `nickname` | `string` | A brief description of the trial offer, hidden from customers. |
| `object` | `string` | String representing the object's type. |
| `price` | `float64` | The price during the trial offer. |

#### Example: Load

```go
trialOffer, err := client.TrialOffer(nil).Load(map[string]any{"id": "trial_offer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(trialOffer) // the loaded record
```

#### Example: List

```go
trialOffers, err := client.TrialOffer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(trialOffers) // the array of records
```

#### Example: Create

```go
result, err := client.TrialOffer(nil).Create(map[string]any{
    "id": "example_id",
    "active": true,
    "duration": map[string]any{},
    "end_behavior": map[string]any{},
    "livemode": true,
    "object": "example_object",
    "price": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ValueList

Create an instance: `valueList := client.ValueList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` | The name of the value list for use in rules. |
| `created` | `int` | Time at which the object was created. |
| `created_by` | `string` | The name or email address of the user who created this value list. |
| `id` | `string` | Unique identifier for the object. |
| `item_type` | `string` | The type of items in the value list. |
| `list_items` | `map[string]any` | List of items contained within this value list. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | The name of the value list. |
| `object` | `string` | String representing the object's type. |

#### Example: Load

```go
valueList, err := client.ValueList(nil).Load(map[string]any{"id": "value_list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(valueList) // the loaded record
```

#### Example: List

```go
valueLists, err := client.ValueList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(valueLists) // the array of records
```

#### Example: Create

```go
result, err := client.ValueList(nil).Create(map[string]any{
    "id": "example_id",
    "alias": "example_alias",
    "created": 1,
    "created_by": "example_created_by",
    "item_type": "example_item_type",
    "list_items": map[string]any{},
    "livemode": true,
    "metadata": map[string]any{},
    "name": "example_name",
    "object": "example_object",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ValueListItem

Create an instance: `valueListItem := client.ValueListItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Time at which the object was created. |
| `created_by` | `string` | The name or email address of the user who added this item to the value list. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `value` | `string` | The value of the item. |
| `value_list` | `string` | The identifier of the value list this item belongs to. |

#### Example: Load

```go
valueListItem, err := client.ValueListItem(nil).Load(map[string]any{"id": "value_list_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(valueListItem) // the loaded record
```

#### Example: List

```go
valueListItems, err := client.ValueListItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(valueListItems) // the array of records
```

#### Example: Create

```go
result, err := client.ValueListItem(nil).Create(map[string]any{
    "created": 1,
    "created_by": "example_created_by",
    "id": "example_id",
    "livemode": true,
    "object": "example_object",
    "value": "example_value",
    "value_list": "example_value_list",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### VerificationReport

Create an instance: `verificationReport := client.VerificationReport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_reference_id` | `string` | A string to reference this user. |
| `created` | `int` | Time at which the object was created. |
| `document` | `map[string]any` | Result from a document check |
| `email` | `map[string]any` | Result from a email check |
| `id` | `string` | Unique identifier for the object. |
| `id_number` | `map[string]any` | Result from an id_number check |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `options` | `map[string]any` |  |
| `phone` | `map[string]any` | Result from a phone check |
| `selfie` | `map[string]any` | Result from a selfie check |
| `type` | `string` | Type of report. |
| `verification_flow` | `string` | The configuration token of a verification flow from the dashboard. |
| `verification_session` | `string` | ID of the VerificationSession that created this report. |

#### Example: Load

```go
verificationReport, err := client.VerificationReport(nil).Load(map[string]any{"id": "verification_report_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(verificationReport) // the loaded record
```

#### Example: List

```go
verificationReports, err := client.VerificationReport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(verificationReports) // the array of records
```


### VerificationSession

Create an instance: `verificationSession := client.VerificationSession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_reference_id` | `string` | A string to reference this user. |
| `client_secret` | `string` | The short-lived client secret used by Stripe.js to [show a verification modal](https://docs.stripe.com/js/identity/modal) inside your app. |
| `created` | `int` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `last_error` | `any` | If present, this property tells you the last error encountered when processing the verification. |
| `last_verification_report` | `any` | ID of the most recent VerificationReport. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `options` | `any` | A set of options for the session’s verification checks. |
| `provided_details` | `any` | Details provided about the user being verified. |
| `redaction` | `any` | Redaction status of this VerificationSession. |
| `related_customer` | `string` | Customer ID |
| `related_customer_account` | `string` | The ID of the Account representing a customer. |
| `related_person` | `map[string]any` |  |
| `status` | `string` | Status of this VerificationSession. |
| `type` | `string` | The type of [verification check](https://docs.stripe.com/identity/verification-checks) to be performed. |
| `url` | `string` | The short-lived URL that you use to redirect a user to Stripe to submit their identity information. |
| `verification_flow` | `string` | The configuration token of a verification flow from the dashboard. |
| `verified_outputs` | `any` | The user’s verified data. |

#### Example: Load

```go
verificationSession, err := client.VerificationSession(nil).Load(map[string]any{"id": "verification_session_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(verificationSession) // the loaded record
```

#### Example: List

```go
verificationSessions, err := client.VerificationSession(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(verificationSessions) // the array of records
```

#### Example: Create

```go
result, err := client.VerificationSession(nil).Create(map[string]any{
    "id": "example_id",
    "created": 1,
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "related_person": map[string]any{},
    "status": "example_status",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WebhookEndpoint

Create an instance: `webhookEndpoint := client.WebhookEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_version` | `string` | The API version that events are rendered as for this webhook endpoint. |
| `application` | `string` | The ID of the associated Connect application. |
| `created` | `int` | Time at which the object was created. |
| `description` | `string` | An optional description of what the webhook is used for. |
| `enabled_events` | `[]any` | The list of events to enable for this endpoint. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `bool` | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `secret` | `string` | The endpoint's secret, used to generate [webhook signatures](https://docs.stripe.com/webhooks/signatures). |
| `status` | `string` | The status of the webhook. |
| `url` | `string` | The URL of the webhook endpoint. |

#### Example: Load

```go
webhookEndpoint, err := client.WebhookEndpoint(nil).Load(map[string]any{"id": "webhook_endpoint_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhookEndpoint) // the loaded record
```

#### Example: List

```go
webhookEndpoints, err := client.WebhookEndpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhookEndpoints) // the array of records
```

#### Example: Create

```go
result, err := client.WebhookEndpoint(nil).Create(map[string]any{
    "id": "example_id",
    "created": 1,
    "enabled_events": []any{},
    "livemode": true,
    "metadata": map[string]any{},
    "object": "example_object",
    "status": "example_status",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Debug capture |
| [`idempotency`](#idempotency) | Idempotency |
| [`metrics`](#metrics) | Metrics |
| [`paging`](#paging) | Paging |
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Debug capture.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Metrics.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Paging.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

172 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `account` | `account_holder` | 17 | 64 levels |
| `account` | `external_accounts` | 17 | 64 levels |
| `alert` | `usage_threshold` | 17 | 64 levels |
| `application_fee` | `balance_transaction` | 17 | 41 levels |
| `authentication` | `payment_method` | 17 | 64 levels |
| `balance_transaction` | `checkout_session` | 17 | 64 levels |
| `balance_transaction` | `customer` | 17 | 64 levels |
| `balance_transaction` | `invoice` | 17 | 64 levels |
| `balance_transaction` | `source` | 17 | 37 levels |
| `bank_account` | `customer` | 17 | 64 levels |
| `capability` | `account` | 17 | 64 levels |
| `charge` | `application_fee` | 17 | 45 levels |
| `charge` | `balance_transaction` | 17 | 41 levels |
| `charge` | `failure_balance_transaction` | 17 | 41 levels |
| `confirmation_token` | `payment_method_preview` | 17 | 64 levels |
| `credit_note` | `customer` | 17 | 64 levels |
| `credit_note` | `customer_balance_transaction` | 17 | 64 levels |
| `credit_note` | `invoice` | 17 | 64 levels |
| `customer` | `invoice_settings` | 17 | 64 levels |
| `customer` | `subscriptions` | 17 | 64 levels |
| `customer_balance_transaction` | `checkout_session` | 17 | 64 levels |
| `customer_balance_transaction` | `customer` | 17 | 64 levels |
| `customer_balance_transaction` | `invoice` | 17 | 64 levels |
| `customer_session` | `customer` | 17 | 64 levels |
| `early_fraud_warning` | `charge` | 17 | 49 levels |
| `early_fraud_warning` | `payment_intent` | 17 | 53 levels |
| `external_account` | `data` | 17 | 64 levels |
| `history` | `source` | 17 | 37 levels |
| `invoice` | `default_payment_method` | 17 | 64 levels |
| `invoice` | `last_finalization_error` | 17 | 55 levels |
| `invoice` | `payments` | 17 | 56 levels |
| `invoice_payment` | `payment` | 17 | 51 levels |
| `invoiceitem` | `customer` | 17 | 64 levels |
| `invoiceitem` | `invoice` | 17 | 64 levels |
| `linked_account` | `account_holder` | 17 | 64 levels |
| `payment_evaluation` | `payment_details` | 17 | 64 levels |
| `payment_intent` | `latest_charge` | 17 | 49 levels |
| `payment_link` | `on_behalf_of` | 17 | 64 levels |
| `payment_link` | `transfer_data` | 17 | 64 levels |
| `payment_method` | `card` | 17 | 64 levels |
| `payment_method` | `sepa_debit` | 17 | 55 levels |
| `quote` | `customer` | 17 | 64 levels |
| `quote` | `invoice` | 17 | 64 levels |
| `quote` | `on_behalf_of` | 17 | 64 levels |
| `quote` | `subscription` | 17 | 64 levels |
| `quote` | `subscription_schedule` | 17 | 64 levels |
| `quote` | `transfer_data` | 17 | 64 levels |
| `reader` | `action` | 17 | 59 levels |
| `search` | `application_fee` | 17 | 45 levels |
| `search` | `balance_transaction` | 17 | 41 levels |
| `search` | `default_payment_method` | 17 | 64 levels |
| `search` | `failure_balance_transaction` | 17 | 41 levels |
| `search` | `invoice_settings` | 17 | 64 levels |
| `search` | `last_finalization_error` | 17 | 55 levels |
| `search` | `latest_charge` | 17 | 49 levels |
| `search` | `latest_invoice` | 17 | 64 levels |
| `search` | `payments` | 17 | 56 levels |
| `search` | `schedule` | 17 | 64 levels |
| `search` | `subscriptions` | 17 | 64 levels |
| `session` | `account_holder` | 17 | 64 levels |
| `session` | `accounts` | 17 | 64 levels |
| `session` | `bank_account_token` | 17 | 64 levels |
| `session` | `customer` | 17 | 64 levels |
| `session` | `invoice` | 17 | 64 levels |
| `session` | `payment_intent` | 17 | 53 levels |
| `session` | `payment_link` | 17 | 64 levels |
| `session` | `subscription` | 17 | 64 levels |
| `setup_attempt` | `setup_error` | 17 | 55 levels |
| `source` | `data` | 17 | 64 levels |
| `subscription` | `default_payment_method` | 17 | 64 levels |
| `subscription` | `latest_invoice` | 17 | 64 levels |
| `subscription` | `schedule` | 17 | 64 levels |
| `subscription_schedule` | `default_settings` | 17 | 64 levels |
| `subscription_schedule` | `phases` | 17 | 64 levels |
| `token` | `bank_account` | 17 | 64 levels |
| `credit_reversal` | `transaction` | 5 | 48 levels |
| `payout` | `destination` | 5 | 6 levels |
| `received_credit` | `linked_flows` | 5 | 19 levels |
| `transaction` | `entries` | 5 | 44 levels |
| `transaction` | `flow_details` | 5 | 39 levels |
| `transaction_entry` | `flow_details` | 5 | 39 levels |
| `customer` | `default_source` | 4 | 6 levels |
| `invoice` | `default_source` | 4 | 6 levels |
| `search` | `default_source` | 4 | 6 levels |
| `subscription` | `default_source` | 4 | 6 levels |
| `card` | `customer` | 3 | 1 level |
| `cash_balance_transaction` | `refunded_from_payment` | 3 | 17 levels |
| `charge` | `customer` | 3 | 1 level |
| `charge` | `refunds` | 3 | 15 levels |
| `configuration` | `application` | 3 | 1 level |
| `credit_balance_transaction` | `credit_grant` | 3 | 6 levels |
| `credit_grant` | `customer` | 3 | 1 level |
| `credit_note` | `discount_amounts` | 3 | 15 levels |
| `credit_note` | `lines` | 3 | 21 levels |
| `credit_note` | `pretax_credit_amounts` | 3 | 16 levels |
| `credit_note` | `refunds` | 3 | 18 levels |
| `credit_note_line` | `discount_amounts` | 3 | 15 levels |
| `credit_note_line` | `pretax_credit_amounts` | 3 | 16 levels |
| `customer` | `discount` | 3 | 11 levels |
| `customer` | `sources` | 3 | 8 levels |
| `discount` | `customer` | 3 | 1 level |
| `discount` | `promotion_code` | 3 | 7 levels |
| `fund_cash_balance` | `refunded_from_payment` | 3 | 17 levels |
| `invoice` | `account_tax_ids` | 3 | 10 levels |
| `invoice` | `application` | 3 | 1 level |
| `invoice` | `customer` | 3 | 1 level |
| `invoice` | `discounts` | 3 | 13 levels |
| `invoice` | `lines` | 3 | 21 levels |
| `invoice` | `total_discount_amounts` | 3 | 15 levels |
| `invoice` | `total_pretax_credit_amounts` | 3 | 16 levels |
| `invoice_payment` | `invoice` | 3 | 1 level |
| `invoiceitem` | `discounts` | 3 | 13 levels |
| `invoiceitem` | `pricing` | 3 | 16 levels |
| `invoiceitem` | `proration_details` | 3 | 17 levels |
| `line` | `discount_amounts` | 3 | 15 levels |
| `line` | `discounts` | 3 | 13 levels |
| `line` | `pretax_credit_amounts` | 3 | 16 levels |
| `line` | `pricing` | 3 | 16 levels |
| `line_item` | `discounts` | 3 | 12 levels |
| `line_item` | `price` | 3 | 9 levels |
| `payment_intent` | `customer` | 3 | 1 level |
| `payment_link` | `application` | 3 | 1 level |
| `payment_link` | `invoice_creation` | 3 | 18 levels |
| `payment_link` | `line_items` | 3 | 17 levels |
| `plan` | `product` | 3 | 5 levels |
| `price` | `product` | 3 | 5 levels |
| `promotion_code` | `customer` | 3 | 1 level |
| `quote` | `application` | 3 | 1 level |
| `quote` | `computed` | 3 | 22 levels |
| `quote` | `discounts` | 3 | 13 levels |
| `quote` | `line_items` | 3 | 17 levels |
| `quote` | `total_details` | 3 | 16 levels |
| `quote_computed_upfront_line_item` | `discounts` | 3 | 12 levels |
| `quote_computed_upfront_line_item` | `price` | 3 | 9 levels |
| `refund` | `customer` | 3 | 1 level |
| `search` | `account_tax_ids` | 3 | 10 levels |
| `search` | `billing_schedules` | 3 | 16 levels |
| `search` | `customer` | 3 | 1 level |
| `search` | `discount` | 3 | 11 levels |
| `search` | `discounts` | 3 | 13 levels |
| `search` | `items` | 3 | 18 levels |
| `search` | `lines` | 3 | 21 levels |
| `search` | `pending_setup_intent` | 3 | 10 levels |
| `search` | `pending_update` | 3 | 20 levels |
| `search` | `product` | 3 | 5 levels |
| `search` | `refunds` | 3 | 15 levels |
| `search` | `sources` | 3 | 8 levels |
| `search` | `total_discount_amounts` | 3 | 15 levels |
| `search` | `total_pretax_credit_amounts` | 3 | 16 levels |
| `session` | `configuration` | 3 | 11 levels |
| `session` | `discounts` | 3 | 10 levels |
| `session` | `invoice_creation` | 3 | 16 levels |
| `session` | `line_items` | 3 | 17 levels |
| `session` | `setup_intent` | 3 | 10 levels |
| `session` | `total_details` | 3 | 18 levels |
| `setup_attempt` | `customer` | 3 | 1 level |
| `setup_attempt` | `setup_intent` | 3 | 10 levels |
| `setup_intent` | `customer` | 3 | 1 level |
| `subscription` | `application` | 3 | 1 level |
| `subscription` | `billing_schedules` | 3 | 16 levels |
| `subscription` | `customer` | 3 | 1 level |
| `subscription` | `discounts` | 3 | 13 levels |
| `subscription` | `invoice_settings` | 3 | 12 levels |
| `subscription` | `items` | 3 | 18 levels |
| `subscription` | `pending_setup_intent` | 3 | 10 levels |
| `subscription` | `pending_update` | 3 | 20 levels |
| `subscription_item` | `discounts` | 3 | 13 levels |
| `subscription_item` | `price` | 3 | 7 levels |
| `subscription_schedule` | `application` | 3 | 1 level |
| `subscription_schedule` | `customer` | 3 | 1 level |
| `trial_offer` | `end_behavior` | 3 | 14 levels |
| `trial_offer` | `price` | 3 | 9 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **DebugFeature**: Debug capture
- **IdempotencyFeature**: Idempotency
- **MetricsFeature**: Metrics
- **PagingFeature**: Paging
- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/stripe-sdk/go/
├── stripe.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/stripe-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
calculation := client.Calculation(nil)
calculation.Load(map[string]any{"id": "example_id"}, nil)

// calculation.Data() now returns the calculation data from the last load
// calculation.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
