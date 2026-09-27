# Stripe Lua SDK



The Lua SDK for the Stripe API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Account()` — each with the same small set of operations (`list`, `load`, `create`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/stripe-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("stripe_sdk")

local client = sdk.new({
  apikey = os.getenv("STRIPE_APIKEY"),
})
```

### 2. List account records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local accounts, err = client:Account():list()
if err then error(err) end

for _, item in ipairs(accounts) do
  print(item["id"])
end
```

### 3. Load an account

Account is nested under account, so provide the `account`.

```lua
local account, err = client:Account():load({ account = "example_account" })
if err then error(err) end
print(account)
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:Account():create({ id = "example_id", category = "example_category", controller = {}, created = 1, external_accounts = {}, individual = {}, institution_name = "example_institution_name", livemode = true, object = "example_object", status = "example_status", subcategory = "example_subcategory", supported_payment_method_types = {} })
if err then error(err) end

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local calculation, err = client:Calculation():load({ id = "example_id" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Calculation():load({ id = "test01" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### StripeSDK

```lua
local sdk = require("stripe_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### StripeSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Account` | `(data) -> AccountEntity` | Create an Account entity instance. |
| `AccountLink` | `(data) -> AccountLinkEntity` | Create an AccountLink entity instance. |
| `AccountOwner` | `(data) -> AccountOwnerEntity` | Create an AccountOwner entity instance. |
| `AccountSession` | `(data) -> AccountSessionEntity` | Create an AccountSession entity instance. |
| `ActiveEntitlement` | `(data) -> ActiveEntitlementEntity` | Create an ActiveEntitlement entity instance. |
| `Alert` | `(data) -> AlertEntity` | Create an Alert entity instance. |
| `ApplePayDomain` | `(data) -> ApplePayDomainEntity` | Create an ApplePayDomain entity instance. |
| `ApplicationFee` | `(data) -> ApplicationFeeEntity` | Create an ApplicationFee entity instance. |
| `Association` | `(data) -> AssociationEntity` | Create an Association entity instance. |
| `Authentication` | `(data) -> AuthenticationEntity` | Create an Authentication entity instance. |
| `Authorization` | `(data) -> AuthorizationEntity` | Create an Authorization entity instance. |
| `Balance` | `(data) -> BalanceEntity` | Create a Balance entity instance. |
| `BalanceSetting` | `(data) -> BalanceSettingEntity` | Create a BalanceSetting entity instance. |
| `BalanceTransaction` | `(data) -> BalanceTransactionEntity` | Create a BalanceTransaction entity instance. |
| `BankAccount` | `(data) -> BankAccountEntity` | Create a BankAccount entity instance. |
| `Calculation` | `(data) -> CalculationEntity` | Create a Calculation entity instance. |
| `Capability` | `(data) -> CapabilityEntity` | Create a Capability entity instance. |
| `Card` | `(data) -> CardEntity` | Create a Card entity instance. |
| `Cardholder` | `(data) -> CardholderEntity` | Create a Cardholder entity instance. |
| `CashBalance` | `(data) -> CashBalanceEntity` | Create a CashBalance entity instance. |
| `CashBalanceTransaction` | `(data) -> CashBalanceTransactionEntity` | Create a CashBalanceTransaction entity instance. |
| `Charge` | `(data) -> ChargeEntity` | Create a Charge entity instance. |
| `Configuration` | `(data) -> ConfigurationEntity` | Create a Configuration entity instance. |
| `ConfirmationToken` | `(data) -> ConfirmationTokenEntity` | Create a ConfirmationToken entity instance. |
| `ConnectionToken` | `(data) -> ConnectionTokenEntity` | Create a ConnectionToken entity instance. |
| `CountrySpec` | `(data) -> CountrySpecEntity` | Create a CountrySpec entity instance. |
| `Coupon` | `(data) -> CouponEntity` | Create a Coupon entity instance. |
| `CreditBalanceSummary` | `(data) -> CreditBalanceSummaryEntity` | Create a CreditBalanceSummary entity instance. |
| `CreditBalanceTransaction` | `(data) -> CreditBalanceTransactionEntity` | Create a CreditBalanceTransaction entity instance. |
| `CreditGrant` | `(data) -> CreditGrantEntity` | Create a CreditGrant entity instance. |
| `CreditNote` | `(data) -> CreditNoteEntity` | Create a CreditNote entity instance. |
| `CreditNoteLine` | `(data) -> CreditNoteLineEntity` | Create a CreditNoteLine entity instance. |
| `CreditReversal` | `(data) -> CreditReversalEntity` | Create a CreditReversal entity instance. |
| `Customer` | `(data) -> CustomerEntity` | Create a Customer entity instance. |
| `CustomerBalanceTransaction` | `(data) -> CustomerBalanceTransactionEntity` | Create a CustomerBalanceTransaction entity instance. |
| `CustomerSession` | `(data) -> CustomerSessionEntity` | Create a CustomerSession entity instance. |
| `DebitReversal` | `(data) -> DebitReversalEntity` | Create a DebitReversal entity instance. |
| `DeletedAccount` | `(data) -> DeletedAccountEntity` | Create a DeletedAccount entity instance. |
| `DeletedApplePayDomain` | `(data) -> DeletedApplePayDomainEntity` | Create a DeletedApplePayDomain entity instance. |
| `DeletedCoupon` | `(data) -> DeletedCouponEntity` | Create a DeletedCoupon entity instance. |
| `DeletedExternalAccount` | `(data) -> DeletedExternalAccountEntity` | Create a DeletedExternalAccount entity instance. |
| `DeletedInvoiceitem` | `(data) -> DeletedInvoiceitemEntity` | Create a DeletedInvoiceitem entity instance. |
| `DeletedPerson` | `(data) -> DeletedPersonEntity` | Create a DeletedPerson entity instance. |
| `DeletedPlan` | `(data) -> DeletedPlanEntity` | Create a DeletedPlan entity instance. |
| `DeletedProductFeature` | `(data) -> DeletedProductFeatureEntity` | Create a DeletedProductFeature entity instance. |
| `DeletedSubscriptionItem` | `(data) -> DeletedSubscriptionItemEntity` | Create a DeletedSubscriptionItem entity instance. |
| `DeletedWebhookEndpoint` | `(data) -> DeletedWebhookEndpointEntity` | Create a DeletedWebhookEndpoint entity instance. |
| `Discount` | `(data) -> DiscountEntity` | Create a Discount entity instance. |
| `Dispute` | `(data) -> DisputeEntity` | Create a Dispute entity instance. |
| `Domain` | `(data) -> DomainEntity` | Create a Domain entity instance. |
| `EarlyFraudWarning` | `(data) -> EarlyFraudWarningEntity` | Create an EarlyFraudWarning entity instance. |
| `EphemeralKey` | `(data) -> EphemeralKeyEntity` | Create an EphemeralKey entity instance. |
| `Event` | `(data) -> EventEntity` | Create an Event entity instance. |
| `ExchangeRate` | `(data) -> ExchangeRateEntity` | Create an ExchangeRate entity instance. |
| `ExternalAccount` | `(data) -> ExternalAccountEntity` | Create an ExternalAccount entity instance. |
| `Feature` | `(data) -> FeatureEntity` | Create a Feature entity instance. |
| `FeedbackOption` | `(data) -> FeedbackOptionEntity` | Create a FeedbackOption entity instance. |
| `File` | `(data) -> FileEntity` | Create a File entity instance. |
| `FileLink` | `(data) -> FileLinkEntity` | Create a FileLink entity instance. |
| `FinancialAccount` | `(data) -> FinancialAccountEntity` | Create a FinancialAccount entity instance. |
| `FinancialAccountFeature` | `(data) -> FinancialAccountFeatureEntity` | Create a FinancialAccountFeature entity instance. |
| `FundCashBalance` | `(data) -> FundCashBalanceEntity` | Create a FundCashBalance entity instance. |
| `FundingInstruction` | `(data) -> FundingInstructionEntity` | Create a FundingInstruction entity instance. |
| `History` | `(data) -> HistoryEntity` | Create a History entity instance. |
| `InboundTransfer` | `(data) -> InboundTransferEntity` | Create an InboundTransfer entity instance. |
| `Install` | `(data) -> InstallEntity` | Create an Install entity instance. |
| `Invoice` | `(data) -> InvoiceEntity` | Create an Invoice entity instance. |
| `InvoicePayment` | `(data) -> InvoicePaymentEntity` | Create an InvoicePayment entity instance. |
| `InvoiceRenderingTemplate` | `(data) -> InvoiceRenderingTemplateEntity` | Create an InvoiceRenderingTemplate entity instance. |
| `Invoiceitem` | `(data) -> InvoiceitemEntity` | Create an Invoiceitem entity instance. |
| `Line` | `(data) -> LineEntity` | Create a Line entity instance. |
| `LineItem` | `(data) -> LineItemEntity` | Create a LineItem entity instance. |
| `LinkedAccount` | `(data) -> LinkedAccountEntity` | Create a LinkedAccount entity instance. |
| `LinkedAccountOwner` | `(data) -> LinkedAccountOwnerEntity` | Create a LinkedAccountOwner entity instance. |
| `Location` | `(data) -> LocationEntity` | Create a Location entity instance. |
| `LoginLink` | `(data) -> LoginLinkEntity` | Create a LoginLink entity instance. |
| `Mandate` | `(data) -> MandateEntity` | Create a Mandate entity instance. |
| `Meter` | `(data) -> MeterEntity` | Create a Meter entity instance. |
| `MeterEvent` | `(data) -> MeterEventEntity` | Create a MeterEvent entity instance. |
| `MeterEventAdjustment` | `(data) -> MeterEventAdjustmentEntity` | Create a MeterEventAdjustment entity instance. |
| `MeterEventSummary` | `(data) -> MeterEventSummaryEntity` | Create a MeterEventSummary entity instance. |
| `OnboardingLink` | `(data) -> OnboardingLinkEntity` | Create an OnboardingLink entity instance. |
| `Order` | `(data) -> OrderEntity` | Create an Order entity instance. |
| `OutboundPayment` | `(data) -> OutboundPaymentEntity` | Create an OutboundPayment entity instance. |
| `OutboundTransfer` | `(data) -> OutboundTransferEntity` | Create an OutboundTransfer entity instance. |
| `PaymentAttemptRecord` | `(data) -> PaymentAttemptRecordEntity` | Create a PaymentAttemptRecord entity instance. |
| `PaymentEvaluation` | `(data) -> PaymentEvaluationEntity` | Create a PaymentEvaluation entity instance. |
| `PaymentIntent` | `(data) -> PaymentIntentEntity` | Create a PaymentIntent entity instance. |
| `PaymentIntentAmountDetailsLineItem` | `(data) -> PaymentIntentAmountDetailsLineItemEntity` | Create a PaymentIntentAmountDetailsLineItem entity instance. |
| `PaymentLink` | `(data) -> PaymentLinkEntity` | Create a PaymentLink entity instance. |
| `PaymentMethod` | `(data) -> PaymentMethodEntity` | Create a PaymentMethod entity instance. |
| `PaymentMethodConfiguration` | `(data) -> PaymentMethodConfigurationEntity` | Create a PaymentMethodConfiguration entity instance. |
| `PaymentMethodDomain` | `(data) -> PaymentMethodDomainEntity` | Create a PaymentMethodDomain entity instance. |
| `PaymentRecord` | `(data) -> PaymentRecordEntity` | Create a PaymentRecord entity instance. |
| `Payout` | `(data) -> PayoutEntity` | Create a Payout entity instance. |
| `Person` | `(data) -> PersonEntity` | Create a Person entity instance. |
| `PersonalizationDesign` | `(data) -> PersonalizationDesignEntity` | Create a PersonalizationDesign entity instance. |
| `PhysicalBundle` | `(data) -> PhysicalBundleEntity` | Create a PhysicalBundle entity instance. |
| `Plan` | `(data) -> PlanEntity` | Create a Plan entity instance. |
| `Price` | `(data) -> PriceEntity` | Create a Price entity instance. |
| `Product` | `(data) -> ProductEntity` | Create a Product entity instance. |
| `ProductFeature` | `(data) -> ProductFeatureEntity` | Create a ProductFeature entity instance. |
| `PromotionCode` | `(data) -> PromotionCodeEntity` | Create a PromotionCode entity instance. |
| `Quote` | `(data) -> QuoteEntity` | Create a Quote entity instance. |
| `QuoteComputedUpfrontLineItem` | `(data) -> QuoteComputedUpfrontLineItemEntity` | Create a QuoteComputedUpfrontLineItem entity instance. |
| `QuotePdf` | `(data) -> QuotePdfEntity` | Create a QuotePdf entity instance. |
| `Reader` | `(data) -> ReaderEntity` | Create a Reader entity instance. |
| `ReceivedCredit` | `(data) -> ReceivedCreditEntity` | Create a ReceivedCredit entity instance. |
| `ReceivedDebit` | `(data) -> ReceivedDebitEntity` | Create a ReceivedDebit entity instance. |
| `Refund` | `(data) -> RefundEntity` | Create a Refund entity instance. |
| `Registration` | `(data) -> RegistrationEntity` | Create a Registration entity instance. |
| `ReportRun` | `(data) -> ReportRunEntity` | Create a ReportRun entity instance. |
| `ReportType` | `(data) -> ReportTypeEntity` | Create a ReportType entity instance. |
| `Request` | `(data) -> RequestEntity` | Create a Request entity instance. |
| `Reversal` | `(data) -> ReversalEntity` | Create a Reversal entity instance. |
| `Review` | `(data) -> ReviewEntity` | Create a Review entity instance. |
| `ScheduledQueryRun` | `(data) -> ScheduledQueryRunEntity` | Create a ScheduledQueryRun entity instance. |
| `Search` | `(data) -> SearchEntity` | Create a Search entity instance. |
| `Secret` | `(data) -> SecretEntity` | Create a Secret entity instance. |
| `Session` | `(data) -> SessionEntity` | Create a Session entity instance. |
| `Setting` | `(data) -> SettingEntity` | Create a Setting entity instance. |
| `Settlement` | `(data) -> SettlementEntity` | Create a Settlement entity instance. |
| `SetupAttempt` | `(data) -> SetupAttemptEntity` | Create a SetupAttempt entity instance. |
| `SetupIntent` | `(data) -> SetupIntentEntity` | Create a SetupIntent entity instance. |
| `ShippingRate` | `(data) -> ShippingRateEntity` | Create a ShippingRate entity instance. |
| `SigmaApiQuery` | `(data) -> SigmaApiQueryEntity` | Create a SigmaApiQuery entity instance. |
| `Source` | `(data) -> SourceEntity` | Create a Source entity instance. |
| `SourceMandateNotification` | `(data) -> SourceMandateNotificationEntity` | Create a SourceMandateNotification entity instance. |
| `SourceTransaction` | `(data) -> SourceTransactionEntity` | Create a SourceTransaction entity instance. |
| `Subscription` | `(data) -> SubscriptionEntity` | Create a Subscription entity instance. |
| `SubscriptionItem` | `(data) -> SubscriptionItemEntity` | Create a SubscriptionItem entity instance. |
| `SubscriptionSchedule` | `(data) -> SubscriptionScheduleEntity` | Create a SubscriptionSchedule entity instance. |
| `Supplier` | `(data) -> SupplierEntity` | Create a Supplier entity instance. |
| `TaxCode` | `(data) -> TaxCodeEntity` | Create a TaxCode entity instance. |
| `TaxId` | `(data) -> TaxIdEntity` | Create a TaxId entity instance. |
| `TaxRate` | `(data) -> TaxRateEntity` | Create a TaxRate entity instance. |
| `TestClock` | `(data) -> TestClockEntity` | Create a TestClock entity instance. |
| `Token` | `(data) -> TokenEntity` | Create a Token entity instance. |
| `Topup` | `(data) -> TopupEntity` | Create a Topup entity instance. |
| `Transaction` | `(data) -> TransactionEntity` | Create a Transaction entity instance. |
| `TransactionEntry` | `(data) -> TransactionEntryEntity` | Create a TransactionEntry entity instance. |
| `Transfer` | `(data) -> TransferEntity` | Create a Transfer entity instance. |
| `TrialOffer` | `(data) -> TrialOfferEntity` | Create a TrialOffer entity instance. |
| `ValueList` | `(data) -> ValueListEntity` | Create a ValueList entity instance. |
| `ValueListItem` | `(data) -> ValueListItemEntity` | Create a ValueListItem entity instance. |
| `VerificationReport` | `(data) -> VerificationReportEntity` | Create a VerificationReport entity instance. |
| `VerificationSession` | `(data) -> VerificationSessionEntity` | Create a VerificationSession entity instance. |
| `WebhookEndpoint` | `(data) -> WebhookEndpointEntity` | Create a WebhookEndpoint entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local account, err = client:Account():load()
    if err then error(err) end
    -- account is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Account

| Field | Description |
| --- | --- |
| `account_holder` | The account holder that this account belongs to. |
| `account_numbers` | Details about the account numbers. |
| `balance` | The most recent information about the account's balance. |
| `balance_refresh` | The state of the most recent attempt to refresh the account balance. |
| `business_profile` | Business information about the account. |
| `business_type` | The business type. |
| `capabilities` |  |
| `category` | The type of the account. |
| `charges_enabled` | Whether the account can process charges. |
| `company` |  |
| `controller` |  |
| `country` | The account's country. |
| `created` | Time at which the object was created. |
| `default_currency` | Three-letter ISO currency code representing the default currency for the account. |
| `details_submitted` | Whether account details have been submitted. |
| `display_name` | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `email` | An email address associated with the account. |
| `external_accounts` | External accounts (bank accounts and debit cards) currently attached to this account. |
| `future_requirements` |  |
| `groups` | The groups associated with the account. |
| `id` | Unique identifier for the object. |
| `individual` | This is an object representing a person associated with a Stripe account. |
| `institution_name` | The name of the institution that holds this account. |
| `last4` | The last 4 digits of the account number. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `ownership` | The most recent information about the account's owners. |
| `ownership_refresh` | The state of the most recent attempt to refresh the account owners. |
| `payouts_enabled` | Whether the funds in this account can be paid out. |
| `permissions` | The list of permissions granted by this account. |
| `requirements` |  |
| `settings` | Options for customizing how the account functions within Stripe. |
| `status` | The status of the link to the account. |
| `status_details` |  |
| `subcategory` | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `tos_acceptance` |  |
| `transaction_refresh` | The state of the most recent attempt to refresh the account transactions. |
| `type` | The Stripe account type. |

Operations: Create, List, Load.

API path: `/v1/accounts/{account}`

#### AccountLink

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `expires_at` | The timestamp at which this account link will expire. |
| `object` | String representing the object's type. |
| `url` | The URL for the account link. |

Operations: Create.

API path: `/v1/account_links`

#### AccountOwner

| Field | Description |
| --- | --- |
| `email` | The email address of the owner. |
| `id` | Unique identifier for the object. |
| `name` | The full name of the owner. |
| `object` | String representing the object's type. |
| `ownership` | The ownership object that this owner belongs to. |
| `phone` | The raw phone number of the owner. |
| `raw_address` | The raw physical address of the owner. |
| `refreshed_at` | The timestamp of the refresh that updated this owner. |

Operations: List.

API path: `/v1/financial_connections/accounts/{account}/owners`

#### AccountSession

| Field | Description |
| --- | --- |
| `account_management` |  |
| `account_onboarding` |  |
| `balance_report` |  |
| `balances` |  |
| `disputes_list` |  |
| `documents` |  |
| `financial_account` |  |
| `financial_account_transactions` |  |
| `instant_payouts_promotion` |  |
| `issuing_card` |  |
| `issuing_cards_list` |  |
| `notification_banner` |  |
| `payment_details` |  |
| `payment_disputes` |  |
| `payment_method_settings` |  |
| `payments` |  |
| `payout_details` |  |
| `payout_reconciliation_report` |  |
| `payouts` |  |
| `payouts_list` |  |
| `tax_registrations` |  |
| `tax_settings` |  |

Operations: Create.

API path: `/v1/account_sessions`

#### ActiveEntitlement

| Field | Description |
| --- | --- |
| `feature` | The [Feature](https://docs.stripe.com/api/entitlements/feature) that the customer is entitled to. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | A unique key you provide as your own system identifier. |
| `object` | String representing the object's type. |

Operations: List, Load.

API path: `/v1/entitlements/active_entitlements`

#### Alert

| Field | Description |
| --- | --- |
| `alert_type` | Defines the type of the alert. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `status` | Status of the alert. |
| `title` | Title of the alert. |
| `usage_threshold` | Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://docs.stripe.com/api/billing/meter). |

Operations: Create, List, Load.

API path: `/v1/billing/alerts/{id}/activate`

#### ApplePayDomain

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `domain_name` |  |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |

Operations: Create, Load.

API path: `/v1/apple_pay/domains`

#### ApplicationFee

| Field | Description |
| --- | --- |
| `account` | ID of the Stripe account this fee was taken from. |
| `amount` | Amount earned, in cents (or local equivalent). |
| `amount_refunded` | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued) |
| `application` | ID of the Connect application that earned the fee. |
| `balance_transaction` | Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds). |
| `charge` | ID of the charge that the application fee was taken from. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `fee_source` | Polymorphic source of the application fee. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `originating_transaction` | ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter. |
| `refunded` | Whether the fee has been fully refunded. |
| `refunds` | A list of refunds that have been applied to the fee. |

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
| `acquirer_details` | Contains additional details about the acquirer for a 3DS Authentication. |
| `amount` | The amount for this 3DS Authentication. |
| `challenge_url` | The URL for presenting a challenge to your cardholder, present if status is requires_challenge. |
| `channel` | Contains details on the channel used (browser, 3RI) for a standalone 3DS Authentication. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `directory_server` | The 3DS directory server with which this 3DS Authentication was processed. |
| `fingerprinting_url` | The URL for performing issuer fingerprinting, present if fingerprinting is supported for the given payment method. |
| `flow_preference` | Contains details of the flow preference used for a standalone 3DS Authentication. |
| `future_usage` | Contains information about the future authorisations related to this authentication |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `message_category` | Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `outcome` | The outcome of this 3DS Authentication. |
| `outcome_details` | Contains details on the result for a standalone 3DS Authentication. |
| `payment_method` | ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication. |
| `reason` | The reason for invoking this 3DS Authentication. |
| `shipping_address` | Contains details about the shipping address for a 3DS Authentication. |
| `status` | Status of this Authentication. |

Operations: Create, List, Load.

API path: `/v1/three_d_secure/authentications/{authentication}/cancel`

#### Authorization

| Field | Description |
| --- | --- |
| `amount` | The total amount that was authorized or rejected. |
| `amount_details` | Detailed breakdown of amount components. |
| `approved` | Whether the authorization has been approved. |
| `authorization_method` | How the card details were provided. |
| `balance_transactions` | List of balance transactions associated with this authorization. |
| `card` | You can [create physical or virtual cards](https://docs.stripe.com/issuing) that are issued to cardholders. |
| `card_presence` | Whether the card was present at the point of sale for the authorization. |
| `cardholder` | The cardholder to whom this authorization belongs. |
| `created` | Time at which the object was created. |
| `currency` | The currency of the cardholder. |
| `fleet` | Fleet-specific information for authorizations using Fleet cards. |
| `fraud_challenges` | Fraud challenges sent to the cardholder, if this authorization was declined for fraud risk reasons. |
| `fuel` | Information about fuel that was purchased with this transaction. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | The total amount that was authorized or rejected. |
| `merchant_currency` | The local currency that was presented to the cardholder for the authorization. |
| `merchant_data` |  |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | Details about the authorization, such as identifiers, set by the card network. |
| `object` | String representing the object's type. |
| `pending_request` | The pending authorization request. |
| `request_history` | History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. |
| `status` | The current status of the authorization in its lifecycle. |
| `token` | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this authorization. |
| `transactions` | List of [transactions](https://docs.stripe.com/api/issuing/transactions) associated with this authorization. |
| `treasury` | [Treasury](https://docs.stripe.com/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts). |
| `verification_data` |  |
| `verified_by_fraud_challenge` | Whether the authorization bypassed fraud risk checks because the cardholder has previously completed a fraud challenge on a similar high-risk authorization from the same merchant. |
| `wallet` | The digital wallet used for this transaction. |

Operations: Create, List, Load.

API path: `/v1/issuing/authorizations/{authorization}`

#### Balance

| Field | Description |
| --- | --- |
| `available` | Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://docs.stripe.com/api#transfers) or [Payouts API](https://docs.stripe.com/api#payouts). |
| `connect_reserved` | Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. |
| `instant_available` | Funds that you can pay out using Instant Payouts. |
| `issuing` |  |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `pending` | Funds that aren't available in the balance yet. |
| `refund_and_dispute_prefunding` |  |

Operations: List.

API path: `/v1/balance`

#### BalanceSetting

| Field | Description |
| --- | --- |
| `debit_negative_balances` | A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. |
| `payouts` | Settings specific to the account's payouts. |
| `settlement_timing` |  |

Operations: Create, Load.

API path: `/v1/balance_settings`

#### BalanceTransaction

| Field | Description |
| --- | --- |
| `amount` | Gross amount of this transaction (in cents (or local equivalent)). |
| `available_on` | The date that the transaction's net funds become available in the Stripe balance. |
| `balance_type` | The balance that this transaction impacts. |
| `checkout_session` | The ID of the checkout session (if any) that created the transaction. |
| `created` | Time at which the object was created. |
| `credit_note` | The ID of the credit note (if any) related to the transaction. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | The ID of the customer the transaction belongs to. |
| `customer_account` | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | An arbitrary string attached to the object. |
| `ending_balance` | The customer's `balance` after the transaction was applied. |
| `exchange_rate` | If applicable, this transaction uses an exchange rate. |
| `fee` | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | Unique identifier for the object. |
| `invoice` | The ID of the invoice (if any) related to the transaction. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net` | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | String representing the object's type. |
| `reporting_category` | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | This transaction relates to the Stripe object. |
| `status` | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

Operations: List, Load.

API path: `/v1/balance_transactions`

#### BankAccount

| Field | Description |
| --- | --- |
| `account` | The account this bank account belongs to. |
| `account_holder_name` | The name of the person or business that owns the bank account. |
| `account_holder_type` | The type of entity that holds the account. |
| `account_type` | The bank account type. |
| `available_payout_methods` | A set of available payout methods for this bank account. |
| `bank_name` | Name of the bank associated with the routing number (e.g., `WELLS FARGO`). |
| `country` | Two-letter ISO code representing the country the bank account is located in. |
| `currency` | Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. |
| `customer` | The ID of the customer that the bank account is associated with. |
| `default_for_currency` | Whether this bank account is the default external account for its currency. |
| `fingerprint` | Uniquely identifies this particular bank account. |
| `future_requirements` | Information about the [upcoming new requirements for the bank account](https://docs.stripe.com/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when. |
| `id` | Unique identifier for the object. |
| `last4` | The last four digits of the bank account number. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `requirements` | Information about the requirements for the bank account, including what information needs to be collected. |
| `routing_number` | The routing transit number for the bank account. |
| `status` | For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, `tokenized_account_number_deactivated` or `errored`. |

Operations: Create, List, Load, Remove.

API path: `/v1/customers/{customer}/bank_accounts/{id}`

#### Calculation

| Field | Description |
| --- | --- |
| `amount_total` | Total amount after taxes in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` |  |
| `expires_at` | Timestamp of date at which the tax calculation will expire. |
| `id` | Unique identifier for the calculation. |
| `line_items` | The list of items the customer is purchasing. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `ship_from_details` | The details of the ship from location, such as the address. |
| `shipping_cost` | The shipping cost details for the calculation. |
| `tax_amount_exclusive` | The amount of tax to be collected on top of the line item prices. |
| `tax_amount_inclusive` | The amount of tax already included in the line item prices. |
| `tax_breakdown` | Breakdown of individual tax amounts that add up to the total. |
| `tax_date` | The calculation uses the tax rules and rates that are in effect at this timestamp. |

Operations: Create, Load.

API path: `/v1/tax/calculations`

#### Capability

| Field | Description |
| --- | --- |
| `account` | The account for which the capability enables functionality. |
| `future_requirements` |  |
| `id` | The identifier for the capability. |
| `object` | String representing the object's type. |
| `requested` | Whether the capability has been requested. |
| `requested_at` | Time at which the capability was requested. |
| `requirements` |  |
| `status` | The status of the capability. |

Operations: Create, List, Load.

API path: `/v1/accounts/{account}/capabilities/{capability}`

#### Card

| Field | Description |
| --- | --- |
| `account` |  |
| `address_city` | City/District/Suburb/Town/Village. |
| `address_country` | Billing address country, if provided when creating card. |
| `address_line1` | Address line 1 (Street address/PO Box/Company name). |
| `address_line1_check` | If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `address_line2` | Address line 2 (Apartment/Suite/Unit/Building). |
| `address_state` | State/County/Province/Region. |
| `address_zip` | ZIP or postal code. |
| `address_zip_check` | If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `allow_redisplay` | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `available_payout_methods` | A set of available payout methods for this card. |
| `brand` | Card brand. |
| `cancellation_reason` | The reason why the card was canceled. |
| `cardholder` | An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://docs.stripe.com/issuing) cards. |
| `country` | Two-letter ISO code representing the country of the card. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. |
| `customer` | The customer that this card belongs to. |
| `cvc` | The card's CVC. |
| `cvc_check` | If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `default_for_currency` | Whether this card is the default external account for its currency. |
| `dynamic_last4` | (For tokenized numbers only.) The last four digits of the device account number. |
| `exp_month` | Two-digit number representing the card's expiration month. |
| `exp_year` | Four-digit number representing the card's expiration year. |
| `financial_account` | The financial account this card is attached to. |
| `fingerprint` | Uniquely identifies this particular card number. |
| `funding` | Card funding type. |
| `id` | Unique identifier for the object. |
| `last4` | The last four digits of the card. |
| `latest_fraud_warning` | Stripe’s assessment of whether this card’s details have been compromised. |
| `lifecycle_controls` | Rules that control the lifecycle of this card, such as automatic cancellation. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | Cardholder name. |
| `networks` |  |
| `number` | The full unredacted card number. |
| `object` | String representing the object's type. |
| `personalization_design` | The personalization design object belonging to this card. |
| `regulated_status` | Status of a card based on the card issuer. |
| `replaced_by` | The latest card that replaces this card, if any. |
| `replacement_for` | The card this card replaces, if any. |
| `replacement_reason` | The reason why the previous card needed to be replaced. |
| `second_line` | Text separate from cardholder name, printed on the card. |
| `shipping` | Where and how the card will be shipped. |
| `spending_controls` |  |
| `status` | For external accounts that are cards, possible values are `new` and `errored`. |
| `tokenization_method` | If the card number is tokenized, this is the method that was used. |
| `type` | The type of the card. |
| `wallets` | Information relating to digital wallets (like Apple Pay and Google Pay). |

Operations: Create, List, Load, Remove.

API path: `/v1/customers/{customer}/cards/{id}`

#### Cardholder

| Field | Description |
| --- | --- |
| `billing` |  |
| `company` | Additional information about a `company` cardholder. |
| `created` | Time at which the object was created. |
| `email` | The cardholder's email address. |
| `id` | Unique identifier for the object. |
| `individual` | Additional information about an `individual` cardholder. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | The cardholder's name. |
| `object` | String representing the object's type. |
| `phone_number` | The cardholder's phone number. |
| `preferred_locales` | The cardholder’s preferred locales (languages), ordered by preference. |
| `requirements` |  |
| `spending_controls` | Rules that control spending across this cardholder's cards. |
| `status` | Specifies whether to permit authorizations on this cardholder's cards. |
| `type` | One of `individual` or `company`. |

Operations: Create, List, Load.

API path: `/v1/issuing/cardholders/{cardholder}`

#### CashBalance

| Field | Description |
| --- | --- |
| `available` | A hash of all cash balances available to this customer. |
| `customer` | The ID of the customer whose cash balance this object represents. |
| `customer_account` | The ID of an Account representing a customer whose cash balance this object represents. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `settings` |  |

Operations: Create, Load.

API path: `/v1/customers/{customer}/cash_balance`

#### CashBalanceTransaction

| Field | Description |
| --- | --- |
| `adjusted_for_overdraft` |  |
| `applied_to_payment` |  |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` |  |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `net_amount` | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | String representing the object's type. |
| `refunded_from_payment` |  |
| `transferred_to_balance` |  |
| `type` | The type of the cash balance transaction. |
| `unapplied_from_payment` |  |

Operations: List, Load.

API path: `/v1/customers/{customer}/cash_balance_transactions`

#### Charge

| Field | Description |
| --- | --- |
| `amount` | Amount intended to be collected by this payment. |
| `amount_captured` | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_refunded` | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `application` | ID of the Connect application that created the charge. |
| `application_fee` | The application fee (if any) for the charge. |
| `application_fee_amount` | The amount of the application fee (if any) requested for the charge. |
| `balance_transaction` | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_details` |  |
| `calculated_statement_descriptor` | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `captured` | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | ID of the customer this charge is for if one exists. |
| `description` | An arbitrary string attached to the object. |
| `disputed` | Whether the charge has been disputed. |
| `failure_balance_transaction` | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | Message to user further explaining reason for charge failure if available. |
| `fraud_details` | Information on fraud assessments for the charge. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `on_behalf_of` | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | Details about whether the payment was accepted, and why. |
| `paid` | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `payment_intent` | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | ID of the payment method used in this charge. |
| `payment_method_details` | Details about the payment method at the time of the transaction. |
| `presentment_details` |  |
| `radar_options` | Options to configure Radar. |
| `receipt_email` | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | This is the URL to view the receipt for this charge. |
| `refunded` | Whether the charge has been fully refunded. |
| `refunds` | A list of refunds that have been applied to the charge. |
| `review` | ID of the review associated with this charge if one exists. |
| `shipping` | Shipping information for the charge. |
| `source_transfer` | The transfer ID which created this charge. |
| `statement_descriptor` | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | Provides information about a card charge. |
| `status` | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `transfer` | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `transfer_data` | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `transfer_group` | A string that identifies this transaction as part of a group. |

Operations: Create, List, Load.

API path: `/v1/charges/{charge}`

#### Configuration

| Field | Description |
| --- | --- |
| `active` | Whether the configuration is active and can be used to create portal sessions. |
| `application` | ID of the Connect Application that created the configuration. |
| `bbpos_wisepad3` |  |
| `bbpos_wisepos_e` |  |
| `business_profile` |  |
| `cellular` |  |
| `created` | Time at which the object was created. |
| `default_return_url` | The default URL to redirect customers to when they click on the portal's link to return to your website. |
| `features` |  |
| `id` | Unique identifier for the object. |
| `is_account_default` | Whether this Configuration is the default for your account |
| `is_default` | Whether the configuration is the default. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `login_page` |  |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | The name of the configuration. |
| `object` | String representing the object's type. |
| `offline` |  |
| `reboot_window` |  |
| `stripe_s700` |  |
| `stripe_s710` |  |
| `tipping` |  |
| `updated` | Time at which the object was last updated. |
| `verifone_m425` |  |
| `verifone_p400` |  |
| `verifone_p630` |  |
| `verifone_ux700` |  |
| `verifone_v660p` |  |
| `wifi` |  |

Operations: Create, List, Load, Remove.

API path: `/v1/billing_portal/configurations/{configuration}`

#### ConfirmationToken

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `expires_at` | Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `mandate_data` | Data used for generating a Mandate. |
| `metadata` | Set of key-value pairs that you can attach to an object. |
| `object` | String representing the object's type. |
| `payment_intent` | ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `payment_method_options` | Payment-method-specific configuration for this ConfirmationToken. |
| `payment_method_preview` | Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken. |
| `return_url` | Return URL used to confirm the Intent. |
| `setup_future_usage` | Indicates that you intend to make future payments with this ConfirmationToken's payment method. |
| `setup_intent` | ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `shipping` | Shipping information collected on this ConfirmationToken. |
| `use_stripe_sdk` | Indicates whether the Stripe SDK is used to handle confirmation flow. |

Operations: Create, Load.

API path: `/v1/test_helpers/confirmation_tokens`

#### ConnectionToken

| Field | Description |
| --- | --- |
| `location` | The id of the location that this connection token is scoped to. |
| `object` | String representing the object's type. |
| `secret` | Your application should pass this token to the Stripe Terminal SDK. |

Operations: Create.

API path: `/v1/terminal/connection_tokens`

#### CountrySpec

| Field | Description |
| --- | --- |
| `default_currency` | The default currency for this country. |
| `id` | Unique identifier for the object. |
| `object` | String representing the object's type. |
| `supported_bank_account_currencies` | Currencies that can be accepted in the specific country (for transfers). |
| `supported_payment_currencies` | Currencies that can be accepted in the specified country (for payments). |
| `supported_payment_methods` | Payment methods available in the specified country. |
| `supported_transfer_countries` | Countries that can accept transfers from the specified country. |
| `verification_fields` |  |

Operations: List, Load.

API path: `/v1/country_specs`

#### Coupon

| Field | Description |
| --- | --- |
| `amount_off` | Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer. |
| `applies_to` |  |
| `created` | Time at which the object was created. |
| `currency` | If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off. |
| `currency_options` | Coupons defined in each available currency option. |
| `duration` | One of `forever`, `once`, or `repeating`. |
| `duration_in_months` | If `duration` is `repeating`, the number of months the coupon applies. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | Name of the coupon displayed to customers on for instance invoices or receipts. |
| `object` | String representing the object's type. |
| `percent_off` | Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. |
| `redeem_by` | Date after which the coupon can no longer be redeemed. |
| `times_redeemed` | Number of times this coupon has been applied to a customer. |
| `valid` | Taking account of the above properties, whether this coupon can still be applied to a customer. |

Operations: Create, List, Load.

API path: `/v1/coupons/{coupon}`

#### CreditBalanceSummary

| Field | Description |
| --- | --- |
| `available_balance` |  |
| `ledger_balance` |  |

Operations: List.

API path: `/v1/billing/credit_balance_summary`

#### CreditBalanceTransaction

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `credit` | Credit details for this credit balance transaction. |
| `credit_grant` | The credit grant associated with this credit balance transaction. |
| `debit` | Debit details for this credit balance transaction. |
| `effective_at` | The effective time of this credit balance transaction. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `test_clock` | ID of the test clock this credit balance transaction belongs to. |
| `type` | The type of credit balance transaction (credit or debit). |

Operations: List, Load.

API path: `/v1/billing/credit_balance_transactions`

#### CreditGrant

| Field | Description |
| --- | --- |
| `amount` |  |
| `applicability_config` |  |
| `category` | The category of this credit grant. |
| `created` | Time at which the object was created. |
| `customer` | ID of the customer receiving the billing credits. |
| `customer_account` | ID of the account representing the customer receiving the billing credits |
| `effective_at` | The time when the billing credits become effective-when they're eligible for use. |
| `expires_at` | The time when the billing credits expire. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | A descriptive name shown in dashboard. |
| `object` | String representing the object's type. |
| `priority` | The priority for applying this credit grant. |
| `test_clock` | ID of the test clock this credit grant belongs to. |
| `updated` | Time at which the object was last updated. |
| `voided_at` | The time when this credit grant was voided. |

Operations: Create, List, Load.

API path: `/v1/billing/credit_grants/{id}`

#### CreditNote

| Field | Description |
| --- | --- |
| `amount` | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax. |
| `amount_shipping` | This is the sum of all the shipping amounts. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | ID of the customer. |
| `customer_account` | ID of the account representing the customer. |
| `customer_balance_transaction` | Customer balance transaction related to this credit note. |
| `discount_amount` | The integer amount in cents (or local equivalent) representing the total amount of discount that was credited. |
| `discount_amounts` | The aggregate amounts calculated per discount for all line items. |
| `effective_at` | The date when this credit note is in effect. |
| `id` | Unique identifier for the object. |
| `invoice` | ID of the invoice. |
| `lines` | Line items that make up the credit note |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `memo` | Customer-facing text that appears on the credit note PDF. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice. |
| `object` | String representing the object's type. |
| `out_of_band_amount` | Amount that was credited outside of Stripe. |
| `pdf` | The link to download the PDF of the credit note. |
| `post_payment_amount` | The amount of the credit note that was refunded to the customer, credited to the customer's balance, credited outside of Stripe, or any combination thereof. |
| `pre_payment_amount` | The amount of the credit note by which the invoice's `amount_remaining` and `amount_due` were reduced. |
| `pretax_credit_amounts` | The pretax credit amounts (ex: discount, credit grants, etc) for all line items. |
| `reason` | Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory` |
| `refunds` | Refunds related to this credit note. |
| `shipping_cost` | The details of the cost of shipping, including the ShippingRate applied to the invoice. |
| `status` | Status of this credit note, one of `issued` or `void`. |
| `subtotal` | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts. |
| `subtotal_excluding_tax` | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts. |
| `total` | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount. |
| `total_excluding_tax` | The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts. |
| `total_taxes` | The aggregate tax information for all line items. |
| `type` | Type of this credit note, one of `pre_payment` or `post_payment`. |
| `voided_at` | The time that the credit note was voided. |

Operations: Create, List, Load.

API path: `/v1/credit_notes/{id}`

#### CreditNoteLine

| Field | Description |
| --- | --- |
| `amount` | The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts. |
| `description` | Description of the item being credited. |
| `discount_amount` | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | The amount of discount calculated per discount for this line item |
| `id` | Unique identifier for the object. |
| `invoice_line_item` | ID of the invoice line item being credited |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `pretax_credit_amounts` | The pretax credit amounts (ex: discount, credit grants, etc) for this line item. |
| `quantity` | The number of units of product being credited. |
| `tax_rates` | The tax rates which apply to the line item. |
| `taxes` | The tax information of the line item. |
| `type` | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | The cost of each unit of product being credited. |
| `unit_amount_decimal` | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

Operations: List.

API path: `/v1/credit_notes/{credit_note}/lines`

#### CreditReversal

| Field | Description |
| --- | --- |
| `amount` | Amount (in cents) transferred. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `financial_account` | The FinancialAccount to reverse funds from. |
| `hosted_regulatory_receipt_url` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | The rails used to reverse the funds. |
| `object` | String representing the object's type. |
| `received_credit` | The ReceivedCredit being reversed. |
| `status` | Status of the CreditReversal |
| `status_transitions` |  |
| `transaction` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/treasury/credit_reversals`

#### Customer

| Field | Description |
| --- | --- |
| `address` | The customer's billing address. |
| `balance` | The current balance, if any, that's stored on the customer in their default currency. |
| `business_name` | The customer's business name. |
| `cash_balance` | The current funds being held by Stripe on behalf of the customer. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes. |
| `customer_account` | The ID of an Account representing a customer. |
| `default_source` | ID of the default payment source for the customer. |
| `delinquent` | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | An arbitrary string attached to the object. |
| `discount` | Describes the current discount active on the customer, if there is one. |
| `email` | The customer's email address. |
| `id` | Unique identifier for the object. |
| `individual_name` | The customer's individual name. |
| `invoice_credit_balance` | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_prefix` | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` |  |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | The customer's full name or business name. |
| `next_invoice_sequence` | The suffix of the customer's next invoice number (for example, 0001). |
| `object` | String representing the object's type. |
| `phone` | The customer's phone number. |
| `preferred_locales` | The customer's preferred locales (languages), ordered by preference. |
| `shipping` | Mailing and shipping address for the customer. |
| `sources` | The customer's payment sources, if any. |
| `subscriptions` | The customer's current subscriptions, if any. |
| `tax` |  |
| `tax_exempt` | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | The customer's tax IDs. |
| `test_clock` | ID of the test clock that this customer belongs to. |

Operations: Create, List, Load, Remove.

API path: `/v1/customers/{customer}`

#### CustomerBalanceTransaction

| Field | Description |
| --- | --- |
| `amount` | The amount of the transaction. |
| `checkout_session` | The ID of the checkout session (if any) that created the transaction. |
| `created` | Time at which the object was created. |
| `credit_note` | The ID of the credit note (if any) related to the transaction. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | The ID of the customer the transaction belongs to. |
| `customer_account` | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | An arbitrary string attached to the object. |
| `ending_balance` | The customer's `balance` after the transaction was applied. |
| `id` | Unique identifier for the object. |
| `invoice` | The ID of the invoice (if any) related to the transaction. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `type` | Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or… |

Operations: Create, Load.

API path: `/v1/customers/{customer}/balance_transactions/{transaction}`

#### CustomerSession

| Field | Description |
| --- | --- |
| `client_secret` | The client secret of this Customer Session. |
| `components` | Configuration for the components supported by this Customer Session. |
| `created` | Time at which the object was created. |
| `customer` | The Customer the Customer Session was created for. |
| `customer_account` | The Account that the Customer Session was created for. |
| `expires_at` | The timestamp at which this Customer Session will expire. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |

Operations: Create.

API path: `/v1/customer_sessions`

#### DebitReversal

| Field | Description |
| --- | --- |
| `amount` | Amount (in cents) transferred. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `financial_account` | The FinancialAccount to reverse funds from. |
| `hosted_regulatory_receipt_url` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | Unique identifier for the object. |
| `linked_flows` | Other flows linked to a DebitReversal. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | The rails used to reverse the funds. |
| `object` | String representing the object's type. |
| `received_debit` | The ReceivedDebit being reversed. |
| `status` | Status of the DebitReversal |
| `status_transitions` |  |
| `transaction` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/treasury/debit_reversals`

#### DeletedAccount

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/v1/accounts/{account}`

#### DeletedApplePayDomain

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/v1/apple_pay/domains/{domain}`

#### DeletedCoupon

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/v1/coupons/{coupon}`

#### DeletedExternalAccount

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/v1/accounts/{account}/bank_accounts/{id}`

#### DeletedInvoiceitem

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/v1/invoiceitems/{invoiceitem}`

#### DeletedPerson

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/v1/accounts/{account}/people/{person}`

#### DeletedPlan

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/v1/plans/{plan}`

#### DeletedProductFeature

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/v1/products/{product}/features/{id}`

#### DeletedSubscriptionItem

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/v1/subscription_items/{item}`

#### DeletedWebhookEndpoint

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/v1/webhook_endpoints/{webhook_endpoint}`

#### Discount

| Field | Description |
| --- | --- |
| `checkout_session` | The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. |
| `customer` | The ID of the customer associated with this discount. |
| `customer_account` | The ID of the account representing the customer associated with this discount. |
| `end` | If the coupon has a duration of `repeating`, the date that this discount will end. |
| `id` | The ID of the discount object. |
| `invoice` | The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice. |
| `invoice_item` | The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item. |
| `object` | String representing the object's type. |
| `promotion_code` | The promotion code applied to create this discount. |
| `source` |  |
| `start` | Date that the coupon was applied. |
| `subscription` | The subscription that this coupon is applied to, if it is applied to a particular subscription. |
| `subscription_item` | The subscription item that this coupon is applied to, if it is applied to a particular subscription item. |

Operations: Load, Remove.

API path: `/v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount`

#### Dispute

| Field | Description |
| --- | --- |
| `amount` | Disputed amount. |
| `balance_transactions` | List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute. |
| `charge` | ID of the charge that's disputed. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `enhanced_eligibility_types` | List of eligibility types that are included in `enhanced_evidence`. |
| `evidence` |  |
| `evidence_details` |  |
| `id` | Unique identifier for the object. |
| `is_charge_refundable` | If true, it's still possible to refund the disputed payment. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `loss_reason` | The enum that describes the dispute loss outcome. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `payment_intent` | ID of the PaymentIntent that's disputed. |
| `payment_method_details` |  |
| `reason` | Reason given by cardholder for dispute. |
| `status` | The current status of a dispute. |
| `transaction` | The transaction being disputed. |
| `treasury` | [Treasury](https://docs.stripe.com/api/treasury) details related to this dispute if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts) |

Operations: Create, List, Load.

API path: `/v1/charges/{charge}/dispute`

#### Domain

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `domain_name` |  |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |

Operations: List.

API path: `/v1/apple_pay/domains`

#### EarlyFraudWarning

| Field | Description |
| --- | --- |
| `actionable` | An EFW is actionable if it has not received a dispute and has not been fully refunded. |
| `charge` | ID of the charge this early fraud warning is for, optionally expanded. |
| `created` | Time at which the object was created. |
| `fraud_type` | The type of fraud labelled by the issuer. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `payment_intent` | ID of the Payment Intent this early fraud warning is for, optionally expanded. |

Operations: List, Load.

API path: `/v1/radar/early_fraud_warnings`

#### EphemeralKey

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `expires` | Time at which the key will expire. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `secret` | The key's secret. |

Operations: Create, Remove.

API path: `/v1/ephemeral_keys`

#### Event

| Field | Description |
| --- | --- |
| `account` | The connected account that originates the event. |
| `api_version` | The Stripe API version used to render `data` when the event was created. |
| `context` | Authentication context needed to fetch the event or related object. |
| `created` | Time at which the object was created. |
| `data` |  |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `pending_webhooks` | Number of webhooks that haven't been successfully delivered (for example, to return a 20x response) to the URLs you specify. |
| `request` | Information on the API request that triggers the event. |
| `type` | Description of the event (for example, `invoice.created` or `charge.refunded`). |

Operations: List, Load.

API path: `/v1/events`

#### ExchangeRate

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the object. |
| `object` | String representing the object's type. |
| `rates` | Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency. |

Operations: List, Load.

API path: `/v1/exchange_rates`

#### ExternalAccount

| Field | Description |
| --- | --- |
| `data` | The list contains all external accounts that have been attached to the Stripe account. |
| `has_more` | True if this list has another page of items after this one that can be fetched. |
| `id` |  |
| `object` | String representing the object's type. |
| `url` | The URL where this list can be accessed. |

Operations: Create, List, Load.

API path: `/v1/accounts/{account}/bank_accounts/{id}`

#### Feature

| Field | Description |
| --- | --- |
| `active` | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `entitlement_feature` | A feature represents a monetizable ability or functionality in your system. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | A unique key you provide as your own system identifier. |
| `metadata` | Set of key-value pairs that you can attach to an object. |
| `name` | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | String representing the object's type. |

Operations: Create, List, Load.

API path: `/v1/entitlements/features/{id}`

#### FeedbackOption

| Field | Description |
| --- | --- |
| `deactivated_at` | The time the feedback option was deactivated, if any. |
| `description` | An arbitrary string attached to the object. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `status` | The feedback option's status. |
| `status_transitions` |  |

Operations: Create, List, Load.

API path: `/v1/billing/feedback_options/{id}`

#### File

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `data` | Details about each object. |
| `expires_at` | The file expires and isn't available at this time in epoch seconds. |
| `filename` | The suitable name for saving the file to a filesystem. |
| `has_more` | True if this list has another page of items after this one that can be fetched. |
| `id` | Unique identifier for the object. |
| `links` | A list of [file links](https://docs.stripe.com/api#file_links) that point at this file. |
| `object` | String representing the object's type. |
| `purpose` | The [purpose](https://docs.stripe.com/file-upload#uploading-a-file) of the uploaded file. |
| `size` | The size of the file object in bytes. |
| `title` | A suitable title for the document. |
| `type` | The returned file type (for example, `csv`, `pdf`, `jpg`, or `png`). |
| `url` | The URL where this list can be accessed. |

Operations: Create, List, Load.

API path: `/v1/files`

#### FileLink

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `expired` | Returns if the link is already expired. |
| `expires_at` | Time that the link expires. |
| `file` | The file object this link points to. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `url` | The publicly accessible URL to download the file. |

Operations: Create, List, Load.

API path: `/v1/file_links/{link}`

#### FinancialAccount

| Field | Description |
| --- | --- |
| `active_features` | The array of paths to active Features in the Features hash. |
| `balance` | Balance information for the FinancialAccount |
| `country` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | Time at which the object was created. |
| `features` | Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`. |
| `financial_addresses` | The set of credentials that resolve to a FinancialAccount. |
| `id` | Unique identifier for the object. |
| `is_default` |  |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | The nickname for the FinancialAccount. |
| `object` | String representing the object's type. |
| `pending_features` | The array of paths to pending Features in the Features hash. |
| `platform_restrictions` | The set of functionalities that the platform can restrict on the FinancialAccount. |
| `restricted_features` | The array of paths to restricted Features in the Features hash. |
| `status` | Status of this FinancialAccount. |
| `status_details` |  |
| `supported_currencies` | The currencies the FinancialAccount can hold a balance in. |

Operations: Create, List, Load.

API path: `/v1/treasury/financial_accounts/{financial_account}`

#### FinancialAccountFeature

| Field | Description |
| --- | --- |
| `card_issuing` | Toggle settings for enabling/disabling a feature |
| `deposit_insurance` | Toggle settings for enabling/disabling a feature |
| `financial_addresses` | Settings related to Financial Addresses features on a Financial Account |
| `id` |  |
| `inbound_transfers` | InboundTransfers contains inbound transfers features for a FinancialAccount. |
| `intra_stripe_flows` | Toggle settings for enabling/disabling a feature |
| `object` | String representing the object's type. |
| `outbound_payments` | Settings related to Outbound Payments features on a Financial Account |
| `outbound_transfers` | OutboundTransfers contains outbound transfers features for a FinancialAccount. |

Operations: Create, Load.

API path: `/v1/treasury/financial_accounts/{financial_account}/features`

#### FundCashBalance

| Field | Description |
| --- | --- |
| `adjusted_for_overdraft` |  |
| `applied_to_payment` |  |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` |  |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `net_amount` | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | String representing the object's type. |
| `refunded_from_payment` |  |
| `transferred_to_balance` |  |
| `type` | The type of the cash balance transaction. |
| `unapplied_from_payment` |  |

Operations: Create.

API path: `/v1/test_helpers/customers/{customer}/fund_cash_balance`

#### FundingInstruction

| Field | Description |
| --- | --- |
| `country` | The country of the bank account to fund |
| `financial_addresses` | A list of financial addresses that can be used to fund a particular balance |
| `type` | The bank_transfer type |

Operations: Create.

API path: `/v1/customers/{customer}/funding_instructions`

#### History

| Field | Description |
| --- | --- |
| `amount` | Gross amount of this transaction (in cents (or local equivalent)). |
| `available_on` | The date that the transaction's net funds become available in the Stripe balance. |
| `balance_type` | The balance that this transaction impacts. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | An arbitrary string attached to the object. |
| `exchange_rate` | If applicable, this transaction uses an exchange rate. |
| `fee` | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | Unique identifier for the object. |
| `net` | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | String representing the object's type. |
| `reporting_category` | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | This transaction relates to the Stripe object. |
| `status` | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

Operations: List.

API path: `/v1/balance/history`

#### InboundTransfer

| Field | Description |
| --- | --- |
| `amount` | Amount (in cents) transferred. |
| `cancelable` | Returns `true` if the InboundTransfer is able to be canceled. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | An arbitrary string attached to the object. |
| `failure_details` | Details about this InboundTransfer's failure. |
| `financial_account` | The FinancialAccount that received the funds. |
| `hosted_regulatory_receipt_url` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | Unique identifier for the object. |
| `linked_flows` |  |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `origin_payment_method` | The origin payment method to be debited for an InboundTransfer. |
| `origin_payment_method_details` | Details about the PaymentMethod for an InboundTransfer. |
| `returned` | Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state. |
| `statement_descriptor` | Statement descriptor shown when funds are debited from the source. |
| `status` | Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. |
| `status_transitions` |  |
| `transaction` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/treasury/inbound_transfers/{inbound_transfer}/cancel`

#### Install

| Field | Description |
| --- | --- |
| `account` | The ID of the account that the app install belongs to. |
| `app` | The ID of the app installed. |
| `approval_required` | Whether the installer must authorize pending permissions, content security policy entries, or endpoints. |
| `auth_code` | The authorization code for an oauth app install. |
| `channel` | The distribution channel associated with the app install. |
| `content_security_policy_granted` |  |
| `content_security_policy_pending` |  |
| `created` | Time at which the object was created. |
| `created_by` | The ID of the embedding platform that created the install, if applicable. |
| `endpoints_granted` | The endpoint URLs authorized by the installer. |
| `endpoints_pending` | The endpoint URLs requested by the latest app version that the installer has not authorized. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `permissions_granted` | The permissions authorized by the installer. |
| `permissions_pending` | The permissions requested by the latest app version that the installer has not authorized. |
| `status` | The status of the app install. |

Operations: Create, List, Load.

API path: `/v1/apps/installs/{id}`

#### Invoice

| Field | Description |
| --- | --- |
| `account_country` | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | The account tax IDs associated with the invoice. |
| `amount_due` | Final amount due at this time for this invoice. |
| `amount_overpaid` | Amount that was overpaid on the invoice. |
| `amount_paid` | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_remaining` | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | This is the sum of all the shipping amounts. |
| `application` | ID of the Connect Application that created the invoice. |
| `attempt_count` | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_tax` |  |
| `automatically_finalizes_at` | The time when this invoice is currently scheduled to be automatically finalized. |
| `billing_reason` | Indicates the reason why the invoice was created. |
| `collection_method` | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_secret` | The confirmation secret associated with this invoice. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | Custom fields displayed on the invoice. |
| `customer` | The ID of the customer to bill. |
| `customer_account` | The ID of the account representing the customer to bill. |
| `customer_address` | The customer's address. |
| `customer_email` | The customer's email. |
| `customer_name` | The customer's name. |
| `customer_phone` | The customer's phone number. |
| `customer_shipping` | The customer's shipping information. |
| `customer_tax_exempt` | The customer's tax exempt status. |
| `customer_tax_ids` | The customer's tax IDs. |
| `default_payment_method` | ID of the default payment method for the invoice. |
| `default_source` | ID of the default payment source for the invoice. |
| `default_tax_rates` | The tax rates applied to this invoice, if any. |
| `description` | An arbitrary string attached to the object. |
| `discounts` | The discounts applied to the invoice. |
| `due_date` | The date on which payment for this invoice is due. |
| `effective_at` | The date when this invoice is in effect. |
| `ending_balance` | Ending customer balance after the invoice is finalized. |
| `footer` | Footer displayed on the invoice. |
| `from_invoice` | Details of the invoice that was cloned. |
| `hosted_invoice_url` | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | Unique identifier for the object. |
| `invoice_pdf` | The link to download the PDF for the invoice. |
| `issuer` |  |
| `last_finalization_error` | The error encountered during the previous attempt to finalize the invoice. |
| `latest_revision` | The ID of the most recent non-draft revision of this invoice |
| `lines` | The individual line items that make up the invoice. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_payment_attempt` | The time at which payment will next be attempted. |
| `number` | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | String representing the object's type. |
| `on_behalf_of` | The account (if any) for which the funds of the invoice payment are intended. |
| `parent` | The parent that generated this invoice |
| `payment_settings` |  |
| `payments` | Payments for this invoice. |
| `period_end` | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | The earliest timestamp at which invoice items can be associated with this invoice. |
| `post_payment_credit_notes_amount` | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | Total amount of all pre-payment credit notes issued for this invoice. |
| `receipt_number` | This is the transaction number that appears on email receipts sent for this invoice. |
| `rendering` | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `shipping_cost` | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | Shipping details for the invoice. |
| `starting_balance` | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | Extra information about an invoice for the customer's credit card statement. |
| `status` | The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. |
| `status_details` |  |
| `status_transitions` |  |
| `subtotal` | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `test_clock` | ID of the test clock this invoice belongs to. |
| `threshold_reason` |  |
| `total` | Total after discounts and taxes. |
| `total_discount_amounts` | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | The aggregate tax information of all line items. |
| `webhooks_delivered_at` | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

Operations: Create, List, Load, Remove.

API path: `/v1/invoices/{invoice}`

#### InvoicePayment

| Field | Description |
| --- | --- |
| `amount_paid` | Amount that was actually paid for this invoice, in cents (or local equivalent). |
| `amount_requested` | Amount intended to be paid toward this invoice, in cents (or local equivalent) |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `id` | Unique identifier for the object. |
| `invoice` | The invoice that was paid. |
| `is_default` | Stripe automatically creates a default InvoicePayment when the invoice is finalized, and keeps it synchronized with the invoice’s `amount_remaining`. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `payment` |  |
| `status` | The status of the payment, one of `open`, `paid`, or `canceled`. |
| `status_transitions` |  |

Operations: List, Load.

API path: `/v1/invoice_payments`

#### InvoiceRenderingTemplate

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | A brief description of the template, hidden from customers |
| `object` | String representing the object's type. |
| `status` | The status of the template, one of `active` or `archived`. |
| `version` | Version of this template; version increases by one when an update on the template changes any field that controls invoice rendering |

Operations: Create, List, Load.

API path: `/v1/invoice_rendering_templates/{template}/archive`

#### Invoiceitem

| Field | Description |
| --- | --- |
| `amount` | Amount (in the `currency` specified) of the invoice item. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | The ID of the customer to bill for this invoice item. |
| `customer_account` | The ID of the account to bill for this invoice item. |
| `date` | Time at which the object was created. |
| `description` | An arbitrary string attached to the object. |
| `discountable` | If true, discounts will apply to this invoice item. |
| `discounts` | The discounts which apply to the invoice item. |
| `frozen_fields` | Array of field names that can't be modified. |
| `id` | Unique identifier for the object. |
| `invoice` | The ID of the invoice this invoice item belongs to. |
| `invoicing_rules` | The rules that control when this invoice item is eligible for invoicing. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net_amount` | The amount after discounts, but before credits and taxes. |
| `object` | String representing the object's type. |
| `parent` | The parent that generated this invoice item. |
| `period` |  |
| `pricing` | The pricing information of the invoice item. |
| `proration` | Whether the invoice item was created automatically as a proration adjustment when the customer switched plans. |
| `proration_details` |  |
| `quantity` | Quantity of units for the invoice item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | Non-negative decimal with at most 12 decimal places. |
| `tax_rates` | The tax rates which apply to the invoice item. |
| `test_clock` | ID of the test clock this invoice item belongs to. |

Operations: Create, List, Load.

API path: `/v1/invoiceitems/{invoiceitem}`

#### Line

| Field | Description |
| --- | --- |
| `amount` | The amount, in cents (or local equivalent). |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | An arbitrary string attached to the object. |
| `discount_amount` | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | The amount of discount calculated per discount for this line item. |
| `discountable` | If true, discounts will apply to this line item. |
| `discounts` | The discounts applied to the invoice line item. |
| `id` | Unique identifier for the object. |
| `invoice` | The ID of the invoice that contains this line item. |
| `invoice_line_item` | ID of the invoice line item being credited |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `parent` | The parent that generated this line item. |
| `period` |  |
| `pretax_credit_amounts` | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item. |
| `pricing` | The pricing information of the line item. |
| `quantity` | Quantity of units for the invoice line item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | Non-negative decimal with at most 12 decimal places. |
| `subscription` |  |
| `subtotal` | The subtotal of the line item, in cents (or local equivalent), before any discounts or taxes. |
| `tax_rates` | The tax rates which apply to the line item. |
| `taxes` | The tax information of the line item. |
| `type` | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | The cost of each unit of product being credited. |
| `unit_amount_decimal` | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

Operations: Create, List.

API path: `/v1/invoices/{invoice}/lines/{line_item_id}`

#### LineItem

| Field | Description |
| --- | --- |
| `adjustable_quantity` |  |
| `amount` | The line item amount in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_discount` | Total discount amount applied. |
| `amount_subtotal` | Total before any discounts or taxes are applied. |
| `amount_tax` | The amount of tax calculated for this line item, in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_total` | Total after discounts and taxes. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | An arbitrary string attached to the object. |
| `discounts` | The discounts applied to the line item. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `performance_location` | Indicates the line item represents a performance where the venue location might determine the tax, not the customer address. |
| `price` | The price used to generate the line item. |
| `product` | The ID of an existing [Product](https://docs.stripe.com/api/products/object). |
| `quantity` | The number of units of the item being purchased. |
| `reference` | A custom identifier for this line item. |
| `reversal` | If `type=reversal`, contains information about what was reversed. |
| `tax_behavior` | Specifies whether the `amount` includes taxes. |
| `tax_breakdown` | Detailed account of taxes relevant to this line item. |
| `tax_code` | The [tax code](https://docs.stripe.com/tax/tax-categories) ID used for this resource. |
| `taxes` | The taxes applied to the line item. |
| `type` | If `reversal`, this line item reverses an earlier transaction. |

Operations: List.

API path: `/v1/tax/calculations/{calculation}/line_items`

#### LinkedAccount

| Field | Description |
| --- | --- |
| `account_holder` | The account holder that this account belongs to. |
| `account_numbers` | Details about the account numbers. |
| `balance` | The most recent information about the account's balance. |
| `balance_refresh` | The state of the most recent attempt to refresh the account balance. |
| `category` | The type of the account. |
| `created` | Time at which the object was created. |
| `display_name` | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `id` | Unique identifier for the object. |
| `institution_name` | The name of the institution that holds this account. |
| `last4` | The last 4 digits of the account number. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `ownership` | The most recent information about the account's owners. |
| `ownership_refresh` | The state of the most recent attempt to refresh the account owners. |
| `permissions` | The list of permissions granted by this account. |
| `status` | The status of the link to the account. |
| `status_details` |  |
| `subcategory` | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `transaction_refresh` | The state of the most recent attempt to refresh the account transactions. |

Operations: List.

API path: `/v1/linked_accounts`

#### LinkedAccountOwner

| Field | Description |
| --- | --- |
| `email` | The email address of the owner. |
| `id` | Unique identifier for the object. |
| `name` | The full name of the owner. |
| `object` | String representing the object's type. |
| `ownership` | The ownership object that this owner belongs to. |
| `phone` | The raw phone number of the owner. |
| `raw_address` | The raw physical address of the owner. |
| `refreshed_at` | The timestamp of the refresh that updated this owner. |

Operations: List.

API path: `/v1/linked_accounts/{account}/owners`

#### Location

| Field | Description |
| --- | --- |
| `address` |  |
| `address_kana` |  |
| `address_kanji` |  |
| `city` | City, district, suburb, town, or village. |
| `configuration_overrides` | The ID of a configuration that will be used to customize all readers in this location. |
| `country` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `description` | A descriptive text providing additional context about the tax location. |
| `display_name` | The display name of the location. |
| `display_name_kana` | The Kana variation of the display name of the location. |
| `display_name_kanji` | The Kanji variation of the display name of the location. |
| `id` | Unique identifier for the object. |
| `line1` | Address line 1, such as the street, PO Box, or company name. |
| `line2` | Address line 2, such as the apartment, suite, unit, or building. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `phone` | The phone number of the location. |
| `postal_code` | ZIP or postal code. |
| `state` | State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)). |
| `type` | The type of tax location to be defined. |

Operations: Create, List, Load, Remove.

API path: `/v1/terminal/locations/{location}`

#### LoginLink

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `object` | String representing the object's type. |
| `url` | The URL for the login link. |

Operations: Create.

API path: `/v1/accounts/{account}/login_links`

#### Mandate

| Field | Description |
| --- | --- |
| `customer_acceptance` |  |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `multi_use` |  |
| `object` | String representing the object's type. |
| `on_behalf_of` | The account (if any) that the mandate is intended for. |
| `payment_method` | ID of the payment method associated with this mandate. |
| `payment_method_details` |  |
| `single_use` |  |
| `status` | The mandate status indicates whether or not you can use it to initiate a payment. |
| `type` | The type of the mandate. |

Operations: Load.

API path: `/v1/mandates/{mandate}`

#### Meter

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `customer_mapping` |  |
| `default_aggregation` |  |
| `display_name` | The meter's name. |
| `event_name` | The name of the meter event to record usage for. |
| `event_time_window` | The time window which meter events have been pre-aggregated for, if any. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `status` | The meter's status. |
| `status_transitions` |  |
| `updated` | Time at which the object was last updated. |
| `value_settings` |  |

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
| `aggregated_value` | Aggregated value of all the events within `start_time` (inclusive) and `end_time` (inclusive). |
| `end_time` | End timestamp for this event summary (exclusive). |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `meter` | The meter associated with this event summary. |
| `object` | String representing the object's type. |
| `start_time` | Start timestamp for this event summary (inclusive). |

Operations: List.

API path: `/v1/billing/meters/{id}/event_summaries`

#### OnboardingLink

| Field | Description |
| --- | --- |
| `apple_terms_and_conditions` | The options associated with the Apple Terms and Conditions link type. |

Operations: Create.

API path: `/v1/terminal/onboarding_links`

#### Order

| Field | Description |
| --- | --- |
| `amount_fees` | Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit. |
| `amount_subtotal` | Total amount of the carbon removal in the currency's smallest unit. |
| `amount_total` | Total amount of the order including fees in the currency's smallest unit. |
| `beneficiary` |  |
| `canceled_at` | Time at which the order was canceled. |
| `cancellation_reason` | Reason for the cancellation of this order. |
| `certificate` | For delivered orders, a URL to a delivery certificate for the order. |
| `confirmed_at` | Time at which the order was confirmed. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order. |
| `delayed_at` | Time at which the order's expected_delivery_year was delayed. |
| `delivered_at` | Time at which the order was delivered. |
| `delivery_details` | Details about the delivery of carbon removal for this order. |
| `expected_delivery_year` | The year this order is expected to be delivered. |
| `id` | Unique identifier for the object. |
| `livemode` | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons` | Quantity of carbon removal that is included in this order. |
| `object` | String representing the object's type. |
| `product` | Unique ID for the Climate `Product` this order is purchasing. |
| `product_substituted_at` | Time at which the order's product was substituted for a different product. |
| `status` | The current status of this order. |

Operations: Create, List, Load.

API path: `/v1/climate/orders/{order}`

#### OutboundPayment

| Field | Description |
| --- | --- |
| `amount` | Amount (in cents) transferred. |
| `cancelable` | Returns `true` if the object can be canceled, and `false` otherwise. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | ID of the [customer](https://docs.stripe.com/api/customers) to whom an OutboundPayment is sent. |
| `description` | An arbitrary string attached to the object. |
| `destination_payment_method` | The PaymentMethod via which an OutboundPayment is sent. |
| `destination_payment_method_details` | Details about the PaymentMethod for an OutboundPayment. |
| `end_user_details` | Details about the end user. |
| `expected_arrival_date` | The date when funds are expected to arrive in the destination account. |
| `financial_account` | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `returned_details` | Details about a returned OutboundPayment. |
| `statement_descriptor` | The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer). |
| `status` | Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. |
| `status_transitions` |  |
| `tracking_details` | Details about network-specific tracking information if available. |
| `transaction` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/test_helpers/treasury/outbound_payments/{id}`

#### OutboundTransfer

| Field | Description |
| --- | --- |
| `amount` | Amount (in cents) transferred. |
| `cancelable` | Returns `true` if the object can be canceled, and `false` otherwise. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | An arbitrary string attached to the object. |
| `destination_payment_method` | The PaymentMethod used as the payment instrument for an OutboundTransfer. |
| `destination_payment_method_details` |  |
| `expected_arrival_date` | The date when funds are expected to arrive in the destination account. |
| `financial_account` | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `returned_details` | Details about a returned OutboundTransfer. |
| `statement_descriptor` | Information about the OutboundTransfer to be sent to the recipient account. |
| `status` | Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. |
| `status_transitions` |  |
| `tracking_details` | Details about network-specific tracking information if available. |
| `transaction` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}`

#### PaymentAttemptRecord

| Field | Description |
| --- | --- |
| `amount` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | ID of the Connect application that created the PaymentAttemptRecord. |
| `created` | Time at which the object was created. |
| `customer_details` | Customer information for this payment. |
| `customer_presence` | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | An arbitrary string attached to the object. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `payment_method_details` | Information about the Payment Method debited for this payment. |
| `payment_record` | ID of the Payment Record this Payment Attempt Record belongs to. |
| `processor_details` | Processor information associated with this payment. |
| `reported_by` | Indicates who reported the payment. |
| `shipping_details` | Shipping information for this payment. |

Operations: List, Load.

API path: `/v1/payment_attempt_records`

#### PaymentEvaluation

| Field | Description |
| --- | --- |
| `client_device_metadata_details` | Client device metadata attached to this payment evaluation. |
| `created_at` | Time at which the object was created. |
| `customer_details` | Customer details attached to this payment evaluation. |
| `events` | Event information associated with the payment evaluation, such as refunds, dispute, early fraud warnings, or user interventions. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `outcome` | Indicates the final outcome for the payment evaluation. |
| `payment_details` | Payment details attached to this payment evaluation. |
| `recommended_action` | Recommended action based on the score of the `fraudulent_payment` signal. |
| `signals` | Collection of signals for this payment evaluation. |

Operations: Create.

API path: `/v1/radar/payment_evaluations`

#### PaymentIntent

| Field | Description |
| --- | --- |
| `allowed_payment_method_types` | The list of payment method types allowed for use with this payment. |
| `amount` | Amount intended to be collected by this PaymentIntent. |
| `amount_capturable` | Amount that can be captured from this PaymentIntent. |
| `amount_details` |  |
| `amount_received` | Amount that this PaymentIntent collects. |
| `application` | ID of the Connect application that created the PaymentIntent. |
| `application_fee_amount` | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `automatic_payment_methods` | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `canceled_at` | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_reason` | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | Controls when the funds will be captured from the customer's account. |
| `client_secret` | The client secret of this PaymentIntent. |
| `confirmation_method` | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | ID of the Customer this PaymentIntent belongs to, if one exists. |
| `customer_account` | ID of the Account representing the customer that this PaymentIntent belongs to, if one exists. |
| `description` | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | The list of payment method types to exclude from use with this payment. |
| `hooks` |  |
| `id` | Unique identifier for the object. |
| `last_payment_error` | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `managed_payments` | Settings for Managed Payments. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `object` | String representing the object's type. |
| `on_behalf_of` | You can specify the settlement merchant as the connected account using the `on_behalf_of` attribute on the charge. |
| `payment_details` |  |
| `payment_method` | ID of the payment method used in this PaymentIntent. |
| `payment_method_configuration_details` | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_options` | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | The list of payment method types (e.g. |
| `payment_record` | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `presentment_details` |  |
| `processing` | If present, this property tells you about the processing state of the payment. |
| `receipt_email` | Email address that the receipt for the resulting payment will be sent to. |
| `review` | ID of the review associated with this PaymentIntent, if any. |
| `setup_future_usage` | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `shipping` | Shipping information for this PaymentIntent. |
| `statement_descriptor` | Text that appears on the customer's statement as the statement descriptor for a non-card charge. |
| `statement_descriptor_suffix` | Provides information about a card charge. |
| `status` | Status of this PaymentIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `requires_capture`, `canceled`, or `succeeded`. |
| `transfer_data` | The data that automatically creates a Transfer after the payment finalizes. |
| `transfer_group` | A string that identifies the resulting payment as part of a group. |

Operations: Create, List, Load.

API path: `/v1/payment_intents/{intent}`

#### PaymentIntentAmountDetailsLineItem

| Field | Description |
| --- | --- |
| `discount_amount` | The discount applied on this line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `id` | Unique identifier for the object. |
| `object` | String representing the object's type. |
| `payment_method_options` | Payment method-specific information for line items. |
| `product_code` | The product code of the line item, such as an SKU. |
| `product_name` | The product name of the line item. |
| `quantity` | The quantity of items. |
| `tax` | Contains information about the tax on the item. |
| `unit_cost` | The unit cost of the line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `unit_of_measure` | A unit of measure for the line item, such as gallons, feet, meters, etc. |

Operations: List.

API path: `/v1/payment_intents/{intent}/amount_details_line_items`

#### PaymentLink

| Field | Description |
| --- | --- |
| `active` | Whether the payment link's `url` is active. |
| `after_completion` |  |
| `allow_promotion_codes` | Whether user redeemable promotion codes are enabled. |
| `application` | The ID of the Connect application that created the Payment Link. |
| `application_fee_amount` | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. |
| `automatic_tax` |  |
| `billing_address_collection` | Configuration for collecting the customer's billing address. |
| `consent_collection` | When set, provides configuration to gather active consent from customers. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | Collect additional information from your customer using custom fields. |
| `custom_text` |  |
| `customer_creation` | Configuration for Customer creation during checkout. |
| `id` | Unique identifier for the object. |
| `inactive_message` | The custom message to be displayed to a customer when a payment link is no longer active. |
| `invoice_creation` | Configuration for creating invoice for payment mode payment links. |
| `line_items` | The line items representing what is being sold. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `managed_payments` | Settings for Managed Payments for this Payment Link and resulting [CheckoutSessions](/api/checkout/sessions/object), [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/ob… |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name_collection` |  |
| `object` | String representing the object's type. |
| `on_behalf_of` | The account on behalf of which to charge. |
| `optional_items` | The optional items presented to the customer at checkout. |
| `payment_intent_data` | Indicates the parameters to be passed to PaymentIntent creation during checkout. |
| `payment_method_collection` | Configuration for collecting a payment method during checkout. |
| `payment_method_options` | Payment-method-specific configuration. |
| `payment_method_types` | The list of payment method types that customers can use. |
| `phone_number_collection` |  |
| `restrictions` | Settings that restrict the usage of a payment link. |
| `shipping_address_collection` | Configuration for collecting the customer's shipping address. |
| `shipping_options` | The shipping rate options applied to the session. |
| `submit_type` | Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button. |
| `subscription_data` | When creating a subscription, the specified configuration data will be used. |
| `tax_id_collection` |  |
| `transfer_data` | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to. |
| `url` | The public URL that can be shared with customers. |

Operations: Create, List, Load.

API path: `/v1/payment_links/{payment_link}`

#### PaymentMethod

| Field | Description |
| --- | --- |
| `acss_debit` |  |
| `affirm` |  |
| `afterpay_clearpay` |  |
| `alipay` |  |
| `allow_redisplay` | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `alma` |  |
| `amazon_pay` |  |
| `au_becs_debit` |  |
| `bacs_debit` |  |
| `bancontact` |  |
| `billie` |  |
| `billing_details` |  |
| `bizum` |  |
| `blik` |  |
| `boleto` |  |
| `card` |  |
| `card_present` |  |
| `cashapp` |  |
| `created` | Time at which the object was created. |
| `crypto` |  |
| `custom` |  |
| `customer` | The ID of the Customer to which this PaymentMethod is saved. |
| `customer_account` |  |
| `customer_balance` |  |
| `eps` |  |
| `fpx` |  |
| `giropay` |  |
| `grabpay` |  |
| `id` | Unique identifier for the object. |
| `ideal` |  |
| `interac_present` |  |
| `kakao_pay` |  |
| `klarna` |  |
| `konbini` |  |
| `kr_card` |  |
| `link` |  |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `mb_way` |  |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mobilepay` |  |
| `multibanco` |  |
| `naver_pay` |  |
| `nz_bank_account` |  |
| `object` | String representing the object's type. |
| `oxxo` |  |
| `p24` |  |
| `pay_by_bank` |  |
| `payco` |  |
| `paynow` |  |
| `paypal` |  |
| `paypay` |  |
| `payto` |  |
| `pix` |  |
| `promptpay` |  |
| `radar_options` | Options to configure Radar. |
| `revolut_pay` |  |
| `samsung_pay` |  |
| `satispay` |  |
| `scalapay` |  |
| `sepa_debit` |  |
| `sequra` |  |
| `sofort` |  |
| `sunbit` |  |
| `swish` |  |
| `twint` |  |
| `type` | The type of the PaymentMethod. |
| `upi` |  |
| `us_bank_account` |  |
| `wechat_pay` |  |
| `zip` |  |

Operations: Create, List, Load.

API path: `/v1/payment_methods/{payment_method}`

#### PaymentMethodConfiguration

| Field | Description |
| --- | --- |
| `acss_debit` |  |
| `active` | Whether the configuration can be used for new payments. |
| `affirm` |  |
| `afterpay_clearpay` |  |
| `alipay` |  |
| `alma` |  |
| `amazon_pay` |  |
| `apple_pay` |  |
| `application` | For child configs, the Connect application associated with the configuration. |
| `au_becs_debit` |  |
| `bacs_debit` |  |
| `bancontact` |  |
| `billie` |  |
| `bizum` |  |
| `blik` |  |
| `boleto` |  |
| `card` |  |
| `cartes_bancaires` |  |
| `cashapp` |  |
| `crypto` |  |
| `customer_balance` |  |
| `eps` |  |
| `fpx` |  |
| `giropay` |  |
| `google_pay` |  |
| `grabpay` |  |
| `id` | Unique identifier for the object. |
| `ideal` |  |
| `is_default` | The default configuration is used whenever a payment method configuration is not specified. |
| `jcb` |  |
| `kakao_pay` |  |
| `klarna` |  |
| `konbini` |  |
| `kr_card` |  |
| `link` |  |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `mb_way` |  |
| `mobilepay` |  |
| `multibanco` |  |
| `name` | The configuration's name. |
| `naver_pay` |  |
| `nz_bank_account` |  |
| `object` | String representing the object's type. |
| `oxxo` |  |
| `p24` |  |
| `parent` | For child configs, the configuration's parent configuration. |
| `pay_by_bank` |  |
| `payco` |  |
| `paynow` |  |
| `paypal` |  |
| `paypay` |  |
| `payto` |  |
| `pix` |  |
| `promptpay` |  |
| `revolut_pay` |  |
| `samsung_pay` |  |
| `satispay` |  |
| `scalapay` |  |
| `sepa_debit` |  |
| `sequra` |  |
| `sofort` |  |
| `sunbit` |  |
| `swish` |  |
| `twint` |  |
| `upi` |  |
| `us_bank_account` |  |
| `wechat_pay` |  |
| `zip` |  |

Operations: Create, List, Load.

API path: `/v1/payment_method_configurations/{configuration}`

#### PaymentMethodDomain

| Field | Description |
| --- | --- |
| `amazon_pay` | Indicates the status of a specific payment method on a payment method domain. |
| `apple_pay` | Indicates the status of a specific payment method on a payment method domain. |
| `created` | Time at which the object was created. |
| `domain_name` | The domain name that this payment method domain object represents. |
| `enabled` | Whether this payment method domain is enabled. |
| `google_pay` | Indicates the status of a specific payment method on a payment method domain. |
| `id` | Unique identifier for the object. |
| `klarna` | Indicates the status of a specific payment method on a payment method domain. |
| `link` | Indicates the status of a specific payment method on a payment method domain. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `paypal` | Indicates the status of a specific payment method on a payment method domain. |

Operations: Create, List, Load.

API path: `/v1/payment_method_domains/{payment_method_domain}`

#### PaymentRecord

| Field | Description |
| --- | --- |
| `amount` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | ID of the Connect application that created the PaymentRecord. |
| `created` | Time at which the object was created. |
| `customer_details` | Customer information for this payment. |
| `customer_presence` | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | An arbitrary string attached to the object. |
| `id` | Unique identifier for the object. |
| `latest_payment_attempt_record` | ID of the latest Payment Attempt Record attached to this Payment Record. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `payment_method_details` | Information about the Payment Method debited for this payment. |
| `processor_details` | Processor information associated with this payment. |
| `reported_by` | Indicates who reported the payment. |
| `shipping_details` | Shipping information for this payment. |

Operations: Create, List, Load.

API path: `/v1/payment_records/{id}/report_payment_attempt`

#### Payout

| Field | Description |
| --- | --- |
| `amount` | The amount (in cents (or local equivalent)) that transfers to your bank account or debit card. |
| `application_fee` | The application fee (if any) for the payout. |
| `application_fee_amount` | The amount of the application fee (if any) requested for the payout. |
| `arrival_date` | Date that you can expect the payout to arrive in the bank. |
| `automatic` | Returns `true` if the payout is created by an [automated payout schedule](https://docs.stripe.com/payouts#payout-schedule) and `false` if it's [requested manually](https://stripe.com/docs/payouts#manual-payouts). |
| `balance_transaction` | ID of the balance transaction that describes the impact of this payout on your account balance. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | An arbitrary string attached to the object. |
| `destination` | ID of the bank account or card the payout is sent to. |
| `failure_balance_transaction` | If the payout fails or cancels, this is the ID of the balance transaction that reverses the initial balance transaction and returns the funds from the failed payout back in your balance. |
| `failure_code` | Error code that provides a reason for a payout failure, if available. |
| `failure_message` | Message that provides the reason for a payout failure, if available. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `method` | The method used to send this payout, which can be `standard` or `instant`. |
| `object` | String representing the object's type. |
| `original_payout` | If the payout reverses another, this is the ID of the original payout. |
| `payout_method` | ID of the v2 FinancialAccount the funds are sent to. |
| `reconciliation_status` | If `completed`, you can use the [Balance Transactions API](https://docs.stripe.com/api/balance_transactions/list#balance_transaction_list-payout) to list all balance transactions that are paid out in this payout. |
| `reversed_by` | If the payout reverses, this is the ID of the payout that reverses this payout. |
| `source_type` | The source balance this payout came from, which can be one of the following: `card`, `fpx`, or `bank_account`. |
| `statement_descriptor` | Extra information about a payout that displays on the user's bank statement. |
| `status` | Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`. |
| `trace_id` | A value that generates from the beneficiary's bank that allows users to track payouts with their bank. |
| `type` | Can be `bank_account` or `card`. |

Operations: Create, List, Load.

API path: `/v1/payouts/{payout}`

#### Person

| Field | Description |
| --- | --- |
| `account` | The account the person is associated with. |
| `additional_tos_acceptances` |  |
| `address` |  |
| `address_kana` |  |
| `address_kanji` |  |
| `created` | Time at which the object was created. |
| `dob` |  |
| `email` | The person's email address. |
| `first_name` | The person's first name. |
| `first_name_kana` | The Kana variation of the person's first name (Japan only). |
| `first_name_kanji` | The Kanji variation of the person's first name (Japan only). |
| `full_name_aliases` | A list of alternate names or aliases that the person is known by. |
| `future_requirements` |  |
| `gender` | The person's gender. |
| `id` | Unique identifier for the object. |
| `id_number_provided` | Whether the person's `id_number` was provided. |
| `id_number_secondary_provided` | Whether the person's `id_number_secondary` was provided. |
| `last_name` | The person's last name. |
| `last_name_kana` | The Kana variation of the person's last name (Japan only). |
| `last_name_kanji` | The Kanji variation of the person's last name (Japan only). |
| `maiden_name` | The person's maiden name. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nationality` | The country where the person is a national. |
| `object` | String representing the object's type. |
| `phone` | The person's phone number. |
| `political_exposure` | Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction. |
| `registered_address` |  |
| `relationship` |  |
| `requirements` |  |
| `ssn_last_4_provided` | Whether the last four digits of the person's Social Security number have been provided (U.S. |
| `us_cfpb_data` | Demographic data related to the person. |
| `verification` |  |

Operations: Create, List, Load.

API path: `/v1/accounts/{account}/people/{person}`

#### PersonalizationDesign

| Field | Description |
| --- | --- |
| `card_logo` | The file for the card logo to use with physical bundles that support card logos. |
| `carrier_text` | Hash containing carrier text, for use with physical bundles that support carrier text. |
| `created` | Time at which the object was created. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | A lookup key used to retrieve personalization designs dynamically from a static string. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | Friendly display name. |
| `object` | String representing the object's type. |
| `physical_bundle` | The physical bundle object belonging to this personalization design. |
| `preferences` |  |
| `rejection_reasons` |  |
| `status` | Whether this personalization design can be used to create cards. |

Operations: Create, List, Load.

API path: `/v1/issuing/personalization_designs/{personalization_design}`

#### PhysicalBundle

| Field | Description |
| --- | --- |
| `card_logo` | The policy for how to use card logo images in a card design with this physical bundle. |
| `carrier_text` | The policy for how to use carrier letter text in a card design with this physical bundle. |
| `features` |  |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `name` | Friendly display name. |
| `object` | String representing the object's type. |
| `second_line` | The policy for how to use a second line on a card with this physical bundle. |
| `status` | Whether this physical bundle can be used to create cards. |
| `type` | Whether this physical bundle is a standard Stripe offering or custom-made for you. |

Operations: List, Load.

API path: `/v1/issuing/physical_bundles`

#### Plan

| Field | Description |
| --- | --- |
| `active` | Whether the plan can be used for new purchases. |
| `amount` | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `amount_decimal` | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `billing_scheme` | Describes how to compute the price per period. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `id` | Unique identifier for the object. |
| `interval` | The frequency at which a subscription is billed. |
| `interval_count` | The number of intervals (specified in the `interval` attribute) between subscription billings. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `meter` | The meter tracking the usage of a metered price |
| `nickname` | A brief description of the plan, hidden from customers. |
| `object` | String representing the object's type. |
| `product` | The product whose pricing this plan determines. |
| `tiers` | Each element represents a pricing tier. |
| `tiers_mode` | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_usage` | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_period_days` | Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://docs.stripe.com/api#create_subscription-trial_from_plan). |
| `usage_type` | Configures how the quantity per period should be determined. |

Operations: Create, List, Load.

API path: `/v1/plans/{plan}`

#### Price

| Field | Description |
| --- | --- |
| `active` | Whether the price can be used for new purchases. |
| `billing_scheme` | Describes how to compute the price per period. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | Prices defined in each available currency option. |
| `custom_unit_amount` | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | A lookup key used to retrieve prices dynamically from a static string. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | A brief description of the price, hidden from customers. |
| `object` | String representing the object's type. |
| `product` | The ID of the product this price is associated with. |
| `recurring` | The recurring components of a price such as `interval` and `usage_type`. |
| `tax_behavior` | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tiers` | Each element represents a pricing tier. |
| `tiers_mode` | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_quantity` | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `type` | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |

Operations: Create, List, Load.

API path: `/v1/prices/{price}`

#### Product

| Field | Description |
| --- | --- |
| `active` | Whether the product is currently available for purchase. |
| `created` | Time at which the object was created. |
| `current_prices_per_metric_ton` | Current prices for a metric ton of carbon removal in a currency's smallest unit. |
| `default_price` | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `delivery_year` | The year in which the carbon removal is expected to be delivered. |
| `description` | The product's description, meant to be displayable to the customer. |
| `id` | Unique identifier for the object. |
| `images` | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `livemode` | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `marketing_features` | A list of up to 15 marketing features for this product. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons_available` | The quantity of metric tons available for reservation. |
| `name` | The Climate product's name. |
| `object` | String representing the object's type. |
| `package_dimensions` | The dimensions of this product for shipping purposes. |
| `shippable` | Whether this product is shipped (i.e., physical goods). |
| `statement_descriptor` | Extra information about a product which will appear on your customer's credit card statement. |
| `suppliers` | The carbon removal suppliers that fulfill orders for this Climate product. |
| `tax_code` | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `unit_label` | A label that represents units of this product. |
| `updated` | Time at which the object was last updated. |
| `url` | A URL of a publicly-accessible webpage for this product. |

Operations: Create, List, Load, Remove.

API path: `/v1/products/{id}`

#### ProductFeature

| Field | Description |
| --- | --- |
| `active` | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | A unique key you provide as your own system identifier. |
| `metadata` | Set of key-value pairs that you can attach to an object. |
| `name` | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | String representing the object's type. |

Operations: Create, Load.

API path: `/v1/products/{product}/features`

#### PromotionCode

| Field | Description |
| --- | --- |
| `active` | Whether the promotion code is currently active. |
| `code` | The customer-facing code. |
| `created` | Time at which the object was created. |
| `customer` | The customer who can use this promotion code. |
| `customer_account` | The account representing the customer who can use this promotion code. |
| `expires_at` | Date at which the promotion code can no longer be redeemed. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | Maximum number of times this promotion code can be redeemed. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `promotion` |  |
| `restrictions` |  |
| `times_redeemed` | Number of times this promotion code has been used. |

Operations: Create, List, Load.

API path: `/v1/promotion_codes/{promotion_code}`

#### Quote

| Field | Description |
| --- | --- |
| `amount_subtotal` | Total before any discounts or taxes are applied. |
| `amount_total` | Total after discounts and taxes are applied. |
| `application` | ID of the Connect Application that created the quote. |
| `application_fee_amount` | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` |  |
| `collection_method` | Either `charge_automatically`, or `send_invoice`. |
| `computed` |  |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | The customer who received this quote. |
| `customer_account` | The account representing the customer who received this quote. |
| `default_tax_rates` | The tax rates applied to this quote. |
| `description` | A description that will be displayed on the quote PDF. |
| `discounts` | The discounts applied to this quote. |
| `expires_at` | The date on which the quote will be canceled if in `open` or `draft` status. |
| `footer` | A footer that will be displayed on the quote PDF. |
| `from_quote` | Details of the quote that was cloned. |
| `header` | A header that will be displayed on the quote PDF. |
| `id` | Unique identifier for the object. |
| `invoice` | The invoice that was created from this quote. |
| `invoice_settings` |  |
| `line_items` | A list of items the customer is being quoted for. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | A unique number that identifies this particular quote. |
| `object` | String representing the object's type. |
| `on_behalf_of` | The account on behalf of which to charge. |
| `status` | The status of the quote. |
| `status_transitions` |  |
| `subscription` | The subscription that was created or updated from this quote. |
| `subscription_data` |  |
| `subscription_schedule` | The subscription schedule that was created or updated from this quote. |
| `test_clock` | ID of the test clock this quote belongs to. |
| `total_details` |  |
| `transfer_data` | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices. |

Operations: Create, List, Load.

API path: `/v1/quotes/{quote}`

#### QuoteComputedUpfrontLineItem

| Field | Description |
| --- | --- |
| `adjustable_quantity` |  |
| `amount_discount` | Total discount amount applied. |
| `amount_subtotal` | Total before any discounts or taxes are applied. |
| `amount_tax` | Total tax amount applied. |
| `amount_total` | Total after discounts and taxes. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | An arbitrary string attached to the object. |
| `discounts` | The discounts applied to the line item. |
| `id` | Unique identifier for the object. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `price` | The price used to generate the line item. |
| `quantity` | The quantity of products being purchased. |
| `taxes` | The taxes applied to the line item. |

Operations: List.

API path: `/v1/quotes/{quote}/computed_upfront_line_items`

#### QuotePdf

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/v1/quotes/{quote}/pdf`

#### Reader

| Field | Description |
| --- | --- |
| `action` | The most recent action performed by the reader. |
| `device_sw_version` | The current software version of the reader. |
| `device_type` | Device type of the reader. |
| `id` | Unique identifier for the object. |
| `ip_address` | The local IP address of the reader. |
| `label` | Custom label given to the reader for easier identification. |
| `last_seen_at` | The last time this reader reported to Stripe backend. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `location` | The location identifier of the reader. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `serial_number` | Serial number of the reader. |
| `status` | The networking status of the reader. |

Operations: Create, List, Load, Remove.

API path: `/v1/terminal/readers/{reader}`

#### ReceivedCredit

| Field | Description |
| --- | --- |
| `amount` | Amount (in cents) transferred. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | An arbitrary string attached to the object. |
| `failure_code` | Reason for the failure. |
| `financial_account` | The FinancialAccount that received the funds. |
| `hosted_regulatory_receipt_url` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | Unique identifier for the object. |
| `initiating_payment_method_details` |  |
| `linked_flows` |  |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `network` | The rails used to send the funds. |
| `object` | String representing the object's type. |
| `reversal_details` | Details describing when a ReceivedCredit may be reversed. |
| `status` | Status of the ReceivedCredit. |
| `transaction` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/test_helpers/treasury/received_credits`

#### ReceivedDebit

| Field | Description |
| --- | --- |
| `amount` | Amount (in cents) transferred. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | An arbitrary string attached to the object. |
| `failure_code` | Reason for the failure. |
| `financial_account` | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | Unique identifier for the object. |
| `initiating_payment_method_details` |  |
| `linked_flows` |  |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `network` | The network used for the ReceivedDebit. |
| `object` | String representing the object's type. |
| `reversal_details` | Details describing when a ReceivedDebit might be reversed. |
| `status` | Status of the ReceivedDebit. |
| `transaction` | The Transaction associated with this object. |

Operations: Create, List, Load.

API path: `/v1/test_helpers/treasury/received_debits`

#### Refund

| Field | Description |
| --- | --- |
| `amount` | Amount, in cents (or local equivalent). |
| `balance_transaction` | Balance transaction that describes the impact on your account balance. |
| `charge` | ID of the charge that's refunded. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | ID of the customer of this refund. |
| `customer_account` | ID of the account of this refund. |
| `description` | An arbitrary string attached to the object. |
| `destination_details` |  |
| `failure_balance_transaction` | After the refund fails, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction. |
| `failure_reason` | Provides the reason for the refund failure. |
| `fee` | ID of the application fee that was refunded. |
| `id` | Unique identifier for the object. |
| `instructions_email` | For payment methods without native refund support (for example, Konbini, PromptPay), provide an email address for the customer to receive refund instructions. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` |  |
| `object` | String representing the object's type. |
| `payment_intent` | ID of the PaymentIntent that's refunded. |
| `payment_method` | ID of the payment method associated with this refund. |
| `pending_reason` | Provides the reason for why the refund is pending. |
| `presentment_details` |  |
| `reason` | Reason for the refund, which is either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`). |
| `receipt_number` | This is the transaction number that appears on email receipts sent for this refund. |
| `source_transfer_reversal` | The transfer reversal that's associated with the refund. |
| `status` | Status of the refund. |
| `transfer_reversal` | This refers to the transfer reversal object if the accompanying transfer reverses. |

Operations: Create, List, Load.

API path: `/v1/application_fees/{fee}/refunds/{id}`

#### Registration

| Field | Description |
| --- | --- |
| `active_from` | Time at which the registration becomes active. |
| `ae` |  |
| `al` |  |
| `am` |  |
| `ao` |  |
| `at` |  |
| `au` |  |
| `aw` |  |
| `az` |  |
| `ba` |  |
| `bb` |  |
| `bd` |  |
| `be` |  |
| `bf` |  |
| `bg` |  |
| `bh` |  |
| `bj` |  |
| `bs` |  |
| `by` |  |
| `ca` |  |
| `cd` |  |
| `ch` |  |
| `cl` |  |
| `cm` |  |
| `co` |  |
| `country` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `country_options` |  |
| `cr` |  |
| `created` | Time at which the object was created. |
| `cv` |  |
| `cy` |  |
| `cz` |  |
| `de` |  |
| `dk` |  |
| `ec` |  |
| `ee` |  |
| `eg` |  |
| `es` |  |
| `et` |  |
| `expires_at` | If set, the registration stops being active at this time. |
| `fi` |  |
| `fr` |  |
| `gb` |  |
| `ge` |  |
| `gn` |  |
| `gr` |  |
| `hr` |  |
| `hu` |  |
| `id` | Unique identifier for the object. |
| `ie` |  |
| `in` |  |
| `is` |  |
| `it` |  |
| `jp` |  |
| `ke` |  |
| `kg` |  |
| `kh` |  |
| `kr` |  |
| `kz` |  |
| `la` |  |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `lk` |  |
| `lt` |  |
| `lu` |  |
| `lv` |  |
| `ma` |  |
| `md` |  |
| `me` |  |
| `mk` |  |
| `mr` |  |
| `mt` |  |
| `mx` |  |
| `my` |  |
| `ng` |  |
| `nl` |  |
| `no` |  |
| `np` |  |
| `nz` |  |
| `object` | String representing the object's type. |
| `om` |  |
| `pe` |  |
| `ph` |  |
| `pl` |  |
| `pt` |  |
| `ro` |  |
| `rs` |  |
| `ru` |  |
| `sa` |  |
| `se` |  |
| `sg` |  |
| `si` |  |
| `sk` |  |
| `sn` |  |
| `sr` |  |
| `status` | The status of the registration. |
| `th` |  |
| `tj` |  |
| `tr` |  |
| `tw` |  |
| `tz` |  |
| `ua` |  |
| `ug` |  |
| `us` |  |
| `uy` |  |
| `uz` |  |
| `vn` |  |
| `za` |  |
| `zm` |  |
| `zw` |  |

Operations: Create, List, Load.

API path: `/v1/tax/registrations/{id}`

#### ReportRun

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `error` | If something should go wrong during the run, a message about the failure (populated when `status=failed`). |
| `id` | Unique identifier for the object. |
| `livemode` | `true` if the report is run on live mode data and `false` if it is run on test mode data. |
| `object` | String representing the object's type. |
| `parameters` |  |
| `report_type` | The ID of the [report type](https://docs.stripe.com/reports/report-types) to run, such as `"balance.summary.1"`. |
| `result` | The file object representing the result of the report run (populated when `status=succeeded`). |
| `status` | Status of this report run. |
| `succeeded_at` | Timestamp at which this run successfully finished (populated when `status=succeeded`). |

Operations: Create, List, Load.

API path: `/v1/reporting/report_runs`

#### ReportType

| Field | Description |
| --- | --- |
| `data_available_end` | Most recent time for which this Report Type is available. |
| `data_available_start` | Earliest time for which this Report Type is available. |
| `default_columns` | List of column names that are included by default when this Report Type gets run. |
| `id` | The [ID of the Report Type](https://docs.stripe.com/reporting/statements/api#available-report-types), such as `balance.summary.1`. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `name` | Human-readable name of the Report Type |
| `object` | String representing the object's type. |
| `updated` | When this Report Type was latest updated. |
| `version` | Version of the Report Type. |

Operations: List, Load.

API path: `/v1/reporting/report_types`

#### Request

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `payment_method` | The PaymentMethod to insert into the forwarded request. |
| `replacements` | The field kinds to be replaced in the forwarded request. |
| `request_context` | Context about the request from Stripe's servers to the destination endpoint. |
| `request_details` | The request that was sent to the destination endpoint. |
| `response_details` | The response that the destination endpoint returned to us. |
| `url` | The destination URL for the forwarded request. |

Operations: Create, List, Load.

API path: `/v1/forwarding/requests`

#### Reversal

| Field | Description |
| --- | --- |
| `amount` | Amount, in cents (or local equivalent). |
| `balance_transaction` | Balance transaction that describes the impact on your account balance. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `destination_payment_refund` | Linked payment refund for the transfer reversal. |
| `id` | Unique identifier for the object. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `source_refund` | ID of the refund responsible for the transfer reversal. |
| `transfer` | ID of the transfer that was reversed. |

Operations: Create, List, Load.

API path: `/v1/transfers/{transfer}/reversals/{id}`

#### Review

| Field | Description |
| --- | --- |
| `billing_zip` | The ZIP or postal code of the card used, if applicable. |
| `charge` | The charge associated with this review. |
| `closed_reason` | The reason the review was closed, or null if it has not yet been closed. |
| `created` | Time at which the object was created. |
| `id` | Unique identifier for the object. |
| `ip_address` | The IP address where the payment originated. |
| `ip_address_location` | Information related to the location of the payment. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `open` | If `true`, the review needs action. |
| `opened_reason` | The reason the review was opened. |
| `payment_intent` | The PaymentIntent ID associated with this review, if one exists. |
| `reason` | The reason the review is currently open or closed. |
| `session` | Information related to the browsing session of the user who initiated the payment. |

Operations: Create, List, Load.

API path: `/v1/reviews/{review}/approve`

#### ScheduledQueryRun

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `data_load_time` | When the query was run, Sigma contained a snapshot of your Stripe data at this time. |
| `error` |  |
| `file` | The file object representing the results of the query. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `result_available_until` | Time at which the result expires and is no longer available for download. |
| `sql` | SQL for the query. |
| `status` | The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise. |
| `title` | Title of the query. |

Operations: List, Load.

API path: `/v1/sigma/scheduled_query_runs`

#### Search

| Field | Description |
| --- | --- |
| `account_country` | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | The account tax IDs associated with the invoice. |
| `active` | Whether the price can be used for new purchases. |
| `address` | The customer's billing address. |
| `allowed_payment_method_types` | The list of payment method types allowed for use with this payment. |
| `amount` | Amount intended to be collected by this payment. |
| `amount_capturable` | Amount that can be captured from this PaymentIntent. |
| `amount_captured` | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_details` |  |
| `amount_due` | Final amount due at this time for this invoice. |
| `amount_overpaid` | Amount that was overpaid on the invoice. |
| `amount_paid` | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_received` | Amount that this PaymentIntent collects. |
| `amount_refunded` | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `amount_remaining` | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | This is the sum of all the shipping amounts. |
| `application` | ID of the Connect application that created the charge. |
| `application_fee` | The application fee (if any) for the charge. |
| `application_fee_amount` | The amount of the application fee (if any) requested for the charge. |
| `application_fee_percent` | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `attempt_count` | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_payment_methods` | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `automatic_tax` |  |
| `automatically_finalizes_at` | The time when this invoice is currently scheduled to be automatically finalized. |
| `balance` | The current balance, if any, that's stored on the customer in their default currency. |
| `balance_transaction` | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_cycle_anchor` | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_details` |  |
| `billing_mode` | The billing mode of the subscription. |
| `billing_reason` | Indicates the reason why the invoice was created. |
| `billing_schedules` | Billing schedules for this subscription. |
| `billing_scheme` | Describes how to compute the price per period. |
| `billing_thresholds` | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `business_name` | The customer's business name. |
| `calculated_statement_descriptor` | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `cancel_at` | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_details` | Details about why this subscription was cancelled |
| `cancellation_reason` | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | Controls when the funds will be captured from the customer's account. |
| `captured` | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `cash_balance` | The current funds being held by Stripe on behalf of the customer. |
| `client_secret` | The client secret of this PaymentIntent. |
| `collection_method` | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_method` | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `confirmation_secret` | The confirmation secret associated with this invoice. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | Prices defined in each available currency option. |
| `custom_fields` | Custom fields displayed on the invoice. |
| `custom_unit_amount` | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `customer` | ID of the customer this charge is for if one exists. |
| `customer_account` | The ID of an Account representing a customer. |
| `customer_address` | The customer's address. |
| `customer_email` | The customer's email. |
| `customer_name` | The customer's name. |
| `customer_phone` | The customer's phone number. |
| `customer_shipping` | The customer's shipping information. |
| `customer_tax_exempt` | The customer's tax exempt status. |
| `customer_tax_ids` | The customer's tax IDs. |
| `days_until_due` | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | ID of the default payment method for the invoice. |
| `default_price` | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `default_source` | ID of the default payment source for the customer. |
| `default_tax_rates` | The tax rates applied to this invoice, if any. |
| `delinquent` | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | An arbitrary string attached to the object. |
| `discount` | Describes the current discount active on the customer, if there is one. |
| `discounts` | The discounts applied to the invoice. |
| `disputed` | Whether the charge has been disputed. |
| `due_date` | The date on which payment for this invoice is due. |
| `effective_at` | The date when this invoice is in effect. |
| `email` | The customer's email address. |
| `ended_at` | If the subscription has ended, the date the subscription ended. |
| `ending_balance` | Ending customer balance after the invoice is finalized. |
| `excluded_payment_method_types` | The list of payment method types to exclude from use with this payment. |
| `failure_balance_transaction` | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | Message to user further explaining reason for charge failure if available. |
| `footer` | Footer displayed on the invoice. |
| `fraud_details` | Information on fraud assessments for the charge. |
| `from_invoice` | Details of the invoice that was cloned. |
| `hooks` |  |
| `hosted_invoice_url` | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | Unique identifier for the object. |
| `images` | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `individual_name` | The customer's individual name. |
| `invoice_credit_balance` | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_pdf` | The link to download the PDF for the invoice. |
| `invoice_prefix` | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` |  |
| `issuer` |  |
| `items` | List of subscription items, each with an attached price. |
| `last_finalization_error` | The error encountered during the previous attempt to finalize the invoice. |
| `last_payment_error` | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `latest_invoice` | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `latest_revision` | The ID of the most recent non-draft revision of this invoice |
| `lines` | The individual line items that make up the invoice. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | A lookup key used to retrieve prices dynamically from a static string. |
| `managed_payments` | Settings for Managed Payments. |
| `marketing_features` | A list of up to 15 marketing features for this product. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | The customer's full name or business name. |
| `next_action` | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `next_invoice_sequence` | The suffix of the customer's next invoice number (for example, 0001). |
| `next_payment_attempt` | The time at which payment will next be attempted. |
| `next_pending_invoice_item_invoice` | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `nickname` | A brief description of the price, hidden from customers. |
| `number` | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | String representing the object's type. |
| `on_behalf_of` | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | Details about whether the payment was accepted, and why. |
| `package_dimensions` | The dimensions of this product for shipping purposes. |
| `paid` | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `parent` | The parent that generated this invoice |
| `pause_collection` | If specified, payment collection for this subscription will be paused. |
| `payment_details` |  |
| `payment_intent` | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | ID of the payment method used in this charge. |
| `payment_method_configuration_details` | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_details` | Details about the payment method at the time of the transaction. |
| `payment_method_options` | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | The list of payment method types (e.g. |
| `payment_record` | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `payment_settings` | Payment settings passed on to invoices created by the subscription. |
| `payments` | Payments for this invoice. |
| `pending_invoice_item_interval` | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `period_end` | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | The earliest timestamp at which invoice items can be associated with this invoice. |
| `phone` | The customer's phone number. |
| `post_payment_credit_notes_amount` | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | Total amount of all pre-payment credit notes issued for this invoice. |
| `preferred_locales` | The customer's preferred locales (languages), ordered by preference. |
| `presentment_details` |  |
| `processing` | If present, this property tells you about the processing state of the payment. |
| `product` | The ID of the product this price is associated with. |
| `radar_options` | Options to configure Radar. |
| `receipt_email` | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | This is the URL to view the receipt for this charge. |
| `recurring` | The recurring components of a price such as `interval` and `usage_type`. |
| `refunded` | Whether the charge has been fully refunded. |
| `refunds` | A list of refunds that have been applied to the charge. |
| `rendering` | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `review` | ID of the review associated with this charge if one exists. |
| `schedule` | The schedule attached to the subscription |
| `setup_future_usage` | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `shippable` | Whether this product is shipped (i.e., physical goods). |
| `shipping` | Shipping information for the charge. |
| `shipping_cost` | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | Shipping details for the invoice. |
| `source_transfer` | The transfer ID which created this charge. |
| `sources` | The customer's payment sources, if any. |
| `start_date` | Date when the subscription was first created. |
| `starting_balance` | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | Provides information about a card charge. |
| `status` | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `status_details` | Describes changes to the subscription's status. |
| `status_transitions` |  |
| `subscriptions` | The customer's current subscriptions, if any. |
| `subtotal` | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `tax` |  |
| `tax_behavior` | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tax_code` | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `tax_exempt` | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | The customer's tax IDs. |
| `test_clock` | ID of the test clock that this customer belongs to. |
| `threshold_reason` |  |
| `tiers` | Each element represents a pricing tier. |
| `tiers_mode` | Defines if the tiering price should be `graduated` or `volume` based. |
| `total` | Total after discounts and taxes. |
| `total_discount_amounts` | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | The aggregate tax information of all line items. |
| `transfer` | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `transfer_data` | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `transfer_group` | A string that identifies this transaction as part of a group. |
| `transform_quantity` | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_end` | If the subscription has a trial, the end of that trial. |
| `trial_settings` | Settings related to subscription trials. |
| `trial_start` | If the subscription has a trial, the beginning of that trial. |
| `type` | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `unit_label` | A label that represents units of this product. |
| `updated` | Time at which the object was last updated. |
| `url` | A URL of a publicly-accessible webpage for this product. |
| `webhooks_delivered_at` | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

Operations: List.

API path: `/v1/charges/search`

#### Secret

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `deleted` | If true, indicates that this secret has been deleted |
| `expires_at` | The Unix timestamp for the expiry time of the secret, after which the secret deletes. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `name` | A name for the secret that's unique within the scope. |
| `object` | String representing the object's type. |
| `payload` | The plaintext secret value to be stored. |
| `scope` |  |
| `type` | The secret scope type. |
| `user` | The user ID, if type is set to "user" |

Operations: Create, List, Load.

API path: `/v1/apps/secrets`

#### Session

| Field | Description |
| --- | --- |
| `account_holder` | The account holder for whom accounts are collected in this session. |
| `accounts` | The accounts that were collected as part of this Session. |
| `adaptive_pricing` | Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing). |
| `after_expiration` | When set, provides configuration for actions to take if this Checkout Session expires. |
| `allow_promotion_codes` | Enables user redeemable promotion codes. |
| `allowed_payment_method_types` | A list of the types of payment methods (e.g., `card`) this Checkout Session can accept. |
| `amount_subtotal` | Total of all items before discounts or taxes are applied. |
| `amount_total` | Total of all items after discounts and taxes are applied. |
| `automatic_tax` |  |
| `bank_account_token` | Tokenization is the process Stripe uses to collect sensitive card or bank account details, or personally identifiable information (PII), directly from your customers in a secure manner. |
| `billing_address_collection` | Describes whether Checkout should collect the customer's billing address. |
| `branding_settings` |  |
| `cancel_url` | If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. |
| `client_reference_id` | A unique string to reference the Checkout Session. |
| `client_secret` | The client secret of your Checkout Session. |
| `collected_information` | Information about the customer collected within the Checkout Session. |
| `configuration` | The configuration used by this session, describing the features available. |
| `consent` | Results of `consent_collection` for this session. |
| `consent_collection` | When set, provides configuration for the Checkout Session to gather active consent from customers. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_conversion` | Currency conversion details for [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing) sessions created before 2025-03-31. |
| `custom_fields` | Collect additional information from your customer using custom fields. |
| `custom_text` |  |
| `customer` | The ID of the customer for this Session. |
| `customer_account` | The ID of the account for this Session. |
| `customer_creation` | Configure whether a Checkout Session creates a Customer when the Checkout Session completes. |
| `customer_details` | The customer details including the customer's tax exempt status and the customer's tax IDs. |
| `customer_email` | If provided, this value will be used when the Customer object is created. |
| `discounts` | List of coupons and promotion codes attached to the Checkout Session. |
| `excluded_payment_method_types` | A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session. |
| `expires_at` | The timestamp at which the Checkout Session will expire. |
| `filters` |  |
| `flow` | Information about a specific flow for the customer to go through. |
| `id` | Unique identifier for the object. |
| `integration_identifier` | The integration identifier for this Checkout Session. |
| `invoice` | ID of the invoice created by the Checkout Session, if it exists. |
| `invoice_creation` | Details on the state of invoice creation for the Checkout Session. |
| `limits` |  |
| `line_items` | The line items purchased by the customer. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `locale` | The IETF language tag of the locale Checkout is displayed in. |
| `managed_payments` | Settings for Managed Payments for this Checkout Session and resulting [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/object). |
| `manual_entry` |  |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mode` | The mode of the Checkout Session. |
| `name_collection` |  |
| `object` | String representing the object's type. |
| `on_behalf_of` | The account for which the session was created on behalf of. |
| `optional_items` | The optional items presented to the customer at checkout. |
| `origin_context` | Where the user is coming from. |
| `payment_intent` | The ID of the PaymentIntent for Checkout Sessions in `payment` mode. |
| `payment_link` | The ID of the Payment Link that created this Session. |
| `payment_method_collection` | Configure whether a Checkout Session should collect a payment method for sessions with mode `payment`. |
| `payment_method_configuration_details` | Information about the payment method configuration used for this Checkout session if using dynamic payment methods. |
| `payment_method_options` | Payment-method-specific configuration for the PaymentIntent or SetupIntent of this CheckoutSession. |
| `payment_method_types` | A list of the types of payment methods (e.g. |
| `payment_status` | The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`. |
| `permissions` | This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object. |
| `phone_number_collection` |  |
| `prefetch` | Data features requested to be retrieved upon account creation. |
| `presentment_details` |  |
| `recovered_from` | The ID of the original expired Checkout Session that triggered the recovery flow. |
| `redirect_on_completion` | This parameter applies to `ui_mode: embedded_page`. |
| `return_url` | Applies to Checkout Sessions with `ui_mode: embedded_page` or `ui_mode: elements`. |
| `saved_payment_method_options` | Controls saved payment method settings for the session. |
| `setup_intent` | The ID of the SetupIntent for Checkout Sessions in `setup` mode. |
| `shipping_address_collection` | When set, provides configuration for Checkout to collect a shipping address from a customer. |
| `shipping_cost` | The details of the customer cost of shipping, including the customer chosen ShippingRate. |
| `shipping_options` | The shipping rate options applied to this Session. |
| `status` | The status of the Checkout Session, one of `open`, `complete`, or `expired`. |
| `submit_type` | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. |
| `subscription` | The ID of the [Subscription](https://docs.stripe.com/api/subscriptions) for Checkout Sessions in `subscription` mode. |
| `success_url` | The URL the customer will be directed to after the payment or subscription creation is successful. |
| `tax_id_collection` |  |
| `total_details` | Tax and discount details for the computed total amount. |
| `ui_mode` | The UI mode of the Session. |
| `url` | The URL to the Checkout Session. |
| `wallet_options` | Wallet-specific configuration for this Checkout Session. |

Operations: Create, List, Load.

API path: `/v1/checkout/sessions/{session}`

#### Setting

| Field | Description |
| --- | --- |
| `defaults` |  |
| `head_office` | The place where your business is located. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `status` | The status of the Tax `Settings`. |
| `status_details` |  |

Operations: Create, Load.

API path: `/v1/tax/settings`

#### Settlement

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Load.

API path: `/v1/issuing/settlements/{settlement}`

#### SetupAttempt

| Field | Description |
| --- | --- |
| `application` | The value of [application](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation. |
| `attach_to_self` | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `created` | Time at which the object was created. |
| `customer` | The value of [customer](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation. |
| `customer_account` | The value of [customer_account](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer_account) on the SetupIntent at the time of this confirmation. |
| `flow_directions` | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `on_behalf_of` | The value of [on_behalf_of](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation. |
| `payment_method` | ID of the payment method used with this SetupAttempt. |
| `payment_method_details` |  |
| `setup_error` | The error encountered during this attempt to confirm the SetupIntent, if any. |
| `setup_intent` | ID of the SetupIntent that this attempt belongs to. |
| `status` | Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`. |
| `usage` | The value of [usage](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`. |

Operations: List.

API path: `/v1/setup_attempts`

#### SetupIntent

| Field | Description |
| --- | --- |
| `allowed_payment_method_types` | The list of payment method types to allow for this SetupIntent. |
| `application` | ID of the Connect application that created the SetupIntent. |
| `attach_to_self` | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `automatic_payment_methods` | Settings for dynamic payment methods compatible with this Setup Intent |
| `cancellation_reason` | Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`. |
| `client_secret` | The client secret of this SetupIntent. |
| `created` | Time at which the object was created. |
| `customer` | ID of the Customer this SetupIntent belongs to, if one exists. |
| `customer_account` | ID of the Account this SetupIntent belongs to, if one exists. |
| `description` | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | Payment method types that are excluded from this SetupIntent. |
| `flow_directions` | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | Unique identifier for the object. |
| `last_setup_error` | The error encountered in the previous SetupIntent confirmation. |
| `latest_attempt` | The most recent SetupAttempt for this SetupIntent. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `managed_payments` |  |
| `mandate` | ID of the multi use Mandate generated by the SetupIntent. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | If present, this property tells you what actions you need to take in order for your customer to continue payment setup. |
| `object` | String representing the object's type. |
| `on_behalf_of` | The account (if any) for which the setup is intended. |
| `payment_method` | ID of the payment method used with this SetupIntent. |
| `payment_method_configuration_details` | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this Setup Intent. |
| `payment_method_options` | Payment method-specific configuration for this SetupIntent. |
| `payment_method_types` | The list of payment method types (e.g. |
| `single_use_mandate` | ID of the single_use Mandate generated by the SetupIntent. |
| `status` | [Status](https://docs.stripe.com/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`. |
| `usage` | Indicates how the payment method is intended to be used in the future. |

Operations: Create, List, Load.

API path: `/v1/setup_intents/{intent}`

#### ShippingRate

| Field | Description |
| --- | --- |
| `active` | Whether the shipping rate can be used for new purchases. |
| `created` | Time at which the object was created. |
| `delivery_estimate` | The estimated range for how long shipping will take, meant to be displayable to the customer. |
| `display_name` | The name of the shipping rate, meant to be displayable to the customer. |
| `fixed_amount` |  |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `tax_behavior` | Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. |
| `tax_code` | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `type` | The type of calculation to use on the shipping rate. |

Operations: Create, List, Load.

API path: `/v1/shipping_rates/{shipping_rate_token}`

#### SigmaApiQuery

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `name` | The name of the query. |
| `object` | String representing the object's type. |
| `sql` | The sql statement for the query. |

Operations: Create.

API path: `/v1/sigma/saved_queries/{id}`

#### Source

| Field | Description |
| --- | --- |
| `ach_credit_transfer` |  |
| `ach_debit` |  |
| `acss_debit` |  |
| `alipay` |  |
| `allow_redisplay` | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `amount` | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. |
| `au_becs_debit` |  |
| `bancontact` |  |
| `card` |  |
| `card_present` |  |
| `client_secret` | The client secret of the source. |
| `code_verification` |  |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. |
| `customer` | The ID of the customer to which this source is attached. |
| `data` | Details about each object. |
| `eps` |  |
| `flow` | The authentication `flow` of the source. |
| `giropay` |  |
| `has_more` | True if this list has another page of items after this one that can be fetched. |
| `id` | Unique identifier for the object. |
| `ideal` |  |
| `klarna` |  |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `multibanco` |  |
| `object` | String representing the object's type. |
| `owner` | Information about the owner of the payment instrument that may be used or required by particular source types. |
| `p24` |  |
| `receiver` |  |
| `redirect` |  |
| `sepa_debit` |  |
| `sofort` |  |
| `source_order` |  |
| `statement_descriptor` | Extra information about a source. |
| `status` | The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. |
| `three_d_secure` |  |
| `type` | The `type` of the source. |
| `url` | The URL where this list can be accessed. |
| `usage` | Either `reusable` or `single_use`. |
| `wechat` |  |

Operations: Create, List, Load, Remove.

API path: `/v1/customers/{customer}/sources/{id}`

#### SourceMandateNotification

| Field | Description |
| --- | --- |
| `acss_debit` |  |
| `amount` | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. |
| `bacs_debit` |  |
| `created` | Time at which the object was created. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `reason` | The reason of the mandate notification. |
| `sepa_debit` |  |
| `source` | `Source` objects allow you to accept a variety of payment methods. |
| `status` | The status of the mandate notification. |
| `type` | The type of source this mandate notification is attached to. |

Operations: Load.

API path: `/v1/sources/{source}/mandate_notifications/{mandate_notification}`

#### SourceTransaction

| Field | Description |
| --- | --- |
| `ach_credit_transfer` |  |
| `amount` | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver. |
| `chf_credit_transfer` |  |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `gbp_credit_transfer` |  |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `paper_check` |  |
| `sepa_credit_transfer` |  |
| `source` | The ID of the source this transaction is attached to. |
| `status` | The status of the transaction, one of `succeeded`, `pending`, or `failed`. |
| `type` | The type of source this transaction is attached to. |

Operations: List, Load.

API path: `/v1/sources/{source}/source_transactions`

#### Subscription

| Field | Description |
| --- | --- |
| `application` | ID of the Connect Application that created the subscription. |
| `application_fee_percent` | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` |  |
| `billing_cycle_anchor` | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_mode` | The billing mode of the subscription. |
| `billing_schedules` | Billing schedules for this subscription. |
| `billing_thresholds` | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `cancel_at` | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | If the subscription has been canceled, the date of that cancellation. |
| `cancellation_details` | Details about why this subscription was cancelled |
| `collection_method` | Either `charge_automatically`, or `send_invoice`. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | ID of the customer who owns the subscription. |
| `customer_account` | ID of the account representing the customer who owns the subscription. |
| `days_until_due` | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | ID of the default payment method for the subscription. |
| `default_source` | ID of the default payment source for the subscription. |
| `default_tax_rates` | The tax rates that will apply to any subscription item that does not have `tax_rates` set. |
| `description` | The subscription's description, meant to be displayable to the customer. |
| `discounts` | The discounts applied to the subscription. |
| `ended_at` | If the subscription has ended, the date the subscription ended. |
| `id` | Unique identifier for the object. |
| `invoice_settings` |  |
| `items` | List of subscription items, each with an attached price. |
| `latest_invoice` | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `managed_payments` | Settings for Managed Payments for this Subscription and resulting [Invoices](/api/invoices/object) and [PaymentIntents](/api/payment_intents/object). |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_pending_invoice_item_invoice` | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `object` | String representing the object's type. |
| `on_behalf_of` | The account (if any) the charge was made on behalf of for charges associated with this subscription. |
| `pause_collection` | If specified, payment collection for this subscription will be paused. |
| `payment_settings` | Payment settings passed on to invoices created by the subscription. |
| `pending_invoice_item_interval` | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `presentment_details` |  |
| `schedule` | The schedule attached to the subscription |
| `start_date` | Date when the subscription was first created. |
| `status` | Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`. |
| `status_details` | Describes changes to the subscription's status. |
| `test_clock` | ID of the test clock this subscription belongs to. |
| `transfer_data` | The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices. |
| `trial_end` | If the subscription has a trial, the end of that trial. |
| `trial_settings` | Settings related to subscription trials. |
| `trial_start` | If the subscription has a trial, the beginning of that trial. |

Operations: Create, List, Load, Remove.

API path: `/v1/customers/{customer}/subscriptions/{subscription_exposed_id}`

#### SubscriptionItem

| Field | Description |
| --- | --- |
| `billed_until` | The time period the subscription item has been billed for. |
| `billing_thresholds` | Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period |
| `created` | Time at which the object was created. |
| `current_period_end` | The end time of this subscription item's current billing period. |
| `current_period_start` | The start time of this subscription item's current billing period. |
| `current_trial` | The current trial that is applied to this subscription item. |
| `discounts` | The discounts applied to the subscription item. |
| `id` | Unique identifier for the object. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `price` | Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products. |
| `quantity` | The [quantity](https://docs.stripe.com/subscriptions/quantities) of the plan to which the customer should be subscribed. |
| `subscription` | The `subscription` this `subscription_item` belongs to. |
| `tax_rates` | The tax rates which apply to this `subscription_item`. |

Operations: Create, List, Load.

API path: `/v1/subscription_items/{item}`

#### SubscriptionSchedule

| Field | Description |
| --- | --- |
| `application` | ID of the Connect Application that created the schedule. |
| `billing_mode` | The billing mode of the subscription. |
| `canceled_at` | Time at which the subscription schedule was canceled. |
| `completed_at` | Time at which the subscription schedule was completed. |
| `created` | Time at which the object was created. |
| `current_phase` | Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`. |
| `customer` | ID of the customer who owns the subscription schedule. |
| `customer_account` | ID of the account who owns the subscription schedule. |
| `default_settings` |  |
| `end_behavior` | Behavior of the subscription schedule and underlying subscription when it ends. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `pause_schedules` | The pause schedules for this subscription schedule. |
| `phases` | Configuration for the subscription schedule's phases. |
| `released_at` | Time at which the subscription schedule was released. |
| `released_subscription` | ID of the subscription once managed by the subscription schedule (if it is released). |
| `status` | The present status of the subscription schedule. |
| `subscription` | ID of the subscription managed by the subscription schedule. |
| `test_clock` | ID of the test clock this subscription schedule belongs to. |

Operations: Create, List, Load.

API path: `/v1/subscription_schedules/{schedule}`

#### Supplier

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the object. |
| `info_url` | Link to a webpage to learn more about the supplier. |
| `livemode` | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `locations` | The locations in which this supplier operates. |
| `name` | Name of this carbon removal supplier. |
| `object` | String representing the object’s type. |
| `removal_pathway` | The scientific pathway used for carbon removal. |

Operations: List, Load.

API path: `/v1/climate/suppliers`

#### TaxCode

| Field | Description |
| --- | --- |
| `description` | A detailed description of which types of products the tax code represents. |
| `id` | Unique identifier for the object. |
| `name` | A short name for the tax code. |
| `object` | String representing the object's type. |
| `requirements` | An object that describes more information about the tax location required for this tax code. |

Operations: List, Load.

API path: `/v1/tax_codes`

#### TaxId

| Field | Description |
| --- | --- |
| `country` | Two-letter ISO code representing the country of the tax ID. |
| `created` | Time at which the object was created. |
| `customer` | ID of the customer. |
| `customer_account` | ID of the Account representing the customer. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `owner` | The account or customer the tax ID belongs to. |
| `type` | Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`,… |
| `value` | Value of the tax ID. |
| `verification` | Tax ID verification information. |

Operations: Create, List, Load, Remove.

API path: `/v1/customers/{customer}/tax_ids`

#### TaxRate

| Field | Description |
| --- | --- |
| `active` | Defaults to `true`. |
| `country` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | Time at which the object was created. |
| `description` | An arbitrary string attached to the tax rate for your internal use only. |
| `display_name` | The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page. |
| `effective_percentage` | Actual/effective tax rate percentage out of 100. |
| `flat_amount` | The amount of the tax rate when the `rate_type` is `flat_amount`. |
| `id` | Unique identifier for the object. |
| `inclusive` | This specifies if the tax rate is inclusive or exclusive. |
| `jurisdiction` | The jurisdiction for the tax rate. |
| `jurisdiction_level` | The level of the jurisdiction that imposes this tax rate. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `percentage` | Tax rate percentage out of 100. |
| `rate_type` | Indicates the type of tax rate applied to the taxable amount. |
| `state` | [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. |
| `tax_type` | The high-level tax type, such as `vat` or `sales_tax`. |

Operations: Create, List, Load.

API path: `/v1/tax_rates/{tax_rate}`

#### TestClock

| Field | Description |
| --- | --- |
| `advancing` |  |
| `created` | Time at which the object was created. |
| `deletes_after` | Time at which this clock is scheduled to auto delete. |
| `frozen_time` | Time at which all objects belonging to this clock are frozen. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `name` | The custom name supplied at creation. |
| `object` | String representing the object's type. |
| `status` | The status of the Test Clock. |
| `status_details` |  |

Operations: Create, List, Load, Remove.

API path: `/v1/test_helpers/test_clocks/{test_clock}/advance`

#### Token

| Field | Description |
| --- | --- |
| `bank_account` | These bank accounts are payment methods on `Customer` objects. |
| `card` | Card associated with this token. |
| `client_ip` | IP address of the client that generates the token. |
| `created` | Time at which the object was created. |
| `device_fingerprint` | The hashed ID derived from the device ID from the card network associated with the token. |
| `id` | Unique identifier for the object. |
| `last4` | The last four digits of the token. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `network` | The token service provider / card network associated with the token. |
| `network_data` |  |
| `network_updated_at` | Time at which the token was last updated by the card network. |
| `object` | String representing the object's type. |
| `status` | The usage state of the token. |
| `type` | Type of the token: `account`, `bank_account`, `card`, or `pii`. |
| `used` | Determines if you have already used this token (you can only use tokens once). |
| `wallet_provider` | The digital wallet for this token, if one was used. |

Operations: Create, List, Load.

API path: `/v1/issuing/tokens/{token}`

#### Topup

| Field | Description |
| --- | --- |
| `amount` | Amount transferred. |
| `balance_transaction` | ID of the balance transaction that describes the impact of this top-up on your account balance. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | An arbitrary string attached to the object. |
| `expected_availability_date` | Date the funds are expected to arrive in your Stripe account for payouts. |
| `failure_code` | Error code explaining reason for top-up failure if available (see [the errors section](/api/errors) for a list of codes). |
| `failure_message` | Message to user further explaining reason for top-up failure if available. |
| `id` | Unique identifier for the object. |
| `initiated_by` | Indicates whether the top-up was initiated by Stripe or by the user. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `payment_method` | The ID of a PaymentMethod representing the payment method used for the top-up. |
| `payment_method_options` | Payment-method-specific configuration for this top-up. |
| `source` | The source field is deprecated. |
| `statement_descriptor` | Extra information about a top-up. |
| `status` | The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`. |
| `transfer_group` | A string that identifies this top-up as part of a group. |

Operations: Create, List, Load.

API path: `/v1/topups/{topup}`

#### Transaction

| Field | Description |
| --- | --- |
| `account` | The ID of the Financial Connections Account this transaction belongs to. |
| `amount` | The transaction amount, which will be reflected in your balance. |
| `amount_details` | Detailed breakdown of amount components. |
| `authorization` | The `Authorization` object that led to this transaction. |
| `balance_impact` | Change to a FinancialAccount's balance |
| `balance_transaction` | ID of the [balance transaction](https://docs.stripe.com/api/balance_transactions) associated with this transaction. |
| `card` | The card used to make this transaction. |
| `cardholder` | The cardholder to whom this transaction belongs. |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` |  |
| `description` | An arbitrary string attached to the object. |
| `dispute` | If you've disputed the transaction, the ID of the dispute. |
| `entries` | A list of TransactionEntries that are part of this Transaction. |
| `financial_account` | The FinancialAccount associated with this object. |
| `flow` | ID of the flow that created the Transaction. |
| `flow_details` | Details of the flow that created the Transaction. |
| `flow_type` | Type of the flow that created the Transaction. |
| `id` | Unique identifier for the object. |
| `line_items` | The tax collected or refunded, by line item. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `merchant_currency` | The currency with which the merchant is taking payment. |
| `merchant_data` |  |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | Details about the transaction, such as processing dates, set by the card network. |
| `object` | String representing the object's type. |
| `posted_at` | Time at which this transaction posted. |
| `purchase_details` | Additional purchase information that is optionally provided by the merchant. |
| `reference` | A custom unique identifier, such as 'myOrder_123'. |
| `reversal` | If `type=reversal`, contains information about what was reversed. |
| `ship_from_details` | The details of the ship from location, such as the address. |
| `shipping_cost` | The shipping cost details for the transaction. |
| `status` | Status of the Transaction. |
| `status_transitions` |  |
| `tax_date` | The calculation uses the tax rules and rates that are in effect at this timestamp. |
| `token` | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this transaction. |
| `transacted_at` | Time at which the transaction was transacted. |
| `transaction_refresh` | The token of the transaction refresh that last updated or created this transaction. |
| `treasury` | [Treasury](https://docs.stripe.com/api/treasury) details related to this transaction if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts |
| `type` | The nature of the transaction. |
| `updated` | Time at which the object was last updated. |
| `void_at` | Time at which this transaction was voided. |
| `wallet` | The digital wallet used for this transaction. |

Operations: Create, List, Load.

API path: `/v1/issuing/transactions/{transaction}`

#### TransactionEntry

| Field | Description |
| --- | --- |
| `balance_impact` | Change to a FinancialAccount's balance |
| `created` | Time at which the object was created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `effective_at` | When the TransactionEntry will impact the FinancialAccount's balance. |
| `financial_account` | The FinancialAccount associated with this object. |
| `flow` | Token of the flow associated with the TransactionEntry. |
| `flow_details` | Details of the flow associated with the TransactionEntry. |
| `flow_type` | Type of the flow associated with the TransactionEntry. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `transaction` | The Transaction associated with this object. |
| `type` | The specific money movement that generated the TransactionEntry. |

Operations: List, Load.

API path: `/v1/treasury/transaction_entries`

#### Transfer

| Field | Description |
| --- | --- |
| `amount` | Amount in cents (or local equivalent) to be transferred. |
| `amount_reversed` | Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued). |
| `balance_transaction` | Balance transaction that describes the impact of this transfer on your account balance. |
| `created` | Time that this record of the transfer was first created. |
| `currency` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | An arbitrary string attached to the object. |
| `destination` | ID of the Stripe account the transfer was sent to. |
| `destination_payment` | If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `reversals` | A list of reversals that have been applied to the transfer. |
| `reversed` | Whether the transfer has been fully reversed. |
| `source_transaction` | ID of the charge that was used to fund the transfer. |
| `source_type` | The source balance this transfer came from. |
| `transfer_group` | A string that identifies this transaction as part of a group. |

Operations: Create, List, Load.

API path: `/v1/transfers/{transfer}`

#### TrialOffer

| Field | Description |
| --- | --- |
| `active` | Whether the trial offer is active. |
| `duration` |  |
| `end_behavior` |  |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `nickname` | A brief description of the trial offer, hidden from customers. |
| `object` | String representing the object's type. |
| `price` | The price during the trial offer. |

Operations: Create, List, Load.

API path: `/v1/product_catalog/trial_offers/{id}`

#### ValueList

| Field | Description |
| --- | --- |
| `alias` | The name of the value list for use in rules. |
| `created` | Time at which the object was created. |
| `created_by` | The name or email address of the user who created this value list. |
| `id` | Unique identifier for the object. |
| `item_type` | The type of items in the value list. |
| `list_items` | List of items contained within this value list. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | The name of the value list. |
| `object` | String representing the object's type. |

Operations: Create, List, Load, Remove.

API path: `/v1/radar/value_lists/{value_list}`

#### ValueListItem

| Field | Description |
| --- | --- |
| `created` | Time at which the object was created. |
| `created_by` | The name or email address of the user who added this item to the value list. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `value` | The value of the item. |
| `value_list` | The identifier of the value list this item belongs to. |

Operations: Create, List, Load, Remove.

API path: `/v1/radar/value_list_items`

#### VerificationReport

| Field | Description |
| --- | --- |
| `client_reference_id` | A string to reference this user. |
| `created` | Time at which the object was created. |
| `document` | Result from a document check |
| `email` | Result from a email check |
| `id` | Unique identifier for the object. |
| `id_number` | Result from an id_number check |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `object` | String representing the object's type. |
| `options` |  |
| `phone` | Result from a phone check |
| `selfie` | Result from a selfie check |
| `type` | Type of report. |
| `verification_flow` | The configuration token of a verification flow from the dashboard. |
| `verification_session` | ID of the VerificationSession that created this report. |

Operations: List, Load.

API path: `/v1/identity/verification_reports`

#### VerificationSession

| Field | Description |
| --- | --- |
| `client_reference_id` | A string to reference this user. |
| `client_secret` | The short-lived client secret used by Stripe.js to [show a verification modal](https://docs.stripe.com/js/identity/modal) inside your app. |
| `created` | Time at which the object was created. |
| `id` | Unique identifier for the object. |
| `last_error` | If present, this property tells you the last error encountered when processing the verification. |
| `last_verification_report` | ID of the most recent VerificationReport. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `options` | A set of options for the session’s verification checks. |
| `provided_details` | Details provided about the user being verified. |
| `redaction` | Redaction status of this VerificationSession. |
| `related_customer` | Customer ID |
| `related_customer_account` | The ID of the Account representing a customer. |
| `related_person` |  |
| `status` | Status of this VerificationSession. |
| `type` | The type of [verification check](https://docs.stripe.com/identity/verification-checks) to be performed. |
| `url` | The short-lived URL that you use to redirect a user to Stripe to submit their identity information. |
| `verification_flow` | The configuration token of a verification flow from the dashboard. |
| `verified_outputs` | The user’s verified data. |

Operations: Create, List, Load.

API path: `/v1/identity/verification_sessions/{session}`

#### WebhookEndpoint

| Field | Description |
| --- | --- |
| `api_version` | The API version that events are rendered as for this webhook endpoint. |
| `application` | The ID of the associated Connect application. |
| `created` | Time at which the object was created. |
| `description` | An optional description of what the webhook is used for. |
| `enabled_events` | The list of events to enable for this endpoint. |
| `id` | Unique identifier for the object. |
| `livemode` | If the object exists in live mode, the value is `true`. |
| `metadata` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | String representing the object's type. |
| `secret` | The endpoint's secret, used to generate [webhook signatures](https://docs.stripe.com/webhooks/signatures). |
| `status` | The status of the webhook. |
| `url` | The URL of the webhook endpoint. |

Operations: Create, List, Load.

API path: `/v1/webhook_endpoints/{webhook_endpoint}`



## Entities


### Account

Create an instance: `local account = client:Account(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_holder` | `any` | The account holder that this account belongs to. |
| `account_numbers` | `table` | Details about the account numbers. |
| `balance` | `any` | The most recent information about the account's balance. |
| `balance_refresh` | `any` | The state of the most recent attempt to refresh the account balance. |
| `business_profile` | `any` | Business information about the account. |
| `business_type` | `string` | The business type. |
| `capabilities` | `table` |  |
| `category` | `string` | The type of the account. |
| `charges_enabled` | `boolean` | Whether the account can process charges. |
| `company` | `table` |  |
| `controller` | `table` |  |
| `country` | `string` | The account's country. |
| `created` | `number` | Time at which the object was created. |
| `default_currency` | `string` | Three-letter ISO currency code representing the default currency for the account. |
| `details_submitted` | `boolean` | Whether account details have been submitted. |
| `display_name` | `string` | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `email` | `string` | An email address associated with the account. |
| `external_accounts` | `table` | External accounts (bank accounts and debit cards) currently attached to this account. |
| `future_requirements` | `table` |  |
| `groups` | `any` | The groups associated with the account. |
| `id` | `string` | Unique identifier for the object. |
| `individual` | `table` | This is an object representing a person associated with a Stripe account. |
| `institution_name` | `string` | The name of the institution that holds this account. |
| `last4` | `string` | The last 4 digits of the account number. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `ownership` | `any` | The most recent information about the account's owners. |
| `ownership_refresh` | `any` | The state of the most recent attempt to refresh the account owners. |
| `payouts_enabled` | `boolean` | Whether the funds in this account can be paid out. |
| `permissions` | `table` | The list of permissions granted by this account. |
| `requirements` | `table` |  |
| `settings` | `any` | Options for customizing how the account functions within Stripe. |
| `status` | `string` | The status of the link to the account. |
| `status_details` | `table` |  |
| `subcategory` | `string` | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `table` | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `table` | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `tos_acceptance` | `table` |  |
| `transaction_refresh` | `any` | The state of the most recent attempt to refresh the account transactions. |
| `type` | `string` | The Stripe account type. |

#### Example: Load

```lua
local account, err = client:Account():load({ account = "account" })
```

#### Example: List

```lua
local accounts, err = client:Account():list()
```

#### Example: Create

```lua
local account, err = client:Account():create({
  id = "example_id", -- string
  category = "example_category", -- string
  controller = {}, -- table
  created = 1, -- number
  external_accounts = {}, -- table
  individual = {}, -- table
  institution_name = "example_institution_name", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  status = "example_status", -- string
  subcategory = "example_subcategory", -- string
  supported_payment_method_types = {}, -- table
})
```


### AccountLink

Create an instance: `local account_link = client:AccountLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `expires_at` | `number` | The timestamp at which this account link will expire. |
| `object` | `string` | String representing the object's type. |
| `url` | `string` | The URL for the account link. |

#### Example: Create

```lua
local account_link, err = client:AccountLink():create({
  created = 1, -- number
  expires_at = 1, -- number
  object = "example_object", -- string
  url = "example_url", -- string
})
```


### AccountOwner

Create an instance: `local account_owner = client:AccountOwner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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
| `refreshed_at` | `number` | The timestamp of the refresh that updated this owner. |

#### Example: List

```lua
local account_owners, err = client:AccountOwner():list()
```


### AccountSession

Create an instance: `local account_session = client:AccountSession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_management` | `table` |  |
| `account_onboarding` | `table` |  |
| `balance_report` | `table` |  |
| `balances` | `table` |  |
| `disputes_list` | `table` |  |
| `documents` | `table` |  |
| `financial_account` | `table` |  |
| `financial_account_transactions` | `table` |  |
| `instant_payouts_promotion` | `table` |  |
| `issuing_card` | `table` |  |
| `issuing_cards_list` | `table` |  |
| `notification_banner` | `table` |  |
| `payment_details` | `table` |  |
| `payment_disputes` | `table` |  |
| `payment_method_settings` | `table` |  |
| `payments` | `table` |  |
| `payout_details` | `table` |  |
| `payout_reconciliation_report` | `table` |  |
| `payouts` | `table` |  |
| `payouts_list` | `table` |  |
| `tax_registrations` | `table` |  |
| `tax_settings` | `table` |  |

#### Example: Create

```lua
local account_session, err = client:AccountSession():create({
  account_management = {}, -- table
  account_onboarding = {}, -- table
  balance_report = {}, -- table
  balances = {}, -- table
  disputes_list = {}, -- table
  documents = {}, -- table
  financial_account = {}, -- table
  financial_account_transactions = {}, -- table
  instant_payouts_promotion = {}, -- table
  issuing_card = {}, -- table
  issuing_cards_list = {}, -- table
  notification_banner = {}, -- table
  payment_details = {}, -- table
  payment_disputes = {}, -- table
  payment_method_settings = {}, -- table
  payments = {}, -- table
  payout_details = {}, -- table
  payout_reconciliation_report = {}, -- table
  payouts = {}, -- table
  payouts_list = {}, -- table
  tax_registrations = {}, -- table
  tax_settings = {}, -- table
})
```


### ActiveEntitlement

Create an instance: `local active_entitlement = client:ActiveEntitlement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `feature` | `any` | The [Feature](https://docs.stripe.com/api/entitlements/feature) that the customer is entitled to. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | A unique key you provide as your own system identifier. |
| `object` | `string` | String representing the object's type. |

#### Example: Load

```lua
local active_entitlement, err = client:ActiveEntitlement():load({ id = "active_entitlement_id" })
```

#### Example: List

```lua
local active_entitlements, err = client:ActiveEntitlement():list()
```


### Alert

Create an instance: `local alert = client:Alert(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_type` | `string` | Defines the type of the alert. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | Status of the alert. |
| `title` | `string` | Title of the alert. |
| `usage_threshold` | `any` | Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://docs.stripe.com/api/billing/meter). |

#### Example: Load

```lua
local alert, err = client:Alert():load({ id = "alert_id" })
```

#### Example: List

```lua
local alerts, err = client:Alert():list()
```

#### Example: Create

```lua
local alert, err = client:Alert():create({
  alert_type = "example_alert_type", -- string
  id = "example_id", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  title = "example_title", -- string
})
```


### ApplePayDomain

Create an instance: `local apple_pay_domain = client:ApplePayDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `domain_name` | `string` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |

#### Example: Load

```lua
local apple_pay_domain, err = client:ApplePayDomain():load({ id = "apple_pay_domain_id" })
```

#### Example: Create

```lua
local apple_pay_domain, err = client:ApplePayDomain():create({
  created = 1, -- number
  domain_name = "example_domain_name", -- string
  id = "example_id", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
})
```


### ApplicationFee

Create an instance: `local application_fee = client:ApplicationFee(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `any` | ID of the Stripe account this fee was taken from. |
| `amount` | `number` | Amount earned, in cents (or local equivalent). |
| `amount_refunded` | `number` | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued) |
| `application` | `any` | ID of the Connect application that earned the fee. |
| `balance_transaction` | `any` | Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds). |
| `charge` | `any` | ID of the charge that the application fee was taken from. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `fee_source` | `any` | Polymorphic source of the application fee. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `originating_transaction` | `any` | ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter. |
| `refunded` | `boolean` | Whether the fee has been fully refunded. |
| `refunds` | `table` | A list of refunds that have been applied to the fee. |

#### Example: Load

```lua
local application_fee, err = client:ApplicationFee():load({ id = "application_fee_id" })
```

#### Example: List

```lua
local application_fees, err = client:ApplicationFee():list()
```

#### Example: Create

```lua
local application_fee, err = client:ApplicationFee():create({
  id = "example_id", -- string
  account = "example_account", -- any
  amount = 1, -- number
  amount_refunded = 1, -- number
  application = "example_application", -- any
  charge = "example_charge", -- any
  created = 1, -- number
  currency = "example_currency", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  refunded = true, -- boolean
  refunds = {}, -- table
})
```


### Association

Create an instance: `local association = client:Association(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```lua
local associations, err = client:Association():list()
```


### Authentication

Create an instance: `local authentication = client:Authentication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acquirer_details` | `table` | Contains additional details about the acquirer for a 3DS Authentication. |
| `amount` | `number` | The amount for this 3DS Authentication. |
| `challenge_url` | `string` | The URL for presenting a challenge to your cardholder, present if status is requires_challenge. |
| `channel` | `table` | Contains details on the channel used (browser, 3RI) for a standalone 3DS Authentication. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `directory_server` | `string` | The 3DS directory server with which this 3DS Authentication was processed. |
| `fingerprinting_url` | `string` | The URL for performing issuer fingerprinting, present if fingerprinting is supported for the given payment method. |
| `flow_preference` | `table` | Contains details of the flow preference used for a standalone 3DS Authentication. |
| `future_usage` | `table` | Contains information about the future authorisations related to this authentication |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `message_category` | `string` | Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `outcome` | `string` | The outcome of this 3DS Authentication. |
| `outcome_details` | `table` | Contains details on the result for a standalone 3DS Authentication. |
| `payment_method` | `any` | ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication. |
| `reason` | `string` | The reason for invoking this 3DS Authentication. |
| `shipping_address` | `table` | Contains details about the shipping address for a 3DS Authentication. |
| `status` | `string` | Status of this Authentication. |

#### Example: Load

```lua
local authentication, err = client:Authentication():load({ id = "authentication_id" })
```

#### Example: List

```lua
local authentications, err = client:Authentication():list()
```

#### Example: Create

```lua
local authentication, err = client:Authentication():create({
  channel = {}, -- table
  created = 1, -- number
  directory_server = "example_directory_server", -- string
  flow_preference = {}, -- table
  future_usage = {}, -- table
  id = "example_id", -- string
  livemode = true, -- boolean
  message_category = "example_message_category", -- string
  object = "example_object", -- string
  outcome_details = {}, -- table
  payment_method = "example_payment_method", -- any
  status = "example_status", -- string
})
```


### Authorization

Create an instance: `local authorization = client:Authorization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | The total amount that was authorized or rejected. |
| `amount_details` | `any` | Detailed breakdown of amount components. |
| `approved` | `boolean` | Whether the authorization has been approved. |
| `authorization_method` | `string` | How the card details were provided. |
| `balance_transactions` | `table` | List of balance transactions associated with this authorization. |
| `card` | `table` | You can [create physical or virtual cards](https://docs.stripe.com/issuing) that are issued to cardholders. |
| `card_presence` | `string` | Whether the card was present at the point of sale for the authorization. |
| `cardholder` | `any` | The cardholder to whom this authorization belongs. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | The currency of the cardholder. |
| `fleet` | `any` | Fleet-specific information for authorizations using Fleet cards. |
| `fraud_challenges` | `table` | Fraud challenges sent to the cardholder, if this authorization was declined for fraud risk reasons. |
| `fuel` | `any` | Information about fuel that was purchased with this transaction. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `number` | The total amount that was authorized or rejected. |
| `merchant_currency` | `string` | The local currency that was presented to the cardholder for the authorization. |
| `merchant_data` | `table` |  |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `any` | Details about the authorization, such as identifiers, set by the card network. |
| `object` | `string` | String representing the object's type. |
| `pending_request` | `any` | The pending authorization request. |
| `request_history` | `table` | History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. |
| `status` | `string` | The current status of the authorization in its lifecycle. |
| `token` | `string` | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this authorization. |
| `transactions` | `table` | List of [transactions](https://docs.stripe.com/api/issuing/transactions) associated with this authorization. |
| `treasury` | `any` | [Treasury](https://docs.stripe.com/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts). |
| `verification_data` | `table` |  |
| `verified_by_fraud_challenge` | `boolean` | Whether the authorization bypassed fraud risk checks because the cardholder has previously completed a fraud challenge on a similar high-risk authorization from the same merchant. |
| `wallet` | `string` | The digital wallet used for this transaction. |

#### Example: Load

```lua
local authorization, err = client:Authorization():load({ id = "authorization_id" })
```

#### Example: List

```lua
local authorizations, err = client:Authorization():list()
```

#### Example: Create

```lua
local authorization, err = client:Authorization():create({
  id = "example_id", -- string
  amount = 1, -- number
  approved = true, -- boolean
  authorization_method = "example_authorization_method", -- string
  balance_transactions = {}, -- table
  card = {}, -- table
  created = 1, -- number
  currency = "example_currency", -- string
  livemode = true, -- boolean
  merchant_amount = 1, -- number
  merchant_currency = "example_merchant_currency", -- string
  merchant_data = {}, -- table
  metadata = {}, -- table
  object = "example_object", -- string
  request_history = {}, -- table
  status = "example_status", -- string
  transactions = {}, -- table
  verification_data = {}, -- table
})
```


### Balance

Create an instance: `local balance = client:Balance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available` | `table` | Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://docs.stripe.com/api#transfers) or [Payouts API](https://docs.stripe.com/api#payouts). |
| `connect_reserved` | `table` | Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. |
| `instant_available` | `table` | Funds that you can pay out using Instant Payouts. |
| `issuing` | `table` |  |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `pending` | `table` | Funds that aren't available in the balance yet. |
| `refund_and_dispute_prefunding` | `table` |  |

#### Example: List

```lua
local balances, err = client:Balance():list()
```


### BalanceSetting

Create an instance: `local balance_setting = client:BalanceSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `debit_negative_balances` | `boolean` | A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. |
| `payouts` | `any` | Settings specific to the account's payouts. |
| `settlement_timing` | `table` |  |

#### Example: Load

```lua
local balance_setting, err = client:BalanceSetting():load()
```

#### Example: Create

```lua
local balance_setting, err = client:BalanceSetting():create({
  settlement_timing = {}, -- table
})
```


### BalanceTransaction

Create an instance: `local balance_transaction = client:BalanceTransaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Gross amount of this transaction (in cents (or local equivalent)). |
| `available_on` | `number` | The date that the transaction's net funds become available in the Stripe balance. |
| `balance_type` | `string` | The balance that this transaction impacts. |
| `checkout_session` | `any` | The ID of the checkout session (if any) that created the transaction. |
| `created` | `number` | Time at which the object was created. |
| `credit_note` | `any` | The ID of the credit note (if any) related to the transaction. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | The ID of the customer the transaction belongs to. |
| `customer_account` | `string` | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | `string` | An arbitrary string attached to the object. |
| `ending_balance` | `number` | The customer's `balance` after the transaction was applied. |
| `exchange_rate` | `number` | If applicable, this transaction uses an exchange rate. |
| `fee` | `number` | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | `table` | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `any` | The ID of the invoice (if any) related to the transaction. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net` | `number` | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `string` | String representing the object's type. |
| `reporting_category` | `string` | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `any` | This transaction relates to the Stripe object. |
| `status` | `string` | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `string` | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

#### Example: Load

```lua
local balance_transaction, err = client:BalanceTransaction():load({ id = "balance_transaction_id" })
```

#### Example: List

```lua
local balance_transactions, err = client:BalanceTransaction():list()
```


### BankAccount

Create an instance: `local bank_account = client:BankAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `any` | The account this bank account belongs to. |
| `account_holder_name` | `string` | The name of the person or business that owns the bank account. |
| `account_holder_type` | `string` | The type of entity that holds the account. |
| `account_type` | `string` | The bank account type. |
| `available_payout_methods` | `table` | A set of available payout methods for this bank account. |
| `bank_name` | `string` | Name of the bank associated with the routing number (e.g., `WELLS FARGO`). |
| `country` | `string` | Two-letter ISO code representing the country the bank account is located in. |
| `currency` | `string` | Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. |
| `customer` | `any` | The ID of the customer that the bank account is associated with. |
| `default_for_currency` | `boolean` | Whether this bank account is the default external account for its currency. |
| `fingerprint` | `string` | Uniquely identifies this particular bank account. |
| `future_requirements` | `any` | Information about the [upcoming new requirements for the bank account](https://docs.stripe.com/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when. |
| `id` | `string` | Unique identifier for the object. |
| `last4` | `string` | The last four digits of the bank account number. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `requirements` | `any` | Information about the requirements for the bank account, including what information needs to be collected. |
| `routing_number` | `string` | The routing transit number for the bank account. |
| `status` | `string` | For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, `tokenized_account_number_deactivated` or `errored`. |

#### Example: Load

```lua
local bank_account, err = client:BankAccount():load({ id = "bank_account_id", customer_id = "customer_id" })
```

#### Example: List

```lua
local bank_accounts, err = client:BankAccount():list()
```

#### Example: Create

```lua
local bank_account, err = client:BankAccount():create({
  customer_id = "example_customer_id", -- string
  country = "example_country", -- string
  currency = "example_currency", -- string
  last4 = "example_last4", -- string
  object = "example_object", -- string
  status = "example_status", -- string
})
```


### Calculation

Create an instance: `local calculation = client:Calculation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount_total` | `number` | Total amount after taxes in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `table` |  |
| `expires_at` | `number` | Timestamp of date at which the tax calculation will expire. |
| `id` | `string` | Unique identifier for the calculation. |
| `line_items` | `table` | The list of items the customer is purchasing. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `ship_from_details` | `any` | The details of the ship from location, such as the address. |
| `shipping_cost` | `any` | The shipping cost details for the calculation. |
| `tax_amount_exclusive` | `number` | The amount of tax to be collected on top of the line item prices. |
| `tax_amount_inclusive` | `number` | The amount of tax already included in the line item prices. |
| `tax_breakdown` | `table` | Breakdown of individual tax amounts that add up to the total. |
| `tax_date` | `number` | The calculation uses the tax rules and rates that are in effect at this timestamp. |

#### Example: Load

```lua
local calculation, err = client:Calculation():load({ id = "calculation_id" })
```

#### Example: Create

```lua
local calculation, err = client:Calculation():create({
  amount_total = 1, -- number
  currency = "example_currency", -- string
  customer_details = {}, -- table
  line_items = {}, -- table
  livemode = true, -- boolean
  object = "example_object", -- string
  tax_amount_exclusive = 1, -- number
  tax_amount_inclusive = 1, -- number
  tax_breakdown = {}, -- table
  tax_date = 1, -- number
})
```


### Capability

Create an instance: `local capability = client:Capability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `any` | The account for which the capability enables functionality. |
| `future_requirements` | `table` |  |
| `id` | `string` | The identifier for the capability. |
| `object` | `string` | String representing the object's type. |
| `requested` | `boolean` | Whether the capability has been requested. |
| `requested_at` | `number` | Time at which the capability was requested. |
| `requirements` | `table` |  |
| `status` | `string` | The status of the capability. |

#### Example: Load

```lua
local capability, err = client:Capability():load({ id = "capability_id", account_id = "account_id" })
```

#### Example: List

```lua
local capabilitys, err = client:Capability():list()
```

#### Example: Create

```lua
local capability, err = client:Capability():create({
  account_id = "example_account_id", -- string
  id = "example_id", -- string
  account = "example_account", -- any
  future_requirements = {}, -- table
  object = "example_object", -- string
  requested = true, -- boolean
  requirements = {}, -- table
  status = "example_status", -- string
})
```


### Card

Create an instance: `local card = client:Card(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

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
| `allow_redisplay` | `boolean` | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `available_payout_methods` | `table` | A set of available payout methods for this card. |
| `brand` | `string` | Card brand. |
| `cancellation_reason` | `string` | The reason why the card was canceled. |
| `cardholder` | `table` | An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://docs.stripe.com/issuing) cards. |
| `country` | `string` | Two-letter ISO code representing the country of the card. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. |
| `customer` | `any` | The customer that this card belongs to. |
| `cvc` | `string` | The card's CVC. |
| `cvc_check` | `string` | If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `default_for_currency` | `boolean` | Whether this card is the default external account for its currency. |
| `dynamic_last4` | `string` | (For tokenized numbers only.) The last four digits of the device account number. |
| `exp_month` | `number` | Two-digit number representing the card's expiration month. |
| `exp_year` | `number` | Four-digit number representing the card's expiration year. |
| `financial_account` | `string` | The financial account this card is attached to. |
| `fingerprint` | `string` | Uniquely identifies this particular card number. |
| `funding` | `string` | Card funding type. |
| `id` | `string` | Unique identifier for the object. |
| `last4` | `string` | The last four digits of the card. |
| `latest_fraud_warning` | `any` | Stripe’s assessment of whether this card’s details have been compromised. |
| `lifecycle_controls` | `any` | Rules that control the lifecycle of this card, such as automatic cancellation. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Cardholder name. |
| `networks` | `table` |  |
| `number` | `string` | The full unredacted card number. |
| `object` | `string` | String representing the object's type. |
| `personalization_design` | `any` | The personalization design object belonging to this card. |
| `regulated_status` | `string` | Status of a card based on the card issuer. |
| `replaced_by` | `any` | The latest card that replaces this card, if any. |
| `replacement_for` | `any` | The card this card replaces, if any. |
| `replacement_reason` | `string` | The reason why the previous card needed to be replaced. |
| `second_line` | `string` | Text separate from cardholder name, printed on the card. |
| `shipping` | `any` | Where and how the card will be shipped. |
| `spending_controls` | `table` |  |
| `status` | `string` | For external accounts that are cards, possible values are `new` and `errored`. |
| `tokenization_method` | `string` | If the card number is tokenized, this is the method that was used. |
| `type` | `string` | The type of the card. |
| `wallets` | `any` | Information relating to digital wallets (like Apple Pay and Google Pay). |

#### Example: Load

```lua
local card, err = client:Card():load({ id = "card_id" })
```

#### Example: List

```lua
local cards, err = client:Card():list()
```

#### Example: Create

```lua
local card, err = client:Card():create({
  id = "example_id", -- string
  brand = "example_brand", -- string
  cardholder = {}, -- table
  created = 1, -- number
  exp_month = 1, -- number
  exp_year = 1, -- number
  funding = "example_funding", -- string
  last4 = "example_last4", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  spending_controls = {}, -- table
  type = "example_type", -- string
})
```


### Cardholder

Create an instance: `local cardholder = client:Cardholder(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing` | `table` |  |
| `company` | `any` | Additional information about a `company` cardholder. |
| `created` | `number` | Time at which the object was created. |
| `email` | `string` | The cardholder's email address. |
| `id` | `string` | Unique identifier for the object. |
| `individual` | `any` | Additional information about an `individual` cardholder. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | The cardholder's name. |
| `object` | `string` | String representing the object's type. |
| `phone_number` | `string` | The cardholder's phone number. |
| `preferred_locales` | `table` | The cardholder’s preferred locales (languages), ordered by preference. |
| `requirements` | `table` |  |
| `spending_controls` | `any` | Rules that control spending across this cardholder's cards. |
| `status` | `string` | Specifies whether to permit authorizations on this cardholder's cards. |
| `type` | `string` | One of `individual` or `company`. |

#### Example: Load

```lua
local cardholder, err = client:Cardholder():load({ id = "cardholder_id" })
```

#### Example: List

```lua
local cardholders, err = client:Cardholder():list()
```

#### Example: Create

```lua
local cardholder, err = client:Cardholder():create({
  id = "example_id", -- string
  billing = {}, -- table
  created = 1, -- number
  livemode = true, -- boolean
  metadata = {}, -- table
  name = "example_name", -- string
  object = "example_object", -- string
  requirements = {}, -- table
  status = "example_status", -- string
  type = "example_type", -- string
})
```


### CashBalance

Create an instance: `local cash_balance = client:CashBalance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available` | `table` | A hash of all cash balances available to this customer. |
| `customer` | `string` | The ID of the customer whose cash balance this object represents. |
| `customer_account` | `string` | The ID of an Account representing a customer whose cash balance this object represents. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `settings` | `table` |  |

#### Example: Load

```lua
local cash_balance, err = client:CashBalance():load({ customer_id = "customer_id" })
```

#### Example: Create

```lua
local cash_balance, err = client:CashBalance():create({
  customer_id = "example_customer_id", -- string
  customer = "example_customer", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  settings = {}, -- table
})
```


### CashBalanceTransaction

Create an instance: `local cash_balance_transaction = client:CashBalanceTransaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adjusted_for_overdraft` | `table` |  |
| `applied_to_payment` | `table` |  |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `string` | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `number` | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `table` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `net_amount` | `number` | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `string` | String representing the object's type. |
| `refunded_from_payment` | `table` |  |
| `transferred_to_balance` | `table` |  |
| `type` | `string` | The type of the cash balance transaction. |
| `unapplied_from_payment` | `table` |  |

#### Example: Load

```lua
local cash_balance_transaction, err = client:CashBalanceTransaction():load({ id = "cash_balance_transaction_id", customer_id = "customer_id" })
```

#### Example: List

```lua
local cash_balance_transactions, err = client:CashBalanceTransaction():list()
```


### Charge

Create an instance: `local charge = client:Charge(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Amount intended to be collected by this payment. |
| `amount_captured` | `number` | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_refunded` | `number` | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `application` | `any` | ID of the Connect application that created the charge. |
| `application_fee` | `any` | The application fee (if any) for the charge. |
| `application_fee_amount` | `number` | The amount of the application fee (if any) requested for the charge. |
| `balance_transaction` | `any` | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_details` | `table` |  |
| `calculated_statement_descriptor` | `string` | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `captured` | `boolean` | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | ID of the customer this charge is for if one exists. |
| `description` | `string` | An arbitrary string attached to the object. |
| `disputed` | `boolean` | Whether the charge has been disputed. |
| `failure_balance_transaction` | `any` | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | `string` | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | `string` | Message to user further explaining reason for charge failure if available. |
| `fraud_details` | `any` | Information on fraud assessments for the charge. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | `any` | Details about whether the payment was accepted, and why. |
| `paid` | `boolean` | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `payment_intent` | `any` | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `string` | ID of the payment method used in this charge. |
| `payment_method_details` | `any` | Details about the payment method at the time of the transaction. |
| `presentment_details` | `table` |  |
| `radar_options` | `table` | Options to configure Radar. |
| `receipt_email` | `string` | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `string` | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `string` | This is the URL to view the receipt for this charge. |
| `refunded` | `boolean` | Whether the charge has been fully refunded. |
| `refunds` | `table` | A list of refunds that have been applied to the charge. |
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

```lua
local charge, err = client:Charge():load({ id = "charge_id" })
```

#### Example: List

```lua
local charges, err = client:Charge():list()
```

#### Example: Create

```lua
local charge, err = client:Charge():create({
  id = "example_id", -- string
  amount = 1, -- number
  amount_captured = 1, -- number
  amount_refunded = 1, -- number
  billing_details = {}, -- table
  captured = true, -- boolean
  created = 1, -- number
  currency = "example_currency", -- string
  disputed = true, -- boolean
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  paid = true, -- boolean
  presentment_details = {}, -- table
  refunded = true, -- boolean
  refunds = {}, -- table
  status = "example_status", -- string
})
```


### Configuration

Create an instance: `local configuration = client:Configuration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether the configuration is active and can be used to create portal sessions. |
| `application` | `any` | ID of the Connect Application that created the configuration. |
| `bbpos_wisepad3` | `table` |  |
| `bbpos_wisepos_e` | `table` |  |
| `business_profile` | `table` |  |
| `cellular` | `table` |  |
| `created` | `number` | Time at which the object was created. |
| `default_return_url` | `string` | The default URL to redirect customers to when they click on the portal's link to return to your website. |
| `features` | `table` |  |
| `id` | `string` | Unique identifier for the object. |
| `is_account_default` | `boolean` | Whether this Configuration is the default for your account |
| `is_default` | `boolean` | Whether the configuration is the default. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `login_page` | `table` |  |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | The name of the configuration. |
| `object` | `string` | String representing the object's type. |
| `offline` | `table` |  |
| `reboot_window` | `table` |  |
| `stripe_s700` | `table` |  |
| `stripe_s710` | `table` |  |
| `tipping` | `table` |  |
| `updated` | `number` | Time at which the object was last updated. |
| `verifone_m425` | `table` |  |
| `verifone_p400` | `table` |  |
| `verifone_p630` | `table` |  |
| `verifone_ux700` | `table` |  |
| `verifone_v660p` | `table` |  |
| `wifi` | `table` |  |

#### Example: Load

```lua
local configuration, err = client:Configuration():load({ id = "configuration_id" })
```

#### Example: List

```lua
local configurations, err = client:Configuration():list()
```

#### Example: Create

```lua
local configuration, err = client:Configuration():create({
  id = "example_id", -- string
  active = true, -- boolean
  business_profile = {}, -- table
  cellular = {}, -- table
  created = 1, -- number
  features = {}, -- table
  is_default = true, -- boolean
  livemode = true, -- boolean
  login_page = {}, -- table
  object = "example_object", -- string
  reboot_window = {}, -- table
  updated = 1, -- number
  wifi = {}, -- table
})
```


### ConfirmationToken

Create an instance: `local confirmation_token = client:ConfirmationToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `expires_at` | `number` | Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `mandate_data` | `any` | Data used for generating a Mandate. |
| `metadata` | `table` | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `payment_intent` | `string` | ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `payment_method_options` | `any` | Payment-method-specific configuration for this ConfirmationToken. |
| `payment_method_preview` | `any` | Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken. |
| `return_url` | `string` | Return URL used to confirm the Intent. |
| `setup_future_usage` | `string` | Indicates that you intend to make future payments with this ConfirmationToken's payment method. |
| `setup_intent` | `string` | ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `shipping` | `any` | Shipping information collected on this ConfirmationToken. |
| `use_stripe_sdk` | `boolean` | Indicates whether the Stripe SDK is used to handle confirmation flow. |

#### Example: Load

```lua
local confirmation_token, err = client:ConfirmationToken():load({ id = "confirmation_token_id" })
```

#### Example: Create

```lua
local confirmation_token, err = client:ConfirmationToken():create({
  created = 1, -- number
  id = "example_id", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  use_stripe_sdk = true, -- boolean
})
```


### ConnectionToken

Create an instance: `local connection_token = client:ConnectionToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `location` | `string` | The id of the location that this connection token is scoped to. |
| `object` | `string` | String representing the object's type. |
| `secret` | `string` | Your application should pass this token to the Stripe Terminal SDK. |

#### Example: Create

```lua
local connection_token, err = client:ConnectionToken():create({
  object = "example_object", -- string
  secret = "example_secret", -- string
})
```


### CountrySpec

Create an instance: `local country_spec = client:CountrySpec(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_currency` | `string` | The default currency for this country. |
| `id` | `string` | Unique identifier for the object. |
| `object` | `string` | String representing the object's type. |
| `supported_bank_account_currencies` | `table` | Currencies that can be accepted in the specific country (for transfers). |
| `supported_payment_currencies` | `table` | Currencies that can be accepted in the specified country (for payments). |
| `supported_payment_methods` | `table` | Payment methods available in the specified country. |
| `supported_transfer_countries` | `table` | Countries that can accept transfers from the specified country. |
| `verification_fields` | `table` |  |

#### Example: Load

```lua
local country_spec, err = client:CountrySpec():load({ id = "country_spec_id" })
```

#### Example: List

```lua
local country_specs, err = client:CountrySpec():list()
```


### Coupon

Create an instance: `local coupon = client:Coupon(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount_off` | `number` | Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer. |
| `applies_to` | `table` |  |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off. |
| `currency_options` | `table` | Coupons defined in each available currency option. |
| `duration` | `string` | One of `forever`, `once`, or `repeating`. |
| `duration_in_months` | `number` | If `duration` is `repeating`, the number of months the coupon applies. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | `number` | Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Name of the coupon displayed to customers on for instance invoices or receipts. |
| `object` | `string` | String representing the object's type. |
| `percent_off` | `number` | Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. |
| `redeem_by` | `number` | Date after which the coupon can no longer be redeemed. |
| `times_redeemed` | `number` | Number of times this coupon has been applied to a customer. |
| `valid` | `boolean` | Taking account of the above properties, whether this coupon can still be applied to a customer. |

#### Example: Load

```lua
local coupon, err = client:Coupon():load({ id = "coupon_id" })
```

#### Example: List

```lua
local coupons, err = client:Coupon():list()
```

#### Example: Create

```lua
local coupon, err = client:Coupon():create({
  id = "example_id", -- string
  applies_to = {}, -- table
  created = 1, -- number
  duration = "example_duration", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  times_redeemed = 1, -- number
  valid = true, -- boolean
})
```


### CreditBalanceSummary

Create an instance: `local credit_balance_summary = client:CreditBalanceSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_balance` | `table` |  |
| `ledger_balance` | `table` |  |

#### Example: List

```lua
local credit_balance_summarys, err = client:CreditBalanceSummary():list()
```


### CreditBalanceTransaction

Create an instance: `local credit_balance_transaction = client:CreditBalanceTransaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `credit` | `any` | Credit details for this credit balance transaction. |
| `credit_grant` | `any` | The credit grant associated with this credit balance transaction. |
| `debit` | `any` | Debit details for this credit balance transaction. |
| `effective_at` | `number` | The effective time of this credit balance transaction. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `test_clock` | `any` | ID of the test clock this credit balance transaction belongs to. |
| `type` | `string` | The type of credit balance transaction (credit or debit). |

#### Example: Load

```lua
local credit_balance_transaction, err = client:CreditBalanceTransaction():load({ id = "credit_balance_transaction_id" })
```

#### Example: List

```lua
local credit_balance_transactions, err = client:CreditBalanceTransaction():list()
```


### CreditGrant

Create an instance: `local credit_grant = client:CreditGrant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `table` |  |
| `applicability_config` | `table` |  |
| `category` | `string` | The category of this credit grant. |
| `created` | `number` | Time at which the object was created. |
| `customer` | `any` | ID of the customer receiving the billing credits. |
| `customer_account` | `string` | ID of the account representing the customer receiving the billing credits |
| `effective_at` | `number` | The time when the billing credits become effective-when they're eligible for use. |
| `expires_at` | `number` | The time when the billing credits expire. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | A descriptive name shown in dashboard. |
| `object` | `string` | String representing the object's type. |
| `priority` | `number` | The priority for applying this credit grant. |
| `test_clock` | `any` | ID of the test clock this credit grant belongs to. |
| `updated` | `number` | Time at which the object was last updated. |
| `voided_at` | `number` | The time when this credit grant was voided. |

#### Example: Load

```lua
local credit_grant, err = client:CreditGrant():load({ id = "credit_grant_id" })
```

#### Example: List

```lua
local credit_grants, err = client:CreditGrant():list()
```

#### Example: Create

```lua
local credit_grant, err = client:CreditGrant():create({
  id = "example_id", -- string
  amount = {}, -- table
  applicability_config = {}, -- table
  category = "example_category", -- string
  created = 1, -- number
  customer = "example_customer", -- any
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  updated = 1, -- number
})
```


### CreditNote

Create an instance: `local credit_note = client:CreditNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax. |
| `amount_shipping` | `number` | This is the sum of all the shipping amounts. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | ID of the customer. |
| `customer_account` | `string` | ID of the account representing the customer. |
| `customer_balance_transaction` | `any` | Customer balance transaction related to this credit note. |
| `discount_amount` | `number` | The integer amount in cents (or local equivalent) representing the total amount of discount that was credited. |
| `discount_amounts` | `table` | The aggregate amounts calculated per discount for all line items. |
| `effective_at` | `number` | The date when this credit note is in effect. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `any` | ID of the invoice. |
| `lines` | `table` | Line items that make up the credit note |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `memo` | `string` | Customer-facing text that appears on the credit note PDF. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `string` | A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice. |
| `object` | `string` | String representing the object's type. |
| `out_of_band_amount` | `number` | Amount that was credited outside of Stripe. |
| `pdf` | `string` | The link to download the PDF of the credit note. |
| `post_payment_amount` | `number` | The amount of the credit note that was refunded to the customer, credited to the customer's balance, credited outside of Stripe, or any combination thereof. |
| `pre_payment_amount` | `number` | The amount of the credit note by which the invoice's `amount_remaining` and `amount_due` were reduced. |
| `pretax_credit_amounts` | `table` | The pretax credit amounts (ex: discount, credit grants, etc) for all line items. |
| `reason` | `string` | Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory` |
| `refunds` | `table` | Refunds related to this credit note. |
| `shipping_cost` | `any` | The details of the cost of shipping, including the ShippingRate applied to the invoice. |
| `status` | `string` | Status of this credit note, one of `issued` or `void`. |
| `subtotal` | `number` | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts. |
| `subtotal_excluding_tax` | `number` | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts. |
| `total` | `number` | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount. |
| `total_excluding_tax` | `number` | The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts. |
| `total_taxes` | `table` | The aggregate tax information for all line items. |
| `type` | `string` | Type of this credit note, one of `pre_payment` or `post_payment`. |
| `voided_at` | `number` | The time that the credit note was voided. |

#### Example: Load

```lua
local credit_note, err = client:CreditNote():load({ id = "credit_note_id" })
```

#### Example: List

```lua
local credit_notes, err = client:CreditNote():list()
```

#### Example: Create

```lua
local credit_note, err = client:CreditNote():create({
  id = "example_id", -- string
  amount = 1, -- number
  amount_shipping = 1, -- number
  created = 1, -- number
  currency = "example_currency", -- string
  customer = "example_customer", -- any
  discount_amount = 1, -- number
  discount_amounts = {}, -- table
  invoice = "example_invoice", -- any
  lines = {}, -- table
  livemode = true, -- boolean
  number = "example_number", -- string
  object = "example_object", -- string
  pdf = "example_pdf", -- string
  post_payment_amount = 1, -- number
  pre_payment_amount = 1, -- number
  pretax_credit_amounts = {}, -- table
  refunds = {}, -- table
  status = "example_status", -- string
  subtotal = 1, -- number
  total = 1, -- number
  type = "example_type", -- string
})
```


### CreditNoteLine

Create an instance: `local credit_note_line = client:CreditNoteLine(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts. |
| `description` | `string` | Description of the item being credited. |
| `discount_amount` | `number` | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `table` | The amount of discount calculated per discount for this line item |
| `id` | `string` | Unique identifier for the object. |
| `invoice_line_item` | `string` | ID of the invoice line item being credited |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `pretax_credit_amounts` | `table` | The pretax credit amounts (ex: discount, credit grants, etc) for this line item. |
| `quantity` | `number` | The number of units of product being credited. |
| `tax_rates` | `table` | The tax rates which apply to the line item. |
| `taxes` | `table` | The tax information of the line item. |
| `type` | `string` | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | `number` | The cost of each unit of product being credited. |
| `unit_amount_decimal` | `string` | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

#### Example: List

```lua
local credit_note_lines, err = client:CreditNoteLine():list()
```


### CreditReversal

Create an instance: `local credit_reversal = client:CreditReversal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Amount (in cents) transferred. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `financial_account` | `string` | The FinancialAccount to reverse funds from. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `string` | The rails used to reverse the funds. |
| `object` | `string` | String representing the object's type. |
| `received_credit` | `string` | The ReceivedCredit being reversed. |
| `status` | `string` | Status of the CreditReversal |
| `status_transitions` | `table` |  |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```lua
local credit_reversal, err = client:CreditReversal():load({ id = "credit_reversal_id" })
```

#### Example: List

```lua
local credit_reversals, err = client:CreditReversal():list()
```

#### Example: Create

```lua
local credit_reversal, err = client:CreditReversal():create({
  amount = 1, -- number
  created = 1, -- number
  currency = "example_currency", -- string
  financial_account = "example_financial_account", -- string
  id = "example_id", -- string
  livemode = true, -- boolean
  metadata = {}, -- table
  network = "example_network", -- string
  object = "example_object", -- string
  received_credit = "example_received_credit", -- string
  status = "example_status", -- string
  status_transitions = {}, -- table
})
```


### Customer

Create an instance: `local customer = client:Customer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `any` | The customer's billing address. |
| `balance` | `number` | The current balance, if any, that's stored on the customer in their default currency. |
| `business_name` | `string` | The customer's business name. |
| `cash_balance` | `any` | The current funds being held by Stripe on behalf of the customer. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes. |
| `customer_account` | `string` | The ID of an Account representing a customer. |
| `default_source` | `any` | ID of the default payment source for the customer. |
| `delinquent` | `boolean` | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discount` | `any` | Describes the current discount active on the customer, if there is one. |
| `email` | `string` | The customer's email address. |
| `id` | `string` | Unique identifier for the object. |
| `individual_name` | `string` | The customer's individual name. |
| `invoice_credit_balance` | `table` | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_prefix` | `string` | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `table` |  |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | The customer's full name or business name. |
| `next_invoice_sequence` | `number` | The suffix of the customer's next invoice number (for example, 0001). |
| `object` | `string` | String representing the object's type. |
| `phone` | `string` | The customer's phone number. |
| `preferred_locales` | `table` | The customer's preferred locales (languages), ordered by preference. |
| `shipping` | `any` | Mailing and shipping address for the customer. |
| `sources` | `table` | The customer's payment sources, if any. |
| `subscriptions` | `table` | The customer's current subscriptions, if any. |
| `tax` | `table` |  |
| `tax_exempt` | `string` | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `table` | The customer's tax IDs. |
| `test_clock` | `any` | ID of the test clock that this customer belongs to. |

#### Example: Load

```lua
local customer, err = client:Customer():load({ id = "customer_id" })
```

#### Example: List

```lua
local customers, err = client:Customer():list()
```

#### Example: Create

```lua
local customer, err = client:Customer():create({
  id = "example_id", -- string
  created = 1, -- number
  livemode = true, -- boolean
  object = "example_object", -- string
  sources = {}, -- table
  subscriptions = {}, -- table
  tax = {}, -- table
  tax_ids = {}, -- table
})
```


### CustomerBalanceTransaction

Create an instance: `local customer_balance_transaction = client:CustomerBalanceTransaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | The amount of the transaction. |
| `checkout_session` | `any` | The ID of the checkout session (if any) that created the transaction. |
| `created` | `number` | Time at which the object was created. |
| `credit_note` | `any` | The ID of the credit note (if any) related to the transaction. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | The ID of the customer the transaction belongs to. |
| `customer_account` | `string` | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | `string` | An arbitrary string attached to the object. |
| `ending_balance` | `number` | The customer's `balance` after the transaction was applied. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `any` | The ID of the invoice (if any) related to the transaction. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `type` | `string` | Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or… |

#### Example: Load

```lua
local customer_balance_transaction, err = client:CustomerBalanceTransaction():load({ id = "customer_balance_transaction_id", customer_id = "customer_id" })
```

#### Example: Create

```lua
local customer_balance_transaction, err = client:CustomerBalanceTransaction():create({
  id = "example_id", -- string
  amount = 1, -- number
  created = 1, -- number
  currency = "example_currency", -- string
  customer = "example_customer", -- any
  ending_balance = 1, -- number
  livemode = true, -- boolean
  object = "example_object", -- string
  type = "example_type", -- string
})
```


### CustomerSession

Create an instance: `local customer_session = client:CustomerSession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_secret` | `string` | The client secret of this Customer Session. |
| `components` | `table` | Configuration for the components supported by this Customer Session. |
| `created` | `number` | Time at which the object was created. |
| `customer` | `any` | The Customer the Customer Session was created for. |
| `customer_account` | `string` | The Account that the Customer Session was created for. |
| `expires_at` | `number` | The timestamp at which this Customer Session will expire. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |

#### Example: Create

```lua
local customer_session, err = client:CustomerSession():create({
  client_secret = "example_client_secret", -- string
  components = {}, -- table
  created = 1, -- number
  customer = "example_customer", -- any
  expires_at = 1, -- number
  livemode = true, -- boolean
  object = "example_object", -- string
})
```


### DebitReversal

Create an instance: `local debit_reversal = client:DebitReversal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Amount (in cents) transferred. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `financial_account` | `string` | The FinancialAccount to reverse funds from. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `linked_flows` | `any` | Other flows linked to a DebitReversal. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `string` | The rails used to reverse the funds. |
| `object` | `string` | String representing the object's type. |
| `received_debit` | `string` | The ReceivedDebit being reversed. |
| `status` | `string` | Status of the DebitReversal |
| `status_transitions` | `table` |  |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```lua
local debit_reversal, err = client:DebitReversal():load({ id = "debit_reversal_id" })
```

#### Example: List

```lua
local debit_reversals, err = client:DebitReversal():list()
```

#### Example: Create

```lua
local debit_reversal, err = client:DebitReversal():create({
  amount = 1, -- number
  created = 1, -- number
  currency = "example_currency", -- string
  id = "example_id", -- string
  livemode = true, -- boolean
  metadata = {}, -- table
  network = "example_network", -- string
  object = "example_object", -- string
  received_debit = "example_received_debit", -- string
  status = "example_status", -- string
  status_transitions = {}, -- table
})
```


### DeletedAccount

Create an instance: `local deleted_account = client:DeletedAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedApplePayDomain

Create an instance: `local deleted_apple_pay_domain = client:DeletedApplePayDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedCoupon

Create an instance: `local deleted_coupon = client:DeletedCoupon(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedExternalAccount

Create an instance: `local deleted_external_account = client:DeletedExternalAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedInvoiceitem

Create an instance: `local deleted_invoiceitem = client:DeletedInvoiceitem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedPerson

Create an instance: `local deleted_person = client:DeletedPerson(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedPlan

Create an instance: `local deleted_plan = client:DeletedPlan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedProductFeature

Create an instance: `local deleted_product_feature = client:DeletedProductFeature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedSubscriptionItem

Create an instance: `local deleted_subscription_item = client:DeletedSubscriptionItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedWebhookEndpoint

Create an instance: `local deleted_webhook_endpoint = client:DeletedWebhookEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Discount

Create an instance: `local discount = client:Discount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checkout_session` | `string` | The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. |
| `customer` | `any` | The ID of the customer associated with this discount. |
| `customer_account` | `string` | The ID of the account representing the customer associated with this discount. |
| `end` | `number` | If the coupon has a duration of `repeating`, the date that this discount will end. |
| `id` | `string` | The ID of the discount object. |
| `invoice` | `string` | The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice. |
| `invoice_item` | `string` | The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item. |
| `object` | `string` | String representing the object's type. |
| `promotion_code` | `any` | The promotion code applied to create this discount. |
| `source` | `table` |  |
| `start` | `number` | Date that the coupon was applied. |
| `subscription` | `string` | The subscription that this coupon is applied to, if it is applied to a particular subscription. |
| `subscription_item` | `string` | The subscription item that this coupon is applied to, if it is applied to a particular subscription item. |

#### Example: Load

```lua
local discount, err = client:Discount():load({ customer_id = "customer_id" })
```


### Dispute

Create an instance: `local dispute = client:Dispute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Disputed amount. |
| `balance_transactions` | `table` | List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute. |
| `charge` | `any` | ID of the charge that's disputed. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `enhanced_eligibility_types` | `table` | List of eligibility types that are included in `enhanced_evidence`. |
| `evidence` | `table` |  |
| `evidence_details` | `table` |  |
| `id` | `string` | Unique identifier for the object. |
| `is_charge_refundable` | `boolean` | If true, it's still possible to refund the disputed payment. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `loss_reason` | `string` | The enum that describes the dispute loss outcome. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `payment_intent` | `any` | ID of the PaymentIntent that's disputed. |
| `payment_method_details` | `table` |  |
| `reason` | `string` | Reason given by cardholder for dispute. |
| `status` | `string` | The current status of a dispute. |
| `transaction` | `any` | The transaction being disputed. |
| `treasury` | `any` | [Treasury](https://docs.stripe.com/api/treasury) details related to this dispute if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts) |

#### Example: Load

```lua
local dispute, err = client:Dispute():load({ id = "dispute_id" })
```

#### Example: List

```lua
local disputes, err = client:Dispute():list()
```

#### Example: Create

```lua
local dispute, err = client:Dispute():create({
  id = "example_id", -- string
  amount = 1, -- number
  balance_transactions = {}, -- table
  charge = "example_charge", -- any
  created = 1, -- number
  currency = "example_currency", -- string
  enhanced_eligibility_types = {}, -- table
  evidence = {}, -- table
  evidence_details = {}, -- table
  is_charge_refundable = true, -- boolean
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  payment_method_details = {}, -- table
  reason = "example_reason", -- string
  status = "example_status", -- string
  transaction = "example_transaction", -- any
})
```


### Domain

Create an instance: `local domain = client:Domain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `domain_name` | `string` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |

#### Example: List

```lua
local domains, err = client:Domain():list()
```


### EarlyFraudWarning

Create an instance: `local early_fraud_warning = client:EarlyFraudWarning(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionable` | `boolean` | An EFW is actionable if it has not received a dispute and has not been fully refunded. |
| `charge` | `any` | ID of the charge this early fraud warning is for, optionally expanded. |
| `created` | `number` | Time at which the object was created. |
| `fraud_type` | `string` | The type of fraud labelled by the issuer. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `payment_intent` | `any` | ID of the Payment Intent this early fraud warning is for, optionally expanded. |

#### Example: Load

```lua
local early_fraud_warning, err = client:EarlyFraudWarning():load({ id = "early_fraud_warning_id" })
```

#### Example: List

```lua
local early_fraud_warnings, err = client:EarlyFraudWarning():list()
```


### EphemeralKey

Create an instance: `local ephemeral_key = client:EphemeralKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `expires` | `number` | Time at which the key will expire. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `secret` | `string` | The key's secret. |

#### Example: Create

```lua
local ephemeral_key, err = client:EphemeralKey():create({
  created = 1, -- number
  expires = 1, -- number
  id = "example_id", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
})
```


### Event

Create an instance: `local event = client:Event(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | The connected account that originates the event. |
| `api_version` | `string` | The Stripe API version used to render `data` when the event was created. |
| `context` | `string` | Authentication context needed to fetch the event or related object. |
| `created` | `number` | Time at which the object was created. |
| `data` | `table` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `pending_webhooks` | `number` | Number of webhooks that haven't been successfully delivered (for example, to return a 20x response) to the URLs you specify. |
| `request` | `any` | Information on the API request that triggers the event. |
| `type` | `string` | Description of the event (for example, `invoice.created` or `charge.refunded`). |

#### Example: Load

```lua
local event, err = client:Event():load({ id = "event_id" })
```

#### Example: List

```lua
local events, err = client:Event():list()
```


### ExchangeRate

Create an instance: `local exchange_rate = client:ExchangeRate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the object. |
| `object` | `string` | String representing the object's type. |
| `rates` | `table` | Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency. |

#### Example: Load

```lua
local exchange_rate, err = client:ExchangeRate():load({ id = "exchange_rate_id" })
```

#### Example: List

```lua
local exchange_rates, err = client:ExchangeRate():list()
```


### ExternalAccount

Create an instance: `local external_account = client:ExternalAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` | The list contains all external accounts that have been attached to the Stripe account. |
| `has_more` | `boolean` | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` |  |
| `object` | `string` | String representing the object's type. |
| `url` | `string` | The URL where this list can be accessed. |

#### Example: Load

```lua
local external_account, err = client:ExternalAccount():load({ id = "external_account_id", account_id = "account_id" })
```

#### Example: List

```lua
local external_accounts, err = client:ExternalAccount():list()
```

#### Example: Create

```lua
local external_account, err = client:ExternalAccount():create({
  id = "example_id", -- string
  data = {}, -- table
  has_more = true, -- boolean
  object = "example_object", -- string
  url = "example_url", -- string
})
```


### Feature

Create an instance: `local feature = client:Feature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `entitlement_feature` | `table` | A feature represents a monetizable ability or functionality in your system. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | A unique key you provide as your own system identifier. |
| `metadata` | `table` | Set of key-value pairs that you can attach to an object. |
| `name` | `string` | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `string` | String representing the object's type. |

#### Example: Load

```lua
local feature, err = client:Feature():load({ id = "feature_id" })
```

#### Example: List

```lua
local features, err = client:Feature():list()
```

#### Example: Create

```lua
local feature, err = client:Feature():create({
  id = "example_id", -- string
  active = true, -- boolean
  entitlement_feature = {}, -- table
  livemode = true, -- boolean
  lookup_key = "example_lookup_key", -- string
  metadata = {}, -- table
  name = "example_name", -- string
  object = "example_object", -- string
})
```


### FeedbackOption

Create an instance: `local feedback_option = client:FeedbackOption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deactivated_at` | `number` | The time the feedback option was deactivated, if any. |
| `description` | `string` | An arbitrary string attached to the object. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | The feedback option's status. |
| `status_transitions` | `table` |  |

#### Example: Load

```lua
local feedback_option, err = client:FeedbackOption():load({ id = "feedback_option_id" })
```

#### Example: List

```lua
local feedback_options, err = client:FeedbackOption():list()
```

#### Example: Create

```lua
local feedback_option, err = client:FeedbackOption():create({
  id = "example_id", -- string
  description = "example_description", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  status = "example_status", -- string
  status_transitions = {}, -- table
})
```


### File

Create an instance: `local file = client:File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `data` | `table` | Details about each object. |
| `expires_at` | `number` | The file expires and isn't available at this time in epoch seconds. |
| `filename` | `string` | The suitable name for saving the file to a filesystem. |
| `has_more` | `boolean` | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | Unique identifier for the object. |
| `links` | `table` | A list of [file links](https://docs.stripe.com/api#file_links) that point at this file. |
| `object` | `string` | String representing the object's type. |
| `purpose` | `string` | The [purpose](https://docs.stripe.com/file-upload#uploading-a-file) of the uploaded file. |
| `size` | `number` | The size of the file object in bytes. |
| `title` | `string` | A suitable title for the document. |
| `type` | `string` | The returned file type (for example, `csv`, `pdf`, `jpg`, or `png`). |
| `url` | `string` | The URL where this list can be accessed. |

#### Example: Load

```lua
local file, err = client:File():load({ id = "file_id" })
```

#### Example: List

```lua
local files, err = client:File():list()
```

#### Example: Create

```lua
local file, err = client:File():create({
  created = 1, -- number
  data = {}, -- table
  has_more = true, -- boolean
  id = "example_id", -- string
  links = {}, -- table
  object = "example_object", -- string
  purpose = "example_purpose", -- string
  size = 1, -- number
  url = "example_url", -- string
})
```


### FileLink

Create an instance: `local file_link = client:FileLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `expired` | `boolean` | Returns if the link is already expired. |
| `expires_at` | `number` | Time that the link expires. |
| `file` | `any` | The file object this link points to. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `url` | `string` | The publicly accessible URL to download the file. |

#### Example: Load

```lua
local file_link, err = client:FileLink():load({ id = "file_link_id" })
```

#### Example: List

```lua
local file_links, err = client:FileLink():list()
```

#### Example: Create

```lua
local file_link, err = client:FileLink():create({
  id = "example_id", -- string
  created = 1, -- number
  expired = true, -- boolean
  file = "example_file", -- any
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
})
```


### FinancialAccount

Create an instance: `local financial_account = client:FinancialAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_features` | `table` | The array of paths to active Features in the Features hash. |
| `balance` | `table` | Balance information for the FinancialAccount |
| `country` | `string` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | `number` | Time at which the object was created. |
| `features` | `table` | Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`. |
| `financial_addresses` | `table` | The set of credentials that resolve to a FinancialAccount. |
| `id` | `string` | Unique identifier for the object. |
| `is_default` | `boolean` |  |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | The nickname for the FinancialAccount. |
| `object` | `string` | String representing the object's type. |
| `pending_features` | `table` | The array of paths to pending Features in the Features hash. |
| `platform_restrictions` | `any` | The set of functionalities that the platform can restrict on the FinancialAccount. |
| `restricted_features` | `table` | The array of paths to restricted Features in the Features hash. |
| `status` | `string` | Status of this FinancialAccount. |
| `status_details` | `table` |  |
| `supported_currencies` | `table` | The currencies the FinancialAccount can hold a balance in. |

#### Example: Load

```lua
local financial_account, err = client:FinancialAccount():load({ id = "financial_account_id" })
```

#### Example: List

```lua
local financial_accounts, err = client:FinancialAccount():list()
```

#### Example: Create

```lua
local financial_account, err = client:FinancialAccount():create({
  id = "example_id", -- string
  balance = {}, -- table
  country = "example_country", -- string
  created = 1, -- number
  features = {}, -- table
  financial_addresses = {}, -- table
  livemode = true, -- boolean
  object = "example_object", -- string
  status = "example_status", -- string
  status_details = {}, -- table
  supported_currencies = {}, -- table
})
```


### FinancialAccountFeature

Create an instance: `local financial_account_feature = client:FinancialAccountFeature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `card_issuing` | `table` | Toggle settings for enabling/disabling a feature |
| `deposit_insurance` | `table` | Toggle settings for enabling/disabling a feature |
| `financial_addresses` | `table` | Settings related to Financial Addresses features on a Financial Account |
| `id` | `string` |  |
| `inbound_transfers` | `table` | InboundTransfers contains inbound transfers features for a FinancialAccount. |
| `intra_stripe_flows` | `table` | Toggle settings for enabling/disabling a feature |
| `object` | `string` | String representing the object's type. |
| `outbound_payments` | `table` | Settings related to Outbound Payments features on a Financial Account |
| `outbound_transfers` | `table` | OutboundTransfers contains outbound transfers features for a FinancialAccount. |

#### Example: Load

```lua
local financial_account_feature, err = client:FinancialAccountFeature():load({ id = "financial_account_feature_id" })
```

#### Example: Create

```lua
local financial_account_feature, err = client:FinancialAccountFeature():create({
  id = "example_id", -- string
  card_issuing = {}, -- table
  deposit_insurance = {}, -- table
  intra_stripe_flows = {}, -- table
  object = "example_object", -- string
})
```


### FundCashBalance

Create an instance: `local fund_cash_balance = client:FundCashBalance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adjusted_for_overdraft` | `table` |  |
| `applied_to_payment` | `table` |  |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `string` | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `number` | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `table` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `net_amount` | `number` | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `string` | String representing the object's type. |
| `refunded_from_payment` | `table` |  |
| `transferred_to_balance` | `table` |  |
| `type` | `string` | The type of the cash balance transaction. |
| `unapplied_from_payment` | `table` |  |

#### Example: Create

```lua
local fund_cash_balance, err = client:FundCashBalance():create({
  customer_id = "example_customer_id", -- string
  adjusted_for_overdraft = {}, -- table
  applied_to_payment = {}, -- table
  created = 1, -- number
  currency = "example_currency", -- string
  customer = "example_customer", -- any
  ending_balance = 1, -- number
  funded = {}, -- table
  id = "example_id", -- string
  livemode = true, -- boolean
  net_amount = 1, -- number
  object = "example_object", -- string
  refunded_from_payment = {}, -- table
  transferred_to_balance = {}, -- table
  type = "example_type", -- string
  unapplied_from_payment = {}, -- table
})
```


### FundingInstruction

Create an instance: `local funding_instruction = client:FundingInstruction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country` | `string` | The country of the bank account to fund |
| `financial_addresses` | `table` | A list of financial addresses that can be used to fund a particular balance |
| `type` | `string` | The bank_transfer type |

#### Example: Create

```lua
local funding_instruction, err = client:FundingInstruction():create({
  customer_id = "example_customer_id", -- string
  country = "example_country", -- string
  financial_addresses = {}, -- table
  type = "example_type", -- string
})
```


### History

Create an instance: `local history = client:History(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Gross amount of this transaction (in cents (or local equivalent)). |
| `available_on` | `number` | The date that the transaction's net funds become available in the Stripe balance. |
| `balance_type` | `string` | The balance that this transaction impacts. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `exchange_rate` | `number` | If applicable, this transaction uses an exchange rate. |
| `fee` | `number` | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | `table` | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `string` | Unique identifier for the object. |
| `net` | `number` | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `string` | String representing the object's type. |
| `reporting_category` | `string` | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `any` | This transaction relates to the Stripe object. |
| `status` | `string` | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `string` | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

#### Example: List

```lua
local historys, err = client:History():list()
```


### InboundTransfer

Create an instance: `local inbound_transfer = client:InboundTransfer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Amount (in cents) transferred. |
| `cancelable` | `boolean` | Returns `true` if the InboundTransfer is able to be canceled. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `failure_details` | `any` | Details about this InboundTransfer's failure. |
| `financial_account` | `string` | The FinancialAccount that received the funds. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `linked_flows` | `table` |  |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `origin_payment_method` | `string` | The origin payment method to be debited for an InboundTransfer. |
| `origin_payment_method_details` | `any` | Details about the PaymentMethod for an InboundTransfer. |
| `returned` | `boolean` | Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state. |
| `statement_descriptor` | `string` | Statement descriptor shown when funds are debited from the source. |
| `status` | `string` | Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. |
| `status_transitions` | `table` |  |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```lua
local inbound_transfer, err = client:InboundTransfer():load({ id = "inbound_transfer_id" })
```

#### Example: List

```lua
local inbound_transfers, err = client:InboundTransfer():list()
```

#### Example: Create

```lua
local inbound_transfer, err = client:InboundTransfer():create({
  amount = 1, -- number
  cancelable = true, -- boolean
  created = 1, -- number
  currency = "example_currency", -- string
  financial_account = "example_financial_account", -- string
  id = "example_id", -- string
  linked_flows = {}, -- table
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  statement_descriptor = "example_statement_descriptor", -- string
  status = "example_status", -- string
  status_transitions = {}, -- table
})
```


### Install

Create an instance: `local install = client:Install(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | The ID of the account that the app install belongs to. |
| `app` | `string` | The ID of the app installed. |
| `approval_required` | `boolean` | Whether the installer must authorize pending permissions, content security policy entries, or endpoints. |
| `auth_code` | `string` | The authorization code for an oauth app install. |
| `channel` | `string` | The distribution channel associated with the app install. |
| `content_security_policy_granted` | `table` |  |
| `content_security_policy_pending` | `table` |  |
| `created` | `number` | Time at which the object was created. |
| `created_by` | `string` | The ID of the embedding platform that created the install, if applicable. |
| `endpoints_granted` | `table` | The endpoint URLs authorized by the installer. |
| `endpoints_pending` | `table` | The endpoint URLs requested by the latest app version that the installer has not authorized. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `permissions_granted` | `table` | The permissions authorized by the installer. |
| `permissions_pending` | `table` | The permissions requested by the latest app version that the installer has not authorized. |
| `status` | `string` | The status of the app install. |

#### Example: Load

```lua
local install, err = client:Install():load({ id = "install_id" })
```

#### Example: List

```lua
local installs, err = client:Install():list()
```

#### Example: Create

```lua
local install, err = client:Install():create({
  id = "example_id", -- string
  account = "example_account", -- string
  app = "example_app", -- string
  approval_required = true, -- boolean
  channel = "example_channel", -- string
  content_security_policy_granted = {}, -- table
  content_security_policy_pending = {}, -- table
  created = 1, -- number
  endpoints_granted = {}, -- table
  endpoints_pending = {}, -- table
  livemode = true, -- boolean
  object = "example_object", -- string
  permissions_granted = {}, -- table
  permissions_pending = {}, -- table
  status = "example_status", -- string
})
```


### Invoice

Create an instance: `local invoice = client:Invoice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_country` | `string` | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `string` | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `table` | The account tax IDs associated with the invoice. |
| `amount_due` | `number` | Final amount due at this time for this invoice. |
| `amount_overpaid` | `number` | Amount that was overpaid on the invoice. |
| `amount_paid` | `number` | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | `number` | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_remaining` | `number` | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | `number` | This is the sum of all the shipping amounts. |
| `application` | `any` | ID of the Connect Application that created the invoice. |
| `attempt_count` | `number` | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | `boolean` | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | `boolean` | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_tax` | `table` |  |
| `automatically_finalizes_at` | `number` | The time when this invoice is currently scheduled to be automatically finalized. |
| `billing_reason` | `string` | Indicates the reason why the invoice was created. |
| `collection_method` | `string` | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_secret` | `any` | The confirmation secret associated with this invoice. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `table` | Custom fields displayed on the invoice. |
| `customer` | `any` | The ID of the customer to bill. |
| `customer_account` | `string` | The ID of the account representing the customer to bill. |
| `customer_address` | `any` | The customer's address. |
| `customer_email` | `string` | The customer's email. |
| `customer_name` | `string` | The customer's name. |
| `customer_phone` | `string` | The customer's phone number. |
| `customer_shipping` | `any` | The customer's shipping information. |
| `customer_tax_exempt` | `string` | The customer's tax exempt status. |
| `customer_tax_ids` | `table` | The customer's tax IDs. |
| `default_payment_method` | `any` | ID of the default payment method for the invoice. |
| `default_source` | `any` | ID of the default payment source for the invoice. |
| `default_tax_rates` | `table` | The tax rates applied to this invoice, if any. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discounts` | `table` | The discounts applied to the invoice. |
| `due_date` | `number` | The date on which payment for this invoice is due. |
| `effective_at` | `number` | The date when this invoice is in effect. |
| `ending_balance` | `number` | Ending customer balance after the invoice is finalized. |
| `footer` | `string` | Footer displayed on the invoice. |
| `from_invoice` | `any` | Details of the invoice that was cloned. |
| `hosted_invoice_url` | `string` | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `string` | Unique identifier for the object. |
| `invoice_pdf` | `string` | The link to download the PDF for the invoice. |
| `issuer` | `table` |  |
| `last_finalization_error` | `any` | The error encountered during the previous attempt to finalize the invoice. |
| `latest_revision` | `any` | The ID of the most recent non-draft revision of this invoice |
| `lines` | `table` | The individual line items that make up the invoice. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_payment_attempt` | `number` | The time at which payment will next be attempted. |
| `number` | `string` | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account (if any) for which the funds of the invoice payment are intended. |
| `parent` | `any` | The parent that generated this invoice |
| `payment_settings` | `table` |  |
| `payments` | `table` | Payments for this invoice. |
| `period_end` | `number` | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | `number` | The earliest timestamp at which invoice items can be associated with this invoice. |
| `post_payment_credit_notes_amount` | `number` | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | `number` | Total amount of all pre-payment credit notes issued for this invoice. |
| `receipt_number` | `string` | This is the transaction number that appears on email receipts sent for this invoice. |
| `rendering` | `any` | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `shipping_cost` | `any` | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | `any` | Shipping details for the invoice. |
| `starting_balance` | `number` | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | `string` | Extra information about an invoice for the customer's credit card statement. |
| `status` | `string` | The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. |
| `status_details` | `table` |  |
| `status_transitions` | `table` |  |
| `subtotal` | `number` | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `number` | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `test_clock` | `any` | ID of the test clock this invoice belongs to. |
| `threshold_reason` | `table` |  |
| `total` | `number` | Total after discounts and taxes. |
| `total_discount_amounts` | `table` | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `number` | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `table` | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `table` | The aggregate tax information of all line items. |
| `webhooks_delivered_at` | `number` | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

#### Example: Load

```lua
local invoice, err = client:Invoice():load({ id = "invoice_id" })
```

#### Example: List

```lua
local invoices, err = client:Invoice():list()
```

#### Example: Create

```lua
local invoice, err = client:Invoice():create({
  id = "example_id", -- string
  amount_due = 1, -- number
  amount_overpaid = 1, -- number
  amount_paid = 1, -- number
  amount_paid_off_stripe = 1, -- number
  amount_remaining = 1, -- number
  amount_shipping = 1, -- number
  attempt_count = 1, -- number
  attempted = true, -- boolean
  auto_advance = true, -- boolean
  automatic_tax = {}, -- table
  collection_method = "example_collection_method", -- string
  created = 1, -- number
  currency = "example_currency", -- string
  customer = "example_customer", -- any
  default_tax_rates = {}, -- table
  discounts = {}, -- table
  issuer = {}, -- table
  lines = {}, -- table
  livemode = true, -- boolean
  object = "example_object", -- string
  payment_settings = {}, -- table
  payments = {}, -- table
  period_end = 1, -- number
  period_start = 1, -- number
  post_payment_credit_notes_amount = 1, -- number
  pre_payment_credit_notes_amount = 1, -- number
  starting_balance = 1, -- number
  status_transitions = {}, -- table
  subtotal = 1, -- number
  threshold_reason = {}, -- table
  total = 1, -- number
})
```


### InvoicePayment

Create an instance: `local invoice_payment = client:InvoicePayment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount_paid` | `number` | Amount that was actually paid for this invoice, in cents (or local equivalent). |
| `amount_requested` | `number` | Amount intended to be paid toward this invoice, in cents (or local equivalent) |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `any` | The invoice that was paid. |
| `is_default` | `boolean` | Stripe automatically creates a default InvoicePayment when the invoice is finalized, and keeps it synchronized with the invoice’s `amount_remaining`. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `payment` | `table` |  |
| `status` | `string` | The status of the payment, one of `open`, `paid`, or `canceled`. |
| `status_transitions` | `table` |  |

#### Example: Load

```lua
local invoice_payment, err = client:InvoicePayment():load({ id = "invoice_payment_id" })
```

#### Example: List

```lua
local invoice_payments, err = client:InvoicePayment():list()
```


### InvoiceRenderingTemplate

Create an instance: `local invoice_rendering_template = client:InvoiceRenderingTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | A brief description of the template, hidden from customers |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | The status of the template, one of `active` or `archived`. |
| `version` | `number` | Version of this template; version increases by one when an update on the template changes any field that controls invoice rendering |

#### Example: Load

```lua
local invoice_rendering_template, err = client:InvoiceRenderingTemplate():load({ id = "invoice_rendering_template_id" })
```

#### Example: List

```lua
local invoice_rendering_templates, err = client:InvoiceRenderingTemplate():list()
```

#### Example: Create

```lua
local invoice_rendering_template, err = client:InvoiceRenderingTemplate():create({
  template = "example_template", -- string
  created = 1, -- number
  id = "example_id", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  status = "example_status", -- string
  version = 1, -- number
})
```


### Invoiceitem

Create an instance: `local invoiceitem = client:Invoiceitem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Amount (in the `currency` specified) of the invoice item. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | The ID of the customer to bill for this invoice item. |
| `customer_account` | `string` | The ID of the account to bill for this invoice item. |
| `date` | `number` | Time at which the object was created. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discountable` | `boolean` | If true, discounts will apply to this invoice item. |
| `discounts` | `table` | The discounts which apply to the invoice item. |
| `frozen_fields` | `table` | Array of field names that can't be modified. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `any` | The ID of the invoice this invoice item belongs to. |
| `invoicing_rules` | `table` | The rules that control when this invoice item is eligible for invoicing. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net_amount` | `number` | The amount after discounts, but before credits and taxes. |
| `object` | `string` | String representing the object's type. |
| `parent` | `any` | The parent that generated this invoice item. |
| `period` | `table` |  |
| `pricing` | `any` | The pricing information of the invoice item. |
| `proration` | `boolean` | Whether the invoice item was created automatically as a proration adjustment when the customer switched plans. |
| `proration_details` | `table` |  |
| `quantity` | `number` | Quantity of units for the invoice item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `string` | Non-negative decimal with at most 12 decimal places. |
| `tax_rates` | `table` | The tax rates which apply to the invoice item. |
| `test_clock` | `any` | ID of the test clock this invoice item belongs to. |

#### Example: Load

```lua
local invoiceitem, err = client:Invoiceitem():load({ id = "invoiceitem_id" })
```

#### Example: List

```lua
local invoiceitems, err = client:Invoiceitem():list()
```

#### Example: Create

```lua
local invoiceitem, err = client:Invoiceitem():create({
  id = "example_id", -- string
  amount = 1, -- number
  currency = "example_currency", -- string
  customer = "example_customer", -- any
  date = 1, -- number
  discountable = true, -- boolean
  livemode = true, -- boolean
  object = "example_object", -- string
  period = {}, -- table
  proration = true, -- boolean
  proration_details = {}, -- table
  quantity = 1, -- number
  quantity_decimal = "example_quantity_decimal", -- string
})
```


### Line

Create an instance: `local line = client:Line(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | The amount, in cents (or local equivalent). |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discount_amount` | `number` | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `table` | The amount of discount calculated per discount for this line item. |
| `discountable` | `boolean` | If true, discounts will apply to this line item. |
| `discounts` | `table` | The discounts applied to the invoice line item. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `string` | The ID of the invoice that contains this line item. |
| `invoice_line_item` | `string` | ID of the invoice line item being credited |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `parent` | `any` | The parent that generated this line item. |
| `period` | `table` |  |
| `pretax_credit_amounts` | `table` | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item. |
| `pricing` | `any` | The pricing information of the line item. |
| `quantity` | `number` | Quantity of units for the invoice line item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `string` | Non-negative decimal with at most 12 decimal places. |
| `subscription` | `any` |  |
| `subtotal` | `number` | The subtotal of the line item, in cents (or local equivalent), before any discounts or taxes. |
| `tax_rates` | `table` | The tax rates which apply to the line item. |
| `taxes` | `table` | The tax information of the line item. |
| `type` | `string` | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | `number` | The cost of each unit of product being credited. |
| `unit_amount_decimal` | `string` | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

#### Example: List

```lua
local lines, err = client:Line():list()
```

#### Example: Create

```lua
local line, err = client:Line():create({
  id = "example_id", -- string
  invoice_id = "example_invoice_id", -- string
  amount = 1, -- number
  currency = "example_currency", -- string
  discount_amount = 1, -- number
  discountable = true, -- boolean
  discounts = {}, -- table
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  period = {}, -- table
  subtotal = 1, -- number
  tax_rates = {}, -- table
  type = "example_type", -- string
})
```


### LineItem

Create an instance: `local line_item = client:LineItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adjustable_quantity` | `any` |  |
| `amount` | `number` | The line item amount in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_discount` | `number` | Total discount amount applied. |
| `amount_subtotal` | `number` | Total before any discounts or taxes are applied. |
| `amount_tax` | `number` | The amount of tax calculated for this line item, in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_total` | `number` | Total after discounts and taxes. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discounts` | `table` | The discounts applied to the line item. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `performance_location` | `string` | Indicates the line item represents a performance where the venue location might determine the tax, not the customer address. |
| `price` | `number` | The price used to generate the line item. |
| `product` | `string` | The ID of an existing [Product](https://docs.stripe.com/api/products/object). |
| `quantity` | `number` | The number of units of the item being purchased. |
| `reference` | `string` | A custom identifier for this line item. |
| `reversal` | `any` | If `type=reversal`, contains information about what was reversed. |
| `tax_behavior` | `string` | Specifies whether the `amount` includes taxes. |
| `tax_breakdown` | `table` | Detailed account of taxes relevant to this line item. |
| `tax_code` | `string` | The [tax code](https://docs.stripe.com/tax/tax-categories) ID used for this resource. |
| `taxes` | `table` | The taxes applied to the line item. |
| `type` | `string` | If `reversal`, this line item reverses an earlier transaction. |

#### Example: List

```lua
local line_items, err = client:LineItem():list()
```


### LinkedAccount

Create an instance: `local linked_account = client:LinkedAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_holder` | `any` | The account holder that this account belongs to. |
| `account_numbers` | `table` | Details about the account numbers. |
| `balance` | `any` | The most recent information about the account's balance. |
| `balance_refresh` | `any` | The state of the most recent attempt to refresh the account balance. |
| `category` | `string` | The type of the account. |
| `created` | `number` | Time at which the object was created. |
| `display_name` | `string` | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `id` | `string` | Unique identifier for the object. |
| `institution_name` | `string` | The name of the institution that holds this account. |
| `last4` | `string` | The last 4 digits of the account number. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `ownership` | `any` | The most recent information about the account's owners. |
| `ownership_refresh` | `any` | The state of the most recent attempt to refresh the account owners. |
| `permissions` | `table` | The list of permissions granted by this account. |
| `status` | `string` | The status of the link to the account. |
| `status_details` | `table` |  |
| `subcategory` | `string` | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `table` | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `table` | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `transaction_refresh` | `any` | The state of the most recent attempt to refresh the account transactions. |

#### Example: List

```lua
local linked_accounts, err = client:LinkedAccount():list()
```


### LinkedAccountOwner

Create an instance: `local linked_account_owner = client:LinkedAccountOwner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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
| `refreshed_at` | `number` | The timestamp of the refresh that updated this owner. |

#### Example: List

```lua
local linked_account_owners, err = client:LinkedAccountOwner():list()
```


### Location

Create an instance: `local location = client:Location(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `table` |  |
| `address_kana` | `table` |  |
| `address_kanji` | `table` |  |
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
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `phone` | `string` | The phone number of the location. |
| `postal_code` | `string` | ZIP or postal code. |
| `state` | `string` | State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)). |
| `type` | `string` | The type of tax location to be defined. |

#### Example: Load

```lua
local location, err = client:Location():load({ id = "location_id" })
```

#### Example: List

```lua
local locations, err = client:Location():list()
```

#### Example: Create

```lua
local location, err = client:Location():create({
  id = "example_id", -- string
  address = {}, -- table
  display_name = "example_display_name", -- string
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  type = "example_type", -- string
})
```


### LoginLink

Create an instance: `local login_link = client:LoginLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `object` | `string` | String representing the object's type. |
| `url` | `string` | The URL for the login link. |

#### Example: Create

```lua
local login_link, err = client:LoginLink():create({
  account_id = "example_account_id", -- string
  created = 1, -- number
  object = "example_object", -- string
  url = "example_url", -- string
})
```


### Mandate

Create an instance: `local mandate = client:Mandate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_acceptance` | `table` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `multi_use` | `table` |  |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `string` | The account (if any) that the mandate is intended for. |
| `payment_method` | `any` | ID of the payment method associated with this mandate. |
| `payment_method_details` | `table` |  |
| `single_use` | `table` |  |
| `status` | `string` | The mandate status indicates whether or not you can use it to initiate a payment. |
| `type` | `string` | The type of the mandate. |

#### Example: Load

```lua
local mandate, err = client:Mandate():load({ id = "mandate_id" })
```


### Meter

Create an instance: `local meter = client:Meter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `customer_mapping` | `table` |  |
| `default_aggregation` | `table` |  |
| `display_name` | `string` | The meter's name. |
| `event_name` | `string` | The name of the meter event to record usage for. |
| `event_time_window` | `string` | The time window which meter events have been pre-aggregated for, if any. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | The meter's status. |
| `status_transitions` | `table` |  |
| `updated` | `number` | Time at which the object was last updated. |
| `value_settings` | `table` |  |

#### Example: Load

```lua
local meter, err = client:Meter():load({ id = "meter_id" })
```

#### Example: List

```lua
local meters, err = client:Meter():list()
```

#### Example: Create

```lua
local meter, err = client:Meter():create({
  id = "example_id", -- string
  created = 1, -- number
  customer_mapping = {}, -- table
  default_aggregation = {}, -- table
  display_name = "example_display_name", -- string
  event_name = "example_event_name", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  status = "example_status", -- string
  status_transitions = {}, -- table
  updated = 1, -- number
  value_settings = {}, -- table
})
```


### MeterEvent

Create an instance: `local meter_event = client:MeterEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local meter_event, err = client:MeterEvent():create({
})
```


### MeterEventAdjustment

Create an instance: `local meter_event_adjustment = client:MeterEventAdjustment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local meter_event_adjustment, err = client:MeterEventAdjustment():create({
})
```


### MeterEventSummary

Create an instance: `local meter_event_summary = client:MeterEventSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aggregated_value` | `number` | Aggregated value of all the events within `start_time` (inclusive) and `end_time` (inclusive). |
| `end_time` | `number` | End timestamp for this event summary (exclusive). |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `meter` | `string` | The meter associated with this event summary. |
| `object` | `string` | String representing the object's type. |
| `start_time` | `number` | Start timestamp for this event summary (inclusive). |

#### Example: List

```lua
local meter_event_summarys, err = client:MeterEventSummary():list()
```


### OnboardingLink

Create an instance: `local onboarding_link = client:OnboardingLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apple_terms_and_conditions` | `any` | The options associated with the Apple Terms and Conditions link type. |

#### Example: Create

```lua
local onboarding_link, err = client:OnboardingLink():create({
})
```


### Order

Create an instance: `local order = client:Order(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount_fees` | `number` | Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit. |
| `amount_subtotal` | `number` | Total amount of the carbon removal in the currency's smallest unit. |
| `amount_total` | `number` | Total amount of the order including fees in the currency's smallest unit. |
| `beneficiary` | `table` |  |
| `canceled_at` | `number` | Time at which the order was canceled. |
| `cancellation_reason` | `string` | Reason for the cancellation of this order. |
| `certificate` | `string` | For delivered orders, a URL to a delivery certificate for the order. |
| `confirmed_at` | `number` | Time at which the order was confirmed. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order. |
| `delayed_at` | `number` | Time at which the order's expected_delivery_year was delayed. |
| `delivered_at` | `number` | Time at which the order was delivered. |
| `delivery_details` | `table` | Details about the delivery of carbon removal for this order. |
| `expected_delivery_year` | `number` | The year this order is expected to be delivered. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons` | `string` | Quantity of carbon removal that is included in this order. |
| `object` | `string` | String representing the object's type. |
| `product` | `any` | Unique ID for the Climate `Product` this order is purchasing. |
| `product_substituted_at` | `number` | Time at which the order's product was substituted for a different product. |
| `status` | `string` | The current status of this order. |

#### Example: Load

```lua
local order, err = client:Order():load({ id = "order_id" })
```

#### Example: List

```lua
local orders, err = client:Order():list()
```

#### Example: Create

```lua
local order, err = client:Order():create({
  id = "example_id", -- string
  amount_fees = 1, -- number
  amount_subtotal = 1, -- number
  amount_total = 1, -- number
  beneficiary = {}, -- table
  created = 1, -- number
  currency = "example_currency", -- string
  delivery_details = {}, -- table
  expected_delivery_year = 1, -- number
  livemode = true, -- boolean
  metadata = {}, -- table
  metric_tons = "example_metric_tons", -- string
  object = "example_object", -- string
  product = "example_product", -- any
  status = "example_status", -- string
})
```


### OutboundPayment

Create an instance: `local outbound_payment = client:OutboundPayment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Amount (in cents) transferred. |
| `cancelable` | `boolean` | Returns `true` if the object can be canceled, and `false` otherwise. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | ID of the [customer](https://docs.stripe.com/api/customers) to whom an OutboundPayment is sent. |
| `description` | `string` | An arbitrary string attached to the object. |
| `destination_payment_method` | `string` | The PaymentMethod via which an OutboundPayment is sent. |
| `destination_payment_method_details` | `any` | Details about the PaymentMethod for an OutboundPayment. |
| `end_user_details` | `any` | Details about the end user. |
| `expected_arrival_date` | `number` | The date when funds are expected to arrive in the destination account. |
| `financial_account` | `string` | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `returned_details` | `any` | Details about a returned OutboundPayment. |
| `statement_descriptor` | `string` | The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer). |
| `status` | `string` | Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. |
| `status_transitions` | `table` |  |
| `tracking_details` | `any` | Details about network-specific tracking information if available. |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```lua
local outbound_payment, err = client:OutboundPayment():load({ id = "outbound_payment_id" })
```

#### Example: List

```lua
local outbound_payments, err = client:OutboundPayment():list()
```

#### Example: Create

```lua
local outbound_payment, err = client:OutboundPayment():create({
  id = "example_id", -- string
  amount = 1, -- number
  cancelable = true, -- boolean
  created = 1, -- number
  currency = "example_currency", -- string
  expected_arrival_date = 1, -- number
  financial_account = "example_financial_account", -- string
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  statement_descriptor = "example_statement_descriptor", -- string
  status = "example_status", -- string
  status_transitions = {}, -- table
  transaction = "example_transaction", -- any
})
```


### OutboundTransfer

Create an instance: `local outbound_transfer = client:OutboundTransfer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Amount (in cents) transferred. |
| `cancelable` | `boolean` | Returns `true` if the object can be canceled, and `false` otherwise. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `destination_payment_method` | `string` | The PaymentMethod used as the payment instrument for an OutboundTransfer. |
| `destination_payment_method_details` | `table` |  |
| `expected_arrival_date` | `number` | The date when funds are expected to arrive in the destination account. |
| `financial_account` | `string` | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `returned_details` | `any` | Details about a returned OutboundTransfer. |
| `statement_descriptor` | `string` | Information about the OutboundTransfer to be sent to the recipient account. |
| `status` | `string` | Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. |
| `status_transitions` | `table` |  |
| `tracking_details` | `any` | Details about network-specific tracking information if available. |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```lua
local outbound_transfer, err = client:OutboundTransfer():load({ id = "outbound_transfer_id" })
```

#### Example: List

```lua
local outbound_transfers, err = client:OutboundTransfer():list()
```

#### Example: Create

```lua
local outbound_transfer, err = client:OutboundTransfer():create({
  id = "example_id", -- string
  amount = 1, -- number
  cancelable = true, -- boolean
  created = 1, -- number
  currency = "example_currency", -- string
  destination_payment_method_details = {}, -- table
  expected_arrival_date = 1, -- number
  financial_account = "example_financial_account", -- string
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  statement_descriptor = "example_statement_descriptor", -- string
  status = "example_status", -- string
  status_transitions = {}, -- table
  transaction = "example_transaction", -- any
})
```


### PaymentAttemptRecord

Create an instance: `local payment_attempt_record = client:PaymentAttemptRecord(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `string` | ID of the Connect application that created the PaymentAttemptRecord. |
| `created` | `number` | Time at which the object was created. |
| `customer_details` | `any` | Customer information for this payment. |
| `customer_presence` | `string` | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `string` | An arbitrary string attached to the object. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `payment_method_details` | `any` | Information about the Payment Method debited for this payment. |
| `payment_record` | `string` | ID of the Payment Record this Payment Attempt Record belongs to. |
| `processor_details` | `table` | Processor information associated with this payment. |
| `reported_by` | `string` | Indicates who reported the payment. |
| `shipping_details` | `any` | Shipping information for this payment. |

#### Example: Load

```lua
local payment_attempt_record, err = client:PaymentAttemptRecord():load({ id = "payment_attempt_record_id" })
```

#### Example: List

```lua
local payment_attempt_records, err = client:PaymentAttemptRecord():list()
```


### PaymentEvaluation

Create an instance: `local payment_evaluation = client:PaymentEvaluation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_device_metadata_details` | `table` | Client device metadata attached to this payment evaluation. |
| `created_at` | `number` | Time at which the object was created. |
| `customer_details` | `table` | Customer details attached to this payment evaluation. |
| `events` | `table` | Event information associated with the payment evaluation, such as refunds, dispute, early fraud warnings, or user interventions. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `outcome` | `any` | Indicates the final outcome for the payment evaluation. |
| `payment_details` | `table` | Payment details attached to this payment evaluation. |
| `recommended_action` | `string` | Recommended action based on the score of the `fraudulent_payment` signal. |
| `signals` | `table` | Collection of signals for this payment evaluation. |

#### Example: Create

```lua
local payment_evaluation, err = client:PaymentEvaluation():create({
  client_device_metadata_details = {}, -- table
  created_at = 1, -- number
  events = {}, -- table
  id = "example_id", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  payment_details = {}, -- table
  recommended_action = "example_recommended_action", -- string
  signals = {}, -- table
})
```


### PaymentIntent

Create an instance: `local payment_intent = client:PaymentIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_payment_method_types` | `table` | The list of payment method types allowed for use with this payment. |
| `amount` | `number` | Amount intended to be collected by this PaymentIntent. |
| `amount_capturable` | `number` | Amount that can be captured from this PaymentIntent. |
| `amount_details` | `any` |  |
| `amount_received` | `number` | Amount that this PaymentIntent collects. |
| `application` | `any` | ID of the Connect application that created the PaymentIntent. |
| `application_fee_amount` | `number` | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `automatic_payment_methods` | `any` | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `canceled_at` | `number` | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_reason` | `string` | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | `string` | Controls when the funds will be captured from the customer's account. |
| `client_secret` | `string` | The client secret of this PaymentIntent. |
| `confirmation_method` | `string` | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | ID of the Customer this PaymentIntent belongs to, if one exists. |
| `customer_account` | `string` | ID of the Account representing the customer that this PaymentIntent belongs to, if one exists. |
| `description` | `string` | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | `table` | The list of payment method types to exclude from use with this payment. |
| `hooks` | `table` |  |
| `id` | `string` | Unique identifier for the object. |
| `last_payment_error` | `any` | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `any` | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | Settings for Managed Payments. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `any` | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | You can specify the settlement merchant as the connected account using the `on_behalf_of` attribute on the charge. |
| `payment_details` | `table` |  |
| `payment_method` | `any` | ID of the payment method used in this PaymentIntent. |
| `payment_method_configuration_details` | `any` | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_options` | `any` | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `table` | The list of payment method types (e.g. |
| `payment_record` | `any` | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `presentment_details` | `table` |  |
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

```lua
local payment_intent, err = client:PaymentIntent():load({ id = "payment_intent_id" })
```

#### Example: List

```lua
local payment_intents, err = client:PaymentIntent():list()
```

#### Example: Create

```lua
local payment_intent, err = client:PaymentIntent():create({
  id = "example_id", -- string
  created = 1, -- number
  livemode = true, -- boolean
  object = "example_object", -- string
  presentment_details = {}, -- table
  status = "example_status", -- string
})
```


### PaymentIntentAmountDetailsLineItem

Create an instance: `local payment_intent_amount_details_line_item = client:PaymentIntentAmountDetailsLineItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `discount_amount` | `number` | The discount applied on this line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `id` | `string` | Unique identifier for the object. |
| `object` | `string` | String representing the object's type. |
| `payment_method_options` | `any` | Payment method-specific information for line items. |
| `product_code` | `string` | The product code of the line item, such as an SKU. |
| `product_name` | `string` | The product name of the line item. |
| `quantity` | `number` | The quantity of items. |
| `tax` | `any` | Contains information about the tax on the item. |
| `unit_cost` | `number` | The unit cost of the line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `unit_of_measure` | `string` | A unit of measure for the line item, such as gallons, feet, meters, etc. |

#### Example: List

```lua
local payment_intent_amount_details_line_items, err = client:PaymentIntentAmountDetailsLineItem():list()
```


### PaymentLink

Create an instance: `local payment_link = client:PaymentLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether the payment link's `url` is active. |
| `after_completion` | `table` |  |
| `allow_promotion_codes` | `boolean` | Whether user redeemable promotion codes are enabled. |
| `application` | `any` | The ID of the Connect application that created the Payment Link. |
| `application_fee_amount` | `number` | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `number` | This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. |
| `automatic_tax` | `table` |  |
| `billing_address_collection` | `string` | Configuration for collecting the customer's billing address. |
| `consent_collection` | `any` | When set, provides configuration to gather active consent from customers. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `table` | Collect additional information from your customer using custom fields. |
| `custom_text` | `table` |  |
| `customer_creation` | `string` | Configuration for Customer creation during checkout. |
| `id` | `string` | Unique identifier for the object. |
| `inactive_message` | `string` | The custom message to be displayed to a customer when a payment link is no longer active. |
| `invoice_creation` | `any` | Configuration for creating invoice for payment mode payment links. |
| `line_items` | `table` | The line items representing what is being sold. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | Settings for Managed Payments for this Payment Link and resulting [CheckoutSessions](/api/checkout/sessions/object), [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/ob… |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name_collection` | `table` |  |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account on behalf of which to charge. |
| `optional_items` | `table` | The optional items presented to the customer at checkout. |
| `payment_intent_data` | `any` | Indicates the parameters to be passed to PaymentIntent creation during checkout. |
| `payment_method_collection` | `string` | Configuration for collecting a payment method during checkout. |
| `payment_method_options` | `any` | Payment-method-specific configuration. |
| `payment_method_types` | `table` | The list of payment method types that customers can use. |
| `phone_number_collection` | `table` |  |
| `restrictions` | `any` | Settings that restrict the usage of a payment link. |
| `shipping_address_collection` | `any` | Configuration for collecting the customer's shipping address. |
| `shipping_options` | `table` | The shipping rate options applied to the session. |
| `submit_type` | `string` | Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button. |
| `subscription_data` | `any` | When creating a subscription, the specified configuration data will be used. |
| `tax_id_collection` | `table` |  |
| `transfer_data` | `any` | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to. |
| `url` | `string` | The public URL that can be shared with customers. |

#### Example: Load

```lua
local payment_link, err = client:PaymentLink():load({ id = "payment_link_id" })
```

#### Example: List

```lua
local payment_links, err = client:PaymentLink():list()
```

#### Example: Create

```lua
local payment_link, err = client:PaymentLink():create({
  id = "example_id", -- string
  active = true, -- boolean
  after_completion = {}, -- table
  allow_promotion_codes = true, -- boolean
  automatic_tax = {}, -- table
  billing_address_collection = "example_billing_address_collection", -- string
  currency = "example_currency", -- string
  custom_fields = {}, -- table
  custom_text = {}, -- table
  customer_creation = "example_customer_creation", -- string
  line_items = {}, -- table
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  payment_method_collection = "example_payment_method_collection", -- string
  phone_number_collection = {}, -- table
  shipping_options = {}, -- table
  submit_type = "example_submit_type", -- string
  tax_id_collection = {}, -- table
  url = "example_url", -- string
})
```


### PaymentMethod

Create an instance: `local payment_method = client:PaymentMethod(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acss_debit` | `table` |  |
| `affirm` | `table` |  |
| `afterpay_clearpay` | `table` |  |
| `alipay` | `table` |  |
| `allow_redisplay` | `boolean` | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `alma` | `table` |  |
| `amazon_pay` | `table` |  |
| `au_becs_debit` | `table` |  |
| `bacs_debit` | `table` |  |
| `bancontact` | `table` |  |
| `billie` | `table` |  |
| `billing_details` | `table` |  |
| `bizum` | `table` |  |
| `blik` | `table` |  |
| `boleto` | `table` |  |
| `card` | `table` |  |
| `card_present` | `table` |  |
| `cashapp` | `table` |  |
| `created` | `number` | Time at which the object was created. |
| `crypto` | `table` |  |
| `custom` | `table` |  |
| `customer` | `any` | The ID of the Customer to which this PaymentMethod is saved. |
| `customer_account` | `string` |  |
| `customer_balance` | `table` |  |
| `eps` | `table` |  |
| `fpx` | `table` |  |
| `giropay` | `table` |  |
| `grabpay` | `table` |  |
| `id` | `string` | Unique identifier for the object. |
| `ideal` | `table` |  |
| `interac_present` | `table` |  |
| `kakao_pay` | `table` |  |
| `klarna` | `table` |  |
| `konbini` | `table` |  |
| `kr_card` | `table` |  |
| `link` | `table` |  |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `mb_way` | `table` |  |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mobilepay` | `table` |  |
| `multibanco` | `table` |  |
| `naver_pay` | `table` |  |
| `nz_bank_account` | `table` |  |
| `object` | `string` | String representing the object's type. |
| `oxxo` | `table` |  |
| `p24` | `table` |  |
| `pay_by_bank` | `table` |  |
| `payco` | `table` |  |
| `paynow` | `table` |  |
| `paypal` | `table` |  |
| `paypay` | `table` |  |
| `payto` | `table` |  |
| `pix` | `table` |  |
| `promptpay` | `table` |  |
| `radar_options` | `table` | Options to configure Radar. |
| `revolut_pay` | `table` |  |
| `samsung_pay` | `table` |  |
| `satispay` | `table` |  |
| `scalapay` | `table` |  |
| `sepa_debit` | `table` |  |
| `sequra` | `table` |  |
| `sofort` | `table` |  |
| `sunbit` | `table` |  |
| `swish` | `table` |  |
| `twint` | `table` |  |
| `type` | `string` | The type of the PaymentMethod. |
| `upi` | `table` |  |
| `us_bank_account` | `table` |  |
| `wechat_pay` | `table` |  |
| `zip` | `table` |  |

#### Example: Load

```lua
local payment_method, err = client:PaymentMethod():load({ id = "payment_method_id" })
```

#### Example: List

```lua
local payment_methods, err = client:PaymentMethod():list()
```

#### Example: Create

```lua
local payment_method, err = client:PaymentMethod():create({
  id = "example_id", -- string
  billing_details = {}, -- table
  boleto = {}, -- table
  card = {}, -- table
  card_present = {}, -- table
  created = 1, -- number
  custom = {}, -- table
  fpx = {}, -- table
  interac_present = {}, -- table
  livemode = true, -- boolean
  naver_pay = {}, -- table
  nz_bank_account = {}, -- table
  object = "example_object", -- string
  type = "example_type", -- string
})
```


### PaymentMethodConfiguration

Create an instance: `local payment_method_configuration = client:PaymentMethodConfiguration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acss_debit` | `table` |  |
| `active` | `boolean` | Whether the configuration can be used for new payments. |
| `affirm` | `table` |  |
| `afterpay_clearpay` | `table` |  |
| `alipay` | `table` |  |
| `alma` | `table` |  |
| `amazon_pay` | `table` |  |
| `apple_pay` | `table` |  |
| `application` | `string` | For child configs, the Connect application associated with the configuration. |
| `au_becs_debit` | `table` |  |
| `bacs_debit` | `table` |  |
| `bancontact` | `table` |  |
| `billie` | `table` |  |
| `bizum` | `table` |  |
| `blik` | `table` |  |
| `boleto` | `table` |  |
| `card` | `table` |  |
| `cartes_bancaires` | `table` |  |
| `cashapp` | `table` |  |
| `crypto` | `table` |  |
| `customer_balance` | `table` |  |
| `eps` | `table` |  |
| `fpx` | `table` |  |
| `giropay` | `table` |  |
| `google_pay` | `table` |  |
| `grabpay` | `table` |  |
| `id` | `string` | Unique identifier for the object. |
| `ideal` | `table` |  |
| `is_default` | `boolean` | The default configuration is used whenever a payment method configuration is not specified. |
| `jcb` | `table` |  |
| `kakao_pay` | `table` |  |
| `klarna` | `table` |  |
| `konbini` | `table` |  |
| `kr_card` | `table` |  |
| `link` | `table` |  |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `mb_way` | `table` |  |
| `mobilepay` | `table` |  |
| `multibanco` | `table` |  |
| `name` | `string` | The configuration's name. |
| `naver_pay` | `table` |  |
| `nz_bank_account` | `table` |  |
| `object` | `string` | String representing the object's type. |
| `oxxo` | `table` |  |
| `p24` | `table` |  |
| `parent` | `string` | For child configs, the configuration's parent configuration. |
| `pay_by_bank` | `table` |  |
| `payco` | `table` |  |
| `paynow` | `table` |  |
| `paypal` | `table` |  |
| `paypay` | `table` |  |
| `payto` | `table` |  |
| `pix` | `table` |  |
| `promptpay` | `table` |  |
| `revolut_pay` | `table` |  |
| `samsung_pay` | `table` |  |
| `satispay` | `table` |  |
| `scalapay` | `table` |  |
| `sepa_debit` | `table` |  |
| `sequra` | `table` |  |
| `sofort` | `table` |  |
| `sunbit` | `table` |  |
| `swish` | `table` |  |
| `twint` | `table` |  |
| `upi` | `table` |  |
| `us_bank_account` | `table` |  |
| `wechat_pay` | `table` |  |
| `zip` | `table` |  |

#### Example: Load

```lua
local payment_method_configuration, err = client:PaymentMethodConfiguration():load({ id = "payment_method_configuration_id" })
```

#### Example: List

```lua
local payment_method_configurations, err = client:PaymentMethodConfiguration():list()
```

#### Example: Create

```lua
local payment_method_configuration, err = client:PaymentMethodConfiguration():create({
  id = "example_id", -- string
  acss_debit = {}, -- table
  active = true, -- boolean
  affirm = {}, -- table
  afterpay_clearpay = {}, -- table
  alipay = {}, -- table
  alma = {}, -- table
  amazon_pay = {}, -- table
  apple_pay = {}, -- table
  au_becs_debit = {}, -- table
  bacs_debit = {}, -- table
  bancontact = {}, -- table
  billie = {}, -- table
  bizum = {}, -- table
  blik = {}, -- table
  boleto = {}, -- table
  card = {}, -- table
  cartes_bancaires = {}, -- table
  cashapp = {}, -- table
  crypto = {}, -- table
  customer_balance = {}, -- table
  eps = {}, -- table
  fpx = {}, -- table
  giropay = {}, -- table
  google_pay = {}, -- table
  grabpay = {}, -- table
  ideal = {}, -- table
  is_default = true, -- boolean
  jcb = {}, -- table
  kakao_pay = {}, -- table
  klarna = {}, -- table
  konbini = {}, -- table
  kr_card = {}, -- table
  link = {}, -- table
  livemode = true, -- boolean
  mb_way = {}, -- table
  mobilepay = {}, -- table
  multibanco = {}, -- table
  name = "example_name", -- string
  naver_pay = {}, -- table
  nz_bank_account = {}, -- table
  object = "example_object", -- string
  oxxo = {}, -- table
  p24 = {}, -- table
  pay_by_bank = {}, -- table
  payco = {}, -- table
  paynow = {}, -- table
  paypal = {}, -- table
  paypay = {}, -- table
  payto = {}, -- table
  pix = {}, -- table
  promptpay = {}, -- table
  revolut_pay = {}, -- table
  samsung_pay = {}, -- table
  satispay = {}, -- table
  scalapay = {}, -- table
  sepa_debit = {}, -- table
  sequra = {}, -- table
  sofort = {}, -- table
  sunbit = {}, -- table
  swish = {}, -- table
  twint = {}, -- table
  upi = {}, -- table
  us_bank_account = {}, -- table
  wechat_pay = {}, -- table
  zip = {}, -- table
})
```


### PaymentMethodDomain

Create an instance: `local payment_method_domain = client:PaymentMethodDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amazon_pay` | `table` | Indicates the status of a specific payment method on a payment method domain. |
| `apple_pay` | `table` | Indicates the status of a specific payment method on a payment method domain. |
| `created` | `number` | Time at which the object was created. |
| `domain_name` | `string` | The domain name that this payment method domain object represents. |
| `enabled` | `boolean` | Whether this payment method domain is enabled. |
| `google_pay` | `table` | Indicates the status of a specific payment method on a payment method domain. |
| `id` | `string` | Unique identifier for the object. |
| `klarna` | `table` | Indicates the status of a specific payment method on a payment method domain. |
| `link` | `table` | Indicates the status of a specific payment method on a payment method domain. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `paypal` | `table` | Indicates the status of a specific payment method on a payment method domain. |

#### Example: Load

```lua
local payment_method_domain, err = client:PaymentMethodDomain():load({ id = "payment_method_domain_id" })
```

#### Example: List

```lua
local payment_method_domains, err = client:PaymentMethodDomain():list()
```

#### Example: Create

```lua
local payment_method_domain, err = client:PaymentMethodDomain():create({
  id = "example_id", -- string
  amazon_pay = {}, -- table
  apple_pay = {}, -- table
  created = 1, -- number
  domain_name = "example_domain_name", -- string
  enabled = true, -- boolean
  google_pay = {}, -- table
  klarna = {}, -- table
  link = {}, -- table
  livemode = true, -- boolean
  object = "example_object", -- string
  paypal = {}, -- table
})
```


### PaymentRecord

Create an instance: `local payment_record = client:PaymentRecord(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `table` | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `string` | ID of the Connect application that created the PaymentRecord. |
| `created` | `number` | Time at which the object was created. |
| `customer_details` | `any` | Customer information for this payment. |
| `customer_presence` | `string` | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `string` | An arbitrary string attached to the object. |
| `id` | `string` | Unique identifier for the object. |
| `latest_payment_attempt_record` | `string` | ID of the latest Payment Attempt Record attached to this Payment Record. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `payment_method_details` | `any` | Information about the Payment Method debited for this payment. |
| `processor_details` | `table` | Processor information associated with this payment. |
| `reported_by` | `string` | Indicates who reported the payment. |
| `shipping_details` | `any` | Shipping information for this payment. |

#### Example: Load

```lua
local payment_record, err = client:PaymentRecord():load({ id = "payment_record_id" })
```

#### Example: List

```lua
local payment_records, err = client:PaymentRecord():list()
```

#### Example: Create

```lua
local payment_record, err = client:PaymentRecord():create({
  amount = {}, -- table
  amount_authorized = {}, -- table
  amount_canceled = {}, -- table
  amount_failed = {}, -- table
  amount_guaranteed = {}, -- table
  amount_refunded = {}, -- table
  amount_requested = {}, -- table
  created = 1, -- number
  id = "example_id", -- string
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  processor_details = {}, -- table
  reported_by = "example_reported_by", -- string
})
```


### Payout

Create an instance: `local payout = client:Payout(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | The amount (in cents (or local equivalent)) that transfers to your bank account or debit card. |
| `application_fee` | `any` | The application fee (if any) for the payout. |
| `application_fee_amount` | `number` | The amount of the application fee (if any) requested for the payout. |
| `arrival_date` | `number` | Date that you can expect the payout to arrive in the bank. |
| `automatic` | `boolean` | Returns `true` if the payout is created by an [automated payout schedule](https://docs.stripe.com/payouts#payout-schedule) and `false` if it's [requested manually](https://stripe.com/docs/payouts#manual-payouts). |
| `balance_transaction` | `any` | ID of the balance transaction that describes the impact of this payout on your account balance. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `destination` | `any` | ID of the bank account or card the payout is sent to. |
| `failure_balance_transaction` | `any` | If the payout fails or cancels, this is the ID of the balance transaction that reverses the initial balance transaction and returns the funds from the failed payout back in your balance. |
| `failure_code` | `string` | Error code that provides a reason for a payout failure, if available. |
| `failure_message` | `string` | Message that provides the reason for a payout failure, if available. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
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

```lua
local payout, err = client:Payout():load({ id = "payout_id" })
```

#### Example: List

```lua
local payouts, err = client:Payout():list()
```

#### Example: Create

```lua
local payout, err = client:Payout():create({
  id = "example_id", -- string
  amount = 1, -- number
  arrival_date = 1, -- number
  automatic = true, -- boolean
  created = 1, -- number
  currency = "example_currency", -- string
  livemode = true, -- boolean
  method = "example_method", -- string
  object = "example_object", -- string
  reconciliation_status = "example_reconciliation_status", -- string
  source_type = "example_source_type", -- string
  status = "example_status", -- string
  type = "example_type", -- string
})
```


### Person

Create an instance: `local person = client:Person(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | The account the person is associated with. |
| `additional_tos_acceptances` | `table` |  |
| `address` | `table` |  |
| `address_kana` | `any` |  |
| `address_kanji` | `any` |  |
| `created` | `number` | Time at which the object was created. |
| `dob` | `table` |  |
| `email` | `string` | The person's email address. |
| `first_name` | `string` | The person's first name. |
| `first_name_kana` | `string` | The Kana variation of the person's first name (Japan only). |
| `first_name_kanji` | `string` | The Kanji variation of the person's first name (Japan only). |
| `full_name_aliases` | `table` | A list of alternate names or aliases that the person is known by. |
| `future_requirements` | `any` |  |
| `gender` | `string` | The person's gender. |
| `id` | `string` | Unique identifier for the object. |
| `id_number_provided` | `boolean` | Whether the person's `id_number` was provided. |
| `id_number_secondary_provided` | `boolean` | Whether the person's `id_number_secondary` was provided. |
| `last_name` | `string` | The person's last name. |
| `last_name_kana` | `string` | The Kana variation of the person's last name (Japan only). |
| `last_name_kanji` | `string` | The Kanji variation of the person's last name (Japan only). |
| `maiden_name` | `string` | The person's maiden name. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nationality` | `string` | The country where the person is a national. |
| `object` | `string` | String representing the object's type. |
| `phone` | `string` | The person's phone number. |
| `political_exposure` | `string` | Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction. |
| `registered_address` | `table` |  |
| `relationship` | `table` |  |
| `requirements` | `any` |  |
| `ssn_last_4_provided` | `boolean` | Whether the last four digits of the person's Social Security number have been provided (U.S. |
| `us_cfpb_data` | `any` | Demographic data related to the person. |
| `verification` | `table` |  |

#### Example: Load

```lua
local person, err = client:Person():load({ id = "person_id", account_id = "account_id" })
```

#### Example: List

```lua
local persons, err = client:Person():list()
```

#### Example: Create

```lua
local person, err = client:Person():create({
  account_id = "example_account_id", -- string
  account = "example_account", -- string
  created = 1, -- number
  object = "example_object", -- string
  verification = {}, -- table
})
```


### PersonalizationDesign

Create an instance: `local personalization_design = client:PersonalizationDesign(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `card_logo` | `any` | The file for the card logo to use with physical bundles that support card logos. |
| `carrier_text` | `any` | Hash containing carrier text, for use with physical bundles that support carrier text. |
| `created` | `number` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | A lookup key used to retrieve personalization designs dynamically from a static string. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Friendly display name. |
| `object` | `string` | String representing the object's type. |
| `physical_bundle` | `any` | The physical bundle object belonging to this personalization design. |
| `preferences` | `table` |  |
| `rejection_reasons` | `table` |  |
| `status` | `string` | Whether this personalization design can be used to create cards. |

#### Example: Load

```lua
local personalization_design, err = client:PersonalizationDesign():load({ id = "personalization_design_id" })
```

#### Example: List

```lua
local personalization_designs, err = client:PersonalizationDesign():list()
```

#### Example: Create

```lua
local personalization_design, err = client:PersonalizationDesign():create({
  id = "example_id", -- string
  created = 1, -- number
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  physical_bundle = "example_physical_bundle", -- any
  preferences = {}, -- table
  rejection_reasons = {}, -- table
  status = "example_status", -- string
})
```


### PhysicalBundle

Create an instance: `local physical_bundle = client:PhysicalBundle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `card_logo` | `string` | The policy for how to use card logo images in a card design with this physical bundle. |
| `carrier_text` | `string` | The policy for how to use carrier letter text in a card design with this physical bundle. |
| `features` | `table` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Friendly display name. |
| `object` | `string` | String representing the object's type. |
| `second_line` | `string` | The policy for how to use a second line on a card with this physical bundle. |
| `status` | `string` | Whether this physical bundle can be used to create cards. |
| `type` | `string` | Whether this physical bundle is a standard Stripe offering or custom-made for you. |

#### Example: Load

```lua
local physical_bundle, err = client:PhysicalBundle():load({ id = "physical_bundle_id" })
```

#### Example: List

```lua
local physical_bundles, err = client:PhysicalBundle():list()
```


### Plan

Create an instance: `local plan = client:Plan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether the plan can be used for new purchases. |
| `amount` | `number` | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `amount_decimal` | `string` | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `billing_scheme` | `string` | Describes how to compute the price per period. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `id` | `string` | Unique identifier for the object. |
| `interval` | `string` | The frequency at which a subscription is billed. |
| `interval_count` | `number` | The number of intervals (specified in the `interval` attribute) between subscription billings. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `meter` | `string` | The meter tracking the usage of a metered price |
| `nickname` | `string` | A brief description of the plan, hidden from customers. |
| `object` | `string` | String representing the object's type. |
| `product` | `any` | The product whose pricing this plan determines. |
| `tiers` | `table` | Each element represents a pricing tier. |
| `tiers_mode` | `string` | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_usage` | `any` | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_period_days` | `number` | Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://docs.stripe.com/api#create_subscription-trial_from_plan). |
| `usage_type` | `string` | Configures how the quantity per period should be determined. |

#### Example: Load

```lua
local plan, err = client:Plan():load({ id = "plan_id" })
```

#### Example: List

```lua
local plans, err = client:Plan():list()
```

#### Example: Create

```lua
local plan, err = client:Plan():create({
  id = "example_id", -- string
  active = true, -- boolean
  billing_scheme = "example_billing_scheme", -- string
  created = 1, -- number
  currency = "example_currency", -- string
  interval = "example_interval", -- string
  interval_count = 1, -- number
  livemode = true, -- boolean
  object = "example_object", -- string
  usage_type = "example_usage_type", -- string
})
```


### Price

Create an instance: `local price = client:Price(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether the price can be used for new purchases. |
| `billing_scheme` | `string` | Describes how to compute the price per period. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | `table` | Prices defined in each available currency option. |
| `custom_unit_amount` | `any` | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | A lookup key used to retrieve prices dynamically from a static string. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | A brief description of the price, hidden from customers. |
| `object` | `string` | String representing the object's type. |
| `product` | `any` | The ID of the product this price is associated with. |
| `recurring` | `any` | The recurring components of a price such as `interval` and `usage_type`. |
| `tax_behavior` | `string` | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tiers` | `table` | Each element represents a pricing tier. |
| `tiers_mode` | `string` | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_quantity` | `any` | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `type` | `string` | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | `number` | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | `string` | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |

#### Example: Load

```lua
local price, err = client:Price():load({ id = "price_id" })
```

#### Example: List

```lua
local prices, err = client:Price():list()
```

#### Example: Create

```lua
local price, err = client:Price():create({
  id = "example_id", -- string
  active = true, -- boolean
  billing_scheme = "example_billing_scheme", -- string
  created = 1, -- number
  currency = "example_currency", -- string
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  product = "example_product", -- any
  type = "example_type", -- string
})
```


### Product

Create an instance: `local product = client:Product(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether the product is currently available for purchase. |
| `created` | `number` | Time at which the object was created. |
| `current_prices_per_metric_ton` | `table` | Current prices for a metric ton of carbon removal in a currency's smallest unit. |
| `default_price` | `any` | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `delivery_year` | `number` | The year in which the carbon removal is expected to be delivered. |
| `description` | `string` | The product's description, meant to be displayable to the customer. |
| `id` | `string` | Unique identifier for the object. |
| `images` | `table` | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `livemode` | `boolean` | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `marketing_features` | `table` | A list of up to 15 marketing features for this product. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons_available` | `string` | The quantity of metric tons available for reservation. |
| `name` | `string` | The Climate product's name. |
| `object` | `string` | String representing the object's type. |
| `package_dimensions` | `any` | The dimensions of this product for shipping purposes. |
| `shippable` | `boolean` | Whether this product is shipped (i.e., physical goods). |
| `statement_descriptor` | `string` | Extra information about a product which will appear on your customer's credit card statement. |
| `suppliers` | `table` | The carbon removal suppliers that fulfill orders for this Climate product. |
| `tax_code` | `any` | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `any` | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `unit_label` | `string` | A label that represents units of this product. |
| `updated` | `number` | Time at which the object was last updated. |
| `url` | `string` | A URL of a publicly-accessible webpage for this product. |

#### Example: Load

```lua
local product, err = client:Product():load({ id = "product_id" })
```

#### Example: List

```lua
local products, err = client:Product():list()
```

#### Example: Create

```lua
local product, err = client:Product():create({
  id = "example_id", -- string
  active = true, -- boolean
  created = 1, -- number
  current_prices_per_metric_ton = {}, -- table
  images = {}, -- table
  livemode = true, -- boolean
  marketing_features = {}, -- table
  metadata = {}, -- table
  metric_tons_available = "example_metric_tons_available", -- string
  name = "example_name", -- string
  object = "example_object", -- string
  suppliers = {}, -- table
  updated = 1, -- number
})
```


### ProductFeature

Create an instance: `local product_feature = client:ProductFeature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | A unique key you provide as your own system identifier. |
| `metadata` | `table` | Set of key-value pairs that you can attach to an object. |
| `name` | `string` | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `string` | String representing the object's type. |

#### Example: Load

```lua
local product_feature, err = client:ProductFeature():load({ id = "product_feature_id", product_id = "product_id" })
```

#### Example: Create

```lua
local product_feature, err = client:ProductFeature():create({
  id = "example_id", -- string
  active = true, -- boolean
  livemode = true, -- boolean
  lookup_key = "example_lookup_key", -- string
  metadata = {}, -- table
  name = "example_name", -- string
  object = "example_object", -- string
})
```


### PromotionCode

Create an instance: `local promotion_code = client:PromotionCode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether the promotion code is currently active. |
| `code` | `string` | The customer-facing code. |
| `created` | `number` | Time at which the object was created. |
| `customer` | `any` | The customer who can use this promotion code. |
| `customer_account` | `string` | The account representing the customer who can use this promotion code. |
| `expires_at` | `number` | Date at which the promotion code can no longer be redeemed. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | `number` | Maximum number of times this promotion code can be redeemed. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `promotion` | `table` |  |
| `restrictions` | `table` |  |
| `times_redeemed` | `number` | Number of times this promotion code has been used. |

#### Example: Load

```lua
local promotion_code, err = client:PromotionCode():load({ id = "promotion_code_id" })
```

#### Example: List

```lua
local promotion_codes, err = client:PromotionCode():list()
```

#### Example: Create

```lua
local promotion_code, err = client:PromotionCode():create({
  id = "example_id", -- string
  active = true, -- boolean
  code = "example_code", -- string
  created = 1, -- number
  livemode = true, -- boolean
  object = "example_object", -- string
  promotion = {}, -- table
  restrictions = {}, -- table
  times_redeemed = 1, -- number
})
```


### Quote

Create an instance: `local quote = client:Quote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount_subtotal` | `number` | Total before any discounts or taxes are applied. |
| `amount_total` | `number` | Total after discounts and taxes are applied. |
| `application` | `any` | ID of the Connect Application that created the quote. |
| `application_fee_amount` | `number` | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `number` | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `table` |  |
| `collection_method` | `string` | Either `charge_automatically`, or `send_invoice`. |
| `computed` | `table` |  |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | The customer who received this quote. |
| `customer_account` | `string` | The account representing the customer who received this quote. |
| `default_tax_rates` | `table` | The tax rates applied to this quote. |
| `description` | `string` | A description that will be displayed on the quote PDF. |
| `discounts` | `table` | The discounts applied to this quote. |
| `expires_at` | `number` | The date on which the quote will be canceled if in `open` or `draft` status. |
| `footer` | `string` | A footer that will be displayed on the quote PDF. |
| `from_quote` | `any` | Details of the quote that was cloned. |
| `header` | `string` | A header that will be displayed on the quote PDF. |
| `id` | `string` | Unique identifier for the object. |
| `invoice` | `any` | The invoice that was created from this quote. |
| `invoice_settings` | `table` |  |
| `line_items` | `table` | A list of items the customer is being quoted for. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `string` | A unique number that identifies this particular quote. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account on behalf of which to charge. |
| `status` | `string` | The status of the quote. |
| `status_transitions` | `table` |  |
| `subscription` | `any` | The subscription that was created or updated from this quote. |
| `subscription_data` | `table` |  |
| `subscription_schedule` | `any` | The subscription schedule that was created or updated from this quote. |
| `test_clock` | `any` | ID of the test clock this quote belongs to. |
| `total_details` | `table` |  |
| `transfer_data` | `any` | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices. |

#### Example: Load

```lua
local quote, err = client:Quote():load({ id = "quote_id" })
```

#### Example: List

```lua
local quotes, err = client:Quote():list()
```

#### Example: Create

```lua
local quote, err = client:Quote():create({
  id = "example_id", -- string
  amount_subtotal = 1, -- number
  amount_total = 1, -- number
  automatic_tax = {}, -- table
  collection_method = "example_collection_method", -- string
  computed = {}, -- table
  created = 1, -- number
  discounts = {}, -- table
  expires_at = 1, -- number
  invoice_settings = {}, -- table
  line_items = {}, -- table
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  status = "example_status", -- string
  status_transitions = {}, -- table
  subscription_data = {}, -- table
  total_details = {}, -- table
})
```


### QuoteComputedUpfrontLineItem

Create an instance: `local quote_computed_upfront_line_item = client:QuoteComputedUpfrontLineItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adjustable_quantity` | `any` |  |
| `amount_discount` | `number` | Total discount amount applied. |
| `amount_subtotal` | `number` | Total before any discounts or taxes are applied. |
| `amount_tax` | `number` | Total tax amount applied. |
| `amount_total` | `number` | Total after discounts and taxes. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discounts` | `table` | The discounts applied to the line item. |
| `id` | `string` | Unique identifier for the object. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `price` | `number` | The price used to generate the line item. |
| `quantity` | `number` | The quantity of products being purchased. |
| `taxes` | `table` | The taxes applied to the line item. |

#### Example: List

```lua
local quote_computed_upfront_line_items, err = client:QuoteComputedUpfrontLineItem():list()
```


### QuotePdf

Create an instance: `local quote_pdf = client:QuotePdf(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local quote_pdf, err = client:QuotePdf():load({ id = "quote_pdf_id" })
```


### Reader

Create an instance: `local reader = client:Reader(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `any` | The most recent action performed by the reader. |
| `device_sw_version` | `string` | The current software version of the reader. |
| `device_type` | `string` | Device type of the reader. |
| `id` | `string` | Unique identifier for the object. |
| `ip_address` | `string` | The local IP address of the reader. |
| `label` | `string` | Custom label given to the reader for easier identification. |
| `last_seen_at` | `number` | The last time this reader reported to Stripe backend. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `location` | `any` | The location identifier of the reader. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `serial_number` | `string` | Serial number of the reader. |
| `status` | `string` | The networking status of the reader. |

#### Example: Load

```lua
local reader, err = client:Reader():load({ id = "reader_id" })
```

#### Example: List

```lua
local readers, err = client:Reader():list()
```

#### Example: Create

```lua
local reader, err = client:Reader():create({
  id = "example_id", -- string
  device_type = "example_device_type", -- string
  label = "example_label", -- string
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  serial_number = "example_serial_number", -- string
})
```


### ReceivedCredit

Create an instance: `local received_credit = client:ReceivedCredit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Amount (in cents) transferred. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `failure_code` | `string` | Reason for the failure. |
| `financial_account` | `string` | The FinancialAccount that received the funds. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `initiating_payment_method_details` | `table` |  |
| `linked_flows` | `table` |  |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `network` | `string` | The rails used to send the funds. |
| `object` | `string` | String representing the object's type. |
| `reversal_details` | `any` | Details describing when a ReceivedCredit may be reversed. |
| `status` | `string` | Status of the ReceivedCredit. |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```lua
local received_credit, err = client:ReceivedCredit():load({ id = "received_credit_id" })
```

#### Example: List

```lua
local received_credits, err = client:ReceivedCredit():list()
```

#### Example: Create

```lua
local received_credit, err = client:ReceivedCredit():create({
  amount = 1, -- number
  created = 1, -- number
  currency = "example_currency", -- string
  description = "example_description", -- string
  id = "example_id", -- string
  initiating_payment_method_details = {}, -- table
  linked_flows = {}, -- table
  livemode = true, -- boolean
  network = "example_network", -- string
  object = "example_object", -- string
  status = "example_status", -- string
})
```


### ReceivedDebit

Create an instance: `local received_debit = client:ReceivedDebit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Amount (in cents) transferred. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `failure_code` | `string` | Reason for the failure. |
| `financial_account` | `string` | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Unique identifier for the object. |
| `initiating_payment_method_details` | `table` |  |
| `linked_flows` | `table` |  |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `network` | `string` | The network used for the ReceivedDebit. |
| `object` | `string` | String representing the object's type. |
| `reversal_details` | `any` | Details describing when a ReceivedDebit might be reversed. |
| `status` | `string` | Status of the ReceivedDebit. |
| `transaction` | `any` | The Transaction associated with this object. |

#### Example: Load

```lua
local received_debit, err = client:ReceivedDebit():load({ id = "received_debit_id" })
```

#### Example: List

```lua
local received_debits, err = client:ReceivedDebit():list()
```

#### Example: Create

```lua
local received_debit, err = client:ReceivedDebit():create({
  amount = 1, -- number
  created = 1, -- number
  currency = "example_currency", -- string
  description = "example_description", -- string
  id = "example_id", -- string
  initiating_payment_method_details = {}, -- table
  linked_flows = {}, -- table
  livemode = true, -- boolean
  network = "example_network", -- string
  object = "example_object", -- string
  status = "example_status", -- string
})
```


### Refund

Create an instance: `local refund = client:Refund(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Amount, in cents (or local equivalent). |
| `balance_transaction` | `any` | Balance transaction that describes the impact on your account balance. |
| `charge` | `any` | ID of the charge that's refunded. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | ID of the customer of this refund. |
| `customer_account` | `string` | ID of the account of this refund. |
| `description` | `string` | An arbitrary string attached to the object. |
| `destination_details` | `table` |  |
| `failure_balance_transaction` | `any` | After the refund fails, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction. |
| `failure_reason` | `string` | Provides the reason for the refund failure. |
| `fee` | `any` | ID of the application fee that was refunded. |
| `id` | `string` | Unique identifier for the object. |
| `instructions_email` | `string` | For payment methods without native refund support (for example, Konbini, PromptPay), provide an email address for the customer to receive refund instructions. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `table` |  |
| `object` | `string` | String representing the object's type. |
| `payment_intent` | `any` | ID of the PaymentIntent that's refunded. |
| `payment_method` | `any` | ID of the payment method associated with this refund. |
| `pending_reason` | `string` | Provides the reason for why the refund is pending. |
| `presentment_details` | `table` |  |
| `reason` | `string` | Reason for the refund, which is either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`). |
| `receipt_number` | `string` | This is the transaction number that appears on email receipts sent for this refund. |
| `source_transfer_reversal` | `any` | The transfer reversal that's associated with the refund. |
| `status` | `string` | Status of the refund. |
| `transfer_reversal` | `any` | This refers to the transfer reversal object if the accompanying transfer reverses. |

#### Example: Load

```lua
local refund, err = client:Refund():load({ id = "refund_id" })
```

#### Example: List

```lua
local refunds, err = client:Refund():list()
```

#### Example: Create

```lua
local refund, err = client:Refund():create({
  id = "example_id", -- string
  amount = 1, -- number
  created = 1, -- number
  currency = "example_currency", -- string
  destination_details = {}, -- table
  fee = "example_fee", -- any
  next_action = {}, -- table
  object = "example_object", -- string
  presentment_details = {}, -- table
})
```


### Registration

Create an instance: `local registration = client:Registration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_from` | `number` | Time at which the registration becomes active. |
| `ae` | `table` |  |
| `al` | `table` |  |
| `am` | `table` |  |
| `ao` | `table` |  |
| `at` | `table` |  |
| `au` | `table` |  |
| `aw` | `table` |  |
| `az` | `table` |  |
| `ba` | `table` |  |
| `bb` | `table` |  |
| `bd` | `table` |  |
| `be` | `table` |  |
| `bf` | `table` |  |
| `bg` | `table` |  |
| `bh` | `table` |  |
| `bj` | `table` |  |
| `bs` | `table` |  |
| `by` | `table` |  |
| `ca` | `table` |  |
| `cd` | `table` |  |
| `ch` | `table` |  |
| `cl` | `table` |  |
| `cm` | `table` |  |
| `co` | `table` |  |
| `country` | `string` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `country_options` | `table` |  |
| `cr` | `table` |  |
| `created` | `number` | Time at which the object was created. |
| `cv` | `table` |  |
| `cy` | `table` |  |
| `cz` | `table` |  |
| `de` | `table` |  |
| `dk` | `table` |  |
| `ec` | `table` |  |
| `ee` | `table` |  |
| `eg` | `table` |  |
| `es` | `table` |  |
| `et` | `table` |  |
| `expires_at` | `number` | If set, the registration stops being active at this time. |
| `fi` | `table` |  |
| `fr` | `table` |  |
| `gb` | `table` |  |
| `ge` | `table` |  |
| `gn` | `table` |  |
| `gr` | `table` |  |
| `hr` | `table` |  |
| `hu` | `table` |  |
| `id` | `table` | Unique identifier for the object. |
| `ie` | `table` |  |
| `in` | `table` |  |
| `is` | `table` |  |
| `it` | `table` |  |
| `jp` | `table` |  |
| `ke` | `table` |  |
| `kg` | `table` |  |
| `kh` | `table` |  |
| `kr` | `table` |  |
| `kz` | `table` |  |
| `la` | `table` |  |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `lk` | `table` |  |
| `lt` | `table` |  |
| `lu` | `table` |  |
| `lv` | `table` |  |
| `ma` | `table` |  |
| `md` | `table` |  |
| `me` | `table` |  |
| `mk` | `table` |  |
| `mr` | `table` |  |
| `mt` | `table` |  |
| `mx` | `table` |  |
| `my` | `table` |  |
| `ng` | `table` |  |
| `nl` | `table` |  |
| `no` | `table` |  |
| `np` | `table` |  |
| `nz` | `table` |  |
| `object` | `string` | String representing the object's type. |
| `om` | `table` |  |
| `pe` | `table` |  |
| `ph` | `table` |  |
| `pl` | `table` |  |
| `pt` | `table` |  |
| `ro` | `table` |  |
| `rs` | `table` |  |
| `ru` | `table` |  |
| `sa` | `table` |  |
| `se` | `table` |  |
| `sg` | `table` |  |
| `si` | `table` |  |
| `sk` | `table` |  |
| `sn` | `table` |  |
| `sr` | `table` |  |
| `status` | `string` | The status of the registration. |
| `th` | `table` |  |
| `tj` | `table` |  |
| `tr` | `table` |  |
| `tw` | `table` |  |
| `tz` | `table` |  |
| `ua` | `table` |  |
| `ug` | `table` |  |
| `us` | `table` |  |
| `uy` | `table` |  |
| `uz` | `table` |  |
| `vn` | `table` |  |
| `za` | `table` |  |
| `zm` | `table` |  |
| `zw` | `table` |  |

#### Example: Load

```lua
local registration, err = client:Registration():load({ id = "registration_id" })
```

#### Example: List

```lua
local registrations, err = client:Registration():list()
```

#### Example: Create

```lua
local registration, err = client:Registration():create({
  id = "example_id", -- string
  active_from = 1, -- number
  ae = {}, -- table
  al = {}, -- table
  am = {}, -- table
  ao = {}, -- table
  at = {}, -- table
  au = {}, -- table
  aw = {}, -- table
  az = {}, -- table
  ba = {}, -- table
  bb = {}, -- table
  bd = {}, -- table
  be = {}, -- table
  bf = {}, -- table
  bg = {}, -- table
  bh = {}, -- table
  bj = {}, -- table
  bs = {}, -- table
  by = {}, -- table
  ca = {}, -- table
  cd = {}, -- table
  ch = {}, -- table
  cl = {}, -- table
  cm = {}, -- table
  co = {}, -- table
  country = "example_country", -- string
  country_options = {}, -- table
  cr = {}, -- table
  created = 1, -- number
  cv = {}, -- table
  cy = {}, -- table
  cz = {}, -- table
  de = {}, -- table
  dk = {}, -- table
  ec = {}, -- table
  ee = {}, -- table
  eg = {}, -- table
  es = {}, -- table
  et = {}, -- table
  fi = {}, -- table
  fr = {}, -- table
  gb = {}, -- table
  ge = {}, -- table
  gn = {}, -- table
  gr = {}, -- table
  hr = {}, -- table
  hu = {}, -- table
  ie = {}, -- table
  ["in"] = {}, -- table
  is = {}, -- table
  it = {}, -- table
  jp = {}, -- table
  ke = {}, -- table
  kg = {}, -- table
  kh = {}, -- table
  kr = {}, -- table
  kz = {}, -- table
  la = {}, -- table
  livemode = true, -- boolean
  lk = {}, -- table
  lt = {}, -- table
  lu = {}, -- table
  lv = {}, -- table
  ma = {}, -- table
  md = {}, -- table
  me = {}, -- table
  mk = {}, -- table
  mr = {}, -- table
  mt = {}, -- table
  mx = {}, -- table
  my = {}, -- table
  ng = {}, -- table
  nl = {}, -- table
  no = {}, -- table
  np = {}, -- table
  nz = {}, -- table
  object = "example_object", -- string
  om = {}, -- table
  pe = {}, -- table
  ph = {}, -- table
  pl = {}, -- table
  pt = {}, -- table
  ro = {}, -- table
  rs = {}, -- table
  ru = {}, -- table
  sa = {}, -- table
  se = {}, -- table
  sg = {}, -- table
  si = {}, -- table
  sk = {}, -- table
  sn = {}, -- table
  sr = {}, -- table
  status = "example_status", -- string
  th = {}, -- table
  tj = {}, -- table
  tr = {}, -- table
  tw = {}, -- table
  tz = {}, -- table
  ua = {}, -- table
  ug = {}, -- table
  us = {}, -- table
  uy = {}, -- table
  uz = {}, -- table
  vn = {}, -- table
  za = {}, -- table
  zm = {}, -- table
  zw = {}, -- table
})
```


### ReportRun

Create an instance: `local report_run = client:ReportRun(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `error` | `string` | If something should go wrong during the run, a message about the failure (populated when `status=failed`). |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | `true` if the report is run on live mode data and `false` if it is run on test mode data. |
| `object` | `string` | String representing the object's type. |
| `parameters` | `table` |  |
| `report_type` | `string` | The ID of the [report type](https://docs.stripe.com/reports/report-types) to run, such as `"balance.summary.1"`. |
| `result` | `any` | The file object representing the result of the report run (populated when `status=succeeded`). |
| `status` | `string` | Status of this report run. |
| `succeeded_at` | `number` | Timestamp at which this run successfully finished (populated when `status=succeeded`). |

#### Example: Load

```lua
local report_run, err = client:ReportRun():load({ id = "report_run_id" })
```

#### Example: List

```lua
local report_runs, err = client:ReportRun():list()
```

#### Example: Create

```lua
local report_run, err = client:ReportRun():create({
  created = 1, -- number
  id = "example_id", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  parameters = {}, -- table
  report_type = "example_report_type", -- string
  status = "example_status", -- string
})
```


### ReportType

Create an instance: `local report_type = client:ReportType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data_available_end` | `number` | Most recent time for which this Report Type is available. |
| `data_available_start` | `number` | Earliest time for which this Report Type is available. |
| `default_columns` | `table` | List of column names that are included by default when this Report Type gets run. |
| `id` | `string` | The [ID of the Report Type](https://docs.stripe.com/reporting/statements/api#available-report-types), such as `balance.summary.1`. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Human-readable name of the Report Type |
| `object` | `string` | String representing the object's type. |
| `updated` | `number` | When this Report Type was latest updated. |
| `version` | `number` | Version of the Report Type. |

#### Example: Load

```lua
local report_type, err = client:ReportType():load({ id = "report_type_id" })
```

#### Example: List

```lua
local report_types, err = client:ReportType():list()
```


### Request

Create an instance: `local request = client:Request(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `payment_method` | `string` | The PaymentMethod to insert into the forwarded request. |
| `replacements` | `table` | The field kinds to be replaced in the forwarded request. |
| `request_context` | `any` | Context about the request from Stripe's servers to the destination endpoint. |
| `request_details` | `any` | The request that was sent to the destination endpoint. |
| `response_details` | `any` | The response that the destination endpoint returned to us. |
| `url` | `string` | The destination URL for the forwarded request. |

#### Example: Load

```lua
local request, err = client:Request():load({ id = "request_id" })
```

#### Example: List

```lua
local requests, err = client:Request():list()
```

#### Example: Create

```lua
local request, err = client:Request():create({
  created = 1, -- number
  id = "example_id", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  payment_method = "example_payment_method", -- string
  replacements = {}, -- table
})
```


### Reversal

Create an instance: `local reversal = client:Reversal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Amount, in cents (or local equivalent). |
| `balance_transaction` | `any` | Balance transaction that describes the impact on your account balance. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `destination_payment_refund` | `any` | Linked payment refund for the transfer reversal. |
| `id` | `string` | Unique identifier for the object. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `source_refund` | `any` | ID of the refund responsible for the transfer reversal. |
| `transfer` | `any` | ID of the transfer that was reversed. |

#### Example: Load

```lua
local reversal, err = client:Reversal():load({ id = "reversal_id", transfer_id = "transfer_id" })
```

#### Example: List

```lua
local reversals, err = client:Reversal():list()
```

#### Example: Create

```lua
local reversal, err = client:Reversal():create({
  transfer_id = "example_transfer_id", -- string
  amount = 1, -- number
  created = 1, -- number
  currency = "example_currency", -- string
  object = "example_object", -- string
  transfer = "example_transfer", -- any
})
```


### Review

Create an instance: `local review = client:Review(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing_zip` | `string` | The ZIP or postal code of the card used, if applicable. |
| `charge` | `any` | The charge associated with this review. |
| `closed_reason` | `string` | The reason the review was closed, or null if it has not yet been closed. |
| `created` | `number` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `ip_address` | `string` | The IP address where the payment originated. |
| `ip_address_location` | `any` | Information related to the location of the payment. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `open` | `boolean` | If `true`, the review needs action. |
| `opened_reason` | `string` | The reason the review was opened. |
| `payment_intent` | `any` | The PaymentIntent ID associated with this review, if one exists. |
| `reason` | `string` | The reason the review is currently open or closed. |
| `session` | `any` | Information related to the browsing session of the user who initiated the payment. |

#### Example: Load

```lua
local review, err = client:Review():load({ id = "review_id" })
```

#### Example: List

```lua
local reviews, err = client:Review():list()
```

#### Example: Create

```lua
local review, err = client:Review():create({
  id = "example_id", -- string
  created = 1, -- number
  livemode = true, -- boolean
  object = "example_object", -- string
  open = true, -- boolean
  opened_reason = "example_opened_reason", -- string
  reason = "example_reason", -- string
})
```


### ScheduledQueryRun

Create an instance: `local scheduled_query_run = client:ScheduledQueryRun(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `data_load_time` | `number` | When the query was run, Sigma contained a snapshot of your Stripe data at this time. |
| `error` | `table` |  |
| `file` | `any` | The file object representing the results of the query. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `result_available_until` | `number` | Time at which the result expires and is no longer available for download. |
| `sql` | `string` | SQL for the query. |
| `status` | `string` | The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise. |
| `title` | `string` | Title of the query. |

#### Example: Load

```lua
local scheduled_query_run, err = client:ScheduledQueryRun():load({ id = "scheduled_query_run_id" })
```

#### Example: List

```lua
local scheduled_query_runs, err = client:ScheduledQueryRun():list()
```


### Search

Create an instance: `local search = client:Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_country` | `string` | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `string` | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `table` | The account tax IDs associated with the invoice. |
| `active` | `boolean` | Whether the price can be used for new purchases. |
| `address` | `any` | The customer's billing address. |
| `allowed_payment_method_types` | `table` | The list of payment method types allowed for use with this payment. |
| `amount` | `number` | Amount intended to be collected by this payment. |
| `amount_capturable` | `number` | Amount that can be captured from this PaymentIntent. |
| `amount_captured` | `number` | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_details` | `any` |  |
| `amount_due` | `number` | Final amount due at this time for this invoice. |
| `amount_overpaid` | `number` | Amount that was overpaid on the invoice. |
| `amount_paid` | `number` | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | `number` | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_received` | `number` | Amount that this PaymentIntent collects. |
| `amount_refunded` | `number` | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `amount_remaining` | `number` | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | `number` | This is the sum of all the shipping amounts. |
| `application` | `any` | ID of the Connect application that created the charge. |
| `application_fee` | `any` | The application fee (if any) for the charge. |
| `application_fee_amount` | `number` | The amount of the application fee (if any) requested for the charge. |
| `application_fee_percent` | `number` | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `attempt_count` | `number` | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | `boolean` | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | `boolean` | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_payment_methods` | `any` | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `automatic_tax` | `table` |  |
| `automatically_finalizes_at` | `number` | The time when this invoice is currently scheduled to be automatically finalized. |
| `balance` | `number` | The current balance, if any, that's stored on the customer in their default currency. |
| `balance_transaction` | `any` | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_cycle_anchor` | `number` | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `any` | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_details` | `table` |  |
| `billing_mode` | `table` | The billing mode of the subscription. |
| `billing_reason` | `string` | Indicates the reason why the invoice was created. |
| `billing_schedules` | `table` | Billing schedules for this subscription. |
| `billing_scheme` | `string` | Describes how to compute the price per period. |
| `billing_thresholds` | `any` | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `business_name` | `string` | The customer's business name. |
| `calculated_statement_descriptor` | `string` | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `cancel_at` | `number` | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | `boolean` | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | `number` | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_details` | `any` | Details about why this subscription was cancelled |
| `cancellation_reason` | `string` | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | `string` | Controls when the funds will be captured from the customer's account. |
| `captured` | `boolean` | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `cash_balance` | `any` | The current funds being held by Stripe on behalf of the customer. |
| `client_secret` | `string` | The client secret of this PaymentIntent. |
| `collection_method` | `string` | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_method` | `string` | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `confirmation_secret` | `any` | The confirmation secret associated with this invoice. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | `table` | Prices defined in each available currency option. |
| `custom_fields` | `table` | Custom fields displayed on the invoice. |
| `custom_unit_amount` | `any` | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `customer` | `any` | ID of the customer this charge is for if one exists. |
| `customer_account` | `string` | The ID of an Account representing a customer. |
| `customer_address` | `any` | The customer's address. |
| `customer_email` | `string` | The customer's email. |
| `customer_name` | `string` | The customer's name. |
| `customer_phone` | `string` | The customer's phone number. |
| `customer_shipping` | `any` | The customer's shipping information. |
| `customer_tax_exempt` | `string` | The customer's tax exempt status. |
| `customer_tax_ids` | `table` | The customer's tax IDs. |
| `days_until_due` | `number` | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | `any` | ID of the default payment method for the invoice. |
| `default_price` | `any` | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `default_source` | `any` | ID of the default payment source for the customer. |
| `default_tax_rates` | `table` | The tax rates applied to this invoice, if any. |
| `delinquent` | `boolean` | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | `string` | An arbitrary string attached to the object. |
| `discount` | `any` | Describes the current discount active on the customer, if there is one. |
| `discounts` | `table` | The discounts applied to the invoice. |
| `disputed` | `boolean` | Whether the charge has been disputed. |
| `due_date` | `number` | The date on which payment for this invoice is due. |
| `effective_at` | `number` | The date when this invoice is in effect. |
| `email` | `string` | The customer's email address. |
| `ended_at` | `number` | If the subscription has ended, the date the subscription ended. |
| `ending_balance` | `number` | Ending customer balance after the invoice is finalized. |
| `excluded_payment_method_types` | `table` | The list of payment method types to exclude from use with this payment. |
| `failure_balance_transaction` | `any` | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | `string` | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | `string` | Message to user further explaining reason for charge failure if available. |
| `footer` | `string` | Footer displayed on the invoice. |
| `fraud_details` | `any` | Information on fraud assessments for the charge. |
| `from_invoice` | `any` | Details of the invoice that was cloned. |
| `hooks` | `table` |  |
| `hosted_invoice_url` | `string` | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `string` | Unique identifier for the object. |
| `images` | `table` | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `individual_name` | `string` | The customer's individual name. |
| `invoice_credit_balance` | `table` | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_pdf` | `string` | The link to download the PDF for the invoice. |
| `invoice_prefix` | `string` | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `table` |  |
| `issuer` | `table` |  |
| `items` | `table` | List of subscription items, each with an attached price. |
| `last_finalization_error` | `any` | The error encountered during the previous attempt to finalize the invoice. |
| `last_payment_error` | `any` | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `any` | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `latest_invoice` | `any` | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `latest_revision` | `any` | The ID of the most recent non-draft revision of this invoice |
| `lines` | `table` | The individual line items that make up the invoice. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | A lookup key used to retrieve prices dynamically from a static string. |
| `managed_payments` | `any` | Settings for Managed Payments. |
| `marketing_features` | `table` | A list of up to 15 marketing features for this product. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | The customer's full name or business name. |
| `next_action` | `any` | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `next_invoice_sequence` | `number` | The suffix of the customer's next invoice number (for example, 0001). |
| `next_payment_attempt` | `number` | The time at which payment will next be attempted. |
| `next_pending_invoice_item_invoice` | `number` | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `nickname` | `string` | A brief description of the price, hidden from customers. |
| `number` | `string` | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | `any` | Details about whether the payment was accepted, and why. |
| `package_dimensions` | `any` | The dimensions of this product for shipping purposes. |
| `paid` | `boolean` | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `parent` | `any` | The parent that generated this invoice |
| `pause_collection` | `any` | If specified, payment collection for this subscription will be paused. |
| `payment_details` | `table` |  |
| `payment_intent` | `any` | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `string` | ID of the payment method used in this charge. |
| `payment_method_configuration_details` | `any` | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_details` | `any` | Details about the payment method at the time of the transaction. |
| `payment_method_options` | `any` | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `table` | The list of payment method types (e.g. |
| `payment_record` | `any` | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `payment_settings` | `table` | Payment settings passed on to invoices created by the subscription. |
| `payments` | `table` | Payments for this invoice. |
| `pending_invoice_item_interval` | `any` | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `any` | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `any` | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `period_end` | `number` | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | `number` | The earliest timestamp at which invoice items can be associated with this invoice. |
| `phone` | `string` | The customer's phone number. |
| `post_payment_credit_notes_amount` | `number` | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | `number` | Total amount of all pre-payment credit notes issued for this invoice. |
| `preferred_locales` | `table` | The customer's preferred locales (languages), ordered by preference. |
| `presentment_details` | `table` |  |
| `processing` | `any` | If present, this property tells you about the processing state of the payment. |
| `product` | `any` | The ID of the product this price is associated with. |
| `radar_options` | `table` | Options to configure Radar. |
| `receipt_email` | `string` | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `string` | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `string` | This is the URL to view the receipt for this charge. |
| `recurring` | `any` | The recurring components of a price such as `interval` and `usage_type`. |
| `refunded` | `boolean` | Whether the charge has been fully refunded. |
| `refunds` | `table` | A list of refunds that have been applied to the charge. |
| `rendering` | `any` | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `review` | `any` | ID of the review associated with this charge if one exists. |
| `schedule` | `any` | The schedule attached to the subscription |
| `setup_future_usage` | `string` | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `shippable` | `boolean` | Whether this product is shipped (i.e., physical goods). |
| `shipping` | `any` | Shipping information for the charge. |
| `shipping_cost` | `any` | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | `any` | Shipping details for the invoice. |
| `source_transfer` | `any` | The transfer ID which created this charge. |
| `sources` | `table` | The customer's payment sources, if any. |
| `start_date` | `number` | Date when the subscription was first created. |
| `starting_balance` | `number` | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | `string` | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | `string` | Provides information about a card charge. |
| `status` | `string` | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `status_details` | `table` | Describes changes to the subscription's status. |
| `status_transitions` | `table` |  |
| `subscriptions` | `table` | The customer's current subscriptions, if any. |
| `subtotal` | `number` | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `number` | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `tax` | `table` |  |
| `tax_behavior` | `string` | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tax_code` | `any` | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `any` | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `tax_exempt` | `string` | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `table` | The customer's tax IDs. |
| `test_clock` | `any` | ID of the test clock that this customer belongs to. |
| `threshold_reason` | `table` |  |
| `tiers` | `table` | Each element represents a pricing tier. |
| `tiers_mode` | `string` | Defines if the tiering price should be `graduated` or `volume` based. |
| `total` | `number` | Total after discounts and taxes. |
| `total_discount_amounts` | `table` | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `number` | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `table` | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `table` | The aggregate tax information of all line items. |
| `transfer` | `any` | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `transfer_data` | `any` | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `transfer_group` | `string` | A string that identifies this transaction as part of a group. |
| `transform_quantity` | `any` | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_end` | `number` | If the subscription has a trial, the end of that trial. |
| `trial_settings` | `any` | Settings related to subscription trials. |
| `trial_start` | `number` | If the subscription has a trial, the beginning of that trial. |
| `type` | `string` | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | `number` | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | `string` | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `unit_label` | `string` | A label that represents units of this product. |
| `updated` | `number` | Time at which the object was last updated. |
| `url` | `string` | A URL of a publicly-accessible webpage for this product. |
| `webhooks_delivered_at` | `number` | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

#### Example: List

```lua
local searchs, err = client:Search():list()
```


### Secret

Create an instance: `local secret = client:Secret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `deleted` | `boolean` | If true, indicates that this secret has been deleted |
| `expires_at` | `number` | The Unix timestamp for the expiry time of the secret, after which the secret deletes. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `name` | `string` | A name for the secret that's unique within the scope. |
| `object` | `string` | String representing the object's type. |
| `payload` | `string` | The plaintext secret value to be stored. |
| `scope` | `table` |  |
| `type` | `string` | The secret scope type. |
| `user` | `string` | The user ID, if type is set to "user" |

#### Example: Load

```lua
local secret, err = client:Secret():load({ name = "name", scope = {} })
```

#### Example: List

```lua
local secrets, err = client:Secret():list()
```

#### Example: Create

```lua
local secret, err = client:Secret():create({
  created = 1, -- number
  id = "example_id", -- string
  livemode = true, -- boolean
  name = "example_name", -- string
  object = "example_object", -- string
  scope = {}, -- table
  type = "example_type", -- string
})
```


### Session

Create an instance: `local session = client:Session(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_holder` | `any` | The account holder for whom accounts are collected in this session. |
| `accounts` | `table` | The accounts that were collected as part of this Session. |
| `adaptive_pricing` | `any` | Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing). |
| `after_expiration` | `any` | When set, provides configuration for actions to take if this Checkout Session expires. |
| `allow_promotion_codes` | `boolean` | Enables user redeemable promotion codes. |
| `allowed_payment_method_types` | `table` | A list of the types of payment methods (e.g., `card`) this Checkout Session can accept. |
| `amount_subtotal` | `number` | Total of all items before discounts or taxes are applied. |
| `amount_total` | `number` | Total of all items after discounts and taxes are applied. |
| `automatic_tax` | `table` |  |
| `bank_account_token` | `table` | Tokenization is the process Stripe uses to collect sensitive card or bank account details, or personally identifiable information (PII), directly from your customers in a secure manner. |
| `billing_address_collection` | `string` | Describes whether Checkout should collect the customer's billing address. |
| `branding_settings` | `table` |  |
| `cancel_url` | `string` | If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. |
| `client_reference_id` | `string` | A unique string to reference the Checkout Session. |
| `client_secret` | `string` | The client secret of your Checkout Session. |
| `collected_information` | `any` | Information about the customer collected within the Checkout Session. |
| `configuration` | `any` | The configuration used by this session, describing the features available. |
| `consent` | `any` | Results of `consent_collection` for this session. |
| `consent_collection` | `any` | When set, provides configuration for the Checkout Session to gather active consent from customers. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_conversion` | `any` | Currency conversion details for [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing) sessions created before 2025-03-31. |
| `custom_fields` | `table` | Collect additional information from your customer using custom fields. |
| `custom_text` | `table` |  |
| `customer` | `any` | The ID of the customer for this Session. |
| `customer_account` | `string` | The ID of the account for this Session. |
| `customer_creation` | `string` | Configure whether a Checkout Session creates a Customer when the Checkout Session completes. |
| `customer_details` | `any` | The customer details including the customer's tax exempt status and the customer's tax IDs. |
| `customer_email` | `string` | If provided, this value will be used when the Customer object is created. |
| `discounts` | `table` | List of coupons and promotion codes attached to the Checkout Session. |
| `excluded_payment_method_types` | `table` | A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session. |
| `expires_at` | `number` | The timestamp at which the Checkout Session will expire. |
| `filters` | `table` |  |
| `flow` | `any` | Information about a specific flow for the customer to go through. |
| `id` | `string` | Unique identifier for the object. |
| `integration_identifier` | `string` | The integration identifier for this Checkout Session. |
| `invoice` | `any` | ID of the invoice created by the Checkout Session, if it exists. |
| `invoice_creation` | `any` | Details on the state of invoice creation for the Checkout Session. |
| `limits` | `table` |  |
| `line_items` | `table` | The line items purchased by the customer. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `locale` | `string` | The IETF language tag of the locale Checkout is displayed in. |
| `managed_payments` | `any` | Settings for Managed Payments for this Checkout Session and resulting [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/object). |
| `manual_entry` | `table` |  |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mode` | `string` | The mode of the Checkout Session. |
| `name_collection` | `table` |  |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `string` | The account for which the session was created on behalf of. |
| `optional_items` | `table` | The optional items presented to the customer at checkout. |
| `origin_context` | `string` | Where the user is coming from. |
| `payment_intent` | `any` | The ID of the PaymentIntent for Checkout Sessions in `payment` mode. |
| `payment_link` | `any` | The ID of the Payment Link that created this Session. |
| `payment_method_collection` | `string` | Configure whether a Checkout Session should collect a payment method for sessions with mode `payment`. |
| `payment_method_configuration_details` | `any` | Information about the payment method configuration used for this Checkout session if using dynamic payment methods. |
| `payment_method_options` | `any` | Payment-method-specific configuration for the PaymentIntent or SetupIntent of this CheckoutSession. |
| `payment_method_types` | `table` | A list of the types of payment methods (e.g. |
| `payment_status` | `string` | The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`. |
| `permissions` | `any` | This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object. |
| `phone_number_collection` | `table` |  |
| `prefetch` | `table` | Data features requested to be retrieved upon account creation. |
| `presentment_details` | `table` |  |
| `recovered_from` | `string` | The ID of the original expired Checkout Session that triggered the recovery flow. |
| `redirect_on_completion` | `string` | This parameter applies to `ui_mode: embedded_page`. |
| `return_url` | `string` | Applies to Checkout Sessions with `ui_mode: embedded_page` or `ui_mode: elements`. |
| `saved_payment_method_options` | `any` | Controls saved payment method settings for the session. |
| `setup_intent` | `any` | The ID of the SetupIntent for Checkout Sessions in `setup` mode. |
| `shipping_address_collection` | `any` | When set, provides configuration for Checkout to collect a shipping address from a customer. |
| `shipping_cost` | `any` | The details of the customer cost of shipping, including the customer chosen ShippingRate. |
| `shipping_options` | `table` | The shipping rate options applied to this Session. |
| `status` | `string` | The status of the Checkout Session, one of `open`, `complete`, or `expired`. |
| `submit_type` | `string` | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. |
| `subscription` | `any` | The ID of the [Subscription](https://docs.stripe.com/api/subscriptions) for Checkout Sessions in `subscription` mode. |
| `success_url` | `string` | The URL the customer will be directed to after the payment or subscription creation is successful. |
| `tax_id_collection` | `table` |  |
| `total_details` | `number` | Tax and discount details for the computed total amount. |
| `ui_mode` | `string` | The UI mode of the Session. |
| `url` | `string` | The URL to the Checkout Session. |
| `wallet_options` | `any` | Wallet-specific configuration for this Checkout Session. |

#### Example: Load

```lua
local session, err = client:Session():load({ session = "session" })
```

#### Example: List

```lua
local sessions, err = client:Session():list()
```

#### Example: Create

```lua
local session, err = client:Session():create({
  id = "example_id", -- string
  accounts = {}, -- table
  automatic_tax = {}, -- table
  bank_account_token = {}, -- table
  branding_settings = {}, -- table
  configuration = "example_configuration", -- any
  created = 1, -- number
  custom_fields = {}, -- table
  custom_text = {}, -- table
  expires_at = 1, -- number
  limits = {}, -- table
  line_items = {}, -- table
  livemode = true, -- boolean
  mode = "example_mode", -- string
  object = "example_object", -- string
  payment_method_types = {}, -- table
  payment_status = "example_payment_status", -- string
  phone_number_collection = {}, -- table
  presentment_details = {}, -- table
  shipping_options = {}, -- table
  tax_id_collection = {}, -- table
})
```


### Setting

Create an instance: `local setting = client:Setting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `defaults` | `table` |  |
| `head_office` | `any` | The place where your business is located. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | The status of the Tax `Settings`. |
| `status_details` | `table` |  |

#### Example: Load

```lua
local setting, err = client:Setting():load()
```

#### Example: Create

```lua
local setting, err = client:Setting():create({
  defaults = {}, -- table
  livemode = true, -- boolean
  object = "example_object", -- string
  status = "example_status", -- string
  status_details = {}, -- table
})
```


### Settlement

Create an instance: `local settlement = client:Settlement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local settlement, err = client:Settlement():load({ id = "settlement_id" })
```

#### Example: Create

```lua
local settlement, err = client:Settlement():create({
  id = "example_id", -- string
})
```


### SetupAttempt

Create an instance: `local setup_attempt = client:SetupAttempt(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `any` | The value of [application](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation. |
| `attach_to_self` | `boolean` | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `created` | `number` | Time at which the object was created. |
| `customer` | `any` | The value of [customer](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation. |
| `customer_account` | `string` | The value of [customer_account](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer_account) on the SetupIntent at the time of this confirmation. |
| `flow_directions` | `table` | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The value of [on_behalf_of](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation. |
| `payment_method` | `any` | ID of the payment method used with this SetupAttempt. |
| `payment_method_details` | `table` |  |
| `setup_error` | `any` | The error encountered during this attempt to confirm the SetupIntent, if any. |
| `setup_intent` | `any` | ID of the SetupIntent that this attempt belongs to. |
| `status` | `string` | Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`. |
| `usage` | `string` | The value of [usage](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`. |

#### Example: List

```lua
local setup_attempts, err = client:SetupAttempt():list()
```


### SetupIntent

Create an instance: `local setup_intent = client:SetupIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_payment_method_types` | `table` | The list of payment method types to allow for this SetupIntent. |
| `application` | `any` | ID of the Connect application that created the SetupIntent. |
| `attach_to_self` | `boolean` | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `automatic_payment_methods` | `any` | Settings for dynamic payment methods compatible with this Setup Intent |
| `cancellation_reason` | `string` | Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`. |
| `client_secret` | `string` | The client secret of this SetupIntent. |
| `created` | `number` | Time at which the object was created. |
| `customer` | `any` | ID of the Customer this SetupIntent belongs to, if one exists. |
| `customer_account` | `string` | ID of the Account this SetupIntent belongs to, if one exists. |
| `description` | `string` | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | `table` | Payment method types that are excluded from this SetupIntent. |
| `flow_directions` | `table` | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `string` | Unique identifier for the object. |
| `last_setup_error` | `any` | The error encountered in the previous SetupIntent confirmation. |
| `latest_attempt` | `any` | The most recent SetupAttempt for this SetupIntent. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` |  |
| `mandate` | `any` | ID of the multi use Mandate generated by the SetupIntent. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `any` | If present, this property tells you what actions you need to take in order for your customer to continue payment setup. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account (if any) for which the setup is intended. |
| `payment_method` | `any` | ID of the payment method used with this SetupIntent. |
| `payment_method_configuration_details` | `any` | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this Setup Intent. |
| `payment_method_options` | `any` | Payment method-specific configuration for this SetupIntent. |
| `payment_method_types` | `table` | The list of payment method types (e.g. |
| `single_use_mandate` | `any` | ID of the single_use Mandate generated by the SetupIntent. |
| `status` | `string` | [Status](https://docs.stripe.com/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`. |
| `usage` | `string` | Indicates how the payment method is intended to be used in the future. |

#### Example: Load

```lua
local setup_intent, err = client:SetupIntent():load({ id = "setup_intent_id" })
```

#### Example: List

```lua
local setup_intents, err = client:SetupIntent():list()
```

#### Example: Create

```lua
local setup_intent, err = client:SetupIntent():create({
  id = "example_id", -- string
  created = 1, -- number
  livemode = true, -- boolean
  object = "example_object", -- string
  payment_method_types = {}, -- table
  status = "example_status", -- string
  usage = "example_usage", -- string
})
```


### ShippingRate

Create an instance: `local shipping_rate = client:ShippingRate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether the shipping rate can be used for new purchases. |
| `created` | `number` | Time at which the object was created. |
| `delivery_estimate` | `any` | The estimated range for how long shipping will take, meant to be displayable to the customer. |
| `display_name` | `string` | The name of the shipping rate, meant to be displayable to the customer. |
| `fixed_amount` | `table` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `tax_behavior` | `string` | Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. |
| `tax_code` | `any` | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `type` | `string` | The type of calculation to use on the shipping rate. |

#### Example: Load

```lua
local shipping_rate, err = client:ShippingRate():load({ id = "shipping_rate_id" })
```

#### Example: List

```lua
local shipping_rates, err = client:ShippingRate():list()
```

#### Example: Create

```lua
local shipping_rate, err = client:ShippingRate():create({
  id = "example_id", -- string
  active = true, -- boolean
  created = 1, -- number
  fixed_amount = {}, -- table
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  type = "example_type", -- string
})
```


### SigmaApiQuery

Create an instance: `local sigma_api_query = client:SigmaApiQuery(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `name` | `string` | The name of the query. |
| `object` | `string` | String representing the object's type. |
| `sql` | `string` | The sql statement for the query. |

#### Example: Create

```lua
local sigma_api_query, err = client:SigmaApiQuery():create({
  id = "example_id", -- string
  created = 1, -- number
  livemode = true, -- boolean
  name = "example_name", -- string
  object = "example_object", -- string
  sql = "example_sql", -- string
})
```


### Source

Create an instance: `local source = client:Source(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ach_credit_transfer` | `table` |  |
| `ach_debit` | `table` |  |
| `acss_debit` | `table` |  |
| `alipay` | `table` |  |
| `allow_redisplay` | `boolean` | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `amount` | `number` | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. |
| `au_becs_debit` | `table` |  |
| `bancontact` | `table` |  |
| `card` | `table` |  |
| `card_present` | `table` |  |
| `client_secret` | `string` | The client secret of the source. |
| `code_verification` | `table` |  |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. |
| `customer` | `string` | The ID of the customer to which this source is attached. |
| `data` | `table` | Details about each object. |
| `eps` | `table` |  |
| `flow` | `string` | The authentication `flow` of the source. |
| `giropay` | `table` |  |
| `has_more` | `boolean` | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | Unique identifier for the object. |
| `ideal` | `table` |  |
| `klarna` | `table` |  |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `multibanco` | `table` |  |
| `object` | `string` | String representing the object's type. |
| `owner` | `any` | Information about the owner of the payment instrument that may be used or required by particular source types. |
| `p24` | `table` |  |
| `receiver` | `table` |  |
| `redirect` | `table` |  |
| `sepa_debit` | `table` |  |
| `sofort` | `table` |  |
| `source_order` | `table` |  |
| `statement_descriptor` | `string` | Extra information about a source. |
| `status` | `string` | The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. |
| `three_d_secure` | `table` |  |
| `type` | `string` | The `type` of the source. |
| `url` | `string` | The URL where this list can be accessed. |
| `usage` | `string` | Either `reusable` or `single_use`. |
| `wechat` | `table` |  |

#### Example: Load

```lua
local source, err = client:Source():load({ id = "source_id" })
```

#### Example: List

```lua
local sources, err = client:Source():list()
```

#### Example: Create

```lua
local source, err = client:Source():create({
  id = "example_id", -- string
  client_secret = "example_client_secret", -- string
  code_verification = {}, -- table
  created = 1, -- number
  data = {}, -- table
  flow = "example_flow", -- string
  has_more = true, -- boolean
  livemode = true, -- boolean
  object = "example_object", -- string
  receiver = {}, -- table
  redirect = {}, -- table
  source_order = {}, -- table
  status = "example_status", -- string
  type = "example_type", -- string
  url = "example_url", -- string
})
```


### SourceMandateNotification

Create an instance: `local source_mandate_notification = client:SourceMandateNotification(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acss_debit` | `table` |  |
| `amount` | `number` | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. |
| `bacs_debit` | `table` |  |
| `created` | `number` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `reason` | `string` | The reason of the mandate notification. |
| `sepa_debit` | `table` |  |
| `source` | `table` | `Source` objects allow you to accept a variety of payment methods. |
| `status` | `string` | The status of the mandate notification. |
| `type` | `string` | The type of source this mandate notification is attached to. |

#### Example: Load

```lua
local source_mandate_notification, err = client:SourceMandateNotification():load({ id = "source_mandate_notification_id", source_id = "source_id" })
```


### SourceTransaction

Create an instance: `local source_transaction = client:SourceTransaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ach_credit_transfer` | `table` |  |
| `amount` | `number` | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver. |
| `chf_credit_transfer` | `table` |  |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `gbp_credit_transfer` | `table` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `paper_check` | `table` |  |
| `sepa_credit_transfer` | `table` |  |
| `source` | `string` | The ID of the source this transaction is attached to. |
| `status` | `string` | The status of the transaction, one of `succeeded`, `pending`, or `failed`. |
| `type` | `string` | The type of source this transaction is attached to. |

#### Example: Load

```lua
local source_transaction, err = client:SourceTransaction():load({ id = "source_transaction_id", source_id = "source_id" })
```

#### Example: List

```lua
local source_transactions, err = client:SourceTransaction():list()
```


### Subscription

Create an instance: `local subscription = client:Subscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `any` | ID of the Connect Application that created the subscription. |
| `application_fee_percent` | `number` | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `table` |  |
| `billing_cycle_anchor` | `number` | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `any` | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_mode` | `table` | The billing mode of the subscription. |
| `billing_schedules` | `table` | Billing schedules for this subscription. |
| `billing_thresholds` | `any` | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `cancel_at` | `number` | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | `boolean` | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | `number` | If the subscription has been canceled, the date of that cancellation. |
| `cancellation_details` | `any` | Details about why this subscription was cancelled |
| `collection_method` | `string` | Either `charge_automatically`, or `send_invoice`. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | ID of the customer who owns the subscription. |
| `customer_account` | `string` | ID of the account representing the customer who owns the subscription. |
| `days_until_due` | `number` | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | `any` | ID of the default payment method for the subscription. |
| `default_source` | `any` | ID of the default payment source for the subscription. |
| `default_tax_rates` | `table` | The tax rates that will apply to any subscription item that does not have `tax_rates` set. |
| `description` | `string` | The subscription's description, meant to be displayable to the customer. |
| `discounts` | `table` | The discounts applied to the subscription. |
| `ended_at` | `number` | If the subscription has ended, the date the subscription ended. |
| `id` | `string` | Unique identifier for the object. |
| `invoice_settings` | `table` |  |
| `items` | `table` | List of subscription items, each with an attached price. |
| `latest_invoice` | `any` | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | Settings for Managed Payments for this Subscription and resulting [Invoices](/api/invoices/object) and [PaymentIntents](/api/payment_intents/object). |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_pending_invoice_item_invoice` | `number` | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `object` | `string` | String representing the object's type. |
| `on_behalf_of` | `any` | The account (if any) the charge was made on behalf of for charges associated with this subscription. |
| `pause_collection` | `any` | If specified, payment collection for this subscription will be paused. |
| `payment_settings` | `any` | Payment settings passed on to invoices created by the subscription. |
| `pending_invoice_item_interval` | `any` | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `any` | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `any` | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `presentment_details` | `table` |  |
| `schedule` | `any` | The schedule attached to the subscription |
| `start_date` | `number` | Date when the subscription was first created. |
| `status` | `string` | Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`. |
| `status_details` | `table` | Describes changes to the subscription's status. |
| `test_clock` | `any` | ID of the test clock this subscription belongs to. |
| `transfer_data` | `any` | The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices. |
| `trial_end` | `number` | If the subscription has a trial, the end of that trial. |
| `trial_settings` | `any` | Settings related to subscription trials. |
| `trial_start` | `number` | If the subscription has a trial, the beginning of that trial. |

#### Example: Load

```lua
local subscription, err = client:Subscription():load({ id = "subscription_id" })
```

#### Example: List

```lua
local subscriptions, err = client:Subscription():list()
```

#### Example: Create

```lua
local subscription, err = client:Subscription():create({
  id = "example_id", -- string
  automatic_tax = {}, -- table
  billing_cycle_anchor = 1, -- number
  billing_mode = {}, -- table
  billing_schedules = {}, -- table
  cancel_at_period_end = true, -- boolean
  collection_method = "example_collection_method", -- string
  created = 1, -- number
  currency = "example_currency", -- string
  customer = "example_customer", -- any
  discounts = {}, -- table
  invoice_settings = {}, -- table
  items = {}, -- table
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  presentment_details = {}, -- table
  start_date = 1, -- number
  status = "example_status", -- string
  status_details = {}, -- table
})
```


### SubscriptionItem

Create an instance: `local subscription_item = client:SubscriptionItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billed_until` | `number` | The time period the subscription item has been billed for. |
| `billing_thresholds` | `any` | Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period |
| `created` | `number` | Time at which the object was created. |
| `current_period_end` | `number` | The end time of this subscription item's current billing period. |
| `current_period_start` | `number` | The start time of this subscription item's current billing period. |
| `current_trial` | `any` | The current trial that is applied to this subscription item. |
| `discounts` | `table` | The discounts applied to the subscription item. |
| `id` | `string` | Unique identifier for the object. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `price` | `table` | Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products. |
| `quantity` | `number` | The [quantity](https://docs.stripe.com/subscriptions/quantities) of the plan to which the customer should be subscribed. |
| `subscription` | `string` | The `subscription` this `subscription_item` belongs to. |
| `tax_rates` | `table` | The tax rates which apply to this `subscription_item`. |

#### Example: Load

```lua
local subscription_item, err = client:SubscriptionItem():load({ id = "subscription_item_id" })
```

#### Example: List

```lua
local subscription_items, err = client:SubscriptionItem():list()
```

#### Example: Create

```lua
local subscription_item, err = client:SubscriptionItem():create({
  id = "example_id", -- string
  created = 1, -- number
  current_period_end = 1, -- number
  current_period_start = 1, -- number
  discounts = {}, -- table
  metadata = {}, -- table
  object = "example_object", -- string
  price = {}, -- table
  subscription = "example_subscription", -- string
})
```


### SubscriptionSchedule

Create an instance: `local subscription_schedule = client:SubscriptionSchedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `any` | ID of the Connect Application that created the schedule. |
| `billing_mode` | `table` | The billing mode of the subscription. |
| `canceled_at` | `number` | Time at which the subscription schedule was canceled. |
| `completed_at` | `number` | Time at which the subscription schedule was completed. |
| `created` | `number` | Time at which the object was created. |
| `current_phase` | `any` | Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`. |
| `customer` | `any` | ID of the customer who owns the subscription schedule. |
| `customer_account` | `string` | ID of the account who owns the subscription schedule. |
| `default_settings` | `table` |  |
| `end_behavior` | `string` | Behavior of the subscription schedule and underlying subscription when it ends. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `pause_schedules` | `table` | The pause schedules for this subscription schedule. |
| `phases` | `table` | Configuration for the subscription schedule's phases. |
| `released_at` | `number` | Time at which the subscription schedule was released. |
| `released_subscription` | `string` | ID of the subscription once managed by the subscription schedule (if it is released). |
| `status` | `string` | The present status of the subscription schedule. |
| `subscription` | `any` | ID of the subscription managed by the subscription schedule. |
| `test_clock` | `any` | ID of the test clock this subscription schedule belongs to. |

#### Example: Load

```lua
local subscription_schedule, err = client:SubscriptionSchedule():load({ id = "subscription_schedule_id" })
```

#### Example: List

```lua
local subscription_schedules, err = client:SubscriptionSchedule():list()
```

#### Example: Create

```lua
local subscription_schedule, err = client:SubscriptionSchedule():create({
  id = "example_id", -- string
  billing_mode = {}, -- table
  created = 1, -- number
  customer = "example_customer", -- any
  default_settings = {}, -- table
  end_behavior = "example_end_behavior", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  phases = {}, -- table
  status = "example_status", -- string
})
```


### Supplier

Create an instance: `local supplier = client:Supplier(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the object. |
| `info_url` | `string` | Link to a webpage to learn more about the supplier. |
| `livemode` | `boolean` | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `locations` | `table` | The locations in which this supplier operates. |
| `name` | `string` | Name of this carbon removal supplier. |
| `object` | `string` | String representing the object’s type. |
| `removal_pathway` | `string` | The scientific pathway used for carbon removal. |

#### Example: Load

```lua
local supplier, err = client:Supplier():load({ id = "supplier_id" })
```

#### Example: List

```lua
local suppliers, err = client:Supplier():list()
```


### TaxCode

Create an instance: `local tax_code = client:TaxCode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | A detailed description of which types of products the tax code represents. |
| `id` | `string` | Unique identifier for the object. |
| `name` | `string` | A short name for the tax code. |
| `object` | `string` | String representing the object's type. |
| `requirements` | `any` | An object that describes more information about the tax location required for this tax code. |

#### Example: Load

```lua
local tax_code, err = client:TaxCode():load({ id = "tax_code_id" })
```

#### Example: List

```lua
local tax_codes, err = client:TaxCode():list()
```


### TaxId

Create an instance: `local tax_id = client:TaxId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country` | `string` | Two-letter ISO code representing the country of the tax ID. |
| `created` | `number` | Time at which the object was created. |
| `customer` | `any` | ID of the customer. |
| `customer_account` | `string` | ID of the Account representing the customer. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `owner` | `any` | The account or customer the tax ID belongs to. |
| `type` | `string` | Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`,… |
| `value` | `string` | Value of the tax ID. |
| `verification` | `any` | Tax ID verification information. |

#### Example: Load

```lua
local tax_id, err = client:TaxId():load({ id = "tax_id_id" })
```

#### Example: List

```lua
local tax_ids, err = client:TaxId():list()
```

#### Example: Create

```lua
local tax_id, err = client:TaxId():create({
  created = 1, -- number
  id = "example_id", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  type = "example_type", -- string
  value = "example_value", -- string
})
```


### TaxRate

Create an instance: `local tax_rate = client:TaxRate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Defaults to `true`. |
| `country` | `string` | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | `number` | Time at which the object was created. |
| `description` | `string` | An arbitrary string attached to the tax rate for your internal use only. |
| `display_name` | `string` | The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page. |
| `effective_percentage` | `number` | Actual/effective tax rate percentage out of 100. |
| `flat_amount` | `any` | The amount of the tax rate when the `rate_type` is `flat_amount`. |
| `id` | `string` | Unique identifier for the object. |
| `inclusive` | `boolean` | This specifies if the tax rate is inclusive or exclusive. |
| `jurisdiction` | `string` | The jurisdiction for the tax rate. |
| `jurisdiction_level` | `string` | The level of the jurisdiction that imposes this tax rate. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `percentage` | `number` | Tax rate percentage out of 100. |
| `rate_type` | `string` | Indicates the type of tax rate applied to the taxable amount. |
| `state` | `string` | [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. |
| `tax_type` | `string` | The high-level tax type, such as `vat` or `sales_tax`. |

#### Example: Load

```lua
local tax_rate, err = client:TaxRate():load({ id = "tax_rate_id" })
```

#### Example: List

```lua
local tax_rates, err = client:TaxRate():list()
```

#### Example: Create

```lua
local tax_rate, err = client:TaxRate():create({
  id = "example_id", -- string
  active = true, -- boolean
  created = 1, -- number
  display_name = "example_display_name", -- string
  inclusive = true, -- boolean
  livemode = true, -- boolean
  object = "example_object", -- string
  percentage = 1, -- number
})
```


### TestClock

Create an instance: `local test_clock = client:TestClock(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `advancing` | `table` |  |
| `created` | `number` | Time at which the object was created. |
| `deletes_after` | `number` | Time at which this clock is scheduled to auto delete. |
| `frozen_time` | `number` | Time at which all objects belonging to this clock are frozen. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `name` | `string` | The custom name supplied at creation. |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | The status of the Test Clock. |
| `status_details` | `table` |  |

#### Example: Load

```lua
local test_clock, err = client:TestClock():load({ id = "test_clock_id" })
```

#### Example: List

```lua
local test_clocks, err = client:TestClock():list()
```

#### Example: Create

```lua
local test_clock, err = client:TestClock():create({
  advancing = {}, -- table
  created = 1, -- number
  deletes_after = 1, -- number
  frozen_time = 1, -- number
  id = "example_id", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  status = "example_status", -- string
  status_details = {}, -- table
})
```


### Token

Create an instance: `local token = client:Token(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bank_account` | `table` | These bank accounts are payment methods on `Customer` objects. |
| `card` | `any` | Card associated with this token. |
| `client_ip` | `string` | IP address of the client that generates the token. |
| `created` | `number` | Time at which the object was created. |
| `device_fingerprint` | `string` | The hashed ID derived from the device ID from the card network associated with the token. |
| `id` | `string` | Unique identifier for the object. |
| `last4` | `string` | The last four digits of the token. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `network` | `string` | The token service provider / card network associated with the token. |
| `network_data` | `table` |  |
| `network_updated_at` | `number` | Time at which the token was last updated by the card network. |
| `object` | `string` | String representing the object's type. |
| `status` | `string` | The usage state of the token. |
| `type` | `string` | Type of the token: `account`, `bank_account`, `card`, or `pii`. |
| `used` | `boolean` | Determines if you have already used this token (you can only use tokens once). |
| `wallet_provider` | `string` | The digital wallet for this token, if one was used. |

#### Example: Load

```lua
local token, err = client:Token():load({ id = "token_id" })
```

#### Example: List

```lua
local tokens, err = client:Token():list()
```

#### Example: Create

```lua
local token, err = client:Token():create({
  id = "example_id", -- string
  bank_account = {}, -- table
  card = "example_card", -- any
  created = 1, -- number
  livemode = true, -- boolean
  network = "example_network", -- string
  network_data = {}, -- table
  network_updated_at = 1, -- number
  object = "example_object", -- string
  status = "example_status", -- string
  type = "example_type", -- string
  used = true, -- boolean
})
```


### Topup

Create an instance: `local topup = client:Topup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Amount transferred. |
| `balance_transaction` | `any` | ID of the balance transaction that describes the impact of this top-up on your account balance. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `expected_availability_date` | `number` | Date the funds are expected to arrive in your Stripe account for payouts. |
| `failure_code` | `string` | Error code explaining reason for top-up failure if available (see [the errors section](/api/errors) for a list of codes). |
| `failure_message` | `string` | Message to user further explaining reason for top-up failure if available. |
| `id` | `string` | Unique identifier for the object. |
| `initiated_by` | `string` | Indicates whether the top-up was initiated by Stripe or by the user. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `payment_method` | `any` | The ID of a PaymentMethod representing the payment method used for the top-up. |
| `payment_method_options` | `any` | Payment-method-specific configuration for this top-up. |
| `source` | `any` | The source field is deprecated. |
| `statement_descriptor` | `string` | Extra information about a top-up. |
| `status` | `string` | The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`. |
| `transfer_group` | `string` | A string that identifies this top-up as part of a group. |

#### Example: Load

```lua
local topup, err = client:Topup():load({ id = "topup_id" })
```

#### Example: List

```lua
local topups, err = client:Topup():list()
```

#### Example: Create

```lua
local topup, err = client:Topup():create({
  id = "example_id", -- string
  amount = 1, -- number
  created = 1, -- number
  currency = "example_currency", -- string
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  status = "example_status", -- string
})
```


### Transaction

Create an instance: `local transaction = client:Transaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | The ID of the Financial Connections Account this transaction belongs to. |
| `amount` | `number` | The transaction amount, which will be reflected in your balance. |
| `amount_details` | `any` | Detailed breakdown of amount components. |
| `authorization` | `any` | The `Authorization` object that led to this transaction. |
| `balance_impact` | `table` | Change to a FinancialAccount's balance |
| `balance_transaction` | `any` | ID of the [balance transaction](https://docs.stripe.com/api/balance_transactions) associated with this transaction. |
| `card` | `any` | The card used to make this transaction. |
| `cardholder` | `any` | The cardholder to whom this transaction belongs. |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `table` |  |
| `description` | `string` | An arbitrary string attached to the object. |
| `dispute` | `any` | If you've disputed the transaction, the ID of the dispute. |
| `entries` | `table` | A list of TransactionEntries that are part of this Transaction. |
| `financial_account` | `string` | The FinancialAccount associated with this object. |
| `flow` | `string` | ID of the flow that created the Transaction. |
| `flow_details` | `any` | Details of the flow that created the Transaction. |
| `flow_type` | `string` | Type of the flow that created the Transaction. |
| `id` | `string` | Unique identifier for the object. |
| `line_items` | `table` | The tax collected or refunded, by line item. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `number` | The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `merchant_currency` | `string` | The currency with which the merchant is taking payment. |
| `merchant_data` | `table` |  |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `any` | Details about the transaction, such as processing dates, set by the card network. |
| `object` | `string` | String representing the object's type. |
| `posted_at` | `number` | Time at which this transaction posted. |
| `purchase_details` | `any` | Additional purchase information that is optionally provided by the merchant. |
| `reference` | `string` | A custom unique identifier, such as 'myOrder_123'. |
| `reversal` | `any` | If `type=reversal`, contains information about what was reversed. |
| `ship_from_details` | `any` | The details of the ship from location, such as the address. |
| `shipping_cost` | `any` | The shipping cost details for the transaction. |
| `status` | `string` | Status of the Transaction. |
| `status_transitions` | `table` |  |
| `tax_date` | `number` | The calculation uses the tax rules and rates that are in effect at this timestamp. |
| `token` | `string` | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this transaction. |
| `transacted_at` | `number` | Time at which the transaction was transacted. |
| `transaction_refresh` | `string` | The token of the transaction refresh that last updated or created this transaction. |
| `treasury` | `any` | [Treasury](https://docs.stripe.com/api/treasury) details related to this transaction if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts |
| `type` | `string` | The nature of the transaction. |
| `updated` | `number` | Time at which the object was last updated. |
| `void_at` | `number` | Time at which this transaction was voided. |
| `wallet` | `string` | The digital wallet used for this transaction. |

#### Example: Load

```lua
local transaction, err = client:Transaction():load({ id = "transaction_id" })
```

#### Example: List

```lua
local transactions, err = client:Transaction():list()
```

#### Example: Create

```lua
local transaction, err = client:Transaction():create({
  id = "example_id", -- string
  account = "example_account", -- string
  amount = 1, -- number
  balance_impact = {}, -- table
  card = "example_card", -- any
  created = 1, -- number
  currency = "example_currency", -- string
  customer_details = {}, -- table
  description = "example_description", -- string
  entries = {}, -- table
  financial_account = "example_financial_account", -- string
  flow_type = "example_flow_type", -- string
  line_items = {}, -- table
  livemode = true, -- boolean
  merchant_amount = 1, -- number
  merchant_currency = "example_merchant_currency", -- string
  merchant_data = {}, -- table
  metadata = {}, -- table
  object = "example_object", -- string
  reference = "example_reference", -- string
  status = "example_status", -- string
  status_transitions = {}, -- table
  tax_date = 1, -- number
  transacted_at = 1, -- number
  transaction_refresh = "example_transaction_refresh", -- string
  type = "example_type", -- string
  updated = 1, -- number
})
```


### TransactionEntry

Create an instance: `local transaction_entry = client:TransactionEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `balance_impact` | `table` | Change to a FinancialAccount's balance |
| `created` | `number` | Time at which the object was created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `effective_at` | `number` | When the TransactionEntry will impact the FinancialAccount's balance. |
| `financial_account` | `string` | The FinancialAccount associated with this object. |
| `flow` | `string` | Token of the flow associated with the TransactionEntry. |
| `flow_details` | `any` | Details of the flow associated with the TransactionEntry. |
| `flow_type` | `string` | Type of the flow associated with the TransactionEntry. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `transaction` | `any` | The Transaction associated with this object. |
| `type` | `string` | The specific money movement that generated the TransactionEntry. |

#### Example: Load

```lua
local transaction_entry, err = client:TransactionEntry():load({ id = "transaction_entry_id" })
```

#### Example: List

```lua
local transaction_entrys, err = client:TransactionEntry():list()
```


### Transfer

Create an instance: `local transfer = client:Transfer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Amount in cents (or local equivalent) to be transferred. |
| `amount_reversed` | `number` | Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued). |
| `balance_transaction` | `any` | Balance transaction that describes the impact of this transfer on your account balance. |
| `created` | `number` | Time that this record of the transfer was first created. |
| `currency` | `string` | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | An arbitrary string attached to the object. |
| `destination` | `any` | ID of the Stripe account the transfer was sent to. |
| `destination_payment` | `any` | If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `reversals` | `table` | A list of reversals that have been applied to the transfer. |
| `reversed` | `boolean` | Whether the transfer has been fully reversed. |
| `source_transaction` | `any` | ID of the charge that was used to fund the transfer. |
| `source_type` | `string` | The source balance this transfer came from. |
| `transfer_group` | `string` | A string that identifies this transaction as part of a group. |

#### Example: Load

```lua
local transfer, err = client:Transfer():load({ id = "transfer_id" })
```

#### Example: List

```lua
local transfers, err = client:Transfer():list()
```

#### Example: Create

```lua
local transfer, err = client:Transfer():create({
  id = "example_id", -- string
  amount = 1, -- number
  amount_reversed = 1, -- number
  created = 1, -- number
  currency = "example_currency", -- string
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  reversals = {}, -- table
  reversed = true, -- boolean
})
```


### TrialOffer

Create an instance: `local trial_offer = client:TrialOffer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether the trial offer is active. |
| `duration` | `table` |  |
| `end_behavior` | `table` |  |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `nickname` | `string` | A brief description of the trial offer, hidden from customers. |
| `object` | `string` | String representing the object's type. |
| `price` | `number` | The price during the trial offer. |

#### Example: Load

```lua
local trial_offer, err = client:TrialOffer():load({ id = "trial_offer_id" })
```

#### Example: List

```lua
local trial_offers, err = client:TrialOffer():list()
```

#### Example: Create

```lua
local trial_offer, err = client:TrialOffer():create({
  id = "example_id", -- string
  active = true, -- boolean
  duration = {}, -- table
  end_behavior = {}, -- table
  livemode = true, -- boolean
  object = "example_object", -- string
  price = 1, -- number
})
```


### ValueList

Create an instance: `local value_list = client:ValueList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` | The name of the value list for use in rules. |
| `created` | `number` | Time at which the object was created. |
| `created_by` | `string` | The name or email address of the user who created this value list. |
| `id` | `string` | Unique identifier for the object. |
| `item_type` | `string` | The type of items in the value list. |
| `list_items` | `table` | List of items contained within this value list. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | The name of the value list. |
| `object` | `string` | String representing the object's type. |

#### Example: Load

```lua
local value_list, err = client:ValueList():load({ id = "value_list_id" })
```

#### Example: List

```lua
local value_lists, err = client:ValueList():list()
```

#### Example: Create

```lua
local value_list, err = client:ValueList():create({
  id = "example_id", -- string
  alias = "example_alias", -- string
  created = 1, -- number
  created_by = "example_created_by", -- string
  item_type = "example_item_type", -- string
  list_items = {}, -- table
  livemode = true, -- boolean
  metadata = {}, -- table
  name = "example_name", -- string
  object = "example_object", -- string
})
```


### ValueListItem

Create an instance: `local value_list_item = client:ValueListItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `number` | Time at which the object was created. |
| `created_by` | `string` | The name or email address of the user who added this item to the value list. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `value` | `string` | The value of the item. |
| `value_list` | `string` | The identifier of the value list this item belongs to. |

#### Example: Load

```lua
local value_list_item, err = client:ValueListItem():load({ id = "value_list_item_id" })
```

#### Example: List

```lua
local value_list_items, err = client:ValueListItem():list()
```

#### Example: Create

```lua
local value_list_item, err = client:ValueListItem():create({
  created = 1, -- number
  created_by = "example_created_by", -- string
  id = "example_id", -- string
  livemode = true, -- boolean
  object = "example_object", -- string
  value = "example_value", -- string
  value_list = "example_value_list", -- string
})
```


### VerificationReport

Create an instance: `local verification_report = client:VerificationReport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_reference_id` | `string` | A string to reference this user. |
| `created` | `number` | Time at which the object was created. |
| `document` | `table` | Result from a document check |
| `email` | `table` | Result from a email check |
| `id` | `string` | Unique identifier for the object. |
| `id_number` | `table` | Result from an id_number check |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `object` | `string` | String representing the object's type. |
| `options` | `table` |  |
| `phone` | `table` | Result from a phone check |
| `selfie` | `table` | Result from a selfie check |
| `type` | `string` | Type of report. |
| `verification_flow` | `string` | The configuration token of a verification flow from the dashboard. |
| `verification_session` | `string` | ID of the VerificationSession that created this report. |

#### Example: Load

```lua
local verification_report, err = client:VerificationReport():load({ id = "verification_report_id" })
```

#### Example: List

```lua
local verification_reports, err = client:VerificationReport():list()
```


### VerificationSession

Create an instance: `local verification_session = client:VerificationSession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_reference_id` | `string` | A string to reference this user. |
| `client_secret` | `string` | The short-lived client secret used by Stripe.js to [show a verification modal](https://docs.stripe.com/js/identity/modal) inside your app. |
| `created` | `number` | Time at which the object was created. |
| `id` | `string` | Unique identifier for the object. |
| `last_error` | `any` | If present, this property tells you the last error encountered when processing the verification. |
| `last_verification_report` | `any` | ID of the most recent VerificationReport. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `options` | `any` | A set of options for the session’s verification checks. |
| `provided_details` | `any` | Details provided about the user being verified. |
| `redaction` | `any` | Redaction status of this VerificationSession. |
| `related_customer` | `string` | Customer ID |
| `related_customer_account` | `string` | The ID of the Account representing a customer. |
| `related_person` | `table` |  |
| `status` | `string` | Status of this VerificationSession. |
| `type` | `string` | The type of [verification check](https://docs.stripe.com/identity/verification-checks) to be performed. |
| `url` | `string` | The short-lived URL that you use to redirect a user to Stripe to submit their identity information. |
| `verification_flow` | `string` | The configuration token of a verification flow from the dashboard. |
| `verified_outputs` | `any` | The user’s verified data. |

#### Example: Load

```lua
local verification_session, err = client:VerificationSession():load({ id = "verification_session_id" })
```

#### Example: List

```lua
local verification_sessions, err = client:VerificationSession():list()
```

#### Example: Create

```lua
local verification_session, err = client:VerificationSession():create({
  id = "example_id", -- string
  created = 1, -- number
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  related_person = {}, -- table
  status = "example_status", -- string
  type = "example_type", -- string
})
```


### WebhookEndpoint

Create an instance: `local webhook_endpoint = client:WebhookEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_version` | `string` | The API version that events are rendered as for this webhook endpoint. |
| `application` | `string` | The ID of the associated Connect application. |
| `created` | `number` | Time at which the object was created. |
| `description` | `string` | An optional description of what the webhook is used for. |
| `enabled_events` | `table` | The list of events to enable for this endpoint. |
| `id` | `string` | Unique identifier for the object. |
| `livemode` | `boolean` | If the object exists in live mode, the value is `true`. |
| `metadata` | `table` | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | String representing the object's type. |
| `secret` | `string` | The endpoint's secret, used to generate [webhook signatures](https://docs.stripe.com/webhooks/signatures). |
| `status` | `string` | The status of the webhook. |
| `url` | `string` | The URL of the webhook endpoint. |

#### Example: Load

```lua
local webhook_endpoint, err = client:WebhookEndpoint():load({ id = "webhook_endpoint_id" })
```

#### Example: List

```lua
local webhook_endpoints, err = client:WebhookEndpoint():list()
```

#### Example: Create

```lua
local webhook_endpoint, err = client:WebhookEndpoint():create({
  id = "example_id", -- string
  created = 1, -- number
  enabled_events = {}, -- table
  livemode = true, -- boolean
  metadata = {}, -- table
  object = "example_object", -- string
  status = "example_status", -- string
  url = "example_url", -- string
})
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

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

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── stripe_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`stripe_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local calculation = client:Calculation()
calculation:load({ id = "example_id" })

-- calculation:data_get() now returns the calculation data from the last load
-- calculation:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
