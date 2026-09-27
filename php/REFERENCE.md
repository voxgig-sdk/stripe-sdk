# Stripe PHP SDK Reference

Complete API reference for the Stripe PHP SDK.


## StripeSDK

### Constructor

```php
require_once __DIR__ . '/stripe_sdk.php';

$client = new StripeSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `StripeSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = StripeSDK::test();
```


### Instance Methods

#### `Account($data = null)`

Create a new `AccountEntity` instance. Pass `null` for no initial data.

#### `AccountLink($data = null)`

Create a new `AccountLinkEntity` instance. Pass `null` for no initial data.

#### `AccountOwner($data = null)`

Create a new `AccountOwnerEntity` instance. Pass `null` for no initial data.

#### `AccountSession($data = null)`

Create a new `AccountSessionEntity` instance. Pass `null` for no initial data.

#### `ActiveEntitlement($data = null)`

Create a new `ActiveEntitlementEntity` instance. Pass `null` for no initial data.

#### `Alert($data = null)`

Create a new `AlertEntity` instance. Pass `null` for no initial data.

#### `ApplePayDomain($data = null)`

Create a new `ApplePayDomainEntity` instance. Pass `null` for no initial data.

#### `ApplicationFee($data = null)`

Create a new `ApplicationFeeEntity` instance. Pass `null` for no initial data.

#### `Association($data = null)`

Create a new `AssociationEntity` instance. Pass `null` for no initial data.

#### `Authentication($data = null)`

Create a new `AuthenticationEntity` instance. Pass `null` for no initial data.

#### `Authorization($data = null)`

Create a new `AuthorizationEntity` instance. Pass `null` for no initial data.

#### `Balance($data = null)`

Create a new `BalanceEntity` instance. Pass `null` for no initial data.

#### `BalanceSetting($data = null)`

Create a new `BalanceSettingEntity` instance. Pass `null` for no initial data.

#### `BalanceTransaction($data = null)`

Create a new `BalanceTransactionEntity` instance. Pass `null` for no initial data.

#### `BankAccount($data = null)`

Create a new `BankAccountEntity` instance. Pass `null` for no initial data.

#### `Calculation($data = null)`

Create a new `CalculationEntity` instance. Pass `null` for no initial data.

#### `Capability($data = null)`

Create a new `CapabilityEntity` instance. Pass `null` for no initial data.

#### `Card($data = null)`

Create a new `CardEntity` instance. Pass `null` for no initial data.

#### `Cardholder($data = null)`

Create a new `CardholderEntity` instance. Pass `null` for no initial data.

#### `CashBalance($data = null)`

Create a new `CashBalanceEntity` instance. Pass `null` for no initial data.

#### `CashBalanceTransaction($data = null)`

Create a new `CashBalanceTransactionEntity` instance. Pass `null` for no initial data.

#### `Charge($data = null)`

Create a new `ChargeEntity` instance. Pass `null` for no initial data.

#### `Configuration($data = null)`

Create a new `ConfigurationEntity` instance. Pass `null` for no initial data.

#### `ConfirmationToken($data = null)`

Create a new `ConfirmationTokenEntity` instance. Pass `null` for no initial data.

#### `ConnectionToken($data = null)`

Create a new `ConnectionTokenEntity` instance. Pass `null` for no initial data.

#### `CountrySpec($data = null)`

Create a new `CountrySpecEntity` instance. Pass `null` for no initial data.

#### `Coupon($data = null)`

Create a new `CouponEntity` instance. Pass `null` for no initial data.

#### `CreditBalanceSummary($data = null)`

Create a new `CreditBalanceSummaryEntity` instance. Pass `null` for no initial data.

#### `CreditBalanceTransaction($data = null)`

Create a new `CreditBalanceTransactionEntity` instance. Pass `null` for no initial data.

#### `CreditGrant($data = null)`

Create a new `CreditGrantEntity` instance. Pass `null` for no initial data.

#### `CreditNote($data = null)`

Create a new `CreditNoteEntity` instance. Pass `null` for no initial data.

#### `CreditNoteLine($data = null)`

Create a new `CreditNoteLineEntity` instance. Pass `null` for no initial data.

#### `CreditReversal($data = null)`

Create a new `CreditReversalEntity` instance. Pass `null` for no initial data.

#### `Customer($data = null)`

Create a new `CustomerEntity` instance. Pass `null` for no initial data.

#### `CustomerBalanceTransaction($data = null)`

Create a new `CustomerBalanceTransactionEntity` instance. Pass `null` for no initial data.

#### `CustomerSession($data = null)`

Create a new `CustomerSessionEntity` instance. Pass `null` for no initial data.

#### `DebitReversal($data = null)`

Create a new `DebitReversalEntity` instance. Pass `null` for no initial data.

#### `DeletedAccount($data = null)`

Create a new `DeletedAccountEntity` instance. Pass `null` for no initial data.

#### `DeletedApplePayDomain($data = null)`

Create a new `DeletedApplePayDomainEntity` instance. Pass `null` for no initial data.

#### `DeletedCoupon($data = null)`

Create a new `DeletedCouponEntity` instance. Pass `null` for no initial data.

#### `DeletedExternalAccount($data = null)`

Create a new `DeletedExternalAccountEntity` instance. Pass `null` for no initial data.

#### `DeletedInvoiceitem($data = null)`

Create a new `DeletedInvoiceitemEntity` instance. Pass `null` for no initial data.

#### `DeletedPerson($data = null)`

Create a new `DeletedPersonEntity` instance. Pass `null` for no initial data.

#### `DeletedPlan($data = null)`

Create a new `DeletedPlanEntity` instance. Pass `null` for no initial data.

#### `DeletedProductFeature($data = null)`

Create a new `DeletedProductFeatureEntity` instance. Pass `null` for no initial data.

#### `DeletedSubscriptionItem($data = null)`

Create a new `DeletedSubscriptionItemEntity` instance. Pass `null` for no initial data.

#### `DeletedWebhookEndpoint($data = null)`

Create a new `DeletedWebhookEndpointEntity` instance. Pass `null` for no initial data.

#### `Discount($data = null)`

Create a new `DiscountEntity` instance. Pass `null` for no initial data.

#### `Dispute($data = null)`

Create a new `DisputeEntity` instance. Pass `null` for no initial data.

#### `Domain($data = null)`

Create a new `DomainEntity` instance. Pass `null` for no initial data.

#### `EarlyFraudWarning($data = null)`

Create a new `EarlyFraudWarningEntity` instance. Pass `null` for no initial data.

#### `EphemeralKey($data = null)`

Create a new `EphemeralKeyEntity` instance. Pass `null` for no initial data.

#### `Event($data = null)`

Create a new `EventEntity` instance. Pass `null` for no initial data.

#### `ExchangeRate($data = null)`

Create a new `ExchangeRateEntity` instance. Pass `null` for no initial data.

#### `ExternalAccount($data = null)`

Create a new `ExternalAccountEntity` instance. Pass `null` for no initial data.

#### `Feature($data = null)`

Create a new `FeatureEntity` instance. Pass `null` for no initial data.

#### `FeedbackOption($data = null)`

Create a new `FeedbackOptionEntity` instance. Pass `null` for no initial data.

#### `File($data = null)`

Create a new `FileEntity` instance. Pass `null` for no initial data.

#### `FileLink($data = null)`

Create a new `FileLinkEntity` instance. Pass `null` for no initial data.

#### `FinancialAccount($data = null)`

Create a new `FinancialAccountEntity` instance. Pass `null` for no initial data.

#### `FinancialAccountFeature($data = null)`

Create a new `FinancialAccountFeatureEntity` instance. Pass `null` for no initial data.

#### `FundCashBalance($data = null)`

Create a new `FundCashBalanceEntity` instance. Pass `null` for no initial data.

#### `FundingInstruction($data = null)`

Create a new `FundingInstructionEntity` instance. Pass `null` for no initial data.

#### `History($data = null)`

Create a new `HistoryEntity` instance. Pass `null` for no initial data.

#### `InboundTransfer($data = null)`

Create a new `InboundTransferEntity` instance. Pass `null` for no initial data.

#### `Install($data = null)`

Create a new `InstallEntity` instance. Pass `null` for no initial data.

#### `Invoice($data = null)`

Create a new `InvoiceEntity` instance. Pass `null` for no initial data.

#### `InvoicePayment($data = null)`

Create a new `InvoicePaymentEntity` instance. Pass `null` for no initial data.

#### `InvoiceRenderingTemplate($data = null)`

Create a new `InvoiceRenderingTemplateEntity` instance. Pass `null` for no initial data.

#### `Invoiceitem($data = null)`

Create a new `InvoiceitemEntity` instance. Pass `null` for no initial data.

#### `Line($data = null)`

Create a new `LineEntity` instance. Pass `null` for no initial data.

#### `LineItem($data = null)`

Create a new `LineItemEntity` instance. Pass `null` for no initial data.

#### `LinkedAccount($data = null)`

Create a new `LinkedAccountEntity` instance. Pass `null` for no initial data.

#### `LinkedAccountOwner($data = null)`

Create a new `LinkedAccountOwnerEntity` instance. Pass `null` for no initial data.

#### `Location($data = null)`

Create a new `LocationEntity` instance. Pass `null` for no initial data.

#### `LoginLink($data = null)`

Create a new `LoginLinkEntity` instance. Pass `null` for no initial data.

#### `Mandate($data = null)`

Create a new `MandateEntity` instance. Pass `null` for no initial data.

#### `Meter($data = null)`

Create a new `MeterEntity` instance. Pass `null` for no initial data.

#### `MeterEvent($data = null)`

Create a new `MeterEventEntity` instance. Pass `null` for no initial data.

#### `MeterEventAdjustment($data = null)`

Create a new `MeterEventAdjustmentEntity` instance. Pass `null` for no initial data.

#### `MeterEventSummary($data = null)`

Create a new `MeterEventSummaryEntity` instance. Pass `null` for no initial data.

#### `OnboardingLink($data = null)`

Create a new `OnboardingLinkEntity` instance. Pass `null` for no initial data.

#### `Order($data = null)`

Create a new `OrderEntity` instance. Pass `null` for no initial data.

#### `OutboundPayment($data = null)`

Create a new `OutboundPaymentEntity` instance. Pass `null` for no initial data.

#### `OutboundTransfer($data = null)`

Create a new `OutboundTransferEntity` instance. Pass `null` for no initial data.

#### `PaymentAttemptRecord($data = null)`

Create a new `PaymentAttemptRecordEntity` instance. Pass `null` for no initial data.

#### `PaymentEvaluation($data = null)`

Create a new `PaymentEvaluationEntity` instance. Pass `null` for no initial data.

#### `PaymentIntent($data = null)`

Create a new `PaymentIntentEntity` instance. Pass `null` for no initial data.

#### `PaymentIntentAmountDetailsLineItem($data = null)`

Create a new `PaymentIntentAmountDetailsLineItemEntity` instance. Pass `null` for no initial data.

#### `PaymentLink($data = null)`

Create a new `PaymentLinkEntity` instance. Pass `null` for no initial data.

#### `PaymentMethod($data = null)`

Create a new `PaymentMethodEntity` instance. Pass `null` for no initial data.

#### `PaymentMethodConfiguration($data = null)`

Create a new `PaymentMethodConfigurationEntity` instance. Pass `null` for no initial data.

#### `PaymentMethodDomain($data = null)`

Create a new `PaymentMethodDomainEntity` instance. Pass `null` for no initial data.

#### `PaymentRecord($data = null)`

Create a new `PaymentRecordEntity` instance. Pass `null` for no initial data.

#### `Payout($data = null)`

Create a new `PayoutEntity` instance. Pass `null` for no initial data.

#### `Person($data = null)`

Create a new `PersonEntity` instance. Pass `null` for no initial data.

#### `PersonalizationDesign($data = null)`

Create a new `PersonalizationDesignEntity` instance. Pass `null` for no initial data.

#### `PhysicalBundle($data = null)`

Create a new `PhysicalBundleEntity` instance. Pass `null` for no initial data.

#### `Plan($data = null)`

Create a new `PlanEntity` instance. Pass `null` for no initial data.

#### `Price($data = null)`

Create a new `PriceEntity` instance. Pass `null` for no initial data.

#### `Product($data = null)`

Create a new `ProductEntity` instance. Pass `null` for no initial data.

#### `ProductFeature($data = null)`

Create a new `ProductFeatureEntity` instance. Pass `null` for no initial data.

#### `PromotionCode($data = null)`

Create a new `PromotionCodeEntity` instance. Pass `null` for no initial data.

#### `Quote($data = null)`

Create a new `QuoteEntity` instance. Pass `null` for no initial data.

#### `QuoteComputedUpfrontLineItem($data = null)`

Create a new `QuoteComputedUpfrontLineItemEntity` instance. Pass `null` for no initial data.

#### `QuotePdf($data = null)`

Create a new `QuotePdfEntity` instance. Pass `null` for no initial data.

#### `Reader($data = null)`

Create a new `ReaderEntity` instance. Pass `null` for no initial data.

#### `ReceivedCredit($data = null)`

Create a new `ReceivedCreditEntity` instance. Pass `null` for no initial data.

#### `ReceivedDebit($data = null)`

Create a new `ReceivedDebitEntity` instance. Pass `null` for no initial data.

#### `Refund($data = null)`

Create a new `RefundEntity` instance. Pass `null` for no initial data.

#### `Registration($data = null)`

Create a new `RegistrationEntity` instance. Pass `null` for no initial data.

#### `ReportRun($data = null)`

Create a new `ReportRunEntity` instance. Pass `null` for no initial data.

#### `ReportType($data = null)`

Create a new `ReportTypeEntity` instance. Pass `null` for no initial data.

#### `Request($data = null)`

Create a new `RequestEntity` instance. Pass `null` for no initial data.

#### `Reversal($data = null)`

Create a new `ReversalEntity` instance. Pass `null` for no initial data.

#### `Review($data = null)`

Create a new `ReviewEntity` instance. Pass `null` for no initial data.

#### `ScheduledQueryRun($data = null)`

Create a new `ScheduledQueryRunEntity` instance. Pass `null` for no initial data.

#### `Search($data = null)`

Create a new `SearchEntity` instance. Pass `null` for no initial data.

#### `Secret($data = null)`

Create a new `SecretEntity` instance. Pass `null` for no initial data.

#### `Session($data = null)`

Create a new `SessionEntity` instance. Pass `null` for no initial data.

#### `Setting($data = null)`

Create a new `SettingEntity` instance. Pass `null` for no initial data.

#### `Settlement($data = null)`

Create a new `SettlementEntity` instance. Pass `null` for no initial data.

#### `SetupAttempt($data = null)`

Create a new `SetupAttemptEntity` instance. Pass `null` for no initial data.

#### `SetupIntent($data = null)`

Create a new `SetupIntentEntity` instance. Pass `null` for no initial data.

#### `ShippingRate($data = null)`

Create a new `ShippingRateEntity` instance. Pass `null` for no initial data.

#### `SigmaApiQuery($data = null)`

Create a new `SigmaApiQueryEntity` instance. Pass `null` for no initial data.

#### `Source($data = null)`

Create a new `SourceEntity` instance. Pass `null` for no initial data.

#### `SourceMandateNotification($data = null)`

Create a new `SourceMandateNotificationEntity` instance. Pass `null` for no initial data.

#### `SourceTransaction($data = null)`

Create a new `SourceTransactionEntity` instance. Pass `null` for no initial data.

#### `Subscription($data = null)`

Create a new `SubscriptionEntity` instance. Pass `null` for no initial data.

#### `SubscriptionItem($data = null)`

Create a new `SubscriptionItemEntity` instance. Pass `null` for no initial data.

#### `SubscriptionSchedule($data = null)`

Create a new `SubscriptionScheduleEntity` instance. Pass `null` for no initial data.

#### `Supplier($data = null)`

Create a new `SupplierEntity` instance. Pass `null` for no initial data.

#### `TaxCode($data = null)`

Create a new `TaxCodeEntity` instance. Pass `null` for no initial data.

#### `TaxId($data = null)`

Create a new `TaxIdEntity` instance. Pass `null` for no initial data.

#### `TaxRate($data = null)`

Create a new `TaxRateEntity` instance. Pass `null` for no initial data.

#### `TestClock($data = null)`

Create a new `TestClockEntity` instance. Pass `null` for no initial data.

#### `Token($data = null)`

Create a new `TokenEntity` instance. Pass `null` for no initial data.

#### `Topup($data = null)`

Create a new `TopupEntity` instance. Pass `null` for no initial data.

#### `Transaction($data = null)`

Create a new `TransactionEntity` instance. Pass `null` for no initial data.

#### `TransactionEntry($data = null)`

Create a new `TransactionEntryEntity` instance. Pass `null` for no initial data.

#### `Transfer($data = null)`

Create a new `TransferEntity` instance. Pass `null` for no initial data.

#### `TrialOffer($data = null)`

Create a new `TrialOfferEntity` instance. Pass `null` for no initial data.

#### `ValueList($data = null)`

Create a new `ValueListEntity` instance. Pass `null` for no initial data.

#### `ValueListItem($data = null)`

Create a new `ValueListItemEntity` instance. Pass `null` for no initial data.

#### `VerificationReport($data = null)`

Create a new `VerificationReportEntity` instance. Pass `null` for no initial data.

#### `VerificationSession($data = null)`

Create a new `VerificationSessionEntity` instance. Pass `null` for no initial data.

#### `WebhookEndpoint($data = null)`

Create a new `WebhookEndpointEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): StripeUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AccountEntity

```php
$account = $client->Account();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `mixed` | No | The account holder that this account belongs to. |
| `account_numbers` | `array` | No | Details about the account numbers. |
| `balance` | `mixed` | No | The most recent information about the account's balance. |
| `balance_refresh` | `mixed` | No | The state of the most recent attempt to refresh the account balance. |
| `business_profile` | `mixed` | No | Business information about the account. |
| `business_type` | `string` | No | The business type. |
| `capabilities` | `array` | No |  |
| `category` | `string` | Yes | The type of the account. |
| `charges_enabled` | `bool` | No | Whether the account can process charges. |
| `company` | `array` | No |  |
| `controller` | `array` | Yes |  |
| `country` | `string` | No | The account's country. |
| `created` | `int` | Yes | Time at which the object was created. |
| `default_currency` | `string` | No | Three-letter ISO currency code representing the default currency for the account. |
| `details_submitted` | `bool` | No | Whether account details have been submitted. |
| `display_name` | `string` | No | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `email` | `string` | No | An email address associated with the account. |
| `external_accounts` | `array` | Yes | External accounts (bank accounts and debit cards) currently attached to this account. |
| `future_requirements` | `array` | No |  |
| `groups` | `mixed` | No | The groups associated with the account. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `individual` | `array` | Yes | This is an object representing a person associated with a Stripe account. |
| `institution_name` | `string` | Yes | The name of the institution that holds this account. |
| `last4` | `string` | No | The last 4 digits of the account number. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `ownership` | `mixed` | No | The most recent information about the account's owners. |
| `ownership_refresh` | `mixed` | No | The state of the most recent attempt to refresh the account owners. |
| `payouts_enabled` | `bool` | No | Whether the funds in this account can be paid out. |
| `permissions` | `array` | No | The list of permissions granted by this account. |
| `requirements` | `array` | No |  |
| `settings` | `mixed` | No | Options for customizing how the account functions within Stripe. |
| `status` | `string` | Yes | The status of the link to the account. |
| `status_details` | `array` | No |  |
| `subcategory` | `string` | Yes | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `array` | No | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `array` | Yes | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `tos_acceptance` | `array` | No |  |
| `transaction_refresh` | `mixed` | No | The state of the most recent attempt to refresh the account transactions. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Account()->create([
  "id" => null, // string
  "category" => null, // string
  "controller" => null, // array
  "created" => null, // int
  "external_accounts" => null, // array
  "individual" => null, // array
  "institution_name" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "status" => null, // string
  "subcategory" => null, // string
  "supported_payment_method_types" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Account()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Account()->load(["account" => "account"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountEntity`

Create a new `AccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AccountLinkEntity

```php
$account_link = $client->AccountLink();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `expires_at` | `int` | Yes | The timestamp at which this account link will expire. |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | Yes | The URL for the account link. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AccountLink()->create([
  "created" => null, // int
  "expires_at" => null, // int
  "object" => null, // string
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountLinkEntity`

Create a new `AccountLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AccountOwnerEntity

```php
$account_owner = $client->AccountOwner();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AccountOwner()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountOwnerEntity`

Create a new `AccountOwnerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AccountSessionEntity

```php
$account_session = $client->AccountSession();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_management` | `array` | Yes |  |
| `account_onboarding` | `array` | Yes |  |
| `balance_report` | `array` | Yes |  |
| `balances` | `array` | Yes |  |
| `disputes_list` | `array` | Yes |  |
| `documents` | `array` | Yes |  |
| `financial_account` | `array` | Yes |  |
| `financial_account_transactions` | `array` | Yes |  |
| `instant_payouts_promotion` | `array` | Yes |  |
| `issuing_card` | `array` | Yes |  |
| `issuing_cards_list` | `array` | Yes |  |
| `notification_banner` | `array` | Yes |  |
| `payment_details` | `array` | Yes |  |
| `payment_disputes` | `array` | Yes |  |
| `payment_method_settings` | `array` | Yes |  |
| `payments` | `array` | Yes |  |
| `payout_details` | `array` | Yes |  |
| `payout_reconciliation_report` | `array` | Yes |  |
| `payouts` | `array` | Yes |  |
| `payouts_list` | `array` | Yes |  |
| `tax_registrations` | `array` | Yes |  |
| `tax_settings` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AccountSession()->create([
  "account_management" => null, // array
  "account_onboarding" => null, // array
  "balance_report" => null, // array
  "balances" => null, // array
  "disputes_list" => null, // array
  "documents" => null, // array
  "financial_account" => null, // array
  "financial_account_transactions" => null, // array
  "instant_payouts_promotion" => null, // array
  "issuing_card" => null, // array
  "issuing_cards_list" => null, // array
  "notification_banner" => null, // array
  "payment_details" => null, // array
  "payment_disputes" => null, // array
  "payment_method_settings" => null, // array
  "payments" => null, // array
  "payout_details" => null, // array
  "payout_reconciliation_report" => null, // array
  "payouts" => null, // array
  "payouts_list" => null, // array
  "tax_registrations" => null, // array
  "tax_settings" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountSessionEntity`

Create a new `AccountSessionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActiveEntitlementEntity

```php
$active_entitlement = $client->ActiveEntitlement();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `feature` | `mixed` | Yes | The [Feature](https://docs.stripe.com/api/entitlements/feature) that the customer is entitled to. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | Yes | A unique key you provide as your own system identifier. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ActiveEntitlement()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActiveEntitlement()->load(["id" => "active_entitlement_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActiveEntitlementEntity`

Create a new `ActiveEntitlementEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertEntity

```php
$alert = $client->Alert();
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
| `usage_threshold` | `mixed` | No | Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://docs.stripe.com/api/billing/meter). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Alert()->create([
  "alert_type" => null, // string
  "id" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "title" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Alert()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Alert()->load(["id" => "alert_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertEntity`

Create a new `AlertEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApplePayDomainEntity

```php
$apple_pay_domain = $client->ApplePayDomain();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApplePayDomain()->create([
  "created" => null, // int
  "domain_name" => null, // string
  "id" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApplePayDomain()->load(["id" => "apple_pay_domain_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApplePayDomainEntity`

Create a new `ApplePayDomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApplicationFeeEntity

```php
$application_fee = $client->ApplicationFee();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `mixed` | Yes | ID of the Stripe account this fee was taken from. |
| `amount` | `int` | Yes | Amount earned, in cents (or local equivalent). |
| `amount_refunded` | `int` | Yes | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued) |
| `application` | `mixed` | Yes | ID of the Connect application that earned the fee. |
| `balance_transaction` | `mixed` | No | Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds). |
| `charge` | `mixed` | Yes | ID of the charge that the application fee was taken from. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `fee_source` | `mixed` | No | Polymorphic source of the application fee. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `originating_transaction` | `mixed` | No | ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter. |
| `refunded` | `bool` | Yes | Whether the fee has been fully refunded. |
| `refunds` | `array` | Yes | A list of refunds that have been applied to the fee. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApplicationFee()->create([
  "id" => null, // string
  "account" => null, // mixed
  "amount" => null, // int
  "amount_refunded" => null, // int
  "application" => null, // mixed
  "charge" => null, // mixed
  "created" => null, // int
  "currency" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "refunded" => null, // bool
  "refunds" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApplicationFee()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApplicationFee()->load(["id" => "application_fee_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApplicationFeeEntity`

Create a new `ApplicationFeeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AssociationEntity

```php
$association = $client->Association();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Association()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AssociationEntity`

Create a new `AssociationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuthenticationEntity

```php
$authentication = $client->Authentication();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquirer_details` | `array` | No | Contains additional details about the acquirer for a 3DS Authentication. |
| `amount` | `int` | No | The amount for this 3DS Authentication. |
| `challenge_url` | `string` | No | The URL for presenting a challenge to your cardholder, present if status is requires_challenge. |
| `channel` | `array` | Yes | Contains details on the channel used (browser, 3RI) for a standalone 3DS Authentication. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `directory_server` | `string` | Yes | The 3DS directory server with which this 3DS Authentication was processed. |
| `fingerprinting_url` | `string` | No | The URL for performing issuer fingerprinting, present if fingerprinting is supported for the given payment method. |
| `flow_preference` | `array` | Yes | Contains details of the flow preference used for a standalone 3DS Authentication. |
| `future_usage` | `array` | Yes | Contains information about the future authorisations related to this authentication |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `message_category` | `string` | Yes | Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `outcome` | `string` | No | The outcome of this 3DS Authentication. |
| `outcome_details` | `array` | Yes | Contains details on the result for a standalone 3DS Authentication. |
| `payment_method` | `mixed` | Yes | ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication. |
| `reason` | `string` | No | The reason for invoking this 3DS Authentication. |
| `shipping_address` | `array` | No | Contains details about the shipping address for a 3DS Authentication. |
| `status` | `string` | Yes | Status of this Authentication. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Authentication()->create([
  "channel" => null, // array
  "created" => null, // int
  "directory_server" => null, // string
  "flow_preference" => null, // array
  "future_usage" => null, // array
  "id" => null, // string
  "livemode" => null, // bool
  "message_category" => null, // string
  "object" => null, // string
  "outcome_details" => null, // array
  "payment_method" => null, // mixed
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Authentication()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Authentication()->load(["id" => "authentication_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuthenticationEntity`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuthorizationEntity

```php
$authorization = $client->Authorization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The total amount that was authorized or rejected. |
| `amount_details` | `mixed` | No | Detailed breakdown of amount components. |
| `approved` | `bool` | Yes | Whether the authorization has been approved. |
| `authorization_method` | `string` | Yes | How the card details were provided. |
| `balance_transactions` | `array` | Yes | List of balance transactions associated with this authorization. |
| `card` | `array` | Yes | You can [create physical or virtual cards](https://docs.stripe.com/issuing) that are issued to cardholders. |
| `card_presence` | `string` | No | Whether the card was present at the point of sale for the authorization. |
| `cardholder` | `mixed` | No | The cardholder to whom this authorization belongs. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | The currency of the cardholder. |
| `fleet` | `mixed` | No | Fleet-specific information for authorizations using Fleet cards. |
| `fraud_challenges` | `array` | No | Fraud challenges sent to the cardholder, if this authorization was declined for fraud risk reasons. |
| `fuel` | `mixed` | No | Information about fuel that was purchased with this transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `int` | Yes | The total amount that was authorized or rejected. |
| `merchant_currency` | `string` | Yes | The local currency that was presented to the cardholder for the authorization. |
| `merchant_data` | `array` | Yes |  |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `mixed` | No | Details about the authorization, such as identifiers, set by the card network. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending_request` | `mixed` | No | The pending authorization request. |
| `request_history` | `array` | Yes | History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. |
| `status` | `string` | Yes | The current status of the authorization in its lifecycle. |
| `token` | `string` | No | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this authorization. |
| `transactions` | `array` | Yes | List of [transactions](https://docs.stripe.com/api/issuing/transactions) associated with this authorization. |
| `treasury` | `mixed` | No | [Treasury](https://docs.stripe.com/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts). |
| `verification_data` | `array` | Yes |  |
| `verified_by_fraud_challenge` | `bool` | No | Whether the authorization bypassed fraud risk checks because the cardholder has previously completed a fraud challenge on a similar high-risk authorization from the same merchant. |
| `wallet` | `string` | No | The digital wallet used for this transaction. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Authorization()->create([
  "id" => null, // string
  "amount" => null, // int
  "approved" => null, // bool
  "authorization_method" => null, // string
  "balance_transactions" => null, // array
  "card" => null, // array
  "created" => null, // int
  "currency" => null, // string
  "livemode" => null, // bool
  "merchant_amount" => null, // int
  "merchant_currency" => null, // string
  "merchant_data" => null, // array
  "metadata" => null, // array
  "object" => null, // string
  "request_history" => null, // array
  "status" => null, // string
  "transactions" => null, // array
  "verification_data" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Authorization()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Authorization()->load(["id" => "authorization_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuthorizationEntity`

Create a new `AuthorizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BalanceEntity

```php
$balance = $client->Balance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `array` | Yes | Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://docs.stripe.com/api#transfers) or [Payouts API](https://docs.stripe.com/api#payouts). |
| `connect_reserved` | `array` | No | Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. |
| `instant_available` | `array` | No | Funds that you can pay out using Instant Payouts. |
| `issuing` | `array` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending` | `array` | Yes | Funds that aren't available in the balance yet. |
| `refund_and_dispute_prefunding` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Balance()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BalanceEntity`

Create a new `BalanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BalanceSettingEntity

```php
$balance_setting = $client->BalanceSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `debit_negative_balances` | `bool` | No | A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. |
| `payouts` | `mixed` | No | Settings specific to the account's payouts. |
| `settlement_timing` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BalanceSetting()->create([
  "settlement_timing" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BalanceSetting()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BalanceSettingEntity`

Create a new `BalanceSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BalanceTransactionEntity

```php
$balance_transaction = $client->BalanceTransaction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Gross amount of this transaction (in cents (or local equivalent)). |
| `available_on` | `int` | Yes | The date that the transaction's net funds become available in the Stripe balance. |
| `balance_type` | `string` | Yes | The balance that this transaction impacts. |
| `checkout_session` | `mixed` | No | The ID of the checkout session (if any) that created the transaction. |
| `created` | `int` | Yes | Time at which the object was created. |
| `credit_note` | `mixed` | No | The ID of the credit note (if any) related to the transaction. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `mixed` | Yes | The ID of the customer the transaction belongs to. |
| `customer_account` | `string` | No | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `ending_balance` | `int` | Yes | The customer's `balance` after the transaction was applied. |
| `exchange_rate` | `float` | No | If applicable, this transaction uses an exchange rate. |
| `fee` | `int` | Yes | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | `array` | Yes | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `mixed` | No | The ID of the invoice (if any) related to the transaction. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net` | `int` | Yes | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `string` | Yes | String representing the object's type. |
| `reporting_category` | `string` | Yes | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `mixed` | No | This transaction relates to the Stripe object. |
| `status` | `string` | Yes | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `string` | Yes | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BalanceTransaction()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BalanceTransaction()->load(["id" => "balance_transaction_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BalanceTransactionEntity`

Create a new `BalanceTransactionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BankAccountEntity

```php
$bank_account = $client->BankAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `mixed` | No | The account this bank account belongs to. |
| `account_holder_name` | `string` | No | The name of the person or business that owns the bank account. |
| `account_holder_type` | `string` | No | The type of entity that holds the account. |
| `account_type` | `string` | No | The bank account type. |
| `available_payout_methods` | `array` | No | A set of available payout methods for this bank account. |
| `bank_name` | `string` | No | Name of the bank associated with the routing number (e.g., `WELLS FARGO`). |
| `country` | `string` | Yes | Two-letter ISO code representing the country the bank account is located in. |
| `currency` | `string` | Yes | Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. |
| `customer` | `mixed` | No | The ID of the customer that the bank account is associated with. |
| `default_for_currency` | `bool` | No | Whether this bank account is the default external account for its currency. |
| `fingerprint` | `string` | No | Uniquely identifies this particular bank account. |
| `future_requirements` | `mixed` | No | Information about the [upcoming new requirements for the bank account](https://docs.stripe.com/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last4` | `string` | Yes | The last four digits of the bank account number. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `requirements` | `mixed` | No | Information about the requirements for the bank account, including what information needs to be collected. |
| `routing_number` | `string` | No | The routing transit number for the bank account. |
| `status` | `string` | Yes | For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, `tokenized_account_number_deactivated` or `errored`. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BankAccount()->create([
  "customer_id" => null, // string
  "country" => null, // string
  "currency" => null, // string
  "last4" => null, // string
  "object" => null, // string
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BankAccount()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BankAccount()->load(["id" => "bank_account_id", "customer_id" => "customer_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->BankAccount()->remove(["id" => "bank_account_id", "customer_id" => "customer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BankAccountEntity`

Create a new `BankAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CalculationEntity

```php
$calculation = $client->Calculation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_total` | `int` | Yes | Total amount after taxes in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | No | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `array` | Yes |  |
| `expires_at` | `int` | No | Timestamp of date at which the tax calculation will expire. |
| `id` | `string` | No | Unique identifier for the calculation. |
| `line_items` | `array` | Yes | The list of items the customer is purchasing. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `ship_from_details` | `mixed` | No | The details of the ship from location, such as the address. |
| `shipping_cost` | `mixed` | No | The shipping cost details for the calculation. |
| `tax_amount_exclusive` | `int` | Yes | The amount of tax to be collected on top of the line item prices. |
| `tax_amount_inclusive` | `int` | Yes | The amount of tax already included in the line item prices. |
| `tax_breakdown` | `array` | Yes | Breakdown of individual tax amounts that add up to the total. |
| `tax_date` | `int` | Yes | The calculation uses the tax rules and rates that are in effect at this timestamp. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Calculation()->create([
  "amount_total" => null, // int
  "currency" => null, // string
  "customer_details" => null, // array
  "line_items" => null, // array
  "livemode" => null, // bool
  "object" => null, // string
  "tax_amount_exclusive" => null, // int
  "tax_amount_inclusive" => null, // int
  "tax_breakdown" => null, // array
  "tax_date" => null, // int
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Calculation()->load(["id" => "calculation_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CalculationEntity`

Create a new `CalculationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CapabilityEntity

```php
$capability = $client->Capability();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `mixed` | Yes | The account for which the capability enables functionality. |
| `future_requirements` | `array` | Yes |  |
| `id` | `string` | Yes | The identifier for the capability. |
| `object` | `string` | Yes | String representing the object's type. |
| `requested` | `bool` | Yes | Whether the capability has been requested. |
| `requested_at` | `int` | No | Time at which the capability was requested. |
| `requirements` | `array` | Yes |  |
| `status` | `string` | Yes | The status of the capability. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Capability()->create([
  "account_id" => null, // string
  "id" => null, // string
  "account" => null, // mixed
  "future_requirements" => null, // array
  "object" => null, // string
  "requested" => null, // bool
  "requirements" => null, // array
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Capability()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Capability()->load(["id" => "capability_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CapabilityEntity`

Create a new `CapabilityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CardEntity

```php
$card = $client->Card();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `mixed` | No |  |
| `address_city` | `string` | No | City/District/Suburb/Town/Village. |
| `address_country` | `string` | No | Billing address country, if provided when creating card. |
| `address_line1` | `string` | No | Address line 1 (Street address/PO Box/Company name). |
| `address_line1_check` | `string` | No | If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `address_line2` | `string` | No | Address line 2 (Apartment/Suite/Unit/Building). |
| `address_state` | `string` | No | State/County/Province/Region. |
| `address_zip` | `string` | No | ZIP or postal code. |
| `address_zip_check` | `string` | No | If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `allow_redisplay` | `bool` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `available_payout_methods` | `array` | No | A set of available payout methods for this card. |
| `brand` | `string` | Yes | Card brand. |
| `cancellation_reason` | `string` | No | The reason why the card was canceled. |
| `cardholder` | `array` | Yes | An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://docs.stripe.com/issuing) cards. |
| `country` | `string` | No | Two-letter ISO code representing the country of the card. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. |
| `customer` | `mixed` | No | The customer that this card belongs to. |
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
| `latest_fraud_warning` | `mixed` | No | Stripe’s assessment of whether this card’s details have been compromised. |
| `lifecycle_controls` | `mixed` | No | Rules that control the lifecycle of this card, such as automatic cancellation. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | Cardholder name. |
| `networks` | `array` | No |  |
| `number` | `string` | No | The full unredacted card number. |
| `object` | `string` | Yes | String representing the object's type. |
| `personalization_design` | `mixed` | No | The personalization design object belonging to this card. |
| `regulated_status` | `string` | No | Status of a card based on the card issuer. |
| `replaced_by` | `mixed` | No | The latest card that replaces this card, if any. |
| `replacement_for` | `mixed` | No | The card this card replaces, if any. |
| `replacement_reason` | `string` | No | The reason why the previous card needed to be replaced. |
| `second_line` | `string` | No | Text separate from cardholder name, printed on the card. |
| `shipping` | `mixed` | No | Where and how the card will be shipped. |
| `spending_controls` | `array` | Yes |  |
| `status` | `string` | No | For external accounts that are cards, possible values are `new` and `errored`. |
| `tokenization_method` | `string` | No | If the card number is tokenized, this is the method that was used. |
| `type` | `string` | Yes | The type of the card. |
| `wallets` | `mixed` | No | Information relating to digital wallets (like Apple Pay and Google Pay). |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Card()->create([
  "id" => null, // string
  "brand" => null, // string
  "cardholder" => null, // array
  "created" => null, // int
  "exp_month" => null, // int
  "exp_year" => null, // int
  "funding" => null, // string
  "last4" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "spending_controls" => null, // array
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Card()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Card()->load(["id" => "card_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Card()->remove(["id" => "card_id", "customer_id" => "customer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CardEntity`

Create a new `CardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CardholderEntity

```php
$cardholder = $client->Cardholder();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `array` | Yes |  |
| `company` | `mixed` | No | Additional information about a `company` cardholder. |
| `created` | `int` | Yes | Time at which the object was created. |
| `email` | `string` | No | The cardholder's email address. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `individual` | `mixed` | No | Additional information about an `individual` cardholder. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Yes | The cardholder's name. |
| `object` | `string` | Yes | String representing the object's type. |
| `phone_number` | `string` | No | The cardholder's phone number. |
| `preferred_locales` | `array` | No | The cardholder’s preferred locales (languages), ordered by preference. |
| `requirements` | `array` | Yes |  |
| `spending_controls` | `mixed` | No | Rules that control spending across this cardholder's cards. |
| `status` | `string` | Yes | Specifies whether to permit authorizations on this cardholder's cards. |
| `type` | `string` | Yes | One of `individual` or `company`. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Cardholder()->create([
  "id" => null, // string
  "billing" => null, // array
  "created" => null, // int
  "livemode" => null, // bool
  "metadata" => null, // array
  "name" => null, // string
  "object" => null, // string
  "requirements" => null, // array
  "status" => null, // string
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Cardholder()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Cardholder()->load(["id" => "cardholder_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CardholderEntity`

Create a new `CardholderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CashBalanceEntity

```php
$cash_balance = $client->CashBalance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `array` | No | A hash of all cash balances available to this customer. |
| `customer` | `string` | Yes | The ID of the customer whose cash balance this object represents. |
| `customer_account` | `string` | No | The ID of an Account representing a customer whose cash balance this object represents. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `settings` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CashBalance()->create([
  "customer_id" => null, // string
  "customer" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "settings" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CashBalance()->load(["customer_id" => "customer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CashBalanceEntity`

Create a new `CashBalanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CashBalanceTransactionEntity

```php
$cash_balance_transaction = $client->CashBalanceTransaction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjusted_for_overdraft` | `array` | Yes |  |
| `applied_to_payment` | `array` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `mixed` | Yes | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `string` | No | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `int` | Yes | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `net_amount` | `int` | Yes | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `string` | Yes | String representing the object's type. |
| `refunded_from_payment` | `array` | Yes |  |
| `transferred_to_balance` | `array` | Yes |  |
| `type` | `string` | Yes | The type of the cash balance transaction. |
| `unapplied_from_payment` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CashBalanceTransaction()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CashBalanceTransaction()->load(["id" => "cash_balance_transaction_id", "customer_id" => "customer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CashBalanceTransactionEntity`

Create a new `CashBalanceTransactionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChargeEntity

```php
$charge = $client->Charge();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount intended to be collected by this payment. |
| `amount_captured` | `int` | Yes | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_refunded` | `int` | Yes | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `application` | `mixed` | No | ID of the Connect application that created the charge. |
| `application_fee` | `mixed` | No | The application fee (if any) for the charge. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) requested for the charge. |
| `balance_transaction` | `mixed` | No | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_details` | `array` | Yes |  |
| `calculated_statement_descriptor` | `string` | No | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `captured` | `bool` | Yes | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `mixed` | No | ID of the customer this charge is for if one exists. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `disputed` | `bool` | Yes | Whether the charge has been disputed. |
| `failure_balance_transaction` | `mixed` | No | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | `string` | No | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | `string` | No | Message to user further explaining reason for charge failure if available. |
| `fraud_details` | `mixed` | No | Information on fraud assessments for the charge. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `mixed` | No | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | `mixed` | No | Details about whether the payment was accepted, and why. |
| `paid` | `bool` | Yes | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `payment_intent` | `mixed` | No | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `string` | No | ID of the payment method used in this charge. |
| `payment_method_details` | `mixed` | No | Details about the payment method at the time of the transaction. |
| `presentment_details` | `array` | Yes |  |
| `radar_options` | `array` | No | Options to configure Radar. |
| `receipt_email` | `string` | No | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `string` | No | This is the URL to view the receipt for this charge. |
| `refunded` | `bool` | Yes | Whether the charge has been fully refunded. |
| `refunds` | `array` | Yes | A list of refunds that have been applied to the charge. |
| `review` | `mixed` | No | ID of the review associated with this charge if one exists. |
| `shipping` | `mixed` | No | Shipping information for the charge. |
| `source_transfer` | `mixed` | No | The transfer ID which created this charge. |
| `statement_descriptor` | `string` | No | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | `string` | No | Provides information about a card charge. |
| `status` | `string` | Yes | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `transfer` | `mixed` | No | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `transfer_data` | `mixed` | No | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `transfer_group` | `string` | No | A string that identifies this transaction as part of a group. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Charge()->create([
  "id" => null, // string
  "amount" => null, // int
  "amount_captured" => null, // int
  "amount_refunded" => null, // int
  "billing_details" => null, // array
  "captured" => null, // bool
  "created" => null, // int
  "currency" => null, // string
  "disputed" => null, // bool
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "paid" => null, // bool
  "presentment_details" => null, // array
  "refunded" => null, // bool
  "refunds" => null, // array
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Charge()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Charge()->load(["id" => "charge_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChargeEntity`

Create a new `ChargeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConfigurationEntity

```php
$configuration = $client->Configuration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the configuration is active and can be used to create portal sessions. |
| `application` | `mixed` | No | ID of the Connect Application that created the configuration. |
| `bbpos_wisepad3` | `array` | No |  |
| `bbpos_wisepos_e` | `array` | No |  |
| `business_profile` | `array` | Yes |  |
| `cellular` | `array` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `default_return_url` | `string` | No | The default URL to redirect customers to when they click on the portal's link to return to your website. |
| `features` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `is_account_default` | `bool` | No | Whether this Configuration is the default for your account |
| `is_default` | `bool` | Yes | Whether the configuration is the default. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `login_page` | `array` | Yes |  |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | The name of the configuration. |
| `object` | `string` | Yes | String representing the object's type. |
| `offline` | `array` | No |  |
| `reboot_window` | `array` | Yes |  |
| `stripe_s700` | `array` | No |  |
| `stripe_s710` | `array` | No |  |
| `tipping` | `array` | No |  |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `verifone_m425` | `array` | No |  |
| `verifone_p400` | `array` | No |  |
| `verifone_p630` | `array` | No |  |
| `verifone_ux700` | `array` | No |  |
| `verifone_v660p` | `array` | No |  |
| `wifi` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Configuration()->create([
  "id" => null, // string
  "active" => null, // bool
  "business_profile" => null, // array
  "cellular" => null, // array
  "created" => null, // int
  "features" => null, // array
  "is_default" => null, // bool
  "livemode" => null, // bool
  "login_page" => null, // array
  "object" => null, // string
  "reboot_window" => null, // array
  "updated" => null, // int
  "wifi" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Configuration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Configuration()->load(["id" => "configuration_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Configuration()->remove(["id" => "configuration_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConfigurationEntity`

Create a new `ConfigurationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConfirmationTokenEntity

```php
$confirmation_token = $client->ConfirmationToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `expires_at` | `int` | No | Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `mandate_data` | `mixed` | No | Data used for generating a Mandate. |
| `metadata` | `array` | No | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `string` | No | ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `payment_method_options` | `mixed` | No | Payment-method-specific configuration for this ConfirmationToken. |
| `payment_method_preview` | `mixed` | No | Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken. |
| `return_url` | `string` | No | Return URL used to confirm the Intent. |
| `setup_future_usage` | `string` | No | Indicates that you intend to make future payments with this ConfirmationToken's payment method. |
| `setup_intent` | `string` | No | ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `shipping` | `mixed` | No | Shipping information collected on this ConfirmationToken. |
| `use_stripe_sdk` | `bool` | Yes | Indicates whether the Stripe SDK is used to handle confirmation flow. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ConfirmationToken()->create([
  "created" => null, // int
  "id" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "use_stripe_sdk" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConfirmationToken()->load(["id" => "confirmation_token_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConfirmationTokenEntity`

Create a new `ConfirmationTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConnectionTokenEntity

```php
$connection_token = $client->ConnectionToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `string` | No | The id of the location that this connection token is scoped to. |
| `object` | `string` | Yes | String representing the object's type. |
| `secret` | `string` | Yes | Your application should pass this token to the Stripe Terminal SDK. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ConnectionToken()->create([
  "object" => null, // string
  "secret" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConnectionTokenEntity`

Create a new `ConnectionTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CountrySpecEntity

```php
$country_spec = $client->CountrySpec();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_currency` | `string` | Yes | The default currency for this country. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `object` | `string` | Yes | String representing the object's type. |
| `supported_bank_account_currencies` | `array` | Yes | Currencies that can be accepted in the specific country (for transfers). |
| `supported_payment_currencies` | `array` | Yes | Currencies that can be accepted in the specified country (for payments). |
| `supported_payment_methods` | `array` | Yes | Payment methods available in the specified country. |
| `supported_transfer_countries` | `array` | Yes | Countries that can accept transfers from the specified country. |
| `verification_fields` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CountrySpec()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CountrySpec()->load(["id" => "country_spec_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CountrySpecEntity`

Create a new `CountrySpecEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CouponEntity

```php
$coupon = $client->Coupon();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_off` | `int` | No | Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer. |
| `applies_to` | `array` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off. |
| `currency_options` | `array` | No | Coupons defined in each available currency option. |
| `duration` | `string` | Yes | One of `forever`, `once`, or `repeating`. |
| `duration_in_months` | `int` | No | If `duration` is `repeating`, the number of months the coupon applies. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | `int` | No | Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | Name of the coupon displayed to customers on for instance invoices or receipts. |
| `object` | `string` | Yes | String representing the object's type. |
| `percent_off` | `float` | No | Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. |
| `redeem_by` | `int` | No | Date after which the coupon can no longer be redeemed. |
| `times_redeemed` | `int` | Yes | Number of times this coupon has been applied to a customer. |
| `valid` | `bool` | Yes | Taking account of the above properties, whether this coupon can still be applied to a customer. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Coupon()->create([
  "id" => null, // string
  "applies_to" => null, // array
  "created" => null, // int
  "duration" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "times_redeemed" => null, // int
  "valid" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Coupon()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Coupon()->load(["id" => "coupon_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CouponEntity`

Create a new `CouponEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreditBalanceSummaryEntity

```php
$credit_balance_summary = $client->CreditBalanceSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_balance` | `array` | Yes |  |
| `ledger_balance` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CreditBalanceSummary()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreditBalanceSummaryEntity`

Create a new `CreditBalanceSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreditBalanceTransactionEntity

```php
$credit_balance_transaction = $client->CreditBalanceTransaction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `credit` | `mixed` | No | Credit details for this credit balance transaction. |
| `credit_grant` | `mixed` | Yes | The credit grant associated with this credit balance transaction. |
| `debit` | `mixed` | No | Debit details for this credit balance transaction. |
| `effective_at` | `int` | Yes | The effective time of this credit balance transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `test_clock` | `mixed` | No | ID of the test clock this credit balance transaction belongs to. |
| `type` | `string` | No | The type of credit balance transaction (credit or debit). |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CreditBalanceTransaction()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CreditBalanceTransaction()->load(["id" => "credit_balance_transaction_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreditBalanceTransactionEntity`

Create a new `CreditBalanceTransactionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreditGrantEntity

```php
$credit_grant = $client->CreditGrant();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `array` | Yes |  |
| `applicability_config` | `array` | Yes |  |
| `category` | `string` | Yes | The category of this credit grant. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `mixed` | Yes | ID of the customer receiving the billing credits. |
| `customer_account` | `string` | No | ID of the account representing the customer receiving the billing credits |
| `effective_at` | `int` | No | The time when the billing credits become effective-when they're eligible for use. |
| `expires_at` | `int` | No | The time when the billing credits expire. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | A descriptive name shown in dashboard. |
| `object` | `string` | Yes | String representing the object's type. |
| `priority` | `int` | No | The priority for applying this credit grant. |
| `test_clock` | `mixed` | No | ID of the test clock this credit grant belongs to. |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `voided_at` | `int` | No | The time when this credit grant was voided. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreditGrant()->create([
  "id" => null, // string
  "amount" => null, // array
  "applicability_config" => null, // array
  "category" => null, // string
  "created" => null, // int
  "customer" => null, // mixed
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "updated" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CreditGrant()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CreditGrant()->load(["id" => "credit_grant_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreditGrantEntity`

Create a new `CreditGrantEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreditNoteEntity

```php
$credit_note = $client->CreditNote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax. |
| `amount_shipping` | `int` | Yes | This is the sum of all the shipping amounts. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `mixed` | Yes | ID of the customer. |
| `customer_account` | `string` | No | ID of the account representing the customer. |
| `customer_balance_transaction` | `mixed` | No | Customer balance transaction related to this credit note. |
| `discount_amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the total amount of discount that was credited. |
| `discount_amounts` | `array` | Yes | The aggregate amounts calculated per discount for all line items. |
| `effective_at` | `int` | No | The date when this credit note is in effect. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `mixed` | Yes | ID of the invoice. |
| `lines` | `array` | Yes | Line items that make up the credit note |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `memo` | `string` | No | Customer-facing text that appears on the credit note PDF. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `string` | Yes | A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice. |
| `object` | `string` | Yes | String representing the object's type. |
| `out_of_band_amount` | `int` | No | Amount that was credited outside of Stripe. |
| `pdf` | `string` | Yes | The link to download the PDF of the credit note. |
| `post_payment_amount` | `int` | Yes | The amount of the credit note that was refunded to the customer, credited to the customer's balance, credited outside of Stripe, or any combination thereof. |
| `pre_payment_amount` | `int` | Yes | The amount of the credit note by which the invoice's `amount_remaining` and `amount_due` were reduced. |
| `pretax_credit_amounts` | `array` | Yes | The pretax credit amounts (ex: discount, credit grants, etc) for all line items. |
| `reason` | `string` | No | Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory` |
| `refunds` | `array` | Yes | Refunds related to this credit note. |
| `shipping_cost` | `mixed` | No | The details of the cost of shipping, including the ShippingRate applied to the invoice. |
| `status` | `string` | Yes | Status of this credit note, one of `issued` or `void`. |
| `subtotal` | `int` | Yes | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts. |
| `subtotal_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts. |
| `total` | `int` | Yes | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount. |
| `total_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts. |
| `total_taxes` | `array` | No | The aggregate tax information for all line items. |
| `type` | `string` | Yes | Type of this credit note, one of `pre_payment` or `post_payment`. |
| `voided_at` | `int` | No | The time that the credit note was voided. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreditNote()->create([
  "id" => null, // string
  "amount" => null, // int
  "amount_shipping" => null, // int
  "created" => null, // int
  "currency" => null, // string
  "customer" => null, // mixed
  "discount_amount" => null, // int
  "discount_amounts" => null, // array
  "invoice" => null, // mixed
  "lines" => null, // array
  "livemode" => null, // bool
  "number" => null, // string
  "object" => null, // string
  "pdf" => null, // string
  "post_payment_amount" => null, // int
  "pre_payment_amount" => null, // int
  "pretax_credit_amounts" => null, // array
  "refunds" => null, // array
  "status" => null, // string
  "subtotal" => null, // int
  "total" => null, // int
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CreditNote()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CreditNote()->load(["id" => "credit_note_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreditNoteEntity`

Create a new `CreditNoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreditNoteLineEntity

```php
$credit_note_line = $client->CreditNoteLine();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts. |
| `description` | `string` | No | Description of the item being credited. |
| `discount_amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `array` | Yes | The amount of discount calculated per discount for this line item |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice_line_item` | `string` | No | ID of the invoice line item being credited |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `pretax_credit_amounts` | `array` | Yes | The pretax credit amounts (ex: discount, credit grants, etc) for this line item. |
| `quantity` | `int` | No | The number of units of product being credited. |
| `tax_rates` | `array` | Yes | The tax rates which apply to the line item. |
| `taxes` | `array` | No | The tax information of the line item. |
| `type` | `string` | Yes | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | `int` | No | The cost of each unit of product being credited. |
| `unit_amount_decimal` | `string` | No | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CreditNoteLine()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreditNoteLineEntity`

Create a new `CreditNoteLineEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreditReversalEntity

```php
$credit_reversal = $client->CreditReversal();
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
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `string` | Yes | The rails used to reverse the funds. |
| `object` | `string` | Yes | String representing the object's type. |
| `received_credit` | `string` | Yes | The ReceivedCredit being reversed. |
| `status` | `string` | Yes | Status of the CreditReversal |
| `status_transitions` | `array` | Yes |  |
| `transaction` | `mixed` | No | The Transaction associated with this object. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreditReversal()->create([
  "amount" => null, // int
  "created" => null, // int
  "currency" => null, // string
  "financial_account" => null, // string
  "id" => null, // string
  "livemode" => null, // bool
  "metadata" => null, // array
  "network" => null, // string
  "object" => null, // string
  "received_credit" => null, // string
  "status" => null, // string
  "status_transitions" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CreditReversal()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CreditReversal()->load(["id" => "credit_reversal_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreditReversalEntity`

Create a new `CreditReversalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerEntity

```php
$customer = $client->Customer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `mixed` | No | The customer's billing address. |
| `balance` | `int` | No | The current balance, if any, that's stored on the customer in their default currency. |
| `business_name` | `string` | No | The customer's business name. |
| `cash_balance` | `mixed` | No | The current funds being held by Stripe on behalf of the customer. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes. |
| `customer_account` | `string` | No | The ID of an Account representing a customer. |
| `default_source` | `mixed` | No | ID of the default payment source for the customer. |
| `delinquent` | `bool` | No | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discount` | `mixed` | No | Describes the current discount active on the customer, if there is one. |
| `email` | `string` | No | The customer's email address. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `individual_name` | `string` | No | The customer's individual name. |
| `invoice_credit_balance` | `array` | No | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_prefix` | `string` | No | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `array` | No |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | The customer's full name or business name. |
| `next_invoice_sequence` | `int` | No | The suffix of the customer's next invoice number (for example, 0001). |
| `object` | `string` | Yes | String representing the object's type. |
| `phone` | `string` | No | The customer's phone number. |
| `preferred_locales` | `array` | No | The customer's preferred locales (languages), ordered by preference. |
| `shipping` | `mixed` | No | Mailing and shipping address for the customer. |
| `sources` | `array` | Yes | The customer's payment sources, if any. |
| `subscriptions` | `array` | Yes | The customer's current subscriptions, if any. |
| `tax` | `array` | Yes |  |
| `tax_exempt` | `string` | No | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `array` | Yes | The customer's tax IDs. |
| `test_clock` | `mixed` | No | ID of the test clock that this customer belongs to. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Customer()->create([
  "id" => null, // string
  "created" => null, // int
  "livemode" => null, // bool
  "object" => null, // string
  "sources" => null, // array
  "subscriptions" => null, // array
  "tax" => null, // array
  "tax_ids" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Customer()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Customer()->load(["id" => "customer_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Customer()->remove(["id" => "customer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerEntity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerBalanceTransactionEntity

```php
$customer_balance_transaction = $client->CustomerBalanceTransaction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The amount of the transaction. |
| `checkout_session` | `mixed` | No | The ID of the checkout session (if any) that created the transaction. |
| `created` | `int` | Yes | Time at which the object was created. |
| `credit_note` | `mixed` | No | The ID of the credit note (if any) related to the transaction. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `mixed` | Yes | The ID of the customer the transaction belongs to. |
| `customer_account` | `string` | No | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `ending_balance` | `int` | Yes | The customer's `balance` after the transaction was applied. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `mixed` | No | The ID of the invoice (if any) related to the transaction. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `type` | `string` | Yes | Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or… |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomerBalanceTransaction()->create([
  "id" => null, // string
  "amount" => null, // int
  "created" => null, // int
  "currency" => null, // string
  "customer" => null, // mixed
  "ending_balance" => null, // int
  "livemode" => null, // bool
  "object" => null, // string
  "type" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomerBalanceTransaction()->load(["id" => "customer_balance_transaction_id", "customer_id" => "customer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerBalanceTransactionEntity`

Create a new `CustomerBalanceTransactionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerSessionEntity

```php
$customer_session = $client->CustomerSession();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_secret` | `string` | Yes | The client secret of this Customer Session. |
| `components` | `array` | Yes | Configuration for the components supported by this Customer Session. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `mixed` | Yes | The Customer the Customer Session was created for. |
| `customer_account` | `string` | No | The Account that the Customer Session was created for. |
| `expires_at` | `int` | Yes | The timestamp at which this Customer Session will expire. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomerSession()->create([
  "client_secret" => null, // string
  "components" => null, // array
  "created" => null, // int
  "customer" => null, // mixed
  "expires_at" => null, // int
  "livemode" => null, // bool
  "object" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerSessionEntity`

Create a new `CustomerSessionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DebitReversalEntity

```php
$debit_reversal = $client->DebitReversal();
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
| `linked_flows` | `mixed` | No | Other flows linked to a DebitReversal. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `string` | Yes | The rails used to reverse the funds. |
| `object` | `string` | Yes | String representing the object's type. |
| `received_debit` | `string` | Yes | The ReceivedDebit being reversed. |
| `status` | `string` | Yes | Status of the DebitReversal |
| `status_transitions` | `array` | Yes |  |
| `transaction` | `mixed` | No | The Transaction associated with this object. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DebitReversal()->create([
  "amount" => null, // int
  "created" => null, // int
  "currency" => null, // string
  "id" => null, // string
  "livemode" => null, // bool
  "metadata" => null, // array
  "network" => null, // string
  "object" => null, // string
  "received_debit" => null, // string
  "status" => null, // string
  "status_transitions" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DebitReversal()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DebitReversal()->load(["id" => "debit_reversal_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DebitReversalEntity`

Create a new `DebitReversalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedAccountEntity

```php
$deleted_account = $client->DeletedAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedAccount()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedAccountEntity`

Create a new `DeletedAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedApplePayDomainEntity

```php
$deleted_apple_pay_domain = $client->DeletedApplePayDomain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedApplePayDomain()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedApplePayDomainEntity`

Create a new `DeletedApplePayDomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedCouponEntity

```php
$deleted_coupon = $client->DeletedCoupon();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedCoupon()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedCouponEntity`

Create a new `DeletedCouponEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedExternalAccountEntity

```php
$deleted_external_account = $client->DeletedExternalAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedExternalAccount()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedExternalAccountEntity`

Create a new `DeletedExternalAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedInvoiceitemEntity

```php
$deleted_invoiceitem = $client->DeletedInvoiceitem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedInvoiceitem()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedInvoiceitemEntity`

Create a new `DeletedInvoiceitemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedPersonEntity

```php
$deleted_person = $client->DeletedPerson();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedPerson()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedPersonEntity`

Create a new `DeletedPersonEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedPlanEntity

```php
$deleted_plan = $client->DeletedPlan();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedPlan()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedPlanEntity`

Create a new `DeletedPlanEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedProductFeatureEntity

```php
$deleted_product_feature = $client->DeletedProductFeature();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedProductFeature()->remove(["id" => "id", "product_id" => "product_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedProductFeatureEntity`

Create a new `DeletedProductFeatureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedSubscriptionItemEntity

```php
$deleted_subscription_item = $client->DeletedSubscriptionItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedSubscriptionItem()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedSubscriptionItemEntity`

Create a new `DeletedSubscriptionItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedWebhookEndpointEntity

```php
$deleted_webhook_endpoint = $client->DeletedWebhookEndpoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedWebhookEndpoint()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedWebhookEndpointEntity`

Create a new `DeletedWebhookEndpointEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DiscountEntity

```php
$discount = $client->Discount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checkout_session` | `string` | No | The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. |
| `customer` | `mixed` | No | The ID of the customer associated with this discount. |
| `customer_account` | `string` | No | The ID of the account representing the customer associated with this discount. |
| `end` | `int` | No | If the coupon has a duration of `repeating`, the date that this discount will end. |
| `id` | `string` | Yes | The ID of the discount object. |
| `invoice` | `string` | No | The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice. |
| `invoice_item` | `string` | No | The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item. |
| `object` | `string` | Yes | String representing the object's type. |
| `promotion_code` | `mixed` | No | The promotion code applied to create this discount. |
| `source` | `array` | Yes |  |
| `start` | `int` | Yes | Date that the coupon was applied. |
| `subscription` | `string` | No | The subscription that this coupon is applied to, if it is applied to a particular subscription. |
| `subscription_item` | `string` | No | The subscription item that this coupon is applied to, if it is applied to a particular subscription item. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Discount()->load(["customer_id" => "customer_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Discount()->remove(["customer_id" => "customer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DiscountEntity`

Create a new `DiscountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DisputeEntity

```php
$dispute = $client->Dispute();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Disputed amount. |
| `balance_transactions` | `array` | Yes | List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute. |
| `charge` | `mixed` | Yes | ID of the charge that's disputed. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `enhanced_eligibility_types` | `array` | Yes | List of eligibility types that are included in `enhanced_evidence`. |
| `evidence` | `array` | Yes |  |
| `evidence_details` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `is_charge_refundable` | `bool` | Yes | If true, it's still possible to refund the disputed payment. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `loss_reason` | `string` | No | The enum that describes the dispute loss outcome. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `mixed` | No | ID of the PaymentIntent that's disputed. |
| `payment_method_details` | `array` | Yes |  |
| `reason` | `string` | Yes | Reason given by cardholder for dispute. |
| `status` | `string` | Yes | The current status of a dispute. |
| `transaction` | `mixed` | Yes | The transaction being disputed. |
| `treasury` | `mixed` | No | [Treasury](https://docs.stripe.com/api/treasury) details related to this dispute if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts) |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Dispute()->create([
  "id" => null, // string
  "amount" => null, // int
  "balance_transactions" => null, // array
  "charge" => null, // mixed
  "created" => null, // int
  "currency" => null, // string
  "enhanced_eligibility_types" => null, // array
  "evidence" => null, // array
  "evidence_details" => null, // array
  "is_charge_refundable" => null, // bool
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "payment_method_details" => null, // array
  "reason" => null, // string
  "status" => null, // string
  "transaction" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Dispute()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Dispute()->load(["id" => "dispute_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DisputeEntity`

Create a new `DisputeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DomainEntity

```php
$domain = $client->Domain();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Domain()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DomainEntity`

Create a new `DomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EarlyFraudWarningEntity

```php
$early_fraud_warning = $client->EarlyFraudWarning();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionable` | `bool` | Yes | An EFW is actionable if it has not received a dispute and has not been fully refunded. |
| `charge` | `mixed` | Yes | ID of the charge this early fraud warning is for, optionally expanded. |
| `created` | `int` | Yes | Time at which the object was created. |
| `fraud_type` | `string` | Yes | The type of fraud labelled by the issuer. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `mixed` | No | ID of the Payment Intent this early fraud warning is for, optionally expanded. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EarlyFraudWarning()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EarlyFraudWarning()->load(["id" => "early_fraud_warning_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EarlyFraudWarningEntity`

Create a new `EarlyFraudWarningEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EphemeralKeyEntity

```php
$ephemeral_key = $client->EphemeralKey();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EphemeralKey()->create([
  "created" => null, // int
  "expires" => null, // int
  "id" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->EphemeralKey()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EphemeralKeyEntity`

Create a new `EphemeralKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EventEntity

```php
$event = $client->Event();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | The connected account that originates the event. |
| `api_version` | `string` | No | The Stripe API version used to render `data` when the event was created. |
| `context` | `string` | No | Authentication context needed to fetch the event or related object. |
| `created` | `int` | Yes | Time at which the object was created. |
| `data` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending_webhooks` | `int` | Yes | Number of webhooks that haven't been successfully delivered (for example, to return a 20x response) to the URLs you specify. |
| `request` | `mixed` | No | Information on the API request that triggers the event. |
| `type` | `string` | Yes | Description of the event (for example, `invoice.created` or `charge.refunded`). |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Event()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Event()->load(["id" => "event_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EventEntity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ExchangeRateEntity

```php
$exchange_rate = $client->ExchangeRate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the object. |
| `object` | `string` | Yes | String representing the object's type. |
| `rates` | `array` | Yes | Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ExchangeRate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ExchangeRate()->load(["id" => "exchange_rate_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ExchangeRateEntity`

Create a new `ExchangeRateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ExternalAccountEntity

```php
$external_account = $client->ExternalAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | Yes | The list contains all external accounts that have been attached to the Stripe account. |
| `has_more` | `bool` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | Yes | The URL where this list can be accessed. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ExternalAccount()->create([
  "id" => null, // string
  "data" => null, // array
  "has_more" => null, // bool
  "object" => null, // string
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ExternalAccount()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ExternalAccount()->load(["id" => "external_account_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ExternalAccountEntity`

Create a new `ExternalAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FeatureEntity

```php
$feature = $client->Feature();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `entitlement_feature` | `array` | Yes | A feature represents a monetizable ability or functionality in your system. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | Yes | A unique key you provide as your own system identifier. |
| `metadata` | `array` | Yes | Set of key-value pairs that you can attach to an object. |
| `name` | `string` | Yes | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Feature()->create([
  "id" => null, // string
  "active" => null, // bool
  "entitlement_feature" => null, // array
  "livemode" => null, // bool
  "lookup_key" => null, // string
  "metadata" => null, // array
  "name" => null, // string
  "object" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Feature()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Feature()->load(["id" => "feature_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FeatureEntity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FeedbackOptionEntity

```php
$feedback_option = $client->FeedbackOption();
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
| `status_transitions` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FeedbackOption()->create([
  "id" => null, // string
  "description" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "status" => null, // string
  "status_transitions" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->FeedbackOption()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FeedbackOption()->load(["id" => "feedback_option_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FeedbackOptionEntity`

Create a new `FeedbackOptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FileEntity

```php
$file = $client->File();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `data` | `array` | Yes | Details about each object. |
| `expires_at` | `int` | No | The file expires and isn't available at this time in epoch seconds. |
| `filename` | `string` | No | The suitable name for saving the file to a filesystem. |
| `has_more` | `bool` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `links` | `array` | Yes | A list of [file links](https://docs.stripe.com/api#file_links) that point at this file. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->File()->create([
  "created" => null, // int
  "data" => null, // array
  "has_more" => null, // bool
  "id" => null, // string
  "links" => null, // array
  "object" => null, // string
  "purpose" => null, // string
  "size" => null, // int
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->File()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->File()->load(["id" => "file_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FileEntity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FileLinkEntity

```php
$file_link = $client->FileLink();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `expired` | `bool` | Yes | Returns if the link is already expired. |
| `expires_at` | `int` | No | Time that the link expires. |
| `file` | `mixed` | Yes | The file object this link points to. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | No | The publicly accessible URL to download the file. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FileLink()->create([
  "id" => null, // string
  "created" => null, // int
  "expired" => null, // bool
  "file" => null, // mixed
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->FileLink()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FileLink()->load(["id" => "file_link_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FileLinkEntity`

Create a new `FileLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FinancialAccountEntity

```php
$financial_account = $client->FinancialAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_features` | `array` | No | The array of paths to active Features in the Features hash. |
| `balance` | `array` | Yes | Balance information for the FinancialAccount |
| `country` | `string` | Yes | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | `int` | Yes | Time at which the object was created. |
| `features` | `array` | Yes | Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`. |
| `financial_addresses` | `array` | Yes | The set of credentials that resolve to a FinancialAccount. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `is_default` | `bool` | No |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | No | The nickname for the FinancialAccount. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending_features` | `array` | No | The array of paths to pending Features in the Features hash. |
| `platform_restrictions` | `mixed` | No | The set of functionalities that the platform can restrict on the FinancialAccount. |
| `restricted_features` | `array` | No | The array of paths to restricted Features in the Features hash. |
| `status` | `string` | Yes | Status of this FinancialAccount. |
| `status_details` | `array` | Yes |  |
| `supported_currencies` | `array` | Yes | The currencies the FinancialAccount can hold a balance in. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FinancialAccount()->create([
  "id" => null, // string
  "balance" => null, // array
  "country" => null, // string
  "created" => null, // int
  "features" => null, // array
  "financial_addresses" => null, // array
  "livemode" => null, // bool
  "object" => null, // string
  "status" => null, // string
  "status_details" => null, // array
  "supported_currencies" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->FinancialAccount()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FinancialAccount()->load(["id" => "financial_account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FinancialAccountEntity`

Create a new `FinancialAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FinancialAccountFeatureEntity

```php
$financial_account_feature = $client->FinancialAccountFeature();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_issuing` | `array` | Yes | Toggle settings for enabling/disabling a feature |
| `deposit_insurance` | `array` | Yes | Toggle settings for enabling/disabling a feature |
| `financial_addresses` | `array` | No | Settings related to Financial Addresses features on a Financial Account |
| `id` | `string` | No |  |
| `inbound_transfers` | `array` | No | InboundTransfers contains inbound transfers features for a FinancialAccount. |
| `intra_stripe_flows` | `array` | Yes | Toggle settings for enabling/disabling a feature |
| `object` | `string` | Yes | String representing the object's type. |
| `outbound_payments` | `array` | No | Settings related to Outbound Payments features on a Financial Account |
| `outbound_transfers` | `array` | No | OutboundTransfers contains outbound transfers features for a FinancialAccount. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FinancialAccountFeature()->create([
  "id" => null, // string
  "card_issuing" => null, // array
  "deposit_insurance" => null, // array
  "intra_stripe_flows" => null, // array
  "object" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FinancialAccountFeature()->load(["id" => "financial_account_feature_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FinancialAccountFeatureEntity`

Create a new `FinancialAccountFeatureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FundCashBalanceEntity

```php
$fund_cash_balance = $client->FundCashBalance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjusted_for_overdraft` | `array` | Yes |  |
| `applied_to_payment` | `array` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `mixed` | Yes | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `string` | No | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `int` | Yes | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `net_amount` | `int` | Yes | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `string` | Yes | String representing the object's type. |
| `refunded_from_payment` | `array` | Yes |  |
| `transferred_to_balance` | `array` | Yes |  |
| `type` | `string` | Yes | The type of the cash balance transaction. |
| `unapplied_from_payment` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FundCashBalance()->create([
  "customer_id" => null, // string
  "adjusted_for_overdraft" => null, // array
  "applied_to_payment" => null, // array
  "created" => null, // int
  "currency" => null, // string
  "customer" => null, // mixed
  "ending_balance" => null, // int
  "funded" => null, // array
  "id" => null, // string
  "livemode" => null, // bool
  "net_amount" => null, // int
  "object" => null, // string
  "refunded_from_payment" => null, // array
  "transferred_to_balance" => null, // array
  "type" => null, // string
  "unapplied_from_payment" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FundCashBalanceEntity`

Create a new `FundCashBalanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FundingInstructionEntity

```php
$funding_instruction = $client->FundingInstruction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `string` | Yes | The country of the bank account to fund |
| `financial_addresses` | `array` | Yes | A list of financial addresses that can be used to fund a particular balance |
| `type` | `string` | Yes | The bank_transfer type |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FundingInstruction()->create([
  "customer_id" => null, // string
  "country" => null, // string
  "financial_addresses" => null, // array
  "type" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FundingInstructionEntity`

Create a new `FundingInstructionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HistoryEntity

```php
$history = $client->History();
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
| `exchange_rate` | `float` | No | If applicable, this transaction uses an exchange rate. |
| `fee` | `int` | Yes | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | `array` | Yes | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `net` | `int` | Yes | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `string` | Yes | String representing the object's type. |
| `reporting_category` | `string` | Yes | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `mixed` | No | This transaction relates to the Stripe object. |
| `status` | `string` | Yes | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `string` | Yes | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->History()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HistoryEntity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InboundTransferEntity

```php
$inbound_transfer = $client->InboundTransfer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `cancelable` | `bool` | Yes | Returns `true` if the InboundTransfer is able to be canceled. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `failure_details` | `mixed` | No | Details about this InboundTransfer's failure. |
| `financial_account` | `string` | Yes | The FinancialAccount that received the funds. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `linked_flows` | `array` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `origin_payment_method` | `string` | No | The origin payment method to be debited for an InboundTransfer. |
| `origin_payment_method_details` | `mixed` | No | Details about the PaymentMethod for an InboundTransfer. |
| `returned` | `bool` | No | Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state. |
| `statement_descriptor` | `string` | Yes | Statement descriptor shown when funds are debited from the source. |
| `status` | `string` | Yes | Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. |
| `status_transitions` | `array` | Yes |  |
| `transaction` | `mixed` | No | The Transaction associated with this object. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->InboundTransfer()->create([
  "amount" => null, // int
  "cancelable" => null, // bool
  "created" => null, // int
  "currency" => null, // string
  "financial_account" => null, // string
  "id" => null, // string
  "linked_flows" => null, // array
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "statement_descriptor" => null, // string
  "status" => null, // string
  "status_transitions" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->InboundTransfer()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->InboundTransfer()->load(["id" => "inbound_transfer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InboundTransferEntity`

Create a new `InboundTransferEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InstallEntity

```php
$install = $client->Install();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | The ID of the account that the app install belongs to. |
| `app` | `string` | Yes | The ID of the app installed. |
| `approval_required` | `bool` | Yes | Whether the installer must authorize pending permissions, content security policy entries, or endpoints. |
| `auth_code` | `string` | No | The authorization code for an oauth app install. |
| `channel` | `string` | Yes | The distribution channel associated with the app install. |
| `content_security_policy_granted` | `array` | Yes |  |
| `content_security_policy_pending` | `array` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `created_by` | `string` | No | The ID of the embedding platform that created the install, if applicable. |
| `endpoints_granted` | `array` | Yes | The endpoint URLs authorized by the installer. |
| `endpoints_pending` | `array` | Yes | The endpoint URLs requested by the latest app version that the installer has not authorized. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `permissions_granted` | `array` | Yes | The permissions authorized by the installer. |
| `permissions_pending` | `array` | Yes | The permissions requested by the latest app version that the installer has not authorized. |
| `status` | `string` | Yes | The status of the app install. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Install()->create([
  "id" => null, // string
  "account" => null, // string
  "app" => null, // string
  "approval_required" => null, // bool
  "channel" => null, // string
  "content_security_policy_granted" => null, // array
  "content_security_policy_pending" => null, // array
  "created" => null, // int
  "endpoints_granted" => null, // array
  "endpoints_pending" => null, // array
  "livemode" => null, // bool
  "object" => null, // string
  "permissions_granted" => null, // array
  "permissions_pending" => null, // array
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Install()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Install()->load(["id" => "install_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InstallEntity`

Create a new `InstallEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InvoiceEntity

```php
$invoice = $client->Invoice();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_country` | `string` | No | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `string` | No | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `array` | No | The account tax IDs associated with the invoice. |
| `amount_due` | `int` | Yes | Final amount due at this time for this invoice. |
| `amount_overpaid` | `int` | Yes | Amount that was overpaid on the invoice. |
| `amount_paid` | `int` | Yes | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | `int` | Yes | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_remaining` | `int` | Yes | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | `int` | Yes | This is the sum of all the shipping amounts. |
| `application` | `mixed` | No | ID of the Connect Application that created the invoice. |
| `attempt_count` | `int` | Yes | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | `bool` | Yes | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | `bool` | Yes | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_tax` | `array` | Yes |  |
| `automatically_finalizes_at` | `int` | No | The time when this invoice is currently scheduled to be automatically finalized. |
| `billing_reason` | `string` | No | Indicates the reason why the invoice was created. |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_secret` | `mixed` | No | The confirmation secret associated with this invoice. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `array` | No | Custom fields displayed on the invoice. |
| `customer` | `mixed` | Yes | The ID of the customer to bill. |
| `customer_account` | `string` | No | The ID of the account representing the customer to bill. |
| `customer_address` | `mixed` | No | The customer's address. |
| `customer_email` | `string` | No | The customer's email. |
| `customer_name` | `string` | No | The customer's name. |
| `customer_phone` | `string` | No | The customer's phone number. |
| `customer_shipping` | `mixed` | No | The customer's shipping information. |
| `customer_tax_exempt` | `string` | No | The customer's tax exempt status. |
| `customer_tax_ids` | `array` | No | The customer's tax IDs. |
| `default_payment_method` | `mixed` | No | ID of the default payment method for the invoice. |
| `default_source` | `mixed` | No | ID of the default payment source for the invoice. |
| `default_tax_rates` | `array` | Yes | The tax rates applied to this invoice, if any. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discounts` | `array` | Yes | The discounts applied to the invoice. |
| `due_date` | `int` | No | The date on which payment for this invoice is due. |
| `effective_at` | `int` | No | The date when this invoice is in effect. |
| `ending_balance` | `int` | No | Ending customer balance after the invoice is finalized. |
| `footer` | `string` | No | Footer displayed on the invoice. |
| `from_invoice` | `mixed` | No | Details of the invoice that was cloned. |
| `hosted_invoice_url` | `string` | No | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice_pdf` | `string` | No | The link to download the PDF for the invoice. |
| `issuer` | `array` | Yes |  |
| `last_finalization_error` | `mixed` | No | The error encountered during the previous attempt to finalize the invoice. |
| `latest_revision` | `mixed` | No | The ID of the most recent non-draft revision of this invoice |
| `lines` | `array` | Yes | The individual line items that make up the invoice. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_payment_attempt` | `int` | No | The time at which payment will next be attempted. |
| `number` | `string` | No | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `mixed` | No | The account (if any) for which the funds of the invoice payment are intended. |
| `parent` | `mixed` | No | The parent that generated this invoice |
| `payment_settings` | `array` | Yes |  |
| `payments` | `array` | Yes | Payments for this invoice. |
| `period_end` | `int` | Yes | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | `int` | Yes | The earliest timestamp at which invoice items can be associated with this invoice. |
| `post_payment_credit_notes_amount` | `int` | Yes | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | `int` | Yes | Total amount of all pre-payment credit notes issued for this invoice. |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this invoice. |
| `rendering` | `mixed` | No | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `shipping_cost` | `mixed` | No | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | `mixed` | No | Shipping details for the invoice. |
| `starting_balance` | `int` | Yes | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | `string` | No | Extra information about an invoice for the customer's credit card statement. |
| `status` | `string` | No | The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. |
| `status_details` | `array` | No |  |
| `status_transitions` | `array` | Yes |  |
| `subtotal` | `int` | Yes | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `test_clock` | `mixed` | No | ID of the test clock this invoice belongs to. |
| `threshold_reason` | `array` | Yes |  |
| `total` | `int` | Yes | Total after discounts and taxes. |
| `total_discount_amounts` | `array` | No | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `array` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `array` | No | The aggregate tax information of all line items. |
| `webhooks_delivered_at` | `int` | No | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Invoice()->create([
  "id" => null, // string
  "amount_due" => null, // int
  "amount_overpaid" => null, // int
  "amount_paid" => null, // int
  "amount_paid_off_stripe" => null, // int
  "amount_remaining" => null, // int
  "amount_shipping" => null, // int
  "attempt_count" => null, // int
  "attempted" => null, // bool
  "auto_advance" => null, // bool
  "automatic_tax" => null, // array
  "collection_method" => null, // string
  "created" => null, // int
  "currency" => null, // string
  "customer" => null, // mixed
  "default_tax_rates" => null, // array
  "discounts" => null, // array
  "issuer" => null, // array
  "lines" => null, // array
  "livemode" => null, // bool
  "object" => null, // string
  "payment_settings" => null, // array
  "payments" => null, // array
  "period_end" => null, // int
  "period_start" => null, // int
  "post_payment_credit_notes_amount" => null, // int
  "pre_payment_credit_notes_amount" => null, // int
  "starting_balance" => null, // int
  "status_transitions" => null, // array
  "subtotal" => null, // int
  "threshold_reason" => null, // array
  "total" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Invoice()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Invoice()->load(["id" => "invoice_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Invoice()->remove(["id" => "invoice_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InvoiceEntity`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InvoicePaymentEntity

```php
$invoice_payment = $client->InvoicePayment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_paid` | `int` | No | Amount that was actually paid for this invoice, in cents (or local equivalent). |
| `amount_requested` | `int` | Yes | Amount intended to be paid toward this invoice, in cents (or local equivalent) |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `mixed` | Yes | The invoice that was paid. |
| `is_default` | `bool` | Yes | Stripe automatically creates a default InvoicePayment when the invoice is finalized, and keeps it synchronized with the invoice’s `amount_remaining`. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment` | `array` | Yes |  |
| `status` | `string` | Yes | The status of the payment, one of `open`, `paid`, or `canceled`. |
| `status_transitions` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->InvoicePayment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->InvoicePayment()->load(["id" => "invoice_payment_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InvoicePaymentEntity`

Create a new `InvoicePaymentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InvoiceRenderingTemplateEntity

```php
$invoice_rendering_template = $client->InvoiceRenderingTemplate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | No | A brief description of the template, hidden from customers |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The status of the template, one of `active` or `archived`. |
| `version` | `int` | Yes | Version of this template; version increases by one when an update on the template changes any field that controls invoice rendering |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->InvoiceRenderingTemplate()->create([
  "template" => null, // string
  "created" => null, // int
  "id" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "status" => null, // string
  "version" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->InvoiceRenderingTemplate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->InvoiceRenderingTemplate()->load(["id" => "invoice_rendering_template_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InvoiceRenderingTemplateEntity`

Create a new `InvoiceRenderingTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InvoiceitemEntity

```php
$invoiceitem = $client->Invoiceitem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in the `currency` specified) of the invoice item. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `mixed` | Yes | The ID of the customer to bill for this invoice item. |
| `customer_account` | `string` | No | The ID of the account to bill for this invoice item. |
| `date` | `int` | Yes | Time at which the object was created. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discountable` | `bool` | Yes | If true, discounts will apply to this invoice item. |
| `discounts` | `array` | No | The discounts which apply to the invoice item. |
| `frozen_fields` | `array` | No | Array of field names that can't be modified. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `mixed` | No | The ID of the invoice this invoice item belongs to. |
| `invoicing_rules` | `array` | No | The rules that control when this invoice item is eligible for invoicing. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net_amount` | `int` | No | The amount after discounts, but before credits and taxes. |
| `object` | `string` | Yes | String representing the object's type. |
| `parent` | `mixed` | No | The parent that generated this invoice item. |
| `period` | `array` | Yes |  |
| `pricing` | `mixed` | No | The pricing information of the invoice item. |
| `proration` | `bool` | Yes | Whether the invoice item was created automatically as a proration adjustment when the customer switched plans. |
| `proration_details` | `array` | Yes |  |
| `quantity` | `int` | Yes | Quantity of units for the invoice item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `string` | Yes | Non-negative decimal with at most 12 decimal places. |
| `tax_rates` | `array` | No | The tax rates which apply to the invoice item. |
| `test_clock` | `mixed` | No | ID of the test clock this invoice item belongs to. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Invoiceitem()->create([
  "id" => null, // string
  "amount" => null, // int
  "currency" => null, // string
  "customer" => null, // mixed
  "date" => null, // int
  "discountable" => null, // bool
  "livemode" => null, // bool
  "object" => null, // string
  "period" => null, // array
  "proration" => null, // bool
  "proration_details" => null, // array
  "quantity" => null, // int
  "quantity_decimal" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Invoiceitem()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Invoiceitem()->load(["id" => "invoiceitem_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InvoiceitemEntity`

Create a new `InvoiceitemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LineEntity

```php
$line = $client->Line();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The amount, in cents (or local equivalent). |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discount_amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `array` | No | The amount of discount calculated per discount for this line item. |
| `discountable` | `bool` | Yes | If true, discounts will apply to this line item. |
| `discounts` | `array` | Yes | The discounts applied to the invoice line item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `string` | No | The ID of the invoice that contains this line item. |
| `invoice_line_item` | `string` | No | ID of the invoice line item being credited |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `parent` | `mixed` | No | The parent that generated this line item. |
| `period` | `array` | Yes |  |
| `pretax_credit_amounts` | `array` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item. |
| `pricing` | `mixed` | No | The pricing information of the line item. |
| `quantity` | `int` | No | Quantity of units for the invoice line item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `string` | No | Non-negative decimal with at most 12 decimal places. |
| `subscription` | `mixed` | No |  |
| `subtotal` | `int` | Yes | The subtotal of the line item, in cents (or local equivalent), before any discounts or taxes. |
| `tax_rates` | `array` | Yes | The tax rates which apply to the line item. |
| `taxes` | `array` | No | The tax information of the line item. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Line()->create([
  "id" => null, // string
  "invoice_id" => null, // string
  "amount" => null, // int
  "currency" => null, // string
  "discount_amount" => null, // int
  "discountable" => null, // bool
  "discounts" => null, // array
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "period" => null, // array
  "subtotal" => null, // int
  "tax_rates" => null, // array
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Line()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LineEntity`

Create a new `LineEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LineItemEntity

```php
$line_item = $client->LineItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjustable_quantity` | `mixed` | No |  |
| `amount` | `int` | Yes | The line item amount in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_discount` | `int` | Yes | Total discount amount applied. |
| `amount_subtotal` | `int` | Yes | Total before any discounts or taxes are applied. |
| `amount_tax` | `int` | Yes | The amount of tax calculated for this line item, in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_total` | `int` | Yes | Total after discounts and taxes. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discounts` | `array` | No | The discounts applied to the line item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `performance_location` | `string` | No | Indicates the line item represents a performance where the venue location might determine the tax, not the customer address. |
| `price` | `float` | No | The price used to generate the line item. |
| `product` | `string` | No | The ID of an existing [Product](https://docs.stripe.com/api/products/object). |
| `quantity` | `int` | Yes | The number of units of the item being purchased. |
| `reference` | `string` | Yes | A custom identifier for this line item. |
| `reversal` | `mixed` | No | If `type=reversal`, contains information about what was reversed. |
| `tax_behavior` | `string` | Yes | Specifies whether the `amount` includes taxes. |
| `tax_breakdown` | `array` | No | Detailed account of taxes relevant to this line item. |
| `tax_code` | `string` | Yes | The [tax code](https://docs.stripe.com/tax/tax-categories) ID used for this resource. |
| `taxes` | `array` | No | The taxes applied to the line item. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LineItem()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LineItemEntity`

Create a new `LineItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LinkedAccountEntity

```php
$linked_account = $client->LinkedAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `mixed` | No | The account holder that this account belongs to. |
| `account_numbers` | `array` | No | Details about the account numbers. |
| `balance` | `mixed` | No | The most recent information about the account's balance. |
| `balance_refresh` | `mixed` | No | The state of the most recent attempt to refresh the account balance. |
| `category` | `string` | Yes | The type of the account. |
| `created` | `int` | Yes | Time at which the object was created. |
| `display_name` | `string` | No | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `institution_name` | `string` | Yes | The name of the institution that holds this account. |
| `last4` | `string` | No | The last 4 digits of the account number. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `ownership` | `mixed` | No | The most recent information about the account's owners. |
| `ownership_refresh` | `mixed` | No | The state of the most recent attempt to refresh the account owners. |
| `permissions` | `array` | No | The list of permissions granted by this account. |
| `status` | `string` | Yes | The status of the link to the account. |
| `status_details` | `array` | No |  |
| `subcategory` | `string` | Yes | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `array` | No | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `array` | Yes | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `transaction_refresh` | `mixed` | No | The state of the most recent attempt to refresh the account transactions. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LinkedAccount()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LinkedAccountEntity`

Create a new `LinkedAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LinkedAccountOwnerEntity

```php
$linked_account_owner = $client->LinkedAccountOwner();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LinkedAccountOwner()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LinkedAccountOwnerEntity`

Create a new `LinkedAccountOwnerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LocationEntity

```php
$location = $client->Location();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `array` | Yes |  |
| `address_kana` | `array` | No |  |
| `address_kanji` | `array` | No |  |
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
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `phone` | `string` | No | The phone number of the location. |
| `postal_code` | `string` | No | ZIP or postal code. |
| `state` | `string` | No | State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)). |
| `type` | `string` | Yes | The type of tax location to be defined. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Location()->create([
  "id" => null, // string
  "address" => null, // array
  "display_name" => null, // string
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Location()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Location()->load(["id" => "location_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Location()->remove(["id" => "location_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LocationEntity`

Create a new `LocationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LoginLinkEntity

```php
$login_link = $client->LoginLink();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | Yes | The URL for the login link. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LoginLink()->create([
  "account_id" => null, // string
  "created" => null, // int
  "object" => null, // string
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LoginLinkEntity`

Create a new `LoginLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MandateEntity

```php
$mandate = $client->Mandate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_acceptance` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `multi_use` | `array` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `string` | No | The account (if any) that the mandate is intended for. |
| `payment_method` | `mixed` | Yes | ID of the payment method associated with this mandate. |
| `payment_method_details` | `array` | Yes |  |
| `single_use` | `array` | Yes |  |
| `status` | `string` | Yes | The mandate status indicates whether or not you can use it to initiate a payment. |
| `type` | `string` | Yes | The type of the mandate. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Mandate()->load(["id" => "mandate_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MandateEntity`

Create a new `MandateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MeterEntity

```php
$meter = $client->Meter();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer_mapping` | `array` | Yes |  |
| `default_aggregation` | `array` | Yes |  |
| `display_name` | `string` | Yes | The meter's name. |
| `event_name` | `string` | Yes | The name of the meter event to record usage for. |
| `event_time_window` | `string` | No | The time window which meter events have been pre-aggregated for, if any. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The meter's status. |
| `status_transitions` | `array` | Yes |  |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `value_settings` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Meter()->create([
  "id" => null, // string
  "created" => null, // int
  "customer_mapping" => null, // array
  "default_aggregation" => null, // array
  "display_name" => null, // string
  "event_name" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "status" => null, // string
  "status_transitions" => null, // array
  "updated" => null, // int
  "value_settings" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Meter()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Meter()->load(["id" => "meter_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MeterEntity`

Create a new `MeterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MeterEventEntity

```php
$meter_event = $client->MeterEvent();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->MeterEvent()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MeterEventEntity`

Create a new `MeterEventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MeterEventAdjustmentEntity

```php
$meter_event_adjustment = $client->MeterEventAdjustment();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->MeterEventAdjustment()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MeterEventAdjustmentEntity`

Create a new `MeterEventAdjustmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MeterEventSummaryEntity

```php
$meter_event_summary = $client->MeterEventSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregated_value` | `float` | Yes | Aggregated value of all the events within `start_time` (inclusive) and `end_time` (inclusive). |
| `end_time` | `int` | Yes | End timestamp for this event summary (exclusive). |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `meter` | `string` | Yes | The meter associated with this event summary. |
| `object` | `string` | Yes | String representing the object's type. |
| `start_time` | `int` | Yes | Start timestamp for this event summary (inclusive). |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MeterEventSummary()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MeterEventSummaryEntity`

Create a new `MeterEventSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OnboardingLinkEntity

```php
$onboarding_link = $client->OnboardingLink();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apple_terms_and_conditions` | `mixed` | No | The options associated with the Apple Terms and Conditions link type. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OnboardingLink()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OnboardingLinkEntity`

Create a new `OnboardingLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrderEntity

```php
$order = $client->Order();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_fees` | `int` | Yes | Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit. |
| `amount_subtotal` | `int` | Yes | Total amount of the carbon removal in the currency's smallest unit. |
| `amount_total` | `int` | Yes | Total amount of the order including fees in the currency's smallest unit. |
| `beneficiary` | `array` | Yes |  |
| `canceled_at` | `int` | No | Time at which the order was canceled. |
| `cancellation_reason` | `string` | No | Reason for the cancellation of this order. |
| `certificate` | `string` | No | For delivered orders, a URL to a delivery certificate for the order. |
| `confirmed_at` | `int` | No | Time at which the order was confirmed. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order. |
| `delayed_at` | `int` | No | Time at which the order's expected_delivery_year was delayed. |
| `delivered_at` | `int` | No | Time at which the order was delivered. |
| `delivery_details` | `array` | Yes | Details about the delivery of carbon removal for this order. |
| `expected_delivery_year` | `int` | Yes | The year this order is expected to be delivered. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons` | `string` | Yes | Quantity of carbon removal that is included in this order. |
| `object` | `string` | Yes | String representing the object's type. |
| `product` | `mixed` | Yes | Unique ID for the Climate `Product` this order is purchasing. |
| `product_substituted_at` | `int` | No | Time at which the order's product was substituted for a different product. |
| `status` | `string` | Yes | The current status of this order. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Order()->create([
  "id" => null, // string
  "amount_fees" => null, // int
  "amount_subtotal" => null, // int
  "amount_total" => null, // int
  "beneficiary" => null, // array
  "created" => null, // int
  "currency" => null, // string
  "delivery_details" => null, // array
  "expected_delivery_year" => null, // int
  "livemode" => null, // bool
  "metadata" => null, // array
  "metric_tons" => null, // string
  "object" => null, // string
  "product" => null, // mixed
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Order()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Order()->load(["id" => "order_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrderEntity`

Create a new `OrderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OutboundPaymentEntity

```php
$outbound_payment = $client->OutboundPayment();
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
| `destination_payment_method_details` | `mixed` | No | Details about the PaymentMethod for an OutboundPayment. |
| `end_user_details` | `mixed` | No | Details about the end user. |
| `expected_arrival_date` | `int` | Yes | The date when funds are expected to arrive in the destination account. |
| `financial_account` | `string` | Yes | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `returned_details` | `mixed` | No | Details about a returned OutboundPayment. |
| `statement_descriptor` | `string` | Yes | The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer). |
| `status` | `string` | Yes | Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. |
| `status_transitions` | `array` | Yes |  |
| `tracking_details` | `mixed` | No | Details about network-specific tracking information if available. |
| `transaction` | `mixed` | Yes | The Transaction associated with this object. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OutboundPayment()->create([
  "id" => null, // string
  "amount" => null, // int
  "cancelable" => null, // bool
  "created" => null, // int
  "currency" => null, // string
  "expected_arrival_date" => null, // int
  "financial_account" => null, // string
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "statement_descriptor" => null, // string
  "status" => null, // string
  "status_transitions" => null, // array
  "transaction" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OutboundPayment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OutboundPayment()->load(["id" => "outbound_payment_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OutboundPaymentEntity`

Create a new `OutboundPaymentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OutboundTransferEntity

```php
$outbound_transfer = $client->OutboundTransfer();
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
| `destination_payment_method_details` | `array` | Yes |  |
| `expected_arrival_date` | `int` | Yes | The date when funds are expected to arrive in the destination account. |
| `financial_account` | `string` | Yes | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `returned_details` | `mixed` | No | Details about a returned OutboundTransfer. |
| `statement_descriptor` | `string` | Yes | Information about the OutboundTransfer to be sent to the recipient account. |
| `status` | `string` | Yes | Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. |
| `status_transitions` | `array` | Yes |  |
| `tracking_details` | `mixed` | No | Details about network-specific tracking information if available. |
| `transaction` | `mixed` | Yes | The Transaction associated with this object. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OutboundTransfer()->create([
  "id" => null, // string
  "amount" => null, // int
  "cancelable" => null, // bool
  "created" => null, // int
  "currency" => null, // string
  "destination_payment_method_details" => null, // array
  "expected_arrival_date" => null, // int
  "financial_account" => null, // string
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "statement_descriptor" => null, // string
  "status" => null, // string
  "status_transitions" => null, // array
  "transaction" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OutboundTransfer()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OutboundTransfer()->load(["id" => "outbound_transfer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OutboundTransferEntity`

Create a new `OutboundTransferEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentAttemptRecordEntity

```php
$payment_attempt_record = $client->PaymentAttemptRecord();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `string` | No | ID of the Connect application that created the PaymentAttemptRecord. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer_details` | `mixed` | No | Customer information for this payment. |
| `customer_presence` | `string` | No | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method_details` | `mixed` | No | Information about the Payment Method debited for this payment. |
| `payment_record` | `string` | No | ID of the Payment Record this Payment Attempt Record belongs to. |
| `processor_details` | `array` | Yes | Processor information associated with this payment. |
| `reported_by` | `string` | Yes | Indicates who reported the payment. |
| `shipping_details` | `mixed` | No | Shipping information for this payment. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentAttemptRecord()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PaymentAttemptRecord()->load(["id" => "payment_attempt_record_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentAttemptRecordEntity`

Create a new `PaymentAttemptRecordEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentEvaluationEntity

```php
$payment_evaluation = $client->PaymentEvaluation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_device_metadata_details` | `array` | Yes | Client device metadata attached to this payment evaluation. |
| `created_at` | `int` | Yes | Time at which the object was created. |
| `customer_details` | `array` | No | Customer details attached to this payment evaluation. |
| `events` | `array` | Yes | Event information associated with the payment evaluation, such as refunds, dispute, early fraud warnings, or user interventions. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `outcome` | `mixed` | No | Indicates the final outcome for the payment evaluation. |
| `payment_details` | `array` | Yes | Payment details attached to this payment evaluation. |
| `recommended_action` | `string` | Yes | Recommended action based on the score of the `fraudulent_payment` signal. |
| `signals` | `array` | Yes | Collection of signals for this payment evaluation. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PaymentEvaluation()->create([
  "client_device_metadata_details" => null, // array
  "created_at" => null, // int
  "events" => null, // array
  "id" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "payment_details" => null, // array
  "recommended_action" => null, // string
  "signals" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentEvaluationEntity`

Create a new `PaymentEvaluationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentIntentEntity

```php
$payment_intent = $client->PaymentIntent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_payment_method_types` | `array` | No | The list of payment method types allowed for use with this payment. |
| `amount` | `int` | No | Amount intended to be collected by this PaymentIntent. |
| `amount_capturable` | `int` | No | Amount that can be captured from this PaymentIntent. |
| `amount_details` | `mixed` | No |  |
| `amount_received` | `int` | No | Amount that this PaymentIntent collects. |
| `application` | `mixed` | No | ID of the Connect application that created the PaymentIntent. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `automatic_payment_methods` | `mixed` | No | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `canceled_at` | `int` | No | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_reason` | `string` | No | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | `string` | No | Controls when the funds will be captured from the customer's account. |
| `client_secret` | `string` | No | The client secret of this PaymentIntent. |
| `confirmation_method` | `string` | No | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `mixed` | No | ID of the Customer this PaymentIntent belongs to, if one exists. |
| `customer_account` | `string` | No | ID of the Account representing the customer that this PaymentIntent belongs to, if one exists. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | `array` | No | The list of payment method types to exclude from use with this payment. |
| `hooks` | `array` | No |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last_payment_error` | `mixed` | No | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `mixed` | No | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `mixed` | No | Settings for Managed Payments. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `mixed` | No | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `mixed` | No | You can specify the settlement merchant as the connected account using the `on_behalf_of` attribute on the charge. |
| `payment_details` | `array` | No |  |
| `payment_method` | `mixed` | No | ID of the payment method used in this PaymentIntent. |
| `payment_method_configuration_details` | `mixed` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_options` | `mixed` | No | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `array` | No | The list of payment method types (e.g. |
| `payment_record` | `mixed` | No | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `presentment_details` | `array` | Yes |  |
| `processing` | `mixed` | No | If present, this property tells you about the processing state of the payment. |
| `receipt_email` | `string` | No | Email address that the receipt for the resulting payment will be sent to. |
| `review` | `mixed` | No | ID of the review associated with this PaymentIntent, if any. |
| `setup_future_usage` | `string` | No | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `shipping` | `mixed` | No | Shipping information for this PaymentIntent. |
| `statement_descriptor` | `string` | No | Text that appears on the customer's statement as the statement descriptor for a non-card charge. |
| `statement_descriptor_suffix` | `string` | No | Provides information about a card charge. |
| `status` | `string` | Yes | Status of this PaymentIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `requires_capture`, `canceled`, or `succeeded`. |
| `transfer_data` | `mixed` | No | The data that automatically creates a Transfer after the payment finalizes. |
| `transfer_group` | `string` | No | A string that identifies the resulting payment as part of a group. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PaymentIntent()->create([
  "id" => null, // string
  "created" => null, // int
  "livemode" => null, // bool
  "object" => null, // string
  "presentment_details" => null, // array
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentIntent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PaymentIntent()->load(["id" => "payment_intent_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentIntentEntity`

Create a new `PaymentIntentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentIntentAmountDetailsLineItemEntity

```php
$payment_intent_amount_details_line_item = $client->PaymentIntentAmountDetailsLineItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `discount_amount` | `int` | No | The discount applied on this line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `id` | `string` | Yes | Unique identifier for the object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method_options` | `mixed` | No | Payment method-specific information for line items. |
| `product_code` | `string` | No | The product code of the line item, such as an SKU. |
| `product_name` | `string` | Yes | The product name of the line item. |
| `quantity` | `int` | Yes | The quantity of items. |
| `tax` | `mixed` | No | Contains information about the tax on the item. |
| `unit_cost` | `int` | Yes | The unit cost of the line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `unit_of_measure` | `string` | No | A unit of measure for the line item, such as gallons, feet, meters, etc. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentIntentAmountDetailsLineItem()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentIntentAmountDetailsLineItemEntity`

Create a new `PaymentIntentAmountDetailsLineItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentLinkEntity

```php
$payment_link = $client->PaymentLink();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the payment link's `url` is active. |
| `after_completion` | `array` | Yes |  |
| `allow_promotion_codes` | `bool` | Yes | Whether user redeemable promotion codes are enabled. |
| `application` | `mixed` | No | The ID of the Connect application that created the Payment Link. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `float` | No | This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. |
| `automatic_tax` | `array` | Yes |  |
| `billing_address_collection` | `string` | Yes | Configuration for collecting the customer's billing address. |
| `consent_collection` | `mixed` | No | When set, provides configuration to gather active consent from customers. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `array` | Yes | Collect additional information from your customer using custom fields. |
| `custom_text` | `array` | Yes |  |
| `customer_creation` | `string` | Yes | Configuration for Customer creation during checkout. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `inactive_message` | `string` | No | The custom message to be displayed to a customer when a payment link is no longer active. |
| `invoice_creation` | `mixed` | No | Configuration for creating invoice for payment mode payment links. |
| `line_items` | `array` | Yes | The line items representing what is being sold. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `mixed` | No | Settings for Managed Payments for this Payment Link and resulting [CheckoutSessions](/api/checkout/sessions/object), [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/ob… |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name_collection` | `array` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `mixed` | No | The account on behalf of which to charge. |
| `optional_items` | `array` | No | The optional items presented to the customer at checkout. |
| `payment_intent_data` | `mixed` | No | Indicates the parameters to be passed to PaymentIntent creation during checkout. |
| `payment_method_collection` | `string` | Yes | Configuration for collecting a payment method during checkout. |
| `payment_method_options` | `mixed` | No | Payment-method-specific configuration. |
| `payment_method_types` | `array` | No | The list of payment method types that customers can use. |
| `phone_number_collection` | `array` | Yes |  |
| `restrictions` | `mixed` | No | Settings that restrict the usage of a payment link. |
| `shipping_address_collection` | `mixed` | No | Configuration for collecting the customer's shipping address. |
| `shipping_options` | `array` | Yes | The shipping rate options applied to the session. |
| `submit_type` | `string` | Yes | Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button. |
| `subscription_data` | `mixed` | No | When creating a subscription, the specified configuration data will be used. |
| `tax_id_collection` | `array` | Yes |  |
| `transfer_data` | `mixed` | No | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to. |
| `url` | `string` | Yes | The public URL that can be shared with customers. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PaymentLink()->create([
  "id" => null, // string
  "active" => null, // bool
  "after_completion" => null, // array
  "allow_promotion_codes" => null, // bool
  "automatic_tax" => null, // array
  "billing_address_collection" => null, // string
  "currency" => null, // string
  "custom_fields" => null, // array
  "custom_text" => null, // array
  "customer_creation" => null, // string
  "line_items" => null, // array
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "payment_method_collection" => null, // string
  "phone_number_collection" => null, // array
  "shipping_options" => null, // array
  "submit_type" => null, // string
  "tax_id_collection" => null, // array
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentLink()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PaymentLink()->load(["id" => "payment_link_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentLinkEntity`

Create a new `PaymentLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentMethodEntity

```php
$payment_method = $client->PaymentMethod();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `array` | No |  |
| `affirm` | `array` | No |  |
| `afterpay_clearpay` | `array` | No |  |
| `alipay` | `array` | No |  |
| `allow_redisplay` | `bool` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `alma` | `array` | No |  |
| `amazon_pay` | `array` | No |  |
| `au_becs_debit` | `array` | No |  |
| `bacs_debit` | `array` | No |  |
| `bancontact` | `array` | No |  |
| `billie` | `array` | No |  |
| `billing_details` | `array` | Yes |  |
| `bizum` | `array` | No |  |
| `blik` | `array` | No |  |
| `boleto` | `array` | Yes |  |
| `card` | `array` | Yes |  |
| `card_present` | `array` | Yes |  |
| `cashapp` | `array` | No |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `crypto` | `array` | No |  |
| `custom` | `array` | Yes |  |
| `customer` | `mixed` | No | The ID of the Customer to which this PaymentMethod is saved. |
| `customer_account` | `string` | No |  |
| `customer_balance` | `array` | No |  |
| `eps` | `array` | No |  |
| `fpx` | `array` | Yes |  |
| `giropay` | `array` | No |  |
| `grabpay` | `array` | No |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ideal` | `array` | No |  |
| `interac_present` | `array` | Yes |  |
| `kakao_pay` | `array` | No |  |
| `klarna` | `array` | No |  |
| `konbini` | `array` | No |  |
| `kr_card` | `array` | No |  |
| `link` | `array` | No |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `mb_way` | `array` | No |  |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mobilepay` | `array` | No |  |
| `multibanco` | `array` | No |  |
| `naver_pay` | `array` | Yes |  |
| `nz_bank_account` | `array` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `oxxo` | `array` | No |  |
| `p24` | `array` | No |  |
| `pay_by_bank` | `array` | No |  |
| `payco` | `array` | No |  |
| `paynow` | `array` | No |  |
| `paypal` | `array` | No |  |
| `paypay` | `array` | No |  |
| `payto` | `array` | No |  |
| `pix` | `array` | No |  |
| `promptpay` | `array` | No |  |
| `radar_options` | `array` | No | Options to configure Radar. |
| `revolut_pay` | `array` | No |  |
| `samsung_pay` | `array` | No |  |
| `satispay` | `array` | No |  |
| `scalapay` | `array` | No |  |
| `sepa_debit` | `array` | No |  |
| `sequra` | `array` | No |  |
| `sofort` | `array` | No |  |
| `sunbit` | `array` | No |  |
| `swish` | `array` | No |  |
| `twint` | `array` | No |  |
| `type` | `string` | Yes | The type of the PaymentMethod. |
| `upi` | `array` | No |  |
| `us_bank_account` | `array` | No |  |
| `wechat_pay` | `array` | No |  |
| `zip` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PaymentMethod()->create([
  "id" => null, // string
  "billing_details" => null, // array
  "boleto" => null, // array
  "card" => null, // array
  "card_present" => null, // array
  "created" => null, // int
  "custom" => null, // array
  "fpx" => null, // array
  "interac_present" => null, // array
  "livemode" => null, // bool
  "naver_pay" => null, // array
  "nz_bank_account" => null, // array
  "object" => null, // string
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentMethod()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PaymentMethod()->load(["id" => "payment_method_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentMethodEntity`

Create a new `PaymentMethodEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentMethodConfigurationEntity

```php
$payment_method_configuration = $client->PaymentMethodConfiguration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `array` | Yes |  |
| `active` | `bool` | Yes | Whether the configuration can be used for new payments. |
| `affirm` | `array` | Yes |  |
| `afterpay_clearpay` | `array` | Yes |  |
| `alipay` | `array` | Yes |  |
| `alma` | `array` | Yes |  |
| `amazon_pay` | `array` | Yes |  |
| `apple_pay` | `array` | Yes |  |
| `application` | `string` | No | For child configs, the Connect application associated with the configuration. |
| `au_becs_debit` | `array` | Yes |  |
| `bacs_debit` | `array` | Yes |  |
| `bancontact` | `array` | Yes |  |
| `billie` | `array` | Yes |  |
| `bizum` | `array` | Yes |  |
| `blik` | `array` | Yes |  |
| `boleto` | `array` | Yes |  |
| `card` | `array` | Yes |  |
| `cartes_bancaires` | `array` | Yes |  |
| `cashapp` | `array` | Yes |  |
| `crypto` | `array` | Yes |  |
| `customer_balance` | `array` | Yes |  |
| `eps` | `array` | Yes |  |
| `fpx` | `array` | Yes |  |
| `giropay` | `array` | Yes |  |
| `google_pay` | `array` | Yes |  |
| `grabpay` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ideal` | `array` | Yes |  |
| `is_default` | `bool` | Yes | The default configuration is used whenever a payment method configuration is not specified. |
| `jcb` | `array` | Yes |  |
| `kakao_pay` | `array` | Yes |  |
| `klarna` | `array` | Yes |  |
| `konbini` | `array` | Yes |  |
| `kr_card` | `array` | Yes |  |
| `link` | `array` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `mb_way` | `array` | Yes |  |
| `mobilepay` | `array` | Yes |  |
| `multibanco` | `array` | Yes |  |
| `name` | `string` | Yes | The configuration's name. |
| `naver_pay` | `array` | Yes |  |
| `nz_bank_account` | `array` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `oxxo` | `array` | Yes |  |
| `p24` | `array` | Yes |  |
| `parent` | `string` | No | For child configs, the configuration's parent configuration. |
| `pay_by_bank` | `array` | Yes |  |
| `payco` | `array` | Yes |  |
| `paynow` | `array` | Yes |  |
| `paypal` | `array` | Yes |  |
| `paypay` | `array` | Yes |  |
| `payto` | `array` | Yes |  |
| `pix` | `array` | Yes |  |
| `promptpay` | `array` | Yes |  |
| `revolut_pay` | `array` | Yes |  |
| `samsung_pay` | `array` | Yes |  |
| `satispay` | `array` | Yes |  |
| `scalapay` | `array` | Yes |  |
| `sepa_debit` | `array` | Yes |  |
| `sequra` | `array` | Yes |  |
| `sofort` | `array` | Yes |  |
| `sunbit` | `array` | Yes |  |
| `swish` | `array` | Yes |  |
| `twint` | `array` | Yes |  |
| `upi` | `array` | Yes |  |
| `us_bank_account` | `array` | Yes |  |
| `wechat_pay` | `array` | Yes |  |
| `zip` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PaymentMethodConfiguration()->create([
  "id" => null, // string
  "acss_debit" => null, // array
  "active" => null, // bool
  "affirm" => null, // array
  "afterpay_clearpay" => null, // array
  "alipay" => null, // array
  "alma" => null, // array
  "amazon_pay" => null, // array
  "apple_pay" => null, // array
  "au_becs_debit" => null, // array
  "bacs_debit" => null, // array
  "bancontact" => null, // array
  "billie" => null, // array
  "bizum" => null, // array
  "blik" => null, // array
  "boleto" => null, // array
  "card" => null, // array
  "cartes_bancaires" => null, // array
  "cashapp" => null, // array
  "crypto" => null, // array
  "customer_balance" => null, // array
  "eps" => null, // array
  "fpx" => null, // array
  "giropay" => null, // array
  "google_pay" => null, // array
  "grabpay" => null, // array
  "ideal" => null, // array
  "is_default" => null, // bool
  "jcb" => null, // array
  "kakao_pay" => null, // array
  "klarna" => null, // array
  "konbini" => null, // array
  "kr_card" => null, // array
  "link" => null, // array
  "livemode" => null, // bool
  "mb_way" => null, // array
  "mobilepay" => null, // array
  "multibanco" => null, // array
  "name" => null, // string
  "naver_pay" => null, // array
  "nz_bank_account" => null, // array
  "object" => null, // string
  "oxxo" => null, // array
  "p24" => null, // array
  "pay_by_bank" => null, // array
  "payco" => null, // array
  "paynow" => null, // array
  "paypal" => null, // array
  "paypay" => null, // array
  "payto" => null, // array
  "pix" => null, // array
  "promptpay" => null, // array
  "revolut_pay" => null, // array
  "samsung_pay" => null, // array
  "satispay" => null, // array
  "scalapay" => null, // array
  "sepa_debit" => null, // array
  "sequra" => null, // array
  "sofort" => null, // array
  "sunbit" => null, // array
  "swish" => null, // array
  "twint" => null, // array
  "upi" => null, // array
  "us_bank_account" => null, // array
  "wechat_pay" => null, // array
  "zip" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentMethodConfiguration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PaymentMethodConfiguration()->load(["id" => "payment_method_configuration_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentMethodConfigurationEntity`

Create a new `PaymentMethodConfigurationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentMethodDomainEntity

```php
$payment_method_domain = $client->PaymentMethodDomain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amazon_pay` | `array` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `apple_pay` | `array` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `created` | `int` | Yes | Time at which the object was created. |
| `domain_name` | `string` | Yes | The domain name that this payment method domain object represents. |
| `enabled` | `bool` | Yes | Whether this payment method domain is enabled. |
| `google_pay` | `array` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `klarna` | `array` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `link` | `array` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `paypal` | `array` | Yes | Indicates the status of a specific payment method on a payment method domain. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PaymentMethodDomain()->create([
  "id" => null, // string
  "amazon_pay" => null, // array
  "apple_pay" => null, // array
  "created" => null, // int
  "domain_name" => null, // string
  "enabled" => null, // bool
  "google_pay" => null, // array
  "klarna" => null, // array
  "link" => null, // array
  "livemode" => null, // bool
  "object" => null, // string
  "paypal" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentMethodDomain()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PaymentMethodDomain()->load(["id" => "payment_method_domain_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentMethodDomainEntity`

Create a new `PaymentMethodDomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentRecordEntity

```php
$payment_record = $client->PaymentRecord();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `array` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `string` | No | ID of the Connect application that created the PaymentRecord. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer_details` | `mixed` | No | Customer information for this payment. |
| `customer_presence` | `string` | No | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `latest_payment_attempt_record` | `string` | No | ID of the latest Payment Attempt Record attached to this Payment Record. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method_details` | `mixed` | No | Information about the Payment Method debited for this payment. |
| `processor_details` | `array` | Yes | Processor information associated with this payment. |
| `reported_by` | `string` | Yes | Indicates who reported the payment. |
| `shipping_details` | `mixed` | No | Shipping information for this payment. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PaymentRecord()->create([
  "amount" => null, // array
  "amount_authorized" => null, // array
  "amount_canceled" => null, // array
  "amount_failed" => null, // array
  "amount_guaranteed" => null, // array
  "amount_refunded" => null, // array
  "amount_requested" => null, // array
  "created" => null, // int
  "id" => null, // string
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "processor_details" => null, // array
  "reported_by" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentRecord()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PaymentRecord()->load(["id" => "payment_record_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentRecordEntity`

Create a new `PaymentRecordEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PayoutEntity

```php
$payout = $client->Payout();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The amount (in cents (or local equivalent)) that transfers to your bank account or debit card. |
| `application_fee` | `mixed` | No | The application fee (if any) for the payout. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) requested for the payout. |
| `arrival_date` | `int` | Yes | Date that you can expect the payout to arrive in the bank. |
| `automatic` | `bool` | Yes | Returns `true` if the payout is created by an [automated payout schedule](https://docs.stripe.com/payouts#payout-schedule) and `false` if it's [requested manually](https://stripe.com/docs/payouts#manual-payouts). |
| `balance_transaction` | `mixed` | No | ID of the balance transaction that describes the impact of this payout on your account balance. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `destination` | `mixed` | No | ID of the bank account or card the payout is sent to. |
| `failure_balance_transaction` | `mixed` | No | If the payout fails or cancels, this is the ID of the balance transaction that reverses the initial balance transaction and returns the funds from the failed payout back in your balance. |
| `failure_code` | `string` | No | Error code that provides a reason for a payout failure, if available. |
| `failure_message` | `string` | No | Message that provides the reason for a payout failure, if available. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `method` | `string` | Yes | The method used to send this payout, which can be `standard` or `instant`. |
| `object` | `string` | Yes | String representing the object's type. |
| `original_payout` | `mixed` | No | If the payout reverses another, this is the ID of the original payout. |
| `payout_method` | `string` | No | ID of the v2 FinancialAccount the funds are sent to. |
| `reconciliation_status` | `string` | Yes | If `completed`, you can use the [Balance Transactions API](https://docs.stripe.com/api/balance_transactions/list#balance_transaction_list-payout) to list all balance transactions that are paid out in this payout. |
| `reversed_by` | `mixed` | No | If the payout reverses, this is the ID of the payout that reverses this payout. |
| `source_type` | `string` | Yes | The source balance this payout came from, which can be one of the following: `card`, `fpx`, or `bank_account`. |
| `statement_descriptor` | `string` | No | Extra information about a payout that displays on the user's bank statement. |
| `status` | `string` | Yes | Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`. |
| `trace_id` | `string` | No | A value that generates from the beneficiary's bank that allows users to track payouts with their bank. |
| `type` | `string` | Yes | Can be `bank_account` or `card`. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Payout()->create([
  "id" => null, // string
  "amount" => null, // int
  "arrival_date" => null, // int
  "automatic" => null, // bool
  "created" => null, // int
  "currency" => null, // string
  "livemode" => null, // bool
  "method" => null, // string
  "object" => null, // string
  "reconciliation_status" => null, // string
  "source_type" => null, // string
  "status" => null, // string
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Payout()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Payout()->load(["id" => "payout_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PayoutEntity`

Create a new `PayoutEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PersonEntity

```php
$person = $client->Person();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | The account the person is associated with. |
| `additional_tos_acceptances` | `array` | No |  |
| `address` | `array` | No |  |
| `address_kana` | `mixed` | No |  |
| `address_kanji` | `mixed` | No |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `dob` | `array` | No |  |
| `email` | `string` | No | The person's email address. |
| `first_name` | `string` | No | The person's first name. |
| `first_name_kana` | `string` | No | The Kana variation of the person's first name (Japan only). |
| `first_name_kanji` | `string` | No | The Kanji variation of the person's first name (Japan only). |
| `full_name_aliases` | `array` | No | A list of alternate names or aliases that the person is known by. |
| `future_requirements` | `mixed` | No |  |
| `gender` | `string` | No | The person's gender. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `id_number_provided` | `bool` | No | Whether the person's `id_number` was provided. |
| `id_number_secondary_provided` | `bool` | No | Whether the person's `id_number_secondary` was provided. |
| `last_name` | `string` | No | The person's last name. |
| `last_name_kana` | `string` | No | The Kana variation of the person's last name (Japan only). |
| `last_name_kanji` | `string` | No | The Kanji variation of the person's last name (Japan only). |
| `maiden_name` | `string` | No | The person's maiden name. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nationality` | `string` | No | The country where the person is a national. |
| `object` | `string` | Yes | String representing the object's type. |
| `phone` | `string` | No | The person's phone number. |
| `political_exposure` | `string` | No | Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction. |
| `registered_address` | `array` | No |  |
| `relationship` | `array` | No |  |
| `requirements` | `mixed` | No |  |
| `ssn_last_4_provided` | `bool` | No | Whether the last four digits of the person's Social Security number have been provided (U.S. |
| `us_cfpb_data` | `mixed` | No | Demographic data related to the person. |
| `verification` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Person()->create([
  "account_id" => null, // string
  "account" => null, // string
  "created" => null, // int
  "object" => null, // string
  "verification" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Person()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Person()->load(["id" => "person_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PersonEntity`

Create a new `PersonEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PersonalizationDesignEntity

```php
$personalization_design = $client->PersonalizationDesign();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_logo` | `mixed` | No | The file for the card logo to use with physical bundles that support card logos. |
| `carrier_text` | `mixed` | No | Hash containing carrier text, for use with physical bundles that support carrier text. |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | No | A lookup key used to retrieve personalization designs dynamically from a static string. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | Friendly display name. |
| `object` | `string` | Yes | String representing the object's type. |
| `physical_bundle` | `mixed` | Yes | The physical bundle object belonging to this personalization design. |
| `preferences` | `array` | Yes |  |
| `rejection_reasons` | `array` | Yes |  |
| `status` | `string` | Yes | Whether this personalization design can be used to create cards. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PersonalizationDesign()->create([
  "id" => null, // string
  "created" => null, // int
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "physical_bundle" => null, // mixed
  "preferences" => null, // array
  "rejection_reasons" => null, // array
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PersonalizationDesign()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PersonalizationDesign()->load(["id" => "personalization_design_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PersonalizationDesignEntity`

Create a new `PersonalizationDesignEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PhysicalBundleEntity

```php
$physical_bundle = $client->PhysicalBundle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_logo` | `string` | Yes | The policy for how to use card logo images in a card design with this physical bundle. |
| `carrier_text` | `string` | Yes | The policy for how to use carrier letter text in a card design with this physical bundle. |
| `features` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Yes | Friendly display name. |
| `object` | `string` | Yes | String representing the object's type. |
| `second_line` | `string` | Yes | The policy for how to use a second line on a card with this physical bundle. |
| `status` | `string` | Yes | Whether this physical bundle can be used to create cards. |
| `type` | `string` | Yes | Whether this physical bundle is a standard Stripe offering or custom-made for you. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PhysicalBundle()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PhysicalBundle()->load(["id" => "physical_bundle_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PhysicalBundleEntity`

Create a new `PhysicalBundleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PlanEntity

```php
$plan = $client->Plan();
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
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `meter` | `string` | No | The meter tracking the usage of a metered price |
| `nickname` | `string` | No | A brief description of the plan, hidden from customers. |
| `object` | `string` | Yes | String representing the object's type. |
| `product` | `mixed` | No | The product whose pricing this plan determines. |
| `tiers` | `array` | No | Each element represents a pricing tier. |
| `tiers_mode` | `string` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_usage` | `mixed` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_period_days` | `int` | No | Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://docs.stripe.com/api#create_subscription-trial_from_plan). |
| `usage_type` | `string` | Yes | Configures how the quantity per period should be determined. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Plan()->create([
  "id" => null, // string
  "active" => null, // bool
  "billing_scheme" => null, // string
  "created" => null, // int
  "currency" => null, // string
  "interval" => null, // string
  "interval_count" => null, // int
  "livemode" => null, // bool
  "object" => null, // string
  "usage_type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Plan()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Plan()->load(["id" => "plan_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PlanEntity`

Create a new `PlanEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PriceEntity

```php
$price = $client->Price();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the price can be used for new purchases. |
| `billing_scheme` | `string` | Yes | Describes how to compute the price per period. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | `array` | No | Prices defined in each available currency option. |
| `custom_unit_amount` | `mixed` | No | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | No | A lookup key used to retrieve prices dynamically from a static string. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | No | A brief description of the price, hidden from customers. |
| `object` | `string` | Yes | String representing the object's type. |
| `product` | `mixed` | Yes | The ID of the product this price is associated with. |
| `recurring` | `mixed` | No | The recurring components of a price such as `interval` and `usage_type`. |
| `tax_behavior` | `string` | No | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tiers` | `array` | No | Each element represents a pricing tier. |
| `tiers_mode` | `string` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_quantity` | `mixed` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `type` | `string` | Yes | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | `int` | No | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | `string` | No | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Price()->create([
  "id" => null, // string
  "active" => null, // bool
  "billing_scheme" => null, // string
  "created" => null, // int
  "currency" => null, // string
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "product" => null, // mixed
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Price()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Price()->load(["id" => "price_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PriceEntity`

Create a new `PriceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductEntity

```php
$product = $client->Product();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the product is currently available for purchase. |
| `created` | `int` | Yes | Time at which the object was created. |
| `current_prices_per_metric_ton` | `array` | Yes | Current prices for a metric ton of carbon removal in a currency's smallest unit. |
| `default_price` | `mixed` | No | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `delivery_year` | `int` | No | The year in which the carbon removal is expected to be delivered. |
| `description` | `string` | No | The product's description, meant to be displayable to the customer. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `images` | `array` | Yes | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `livemode` | `bool` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `marketing_features` | `array` | Yes | A list of up to 15 marketing features for this product. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons_available` | `string` | Yes | The quantity of metric tons available for reservation. |
| `name` | `string` | Yes | The Climate product's name. |
| `object` | `string` | Yes | String representing the object's type. |
| `package_dimensions` | `mixed` | No | The dimensions of this product for shipping purposes. |
| `shippable` | `bool` | No | Whether this product is shipped (i.e., physical goods). |
| `statement_descriptor` | `string` | No | Extra information about a product which will appear on your customer's credit card statement. |
| `suppliers` | `array` | Yes | The carbon removal suppliers that fulfill orders for this Climate product. |
| `tax_code` | `mixed` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `mixed` | No | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `unit_label` | `string` | No | A label that represents units of this product. |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `url` | `string` | No | A URL of a publicly-accessible webpage for this product. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Product()->create([
  "id" => null, // string
  "active" => null, // bool
  "created" => null, // int
  "current_prices_per_metric_ton" => null, // array
  "images" => null, // array
  "livemode" => null, // bool
  "marketing_features" => null, // array
  "metadata" => null, // array
  "metric_tons_available" => null, // string
  "name" => null, // string
  "object" => null, // string
  "suppliers" => null, // array
  "updated" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Product()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Product()->load(["id" => "product_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Product()->remove(["id" => "product_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductEntity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductFeatureEntity

```php
$product_feature = $client->ProductFeature();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | Yes | A unique key you provide as your own system identifier. |
| `metadata` | `array` | Yes | Set of key-value pairs that you can attach to an object. |
| `name` | `string` | Yes | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProductFeature()->create([
  "id" => null, // string
  "active" => null, // bool
  "livemode" => null, // bool
  "lookup_key" => null, // string
  "metadata" => null, // array
  "name" => null, // string
  "object" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProductFeature()->load(["id" => "product_feature_id", "product_id" => "product_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductFeatureEntity`

Create a new `ProductFeatureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PromotionCodeEntity

```php
$promotion_code = $client->PromotionCode();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the promotion code is currently active. |
| `code` | `string` | Yes | The customer-facing code. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `mixed` | No | The customer who can use this promotion code. |
| `customer_account` | `string` | No | The account representing the customer who can use this promotion code. |
| `expires_at` | `int` | No | Date at which the promotion code can no longer be redeemed. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | `int` | No | Maximum number of times this promotion code can be redeemed. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `promotion` | `array` | Yes |  |
| `restrictions` | `array` | Yes |  |
| `times_redeemed` | `int` | Yes | Number of times this promotion code has been used. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PromotionCode()->create([
  "id" => null, // string
  "active" => null, // bool
  "code" => null, // string
  "created" => null, // int
  "livemode" => null, // bool
  "object" => null, // string
  "promotion" => null, // array
  "restrictions" => null, // array
  "times_redeemed" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PromotionCode()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PromotionCode()->load(["id" => "promotion_code_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PromotionCodeEntity`

Create a new `PromotionCodeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## QuoteEntity

```php
$quote = $client->Quote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_subtotal` | `int` | Yes | Total before any discounts or taxes are applied. |
| `amount_total` | `int` | Yes | Total after discounts and taxes are applied. |
| `application` | `mixed` | No | ID of the Connect Application that created the quote. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `float` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `array` | Yes |  |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `computed` | `array` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `mixed` | No | The customer who received this quote. |
| `customer_account` | `string` | No | The account representing the customer who received this quote. |
| `default_tax_rates` | `array` | No | The tax rates applied to this quote. |
| `description` | `string` | No | A description that will be displayed on the quote PDF. |
| `discounts` | `array` | Yes | The discounts applied to this quote. |
| `expires_at` | `int` | Yes | The date on which the quote will be canceled if in `open` or `draft` status. |
| `footer` | `string` | No | A footer that will be displayed on the quote PDF. |
| `from_quote` | `mixed` | No | Details of the quote that was cloned. |
| `header` | `string` | No | A header that will be displayed on the quote PDF. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `mixed` | No | The invoice that was created from this quote. |
| `invoice_settings` | `array` | Yes |  |
| `line_items` | `array` | Yes | A list of items the customer is being quoted for. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `string` | No | A unique number that identifies this particular quote. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `mixed` | No | The account on behalf of which to charge. |
| `status` | `string` | Yes | The status of the quote. |
| `status_transitions` | `array` | Yes |  |
| `subscription` | `mixed` | No | The subscription that was created or updated from this quote. |
| `subscription_data` | `array` | Yes |  |
| `subscription_schedule` | `mixed` | No | The subscription schedule that was created or updated from this quote. |
| `test_clock` | `mixed` | No | ID of the test clock this quote belongs to. |
| `total_details` | `array` | Yes |  |
| `transfer_data` | `mixed` | No | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Quote()->create([
  "id" => null, // string
  "amount_subtotal" => null, // int
  "amount_total" => null, // int
  "automatic_tax" => null, // array
  "collection_method" => null, // string
  "computed" => null, // array
  "created" => null, // int
  "discounts" => null, // array
  "expires_at" => null, // int
  "invoice_settings" => null, // array
  "line_items" => null, // array
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "status" => null, // string
  "status_transitions" => null, // array
  "subscription_data" => null, // array
  "total_details" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Quote()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Quote()->load(["id" => "quote_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): QuoteEntity`

Create a new `QuoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## QuoteComputedUpfrontLineItemEntity

```php
$quote_computed_upfront_line_item = $client->QuoteComputedUpfrontLineItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjustable_quantity` | `mixed` | No |  |
| `amount_discount` | `int` | Yes | Total discount amount applied. |
| `amount_subtotal` | `int` | Yes | Total before any discounts or taxes are applied. |
| `amount_tax` | `int` | Yes | Total tax amount applied. |
| `amount_total` | `int` | Yes | Total after discounts and taxes. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discounts` | `array` | No | The discounts applied to the line item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `price` | `float` | No | The price used to generate the line item. |
| `quantity` | `int` | No | The quantity of products being purchased. |
| `taxes` | `array` | No | The taxes applied to the line item. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->QuoteComputedUpfrontLineItem()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): QuoteComputedUpfrontLineItemEntity`

Create a new `QuoteComputedUpfrontLineItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## QuotePdfEntity

```php
$quote_pdf = $client->QuotePdf();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->QuotePdf()->load(["id" => "quote_pdf_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): QuotePdfEntity`

Create a new `QuotePdfEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReaderEntity

```php
$reader = $client->Reader();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `mixed` | No | The most recent action performed by the reader. |
| `device_sw_version` | `string` | No | The current software version of the reader. |
| `device_type` | `string` | Yes | Device type of the reader. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ip_address` | `string` | No | The local IP address of the reader. |
| `label` | `string` | Yes | Custom label given to the reader for easier identification. |
| `last_seen_at` | `int` | No | The last time this reader reported to Stripe backend. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `location` | `mixed` | No | The location identifier of the reader. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `serial_number` | `string` | Yes | Serial number of the reader. |
| `status` | `string` | No | The networking status of the reader. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Reader()->create([
  "id" => null, // string
  "device_type" => null, // string
  "label" => null, // string
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "serial_number" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Reader()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Reader()->load(["id" => "reader_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Reader()->remove(["id" => "reader_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReaderEntity`

Create a new `ReaderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReceivedCreditEntity

```php
$received_credit = $client->ReceivedCredit();
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
| `initiating_payment_method_details` | `array` | Yes |  |
| `linked_flows` | `array` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `string` | Yes | The rails used to send the funds. |
| `object` | `string` | Yes | String representing the object's type. |
| `reversal_details` | `mixed` | No | Details describing when a ReceivedCredit may be reversed. |
| `status` | `string` | Yes | Status of the ReceivedCredit. |
| `transaction` | `mixed` | No | The Transaction associated with this object. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ReceivedCredit()->create([
  "amount" => null, // int
  "created" => null, // int
  "currency" => null, // string
  "description" => null, // string
  "id" => null, // string
  "initiating_payment_method_details" => null, // array
  "linked_flows" => null, // array
  "livemode" => null, // bool
  "network" => null, // string
  "object" => null, // string
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ReceivedCredit()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ReceivedCredit()->load(["id" => "received_credit_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReceivedCreditEntity`

Create a new `ReceivedCreditEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReceivedDebitEntity

```php
$received_debit = $client->ReceivedDebit();
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
| `initiating_payment_method_details` | `array` | Yes |  |
| `linked_flows` | `array` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `string` | Yes | The network used for the ReceivedDebit. |
| `object` | `string` | Yes | String representing the object's type. |
| `reversal_details` | `mixed` | No | Details describing when a ReceivedDebit might be reversed. |
| `status` | `string` | Yes | Status of the ReceivedDebit. |
| `transaction` | `mixed` | No | The Transaction associated with this object. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ReceivedDebit()->create([
  "amount" => null, // int
  "created" => null, // int
  "currency" => null, // string
  "description" => null, // string
  "id" => null, // string
  "initiating_payment_method_details" => null, // array
  "linked_flows" => null, // array
  "livemode" => null, // bool
  "network" => null, // string
  "object" => null, // string
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ReceivedDebit()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ReceivedDebit()->load(["id" => "received_debit_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReceivedDebitEntity`

Create a new `ReceivedDebitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RefundEntity

```php
$refund = $client->Refund();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount, in cents (or local equivalent). |
| `balance_transaction` | `mixed` | No | Balance transaction that describes the impact on your account balance. |
| `charge` | `mixed` | No | ID of the charge that's refunded. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `mixed` | No | ID of the customer of this refund. |
| `customer_account` | `string` | No | ID of the account of this refund. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `destination_details` | `array` | Yes |  |
| `failure_balance_transaction` | `mixed` | No | After the refund fails, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction. |
| `failure_reason` | `string` | No | Provides the reason for the refund failure. |
| `fee` | `mixed` | Yes | ID of the application fee that was refunded. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `instructions_email` | `string` | No | For payment methods without native refund support (for example, Konbini, PromptPay), provide an email address for the customer to receive refund instructions. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `array` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `mixed` | No | ID of the PaymentIntent that's refunded. |
| `payment_method` | `mixed` | No | ID of the payment method associated with this refund. |
| `pending_reason` | `string` | No | Provides the reason for why the refund is pending. |
| `presentment_details` | `array` | Yes |  |
| `reason` | `string` | No | Reason for the refund, which is either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`). |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this refund. |
| `source_transfer_reversal` | `mixed` | No | The transfer reversal that's associated with the refund. |
| `status` | `string` | No | Status of the refund. |
| `transfer_reversal` | `mixed` | No | This refers to the transfer reversal object if the accompanying transfer reverses. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Refund()->create([
  "id" => null, // string
  "amount" => null, // int
  "created" => null, // int
  "currency" => null, // string
  "destination_details" => null, // array
  "fee" => null, // mixed
  "next_action" => null, // array
  "object" => null, // string
  "presentment_details" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Refund()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Refund()->load(["id" => "refund_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RefundEntity`

Create a new `RefundEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RegistrationEntity

```php
$registration = $client->Registration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_from` | `int` | Yes | Time at which the registration becomes active. |
| `ae` | `array` | Yes |  |
| `al` | `array` | Yes |  |
| `am` | `array` | Yes |  |
| `ao` | `array` | Yes |  |
| `at` | `array` | Yes |  |
| `au` | `array` | Yes |  |
| `aw` | `array` | Yes |  |
| `az` | `array` | Yes |  |
| `ba` | `array` | Yes |  |
| `bb` | `array` | Yes |  |
| `bd` | `array` | Yes |  |
| `be` | `array` | Yes |  |
| `bf` | `array` | Yes |  |
| `bg` | `array` | Yes |  |
| `bh` | `array` | Yes |  |
| `bj` | `array` | Yes |  |
| `bs` | `array` | Yes |  |
| `by` | `array` | Yes |  |
| `ca` | `array` | Yes |  |
| `cd` | `array` | Yes |  |
| `ch` | `array` | Yes |  |
| `cl` | `array` | Yes |  |
| `cm` | `array` | Yes |  |
| `co` | `array` | Yes |  |
| `country` | `string` | Yes | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `country_options` | `array` | Yes |  |
| `cr` | `array` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `cv` | `array` | Yes |  |
| `cy` | `array` | Yes |  |
| `cz` | `array` | Yes |  |
| `de` | `array` | Yes |  |
| `dk` | `array` | Yes |  |
| `ec` | `array` | Yes |  |
| `ee` | `array` | Yes |  |
| `eg` | `array` | Yes |  |
| `es` | `array` | Yes |  |
| `et` | `array` | Yes |  |
| `expires_at` | `int` | No | If set, the registration stops being active at this time. |
| `fi` | `array` | Yes |  |
| `fr` | `array` | Yes |  |
| `gb` | `array` | Yes |  |
| `ge` | `array` | Yes |  |
| `gn` | `array` | Yes |  |
| `gr` | `array` | Yes |  |
| `hr` | `array` | Yes |  |
| `hu` | `array` | Yes |  |
| `id` | `array` | Yes | Unique identifier for the object. |
| `ie` | `array` | Yes |  |
| `in` | `array` | Yes |  |
| `is` | `array` | Yes |  |
| `it` | `array` | Yes |  |
| `jp` | `array` | Yes |  |
| `ke` | `array` | Yes |  |
| `kg` | `array` | Yes |  |
| `kh` | `array` | Yes |  |
| `kr` | `array` | Yes |  |
| `kz` | `array` | Yes |  |
| `la` | `array` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lk` | `array` | Yes |  |
| `lt` | `array` | Yes |  |
| `lu` | `array` | Yes |  |
| `lv` | `array` | Yes |  |
| `ma` | `array` | Yes |  |
| `md` | `array` | Yes |  |
| `me` | `array` | Yes |  |
| `mk` | `array` | Yes |  |
| `mr` | `array` | Yes |  |
| `mt` | `array` | Yes |  |
| `mx` | `array` | Yes |  |
| `my` | `array` | Yes |  |
| `ng` | `array` | Yes |  |
| `nl` | `array` | Yes |  |
| `no` | `array` | Yes |  |
| `np` | `array` | Yes |  |
| `nz` | `array` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `om` | `array` | Yes |  |
| `pe` | `array` | Yes |  |
| `ph` | `array` | Yes |  |
| `pl` | `array` | Yes |  |
| `pt` | `array` | Yes |  |
| `ro` | `array` | Yes |  |
| `rs` | `array` | Yes |  |
| `ru` | `array` | Yes |  |
| `sa` | `array` | Yes |  |
| `se` | `array` | Yes |  |
| `sg` | `array` | Yes |  |
| `si` | `array` | Yes |  |
| `sk` | `array` | Yes |  |
| `sn` | `array` | Yes |  |
| `sr` | `array` | Yes |  |
| `status` | `string` | Yes | The status of the registration. |
| `th` | `array` | Yes |  |
| `tj` | `array` | Yes |  |
| `tr` | `array` | Yes |  |
| `tw` | `array` | Yes |  |
| `tz` | `array` | Yes |  |
| `ua` | `array` | Yes |  |
| `ug` | `array` | Yes |  |
| `us` | `array` | Yes |  |
| `uy` | `array` | Yes |  |
| `uz` | `array` | Yes |  |
| `vn` | `array` | Yes |  |
| `za` | `array` | Yes |  |
| `zm` | `array` | Yes |  |
| `zw` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Registration()->create([
  "id" => null, // string
  "active_from" => null, // int
  "ae" => null, // array
  "al" => null, // array
  "am" => null, // array
  "ao" => null, // array
  "at" => null, // array
  "au" => null, // array
  "aw" => null, // array
  "az" => null, // array
  "ba" => null, // array
  "bb" => null, // array
  "bd" => null, // array
  "be" => null, // array
  "bf" => null, // array
  "bg" => null, // array
  "bh" => null, // array
  "bj" => null, // array
  "bs" => null, // array
  "by" => null, // array
  "ca" => null, // array
  "cd" => null, // array
  "ch" => null, // array
  "cl" => null, // array
  "cm" => null, // array
  "co" => null, // array
  "country" => null, // string
  "country_options" => null, // array
  "cr" => null, // array
  "created" => null, // int
  "cv" => null, // array
  "cy" => null, // array
  "cz" => null, // array
  "de" => null, // array
  "dk" => null, // array
  "ec" => null, // array
  "ee" => null, // array
  "eg" => null, // array
  "es" => null, // array
  "et" => null, // array
  "fi" => null, // array
  "fr" => null, // array
  "gb" => null, // array
  "ge" => null, // array
  "gn" => null, // array
  "gr" => null, // array
  "hr" => null, // array
  "hu" => null, // array
  "ie" => null, // array
  "in" => null, // array
  "is" => null, // array
  "it" => null, // array
  "jp" => null, // array
  "ke" => null, // array
  "kg" => null, // array
  "kh" => null, // array
  "kr" => null, // array
  "kz" => null, // array
  "la" => null, // array
  "livemode" => null, // bool
  "lk" => null, // array
  "lt" => null, // array
  "lu" => null, // array
  "lv" => null, // array
  "ma" => null, // array
  "md" => null, // array
  "me" => null, // array
  "mk" => null, // array
  "mr" => null, // array
  "mt" => null, // array
  "mx" => null, // array
  "my" => null, // array
  "ng" => null, // array
  "nl" => null, // array
  "no" => null, // array
  "np" => null, // array
  "nz" => null, // array
  "object" => null, // string
  "om" => null, // array
  "pe" => null, // array
  "ph" => null, // array
  "pl" => null, // array
  "pt" => null, // array
  "ro" => null, // array
  "rs" => null, // array
  "ru" => null, // array
  "sa" => null, // array
  "se" => null, // array
  "sg" => null, // array
  "si" => null, // array
  "sk" => null, // array
  "sn" => null, // array
  "sr" => null, // array
  "status" => null, // string
  "th" => null, // array
  "tj" => null, // array
  "tr" => null, // array
  "tw" => null, // array
  "tz" => null, // array
  "ua" => null, // array
  "ug" => null, // array
  "us" => null, // array
  "uy" => null, // array
  "uz" => null, // array
  "vn" => null, // array
  "za" => null, // array
  "zm" => null, // array
  "zw" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Registration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Registration()->load(["id" => "registration_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RegistrationEntity`

Create a new `RegistrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReportRunEntity

```php
$report_run = $client->ReportRun();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `error` | `string` | No | If something should go wrong during the run, a message about the failure (populated when `status=failed`). |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | `true` if the report is run on live mode data and `false` if it is run on test mode data. |
| `object` | `string` | Yes | String representing the object's type. |
| `parameters` | `array` | Yes |  |
| `report_type` | `string` | Yes | The ID of the [report type](https://docs.stripe.com/reports/report-types) to run, such as `"balance.summary.1"`. |
| `result` | `mixed` | No | The file object representing the result of the report run (populated when `status=succeeded`). |
| `status` | `string` | Yes | Status of this report run. |
| `succeeded_at` | `int` | No | Timestamp at which this run successfully finished (populated when `status=succeeded`). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ReportRun()->create([
  "created" => null, // int
  "id" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "parameters" => null, // array
  "report_type" => null, // string
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ReportRun()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ReportRun()->load(["id" => "report_run_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReportRunEntity`

Create a new `ReportRunEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReportTypeEntity

```php
$report_type = $client->ReportType();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_available_end` | `int` | Yes | Most recent time for which this Report Type is available. |
| `data_available_start` | `int` | Yes | Earliest time for which this Report Type is available. |
| `default_columns` | `array` | No | List of column names that are included by default when this Report Type gets run. |
| `id` | `string` | Yes | The [ID of the Report Type](https://docs.stripe.com/reporting/statements/api#available-report-types), such as `balance.summary.1`. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Yes | Human-readable name of the Report Type |
| `object` | `string` | Yes | String representing the object's type. |
| `updated` | `int` | Yes | When this Report Type was latest updated. |
| `version` | `int` | Yes | Version of the Report Type. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ReportType()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ReportType()->load(["id" => "report_type_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReportTypeEntity`

Create a new `ReportTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RequestEntity

```php
$request = $client->Request();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method` | `string` | Yes | The PaymentMethod to insert into the forwarded request. |
| `replacements` | `array` | Yes | The field kinds to be replaced in the forwarded request. |
| `request_context` | `mixed` | No | Context about the request from Stripe's servers to the destination endpoint. |
| `request_details` | `mixed` | No | The request that was sent to the destination endpoint. |
| `response_details` | `mixed` | No | The response that the destination endpoint returned to us. |
| `url` | `string` | No | The destination URL for the forwarded request. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Request()->create([
  "created" => null, // int
  "id" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "payment_method" => null, // string
  "replacements" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Request()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Request()->load(["id" => "request_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RequestEntity`

Create a new `RequestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReversalEntity

```php
$reversal = $client->Reversal();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount, in cents (or local equivalent). |
| `balance_transaction` | `mixed` | No | Balance transaction that describes the impact on your account balance. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `destination_payment_refund` | `mixed` | No | Linked payment refund for the transfer reversal. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `source_refund` | `mixed` | No | ID of the refund responsible for the transfer reversal. |
| `transfer` | `mixed` | Yes | ID of the transfer that was reversed. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Reversal()->create([
  "transfer_id" => null, // string
  "amount" => null, // int
  "created" => null, // int
  "currency" => null, // string
  "object" => null, // string
  "transfer" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Reversal()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Reversal()->load(["id" => "reversal_id", "transfer_id" => "transfer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReversalEntity`

Create a new `ReversalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReviewEntity

```php
$review = $client->Review();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing_zip` | `string` | No | The ZIP or postal code of the card used, if applicable. |
| `charge` | `mixed` | No | The charge associated with this review. |
| `closed_reason` | `string` | No | The reason the review was closed, or null if it has not yet been closed. |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ip_address` | `string` | No | The IP address where the payment originated. |
| `ip_address_location` | `mixed` | No | Information related to the location of the payment. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `open` | `bool` | Yes | If `true`, the review needs action. |
| `opened_reason` | `string` | Yes | The reason the review was opened. |
| `payment_intent` | `mixed` | No | The PaymentIntent ID associated with this review, if one exists. |
| `reason` | `string` | Yes | The reason the review is currently open or closed. |
| `session` | `mixed` | No | Information related to the browsing session of the user who initiated the payment. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Review()->create([
  "id" => null, // string
  "created" => null, // int
  "livemode" => null, // bool
  "object" => null, // string
  "open" => null, // bool
  "opened_reason" => null, // string
  "reason" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Review()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Review()->load(["id" => "review_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReviewEntity`

Create a new `ReviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScheduledQueryRunEntity

```php
$scheduled_query_run = $client->ScheduledQueryRun();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `data_load_time` | `int` | Yes | When the query was run, Sigma contained a snapshot of your Stripe data at this time. |
| `error` | `array` | Yes |  |
| `file` | `mixed` | No | The file object representing the results of the query. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `result_available_until` | `int` | Yes | Time at which the result expires and is no longer available for download. |
| `sql` | `string` | Yes | SQL for the query. |
| `status` | `string` | Yes | The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise. |
| `title` | `string` | Yes | Title of the query. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ScheduledQueryRun()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ScheduledQueryRun()->load(["id" => "scheduled_query_run_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScheduledQueryRunEntity`

Create a new `ScheduledQueryRunEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_country` | `string` | No | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `string` | No | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `array` | No | The account tax IDs associated with the invoice. |
| `active` | `bool` | Yes | Whether the price can be used for new purchases. |
| `address` | `mixed` | No | The customer's billing address. |
| `allowed_payment_method_types` | `array` | No | The list of payment method types allowed for use with this payment. |
| `amount` | `int` | Yes | Amount intended to be collected by this payment. |
| `amount_capturable` | `int` | No | Amount that can be captured from this PaymentIntent. |
| `amount_captured` | `int` | Yes | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_details` | `mixed` | No |  |
| `amount_due` | `int` | Yes | Final amount due at this time for this invoice. |
| `amount_overpaid` | `int` | Yes | Amount that was overpaid on the invoice. |
| `amount_paid` | `int` | Yes | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | `int` | Yes | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_received` | `int` | No | Amount that this PaymentIntent collects. |
| `amount_refunded` | `int` | Yes | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `amount_remaining` | `int` | Yes | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | `int` | Yes | This is the sum of all the shipping amounts. |
| `application` | `mixed` | No | ID of the Connect application that created the charge. |
| `application_fee` | `mixed` | No | The application fee (if any) for the charge. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) requested for the charge. |
| `application_fee_percent` | `float` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `attempt_count` | `int` | Yes | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | `bool` | Yes | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | `bool` | Yes | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_payment_methods` | `mixed` | No | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `automatic_tax` | `array` | Yes |  |
| `automatically_finalizes_at` | `int` | No | The time when this invoice is currently scheduled to be automatically finalized. |
| `balance` | `int` | No | The current balance, if any, that's stored on the customer in their default currency. |
| `balance_transaction` | `mixed` | No | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_cycle_anchor` | `int` | Yes | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `mixed` | No | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_details` | `array` | Yes |  |
| `billing_mode` | `array` | Yes | The billing mode of the subscription. |
| `billing_reason` | `string` | No | Indicates the reason why the invoice was created. |
| `billing_schedules` | `array` | Yes | Billing schedules for this subscription. |
| `billing_scheme` | `string` | Yes | Describes how to compute the price per period. |
| `billing_thresholds` | `mixed` | No | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `business_name` | `string` | No | The customer's business name. |
| `calculated_statement_descriptor` | `string` | No | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `cancel_at` | `int` | No | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | `bool` | Yes | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | `int` | No | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_details` | `mixed` | No | Details about why this subscription was cancelled |
| `cancellation_reason` | `string` | No | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | `string` | No | Controls when the funds will be captured from the customer's account. |
| `captured` | `bool` | Yes | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `cash_balance` | `mixed` | No | The current funds being held by Stripe on behalf of the customer. |
| `client_secret` | `string` | No | The client secret of this PaymentIntent. |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_method` | `string` | No | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `confirmation_secret` | `mixed` | No | The confirmation secret associated with this invoice. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | `array` | No | Prices defined in each available currency option. |
| `custom_fields` | `array` | No | Custom fields displayed on the invoice. |
| `custom_unit_amount` | `mixed` | No | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `customer` | `mixed` | No | ID of the customer this charge is for if one exists. |
| `customer_account` | `string` | No | The ID of an Account representing a customer. |
| `customer_address` | `mixed` | No | The customer's address. |
| `customer_email` | `string` | No | The customer's email. |
| `customer_name` | `string` | No | The customer's name. |
| `customer_phone` | `string` | No | The customer's phone number. |
| `customer_shipping` | `mixed` | No | The customer's shipping information. |
| `customer_tax_exempt` | `string` | No | The customer's tax exempt status. |
| `customer_tax_ids` | `array` | No | The customer's tax IDs. |
| `days_until_due` | `int` | No | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | `mixed` | No | ID of the default payment method for the invoice. |
| `default_price` | `mixed` | No | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `default_source` | `mixed` | No | ID of the default payment source for the customer. |
| `default_tax_rates` | `array` | Yes | The tax rates applied to this invoice, if any. |
| `delinquent` | `bool` | No | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discount` | `mixed` | No | Describes the current discount active on the customer, if there is one. |
| `discounts` | `array` | Yes | The discounts applied to the invoice. |
| `disputed` | `bool` | Yes | Whether the charge has been disputed. |
| `due_date` | `int` | No | The date on which payment for this invoice is due. |
| `effective_at` | `int` | No | The date when this invoice is in effect. |
| `email` | `string` | No | The customer's email address. |
| `ended_at` | `int` | No | If the subscription has ended, the date the subscription ended. |
| `ending_balance` | `int` | No | Ending customer balance after the invoice is finalized. |
| `excluded_payment_method_types` | `array` | No | The list of payment method types to exclude from use with this payment. |
| `failure_balance_transaction` | `mixed` | No | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | `string` | No | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | `string` | No | Message to user further explaining reason for charge failure if available. |
| `footer` | `string` | No | Footer displayed on the invoice. |
| `fraud_details` | `mixed` | No | Information on fraud assessments for the charge. |
| `from_invoice` | `mixed` | No | Details of the invoice that was cloned. |
| `hooks` | `array` | No |  |
| `hosted_invoice_url` | `string` | No | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `images` | `array` | Yes | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `individual_name` | `string` | No | The customer's individual name. |
| `invoice_credit_balance` | `array` | No | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_pdf` | `string` | No | The link to download the PDF for the invoice. |
| `invoice_prefix` | `string` | No | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `array` | No |  |
| `issuer` | `array` | Yes |  |
| `items` | `array` | Yes | List of subscription items, each with an attached price. |
| `last_finalization_error` | `mixed` | No | The error encountered during the previous attempt to finalize the invoice. |
| `last_payment_error` | `mixed` | No | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `mixed` | No | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `latest_invoice` | `mixed` | No | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `latest_revision` | `mixed` | No | The ID of the most recent non-draft revision of this invoice |
| `lines` | `array` | Yes | The individual line items that make up the invoice. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | No | A lookup key used to retrieve prices dynamically from a static string. |
| `managed_payments` | `mixed` | No | Settings for Managed Payments. |
| `marketing_features` | `array` | Yes | A list of up to 15 marketing features for this product. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | The customer's full name or business name. |
| `next_action` | `mixed` | No | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `next_invoice_sequence` | `int` | No | The suffix of the customer's next invoice number (for example, 0001). |
| `next_payment_attempt` | `int` | No | The time at which payment will next be attempted. |
| `next_pending_invoice_item_invoice` | `int` | No | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `nickname` | `string` | No | A brief description of the price, hidden from customers. |
| `number` | `string` | No | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `mixed` | No | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | `mixed` | No | Details about whether the payment was accepted, and why. |
| `package_dimensions` | `mixed` | No | The dimensions of this product for shipping purposes. |
| `paid` | `bool` | Yes | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `parent` | `mixed` | No | The parent that generated this invoice |
| `pause_collection` | `mixed` | No | If specified, payment collection for this subscription will be paused. |
| `payment_details` | `array` | No |  |
| `payment_intent` | `mixed` | No | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `string` | No | ID of the payment method used in this charge. |
| `payment_method_configuration_details` | `mixed` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_details` | `mixed` | No | Details about the payment method at the time of the transaction. |
| `payment_method_options` | `mixed` | No | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `array` | No | The list of payment method types (e.g. |
| `payment_record` | `mixed` | No | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `payment_settings` | `array` | Yes | Payment settings passed on to invoices created by the subscription. |
| `payments` | `array` | Yes | Payments for this invoice. |
| `pending_invoice_item_interval` | `mixed` | No | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `mixed` | No | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `mixed` | No | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `period_end` | `int` | Yes | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | `int` | Yes | The earliest timestamp at which invoice items can be associated with this invoice. |
| `phone` | `string` | No | The customer's phone number. |
| `post_payment_credit_notes_amount` | `int` | Yes | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | `int` | Yes | Total amount of all pre-payment credit notes issued for this invoice. |
| `preferred_locales` | `array` | No | The customer's preferred locales (languages), ordered by preference. |
| `presentment_details` | `array` | Yes |  |
| `processing` | `mixed` | No | If present, this property tells you about the processing state of the payment. |
| `product` | `mixed` | Yes | The ID of the product this price is associated with. |
| `radar_options` | `array` | No | Options to configure Radar. |
| `receipt_email` | `string` | No | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `string` | No | This is the URL to view the receipt for this charge. |
| `recurring` | `mixed` | No | The recurring components of a price such as `interval` and `usage_type`. |
| `refunded` | `bool` | Yes | Whether the charge has been fully refunded. |
| `refunds` | `array` | Yes | A list of refunds that have been applied to the charge. |
| `rendering` | `mixed` | No | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `review` | `mixed` | No | ID of the review associated with this charge if one exists. |
| `schedule` | `mixed` | No | The schedule attached to the subscription |
| `setup_future_usage` | `string` | No | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `shippable` | `bool` | No | Whether this product is shipped (i.e., physical goods). |
| `shipping` | `mixed` | No | Shipping information for the charge. |
| `shipping_cost` | `mixed` | No | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | `mixed` | No | Shipping details for the invoice. |
| `source_transfer` | `mixed` | No | The transfer ID which created this charge. |
| `sources` | `array` | Yes | The customer's payment sources, if any. |
| `start_date` | `int` | Yes | Date when the subscription was first created. |
| `starting_balance` | `int` | Yes | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | `string` | No | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | `string` | No | Provides information about a card charge. |
| `status` | `string` | Yes | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `status_details` | `array` | No | Describes changes to the subscription's status. |
| `status_transitions` | `array` | Yes |  |
| `subscriptions` | `array` | Yes | The customer's current subscriptions, if any. |
| `subtotal` | `int` | Yes | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `tax` | `array` | Yes |  |
| `tax_behavior` | `string` | No | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tax_code` | `mixed` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `mixed` | No | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `tax_exempt` | `string` | No | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `array` | Yes | The customer's tax IDs. |
| `test_clock` | `mixed` | No | ID of the test clock that this customer belongs to. |
| `threshold_reason` | `array` | Yes |  |
| `tiers` | `array` | No | Each element represents a pricing tier. |
| `tiers_mode` | `string` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `total` | `int` | Yes | Total after discounts and taxes. |
| `total_discount_amounts` | `array` | No | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `array` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `array` | No | The aggregate tax information of all line items. |
| `transfer` | `mixed` | No | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `transfer_data` | `mixed` | No | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `transfer_group` | `string` | No | A string that identifies this transaction as part of a group. |
| `transform_quantity` | `mixed` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_end` | `int` | No | If the subscription has a trial, the end of that trial. |
| `trial_settings` | `mixed` | No | Settings related to subscription trials. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Search()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretEntity

```php
$secret = $client->Secret();
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
| `scope` | `array` | Yes |  |
| `type` | `string` | Yes | The secret scope type. |
| `user` | `string` | No | The user ID, if type is set to "user" |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Secret()->create([
  "created" => null, // int
  "id" => null, // string
  "livemode" => null, // bool
  "name" => null, // string
  "object" => null, // string
  "scope" => null, // array
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Secret()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Secret()->load(["name" => "name", "scope" => []]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretEntity`

Create a new `SecretEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SessionEntity

```php
$session = $client->Session();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `mixed` | No | The account holder for whom accounts are collected in this session. |
| `accounts` | `array` | Yes | The accounts that were collected as part of this Session. |
| `adaptive_pricing` | `mixed` | No | Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing). |
| `after_expiration` | `mixed` | No | When set, provides configuration for actions to take if this Checkout Session expires. |
| `allow_promotion_codes` | `bool` | No | Enables user redeemable promotion codes. |
| `allowed_payment_method_types` | `array` | No | A list of the types of payment methods (e.g., `card`) this Checkout Session can accept. |
| `amount_subtotal` | `int` | No | Total of all items before discounts or taxes are applied. |
| `amount_total` | `int` | No | Total of all items after discounts and taxes are applied. |
| `automatic_tax` | `array` | Yes |  |
| `bank_account_token` | `array` | Yes | Tokenization is the process Stripe uses to collect sensitive card or bank account details, or personally identifiable information (PII), directly from your customers in a secure manner. |
| `billing_address_collection` | `string` | No | Describes whether Checkout should collect the customer's billing address. |
| `branding_settings` | `array` | Yes |  |
| `cancel_url` | `string` | No | If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. |
| `client_reference_id` | `string` | No | A unique string to reference the Checkout Session. |
| `client_secret` | `string` | No | The client secret of your Checkout Session. |
| `collected_information` | `mixed` | No | Information about the customer collected within the Checkout Session. |
| `configuration` | `mixed` | Yes | The configuration used by this session, describing the features available. |
| `consent` | `mixed` | No | Results of `consent_collection` for this session. |
| `consent_collection` | `mixed` | No | When set, provides configuration for the Checkout Session to gather active consent from customers. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_conversion` | `mixed` | No | Currency conversion details for [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing) sessions created before 2025-03-31. |
| `custom_fields` | `array` | Yes | Collect additional information from your customer using custom fields. |
| `custom_text` | `array` | Yes |  |
| `customer` | `mixed` | No | The ID of the customer for this Session. |
| `customer_account` | `string` | No | The ID of the account for this Session. |
| `customer_creation` | `string` | No | Configure whether a Checkout Session creates a Customer when the Checkout Session completes. |
| `customer_details` | `mixed` | No | The customer details including the customer's tax exempt status and the customer's tax IDs. |
| `customer_email` | `string` | No | If provided, this value will be used when the Customer object is created. |
| `discounts` | `array` | No | List of coupons and promotion codes attached to the Checkout Session. |
| `excluded_payment_method_types` | `array` | No | A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session. |
| `expires_at` | `int` | Yes | The timestamp at which the Checkout Session will expire. |
| `filters` | `array` | No |  |
| `flow` | `mixed` | No | Information about a specific flow for the customer to go through. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `integration_identifier` | `string` | No | The integration identifier for this Checkout Session. |
| `invoice` | `mixed` | No | ID of the invoice created by the Checkout Session, if it exists. |
| `invoice_creation` | `mixed` | No | Details on the state of invoice creation for the Checkout Session. |
| `limits` | `array` | Yes |  |
| `line_items` | `array` | Yes | The line items purchased by the customer. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `locale` | `string` | No | The IETF language tag of the locale Checkout is displayed in. |
| `managed_payments` | `mixed` | No | Settings for Managed Payments for this Checkout Session and resulting [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/object). |
| `manual_entry` | `array` | No |  |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mode` | `string` | Yes | The mode of the Checkout Session. |
| `name_collection` | `array` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `string` | No | The account for which the session was created on behalf of. |
| `optional_items` | `array` | No | The optional items presented to the customer at checkout. |
| `origin_context` | `string` | No | Where the user is coming from. |
| `payment_intent` | `mixed` | No | The ID of the PaymentIntent for Checkout Sessions in `payment` mode. |
| `payment_link` | `mixed` | No | The ID of the Payment Link that created this Session. |
| `payment_method_collection` | `string` | No | Configure whether a Checkout Session should collect a payment method for sessions with mode `payment`. |
| `payment_method_configuration_details` | `mixed` | No | Information about the payment method configuration used for this Checkout session if using dynamic payment methods. |
| `payment_method_options` | `mixed` | No | Payment-method-specific configuration for the PaymentIntent or SetupIntent of this CheckoutSession. |
| `payment_method_types` | `array` | Yes | A list of the types of payment methods (e.g. |
| `payment_status` | `string` | Yes | The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`. |
| `permissions` | `mixed` | No | This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object. |
| `phone_number_collection` | `array` | Yes |  |
| `prefetch` | `array` | No | Data features requested to be retrieved upon account creation. |
| `presentment_details` | `array` | Yes |  |
| `recovered_from` | `string` | No | The ID of the original expired Checkout Session that triggered the recovery flow. |
| `redirect_on_completion` | `string` | No | This parameter applies to `ui_mode: embedded_page`. |
| `return_url` | `string` | No | Applies to Checkout Sessions with `ui_mode: embedded_page` or `ui_mode: elements`. |
| `saved_payment_method_options` | `mixed` | No | Controls saved payment method settings for the session. |
| `setup_intent` | `mixed` | No | The ID of the SetupIntent for Checkout Sessions in `setup` mode. |
| `shipping_address_collection` | `mixed` | No | When set, provides configuration for Checkout to collect a shipping address from a customer. |
| `shipping_cost` | `mixed` | No | The details of the customer cost of shipping, including the customer chosen ShippingRate. |
| `shipping_options` | `array` | Yes | The shipping rate options applied to this Session. |
| `status` | `string` | No | The status of the Checkout Session, one of `open`, `complete`, or `expired`. |
| `submit_type` | `string` | No | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. |
| `subscription` | `mixed` | No | The ID of the [Subscription](https://docs.stripe.com/api/subscriptions) for Checkout Sessions in `subscription` mode. |
| `success_url` | `string` | No | The URL the customer will be directed to after the payment or subscription creation is successful. |
| `tax_id_collection` | `array` | Yes |  |
| `total_details` | `int` | No | Tax and discount details for the computed total amount. |
| `ui_mode` | `string` | No | The UI mode of the Session. |
| `url` | `string` | No | The URL to the Checkout Session. |
| `wallet_options` | `mixed` | No | Wallet-specific configuration for this Checkout Session. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Session()->create([
  "id" => null, // string
  "accounts" => null, // array
  "automatic_tax" => null, // array
  "bank_account_token" => null, // array
  "branding_settings" => null, // array
  "configuration" => null, // mixed
  "created" => null, // int
  "custom_fields" => null, // array
  "custom_text" => null, // array
  "expires_at" => null, // int
  "limits" => null, // array
  "line_items" => null, // array
  "livemode" => null, // bool
  "mode" => null, // string
  "object" => null, // string
  "payment_method_types" => null, // array
  "payment_status" => null, // string
  "phone_number_collection" => null, // array
  "presentment_details" => null, // array
  "shipping_options" => null, // array
  "tax_id_collection" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Session()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Session()->load(["session" => "session"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SessionEntity`

Create a new `SessionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SettingEntity

```php
$setting = $client->Setting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `defaults` | `array` | Yes |  |
| `head_office` | `mixed` | No | The place where your business is located. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The status of the Tax `Settings`. |
| `status_details` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Setting()->create([
  "defaults" => null, // array
  "livemode" => null, // bool
  "object" => null, // string
  "status" => null, // string
  "status_details" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Setting()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SettingEntity`

Create a new `SettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SettlementEntity

```php
$settlement = $client->Settlement();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Settlement()->create([
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Settlement()->load(["id" => "settlement_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SettlementEntity`

Create a new `SettlementEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SetupAttemptEntity

```php
$setup_attempt = $client->SetupAttempt();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `mixed` | No | The value of [application](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation. |
| `attach_to_self` | `bool` | No | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `mixed` | No | The value of [customer](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation. |
| `customer_account` | `string` | No | The value of [customer_account](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer_account) on the SetupIntent at the time of this confirmation. |
| `flow_directions` | `array` | No | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `mixed` | No | The value of [on_behalf_of](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation. |
| `payment_method` | `mixed` | Yes | ID of the payment method used with this SetupAttempt. |
| `payment_method_details` | `array` | Yes |  |
| `setup_error` | `mixed` | No | The error encountered during this attempt to confirm the SetupIntent, if any. |
| `setup_intent` | `mixed` | Yes | ID of the SetupIntent that this attempt belongs to. |
| `status` | `string` | Yes | Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`. |
| `usage` | `string` | Yes | The value of [usage](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SetupAttempt()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SetupAttemptEntity`

Create a new `SetupAttemptEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SetupIntentEntity

```php
$setup_intent = $client->SetupIntent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_payment_method_types` | `array` | No | The list of payment method types to allow for this SetupIntent. |
| `application` | `mixed` | No | ID of the Connect application that created the SetupIntent. |
| `attach_to_self` | `bool` | No | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `automatic_payment_methods` | `mixed` | No | Settings for dynamic payment methods compatible with this Setup Intent |
| `cancellation_reason` | `string` | No | Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`. |
| `client_secret` | `string` | No | The client secret of this SetupIntent. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `mixed` | No | ID of the Customer this SetupIntent belongs to, if one exists. |
| `customer_account` | `string` | No | ID of the Account this SetupIntent belongs to, if one exists. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | `array` | No | Payment method types that are excluded from this SetupIntent. |
| `flow_directions` | `array` | No | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last_setup_error` | `mixed` | No | The error encountered in the previous SetupIntent confirmation. |
| `latest_attempt` | `mixed` | No | The most recent SetupAttempt for this SetupIntent. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `mixed` | No |  |
| `mandate` | `mixed` | No | ID of the multi use Mandate generated by the SetupIntent. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `mixed` | No | If present, this property tells you what actions you need to take in order for your customer to continue payment setup. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `mixed` | No | The account (if any) for which the setup is intended. |
| `payment_method` | `mixed` | No | ID of the payment method used with this SetupIntent. |
| `payment_method_configuration_details` | `mixed` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this Setup Intent. |
| `payment_method_options` | `mixed` | No | Payment method-specific configuration for this SetupIntent. |
| `payment_method_types` | `array` | Yes | The list of payment method types (e.g. |
| `single_use_mandate` | `mixed` | No | ID of the single_use Mandate generated by the SetupIntent. |
| `status` | `string` | Yes | [Status](https://docs.stripe.com/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`. |
| `usage` | `string` | Yes | Indicates how the payment method is intended to be used in the future. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SetupIntent()->create([
  "id" => null, // string
  "created" => null, // int
  "livemode" => null, // bool
  "object" => null, // string
  "payment_method_types" => null, // array
  "status" => null, // string
  "usage" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SetupIntent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SetupIntent()->load(["id" => "setup_intent_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SetupIntentEntity`

Create a new `SetupIntentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ShippingRateEntity

```php
$shipping_rate = $client->ShippingRate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the shipping rate can be used for new purchases. |
| `created` | `int` | Yes | Time at which the object was created. |
| `delivery_estimate` | `mixed` | No | The estimated range for how long shipping will take, meant to be displayable to the customer. |
| `display_name` | `string` | No | The name of the shipping rate, meant to be displayable to the customer. |
| `fixed_amount` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `tax_behavior` | `string` | No | Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. |
| `tax_code` | `mixed` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `type` | `string` | Yes | The type of calculation to use on the shipping rate. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ShippingRate()->create([
  "id" => null, // string
  "active" => null, // bool
  "created" => null, // int
  "fixed_amount" => null, // array
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ShippingRate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ShippingRate()->load(["id" => "shipping_rate_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ShippingRateEntity`

Create a new `ShippingRateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SigmaApiQueryEntity

```php
$sigma_api_query = $client->SigmaApiQuery();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SigmaApiQuery()->create([
  "id" => null, // string
  "created" => null, // int
  "livemode" => null, // bool
  "name" => null, // string
  "object" => null, // string
  "sql" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SigmaApiQueryEntity`

Create a new `SigmaApiQueryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SourceEntity

```php
$source = $client->Source();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ach_credit_transfer` | `array` | No |  |
| `ach_debit` | `array` | No |  |
| `acss_debit` | `array` | No |  |
| `alipay` | `array` | No |  |
| `allow_redisplay` | `bool` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `amount` | `int` | No | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. |
| `au_becs_debit` | `array` | No |  |
| `bancontact` | `array` | No |  |
| `card` | `array` | No |  |
| `card_present` | `array` | No |  |
| `client_secret` | `string` | Yes | The client secret of the source. |
| `code_verification` | `array` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. |
| `customer` | `string` | No | The ID of the customer to which this source is attached. |
| `data` | `array` | Yes | Details about each object. |
| `eps` | `array` | No |  |
| `flow` | `string` | Yes | The authentication `flow` of the source. |
| `giropay` | `array` | No |  |
| `has_more` | `bool` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ideal` | `array` | No |  |
| `klarna` | `array` | No |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `multibanco` | `array` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `owner` | `mixed` | No | Information about the owner of the payment instrument that may be used or required by particular source types. |
| `p24` | `array` | No |  |
| `receiver` | `array` | Yes |  |
| `redirect` | `array` | Yes |  |
| `sepa_debit` | `array` | No |  |
| `sofort` | `array` | No |  |
| `source_order` | `array` | Yes |  |
| `statement_descriptor` | `string` | No | Extra information about a source. |
| `status` | `string` | Yes | The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. |
| `three_d_secure` | `array` | No |  |
| `type` | `string` | Yes | The `type` of the source. |
| `url` | `string` | Yes | The URL where this list can be accessed. |
| `usage` | `string` | No | Either `reusable` or `single_use`. |
| `wechat` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Source()->create([
  "id" => null, // string
  "client_secret" => null, // string
  "code_verification" => null, // array
  "created" => null, // int
  "data" => null, // array
  "flow" => null, // string
  "has_more" => null, // bool
  "livemode" => null, // bool
  "object" => null, // string
  "receiver" => null, // array
  "redirect" => null, // array
  "source_order" => null, // array
  "status" => null, // string
  "type" => null, // string
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Source()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Source()->load(["id" => "source_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Source()->remove(["id" => "source_id", "customer_id" => "customer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SourceEntity`

Create a new `SourceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SourceMandateNotificationEntity

```php
$source_mandate_notification = $client->SourceMandateNotification();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `array` | No |  |
| `amount` | `int` | No | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. |
| `bacs_debit` | `array` | No |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `reason` | `string` | Yes | The reason of the mandate notification. |
| `sepa_debit` | `array` | No |  |
| `source` | `array` | Yes | `Source` objects allow you to accept a variety of payment methods. |
| `status` | `string` | Yes | The status of the mandate notification. |
| `type` | `string` | Yes | The type of source this mandate notification is attached to. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SourceMandateNotification()->load(["id" => "source_mandate_notification_id", "source_id" => "source_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SourceMandateNotificationEntity`

Create a new `SourceMandateNotificationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SourceTransactionEntity

```php
$source_transaction = $client->SourceTransaction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ach_credit_transfer` | `array` | No |  |
| `amount` | `int` | Yes | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver. |
| `chf_credit_transfer` | `array` | No |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `gbp_credit_transfer` | `array` | No |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `paper_check` | `array` | No |  |
| `sepa_credit_transfer` | `array` | No |  |
| `source` | `string` | Yes | The ID of the source this transaction is attached to. |
| `status` | `string` | Yes | The status of the transaction, one of `succeeded`, `pending`, or `failed`. |
| `type` | `string` | Yes | The type of source this transaction is attached to. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SourceTransaction()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SourceTransaction()->load(["id" => "source_transaction_id", "source_id" => "source_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SourceTransactionEntity`

Create a new `SourceTransactionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionEntity

```php
$subscription = $client->Subscription();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `mixed` | No | ID of the Connect Application that created the subscription. |
| `application_fee_percent` | `float` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `array` | Yes |  |
| `billing_cycle_anchor` | `int` | Yes | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `mixed` | No | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_mode` | `array` | Yes | The billing mode of the subscription. |
| `billing_schedules` | `array` | Yes | Billing schedules for this subscription. |
| `billing_thresholds` | `mixed` | No | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `cancel_at` | `int` | No | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | `bool` | Yes | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | `int` | No | If the subscription has been canceled, the date of that cancellation. |
| `cancellation_details` | `mixed` | No | Details about why this subscription was cancelled |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `mixed` | Yes | ID of the customer who owns the subscription. |
| `customer_account` | `string` | No | ID of the account representing the customer who owns the subscription. |
| `days_until_due` | `int` | No | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | `mixed` | No | ID of the default payment method for the subscription. |
| `default_source` | `mixed` | No | ID of the default payment source for the subscription. |
| `default_tax_rates` | `array` | No | The tax rates that will apply to any subscription item that does not have `tax_rates` set. |
| `description` | `string` | No | The subscription's description, meant to be displayable to the customer. |
| `discounts` | `array` | Yes | The discounts applied to the subscription. |
| `ended_at` | `int` | No | If the subscription has ended, the date the subscription ended. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice_settings` | `array` | Yes |  |
| `items` | `array` | Yes | List of subscription items, each with an attached price. |
| `latest_invoice` | `mixed` | No | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `mixed` | No | Settings for Managed Payments for this Subscription and resulting [Invoices](/api/invoices/object) and [PaymentIntents](/api/payment_intents/object). |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_pending_invoice_item_invoice` | `int` | No | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `mixed` | No | The account (if any) the charge was made on behalf of for charges associated with this subscription. |
| `pause_collection` | `mixed` | No | If specified, payment collection for this subscription will be paused. |
| `payment_settings` | `mixed` | No | Payment settings passed on to invoices created by the subscription. |
| `pending_invoice_item_interval` | `mixed` | No | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `mixed` | No | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `mixed` | No | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `presentment_details` | `array` | Yes |  |
| `schedule` | `mixed` | No | The schedule attached to the subscription |
| `start_date` | `int` | Yes | Date when the subscription was first created. |
| `status` | `string` | Yes | Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`. |
| `status_details` | `array` | Yes | Describes changes to the subscription's status. |
| `test_clock` | `mixed` | No | ID of the test clock this subscription belongs to. |
| `transfer_data` | `mixed` | No | The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices. |
| `trial_end` | `int` | No | If the subscription has a trial, the end of that trial. |
| `trial_settings` | `mixed` | No | Settings related to subscription trials. |
| `trial_start` | `int` | No | If the subscription has a trial, the beginning of that trial. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Subscription()->create([
  "id" => null, // string
  "automatic_tax" => null, // array
  "billing_cycle_anchor" => null, // int
  "billing_mode" => null, // array
  "billing_schedules" => null, // array
  "cancel_at_period_end" => null, // bool
  "collection_method" => null, // string
  "created" => null, // int
  "currency" => null, // string
  "customer" => null, // mixed
  "discounts" => null, // array
  "invoice_settings" => null, // array
  "items" => null, // array
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "presentment_details" => null, // array
  "start_date" => null, // int
  "status" => null, // string
  "status_details" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Subscription()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Subscription()->load(["id" => "subscription_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Subscription()->remove(["id" => "subscription_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionEntity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionItemEntity

```php
$subscription_item = $client->SubscriptionItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billed_until` | `int` | No | The time period the subscription item has been billed for. |
| `billing_thresholds` | `mixed` | No | Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period |
| `created` | `int` | Yes | Time at which the object was created. |
| `current_period_end` | `int` | Yes | The end time of this subscription item's current billing period. |
| `current_period_start` | `int` | Yes | The start time of this subscription item's current billing period. |
| `current_trial` | `mixed` | No | The current trial that is applied to this subscription item. |
| `discounts` | `array` | Yes | The discounts applied to the subscription item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `price` | `array` | Yes | Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products. |
| `quantity` | `int` | No | The [quantity](https://docs.stripe.com/subscriptions/quantities) of the plan to which the customer should be subscribed. |
| `subscription` | `string` | Yes | The `subscription` this `subscription_item` belongs to. |
| `tax_rates` | `array` | No | The tax rates which apply to this `subscription_item`. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionItem()->create([
  "id" => null, // string
  "created" => null, // int
  "current_period_end" => null, // int
  "current_period_start" => null, // int
  "discounts" => null, // array
  "metadata" => null, // array
  "object" => null, // string
  "price" => null, // array
  "subscription" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriptionItem()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SubscriptionItem()->load(["id" => "subscription_item_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionItemEntity`

Create a new `SubscriptionItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionScheduleEntity

```php
$subscription_schedule = $client->SubscriptionSchedule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `mixed` | No | ID of the Connect Application that created the schedule. |
| `billing_mode` | `array` | Yes | The billing mode of the subscription. |
| `canceled_at` | `int` | No | Time at which the subscription schedule was canceled. |
| `completed_at` | `int` | No | Time at which the subscription schedule was completed. |
| `created` | `int` | Yes | Time at which the object was created. |
| `current_phase` | `mixed` | No | Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`. |
| `customer` | `mixed` | Yes | ID of the customer who owns the subscription schedule. |
| `customer_account` | `string` | No | ID of the account who owns the subscription schedule. |
| `default_settings` | `array` | Yes |  |
| `end_behavior` | `string` | Yes | Behavior of the subscription schedule and underlying subscription when it ends. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `pause_schedules` | `array` | No | The pause schedules for this subscription schedule. |
| `phases` | `array` | Yes | Configuration for the subscription schedule's phases. |
| `released_at` | `int` | No | Time at which the subscription schedule was released. |
| `released_subscription` | `string` | No | ID of the subscription once managed by the subscription schedule (if it is released). |
| `status` | `string` | Yes | The present status of the subscription schedule. |
| `subscription` | `mixed` | No | ID of the subscription managed by the subscription schedule. |
| `test_clock` | `mixed` | No | ID of the test clock this subscription schedule belongs to. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionSchedule()->create([
  "id" => null, // string
  "billing_mode" => null, // array
  "created" => null, // int
  "customer" => null, // mixed
  "default_settings" => null, // array
  "end_behavior" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "phases" => null, // array
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriptionSchedule()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SubscriptionSchedule()->load(["id" => "subscription_schedule_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionScheduleEntity`

Create a new `SubscriptionScheduleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SupplierEntity

```php
$supplier = $client->Supplier();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the object. |
| `info_url` | `string` | Yes | Link to a webpage to learn more about the supplier. |
| `livemode` | `bool` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `locations` | `array` | Yes | The locations in which this supplier operates. |
| `name` | `string` | Yes | Name of this carbon removal supplier. |
| `object` | `string` | Yes | String representing the object’s type. |
| `removal_pathway` | `string` | Yes | The scientific pathway used for carbon removal. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Supplier()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Supplier()->load(["id" => "supplier_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SupplierEntity`

Create a new `SupplierEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TaxCodeEntity

```php
$tax_code = $client->TaxCode();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | A detailed description of which types of products the tax code represents. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `name` | `string` | Yes | A short name for the tax code. |
| `object` | `string` | Yes | String representing the object's type. |
| `requirements` | `mixed` | No | An object that describes more information about the tax location required for this tax code. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TaxCode()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TaxCode()->load(["id" => "tax_code_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TaxCodeEntity`

Create a new `TaxCodeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TaxIdEntity

```php
$tax_id = $client->TaxId();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `string` | No | Two-letter ISO code representing the country of the tax ID. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `mixed` | No | ID of the customer. |
| `customer_account` | `string` | No | ID of the Account representing the customer. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `owner` | `mixed` | No | The account or customer the tax ID belongs to. |
| `type` | `string` | Yes | Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`,… |
| `value` | `string` | Yes | Value of the tax ID. |
| `verification` | `mixed` | No | Tax ID verification information. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TaxId()->create([
  "created" => null, // int
  "id" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "type" => null, // string
  "value" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TaxId()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TaxId()->load(["id" => "tax_id_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TaxId()->remove(["id" => "tax_id_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TaxIdEntity`

Create a new `TaxIdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TaxRateEntity

```php
$tax_rate = $client->TaxRate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Defaults to `true`. |
| `country` | `string` | No | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | `int` | Yes | Time at which the object was created. |
| `description` | `string` | No | An arbitrary string attached to the tax rate for your internal use only. |
| `display_name` | `string` | Yes | The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page. |
| `effective_percentage` | `float` | No | Actual/effective tax rate percentage out of 100. |
| `flat_amount` | `mixed` | No | The amount of the tax rate when the `rate_type` is `flat_amount`. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `inclusive` | `bool` | Yes | This specifies if the tax rate is inclusive or exclusive. |
| `jurisdiction` | `string` | No | The jurisdiction for the tax rate. |
| `jurisdiction_level` | `string` | No | The level of the jurisdiction that imposes this tax rate. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `percentage` | `float` | Yes | Tax rate percentage out of 100. |
| `rate_type` | `string` | No | Indicates the type of tax rate applied to the taxable amount. |
| `state` | `string` | No | [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. |
| `tax_type` | `string` | No | The high-level tax type, such as `vat` or `sales_tax`. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TaxRate()->create([
  "id" => null, // string
  "active" => null, // bool
  "created" => null, // int
  "display_name" => null, // string
  "inclusive" => null, // bool
  "livemode" => null, // bool
  "object" => null, // string
  "percentage" => null, // float
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TaxRate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TaxRate()->load(["id" => "tax_rate_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TaxRateEntity`

Create a new `TaxRateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TestClockEntity

```php
$test_clock = $client->TestClock();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advancing` | `array` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `deletes_after` | `int` | Yes | Time at which this clock is scheduled to auto delete. |
| `frozen_time` | `int` | Yes | Time at which all objects belonging to this clock are frozen. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | No | The custom name supplied at creation. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The status of the Test Clock. |
| `status_details` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TestClock()->create([
  "advancing" => null, // array
  "created" => null, // int
  "deletes_after" => null, // int
  "frozen_time" => null, // int
  "id" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "status" => null, // string
  "status_details" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TestClock()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TestClock()->load(["id" => "test_clock_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TestClock()->remove(["id" => "test_clock_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TestClockEntity`

Create a new `TestClockEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TokenEntity

```php
$token = $client->Token();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bank_account` | `array` | Yes | These bank accounts are payment methods on `Customer` objects. |
| `card` | `mixed` | Yes | Card associated with this token. |
| `client_ip` | `string` | No | IP address of the client that generates the token. |
| `created` | `int` | Yes | Time at which the object was created. |
| `device_fingerprint` | `string` | No | The hashed ID derived from the device ID from the card network associated with the token. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last4` | `string` | No | The last four digits of the token. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `string` | Yes | The token service provider / card network associated with the token. |
| `network_data` | `array` | Yes |  |
| `network_updated_at` | `int` | Yes | Time at which the token was last updated by the card network. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The usage state of the token. |
| `type` | `string` | Yes | Type of the token: `account`, `bank_account`, `card`, or `pii`. |
| `used` | `bool` | Yes | Determines if you have already used this token (you can only use tokens once). |
| `wallet_provider` | `string` | No | The digital wallet for this token, if one was used. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Token()->create([
  "id" => null, // string
  "bank_account" => null, // array
  "card" => null, // mixed
  "created" => null, // int
  "livemode" => null, // bool
  "network" => null, // string
  "network_data" => null, // array
  "network_updated_at" => null, // int
  "object" => null, // string
  "status" => null, // string
  "type" => null, // string
  "used" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Token()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Token()->load(["id" => "token_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TokenEntity`

Create a new `TokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TopupEntity

```php
$topup = $client->Topup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount transferred. |
| `balance_transaction` | `mixed` | No | ID of the balance transaction that describes the impact of this top-up on your account balance. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `expected_availability_date` | `int` | No | Date the funds are expected to arrive in your Stripe account for payouts. |
| `failure_code` | `string` | No | Error code explaining reason for top-up failure if available (see [the errors section](/api/errors) for a list of codes). |
| `failure_message` | `string` | No | Message to user further explaining reason for top-up failure if available. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `initiated_by` | `string` | No | Indicates whether the top-up was initiated by Stripe or by the user. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method` | `mixed` | No | The ID of a PaymentMethod representing the payment method used for the top-up. |
| `payment_method_options` | `mixed` | No | Payment-method-specific configuration for this top-up. |
| `source` | `mixed` | No | The source field is deprecated. |
| `statement_descriptor` | `string` | No | Extra information about a top-up. |
| `status` | `string` | Yes | The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`. |
| `transfer_group` | `string` | No | A string that identifies this top-up as part of a group. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Topup()->create([
  "id" => null, // string
  "amount" => null, // int
  "created" => null, // int
  "currency" => null, // string
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Topup()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Topup()->load(["id" => "topup_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TopupEntity`

Create a new `TopupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TransactionEntity

```php
$transaction = $client->Transaction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | The ID of the Financial Connections Account this transaction belongs to. |
| `amount` | `int` | Yes | The transaction amount, which will be reflected in your balance. |
| `amount_details` | `mixed` | No | Detailed breakdown of amount components. |
| `authorization` | `mixed` | No | The `Authorization` object that led to this transaction. |
| `balance_impact` | `array` | Yes | Change to a FinancialAccount's balance |
| `balance_transaction` | `mixed` | No | ID of the [balance transaction](https://docs.stripe.com/api/balance_transactions) associated with this transaction. |
| `card` | `mixed` | Yes | The card used to make this transaction. |
| `cardholder` | `mixed` | No | The cardholder to whom this transaction belongs. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | No | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `array` | Yes |  |
| `description` | `string` | Yes | An arbitrary string attached to the object. |
| `dispute` | `mixed` | No | If you've disputed the transaction, the ID of the dispute. |
| `entries` | `array` | Yes | A list of TransactionEntries that are part of this Transaction. |
| `financial_account` | `string` | Yes | The FinancialAccount associated with this object. |
| `flow` | `string` | No | ID of the flow that created the Transaction. |
| `flow_details` | `mixed` | No | Details of the flow that created the Transaction. |
| `flow_type` | `string` | Yes | Type of the flow that created the Transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `line_items` | `array` | Yes | The tax collected or refunded, by line item. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `int` | Yes | The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `merchant_currency` | `string` | Yes | The currency with which the merchant is taking payment. |
| `merchant_data` | `array` | Yes |  |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `mixed` | No | Details about the transaction, such as processing dates, set by the card network. |
| `object` | `string` | Yes | String representing the object's type. |
| `posted_at` | `int` | No | Time at which this transaction posted. |
| `purchase_details` | `mixed` | No | Additional purchase information that is optionally provided by the merchant. |
| `reference` | `string` | Yes | A custom unique identifier, such as 'myOrder_123'. |
| `reversal` | `mixed` | No | If `type=reversal`, contains information about what was reversed. |
| `ship_from_details` | `mixed` | No | The details of the ship from location, such as the address. |
| `shipping_cost` | `mixed` | No | The shipping cost details for the transaction. |
| `status` | `string` | Yes | Status of the Transaction. |
| `status_transitions` | `array` | Yes |  |
| `tax_date` | `int` | Yes | The calculation uses the tax rules and rates that are in effect at this timestamp. |
| `token` | `string` | No | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this transaction. |
| `transacted_at` | `int` | Yes | Time at which the transaction was transacted. |
| `transaction_refresh` | `string` | Yes | The token of the transaction refresh that last updated or created this transaction. |
| `treasury` | `mixed` | No | [Treasury](https://docs.stripe.com/api/treasury) details related to this transaction if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Transaction()->create([
  "id" => null, // string
  "account" => null, // string
  "amount" => null, // int
  "balance_impact" => null, // array
  "card" => null, // mixed
  "created" => null, // int
  "currency" => null, // string
  "customer_details" => null, // array
  "description" => null, // string
  "entries" => null, // array
  "financial_account" => null, // string
  "flow_type" => null, // string
  "line_items" => null, // array
  "livemode" => null, // bool
  "merchant_amount" => null, // int
  "merchant_currency" => null, // string
  "merchant_data" => null, // array
  "metadata" => null, // array
  "object" => null, // string
  "reference" => null, // string
  "status" => null, // string
  "status_transitions" => null, // array
  "tax_date" => null, // int
  "transacted_at" => null, // int
  "transaction_refresh" => null, // string
  "type" => null, // string
  "updated" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Transaction()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Transaction()->load(["id" => "transaction_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TransactionEntity`

Create a new `TransactionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TransactionEntryEntity

```php
$transaction_entry = $client->TransactionEntry();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance_impact` | `array` | Yes | Change to a FinancialAccount's balance |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `effective_at` | `int` | Yes | When the TransactionEntry will impact the FinancialAccount's balance. |
| `financial_account` | `string` | Yes | The FinancialAccount associated with this object. |
| `flow` | `string` | No | Token of the flow associated with the TransactionEntry. |
| `flow_details` | `mixed` | No | Details of the flow associated with the TransactionEntry. |
| `flow_type` | `string` | Yes | Type of the flow associated with the TransactionEntry. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `transaction` | `mixed` | Yes | The Transaction associated with this object. |
| `type` | `string` | Yes | The specific money movement that generated the TransactionEntry. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TransactionEntry()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TransactionEntry()->load(["id" => "transaction_entry_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TransactionEntryEntity`

Create a new `TransactionEntryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TransferEntity

```php
$transfer = $client->Transfer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount in cents (or local equivalent) to be transferred. |
| `amount_reversed` | `int` | Yes | Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued). |
| `balance_transaction` | `mixed` | No | Balance transaction that describes the impact of this transfer on your account balance. |
| `created` | `int` | Yes | Time that this record of the transfer was first created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `destination` | `mixed` | No | ID of the Stripe account the transfer was sent to. |
| `destination_payment` | `mixed` | No | If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `reversals` | `array` | Yes | A list of reversals that have been applied to the transfer. |
| `reversed` | `bool` | Yes | Whether the transfer has been fully reversed. |
| `source_transaction` | `mixed` | No | ID of the charge that was used to fund the transfer. |
| `source_type` | `string` | No | The source balance this transfer came from. |
| `transfer_group` | `string` | No | A string that identifies this transaction as part of a group. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Transfer()->create([
  "id" => null, // string
  "amount" => null, // int
  "amount_reversed" => null, // int
  "created" => null, // int
  "currency" => null, // string
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "reversals" => null, // array
  "reversed" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Transfer()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Transfer()->load(["id" => "transfer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TransferEntity`

Create a new `TransferEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TrialOfferEntity

```php
$trial_offer = $client->TrialOffer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the trial offer is active. |
| `duration` | `array` | Yes |  |
| `end_behavior` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `nickname` | `string` | No | A brief description of the trial offer, hidden from customers. |
| `object` | `string` | Yes | String representing the object's type. |
| `price` | `float` | Yes | The price during the trial offer. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TrialOffer()->create([
  "id" => null, // string
  "active" => null, // bool
  "duration" => null, // array
  "end_behavior" => null, // array
  "livemode" => null, // bool
  "object" => null, // string
  "price" => null, // float
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TrialOffer()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TrialOffer()->load(["id" => "trial_offer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TrialOfferEntity`

Create a new `TrialOfferEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ValueListEntity

```php
$value_list = $client->ValueList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes | The name of the value list for use in rules. |
| `created` | `int` | Yes | Time at which the object was created. |
| `created_by` | `string` | Yes | The name or email address of the user who created this value list. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `item_type` | `string` | Yes | The type of items in the value list. |
| `list_items` | `array` | Yes | List of items contained within this value list. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Yes | The name of the value list. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ValueList()->create([
  "id" => null, // string
  "alias" => null, // string
  "created" => null, // int
  "created_by" => null, // string
  "item_type" => null, // string
  "list_items" => null, // array
  "livemode" => null, // bool
  "metadata" => null, // array
  "name" => null, // string
  "object" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ValueList()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ValueList()->load(["id" => "value_list_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ValueList()->remove(["id" => "value_list_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ValueListEntity`

Create a new `ValueListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ValueListItemEntity

```php
$value_list_item = $client->ValueListItem();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ValueListItem()->create([
  "created" => null, // int
  "created_by" => null, // string
  "id" => null, // string
  "livemode" => null, // bool
  "object" => null, // string
  "value" => null, // string
  "value_list" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ValueListItem()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ValueListItem()->load(["id" => "value_list_item_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ValueListItem()->remove(["id" => "value_list_item_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ValueListItemEntity`

Create a new `ValueListItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VerificationReportEntity

```php
$verification_report = $client->VerificationReport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_reference_id` | `string` | No | A string to reference this user. |
| `created` | `int` | Yes | Time at which the object was created. |
| `document` | `array` | Yes | Result from a document check |
| `email` | `array` | Yes | Result from a email check |
| `id` | `string` | Yes | Unique identifier for the object. |
| `id_number` | `array` | Yes | Result from an id_number check |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `options` | `array` | No |  |
| `phone` | `array` | Yes | Result from a phone check |
| `selfie` | `array` | Yes | Result from a selfie check |
| `type` | `string` | Yes | Type of report. |
| `verification_flow` | `string` | No | The configuration token of a verification flow from the dashboard. |
| `verification_session` | `string` | No | ID of the VerificationSession that created this report. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->VerificationReport()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->VerificationReport()->load(["id" => "verification_report_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VerificationReportEntity`

Create a new `VerificationReportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VerificationSessionEntity

```php
$verification_session = $client->VerificationSession();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_reference_id` | `string` | No | A string to reference this user. |
| `client_secret` | `string` | No | The short-lived client secret used by Stripe.js to [show a verification modal](https://docs.stripe.com/js/identity/modal) inside your app. |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last_error` | `mixed` | No | If present, this property tells you the last error encountered when processing the verification. |
| `last_verification_report` | `mixed` | No | ID of the most recent VerificationReport. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `options` | `mixed` | No | A set of options for the session’s verification checks. |
| `provided_details` | `mixed` | No | Details provided about the user being verified. |
| `redaction` | `mixed` | No | Redaction status of this VerificationSession. |
| `related_customer` | `string` | No | Customer ID |
| `related_customer_account` | `string` | No | The ID of the Account representing a customer. |
| `related_person` | `array` | Yes |  |
| `status` | `string` | Yes | Status of this VerificationSession. |
| `type` | `string` | Yes | The type of [verification check](https://docs.stripe.com/identity/verification-checks) to be performed. |
| `url` | `string` | No | The short-lived URL that you use to redirect a user to Stripe to submit their identity information. |
| `verification_flow` | `string` | No | The configuration token of a verification flow from the dashboard. |
| `verified_outputs` | `mixed` | No | The user’s verified data. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->VerificationSession()->create([
  "id" => null, // string
  "created" => null, // int
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "related_person" => null, // array
  "status" => null, // string
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->VerificationSession()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->VerificationSession()->load(["id" => "verification_session_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VerificationSessionEntity`

Create a new `VerificationSessionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEndpointEntity

```php
$webhook_endpoint = $client->WebhookEndpoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_version` | `string` | No | The API version that events are rendered as for this webhook endpoint. |
| `application` | `string` | No | The ID of the associated Connect application. |
| `created` | `int` | Yes | Time at which the object was created. |
| `description` | `string` | No | An optional description of what the webhook is used for. |
| `enabled_events` | `array` | Yes | The list of events to enable for this endpoint. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `array` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `secret` | `string` | No | The endpoint's secret, used to generate [webhook signatures](https://docs.stripe.com/webhooks/signatures). |
| `status` | `string` | Yes | The status of the webhook. |
| `url` | `string` | Yes | The URL of the webhook endpoint. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WebhookEndpoint()->create([
  "id" => null, // string
  "created" => null, // int
  "enabled_events" => null, // array
  "livemode" => null, // bool
  "metadata" => null, // array
  "object" => null, // string
  "status" => null, // string
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WebhookEndpoint()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WebhookEndpoint()->load(["id" => "webhook_endpoint_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEndpointEntity`

Create a new `WebhookEndpointEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new StripeSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

