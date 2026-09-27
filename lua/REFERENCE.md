# Stripe Lua SDK Reference

Complete API reference for the Stripe Lua SDK.


## StripeSDK

### Constructor

```lua
local sdk = require("stripe_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Account(data)`

Create a new `Account` entity instance. Pass `nil` for no initial data.

#### `AccountLink(data)`

Create a new `AccountLink` entity instance. Pass `nil` for no initial data.

#### `AccountOwner(data)`

Create a new `AccountOwner` entity instance. Pass `nil` for no initial data.

#### `AccountSession(data)`

Create a new `AccountSession` entity instance. Pass `nil` for no initial data.

#### `ActiveEntitlement(data)`

Create a new `ActiveEntitlement` entity instance. Pass `nil` for no initial data.

#### `Alert(data)`

Create a new `Alert` entity instance. Pass `nil` for no initial data.

#### `ApplePayDomain(data)`

Create a new `ApplePayDomain` entity instance. Pass `nil` for no initial data.

#### `ApplicationFee(data)`

Create a new `ApplicationFee` entity instance. Pass `nil` for no initial data.

#### `Association(data)`

Create a new `Association` entity instance. Pass `nil` for no initial data.

#### `Authentication(data)`

Create a new `Authentication` entity instance. Pass `nil` for no initial data.

#### `Authorization(data)`

Create a new `Authorization` entity instance. Pass `nil` for no initial data.

#### `Balance(data)`

Create a new `Balance` entity instance. Pass `nil` for no initial data.

#### `BalanceSetting(data)`

Create a new `BalanceSetting` entity instance. Pass `nil` for no initial data.

#### `BalanceTransaction(data)`

Create a new `BalanceTransaction` entity instance. Pass `nil` for no initial data.

#### `BankAccount(data)`

Create a new `BankAccount` entity instance. Pass `nil` for no initial data.

#### `Calculation(data)`

Create a new `Calculation` entity instance. Pass `nil` for no initial data.

#### `Capability(data)`

Create a new `Capability` entity instance. Pass `nil` for no initial data.

#### `Card(data)`

Create a new `Card` entity instance. Pass `nil` for no initial data.

#### `Cardholder(data)`

Create a new `Cardholder` entity instance. Pass `nil` for no initial data.

#### `CashBalance(data)`

Create a new `CashBalance` entity instance. Pass `nil` for no initial data.

#### `CashBalanceTransaction(data)`

Create a new `CashBalanceTransaction` entity instance. Pass `nil` for no initial data.

#### `Charge(data)`

Create a new `Charge` entity instance. Pass `nil` for no initial data.

#### `Configuration(data)`

Create a new `Configuration` entity instance. Pass `nil` for no initial data.

#### `ConfirmationToken(data)`

Create a new `ConfirmationToken` entity instance. Pass `nil` for no initial data.

#### `ConnectionToken(data)`

Create a new `ConnectionToken` entity instance. Pass `nil` for no initial data.

#### `CountrySpec(data)`

Create a new `CountrySpec` entity instance. Pass `nil` for no initial data.

#### `Coupon(data)`

Create a new `Coupon` entity instance. Pass `nil` for no initial data.

#### `CreditBalanceSummary(data)`

Create a new `CreditBalanceSummary` entity instance. Pass `nil` for no initial data.

#### `CreditBalanceTransaction(data)`

Create a new `CreditBalanceTransaction` entity instance. Pass `nil` for no initial data.

#### `CreditGrant(data)`

Create a new `CreditGrant` entity instance. Pass `nil` for no initial data.

#### `CreditNote(data)`

Create a new `CreditNote` entity instance. Pass `nil` for no initial data.

#### `CreditNoteLine(data)`

Create a new `CreditNoteLine` entity instance. Pass `nil` for no initial data.

#### `CreditReversal(data)`

Create a new `CreditReversal` entity instance. Pass `nil` for no initial data.

#### `Customer(data)`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `CustomerBalanceTransaction(data)`

Create a new `CustomerBalanceTransaction` entity instance. Pass `nil` for no initial data.

#### `CustomerSession(data)`

Create a new `CustomerSession` entity instance. Pass `nil` for no initial data.

#### `DebitReversal(data)`

Create a new `DebitReversal` entity instance. Pass `nil` for no initial data.

#### `DeletedAccount(data)`

Create a new `DeletedAccount` entity instance. Pass `nil` for no initial data.

#### `DeletedApplePayDomain(data)`

Create a new `DeletedApplePayDomain` entity instance. Pass `nil` for no initial data.

#### `DeletedCoupon(data)`

Create a new `DeletedCoupon` entity instance. Pass `nil` for no initial data.

#### `DeletedExternalAccount(data)`

Create a new `DeletedExternalAccount` entity instance. Pass `nil` for no initial data.

#### `DeletedInvoiceitem(data)`

Create a new `DeletedInvoiceitem` entity instance. Pass `nil` for no initial data.

#### `DeletedPerson(data)`

Create a new `DeletedPerson` entity instance. Pass `nil` for no initial data.

#### `DeletedPlan(data)`

Create a new `DeletedPlan` entity instance. Pass `nil` for no initial data.

#### `DeletedProductFeature(data)`

Create a new `DeletedProductFeature` entity instance. Pass `nil` for no initial data.

#### `DeletedSubscriptionItem(data)`

Create a new `DeletedSubscriptionItem` entity instance. Pass `nil` for no initial data.

#### `DeletedWebhookEndpoint(data)`

Create a new `DeletedWebhookEndpoint` entity instance. Pass `nil` for no initial data.

#### `Discount(data)`

Create a new `Discount` entity instance. Pass `nil` for no initial data.

#### `Dispute(data)`

Create a new `Dispute` entity instance. Pass `nil` for no initial data.

#### `Domain(data)`

Create a new `Domain` entity instance. Pass `nil` for no initial data.

#### `EarlyFraudWarning(data)`

Create a new `EarlyFraudWarning` entity instance. Pass `nil` for no initial data.

#### `EphemeralKey(data)`

Create a new `EphemeralKey` entity instance. Pass `nil` for no initial data.

#### `Event(data)`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `ExchangeRate(data)`

Create a new `ExchangeRate` entity instance. Pass `nil` for no initial data.

#### `ExternalAccount(data)`

Create a new `ExternalAccount` entity instance. Pass `nil` for no initial data.

#### `Feature(data)`

Create a new `Feature` entity instance. Pass `nil` for no initial data.

#### `FeedbackOption(data)`

Create a new `FeedbackOption` entity instance. Pass `nil` for no initial data.

#### `File(data)`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `FileLink(data)`

Create a new `FileLink` entity instance. Pass `nil` for no initial data.

#### `FinancialAccount(data)`

Create a new `FinancialAccount` entity instance. Pass `nil` for no initial data.

#### `FinancialAccountFeature(data)`

Create a new `FinancialAccountFeature` entity instance. Pass `nil` for no initial data.

#### `FundCashBalance(data)`

Create a new `FundCashBalance` entity instance. Pass `nil` for no initial data.

#### `FundingInstruction(data)`

Create a new `FundingInstruction` entity instance. Pass `nil` for no initial data.

#### `History(data)`

Create a new `History` entity instance. Pass `nil` for no initial data.

#### `InboundTransfer(data)`

Create a new `InboundTransfer` entity instance. Pass `nil` for no initial data.

#### `Install(data)`

Create a new `Install` entity instance. Pass `nil` for no initial data.

#### `Invoice(data)`

Create a new `Invoice` entity instance. Pass `nil` for no initial data.

#### `InvoicePayment(data)`

Create a new `InvoicePayment` entity instance. Pass `nil` for no initial data.

#### `InvoiceRenderingTemplate(data)`

Create a new `InvoiceRenderingTemplate` entity instance. Pass `nil` for no initial data.

#### `Invoiceitem(data)`

Create a new `Invoiceitem` entity instance. Pass `nil` for no initial data.

#### `Line(data)`

Create a new `Line` entity instance. Pass `nil` for no initial data.

#### `LineItem(data)`

Create a new `LineItem` entity instance. Pass `nil` for no initial data.

#### `LinkedAccount(data)`

Create a new `LinkedAccount` entity instance. Pass `nil` for no initial data.

#### `LinkedAccountOwner(data)`

Create a new `LinkedAccountOwner` entity instance. Pass `nil` for no initial data.

#### `Location(data)`

Create a new `Location` entity instance. Pass `nil` for no initial data.

#### `LoginLink(data)`

Create a new `LoginLink` entity instance. Pass `nil` for no initial data.

#### `Mandate(data)`

Create a new `Mandate` entity instance. Pass `nil` for no initial data.

#### `Meter(data)`

Create a new `Meter` entity instance. Pass `nil` for no initial data.

#### `MeterEvent(data)`

Create a new `MeterEvent` entity instance. Pass `nil` for no initial data.

#### `MeterEventAdjustment(data)`

Create a new `MeterEventAdjustment` entity instance. Pass `nil` for no initial data.

#### `MeterEventSummary(data)`

Create a new `MeterEventSummary` entity instance. Pass `nil` for no initial data.

#### `OnboardingLink(data)`

Create a new `OnboardingLink` entity instance. Pass `nil` for no initial data.

#### `Order(data)`

Create a new `Order` entity instance. Pass `nil` for no initial data.

#### `OutboundPayment(data)`

Create a new `OutboundPayment` entity instance. Pass `nil` for no initial data.

#### `OutboundTransfer(data)`

Create a new `OutboundTransfer` entity instance. Pass `nil` for no initial data.

#### `PaymentAttemptRecord(data)`

Create a new `PaymentAttemptRecord` entity instance. Pass `nil` for no initial data.

#### `PaymentEvaluation(data)`

Create a new `PaymentEvaluation` entity instance. Pass `nil` for no initial data.

#### `PaymentIntent(data)`

Create a new `PaymentIntent` entity instance. Pass `nil` for no initial data.

#### `PaymentIntentAmountDetailsLineItem(data)`

Create a new `PaymentIntentAmountDetailsLineItem` entity instance. Pass `nil` for no initial data.

#### `PaymentLink(data)`

Create a new `PaymentLink` entity instance. Pass `nil` for no initial data.

#### `PaymentMethod(data)`

Create a new `PaymentMethod` entity instance. Pass `nil` for no initial data.

#### `PaymentMethodConfiguration(data)`

Create a new `PaymentMethodConfiguration` entity instance. Pass `nil` for no initial data.

#### `PaymentMethodDomain(data)`

Create a new `PaymentMethodDomain` entity instance. Pass `nil` for no initial data.

#### `PaymentRecord(data)`

Create a new `PaymentRecord` entity instance. Pass `nil` for no initial data.

#### `Payout(data)`

Create a new `Payout` entity instance. Pass `nil` for no initial data.

#### `Person(data)`

Create a new `Person` entity instance. Pass `nil` for no initial data.

#### `PersonalizationDesign(data)`

Create a new `PersonalizationDesign` entity instance. Pass `nil` for no initial data.

#### `PhysicalBundle(data)`

Create a new `PhysicalBundle` entity instance. Pass `nil` for no initial data.

#### `Plan(data)`

Create a new `Plan` entity instance. Pass `nil` for no initial data.

#### `Price(data)`

Create a new `Price` entity instance. Pass `nil` for no initial data.

#### `Product(data)`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `ProductFeature(data)`

Create a new `ProductFeature` entity instance. Pass `nil` for no initial data.

#### `PromotionCode(data)`

Create a new `PromotionCode` entity instance. Pass `nil` for no initial data.

#### `Quote(data)`

Create a new `Quote` entity instance. Pass `nil` for no initial data.

#### `QuoteComputedUpfrontLineItem(data)`

Create a new `QuoteComputedUpfrontLineItem` entity instance. Pass `nil` for no initial data.

#### `QuotePdf(data)`

Create a new `QuotePdf` entity instance. Pass `nil` for no initial data.

#### `Reader(data)`

Create a new `Reader` entity instance. Pass `nil` for no initial data.

#### `ReceivedCredit(data)`

Create a new `ReceivedCredit` entity instance. Pass `nil` for no initial data.

#### `ReceivedDebit(data)`

Create a new `ReceivedDebit` entity instance. Pass `nil` for no initial data.

#### `Refund(data)`

Create a new `Refund` entity instance. Pass `nil` for no initial data.

#### `Registration(data)`

Create a new `Registration` entity instance. Pass `nil` for no initial data.

#### `ReportRun(data)`

Create a new `ReportRun` entity instance. Pass `nil` for no initial data.

#### `ReportType(data)`

Create a new `ReportType` entity instance. Pass `nil` for no initial data.

#### `Request(data)`

Create a new `Request` entity instance. Pass `nil` for no initial data.

#### `Reversal(data)`

Create a new `Reversal` entity instance. Pass `nil` for no initial data.

#### `Review(data)`

Create a new `Review` entity instance. Pass `nil` for no initial data.

#### `ScheduledQueryRun(data)`

Create a new `ScheduledQueryRun` entity instance. Pass `nil` for no initial data.

#### `Search(data)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Secret(data)`

Create a new `Secret` entity instance. Pass `nil` for no initial data.

#### `Session(data)`

Create a new `Session` entity instance. Pass `nil` for no initial data.

#### `Setting(data)`

Create a new `Setting` entity instance. Pass `nil` for no initial data.

#### `Settlement(data)`

Create a new `Settlement` entity instance. Pass `nil` for no initial data.

#### `SetupAttempt(data)`

Create a new `SetupAttempt` entity instance. Pass `nil` for no initial data.

#### `SetupIntent(data)`

Create a new `SetupIntent` entity instance. Pass `nil` for no initial data.

#### `ShippingRate(data)`

Create a new `ShippingRate` entity instance. Pass `nil` for no initial data.

#### `SigmaApiQuery(data)`

Create a new `SigmaApiQuery` entity instance. Pass `nil` for no initial data.

#### `Source(data)`

Create a new `Source` entity instance. Pass `nil` for no initial data.

#### `SourceMandateNotification(data)`

Create a new `SourceMandateNotification` entity instance. Pass `nil` for no initial data.

#### `SourceTransaction(data)`

Create a new `SourceTransaction` entity instance. Pass `nil` for no initial data.

#### `Subscription(data)`

Create a new `Subscription` entity instance. Pass `nil` for no initial data.

#### `SubscriptionItem(data)`

Create a new `SubscriptionItem` entity instance. Pass `nil` for no initial data.

#### `SubscriptionSchedule(data)`

Create a new `SubscriptionSchedule` entity instance. Pass `nil` for no initial data.

#### `Supplier(data)`

Create a new `Supplier` entity instance. Pass `nil` for no initial data.

#### `TaxCode(data)`

Create a new `TaxCode` entity instance. Pass `nil` for no initial data.

#### `TaxId(data)`

Create a new `TaxId` entity instance. Pass `nil` for no initial data.

#### `TaxRate(data)`

Create a new `TaxRate` entity instance. Pass `nil` for no initial data.

#### `TestClock(data)`

Create a new `TestClock` entity instance. Pass `nil` for no initial data.

#### `Token(data)`

Create a new `Token` entity instance. Pass `nil` for no initial data.

#### `Topup(data)`

Create a new `Topup` entity instance. Pass `nil` for no initial data.

#### `Transaction(data)`

Create a new `Transaction` entity instance. Pass `nil` for no initial data.

#### `TransactionEntry(data)`

Create a new `TransactionEntry` entity instance. Pass `nil` for no initial data.

#### `Transfer(data)`

Create a new `Transfer` entity instance. Pass `nil` for no initial data.

#### `TrialOffer(data)`

Create a new `TrialOffer` entity instance. Pass `nil` for no initial data.

#### `ValueList(data)`

Create a new `ValueList` entity instance. Pass `nil` for no initial data.

#### `ValueListItem(data)`

Create a new `ValueListItem` entity instance. Pass `nil` for no initial data.

#### `VerificationReport(data)`

Create a new `VerificationReport` entity instance. Pass `nil` for no initial data.

#### `VerificationSession(data)`

Create a new `VerificationSession` entity instance. Pass `nil` for no initial data.

#### `WebhookEndpoint(data)`

Create a new `WebhookEndpoint` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AccountEntity

```lua
local account = client:Account(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `any` | No | The account holder that this account belongs to. |
| `account_numbers` | `table` | No | Details about the account numbers. |
| `balance` | `any` | No | The most recent information about the account's balance. |
| `balance_refresh` | `any` | No | The state of the most recent attempt to refresh the account balance. |
| `business_profile` | `any` | No | Business information about the account. |
| `business_type` | `string` | No | The business type. |
| `capabilities` | `table` | No |  |
| `category` | `string` | Yes | The type of the account. |
| `charges_enabled` | `boolean` | No | Whether the account can process charges. |
| `company` | `table` | No |  |
| `controller` | `table` | Yes |  |
| `country` | `string` | No | The account's country. |
| `created` | `number` | Yes | Time at which the object was created. |
| `default_currency` | `string` | No | Three-letter ISO currency code representing the default currency for the account. |
| `details_submitted` | `boolean` | No | Whether account details have been submitted. |
| `display_name` | `string` | No | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `email` | `string` | No | An email address associated with the account. |
| `external_accounts` | `table` | Yes | External accounts (bank accounts and debit cards) currently attached to this account. |
| `future_requirements` | `table` | No |  |
| `groups` | `any` | No | The groups associated with the account. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `individual` | `table` | Yes | This is an object representing a person associated with a Stripe account. |
| `institution_name` | `string` | Yes | The name of the institution that holds this account. |
| `last4` | `string` | No | The last 4 digits of the account number. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `ownership` | `any` | No | The most recent information about the account's owners. |
| `ownership_refresh` | `any` | No | The state of the most recent attempt to refresh the account owners. |
| `payouts_enabled` | `boolean` | No | Whether the funds in this account can be paid out. |
| `permissions` | `table` | No | The list of permissions granted by this account. |
| `requirements` | `table` | No |  |
| `settings` | `any` | No | Options for customizing how the account functions within Stripe. |
| `status` | `string` | Yes | The status of the link to the account. |
| `status_details` | `table` | No |  |
| `subcategory` | `string` | Yes | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `table` | No | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `table` | Yes | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `tos_acceptance` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Account():create({
  id = --[[ string ]],
  category = --[[ string ]],
  controller = --[[ table ]],
  created = --[[ number ]],
  external_accounts = --[[ table ]],
  individual = --[[ table ]],
  institution_name = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  status = --[[ string ]],
  subcategory = --[[ string ]],
  supported_payment_method_types = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Account():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Account():load({ account = "account" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AccountLinkEntity

```lua
local account_link = client:AccountLink(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `expires_at` | `number` | Yes | The timestamp at which this account link will expire. |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | Yes | The URL for the account link. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AccountLink():create({
  created = --[[ number ]],
  expires_at = --[[ number ]],
  object = --[[ string ]],
  url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountLinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AccountOwnerEntity

```lua
local account_owner = client:AccountOwner(nil)
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
| `refreshed_at` | `number` | No | The timestamp of the refresh that updated this owner. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AccountOwner():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountOwnerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AccountSessionEntity

```lua
local account_session = client:AccountSession(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_management` | `table` | Yes |  |
| `account_onboarding` | `table` | Yes |  |
| `balance_report` | `table` | Yes |  |
| `balances` | `table` | Yes |  |
| `disputes_list` | `table` | Yes |  |
| `documents` | `table` | Yes |  |
| `financial_account` | `table` | Yes |  |
| `financial_account_transactions` | `table` | Yes |  |
| `instant_payouts_promotion` | `table` | Yes |  |
| `issuing_card` | `table` | Yes |  |
| `issuing_cards_list` | `table` | Yes |  |
| `notification_banner` | `table` | Yes |  |
| `payment_details` | `table` | Yes |  |
| `payment_disputes` | `table` | Yes |  |
| `payment_method_settings` | `table` | Yes |  |
| `payments` | `table` | Yes |  |
| `payout_details` | `table` | Yes |  |
| `payout_reconciliation_report` | `table` | Yes |  |
| `payouts` | `table` | Yes |  |
| `payouts_list` | `table` | Yes |  |
| `tax_registrations` | `table` | Yes |  |
| `tax_settings` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AccountSession():create({
  account_management = --[[ table ]],
  account_onboarding = --[[ table ]],
  balance_report = --[[ table ]],
  balances = --[[ table ]],
  disputes_list = --[[ table ]],
  documents = --[[ table ]],
  financial_account = --[[ table ]],
  financial_account_transactions = --[[ table ]],
  instant_payouts_promotion = --[[ table ]],
  issuing_card = --[[ table ]],
  issuing_cards_list = --[[ table ]],
  notification_banner = --[[ table ]],
  payment_details = --[[ table ]],
  payment_disputes = --[[ table ]],
  payment_method_settings = --[[ table ]],
  payments = --[[ table ]],
  payout_details = --[[ table ]],
  payout_reconciliation_report = --[[ table ]],
  payouts = --[[ table ]],
  payouts_list = --[[ table ]],
  tax_registrations = --[[ table ]],
  tax_settings = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountSessionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActiveEntitlementEntity

```lua
local active_entitlement = client:ActiveEntitlement(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `feature` | `any` | Yes | The [Feature](https://docs.stripe.com/api/entitlements/feature) that the customer is entitled to. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | Yes | A unique key you provide as your own system identifier. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ActiveEntitlement():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActiveEntitlement():load({ id = "active_entitlement_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActiveEntitlementEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AlertEntity

```lua
local alert = client:Alert(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_type` | `string` | Yes | Defines the type of the alert. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | No | Status of the alert. |
| `title` | `string` | Yes | Title of the alert. |
| `usage_threshold` | `any` | No | Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://docs.stripe.com/api/billing/meter). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Alert():create({
  alert_type = --[[ string ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  title = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Alert():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Alert():load({ id = "alert_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApplePayDomainEntity

```lua
local apple_pay_domain = client:ApplePayDomain(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `domain_name` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApplePayDomain():create({
  created = --[[ number ]],
  domain_name = --[[ string ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApplePayDomain():load({ id = "apple_pay_domain_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplePayDomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApplicationFeeEntity

```lua
local application_fee = client:ApplicationFee(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `any` | Yes | ID of the Stripe account this fee was taken from. |
| `amount` | `number` | Yes | Amount earned, in cents (or local equivalent). |
| `amount_refunded` | `number` | Yes | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued) |
| `application` | `any` | Yes | ID of the Connect application that earned the fee. |
| `balance_transaction` | `any` | No | Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds). |
| `charge` | `any` | Yes | ID of the charge that the application fee was taken from. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `fee_source` | `any` | No | Polymorphic source of the application fee. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `originating_transaction` | `any` | No | ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter. |
| `refunded` | `boolean` | Yes | Whether the fee has been fully refunded. |
| `refunds` | `table` | Yes | A list of refunds that have been applied to the fee. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApplicationFee():create({
  id = --[[ string ]],
  account = --[[ any ]],
  amount = --[[ number ]],
  amount_refunded = --[[ number ]],
  application = --[[ any ]],
  charge = --[[ any ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  refunded = --[[ boolean ]],
  refunds = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApplicationFee():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApplicationFee():load({ id = "application_fee_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationFeeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AssociationEntity

```lua
local association = client:Association(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Association():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssociationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthenticationEntity

```lua
local authentication = client:Authentication(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquirer_details` | `table` | No | Contains additional details about the acquirer for a 3DS Authentication. |
| `amount` | `number` | No | The amount for this 3DS Authentication. |
| `challenge_url` | `string` | No | The URL for presenting a challenge to your cardholder, present if status is requires_challenge. |
| `channel` | `table` | Yes | Contains details on the channel used (browser, 3RI) for a standalone 3DS Authentication. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `directory_server` | `string` | Yes | The 3DS directory server with which this 3DS Authentication was processed. |
| `fingerprinting_url` | `string` | No | The URL for performing issuer fingerprinting, present if fingerprinting is supported for the given payment method. |
| `flow_preference` | `table` | Yes | Contains details of the flow preference used for a standalone 3DS Authentication. |
| `future_usage` | `table` | Yes | Contains information about the future authorisations related to this authentication |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `message_category` | `string` | Yes | Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `outcome` | `string` | No | The outcome of this 3DS Authentication. |
| `outcome_details` | `table` | Yes | Contains details on the result for a standalone 3DS Authentication. |
| `payment_method` | `any` | Yes | ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication. |
| `reason` | `string` | No | The reason for invoking this 3DS Authentication. |
| `shipping_address` | `table` | No | Contains details about the shipping address for a 3DS Authentication. |
| `status` | `string` | Yes | Status of this Authentication. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Authentication():create({
  channel = --[[ table ]],
  created = --[[ number ]],
  directory_server = --[[ string ]],
  flow_preference = --[[ table ]],
  future_usage = --[[ table ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  message_category = --[[ string ]],
  object = --[[ string ]],
  outcome_details = --[[ table ]],
  payment_method = --[[ any ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Authentication():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Authentication():load({ id = "authentication_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthorizationEntity

```lua
local authorization = client:Authorization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | The total amount that was authorized or rejected. |
| `amount_details` | `any` | No | Detailed breakdown of amount components. |
| `approved` | `boolean` | Yes | Whether the authorization has been approved. |
| `authorization_method` | `string` | Yes | How the card details were provided. |
| `balance_transactions` | `table` | Yes | List of balance transactions associated with this authorization. |
| `card` | `table` | Yes | You can [create physical or virtual cards](https://docs.stripe.com/issuing) that are issued to cardholders. |
| `card_presence` | `string` | No | Whether the card was present at the point of sale for the authorization. |
| `cardholder` | `any` | No | The cardholder to whom this authorization belongs. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | The currency of the cardholder. |
| `fleet` | `any` | No | Fleet-specific information for authorizations using Fleet cards. |
| `fraud_challenges` | `table` | No | Fraud challenges sent to the cardholder, if this authorization was declined for fraud risk reasons. |
| `fuel` | `any` | No | Information about fuel that was purchased with this transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `number` | Yes | The total amount that was authorized or rejected. |
| `merchant_currency` | `string` | Yes | The local currency that was presented to the cardholder for the authorization. |
| `merchant_data` | `table` | Yes |  |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `any` | No | Details about the authorization, such as identifiers, set by the card network. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending_request` | `any` | No | The pending authorization request. |
| `request_history` | `table` | Yes | History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. |
| `status` | `string` | Yes | The current status of the authorization in its lifecycle. |
| `token` | `string` | No | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this authorization. |
| `transactions` | `table` | Yes | List of [transactions](https://docs.stripe.com/api/issuing/transactions) associated with this authorization. |
| `treasury` | `any` | No | [Treasury](https://docs.stripe.com/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts). |
| `verification_data` | `table` | Yes |  |
| `verified_by_fraud_challenge` | `boolean` | No | Whether the authorization bypassed fraud risk checks because the cardholder has previously completed a fraud challenge on a similar high-risk authorization from the same merchant. |
| `wallet` | `string` | No | The digital wallet used for this transaction. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Authorization():create({
  id = --[[ string ]],
  amount = --[[ number ]],
  approved = --[[ boolean ]],
  authorization_method = --[[ string ]],
  balance_transactions = --[[ table ]],
  card = --[[ table ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  livemode = --[[ boolean ]],
  merchant_amount = --[[ number ]],
  merchant_currency = --[[ string ]],
  merchant_data = --[[ table ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  request_history = --[[ table ]],
  status = --[[ string ]],
  transactions = --[[ table ]],
  verification_data = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Authorization():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Authorization():load({ id = "authorization_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthorizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BalanceEntity

```lua
local balance = client:Balance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `table` | Yes | Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://docs.stripe.com/api#transfers) or [Payouts API](https://docs.stripe.com/api#payouts). |
| `connect_reserved` | `table` | No | Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. |
| `instant_available` | `table` | No | Funds that you can pay out using Instant Payouts. |
| `issuing` | `table` | Yes |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending` | `table` | Yes | Funds that aren't available in the balance yet. |
| `refund_and_dispute_prefunding` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Balance():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BalanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BalanceSettingEntity

```lua
local balance_setting = client:BalanceSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `debit_negative_balances` | `boolean` | No | A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. |
| `payouts` | `any` | No | Settings specific to the account's payouts. |
| `settlement_timing` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BalanceSetting():create({
  settlement_timing = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BalanceSetting():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BalanceSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BalanceTransactionEntity

```lua
local balance_transaction = client:BalanceTransaction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Gross amount of this transaction (in cents (or local equivalent)). |
| `available_on` | `number` | Yes | The date that the transaction's net funds become available in the Stripe balance. |
| `balance_type` | `string` | Yes | The balance that this transaction impacts. |
| `checkout_session` | `any` | No | The ID of the checkout session (if any) that created the transaction. |
| `created` | `number` | Yes | Time at which the object was created. |
| `credit_note` | `any` | No | The ID of the credit note (if any) related to the transaction. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | The ID of the customer the transaction belongs to. |
| `customer_account` | `string` | No | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `ending_balance` | `number` | Yes | The customer's `balance` after the transaction was applied. |
| `exchange_rate` | `number` | No | If applicable, this transaction uses an exchange rate. |
| `fee` | `number` | Yes | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | `table` | Yes | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | No | The ID of the invoice (if any) related to the transaction. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net` | `number` | Yes | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `string` | Yes | String representing the object's type. |
| `reporting_category` | `string` | Yes | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `any` | No | This transaction relates to the Stripe object. |
| `status` | `string` | Yes | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `string` | Yes | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BalanceTransaction():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BalanceTransaction():load({ id = "balance_transaction_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BalanceTransactionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BankAccountEntity

```lua
local bank_account = client:BankAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `any` | No | The account this bank account belongs to. |
| `account_holder_name` | `string` | No | The name of the person or business that owns the bank account. |
| `account_holder_type` | `string` | No | The type of entity that holds the account. |
| `account_type` | `string` | No | The bank account type. |
| `available_payout_methods` | `table` | No | A set of available payout methods for this bank account. |
| `bank_name` | `string` | No | Name of the bank associated with the routing number (e.g., `WELLS FARGO`). |
| `country` | `string` | Yes | Two-letter ISO code representing the country the bank account is located in. |
| `currency` | `string` | Yes | Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. |
| `customer` | `any` | No | The ID of the customer that the bank account is associated with. |
| `default_for_currency` | `boolean` | No | Whether this bank account is the default external account for its currency. |
| `fingerprint` | `string` | No | Uniquely identifies this particular bank account. |
| `future_requirements` | `any` | No | Information about the [upcoming new requirements for the bank account](https://docs.stripe.com/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last4` | `string` | Yes | The last four digits of the bank account number. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `requirements` | `any` | No | Information about the requirements for the bank account, including what information needs to be collected. |
| `routing_number` | `string` | No | The routing transit number for the bank account. |
| `status` | `string` | Yes | For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, `tokenized_account_number_deactivated` or `errored`. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BankAccount():create({
  customer_id = --[[ string ]],
  country = --[[ string ]],
  currency = --[[ string ]],
  last4 = --[[ string ]],
  object = --[[ string ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BankAccount():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BankAccount():load({ id = "bank_account_id", customer_id = "customer_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:BankAccount():remove({ id = "bank_account_id", customer_id = "customer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BankAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CalculationEntity

```lua
local calculation = client:Calculation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_total` | `number` | Yes | Total amount after taxes in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | No | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `table` | Yes |  |
| `expires_at` | `number` | No | Timestamp of date at which the tax calculation will expire. |
| `id` | `string` | No | Unique identifier for the calculation. |
| `line_items` | `table` | Yes | The list of items the customer is purchasing. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `ship_from_details` | `any` | No | The details of the ship from location, such as the address. |
| `shipping_cost` | `any` | No | The shipping cost details for the calculation. |
| `tax_amount_exclusive` | `number` | Yes | The amount of tax to be collected on top of the line item prices. |
| `tax_amount_inclusive` | `number` | Yes | The amount of tax already included in the line item prices. |
| `tax_breakdown` | `table` | Yes | Breakdown of individual tax amounts that add up to the total. |
| `tax_date` | `number` | Yes | The calculation uses the tax rules and rates that are in effect at this timestamp. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Calculation():create({
  amount_total = --[[ number ]],
  currency = --[[ string ]],
  customer_details = --[[ table ]],
  line_items = --[[ table ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  tax_amount_exclusive = --[[ number ]],
  tax_amount_inclusive = --[[ number ]],
  tax_breakdown = --[[ table ]],
  tax_date = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Calculation():load({ id = "calculation_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CalculationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CapabilityEntity

```lua
local capability = client:Capability(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `any` | Yes | The account for which the capability enables functionality. |
| `future_requirements` | `table` | Yes |  |
| `id` | `string` | Yes | The identifier for the capability. |
| `object` | `string` | Yes | String representing the object's type. |
| `requested` | `boolean` | Yes | Whether the capability has been requested. |
| `requested_at` | `number` | No | Time at which the capability was requested. |
| `requirements` | `table` | Yes |  |
| `status` | `string` | Yes | The status of the capability. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Capability():create({
  account_id = --[[ string ]],
  id = --[[ string ]],
  account = --[[ any ]],
  future_requirements = --[[ table ]],
  object = --[[ string ]],
  requested = --[[ boolean ]],
  requirements = --[[ table ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Capability():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Capability():load({ id = "capability_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CapabilityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CardEntity

```lua
local card = client:Card(nil)
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
| `allow_redisplay` | `boolean` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `available_payout_methods` | `table` | No | A set of available payout methods for this card. |
| `brand` | `string` | Yes | Card brand. |
| `cancellation_reason` | `string` | No | The reason why the card was canceled. |
| `cardholder` | `table` | Yes | An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://docs.stripe.com/issuing) cards. |
| `country` | `string` | No | Two-letter ISO code representing the country of the card. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. |
| `customer` | `any` | No | The customer that this card belongs to. |
| `cvc` | `string` | No | The card's CVC. |
| `cvc_check` | `string` | No | If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `default_for_currency` | `boolean` | No | Whether this card is the default external account for its currency. |
| `dynamic_last4` | `string` | No | (For tokenized numbers only.) The last four digits of the device account number. |
| `exp_month` | `number` | Yes | Two-digit number representing the card's expiration month. |
| `exp_year` | `number` | Yes | Four-digit number representing the card's expiration year. |
| `financial_account` | `string` | No | The financial account this card is attached to. |
| `fingerprint` | `string` | No | Uniquely identifies this particular card number. |
| `funding` | `string` | Yes | Card funding type. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last4` | `string` | Yes | The last four digits of the card. |
| `latest_fraud_warning` | `any` | No | Stripe’s assessment of whether this card’s details have been compromised. |
| `lifecycle_controls` | `any` | No | Rules that control the lifecycle of this card, such as automatic cancellation. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | Cardholder name. |
| `networks` | `table` | No |  |
| `number` | `string` | No | The full unredacted card number. |
| `object` | `string` | Yes | String representing the object's type. |
| `personalization_design` | `any` | No | The personalization design object belonging to this card. |
| `regulated_status` | `string` | No | Status of a card based on the card issuer. |
| `replaced_by` | `any` | No | The latest card that replaces this card, if any. |
| `replacement_for` | `any` | No | The card this card replaces, if any. |
| `replacement_reason` | `string` | No | The reason why the previous card needed to be replaced. |
| `second_line` | `string` | No | Text separate from cardholder name, printed on the card. |
| `shipping` | `any` | No | Where and how the card will be shipped. |
| `spending_controls` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Card():create({
  id = --[[ string ]],
  brand = --[[ string ]],
  cardholder = --[[ table ]],
  created = --[[ number ]],
  exp_month = --[[ number ]],
  exp_year = --[[ number ]],
  funding = --[[ string ]],
  last4 = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  spending_controls = --[[ table ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Card():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Card():load({ id = "card_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Card():remove({ id = "card_id", customer_id = "customer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CardholderEntity

```lua
local cardholder = client:Cardholder(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `table` | Yes |  |
| `company` | `any` | No | Additional information about a `company` cardholder. |
| `created` | `number` | Yes | Time at which the object was created. |
| `email` | `string` | No | The cardholder's email address. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `individual` | `any` | No | Additional information about an `individual` cardholder. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Yes | The cardholder's name. |
| `object` | `string` | Yes | String representing the object's type. |
| `phone_number` | `string` | No | The cardholder's phone number. |
| `preferred_locales` | `table` | No | The cardholder’s preferred locales (languages), ordered by preference. |
| `requirements` | `table` | Yes |  |
| `spending_controls` | `any` | No | Rules that control spending across this cardholder's cards. |
| `status` | `string` | Yes | Specifies whether to permit authorizations on this cardholder's cards. |
| `type` | `string` | Yes | One of `individual` or `company`. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Cardholder():create({
  id = --[[ string ]],
  billing = --[[ table ]],
  created = --[[ number ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  name = --[[ string ]],
  object = --[[ string ]],
  requirements = --[[ table ]],
  status = --[[ string ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Cardholder():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Cardholder():load({ id = "cardholder_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardholderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CashBalanceEntity

```lua
local cash_balance = client:CashBalance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `table` | No | A hash of all cash balances available to this customer. |
| `customer` | `string` | Yes | The ID of the customer whose cash balance this object represents. |
| `customer_account` | `string` | No | The ID of an Account representing a customer whose cash balance this object represents. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `settings` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CashBalance():create({
  customer_id = --[[ string ]],
  customer = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  settings = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CashBalance():load({ customer_id = "customer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CashBalanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CashBalanceTransactionEntity

```lua
local cash_balance_transaction = client:CashBalanceTransaction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjusted_for_overdraft` | `table` | Yes |  |
| `applied_to_payment` | `table` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `string` | No | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `number` | Yes | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `net_amount` | `number` | Yes | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `string` | Yes | String representing the object's type. |
| `refunded_from_payment` | `table` | Yes |  |
| `transferred_to_balance` | `table` | Yes |  |
| `type` | `string` | Yes | The type of the cash balance transaction. |
| `unapplied_from_payment` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CashBalanceTransaction():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CashBalanceTransaction():load({ id = "cash_balance_transaction_id", customer_id = "customer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CashBalanceTransactionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChargeEntity

```lua
local charge = client:Charge(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Amount intended to be collected by this payment. |
| `amount_captured` | `number` | Yes | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_refunded` | `number` | Yes | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `application` | `any` | No | ID of the Connect application that created the charge. |
| `application_fee` | `any` | No | The application fee (if any) for the charge. |
| `application_fee_amount` | `number` | No | The amount of the application fee (if any) requested for the charge. |
| `balance_transaction` | `any` | No | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_details` | `table` | Yes |  |
| `calculated_statement_descriptor` | `string` | No | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `captured` | `boolean` | Yes | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | No | ID of the customer this charge is for if one exists. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `disputed` | `boolean` | Yes | Whether the charge has been disputed. |
| `failure_balance_transaction` | `any` | No | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | `string` | No | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | `string` | No | Message to user further explaining reason for charge failure if available. |
| `fraud_details` | `any` | No | Information on fraud assessments for the charge. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | `any` | No | Details about whether the payment was accepted, and why. |
| `paid` | `boolean` | Yes | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `payment_intent` | `any` | No | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `string` | No | ID of the payment method used in this charge. |
| `payment_method_details` | `any` | No | Details about the payment method at the time of the transaction. |
| `presentment_details` | `table` | Yes |  |
| `radar_options` | `table` | No | Options to configure Radar. |
| `receipt_email` | `string` | No | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `string` | No | This is the URL to view the receipt for this charge. |
| `refunded` | `boolean` | Yes | Whether the charge has been fully refunded. |
| `refunds` | `table` | Yes | A list of refunds that have been applied to the charge. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Charge():create({
  id = --[[ string ]],
  amount = --[[ number ]],
  amount_captured = --[[ number ]],
  amount_refunded = --[[ number ]],
  billing_details = --[[ table ]],
  captured = --[[ boolean ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  disputed = --[[ boolean ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  paid = --[[ boolean ]],
  presentment_details = --[[ table ]],
  refunded = --[[ boolean ]],
  refunds = --[[ table ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Charge():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Charge():load({ id = "charge_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChargeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConfigurationEntity

```lua
local configuration = client:Configuration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the configuration is active and can be used to create portal sessions. |
| `application` | `any` | No | ID of the Connect Application that created the configuration. |
| `bbpos_wisepad3` | `table` | No |  |
| `bbpos_wisepos_e` | `table` | No |  |
| `business_profile` | `table` | Yes |  |
| `cellular` | `table` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `default_return_url` | `string` | No | The default URL to redirect customers to when they click on the portal's link to return to your website. |
| `features` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `is_account_default` | `boolean` | No | Whether this Configuration is the default for your account |
| `is_default` | `boolean` | Yes | Whether the configuration is the default. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `login_page` | `table` | Yes |  |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | The name of the configuration. |
| `object` | `string` | Yes | String representing the object's type. |
| `offline` | `table` | No |  |
| `reboot_window` | `table` | Yes |  |
| `stripe_s700` | `table` | No |  |
| `stripe_s710` | `table` | No |  |
| `tipping` | `table` | No |  |
| `updated` | `number` | Yes | Time at which the object was last updated. |
| `verifone_m425` | `table` | No |  |
| `verifone_p400` | `table` | No |  |
| `verifone_p630` | `table` | No |  |
| `verifone_ux700` | `table` | No |  |
| `verifone_v660p` | `table` | No |  |
| `wifi` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Configuration():create({
  id = --[[ string ]],
  active = --[[ boolean ]],
  business_profile = --[[ table ]],
  cellular = --[[ table ]],
  created = --[[ number ]],
  features = --[[ table ]],
  is_default = --[[ boolean ]],
  livemode = --[[ boolean ]],
  login_page = --[[ table ]],
  object = --[[ string ]],
  reboot_window = --[[ table ]],
  updated = --[[ number ]],
  wifi = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Configuration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Configuration():load({ id = "configuration_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Configuration():remove({ id = "configuration_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConfigurationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConfirmationTokenEntity

```lua
local confirmation_token = client:ConfirmationToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `expires_at` | `number` | No | Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `mandate_data` | `any` | No | Data used for generating a Mandate. |
| `metadata` | `table` | No | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `string` | No | ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for this ConfirmationToken. |
| `payment_method_preview` | `any` | No | Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken. |
| `return_url` | `string` | No | Return URL used to confirm the Intent. |
| `setup_future_usage` | `string` | No | Indicates that you intend to make future payments with this ConfirmationToken's payment method. |
| `setup_intent` | `string` | No | ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `shipping` | `any` | No | Shipping information collected on this ConfirmationToken. |
| `use_stripe_sdk` | `boolean` | Yes | Indicates whether the Stripe SDK is used to handle confirmation flow. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ConfirmationToken():create({
  created = --[[ number ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  use_stripe_sdk = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConfirmationToken():load({ id = "confirmation_token_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConfirmationTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConnectionTokenEntity

```lua
local connection_token = client:ConnectionToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `string` | No | The id of the location that this connection token is scoped to. |
| `object` | `string` | Yes | String representing the object's type. |
| `secret` | `string` | Yes | Your application should pass this token to the Stripe Terminal SDK. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ConnectionToken():create({
  object = --[[ string ]],
  secret = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CountrySpecEntity

```lua
local country_spec = client:CountrySpec(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_currency` | `string` | Yes | The default currency for this country. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `object` | `string` | Yes | String representing the object's type. |
| `supported_bank_account_currencies` | `table` | Yes | Currencies that can be accepted in the specific country (for transfers). |
| `supported_payment_currencies` | `table` | Yes | Currencies that can be accepted in the specified country (for payments). |
| `supported_payment_methods` | `table` | Yes | Payment methods available in the specified country. |
| `supported_transfer_countries` | `table` | Yes | Countries that can accept transfers from the specified country. |
| `verification_fields` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CountrySpec():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CountrySpec():load({ id = "country_spec_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountrySpecEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CouponEntity

```lua
local coupon = client:Coupon(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_off` | `number` | No | Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer. |
| `applies_to` | `table` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | No | If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off. |
| `currency_options` | `table` | No | Coupons defined in each available currency option. |
| `duration` | `string` | Yes | One of `forever`, `once`, or `repeating`. |
| `duration_in_months` | `number` | No | If `duration` is `repeating`, the number of months the coupon applies. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | `number` | No | Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | Name of the coupon displayed to customers on for instance invoices or receipts. |
| `object` | `string` | Yes | String representing the object's type. |
| `percent_off` | `number` | No | Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. |
| `redeem_by` | `number` | No | Date after which the coupon can no longer be redeemed. |
| `times_redeemed` | `number` | Yes | Number of times this coupon has been applied to a customer. |
| `valid` | `boolean` | Yes | Taking account of the above properties, whether this coupon can still be applied to a customer. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Coupon():create({
  id = --[[ string ]],
  applies_to = --[[ table ]],
  created = --[[ number ]],
  duration = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  times_redeemed = --[[ number ]],
  valid = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Coupon():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Coupon():load({ id = "coupon_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CouponEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreditBalanceSummaryEntity

```lua
local credit_balance_summary = client:CreditBalanceSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_balance` | `table` | Yes |  |
| `ledger_balance` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CreditBalanceSummary():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditBalanceSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreditBalanceTransactionEntity

```lua
local credit_balance_transaction = client:CreditBalanceTransaction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `credit` | `any` | No | Credit details for this credit balance transaction. |
| `credit_grant` | `any` | Yes | The credit grant associated with this credit balance transaction. |
| `debit` | `any` | No | Debit details for this credit balance transaction. |
| `effective_at` | `number` | Yes | The effective time of this credit balance transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `test_clock` | `any` | No | ID of the test clock this credit balance transaction belongs to. |
| `type` | `string` | No | The type of credit balance transaction (credit or debit). |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CreditBalanceTransaction():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CreditBalanceTransaction():load({ id = "credit_balance_transaction_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditBalanceTransactionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreditGrantEntity

```lua
local credit_grant = client:CreditGrant(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `table` | Yes |  |
| `applicability_config` | `table` | Yes |  |
| `category` | `string` | Yes | The category of this credit grant. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer` | `any` | Yes | ID of the customer receiving the billing credits. |
| `customer_account` | `string` | No | ID of the account representing the customer receiving the billing credits |
| `effective_at` | `number` | No | The time when the billing credits become effective-when they're eligible for use. |
| `expires_at` | `number` | No | The time when the billing credits expire. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | A descriptive name shown in dashboard. |
| `object` | `string` | Yes | String representing the object's type. |
| `priority` | `number` | No | The priority for applying this credit grant. |
| `test_clock` | `any` | No | ID of the test clock this credit grant belongs to. |
| `updated` | `number` | Yes | Time at which the object was last updated. |
| `voided_at` | `number` | No | The time when this credit grant was voided. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreditGrant():create({
  id = --[[ string ]],
  amount = --[[ table ]],
  applicability_config = --[[ table ]],
  category = --[[ string ]],
  created = --[[ number ]],
  customer = --[[ any ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  updated = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CreditGrant():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CreditGrant():load({ id = "credit_grant_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditGrantEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreditNoteEntity

```lua
local credit_note = client:CreditNote(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax. |
| `amount_shipping` | `number` | Yes | This is the sum of all the shipping amounts. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | ID of the customer. |
| `customer_account` | `string` | No | ID of the account representing the customer. |
| `customer_balance_transaction` | `any` | No | Customer balance transaction related to this credit note. |
| `discount_amount` | `number` | Yes | The integer amount in cents (or local equivalent) representing the total amount of discount that was credited. |
| `discount_amounts` | `table` | Yes | The aggregate amounts calculated per discount for all line items. |
| `effective_at` | `number` | No | The date when this credit note is in effect. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | Yes | ID of the invoice. |
| `lines` | `table` | Yes | Line items that make up the credit note |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `memo` | `string` | No | Customer-facing text that appears on the credit note PDF. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `string` | Yes | A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice. |
| `object` | `string` | Yes | String representing the object's type. |
| `out_of_band_amount` | `number` | No | Amount that was credited outside of Stripe. |
| `pdf` | `string` | Yes | The link to download the PDF of the credit note. |
| `post_payment_amount` | `number` | Yes | The amount of the credit note that was refunded to the customer, credited to the customer's balance, credited outside of Stripe, or any combination thereof. |
| `pre_payment_amount` | `number` | Yes | The amount of the credit note by which the invoice's `amount_remaining` and `amount_due` were reduced. |
| `pretax_credit_amounts` | `table` | Yes | The pretax credit amounts (ex: discount, credit grants, etc) for all line items. |
| `reason` | `string` | No | Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory` |
| `refunds` | `table` | Yes | Refunds related to this credit note. |
| `shipping_cost` | `any` | No | The details of the cost of shipping, including the ShippingRate applied to the invoice. |
| `status` | `string` | Yes | Status of this credit note, one of `issued` or `void`. |
| `subtotal` | `number` | Yes | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts. |
| `subtotal_excluding_tax` | `number` | No | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts. |
| `total` | `number` | Yes | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount. |
| `total_excluding_tax` | `number` | No | The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts. |
| `total_taxes` | `table` | No | The aggregate tax information for all line items. |
| `type` | `string` | Yes | Type of this credit note, one of `pre_payment` or `post_payment`. |
| `voided_at` | `number` | No | The time that the credit note was voided. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreditNote():create({
  id = --[[ string ]],
  amount = --[[ number ]],
  amount_shipping = --[[ number ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  customer = --[[ any ]],
  discount_amount = --[[ number ]],
  discount_amounts = --[[ table ]],
  invoice = --[[ any ]],
  lines = --[[ table ]],
  livemode = --[[ boolean ]],
  number = --[[ string ]],
  object = --[[ string ]],
  pdf = --[[ string ]],
  post_payment_amount = --[[ number ]],
  pre_payment_amount = --[[ number ]],
  pretax_credit_amounts = --[[ table ]],
  refunds = --[[ table ]],
  status = --[[ string ]],
  subtotal = --[[ number ]],
  total = --[[ number ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CreditNote():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CreditNote():load({ id = "credit_note_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditNoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreditNoteLineEntity

```lua
local credit_note_line = client:CreditNoteLine(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts. |
| `description` | `string` | No | Description of the item being credited. |
| `discount_amount` | `number` | Yes | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `table` | Yes | The amount of discount calculated per discount for this line item |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice_line_item` | `string` | No | ID of the invoice line item being credited |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `pretax_credit_amounts` | `table` | Yes | The pretax credit amounts (ex: discount, credit grants, etc) for this line item. |
| `quantity` | `number` | No | The number of units of product being credited. |
| `tax_rates` | `table` | Yes | The tax rates which apply to the line item. |
| `taxes` | `table` | No | The tax information of the line item. |
| `type` | `string` | Yes | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | `number` | No | The cost of each unit of product being credited. |
| `unit_amount_decimal` | `string` | No | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CreditNoteLine():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditNoteLineEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreditReversalEntity

```lua
local credit_reversal = client:CreditReversal(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Amount (in cents) transferred. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `financial_account` | `string` | Yes | The FinancialAccount to reverse funds from. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `string` | Yes | The rails used to reverse the funds. |
| `object` | `string` | Yes | String representing the object's type. |
| `received_credit` | `string` | Yes | The ReceivedCredit being reversed. |
| `status` | `string` | Yes | Status of the CreditReversal |
| `status_transitions` | `table` | Yes |  |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreditReversal():create({
  amount = --[[ number ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  financial_account = --[[ string ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  network = --[[ string ]],
  object = --[[ string ]],
  received_credit = --[[ string ]],
  status = --[[ string ]],
  status_transitions = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CreditReversal():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CreditReversal():load({ id = "credit_reversal_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditReversalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerEntity

```lua
local customer = client:Customer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `any` | No | The customer's billing address. |
| `balance` | `number` | No | The current balance, if any, that's stored on the customer in their default currency. |
| `business_name` | `string` | No | The customer's business name. |
| `cash_balance` | `any` | No | The current funds being held by Stripe on behalf of the customer. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes. |
| `customer_account` | `string` | No | The ID of an Account representing a customer. |
| `default_source` | `any` | No | ID of the default payment source for the customer. |
| `delinquent` | `boolean` | No | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discount` | `any` | No | Describes the current discount active on the customer, if there is one. |
| `email` | `string` | No | The customer's email address. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `individual_name` | `string` | No | The customer's individual name. |
| `invoice_credit_balance` | `table` | No | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_prefix` | `string` | No | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `table` | No |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | The customer's full name or business name. |
| `next_invoice_sequence` | `number` | No | The suffix of the customer's next invoice number (for example, 0001). |
| `object` | `string` | Yes | String representing the object's type. |
| `phone` | `string` | No | The customer's phone number. |
| `preferred_locales` | `table` | No | The customer's preferred locales (languages), ordered by preference. |
| `shipping` | `any` | No | Mailing and shipping address for the customer. |
| `sources` | `table` | Yes | The customer's payment sources, if any. |
| `subscriptions` | `table` | Yes | The customer's current subscriptions, if any. |
| `tax` | `table` | Yes |  |
| `tax_exempt` | `string` | No | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `table` | Yes | The customer's tax IDs. |
| `test_clock` | `any` | No | ID of the test clock that this customer belongs to. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Customer():create({
  id = --[[ string ]],
  created = --[[ number ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  sources = --[[ table ]],
  subscriptions = --[[ table ]],
  tax = --[[ table ]],
  tax_ids = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Customer():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Customer():load({ id = "customer_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Customer():remove({ id = "customer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerBalanceTransactionEntity

```lua
local customer_balance_transaction = client:CustomerBalanceTransaction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | The amount of the transaction. |
| `checkout_session` | `any` | No | The ID of the checkout session (if any) that created the transaction. |
| `created` | `number` | Yes | Time at which the object was created. |
| `credit_note` | `any` | No | The ID of the credit note (if any) related to the transaction. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | The ID of the customer the transaction belongs to. |
| `customer_account` | `string` | No | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `ending_balance` | `number` | Yes | The customer's `balance` after the transaction was applied. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | No | The ID of the invoice (if any) related to the transaction. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `type` | `string` | Yes | Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or… |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomerBalanceTransaction():create({
  id = --[[ string ]],
  amount = --[[ number ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  customer = --[[ any ]],
  ending_balance = --[[ number ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  type = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomerBalanceTransaction():load({ id = "customer_balance_transaction_id", customer_id = "customer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerBalanceTransactionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerSessionEntity

```lua
local customer_session = client:CustomerSession(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_secret` | `string` | Yes | The client secret of this Customer Session. |
| `components` | `table` | Yes | Configuration for the components supported by this Customer Session. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer` | `any` | Yes | The Customer the Customer Session was created for. |
| `customer_account` | `string` | No | The Account that the Customer Session was created for. |
| `expires_at` | `number` | Yes | The timestamp at which this Customer Session will expire. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomerSession():create({
  client_secret = --[[ string ]],
  components = --[[ table ]],
  created = --[[ number ]],
  customer = --[[ any ]],
  expires_at = --[[ number ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerSessionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DebitReversalEntity

```lua
local debit_reversal = client:DebitReversal(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Amount (in cents) transferred. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `financial_account` | `string` | No | The FinancialAccount to reverse funds from. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `linked_flows` | `any` | No | Other flows linked to a DebitReversal. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `string` | Yes | The rails used to reverse the funds. |
| `object` | `string` | Yes | String representing the object's type. |
| `received_debit` | `string` | Yes | The ReceivedDebit being reversed. |
| `status` | `string` | Yes | Status of the DebitReversal |
| `status_transitions` | `table` | Yes |  |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DebitReversal():create({
  amount = --[[ number ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  network = --[[ string ]],
  object = --[[ string ]],
  received_debit = --[[ string ]],
  status = --[[ string ]],
  status_transitions = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DebitReversal():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DebitReversal():load({ id = "debit_reversal_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DebitReversalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedAccountEntity

```lua
local deleted_account = client:DeletedAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedAccount():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedApplePayDomainEntity

```lua
local deleted_apple_pay_domain = client:DeletedApplePayDomain(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedApplePayDomain():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedApplePayDomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedCouponEntity

```lua
local deleted_coupon = client:DeletedCoupon(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedCoupon():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedCouponEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedExternalAccountEntity

```lua
local deleted_external_account = client:DeletedExternalAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedExternalAccount():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedExternalAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedInvoiceitemEntity

```lua
local deleted_invoiceitem = client:DeletedInvoiceitem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedInvoiceitem():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedInvoiceitemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedPersonEntity

```lua
local deleted_person = client:DeletedPerson(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedPerson():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedPersonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedPlanEntity

```lua
local deleted_plan = client:DeletedPlan(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedPlan():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedPlanEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedProductFeatureEntity

```lua
local deleted_product_feature = client:DeletedProductFeature(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedProductFeature():remove({ id = "id", product_id = "product_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedProductFeatureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedSubscriptionItemEntity

```lua
local deleted_subscription_item = client:DeletedSubscriptionItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedSubscriptionItem():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedSubscriptionItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedWebhookEndpointEntity

```lua
local deleted_webhook_endpoint = client:DeletedWebhookEndpoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedWebhookEndpoint():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedWebhookEndpointEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DiscountEntity

```lua
local discount = client:Discount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checkout_session` | `string` | No | The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. |
| `customer` | `any` | No | The ID of the customer associated with this discount. |
| `customer_account` | `string` | No | The ID of the account representing the customer associated with this discount. |
| `end` | `number` | No | If the coupon has a duration of `repeating`, the date that this discount will end. |
| `id` | `string` | Yes | The ID of the discount object. |
| `invoice` | `string` | No | The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice. |
| `invoice_item` | `string` | No | The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item. |
| `object` | `string` | Yes | String representing the object's type. |
| `promotion_code` | `any` | No | The promotion code applied to create this discount. |
| `source` | `table` | Yes |  |
| `start` | `number` | Yes | Date that the coupon was applied. |
| `subscription` | `string` | No | The subscription that this coupon is applied to, if it is applied to a particular subscription. |
| `subscription_item` | `string` | No | The subscription item that this coupon is applied to, if it is applied to a particular subscription item. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Discount():load({ customer_id = "customer_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Discount():remove({ customer_id = "customer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DiscountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DisputeEntity

```lua
local dispute = client:Dispute(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Disputed amount. |
| `balance_transactions` | `table` | Yes | List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute. |
| `charge` | `any` | Yes | ID of the charge that's disputed. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `enhanced_eligibility_types` | `table` | Yes | List of eligibility types that are included in `enhanced_evidence`. |
| `evidence` | `table` | Yes |  |
| `evidence_details` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `is_charge_refundable` | `boolean` | Yes | If true, it's still possible to refund the disputed payment. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `loss_reason` | `string` | No | The enum that describes the dispute loss outcome. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `any` | No | ID of the PaymentIntent that's disputed. |
| `payment_method_details` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Dispute():create({
  id = --[[ string ]],
  amount = --[[ number ]],
  balance_transactions = --[[ table ]],
  charge = --[[ any ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  enhanced_eligibility_types = --[[ table ]],
  evidence = --[[ table ]],
  evidence_details = --[[ table ]],
  is_charge_refundable = --[[ boolean ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  payment_method_details = --[[ table ]],
  reason = --[[ string ]],
  status = --[[ string ]],
  transaction = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Dispute():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Dispute():load({ id = "dispute_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DisputeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DomainEntity

```lua
local domain = client:Domain(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `domain_name` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Domain():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EarlyFraudWarningEntity

```lua
local early_fraud_warning = client:EarlyFraudWarning(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionable` | `boolean` | Yes | An EFW is actionable if it has not received a dispute and has not been fully refunded. |
| `charge` | `any` | Yes | ID of the charge this early fraud warning is for, optionally expanded. |
| `created` | `number` | Yes | Time at which the object was created. |
| `fraud_type` | `string` | Yes | The type of fraud labelled by the issuer. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `any` | No | ID of the Payment Intent this early fraud warning is for, optionally expanded. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EarlyFraudWarning():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EarlyFraudWarning():load({ id = "early_fraud_warning_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EarlyFraudWarningEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EphemeralKeyEntity

```lua
local ephemeral_key = client:EphemeralKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `expires` | `number` | Yes | Time at which the key will expire. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `secret` | `string` | No | The key's secret. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EphemeralKey():create({
  created = --[[ number ]],
  expires = --[[ number ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:EphemeralKey():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EphemeralKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EventEntity

```lua
local event = client:Event(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | The connected account that originates the event. |
| `api_version` | `string` | No | The Stripe API version used to render `data` when the event was created. |
| `context` | `string` | No | Authentication context needed to fetch the event or related object. |
| `created` | `number` | Yes | Time at which the object was created. |
| `data` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending_webhooks` | `number` | Yes | Number of webhooks that haven't been successfully delivered (for example, to return a 20x response) to the URLs you specify. |
| `request` | `any` | No | Information on the API request that triggers the event. |
| `type` | `string` | Yes | Description of the event (for example, `invoice.created` or `charge.refunded`). |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Event():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Event():load({ id = "event_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ExchangeRateEntity

```lua
local exchange_rate = client:ExchangeRate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the object. |
| `object` | `string` | Yes | String representing the object's type. |
| `rates` | `table` | Yes | Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ExchangeRate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ExchangeRate():load({ id = "exchange_rate_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExchangeRateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ExternalAccountEntity

```lua
local external_account = client:ExternalAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | Yes | The list contains all external accounts that have been attached to the Stripe account. |
| `has_more` | `boolean` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | Yes | The URL where this list can be accessed. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ExternalAccount():create({
  id = --[[ string ]],
  data = --[[ table ]],
  has_more = --[[ boolean ]],
  object = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ExternalAccount():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ExternalAccount():load({ id = "external_account_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExternalAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FeatureEntity

```lua
local feature = client:Feature(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `entitlement_feature` | `table` | Yes | A feature represents a monetizable ability or functionality in your system. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | Yes | A unique key you provide as your own system identifier. |
| `metadata` | `table` | Yes | Set of key-value pairs that you can attach to an object. |
| `name` | `string` | Yes | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Feature():create({
  id = --[[ string ]],
  active = --[[ boolean ]],
  entitlement_feature = --[[ table ]],
  livemode = --[[ boolean ]],
  lookup_key = --[[ string ]],
  metadata = --[[ table ]],
  name = --[[ string ]],
  object = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Feature():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Feature():load({ id = "feature_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FeedbackOptionEntity

```lua
local feedback_option = client:FeedbackOption(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deactivated_at` | `number` | No | The time the feedback option was deactivated, if any. |
| `description` | `string` | Yes | An arbitrary string attached to the object. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The feedback option's status. |
| `status_transitions` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FeedbackOption():create({
  id = --[[ string ]],
  description = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  status = --[[ string ]],
  status_transitions = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:FeedbackOption():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FeedbackOption():load({ id = "feedback_option_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeedbackOptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FileEntity

```lua
local file = client:File(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `data` | `table` | Yes | Details about each object. |
| `expires_at` | `number` | No | The file expires and isn't available at this time in epoch seconds. |
| `filename` | `string` | No | The suitable name for saving the file to a filesystem. |
| `has_more` | `boolean` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `links` | `table` | Yes | A list of [file links](https://docs.stripe.com/api#file_links) that point at this file. |
| `object` | `string` | Yes | String representing the object's type. |
| `purpose` | `string` | Yes | The [purpose](https://docs.stripe.com/file-upload#uploading-a-file) of the uploaded file. |
| `size` | `number` | Yes | The size of the file object in bytes. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:File():create({
  created = --[[ number ]],
  data = --[[ table ]],
  has_more = --[[ boolean ]],
  id = --[[ string ]],
  links = --[[ table ]],
  object = --[[ string ]],
  purpose = --[[ string ]],
  size = --[[ number ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:File():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:File():load({ id = "file_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FileLinkEntity

```lua
local file_link = client:FileLink(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `expired` | `boolean` | Yes | Returns if the link is already expired. |
| `expires_at` | `number` | No | Time that the link expires. |
| `file` | `any` | Yes | The file object this link points to. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | No | The publicly accessible URL to download the file. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FileLink():create({
  id = --[[ string ]],
  created = --[[ number ]],
  expired = --[[ boolean ]],
  file = --[[ any ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:FileLink():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FileLink():load({ id = "file_link_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileLinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FinancialAccountEntity

```lua
local financial_account = client:FinancialAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_features` | `table` | No | The array of paths to active Features in the Features hash. |
| `balance` | `table` | Yes | Balance information for the FinancialAccount |
| `country` | `string` | Yes | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | `number` | Yes | Time at which the object was created. |
| `features` | `table` | Yes | Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`. |
| `financial_addresses` | `table` | Yes | The set of credentials that resolve to a FinancialAccount. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `is_default` | `boolean` | No |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | No | The nickname for the FinancialAccount. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending_features` | `table` | No | The array of paths to pending Features in the Features hash. |
| `platform_restrictions` | `any` | No | The set of functionalities that the platform can restrict on the FinancialAccount. |
| `restricted_features` | `table` | No | The array of paths to restricted Features in the Features hash. |
| `status` | `string` | Yes | Status of this FinancialAccount. |
| `status_details` | `table` | Yes |  |
| `supported_currencies` | `table` | Yes | The currencies the FinancialAccount can hold a balance in. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FinancialAccount():create({
  id = --[[ string ]],
  balance = --[[ table ]],
  country = --[[ string ]],
  created = --[[ number ]],
  features = --[[ table ]],
  financial_addresses = --[[ table ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  status = --[[ string ]],
  status_details = --[[ table ]],
  supported_currencies = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:FinancialAccount():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FinancialAccount():load({ id = "financial_account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FinancialAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FinancialAccountFeatureEntity

```lua
local financial_account_feature = client:FinancialAccountFeature(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_issuing` | `table` | Yes | Toggle settings for enabling/disabling a feature |
| `deposit_insurance` | `table` | Yes | Toggle settings for enabling/disabling a feature |
| `financial_addresses` | `table` | No | Settings related to Financial Addresses features on a Financial Account |
| `id` | `string` | No |  |
| `inbound_transfers` | `table` | No | InboundTransfers contains inbound transfers features for a FinancialAccount. |
| `intra_stripe_flows` | `table` | Yes | Toggle settings for enabling/disabling a feature |
| `object` | `string` | Yes | String representing the object's type. |
| `outbound_payments` | `table` | No | Settings related to Outbound Payments features on a Financial Account |
| `outbound_transfers` | `table` | No | OutboundTransfers contains outbound transfers features for a FinancialAccount. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FinancialAccountFeature():create({
  id = --[[ string ]],
  card_issuing = --[[ table ]],
  deposit_insurance = --[[ table ]],
  intra_stripe_flows = --[[ table ]],
  object = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FinancialAccountFeature():load({ id = "financial_account_feature_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FinancialAccountFeatureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FundCashBalanceEntity

```lua
local fund_cash_balance = client:FundCashBalance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjusted_for_overdraft` | `table` | Yes |  |
| `applied_to_payment` | `table` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `string` | No | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `number` | Yes | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `net_amount` | `number` | Yes | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `string` | Yes | String representing the object's type. |
| `refunded_from_payment` | `table` | Yes |  |
| `transferred_to_balance` | `table` | Yes |  |
| `type` | `string` | Yes | The type of the cash balance transaction. |
| `unapplied_from_payment` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FundCashBalance():create({
  customer_id = --[[ string ]],
  adjusted_for_overdraft = --[[ table ]],
  applied_to_payment = --[[ table ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  customer = --[[ any ]],
  ending_balance = --[[ number ]],
  funded = --[[ table ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  net_amount = --[[ number ]],
  object = --[[ string ]],
  refunded_from_payment = --[[ table ]],
  transferred_to_balance = --[[ table ]],
  type = --[[ string ]],
  unapplied_from_payment = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FundCashBalanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FundingInstructionEntity

```lua
local funding_instruction = client:FundingInstruction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `string` | Yes | The country of the bank account to fund |
| `financial_addresses` | `table` | Yes | A list of financial addresses that can be used to fund a particular balance |
| `type` | `string` | Yes | The bank_transfer type |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FundingInstruction():create({
  customer_id = --[[ string ]],
  country = --[[ string ]],
  financial_addresses = --[[ table ]],
  type = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FundingInstructionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HistoryEntity

```lua
local history = client:History(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Gross amount of this transaction (in cents (or local equivalent)). |
| `available_on` | `number` | Yes | The date that the transaction's net funds become available in the Stripe balance. |
| `balance_type` | `string` | Yes | The balance that this transaction impacts. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `exchange_rate` | `number` | No | If applicable, this transaction uses an exchange rate. |
| `fee` | `number` | Yes | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | `table` | Yes | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `net` | `number` | Yes | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `string` | Yes | String representing the object's type. |
| `reporting_category` | `string` | Yes | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `any` | No | This transaction relates to the Stripe object. |
| `status` | `string` | Yes | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `string` | Yes | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:History():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InboundTransferEntity

```lua
local inbound_transfer = client:InboundTransfer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Amount (in cents) transferred. |
| `cancelable` | `boolean` | Yes | Returns `true` if the InboundTransfer is able to be canceled. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `failure_details` | `any` | No | Details about this InboundTransfer's failure. |
| `financial_account` | `string` | Yes | The FinancialAccount that received the funds. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `linked_flows` | `table` | Yes |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `origin_payment_method` | `string` | No | The origin payment method to be debited for an InboundTransfer. |
| `origin_payment_method_details` | `any` | No | Details about the PaymentMethod for an InboundTransfer. |
| `returned` | `boolean` | No | Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state. |
| `statement_descriptor` | `string` | Yes | Statement descriptor shown when funds are debited from the source. |
| `status` | `string` | Yes | Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. |
| `status_transitions` | `table` | Yes |  |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:InboundTransfer():create({
  amount = --[[ number ]],
  cancelable = --[[ boolean ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  financial_account = --[[ string ]],
  id = --[[ string ]],
  linked_flows = --[[ table ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  statement_descriptor = --[[ string ]],
  status = --[[ string ]],
  status_transitions = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:InboundTransfer():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:InboundTransfer():load({ id = "inbound_transfer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InboundTransferEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InstallEntity

```lua
local install = client:Install(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | The ID of the account that the app install belongs to. |
| `app` | `string` | Yes | The ID of the app installed. |
| `approval_required` | `boolean` | Yes | Whether the installer must authorize pending permissions, content security policy entries, or endpoints. |
| `auth_code` | `string` | No | The authorization code for an oauth app install. |
| `channel` | `string` | Yes | The distribution channel associated with the app install. |
| `content_security_policy_granted` | `table` | Yes |  |
| `content_security_policy_pending` | `table` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `created_by` | `string` | No | The ID of the embedding platform that created the install, if applicable. |
| `endpoints_granted` | `table` | Yes | The endpoint URLs authorized by the installer. |
| `endpoints_pending` | `table` | Yes | The endpoint URLs requested by the latest app version that the installer has not authorized. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `permissions_granted` | `table` | Yes | The permissions authorized by the installer. |
| `permissions_pending` | `table` | Yes | The permissions requested by the latest app version that the installer has not authorized. |
| `status` | `string` | Yes | The status of the app install. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Install():create({
  id = --[[ string ]],
  account = --[[ string ]],
  app = --[[ string ]],
  approval_required = --[[ boolean ]],
  channel = --[[ string ]],
  content_security_policy_granted = --[[ table ]],
  content_security_policy_pending = --[[ table ]],
  created = --[[ number ]],
  endpoints_granted = --[[ table ]],
  endpoints_pending = --[[ table ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  permissions_granted = --[[ table ]],
  permissions_pending = --[[ table ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Install():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Install():load({ id = "install_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InstallEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InvoiceEntity

```lua
local invoice = client:Invoice(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_country` | `string` | No | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `string` | No | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `table` | No | The account tax IDs associated with the invoice. |
| `amount_due` | `number` | Yes | Final amount due at this time for this invoice. |
| `amount_overpaid` | `number` | Yes | Amount that was overpaid on the invoice. |
| `amount_paid` | `number` | Yes | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | `number` | Yes | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_remaining` | `number` | Yes | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | `number` | Yes | This is the sum of all the shipping amounts. |
| `application` | `any` | No | ID of the Connect Application that created the invoice. |
| `attempt_count` | `number` | Yes | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | `boolean` | Yes | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | `boolean` | Yes | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_tax` | `table` | Yes |  |
| `automatically_finalizes_at` | `number` | No | The time when this invoice is currently scheduled to be automatically finalized. |
| `billing_reason` | `string` | No | Indicates the reason why the invoice was created. |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_secret` | `any` | No | The confirmation secret associated with this invoice. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `table` | No | Custom fields displayed on the invoice. |
| `customer` | `any` | Yes | The ID of the customer to bill. |
| `customer_account` | `string` | No | The ID of the account representing the customer to bill. |
| `customer_address` | `any` | No | The customer's address. |
| `customer_email` | `string` | No | The customer's email. |
| `customer_name` | `string` | No | The customer's name. |
| `customer_phone` | `string` | No | The customer's phone number. |
| `customer_shipping` | `any` | No | The customer's shipping information. |
| `customer_tax_exempt` | `string` | No | The customer's tax exempt status. |
| `customer_tax_ids` | `table` | No | The customer's tax IDs. |
| `default_payment_method` | `any` | No | ID of the default payment method for the invoice. |
| `default_source` | `any` | No | ID of the default payment source for the invoice. |
| `default_tax_rates` | `table` | Yes | The tax rates applied to this invoice, if any. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discounts` | `table` | Yes | The discounts applied to the invoice. |
| `due_date` | `number` | No | The date on which payment for this invoice is due. |
| `effective_at` | `number` | No | The date when this invoice is in effect. |
| `ending_balance` | `number` | No | Ending customer balance after the invoice is finalized. |
| `footer` | `string` | No | Footer displayed on the invoice. |
| `from_invoice` | `any` | No | Details of the invoice that was cloned. |
| `hosted_invoice_url` | `string` | No | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice_pdf` | `string` | No | The link to download the PDF for the invoice. |
| `issuer` | `table` | Yes |  |
| `last_finalization_error` | `any` | No | The error encountered during the previous attempt to finalize the invoice. |
| `latest_revision` | `any` | No | The ID of the most recent non-draft revision of this invoice |
| `lines` | `table` | Yes | The individual line items that make up the invoice. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_payment_attempt` | `number` | No | The time at which payment will next be attempted. |
| `number` | `string` | No | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) for which the funds of the invoice payment are intended. |
| `parent` | `any` | No | The parent that generated this invoice |
| `payment_settings` | `table` | Yes |  |
| `payments` | `table` | Yes | Payments for this invoice. |
| `period_end` | `number` | Yes | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | `number` | Yes | The earliest timestamp at which invoice items can be associated with this invoice. |
| `post_payment_credit_notes_amount` | `number` | Yes | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | `number` | Yes | Total amount of all pre-payment credit notes issued for this invoice. |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this invoice. |
| `rendering` | `any` | No | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `shipping_cost` | `any` | No | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | `any` | No | Shipping details for the invoice. |
| `starting_balance` | `number` | Yes | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | `string` | No | Extra information about an invoice for the customer's credit card statement. |
| `status` | `string` | No | The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. |
| `status_details` | `table` | No |  |
| `status_transitions` | `table` | Yes |  |
| `subtotal` | `number` | Yes | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `number` | No | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `test_clock` | `any` | No | ID of the test clock this invoice belongs to. |
| `threshold_reason` | `table` | Yes |  |
| `total` | `number` | Yes | Total after discounts and taxes. |
| `total_discount_amounts` | `table` | No | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `number` | No | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `table` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `table` | No | The aggregate tax information of all line items. |
| `webhooks_delivered_at` | `number` | No | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Invoice():create({
  id = --[[ string ]],
  amount_due = --[[ number ]],
  amount_overpaid = --[[ number ]],
  amount_paid = --[[ number ]],
  amount_paid_off_stripe = --[[ number ]],
  amount_remaining = --[[ number ]],
  amount_shipping = --[[ number ]],
  attempt_count = --[[ number ]],
  attempted = --[[ boolean ]],
  auto_advance = --[[ boolean ]],
  automatic_tax = --[[ table ]],
  collection_method = --[[ string ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  customer = --[[ any ]],
  default_tax_rates = --[[ table ]],
  discounts = --[[ table ]],
  issuer = --[[ table ]],
  lines = --[[ table ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  payment_settings = --[[ table ]],
  payments = --[[ table ]],
  period_end = --[[ number ]],
  period_start = --[[ number ]],
  post_payment_credit_notes_amount = --[[ number ]],
  pre_payment_credit_notes_amount = --[[ number ]],
  starting_balance = --[[ number ]],
  status_transitions = --[[ table ]],
  subtotal = --[[ number ]],
  threshold_reason = --[[ table ]],
  total = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Invoice():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Invoice():load({ id = "invoice_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Invoice():remove({ id = "invoice_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InvoicePaymentEntity

```lua
local invoice_payment = client:InvoicePayment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_paid` | `number` | No | Amount that was actually paid for this invoice, in cents (or local equivalent). |
| `amount_requested` | `number` | Yes | Amount intended to be paid toward this invoice, in cents (or local equivalent) |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | Yes | The invoice that was paid. |
| `is_default` | `boolean` | Yes | Stripe automatically creates a default InvoicePayment when the invoice is finalized, and keeps it synchronized with the invoice’s `amount_remaining`. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment` | `table` | Yes |  |
| `status` | `string` | Yes | The status of the payment, one of `open`, `paid`, or `canceled`. |
| `status_transitions` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:InvoicePayment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:InvoicePayment():load({ id = "invoice_payment_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvoicePaymentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InvoiceRenderingTemplateEntity

```lua
local invoice_rendering_template = client:InvoiceRenderingTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | No | A brief description of the template, hidden from customers |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The status of the template, one of `active` or `archived`. |
| `version` | `number` | Yes | Version of this template; version increases by one when an update on the template changes any field that controls invoice rendering |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:InvoiceRenderingTemplate():create({
  template = --[[ string ]],
  created = --[[ number ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  status = --[[ string ]],
  version = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:InvoiceRenderingTemplate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:InvoiceRenderingTemplate():load({ id = "invoice_rendering_template_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvoiceRenderingTemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InvoiceitemEntity

```lua
local invoiceitem = client:Invoiceitem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Amount (in the `currency` specified) of the invoice item. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | The ID of the customer to bill for this invoice item. |
| `customer_account` | `string` | No | The ID of the account to bill for this invoice item. |
| `date` | `number` | Yes | Time at which the object was created. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discountable` | `boolean` | Yes | If true, discounts will apply to this invoice item. |
| `discounts` | `table` | No | The discounts which apply to the invoice item. |
| `frozen_fields` | `table` | No | Array of field names that can't be modified. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | No | The ID of the invoice this invoice item belongs to. |
| `invoicing_rules` | `table` | No | The rules that control when this invoice item is eligible for invoicing. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net_amount` | `number` | No | The amount after discounts, but before credits and taxes. |
| `object` | `string` | Yes | String representing the object's type. |
| `parent` | `any` | No | The parent that generated this invoice item. |
| `period` | `table` | Yes |  |
| `pricing` | `any` | No | The pricing information of the invoice item. |
| `proration` | `boolean` | Yes | Whether the invoice item was created automatically as a proration adjustment when the customer switched plans. |
| `proration_details` | `table` | Yes |  |
| `quantity` | `number` | Yes | Quantity of units for the invoice item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `string` | Yes | Non-negative decimal with at most 12 decimal places. |
| `tax_rates` | `table` | No | The tax rates which apply to the invoice item. |
| `test_clock` | `any` | No | ID of the test clock this invoice item belongs to. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Invoiceitem():create({
  id = --[[ string ]],
  amount = --[[ number ]],
  currency = --[[ string ]],
  customer = --[[ any ]],
  date = --[[ number ]],
  discountable = --[[ boolean ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  period = --[[ table ]],
  proration = --[[ boolean ]],
  proration_details = --[[ table ]],
  quantity = --[[ number ]],
  quantity_decimal = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Invoiceitem():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Invoiceitem():load({ id = "invoiceitem_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvoiceitemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LineEntity

```lua
local line = client:Line(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | The amount, in cents (or local equivalent). |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discount_amount` | `number` | Yes | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `table` | No | The amount of discount calculated per discount for this line item. |
| `discountable` | `boolean` | Yes | If true, discounts will apply to this line item. |
| `discounts` | `table` | Yes | The discounts applied to the invoice line item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `string` | No | The ID of the invoice that contains this line item. |
| `invoice_line_item` | `string` | No | ID of the invoice line item being credited |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `parent` | `any` | No | The parent that generated this line item. |
| `period` | `table` | Yes |  |
| `pretax_credit_amounts` | `table` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item. |
| `pricing` | `any` | No | The pricing information of the line item. |
| `quantity` | `number` | No | Quantity of units for the invoice line item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `string` | No | Non-negative decimal with at most 12 decimal places. |
| `subscription` | `any` | No |  |
| `subtotal` | `number` | Yes | The subtotal of the line item, in cents (or local equivalent), before any discounts or taxes. |
| `tax_rates` | `table` | Yes | The tax rates which apply to the line item. |
| `taxes` | `table` | No | The tax information of the line item. |
| `type` | `string` | Yes | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | `number` | No | The cost of each unit of product being credited. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Line():create({
  id = --[[ string ]],
  invoice_id = --[[ string ]],
  amount = --[[ number ]],
  currency = --[[ string ]],
  discount_amount = --[[ number ]],
  discountable = --[[ boolean ]],
  discounts = --[[ table ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  period = --[[ table ]],
  subtotal = --[[ number ]],
  tax_rates = --[[ table ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Line():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LineEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LineItemEntity

```lua
local line_item = client:LineItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjustable_quantity` | `any` | No |  |
| `amount` | `number` | Yes | The line item amount in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_discount` | `number` | Yes | Total discount amount applied. |
| `amount_subtotal` | `number` | Yes | Total before any discounts or taxes are applied. |
| `amount_tax` | `number` | Yes | The amount of tax calculated for this line item, in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_total` | `number` | Yes | Total after discounts and taxes. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discounts` | `table` | No | The discounts applied to the line item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `performance_location` | `string` | No | Indicates the line item represents a performance where the venue location might determine the tax, not the customer address. |
| `price` | `number` | No | The price used to generate the line item. |
| `product` | `string` | No | The ID of an existing [Product](https://docs.stripe.com/api/products/object). |
| `quantity` | `number` | Yes | The number of units of the item being purchased. |
| `reference` | `string` | Yes | A custom identifier for this line item. |
| `reversal` | `any` | No | If `type=reversal`, contains information about what was reversed. |
| `tax_behavior` | `string` | Yes | Specifies whether the `amount` includes taxes. |
| `tax_breakdown` | `table` | No | Detailed account of taxes relevant to this line item. |
| `tax_code` | `string` | Yes | The [tax code](https://docs.stripe.com/tax/tax-categories) ID used for this resource. |
| `taxes` | `table` | No | The taxes applied to the line item. |
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LineItem():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LineItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LinkedAccountEntity

```lua
local linked_account = client:LinkedAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `any` | No | The account holder that this account belongs to. |
| `account_numbers` | `table` | No | Details about the account numbers. |
| `balance` | `any` | No | The most recent information about the account's balance. |
| `balance_refresh` | `any` | No | The state of the most recent attempt to refresh the account balance. |
| `category` | `string` | Yes | The type of the account. |
| `created` | `number` | Yes | Time at which the object was created. |
| `display_name` | `string` | No | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `institution_name` | `string` | Yes | The name of the institution that holds this account. |
| `last4` | `string` | No | The last 4 digits of the account number. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `ownership` | `any` | No | The most recent information about the account's owners. |
| `ownership_refresh` | `any` | No | The state of the most recent attempt to refresh the account owners. |
| `permissions` | `table` | No | The list of permissions granted by this account. |
| `status` | `string` | Yes | The status of the link to the account. |
| `status_details` | `table` | No |  |
| `subcategory` | `string` | Yes | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `table` | No | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `table` | Yes | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `transaction_refresh` | `any` | No | The state of the most recent attempt to refresh the account transactions. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LinkedAccount():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkedAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LinkedAccountOwnerEntity

```lua
local linked_account_owner = client:LinkedAccountOwner(nil)
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
| `refreshed_at` | `number` | No | The timestamp of the refresh that updated this owner. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LinkedAccountOwner():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkedAccountOwnerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LocationEntity

```lua
local location = client:Location(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `table` | Yes |  |
| `address_kana` | `table` | No |  |
| `address_kanji` | `table` | No |  |
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
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `phone` | `string` | No | The phone number of the location. |
| `postal_code` | `string` | No | ZIP or postal code. |
| `state` | `string` | No | State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)). |
| `type` | `string` | Yes | The type of tax location to be defined. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Location():create({
  id = --[[ string ]],
  address = --[[ table ]],
  display_name = --[[ string ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Location():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Location():load({ id = "location_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Location():remove({ id = "location_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LocationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LoginLinkEntity

```lua
local login_link = client:LoginLink(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | Yes | The URL for the login link. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LoginLink():create({
  account_id = --[[ string ]],
  created = --[[ number ]],
  object = --[[ string ]],
  url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LoginLinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MandateEntity

```lua
local mandate = client:Mandate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_acceptance` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `multi_use` | `table` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `string` | No | The account (if any) that the mandate is intended for. |
| `payment_method` | `any` | Yes | ID of the payment method associated with this mandate. |
| `payment_method_details` | `table` | Yes |  |
| `single_use` | `table` | Yes |  |
| `status` | `string` | Yes | The mandate status indicates whether or not you can use it to initiate a payment. |
| `type` | `string` | Yes | The type of the mandate. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Mandate():load({ id = "mandate_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MandateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MeterEntity

```lua
local meter = client:Meter(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer_mapping` | `table` | Yes |  |
| `default_aggregation` | `table` | Yes |  |
| `display_name` | `string` | Yes | The meter's name. |
| `event_name` | `string` | Yes | The name of the meter event to record usage for. |
| `event_time_window` | `string` | No | The time window which meter events have been pre-aggregated for, if any. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The meter's status. |
| `status_transitions` | `table` | Yes |  |
| `updated` | `number` | Yes | Time at which the object was last updated. |
| `value_settings` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Meter():create({
  id = --[[ string ]],
  created = --[[ number ]],
  customer_mapping = --[[ table ]],
  default_aggregation = --[[ table ]],
  display_name = --[[ string ]],
  event_name = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  status = --[[ string ]],
  status_transitions = --[[ table ]],
  updated = --[[ number ]],
  value_settings = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Meter():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Meter():load({ id = "meter_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MeterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MeterEventEntity

```lua
local meter_event = client:MeterEvent(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:MeterEvent():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MeterEventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MeterEventAdjustmentEntity

```lua
local meter_event_adjustment = client:MeterEventAdjustment(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:MeterEventAdjustment():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MeterEventAdjustmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MeterEventSummaryEntity

```lua
local meter_event_summary = client:MeterEventSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregated_value` | `number` | Yes | Aggregated value of all the events within `start_time` (inclusive) and `end_time` (inclusive). |
| `end_time` | `number` | Yes | End timestamp for this event summary (exclusive). |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `meter` | `string` | Yes | The meter associated with this event summary. |
| `object` | `string` | Yes | String representing the object's type. |
| `start_time` | `number` | Yes | Start timestamp for this event summary (inclusive). |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MeterEventSummary():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MeterEventSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OnboardingLinkEntity

```lua
local onboarding_link = client:OnboardingLink(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apple_terms_and_conditions` | `any` | No | The options associated with the Apple Terms and Conditions link type. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OnboardingLink():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OnboardingLinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrderEntity

```lua
local order = client:Order(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_fees` | `number` | Yes | Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit. |
| `amount_subtotal` | `number` | Yes | Total amount of the carbon removal in the currency's smallest unit. |
| `amount_total` | `number` | Yes | Total amount of the order including fees in the currency's smallest unit. |
| `beneficiary` | `table` | Yes |  |
| `canceled_at` | `number` | No | Time at which the order was canceled. |
| `cancellation_reason` | `string` | No | Reason for the cancellation of this order. |
| `certificate` | `string` | No | For delivered orders, a URL to a delivery certificate for the order. |
| `confirmed_at` | `number` | No | Time at which the order was confirmed. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order. |
| `delayed_at` | `number` | No | Time at which the order's expected_delivery_year was delayed. |
| `delivered_at` | `number` | No | Time at which the order was delivered. |
| `delivery_details` | `table` | Yes | Details about the delivery of carbon removal for this order. |
| `expected_delivery_year` | `number` | Yes | The year this order is expected to be delivered. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons` | `string` | Yes | Quantity of carbon removal that is included in this order. |
| `object` | `string` | Yes | String representing the object's type. |
| `product` | `any` | Yes | Unique ID for the Climate `Product` this order is purchasing. |
| `product_substituted_at` | `number` | No | Time at which the order's product was substituted for a different product. |
| `status` | `string` | Yes | The current status of this order. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Order():create({
  id = --[[ string ]],
  amount_fees = --[[ number ]],
  amount_subtotal = --[[ number ]],
  amount_total = --[[ number ]],
  beneficiary = --[[ table ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  delivery_details = --[[ table ]],
  expected_delivery_year = --[[ number ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  metric_tons = --[[ string ]],
  object = --[[ string ]],
  product = --[[ any ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Order():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Order():load({ id = "order_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OutboundPaymentEntity

```lua
local outbound_payment = client:OutboundPayment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Amount (in cents) transferred. |
| `cancelable` | `boolean` | Yes | Returns `true` if the object can be canceled, and `false` otherwise. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | No | ID of the [customer](https://docs.stripe.com/api/customers) to whom an OutboundPayment is sent. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `destination_payment_method` | `string` | No | The PaymentMethod via which an OutboundPayment is sent. |
| `destination_payment_method_details` | `any` | No | Details about the PaymentMethod for an OutboundPayment. |
| `end_user_details` | `any` | No | Details about the end user. |
| `expected_arrival_date` | `number` | Yes | The date when funds are expected to arrive in the destination account. |
| `financial_account` | `string` | Yes | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `returned_details` | `any` | No | Details about a returned OutboundPayment. |
| `statement_descriptor` | `string` | Yes | The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer). |
| `status` | `string` | Yes | Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. |
| `status_transitions` | `table` | Yes |  |
| `tracking_details` | `any` | No | Details about network-specific tracking information if available. |
| `transaction` | `any` | Yes | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OutboundPayment():create({
  id = --[[ string ]],
  amount = --[[ number ]],
  cancelable = --[[ boolean ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  expected_arrival_date = --[[ number ]],
  financial_account = --[[ string ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  statement_descriptor = --[[ string ]],
  status = --[[ string ]],
  status_transitions = --[[ table ]],
  transaction = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OutboundPayment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OutboundPayment():load({ id = "outbound_payment_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OutboundPaymentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OutboundTransferEntity

```lua
local outbound_transfer = client:OutboundTransfer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Amount (in cents) transferred. |
| `cancelable` | `boolean` | Yes | Returns `true` if the object can be canceled, and `false` otherwise. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `destination_payment_method` | `string` | No | The PaymentMethod used as the payment instrument for an OutboundTransfer. |
| `destination_payment_method_details` | `table` | Yes |  |
| `expected_arrival_date` | `number` | Yes | The date when funds are expected to arrive in the destination account. |
| `financial_account` | `string` | Yes | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `returned_details` | `any` | No | Details about a returned OutboundTransfer. |
| `statement_descriptor` | `string` | Yes | Information about the OutboundTransfer to be sent to the recipient account. |
| `status` | `string` | Yes | Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. |
| `status_transitions` | `table` | Yes |  |
| `tracking_details` | `any` | No | Details about network-specific tracking information if available. |
| `transaction` | `any` | Yes | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OutboundTransfer():create({
  id = --[[ string ]],
  amount = --[[ number ]],
  cancelable = --[[ boolean ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  destination_payment_method_details = --[[ table ]],
  expected_arrival_date = --[[ number ]],
  financial_account = --[[ string ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  statement_descriptor = --[[ string ]],
  status = --[[ string ]],
  status_transitions = --[[ table ]],
  transaction = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OutboundTransfer():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OutboundTransfer():load({ id = "outbound_transfer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OutboundTransferEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaymentAttemptRecordEntity

```lua
local payment_attempt_record = client:PaymentAttemptRecord(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `string` | No | ID of the Connect application that created the PaymentAttemptRecord. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer_details` | `any` | No | Customer information for this payment. |
| `customer_presence` | `string` | No | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method_details` | `any` | No | Information about the Payment Method debited for this payment. |
| `payment_record` | `string` | No | ID of the Payment Record this Payment Attempt Record belongs to. |
| `processor_details` | `table` | Yes | Processor information associated with this payment. |
| `reported_by` | `string` | Yes | Indicates who reported the payment. |
| `shipping_details` | `any` | No | Shipping information for this payment. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PaymentAttemptRecord():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PaymentAttemptRecord():load({ id = "payment_attempt_record_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentAttemptRecordEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaymentEvaluationEntity

```lua
local payment_evaluation = client:PaymentEvaluation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_device_metadata_details` | `table` | Yes | Client device metadata attached to this payment evaluation. |
| `created_at` | `number` | Yes | Time at which the object was created. |
| `customer_details` | `table` | No | Customer details attached to this payment evaluation. |
| `events` | `table` | Yes | Event information associated with the payment evaluation, such as refunds, dispute, early fraud warnings, or user interventions. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `outcome` | `any` | No | Indicates the final outcome for the payment evaluation. |
| `payment_details` | `table` | Yes | Payment details attached to this payment evaluation. |
| `recommended_action` | `string` | Yes | Recommended action based on the score of the `fraudulent_payment` signal. |
| `signals` | `table` | Yes | Collection of signals for this payment evaluation. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PaymentEvaluation():create({
  client_device_metadata_details = --[[ table ]],
  created_at = --[[ number ]],
  events = --[[ table ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  payment_details = --[[ table ]],
  recommended_action = --[[ string ]],
  signals = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentEvaluationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaymentIntentEntity

```lua
local payment_intent = client:PaymentIntent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_payment_method_types` | `table` | No | The list of payment method types allowed for use with this payment. |
| `amount` | `number` | No | Amount intended to be collected by this PaymentIntent. |
| `amount_capturable` | `number` | No | Amount that can be captured from this PaymentIntent. |
| `amount_details` | `any` | No |  |
| `amount_received` | `number` | No | Amount that this PaymentIntent collects. |
| `application` | `any` | No | ID of the Connect application that created the PaymentIntent. |
| `application_fee_amount` | `number` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `automatic_payment_methods` | `any` | No | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `canceled_at` | `number` | No | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_reason` | `string` | No | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | `string` | No | Controls when the funds will be captured from the customer's account. |
| `client_secret` | `string` | No | The client secret of this PaymentIntent. |
| `confirmation_method` | `string` | No | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | No | ID of the Customer this PaymentIntent belongs to, if one exists. |
| `customer_account` | `string` | No | ID of the Account representing the customer that this PaymentIntent belongs to, if one exists. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | `table` | No | The list of payment method types to exclude from use with this payment. |
| `hooks` | `table` | No |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last_payment_error` | `any` | No | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `any` | No | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | No | Settings for Managed Payments. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `any` | No | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | You can specify the settlement merchant as the connected account using the `on_behalf_of` attribute on the charge. |
| `payment_details` | `table` | No |  |
| `payment_method` | `any` | No | ID of the payment method used in this PaymentIntent. |
| `payment_method_configuration_details` | `any` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `table` | No | The list of payment method types (e.g. |
| `payment_record` | `any` | No | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `presentment_details` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PaymentIntent():create({
  id = --[[ string ]],
  created = --[[ number ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  presentment_details = --[[ table ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PaymentIntent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PaymentIntent():load({ id = "payment_intent_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentIntentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaymentIntentAmountDetailsLineItemEntity

```lua
local payment_intent_amount_details_line_item = client:PaymentIntentAmountDetailsLineItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `discount_amount` | `number` | No | The discount applied on this line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `id` | `string` | Yes | Unique identifier for the object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method_options` | `any` | No | Payment method-specific information for line items. |
| `product_code` | `string` | No | The product code of the line item, such as an SKU. |
| `product_name` | `string` | Yes | The product name of the line item. |
| `quantity` | `number` | Yes | The quantity of items. |
| `tax` | `any` | No | Contains information about the tax on the item. |
| `unit_cost` | `number` | Yes | The unit cost of the line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `unit_of_measure` | `string` | No | A unit of measure for the line item, such as gallons, feet, meters, etc. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PaymentIntentAmountDetailsLineItem():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentIntentAmountDetailsLineItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaymentLinkEntity

```lua
local payment_link = client:PaymentLink(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the payment link's `url` is active. |
| `after_completion` | `table` | Yes |  |
| `allow_promotion_codes` | `boolean` | Yes | Whether user redeemable promotion codes are enabled. |
| `application` | `any` | No | The ID of the Connect application that created the Payment Link. |
| `application_fee_amount` | `number` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `number` | No | This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. |
| `automatic_tax` | `table` | Yes |  |
| `billing_address_collection` | `string` | Yes | Configuration for collecting the customer's billing address. |
| `consent_collection` | `any` | No | When set, provides configuration to gather active consent from customers. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `table` | Yes | Collect additional information from your customer using custom fields. |
| `custom_text` | `table` | Yes |  |
| `customer_creation` | `string` | Yes | Configuration for Customer creation during checkout. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `inactive_message` | `string` | No | The custom message to be displayed to a customer when a payment link is no longer active. |
| `invoice_creation` | `any` | No | Configuration for creating invoice for payment mode payment links. |
| `line_items` | `table` | Yes | The line items representing what is being sold. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | No | Settings for Managed Payments for this Payment Link and resulting [CheckoutSessions](/api/checkout/sessions/object), [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/ob… |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name_collection` | `table` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account on behalf of which to charge. |
| `optional_items` | `table` | No | The optional items presented to the customer at checkout. |
| `payment_intent_data` | `any` | No | Indicates the parameters to be passed to PaymentIntent creation during checkout. |
| `payment_method_collection` | `string` | Yes | Configuration for collecting a payment method during checkout. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration. |
| `payment_method_types` | `table` | No | The list of payment method types that customers can use. |
| `phone_number_collection` | `table` | Yes |  |
| `restrictions` | `any` | No | Settings that restrict the usage of a payment link. |
| `shipping_address_collection` | `any` | No | Configuration for collecting the customer's shipping address. |
| `shipping_options` | `table` | Yes | The shipping rate options applied to the session. |
| `submit_type` | `string` | Yes | Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button. |
| `subscription_data` | `any` | No | When creating a subscription, the specified configuration data will be used. |
| `tax_id_collection` | `table` | Yes |  |
| `transfer_data` | `any` | No | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to. |
| `url` | `string` | Yes | The public URL that can be shared with customers. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PaymentLink():create({
  id = --[[ string ]],
  active = --[[ boolean ]],
  after_completion = --[[ table ]],
  allow_promotion_codes = --[[ boolean ]],
  automatic_tax = --[[ table ]],
  billing_address_collection = --[[ string ]],
  currency = --[[ string ]],
  custom_fields = --[[ table ]],
  custom_text = --[[ table ]],
  customer_creation = --[[ string ]],
  line_items = --[[ table ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  payment_method_collection = --[[ string ]],
  phone_number_collection = --[[ table ]],
  shipping_options = --[[ table ]],
  submit_type = --[[ string ]],
  tax_id_collection = --[[ table ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PaymentLink():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PaymentLink():load({ id = "payment_link_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentLinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaymentMethodEntity

```lua
local payment_method = client:PaymentMethod(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `table` | No |  |
| `affirm` | `table` | No |  |
| `afterpay_clearpay` | `table` | No |  |
| `alipay` | `table` | No |  |
| `allow_redisplay` | `boolean` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `alma` | `table` | No |  |
| `amazon_pay` | `table` | No |  |
| `au_becs_debit` | `table` | No |  |
| `bacs_debit` | `table` | No |  |
| `bancontact` | `table` | No |  |
| `billie` | `table` | No |  |
| `billing_details` | `table` | Yes |  |
| `bizum` | `table` | No |  |
| `blik` | `table` | No |  |
| `boleto` | `table` | Yes |  |
| `card` | `table` | Yes |  |
| `card_present` | `table` | Yes |  |
| `cashapp` | `table` | No |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `crypto` | `table` | No |  |
| `custom` | `table` | Yes |  |
| `customer` | `any` | No | The ID of the Customer to which this PaymentMethod is saved. |
| `customer_account` | `string` | No |  |
| `customer_balance` | `table` | No |  |
| `eps` | `table` | No |  |
| `fpx` | `table` | Yes |  |
| `giropay` | `table` | No |  |
| `grabpay` | `table` | No |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ideal` | `table` | No |  |
| `interac_present` | `table` | Yes |  |
| `kakao_pay` | `table` | No |  |
| `klarna` | `table` | No |  |
| `konbini` | `table` | No |  |
| `kr_card` | `table` | No |  |
| `link` | `table` | No |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `mb_way` | `table` | No |  |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mobilepay` | `table` | No |  |
| `multibanco` | `table` | No |  |
| `naver_pay` | `table` | Yes |  |
| `nz_bank_account` | `table` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `oxxo` | `table` | No |  |
| `p24` | `table` | No |  |
| `pay_by_bank` | `table` | No |  |
| `payco` | `table` | No |  |
| `paynow` | `table` | No |  |
| `paypal` | `table` | No |  |
| `paypay` | `table` | No |  |
| `payto` | `table` | No |  |
| `pix` | `table` | No |  |
| `promptpay` | `table` | No |  |
| `radar_options` | `table` | No | Options to configure Radar. |
| `revolut_pay` | `table` | No |  |
| `samsung_pay` | `table` | No |  |
| `satispay` | `table` | No |  |
| `scalapay` | `table` | No |  |
| `sepa_debit` | `table` | No |  |
| `sequra` | `table` | No |  |
| `sofort` | `table` | No |  |
| `sunbit` | `table` | No |  |
| `swish` | `table` | No |  |
| `twint` | `table` | No |  |
| `type` | `string` | Yes | The type of the PaymentMethod. |
| `upi` | `table` | No |  |
| `us_bank_account` | `table` | No |  |
| `wechat_pay` | `table` | No |  |
| `zip` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PaymentMethod():create({
  id = --[[ string ]],
  billing_details = --[[ table ]],
  boleto = --[[ table ]],
  card = --[[ table ]],
  card_present = --[[ table ]],
  created = --[[ number ]],
  custom = --[[ table ]],
  fpx = --[[ table ]],
  interac_present = --[[ table ]],
  livemode = --[[ boolean ]],
  naver_pay = --[[ table ]],
  nz_bank_account = --[[ table ]],
  object = --[[ string ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PaymentMethod():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PaymentMethod():load({ id = "payment_method_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentMethodEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaymentMethodConfigurationEntity

```lua
local payment_method_configuration = client:PaymentMethodConfiguration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `table` | Yes |  |
| `active` | `boolean` | Yes | Whether the configuration can be used for new payments. |
| `affirm` | `table` | Yes |  |
| `afterpay_clearpay` | `table` | Yes |  |
| `alipay` | `table` | Yes |  |
| `alma` | `table` | Yes |  |
| `amazon_pay` | `table` | Yes |  |
| `apple_pay` | `table` | Yes |  |
| `application` | `string` | No | For child configs, the Connect application associated with the configuration. |
| `au_becs_debit` | `table` | Yes |  |
| `bacs_debit` | `table` | Yes |  |
| `bancontact` | `table` | Yes |  |
| `billie` | `table` | Yes |  |
| `bizum` | `table` | Yes |  |
| `blik` | `table` | Yes |  |
| `boleto` | `table` | Yes |  |
| `card` | `table` | Yes |  |
| `cartes_bancaires` | `table` | Yes |  |
| `cashapp` | `table` | Yes |  |
| `crypto` | `table` | Yes |  |
| `customer_balance` | `table` | Yes |  |
| `eps` | `table` | Yes |  |
| `fpx` | `table` | Yes |  |
| `giropay` | `table` | Yes |  |
| `google_pay` | `table` | Yes |  |
| `grabpay` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ideal` | `table` | Yes |  |
| `is_default` | `boolean` | Yes | The default configuration is used whenever a payment method configuration is not specified. |
| `jcb` | `table` | Yes |  |
| `kakao_pay` | `table` | Yes |  |
| `klarna` | `table` | Yes |  |
| `konbini` | `table` | Yes |  |
| `kr_card` | `table` | Yes |  |
| `link` | `table` | Yes |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `mb_way` | `table` | Yes |  |
| `mobilepay` | `table` | Yes |  |
| `multibanco` | `table` | Yes |  |
| `name` | `string` | Yes | The configuration's name. |
| `naver_pay` | `table` | Yes |  |
| `nz_bank_account` | `table` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `oxxo` | `table` | Yes |  |
| `p24` | `table` | Yes |  |
| `parent` | `string` | No | For child configs, the configuration's parent configuration. |
| `pay_by_bank` | `table` | Yes |  |
| `payco` | `table` | Yes |  |
| `paynow` | `table` | Yes |  |
| `paypal` | `table` | Yes |  |
| `paypay` | `table` | Yes |  |
| `payto` | `table` | Yes |  |
| `pix` | `table` | Yes |  |
| `promptpay` | `table` | Yes |  |
| `revolut_pay` | `table` | Yes |  |
| `samsung_pay` | `table` | Yes |  |
| `satispay` | `table` | Yes |  |
| `scalapay` | `table` | Yes |  |
| `sepa_debit` | `table` | Yes |  |
| `sequra` | `table` | Yes |  |
| `sofort` | `table` | Yes |  |
| `sunbit` | `table` | Yes |  |
| `swish` | `table` | Yes |  |
| `twint` | `table` | Yes |  |
| `upi` | `table` | Yes |  |
| `us_bank_account` | `table` | Yes |  |
| `wechat_pay` | `table` | Yes |  |
| `zip` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PaymentMethodConfiguration():create({
  id = --[[ string ]],
  acss_debit = --[[ table ]],
  active = --[[ boolean ]],
  affirm = --[[ table ]],
  afterpay_clearpay = --[[ table ]],
  alipay = --[[ table ]],
  alma = --[[ table ]],
  amazon_pay = --[[ table ]],
  apple_pay = --[[ table ]],
  au_becs_debit = --[[ table ]],
  bacs_debit = --[[ table ]],
  bancontact = --[[ table ]],
  billie = --[[ table ]],
  bizum = --[[ table ]],
  blik = --[[ table ]],
  boleto = --[[ table ]],
  card = --[[ table ]],
  cartes_bancaires = --[[ table ]],
  cashapp = --[[ table ]],
  crypto = --[[ table ]],
  customer_balance = --[[ table ]],
  eps = --[[ table ]],
  fpx = --[[ table ]],
  giropay = --[[ table ]],
  google_pay = --[[ table ]],
  grabpay = --[[ table ]],
  ideal = --[[ table ]],
  is_default = --[[ boolean ]],
  jcb = --[[ table ]],
  kakao_pay = --[[ table ]],
  klarna = --[[ table ]],
  konbini = --[[ table ]],
  kr_card = --[[ table ]],
  link = --[[ table ]],
  livemode = --[[ boolean ]],
  mb_way = --[[ table ]],
  mobilepay = --[[ table ]],
  multibanco = --[[ table ]],
  name = --[[ string ]],
  naver_pay = --[[ table ]],
  nz_bank_account = --[[ table ]],
  object = --[[ string ]],
  oxxo = --[[ table ]],
  p24 = --[[ table ]],
  pay_by_bank = --[[ table ]],
  payco = --[[ table ]],
  paynow = --[[ table ]],
  paypal = --[[ table ]],
  paypay = --[[ table ]],
  payto = --[[ table ]],
  pix = --[[ table ]],
  promptpay = --[[ table ]],
  revolut_pay = --[[ table ]],
  samsung_pay = --[[ table ]],
  satispay = --[[ table ]],
  scalapay = --[[ table ]],
  sepa_debit = --[[ table ]],
  sequra = --[[ table ]],
  sofort = --[[ table ]],
  sunbit = --[[ table ]],
  swish = --[[ table ]],
  twint = --[[ table ]],
  upi = --[[ table ]],
  us_bank_account = --[[ table ]],
  wechat_pay = --[[ table ]],
  zip = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PaymentMethodConfiguration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PaymentMethodConfiguration():load({ id = "payment_method_configuration_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentMethodConfigurationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaymentMethodDomainEntity

```lua
local payment_method_domain = client:PaymentMethodDomain(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amazon_pay` | `table` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `apple_pay` | `table` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `created` | `number` | Yes | Time at which the object was created. |
| `domain_name` | `string` | Yes | The domain name that this payment method domain object represents. |
| `enabled` | `boolean` | Yes | Whether this payment method domain is enabled. |
| `google_pay` | `table` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `klarna` | `table` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `link` | `table` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `paypal` | `table` | Yes | Indicates the status of a specific payment method on a payment method domain. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PaymentMethodDomain():create({
  id = --[[ string ]],
  amazon_pay = --[[ table ]],
  apple_pay = --[[ table ]],
  created = --[[ number ]],
  domain_name = --[[ string ]],
  enabled = --[[ boolean ]],
  google_pay = --[[ table ]],
  klarna = --[[ table ]],
  link = --[[ table ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  paypal = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PaymentMethodDomain():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PaymentMethodDomain():load({ id = "payment_method_domain_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentMethodDomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaymentRecordEntity

```lua
local payment_record = client:PaymentRecord(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `table` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `string` | No | ID of the Connect application that created the PaymentRecord. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer_details` | `any` | No | Customer information for this payment. |
| `customer_presence` | `string` | No | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `latest_payment_attempt_record` | `string` | No | ID of the latest Payment Attempt Record attached to this Payment Record. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method_details` | `any` | No | Information about the Payment Method debited for this payment. |
| `processor_details` | `table` | Yes | Processor information associated with this payment. |
| `reported_by` | `string` | Yes | Indicates who reported the payment. |
| `shipping_details` | `any` | No | Shipping information for this payment. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PaymentRecord():create({
  amount = --[[ table ]],
  amount_authorized = --[[ table ]],
  amount_canceled = --[[ table ]],
  amount_failed = --[[ table ]],
  amount_guaranteed = --[[ table ]],
  amount_refunded = --[[ table ]],
  amount_requested = --[[ table ]],
  created = --[[ number ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  processor_details = --[[ table ]],
  reported_by = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PaymentRecord():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PaymentRecord():load({ id = "payment_record_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentRecordEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayoutEntity

```lua
local payout = client:Payout(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | The amount (in cents (or local equivalent)) that transfers to your bank account or debit card. |
| `application_fee` | `any` | No | The application fee (if any) for the payout. |
| `application_fee_amount` | `number` | No | The amount of the application fee (if any) requested for the payout. |
| `arrival_date` | `number` | Yes | Date that you can expect the payout to arrive in the bank. |
| `automatic` | `boolean` | Yes | Returns `true` if the payout is created by an [automated payout schedule](https://docs.stripe.com/payouts#payout-schedule) and `false` if it's [requested manually](https://stripe.com/docs/payouts#manual-payouts). |
| `balance_transaction` | `any` | No | ID of the balance transaction that describes the impact of this payout on your account balance. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `destination` | `any` | No | ID of the bank account or card the payout is sent to. |
| `failure_balance_transaction` | `any` | No | If the payout fails or cancels, this is the ID of the balance transaction that reverses the initial balance transaction and returns the funds from the failed payout back in your balance. |
| `failure_code` | `string` | No | Error code that provides a reason for a payout failure, if available. |
| `failure_message` | `string` | No | Message that provides the reason for a payout failure, if available. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Payout():create({
  id = --[[ string ]],
  amount = --[[ number ]],
  arrival_date = --[[ number ]],
  automatic = --[[ boolean ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  livemode = --[[ boolean ]],
  method = --[[ string ]],
  object = --[[ string ]],
  reconciliation_status = --[[ string ]],
  source_type = --[[ string ]],
  status = --[[ string ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Payout():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Payout():load({ id = "payout_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayoutEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PersonEntity

```lua
local person = client:Person(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | The account the person is associated with. |
| `additional_tos_acceptances` | `table` | No |  |
| `address` | `table` | No |  |
| `address_kana` | `any` | No |  |
| `address_kanji` | `any` | No |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `dob` | `table` | No |  |
| `email` | `string` | No | The person's email address. |
| `first_name` | `string` | No | The person's first name. |
| `first_name_kana` | `string` | No | The Kana variation of the person's first name (Japan only). |
| `first_name_kanji` | `string` | No | The Kanji variation of the person's first name (Japan only). |
| `full_name_aliases` | `table` | No | A list of alternate names or aliases that the person is known by. |
| `future_requirements` | `any` | No |  |
| `gender` | `string` | No | The person's gender. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `id_number_provided` | `boolean` | No | Whether the person's `id_number` was provided. |
| `id_number_secondary_provided` | `boolean` | No | Whether the person's `id_number_secondary` was provided. |
| `last_name` | `string` | No | The person's last name. |
| `last_name_kana` | `string` | No | The Kana variation of the person's last name (Japan only). |
| `last_name_kanji` | `string` | No | The Kanji variation of the person's last name (Japan only). |
| `maiden_name` | `string` | No | The person's maiden name. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nationality` | `string` | No | The country where the person is a national. |
| `object` | `string` | Yes | String representing the object's type. |
| `phone` | `string` | No | The person's phone number. |
| `political_exposure` | `string` | No | Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction. |
| `registered_address` | `table` | No |  |
| `relationship` | `table` | No |  |
| `requirements` | `any` | No |  |
| `ssn_last_4_provided` | `boolean` | No | Whether the last four digits of the person's Social Security number have been provided (U.S. |
| `us_cfpb_data` | `any` | No | Demographic data related to the person. |
| `verification` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Person():create({
  account_id = --[[ string ]],
  account = --[[ string ]],
  created = --[[ number ]],
  object = --[[ string ]],
  verification = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Person():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Person():load({ id = "person_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PersonalizationDesignEntity

```lua
local personalization_design = client:PersonalizationDesign(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_logo` | `any` | No | The file for the card logo to use with physical bundles that support card logos. |
| `carrier_text` | `any` | No | Hash containing carrier text, for use with physical bundles that support carrier text. |
| `created` | `number` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | No | A lookup key used to retrieve personalization designs dynamically from a static string. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | Friendly display name. |
| `object` | `string` | Yes | String representing the object's type. |
| `physical_bundle` | `any` | Yes | The physical bundle object belonging to this personalization design. |
| `preferences` | `table` | Yes |  |
| `rejection_reasons` | `table` | Yes |  |
| `status` | `string` | Yes | Whether this personalization design can be used to create cards. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PersonalizationDesign():create({
  id = --[[ string ]],
  created = --[[ number ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  physical_bundle = --[[ any ]],
  preferences = --[[ table ]],
  rejection_reasons = --[[ table ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PersonalizationDesign():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PersonalizationDesign():load({ id = "personalization_design_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonalizationDesignEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PhysicalBundleEntity

```lua
local physical_bundle = client:PhysicalBundle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_logo` | `string` | Yes | The policy for how to use card logo images in a card design with this physical bundle. |
| `carrier_text` | `string` | Yes | The policy for how to use carrier letter text in a card design with this physical bundle. |
| `features` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Yes | Friendly display name. |
| `object` | `string` | Yes | String representing the object's type. |
| `second_line` | `string` | Yes | The policy for how to use a second line on a card with this physical bundle. |
| `status` | `string` | Yes | Whether this physical bundle can be used to create cards. |
| `type` | `string` | Yes | Whether this physical bundle is a standard Stripe offering or custom-made for you. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PhysicalBundle():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PhysicalBundle():load({ id = "physical_bundle_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PhysicalBundleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PlanEntity

```lua
local plan = client:Plan(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the plan can be used for new purchases. |
| `amount` | `number` | No | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `amount_decimal` | `string` | No | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `billing_scheme` | `string` | Yes | Describes how to compute the price per period. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `interval` | `string` | Yes | The frequency at which a subscription is billed. |
| `interval_count` | `number` | Yes | The number of intervals (specified in the `interval` attribute) between subscription billings. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `meter` | `string` | No | The meter tracking the usage of a metered price |
| `nickname` | `string` | No | A brief description of the plan, hidden from customers. |
| `object` | `string` | Yes | String representing the object's type. |
| `product` | `any` | No | The product whose pricing this plan determines. |
| `tiers` | `table` | No | Each element represents a pricing tier. |
| `tiers_mode` | `string` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_usage` | `any` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_period_days` | `number` | No | Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://docs.stripe.com/api#create_subscription-trial_from_plan). |
| `usage_type` | `string` | Yes | Configures how the quantity per period should be determined. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Plan():create({
  id = --[[ string ]],
  active = --[[ boolean ]],
  billing_scheme = --[[ string ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  interval = --[[ string ]],
  interval_count = --[[ number ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  usage_type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Plan():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Plan():load({ id = "plan_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PlanEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PriceEntity

```lua
local price = client:Price(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the price can be used for new purchases. |
| `billing_scheme` | `string` | Yes | Describes how to compute the price per period. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | `table` | No | Prices defined in each available currency option. |
| `custom_unit_amount` | `any` | No | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | No | A lookup key used to retrieve prices dynamically from a static string. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | No | A brief description of the price, hidden from customers. |
| `object` | `string` | Yes | String representing the object's type. |
| `product` | `any` | Yes | The ID of the product this price is associated with. |
| `recurring` | `any` | No | The recurring components of a price such as `interval` and `usage_type`. |
| `tax_behavior` | `string` | No | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tiers` | `table` | No | Each element represents a pricing tier. |
| `tiers_mode` | `string` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_quantity` | `any` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `type` | `string` | Yes | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | `number` | No | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | `string` | No | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Price():create({
  id = --[[ string ]],
  active = --[[ boolean ]],
  billing_scheme = --[[ string ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  product = --[[ any ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Price():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Price():load({ id = "price_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductEntity

```lua
local product = client:Product(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the product is currently available for purchase. |
| `created` | `number` | Yes | Time at which the object was created. |
| `current_prices_per_metric_ton` | `table` | Yes | Current prices for a metric ton of carbon removal in a currency's smallest unit. |
| `default_price` | `any` | No | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `delivery_year` | `number` | No | The year in which the carbon removal is expected to be delivered. |
| `description` | `string` | No | The product's description, meant to be displayable to the customer. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `images` | `table` | Yes | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `livemode` | `boolean` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `marketing_features` | `table` | Yes | A list of up to 15 marketing features for this product. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons_available` | `string` | Yes | The quantity of metric tons available for reservation. |
| `name` | `string` | Yes | The Climate product's name. |
| `object` | `string` | Yes | String representing the object's type. |
| `package_dimensions` | `any` | No | The dimensions of this product for shipping purposes. |
| `shippable` | `boolean` | No | Whether this product is shipped (i.e., physical goods). |
| `statement_descriptor` | `string` | No | Extra information about a product which will appear on your customer's credit card statement. |
| `suppliers` | `table` | Yes | The carbon removal suppliers that fulfill orders for this Climate product. |
| `tax_code` | `any` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `any` | No | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `unit_label` | `string` | No | A label that represents units of this product. |
| `updated` | `number` | Yes | Time at which the object was last updated. |
| `url` | `string` | No | A URL of a publicly-accessible webpage for this product. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Product():create({
  id = --[[ string ]],
  active = --[[ boolean ]],
  created = --[[ number ]],
  current_prices_per_metric_ton = --[[ table ]],
  images = --[[ table ]],
  livemode = --[[ boolean ]],
  marketing_features = --[[ table ]],
  metadata = --[[ table ]],
  metric_tons_available = --[[ string ]],
  name = --[[ string ]],
  object = --[[ string ]],
  suppliers = --[[ table ]],
  updated = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Product():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Product():load({ id = "product_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Product():remove({ id = "product_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductFeatureEntity

```lua
local product_feature = client:ProductFeature(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | Yes | A unique key you provide as your own system identifier. |
| `metadata` | `table` | Yes | Set of key-value pairs that you can attach to an object. |
| `name` | `string` | Yes | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProductFeature():create({
  id = --[[ string ]],
  active = --[[ boolean ]],
  livemode = --[[ boolean ]],
  lookup_key = --[[ string ]],
  metadata = --[[ table ]],
  name = --[[ string ]],
  object = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProductFeature():load({ id = "product_feature_id", product_id = "product_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductFeatureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PromotionCodeEntity

```lua
local promotion_code = client:PromotionCode(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the promotion code is currently active. |
| `code` | `string` | Yes | The customer-facing code. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer` | `any` | No | The customer who can use this promotion code. |
| `customer_account` | `string` | No | The account representing the customer who can use this promotion code. |
| `expires_at` | `number` | No | Date at which the promotion code can no longer be redeemed. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | `number` | No | Maximum number of times this promotion code can be redeemed. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `promotion` | `table` | Yes |  |
| `restrictions` | `table` | Yes |  |
| `times_redeemed` | `number` | Yes | Number of times this promotion code has been used. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PromotionCode():create({
  id = --[[ string ]],
  active = --[[ boolean ]],
  code = --[[ string ]],
  created = --[[ number ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  promotion = --[[ table ]],
  restrictions = --[[ table ]],
  times_redeemed = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PromotionCode():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PromotionCode():load({ id = "promotion_code_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PromotionCodeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## QuoteEntity

```lua
local quote = client:Quote(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_subtotal` | `number` | Yes | Total before any discounts or taxes are applied. |
| `amount_total` | `number` | Yes | Total after discounts and taxes are applied. |
| `application` | `any` | No | ID of the Connect Application that created the quote. |
| `application_fee_amount` | `number` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `number` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `table` | Yes |  |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `computed` | `table` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | No | The customer who received this quote. |
| `customer_account` | `string` | No | The account representing the customer who received this quote. |
| `default_tax_rates` | `table` | No | The tax rates applied to this quote. |
| `description` | `string` | No | A description that will be displayed on the quote PDF. |
| `discounts` | `table` | Yes | The discounts applied to this quote. |
| `expires_at` | `number` | Yes | The date on which the quote will be canceled if in `open` or `draft` status. |
| `footer` | `string` | No | A footer that will be displayed on the quote PDF. |
| `from_quote` | `any` | No | Details of the quote that was cloned. |
| `header` | `string` | No | A header that will be displayed on the quote PDF. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | No | The invoice that was created from this quote. |
| `invoice_settings` | `table` | Yes |  |
| `line_items` | `table` | Yes | A list of items the customer is being quoted for. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `string` | No | A unique number that identifies this particular quote. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account on behalf of which to charge. |
| `status` | `string` | Yes | The status of the quote. |
| `status_transitions` | `table` | Yes |  |
| `subscription` | `any` | No | The subscription that was created or updated from this quote. |
| `subscription_data` | `table` | Yes |  |
| `subscription_schedule` | `any` | No | The subscription schedule that was created or updated from this quote. |
| `test_clock` | `any` | No | ID of the test clock this quote belongs to. |
| `total_details` | `table` | Yes |  |
| `transfer_data` | `any` | No | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Quote():create({
  id = --[[ string ]],
  amount_subtotal = --[[ number ]],
  amount_total = --[[ number ]],
  automatic_tax = --[[ table ]],
  collection_method = --[[ string ]],
  computed = --[[ table ]],
  created = --[[ number ]],
  discounts = --[[ table ]],
  expires_at = --[[ number ]],
  invoice_settings = --[[ table ]],
  line_items = --[[ table ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  status = --[[ string ]],
  status_transitions = --[[ table ]],
  subscription_data = --[[ table ]],
  total_details = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Quote():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Quote():load({ id = "quote_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QuoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## QuoteComputedUpfrontLineItemEntity

```lua
local quote_computed_upfront_line_item = client:QuoteComputedUpfrontLineItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjustable_quantity` | `any` | No |  |
| `amount_discount` | `number` | Yes | Total discount amount applied. |
| `amount_subtotal` | `number` | Yes | Total before any discounts or taxes are applied. |
| `amount_tax` | `number` | Yes | Total tax amount applied. |
| `amount_total` | `number` | Yes | Total after discounts and taxes. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discounts` | `table` | No | The discounts applied to the line item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `price` | `number` | No | The price used to generate the line item. |
| `quantity` | `number` | No | The quantity of products being purchased. |
| `taxes` | `table` | No | The taxes applied to the line item. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:QuoteComputedUpfrontLineItem():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QuoteComputedUpfrontLineItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## QuotePdfEntity

```lua
local quote_pdf = client:QuotePdf(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:QuotePdf():load({ id = "quote_pdf_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QuotePdfEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReaderEntity

```lua
local reader = client:Reader(nil)
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
| `last_seen_at` | `number` | No | The last time this reader reported to Stripe backend. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `location` | `any` | No | The location identifier of the reader. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `serial_number` | `string` | Yes | Serial number of the reader. |
| `status` | `string` | No | The networking status of the reader. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Reader():create({
  id = --[[ string ]],
  device_type = --[[ string ]],
  label = --[[ string ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  serial_number = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Reader():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Reader():load({ id = "reader_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Reader():remove({ id = "reader_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReaderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReceivedCreditEntity

```lua
local received_credit = client:ReceivedCredit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Amount (in cents) transferred. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | Yes | An arbitrary string attached to the object. |
| `failure_code` | `string` | No | Reason for the failure. |
| `financial_account` | `string` | No | The FinancialAccount that received the funds. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `initiating_payment_method_details` | `table` | Yes |  |
| `linked_flows` | `table` | Yes |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `string` | Yes | The rails used to send the funds. |
| `object` | `string` | Yes | String representing the object's type. |
| `reversal_details` | `any` | No | Details describing when a ReceivedCredit may be reversed. |
| `status` | `string` | Yes | Status of the ReceivedCredit. |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReceivedCredit():create({
  amount = --[[ number ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  description = --[[ string ]],
  id = --[[ string ]],
  initiating_payment_method_details = --[[ table ]],
  linked_flows = --[[ table ]],
  livemode = --[[ boolean ]],
  network = --[[ string ]],
  object = --[[ string ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReceivedCredit():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ReceivedCredit():load({ id = "received_credit_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReceivedCreditEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReceivedDebitEntity

```lua
local received_debit = client:ReceivedDebit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Amount (in cents) transferred. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | Yes | An arbitrary string attached to the object. |
| `failure_code` | `string` | No | Reason for the failure. |
| `financial_account` | `string` | No | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `initiating_payment_method_details` | `table` | Yes |  |
| `linked_flows` | `table` | Yes |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `string` | Yes | The network used for the ReceivedDebit. |
| `object` | `string` | Yes | String representing the object's type. |
| `reversal_details` | `any` | No | Details describing when a ReceivedDebit might be reversed. |
| `status` | `string` | Yes | Status of the ReceivedDebit. |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReceivedDebit():create({
  amount = --[[ number ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  description = --[[ string ]],
  id = --[[ string ]],
  initiating_payment_method_details = --[[ table ]],
  linked_flows = --[[ table ]],
  livemode = --[[ boolean ]],
  network = --[[ string ]],
  object = --[[ string ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReceivedDebit():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ReceivedDebit():load({ id = "received_debit_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReceivedDebitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RefundEntity

```lua
local refund = client:Refund(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Amount, in cents (or local equivalent). |
| `balance_transaction` | `any` | No | Balance transaction that describes the impact on your account balance. |
| `charge` | `any` | No | ID of the charge that's refunded. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | No | ID of the customer of this refund. |
| `customer_account` | `string` | No | ID of the account of this refund. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `destination_details` | `table` | Yes |  |
| `failure_balance_transaction` | `any` | No | After the refund fails, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction. |
| `failure_reason` | `string` | No | Provides the reason for the refund failure. |
| `fee` | `any` | Yes | ID of the application fee that was refunded. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `instructions_email` | `string` | No | For payment methods without native refund support (for example, Konbini, PromptPay), provide an email address for the customer to receive refund instructions. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `table` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `any` | No | ID of the PaymentIntent that's refunded. |
| `payment_method` | `any` | No | ID of the payment method associated with this refund. |
| `pending_reason` | `string` | No | Provides the reason for why the refund is pending. |
| `presentment_details` | `table` | Yes |  |
| `reason` | `string` | No | Reason for the refund, which is either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`). |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this refund. |
| `source_transfer_reversal` | `any` | No | The transfer reversal that's associated with the refund. |
| `status` | `string` | No | Status of the refund. |
| `transfer_reversal` | `any` | No | This refers to the transfer reversal object if the accompanying transfer reverses. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Refund():create({
  id = --[[ string ]],
  amount = --[[ number ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  destination_details = --[[ table ]],
  fee = --[[ any ]],
  next_action = --[[ table ]],
  object = --[[ string ]],
  presentment_details = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Refund():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Refund():load({ id = "refund_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RefundEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RegistrationEntity

```lua
local registration = client:Registration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_from` | `number` | Yes | Time at which the registration becomes active. |
| `ae` | `table` | Yes |  |
| `al` | `table` | Yes |  |
| `am` | `table` | Yes |  |
| `ao` | `table` | Yes |  |
| `at` | `table` | Yes |  |
| `au` | `table` | Yes |  |
| `aw` | `table` | Yes |  |
| `az` | `table` | Yes |  |
| `ba` | `table` | Yes |  |
| `bb` | `table` | Yes |  |
| `bd` | `table` | Yes |  |
| `be` | `table` | Yes |  |
| `bf` | `table` | Yes |  |
| `bg` | `table` | Yes |  |
| `bh` | `table` | Yes |  |
| `bj` | `table` | Yes |  |
| `bs` | `table` | Yes |  |
| `by` | `table` | Yes |  |
| `ca` | `table` | Yes |  |
| `cd` | `table` | Yes |  |
| `ch` | `table` | Yes |  |
| `cl` | `table` | Yes |  |
| `cm` | `table` | Yes |  |
| `co` | `table` | Yes |  |
| `country` | `string` | Yes | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `country_options` | `table` | Yes |  |
| `cr` | `table` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `cv` | `table` | Yes |  |
| `cy` | `table` | Yes |  |
| `cz` | `table` | Yes |  |
| `de` | `table` | Yes |  |
| `dk` | `table` | Yes |  |
| `ec` | `table` | Yes |  |
| `ee` | `table` | Yes |  |
| `eg` | `table` | Yes |  |
| `es` | `table` | Yes |  |
| `et` | `table` | Yes |  |
| `expires_at` | `number` | No | If set, the registration stops being active at this time. |
| `fi` | `table` | Yes |  |
| `fr` | `table` | Yes |  |
| `gb` | `table` | Yes |  |
| `ge` | `table` | Yes |  |
| `gn` | `table` | Yes |  |
| `gr` | `table` | Yes |  |
| `hr` | `table` | Yes |  |
| `hu` | `table` | Yes |  |
| `id` | `table` | Yes | Unique identifier for the object. |
| `ie` | `table` | Yes |  |
| `in` | `table` | Yes |  |
| `is` | `table` | Yes |  |
| `it` | `table` | Yes |  |
| `jp` | `table` | Yes |  |
| `ke` | `table` | Yes |  |
| `kg` | `table` | Yes |  |
| `kh` | `table` | Yes |  |
| `kr` | `table` | Yes |  |
| `kz` | `table` | Yes |  |
| `la` | `table` | Yes |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `lk` | `table` | Yes |  |
| `lt` | `table` | Yes |  |
| `lu` | `table` | Yes |  |
| `lv` | `table` | Yes |  |
| `ma` | `table` | Yes |  |
| `md` | `table` | Yes |  |
| `me` | `table` | Yes |  |
| `mk` | `table` | Yes |  |
| `mr` | `table` | Yes |  |
| `mt` | `table` | Yes |  |
| `mx` | `table` | Yes |  |
| `my` | `table` | Yes |  |
| `ng` | `table` | Yes |  |
| `nl` | `table` | Yes |  |
| `no` | `table` | Yes |  |
| `np` | `table` | Yes |  |
| `nz` | `table` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `om` | `table` | Yes |  |
| `pe` | `table` | Yes |  |
| `ph` | `table` | Yes |  |
| `pl` | `table` | Yes |  |
| `pt` | `table` | Yes |  |
| `ro` | `table` | Yes |  |
| `rs` | `table` | Yes |  |
| `ru` | `table` | Yes |  |
| `sa` | `table` | Yes |  |
| `se` | `table` | Yes |  |
| `sg` | `table` | Yes |  |
| `si` | `table` | Yes |  |
| `sk` | `table` | Yes |  |
| `sn` | `table` | Yes |  |
| `sr` | `table` | Yes |  |
| `status` | `string` | Yes | The status of the registration. |
| `th` | `table` | Yes |  |
| `tj` | `table` | Yes |  |
| `tr` | `table` | Yes |  |
| `tw` | `table` | Yes |  |
| `tz` | `table` | Yes |  |
| `ua` | `table` | Yes |  |
| `ug` | `table` | Yes |  |
| `us` | `table` | Yes |  |
| `uy` | `table` | Yes |  |
| `uz` | `table` | Yes |  |
| `vn` | `table` | Yes |  |
| `za` | `table` | Yes |  |
| `zm` | `table` | Yes |  |
| `zw` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Registration():create({
  id = --[[ string ]],
  active_from = --[[ number ]],
  ae = --[[ table ]],
  al = --[[ table ]],
  am = --[[ table ]],
  ao = --[[ table ]],
  at = --[[ table ]],
  au = --[[ table ]],
  aw = --[[ table ]],
  az = --[[ table ]],
  ba = --[[ table ]],
  bb = --[[ table ]],
  bd = --[[ table ]],
  be = --[[ table ]],
  bf = --[[ table ]],
  bg = --[[ table ]],
  bh = --[[ table ]],
  bj = --[[ table ]],
  bs = --[[ table ]],
  by = --[[ table ]],
  ca = --[[ table ]],
  cd = --[[ table ]],
  ch = --[[ table ]],
  cl = --[[ table ]],
  cm = --[[ table ]],
  co = --[[ table ]],
  country = --[[ string ]],
  country_options = --[[ table ]],
  cr = --[[ table ]],
  created = --[[ number ]],
  cv = --[[ table ]],
  cy = --[[ table ]],
  cz = --[[ table ]],
  de = --[[ table ]],
  dk = --[[ table ]],
  ec = --[[ table ]],
  ee = --[[ table ]],
  eg = --[[ table ]],
  es = --[[ table ]],
  et = --[[ table ]],
  fi = --[[ table ]],
  fr = --[[ table ]],
  gb = --[[ table ]],
  ge = --[[ table ]],
  gn = --[[ table ]],
  gr = --[[ table ]],
  hr = --[[ table ]],
  hu = --[[ table ]],
  ie = --[[ table ]],
  ["in"] = --[[ table ]],
  is = --[[ table ]],
  it = --[[ table ]],
  jp = --[[ table ]],
  ke = --[[ table ]],
  kg = --[[ table ]],
  kh = --[[ table ]],
  kr = --[[ table ]],
  kz = --[[ table ]],
  la = --[[ table ]],
  livemode = --[[ boolean ]],
  lk = --[[ table ]],
  lt = --[[ table ]],
  lu = --[[ table ]],
  lv = --[[ table ]],
  ma = --[[ table ]],
  md = --[[ table ]],
  me = --[[ table ]],
  mk = --[[ table ]],
  mr = --[[ table ]],
  mt = --[[ table ]],
  mx = --[[ table ]],
  my = --[[ table ]],
  ng = --[[ table ]],
  nl = --[[ table ]],
  no = --[[ table ]],
  np = --[[ table ]],
  nz = --[[ table ]],
  object = --[[ string ]],
  om = --[[ table ]],
  pe = --[[ table ]],
  ph = --[[ table ]],
  pl = --[[ table ]],
  pt = --[[ table ]],
  ro = --[[ table ]],
  rs = --[[ table ]],
  ru = --[[ table ]],
  sa = --[[ table ]],
  se = --[[ table ]],
  sg = --[[ table ]],
  si = --[[ table ]],
  sk = --[[ table ]],
  sn = --[[ table ]],
  sr = --[[ table ]],
  status = --[[ string ]],
  th = --[[ table ]],
  tj = --[[ table ]],
  tr = --[[ table ]],
  tw = --[[ table ]],
  tz = --[[ table ]],
  ua = --[[ table ]],
  ug = --[[ table ]],
  us = --[[ table ]],
  uy = --[[ table ]],
  uz = --[[ table ]],
  vn = --[[ table ]],
  za = --[[ table ]],
  zm = --[[ table ]],
  zw = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Registration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Registration():load({ id = "registration_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegistrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReportRunEntity

```lua
local report_run = client:ReportRun(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `error` | `string` | No | If something should go wrong during the run, a message about the failure (populated when `status=failed`). |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | `true` if the report is run on live mode data and `false` if it is run on test mode data. |
| `object` | `string` | Yes | String representing the object's type. |
| `parameters` | `table` | Yes |  |
| `report_type` | `string` | Yes | The ID of the [report type](https://docs.stripe.com/reports/report-types) to run, such as `"balance.summary.1"`. |
| `result` | `any` | No | The file object representing the result of the report run (populated when `status=succeeded`). |
| `status` | `string` | Yes | Status of this report run. |
| `succeeded_at` | `number` | No | Timestamp at which this run successfully finished (populated when `status=succeeded`). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReportRun():create({
  created = --[[ number ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  parameters = --[[ table ]],
  report_type = --[[ string ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReportRun():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ReportRun():load({ id = "report_run_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportRunEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReportTypeEntity

```lua
local report_type = client:ReportType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_available_end` | `number` | Yes | Most recent time for which this Report Type is available. |
| `data_available_start` | `number` | Yes | Earliest time for which this Report Type is available. |
| `default_columns` | `table` | No | List of column names that are included by default when this Report Type gets run. |
| `id` | `string` | Yes | The [ID of the Report Type](https://docs.stripe.com/reporting/statements/api#available-report-types), such as `balance.summary.1`. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Yes | Human-readable name of the Report Type |
| `object` | `string` | Yes | String representing the object's type. |
| `updated` | `number` | Yes | When this Report Type was latest updated. |
| `version` | `number` | Yes | Version of the Report Type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReportType():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ReportType():load({ id = "report_type_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RequestEntity

```lua
local request = client:Request(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method` | `string` | Yes | The PaymentMethod to insert into the forwarded request. |
| `replacements` | `table` | Yes | The field kinds to be replaced in the forwarded request. |
| `request_context` | `any` | No | Context about the request from Stripe's servers to the destination endpoint. |
| `request_details` | `any` | No | The request that was sent to the destination endpoint. |
| `response_details` | `any` | No | The response that the destination endpoint returned to us. |
| `url` | `string` | No | The destination URL for the forwarded request. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Request():create({
  created = --[[ number ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  payment_method = --[[ string ]],
  replacements = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Request():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Request():load({ id = "request_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RequestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReversalEntity

```lua
local reversal = client:Reversal(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Amount, in cents (or local equivalent). |
| `balance_transaction` | `any` | No | Balance transaction that describes the impact on your account balance. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `destination_payment_refund` | `any` | No | Linked payment refund for the transfer reversal. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `source_refund` | `any` | No | ID of the refund responsible for the transfer reversal. |
| `transfer` | `any` | Yes | ID of the transfer that was reversed. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Reversal():create({
  transfer_id = --[[ string ]],
  amount = --[[ number ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  object = --[[ string ]],
  transfer = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Reversal():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Reversal():load({ id = "reversal_id", transfer_id = "transfer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReversalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReviewEntity

```lua
local review = client:Review(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing_zip` | `string` | No | The ZIP or postal code of the card used, if applicable. |
| `charge` | `any` | No | The charge associated with this review. |
| `closed_reason` | `string` | No | The reason the review was closed, or null if it has not yet been closed. |
| `created` | `number` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ip_address` | `string` | No | The IP address where the payment originated. |
| `ip_address_location` | `any` | No | Information related to the location of the payment. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `open` | `boolean` | Yes | If `true`, the review needs action. |
| `opened_reason` | `string` | Yes | The reason the review was opened. |
| `payment_intent` | `any` | No | The PaymentIntent ID associated with this review, if one exists. |
| `reason` | `string` | Yes | The reason the review is currently open or closed. |
| `session` | `any` | No | Information related to the browsing session of the user who initiated the payment. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Review():create({
  id = --[[ string ]],
  created = --[[ number ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  open = --[[ boolean ]],
  opened_reason = --[[ string ]],
  reason = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Review():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Review():load({ id = "review_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScheduledQueryRunEntity

```lua
local scheduled_query_run = client:ScheduledQueryRun(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `data_load_time` | `number` | Yes | When the query was run, Sigma contained a snapshot of your Stripe data at this time. |
| `error` | `table` | Yes |  |
| `file` | `any` | No | The file object representing the results of the query. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `result_available_until` | `number` | Yes | Time at which the result expires and is no longer available for download. |
| `sql` | `string` | Yes | SQL for the query. |
| `status` | `string` | Yes | The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise. |
| `title` | `string` | Yes | Title of the query. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ScheduledQueryRun():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ScheduledQueryRun():load({ id = "scheduled_query_run_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduledQueryRunEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SearchEntity

```lua
local search = client:Search(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_country` | `string` | No | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `string` | No | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `table` | No | The account tax IDs associated with the invoice. |
| `active` | `boolean` | Yes | Whether the price can be used for new purchases. |
| `address` | `any` | No | The customer's billing address. |
| `allowed_payment_method_types` | `table` | No | The list of payment method types allowed for use with this payment. |
| `amount` | `number` | Yes | Amount intended to be collected by this payment. |
| `amount_capturable` | `number` | No | Amount that can be captured from this PaymentIntent. |
| `amount_captured` | `number` | Yes | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_details` | `any` | No |  |
| `amount_due` | `number` | Yes | Final amount due at this time for this invoice. |
| `amount_overpaid` | `number` | Yes | Amount that was overpaid on the invoice. |
| `amount_paid` | `number` | Yes | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | `number` | Yes | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_received` | `number` | No | Amount that this PaymentIntent collects. |
| `amount_refunded` | `number` | Yes | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `amount_remaining` | `number` | Yes | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | `number` | Yes | This is the sum of all the shipping amounts. |
| `application` | `any` | No | ID of the Connect application that created the charge. |
| `application_fee` | `any` | No | The application fee (if any) for the charge. |
| `application_fee_amount` | `number` | No | The amount of the application fee (if any) requested for the charge. |
| `application_fee_percent` | `number` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `attempt_count` | `number` | Yes | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | `boolean` | Yes | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | `boolean` | Yes | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_payment_methods` | `any` | No | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `automatic_tax` | `table` | Yes |  |
| `automatically_finalizes_at` | `number` | No | The time when this invoice is currently scheduled to be automatically finalized. |
| `balance` | `number` | No | The current balance, if any, that's stored on the customer in their default currency. |
| `balance_transaction` | `any` | No | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_cycle_anchor` | `number` | Yes | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `any` | No | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_details` | `table` | Yes |  |
| `billing_mode` | `table` | Yes | The billing mode of the subscription. |
| `billing_reason` | `string` | No | Indicates the reason why the invoice was created. |
| `billing_schedules` | `table` | Yes | Billing schedules for this subscription. |
| `billing_scheme` | `string` | Yes | Describes how to compute the price per period. |
| `billing_thresholds` | `any` | No | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `business_name` | `string` | No | The customer's business name. |
| `calculated_statement_descriptor` | `string` | No | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `cancel_at` | `number` | No | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | `boolean` | Yes | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | `number` | No | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_details` | `any` | No | Details about why this subscription was cancelled |
| `cancellation_reason` | `string` | No | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | `string` | No | Controls when the funds will be captured from the customer's account. |
| `captured` | `boolean` | Yes | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `cash_balance` | `any` | No | The current funds being held by Stripe on behalf of the customer. |
| `client_secret` | `string` | No | The client secret of this PaymentIntent. |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_method` | `string` | No | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `confirmation_secret` | `any` | No | The confirmation secret associated with this invoice. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | `table` | No | Prices defined in each available currency option. |
| `custom_fields` | `table` | No | Custom fields displayed on the invoice. |
| `custom_unit_amount` | `any` | No | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `customer` | `any` | No | ID of the customer this charge is for if one exists. |
| `customer_account` | `string` | No | The ID of an Account representing a customer. |
| `customer_address` | `any` | No | The customer's address. |
| `customer_email` | `string` | No | The customer's email. |
| `customer_name` | `string` | No | The customer's name. |
| `customer_phone` | `string` | No | The customer's phone number. |
| `customer_shipping` | `any` | No | The customer's shipping information. |
| `customer_tax_exempt` | `string` | No | The customer's tax exempt status. |
| `customer_tax_ids` | `table` | No | The customer's tax IDs. |
| `days_until_due` | `number` | No | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | `any` | No | ID of the default payment method for the invoice. |
| `default_price` | `any` | No | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `default_source` | `any` | No | ID of the default payment source for the customer. |
| `default_tax_rates` | `table` | Yes | The tax rates applied to this invoice, if any. |
| `delinquent` | `boolean` | No | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discount` | `any` | No | Describes the current discount active on the customer, if there is one. |
| `discounts` | `table` | Yes | The discounts applied to the invoice. |
| `disputed` | `boolean` | Yes | Whether the charge has been disputed. |
| `due_date` | `number` | No | The date on which payment for this invoice is due. |
| `effective_at` | `number` | No | The date when this invoice is in effect. |
| `email` | `string` | No | The customer's email address. |
| `ended_at` | `number` | No | If the subscription has ended, the date the subscription ended. |
| `ending_balance` | `number` | No | Ending customer balance after the invoice is finalized. |
| `excluded_payment_method_types` | `table` | No | The list of payment method types to exclude from use with this payment. |
| `failure_balance_transaction` | `any` | No | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | `string` | No | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | `string` | No | Message to user further explaining reason for charge failure if available. |
| `footer` | `string` | No | Footer displayed on the invoice. |
| `fraud_details` | `any` | No | Information on fraud assessments for the charge. |
| `from_invoice` | `any` | No | Details of the invoice that was cloned. |
| `hooks` | `table` | No |  |
| `hosted_invoice_url` | `string` | No | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `images` | `table` | Yes | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `individual_name` | `string` | No | The customer's individual name. |
| `invoice_credit_balance` | `table` | No | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_pdf` | `string` | No | The link to download the PDF for the invoice. |
| `invoice_prefix` | `string` | No | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `table` | No |  |
| `issuer` | `table` | Yes |  |
| `items` | `table` | Yes | List of subscription items, each with an attached price. |
| `last_finalization_error` | `any` | No | The error encountered during the previous attempt to finalize the invoice. |
| `last_payment_error` | `any` | No | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `any` | No | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `latest_invoice` | `any` | No | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `latest_revision` | `any` | No | The ID of the most recent non-draft revision of this invoice |
| `lines` | `table` | Yes | The individual line items that make up the invoice. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | No | A lookup key used to retrieve prices dynamically from a static string. |
| `managed_payments` | `any` | No | Settings for Managed Payments. |
| `marketing_features` | `table` | Yes | A list of up to 15 marketing features for this product. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | The customer's full name or business name. |
| `next_action` | `any` | No | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `next_invoice_sequence` | `number` | No | The suffix of the customer's next invoice number (for example, 0001). |
| `next_payment_attempt` | `number` | No | The time at which payment will next be attempted. |
| `next_pending_invoice_item_invoice` | `number` | No | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `nickname` | `string` | No | A brief description of the price, hidden from customers. |
| `number` | `string` | No | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | `any` | No | Details about whether the payment was accepted, and why. |
| `package_dimensions` | `any` | No | The dimensions of this product for shipping purposes. |
| `paid` | `boolean` | Yes | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `parent` | `any` | No | The parent that generated this invoice |
| `pause_collection` | `any` | No | If specified, payment collection for this subscription will be paused. |
| `payment_details` | `table` | No |  |
| `payment_intent` | `any` | No | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `string` | No | ID of the payment method used in this charge. |
| `payment_method_configuration_details` | `any` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_details` | `any` | No | Details about the payment method at the time of the transaction. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `table` | No | The list of payment method types (e.g. |
| `payment_record` | `any` | No | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `payment_settings` | `table` | Yes | Payment settings passed on to invoices created by the subscription. |
| `payments` | `table` | Yes | Payments for this invoice. |
| `pending_invoice_item_interval` | `any` | No | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `any` | No | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `any` | No | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `period_end` | `number` | Yes | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | `number` | Yes | The earliest timestamp at which invoice items can be associated with this invoice. |
| `phone` | `string` | No | The customer's phone number. |
| `post_payment_credit_notes_amount` | `number` | Yes | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | `number` | Yes | Total amount of all pre-payment credit notes issued for this invoice. |
| `preferred_locales` | `table` | No | The customer's preferred locales (languages), ordered by preference. |
| `presentment_details` | `table` | Yes |  |
| `processing` | `any` | No | If present, this property tells you about the processing state of the payment. |
| `product` | `any` | Yes | The ID of the product this price is associated with. |
| `radar_options` | `table` | No | Options to configure Radar. |
| `receipt_email` | `string` | No | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `string` | No | This is the URL to view the receipt for this charge. |
| `recurring` | `any` | No | The recurring components of a price such as `interval` and `usage_type`. |
| `refunded` | `boolean` | Yes | Whether the charge has been fully refunded. |
| `refunds` | `table` | Yes | A list of refunds that have been applied to the charge. |
| `rendering` | `any` | No | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `review` | `any` | No | ID of the review associated with this charge if one exists. |
| `schedule` | `any` | No | The schedule attached to the subscription |
| `setup_future_usage` | `string` | No | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `shippable` | `boolean` | No | Whether this product is shipped (i.e., physical goods). |
| `shipping` | `any` | No | Shipping information for the charge. |
| `shipping_cost` | `any` | No | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | `any` | No | Shipping details for the invoice. |
| `source_transfer` | `any` | No | The transfer ID which created this charge. |
| `sources` | `table` | Yes | The customer's payment sources, if any. |
| `start_date` | `number` | Yes | Date when the subscription was first created. |
| `starting_balance` | `number` | Yes | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | `string` | No | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | `string` | No | Provides information about a card charge. |
| `status` | `string` | Yes | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `status_details` | `table` | No | Describes changes to the subscription's status. |
| `status_transitions` | `table` | Yes |  |
| `subscriptions` | `table` | Yes | The customer's current subscriptions, if any. |
| `subtotal` | `number` | Yes | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `number` | No | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `tax` | `table` | Yes |  |
| `tax_behavior` | `string` | No | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tax_code` | `any` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `any` | No | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `tax_exempt` | `string` | No | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `table` | Yes | The customer's tax IDs. |
| `test_clock` | `any` | No | ID of the test clock that this customer belongs to. |
| `threshold_reason` | `table` | Yes |  |
| `tiers` | `table` | No | Each element represents a pricing tier. |
| `tiers_mode` | `string` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `total` | `number` | Yes | Total after discounts and taxes. |
| `total_discount_amounts` | `table` | No | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `number` | No | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `table` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `table` | No | The aggregate tax information of all line items. |
| `transfer` | `any` | No | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `transfer_data` | `any` | No | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `transfer_group` | `string` | No | A string that identifies this transaction as part of a group. |
| `transform_quantity` | `any` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_end` | `number` | No | If the subscription has a trial, the end of that trial. |
| `trial_settings` | `any` | No | Settings related to subscription trials. |
| `trial_start` | `number` | No | If the subscription has a trial, the beginning of that trial. |
| `type` | `string` | Yes | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | `number` | No | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | `string` | No | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `unit_label` | `string` | No | A label that represents units of this product. |
| `updated` | `number` | Yes | Time at which the object was last updated. |
| `url` | `string` | No | A URL of a publicly-accessible webpage for this product. |
| `webhooks_delivered_at` | `number` | No | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Search():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretEntity

```lua
local secret = client:Secret(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `deleted` | `boolean` | No | If true, indicates that this secret has been deleted |
| `expires_at` | `number` | No | The Unix timestamp for the expiry time of the secret, after which the secret deletes. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Yes | A name for the secret that's unique within the scope. |
| `object` | `string` | Yes | String representing the object's type. |
| `payload` | `string` | No | The plaintext secret value to be stored. |
| `scope` | `table` | Yes |  |
| `type` | `string` | Yes | The secret scope type. |
| `user` | `string` | No | The user ID, if type is set to "user" |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Secret():create({
  created = --[[ number ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  name = --[[ string ]],
  object = --[[ string ]],
  scope = --[[ table ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Secret():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Secret():load({ name = "name", scope = {} })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SessionEntity

```lua
local session = client:Session(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `any` | No | The account holder for whom accounts are collected in this session. |
| `accounts` | `table` | Yes | The accounts that were collected as part of this Session. |
| `adaptive_pricing` | `any` | No | Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing). |
| `after_expiration` | `any` | No | When set, provides configuration for actions to take if this Checkout Session expires. |
| `allow_promotion_codes` | `boolean` | No | Enables user redeemable promotion codes. |
| `allowed_payment_method_types` | `table` | No | A list of the types of payment methods (e.g., `card`) this Checkout Session can accept. |
| `amount_subtotal` | `number` | No | Total of all items before discounts or taxes are applied. |
| `amount_total` | `number` | No | Total of all items after discounts and taxes are applied. |
| `automatic_tax` | `table` | Yes |  |
| `bank_account_token` | `table` | Yes | Tokenization is the process Stripe uses to collect sensitive card or bank account details, or personally identifiable information (PII), directly from your customers in a secure manner. |
| `billing_address_collection` | `string` | No | Describes whether Checkout should collect the customer's billing address. |
| `branding_settings` | `table` | Yes |  |
| `cancel_url` | `string` | No | If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. |
| `client_reference_id` | `string` | No | A unique string to reference the Checkout Session. |
| `client_secret` | `string` | No | The client secret of your Checkout Session. |
| `collected_information` | `any` | No | Information about the customer collected within the Checkout Session. |
| `configuration` | `any` | Yes | The configuration used by this session, describing the features available. |
| `consent` | `any` | No | Results of `consent_collection` for this session. |
| `consent_collection` | `any` | No | When set, provides configuration for the Checkout Session to gather active consent from customers. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_conversion` | `any` | No | Currency conversion details for [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing) sessions created before 2025-03-31. |
| `custom_fields` | `table` | Yes | Collect additional information from your customer using custom fields. |
| `custom_text` | `table` | Yes |  |
| `customer` | `any` | No | The ID of the customer for this Session. |
| `customer_account` | `string` | No | The ID of the account for this Session. |
| `customer_creation` | `string` | No | Configure whether a Checkout Session creates a Customer when the Checkout Session completes. |
| `customer_details` | `any` | No | The customer details including the customer's tax exempt status and the customer's tax IDs. |
| `customer_email` | `string` | No | If provided, this value will be used when the Customer object is created. |
| `discounts` | `table` | No | List of coupons and promotion codes attached to the Checkout Session. |
| `excluded_payment_method_types` | `table` | No | A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session. |
| `expires_at` | `number` | Yes | The timestamp at which the Checkout Session will expire. |
| `filters` | `table` | No |  |
| `flow` | `any` | No | Information about a specific flow for the customer to go through. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `integration_identifier` | `string` | No | The integration identifier for this Checkout Session. |
| `invoice` | `any` | No | ID of the invoice created by the Checkout Session, if it exists. |
| `invoice_creation` | `any` | No | Details on the state of invoice creation for the Checkout Session. |
| `limits` | `table` | Yes |  |
| `line_items` | `table` | Yes | The line items purchased by the customer. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `locale` | `string` | No | The IETF language tag of the locale Checkout is displayed in. |
| `managed_payments` | `any` | No | Settings for Managed Payments for this Checkout Session and resulting [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/object). |
| `manual_entry` | `table` | No |  |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mode` | `string` | Yes | The mode of the Checkout Session. |
| `name_collection` | `table` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `string` | No | The account for which the session was created on behalf of. |
| `optional_items` | `table` | No | The optional items presented to the customer at checkout. |
| `origin_context` | `string` | No | Where the user is coming from. |
| `payment_intent` | `any` | No | The ID of the PaymentIntent for Checkout Sessions in `payment` mode. |
| `payment_link` | `any` | No | The ID of the Payment Link that created this Session. |
| `payment_method_collection` | `string` | No | Configure whether a Checkout Session should collect a payment method for sessions with mode `payment`. |
| `payment_method_configuration_details` | `any` | No | Information about the payment method configuration used for this Checkout session if using dynamic payment methods. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for the PaymentIntent or SetupIntent of this CheckoutSession. |
| `payment_method_types` | `table` | Yes | A list of the types of payment methods (e.g. |
| `payment_status` | `string` | Yes | The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`. |
| `permissions` | `any` | No | This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object. |
| `phone_number_collection` | `table` | Yes |  |
| `prefetch` | `table` | No | Data features requested to be retrieved upon account creation. |
| `presentment_details` | `table` | Yes |  |
| `recovered_from` | `string` | No | The ID of the original expired Checkout Session that triggered the recovery flow. |
| `redirect_on_completion` | `string` | No | This parameter applies to `ui_mode: embedded_page`. |
| `return_url` | `string` | No | Applies to Checkout Sessions with `ui_mode: embedded_page` or `ui_mode: elements`. |
| `saved_payment_method_options` | `any` | No | Controls saved payment method settings for the session. |
| `setup_intent` | `any` | No | The ID of the SetupIntent for Checkout Sessions in `setup` mode. |
| `shipping_address_collection` | `any` | No | When set, provides configuration for Checkout to collect a shipping address from a customer. |
| `shipping_cost` | `any` | No | The details of the customer cost of shipping, including the customer chosen ShippingRate. |
| `shipping_options` | `table` | Yes | The shipping rate options applied to this Session. |
| `status` | `string` | No | The status of the Checkout Session, one of `open`, `complete`, or `expired`. |
| `submit_type` | `string` | No | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. |
| `subscription` | `any` | No | The ID of the [Subscription](https://docs.stripe.com/api/subscriptions) for Checkout Sessions in `subscription` mode. |
| `success_url` | `string` | No | The URL the customer will be directed to after the payment or subscription creation is successful. |
| `tax_id_collection` | `table` | Yes |  |
| `total_details` | `number` | No | Tax and discount details for the computed total amount. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Session():create({
  id = --[[ string ]],
  accounts = --[[ table ]],
  automatic_tax = --[[ table ]],
  bank_account_token = --[[ table ]],
  branding_settings = --[[ table ]],
  configuration = --[[ any ]],
  created = --[[ number ]],
  custom_fields = --[[ table ]],
  custom_text = --[[ table ]],
  expires_at = --[[ number ]],
  limits = --[[ table ]],
  line_items = --[[ table ]],
  livemode = --[[ boolean ]],
  mode = --[[ string ]],
  object = --[[ string ]],
  payment_method_types = --[[ table ]],
  payment_status = --[[ string ]],
  phone_number_collection = --[[ table ]],
  presentment_details = --[[ table ]],
  shipping_options = --[[ table ]],
  tax_id_collection = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Session():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Session():load({ session = "session" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SessionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SettingEntity

```lua
local setting = client:Setting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `defaults` | `table` | Yes |  |
| `head_office` | `any` | No | The place where your business is located. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The status of the Tax `Settings`. |
| `status_details` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Setting():create({
  defaults = --[[ table ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  status = --[[ string ]],
  status_details = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Setting():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SettlementEntity

```lua
local settlement = client:Settlement(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Settlement():create({
  id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Settlement():load({ id = "settlement_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SettlementEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SetupAttemptEntity

```lua
local setup_attempt = client:SetupAttempt(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `any` | No | The value of [application](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation. |
| `attach_to_self` | `boolean` | No | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer` | `any` | No | The value of [customer](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation. |
| `customer_account` | `string` | No | The value of [customer_account](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer_account) on the SetupIntent at the time of this confirmation. |
| `flow_directions` | `table` | No | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The value of [on_behalf_of](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation. |
| `payment_method` | `any` | Yes | ID of the payment method used with this SetupAttempt. |
| `payment_method_details` | `table` | Yes |  |
| `setup_error` | `any` | No | The error encountered during this attempt to confirm the SetupIntent, if any. |
| `setup_intent` | `any` | Yes | ID of the SetupIntent that this attempt belongs to. |
| `status` | `string` | Yes | Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`. |
| `usage` | `string` | Yes | The value of [usage](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SetupAttempt():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SetupAttemptEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SetupIntentEntity

```lua
local setup_intent = client:SetupIntent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_payment_method_types` | `table` | No | The list of payment method types to allow for this SetupIntent. |
| `application` | `any` | No | ID of the Connect application that created the SetupIntent. |
| `attach_to_self` | `boolean` | No | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `automatic_payment_methods` | `any` | No | Settings for dynamic payment methods compatible with this Setup Intent |
| `cancellation_reason` | `string` | No | Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`. |
| `client_secret` | `string` | No | The client secret of this SetupIntent. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer` | `any` | No | ID of the Customer this SetupIntent belongs to, if one exists. |
| `customer_account` | `string` | No | ID of the Account this SetupIntent belongs to, if one exists. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | `table` | No | Payment method types that are excluded from this SetupIntent. |
| `flow_directions` | `table` | No | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last_setup_error` | `any` | No | The error encountered in the previous SetupIntent confirmation. |
| `latest_attempt` | `any` | No | The most recent SetupAttempt for this SetupIntent. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | No |  |
| `mandate` | `any` | No | ID of the multi use Mandate generated by the SetupIntent. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `any` | No | If present, this property tells you what actions you need to take in order for your customer to continue payment setup. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) for which the setup is intended. |
| `payment_method` | `any` | No | ID of the payment method used with this SetupIntent. |
| `payment_method_configuration_details` | `any` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this Setup Intent. |
| `payment_method_options` | `any` | No | Payment method-specific configuration for this SetupIntent. |
| `payment_method_types` | `table` | Yes | The list of payment method types (e.g. |
| `single_use_mandate` | `any` | No | ID of the single_use Mandate generated by the SetupIntent. |
| `status` | `string` | Yes | [Status](https://docs.stripe.com/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`. |
| `usage` | `string` | Yes | Indicates how the payment method is intended to be used in the future. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SetupIntent():create({
  id = --[[ string ]],
  created = --[[ number ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  payment_method_types = --[[ table ]],
  status = --[[ string ]],
  usage = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SetupIntent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SetupIntent():load({ id = "setup_intent_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SetupIntentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ShippingRateEntity

```lua
local shipping_rate = client:ShippingRate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the shipping rate can be used for new purchases. |
| `created` | `number` | Yes | Time at which the object was created. |
| `delivery_estimate` | `any` | No | The estimated range for how long shipping will take, meant to be displayable to the customer. |
| `display_name` | `string` | No | The name of the shipping rate, meant to be displayable to the customer. |
| `fixed_amount` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `tax_behavior` | `string` | No | Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. |
| `tax_code` | `any` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `type` | `string` | Yes | The type of calculation to use on the shipping rate. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ShippingRate():create({
  id = --[[ string ]],
  active = --[[ boolean ]],
  created = --[[ number ]],
  fixed_amount = --[[ table ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ShippingRate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ShippingRate():load({ id = "shipping_rate_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShippingRateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SigmaApiQueryEntity

```lua
local sigma_api_query = client:SigmaApiQuery(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Yes | The name of the query. |
| `object` | `string` | Yes | String representing the object's type. |
| `sql` | `string` | Yes | The sql statement for the query. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SigmaApiQuery():create({
  id = --[[ string ]],
  created = --[[ number ]],
  livemode = --[[ boolean ]],
  name = --[[ string ]],
  object = --[[ string ]],
  sql = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SigmaApiQueryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SourceEntity

```lua
local source = client:Source(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ach_credit_transfer` | `table` | No |  |
| `ach_debit` | `table` | No |  |
| `acss_debit` | `table` | No |  |
| `alipay` | `table` | No |  |
| `allow_redisplay` | `boolean` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `amount` | `number` | No | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. |
| `au_becs_debit` | `table` | No |  |
| `bancontact` | `table` | No |  |
| `card` | `table` | No |  |
| `card_present` | `table` | No |  |
| `client_secret` | `string` | Yes | The client secret of the source. |
| `code_verification` | `table` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. |
| `customer` | `string` | No | The ID of the customer to which this source is attached. |
| `data` | `table` | Yes | Details about each object. |
| `eps` | `table` | No |  |
| `flow` | `string` | Yes | The authentication `flow` of the source. |
| `giropay` | `table` | No |  |
| `has_more` | `boolean` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ideal` | `table` | No |  |
| `klarna` | `table` | No |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `multibanco` | `table` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `owner` | `any` | No | Information about the owner of the payment instrument that may be used or required by particular source types. |
| `p24` | `table` | No |  |
| `receiver` | `table` | Yes |  |
| `redirect` | `table` | Yes |  |
| `sepa_debit` | `table` | No |  |
| `sofort` | `table` | No |  |
| `source_order` | `table` | Yes |  |
| `statement_descriptor` | `string` | No | Extra information about a source. |
| `status` | `string` | Yes | The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. |
| `three_d_secure` | `table` | No |  |
| `type` | `string` | Yes | The `type` of the source. |
| `url` | `string` | Yes | The URL where this list can be accessed. |
| `usage` | `string` | No | Either `reusable` or `single_use`. |
| `wechat` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Source():create({
  id = --[[ string ]],
  client_secret = --[[ string ]],
  code_verification = --[[ table ]],
  created = --[[ number ]],
  data = --[[ table ]],
  flow = --[[ string ]],
  has_more = --[[ boolean ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  receiver = --[[ table ]],
  redirect = --[[ table ]],
  source_order = --[[ table ]],
  status = --[[ string ]],
  type = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Source():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Source():load({ id = "source_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Source():remove({ id = "source_id", customer_id = "customer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SourceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SourceMandateNotificationEntity

```lua
local source_mandate_notification = client:SourceMandateNotification(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `table` | No |  |
| `amount` | `number` | No | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. |
| `bacs_debit` | `table` | No |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `reason` | `string` | Yes | The reason of the mandate notification. |
| `sepa_debit` | `table` | No |  |
| `source` | `table` | Yes | `Source` objects allow you to accept a variety of payment methods. |
| `status` | `string` | Yes | The status of the mandate notification. |
| `type` | `string` | Yes | The type of source this mandate notification is attached to. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SourceMandateNotification():load({ id = "source_mandate_notification_id", source_id = "source_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SourceMandateNotificationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SourceTransactionEntity

```lua
local source_transaction = client:SourceTransaction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ach_credit_transfer` | `table` | No |  |
| `amount` | `number` | Yes | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver. |
| `chf_credit_transfer` | `table` | No |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `gbp_credit_transfer` | `table` | No |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `paper_check` | `table` | No |  |
| `sepa_credit_transfer` | `table` | No |  |
| `source` | `string` | Yes | The ID of the source this transaction is attached to. |
| `status` | `string` | Yes | The status of the transaction, one of `succeeded`, `pending`, or `failed`. |
| `type` | `string` | Yes | The type of source this transaction is attached to. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SourceTransaction():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SourceTransaction():load({ id = "source_transaction_id", source_id = "source_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SourceTransactionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionEntity

```lua
local subscription = client:Subscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `any` | No | ID of the Connect Application that created the subscription. |
| `application_fee_percent` | `number` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `table` | Yes |  |
| `billing_cycle_anchor` | `number` | Yes | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `any` | No | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_mode` | `table` | Yes | The billing mode of the subscription. |
| `billing_schedules` | `table` | Yes | Billing schedules for this subscription. |
| `billing_thresholds` | `any` | No | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `cancel_at` | `number` | No | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | `boolean` | Yes | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | `number` | No | If the subscription has been canceled, the date of that cancellation. |
| `cancellation_details` | `any` | No | Details about why this subscription was cancelled |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | ID of the customer who owns the subscription. |
| `customer_account` | `string` | No | ID of the account representing the customer who owns the subscription. |
| `days_until_due` | `number` | No | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | `any` | No | ID of the default payment method for the subscription. |
| `default_source` | `any` | No | ID of the default payment source for the subscription. |
| `default_tax_rates` | `table` | No | The tax rates that will apply to any subscription item that does not have `tax_rates` set. |
| `description` | `string` | No | The subscription's description, meant to be displayable to the customer. |
| `discounts` | `table` | Yes | The discounts applied to the subscription. |
| `ended_at` | `number` | No | If the subscription has ended, the date the subscription ended. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice_settings` | `table` | Yes |  |
| `items` | `table` | Yes | List of subscription items, each with an attached price. |
| `latest_invoice` | `any` | No | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | No | Settings for Managed Payments for this Subscription and resulting [Invoices](/api/invoices/object) and [PaymentIntents](/api/payment_intents/object). |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_pending_invoice_item_invoice` | `number` | No | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) the charge was made on behalf of for charges associated with this subscription. |
| `pause_collection` | `any` | No | If specified, payment collection for this subscription will be paused. |
| `payment_settings` | `any` | No | Payment settings passed on to invoices created by the subscription. |
| `pending_invoice_item_interval` | `any` | No | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `any` | No | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `any` | No | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `presentment_details` | `table` | Yes |  |
| `schedule` | `any` | No | The schedule attached to the subscription |
| `start_date` | `number` | Yes | Date when the subscription was first created. |
| `status` | `string` | Yes | Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`. |
| `status_details` | `table` | Yes | Describes changes to the subscription's status. |
| `test_clock` | `any` | No | ID of the test clock this subscription belongs to. |
| `transfer_data` | `any` | No | The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices. |
| `trial_end` | `number` | No | If the subscription has a trial, the end of that trial. |
| `trial_settings` | `any` | No | Settings related to subscription trials. |
| `trial_start` | `number` | No | If the subscription has a trial, the beginning of that trial. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Subscription():create({
  id = --[[ string ]],
  automatic_tax = --[[ table ]],
  billing_cycle_anchor = --[[ number ]],
  billing_mode = --[[ table ]],
  billing_schedules = --[[ table ]],
  cancel_at_period_end = --[[ boolean ]],
  collection_method = --[[ string ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  customer = --[[ any ]],
  discounts = --[[ table ]],
  invoice_settings = --[[ table ]],
  items = --[[ table ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  presentment_details = --[[ table ]],
  start_date = --[[ number ]],
  status = --[[ string ]],
  status_details = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Subscription():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Subscription():load({ id = "subscription_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Subscription():remove({ id = "subscription_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionItemEntity

```lua
local subscription_item = client:SubscriptionItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billed_until` | `number` | No | The time period the subscription item has been billed for. |
| `billing_thresholds` | `any` | No | Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period |
| `created` | `number` | Yes | Time at which the object was created. |
| `current_period_end` | `number` | Yes | The end time of this subscription item's current billing period. |
| `current_period_start` | `number` | Yes | The start time of this subscription item's current billing period. |
| `current_trial` | `any` | No | The current trial that is applied to this subscription item. |
| `discounts` | `table` | Yes | The discounts applied to the subscription item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `price` | `table` | Yes | Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products. |
| `quantity` | `number` | No | The [quantity](https://docs.stripe.com/subscriptions/quantities) of the plan to which the customer should be subscribed. |
| `subscription` | `string` | Yes | The `subscription` this `subscription_item` belongs to. |
| `tax_rates` | `table` | No | The tax rates which apply to this `subscription_item`. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionItem():create({
  id = --[[ string ]],
  created = --[[ number ]],
  current_period_end = --[[ number ]],
  current_period_start = --[[ number ]],
  discounts = --[[ table ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  price = --[[ table ]],
  subscription = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriptionItem():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SubscriptionItem():load({ id = "subscription_item_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionScheduleEntity

```lua
local subscription_schedule = client:SubscriptionSchedule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `any` | No | ID of the Connect Application that created the schedule. |
| `billing_mode` | `table` | Yes | The billing mode of the subscription. |
| `canceled_at` | `number` | No | Time at which the subscription schedule was canceled. |
| `completed_at` | `number` | No | Time at which the subscription schedule was completed. |
| `created` | `number` | Yes | Time at which the object was created. |
| `current_phase` | `any` | No | Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`. |
| `customer` | `any` | Yes | ID of the customer who owns the subscription schedule. |
| `customer_account` | `string` | No | ID of the account who owns the subscription schedule. |
| `default_settings` | `table` | Yes |  |
| `end_behavior` | `string` | Yes | Behavior of the subscription schedule and underlying subscription when it ends. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `pause_schedules` | `table` | No | The pause schedules for this subscription schedule. |
| `phases` | `table` | Yes | Configuration for the subscription schedule's phases. |
| `released_at` | `number` | No | Time at which the subscription schedule was released. |
| `released_subscription` | `string` | No | ID of the subscription once managed by the subscription schedule (if it is released). |
| `status` | `string` | Yes | The present status of the subscription schedule. |
| `subscription` | `any` | No | ID of the subscription managed by the subscription schedule. |
| `test_clock` | `any` | No | ID of the test clock this subscription schedule belongs to. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionSchedule():create({
  id = --[[ string ]],
  billing_mode = --[[ table ]],
  created = --[[ number ]],
  customer = --[[ any ]],
  default_settings = --[[ table ]],
  end_behavior = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  phases = --[[ table ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriptionSchedule():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SubscriptionSchedule():load({ id = "subscription_schedule_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionScheduleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SupplierEntity

```lua
local supplier = client:Supplier(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the object. |
| `info_url` | `string` | Yes | Link to a webpage to learn more about the supplier. |
| `livemode` | `boolean` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `locations` | `table` | Yes | The locations in which this supplier operates. |
| `name` | `string` | Yes | Name of this carbon removal supplier. |
| `object` | `string` | Yes | String representing the object’s type. |
| `removal_pathway` | `string` | Yes | The scientific pathway used for carbon removal. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Supplier():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Supplier():load({ id = "supplier_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SupplierEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TaxCodeEntity

```lua
local tax_code = client:TaxCode(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TaxCode():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TaxCode():load({ id = "tax_code_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaxCodeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TaxIdEntity

```lua
local tax_id = client:TaxId(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `string` | No | Two-letter ISO code representing the country of the tax ID. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer` | `any` | No | ID of the customer. |
| `customer_account` | `string` | No | ID of the Account representing the customer. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `owner` | `any` | No | The account or customer the tax ID belongs to. |
| `type` | `string` | Yes | Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`,… |
| `value` | `string` | Yes | Value of the tax ID. |
| `verification` | `any` | No | Tax ID verification information. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TaxId():create({
  created = --[[ number ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  type = --[[ string ]],
  value = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TaxId():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TaxId():load({ id = "tax_id_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TaxId():remove({ id = "tax_id_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaxIdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TaxRateEntity

```lua
local tax_rate = client:TaxRate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Defaults to `true`. |
| `country` | `string` | No | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | `number` | Yes | Time at which the object was created. |
| `description` | `string` | No | An arbitrary string attached to the tax rate for your internal use only. |
| `display_name` | `string` | Yes | The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page. |
| `effective_percentage` | `number` | No | Actual/effective tax rate percentage out of 100. |
| `flat_amount` | `any` | No | The amount of the tax rate when the `rate_type` is `flat_amount`. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `inclusive` | `boolean` | Yes | This specifies if the tax rate is inclusive or exclusive. |
| `jurisdiction` | `string` | No | The jurisdiction for the tax rate. |
| `jurisdiction_level` | `string` | No | The level of the jurisdiction that imposes this tax rate. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `percentage` | `number` | Yes | Tax rate percentage out of 100. |
| `rate_type` | `string` | No | Indicates the type of tax rate applied to the taxable amount. |
| `state` | `string` | No | [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. |
| `tax_type` | `string` | No | The high-level tax type, such as `vat` or `sales_tax`. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TaxRate():create({
  id = --[[ string ]],
  active = --[[ boolean ]],
  created = --[[ number ]],
  display_name = --[[ string ]],
  inclusive = --[[ boolean ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  percentage = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TaxRate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TaxRate():load({ id = "tax_rate_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaxRateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TestClockEntity

```lua
local test_clock = client:TestClock(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advancing` | `table` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `deletes_after` | `number` | Yes | Time at which this clock is scheduled to auto delete. |
| `frozen_time` | `number` | Yes | Time at which all objects belonging to this clock are frozen. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | No | The custom name supplied at creation. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The status of the Test Clock. |
| `status_details` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TestClock():create({
  advancing = --[[ table ]],
  created = --[[ number ]],
  deletes_after = --[[ number ]],
  frozen_time = --[[ number ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  status = --[[ string ]],
  status_details = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TestClock():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TestClock():load({ id = "test_clock_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TestClock():remove({ id = "test_clock_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TestClockEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TokenEntity

```lua
local token = client:Token(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bank_account` | `table` | Yes | These bank accounts are payment methods on `Customer` objects. |
| `card` | `any` | Yes | Card associated with this token. |
| `client_ip` | `string` | No | IP address of the client that generates the token. |
| `created` | `number` | Yes | Time at which the object was created. |
| `device_fingerprint` | `string` | No | The hashed ID derived from the device ID from the card network associated with the token. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last4` | `string` | No | The last four digits of the token. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `string` | Yes | The token service provider / card network associated with the token. |
| `network_data` | `table` | Yes |  |
| `network_updated_at` | `number` | Yes | Time at which the token was last updated by the card network. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The usage state of the token. |
| `type` | `string` | Yes | Type of the token: `account`, `bank_account`, `card`, or `pii`. |
| `used` | `boolean` | Yes | Determines if you have already used this token (you can only use tokens once). |
| `wallet_provider` | `string` | No | The digital wallet for this token, if one was used. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Token():create({
  id = --[[ string ]],
  bank_account = --[[ table ]],
  card = --[[ any ]],
  created = --[[ number ]],
  livemode = --[[ boolean ]],
  network = --[[ string ]],
  network_data = --[[ table ]],
  network_updated_at = --[[ number ]],
  object = --[[ string ]],
  status = --[[ string ]],
  type = --[[ string ]],
  used = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Token():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Token():load({ id = "token_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TopupEntity

```lua
local topup = client:Topup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Amount transferred. |
| `balance_transaction` | `any` | No | ID of the balance transaction that describes the impact of this top-up on your account balance. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `expected_availability_date` | `number` | No | Date the funds are expected to arrive in your Stripe account for payouts. |
| `failure_code` | `string` | No | Error code explaining reason for top-up failure if available (see [the errors section](/api/errors) for a list of codes). |
| `failure_message` | `string` | No | Message to user further explaining reason for top-up failure if available. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `initiated_by` | `string` | No | Indicates whether the top-up was initiated by Stripe or by the user. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method` | `any` | No | The ID of a PaymentMethod representing the payment method used for the top-up. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for this top-up. |
| `source` | `any` | No | The source field is deprecated. |
| `statement_descriptor` | `string` | No | Extra information about a top-up. |
| `status` | `string` | Yes | The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`. |
| `transfer_group` | `string` | No | A string that identifies this top-up as part of a group. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Topup():create({
  id = --[[ string ]],
  amount = --[[ number ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Topup():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Topup():load({ id = "topup_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TransactionEntity

```lua
local transaction = client:Transaction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | The ID of the Financial Connections Account this transaction belongs to. |
| `amount` | `number` | Yes | The transaction amount, which will be reflected in your balance. |
| `amount_details` | `any` | No | Detailed breakdown of amount components. |
| `authorization` | `any` | No | The `Authorization` object that led to this transaction. |
| `balance_impact` | `table` | Yes | Change to a FinancialAccount's balance |
| `balance_transaction` | `any` | No | ID of the [balance transaction](https://docs.stripe.com/api/balance_transactions) associated with this transaction. |
| `card` | `any` | Yes | The card used to make this transaction. |
| `cardholder` | `any` | No | The cardholder to whom this transaction belongs. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | No | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `table` | Yes |  |
| `description` | `string` | Yes | An arbitrary string attached to the object. |
| `dispute` | `any` | No | If you've disputed the transaction, the ID of the dispute. |
| `entries` | `table` | Yes | A list of TransactionEntries that are part of this Transaction. |
| `financial_account` | `string` | Yes | The FinancialAccount associated with this object. |
| `flow` | `string` | No | ID of the flow that created the Transaction. |
| `flow_details` | `any` | No | Details of the flow that created the Transaction. |
| `flow_type` | `string` | Yes | Type of the flow that created the Transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `line_items` | `table` | Yes | The tax collected or refunded, by line item. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `number` | Yes | The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `merchant_currency` | `string` | Yes | The currency with which the merchant is taking payment. |
| `merchant_data` | `table` | Yes |  |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `any` | No | Details about the transaction, such as processing dates, set by the card network. |
| `object` | `string` | Yes | String representing the object's type. |
| `posted_at` | `number` | No | Time at which this transaction posted. |
| `purchase_details` | `any` | No | Additional purchase information that is optionally provided by the merchant. |
| `reference` | `string` | Yes | A custom unique identifier, such as 'myOrder_123'. |
| `reversal` | `any` | No | If `type=reversal`, contains information about what was reversed. |
| `ship_from_details` | `any` | No | The details of the ship from location, such as the address. |
| `shipping_cost` | `any` | No | The shipping cost details for the transaction. |
| `status` | `string` | Yes | Status of the Transaction. |
| `status_transitions` | `table` | Yes |  |
| `tax_date` | `number` | Yes | The calculation uses the tax rules and rates that are in effect at this timestamp. |
| `token` | `string` | No | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this transaction. |
| `transacted_at` | `number` | Yes | Time at which the transaction was transacted. |
| `transaction_refresh` | `string` | Yes | The token of the transaction refresh that last updated or created this transaction. |
| `treasury` | `any` | No | [Treasury](https://docs.stripe.com/api/treasury) details related to this transaction if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts |
| `type` | `string` | Yes | The nature of the transaction. |
| `updated` | `number` | Yes | Time at which the object was last updated. |
| `void_at` | `number` | No | Time at which this transaction was voided. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Transaction():create({
  id = --[[ string ]],
  account = --[[ string ]],
  amount = --[[ number ]],
  balance_impact = --[[ table ]],
  card = --[[ any ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  customer_details = --[[ table ]],
  description = --[[ string ]],
  entries = --[[ table ]],
  financial_account = --[[ string ]],
  flow_type = --[[ string ]],
  line_items = --[[ table ]],
  livemode = --[[ boolean ]],
  merchant_amount = --[[ number ]],
  merchant_currency = --[[ string ]],
  merchant_data = --[[ table ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  reference = --[[ string ]],
  status = --[[ string ]],
  status_transitions = --[[ table ]],
  tax_date = --[[ number ]],
  transacted_at = --[[ number ]],
  transaction_refresh = --[[ string ]],
  type = --[[ string ]],
  updated = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Transaction():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Transaction():load({ id = "transaction_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransactionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TransactionEntryEntity

```lua
local transaction_entry = client:TransactionEntry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance_impact` | `table` | Yes | Change to a FinancialAccount's balance |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `effective_at` | `number` | Yes | When the TransactionEntry will impact the FinancialAccount's balance. |
| `financial_account` | `string` | Yes | The FinancialAccount associated with this object. |
| `flow` | `string` | No | Token of the flow associated with the TransactionEntry. |
| `flow_details` | `any` | No | Details of the flow associated with the TransactionEntry. |
| `flow_type` | `string` | Yes | Type of the flow associated with the TransactionEntry. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `transaction` | `any` | Yes | The Transaction associated with this object. |
| `type` | `string` | Yes | The specific money movement that generated the TransactionEntry. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TransactionEntry():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TransactionEntry():load({ id = "transaction_entry_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransactionEntryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TransferEntity

```lua
local transfer = client:Transfer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Amount in cents (or local equivalent) to be transferred. |
| `amount_reversed` | `number` | Yes | Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued). |
| `balance_transaction` | `any` | No | Balance transaction that describes the impact of this transfer on your account balance. |
| `created` | `number` | Yes | Time that this record of the transfer was first created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `destination` | `any` | No | ID of the Stripe account the transfer was sent to. |
| `destination_payment` | `any` | No | If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `reversals` | `table` | Yes | A list of reversals that have been applied to the transfer. |
| `reversed` | `boolean` | Yes | Whether the transfer has been fully reversed. |
| `source_transaction` | `any` | No | ID of the charge that was used to fund the transfer. |
| `source_type` | `string` | No | The source balance this transfer came from. |
| `transfer_group` | `string` | No | A string that identifies this transaction as part of a group. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Transfer():create({
  id = --[[ string ]],
  amount = --[[ number ]],
  amount_reversed = --[[ number ]],
  created = --[[ number ]],
  currency = --[[ string ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  reversals = --[[ table ]],
  reversed = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Transfer():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Transfer():load({ id = "transfer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransferEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TrialOfferEntity

```lua
local trial_offer = client:TrialOffer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the trial offer is active. |
| `duration` | `table` | Yes |  |
| `end_behavior` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `nickname` | `string` | No | A brief description of the trial offer, hidden from customers. |
| `object` | `string` | Yes | String representing the object's type. |
| `price` | `number` | Yes | The price during the trial offer. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TrialOffer():create({
  id = --[[ string ]],
  active = --[[ boolean ]],
  duration = --[[ table ]],
  end_behavior = --[[ table ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  price = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TrialOffer():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TrialOffer():load({ id = "trial_offer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TrialOfferEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ValueListEntity

```lua
local value_list = client:ValueList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes | The name of the value list for use in rules. |
| `created` | `number` | Yes | Time at which the object was created. |
| `created_by` | `string` | Yes | The name or email address of the user who created this value list. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `item_type` | `string` | Yes | The type of items in the value list. |
| `list_items` | `table` | Yes | List of items contained within this value list. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Yes | The name of the value list. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ValueList():create({
  id = --[[ string ]],
  alias = --[[ string ]],
  created = --[[ number ]],
  created_by = --[[ string ]],
  item_type = --[[ string ]],
  list_items = --[[ table ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  name = --[[ string ]],
  object = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ValueList():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ValueList():load({ id = "value_list_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ValueList():remove({ id = "value_list_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ValueListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ValueListItemEntity

```lua
local value_list_item = client:ValueListItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `created_by` | `string` | Yes | The name or email address of the user who added this item to the value list. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `value` | `string` | Yes | The value of the item. |
| `value_list` | `string` | Yes | The identifier of the value list this item belongs to. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ValueListItem():create({
  created = --[[ number ]],
  created_by = --[[ string ]],
  id = --[[ string ]],
  livemode = --[[ boolean ]],
  object = --[[ string ]],
  value = --[[ string ]],
  value_list = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ValueListItem():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ValueListItem():load({ id = "value_list_item_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ValueListItem():remove({ id = "value_list_item_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ValueListItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VerificationReportEntity

```lua
local verification_report = client:VerificationReport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_reference_id` | `string` | No | A string to reference this user. |
| `created` | `number` | Yes | Time at which the object was created. |
| `document` | `table` | Yes | Result from a document check |
| `email` | `table` | Yes | Result from a email check |
| `id` | `string` | Yes | Unique identifier for the object. |
| `id_number` | `table` | Yes | Result from an id_number check |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `options` | `table` | No |  |
| `phone` | `table` | Yes | Result from a phone check |
| `selfie` | `table` | Yes | Result from a selfie check |
| `type` | `string` | Yes | Type of report. |
| `verification_flow` | `string` | No | The configuration token of a verification flow from the dashboard. |
| `verification_session` | `string` | No | ID of the VerificationSession that created this report. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:VerificationReport():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:VerificationReport():load({ id = "verification_report_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VerificationReportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VerificationSessionEntity

```lua
local verification_session = client:VerificationSession(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_reference_id` | `string` | No | A string to reference this user. |
| `client_secret` | `string` | No | The short-lived client secret used by Stripe.js to [show a verification modal](https://docs.stripe.com/js/identity/modal) inside your app. |
| `created` | `number` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last_error` | `any` | No | If present, this property tells you the last error encountered when processing the verification. |
| `last_verification_report` | `any` | No | ID of the most recent VerificationReport. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `options` | `any` | No | A set of options for the session’s verification checks. |
| `provided_details` | `any` | No | Details provided about the user being verified. |
| `redaction` | `any` | No | Redaction status of this VerificationSession. |
| `related_customer` | `string` | No | Customer ID |
| `related_customer_account` | `string` | No | The ID of the Account representing a customer. |
| `related_person` | `table` | Yes |  |
| `status` | `string` | Yes | Status of this VerificationSession. |
| `type` | `string` | Yes | The type of [verification check](https://docs.stripe.com/identity/verification-checks) to be performed. |
| `url` | `string` | No | The short-lived URL that you use to redirect a user to Stripe to submit their identity information. |
| `verification_flow` | `string` | No | The configuration token of a verification flow from the dashboard. |
| `verified_outputs` | `any` | No | The user’s verified data. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:VerificationSession():create({
  id = --[[ string ]],
  created = --[[ number ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  related_person = --[[ table ]],
  status = --[[ string ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:VerificationSession():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:VerificationSession():load({ id = "verification_session_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VerificationSessionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEndpointEntity

```lua
local webhook_endpoint = client:WebhookEndpoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_version` | `string` | No | The API version that events are rendered as for this webhook endpoint. |
| `application` | `string` | No | The ID of the associated Connect application. |
| `created` | `number` | Yes | Time at which the object was created. |
| `description` | `string` | No | An optional description of what the webhook is used for. |
| `enabled_events` | `table` | Yes | The list of events to enable for this endpoint. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `secret` | `string` | No | The endpoint's secret, used to generate [webhook signatures](https://docs.stripe.com/webhooks/signatures). |
| `status` | `string` | Yes | The status of the webhook. |
| `url` | `string` | Yes | The URL of the webhook endpoint. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WebhookEndpoint():create({
  id = --[[ string ]],
  created = --[[ number ]],
  enabled_events = --[[ table ]],
  livemode = --[[ boolean ]],
  metadata = --[[ table ]],
  object = --[[ string ]],
  status = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WebhookEndpoint():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WebhookEndpoint():load({ id = "webhook_endpoint_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEndpointEntity` instance with the same client and
options.

#### `get_name() -> string`

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

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
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

