# Stripe Golang SDK Reference

Complete API reference for the Stripe Golang SDK.


## StripeSDK

### Constructor

```go
func NewStripeSDK(options map[string]any) *StripeSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *StripeSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *StripeSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Account(data map[string]any) StripeEntity`

Create a new `Account` entity instance. Pass `nil` for no initial data.

#### `AccountLink(data map[string]any) StripeEntity`

Create a new `AccountLink` entity instance. Pass `nil` for no initial data.

#### `AccountOwner(data map[string]any) StripeEntity`

Create a new `AccountOwner` entity instance. Pass `nil` for no initial data.

#### `AccountSession(data map[string]any) StripeEntity`

Create a new `AccountSession` entity instance. Pass `nil` for no initial data.

#### `ActiveEntitlement(data map[string]any) StripeEntity`

Create a new `ActiveEntitlement` entity instance. Pass `nil` for no initial data.

#### `Alert(data map[string]any) StripeEntity`

Create a new `Alert` entity instance. Pass `nil` for no initial data.

#### `ApplePayDomain(data map[string]any) StripeEntity`

Create a new `ApplePayDomain` entity instance. Pass `nil` for no initial data.

#### `ApplicationFee(data map[string]any) StripeEntity`

Create a new `ApplicationFee` entity instance. Pass `nil` for no initial data.

#### `Association(data map[string]any) StripeEntity`

Create a new `Association` entity instance. Pass `nil` for no initial data.

#### `Authentication(data map[string]any) StripeEntity`

Create a new `Authentication` entity instance. Pass `nil` for no initial data.

#### `Authorization(data map[string]any) StripeEntity`

Create a new `Authorization` entity instance. Pass `nil` for no initial data.

#### `Balance(data map[string]any) StripeEntity`

Create a new `Balance` entity instance. Pass `nil` for no initial data.

#### `BalanceSetting(data map[string]any) StripeEntity`

Create a new `BalanceSetting` entity instance. Pass `nil` for no initial data.

#### `BalanceTransaction(data map[string]any) StripeEntity`

Create a new `BalanceTransaction` entity instance. Pass `nil` for no initial data.

#### `BankAccount(data map[string]any) StripeEntity`

Create a new `BankAccount` entity instance. Pass `nil` for no initial data.

#### `Calculation(data map[string]any) StripeEntity`

Create a new `Calculation` entity instance. Pass `nil` for no initial data.

#### `Capability(data map[string]any) StripeEntity`

Create a new `Capability` entity instance. Pass `nil` for no initial data.

#### `Card(data map[string]any) StripeEntity`

Create a new `Card` entity instance. Pass `nil` for no initial data.

#### `Cardholder(data map[string]any) StripeEntity`

Create a new `Cardholder` entity instance. Pass `nil` for no initial data.

#### `CashBalance(data map[string]any) StripeEntity`

Create a new `CashBalance` entity instance. Pass `nil` for no initial data.

#### `CashBalanceTransaction(data map[string]any) StripeEntity`

Create a new `CashBalanceTransaction` entity instance. Pass `nil` for no initial data.

#### `Charge(data map[string]any) StripeEntity`

Create a new `Charge` entity instance. Pass `nil` for no initial data.

#### `Configuration(data map[string]any) StripeEntity`

Create a new `Configuration` entity instance. Pass `nil` for no initial data.

#### `ConfirmationToken(data map[string]any) StripeEntity`

Create a new `ConfirmationToken` entity instance. Pass `nil` for no initial data.

#### `ConnectionToken(data map[string]any) StripeEntity`

Create a new `ConnectionToken` entity instance. Pass `nil` for no initial data.

#### `CountrySpec(data map[string]any) StripeEntity`

Create a new `CountrySpec` entity instance. Pass `nil` for no initial data.

#### `Coupon(data map[string]any) StripeEntity`

Create a new `Coupon` entity instance. Pass `nil` for no initial data.

#### `CreditBalanceSummary(data map[string]any) StripeEntity`

Create a new `CreditBalanceSummary` entity instance. Pass `nil` for no initial data.

#### `CreditBalanceTransaction(data map[string]any) StripeEntity`

Create a new `CreditBalanceTransaction` entity instance. Pass `nil` for no initial data.

#### `CreditGrant(data map[string]any) StripeEntity`

Create a new `CreditGrant` entity instance. Pass `nil` for no initial data.

#### `CreditNote(data map[string]any) StripeEntity`

Create a new `CreditNote` entity instance. Pass `nil` for no initial data.

#### `CreditNoteLine(data map[string]any) StripeEntity`

Create a new `CreditNoteLine` entity instance. Pass `nil` for no initial data.

#### `CreditReversal(data map[string]any) StripeEntity`

Create a new `CreditReversal` entity instance. Pass `nil` for no initial data.

#### `Customer(data map[string]any) StripeEntity`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `CustomerBalanceTransaction(data map[string]any) StripeEntity`

Create a new `CustomerBalanceTransaction` entity instance. Pass `nil` for no initial data.

#### `CustomerSession(data map[string]any) StripeEntity`

Create a new `CustomerSession` entity instance. Pass `nil` for no initial data.

#### `DebitReversal(data map[string]any) StripeEntity`

Create a new `DebitReversal` entity instance. Pass `nil` for no initial data.

#### `DeletedAccount(data map[string]any) StripeEntity`

Create a new `DeletedAccount` entity instance. Pass `nil` for no initial data.

#### `DeletedApplePayDomain(data map[string]any) StripeEntity`

Create a new `DeletedApplePayDomain` entity instance. Pass `nil` for no initial data.

#### `DeletedCoupon(data map[string]any) StripeEntity`

Create a new `DeletedCoupon` entity instance. Pass `nil` for no initial data.

#### `DeletedExternalAccount(data map[string]any) StripeEntity`

Create a new `DeletedExternalAccount` entity instance. Pass `nil` for no initial data.

#### `DeletedInvoiceitem(data map[string]any) StripeEntity`

Create a new `DeletedInvoiceitem` entity instance. Pass `nil` for no initial data.

#### `DeletedPerson(data map[string]any) StripeEntity`

Create a new `DeletedPerson` entity instance. Pass `nil` for no initial data.

#### `DeletedPlan(data map[string]any) StripeEntity`

Create a new `DeletedPlan` entity instance. Pass `nil` for no initial data.

#### `DeletedProductFeature(data map[string]any) StripeEntity`

Create a new `DeletedProductFeature` entity instance. Pass `nil` for no initial data.

#### `DeletedSubscriptionItem(data map[string]any) StripeEntity`

Create a new `DeletedSubscriptionItem` entity instance. Pass `nil` for no initial data.

#### `DeletedWebhookEndpoint(data map[string]any) StripeEntity`

Create a new `DeletedWebhookEndpoint` entity instance. Pass `nil` for no initial data.

#### `Discount(data map[string]any) StripeEntity`

Create a new `Discount` entity instance. Pass `nil` for no initial data.

#### `Dispute(data map[string]any) StripeEntity`

Create a new `Dispute` entity instance. Pass `nil` for no initial data.

#### `Domain(data map[string]any) StripeEntity`

Create a new `Domain` entity instance. Pass `nil` for no initial data.

#### `EarlyFraudWarning(data map[string]any) StripeEntity`

Create a new `EarlyFraudWarning` entity instance. Pass `nil` for no initial data.

#### `EphemeralKey(data map[string]any) StripeEntity`

Create a new `EphemeralKey` entity instance. Pass `nil` for no initial data.

#### `Event(data map[string]any) StripeEntity`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `ExchangeRate(data map[string]any) StripeEntity`

Create a new `ExchangeRate` entity instance. Pass `nil` for no initial data.

#### `ExternalAccount(data map[string]any) StripeEntity`

Create a new `ExternalAccount` entity instance. Pass `nil` for no initial data.

#### `Feature(data map[string]any) StripeEntity`

Create a new `Feature` entity instance. Pass `nil` for no initial data.

#### `FeedbackOption(data map[string]any) StripeEntity`

Create a new `FeedbackOption` entity instance. Pass `nil` for no initial data.

#### `File(data map[string]any) StripeEntity`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `FileLink(data map[string]any) StripeEntity`

Create a new `FileLink` entity instance. Pass `nil` for no initial data.

#### `FinancialAccount(data map[string]any) StripeEntity`

Create a new `FinancialAccount` entity instance. Pass `nil` for no initial data.

#### `FinancialAccountFeature(data map[string]any) StripeEntity`

Create a new `FinancialAccountFeature` entity instance. Pass `nil` for no initial data.

#### `FundCashBalance(data map[string]any) StripeEntity`

Create a new `FundCashBalance` entity instance. Pass `nil` for no initial data.

#### `FundingInstruction(data map[string]any) StripeEntity`

Create a new `FundingInstruction` entity instance. Pass `nil` for no initial data.

#### `History(data map[string]any) StripeEntity`

Create a new `History` entity instance. Pass `nil` for no initial data.

#### `InboundTransfer(data map[string]any) StripeEntity`

Create a new `InboundTransfer` entity instance. Pass `nil` for no initial data.

#### `Install(data map[string]any) StripeEntity`

Create a new `Install` entity instance. Pass `nil` for no initial data.

#### `Invoice(data map[string]any) StripeEntity`

Create a new `Invoice` entity instance. Pass `nil` for no initial data.

#### `InvoicePayment(data map[string]any) StripeEntity`

Create a new `InvoicePayment` entity instance. Pass `nil` for no initial data.

#### `InvoiceRenderingTemplate(data map[string]any) StripeEntity`

Create a new `InvoiceRenderingTemplate` entity instance. Pass `nil` for no initial data.

#### `Invoiceitem(data map[string]any) StripeEntity`

Create a new `Invoiceitem` entity instance. Pass `nil` for no initial data.

#### `Line(data map[string]any) StripeEntity`

Create a new `Line` entity instance. Pass `nil` for no initial data.

#### `LineItem(data map[string]any) StripeEntity`

Create a new `LineItem` entity instance. Pass `nil` for no initial data.

#### `LinkedAccount(data map[string]any) StripeEntity`

Create a new `LinkedAccount` entity instance. Pass `nil` for no initial data.

#### `LinkedAccountOwner(data map[string]any) StripeEntity`

Create a new `LinkedAccountOwner` entity instance. Pass `nil` for no initial data.

#### `Location(data map[string]any) StripeEntity`

Create a new `Location` entity instance. Pass `nil` for no initial data.

#### `LoginLink(data map[string]any) StripeEntity`

Create a new `LoginLink` entity instance. Pass `nil` for no initial data.

#### `Mandate(data map[string]any) StripeEntity`

Create a new `Mandate` entity instance. Pass `nil` for no initial data.

#### `Meter(data map[string]any) StripeEntity`

Create a new `Meter` entity instance. Pass `nil` for no initial data.

#### `MeterEvent(data map[string]any) StripeEntity`

Create a new `MeterEvent` entity instance. Pass `nil` for no initial data.

#### `MeterEventAdjustment(data map[string]any) StripeEntity`

Create a new `MeterEventAdjustment` entity instance. Pass `nil` for no initial data.

#### `MeterEventSummary(data map[string]any) StripeEntity`

Create a new `MeterEventSummary` entity instance. Pass `nil` for no initial data.

#### `OnboardingLink(data map[string]any) StripeEntity`

Create a new `OnboardingLink` entity instance. Pass `nil` for no initial data.

#### `Order(data map[string]any) StripeEntity`

Create a new `Order` entity instance. Pass `nil` for no initial data.

#### `OutboundPayment(data map[string]any) StripeEntity`

Create a new `OutboundPayment` entity instance. Pass `nil` for no initial data.

#### `OutboundTransfer(data map[string]any) StripeEntity`

Create a new `OutboundTransfer` entity instance. Pass `nil` for no initial data.

#### `PaymentAttemptRecord(data map[string]any) StripeEntity`

Create a new `PaymentAttemptRecord` entity instance. Pass `nil` for no initial data.

#### `PaymentEvaluation(data map[string]any) StripeEntity`

Create a new `PaymentEvaluation` entity instance. Pass `nil` for no initial data.

#### `PaymentIntent(data map[string]any) StripeEntity`

Create a new `PaymentIntent` entity instance. Pass `nil` for no initial data.

#### `PaymentIntentAmountDetailsLineItem(data map[string]any) StripeEntity`

Create a new `PaymentIntentAmountDetailsLineItem` entity instance. Pass `nil` for no initial data.

#### `PaymentLink(data map[string]any) StripeEntity`

Create a new `PaymentLink` entity instance. Pass `nil` for no initial data.

#### `PaymentMethod(data map[string]any) StripeEntity`

Create a new `PaymentMethod` entity instance. Pass `nil` for no initial data.

#### `PaymentMethodConfiguration(data map[string]any) StripeEntity`

Create a new `PaymentMethodConfiguration` entity instance. Pass `nil` for no initial data.

#### `PaymentMethodDomain(data map[string]any) StripeEntity`

Create a new `PaymentMethodDomain` entity instance. Pass `nil` for no initial data.

#### `PaymentRecord(data map[string]any) StripeEntity`

Create a new `PaymentRecord` entity instance. Pass `nil` for no initial data.

#### `Payout(data map[string]any) StripeEntity`

Create a new `Payout` entity instance. Pass `nil` for no initial data.

#### `Person(data map[string]any) StripeEntity`

Create a new `Person` entity instance. Pass `nil` for no initial data.

#### `PersonalizationDesign(data map[string]any) StripeEntity`

Create a new `PersonalizationDesign` entity instance. Pass `nil` for no initial data.

#### `PhysicalBundle(data map[string]any) StripeEntity`

Create a new `PhysicalBundle` entity instance. Pass `nil` for no initial data.

#### `Plan(data map[string]any) StripeEntity`

Create a new `Plan` entity instance. Pass `nil` for no initial data.

#### `Price(data map[string]any) StripeEntity`

Create a new `Price` entity instance. Pass `nil` for no initial data.

#### `Product(data map[string]any) StripeEntity`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `ProductFeature(data map[string]any) StripeEntity`

Create a new `ProductFeature` entity instance. Pass `nil` for no initial data.

#### `PromotionCode(data map[string]any) StripeEntity`

Create a new `PromotionCode` entity instance. Pass `nil` for no initial data.

#### `Quote(data map[string]any) StripeEntity`

Create a new `Quote` entity instance. Pass `nil` for no initial data.

#### `QuoteComputedUpfrontLineItem(data map[string]any) StripeEntity`

Create a new `QuoteComputedUpfrontLineItem` entity instance. Pass `nil` for no initial data.

#### `QuotePdf(data map[string]any) StripeEntity`

Create a new `QuotePdf` entity instance. Pass `nil` for no initial data.

#### `Reader(data map[string]any) StripeEntity`

Create a new `Reader` entity instance. Pass `nil` for no initial data.

#### `ReceivedCredit(data map[string]any) StripeEntity`

Create a new `ReceivedCredit` entity instance. Pass `nil` for no initial data.

#### `ReceivedDebit(data map[string]any) StripeEntity`

Create a new `ReceivedDebit` entity instance. Pass `nil` for no initial data.

#### `Refund(data map[string]any) StripeEntity`

Create a new `Refund` entity instance. Pass `nil` for no initial data.

#### `Registration(data map[string]any) StripeEntity`

Create a new `Registration` entity instance. Pass `nil` for no initial data.

#### `ReportRun(data map[string]any) StripeEntity`

Create a new `ReportRun` entity instance. Pass `nil` for no initial data.

#### `ReportType(data map[string]any) StripeEntity`

Create a new `ReportType` entity instance. Pass `nil` for no initial data.

#### `Request(data map[string]any) StripeEntity`

Create a new `Request` entity instance. Pass `nil` for no initial data.

#### `Reversal(data map[string]any) StripeEntity`

Create a new `Reversal` entity instance. Pass `nil` for no initial data.

#### `Review(data map[string]any) StripeEntity`

Create a new `Review` entity instance. Pass `nil` for no initial data.

#### `ScheduledQueryRun(data map[string]any) StripeEntity`

Create a new `ScheduledQueryRun` entity instance. Pass `nil` for no initial data.

#### `Search(data map[string]any) StripeEntity`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Secret(data map[string]any) StripeEntity`

Create a new `Secret` entity instance. Pass `nil` for no initial data.

#### `Session(data map[string]any) StripeEntity`

Create a new `Session` entity instance. Pass `nil` for no initial data.

#### `Setting(data map[string]any) StripeEntity`

Create a new `Setting` entity instance. Pass `nil` for no initial data.

#### `Settlement(data map[string]any) StripeEntity`

Create a new `Settlement` entity instance. Pass `nil` for no initial data.

#### `SetupAttempt(data map[string]any) StripeEntity`

Create a new `SetupAttempt` entity instance. Pass `nil` for no initial data.

#### `SetupIntent(data map[string]any) StripeEntity`

Create a new `SetupIntent` entity instance. Pass `nil` for no initial data.

#### `ShippingRate(data map[string]any) StripeEntity`

Create a new `ShippingRate` entity instance. Pass `nil` for no initial data.

#### `SigmaApiQuery(data map[string]any) StripeEntity`

Create a new `SigmaApiQuery` entity instance. Pass `nil` for no initial data.

#### `Source(data map[string]any) StripeEntity`

Create a new `Source` entity instance. Pass `nil` for no initial data.

#### `SourceMandateNotification(data map[string]any) StripeEntity`

Create a new `SourceMandateNotification` entity instance. Pass `nil` for no initial data.

#### `SourceTransaction(data map[string]any) StripeEntity`

Create a new `SourceTransaction` entity instance. Pass `nil` for no initial data.

#### `Subscription(data map[string]any) StripeEntity`

Create a new `Subscription` entity instance. Pass `nil` for no initial data.

#### `SubscriptionItem(data map[string]any) StripeEntity`

Create a new `SubscriptionItem` entity instance. Pass `nil` for no initial data.

#### `SubscriptionSchedule(data map[string]any) StripeEntity`

Create a new `SubscriptionSchedule` entity instance. Pass `nil` for no initial data.

#### `Supplier(data map[string]any) StripeEntity`

Create a new `Supplier` entity instance. Pass `nil` for no initial data.

#### `TaxCode(data map[string]any) StripeEntity`

Create a new `TaxCode` entity instance. Pass `nil` for no initial data.

#### `TaxId(data map[string]any) StripeEntity`

Create a new `TaxId` entity instance. Pass `nil` for no initial data.

#### `TaxRate(data map[string]any) StripeEntity`

Create a new `TaxRate` entity instance. Pass `nil` for no initial data.

#### `TestClock(data map[string]any) StripeEntity`

Create a new `TestClock` entity instance. Pass `nil` for no initial data.

#### `Token(data map[string]any) StripeEntity`

Create a new `Token` entity instance. Pass `nil` for no initial data.

#### `Topup(data map[string]any) StripeEntity`

Create a new `Topup` entity instance. Pass `nil` for no initial data.

#### `Transaction(data map[string]any) StripeEntity`

Create a new `Transaction` entity instance. Pass `nil` for no initial data.

#### `TransactionEntry(data map[string]any) StripeEntity`

Create a new `TransactionEntry` entity instance. Pass `nil` for no initial data.

#### `Transfer(data map[string]any) StripeEntity`

Create a new `Transfer` entity instance. Pass `nil` for no initial data.

#### `TrialOffer(data map[string]any) StripeEntity`

Create a new `TrialOffer` entity instance. Pass `nil` for no initial data.

#### `ValueList(data map[string]any) StripeEntity`

Create a new `ValueList` entity instance. Pass `nil` for no initial data.

#### `ValueListItem(data map[string]any) StripeEntity`

Create a new `ValueListItem` entity instance. Pass `nil` for no initial data.

#### `VerificationReport(data map[string]any) StripeEntity`

Create a new `VerificationReport` entity instance. Pass `nil` for no initial data.

#### `VerificationSession(data map[string]any) StripeEntity`

Create a new `VerificationSession` entity instance. Pass `nil` for no initial data.

#### `WebhookEndpoint(data map[string]any) StripeEntity`

Create a new `WebhookEndpoint` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AccountEntity

```go
account := client.Account(nil)
fmt.Println(account.GetName()) // "account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `any` | No | The account holder that this account belongs to. |
| `account_numbers` | `[]any` | No | Details about the account numbers. |
| `balance` | `any` | No | The most recent information about the account's balance. |
| `balance_refresh` | `any` | No | The state of the most recent attempt to refresh the account balance. |
| `business_profile` | `any` | No | Business information about the account. |
| `business_type` | `string` | No | The business type. |
| `capabilities` | `map[string]any` | No |  |
| `category` | `string` | Yes | The type of the account. |
| `charges_enabled` | `bool` | No | Whether the account can process charges. |
| `company` | `map[string]any` | No |  |
| `controller` | `map[string]any` | Yes |  |
| `country` | `string` | No | The account's country. |
| `created` | `int` | Yes | Time at which the object was created. |
| `default_currency` | `string` | No | Three-letter ISO currency code representing the default currency for the account. |
| `details_submitted` | `bool` | No | Whether account details have been submitted. |
| `display_name` | `string` | No | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `email` | `string` | No | An email address associated with the account. |
| `external_accounts` | `map[string]any` | Yes | External accounts (bank accounts and debit cards) currently attached to this account. |
| `future_requirements` | `map[string]any` | No |  |
| `groups` | `any` | No | The groups associated with the account. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `individual` | `map[string]any` | Yes | This is an object representing a person associated with a Stripe account. |
| `institution_name` | `string` | Yes | The name of the institution that holds this account. |
| `last4` | `string` | No | The last 4 digits of the account number. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `ownership` | `any` | No | The most recent information about the account's owners. |
| `ownership_refresh` | `any` | No | The state of the most recent attempt to refresh the account owners. |
| `payouts_enabled` | `bool` | No | Whether the funds in this account can be paid out. |
| `permissions` | `[]any` | No | The list of permissions granted by this account. |
| `requirements` | `map[string]any` | No |  |
| `settings` | `any` | No | Options for customizing how the account functions within Stripe. |
| `status` | `string` | Yes | The status of the link to the account. |
| `status_details` | `map[string]any` | No |  |
| `subcategory` | `string` | Yes | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `[]any` | No | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `[]any` | Yes | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `tos_acceptance` | `map[string]any` | No |  |
| `transaction_refresh` | `any` | No | The state of the most recent attempt to refresh the account transactions. |
| `type` | `string` | No | The Stripe account type. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `account_holder` | - | - | - |
| `account_numbers` | - | - | - |
| `balance` | - | - | - |
| `balance_refresh` | - | - | - |
| `business_profile` | - | - | - |
| `business_type` | - | - | - |
| `capabilities` | - | - | - |
| `category` | - | - | - |
| `charges_enabled` | - | - | - |
| `company` | - | - | - |
| `controller` | - | - | - |
| `country` | - | - | - |
| `created` | Yes | Yes | Yes |
| `default_currency` | - | - | - |
| `details_submitted` | - | - | - |
| `display_name` | - | - | - |
| `email` | - | - | - |
| `external_accounts` | - | - | - |
| `future_requirements` | - | - | - |
| `groups` | - | - | - |
| `id` | - | - | - |
| `individual` | - | - | - |
| `institution_name` | - | - | - |
| `last4` | - | - | - |
| `livemode` | - | - | - |
| `metadata` | - | - | - |
| `object` | - | - | - |
| `ownership` | - | - | - |
| `ownership_refresh` | - | - | - |
| `payouts_enabled` | - | - | - |
| `permissions` | - | - | - |
| `requirements` | - | - | - |
| `settings` | - | - | - |
| `status` | - | - | - |
| `status_details` | - | - | - |
| `subcategory` | - | - | - |
| `subscriptions` | - | - | - |
| `supported_payment_method_types` | - | - | - |
| `tos_acceptance` | - | - | - |
| `transaction_refresh` | - | - | - |
| `type` | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Account(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Account(nil).Load(map[string]any{"account": "account"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountLinkEntity

```go
accountLink := client.AccountLink(nil)
fmt.Println(accountLink.GetName()) // "account_link"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `expires_at` | `int` | Yes | The timestamp at which this account link will expire. |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | Yes | The URL for the account link. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountLinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountOwnerEntity

```go
accountOwner := client.AccountOwner(nil)
fmt.Println(accountOwner.GetName()) // "account_owner"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No | The email address of the owner. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `name` | `string` | Yes | The full name of the owner. |
| `object` | `string` | Yes | String representing the object's type. |
| `ownership` | `string` | Yes | The ownership object that this owner belongs to. |
| `phone` | `string` | No | The raw phone number of the owner. |
| `raw_address` | `string` | No | The raw physical address of the owner. |
| `refreshed_at` | `int` | No | The timestamp of the refresh that updated this owner. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AccountOwner(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountOwnerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountSessionEntity

```go
accountSession := client.AccountSession(nil)
fmt.Println(accountSession.GetName()) // "account_session"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_management` | `map[string]any` | Yes |  |
| `account_onboarding` | `map[string]any` | Yes |  |
| `balance_report` | `map[string]any` | Yes |  |
| `balances` | `map[string]any` | Yes |  |
| `disputes_list` | `map[string]any` | Yes |  |
| `documents` | `map[string]any` | Yes |  |
| `financial_account` | `map[string]any` | Yes |  |
| `financial_account_transactions` | `map[string]any` | Yes |  |
| `instant_payouts_promotion` | `map[string]any` | Yes |  |
| `issuing_card` | `map[string]any` | Yes |  |
| `issuing_cards_list` | `map[string]any` | Yes |  |
| `notification_banner` | `map[string]any` | Yes |  |
| `payment_details` | `map[string]any` | Yes |  |
| `payment_disputes` | `map[string]any` | Yes |  |
| `payment_method_settings` | `map[string]any` | Yes |  |
| `payments` | `map[string]any` | Yes |  |
| `payout_details` | `map[string]any` | Yes |  |
| `payout_reconciliation_report` | `map[string]any` | Yes |  |
| `payouts` | `map[string]any` | Yes |  |
| `payouts_list` | `map[string]any` | Yes |  |
| `tax_registrations` | `map[string]any` | Yes |  |
| `tax_settings` | `map[string]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountSessionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActiveEntitlementEntity

```go
activeEntitlement := client.ActiveEntitlement(nil)
fmt.Println(activeEntitlement.GetName()) // "active_entitlement"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `feature` | `any` | Yes | The [Feature](https://docs.stripe.com/api/entitlements/feature) that the customer is entitled to. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | Yes | A unique key you provide as your own system identifier. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ActiveEntitlement(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActiveEntitlement(nil).Load(map[string]any{"id": "active_entitlement_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActiveEntitlementEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AlertEntity

```go
alert := client.Alert(nil)
fmt.Println(alert.GetName()) // "alert"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_type` | `string` | Yes | Defines the type of the alert. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | No | Status of the alert. |
| `title` | `string` | Yes | Title of the alert. |
| `usage_threshold` | `any` | No | Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://docs.stripe.com/api/billing/meter). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Alert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Alert(nil).Load(map[string]any{"id": "alert_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlertEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApplePayDomainEntity

```go
applePayDomain := client.ApplePayDomain(nil)
fmt.Println(applePayDomain.GetName()) // "apple_pay_domain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `domain_name` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApplePayDomain(nil).Load(map[string]any{"id": "apple_pay_domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApplePayDomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApplicationFeeEntity

```go
applicationFee := client.ApplicationFee(nil)
fmt.Println(applicationFee.GetName()) // "application_fee"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `any` | Yes | ID of the Stripe account this fee was taken from. |
| `amount` | `int` | Yes | Amount earned, in cents (or local equivalent). |
| `amount_refunded` | `int` | Yes | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued) |
| `application` | `any` | Yes | ID of the Connect application that earned the fee. |
| `balance_transaction` | `any` | No | Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds). |
| `charge` | `any` | Yes | ID of the charge that the application fee was taken from. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `fee_source` | `any` | No | Polymorphic source of the application fee. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `originating_transaction` | `any` | No | ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter. |
| `refunded` | `bool` | Yes | Whether the fee has been fully refunded. |
| `refunds` | `map[string]any` | Yes | A list of refunds that have been applied to the fee. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApplicationFee(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApplicationFee(nil).Load(map[string]any{"id": "application_fee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApplicationFeeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssociationEntity

```go
association := client.Association(nil)
fmt.Println(association.GetName()) // "association"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Association(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssociationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuthenticationEntity

```go
authentication := client.Authentication(nil)
fmt.Println(authentication.GetName()) // "authentication"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquirer_details` | `map[string]any` | No | Contains additional details about the acquirer for a 3DS Authentication. |
| `amount` | `int` | No | The amount for this 3DS Authentication. |
| `challenge_url` | `string` | No | The URL for presenting a challenge to your cardholder, present if status is requires_challenge. |
| `channel` | `map[string]any` | Yes | Contains details on the channel used (browser, 3RI) for a standalone 3DS Authentication. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `directory_server` | `string` | Yes | The 3DS directory server with which this 3DS Authentication was processed. |
| `fingerprinting_url` | `string` | No | The URL for performing issuer fingerprinting, present if fingerprinting is supported for the given payment method. |
| `flow_preference` | `map[string]any` | Yes | Contains details of the flow preference used for a standalone 3DS Authentication. |
| `future_usage` | `map[string]any` | Yes | Contains information about the future authorisations related to this authentication |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `message_category` | `string` | Yes | Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `outcome` | `string` | No | The outcome of this 3DS Authentication. |
| `outcome_details` | `map[string]any` | Yes | Contains details on the result for a standalone 3DS Authentication. |
| `payment_method` | `any` | Yes | ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication. |
| `reason` | `string` | No | The reason for invoking this 3DS Authentication. |
| `shipping_address` | `map[string]any` | No | Contains details about the shipping address for a 3DS Authentication. |
| `status` | `string` | Yes | Status of this Authentication. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Authentication(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Authentication(nil).Load(map[string]any{"id": "authentication_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuthorizationEntity

```go
authorization := client.Authorization(nil)
fmt.Println(authorization.GetName()) // "authorization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The total amount that was authorized or rejected. |
| `amount_details` | `any` | No | Detailed breakdown of amount components. |
| `approved` | `bool` | Yes | Whether the authorization has been approved. |
| `authorization_method` | `string` | Yes | How the card details were provided. |
| `balance_transactions` | `[]any` | Yes | List of balance transactions associated with this authorization. |
| `card` | `map[string]any` | Yes | You can [create physical or virtual cards](https://docs.stripe.com/issuing) that are issued to cardholders. |
| `card_presence` | `string` | No | Whether the card was present at the point of sale for the authorization. |
| `cardholder` | `any` | No | The cardholder to whom this authorization belongs. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | The currency of the cardholder. |
| `fleet` | `any` | No | Fleet-specific information for authorizations using Fleet cards. |
| `fraud_challenges` | `[]any` | No | Fraud challenges sent to the cardholder, if this authorization was declined for fraud risk reasons. |
| `fuel` | `any` | No | Information about fuel that was purchased with this transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `int` | Yes | The total amount that was authorized or rejected. |
| `merchant_currency` | `string` | Yes | The local currency that was presented to the cardholder for the authorization. |
| `merchant_data` | `map[string]any` | Yes |  |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `any` | No | Details about the authorization, such as identifiers, set by the card network. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending_request` | `any` | No | The pending authorization request. |
| `request_history` | `[]any` | Yes | History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. |
| `status` | `string` | Yes | The current status of the authorization in its lifecycle. |
| `token` | `string` | No | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this authorization. |
| `transactions` | `[]any` | Yes | List of [transactions](https://docs.stripe.com/api/issuing/transactions) associated with this authorization. |
| `treasury` | `any` | No | [Treasury](https://docs.stripe.com/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts). |
| `verification_data` | `map[string]any` | Yes |  |
| `verified_by_fraud_challenge` | `bool` | No | Whether the authorization bypassed fraud risk checks because the cardholder has previously completed a fraud challenge on a similar high-risk authorization from the same merchant. |
| `wallet` | `string` | No | The digital wallet used for this transaction. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Authorization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Authorization(nil).Load(map[string]any{"id": "authorization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthorizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BalanceEntity

```go
balance := client.Balance(nil)
fmt.Println(balance.GetName()) // "balance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `[]any` | Yes | Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://docs.stripe.com/api#transfers) or [Payouts API](https://docs.stripe.com/api#payouts). |
| `connect_reserved` | `[]any` | No | Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. |
| `instant_available` | `[]any` | No | Funds that you can pay out using Instant Payouts. |
| `issuing` | `map[string]any` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending` | `[]any` | Yes | Funds that aren't available in the balance yet. |
| `refund_and_dispute_prefunding` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Balance(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BalanceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BalanceSettingEntity

```go
balanceSetting := client.BalanceSetting(nil)
fmt.Println(balanceSetting.GetName()) // "balance_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `debit_negative_balances` | `bool` | No | A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. |
| `payouts` | `any` | No | Settings specific to the account's payouts. |
| `settlement_timing` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BalanceSetting(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BalanceSetting(nil).Create(map[string]any{
    "settlement_timing": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BalanceSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BalanceTransactionEntity

```go
balanceTransaction := client.BalanceTransaction(nil)
fmt.Println(balanceTransaction.GetName()) // "balance_transaction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Gross amount of this transaction (in cents (or local equivalent)). |
| `available_on` | `int` | Yes | The date that the transaction's net funds become available in the Stripe balance. |
| `balance_type` | `string` | Yes | The balance that this transaction impacts. |
| `checkout_session` | `any` | No | The ID of the checkout session (if any) that created the transaction. |
| `created` | `int` | Yes | Time at which the object was created. |
| `credit_note` | `any` | No | The ID of the credit note (if any) related to the transaction. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | The ID of the customer the transaction belongs to. |
| `customer_account` | `string` | No | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `ending_balance` | `int` | Yes | The customer's `balance` after the transaction was applied. |
| `exchange_rate` | `float64` | No | If applicable, this transaction uses an exchange rate. |
| `fee` | `int` | Yes | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | `[]any` | Yes | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | No | The ID of the invoice (if any) related to the transaction. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net` | `int` | Yes | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `string` | Yes | String representing the object's type. |
| `reporting_category` | `string` | Yes | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `any` | No | This transaction relates to the Stripe object. |
| `status` | `string` | Yes | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `string` | Yes | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BalanceTransaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BalanceTransaction(nil).Load(map[string]any{"id": "balance_transaction_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BalanceTransactionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BankAccountEntity

```go
bankAccount := client.BankAccount(nil)
fmt.Println(bankAccount.GetName()) // "bank_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `any` | No | The account this bank account belongs to. |
| `account_holder_name` | `string` | No | The name of the person or business that owns the bank account. |
| `account_holder_type` | `string` | No | The type of entity that holds the account. |
| `account_type` | `string` | No | The bank account type. |
| `available_payout_methods` | `[]any` | No | A set of available payout methods for this bank account. |
| `bank_name` | `string` | No | Name of the bank associated with the routing number (e.g., `WELLS FARGO`). |
| `country` | `string` | Yes | Two-letter ISO code representing the country the bank account is located in. |
| `currency` | `string` | Yes | Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. |
| `customer` | `any` | No | The ID of the customer that the bank account is associated with. |
| `default_for_currency` | `bool` | No | Whether this bank account is the default external account for its currency. |
| `fingerprint` | `string` | No | Uniquely identifies this particular bank account. |
| `future_requirements` | `any` | No | Information about the [upcoming new requirements for the bank account](https://docs.stripe.com/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last4` | `string` | Yes | The last four digits of the bank account number. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `requirements` | `any` | No | Information about the requirements for the bank account, including what information needs to be collected. |
| `routing_number` | `string` | No | The routing transit number for the bank account. |
| `status` | `string` | Yes | For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, `tokenized_account_number_deactivated` or `errored`. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BankAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BankAccount(nil).Load(map[string]any{"id": "bank_account_id", "customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.BankAccount(nil).Remove(map[string]any{"id": "bank_account_id", "customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BankAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CalculationEntity

```go
calculation := client.Calculation(nil)
fmt.Println(calculation.GetName()) // "calculation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_total` | `int` | Yes | Total amount after taxes in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | No | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `map[string]any` | Yes |  |
| `expires_at` | `int` | No | Timestamp of date at which the tax calculation will expire. |
| `id` | `string` | No | Unique identifier for the calculation. |
| `line_items` | `map[string]any` | Yes | The list of items the customer is purchasing. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `ship_from_details` | `any` | No | The details of the ship from location, such as the address. |
| `shipping_cost` | `any` | No | The shipping cost details for the calculation. |
| `tax_amount_exclusive` | `int` | Yes | The amount of tax to be collected on top of the line item prices. |
| `tax_amount_inclusive` | `int` | Yes | The amount of tax already included in the line item prices. |
| `tax_breakdown` | `[]any` | Yes | Breakdown of individual tax amounts that add up to the total. |
| `tax_date` | `int` | Yes | The calculation uses the tax rules and rates that are in effect at this timestamp. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Calculation(nil).Load(map[string]any{"id": "calculation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CalculationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CapabilityEntity

```go
capability := client.Capability(nil)
fmt.Println(capability.GetName()) // "capability"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `any` | Yes | The account for which the capability enables functionality. |
| `future_requirements` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | The identifier for the capability. |
| `object` | `string` | Yes | String representing the object's type. |
| `requested` | `bool` | Yes | Whether the capability has been requested. |
| `requested_at` | `int` | No | Time at which the capability was requested. |
| `requirements` | `map[string]any` | Yes |  |
| `status` | `string` | Yes | The status of the capability. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Capability(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Capability(nil).Load(map[string]any{"id": "capability_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CapabilityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CardEntity

```go
card := client.Card(nil)
fmt.Println(card.GetName()) // "card"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `any` | No |  |
| `address_city` | `string` | No | City/District/Suburb/Town/Village. |
| `address_country` | `string` | No | Billing address country, if provided when creating card. |
| `address_line1` | `string` | No | Address line 1 (Street address/PO Box/Company name). |
| `address_line1_check` | `string` | No | If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `address_line2` | `string` | No | Address line 2 (Apartment/Suite/Unit/Building). |
| `address_state` | `string` | No | State/County/Province/Region. |
| `address_zip` | `string` | No | ZIP or postal code. |
| `address_zip_check` | `string` | No | If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `allow_redisplay` | `bool` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `available_payout_methods` | `[]any` | No | A set of available payout methods for this card. |
| `brand` | `string` | Yes | Card brand. |
| `cancellation_reason` | `string` | No | The reason why the card was canceled. |
| `cardholder` | `map[string]any` | Yes | An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://docs.stripe.com/issuing) cards. |
| `country` | `string` | No | Two-letter ISO code representing the country of the card. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. |
| `customer` | `any` | No | The customer that this card belongs to. |
| `cvc` | `string` | No | The card's CVC. |
| `cvc_check` | `string` | No | If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `default_for_currency` | `bool` | No | Whether this card is the default external account for its currency. |
| `dynamic_last4` | `string` | No | (For tokenized numbers only.) The last four digits of the device account number. |
| `exp_month` | `int` | Yes | Two-digit number representing the card's expiration month. |
| `exp_year` | `int` | Yes | Four-digit number representing the card's expiration year. |
| `financial_account` | `string` | No | The financial account this card is attached to. |
| `fingerprint` | `string` | No | Uniquely identifies this particular card number. |
| `funding` | `string` | Yes | Card funding type. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last4` | `string` | Yes | The last four digits of the card. |
| `latest_fraud_warning` | `any` | No | Stripe’s assessment of whether this card’s details have been compromised. |
| `lifecycle_controls` | `any` | No | Rules that control the lifecycle of this card, such as automatic cancellation. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | Cardholder name. |
| `networks` | `map[string]any` | No |  |
| `number` | `string` | No | The full unredacted card number. |
| `object` | `string` | Yes | String representing the object's type. |
| `personalization_design` | `any` | No | The personalization design object belonging to this card. |
| `regulated_status` | `string` | No | Status of a card based on the card issuer. |
| `replaced_by` | `any` | No | The latest card that replaces this card, if any. |
| `replacement_for` | `any` | No | The card this card replaces, if any. |
| `replacement_reason` | `string` | No | The reason why the previous card needed to be replaced. |
| `second_line` | `string` | No | Text separate from cardholder name, printed on the card. |
| `shipping` | `any` | No | Where and how the card will be shipped. |
| `spending_controls` | `map[string]any` | Yes |  |
| `status` | `string` | No | For external accounts that are cards, possible values are `new` and `errored`. |
| `tokenization_method` | `string` | No | If the card number is tokenized, this is the method that was used. |
| `type` | `string` | Yes | The type of the card. |
| `wallets` | `any` | No | Information relating to digital wallets (like Apple Pay and Google Pay). |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `account` | - | - | - | - |
| `address_city` | - | - | - | - |
| `address_country` | - | - | - | - |
| `address_line1` | - | - | - | - |
| `address_line1_check` | - | - | - | - |
| `address_line2` | - | - | - | - |
| `address_state` | - | - | - | - |
| `address_zip` | - | - | - | - |
| `address_zip_check` | - | - | - | - |
| `allow_redisplay` | - | - | - | - |
| `available_payout_methods` | - | - | - | - |
| `brand` | - | - | - | - |
| `cancellation_reason` | - | - | - | - |
| `cardholder` | - | - | - | - |
| `country` | - | - | - | - |
| `created` | - | - | - | - |
| `currency` | Yes | Yes | Yes | - |
| `customer` | - | - | - | - |
| `cvc` | - | - | - | - |
| `cvc_check` | - | - | - | - |
| `default_for_currency` | - | - | - | - |
| `dynamic_last4` | - | - | - | - |
| `exp_month` | - | - | - | - |
| `exp_year` | - | - | - | - |
| `financial_account` | - | - | - | - |
| `fingerprint` | - | - | - | - |
| `funding` | - | - | - | - |
| `id` | - | - | - | - |
| `last4` | - | - | - | - |
| `latest_fraud_warning` | - | - | - | - |
| `lifecycle_controls` | - | - | - | - |
| `livemode` | - | - | - | - |
| `metadata` | Yes | Yes | Yes | - |
| `name` | - | - | - | - |
| `networks` | - | - | - | - |
| `number` | - | - | - | - |
| `object` | - | - | - | - |
| `personalization_design` | - | - | - | - |
| `regulated_status` | - | - | - | - |
| `replaced_by` | - | - | - | - |
| `replacement_for` | - | - | - | - |
| `replacement_reason` | - | - | - | - |
| `second_line` | - | - | - | - |
| `shipping` | - | - | - | - |
| `spending_controls` | - | - | - | - |
| `status` | Yes | Yes | Yes | - |
| `tokenization_method` | - | - | - | - |
| `type` | - | - | - | - |
| `wallets` | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Card(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Card(nil).Load(map[string]any{"id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Card(nil).Remove(map[string]any{"id": "card_id", "customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CardholderEntity

```go
cardholder := client.Cardholder(nil)
fmt.Println(cardholder.GetName()) // "cardholder"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `map[string]any` | Yes |  |
| `company` | `any` | No | Additional information about a `company` cardholder. |
| `created` | `int` | Yes | Time at which the object was created. |
| `email` | `string` | No | The cardholder's email address. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `individual` | `any` | No | Additional information about an `individual` cardholder. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Yes | The cardholder's name. |
| `object` | `string` | Yes | String representing the object's type. |
| `phone_number` | `string` | No | The cardholder's phone number. |
| `preferred_locales` | `[]any` | No | The cardholder’s preferred locales (languages), ordered by preference. |
| `requirements` | `map[string]any` | Yes |  |
| `spending_controls` | `any` | No | Rules that control spending across this cardholder's cards. |
| `status` | `string` | Yes | Specifies whether to permit authorizations on this cardholder's cards. |
| `type` | `string` | Yes | One of `individual` or `company`. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Cardholder(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Cardholder(nil).Load(map[string]any{"id": "cardholder_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CardholderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CashBalanceEntity

```go
cashBalance := client.CashBalance(nil)
fmt.Println(cashBalance.GetName()) // "cash_balance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `map[string]any` | No | A hash of all cash balances available to this customer. |
| `customer` | `string` | Yes | The ID of the customer whose cash balance this object represents. |
| `customer_account` | `string` | No | The ID of an Account representing a customer whose cash balance this object represents. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `settings` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CashBalance(nil).Load(map[string]any{"customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CashBalanceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CashBalanceTransactionEntity

```go
cashBalanceTransaction := client.CashBalanceTransaction(nil)
fmt.Println(cashBalanceTransaction.GetName()) // "cash_balance_transaction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjusted_for_overdraft` | `map[string]any` | Yes |  |
| `applied_to_payment` | `map[string]any` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `string` | No | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `int` | Yes | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `net_amount` | `int` | Yes | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `string` | Yes | String representing the object's type. |
| `refunded_from_payment` | `map[string]any` | Yes |  |
| `transferred_to_balance` | `map[string]any` | Yes |  |
| `type` | `string` | Yes | The type of the cash balance transaction. |
| `unapplied_from_payment` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CashBalanceTransaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CashBalanceTransaction(nil).Load(map[string]any{"id": "cash_balance_transaction_id", "customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CashBalanceTransactionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ChargeEntity

```go
charge := client.Charge(nil)
fmt.Println(charge.GetName()) // "charge"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount intended to be collected by this payment. |
| `amount_captured` | `int` | Yes | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_refunded` | `int` | Yes | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `application` | `any` | No | ID of the Connect application that created the charge. |
| `application_fee` | `any` | No | The application fee (if any) for the charge. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) requested for the charge. |
| `balance_transaction` | `any` | No | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_details` | `map[string]any` | Yes |  |
| `calculated_statement_descriptor` | `string` | No | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `captured` | `bool` | Yes | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | No | ID of the customer this charge is for if one exists. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `disputed` | `bool` | Yes | Whether the charge has been disputed. |
| `failure_balance_transaction` | `any` | No | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | `string` | No | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | `string` | No | Message to user further explaining reason for charge failure if available. |
| `fraud_details` | `any` | No | Information on fraud assessments for the charge. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | `any` | No | Details about whether the payment was accepted, and why. |
| `paid` | `bool` | Yes | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `payment_intent` | `any` | No | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `string` | No | ID of the payment method used in this charge. |
| `payment_method_details` | `any` | No | Details about the payment method at the time of the transaction. |
| `presentment_details` | `map[string]any` | Yes |  |
| `radar_options` | `map[string]any` | No | Options to configure Radar. |
| `receipt_email` | `string` | No | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `string` | No | This is the URL to view the receipt for this charge. |
| `refunded` | `bool` | Yes | Whether the charge has been fully refunded. |
| `refunds` | `map[string]any` | Yes | A list of refunds that have been applied to the charge. |
| `review` | `any` | No | ID of the review associated with this charge if one exists. |
| `shipping` | `any` | No | Shipping information for the charge. |
| `source_transfer` | `any` | No | The transfer ID which created this charge. |
| `statement_descriptor` | `string` | No | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | `string` | No | Provides information about a card charge. |
| `status` | `string` | Yes | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `transfer` | `any` | No | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `transfer_data` | `any` | No | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `transfer_group` | `string` | No | A string that identifies this transaction as part of a group. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Charge(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Charge(nil).Load(map[string]any{"id": "charge_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChargeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConfigurationEntity

```go
configuration := client.Configuration(nil)
fmt.Println(configuration.GetName()) // "configuration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the configuration is active and can be used to create portal sessions. |
| `application` | `any` | No | ID of the Connect Application that created the configuration. |
| `bbpos_wisepad3` | `map[string]any` | No |  |
| `bbpos_wisepos_e` | `map[string]any` | No |  |
| `business_profile` | `map[string]any` | Yes |  |
| `cellular` | `map[string]any` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `default_return_url` | `string` | No | The default URL to redirect customers to when they click on the portal's link to return to your website. |
| `features` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `is_account_default` | `bool` | No | Whether this Configuration is the default for your account |
| `is_default` | `bool` | Yes | Whether the configuration is the default. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `login_page` | `map[string]any` | Yes |  |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | The name of the configuration. |
| `object` | `string` | Yes | String representing the object's type. |
| `offline` | `map[string]any` | No |  |
| `reboot_window` | `map[string]any` | Yes |  |
| `stripe_s700` | `map[string]any` | No |  |
| `stripe_s710` | `map[string]any` | No |  |
| `tipping` | `map[string]any` | No |  |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `verifone_m425` | `map[string]any` | No |  |
| `verifone_p400` | `map[string]any` | No |  |
| `verifone_p630` | `map[string]any` | No |  |
| `verifone_ux700` | `map[string]any` | No |  |
| `verifone_v660p` | `map[string]any` | No |  |
| `wifi` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Configuration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Configuration(nil).Load(map[string]any{"id": "configuration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Configuration(nil).Remove(map[string]any{"id": "configuration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConfigurationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConfirmationTokenEntity

```go
confirmationToken := client.ConfirmationToken(nil)
fmt.Println(confirmationToken.GetName()) // "confirmation_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `expires_at` | `int` | No | Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `mandate_data` | `any` | No | Data used for generating a Mandate. |
| `metadata` | `map[string]any` | No | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `string` | No | ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for this ConfirmationToken. |
| `payment_method_preview` | `any` | No | Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken. |
| `return_url` | `string` | No | Return URL used to confirm the Intent. |
| `setup_future_usage` | `string` | No | Indicates that you intend to make future payments with this ConfirmationToken's payment method. |
| `setup_intent` | `string` | No | ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `shipping` | `any` | No | Shipping information collected on this ConfirmationToken. |
| `use_stripe_sdk` | `bool` | Yes | Indicates whether the Stripe SDK is used to handle confirmation flow. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConfirmationToken(nil).Load(map[string]any{"id": "confirmation_token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConfirmationTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConnectionTokenEntity

```go
connectionToken := client.ConnectionToken(nil)
fmt.Println(connectionToken.GetName()) // "connection_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `string` | No | The id of the location that this connection token is scoped to. |
| `object` | `string` | Yes | String representing the object's type. |
| `secret` | `string` | Yes | Your application should pass this token to the Stripe Terminal SDK. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConnectionTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CountrySpecEntity

```go
countrySpec := client.CountrySpec(nil)
fmt.Println(countrySpec.GetName()) // "country_spec"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_currency` | `string` | Yes | The default currency for this country. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `object` | `string` | Yes | String representing the object's type. |
| `supported_bank_account_currencies` | `map[string]any` | Yes | Currencies that can be accepted in the specific country (for transfers). |
| `supported_payment_currencies` | `[]any` | Yes | Currencies that can be accepted in the specified country (for payments). |
| `supported_payment_methods` | `[]any` | Yes | Payment methods available in the specified country. |
| `supported_transfer_countries` | `[]any` | Yes | Countries that can accept transfers from the specified country. |
| `verification_fields` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CountrySpec(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CountrySpec(nil).Load(map[string]any{"id": "country_spec_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CountrySpecEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CouponEntity

```go
coupon := client.Coupon(nil)
fmt.Println(coupon.GetName()) // "coupon"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_off` | `int` | No | Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer. |
| `applies_to` | `map[string]any` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off. |
| `currency_options` | `map[string]any` | No | Coupons defined in each available currency option. |
| `duration` | `string` | Yes | One of `forever`, `once`, or `repeating`. |
| `duration_in_months` | `int` | No | If `duration` is `repeating`, the number of months the coupon applies. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | `int` | No | Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | Name of the coupon displayed to customers on for instance invoices or receipts. |
| `object` | `string` | Yes | String representing the object's type. |
| `percent_off` | `float64` | No | Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. |
| `redeem_by` | `int` | No | Date after which the coupon can no longer be redeemed. |
| `times_redeemed` | `int` | Yes | Number of times this coupon has been applied to a customer. |
| `valid` | `bool` | Yes | Taking account of the above properties, whether this coupon can still be applied to a customer. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Coupon(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Coupon(nil).Load(map[string]any{"id": "coupon_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CouponEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreditBalanceSummaryEntity

```go
creditBalanceSummary := client.CreditBalanceSummary(nil)
fmt.Println(creditBalanceSummary.GetName()) // "credit_balance_summary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_balance` | `map[string]any` | Yes |  |
| `ledger_balance` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CreditBalanceSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreditBalanceSummaryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreditBalanceTransactionEntity

```go
creditBalanceTransaction := client.CreditBalanceTransaction(nil)
fmt.Println(creditBalanceTransaction.GetName()) // "credit_balance_transaction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `credit` | `any` | No | Credit details for this credit balance transaction. |
| `credit_grant` | `any` | Yes | The credit grant associated with this credit balance transaction. |
| `debit` | `any` | No | Debit details for this credit balance transaction. |
| `effective_at` | `int` | Yes | The effective time of this credit balance transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `test_clock` | `any` | No | ID of the test clock this credit balance transaction belongs to. |
| `type` | `string` | No | The type of credit balance transaction (credit or debit). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CreditBalanceTransaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CreditBalanceTransaction(nil).Load(map[string]any{"id": "credit_balance_transaction_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreditBalanceTransactionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreditGrantEntity

```go
creditGrant := client.CreditGrant(nil)
fmt.Println(creditGrant.GetName()) // "credit_grant"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `map[string]any` | Yes |  |
| `applicability_config` | `map[string]any` | Yes |  |
| `category` | `string` | Yes | The category of this credit grant. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `any` | Yes | ID of the customer receiving the billing credits. |
| `customer_account` | `string` | No | ID of the account representing the customer receiving the billing credits |
| `effective_at` | `int` | No | The time when the billing credits become effective-when they're eligible for use. |
| `expires_at` | `int` | No | The time when the billing credits expire. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | A descriptive name shown in dashboard. |
| `object` | `string` | Yes | String representing the object's type. |
| `priority` | `int` | No | The priority for applying this credit grant. |
| `test_clock` | `any` | No | ID of the test clock this credit grant belongs to. |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `voided_at` | `int` | No | The time when this credit grant was voided. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CreditGrant(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CreditGrant(nil).Load(map[string]any{"id": "credit_grant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreditGrantEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreditNoteEntity

```go
creditNote := client.CreditNote(nil)
fmt.Println(creditNote.GetName()) // "credit_note"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax. |
| `amount_shipping` | `int` | Yes | This is the sum of all the shipping amounts. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | ID of the customer. |
| `customer_account` | `string` | No | ID of the account representing the customer. |
| `customer_balance_transaction` | `any` | No | Customer balance transaction related to this credit note. |
| `discount_amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the total amount of discount that was credited. |
| `discount_amounts` | `[]any` | Yes | The aggregate amounts calculated per discount for all line items. |
| `effective_at` | `int` | No | The date when this credit note is in effect. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | Yes | ID of the invoice. |
| `lines` | `map[string]any` | Yes | Line items that make up the credit note |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `memo` | `string` | No | Customer-facing text that appears on the credit note PDF. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `string` | Yes | A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice. |
| `object` | `string` | Yes | String representing the object's type. |
| `out_of_band_amount` | `int` | No | Amount that was credited outside of Stripe. |
| `pdf` | `string` | Yes | The link to download the PDF of the credit note. |
| `post_payment_amount` | `int` | Yes | The amount of the credit note that was refunded to the customer, credited to the customer's balance, credited outside of Stripe, or any combination thereof. |
| `pre_payment_amount` | `int` | Yes | The amount of the credit note by which the invoice's `amount_remaining` and `amount_due` were reduced. |
| `pretax_credit_amounts` | `[]any` | Yes | The pretax credit amounts (ex: discount, credit grants, etc) for all line items. |
| `reason` | `string` | No | Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory` |
| `refunds` | `[]any` | Yes | Refunds related to this credit note. |
| `shipping_cost` | `any` | No | The details of the cost of shipping, including the ShippingRate applied to the invoice. |
| `status` | `string` | Yes | Status of this credit note, one of `issued` or `void`. |
| `subtotal` | `int` | Yes | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts. |
| `subtotal_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts. |
| `total` | `int` | Yes | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount. |
| `total_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts. |
| `total_taxes` | `[]any` | No | The aggregate tax information for all line items. |
| `type` | `string` | Yes | Type of this credit note, one of `pre_payment` or `post_payment`. |
| `voided_at` | `int` | No | The time that the credit note was voided. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CreditNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CreditNote(nil).Load(map[string]any{"id": "credit_note_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreditNoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreditNoteLineEntity

```go
creditNoteLine := client.CreditNoteLine(nil)
fmt.Println(creditNoteLine.GetName()) // "credit_note_line"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts. |
| `description` | `string` | No | Description of the item being credited. |
| `discount_amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `[]any` | Yes | The amount of discount calculated per discount for this line item |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice_line_item` | `string` | No | ID of the invoice line item being credited |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `pretax_credit_amounts` | `[]any` | Yes | The pretax credit amounts (ex: discount, credit grants, etc) for this line item. |
| `quantity` | `int` | No | The number of units of product being credited. |
| `tax_rates` | `[]any` | Yes | The tax rates which apply to the line item. |
| `taxes` | `[]any` | No | The tax information of the line item. |
| `type` | `string` | Yes | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | `int` | No | The cost of each unit of product being credited. |
| `unit_amount_decimal` | `string` | No | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CreditNoteLine(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreditNoteLineEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreditReversalEntity

```go
creditReversal := client.CreditReversal(nil)
fmt.Println(creditReversal.GetName()) // "credit_reversal"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `financial_account` | `string` | Yes | The FinancialAccount to reverse funds from. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `string` | Yes | The rails used to reverse the funds. |
| `object` | `string` | Yes | String representing the object's type. |
| `received_credit` | `string` | Yes | The ReceivedCredit being reversed. |
| `status` | `string` | Yes | Status of the CreditReversal |
| `status_transitions` | `map[string]any` | Yes |  |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CreditReversal(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CreditReversal(nil).Load(map[string]any{"id": "credit_reversal_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreditReversalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomerEntity

```go
customer := client.Customer(nil)
fmt.Println(customer.GetName()) // "customer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `any` | No | The customer's billing address. |
| `balance` | `int` | No | The current balance, if any, that's stored on the customer in their default currency. |
| `business_name` | `string` | No | The customer's business name. |
| `cash_balance` | `any` | No | The current funds being held by Stripe on behalf of the customer. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes. |
| `customer_account` | `string` | No | The ID of an Account representing a customer. |
| `default_source` | `any` | No | ID of the default payment source for the customer. |
| `delinquent` | `bool` | No | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discount` | `any` | No | Describes the current discount active on the customer, if there is one. |
| `email` | `string` | No | The customer's email address. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `individual_name` | `string` | No | The customer's individual name. |
| `invoice_credit_balance` | `map[string]any` | No | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_prefix` | `string` | No | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `map[string]any` | No |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | The customer's full name or business name. |
| `next_invoice_sequence` | `int` | No | The suffix of the customer's next invoice number (for example, 0001). |
| `object` | `string` | Yes | String representing the object's type. |
| `phone` | `string` | No | The customer's phone number. |
| `preferred_locales` | `[]any` | No | The customer's preferred locales (languages), ordered by preference. |
| `shipping` | `any` | No | Mailing and shipping address for the customer. |
| `sources` | `map[string]any` | Yes | The customer's payment sources, if any. |
| `subscriptions` | `map[string]any` | Yes | The customer's current subscriptions, if any. |
| `tax` | `map[string]any` | Yes |  |
| `tax_exempt` | `string` | No | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `map[string]any` | Yes | The customer's tax IDs. |
| `test_clock` | `any` | No | ID of the test clock that this customer belongs to. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Customer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Customer(nil).Load(map[string]any{"id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Customer(nil).Remove(map[string]any{"id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomerBalanceTransactionEntity

```go
customerBalanceTransaction := client.CustomerBalanceTransaction(nil)
fmt.Println(customerBalanceTransaction.GetName()) // "customer_balance_transaction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The amount of the transaction. |
| `checkout_session` | `any` | No | The ID of the checkout session (if any) that created the transaction. |
| `created` | `int` | Yes | Time at which the object was created. |
| `credit_note` | `any` | No | The ID of the credit note (if any) related to the transaction. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | The ID of the customer the transaction belongs to. |
| `customer_account` | `string` | No | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `ending_balance` | `int` | Yes | The customer's `balance` after the transaction was applied. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | No | The ID of the invoice (if any) related to the transaction. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `type` | `string` | Yes | Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or… |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomerBalanceTransaction(nil).Load(map[string]any{"id": "customer_balance_transaction_id", "customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerBalanceTransactionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomerSessionEntity

```go
customerSession := client.CustomerSession(nil)
fmt.Println(customerSession.GetName()) // "customer_session"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_secret` | `string` | Yes | The client secret of this Customer Session. |
| `components` | `map[string]any` | Yes | Configuration for the components supported by this Customer Session. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `any` | Yes | The Customer the Customer Session was created for. |
| `customer_account` | `string` | No | The Account that the Customer Session was created for. |
| `expires_at` | `int` | Yes | The timestamp at which this Customer Session will expire. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerSessionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DebitReversalEntity

```go
debitReversal := client.DebitReversal(nil)
fmt.Println(debitReversal.GetName()) // "debit_reversal"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `financial_account` | `string` | No | The FinancialAccount to reverse funds from. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `linked_flows` | `any` | No | Other flows linked to a DebitReversal. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `string` | Yes | The rails used to reverse the funds. |
| `object` | `string` | Yes | String representing the object's type. |
| `received_debit` | `string` | Yes | The ReceivedDebit being reversed. |
| `status` | `string` | Yes | Status of the DebitReversal |
| `status_transitions` | `map[string]any` | Yes |  |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DebitReversal(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DebitReversal(nil).Load(map[string]any{"id": "debit_reversal_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DebitReversalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedAccountEntity

```go
deletedAccount := client.DeletedAccount(nil)
fmt.Println(deletedAccount.GetName()) // "deleted_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedAccount(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedApplePayDomainEntity

```go
deletedApplePayDomain := client.DeletedApplePayDomain(nil)
fmt.Println(deletedApplePayDomain.GetName()) // "deleted_apple_pay_domain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedApplePayDomain(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedApplePayDomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedCouponEntity

```go
deletedCoupon := client.DeletedCoupon(nil)
fmt.Println(deletedCoupon.GetName()) // "deleted_coupon"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedCoupon(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedCouponEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedExternalAccountEntity

```go
deletedExternalAccount := client.DeletedExternalAccount(nil)
fmt.Println(deletedExternalAccount.GetName()) // "deleted_external_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedExternalAccount(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedExternalAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedInvoiceitemEntity

```go
deletedInvoiceitem := client.DeletedInvoiceitem(nil)
fmt.Println(deletedInvoiceitem.GetName()) // "deleted_invoiceitem"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedInvoiceitem(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedInvoiceitemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedPersonEntity

```go
deletedPerson := client.DeletedPerson(nil)
fmt.Println(deletedPerson.GetName()) // "deleted_person"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedPerson(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedPersonEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedPlanEntity

```go
deletedPlan := client.DeletedPlan(nil)
fmt.Println(deletedPlan.GetName()) // "deleted_plan"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedPlan(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedPlanEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedProductFeatureEntity

```go
deletedProductFeature := client.DeletedProductFeature(nil)
fmt.Println(deletedProductFeature.GetName()) // "deleted_product_feature"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedProductFeature(nil).Remove(map[string]any{"id": "id", "product_id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedProductFeatureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedSubscriptionItemEntity

```go
deletedSubscriptionItem := client.DeletedSubscriptionItem(nil)
fmt.Println(deletedSubscriptionItem.GetName()) // "deleted_subscription_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedSubscriptionItem(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedSubscriptionItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedWebhookEndpointEntity

```go
deletedWebhookEndpoint := client.DeletedWebhookEndpoint(nil)
fmt.Println(deletedWebhookEndpoint.GetName()) // "deleted_webhook_endpoint"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedWebhookEndpoint(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedWebhookEndpointEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DiscountEntity

```go
discount := client.Discount(nil)
fmt.Println(discount.GetName()) // "discount"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checkout_session` | `string` | No | The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. |
| `customer` | `any` | No | The ID of the customer associated with this discount. |
| `customer_account` | `string` | No | The ID of the account representing the customer associated with this discount. |
| `end` | `int` | No | If the coupon has a duration of `repeating`, the date that this discount will end. |
| `id` | `string` | Yes | The ID of the discount object. |
| `invoice` | `string` | No | The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice. |
| `invoice_item` | `string` | No | The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item. |
| `object` | `string` | Yes | String representing the object's type. |
| `promotion_code` | `any` | No | The promotion code applied to create this discount. |
| `source` | `map[string]any` | Yes |  |
| `start` | `int` | Yes | Date that the coupon was applied. |
| `subscription` | `string` | No | The subscription that this coupon is applied to, if it is applied to a particular subscription. |
| `subscription_item` | `string` | No | The subscription item that this coupon is applied to, if it is applied to a particular subscription item. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Discount(nil).Load(map[string]any{"customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Discount(nil).Remove(map[string]any{"customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DiscountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DisputeEntity

```go
dispute := client.Dispute(nil)
fmt.Println(dispute.GetName()) // "dispute"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Disputed amount. |
| `balance_transactions` | `[]any` | Yes | List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute. |
| `charge` | `any` | Yes | ID of the charge that's disputed. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `enhanced_eligibility_types` | `[]any` | Yes | List of eligibility types that are included in `enhanced_evidence`. |
| `evidence` | `map[string]any` | Yes |  |
| `evidence_details` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `is_charge_refundable` | `bool` | Yes | If true, it's still possible to refund the disputed payment. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `loss_reason` | `string` | No | The enum that describes the dispute loss outcome. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `any` | No | ID of the PaymentIntent that's disputed. |
| `payment_method_details` | `map[string]any` | Yes |  |
| `reason` | `string` | Yes | Reason given by cardholder for dispute. |
| `status` | `string` | Yes | The current status of a dispute. |
| `transaction` | `any` | Yes | The transaction being disputed. |
| `treasury` | `any` | No | [Treasury](https://docs.stripe.com/api/treasury) details related to this dispute if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts) |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `amount` | - | - | - |
| `balance_transactions` | Yes | Yes | Yes |
| `charge` | - | - | - |
| `created` | - | - | - |
| `currency` | - | - | - |
| `enhanced_eligibility_types` | - | - | - |
| `evidence` | - | - | - |
| `evidence_details` | - | - | - |
| `id` | - | - | - |
| `is_charge_refundable` | - | - | - |
| `livemode` | - | - | - |
| `loss_reason` | - | - | - |
| `metadata` | - | - | - |
| `object` | - | - | - |
| `payment_intent` | - | - | - |
| `payment_method_details` | - | - | - |
| `reason` | - | - | - |
| `status` | - | - | - |
| `transaction` | - | - | - |
| `treasury` | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Dispute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Dispute(nil).Load(map[string]any{"id": "dispute_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DisputeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DomainEntity

```go
domain := client.Domain(nil)
fmt.Println(domain.GetName()) // "domain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `domain_name` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Domain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EarlyFraudWarningEntity

```go
earlyFraudWarning := client.EarlyFraudWarning(nil)
fmt.Println(earlyFraudWarning.GetName()) // "early_fraud_warning"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionable` | `bool` | Yes | An EFW is actionable if it has not received a dispute and has not been fully refunded. |
| `charge` | `any` | Yes | ID of the charge this early fraud warning is for, optionally expanded. |
| `created` | `int` | Yes | Time at which the object was created. |
| `fraud_type` | `string` | Yes | The type of fraud labelled by the issuer. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `any` | No | ID of the Payment Intent this early fraud warning is for, optionally expanded. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EarlyFraudWarning(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EarlyFraudWarning(nil).Load(map[string]any{"id": "early_fraud_warning_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EarlyFraudWarningEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EphemeralKeyEntity

```go
ephemeralKey := client.EphemeralKey(nil)
fmt.Println(ephemeralKey.GetName()) // "ephemeral_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `expires` | `int` | Yes | Time at which the key will expire. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `secret` | `string` | No | The key's secret. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.EphemeralKey(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EphemeralKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EventEntity

```go
event := client.Event(nil)
fmt.Println(event.GetName()) // "event"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | The connected account that originates the event. |
| `api_version` | `string` | No | The Stripe API version used to render `data` when the event was created. |
| `context` | `string` | No | Authentication context needed to fetch the event or related object. |
| `created` | `int` | Yes | Time at which the object was created. |
| `data` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending_webhooks` | `int` | Yes | Number of webhooks that haven't been successfully delivered (for example, to return a 20x response) to the URLs you specify. |
| `request` | `any` | No | Information on the API request that triggers the event. |
| `type` | `string` | Yes | Description of the event (for example, `invoice.created` or `charge.refunded`). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Event(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Event(nil).Load(map[string]any{"id": "event_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ExchangeRateEntity

```go
exchangeRate := client.ExchangeRate(nil)
fmt.Println(exchangeRate.GetName()) // "exchange_rate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the object. |
| `object` | `string` | Yes | String representing the object's type. |
| `rates` | `map[string]any` | Yes | Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ExchangeRate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ExchangeRate(nil).Load(map[string]any{"id": "exchange_rate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExchangeRateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ExternalAccountEntity

```go
externalAccount := client.ExternalAccount(nil)
fmt.Println(externalAccount.GetName()) // "external_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | Yes | The list contains all external accounts that have been attached to the Stripe account. |
| `has_more` | `bool` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | Yes | The URL where this list can be accessed. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ExternalAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ExternalAccount(nil).Load(map[string]any{"id": "external_account_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExternalAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FeatureEntity

```go
feature := client.Feature(nil)
fmt.Println(feature.GetName()) // "feature"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `entitlement_feature` | `map[string]any` | Yes | A feature represents a monetizable ability or functionality in your system. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | Yes | A unique key you provide as your own system identifier. |
| `metadata` | `map[string]any` | Yes | Set of key-value pairs that you can attach to an object. |
| `name` | `string` | Yes | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Feature(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Feature(nil).Load(map[string]any{"id": "feature_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FeedbackOptionEntity

```go
feedbackOption := client.FeedbackOption(nil)
fmt.Println(feedbackOption.GetName()) // "feedback_option"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deactivated_at` | `int` | No | The time the feedback option was deactivated, if any. |
| `description` | `string` | Yes | An arbitrary string attached to the object. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The feedback option's status. |
| `status_transitions` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.FeedbackOption(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FeedbackOption(nil).Load(map[string]any{"id": "feedback_option_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FeedbackOptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FileEntity

```go
file := client.File(nil)
fmt.Println(file.GetName()) // "file"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `data` | `[]any` | Yes | Details about each object. |
| `expires_at` | `int` | No | The file expires and isn't available at this time in epoch seconds. |
| `filename` | `string` | No | The suitable name for saving the file to a filesystem. |
| `has_more` | `bool` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `links` | `map[string]any` | Yes | A list of [file links](https://docs.stripe.com/api#file_links) that point at this file. |
| `object` | `string` | Yes | String representing the object's type. |
| `purpose` | `string` | Yes | The [purpose](https://docs.stripe.com/file-upload#uploading-a-file) of the uploaded file. |
| `size` | `int` | Yes | The size of the file object in bytes. |
| `title` | `string` | No | A suitable title for the document. |
| `type` | `string` | No | The returned file type (for example, `csv`, `pdf`, `jpg`, or `png`). |
| `url` | `string` | Yes | The URL where this list can be accessed. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `created` | - | - | - |
| `data` | - | - | - |
| `expires_at` | - | - | - |
| `filename` | - | - | - |
| `has_more` | - | - | - |
| `id` | - | - | - |
| `links` | - | - | - |
| `object` | - | - | - |
| `purpose` | - | - | - |
| `size` | - | - | - |
| `title` | - | - | - |
| `type` | - | - | - |
| `url` | - | Yes | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.File(nil).Load(map[string]any{"id": "file_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FileLinkEntity

```go
fileLink := client.FileLink(nil)
fmt.Println(fileLink.GetName()) // "file_link"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `expired` | `bool` | Yes | Returns if the link is already expired. |
| `expires_at` | `int` | No | Time that the link expires. |
| `file` | `any` | Yes | The file object this link points to. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | No | The publicly accessible URL to download the file. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.FileLink(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FileLink(nil).Load(map[string]any{"id": "file_link_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FileLinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FinancialAccountEntity

```go
financialAccount := client.FinancialAccount(nil)
fmt.Println(financialAccount.GetName()) // "financial_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_features` | `[]any` | No | The array of paths to active Features in the Features hash. |
| `balance` | `map[string]any` | Yes | Balance information for the FinancialAccount |
| `country` | `string` | Yes | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | `int` | Yes | Time at which the object was created. |
| `features` | `map[string]any` | Yes | Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`. |
| `financial_addresses` | `[]any` | Yes | The set of credentials that resolve to a FinancialAccount. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `is_default` | `bool` | No |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | No | The nickname for the FinancialAccount. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending_features` | `[]any` | No | The array of paths to pending Features in the Features hash. |
| `platform_restrictions` | `any` | No | The set of functionalities that the platform can restrict on the FinancialAccount. |
| `restricted_features` | `[]any` | No | The array of paths to restricted Features in the Features hash. |
| `status` | `string` | Yes | Status of this FinancialAccount. |
| `status_details` | `map[string]any` | Yes |  |
| `supported_currencies` | `[]any` | Yes | The currencies the FinancialAccount can hold a balance in. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.FinancialAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FinancialAccount(nil).Load(map[string]any{"id": "financial_account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FinancialAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FinancialAccountFeatureEntity

```go
financialAccountFeature := client.FinancialAccountFeature(nil)
fmt.Println(financialAccountFeature.GetName()) // "financial_account_feature"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_issuing` | `map[string]any` | Yes | Toggle settings for enabling/disabling a feature |
| `deposit_insurance` | `map[string]any` | Yes | Toggle settings for enabling/disabling a feature |
| `financial_addresses` | `map[string]any` | No | Settings related to Financial Addresses features on a Financial Account |
| `id` | `string` | No |  |
| `inbound_transfers` | `map[string]any` | No | InboundTransfers contains inbound transfers features for a FinancialAccount. |
| `intra_stripe_flows` | `map[string]any` | Yes | Toggle settings for enabling/disabling a feature |
| `object` | `string` | Yes | String representing the object's type. |
| `outbound_payments` | `map[string]any` | No | Settings related to Outbound Payments features on a Financial Account |
| `outbound_transfers` | `map[string]any` | No | OutboundTransfers contains outbound transfers features for a FinancialAccount. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FinancialAccountFeature(nil).Load(map[string]any{"id": "financial_account_feature_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FinancialAccountFeatureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FundCashBalanceEntity

```go
fundCashBalance := client.FundCashBalance(nil)
fmt.Println(fundCashBalance.GetName()) // "fund_cash_balance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjusted_for_overdraft` | `map[string]any` | Yes |  |
| `applied_to_payment` | `map[string]any` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `string` | No | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `int` | Yes | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `net_amount` | `int` | Yes | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `string` | Yes | String representing the object's type. |
| `refunded_from_payment` | `map[string]any` | Yes |  |
| `transferred_to_balance` | `map[string]any` | Yes |  |
| `type` | `string` | Yes | The type of the cash balance transaction. |
| `unapplied_from_payment` | `map[string]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FundCashBalanceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FundingInstructionEntity

```go
fundingInstruction := client.FundingInstruction(nil)
fmt.Println(fundingInstruction.GetName()) // "funding_instruction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `string` | Yes | The country of the bank account to fund |
| `financial_addresses` | `[]any` | Yes | A list of financial addresses that can be used to fund a particular balance |
| `type` | `string` | Yes | The bank_transfer type |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FundingInstructionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HistoryEntity

```go
history := client.History(nil)
fmt.Println(history.GetName()) // "history"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Gross amount of this transaction (in cents (or local equivalent)). |
| `available_on` | `int` | Yes | The date that the transaction's net funds become available in the Stripe balance. |
| `balance_type` | `string` | Yes | The balance that this transaction impacts. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `exchange_rate` | `float64` | No | If applicable, this transaction uses an exchange rate. |
| `fee` | `int` | Yes | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | `[]any` | Yes | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `net` | `int` | Yes | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `string` | Yes | String representing the object's type. |
| `reporting_category` | `string` | Yes | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `any` | No | This transaction relates to the Stripe object. |
| `status` | `string` | Yes | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `string` | Yes | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.History(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InboundTransferEntity

```go
inboundTransfer := client.InboundTransfer(nil)
fmt.Println(inboundTransfer.GetName()) // "inbound_transfer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `cancelable` | `bool` | Yes | Returns `true` if the InboundTransfer is able to be canceled. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `failure_details` | `any` | No | Details about this InboundTransfer's failure. |
| `financial_account` | `string` | Yes | The FinancialAccount that received the funds. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `linked_flows` | `map[string]any` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `origin_payment_method` | `string` | No | The origin payment method to be debited for an InboundTransfer. |
| `origin_payment_method_details` | `any` | No | Details about the PaymentMethod for an InboundTransfer. |
| `returned` | `bool` | No | Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state. |
| `statement_descriptor` | `string` | Yes | Statement descriptor shown when funds are debited from the source. |
| `status` | `string` | Yes | Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. |
| `status_transitions` | `map[string]any` | Yes |  |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.InboundTransfer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.InboundTransfer(nil).Load(map[string]any{"id": "inbound_transfer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InboundTransferEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InstallEntity

```go
install := client.Install(nil)
fmt.Println(install.GetName()) // "install"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | The ID of the account that the app install belongs to. |
| `app` | `string` | Yes | The ID of the app installed. |
| `approval_required` | `bool` | Yes | Whether the installer must authorize pending permissions, content security policy entries, or endpoints. |
| `auth_code` | `string` | No | The authorization code for an oauth app install. |
| `channel` | `string` | Yes | The distribution channel associated with the app install. |
| `content_security_policy_granted` | `map[string]any` | Yes |  |
| `content_security_policy_pending` | `map[string]any` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `created_by` | `string` | No | The ID of the embedding platform that created the install, if applicable. |
| `endpoints_granted` | `[]any` | Yes | The endpoint URLs authorized by the installer. |
| `endpoints_pending` | `[]any` | Yes | The endpoint URLs requested by the latest app version that the installer has not authorized. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `permissions_granted` | `[]any` | Yes | The permissions authorized by the installer. |
| `permissions_pending` | `[]any` | Yes | The permissions requested by the latest app version that the installer has not authorized. |
| `status` | `string` | Yes | The status of the app install. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Install(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Install(nil).Load(map[string]any{"id": "install_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InstallEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InvoiceEntity

```go
invoice := client.Invoice(nil)
fmt.Println(invoice.GetName()) // "invoice"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_country` | `string` | No | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `string` | No | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `[]any` | No | The account tax IDs associated with the invoice. |
| `amount_due` | `int` | Yes | Final amount due at this time for this invoice. |
| `amount_overpaid` | `int` | Yes | Amount that was overpaid on the invoice. |
| `amount_paid` | `int` | Yes | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | `int` | Yes | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_remaining` | `int` | Yes | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | `int` | Yes | This is the sum of all the shipping amounts. |
| `application` | `any` | No | ID of the Connect Application that created the invoice. |
| `attempt_count` | `int` | Yes | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | `bool` | Yes | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | `bool` | Yes | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_tax` | `map[string]any` | Yes |  |
| `automatically_finalizes_at` | `int` | No | The time when this invoice is currently scheduled to be automatically finalized. |
| `billing_reason` | `string` | No | Indicates the reason why the invoice was created. |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_secret` | `any` | No | The confirmation secret associated with this invoice. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `[]any` | No | Custom fields displayed on the invoice. |
| `customer` | `any` | Yes | The ID of the customer to bill. |
| `customer_account` | `string` | No | The ID of the account representing the customer to bill. |
| `customer_address` | `any` | No | The customer's address. |
| `customer_email` | `string` | No | The customer's email. |
| `customer_name` | `string` | No | The customer's name. |
| `customer_phone` | `string` | No | The customer's phone number. |
| `customer_shipping` | `any` | No | The customer's shipping information. |
| `customer_tax_exempt` | `string` | No | The customer's tax exempt status. |
| `customer_tax_ids` | `[]any` | No | The customer's tax IDs. |
| `default_payment_method` | `any` | No | ID of the default payment method for the invoice. |
| `default_source` | `any` | No | ID of the default payment source for the invoice. |
| `default_tax_rates` | `[]any` | Yes | The tax rates applied to this invoice, if any. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discounts` | `[]any` | Yes | The discounts applied to the invoice. |
| `due_date` | `int` | No | The date on which payment for this invoice is due. |
| `effective_at` | `int` | No | The date when this invoice is in effect. |
| `ending_balance` | `int` | No | Ending customer balance after the invoice is finalized. |
| `footer` | `string` | No | Footer displayed on the invoice. |
| `from_invoice` | `any` | No | Details of the invoice that was cloned. |
| `hosted_invoice_url` | `string` | No | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice_pdf` | `string` | No | The link to download the PDF for the invoice. |
| `issuer` | `map[string]any` | Yes |  |
| `last_finalization_error` | `any` | No | The error encountered during the previous attempt to finalize the invoice. |
| `latest_revision` | `any` | No | The ID of the most recent non-draft revision of this invoice |
| `lines` | `map[string]any` | Yes | The individual line items that make up the invoice. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_payment_attempt` | `int` | No | The time at which payment will next be attempted. |
| `number` | `string` | No | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) for which the funds of the invoice payment are intended. |
| `parent` | `any` | No | The parent that generated this invoice |
| `payment_settings` | `map[string]any` | Yes |  |
| `payments` | `map[string]any` | Yes | Payments for this invoice. |
| `period_end` | `int` | Yes | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | `int` | Yes | The earliest timestamp at which invoice items can be associated with this invoice. |
| `post_payment_credit_notes_amount` | `int` | Yes | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | `int` | Yes | Total amount of all pre-payment credit notes issued for this invoice. |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this invoice. |
| `rendering` | `any` | No | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `shipping_cost` | `any` | No | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | `any` | No | Shipping details for the invoice. |
| `starting_balance` | `int` | Yes | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | `string` | No | Extra information about an invoice for the customer's credit card statement. |
| `status` | `string` | No | The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. |
| `status_details` | `map[string]any` | No |  |
| `status_transitions` | `map[string]any` | Yes |  |
| `subtotal` | `int` | Yes | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `test_clock` | `any` | No | ID of the test clock this invoice belongs to. |
| `threshold_reason` | `map[string]any` | Yes |  |
| `total` | `int` | Yes | Total after discounts and taxes. |
| `total_discount_amounts` | `[]any` | No | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `[]any` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `[]any` | No | The aggregate tax information of all line items. |
| `webhooks_delivered_at` | `int` | No | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Invoice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Invoice(nil).Load(map[string]any{"id": "invoice_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Invoice(nil).Remove(map[string]any{"id": "invoice_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InvoicePaymentEntity

```go
invoicePayment := client.InvoicePayment(nil)
fmt.Println(invoicePayment.GetName()) // "invoice_payment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_paid` | `int` | No | Amount that was actually paid for this invoice, in cents (or local equivalent). |
| `amount_requested` | `int` | Yes | Amount intended to be paid toward this invoice, in cents (or local equivalent) |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | Yes | The invoice that was paid. |
| `is_default` | `bool` | Yes | Stripe automatically creates a default InvoicePayment when the invoice is finalized, and keeps it synchronized with the invoice’s `amount_remaining`. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment` | `map[string]any` | Yes |  |
| `status` | `string` | Yes | The status of the payment, one of `open`, `paid`, or `canceled`. |
| `status_transitions` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.InvoicePayment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.InvoicePayment(nil).Load(map[string]any{"id": "invoice_payment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InvoicePaymentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InvoiceRenderingTemplateEntity

```go
invoiceRenderingTemplate := client.InvoiceRenderingTemplate(nil)
fmt.Println(invoiceRenderingTemplate.GetName()) // "invoice_rendering_template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | No | A brief description of the template, hidden from customers |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The status of the template, one of `active` or `archived`. |
| `version` | `int` | Yes | Version of this template; version increases by one when an update on the template changes any field that controls invoice rendering |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.InvoiceRenderingTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.InvoiceRenderingTemplate(nil).Load(map[string]any{"id": "invoice_rendering_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InvoiceRenderingTemplateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InvoiceitemEntity

```go
invoiceitem := client.Invoiceitem(nil)
fmt.Println(invoiceitem.GetName()) // "invoiceitem"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in the `currency` specified) of the invoice item. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | The ID of the customer to bill for this invoice item. |
| `customer_account` | `string` | No | The ID of the account to bill for this invoice item. |
| `date` | `int` | Yes | Time at which the object was created. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discountable` | `bool` | Yes | If true, discounts will apply to this invoice item. |
| `discounts` | `[]any` | No | The discounts which apply to the invoice item. |
| `frozen_fields` | `[]any` | No | Array of field names that can't be modified. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | No | The ID of the invoice this invoice item belongs to. |
| `invoicing_rules` | `[]any` | No | The rules that control when this invoice item is eligible for invoicing. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net_amount` | `int` | No | The amount after discounts, but before credits and taxes. |
| `object` | `string` | Yes | String representing the object's type. |
| `parent` | `any` | No | The parent that generated this invoice item. |
| `period` | `map[string]any` | Yes |  |
| `pricing` | `any` | No | The pricing information of the invoice item. |
| `proration` | `bool` | Yes | Whether the invoice item was created automatically as a proration adjustment when the customer switched plans. |
| `proration_details` | `map[string]any` | Yes |  |
| `quantity` | `int` | Yes | Quantity of units for the invoice item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `string` | Yes | Non-negative decimal with at most 12 decimal places. |
| `tax_rates` | `[]any` | No | The tax rates which apply to the invoice item. |
| `test_clock` | `any` | No | ID of the test clock this invoice item belongs to. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Invoiceitem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Invoiceitem(nil).Load(map[string]any{"id": "invoiceitem_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InvoiceitemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LineEntity

```go
line := client.Line(nil)
fmt.Println(line.GetName()) // "line"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The amount, in cents (or local equivalent). |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discount_amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `[]any` | No | The amount of discount calculated per discount for this line item. |
| `discountable` | `bool` | Yes | If true, discounts will apply to this line item. |
| `discounts` | `[]any` | Yes | The discounts applied to the invoice line item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `string` | No | The ID of the invoice that contains this line item. |
| `invoice_line_item` | `string` | No | ID of the invoice line item being credited |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `parent` | `any` | No | The parent that generated this line item. |
| `period` | `map[string]any` | Yes |  |
| `pretax_credit_amounts` | `[]any` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item. |
| `pricing` | `any` | No | The pricing information of the line item. |
| `quantity` | `int` | No | Quantity of units for the invoice line item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `string` | No | Non-negative decimal with at most 12 decimal places. |
| `subscription` | `any` | No |  |
| `subtotal` | `int` | Yes | The subtotal of the line item, in cents (or local equivalent), before any discounts or taxes. |
| `tax_rates` | `[]any` | Yes | The tax rates which apply to the line item. |
| `taxes` | `[]any` | No | The tax information of the line item. |
| `type` | `string` | Yes | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | `int` | No | The cost of each unit of product being credited. |
| `unit_amount_decimal` | `string` | No | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `amount` | - | - |
| `currency` | - | - |
| `description` | - | - |
| `discount_amount` | - | - |
| `discount_amounts` | Yes | - |
| `discountable` | - | - |
| `discounts` | - | - |
| `id` | - | - |
| `invoice` | - | - |
| `invoice_line_item` | - | - |
| `livemode` | - | - |
| `metadata` | Yes | - |
| `object` | - | - |
| `parent` | - | - |
| `period` | - | - |
| `pretax_credit_amounts` | Yes | - |
| `pricing` | - | - |
| `quantity` | - | - |
| `quantity_decimal` | - | - |
| `subscription` | - | - |
| `subtotal` | - | - |
| `tax_rates` | - | - |
| `taxes` | - | - |
| `type` | - | - |
| `unit_amount` | - | - |
| `unit_amount_decimal` | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Line(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LineEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LineItemEntity

```go
lineItem := client.LineItem(nil)
fmt.Println(lineItem.GetName()) // "line_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjustable_quantity` | `any` | No |  |
| `amount` | `int` | Yes | The line item amount in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_discount` | `int` | Yes | Total discount amount applied. |
| `amount_subtotal` | `int` | Yes | Total before any discounts or taxes are applied. |
| `amount_tax` | `int` | Yes | The amount of tax calculated for this line item, in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_total` | `int` | Yes | Total after discounts and taxes. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discounts` | `[]any` | No | The discounts applied to the line item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `performance_location` | `string` | No | Indicates the line item represents a performance where the venue location might determine the tax, not the customer address. |
| `price` | `float64` | No | The price used to generate the line item. |
| `product` | `string` | No | The ID of an existing [Product](https://docs.stripe.com/api/products/object). |
| `quantity` | `int` | Yes | The number of units of the item being purchased. |
| `reference` | `string` | Yes | A custom identifier for this line item. |
| `reversal` | `any` | No | If `type=reversal`, contains information about what was reversed. |
| `tax_behavior` | `string` | Yes | Specifies whether the `amount` includes taxes. |
| `tax_breakdown` | `[]any` | No | Detailed account of taxes relevant to this line item. |
| `tax_code` | `string` | Yes | The [tax code](https://docs.stripe.com/tax/tax-categories) ID used for this resource. |
| `taxes` | `[]any` | No | The taxes applied to the line item. |
| `type` | `string` | Yes | If `reversal`, this line item reverses an earlier transaction. |

### Field Usage by Operation

| Field | list |
| --- | --- |
| `adjustable_quantity` | - |
| `amount` | - |
| `amount_discount` | - |
| `amount_subtotal` | - |
| `amount_tax` | - |
| `amount_total` | - |
| `currency` | - |
| `description` | - |
| `discounts` | - |
| `id` | - |
| `livemode` | - |
| `metadata` | - |
| `object` | - |
| `performance_location` | - |
| `price` | - |
| `product` | - |
| `quantity` | Yes |
| `reference` | - |
| `reversal` | - |
| `tax_behavior` | - |
| `tax_breakdown` | - |
| `tax_code` | - |
| `taxes` | - |
| `type` | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LineItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LineItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LinkedAccountEntity

```go
linkedAccount := client.LinkedAccount(nil)
fmt.Println(linkedAccount.GetName()) // "linked_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `any` | No | The account holder that this account belongs to. |
| `account_numbers` | `[]any` | No | Details about the account numbers. |
| `balance` | `any` | No | The most recent information about the account's balance. |
| `balance_refresh` | `any` | No | The state of the most recent attempt to refresh the account balance. |
| `category` | `string` | Yes | The type of the account. |
| `created` | `int` | Yes | Time at which the object was created. |
| `display_name` | `string` | No | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `institution_name` | `string` | Yes | The name of the institution that holds this account. |
| `last4` | `string` | No | The last 4 digits of the account number. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `ownership` | `any` | No | The most recent information about the account's owners. |
| `ownership_refresh` | `any` | No | The state of the most recent attempt to refresh the account owners. |
| `permissions` | `[]any` | No | The list of permissions granted by this account. |
| `status` | `string` | Yes | The status of the link to the account. |
| `status_details` | `map[string]any` | No |  |
| `subcategory` | `string` | Yes | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `[]any` | No | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `[]any` | Yes | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `transaction_refresh` | `any` | No | The state of the most recent attempt to refresh the account transactions. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LinkedAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LinkedAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LinkedAccountOwnerEntity

```go
linkedAccountOwner := client.LinkedAccountOwner(nil)
fmt.Println(linkedAccountOwner.GetName()) // "linked_account_owner"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No | The email address of the owner. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `name` | `string` | Yes | The full name of the owner. |
| `object` | `string` | Yes | String representing the object's type. |
| `ownership` | `string` | Yes | The ownership object that this owner belongs to. |
| `phone` | `string` | No | The raw phone number of the owner. |
| `raw_address` | `string` | No | The raw physical address of the owner. |
| `refreshed_at` | `int` | No | The timestamp of the refresh that updated this owner. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LinkedAccountOwner(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LinkedAccountOwnerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LocationEntity

```go
location := client.Location(nil)
fmt.Println(location.GetName()) // "location"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `map[string]any` | Yes |  |
| `address_kana` | `map[string]any` | No |  |
| `address_kanji` | `map[string]any` | No |  |
| `city` | `string` | No | City, district, suburb, town, or village. |
| `configuration_overrides` | `string` | No | The ID of a configuration that will be used to customize all readers in this location. |
| `country` | `string` | No | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `description` | `string` | No | A descriptive text providing additional context about the tax location. |
| `display_name` | `string` | Yes | The display name of the location. |
| `display_name_kana` | `string` | No | The Kana variation of the display name of the location. |
| `display_name_kanji` | `string` | No | The Kanji variation of the display name of the location. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `line1` | `string` | No | Address line 1, such as the street, PO Box, or company name. |
| `line2` | `string` | No | Address line 2, such as the apartment, suite, unit, or building. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `phone` | `string` | No | The phone number of the location. |
| `postal_code` | `string` | No | ZIP or postal code. |
| `state` | `string` | No | State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)). |
| `type` | `string` | Yes | The type of tax location to be defined. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Location(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Location(nil).Load(map[string]any{"id": "location_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Location(nil).Remove(map[string]any{"id": "location_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LocationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LoginLinkEntity

```go
loginLink := client.LoginLink(nil)
fmt.Println(loginLink.GetName()) // "login_link"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | Yes | The URL for the login link. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LoginLinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MandateEntity

```go
mandate := client.Mandate(nil)
fmt.Println(mandate.GetName()) // "mandate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_acceptance` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `multi_use` | `map[string]any` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `string` | No | The account (if any) that the mandate is intended for. |
| `payment_method` | `any` | Yes | ID of the payment method associated with this mandate. |
| `payment_method_details` | `map[string]any` | Yes |  |
| `single_use` | `map[string]any` | Yes |  |
| `status` | `string` | Yes | The mandate status indicates whether or not you can use it to initiate a payment. |
| `type` | `string` | Yes | The type of the mandate. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Mandate(nil).Load(map[string]any{"id": "mandate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MandateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MeterEntity

```go
meter := client.Meter(nil)
fmt.Println(meter.GetName()) // "meter"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer_mapping` | `map[string]any` | Yes |  |
| `default_aggregation` | `map[string]any` | Yes |  |
| `display_name` | `string` | Yes | The meter's name. |
| `event_name` | `string` | Yes | The name of the meter event to record usage for. |
| `event_time_window` | `string` | No | The time window which meter events have been pre-aggregated for, if any. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The meter's status. |
| `status_transitions` | `map[string]any` | Yes |  |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `value_settings` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Meter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Meter(nil).Load(map[string]any{"id": "meter_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MeterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MeterEventEntity

```go
meterEvent := client.MeterEvent(nil)
fmt.Println(meterEvent.GetName()) // "meter_event"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.MeterEvent(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MeterEventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MeterEventAdjustmentEntity

```go
meterEventAdjustment := client.MeterEventAdjustment(nil)
fmt.Println(meterEventAdjustment.GetName()) // "meter_event_adjustment"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.MeterEventAdjustment(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MeterEventAdjustmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MeterEventSummaryEntity

```go
meterEventSummary := client.MeterEventSummary(nil)
fmt.Println(meterEventSummary.GetName()) // "meter_event_summary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregated_value` | `float64` | Yes | Aggregated value of all the events within `start_time` (inclusive) and `end_time` (inclusive). |
| `end_time` | `int` | Yes | End timestamp for this event summary (exclusive). |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `meter` | `string` | Yes | The meter associated with this event summary. |
| `object` | `string` | Yes | String representing the object's type. |
| `start_time` | `int` | Yes | Start timestamp for this event summary (inclusive). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MeterEventSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MeterEventSummaryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OnboardingLinkEntity

```go
onboardingLink := client.OnboardingLink(nil)
fmt.Println(onboardingLink.GetName()) // "onboarding_link"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apple_terms_and_conditions` | `any` | No | The options associated with the Apple Terms and Conditions link type. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OnboardingLink(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OnboardingLinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrderEntity

```go
order := client.Order(nil)
fmt.Println(order.GetName()) // "order"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_fees` | `int` | Yes | Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit. |
| `amount_subtotal` | `int` | Yes | Total amount of the carbon removal in the currency's smallest unit. |
| `amount_total` | `int` | Yes | Total amount of the order including fees in the currency's smallest unit. |
| `beneficiary` | `map[string]any` | Yes |  |
| `canceled_at` | `int` | No | Time at which the order was canceled. |
| `cancellation_reason` | `string` | No | Reason for the cancellation of this order. |
| `certificate` | `string` | No | For delivered orders, a URL to a delivery certificate for the order. |
| `confirmed_at` | `int` | No | Time at which the order was confirmed. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order. |
| `delayed_at` | `int` | No | Time at which the order's expected_delivery_year was delayed. |
| `delivered_at` | `int` | No | Time at which the order was delivered. |
| `delivery_details` | `[]any` | Yes | Details about the delivery of carbon removal for this order. |
| `expected_delivery_year` | `int` | Yes | The year this order is expected to be delivered. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons` | `string` | Yes | Quantity of carbon removal that is included in this order. |
| `object` | `string` | Yes | String representing the object's type. |
| `product` | `any` | Yes | Unique ID for the Climate `Product` this order is purchasing. |
| `product_substituted_at` | `int` | No | Time at which the order's product was substituted for a different product. |
| `status` | `string` | Yes | The current status of this order. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Order(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Order(nil).Load(map[string]any{"id": "order_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OutboundPaymentEntity

```go
outboundPayment := client.OutboundPayment(nil)
fmt.Println(outboundPayment.GetName()) // "outbound_payment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `cancelable` | `bool` | Yes | Returns `true` if the object can be canceled, and `false` otherwise. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | No | ID of the [customer](https://docs.stripe.com/api/customers) to whom an OutboundPayment is sent. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `destination_payment_method` | `string` | No | The PaymentMethod via which an OutboundPayment is sent. |
| `destination_payment_method_details` | `any` | No | Details about the PaymentMethod for an OutboundPayment. |
| `end_user_details` | `any` | No | Details about the end user. |
| `expected_arrival_date` | `int` | Yes | The date when funds are expected to arrive in the destination account. |
| `financial_account` | `string` | Yes | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `returned_details` | `any` | No | Details about a returned OutboundPayment. |
| `statement_descriptor` | `string` | Yes | The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer). |
| `status` | `string` | Yes | Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. |
| `status_transitions` | `map[string]any` | Yes |  |
| `tracking_details` | `any` | No | Details about network-specific tracking information if available. |
| `transaction` | `any` | Yes | The Transaction associated with this object. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OutboundPayment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OutboundPayment(nil).Load(map[string]any{"id": "outbound_payment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OutboundPaymentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OutboundTransferEntity

```go
outboundTransfer := client.OutboundTransfer(nil)
fmt.Println(outboundTransfer.GetName()) // "outbound_transfer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `cancelable` | `bool` | Yes | Returns `true` if the object can be canceled, and `false` otherwise. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `destination_payment_method` | `string` | No | The PaymentMethod used as the payment instrument for an OutboundTransfer. |
| `destination_payment_method_details` | `map[string]any` | Yes |  |
| `expected_arrival_date` | `int` | Yes | The date when funds are expected to arrive in the destination account. |
| `financial_account` | `string` | Yes | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `returned_details` | `any` | No | Details about a returned OutboundTransfer. |
| `statement_descriptor` | `string` | Yes | Information about the OutboundTransfer to be sent to the recipient account. |
| `status` | `string` | Yes | Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. |
| `status_transitions` | `map[string]any` | Yes |  |
| `tracking_details` | `any` | No | Details about network-specific tracking information if available. |
| `transaction` | `any` | Yes | The Transaction associated with this object. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OutboundTransfer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OutboundTransfer(nil).Load(map[string]any{"id": "outbound_transfer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OutboundTransferEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentAttemptRecordEntity

```go
paymentAttemptRecord := client.PaymentAttemptRecord(nil)
fmt.Println(paymentAttemptRecord.GetName()) // "payment_attempt_record"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `string` | No | ID of the Connect application that created the PaymentAttemptRecord. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer_details` | `any` | No | Customer information for this payment. |
| `customer_presence` | `string` | No | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method_details` | `any` | No | Information about the Payment Method debited for this payment. |
| `payment_record` | `string` | No | ID of the Payment Record this Payment Attempt Record belongs to. |
| `processor_details` | `map[string]any` | Yes | Processor information associated with this payment. |
| `reported_by` | `string` | Yes | Indicates who reported the payment. |
| `shipping_details` | `any` | No | Shipping information for this payment. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentAttemptRecord(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PaymentAttemptRecord(nil).Load(map[string]any{"id": "payment_attempt_record_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentAttemptRecordEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentEvaluationEntity

```go
paymentEvaluation := client.PaymentEvaluation(nil)
fmt.Println(paymentEvaluation.GetName()) // "payment_evaluation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_device_metadata_details` | `map[string]any` | Yes | Client device metadata attached to this payment evaluation. |
| `created_at` | `int` | Yes | Time at which the object was created. |
| `customer_details` | `map[string]any` | No | Customer details attached to this payment evaluation. |
| `events` | `[]any` | Yes | Event information associated with the payment evaluation, such as refunds, dispute, early fraud warnings, or user interventions. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `outcome` | `any` | No | Indicates the final outcome for the payment evaluation. |
| `payment_details` | `map[string]any` | Yes | Payment details attached to this payment evaluation. |
| `recommended_action` | `string` | Yes | Recommended action based on the score of the `fraudulent_payment` signal. |
| `signals` | `map[string]any` | Yes | Collection of signals for this payment evaluation. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentEvaluationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentIntentEntity

```go
paymentIntent := client.PaymentIntent(nil)
fmt.Println(paymentIntent.GetName()) // "payment_intent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_payment_method_types` | `[]any` | No | The list of payment method types allowed for use with this payment. |
| `amount` | `int` | No | Amount intended to be collected by this PaymentIntent. |
| `amount_capturable` | `int` | No | Amount that can be captured from this PaymentIntent. |
| `amount_details` | `any` | No |  |
| `amount_received` | `int` | No | Amount that this PaymentIntent collects. |
| `application` | `any` | No | ID of the Connect application that created the PaymentIntent. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `automatic_payment_methods` | `any` | No | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `canceled_at` | `int` | No | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_reason` | `string` | No | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | `string` | No | Controls when the funds will be captured from the customer's account. |
| `client_secret` | `string` | No | The client secret of this PaymentIntent. |
| `confirmation_method` | `string` | No | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | No | ID of the Customer this PaymentIntent belongs to, if one exists. |
| `customer_account` | `string` | No | ID of the Account representing the customer that this PaymentIntent belongs to, if one exists. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | `[]any` | No | The list of payment method types to exclude from use with this payment. |
| `hooks` | `map[string]any` | No |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last_payment_error` | `any` | No | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `any` | No | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | No | Settings for Managed Payments. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `any` | No | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | You can specify the settlement merchant as the connected account using the `on_behalf_of` attribute on the charge. |
| `payment_details` | `map[string]any` | No |  |
| `payment_method` | `any` | No | ID of the payment method used in this PaymentIntent. |
| `payment_method_configuration_details` | `any` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `[]any` | No | The list of payment method types (e.g. |
| `payment_record` | `any` | No | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `presentment_details` | `map[string]any` | Yes |  |
| `processing` | `any` | No | If present, this property tells you about the processing state of the payment. |
| `receipt_email` | `string` | No | Email address that the receipt for the resulting payment will be sent to. |
| `review` | `any` | No | ID of the review associated with this PaymentIntent, if any. |
| `setup_future_usage` | `string` | No | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `shipping` | `any` | No | Shipping information for this PaymentIntent. |
| `statement_descriptor` | `string` | No | Text that appears on the customer's statement as the statement descriptor for a non-card charge. |
| `statement_descriptor_suffix` | `string` | No | Provides information about a card charge. |
| `status` | `string` | Yes | Status of this PaymentIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `requires_capture`, `canceled`, or `succeeded`. |
| `transfer_data` | `any` | No | The data that automatically creates a Transfer after the payment finalizes. |
| `transfer_group` | `string` | No | A string that identifies the resulting payment as part of a group. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PaymentIntent(nil).Load(map[string]any{"id": "payment_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentIntentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentIntentAmountDetailsLineItemEntity

```go
paymentIntentAmountDetailsLineItem := client.PaymentIntentAmountDetailsLineItem(nil)
fmt.Println(paymentIntentAmountDetailsLineItem.GetName()) // "payment_intent_amount_details_line_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `discount_amount` | `int` | No | The discount applied on this line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `id` | `string` | Yes | Unique identifier for the object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method_options` | `any` | No | Payment method-specific information for line items. |
| `product_code` | `string` | No | The product code of the line item, such as an SKU. |
| `product_name` | `string` | Yes | The product name of the line item. |
| `quantity` | `int` | Yes | The quantity of items. |
| `tax` | `any` | No | Contains information about the tax on the item. |
| `unit_cost` | `int` | Yes | The unit cost of the line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `unit_of_measure` | `string` | No | A unit of measure for the line item, such as gallons, feet, meters, etc. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentIntentAmountDetailsLineItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentIntentAmountDetailsLineItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentLinkEntity

```go
paymentLink := client.PaymentLink(nil)
fmt.Println(paymentLink.GetName()) // "payment_link"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the payment link's `url` is active. |
| `after_completion` | `map[string]any` | Yes |  |
| `allow_promotion_codes` | `bool` | Yes | Whether user redeemable promotion codes are enabled. |
| `application` | `any` | No | The ID of the Connect application that created the Payment Link. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `float64` | No | This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. |
| `automatic_tax` | `map[string]any` | Yes |  |
| `billing_address_collection` | `string` | Yes | Configuration for collecting the customer's billing address. |
| `consent_collection` | `any` | No | When set, provides configuration to gather active consent from customers. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `[]any` | Yes | Collect additional information from your customer using custom fields. |
| `custom_text` | `map[string]any` | Yes |  |
| `customer_creation` | `string` | Yes | Configuration for Customer creation during checkout. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `inactive_message` | `string` | No | The custom message to be displayed to a customer when a payment link is no longer active. |
| `invoice_creation` | `any` | No | Configuration for creating invoice for payment mode payment links. |
| `line_items` | `map[string]any` | Yes | The line items representing what is being sold. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | No | Settings for Managed Payments for this Payment Link and resulting [CheckoutSessions](/api/checkout/sessions/object), [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/ob… |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name_collection` | `map[string]any` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account on behalf of which to charge. |
| `optional_items` | `[]any` | No | The optional items presented to the customer at checkout. |
| `payment_intent_data` | `any` | No | Indicates the parameters to be passed to PaymentIntent creation during checkout. |
| `payment_method_collection` | `string` | Yes | Configuration for collecting a payment method during checkout. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration. |
| `payment_method_types` | `[]any` | No | The list of payment method types that customers can use. |
| `phone_number_collection` | `map[string]any` | Yes |  |
| `restrictions` | `any` | No | Settings that restrict the usage of a payment link. |
| `shipping_address_collection` | `any` | No | Configuration for collecting the customer's shipping address. |
| `shipping_options` | `[]any` | Yes | The shipping rate options applied to the session. |
| `submit_type` | `string` | Yes | Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button. |
| `subscription_data` | `any` | No | When creating a subscription, the specified configuration data will be used. |
| `tax_id_collection` | `map[string]any` | Yes |  |
| `transfer_data` | `any` | No | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to. |
| `url` | `string` | Yes | The public URL that can be shared with customers. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentLink(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PaymentLink(nil).Load(map[string]any{"id": "payment_link_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentLinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentMethodEntity

```go
paymentMethod := client.PaymentMethod(nil)
fmt.Println(paymentMethod.GetName()) // "payment_method"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `map[string]any` | No |  |
| `affirm` | `map[string]any` | No |  |
| `afterpay_clearpay` | `map[string]any` | No |  |
| `alipay` | `map[string]any` | No |  |
| `allow_redisplay` | `bool` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `alma` | `map[string]any` | No |  |
| `amazon_pay` | `map[string]any` | No |  |
| `au_becs_debit` | `map[string]any` | No |  |
| `bacs_debit` | `map[string]any` | No |  |
| `bancontact` | `map[string]any` | No |  |
| `billie` | `map[string]any` | No |  |
| `billing_details` | `map[string]any` | Yes |  |
| `bizum` | `map[string]any` | No |  |
| `blik` | `map[string]any` | No |  |
| `boleto` | `map[string]any` | Yes |  |
| `card` | `map[string]any` | Yes |  |
| `card_present` | `map[string]any` | Yes |  |
| `cashapp` | `map[string]any` | No |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `crypto` | `map[string]any` | No |  |
| `custom` | `map[string]any` | Yes |  |
| `customer` | `any` | No | The ID of the Customer to which this PaymentMethod is saved. |
| `customer_account` | `string` | No |  |
| `customer_balance` | `map[string]any` | No |  |
| `eps` | `map[string]any` | No |  |
| `fpx` | `map[string]any` | Yes |  |
| `giropay` | `map[string]any` | No |  |
| `grabpay` | `map[string]any` | No |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ideal` | `map[string]any` | No |  |
| `interac_present` | `map[string]any` | Yes |  |
| `kakao_pay` | `map[string]any` | No |  |
| `klarna` | `map[string]any` | No |  |
| `konbini` | `map[string]any` | No |  |
| `kr_card` | `map[string]any` | No |  |
| `link` | `map[string]any` | No |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `mb_way` | `map[string]any` | No |  |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mobilepay` | `map[string]any` | No |  |
| `multibanco` | `map[string]any` | No |  |
| `naver_pay` | `map[string]any` | Yes |  |
| `nz_bank_account` | `map[string]any` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `oxxo` | `map[string]any` | No |  |
| `p24` | `map[string]any` | No |  |
| `pay_by_bank` | `map[string]any` | No |  |
| `payco` | `map[string]any` | No |  |
| `paynow` | `map[string]any` | No |  |
| `paypal` | `map[string]any` | No |  |
| `paypay` | `map[string]any` | No |  |
| `payto` | `map[string]any` | No |  |
| `pix` | `map[string]any` | No |  |
| `promptpay` | `map[string]any` | No |  |
| `radar_options` | `map[string]any` | No | Options to configure Radar. |
| `revolut_pay` | `map[string]any` | No |  |
| `samsung_pay` | `map[string]any` | No |  |
| `satispay` | `map[string]any` | No |  |
| `scalapay` | `map[string]any` | No |  |
| `sepa_debit` | `map[string]any` | No |  |
| `sequra` | `map[string]any` | No |  |
| `sofort` | `map[string]any` | No |  |
| `sunbit` | `map[string]any` | No |  |
| `swish` | `map[string]any` | No |  |
| `twint` | `map[string]any` | No |  |
| `type` | `string` | Yes | The type of the PaymentMethod. |
| `upi` | `map[string]any` | No |  |
| `us_bank_account` | `map[string]any` | No |  |
| `wechat_pay` | `map[string]any` | No |  |
| `zip` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentMethod(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PaymentMethod(nil).Load(map[string]any{"id": "payment_method_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentMethodEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentMethodConfigurationEntity

```go
paymentMethodConfiguration := client.PaymentMethodConfiguration(nil)
fmt.Println(paymentMethodConfiguration.GetName()) // "payment_method_configuration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `map[string]any` | Yes |  |
| `active` | `bool` | Yes | Whether the configuration can be used for new payments. |
| `affirm` | `map[string]any` | Yes |  |
| `afterpay_clearpay` | `map[string]any` | Yes |  |
| `alipay` | `map[string]any` | Yes |  |
| `alma` | `map[string]any` | Yes |  |
| `amazon_pay` | `map[string]any` | Yes |  |
| `apple_pay` | `map[string]any` | Yes |  |
| `application` | `string` | No | For child configs, the Connect application associated with the configuration. |
| `au_becs_debit` | `map[string]any` | Yes |  |
| `bacs_debit` | `map[string]any` | Yes |  |
| `bancontact` | `map[string]any` | Yes |  |
| `billie` | `map[string]any` | Yes |  |
| `bizum` | `map[string]any` | Yes |  |
| `blik` | `map[string]any` | Yes |  |
| `boleto` | `map[string]any` | Yes |  |
| `card` | `map[string]any` | Yes |  |
| `cartes_bancaires` | `map[string]any` | Yes |  |
| `cashapp` | `map[string]any` | Yes |  |
| `crypto` | `map[string]any` | Yes |  |
| `customer_balance` | `map[string]any` | Yes |  |
| `eps` | `map[string]any` | Yes |  |
| `fpx` | `map[string]any` | Yes |  |
| `giropay` | `map[string]any` | Yes |  |
| `google_pay` | `map[string]any` | Yes |  |
| `grabpay` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ideal` | `map[string]any` | Yes |  |
| `is_default` | `bool` | Yes | The default configuration is used whenever a payment method configuration is not specified. |
| `jcb` | `map[string]any` | Yes |  |
| `kakao_pay` | `map[string]any` | Yes |  |
| `klarna` | `map[string]any` | Yes |  |
| `konbini` | `map[string]any` | Yes |  |
| `kr_card` | `map[string]any` | Yes |  |
| `link` | `map[string]any` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `mb_way` | `map[string]any` | Yes |  |
| `mobilepay` | `map[string]any` | Yes |  |
| `multibanco` | `map[string]any` | Yes |  |
| `name` | `string` | Yes | The configuration's name. |
| `naver_pay` | `map[string]any` | Yes |  |
| `nz_bank_account` | `map[string]any` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `oxxo` | `map[string]any` | Yes |  |
| `p24` | `map[string]any` | Yes |  |
| `parent` | `string` | No | For child configs, the configuration's parent configuration. |
| `pay_by_bank` | `map[string]any` | Yes |  |
| `payco` | `map[string]any` | Yes |  |
| `paynow` | `map[string]any` | Yes |  |
| `paypal` | `map[string]any` | Yes |  |
| `paypay` | `map[string]any` | Yes |  |
| `payto` | `map[string]any` | Yes |  |
| `pix` | `map[string]any` | Yes |  |
| `promptpay` | `map[string]any` | Yes |  |
| `revolut_pay` | `map[string]any` | Yes |  |
| `samsung_pay` | `map[string]any` | Yes |  |
| `satispay` | `map[string]any` | Yes |  |
| `scalapay` | `map[string]any` | Yes |  |
| `sepa_debit` | `map[string]any` | Yes |  |
| `sequra` | `map[string]any` | Yes |  |
| `sofort` | `map[string]any` | Yes |  |
| `sunbit` | `map[string]any` | Yes |  |
| `swish` | `map[string]any` | Yes |  |
| `twint` | `map[string]any` | Yes |  |
| `upi` | `map[string]any` | Yes |  |
| `us_bank_account` | `map[string]any` | Yes |  |
| `wechat_pay` | `map[string]any` | Yes |  |
| `zip` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentMethodConfiguration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PaymentMethodConfiguration(nil).Load(map[string]any{"id": "payment_method_configuration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentMethodConfigurationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentMethodDomainEntity

```go
paymentMethodDomain := client.PaymentMethodDomain(nil)
fmt.Println(paymentMethodDomain.GetName()) // "payment_method_domain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amazon_pay` | `map[string]any` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `apple_pay` | `map[string]any` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `created` | `int` | Yes | Time at which the object was created. |
| `domain_name` | `string` | Yes | The domain name that this payment method domain object represents. |
| `enabled` | `bool` | Yes | Whether this payment method domain is enabled. |
| `google_pay` | `map[string]any` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `klarna` | `map[string]any` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `link` | `map[string]any` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `paypal` | `map[string]any` | Yes | Indicates the status of a specific payment method on a payment method domain. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentMethodDomain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PaymentMethodDomain(nil).Load(map[string]any{"id": "payment_method_domain_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentMethodDomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentRecordEntity

```go
paymentRecord := client.PaymentRecord(nil)
fmt.Println(paymentRecord.GetName()) // "payment_record"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `map[string]any` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `string` | No | ID of the Connect application that created the PaymentRecord. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer_details` | `any` | No | Customer information for this payment. |
| `customer_presence` | `string` | No | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `latest_payment_attempt_record` | `string` | No | ID of the latest Payment Attempt Record attached to this Payment Record. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method_details` | `any` | No | Information about the Payment Method debited for this payment. |
| `processor_details` | `map[string]any` | Yes | Processor information associated with this payment. |
| `reported_by` | `string` | Yes | Indicates who reported the payment. |
| `shipping_details` | `any` | No | Shipping information for this payment. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentRecord(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PaymentRecord(nil).Load(map[string]any{"id": "payment_record_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentRecordEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PayoutEntity

```go
payout := client.Payout(nil)
fmt.Println(payout.GetName()) // "payout"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The amount (in cents (or local equivalent)) that transfers to your bank account or debit card. |
| `application_fee` | `any` | No | The application fee (if any) for the payout. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) requested for the payout. |
| `arrival_date` | `int` | Yes | Date that you can expect the payout to arrive in the bank. |
| `automatic` | `bool` | Yes | Returns `true` if the payout is created by an [automated payout schedule](https://docs.stripe.com/payouts#payout-schedule) and `false` if it's [requested manually](https://stripe.com/docs/payouts#manual-payouts). |
| `balance_transaction` | `any` | No | ID of the balance transaction that describes the impact of this payout on your account balance. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `destination` | `any` | No | ID of the bank account or card the payout is sent to. |
| `failure_balance_transaction` | `any` | No | If the payout fails or cancels, this is the ID of the balance transaction that reverses the initial balance transaction and returns the funds from the failed payout back in your balance. |
| `failure_code` | `string` | No | Error code that provides a reason for a payout failure, if available. |
| `failure_message` | `string` | No | Message that provides the reason for a payout failure, if available. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `method` | `string` | Yes | The method used to send this payout, which can be `standard` or `instant`. |
| `object` | `string` | Yes | String representing the object's type. |
| `original_payout` | `any` | No | If the payout reverses another, this is the ID of the original payout. |
| `payout_method` | `string` | No | ID of the v2 FinancialAccount the funds are sent to. |
| `reconciliation_status` | `string` | Yes | If `completed`, you can use the [Balance Transactions API](https://docs.stripe.com/api/balance_transactions/list#balance_transaction_list-payout) to list all balance transactions that are paid out in this payout. |
| `reversed_by` | `any` | No | If the payout reverses, this is the ID of the payout that reverses this payout. |
| `source_type` | `string` | Yes | The source balance this payout came from, which can be one of the following: `card`, `fpx`, or `bank_account`. |
| `statement_descriptor` | `string` | No | Extra information about a payout that displays on the user's bank statement. |
| `status` | `string` | Yes | Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`. |
| `trace_id` | `string` | No | A value that generates from the beneficiary's bank that allows users to track payouts with their bank. |
| `type` | `string` | Yes | Can be `bank_account` or `card`. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Payout(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Payout(nil).Load(map[string]any{"id": "payout_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayoutEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PersonEntity

```go
person := client.Person(nil)
fmt.Println(person.GetName()) // "person"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | The account the person is associated with. |
| `additional_tos_acceptances` | `map[string]any` | No |  |
| `address` | `map[string]any` | No |  |
| `address_kana` | `any` | No |  |
| `address_kanji` | `any` | No |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `dob` | `map[string]any` | No |  |
| `email` | `string` | No | The person's email address. |
| `first_name` | `string` | No | The person's first name. |
| `first_name_kana` | `string` | No | The Kana variation of the person's first name (Japan only). |
| `first_name_kanji` | `string` | No | The Kanji variation of the person's first name (Japan only). |
| `full_name_aliases` | `[]any` | No | A list of alternate names or aliases that the person is known by. |
| `future_requirements` | `any` | No |  |
| `gender` | `string` | No | The person's gender. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `id_number_provided` | `bool` | No | Whether the person's `id_number` was provided. |
| `id_number_secondary_provided` | `bool` | No | Whether the person's `id_number_secondary` was provided. |
| `last_name` | `string` | No | The person's last name. |
| `last_name_kana` | `string` | No | The Kana variation of the person's last name (Japan only). |
| `last_name_kanji` | `string` | No | The Kanji variation of the person's last name (Japan only). |
| `maiden_name` | `string` | No | The person's maiden name. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nationality` | `string` | No | The country where the person is a national. |
| `object` | `string` | Yes | String representing the object's type. |
| `phone` | `string` | No | The person's phone number. |
| `political_exposure` | `string` | No | Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction. |
| `registered_address` | `map[string]any` | No |  |
| `relationship` | `map[string]any` | No |  |
| `requirements` | `any` | No |  |
| `ssn_last_4_provided` | `bool` | No | Whether the last four digits of the person's Social Security number have been provided (U.S. |
| `us_cfpb_data` | `any` | No | Demographic data related to the person. |
| `verification` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Person(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Person(nil).Load(map[string]any{"id": "person_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PersonEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PersonalizationDesignEntity

```go
personalizationDesign := client.PersonalizationDesign(nil)
fmt.Println(personalizationDesign.GetName()) // "personalization_design"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_logo` | `any` | No | The file for the card logo to use with physical bundles that support card logos. |
| `carrier_text` | `any` | No | Hash containing carrier text, for use with physical bundles that support carrier text. |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | No | A lookup key used to retrieve personalization designs dynamically from a static string. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | Friendly display name. |
| `object` | `string` | Yes | String representing the object's type. |
| `physical_bundle` | `any` | Yes | The physical bundle object belonging to this personalization design. |
| `preferences` | `map[string]any` | Yes |  |
| `rejection_reasons` | `map[string]any` | Yes |  |
| `status` | `string` | Yes | Whether this personalization design can be used to create cards. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PersonalizationDesign(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PersonalizationDesign(nil).Load(map[string]any{"id": "personalization_design_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PersonalizationDesignEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PhysicalBundleEntity

```go
physicalBundle := client.PhysicalBundle(nil)
fmt.Println(physicalBundle.GetName()) // "physical_bundle"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_logo` | `string` | Yes | The policy for how to use card logo images in a card design with this physical bundle. |
| `carrier_text` | `string` | Yes | The policy for how to use carrier letter text in a card design with this physical bundle. |
| `features` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Yes | Friendly display name. |
| `object` | `string` | Yes | String representing the object's type. |
| `second_line` | `string` | Yes | The policy for how to use a second line on a card with this physical bundle. |
| `status` | `string` | Yes | Whether this physical bundle can be used to create cards. |
| `type` | `string` | Yes | Whether this physical bundle is a standard Stripe offering or custom-made for you. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PhysicalBundle(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PhysicalBundle(nil).Load(map[string]any{"id": "physical_bundle_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PhysicalBundleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PlanEntity

```go
plan := client.Plan(nil)
fmt.Println(plan.GetName()) // "plan"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the plan can be used for new purchases. |
| `amount` | `int` | No | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `amount_decimal` | `string` | No | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `billing_scheme` | `string` | Yes | Describes how to compute the price per period. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `interval` | `string` | Yes | The frequency at which a subscription is billed. |
| `interval_count` | `int` | Yes | The number of intervals (specified in the `interval` attribute) between subscription billings. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `meter` | `string` | No | The meter tracking the usage of a metered price |
| `nickname` | `string` | No | A brief description of the plan, hidden from customers. |
| `object` | `string` | Yes | String representing the object's type. |
| `product` | `any` | No | The product whose pricing this plan determines. |
| `tiers` | `[]any` | No | Each element represents a pricing tier. |
| `tiers_mode` | `string` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_usage` | `any` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_period_days` | `int` | No | Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://docs.stripe.com/api#create_subscription-trial_from_plan). |
| `usage_type` | `string` | Yes | Configures how the quantity per period should be determined. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Plan(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Plan(nil).Load(map[string]any{"id": "plan_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PlanEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PriceEntity

```go
price := client.Price(nil)
fmt.Println(price.GetName()) // "price"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the price can be used for new purchases. |
| `billing_scheme` | `string` | Yes | Describes how to compute the price per period. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | `map[string]any` | No | Prices defined in each available currency option. |
| `custom_unit_amount` | `any` | No | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | No | A lookup key used to retrieve prices dynamically from a static string. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | No | A brief description of the price, hidden from customers. |
| `object` | `string` | Yes | String representing the object's type. |
| `product` | `any` | Yes | The ID of the product this price is associated with. |
| `recurring` | `any` | No | The recurring components of a price such as `interval` and `usage_type`. |
| `tax_behavior` | `string` | No | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tiers` | `[]any` | No | Each element represents a pricing tier. |
| `tiers_mode` | `string` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_quantity` | `any` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `type` | `string` | Yes | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | `int` | No | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | `string` | No | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Price(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Price(nil).Load(map[string]any{"id": "price_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PriceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProductEntity

```go
product := client.Product(nil)
fmt.Println(product.GetName()) // "product"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the product is currently available for purchase. |
| `created` | `int` | Yes | Time at which the object was created. |
| `current_prices_per_metric_ton` | `map[string]any` | Yes | Current prices for a metric ton of carbon removal in a currency's smallest unit. |
| `default_price` | `any` | No | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `delivery_year` | `int` | No | The year in which the carbon removal is expected to be delivered. |
| `description` | `string` | No | The product's description, meant to be displayable to the customer. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `images` | `[]any` | Yes | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `livemode` | `bool` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `marketing_features` | `[]any` | Yes | A list of up to 15 marketing features for this product. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons_available` | `string` | Yes | The quantity of metric tons available for reservation. |
| `name` | `string` | Yes | The Climate product's name. |
| `object` | `string` | Yes | String representing the object's type. |
| `package_dimensions` | `any` | No | The dimensions of this product for shipping purposes. |
| `shippable` | `bool` | No | Whether this product is shipped (i.e., physical goods). |
| `statement_descriptor` | `string` | No | Extra information about a product which will appear on your customer's credit card statement. |
| `suppliers` | `[]any` | Yes | The carbon removal suppliers that fulfill orders for this Climate product. |
| `tax_code` | `any` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `any` | No | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `unit_label` | `string` | No | A label that represents units of this product. |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `url` | `string` | No | A URL of a publicly-accessible webpage for this product. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Product(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Product(nil).Load(map[string]any{"id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Product(nil).Remove(map[string]any{"id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProductFeatureEntity

```go
productFeature := client.ProductFeature(nil)
fmt.Println(productFeature.GetName()) // "product_feature"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | Yes | A unique key you provide as your own system identifier. |
| `metadata` | `map[string]any` | Yes | Set of key-value pairs that you can attach to an object. |
| `name` | `string` | Yes | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProductFeature(nil).Load(map[string]any{"id": "product_feature_id", "product_id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductFeatureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PromotionCodeEntity

```go
promotionCode := client.PromotionCode(nil)
fmt.Println(promotionCode.GetName()) // "promotion_code"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the promotion code is currently active. |
| `code` | `string` | Yes | The customer-facing code. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `any` | No | The customer who can use this promotion code. |
| `customer_account` | `string` | No | The account representing the customer who can use this promotion code. |
| `expires_at` | `int` | No | Date at which the promotion code can no longer be redeemed. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | `int` | No | Maximum number of times this promotion code can be redeemed. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `promotion` | `map[string]any` | Yes |  |
| `restrictions` | `map[string]any` | Yes |  |
| `times_redeemed` | `int` | Yes | Number of times this promotion code has been used. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PromotionCode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PromotionCode(nil).Load(map[string]any{"id": "promotion_code_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PromotionCodeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## QuoteEntity

```go
quote := client.Quote(nil)
fmt.Println(quote.GetName()) // "quote"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_subtotal` | `int` | Yes | Total before any discounts or taxes are applied. |
| `amount_total` | `int` | Yes | Total after discounts and taxes are applied. |
| `application` | `any` | No | ID of the Connect Application that created the quote. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `float64` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `map[string]any` | Yes |  |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `computed` | `map[string]any` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | No | The customer who received this quote. |
| `customer_account` | `string` | No | The account representing the customer who received this quote. |
| `default_tax_rates` | `[]any` | No | The tax rates applied to this quote. |
| `description` | `string` | No | A description that will be displayed on the quote PDF. |
| `discounts` | `[]any` | Yes | The discounts applied to this quote. |
| `expires_at` | `int` | Yes | The date on which the quote will be canceled if in `open` or `draft` status. |
| `footer` | `string` | No | A footer that will be displayed on the quote PDF. |
| `from_quote` | `any` | No | Details of the quote that was cloned. |
| `header` | `string` | No | A header that will be displayed on the quote PDF. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | No | The invoice that was created from this quote. |
| `invoice_settings` | `map[string]any` | Yes |  |
| `line_items` | `map[string]any` | Yes | A list of items the customer is being quoted for. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `string` | No | A unique number that identifies this particular quote. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account on behalf of which to charge. |
| `status` | `string` | Yes | The status of the quote. |
| `status_transitions` | `map[string]any` | Yes |  |
| `subscription` | `any` | No | The subscription that was created or updated from this quote. |
| `subscription_data` | `map[string]any` | Yes |  |
| `subscription_schedule` | `any` | No | The subscription schedule that was created or updated from this quote. |
| `test_clock` | `any` | No | ID of the test clock this quote belongs to. |
| `total_details` | `map[string]any` | Yes |  |
| `transfer_data` | `any` | No | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Quote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Quote(nil).Load(map[string]any{"id": "quote_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `QuoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## QuoteComputedUpfrontLineItemEntity

```go
quoteComputedUpfrontLineItem := client.QuoteComputedUpfrontLineItem(nil)
fmt.Println(quoteComputedUpfrontLineItem.GetName()) // "quote_computed_upfront_line_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjustable_quantity` | `any` | No |  |
| `amount_discount` | `int` | Yes | Total discount amount applied. |
| `amount_subtotal` | `int` | Yes | Total before any discounts or taxes are applied. |
| `amount_tax` | `int` | Yes | Total tax amount applied. |
| `amount_total` | `int` | Yes | Total after discounts and taxes. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discounts` | `[]any` | No | The discounts applied to the line item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `price` | `float64` | No | The price used to generate the line item. |
| `quantity` | `int` | No | The quantity of products being purchased. |
| `taxes` | `[]any` | No | The taxes applied to the line item. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.QuoteComputedUpfrontLineItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `QuoteComputedUpfrontLineItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## QuotePdfEntity

```go
quotePdf := client.QuotePdf(nil)
fmt.Println(quotePdf.GetName()) // "quote_pdf"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.QuotePdf(nil).Load(map[string]any{"id": "quote_pdf_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `QuotePdfEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReaderEntity

```go
reader := client.Reader(nil)
fmt.Println(reader.GetName()) // "reader"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `any` | No | The most recent action performed by the reader. |
| `device_sw_version` | `string` | No | The current software version of the reader. |
| `device_type` | `string` | Yes | Device type of the reader. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ip_address` | `string` | No | The local IP address of the reader. |
| `label` | `string` | Yes | Custom label given to the reader for easier identification. |
| `last_seen_at` | `int` | No | The last time this reader reported to Stripe backend. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `location` | `any` | No | The location identifier of the reader. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `serial_number` | `string` | Yes | Serial number of the reader. |
| `status` | `string` | No | The networking status of the reader. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Reader(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Reader(nil).Load(map[string]any{"id": "reader_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Reader(nil).Remove(map[string]any{"id": "reader_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReaderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReceivedCreditEntity

```go
receivedCredit := client.ReceivedCredit(nil)
fmt.Println(receivedCredit.GetName()) // "received_credit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | Yes | An arbitrary string attached to the object. |
| `failure_code` | `string` | No | Reason for the failure. |
| `financial_account` | `string` | No | The FinancialAccount that received the funds. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `initiating_payment_method_details` | `map[string]any` | Yes |  |
| `linked_flows` | `map[string]any` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `string` | Yes | The rails used to send the funds. |
| `object` | `string` | Yes | String representing the object's type. |
| `reversal_details` | `any` | No | Details describing when a ReceivedCredit may be reversed. |
| `status` | `string` | Yes | Status of the ReceivedCredit. |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReceivedCredit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ReceivedCredit(nil).Load(map[string]any{"id": "received_credit_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReceivedCreditEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReceivedDebitEntity

```go
receivedDebit := client.ReceivedDebit(nil)
fmt.Println(receivedDebit.GetName()) // "received_debit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | Yes | An arbitrary string attached to the object. |
| `failure_code` | `string` | No | Reason for the failure. |
| `financial_account` | `string` | No | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `initiating_payment_method_details` | `map[string]any` | Yes |  |
| `linked_flows` | `map[string]any` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `string` | Yes | The network used for the ReceivedDebit. |
| `object` | `string` | Yes | String representing the object's type. |
| `reversal_details` | `any` | No | Details describing when a ReceivedDebit might be reversed. |
| `status` | `string` | Yes | Status of the ReceivedDebit. |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReceivedDebit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ReceivedDebit(nil).Load(map[string]any{"id": "received_debit_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReceivedDebitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RefundEntity

```go
refund := client.Refund(nil)
fmt.Println(refund.GetName()) // "refund"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount, in cents (or local equivalent). |
| `balance_transaction` | `any` | No | Balance transaction that describes the impact on your account balance. |
| `charge` | `any` | No | ID of the charge that's refunded. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | No | ID of the customer of this refund. |
| `customer_account` | `string` | No | ID of the account of this refund. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `destination_details` | `map[string]any` | Yes |  |
| `failure_balance_transaction` | `any` | No | After the refund fails, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction. |
| `failure_reason` | `string` | No | Provides the reason for the refund failure. |
| `fee` | `any` | Yes | ID of the application fee that was refunded. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `instructions_email` | `string` | No | For payment methods without native refund support (for example, Konbini, PromptPay), provide an email address for the customer to receive refund instructions. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `map[string]any` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `any` | No | ID of the PaymentIntent that's refunded. |
| `payment_method` | `any` | No | ID of the payment method associated with this refund. |
| `pending_reason` | `string` | No | Provides the reason for why the refund is pending. |
| `presentment_details` | `map[string]any` | Yes |  |
| `reason` | `string` | No | Reason for the refund, which is either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`). |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this refund. |
| `source_transfer_reversal` | `any` | No | The transfer reversal that's associated with the refund. |
| `status` | `string` | No | Status of the refund. |
| `transfer_reversal` | `any` | No | This refers to the transfer reversal object if the accompanying transfer reverses. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Refund(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Refund(nil).Load(map[string]any{"id": "refund_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RefundEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RegistrationEntity

```go
registration := client.Registration(nil)
fmt.Println(registration.GetName()) // "registration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_from` | `int` | Yes | Time at which the registration becomes active. |
| `ae` | `map[string]any` | Yes |  |
| `al` | `map[string]any` | Yes |  |
| `am` | `map[string]any` | Yes |  |
| `ao` | `map[string]any` | Yes |  |
| `at` | `map[string]any` | Yes |  |
| `au` | `map[string]any` | Yes |  |
| `aw` | `map[string]any` | Yes |  |
| `az` | `map[string]any` | Yes |  |
| `ba` | `map[string]any` | Yes |  |
| `bb` | `map[string]any` | Yes |  |
| `bd` | `map[string]any` | Yes |  |
| `be` | `map[string]any` | Yes |  |
| `bf` | `map[string]any` | Yes |  |
| `bg` | `map[string]any` | Yes |  |
| `bh` | `map[string]any` | Yes |  |
| `bj` | `map[string]any` | Yes |  |
| `bs` | `map[string]any` | Yes |  |
| `by` | `map[string]any` | Yes |  |
| `ca` | `map[string]any` | Yes |  |
| `cd` | `map[string]any` | Yes |  |
| `ch` | `map[string]any` | Yes |  |
| `cl` | `map[string]any` | Yes |  |
| `cm` | `map[string]any` | Yes |  |
| `co` | `map[string]any` | Yes |  |
| `country` | `string` | Yes | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `country_options` | `map[string]any` | Yes |  |
| `cr` | `map[string]any` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `cv` | `map[string]any` | Yes |  |
| `cy` | `map[string]any` | Yes |  |
| `cz` | `map[string]any` | Yes |  |
| `de` | `map[string]any` | Yes |  |
| `dk` | `map[string]any` | Yes |  |
| `ec` | `map[string]any` | Yes |  |
| `ee` | `map[string]any` | Yes |  |
| `eg` | `map[string]any` | Yes |  |
| `es` | `map[string]any` | Yes |  |
| `et` | `map[string]any` | Yes |  |
| `expires_at` | `int` | No | If set, the registration stops being active at this time. |
| `fi` | `map[string]any` | Yes |  |
| `fr` | `map[string]any` | Yes |  |
| `gb` | `map[string]any` | Yes |  |
| `ge` | `map[string]any` | Yes |  |
| `gn` | `map[string]any` | Yes |  |
| `gr` | `map[string]any` | Yes |  |
| `hr` | `map[string]any` | Yes |  |
| `hu` | `map[string]any` | Yes |  |
| `id` | `map[string]any` | Yes | Unique identifier for the object. |
| `ie` | `map[string]any` | Yes |  |
| `in` | `map[string]any` | Yes |  |
| `is` | `map[string]any` | Yes |  |
| `it` | `map[string]any` | Yes |  |
| `jp` | `map[string]any` | Yes |  |
| `ke` | `map[string]any` | Yes |  |
| `kg` | `map[string]any` | Yes |  |
| `kh` | `map[string]any` | Yes |  |
| `kr` | `map[string]any` | Yes |  |
| `kz` | `map[string]any` | Yes |  |
| `la` | `map[string]any` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lk` | `map[string]any` | Yes |  |
| `lt` | `map[string]any` | Yes |  |
| `lu` | `map[string]any` | Yes |  |
| `lv` | `map[string]any` | Yes |  |
| `ma` | `map[string]any` | Yes |  |
| `md` | `map[string]any` | Yes |  |
| `me` | `map[string]any` | Yes |  |
| `mk` | `map[string]any` | Yes |  |
| `mr` | `map[string]any` | Yes |  |
| `mt` | `map[string]any` | Yes |  |
| `mx` | `map[string]any` | Yes |  |
| `my` | `map[string]any` | Yes |  |
| `ng` | `map[string]any` | Yes |  |
| `nl` | `map[string]any` | Yes |  |
| `no` | `map[string]any` | Yes |  |
| `np` | `map[string]any` | Yes |  |
| `nz` | `map[string]any` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `om` | `map[string]any` | Yes |  |
| `pe` | `map[string]any` | Yes |  |
| `ph` | `map[string]any` | Yes |  |
| `pl` | `map[string]any` | Yes |  |
| `pt` | `map[string]any` | Yes |  |
| `ro` | `map[string]any` | Yes |  |
| `rs` | `map[string]any` | Yes |  |
| `ru` | `map[string]any` | Yes |  |
| `sa` | `map[string]any` | Yes |  |
| `se` | `map[string]any` | Yes |  |
| `sg` | `map[string]any` | Yes |  |
| `si` | `map[string]any` | Yes |  |
| `sk` | `map[string]any` | Yes |  |
| `sn` | `map[string]any` | Yes |  |
| `sr` | `map[string]any` | Yes |  |
| `status` | `string` | Yes | The status of the registration. |
| `th` | `map[string]any` | Yes |  |
| `tj` | `map[string]any` | Yes |  |
| `tr` | `map[string]any` | Yes |  |
| `tw` | `map[string]any` | Yes |  |
| `tz` | `map[string]any` | Yes |  |
| `ua` | `map[string]any` | Yes |  |
| `ug` | `map[string]any` | Yes |  |
| `us` | `map[string]any` | Yes |  |
| `uy` | `map[string]any` | Yes |  |
| `uz` | `map[string]any` | Yes |  |
| `vn` | `map[string]any` | Yes |  |
| `za` | `map[string]any` | Yes |  |
| `zm` | `map[string]any` | Yes |  |
| `zw` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Registration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Registration(nil).Load(map[string]any{"id": "registration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RegistrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReportRunEntity

```go
reportRun := client.ReportRun(nil)
fmt.Println(reportRun.GetName()) // "report_run"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `error` | `string` | No | If something should go wrong during the run, a message about the failure (populated when `status=failed`). |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | `true` if the report is run on live mode data and `false` if it is run on test mode data. |
| `object` | `string` | Yes | String representing the object's type. |
| `parameters` | `map[string]any` | Yes |  |
| `report_type` | `string` | Yes | The ID of the [report type](https://docs.stripe.com/reports/report-types) to run, such as `"balance.summary.1"`. |
| `result` | `any` | No | The file object representing the result of the report run (populated when `status=succeeded`). |
| `status` | `string` | Yes | Status of this report run. |
| `succeeded_at` | `int` | No | Timestamp at which this run successfully finished (populated when `status=succeeded`). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReportRun(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ReportRun(nil).Load(map[string]any{"id": "report_run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReportRunEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReportTypeEntity

```go
reportType := client.ReportType(nil)
fmt.Println(reportType.GetName()) // "report_type"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_available_end` | `int` | Yes | Most recent time for which this Report Type is available. |
| `data_available_start` | `int` | Yes | Earliest time for which this Report Type is available. |
| `default_columns` | `[]any` | No | List of column names that are included by default when this Report Type gets run. |
| `id` | `string` | Yes | The [ID of the Report Type](https://docs.stripe.com/reporting/statements/api#available-report-types), such as `balance.summary.1`. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Yes | Human-readable name of the Report Type |
| `object` | `string` | Yes | String representing the object's type. |
| `updated` | `int` | Yes | When this Report Type was latest updated. |
| `version` | `int` | Yes | Version of the Report Type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReportType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ReportType(nil).Load(map[string]any{"id": "report_type_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReportTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RequestEntity

```go
request := client.Request(nil)
fmt.Println(request.GetName()) // "request"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method` | `string` | Yes | The PaymentMethod to insert into the forwarded request. |
| `replacements` | `[]any` | Yes | The field kinds to be replaced in the forwarded request. |
| `request_context` | `any` | No | Context about the request from Stripe's servers to the destination endpoint. |
| `request_details` | `any` | No | The request that was sent to the destination endpoint. |
| `response_details` | `any` | No | The response that the destination endpoint returned to us. |
| `url` | `string` | No | The destination URL for the forwarded request. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Request(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Request(nil).Load(map[string]any{"id": "request_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RequestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReversalEntity

```go
reversal := client.Reversal(nil)
fmt.Println(reversal.GetName()) // "reversal"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount, in cents (or local equivalent). |
| `balance_transaction` | `any` | No | Balance transaction that describes the impact on your account balance. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `destination_payment_refund` | `any` | No | Linked payment refund for the transfer reversal. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `source_refund` | `any` | No | ID of the refund responsible for the transfer reversal. |
| `transfer` | `any` | Yes | ID of the transfer that was reversed. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Reversal(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Reversal(nil).Load(map[string]any{"id": "reversal_id", "transfer_id": "transfer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReversalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReviewEntity

```go
review := client.Review(nil)
fmt.Println(review.GetName()) // "review"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing_zip` | `string` | No | The ZIP or postal code of the card used, if applicable. |
| `charge` | `any` | No | The charge associated with this review. |
| `closed_reason` | `string` | No | The reason the review was closed, or null if it has not yet been closed. |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ip_address` | `string` | No | The IP address where the payment originated. |
| `ip_address_location` | `any` | No | Information related to the location of the payment. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `open` | `bool` | Yes | If `true`, the review needs action. |
| `opened_reason` | `string` | Yes | The reason the review was opened. |
| `payment_intent` | `any` | No | The PaymentIntent ID associated with this review, if one exists. |
| `reason` | `string` | Yes | The reason the review is currently open or closed. |
| `session` | `any` | No | Information related to the browsing session of the user who initiated the payment. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Review(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Review(nil).Load(map[string]any{"id": "review_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReviewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ScheduledQueryRunEntity

```go
scheduledQueryRun := client.ScheduledQueryRun(nil)
fmt.Println(scheduledQueryRun.GetName()) // "scheduled_query_run"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `data_load_time` | `int` | Yes | When the query was run, Sigma contained a snapshot of your Stripe data at this time. |
| `error` | `map[string]any` | Yes |  |
| `file` | `any` | No | The file object representing the results of the query. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `result_available_until` | `int` | Yes | Time at which the result expires and is no longer available for download. |
| `sql` | `string` | Yes | SQL for the query. |
| `status` | `string` | Yes | The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise. |
| `title` | `string` | Yes | Title of the query. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ScheduledQueryRun(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ScheduledQueryRun(nil).Load(map[string]any{"id": "scheduled_query_run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScheduledQueryRunEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SearchEntity

```go
search := client.Search(nil)
fmt.Println(search.GetName()) // "search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_country` | `string` | No | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `string` | No | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `[]any` | No | The account tax IDs associated with the invoice. |
| `active` | `bool` | Yes | Whether the price can be used for new purchases. |
| `address` | `any` | No | The customer's billing address. |
| `allowed_payment_method_types` | `[]any` | No | The list of payment method types allowed for use with this payment. |
| `amount` | `int` | Yes | Amount intended to be collected by this payment. |
| `amount_capturable` | `int` | No | Amount that can be captured from this PaymentIntent. |
| `amount_captured` | `int` | Yes | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_details` | `any` | No |  |
| `amount_due` | `int` | Yes | Final amount due at this time for this invoice. |
| `amount_overpaid` | `int` | Yes | Amount that was overpaid on the invoice. |
| `amount_paid` | `int` | Yes | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | `int` | Yes | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_received` | `int` | No | Amount that this PaymentIntent collects. |
| `amount_refunded` | `int` | Yes | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `amount_remaining` | `int` | Yes | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | `int` | Yes | This is the sum of all the shipping amounts. |
| `application` | `any` | No | ID of the Connect application that created the charge. |
| `application_fee` | `any` | No | The application fee (if any) for the charge. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) requested for the charge. |
| `application_fee_percent` | `float64` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `attempt_count` | `int` | Yes | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | `bool` | Yes | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | `bool` | Yes | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_payment_methods` | `any` | No | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `automatic_tax` | `map[string]any` | Yes |  |
| `automatically_finalizes_at` | `int` | No | The time when this invoice is currently scheduled to be automatically finalized. |
| `balance` | `int` | No | The current balance, if any, that's stored on the customer in their default currency. |
| `balance_transaction` | `any` | No | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_cycle_anchor` | `int` | Yes | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `any` | No | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_details` | `map[string]any` | Yes |  |
| `billing_mode` | `map[string]any` | Yes | The billing mode of the subscription. |
| `billing_reason` | `string` | No | Indicates the reason why the invoice was created. |
| `billing_schedules` | `[]any` | Yes | Billing schedules for this subscription. |
| `billing_scheme` | `string` | Yes | Describes how to compute the price per period. |
| `billing_thresholds` | `any` | No | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `business_name` | `string` | No | The customer's business name. |
| `calculated_statement_descriptor` | `string` | No | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `cancel_at` | `int` | No | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | `bool` | Yes | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | `int` | No | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_details` | `any` | No | Details about why this subscription was cancelled |
| `cancellation_reason` | `string` | No | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | `string` | No | Controls when the funds will be captured from the customer's account. |
| `captured` | `bool` | Yes | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `cash_balance` | `any` | No | The current funds being held by Stripe on behalf of the customer. |
| `client_secret` | `string` | No | The client secret of this PaymentIntent. |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_method` | `string` | No | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `confirmation_secret` | `any` | No | The confirmation secret associated with this invoice. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | `map[string]any` | No | Prices defined in each available currency option. |
| `custom_fields` | `[]any` | No | Custom fields displayed on the invoice. |
| `custom_unit_amount` | `any` | No | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `customer` | `any` | No | ID of the customer this charge is for if one exists. |
| `customer_account` | `string` | No | The ID of an Account representing a customer. |
| `customer_address` | `any` | No | The customer's address. |
| `customer_email` | `string` | No | The customer's email. |
| `customer_name` | `string` | No | The customer's name. |
| `customer_phone` | `string` | No | The customer's phone number. |
| `customer_shipping` | `any` | No | The customer's shipping information. |
| `customer_tax_exempt` | `string` | No | The customer's tax exempt status. |
| `customer_tax_ids` | `[]any` | No | The customer's tax IDs. |
| `days_until_due` | `int` | No | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | `any` | No | ID of the default payment method for the invoice. |
| `default_price` | `any` | No | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `default_source` | `any` | No | ID of the default payment source for the customer. |
| `default_tax_rates` | `[]any` | Yes | The tax rates applied to this invoice, if any. |
| `delinquent` | `bool` | No | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discount` | `any` | No | Describes the current discount active on the customer, if there is one. |
| `discounts` | `[]any` | Yes | The discounts applied to the invoice. |
| `disputed` | `bool` | Yes | Whether the charge has been disputed. |
| `due_date` | `int` | No | The date on which payment for this invoice is due. |
| `effective_at` | `int` | No | The date when this invoice is in effect. |
| `email` | `string` | No | The customer's email address. |
| `ended_at` | `int` | No | If the subscription has ended, the date the subscription ended. |
| `ending_balance` | `int` | No | Ending customer balance after the invoice is finalized. |
| `excluded_payment_method_types` | `[]any` | No | The list of payment method types to exclude from use with this payment. |
| `failure_balance_transaction` | `any` | No | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | `string` | No | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | `string` | No | Message to user further explaining reason for charge failure if available. |
| `footer` | `string` | No | Footer displayed on the invoice. |
| `fraud_details` | `any` | No | Information on fraud assessments for the charge. |
| `from_invoice` | `any` | No | Details of the invoice that was cloned. |
| `hooks` | `map[string]any` | No |  |
| `hosted_invoice_url` | `string` | No | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `images` | `[]any` | Yes | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `individual_name` | `string` | No | The customer's individual name. |
| `invoice_credit_balance` | `map[string]any` | No | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_pdf` | `string` | No | The link to download the PDF for the invoice. |
| `invoice_prefix` | `string` | No | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `map[string]any` | No |  |
| `issuer` | `map[string]any` | Yes |  |
| `items` | `map[string]any` | Yes | List of subscription items, each with an attached price. |
| `last_finalization_error` | `any` | No | The error encountered during the previous attempt to finalize the invoice. |
| `last_payment_error` | `any` | No | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `any` | No | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `latest_invoice` | `any` | No | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `latest_revision` | `any` | No | The ID of the most recent non-draft revision of this invoice |
| `lines` | `map[string]any` | Yes | The individual line items that make up the invoice. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | No | A lookup key used to retrieve prices dynamically from a static string. |
| `managed_payments` | `any` | No | Settings for Managed Payments. |
| `marketing_features` | `[]any` | Yes | A list of up to 15 marketing features for this product. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | The customer's full name or business name. |
| `next_action` | `any` | No | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `next_invoice_sequence` | `int` | No | The suffix of the customer's next invoice number (for example, 0001). |
| `next_payment_attempt` | `int` | No | The time at which payment will next be attempted. |
| `next_pending_invoice_item_invoice` | `int` | No | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `nickname` | `string` | No | A brief description of the price, hidden from customers. |
| `number` | `string` | No | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | `any` | No | Details about whether the payment was accepted, and why. |
| `package_dimensions` | `any` | No | The dimensions of this product for shipping purposes. |
| `paid` | `bool` | Yes | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `parent` | `any` | No | The parent that generated this invoice |
| `pause_collection` | `any` | No | If specified, payment collection for this subscription will be paused. |
| `payment_details` | `map[string]any` | No |  |
| `payment_intent` | `any` | No | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `string` | No | ID of the payment method used in this charge. |
| `payment_method_configuration_details` | `any` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_details` | `any` | No | Details about the payment method at the time of the transaction. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `[]any` | No | The list of payment method types (e.g. |
| `payment_record` | `any` | No | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `payment_settings` | `map[string]any` | Yes | Payment settings passed on to invoices created by the subscription. |
| `payments` | `map[string]any` | Yes | Payments for this invoice. |
| `pending_invoice_item_interval` | `any` | No | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `any` | No | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `any` | No | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `period_end` | `int` | Yes | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | `int` | Yes | The earliest timestamp at which invoice items can be associated with this invoice. |
| `phone` | `string` | No | The customer's phone number. |
| `post_payment_credit_notes_amount` | `int` | Yes | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | `int` | Yes | Total amount of all pre-payment credit notes issued for this invoice. |
| `preferred_locales` | `[]any` | No | The customer's preferred locales (languages), ordered by preference. |
| `presentment_details` | `map[string]any` | Yes |  |
| `processing` | `any` | No | If present, this property tells you about the processing state of the payment. |
| `product` | `any` | Yes | The ID of the product this price is associated with. |
| `radar_options` | `map[string]any` | No | Options to configure Radar. |
| `receipt_email` | `string` | No | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `string` | No | This is the URL to view the receipt for this charge. |
| `recurring` | `any` | No | The recurring components of a price such as `interval` and `usage_type`. |
| `refunded` | `bool` | Yes | Whether the charge has been fully refunded. |
| `refunds` | `map[string]any` | Yes | A list of refunds that have been applied to the charge. |
| `rendering` | `any` | No | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `review` | `any` | No | ID of the review associated with this charge if one exists. |
| `schedule` | `any` | No | The schedule attached to the subscription |
| `setup_future_usage` | `string` | No | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `shippable` | `bool` | No | Whether this product is shipped (i.e., physical goods). |
| `shipping` | `any` | No | Shipping information for the charge. |
| `shipping_cost` | `any` | No | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | `any` | No | Shipping details for the invoice. |
| `source_transfer` | `any` | No | The transfer ID which created this charge. |
| `sources` | `map[string]any` | Yes | The customer's payment sources, if any. |
| `start_date` | `int` | Yes | Date when the subscription was first created. |
| `starting_balance` | `int` | Yes | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | `string` | No | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | `string` | No | Provides information about a card charge. |
| `status` | `string` | Yes | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `status_details` | `map[string]any` | No | Describes changes to the subscription's status. |
| `status_transitions` | `map[string]any` | Yes |  |
| `subscriptions` | `map[string]any` | Yes | The customer's current subscriptions, if any. |
| `subtotal` | `int` | Yes | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `tax` | `map[string]any` | Yes |  |
| `tax_behavior` | `string` | No | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tax_code` | `any` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `any` | No | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `tax_exempt` | `string` | No | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `map[string]any` | Yes | The customer's tax IDs. |
| `test_clock` | `any` | No | ID of the test clock that this customer belongs to. |
| `threshold_reason` | `map[string]any` | Yes |  |
| `tiers` | `[]any` | No | Each element represents a pricing tier. |
| `tiers_mode` | `string` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `total` | `int` | Yes | Total after discounts and taxes. |
| `total_discount_amounts` | `[]any` | No | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `[]any` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `[]any` | No | The aggregate tax information of all line items. |
| `transfer` | `any` | No | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `transfer_data` | `any` | No | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `transfer_group` | `string` | No | A string that identifies this transaction as part of a group. |
| `transform_quantity` | `any` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_end` | `int` | No | If the subscription has a trial, the end of that trial. |
| `trial_settings` | `any` | No | Settings related to subscription trials. |
| `trial_start` | `int` | No | If the subscription has a trial, the beginning of that trial. |
| `type` | `string` | Yes | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | `int` | No | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | `string` | No | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `unit_label` | `string` | No | A label that represents units of this product. |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `url` | `string` | No | A URL of a publicly-accessible webpage for this product. |
| `webhooks_delivered_at` | `int` | No | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

### Field Usage by Operation

| Field | list |
| --- | --- |
| `account_country` | - |
| `account_name` | - |
| `account_tax_ids` | - |
| `active` | - |
| `address` | - |
| `allowed_payment_method_types` | - |
| `amount` | Yes |
| `amount_capturable` | - |
| `amount_captured` | - |
| `amount_details` | - |
| `amount_due` | - |
| `amount_overpaid` | - |
| `amount_paid` | - |
| `amount_paid_off_stripe` | - |
| `amount_received` | - |
| `amount_refunded` | - |
| `amount_remaining` | - |
| `amount_shipping` | - |
| `application` | - |
| `application_fee` | - |
| `application_fee_amount` | - |
| `application_fee_percent` | - |
| `attempt_count` | - |
| `attempted` | - |
| `auto_advance` | - |
| `automatic_payment_methods` | - |
| `automatic_tax` | - |
| `automatically_finalizes_at` | - |
| `balance` | - |
| `balance_transaction` | - |
| `billing_cycle_anchor` | - |
| `billing_cycle_anchor_config` | - |
| `billing_details` | - |
| `billing_mode` | - |
| `billing_reason` | - |
| `billing_schedules` | - |
| `billing_scheme` | - |
| `billing_thresholds` | - |
| `business_name` | - |
| `calculated_statement_descriptor` | - |
| `cancel_at` | - |
| `cancel_at_period_end` | - |
| `canceled_at` | - |
| `cancellation_details` | - |
| `cancellation_reason` | - |
| `capture_method` | - |
| `captured` | - |
| `cash_balance` | - |
| `client_secret` | - |
| `collection_method` | - |
| `confirmation_method` | - |
| `confirmation_secret` | - |
| `created` | - |
| `currency` | Yes |
| `currency_options` | - |
| `custom_fields` | - |
| `custom_unit_amount` | - |
| `customer` | Yes |
| `customer_account` | - |
| `customer_address` | - |
| `customer_email` | - |
| `customer_name` | - |
| `customer_phone` | - |
| `customer_shipping` | - |
| `customer_tax_exempt` | - |
| `customer_tax_ids` | - |
| `days_until_due` | - |
| `default_payment_method` | - |
| `default_price` | - |
| `default_source` | - |
| `default_tax_rates` | Yes |
| `delinquent` | - |
| `description` | - |
| `discount` | - |
| `discounts` | - |
| `disputed` | - |
| `due_date` | - |
| `effective_at` | - |
| `email` | - |
| `ended_at` | - |
| `ending_balance` | - |
| `excluded_payment_method_types` | - |
| `failure_balance_transaction` | - |
| `failure_code` | - |
| `failure_message` | - |
| `footer` | - |
| `fraud_details` | - |
| `from_invoice` | - |
| `hooks` | - |
| `hosted_invoice_url` | - |
| `id` | - |
| `images` | - |
| `individual_name` | - |
| `invoice_credit_balance` | - |
| `invoice_pdf` | - |
| `invoice_prefix` | - |
| `invoice_settings` | Yes |
| `issuer` | - |
| `items` | - |
| `last_finalization_error` | - |
| `last_payment_error` | - |
| `latest_charge` | - |
| `latest_invoice` | - |
| `latest_revision` | - |
| `lines` | - |
| `livemode` | - |
| `lookup_key` | - |
| `managed_payments` | - |
| `marketing_features` | - |
| `metadata` | Yes |
| `name` | Yes |
| `next_action` | - |
| `next_invoice_sequence` | - |
| `next_payment_attempt` | - |
| `next_pending_invoice_item_invoice` | - |
| `nickname` | - |
| `number` | - |
| `object` | - |
| `on_behalf_of` | - |
| `outcome` | - |
| `package_dimensions` | - |
| `paid` | - |
| `parent` | - |
| `pause_collection` | - |
| `payment_details` | - |
| `payment_intent` | - |
| `payment_method` | - |
| `payment_method_configuration_details` | - |
| `payment_method_details` | - |
| `payment_method_options` | - |
| `payment_method_types` | - |
| `payment_record` | - |
| `payment_settings` | Yes |
| `payments` | - |
| `pending_invoice_item_interval` | - |
| `pending_setup_intent` | - |
| `pending_update` | - |
| `period_end` | - |
| `period_start` | - |
| `phone` | - |
| `post_payment_credit_notes_amount` | - |
| `pre_payment_credit_notes_amount` | - |
| `preferred_locales` | - |
| `presentment_details` | - |
| `processing` | - |
| `product` | - |
| `radar_options` | - |
| `receipt_email` | - |
| `receipt_number` | - |
| `receipt_url` | - |
| `recurring` | - |
| `refunded` | - |
| `refunds` | - |
| `rendering` | - |
| `review` | - |
| `schedule` | - |
| `setup_future_usage` | - |
| `shippable` | - |
| `shipping` | - |
| `shipping_cost` | - |
| `shipping_details` | - |
| `source_transfer` | - |
| `sources` | - |
| `start_date` | - |
| `starting_balance` | - |
| `statement_descriptor` | - |
| `statement_descriptor_suffix` | - |
| `status` | Yes |
| `status_details` | Yes |
| `status_transitions` | - |
| `subscriptions` | - |
| `subtotal` | - |
| `subtotal_excluding_tax` | - |
| `tax` | - |
| `tax_behavior` | - |
| `tax_code` | - |
| `tax_details` | - |
| `tax_exempt` | - |
| `tax_ids` | - |
| `test_clock` | - |
| `threshold_reason` | - |
| `tiers` | - |
| `tiers_mode` | - |
| `total` | - |
| `total_discount_amounts` | - |
| `total_excluding_tax` | - |
| `total_pretax_credit_amounts` | - |
| `total_taxes` | - |
| `transfer` | - |
| `transfer_data` | - |
| `transfer_group` | - |
| `transform_quantity` | - |
| `trial_end` | - |
| `trial_settings` | - |
| `trial_start` | - |
| `type` | - |
| `unit_amount` | - |
| `unit_amount_decimal` | - |
| `unit_label` | - |
| `updated` | - |
| `url` | - |
| `webhooks_delivered_at` | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Search(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecretEntity

```go
secret := client.Secret(nil)
fmt.Println(secret.GetName()) // "secret"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `deleted` | `bool` | No | If true, indicates that this secret has been deleted |
| `expires_at` | `int` | No | The Unix timestamp for the expiry time of the secret, after which the secret deletes. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Yes | A name for the secret that's unique within the scope. |
| `object` | `string` | Yes | String representing the object's type. |
| `payload` | `string` | No | The plaintext secret value to be stored. |
| `scope` | `map[string]any` | Yes |  |
| `type` | `string` | Yes | The secret scope type. |
| `user` | `string` | No | The user ID, if type is set to "user" |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Secret(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Secret(nil).Load(map[string]any{"name": "name", "scope": map[string]any{}}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SessionEntity

```go
session := client.Session(nil)
fmt.Println(session.GetName()) // "session"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `any` | No | The account holder for whom accounts are collected in this session. |
| `accounts` | `map[string]any` | Yes | The accounts that were collected as part of this Session. |
| `adaptive_pricing` | `any` | No | Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing). |
| `after_expiration` | `any` | No | When set, provides configuration for actions to take if this Checkout Session expires. |
| `allow_promotion_codes` | `bool` | No | Enables user redeemable promotion codes. |
| `allowed_payment_method_types` | `[]any` | No | A list of the types of payment methods (e.g., `card`) this Checkout Session can accept. |
| `amount_subtotal` | `int` | No | Total of all items before discounts or taxes are applied. |
| `amount_total` | `int` | No | Total of all items after discounts and taxes are applied. |
| `automatic_tax` | `map[string]any` | Yes |  |
| `bank_account_token` | `map[string]any` | Yes | Tokenization is the process Stripe uses to collect sensitive card or bank account details, or personally identifiable information (PII), directly from your customers in a secure manner. |
| `billing_address_collection` | `string` | No | Describes whether Checkout should collect the customer's billing address. |
| `branding_settings` | `map[string]any` | Yes |  |
| `cancel_url` | `string` | No | If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. |
| `client_reference_id` | `string` | No | A unique string to reference the Checkout Session. |
| `client_secret` | `string` | No | The client secret of your Checkout Session. |
| `collected_information` | `any` | No | Information about the customer collected within the Checkout Session. |
| `configuration` | `any` | Yes | The configuration used by this session, describing the features available. |
| `consent` | `any` | No | Results of `consent_collection` for this session. |
| `consent_collection` | `any` | No | When set, provides configuration for the Checkout Session to gather active consent from customers. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_conversion` | `any` | No | Currency conversion details for [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing) sessions created before 2025-03-31. |
| `custom_fields` | `[]any` | Yes | Collect additional information from your customer using custom fields. |
| `custom_text` | `map[string]any` | Yes |  |
| `customer` | `any` | No | The ID of the customer for this Session. |
| `customer_account` | `string` | No | The ID of the account for this Session. |
| `customer_creation` | `string` | No | Configure whether a Checkout Session creates a Customer when the Checkout Session completes. |
| `customer_details` | `any` | No | The customer details including the customer's tax exempt status and the customer's tax IDs. |
| `customer_email` | `string` | No | If provided, this value will be used when the Customer object is created. |
| `discounts` | `[]any` | No | List of coupons and promotion codes attached to the Checkout Session. |
| `excluded_payment_method_types` | `[]any` | No | A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session. |
| `expires_at` | `int` | Yes | The timestamp at which the Checkout Session will expire. |
| `filters` | `map[string]any` | No |  |
| `flow` | `any` | No | Information about a specific flow for the customer to go through. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `integration_identifier` | `string` | No | The integration identifier for this Checkout Session. |
| `invoice` | `any` | No | ID of the invoice created by the Checkout Session, if it exists. |
| `invoice_creation` | `any` | No | Details on the state of invoice creation for the Checkout Session. |
| `limits` | `map[string]any` | Yes |  |
| `line_items` | `map[string]any` | Yes | The line items purchased by the customer. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `locale` | `string` | No | The IETF language tag of the locale Checkout is displayed in. |
| `managed_payments` | `any` | No | Settings for Managed Payments for this Checkout Session and resulting [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/object). |
| `manual_entry` | `map[string]any` | No |  |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mode` | `string` | Yes | The mode of the Checkout Session. |
| `name_collection` | `map[string]any` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `string` | No | The account for which the session was created on behalf of. |
| `optional_items` | `[]any` | No | The optional items presented to the customer at checkout. |
| `origin_context` | `string` | No | Where the user is coming from. |
| `payment_intent` | `any` | No | The ID of the PaymentIntent for Checkout Sessions in `payment` mode. |
| `payment_link` | `any` | No | The ID of the Payment Link that created this Session. |
| `payment_method_collection` | `string` | No | Configure whether a Checkout Session should collect a payment method for sessions with mode `payment`. |
| `payment_method_configuration_details` | `any` | No | Information about the payment method configuration used for this Checkout session if using dynamic payment methods. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for the PaymentIntent or SetupIntent of this CheckoutSession. |
| `payment_method_types` | `[]any` | Yes | A list of the types of payment methods (e.g. |
| `payment_status` | `string` | Yes | The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`. |
| `permissions` | `any` | No | This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object. |
| `phone_number_collection` | `map[string]any` | Yes |  |
| `prefetch` | `[]any` | No | Data features requested to be retrieved upon account creation. |
| `presentment_details` | `map[string]any` | Yes |  |
| `recovered_from` | `string` | No | The ID of the original expired Checkout Session that triggered the recovery flow. |
| `redirect_on_completion` | `string` | No | This parameter applies to `ui_mode: embedded_page`. |
| `return_url` | `string` | No | Applies to Checkout Sessions with `ui_mode: embedded_page` or `ui_mode: elements`. |
| `saved_payment_method_options` | `any` | No | Controls saved payment method settings for the session. |
| `setup_intent` | `any` | No | The ID of the SetupIntent for Checkout Sessions in `setup` mode. |
| `shipping_address_collection` | `any` | No | When set, provides configuration for Checkout to collect a shipping address from a customer. |
| `shipping_cost` | `any` | No | The details of the customer cost of shipping, including the customer chosen ShippingRate. |
| `shipping_options` | `[]any` | Yes | The shipping rate options applied to this Session. |
| `status` | `string` | No | The status of the Checkout Session, one of `open`, `complete`, or `expired`. |
| `submit_type` | `string` | No | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. |
| `subscription` | `any` | No | The ID of the [Subscription](https://docs.stripe.com/api/subscriptions) for Checkout Sessions in `subscription` mode. |
| `success_url` | `string` | No | The URL the customer will be directed to after the payment or subscription creation is successful. |
| `tax_id_collection` | `map[string]any` | Yes |  |
| `total_details` | `int` | No | Tax and discount details for the computed total amount. |
| `ui_mode` | `string` | No | The UI mode of the Session. |
| `url` | `string` | No | The URL to the Checkout Session. |
| `wallet_options` | `any` | No | Wallet-specific configuration for this Checkout Session. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `account_holder` | - | - | - |
| `accounts` | - | - | - |
| `adaptive_pricing` | - | - | - |
| `after_expiration` | - | - | - |
| `allow_promotion_codes` | - | - | - |
| `allowed_payment_method_types` | - | - | - |
| `amount_subtotal` | - | - | - |
| `amount_total` | - | - | - |
| `automatic_tax` | - | - | - |
| `bank_account_token` | - | - | - |
| `billing_address_collection` | - | - | - |
| `branding_settings` | - | - | - |
| `cancel_url` | - | - | - |
| `client_reference_id` | - | - | - |
| `client_secret` | - | - | - |
| `collected_information` | - | - | - |
| `configuration` | - | - | - |
| `consent` | - | - | - |
| `consent_collection` | - | - | - |
| `created` | - | - | - |
| `currency` | - | - | - |
| `currency_conversion` | - | - | - |
| `custom_fields` | - | - | - |
| `custom_text` | - | - | - |
| `customer` | - | - | Yes |
| `customer_account` | - | - | - |
| `customer_creation` | - | - | - |
| `customer_details` | - | - | - |
| `customer_email` | - | - | - |
| `discounts` | - | - | - |
| `excluded_payment_method_types` | - | - | - |
| `expires_at` | - | - | - |
| `filters` | - | - | - |
| `flow` | - | - | - |
| `id` | - | - | - |
| `integration_identifier` | - | - | - |
| `invoice` | - | - | - |
| `invoice_creation` | - | - | - |
| `limits` | - | - | - |
| `line_items` | - | - | - |
| `livemode` | - | - | - |
| `locale` | - | - | - |
| `managed_payments` | - | - | - |
| `manual_entry` | - | - | - |
| `metadata` | - | - | - |
| `mode` | - | - | - |
| `name_collection` | - | - | - |
| `object` | - | - | - |
| `on_behalf_of` | - | - | - |
| `optional_items` | - | - | - |
| `origin_context` | - | - | - |
| `payment_intent` | - | - | - |
| `payment_link` | - | - | - |
| `payment_method_collection` | - | - | - |
| `payment_method_configuration_details` | - | - | - |
| `payment_method_options` | - | - | - |
| `payment_method_types` | - | - | - |
| `payment_status` | - | - | - |
| `permissions` | Yes | - | Yes |
| `phone_number_collection` | - | - | - |
| `prefetch` | - | - | - |
| `presentment_details` | - | - | - |
| `recovered_from` | - | - | - |
| `redirect_on_completion` | - | - | - |
| `return_url` | - | - | - |
| `saved_payment_method_options` | - | - | - |
| `setup_intent` | - | - | - |
| `shipping_address_collection` | - | - | - |
| `shipping_cost` | - | - | - |
| `shipping_options` | - | - | - |
| `status` | - | - | - |
| `submit_type` | - | - | - |
| `subscription` | - | - | - |
| `success_url` | - | - | - |
| `tax_id_collection` | - | - | - |
| `total_details` | - | - | - |
| `ui_mode` | - | - | - |
| `url` | - | - | Yes |
| `wallet_options` | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Session(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Session(nil).Load(map[string]any{"session": "session"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SessionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SettingEntity

```go
setting := client.Setting(nil)
fmt.Println(setting.GetName()) // "setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `defaults` | `map[string]any` | Yes |  |
| `head_office` | `any` | No | The place where your business is located. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The status of the Tax `Settings`. |
| `status_details` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Setting(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SettlementEntity

```go
settlement := client.Settlement(nil)
fmt.Println(settlement.GetName()) // "settlement"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Settlement(nil).Load(map[string]any{"id": "settlement_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Settlement(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SettlementEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SetupAttemptEntity

```go
setupAttempt := client.SetupAttempt(nil)
fmt.Println(setupAttempt.GetName()) // "setup_attempt"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `any` | No | The value of [application](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation. |
| `attach_to_self` | `bool` | No | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `any` | No | The value of [customer](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation. |
| `customer_account` | `string` | No | The value of [customer_account](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer_account) on the SetupIntent at the time of this confirmation. |
| `flow_directions` | `[]any` | No | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The value of [on_behalf_of](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation. |
| `payment_method` | `any` | Yes | ID of the payment method used with this SetupAttempt. |
| `payment_method_details` | `map[string]any` | Yes |  |
| `setup_error` | `any` | No | The error encountered during this attempt to confirm the SetupIntent, if any. |
| `setup_intent` | `any` | Yes | ID of the SetupIntent that this attempt belongs to. |
| `status` | `string` | Yes | Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`. |
| `usage` | `string` | Yes | The value of [usage](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SetupAttempt(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SetupAttemptEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SetupIntentEntity

```go
setupIntent := client.SetupIntent(nil)
fmt.Println(setupIntent.GetName()) // "setup_intent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_payment_method_types` | `[]any` | No | The list of payment method types to allow for this SetupIntent. |
| `application` | `any` | No | ID of the Connect application that created the SetupIntent. |
| `attach_to_self` | `bool` | No | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `automatic_payment_methods` | `any` | No | Settings for dynamic payment methods compatible with this Setup Intent |
| `cancellation_reason` | `string` | No | Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`. |
| `client_secret` | `string` | No | The client secret of this SetupIntent. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `any` | No | ID of the Customer this SetupIntent belongs to, if one exists. |
| `customer_account` | `string` | No | ID of the Account this SetupIntent belongs to, if one exists. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | `[]any` | No | Payment method types that are excluded from this SetupIntent. |
| `flow_directions` | `[]any` | No | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last_setup_error` | `any` | No | The error encountered in the previous SetupIntent confirmation. |
| `latest_attempt` | `any` | No | The most recent SetupAttempt for this SetupIntent. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | No |  |
| `mandate` | `any` | No | ID of the multi use Mandate generated by the SetupIntent. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `any` | No | If present, this property tells you what actions you need to take in order for your customer to continue payment setup. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) for which the setup is intended. |
| `payment_method` | `any` | No | ID of the payment method used with this SetupIntent. |
| `payment_method_configuration_details` | `any` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this Setup Intent. |
| `payment_method_options` | `any` | No | Payment method-specific configuration for this SetupIntent. |
| `payment_method_types` | `[]any` | Yes | The list of payment method types (e.g. |
| `single_use_mandate` | `any` | No | ID of the single_use Mandate generated by the SetupIntent. |
| `status` | `string` | Yes | [Status](https://docs.stripe.com/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`. |
| `usage` | `string` | Yes | Indicates how the payment method is intended to be used in the future. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SetupIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SetupIntent(nil).Load(map[string]any{"id": "setup_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SetupIntentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ShippingRateEntity

```go
shippingRate := client.ShippingRate(nil)
fmt.Println(shippingRate.GetName()) // "shipping_rate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the shipping rate can be used for new purchases. |
| `created` | `int` | Yes | Time at which the object was created. |
| `delivery_estimate` | `any` | No | The estimated range for how long shipping will take, meant to be displayable to the customer. |
| `display_name` | `string` | No | The name of the shipping rate, meant to be displayable to the customer. |
| `fixed_amount` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `tax_behavior` | `string` | No | Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. |
| `tax_code` | `any` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `type` | `string` | Yes | The type of calculation to use on the shipping rate. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ShippingRate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ShippingRate(nil).Load(map[string]any{"id": "shipping_rate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ShippingRateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SigmaApiQueryEntity

```go
sigmaApiQuery := client.SigmaApiQuery(nil)
fmt.Println(sigmaApiQuery.GetName()) // "sigma_api_query"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Yes | The name of the query. |
| `object` | `string` | Yes | String representing the object's type. |
| `sql` | `string` | Yes | The sql statement for the query. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SigmaApiQueryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SourceEntity

```go
source := client.Source(nil)
fmt.Println(source.GetName()) // "source"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ach_credit_transfer` | `map[string]any` | No |  |
| `ach_debit` | `map[string]any` | No |  |
| `acss_debit` | `map[string]any` | No |  |
| `alipay` | `map[string]any` | No |  |
| `allow_redisplay` | `bool` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `amount` | `int` | No | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. |
| `au_becs_debit` | `map[string]any` | No |  |
| `bancontact` | `map[string]any` | No |  |
| `card` | `map[string]any` | No |  |
| `card_present` | `map[string]any` | No |  |
| `client_secret` | `string` | Yes | The client secret of the source. |
| `code_verification` | `map[string]any` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. |
| `customer` | `string` | No | The ID of the customer to which this source is attached. |
| `data` | `[]any` | Yes | Details about each object. |
| `eps` | `map[string]any` | No |  |
| `flow` | `string` | Yes | The authentication `flow` of the source. |
| `giropay` | `map[string]any` | No |  |
| `has_more` | `bool` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ideal` | `map[string]any` | No |  |
| `klarna` | `map[string]any` | No |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `multibanco` | `map[string]any` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `owner` | `any` | No | Information about the owner of the payment instrument that may be used or required by particular source types. |
| `p24` | `map[string]any` | No |  |
| `receiver` | `map[string]any` | Yes |  |
| `redirect` | `map[string]any` | Yes |  |
| `sepa_debit` | `map[string]any` | No |  |
| `sofort` | `map[string]any` | No |  |
| `source_order` | `map[string]any` | Yes |  |
| `statement_descriptor` | `string` | No | Extra information about a source. |
| `status` | `string` | Yes | The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. |
| `three_d_secure` | `map[string]any` | No |  |
| `type` | `string` | Yes | The `type` of the source. |
| `url` | `string` | Yes | The URL where this list can be accessed. |
| `usage` | `string` | No | Either `reusable` or `single_use`. |
| `wechat` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Source(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Source(nil).Load(map[string]any{"id": "source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Source(nil).Remove(map[string]any{"id": "source_id", "customer_id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SourceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SourceMandateNotificationEntity

```go
sourceMandateNotification := client.SourceMandateNotification(nil)
fmt.Println(sourceMandateNotification.GetName()) // "source_mandate_notification"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `map[string]any` | No |  |
| `amount` | `int` | No | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. |
| `bacs_debit` | `map[string]any` | No |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `reason` | `string` | Yes | The reason of the mandate notification. |
| `sepa_debit` | `map[string]any` | No |  |
| `source` | `map[string]any` | Yes | `Source` objects allow you to accept a variety of payment methods. |
| `status` | `string` | Yes | The status of the mandate notification. |
| `type` | `string` | Yes | The type of source this mandate notification is attached to. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SourceMandateNotification(nil).Load(map[string]any{"id": "source_mandate_notification_id", "source_id": "source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SourceMandateNotificationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SourceTransactionEntity

```go
sourceTransaction := client.SourceTransaction(nil)
fmt.Println(sourceTransaction.GetName()) // "source_transaction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ach_credit_transfer` | `map[string]any` | No |  |
| `amount` | `int` | Yes | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver. |
| `chf_credit_transfer` | `map[string]any` | No |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `gbp_credit_transfer` | `map[string]any` | No |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `paper_check` | `map[string]any` | No |  |
| `sepa_credit_transfer` | `map[string]any` | No |  |
| `source` | `string` | Yes | The ID of the source this transaction is attached to. |
| `status` | `string` | Yes | The status of the transaction, one of `succeeded`, `pending`, or `failed`. |
| `type` | `string` | Yes | The type of source this transaction is attached to. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SourceTransaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SourceTransaction(nil).Load(map[string]any{"id": "source_transaction_id", "source_id": "source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SourceTransactionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionEntity

```go
subscription := client.Subscription(nil)
fmt.Println(subscription.GetName()) // "subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `any` | No | ID of the Connect Application that created the subscription. |
| `application_fee_percent` | `float64` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `map[string]any` | Yes |  |
| `billing_cycle_anchor` | `int` | Yes | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `any` | No | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_mode` | `map[string]any` | Yes | The billing mode of the subscription. |
| `billing_schedules` | `[]any` | Yes | Billing schedules for this subscription. |
| `billing_thresholds` | `any` | No | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `cancel_at` | `int` | No | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | `bool` | Yes | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | `int` | No | If the subscription has been canceled, the date of that cancellation. |
| `cancellation_details` | `any` | No | Details about why this subscription was cancelled |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | ID of the customer who owns the subscription. |
| `customer_account` | `string` | No | ID of the account representing the customer who owns the subscription. |
| `days_until_due` | `int` | No | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | `any` | No | ID of the default payment method for the subscription. |
| `default_source` | `any` | No | ID of the default payment source for the subscription. |
| `default_tax_rates` | `[]any` | No | The tax rates that will apply to any subscription item that does not have `tax_rates` set. |
| `description` | `string` | No | The subscription's description, meant to be displayable to the customer. |
| `discounts` | `[]any` | Yes | The discounts applied to the subscription. |
| `ended_at` | `int` | No | If the subscription has ended, the date the subscription ended. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice_settings` | `map[string]any` | Yes |  |
| `items` | `map[string]any` | Yes | List of subscription items, each with an attached price. |
| `latest_invoice` | `any` | No | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | No | Settings for Managed Payments for this Subscription and resulting [Invoices](/api/invoices/object) and [PaymentIntents](/api/payment_intents/object). |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_pending_invoice_item_invoice` | `int` | No | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) the charge was made on behalf of for charges associated with this subscription. |
| `pause_collection` | `any` | No | If specified, payment collection for this subscription will be paused. |
| `payment_settings` | `any` | No | Payment settings passed on to invoices created by the subscription. |
| `pending_invoice_item_interval` | `any` | No | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `any` | No | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `any` | No | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `presentment_details` | `map[string]any` | Yes |  |
| `schedule` | `any` | No | The schedule attached to the subscription |
| `start_date` | `int` | Yes | Date when the subscription was first created. |
| `status` | `string` | Yes | Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`. |
| `status_details` | `map[string]any` | Yes | Describes changes to the subscription's status. |
| `test_clock` | `any` | No | ID of the test clock this subscription belongs to. |
| `transfer_data` | `any` | No | The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices. |
| `trial_end` | `int` | No | If the subscription has a trial, the end of that trial. |
| `trial_settings` | `any` | No | Settings related to subscription trials. |
| `trial_start` | `int` | No | If the subscription has a trial, the beginning of that trial. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Subscription(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Subscription(nil).Load(map[string]any{"id": "subscription_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Subscription(nil).Remove(map[string]any{"id": "subscription_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionItemEntity

```go
subscriptionItem := client.SubscriptionItem(nil)
fmt.Println(subscriptionItem.GetName()) // "subscription_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billed_until` | `int` | No | The time period the subscription item has been billed for. |
| `billing_thresholds` | `any` | No | Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period |
| `created` | `int` | Yes | Time at which the object was created. |
| `current_period_end` | `int` | Yes | The end time of this subscription item's current billing period. |
| `current_period_start` | `int` | Yes | The start time of this subscription item's current billing period. |
| `current_trial` | `any` | No | The current trial that is applied to this subscription item. |
| `discounts` | `[]any` | Yes | The discounts applied to the subscription item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `price` | `map[string]any` | Yes | Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products. |
| `quantity` | `int` | No | The [quantity](https://docs.stripe.com/subscriptions/quantities) of the plan to which the customer should be subscribed. |
| `subscription` | `string` | Yes | The `subscription` this `subscription_item` belongs to. |
| `tax_rates` | `[]any` | No | The tax rates which apply to this `subscription_item`. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriptionItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SubscriptionItem(nil).Load(map[string]any{"id": "subscription_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionScheduleEntity

```go
subscriptionSchedule := client.SubscriptionSchedule(nil)
fmt.Println(subscriptionSchedule.GetName()) // "subscription_schedule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `any` | No | ID of the Connect Application that created the schedule. |
| `billing_mode` | `map[string]any` | Yes | The billing mode of the subscription. |
| `canceled_at` | `int` | No | Time at which the subscription schedule was canceled. |
| `completed_at` | `int` | No | Time at which the subscription schedule was completed. |
| `created` | `int` | Yes | Time at which the object was created. |
| `current_phase` | `any` | No | Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`. |
| `customer` | `any` | Yes | ID of the customer who owns the subscription schedule. |
| `customer_account` | `string` | No | ID of the account who owns the subscription schedule. |
| `default_settings` | `map[string]any` | Yes |  |
| `end_behavior` | `string` | Yes | Behavior of the subscription schedule and underlying subscription when it ends. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `pause_schedules` | `[]any` | No | The pause schedules for this subscription schedule. |
| `phases` | `[]any` | Yes | Configuration for the subscription schedule's phases. |
| `released_at` | `int` | No | Time at which the subscription schedule was released. |
| `released_subscription` | `string` | No | ID of the subscription once managed by the subscription schedule (if it is released). |
| `status` | `string` | Yes | The present status of the subscription schedule. |
| `subscription` | `any` | No | ID of the subscription managed by the subscription schedule. |
| `test_clock` | `any` | No | ID of the test clock this subscription schedule belongs to. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriptionSchedule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SubscriptionSchedule(nil).Load(map[string]any{"id": "subscription_schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionScheduleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SupplierEntity

```go
supplier := client.Supplier(nil)
fmt.Println(supplier.GetName()) // "supplier"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the object. |
| `info_url` | `string` | Yes | Link to a webpage to learn more about the supplier. |
| `livemode` | `bool` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `locations` | `[]any` | Yes | The locations in which this supplier operates. |
| `name` | `string` | Yes | Name of this carbon removal supplier. |
| `object` | `string` | Yes | String representing the object’s type. |
| `removal_pathway` | `string` | Yes | The scientific pathway used for carbon removal. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Supplier(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Supplier(nil).Load(map[string]any{"id": "supplier_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SupplierEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TaxCodeEntity

```go
taxCode := client.TaxCode(nil)
fmt.Println(taxCode.GetName()) // "tax_code"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | A detailed description of which types of products the tax code represents. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `name` | `string` | Yes | A short name for the tax code. |
| `object` | `string` | Yes | String representing the object's type. |
| `requirements` | `any` | No | An object that describes more information about the tax location required for this tax code. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TaxCode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TaxCode(nil).Load(map[string]any{"id": "tax_code_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TaxCodeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TaxIdEntity

```go
taxId := client.TaxId(nil)
fmt.Println(taxId.GetName()) // "tax_id"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `string` | No | Two-letter ISO code representing the country of the tax ID. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `any` | No | ID of the customer. |
| `customer_account` | `string` | No | ID of the Account representing the customer. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `owner` | `any` | No | The account or customer the tax ID belongs to. |
| `type` | `string` | Yes | Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`,… |
| `value` | `string` | Yes | Value of the tax ID. |
| `verification` | `any` | No | Tax ID verification information. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TaxId(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TaxId(nil).Load(map[string]any{"id": "tax_id_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TaxId(nil).Remove(map[string]any{"id": "tax_id_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TaxIdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TaxRateEntity

```go
taxRate := client.TaxRate(nil)
fmt.Println(taxRate.GetName()) // "tax_rate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Defaults to `true`. |
| `country` | `string` | No | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | `int` | Yes | Time at which the object was created. |
| `description` | `string` | No | An arbitrary string attached to the tax rate for your internal use only. |
| `display_name` | `string` | Yes | The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page. |
| `effective_percentage` | `float64` | No | Actual/effective tax rate percentage out of 100. |
| `flat_amount` | `any` | No | The amount of the tax rate when the `rate_type` is `flat_amount`. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `inclusive` | `bool` | Yes | This specifies if the tax rate is inclusive or exclusive. |
| `jurisdiction` | `string` | No | The jurisdiction for the tax rate. |
| `jurisdiction_level` | `string` | No | The level of the jurisdiction that imposes this tax rate. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `percentage` | `float64` | Yes | Tax rate percentage out of 100. |
| `rate_type` | `string` | No | Indicates the type of tax rate applied to the taxable amount. |
| `state` | `string` | No | [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. |
| `tax_type` | `string` | No | The high-level tax type, such as `vat` or `sales_tax`. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TaxRate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TaxRate(nil).Load(map[string]any{"id": "tax_rate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TaxRateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TestClockEntity

```go
testClock := client.TestClock(nil)
fmt.Println(testClock.GetName()) // "test_clock"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advancing` | `map[string]any` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `deletes_after` | `int` | Yes | Time at which this clock is scheduled to auto delete. |
| `frozen_time` | `int` | Yes | Time at which all objects belonging to this clock are frozen. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | No | The custom name supplied at creation. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The status of the Test Clock. |
| `status_details` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TestClock(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TestClock(nil).Load(map[string]any{"id": "test_clock_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TestClock(nil).Remove(map[string]any{"id": "test_clock_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TestClockEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TokenEntity

```go
token := client.Token(nil)
fmt.Println(token.GetName()) // "token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bank_account` | `map[string]any` | Yes | These bank accounts are payment methods on `Customer` objects. |
| `card` | `any` | Yes | Card associated with this token. |
| `client_ip` | `string` | No | IP address of the client that generates the token. |
| `created` | `int` | Yes | Time at which the object was created. |
| `device_fingerprint` | `string` | No | The hashed ID derived from the device ID from the card network associated with the token. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last4` | `string` | No | The last four digits of the token. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `string` | Yes | The token service provider / card network associated with the token. |
| `network_data` | `map[string]any` | Yes |  |
| `network_updated_at` | `int` | Yes | Time at which the token was last updated by the card network. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The usage state of the token. |
| `type` | `string` | Yes | Type of the token: `account`, `bank_account`, `card`, or `pii`. |
| `used` | `bool` | Yes | Determines if you have already used this token (you can only use tokens once). |
| `wallet_provider` | `string` | No | The digital wallet for this token, if one was used. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Token(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Token(nil).Load(map[string]any{"id": "token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TopupEntity

```go
topup := client.Topup(nil)
fmt.Println(topup.GetName()) // "topup"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount transferred. |
| `balance_transaction` | `any` | No | ID of the balance transaction that describes the impact of this top-up on your account balance. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `expected_availability_date` | `int` | No | Date the funds are expected to arrive in your Stripe account for payouts. |
| `failure_code` | `string` | No | Error code explaining reason for top-up failure if available (see [the errors section](/api/errors) for a list of codes). |
| `failure_message` | `string` | No | Message to user further explaining reason for top-up failure if available. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `initiated_by` | `string` | No | Indicates whether the top-up was initiated by Stripe or by the user. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method` | `any` | No | The ID of a PaymentMethod representing the payment method used for the top-up. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for this top-up. |
| `source` | `any` | No | The source field is deprecated. |
| `statement_descriptor` | `string` | No | Extra information about a top-up. |
| `status` | `string` | Yes | The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`. |
| `transfer_group` | `string` | No | A string that identifies this top-up as part of a group. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Topup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Topup(nil).Load(map[string]any{"id": "topup_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TopupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TransactionEntity

```go
transaction := client.Transaction(nil)
fmt.Println(transaction.GetName()) // "transaction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | The ID of the Financial Connections Account this transaction belongs to. |
| `amount` | `int` | Yes | The transaction amount, which will be reflected in your balance. |
| `amount_details` | `any` | No | Detailed breakdown of amount components. |
| `authorization` | `any` | No | The `Authorization` object that led to this transaction. |
| `balance_impact` | `map[string]any` | Yes | Change to a FinancialAccount's balance |
| `balance_transaction` | `any` | No | ID of the [balance transaction](https://docs.stripe.com/api/balance_transactions) associated with this transaction. |
| `card` | `any` | Yes | The card used to make this transaction. |
| `cardholder` | `any` | No | The cardholder to whom this transaction belongs. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | No | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `map[string]any` | Yes |  |
| `description` | `string` | Yes | An arbitrary string attached to the object. |
| `dispute` | `any` | No | If you've disputed the transaction, the ID of the dispute. |
| `entries` | `map[string]any` | Yes | A list of TransactionEntries that are part of this Transaction. |
| `financial_account` | `string` | Yes | The FinancialAccount associated with this object. |
| `flow` | `string` | No | ID of the flow that created the Transaction. |
| `flow_details` | `any` | No | Details of the flow that created the Transaction. |
| `flow_type` | `string` | Yes | Type of the flow that created the Transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `line_items` | `map[string]any` | Yes | The tax collected or refunded, by line item. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `int` | Yes | The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `merchant_currency` | `string` | Yes | The currency with which the merchant is taking payment. |
| `merchant_data` | `map[string]any` | Yes |  |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `any` | No | Details about the transaction, such as processing dates, set by the card network. |
| `object` | `string` | Yes | String representing the object's type. |
| `posted_at` | `int` | No | Time at which this transaction posted. |
| `purchase_details` | `any` | No | Additional purchase information that is optionally provided by the merchant. |
| `reference` | `string` | Yes | A custom unique identifier, such as 'myOrder_123'. |
| `reversal` | `any` | No | If `type=reversal`, contains information about what was reversed. |
| `ship_from_details` | `any` | No | The details of the ship from location, such as the address. |
| `shipping_cost` | `any` | No | The shipping cost details for the transaction. |
| `status` | `string` | Yes | Status of the Transaction. |
| `status_transitions` | `map[string]any` | Yes |  |
| `tax_date` | `int` | Yes | The calculation uses the tax rules and rates that are in effect at this timestamp. |
| `token` | `string` | No | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this transaction. |
| `transacted_at` | `int` | Yes | Time at which the transaction was transacted. |
| `transaction_refresh` | `string` | Yes | The token of the transaction refresh that last updated or created this transaction. |
| `treasury` | `any` | No | [Treasury](https://docs.stripe.com/api/treasury) details related to this transaction if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts |
| `type` | `string` | Yes | The nature of the transaction. |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `void_at` | `int` | No | Time at which this transaction was voided. |
| `wallet` | `string` | No | The digital wallet used for this transaction. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `account` | - | - | - |
| `amount` | - | - | - |
| `amount_details` | - | - | - |
| `authorization` | - | - | - |
| `balance_impact` | - | - | - |
| `balance_transaction` | - | - | - |
| `card` | - | - | - |
| `cardholder` | - | - | - |
| `created` | - | - | - |
| `currency` | - | - | - |
| `customer` | - | - | - |
| `customer_details` | - | - | - |
| `description` | - | - | - |
| `dispute` | - | - | - |
| `entries` | - | - | - |
| `financial_account` | - | - | - |
| `flow` | - | - | - |
| `flow_details` | - | - | - |
| `flow_type` | - | - | - |
| `id` | - | - | - |
| `line_items` | - | - | - |
| `livemode` | - | - | - |
| `merchant_amount` | - | - | - |
| `merchant_currency` | - | - | - |
| `merchant_data` | - | - | - |
| `metadata` | Yes | - | Yes |
| `network_data` | - | - | - |
| `object` | - | - | - |
| `posted_at` | Yes | - | Yes |
| `purchase_details` | - | - | - |
| `reference` | - | - | - |
| `reversal` | - | - | - |
| `ship_from_details` | - | - | - |
| `shipping_cost` | - | - | - |
| `status` | - | - | - |
| `status_transitions` | - | - | - |
| `tax_date` | - | - | - |
| `token` | - | - | - |
| `transacted_at` | - | - | - |
| `transaction_refresh` | - | - | - |
| `treasury` | - | - | - |
| `type` | - | - | - |
| `updated` | - | - | - |
| `void_at` | - | - | - |
| `wallet` | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Transaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Transaction(nil).Load(map[string]any{"id": "transaction_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TransactionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TransactionEntryEntity

```go
transactionEntry := client.TransactionEntry(nil)
fmt.Println(transactionEntry.GetName()) // "transaction_entry"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance_impact` | `map[string]any` | Yes | Change to a FinancialAccount's balance |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `effective_at` | `int` | Yes | When the TransactionEntry will impact the FinancialAccount's balance. |
| `financial_account` | `string` | Yes | The FinancialAccount associated with this object. |
| `flow` | `string` | No | Token of the flow associated with the TransactionEntry. |
| `flow_details` | `any` | No | Details of the flow associated with the TransactionEntry. |
| `flow_type` | `string` | Yes | Type of the flow associated with the TransactionEntry. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `transaction` | `any` | Yes | The Transaction associated with this object. |
| `type` | `string` | Yes | The specific money movement that generated the TransactionEntry. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TransactionEntry(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TransactionEntry(nil).Load(map[string]any{"id": "transaction_entry_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TransactionEntryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TransferEntity

```go
transfer := client.Transfer(nil)
fmt.Println(transfer.GetName()) // "transfer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount in cents (or local equivalent) to be transferred. |
| `amount_reversed` | `int` | Yes | Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued). |
| `balance_transaction` | `any` | No | Balance transaction that describes the impact of this transfer on your account balance. |
| `created` | `int` | Yes | Time that this record of the transfer was first created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `destination` | `any` | No | ID of the Stripe account the transfer was sent to. |
| `destination_payment` | `any` | No | If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `reversals` | `map[string]any` | Yes | A list of reversals that have been applied to the transfer. |
| `reversed` | `bool` | Yes | Whether the transfer has been fully reversed. |
| `source_transaction` | `any` | No | ID of the charge that was used to fund the transfer. |
| `source_type` | `string` | No | The source balance this transfer came from. |
| `transfer_group` | `string` | No | A string that identifies this transaction as part of a group. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Transfer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Transfer(nil).Load(map[string]any{"id": "transfer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TransferEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TrialOfferEntity

```go
trialOffer := client.TrialOffer(nil)
fmt.Println(trialOffer.GetName()) // "trial_offer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the trial offer is active. |
| `duration` | `map[string]any` | Yes |  |
| `end_behavior` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `nickname` | `string` | No | A brief description of the trial offer, hidden from customers. |
| `object` | `string` | Yes | String representing the object's type. |
| `price` | `float64` | Yes | The price during the trial offer. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TrialOffer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TrialOffer(nil).Load(map[string]any{"id": "trial_offer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TrialOfferEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ValueListEntity

```go
valueList := client.ValueList(nil)
fmt.Println(valueList.GetName()) // "value_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes | The name of the value list for use in rules. |
| `created` | `int` | Yes | Time at which the object was created. |
| `created_by` | `string` | Yes | The name or email address of the user who created this value list. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `item_type` | `string` | Yes | The type of items in the value list. |
| `list_items` | `map[string]any` | Yes | List of items contained within this value list. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Yes | The name of the value list. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ValueList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ValueList(nil).Load(map[string]any{"id": "value_list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ValueList(nil).Remove(map[string]any{"id": "value_list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ValueListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ValueListItemEntity

```go
valueListItem := client.ValueListItem(nil)
fmt.Println(valueListItem.GetName()) // "value_list_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `created_by` | `string` | Yes | The name or email address of the user who added this item to the value list. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `value` | `string` | Yes | The value of the item. |
| `value_list` | `string` | Yes | The identifier of the value list this item belongs to. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ValueListItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ValueListItem(nil).Load(map[string]any{"id": "value_list_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ValueListItem(nil).Remove(map[string]any{"id": "value_list_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ValueListItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VerificationReportEntity

```go
verificationReport := client.VerificationReport(nil)
fmt.Println(verificationReport.GetName()) // "verification_report"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_reference_id` | `string` | No | A string to reference this user. |
| `created` | `int` | Yes | Time at which the object was created. |
| `document` | `map[string]any` | Yes | Result from a document check |
| `email` | `map[string]any` | Yes | Result from a email check |
| `id` | `string` | Yes | Unique identifier for the object. |
| `id_number` | `map[string]any` | Yes | Result from an id_number check |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `options` | `map[string]any` | No |  |
| `phone` | `map[string]any` | Yes | Result from a phone check |
| `selfie` | `map[string]any` | Yes | Result from a selfie check |
| `type` | `string` | Yes | Type of report. |
| `verification_flow` | `string` | No | The configuration token of a verification flow from the dashboard. |
| `verification_session` | `string` | No | ID of the VerificationSession that created this report. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.VerificationReport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.VerificationReport(nil).Load(map[string]any{"id": "verification_report_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VerificationReportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VerificationSessionEntity

```go
verificationSession := client.VerificationSession(nil)
fmt.Println(verificationSession.GetName()) // "verification_session"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_reference_id` | `string` | No | A string to reference this user. |
| `client_secret` | `string` | No | The short-lived client secret used by Stripe.js to [show a verification modal](https://docs.stripe.com/js/identity/modal) inside your app. |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last_error` | `any` | No | If present, this property tells you the last error encountered when processing the verification. |
| `last_verification_report` | `any` | No | ID of the most recent VerificationReport. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `options` | `any` | No | A set of options for the session’s verification checks. |
| `provided_details` | `any` | No | Details provided about the user being verified. |
| `redaction` | `any` | No | Redaction status of this VerificationSession. |
| `related_customer` | `string` | No | Customer ID |
| `related_customer_account` | `string` | No | The ID of the Account representing a customer. |
| `related_person` | `map[string]any` | Yes |  |
| `status` | `string` | Yes | Status of this VerificationSession. |
| `type` | `string` | Yes | The type of [verification check](https://docs.stripe.com/identity/verification-checks) to be performed. |
| `url` | `string` | No | The short-lived URL that you use to redirect a user to Stripe to submit their identity information. |
| `verification_flow` | `string` | No | The configuration token of a verification flow from the dashboard. |
| `verified_outputs` | `any` | No | The user’s verified data. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.VerificationSession(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.VerificationSession(nil).Load(map[string]any{"id": "verification_session_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VerificationSessionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEndpointEntity

```go
webhookEndpoint := client.WebhookEndpoint(nil)
fmt.Println(webhookEndpoint.GetName()) // "webhook_endpoint"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_version` | `string` | No | The API version that events are rendered as for this webhook endpoint. |
| `application` | `string` | No | The ID of the associated Connect application. |
| `created` | `int` | Yes | Time at which the object was created. |
| `description` | `string` | No | An optional description of what the webhook is used for. |
| `enabled_events` | `[]any` | Yes | The list of events to enable for this endpoint. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `map[string]any` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `secret` | `string` | No | The endpoint's secret, used to generate [webhook signatures](https://docs.stripe.com/webhooks/signatures). |
| `status` | `string` | Yes | The status of the webhook. |
| `url` | `string` | Yes | The URL of the webhook endpoint. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WebhookEndpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WebhookEndpoint(nil).Load(map[string]any{"id": "webhook_endpoint_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEndpointEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```go
client := sdk.NewStripeSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Debug capture.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Metrics.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Paging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

