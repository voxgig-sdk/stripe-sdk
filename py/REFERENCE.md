# Stripe Python SDK Reference

Complete API reference for the Stripe Python SDK.


## StripeSDK

### Constructor

```python
from stripe_sdk import StripeSDK

client = StripeSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `StripeSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = StripeSDK.test()
```


### Instance Methods

#### `Account(data=None)`

Create a new `AccountEntity` instance. Pass `None` for no initial data.

#### `AccountLink(data=None)`

Create a new `AccountLinkEntity` instance. Pass `None` for no initial data.

#### `AccountOwner(data=None)`

Create a new `AccountOwnerEntity` instance. Pass `None` for no initial data.

#### `AccountSession(data=None)`

Create a new `AccountSessionEntity` instance. Pass `None` for no initial data.

#### `ActiveEntitlement(data=None)`

Create a new `ActiveEntitlementEntity` instance. Pass `None` for no initial data.

#### `Alert(data=None)`

Create a new `AlertEntity` instance. Pass `None` for no initial data.

#### `ApplePayDomain(data=None)`

Create a new `ApplePayDomainEntity` instance. Pass `None` for no initial data.

#### `ApplicationFee(data=None)`

Create a new `ApplicationFeeEntity` instance. Pass `None` for no initial data.

#### `Association(data=None)`

Create a new `AssociationEntity` instance. Pass `None` for no initial data.

#### `Authentication(data=None)`

Create a new `AuthenticationEntity` instance. Pass `None` for no initial data.

#### `Authorization(data=None)`

Create a new `AuthorizationEntity` instance. Pass `None` for no initial data.

#### `Balance(data=None)`

Create a new `BalanceEntity` instance. Pass `None` for no initial data.

#### `BalanceSetting(data=None)`

Create a new `BalanceSettingEntity` instance. Pass `None` for no initial data.

#### `BalanceTransaction(data=None)`

Create a new `BalanceTransactionEntity` instance. Pass `None` for no initial data.

#### `BankAccount(data=None)`

Create a new `BankAccountEntity` instance. Pass `None` for no initial data.

#### `Calculation(data=None)`

Create a new `CalculationEntity` instance. Pass `None` for no initial data.

#### `Capability(data=None)`

Create a new `CapabilityEntity` instance. Pass `None` for no initial data.

#### `Card(data=None)`

Create a new `CardEntity` instance. Pass `None` for no initial data.

#### `Cardholder(data=None)`

Create a new `CardholderEntity` instance. Pass `None` for no initial data.

#### `CashBalance(data=None)`

Create a new `CashBalanceEntity` instance. Pass `None` for no initial data.

#### `CashBalanceTransaction(data=None)`

Create a new `CashBalanceTransactionEntity` instance. Pass `None` for no initial data.

#### `Charge(data=None)`

Create a new `ChargeEntity` instance. Pass `None` for no initial data.

#### `Configuration(data=None)`

Create a new `ConfigurationEntity` instance. Pass `None` for no initial data.

#### `ConfirmationToken(data=None)`

Create a new `ConfirmationTokenEntity` instance. Pass `None` for no initial data.

#### `ConnectionToken(data=None)`

Create a new `ConnectionTokenEntity` instance. Pass `None` for no initial data.

#### `CountrySpec(data=None)`

Create a new `CountrySpecEntity` instance. Pass `None` for no initial data.

#### `Coupon(data=None)`

Create a new `CouponEntity` instance. Pass `None` for no initial data.

#### `CreditBalanceSummary(data=None)`

Create a new `CreditBalanceSummaryEntity` instance. Pass `None` for no initial data.

#### `CreditBalanceTransaction(data=None)`

Create a new `CreditBalanceTransactionEntity` instance. Pass `None` for no initial data.

#### `CreditGrant(data=None)`

Create a new `CreditGrantEntity` instance. Pass `None` for no initial data.

#### `CreditNote(data=None)`

Create a new `CreditNoteEntity` instance. Pass `None` for no initial data.

#### `CreditNoteLine(data=None)`

Create a new `CreditNoteLineEntity` instance. Pass `None` for no initial data.

#### `CreditReversal(data=None)`

Create a new `CreditReversalEntity` instance. Pass `None` for no initial data.

#### `Customer(data=None)`

Create a new `CustomerEntity` instance. Pass `None` for no initial data.

#### `CustomerBalanceTransaction(data=None)`

Create a new `CustomerBalanceTransactionEntity` instance. Pass `None` for no initial data.

#### `CustomerSession(data=None)`

Create a new `CustomerSessionEntity` instance. Pass `None` for no initial data.

#### `DebitReversal(data=None)`

Create a new `DebitReversalEntity` instance. Pass `None` for no initial data.

#### `DeletedAccount(data=None)`

Create a new `DeletedAccountEntity` instance. Pass `None` for no initial data.

#### `DeletedApplePayDomain(data=None)`

Create a new `DeletedApplePayDomainEntity` instance. Pass `None` for no initial data.

#### `DeletedCoupon(data=None)`

Create a new `DeletedCouponEntity` instance. Pass `None` for no initial data.

#### `DeletedExternalAccount(data=None)`

Create a new `DeletedExternalAccountEntity` instance. Pass `None` for no initial data.

#### `DeletedInvoiceitem(data=None)`

Create a new `DeletedInvoiceitemEntity` instance. Pass `None` for no initial data.

#### `DeletedPerson(data=None)`

Create a new `DeletedPersonEntity` instance. Pass `None` for no initial data.

#### `DeletedPlan(data=None)`

Create a new `DeletedPlanEntity` instance. Pass `None` for no initial data.

#### `DeletedProductFeature(data=None)`

Create a new `DeletedProductFeatureEntity` instance. Pass `None` for no initial data.

#### `DeletedSubscriptionItem(data=None)`

Create a new `DeletedSubscriptionItemEntity` instance. Pass `None` for no initial data.

#### `DeletedWebhookEndpoint(data=None)`

Create a new `DeletedWebhookEndpointEntity` instance. Pass `None` for no initial data.

#### `Discount(data=None)`

Create a new `DiscountEntity` instance. Pass `None` for no initial data.

#### `Dispute(data=None)`

Create a new `DisputeEntity` instance. Pass `None` for no initial data.

#### `Domain(data=None)`

Create a new `DomainEntity` instance. Pass `None` for no initial data.

#### `EarlyFraudWarning(data=None)`

Create a new `EarlyFraudWarningEntity` instance. Pass `None` for no initial data.

#### `EphemeralKey(data=None)`

Create a new `EphemeralKeyEntity` instance. Pass `None` for no initial data.

#### `Event(data=None)`

Create a new `EventEntity` instance. Pass `None` for no initial data.

#### `ExchangeRate(data=None)`

Create a new `ExchangeRateEntity` instance. Pass `None` for no initial data.

#### `ExternalAccount(data=None)`

Create a new `ExternalAccountEntity` instance. Pass `None` for no initial data.

#### `Feature(data=None)`

Create a new `FeatureEntity` instance. Pass `None` for no initial data.

#### `FeedbackOption(data=None)`

Create a new `FeedbackOptionEntity` instance. Pass `None` for no initial data.

#### `File(data=None)`

Create a new `FileEntity` instance. Pass `None` for no initial data.

#### `FileLink(data=None)`

Create a new `FileLinkEntity` instance. Pass `None` for no initial data.

#### `FinancialAccount(data=None)`

Create a new `FinancialAccountEntity` instance. Pass `None` for no initial data.

#### `FinancialAccountFeature(data=None)`

Create a new `FinancialAccountFeatureEntity` instance. Pass `None` for no initial data.

#### `FundCashBalance(data=None)`

Create a new `FundCashBalanceEntity` instance. Pass `None` for no initial data.

#### `FundingInstruction(data=None)`

Create a new `FundingInstructionEntity` instance. Pass `None` for no initial data.

#### `History(data=None)`

Create a new `HistoryEntity` instance. Pass `None` for no initial data.

#### `InboundTransfer(data=None)`

Create a new `InboundTransferEntity` instance. Pass `None` for no initial data.

#### `Install(data=None)`

Create a new `InstallEntity` instance. Pass `None` for no initial data.

#### `Invoice(data=None)`

Create a new `InvoiceEntity` instance. Pass `None` for no initial data.

#### `InvoicePayment(data=None)`

Create a new `InvoicePaymentEntity` instance. Pass `None` for no initial data.

#### `InvoiceRenderingTemplate(data=None)`

Create a new `InvoiceRenderingTemplateEntity` instance. Pass `None` for no initial data.

#### `Invoiceitem(data=None)`

Create a new `InvoiceitemEntity` instance. Pass `None` for no initial data.

#### `Line(data=None)`

Create a new `LineEntity` instance. Pass `None` for no initial data.

#### `LineItem(data=None)`

Create a new `LineItemEntity` instance. Pass `None` for no initial data.

#### `LinkedAccount(data=None)`

Create a new `LinkedAccountEntity` instance. Pass `None` for no initial data.

#### `LinkedAccountOwner(data=None)`

Create a new `LinkedAccountOwnerEntity` instance. Pass `None` for no initial data.

#### `Location(data=None)`

Create a new `LocationEntity` instance. Pass `None` for no initial data.

#### `LoginLink(data=None)`

Create a new `LoginLinkEntity` instance. Pass `None` for no initial data.

#### `Mandate(data=None)`

Create a new `MandateEntity` instance. Pass `None` for no initial data.

#### `Meter(data=None)`

Create a new `MeterEntity` instance. Pass `None` for no initial data.

#### `MeterEvent(data=None)`

Create a new `MeterEventEntity` instance. Pass `None` for no initial data.

#### `MeterEventAdjustment(data=None)`

Create a new `MeterEventAdjustmentEntity` instance. Pass `None` for no initial data.

#### `MeterEventSummary(data=None)`

Create a new `MeterEventSummaryEntity` instance. Pass `None` for no initial data.

#### `OnboardingLink(data=None)`

Create a new `OnboardingLinkEntity` instance. Pass `None` for no initial data.

#### `Order(data=None)`

Create a new `OrderEntity` instance. Pass `None` for no initial data.

#### `OutboundPayment(data=None)`

Create a new `OutboundPaymentEntity` instance. Pass `None` for no initial data.

#### `OutboundTransfer(data=None)`

Create a new `OutboundTransferEntity` instance. Pass `None` for no initial data.

#### `PaymentAttemptRecord(data=None)`

Create a new `PaymentAttemptRecordEntity` instance. Pass `None` for no initial data.

#### `PaymentEvaluation(data=None)`

Create a new `PaymentEvaluationEntity` instance. Pass `None` for no initial data.

#### `PaymentIntent(data=None)`

Create a new `PaymentIntentEntity` instance. Pass `None` for no initial data.

#### `PaymentIntentAmountDetailsLineItem(data=None)`

Create a new `PaymentIntentAmountDetailsLineItemEntity` instance. Pass `None` for no initial data.

#### `PaymentLink(data=None)`

Create a new `PaymentLinkEntity` instance. Pass `None` for no initial data.

#### `PaymentMethod(data=None)`

Create a new `PaymentMethodEntity` instance. Pass `None` for no initial data.

#### `PaymentMethodConfiguration(data=None)`

Create a new `PaymentMethodConfigurationEntity` instance. Pass `None` for no initial data.

#### `PaymentMethodDomain(data=None)`

Create a new `PaymentMethodDomainEntity` instance. Pass `None` for no initial data.

#### `PaymentRecord(data=None)`

Create a new `PaymentRecordEntity` instance. Pass `None` for no initial data.

#### `Payout(data=None)`

Create a new `PayoutEntity` instance. Pass `None` for no initial data.

#### `Person(data=None)`

Create a new `PersonEntity` instance. Pass `None` for no initial data.

#### `PersonalizationDesign(data=None)`

Create a new `PersonalizationDesignEntity` instance. Pass `None` for no initial data.

#### `PhysicalBundle(data=None)`

Create a new `PhysicalBundleEntity` instance. Pass `None` for no initial data.

#### `Plan(data=None)`

Create a new `PlanEntity` instance. Pass `None` for no initial data.

#### `Price(data=None)`

Create a new `PriceEntity` instance. Pass `None` for no initial data.

#### `Product(data=None)`

Create a new `ProductEntity` instance. Pass `None` for no initial data.

#### `ProductFeature(data=None)`

Create a new `ProductFeatureEntity` instance. Pass `None` for no initial data.

#### `PromotionCode(data=None)`

Create a new `PromotionCodeEntity` instance. Pass `None` for no initial data.

#### `Quote(data=None)`

Create a new `QuoteEntity` instance. Pass `None` for no initial data.

#### `QuoteComputedUpfrontLineItem(data=None)`

Create a new `QuoteComputedUpfrontLineItemEntity` instance. Pass `None` for no initial data.

#### `QuotePdf(data=None)`

Create a new `QuotePdfEntity` instance. Pass `None` for no initial data.

#### `Reader(data=None)`

Create a new `ReaderEntity` instance. Pass `None` for no initial data.

#### `ReceivedCredit(data=None)`

Create a new `ReceivedCreditEntity` instance. Pass `None` for no initial data.

#### `ReceivedDebit(data=None)`

Create a new `ReceivedDebitEntity` instance. Pass `None` for no initial data.

#### `Refund(data=None)`

Create a new `RefundEntity` instance. Pass `None` for no initial data.

#### `Registration(data=None)`

Create a new `RegistrationEntity` instance. Pass `None` for no initial data.

#### `ReportRun(data=None)`

Create a new `ReportRunEntity` instance. Pass `None` for no initial data.

#### `ReportType(data=None)`

Create a new `ReportTypeEntity` instance. Pass `None` for no initial data.

#### `Request(data=None)`

Create a new `RequestEntity` instance. Pass `None` for no initial data.

#### `Reversal(data=None)`

Create a new `ReversalEntity` instance. Pass `None` for no initial data.

#### `Review(data=None)`

Create a new `ReviewEntity` instance. Pass `None` for no initial data.

#### `ScheduledQueryRun(data=None)`

Create a new `ScheduledQueryRunEntity` instance. Pass `None` for no initial data.

#### `Search(data=None)`

Create a new `SearchEntity` instance. Pass `None` for no initial data.

#### `Secret(data=None)`

Create a new `SecretEntity` instance. Pass `None` for no initial data.

#### `Session(data=None)`

Create a new `SessionEntity` instance. Pass `None` for no initial data.

#### `Setting(data=None)`

Create a new `SettingEntity` instance. Pass `None` for no initial data.

#### `Settlement(data=None)`

Create a new `SettlementEntity` instance. Pass `None` for no initial data.

#### `SetupAttempt(data=None)`

Create a new `SetupAttemptEntity` instance. Pass `None` for no initial data.

#### `SetupIntent(data=None)`

Create a new `SetupIntentEntity` instance. Pass `None` for no initial data.

#### `ShippingRate(data=None)`

Create a new `ShippingRateEntity` instance. Pass `None` for no initial data.

#### `SigmaApiQuery(data=None)`

Create a new `SigmaApiQueryEntity` instance. Pass `None` for no initial data.

#### `Source(data=None)`

Create a new `SourceEntity` instance. Pass `None` for no initial data.

#### `SourceMandateNotification(data=None)`

Create a new `SourceMandateNotificationEntity` instance. Pass `None` for no initial data.

#### `SourceTransaction(data=None)`

Create a new `SourceTransactionEntity` instance. Pass `None` for no initial data.

#### `Subscription(data=None)`

Create a new `SubscriptionEntity` instance. Pass `None` for no initial data.

#### `SubscriptionItem(data=None)`

Create a new `SubscriptionItemEntity` instance. Pass `None` for no initial data.

#### `SubscriptionSchedule(data=None)`

Create a new `SubscriptionScheduleEntity` instance. Pass `None` for no initial data.

#### `Supplier(data=None)`

Create a new `SupplierEntity` instance. Pass `None` for no initial data.

#### `TaxCode(data=None)`

Create a new `TaxCodeEntity` instance. Pass `None` for no initial data.

#### `TaxId(data=None)`

Create a new `TaxIdEntity` instance. Pass `None` for no initial data.

#### `TaxRate(data=None)`

Create a new `TaxRateEntity` instance. Pass `None` for no initial data.

#### `TestClock(data=None)`

Create a new `TestClockEntity` instance. Pass `None` for no initial data.

#### `Token(data=None)`

Create a new `TokenEntity` instance. Pass `None` for no initial data.

#### `Topup(data=None)`

Create a new `TopupEntity` instance. Pass `None` for no initial data.

#### `Transaction(data=None)`

Create a new `TransactionEntity` instance. Pass `None` for no initial data.

#### `TransactionEntry(data=None)`

Create a new `TransactionEntryEntity` instance. Pass `None` for no initial data.

#### `Transfer(data=None)`

Create a new `TransferEntity` instance. Pass `None` for no initial data.

#### `TrialOffer(data=None)`

Create a new `TrialOfferEntity` instance. Pass `None` for no initial data.

#### `ValueList(data=None)`

Create a new `ValueListEntity` instance. Pass `None` for no initial data.

#### `ValueListItem(data=None)`

Create a new `ValueListItemEntity` instance. Pass `None` for no initial data.

#### `VerificationReport(data=None)`

Create a new `VerificationReportEntity` instance. Pass `None` for no initial data.

#### `VerificationSession(data=None)`

Create a new `VerificationSessionEntity` instance. Pass `None` for no initial data.

#### `WebhookEndpoint(data=None)`

Create a new `WebhookEndpointEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AccountEntity

```python
account = client.Account()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `Any` | No | The account holder that this account belongs to. |
| `account_numbers` | `list` | No | Details about the account numbers. |
| `balance` | `Any` | No | The most recent information about the account's balance. |
| `balance_refresh` | `Any` | No | The state of the most recent attempt to refresh the account balance. |
| `business_profile` | `Any` | No | Business information about the account. |
| `business_type` | `str` | No | The business type. |
| `capabilities` | `dict` | No |  |
| `category` | `str` | Yes | The type of the account. |
| `charges_enabled` | `bool` | No | Whether the account can process charges. |
| `company` | `dict` | No |  |
| `controller` | `dict` | Yes |  |
| `country` | `str` | No | The account's country. |
| `created` | `int` | Yes | Time at which the object was created. |
| `default_currency` | `str` | No | Three-letter ISO currency code representing the default currency for the account. |
| `details_submitted` | `bool` | No | Whether account details have been submitted. |
| `display_name` | `str` | No | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `email` | `str` | No | An email address associated with the account. |
| `external_accounts` | `dict` | Yes | External accounts (bank accounts and debit cards) currently attached to this account. |
| `future_requirements` | `dict` | No |  |
| `groups` | `Any` | No | The groups associated with the account. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `individual` | `dict` | Yes | This is an object representing a person associated with a Stripe account. |
| `institution_name` | `str` | Yes | The name of the institution that holds this account. |
| `last4` | `str` | No | The last 4 digits of the account number. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `ownership` | `Any` | No | The most recent information about the account's owners. |
| `ownership_refresh` | `Any` | No | The state of the most recent attempt to refresh the account owners. |
| `payouts_enabled` | `bool` | No | Whether the funds in this account can be paid out. |
| `permissions` | `list` | No | The list of permissions granted by this account. |
| `requirements` | `dict` | No |  |
| `settings` | `Any` | No | Options for customizing how the account functions within Stripe. |
| `status` | `str` | Yes | The status of the link to the account. |
| `status_details` | `dict` | No |  |
| `subcategory` | `str` | Yes | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `list` | No | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `list` | Yes | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `tos_acceptance` | `dict` | No |  |
| `transaction_refresh` | `Any` | No | The state of the most recent attempt to refresh the account transactions. |
| `type` | `str` | No | The Stripe account type. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Account().create({
    "id": "example_id",  # str
    "category": "example_category",  # str
    "controller": {},  # dict
    "created": 1,  # int
    "external_accounts": {},  # dict
    "individual": {},  # dict
    "institution_name": "example_institution_name",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "status": "example_status",  # str
    "subcategory": "example_subcategory",  # str
    "supported_payment_method_types": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Account().list()
for account in results:
    print(account)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Account().load({"account": "account"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AccountLinkEntity

```python
account_link = client.AccountLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `expires_at` | `int` | Yes | The timestamp at which this account link will expire. |
| `object` | `str` | Yes | String representing the object's type. |
| `url` | `str` | Yes | The URL for the account link. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AccountLink().create({
    "created": 1,  # int
    "expires_at": 1,  # int
    "object": "example_object",  # str
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AccountOwnerEntity

```python
account_owner = client.AccountOwner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | No | The email address of the owner. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `name` | `str` | Yes | The full name of the owner. |
| `object` | `str` | Yes | String representing the object's type. |
| `ownership` | `str` | Yes | The ownership object that this owner belongs to. |
| `phone` | `str` | No | The raw phone number of the owner. |
| `raw_address` | `str` | No | The raw physical address of the owner. |
| `refreshed_at` | `int` | No | The timestamp of the refresh that updated this owner. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AccountOwner().list({"id": "example", "ownership": "example"})
for account_owner in results:
    print(account_owner)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountOwnerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AccountSessionEntity

```python
account_session = client.AccountSession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_management` | `dict` | Yes |  |
| `account_onboarding` | `dict` | Yes |  |
| `balance_report` | `dict` | Yes |  |
| `balances` | `dict` | Yes |  |
| `disputes_list` | `dict` | Yes |  |
| `documents` | `dict` | Yes |  |
| `financial_account` | `dict` | Yes |  |
| `financial_account_transactions` | `dict` | Yes |  |
| `instant_payouts_promotion` | `dict` | Yes |  |
| `issuing_card` | `dict` | Yes |  |
| `issuing_cards_list` | `dict` | Yes |  |
| `notification_banner` | `dict` | Yes |  |
| `payment_details` | `dict` | Yes |  |
| `payment_disputes` | `dict` | Yes |  |
| `payment_method_settings` | `dict` | Yes |  |
| `payments` | `dict` | Yes |  |
| `payout_details` | `dict` | Yes |  |
| `payout_reconciliation_report` | `dict` | Yes |  |
| `payouts` | `dict` | Yes |  |
| `payouts_list` | `dict` | Yes |  |
| `tax_registrations` | `dict` | Yes |  |
| `tax_settings` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AccountSession().create({
    "account_management": {},  # dict
    "account_onboarding": {},  # dict
    "balance_report": {},  # dict
    "balances": {},  # dict
    "disputes_list": {},  # dict
    "documents": {},  # dict
    "financial_account": {},  # dict
    "financial_account_transactions": {},  # dict
    "instant_payouts_promotion": {},  # dict
    "issuing_card": {},  # dict
    "issuing_cards_list": {},  # dict
    "notification_banner": {},  # dict
    "payment_details": {},  # dict
    "payment_disputes": {},  # dict
    "payment_method_settings": {},  # dict
    "payments": {},  # dict
    "payout_details": {},  # dict
    "payout_reconciliation_report": {},  # dict
    "payouts": {},  # dict
    "payouts_list": {},  # dict
    "tax_registrations": {},  # dict
    "tax_settings": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountSessionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActiveEntitlementEntity

```python
active_entitlement = client.ActiveEntitlement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `feature` | `Any` | Yes | The [Feature](https://docs.stripe.com/api/entitlements/feature) that the customer is entitled to. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `str` | Yes | A unique key you provide as your own system identifier. |
| `object` | `str` | Yes | String representing the object's type. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ActiveEntitlement().list({"customer": "example"})
for active_entitlement in results:
    print(active_entitlement)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActiveEntitlement().load({"id": "active_entitlement_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActiveEntitlementEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlertEntity

```python
alert = client.Alert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_type` | `str` | Yes | Defines the type of the alert. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `status` | `str` | No | Status of the alert. |
| `title` | `str` | Yes | Title of the alert. |
| `usage_threshold` | `Any` | No | Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://docs.stripe.com/api/billing/meter). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Alert().create({
    "alert_type": "example_alert_type",  # str
    "id": "example_id",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "title": "example_title",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Alert().list()
for alert in results:
    print(alert)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Alert().load({"id": "alert_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApplePayDomainEntity

```python
apple_pay_domain = client.ApplePayDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `domain_name` | `str` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApplePayDomain().create({
    "created": 1,  # int
    "domain_name": "example_domain_name",  # str
    "id": "example_id",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApplePayDomain().load({"id": "apple_pay_domain_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplePayDomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApplicationFeeEntity

```python
application_fee = client.ApplicationFee()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `Any` | Yes | ID of the Stripe account this fee was taken from. |
| `amount` | `int` | Yes | Amount earned, in cents (or local equivalent). |
| `amount_refunded` | `int` | Yes | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued) |
| `application` | `Any` | Yes | ID of the Connect application that earned the fee. |
| `balance_transaction` | `Any` | No | Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds). |
| `charge` | `Any` | Yes | ID of the charge that the application fee was taken from. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `fee_source` | `Any` | No | Polymorphic source of the application fee. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `originating_transaction` | `Any` | No | ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter. |
| `refunded` | `bool` | Yes | Whether the fee has been fully refunded. |
| `refunds` | `dict` | Yes | A list of refunds that have been applied to the fee. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApplicationFee().create({
    "id": "example_id",  # str
    "account": "example_account",  # Any
    "amount": 1,  # int
    "amount_refunded": 1,  # int
    "application": "example_application",  # Any
    "charge": "example_charge",  # Any
    "created": 1,  # int
    "currency": "example_currency",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "refunded": True,  # bool
    "refunds": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApplicationFee().list()
for application_fee in results:
    print(application_fee)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApplicationFee().load({"id": "application_fee_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationFeeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AssociationEntity

```python
association = client.Association()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Association().list({"payment_intent": "example"})
for association in results:
    print(association)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssociationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuthenticationEntity

```python
authentication = client.Authentication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquirer_details` | `dict` | No | Contains additional details about the acquirer for a 3DS Authentication. |
| `amount` | `int` | No | The amount for this 3DS Authentication. |
| `challenge_url` | `str` | No | The URL for presenting a challenge to your cardholder, present if status is requires_challenge. |
| `channel` | `dict` | Yes | Contains details on the channel used (browser, 3RI) for a standalone 3DS Authentication. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `directory_server` | `str` | Yes | The 3DS directory server with which this 3DS Authentication was processed. |
| `fingerprinting_url` | `str` | No | The URL for performing issuer fingerprinting, present if fingerprinting is supported for the given payment method. |
| `flow_preference` | `dict` | Yes | Contains details of the flow preference used for a standalone 3DS Authentication. |
| `future_usage` | `dict` | Yes | Contains information about the future authorisations related to this authentication |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `message_category` | `str` | Yes | Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `outcome` | `str` | No | The outcome of this 3DS Authentication. |
| `outcome_details` | `dict` | Yes | Contains details on the result for a standalone 3DS Authentication. |
| `payment_method` | `Any` | Yes | ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication. |
| `reason` | `str` | No | The reason for invoking this 3DS Authentication. |
| `shipping_address` | `dict` | No | Contains details about the shipping address for a 3DS Authentication. |
| `status` | `str` | Yes | Status of this Authentication. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Authentication().create({
    "channel": {},  # dict
    "created": 1,  # int
    "directory_server": "example_directory_server",  # str
    "flow_preference": {},  # dict
    "future_usage": {},  # dict
    "id": "example_id",  # str
    "livemode": True,  # bool
    "message_category": "example_message_category",  # str
    "object": "example_object",  # str
    "outcome_details": {},  # dict
    "payment_method": "example_payment_method",  # Any
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Authentication().list()
for authentication in results:
    print(authentication)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Authentication().load({"id": "authentication_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthenticationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuthorizationEntity

```python
authorization = client.Authorization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The total amount that was authorized or rejected. |
| `amount_details` | `Any` | No | Detailed breakdown of amount components. |
| `approved` | `bool` | Yes | Whether the authorization has been approved. |
| `authorization_method` | `str` | Yes | How the card details were provided. |
| `balance_transactions` | `list` | Yes | List of balance transactions associated with this authorization. |
| `card` | `dict` | Yes | You can [create physical or virtual cards](https://docs.stripe.com/issuing) that are issued to cardholders. |
| `card_presence` | `str` | No | Whether the card was present at the point of sale for the authorization. |
| `cardholder` | `Any` | No | The cardholder to whom this authorization belongs. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | The currency of the cardholder. |
| `fleet` | `Any` | No | Fleet-specific information for authorizations using Fleet cards. |
| `fraud_challenges` | `list` | No | Fraud challenges sent to the cardholder, if this authorization was declined for fraud risk reasons. |
| `fuel` | `Any` | No | Information about fuel that was purchased with this transaction. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `int` | Yes | The total amount that was authorized or rejected. |
| `merchant_currency` | `str` | Yes | The local currency that was presented to the cardholder for the authorization. |
| `merchant_data` | `dict` | Yes |  |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `Any` | No | Details about the authorization, such as identifiers, set by the card network. |
| `object` | `str` | Yes | String representing the object's type. |
| `pending_request` | `Any` | No | The pending authorization request. |
| `request_history` | `list` | Yes | History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. |
| `status` | `str` | Yes | The current status of the authorization in its lifecycle. |
| `token` | `str` | No | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this authorization. |
| `transactions` | `list` | Yes | List of [transactions](https://docs.stripe.com/api/issuing/transactions) associated with this authorization. |
| `treasury` | `Any` | No | [Treasury](https://docs.stripe.com/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts). |
| `verification_data` | `dict` | Yes |  |
| `verified_by_fraud_challenge` | `bool` | No | Whether the authorization bypassed fraud risk checks because the cardholder has previously completed a fraud challenge on a similar high-risk authorization from the same merchant. |
| `wallet` | `str` | No | The digital wallet used for this transaction. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Authorization().create({
    "id": "example_id",  # str
    "amount": 1,  # int
    "approved": True,  # bool
    "authorization_method": "example_authorization_method",  # str
    "balance_transactions": [],  # list
    "card": {},  # dict
    "created": 1,  # int
    "currency": "example_currency",  # str
    "livemode": True,  # bool
    "merchant_amount": 1,  # int
    "merchant_currency": "example_merchant_currency",  # str
    "merchant_data": {},  # dict
    "metadata": {},  # dict
    "object": "example_object",  # str
    "request_history": [],  # list
    "status": "example_status",  # str
    "transactions": [],  # list
    "verification_data": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Authorization().list()
for authorization in results:
    print(authorization)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Authorization().load({"id": "authorization_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthorizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BalanceEntity

```python
balance = client.Balance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `list` | Yes | Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://docs.stripe.com/api#transfers) or [Payouts API](https://docs.stripe.com/api#payouts). |
| `connect_reserved` | `list` | No | Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. |
| `instant_available` | `list` | No | Funds that you can pay out using Instant Payouts. |
| `issuing` | `dict` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `pending` | `list` | Yes | Funds that aren't available in the balance yet. |
| `refund_and_dispute_prefunding` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Balance().list()
for balance in results:
    print(balance)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BalanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BalanceSettingEntity

```python
balance_setting = client.BalanceSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `debit_negative_balances` | `bool` | No | A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. |
| `payouts` | `Any` | No | Settings specific to the account's payouts. |
| `settlement_timing` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BalanceSetting().create({
    "settlement_timing": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BalanceSetting().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BalanceSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BalanceTransactionEntity

```python
balance_transaction = client.BalanceTransaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Gross amount of this transaction (in cents (or local equivalent)). |
| `available_on` | `int` | Yes | The date that the transaction's net funds become available in the Stripe balance. |
| `balance_type` | `str` | Yes | The balance that this transaction impacts. |
| `checkout_session` | `Any` | No | The ID of the checkout session (if any) that created the transaction. |
| `created` | `int` | Yes | Time at which the object was created. |
| `credit_note` | `Any` | No | The ID of the credit note (if any) related to the transaction. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `Any` | Yes | The ID of the customer the transaction belongs to. |
| `customer_account` | `str` | No | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `ending_balance` | `int` | Yes | The customer's `balance` after the transaction was applied. |
| `exchange_rate` | `float` | No | If applicable, this transaction uses an exchange rate. |
| `fee` | `int` | Yes | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | `list` | Yes | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `invoice` | `Any` | No | The ID of the invoice (if any) related to the transaction. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net` | `int` | Yes | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `str` | Yes | String representing the object's type. |
| `reporting_category` | `str` | Yes | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `Any` | No | This transaction relates to the Stripe object. |
| `status` | `str` | Yes | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `str` | Yes | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BalanceTransaction().list()
for balance_transaction in results:
    print(balance_transaction)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BalanceTransaction().load({"id": "balance_transaction_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BalanceTransactionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BankAccountEntity

```python
bank_account = client.BankAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `Any` | No | The account this bank account belongs to. |
| `account_holder_name` | `str` | No | The name of the person or business that owns the bank account. |
| `account_holder_type` | `str` | No | The type of entity that holds the account. |
| `account_type` | `str` | No | The bank account type. |
| `available_payout_methods` | `list` | No | A set of available payout methods for this bank account. |
| `bank_name` | `str` | No | Name of the bank associated with the routing number (e.g., `WELLS FARGO`). |
| `country` | `str` | Yes | Two-letter ISO code representing the country the bank account is located in. |
| `currency` | `str` | Yes | Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. |
| `customer` | `Any` | No | The ID of the customer that the bank account is associated with. |
| `default_for_currency` | `bool` | No | Whether this bank account is the default external account for its currency. |
| `fingerprint` | `str` | No | Uniquely identifies this particular bank account. |
| `future_requirements` | `Any` | No | Information about the [upcoming new requirements for the bank account](https://docs.stripe.com/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `last4` | `str` | Yes | The last four digits of the bank account number. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `requirements` | `Any` | No | Information about the requirements for the bank account, including what information needs to be collected. |
| `routing_number` | `str` | No | The routing transit number for the bank account. |
| `status` | `str` | Yes | For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, `tokenized_account_number_deactivated` or `errored`. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BankAccount().create({
    "customer_id": "example_customer_id",  # str
    "country": "example_country",  # str
    "currency": "example_currency",  # str
    "last4": "example_last4",  # str
    "object": "example_object",  # str
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BankAccount().list({"customer_id": "example"})
for bank_account in results:
    print(bank_account)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BankAccount().load({"id": "bank_account_id", "customer_id": "customer_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.BankAccount().remove({"id": "bank_account_id", "customer_id": "customer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BankAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CalculationEntity

```python
calculation = client.Calculation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_total` | `int` | Yes | Total amount after taxes in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `str` | No | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `dict` | Yes |  |
| `expires_at` | `int` | No | Timestamp of date at which the tax calculation will expire. |
| `id` | `str` | No | Unique identifier for the calculation. |
| `line_items` | `dict` | Yes | The list of items the customer is purchasing. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `ship_from_details` | `Any` | No | The details of the ship from location, such as the address. |
| `shipping_cost` | `Any` | No | The shipping cost details for the calculation. |
| `tax_amount_exclusive` | `int` | Yes | The amount of tax to be collected on top of the line item prices. |
| `tax_amount_inclusive` | `int` | Yes | The amount of tax already included in the line item prices. |
| `tax_breakdown` | `list` | Yes | Breakdown of individual tax amounts that add up to the total. |
| `tax_date` | `int` | Yes | The calculation uses the tax rules and rates that are in effect at this timestamp. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Calculation().create({
    "amount_total": 1,  # int
    "currency": "example_currency",  # str
    "customer_details": {},  # dict
    "line_items": {},  # dict
    "livemode": True,  # bool
    "object": "example_object",  # str
    "tax_amount_exclusive": 1,  # int
    "tax_amount_inclusive": 1,  # int
    "tax_breakdown": [],  # list
    "tax_date": 1,  # int
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Calculation().load({"id": "calculation_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CalculationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CapabilityEntity

```python
capability = client.Capability()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `Any` | Yes | The account for which the capability enables functionality. |
| `future_requirements` | `dict` | Yes |  |
| `id` | `str` | Yes | The identifier for the capability. |
| `object` | `str` | Yes | String representing the object's type. |
| `requested` | `bool` | Yes | Whether the capability has been requested. |
| `requested_at` | `int` | No | Time at which the capability was requested. |
| `requirements` | `dict` | Yes |  |
| `status` | `str` | Yes | The status of the capability. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Capability().create({
    "account_id": "example_account_id",  # str
    "id": "example_id",  # str
    "account": "example_account",  # Any
    "future_requirements": {},  # dict
    "object": "example_object",  # str
    "requested": True,  # bool
    "requirements": {},  # dict
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Capability().list({"account_id": "example"})
for capability in results:
    print(capability)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Capability().load({"id": "capability_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CapabilityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CardEntity

```python
card = client.Card()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `Any` | No |  |
| `address_city` | `str` | No | City/District/Suburb/Town/Village. |
| `address_country` | `str` | No | Billing address country, if provided when creating card. |
| `address_line1` | `str` | No | Address line 1 (Street address/PO Box/Company name). |
| `address_line1_check` | `str` | No | If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `address_line2` | `str` | No | Address line 2 (Apartment/Suite/Unit/Building). |
| `address_state` | `str` | No | State/County/Province/Region. |
| `address_zip` | `str` | No | ZIP or postal code. |
| `address_zip_check` | `str` | No | If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `allow_redisplay` | `bool` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `available_payout_methods` | `list` | No | A set of available payout methods for this card. |
| `brand` | `str` | Yes | Card brand. |
| `cancellation_reason` | `str` | No | The reason why the card was canceled. |
| `cardholder` | `dict` | Yes | An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://docs.stripe.com/issuing) cards. |
| `country` | `str` | No | Two-letter ISO code representing the country of the card. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | No | Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. |
| `customer` | `Any` | No | The customer that this card belongs to. |
| `cvc` | `str` | No | The card's CVC. |
| `cvc_check` | `str` | No | If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. |
| `default_for_currency` | `bool` | No | Whether this card is the default external account for its currency. |
| `dynamic_last4` | `str` | No | (For tokenized numbers only.) The last four digits of the device account number. |
| `exp_month` | `int` | Yes | Two-digit number representing the card's expiration month. |
| `exp_year` | `int` | Yes | Four-digit number representing the card's expiration year. |
| `financial_account` | `str` | No | The financial account this card is attached to. |
| `fingerprint` | `str` | No | Uniquely identifies this particular card number. |
| `funding` | `str` | Yes | Card funding type. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `last4` | `str` | Yes | The last four digits of the card. |
| `latest_fraud_warning` | `Any` | No | Stripe’s assessment of whether this card’s details have been compromised. |
| `lifecycle_controls` | `Any` | No | Rules that control the lifecycle of this card, such as automatic cancellation. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `str` | No | Cardholder name. |
| `networks` | `dict` | No |  |
| `number` | `str` | No | The full unredacted card number. |
| `object` | `str` | Yes | String representing the object's type. |
| `personalization_design` | `Any` | No | The personalization design object belonging to this card. |
| `regulated_status` | `str` | No | Status of a card based on the card issuer. |
| `replaced_by` | `Any` | No | The latest card that replaces this card, if any. |
| `replacement_for` | `Any` | No | The card this card replaces, if any. |
| `replacement_reason` | `str` | No | The reason why the previous card needed to be replaced. |
| `second_line` | `str` | No | Text separate from cardholder name, printed on the card. |
| `shipping` | `Any` | No | Where and how the card will be shipped. |
| `spending_controls` | `dict` | Yes |  |
| `status` | `str` | No | For external accounts that are cards, possible values are `new` and `errored`. |
| `tokenization_method` | `str` | No | If the card number is tokenized, this is the method that was used. |
| `type` | `str` | Yes | The type of the card. |
| `wallets` | `Any` | No | Information relating to digital wallets (like Apple Pay and Google Pay). |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Card().create({
    "id": "example_id",  # str
    "brand": "example_brand",  # str
    "cardholder": {},  # dict
    "created": 1,  # int
    "exp_month": 1,  # int
    "exp_year": 1,  # int
    "funding": "example_funding",  # str
    "last4": "example_last4",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "spending_controls": {},  # dict
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Card().list()
for card in results:
    print(card)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Card().load({"id": "card_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Card().remove({"id": "card_id", "customer_id": "customer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CardholderEntity

```python
cardholder = client.Cardholder()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `dict` | Yes |  |
| `company` | `Any` | No | Additional information about a `company` cardholder. |
| `created` | `int` | Yes | Time at which the object was created. |
| `email` | `str` | No | The cardholder's email address. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `individual` | `Any` | No | Additional information about an `individual` cardholder. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `str` | Yes | The cardholder's name. |
| `object` | `str` | Yes | String representing the object's type. |
| `phone_number` | `str` | No | The cardholder's phone number. |
| `preferred_locales` | `list` | No | The cardholder’s preferred locales (languages), ordered by preference. |
| `requirements` | `dict` | Yes |  |
| `spending_controls` | `Any` | No | Rules that control spending across this cardholder's cards. |
| `status` | `str` | Yes | Specifies whether to permit authorizations on this cardholder's cards. |
| `type` | `str` | Yes | One of `individual` or `company`. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Cardholder().create({
    "id": "example_id",  # str
    "billing": {},  # dict
    "created": 1,  # int
    "livemode": True,  # bool
    "metadata": {},  # dict
    "name": "example_name",  # str
    "object": "example_object",  # str
    "requirements": {},  # dict
    "status": "example_status",  # str
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Cardholder().list()
for cardholder in results:
    print(cardholder)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Cardholder().load({"id": "cardholder_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardholderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CashBalanceEntity

```python
cash_balance = client.CashBalance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `dict` | No | A hash of all cash balances available to this customer. |
| `customer` | `str` | Yes | The ID of the customer whose cash balance this object represents. |
| `customer_account` | `str` | No | The ID of an Account representing a customer whose cash balance this object represents. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `settings` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CashBalance().create({
    "customer_id": "example_customer_id",  # str
    "customer": "example_customer",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "settings": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CashBalance().load({"customer_id": "customer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CashBalanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CashBalanceTransactionEntity

```python
cash_balance_transaction = client.CashBalanceTransaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjusted_for_overdraft` | `dict` | Yes |  |
| `applied_to_payment` | `dict` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `Any` | Yes | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `str` | No | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `int` | Yes | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `net_amount` | `int` | Yes | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `str` | Yes | String representing the object's type. |
| `refunded_from_payment` | `dict` | Yes |  |
| `transferred_to_balance` | `dict` | Yes |  |
| `type` | `str` | Yes | The type of the cash balance transaction. |
| `unapplied_from_payment` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CashBalanceTransaction().list({"customer_id": "example"})
for cash_balance_transaction in results:
    print(cash_balance_transaction)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CashBalanceTransaction().load({"id": "cash_balance_transaction_id", "customer_id": "customer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CashBalanceTransactionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChargeEntity

```python
charge = client.Charge()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount intended to be collected by this payment. |
| `amount_captured` | `int` | Yes | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_refunded` | `int` | Yes | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `application` | `Any` | No | ID of the Connect application that created the charge. |
| `application_fee` | `Any` | No | The application fee (if any) for the charge. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) requested for the charge. |
| `balance_transaction` | `Any` | No | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_details` | `dict` | Yes |  |
| `calculated_statement_descriptor` | `str` | No | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `captured` | `bool` | Yes | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `Any` | No | ID of the customer this charge is for if one exists. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `disputed` | `bool` | Yes | Whether the charge has been disputed. |
| `failure_balance_transaction` | `Any` | No | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | `str` | No | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | `str` | No | Message to user further explaining reason for charge failure if available. |
| `fraud_details` | `Any` | No | Information on fraud assessments for the charge. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `on_behalf_of` | `Any` | No | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | `Any` | No | Details about whether the payment was accepted, and why. |
| `paid` | `bool` | Yes | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `payment_intent` | `Any` | No | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `str` | No | ID of the payment method used in this charge. |
| `payment_method_details` | `Any` | No | Details about the payment method at the time of the transaction. |
| `presentment_details` | `dict` | Yes |  |
| `radar_options` | `dict` | No | Options to configure Radar. |
| `receipt_email` | `str` | No | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `str` | No | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `str` | No | This is the URL to view the receipt for this charge. |
| `refunded` | `bool` | Yes | Whether the charge has been fully refunded. |
| `refunds` | `dict` | Yes | A list of refunds that have been applied to the charge. |
| `review` | `Any` | No | ID of the review associated with this charge if one exists. |
| `shipping` | `Any` | No | Shipping information for the charge. |
| `source_transfer` | `Any` | No | The transfer ID which created this charge. |
| `statement_descriptor` | `str` | No | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | `str` | No | Provides information about a card charge. |
| `status` | `str` | Yes | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `transfer` | `Any` | No | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `transfer_data` | `Any` | No | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `transfer_group` | `str` | No | A string that identifies this transaction as part of a group. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Charge().create({
    "id": "example_id",  # str
    "amount": 1,  # int
    "amount_captured": 1,  # int
    "amount_refunded": 1,  # int
    "billing_details": {},  # dict
    "captured": True,  # bool
    "created": 1,  # int
    "currency": "example_currency",  # str
    "disputed": True,  # bool
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "paid": True,  # bool
    "presentment_details": {},  # dict
    "refunded": True,  # bool
    "refunds": {},  # dict
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Charge().list()
for charge in results:
    print(charge)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Charge().load({"id": "charge_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChargeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConfigurationEntity

```python
configuration = client.Configuration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the configuration is active and can be used to create portal sessions. |
| `application` | `Any` | No | ID of the Connect Application that created the configuration. |
| `bbpos_wisepad3` | `dict` | No |  |
| `bbpos_wisepos_e` | `dict` | No |  |
| `business_profile` | `dict` | Yes |  |
| `cellular` | `dict` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `default_return_url` | `str` | No | The default URL to redirect customers to when they click on the portal's link to return to your website. |
| `features` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `is_account_default` | `bool` | No | Whether this Configuration is the default for your account |
| `is_default` | `bool` | Yes | Whether the configuration is the default. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `login_page` | `dict` | Yes |  |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `str` | No | The name of the configuration. |
| `object` | `str` | Yes | String representing the object's type. |
| `offline` | `dict` | No |  |
| `reboot_window` | `dict` | Yes |  |
| `stripe_s700` | `dict` | No |  |
| `stripe_s710` | `dict` | No |  |
| `tipping` | `dict` | No |  |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `verifone_m425` | `dict` | No |  |
| `verifone_p400` | `dict` | No |  |
| `verifone_p630` | `dict` | No |  |
| `verifone_ux700` | `dict` | No |  |
| `verifone_v660p` | `dict` | No |  |
| `wifi` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Configuration().create({
    "id": "example_id",  # str
    "active": True,  # bool
    "business_profile": {},  # dict
    "cellular": {},  # dict
    "created": 1,  # int
    "features": {},  # dict
    "is_default": True,  # bool
    "livemode": True,  # bool
    "login_page": {},  # dict
    "object": "example_object",  # str
    "reboot_window": {},  # dict
    "updated": 1,  # int
    "wifi": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Configuration().list()
for configuration in results:
    print(configuration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Configuration().load({"id": "configuration_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Configuration().remove({"id": "configuration_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConfigurationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConfirmationTokenEntity

```python
confirmation_token = client.ConfirmationToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `expires_at` | `int` | No | Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `mandate_data` | `Any` | No | Data used for generating a Mandate. |
| `metadata` | `dict` | No | Set of key-value pairs that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `payment_intent` | `str` | No | ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `payment_method_options` | `Any` | No | Payment-method-specific configuration for this ConfirmationToken. |
| `payment_method_preview` | `Any` | No | Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken. |
| `return_url` | `str` | No | Return URL used to confirm the Intent. |
| `setup_future_usage` | `str` | No | Indicates that you intend to make future payments with this ConfirmationToken's payment method. |
| `setup_intent` | `str` | No | ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used. |
| `shipping` | `Any` | No | Shipping information collected on this ConfirmationToken. |
| `use_stripe_sdk` | `bool` | Yes | Indicates whether the Stripe SDK is used to handle confirmation flow. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ConfirmationToken().create({
    "created": 1,  # int
    "id": "example_id",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "use_stripe_sdk": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConfirmationToken().load({"id": "confirmation_token_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConfirmationTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConnectionTokenEntity

```python
connection_token = client.ConnectionToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `str` | No | The id of the location that this connection token is scoped to. |
| `object` | `str` | Yes | String representing the object's type. |
| `secret` | `str` | Yes | Your application should pass this token to the Stripe Terminal SDK. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ConnectionToken().create({
    "object": "example_object",  # str
    "secret": "example_secret",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CountrySpecEntity

```python
country_spec = client.CountrySpec()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_currency` | `str` | Yes | The default currency for this country. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `object` | `str` | Yes | String representing the object's type. |
| `supported_bank_account_currencies` | `dict` | Yes | Currencies that can be accepted in the specific country (for transfers). |
| `supported_payment_currencies` | `list` | Yes | Currencies that can be accepted in the specified country (for payments). |
| `supported_payment_methods` | `list` | Yes | Payment methods available in the specified country. |
| `supported_transfer_countries` | `list` | Yes | Countries that can accept transfers from the specified country. |
| `verification_fields` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CountrySpec().list()
for country_spec in results:
    print(country_spec)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CountrySpec().load({"id": "country_spec_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountrySpecEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CouponEntity

```python
coupon = client.Coupon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_off` | `int` | No | Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer. |
| `applies_to` | `dict` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | No | If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off. |
| `currency_options` | `dict` | No | Coupons defined in each available currency option. |
| `duration` | `str` | Yes | One of `forever`, `once`, or `repeating`. |
| `duration_in_months` | `int` | No | If `duration` is `repeating`, the number of months the coupon applies. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | `int` | No | Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `str` | No | Name of the coupon displayed to customers on for instance invoices or receipts. |
| `object` | `str` | Yes | String representing the object's type. |
| `percent_off` | `float` | No | Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. |
| `redeem_by` | `int` | No | Date after which the coupon can no longer be redeemed. |
| `times_redeemed` | `int` | Yes | Number of times this coupon has been applied to a customer. |
| `valid` | `bool` | Yes | Taking account of the above properties, whether this coupon can still be applied to a customer. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Coupon().create({
    "id": "example_id",  # str
    "applies_to": {},  # dict
    "created": 1,  # int
    "duration": "example_duration",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "times_redeemed": 1,  # int
    "valid": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Coupon().list()
for coupon in results:
    print(coupon)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Coupon().load({"id": "coupon_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CouponEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreditBalanceSummaryEntity

```python
credit_balance_summary = client.CreditBalanceSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_balance` | `dict` | Yes |  |
| `ledger_balance` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CreditBalanceSummary().list({"filter": {}})
for credit_balance_summary in results:
    print(credit_balance_summary)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditBalanceSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreditBalanceTransactionEntity

```python
credit_balance_transaction = client.CreditBalanceTransaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `credit` | `Any` | No | Credit details for this credit balance transaction. |
| `credit_grant` | `Any` | Yes | The credit grant associated with this credit balance transaction. |
| `debit` | `Any` | No | Debit details for this credit balance transaction. |
| `effective_at` | `int` | Yes | The effective time of this credit balance transaction. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `test_clock` | `Any` | No | ID of the test clock this credit balance transaction belongs to. |
| `type` | `str` | No | The type of credit balance transaction (credit or debit). |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CreditBalanceTransaction().list()
for credit_balance_transaction in results:
    print(credit_balance_transaction)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CreditBalanceTransaction().load({"id": "credit_balance_transaction_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditBalanceTransactionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreditGrantEntity

```python
credit_grant = client.CreditGrant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `dict` | Yes |  |
| `applicability_config` | `dict` | Yes |  |
| `category` | `str` | Yes | The category of this credit grant. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `Any` | Yes | ID of the customer receiving the billing credits. |
| `customer_account` | `str` | No | ID of the account representing the customer receiving the billing credits |
| `effective_at` | `int` | No | The time when the billing credits become effective-when they're eligible for use. |
| `expires_at` | `int` | No | The time when the billing credits expire. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `str` | No | A descriptive name shown in dashboard. |
| `object` | `str` | Yes | String representing the object's type. |
| `priority` | `int` | No | The priority for applying this credit grant. |
| `test_clock` | `Any` | No | ID of the test clock this credit grant belongs to. |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `voided_at` | `int` | No | The time when this credit grant was voided. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreditGrant().create({
    "id": "example_id",  # str
    "amount": {},  # dict
    "applicability_config": {},  # dict
    "category": "example_category",  # str
    "created": 1,  # int
    "customer": "example_customer",  # Any
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "updated": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CreditGrant().list()
for credit_grant in results:
    print(credit_grant)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CreditGrant().load({"id": "credit_grant_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditGrantEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreditNoteEntity

```python
credit_note = client.CreditNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax. |
| `amount_shipping` | `int` | Yes | This is the sum of all the shipping amounts. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `Any` | Yes | ID of the customer. |
| `customer_account` | `str` | No | ID of the account representing the customer. |
| `customer_balance_transaction` | `Any` | No | Customer balance transaction related to this credit note. |
| `discount_amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the total amount of discount that was credited. |
| `discount_amounts` | `list` | Yes | The aggregate amounts calculated per discount for all line items. |
| `effective_at` | `int` | No | The date when this credit note is in effect. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `invoice` | `Any` | Yes | ID of the invoice. |
| `lines` | `dict` | Yes | Line items that make up the credit note |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `memo` | `str` | No | Customer-facing text that appears on the credit note PDF. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `str` | Yes | A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice. |
| `object` | `str` | Yes | String representing the object's type. |
| `out_of_band_amount` | `int` | No | Amount that was credited outside of Stripe. |
| `pdf` | `str` | Yes | The link to download the PDF of the credit note. |
| `post_payment_amount` | `int` | Yes | The amount of the credit note that was refunded to the customer, credited to the customer's balance, credited outside of Stripe, or any combination thereof. |
| `pre_payment_amount` | `int` | Yes | The amount of the credit note by which the invoice's `amount_remaining` and `amount_due` were reduced. |
| `pretax_credit_amounts` | `list` | Yes | The pretax credit amounts (ex: discount, credit grants, etc) for all line items. |
| `reason` | `str` | No | Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory` |
| `refunds` | `list` | Yes | Refunds related to this credit note. |
| `shipping_cost` | `Any` | No | The details of the cost of shipping, including the ShippingRate applied to the invoice. |
| `status` | `str` | Yes | Status of this credit note, one of `issued` or `void`. |
| `subtotal` | `int` | Yes | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts. |
| `subtotal_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts. |
| `total` | `int` | Yes | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount. |
| `total_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts. |
| `total_taxes` | `list` | No | The aggregate tax information for all line items. |
| `type` | `str` | Yes | Type of this credit note, one of `pre_payment` or `post_payment`. |
| `voided_at` | `int` | No | The time that the credit note was voided. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreditNote().create({
    "id": "example_id",  # str
    "amount": 1,  # int
    "amount_shipping": 1,  # int
    "created": 1,  # int
    "currency": "example_currency",  # str
    "customer": "example_customer",  # Any
    "discount_amount": 1,  # int
    "discount_amounts": [],  # list
    "invoice": "example_invoice",  # Any
    "lines": {},  # dict
    "livemode": True,  # bool
    "number": "example_number",  # str
    "object": "example_object",  # str
    "pdf": "example_pdf",  # str
    "post_payment_amount": 1,  # int
    "pre_payment_amount": 1,  # int
    "pretax_credit_amounts": [],  # list
    "refunds": [],  # list
    "status": "example_status",  # str
    "subtotal": 1,  # int
    "total": 1,  # int
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CreditNote().list()
for credit_note in results:
    print(credit_note)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CreditNote().load({"id": "credit_note_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditNoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreditNoteLineEntity

```python
credit_note_line = client.CreditNoteLine()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts. |
| `description` | `str` | No | Description of the item being credited. |
| `discount_amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `list` | Yes | The amount of discount calculated per discount for this line item |
| `id` | `str` | Yes | Unique identifier for the object. |
| `invoice_line_item` | `str` | No | ID of the invoice line item being credited |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `pretax_credit_amounts` | `list` | Yes | The pretax credit amounts (ex: discount, credit grants, etc) for this line item. |
| `quantity` | `int` | No | The number of units of product being credited. |
| `tax_rates` | `list` | Yes | The tax rates which apply to the line item. |
| `taxes` | `list` | No | The tax information of the line item. |
| `type` | `str` | Yes | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | `int` | No | The cost of each unit of product being credited. |
| `unit_amount_decimal` | `str` | No | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CreditNoteLine().list({"id": "example"})
for credit_note_line in results:
    print(credit_note_line)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditNoteLineEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreditReversalEntity

```python
credit_reversal = client.CreditReversal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `financial_account` | `str` | Yes | The FinancialAccount to reverse funds from. |
| `hosted_regulatory_receipt_url` | `str` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `str` | Yes | The rails used to reverse the funds. |
| `object` | `str` | Yes | String representing the object's type. |
| `received_credit` | `str` | Yes | The ReceivedCredit being reversed. |
| `status` | `str` | Yes | Status of the CreditReversal |
| `status_transitions` | `dict` | Yes |  |
| `transaction` | `Any` | No | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreditReversal().create({
    "amount": 1,  # int
    "created": 1,  # int
    "currency": "example_currency",  # str
    "financial_account": "example_financial_account",  # str
    "id": "example_id",  # str
    "livemode": True,  # bool
    "metadata": {},  # dict
    "network": "example_network",  # str
    "object": "example_object",  # str
    "received_credit": "example_received_credit",  # str
    "status": "example_status",  # str
    "status_transitions": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CreditReversal().list({"financial_account": "example"})
for credit_reversal in results:
    print(credit_reversal)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CreditReversal().load({"id": "credit_reversal_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditReversalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerEntity

```python
customer = client.Customer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `Any` | No | The customer's billing address. |
| `balance` | `int` | No | The current balance, if any, that's stored on the customer in their default currency. |
| `business_name` | `str` | No | The customer's business name. |
| `cash_balance` | `Any` | No | The current funds being held by Stripe on behalf of the customer. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | No | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes. |
| `customer_account` | `str` | No | The ID of an Account representing a customer. |
| `default_source` | `Any` | No | ID of the default payment source for the customer. |
| `delinquent` | `bool` | No | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `discount` | `Any` | No | Describes the current discount active on the customer, if there is one. |
| `email` | `str` | No | The customer's email address. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `individual_name` | `str` | No | The customer's individual name. |
| `invoice_credit_balance` | `dict` | No | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_prefix` | `str` | No | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `dict` | No |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `str` | No | The customer's full name or business name. |
| `next_invoice_sequence` | `int` | No | The suffix of the customer's next invoice number (for example, 0001). |
| `object` | `str` | Yes | String representing the object's type. |
| `phone` | `str` | No | The customer's phone number. |
| `preferred_locales` | `list` | No | The customer's preferred locales (languages), ordered by preference. |
| `shipping` | `Any` | No | Mailing and shipping address for the customer. |
| `sources` | `dict` | Yes | The customer's payment sources, if any. |
| `subscriptions` | `dict` | Yes | The customer's current subscriptions, if any. |
| `tax` | `dict` | Yes |  |
| `tax_exempt` | `str` | No | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `dict` | Yes | The customer's tax IDs. |
| `test_clock` | `Any` | No | ID of the test clock that this customer belongs to. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Customer().create({
    "id": "example_id",  # str
    "created": 1,  # int
    "livemode": True,  # bool
    "object": "example_object",  # str
    "sources": {},  # dict
    "subscriptions": {},  # dict
    "tax": {},  # dict
    "tax_ids": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Customer().list()
for customer in results:
    print(customer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Customer().load({"id": "customer_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Customer().remove({"id": "customer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerBalanceTransactionEntity

```python
customer_balance_transaction = client.CustomerBalanceTransaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The amount of the transaction. |
| `checkout_session` | `Any` | No | The ID of the checkout session (if any) that created the transaction. |
| `created` | `int` | Yes | Time at which the object was created. |
| `credit_note` | `Any` | No | The ID of the credit note (if any) related to the transaction. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `Any` | Yes | The ID of the customer the transaction belongs to. |
| `customer_account` | `str` | No | The ID of an Account representing a customer that the transaction belongs to. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `ending_balance` | `int` | Yes | The customer's `balance` after the transaction was applied. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `invoice` | `Any` | No | The ID of the invoice (if any) related to the transaction. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `type` | `str` | Yes | Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or… |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomerBalanceTransaction().create({
    "id": "example_id",  # str
    "amount": 1,  # int
    "created": 1,  # int
    "currency": "example_currency",  # str
    "customer": "example_customer",  # Any
    "ending_balance": 1,  # int
    "livemode": True,  # bool
    "object": "example_object",  # str
    "type": "example_type",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomerBalanceTransaction().load({"id": "customer_balance_transaction_id", "customer_id": "customer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerBalanceTransactionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerSessionEntity

```python
customer_session = client.CustomerSession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_secret` | `str` | Yes | The client secret of this Customer Session. |
| `components` | `dict` | Yes | Configuration for the components supported by this Customer Session. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `Any` | Yes | The Customer the Customer Session was created for. |
| `customer_account` | `str` | No | The Account that the Customer Session was created for. |
| `expires_at` | `int` | Yes | The timestamp at which this Customer Session will expire. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomerSession().create({
    "client_secret": "example_client_secret",  # str
    "components": {},  # dict
    "created": 1,  # int
    "customer": "example_customer",  # Any
    "expires_at": 1,  # int
    "livemode": True,  # bool
    "object": "example_object",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerSessionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DebitReversalEntity

```python
debit_reversal = client.DebitReversal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `financial_account` | `str` | No | The FinancialAccount to reverse funds from. |
| `hosted_regulatory_receipt_url` | `str` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `linked_flows` | `Any` | No | Other flows linked to a DebitReversal. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `str` | Yes | The rails used to reverse the funds. |
| `object` | `str` | Yes | String representing the object's type. |
| `received_debit` | `str` | Yes | The ReceivedDebit being reversed. |
| `status` | `str` | Yes | Status of the DebitReversal |
| `status_transitions` | `dict` | Yes |  |
| `transaction` | `Any` | No | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DebitReversal().create({
    "amount": 1,  # int
    "created": 1,  # int
    "currency": "example_currency",  # str
    "id": "example_id",  # str
    "livemode": True,  # bool
    "metadata": {},  # dict
    "network": "example_network",  # str
    "object": "example_object",  # str
    "received_debit": "example_received_debit",  # str
    "status": "example_status",  # str
    "status_transitions": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DebitReversal().list({"financial_account": "example"})
for debit_reversal in results:
    print(debit_reversal)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DebitReversal().load({"id": "debit_reversal_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DebitReversalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedAccountEntity

```python
deleted_account = client.DeletedAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedAccount().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedApplePayDomainEntity

```python
deleted_apple_pay_domain = client.DeletedApplePayDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedApplePayDomain().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedApplePayDomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedCouponEntity

```python
deleted_coupon = client.DeletedCoupon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedCoupon().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedCouponEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedExternalAccountEntity

```python
deleted_external_account = client.DeletedExternalAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedExternalAccount().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedExternalAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedInvoiceitemEntity

```python
deleted_invoiceitem = client.DeletedInvoiceitem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedInvoiceitem().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedInvoiceitemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedPersonEntity

```python
deleted_person = client.DeletedPerson()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedPerson().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedPersonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedPlanEntity

```python
deleted_plan = client.DeletedPlan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedPlan().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedPlanEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedProductFeatureEntity

```python
deleted_product_feature = client.DeletedProductFeature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedProductFeature().remove({"id": "id", "product_id": "product_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedProductFeatureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedSubscriptionItemEntity

```python
deleted_subscription_item = client.DeletedSubscriptionItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedSubscriptionItem().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedSubscriptionItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedWebhookEndpointEntity

```python
deleted_webhook_endpoint = client.DeletedWebhookEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedWebhookEndpoint().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedWebhookEndpointEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DiscountEntity

```python
discount = client.Discount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checkout_session` | `str` | No | The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. |
| `customer` | `Any` | No | The ID of the customer associated with this discount. |
| `customer_account` | `str` | No | The ID of the account representing the customer associated with this discount. |
| `end` | `int` | No | If the coupon has a duration of `repeating`, the date that this discount will end. |
| `id` | `str` | Yes | The ID of the discount object. |
| `invoice` | `str` | No | The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice. |
| `invoice_item` | `str` | No | The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item. |
| `object` | `str` | Yes | String representing the object's type. |
| `promotion_code` | `Any` | No | The promotion code applied to create this discount. |
| `source` | `dict` | Yes |  |
| `start` | `int` | Yes | Date that the coupon was applied. |
| `subscription` | `str` | No | The subscription that this coupon is applied to, if it is applied to a particular subscription. |
| `subscription_item` | `str` | No | The subscription item that this coupon is applied to, if it is applied to a particular subscription item. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Discount().load({"customer_id": "customer_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Discount().remove({"customer_id": "customer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DiscountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DisputeEntity

```python
dispute = client.Dispute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Disputed amount. |
| `balance_transactions` | `list` | Yes | List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute. |
| `charge` | `Any` | Yes | ID of the charge that's disputed. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `enhanced_eligibility_types` | `list` | Yes | List of eligibility types that are included in `enhanced_evidence`. |
| `evidence` | `dict` | Yes |  |
| `evidence_details` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `is_charge_refundable` | `bool` | Yes | If true, it's still possible to refund the disputed payment. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `loss_reason` | `str` | No | The enum that describes the dispute loss outcome. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `payment_intent` | `Any` | No | ID of the PaymentIntent that's disputed. |
| `payment_method_details` | `dict` | Yes |  |
| `reason` | `str` | Yes | Reason given by cardholder for dispute. |
| `status` | `str` | Yes | The current status of a dispute. |
| `transaction` | `Any` | Yes | The transaction being disputed. |
| `treasury` | `Any` | No | [Treasury](https://docs.stripe.com/api/treasury) details related to this dispute if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts) |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Dispute().create({
    "id": "example_id",  # str
    "amount": 1,  # int
    "balance_transactions": [],  # list
    "charge": "example_charge",  # Any
    "created": 1,  # int
    "currency": "example_currency",  # str
    "enhanced_eligibility_types": [],  # list
    "evidence": {},  # dict
    "evidence_details": {},  # dict
    "is_charge_refundable": True,  # bool
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "payment_method_details": {},  # dict
    "reason": "example_reason",  # str
    "status": "example_status",  # str
    "transaction": "example_transaction",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Dispute().list()
for dispute in results:
    print(dispute)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Dispute().load({"id": "dispute_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DisputeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainEntity

```python
domain = client.Domain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `domain_name` | `str` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Domain().list()
for domain in results:
    print(domain)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EarlyFraudWarningEntity

```python
early_fraud_warning = client.EarlyFraudWarning()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionable` | `bool` | Yes | An EFW is actionable if it has not received a dispute and has not been fully refunded. |
| `charge` | `Any` | Yes | ID of the charge this early fraud warning is for, optionally expanded. |
| `created` | `int` | Yes | Time at which the object was created. |
| `fraud_type` | `str` | Yes | The type of fraud labelled by the issuer. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `payment_intent` | `Any` | No | ID of the Payment Intent this early fraud warning is for, optionally expanded. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EarlyFraudWarning().list()
for early_fraud_warning in results:
    print(early_fraud_warning)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EarlyFraudWarning().load({"id": "early_fraud_warning_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EarlyFraudWarningEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EphemeralKeyEntity

```python
ephemeral_key = client.EphemeralKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `expires` | `int` | Yes | Time at which the key will expire. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `secret` | `str` | No | The key's secret. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EphemeralKey().create({
    "created": 1,  # int
    "expires": 1,  # int
    "id": "example_id",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.EphemeralKey().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EphemeralKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EventEntity

```python
event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `str` | No | The connected account that originates the event. |
| `api_version` | `str` | No | The Stripe API version used to render `data` when the event was created. |
| `context` | `str` | No | Authentication context needed to fetch the event or related object. |
| `created` | `int` | Yes | Time at which the object was created. |
| `data` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `pending_webhooks` | `int` | Yes | Number of webhooks that haven't been successfully delivered (for example, to return a 20x response) to the URLs you specify. |
| `request` | `Any` | No | Information on the API request that triggers the event. |
| `type` | `str` | Yes | Description of the event (for example, `invoice.created` or `charge.refunded`). |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Event().list()
for event in results:
    print(event)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Event().load({"id": "event_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ExchangeRateEntity

```python
exchange_rate = client.ExchangeRate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | Unique identifier for the object. |
| `object` | `str` | Yes | String representing the object's type. |
| `rates` | `dict` | Yes | Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ExchangeRate().list()
for exchange_rate in results:
    print(exchange_rate)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ExchangeRate().load({"id": "exchange_rate_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExchangeRateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ExternalAccountEntity

```python
external_account = client.ExternalAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | Yes | The list contains all external accounts that have been attached to the Stripe account. |
| `has_more` | `bool` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `str` | No |  |
| `object` | `str` | Yes | String representing the object's type. |
| `url` | `str` | Yes | The URL where this list can be accessed. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ExternalAccount().create({
    "id": "example_id",  # str
    "data": [],  # list
    "has_more": True,  # bool
    "object": "example_object",  # str
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ExternalAccount().list({"account_id": "example"})
for external_account in results:
    print(external_account)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ExternalAccount().load({"id": "external_account_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExternalAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FeatureEntity

```python
feature = client.Feature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `entitlement_feature` | `dict` | Yes | A feature represents a monetizable ability or functionality in your system. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `str` | Yes | A unique key you provide as your own system identifier. |
| `metadata` | `dict` | Yes | Set of key-value pairs that you can attach to an object. |
| `name` | `str` | Yes | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `str` | Yes | String representing the object's type. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Feature().create({
    "id": "example_id",  # str
    "active": True,  # bool
    "entitlement_feature": {},  # dict
    "livemode": True,  # bool
    "lookup_key": "example_lookup_key",  # str
    "metadata": {},  # dict
    "name": "example_name",  # str
    "object": "example_object",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Feature().list()
for feature in results:
    print(feature)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Feature().load({"id": "feature_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FeedbackOptionEntity

```python
feedback_option = client.FeedbackOption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deactivated_at` | `int` | No | The time the feedback option was deactivated, if any. |
| `description` | `str` | Yes | An arbitrary string attached to the object. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `status` | `str` | Yes | The feedback option's status. |
| `status_transitions` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FeedbackOption().create({
    "id": "example_id",  # str
    "description": "example_description",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "status": "example_status",  # str
    "status_transitions": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.FeedbackOption().list()
for feedback_option in results:
    print(feedback_option)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FeedbackOption().load({"id": "feedback_option_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeedbackOptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FileEntity

```python
file = client.File()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `data` | `list` | Yes | Details about each object. |
| `expires_at` | `int` | No | The file expires and isn't available at this time in epoch seconds. |
| `filename` | `str` | No | The suitable name for saving the file to a filesystem. |
| `has_more` | `bool` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `links` | `dict` | Yes | A list of [file links](https://docs.stripe.com/api#file_links) that point at this file. |
| `object` | `str` | Yes | String representing the object's type. |
| `purpose` | `str` | Yes | The [purpose](https://docs.stripe.com/file-upload#uploading-a-file) of the uploaded file. |
| `size` | `int` | Yes | The size of the file object in bytes. |
| `title` | `str` | No | A suitable title for the document. |
| `type` | `str` | No | The returned file type (for example, `csv`, `pdf`, `jpg`, or `png`). |
| `url` | `str` | Yes | The URL where this list can be accessed. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.File().create({
    "created": 1,  # int
    "data": [],  # list
    "has_more": True,  # bool
    "id": "example_id",  # str
    "links": {},  # dict
    "object": "example_object",  # str
    "purpose": "example_purpose",  # str
    "size": 1,  # int
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.File().list()
for file in results:
    print(file)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.File().load({"id": "file_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FileLinkEntity

```python
file_link = client.FileLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `expired` | `bool` | Yes | Returns if the link is already expired. |
| `expires_at` | `int` | No | Time that the link expires. |
| `file` | `Any` | Yes | The file object this link points to. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `url` | `str` | No | The publicly accessible URL to download the file. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FileLink().create({
    "id": "example_id",  # str
    "created": 1,  # int
    "expired": True,  # bool
    "file": "example_file",  # Any
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.FileLink().list()
for file_link in results:
    print(file_link)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FileLink().load({"id": "file_link_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FinancialAccountEntity

```python
financial_account = client.FinancialAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_features` | `list` | No | The array of paths to active Features in the Features hash. |
| `balance` | `dict` | Yes | Balance information for the FinancialAccount |
| `country` | `str` | Yes | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | `int` | Yes | Time at which the object was created. |
| `features` | `dict` | Yes | Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`. |
| `financial_addresses` | `list` | Yes | The set of credentials that resolve to a FinancialAccount. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `is_default` | `bool` | No |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `str` | No | The nickname for the FinancialAccount. |
| `object` | `str` | Yes | String representing the object's type. |
| `pending_features` | `list` | No | The array of paths to pending Features in the Features hash. |
| `platform_restrictions` | `Any` | No | The set of functionalities that the platform can restrict on the FinancialAccount. |
| `restricted_features` | `list` | No | The array of paths to restricted Features in the Features hash. |
| `status` | `str` | Yes | Status of this FinancialAccount. |
| `status_details` | `dict` | Yes |  |
| `supported_currencies` | `list` | Yes | The currencies the FinancialAccount can hold a balance in. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FinancialAccount().create({
    "id": "example_id",  # str
    "balance": {},  # dict
    "country": "example_country",  # str
    "created": 1,  # int
    "features": {},  # dict
    "financial_addresses": [],  # list
    "livemode": True,  # bool
    "object": "example_object",  # str
    "status": "example_status",  # str
    "status_details": {},  # dict
    "supported_currencies": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.FinancialAccount().list()
for financial_account in results:
    print(financial_account)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FinancialAccount().load({"id": "financial_account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FinancialAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FinancialAccountFeatureEntity

```python
financial_account_feature = client.FinancialAccountFeature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_issuing` | `dict` | Yes | Toggle settings for enabling/disabling a feature |
| `deposit_insurance` | `dict` | Yes | Toggle settings for enabling/disabling a feature |
| `financial_addresses` | `dict` | No | Settings related to Financial Addresses features on a Financial Account |
| `id` | `str` | No |  |
| `inbound_transfers` | `dict` | No | InboundTransfers contains inbound transfers features for a FinancialAccount. |
| `intra_stripe_flows` | `dict` | Yes | Toggle settings for enabling/disabling a feature |
| `object` | `str` | Yes | String representing the object's type. |
| `outbound_payments` | `dict` | No | Settings related to Outbound Payments features on a Financial Account |
| `outbound_transfers` | `dict` | No | OutboundTransfers contains outbound transfers features for a FinancialAccount. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FinancialAccountFeature().create({
    "id": "example_id",  # str
    "card_issuing": {},  # dict
    "deposit_insurance": {},  # dict
    "intra_stripe_flows": {},  # dict
    "object": "example_object",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FinancialAccountFeature().load({"id": "financial_account_feature_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FinancialAccountFeatureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FundCashBalanceEntity

```python
fund_cash_balance = client.FundCashBalance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjusted_for_overdraft` | `dict` | Yes |  |
| `applied_to_payment` | `dict` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `Any` | Yes | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `str` | No | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `int` | Yes | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `net_amount` | `int` | Yes | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `str` | Yes | String representing the object's type. |
| `refunded_from_payment` | `dict` | Yes |  |
| `transferred_to_balance` | `dict` | Yes |  |
| `type` | `str` | Yes | The type of the cash balance transaction. |
| `unapplied_from_payment` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FundCashBalance().create({
    "customer_id": "example_customer_id",  # str
    "adjusted_for_overdraft": {},  # dict
    "applied_to_payment": {},  # dict
    "created": 1,  # int
    "currency": "example_currency",  # str
    "customer": "example_customer",  # Any
    "ending_balance": 1,  # int
    "funded": {},  # dict
    "id": "example_id",  # str
    "livemode": True,  # bool
    "net_amount": 1,  # int
    "object": "example_object",  # str
    "refunded_from_payment": {},  # dict
    "transferred_to_balance": {},  # dict
    "type": "example_type",  # str
    "unapplied_from_payment": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FundCashBalanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FundingInstructionEntity

```python
funding_instruction = client.FundingInstruction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `str` | Yes | The country of the bank account to fund |
| `financial_addresses` | `list` | Yes | A list of financial addresses that can be used to fund a particular balance |
| `type` | `str` | Yes | The bank_transfer type |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FundingInstruction().create({
    "customer_id": "example_customer_id",  # str
    "country": "example_country",  # str
    "financial_addresses": [],  # list
    "type": "example_type",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FundingInstructionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HistoryEntity

```python
history = client.History()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Gross amount of this transaction (in cents (or local equivalent)). |
| `available_on` | `int` | Yes | The date that the transaction's net funds become available in the Stripe balance. |
| `balance_type` | `str` | Yes | The balance that this transaction impacts. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `exchange_rate` | `float` | No | If applicable, this transaction uses an exchange rate. |
| `fee` | `int` | Yes | Fees (in cents (or local equivalent)) paid for this transaction. |
| `fee_details` | `list` | Yes | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `net` | `int` | Yes | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `str` | Yes | String representing the object's type. |
| `reporting_category` | `str` | Yes | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `Any` | No | This transaction relates to the Stripe object. |
| `status` | `str` | Yes | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `str` | Yes | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.History().list()
for history in results:
    print(history)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HistoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InboundTransferEntity

```python
inbound_transfer = client.InboundTransfer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `cancelable` | `bool` | Yes | Returns `true` if the InboundTransfer is able to be canceled. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `failure_details` | `Any` | No | Details about this InboundTransfer's failure. |
| `financial_account` | `str` | Yes | The FinancialAccount that received the funds. |
| `hosted_regulatory_receipt_url` | `str` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `linked_flows` | `dict` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `origin_payment_method` | `str` | No | The origin payment method to be debited for an InboundTransfer. |
| `origin_payment_method_details` | `Any` | No | Details about the PaymentMethod for an InboundTransfer. |
| `returned` | `bool` | No | Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state. |
| `statement_descriptor` | `str` | Yes | Statement descriptor shown when funds are debited from the source. |
| `status` | `str` | Yes | Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. |
| `status_transitions` | `dict` | Yes |  |
| `transaction` | `Any` | No | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.InboundTransfer().create({
    "amount": 1,  # int
    "cancelable": True,  # bool
    "created": 1,  # int
    "currency": "example_currency",  # str
    "financial_account": "example_financial_account",  # str
    "id": "example_id",  # str
    "linked_flows": {},  # dict
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "statement_descriptor": "example_statement_descriptor",  # str
    "status": "example_status",  # str
    "status_transitions": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.InboundTransfer().list({"financial_account": "example"})
for inbound_transfer in results:
    print(inbound_transfer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.InboundTransfer().load({"id": "inbound_transfer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InboundTransferEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InstallEntity

```python
install = client.Install()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `str` | Yes | The ID of the account that the app install belongs to. |
| `app` | `str` | Yes | The ID of the app installed. |
| `approval_required` | `bool` | Yes | Whether the installer must authorize pending permissions, content security policy entries, or endpoints. |
| `auth_code` | `str` | No | The authorization code for an oauth app install. |
| `channel` | `str` | Yes | The distribution channel associated with the app install. |
| `content_security_policy_granted` | `dict` | Yes |  |
| `content_security_policy_pending` | `dict` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `created_by` | `str` | No | The ID of the embedding platform that created the install, if applicable. |
| `endpoints_granted` | `list` | Yes | The endpoint URLs authorized by the installer. |
| `endpoints_pending` | `list` | Yes | The endpoint URLs requested by the latest app version that the installer has not authorized. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `permissions_granted` | `list` | Yes | The permissions authorized by the installer. |
| `permissions_pending` | `list` | Yes | The permissions requested by the latest app version that the installer has not authorized. |
| `status` | `str` | Yes | The status of the app install. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Install().create({
    "id": "example_id",  # str
    "account": "example_account",  # str
    "app": "example_app",  # str
    "approval_required": True,  # bool
    "channel": "example_channel",  # str
    "content_security_policy_granted": {},  # dict
    "content_security_policy_pending": {},  # dict
    "created": 1,  # int
    "endpoints_granted": [],  # list
    "endpoints_pending": [],  # list
    "livemode": True,  # bool
    "object": "example_object",  # str
    "permissions_granted": [],  # list
    "permissions_pending": [],  # list
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Install().list()
for install in results:
    print(install)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Install().load({"id": "install_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InstallEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InvoiceEntity

```python
invoice = client.Invoice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_country` | `str` | No | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `str` | No | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `list` | No | The account tax IDs associated with the invoice. |
| `amount_due` | `int` | Yes | Final amount due at this time for this invoice. |
| `amount_overpaid` | `int` | Yes | Amount that was overpaid on the invoice. |
| `amount_paid` | `int` | Yes | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | `int` | Yes | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_remaining` | `int` | Yes | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | `int` | Yes | This is the sum of all the shipping amounts. |
| `application` | `Any` | No | ID of the Connect Application that created the invoice. |
| `attempt_count` | `int` | Yes | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | `bool` | Yes | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | `bool` | Yes | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_tax` | `dict` | Yes |  |
| `automatically_finalizes_at` | `int` | No | The time when this invoice is currently scheduled to be automatically finalized. |
| `billing_reason` | `str` | No | Indicates the reason why the invoice was created. |
| `collection_method` | `str` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_secret` | `Any` | No | The confirmation secret associated with this invoice. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `list` | No | Custom fields displayed on the invoice. |
| `customer` | `Any` | Yes | The ID of the customer to bill. |
| `customer_account` | `str` | No | The ID of the account representing the customer to bill. |
| `customer_address` | `Any` | No | The customer's address. |
| `customer_email` | `str` | No | The customer's email. |
| `customer_name` | `str` | No | The customer's name. |
| `customer_phone` | `str` | No | The customer's phone number. |
| `customer_shipping` | `Any` | No | The customer's shipping information. |
| `customer_tax_exempt` | `str` | No | The customer's tax exempt status. |
| `customer_tax_ids` | `list` | No | The customer's tax IDs. |
| `default_payment_method` | `Any` | No | ID of the default payment method for the invoice. |
| `default_source` | `Any` | No | ID of the default payment source for the invoice. |
| `default_tax_rates` | `list` | Yes | The tax rates applied to this invoice, if any. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `discounts` | `list` | Yes | The discounts applied to the invoice. |
| `due_date` | `int` | No | The date on which payment for this invoice is due. |
| `effective_at` | `int` | No | The date when this invoice is in effect. |
| `ending_balance` | `int` | No | Ending customer balance after the invoice is finalized. |
| `footer` | `str` | No | Footer displayed on the invoice. |
| `from_invoice` | `Any` | No | Details of the invoice that was cloned. |
| `hosted_invoice_url` | `str` | No | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `invoice_pdf` | `str` | No | The link to download the PDF for the invoice. |
| `issuer` | `dict` | Yes |  |
| `last_finalization_error` | `Any` | No | The error encountered during the previous attempt to finalize the invoice. |
| `latest_revision` | `Any` | No | The ID of the most recent non-draft revision of this invoice |
| `lines` | `dict` | Yes | The individual line items that make up the invoice. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_payment_attempt` | `int` | No | The time at which payment will next be attempted. |
| `number` | `str` | No | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | `str` | Yes | String representing the object's type. |
| `on_behalf_of` | `Any` | No | The account (if any) for which the funds of the invoice payment are intended. |
| `parent` | `Any` | No | The parent that generated this invoice |
| `payment_settings` | `dict` | Yes |  |
| `payments` | `dict` | Yes | Payments for this invoice. |
| `period_end` | `int` | Yes | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | `int` | Yes | The earliest timestamp at which invoice items can be associated with this invoice. |
| `post_payment_credit_notes_amount` | `int` | Yes | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | `int` | Yes | Total amount of all pre-payment credit notes issued for this invoice. |
| `receipt_number` | `str` | No | This is the transaction number that appears on email receipts sent for this invoice. |
| `rendering` | `Any` | No | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `shipping_cost` | `Any` | No | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | `Any` | No | Shipping details for the invoice. |
| `starting_balance` | `int` | Yes | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | `str` | No | Extra information about an invoice for the customer's credit card statement. |
| `status` | `str` | No | The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. |
| `status_details` | `dict` | No |  |
| `status_transitions` | `dict` | Yes |  |
| `subtotal` | `int` | Yes | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `test_clock` | `Any` | No | ID of the test clock this invoice belongs to. |
| `threshold_reason` | `dict` | Yes |  |
| `total` | `int` | Yes | Total after discounts and taxes. |
| `total_discount_amounts` | `list` | No | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `list` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `list` | No | The aggregate tax information of all line items. |
| `webhooks_delivered_at` | `int` | No | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Invoice().create({
    "id": "example_id",  # str
    "amount_due": 1,  # int
    "amount_overpaid": 1,  # int
    "amount_paid": 1,  # int
    "amount_paid_off_stripe": 1,  # int
    "amount_remaining": 1,  # int
    "amount_shipping": 1,  # int
    "attempt_count": 1,  # int
    "attempted": True,  # bool
    "auto_advance": True,  # bool
    "automatic_tax": {},  # dict
    "collection_method": "example_collection_method",  # str
    "created": 1,  # int
    "currency": "example_currency",  # str
    "customer": "example_customer",  # Any
    "default_tax_rates": [],  # list
    "discounts": [],  # list
    "issuer": {},  # dict
    "lines": {},  # dict
    "livemode": True,  # bool
    "object": "example_object",  # str
    "payment_settings": {},  # dict
    "payments": {},  # dict
    "period_end": 1,  # int
    "period_start": 1,  # int
    "post_payment_credit_notes_amount": 1,  # int
    "pre_payment_credit_notes_amount": 1,  # int
    "starting_balance": 1,  # int
    "status_transitions": {},  # dict
    "subtotal": 1,  # int
    "threshold_reason": {},  # dict
    "total": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Invoice().list()
for invoice in results:
    print(invoice)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Invoice().load({"id": "invoice_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Invoice().remove({"id": "invoice_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvoiceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InvoicePaymentEntity

```python
invoice_payment = client.InvoicePayment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_paid` | `int` | No | Amount that was actually paid for this invoice, in cents (or local equivalent). |
| `amount_requested` | `int` | Yes | Amount intended to be paid toward this invoice, in cents (or local equivalent) |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `invoice` | `Any` | Yes | The invoice that was paid. |
| `is_default` | `bool` | Yes | Stripe automatically creates a default InvoicePayment when the invoice is finalized, and keeps it synchronized with the invoice’s `amount_remaining`. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `payment` | `dict` | Yes |  |
| `status` | `str` | Yes | The status of the payment, one of `open`, `paid`, or `canceled`. |
| `status_transitions` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.InvoicePayment().list()
for invoice_payment in results:
    print(invoice_payment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.InvoicePayment().load({"id": "invoice_payment_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvoicePaymentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InvoiceRenderingTemplateEntity

```python
invoice_rendering_template = client.InvoiceRenderingTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `str` | No | A brief description of the template, hidden from customers |
| `object` | `str` | Yes | String representing the object's type. |
| `status` | `str` | Yes | The status of the template, one of `active` or `archived`. |
| `version` | `int` | Yes | Version of this template; version increases by one when an update on the template changes any field that controls invoice rendering |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.InvoiceRenderingTemplate().create({
    "template": "example_template",  # str
    "created": 1,  # int
    "id": "example_id",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "status": "example_status",  # str
    "version": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.InvoiceRenderingTemplate().list()
for invoice_rendering_template in results:
    print(invoice_rendering_template)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.InvoiceRenderingTemplate().load({"id": "invoice_rendering_template_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvoiceRenderingTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InvoiceitemEntity

```python
invoiceitem = client.Invoiceitem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in the `currency` specified) of the invoice item. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `Any` | Yes | The ID of the customer to bill for this invoice item. |
| `customer_account` | `str` | No | The ID of the account to bill for this invoice item. |
| `date` | `int` | Yes | Time at which the object was created. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `discountable` | `bool` | Yes | If true, discounts will apply to this invoice item. |
| `discounts` | `list` | No | The discounts which apply to the invoice item. |
| `frozen_fields` | `list` | No | Array of field names that can't be modified. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `invoice` | `Any` | No | The ID of the invoice this invoice item belongs to. |
| `invoicing_rules` | `list` | No | The rules that control when this invoice item is eligible for invoicing. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net_amount` | `int` | No | The amount after discounts, but before credits and taxes. |
| `object` | `str` | Yes | String representing the object's type. |
| `parent` | `Any` | No | The parent that generated this invoice item. |
| `period` | `dict` | Yes |  |
| `pricing` | `Any` | No | The pricing information of the invoice item. |
| `proration` | `bool` | Yes | Whether the invoice item was created automatically as a proration adjustment when the customer switched plans. |
| `proration_details` | `dict` | Yes |  |
| `quantity` | `int` | Yes | Quantity of units for the invoice item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `str` | Yes | Non-negative decimal with at most 12 decimal places. |
| `tax_rates` | `list` | No | The tax rates which apply to the invoice item. |
| `test_clock` | `Any` | No | ID of the test clock this invoice item belongs to. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Invoiceitem().create({
    "id": "example_id",  # str
    "amount": 1,  # int
    "currency": "example_currency",  # str
    "customer": "example_customer",  # Any
    "date": 1,  # int
    "discountable": True,  # bool
    "livemode": True,  # bool
    "object": "example_object",  # str
    "period": {},  # dict
    "proration": True,  # bool
    "proration_details": {},  # dict
    "quantity": 1,  # int
    "quantity_decimal": "example_quantity_decimal",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Invoiceitem().list()
for invoiceitem in results:
    print(invoiceitem)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Invoiceitem().load({"id": "invoiceitem_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvoiceitemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LineEntity

```python
line = client.Line()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The amount, in cents (or local equivalent). |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `discount_amount` | `int` | Yes | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `list` | No | The amount of discount calculated per discount for this line item. |
| `discountable` | `bool` | Yes | If true, discounts will apply to this line item. |
| `discounts` | `list` | Yes | The discounts applied to the invoice line item. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `invoice` | `str` | No | The ID of the invoice that contains this line item. |
| `invoice_line_item` | `str` | No | ID of the invoice line item being credited |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `parent` | `Any` | No | The parent that generated this line item. |
| `period` | `dict` | Yes |  |
| `pretax_credit_amounts` | `list` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item. |
| `pricing` | `Any` | No | The pricing information of the line item. |
| `quantity` | `int` | No | Quantity of units for the invoice line item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `str` | No | Non-negative decimal with at most 12 decimal places. |
| `subscription` | `Any` | No |  |
| `subtotal` | `int` | Yes | The subtotal of the line item, in cents (or local equivalent), before any discounts or taxes. |
| `tax_rates` | `list` | Yes | The tax rates which apply to the line item. |
| `taxes` | `list` | No | The tax information of the line item. |
| `type` | `str` | Yes | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | `int` | No | The cost of each unit of product being credited. |
| `unit_amount_decimal` | `str` | No | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Line().create({
    "id": "example_id",  # str
    "invoice_id": "example_invoice_id",  # str
    "amount": 1,  # int
    "currency": "example_currency",  # str
    "discount_amount": 1,  # int
    "discountable": True,  # bool
    "discounts": [],  # list
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "period": {},  # dict
    "subtotal": 1,  # int
    "tax_rates": [],  # list
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Line().list({"invoice": "example"})
for line in results:
    print(line)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LineEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LineItemEntity

```python
line_item = client.LineItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjustable_quantity` | `Any` | No |  |
| `amount` | `int` | Yes | The line item amount in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_discount` | `int` | Yes | Total discount amount applied. |
| `amount_subtotal` | `int` | Yes | Total before any discounts or taxes are applied. |
| `amount_tax` | `int` | Yes | The amount of tax calculated for this line item, in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `amount_total` | `int` | Yes | Total after discounts and taxes. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `discounts` | `list` | No | The discounts applied to the line item. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `performance_location` | `str` | No | Indicates the line item represents a performance where the venue location might determine the tax, not the customer address. |
| `price` | `float` | No | The price used to generate the line item. |
| `product` | `str` | No | The ID of an existing [Product](https://docs.stripe.com/api/products/object). |
| `quantity` | `int` | Yes | The number of units of the item being purchased. |
| `reference` | `str` | Yes | A custom identifier for this line item. |
| `reversal` | `Any` | No | If `type=reversal`, contains information about what was reversed. |
| `tax_behavior` | `str` | Yes | Specifies whether the `amount` includes taxes. |
| `tax_breakdown` | `list` | No | Detailed account of taxes relevant to this line item. |
| `tax_code` | `str` | Yes | The [tax code](https://docs.stripe.com/tax/tax-categories) ID used for this resource. |
| `taxes` | `list` | No | The taxes applied to the line item. |
| `type` | `str` | Yes | If `reversal`, this line item reverses an earlier transaction. |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LineItem().list({"payment_link_id": "example"})
for line_item in results:
    print(line_item)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LineItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LinkedAccountEntity

```python
linked_account = client.LinkedAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `Any` | No | The account holder that this account belongs to. |
| `account_numbers` | `list` | No | Details about the account numbers. |
| `balance` | `Any` | No | The most recent information about the account's balance. |
| `balance_refresh` | `Any` | No | The state of the most recent attempt to refresh the account balance. |
| `category` | `str` | Yes | The type of the account. |
| `created` | `int` | Yes | Time at which the object was created. |
| `display_name` | `str` | No | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `institution_name` | `str` | Yes | The name of the institution that holds this account. |
| `last4` | `str` | No | The last 4 digits of the account number. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `ownership` | `Any` | No | The most recent information about the account's owners. |
| `ownership_refresh` | `Any` | No | The state of the most recent attempt to refresh the account owners. |
| `permissions` | `list` | No | The list of permissions granted by this account. |
| `status` | `str` | Yes | The status of the link to the account. |
| `status_details` | `dict` | No |  |
| `subcategory` | `str` | Yes | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `list` | No | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `list` | Yes | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `transaction_refresh` | `Any` | No | The state of the most recent attempt to refresh the account transactions. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LinkedAccount().list()
for linked_account in results:
    print(linked_account)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkedAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LinkedAccountOwnerEntity

```python
linked_account_owner = client.LinkedAccountOwner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | No | The email address of the owner. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `name` | `str` | Yes | The full name of the owner. |
| `object` | `str` | Yes | String representing the object's type. |
| `ownership` | `str` | Yes | The ownership object that this owner belongs to. |
| `phone` | `str` | No | The raw phone number of the owner. |
| `raw_address` | `str` | No | The raw physical address of the owner. |
| `refreshed_at` | `int` | No | The timestamp of the refresh that updated this owner. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LinkedAccountOwner().list({"account": "example", "ownership": "example"})
for linked_account_owner in results:
    print(linked_account_owner)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkedAccountOwnerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LocationEntity

```python
location = client.Location()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `dict` | Yes |  |
| `address_kana` | `dict` | No |  |
| `address_kanji` | `dict` | No |  |
| `city` | `str` | No | City, district, suburb, town, or village. |
| `configuration_overrides` | `str` | No | The ID of a configuration that will be used to customize all readers in this location. |
| `country` | `str` | No | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `description` | `str` | No | A descriptive text providing additional context about the tax location. |
| `display_name` | `str` | Yes | The display name of the location. |
| `display_name_kana` | `str` | No | The Kana variation of the display name of the location. |
| `display_name_kanji` | `str` | No | The Kanji variation of the display name of the location. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `line1` | `str` | No | Address line 1, such as the street, PO Box, or company name. |
| `line2` | `str` | No | Address line 2, such as the apartment, suite, unit, or building. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `phone` | `str` | No | The phone number of the location. |
| `postal_code` | `str` | No | ZIP or postal code. |
| `state` | `str` | No | State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)). |
| `type` | `str` | Yes | The type of tax location to be defined. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Location().create({
    "id": "example_id",  # str
    "address": {},  # dict
    "display_name": "example_display_name",  # str
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Location().list({"type": "example"})
for location in results:
    print(location)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Location().load({"id": "location_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Location().remove({"id": "location_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LocationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LoginLinkEntity

```python
login_link = client.LoginLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `object` | `str` | Yes | String representing the object's type. |
| `url` | `str` | Yes | The URL for the login link. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LoginLink().create({
    "account_id": "example_account_id",  # str
    "created": 1,  # int
    "object": "example_object",  # str
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LoginLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MandateEntity

```python
mandate = client.Mandate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_acceptance` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `multi_use` | `dict` | No |  |
| `object` | `str` | Yes | String representing the object's type. |
| `on_behalf_of` | `str` | No | The account (if any) that the mandate is intended for. |
| `payment_method` | `Any` | Yes | ID of the payment method associated with this mandate. |
| `payment_method_details` | `dict` | Yes |  |
| `single_use` | `dict` | Yes |  |
| `status` | `str` | Yes | The mandate status indicates whether or not you can use it to initiate a payment. |
| `type` | `str` | Yes | The type of the mandate. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Mandate().load({"id": "mandate_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MandateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MeterEntity

```python
meter = client.Meter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer_mapping` | `dict` | Yes |  |
| `default_aggregation` | `dict` | Yes |  |
| `display_name` | `str` | Yes | The meter's name. |
| `event_name` | `str` | Yes | The name of the meter event to record usage for. |
| `event_time_window` | `str` | No | The time window which meter events have been pre-aggregated for, if any. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `status` | `str` | Yes | The meter's status. |
| `status_transitions` | `dict` | Yes |  |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `value_settings` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Meter().create({
    "id": "example_id",  # str
    "created": 1,  # int
    "customer_mapping": {},  # dict
    "default_aggregation": {},  # dict
    "display_name": "example_display_name",  # str
    "event_name": "example_event_name",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "status": "example_status",  # str
    "status_transitions": {},  # dict
    "updated": 1,  # int
    "value_settings": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Meter().list()
for meter in results:
    print(meter)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Meter().load({"id": "meter_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MeterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MeterEventEntity

```python
meter_event = client.MeterEvent()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.MeterEvent().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MeterEventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MeterEventAdjustmentEntity

```python
meter_event_adjustment = client.MeterEventAdjustment()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.MeterEventAdjustment().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MeterEventAdjustmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MeterEventSummaryEntity

```python
meter_event_summary = client.MeterEventSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregated_value` | `float` | Yes | Aggregated value of all the events within `start_time` (inclusive) and `end_time` (inclusive). |
| `end_time` | `int` | Yes | End timestamp for this event summary (exclusive). |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `meter` | `str` | Yes | The meter associated with this event summary. |
| `object` | `str` | Yes | String representing the object's type. |
| `start_time` | `int` | Yes | Start timestamp for this event summary (inclusive). |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MeterEventSummary().list({"id": "example", "customer": "example", "end_time": 1, "start_time": 1})
for meter_event_summary in results:
    print(meter_event_summary)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MeterEventSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OnboardingLinkEntity

```python
onboarding_link = client.OnboardingLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apple_terms_and_conditions` | `Any` | No | The options associated with the Apple Terms and Conditions link type. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OnboardingLink().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OnboardingLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrderEntity

```python
order = client.Order()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_fees` | `int` | Yes | Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit. |
| `amount_subtotal` | `int` | Yes | Total amount of the carbon removal in the currency's smallest unit. |
| `amount_total` | `int` | Yes | Total amount of the order including fees in the currency's smallest unit. |
| `beneficiary` | `dict` | Yes |  |
| `canceled_at` | `int` | No | Time at which the order was canceled. |
| `cancellation_reason` | `str` | No | Reason for the cancellation of this order. |
| `certificate` | `str` | No | For delivered orders, a URL to a delivery certificate for the order. |
| `confirmed_at` | `int` | No | Time at which the order was confirmed. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order. |
| `delayed_at` | `int` | No | Time at which the order's expected_delivery_year was delayed. |
| `delivered_at` | `int` | No | Time at which the order was delivered. |
| `delivery_details` | `list` | Yes | Details about the delivery of carbon removal for this order. |
| `expected_delivery_year` | `int` | Yes | The year this order is expected to be delivered. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons` | `str` | Yes | Quantity of carbon removal that is included in this order. |
| `object` | `str` | Yes | String representing the object's type. |
| `product` | `Any` | Yes | Unique ID for the Climate `Product` this order is purchasing. |
| `product_substituted_at` | `int` | No | Time at which the order's product was substituted for a different product. |
| `status` | `str` | Yes | The current status of this order. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Order().create({
    "id": "example_id",  # str
    "amount_fees": 1,  # int
    "amount_subtotal": 1,  # int
    "amount_total": 1,  # int
    "beneficiary": {},  # dict
    "created": 1,  # int
    "currency": "example_currency",  # str
    "delivery_details": [],  # list
    "expected_delivery_year": 1,  # int
    "livemode": True,  # bool
    "metadata": {},  # dict
    "metric_tons": "example_metric_tons",  # str
    "object": "example_object",  # str
    "product": "example_product",  # Any
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Order().list()
for order in results:
    print(order)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Order().load({"id": "order_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OutboundPaymentEntity

```python
outbound_payment = client.OutboundPayment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `cancelable` | `bool` | Yes | Returns `true` if the object can be canceled, and `false` otherwise. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `str` | No | ID of the [customer](https://docs.stripe.com/api/customers) to whom an OutboundPayment is sent. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `destination_payment_method` | `str` | No | The PaymentMethod via which an OutboundPayment is sent. |
| `destination_payment_method_details` | `Any` | No | Details about the PaymentMethod for an OutboundPayment. |
| `end_user_details` | `Any` | No | Details about the end user. |
| `expected_arrival_date` | `int` | Yes | The date when funds are expected to arrive in the destination account. |
| `financial_account` | `str` | Yes | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `str` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `returned_details` | `Any` | No | Details about a returned OutboundPayment. |
| `statement_descriptor` | `str` | Yes | The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer). |
| `status` | `str` | Yes | Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. |
| `status_transitions` | `dict` | Yes |  |
| `tracking_details` | `Any` | No | Details about network-specific tracking information if available. |
| `transaction` | `Any` | Yes | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OutboundPayment().create({
    "id": "example_id",  # str
    "amount": 1,  # int
    "cancelable": True,  # bool
    "created": 1,  # int
    "currency": "example_currency",  # str
    "expected_arrival_date": 1,  # int
    "financial_account": "example_financial_account",  # str
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "statement_descriptor": "example_statement_descriptor",  # str
    "status": "example_status",  # str
    "status_transitions": {},  # dict
    "transaction": "example_transaction",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OutboundPayment().list({"financial_account": "example"})
for outbound_payment in results:
    print(outbound_payment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OutboundPayment().load({"id": "outbound_payment_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OutboundPaymentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OutboundTransferEntity

```python
outbound_transfer = client.OutboundTransfer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `cancelable` | `bool` | Yes | Returns `true` if the object can be canceled, and `false` otherwise. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `destination_payment_method` | `str` | No | The PaymentMethod used as the payment instrument for an OutboundTransfer. |
| `destination_payment_method_details` | `dict` | Yes |  |
| `expected_arrival_date` | `int` | Yes | The date when funds are expected to arrive in the destination account. |
| `financial_account` | `str` | Yes | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `str` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `returned_details` | `Any` | No | Details about a returned OutboundTransfer. |
| `statement_descriptor` | `str` | Yes | Information about the OutboundTransfer to be sent to the recipient account. |
| `status` | `str` | Yes | Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. |
| `status_transitions` | `dict` | Yes |  |
| `tracking_details` | `Any` | No | Details about network-specific tracking information if available. |
| `transaction` | `Any` | Yes | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OutboundTransfer().create({
    "id": "example_id",  # str
    "amount": 1,  # int
    "cancelable": True,  # bool
    "created": 1,  # int
    "currency": "example_currency",  # str
    "destination_payment_method_details": {},  # dict
    "expected_arrival_date": 1,  # int
    "financial_account": "example_financial_account",  # str
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "statement_descriptor": "example_statement_descriptor",  # str
    "status": "example_status",  # str
    "status_transitions": {},  # dict
    "transaction": "example_transaction",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OutboundTransfer().list({"financial_account": "example"})
for outbound_transfer in results:
    print(outbound_transfer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OutboundTransfer().load({"id": "outbound_transfer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OutboundTransferEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentAttemptRecordEntity

```python
payment_attempt_record = client.PaymentAttemptRecord()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `str` | No | ID of the Connect application that created the PaymentAttemptRecord. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer_details` | `Any` | No | Customer information for this payment. |
| `customer_presence` | `str` | No | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `payment_method_details` | `Any` | No | Information about the Payment Method debited for this payment. |
| `payment_record` | `str` | No | ID of the Payment Record this Payment Attempt Record belongs to. |
| `processor_details` | `dict` | Yes | Processor information associated with this payment. |
| `reported_by` | `str` | Yes | Indicates who reported the payment. |
| `shipping_details` | `Any` | No | Shipping information for this payment. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentAttemptRecord().list({"payment_record": "example"})
for payment_attempt_record in results:
    print(payment_attempt_record)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PaymentAttemptRecord().load({"id": "payment_attempt_record_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentAttemptRecordEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentEvaluationEntity

```python
payment_evaluation = client.PaymentEvaluation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_device_metadata_details` | `dict` | Yes | Client device metadata attached to this payment evaluation. |
| `created_at` | `int` | Yes | Time at which the object was created. |
| `customer_details` | `dict` | No | Customer details attached to this payment evaluation. |
| `events` | `list` | Yes | Event information associated with the payment evaluation, such as refunds, dispute, early fraud warnings, or user interventions. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `outcome` | `Any` | No | Indicates the final outcome for the payment evaluation. |
| `payment_details` | `dict` | Yes | Payment details attached to this payment evaluation. |
| `recommended_action` | `str` | Yes | Recommended action based on the score of the `fraudulent_payment` signal. |
| `signals` | `dict` | Yes | Collection of signals for this payment evaluation. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PaymentEvaluation().create({
    "client_device_metadata_details": {},  # dict
    "created_at": 1,  # int
    "events": [],  # list
    "id": "example_id",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "payment_details": {},  # dict
    "recommended_action": "example_recommended_action",  # str
    "signals": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentEvaluationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentIntentEntity

```python
payment_intent = client.PaymentIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_payment_method_types` | `list` | No | The list of payment method types allowed for use with this payment. |
| `amount` | `int` | No | Amount intended to be collected by this PaymentIntent. |
| `amount_capturable` | `int` | No | Amount that can be captured from this PaymentIntent. |
| `amount_details` | `Any` | No |  |
| `amount_received` | `int` | No | Amount that this PaymentIntent collects. |
| `application` | `Any` | No | ID of the Connect application that created the PaymentIntent. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `automatic_payment_methods` | `Any` | No | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `canceled_at` | `int` | No | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_reason` | `str` | No | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | `str` | No | Controls when the funds will be captured from the customer's account. |
| `client_secret` | `str` | No | The client secret of this PaymentIntent. |
| `confirmation_method` | `str` | No | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `Any` | No | ID of the Customer this PaymentIntent belongs to, if one exists. |
| `customer_account` | `str` | No | ID of the Account representing the customer that this PaymentIntent belongs to, if one exists. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | `list` | No | The list of payment method types to exclude from use with this payment. |
| `hooks` | `dict` | No |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `last_payment_error` | `Any` | No | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `Any` | No | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `Any` | No | Settings for Managed Payments. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `Any` | No | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `object` | `str` | Yes | String representing the object's type. |
| `on_behalf_of` | `Any` | No | You can specify the settlement merchant as the connected account using the `on_behalf_of` attribute on the charge. |
| `payment_details` | `dict` | No |  |
| `payment_method` | `Any` | No | ID of the payment method used in this PaymentIntent. |
| `payment_method_configuration_details` | `Any` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_options` | `Any` | No | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `list` | No | The list of payment method types (e.g. |
| `payment_record` | `Any` | No | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `presentment_details` | `dict` | Yes |  |
| `processing` | `Any` | No | If present, this property tells you about the processing state of the payment. |
| `receipt_email` | `str` | No | Email address that the receipt for the resulting payment will be sent to. |
| `review` | `Any` | No | ID of the review associated with this PaymentIntent, if any. |
| `setup_future_usage` | `str` | No | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `shipping` | `Any` | No | Shipping information for this PaymentIntent. |
| `statement_descriptor` | `str` | No | Text that appears on the customer's statement as the statement descriptor for a non-card charge. |
| `statement_descriptor_suffix` | `str` | No | Provides information about a card charge. |
| `status` | `str` | Yes | Status of this PaymentIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `requires_capture`, `canceled`, or `succeeded`. |
| `transfer_data` | `Any` | No | The data that automatically creates a Transfer after the payment finalizes. |
| `transfer_group` | `str` | No | A string that identifies the resulting payment as part of a group. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PaymentIntent().create({
    "id": "example_id",  # str
    "created": 1,  # int
    "livemode": True,  # bool
    "object": "example_object",  # str
    "presentment_details": {},  # dict
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentIntent().list()
for payment_intent in results:
    print(payment_intent)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PaymentIntent().load({"id": "payment_intent_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentIntentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentIntentAmountDetailsLineItemEntity

```python
payment_intent_amount_details_line_item = client.PaymentIntentAmountDetailsLineItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `discount_amount` | `int` | No | The discount applied on this line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `id` | `str` | Yes | Unique identifier for the object. |
| `object` | `str` | Yes | String representing the object's type. |
| `payment_method_options` | `Any` | No | Payment method-specific information for line items. |
| `product_code` | `str` | No | The product code of the line item, such as an SKU. |
| `product_name` | `str` | Yes | The product name of the line item. |
| `quantity` | `int` | Yes | The quantity of items. |
| `tax` | `Any` | No | Contains information about the tax on the item. |
| `unit_cost` | `int` | Yes | The unit cost of the line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `unit_of_measure` | `str` | No | A unit of measure for the line item, such as gallons, feet, meters, etc. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentIntentAmountDetailsLineItem().list({"intent": "example"})
for payment_intent_amount_details_line_item in results:
    print(payment_intent_amount_details_line_item)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentIntentAmountDetailsLineItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentLinkEntity

```python
payment_link = client.PaymentLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the payment link's `url` is active. |
| `after_completion` | `dict` | Yes |  |
| `allow_promotion_codes` | `bool` | Yes | Whether user redeemable promotion codes are enabled. |
| `application` | `Any` | No | The ID of the Connect application that created the Payment Link. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `float` | No | This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. |
| `automatic_tax` | `dict` | Yes |  |
| `billing_address_collection` | `str` | Yes | Configuration for collecting the customer's billing address. |
| `consent_collection` | `Any` | No | When set, provides configuration to gather active consent from customers. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `list` | Yes | Collect additional information from your customer using custom fields. |
| `custom_text` | `dict` | Yes |  |
| `customer_creation` | `str` | Yes | Configuration for Customer creation during checkout. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `inactive_message` | `str` | No | The custom message to be displayed to a customer when a payment link is no longer active. |
| `invoice_creation` | `Any` | No | Configuration for creating invoice for payment mode payment links. |
| `line_items` | `dict` | Yes | The line items representing what is being sold. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `Any` | No | Settings for Managed Payments for this Payment Link and resulting [CheckoutSessions](/api/checkout/sessions/object), [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/ob… |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name_collection` | `dict` | No |  |
| `object` | `str` | Yes | String representing the object's type. |
| `on_behalf_of` | `Any` | No | The account on behalf of which to charge. |
| `optional_items` | `list` | No | The optional items presented to the customer at checkout. |
| `payment_intent_data` | `Any` | No | Indicates the parameters to be passed to PaymentIntent creation during checkout. |
| `payment_method_collection` | `str` | Yes | Configuration for collecting a payment method during checkout. |
| `payment_method_options` | `Any` | No | Payment-method-specific configuration. |
| `payment_method_types` | `list` | No | The list of payment method types that customers can use. |
| `phone_number_collection` | `dict` | Yes |  |
| `restrictions` | `Any` | No | Settings that restrict the usage of a payment link. |
| `shipping_address_collection` | `Any` | No | Configuration for collecting the customer's shipping address. |
| `shipping_options` | `list` | Yes | The shipping rate options applied to the session. |
| `submit_type` | `str` | Yes | Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button. |
| `subscription_data` | `Any` | No | When creating a subscription, the specified configuration data will be used. |
| `tax_id_collection` | `dict` | Yes |  |
| `transfer_data` | `Any` | No | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to. |
| `url` | `str` | Yes | The public URL that can be shared with customers. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PaymentLink().create({
    "id": "example_id",  # str
    "active": True,  # bool
    "after_completion": {},  # dict
    "allow_promotion_codes": True,  # bool
    "automatic_tax": {},  # dict
    "billing_address_collection": "example_billing_address_collection",  # str
    "currency": "example_currency",  # str
    "custom_fields": [],  # list
    "custom_text": {},  # dict
    "customer_creation": "example_customer_creation",  # str
    "line_items": {},  # dict
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "payment_method_collection": "example_payment_method_collection",  # str
    "phone_number_collection": {},  # dict
    "shipping_options": [],  # list
    "submit_type": "example_submit_type",  # str
    "tax_id_collection": {},  # dict
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentLink().list()
for payment_link in results:
    print(payment_link)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PaymentLink().load({"id": "payment_link_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentMethodEntity

```python
payment_method = client.PaymentMethod()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `dict` | No |  |
| `affirm` | `dict` | No |  |
| `afterpay_clearpay` | `dict` | No |  |
| `alipay` | `dict` | No |  |
| `allow_redisplay` | `bool` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `alma` | `dict` | No |  |
| `amazon_pay` | `dict` | No |  |
| `au_becs_debit` | `dict` | No |  |
| `bacs_debit` | `dict` | No |  |
| `bancontact` | `dict` | No |  |
| `billie` | `dict` | No |  |
| `billing_details` | `dict` | Yes |  |
| `bizum` | `dict` | No |  |
| `blik` | `dict` | No |  |
| `boleto` | `dict` | Yes |  |
| `card` | `dict` | Yes |  |
| `card_present` | `dict` | Yes |  |
| `cashapp` | `dict` | No |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `crypto` | `dict` | No |  |
| `custom` | `dict` | Yes |  |
| `customer` | `Any` | No | The ID of the Customer to which this PaymentMethod is saved. |
| `customer_account` | `str` | No |  |
| `customer_balance` | `dict` | No |  |
| `eps` | `dict` | No |  |
| `fpx` | `dict` | Yes |  |
| `giropay` | `dict` | No |  |
| `grabpay` | `dict` | No |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `ideal` | `dict` | No |  |
| `interac_present` | `dict` | Yes |  |
| `kakao_pay` | `dict` | No |  |
| `klarna` | `dict` | No |  |
| `konbini` | `dict` | No |  |
| `kr_card` | `dict` | No |  |
| `link` | `dict` | No |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `mb_way` | `dict` | No |  |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mobilepay` | `dict` | No |  |
| `multibanco` | `dict` | No |  |
| `naver_pay` | `dict` | Yes |  |
| `nz_bank_account` | `dict` | Yes |  |
| `object` | `str` | Yes | String representing the object's type. |
| `oxxo` | `dict` | No |  |
| `p24` | `dict` | No |  |
| `pay_by_bank` | `dict` | No |  |
| `payco` | `dict` | No |  |
| `paynow` | `dict` | No |  |
| `paypal` | `dict` | No |  |
| `paypay` | `dict` | No |  |
| `payto` | `dict` | No |  |
| `pix` | `dict` | No |  |
| `promptpay` | `dict` | No |  |
| `radar_options` | `dict` | No | Options to configure Radar. |
| `revolut_pay` | `dict` | No |  |
| `samsung_pay` | `dict` | No |  |
| `satispay` | `dict` | No |  |
| `scalapay` | `dict` | No |  |
| `sepa_debit` | `dict` | No |  |
| `sequra` | `dict` | No |  |
| `sofort` | `dict` | No |  |
| `sunbit` | `dict` | No |  |
| `swish` | `dict` | No |  |
| `twint` | `dict` | No |  |
| `type` | `str` | Yes | The type of the PaymentMethod. |
| `upi` | `dict` | No |  |
| `us_bank_account` | `dict` | No |  |
| `wechat_pay` | `dict` | No |  |
| `zip` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PaymentMethod().create({
    "id": "example_id",  # str
    "billing_details": {},  # dict
    "boleto": {},  # dict
    "card": {},  # dict
    "card_present": {},  # dict
    "created": 1,  # int
    "custom": {},  # dict
    "fpx": {},  # dict
    "interac_present": {},  # dict
    "livemode": True,  # bool
    "naver_pay": {},  # dict
    "nz_bank_account": {},  # dict
    "object": "example_object",  # str
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentMethod().list()
for payment_method in results:
    print(payment_method)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PaymentMethod().load({"id": "payment_method_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentMethodEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentMethodConfigurationEntity

```python
payment_method_configuration = client.PaymentMethodConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `dict` | Yes |  |
| `active` | `bool` | Yes | Whether the configuration can be used for new payments. |
| `affirm` | `dict` | Yes |  |
| `afterpay_clearpay` | `dict` | Yes |  |
| `alipay` | `dict` | Yes |  |
| `alma` | `dict` | Yes |  |
| `amazon_pay` | `dict` | Yes |  |
| `apple_pay` | `dict` | Yes |  |
| `application` | `str` | No | For child configs, the Connect application associated with the configuration. |
| `au_becs_debit` | `dict` | Yes |  |
| `bacs_debit` | `dict` | Yes |  |
| `bancontact` | `dict` | Yes |  |
| `billie` | `dict` | Yes |  |
| `bizum` | `dict` | Yes |  |
| `blik` | `dict` | Yes |  |
| `boleto` | `dict` | Yes |  |
| `card` | `dict` | Yes |  |
| `cartes_bancaires` | `dict` | Yes |  |
| `cashapp` | `dict` | Yes |  |
| `crypto` | `dict` | Yes |  |
| `customer_balance` | `dict` | Yes |  |
| `eps` | `dict` | Yes |  |
| `fpx` | `dict` | Yes |  |
| `giropay` | `dict` | Yes |  |
| `google_pay` | `dict` | Yes |  |
| `grabpay` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `ideal` | `dict` | Yes |  |
| `is_default` | `bool` | Yes | The default configuration is used whenever a payment method configuration is not specified. |
| `jcb` | `dict` | Yes |  |
| `kakao_pay` | `dict` | Yes |  |
| `klarna` | `dict` | Yes |  |
| `konbini` | `dict` | Yes |  |
| `kr_card` | `dict` | Yes |  |
| `link` | `dict` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `mb_way` | `dict` | Yes |  |
| `mobilepay` | `dict` | Yes |  |
| `multibanco` | `dict` | Yes |  |
| `name` | `str` | Yes | The configuration's name. |
| `naver_pay` | `dict` | Yes |  |
| `nz_bank_account` | `dict` | Yes |  |
| `object` | `str` | Yes | String representing the object's type. |
| `oxxo` | `dict` | Yes |  |
| `p24` | `dict` | Yes |  |
| `parent` | `str` | No | For child configs, the configuration's parent configuration. |
| `pay_by_bank` | `dict` | Yes |  |
| `payco` | `dict` | Yes |  |
| `paynow` | `dict` | Yes |  |
| `paypal` | `dict` | Yes |  |
| `paypay` | `dict` | Yes |  |
| `payto` | `dict` | Yes |  |
| `pix` | `dict` | Yes |  |
| `promptpay` | `dict` | Yes |  |
| `revolut_pay` | `dict` | Yes |  |
| `samsung_pay` | `dict` | Yes |  |
| `satispay` | `dict` | Yes |  |
| `scalapay` | `dict` | Yes |  |
| `sepa_debit` | `dict` | Yes |  |
| `sequra` | `dict` | Yes |  |
| `sofort` | `dict` | Yes |  |
| `sunbit` | `dict` | Yes |  |
| `swish` | `dict` | Yes |  |
| `twint` | `dict` | Yes |  |
| `upi` | `dict` | Yes |  |
| `us_bank_account` | `dict` | Yes |  |
| `wechat_pay` | `dict` | Yes |  |
| `zip` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PaymentMethodConfiguration().create({
    "id": "example_id",  # str
    "acss_debit": {},  # dict
    "active": True,  # bool
    "affirm": {},  # dict
    "afterpay_clearpay": {},  # dict
    "alipay": {},  # dict
    "alma": {},  # dict
    "amazon_pay": {},  # dict
    "apple_pay": {},  # dict
    "au_becs_debit": {},  # dict
    "bacs_debit": {},  # dict
    "bancontact": {},  # dict
    "billie": {},  # dict
    "bizum": {},  # dict
    "blik": {},  # dict
    "boleto": {},  # dict
    "card": {},  # dict
    "cartes_bancaires": {},  # dict
    "cashapp": {},  # dict
    "crypto": {},  # dict
    "customer_balance": {},  # dict
    "eps": {},  # dict
    "fpx": {},  # dict
    "giropay": {},  # dict
    "google_pay": {},  # dict
    "grabpay": {},  # dict
    "ideal": {},  # dict
    "is_default": True,  # bool
    "jcb": {},  # dict
    "kakao_pay": {},  # dict
    "klarna": {},  # dict
    "konbini": {},  # dict
    "kr_card": {},  # dict
    "link": {},  # dict
    "livemode": True,  # bool
    "mb_way": {},  # dict
    "mobilepay": {},  # dict
    "multibanco": {},  # dict
    "name": "example_name",  # str
    "naver_pay": {},  # dict
    "nz_bank_account": {},  # dict
    "object": "example_object",  # str
    "oxxo": {},  # dict
    "p24": {},  # dict
    "pay_by_bank": {},  # dict
    "payco": {},  # dict
    "paynow": {},  # dict
    "paypal": {},  # dict
    "paypay": {},  # dict
    "payto": {},  # dict
    "pix": {},  # dict
    "promptpay": {},  # dict
    "revolut_pay": {},  # dict
    "samsung_pay": {},  # dict
    "satispay": {},  # dict
    "scalapay": {},  # dict
    "sepa_debit": {},  # dict
    "sequra": {},  # dict
    "sofort": {},  # dict
    "sunbit": {},  # dict
    "swish": {},  # dict
    "twint": {},  # dict
    "upi": {},  # dict
    "us_bank_account": {},  # dict
    "wechat_pay": {},  # dict
    "zip": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentMethodConfiguration().list()
for payment_method_configuration in results:
    print(payment_method_configuration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PaymentMethodConfiguration().load({"id": "payment_method_configuration_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentMethodConfigurationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentMethodDomainEntity

```python
payment_method_domain = client.PaymentMethodDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amazon_pay` | `dict` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `apple_pay` | `dict` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `created` | `int` | Yes | Time at which the object was created. |
| `domain_name` | `str` | Yes | The domain name that this payment method domain object represents. |
| `enabled` | `bool` | Yes | Whether this payment method domain is enabled. |
| `google_pay` | `dict` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `klarna` | `dict` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `link` | `dict` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `paypal` | `dict` | Yes | Indicates the status of a specific payment method on a payment method domain. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PaymentMethodDomain().create({
    "id": "example_id",  # str
    "amazon_pay": {},  # dict
    "apple_pay": {},  # dict
    "created": 1,  # int
    "domain_name": "example_domain_name",  # str
    "enabled": True,  # bool
    "google_pay": {},  # dict
    "klarna": {},  # dict
    "link": {},  # dict
    "livemode": True,  # bool
    "object": "example_object",  # str
    "paypal": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentMethodDomain().list()
for payment_method_domain in results:
    print(payment_method_domain)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PaymentMethodDomain().load({"id": "payment_method_domain_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentMethodDomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentRecordEntity

```python
payment_record = client.PaymentRecord()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `dict` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `str` | No | ID of the Connect application that created the PaymentRecord. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer_details` | `Any` | No | Customer information for this payment. |
| `customer_presence` | `str` | No | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `latest_payment_attempt_record` | `str` | No | ID of the latest Payment Attempt Record attached to this Payment Record. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `payment_method_details` | `Any` | No | Information about the Payment Method debited for this payment. |
| `processor_details` | `dict` | Yes | Processor information associated with this payment. |
| `reported_by` | `str` | Yes | Indicates who reported the payment. |
| `shipping_details` | `Any` | No | Shipping information for this payment. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PaymentRecord().create({
    "amount": {},  # dict
    "amount_authorized": {},  # dict
    "amount_canceled": {},  # dict
    "amount_failed": {},  # dict
    "amount_guaranteed": {},  # dict
    "amount_refunded": {},  # dict
    "amount_requested": {},  # dict
    "created": 1,  # int
    "id": "example_id",  # str
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "processor_details": {},  # dict
    "reported_by": "example_reported_by",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentRecord().list()
for payment_record in results:
    print(payment_record)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PaymentRecord().load({"id": "payment_record_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentRecordEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayoutEntity

```python
payout = client.Payout()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | The amount (in cents (or local equivalent)) that transfers to your bank account or debit card. |
| `application_fee` | `Any` | No | The application fee (if any) for the payout. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) requested for the payout. |
| `arrival_date` | `int` | Yes | Date that you can expect the payout to arrive in the bank. |
| `automatic` | `bool` | Yes | Returns `true` if the payout is created by an [automated payout schedule](https://docs.stripe.com/payouts#payout-schedule) and `false` if it's [requested manually](https://stripe.com/docs/payouts#manual-payouts). |
| `balance_transaction` | `Any` | No | ID of the balance transaction that describes the impact of this payout on your account balance. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `destination` | `Any` | No | ID of the bank account or card the payout is sent to. |
| `failure_balance_transaction` | `Any` | No | If the payout fails or cancels, this is the ID of the balance transaction that reverses the initial balance transaction and returns the funds from the failed payout back in your balance. |
| `failure_code` | `str` | No | Error code that provides a reason for a payout failure, if available. |
| `failure_message` | `str` | No | Message that provides the reason for a payout failure, if available. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `method` | `str` | Yes | The method used to send this payout, which can be `standard` or `instant`. |
| `object` | `str` | Yes | String representing the object's type. |
| `original_payout` | `Any` | No | If the payout reverses another, this is the ID of the original payout. |
| `payout_method` | `str` | No | ID of the v2 FinancialAccount the funds are sent to. |
| `reconciliation_status` | `str` | Yes | If `completed`, you can use the [Balance Transactions API](https://docs.stripe.com/api/balance_transactions/list#balance_transaction_list-payout) to list all balance transactions that are paid out in this payout. |
| `reversed_by` | `Any` | No | If the payout reverses, this is the ID of the payout that reverses this payout. |
| `source_type` | `str` | Yes | The source balance this payout came from, which can be one of the following: `card`, `fpx`, or `bank_account`. |
| `statement_descriptor` | `str` | No | Extra information about a payout that displays on the user's bank statement. |
| `status` | `str` | Yes | Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`. |
| `trace_id` | `str` | No | A value that generates from the beneficiary's bank that allows users to track payouts with their bank. |
| `type` | `str` | Yes | Can be `bank_account` or `card`. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Payout().create({
    "id": "example_id",  # str
    "amount": 1,  # int
    "arrival_date": 1,  # int
    "automatic": True,  # bool
    "created": 1,  # int
    "currency": "example_currency",  # str
    "livemode": True,  # bool
    "method": "example_method",  # str
    "object": "example_object",  # str
    "reconciliation_status": "example_reconciliation_status",  # str
    "source_type": "example_source_type",  # str
    "status": "example_status",  # str
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Payout().list()
for payout in results:
    print(payout)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Payout().load({"id": "payout_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayoutEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PersonEntity

```python
person = client.Person()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `str` | Yes | The account the person is associated with. |
| `additional_tos_acceptances` | `dict` | No |  |
| `address` | `dict` | No |  |
| `address_kana` | `Any` | No |  |
| `address_kanji` | `Any` | No |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `dob` | `dict` | No |  |
| `email` | `str` | No | The person's email address. |
| `first_name` | `str` | No | The person's first name. |
| `first_name_kana` | `str` | No | The Kana variation of the person's first name (Japan only). |
| `first_name_kanji` | `str` | No | The Kanji variation of the person's first name (Japan only). |
| `full_name_aliases` | `list` | No | A list of alternate names or aliases that the person is known by. |
| `future_requirements` | `Any` | No |  |
| `gender` | `str` | No | The person's gender. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `id_number_provided` | `bool` | No | Whether the person's `id_number` was provided. |
| `id_number_secondary_provided` | `bool` | No | Whether the person's `id_number_secondary` was provided. |
| `last_name` | `str` | No | The person's last name. |
| `last_name_kana` | `str` | No | The Kana variation of the person's last name (Japan only). |
| `last_name_kanji` | `str` | No | The Kanji variation of the person's last name (Japan only). |
| `maiden_name` | `str` | No | The person's maiden name. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nationality` | `str` | No | The country where the person is a national. |
| `object` | `str` | Yes | String representing the object's type. |
| `phone` | `str` | No | The person's phone number. |
| `political_exposure` | `str` | No | Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction. |
| `registered_address` | `dict` | No |  |
| `relationship` | `dict` | No |  |
| `requirements` | `Any` | No |  |
| `ssn_last_4_provided` | `bool` | No | Whether the last four digits of the person's Social Security number have been provided (U.S. |
| `us_cfpb_data` | `Any` | No | Demographic data related to the person. |
| `verification` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Person().create({
    "account_id": "example_account_id",  # str
    "account": "example_account",  # str
    "created": 1,  # int
    "object": "example_object",  # str
    "verification": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Person().list({"account_id": "example"})
for person in results:
    print(person)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Person().load({"id": "person_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PersonalizationDesignEntity

```python
personalization_design = client.PersonalizationDesign()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_logo` | `Any` | No | The file for the card logo to use with physical bundles that support card logos. |
| `carrier_text` | `Any` | No | Hash containing carrier text, for use with physical bundles that support carrier text. |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `str` | No | A lookup key used to retrieve personalization designs dynamically from a static string. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `str` | No | Friendly display name. |
| `object` | `str` | Yes | String representing the object's type. |
| `physical_bundle` | `Any` | Yes | The physical bundle object belonging to this personalization design. |
| `preferences` | `dict` | Yes |  |
| `rejection_reasons` | `dict` | Yes |  |
| `status` | `str` | Yes | Whether this personalization design can be used to create cards. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PersonalizationDesign().create({
    "id": "example_id",  # str
    "created": 1,  # int
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "physical_bundle": "example_physical_bundle",  # Any
    "preferences": {},  # dict
    "rejection_reasons": {},  # dict
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PersonalizationDesign().list()
for personalization_design in results:
    print(personalization_design)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PersonalizationDesign().load({"id": "personalization_design_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonalizationDesignEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PhysicalBundleEntity

```python
physical_bundle = client.PhysicalBundle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_logo` | `str` | Yes | The policy for how to use card logo images in a card design with this physical bundle. |
| `carrier_text` | `str` | Yes | The policy for how to use carrier letter text in a card design with this physical bundle. |
| `features` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `str` | Yes | Friendly display name. |
| `object` | `str` | Yes | String representing the object's type. |
| `second_line` | `str` | Yes | The policy for how to use a second line on a card with this physical bundle. |
| `status` | `str` | Yes | Whether this physical bundle can be used to create cards. |
| `type` | `str` | Yes | Whether this physical bundle is a standard Stripe offering or custom-made for you. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PhysicalBundle().list()
for physical_bundle in results:
    print(physical_bundle)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PhysicalBundle().load({"id": "physical_bundle_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PhysicalBundleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PlanEntity

```python
plan = client.Plan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the plan can be used for new purchases. |
| `amount` | `int` | No | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `amount_decimal` | `str` | No | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `billing_scheme` | `str` | Yes | Describes how to compute the price per period. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `interval` | `str` | Yes | The frequency at which a subscription is billed. |
| `interval_count` | `int` | Yes | The number of intervals (specified in the `interval` attribute) between subscription billings. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `meter` | `str` | No | The meter tracking the usage of a metered price |
| `nickname` | `str` | No | A brief description of the plan, hidden from customers. |
| `object` | `str` | Yes | String representing the object's type. |
| `product` | `Any` | No | The product whose pricing this plan determines. |
| `tiers` | `list` | No | Each element represents a pricing tier. |
| `tiers_mode` | `str` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_usage` | `Any` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_period_days` | `int` | No | Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://docs.stripe.com/api#create_subscription-trial_from_plan). |
| `usage_type` | `str` | Yes | Configures how the quantity per period should be determined. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Plan().create({
    "id": "example_id",  # str
    "active": True,  # bool
    "billing_scheme": "example_billing_scheme",  # str
    "created": 1,  # int
    "currency": "example_currency",  # str
    "interval": "example_interval",  # str
    "interval_count": 1,  # int
    "livemode": True,  # bool
    "object": "example_object",  # str
    "usage_type": "example_usage_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Plan().list()
for plan in results:
    print(plan)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Plan().load({"id": "plan_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PlanEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PriceEntity

```python
price = client.Price()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the price can be used for new purchases. |
| `billing_scheme` | `str` | Yes | Describes how to compute the price per period. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | `dict` | No | Prices defined in each available currency option. |
| `custom_unit_amount` | `Any` | No | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `str` | No | A lookup key used to retrieve prices dynamically from a static string. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `str` | No | A brief description of the price, hidden from customers. |
| `object` | `str` | Yes | String representing the object's type. |
| `product` | `Any` | Yes | The ID of the product this price is associated with. |
| `recurring` | `Any` | No | The recurring components of a price such as `interval` and `usage_type`. |
| `tax_behavior` | `str` | No | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tiers` | `list` | No | Each element represents a pricing tier. |
| `tiers_mode` | `str` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_quantity` | `Any` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `type` | `str` | Yes | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | `int` | No | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | `str` | No | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Price().create({
    "id": "example_id",  # str
    "active": True,  # bool
    "billing_scheme": "example_billing_scheme",  # str
    "created": 1,  # int
    "currency": "example_currency",  # str
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "product": "example_product",  # Any
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Price().list()
for price in results:
    print(price)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Price().load({"id": "price_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PriceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductEntity

```python
product = client.Product()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the product is currently available for purchase. |
| `created` | `int` | Yes | Time at which the object was created. |
| `current_prices_per_metric_ton` | `dict` | Yes | Current prices for a metric ton of carbon removal in a currency's smallest unit. |
| `default_price` | `Any` | No | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `delivery_year` | `int` | No | The year in which the carbon removal is expected to be delivered. |
| `description` | `str` | No | The product's description, meant to be displayable to the customer. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `images` | `list` | Yes | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `livemode` | `bool` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `marketing_features` | `list` | Yes | A list of up to 15 marketing features for this product. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons_available` | `str` | Yes | The quantity of metric tons available for reservation. |
| `name` | `str` | Yes | The Climate product's name. |
| `object` | `str` | Yes | String representing the object's type. |
| `package_dimensions` | `Any` | No | The dimensions of this product for shipping purposes. |
| `shippable` | `bool` | No | Whether this product is shipped (i.e., physical goods). |
| `statement_descriptor` | `str` | No | Extra information about a product which will appear on your customer's credit card statement. |
| `suppliers` | `list` | Yes | The carbon removal suppliers that fulfill orders for this Climate product. |
| `tax_code` | `Any` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `Any` | No | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `unit_label` | `str` | No | A label that represents units of this product. |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `url` | `str` | No | A URL of a publicly-accessible webpage for this product. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Product().create({
    "id": "example_id",  # str
    "active": True,  # bool
    "created": 1,  # int
    "current_prices_per_metric_ton": {},  # dict
    "images": [],  # list
    "livemode": True,  # bool
    "marketing_features": [],  # list
    "metadata": {},  # dict
    "metric_tons_available": "example_metric_tons_available",  # str
    "name": "example_name",  # str
    "object": "example_object",  # str
    "suppliers": [],  # list
    "updated": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Product().list()
for product in results:
    print(product)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Product().load({"id": "product_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Product().remove({"id": "product_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductFeatureEntity

```python
product_feature = client.ProductFeature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `str` | Yes | A unique key you provide as your own system identifier. |
| `metadata` | `dict` | Yes | Set of key-value pairs that you can attach to an object. |
| `name` | `str` | Yes | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `str` | Yes | String representing the object's type. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProductFeature().create({
    "id": "example_id",  # str
    "active": True,  # bool
    "livemode": True,  # bool
    "lookup_key": "example_lookup_key",  # str
    "metadata": {},  # dict
    "name": "example_name",  # str
    "object": "example_object",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProductFeature().load({"id": "product_feature_id", "product_id": "product_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductFeatureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PromotionCodeEntity

```python
promotion_code = client.PromotionCode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the promotion code is currently active. |
| `code` | `str` | Yes | The customer-facing code. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `Any` | No | The customer who can use this promotion code. |
| `customer_account` | `str` | No | The account representing the customer who can use this promotion code. |
| `expires_at` | `int` | No | Date at which the promotion code can no longer be redeemed. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | `int` | No | Maximum number of times this promotion code can be redeemed. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `promotion` | `dict` | Yes |  |
| `restrictions` | `dict` | Yes |  |
| `times_redeemed` | `int` | Yes | Number of times this promotion code has been used. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PromotionCode().create({
    "id": "example_id",  # str
    "active": True,  # bool
    "code": "example_code",  # str
    "created": 1,  # int
    "livemode": True,  # bool
    "object": "example_object",  # str
    "promotion": {},  # dict
    "restrictions": {},  # dict
    "times_redeemed": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PromotionCode().list()
for promotion_code in results:
    print(promotion_code)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PromotionCode().load({"id": "promotion_code_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PromotionCodeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## QuoteEntity

```python
quote = client.Quote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_subtotal` | `int` | Yes | Total before any discounts or taxes are applied. |
| `amount_total` | `int` | Yes | Total after discounts and taxes are applied. |
| `application` | `Any` | No | ID of the Connect Application that created the quote. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `float` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `dict` | Yes |  |
| `collection_method` | `str` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `computed` | `dict` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `Any` | No | The customer who received this quote. |
| `customer_account` | `str` | No | The account representing the customer who received this quote. |
| `default_tax_rates` | `list` | No | The tax rates applied to this quote. |
| `description` | `str` | No | A description that will be displayed on the quote PDF. |
| `discounts` | `list` | Yes | The discounts applied to this quote. |
| `expires_at` | `int` | Yes | The date on which the quote will be canceled if in `open` or `draft` status. |
| `footer` | `str` | No | A footer that will be displayed on the quote PDF. |
| `from_quote` | `Any` | No | Details of the quote that was cloned. |
| `header` | `str` | No | A header that will be displayed on the quote PDF. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `invoice` | `Any` | No | The invoice that was created from this quote. |
| `invoice_settings` | `dict` | Yes |  |
| `line_items` | `dict` | Yes | A list of items the customer is being quoted for. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `str` | No | A unique number that identifies this particular quote. |
| `object` | `str` | Yes | String representing the object's type. |
| `on_behalf_of` | `Any` | No | The account on behalf of which to charge. |
| `status` | `str` | Yes | The status of the quote. |
| `status_transitions` | `dict` | Yes |  |
| `subscription` | `Any` | No | The subscription that was created or updated from this quote. |
| `subscription_data` | `dict` | Yes |  |
| `subscription_schedule` | `Any` | No | The subscription schedule that was created or updated from this quote. |
| `test_clock` | `Any` | No | ID of the test clock this quote belongs to. |
| `total_details` | `dict` | Yes |  |
| `transfer_data` | `Any` | No | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Quote().create({
    "id": "example_id",  # str
    "amount_subtotal": 1,  # int
    "amount_total": 1,  # int
    "automatic_tax": {},  # dict
    "collection_method": "example_collection_method",  # str
    "computed": {},  # dict
    "created": 1,  # int
    "discounts": [],  # list
    "expires_at": 1,  # int
    "invoice_settings": {},  # dict
    "line_items": {},  # dict
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "status": "example_status",  # str
    "status_transitions": {},  # dict
    "subscription_data": {},  # dict
    "total_details": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Quote().list()
for quote in results:
    print(quote)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Quote().load({"id": "quote_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QuoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## QuoteComputedUpfrontLineItemEntity

```python
quote_computed_upfront_line_item = client.QuoteComputedUpfrontLineItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjustable_quantity` | `Any` | No |  |
| `amount_discount` | `int` | Yes | Total discount amount applied. |
| `amount_subtotal` | `int` | Yes | Total before any discounts or taxes are applied. |
| `amount_tax` | `int` | Yes | Total tax amount applied. |
| `amount_total` | `int` | Yes | Total after discounts and taxes. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `discounts` | `list` | No | The discounts applied to the line item. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `price` | `float` | No | The price used to generate the line item. |
| `quantity` | `int` | No | The quantity of products being purchased. |
| `taxes` | `list` | No | The taxes applied to the line item. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.QuoteComputedUpfrontLineItem().list({"id": "example"})
for quote_computed_upfront_line_item in results:
    print(quote_computed_upfront_line_item)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QuoteComputedUpfrontLineItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## QuotePdfEntity

```python
quote_pdf = client.QuotePdf()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.QuotePdf().load({"id": "quote_pdf_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QuotePdfEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReaderEntity

```python
reader = client.Reader()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `Any` | No | The most recent action performed by the reader. |
| `device_sw_version` | `str` | No | The current software version of the reader. |
| `device_type` | `str` | Yes | Device type of the reader. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `ip_address` | `str` | No | The local IP address of the reader. |
| `label` | `str` | Yes | Custom label given to the reader for easier identification. |
| `last_seen_at` | `int` | No | The last time this reader reported to Stripe backend. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `location` | `Any` | No | The location identifier of the reader. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `serial_number` | `str` | Yes | Serial number of the reader. |
| `status` | `str` | No | The networking status of the reader. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Reader().create({
    "id": "example_id",  # str
    "device_type": "example_device_type",  # str
    "label": "example_label",  # str
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "serial_number": "example_serial_number",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Reader().list()
for reader in results:
    print(reader)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Reader().load({"id": "reader_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Reader().remove({"id": "reader_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReaderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReceivedCreditEntity

```python
received_credit = client.ReceivedCredit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `str` | Yes | An arbitrary string attached to the object. |
| `failure_code` | `str` | No | Reason for the failure. |
| `financial_account` | `str` | No | The FinancialAccount that received the funds. |
| `hosted_regulatory_receipt_url` | `str` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `initiating_payment_method_details` | `dict` | Yes |  |
| `linked_flows` | `dict` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `str` | Yes | The rails used to send the funds. |
| `object` | `str` | Yes | String representing the object's type. |
| `reversal_details` | `Any` | No | Details describing when a ReceivedCredit may be reversed. |
| `status` | `str` | Yes | Status of the ReceivedCredit. |
| `transaction` | `Any` | No | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReceivedCredit().create({
    "amount": 1,  # int
    "created": 1,  # int
    "currency": "example_currency",  # str
    "description": "example_description",  # str
    "id": "example_id",  # str
    "initiating_payment_method_details": {},  # dict
    "linked_flows": {},  # dict
    "livemode": True,  # bool
    "network": "example_network",  # str
    "object": "example_object",  # str
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReceivedCredit().list({"financial_account": "example"})
for received_credit in results:
    print(received_credit)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ReceivedCredit().load({"id": "received_credit_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReceivedCreditEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReceivedDebitEntity

```python
received_debit = client.ReceivedDebit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount (in cents) transferred. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `str` | Yes | An arbitrary string attached to the object. |
| `failure_code` | `str` | No | Reason for the failure. |
| `financial_account` | `str` | No | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `str` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `initiating_payment_method_details` | `dict` | Yes |  |
| `linked_flows` | `dict` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `str` | Yes | The network used for the ReceivedDebit. |
| `object` | `str` | Yes | String representing the object's type. |
| `reversal_details` | `Any` | No | Details describing when a ReceivedDebit might be reversed. |
| `status` | `str` | Yes | Status of the ReceivedDebit. |
| `transaction` | `Any` | No | The Transaction associated with this object. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReceivedDebit().create({
    "amount": 1,  # int
    "created": 1,  # int
    "currency": "example_currency",  # str
    "description": "example_description",  # str
    "id": "example_id",  # str
    "initiating_payment_method_details": {},  # dict
    "linked_flows": {},  # dict
    "livemode": True,  # bool
    "network": "example_network",  # str
    "object": "example_object",  # str
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReceivedDebit().list({"financial_account": "example"})
for received_debit in results:
    print(received_debit)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ReceivedDebit().load({"id": "received_debit_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReceivedDebitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RefundEntity

```python
refund = client.Refund()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount, in cents (or local equivalent). |
| `balance_transaction` | `Any` | No | Balance transaction that describes the impact on your account balance. |
| `charge` | `Any` | No | ID of the charge that's refunded. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `Any` | No | ID of the customer of this refund. |
| `customer_account` | `str` | No | ID of the account of this refund. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `destination_details` | `dict` | Yes |  |
| `failure_balance_transaction` | `Any` | No | After the refund fails, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction. |
| `failure_reason` | `str` | No | Provides the reason for the refund failure. |
| `fee` | `Any` | Yes | ID of the application fee that was refunded. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `instructions_email` | `str` | No | For payment methods without native refund support (for example, Konbini, PromptPay), provide an email address for the customer to receive refund instructions. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `dict` | Yes |  |
| `object` | `str` | Yes | String representing the object's type. |
| `payment_intent` | `Any` | No | ID of the PaymentIntent that's refunded. |
| `payment_method` | `Any` | No | ID of the payment method associated with this refund. |
| `pending_reason` | `str` | No | Provides the reason for why the refund is pending. |
| `presentment_details` | `dict` | Yes |  |
| `reason` | `str` | No | Reason for the refund, which is either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`). |
| `receipt_number` | `str` | No | This is the transaction number that appears on email receipts sent for this refund. |
| `source_transfer_reversal` | `Any` | No | The transfer reversal that's associated with the refund. |
| `status` | `str` | No | Status of the refund. |
| `transfer_reversal` | `Any` | No | This refers to the transfer reversal object if the accompanying transfer reverses. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Refund().create({
    "id": "example_id",  # str
    "amount": 1,  # int
    "created": 1,  # int
    "currency": "example_currency",  # str
    "destination_details": {},  # dict
    "fee": "example_fee",  # Any
    "next_action": {},  # dict
    "object": "example_object",  # str
    "presentment_details": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Refund().list()
for refund in results:
    print(refund)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Refund().load({"id": "refund_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RefundEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RegistrationEntity

```python
registration = client.Registration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_from` | `int` | Yes | Time at which the registration becomes active. |
| `ae` | `dict` | Yes |  |
| `al` | `dict` | Yes |  |
| `am` | `dict` | Yes |  |
| `ao` | `dict` | Yes |  |
| `at` | `dict` | Yes |  |
| `au` | `dict` | Yes |  |
| `aw` | `dict` | Yes |  |
| `az` | `dict` | Yes |  |
| `ba` | `dict` | Yes |  |
| `bb` | `dict` | Yes |  |
| `bd` | `dict` | Yes |  |
| `be` | `dict` | Yes |  |
| `bf` | `dict` | Yes |  |
| `bg` | `dict` | Yes |  |
| `bh` | `dict` | Yes |  |
| `bj` | `dict` | Yes |  |
| `bs` | `dict` | Yes |  |
| `by` | `dict` | Yes |  |
| `ca` | `dict` | Yes |  |
| `cd` | `dict` | Yes |  |
| `ch` | `dict` | Yes |  |
| `cl` | `dict` | Yes |  |
| `cm` | `dict` | Yes |  |
| `co` | `dict` | Yes |  |
| `country` | `str` | Yes | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `country_options` | `dict` | Yes |  |
| `cr` | `dict` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `cv` | `dict` | Yes |  |
| `cy` | `dict` | Yes |  |
| `cz` | `dict` | Yes |  |
| `de` | `dict` | Yes |  |
| `dk` | `dict` | Yes |  |
| `ec` | `dict` | Yes |  |
| `ee` | `dict` | Yes |  |
| `eg` | `dict` | Yes |  |
| `es` | `dict` | Yes |  |
| `et` | `dict` | Yes |  |
| `expires_at` | `int` | No | If set, the registration stops being active at this time. |
| `fi` | `dict` | Yes |  |
| `fr` | `dict` | Yes |  |
| `gb` | `dict` | Yes |  |
| `ge` | `dict` | Yes |  |
| `gn` | `dict` | Yes |  |
| `gr` | `dict` | Yes |  |
| `hr` | `dict` | Yes |  |
| `hu` | `dict` | Yes |  |
| `id` | `dict` | Yes | Unique identifier for the object. |
| `ie` | `dict` | Yes |  |
| `in` | `dict` | Yes |  |
| `is` | `dict` | Yes |  |
| `it` | `dict` | Yes |  |
| `jp` | `dict` | Yes |  |
| `ke` | `dict` | Yes |  |
| `kg` | `dict` | Yes |  |
| `kh` | `dict` | Yes |  |
| `kr` | `dict` | Yes |  |
| `kz` | `dict` | Yes |  |
| `la` | `dict` | Yes |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lk` | `dict` | Yes |  |
| `lt` | `dict` | Yes |  |
| `lu` | `dict` | Yes |  |
| `lv` | `dict` | Yes |  |
| `ma` | `dict` | Yes |  |
| `md` | `dict` | Yes |  |
| `me` | `dict` | Yes |  |
| `mk` | `dict` | Yes |  |
| `mr` | `dict` | Yes |  |
| `mt` | `dict` | Yes |  |
| `mx` | `dict` | Yes |  |
| `my` | `dict` | Yes |  |
| `ng` | `dict` | Yes |  |
| `nl` | `dict` | Yes |  |
| `no` | `dict` | Yes |  |
| `np` | `dict` | Yes |  |
| `nz` | `dict` | Yes |  |
| `object` | `str` | Yes | String representing the object's type. |
| `om` | `dict` | Yes |  |
| `pe` | `dict` | Yes |  |
| `ph` | `dict` | Yes |  |
| `pl` | `dict` | Yes |  |
| `pt` | `dict` | Yes |  |
| `ro` | `dict` | Yes |  |
| `rs` | `dict` | Yes |  |
| `ru` | `dict` | Yes |  |
| `sa` | `dict` | Yes |  |
| `se` | `dict` | Yes |  |
| `sg` | `dict` | Yes |  |
| `si` | `dict` | Yes |  |
| `sk` | `dict` | Yes |  |
| `sn` | `dict` | Yes |  |
| `sr` | `dict` | Yes |  |
| `status` | `str` | Yes | The status of the registration. |
| `th` | `dict` | Yes |  |
| `tj` | `dict` | Yes |  |
| `tr` | `dict` | Yes |  |
| `tw` | `dict` | Yes |  |
| `tz` | `dict` | Yes |  |
| `ua` | `dict` | Yes |  |
| `ug` | `dict` | Yes |  |
| `us` | `dict` | Yes |  |
| `uy` | `dict` | Yes |  |
| `uz` | `dict` | Yes |  |
| `vn` | `dict` | Yes |  |
| `za` | `dict` | Yes |  |
| `zm` | `dict` | Yes |  |
| `zw` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Registration().create({
    "id": "example_id",  # str
    "active_from": 1,  # int
    "ae": {},  # dict
    "al": {},  # dict
    "am": {},  # dict
    "ao": {},  # dict
    "at": {},  # dict
    "au": {},  # dict
    "aw": {},  # dict
    "az": {},  # dict
    "ba": {},  # dict
    "bb": {},  # dict
    "bd": {},  # dict
    "be": {},  # dict
    "bf": {},  # dict
    "bg": {},  # dict
    "bh": {},  # dict
    "bj": {},  # dict
    "bs": {},  # dict
    "by": {},  # dict
    "ca": {},  # dict
    "cd": {},  # dict
    "ch": {},  # dict
    "cl": {},  # dict
    "cm": {},  # dict
    "co": {},  # dict
    "country": "example_country",  # str
    "country_options": {},  # dict
    "cr": {},  # dict
    "created": 1,  # int
    "cv": {},  # dict
    "cy": {},  # dict
    "cz": {},  # dict
    "de": {},  # dict
    "dk": {},  # dict
    "ec": {},  # dict
    "ee": {},  # dict
    "eg": {},  # dict
    "es": {},  # dict
    "et": {},  # dict
    "fi": {},  # dict
    "fr": {},  # dict
    "gb": {},  # dict
    "ge": {},  # dict
    "gn": {},  # dict
    "gr": {},  # dict
    "hr": {},  # dict
    "hu": {},  # dict
    "ie": {},  # dict
    "in": {},  # dict
    "is": {},  # dict
    "it": {},  # dict
    "jp": {},  # dict
    "ke": {},  # dict
    "kg": {},  # dict
    "kh": {},  # dict
    "kr": {},  # dict
    "kz": {},  # dict
    "la": {},  # dict
    "livemode": True,  # bool
    "lk": {},  # dict
    "lt": {},  # dict
    "lu": {},  # dict
    "lv": {},  # dict
    "ma": {},  # dict
    "md": {},  # dict
    "me": {},  # dict
    "mk": {},  # dict
    "mr": {},  # dict
    "mt": {},  # dict
    "mx": {},  # dict
    "my": {},  # dict
    "ng": {},  # dict
    "nl": {},  # dict
    "no": {},  # dict
    "np": {},  # dict
    "nz": {},  # dict
    "object": "example_object",  # str
    "om": {},  # dict
    "pe": {},  # dict
    "ph": {},  # dict
    "pl": {},  # dict
    "pt": {},  # dict
    "ro": {},  # dict
    "rs": {},  # dict
    "ru": {},  # dict
    "sa": {},  # dict
    "se": {},  # dict
    "sg": {},  # dict
    "si": {},  # dict
    "sk": {},  # dict
    "sn": {},  # dict
    "sr": {},  # dict
    "status": "example_status",  # str
    "th": {},  # dict
    "tj": {},  # dict
    "tr": {},  # dict
    "tw": {},  # dict
    "tz": {},  # dict
    "ua": {},  # dict
    "ug": {},  # dict
    "us": {},  # dict
    "uy": {},  # dict
    "uz": {},  # dict
    "vn": {},  # dict
    "za": {},  # dict
    "zm": {},  # dict
    "zw": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Registration().list()
for registration in results:
    print(registration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Registration().load({"id": "registration_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegistrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReportRunEntity

```python
report_run = client.ReportRun()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `error` | `str` | No | If something should go wrong during the run, a message about the failure (populated when `status=failed`). |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | `true` if the report is run on live mode data and `false` if it is run on test mode data. |
| `object` | `str` | Yes | String representing the object's type. |
| `parameters` | `dict` | Yes |  |
| `report_type` | `str` | Yes | The ID of the [report type](https://docs.stripe.com/reports/report-types) to run, such as `"balance.summary.1"`. |
| `result` | `Any` | No | The file object representing the result of the report run (populated when `status=succeeded`). |
| `status` | `str` | Yes | Status of this report run. |
| `succeeded_at` | `int` | No | Timestamp at which this run successfully finished (populated when `status=succeeded`). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReportRun().create({
    "created": 1,  # int
    "id": "example_id",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "parameters": {},  # dict
    "report_type": "example_report_type",  # str
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReportRun().list()
for report_run in results:
    print(report_run)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ReportRun().load({"id": "report_run_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportRunEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReportTypeEntity

```python
report_type = client.ReportType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_available_end` | `int` | Yes | Most recent time for which this Report Type is available. |
| `data_available_start` | `int` | Yes | Earliest time for which this Report Type is available. |
| `default_columns` | `list` | No | List of column names that are included by default when this Report Type gets run. |
| `id` | `str` | Yes | The [ID of the Report Type](https://docs.stripe.com/reporting/statements/api#available-report-types), such as `balance.summary.1`. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `str` | Yes | Human-readable name of the Report Type |
| `object` | `str` | Yes | String representing the object's type. |
| `updated` | `int` | Yes | When this Report Type was latest updated. |
| `version` | `int` | Yes | Version of the Report Type. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReportType().list()
for report_type in results:
    print(report_type)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ReportType().load({"id": "report_type_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RequestEntity

```python
request = client.Request()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `payment_method` | `str` | Yes | The PaymentMethod to insert into the forwarded request. |
| `replacements` | `list` | Yes | The field kinds to be replaced in the forwarded request. |
| `request_context` | `Any` | No | Context about the request from Stripe's servers to the destination endpoint. |
| `request_details` | `Any` | No | The request that was sent to the destination endpoint. |
| `response_details` | `Any` | No | The response that the destination endpoint returned to us. |
| `url` | `str` | No | The destination URL for the forwarded request. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Request().create({
    "created": 1,  # int
    "id": "example_id",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "payment_method": "example_payment_method",  # str
    "replacements": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Request().list()
for request in results:
    print(request)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Request().load({"id": "request_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RequestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReversalEntity

```python
reversal = client.Reversal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount, in cents (or local equivalent). |
| `balance_transaction` | `Any` | No | Balance transaction that describes the impact on your account balance. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `destination_payment_refund` | `Any` | No | Linked payment refund for the transfer reversal. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `source_refund` | `Any` | No | ID of the refund responsible for the transfer reversal. |
| `transfer` | `Any` | Yes | ID of the transfer that was reversed. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Reversal().create({
    "transfer_id": "example_transfer_id",  # str
    "amount": 1,  # int
    "created": 1,  # int
    "currency": "example_currency",  # str
    "object": "example_object",  # str
    "transfer": "example_transfer",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Reversal().list({"transfer_id": "example"})
for reversal in results:
    print(reversal)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Reversal().load({"id": "reversal_id", "transfer_id": "transfer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReversalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReviewEntity

```python
review = client.Review()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing_zip` | `str` | No | The ZIP or postal code of the card used, if applicable. |
| `charge` | `Any` | No | The charge associated with this review. |
| `closed_reason` | `str` | No | The reason the review was closed, or null if it has not yet been closed. |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `ip_address` | `str` | No | The IP address where the payment originated. |
| `ip_address_location` | `Any` | No | Information related to the location of the payment. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `open` | `bool` | Yes | If `true`, the review needs action. |
| `opened_reason` | `str` | Yes | The reason the review was opened. |
| `payment_intent` | `Any` | No | The PaymentIntent ID associated with this review, if one exists. |
| `reason` | `str` | Yes | The reason the review is currently open or closed. |
| `session` | `Any` | No | Information related to the browsing session of the user who initiated the payment. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Review().create({
    "id": "example_id",  # str
    "created": 1,  # int
    "livemode": True,  # bool
    "object": "example_object",  # str
    "open": True,  # bool
    "opened_reason": "example_opened_reason",  # str
    "reason": "example_reason",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Review().list()
for review in results:
    print(review)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Review().load({"id": "review_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScheduledQueryRunEntity

```python
scheduled_query_run = client.ScheduledQueryRun()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `data_load_time` | `int` | Yes | When the query was run, Sigma contained a snapshot of your Stripe data at this time. |
| `error` | `dict` | Yes |  |
| `file` | `Any` | No | The file object representing the results of the query. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `result_available_until` | `int` | Yes | Time at which the result expires and is no longer available for download. |
| `sql` | `str` | Yes | SQL for the query. |
| `status` | `str` | Yes | The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise. |
| `title` | `str` | Yes | Title of the query. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ScheduledQueryRun().list()
for scheduled_query_run in results:
    print(scheduled_query_run)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ScheduledQueryRun().load({"id": "scheduled_query_run_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduledQueryRunEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SearchEntity

```python
search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_country` | `str` | No | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `str` | No | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `list` | No | The account tax IDs associated with the invoice. |
| `active` | `bool` | Yes | Whether the price can be used for new purchases. |
| `address` | `Any` | No | The customer's billing address. |
| `allowed_payment_method_types` | `list` | No | The list of payment method types allowed for use with this payment. |
| `amount` | `int` | Yes | Amount intended to be collected by this payment. |
| `amount_capturable` | `int` | No | Amount that can be captured from this PaymentIntent. |
| `amount_captured` | `int` | Yes | Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made). |
| `amount_details` | `Any` | No |  |
| `amount_due` | `int` | Yes | Final amount due at this time for this invoice. |
| `amount_overpaid` | `int` | Yes | Amount that was overpaid on the invoice. |
| `amount_paid` | `int` | Yes | The amount, in cents (or local equivalent), that was paid. |
| `amount_paid_off_stripe` | `int` | Yes | Amount, in cents (or local equivalent), that was paid on the invoice outside of Stripe. |
| `amount_received` | `int` | No | Amount that this PaymentIntent collects. |
| `amount_refunded` | `int` | Yes | Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued). |
| `amount_remaining` | `int` | Yes | The difference between amount_due and amount_paid, in cents (or local equivalent). |
| `amount_shipping` | `int` | Yes | This is the sum of all the shipping amounts. |
| `application` | `Any` | No | ID of the Connect application that created the charge. |
| `application_fee` | `Any` | No | The application fee (if any) for the charge. |
| `application_fee_amount` | `int` | No | The amount of the application fee (if any) requested for the charge. |
| `application_fee_percent` | `float` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `attempt_count` | `int` | Yes | Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. |
| `attempted` | `bool` | Yes | Whether an attempt has been made to pay the invoice. |
| `auto_advance` | `bool` | Yes | Controls whether Stripe performs [automatic collection](https://docs.stripe.com/invoicing/integration/automatic-advancement-collection) of the invoice. |
| `automatic_payment_methods` | `Any` | No | Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods) |
| `automatic_tax` | `dict` | Yes |  |
| `automatically_finalizes_at` | `int` | No | The time when this invoice is currently scheduled to be automatically finalized. |
| `balance` | `int` | No | The current balance, if any, that's stored on the customer in their default currency. |
| `balance_transaction` | `Any` | No | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_cycle_anchor` | `int` | Yes | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `Any` | No | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_details` | `dict` | Yes |  |
| `billing_mode` | `dict` | Yes | The billing mode of the subscription. |
| `billing_reason` | `str` | No | Indicates the reason why the invoice was created. |
| `billing_schedules` | `list` | Yes | Billing schedules for this subscription. |
| `billing_scheme` | `str` | Yes | Describes how to compute the price per period. |
| `billing_thresholds` | `Any` | No | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `business_name` | `str` | No | The customer's business name. |
| `calculated_statement_descriptor` | `str` | No | The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. |
| `cancel_at` | `int` | No | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | `bool` | Yes | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | `int` | No | Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. |
| `cancellation_details` | `Any` | No | Details about why this subscription was cancelled |
| `cancellation_reason` | `str` | No | Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`). |
| `capture_method` | `str` | No | Controls when the funds will be captured from the customer's account. |
| `captured` | `bool` | Yes | If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. |
| `cash_balance` | `Any` | No | The current funds being held by Stripe on behalf of the customer. |
| `client_secret` | `str` | No | The client secret of this PaymentIntent. |
| `collection_method` | `str` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_method` | `str` | No | Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment. |
| `confirmation_secret` | `Any` | No | The confirmation secret associated with this invoice. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | `dict` | No | Prices defined in each available currency option. |
| `custom_fields` | `list` | No | Custom fields displayed on the invoice. |
| `custom_unit_amount` | `Any` | No | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `customer` | `Any` | No | ID of the customer this charge is for if one exists. |
| `customer_account` | `str` | No | The ID of an Account representing a customer. |
| `customer_address` | `Any` | No | The customer's address. |
| `customer_email` | `str` | No | The customer's email. |
| `customer_name` | `str` | No | The customer's name. |
| `customer_phone` | `str` | No | The customer's phone number. |
| `customer_shipping` | `Any` | No | The customer's shipping information. |
| `customer_tax_exempt` | `str` | No | The customer's tax exempt status. |
| `customer_tax_ids` | `list` | No | The customer's tax IDs. |
| `days_until_due` | `int` | No | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | `Any` | No | ID of the default payment method for the invoice. |
| `default_price` | `Any` | No | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `default_source` | `Any` | No | ID of the default payment source for the customer. |
| `default_tax_rates` | `list` | Yes | The tax rates applied to this invoice, if any. |
| `delinquent` | `bool` | No | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `discount` | `Any` | No | Describes the current discount active on the customer, if there is one. |
| `discounts` | `list` | Yes | The discounts applied to the invoice. |
| `disputed` | `bool` | Yes | Whether the charge has been disputed. |
| `due_date` | `int` | No | The date on which payment for this invoice is due. |
| `effective_at` | `int` | No | The date when this invoice is in effect. |
| `email` | `str` | No | The customer's email address. |
| `ended_at` | `int` | No | If the subscription has ended, the date the subscription ended. |
| `ending_balance` | `int` | No | Ending customer balance after the invoice is finalized. |
| `excluded_payment_method_types` | `list` | No | The list of payment method types to exclude from use with this payment. |
| `failure_balance_transaction` | `Any` | No | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | `str` | No | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | `str` | No | Message to user further explaining reason for charge failure if available. |
| `footer` | `str` | No | Footer displayed on the invoice. |
| `fraud_details` | `Any` | No | Information on fraud assessments for the charge. |
| `from_invoice` | `Any` | No | Details of the invoice that was cloned. |
| `hooks` | `dict` | No |  |
| `hosted_invoice_url` | `str` | No | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `images` | `list` | Yes | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `individual_name` | `str` | No | The customer's individual name. |
| `invoice_credit_balance` | `dict` | No | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_pdf` | `str` | No | The link to download the PDF for the invoice. |
| `invoice_prefix` | `str` | No | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `dict` | No |  |
| `issuer` | `dict` | Yes |  |
| `items` | `dict` | Yes | List of subscription items, each with an attached price. |
| `last_finalization_error` | `Any` | No | The error encountered during the previous attempt to finalize the invoice. |
| `last_payment_error` | `Any` | No | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `Any` | No | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `latest_invoice` | `Any` | No | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `latest_revision` | `Any` | No | The ID of the most recent non-draft revision of this invoice |
| `lines` | `dict` | Yes | The individual line items that make up the invoice. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `str` | No | A lookup key used to retrieve prices dynamically from a static string. |
| `managed_payments` | `Any` | No | Settings for Managed Payments. |
| `marketing_features` | `list` | Yes | A list of up to 15 marketing features for this product. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `str` | No | The customer's full name or business name. |
| `next_action` | `Any` | No | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `next_invoice_sequence` | `int` | No | The suffix of the customer's next invoice number (for example, 0001). |
| `next_payment_attempt` | `int` | No | The time at which payment will next be attempted. |
| `next_pending_invoice_item_invoice` | `int` | No | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `nickname` | `str` | No | A brief description of the price, hidden from customers. |
| `number` | `str` | No | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | `str` | Yes | String representing the object's type. |
| `on_behalf_of` | `Any` | No | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | `Any` | No | Details about whether the payment was accepted, and why. |
| `package_dimensions` | `Any` | No | The dimensions of this product for shipping purposes. |
| `paid` | `bool` | Yes | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `parent` | `Any` | No | The parent that generated this invoice |
| `pause_collection` | `Any` | No | If specified, payment collection for this subscription will be paused. |
| `payment_details` | `dict` | No |  |
| `payment_intent` | `Any` | No | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `str` | No | ID of the payment method used in this charge. |
| `payment_method_configuration_details` | `Any` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_details` | `Any` | No | Details about the payment method at the time of the transaction. |
| `payment_method_options` | `Any` | No | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `list` | No | The list of payment method types (e.g. |
| `payment_record` | `Any` | No | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `payment_settings` | `dict` | Yes | Payment settings passed on to invoices created by the subscription. |
| `payments` | `dict` | Yes | Payments for this invoice. |
| `pending_invoice_item_interval` | `Any` | No | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `Any` | No | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `Any` | No | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `period_end` | `int` | Yes | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | `int` | Yes | The earliest timestamp at which invoice items can be associated with this invoice. |
| `phone` | `str` | No | The customer's phone number. |
| `post_payment_credit_notes_amount` | `int` | Yes | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | `int` | Yes | Total amount of all pre-payment credit notes issued for this invoice. |
| `preferred_locales` | `list` | No | The customer's preferred locales (languages), ordered by preference. |
| `presentment_details` | `dict` | Yes |  |
| `processing` | `Any` | No | If present, this property tells you about the processing state of the payment. |
| `product` | `Any` | Yes | The ID of the product this price is associated with. |
| `radar_options` | `dict` | No | Options to configure Radar. |
| `receipt_email` | `str` | No | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `str` | No | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `str` | No | This is the URL to view the receipt for this charge. |
| `recurring` | `Any` | No | The recurring components of a price such as `interval` and `usage_type`. |
| `refunded` | `bool` | Yes | Whether the charge has been fully refunded. |
| `refunds` | `dict` | Yes | A list of refunds that have been applied to the charge. |
| `rendering` | `Any` | No | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `review` | `Any` | No | ID of the review associated with this charge if one exists. |
| `schedule` | `Any` | No | The schedule attached to the subscription |
| `setup_future_usage` | `str` | No | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `shippable` | `bool` | No | Whether this product is shipped (i.e., physical goods). |
| `shipping` | `Any` | No | Shipping information for the charge. |
| `shipping_cost` | `Any` | No | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | `Any` | No | Shipping details for the invoice. |
| `source_transfer` | `Any` | No | The transfer ID which created this charge. |
| `sources` | `dict` | Yes | The customer's payment sources, if any. |
| `start_date` | `int` | Yes | Date when the subscription was first created. |
| `starting_balance` | `int` | Yes | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | `str` | No | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | `str` | No | Provides information about a card charge. |
| `status` | `str` | Yes | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `status_details` | `dict` | No | Describes changes to the subscription's status. |
| `status_transitions` | `dict` | Yes |  |
| `subscriptions` | `dict` | Yes | The customer's current subscriptions, if any. |
| `subtotal` | `int` | Yes | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `tax` | `dict` | Yes |  |
| `tax_behavior` | `str` | No | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tax_code` | `Any` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `Any` | No | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `tax_exempt` | `str` | No | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `dict` | Yes | The customer's tax IDs. |
| `test_clock` | `Any` | No | ID of the test clock that this customer belongs to. |
| `threshold_reason` | `dict` | Yes |  |
| `tiers` | `list` | No | Each element represents a pricing tier. |
| `tiers_mode` | `str` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `total` | `int` | Yes | Total after discounts and taxes. |
| `total_discount_amounts` | `list` | No | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `int` | No | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `list` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `list` | No | The aggregate tax information of all line items. |
| `transfer` | `Any` | No | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `transfer_data` | `Any` | No | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `transfer_group` | `str` | No | A string that identifies this transaction as part of a group. |
| `transform_quantity` | `Any` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_end` | `int` | No | If the subscription has a trial, the end of that trial. |
| `trial_settings` | `Any` | No | Settings related to subscription trials. |
| `trial_start` | `int` | No | If the subscription has a trial, the beginning of that trial. |
| `type` | `str` | Yes | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | `int` | No | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | `str` | No | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |
| `unit_label` | `str` | No | A label that represents units of this product. |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `url` | `str` | No | A URL of a publicly-accessible webpage for this product. |
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Search().list({"query": "example"})
for search in results:
    print(search)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretEntity

```python
secret = client.Secret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `deleted` | `bool` | No | If true, indicates that this secret has been deleted |
| `expires_at` | `int` | No | The Unix timestamp for the expiry time of the secret, after which the secret deletes. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `str` | Yes | A name for the secret that's unique within the scope. |
| `object` | `str` | Yes | String representing the object's type. |
| `payload` | `str` | No | The plaintext secret value to be stored. |
| `scope` | `dict` | Yes |  |
| `type` | `str` | Yes | The secret scope type. |
| `user` | `str` | No | The user ID, if type is set to "user" |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Secret().create({
    "created": 1,  # int
    "id": "example_id",  # str
    "livemode": True,  # bool
    "name": "example_name",  # str
    "object": "example_object",  # str
    "scope": {},  # dict
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Secret().list({"scope": {}})
for secret in results:
    print(secret)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Secret().load({"name": "name", "scope": {}})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SessionEntity

```python
session = client.Session()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `Any` | No | The account holder for whom accounts are collected in this session. |
| `accounts` | `dict` | Yes | The accounts that were collected as part of this Session. |
| `adaptive_pricing` | `Any` | No | Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing). |
| `after_expiration` | `Any` | No | When set, provides configuration for actions to take if this Checkout Session expires. |
| `allow_promotion_codes` | `bool` | No | Enables user redeemable promotion codes. |
| `allowed_payment_method_types` | `list` | No | A list of the types of payment methods (e.g., `card`) this Checkout Session can accept. |
| `amount_subtotal` | `int` | No | Total of all items before discounts or taxes are applied. |
| `amount_total` | `int` | No | Total of all items after discounts and taxes are applied. |
| `automatic_tax` | `dict` | Yes |  |
| `bank_account_token` | `dict` | Yes | Tokenization is the process Stripe uses to collect sensitive card or bank account details, or personally identifiable information (PII), directly from your customers in a secure manner. |
| `billing_address_collection` | `str` | No | Describes whether Checkout should collect the customer's billing address. |
| `branding_settings` | `dict` | Yes |  |
| `cancel_url` | `str` | No | If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. |
| `client_reference_id` | `str` | No | A unique string to reference the Checkout Session. |
| `client_secret` | `str` | No | The client secret of your Checkout Session. |
| `collected_information` | `Any` | No | Information about the customer collected within the Checkout Session. |
| `configuration` | `Any` | Yes | The configuration used by this session, describing the features available. |
| `consent` | `Any` | No | Results of `consent_collection` for this session. |
| `consent_collection` | `Any` | No | When set, provides configuration for the Checkout Session to gather active consent from customers. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_conversion` | `Any` | No | Currency conversion details for [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing) sessions created before 2025-03-31. |
| `custom_fields` | `list` | Yes | Collect additional information from your customer using custom fields. |
| `custom_text` | `dict` | Yes |  |
| `customer` | `Any` | No | The ID of the customer for this Session. |
| `customer_account` | `str` | No | The ID of the account for this Session. |
| `customer_creation` | `str` | No | Configure whether a Checkout Session creates a Customer when the Checkout Session completes. |
| `customer_details` | `Any` | No | The customer details including the customer's tax exempt status and the customer's tax IDs. |
| `customer_email` | `str` | No | If provided, this value will be used when the Customer object is created. |
| `discounts` | `list` | No | List of coupons and promotion codes attached to the Checkout Session. |
| `excluded_payment_method_types` | `list` | No | A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session. |
| `expires_at` | `int` | Yes | The timestamp at which the Checkout Session will expire. |
| `filters` | `dict` | No |  |
| `flow` | `Any` | No | Information about a specific flow for the customer to go through. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `integration_identifier` | `str` | No | The integration identifier for this Checkout Session. |
| `invoice` | `Any` | No | ID of the invoice created by the Checkout Session, if it exists. |
| `invoice_creation` | `Any` | No | Details on the state of invoice creation for the Checkout Session. |
| `limits` | `dict` | Yes |  |
| `line_items` | `dict` | Yes | The line items purchased by the customer. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `locale` | `str` | No | The IETF language tag of the locale Checkout is displayed in. |
| `managed_payments` | `Any` | No | Settings for Managed Payments for this Checkout Session and resulting [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/object). |
| `manual_entry` | `dict` | No |  |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mode` | `str` | Yes | The mode of the Checkout Session. |
| `name_collection` | `dict` | No |  |
| `object` | `str` | Yes | String representing the object's type. |
| `on_behalf_of` | `str` | No | The account for which the session was created on behalf of. |
| `optional_items` | `list` | No | The optional items presented to the customer at checkout. |
| `origin_context` | `str` | No | Where the user is coming from. |
| `payment_intent` | `Any` | No | The ID of the PaymentIntent for Checkout Sessions in `payment` mode. |
| `payment_link` | `Any` | No | The ID of the Payment Link that created this Session. |
| `payment_method_collection` | `str` | No | Configure whether a Checkout Session should collect a payment method for sessions with mode `payment`. |
| `payment_method_configuration_details` | `Any` | No | Information about the payment method configuration used for this Checkout session if using dynamic payment methods. |
| `payment_method_options` | `Any` | No | Payment-method-specific configuration for the PaymentIntent or SetupIntent of this CheckoutSession. |
| `payment_method_types` | `list` | Yes | A list of the types of payment methods (e.g. |
| `payment_status` | `str` | Yes | The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`. |
| `permissions` | `Any` | No | This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object. |
| `phone_number_collection` | `dict` | Yes |  |
| `prefetch` | `list` | No | Data features requested to be retrieved upon account creation. |
| `presentment_details` | `dict` | Yes |  |
| `recovered_from` | `str` | No | The ID of the original expired Checkout Session that triggered the recovery flow. |
| `redirect_on_completion` | `str` | No | This parameter applies to `ui_mode: embedded_page`. |
| `return_url` | `str` | No | Applies to Checkout Sessions with `ui_mode: embedded_page` or `ui_mode: elements`. |
| `saved_payment_method_options` | `Any` | No | Controls saved payment method settings for the session. |
| `setup_intent` | `Any` | No | The ID of the SetupIntent for Checkout Sessions in `setup` mode. |
| `shipping_address_collection` | `Any` | No | When set, provides configuration for Checkout to collect a shipping address from a customer. |
| `shipping_cost` | `Any` | No | The details of the customer cost of shipping, including the customer chosen ShippingRate. |
| `shipping_options` | `list` | Yes | The shipping rate options applied to this Session. |
| `status` | `str` | No | The status of the Checkout Session, one of `open`, `complete`, or `expired`. |
| `submit_type` | `str` | No | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. |
| `subscription` | `Any` | No | The ID of the [Subscription](https://docs.stripe.com/api/subscriptions) for Checkout Sessions in `subscription` mode. |
| `success_url` | `str` | No | The URL the customer will be directed to after the payment or subscription creation is successful. |
| `tax_id_collection` | `dict` | Yes |  |
| `total_details` | `int` | No | Tax and discount details for the computed total amount. |
| `ui_mode` | `str` | No | The UI mode of the Session. |
| `url` | `str` | No | The URL to the Checkout Session. |
| `wallet_options` | `Any` | No | Wallet-specific configuration for this Checkout Session. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Session().create({
    "id": "example_id",  # str
    "accounts": {},  # dict
    "automatic_tax": {},  # dict
    "bank_account_token": {},  # dict
    "branding_settings": {},  # dict
    "configuration": "example_configuration",  # Any
    "created": 1,  # int
    "custom_fields": [],  # list
    "custom_text": {},  # dict
    "expires_at": 1,  # int
    "limits": {},  # dict
    "line_items": {},  # dict
    "livemode": True,  # bool
    "mode": "example_mode",  # str
    "object": "example_object",  # str
    "payment_method_types": [],  # list
    "payment_status": "example_payment_status",  # str
    "phone_number_collection": {},  # dict
    "presentment_details": {},  # dict
    "shipping_options": [],  # list
    "tax_id_collection": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Session().list()
for session in results:
    print(session)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Session().load({"session": "session"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SessionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SettingEntity

```python
setting = client.Setting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `defaults` | `dict` | Yes |  |
| `head_office` | `Any` | No | The place where your business is located. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `status` | `str` | Yes | The status of the Tax `Settings`. |
| `status_details` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Setting().create({
    "defaults": {},  # dict
    "livemode": True,  # bool
    "object": "example_object",  # str
    "status": "example_status",  # str
    "status_details": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Setting().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SettlementEntity

```python
settlement = client.Settlement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Settlement().create({
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Settlement().load({"id": "settlement_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SettlementEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SetupAttemptEntity

```python
setup_attempt = client.SetupAttempt()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `Any` | No | The value of [application](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation. |
| `attach_to_self` | `bool` | No | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `Any` | No | The value of [customer](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation. |
| `customer_account` | `str` | No | The value of [customer_account](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer_account) on the SetupIntent at the time of this confirmation. |
| `flow_directions` | `list` | No | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `on_behalf_of` | `Any` | No | The value of [on_behalf_of](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation. |
| `payment_method` | `Any` | Yes | ID of the payment method used with this SetupAttempt. |
| `payment_method_details` | `dict` | Yes |  |
| `setup_error` | `Any` | No | The error encountered during this attempt to confirm the SetupIntent, if any. |
| `setup_intent` | `Any` | Yes | ID of the SetupIntent that this attempt belongs to. |
| `status` | `str` | Yes | Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`. |
| `usage` | `str` | Yes | The value of [usage](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SetupAttempt().list({"setup_intent": "example"})
for setup_attempt in results:
    print(setup_attempt)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SetupAttemptEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SetupIntentEntity

```python
setup_intent = client.SetupIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_payment_method_types` | `list` | No | The list of payment method types to allow for this SetupIntent. |
| `application` | `Any` | No | ID of the Connect application that created the SetupIntent. |
| `attach_to_self` | `bool` | No | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `automatic_payment_methods` | `Any` | No | Settings for dynamic payment methods compatible with this Setup Intent |
| `cancellation_reason` | `str` | No | Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`. |
| `client_secret` | `str` | No | The client secret of this SetupIntent. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `Any` | No | ID of the Customer this SetupIntent belongs to, if one exists. |
| `customer_account` | `str` | No | ID of the Account this SetupIntent belongs to, if one exists. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | `list` | No | Payment method types that are excluded from this SetupIntent. |
| `flow_directions` | `list` | No | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `last_setup_error` | `Any` | No | The error encountered in the previous SetupIntent confirmation. |
| `latest_attempt` | `Any` | No | The most recent SetupAttempt for this SetupIntent. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `Any` | No |  |
| `mandate` | `Any` | No | ID of the multi use Mandate generated by the SetupIntent. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `Any` | No | If present, this property tells you what actions you need to take in order for your customer to continue payment setup. |
| `object` | `str` | Yes | String representing the object's type. |
| `on_behalf_of` | `Any` | No | The account (if any) for which the setup is intended. |
| `payment_method` | `Any` | No | ID of the payment method used with this SetupIntent. |
| `payment_method_configuration_details` | `Any` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this Setup Intent. |
| `payment_method_options` | `Any` | No | Payment method-specific configuration for this SetupIntent. |
| `payment_method_types` | `list` | Yes | The list of payment method types (e.g. |
| `single_use_mandate` | `Any` | No | ID of the single_use Mandate generated by the SetupIntent. |
| `status` | `str` | Yes | [Status](https://docs.stripe.com/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`. |
| `usage` | `str` | Yes | Indicates how the payment method is intended to be used in the future. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SetupIntent().create({
    "id": "example_id",  # str
    "created": 1,  # int
    "livemode": True,  # bool
    "object": "example_object",  # str
    "payment_method_types": [],  # list
    "status": "example_status",  # str
    "usage": "example_usage",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SetupIntent().list()
for setup_intent in results:
    print(setup_intent)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SetupIntent().load({"id": "setup_intent_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SetupIntentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ShippingRateEntity

```python
shipping_rate = client.ShippingRate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the shipping rate can be used for new purchases. |
| `created` | `int` | Yes | Time at which the object was created. |
| `delivery_estimate` | `Any` | No | The estimated range for how long shipping will take, meant to be displayable to the customer. |
| `display_name` | `str` | No | The name of the shipping rate, meant to be displayable to the customer. |
| `fixed_amount` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `tax_behavior` | `str` | No | Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. |
| `tax_code` | `Any` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `type` | `str` | Yes | The type of calculation to use on the shipping rate. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ShippingRate().create({
    "id": "example_id",  # str
    "active": True,  # bool
    "created": 1,  # int
    "fixed_amount": {},  # dict
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ShippingRate().list()
for shipping_rate in results:
    print(shipping_rate)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ShippingRate().load({"id": "shipping_rate_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShippingRateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SigmaApiQueryEntity

```python
sigma_api_query = client.SigmaApiQuery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `str` | Yes | The name of the query. |
| `object` | `str` | Yes | String representing the object's type. |
| `sql` | `str` | Yes | The sql statement for the query. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SigmaApiQuery().create({
    "id": "example_id",  # str
    "created": 1,  # int
    "livemode": True,  # bool
    "name": "example_name",  # str
    "object": "example_object",  # str
    "sql": "example_sql",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SigmaApiQueryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SourceEntity

```python
source = client.Source()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ach_credit_transfer` | `dict` | No |  |
| `ach_debit` | `dict` | No |  |
| `acss_debit` | `dict` | No |  |
| `alipay` | `dict` | No |  |
| `allow_redisplay` | `bool` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `amount` | `int` | No | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. |
| `au_becs_debit` | `dict` | No |  |
| `bancontact` | `dict` | No |  |
| `card` | `dict` | No |  |
| `card_present` | `dict` | No |  |
| `client_secret` | `str` | Yes | The client secret of the source. |
| `code_verification` | `dict` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | No | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. |
| `customer` | `str` | No | The ID of the customer to which this source is attached. |
| `data` | `list` | Yes | Details about each object. |
| `eps` | `dict` | No |  |
| `flow` | `str` | Yes | The authentication `flow` of the source. |
| `giropay` | `dict` | No |  |
| `has_more` | `bool` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `ideal` | `dict` | No |  |
| `klarna` | `dict` | No |  |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `multibanco` | `dict` | No |  |
| `object` | `str` | Yes | String representing the object's type. |
| `owner` | `Any` | No | Information about the owner of the payment instrument that may be used or required by particular source types. |
| `p24` | `dict` | No |  |
| `receiver` | `dict` | Yes |  |
| `redirect` | `dict` | Yes |  |
| `sepa_debit` | `dict` | No |  |
| `sofort` | `dict` | No |  |
| `source_order` | `dict` | Yes |  |
| `statement_descriptor` | `str` | No | Extra information about a source. |
| `status` | `str` | Yes | The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. |
| `three_d_secure` | `dict` | No |  |
| `type` | `str` | Yes | The `type` of the source. |
| `url` | `str` | Yes | The URL where this list can be accessed. |
| `usage` | `str` | No | Either `reusable` or `single_use`. |
| `wechat` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Source().create({
    "id": "example_id",  # str
    "client_secret": "example_client_secret",  # str
    "code_verification": {},  # dict
    "created": 1,  # int
    "data": [],  # list
    "flow": "example_flow",  # str
    "has_more": True,  # bool
    "livemode": True,  # bool
    "object": "example_object",  # str
    "receiver": {},  # dict
    "redirect": {},  # dict
    "source_order": {},  # dict
    "status": "example_status",  # str
    "type": "example_type",  # str
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Source().list({"customer_id": "example"})
for source in results:
    print(source)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Source().load({"id": "source_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Source().remove({"id": "source_id", "customer_id": "customer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SourceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SourceMandateNotificationEntity

```python
source_mandate_notification = client.SourceMandateNotification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `dict` | No |  |
| `amount` | `int` | No | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. |
| `bacs_debit` | `dict` | No |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `reason` | `str` | Yes | The reason of the mandate notification. |
| `sepa_debit` | `dict` | No |  |
| `source` | `dict` | Yes | `Source` objects allow you to accept a variety of payment methods. |
| `status` | `str` | Yes | The status of the mandate notification. |
| `type` | `str` | Yes | The type of source this mandate notification is attached to. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SourceMandateNotification().load({"id": "source_mandate_notification_id", "source_id": "source_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SourceMandateNotificationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SourceTransactionEntity

```python
source_transaction = client.SourceTransaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ach_credit_transfer` | `dict` | No |  |
| `amount` | `int` | Yes | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver. |
| `chf_credit_transfer` | `dict` | No |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `gbp_credit_transfer` | `dict` | No |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `paper_check` | `dict` | No |  |
| `sepa_credit_transfer` | `dict` | No |  |
| `source` | `str` | Yes | The ID of the source this transaction is attached to. |
| `status` | `str` | Yes | The status of the transaction, one of `succeeded`, `pending`, or `failed`. |
| `type` | `str` | Yes | The type of source this transaction is attached to. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SourceTransaction().list({"id": "example_id"})
for source_transaction in results:
    print(source_transaction)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SourceTransaction().load({"id": "source_transaction_id", "source_id": "source_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SourceTransactionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionEntity

```python
subscription = client.Subscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `Any` | No | ID of the Connect Application that created the subscription. |
| `application_fee_percent` | `float` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `dict` | Yes |  |
| `billing_cycle_anchor` | `int` | Yes | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `Any` | No | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_mode` | `dict` | Yes | The billing mode of the subscription. |
| `billing_schedules` | `list` | Yes | Billing schedules for this subscription. |
| `billing_thresholds` | `Any` | No | Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period |
| `cancel_at` | `int` | No | A date in the future at which the subscription will automatically get canceled |
| `cancel_at_period_end` | `bool` | Yes | Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. |
| `canceled_at` | `int` | No | If the subscription has been canceled, the date of that cancellation. |
| `cancellation_details` | `Any` | No | Details about why this subscription was cancelled |
| `collection_method` | `str` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `Any` | Yes | ID of the customer who owns the subscription. |
| `customer_account` | `str` | No | ID of the account representing the customer who owns the subscription. |
| `days_until_due` | `int` | No | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | `Any` | No | ID of the default payment method for the subscription. |
| `default_source` | `Any` | No | ID of the default payment source for the subscription. |
| `default_tax_rates` | `list` | No | The tax rates that will apply to any subscription item that does not have `tax_rates` set. |
| `description` | `str` | No | The subscription's description, meant to be displayable to the customer. |
| `discounts` | `list` | Yes | The discounts applied to the subscription. |
| `ended_at` | `int` | No | If the subscription has ended, the date the subscription ended. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `invoice_settings` | `dict` | Yes |  |
| `items` | `dict` | Yes | List of subscription items, each with an attached price. |
| `latest_invoice` | `Any` | No | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `Any` | No | Settings for Managed Payments for this Subscription and resulting [Invoices](/api/invoices/object) and [PaymentIntents](/api/payment_intents/object). |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_pending_invoice_item_invoice` | `int` | No | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `object` | `str` | Yes | String representing the object's type. |
| `on_behalf_of` | `Any` | No | The account (if any) the charge was made on behalf of for charges associated with this subscription. |
| `pause_collection` | `Any` | No | If specified, payment collection for this subscription will be paused. |
| `payment_settings` | `Any` | No | Payment settings passed on to invoices created by the subscription. |
| `pending_invoice_item_interval` | `Any` | No | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `Any` | No | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `Any` | No | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `presentment_details` | `dict` | Yes |  |
| `schedule` | `Any` | No | The schedule attached to the subscription |
| `start_date` | `int` | Yes | Date when the subscription was first created. |
| `status` | `str` | Yes | Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`. |
| `status_details` | `dict` | Yes | Describes changes to the subscription's status. |
| `test_clock` | `Any` | No | ID of the test clock this subscription belongs to. |
| `transfer_data` | `Any` | No | The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices. |
| `trial_end` | `int` | No | If the subscription has a trial, the end of that trial. |
| `trial_settings` | `Any` | No | Settings related to subscription trials. |
| `trial_start` | `int` | No | If the subscription has a trial, the beginning of that trial. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Subscription().create({
    "id": "example_id",  # str
    "automatic_tax": {},  # dict
    "billing_cycle_anchor": 1,  # int
    "billing_mode": {},  # dict
    "billing_schedules": [],  # list
    "cancel_at_period_end": True,  # bool
    "collection_method": "example_collection_method",  # str
    "created": 1,  # int
    "currency": "example_currency",  # str
    "customer": "example_customer",  # Any
    "discounts": [],  # list
    "invoice_settings": {},  # dict
    "items": {},  # dict
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "presentment_details": {},  # dict
    "start_date": 1,  # int
    "status": "example_status",  # str
    "status_details": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Subscription().list()
for subscription in results:
    print(subscription)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Subscription().load({"id": "subscription_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Subscription().remove({"id": "subscription_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionItemEntity

```python
subscription_item = client.SubscriptionItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billed_until` | `int` | No | The time period the subscription item has been billed for. |
| `billing_thresholds` | `Any` | No | Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period |
| `created` | `int` | Yes | Time at which the object was created. |
| `current_period_end` | `int` | Yes | The end time of this subscription item's current billing period. |
| `current_period_start` | `int` | Yes | The start time of this subscription item's current billing period. |
| `current_trial` | `Any` | No | The current trial that is applied to this subscription item. |
| `discounts` | `list` | Yes | The discounts applied to the subscription item. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `price` | `dict` | Yes | Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products. |
| `quantity` | `int` | No | The [quantity](https://docs.stripe.com/subscriptions/quantities) of the plan to which the customer should be subscribed. |
| `subscription` | `str` | Yes | The `subscription` this `subscription_item` belongs to. |
| `tax_rates` | `list` | No | The tax rates which apply to this `subscription_item`. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubscriptionItem().create({
    "id": "example_id",  # str
    "created": 1,  # int
    "current_period_end": 1,  # int
    "current_period_start": 1,  # int
    "discounts": [],  # list
    "metadata": {},  # dict
    "object": "example_object",  # str
    "price": {},  # dict
    "subscription": "example_subscription",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriptionItem().list({"subscription": "example"})
for subscription_item in results:
    print(subscription_item)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SubscriptionItem().load({"id": "subscription_item_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionScheduleEntity

```python
subscription_schedule = client.SubscriptionSchedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `Any` | No | ID of the Connect Application that created the schedule. |
| `billing_mode` | `dict` | Yes | The billing mode of the subscription. |
| `canceled_at` | `int` | No | Time at which the subscription schedule was canceled. |
| `completed_at` | `int` | No | Time at which the subscription schedule was completed. |
| `created` | `int` | Yes | Time at which the object was created. |
| `current_phase` | `Any` | No | Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`. |
| `customer` | `Any` | Yes | ID of the customer who owns the subscription schedule. |
| `customer_account` | `str` | No | ID of the account who owns the subscription schedule. |
| `default_settings` | `dict` | Yes |  |
| `end_behavior` | `str` | Yes | Behavior of the subscription schedule and underlying subscription when it ends. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `pause_schedules` | `list` | No | The pause schedules for this subscription schedule. |
| `phases` | `list` | Yes | Configuration for the subscription schedule's phases. |
| `released_at` | `int` | No | Time at which the subscription schedule was released. |
| `released_subscription` | `str` | No | ID of the subscription once managed by the subscription schedule (if it is released). |
| `status` | `str` | Yes | The present status of the subscription schedule. |
| `subscription` | `Any` | No | ID of the subscription managed by the subscription schedule. |
| `test_clock` | `Any` | No | ID of the test clock this subscription schedule belongs to. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubscriptionSchedule().create({
    "id": "example_id",  # str
    "billing_mode": {},  # dict
    "created": 1,  # int
    "customer": "example_customer",  # Any
    "default_settings": {},  # dict
    "end_behavior": "example_end_behavior",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "phases": [],  # list
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriptionSchedule().list()
for subscription_schedule in results:
    print(subscription_schedule)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SubscriptionSchedule().load({"id": "subscription_schedule_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionScheduleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SupplierEntity

```python
supplier = client.Supplier()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | Unique identifier for the object. |
| `info_url` | `str` | Yes | Link to a webpage to learn more about the supplier. |
| `livemode` | `bool` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `locations` | `list` | Yes | The locations in which this supplier operates. |
| `name` | `str` | Yes | Name of this carbon removal supplier. |
| `object` | `str` | Yes | String representing the object’s type. |
| `removal_pathway` | `str` | Yes | The scientific pathway used for carbon removal. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Supplier().list()
for supplier in results:
    print(supplier)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Supplier().load({"id": "supplier_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SupplierEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TaxCodeEntity

```python
tax_code = client.TaxCode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | Yes | A detailed description of which types of products the tax code represents. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `name` | `str` | Yes | A short name for the tax code. |
| `object` | `str` | Yes | String representing the object's type. |
| `requirements` | `Any` | No | An object that describes more information about the tax location required for this tax code. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TaxCode().list()
for tax_code in results:
    print(tax_code)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TaxCode().load({"id": "tax_code_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaxCodeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TaxIdEntity

```python
tax_id = client.TaxId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `str` | No | Two-letter ISO code representing the country of the tax ID. |
| `created` | `int` | Yes | Time at which the object was created. |
| `customer` | `Any` | No | ID of the customer. |
| `customer_account` | `str` | No | ID of the Account representing the customer. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `owner` | `Any` | No | The account or customer the tax ID belongs to. |
| `type` | `str` | Yes | Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`,… |
| `value` | `str` | Yes | Value of the tax ID. |
| `verification` | `Any` | No | Tax ID verification information. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TaxId().create({
    "created": 1,  # int
    "id": "example_id",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "type": "example_type",  # str
    "value": "example_value",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TaxId().list()
for tax_id in results:
    print(tax_id)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TaxId().load({"id": "tax_id_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TaxId().remove({"id": "tax_id_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaxIdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TaxRateEntity

```python
tax_rate = client.TaxRate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Defaults to `true`. |
| `country` | `str` | No | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | `int` | Yes | Time at which the object was created. |
| `description` | `str` | No | An arbitrary string attached to the tax rate for your internal use only. |
| `display_name` | `str` | Yes | The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page. |
| `effective_percentage` | `float` | No | Actual/effective tax rate percentage out of 100. |
| `flat_amount` | `Any` | No | The amount of the tax rate when the `rate_type` is `flat_amount`. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `inclusive` | `bool` | Yes | This specifies if the tax rate is inclusive or exclusive. |
| `jurisdiction` | `str` | No | The jurisdiction for the tax rate. |
| `jurisdiction_level` | `str` | No | The level of the jurisdiction that imposes this tax rate. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `percentage` | `float` | Yes | Tax rate percentage out of 100. |
| `rate_type` | `str` | No | Indicates the type of tax rate applied to the taxable amount. |
| `state` | `str` | No | [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. |
| `tax_type` | `str` | No | The high-level tax type, such as `vat` or `sales_tax`. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TaxRate().create({
    "id": "example_id",  # str
    "active": True,  # bool
    "created": 1,  # int
    "display_name": "example_display_name",  # str
    "inclusive": True,  # bool
    "livemode": True,  # bool
    "object": "example_object",  # str
    "percentage": 1,  # float
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TaxRate().list()
for tax_rate in results:
    print(tax_rate)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TaxRate().load({"id": "tax_rate_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaxRateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TestClockEntity

```python
test_clock = client.TestClock()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advancing` | `dict` | Yes |  |
| `created` | `int` | Yes | Time at which the object was created. |
| `deletes_after` | `int` | Yes | Time at which this clock is scheduled to auto delete. |
| `frozen_time` | `int` | Yes | Time at which all objects belonging to this clock are frozen. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `str` | No | The custom name supplied at creation. |
| `object` | `str` | Yes | String representing the object's type. |
| `status` | `str` | Yes | The status of the Test Clock. |
| `status_details` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TestClock().create({
    "advancing": {},  # dict
    "created": 1,  # int
    "deletes_after": 1,  # int
    "frozen_time": 1,  # int
    "id": "example_id",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "status": "example_status",  # str
    "status_details": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TestClock().list()
for test_clock in results:
    print(test_clock)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TestClock().load({"id": "test_clock_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TestClock().remove({"id": "test_clock_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TestClockEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TokenEntity

```python
token = client.Token()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bank_account` | `dict` | Yes | These bank accounts are payment methods on `Customer` objects. |
| `card` | `Any` | Yes | Card associated with this token. |
| `client_ip` | `str` | No | IP address of the client that generates the token. |
| `created` | `int` | Yes | Time at which the object was created. |
| `device_fingerprint` | `str` | No | The hashed ID derived from the device ID from the card network associated with the token. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `last4` | `str` | No | The last four digits of the token. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `str` | Yes | The token service provider / card network associated with the token. |
| `network_data` | `dict` | Yes |  |
| `network_updated_at` | `int` | Yes | Time at which the token was last updated by the card network. |
| `object` | `str` | Yes | String representing the object's type. |
| `status` | `str` | Yes | The usage state of the token. |
| `type` | `str` | Yes | Type of the token: `account`, `bank_account`, `card`, or `pii`. |
| `used` | `bool` | Yes | Determines if you have already used this token (you can only use tokens once). |
| `wallet_provider` | `str` | No | The digital wallet for this token, if one was used. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Token().create({
    "id": "example_id",  # str
    "bank_account": {},  # dict
    "card": "example_card",  # Any
    "created": 1,  # int
    "livemode": True,  # bool
    "network": "example_network",  # str
    "network_data": {},  # dict
    "network_updated_at": 1,  # int
    "object": "example_object",  # str
    "status": "example_status",  # str
    "type": "example_type",  # str
    "used": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Token().list({"card": "example"})
for token in results:
    print(token)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Token().load({"id": "token_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TopupEntity

```python
topup = client.Topup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount transferred. |
| `balance_transaction` | `Any` | No | ID of the balance transaction that describes the impact of this top-up on your account balance. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `expected_availability_date` | `int` | No | Date the funds are expected to arrive in your Stripe account for payouts. |
| `failure_code` | `str` | No | Error code explaining reason for top-up failure if available (see [the errors section](/api/errors) for a list of codes). |
| `failure_message` | `str` | No | Message to user further explaining reason for top-up failure if available. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `initiated_by` | `str` | No | Indicates whether the top-up was initiated by Stripe or by the user. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `payment_method` | `Any` | No | The ID of a PaymentMethod representing the payment method used for the top-up. |
| `payment_method_options` | `Any` | No | Payment-method-specific configuration for this top-up. |
| `source` | `Any` | No | The source field is deprecated. |
| `statement_descriptor` | `str` | No | Extra information about a top-up. |
| `status` | `str` | Yes | The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`. |
| `transfer_group` | `str` | No | A string that identifies this top-up as part of a group. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Topup().create({
    "id": "example_id",  # str
    "amount": 1,  # int
    "created": 1,  # int
    "currency": "example_currency",  # str
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Topup().list()
for topup in results:
    print(topup)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Topup().load({"id": "topup_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TransactionEntity

```python
transaction = client.Transaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `str` | Yes | The ID of the Financial Connections Account this transaction belongs to. |
| `amount` | `int` | Yes | The transaction amount, which will be reflected in your balance. |
| `amount_details` | `Any` | No | Detailed breakdown of amount components. |
| `authorization` | `Any` | No | The `Authorization` object that led to this transaction. |
| `balance_impact` | `dict` | Yes | Change to a FinancialAccount's balance |
| `balance_transaction` | `Any` | No | ID of the [balance transaction](https://docs.stripe.com/api/balance_transactions) associated with this transaction. |
| `card` | `Any` | Yes | The card used to make this transaction. |
| `cardholder` | `Any` | No | The cardholder to whom this transaction belongs. |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `str` | No | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `dict` | Yes |  |
| `description` | `str` | Yes | An arbitrary string attached to the object. |
| `dispute` | `Any` | No | If you've disputed the transaction, the ID of the dispute. |
| `entries` | `dict` | Yes | A list of TransactionEntries that are part of this Transaction. |
| `financial_account` | `str` | Yes | The FinancialAccount associated with this object. |
| `flow` | `str` | No | ID of the flow that created the Transaction. |
| `flow_details` | `Any` | No | Details of the flow that created the Transaction. |
| `flow_type` | `str` | Yes | Type of the flow that created the Transaction. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `line_items` | `dict` | Yes | The tax collected or refunded, by line item. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `int` | Yes | The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `merchant_currency` | `str` | Yes | The currency with which the merchant is taking payment. |
| `merchant_data` | `dict` | Yes |  |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `Any` | No | Details about the transaction, such as processing dates, set by the card network. |
| `object` | `str` | Yes | String representing the object's type. |
| `posted_at` | `int` | No | Time at which this transaction posted. |
| `purchase_details` | `Any` | No | Additional purchase information that is optionally provided by the merchant. |
| `reference` | `str` | Yes | A custom unique identifier, such as 'myOrder_123'. |
| `reversal` | `Any` | No | If `type=reversal`, contains information about what was reversed. |
| `ship_from_details` | `Any` | No | The details of the ship from location, such as the address. |
| `shipping_cost` | `Any` | No | The shipping cost details for the transaction. |
| `status` | `str` | Yes | Status of the Transaction. |
| `status_transitions` | `dict` | Yes |  |
| `tax_date` | `int` | Yes | The calculation uses the tax rules and rates that are in effect at this timestamp. |
| `token` | `str` | No | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this transaction. |
| `transacted_at` | `int` | Yes | Time at which the transaction was transacted. |
| `transaction_refresh` | `str` | Yes | The token of the transaction refresh that last updated or created this transaction. |
| `treasury` | `Any` | No | [Treasury](https://docs.stripe.com/api/treasury) details related to this transaction if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts |
| `type` | `str` | Yes | The nature of the transaction. |
| `updated` | `int` | Yes | Time at which the object was last updated. |
| `void_at` | `int` | No | Time at which this transaction was voided. |
| `wallet` | `str` | No | The digital wallet used for this transaction. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Transaction().create({
    "id": "example_id",  # str
    "account": "example_account",  # str
    "amount": 1,  # int
    "balance_impact": {},  # dict
    "card": "example_card",  # Any
    "created": 1,  # int
    "currency": "example_currency",  # str
    "customer_details": {},  # dict
    "description": "example_description",  # str
    "entries": {},  # dict
    "financial_account": "example_financial_account",  # str
    "flow_type": "example_flow_type",  # str
    "line_items": {},  # dict
    "livemode": True,  # bool
    "merchant_amount": 1,  # int
    "merchant_currency": "example_merchant_currency",  # str
    "merchant_data": {},  # dict
    "metadata": {},  # dict
    "object": "example_object",  # str
    "reference": "example_reference",  # str
    "status": "example_status",  # str
    "status_transitions": {},  # dict
    "tax_date": 1,  # int
    "transacted_at": 1,  # int
    "transaction_refresh": "example_transaction_refresh",  # str
    "type": "example_type",  # str
    "updated": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Transaction().list({"financial_account": "example"})
for transaction in results:
    print(transaction)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Transaction().load({"id": "transaction_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransactionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TransactionEntryEntity

```python
transaction_entry = client.TransactionEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance_impact` | `dict` | Yes | Change to a FinancialAccount's balance |
| `created` | `int` | Yes | Time at which the object was created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `effective_at` | `int` | Yes | When the TransactionEntry will impact the FinancialAccount's balance. |
| `financial_account` | `str` | Yes | The FinancialAccount associated with this object. |
| `flow` | `str` | No | Token of the flow associated with the TransactionEntry. |
| `flow_details` | `Any` | No | Details of the flow associated with the TransactionEntry. |
| `flow_type` | `str` | Yes | Type of the flow associated with the TransactionEntry. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `transaction` | `Any` | Yes | The Transaction associated with this object. |
| `type` | `str` | Yes | The specific money movement that generated the TransactionEntry. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TransactionEntry().list({"financial_account": "example"})
for transaction_entry in results:
    print(transaction_entry)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TransactionEntry().load({"id": "transaction_entry_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransactionEntryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TransferEntity

```python
transfer = client.Transfer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int` | Yes | Amount in cents (or local equivalent) to be transferred. |
| `amount_reversed` | `int` | Yes | Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued). |
| `balance_transaction` | `Any` | No | Balance transaction that describes the impact of this transfer on your account balance. |
| `created` | `int` | Yes | Time that this record of the transfer was first created. |
| `currency` | `str` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `str` | No | An arbitrary string attached to the object. |
| `destination` | `Any` | No | ID of the Stripe account the transfer was sent to. |
| `destination_payment` | `Any` | No | If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `reversals` | `dict` | Yes | A list of reversals that have been applied to the transfer. |
| `reversed` | `bool` | Yes | Whether the transfer has been fully reversed. |
| `source_transaction` | `Any` | No | ID of the charge that was used to fund the transfer. |
| `source_type` | `str` | No | The source balance this transfer came from. |
| `transfer_group` | `str` | No | A string that identifies this transaction as part of a group. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Transfer().create({
    "id": "example_id",  # str
    "amount": 1,  # int
    "amount_reversed": 1,  # int
    "created": 1,  # int
    "currency": "example_currency",  # str
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "reversals": {},  # dict
    "reversed": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Transfer().list()
for transfer in results:
    print(transfer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Transfer().load({"id": "transfer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransferEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TrialOfferEntity

```python
trial_offer = client.TrialOffer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the trial offer is active. |
| `duration` | `dict` | Yes |  |
| `end_behavior` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `nickname` | `str` | No | A brief description of the trial offer, hidden from customers. |
| `object` | `str` | Yes | String representing the object's type. |
| `price` | `float` | Yes | The price during the trial offer. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TrialOffer().create({
    "id": "example_id",  # str
    "active": True,  # bool
    "duration": {},  # dict
    "end_behavior": {},  # dict
    "livemode": True,  # bool
    "object": "example_object",  # str
    "price": 1,  # float
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TrialOffer().list()
for trial_offer in results:
    print(trial_offer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TrialOffer().load({"id": "trial_offer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TrialOfferEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ValueListEntity

```python
value_list = client.ValueList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `str` | Yes | The name of the value list for use in rules. |
| `created` | `int` | Yes | Time at which the object was created. |
| `created_by` | `str` | Yes | The name or email address of the user who created this value list. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `item_type` | `str` | Yes | The type of items in the value list. |
| `list_items` | `dict` | Yes | List of items contained within this value list. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `str` | Yes | The name of the value list. |
| `object` | `str` | Yes | String representing the object's type. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ValueList().create({
    "id": "example_id",  # str
    "alias": "example_alias",  # str
    "created": 1,  # int
    "created_by": "example_created_by",  # str
    "item_type": "example_item_type",  # str
    "list_items": {},  # dict
    "livemode": True,  # bool
    "metadata": {},  # dict
    "name": "example_name",  # str
    "object": "example_object",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ValueList().list()
for value_list in results:
    print(value_list)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ValueList().load({"id": "value_list_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ValueList().remove({"id": "value_list_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ValueListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ValueListItemEntity

```python
value_list_item = client.ValueListItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | Yes | Time at which the object was created. |
| `created_by` | `str` | Yes | The name or email address of the user who added this item to the value list. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `value` | `str` | Yes | The value of the item. |
| `value_list` | `str` | Yes | The identifier of the value list this item belongs to. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ValueListItem().create({
    "created": 1,  # int
    "created_by": "example_created_by",  # str
    "id": "example_id",  # str
    "livemode": True,  # bool
    "object": "example_object",  # str
    "value": "example_value",  # str
    "value_list": "example_value_list",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ValueListItem().list({"value_list": "example"})
for value_list_item in results:
    print(value_list_item)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ValueListItem().load({"id": "value_list_item_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ValueListItem().remove({"id": "value_list_item_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ValueListItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VerificationReportEntity

```python
verification_report = client.VerificationReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_reference_id` | `str` | No | A string to reference this user. |
| `created` | `int` | Yes | Time at which the object was created. |
| `document` | `dict` | Yes | Result from a document check |
| `email` | `dict` | Yes | Result from a email check |
| `id` | `str` | Yes | Unique identifier for the object. |
| `id_number` | `dict` | Yes | Result from an id_number check |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `str` | Yes | String representing the object's type. |
| `options` | `dict` | No |  |
| `phone` | `dict` | Yes | Result from a phone check |
| `selfie` | `dict` | Yes | Result from a selfie check |
| `type` | `str` | Yes | Type of report. |
| `verification_flow` | `str` | No | The configuration token of a verification flow from the dashboard. |
| `verification_session` | `str` | No | ID of the VerificationSession that created this report. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.VerificationReport().list()
for verification_report in results:
    print(verification_report)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.VerificationReport().load({"id": "verification_report_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VerificationReportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VerificationSessionEntity

```python
verification_session = client.VerificationSession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_reference_id` | `str` | No | A string to reference this user. |
| `client_secret` | `str` | No | The short-lived client secret used by Stripe.js to [show a verification modal](https://docs.stripe.com/js/identity/modal) inside your app. |
| `created` | `int` | Yes | Time at which the object was created. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `last_error` | `Any` | No | If present, this property tells you the last error encountered when processing the verification. |
| `last_verification_report` | `Any` | No | ID of the most recent VerificationReport. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `options` | `Any` | No | A set of options for the session’s verification checks. |
| `provided_details` | `Any` | No | Details provided about the user being verified. |
| `redaction` | `Any` | No | Redaction status of this VerificationSession. |
| `related_customer` | `str` | No | Customer ID |
| `related_customer_account` | `str` | No | The ID of the Account representing a customer. |
| `related_person` | `dict` | Yes |  |
| `status` | `str` | Yes | Status of this VerificationSession. |
| `type` | `str` | Yes | The type of [verification check](https://docs.stripe.com/identity/verification-checks) to be performed. |
| `url` | `str` | No | The short-lived URL that you use to redirect a user to Stripe to submit their identity information. |
| `verification_flow` | `str` | No | The configuration token of a verification flow from the dashboard. |
| `verified_outputs` | `Any` | No | The user’s verified data. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.VerificationSession().create({
    "id": "example_id",  # str
    "created": 1,  # int
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "related_person": {},  # dict
    "status": "example_status",  # str
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.VerificationSession().list()
for verification_session in results:
    print(verification_session)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.VerificationSession().load({"id": "verification_session_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VerificationSessionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEndpointEntity

```python
webhook_endpoint = client.WebhookEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_version` | `str` | No | The API version that events are rendered as for this webhook endpoint. |
| `application` | `str` | No | The ID of the associated Connect application. |
| `created` | `int` | Yes | Time at which the object was created. |
| `description` | `str` | No | An optional description of what the webhook is used for. |
| `enabled_events` | `list` | Yes | The list of events to enable for this endpoint. |
| `id` | `str` | Yes | Unique identifier for the object. |
| `livemode` | `bool` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `dict` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `str` | Yes | String representing the object's type. |
| `secret` | `str` | No | The endpoint's secret, used to generate [webhook signatures](https://docs.stripe.com/webhooks/signatures). |
| `status` | `str` | Yes | The status of the webhook. |
| `url` | `str` | Yes | The URL of the webhook endpoint. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WebhookEndpoint().create({
    "id": "example_id",  # str
    "created": 1,  # int
    "enabled_events": [],  # list
    "livemode": True,  # bool
    "metadata": {},  # dict
    "object": "example_object",  # str
    "status": "example_status",  # str
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WebhookEndpoint().list()
for webhook_endpoint in results:
    print(webhook_endpoint)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WebhookEndpoint().load({"id": "webhook_endpoint_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEndpointEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = StripeSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

