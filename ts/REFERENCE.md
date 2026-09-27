# Stripe TypeScript SDK Reference

Complete API reference for the Stripe TypeScript SDK.


## StripeSDK

### Constructor

```ts
new StripeSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.secret` | `string` | API secret for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `StripeSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = StripeSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `StripeSDK` instance in test mode.


### Instance Methods

#### `Account(data?: object)`

Create a new `Account` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountEntity` instance.

#### `AccountLink(data?: object)`

Create a new `AccountLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountLinkEntity` instance.

#### `AccountOwner(data?: object)`

Create a new `AccountOwner` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountOwnerEntity` instance.

#### `AccountSession(data?: object)`

Create a new `AccountSession` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountSessionEntity` instance.

#### `ActiveEntitlement(data?: object)`

Create a new `ActiveEntitlement` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActiveEntitlementEntity` instance.

#### `Alert(data?: object)`

Create a new `Alert` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertEntity` instance.

#### `ApplePayDomain(data?: object)`

Create a new `ApplePayDomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApplePayDomainEntity` instance.

#### `ApplicationFee(data?: object)`

Create a new `ApplicationFee` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApplicationFeeEntity` instance.

#### `Association(data?: object)`

Create a new `Association` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssociationEntity` instance.

#### `Authentication(data?: object)`

Create a new `Authentication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthenticationEntity` instance.

#### `Authorization(data?: object)`

Create a new `Authorization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthorizationEntity` instance.

#### `Balance(data?: object)`

Create a new `Balance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BalanceEntity` instance.

#### `BalanceSetting(data?: object)`

Create a new `BalanceSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BalanceSettingEntity` instance.

#### `BalanceTransaction(data?: object)`

Create a new `BalanceTransaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BalanceTransactionEntity` instance.

#### `BankAccount(data?: object)`

Create a new `BankAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BankAccountEntity` instance.

#### `Calculation(data?: object)`

Create a new `Calculation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CalculationEntity` instance.

#### `Capability(data?: object)`

Create a new `Capability` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CapabilityEntity` instance.

#### `Card(data?: object)`

Create a new `Card` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CardEntity` instance.

#### `Cardholder(data?: object)`

Create a new `Cardholder` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CardholderEntity` instance.

#### `CashBalance(data?: object)`

Create a new `CashBalance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CashBalanceEntity` instance.

#### `CashBalanceTransaction(data?: object)`

Create a new `CashBalanceTransaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CashBalanceTransactionEntity` instance.

#### `Charge(data?: object)`

Create a new `Charge` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChargeEntity` instance.

#### `Configuration(data?: object)`

Create a new `Configuration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConfigurationEntity` instance.

#### `ConfirmationToken(data?: object)`

Create a new `ConfirmationToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConfirmationTokenEntity` instance.

#### `ConnectionToken(data?: object)`

Create a new `ConnectionToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConnectionTokenEntity` instance.

#### `CountrySpec(data?: object)`

Create a new `CountrySpec` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CountrySpecEntity` instance.

#### `Coupon(data?: object)`

Create a new `Coupon` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CouponEntity` instance.

#### `CreditBalanceSummary(data?: object)`

Create a new `CreditBalanceSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreditBalanceSummaryEntity` instance.

#### `CreditBalanceTransaction(data?: object)`

Create a new `CreditBalanceTransaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreditBalanceTransactionEntity` instance.

#### `CreditGrant(data?: object)`

Create a new `CreditGrant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreditGrantEntity` instance.

#### `CreditNote(data?: object)`

Create a new `CreditNote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreditNoteEntity` instance.

#### `CreditNoteLine(data?: object)`

Create a new `CreditNoteLine` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreditNoteLineEntity` instance.

#### `CreditReversal(data?: object)`

Create a new `CreditReversal` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreditReversalEntity` instance.

#### `Customer(data?: object)`

Create a new `Customer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerEntity` instance.

#### `CustomerBalanceTransaction(data?: object)`

Create a new `CustomerBalanceTransaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerBalanceTransactionEntity` instance.

#### `CustomerSession(data?: object)`

Create a new `CustomerSession` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerSessionEntity` instance.

#### `DebitReversal(data?: object)`

Create a new `DebitReversal` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DebitReversalEntity` instance.

#### `DeletedAccount(data?: object)`

Create a new `DeletedAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedAccountEntity` instance.

#### `DeletedApplePayDomain(data?: object)`

Create a new `DeletedApplePayDomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedApplePayDomainEntity` instance.

#### `DeletedCoupon(data?: object)`

Create a new `DeletedCoupon` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedCouponEntity` instance.

#### `DeletedExternalAccount(data?: object)`

Create a new `DeletedExternalAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedExternalAccountEntity` instance.

#### `DeletedInvoiceitem(data?: object)`

Create a new `DeletedInvoiceitem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedInvoiceitemEntity` instance.

#### `DeletedPerson(data?: object)`

Create a new `DeletedPerson` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedPersonEntity` instance.

#### `DeletedPlan(data?: object)`

Create a new `DeletedPlan` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedPlanEntity` instance.

#### `DeletedProductFeature(data?: object)`

Create a new `DeletedProductFeature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedProductFeatureEntity` instance.

#### `DeletedSubscriptionItem(data?: object)`

Create a new `DeletedSubscriptionItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedSubscriptionItemEntity` instance.

#### `DeletedWebhookEndpoint(data?: object)`

Create a new `DeletedWebhookEndpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedWebhookEndpointEntity` instance.

#### `Discount(data?: object)`

Create a new `Discount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DiscountEntity` instance.

#### `Dispute(data?: object)`

Create a new `Dispute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DisputeEntity` instance.

#### `Domain(data?: object)`

Create a new `Domain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainEntity` instance.

#### `EarlyFraudWarning(data?: object)`

Create a new `EarlyFraudWarning` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EarlyFraudWarningEntity` instance.

#### `EphemeralKey(data?: object)`

Create a new `EphemeralKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EphemeralKeyEntity` instance.

#### `Event(data?: object)`

Create a new `Event` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EventEntity` instance.

#### `ExchangeRate(data?: object)`

Create a new `ExchangeRate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExchangeRateEntity` instance.

#### `ExternalAccount(data?: object)`

Create a new `ExternalAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExternalAccountEntity` instance.

#### `Feature(data?: object)`

Create a new `Feature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeatureEntity` instance.

#### `FeedbackOption(data?: object)`

Create a new `FeedbackOption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeedbackOptionEntity` instance.

#### `File(data?: object)`

Create a new `File` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FileEntity` instance.

#### `FileLink(data?: object)`

Create a new `FileLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FileLinkEntity` instance.

#### `FinancialAccount(data?: object)`

Create a new `FinancialAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FinancialAccountEntity` instance.

#### `FinancialAccountFeature(data?: object)`

Create a new `FinancialAccountFeature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FinancialAccountFeatureEntity` instance.

#### `FundCashBalance(data?: object)`

Create a new `FundCashBalance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FundCashBalanceEntity` instance.

#### `FundingInstruction(data?: object)`

Create a new `FundingInstruction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FundingInstructionEntity` instance.

#### `History(data?: object)`

Create a new `History` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HistoryEntity` instance.

#### `InboundTransfer(data?: object)`

Create a new `InboundTransfer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InboundTransferEntity` instance.

#### `Install(data?: object)`

Create a new `Install` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InstallEntity` instance.

#### `Invoice(data?: object)`

Create a new `Invoice` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InvoiceEntity` instance.

#### `InvoicePayment(data?: object)`

Create a new `InvoicePayment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InvoicePaymentEntity` instance.

#### `InvoiceRenderingTemplate(data?: object)`

Create a new `InvoiceRenderingTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InvoiceRenderingTemplateEntity` instance.

#### `Invoiceitem(data?: object)`

Create a new `Invoiceitem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InvoiceitemEntity` instance.

#### `Line(data?: object)`

Create a new `Line` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LineEntity` instance.

#### `LineItem(data?: object)`

Create a new `LineItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LineItemEntity` instance.

#### `LinkedAccount(data?: object)`

Create a new `LinkedAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LinkedAccountEntity` instance.

#### `LinkedAccountOwner(data?: object)`

Create a new `LinkedAccountOwner` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LinkedAccountOwnerEntity` instance.

#### `Location(data?: object)`

Create a new `Location` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LocationEntity` instance.

#### `LoginLink(data?: object)`

Create a new `LoginLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LoginLinkEntity` instance.

#### `Mandate(data?: object)`

Create a new `Mandate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MandateEntity` instance.

#### `Meter(data?: object)`

Create a new `Meter` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MeterEntity` instance.

#### `MeterEvent(data?: object)`

Create a new `MeterEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MeterEventEntity` instance.

#### `MeterEventAdjustment(data?: object)`

Create a new `MeterEventAdjustment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MeterEventAdjustmentEntity` instance.

#### `MeterEventSummary(data?: object)`

Create a new `MeterEventSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MeterEventSummaryEntity` instance.

#### `OnboardingLink(data?: object)`

Create a new `OnboardingLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OnboardingLinkEntity` instance.

#### `Order(data?: object)`

Create a new `Order` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrderEntity` instance.

#### `OutboundPayment(data?: object)`

Create a new `OutboundPayment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OutboundPaymentEntity` instance.

#### `OutboundTransfer(data?: object)`

Create a new `OutboundTransfer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OutboundTransferEntity` instance.

#### `PaymentAttemptRecord(data?: object)`

Create a new `PaymentAttemptRecord` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentAttemptRecordEntity` instance.

#### `PaymentEvaluation(data?: object)`

Create a new `PaymentEvaluation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentEvaluationEntity` instance.

#### `PaymentIntent(data?: object)`

Create a new `PaymentIntent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentIntentEntity` instance.

#### `PaymentIntentAmountDetailsLineItem(data?: object)`

Create a new `PaymentIntentAmountDetailsLineItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentIntentAmountDetailsLineItemEntity` instance.

#### `PaymentLink(data?: object)`

Create a new `PaymentLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentLinkEntity` instance.

#### `PaymentMethod(data?: object)`

Create a new `PaymentMethod` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentMethodEntity` instance.

#### `PaymentMethodConfiguration(data?: object)`

Create a new `PaymentMethodConfiguration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentMethodConfigurationEntity` instance.

#### `PaymentMethodDomain(data?: object)`

Create a new `PaymentMethodDomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentMethodDomainEntity` instance.

#### `PaymentRecord(data?: object)`

Create a new `PaymentRecord` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentRecordEntity` instance.

#### `Payout(data?: object)`

Create a new `Payout` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayoutEntity` instance.

#### `Person(data?: object)`

Create a new `Person` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonEntity` instance.

#### `PersonalizationDesign(data?: object)`

Create a new `PersonalizationDesign` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonalizationDesignEntity` instance.

#### `PhysicalBundle(data?: object)`

Create a new `PhysicalBundle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PhysicalBundleEntity` instance.

#### `Plan(data?: object)`

Create a new `Plan` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PlanEntity` instance.

#### `Price(data?: object)`

Create a new `Price` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PriceEntity` instance.

#### `Product(data?: object)`

Create a new `Product` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductEntity` instance.

#### `ProductFeature(data?: object)`

Create a new `ProductFeature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductFeatureEntity` instance.

#### `PromotionCode(data?: object)`

Create a new `PromotionCode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PromotionCodeEntity` instance.

#### `Quote(data?: object)`

Create a new `Quote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `QuoteEntity` instance.

#### `QuoteComputedUpfrontLineItem(data?: object)`

Create a new `QuoteComputedUpfrontLineItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `QuoteComputedUpfrontLineItemEntity` instance.

#### `QuotePdf(data?: object)`

Create a new `QuotePdf` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `QuotePdfEntity` instance.

#### `Reader(data?: object)`

Create a new `Reader` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReaderEntity` instance.

#### `ReceivedCredit(data?: object)`

Create a new `ReceivedCredit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReceivedCreditEntity` instance.

#### `ReceivedDebit(data?: object)`

Create a new `ReceivedDebit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReceivedDebitEntity` instance.

#### `Refund(data?: object)`

Create a new `Refund` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RefundEntity` instance.

#### `Registration(data?: object)`

Create a new `Registration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RegistrationEntity` instance.

#### `ReportRun(data?: object)`

Create a new `ReportRun` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReportRunEntity` instance.

#### `ReportType(data?: object)`

Create a new `ReportType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReportTypeEntity` instance.

#### `Request(data?: object)`

Create a new `Request` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RequestEntity` instance.

#### `Reversal(data?: object)`

Create a new `Reversal` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReversalEntity` instance.

#### `Review(data?: object)`

Create a new `Review` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReviewEntity` instance.

#### `ScheduledQueryRun(data?: object)`

Create a new `ScheduledQueryRun` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduledQueryRunEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `Secret(data?: object)`

Create a new `Secret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretEntity` instance.

#### `Session(data?: object)`

Create a new `Session` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SessionEntity` instance.

#### `Setting(data?: object)`

Create a new `Setting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SettingEntity` instance.

#### `Settlement(data?: object)`

Create a new `Settlement` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SettlementEntity` instance.

#### `SetupAttempt(data?: object)`

Create a new `SetupAttempt` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SetupAttemptEntity` instance.

#### `SetupIntent(data?: object)`

Create a new `SetupIntent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SetupIntentEntity` instance.

#### `ShippingRate(data?: object)`

Create a new `ShippingRate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ShippingRateEntity` instance.

#### `SigmaApiQuery(data?: object)`

Create a new `SigmaApiQuery` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SigmaApiQueryEntity` instance.

#### `Source(data?: object)`

Create a new `Source` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SourceEntity` instance.

#### `SourceMandateNotification(data?: object)`

Create a new `SourceMandateNotification` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SourceMandateNotificationEntity` instance.

#### `SourceTransaction(data?: object)`

Create a new `SourceTransaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SourceTransactionEntity` instance.

#### `Subscription(data?: object)`

Create a new `Subscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionEntity` instance.

#### `SubscriptionItem(data?: object)`

Create a new `SubscriptionItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionItemEntity` instance.

#### `SubscriptionSchedule(data?: object)`

Create a new `SubscriptionSchedule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionScheduleEntity` instance.

#### `Supplier(data?: object)`

Create a new `Supplier` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SupplierEntity` instance.

#### `TaxCode(data?: object)`

Create a new `TaxCode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TaxCodeEntity` instance.

#### `TaxId(data?: object)`

Create a new `TaxId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TaxIdEntity` instance.

#### `TaxRate(data?: object)`

Create a new `TaxRate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TaxRateEntity` instance.

#### `TestClock(data?: object)`

Create a new `TestClock` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TestClockEntity` instance.

#### `Token(data?: object)`

Create a new `Token` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TokenEntity` instance.

#### `Topup(data?: object)`

Create a new `Topup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TopupEntity` instance.

#### `Transaction(data?: object)`

Create a new `Transaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TransactionEntity` instance.

#### `TransactionEntry(data?: object)`

Create a new `TransactionEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TransactionEntryEntity` instance.

#### `Transfer(data?: object)`

Create a new `Transfer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TransferEntity` instance.

#### `TrialOffer(data?: object)`

Create a new `TrialOffer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TrialOfferEntity` instance.

#### `ValueList(data?: object)`

Create a new `ValueList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ValueListEntity` instance.

#### `ValueListItem(data?: object)`

Create a new `ValueListItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ValueListItemEntity` instance.

#### `VerificationReport(data?: object)`

Create a new `VerificationReport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VerificationReportEntity` instance.

#### `VerificationSession(data?: object)`

Create a new `VerificationSession` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VerificationSessionEntity` instance.

#### `WebhookEndpoint(data?: object)`

Create a new `WebhookEndpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEndpointEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `StripeSDK.test()`.

**Returns:** `StripeSDK` instance in test mode.


---

## AccountEntity

```ts
const account = client.Account()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `any` | No | The account holder that this account belongs to. |
| `account_numbers` | `any[]` | No | Details about the account numbers. |
| `balance` | `any` | No | The most recent information about the account's balance. |
| `balance_refresh` | `any` | No | The state of the most recent attempt to refresh the account balance. |
| `business_profile` | `any` | No | Business information about the account. |
| `business_type` | `string` | No | The business type. |
| `capabilities` | `Record<string, any>` | No |  |
| `category` | `string` | Yes | The type of the account. |
| `charges_enabled` | `boolean` | No | Whether the account can process charges. |
| `company` | `Record<string, any>` | No |  |
| `controller` | `Record<string, any>` | Yes |  |
| `country` | `string` | No | The account's country. |
| `created` | `number` | Yes | Time at which the object was created. |
| `default_currency` | `string` | No | Three-letter ISO currency code representing the default currency for the account. |
| `details_submitted` | `boolean` | No | Whether account details have been submitted. |
| `display_name` | `string` | No | A human-readable name that has been assigned to this account, either by the account holder or by the institution. |
| `email` | `string` | No | An email address associated with the account. |
| `external_accounts` | `Record<string, any>` | Yes | External accounts (bank accounts and debit cards) currently attached to this account. |
| `future_requirements` | `Record<string, any>` | No |  |
| `groups` | `any` | No | The groups associated with the account. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `individual` | `Record<string, any>` | Yes | This is an object representing a person associated with a Stripe account. |
| `institution_name` | `string` | Yes | The name of the institution that holds this account. |
| `last4` | `string` | No | The last 4 digits of the account number. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `ownership` | `any` | No | The most recent information about the account's owners. |
| `ownership_refresh` | `any` | No | The state of the most recent attempt to refresh the account owners. |
| `payouts_enabled` | `boolean` | No | Whether the funds in this account can be paid out. |
| `permissions` | `any[]` | No | The list of permissions granted by this account. |
| `requirements` | `Record<string, any>` | No |  |
| `settings` | `any` | No | Options for customizing how the account functions within Stripe. |
| `status` | `string` | Yes | The status of the link to the account. |
| `status_details` | `Record<string, any>` | No |  |
| `subcategory` | `string` | Yes | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `any[]` | No | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `any[]` | Yes | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `tos_acceptance` | `Record<string, any>` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `disconnect` | `/v1/financial_connections/accounts/{account}/disconnect` | `client.Account().create({ $action: 'disconnect', ... })` |
| `disconnect` | `/v1/linked_accounts/{account}/disconnect` | `client.Account().create({ $action: 'disconnect', ... })` |
| `refresh` | `/v1/financial_connections/accounts/{account}/refresh` | `client.Account().create({ $action: 'refresh', ... })` |
| `refresh` | `/v1/linked_accounts/{account}/refresh` | `client.Account().create({ $action: 'refresh', ... })` |
| `reject` | `/v1/accounts/{account}/reject` | `client.Account().create({ $action: 'reject', ... })` |
| `subscribe` | `/v1/financial_connections/accounts/{account}/subscribe` | `client.Account().create({ $action: 'subscribe', ... })` |
| `unreject` | `/v1/accounts/{account}/unreject` | `client.Account().create({ $action: 'unreject', ... })` |
| `unsubscribe` | `/v1/financial_connections/accounts/{account}/unsubscribe` | `client.Account().create({ $action: 'unsubscribe', ... })` |

An action returns that action's OWN response, which is not necessarily a
Account record — check the API definition for its shape.

```ts
const result = await client.Account().create({
  $action: 'disconnect',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Account().create({
  id: 'example_id',
  category: 'example_category',
  controller: {},
  created: 1,
  external_accounts: {},
  individual: {},
  institution_name: 'example_institution_name',
  livemode: true,
  object: 'example_object',
  status: 'example_status',
  subcategory: 'example_subcategory',
  supported_payment_method_types: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Account().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Account().load({ account: 'account' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountLinkEntity

```ts
const account_link = client.AccountLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `expires_at` | `number` | Yes | The timestamp at which this account link will expire. |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | Yes | The URL for the account link. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AccountLink().create({
  created: 1,
  expires_at: 1,
  object: 'example_object',
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountOwnerEntity

```ts
const account_owner = client.AccountOwner()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AccountOwner().list({ id: "example", ownership: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountOwnerEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountSessionEntity

```ts
const account_session = client.AccountSession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_management` | `Record<string, any>` | Yes |  |
| `account_onboarding` | `Record<string, any>` | Yes |  |
| `balance_report` | `Record<string, any>` | Yes |  |
| `balances` | `Record<string, any>` | Yes |  |
| `disputes_list` | `Record<string, any>` | Yes |  |
| `documents` | `Record<string, any>` | Yes |  |
| `financial_account` | `Record<string, any>` | Yes |  |
| `financial_account_transactions` | `Record<string, any>` | Yes |  |
| `instant_payouts_promotion` | `Record<string, any>` | Yes |  |
| `issuing_card` | `Record<string, any>` | Yes |  |
| `issuing_cards_list` | `Record<string, any>` | Yes |  |
| `notification_banner` | `Record<string, any>` | Yes |  |
| `payment_details` | `Record<string, any>` | Yes |  |
| `payment_disputes` | `Record<string, any>` | Yes |  |
| `payment_method_settings` | `Record<string, any>` | Yes |  |
| `payments` | `Record<string, any>` | Yes |  |
| `payout_details` | `Record<string, any>` | Yes |  |
| `payout_reconciliation_report` | `Record<string, any>` | Yes |  |
| `payouts` | `Record<string, any>` | Yes |  |
| `payouts_list` | `Record<string, any>` | Yes |  |
| `tax_registrations` | `Record<string, any>` | Yes |  |
| `tax_settings` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AccountSession().create({
  account_management: {},
  account_onboarding: {},
  balance_report: {},
  balances: {},
  disputes_list: {},
  documents: {},
  financial_account: {},
  financial_account_transactions: {},
  instant_payouts_promotion: {},
  issuing_card: {},
  issuing_cards_list: {},
  notification_banner: {},
  payment_details: {},
  payment_disputes: {},
  payment_method_settings: {},
  payments: {},
  payout_details: {},
  payout_reconciliation_report: {},
  payouts: {},
  payouts_list: {},
  tax_registrations: {},
  tax_settings: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountSessionEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActiveEntitlementEntity

```ts
const active_entitlement = client.ActiveEntitlement()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ActiveEntitlement().list({ customer: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActiveEntitlement().load({ id: 'active_entitlement_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActiveEntitlementEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertEntity

```ts
const alert = client.Alert()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `activate` | `/v1/billing/alerts/{id}/activate` | `client.Alert().create({ $action: 'activate', ... })` |
| `archive` | `/v1/billing/alerts/{id}/archive` | `client.Alert().create({ $action: 'archive', ... })` |
| `deactivate` | `/v1/billing/alerts/{id}/deactivate` | `client.Alert().create({ $action: 'deactivate', ... })` |

An action returns that action's OWN response, which is not necessarily a
Alert record — check the API definition for its shape.

```ts
const result = await client.Alert().create({
  $action: 'activate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Alert().create({
  alert_type: 'example_alert_type',
  id: 'example_id',
  livemode: true,
  object: 'example_object',
  title: 'example_title',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Alert().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Alert().load({ id: 'alert_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApplePayDomainEntity

```ts
const apple_pay_domain = client.ApplePayDomain()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApplePayDomain().create({
  created: 1,
  domain_name: 'example_domain_name',
  id: 'example_id',
  livemode: true,
  object: 'example_object',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApplePayDomain().load({ id: 'apple_pay_domain_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApplePayDomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApplicationFeeEntity

```ts
const application_fee = client.ApplicationFee()
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
| `refunds` | `Record<string, any>` | Yes | A list of refunds that have been applied to the fee. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `refund` | `/v1/application_fees/{id}/refund` | `client.ApplicationFee().create({ $action: 'refund', ... })` |

An action returns that action's OWN response, which is not necessarily a
ApplicationFee record — check the API definition for its shape.

```ts
const result = await client.ApplicationFee().create({
  $action: 'refund',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApplicationFee().create({
  id: 'example_id',
  account: 'example_account',
  amount: 1,
  amount_refunded: 1,
  application: 'example_application',
  charge: 'example_charge',
  created: 1,
  currency: 'example_currency',
  livemode: true,
  object: 'example_object',
  refunded: true,
  refunds: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApplicationFee().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApplicationFee().load({ id: 'application_fee_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApplicationFeeEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssociationEntity

```ts
const association = client.Association()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `find` | `/v1/tax/associations/find` | `client.Association().list({ $action: 'find', ... })` |

An action returns that action's OWN response, which is not necessarily a
Association record — check the API definition for its shape.

```ts
const result = await client.Association().list({
  $action: 'find',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Association().list({ payment_intent: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssociationEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthenticationEntity

```ts
const authentication = client.Authentication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acquirer_details` | `Record<string, any>` | No | Contains additional details about the acquirer for a 3DS Authentication. |
| `amount` | `number` | No | The amount for this 3DS Authentication. |
| `challenge_url` | `string` | No | The URL for presenting a challenge to your cardholder, present if status is requires_challenge. |
| `channel` | `Record<string, any>` | Yes | Contains details on the channel used (browser, 3RI) for a standalone 3DS Authentication. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `directory_server` | `string` | Yes | The 3DS directory server with which this 3DS Authentication was processed. |
| `fingerprinting_url` | `string` | No | The URL for performing issuer fingerprinting, present if fingerprinting is supported for the given payment method. |
| `flow_preference` | `Record<string, any>` | Yes | Contains details of the flow preference used for a standalone 3DS Authentication. |
| `future_usage` | `Record<string, any>` | Yes | Contains information about the future authorisations related to this authentication |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `message_category` | `string` | Yes | Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `outcome` | `string` | No | The outcome of this 3DS Authentication. |
| `outcome_details` | `Record<string, any>` | Yes | Contains details on the result for a standalone 3DS Authentication. |
| `payment_method` | `any` | Yes | ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication. |
| `reason` | `string` | No | The reason for invoking this 3DS Authentication. |
| `shipping_address` | `Record<string, any>` | No | Contains details about the shipping address for a 3DS Authentication. |
| `status` | `string` | Yes | Status of this Authentication. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/v1/three_d_secure/authentications/{authentication}/cancel` | `client.Authentication().create({ $action: 'cancel', ... })` |
| `submit` | `/v1/three_d_secure/authentications/{authentication}/submit` | `client.Authentication().create({ $action: 'submit', ... })` |

An action returns that action's OWN response, which is not necessarily a
Authentication record — check the API definition for its shape.

```ts
const result = await client.Authentication().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Authentication().create({
  channel: {},
  created: 1,
  directory_server: 'example_directory_server',
  flow_preference: {},
  future_usage: {},
  id: 'example_id',
  livemode: true,
  message_category: 'example_message_category',
  object: 'example_object',
  outcome_details: {},
  payment_method: 'example_payment_method',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Authentication().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Authentication().load({ id: 'authentication_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthorizationEntity

```ts
const authorization = client.Authorization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | The total amount that was authorized or rejected. |
| `amount_details` | `any` | No | Detailed breakdown of amount components. |
| `approved` | `boolean` | Yes | Whether the authorization has been approved. |
| `authorization_method` | `string` | Yes | How the card details were provided. |
| `balance_transactions` | `any[]` | Yes | List of balance transactions associated with this authorization. |
| `card` | `Record<string, any>` | Yes | You can [create physical or virtual cards](https://docs.stripe.com/issuing) that are issued to cardholders. |
| `card_presence` | `string` | No | Whether the card was present at the point of sale for the authorization. |
| `cardholder` | `any` | No | The cardholder to whom this authorization belongs. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | The currency of the cardholder. |
| `fleet` | `any` | No | Fleet-specific information for authorizations using Fleet cards. |
| `fraud_challenges` | `any[]` | No | Fraud challenges sent to the cardholder, if this authorization was declined for fraud risk reasons. |
| `fuel` | `any` | No | Information about fuel that was purchased with this transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `number` | Yes | The total amount that was authorized or rejected. |
| `merchant_currency` | `string` | Yes | The local currency that was presented to the cardholder for the authorization. |
| `merchant_data` | `Record<string, any>` | Yes |  |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `any` | No | Details about the authorization, such as identifiers, set by the card network. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending_request` | `any` | No | The pending authorization request. |
| `request_history` | `any[]` | Yes | History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. |
| `status` | `string` | Yes | The current status of the authorization in its lifecycle. |
| `token` | `string` | No | [Token](https://docs.stripe.com/api/issuing/tokens/object) object used for this authorization. |
| `transactions` | `any[]` | Yes | List of [transactions](https://docs.stripe.com/api/issuing/transactions) associated with this authorization. |
| `treasury` | `any` | No | [Treasury](https://docs.stripe.com/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://docs.stripe.com/api/treasury/financial_accounts). |
| `verification_data` | `Record<string, any>` | Yes |  |
| `verified_by_fraud_challenge` | `boolean` | No | Whether the authorization bypassed fraud risk checks because the cardholder has previously completed a fraud challenge on a similar high-risk authorization from the same merchant. |
| `wallet` | `string` | No | The digital wallet used for this transaction. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `approve` | `/v1/issuing/authorizations/{authorization}/approve` | `client.Authorization().create({ $action: 'approve', ... })` |
| `capture` | `/v1/test_helpers/issuing/authorizations/{authorization}/capture` | `client.Authorization().create({ $action: 'capture', ... })` |
| `decline` | `/v1/issuing/authorizations/{authorization}/decline` | `client.Authorization().create({ $action: 'decline', ... })` |
| `expire` | `/v1/test_helpers/issuing/authorizations/{authorization}/expire` | `client.Authorization().create({ $action: 'expire', ... })` |
| `finalize_amount` | `/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount` | `client.Authorization().create({ $action: 'finalize_amount', ... })` |
| `increment` | `/v1/test_helpers/issuing/authorizations/{authorization}/increment` | `client.Authorization().create({ $action: 'increment', ... })` |
| `reverse` | `/v1/test_helpers/issuing/authorizations/{authorization}/reverse` | `client.Authorization().create({ $action: 'reverse', ... })` |

An action returns that action's OWN response, which is not necessarily a
Authorization record — check the API definition for its shape.

```ts
const result = await client.Authorization().create({
  $action: 'approve',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Authorization().create({
  id: 'example_id',
  amount: 1,
  approved: true,
  authorization_method: 'example_authorization_method',
  balance_transactions: [],
  card: {},
  created: 1,
  currency: 'example_currency',
  livemode: true,
  merchant_amount: 1,
  merchant_currency: 'example_merchant_currency',
  merchant_data: {},
  metadata: {},
  object: 'example_object',
  request_history: [],
  status: 'example_status',
  transactions: [],
  verification_data: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Authorization().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Authorization().load({ id: 'authorization_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthorizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BalanceEntity

```ts
const balance = client.Balance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `any[]` | Yes | Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://docs.stripe.com/api#transfers) or [Payouts API](https://docs.stripe.com/api#payouts). |
| `connect_reserved` | `any[]` | No | Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. |
| `instant_available` | `any[]` | No | Funds that you can pay out using Instant Payouts. |
| `issuing` | `Record<string, any>` | Yes |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending` | `any[]` | Yes | Funds that aren't available in the balance yet. |
| `refund_and_dispute_prefunding` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Balance().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BalanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BalanceSettingEntity

```ts
const balance_setting = client.BalanceSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `debit_negative_balances` | `boolean` | No | A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. |
| `payouts` | `any` | No | Settings specific to the account's payouts. |
| `settlement_timing` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BalanceSetting().create({
  settlement_timing: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BalanceSetting().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BalanceSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BalanceTransactionEntity

```ts
const balance_transaction = client.BalanceTransaction()
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
| `fee_details` | `any[]` | Yes | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | No | The ID of the invoice (if any) related to the transaction. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net` | `number` | Yes | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `string` | Yes | String representing the object's type. |
| `reporting_category` | `string` | Yes | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `any` | No | This transaction relates to the Stripe object. |
| `status` | `string` | Yes | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `string` | Yes | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BalanceTransaction().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BalanceTransaction().load({ id: 'balance_transaction_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BalanceTransactionEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BankAccountEntity

```ts
const bank_account = client.BankAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `any` | No | The account this bank account belongs to. |
| `account_holder_name` | `string` | No | The name of the person or business that owns the bank account. |
| `account_holder_type` | `string` | No | The type of entity that holds the account. |
| `account_type` | `string` | No | The bank account type. |
| `available_payout_methods` | `any[]` | No | A set of available payout methods for this bank account. |
| `bank_name` | `string` | No | Name of the bank associated with the routing number (e.g., `WELLS FARGO`). |
| `country` | `string` | Yes | Two-letter ISO code representing the country the bank account is located in. |
| `currency` | `string` | Yes | Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. |
| `customer` | `any` | No | The ID of the customer that the bank account is associated with. |
| `default_for_currency` | `boolean` | No | Whether this bank account is the default external account for its currency. |
| `fingerprint` | `string` | No | Uniquely identifies this particular bank account. |
| `future_requirements` | `any` | No | Information about the [upcoming new requirements for the bank account](https://docs.stripe.com/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last4` | `string` | Yes | The last four digits of the bank account number. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `requirements` | `any` | No | Information about the requirements for the bank account, including what information needs to be collected. |
| `routing_number` | `string` | No | The routing transit number for the bank account. |
| `status` | `string` | Yes | For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, `tokenized_account_number_deactivated` or `errored`. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `verify` | `/v1/customers/{customer}/bank_accounts/{id}/verify` | `client.BankAccount().create({ $action: 'verify', ... })` |

An action returns that action's OWN response, which is not necessarily a
BankAccount record — check the API definition for its shape.

```ts
const result = await client.BankAccount().create({
  $action: 'verify',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BankAccount().create({
  customer_id: 'example_customer_id',
  country: 'example_country',
  currency: 'example_currency',
  last4: 'example_last4',
  object: 'example_object',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BankAccount().list({ customer_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BankAccount().load({ id: 'bank_account_id', customer_id: 'customer_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.BankAccount().remove({ id: 'bank_account_id', customer_id: 'customer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BankAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CalculationEntity

```ts
const calculation = client.Calculation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_total` | `number` | Yes | Total amount after taxes in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | No | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `Record<string, any>` | Yes |  |
| `expires_at` | `number` | No | Timestamp of date at which the tax calculation will expire. |
| `id` | `string` | No | Unique identifier for the calculation. |
| `line_items` | `Record<string, any>` | Yes | The list of items the customer is purchasing. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `ship_from_details` | `any` | No | The details of the ship from location, such as the address. |
| `shipping_cost` | `any` | No | The shipping cost details for the calculation. |
| `tax_amount_exclusive` | `number` | Yes | The amount of tax to be collected on top of the line item prices. |
| `tax_amount_inclusive` | `number` | Yes | The amount of tax already included in the line item prices. |
| `tax_breakdown` | `any[]` | Yes | Breakdown of individual tax amounts that add up to the total. |
| `tax_date` | `number` | Yes | The calculation uses the tax rules and rates that are in effect at this timestamp. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Calculation().create({
  amount_total: 1,
  currency: 'example_currency',
  customer_details: {},
  line_items: {},
  livemode: true,
  object: 'example_object',
  tax_amount_exclusive: 1,
  tax_amount_inclusive: 1,
  tax_breakdown: [],
  tax_date: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Calculation().load({ id: 'calculation_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CalculationEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CapabilityEntity

```ts
const capability = client.Capability()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `any` | Yes | The account for which the capability enables functionality. |
| `future_requirements` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | The identifier for the capability. |
| `object` | `string` | Yes | String representing the object's type. |
| `requested` | `boolean` | Yes | Whether the capability has been requested. |
| `requested_at` | `number` | No | Time at which the capability was requested. |
| `requirements` | `Record<string, any>` | Yes |  |
| `status` | `string` | Yes | The status of the capability. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Capability().create({
  account_id: 'example_account_id',
  id: 'example_id',
  account: 'example_account',
  future_requirements: {},
  object: 'example_object',
  requested: true,
  requirements: {},
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Capability().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Capability().load({ id: 'capability_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CapabilityEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CardEntity

```ts
const card = client.Card()
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
| `available_payout_methods` | `any[]` | No | A set of available payout methods for this card. |
| `brand` | `string` | Yes | Card brand. |
| `cancellation_reason` | `string` | No | The reason why the card was canceled. |
| `cardholder` | `Record<string, any>` | Yes | An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://docs.stripe.com/issuing) cards. |
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
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | Cardholder name. |
| `networks` | `Record<string, any>` | No |  |
| `number` | `string` | No | The full unredacted card number. |
| `object` | `string` | Yes | String representing the object's type. |
| `personalization_design` | `any` | No | The personalization design object belonging to this card. |
| `regulated_status` | `string` | No | Status of a card based on the card issuer. |
| `replaced_by` | `any` | No | The latest card that replaces this card, if any. |
| `replacement_for` | `any` | No | The card this card replaces, if any. |
| `replacement_reason` | `string` | No | The reason why the previous card needed to be replaced. |
| `second_line` | `string` | No | Text separate from cardholder name, printed on the card. |
| `shipping` | `any` | No | Where and how the card will be shipped. |
| `spending_controls` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Card().create({
  id: 'example_id',
  brand: 'example_brand',
  cardholder: {},
  created: 1,
  exp_month: 1,
  exp_year: 1,
  funding: 'example_funding',
  last4: 'example_last4',
  livemode: true,
  object: 'example_object',
  spending_controls: {},
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Card().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Card().load({ id: 'card_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Card().remove({ id: 'card_id', customer_id: 'customer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CardEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CardholderEntity

```ts
const cardholder = client.Cardholder()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `Record<string, any>` | Yes |  |
| `company` | `any` | No | Additional information about a `company` cardholder. |
| `created` | `number` | Yes | Time at which the object was created. |
| `email` | `string` | No | The cardholder's email address. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `individual` | `any` | No | Additional information about an `individual` cardholder. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Yes | The cardholder's name. |
| `object` | `string` | Yes | String representing the object's type. |
| `phone_number` | `string` | No | The cardholder's phone number. |
| `preferred_locales` | `any[]` | No | The cardholder’s preferred locales (languages), ordered by preference. |
| `requirements` | `Record<string, any>` | Yes |  |
| `spending_controls` | `any` | No | Rules that control spending across this cardholder's cards. |
| `status` | `string` | Yes | Specifies whether to permit authorizations on this cardholder's cards. |
| `type` | `string` | Yes | One of `individual` or `company`. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Cardholder().create({
  id: 'example_id',
  billing: {},
  created: 1,
  livemode: true,
  metadata: {},
  name: 'example_name',
  object: 'example_object',
  requirements: {},
  status: 'example_status',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Cardholder().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Cardholder().load({ id: 'cardholder_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CardholderEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CashBalanceEntity

```ts
const cash_balance = client.CashBalance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `Record<string, any>` | No | A hash of all cash balances available to this customer. |
| `customer` | `string` | Yes | The ID of the customer whose cash balance this object represents. |
| `customer_account` | `string` | No | The ID of an Account representing a customer whose cash balance this object represents. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `settings` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CashBalance().create({
  customer_id: 'example_customer_id',
  customer: 'example_customer',
  livemode: true,
  object: 'example_object',
  settings: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CashBalance().load({ customer_id: 'customer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CashBalanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CashBalanceTransactionEntity

```ts
const cash_balance_transaction = client.CashBalanceTransaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjusted_for_overdraft` | `Record<string, any>` | Yes |  |
| `applied_to_payment` | `Record<string, any>` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `string` | No | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `number` | Yes | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `net_amount` | `number` | Yes | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `string` | Yes | String representing the object's type. |
| `refunded_from_payment` | `Record<string, any>` | Yes |  |
| `transferred_to_balance` | `Record<string, any>` | Yes |  |
| `type` | `string` | Yes | The type of the cash balance transaction. |
| `unapplied_from_payment` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CashBalanceTransaction().list({ customer_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CashBalanceTransaction().load({ id: 'cash_balance_transaction_id', customer_id: 'customer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CashBalanceTransactionEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChargeEntity

```ts
const charge = client.Charge()
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
| `billing_details` | `Record<string, any>` | Yes |  |
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
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) the charge was made on behalf of without triggering an automatic transfer. |
| `outcome` | `any` | No | Details about whether the payment was accepted, and why. |
| `paid` | `boolean` | Yes | `true` if the charge succeeded, or was successfully authorized for later capture. |
| `payment_intent` | `any` | No | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `string` | No | ID of the payment method used in this charge. |
| `payment_method_details` | `any` | No | Details about the payment method at the time of the transaction. |
| `presentment_details` | `Record<string, any>` | Yes |  |
| `radar_options` | `Record<string, any>` | No | Options to configure Radar. |
| `receipt_email` | `string` | No | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `string` | No | This is the URL to view the receipt for this charge. |
| `refunded` | `boolean` | Yes | Whether the charge has been fully refunded. |
| `refunds` | `Record<string, any>` | Yes | A list of refunds that have been applied to the charge. |
| `review` | `any` | No | ID of the review associated with this charge if one exists. |
| `shipping` | `any` | No | Shipping information for the charge. |
| `source_transfer` | `any` | No | The transfer ID which created this charge. |
| `statement_descriptor` | `string` | No | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | `string` | No | Provides information about a card charge. |
| `status` | `string` | Yes | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `transfer` | `any` | No | ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter). |
| `transfer_data` | `any` | No | An optional dictionary including the account to automatically transfer to as part of a destination charge. |
| `transfer_group` | `string` | No | A string that identifies this transaction as part of a group. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `capture` | `/v1/charges/{charge}/capture` | `client.Charge().create({ $action: 'capture', ... })` |
| `refund` | `/v1/charges/{charge}/refund` | `client.Charge().create({ $action: 'refund', ... })` |

An action returns that action's OWN response, which is not necessarily a
Charge record — check the API definition for its shape.

```ts
const result = await client.Charge().create({
  $action: 'capture',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Charge().create({
  id: 'example_id',
  amount: 1,
  amount_captured: 1,
  amount_refunded: 1,
  billing_details: {},
  captured: true,
  created: 1,
  currency: 'example_currency',
  disputed: true,
  livemode: true,
  metadata: {},
  object: 'example_object',
  paid: true,
  presentment_details: {},
  refunded: true,
  refunds: {},
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Charge().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Charge().load({ id: 'charge_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChargeEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConfigurationEntity

```ts
const configuration = client.Configuration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the configuration is active and can be used to create portal sessions. |
| `application` | `any` | No | ID of the Connect Application that created the configuration. |
| `bbpos_wisepad3` | `Record<string, any>` | No |  |
| `bbpos_wisepos_e` | `Record<string, any>` | No |  |
| `business_profile` | `Record<string, any>` | Yes |  |
| `cellular` | `Record<string, any>` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `default_return_url` | `string` | No | The default URL to redirect customers to when they click on the portal's link to return to your website. |
| `features` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `is_account_default` | `boolean` | No | Whether this Configuration is the default for your account |
| `is_default` | `boolean` | Yes | Whether the configuration is the default. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `login_page` | `Record<string, any>` | Yes |  |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | The name of the configuration. |
| `object` | `string` | Yes | String representing the object's type. |
| `offline` | `Record<string, any>` | No |  |
| `reboot_window` | `Record<string, any>` | Yes |  |
| `stripe_s700` | `Record<string, any>` | No |  |
| `stripe_s710` | `Record<string, any>` | No |  |
| `tipping` | `Record<string, any>` | No |  |
| `updated` | `number` | Yes | Time at which the object was last updated. |
| `verifone_m425` | `Record<string, any>` | No |  |
| `verifone_p400` | `Record<string, any>` | No |  |
| `verifone_p630` | `Record<string, any>` | No |  |
| `verifone_ux700` | `Record<string, any>` | No |  |
| `verifone_v660p` | `Record<string, any>` | No |  |
| `wifi` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Configuration().create({
  id: 'example_id',
  active: true,
  business_profile: {},
  cellular: {},
  created: 1,
  features: {},
  is_default: true,
  livemode: true,
  login_page: {},
  object: 'example_object',
  reboot_window: {},
  updated: 1,
  wifi: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Configuration().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Configuration().load({ id: 'configuration_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Configuration().remove({ id: 'configuration_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConfigurationEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConfirmationTokenEntity

```ts
const confirmation_token = client.ConfirmationToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `expires_at` | `number` | No | Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `mandate_data` | `any` | No | Data used for generating a Mandate. |
| `metadata` | `Record<string, any>` | No | Set of key-value pairs that you can attach to an object. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ConfirmationToken().create({
  created: 1,
  id: 'example_id',
  livemode: true,
  object: 'example_object',
  use_stripe_sdk: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConfirmationToken().load({ id: 'confirmation_token_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConfirmationTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConnectionTokenEntity

```ts
const connection_token = client.ConnectionToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `string` | No | The id of the location that this connection token is scoped to. |
| `object` | `string` | Yes | String representing the object's type. |
| `secret` | `string` | Yes | Your application should pass this token to the Stripe Terminal SDK. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ConnectionToken().create({
  object: 'example_object',
  secret: 'example_secret',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConnectionTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CountrySpecEntity

```ts
const country_spec = client.CountrySpec()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_currency` | `string` | Yes | The default currency for this country. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `object` | `string` | Yes | String representing the object's type. |
| `supported_bank_account_currencies` | `Record<string, any>` | Yes | Currencies that can be accepted in the specific country (for transfers). |
| `supported_payment_currencies` | `any[]` | Yes | Currencies that can be accepted in the specified country (for payments). |
| `supported_payment_methods` | `any[]` | Yes | Payment methods available in the specified country. |
| `supported_transfer_countries` | `any[]` | Yes | Countries that can accept transfers from the specified country. |
| `verification_fields` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CountrySpec().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CountrySpec().load({ id: 'country_spec_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CountrySpecEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CouponEntity

```ts
const coupon = client.Coupon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_off` | `number` | No | Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer. |
| `applies_to` | `Record<string, any>` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | No | If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off. |
| `currency_options` | `Record<string, any>` | No | Coupons defined in each available currency option. |
| `duration` | `string` | Yes | One of `forever`, `once`, or `repeating`. |
| `duration_in_months` | `number` | No | If `duration` is `repeating`, the number of months the coupon applies. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `max_redemptions` | `number` | No | Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | Name of the coupon displayed to customers on for instance invoices or receipts. |
| `object` | `string` | Yes | String representing the object's type. |
| `percent_off` | `number` | No | Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. |
| `redeem_by` | `number` | No | Date after which the coupon can no longer be redeemed. |
| `times_redeemed` | `number` | Yes | Number of times this coupon has been applied to a customer. |
| `valid` | `boolean` | Yes | Taking account of the above properties, whether this coupon can still be applied to a customer. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Coupon().create({
  id: 'example_id',
  applies_to: {},
  created: 1,
  duration: 'example_duration',
  livemode: true,
  object: 'example_object',
  times_redeemed: 1,
  valid: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Coupon().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Coupon().load({ id: 'coupon_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CouponEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreditBalanceSummaryEntity

```ts
const credit_balance_summary = client.CreditBalanceSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_balance` | `Record<string, any>` | Yes |  |
| `ledger_balance` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CreditBalanceSummary().list({ filter: {} })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreditBalanceSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreditBalanceTransactionEntity

```ts
const credit_balance_transaction = client.CreditBalanceTransaction()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CreditBalanceTransaction().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CreditBalanceTransaction().load({ id: 'credit_balance_transaction_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreditBalanceTransactionEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreditGrantEntity

```ts
const credit_grant = client.CreditGrant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `Record<string, any>` | Yes |  |
| `applicability_config` | `Record<string, any>` | Yes |  |
| `category` | `string` | Yes | The category of this credit grant. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer` | `any` | Yes | ID of the customer receiving the billing credits. |
| `customer_account` | `string` | No | ID of the account representing the customer receiving the billing credits |
| `effective_at` | `number` | No | The time when the billing credits become effective-when they're eligible for use. |
| `expires_at` | `number` | No | The time when the billing credits expire. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | A descriptive name shown in dashboard. |
| `object` | `string` | Yes | String representing the object's type. |
| `priority` | `number` | No | The priority for applying this credit grant. |
| `test_clock` | `any` | No | ID of the test clock this credit grant belongs to. |
| `updated` | `number` | Yes | Time at which the object was last updated. |
| `voided_at` | `number` | No | The time when this credit grant was voided. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `expire` | `/v1/billing/credit_grants/{id}/expire` | `client.CreditGrant().create({ $action: 'expire', ... })` |
| `void` | `/v1/billing/credit_grants/{id}/void` | `client.CreditGrant().create({ $action: 'void', ... })` |

An action returns that action's OWN response, which is not necessarily a
CreditGrant record — check the API definition for its shape.

```ts
const result = await client.CreditGrant().create({
  $action: 'expire',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreditGrant().create({
  id: 'example_id',
  amount: {},
  applicability_config: {},
  category: 'example_category',
  created: 1,
  customer: 'example_customer',
  livemode: true,
  metadata: {},
  object: 'example_object',
  updated: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CreditGrant().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CreditGrant().load({ id: 'credit_grant_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreditGrantEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreditNoteEntity

```ts
const credit_note = client.CreditNote()
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
| `discount_amounts` | `any[]` | Yes | The aggregate amounts calculated per discount for all line items. |
| `effective_at` | `number` | No | The date when this credit note is in effect. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | Yes | ID of the invoice. |
| `lines` | `Record<string, any>` | Yes | Line items that make up the credit note |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `memo` | `string` | No | Customer-facing text that appears on the credit note PDF. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `string` | Yes | A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice. |
| `object` | `string` | Yes | String representing the object's type. |
| `out_of_band_amount` | `number` | No | Amount that was credited outside of Stripe. |
| `pdf` | `string` | Yes | The link to download the PDF of the credit note. |
| `post_payment_amount` | `number` | Yes | The amount of the credit note that was refunded to the customer, credited to the customer's balance, credited outside of Stripe, or any combination thereof. |
| `pre_payment_amount` | `number` | Yes | The amount of the credit note by which the invoice's `amount_remaining` and `amount_due` were reduced. |
| `pretax_credit_amounts` | `any[]` | Yes | The pretax credit amounts (ex: discount, credit grants, etc) for all line items. |
| `reason` | `string` | No | Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory` |
| `refunds` | `any[]` | Yes | Refunds related to this credit note. |
| `shipping_cost` | `any` | No | The details of the cost of shipping, including the ShippingRate applied to the invoice. |
| `status` | `string` | Yes | Status of this credit note, one of `issued` or `void`. |
| `subtotal` | `number` | Yes | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts. |
| `subtotal_excluding_tax` | `number` | No | The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts. |
| `total` | `number` | Yes | The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount. |
| `total_excluding_tax` | `number` | No | The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts. |
| `total_taxes` | `any[]` | No | The aggregate tax information for all line items. |
| `type` | `string` | Yes | Type of this credit note, one of `pre_payment` or `post_payment`. |
| `voided_at` | `number` | No | The time that the credit note was voided. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `void` | `/v1/credit_notes/{id}/void` | `client.CreditNote().create({ $action: 'void', ... })` |
| `preview` | `/v1/credit_notes/preview` | `client.CreditNote().list({ $action: 'preview', ... })` |

An action returns that action's OWN response, which is not necessarily a
CreditNote record — check the API definition for its shape.

```ts
const result = await client.CreditNote().create({
  $action: 'void',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreditNote().create({
  id: 'example_id',
  amount: 1,
  amount_shipping: 1,
  created: 1,
  currency: 'example_currency',
  customer: 'example_customer',
  discount_amount: 1,
  discount_amounts: [],
  invoice: 'example_invoice',
  lines: {},
  livemode: true,
  number: 'example_number',
  object: 'example_object',
  pdf: 'example_pdf',
  post_payment_amount: 1,
  pre_payment_amount: 1,
  pretax_credit_amounts: [],
  refunds: [],
  status: 'example_status',
  subtotal: 1,
  total: 1,
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CreditNote().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CreditNote().load({ id: 'credit_note_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreditNoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreditNoteLineEntity

```ts
const credit_note_line = client.CreditNoteLine()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts. |
| `description` | `string` | No | Description of the item being credited. |
| `discount_amount` | `number` | Yes | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `any[]` | Yes | The amount of discount calculated per discount for this line item |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice_line_item` | `string` | No | ID of the invoice line item being credited |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `pretax_credit_amounts` | `any[]` | Yes | The pretax credit amounts (ex: discount, credit grants, etc) for this line item. |
| `quantity` | `number` | No | The number of units of product being credited. |
| `tax_rates` | `any[]` | Yes | The tax rates which apply to the line item. |
| `taxes` | `any[]` | No | The tax information of the line item. |
| `type` | `string` | Yes | The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. |
| `unit_amount` | `number` | No | The cost of each unit of product being credited. |
| `unit_amount_decimal` | `string` | No | Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CreditNoteLine().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreditNoteLineEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreditReversalEntity

```ts
const credit_reversal = client.CreditReversal()
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
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `string` | Yes | The rails used to reverse the funds. |
| `object` | `string` | Yes | String representing the object's type. |
| `received_credit` | `string` | Yes | The ReceivedCredit being reversed. |
| `status` | `string` | Yes | Status of the CreditReversal |
| `status_transitions` | `Record<string, any>` | Yes |  |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreditReversal().create({
  amount: 1,
  created: 1,
  currency: 'example_currency',
  financial_account: 'example_financial_account',
  id: 'example_id',
  livemode: true,
  metadata: {},
  network: 'example_network',
  object: 'example_object',
  received_credit: 'example_received_credit',
  status: 'example_status',
  status_transitions: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CreditReversal().list({ financial_account: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CreditReversal().load({ id: 'credit_reversal_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreditReversalEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerEntity

```ts
const customer = client.Customer()
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
| `invoice_credit_balance` | `Record<string, any>` | No | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_prefix` | `string` | No | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `Record<string, any>` | No |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | The customer's full name or business name. |
| `next_invoice_sequence` | `number` | No | The suffix of the customer's next invoice number (for example, 0001). |
| `object` | `string` | Yes | String representing the object's type. |
| `phone` | `string` | No | The customer's phone number. |
| `preferred_locales` | `any[]` | No | The customer's preferred locales (languages), ordered by preference. |
| `shipping` | `any` | No | Mailing and shipping address for the customer. |
| `sources` | `Record<string, any>` | Yes | The customer's payment sources, if any. |
| `subscriptions` | `Record<string, any>` | Yes | The customer's current subscriptions, if any. |
| `tax` | `Record<string, any>` | Yes |  |
| `tax_exempt` | `string` | No | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `Record<string, any>` | Yes | The customer's tax IDs. |
| `test_clock` | `any` | No | ID of the test clock that this customer belongs to. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Customer().create({
  id: 'example_id',
  created: 1,
  livemode: true,
  object: 'example_object',
  sources: {},
  subscriptions: {},
  tax: {},
  tax_ids: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Customer().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Customer().load({ id: 'customer_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Customer().remove({ id: 'customer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerBalanceTransactionEntity

```ts
const customer_balance_transaction = client.CustomerBalanceTransaction()
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
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `type` | `string` | Yes | Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or… |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomerBalanceTransaction().create({
  id: 'example_id',
  amount: 1,
  created: 1,
  currency: 'example_currency',
  customer: 'example_customer',
  ending_balance: 1,
  livemode: true,
  object: 'example_object',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomerBalanceTransaction().load({ id: 'customer_balance_transaction_id', customer_id: 'customer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerBalanceTransactionEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerSessionEntity

```ts
const customer_session = client.CustomerSession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_secret` | `string` | Yes | The client secret of this Customer Session. |
| `components` | `Record<string, any>` | Yes | Configuration for the components supported by this Customer Session. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer` | `any` | Yes | The Customer the Customer Session was created for. |
| `customer_account` | `string` | No | The Account that the Customer Session was created for. |
| `expires_at` | `number` | Yes | The timestamp at which this Customer Session will expire. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomerSession().create({
  client_secret: 'example_client_secret',
  components: {},
  created: 1,
  customer: 'example_customer',
  expires_at: 1,
  livemode: true,
  object: 'example_object',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerSessionEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DebitReversalEntity

```ts
const debit_reversal = client.DebitReversal()
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
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network` | `string` | Yes | The rails used to reverse the funds. |
| `object` | `string` | Yes | String representing the object's type. |
| `received_debit` | `string` | Yes | The ReceivedDebit being reversed. |
| `status` | `string` | Yes | Status of the DebitReversal |
| `status_transitions` | `Record<string, any>` | Yes |  |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DebitReversal().create({
  amount: 1,
  created: 1,
  currency: 'example_currency',
  id: 'example_id',
  livemode: true,
  metadata: {},
  network: 'example_network',
  object: 'example_object',
  received_debit: 'example_received_debit',
  status: 'example_status',
  status_transitions: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DebitReversal().list({ financial_account: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DebitReversal().load({ id: 'debit_reversal_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DebitReversalEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedAccountEntity

```ts
const deleted_account = client.DeletedAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedAccount().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedApplePayDomainEntity

```ts
const deleted_apple_pay_domain = client.DeletedApplePayDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedApplePayDomain().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedApplePayDomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedCouponEntity

```ts
const deleted_coupon = client.DeletedCoupon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedCoupon().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedCouponEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedExternalAccountEntity

```ts
const deleted_external_account = client.DeletedExternalAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedExternalAccount().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedExternalAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedInvoiceitemEntity

```ts
const deleted_invoiceitem = client.DeletedInvoiceitem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedInvoiceitem().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedInvoiceitemEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedPersonEntity

```ts
const deleted_person = client.DeletedPerson()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedPerson().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedPersonEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedPlanEntity

```ts
const deleted_plan = client.DeletedPlan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedPlan().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedPlanEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedProductFeatureEntity

```ts
const deleted_product_feature = client.DeletedProductFeature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedProductFeature().remove({ id: 'id', product_id: 'product_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedProductFeatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedSubscriptionItemEntity

```ts
const deleted_subscription_item = client.DeletedSubscriptionItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedSubscriptionItem().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedSubscriptionItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedWebhookEndpointEntity

```ts
const deleted_webhook_endpoint = client.DeletedWebhookEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedWebhookEndpoint().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedWebhookEndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DiscountEntity

```ts
const discount = client.Discount()
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
| `source` | `Record<string, any>` | Yes |  |
| `start` | `number` | Yes | Date that the coupon was applied. |
| `subscription` | `string` | No | The subscription that this coupon is applied to, if it is applied to a particular subscription. |
| `subscription_item` | `string` | No | The subscription item that this coupon is applied to, if it is applied to a particular subscription item. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Discount().load({ customer_id: 'customer_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Discount().remove({ customer_id: 'customer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DiscountEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DisputeEntity

```ts
const dispute = client.Dispute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Disputed amount. |
| `balance_transactions` | `any[]` | Yes | List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute. |
| `charge` | `any` | Yes | ID of the charge that's disputed. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `enhanced_eligibility_types` | `any[]` | Yes | List of eligibility types that are included in `enhanced_evidence`. |
| `evidence` | `Record<string, any>` | Yes |  |
| `evidence_details` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `is_charge_refundable` | `boolean` | Yes | If true, it's still possible to refund the disputed payment. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `loss_reason` | `string` | No | The enum that describes the dispute loss outcome. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `any` | No | ID of the PaymentIntent that's disputed. |
| `payment_method_details` | `Record<string, any>` | Yes |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `close` | `/v1/charges/{charge}/dispute/close` | `client.Dispute().create({ $action: 'close', ... })` |
| `close` | `/v1/disputes/{dispute}/close` | `client.Dispute().create({ $action: 'close', ... })` |
| `submit` | `/v1/issuing/disputes/{dispute}/submit` | `client.Dispute().create({ $action: 'submit', ... })` |

An action returns that action's OWN response, which is not necessarily a
Dispute record — check the API definition for its shape.

```ts
const result = await client.Dispute().create({
  $action: 'close',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Dispute().create({
  id: 'example_id',
  amount: 1,
  balance_transactions: [],
  charge: 'example_charge',
  created: 1,
  currency: 'example_currency',
  enhanced_eligibility_types: [],
  evidence: {},
  evidence_details: {},
  is_charge_refundable: true,
  livemode: true,
  metadata: {},
  object: 'example_object',
  payment_method_details: {},
  reason: 'example_reason',
  status: 'example_status',
  transaction: 'example_transaction',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Dispute().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Dispute().load({ id: 'dispute_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DisputeEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainEntity

```ts
const domain = client.Domain()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Domain().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EarlyFraudWarningEntity

```ts
const early_fraud_warning = client.EarlyFraudWarning()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EarlyFraudWarning().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EarlyFraudWarning().load({ id: 'early_fraud_warning_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EarlyFraudWarningEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EphemeralKeyEntity

```ts
const ephemeral_key = client.EphemeralKey()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EphemeralKey().create({
  created: 1,
  expires: 1,
  id: 'example_id',
  livemode: true,
  object: 'example_object',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.EphemeralKey().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EphemeralKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EventEntity

```ts
const event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | The connected account that originates the event. |
| `api_version` | `string` | No | The Stripe API version used to render `data` when the event was created. |
| `context` | `string` | No | Authentication context needed to fetch the event or related object. |
| `created` | `number` | Yes | Time at which the object was created. |
| `data` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending_webhooks` | `number` | Yes | Number of webhooks that haven't been successfully delivered (for example, to return a 20x response) to the URLs you specify. |
| `request` | `any` | No | Information on the API request that triggers the event. |
| `type` | `string` | Yes | Description of the event (for example, `invoice.created` or `charge.refunded`). |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Event().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Event().load({ id: 'event_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EventEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExchangeRateEntity

```ts
const exchange_rate = client.ExchangeRate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the object. |
| `object` | `string` | Yes | String representing the object's type. |
| `rates` | `Record<string, any>` | Yes | Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ExchangeRate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ExchangeRate().load({ id: 'exchange_rate_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExchangeRateEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExternalAccountEntity

```ts
const external_account = client.ExternalAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | Yes | The list contains all external accounts that have been attached to the Stripe account. |
| `has_more` | `boolean` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | Yes | The URL where this list can be accessed. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ExternalAccount().create({
  id: 'example_id',
  data: [],
  has_more: true,
  object: 'example_object',
  url: 'example_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ExternalAccount().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ExternalAccount().load({ id: 'external_account_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExternalAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeatureEntity

```ts
const feature = client.Feature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `entitlement_feature` | `Record<string, any>` | Yes | A feature represents a monetizable ability or functionality in your system. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | Yes | A unique key you provide as your own system identifier. |
| `metadata` | `Record<string, any>` | Yes | Set of key-value pairs that you can attach to an object. |
| `name` | `string` | Yes | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Feature().create({
  id: 'example_id',
  active: true,
  entitlement_feature: {},
  livemode: true,
  lookup_key: 'example_lookup_key',
  metadata: {},
  name: 'example_name',
  object: 'example_object',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Feature().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Feature().load({ id: 'feature_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeedbackOptionEntity

```ts
const feedback_option = client.FeedbackOption()
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
| `status_transitions` | `Record<string, any>` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `deactivate` | `/v1/billing/feedback_options/{id}/deactivate` | `client.FeedbackOption().create({ $action: 'deactivate', ... })` |

An action returns that action's OWN response, which is not necessarily a
FeedbackOption record — check the API definition for its shape.

```ts
const result = await client.FeedbackOption().create({
  $action: 'deactivate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FeedbackOption().create({
  id: 'example_id',
  description: 'example_description',
  livemode: true,
  object: 'example_object',
  status: 'example_status',
  status_transitions: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.FeedbackOption().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FeedbackOption().load({ id: 'feedback_option_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeedbackOptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FileEntity

```ts
const file = client.File()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `data` | `any[]` | Yes | Details about each object. |
| `expires_at` | `number` | No | The file expires and isn't available at this time in epoch seconds. |
| `filename` | `string` | No | The suitable name for saving the file to a filesystem. |
| `has_more` | `boolean` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `links` | `Record<string, any>` | Yes | A list of [file links](https://docs.stripe.com/api#file_links) that point at this file. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.File().create({
  created: 1,
  data: [],
  has_more: true,
  id: 'example_id',
  links: {},
  object: 'example_object',
  purpose: 'example_purpose',
  size: 1,
  url: 'example_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.File().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.File().load({ id: 'file_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FileEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FileLinkEntity

```ts
const file_link = client.FileLink()
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
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | No | The publicly accessible URL to download the file. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FileLink().create({
  id: 'example_id',
  created: 1,
  expired: true,
  file: 'example_file',
  livemode: true,
  metadata: {},
  object: 'example_object',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.FileLink().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FileLink().load({ id: 'file_link_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FileLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FinancialAccountEntity

```ts
const financial_account = client.FinancialAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_features` | `any[]` | No | The array of paths to active Features in the Features hash. |
| `balance` | `Record<string, any>` | Yes | Balance information for the FinancialAccount |
| `country` | `string` | Yes | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `created` | `number` | Yes | Time at which the object was created. |
| `features` | `Record<string, any>` | Yes | Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`. |
| `financial_addresses` | `any[]` | Yes | The set of credentials that resolve to a FinancialAccount. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `is_default` | `boolean` | No |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | No | The nickname for the FinancialAccount. |
| `object` | `string` | Yes | String representing the object's type. |
| `pending_features` | `any[]` | No | The array of paths to pending Features in the Features hash. |
| `platform_restrictions` | `any` | No | The set of functionalities that the platform can restrict on the FinancialAccount. |
| `restricted_features` | `any[]` | No | The array of paths to restricted Features in the Features hash. |
| `status` | `string` | Yes | Status of this FinancialAccount. |
| `status_details` | `Record<string, any>` | Yes |  |
| `supported_currencies` | `any[]` | Yes | The currencies the FinancialAccount can hold a balance in. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `close` | `/v1/treasury/financial_accounts/{financial_account}/close` | `client.FinancialAccount().create({ $action: 'close', ... })` |

An action returns that action's OWN response, which is not necessarily a
FinancialAccount record — check the API definition for its shape.

```ts
const result = await client.FinancialAccount().create({
  $action: 'close',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FinancialAccount().create({
  id: 'example_id',
  balance: {},
  country: 'example_country',
  created: 1,
  features: {},
  financial_addresses: [],
  livemode: true,
  object: 'example_object',
  status: 'example_status',
  status_details: {},
  supported_currencies: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.FinancialAccount().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FinancialAccount().load({ id: 'financial_account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FinancialAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FinancialAccountFeatureEntity

```ts
const financial_account_feature = client.FinancialAccountFeature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_issuing` | `Record<string, any>` | Yes | Toggle settings for enabling/disabling a feature |
| `deposit_insurance` | `Record<string, any>` | Yes | Toggle settings for enabling/disabling a feature |
| `financial_addresses` | `Record<string, any>` | No | Settings related to Financial Addresses features on a Financial Account |
| `id` | `string` | No |  |
| `inbound_transfers` | `Record<string, any>` | No | InboundTransfers contains inbound transfers features for a FinancialAccount. |
| `intra_stripe_flows` | `Record<string, any>` | Yes | Toggle settings for enabling/disabling a feature |
| `object` | `string` | Yes | String representing the object's type. |
| `outbound_payments` | `Record<string, any>` | No | Settings related to Outbound Payments features on a Financial Account |
| `outbound_transfers` | `Record<string, any>` | No | OutboundTransfers contains outbound transfers features for a FinancialAccount. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FinancialAccountFeature().create({
  id: 'example_id',
  card_issuing: {},
  deposit_insurance: {},
  intra_stripe_flows: {},
  object: 'example_object',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FinancialAccountFeature().load({ id: 'financial_account_feature_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FinancialAccountFeatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FundCashBalanceEntity

```ts
const fund_cash_balance = client.FundCashBalance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adjusted_for_overdraft` | `Record<string, any>` | Yes |  |
| `applied_to_payment` | `Record<string, any>` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | Yes | The customer whose available cash balance changed as a result of this transaction. |
| `customer_account` | `string` | No | The ID of an Account representing a customer whose available cash balance changed as a result of this transaction. |
| `ending_balance` | `number` | Yes | The total available cash balance for the specified currency after this transaction was applied. |
| `funded` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `net_amount` | `number` | Yes | The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `object` | `string` | Yes | String representing the object's type. |
| `refunded_from_payment` | `Record<string, any>` | Yes |  |
| `transferred_to_balance` | `Record<string, any>` | Yes |  |
| `type` | `string` | Yes | The type of the cash balance transaction. |
| `unapplied_from_payment` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FundCashBalance().create({
  customer_id: 'example_customer_id',
  adjusted_for_overdraft: {},
  applied_to_payment: {},
  created: 1,
  currency: 'example_currency',
  customer: 'example_customer',
  ending_balance: 1,
  funded: {},
  id: 'example_id',
  livemode: true,
  net_amount: 1,
  object: 'example_object',
  refunded_from_payment: {},
  transferred_to_balance: {},
  type: 'example_type',
  unapplied_from_payment: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FundCashBalanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FundingInstructionEntity

```ts
const funding_instruction = client.FundingInstruction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `string` | Yes | The country of the bank account to fund |
| `financial_addresses` | `any[]` | Yes | A list of financial addresses that can be used to fund a particular balance |
| `type` | `string` | Yes | The bank_transfer type |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FundingInstruction().create({
  customer_id: 'example_customer_id',
  country: 'example_country',
  financial_addresses: [],
  type: 'example_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FundingInstructionEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HistoryEntity

```ts
const history = client.History()
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
| `fee_details` | `any[]` | Yes | Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `net` | `number` | Yes | Net impact to a Stripe balance (in cents (or local equivalent)). |
| `object` | `string` | Yes | String representing the object's type. |
| `reporting_category` | `string` | Yes | Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective. |
| `source` | `any` | No | This transaction relates to the Stripe object. |
| `status` | `string` | Yes | The transaction's net funds status in the Stripe balance, which are either `available` or `pending`. |
| `type` | `string` | Yes | Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co… |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.History().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InboundTransferEntity

```ts
const inbound_transfer = client.InboundTransfer()
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
| `linked_flows` | `Record<string, any>` | Yes |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `origin_payment_method` | `string` | No | The origin payment method to be debited for an InboundTransfer. |
| `origin_payment_method_details` | `any` | No | Details about the PaymentMethod for an InboundTransfer. |
| `returned` | `boolean` | No | Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state. |
| `statement_descriptor` | `string` | Yes | Statement descriptor shown when funds are debited from the source. |
| `status` | `string` | Yes | Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. |
| `status_transitions` | `Record<string, any>` | Yes |  |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/v1/treasury/inbound_transfers/{inbound_transfer}/cancel` | `client.InboundTransfer().create({ $action: 'cancel', ... })` |
| `fail` | `/v1/test_helpers/treasury/inbound_transfers/{id}/fail` | `client.InboundTransfer().create({ $action: 'fail', ... })` |
| `return` | `/v1/test_helpers/treasury/inbound_transfers/{id}/return` | `client.InboundTransfer().create({ $action: 'return', ... })` |
| `succeed` | `/v1/test_helpers/treasury/inbound_transfers/{id}/succeed` | `client.InboundTransfer().create({ $action: 'succeed', ... })` |

An action returns that action's OWN response, which is not necessarily a
InboundTransfer record — check the API definition for its shape.

```ts
const result = await client.InboundTransfer().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.InboundTransfer().create({
  amount: 1,
  cancelable: true,
  created: 1,
  currency: 'example_currency',
  financial_account: 'example_financial_account',
  id: 'example_id',
  linked_flows: {},
  livemode: true,
  metadata: {},
  object: 'example_object',
  statement_descriptor: 'example_statement_descriptor',
  status: 'example_status',
  status_transitions: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.InboundTransfer().list({ financial_account: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.InboundTransfer().load({ id: 'inbound_transfer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InboundTransferEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InstallEntity

```ts
const install = client.Install()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | The ID of the account that the app install belongs to. |
| `app` | `string` | Yes | The ID of the app installed. |
| `approval_required` | `boolean` | Yes | Whether the installer must authorize pending permissions, content security policy entries, or endpoints. |
| `auth_code` | `string` | No | The authorization code for an oauth app install. |
| `channel` | `string` | Yes | The distribution channel associated with the app install. |
| `content_security_policy_granted` | `Record<string, any>` | Yes |  |
| `content_security_policy_pending` | `Record<string, any>` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `created_by` | `string` | No | The ID of the embedding platform that created the install, if applicable. |
| `endpoints_granted` | `any[]` | Yes | The endpoint URLs authorized by the installer. |
| `endpoints_pending` | `any[]` | Yes | The endpoint URLs requested by the latest app version that the installer has not authorized. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `permissions_granted` | `any[]` | Yes | The permissions authorized by the installer. |
| `permissions_pending` | `any[]` | Yes | The permissions requested by the latest app version that the installer has not authorized. |
| `status` | `string` | Yes | The status of the app install. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `uninstall` | `/v1/apps/installs/{id}/uninstall` | `client.Install().create({ $action: 'uninstall', ... })` |

An action returns that action's OWN response, which is not necessarily a
Install record — check the API definition for its shape.

```ts
const result = await client.Install().create({
  $action: 'uninstall',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Install().create({
  id: 'example_id',
  account: 'example_account',
  app: 'example_app',
  approval_required: true,
  channel: 'example_channel',
  content_security_policy_granted: {},
  content_security_policy_pending: {},
  created: 1,
  endpoints_granted: [],
  endpoints_pending: [],
  livemode: true,
  object: 'example_object',
  permissions_granted: [],
  permissions_pending: [],
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Install().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Install().load({ id: 'install_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InstallEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InvoiceEntity

```ts
const invoice = client.Invoice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_country` | `string` | No | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `string` | No | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `any[]` | No | The account tax IDs associated with the invoice. |
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
| `automatic_tax` | `Record<string, any>` | Yes |  |
| `automatically_finalizes_at` | `number` | No | The time when this invoice is currently scheduled to be automatically finalized. |
| `billing_reason` | `string` | No | Indicates the reason why the invoice was created. |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `confirmation_secret` | `any` | No | The confirmation secret associated with this invoice. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `any[]` | No | Custom fields displayed on the invoice. |
| `customer` | `any` | Yes | The ID of the customer to bill. |
| `customer_account` | `string` | No | The ID of the account representing the customer to bill. |
| `customer_address` | `any` | No | The customer's address. |
| `customer_email` | `string` | No | The customer's email. |
| `customer_name` | `string` | No | The customer's name. |
| `customer_phone` | `string` | No | The customer's phone number. |
| `customer_shipping` | `any` | No | The customer's shipping information. |
| `customer_tax_exempt` | `string` | No | The customer's tax exempt status. |
| `customer_tax_ids` | `any[]` | No | The customer's tax IDs. |
| `default_payment_method` | `any` | No | ID of the default payment method for the invoice. |
| `default_source` | `any` | No | ID of the default payment source for the invoice. |
| `default_tax_rates` | `any[]` | Yes | The tax rates applied to this invoice, if any. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discounts` | `any[]` | Yes | The discounts applied to the invoice. |
| `due_date` | `number` | No | The date on which payment for this invoice is due. |
| `effective_at` | `number` | No | The date when this invoice is in effect. |
| `ending_balance` | `number` | No | Ending customer balance after the invoice is finalized. |
| `footer` | `string` | No | Footer displayed on the invoice. |
| `from_invoice` | `any` | No | Details of the invoice that was cloned. |
| `hosted_invoice_url` | `string` | No | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice_pdf` | `string` | No | The link to download the PDF for the invoice. |
| `issuer` | `Record<string, any>` | Yes |  |
| `last_finalization_error` | `any` | No | The error encountered during the previous attempt to finalize the invoice. |
| `latest_revision` | `any` | No | The ID of the most recent non-draft revision of this invoice |
| `lines` | `Record<string, any>` | Yes | The individual line items that make up the invoice. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_payment_attempt` | `number` | No | The time at which payment will next be attempted. |
| `number` | `string` | No | A unique, identifying string that appears on emails sent to the customer for this invoice. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) for which the funds of the invoice payment are intended. |
| `parent` | `any` | No | The parent that generated this invoice |
| `payment_settings` | `Record<string, any>` | Yes |  |
| `payments` | `Record<string, any>` | Yes | Payments for this invoice. |
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
| `status_details` | `Record<string, any>` | No |  |
| `status_transitions` | `Record<string, any>` | Yes |  |
| `subtotal` | `number` | Yes | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `number` | No | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `test_clock` | `any` | No | ID of the test clock this invoice belongs to. |
| `threshold_reason` | `Record<string, any>` | Yes |  |
| `total` | `number` | Yes | Total after discounts and taxes. |
| `total_discount_amounts` | `any[]` | No | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `number` | No | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `any[]` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `any[]` | No | The aggregate tax information of all line items. |
| `webhooks_delivered_at` | `number` | No | Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://docs.stripe.com/billing/webhooks#understand). |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `add_line` | `/v1/invoices/{invoice}/add_lines` | `client.Invoice().create({ $action: 'add_line', ... })` |
| `attach_payment` | `/v1/invoices/{invoice}/attach_payment` | `client.Invoice().create({ $action: 'attach_payment', ... })` |
| `create_preview` | `/v1/invoices/create_preview` | `client.Invoice().create({ $action: 'create_preview', ... })` |
| `finalize` | `/v1/invoices/{invoice}/finalize` | `client.Invoice().create({ $action: 'finalize', ... })` |
| `mark_uncollectible` | `/v1/invoices/{invoice}/mark_uncollectible` | `client.Invoice().create({ $action: 'mark_uncollectible', ... })` |
| `pay` | `/v1/invoices/{invoice}/pay` | `client.Invoice().create({ $action: 'pay', ... })` |
| `remove_line` | `/v1/invoices/{invoice}/remove_lines` | `client.Invoice().create({ $action: 'remove_line', ... })` |
| `send` | `/v1/invoices/{invoice}/send` | `client.Invoice().create({ $action: 'send', ... })` |
| `update_line` | `/v1/invoices/{invoice}/update_lines` | `client.Invoice().create({ $action: 'update_line', ... })` |
| `void` | `/v1/invoices/{invoice}/void` | `client.Invoice().create({ $action: 'void', ... })` |

An action returns that action's OWN response, which is not necessarily a
Invoice record — check the API definition for its shape.

```ts
const result = await client.Invoice().create({
  $action: 'add_line',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Invoice().create({
  id: 'example_id',
  amount_due: 1,
  amount_overpaid: 1,
  amount_paid: 1,
  amount_paid_off_stripe: 1,
  amount_remaining: 1,
  amount_shipping: 1,
  attempt_count: 1,
  attempted: true,
  auto_advance: true,
  automatic_tax: {},
  collection_method: 'example_collection_method',
  created: 1,
  currency: 'example_currency',
  customer: 'example_customer',
  default_tax_rates: [],
  discounts: [],
  issuer: {},
  lines: {},
  livemode: true,
  object: 'example_object',
  payment_settings: {},
  payments: {},
  period_end: 1,
  period_start: 1,
  post_payment_credit_notes_amount: 1,
  pre_payment_credit_notes_amount: 1,
  starting_balance: 1,
  status_transitions: {},
  subtotal: 1,
  threshold_reason: {},
  total: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Invoice().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Invoice().load({ id: 'invoice_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Invoice().remove({ id: 'invoice_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InvoicePaymentEntity

```ts
const invoice_payment = client.InvoicePayment()
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
| `payment` | `Record<string, any>` | Yes |  |
| `status` | `string` | Yes | The status of the payment, one of `open`, `paid`, or `canceled`. |
| `status_transitions` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.InvoicePayment().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.InvoicePayment().load({ id: 'invoice_payment_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InvoicePaymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InvoiceRenderingTemplateEntity

```ts
const invoice_rendering_template = client.InvoiceRenderingTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | No | A brief description of the template, hidden from customers |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The status of the template, one of `active` or `archived`. |
| `version` | `number` | Yes | Version of this template; version increases by one when an update on the template changes any field that controls invoice rendering |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `archive` | `/v1/invoice_rendering_templates/{template}/archive` | `client.InvoiceRenderingTemplate().create({ $action: 'archive', ... })` |
| `unarchive` | `/v1/invoice_rendering_templates/{template}/unarchive` | `client.InvoiceRenderingTemplate().create({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
InvoiceRenderingTemplate record — check the API definition for its shape.

```ts
const result = await client.InvoiceRenderingTemplate().create({
  $action: 'archive',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.InvoiceRenderingTemplate().create({
  template: 'example_template',
  created: 1,
  id: 'example_id',
  livemode: true,
  object: 'example_object',
  status: 'example_status',
  version: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.InvoiceRenderingTemplate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.InvoiceRenderingTemplate().load({ id: 'invoice_rendering_template_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InvoiceRenderingTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InvoiceitemEntity

```ts
const invoiceitem = client.Invoiceitem()
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
| `discounts` | `any[]` | No | The discounts which apply to the invoice item. |
| `frozen_fields` | `any[]` | No | Array of field names that can't be modified. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | No | The ID of the invoice this invoice item belongs to. |
| `invoicing_rules` | `any[]` | No | The rules that control when this invoice item is eligible for invoicing. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `net_amount` | `number` | No | The amount after discounts, but before credits and taxes. |
| `object` | `string` | Yes | String representing the object's type. |
| `parent` | `any` | No | The parent that generated this invoice item. |
| `period` | `Record<string, any>` | Yes |  |
| `pricing` | `any` | No | The pricing information of the invoice item. |
| `proration` | `boolean` | Yes | Whether the invoice item was created automatically as a proration adjustment when the customer switched plans. |
| `proration_details` | `Record<string, any>` | Yes |  |
| `quantity` | `number` | Yes | Quantity of units for the invoice item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `string` | Yes | Non-negative decimal with at most 12 decimal places. |
| `tax_rates` | `any[]` | No | The tax rates which apply to the invoice item. |
| `test_clock` | `any` | No | ID of the test clock this invoice item belongs to. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Invoiceitem().create({
  id: 'example_id',
  amount: 1,
  currency: 'example_currency',
  customer: 'example_customer',
  date: 1,
  discountable: true,
  livemode: true,
  object: 'example_object',
  period: {},
  proration: true,
  proration_details: {},
  quantity: 1,
  quantity_decimal: 'example_quantity_decimal',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Invoiceitem().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Invoiceitem().load({ id: 'invoiceitem_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InvoiceitemEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LineEntity

```ts
const line = client.Line()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | The amount, in cents (or local equivalent). |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discount_amount` | `number` | Yes | The integer amount in cents (or local equivalent) representing the discount being credited for this line item. |
| `discount_amounts` | `any[]` | No | The amount of discount calculated per discount for this line item. |
| `discountable` | `boolean` | Yes | If true, discounts will apply to this line item. |
| `discounts` | `any[]` | Yes | The discounts applied to the invoice line item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `string` | No | The ID of the invoice that contains this line item. |
| `invoice_line_item` | `string` | No | ID of the invoice line item being credited |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `parent` | `any` | No | The parent that generated this line item. |
| `period` | `Record<string, any>` | Yes |  |
| `pretax_credit_amounts` | `any[]` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item. |
| `pricing` | `any` | No | The pricing information of the line item. |
| `quantity` | `number` | No | Quantity of units for the invoice line item in integer format, with any decimal precision truncated. |
| `quantity_decimal` | `string` | No | Non-negative decimal with at most 12 decimal places. |
| `subscription` | `any` | No |  |
| `subtotal` | `number` | Yes | The subtotal of the line item, in cents (or local equivalent), before any discounts or taxes. |
| `tax_rates` | `any[]` | Yes | The tax rates which apply to the line item. |
| `taxes` | `any[]` | No | The tax information of the line item. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Line().create({
  id: 'example_id',
  invoice_id: 'example_invoice_id',
  amount: 1,
  currency: 'example_currency',
  discount_amount: 1,
  discountable: true,
  discounts: [],
  livemode: true,
  metadata: {},
  object: 'example_object',
  period: {},
  subtotal: 1,
  tax_rates: [],
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Line().list({ invoice: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LineEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LineItemEntity

```ts
const line_item = client.LineItem()
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
| `discounts` | `any[]` | No | The discounts applied to the line item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `performance_location` | `string` | No | Indicates the line item represents a performance where the venue location might determine the tax, not the customer address. |
| `price` | `number` | No | The price used to generate the line item. |
| `product` | `string` | No | The ID of an existing [Product](https://docs.stripe.com/api/products/object). |
| `quantity` | `number` | Yes | The number of units of the item being purchased. |
| `reference` | `string` | Yes | A custom identifier for this line item. |
| `reversal` | `any` | No | If `type=reversal`, contains information about what was reversed. |
| `tax_behavior` | `string` | Yes | Specifies whether the `amount` includes taxes. |
| `tax_breakdown` | `any[]` | No | Detailed account of taxes relevant to this line item. |
| `tax_code` | `string` | Yes | The [tax code](https://docs.stripe.com/tax/tax-categories) ID used for this resource. |
| `taxes` | `any[]` | No | The taxes applied to the line item. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LineItem().list({ payment_link_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LineItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LinkedAccountEntity

```ts
const linked_account = client.LinkedAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `any` | No | The account holder that this account belongs to. |
| `account_numbers` | `any[]` | No | Details about the account numbers. |
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
| `permissions` | `any[]` | No | The list of permissions granted by this account. |
| `status` | `string` | Yes | The status of the link to the account. |
| `status_details` | `Record<string, any>` | No |  |
| `subcategory` | `string` | Yes | If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`. |
| `subscriptions` | `any[]` | No | The list of data refresh subscriptions requested on this account. |
| `supported_payment_method_types` | `any[]` | Yes | The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account. |
| `transaction_refresh` | `any` | No | The state of the most recent attempt to refresh the account transactions. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LinkedAccount().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LinkedAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LinkedAccountOwnerEntity

```ts
const linked_account_owner = client.LinkedAccountOwner()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LinkedAccountOwner().list({ account: "example", ownership: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LinkedAccountOwnerEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LocationEntity

```ts
const location = client.Location()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `Record<string, any>` | Yes |  |
| `address_kana` | `Record<string, any>` | No |  |
| `address_kanji` | `Record<string, any>` | No |  |
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
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `phone` | `string` | No | The phone number of the location. |
| `postal_code` | `string` | No | ZIP or postal code. |
| `state` | `string` | No | State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)). |
| `type` | `string` | Yes | The type of tax location to be defined. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Location().create({
  id: 'example_id',
  address: {},
  display_name: 'example_display_name',
  livemode: true,
  metadata: {},
  object: 'example_object',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Location().list({ type: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Location().load({ id: 'location_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Location().remove({ id: 'location_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LocationEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LoginLinkEntity

```ts
const login_link = client.LoginLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `object` | `string` | Yes | String representing the object's type. |
| `url` | `string` | Yes | The URL for the login link. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LoginLink().create({
  account_id: 'example_account_id',
  created: 1,
  object: 'example_object',
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LoginLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MandateEntity

```ts
const mandate = client.Mandate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_acceptance` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `multi_use` | `Record<string, any>` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `string` | No | The account (if any) that the mandate is intended for. |
| `payment_method` | `any` | Yes | ID of the payment method associated with this mandate. |
| `payment_method_details` | `Record<string, any>` | Yes |  |
| `single_use` | `Record<string, any>` | Yes |  |
| `status` | `string` | Yes | The mandate status indicates whether or not you can use it to initiate a payment. |
| `type` | `string` | Yes | The type of the mandate. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Mandate().load({ id: 'mandate_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MandateEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MeterEntity

```ts
const meter = client.Meter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer_mapping` | `Record<string, any>` | Yes |  |
| `default_aggregation` | `Record<string, any>` | Yes |  |
| `display_name` | `string` | Yes | The meter's name. |
| `event_name` | `string` | Yes | The name of the meter event to record usage for. |
| `event_time_window` | `string` | No | The time window which meter events have been pre-aggregated for, if any. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The meter's status. |
| `status_transitions` | `Record<string, any>` | Yes |  |
| `updated` | `number` | Yes | Time at which the object was last updated. |
| `value_settings` | `Record<string, any>` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `deactivate` | `/v1/billing/meters/{id}/deactivate` | `client.Meter().create({ $action: 'deactivate', ... })` |
| `reactivate` | `/v1/billing/meters/{id}/reactivate` | `client.Meter().create({ $action: 'reactivate', ... })` |

An action returns that action's OWN response, which is not necessarily a
Meter record — check the API definition for its shape.

```ts
const result = await client.Meter().create({
  $action: 'deactivate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Meter().create({
  id: 'example_id',
  created: 1,
  customer_mapping: {},
  default_aggregation: {},
  display_name: 'example_display_name',
  event_name: 'example_event_name',
  livemode: true,
  object: 'example_object',
  status: 'example_status',
  status_transitions: {},
  updated: 1,
  value_settings: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Meter().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Meter().load({ id: 'meter_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MeterEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MeterEventEntity

```ts
const meter_event = client.MeterEvent()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.MeterEvent().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MeterEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MeterEventAdjustmentEntity

```ts
const meter_event_adjustment = client.MeterEventAdjustment()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.MeterEventAdjustment().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MeterEventAdjustmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MeterEventSummaryEntity

```ts
const meter_event_summary = client.MeterEventSummary()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MeterEventSummary().list({ id: "example", customer: "example", end_time: 1, start_time: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MeterEventSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OnboardingLinkEntity

```ts
const onboarding_link = client.OnboardingLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apple_terms_and_conditions` | `any` | No | The options associated with the Apple Terms and Conditions link type. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OnboardingLink().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OnboardingLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrderEntity

```ts
const order = client.Order()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_fees` | `number` | Yes | Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit. |
| `amount_subtotal` | `number` | Yes | Total amount of the carbon removal in the currency's smallest unit. |
| `amount_total` | `number` | Yes | Total amount of the order including fees in the currency's smallest unit. |
| `beneficiary` | `Record<string, any>` | Yes |  |
| `canceled_at` | `number` | No | Time at which the order was canceled. |
| `cancellation_reason` | `string` | No | Reason for the cancellation of this order. |
| `certificate` | `string` | No | For delivered orders, a URL to a delivery certificate for the order. |
| `confirmed_at` | `number` | No | Time at which the order was confirmed. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order. |
| `delayed_at` | `number` | No | Time at which the order's expected_delivery_year was delayed. |
| `delivered_at` | `number` | No | Time at which the order was delivered. |
| `delivery_details` | `any[]` | Yes | Details about the delivery of carbon removal for this order. |
| `expected_delivery_year` | `number` | Yes | The year this order is expected to be delivered. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons` | `string` | Yes | Quantity of carbon removal that is included in this order. |
| `object` | `string` | Yes | String representing the object's type. |
| `product` | `any` | Yes | Unique ID for the Climate `Product` this order is purchasing. |
| `product_substituted_at` | `number` | No | Time at which the order's product was substituted for a different product. |
| `status` | `string` | Yes | The current status of this order. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/v1/climate/orders/{order}/cancel` | `client.Order().create({ $action: 'cancel', ... })` |

An action returns that action's OWN response, which is not necessarily a
Order record — check the API definition for its shape.

```ts
const result = await client.Order().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Order().create({
  id: 'example_id',
  amount_fees: 1,
  amount_subtotal: 1,
  amount_total: 1,
  beneficiary: {},
  created: 1,
  currency: 'example_currency',
  delivery_details: [],
  expected_delivery_year: 1,
  livemode: true,
  metadata: {},
  metric_tons: 'example_metric_tons',
  object: 'example_object',
  product: 'example_product',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Order().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Order().load({ id: 'order_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrderEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OutboundPaymentEntity

```ts
const outbound_payment = client.OutboundPayment()
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
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `returned_details` | `any` | No | Details about a returned OutboundPayment. |
| `statement_descriptor` | `string` | Yes | The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer). |
| `status` | `string` | Yes | Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. |
| `status_transitions` | `Record<string, any>` | Yes |  |
| `tracking_details` | `any` | No | Details about network-specific tracking information if available. |
| `transaction` | `any` | Yes | The Transaction associated with this object. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/v1/treasury/outbound_payments/{id}/cancel` | `client.OutboundPayment().create({ $action: 'cancel', ... })` |
| `fail` | `/v1/test_helpers/treasury/outbound_payments/{id}/fail` | `client.OutboundPayment().create({ $action: 'fail', ... })` |
| `post` | `/v1/test_helpers/treasury/outbound_payments/{id}/post` | `client.OutboundPayment().create({ $action: 'post', ... })` |
| `return` | `/v1/test_helpers/treasury/outbound_payments/{id}/return` | `client.OutboundPayment().create({ $action: 'return', ... })` |

An action returns that action's OWN response, which is not necessarily a
OutboundPayment record — check the API definition for its shape.

```ts
const result = await client.OutboundPayment().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OutboundPayment().create({
  id: 'example_id',
  amount: 1,
  cancelable: true,
  created: 1,
  currency: 'example_currency',
  expected_arrival_date: 1,
  financial_account: 'example_financial_account',
  livemode: true,
  metadata: {},
  object: 'example_object',
  statement_descriptor: 'example_statement_descriptor',
  status: 'example_status',
  status_transitions: {},
  transaction: 'example_transaction',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OutboundPayment().list({ financial_account: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OutboundPayment().load({ id: 'outbound_payment_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OutboundPaymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OutboundTransferEntity

```ts
const outbound_transfer = client.OutboundTransfer()
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
| `destination_payment_method_details` | `Record<string, any>` | Yes |  |
| `expected_arrival_date` | `number` | Yes | The date when funds are expected to arrive in the destination account. |
| `financial_account` | `string` | Yes | The FinancialAccount that funds were pulled from. |
| `hosted_regulatory_receipt_url` | `string` | No | A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `returned_details` | `any` | No | Details about a returned OutboundTransfer. |
| `statement_descriptor` | `string` | Yes | Information about the OutboundTransfer to be sent to the recipient account. |
| `status` | `string` | Yes | Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. |
| `status_transitions` | `Record<string, any>` | Yes |  |
| `tracking_details` | `any` | No | Details about network-specific tracking information if available. |
| `transaction` | `any` | Yes | The Transaction associated with this object. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/v1/treasury/outbound_transfers/{outbound_transfer}/cancel` | `client.OutboundTransfer().create({ $action: 'cancel', ... })` |
| `fail` | `/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail` | `client.OutboundTransfer().create({ $action: 'fail', ... })` |
| `post` | `/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post` | `client.OutboundTransfer().create({ $action: 'post', ... })` |
| `return` | `/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return` | `client.OutboundTransfer().create({ $action: 'return', ... })` |

An action returns that action's OWN response, which is not necessarily a
OutboundTransfer record — check the API definition for its shape.

```ts
const result = await client.OutboundTransfer().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OutboundTransfer().create({
  id: 'example_id',
  amount: 1,
  cancelable: true,
  created: 1,
  currency: 'example_currency',
  destination_payment_method_details: {},
  expected_arrival_date: 1,
  financial_account: 'example_financial_account',
  livemode: true,
  metadata: {},
  object: 'example_object',
  statement_descriptor: 'example_statement_descriptor',
  status: 'example_status',
  status_transitions: {},
  transaction: 'example_transaction',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OutboundTransfer().list({ financial_account: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OutboundTransfer().load({ id: 'outbound_transfer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OutboundTransferEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentAttemptRecordEntity

```ts
const payment_attempt_record = client.PaymentAttemptRecord()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `string` | No | ID of the Connect application that created the PaymentAttemptRecord. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer_details` | `any` | No | Customer information for this payment. |
| `customer_presence` | `string` | No | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method_details` | `any` | No | Information about the Payment Method debited for this payment. |
| `payment_record` | `string` | No | ID of the Payment Record this Payment Attempt Record belongs to. |
| `processor_details` | `Record<string, any>` | Yes | Processor information associated with this payment. |
| `reported_by` | `string` | Yes | Indicates who reported the payment. |
| `shipping_details` | `any` | No | Shipping information for this payment. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentAttemptRecord().list({ payment_record: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PaymentAttemptRecord().load({ id: 'payment_attempt_record_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentAttemptRecordEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentEvaluationEntity

```ts
const payment_evaluation = client.PaymentEvaluation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_device_metadata_details` | `Record<string, any>` | Yes | Client device metadata attached to this payment evaluation. |
| `created_at` | `number` | Yes | Time at which the object was created. |
| `customer_details` | `Record<string, any>` | No | Customer details attached to this payment evaluation. |
| `events` | `any[]` | Yes | Event information associated with the payment evaluation, such as refunds, dispute, early fraud warnings, or user interventions. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `outcome` | `any` | No | Indicates the final outcome for the payment evaluation. |
| `payment_details` | `Record<string, any>` | Yes | Payment details attached to this payment evaluation. |
| `recommended_action` | `string` | Yes | Recommended action based on the score of the `fraudulent_payment` signal. |
| `signals` | `Record<string, any>` | Yes | Collection of signals for this payment evaluation. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PaymentEvaluation().create({
  client_device_metadata_details: {},
  created_at: 1,
  events: [],
  id: 'example_id',
  livemode: true,
  object: 'example_object',
  payment_details: {},
  recommended_action: 'example_recommended_action',
  signals: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentEvaluationEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentIntentEntity

```ts
const payment_intent = client.PaymentIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_payment_method_types` | `any[]` | No | The list of payment method types allowed for use with this payment. |
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
| `excluded_payment_method_types` | `any[]` | No | The list of payment method types to exclude from use with this payment. |
| `hooks` | `Record<string, any>` | No |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last_payment_error` | `any` | No | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `any` | No | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | No | Settings for Managed Payments. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `any` | No | If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | You can specify the settlement merchant as the connected account using the `on_behalf_of` attribute on the charge. |
| `payment_details` | `Record<string, any>` | No |  |
| `payment_method` | `any` | No | ID of the payment method used in this PaymentIntent. |
| `payment_method_configuration_details` | `any` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `any[]` | No | The list of payment method types (e.g. |
| `payment_record` | `any` | No | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `presentment_details` | `Record<string, any>` | Yes |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `apply_customer_balance` | `/v1/payment_intents/{intent}/apply_customer_balance` | `client.PaymentIntent().create({ $action: 'apply_customer_balance', ... })` |
| `cancel` | `/v1/payment_intents/{intent}/cancel` | `client.PaymentIntent().create({ $action: 'cancel', ... })` |
| `capture` | `/v1/payment_intents/{intent}/capture` | `client.PaymentIntent().create({ $action: 'capture', ... })` |
| `confirm` | `/v1/payment_intents/{intent}/confirm` | `client.PaymentIntent().create({ $action: 'confirm', ... })` |
| `increment_authorization` | `/v1/payment_intents/{intent}/increment_authorization` | `client.PaymentIntent().create({ $action: 'increment_authorization', ... })` |
| `verify_microdeposit` | `/v1/payment_intents/{intent}/verify_microdeposits` | `client.PaymentIntent().create({ $action: 'verify_microdeposit', ... })` |

An action returns that action's OWN response, which is not necessarily a
PaymentIntent record — check the API definition for its shape.

```ts
const result = await client.PaymentIntent().create({
  $action: 'apply_customer_balance',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PaymentIntent().create({
  id: 'example_id',
  created: 1,
  livemode: true,
  object: 'example_object',
  presentment_details: {},
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentIntent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PaymentIntent().load({ id: 'payment_intent_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentIntentEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentIntentAmountDetailsLineItemEntity

```ts
const payment_intent_amount_details_line_item = client.PaymentIntentAmountDetailsLineItem()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentIntentAmountDetailsLineItem().list({ intent: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentIntentAmountDetailsLineItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentLinkEntity

```ts
const payment_link = client.PaymentLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the payment link's `url` is active. |
| `after_completion` | `Record<string, any>` | Yes |  |
| `allow_promotion_codes` | `boolean` | Yes | Whether user redeemable promotion codes are enabled. |
| `application` | `any` | No | The ID of the Connect application that created the Payment Link. |
| `application_fee_amount` | `number` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `number` | No | This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. |
| `automatic_tax` | `Record<string, any>` | Yes |  |
| `billing_address_collection` | `string` | Yes | Configuration for collecting the customer's billing address. |
| `consent_collection` | `any` | No | When set, provides configuration to gather active consent from customers. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `custom_fields` | `any[]` | Yes | Collect additional information from your customer using custom fields. |
| `custom_text` | `Record<string, any>` | Yes |  |
| `customer_creation` | `string` | Yes | Configuration for Customer creation during checkout. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `inactive_message` | `string` | No | The custom message to be displayed to a customer when a payment link is no longer active. |
| `invoice_creation` | `any` | No | Configuration for creating invoice for payment mode payment links. |
| `line_items` | `Record<string, any>` | Yes | The line items representing what is being sold. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | No | Settings for Managed Payments for this Payment Link and resulting [CheckoutSessions](/api/checkout/sessions/object), [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/ob… |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name_collection` | `Record<string, any>` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account on behalf of which to charge. |
| `optional_items` | `any[]` | No | The optional items presented to the customer at checkout. |
| `payment_intent_data` | `any` | No | Indicates the parameters to be passed to PaymentIntent creation during checkout. |
| `payment_method_collection` | `string` | Yes | Configuration for collecting a payment method during checkout. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration. |
| `payment_method_types` | `any[]` | No | The list of payment method types that customers can use. |
| `phone_number_collection` | `Record<string, any>` | Yes |  |
| `restrictions` | `any` | No | Settings that restrict the usage of a payment link. |
| `shipping_address_collection` | `any` | No | Configuration for collecting the customer's shipping address. |
| `shipping_options` | `any[]` | Yes | The shipping rate options applied to the session. |
| `submit_type` | `string` | Yes | Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button. |
| `subscription_data` | `any` | No | When creating a subscription, the specified configuration data will be used. |
| `tax_id_collection` | `Record<string, any>` | Yes |  |
| `transfer_data` | `any` | No | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to. |
| `url` | `string` | Yes | The public URL that can be shared with customers. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PaymentLink().create({
  id: 'example_id',
  active: true,
  after_completion: {},
  allow_promotion_codes: true,
  automatic_tax: {},
  billing_address_collection: 'example_billing_address_collection',
  currency: 'example_currency',
  custom_fields: [],
  custom_text: {},
  customer_creation: 'example_customer_creation',
  line_items: {},
  livemode: true,
  metadata: {},
  object: 'example_object',
  payment_method_collection: 'example_payment_method_collection',
  phone_number_collection: {},
  shipping_options: [],
  submit_type: 'example_submit_type',
  tax_id_collection: {},
  url: 'example_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentLink().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PaymentLink().load({ id: 'payment_link_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentMethodEntity

```ts
const payment_method = client.PaymentMethod()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `Record<string, any>` | No |  |
| `affirm` | `Record<string, any>` | No |  |
| `afterpay_clearpay` | `Record<string, any>` | No |  |
| `alipay` | `Record<string, any>` | No |  |
| `allow_redisplay` | `boolean` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `alma` | `Record<string, any>` | No |  |
| `amazon_pay` | `Record<string, any>` | No |  |
| `au_becs_debit` | `Record<string, any>` | No |  |
| `bacs_debit` | `Record<string, any>` | No |  |
| `bancontact` | `Record<string, any>` | No |  |
| `billie` | `Record<string, any>` | No |  |
| `billing_details` | `Record<string, any>` | Yes |  |
| `bizum` | `Record<string, any>` | No |  |
| `blik` | `Record<string, any>` | No |  |
| `boleto` | `Record<string, any>` | Yes |  |
| `card` | `Record<string, any>` | Yes |  |
| `card_present` | `Record<string, any>` | Yes |  |
| `cashapp` | `Record<string, any>` | No |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `crypto` | `Record<string, any>` | No |  |
| `custom` | `Record<string, any>` | Yes |  |
| `customer` | `any` | No | The ID of the Customer to which this PaymentMethod is saved. |
| `customer_account` | `string` | No |  |
| `customer_balance` | `Record<string, any>` | No |  |
| `eps` | `Record<string, any>` | No |  |
| `fpx` | `Record<string, any>` | Yes |  |
| `giropay` | `Record<string, any>` | No |  |
| `grabpay` | `Record<string, any>` | No |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ideal` | `Record<string, any>` | No |  |
| `interac_present` | `Record<string, any>` | Yes |  |
| `kakao_pay` | `Record<string, any>` | No |  |
| `klarna` | `Record<string, any>` | No |  |
| `konbini` | `Record<string, any>` | No |  |
| `kr_card` | `Record<string, any>` | No |  |
| `link` | `Record<string, any>` | No |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `mb_way` | `Record<string, any>` | No |  |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mobilepay` | `Record<string, any>` | No |  |
| `multibanco` | `Record<string, any>` | No |  |
| `naver_pay` | `Record<string, any>` | Yes |  |
| `nz_bank_account` | `Record<string, any>` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `oxxo` | `Record<string, any>` | No |  |
| `p24` | `Record<string, any>` | No |  |
| `pay_by_bank` | `Record<string, any>` | No |  |
| `payco` | `Record<string, any>` | No |  |
| `paynow` | `Record<string, any>` | No |  |
| `paypal` | `Record<string, any>` | No |  |
| `paypay` | `Record<string, any>` | No |  |
| `payto` | `Record<string, any>` | No |  |
| `pix` | `Record<string, any>` | No |  |
| `promptpay` | `Record<string, any>` | No |  |
| `radar_options` | `Record<string, any>` | No | Options to configure Radar. |
| `revolut_pay` | `Record<string, any>` | No |  |
| `samsung_pay` | `Record<string, any>` | No |  |
| `satispay` | `Record<string, any>` | No |  |
| `scalapay` | `Record<string, any>` | No |  |
| `sepa_debit` | `Record<string, any>` | No |  |
| `sequra` | `Record<string, any>` | No |  |
| `sofort` | `Record<string, any>` | No |  |
| `sunbit` | `Record<string, any>` | No |  |
| `swish` | `Record<string, any>` | No |  |
| `twint` | `Record<string, any>` | No |  |
| `type` | `string` | Yes | The type of the PaymentMethod. |
| `upi` | `Record<string, any>` | No |  |
| `us_bank_account` | `Record<string, any>` | No |  |
| `wechat_pay` | `Record<string, any>` | No |  |
| `zip` | `Record<string, any>` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `attach` | `/v1/payment_methods/{payment_method}/attach` | `client.PaymentMethod().create({ $action: 'attach', ... })` |
| `detach` | `/v1/payment_methods/{payment_method}/detach` | `client.PaymentMethod().create({ $action: 'detach', ... })` |

An action returns that action's OWN response, which is not necessarily a
PaymentMethod record — check the API definition for its shape.

```ts
const result = await client.PaymentMethod().create({
  $action: 'attach',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PaymentMethod().create({
  id: 'example_id',
  billing_details: {},
  boleto: {},
  card: {},
  card_present: {},
  created: 1,
  custom: {},
  fpx: {},
  interac_present: {},
  livemode: true,
  naver_pay: {},
  nz_bank_account: {},
  object: 'example_object',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentMethod().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PaymentMethod().load({ id: 'payment_method_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentMethodEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentMethodConfigurationEntity

```ts
const payment_method_configuration = client.PaymentMethodConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `Record<string, any>` | Yes |  |
| `active` | `boolean` | Yes | Whether the configuration can be used for new payments. |
| `affirm` | `Record<string, any>` | Yes |  |
| `afterpay_clearpay` | `Record<string, any>` | Yes |  |
| `alipay` | `Record<string, any>` | Yes |  |
| `alma` | `Record<string, any>` | Yes |  |
| `amazon_pay` | `Record<string, any>` | Yes |  |
| `apple_pay` | `Record<string, any>` | Yes |  |
| `application` | `string` | No | For child configs, the Connect application associated with the configuration. |
| `au_becs_debit` | `Record<string, any>` | Yes |  |
| `bacs_debit` | `Record<string, any>` | Yes |  |
| `bancontact` | `Record<string, any>` | Yes |  |
| `billie` | `Record<string, any>` | Yes |  |
| `bizum` | `Record<string, any>` | Yes |  |
| `blik` | `Record<string, any>` | Yes |  |
| `boleto` | `Record<string, any>` | Yes |  |
| `card` | `Record<string, any>` | Yes |  |
| `cartes_bancaires` | `Record<string, any>` | Yes |  |
| `cashapp` | `Record<string, any>` | Yes |  |
| `crypto` | `Record<string, any>` | Yes |  |
| `customer_balance` | `Record<string, any>` | Yes |  |
| `eps` | `Record<string, any>` | Yes |  |
| `fpx` | `Record<string, any>` | Yes |  |
| `giropay` | `Record<string, any>` | Yes |  |
| `google_pay` | `Record<string, any>` | Yes |  |
| `grabpay` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ideal` | `Record<string, any>` | Yes |  |
| `is_default` | `boolean` | Yes | The default configuration is used whenever a payment method configuration is not specified. |
| `jcb` | `Record<string, any>` | Yes |  |
| `kakao_pay` | `Record<string, any>` | Yes |  |
| `klarna` | `Record<string, any>` | Yes |  |
| `konbini` | `Record<string, any>` | Yes |  |
| `kr_card` | `Record<string, any>` | Yes |  |
| `link` | `Record<string, any>` | Yes |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `mb_way` | `Record<string, any>` | Yes |  |
| `mobilepay` | `Record<string, any>` | Yes |  |
| `multibanco` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes | The configuration's name. |
| `naver_pay` | `Record<string, any>` | Yes |  |
| `nz_bank_account` | `Record<string, any>` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `oxxo` | `Record<string, any>` | Yes |  |
| `p24` | `Record<string, any>` | Yes |  |
| `parent` | `string` | No | For child configs, the configuration's parent configuration. |
| `pay_by_bank` | `Record<string, any>` | Yes |  |
| `payco` | `Record<string, any>` | Yes |  |
| `paynow` | `Record<string, any>` | Yes |  |
| `paypal` | `Record<string, any>` | Yes |  |
| `paypay` | `Record<string, any>` | Yes |  |
| `payto` | `Record<string, any>` | Yes |  |
| `pix` | `Record<string, any>` | Yes |  |
| `promptpay` | `Record<string, any>` | Yes |  |
| `revolut_pay` | `Record<string, any>` | Yes |  |
| `samsung_pay` | `Record<string, any>` | Yes |  |
| `satispay` | `Record<string, any>` | Yes |  |
| `scalapay` | `Record<string, any>` | Yes |  |
| `sepa_debit` | `Record<string, any>` | Yes |  |
| `sequra` | `Record<string, any>` | Yes |  |
| `sofort` | `Record<string, any>` | Yes |  |
| `sunbit` | `Record<string, any>` | Yes |  |
| `swish` | `Record<string, any>` | Yes |  |
| `twint` | `Record<string, any>` | Yes |  |
| `upi` | `Record<string, any>` | Yes |  |
| `us_bank_account` | `Record<string, any>` | Yes |  |
| `wechat_pay` | `Record<string, any>` | Yes |  |
| `zip` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PaymentMethodConfiguration().create({
  id: 'example_id',
  acss_debit: {},
  active: true,
  affirm: {},
  afterpay_clearpay: {},
  alipay: {},
  alma: {},
  amazon_pay: {},
  apple_pay: {},
  au_becs_debit: {},
  bacs_debit: {},
  bancontact: {},
  billie: {},
  bizum: {},
  blik: {},
  boleto: {},
  card: {},
  cartes_bancaires: {},
  cashapp: {},
  crypto: {},
  customer_balance: {},
  eps: {},
  fpx: {},
  giropay: {},
  google_pay: {},
  grabpay: {},
  ideal: {},
  is_default: true,
  jcb: {},
  kakao_pay: {},
  klarna: {},
  konbini: {},
  kr_card: {},
  link: {},
  livemode: true,
  mb_way: {},
  mobilepay: {},
  multibanco: {},
  name: 'example_name',
  naver_pay: {},
  nz_bank_account: {},
  object: 'example_object',
  oxxo: {},
  p24: {},
  pay_by_bank: {},
  payco: {},
  paynow: {},
  paypal: {},
  paypay: {},
  payto: {},
  pix: {},
  promptpay: {},
  revolut_pay: {},
  samsung_pay: {},
  satispay: {},
  scalapay: {},
  sepa_debit: {},
  sequra: {},
  sofort: {},
  sunbit: {},
  swish: {},
  twint: {},
  upi: {},
  us_bank_account: {},
  wechat_pay: {},
  zip: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentMethodConfiguration().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PaymentMethodConfiguration().load({ id: 'payment_method_configuration_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentMethodConfigurationEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentMethodDomainEntity

```ts
const payment_method_domain = client.PaymentMethodDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amazon_pay` | `Record<string, any>` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `apple_pay` | `Record<string, any>` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `created` | `number` | Yes | Time at which the object was created. |
| `domain_name` | `string` | Yes | The domain name that this payment method domain object represents. |
| `enabled` | `boolean` | Yes | Whether this payment method domain is enabled. |
| `google_pay` | `Record<string, any>` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `klarna` | `Record<string, any>` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `link` | `Record<string, any>` | Yes | Indicates the status of a specific payment method on a payment method domain. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `paypal` | `Record<string, any>` | Yes | Indicates the status of a specific payment method on a payment method domain. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `validate` | `/v1/payment_method_domains/{payment_method_domain}/validate` | `client.PaymentMethodDomain().create({ $action: 'validate', ... })` |

An action returns that action's OWN response, which is not necessarily a
PaymentMethodDomain record — check the API definition for its shape.

```ts
const result = await client.PaymentMethodDomain().create({
  $action: 'validate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PaymentMethodDomain().create({
  id: 'example_id',
  amazon_pay: {},
  apple_pay: {},
  created: 1,
  domain_name: 'example_domain_name',
  enabled: true,
  google_pay: {},
  klarna: {},
  link: {},
  livemode: true,
  object: 'example_object',
  paypal: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentMethodDomain().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PaymentMethodDomain().load({ id: 'payment_method_domain_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentMethodDomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentRecordEntity

```ts
const payment_record = client.PaymentRecord()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_authorized` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_canceled` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_failed` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_guaranteed` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_refunded` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `amount_requested` | `Record<string, any>` | Yes | A representation of an amount of money, consisting of an amount and a currency. |
| `application` | `string` | No | ID of the Connect application that created the PaymentRecord. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer_details` | `any` | No | Customer information for this payment. |
| `customer_presence` | `string` | No | Indicates whether the customer was present in your checkout flow during this payment. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `latest_payment_attempt_record` | `string` | No | ID of the latest Payment Attempt Record attached to this Payment Record. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method_details` | `any` | No | Information about the Payment Method debited for this payment. |
| `processor_details` | `Record<string, any>` | Yes | Processor information associated with this payment. |
| `reported_by` | `string` | Yes | Indicates who reported the payment. |
| `shipping_details` | `any` | No | Shipping information for this payment. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `report_payment` | `/v1/payment_records/report_payment` | `client.PaymentRecord().create({ $action: 'report_payment', ... })` |
| `report_payment_attempt` | `/v1/payment_records/{id}/report_payment_attempt` | `client.PaymentRecord().create({ $action: 'report_payment_attempt', ... })` |
| `report_payment_attempt_canceled` | `/v1/payment_records/{id}/report_payment_attempt_canceled` | `client.PaymentRecord().create({ $action: 'report_payment_attempt_canceled', ... })` |
| `report_payment_attempt_failed` | `/v1/payment_records/{id}/report_payment_attempt_failed` | `client.PaymentRecord().create({ $action: 'report_payment_attempt_failed', ... })` |
| `report_payment_attempt_guaranteed` | `/v1/payment_records/{id}/report_payment_attempt_guaranteed` | `client.PaymentRecord().create({ $action: 'report_payment_attempt_guaranteed', ... })` |
| `report_payment_attempt_informational` | `/v1/payment_records/{id}/report_payment_attempt_informational` | `client.PaymentRecord().create({ $action: 'report_payment_attempt_informational', ... })` |
| `report_refund` | `/v1/payment_records/{id}/report_refund` | `client.PaymentRecord().create({ $action: 'report_refund', ... })` |

An action returns that action's OWN response, which is not necessarily a
PaymentRecord record — check the API definition for its shape.

```ts
const result = await client.PaymentRecord().create({
  $action: 'report_payment',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PaymentRecord().create({
  amount: {},
  amount_authorized: {},
  amount_canceled: {},
  amount_failed: {},
  amount_guaranteed: {},
  amount_refunded: {},
  amount_requested: {},
  created: 1,
  id: 'example_id',
  livemode: true,
  metadata: {},
  object: 'example_object',
  processor_details: {},
  reported_by: 'example_reported_by',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentRecord().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PaymentRecord().load({ id: 'payment_record_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentRecordEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayoutEntity

```ts
const payout = client.Payout()
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
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/v1/payouts/{payout}/cancel` | `client.Payout().create({ $action: 'cancel', ... })` |
| `reverse` | `/v1/payouts/{payout}/reverse` | `client.Payout().create({ $action: 'reverse', ... })` |

An action returns that action's OWN response, which is not necessarily a
Payout record — check the API definition for its shape.

```ts
const result = await client.Payout().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Payout().create({
  id: 'example_id',
  amount: 1,
  arrival_date: 1,
  automatic: true,
  created: 1,
  currency: 'example_currency',
  livemode: true,
  method: 'example_method',
  object: 'example_object',
  reconciliation_status: 'example_reconciliation_status',
  source_type: 'example_source_type',
  status: 'example_status',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Payout().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Payout().load({ id: 'payout_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayoutEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonEntity

```ts
const person = client.Person()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | The account the person is associated with. |
| `additional_tos_acceptances` | `Record<string, any>` | No |  |
| `address` | `Record<string, any>` | No |  |
| `address_kana` | `any` | No |  |
| `address_kanji` | `any` | No |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `dob` | `Record<string, any>` | No |  |
| `email` | `string` | No | The person's email address. |
| `first_name` | `string` | No | The person's first name. |
| `first_name_kana` | `string` | No | The Kana variation of the person's first name (Japan only). |
| `first_name_kanji` | `string` | No | The Kanji variation of the person's first name (Japan only). |
| `full_name_aliases` | `any[]` | No | A list of alternate names or aliases that the person is known by. |
| `future_requirements` | `any` | No |  |
| `gender` | `string` | No | The person's gender. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `id_number_provided` | `boolean` | No | Whether the person's `id_number` was provided. |
| `id_number_secondary_provided` | `boolean` | No | Whether the person's `id_number_secondary` was provided. |
| `last_name` | `string` | No | The person's last name. |
| `last_name_kana` | `string` | No | The Kana variation of the person's last name (Japan only). |
| `last_name_kanji` | `string` | No | The Kanji variation of the person's last name (Japan only). |
| `maiden_name` | `string` | No | The person's maiden name. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nationality` | `string` | No | The country where the person is a national. |
| `object` | `string` | Yes | String representing the object's type. |
| `phone` | `string` | No | The person's phone number. |
| `political_exposure` | `string` | No | Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction. |
| `registered_address` | `Record<string, any>` | No |  |
| `relationship` | `Record<string, any>` | No |  |
| `requirements` | `any` | No |  |
| `ssn_last_4_provided` | `boolean` | No | Whether the last four digits of the person's Social Security number have been provided (U.S. |
| `us_cfpb_data` | `any` | No | Demographic data related to the person. |
| `verification` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Person().create({
  account_id: 'example_account_id',
  account: 'example_account',
  created: 1,
  object: 'example_object',
  verification: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Person().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Person().load({ id: 'person_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonalizationDesignEntity

```ts
const personalization_design = client.PersonalizationDesign()
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
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | No | Friendly display name. |
| `object` | `string` | Yes | String representing the object's type. |
| `physical_bundle` | `any` | Yes | The physical bundle object belonging to this personalization design. |
| `preferences` | `Record<string, any>` | Yes |  |
| `rejection_reasons` | `Record<string, any>` | Yes |  |
| `status` | `string` | Yes | Whether this personalization design can be used to create cards. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `activate` | `/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate` | `client.PersonalizationDesign().create({ $action: 'activate', ... })` |
| `deactivate` | `/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate` | `client.PersonalizationDesign().create({ $action: 'deactivate', ... })` |
| `reject` | `/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject` | `client.PersonalizationDesign().create({ $action: 'reject', ... })` |

An action returns that action's OWN response, which is not necessarily a
PersonalizationDesign record — check the API definition for its shape.

```ts
const result = await client.PersonalizationDesign().create({
  $action: 'activate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PersonalizationDesign().create({
  id: 'example_id',
  created: 1,
  livemode: true,
  metadata: {},
  object: 'example_object',
  physical_bundle: 'example_physical_bundle',
  preferences: {},
  rejection_reasons: {},
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PersonalizationDesign().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PersonalizationDesign().load({ id: 'personalization_design_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonalizationDesignEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PhysicalBundleEntity

```ts
const physical_bundle = client.PhysicalBundle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_logo` | `string` | Yes | The policy for how to use card logo images in a card design with this physical bundle. |
| `carrier_text` | `string` | Yes | The policy for how to use carrier letter text in a card design with this physical bundle. |
| `features` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Yes | Friendly display name. |
| `object` | `string` | Yes | String representing the object's type. |
| `second_line` | `string` | Yes | The policy for how to use a second line on a card with this physical bundle. |
| `status` | `string` | Yes | Whether this physical bundle can be used to create cards. |
| `type` | `string` | Yes | Whether this physical bundle is a standard Stripe offering or custom-made for you. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PhysicalBundle().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PhysicalBundle().load({ id: 'physical_bundle_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PhysicalBundleEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PlanEntity

```ts
const plan = client.Plan()
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
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `meter` | `string` | No | The meter tracking the usage of a metered price |
| `nickname` | `string` | No | A brief description of the plan, hidden from customers. |
| `object` | `string` | Yes | String representing the object's type. |
| `product` | `any` | No | The product whose pricing this plan determines. |
| `tiers` | `any[]` | No | Each element represents a pricing tier. |
| `tiers_mode` | `string` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_usage` | `any` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `trial_period_days` | `number` | No | Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://docs.stripe.com/api#create_subscription-trial_from_plan). |
| `usage_type` | `string` | Yes | Configures how the quantity per period should be determined. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Plan().create({
  id: 'example_id',
  active: true,
  billing_scheme: 'example_billing_scheme',
  created: 1,
  currency: 'example_currency',
  interval: 'example_interval',
  interval_count: 1,
  livemode: true,
  object: 'example_object',
  usage_type: 'example_usage_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Plan().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Plan().load({ id: 'plan_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PlanEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PriceEntity

```ts
const price = client.Price()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the price can be used for new purchases. |
| `billing_scheme` | `string` | Yes | Describes how to compute the price per period. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `currency_options` | `Record<string, any>` | No | Prices defined in each available currency option. |
| `custom_unit_amount` | `any` | No | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | No | A lookup key used to retrieve prices dynamically from a static string. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `nickname` | `string` | No | A brief description of the price, hidden from customers. |
| `object` | `string` | Yes | String representing the object's type. |
| `product` | `any` | Yes | The ID of the product this price is associated with. |
| `recurring` | `any` | No | The recurring components of a price such as `interval` and `usage_type`. |
| `tax_behavior` | `string` | No | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tiers` | `any[]` | No | Each element represents a pricing tier. |
| `tiers_mode` | `string` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `transform_quantity` | `any` | No | Apply a transformation to the reported usage or set quantity before computing the amount billed. |
| `type` | `string` | Yes | One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. |
| `unit_amount` | `number` | No | The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. |
| `unit_amount_decimal` | `string` | No | The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Price().create({
  id: 'example_id',
  active: true,
  billing_scheme: 'example_billing_scheme',
  created: 1,
  currency: 'example_currency',
  livemode: true,
  metadata: {},
  object: 'example_object',
  product: 'example_product',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Price().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Price().load({ id: 'price_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PriceEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductEntity

```ts
const product = client.Product()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the product is currently available for purchase. |
| `created` | `number` | Yes | Time at which the object was created. |
| `current_prices_per_metric_ton` | `Record<string, any>` | Yes | Current prices for a metric ton of carbon removal in a currency's smallest unit. |
| `default_price` | `any` | No | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `delivery_year` | `number` | No | The year in which the carbon removal is expected to be delivered. |
| `description` | `string` | No | The product's description, meant to be displayable to the customer. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `images` | `any[]` | Yes | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `livemode` | `boolean` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `marketing_features` | `any[]` | Yes | A list of up to 15 marketing features for this product. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `metric_tons_available` | `string` | Yes | The quantity of metric tons available for reservation. |
| `name` | `string` | Yes | The Climate product's name. |
| `object` | `string` | Yes | String representing the object's type. |
| `package_dimensions` | `any` | No | The dimensions of this product for shipping purposes. |
| `shippable` | `boolean` | No | Whether this product is shipped (i.e., physical goods). |
| `statement_descriptor` | `string` | No | Extra information about a product which will appear on your customer's credit card statement. |
| `suppliers` | `any[]` | Yes | The carbon removal suppliers that fulfill orders for this Climate product. |
| `tax_code` | `any` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `any` | No | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `unit_label` | `string` | No | A label that represents units of this product. |
| `updated` | `number` | Yes | Time at which the object was last updated. |
| `url` | `string` | No | A URL of a publicly-accessible webpage for this product. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Product().create({
  id: 'example_id',
  active: true,
  created: 1,
  current_prices_per_metric_ton: {},
  images: [],
  livemode: true,
  marketing_features: [],
  metadata: {},
  metric_tons_available: 'example_metric_tons_available',
  name: 'example_name',
  object: 'example_object',
  suppliers: [],
  updated: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Product().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Product().load({ id: 'product_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Product().remove({ id: 'product_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductFeatureEntity

```ts
const product_feature = client.ProductFeature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Inactive features cannot be attached to new products and will not be returned from the features list endpoint. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | Yes | A unique key you provide as your own system identifier. |
| `metadata` | `Record<string, any>` | Yes | Set of key-value pairs that you can attach to an object. |
| `name` | `string` | Yes | The feature's name, for your own purpose, not meant to be displayable to the customer. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProductFeature().create({
  id: 'example_id',
  active: true,
  livemode: true,
  lookup_key: 'example_lookup_key',
  metadata: {},
  name: 'example_name',
  object: 'example_object',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProductFeature().load({ id: 'product_feature_id', product_id: 'product_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductFeatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PromotionCodeEntity

```ts
const promotion_code = client.PromotionCode()
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
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `promotion` | `Record<string, any>` | Yes |  |
| `restrictions` | `Record<string, any>` | Yes |  |
| `times_redeemed` | `number` | Yes | Number of times this promotion code has been used. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PromotionCode().create({
  id: 'example_id',
  active: true,
  code: 'example_code',
  created: 1,
  livemode: true,
  object: 'example_object',
  promotion: {},
  restrictions: {},
  times_redeemed: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PromotionCode().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PromotionCode().load({ id: 'promotion_code_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PromotionCodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## QuoteEntity

```ts
const quote = client.Quote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_subtotal` | `number` | Yes | Total before any discounts or taxes are applied. |
| `amount_total` | `number` | Yes | Total after discounts and taxes are applied. |
| `application` | `any` | No | ID of the Connect Application that created the quote. |
| `application_fee_amount` | `number` | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | `number` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `Record<string, any>` | Yes |  |
| `collection_method` | `string` | Yes | Either `charge_automatically`, or `send_invoice`. |
| `computed` | `Record<string, any>` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `any` | No | The customer who received this quote. |
| `customer_account` | `string` | No | The account representing the customer who received this quote. |
| `default_tax_rates` | `any[]` | No | The tax rates applied to this quote. |
| `description` | `string` | No | A description that will be displayed on the quote PDF. |
| `discounts` | `any[]` | Yes | The discounts applied to this quote. |
| `expires_at` | `number` | Yes | The date on which the quote will be canceled if in `open` or `draft` status. |
| `footer` | `string` | No | A footer that will be displayed on the quote PDF. |
| `from_quote` | `any` | No | Details of the quote that was cloned. |
| `header` | `string` | No | A header that will be displayed on the quote PDF. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice` | `any` | No | The invoice that was created from this quote. |
| `invoice_settings` | `Record<string, any>` | Yes |  |
| `line_items` | `Record<string, any>` | Yes | A list of items the customer is being quoted for. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `number` | `string` | No | A unique number that identifies this particular quote. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account on behalf of which to charge. |
| `status` | `string` | Yes | The status of the quote. |
| `status_transitions` | `Record<string, any>` | Yes |  |
| `subscription` | `any` | No | The subscription that was created or updated from this quote. |
| `subscription_data` | `Record<string, any>` | Yes |  |
| `subscription_schedule` | `any` | No | The subscription schedule that was created or updated from this quote. |
| `test_clock` | `any` | No | ID of the test clock this quote belongs to. |
| `total_details` | `Record<string, any>` | Yes |  |
| `transfer_data` | `any` | No | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `accept` | `/v1/quotes/{quote}/accept` | `client.Quote().create({ $action: 'accept', ... })` |
| `cancel` | `/v1/quotes/{quote}/cancel` | `client.Quote().create({ $action: 'cancel', ... })` |
| `finalize` | `/v1/quotes/{quote}/finalize` | `client.Quote().create({ $action: 'finalize', ... })` |

An action returns that action's OWN response, which is not necessarily a
Quote record — check the API definition for its shape.

```ts
const result = await client.Quote().create({
  $action: 'accept',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Quote().create({
  id: 'example_id',
  amount_subtotal: 1,
  amount_total: 1,
  automatic_tax: {},
  collection_method: 'example_collection_method',
  computed: {},
  created: 1,
  discounts: [],
  expires_at: 1,
  invoice_settings: {},
  line_items: {},
  livemode: true,
  metadata: {},
  object: 'example_object',
  status: 'example_status',
  status_transitions: {},
  subscription_data: {},
  total_details: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Quote().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Quote().load({ id: 'quote_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `QuoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## QuoteComputedUpfrontLineItemEntity

```ts
const quote_computed_upfront_line_item = client.QuoteComputedUpfrontLineItem()
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
| `discounts` | `any[]` | No | The discounts applied to the line item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `price` | `number` | No | The price used to generate the line item. |
| `quantity` | `number` | No | The quantity of products being purchased. |
| `taxes` | `any[]` | No | The taxes applied to the line item. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.QuoteComputedUpfrontLineItem().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `QuoteComputedUpfrontLineItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## QuotePdfEntity

```ts
const quote_pdf = client.QuotePdf()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.QuotePdf().load({ id: 'quote_pdf_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `QuotePdfEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReaderEntity

```ts
const reader = client.Reader()
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
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `serial_number` | `string` | Yes | Serial number of the reader. |
| `status` | `string` | No | The networking status of the reader. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel_action` | `/v1/terminal/readers/{reader}/cancel_action` | `client.Reader().create({ $action: 'cancel_action', ... })` |
| `collect_input` | `/v1/terminal/readers/{reader}/collect_inputs` | `client.Reader().create({ $action: 'collect_input', ... })` |
| `collect_payment_method` | `/v1/terminal/readers/{reader}/collect_payment_method` | `client.Reader().create({ $action: 'collect_payment_method', ... })` |
| `confirm_payment_intent` | `/v1/terminal/readers/{reader}/confirm_payment_intent` | `client.Reader().create({ $action: 'confirm_payment_intent', ... })` |
| `present_payment_method` | `/v1/test_helpers/terminal/readers/{reader}/present_payment_method` | `client.Reader().create({ $action: 'present_payment_method', ... })` |
| `process_payment_intent` | `/v1/terminal/readers/{reader}/process_payment_intent` | `client.Reader().create({ $action: 'process_payment_intent', ... })` |
| `process_setup_intent` | `/v1/terminal/readers/{reader}/process_setup_intent` | `client.Reader().create({ $action: 'process_setup_intent', ... })` |
| `refund_payment` | `/v1/terminal/readers/{reader}/refund_payment` | `client.Reader().create({ $action: 'refund_payment', ... })` |
| `set_reader_display` | `/v1/terminal/readers/{reader}/set_reader_display` | `client.Reader().create({ $action: 'set_reader_display', ... })` |
| `succeed_input_collection` | `/v1/test_helpers/terminal/readers/{reader}/succeed_input_collection` | `client.Reader().create({ $action: 'succeed_input_collection', ... })` |
| `timeout_input_collection` | `/v1/test_helpers/terminal/readers/{reader}/timeout_input_collection` | `client.Reader().create({ $action: 'timeout_input_collection', ... })` |

An action returns that action's OWN response, which is not necessarily a
Reader record — check the API definition for its shape.

```ts
const result = await client.Reader().create({
  $action: 'cancel_action',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Reader().create({
  id: 'example_id',
  device_type: 'example_device_type',
  label: 'example_label',
  livemode: true,
  metadata: {},
  object: 'example_object',
  serial_number: 'example_serial_number',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Reader().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Reader().load({ id: 'reader_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Reader().remove({ id: 'reader_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReaderEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReceivedCreditEntity

```ts
const received_credit = client.ReceivedCredit()
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
| `initiating_payment_method_details` | `Record<string, any>` | Yes |  |
| `linked_flows` | `Record<string, any>` | Yes |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `string` | Yes | The rails used to send the funds. |
| `object` | `string` | Yes | String representing the object's type. |
| `reversal_details` | `any` | No | Details describing when a ReceivedCredit may be reversed. |
| `status` | `string` | Yes | Status of the ReceivedCredit. |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReceivedCredit().create({
  amount: 1,
  created: 1,
  currency: 'example_currency',
  description: 'example_description',
  id: 'example_id',
  initiating_payment_method_details: {},
  linked_flows: {},
  livemode: true,
  network: 'example_network',
  object: 'example_object',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReceivedCredit().list({ financial_account: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReceivedCredit().load({ id: 'received_credit_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReceivedCreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReceivedDebitEntity

```ts
const received_debit = client.ReceivedDebit()
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
| `initiating_payment_method_details` | `Record<string, any>` | Yes |  |
| `linked_flows` | `Record<string, any>` | Yes |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `string` | Yes | The network used for the ReceivedDebit. |
| `object` | `string` | Yes | String representing the object's type. |
| `reversal_details` | `any` | No | Details describing when a ReceivedDebit might be reversed. |
| `status` | `string` | Yes | Status of the ReceivedDebit. |
| `transaction` | `any` | No | The Transaction associated with this object. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReceivedDebit().create({
  amount: 1,
  created: 1,
  currency: 'example_currency',
  description: 'example_description',
  id: 'example_id',
  initiating_payment_method_details: {},
  linked_flows: {},
  livemode: true,
  network: 'example_network',
  object: 'example_object',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReceivedDebit().list({ financial_account: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReceivedDebit().load({ id: 'received_debit_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReceivedDebitEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RefundEntity

```ts
const refund = client.Refund()
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
| `destination_details` | `Record<string, any>` | Yes |  |
| `failure_balance_transaction` | `any` | No | After the refund fails, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction. |
| `failure_reason` | `string` | No | Provides the reason for the refund failure. |
| `fee` | `any` | Yes | ID of the application fee that was refunded. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `instructions_email` | `string` | No | For payment methods without native refund support (for example, Konbini, PromptPay), provide an email address for the customer to receive refund instructions. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `Record<string, any>` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_intent` | `any` | No | ID of the PaymentIntent that's refunded. |
| `payment_method` | `any` | No | ID of the payment method associated with this refund. |
| `pending_reason` | `string` | No | Provides the reason for why the refund is pending. |
| `presentment_details` | `Record<string, any>` | Yes |  |
| `reason` | `string` | No | Reason for the refund, which is either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`). |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this refund. |
| `source_transfer_reversal` | `any` | No | The transfer reversal that's associated with the refund. |
| `status` | `string` | No | Status of the refund. |
| `transfer_reversal` | `any` | No | This refers to the transfer reversal object if the accompanying transfer reverses. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/v1/refunds/{refund}/cancel` | `client.Refund().create({ $action: 'cancel', ... })` |
| `expire` | `/v1/test_helpers/refunds/{refund}/expire` | `client.Refund().create({ $action: 'expire', ... })` |

An action returns that action's OWN response, which is not necessarily a
Refund record — check the API definition for its shape.

```ts
const result = await client.Refund().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Refund().create({
  id: 'example_id',
  amount: 1,
  created: 1,
  currency: 'example_currency',
  destination_details: {},
  fee: 'example_fee',
  next_action: {},
  object: 'example_object',
  presentment_details: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Refund().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Refund().load({ id: 'refund_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RefundEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RegistrationEntity

```ts
const registration = client.Registration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_from` | `number` | Yes | Time at which the registration becomes active. |
| `ae` | `Record<string, any>` | Yes |  |
| `al` | `Record<string, any>` | Yes |  |
| `am` | `Record<string, any>` | Yes |  |
| `ao` | `Record<string, any>` | Yes |  |
| `at` | `Record<string, any>` | Yes |  |
| `au` | `Record<string, any>` | Yes |  |
| `aw` | `Record<string, any>` | Yes |  |
| `az` | `Record<string, any>` | Yes |  |
| `ba` | `Record<string, any>` | Yes |  |
| `bb` | `Record<string, any>` | Yes |  |
| `bd` | `Record<string, any>` | Yes |  |
| `be` | `Record<string, any>` | Yes |  |
| `bf` | `Record<string, any>` | Yes |  |
| `bg` | `Record<string, any>` | Yes |  |
| `bh` | `Record<string, any>` | Yes |  |
| `bj` | `Record<string, any>` | Yes |  |
| `bs` | `Record<string, any>` | Yes |  |
| `by` | `Record<string, any>` | Yes |  |
| `ca` | `Record<string, any>` | Yes |  |
| `cd` | `Record<string, any>` | Yes |  |
| `ch` | `Record<string, any>` | Yes |  |
| `cl` | `Record<string, any>` | Yes |  |
| `cm` | `Record<string, any>` | Yes |  |
| `co` | `Record<string, any>` | Yes |  |
| `country` | `string` | Yes | Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). |
| `country_options` | `Record<string, any>` | Yes |  |
| `cr` | `Record<string, any>` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `cv` | `Record<string, any>` | Yes |  |
| `cy` | `Record<string, any>` | Yes |  |
| `cz` | `Record<string, any>` | Yes |  |
| `de` | `Record<string, any>` | Yes |  |
| `dk` | `Record<string, any>` | Yes |  |
| `ec` | `Record<string, any>` | Yes |  |
| `ee` | `Record<string, any>` | Yes |  |
| `eg` | `Record<string, any>` | Yes |  |
| `es` | `Record<string, any>` | Yes |  |
| `et` | `Record<string, any>` | Yes |  |
| `expires_at` | `number` | No | If set, the registration stops being active at this time. |
| `fi` | `Record<string, any>` | Yes |  |
| `fr` | `Record<string, any>` | Yes |  |
| `gb` | `Record<string, any>` | Yes |  |
| `ge` | `Record<string, any>` | Yes |  |
| `gn` | `Record<string, any>` | Yes |  |
| `gr` | `Record<string, any>` | Yes |  |
| `hr` | `Record<string, any>` | Yes |  |
| `hu` | `Record<string, any>` | Yes |  |
| `id` | `Record<string, any>` | Yes | Unique identifier for the object. |
| `ie` | `Record<string, any>` | Yes |  |
| `in` | `Record<string, any>` | Yes |  |
| `is` | `Record<string, any>` | Yes |  |
| `it` | `Record<string, any>` | Yes |  |
| `jp` | `Record<string, any>` | Yes |  |
| `ke` | `Record<string, any>` | Yes |  |
| `kg` | `Record<string, any>` | Yes |  |
| `kh` | `Record<string, any>` | Yes |  |
| `kr` | `Record<string, any>` | Yes |  |
| `kz` | `Record<string, any>` | Yes |  |
| `la` | `Record<string, any>` | Yes |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `lk` | `Record<string, any>` | Yes |  |
| `lt` | `Record<string, any>` | Yes |  |
| `lu` | `Record<string, any>` | Yes |  |
| `lv` | `Record<string, any>` | Yes |  |
| `ma` | `Record<string, any>` | Yes |  |
| `md` | `Record<string, any>` | Yes |  |
| `me` | `Record<string, any>` | Yes |  |
| `mk` | `Record<string, any>` | Yes |  |
| `mr` | `Record<string, any>` | Yes |  |
| `mt` | `Record<string, any>` | Yes |  |
| `mx` | `Record<string, any>` | Yes |  |
| `my` | `Record<string, any>` | Yes |  |
| `ng` | `Record<string, any>` | Yes |  |
| `nl` | `Record<string, any>` | Yes |  |
| `no` | `Record<string, any>` | Yes |  |
| `np` | `Record<string, any>` | Yes |  |
| `nz` | `Record<string, any>` | Yes |  |
| `object` | `string` | Yes | String representing the object's type. |
| `om` | `Record<string, any>` | Yes |  |
| `pe` | `Record<string, any>` | Yes |  |
| `ph` | `Record<string, any>` | Yes |  |
| `pl` | `Record<string, any>` | Yes |  |
| `pt` | `Record<string, any>` | Yes |  |
| `ro` | `Record<string, any>` | Yes |  |
| `rs` | `Record<string, any>` | Yes |  |
| `ru` | `Record<string, any>` | Yes |  |
| `sa` | `Record<string, any>` | Yes |  |
| `se` | `Record<string, any>` | Yes |  |
| `sg` | `Record<string, any>` | Yes |  |
| `si` | `Record<string, any>` | Yes |  |
| `sk` | `Record<string, any>` | Yes |  |
| `sn` | `Record<string, any>` | Yes |  |
| `sr` | `Record<string, any>` | Yes |  |
| `status` | `string` | Yes | The status of the registration. |
| `th` | `Record<string, any>` | Yes |  |
| `tj` | `Record<string, any>` | Yes |  |
| `tr` | `Record<string, any>` | Yes |  |
| `tw` | `Record<string, any>` | Yes |  |
| `tz` | `Record<string, any>` | Yes |  |
| `ua` | `Record<string, any>` | Yes |  |
| `ug` | `Record<string, any>` | Yes |  |
| `us` | `Record<string, any>` | Yes |  |
| `uy` | `Record<string, any>` | Yes |  |
| `uz` | `Record<string, any>` | Yes |  |
| `vn` | `Record<string, any>` | Yes |  |
| `za` | `Record<string, any>` | Yes |  |
| `zm` | `Record<string, any>` | Yes |  |
| `zw` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Registration().create({
  id: 'example_id',
  active_from: 1,
  ae: {},
  al: {},
  am: {},
  ao: {},
  at: {},
  au: {},
  aw: {},
  az: {},
  ba: {},
  bb: {},
  bd: {},
  be: {},
  bf: {},
  bg: {},
  bh: {},
  bj: {},
  bs: {},
  by: {},
  ca: {},
  cd: {},
  ch: {},
  cl: {},
  cm: {},
  co: {},
  country: 'example_country',
  country_options: {},
  cr: {},
  created: 1,
  cv: {},
  cy: {},
  cz: {},
  de: {},
  dk: {},
  ec: {},
  ee: {},
  eg: {},
  es: {},
  et: {},
  fi: {},
  fr: {},
  gb: {},
  ge: {},
  gn: {},
  gr: {},
  hr: {},
  hu: {},
  ie: {},
  in: {},
  is: {},
  it: {},
  jp: {},
  ke: {},
  kg: {},
  kh: {},
  kr: {},
  kz: {},
  la: {},
  livemode: true,
  lk: {},
  lt: {},
  lu: {},
  lv: {},
  ma: {},
  md: {},
  me: {},
  mk: {},
  mr: {},
  mt: {},
  mx: {},
  my: {},
  ng: {},
  nl: {},
  no: {},
  np: {},
  nz: {},
  object: 'example_object',
  om: {},
  pe: {},
  ph: {},
  pl: {},
  pt: {},
  ro: {},
  rs: {},
  ru: {},
  sa: {},
  se: {},
  sg: {},
  si: {},
  sk: {},
  sn: {},
  sr: {},
  status: 'example_status',
  th: {},
  tj: {},
  tr: {},
  tw: {},
  tz: {},
  ua: {},
  ug: {},
  us: {},
  uy: {},
  uz: {},
  vn: {},
  za: {},
  zm: {},
  zw: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Registration().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Registration().load({ id: 'registration_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RegistrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReportRunEntity

```ts
const report_run = client.ReportRun()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `error` | `string` | No | If something should go wrong during the run, a message about the failure (populated when `status=failed`). |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | `true` if the report is run on live mode data and `false` if it is run on test mode data. |
| `object` | `string` | Yes | String representing the object's type. |
| `parameters` | `Record<string, any>` | Yes |  |
| `report_type` | `string` | Yes | The ID of the [report type](https://docs.stripe.com/reports/report-types) to run, such as `"balance.summary.1"`. |
| `result` | `any` | No | The file object representing the result of the report run (populated when `status=succeeded`). |
| `status` | `string` | Yes | Status of this report run. |
| `succeeded_at` | `number` | No | Timestamp at which this run successfully finished (populated when `status=succeeded`). |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReportRun().create({
  created: 1,
  id: 'example_id',
  livemode: true,
  object: 'example_object',
  parameters: {},
  report_type: 'example_report_type',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReportRun().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReportRun().load({ id: 'report_run_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReportRunEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReportTypeEntity

```ts
const report_type = client.ReportType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_available_end` | `number` | Yes | Most recent time for which this Report Type is available. |
| `data_available_start` | `number` | Yes | Earliest time for which this Report Type is available. |
| `default_columns` | `any[]` | No | List of column names that are included by default when this Report Type gets run. |
| `id` | `string` | Yes | The [ID of the Report Type](https://docs.stripe.com/reporting/statements/api#available-report-types), such as `balance.summary.1`. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | Yes | Human-readable name of the Report Type |
| `object` | `string` | Yes | String representing the object's type. |
| `updated` | `number` | Yes | When this Report Type was latest updated. |
| `version` | `number` | Yes | Version of the Report Type. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReportType().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReportType().load({ id: 'report_type_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReportTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RequestEntity

```ts
const request = client.Request()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method` | `string` | Yes | The PaymentMethod to insert into the forwarded request. |
| `replacements` | `any[]` | Yes | The field kinds to be replaced in the forwarded request. |
| `request_context` | `any` | No | Context about the request from Stripe's servers to the destination endpoint. |
| `request_details` | `any` | No | The request that was sent to the destination endpoint. |
| `response_details` | `any` | No | The response that the destination endpoint returned to us. |
| `url` | `string` | No | The destination URL for the forwarded request. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Request().create({
  created: 1,
  id: 'example_id',
  livemode: true,
  object: 'example_object',
  payment_method: 'example_payment_method',
  replacements: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Request().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Request().load({ id: 'request_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReversalEntity

```ts
const reversal = client.Reversal()
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
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `source_refund` | `any` | No | ID of the refund responsible for the transfer reversal. |
| `transfer` | `any` | Yes | ID of the transfer that was reversed. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Reversal().create({
  transfer_id: 'example_transfer_id',
  amount: 1,
  created: 1,
  currency: 'example_currency',
  object: 'example_object',
  transfer: 'example_transfer',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Reversal().list({ transfer_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Reversal().load({ id: 'reversal_id', transfer_id: 'transfer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReversalEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReviewEntity

```ts
const review = client.Review()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `approve` | `/v1/reviews/{review}/approve` | `client.Review().create({ $action: 'approve', ... })` |

An action returns that action's OWN response, which is not necessarily a
Review record — check the API definition for its shape.

```ts
const result = await client.Review().create({
  $action: 'approve',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Review().create({
  id: 'example_id',
  created: 1,
  livemode: true,
  object: 'example_object',
  open: true,
  opened_reason: 'example_opened_reason',
  reason: 'example_reason',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Review().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Review().load({ id: 'review_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduledQueryRunEntity

```ts
const scheduled_query_run = client.ScheduledQueryRun()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | Yes | Time at which the object was created. |
| `data_load_time` | `number` | Yes | When the query was run, Sigma contained a snapshot of your Stripe data at this time. |
| `error` | `Record<string, any>` | Yes |  |
| `file` | `any` | No | The file object representing the results of the query. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `result_available_until` | `number` | Yes | Time at which the result expires and is no longer available for download. |
| `sql` | `string` | Yes | SQL for the query. |
| `status` | `string` | Yes | The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise. |
| `title` | `string` | Yes | Title of the query. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ScheduledQueryRun().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ScheduledQueryRun().load({ id: 'scheduled_query_run_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduledQueryRunEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_country` | `string` | No | The country of the business associated with this invoice, most often the business creating the invoice. |
| `account_name` | `string` | No | The public name of the business associated with this invoice, most often the business creating the invoice. |
| `account_tax_ids` | `any[]` | No | The account tax IDs associated with the invoice. |
| `active` | `boolean` | Yes | Whether the price can be used for new purchases. |
| `address` | `any` | No | The customer's billing address. |
| `allowed_payment_method_types` | `any[]` | No | The list of payment method types allowed for use with this payment. |
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
| `automatic_tax` | `Record<string, any>` | Yes |  |
| `automatically_finalizes_at` | `number` | No | The time when this invoice is currently scheduled to be automatically finalized. |
| `balance` | `number` | No | The current balance, if any, that's stored on the customer in their default currency. |
| `balance_transaction` | `any` | No | ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes). |
| `billing_cycle_anchor` | `number` | Yes | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `any` | No | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_details` | `Record<string, any>` | Yes |  |
| `billing_mode` | `Record<string, any>` | Yes | The billing mode of the subscription. |
| `billing_reason` | `string` | No | Indicates the reason why the invoice was created. |
| `billing_schedules` | `any[]` | Yes | Billing schedules for this subscription. |
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
| `currency_options` | `Record<string, any>` | No | Prices defined in each available currency option. |
| `custom_fields` | `any[]` | No | Custom fields displayed on the invoice. |
| `custom_unit_amount` | `any` | No | When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. |
| `customer` | `any` | No | ID of the customer this charge is for if one exists. |
| `customer_account` | `string` | No | The ID of an Account representing a customer. |
| `customer_address` | `any` | No | The customer's address. |
| `customer_email` | `string` | No | The customer's email. |
| `customer_name` | `string` | No | The customer's name. |
| `customer_phone` | `string` | No | The customer's phone number. |
| `customer_shipping` | `any` | No | The customer's shipping information. |
| `customer_tax_exempt` | `string` | No | The customer's tax exempt status. |
| `customer_tax_ids` | `any[]` | No | The customer's tax IDs. |
| `days_until_due` | `number` | No | Number of days a customer has to pay invoices generated by this subscription. |
| `default_payment_method` | `any` | No | ID of the default payment method for the invoice. |
| `default_price` | `any` | No | The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product. |
| `default_source` | `any` | No | ID of the default payment source for the customer. |
| `default_tax_rates` | `any[]` | Yes | The tax rates applied to this invoice, if any. |
| `delinquent` | `boolean` | No | Tracks the most recent state change on any invoice belonging to the customer. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `discount` | `any` | No | Describes the current discount active on the customer, if there is one. |
| `discounts` | `any[]` | Yes | The discounts applied to the invoice. |
| `disputed` | `boolean` | Yes | Whether the charge has been disputed. |
| `due_date` | `number` | No | The date on which payment for this invoice is due. |
| `effective_at` | `number` | No | The date when this invoice is in effect. |
| `email` | `string` | No | The customer's email address. |
| `ended_at` | `number` | No | If the subscription has ended, the date the subscription ended. |
| `ending_balance` | `number` | No | Ending customer balance after the invoice is finalized. |
| `excluded_payment_method_types` | `any[]` | No | The list of payment method types to exclude from use with this payment. |
| `failure_balance_transaction` | `any` | No | ID of the balance transaction that describes the reversal of the balance on your account due to payment failure. |
| `failure_code` | `string` | No | Error code explaining reason for charge failure if available (see [the errors section](https://docs.stripe.com/error-codes) for a list of codes). |
| `failure_message` | `string` | No | Message to user further explaining reason for charge failure if available. |
| `footer` | `string` | No | Footer displayed on the invoice. |
| `fraud_details` | `any` | No | Information on fraud assessments for the charge. |
| `from_invoice` | `any` | No | Details of the invoice that was cloned. |
| `hooks` | `Record<string, any>` | No |  |
| `hosted_invoice_url` | `string` | No | The URL for the hosted invoice page, which allows customers to view and pay an invoice. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `images` | `any[]` | Yes | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `individual_name` | `string` | No | The customer's individual name. |
| `invoice_credit_balance` | `Record<string, any>` | No | The current multi-currency balances, if any, that's stored on the customer. |
| `invoice_pdf` | `string` | No | The link to download the PDF for the invoice. |
| `invoice_prefix` | `string` | No | The prefix for the customer used to generate unique invoice numbers. |
| `invoice_settings` | `Record<string, any>` | No |  |
| `issuer` | `Record<string, any>` | Yes |  |
| `items` | `Record<string, any>` | Yes | List of subscription items, each with an attached price. |
| `last_finalization_error` | `any` | No | The error encountered during the previous attempt to finalize the invoice. |
| `last_payment_error` | `any` | No | The payment error encountered in the previous PaymentIntent confirmation. |
| `latest_charge` | `any` | No | ID of the latest [Charge object](https://docs.stripe.com/api/charges) created by this PaymentIntent. |
| `latest_invoice` | `any` | No | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `latest_revision` | `any` | No | The ID of the most recent non-draft revision of this invoice |
| `lines` | `Record<string, any>` | Yes | The individual line items that make up the invoice. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `lookup_key` | `string` | No | A lookup key used to retrieve prices dynamically from a static string. |
| `managed_payments` | `any` | No | Settings for Managed Payments. |
| `marketing_features` | `any[]` | Yes | A list of up to 15 marketing features for this product. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
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
| `payment_details` | `Record<string, any>` | No |  |
| `payment_intent` | `any` | No | ID of the PaymentIntent associated with this charge, if one exists. |
| `payment_method` | `string` | No | ID of the payment method used in this charge. |
| `payment_method_configuration_details` | `any` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this PaymentIntent. |
| `payment_method_details` | `any` | No | Details about the payment method at the time of the transaction. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for this PaymentIntent. |
| `payment_method_types` | `any[]` | No | The list of payment method types (e.g. |
| `payment_record` | `any` | No | ID of the [Payment Record object](https://docs.stripe.com/api/payment-record) created by this PaymentIntent. |
| `payment_settings` | `Record<string, any>` | Yes | Payment settings passed on to invoices created by the subscription. |
| `payments` | `Record<string, any>` | Yes | Payments for this invoice. |
| `pending_invoice_item_interval` | `any` | No | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `any` | No | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `any` | No | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `period_end` | `number` | Yes | The latest timestamp at which invoice items can be associated with this invoice. |
| `period_start` | `number` | Yes | The earliest timestamp at which invoice items can be associated with this invoice. |
| `phone` | `string` | No | The customer's phone number. |
| `post_payment_credit_notes_amount` | `number` | Yes | Total amount of all post-payment credit notes issued for this invoice. |
| `pre_payment_credit_notes_amount` | `number` | Yes | Total amount of all pre-payment credit notes issued for this invoice. |
| `preferred_locales` | `any[]` | No | The customer's preferred locales (languages), ordered by preference. |
| `presentment_details` | `Record<string, any>` | Yes |  |
| `processing` | `any` | No | If present, this property tells you about the processing state of the payment. |
| `product` | `any` | Yes | The ID of the product this price is associated with. |
| `radar_options` | `Record<string, any>` | No | Options to configure Radar. |
| `receipt_email` | `string` | No | This is the email address that the receipt for this charge was sent to. |
| `receipt_number` | `string` | No | This is the transaction number that appears on email receipts sent for this charge. |
| `receipt_url` | `string` | No | This is the URL to view the receipt for this charge. |
| `recurring` | `any` | No | The recurring components of a price such as `interval` and `usage_type`. |
| `refunded` | `boolean` | Yes | Whether the charge has been fully refunded. |
| `refunds` | `Record<string, any>` | Yes | A list of refunds that have been applied to the charge. |
| `rendering` | `any` | No | The rendering-related settings that control how invoices render in customer-facing interfaces such as the PDF or hosted invoice page. |
| `review` | `any` | No | ID of the review associated with this charge if one exists. |
| `schedule` | `any` | No | The schedule attached to the subscription |
| `setup_future_usage` | `string` | No | Indicates that you intend to make future payments with this PaymentIntent's payment method. |
| `shippable` | `boolean` | No | Whether this product is shipped (i.e., physical goods). |
| `shipping` | `any` | No | Shipping information for the charge. |
| `shipping_cost` | `any` | No | The details of the cost of shipping, including the ShippingRate applied on the invoice. |
| `shipping_details` | `any` | No | Shipping details for the invoice. |
| `source_transfer` | `any` | No | The transfer ID which created this charge. |
| `sources` | `Record<string, any>` | Yes | The customer's payment sources, if any. |
| `start_date` | `number` | Yes | Date when the subscription was first created. |
| `starting_balance` | `number` | Yes | Starting customer balance before the invoice is finalized. |
| `statement_descriptor` | `string` | No | For a non-card charge, text that appears on the customer's statement as the statement descriptor. |
| `statement_descriptor_suffix` | `string` | No | Provides information about a card charge. |
| `status` | `string` | Yes | The status of the payment is either `succeeded`, `pending`, or `failed`. |
| `status_details` | `Record<string, any>` | No | Describes changes to the subscription's status. |
| `status_transitions` | `Record<string, any>` | Yes |  |
| `subscriptions` | `Record<string, any>` | Yes | The customer's current subscriptions, if any. |
| `subtotal` | `number` | Yes | Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. |
| `subtotal_excluding_tax` | `number` | No | The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. |
| `tax` | `Record<string, any>` | Yes |  |
| `tax_behavior` | `string` | No | Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. |
| `tax_code` | `any` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `tax_details` | `any` | No | Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location. |
| `tax_exempt` | `string` | No | Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. |
| `tax_ids` | `Record<string, any>` | Yes | The customer's tax IDs. |
| `test_clock` | `any` | No | ID of the test clock that this customer belongs to. |
| `threshold_reason` | `Record<string, any>` | Yes |  |
| `tiers` | `any[]` | No | Each element represents a pricing tier. |
| `tiers_mode` | `string` | No | Defines if the tiering price should be `graduated` or `volume` based. |
| `total` | `number` | Yes | Total after discounts and taxes. |
| `total_discount_amounts` | `any[]` | No | The aggregate amounts calculated per discount across all line items. |
| `total_excluding_tax` | `number` | No | The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax. |
| `total_pretax_credit_amounts` | `any[]` | No | Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. |
| `total_taxes` | `any[]` | No | The aggregate tax information of all line items. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Search().list({ query: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretEntity

```ts
const secret = client.Secret()
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
| `scope` | `Record<string, any>` | Yes |  |
| `type` | `string` | Yes | The secret scope type. |
| `user` | `string` | No | The user ID, if type is set to "user" |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `delete` | `/v1/apps/secrets/delete` | `client.Secret().create({ $action: 'delete', ... })` |
| `find` | `/v1/apps/secrets/find` | `client.Secret().load({ $action: 'find', ... })` |

An action returns that action's OWN response, which is not necessarily a
Secret record — check the API definition for its shape.

```ts
const result = await client.Secret().create({
  $action: 'delete',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Secret().create({
  created: 1,
  id: 'example_id',
  livemode: true,
  name: 'example_name',
  object: 'example_object',
  scope: {},
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Secret().list({ scope: {} })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Secret().load({ name: 'name', scope: {} })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SessionEntity

```ts
const session = client.Session()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_holder` | `any` | No | The account holder for whom accounts are collected in this session. |
| `accounts` | `Record<string, any>` | Yes | The accounts that were collected as part of this Session. |
| `adaptive_pricing` | `any` | No | Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing). |
| `after_expiration` | `any` | No | When set, provides configuration for actions to take if this Checkout Session expires. |
| `allow_promotion_codes` | `boolean` | No | Enables user redeemable promotion codes. |
| `allowed_payment_method_types` | `any[]` | No | A list of the types of payment methods (e.g., `card`) this Checkout Session can accept. |
| `amount_subtotal` | `number` | No | Total of all items before discounts or taxes are applied. |
| `amount_total` | `number` | No | Total of all items after discounts and taxes are applied. |
| `automatic_tax` | `Record<string, any>` | Yes |  |
| `bank_account_token` | `Record<string, any>` | Yes | Tokenization is the process Stripe uses to collect sensitive card or bank account details, or personally identifiable information (PII), directly from your customers in a secure manner. |
| `billing_address_collection` | `string` | No | Describes whether Checkout should collect the customer's billing address. |
| `branding_settings` | `Record<string, any>` | Yes |  |
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
| `custom_fields` | `any[]` | Yes | Collect additional information from your customer using custom fields. |
| `custom_text` | `Record<string, any>` | Yes |  |
| `customer` | `any` | No | The ID of the customer for this Session. |
| `customer_account` | `string` | No | The ID of the account for this Session. |
| `customer_creation` | `string` | No | Configure whether a Checkout Session creates a Customer when the Checkout Session completes. |
| `customer_details` | `any` | No | The customer details including the customer's tax exempt status and the customer's tax IDs. |
| `customer_email` | `string` | No | If provided, this value will be used when the Customer object is created. |
| `discounts` | `any[]` | No | List of coupons and promotion codes attached to the Checkout Session. |
| `excluded_payment_method_types` | `any[]` | No | A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session. |
| `expires_at` | `number` | Yes | The timestamp at which the Checkout Session will expire. |
| `filters` | `Record<string, any>` | No |  |
| `flow` | `any` | No | Information about a specific flow for the customer to go through. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `integration_identifier` | `string` | No | The integration identifier for this Checkout Session. |
| `invoice` | `any` | No | ID of the invoice created by the Checkout Session, if it exists. |
| `invoice_creation` | `any` | No | Details on the state of invoice creation for the Checkout Session. |
| `limits` | `Record<string, any>` | Yes |  |
| `line_items` | `Record<string, any>` | Yes | The line items purchased by the customer. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `locale` | `string` | No | The IETF language tag of the locale Checkout is displayed in. |
| `managed_payments` | `any` | No | Settings for Managed Payments for this Checkout Session and resulting [PaymentIntents](/api/payment_intents/object), [Invoices](/api/invoices/object), and [Subscriptions](/api/subscriptions/object). |
| `manual_entry` | `Record<string, any>` | No |  |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `mode` | `string` | Yes | The mode of the Checkout Session. |
| `name_collection` | `Record<string, any>` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `string` | No | The account for which the session was created on behalf of. |
| `optional_items` | `any[]` | No | The optional items presented to the customer at checkout. |
| `origin_context` | `string` | No | Where the user is coming from. |
| `payment_intent` | `any` | No | The ID of the PaymentIntent for Checkout Sessions in `payment` mode. |
| `payment_link` | `any` | No | The ID of the Payment Link that created this Session. |
| `payment_method_collection` | `string` | No | Configure whether a Checkout Session should collect a payment method for sessions with mode `payment`. |
| `payment_method_configuration_details` | `any` | No | Information about the payment method configuration used for this Checkout session if using dynamic payment methods. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for the PaymentIntent or SetupIntent of this CheckoutSession. |
| `payment_method_types` | `any[]` | Yes | A list of the types of payment methods (e.g. |
| `payment_status` | `string` | Yes | The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`. |
| `permissions` | `any` | No | This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object. |
| `phone_number_collection` | `Record<string, any>` | Yes |  |
| `prefetch` | `any[]` | No | Data features requested to be retrieved upon account creation. |
| `presentment_details` | `Record<string, any>` | Yes |  |
| `recovered_from` | `string` | No | The ID of the original expired Checkout Session that triggered the recovery flow. |
| `redirect_on_completion` | `string` | No | This parameter applies to `ui_mode: embedded_page`. |
| `return_url` | `string` | No | Applies to Checkout Sessions with `ui_mode: embedded_page` or `ui_mode: elements`. |
| `saved_payment_method_options` | `any` | No | Controls saved payment method settings for the session. |
| `setup_intent` | `any` | No | The ID of the SetupIntent for Checkout Sessions in `setup` mode. |
| `shipping_address_collection` | `any` | No | When set, provides configuration for Checkout to collect a shipping address from a customer. |
| `shipping_cost` | `any` | No | The details of the customer cost of shipping, including the customer chosen ShippingRate. |
| `shipping_options` | `any[]` | Yes | The shipping rate options applied to this Session. |
| `status` | `string` | No | The status of the Checkout Session, one of `open`, `complete`, or `expired`. |
| `submit_type` | `string` | No | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. |
| `subscription` | `any` | No | The ID of the [Subscription](https://docs.stripe.com/api/subscriptions) for Checkout Sessions in `subscription` mode. |
| `success_url` | `string` | No | The URL the customer will be directed to after the payment or subscription creation is successful. |
| `tax_id_collection` | `Record<string, any>` | Yes |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `expire` | `/v1/checkout/sessions/{session}/expire` | `client.Session().create({ $action: 'expire', ... })` |

An action returns that action's OWN response, which is not necessarily a
Session record — check the API definition for its shape.

```ts
const result = await client.Session().create({
  $action: 'expire',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Session().create({
  id: 'example_id',
  accounts: {},
  automatic_tax: {},
  bank_account_token: {},
  branding_settings: {},
  configuration: 'example_configuration',
  created: 1,
  custom_fields: [],
  custom_text: {},
  expires_at: 1,
  limits: {},
  line_items: {},
  livemode: true,
  mode: 'example_mode',
  object: 'example_object',
  payment_method_types: [],
  payment_status: 'example_payment_status',
  phone_number_collection: {},
  presentment_details: {},
  shipping_options: [],
  tax_id_collection: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Session().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Session().load({ session: 'session' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SessionEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SettingEntity

```ts
const setting = client.Setting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `defaults` | `Record<string, any>` | Yes |  |
| `head_office` | `any` | No | The place where your business is located. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The status of the Tax `Settings`. |
| `status_details` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Setting().create({
  defaults: {},
  livemode: true,
  object: 'example_object',
  status: 'example_status',
  status_details: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Setting().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SettlementEntity

```ts
const settlement = client.Settlement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `complete` | `/v1/test_helpers/issuing/settlements/{settlement}/complete` | `client.Settlement().create({ $action: 'complete', ... })` |

An action returns that action's OWN response, which is not necessarily a
Settlement record — check the API definition for its shape.

```ts
const result = await client.Settlement().create({
  $action: 'complete',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Settlement().create({
  id: 'example_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Settlement().load({ id: 'settlement_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SettlementEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SetupAttemptEntity

```ts
const setup_attempt = client.SetupAttempt()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `any` | No | The value of [application](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation. |
| `attach_to_self` | `boolean` | No | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer` | `any` | No | The value of [customer](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation. |
| `customer_account` | `string` | No | The value of [customer_account](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer_account) on the SetupIntent at the time of this confirmation. |
| `flow_directions` | `any[]` | No | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The value of [on_behalf_of](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation. |
| `payment_method` | `any` | Yes | ID of the payment method used with this SetupAttempt. |
| `payment_method_details` | `Record<string, any>` | Yes |  |
| `setup_error` | `any` | No | The error encountered during this attempt to confirm the SetupIntent, if any. |
| `setup_intent` | `any` | Yes | ID of the SetupIntent that this attempt belongs to. |
| `status` | `string` | Yes | Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`. |
| `usage` | `string` | Yes | The value of [usage](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SetupAttempt().list({ setup_intent: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SetupAttemptEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SetupIntentEntity

```ts
const setup_intent = client.SetupIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_payment_method_types` | `any[]` | No | The list of payment method types to allow for this SetupIntent. |
| `application` | `any` | No | ID of the Connect application that created the SetupIntent. |
| `attach_to_self` | `boolean` | No | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `automatic_payment_methods` | `any` | No | Settings for dynamic payment methods compatible with this Setup Intent |
| `cancellation_reason` | `string` | No | Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`. |
| `client_secret` | `string` | No | The client secret of this SetupIntent. |
| `created` | `number` | Yes | Time at which the object was created. |
| `customer` | `any` | No | ID of the Customer this SetupIntent belongs to, if one exists. |
| `customer_account` | `string` | No | ID of the Account this SetupIntent belongs to, if one exists. |
| `description` | `string` | No | An arbitrary string attached to the object. |
| `excluded_payment_method_types` | `any[]` | No | Payment method types that are excluded from this SetupIntent. |
| `flow_directions` | `any[]` | No | Indicates the directions of money movement for which this payment method is intended to be used. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last_setup_error` | `any` | No | The error encountered in the previous SetupIntent confirmation. |
| `latest_attempt` | `any` | No | The most recent SetupAttempt for this SetupIntent. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | No |  |
| `mandate` | `any` | No | ID of the multi use Mandate generated by the SetupIntent. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_action` | `any` | No | If present, this property tells you what actions you need to take in order for your customer to continue payment setup. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) for which the setup is intended. |
| `payment_method` | `any` | No | ID of the payment method used with this SetupIntent. |
| `payment_method_configuration_details` | `any` | No | Information about the [payment method configuration](https://docs.stripe.com/api/payment_method_configurations) used for this Setup Intent. |
| `payment_method_options` | `any` | No | Payment method-specific configuration for this SetupIntent. |
| `payment_method_types` | `any[]` | Yes | The list of payment method types (e.g. |
| `single_use_mandate` | `any` | No | ID of the single_use Mandate generated by the SetupIntent. |
| `status` | `string` | Yes | [Status](https://docs.stripe.com/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`. |
| `usage` | `string` | Yes | Indicates how the payment method is intended to be used in the future. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/v1/setup_intents/{intent}/cancel` | `client.SetupIntent().create({ $action: 'cancel', ... })` |
| `confirm` | `/v1/setup_intents/{intent}/confirm` | `client.SetupIntent().create({ $action: 'confirm', ... })` |
| `verify_microdeposit` | `/v1/setup_intents/{intent}/verify_microdeposits` | `client.SetupIntent().create({ $action: 'verify_microdeposit', ... })` |

An action returns that action's OWN response, which is not necessarily a
SetupIntent record — check the API definition for its shape.

```ts
const result = await client.SetupIntent().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SetupIntent().create({
  id: 'example_id',
  created: 1,
  livemode: true,
  object: 'example_object',
  payment_method_types: [],
  status: 'example_status',
  usage: 'example_usage',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SetupIntent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SetupIntent().load({ id: 'setup_intent_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SetupIntentEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ShippingRateEntity

```ts
const shipping_rate = client.ShippingRate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the shipping rate can be used for new purchases. |
| `created` | `number` | Yes | Time at which the object was created. |
| `delivery_estimate` | `any` | No | The estimated range for how long shipping will take, meant to be displayable to the customer. |
| `display_name` | `string` | No | The name of the shipping rate, meant to be displayable to the customer. |
| `fixed_amount` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `tax_behavior` | `string` | No | Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. |
| `tax_code` | `any` | No | A [tax code](https://docs.stripe.com/tax/tax-categories) ID. |
| `type` | `string` | Yes | The type of calculation to use on the shipping rate. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ShippingRate().create({
  id: 'example_id',
  active: true,
  created: 1,
  fixed_amount: {},
  livemode: true,
  metadata: {},
  object: 'example_object',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ShippingRate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ShippingRate().load({ id: 'shipping_rate_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ShippingRateEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SigmaApiQueryEntity

```ts
const sigma_api_query = client.SigmaApiQuery()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SigmaApiQuery().create({
  id: 'example_id',
  created: 1,
  livemode: true,
  name: 'example_name',
  object: 'example_object',
  sql: 'example_sql',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SigmaApiQueryEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SourceEntity

```ts
const source = client.Source()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ach_credit_transfer` | `Record<string, any>` | No |  |
| `ach_debit` | `Record<string, any>` | No |  |
| `acss_debit` | `Record<string, any>` | No |  |
| `alipay` | `Record<string, any>` | No |  |
| `allow_redisplay` | `boolean` | No | This field indicates whether this payment method can be shown again to its customer in a checkout flow. |
| `amount` | `number` | No | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. |
| `au_becs_debit` | `Record<string, any>` | No |  |
| `bancontact` | `Record<string, any>` | No |  |
| `card` | `Record<string, any>` | No |  |
| `card_present` | `Record<string, any>` | No |  |
| `client_secret` | `string` | Yes | The client secret of the source. |
| `code_verification` | `Record<string, any>` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | No | Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. |
| `customer` | `string` | No | The ID of the customer to which this source is attached. |
| `data` | `any[]` | Yes | Details about each object. |
| `eps` | `Record<string, any>` | No |  |
| `flow` | `string` | Yes | The authentication `flow` of the source. |
| `giropay` | `Record<string, any>` | No |  |
| `has_more` | `boolean` | Yes | True if this list has another page of items after this one that can be fetched. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `ideal` | `Record<string, any>` | No |  |
| `klarna` | `Record<string, any>` | No |  |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `multibanco` | `Record<string, any>` | No |  |
| `object` | `string` | Yes | String representing the object's type. |
| `owner` | `any` | No | Information about the owner of the payment instrument that may be used or required by particular source types. |
| `p24` | `Record<string, any>` | No |  |
| `receiver` | `Record<string, any>` | Yes |  |
| `redirect` | `Record<string, any>` | Yes |  |
| `sepa_debit` | `Record<string, any>` | No |  |
| `sofort` | `Record<string, any>` | No |  |
| `source_order` | `Record<string, any>` | Yes |  |
| `statement_descriptor` | `string` | No | Extra information about a source. |
| `status` | `string` | Yes | The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. |
| `three_d_secure` | `Record<string, any>` | No |  |
| `type` | `string` | Yes | The `type` of the source. |
| `url` | `string` | Yes | The URL where this list can be accessed. |
| `usage` | `string` | No | Either `reusable` or `single_use`. |
| `wechat` | `Record<string, any>` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `verify` | `/v1/sources/{source}/verify` | `client.Source().create({ $action: 'verify', ... })` |

An action returns that action's OWN response, which is not necessarily a
Source record — check the API definition for its shape.

```ts
const result = await client.Source().create({
  $action: 'verify',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Source().create({
  id: 'example_id',
  client_secret: 'example_client_secret',
  code_verification: {},
  created: 1,
  data: [],
  flow: 'example_flow',
  has_more: true,
  livemode: true,
  object: 'example_object',
  receiver: {},
  redirect: {},
  source_order: {},
  status: 'example_status',
  type: 'example_type',
  url: 'example_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Source().list({ customer_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Source().load({ id: 'source_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Source().remove({ id: 'source_id', customer_id: 'customer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SourceMandateNotificationEntity

```ts
const source_mandate_notification = client.SourceMandateNotification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acss_debit` | `Record<string, any>` | No |  |
| `amount` | `number` | No | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. |
| `bacs_debit` | `Record<string, any>` | No |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `reason` | `string` | Yes | The reason of the mandate notification. |
| `sepa_debit` | `Record<string, any>` | No |  |
| `source` | `Record<string, any>` | Yes | `Source` objects allow you to accept a variety of payment methods. |
| `status` | `string` | Yes | The status of the mandate notification. |
| `type` | `string` | Yes | The type of source this mandate notification is attached to. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SourceMandateNotification().load({ id: 'source_mandate_notification_id', source_id: 'source_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SourceMandateNotificationEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SourceTransactionEntity

```ts
const source_transaction = client.SourceTransaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ach_credit_transfer` | `Record<string, any>` | No |  |
| `amount` | `number` | Yes | A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver. |
| `chf_credit_transfer` | `Record<string, any>` | No |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `gbp_credit_transfer` | `Record<string, any>` | No |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `paper_check` | `Record<string, any>` | No |  |
| `sepa_credit_transfer` | `Record<string, any>` | No |  |
| `source` | `string` | Yes | The ID of the source this transaction is attached to. |
| `status` | `string` | Yes | The status of the transaction, one of `succeeded`, `pending`, or `failed`. |
| `type` | `string` | Yes | The type of source this transaction is attached to. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SourceTransaction().list({ id: "example_id" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SourceTransaction().load({ id: 'source_transaction_id', source_id: 'source_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SourceTransactionEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionEntity

```ts
const subscription = client.Subscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `any` | No | ID of the Connect Application that created the subscription. |
| `application_fee_percent` | `number` | No | A non-negative decimal between 0 and 100, with at most two decimal places. |
| `automatic_tax` | `Record<string, any>` | Yes |  |
| `billing_cycle_anchor` | `number` | Yes | The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. |
| `billing_cycle_anchor_config` | `any` | No | The fixed values used to calculate the `billing_cycle_anchor`. |
| `billing_mode` | `Record<string, any>` | Yes | The billing mode of the subscription. |
| `billing_schedules` | `any[]` | Yes | Billing schedules for this subscription. |
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
| `default_tax_rates` | `any[]` | No | The tax rates that will apply to any subscription item that does not have `tax_rates` set. |
| `description` | `string` | No | The subscription's description, meant to be displayable to the customer. |
| `discounts` | `any[]` | Yes | The discounts applied to the subscription. |
| `ended_at` | `number` | No | If the subscription has ended, the date the subscription ended. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `invoice_settings` | `Record<string, any>` | Yes |  |
| `items` | `Record<string, any>` | Yes | List of subscription items, each with an attached price. |
| `latest_invoice` | `any` | No | The most recent invoice this subscription has generated over its lifecycle (for example, when it cycles or is updated). |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `managed_payments` | `any` | No | Settings for Managed Payments for this Subscription and resulting [Invoices](/api/invoices/object) and [PaymentIntents](/api/payment_intents/object). |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `next_pending_invoice_item_invoice` | `number` | No | Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. |
| `object` | `string` | Yes | String representing the object's type. |
| `on_behalf_of` | `any` | No | The account (if any) the charge was made on behalf of for charges associated with this subscription. |
| `pause_collection` | `any` | No | If specified, payment collection for this subscription will be paused. |
| `payment_settings` | `any` | No | Payment settings passed on to invoices created by the subscription. |
| `pending_invoice_item_interval` | `any` | No | Specifies an interval for how often to bill for any pending invoice items. |
| `pending_setup_intent` | `any` | No | You can use this [SetupIntent](https://docs.stripe.com/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-s… |
| `pending_update` | `any` | No | If specified, [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. |
| `presentment_details` | `Record<string, any>` | Yes |  |
| `schedule` | `any` | No | The schedule attached to the subscription |
| `start_date` | `number` | Yes | Date when the subscription was first created. |
| `status` | `string` | Yes | Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`. |
| `status_details` | `Record<string, any>` | Yes | Describes changes to the subscription's status. |
| `test_clock` | `any` | No | ID of the test clock this subscription belongs to. |
| `transfer_data` | `any` | No | The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices. |
| `trial_end` | `number` | No | If the subscription has a trial, the end of that trial. |
| `trial_settings` | `any` | No | Settings related to subscription trials. |
| `trial_start` | `number` | No | If the subscription has a trial, the beginning of that trial. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `migrate` | `/v1/subscriptions/{subscription}/migrate` | `client.Subscription().create({ $action: 'migrate', ... })` |
| `pause` | `/v1/subscriptions/{subscription}/pause` | `client.Subscription().create({ $action: 'pause', ... })` |
| `resume` | `/v1/subscriptions/{subscription}/resume` | `client.Subscription().create({ $action: 'resume', ... })` |

An action returns that action's OWN response, which is not necessarily a
Subscription record — check the API definition for its shape.

```ts
const result = await client.Subscription().create({
  $action: 'migrate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Subscription().create({
  id: 'example_id',
  automatic_tax: {},
  billing_cycle_anchor: 1,
  billing_mode: {},
  billing_schedules: [],
  cancel_at_period_end: true,
  collection_method: 'example_collection_method',
  created: 1,
  currency: 'example_currency',
  customer: 'example_customer',
  discounts: [],
  invoice_settings: {},
  items: {},
  livemode: true,
  metadata: {},
  object: 'example_object',
  presentment_details: {},
  start_date: 1,
  status: 'example_status',
  status_details: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Subscription().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Subscription().load({ id: 'subscription_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Subscription().remove({ id: 'subscription_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionItemEntity

```ts
const subscription_item = client.SubscriptionItem()
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
| `discounts` | `any[]` | Yes | The discounts applied to the subscription item. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `price` | `Record<string, any>` | Yes | Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products. |
| `quantity` | `number` | No | The [quantity](https://docs.stripe.com/subscriptions/quantities) of the plan to which the customer should be subscribed. |
| `subscription` | `string` | Yes | The `subscription` this `subscription_item` belongs to. |
| `tax_rates` | `any[]` | No | The tax rates which apply to this `subscription_item`. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionItem().create({
  id: 'example_id',
  created: 1,
  current_period_end: 1,
  current_period_start: 1,
  discounts: [],
  metadata: {},
  object: 'example_object',
  price: {},
  subscription: 'example_subscription',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionItem().list({ subscription: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SubscriptionItem().load({ id: 'subscription_item_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionScheduleEntity

```ts
const subscription_schedule = client.SubscriptionSchedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `any` | No | ID of the Connect Application that created the schedule. |
| `billing_mode` | `Record<string, any>` | Yes | The billing mode of the subscription. |
| `canceled_at` | `number` | No | Time at which the subscription schedule was canceled. |
| `completed_at` | `number` | No | Time at which the subscription schedule was completed. |
| `created` | `number` | Yes | Time at which the object was created. |
| `current_phase` | `any` | No | Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`. |
| `customer` | `any` | Yes | ID of the customer who owns the subscription schedule. |
| `customer_account` | `string` | No | ID of the account who owns the subscription schedule. |
| `default_settings` | `Record<string, any>` | Yes |  |
| `end_behavior` | `string` | Yes | Behavior of the subscription schedule and underlying subscription when it ends. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `pause_schedules` | `any[]` | No | The pause schedules for this subscription schedule. |
| `phases` | `any[]` | Yes | Configuration for the subscription schedule's phases. |
| `released_at` | `number` | No | Time at which the subscription schedule was released. |
| `released_subscription` | `string` | No | ID of the subscription once managed by the subscription schedule (if it is released). |
| `status` | `string` | Yes | The present status of the subscription schedule. |
| `subscription` | `any` | No | ID of the subscription managed by the subscription schedule. |
| `test_clock` | `any` | No | ID of the test clock this subscription schedule belongs to. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/v1/subscription_schedules/{schedule}/cancel` | `client.SubscriptionSchedule().create({ $action: 'cancel', ... })` |
| `release` | `/v1/subscription_schedules/{schedule}/release` | `client.SubscriptionSchedule().create({ $action: 'release', ... })` |

An action returns that action's OWN response, which is not necessarily a
SubscriptionSchedule record — check the API definition for its shape.

```ts
const result = await client.SubscriptionSchedule().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionSchedule().create({
  id: 'example_id',
  billing_mode: {},
  created: 1,
  customer: 'example_customer',
  default_settings: {},
  end_behavior: 'example_end_behavior',
  livemode: true,
  object: 'example_object',
  phases: [],
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionSchedule().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SubscriptionSchedule().load({ id: 'subscription_schedule_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionScheduleEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SupplierEntity

```ts
const supplier = client.Supplier()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the object. |
| `info_url` | `string` | Yes | Link to a webpage to learn more about the supplier. |
| `livemode` | `boolean` | Yes | Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. |
| `locations` | `any[]` | Yes | The locations in which this supplier operates. |
| `name` | `string` | Yes | Name of this carbon removal supplier. |
| `object` | `string` | Yes | String representing the object’s type. |
| `removal_pathway` | `string` | Yes | The scientific pathway used for carbon removal. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Supplier().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Supplier().load({ id: 'supplier_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SupplierEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TaxCodeEntity

```ts
const tax_code = client.TaxCode()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TaxCode().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TaxCode().load({ id: 'tax_code_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TaxCodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TaxIdEntity

```ts
const tax_id = client.TaxId()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TaxId().create({
  created: 1,
  id: 'example_id',
  livemode: true,
  object: 'example_object',
  type: 'example_type',
  value: 'example_value',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TaxId().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TaxId().load({ id: 'tax_id_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TaxId().remove({ id: 'tax_id_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TaxIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TaxRateEntity

```ts
const tax_rate = client.TaxRate()
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
| `metadata` | `Record<string, any>` | No | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `percentage` | `number` | Yes | Tax rate percentage out of 100. |
| `rate_type` | `string` | No | Indicates the type of tax rate applied to the taxable amount. |
| `state` | `string` | No | [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. |
| `tax_type` | `string` | No | The high-level tax type, such as `vat` or `sales_tax`. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TaxRate().create({
  id: 'example_id',
  active: true,
  created: 1,
  display_name: 'example_display_name',
  inclusive: true,
  livemode: true,
  object: 'example_object',
  percentage: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TaxRate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TaxRate().load({ id: 'tax_rate_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TaxRateEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TestClockEntity

```ts
const test_clock = client.TestClock()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advancing` | `Record<string, any>` | Yes |  |
| `created` | `number` | Yes | Time at which the object was created. |
| `deletes_after` | `number` | Yes | Time at which this clock is scheduled to auto delete. |
| `frozen_time` | `number` | Yes | Time at which all objects belonging to this clock are frozen. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `name` | `string` | No | The custom name supplied at creation. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The status of the Test Clock. |
| `status_details` | `Record<string, any>` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `advance` | `/v1/test_helpers/test_clocks/{test_clock}/advance` | `client.TestClock().create({ $action: 'advance', ... })` |

An action returns that action's OWN response, which is not necessarily a
TestClock record — check the API definition for its shape.

```ts
const result = await client.TestClock().create({
  $action: 'advance',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TestClock().create({
  advancing: {},
  created: 1,
  deletes_after: 1,
  frozen_time: 1,
  id: 'example_id',
  livemode: true,
  object: 'example_object',
  status: 'example_status',
  status_details: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TestClock().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TestClock().load({ id: 'test_clock_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TestClock().remove({ id: 'test_clock_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TestClockEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TokenEntity

```ts
const token = client.Token()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bank_account` | `Record<string, any>` | Yes | These bank accounts are payment methods on `Customer` objects. |
| `card` | `any` | Yes | Card associated with this token. |
| `client_ip` | `string` | No | IP address of the client that generates the token. |
| `created` | `number` | Yes | Time at which the object was created. |
| `device_fingerprint` | `string` | No | The hashed ID derived from the device ID from the card network associated with the token. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `last4` | `string` | No | The last four digits of the token. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `network` | `string` | Yes | The token service provider / card network associated with the token. |
| `network_data` | `Record<string, any>` | Yes |  |
| `network_updated_at` | `number` | Yes | Time at which the token was last updated by the card network. |
| `object` | `string` | Yes | String representing the object's type. |
| `status` | `string` | Yes | The usage state of the token. |
| `type` | `string` | Yes | Type of the token: `account`, `bank_account`, `card`, or `pii`. |
| `used` | `boolean` | Yes | Determines if you have already used this token (you can only use tokens once). |
| `wallet_provider` | `string` | No | The digital wallet for this token, if one was used. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Token().create({
  id: 'example_id',
  bank_account: {},
  card: 'example_card',
  created: 1,
  livemode: true,
  network: 'example_network',
  network_data: {},
  network_updated_at: 1,
  object: 'example_object',
  status: 'example_status',
  type: 'example_type',
  used: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Token().list({ card: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Token().load({ id: 'token_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TopupEntity

```ts
const topup = client.Topup()
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
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `payment_method` | `any` | No | The ID of a PaymentMethod representing the payment method used for the top-up. |
| `payment_method_options` | `any` | No | Payment-method-specific configuration for this top-up. |
| `source` | `any` | No | The source field is deprecated. |
| `statement_descriptor` | `string` | No | Extra information about a top-up. |
| `status` | `string` | Yes | The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`. |
| `transfer_group` | `string` | No | A string that identifies this top-up as part of a group. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/v1/topups/{topup}/cancel` | `client.Topup().create({ $action: 'cancel', ... })` |

An action returns that action's OWN response, which is not necessarily a
Topup record — check the API definition for its shape.

```ts
const result = await client.Topup().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Topup().create({
  id: 'example_id',
  amount: 1,
  created: 1,
  currency: 'example_currency',
  livemode: true,
  metadata: {},
  object: 'example_object',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Topup().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Topup().load({ id: 'topup_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TopupEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TransactionEntity

```ts
const transaction = client.Transaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | The ID of the Financial Connections Account this transaction belongs to. |
| `amount` | `number` | Yes | The transaction amount, which will be reflected in your balance. |
| `amount_details` | `any` | No | Detailed breakdown of amount components. |
| `authorization` | `any` | No | The `Authorization` object that led to this transaction. |
| `balance_impact` | `Record<string, any>` | Yes | Change to a FinancialAccount's balance |
| `balance_transaction` | `any` | No | ID of the [balance transaction](https://docs.stripe.com/api/balance_transactions) associated with this transaction. |
| `card` | `any` | Yes | The card used to make this transaction. |
| `cardholder` | `any` | No | The cardholder to whom this transaction belongs. |
| `created` | `number` | Yes | Time at which the object was created. |
| `currency` | `string` | Yes | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. |
| `customer` | `string` | No | The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource. |
| `customer_details` | `Record<string, any>` | Yes |  |
| `description` | `string` | Yes | An arbitrary string attached to the object. |
| `dispute` | `any` | No | If you've disputed the transaction, the ID of the dispute. |
| `entries` | `Record<string, any>` | Yes | A list of TransactionEntries that are part of this Transaction. |
| `financial_account` | `string` | Yes | The FinancialAccount associated with this object. |
| `flow` | `string` | No | ID of the flow that created the Transaction. |
| `flow_details` | `any` | No | Details of the flow that created the Transaction. |
| `flow_type` | `string` | Yes | Type of the flow that created the Transaction. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `line_items` | `Record<string, any>` | Yes | The tax collected or refunded, by line item. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `merchant_amount` | `number` | Yes | The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). |
| `merchant_currency` | `string` | Yes | The currency with which the merchant is taking payment. |
| `merchant_data` | `Record<string, any>` | Yes |  |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `network_data` | `any` | No | Details about the transaction, such as processing dates, set by the card network. |
| `object` | `string` | Yes | String representing the object's type. |
| `posted_at` | `number` | No | Time at which this transaction posted. |
| `purchase_details` | `any` | No | Additional purchase information that is optionally provided by the merchant. |
| `reference` | `string` | Yes | A custom unique identifier, such as 'myOrder_123'. |
| `reversal` | `any` | No | If `type=reversal`, contains information about what was reversed. |
| `ship_from_details` | `any` | No | The details of the ship from location, such as the address. |
| `shipping_cost` | `any` | No | The shipping cost details for the transaction. |
| `status` | `string` | Yes | Status of the Transaction. |
| `status_transitions` | `Record<string, any>` | Yes |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `create_force_capture` | `/v1/test_helpers/issuing/transactions/create_force_capture` | `client.Transaction().create({ $action: 'create_force_capture', ... })` |
| `create_from_calculation` | `/v1/tax/transactions/create_from_calculation` | `client.Transaction().create({ $action: 'create_from_calculation', ... })` |
| `create_reversal` | `/v1/tax/transactions/create_reversal` | `client.Transaction().create({ $action: 'create_reversal', ... })` |
| `create_unlinked_refund` | `/v1/test_helpers/issuing/transactions/create_unlinked_refund` | `client.Transaction().create({ $action: 'create_unlinked_refund', ... })` |
| `refund` | `/v1/test_helpers/issuing/transactions/{transaction}/refund` | `client.Transaction().create({ $action: 'refund', ... })` |

An action returns that action's OWN response, which is not necessarily a
Transaction record — check the API definition for its shape.

```ts
const result = await client.Transaction().create({
  $action: 'create_force_capture',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Transaction().create({
  id: 'example_id',
  account: 'example_account',
  amount: 1,
  balance_impact: {},
  card: 'example_card',
  created: 1,
  currency: 'example_currency',
  customer_details: {},
  description: 'example_description',
  entries: {},
  financial_account: 'example_financial_account',
  flow_type: 'example_flow_type',
  line_items: {},
  livemode: true,
  merchant_amount: 1,
  merchant_currency: 'example_merchant_currency',
  merchant_data: {},
  metadata: {},
  object: 'example_object',
  reference: 'example_reference',
  status: 'example_status',
  status_transitions: {},
  tax_date: 1,
  transacted_at: 1,
  transaction_refresh: 'example_transaction_refresh',
  type: 'example_type',
  updated: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Transaction().list({ financial_account: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Transaction().load({ id: 'transaction_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TransactionEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TransactionEntryEntity

```ts
const transaction_entry = client.TransactionEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance_impact` | `Record<string, any>` | Yes | Change to a FinancialAccount's balance |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TransactionEntry().list({ financial_account: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TransactionEntry().load({ id: 'transaction_entry_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TransactionEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TransferEntity

```ts
const transfer = client.Transfer()
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
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `reversals` | `Record<string, any>` | Yes | A list of reversals that have been applied to the transfer. |
| `reversed` | `boolean` | Yes | Whether the transfer has been fully reversed. |
| `source_transaction` | `any` | No | ID of the charge that was used to fund the transfer. |
| `source_type` | `string` | No | The source balance this transfer came from. |
| `transfer_group` | `string` | No | A string that identifies this transaction as part of a group. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Transfer().create({
  id: 'example_id',
  amount: 1,
  amount_reversed: 1,
  created: 1,
  currency: 'example_currency',
  livemode: true,
  metadata: {},
  object: 'example_object',
  reversals: {},
  reversed: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Transfer().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Transfer().load({ id: 'transfer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TransferEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TrialOfferEntity

```ts
const trial_offer = client.TrialOffer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the trial offer is active. |
| `duration` | `Record<string, any>` | Yes |  |
| `end_behavior` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `nickname` | `string` | No | A brief description of the trial offer, hidden from customers. |
| `object` | `string` | Yes | String representing the object's type. |
| `price` | `number` | Yes | The price during the trial offer. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TrialOffer().create({
  id: 'example_id',
  active: true,
  duration: {},
  end_behavior: {},
  livemode: true,
  object: 'example_object',
  price: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TrialOffer().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TrialOffer().load({ id: 'trial_offer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TrialOfferEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ValueListEntity

```ts
const value_list = client.ValueList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes | The name of the value list for use in rules. |
| `created` | `number` | Yes | Time at which the object was created. |
| `created_by` | `string` | Yes | The name or email address of the user who created this value list. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `item_type` | `string` | Yes | The type of items in the value list. |
| `list_items` | `Record<string, any>` | Yes | List of items contained within this value list. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `name` | `string` | Yes | The name of the value list. |
| `object` | `string` | Yes | String representing the object's type. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ValueList().create({
  id: 'example_id',
  alias: 'example_alias',
  created: 1,
  created_by: 'example_created_by',
  item_type: 'example_item_type',
  list_items: {},
  livemode: true,
  metadata: {},
  name: 'example_name',
  object: 'example_object',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ValueList().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ValueList().load({ id: 'value_list_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ValueList().remove({ id: 'value_list_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ValueListEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ValueListItemEntity

```ts
const value_list_item = client.ValueListItem()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ValueListItem().create({
  created: 1,
  created_by: 'example_created_by',
  id: 'example_id',
  livemode: true,
  object: 'example_object',
  value: 'example_value',
  value_list: 'example_value_list',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ValueListItem().list({ value_list: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ValueListItem().load({ id: 'value_list_item_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ValueListItem().remove({ id: 'value_list_item_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ValueListItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VerificationReportEntity

```ts
const verification_report = client.VerificationReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_reference_id` | `string` | No | A string to reference this user. |
| `created` | `number` | Yes | Time at which the object was created. |
| `document` | `Record<string, any>` | Yes | Result from a document check |
| `email` | `Record<string, any>` | Yes | Result from a email check |
| `id` | `string` | Yes | Unique identifier for the object. |
| `id_number` | `Record<string, any>` | Yes | Result from an id_number check |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `object` | `string` | Yes | String representing the object's type. |
| `options` | `Record<string, any>` | No |  |
| `phone` | `Record<string, any>` | Yes | Result from a phone check |
| `selfie` | `Record<string, any>` | Yes | Result from a selfie check |
| `type` | `string` | Yes | Type of report. |
| `verification_flow` | `string` | No | The configuration token of a verification flow from the dashboard. |
| `verification_session` | `string` | No | ID of the VerificationSession that created this report. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.VerificationReport().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.VerificationReport().load({ id: 'verification_report_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VerificationReportEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VerificationSessionEntity

```ts
const verification_session = client.VerificationSession()
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
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `options` | `any` | No | A set of options for the session’s verification checks. |
| `provided_details` | `any` | No | Details provided about the user being verified. |
| `redaction` | `any` | No | Redaction status of this VerificationSession. |
| `related_customer` | `string` | No | Customer ID |
| `related_customer_account` | `string` | No | The ID of the Account representing a customer. |
| `related_person` | `Record<string, any>` | Yes |  |
| `status` | `string` | Yes | Status of this VerificationSession. |
| `type` | `string` | Yes | The type of [verification check](https://docs.stripe.com/identity/verification-checks) to be performed. |
| `url` | `string` | No | The short-lived URL that you use to redirect a user to Stripe to submit their identity information. |
| `verification_flow` | `string` | No | The configuration token of a verification flow from the dashboard. |
| `verified_outputs` | `any` | No | The user’s verified data. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/v1/identity/verification_sessions/{session}/cancel` | `client.VerificationSession().create({ $action: 'cancel', ... })` |
| `redact` | `/v1/identity/verification_sessions/{session}/redact` | `client.VerificationSession().create({ $action: 'redact', ... })` |

An action returns that action's OWN response, which is not necessarily a
VerificationSession record — check the API definition for its shape.

```ts
const result = await client.VerificationSession().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.VerificationSession().create({
  id: 'example_id',
  created: 1,
  livemode: true,
  metadata: {},
  object: 'example_object',
  related_person: {},
  status: 'example_status',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.VerificationSession().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.VerificationSession().load({ id: 'verification_session_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VerificationSessionEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEndpointEntity

```ts
const webhook_endpoint = client.WebhookEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_version` | `string` | No | The API version that events are rendered as for this webhook endpoint. |
| `application` | `string` | No | The ID of the associated Connect application. |
| `created` | `number` | Yes | Time at which the object was created. |
| `description` | `string` | No | An optional description of what the webhook is used for. |
| `enabled_events` | `any[]` | Yes | The list of events to enable for this endpoint. |
| `id` | `string` | Yes | Unique identifier for the object. |
| `livemode` | `boolean` | Yes | If the object exists in live mode, the value is `true`. |
| `metadata` | `Record<string, any>` | Yes | Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. |
| `object` | `string` | Yes | String representing the object's type. |
| `secret` | `string` | No | The endpoint's secret, used to generate [webhook signatures](https://docs.stripe.com/webhooks/signatures). |
| `status` | `string` | Yes | The status of the webhook. |
| `url` | `string` | Yes | The URL of the webhook endpoint. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WebhookEndpoint().create({
  id: 'example_id',
  created: 1,
  enabled_events: [],
  livemode: true,
  metadata: {},
  object: 'example_object',
  status: 'example_status',
  url: 'example_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WebhookEndpoint().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WebhookEndpoint().load({ id: 'webhook_endpoint_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `StripeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new StripeSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

