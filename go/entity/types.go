// Typed models for the Stripe SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/stripe-sdk/go/core"
)

// Account is the typed data model for the account entity.
type Account struct {
}

// AccountLoadMatch is the typed request payload for Account.LoadTyped.
type AccountLoadMatch struct {
	Account string `json:"account"`
	Expand *[]any `json:"expand,omitempty"`
}

// AccountListMatch is the typed request payload for Account.ListTyped.
type AccountListMatch struct {
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// AccountCreateData is the typed request payload for Account.CreateTyped.
type AccountCreateData struct {
	Id string `json:"id"`
	AccountHolder *any `json:"account_holder,omitempty"`
	AccountNumbers *[]any `json:"account_numbers,omitempty"`
	Balance *any `json:"balance,omitempty"`
	BalanceRefresh *any `json:"balance_refresh,omitempty"`
	BusinessProfile *any `json:"business_profile,omitempty"`
	BusinessType *string `json:"business_type,omitempty"`
	Capabilities *map[string]any `json:"capabilities,omitempty"`
	Category string `json:"category"`
	ChargesEnabled *bool `json:"charges_enabled,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	Controller map[string]any `json:"controller"`
	Country *string `json:"country,omitempty"`
	Created int `json:"created"`
	DefaultCurrency *string `json:"default_currency,omitempty"`
	DetailsSubmitted *bool `json:"details_submitted,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	Email *string `json:"email,omitempty"`
	ExternalAccounts map[string]any `json:"external_accounts"`
	FutureRequirements *map[string]any `json:"future_requirements,omitempty"`
	Groups *any `json:"groups,omitempty"`
	Individual map[string]any `json:"individual"`
	InstitutionName string `json:"institution_name"`
	Last4 *string `json:"last4,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Object string `json:"object"`
	Ownership *any `json:"ownership,omitempty"`
	OwnershipRefresh *any `json:"ownership_refresh,omitempty"`
	PayoutsEnabled *bool `json:"payouts_enabled,omitempty"`
	Permissions *[]any `json:"permissions,omitempty"`
	Requirements *map[string]any `json:"requirements,omitempty"`
	Settings *any `json:"settings,omitempty"`
	Status string `json:"status"`
	StatusDetails *map[string]any `json:"status_details,omitempty"`
	Subcategory string `json:"subcategory"`
	Subscriptions *[]any `json:"subscriptions,omitempty"`
	SupportedPaymentMethodTypes []any `json:"supported_payment_method_types"`
	TosAcceptance *map[string]any `json:"tos_acceptance,omitempty"`
	TransactionRefresh *any `json:"transaction_refresh,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AccountLink is the typed data model for the account_link entity.
type AccountLink struct {
}

// AccountLinkCreateData is the typed request payload for AccountLink.CreateTyped.
type AccountLinkCreateData struct {
	Created int `json:"created"`
	ExpiresAt int `json:"expires_at"`
	Object string `json:"object"`
	Url string `json:"url"`
}

// AccountOwner is the typed data model for the account_owner entity.
type AccountOwner struct {
}

// AccountOwnerListMatch is the typed request payload for AccountOwner.ListTyped.
type AccountOwnerListMatch struct {
	Id string `json:"id"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Ownership string `json:"ownership"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// AccountSession is the typed data model for the account_session entity.
type AccountSession struct {
}

// AccountSessionCreateData is the typed request payload for AccountSession.CreateTyped.
type AccountSessionCreateData struct {
	AccountManagement map[string]any `json:"account_management"`
	AccountOnboarding map[string]any `json:"account_onboarding"`
	BalanceReport map[string]any `json:"balance_report"`
	Balances map[string]any `json:"balances"`
	DisputesList map[string]any `json:"disputes_list"`
	Documents map[string]any `json:"documents"`
	FinancialAccount map[string]any `json:"financial_account"`
	FinancialAccountTransactions map[string]any `json:"financial_account_transactions"`
	InstantPayoutsPromotion map[string]any `json:"instant_payouts_promotion"`
	IssuingCard map[string]any `json:"issuing_card"`
	IssuingCardsList map[string]any `json:"issuing_cards_list"`
	NotificationBanner map[string]any `json:"notification_banner"`
	PaymentDetails map[string]any `json:"payment_details"`
	PaymentDisputes map[string]any `json:"payment_disputes"`
	PaymentMethodSettings map[string]any `json:"payment_method_settings"`
	Payments map[string]any `json:"payments"`
	PayoutDetails map[string]any `json:"payout_details"`
	PayoutReconciliationReport map[string]any `json:"payout_reconciliation_report"`
	Payouts map[string]any `json:"payouts"`
	PayoutsList map[string]any `json:"payouts_list"`
	TaxRegistrations map[string]any `json:"tax_registrations"`
	TaxSettings map[string]any `json:"tax_settings"`
}

// ActiveEntitlement is the typed data model for the active_entitlement entity.
type ActiveEntitlement struct {
}

// ActiveEntitlementLoadMatch is the typed request payload for ActiveEntitlement.LoadTyped.
type ActiveEntitlementLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ActiveEntitlementListMatch is the typed request payload for ActiveEntitlement.ListTyped.
type ActiveEntitlementListMatch struct {
	Customer string `json:"customer"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// Alert is the typed data model for the alert entity.
type Alert struct {
}

// AlertLoadMatch is the typed request payload for Alert.LoadTyped.
type AlertLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// AlertListMatch is the typed request payload for Alert.ListTyped.
type AlertListMatch struct {
	AlertType *string `json:"alert_type,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Meter *string `json:"meter,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// AlertCreateData is the typed request payload for Alert.CreateTyped.
type AlertCreateData struct {
	AlertType string `json:"alert_type"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	Status *string `json:"status,omitempty"`
	Title string `json:"title"`
	UsageThreshold *any `json:"usage_threshold,omitempty"`
}

// ApplePayDomain is the typed data model for the apple_pay_domain entity.
type ApplePayDomain struct {
}

// ApplePayDomainLoadMatch is the typed request payload for ApplePayDomain.LoadTyped.
type ApplePayDomainLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ApplePayDomainCreateData is the typed request payload for ApplePayDomain.CreateTyped.
type ApplePayDomainCreateData struct {
	Created int `json:"created"`
	DomainName string `json:"domain_name"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
}

// ApplicationFee is the typed data model for the application_fee entity.
type ApplicationFee struct {
}

// ApplicationFeeLoadMatch is the typed request payload for ApplicationFee.LoadTyped.
type ApplicationFeeLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ApplicationFeeListMatch is the typed request payload for ApplicationFee.ListTyped.
type ApplicationFeeListMatch struct {
	Charge *string `json:"charge,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// ApplicationFeeCreateData is the typed request payload for ApplicationFee.CreateTyped.
type ApplicationFeeCreateData struct {
	Id string `json:"id"`
	Account any `json:"account"`
	Amount int `json:"amount"`
	AmountRefunded int `json:"amount_refunded"`
	Application any `json:"application"`
	BalanceTransaction *any `json:"balance_transaction,omitempty"`
	Charge any `json:"charge"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	FeeSource *any `json:"fee_source,omitempty"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	OriginatingTransaction *any `json:"originating_transaction,omitempty"`
	Refunded bool `json:"refunded"`
	Refunds map[string]any `json:"refunds"`
}

// Association is the typed data model for the association entity.
type Association struct {
}

// AssociationListMatch is the typed request payload for Association.ListTyped.
type AssociationListMatch struct {
	Expand *[]any `json:"expand,omitempty"`
	PaymentIntent string `json:"payment_intent"`
}

// Authentication is the typed data model for the authentication entity.
type Authentication struct {
}

// AuthenticationLoadMatch is the typed request payload for Authentication.LoadTyped.
type AuthenticationLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// AuthenticationListMatch is the typed request payload for Authentication.ListTyped.
type AuthenticationListMatch struct {
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// AuthenticationCreateData is the typed request payload for Authentication.CreateTyped.
type AuthenticationCreateData struct {
	AcquirerDetails *map[string]any `json:"acquirer_details,omitempty"`
	Amount *int `json:"amount,omitempty"`
	ChallengeUrl *string `json:"challenge_url,omitempty"`
	Channel map[string]any `json:"channel"`
	Created int `json:"created"`
	Currency *string `json:"currency,omitempty"`
	DirectoryServer string `json:"directory_server"`
	FingerprintingUrl *string `json:"fingerprinting_url,omitempty"`
	FlowPreference map[string]any `json:"flow_preference"`
	FutureUsage map[string]any `json:"future_usage"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	MessageCategory string `json:"message_category"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Object string `json:"object"`
	Outcome *string `json:"outcome,omitempty"`
	OutcomeDetails map[string]any `json:"outcome_details"`
	PaymentMethod any `json:"payment_method"`
	Reason *string `json:"reason,omitempty"`
	ShippingAddress *map[string]any `json:"shipping_address,omitempty"`
	Status string `json:"status"`
}

// Authorization is the typed data model for the authorization entity.
type Authorization struct {
}

// AuthorizationLoadMatch is the typed request payload for Authorization.LoadTyped.
type AuthorizationLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// AuthorizationListMatch is the typed request payload for Authorization.ListTyped.
type AuthorizationListMatch struct {
	Card *string `json:"card,omitempty"`
	Cardholder *string `json:"cardholder,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// AuthorizationCreateData is the typed request payload for Authorization.CreateTyped.
type AuthorizationCreateData struct {
	Id string `json:"id"`
	Amount int `json:"amount"`
	AmountDetails *any `json:"amount_details,omitempty"`
	Approved bool `json:"approved"`
	AuthorizationMethod string `json:"authorization_method"`
	BalanceTransactions []any `json:"balance_transactions"`
	Card map[string]any `json:"card"`
	CardPresence *string `json:"card_presence,omitempty"`
	Cardholder *any `json:"cardholder,omitempty"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Fleet *any `json:"fleet,omitempty"`
	FraudChallenges *[]any `json:"fraud_challenges,omitempty"`
	Fuel *any `json:"fuel,omitempty"`
	Livemode bool `json:"livemode"`
	MerchantAmount int `json:"merchant_amount"`
	MerchantCurrency string `json:"merchant_currency"`
	MerchantData map[string]any `json:"merchant_data"`
	Metadata map[string]any `json:"metadata"`
	NetworkData *any `json:"network_data,omitempty"`
	Object string `json:"object"`
	PendingRequest *any `json:"pending_request,omitempty"`
	RequestHistory []any `json:"request_history"`
	Status string `json:"status"`
	Token *string `json:"token,omitempty"`
	Transactions []any `json:"transactions"`
	Treasury *any `json:"treasury,omitempty"`
	VerificationData map[string]any `json:"verification_data"`
	VerifiedByFraudChallenge *bool `json:"verified_by_fraud_challenge,omitempty"`
	Wallet *string `json:"wallet,omitempty"`
}

// Balance is the typed data model for the balance entity.
type Balance struct {
}

// BalanceListMatch is the typed request payload for Balance.ListTyped.
type BalanceListMatch struct {
	Expand *[]any `json:"expand,omitempty"`
}

// BalanceSetting is the typed data model for the balance_setting entity.
type BalanceSetting struct {
}

// BalanceSettingLoadMatch is the typed request payload for BalanceSetting.LoadTyped.
type BalanceSettingLoadMatch struct {
	Expand *[]any `json:"expand,omitempty"`
}

// BalanceSettingCreateData is the typed request payload for BalanceSetting.CreateTyped.
type BalanceSettingCreateData struct {
	DebitNegativeBalances *bool `json:"debit_negative_balances,omitempty"`
	Payouts *any `json:"payouts,omitempty"`
	SettlementTiming map[string]any `json:"settlement_timing"`
}

// BalanceTransaction is the typed data model for the balance_transaction entity.
type BalanceTransaction struct {
}

// BalanceTransactionLoadMatch is the typed request payload for BalanceTransaction.LoadTyped.
type BalanceTransactionLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// BalanceTransactionListMatch is the typed request payload for BalanceTransaction.ListTyped.
type BalanceTransactionListMatch struct {
	Created *any `json:"created,omitempty"`
	Currency *string `json:"currency,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Payout *string `json:"payout,omitempty"`
	Source *string `json:"source,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Type *string `json:"type,omitempty"`
}

// BankAccount is the typed data model for the bank_account entity.
type BankAccount struct {
}

// BankAccountLoadMatch is the typed request payload for BankAccount.LoadTyped.
type BankAccountLoadMatch struct {
	CustomerId string `json:"customer_id"`
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// BankAccountListMatch is the typed request payload for BankAccount.ListTyped.
type BankAccountListMatch struct {
	CustomerId string `json:"customer_id"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// BankAccountCreateData is the typed request payload for BankAccount.CreateTyped.
type BankAccountCreateData struct {
	CustomerId string `json:"customer_id"`
	Id *string `json:"id,omitempty"`
	SourceId *string `json:"source_id,omitempty"`
	Account *any `json:"account,omitempty"`
	AccountHolderName *string `json:"account_holder_name,omitempty"`
	AccountHolderType *string `json:"account_holder_type,omitempty"`
	AccountType *string `json:"account_type,omitempty"`
	AvailablePayoutMethods *[]any `json:"available_payout_methods,omitempty"`
	BankName *string `json:"bank_name,omitempty"`
	Country string `json:"country"`
	Currency string `json:"currency"`
	Customer *any `json:"customer,omitempty"`
	DefaultForCurrency *bool `json:"default_for_currency,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	FutureRequirements *any `json:"future_requirements,omitempty"`
	Last4 string `json:"last4"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Object string `json:"object"`
	Requirements *any `json:"requirements,omitempty"`
	RoutingNumber *string `json:"routing_number,omitempty"`
	Status string `json:"status"`
}

// BankAccountRemoveMatch is the typed request payload for BankAccount.RemoveTyped.
type BankAccountRemoveMatch struct {
	CustomerId string `json:"customer_id"`
	Id string `json:"id"`
}

// Calculation is the typed data model for the calculation entity.
type Calculation struct {
}

// CalculationLoadMatch is the typed request payload for Calculation.LoadTyped.
type CalculationLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CalculationCreateData is the typed request payload for Calculation.CreateTyped.
type CalculationCreateData struct {
	AmountTotal int `json:"amount_total"`
	Currency string `json:"currency"`
	Customer *string `json:"customer,omitempty"`
	CustomerDetails map[string]any `json:"customer_details"`
	ExpiresAt *int `json:"expires_at,omitempty"`
	Id *string `json:"id,omitempty"`
	LineItems map[string]any `json:"line_items"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	ShipFromDetails *any `json:"ship_from_details,omitempty"`
	ShippingCost *any `json:"shipping_cost,omitempty"`
	TaxAmountExclusive int `json:"tax_amount_exclusive"`
	TaxAmountInclusive int `json:"tax_amount_inclusive"`
	TaxBreakdown []any `json:"tax_breakdown"`
	TaxDate int `json:"tax_date"`
}

// Capability is the typed data model for the capability entity.
type Capability struct {
}

// CapabilityLoadMatch is the typed request payload for Capability.LoadTyped.
type CapabilityLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CapabilityListMatch is the typed request payload for Capability.ListTyped.
type CapabilityListMatch struct {
	AccountId string `json:"account_id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CapabilityCreateData is the typed request payload for Capability.CreateTyped.
type CapabilityCreateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Account any `json:"account"`
	FutureRequirements map[string]any `json:"future_requirements"`
	Object string `json:"object"`
	Requested bool `json:"requested"`
	RequestedAt *int `json:"requested_at,omitempty"`
	Requirements map[string]any `json:"requirements"`
	Status string `json:"status"`
}

// Card is the typed data model for the card entity.
type Card struct {
}

// CardLoadMatch is the typed request payload for Card.LoadTyped.
type CardLoadMatch struct {
	CustomerId *string `json:"customer_id,omitempty"`
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CardListMatch is the typed request payload for Card.ListTyped.
type CardListMatch struct {
	Cardholder *string `json:"cardholder,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	ExpMonth *int `json:"exp_month,omitempty"`
	ExpYear *int `json:"exp_year,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Last4 *string `json:"last4,omitempty"`
	Limit *int `json:"limit,omitempty"`
	PersonalizationDesign *string `json:"personalization_design,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
}

// CardCreateData is the typed request payload for Card.CreateTyped.
type CardCreateData struct {
	Id string `json:"id"`
	Account *any `json:"account,omitempty"`
	AddressCity *string `json:"address_city,omitempty"`
	AddressCountry *string `json:"address_country,omitempty"`
	AddressLine1 *string `json:"address_line1,omitempty"`
	AddressLine1Check *string `json:"address_line1_check,omitempty"`
	AddressLine2 *string `json:"address_line2,omitempty"`
	AddressState *string `json:"address_state,omitempty"`
	AddressZip *string `json:"address_zip,omitempty"`
	AddressZipCheck *string `json:"address_zip_check,omitempty"`
	AllowRedisplay *bool `json:"allow_redisplay,omitempty"`
	AvailablePayoutMethods *[]any `json:"available_payout_methods,omitempty"`
	Brand string `json:"brand"`
	CancellationReason *string `json:"cancellation_reason,omitempty"`
	Cardholder map[string]any `json:"cardholder"`
	Country *string `json:"country,omitempty"`
	Created int `json:"created"`
	Currency *string `json:"currency,omitempty"`
	Customer *any `json:"customer,omitempty"`
	Cvc *string `json:"cvc,omitempty"`
	CvcCheck *string `json:"cvc_check,omitempty"`
	DefaultForCurrency *bool `json:"default_for_currency,omitempty"`
	DynamicLast4 *string `json:"dynamic_last4,omitempty"`
	ExpMonth int `json:"exp_month"`
	ExpYear int `json:"exp_year"`
	FinancialAccount *string `json:"financial_account,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	Funding string `json:"funding"`
	Last4 string `json:"last4"`
	LatestFraudWarning *any `json:"latest_fraud_warning,omitempty"`
	LifecycleControls *any `json:"lifecycle_controls,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name *string `json:"name,omitempty"`
	Networks *map[string]any `json:"networks,omitempty"`
	Number *string `json:"number,omitempty"`
	Object string `json:"object"`
	PersonalizationDesign *any `json:"personalization_design,omitempty"`
	RegulatedStatus *string `json:"regulated_status,omitempty"`
	ReplacedBy *any `json:"replaced_by,omitempty"`
	ReplacementFor *any `json:"replacement_for,omitempty"`
	ReplacementReason *string `json:"replacement_reason,omitempty"`
	SecondLine *string `json:"second_line,omitempty"`
	Shipping *any `json:"shipping,omitempty"`
	SpendingControls map[string]any `json:"spending_controls"`
	Status *string `json:"status,omitempty"`
	TokenizationMethod *string `json:"tokenization_method,omitempty"`
	Type string `json:"type"`
	Wallets *any `json:"wallets,omitempty"`
}

// CardRemoveMatch is the typed request payload for Card.RemoveTyped.
type CardRemoveMatch struct {
	CustomerId string `json:"customer_id"`
	Id string `json:"id"`
}

// Cardholder is the typed data model for the cardholder entity.
type Cardholder struct {
}

// CardholderLoadMatch is the typed request payload for Cardholder.LoadTyped.
type CardholderLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CardholderListMatch is the typed request payload for Cardholder.ListTyped.
type CardholderListMatch struct {
	Created *any `json:"created,omitempty"`
	Email *string `json:"email,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	PhoneNumber *string `json:"phone_number,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
}

// CardholderCreateData is the typed request payload for Cardholder.CreateTyped.
type CardholderCreateData struct {
	Id string `json:"id"`
	Billing map[string]any `json:"billing"`
	Company *any `json:"company,omitempty"`
	Created int `json:"created"`
	Email *string `json:"email,omitempty"`
	Individual *any `json:"individual,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Name string `json:"name"`
	Object string `json:"object"`
	PhoneNumber *string `json:"phone_number,omitempty"`
	PreferredLocales *[]any `json:"preferred_locales,omitempty"`
	Requirements map[string]any `json:"requirements"`
	SpendingControls *any `json:"spending_controls,omitempty"`
	Status string `json:"status"`
	Type string `json:"type"`
}

// CashBalance is the typed data model for the cash_balance entity.
type CashBalance struct {
}

// CashBalanceLoadMatch is the typed request payload for CashBalance.LoadTyped.
type CashBalanceLoadMatch struct {
	CustomerId string `json:"customer_id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CashBalanceCreateData is the typed request payload for CashBalance.CreateTyped.
type CashBalanceCreateData struct {
	CustomerId string `json:"customer_id"`
	Available *map[string]any `json:"available,omitempty"`
	Customer string `json:"customer"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	Settings map[string]any `json:"settings"`
}

// CashBalanceTransaction is the typed data model for the cash_balance_transaction entity.
type CashBalanceTransaction struct {
}

// CashBalanceTransactionLoadMatch is the typed request payload for CashBalanceTransaction.LoadTyped.
type CashBalanceTransactionLoadMatch struct {
	CustomerId string `json:"customer_id"`
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CashBalanceTransactionListMatch is the typed request payload for CashBalanceTransaction.ListTyped.
type CashBalanceTransactionListMatch struct {
	CustomerId string `json:"customer_id"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// Charge is the typed data model for the charge entity.
type Charge struct {
}

// ChargeLoadMatch is the typed request payload for Charge.LoadTyped.
type ChargeLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ChargeListMatch is the typed request payload for Charge.ListTyped.
type ChargeListMatch struct {
	Created *any `json:"created,omitempty"`
	Customer *string `json:"customer,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	PaymentIntent *string `json:"payment_intent,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	TransferGroup *string `json:"transfer_group,omitempty"`
}

// ChargeCreateData is the typed request payload for Charge.CreateTyped.
type ChargeCreateData struct {
	Id string `json:"id"`
	Amount int `json:"amount"`
	AmountCaptured int `json:"amount_captured"`
	AmountRefunded int `json:"amount_refunded"`
	Application *any `json:"application,omitempty"`
	ApplicationFee *any `json:"application_fee,omitempty"`
	ApplicationFeeAmount *int `json:"application_fee_amount,omitempty"`
	BalanceTransaction *any `json:"balance_transaction,omitempty"`
	BillingDetails map[string]any `json:"billing_details"`
	CalculatedStatementDescriptor *string `json:"calculated_statement_descriptor,omitempty"`
	Captured bool `json:"captured"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Customer *any `json:"customer,omitempty"`
	Description *string `json:"description,omitempty"`
	Disputed bool `json:"disputed"`
	FailureBalanceTransaction *any `json:"failure_balance_transaction,omitempty"`
	FailureCode *string `json:"failure_code,omitempty"`
	FailureMessage *string `json:"failure_message,omitempty"`
	FraudDetails *any `json:"fraud_details,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	OnBehalfOf *any `json:"on_behalf_of,omitempty"`
	Outcome *any `json:"outcome,omitempty"`
	Paid bool `json:"paid"`
	PaymentIntent *any `json:"payment_intent,omitempty"`
	PaymentMethod *string `json:"payment_method,omitempty"`
	PaymentMethodDetails *any `json:"payment_method_details,omitempty"`
	PresentmentDetails map[string]any `json:"presentment_details"`
	RadarOptions *map[string]any `json:"radar_options,omitempty"`
	ReceiptEmail *string `json:"receipt_email,omitempty"`
	ReceiptNumber *string `json:"receipt_number,omitempty"`
	ReceiptUrl *string `json:"receipt_url,omitempty"`
	Refunded bool `json:"refunded"`
	Refunds map[string]any `json:"refunds"`
	Review *any `json:"review,omitempty"`
	Shipping *any `json:"shipping,omitempty"`
	SourceTransfer *any `json:"source_transfer,omitempty"`
	StatementDescriptor *string `json:"statement_descriptor,omitempty"`
	StatementDescriptorSuffix *string `json:"statement_descriptor_suffix,omitempty"`
	Status string `json:"status"`
	Transfer *any `json:"transfer,omitempty"`
	TransferData *any `json:"transfer_data,omitempty"`
	TransferGroup *string `json:"transfer_group,omitempty"`
}

// Configuration is the typed data model for the configuration entity.
type Configuration struct {
}

// ConfigurationLoadMatch is the typed request payload for Configuration.LoadTyped.
type ConfigurationLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ConfigurationListMatch is the typed request payload for Configuration.ListTyped.
type ConfigurationListMatch struct {
	Active *bool `json:"active,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	IsDefault *bool `json:"is_default,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// ConfigurationCreateData is the typed request payload for Configuration.CreateTyped.
type ConfigurationCreateData struct {
	Id string `json:"id"`
	Active bool `json:"active"`
	Application *any `json:"application,omitempty"`
	BbposWisepad3 *map[string]any `json:"bbpos_wisepad3,omitempty"`
	BbposWiseposE *map[string]any `json:"bbpos_wisepos_e,omitempty"`
	BusinessProfile map[string]any `json:"business_profile"`
	Cellular map[string]any `json:"cellular"`
	Created int `json:"created"`
	DefaultReturnUrl *string `json:"default_return_url,omitempty"`
	Features map[string]any `json:"features"`
	IsAccountDefault *bool `json:"is_account_default,omitempty"`
	IsDefault bool `json:"is_default"`
	Livemode bool `json:"livemode"`
	LoginPage map[string]any `json:"login_page"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name *string `json:"name,omitempty"`
	Object string `json:"object"`
	Offline *map[string]any `json:"offline,omitempty"`
	RebootWindow map[string]any `json:"reboot_window"`
	StripeS700 *map[string]any `json:"stripe_s700,omitempty"`
	StripeS710 *map[string]any `json:"stripe_s710,omitempty"`
	Tipping *map[string]any `json:"tipping,omitempty"`
	Updated int `json:"updated"`
	VerifoneM425 *map[string]any `json:"verifone_m425,omitempty"`
	VerifoneP400 *map[string]any `json:"verifone_p400,omitempty"`
	VerifoneP630 *map[string]any `json:"verifone_p630,omitempty"`
	VerifoneUx700 *map[string]any `json:"verifone_ux700,omitempty"`
	VerifoneV660p *map[string]any `json:"verifone_v660p,omitempty"`
	Wifi map[string]any `json:"wifi"`
}

// ConfigurationRemoveMatch is the typed request payload for Configuration.RemoveTyped.
type ConfigurationRemoveMatch struct {
	Id string `json:"id"`
}

// ConfirmationToken is the typed data model for the confirmation_token entity.
type ConfirmationToken struct {
}

// ConfirmationTokenLoadMatch is the typed request payload for ConfirmationToken.LoadTyped.
type ConfirmationTokenLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ConfirmationTokenCreateData is the typed request payload for ConfirmationToken.CreateTyped.
type ConfirmationTokenCreateData struct {
	Created int `json:"created"`
	ExpiresAt *int `json:"expires_at,omitempty"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	MandateData *any `json:"mandate_data,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Object string `json:"object"`
	PaymentIntent *string `json:"payment_intent,omitempty"`
	PaymentMethodOptions *any `json:"payment_method_options,omitempty"`
	PaymentMethodPreview *any `json:"payment_method_preview,omitempty"`
	ReturnUrl *string `json:"return_url,omitempty"`
	SetupFutureUsage *string `json:"setup_future_usage,omitempty"`
	SetupIntent *string `json:"setup_intent,omitempty"`
	Shipping *any `json:"shipping,omitempty"`
	UseStripeSdk bool `json:"use_stripe_sdk"`
}

// ConnectionToken is the typed data model for the connection_token entity.
type ConnectionToken struct {
}

// ConnectionTokenCreateData is the typed request payload for ConnectionToken.CreateTyped.
type ConnectionTokenCreateData struct {
	Location *string `json:"location,omitempty"`
	Object string `json:"object"`
	Secret string `json:"secret"`
}

// CountrySpec is the typed data model for the country_spec entity.
type CountrySpec struct {
}

// CountrySpecLoadMatch is the typed request payload for CountrySpec.LoadTyped.
type CountrySpecLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CountrySpecListMatch is the typed request payload for CountrySpec.ListTyped.
type CountrySpecListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// Coupon is the typed data model for the coupon entity.
type Coupon struct {
}

// CouponLoadMatch is the typed request payload for Coupon.LoadTyped.
type CouponLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CouponListMatch is the typed request payload for Coupon.ListTyped.
type CouponListMatch struct {
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// CouponCreateData is the typed request payload for Coupon.CreateTyped.
type CouponCreateData struct {
	Id string `json:"id"`
	AmountOff *int `json:"amount_off,omitempty"`
	AppliesTo map[string]any `json:"applies_to"`
	Created int `json:"created"`
	Currency *string `json:"currency,omitempty"`
	CurrencyOptions *map[string]any `json:"currency_options,omitempty"`
	Duration string `json:"duration"`
	DurationInMonths *int `json:"duration_in_months,omitempty"`
	Livemode bool `json:"livemode"`
	MaxRedemptions *int `json:"max_redemptions,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name *string `json:"name,omitempty"`
	Object string `json:"object"`
	PercentOff *float64 `json:"percent_off,omitempty"`
	RedeemBy *int `json:"redeem_by,omitempty"`
	TimesRedeemed int `json:"times_redeemed"`
	Valid bool `json:"valid"`
}

// CreditBalanceSummary is the typed data model for the credit_balance_summary entity.
type CreditBalanceSummary struct {
}

// CreditBalanceSummaryListMatch is the typed request payload for CreditBalanceSummary.ListTyped.
type CreditBalanceSummaryListMatch struct {
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Filter map[string]any `json:"filter"`
}

// CreditBalanceTransaction is the typed data model for the credit_balance_transaction entity.
type CreditBalanceTransaction struct {
}

// CreditBalanceTransactionLoadMatch is the typed request payload for CreditBalanceTransaction.LoadTyped.
type CreditBalanceTransactionLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CreditBalanceTransactionListMatch is the typed request payload for CreditBalanceTransaction.ListTyped.
type CreditBalanceTransactionListMatch struct {
	CreditGrant *string `json:"credit_grant,omitempty"`
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// CreditGrant is the typed data model for the credit_grant entity.
type CreditGrant struct {
}

// CreditGrantLoadMatch is the typed request payload for CreditGrant.LoadTyped.
type CreditGrantLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CreditGrantListMatch is the typed request payload for CreditGrant.ListTyped.
type CreditGrantListMatch struct {
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// CreditGrantCreateData is the typed request payload for CreditGrant.CreateTyped.
type CreditGrantCreateData struct {
	Id string `json:"id"`
	Amount map[string]any `json:"amount"`
	ApplicabilityConfig map[string]any `json:"applicability_config"`
	Category string `json:"category"`
	Created int `json:"created"`
	Customer any `json:"customer"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	EffectiveAt *int `json:"effective_at,omitempty"`
	ExpiresAt *int `json:"expires_at,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Name *string `json:"name,omitempty"`
	Object string `json:"object"`
	Priority *int `json:"priority,omitempty"`
	TestClock *any `json:"test_clock,omitempty"`
	Updated int `json:"updated"`
	VoidedAt *int `json:"voided_at,omitempty"`
}

// CreditNote is the typed data model for the credit_note entity.
type CreditNote struct {
}

// CreditNoteLoadMatch is the typed request payload for CreditNote.LoadTyped.
type CreditNoteLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CreditNoteListMatch is the typed request payload for CreditNote.ListTyped.
type CreditNoteListMatch struct {
	Created *any `json:"created,omitempty"`
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Invoice *string `json:"invoice,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// CreditNoteCreateData is the typed request payload for CreditNote.CreateTyped.
type CreditNoteCreateData struct {
	Id string `json:"id"`
	Amount int `json:"amount"`
	AmountShipping int `json:"amount_shipping"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Customer any `json:"customer"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	CustomerBalanceTransaction *any `json:"customer_balance_transaction,omitempty"`
	DiscountAmount int `json:"discount_amount"`
	DiscountAmounts []any `json:"discount_amounts"`
	EffectiveAt *int `json:"effective_at,omitempty"`
	Invoice any `json:"invoice"`
	Lines map[string]any `json:"lines"`
	Livemode bool `json:"livemode"`
	Memo *string `json:"memo,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Number string `json:"number"`
	Object string `json:"object"`
	OutOfBandAmount *int `json:"out_of_band_amount,omitempty"`
	Pdf string `json:"pdf"`
	PostPaymentAmount int `json:"post_payment_amount"`
	PrePaymentAmount int `json:"pre_payment_amount"`
	PretaxCreditAmounts []any `json:"pretax_credit_amounts"`
	Reason *string `json:"reason,omitempty"`
	Refunds []any `json:"refunds"`
	ShippingCost *any `json:"shipping_cost,omitempty"`
	Status string `json:"status"`
	Subtotal int `json:"subtotal"`
	SubtotalExcludingTax *int `json:"subtotal_excluding_tax,omitempty"`
	Total int `json:"total"`
	TotalExcludingTax *int `json:"total_excluding_tax,omitempty"`
	TotalTaxes *[]any `json:"total_taxes,omitempty"`
	Type string `json:"type"`
	VoidedAt *int `json:"voided_at,omitempty"`
}

// CreditNoteLine is the typed data model for the credit_note_line entity.
type CreditNoteLine struct {
}

// CreditNoteLineListMatch is the typed request payload for CreditNoteLine.ListTyped.
type CreditNoteLineListMatch struct {
	Id string `json:"id"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// CreditReversal is the typed data model for the credit_reversal entity.
type CreditReversal struct {
}

// CreditReversalLoadMatch is the typed request payload for CreditReversal.LoadTyped.
type CreditReversalLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CreditReversalListMatch is the typed request payload for CreditReversal.ListTyped.
type CreditReversalListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	FinancialAccount string `json:"financial_account"`
	Limit *int `json:"limit,omitempty"`
	ReceivedCredit *string `json:"received_credit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// CreditReversalCreateData is the typed request payload for CreditReversal.CreateTyped.
type CreditReversalCreateData struct {
	Amount int `json:"amount"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	FinancialAccount string `json:"financial_account"`
	HostedRegulatoryReceiptUrl *string `json:"hosted_regulatory_receipt_url,omitempty"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Network string `json:"network"`
	Object string `json:"object"`
	ReceivedCredit string `json:"received_credit"`
	Status string `json:"status"`
	StatusTransitions map[string]any `json:"status_transitions"`
	Transaction *any `json:"transaction,omitempty"`
}

// Customer is the typed data model for the customer entity.
type Customer struct {
}

// CustomerLoadMatch is the typed request payload for Customer.LoadTyped.
type CustomerLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CustomerListMatch is the typed request payload for Customer.ListTyped.
type CustomerListMatch struct {
	Created *any `json:"created,omitempty"`
	Email *string `json:"email,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	TestClock *string `json:"test_clock,omitempty"`
}

// CustomerCreateData is the typed request payload for Customer.CreateTyped.
type CustomerCreateData struct {
	Id string `json:"id"`
	Address *any `json:"address,omitempty"`
	Balance *int `json:"balance,omitempty"`
	BusinessName *string `json:"business_name,omitempty"`
	CashBalance *any `json:"cash_balance,omitempty"`
	Created int `json:"created"`
	Currency *string `json:"currency,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	DefaultSource *any `json:"default_source,omitempty"`
	Delinquent *bool `json:"delinquent,omitempty"`
	Description *string `json:"description,omitempty"`
	Discount *any `json:"discount,omitempty"`
	Email *string `json:"email,omitempty"`
	IndividualName *string `json:"individual_name,omitempty"`
	InvoiceCreditBalance *map[string]any `json:"invoice_credit_balance,omitempty"`
	InvoicePrefix *string `json:"invoice_prefix,omitempty"`
	InvoiceSettings *map[string]any `json:"invoice_settings,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name *string `json:"name,omitempty"`
	NextInvoiceSequence *int `json:"next_invoice_sequence,omitempty"`
	Object string `json:"object"`
	Phone *string `json:"phone,omitempty"`
	PreferredLocales *[]any `json:"preferred_locales,omitempty"`
	Shipping *any `json:"shipping,omitempty"`
	Sources map[string]any `json:"sources"`
	Subscriptions map[string]any `json:"subscriptions"`
	Tax map[string]any `json:"tax"`
	TaxExempt *string `json:"tax_exempt,omitempty"`
	TaxIds map[string]any `json:"tax_ids"`
	TestClock *any `json:"test_clock,omitempty"`
}

// CustomerRemoveMatch is the typed request payload for Customer.RemoveTyped.
type CustomerRemoveMatch struct {
	Id string `json:"id"`
}

// CustomerBalanceTransaction is the typed data model for the customer_balance_transaction entity.
type CustomerBalanceTransaction struct {
}

// CustomerBalanceTransactionLoadMatch is the typed request payload for CustomerBalanceTransaction.LoadTyped.
type CustomerBalanceTransactionLoadMatch struct {
	CustomerId string `json:"customer_id"`
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// CustomerBalanceTransactionCreateData is the typed request payload for CustomerBalanceTransaction.CreateTyped.
type CustomerBalanceTransactionCreateData struct {
	CustomerId *string `json:"customer_id,omitempty"`
	Id string `json:"id"`
	Amount int `json:"amount"`
	CheckoutSession *any `json:"checkout_session,omitempty"`
	Created int `json:"created"`
	CreditNote *any `json:"credit_note,omitempty"`
	Currency string `json:"currency"`
	Customer any `json:"customer"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	Description *string `json:"description,omitempty"`
	EndingBalance int `json:"ending_balance"`
	Invoice *any `json:"invoice,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Object string `json:"object"`
	Type string `json:"type"`
}

// CustomerSession is the typed data model for the customer_session entity.
type CustomerSession struct {
}

// CustomerSessionCreateData is the typed request payload for CustomerSession.CreateTyped.
type CustomerSessionCreateData struct {
	ClientSecret string `json:"client_secret"`
	Components map[string]any `json:"components"`
	Created int `json:"created"`
	Customer any `json:"customer"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	ExpiresAt int `json:"expires_at"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
}

// DebitReversal is the typed data model for the debit_reversal entity.
type DebitReversal struct {
}

// DebitReversalLoadMatch is the typed request payload for DebitReversal.LoadTyped.
type DebitReversalLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// DebitReversalListMatch is the typed request payload for DebitReversal.ListTyped.
type DebitReversalListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	FinancialAccount string `json:"financial_account"`
	Limit *int `json:"limit,omitempty"`
	ReceivedDebit *string `json:"received_debit,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// DebitReversalCreateData is the typed request payload for DebitReversal.CreateTyped.
type DebitReversalCreateData struct {
	Amount int `json:"amount"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	FinancialAccount *string `json:"financial_account,omitempty"`
	HostedRegulatoryReceiptUrl *string `json:"hosted_regulatory_receipt_url,omitempty"`
	Id string `json:"id"`
	LinkedFlows *any `json:"linked_flows,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Network string `json:"network"`
	Object string `json:"object"`
	ReceivedDebit string `json:"received_debit"`
	Status string `json:"status"`
	StatusTransitions map[string]any `json:"status_transitions"`
	Transaction *any `json:"transaction,omitempty"`
}

// DeletedAccount is the typed data model for the deleted_account entity.
type DeletedAccount struct {
}

// DeletedAccountRemoveMatch is the typed request payload for DeletedAccount.RemoveTyped.
type DeletedAccountRemoveMatch struct {
	Id string `json:"id"`
}

// DeletedApplePayDomain is the typed data model for the deleted_apple_pay_domain entity.
type DeletedApplePayDomain struct {
}

// DeletedApplePayDomainRemoveMatch is the typed request payload for DeletedApplePayDomain.RemoveTyped.
type DeletedApplePayDomainRemoveMatch struct {
	Id string `json:"id"`
}

// DeletedCoupon is the typed data model for the deleted_coupon entity.
type DeletedCoupon struct {
}

// DeletedCouponRemoveMatch is the typed request payload for DeletedCoupon.RemoveTyped.
type DeletedCouponRemoveMatch struct {
	Id string `json:"id"`
}

// DeletedExternalAccount is the typed data model for the deleted_external_account entity.
type DeletedExternalAccount struct {
}

// DeletedExternalAccountRemoveMatch is the typed request payload for DeletedExternalAccount.RemoveTyped.
type DeletedExternalAccountRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DeletedInvoiceitem is the typed data model for the deleted_invoiceitem entity.
type DeletedInvoiceitem struct {
}

// DeletedInvoiceitemRemoveMatch is the typed request payload for DeletedInvoiceitem.RemoveTyped.
type DeletedInvoiceitemRemoveMatch struct {
	Id string `json:"id"`
}

// DeletedPerson is the typed data model for the deleted_person entity.
type DeletedPerson struct {
}

// DeletedPersonRemoveMatch is the typed request payload for DeletedPerson.RemoveTyped.
type DeletedPersonRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DeletedPlan is the typed data model for the deleted_plan entity.
type DeletedPlan struct {
}

// DeletedPlanRemoveMatch is the typed request payload for DeletedPlan.RemoveTyped.
type DeletedPlanRemoveMatch struct {
	Id string `json:"id"`
}

// DeletedProductFeature is the typed data model for the deleted_product_feature entity.
type DeletedProductFeature struct {
}

// DeletedProductFeatureRemoveMatch is the typed request payload for DeletedProductFeature.RemoveTyped.
type DeletedProductFeatureRemoveMatch struct {
	Id string `json:"id"`
	ProductId string `json:"product_id"`
}

// DeletedSubscriptionItem is the typed data model for the deleted_subscription_item entity.
type DeletedSubscriptionItem struct {
}

// DeletedSubscriptionItemRemoveMatch is the typed request payload for DeletedSubscriptionItem.RemoveTyped.
type DeletedSubscriptionItemRemoveMatch struct {
	Id string `json:"id"`
}

// DeletedWebhookEndpoint is the typed data model for the deleted_webhook_endpoint entity.
type DeletedWebhookEndpoint struct {
}

// DeletedWebhookEndpointRemoveMatch is the typed request payload for DeletedWebhookEndpoint.RemoveTyped.
type DeletedWebhookEndpointRemoveMatch struct {
	Id string `json:"id"`
}

// Discount is the typed data model for the discount entity.
type Discount struct {
}

// DiscountLoadMatch is the typed request payload for Discount.LoadTyped.
type DiscountLoadMatch struct {
	CustomerId string `json:"customer_id"`
	SubscriptionId *string `json:"subscription_id,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
}

// DiscountRemoveMatch is the typed request payload for Discount.RemoveTyped.
type DiscountRemoveMatch struct {
	CustomerId string `json:"customer_id"`
}

// Dispute is the typed data model for the dispute entity.
type Dispute struct {
}

// DisputeLoadMatch is the typed request payload for Dispute.LoadTyped.
type DisputeLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// DisputeListMatch is the typed request payload for Dispute.ListTyped.
type DisputeListMatch struct {
	Charge *string `json:"charge,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	PaymentIntent *string `json:"payment_intent,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// DisputeCreateData is the typed request payload for Dispute.CreateTyped.
type DisputeCreateData struct {
	Id string `json:"id"`
	Amount int `json:"amount"`
	BalanceTransactions []any `json:"balance_transactions"`
	Charge any `json:"charge"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	EnhancedEligibilityTypes []any `json:"enhanced_eligibility_types"`
	Evidence map[string]any `json:"evidence"`
	EvidenceDetails map[string]any `json:"evidence_details"`
	IsChargeRefundable bool `json:"is_charge_refundable"`
	Livemode bool `json:"livemode"`
	LossReason *string `json:"loss_reason,omitempty"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	PaymentIntent *any `json:"payment_intent,omitempty"`
	PaymentMethodDetails map[string]any `json:"payment_method_details"`
	Reason string `json:"reason"`
	Status string `json:"status"`
	Transaction any `json:"transaction"`
	Treasury *any `json:"treasury,omitempty"`
}

// Domain is the typed data model for the domain entity.
type Domain struct {
}

// DomainListMatch is the typed request payload for Domain.ListTyped.
type DomainListMatch struct {
	DomainName *string `json:"domain_name,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// EarlyFraudWarning is the typed data model for the early_fraud_warning entity.
type EarlyFraudWarning struct {
}

// EarlyFraudWarningLoadMatch is the typed request payload for EarlyFraudWarning.LoadTyped.
type EarlyFraudWarningLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// EarlyFraudWarningListMatch is the typed request payload for EarlyFraudWarning.ListTyped.
type EarlyFraudWarningListMatch struct {
	Charge *string `json:"charge,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	PaymentIntent *string `json:"payment_intent,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// EphemeralKey is the typed data model for the ephemeral_key entity.
type EphemeralKey struct {
}

// EphemeralKeyCreateData is the typed request payload for EphemeralKey.CreateTyped.
type EphemeralKeyCreateData struct {
	Created int `json:"created"`
	Expires int `json:"expires"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	Secret *string `json:"secret,omitempty"`
}

// EphemeralKeyRemoveMatch is the typed request payload for EphemeralKey.RemoveTyped.
type EphemeralKeyRemoveMatch struct {
	Id string `json:"id"`
}

// Event is the typed data model for the event entity.
type Event struct {
}

// EventLoadMatch is the typed request payload for Event.LoadTyped.
type EventLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// EventListMatch is the typed request payload for Event.ListTyped.
type EventListMatch struct {
	Created *any `json:"created,omitempty"`
	DeliverySuccess *bool `json:"delivery_success,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ExchangeRate is the typed data model for the exchange_rate entity.
type ExchangeRate struct {
}

// ExchangeRateLoadMatch is the typed request payload for ExchangeRate.LoadTyped.
type ExchangeRateLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ExchangeRateListMatch is the typed request payload for ExchangeRate.ListTyped.
type ExchangeRateListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// ExternalAccount is the typed data model for the external_account entity.
type ExternalAccount struct {
}

// ExternalAccountLoadMatch is the typed request payload for ExternalAccount.LoadTyped.
type ExternalAccountLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ExternalAccountListMatch is the typed request payload for ExternalAccount.ListTyped.
type ExternalAccountListMatch struct {
	AccountId string `json:"account_id"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Object *string `json:"object,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// ExternalAccountCreateData is the typed request payload for ExternalAccount.CreateTyped.
type ExternalAccountCreateData struct {
	Id string `json:"id"`
	Data []any `json:"data"`
	HasMore bool `json:"has_more"`
	Object string `json:"object"`
	Url string `json:"url"`
}

// Feature is the typed data model for the feature entity.
type Feature struct {
}

// FeatureLoadMatch is the typed request payload for Feature.LoadTyped.
type FeatureLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// FeatureListMatch is the typed request payload for Feature.ListTyped.
type FeatureListMatch struct {
	Archived *bool `json:"archived,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LookupKey *string `json:"lookup_key,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// FeatureCreateData is the typed request payload for Feature.CreateTyped.
type FeatureCreateData struct {
	Id string `json:"id"`
	Active bool `json:"active"`
	EntitlementFeature map[string]any `json:"entitlement_feature"`
	Livemode bool `json:"livemode"`
	LookupKey string `json:"lookup_key"`
	Metadata map[string]any `json:"metadata"`
	Name string `json:"name"`
	Object string `json:"object"`
}

// FeedbackOption is the typed data model for the feedback_option entity.
type FeedbackOption struct {
}

// FeedbackOptionLoadMatch is the typed request payload for FeedbackOption.LoadTyped.
type FeedbackOptionLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// FeedbackOptionListMatch is the typed request payload for FeedbackOption.ListTyped.
type FeedbackOptionListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// FeedbackOptionCreateData is the typed request payload for FeedbackOption.CreateTyped.
type FeedbackOptionCreateData struct {
	Id string `json:"id"`
	DeactivatedAt *int `json:"deactivated_at,omitempty"`
	Description string `json:"description"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	Status string `json:"status"`
	StatusTransitions map[string]any `json:"status_transitions"`
}

// File is the typed data model for the file entity.
type File struct {
}

// FileLoadMatch is the typed request payload for File.LoadTyped.
type FileLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// FileListMatch is the typed request payload for File.ListTyped.
type FileListMatch struct {
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Purpose *string `json:"purpose,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// FileCreateData is the typed request payload for File.CreateTyped.
type FileCreateData struct {
	Created int `json:"created"`
	Data []any `json:"data"`
	ExpiresAt *int `json:"expires_at,omitempty"`
	Filename *string `json:"filename,omitempty"`
	HasMore bool `json:"has_more"`
	Id string `json:"id"`
	Links map[string]any `json:"links"`
	Object string `json:"object"`
	Purpose string `json:"purpose"`
	Size int `json:"size"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	Url string `json:"url"`
}

// FileLink is the typed data model for the file_link entity.
type FileLink struct {
}

// FileLinkLoadMatch is the typed request payload for FileLink.LoadTyped.
type FileLinkLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// FileLinkListMatch is the typed request payload for FileLink.ListTyped.
type FileLinkListMatch struct {
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Expired *bool `json:"expired,omitempty"`
	File *string `json:"file,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// FileLinkCreateData is the typed request payload for FileLink.CreateTyped.
type FileLinkCreateData struct {
	Id string `json:"id"`
	Created int `json:"created"`
	Expired bool `json:"expired"`
	ExpiresAt *int `json:"expires_at,omitempty"`
	File any `json:"file"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	Url *string `json:"url,omitempty"`
}

// FinancialAccount is the typed data model for the financial_account entity.
type FinancialAccount struct {
}

// FinancialAccountLoadMatch is the typed request payload for FinancialAccount.LoadTyped.
type FinancialAccountLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// FinancialAccountListMatch is the typed request payload for FinancialAccount.ListTyped.
type FinancialAccountListMatch struct {
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// FinancialAccountCreateData is the typed request payload for FinancialAccount.CreateTyped.
type FinancialAccountCreateData struct {
	Id string `json:"id"`
	ActiveFeatures *[]any `json:"active_features,omitempty"`
	Balance map[string]any `json:"balance"`
	Country string `json:"country"`
	Created int `json:"created"`
	Features map[string]any `json:"features"`
	FinancialAddresses []any `json:"financial_addresses"`
	IsDefault *bool `json:"is_default,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Nickname *string `json:"nickname,omitempty"`
	Object string `json:"object"`
	PendingFeatures *[]any `json:"pending_features,omitempty"`
	PlatformRestrictions *any `json:"platform_restrictions,omitempty"`
	RestrictedFeatures *[]any `json:"restricted_features,omitempty"`
	Status string `json:"status"`
	StatusDetails map[string]any `json:"status_details"`
	SupportedCurrencies []any `json:"supported_currencies"`
}

// FinancialAccountFeature is the typed data model for the financial_account_feature entity.
type FinancialAccountFeature struct {
}

// FinancialAccountFeatureLoadMatch is the typed request payload for FinancialAccountFeature.LoadTyped.
type FinancialAccountFeatureLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// FinancialAccountFeatureCreateData is the typed request payload for FinancialAccountFeature.CreateTyped.
type FinancialAccountFeatureCreateData struct {
	Id string `json:"id"`
	CardIssuing map[string]any `json:"card_issuing"`
	DepositInsurance map[string]any `json:"deposit_insurance"`
	FinancialAddresses *map[string]any `json:"financial_addresses,omitempty"`
	InboundTransfers *map[string]any `json:"inbound_transfers,omitempty"`
	IntraStripeFlows map[string]any `json:"intra_stripe_flows"`
	Object string `json:"object"`
	OutboundPayments *map[string]any `json:"outbound_payments,omitempty"`
	OutboundTransfers *map[string]any `json:"outbound_transfers,omitempty"`
}

// FundCashBalance is the typed data model for the fund_cash_balance entity.
type FundCashBalance struct {
}

// FundCashBalanceCreateData is the typed request payload for FundCashBalance.CreateTyped.
type FundCashBalanceCreateData struct {
	CustomerId string `json:"customer_id"`
	AdjustedForOverdraft map[string]any `json:"adjusted_for_overdraft"`
	AppliedToPayment map[string]any `json:"applied_to_payment"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Customer any `json:"customer"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	EndingBalance int `json:"ending_balance"`
	Funded map[string]any `json:"funded"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	NetAmount int `json:"net_amount"`
	Object string `json:"object"`
	RefundedFromPayment map[string]any `json:"refunded_from_payment"`
	TransferredToBalance map[string]any `json:"transferred_to_balance"`
	Type string `json:"type"`
	UnappliedFromPayment map[string]any `json:"unapplied_from_payment"`
}

// FundingInstruction is the typed data model for the funding_instruction entity.
type FundingInstruction struct {
}

// FundingInstructionCreateData is the typed request payload for FundingInstruction.CreateTyped.
type FundingInstructionCreateData struct {
	CustomerId string `json:"customer_id"`
	Country string `json:"country"`
	FinancialAddresses []any `json:"financial_addresses"`
	Type string `json:"type"`
}

// History is the typed data model for the history entity.
type History struct {
}

// HistoryListMatch is the typed request payload for History.ListTyped.
type HistoryListMatch struct {
	Created *any `json:"created,omitempty"`
	Currency *string `json:"currency,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Payout *string `json:"payout,omitempty"`
	Source *string `json:"source,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Type *string `json:"type,omitempty"`
}

// InboundTransfer is the typed data model for the inbound_transfer entity.
type InboundTransfer struct {
}

// InboundTransferLoadMatch is the typed request payload for InboundTransfer.LoadTyped.
type InboundTransferLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// InboundTransferListMatch is the typed request payload for InboundTransfer.ListTyped.
type InboundTransferListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	FinancialAccount string `json:"financial_account"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// InboundTransferCreateData is the typed request payload for InboundTransfer.CreateTyped.
type InboundTransferCreateData struct {
	Amount int `json:"amount"`
	Cancelable bool `json:"cancelable"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Description *string `json:"description,omitempty"`
	FailureDetails *any `json:"failure_details,omitempty"`
	FinancialAccount string `json:"financial_account"`
	HostedRegulatoryReceiptUrl *string `json:"hosted_regulatory_receipt_url,omitempty"`
	Id string `json:"id"`
	LinkedFlows map[string]any `json:"linked_flows"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	OriginPaymentMethod *string `json:"origin_payment_method,omitempty"`
	OriginPaymentMethodDetails *any `json:"origin_payment_method_details,omitempty"`
	Returned *bool `json:"returned,omitempty"`
	StatementDescriptor string `json:"statement_descriptor"`
	Status string `json:"status"`
	StatusTransitions map[string]any `json:"status_transitions"`
	Transaction *any `json:"transaction,omitempty"`
}

// Install is the typed data model for the install entity.
type Install struct {
}

// InstallLoadMatch is the typed request payload for Install.LoadTyped.
type InstallLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// InstallListMatch is the typed request payload for Install.ListTyped.
type InstallListMatch struct {
	Account *string `json:"account,omitempty"`
	App *string `json:"app,omitempty"`
	ApprovalRequired *bool `json:"approval_required,omitempty"`
	Channel *string `json:"channel,omitempty"`
	Created *any `json:"created,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// InstallCreateData is the typed request payload for Install.CreateTyped.
type InstallCreateData struct {
	Id string `json:"id"`
	Account string `json:"account"`
	App string `json:"app"`
	ApprovalRequired bool `json:"approval_required"`
	AuthCode *string `json:"auth_code,omitempty"`
	Channel string `json:"channel"`
	ContentSecurityPolicyGranted map[string]any `json:"content_security_policy_granted"`
	ContentSecurityPolicyPending map[string]any `json:"content_security_policy_pending"`
	Created int `json:"created"`
	CreatedBy *string `json:"created_by,omitempty"`
	EndpointsGranted []any `json:"endpoints_granted"`
	EndpointsPending []any `json:"endpoints_pending"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	PermissionsGranted []any `json:"permissions_granted"`
	PermissionsPending []any `json:"permissions_pending"`
	Status string `json:"status"`
}

// Invoice is the typed data model for the invoice entity.
type Invoice struct {
}

// InvoiceLoadMatch is the typed request payload for Invoice.LoadTyped.
type InvoiceLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// InvoiceListMatch is the typed request payload for Invoice.ListTyped.
type InvoiceListMatch struct {
	CollectionMethod *string `json:"collection_method,omitempty"`
	Created *any `json:"created,omitempty"`
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	DueDate *any `json:"due_date,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
	Subscription *string `json:"subscription,omitempty"`
}

// InvoiceCreateData is the typed request payload for Invoice.CreateTyped.
type InvoiceCreateData struct {
	Id string `json:"id"`
	AccountCountry *string `json:"account_country,omitempty"`
	AccountName *string `json:"account_name,omitempty"`
	AccountTaxIds *[]any `json:"account_tax_ids,omitempty"`
	AmountDue int `json:"amount_due"`
	AmountOverpaid int `json:"amount_overpaid"`
	AmountPaid int `json:"amount_paid"`
	AmountPaidOffStripe int `json:"amount_paid_off_stripe"`
	AmountRemaining int `json:"amount_remaining"`
	AmountShipping int `json:"amount_shipping"`
	Application *any `json:"application,omitempty"`
	AttemptCount int `json:"attempt_count"`
	Attempted bool `json:"attempted"`
	AutoAdvance bool `json:"auto_advance"`
	AutomaticTax map[string]any `json:"automatic_tax"`
	AutomaticallyFinalizesAt *int `json:"automatically_finalizes_at,omitempty"`
	BillingReason *string `json:"billing_reason,omitempty"`
	CollectionMethod string `json:"collection_method"`
	ConfirmationSecret *any `json:"confirmation_secret,omitempty"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	CustomFields *[]any `json:"custom_fields,omitempty"`
	Customer any `json:"customer"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	CustomerAddress *any `json:"customer_address,omitempty"`
	CustomerEmail *string `json:"customer_email,omitempty"`
	CustomerName *string `json:"customer_name,omitempty"`
	CustomerPhone *string `json:"customer_phone,omitempty"`
	CustomerShipping *any `json:"customer_shipping,omitempty"`
	CustomerTaxExempt *string `json:"customer_tax_exempt,omitempty"`
	CustomerTaxIds *[]any `json:"customer_tax_ids,omitempty"`
	DefaultPaymentMethod *any `json:"default_payment_method,omitempty"`
	DefaultSource *any `json:"default_source,omitempty"`
	DefaultTaxRates []any `json:"default_tax_rates"`
	Description *string `json:"description,omitempty"`
	Discounts []any `json:"discounts"`
	DueDate *int `json:"due_date,omitempty"`
	EffectiveAt *int `json:"effective_at,omitempty"`
	EndingBalance *int `json:"ending_balance,omitempty"`
	Footer *string `json:"footer,omitempty"`
	FromInvoice *any `json:"from_invoice,omitempty"`
	HostedInvoiceUrl *string `json:"hosted_invoice_url,omitempty"`
	InvoicePdf *string `json:"invoice_pdf,omitempty"`
	Issuer map[string]any `json:"issuer"`
	LastFinalizationError *any `json:"last_finalization_error,omitempty"`
	LatestRevision *any `json:"latest_revision,omitempty"`
	Lines map[string]any `json:"lines"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	NextPaymentAttempt *int `json:"next_payment_attempt,omitempty"`
	Number *string `json:"number,omitempty"`
	Object string `json:"object"`
	OnBehalfOf *any `json:"on_behalf_of,omitempty"`
	Parent *any `json:"parent,omitempty"`
	PaymentSettings map[string]any `json:"payment_settings"`
	Payments map[string]any `json:"payments"`
	PeriodEnd int `json:"period_end"`
	PeriodStart int `json:"period_start"`
	PostPaymentCreditNotesAmount int `json:"post_payment_credit_notes_amount"`
	PrePaymentCreditNotesAmount int `json:"pre_payment_credit_notes_amount"`
	ReceiptNumber *string `json:"receipt_number,omitempty"`
	Rendering *any `json:"rendering,omitempty"`
	ShippingCost *any `json:"shipping_cost,omitempty"`
	ShippingDetails *any `json:"shipping_details,omitempty"`
	StartingBalance int `json:"starting_balance"`
	StatementDescriptor *string `json:"statement_descriptor,omitempty"`
	Status *string `json:"status,omitempty"`
	StatusDetails *map[string]any `json:"status_details,omitempty"`
	StatusTransitions map[string]any `json:"status_transitions"`
	Subtotal int `json:"subtotal"`
	SubtotalExcludingTax *int `json:"subtotal_excluding_tax,omitempty"`
	TestClock *any `json:"test_clock,omitempty"`
	ThresholdReason map[string]any `json:"threshold_reason"`
	Total int `json:"total"`
	TotalDiscountAmounts *[]any `json:"total_discount_amounts,omitempty"`
	TotalExcludingTax *int `json:"total_excluding_tax,omitempty"`
	TotalPretaxCreditAmounts *[]any `json:"total_pretax_credit_amounts,omitempty"`
	TotalTaxes *[]any `json:"total_taxes,omitempty"`
	WebhooksDeliveredAt *int `json:"webhooks_delivered_at,omitempty"`
}

// InvoiceRemoveMatch is the typed request payload for Invoice.RemoveTyped.
type InvoiceRemoveMatch struct {
	Id string `json:"id"`
}

// InvoicePayment is the typed data model for the invoice_payment entity.
type InvoicePayment struct {
}

// InvoicePaymentLoadMatch is the typed request payload for InvoicePayment.LoadTyped.
type InvoicePaymentLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// InvoicePaymentListMatch is the typed request payload for InvoicePayment.ListTyped.
type InvoicePaymentListMatch struct {
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Invoice *string `json:"invoice,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Payment *map[string]any `json:"payment,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// InvoiceRenderingTemplate is the typed data model for the invoice_rendering_template entity.
type InvoiceRenderingTemplate struct {
}

// InvoiceRenderingTemplateLoadMatch is the typed request payload for InvoiceRenderingTemplate.LoadTyped.
type InvoiceRenderingTemplateLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
	Version *int `json:"version,omitempty"`
}

// InvoiceRenderingTemplateListMatch is the typed request payload for InvoiceRenderingTemplate.ListTyped.
type InvoiceRenderingTemplateListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// InvoiceRenderingTemplateCreateData is the typed request payload for InvoiceRenderingTemplate.CreateTyped.
type InvoiceRenderingTemplateCreateData struct {
	Template string `json:"template"`
	Created int `json:"created"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Nickname *string `json:"nickname,omitempty"`
	Object string `json:"object"`
	Status string `json:"status"`
	Version int `json:"version"`
}

// Invoiceitem is the typed data model for the invoiceitem entity.
type Invoiceitem struct {
}

// InvoiceitemLoadMatch is the typed request payload for Invoiceitem.LoadTyped.
type InvoiceitemLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// InvoiceitemListMatch is the typed request payload for Invoiceitem.ListTyped.
type InvoiceitemListMatch struct {
	Created *any `json:"created,omitempty"`
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Invoice *string `json:"invoice,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Pending *bool `json:"pending,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// InvoiceitemCreateData is the typed request payload for Invoiceitem.CreateTyped.
type InvoiceitemCreateData struct {
	Id string `json:"id"`
	Amount int `json:"amount"`
	Currency string `json:"currency"`
	Customer any `json:"customer"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	Date int `json:"date"`
	Description *string `json:"description,omitempty"`
	Discountable bool `json:"discountable"`
	Discounts *[]any `json:"discounts,omitempty"`
	FrozenFields *[]any `json:"frozen_fields,omitempty"`
	Invoice *any `json:"invoice,omitempty"`
	InvoicingRules *[]any `json:"invoicing_rules,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	NetAmount *int `json:"net_amount,omitempty"`
	Object string `json:"object"`
	Parent *any `json:"parent,omitempty"`
	Period map[string]any `json:"period"`
	Pricing *any `json:"pricing,omitempty"`
	Proration bool `json:"proration"`
	ProrationDetails map[string]any `json:"proration_details"`
	Quantity int `json:"quantity"`
	QuantityDecimal string `json:"quantity_decimal"`
	TaxRates *[]any `json:"tax_rates,omitempty"`
	TestClock *any `json:"test_clock,omitempty"`
}

// Line is the typed data model for the line entity.
type Line struct {
}

// LineListMatch is the typed request payload for Line.ListTyped.
type LineListMatch struct {
	Amount *int `json:"amount,omitempty"`
	CreditAmount *int `json:"credit_amount,omitempty"`
	EffectiveAt *int `json:"effective_at,omitempty"`
	EmailType *string `json:"email_type,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Invoice string `json:"invoice"`
	Limit *int `json:"limit,omitempty"`
	Line *[]any `json:"line,omitempty"`
	Memo *string `json:"memo,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	OutOfBandAmount *int `json:"out_of_band_amount,omitempty"`
	Reason *string `json:"reason,omitempty"`
	Refund *[]any `json:"refund,omitempty"`
	RefundAmount *int `json:"refund_amount,omitempty"`
	ShippingCost *map[string]any `json:"shipping_cost,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// LineCreateData is the typed request payload for Line.CreateTyped.
type LineCreateData struct {
	Id string `json:"id"`
	InvoiceId string `json:"invoice_id"`
	Amount int `json:"amount"`
	Currency string `json:"currency"`
	Description *string `json:"description,omitempty"`
	DiscountAmount int `json:"discount_amount"`
	DiscountAmounts *[]any `json:"discount_amounts,omitempty"`
	Discountable bool `json:"discountable"`
	Discounts []any `json:"discounts"`
	Invoice *string `json:"invoice,omitempty"`
	InvoiceLineItem *string `json:"invoice_line_item,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	Parent *any `json:"parent,omitempty"`
	Period map[string]any `json:"period"`
	PretaxCreditAmounts *[]any `json:"pretax_credit_amounts,omitempty"`
	Pricing *any `json:"pricing,omitempty"`
	Quantity *int `json:"quantity,omitempty"`
	QuantityDecimal *string `json:"quantity_decimal,omitempty"`
	Subscription *any `json:"subscription,omitempty"`
	Subtotal int `json:"subtotal"`
	TaxRates []any `json:"tax_rates"`
	Taxes *[]any `json:"taxes,omitempty"`
	Type string `json:"type"`
	UnitAmount *int `json:"unit_amount,omitempty"`
	UnitAmountDecimal *string `json:"unit_amount_decimal,omitempty"`
}

// LineItem is the typed data model for the line_item entity.
type LineItem struct {
}

// LineItemListMatch is the typed request payload for LineItem.ListTyped.
type LineItemListMatch struct {
	PaymentLinkId string `json:"payment_link_id"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// LinkedAccount is the typed data model for the linked_account entity.
type LinkedAccount struct {
}

// LinkedAccountListMatch is the typed request payload for LinkedAccount.ListTyped.
type LinkedAccountListMatch struct {
	AccountHolder *map[string]any `json:"account_holder,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Session *string `json:"session,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// LinkedAccountOwner is the typed data model for the linked_account_owner entity.
type LinkedAccountOwner struct {
}

// LinkedAccountOwnerListMatch is the typed request payload for LinkedAccountOwner.ListTyped.
type LinkedAccountOwnerListMatch struct {
	Account string `json:"account"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Ownership string `json:"ownership"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// Location is the typed data model for the location entity.
type Location struct {
}

// LocationLoadMatch is the typed request payload for Location.LoadTyped.
type LocationLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// LocationListMatch is the typed request payload for Location.ListTyped.
type LocationListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Type string `json:"type"`
}

// LocationCreateData is the typed request payload for Location.CreateTyped.
type LocationCreateData struct {
	Id string `json:"id"`
	Address map[string]any `json:"address"`
	AddressKana *map[string]any `json:"address_kana,omitempty"`
	AddressKanji *map[string]any `json:"address_kanji,omitempty"`
	City *string `json:"city,omitempty"`
	ConfigurationOverrides *string `json:"configuration_overrides,omitempty"`
	Country *string `json:"country,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName string `json:"display_name"`
	DisplayNameKana *string `json:"display_name_kana,omitempty"`
	DisplayNameKanji *string `json:"display_name_kanji,omitempty"`
	Line1 *string `json:"line1,omitempty"`
	Line2 *string `json:"line2,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	Phone *string `json:"phone,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	State *string `json:"state,omitempty"`
	Type string `json:"type"`
}

// LocationRemoveMatch is the typed request payload for Location.RemoveTyped.
type LocationRemoveMatch struct {
	Id string `json:"id"`
}

// LoginLink is the typed data model for the login_link entity.
type LoginLink struct {
}

// LoginLinkCreateData is the typed request payload for LoginLink.CreateTyped.
type LoginLinkCreateData struct {
	AccountId string `json:"account_id"`
	Created int `json:"created"`
	Object string `json:"object"`
	Url string `json:"url"`
}

// Mandate is the typed data model for the mandate entity.
type Mandate struct {
}

// MandateLoadMatch is the typed request payload for Mandate.LoadTyped.
type MandateLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// Meter is the typed data model for the meter entity.
type Meter struct {
}

// MeterLoadMatch is the typed request payload for Meter.LoadTyped.
type MeterLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// MeterListMatch is the typed request payload for Meter.ListTyped.
type MeterListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// MeterCreateData is the typed request payload for Meter.CreateTyped.
type MeterCreateData struct {
	Id string `json:"id"`
	Created int `json:"created"`
	CustomerMapping map[string]any `json:"customer_mapping"`
	DefaultAggregation map[string]any `json:"default_aggregation"`
	DisplayName string `json:"display_name"`
	EventName string `json:"event_name"`
	EventTimeWindow *string `json:"event_time_window,omitempty"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	Status string `json:"status"`
	StatusTransitions map[string]any `json:"status_transitions"`
	Updated int `json:"updated"`
	ValueSettings map[string]any `json:"value_settings"`
}

// MeterEvent is the typed data model for the meter_event entity.
type MeterEvent struct {
}

// MeterEventCreateData is the typed request payload for MeterEvent.CreateTyped.
type MeterEventCreateData struct {
}

// MeterEventAdjustment is the typed data model for the meter_event_adjustment entity.
type MeterEventAdjustment struct {
}

// MeterEventAdjustmentCreateData is the typed request payload for MeterEventAdjustment.CreateTyped.
type MeterEventAdjustmentCreateData struct {
}

// MeterEventSummary is the typed data model for the meter_event_summary entity.
type MeterEventSummary struct {
}

// MeterEventSummaryListMatch is the typed request payload for MeterEventSummary.ListTyped.
type MeterEventSummaryListMatch struct {
	Id string `json:"id"`
	Customer string `json:"customer"`
	EndTime int `json:"end_time"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartTime int `json:"start_time"`
	StartingAfter *string `json:"starting_after,omitempty"`
	ValueGroupingWindow *string `json:"value_grouping_window,omitempty"`
}

// OnboardingLink is the typed data model for the onboarding_link entity.
type OnboardingLink struct {
}

// OnboardingLinkCreateData is the typed request payload for OnboardingLink.CreateTyped.
type OnboardingLinkCreateData struct {
	AppleTermsAndConditions *any `json:"apple_terms_and_conditions,omitempty"`
}

// Order is the typed data model for the order entity.
type Order struct {
}

// OrderLoadMatch is the typed request payload for Order.LoadTyped.
type OrderLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// OrderListMatch is the typed request payload for Order.ListTyped.
type OrderListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// OrderCreateData is the typed request payload for Order.CreateTyped.
type OrderCreateData struct {
	Id string `json:"id"`
	AmountFees int `json:"amount_fees"`
	AmountSubtotal int `json:"amount_subtotal"`
	AmountTotal int `json:"amount_total"`
	Beneficiary map[string]any `json:"beneficiary"`
	CanceledAt *int `json:"canceled_at,omitempty"`
	CancellationReason *string `json:"cancellation_reason,omitempty"`
	Certificate *string `json:"certificate,omitempty"`
	ConfirmedAt *int `json:"confirmed_at,omitempty"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	DelayedAt *int `json:"delayed_at,omitempty"`
	DeliveredAt *int `json:"delivered_at,omitempty"`
	DeliveryDetails []any `json:"delivery_details"`
	ExpectedDeliveryYear int `json:"expected_delivery_year"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	MetricTons string `json:"metric_tons"`
	Object string `json:"object"`
	Product any `json:"product"`
	ProductSubstitutedAt *int `json:"product_substituted_at,omitempty"`
	Status string `json:"status"`
}

// OutboundPayment is the typed data model for the outbound_payment entity.
type OutboundPayment struct {
}

// OutboundPaymentLoadMatch is the typed request payload for OutboundPayment.LoadTyped.
type OutboundPaymentLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// OutboundPaymentListMatch is the typed request payload for OutboundPayment.ListTyped.
type OutboundPaymentListMatch struct {
	Created *any `json:"created,omitempty"`
	Customer *string `json:"customer,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	FinancialAccount string `json:"financial_account"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// OutboundPaymentCreateData is the typed request payload for OutboundPayment.CreateTyped.
type OutboundPaymentCreateData struct {
	Id string `json:"id"`
	Amount int `json:"amount"`
	Cancelable bool `json:"cancelable"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Customer *string `json:"customer,omitempty"`
	Description *string `json:"description,omitempty"`
	DestinationPaymentMethod *string `json:"destination_payment_method,omitempty"`
	DestinationPaymentMethodDetails *any `json:"destination_payment_method_details,omitempty"`
	EndUserDetails *any `json:"end_user_details,omitempty"`
	ExpectedArrivalDate int `json:"expected_arrival_date"`
	FinancialAccount string `json:"financial_account"`
	HostedRegulatoryReceiptUrl *string `json:"hosted_regulatory_receipt_url,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	ReturnedDetails *any `json:"returned_details,omitempty"`
	StatementDescriptor string `json:"statement_descriptor"`
	Status string `json:"status"`
	StatusTransitions map[string]any `json:"status_transitions"`
	TrackingDetails *any `json:"tracking_details,omitempty"`
	Transaction any `json:"transaction"`
}

// OutboundTransfer is the typed data model for the outbound_transfer entity.
type OutboundTransfer struct {
}

// OutboundTransferLoadMatch is the typed request payload for OutboundTransfer.LoadTyped.
type OutboundTransferLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// OutboundTransferListMatch is the typed request payload for OutboundTransfer.ListTyped.
type OutboundTransferListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	FinancialAccount string `json:"financial_account"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// OutboundTransferCreateData is the typed request payload for OutboundTransfer.CreateTyped.
type OutboundTransferCreateData struct {
	Id string `json:"id"`
	Amount int `json:"amount"`
	Cancelable bool `json:"cancelable"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Description *string `json:"description,omitempty"`
	DestinationPaymentMethod *string `json:"destination_payment_method,omitempty"`
	DestinationPaymentMethodDetails map[string]any `json:"destination_payment_method_details"`
	ExpectedArrivalDate int `json:"expected_arrival_date"`
	FinancialAccount string `json:"financial_account"`
	HostedRegulatoryReceiptUrl *string `json:"hosted_regulatory_receipt_url,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	ReturnedDetails *any `json:"returned_details,omitempty"`
	StatementDescriptor string `json:"statement_descriptor"`
	Status string `json:"status"`
	StatusTransitions map[string]any `json:"status_transitions"`
	TrackingDetails *any `json:"tracking_details,omitempty"`
	Transaction any `json:"transaction"`
}

// PaymentAttemptRecord is the typed data model for the payment_attempt_record entity.
type PaymentAttemptRecord struct {
}

// PaymentAttemptRecordLoadMatch is the typed request payload for PaymentAttemptRecord.LoadTyped.
type PaymentAttemptRecordLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// PaymentAttemptRecordListMatch is the typed request payload for PaymentAttemptRecord.ListTyped.
type PaymentAttemptRecordListMatch struct {
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	PaymentRecord string `json:"payment_record"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// PaymentEvaluation is the typed data model for the payment_evaluation entity.
type PaymentEvaluation struct {
}

// PaymentEvaluationCreateData is the typed request payload for PaymentEvaluation.CreateTyped.
type PaymentEvaluationCreateData struct {
	ClientDeviceMetadataDetails map[string]any `json:"client_device_metadata_details"`
	CreatedAt int `json:"created_at"`
	CustomerDetails *map[string]any `json:"customer_details,omitempty"`
	Events []any `json:"events"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Object string `json:"object"`
	Outcome *any `json:"outcome,omitempty"`
	PaymentDetails map[string]any `json:"payment_details"`
	RecommendedAction string `json:"recommended_action"`
	Signals map[string]any `json:"signals"`
}

// PaymentIntent is the typed data model for the payment_intent entity.
type PaymentIntent struct {
}

// PaymentIntentLoadMatch is the typed request payload for PaymentIntent.LoadTyped.
type PaymentIntentLoadMatch struct {
	Id string `json:"id"`
	ClientSecret *string `json:"client_secret,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
}

// PaymentIntentListMatch is the typed request payload for PaymentIntent.ListTyped.
type PaymentIntentListMatch struct {
	Created *any `json:"created,omitempty"`
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// PaymentIntentCreateData is the typed request payload for PaymentIntent.CreateTyped.
type PaymentIntentCreateData struct {
	Id string `json:"id"`
	AllowedPaymentMethodTypes *[]any `json:"allowed_payment_method_types,omitempty"`
	Amount *int `json:"amount,omitempty"`
	AmountCapturable *int `json:"amount_capturable,omitempty"`
	AmountDetails *any `json:"amount_details,omitempty"`
	AmountReceived *int `json:"amount_received,omitempty"`
	Application *any `json:"application,omitempty"`
	ApplicationFeeAmount *int `json:"application_fee_amount,omitempty"`
	AutomaticPaymentMethods *any `json:"automatic_payment_methods,omitempty"`
	CanceledAt *int `json:"canceled_at,omitempty"`
	CancellationReason *string `json:"cancellation_reason,omitempty"`
	CaptureMethod *string `json:"capture_method,omitempty"`
	ClientSecret *string `json:"client_secret,omitempty"`
	ConfirmationMethod *string `json:"confirmation_method,omitempty"`
	Created int `json:"created"`
	Currency *string `json:"currency,omitempty"`
	Customer *any `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	Description *string `json:"description,omitempty"`
	ExcludedPaymentMethodTypes *[]any `json:"excluded_payment_method_types,omitempty"`
	Hooks *map[string]any `json:"hooks,omitempty"`
	LastPaymentError *any `json:"last_payment_error,omitempty"`
	LatestCharge *any `json:"latest_charge,omitempty"`
	Livemode bool `json:"livemode"`
	ManagedPayments *any `json:"managed_payments,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	NextAction *any `json:"next_action,omitempty"`
	Object string `json:"object"`
	OnBehalfOf *any `json:"on_behalf_of,omitempty"`
	PaymentDetails *map[string]any `json:"payment_details,omitempty"`
	PaymentMethod *any `json:"payment_method,omitempty"`
	PaymentMethodConfigurationDetails *any `json:"payment_method_configuration_details,omitempty"`
	PaymentMethodOptions *any `json:"payment_method_options,omitempty"`
	PaymentMethodTypes *[]any `json:"payment_method_types,omitempty"`
	PaymentRecord *any `json:"payment_record,omitempty"`
	PresentmentDetails map[string]any `json:"presentment_details"`
	Processing *any `json:"processing,omitempty"`
	ReceiptEmail *string `json:"receipt_email,omitempty"`
	Review *any `json:"review,omitempty"`
	SetupFutureUsage *string `json:"setup_future_usage,omitempty"`
	Shipping *any `json:"shipping,omitempty"`
	StatementDescriptor *string `json:"statement_descriptor,omitempty"`
	StatementDescriptorSuffix *string `json:"statement_descriptor_suffix,omitempty"`
	Status string `json:"status"`
	TransferData *any `json:"transfer_data,omitempty"`
	TransferGroup *string `json:"transfer_group,omitempty"`
}

// PaymentIntentAmountDetailsLineItem is the typed data model for the payment_intent_amount_details_line_item entity.
type PaymentIntentAmountDetailsLineItem struct {
}

// PaymentIntentAmountDetailsLineItemListMatch is the typed request payload for PaymentIntentAmountDetailsLineItem.ListTyped.
type PaymentIntentAmountDetailsLineItemListMatch struct {
	Intent string `json:"intent"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// PaymentLink is the typed data model for the payment_link entity.
type PaymentLink struct {
}

// PaymentLinkLoadMatch is the typed request payload for PaymentLink.LoadTyped.
type PaymentLinkLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// PaymentLinkListMatch is the typed request payload for PaymentLink.ListTyped.
type PaymentLinkListMatch struct {
	Active *bool `json:"active,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// PaymentLinkCreateData is the typed request payload for PaymentLink.CreateTyped.
type PaymentLinkCreateData struct {
	Id string `json:"id"`
	Active bool `json:"active"`
	AfterCompletion map[string]any `json:"after_completion"`
	AllowPromotionCodes bool `json:"allow_promotion_codes"`
	Application *any `json:"application,omitempty"`
	ApplicationFeeAmount *int `json:"application_fee_amount,omitempty"`
	ApplicationFeePercent *float64 `json:"application_fee_percent,omitempty"`
	AutomaticTax map[string]any `json:"automatic_tax"`
	BillingAddressCollection string `json:"billing_address_collection"`
	ConsentCollection *any `json:"consent_collection,omitempty"`
	Currency string `json:"currency"`
	CustomFields []any `json:"custom_fields"`
	CustomText map[string]any `json:"custom_text"`
	CustomerCreation string `json:"customer_creation"`
	InactiveMessage *string `json:"inactive_message,omitempty"`
	InvoiceCreation *any `json:"invoice_creation,omitempty"`
	LineItems map[string]any `json:"line_items"`
	Livemode bool `json:"livemode"`
	ManagedPayments *any `json:"managed_payments,omitempty"`
	Metadata map[string]any `json:"metadata"`
	NameCollection *map[string]any `json:"name_collection,omitempty"`
	Object string `json:"object"`
	OnBehalfOf *any `json:"on_behalf_of,omitempty"`
	OptionalItems *[]any `json:"optional_items,omitempty"`
	PaymentIntentData *any `json:"payment_intent_data,omitempty"`
	PaymentMethodCollection string `json:"payment_method_collection"`
	PaymentMethodOptions *any `json:"payment_method_options,omitempty"`
	PaymentMethodTypes *[]any `json:"payment_method_types,omitempty"`
	PhoneNumberCollection map[string]any `json:"phone_number_collection"`
	Restrictions *any `json:"restrictions,omitempty"`
	ShippingAddressCollection *any `json:"shipping_address_collection,omitempty"`
	ShippingOptions []any `json:"shipping_options"`
	SubmitType string `json:"submit_type"`
	SubscriptionData *any `json:"subscription_data,omitempty"`
	TaxIdCollection map[string]any `json:"tax_id_collection"`
	TransferData *any `json:"transfer_data,omitempty"`
	Url string `json:"url"`
}

// PaymentMethod is the typed data model for the payment_method entity.
type PaymentMethod struct {
}

// PaymentMethodLoadMatch is the typed request payload for PaymentMethod.LoadTyped.
type PaymentMethodLoadMatch struct {
	CustomerId *string `json:"customer_id,omitempty"`
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// PaymentMethodListMatch is the typed request payload for PaymentMethod.ListTyped.
type PaymentMethodListMatch struct {
	AllowRedisplay *bool `json:"allow_redisplay,omitempty"`
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Type *string `json:"type,omitempty"`
}

// PaymentMethodCreateData is the typed request payload for PaymentMethod.CreateTyped.
type PaymentMethodCreateData struct {
	Id string `json:"id"`
	AcssDebit *map[string]any `json:"acss_debit,omitempty"`
	Affirm *map[string]any `json:"affirm,omitempty"`
	AfterpayClearpay *map[string]any `json:"afterpay_clearpay,omitempty"`
	Alipay *map[string]any `json:"alipay,omitempty"`
	AllowRedisplay *bool `json:"allow_redisplay,omitempty"`
	Alma *map[string]any `json:"alma,omitempty"`
	AmazonPay *map[string]any `json:"amazon_pay,omitempty"`
	AuBecsDebit *map[string]any `json:"au_becs_debit,omitempty"`
	BacsDebit *map[string]any `json:"bacs_debit,omitempty"`
	Bancontact *map[string]any `json:"bancontact,omitempty"`
	Billie *map[string]any `json:"billie,omitempty"`
	BillingDetails map[string]any `json:"billing_details"`
	Bizum *map[string]any `json:"bizum,omitempty"`
	Blik *map[string]any `json:"blik,omitempty"`
	Boleto map[string]any `json:"boleto"`
	Card map[string]any `json:"card"`
	CardPresent map[string]any `json:"card_present"`
	Cashapp *map[string]any `json:"cashapp,omitempty"`
	Created int `json:"created"`
	Crypto *map[string]any `json:"crypto,omitempty"`
	Custom map[string]any `json:"custom"`
	Customer *any `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	CustomerBalance *map[string]any `json:"customer_balance,omitempty"`
	Eps *map[string]any `json:"eps,omitempty"`
	Fpx map[string]any `json:"fpx"`
	Giropay *map[string]any `json:"giropay,omitempty"`
	Grabpay *map[string]any `json:"grabpay,omitempty"`
	Ideal *map[string]any `json:"ideal,omitempty"`
	InteracPresent map[string]any `json:"interac_present"`
	KakaoPay *map[string]any `json:"kakao_pay,omitempty"`
	Klarna *map[string]any `json:"klarna,omitempty"`
	Konbini *map[string]any `json:"konbini,omitempty"`
	KrCard *map[string]any `json:"kr_card,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	Livemode bool `json:"livemode"`
	MbWay *map[string]any `json:"mb_way,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Mobilepay *map[string]any `json:"mobilepay,omitempty"`
	Multibanco *map[string]any `json:"multibanco,omitempty"`
	NaverPay map[string]any `json:"naver_pay"`
	NzBankAccount map[string]any `json:"nz_bank_account"`
	Object string `json:"object"`
	Oxxo *map[string]any `json:"oxxo,omitempty"`
	P24 *map[string]any `json:"p24,omitempty"`
	PayByBank *map[string]any `json:"pay_by_bank,omitempty"`
	Payco *map[string]any `json:"payco,omitempty"`
	Paynow *map[string]any `json:"paynow,omitempty"`
	Paypal *map[string]any `json:"paypal,omitempty"`
	Paypay *map[string]any `json:"paypay,omitempty"`
	Payto *map[string]any `json:"payto,omitempty"`
	Pix *map[string]any `json:"pix,omitempty"`
	Promptpay *map[string]any `json:"promptpay,omitempty"`
	RadarOptions *map[string]any `json:"radar_options,omitempty"`
	RevolutPay *map[string]any `json:"revolut_pay,omitempty"`
	SamsungPay *map[string]any `json:"samsung_pay,omitempty"`
	Satispay *map[string]any `json:"satispay,omitempty"`
	Scalapay *map[string]any `json:"scalapay,omitempty"`
	SepaDebit *map[string]any `json:"sepa_debit,omitempty"`
	Sequra *map[string]any `json:"sequra,omitempty"`
	Sofort *map[string]any `json:"sofort,omitempty"`
	Sunbit *map[string]any `json:"sunbit,omitempty"`
	Swish *map[string]any `json:"swish,omitempty"`
	Twint *map[string]any `json:"twint,omitempty"`
	Type string `json:"type"`
	Upi *map[string]any `json:"upi,omitempty"`
	UsBankAccount *map[string]any `json:"us_bank_account,omitempty"`
	WechatPay *map[string]any `json:"wechat_pay,omitempty"`
	Zip *map[string]any `json:"zip,omitempty"`
}

// PaymentMethodConfiguration is the typed data model for the payment_method_configuration entity.
type PaymentMethodConfiguration struct {
}

// PaymentMethodConfigurationLoadMatch is the typed request payload for PaymentMethodConfiguration.LoadTyped.
type PaymentMethodConfigurationLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// PaymentMethodConfigurationListMatch is the typed request payload for PaymentMethodConfiguration.ListTyped.
type PaymentMethodConfigurationListMatch struct {
	Active *bool `json:"active,omitempty"`
	Application *any `json:"application,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// PaymentMethodConfigurationCreateData is the typed request payload for PaymentMethodConfiguration.CreateTyped.
type PaymentMethodConfigurationCreateData struct {
	Id string `json:"id"`
	AcssDebit map[string]any `json:"acss_debit"`
	Active bool `json:"active"`
	Affirm map[string]any `json:"affirm"`
	AfterpayClearpay map[string]any `json:"afterpay_clearpay"`
	Alipay map[string]any `json:"alipay"`
	Alma map[string]any `json:"alma"`
	AmazonPay map[string]any `json:"amazon_pay"`
	ApplePay map[string]any `json:"apple_pay"`
	Application *string `json:"application,omitempty"`
	AuBecsDebit map[string]any `json:"au_becs_debit"`
	BacsDebit map[string]any `json:"bacs_debit"`
	Bancontact map[string]any `json:"bancontact"`
	Billie map[string]any `json:"billie"`
	Bizum map[string]any `json:"bizum"`
	Blik map[string]any `json:"blik"`
	Boleto map[string]any `json:"boleto"`
	Card map[string]any `json:"card"`
	CartesBancaires map[string]any `json:"cartes_bancaires"`
	Cashapp map[string]any `json:"cashapp"`
	Crypto map[string]any `json:"crypto"`
	CustomerBalance map[string]any `json:"customer_balance"`
	Eps map[string]any `json:"eps"`
	Fpx map[string]any `json:"fpx"`
	Giropay map[string]any `json:"giropay"`
	GooglePay map[string]any `json:"google_pay"`
	Grabpay map[string]any `json:"grabpay"`
	Ideal map[string]any `json:"ideal"`
	IsDefault bool `json:"is_default"`
	Jcb map[string]any `json:"jcb"`
	KakaoPay map[string]any `json:"kakao_pay"`
	Klarna map[string]any `json:"klarna"`
	Konbini map[string]any `json:"konbini"`
	KrCard map[string]any `json:"kr_card"`
	Link map[string]any `json:"link"`
	Livemode bool `json:"livemode"`
	MbWay map[string]any `json:"mb_way"`
	Mobilepay map[string]any `json:"mobilepay"`
	Multibanco map[string]any `json:"multibanco"`
	Name string `json:"name"`
	NaverPay map[string]any `json:"naver_pay"`
	NzBankAccount map[string]any `json:"nz_bank_account"`
	Object string `json:"object"`
	Oxxo map[string]any `json:"oxxo"`
	P24 map[string]any `json:"p24"`
	Parent *string `json:"parent,omitempty"`
	PayByBank map[string]any `json:"pay_by_bank"`
	Payco map[string]any `json:"payco"`
	Paynow map[string]any `json:"paynow"`
	Paypal map[string]any `json:"paypal"`
	Paypay map[string]any `json:"paypay"`
	Payto map[string]any `json:"payto"`
	Pix map[string]any `json:"pix"`
	Promptpay map[string]any `json:"promptpay"`
	RevolutPay map[string]any `json:"revolut_pay"`
	SamsungPay map[string]any `json:"samsung_pay"`
	Satispay map[string]any `json:"satispay"`
	Scalapay map[string]any `json:"scalapay"`
	SepaDebit map[string]any `json:"sepa_debit"`
	Sequra map[string]any `json:"sequra"`
	Sofort map[string]any `json:"sofort"`
	Sunbit map[string]any `json:"sunbit"`
	Swish map[string]any `json:"swish"`
	Twint map[string]any `json:"twint"`
	Upi map[string]any `json:"upi"`
	UsBankAccount map[string]any `json:"us_bank_account"`
	WechatPay map[string]any `json:"wechat_pay"`
	Zip map[string]any `json:"zip"`
}

// PaymentMethodDomain is the typed data model for the payment_method_domain entity.
type PaymentMethodDomain struct {
}

// PaymentMethodDomainLoadMatch is the typed request payload for PaymentMethodDomain.LoadTyped.
type PaymentMethodDomainLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// PaymentMethodDomainListMatch is the typed request payload for PaymentMethodDomain.ListTyped.
type PaymentMethodDomainListMatch struct {
	DomainName *string `json:"domain_name,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// PaymentMethodDomainCreateData is the typed request payload for PaymentMethodDomain.CreateTyped.
type PaymentMethodDomainCreateData struct {
	Id string `json:"id"`
	AmazonPay map[string]any `json:"amazon_pay"`
	ApplePay map[string]any `json:"apple_pay"`
	Created int `json:"created"`
	DomainName string `json:"domain_name"`
	Enabled bool `json:"enabled"`
	GooglePay map[string]any `json:"google_pay"`
	Klarna map[string]any `json:"klarna"`
	Link map[string]any `json:"link"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	Paypal map[string]any `json:"paypal"`
}

// PaymentRecord is the typed data model for the payment_record entity.
type PaymentRecord struct {
}

// PaymentRecordLoadMatch is the typed request payload for PaymentRecord.LoadTyped.
type PaymentRecordLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// PaymentRecordListMatch is the typed request payload for PaymentRecord.ListTyped.
type PaymentRecordListMatch struct {
	CreatedAfter *int `json:"created_after,omitempty"`
	CreatedBefore *int `json:"created_before,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// PaymentRecordCreateData is the typed request payload for PaymentRecord.CreateTyped.
type PaymentRecordCreateData struct {
	Amount map[string]any `json:"amount"`
	AmountAuthorized map[string]any `json:"amount_authorized"`
	AmountCanceled map[string]any `json:"amount_canceled"`
	AmountFailed map[string]any `json:"amount_failed"`
	AmountGuaranteed map[string]any `json:"amount_guaranteed"`
	AmountRefunded map[string]any `json:"amount_refunded"`
	AmountRequested map[string]any `json:"amount_requested"`
	Application *string `json:"application,omitempty"`
	Created int `json:"created"`
	CustomerDetails *any `json:"customer_details,omitempty"`
	CustomerPresence *string `json:"customer_presence,omitempty"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	LatestPaymentAttemptRecord *string `json:"latest_payment_attempt_record,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	PaymentMethodDetails *any `json:"payment_method_details,omitempty"`
	ProcessorDetails map[string]any `json:"processor_details"`
	ReportedBy string `json:"reported_by"`
	ShippingDetails *any `json:"shipping_details,omitempty"`
}

// Payout is the typed data model for the payout entity.
type Payout struct {
}

// PayoutLoadMatch is the typed request payload for Payout.LoadTyped.
type PayoutLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// PayoutListMatch is the typed request payload for Payout.ListTyped.
type PayoutListMatch struct {
	ArrivalDate *any `json:"arrival_date,omitempty"`
	Created *any `json:"created,omitempty"`
	Destination *string `json:"destination,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// PayoutCreateData is the typed request payload for Payout.CreateTyped.
type PayoutCreateData struct {
	Id string `json:"id"`
	Amount int `json:"amount"`
	ApplicationFee *any `json:"application_fee,omitempty"`
	ApplicationFeeAmount *int `json:"application_fee_amount,omitempty"`
	ArrivalDate int `json:"arrival_date"`
	Automatic bool `json:"automatic"`
	BalanceTransaction *any `json:"balance_transaction,omitempty"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Description *string `json:"description,omitempty"`
	Destination *any `json:"destination,omitempty"`
	FailureBalanceTransaction *any `json:"failure_balance_transaction,omitempty"`
	FailureCode *string `json:"failure_code,omitempty"`
	FailureMessage *string `json:"failure_message,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Method string `json:"method"`
	Object string `json:"object"`
	OriginalPayout *any `json:"original_payout,omitempty"`
	PayoutMethod *string `json:"payout_method,omitempty"`
	ReconciliationStatus string `json:"reconciliation_status"`
	ReversedBy *any `json:"reversed_by,omitempty"`
	SourceType string `json:"source_type"`
	StatementDescriptor *string `json:"statement_descriptor,omitempty"`
	Status string `json:"status"`
	TraceId *string `json:"trace_id,omitempty"`
	Type string `json:"type"`
}

// Person is the typed data model for the person entity.
type Person struct {
}

// PersonLoadMatch is the typed request payload for Person.LoadTyped.
type PersonLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// PersonListMatch is the typed request payload for Person.ListTyped.
type PersonListMatch struct {
	AccountId string `json:"account_id"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Relationship *map[string]any `json:"relationship,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// PersonCreateData is the typed request payload for Person.CreateTyped.
type PersonCreateData struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	Account string `json:"account"`
	AdditionalTosAcceptances *map[string]any `json:"additional_tos_acceptances,omitempty"`
	Address *map[string]any `json:"address,omitempty"`
	AddressKana *any `json:"address_kana,omitempty"`
	AddressKanji *any `json:"address_kanji,omitempty"`
	Created int `json:"created"`
	Dob *map[string]any `json:"dob,omitempty"`
	Email *string `json:"email,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	FirstNameKana *string `json:"first_name_kana,omitempty"`
	FirstNameKanji *string `json:"first_name_kanji,omitempty"`
	FullNameAliases *[]any `json:"full_name_aliases,omitempty"`
	FutureRequirements *any `json:"future_requirements,omitempty"`
	Gender *string `json:"gender,omitempty"`
	IdNumberProvided *bool `json:"id_number_provided,omitempty"`
	IdNumberSecondaryProvided *bool `json:"id_number_secondary_provided,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	LastNameKana *string `json:"last_name_kana,omitempty"`
	LastNameKanji *string `json:"last_name_kanji,omitempty"`
	MaidenName *string `json:"maiden_name,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Nationality *string `json:"nationality,omitempty"`
	Object string `json:"object"`
	Phone *string `json:"phone,omitempty"`
	PoliticalExposure *string `json:"political_exposure,omitempty"`
	RegisteredAddress *map[string]any `json:"registered_address,omitempty"`
	Relationship *map[string]any `json:"relationship,omitempty"`
	Requirements *any `json:"requirements,omitempty"`
	SsnLast4Provided *bool `json:"ssn_last_4_provided,omitempty"`
	UsCfpbData *any `json:"us_cfpb_data,omitempty"`
	Verification map[string]any `json:"verification"`
}

// PersonalizationDesign is the typed data model for the personalization_design entity.
type PersonalizationDesign struct {
}

// PersonalizationDesignLoadMatch is the typed request payload for PersonalizationDesign.LoadTyped.
type PersonalizationDesignLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// PersonalizationDesignListMatch is the typed request payload for PersonalizationDesign.ListTyped.
type PersonalizationDesignListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LookupKey *[]any `json:"lookup_key,omitempty"`
	Preference *map[string]any `json:"preference,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// PersonalizationDesignCreateData is the typed request payload for PersonalizationDesign.CreateTyped.
type PersonalizationDesignCreateData struct {
	Id string `json:"id"`
	CardLogo *any `json:"card_logo,omitempty"`
	CarrierText *any `json:"carrier_text,omitempty"`
	Created int `json:"created"`
	Livemode bool `json:"livemode"`
	LookupKey *string `json:"lookup_key,omitempty"`
	Metadata map[string]any `json:"metadata"`
	Name *string `json:"name,omitempty"`
	Object string `json:"object"`
	PhysicalBundle any `json:"physical_bundle"`
	Preferences map[string]any `json:"preferences"`
	RejectionReasons map[string]any `json:"rejection_reasons"`
	Status string `json:"status"`
}

// PhysicalBundle is the typed data model for the physical_bundle entity.
type PhysicalBundle struct {
}

// PhysicalBundleLoadMatch is the typed request payload for PhysicalBundle.LoadTyped.
type PhysicalBundleLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// PhysicalBundleListMatch is the typed request payload for PhysicalBundle.ListTyped.
type PhysicalBundleListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Plan is the typed data model for the plan entity.
type Plan struct {
}

// PlanLoadMatch is the typed request payload for Plan.LoadTyped.
type PlanLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// PlanListMatch is the typed request payload for Plan.ListTyped.
type PlanListMatch struct {
	Active *bool `json:"active,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Product *string `json:"product,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// PlanCreateData is the typed request payload for Plan.CreateTyped.
type PlanCreateData struct {
	Id string `json:"id"`
	Active bool `json:"active"`
	Amount *int `json:"amount,omitempty"`
	AmountDecimal *string `json:"amount_decimal,omitempty"`
	BillingScheme string `json:"billing_scheme"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Interval string `json:"interval"`
	IntervalCount int `json:"interval_count"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Meter *string `json:"meter,omitempty"`
	Nickname *string `json:"nickname,omitempty"`
	Object string `json:"object"`
	Product *any `json:"product,omitempty"`
	Tiers *[]any `json:"tiers,omitempty"`
	TiersMode *string `json:"tiers_mode,omitempty"`
	TransformUsage *any `json:"transform_usage,omitempty"`
	TrialPeriodDays *int `json:"trial_period_days,omitempty"`
	UsageType string `json:"usage_type"`
}

// Price is the typed data model for the price entity.
type Price struct {
}

// PriceLoadMatch is the typed request payload for Price.LoadTyped.
type PriceLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// PriceListMatch is the typed request payload for Price.ListTyped.
type PriceListMatch struct {
	Active *bool `json:"active,omitempty"`
	Created *any `json:"created,omitempty"`
	Currency *string `json:"currency,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LookupKey *[]any `json:"lookup_key,omitempty"`
	Product *string `json:"product,omitempty"`
	Recurring *map[string]any `json:"recurring,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Type *string `json:"type,omitempty"`
}

// PriceCreateData is the typed request payload for Price.CreateTyped.
type PriceCreateData struct {
	Id string `json:"id"`
	Active bool `json:"active"`
	BillingScheme string `json:"billing_scheme"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	CurrencyOptions *map[string]any `json:"currency_options,omitempty"`
	CustomUnitAmount *any `json:"custom_unit_amount,omitempty"`
	Livemode bool `json:"livemode"`
	LookupKey *string `json:"lookup_key,omitempty"`
	Metadata map[string]any `json:"metadata"`
	Nickname *string `json:"nickname,omitempty"`
	Object string `json:"object"`
	Product any `json:"product"`
	Recurring *any `json:"recurring,omitempty"`
	TaxBehavior *string `json:"tax_behavior,omitempty"`
	Tiers *[]any `json:"tiers,omitempty"`
	TiersMode *string `json:"tiers_mode,omitempty"`
	TransformQuantity *any `json:"transform_quantity,omitempty"`
	Type string `json:"type"`
	UnitAmount *int `json:"unit_amount,omitempty"`
	UnitAmountDecimal *string `json:"unit_amount_decimal,omitempty"`
}

// Product is the typed data model for the product entity.
type Product struct {
}

// ProductLoadMatch is the typed request payload for Product.LoadTyped.
type ProductLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ProductListMatch is the typed request payload for Product.ListTyped.
type ProductListMatch struct {
	Active *bool `json:"active,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Ids *[]any `json:"ids,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Shippable *bool `json:"shippable,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ProductCreateData is the typed request payload for Product.CreateTyped.
type ProductCreateData struct {
	Id string `json:"id"`
	Active bool `json:"active"`
	Created int `json:"created"`
	CurrentPricesPerMetricTon map[string]any `json:"current_prices_per_metric_ton"`
	DefaultPrice *any `json:"default_price,omitempty"`
	DeliveryYear *int `json:"delivery_year,omitempty"`
	Description *string `json:"description,omitempty"`
	Images []any `json:"images"`
	Livemode bool `json:"livemode"`
	MarketingFeatures []any `json:"marketing_features"`
	Metadata map[string]any `json:"metadata"`
	MetricTonsAvailable string `json:"metric_tons_available"`
	Name string `json:"name"`
	Object string `json:"object"`
	PackageDimensions *any `json:"package_dimensions,omitempty"`
	Shippable *bool `json:"shippable,omitempty"`
	StatementDescriptor *string `json:"statement_descriptor,omitempty"`
	Suppliers []any `json:"suppliers"`
	TaxCode *any `json:"tax_code,omitempty"`
	TaxDetails *any `json:"tax_details,omitempty"`
	UnitLabel *string `json:"unit_label,omitempty"`
	Updated int `json:"updated"`
	Url *string `json:"url,omitempty"`
}

// ProductRemoveMatch is the typed request payload for Product.RemoveTyped.
type ProductRemoveMatch struct {
	Id string `json:"id"`
}

// ProductFeature is the typed data model for the product_feature entity.
type ProductFeature struct {
}

// ProductFeatureLoadMatch is the typed request payload for ProductFeature.LoadTyped.
type ProductFeatureLoadMatch struct {
	Id string `json:"id"`
	ProductId string `json:"product_id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ProductFeatureCreateData is the typed request payload for ProductFeature.CreateTyped.
type ProductFeatureCreateData struct {
	Id string `json:"id"`
	Active bool `json:"active"`
	Livemode bool `json:"livemode"`
	LookupKey string `json:"lookup_key"`
	Metadata map[string]any `json:"metadata"`
	Name string `json:"name"`
	Object string `json:"object"`
}

// PromotionCode is the typed data model for the promotion_code entity.
type PromotionCode struct {
}

// PromotionCodeLoadMatch is the typed request payload for PromotionCode.LoadTyped.
type PromotionCodeLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// PromotionCodeListMatch is the typed request payload for PromotionCode.ListTyped.
type PromotionCodeListMatch struct {
	Active *bool `json:"active,omitempty"`
	Code *string `json:"code,omitempty"`
	Coupon *string `json:"coupon,omitempty"`
	Created *any `json:"created,omitempty"`
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// PromotionCodeCreateData is the typed request payload for PromotionCode.CreateTyped.
type PromotionCodeCreateData struct {
	Id string `json:"id"`
	Active bool `json:"active"`
	Code string `json:"code"`
	Created int `json:"created"`
	Customer *any `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	ExpiresAt *int `json:"expires_at,omitempty"`
	Livemode bool `json:"livemode"`
	MaxRedemptions *int `json:"max_redemptions,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Object string `json:"object"`
	Promotion map[string]any `json:"promotion"`
	Restrictions map[string]any `json:"restrictions"`
	TimesRedeemed int `json:"times_redeemed"`
}

// Quote is the typed data model for the quote entity.
type Quote struct {
}

// QuoteLoadMatch is the typed request payload for Quote.LoadTyped.
type QuoteLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// QuoteListMatch is the typed request payload for Quote.ListTyped.
type QuoteListMatch struct {
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
	TestClock *string `json:"test_clock,omitempty"`
}

// QuoteCreateData is the typed request payload for Quote.CreateTyped.
type QuoteCreateData struct {
	Id string `json:"id"`
	AmountSubtotal int `json:"amount_subtotal"`
	AmountTotal int `json:"amount_total"`
	Application *any `json:"application,omitempty"`
	ApplicationFeeAmount *int `json:"application_fee_amount,omitempty"`
	ApplicationFeePercent *float64 `json:"application_fee_percent,omitempty"`
	AutomaticTax map[string]any `json:"automatic_tax"`
	CollectionMethod string `json:"collection_method"`
	Computed map[string]any `json:"computed"`
	Created int `json:"created"`
	Currency *string `json:"currency,omitempty"`
	Customer *any `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	DefaultTaxRates *[]any `json:"default_tax_rates,omitempty"`
	Description *string `json:"description,omitempty"`
	Discounts []any `json:"discounts"`
	ExpiresAt int `json:"expires_at"`
	Footer *string `json:"footer,omitempty"`
	FromQuote *any `json:"from_quote,omitempty"`
	Header *string `json:"header,omitempty"`
	Invoice *any `json:"invoice,omitempty"`
	InvoiceSettings map[string]any `json:"invoice_settings"`
	LineItems map[string]any `json:"line_items"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Number *string `json:"number,omitempty"`
	Object string `json:"object"`
	OnBehalfOf *any `json:"on_behalf_of,omitempty"`
	Status string `json:"status"`
	StatusTransitions map[string]any `json:"status_transitions"`
	Subscription *any `json:"subscription,omitempty"`
	SubscriptionData map[string]any `json:"subscription_data"`
	SubscriptionSchedule *any `json:"subscription_schedule,omitempty"`
	TestClock *any `json:"test_clock,omitempty"`
	TotalDetails map[string]any `json:"total_details"`
	TransferData *any `json:"transfer_data,omitempty"`
}

// QuoteComputedUpfrontLineItem is the typed data model for the quote_computed_upfront_line_item entity.
type QuoteComputedUpfrontLineItem struct {
}

// QuoteComputedUpfrontLineItemListMatch is the typed request payload for QuoteComputedUpfrontLineItem.ListTyped.
type QuoteComputedUpfrontLineItemListMatch struct {
	Id string `json:"id"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// QuotePdf is the typed data model for the quote_pdf entity.
type QuotePdf struct {
}

// QuotePdfLoadMatch is the typed request payload for QuotePdf.LoadTyped.
type QuotePdfLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// Reader is the typed data model for the reader entity.
type Reader struct {
}

// ReaderLoadMatch is the typed request payload for Reader.LoadTyped.
type ReaderLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ReaderListMatch is the typed request payload for Reader.ListTyped.
type ReaderListMatch struct {
	DeviceType *string `json:"device_type,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Location *string `json:"location,omitempty"`
	SerialNumber *string `json:"serial_number,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ReaderCreateData is the typed request payload for Reader.CreateTyped.
type ReaderCreateData struct {
	Id string `json:"id"`
	Action *any `json:"action,omitempty"`
	DeviceSwVersion *string `json:"device_sw_version,omitempty"`
	DeviceType string `json:"device_type"`
	IpAddress *string `json:"ip_address,omitempty"`
	Label string `json:"label"`
	LastSeenAt *int `json:"last_seen_at,omitempty"`
	Livemode bool `json:"livemode"`
	Location *any `json:"location,omitempty"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	SerialNumber string `json:"serial_number"`
	Status *string `json:"status,omitempty"`
}

// ReaderRemoveMatch is the typed request payload for Reader.RemoveTyped.
type ReaderRemoveMatch struct {
	Id string `json:"id"`
}

// ReceivedCredit is the typed data model for the received_credit entity.
type ReceivedCredit struct {
}

// ReceivedCreditLoadMatch is the typed request payload for ReceivedCredit.LoadTyped.
type ReceivedCreditLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ReceivedCreditListMatch is the typed request payload for ReceivedCredit.ListTyped.
type ReceivedCreditListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	FinancialAccount string `json:"financial_account"`
	Limit *int `json:"limit,omitempty"`
	LinkedFlow *map[string]any `json:"linked_flow,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ReceivedCreditCreateData is the typed request payload for ReceivedCredit.CreateTyped.
type ReceivedCreditCreateData struct {
	Amount int `json:"amount"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Description string `json:"description"`
	FailureCode *string `json:"failure_code,omitempty"`
	FinancialAccount *string `json:"financial_account,omitempty"`
	HostedRegulatoryReceiptUrl *string `json:"hosted_regulatory_receipt_url,omitempty"`
	Id string `json:"id"`
	InitiatingPaymentMethodDetails map[string]any `json:"initiating_payment_method_details"`
	LinkedFlows map[string]any `json:"linked_flows"`
	Livemode bool `json:"livemode"`
	Network string `json:"network"`
	Object string `json:"object"`
	ReversalDetails *any `json:"reversal_details,omitempty"`
	Status string `json:"status"`
	Transaction *any `json:"transaction,omitempty"`
}

// ReceivedDebit is the typed data model for the received_debit entity.
type ReceivedDebit struct {
}

// ReceivedDebitLoadMatch is the typed request payload for ReceivedDebit.LoadTyped.
type ReceivedDebitLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ReceivedDebitListMatch is the typed request payload for ReceivedDebit.ListTyped.
type ReceivedDebitListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	FinancialAccount string `json:"financial_account"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ReceivedDebitCreateData is the typed request payload for ReceivedDebit.CreateTyped.
type ReceivedDebitCreateData struct {
	Amount int `json:"amount"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Description string `json:"description"`
	FailureCode *string `json:"failure_code,omitempty"`
	FinancialAccount *string `json:"financial_account,omitempty"`
	HostedRegulatoryReceiptUrl *string `json:"hosted_regulatory_receipt_url,omitempty"`
	Id string `json:"id"`
	InitiatingPaymentMethodDetails map[string]any `json:"initiating_payment_method_details"`
	LinkedFlows map[string]any `json:"linked_flows"`
	Livemode bool `json:"livemode"`
	Network string `json:"network"`
	Object string `json:"object"`
	ReversalDetails *any `json:"reversal_details,omitempty"`
	Status string `json:"status"`
	Transaction *any `json:"transaction,omitempty"`
}

// Refund is the typed data model for the refund entity.
type Refund struct {
}

// RefundLoadMatch is the typed request payload for Refund.LoadTyped.
type RefundLoadMatch struct {
	ApplicationFeeId *string `json:"application_fee_id,omitempty"`
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
	ChargeId *string `json:"charge_id,omitempty"`
}

// RefundListMatch is the typed request payload for Refund.ListTyped.
type RefundListMatch struct {
	Charge *string `json:"charge,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	PaymentIntent *string `json:"payment_intent,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// RefundCreateData is the typed request payload for Refund.CreateTyped.
type RefundCreateData struct {
	Id string `json:"id"`
	Amount int `json:"amount"`
	BalanceTransaction *any `json:"balance_transaction,omitempty"`
	Charge *any `json:"charge,omitempty"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Customer *any `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	Description *string `json:"description,omitempty"`
	DestinationDetails map[string]any `json:"destination_details"`
	FailureBalanceTransaction *any `json:"failure_balance_transaction,omitempty"`
	FailureReason *string `json:"failure_reason,omitempty"`
	Fee any `json:"fee"`
	InstructionsEmail *string `json:"instructions_email,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	NextAction map[string]any `json:"next_action"`
	Object string `json:"object"`
	PaymentIntent *any `json:"payment_intent,omitempty"`
	PaymentMethod *any `json:"payment_method,omitempty"`
	PendingReason *string `json:"pending_reason,omitempty"`
	PresentmentDetails map[string]any `json:"presentment_details"`
	Reason *string `json:"reason,omitempty"`
	ReceiptNumber *string `json:"receipt_number,omitempty"`
	SourceTransferReversal *any `json:"source_transfer_reversal,omitempty"`
	Status *string `json:"status,omitempty"`
	TransferReversal *any `json:"transfer_reversal,omitempty"`
}

// Registration is the typed data model for the registration entity.
type Registration struct {
}

// RegistrationLoadMatch is the typed request payload for Registration.LoadTyped.
type RegistrationLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// RegistrationListMatch is the typed request payload for Registration.ListTyped.
type RegistrationListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// RegistrationCreateData is the typed request payload for Registration.CreateTyped.
type RegistrationCreateData struct {
	Id string `json:"id"`
	ActiveFrom int `json:"active_from"`
	Ae map[string]any `json:"ae"`
	Al map[string]any `json:"al"`
	Am map[string]any `json:"am"`
	Ao map[string]any `json:"ao"`
	At map[string]any `json:"at"`
	Au map[string]any `json:"au"`
	Aw map[string]any `json:"aw"`
	Az map[string]any `json:"az"`
	Ba map[string]any `json:"ba"`
	Bb map[string]any `json:"bb"`
	Bd map[string]any `json:"bd"`
	Be map[string]any `json:"be"`
	Bf map[string]any `json:"bf"`
	Bg map[string]any `json:"bg"`
	Bh map[string]any `json:"bh"`
	Bj map[string]any `json:"bj"`
	Bs map[string]any `json:"bs"`
	By map[string]any `json:"by"`
	Ca map[string]any `json:"ca"`
	Cd map[string]any `json:"cd"`
	Ch map[string]any `json:"ch"`
	Cl map[string]any `json:"cl"`
	Cm map[string]any `json:"cm"`
	Co map[string]any `json:"co"`
	Country string `json:"country"`
	CountryOptions map[string]any `json:"country_options"`
	Cr map[string]any `json:"cr"`
	Created int `json:"created"`
	Cv map[string]any `json:"cv"`
	Cy map[string]any `json:"cy"`
	Cz map[string]any `json:"cz"`
	De map[string]any `json:"de"`
	Dk map[string]any `json:"dk"`
	Ec map[string]any `json:"ec"`
	Ee map[string]any `json:"ee"`
	Eg map[string]any `json:"eg"`
	Es map[string]any `json:"es"`
	Et map[string]any `json:"et"`
	ExpiresAt *int `json:"expires_at,omitempty"`
	Fi map[string]any `json:"fi"`
	Fr map[string]any `json:"fr"`
	Gb map[string]any `json:"gb"`
	Ge map[string]any `json:"ge"`
	Gn map[string]any `json:"gn"`
	Gr map[string]any `json:"gr"`
	Hr map[string]any `json:"hr"`
	Hu map[string]any `json:"hu"`
	Ie map[string]any `json:"ie"`
	In map[string]any `json:"in"`
	Is map[string]any `json:"is"`
	It map[string]any `json:"it"`
	Jp map[string]any `json:"jp"`
	Ke map[string]any `json:"ke"`
	Kg map[string]any `json:"kg"`
	Kh map[string]any `json:"kh"`
	Kr map[string]any `json:"kr"`
	Kz map[string]any `json:"kz"`
	La map[string]any `json:"la"`
	Livemode bool `json:"livemode"`
	Lk map[string]any `json:"lk"`
	Lt map[string]any `json:"lt"`
	Lu map[string]any `json:"lu"`
	Lv map[string]any `json:"lv"`
	Ma map[string]any `json:"ma"`
	Md map[string]any `json:"md"`
	Me map[string]any `json:"me"`
	Mk map[string]any `json:"mk"`
	Mr map[string]any `json:"mr"`
	Mt map[string]any `json:"mt"`
	Mx map[string]any `json:"mx"`
	My map[string]any `json:"my"`
	Ng map[string]any `json:"ng"`
	Nl map[string]any `json:"nl"`
	No map[string]any `json:"no"`
	Np map[string]any `json:"np"`
	Nz map[string]any `json:"nz"`
	Object string `json:"object"`
	Om map[string]any `json:"om"`
	Pe map[string]any `json:"pe"`
	Ph map[string]any `json:"ph"`
	Pl map[string]any `json:"pl"`
	Pt map[string]any `json:"pt"`
	Ro map[string]any `json:"ro"`
	Rs map[string]any `json:"rs"`
	Ru map[string]any `json:"ru"`
	Sa map[string]any `json:"sa"`
	Se map[string]any `json:"se"`
	Sg map[string]any `json:"sg"`
	Si map[string]any `json:"si"`
	Sk map[string]any `json:"sk"`
	Sn map[string]any `json:"sn"`
	Sr map[string]any `json:"sr"`
	Status string `json:"status"`
	Th map[string]any `json:"th"`
	Tj map[string]any `json:"tj"`
	Tr map[string]any `json:"tr"`
	Tw map[string]any `json:"tw"`
	Tz map[string]any `json:"tz"`
	Ua map[string]any `json:"ua"`
	Ug map[string]any `json:"ug"`
	Us map[string]any `json:"us"`
	Uy map[string]any `json:"uy"`
	Uz map[string]any `json:"uz"`
	Vn map[string]any `json:"vn"`
	Za map[string]any `json:"za"`
	Zm map[string]any `json:"zm"`
	Zw map[string]any `json:"zw"`
}

// ReportRun is the typed data model for the report_run entity.
type ReportRun struct {
}

// ReportRunLoadMatch is the typed request payload for ReportRun.LoadTyped.
type ReportRunLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ReportRunListMatch is the typed request payload for ReportRun.ListTyped.
type ReportRunListMatch struct {
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// ReportRunCreateData is the typed request payload for ReportRun.CreateTyped.
type ReportRunCreateData struct {
	Created int `json:"created"`
	Error *string `json:"error,omitempty"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	Parameters map[string]any `json:"parameters"`
	ReportType string `json:"report_type"`
	Result *any `json:"result,omitempty"`
	Status string `json:"status"`
	SucceededAt *int `json:"succeeded_at,omitempty"`
}

// ReportType is the typed data model for the report_type entity.
type ReportType struct {
}

// ReportTypeLoadMatch is the typed request payload for ReportType.LoadTyped.
type ReportTypeLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ReportTypeListMatch is the typed request payload for ReportType.ListTyped.
type ReportTypeListMatch struct {
	Expand *[]any `json:"expand,omitempty"`
}

// Request is the typed data model for the request entity.
type Request struct {
}

// RequestLoadMatch is the typed request payload for Request.LoadTyped.
type RequestLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// RequestListMatch is the typed request payload for Request.ListTyped.
type RequestListMatch struct {
	Created *map[string]any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// RequestCreateData is the typed request payload for Request.CreateTyped.
type RequestCreateData struct {
	Created int `json:"created"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Object string `json:"object"`
	PaymentMethod string `json:"payment_method"`
	Replacements []any `json:"replacements"`
	RequestContext *any `json:"request_context,omitempty"`
	RequestDetails *any `json:"request_details,omitempty"`
	ResponseDetails *any `json:"response_details,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Reversal is the typed data model for the reversal entity.
type Reversal struct {
}

// ReversalLoadMatch is the typed request payload for Reversal.LoadTyped.
type ReversalLoadMatch struct {
	Id string `json:"id"`
	TransferId string `json:"transfer_id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ReversalListMatch is the typed request payload for Reversal.ListTyped.
type ReversalListMatch struct {
	TransferId string `json:"transfer_id"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// ReversalCreateData is the typed request payload for Reversal.CreateTyped.
type ReversalCreateData struct {
	Id *string `json:"id,omitempty"`
	TransferId string `json:"transfer_id"`
	Amount int `json:"amount"`
	BalanceTransaction *any `json:"balance_transaction,omitempty"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	DestinationPaymentRefund *any `json:"destination_payment_refund,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Object string `json:"object"`
	SourceRefund *any `json:"source_refund,omitempty"`
	Transfer any `json:"transfer"`
}

// Review is the typed data model for the review entity.
type Review struct {
}

// ReviewLoadMatch is the typed request payload for Review.LoadTyped.
type ReviewLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ReviewListMatch is the typed request payload for Review.ListTyped.
type ReviewListMatch struct {
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// ReviewCreateData is the typed request payload for Review.CreateTyped.
type ReviewCreateData struct {
	Id string `json:"id"`
	BillingZip *string `json:"billing_zip,omitempty"`
	Charge *any `json:"charge,omitempty"`
	ClosedReason *string `json:"closed_reason,omitempty"`
	Created int `json:"created"`
	IpAddress *string `json:"ip_address,omitempty"`
	IpAddressLocation *any `json:"ip_address_location,omitempty"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	Open bool `json:"open"`
	OpenedReason string `json:"opened_reason"`
	PaymentIntent *any `json:"payment_intent,omitempty"`
	Reason string `json:"reason"`
	Session *any `json:"session,omitempty"`
}

// ScheduledQueryRun is the typed data model for the scheduled_query_run entity.
type ScheduledQueryRun struct {
}

// ScheduledQueryRunLoadMatch is the typed request payload for ScheduledQueryRun.LoadTyped.
type ScheduledQueryRunLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ScheduledQueryRunListMatch is the typed request payload for ScheduledQueryRun.ListTyped.
type ScheduledQueryRunListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// Search is the typed data model for the search entity.
type Search struct {
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *string `json:"page,omitempty"`
	Query string `json:"query"`
}

// Secret is the typed data model for the secret entity.
type Secret struct {
}

// SecretLoadMatch is the typed request payload for Secret.LoadTyped.
type SecretLoadMatch struct {
	Expand *[]any `json:"expand,omitempty"`
	Name string `json:"name"`
	Scope map[string]any `json:"scope"`
}

// SecretListMatch is the typed request payload for Secret.ListTyped.
type SecretListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Scope map[string]any `json:"scope"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// SecretCreateData is the typed request payload for Secret.CreateTyped.
type SecretCreateData struct {
	Created int `json:"created"`
	Deleted *bool `json:"deleted,omitempty"`
	ExpiresAt *int `json:"expires_at,omitempty"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	Name string `json:"name"`
	Object string `json:"object"`
	Payload *string `json:"payload,omitempty"`
	Scope map[string]any `json:"scope"`
	Type string `json:"type"`
	User *string `json:"user,omitempty"`
}

// Session is the typed data model for the session entity.
type Session struct {
}

// SessionLoadMatch is the typed request payload for Session.LoadTyped.
type SessionLoadMatch struct {
	Session string `json:"session"`
	Expand *[]any `json:"expand,omitempty"`
}

// SessionListMatch is the typed request payload for Session.ListTyped.
type SessionListMatch struct {
	Created *any `json:"created,omitempty"`
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	CustomerDetail *map[string]any `json:"customer_detail,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	PaymentIntent *string `json:"payment_intent,omitempty"`
	PaymentLink *string `json:"payment_link,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
	Subscription *string `json:"subscription,omitempty"`
}

// SessionCreateData is the typed request payload for Session.CreateTyped.
type SessionCreateData struct {
	Id string `json:"id"`
	AccountHolder *any `json:"account_holder,omitempty"`
	Accounts map[string]any `json:"accounts"`
	AdaptivePricing *any `json:"adaptive_pricing,omitempty"`
	AfterExpiration *any `json:"after_expiration,omitempty"`
	AllowPromotionCodes *bool `json:"allow_promotion_codes,omitempty"`
	AllowedPaymentMethodTypes *[]any `json:"allowed_payment_method_types,omitempty"`
	AmountSubtotal *int `json:"amount_subtotal,omitempty"`
	AmountTotal *int `json:"amount_total,omitempty"`
	AutomaticTax map[string]any `json:"automatic_tax"`
	BankAccountToken map[string]any `json:"bank_account_token"`
	BillingAddressCollection *string `json:"billing_address_collection,omitempty"`
	BrandingSettings map[string]any `json:"branding_settings"`
	CancelUrl *string `json:"cancel_url,omitempty"`
	ClientReferenceId *string `json:"client_reference_id,omitempty"`
	ClientSecret *string `json:"client_secret,omitempty"`
	CollectedInformation *any `json:"collected_information,omitempty"`
	Configuration any `json:"configuration"`
	Consent *any `json:"consent,omitempty"`
	ConsentCollection *any `json:"consent_collection,omitempty"`
	Created int `json:"created"`
	Currency *string `json:"currency,omitempty"`
	CurrencyConversion *any `json:"currency_conversion,omitempty"`
	CustomFields []any `json:"custom_fields"`
	CustomText map[string]any `json:"custom_text"`
	Customer *any `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	CustomerCreation *string `json:"customer_creation,omitempty"`
	CustomerDetails *any `json:"customer_details,omitempty"`
	CustomerEmail *string `json:"customer_email,omitempty"`
	Discounts *[]any `json:"discounts,omitempty"`
	ExcludedPaymentMethodTypes *[]any `json:"excluded_payment_method_types,omitempty"`
	ExpiresAt int `json:"expires_at"`
	Filters *map[string]any `json:"filters,omitempty"`
	Flow *any `json:"flow,omitempty"`
	IntegrationIdentifier *string `json:"integration_identifier,omitempty"`
	Invoice *any `json:"invoice,omitempty"`
	InvoiceCreation *any `json:"invoice_creation,omitempty"`
	Limits map[string]any `json:"limits"`
	LineItems map[string]any `json:"line_items"`
	Livemode bool `json:"livemode"`
	Locale *string `json:"locale,omitempty"`
	ManagedPayments *any `json:"managed_payments,omitempty"`
	ManualEntry *map[string]any `json:"manual_entry,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Mode string `json:"mode"`
	NameCollection *map[string]any `json:"name_collection,omitempty"`
	Object string `json:"object"`
	OnBehalfOf *string `json:"on_behalf_of,omitempty"`
	OptionalItems *[]any `json:"optional_items,omitempty"`
	OriginContext *string `json:"origin_context,omitempty"`
	PaymentIntent *any `json:"payment_intent,omitempty"`
	PaymentLink *any `json:"payment_link,omitempty"`
	PaymentMethodCollection *string `json:"payment_method_collection,omitempty"`
	PaymentMethodConfigurationDetails *any `json:"payment_method_configuration_details,omitempty"`
	PaymentMethodOptions *any `json:"payment_method_options,omitempty"`
	PaymentMethodTypes []any `json:"payment_method_types"`
	PaymentStatus string `json:"payment_status"`
	Permissions *any `json:"permissions,omitempty"`
	PhoneNumberCollection map[string]any `json:"phone_number_collection"`
	Prefetch *[]any `json:"prefetch,omitempty"`
	PresentmentDetails map[string]any `json:"presentment_details"`
	RecoveredFrom *string `json:"recovered_from,omitempty"`
	RedirectOnCompletion *string `json:"redirect_on_completion,omitempty"`
	ReturnUrl *string `json:"return_url,omitempty"`
	SavedPaymentMethodOptions *any `json:"saved_payment_method_options,omitempty"`
	SetupIntent *any `json:"setup_intent,omitempty"`
	ShippingAddressCollection *any `json:"shipping_address_collection,omitempty"`
	ShippingCost *any `json:"shipping_cost,omitempty"`
	ShippingOptions []any `json:"shipping_options"`
	Status *string `json:"status,omitempty"`
	SubmitType *string `json:"submit_type,omitempty"`
	Subscription *any `json:"subscription,omitempty"`
	SuccessUrl *string `json:"success_url,omitempty"`
	TaxIdCollection map[string]any `json:"tax_id_collection"`
	TotalDetails *int `json:"total_details,omitempty"`
	UiMode *string `json:"ui_mode,omitempty"`
	Url *string `json:"url,omitempty"`
	WalletOptions *any `json:"wallet_options,omitempty"`
}

// Setting is the typed data model for the setting entity.
type Setting struct {
}

// SettingLoadMatch is the typed request payload for Setting.LoadTyped.
type SettingLoadMatch struct {
	Expand *[]any `json:"expand,omitempty"`
}

// SettingCreateData is the typed request payload for Setting.CreateTyped.
type SettingCreateData struct {
	Defaults map[string]any `json:"defaults"`
	HeadOffice *any `json:"head_office,omitempty"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	Status string `json:"status"`
	StatusDetails map[string]any `json:"status_details"`
}

// Settlement is the typed data model for the settlement entity.
type Settlement struct {
}

// SettlementLoadMatch is the typed request payload for Settlement.LoadTyped.
type SettlementLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// SettlementCreateData is the typed request payload for Settlement.CreateTyped.
type SettlementCreateData struct {
	Id string `json:"id"`
}

// SetupAttempt is the typed data model for the setup_attempt entity.
type SetupAttempt struct {
}

// SetupAttemptListMatch is the typed request payload for SetupAttempt.ListTyped.
type SetupAttemptListMatch struct {
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	SetupIntent string `json:"setup_intent"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// SetupIntent is the typed data model for the setup_intent entity.
type SetupIntent struct {
}

// SetupIntentLoadMatch is the typed request payload for SetupIntent.LoadTyped.
type SetupIntentLoadMatch struct {
	Id string `json:"id"`
	ClientSecret *string `json:"client_secret,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
}

// SetupIntentListMatch is the typed request payload for SetupIntent.ListTyped.
type SetupIntentListMatch struct {
	AttachToSelf *bool `json:"attach_to_self,omitempty"`
	Created *any `json:"created,omitempty"`
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	PaymentMethod *string `json:"payment_method,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// SetupIntentCreateData is the typed request payload for SetupIntent.CreateTyped.
type SetupIntentCreateData struct {
	Id string `json:"id"`
	AllowedPaymentMethodTypes *[]any `json:"allowed_payment_method_types,omitempty"`
	Application *any `json:"application,omitempty"`
	AttachToSelf *bool `json:"attach_to_self,omitempty"`
	AutomaticPaymentMethods *any `json:"automatic_payment_methods,omitempty"`
	CancellationReason *string `json:"cancellation_reason,omitempty"`
	ClientSecret *string `json:"client_secret,omitempty"`
	Created int `json:"created"`
	Customer *any `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	Description *string `json:"description,omitempty"`
	ExcludedPaymentMethodTypes *[]any `json:"excluded_payment_method_types,omitempty"`
	FlowDirections *[]any `json:"flow_directions,omitempty"`
	LastSetupError *any `json:"last_setup_error,omitempty"`
	LatestAttempt *any `json:"latest_attempt,omitempty"`
	Livemode bool `json:"livemode"`
	ManagedPayments *any `json:"managed_payments,omitempty"`
	Mandate *any `json:"mandate,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	NextAction *any `json:"next_action,omitempty"`
	Object string `json:"object"`
	OnBehalfOf *any `json:"on_behalf_of,omitempty"`
	PaymentMethod *any `json:"payment_method,omitempty"`
	PaymentMethodConfigurationDetails *any `json:"payment_method_configuration_details,omitempty"`
	PaymentMethodOptions *any `json:"payment_method_options,omitempty"`
	PaymentMethodTypes []any `json:"payment_method_types"`
	SingleUseMandate *any `json:"single_use_mandate,omitempty"`
	Status string `json:"status"`
	Usage string `json:"usage"`
}

// ShippingRate is the typed data model for the shipping_rate entity.
type ShippingRate struct {
}

// ShippingRateLoadMatch is the typed request payload for ShippingRate.LoadTyped.
type ShippingRateLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ShippingRateListMatch is the typed request payload for ShippingRate.ListTyped.
type ShippingRateListMatch struct {
	Active *bool `json:"active,omitempty"`
	Created *any `json:"created,omitempty"`
	Currency *string `json:"currency,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// ShippingRateCreateData is the typed request payload for ShippingRate.CreateTyped.
type ShippingRateCreateData struct {
	Id string `json:"id"`
	Active bool `json:"active"`
	Created int `json:"created"`
	DeliveryEstimate *any `json:"delivery_estimate,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	FixedAmount map[string]any `json:"fixed_amount"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	TaxBehavior *string `json:"tax_behavior,omitempty"`
	TaxCode *any `json:"tax_code,omitempty"`
	Type string `json:"type"`
}

// SigmaApiQuery is the typed data model for the sigma_api_query entity.
type SigmaApiQuery struct {
}

// SigmaApiQueryCreateData is the typed request payload for SigmaApiQuery.CreateTyped.
type SigmaApiQueryCreateData struct {
	Id string `json:"id"`
	Created int `json:"created"`
	Livemode bool `json:"livemode"`
	Name string `json:"name"`
	Object string `json:"object"`
	Sql string `json:"sql"`
}

// Source is the typed data model for the source entity.
type Source struct {
}

// SourceLoadMatch is the typed request payload for Source.LoadTyped.
type SourceLoadMatch struct {
	Id string `json:"id"`
	ClientSecret *string `json:"client_secret,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	CustomerId *string `json:"customer_id,omitempty"`
}

// SourceListMatch is the typed request payload for Source.ListTyped.
type SourceListMatch struct {
	CustomerId string `json:"customer_id"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Object *string `json:"object,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// SourceCreateData is the typed request payload for Source.CreateTyped.
type SourceCreateData struct {
	Id string `json:"id"`
	AchCreditTransfer *map[string]any `json:"ach_credit_transfer,omitempty"`
	AchDebit *map[string]any `json:"ach_debit,omitempty"`
	AcssDebit *map[string]any `json:"acss_debit,omitempty"`
	Alipay *map[string]any `json:"alipay,omitempty"`
	AllowRedisplay *bool `json:"allow_redisplay,omitempty"`
	Amount *int `json:"amount,omitempty"`
	AuBecsDebit *map[string]any `json:"au_becs_debit,omitempty"`
	Bancontact *map[string]any `json:"bancontact,omitempty"`
	Card *map[string]any `json:"card,omitempty"`
	CardPresent *map[string]any `json:"card_present,omitempty"`
	ClientSecret string `json:"client_secret"`
	CodeVerification map[string]any `json:"code_verification"`
	Created int `json:"created"`
	Currency *string `json:"currency,omitempty"`
	Customer *string `json:"customer,omitempty"`
	Data []any `json:"data"`
	Eps *map[string]any `json:"eps,omitempty"`
	Flow string `json:"flow"`
	Giropay *map[string]any `json:"giropay,omitempty"`
	HasMore bool `json:"has_more"`
	Ideal *map[string]any `json:"ideal,omitempty"`
	Klarna *map[string]any `json:"klarna,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Multibanco *map[string]any `json:"multibanco,omitempty"`
	Object string `json:"object"`
	Owner *any `json:"owner,omitempty"`
	P24 *map[string]any `json:"p24,omitempty"`
	Receiver map[string]any `json:"receiver"`
	Redirect map[string]any `json:"redirect"`
	SepaDebit *map[string]any `json:"sepa_debit,omitempty"`
	Sofort *map[string]any `json:"sofort,omitempty"`
	SourceOrder map[string]any `json:"source_order"`
	StatementDescriptor *string `json:"statement_descriptor,omitempty"`
	Status string `json:"status"`
	ThreeDSecure *map[string]any `json:"three_d_secure,omitempty"`
	Type string `json:"type"`
	Url string `json:"url"`
	Usage *string `json:"usage,omitempty"`
	Wechat *map[string]any `json:"wechat,omitempty"`
}

// SourceRemoveMatch is the typed request payload for Source.RemoveTyped.
type SourceRemoveMatch struct {
	CustomerId string `json:"customer_id"`
	Id string `json:"id"`
}

// SourceMandateNotification is the typed data model for the source_mandate_notification entity.
type SourceMandateNotification struct {
}

// SourceMandateNotificationLoadMatch is the typed request payload for SourceMandateNotification.LoadTyped.
type SourceMandateNotificationLoadMatch struct {
	Id string `json:"id"`
	SourceId string `json:"source_id"`
	Expand *[]any `json:"expand,omitempty"`
}

// SourceTransaction is the typed data model for the source_transaction entity.
type SourceTransaction struct {
}

// SourceTransactionLoadMatch is the typed request payload for SourceTransaction.LoadTyped.
type SourceTransactionLoadMatch struct {
	Id string `json:"id"`
	SourceId string `json:"source_id"`
	Expand *[]any `json:"expand,omitempty"`
}

// SourceTransactionListMatch is the typed request payload for SourceTransaction.ListTyped.
type SourceTransactionListMatch struct {
	Id string `json:"id"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// Subscription is the typed data model for the subscription entity.
type Subscription struct {
}

// SubscriptionLoadMatch is the typed request payload for Subscription.LoadTyped.
type SubscriptionLoadMatch struct {
	CustomerId *string `json:"customer_id,omitempty"`
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// SubscriptionListMatch is the typed request payload for Subscription.ListTyped.
type SubscriptionListMatch struct {
	AutomaticTax *map[string]any `json:"automatic_tax,omitempty"`
	CollectionMethod *string `json:"collection_method,omitempty"`
	Created *any `json:"created,omitempty"`
	CurrentPeriodEnd *any `json:"current_period_end,omitempty"`
	CurrentPeriodStart *any `json:"current_period_start,omitempty"`
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Price *string `json:"price,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
	TestClock *string `json:"test_clock,omitempty"`
}

// SubscriptionCreateData is the typed request payload for Subscription.CreateTyped.
type SubscriptionCreateData struct {
	Id string `json:"id"`
	Application *any `json:"application,omitempty"`
	ApplicationFeePercent *float64 `json:"application_fee_percent,omitempty"`
	AutomaticTax map[string]any `json:"automatic_tax"`
	BillingCycleAnchor int `json:"billing_cycle_anchor"`
	BillingCycleAnchorConfig *any `json:"billing_cycle_anchor_config,omitempty"`
	BillingMode map[string]any `json:"billing_mode"`
	BillingSchedules []any `json:"billing_schedules"`
	BillingThresholds *any `json:"billing_thresholds,omitempty"`
	CancelAt *int `json:"cancel_at,omitempty"`
	CancelAtPeriodEnd bool `json:"cancel_at_period_end"`
	CanceledAt *int `json:"canceled_at,omitempty"`
	CancellationDetails *any `json:"cancellation_details,omitempty"`
	CollectionMethod string `json:"collection_method"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Customer any `json:"customer"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	DaysUntilDue *int `json:"days_until_due,omitempty"`
	DefaultPaymentMethod *any `json:"default_payment_method,omitempty"`
	DefaultSource *any `json:"default_source,omitempty"`
	DefaultTaxRates *[]any `json:"default_tax_rates,omitempty"`
	Description *string `json:"description,omitempty"`
	Discounts []any `json:"discounts"`
	EndedAt *int `json:"ended_at,omitempty"`
	InvoiceSettings map[string]any `json:"invoice_settings"`
	Items map[string]any `json:"items"`
	LatestInvoice *any `json:"latest_invoice,omitempty"`
	Livemode bool `json:"livemode"`
	ManagedPayments *any `json:"managed_payments,omitempty"`
	Metadata map[string]any `json:"metadata"`
	NextPendingInvoiceItemInvoice *int `json:"next_pending_invoice_item_invoice,omitempty"`
	Object string `json:"object"`
	OnBehalfOf *any `json:"on_behalf_of,omitempty"`
	PauseCollection *any `json:"pause_collection,omitempty"`
	PaymentSettings *any `json:"payment_settings,omitempty"`
	PendingInvoiceItemInterval *any `json:"pending_invoice_item_interval,omitempty"`
	PendingSetupIntent *any `json:"pending_setup_intent,omitempty"`
	PendingUpdate *any `json:"pending_update,omitempty"`
	PresentmentDetails map[string]any `json:"presentment_details"`
	Schedule *any `json:"schedule,omitempty"`
	StartDate int `json:"start_date"`
	Status string `json:"status"`
	StatusDetails map[string]any `json:"status_details"`
	TestClock *any `json:"test_clock,omitempty"`
	TransferData *any `json:"transfer_data,omitempty"`
	TrialEnd *int `json:"trial_end,omitempty"`
	TrialSettings *any `json:"trial_settings,omitempty"`
	TrialStart *int `json:"trial_start,omitempty"`
}

// SubscriptionRemoveMatch is the typed request payload for Subscription.RemoveTyped.
type SubscriptionRemoveMatch struct {
	CustomerId *string `json:"customer_id,omitempty"`
	Id string `json:"id"`
}

// SubscriptionItem is the typed data model for the subscription_item entity.
type SubscriptionItem struct {
}

// SubscriptionItemLoadMatch is the typed request payload for SubscriptionItem.LoadTyped.
type SubscriptionItemLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// SubscriptionItemListMatch is the typed request payload for SubscriptionItem.ListTyped.
type SubscriptionItemListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Subscription string `json:"subscription"`
}

// SubscriptionItemCreateData is the typed request payload for SubscriptionItem.CreateTyped.
type SubscriptionItemCreateData struct {
	Id string `json:"id"`
	BilledUntil *int `json:"billed_until,omitempty"`
	BillingThresholds *any `json:"billing_thresholds,omitempty"`
	Created int `json:"created"`
	CurrentPeriodEnd int `json:"current_period_end"`
	CurrentPeriodStart int `json:"current_period_start"`
	CurrentTrial *any `json:"current_trial,omitempty"`
	Discounts []any `json:"discounts"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	Price map[string]any `json:"price"`
	Quantity *int `json:"quantity,omitempty"`
	Subscription string `json:"subscription"`
	TaxRates *[]any `json:"tax_rates,omitempty"`
}

// SubscriptionSchedule is the typed data model for the subscription_schedule entity.
type SubscriptionSchedule struct {
}

// SubscriptionScheduleLoadMatch is the typed request payload for SubscriptionSchedule.LoadTyped.
type SubscriptionScheduleLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// SubscriptionScheduleListMatch is the typed request payload for SubscriptionSchedule.ListTyped.
type SubscriptionScheduleListMatch struct {
	CanceledAt *any `json:"canceled_at,omitempty"`
	CompletedAt *any `json:"completed_at,omitempty"`
	Created *any `json:"created,omitempty"`
	Customer *string `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	ReleasedAt *any `json:"released_at,omitempty"`
	Scheduled *bool `json:"scheduled,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// SubscriptionScheduleCreateData is the typed request payload for SubscriptionSchedule.CreateTyped.
type SubscriptionScheduleCreateData struct {
	Id string `json:"id"`
	Application *any `json:"application,omitempty"`
	BillingMode map[string]any `json:"billing_mode"`
	CanceledAt *int `json:"canceled_at,omitempty"`
	CompletedAt *int `json:"completed_at,omitempty"`
	Created int `json:"created"`
	CurrentPhase *any `json:"current_phase,omitempty"`
	Customer any `json:"customer"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	DefaultSettings map[string]any `json:"default_settings"`
	EndBehavior string `json:"end_behavior"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Object string `json:"object"`
	PauseSchedules *[]any `json:"pause_schedules,omitempty"`
	Phases []any `json:"phases"`
	ReleasedAt *int `json:"released_at,omitempty"`
	ReleasedSubscription *string `json:"released_subscription,omitempty"`
	Status string `json:"status"`
	Subscription *any `json:"subscription,omitempty"`
	TestClock *any `json:"test_clock,omitempty"`
}

// Supplier is the typed data model for the supplier entity.
type Supplier struct {
}

// SupplierLoadMatch is the typed request payload for Supplier.LoadTyped.
type SupplierLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// SupplierListMatch is the typed request payload for Supplier.ListTyped.
type SupplierListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// TaxCode is the typed data model for the tax_code entity.
type TaxCode struct {
}

// TaxCodeLoadMatch is the typed request payload for TaxCode.LoadTyped.
type TaxCodeLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// TaxCodeListMatch is the typed request payload for TaxCode.ListTyped.
type TaxCodeListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// TaxId is the typed data model for the tax_id entity.
type TaxId struct {
}

// TaxIdLoadMatch is the typed request payload for TaxId.LoadTyped.
type TaxIdLoadMatch struct {
	CustomerId *string `json:"customer_id,omitempty"`
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// TaxIdListMatch is the typed request payload for TaxId.ListTyped.
type TaxIdListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// TaxIdCreateData is the typed request payload for TaxId.CreateTyped.
type TaxIdCreateData struct {
	Country *string `json:"country,omitempty"`
	Created int `json:"created"`
	Customer *any `json:"customer,omitempty"`
	CustomerAccount *string `json:"customer_account,omitempty"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	Owner *any `json:"owner,omitempty"`
	Type string `json:"type"`
	Value string `json:"value"`
	Verification *any `json:"verification,omitempty"`
}

// TaxIdRemoveMatch is the typed request payload for TaxId.RemoveTyped.
type TaxIdRemoveMatch struct {
	CustomerId *string `json:"customer_id,omitempty"`
	Id string `json:"id"`
}

// TaxRate is the typed data model for the tax_rate entity.
type TaxRate struct {
}

// TaxRateLoadMatch is the typed request payload for TaxRate.LoadTyped.
type TaxRateLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// TaxRateListMatch is the typed request payload for TaxRate.ListTyped.
type TaxRateListMatch struct {
	Active *bool `json:"active,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Inclusive *bool `json:"inclusive,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// TaxRateCreateData is the typed request payload for TaxRate.CreateTyped.
type TaxRateCreateData struct {
	Id string `json:"id"`
	Active bool `json:"active"`
	Country *string `json:"country,omitempty"`
	Created int `json:"created"`
	Description *string `json:"description,omitempty"`
	DisplayName string `json:"display_name"`
	EffectivePercentage *float64 `json:"effective_percentage,omitempty"`
	FlatAmount *any `json:"flat_amount,omitempty"`
	Inclusive bool `json:"inclusive"`
	Jurisdiction *string `json:"jurisdiction,omitempty"`
	JurisdictionLevel *string `json:"jurisdiction_level,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Object string `json:"object"`
	Percentage float64 `json:"percentage"`
	RateType *string `json:"rate_type,omitempty"`
	State *string `json:"state,omitempty"`
	TaxType *string `json:"tax_type,omitempty"`
}

// TestClock is the typed data model for the test_clock entity.
type TestClock struct {
}

// TestClockLoadMatch is the typed request payload for TestClock.LoadTyped.
type TestClockLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// TestClockListMatch is the typed request payload for TestClock.ListTyped.
type TestClockListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// TestClockCreateData is the typed request payload for TestClock.CreateTyped.
type TestClockCreateData struct {
	Advancing map[string]any `json:"advancing"`
	Created int `json:"created"`
	DeletesAfter int `json:"deletes_after"`
	FrozenTime int `json:"frozen_time"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	Name *string `json:"name,omitempty"`
	Object string `json:"object"`
	Status string `json:"status"`
	StatusDetails map[string]any `json:"status_details"`
}

// TestClockRemoveMatch is the typed request payload for TestClock.RemoveTyped.
type TestClockRemoveMatch struct {
	Id string `json:"id"`
}

// Token is the typed data model for the token entity.
type Token struct {
}

// TokenLoadMatch is the typed request payload for Token.LoadTyped.
type TokenLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// TokenListMatch is the typed request payload for Token.ListTyped.
type TokenListMatch struct {
	Card string `json:"card"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// TokenCreateData is the typed request payload for Token.CreateTyped.
type TokenCreateData struct {
	Id string `json:"id"`
	BankAccount map[string]any `json:"bank_account"`
	Card any `json:"card"`
	ClientIp *string `json:"client_ip,omitempty"`
	Created int `json:"created"`
	DeviceFingerprint *string `json:"device_fingerprint,omitempty"`
	Last4 *string `json:"last4,omitempty"`
	Livemode bool `json:"livemode"`
	Network string `json:"network"`
	NetworkData map[string]any `json:"network_data"`
	NetworkUpdatedAt int `json:"network_updated_at"`
	Object string `json:"object"`
	Status string `json:"status"`
	Type string `json:"type"`
	Used bool `json:"used"`
	WalletProvider *string `json:"wallet_provider,omitempty"`
}

// Topup is the typed data model for the topup entity.
type Topup struct {
}

// TopupLoadMatch is the typed request payload for Topup.LoadTyped.
type TopupLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// TopupListMatch is the typed request payload for Topup.ListTyped.
type TopupListMatch struct {
	Amount *float64 `json:"amount,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// TopupCreateData is the typed request payload for Topup.CreateTyped.
type TopupCreateData struct {
	Id string `json:"id"`
	Amount int `json:"amount"`
	BalanceTransaction *any `json:"balance_transaction,omitempty"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Description *string `json:"description,omitempty"`
	ExpectedAvailabilityDate *int `json:"expected_availability_date,omitempty"`
	FailureCode *string `json:"failure_code,omitempty"`
	FailureMessage *string `json:"failure_message,omitempty"`
	InitiatedBy *string `json:"initiated_by,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	PaymentMethod *any `json:"payment_method,omitempty"`
	PaymentMethodOptions *any `json:"payment_method_options,omitempty"`
	Source *any `json:"source,omitempty"`
	StatementDescriptor *string `json:"statement_descriptor,omitempty"`
	Status string `json:"status"`
	TransferGroup *string `json:"transfer_group,omitempty"`
}

// Transaction is the typed data model for the transaction entity.
type Transaction struct {
}

// TransactionLoadMatch is the typed request payload for Transaction.LoadTyped.
type TransactionLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// TransactionListMatch is the typed request payload for Transaction.ListTyped.
type TransactionListMatch struct {
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	FinancialAccount string `json:"financial_account"`
	Limit *int `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
	StatusTransition *map[string]any `json:"status_transition,omitempty"`
}

// TransactionCreateData is the typed request payload for Transaction.CreateTyped.
type TransactionCreateData struct {
	Id string `json:"id"`
	Account string `json:"account"`
	Amount int `json:"amount"`
	AmountDetails *any `json:"amount_details,omitempty"`
	Authorization *any `json:"authorization,omitempty"`
	BalanceImpact map[string]any `json:"balance_impact"`
	BalanceTransaction *any `json:"balance_transaction,omitempty"`
	Card any `json:"card"`
	Cardholder *any `json:"cardholder,omitempty"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Customer *string `json:"customer,omitempty"`
	CustomerDetails map[string]any `json:"customer_details"`
	Description string `json:"description"`
	Dispute *any `json:"dispute,omitempty"`
	Entries map[string]any `json:"entries"`
	FinancialAccount string `json:"financial_account"`
	Flow *string `json:"flow,omitempty"`
	FlowDetails *any `json:"flow_details,omitempty"`
	FlowType string `json:"flow_type"`
	LineItems map[string]any `json:"line_items"`
	Livemode bool `json:"livemode"`
	MerchantAmount int `json:"merchant_amount"`
	MerchantCurrency string `json:"merchant_currency"`
	MerchantData map[string]any `json:"merchant_data"`
	Metadata map[string]any `json:"metadata"`
	NetworkData *any `json:"network_data,omitempty"`
	Object string `json:"object"`
	PostedAt *int `json:"posted_at,omitempty"`
	PurchaseDetails *any `json:"purchase_details,omitempty"`
	Reference string `json:"reference"`
	Reversal *any `json:"reversal,omitempty"`
	ShipFromDetails *any `json:"ship_from_details,omitempty"`
	ShippingCost *any `json:"shipping_cost,omitempty"`
	Status string `json:"status"`
	StatusTransitions map[string]any `json:"status_transitions"`
	TaxDate int `json:"tax_date"`
	Token *string `json:"token,omitempty"`
	TransactedAt int `json:"transacted_at"`
	TransactionRefresh string `json:"transaction_refresh"`
	Treasury *any `json:"treasury,omitempty"`
	Type string `json:"type"`
	Updated int `json:"updated"`
	VoidAt *int `json:"void_at,omitempty"`
	Wallet *string `json:"wallet,omitempty"`
}

// TransactionEntry is the typed data model for the transaction_entry entity.
type TransactionEntry struct {
}

// TransactionEntryLoadMatch is the typed request payload for TransactionEntry.LoadTyped.
type TransactionEntryLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// TransactionEntryListMatch is the typed request payload for TransactionEntry.ListTyped.
type TransactionEntryListMatch struct {
	Created *any `json:"created,omitempty"`
	EffectiveAt *any `json:"effective_at,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	FinancialAccount string `json:"financial_account"`
	Limit *int `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Transaction *string `json:"transaction,omitempty"`
}

// Transfer is the typed data model for the transfer entity.
type Transfer struct {
}

// TransferLoadMatch is the typed request payload for Transfer.LoadTyped.
type TransferLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// TransferListMatch is the typed request payload for Transfer.ListTyped.
type TransferListMatch struct {
	Created *any `json:"created,omitempty"`
	Destination *string `json:"destination,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	TransferGroup *string `json:"transfer_group,omitempty"`
}

// TransferCreateData is the typed request payload for Transfer.CreateTyped.
type TransferCreateData struct {
	Id string `json:"id"`
	Amount int `json:"amount"`
	AmountReversed int `json:"amount_reversed"`
	BalanceTransaction *any `json:"balance_transaction,omitempty"`
	Created int `json:"created"`
	Currency string `json:"currency"`
	Description *string `json:"description,omitempty"`
	Destination *any `json:"destination,omitempty"`
	DestinationPayment *any `json:"destination_payment,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	Reversals map[string]any `json:"reversals"`
	Reversed bool `json:"reversed"`
	SourceTransaction *any `json:"source_transaction,omitempty"`
	SourceType *string `json:"source_type,omitempty"`
	TransferGroup *string `json:"transfer_group,omitempty"`
}

// TrialOffer is the typed data model for the trial_offer entity.
type TrialOffer struct {
}

// TrialOfferLoadMatch is the typed request payload for TrialOffer.LoadTyped.
type TrialOfferLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// TrialOfferListMatch is the typed request payload for TrialOffer.ListTyped.
type TrialOfferListMatch struct {
	Active *bool `json:"active,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Price *[]any `json:"price,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// TrialOfferCreateData is the typed request payload for TrialOffer.CreateTyped.
type TrialOfferCreateData struct {
	Id string `json:"id"`
	Active bool `json:"active"`
	Duration map[string]any `json:"duration"`
	EndBehavior map[string]any `json:"end_behavior"`
	Livemode bool `json:"livemode"`
	Nickname *string `json:"nickname,omitempty"`
	Object string `json:"object"`
	Price float64 `json:"price"`
}

// ValueList is the typed data model for the value_list entity.
type ValueList struct {
}

// ValueListLoadMatch is the typed request payload for ValueList.LoadTyped.
type ValueListLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ValueListListMatch is the typed request payload for ValueList.ListTyped.
type ValueListListMatch struct {
	Alia *string `json:"alia,omitempty"`
	Contain *string `json:"contain,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// ValueListCreateData is the typed request payload for ValueList.CreateTyped.
type ValueListCreateData struct {
	Id string `json:"id"`
	Alias string `json:"alias"`
	Created int `json:"created"`
	CreatedBy string `json:"created_by"`
	ItemType string `json:"item_type"`
	ListItems map[string]any `json:"list_items"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Name string `json:"name"`
	Object string `json:"object"`
}

// ValueListRemoveMatch is the typed request payload for ValueList.RemoveTyped.
type ValueListRemoveMatch struct {
	Id string `json:"id"`
}

// ValueListItem is the typed data model for the value_list_item entity.
type ValueListItem struct {
}

// ValueListItemLoadMatch is the typed request payload for ValueListItem.LoadTyped.
type ValueListItemLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// ValueListItemListMatch is the typed request payload for ValueListItem.ListTyped.
type ValueListItemListMatch struct {
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Value *string `json:"value,omitempty"`
	ValueList string `json:"value_list"`
}

// ValueListItemCreateData is the typed request payload for ValueListItem.CreateTyped.
type ValueListItemCreateData struct {
	Created int `json:"created"`
	CreatedBy string `json:"created_by"`
	Id string `json:"id"`
	Livemode bool `json:"livemode"`
	Object string `json:"object"`
	Value string `json:"value"`
	ValueList string `json:"value_list"`
}

// ValueListItemRemoveMatch is the typed request payload for ValueListItem.RemoveTyped.
type ValueListItemRemoveMatch struct {
	Id string `json:"id"`
}

// VerificationReport is the typed data model for the verification_report entity.
type VerificationReport struct {
}

// VerificationReportLoadMatch is the typed request payload for VerificationReport.LoadTyped.
type VerificationReportLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// VerificationReportListMatch is the typed request payload for VerificationReport.ListTyped.
type VerificationReportListMatch struct {
	ClientReferenceId *string `json:"client_reference_id,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Type *string `json:"type,omitempty"`
	VerificationSession *string `json:"verification_session,omitempty"`
}

// VerificationSession is the typed data model for the verification_session entity.
type VerificationSession struct {
}

// VerificationSessionLoadMatch is the typed request payload for VerificationSession.LoadTyped.
type VerificationSessionLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// VerificationSessionListMatch is the typed request payload for VerificationSession.ListTyped.
type VerificationSessionListMatch struct {
	ClientReferenceId *string `json:"client_reference_id,omitempty"`
	Created *any `json:"created,omitempty"`
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	RelatedCustomer *string `json:"related_customer,omitempty"`
	RelatedCustomerAccount *string `json:"related_customer_account,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Status *string `json:"status,omitempty"`
}

// VerificationSessionCreateData is the typed request payload for VerificationSession.CreateTyped.
type VerificationSessionCreateData struct {
	Id string `json:"id"`
	ClientReferenceId *string `json:"client_reference_id,omitempty"`
	ClientSecret *string `json:"client_secret,omitempty"`
	Created int `json:"created"`
	LastError *any `json:"last_error,omitempty"`
	LastVerificationReport *any `json:"last_verification_report,omitempty"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	Options *any `json:"options,omitempty"`
	ProvidedDetails *any `json:"provided_details,omitempty"`
	Redaction *any `json:"redaction,omitempty"`
	RelatedCustomer *string `json:"related_customer,omitempty"`
	RelatedCustomerAccount *string `json:"related_customer_account,omitempty"`
	RelatedPerson map[string]any `json:"related_person"`
	Status string `json:"status"`
	Type string `json:"type"`
	Url *string `json:"url,omitempty"`
	VerificationFlow *string `json:"verification_flow,omitempty"`
	VerifiedOutputs *any `json:"verified_outputs,omitempty"`
}

// WebhookEndpoint is the typed data model for the webhook_endpoint entity.
type WebhookEndpoint struct {
}

// WebhookEndpointLoadMatch is the typed request payload for WebhookEndpoint.LoadTyped.
type WebhookEndpointLoadMatch struct {
	Id string `json:"id"`
	Expand *[]any `json:"expand,omitempty"`
}

// WebhookEndpointListMatch is the typed request payload for WebhookEndpoint.ListTyped.
type WebhookEndpointListMatch struct {
	EndingBefore *string `json:"ending_before,omitempty"`
	Expand *[]any `json:"expand,omitempty"`
	Limit *int `json:"limit,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// WebhookEndpointCreateData is the typed request payload for WebhookEndpoint.CreateTyped.
type WebhookEndpointCreateData struct {
	Id string `json:"id"`
	ApiVersion *string `json:"api_version,omitempty"`
	Application *string `json:"application,omitempty"`
	Created int `json:"created"`
	Description *string `json:"description,omitempty"`
	EnabledEvents []any `json:"enabled_events"`
	Livemode bool `json:"livemode"`
	Metadata map[string]any `json:"metadata"`
	Object string `json:"object"`
	Secret *string `json:"secret,omitempty"`
	Status string `json:"status"`
	Url string `json:"url"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
