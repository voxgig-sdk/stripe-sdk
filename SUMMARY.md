# Stripe API

The Stripe REST API. Please see https://stripe.com/docs/api for more details.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 148 entities and 612 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Account](docs/api/account.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `account_holder`: The account holder that this account belongs to.
- `account_numbers`: Details about the account numbers.
- `balance`: The current balance, if any, that&#39;s stored on the customer in their default currency. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that&#39;s added to their next invoice. The balance only considers amounts that Stripe hasn&#39;t successfully applied to any invoice. It doesn&#39;t reflect unpaid invoices. This balance is only taken into account after invoices finalize. For multi-currency balances, see [invoice_credit_balance](https://docs.stripe.com/api/customers/object#customer_object-invoice_credit_balance).
- `balance_refresh`: The state of the most recent attempt to refresh the account balance.
- `business_profile`: Business information about the account.

### [AccountLink](docs/api/account_link.html)

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `expires_at`: The timestamp at which this account link will expire.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.
- `url`: The URL for the account link.

### [AccountOwner](docs/api/account_owner.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `email`: The email address of the owner.
- `id`: Unique identifier for the object.
- `name`: The full name of the owner.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value. Always has the value `list`.
- `ownership`: The ownership object that this owner belongs to.

### [AccountSession](docs/api/account_session.html)

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `financial_account`: The financial account this card is attached to.

### [ActiveEntitlement](docs/api/active_entitlement.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `feature`: The [Feature](https://docs.stripe.com/api/entitlements/feature) that the customer is entitled to.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `lookup_key`: A unique key you provide as your own system identifier. This may be up to 80 characters.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value. Always has the value `list`.

### [Alert](docs/api/alert.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `alert_type`: Defines the type of the alert.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.
- `status`: Status of the alert. This can be active, inactive or archived.

### [ApplePayDomain](docs/api/apple_pay_domain.html)

Results: Successful response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.

### [ApplicationFee](docs/api/application_fee.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `account`: ID of the Stripe account this fee was taken from.
- `amount`: Amount earned, in cents (or local equivalent).
- `amount_refunded`: Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued)
- `application`: ID of the Connect application that earned the fee.
- `balance_transaction`: Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).

### [Association](docs/api/association.html)

Results: Successful response.

SDK operations: `list`.

### [Authentication](docs/api/authentication.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `acquirer_details`: Contains additional details about the acquirer for a 3DS Authentication.
- `amount`: The amount for this 3DS Authentication.
- `challenge_url`: The URL for presenting a challenge to your cardholder, present if status is requires_challenge.
- `channel`: Contains details on the channel used (browser, 3RI) for a standalone 3DS Authentication.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.

### [Authorization](docs/api/authorization.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: The total amount that was authorized or rejected. This amount is in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). `amount` should be the same as `merchant_amount`, unless `currency` and `merchant_currency` are different.
- `amount_details`: Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
- `approved`: Whether the authorization has been approved.
- `authorization_method`: How the card details were provided.
- `balance_transactions`: List of balance transactions associated with this authorization.

### [Balance](docs/api/balance.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `available`: Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://docs.stripe.com/api#transfers) or [Payouts API](https://docs.stripe.com/api#payouts). You can find the available balance for each currency and payment type in the `source_types` property.
- `connect_reserved`: Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. You can find the connect reserve balance for each currency and payment type in the `source_types` property.
- `instant_available`: Funds that you can pay out using Instant Payouts.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.

### [BalanceSetting](docs/api/balance_setting.html)

Results: Successful response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `debit_negative_balances`: A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See [Understanding Connect account balances](/connect/account-balances) for details. The default value is `false` when [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, otherwise `true`.
- `payouts`: Settings specific to the account&#39;s payouts.

### [BalanceTransaction](docs/api/balance_transaction.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `amount`: Gross amount of this transaction (in cents (or local equivalent)). A positive value represents funds charged to another party, and a negative value represents funds sent to another party.
- `available_on`: The date that the transaction&#39;s net funds become available in the Stripe balance.
- `balance_type`: The balance that this transaction impacts.
- `checkout_session`: The ID of the checkout session (if any) that created the transaction.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.

### [BankAccount](docs/api/bank_account.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `account`: The account this bank account belongs to. Only applicable on Accounts (not customers or recipients) This property is only available when returned as an [External Account](/api/external_account_bank_accounts/object) where [controller.is_controller](/api/accounts/object#account_object-controller-is_controller) is `true`.
- `account_holder_name`: The name of the person or business that owns the bank account.
- `account_holder_type`: The type of entity that holds the account. This can be either `individual` or `company`.
- `account_type`: The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
- `available_payout_methods`: A set of available payout methods for this card. Only values from this set should be passed as the `method` when creating a payout.

### [Calculation](docs/api/calculation.html)

Results: Successful response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `amount_total`: Total amount after taxes in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `customer`: The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource.
- `customer_details`: Customer information for this payment.
- `expires_at`: Timestamp of date at which the tax calculation will expire.

### [Capability](docs/api/capability.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `account`: The account for which the capability enables functionality.
- `future_requirements`: Information about the [upcoming new requirements for the bank account](https://docs.stripe.com/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when.
- `id`: The identifier for the capability.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.
- `requested`: Whether the capability has been requested.

### [Card](docs/api/card.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `account`: The account this bank account belongs to. Only applicable on Accounts (not customers or recipients) This property is only available when returned as an [External Account](/api/external_account_bank_accounts/object) where [controller.is_controller](/api/accounts/object#account_object-controller-is_controller) is `true`.
- `address_city`: City/District/Suburb/Town/Village.
- `address_country`: Billing address country, if provided when creating card.
- `address_line1`: Address line 1 (Street address/PO Box/Company name).
- `address_line1_check`: If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.

### [Cardholder](docs/api/cardholder.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `company`: Additional information about a `company` cardholder.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `email`: The cardholder&#39;s email address.
- `id`: Unique identifier for the object.
- `individual`: Additional information about an `individual` cardholder.

### [CashBalance](docs/api/cash_balance.html)

Results: Successful response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `available`: A hash of all cash balances available to this customer. You cannot delete a customer with any cash balances, even if the balance is 0. Amounts are represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
- `customer`: The ID of the customer whose cash balance this object represents.
- `customer_account`: The ID of an Account representing a customer whose cash balance this object represents.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.

### [CashBalanceTransaction](docs/api/cash_balance_transaction.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `customer`: The customer whose available cash balance changed as a result of this transaction.
- `customer_account`: The ID of an Account representing a customer whose available cash balance changed as a result of this transaction.
- `ending_balance`: The total available cash balance for the specified currency after this transaction was applied. Represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).

### [Charge](docs/api/charge.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) (for example, 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://docs.stripe.com/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (for example, a value of 99999999 for a USD charge of $999,999.99).
- `amount_captured`: Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made).
- `amount_refunded`: Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued).
- `application`: ID of the Connect application that created the charge.
- `application_fee`: The application fee (if any) for the charge. [See the Connect documentation](https://docs.stripe.com/connect/direct-charges#collect-fees) for details.

### [Configuration](docs/api/configuration.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `active`: Whether the configuration is active and can be used to create portal sessions.
- `application`: ID of the Connect Application that created the configuration.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `default_return_url`: The default URL to redirect customers to when they click on the portal&#39;s link to return to your website. This can be [overridden](https://docs.stripe.com/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
- `id`: Unique identifier for the object.

### [ConfirmationToken](docs/api/confirmation_token.html)

Results: Successful response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `expires_at`: Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `mandate_data`: Data used for generating a Mandate.

### [ConnectionToken](docs/api/connection_token.html)

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `location`: The id of the location that this connection token is scoped to. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://docs.stripe.com/terminal/fleet/locations-and-zones?dashboard-or-api=api#connection-tokens).
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.
- `secret`: Your application should pass this token to the Stripe Terminal SDK.

### [CountrySpec](docs/api/country_spec.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `default_currency`: The default currency for this country. This applies to both payment methods and bank accounts.
- `id`: Unique identifier for the object. Represented as the ISO country code for this country.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value. Always has the value `list`.
- `supported_bank_account_currencies`: Currencies that can be accepted in the specific country (for transfers).
- `supported_payment_currencies`: Currencies that can be accepted in the specified country (for payments).

### [Coupon](docs/api/coupon.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount_off`: Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off.
- `currency_options`: Coupons defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
- `duration`: One of `forever`, `once`, or `repeating`. Describes how long a customer who applies this coupon will get the discount.

### [CreditBalanceSummary](docs/api/credit_balance_summary.html)

Results: Successful response.

SDK operations: `list`.

### [CreditBalanceTransaction](docs/api/credit_balance_transaction.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `credit`: Credit details for this credit balance transaction. Only present if type is `credit`.
- `credit_grant`: The credit grant associated with this credit balance transaction.
- `debit`: Debit details for this credit balance transaction. Only present if type is `debit`.
- `effective_at`: The effective time of this credit balance transaction.

### [CreditGrant](docs/api/credit_grant.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) (for example, 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://docs.stripe.com/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (for example, a value of 99999999 for a USD charge of $999,999.99).
- `category`: The category of this credit grant. This is for tracking purposes and isn&#39;t displayed to the customer.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `customer`: ID of the customer receiving the billing credits.
- `customer_account`: ID of the account representing the customer receiving the billing credits

### [CreditNote](docs/api/credit_note.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax.
- `amount_shipping`: This is the sum of all the shipping amounts.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `customer`: ID of the customer.

### [CreditNoteLine](docs/api/credit_note_line.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `amount`: The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts.
- `description`: Description of the item being credited.
- `discount_amount`: The integer amount in cents (or local equivalent) representing the discount being credited for this line item.
- `discount_amounts`: The amount of discount calculated per discount for this line item
- `id`: Unique identifier for the object.

### [CreditReversal](docs/api/credit_reversal.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount (in cents) transferred.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `financial_account`: The FinancialAccount to reverse funds from.
- `hosted_regulatory_receipt_url`: A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe&#39;s money transmission licenses.

### [Customer](docs/api/customer.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `address`: The customer&#39;s billing address.
- `balance`: The current balance, if any, that&#39;s stored on the customer in their default currency. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that&#39;s added to their next invoice. The balance only considers amounts that Stripe hasn&#39;t successfully applied to any invoice. It doesn&#39;t reflect unpaid invoices. This balance is only taken into account after invoices finalize. For multi-currency balances, see [invoice_credit_balance](https://docs.stripe.com/api/customers/object#customer_object-invoice_credit_balance).
- `business_name`: The customer&#39;s business name.
- `cash_balance`: The current funds being held by Stripe on behalf of the customer. You can apply these funds towards payment intents when the source is &quot;cash_balance&quot;. The `settings[reconciliation_mode]` field describes if these funds apply to these payment intents manually or automatically.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.

### [CustomerBalanceTransaction](docs/api/customer_balance_transaction.html)

Results: Successful response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `amount`: The amount of the transaction. A negative value is a credit for the customer&#39;s balance, and a positive value is a debit to the customer&#39;s `balance`.
- `checkout_session`: The ID of the checkout session (if any) that created the transaction.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `credit_note`: The ID of the credit note (if any) related to the transaction.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).

### [CustomerSession](docs/api/customer_session.html)

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `client_secret`: The client secret of this Customer Session. Used on the client to set up secure access to the given `customer`. The client secret can be used to provide access to `customer` from your frontend. It should not be stored, logged, or exposed to anyone other than the relevant customer. Make sure that you have TLS enabled on any page that includes the client secret.
- `components`: Configuration for the components supported by this Customer Session.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `customer`: The Customer the Customer Session was created for.
- `customer_account`: The Account that the Customer Session was created for.

### [DebitReversal](docs/api/debit_reversal.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount (in cents) transferred.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `financial_account`: The FinancialAccount to reverse funds from.
- `hosted_regulatory_receipt_url`: A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe&#39;s money transmission licenses.

### [DeletedAccount](docs/api/deleted_account.html)

Results: Successful response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Unique identifier for the object.

### [DeletedApplePayDomain](docs/api/deleted_apple_pay_domain.html)

Results: Successful response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Unique identifier for the object.

### [DeletedCoupon](docs/api/deleted_coupon.html)

Results: Successful response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Unique identifier for the object.

### [DeletedExternalAccount](docs/api/deleted_external_account.html)

Results: Successful response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Unique identifier for the object.

### [DeletedInvoiceitem](docs/api/deleted_invoiceitem.html)

Results: Successful response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Unique identifier for the object.

### [DeletedPerson](docs/api/deleted_person.html)

Results: Successful response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Unique identifier for the object.

### [DeletedPlan](docs/api/deleted_plan.html)

Results: Successful response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Unique identifier for the object.

### [DeletedProductFeature](docs/api/deleted_product_feature.html)

Results: Successful response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Unique identifier for the object.

### [DeletedSubscriptionItem](docs/api/deleted_subscription_item.html)

Results: Successful response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Unique identifier for the object.

### [DeletedWebhookEndpoint](docs/api/deleted_webhook_endpoint.html)

Results: Successful response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Unique identifier for the object.

### [Discount](docs/api/discount.html)

Results: Successful response.

SDK operations: `load`, `remove`.

Key fields to recognise:

- `checkout_session`: The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. Not present for subscription mode.
- `customer`: The ID of the customer associated with this discount.
- `customer_account`: The ID of the account representing the customer associated with this discount.
- `end`: If the coupon has a duration of `repeating`, the date that this discount will end. If the coupon has a duration of `once` or `forever`, this attribute will be null.
- `id`: The ID of the discount object. Discounts can&#39;t be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array.

### [Dispute](docs/api/dispute.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Disputed amount. Usually the amount of the charge, but it can differ (usually because of currency fluctuation or because only part of the order is disputed).
- `balance_transactions`: List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute.
- `charge`: ID of the charge that&#39;s disputed.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).

### [Domain](docs/api/domain.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value. Always has the value `list`.

### [EarlyFraudWarning](docs/api/early_fraud_warning.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `actionable`: An EFW is actionable if it has not received a dispute and has not been fully refunded. You may wish to proactively refund a charge that receives an EFW, in order to avoid receiving a dispute later.
- `charge`: ID of the charge this early fraud warning is for, optionally expanded.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `fraud_type`: The type of fraud labelled by the issuer. One of `card_never_received`, `fraudulent_card_application`, `made_with_counterfeit_card`, `made_with_lost_card`, `made_with_stolen_card`, `misc`, `unauthorized_use_of_card`.
- `id`: Unique identifier for the object.

### [EphemeralKey](docs/api/ephemeral_key.html)

Results: Successful response.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `expires`: Time at which the key will expire. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.

### [Event](docs/api/event.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `account`: The connected account that originates the event.
- `api_version`: The Stripe API version used to render `data` when the event was created. The contents of `data` never change, so this value remains static regardless of the API version currently in use. This property is populated only for events created on or after October 31, 2014.
- `context`: Authentication context needed to fetch the event or related object.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `data`: Details about each object.

### [ExchangeRate](docs/api/exchange_rate.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `id`: Unique identifier for the object. Represented as the three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) in lowercase.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value. Always has the value `list`.
- `rates`: Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency.

### [ExternalAccount](docs/api/external_account.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `data`: Details about each object.
- `has_more`: True if this list has another page of items after this one that can be fetched.
- `id`: Unique identifier for the object.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.
- `url`: The URL provided to you to redirect a customer to as part of a `redirect` authentication flow.

### [Feature](docs/api/feature.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `active`: Inactive features cannot be attached to new products and will not be returned from the features list endpoint.
- `entitlement_feature`: A feature represents a monetizable ability or functionality in your system. Features can be assigned to products, and when those products are purchased, Stripe will create an entitlement to the feature for the purchasing customer.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `lookup_key`: A unique key you provide as your own system identifier. This may be up to 80 characters.

### [FeedbackOption](docs/api/feedback_option.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `deactivated_at`: The time the feedback option was deactivated, if any. Measured in seconds since Unix epoch.
- `description`: An arbitrary string attached to the object. Often useful for displaying to users.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.

### [File](docs/api/file.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `data`: Details about each object.
- `expires_at`: The file expires and isn&#39;t available at this time in epoch seconds.
- `filename`: The suitable name for saving the file to a filesystem.
- `has_more`: True if this list has another page of items after this one that can be fetched.

### [FileLink](docs/api/file_link.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `expired`: Returns if the link is already expired.
- `expires_at`: Time that the link expires.
- `file`: The file object this link points to.
- `id`: Unique identifier for the object.

### [FinancialAccount](docs/api/financial_account.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `active_features`: The array of paths to active Features in the Features hash.
- `balance`: Balance information for the FinancialAccount
- `country`: Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `features`: Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`. Stripe or the platform can control Features via the requested field.

### [FinancialAccountFeature](docs/api/financial_account_feature.html)

Results: Successful response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `card_issuing`: Toggle settings for enabling/disabling a feature
- `deposit_insurance`: Toggle settings for enabling/disabling a feature
- `financial_addresses`: Settings related to Financial Addresses features on a Financial Account
- `id`: Unique identifier for the object.
- `inbound_transfers`: InboundTransfers contains inbound transfers features for a FinancialAccount.

### [FundCashBalance](docs/api/fund_cash_balance.html)

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `customer`: The customer whose available cash balance changed as a result of this transaction.
- `customer_account`: The ID of an Account representing a customer whose available cash balance changed as a result of this transaction.
- `ending_balance`: The total available cash balance for the specified currency after this transaction was applied. Represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).

### [FundingInstruction](docs/api/funding_instruction.html)

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `country`: The country of the bank account to fund
- `financial_addresses`: A list of financial addresses that can be used to fund a particular balance
- `type`: The bank_transfer type

### [History](docs/api/history.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `amount`: Gross amount of this transaction (in cents (or local equivalent)). A positive value represents funds charged to another party, and a negative value represents funds sent to another party.
- `available_on`: The date that the transaction&#39;s net funds become available in the Stripe balance.
- `balance_type`: The balance that this transaction impacts.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).

### [InboundTransfer](docs/api/inbound_transfer.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount (in cents) transferred.
- `cancelable`: Returns `true` if the InboundTransfer is able to be canceled.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `description`: An arbitrary string attached to the object. Often useful for displaying to users.

### [Install](docs/api/install.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `account`: The ID of the account that the app install belongs to.
- `app`: The ID of the app installed.
- `approval_required`: Whether the installer must authorize pending permissions, content security policy entries, or endpoints. For private apps, `approval_required` stays `false`. Install a new version from the Dashboard to grant its permissions.
- `auth_code`: The authorization code for an oauth app install.
- `channel`: The distribution channel associated with the app install.

### [Invoice](docs/api/invoice.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `account_country`: The country of the business associated with this invoice, most often the business creating the invoice.
- `account_name`: The public name of the business associated with this invoice, most often the business creating the invoice.
- `account_tax_ids`: The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
- `amount_due`: Final amount due at this time for this invoice. If the invoice&#39;s total is smaller than the minimum charge amount, for example, or if there is account credit that can be applied to the invoice, the `amount_due` may be 0. If there is a positive `starting_balance` for the invoice (the customer owes money), the `amount_due` will also take that into account. The charge that gets generated for the invoice will be for the amount specified in `amount_due`.
- `amount_overpaid`: Amount that was overpaid on the invoice. The amount overpaid is credited to the customer&#39;s credit balance.

### [InvoicePayment](docs/api/invoice_payment.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `amount_paid`: Amount that was actually paid for this invoice, in cents (or local equivalent). This field is null until the payment is `paid`. This amount can be less than the `amount_requested` if the PaymentIntent’s `amount_received` is not sufficient to pay all of the invoices that it is attached to.
- `amount_requested`: Amount intended to be paid toward this invoice, in cents (or local equivalent)
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `id`: Unique identifier for the object.

### [InvoiceRenderingTemplate](docs/api/invoice_rendering_template.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `metadata`: Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
- `nickname`: A brief description of the template, hidden from customers

### [Invoiceitem](docs/api/invoiceitem.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount (in the `currency` specified) of the invoice item. This should always be equal to `unit_amount * quantity`.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `customer`: The ID of the customer to bill for this invoice item.
- `customer_account`: The ID of the account to bill for this invoice item.
- `date`: Time at which the object was created. Measured in seconds since the Unix epoch.

### [Line](docs/api/line.html)

Results: Successful response.

SDK operations: `create`, `list`.

Key fields to recognise:

- `amount`: The amount, in cents (or local equivalent).
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `description`: An arbitrary string attached to the object. Often useful for displaying to users.
- `discount_amount`: The total discount applied on the transaction represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). An integer greater than 0. This field is mutually exclusive with the `amount_details[line_items][#][discount_amount]` field.
- `discount_amounts`: The amount of discount calculated per discount for this line item.

### [LineItem](docs/api/line_item.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `amount`: The line item amount in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
- `amount_discount`: Total discount amount applied. If no discounts were applied, defaults to 0.
- `amount_subtotal`: Total before any discounts or taxes are applied.
- `amount_tax`: The amount of tax calculated for this line item, in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
- `amount_total`: Total after discounts and taxes.

### [LinkedAccount](docs/api/linked_account.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `account_holder`: The account holder that this account belongs to.
- `account_numbers`: Details about the account numbers.
- `balance`: The most recent information about the account&#39;s balance.
- `balance_refresh`: The state of the most recent attempt to refresh the account balance.
- `category`: The type of the account. Account category is further divided in `subcategory`.

### [LinkedAccountOwner](docs/api/linked_account_owner.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `email`: The email address of the owner.
- `id`: Unique identifier for the object.
- `name`: The full name of the owner.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value. Always has the value `list`.
- `ownership`: The ownership object that this owner belongs to.

### [Location](docs/api/location.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `address`: Owner&#39;s address.
- `city`: City, district, suburb, town, or village.
- `configuration_overrides`: The ID of a configuration that will be used to customize all readers in this location.
- `country`: Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
- `description`: An arbitrary string attached to the object. Often useful for displaying to users.

### [LoginLink](docs/api/login_link.html)

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.
- `url`: The URL for the login link.

### [Mandate](docs/api/mandate.html)

Results: Successful response.

SDK operations: `load`.

Key fields to recognise:

- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.
- `on_behalf_of`: The account (if any) that the mandate is intended for.
- `payment_method`: ID of the payment method associated with this mandate.

### [Meter](docs/api/meter.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `display_name`: The meter&#39;s name.
- `event_name`: The name of the meter event to record usage for. Corresponds with the `event_name` field on meter events.
- `event_time_window`: The time window which meter events have been pre-aggregated for, if any.
- `id`: Unique identifier for the object.

### [MeterEvent](docs/api/meter_event.html)

Results: Successful response.

SDK operations: `create`.

### [MeterEventAdjustment](docs/api/meter_event_adjustment.html)

Results: Successful response.

SDK operations: `create`.

### [MeterEventSummary](docs/api/meter_event_summary.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `aggregated_value`: Aggregated value of all the events within `start_time` (inclusive) and `end_time` (inclusive). The aggregation strategy is defined on meter via `default_aggregation`.
- `end_time`: End timestamp for this event summary (exclusive). Must be aligned with minute boundaries.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `meter`: The meter associated with this event summary.

### [OnboardingLink](docs/api/onboarding_link.html)

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `apple_terms_and_conditions`: The options associated with the Apple Terms and Conditions link type.

### [Order](docs/api/order.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount_fees`: Total amount of [Frontier](https://frontierclimate.com/)&#39;s service fees in the currency&#39;s smallest unit.
- `amount_subtotal`: Total amount of the carbon removal in the currency&#39;s smallest unit.
- `amount_total`: Total amount of the order including fees in the currency&#39;s smallest unit.
- `canceled_at`: Time at which the order was canceled. Measured in seconds since the Unix epoch.
- `cancellation_reason`: Reason for the cancellation of this order.

### [OutboundPayment](docs/api/outbound_payment.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount (in cents) transferred.
- `cancelable`: Returns `true` if the object can be canceled, and `false` otherwise.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `customer`: ID of the [customer](https://docs.stripe.com/api/customers) to whom an OutboundPayment is sent.

### [OutboundTransfer](docs/api/outbound_transfer.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount (in cents) transferred.
- `cancelable`: Returns `true` if the object can be canceled, and `false` otherwise.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `description`: An arbitrary string attached to the object. Often useful for displaying to users.

### [PaymentAttemptRecord](docs/api/payment_attempt_record.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `amount`: A representation of an amount of money, consisting of an amount and a currency.
- `amount_authorized`: A representation of an amount of money, consisting of an amount and a currency.
- `amount_canceled`: A representation of an amount of money, consisting of an amount and a currency.
- `amount_failed`: A representation of an amount of money, consisting of an amount and a currency.
- `amount_guaranteed`: A representation of an amount of money, consisting of an amount and a currency.

### [PaymentEvaluation](docs/api/payment_evaluation.html)

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `client_device_metadata_details`: Client device metadata attached to this payment evaluation.
- `created_at`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `customer_details`: Customer details attached to this payment evaluation.
- `events`: Event information associated with the payment evaluation, such as refunds, dispute, early fraud warnings, or user interventions.
- `id`: Unique identifier for the object.

### [PaymentIntent](docs/api/payment_intent.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `allowed_payment_method_types`: The list of payment method types allowed for use with this payment. Stripe automatically returns compatible payment methods from this list in the `payment_method_types` field of the response, based on the other PaymentIntent parameters, such as `currency`, `amount`, and `customer`.
- `amount`: Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) (for example, 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://docs.stripe.com/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (for example, a value of 99999999 for a USD charge of $999,999.99).
- `amount_capturable`: Amount that can be captured from this PaymentIntent.
- `amount_details`: Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
- `amount_received`: Amount that this PaymentIntent collects.

### [PaymentIntentAmountDetailsLineItem](docs/api/payment_intent_amount_details_line_item.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `discount_amount`: The discount applied on this line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). An integer greater than 0. This field is mutually exclusive with the `amount_details[discount_amount]` field.
- `id`: Unique identifier for the object.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value. Always has the value `list`.
- `payment_method_options`: Payment method-specific information for line items.
- `product_code`: The product code of the line item, such as an SKU. Required for L3 rates. At most 12 characters long.

### [PaymentLink](docs/api/payment_link.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `active`: Whether the payment link&#39;s `url` is active. If `false`, customers visiting the URL will be shown a page saying that the link has been deactivated.
- `allow_promotion_codes`: Whether user redeemable promotion codes are enabled.
- `application`: The ID of the Connect application that created the Payment Link.
- `application_fee_amount`: The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner&#39;s Stripe account.
- `application_fee_percent`: This represents the percentage of the subscription invoice total that will be transferred to the application owner&#39;s Stripe account.

### [PaymentMethod](docs/api/payment_method.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `allow_redisplay`: This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
- `billing_details`: The billing details associated with the method of payment.
- `card`: You can [create physical or virtual cards](https://docs.stripe.com/issuing) that are issued to cardholders.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `custom`: Custom Payment Methods represent Payment Method types not modeled directly in the Stripe API. This resource consists of details about the custom payment method used for this payment attempt.

### [PaymentMethodConfiguration](docs/api/payment_method_configuration.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `active`: Whether the configuration can be used for new payments.
- `application`: For child configs, the Connect application associated with the configuration.
- `card`: You can [create physical or virtual cards](https://docs.stripe.com/issuing) that are issued to cardholders.
- `id`: Unique identifier for the object.
- `is_default`: The default configuration is used whenever a payment method configuration is not specified.

### [PaymentMethodDomain](docs/api/payment_method_domain.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amazon_pay`: Indicates the status of a specific payment method on a payment method domain.
- `apple_pay`: Indicates the status of a specific payment method on a payment method domain.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `domain_name`: The domain name that this payment method domain object represents.
- `enabled`: Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements.

### [PaymentRecord](docs/api/payment_record.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: A representation of an amount of money, consisting of an amount and a currency.
- `amount_authorized`: A representation of an amount of money, consisting of an amount and a currency.
- `amount_canceled`: A representation of an amount of money, consisting of an amount and a currency.
- `amount_failed`: A representation of an amount of money, consisting of an amount and a currency.
- `amount_guaranteed`: A representation of an amount of money, consisting of an amount and a currency.

### [Payout](docs/api/payout.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: The amount (in cents (or local equivalent)) that transfers to your bank account or debit card.
- `application_fee`: The application fee (if any) for the payout. [See the Connect documentation](https://docs.stripe.com/connect/instant-payouts#monetization-and-fees) for details.
- `application_fee_amount`: The amount of the application fee (if any) requested for the payout. [See the Connect documentation](https://docs.stripe.com/connect/instant-payouts#monetization-and-fees) for details.
- `arrival_date`: Date that you can expect the payout to arrive in the bank. This factors in delays to account for weekends or bank holidays.
- `automatic`: Returns `true` if the payout is created by an [automated payout schedule](https://docs.stripe.com/payouts#payout-schedule) and `false` if it&#39;s [requested manually](https://stripe.com/docs/payouts#manual-payouts).

### [Person](docs/api/person.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `account`: The account the person is associated with.
- `address`: Owner&#39;s address.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `dob`: The date of birth of this cardholder.
- `email`: The person&#39;s email address. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.

### [PersonalizationDesign](docs/api/personalization_design.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `card_logo`: The file for the card logo to use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`. Image must be in PNG format with dimensions of 1000px by 200px. It must be a binary (black and white) image containing a black logo on a white background. We don&#39;t accept grayscale.
- `carrier_text`: Hash containing carrier text, for use with physical bundles that support carrier text.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.

### [PhysicalBundle](docs/api/physical_bundle.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `card_logo`: The policy for how to use card logo images in a card design with this physical bundle.
- `carrier_text`: The policy for how to use carrier letter text in a card design with this physical bundle.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `name`: Friendly display name.

### [Plan](docs/api/plan.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `active`: Whether the plan can be used for new purchases.
- `amount`: The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
- `amount_decimal`: The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
- `billing_scheme`: Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.

### [Price](docs/api/price.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `active`: Whether the price can be used for new purchases.
- `billing_scheme`: Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `currency_options`: Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).

### [Product](docs/api/product.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `active`: Whether the product is currently available for purchase.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `current_prices_per_metric_ton`: Current prices for a metric ton of carbon removal in a currency&#39;s smallest unit.
- `default_price`: The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product.
- `delivery_year`: The year in which the carbon removal is expected to be delivered. If the year is in the past, this represents spot inventory with guaranteed delivery.

### [ProductFeature](docs/api/product_feature.html)

Results: Successful response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `active`: Inactive features cannot be attached to new products and will not be returned from the features list endpoint.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `lookup_key`: A unique key you provide as your own system identifier. This may be up to 80 characters.
- `metadata`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

### [PromotionCode](docs/api/promotion_code.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `active`: Whether the promotion code is currently active. A promotion code is only active if the coupon is also valid.
- `code`: The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for each customer. Valid characters are lower case letters (a-z), upper case letters (A-Z), digits (0-9), and dashes (-).
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `customer`: The customer who can use this promotion code.
- `customer_account`: The account representing the customer who can use this promotion code.

### [Quote](docs/api/quote.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount_subtotal`: Total before any discounts or taxes are applied.
- `amount_total`: Total after discounts and taxes are applied.
- `application`: ID of the Connect Application that created the quote.
- `application_fee_amount`: The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner&#39;s Stripe account. Only applicable if there are no line items with recurring prices on the quote.
- `application_fee_percent`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner&#39;s Stripe account. Only applicable if there are line items with recurring prices on the quote.

### [QuoteComputedUpfrontLineItem](docs/api/quote_computed_upfront_line_item.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `amount_discount`: Total discount amount applied. If no discounts were applied, defaults to 0.
- `amount_subtotal`: Total before any discounts or taxes are applied.
- `amount_tax`: Total tax amount applied. If no tax was applied, defaults to 0.
- `amount_total`: Total after discounts and taxes.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).

### [QuotePdf](docs/api/quote_pdf.html)

Results: Successful response.

SDK operations: `load`.

Key fields to recognise:

- `id`: Unique identifier for the object.

### [Reader](docs/api/reader.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `action`: The most recent action performed by the reader.
- `device_sw_version`: The current software version of the reader.
- `device_type`: Device type of the reader.
- `id`: Unique identifier for the object.
- `ip_address`: The local IP address of the reader.

### [ReceivedCredit](docs/api/received_credit.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount (in cents) transferred.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `description`: An arbitrary string attached to the object. Often useful for displaying to users.
- `failure_code`: Reason for the failure. A ReceivedCredit might fail because the receiving FinancialAccount is closed or frozen.

### [ReceivedDebit](docs/api/received_debit.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount (in cents) transferred.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `description`: An arbitrary string attached to the object. Often useful for displaying to users.
- `failure_code`: Reason for the failure. A ReceivedDebit might fail because the FinancialAccount doesn&#39;t have sufficient funds, is closed, or is frozen.

### [Refund](docs/api/refund.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount, in cents (or local equivalent).
- `balance_transaction`: Balance transaction that describes the impact on your account balance.
- `charge`: For card errors, the ID of the failed charge.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).

### [Registration](docs/api/registration.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `active_from`: Time at which the registration becomes active. Measured in seconds since the Unix epoch.
- `country`: Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `expires_at`: If set, the registration stops being active at this time. If not set, the registration will be active indefinitely. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the object.

### [ReportRun](docs/api/report_run.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `error`: If something should go wrong during the run, a message about the failure (populated when `status=failed`).
- `id`: Unique identifier for the object.
- `livemode`: `true` if the report is run on live mode data and `false` if it is run on test mode data.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.

### [ReportType](docs/api/report_type.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `data_available_end`: Most recent time for which this Report Type is available. Measured in seconds since the Unix epoch.
- `data_available_start`: Earliest time for which this Report Type is available. Measured in seconds since the Unix epoch.
- `default_columns`: List of column names that are included by default when this Report Type gets run. (If the Report Type doesn&#39;t support the `columns` parameter, this will be null.)
- `id`: The [ID of the Report Type](https://docs.stripe.com/reporting/statements/api#available-report-types), such as `balance.summary.1`.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.

### [Request](docs/api/request.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `metadata`: Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.

### [Reversal](docs/api/reversal.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount, in cents (or local equivalent).
- `balance_transaction`: Balance transaction that describes the impact on your account balance.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `destination_payment_refund`: Linked payment refund for the transfer reversal.

### [Review](docs/api/review.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `billing_zip`: The ZIP or postal code of the card used, if applicable.
- `charge`: The charge associated with this review.
- `closed_reason`: The reason the review was closed, or null if it has not yet been closed. One of `approved`, `refunded`, `refunded_as_fraud`, `disputed`, `redacted`, `canceled`, `payment_never_settled`, or `acknowledged`.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the object.

### [ScheduledQueryRun](docs/api/scheduled_query_run.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `data_load_time`: When the query was run, Sigma contained a snapshot of your Stripe data at this time.
- `file`: The file object representing the results of the query.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.

### [Search](docs/api/search.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `account_country`: The country of the business associated with this invoice, most often the business creating the invoice.
- `account_name`: The public name of the business associated with this invoice, most often the business creating the invoice.
- `account_tax_ids`: The account tax IDs associated with the subscription. Will be set on invoices generated by the subscription.
- `active`: Whether the promotion code is currently active. A promotion code is only active if the coupon is also valid.
- `address`: Owner&#39;s address.

### [Secret](docs/api/secret.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `deleted`: If true, indicates that this secret has been deleted
- `expires_at`: The Unix timestamp for the expiry time of the secret, after which the secret deletes.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.

### [Session](docs/api/session.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `account_holder`: The account holder for whom accounts are collected in this session.
- `accounts`: The accounts that were collected as part of this Session.
- `adaptive_pricing`: Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing).
- `after_expiration`: When set, provides configuration for actions to take if this Checkout Session expires.
- `allow_promotion_codes`: Enables user redeemable promotion codes.

### [Setting](docs/api/setting.html)

Results: Successful response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `head_office`: The place where your business is located.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.
- `status`: The status of the Tax `Settings`.

### [Settlement](docs/api/settlement.html)

Results: Successful response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `id`: Unique identifier for the object.

### [SetupAttempt](docs/api/setup_attempt.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `application`: The value of [application](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation.
- `attach_to_self`: If present, the SetupIntent&#39;s payment method will be attached to the in-context Stripe Account. It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `customer`: The value of [customer](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation.
- `customer_account`: The value of [customer_account](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer_account) on the SetupIntent at the time of this confirmation.

### [SetupIntent](docs/api/setup_intent.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `allowed_payment_method_types`: The list of payment method types to allow for this SetupIntent. Stripe will only use methods in this list when determining the payment methods to offer.
- `application`: ID of the Connect application that created the SetupIntent.
- `attach_to_self`: If present, the SetupIntent&#39;s payment method will be attached to the in-context Stripe Account. It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
- `automatic_payment_methods`: Settings for dynamic payment methods compatible with this Setup Intent
- `cancellation_reason`: Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`.

### [ShippingRate](docs/api/shipping_rate.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `active`: Whether the shipping rate can be used for new purchases. Defaults to `true`.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `delivery_estimate`: The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
- `display_name`: The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
- `id`: Unique identifier for the object.

### [SigmaApiQuery](docs/api/sigma_api_query.html)

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `name`: The name of the query.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.

### [Source](docs/api/source.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `acss_debit`: If paying by `acss_debit`, this sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to the invoice’s PaymentIntent.
- `allow_redisplay`: This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
- `amount`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources.
- `bancontact`: If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the invoice’s PaymentIntent.
- `card`: You can [create physical or virtual cards](https://docs.stripe.com/issuing) that are issued to cardholders.

### [SourceMandateNotification](docs/api/source_mandate_notification.html)

Results: Successful response.

SDK operations: `load`.

Key fields to recognise:

- `amount`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. The amount is expressed in the currency of the underlying source. Required if the notification type is `debit_initiated`.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.

### [SourceTransaction](docs/api/source_transaction.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `amount`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.

### [Subscription](docs/api/subscription.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `application`: ID of the Connect Application that created the subscription.
- `application_fee_percent`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner&#39;s Stripe account.
- `billing_cycle_anchor`: The reference point that aligns future [billing cycle](https://docs.stripe.com/subscriptions/billing-cycle) dates. It sets the day of week for `week` intervals, the day of month for `month` and `year` intervals, and the month of year for `year` intervals. The timestamp is in UTC format.
- `billing_cycle_anchor_config`: The fixed values used to calculate the `billing_cycle_anchor`.
- `billing_mode`: The billing mode of the subscription.

### [SubscriptionItem](docs/api/subscription_item.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `billed_until`: The time period the subscription item has been billed for.
- `billing_thresholds`: Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `current_period_end`: The end time of this subscription item&#39;s current billing period.
- `current_period_start`: The start time of this subscription item&#39;s current billing period.

### [SubscriptionSchedule](docs/api/subscription_schedule.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `application`: ID of the Connect Application that created the schedule.
- `billing_mode`: The billing mode of the subscription.
- `canceled_at`: Time at which the subscription schedule was canceled. Measured in seconds since the Unix epoch.
- `completed_at`: Time at which the subscription schedule was completed. Measured in seconds since the Unix epoch.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.

### [Supplier](docs/api/supplier.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `id`: Unique identifier for the object.
- `info_url`: Link to a webpage to learn more about the supplier.
- `livemode`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
- `locations`: The locations in which this supplier operates.
- `name`: Name of this carbon removal supplier.

### [TaxCode](docs/api/tax_code.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `description`: A detailed description of which types of products the tax code represents.
- `id`: Unique identifier for the object.
- `name`: A short name for the tax code.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value. Always has the value `list`.
- `requirements`: An object that describes more information about the tax location required for this tax code. Some tax codes require a [performance location](/tax/location-sales#required-versus-optional-performance-locations) to calculate tax correctly.

### [TaxId](docs/api/tax_id.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `country`: Two-letter ISO code representing the country of the tax ID.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `customer`: ID of the customer.
- `customer_account`: ID of the Account representing the customer.
- `id`: Unique identifier for the object.

### [TaxRate](docs/api/tax_rate.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `active`: Defaults to `true`. When set to `false`, this tax rate cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
- `country`: Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `description`: An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
- `display_name`: The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page.

### [TestClock](docs/api/test_clock.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `deletes_after`: Time at which this clock is scheduled to auto delete.
- `frozen_time`: Time at which all objects belonging to this clock are frozen.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.

### [Token](docs/api/token.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `bank_account`: These bank accounts are payment methods on `Customer` objects. On the other hand [External Accounts](/api#external_accounts) are transfer destinations on `Account` objects for connected accounts. They can be bank accounts or debit cards as well, and are documented in the links above. Related guide: [Bank debits and transfers](/payments/bank-debits-transfers)
- `card`: Card associated with this token.
- `client_ip`: IP address of the client that generates the token.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `device_fingerprint`: The hashed ID derived from the device ID from the card network associated with the token.

### [Topup](docs/api/topup.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount transferred.
- `balance_transaction`: ID of the balance transaction that describes the impact of this top-up on your account balance. May not be specified depending on status of top-up.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `description`: An arbitrary string attached to the object. Often useful for displaying to users.

### [Transaction](docs/api/transaction.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `account`: ID of the Stripe account this fee was taken from.
- `amount`: The transaction amount, which will be reflected in your balance. This amount is in your currency and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
- `amount_details`: Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
- `authorization`: The `Authorization` object that led to this transaction.
- `balance_impact`: Change to a FinancialAccount&#39;s balance

### [TransactionEntry](docs/api/transaction_entry.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `balance_impact`: Change to a FinancialAccount&#39;s balance
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
- `effective_at`: When the TransactionEntry will impact the FinancialAccount&#39;s balance.
- `financial_account`: The FinancialAccount associated with this object.

### [Transfer](docs/api/transfer.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amount`: Amount in cents (or local equivalent) to be transferred.
- `amount_reversed`: Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
- `balance_transaction`: Balance transaction that describes the impact of this transfer on your account balance.
- `created`: Time that this record of the transfer was first created.
- `currency`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).

### [TrialOffer](docs/api/trial_offer.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `active`: Whether the trial offer is active. Set to false to archive the trial offer.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `nickname`: A brief description of the trial offer, hidden from customers.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.

### [ValueList](docs/api/value_list.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `alias`: The name of the value list for use in rules.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `created_by`: The name or email address of the user who created this value list.
- `id`: Unique identifier for the object.
- `item_type`: The type of items in the value list. One of `card_fingerprint`, `card_bin`, `crypto_fingerprint`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, `customer_id`, `account`, `sepa_debit_fingerprint`, or `us_bank_account_fingerprint`.

### [ValueListItem](docs/api/value_list_item.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `created_by`: The name or email address of the user who added this item to the value list.
- `id`: Unique identifier for the object.
- `livemode`: If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
- `object`: String representing the object&#39;s type. Objects of the same type share the same value.

### [VerificationReport](docs/api/verification_report.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `client_reference_id`: A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `document`: Result from a document check
- `email`: Result from a email check
- `id`: Unique identifier for the object.

### [VerificationSession](docs/api/verification_session.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `client_reference_id`: A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
- `client_secret`: The short-lived client secret used by Stripe.js to [show a verification modal](https://docs.stripe.com/js/identity/modal) inside your app. This client secret expires after 24 hours and can only be used once. Don’t store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any page that includes the client secret. Refer to our docs on [passing the client secret to the frontend](https://docs.stripe.com/identity/verification-sessions#client-secret) to learn more.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `id`: Unique identifier for the object.
- `last_error`: If present, this property tells you the last error encountered when processing the verification.

### [WebhookEndpoint](docs/api/webhook_endpoint.html)

Results: Successful response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `api_version`: The API version that events are rendered as for this webhook endpoint. You can&#39;t change this value after you create the endpoint.
- `application`: The ID of the associated Connect application.
- `created`: Time at which the object was created. Measured in seconds since the Unix epoch.
- `description`: An optional description of what the webhook is used for.
- `enabled_events`: The list of events to enable for this endpoint. `[&#39;*&#39;]` indicates that all events are enabled, except those that require explicit selection.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Account](docs/api/account.html) | `create` | `POST /v1/accounts/{account}` | Required |
| [Account](docs/api/account.html) | `create` | `POST /v1/financial_connections/accounts/{account}/disconnect` | Required |
| [Account](docs/api/account.html) | `create` | `POST /v1/linked_accounts/{account}/disconnect` | Required |
| [Account](docs/api/account.html) | `create` | `POST /v1/financial_connections/accounts/{account}/refresh` | Required |
| [Account](docs/api/account.html) | `create` | `POST /v1/linked_accounts/{account}/refresh` | Required |
| [Account](docs/api/account.html) | `create` | `POST /v1/accounts/{account}/reject` | Required |
| [Account](docs/api/account.html) | `create` | `POST /v1/financial_connections/accounts/{account}/subscribe` | Required |
| [Account](docs/api/account.html) | `create` | `POST /v1/accounts/{account}/unreject` | Required |
| [Account](docs/api/account.html) | `create` | `POST /v1/financial_connections/accounts/{account}/unsubscribe` | Required |
| [Account](docs/api/account.html) | `create` | `POST /v1/accounts` | Required |
| [Account](docs/api/account.html) | `list` | `GET /v1/financial_connections/accounts` | Required |
| [Account](docs/api/account.html) | `list` | `GET /v1/accounts` | Required |
| [Account](docs/api/account.html) | `load` | `GET /v1/linked_accounts/{account}` | Required |
| [Account](docs/api/account.html) | `load` | `GET /v1/accounts/{account}` | Required |
| [Account](docs/api/account.html) | `load` | `GET /v1/financial_connections/accounts/{account}` | Required |
| [Account](docs/api/account.html) | `load` | `GET /v1/account` | Required |
| [AccountLink](docs/api/account_link.html) | `create` | `POST /v1/account_links` | Required |
| [AccountOwner](docs/api/account_owner.html) | `list` | `GET /v1/financial_connections/accounts/{account}/owners` | Required |
| [AccountSession](docs/api/account_session.html) | `create` | `POST /v1/account_sessions` | Required |
| [ActiveEntitlement](docs/api/active_entitlement.html) | `list` | `GET /v1/entitlements/active_entitlements` | Required |
| [ActiveEntitlement](docs/api/active_entitlement.html) | `load` | `GET /v1/entitlements/active_entitlements/{id}` | Required |
| [Alert](docs/api/alert.html) | `create` | `POST /v1/billing/alerts/{id}/activate` | Required |
| [Alert](docs/api/alert.html) | `create` | `POST /v1/billing/alerts/{id}/archive` | Required |
| [Alert](docs/api/alert.html) | `create` | `POST /v1/billing/alerts/{id}/deactivate` | Required |
| [Alert](docs/api/alert.html) | `create` | `POST /v1/billing/alerts` | Required |
| [Alert](docs/api/alert.html) | `list` | `GET /v1/billing/alerts` | Required |
| [Alert](docs/api/alert.html) | `load` | `GET /v1/billing/alerts/{id}` | Required |
| [ApplePayDomain](docs/api/apple_pay_domain.html) | `create` | `POST /v1/apple_pay/domains` | Required |
| [ApplePayDomain](docs/api/apple_pay_domain.html) | `load` | `GET /v1/apple_pay/domains/{domain}` | Required |
| [ApplicationFee](docs/api/application_fee.html) | `create` | `POST /v1/application_fees/{id}/refund` | Required |
| [ApplicationFee](docs/api/application_fee.html) | `list` | `GET /v1/application_fees` | Required |
| [ApplicationFee](docs/api/application_fee.html) | `load` | `GET /v1/application_fees/{id}` | Required |
| [Association](docs/api/association.html) | `list` | `GET /v1/tax/associations/find` | Required |
| [Authentication](docs/api/authentication.html) | `create` | `POST /v1/three_d_secure/authentications/{authentication}/cancel` | Required |
| [Authentication](docs/api/authentication.html) | `create` | `POST /v1/three_d_secure/authentications/{authentication}/submit` | Required |
| [Authentication](docs/api/authentication.html) | `create` | `POST /v1/three_d_secure/authentications` | Required |
| [Authentication](docs/api/authentication.html) | `list` | `GET /v1/three_d_secure/authentications` | Required |
| [Authentication](docs/api/authentication.html) | `load` | `GET /v1/three_d_secure/authentications/{authentication}` | Required |
| [Authorization](docs/api/authorization.html) | `create` | `POST /v1/issuing/authorizations/{authorization}` | Required |
| [Authorization](docs/api/authorization.html) | `create` | `POST /v1/issuing/authorizations/{authorization}/approve` | Required |
| [Authorization](docs/api/authorization.html) | `create` | `POST /v1/test_helpers/issuing/authorizations/{authorization}/capture` | Required |
| [Authorization](docs/api/authorization.html) | `create` | `POST /v1/issuing/authorizations/{authorization}/decline` | Required |
| [Authorization](docs/api/authorization.html) | `create` | `POST /v1/test_helpers/issuing/authorizations/{authorization}/expire` | Required |
| [Authorization](docs/api/authorization.html) | `create` | `POST /v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount` | Required |
| [Authorization](docs/api/authorization.html) | `create` | `POST /v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond` | Required |
| [Authorization](docs/api/authorization.html) | `create` | `POST /v1/test_helpers/issuing/authorizations/{authorization}/increment` | Required |
| [Authorization](docs/api/authorization.html) | `create` | `POST /v1/test_helpers/issuing/authorizations/{authorization}/reverse` | Required |
| [Authorization](docs/api/authorization.html) | `create` | `POST /v1/test_helpers/issuing/authorizations` | Required |
| [Authorization](docs/api/authorization.html) | `list` | `GET /v1/issuing/authorizations` | Required |
| [Authorization](docs/api/authorization.html) | `load` | `GET /v1/issuing/authorizations/{authorization}` | Required |
| [Balance](docs/api/balance.html) | `list` | `GET /v1/balance` | Required |
| [BalanceSetting](docs/api/balance_setting.html) | `create` | `POST /v1/balance_settings` | Required |
| [BalanceSetting](docs/api/balance_setting.html) | `load` | `GET /v1/balance_settings` | Required |
| [BalanceTransaction](docs/api/balance_transaction.html) | `list` | `GET /v1/balance_transactions` | Required |
| [BalanceTransaction](docs/api/balance_transaction.html) | `list` | `GET /v1/customers/{customer}/balance_transactions` | Required |
| [BalanceTransaction](docs/api/balance_transaction.html) | `load` | `GET /v1/balance/history/{id}` | Required |
| [BalanceTransaction](docs/api/balance_transaction.html) | `load` | `GET /v1/balance_transactions/{id}` | Required |
| [BankAccount](docs/api/bank_account.html) | `create` | `POST /v1/customers/{customer}/bank_accounts/{id}` | Required |
| [BankAccount](docs/api/bank_account.html) | `create` | `POST /v1/customers/{customer}/bank_accounts/{id}/verify` | Required |
| [BankAccount](docs/api/bank_account.html) | `create` | `POST /v1/customers/{customer}/sources/{id}/verify` | Required |
| [BankAccount](docs/api/bank_account.html) | `create` | `POST /v1/customers/{customer}/bank_accounts` | Required |
| [BankAccount](docs/api/bank_account.html) | `list` | `GET /v1/customers/{customer}/bank_accounts` | Required |
| [BankAccount](docs/api/bank_account.html) | `load` | `GET /v1/customers/{customer}/bank_accounts/{id}` | Required |
| [BankAccount](docs/api/bank_account.html) | `remove` | `DELETE /v1/customers/{customer}/bank_accounts/{id}` | Required |
| [Calculation](docs/api/calculation.html) | `create` | `POST /v1/tax/calculations` | Required |
| [Calculation](docs/api/calculation.html) | `load` | `GET /v1/tax/calculations/{calculation}` | Required |
| [Capability](docs/api/capability.html) | `create` | `POST /v1/accounts/{account}/capabilities/{capability}` | Required |
| [Capability](docs/api/capability.html) | `list` | `GET /v1/accounts/{account}/capabilities` | Required |
| [Capability](docs/api/capability.html) | `load` | `GET /v1/accounts/{account}/capabilities/{capability}` | Required |
| [Card](docs/api/card.html) | `create` | `POST /v1/customers/{customer}/cards/{id}` | Required |
| [Card](docs/api/card.html) | `create` | `POST /v1/customers/{customer}/cards` | Required |
| [Card](docs/api/card.html) | `create` | `POST /v1/issuing/cards/{card}` | Required |
| [Card](docs/api/card.html) | `create` | `POST /v1/test_helpers/issuing/cards/{card}/shipping/deliver` | Required |
| [Card](docs/api/card.html) | `create` | `POST /v1/test_helpers/issuing/cards/{card}/shipping/fail` | Required |
| [Card](docs/api/card.html) | `create` | `POST /v1/test_helpers/issuing/cards/{card}/shipping/return` | Required |
| [Card](docs/api/card.html) | `create` | `POST /v1/test_helpers/issuing/cards/{card}/shipping/ship` | Required |
| [Card](docs/api/card.html) | `create` | `POST /v1/test_helpers/issuing/cards/{card}/shipping/submit` | Required |
| [Card](docs/api/card.html) | `create` | `POST /v1/issuing/cards` | Required |
| [Card](docs/api/card.html) | `list` | `GET /v1/issuing/cards` | Required |
| [Card](docs/api/card.html) | `list` | `GET /v1/customers/{customer}/cards` | Required |
| [Card](docs/api/card.html) | `load` | `GET /v1/customers/{customer}/cards/{id}` | Required |
| [Card](docs/api/card.html) | `load` | `GET /v1/issuing/cards/{card}` | Required |
| [Card](docs/api/card.html) | `remove` | `DELETE /v1/customers/{customer}/cards/{id}` | Required |
| [Cardholder](docs/api/cardholder.html) | `create` | `POST /v1/issuing/cardholders/{cardholder}` | Required |
| [Cardholder](docs/api/cardholder.html) | `create` | `POST /v1/issuing/cardholders` | Required |
| [Cardholder](docs/api/cardholder.html) | `list` | `GET /v1/issuing/cardholders` | Required |
| [Cardholder](docs/api/cardholder.html) | `load` | `GET /v1/issuing/cardholders/{cardholder}` | Required |
| [CashBalance](docs/api/cash_balance.html) | `create` | `POST /v1/customers/{customer}/cash_balance` | Required |
| [CashBalance](docs/api/cash_balance.html) | `load` | `GET /v1/customers/{customer}/cash_balance` | Required |
| [CashBalanceTransaction](docs/api/cash_balance_transaction.html) | `list` | `GET /v1/customers/{customer}/cash_balance_transactions` | Required |
| [CashBalanceTransaction](docs/api/cash_balance_transaction.html) | `load` | `GET /v1/customers/{customer}/cash_balance_transactions/{transaction}` | Required |
| [Charge](docs/api/charge.html) | `create` | `POST /v1/charges/{charge}` | Required |
| [Charge](docs/api/charge.html) | `create` | `POST /v1/charges/{charge}/capture` | Required |
| [Charge](docs/api/charge.html) | `create` | `POST /v1/charges/{charge}/refund` | Required |
| [Charge](docs/api/charge.html) | `create` | `POST /v1/charges` | Required |
| [Charge](docs/api/charge.html) | `list` | `GET /v1/charges` | Required |
| [Charge](docs/api/charge.html) | `load` | `GET /v1/charges/{charge}` | Required |
| [Configuration](docs/api/configuration.html) | `create` | `POST /v1/billing_portal/configurations/{configuration}` | Required |
| [Configuration](docs/api/configuration.html) | `create` | `POST /v1/terminal/configurations/{configuration}` | Required |
| [Configuration](docs/api/configuration.html) | `create` | `POST /v1/billing_portal/configurations` | Required |
| [Configuration](docs/api/configuration.html) | `create` | `POST /v1/terminal/configurations` | Required |
| [Configuration](docs/api/configuration.html) | `list` | `GET /v1/billing_portal/configurations` | Required |
| [Configuration](docs/api/configuration.html) | `list` | `GET /v1/terminal/configurations` | Required |
| [Configuration](docs/api/configuration.html) | `load` | `GET /v1/billing_portal/configurations/{configuration}` | Required |
| [Configuration](docs/api/configuration.html) | `load` | `GET /v1/terminal/configurations/{configuration}` | Required |
| [Configuration](docs/api/configuration.html) | `remove` | `DELETE /v1/terminal/configurations/{configuration}` | Required |
| [ConfirmationToken](docs/api/confirmation_token.html) | `create` | `POST /v1/test_helpers/confirmation_tokens` | Required |
| [ConfirmationToken](docs/api/confirmation_token.html) | `load` | `GET /v1/confirmation_tokens/{confirmation_token}` | Required |
| [ConnectionToken](docs/api/connection_token.html) | `create` | `POST /v1/terminal/connection_tokens` | Required |
| [CountrySpec](docs/api/country_spec.html) | `list` | `GET /v1/country_specs` | Required |
| [CountrySpec](docs/api/country_spec.html) | `load` | `GET /v1/country_specs/{country}` | Required |
| [Coupon](docs/api/coupon.html) | `create` | `POST /v1/coupons/{coupon}` | Required |
| [Coupon](docs/api/coupon.html) | `create` | `POST /v1/coupons` | Required |
| [Coupon](docs/api/coupon.html) | `list` | `GET /v1/coupons` | Required |
| [Coupon](docs/api/coupon.html) | `load` | `GET /v1/coupons/{coupon}` | Required |
| [CreditBalanceSummary](docs/api/credit_balance_summary.html) | `list` | `GET /v1/billing/credit_balance_summary` | Required |
| [CreditBalanceTransaction](docs/api/credit_balance_transaction.html) | `list` | `GET /v1/billing/credit_balance_transactions` | Required |
| [CreditBalanceTransaction](docs/api/credit_balance_transaction.html) | `load` | `GET /v1/billing/credit_balance_transactions/{id}` | Required |
| [CreditGrant](docs/api/credit_grant.html) | `create` | `POST /v1/billing/credit_grants/{id}` | Required |
| [CreditGrant](docs/api/credit_grant.html) | `create` | `POST /v1/billing/credit_grants/{id}/expire` | Required |
| [CreditGrant](docs/api/credit_grant.html) | `create` | `POST /v1/billing/credit_grants/{id}/void` | Required |
| [CreditGrant](docs/api/credit_grant.html) | `create` | `POST /v1/billing/credit_grants` | Required |
| [CreditGrant](docs/api/credit_grant.html) | `list` | `GET /v1/billing/credit_grants` | Required |
| [CreditGrant](docs/api/credit_grant.html) | `load` | `GET /v1/billing/credit_grants/{id}` | Required |
| [CreditNote](docs/api/credit_note.html) | `create` | `POST /v1/credit_notes/{id}` | Required |
| [CreditNote](docs/api/credit_note.html) | `create` | `POST /v1/credit_notes/{id}/void` | Required |
| [CreditNote](docs/api/credit_note.html) | `create` | `POST /v1/credit_notes` | Required |
| [CreditNote](docs/api/credit_note.html) | `list` | `GET /v1/credit_notes/preview` | Required |
| [CreditNote](docs/api/credit_note.html) | `list` | `GET /v1/credit_notes` | Required |
| [CreditNote](docs/api/credit_note.html) | `load` | `GET /v1/credit_notes/{id}` | Required |
| [CreditNoteLine](docs/api/credit_note_line.html) | `list` | `GET /v1/credit_notes/{credit_note}/lines` | Required |
| [CreditReversal](docs/api/credit_reversal.html) | `create` | `POST /v1/treasury/credit_reversals` | Required |
| [CreditReversal](docs/api/credit_reversal.html) | `list` | `GET /v1/treasury/credit_reversals` | Required |
| [CreditReversal](docs/api/credit_reversal.html) | `load` | `GET /v1/treasury/credit_reversals/{credit_reversal}` | Required |
| [Customer](docs/api/customer.html) | `create` | `POST /v1/customers/{customer}` | Required |
| [Customer](docs/api/customer.html) | `create` | `POST /v1/customers` | Required |
| [Customer](docs/api/customer.html) | `list` | `GET /v1/customers` | Required |
| [Customer](docs/api/customer.html) | `load` | `GET /v1/customers/{customer}` | Required |
| [Customer](docs/api/customer.html) | `remove` | `DELETE /v1/customers/{customer}` | Required |
| [CustomerBalanceTransaction](docs/api/customer_balance_transaction.html) | `create` | `POST /v1/customers/{customer}/balance_transactions/{transaction}` | Required |
| [CustomerBalanceTransaction](docs/api/customer_balance_transaction.html) | `create` | `POST /v1/customers/{customer}/balance_transactions` | Required |
| [CustomerBalanceTransaction](docs/api/customer_balance_transaction.html) | `load` | `GET /v1/customers/{customer}/balance_transactions/{transaction}` | Required |
| [CustomerSession](docs/api/customer_session.html) | `create` | `POST /v1/customer_sessions` | Required |
| [DebitReversal](docs/api/debit_reversal.html) | `create` | `POST /v1/treasury/debit_reversals` | Required |
| [DebitReversal](docs/api/debit_reversal.html) | `list` | `GET /v1/treasury/debit_reversals` | Required |
| [DebitReversal](docs/api/debit_reversal.html) | `load` | `GET /v1/treasury/debit_reversals/{debit_reversal}` | Required |
| [DeletedAccount](docs/api/deleted_account.html) | `remove` | `DELETE /v1/accounts/{account}` | Required |
| [DeletedApplePayDomain](docs/api/deleted_apple_pay_domain.html) | `remove` | `DELETE /v1/apple_pay/domains/{domain}` | Required |
| [DeletedCoupon](docs/api/deleted_coupon.html) | `remove` | `DELETE /v1/coupons/{coupon}` | Required |
| [DeletedExternalAccount](docs/api/deleted_external_account.html) | `remove` | `DELETE /v1/accounts/{account}/bank_accounts/{id}` | Required |
| [DeletedExternalAccount](docs/api/deleted_external_account.html) | `remove` | `DELETE /v1/accounts/{account}/external_accounts/{id}` | Required |
| [DeletedInvoiceitem](docs/api/deleted_invoiceitem.html) | `remove` | `DELETE /v1/invoiceitems/{invoiceitem}` | Required |
| [DeletedPerson](docs/api/deleted_person.html) | `remove` | `DELETE /v1/accounts/{account}/people/{person}` | Required |
| [DeletedPerson](docs/api/deleted_person.html) | `remove` | `DELETE /v1/accounts/{account}/persons/{person}` | Required |
| [DeletedPlan](docs/api/deleted_plan.html) | `remove` | `DELETE /v1/plans/{plan}` | Required |
| [DeletedProductFeature](docs/api/deleted_product_feature.html) | `remove` | `DELETE /v1/products/{product}/features/{id}` | Required |
| [DeletedSubscriptionItem](docs/api/deleted_subscription_item.html) | `remove` | `DELETE /v1/subscription_items/{item}` | Required |
| [DeletedWebhookEndpoint](docs/api/deleted_webhook_endpoint.html) | `remove` | `DELETE /v1/webhook_endpoints/{webhook_endpoint}` | Required |
| [Discount](docs/api/discount.html) | `load` | `GET /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount` | Required |
| [Discount](docs/api/discount.html) | `load` | `GET /v1/customers/{customer}/discount` | Required |
| [Discount](docs/api/discount.html) | `remove` | `DELETE /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount` | Required |
| [Discount](docs/api/discount.html) | `remove` | `DELETE /v1/customers/{customer}/discount` | Required |
| [Discount](docs/api/discount.html) | `remove` | `DELETE /v1/subscriptions/{subscription_exposed_id}/discount` | Required |
| [Dispute](docs/api/dispute.html) | `create` | `POST /v1/charges/{charge}/dispute` | Required |
| [Dispute](docs/api/dispute.html) | `create` | `POST /v1/charges/{charge}/dispute/close` | Required |
| [Dispute](docs/api/dispute.html) | `create` | `POST /v1/disputes/{dispute}` | Required |
| [Dispute](docs/api/dispute.html) | `create` | `POST /v1/disputes/{dispute}/close` | Required |
| [Dispute](docs/api/dispute.html) | `create` | `POST /v1/issuing/disputes/{dispute}` | Required |
| [Dispute](docs/api/dispute.html) | `create` | `POST /v1/issuing/disputes/{dispute}/submit` | Required |
| [Dispute](docs/api/dispute.html) | `create` | `POST /v1/issuing/disputes` | Required |
| [Dispute](docs/api/dispute.html) | `list` | `GET /v1/disputes` | Required |
| [Dispute](docs/api/dispute.html) | `list` | `GET /v1/issuing/disputes` | Required |
| [Dispute](docs/api/dispute.html) | `list` | `GET /v1/charges/{charge}/dispute` | Required |
| [Dispute](docs/api/dispute.html) | `load` | `GET /v1/disputes/{dispute}` | Required |
| [Dispute](docs/api/dispute.html) | `load` | `GET /v1/issuing/disputes/{dispute}` | Required |
| [Domain](docs/api/domain.html) | `list` | `GET /v1/apple_pay/domains` | Required |
| [EarlyFraudWarning](docs/api/early_fraud_warning.html) | `list` | `GET /v1/radar/early_fraud_warnings` | Required |
| [EarlyFraudWarning](docs/api/early_fraud_warning.html) | `load` | `GET /v1/radar/early_fraud_warnings/{early_fraud_warning}` | Required |
| [EphemeralKey](docs/api/ephemeral_key.html) | `create` | `POST /v1/ephemeral_keys` | Required |
| [EphemeralKey](docs/api/ephemeral_key.html) | `remove` | `DELETE /v1/ephemeral_keys/{key}` | Required |
| [Event](docs/api/event.html) | `list` | `GET /v1/events` | Required |
| [Event](docs/api/event.html) | `load` | `GET /v1/events/{id}` | Required |
| [ExchangeRate](docs/api/exchange_rate.html) | `list` | `GET /v1/exchange_rates` | Required |
| [ExchangeRate](docs/api/exchange_rate.html) | `load` | `GET /v1/exchange_rates/{rate_id}` | Required |
| [ExternalAccount](docs/api/external_account.html) | `create` | `POST /v1/accounts/{account}/bank_accounts/{id}` | Required |
| [ExternalAccount](docs/api/external_account.html) | `create` | `POST /v1/accounts/{account}/external_accounts/{id}` | Required |
| [ExternalAccount](docs/api/external_account.html) | `create` | `POST /v1/accounts/{account}/bank_accounts` | Required |
| [ExternalAccount](docs/api/external_account.html) | `create` | `POST /v1/accounts/{account}/external_accounts` | Required |
| [ExternalAccount](docs/api/external_account.html) | `create` | `POST /v1/external_accounts/{id}` | Required |
| [ExternalAccount](docs/api/external_account.html) | `list` | `GET /v1/accounts/{account}/external_accounts` | Required |
| [ExternalAccount](docs/api/external_account.html) | `load` | `GET /v1/accounts/{account}/bank_accounts/{id}` | Required |
| [ExternalAccount](docs/api/external_account.html) | `load` | `GET /v1/accounts/{account}/external_accounts/{id}` | Required |
| [Feature](docs/api/feature.html) | `create` | `POST /v1/entitlements/features/{id}` | Required |
| [Feature](docs/api/feature.html) | `create` | `POST /v1/entitlements/features` | Required |
| [Feature](docs/api/feature.html) | `list` | `GET /v1/entitlements/features` | Required |
| [Feature](docs/api/feature.html) | `list` | `GET /v1/products/{product}/features` | Required |
| [Feature](docs/api/feature.html) | `load` | `GET /v1/entitlements/features/{id}` | Required |
| [FeedbackOption](docs/api/feedback_option.html) | `create` | `POST /v1/billing/feedback_options/{id}` | Required |
| [FeedbackOption](docs/api/feedback_option.html) | `create` | `POST /v1/billing/feedback_options/{id}/deactivate` | Required |
| [FeedbackOption](docs/api/feedback_option.html) | `create` | `POST /v1/billing/feedback_options` | Required |
| [FeedbackOption](docs/api/feedback_option.html) | `list` | `GET /v1/billing/feedback_options` | Required |
| [FeedbackOption](docs/api/feedback_option.html) | `load` | `GET /v1/billing/feedback_options/{id}` | Required |
| [File](docs/api/file.html) | `create` | `POST /v1/files` | Required |
| [File](docs/api/file.html) | `list` | `GET /v1/files` | Required |
| [File](docs/api/file.html) | `load` | `GET /v1/files/{file}` | Required |
| [FileLink](docs/api/file_link.html) | `create` | `POST /v1/file_links/{link}` | Required |
| [FileLink](docs/api/file_link.html) | `create` | `POST /v1/file_links` | Required |
| [FileLink](docs/api/file_link.html) | `list` | `GET /v1/file_links` | Required |
| [FileLink](docs/api/file_link.html) | `load` | `GET /v1/file_links/{link}` | Required |
| [FinancialAccount](docs/api/financial_account.html) | `create` | `POST /v1/treasury/financial_accounts/{financial_account}` | Required |
| [FinancialAccount](docs/api/financial_account.html) | `create` | `POST /v1/treasury/financial_accounts/{financial_account}/close` | Required |
| [FinancialAccount](docs/api/financial_account.html) | `create` | `POST /v1/treasury/financial_accounts` | Required |
| [FinancialAccount](docs/api/financial_account.html) | `list` | `GET /v1/treasury/financial_accounts` | Required |
| [FinancialAccount](docs/api/financial_account.html) | `load` | `GET /v1/treasury/financial_accounts/{financial_account}` | Required |
| [FinancialAccountFeature](docs/api/financial_account_feature.html) | `create` | `POST /v1/treasury/financial_accounts/{financial_account}/features` | Required |
| [FinancialAccountFeature](docs/api/financial_account_feature.html) | `load` | `GET /v1/treasury/financial_accounts/{financial_account}/features` | Required |
| [FundCashBalance](docs/api/fund_cash_balance.html) | `create` | `POST /v1/test_helpers/customers/{customer}/fund_cash_balance` | Required |
| [FundingInstruction](docs/api/funding_instruction.html) | `create` | `POST /v1/customers/{customer}/funding_instructions` | Required |
| [History](docs/api/history.html) | `list` | `GET /v1/balance/history` | Required |
| [InboundTransfer](docs/api/inbound_transfer.html) | `create` | `POST /v1/treasury/inbound_transfers/{inbound_transfer}/cancel` | Required |
| [InboundTransfer](docs/api/inbound_transfer.html) | `create` | `POST /v1/test_helpers/treasury/inbound_transfers/{id}/fail` | Required |
| [InboundTransfer](docs/api/inbound_transfer.html) | `create` | `POST /v1/test_helpers/treasury/inbound_transfers/{id}/return` | Required |
| [InboundTransfer](docs/api/inbound_transfer.html) | `create` | `POST /v1/test_helpers/treasury/inbound_transfers/{id}/succeed` | Required |
| [InboundTransfer](docs/api/inbound_transfer.html) | `create` | `POST /v1/treasury/inbound_transfers` | Required |
| [InboundTransfer](docs/api/inbound_transfer.html) | `list` | `GET /v1/treasury/inbound_transfers` | Required |
| [InboundTransfer](docs/api/inbound_transfer.html) | `load` | `GET /v1/treasury/inbound_transfers/{id}` | Required |
| [Install](docs/api/install.html) | `create` | `POST /v1/apps/installs/{id}` | Required |
| [Install](docs/api/install.html) | `create` | `POST /v1/apps/installs/{id}/uninstall` | Required |
| [Install](docs/api/install.html) | `create` | `POST /v1/apps/installs` | Required |
| [Install](docs/api/install.html) | `list` | `GET /v1/apps/installs` | Required |
| [Install](docs/api/install.html) | `load` | `GET /v1/apps/installs/{id}` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /v1/invoices/{invoice}` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /v1/invoices/{invoice}/add_lines` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /v1/invoices/{invoice}/attach_payment` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /v1/invoices/{invoice}/finalize` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /v1/invoices/{invoice}/mark_uncollectible` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /v1/invoices/{invoice}/pay` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /v1/invoices/{invoice}/remove_lines` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /v1/invoices/{invoice}/send` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /v1/invoices/{invoice}/update_lines` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /v1/invoices/{invoice}/void` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /v1/invoices` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /v1/invoices/create_preview` | Required |
| [Invoice](docs/api/invoice.html) | `list` | `GET /v1/invoices` | Required |
| [Invoice](docs/api/invoice.html) | `load` | `GET /v1/invoices/{invoice}` | Required |
| [Invoice](docs/api/invoice.html) | `remove` | `DELETE /v1/invoices/{invoice}` | Required |
| [InvoicePayment](docs/api/invoice_payment.html) | `list` | `GET /v1/invoice_payments` | Required |
| [InvoicePayment](docs/api/invoice_payment.html) | `load` | `GET /v1/invoice_payments/{invoice_payment}` | Required |
| [InvoiceRenderingTemplate](docs/api/invoice_rendering_template.html) | `create` | `POST /v1/invoice_rendering_templates/{template}/archive` | Required |
| [InvoiceRenderingTemplate](docs/api/invoice_rendering_template.html) | `create` | `POST /v1/invoice_rendering_templates/{template}/unarchive` | Required |
| [InvoiceRenderingTemplate](docs/api/invoice_rendering_template.html) | `list` | `GET /v1/invoice_rendering_templates` | Required |
| [InvoiceRenderingTemplate](docs/api/invoice_rendering_template.html) | `load` | `GET /v1/invoice_rendering_templates/{template}` | Required |
| [Invoiceitem](docs/api/invoiceitem.html) | `create` | `POST /v1/invoiceitems/{invoiceitem}` | Required |
| [Invoiceitem](docs/api/invoiceitem.html) | `create` | `POST /v1/invoiceitems` | Required |
| [Invoiceitem](docs/api/invoiceitem.html) | `list` | `GET /v1/invoiceitems` | Required |
| [Invoiceitem](docs/api/invoiceitem.html) | `load` | `GET /v1/invoiceitems/{invoiceitem}` | Required |
| [Line](docs/api/line.html) | `create` | `POST /v1/invoices/{invoice}/lines/{line_item_id}` | Required |
| [Line](docs/api/line.html) | `list` | `GET /v1/credit_notes/preview/lines` | Required |
| [Line](docs/api/line.html) | `list` | `GET /v1/invoices/{invoice}/lines` | Required |
| [LineItem](docs/api/line_item.html) | `list` | `GET /v1/tax/calculations/{calculation}/line_items` | Required |
| [LineItem](docs/api/line_item.html) | `list` | `GET /v1/payment_links/{payment_link}/line_items` | Required |
| [LineItem](docs/api/line_item.html) | `list` | `GET /v1/quotes/{quote}/line_items` | Required |
| [LineItem](docs/api/line_item.html) | `list` | `GET /v1/checkout/sessions/{session}/line_items` | Required |
| [LineItem](docs/api/line_item.html) | `list` | `GET /v1/tax/transactions/{transaction}/line_items` | Required |
| [LinkedAccount](docs/api/linked_account.html) | `list` | `GET /v1/linked_accounts` | Required |
| [LinkedAccountOwner](docs/api/linked_account_owner.html) | `list` | `GET /v1/linked_accounts/{account}/owners` | Required |
| [Location](docs/api/location.html) | `create` | `POST /v1/terminal/locations/{location}` | Required |
| [Location](docs/api/location.html) | `create` | `POST /v1/tax/locations` | Required |
| [Location](docs/api/location.html) | `create` | `POST /v1/terminal/locations` | Required |
| [Location](docs/api/location.html) | `list` | `GET /v1/tax/locations` | Required |
| [Location](docs/api/location.html) | `list` | `GET /v1/terminal/locations` | Required |
| [Location](docs/api/location.html) | `load` | `GET /v1/tax/locations/{location}` | Required |
| [Location](docs/api/location.html) | `load` | `GET /v1/terminal/locations/{location}` | Required |
| [Location](docs/api/location.html) | `remove` | `DELETE /v1/terminal/locations/{location}` | Required |
| [LoginLink](docs/api/login_link.html) | `create` | `POST /v1/accounts/{account}/login_links` | Required |
| [Mandate](docs/api/mandate.html) | `load` | `GET /v1/mandates/{mandate}` | Required |
| [Meter](docs/api/meter.html) | `create` | `POST /v1/billing/meters/{id}` | Required |
| [Meter](docs/api/meter.html) | `create` | `POST /v1/billing/meters/{id}/deactivate` | Required |
| [Meter](docs/api/meter.html) | `create` | `POST /v1/billing/meters/{id}/reactivate` | Required |
| [Meter](docs/api/meter.html) | `create` | `POST /v1/billing/meters` | Required |
| [Meter](docs/api/meter.html) | `list` | `GET /v1/billing/meters` | Required |
| [Meter](docs/api/meter.html) | `load` | `GET /v1/billing/meters/{id}` | Required |
| [MeterEvent](docs/api/meter_event.html) | `create` | `POST /v1/billing/meter_events` | Required |
| [MeterEventAdjustment](docs/api/meter_event_adjustment.html) | `create` | `POST /v1/billing/meter_event_adjustments` | Required |
| [MeterEventSummary](docs/api/meter_event_summary.html) | `list` | `GET /v1/billing/meters/{id}/event_summaries` | Required |
| [OnboardingLink](docs/api/onboarding_link.html) | `create` | `POST /v1/terminal/onboarding_links` | Required |
| [Order](docs/api/order.html) | `create` | `POST /v1/climate/orders/{order}` | Required |
| [Order](docs/api/order.html) | `create` | `POST /v1/climate/orders/{order}/cancel` | Required |
| [Order](docs/api/order.html) | `create` | `POST /v1/climate/orders` | Required |
| [Order](docs/api/order.html) | `list` | `GET /v1/climate/orders` | Required |
| [Order](docs/api/order.html) | `load` | `GET /v1/climate/orders/{order}` | Required |
| [OutboundPayment](docs/api/outbound_payment.html) | `create` | `POST /v1/test_helpers/treasury/outbound_payments/{id}` | Required |
| [OutboundPayment](docs/api/outbound_payment.html) | `create` | `POST /v1/treasury/outbound_payments/{id}/cancel` | Required |
| [OutboundPayment](docs/api/outbound_payment.html) | `create` | `POST /v1/test_helpers/treasury/outbound_payments/{id}/fail` | Required |
| [OutboundPayment](docs/api/outbound_payment.html) | `create` | `POST /v1/test_helpers/treasury/outbound_payments/{id}/post` | Required |
| [OutboundPayment](docs/api/outbound_payment.html) | `create` | `POST /v1/test_helpers/treasury/outbound_payments/{id}/return` | Required |
| [OutboundPayment](docs/api/outbound_payment.html) | `create` | `POST /v1/treasury/outbound_payments` | Required |
| [OutboundPayment](docs/api/outbound_payment.html) | `list` | `GET /v1/treasury/outbound_payments` | Required |
| [OutboundPayment](docs/api/outbound_payment.html) | `load` | `GET /v1/treasury/outbound_payments/{id}` | Required |
| [OutboundTransfer](docs/api/outbound_transfer.html) | `create` | `POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}` | Required |
| [OutboundTransfer](docs/api/outbound_transfer.html) | `create` | `POST /v1/treasury/outbound_transfers/{outbound_transfer}/cancel` | Required |
| [OutboundTransfer](docs/api/outbound_transfer.html) | `create` | `POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail` | Required |
| [OutboundTransfer](docs/api/outbound_transfer.html) | `create` | `POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post` | Required |
| [OutboundTransfer](docs/api/outbound_transfer.html) | `create` | `POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return` | Required |
| [OutboundTransfer](docs/api/outbound_transfer.html) | `create` | `POST /v1/treasury/outbound_transfers` | Required |
| [OutboundTransfer](docs/api/outbound_transfer.html) | `list` | `GET /v1/treasury/outbound_transfers` | Required |
| [OutboundTransfer](docs/api/outbound_transfer.html) | `load` | `GET /v1/treasury/outbound_transfers/{outbound_transfer}` | Required |
| [PaymentAttemptRecord](docs/api/payment_attempt_record.html) | `list` | `GET /v1/payment_attempt_records` | Required |
| [PaymentAttemptRecord](docs/api/payment_attempt_record.html) | `load` | `GET /v1/payment_attempt_records/{id}` | Required |
| [PaymentEvaluation](docs/api/payment_evaluation.html) | `create` | `POST /v1/radar/payment_evaluations` | Required |
| [PaymentIntent](docs/api/payment_intent.html) | `create` | `POST /v1/payment_intents/{intent}` | Required |
| [PaymentIntent](docs/api/payment_intent.html) | `create` | `POST /v1/payment_intents/{intent}/apply_customer_balance` | Required |
| [PaymentIntent](docs/api/payment_intent.html) | `create` | `POST /v1/payment_intents/{intent}/cancel` | Required |
| [PaymentIntent](docs/api/payment_intent.html) | `create` | `POST /v1/payment_intents/{intent}/capture` | Required |
| [PaymentIntent](docs/api/payment_intent.html) | `create` | `POST /v1/payment_intents/{intent}/confirm` | Required |
| [PaymentIntent](docs/api/payment_intent.html) | `create` | `POST /v1/payment_intents/{intent}/increment_authorization` | Required |
| [PaymentIntent](docs/api/payment_intent.html) | `create` | `POST /v1/payment_intents/{intent}/verify_microdeposits` | Required |
| [PaymentIntent](docs/api/payment_intent.html) | `create` | `POST /v1/payment_intents` | Required |
| [PaymentIntent](docs/api/payment_intent.html) | `list` | `GET /v1/payment_intents` | Required |
| [PaymentIntent](docs/api/payment_intent.html) | `load` | `GET /v1/payment_intents/{intent}` | Required |
| [PaymentIntentAmountDetailsLineItem](docs/api/payment_intent_amount_details_line_item.html) | `list` | `GET /v1/payment_intents/{intent}/amount_details_line_items` | Required |
| [PaymentLink](docs/api/payment_link.html) | `create` | `POST /v1/payment_links/{payment_link}` | Required |
| [PaymentLink](docs/api/payment_link.html) | `create` | `POST /v1/payment_links` | Required |
| [PaymentLink](docs/api/payment_link.html) | `list` | `GET /v1/payment_links` | Required |
| [PaymentLink](docs/api/payment_link.html) | `load` | `GET /v1/payment_links/{payment_link}` | Required |
| [PaymentMethod](docs/api/payment_method.html) | `create` | `POST /v1/payment_methods/{payment_method}` | Required |
| [PaymentMethod](docs/api/payment_method.html) | `create` | `POST /v1/payment_methods/{payment_method}/attach` | Required |
| [PaymentMethod](docs/api/payment_method.html) | `create` | `POST /v1/payment_methods/{payment_method}/detach` | Required |
| [PaymentMethod](docs/api/payment_method.html) | `create` | `POST /v1/payment_methods` | Required |
| [PaymentMethod](docs/api/payment_method.html) | `list` | `GET /v1/payment_methods` | Required |
| [PaymentMethod](docs/api/payment_method.html) | `list` | `GET /v1/customers/{customer}/payment_methods` | Required |
| [PaymentMethod](docs/api/payment_method.html) | `load` | `GET /v1/customers/{customer}/payment_methods/{payment_method}` | Required |
| [PaymentMethod](docs/api/payment_method.html) | `load` | `GET /v1/payment_methods/{payment_method}` | Required |
| [PaymentMethodConfiguration](docs/api/payment_method_configuration.html) | `create` | `POST /v1/payment_method_configurations/{configuration}` | Required |
| [PaymentMethodConfiguration](docs/api/payment_method_configuration.html) | `create` | `POST /v1/payment_method_configurations` | Required |
| [PaymentMethodConfiguration](docs/api/payment_method_configuration.html) | `list` | `GET /v1/payment_method_configurations` | Required |
| [PaymentMethodConfiguration](docs/api/payment_method_configuration.html) | `load` | `GET /v1/payment_method_configurations/{configuration}` | Required |
| [PaymentMethodDomain](docs/api/payment_method_domain.html) | `create` | `POST /v1/payment_method_domains/{payment_method_domain}` | Required |
| [PaymentMethodDomain](docs/api/payment_method_domain.html) | `create` | `POST /v1/payment_method_domains/{payment_method_domain}/validate` | Required |
| [PaymentMethodDomain](docs/api/payment_method_domain.html) | `create` | `POST /v1/payment_method_domains` | Required |
| [PaymentMethodDomain](docs/api/payment_method_domain.html) | `list` | `GET /v1/payment_method_domains` | Required |
| [PaymentMethodDomain](docs/api/payment_method_domain.html) | `load` | `GET /v1/payment_method_domains/{payment_method_domain}` | Required |
| [PaymentRecord](docs/api/payment_record.html) | `create` | `POST /v1/payment_records/{id}/report_payment_attempt` | Required |
| [PaymentRecord](docs/api/payment_record.html) | `create` | `POST /v1/payment_records/{id}/report_payment_attempt_canceled` | Required |
| [PaymentRecord](docs/api/payment_record.html) | `create` | `POST /v1/payment_records/{id}/report_payment_attempt_failed` | Required |
| [PaymentRecord](docs/api/payment_record.html) | `create` | `POST /v1/payment_records/{id}/report_payment_attempt_guaranteed` | Required |
| [PaymentRecord](docs/api/payment_record.html) | `create` | `POST /v1/payment_records/{id}/report_payment_attempt_informational` | Required |
| [PaymentRecord](docs/api/payment_record.html) | `create` | `POST /v1/payment_records/{id}/report_refund` | Required |
| [PaymentRecord](docs/api/payment_record.html) | `create` | `POST /v1/payment_records/report_payment` | Required |
| [PaymentRecord](docs/api/payment_record.html) | `list` | `GET /v1/payment_records` | Required |
| [PaymentRecord](docs/api/payment_record.html) | `load` | `GET /v1/payment_records/{id}` | Required |
| [Payout](docs/api/payout.html) | `create` | `POST /v1/payouts/{payout}` | Required |
| [Payout](docs/api/payout.html) | `create` | `POST /v1/payouts/{payout}/cancel` | Required |
| [Payout](docs/api/payout.html) | `create` | `POST /v1/payouts/{payout}/reverse` | Required |
| [Payout](docs/api/payout.html) | `create` | `POST /v1/payouts` | Required |
| [Payout](docs/api/payout.html) | `list` | `GET /v1/payouts` | Required |
| [Payout](docs/api/payout.html) | `load` | `GET /v1/payouts/{payout}` | Required |
| [Person](docs/api/person.html) | `create` | `POST /v1/accounts/{account}/people/{person}` | Required |
| [Person](docs/api/person.html) | `create` | `POST /v1/accounts/{account}/persons/{person}` | Required |
| [Person](docs/api/person.html) | `create` | `POST /v1/accounts/{account}/people` | Required |
| [Person](docs/api/person.html) | `create` | `POST /v1/accounts/{account}/persons` | Required |
| [Person](docs/api/person.html) | `list` | `GET /v1/accounts/{account}/people` | Required |
| [Person](docs/api/person.html) | `list` | `GET /v1/accounts/{account}/persons` | Required |
| [Person](docs/api/person.html) | `load` | `GET /v1/accounts/{account}/people/{person}` | Required |
| [Person](docs/api/person.html) | `load` | `GET /v1/accounts/{account}/persons/{person}` | Required |
| [PersonalizationDesign](docs/api/personalization_design.html) | `create` | `POST /v1/issuing/personalization_designs/{personalization_design}` | Required |
| [PersonalizationDesign](docs/api/personalization_design.html) | `create` | `POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate` | Required |
| [PersonalizationDesign](docs/api/personalization_design.html) | `create` | `POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate` | Required |
| [PersonalizationDesign](docs/api/personalization_design.html) | `create` | `POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject` | Required |
| [PersonalizationDesign](docs/api/personalization_design.html) | `create` | `POST /v1/issuing/personalization_designs` | Required |
| [PersonalizationDesign](docs/api/personalization_design.html) | `list` | `GET /v1/issuing/personalization_designs` | Required |
| [PersonalizationDesign](docs/api/personalization_design.html) | `load` | `GET /v1/issuing/personalization_designs/{personalization_design}` | Required |
| [PhysicalBundle](docs/api/physical_bundle.html) | `list` | `GET /v1/issuing/physical_bundles` | Required |
| [PhysicalBundle](docs/api/physical_bundle.html) | `load` | `GET /v1/issuing/physical_bundles/{physical_bundle}` | Required |
| [Plan](docs/api/plan.html) | `create` | `POST /v1/plans/{plan}` | Required |
| [Plan](docs/api/plan.html) | `create` | `POST /v1/plans` | Required |
| [Plan](docs/api/plan.html) | `list` | `GET /v1/plans` | Required |
| [Plan](docs/api/plan.html) | `load` | `GET /v1/plans/{plan}` | Required |
| [Price](docs/api/price.html) | `create` | `POST /v1/prices/{price}` | Required |
| [Price](docs/api/price.html) | `create` | `POST /v1/prices` | Required |
| [Price](docs/api/price.html) | `list` | `GET /v1/prices` | Required |
| [Price](docs/api/price.html) | `load` | `GET /v1/prices/{price}` | Required |
| [Product](docs/api/product.html) | `create` | `POST /v1/products/{id}` | Required |
| [Product](docs/api/product.html) | `create` | `POST /v1/products` | Required |
| [Product](docs/api/product.html) | `list` | `GET /v1/products` | Required |
| [Product](docs/api/product.html) | `list` | `GET /v1/climate/products` | Required |
| [Product](docs/api/product.html) | `load` | `GET /v1/climate/products/{product}` | Required |
| [Product](docs/api/product.html) | `load` | `GET /v1/products/{id}` | Required |
| [Product](docs/api/product.html) | `remove` | `DELETE /v1/products/{id}` | Required |
| [ProductFeature](docs/api/product_feature.html) | `create` | `POST /v1/products/{product}/features` | Required |
| [ProductFeature](docs/api/product_feature.html) | `load` | `GET /v1/products/{product}/features/{id}` | Required |
| [PromotionCode](docs/api/promotion_code.html) | `create` | `POST /v1/promotion_codes/{promotion_code}` | Required |
| [PromotionCode](docs/api/promotion_code.html) | `create` | `POST /v1/promotion_codes` | Required |
| [PromotionCode](docs/api/promotion_code.html) | `list` | `GET /v1/promotion_codes` | Required |
| [PromotionCode](docs/api/promotion_code.html) | `load` | `GET /v1/promotion_codes/{promotion_code}` | Required |
| [Quote](docs/api/quote.html) | `create` | `POST /v1/quotes/{quote}` | Required |
| [Quote](docs/api/quote.html) | `create` | `POST /v1/quotes/{quote}/accept` | Required |
| [Quote](docs/api/quote.html) | `create` | `POST /v1/quotes/{quote}/cancel` | Required |
| [Quote](docs/api/quote.html) | `create` | `POST /v1/quotes/{quote}/finalize` | Required |
| [Quote](docs/api/quote.html) | `create` | `POST /v1/quotes` | Required |
| [Quote](docs/api/quote.html) | `list` | `GET /v1/quotes` | Required |
| [Quote](docs/api/quote.html) | `load` | `GET /v1/quotes/{quote}` | Required |
| [QuoteComputedUpfrontLineItem](docs/api/quote_computed_upfront_line_item.html) | `list` | `GET /v1/quotes/{quote}/computed_upfront_line_items` | Required |
| [QuotePdf](docs/api/quote_pdf.html) | `load` | `GET /v1/quotes/{quote}/pdf` | Required |
| [Reader](docs/api/reader.html) | `create` | `POST /v1/terminal/readers/{reader}` | Required |
| [Reader](docs/api/reader.html) | `create` | `POST /v1/terminal/readers/{reader}/cancel_action` | Required |
| [Reader](docs/api/reader.html) | `create` | `POST /v1/terminal/readers/{reader}/collect_inputs` | Required |
| [Reader](docs/api/reader.html) | `create` | `POST /v1/terminal/readers/{reader}/collect_payment_method` | Required |
| [Reader](docs/api/reader.html) | `create` | `POST /v1/terminal/readers/{reader}/confirm_payment_intent` | Required |
| [Reader](docs/api/reader.html) | `create` | `POST /v1/test_helpers/terminal/readers/{reader}/present_payment_method` | Required |
| [Reader](docs/api/reader.html) | `create` | `POST /v1/terminal/readers/{reader}/process_payment_intent` | Required |
| [Reader](docs/api/reader.html) | `create` | `POST /v1/terminal/readers/{reader}/process_setup_intent` | Required |
| [Reader](docs/api/reader.html) | `create` | `POST /v1/terminal/readers/{reader}/refund_payment` | Required |
| [Reader](docs/api/reader.html) | `create` | `POST /v1/terminal/readers/{reader}/set_reader_display` | Required |
| [Reader](docs/api/reader.html) | `create` | `POST /v1/test_helpers/terminal/readers/{reader}/succeed_input_collection` | Required |
| [Reader](docs/api/reader.html) | `create` | `POST /v1/test_helpers/terminal/readers/{reader}/timeout_input_collection` | Required |
| [Reader](docs/api/reader.html) | `create` | `POST /v1/terminal/readers` | Required |
| [Reader](docs/api/reader.html) | `list` | `GET /v1/terminal/readers` | Required |
| [Reader](docs/api/reader.html) | `load` | `GET /v1/terminal/readers/{reader}` | Required |
| [Reader](docs/api/reader.html) | `remove` | `DELETE /v1/terminal/readers/{reader}` | Required |
| [ReceivedCredit](docs/api/received_credit.html) | `create` | `POST /v1/test_helpers/treasury/received_credits` | Required |
| [ReceivedCredit](docs/api/received_credit.html) | `list` | `GET /v1/treasury/received_credits` | Required |
| [ReceivedCredit](docs/api/received_credit.html) | `load` | `GET /v1/treasury/received_credits/{id}` | Required |
| [ReceivedDebit](docs/api/received_debit.html) | `create` | `POST /v1/test_helpers/treasury/received_debits` | Required |
| [ReceivedDebit](docs/api/received_debit.html) | `list` | `GET /v1/treasury/received_debits` | Required |
| [ReceivedDebit](docs/api/received_debit.html) | `load` | `GET /v1/treasury/received_debits/{id}` | Required |
| [Refund](docs/api/refund.html) | `create` | `POST /v1/application_fees/{fee}/refunds/{id}` | Required |
| [Refund](docs/api/refund.html) | `create` | `POST /v1/charges/{charge}/refunds/{refund}` | Required |
| [Refund](docs/api/refund.html) | `create` | `POST /v1/application_fees/{id}/refunds` | Required |
| [Refund](docs/api/refund.html) | `create` | `POST /v1/charges/{charge}/refunds` | Required |
| [Refund](docs/api/refund.html) | `create` | `POST /v1/refunds/{refund}` | Required |
| [Refund](docs/api/refund.html) | `create` | `POST /v1/refunds/{refund}/cancel` | Required |
| [Refund](docs/api/refund.html) | `create` | `POST /v1/test_helpers/refunds/{refund}/expire` | Required |
| [Refund](docs/api/refund.html) | `create` | `POST /v1/refunds` | Required |
| [Refund](docs/api/refund.html) | `create` | `POST /v1/terminal/refunds` | Required |
| [Refund](docs/api/refund.html) | `list` | `GET /v1/refunds` | Required |
| [Refund](docs/api/refund.html) | `list` | `GET /v1/application_fees/{id}/refunds` | Required |
| [Refund](docs/api/refund.html) | `list` | `GET /v1/charges/{charge}/refunds` | Required |
| [Refund](docs/api/refund.html) | `load` | `GET /v1/application_fees/{fee}/refunds/{id}` | Required |
| [Refund](docs/api/refund.html) | `load` | `GET /v1/charges/{charge}/refunds/{refund}` | Required |
| [Refund](docs/api/refund.html) | `load` | `GET /v1/refunds/{refund}` | Required |
| [Registration](docs/api/registration.html) | `create` | `POST /v1/tax/registrations/{id}` | Required |
| [Registration](docs/api/registration.html) | `create` | `POST /v1/tax/registrations` | Required |
| [Registration](docs/api/registration.html) | `list` | `GET /v1/tax/registrations` | Required |
| [Registration](docs/api/registration.html) | `load` | `GET /v1/tax/registrations/{id}` | Required |
| [ReportRun](docs/api/report_run.html) | `create` | `POST /v1/reporting/report_runs` | Required |
| [ReportRun](docs/api/report_run.html) | `list` | `GET /v1/reporting/report_runs` | Required |
| [ReportRun](docs/api/report_run.html) | `load` | `GET /v1/reporting/report_runs/{report_run}` | Required |
| [ReportType](docs/api/report_type.html) | `list` | `GET /v1/reporting/report_types` | Required |
| [ReportType](docs/api/report_type.html) | `load` | `GET /v1/reporting/report_types/{report_type}` | Required |
| [Request](docs/api/request.html) | `create` | `POST /v1/forwarding/requests` | Required |
| [Request](docs/api/request.html) | `list` | `GET /v1/forwarding/requests` | Required |
| [Request](docs/api/request.html) | `load` | `GET /v1/forwarding/requests/{id}` | Required |
| [Reversal](docs/api/reversal.html) | `create` | `POST /v1/transfers/{transfer}/reversals/{id}` | Required |
| [Reversal](docs/api/reversal.html) | `create` | `POST /v1/transfers/{id}/reversals` | Required |
| [Reversal](docs/api/reversal.html) | `list` | `GET /v1/transfers/{id}/reversals` | Required |
| [Reversal](docs/api/reversal.html) | `load` | `GET /v1/transfers/{transfer}/reversals/{id}` | Required |
| [Review](docs/api/review.html) | `create` | `POST /v1/reviews/{review}/approve` | Required |
| [Review](docs/api/review.html) | `list` | `GET /v1/reviews` | Required |
| [Review](docs/api/review.html) | `load` | `GET /v1/reviews/{review}` | Required |
| [ScheduledQueryRun](docs/api/scheduled_query_run.html) | `list` | `GET /v1/sigma/scheduled_query_runs` | Required |
| [ScheduledQueryRun](docs/api/scheduled_query_run.html) | `load` | `GET /v1/sigma/scheduled_query_runs/{scheduled_query_run}` | Required |
| [Search](docs/api/search.html) | `list` | `GET /v1/charges/search` | Required |
| [Search](docs/api/search.html) | `list` | `GET /v1/customers/search` | Required |
| [Search](docs/api/search.html) | `list` | `GET /v1/invoices/search` | Required |
| [Search](docs/api/search.html) | `list` | `GET /v1/payment_intents/search` | Required |
| [Search](docs/api/search.html) | `list` | `GET /v1/prices/search` | Required |
| [Search](docs/api/search.html) | `list` | `GET /v1/products/search` | Required |
| [Search](docs/api/search.html) | `list` | `GET /v1/subscriptions/search` | Required |
| [Secret](docs/api/secret.html) | `create` | `POST /v1/apps/secrets` | Required |
| [Secret](docs/api/secret.html) | `create` | `POST /v1/apps/secrets/delete` | Required |
| [Secret](docs/api/secret.html) | `list` | `GET /v1/apps/secrets` | Required |
| [Secret](docs/api/secret.html) | `load` | `GET /v1/apps/secrets/find` | Required |
| [Session](docs/api/session.html) | `create` | `POST /v1/checkout/sessions/{session}` | Required |
| [Session](docs/api/session.html) | `create` | `POST /v1/checkout/sessions/{session}/expire` | Required |
| [Session](docs/api/session.html) | `create` | `POST /v1/billing_portal/sessions` | Required |
| [Session](docs/api/session.html) | `create` | `POST /v1/checkout/sessions` | Required |
| [Session](docs/api/session.html) | `create` | `POST /v1/financial_connections/sessions` | Required |
| [Session](docs/api/session.html) | `create` | `POST /v1/link_account_sessions` | Required |
| [Session](docs/api/session.html) | `list` | `GET /v1/checkout/sessions` | Required |
| [Session](docs/api/session.html) | `load` | `GET /v1/checkout/sessions/{session}` | Required |
| [Session](docs/api/session.html) | `load` | `GET /v1/financial_connections/sessions/{session}` | Required |
| [Session](docs/api/session.html) | `load` | `GET /v1/link_account_sessions/{session}` | Required |
| [Setting](docs/api/setting.html) | `create` | `POST /v1/tax/settings` | Required |
| [Setting](docs/api/setting.html) | `load` | `GET /v1/tax/settings` | Required |
| [Settlement](docs/api/settlement.html) | `create` | `POST /v1/issuing/settlements/{settlement}` | Required |
| [Settlement](docs/api/settlement.html) | `create` | `POST /v1/test_helpers/issuing/settlements/{settlement}/complete` | Required |
| [Settlement](docs/api/settlement.html) | `create` | `POST /v1/test_helpers/issuing/settlements` | Required |
| [Settlement](docs/api/settlement.html) | `load` | `GET /v1/issuing/settlements/{settlement}` | Required |
| [SetupAttempt](docs/api/setup_attempt.html) | `list` | `GET /v1/setup_attempts` | Required |
| [SetupIntent](docs/api/setup_intent.html) | `create` | `POST /v1/setup_intents/{intent}` | Required |
| [SetupIntent](docs/api/setup_intent.html) | `create` | `POST /v1/setup_intents/{intent}/cancel` | Required |
| [SetupIntent](docs/api/setup_intent.html) | `create` | `POST /v1/setup_intents/{intent}/confirm` | Required |
| [SetupIntent](docs/api/setup_intent.html) | `create` | `POST /v1/setup_intents/{intent}/verify_microdeposits` | Required |
| [SetupIntent](docs/api/setup_intent.html) | `create` | `POST /v1/setup_intents` | Required |
| [SetupIntent](docs/api/setup_intent.html) | `list` | `GET /v1/setup_intents` | Required |
| [SetupIntent](docs/api/setup_intent.html) | `load` | `GET /v1/setup_intents/{intent}` | Required |
| [ShippingRate](docs/api/shipping_rate.html) | `create` | `POST /v1/shipping_rates/{shipping_rate_token}` | Required |
| [ShippingRate](docs/api/shipping_rate.html) | `create` | `POST /v1/shipping_rates` | Required |
| [ShippingRate](docs/api/shipping_rate.html) | `list` | `GET /v1/shipping_rates` | Required |
| [ShippingRate](docs/api/shipping_rate.html) | `load` | `GET /v1/shipping_rates/{shipping_rate_token}` | Required |
| [SigmaApiQuery](docs/api/sigma_api_query.html) | `create` | `POST /v1/sigma/saved_queries/{id}` | Required |
| [Source](docs/api/source.html) | `create` | `POST /v1/customers/{customer}/sources/{id}` | Required |
| [Source](docs/api/source.html) | `create` | `POST /v1/customers/{customer}/sources` | Required |
| [Source](docs/api/source.html) | `create` | `POST /v1/sources/{source}` | Required |
| [Source](docs/api/source.html) | `create` | `POST /v1/sources/{source}/verify` | Required |
| [Source](docs/api/source.html) | `create` | `POST /v1/sources` | Required |
| [Source](docs/api/source.html) | `list` | `GET /v1/customers/{customer}/sources` | Required |
| [Source](docs/api/source.html) | `load` | `GET /v1/sources/{source}` | Required |
| [Source](docs/api/source.html) | `load` | `GET /v1/customers/{customer}/sources/{id}` | Required |
| [Source](docs/api/source.html) | `remove` | `DELETE /v1/customers/{customer}/sources/{id}` | Required |
| [SourceMandateNotification](docs/api/source_mandate_notification.html) | `load` | `GET /v1/sources/{source}/mandate_notifications/{mandate_notification}` | Required |
| [SourceTransaction](docs/api/source_transaction.html) | `list` | `GET /v1/sources/{source}/source_transactions` | Required |
| [SourceTransaction](docs/api/source_transaction.html) | `load` | `GET /v1/sources/{source}/source_transactions/{source_transaction}` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /v1/customers/{customer}/subscriptions/{subscription_exposed_id}` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /v1/customers/{customer}/subscriptions` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /v1/subscriptions/{subscription_exposed_id}` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /v1/subscriptions/{subscription}/migrate` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /v1/subscriptions/{subscription}/pause` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /v1/subscriptions/{subscription}/resume` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /v1/subscriptions` | Required |
| [Subscription](docs/api/subscription.html) | `list` | `GET /v1/subscriptions` | Required |
| [Subscription](docs/api/subscription.html) | `list` | `GET /v1/customers/{customer}/subscriptions` | Required |
| [Subscription](docs/api/subscription.html) | `load` | `GET /v1/customers/{customer}/subscriptions/{subscription_exposed_id}` | Required |
| [Subscription](docs/api/subscription.html) | `load` | `GET /v1/subscriptions/{subscription_exposed_id}` | Required |
| [Subscription](docs/api/subscription.html) | `remove` | `DELETE /v1/customers/{customer}/subscriptions/{subscription_exposed_id}` | Required |
| [Subscription](docs/api/subscription.html) | `remove` | `DELETE /v1/subscriptions/{subscription_exposed_id}` | Required |
| [SubscriptionItem](docs/api/subscription_item.html) | `create` | `POST /v1/subscription_items/{item}` | Required |
| [SubscriptionItem](docs/api/subscription_item.html) | `create` | `POST /v1/subscription_items` | Required |
| [SubscriptionItem](docs/api/subscription_item.html) | `list` | `GET /v1/subscription_items` | Required |
| [SubscriptionItem](docs/api/subscription_item.html) | `load` | `GET /v1/subscription_items/{item}` | Required |
| [SubscriptionSchedule](docs/api/subscription_schedule.html) | `create` | `POST /v1/subscription_schedules/{schedule}` | Required |
| [SubscriptionSchedule](docs/api/subscription_schedule.html) | `create` | `POST /v1/subscription_schedules/{schedule}/cancel` | Required |
| [SubscriptionSchedule](docs/api/subscription_schedule.html) | `create` | `POST /v1/subscription_schedules/{schedule}/release` | Required |
| [SubscriptionSchedule](docs/api/subscription_schedule.html) | `create` | `POST /v1/subscription_schedules` | Required |
| [SubscriptionSchedule](docs/api/subscription_schedule.html) | `list` | `GET /v1/subscription_schedules` | Required |
| [SubscriptionSchedule](docs/api/subscription_schedule.html) | `load` | `GET /v1/subscription_schedules/{schedule}` | Required |
| [Supplier](docs/api/supplier.html) | `list` | `GET /v1/climate/suppliers` | Required |
| [Supplier](docs/api/supplier.html) | `load` | `GET /v1/climate/suppliers/{supplier}` | Required |
| [TaxCode](docs/api/tax_code.html) | `list` | `GET /v1/tax_codes` | Required |
| [TaxCode](docs/api/tax_code.html) | `load` | `GET /v1/tax_codes/{id}` | Required |
| [TaxId](docs/api/tax_id.html) | `create` | `POST /v1/customers/{customer}/tax_ids` | Required |
| [TaxId](docs/api/tax_id.html) | `create` | `POST /v1/tax_ids` | Required |
| [TaxId](docs/api/tax_id.html) | `list` | `GET /v1/customers/{customer}/tax_ids` | Required |
| [TaxId](docs/api/tax_id.html) | `list` | `GET /v1/tax_ids` | Required |
| [TaxId](docs/api/tax_id.html) | `load` | `GET /v1/customers/{customer}/tax_ids/{id}` | Required |
| [TaxId](docs/api/tax_id.html) | `load` | `GET /v1/tax_ids/{id}` | Required |
| [TaxId](docs/api/tax_id.html) | `remove` | `DELETE /v1/customers/{customer}/tax_ids/{id}` | Required |
| [TaxId](docs/api/tax_id.html) | `remove` | `DELETE /v1/tax_ids/{id}` | Required |
| [TaxRate](docs/api/tax_rate.html) | `create` | `POST /v1/tax_rates/{tax_rate}` | Required |
| [TaxRate](docs/api/tax_rate.html) | `create` | `POST /v1/tax_rates` | Required |
| [TaxRate](docs/api/tax_rate.html) | `list` | `GET /v1/tax_rates` | Required |
| [TaxRate](docs/api/tax_rate.html) | `load` | `GET /v1/tax_rates/{tax_rate}` | Required |
| [TestClock](docs/api/test_clock.html) | `create` | `POST /v1/test_helpers/test_clocks/{test_clock}/advance` | Required |
| [TestClock](docs/api/test_clock.html) | `create` | `POST /v1/test_helpers/test_clocks` | Required |
| [TestClock](docs/api/test_clock.html) | `list` | `GET /v1/test_helpers/test_clocks` | Required |
| [TestClock](docs/api/test_clock.html) | `load` | `GET /v1/test_helpers/test_clocks/{test_clock}` | Required |
| [TestClock](docs/api/test_clock.html) | `remove` | `DELETE /v1/test_helpers/test_clocks/{test_clock}` | Required |
| [Token](docs/api/token.html) | `create` | `POST /v1/issuing/tokens/{token}` | Required |
| [Token](docs/api/token.html) | `create` | `POST /v1/tokens` | Required |
| [Token](docs/api/token.html) | `list` | `GET /v1/issuing/tokens` | Required |
| [Token](docs/api/token.html) | `load` | `GET /v1/issuing/tokens/{token}` | Required |
| [Token](docs/api/token.html) | `load` | `GET /v1/tokens/{token}` | Required |
| [Topup](docs/api/topup.html) | `create` | `POST /v1/topups/{topup}` | Required |
| [Topup](docs/api/topup.html) | `create` | `POST /v1/topups/{topup}/cancel` | Required |
| [Topup](docs/api/topup.html) | `create` | `POST /v1/topups` | Required |
| [Topup](docs/api/topup.html) | `list` | `GET /v1/topups` | Required |
| [Topup](docs/api/topup.html) | `load` | `GET /v1/topups/{topup}` | Required |
| [Transaction](docs/api/transaction.html) | `create` | `POST /v1/issuing/transactions/{transaction}` | Required |
| [Transaction](docs/api/transaction.html) | `create` | `POST /v1/test_helpers/issuing/transactions/{transaction}/refund` | Required |
| [Transaction](docs/api/transaction.html) | `create` | `POST /v1/test_helpers/issuing/transactions/create_force_capture` | Required |
| [Transaction](docs/api/transaction.html) | `create` | `POST /v1/tax/transactions/create_from_calculation` | Required |
| [Transaction](docs/api/transaction.html) | `create` | `POST /v1/tax/transactions/create_reversal` | Required |
| [Transaction](docs/api/transaction.html) | `create` | `POST /v1/test_helpers/issuing/transactions/create_unlinked_refund` | Required |
| [Transaction](docs/api/transaction.html) | `list` | `GET /v1/treasury/transactions` | Required |
| [Transaction](docs/api/transaction.html) | `list` | `GET /v1/issuing/transactions` | Required |
| [Transaction](docs/api/transaction.html) | `list` | `GET /v1/financial_connections/transactions` | Required |
| [Transaction](docs/api/transaction.html) | `load` | `GET /v1/financial_connections/transactions/{transaction}` | Required |
| [Transaction](docs/api/transaction.html) | `load` | `GET /v1/issuing/transactions/{transaction}` | Required |
| [Transaction](docs/api/transaction.html) | `load` | `GET /v1/tax/transactions/{transaction}` | Required |
| [Transaction](docs/api/transaction.html) | `load` | `GET /v1/treasury/transactions/{id}` | Required |
| [TransactionEntry](docs/api/transaction_entry.html) | `list` | `GET /v1/treasury/transaction_entries` | Required |
| [TransactionEntry](docs/api/transaction_entry.html) | `load` | `GET /v1/treasury/transaction_entries/{id}` | Required |
| [Transfer](docs/api/transfer.html) | `create` | `POST /v1/transfers/{transfer}` | Required |
| [Transfer](docs/api/transfer.html) | `create` | `POST /v1/transfers` | Required |
| [Transfer](docs/api/transfer.html) | `list` | `GET /v1/transfers` | Required |
| [Transfer](docs/api/transfer.html) | `load` | `GET /v1/transfers/{transfer}` | Required |
| [TrialOffer](docs/api/trial_offer.html) | `create` | `POST /v1/product_catalog/trial_offers/{id}` | Required |
| [TrialOffer](docs/api/trial_offer.html) | `create` | `POST /v1/product_catalog/trial_offers` | Required |
| [TrialOffer](docs/api/trial_offer.html) | `list` | `GET /v1/product_catalog/trial_offers` | Required |
| [TrialOffer](docs/api/trial_offer.html) | `load` | `GET /v1/product_catalog/trial_offers/{id}` | Required |
| [ValueList](docs/api/value_list.html) | `create` | `POST /v1/radar/value_lists/{value_list}` | Required |
| [ValueList](docs/api/value_list.html) | `create` | `POST /v1/radar/value_lists` | Required |
| [ValueList](docs/api/value_list.html) | `list` | `GET /v1/radar/value_lists` | Required |
| [ValueList](docs/api/value_list.html) | `load` | `GET /v1/radar/value_lists/{value_list}` | Required |
| [ValueList](docs/api/value_list.html) | `remove` | `DELETE /v1/radar/value_lists/{value_list}` | Required |
| [ValueListItem](docs/api/value_list_item.html) | `create` | `POST /v1/radar/value_list_items` | Required |
| [ValueListItem](docs/api/value_list_item.html) | `list` | `GET /v1/radar/value_list_items` | Required |
| [ValueListItem](docs/api/value_list_item.html) | `load` | `GET /v1/radar/value_list_items/{item}` | Required |
| [ValueListItem](docs/api/value_list_item.html) | `remove` | `DELETE /v1/radar/value_list_items/{item}` | Required |
| [VerificationReport](docs/api/verification_report.html) | `list` | `GET /v1/identity/verification_reports` | Required |
| [VerificationReport](docs/api/verification_report.html) | `load` | `GET /v1/identity/verification_reports/{report}` | Required |
| [VerificationSession](docs/api/verification_session.html) | `create` | `POST /v1/identity/verification_sessions/{session}` | Required |
| [VerificationSession](docs/api/verification_session.html) | `create` | `POST /v1/identity/verification_sessions/{session}/cancel` | Required |
| [VerificationSession](docs/api/verification_session.html) | `create` | `POST /v1/identity/verification_sessions/{session}/redact` | Required |
| [VerificationSession](docs/api/verification_session.html) | `create` | `POST /v1/identity/verification_sessions` | Required |
| [VerificationSession](docs/api/verification_session.html) | `list` | `GET /v1/identity/verification_sessions` | Required |
| [VerificationSession](docs/api/verification_session.html) | `load` | `GET /v1/identity/verification_sessions/{session}` | Required |
| [WebhookEndpoint](docs/api/webhook_endpoint.html) | `create` | `POST /v1/webhook_endpoints/{webhook_endpoint}` | Required |
| [WebhookEndpoint](docs/api/webhook_endpoint.html) | `create` | `POST /v1/webhook_endpoints` | Required |
| [WebhookEndpoint](docs/api/webhook_endpoint.html) | `list` | `GET /v1/webhook_endpoints` | Required |
| [WebhookEndpoint](docs/api/webhook_endpoint.html) | `load` | `GET /v1/webhook_endpoints/{webhook_endpoint}` | Required |

## Connect to the API

- API server: `https://api.stripe.com/`

The default credential is sent in the `Authorization` header with the `Basic` prefix.

Basic HTTP authentication. Allowed headers-- Authorization: Basic &lt;api_key&gt; | Authorization: Basic &lt;base64 hash of `api_key:`&gt;

Bearer HTTP authentication. Allowed headers-- Authorization: Bearer &lt;api_key&gt;

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `stripe_list`: List records for an entity. Supported entities: `account`, `account_owner`, `active_entitlement`, `alert`, `application_fee`, `association`, `authentication`, `authorization`, `balance`, `balance_transaction`, `bank_account`, `capability`, `card`, `cardholder`, `cash_balance_transaction`, `charge`, `configuration`, `country_spec`, `coupon`, `credit_balance_summary`, `credit_balance_transaction`, `credit_grant`, `credit_note`, `credit_note_line`, `credit_reversal`, `customer`, `debit_reversal`, `dispute`, `domain`, `early_fraud_warning`, `event`, `exchange_rate`, `external_account`, `feature`, `feedback_option`, `file`, `file_link`, `financial_account`, `history`, `inbound_transfer`, `install`, `invoice`, `invoice_payment`, `invoice_rendering_template`, `invoiceitem`, `line`, `line_item`, `linked_account`, `linked_account_owner`, `location`, `meter`, `meter_event_summary`, `order`, `outbound_payment`, `outbound_transfer`, `payment_attempt_record`, `payment_intent`, `payment_intent_amount_details_line_item`, `payment_link`, `payment_method`, `payment_method_configuration`, `payment_method_domain`, `payment_record`, `payout`, `person`, `personalization_design`, `physical_bundle`, `plan`, `price`, `product`, `promotion_code`, `quote`, `quote_computed_upfront_line_item`, `reader`, `received_credit`, `received_debit`, `refund`, `registration`, `report_run`, `report_type`, `request`, `reversal`, `review`, `scheduled_query_run`, `search`, `secret`, `session`, `setup_attempt`, `setup_intent`, `shipping_rate`, `source`, `source_transaction`, `subscription`, `subscription_item`, `subscription_schedule`, `supplier`, `tax_code`, `tax_id`, `tax_rate`, `test_clock`, `token`, `topup`, `transaction`, `transaction_entry`, `transfer`, `trial_offer`, `value_list`, `value_list_item`, `verification_report`, `verification_session`, `webhook_endpoint`.
- `stripe_load`: Load one record for an entity. Supported entities: `account`, `active_entitlement`, `alert`, `apple_pay_domain`, `application_fee`, `authentication`, `authorization`, `balance_setting`, `balance_transaction`, `bank_account`, `calculation`, `capability`, `card`, `cardholder`, `cash_balance`, `cash_balance_transaction`, `charge`, `configuration`, `confirmation_token`, `country_spec`, `coupon`, `credit_balance_transaction`, `credit_grant`, `credit_note`, `credit_reversal`, `customer`, `customer_balance_transaction`, `debit_reversal`, `discount`, `dispute`, `early_fraud_warning`, `event`, `exchange_rate`, `external_account`, `feature`, `feedback_option`, `file`, `file_link`, `financial_account`, `financial_account_feature`, `inbound_transfer`, `install`, `invoice`, `invoice_payment`, `invoice_rendering_template`, `invoiceitem`, `location`, `mandate`, `meter`, `order`, `outbound_payment`, `outbound_transfer`, `payment_attempt_record`, `payment_intent`, `payment_link`, `payment_method`, `payment_method_configuration`, `payment_method_domain`, `payment_record`, `payout`, `person`, `personalization_design`, `physical_bundle`, `plan`, `price`, `product`, `product_feature`, `promotion_code`, `quote`, `quote_pdf`, `reader`, `received_credit`, `received_debit`, `refund`, `registration`, `report_run`, `report_type`, `request`, `reversal`, `review`, `scheduled_query_run`, `secret`, `session`, `setting`, `settlement`, `setup_intent`, `shipping_rate`, `source`, `source_mandate_notification`, `source_transaction`, `subscription`, `subscription_item`, `subscription_schedule`, `supplier`, `tax_code`, `tax_id`, `tax_rate`, `test_clock`, `token`, `topup`, `transaction`, `transaction_entry`, `transfer`, `trial_offer`, `value_list`, `value_list_item`, `verification_report`, `verification_session`, `webhook_endpoint`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

