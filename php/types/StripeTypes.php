<?php
declare(strict_types=1);

// Typed models for the Stripe SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Account entity data model. */
class Account
{
    public mixed $account_holder = null;
    public ?array $account_numbers = null;
    public mixed $balance = null;
    public mixed $balance_refresh = null;
    public mixed $business_profile = null;
    public ?string $business_type = null;
    public ?array $capabilities = null;
    public string $category;
    public ?bool $charges_enabled = null;
    public ?array $company = null;
    public array $controller;
    public ?string $country = null;
    public int $created;
    public ?string $default_currency = null;
    public ?bool $details_submitted = null;
    public ?string $display_name = null;
    public ?string $email = null;
    public array $external_accounts;
    public ?array $future_requirements = null;
    public mixed $groups = null;
    public string $id;
    public array $individual;
    public string $institution_name;
    public ?string $last4 = null;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public mixed $ownership = null;
    public mixed $ownership_refresh = null;
    public ?bool $payouts_enabled = null;
    public ?array $permissions = null;
    public ?array $requirements = null;
    public mixed $settings = null;
    public string $status;
    public ?array $status_details = null;
    public string $subcategory;
    public ?array $subscriptions = null;
    public array $supported_payment_method_types;
    public ?array $tos_acceptance = null;
    public mixed $transaction_refresh = null;
    public ?string $type = null;
}

/** Request payload for Account#load. */
class AccountLoadMatch
{
    public string $account;
    public ?array $expand = null;
}

/** Request payload for Account#list. */
class AccountListMatch
{
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for Account#create. */
class AccountCreateData
{
    public string $id;
    public mixed $account_holder = null;
    public ?array $account_numbers = null;
    public mixed $balance = null;
    public mixed $balance_refresh = null;
    public mixed $business_profile = null;
    public ?string $business_type = null;
    public ?array $capabilities = null;
    public string $category;
    public ?bool $charges_enabled = null;
    public ?array $company = null;
    public array $controller;
    public ?string $country = null;
    public int $created;
    public ?string $default_currency = null;
    public ?bool $details_submitted = null;
    public ?string $display_name = null;
    public ?string $email = null;
    public array $external_accounts;
    public ?array $future_requirements = null;
    public mixed $groups = null;
    public array $individual;
    public string $institution_name;
    public ?string $last4 = null;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public mixed $ownership = null;
    public mixed $ownership_refresh = null;
    public ?bool $payouts_enabled = null;
    public ?array $permissions = null;
    public ?array $requirements = null;
    public mixed $settings = null;
    public string $status;
    public ?array $status_details = null;
    public string $subcategory;
    public ?array $subscriptions = null;
    public array $supported_payment_method_types;
    public ?array $tos_acceptance = null;
    public mixed $transaction_refresh = null;
    public ?string $type = null;
}

/** AccountLink entity data model. */
class AccountLink
{
    public int $created;
    public int $expires_at;
    public string $object;
    public string $url;
}

/** Request payload for AccountLink#create. */
class AccountLinkCreateData
{
    public int $created;
    public int $expires_at;
    public string $object;
    public string $url;
}

/** AccountOwner entity data model. */
class AccountOwner
{
    public ?string $email = null;
    public string $id;
    public string $name;
    public string $object;
    public string $ownership;
    public ?string $phone = null;
    public ?string $raw_address = null;
    public ?int $refreshed_at = null;
}

/** Request payload for AccountOwner#list. */
class AccountOwnerListMatch
{
    public string $id;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public string $ownership;
    public ?string $starting_after = null;
}

/** AccountSession entity data model. */
class AccountSession
{
    public array $account_management;
    public array $account_onboarding;
    public array $balance_report;
    public array $balances;
    public array $disputes_list;
    public array $documents;
    public array $financial_account;
    public array $financial_account_transactions;
    public array $instant_payouts_promotion;
    public array $issuing_card;
    public array $issuing_cards_list;
    public array $notification_banner;
    public array $payment_details;
    public array $payment_disputes;
    public array $payment_method_settings;
    public array $payments;
    public array $payout_details;
    public array $payout_reconciliation_report;
    public array $payouts;
    public array $payouts_list;
    public array $tax_registrations;
    public array $tax_settings;
}

/** Request payload for AccountSession#create. */
class AccountSessionCreateData
{
    public array $account_management;
    public array $account_onboarding;
    public array $balance_report;
    public array $balances;
    public array $disputes_list;
    public array $documents;
    public array $financial_account;
    public array $financial_account_transactions;
    public array $instant_payouts_promotion;
    public array $issuing_card;
    public array $issuing_cards_list;
    public array $notification_banner;
    public array $payment_details;
    public array $payment_disputes;
    public array $payment_method_settings;
    public array $payments;
    public array $payout_details;
    public array $payout_reconciliation_report;
    public array $payouts;
    public array $payouts_list;
    public array $tax_registrations;
    public array $tax_settings;
}

/** ActiveEntitlement entity data model. */
class ActiveEntitlement
{
    public mixed $feature;
    public string $id;
    public bool $livemode;
    public string $lookup_key;
    public string $object;
}

/** Request payload for ActiveEntitlement#load. */
class ActiveEntitlementLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ActiveEntitlement#list. */
class ActiveEntitlementListMatch
{
    public string $customer;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Alert entity data model. */
class Alert
{
    public string $alert_type;
    public string $id;
    public bool $livemode;
    public string $object;
    public ?string $status = null;
    public string $title;
    public mixed $usage_threshold = null;
}

/** Request payload for Alert#load. */
class AlertLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Alert#list. */
class AlertListMatch
{
    public ?string $alert_type = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $meter = null;
    public ?string $starting_after = null;
}

/** Request payload for Alert#create. */
class AlertCreateData
{
    public string $alert_type;
    public string $id;
    public bool $livemode;
    public string $object;
    public ?string $status = null;
    public string $title;
    public mixed $usage_threshold = null;
}

/** ApplePayDomain entity data model. */
class ApplePayDomain
{
    public int $created;
    public string $domain_name;
    public string $id;
    public bool $livemode;
    public string $object;
}

/** Request payload for ApplePayDomain#load. */
class ApplePayDomainLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ApplePayDomain#create. */
class ApplePayDomainCreateData
{
    public int $created;
    public string $domain_name;
    public string $id;
    public bool $livemode;
    public string $object;
}

/** ApplicationFee entity data model. */
class ApplicationFee
{
    public mixed $account;
    public int $amount;
    public int $amount_refunded;
    public mixed $application;
    public mixed $balance_transaction = null;
    public mixed $charge;
    public int $created;
    public string $currency;
    public mixed $fee_source = null;
    public string $id;
    public bool $livemode;
    public string $object;
    public mixed $originating_transaction = null;
    public bool $refunded;
    public array $refunds;
}

/** Request payload for ApplicationFee#load. */
class ApplicationFeeLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ApplicationFee#list. */
class ApplicationFeeListMatch
{
    public ?string $charge = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for ApplicationFee#create. */
class ApplicationFeeCreateData
{
    public string $id;
    public mixed $account;
    public int $amount;
    public int $amount_refunded;
    public mixed $application;
    public mixed $balance_transaction = null;
    public mixed $charge;
    public int $created;
    public string $currency;
    public mixed $fee_source = null;
    public bool $livemode;
    public string $object;
    public mixed $originating_transaction = null;
    public bool $refunded;
    public array $refunds;
}

/** Association entity data model. */
class Association
{
}

/** Request payload for Association#list. */
class AssociationListMatch
{
    public ?array $expand = null;
    public string $payment_intent;
}

/** Authentication entity data model. */
class Authentication
{
    public ?array $acquirer_details = null;
    public ?int $amount = null;
    public ?string $challenge_url = null;
    public array $channel;
    public int $created;
    public ?string $currency = null;
    public string $directory_server;
    public ?string $fingerprinting_url = null;
    public array $flow_preference;
    public array $future_usage;
    public string $id;
    public bool $livemode;
    public string $message_category;
    public ?array $metadata = null;
    public string $object;
    public ?string $outcome = null;
    public array $outcome_details;
    public mixed $payment_method;
    public ?string $reason = null;
    public ?array $shipping_address = null;
    public string $status;
}

/** Request payload for Authentication#load. */
class AuthenticationLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Authentication#list. */
class AuthenticationListMatch
{
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for Authentication#create. */
class AuthenticationCreateData
{
    public ?array $acquirer_details = null;
    public ?int $amount = null;
    public ?string $challenge_url = null;
    public array $channel;
    public int $created;
    public ?string $currency = null;
    public string $directory_server;
    public ?string $fingerprinting_url = null;
    public array $flow_preference;
    public array $future_usage;
    public string $id;
    public bool $livemode;
    public string $message_category;
    public ?array $metadata = null;
    public string $object;
    public ?string $outcome = null;
    public array $outcome_details;
    public mixed $payment_method;
    public ?string $reason = null;
    public ?array $shipping_address = null;
    public string $status;
}

/** Authorization entity data model. */
class Authorization
{
    public int $amount;
    public mixed $amount_details = null;
    public bool $approved;
    public string $authorization_method;
    public array $balance_transactions;
    public array $card;
    public ?string $card_presence = null;
    public mixed $cardholder = null;
    public int $created;
    public string $currency;
    public mixed $fleet = null;
    public ?array $fraud_challenges = null;
    public mixed $fuel = null;
    public string $id;
    public bool $livemode;
    public int $merchant_amount;
    public string $merchant_currency;
    public array $merchant_data;
    public array $metadata;
    public mixed $network_data = null;
    public string $object;
    public mixed $pending_request = null;
    public array $request_history;
    public string $status;
    public ?string $token = null;
    public array $transactions;
    public mixed $treasury = null;
    public array $verification_data;
    public ?bool $verified_by_fraud_challenge = null;
    public ?string $wallet = null;
}

/** Request payload for Authorization#load. */
class AuthorizationLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Authorization#list. */
class AuthorizationListMatch
{
    public ?string $card = null;
    public ?string $cardholder = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for Authorization#create. */
class AuthorizationCreateData
{
    public string $id;
    public int $amount;
    public mixed $amount_details = null;
    public bool $approved;
    public string $authorization_method;
    public array $balance_transactions;
    public array $card;
    public ?string $card_presence = null;
    public mixed $cardholder = null;
    public int $created;
    public string $currency;
    public mixed $fleet = null;
    public ?array $fraud_challenges = null;
    public mixed $fuel = null;
    public bool $livemode;
    public int $merchant_amount;
    public string $merchant_currency;
    public array $merchant_data;
    public array $metadata;
    public mixed $network_data = null;
    public string $object;
    public mixed $pending_request = null;
    public array $request_history;
    public string $status;
    public ?string $token = null;
    public array $transactions;
    public mixed $treasury = null;
    public array $verification_data;
    public ?bool $verified_by_fraud_challenge = null;
    public ?string $wallet = null;
}

/** Balance entity data model. */
class Balance
{
    public array $available;
    public ?array $connect_reserved = null;
    public ?array $instant_available = null;
    public array $issuing;
    public bool $livemode;
    public string $object;
    public array $pending;
    public array $refund_and_dispute_prefunding;
}

/** Request payload for Balance#list. */
class BalanceListMatch
{
    public ?array $expand = null;
}

/** BalanceSetting entity data model. */
class BalanceSetting
{
    public ?bool $debit_negative_balances = null;
    public mixed $payouts = null;
    public array $settlement_timing;
}

/** Request payload for BalanceSetting#load. */
class BalanceSettingLoadMatch
{
    public ?array $expand = null;
}

/** Request payload for BalanceSetting#create. */
class BalanceSettingCreateData
{
    public ?bool $debit_negative_balances = null;
    public mixed $payouts = null;
    public array $settlement_timing;
}

/** BalanceTransaction entity data model. */
class BalanceTransaction
{
    public int $amount;
    public int $available_on;
    public string $balance_type;
    public mixed $checkout_session = null;
    public int $created;
    public mixed $credit_note = null;
    public string $currency;
    public mixed $customer;
    public ?string $customer_account = null;
    public ?string $description = null;
    public int $ending_balance;
    public ?float $exchange_rate = null;
    public int $fee;
    public array $fee_details;
    public string $id;
    public mixed $invoice = null;
    public bool $livemode;
    public ?array $metadata = null;
    public int $net;
    public string $object;
    public string $reporting_category;
    public mixed $source = null;
    public string $status;
    public string $type;
}

/** Request payload for BalanceTransaction#load. */
class BalanceTransactionLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for BalanceTransaction#list. */
class BalanceTransactionListMatch
{
    public mixed $created = null;
    public ?string $currency = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $payout = null;
    public ?string $source = null;
    public ?string $starting_after = null;
    public ?string $type = null;
}

/** BankAccount entity data model. */
class BankAccount
{
    public mixed $account = null;
    public ?string $account_holder_name = null;
    public ?string $account_holder_type = null;
    public ?string $account_type = null;
    public ?array $available_payout_methods = null;
    public ?string $bank_name = null;
    public string $country;
    public string $currency;
    public mixed $customer = null;
    public ?bool $default_for_currency = null;
    public ?string $fingerprint = null;
    public mixed $future_requirements = null;
    public string $id;
    public string $last4;
    public ?array $metadata = null;
    public string $object;
    public mixed $requirements = null;
    public ?string $routing_number = null;
    public string $status;
}

/** Request payload for BankAccount#load. */
class BankAccountLoadMatch
{
    public string $customer_id;
    public string $id;
    public ?array $expand = null;
}

/** Request payload for BankAccount#list. */
class BankAccountListMatch
{
    public string $customer_id;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for BankAccount#create. */
class BankAccountCreateData
{
    public string $customer_id;
    public ?string $id = null;
    public ?string $source_id = null;
    public mixed $account = null;
    public ?string $account_holder_name = null;
    public ?string $account_holder_type = null;
    public ?string $account_type = null;
    public ?array $available_payout_methods = null;
    public ?string $bank_name = null;
    public string $country;
    public string $currency;
    public mixed $customer = null;
    public ?bool $default_for_currency = null;
    public ?string $fingerprint = null;
    public mixed $future_requirements = null;
    public string $last4;
    public ?array $metadata = null;
    public string $object;
    public mixed $requirements = null;
    public ?string $routing_number = null;
    public string $status;
}

/** Request payload for BankAccount#remove. */
class BankAccountRemoveMatch
{
    public string $customer_id;
    public string $id;
}

/** Calculation entity data model. */
class Calculation
{
    public int $amount_total;
    public string $currency;
    public ?string $customer = null;
    public array $customer_details;
    public ?int $expires_at = null;
    public ?string $id = null;
    public array $line_items;
    public bool $livemode;
    public string $object;
    public mixed $ship_from_details = null;
    public mixed $shipping_cost = null;
    public int $tax_amount_exclusive;
    public int $tax_amount_inclusive;
    public array $tax_breakdown;
    public int $tax_date;
}

/** Request payload for Calculation#load. */
class CalculationLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Calculation#create. */
class CalculationCreateData
{
    public int $amount_total;
    public string $currency;
    public ?string $customer = null;
    public array $customer_details;
    public ?int $expires_at = null;
    public ?string $id = null;
    public array $line_items;
    public bool $livemode;
    public string $object;
    public mixed $ship_from_details = null;
    public mixed $shipping_cost = null;
    public int $tax_amount_exclusive;
    public int $tax_amount_inclusive;
    public array $tax_breakdown;
    public int $tax_date;
}

/** Capability entity data model. */
class Capability
{
    public mixed $account;
    public array $future_requirements;
    public string $id;
    public string $object;
    public bool $requested;
    public ?int $requested_at = null;
    public array $requirements;
    public string $status;
}

/** Request payload for Capability#load. */
class CapabilityLoadMatch
{
    public string $account_id;
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Capability#list. */
class CapabilityListMatch
{
    public string $account_id;
    public ?array $expand = null;
}

/** Request payload for Capability#create. */
class CapabilityCreateData
{
    public string $account_id;
    public string $id;
    public mixed $account;
    public array $future_requirements;
    public string $object;
    public bool $requested;
    public ?int $requested_at = null;
    public array $requirements;
    public string $status;
}

/** Card entity data model. */
class Card
{
    public mixed $account = null;
    public ?string $address_city = null;
    public ?string $address_country = null;
    public ?string $address_line1 = null;
    public ?string $address_line1_check = null;
    public ?string $address_line2 = null;
    public ?string $address_state = null;
    public ?string $address_zip = null;
    public ?string $address_zip_check = null;
    public ?bool $allow_redisplay = null;
    public ?array $available_payout_methods = null;
    public string $brand;
    public ?string $cancellation_reason = null;
    public array $cardholder;
    public ?string $country = null;
    public int $created;
    public ?string $currency = null;
    public mixed $customer = null;
    public ?string $cvc = null;
    public ?string $cvc_check = null;
    public ?bool $default_for_currency = null;
    public ?string $dynamic_last4 = null;
    public int $exp_month;
    public int $exp_year;
    public ?string $financial_account = null;
    public ?string $fingerprint = null;
    public string $funding;
    public string $id;
    public string $last4;
    public mixed $latest_fraud_warning = null;
    public mixed $lifecycle_controls = null;
    public bool $livemode;
    public ?array $metadata = null;
    public ?string $name = null;
    public ?array $networks = null;
    public ?string $number = null;
    public string $object;
    public mixed $personalization_design = null;
    public ?string $regulated_status = null;
    public mixed $replaced_by = null;
    public mixed $replacement_for = null;
    public ?string $replacement_reason = null;
    public ?string $second_line = null;
    public mixed $shipping = null;
    public array $spending_controls;
    public ?string $status = null;
    public ?string $tokenization_method = null;
    public string $type;
    public mixed $wallets = null;
}

/** Request payload for Card#load. */
class CardLoadMatch
{
    public ?string $customer_id = null;
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Card#list. */
class CardListMatch
{
    public ?string $cardholder = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?int $exp_month = null;
    public ?int $exp_year = null;
    public ?array $expand = null;
    public ?string $last4 = null;
    public ?int $limit = null;
    public ?string $personalization_design = null;
    public ?string $starting_after = null;
    public ?string $status = null;
    public ?string $type = null;
}

/** Request payload for Card#create. */
class CardCreateData
{
    public string $id;
    public mixed $account = null;
    public ?string $address_city = null;
    public ?string $address_country = null;
    public ?string $address_line1 = null;
    public ?string $address_line1_check = null;
    public ?string $address_line2 = null;
    public ?string $address_state = null;
    public ?string $address_zip = null;
    public ?string $address_zip_check = null;
    public ?bool $allow_redisplay = null;
    public ?array $available_payout_methods = null;
    public string $brand;
    public ?string $cancellation_reason = null;
    public array $cardholder;
    public ?string $country = null;
    public int $created;
    public ?string $currency = null;
    public mixed $customer = null;
    public ?string $cvc = null;
    public ?string $cvc_check = null;
    public ?bool $default_for_currency = null;
    public ?string $dynamic_last4 = null;
    public int $exp_month;
    public int $exp_year;
    public ?string $financial_account = null;
    public ?string $fingerprint = null;
    public string $funding;
    public string $last4;
    public mixed $latest_fraud_warning = null;
    public mixed $lifecycle_controls = null;
    public bool $livemode;
    public ?array $metadata = null;
    public ?string $name = null;
    public ?array $networks = null;
    public ?string $number = null;
    public string $object;
    public mixed $personalization_design = null;
    public ?string $regulated_status = null;
    public mixed $replaced_by = null;
    public mixed $replacement_for = null;
    public ?string $replacement_reason = null;
    public ?string $second_line = null;
    public mixed $shipping = null;
    public array $spending_controls;
    public ?string $status = null;
    public ?string $tokenization_method = null;
    public string $type;
    public mixed $wallets = null;
}

/** Request payload for Card#remove. */
class CardRemoveMatch
{
    public string $customer_id;
    public string $id;
}

/** Cardholder entity data model. */
class Cardholder
{
    public array $billing;
    public mixed $company = null;
    public int $created;
    public ?string $email = null;
    public string $id;
    public mixed $individual = null;
    public bool $livemode;
    public array $metadata;
    public string $name;
    public string $object;
    public ?string $phone_number = null;
    public ?array $preferred_locales = null;
    public array $requirements;
    public mixed $spending_controls = null;
    public string $status;
    public string $type;
}

/** Request payload for Cardholder#load. */
class CardholderLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Cardholder#list. */
class CardholderListMatch
{
    public mixed $created = null;
    public ?string $email = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $phone_number = null;
    public ?string $starting_after = null;
    public ?string $status = null;
    public ?string $type = null;
}

/** Request payload for Cardholder#create. */
class CardholderCreateData
{
    public string $id;
    public array $billing;
    public mixed $company = null;
    public int $created;
    public ?string $email = null;
    public mixed $individual = null;
    public bool $livemode;
    public array $metadata;
    public string $name;
    public string $object;
    public ?string $phone_number = null;
    public ?array $preferred_locales = null;
    public array $requirements;
    public mixed $spending_controls = null;
    public string $status;
    public string $type;
}

/** CashBalance entity data model. */
class CashBalance
{
    public ?array $available = null;
    public string $customer;
    public ?string $customer_account = null;
    public bool $livemode;
    public string $object;
    public array $settings;
}

/** Request payload for CashBalance#load. */
class CashBalanceLoadMatch
{
    public string $customer_id;
    public ?array $expand = null;
}

/** Request payload for CashBalance#create. */
class CashBalanceCreateData
{
    public string $customer_id;
    public ?array $available = null;
    public string $customer;
    public ?string $customer_account = null;
    public bool $livemode;
    public string $object;
    public array $settings;
}

/** CashBalanceTransaction entity data model. */
class CashBalanceTransaction
{
    public array $adjusted_for_overdraft;
    public array $applied_to_payment;
    public int $created;
    public string $currency;
    public mixed $customer;
    public ?string $customer_account = null;
    public int $ending_balance;
    public array $funded;
    public string $id;
    public bool $livemode;
    public int $net_amount;
    public string $object;
    public array $refunded_from_payment;
    public array $transferred_to_balance;
    public string $type;
    public array $unapplied_from_payment;
}

/** Request payload for CashBalanceTransaction#load. */
class CashBalanceTransactionLoadMatch
{
    public string $customer_id;
    public string $id;
    public ?array $expand = null;
}

/** Request payload for CashBalanceTransaction#list. */
class CashBalanceTransactionListMatch
{
    public string $customer_id;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Charge entity data model. */
class Charge
{
    public int $amount;
    public int $amount_captured;
    public int $amount_refunded;
    public mixed $application = null;
    public mixed $application_fee = null;
    public ?int $application_fee_amount = null;
    public mixed $balance_transaction = null;
    public array $billing_details;
    public ?string $calculated_statement_descriptor = null;
    public bool $captured;
    public int $created;
    public string $currency;
    public mixed $customer = null;
    public ?string $description = null;
    public bool $disputed;
    public mixed $failure_balance_transaction = null;
    public ?string $failure_code = null;
    public ?string $failure_message = null;
    public mixed $fraud_details = null;
    public string $id;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $on_behalf_of = null;
    public mixed $outcome = null;
    public bool $paid;
    public mixed $payment_intent = null;
    public ?string $payment_method = null;
    public mixed $payment_method_details = null;
    public array $presentment_details;
    public ?array $radar_options = null;
    public ?string $receipt_email = null;
    public ?string $receipt_number = null;
    public ?string $receipt_url = null;
    public bool $refunded;
    public array $refunds;
    public mixed $review = null;
    public mixed $shipping = null;
    public mixed $source_transfer = null;
    public ?string $statement_descriptor = null;
    public ?string $statement_descriptor_suffix = null;
    public string $status;
    public mixed $transfer = null;
    public mixed $transfer_data = null;
    public ?string $transfer_group = null;
}

/** Request payload for Charge#load. */
class ChargeLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Charge#list. */
class ChargeListMatch
{
    public mixed $created = null;
    public ?string $customer = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $payment_intent = null;
    public ?string $starting_after = null;
    public ?string $transfer_group = null;
}

/** Request payload for Charge#create. */
class ChargeCreateData
{
    public string $id;
    public int $amount;
    public int $amount_captured;
    public int $amount_refunded;
    public mixed $application = null;
    public mixed $application_fee = null;
    public ?int $application_fee_amount = null;
    public mixed $balance_transaction = null;
    public array $billing_details;
    public ?string $calculated_statement_descriptor = null;
    public bool $captured;
    public int $created;
    public string $currency;
    public mixed $customer = null;
    public ?string $description = null;
    public bool $disputed;
    public mixed $failure_balance_transaction = null;
    public ?string $failure_code = null;
    public ?string $failure_message = null;
    public mixed $fraud_details = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $on_behalf_of = null;
    public mixed $outcome = null;
    public bool $paid;
    public mixed $payment_intent = null;
    public ?string $payment_method = null;
    public mixed $payment_method_details = null;
    public array $presentment_details;
    public ?array $radar_options = null;
    public ?string $receipt_email = null;
    public ?string $receipt_number = null;
    public ?string $receipt_url = null;
    public bool $refunded;
    public array $refunds;
    public mixed $review = null;
    public mixed $shipping = null;
    public mixed $source_transfer = null;
    public ?string $statement_descriptor = null;
    public ?string $statement_descriptor_suffix = null;
    public string $status;
    public mixed $transfer = null;
    public mixed $transfer_data = null;
    public ?string $transfer_group = null;
}

/** Configuration entity data model. */
class Configuration
{
    public bool $active;
    public mixed $application = null;
    public ?array $bbpos_wisepad3 = null;
    public ?array $bbpos_wisepos_e = null;
    public array $business_profile;
    public array $cellular;
    public int $created;
    public ?string $default_return_url = null;
    public array $features;
    public string $id;
    public ?bool $is_account_default = null;
    public bool $is_default;
    public bool $livemode;
    public array $login_page;
    public ?array $metadata = null;
    public ?string $name = null;
    public string $object;
    public ?array $offline = null;
    public array $reboot_window;
    public ?array $stripe_s700 = null;
    public ?array $stripe_s710 = null;
    public ?array $tipping = null;
    public int $updated;
    public ?array $verifone_m425 = null;
    public ?array $verifone_p400 = null;
    public ?array $verifone_p630 = null;
    public ?array $verifone_ux700 = null;
    public ?array $verifone_v660p = null;
    public array $wifi;
}

/** Request payload for Configuration#load. */
class ConfigurationLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Configuration#list. */
class ConfigurationListMatch
{
    public ?bool $active = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?bool $is_default = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for Configuration#create. */
class ConfigurationCreateData
{
    public string $id;
    public bool $active;
    public mixed $application = null;
    public ?array $bbpos_wisepad3 = null;
    public ?array $bbpos_wisepos_e = null;
    public array $business_profile;
    public array $cellular;
    public int $created;
    public ?string $default_return_url = null;
    public array $features;
    public ?bool $is_account_default = null;
    public bool $is_default;
    public bool $livemode;
    public array $login_page;
    public ?array $metadata = null;
    public ?string $name = null;
    public string $object;
    public ?array $offline = null;
    public array $reboot_window;
    public ?array $stripe_s700 = null;
    public ?array $stripe_s710 = null;
    public ?array $tipping = null;
    public int $updated;
    public ?array $verifone_m425 = null;
    public ?array $verifone_p400 = null;
    public ?array $verifone_p630 = null;
    public ?array $verifone_ux700 = null;
    public ?array $verifone_v660p = null;
    public array $wifi;
}

/** Request payload for Configuration#remove. */
class ConfigurationRemoveMatch
{
    public string $id;
}

/** ConfirmationToken entity data model. */
class ConfirmationToken
{
    public int $created;
    public ?int $expires_at = null;
    public string $id;
    public bool $livemode;
    public mixed $mandate_data = null;
    public ?array $metadata = null;
    public string $object;
    public ?string $payment_intent = null;
    public mixed $payment_method_options = null;
    public mixed $payment_method_preview = null;
    public ?string $return_url = null;
    public ?string $setup_future_usage = null;
    public ?string $setup_intent = null;
    public mixed $shipping = null;
    public bool $use_stripe_sdk;
}

/** Request payload for ConfirmationToken#load. */
class ConfirmationTokenLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ConfirmationToken#create. */
class ConfirmationTokenCreateData
{
    public int $created;
    public ?int $expires_at = null;
    public string $id;
    public bool $livemode;
    public mixed $mandate_data = null;
    public ?array $metadata = null;
    public string $object;
    public ?string $payment_intent = null;
    public mixed $payment_method_options = null;
    public mixed $payment_method_preview = null;
    public ?string $return_url = null;
    public ?string $setup_future_usage = null;
    public ?string $setup_intent = null;
    public mixed $shipping = null;
    public bool $use_stripe_sdk;
}

/** ConnectionToken entity data model. */
class ConnectionToken
{
    public ?string $location = null;
    public string $object;
    public string $secret;
}

/** Request payload for ConnectionToken#create. */
class ConnectionTokenCreateData
{
    public ?string $location = null;
    public string $object;
    public string $secret;
}

/** CountrySpec entity data model. */
class CountrySpec
{
    public string $default_currency;
    public string $id;
    public string $object;
    public array $supported_bank_account_currencies;
    public array $supported_payment_currencies;
    public array $supported_payment_methods;
    public array $supported_transfer_countries;
    public array $verification_fields;
}

/** Request payload for CountrySpec#load. */
class CountrySpecLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for CountrySpec#list. */
class CountrySpecListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Coupon entity data model. */
class Coupon
{
    public ?int $amount_off = null;
    public array $applies_to;
    public int $created;
    public ?string $currency = null;
    public ?array $currency_options = null;
    public string $duration;
    public ?int $duration_in_months = null;
    public string $id;
    public bool $livemode;
    public ?int $max_redemptions = null;
    public ?array $metadata = null;
    public ?string $name = null;
    public string $object;
    public ?float $percent_off = null;
    public ?int $redeem_by = null;
    public int $times_redeemed;
    public bool $valid;
}

/** Request payload for Coupon#load. */
class CouponLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Coupon#list. */
class CouponListMatch
{
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for Coupon#create. */
class CouponCreateData
{
    public string $id;
    public ?int $amount_off = null;
    public array $applies_to;
    public int $created;
    public ?string $currency = null;
    public ?array $currency_options = null;
    public string $duration;
    public ?int $duration_in_months = null;
    public bool $livemode;
    public ?int $max_redemptions = null;
    public ?array $metadata = null;
    public ?string $name = null;
    public string $object;
    public ?float $percent_off = null;
    public ?int $redeem_by = null;
    public int $times_redeemed;
    public bool $valid;
}

/** CreditBalanceSummary entity data model. */
class CreditBalanceSummary
{
    public array $available_balance;
    public array $ledger_balance;
}

/** Request payload for CreditBalanceSummary#list. */
class CreditBalanceSummaryListMatch
{
    public ?string $customer = null;
    public ?string $customer_account = null;
    public ?array $expand = null;
    public array $filter;
}

/** CreditBalanceTransaction entity data model. */
class CreditBalanceTransaction
{
    public int $created;
    public mixed $credit = null;
    public mixed $credit_grant;
    public mixed $debit = null;
    public int $effective_at;
    public string $id;
    public bool $livemode;
    public string $object;
    public mixed $test_clock = null;
    public ?string $type = null;
}

/** Request payload for CreditBalanceTransaction#load. */
class CreditBalanceTransactionLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for CreditBalanceTransaction#list. */
class CreditBalanceTransactionListMatch
{
    public ?string $credit_grant = null;
    public ?string $customer = null;
    public ?string $customer_account = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** CreditGrant entity data model. */
class CreditGrant
{
    public array $amount;
    public array $applicability_config;
    public string $category;
    public int $created;
    public mixed $customer;
    public ?string $customer_account = null;
    public ?int $effective_at = null;
    public ?int $expires_at = null;
    public string $id;
    public bool $livemode;
    public array $metadata;
    public ?string $name = null;
    public string $object;
    public ?int $priority = null;
    public mixed $test_clock = null;
    public int $updated;
    public ?int $voided_at = null;
}

/** Request payload for CreditGrant#load. */
class CreditGrantLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for CreditGrant#list. */
class CreditGrantListMatch
{
    public ?string $customer = null;
    public ?string $customer_account = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for CreditGrant#create. */
class CreditGrantCreateData
{
    public string $id;
    public array $amount;
    public array $applicability_config;
    public string $category;
    public int $created;
    public mixed $customer;
    public ?string $customer_account = null;
    public ?int $effective_at = null;
    public ?int $expires_at = null;
    public bool $livemode;
    public array $metadata;
    public ?string $name = null;
    public string $object;
    public ?int $priority = null;
    public mixed $test_clock = null;
    public int $updated;
    public ?int $voided_at = null;
}

/** CreditNote entity data model. */
class CreditNote
{
    public int $amount;
    public int $amount_shipping;
    public int $created;
    public string $currency;
    public mixed $customer;
    public ?string $customer_account = null;
    public mixed $customer_balance_transaction = null;
    public int $discount_amount;
    public array $discount_amounts;
    public ?int $effective_at = null;
    public string $id;
    public mixed $invoice;
    public array $lines;
    public bool $livemode;
    public ?string $memo = null;
    public ?array $metadata = null;
    public string $number;
    public string $object;
    public ?int $out_of_band_amount = null;
    public string $pdf;
    public int $post_payment_amount;
    public int $pre_payment_amount;
    public array $pretax_credit_amounts;
    public ?string $reason = null;
    public array $refunds;
    public mixed $shipping_cost = null;
    public string $status;
    public int $subtotal;
    public ?int $subtotal_excluding_tax = null;
    public int $total;
    public ?int $total_excluding_tax = null;
    public ?array $total_taxes = null;
    public string $type;
    public ?int $voided_at = null;
}

/** Request payload for CreditNote#load. */
class CreditNoteLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for CreditNote#list. */
class CreditNoteListMatch
{
    public mixed $created = null;
    public ?string $customer = null;
    public ?string $customer_account = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?string $invoice = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for CreditNote#create. */
class CreditNoteCreateData
{
    public string $id;
    public int $amount;
    public int $amount_shipping;
    public int $created;
    public string $currency;
    public mixed $customer;
    public ?string $customer_account = null;
    public mixed $customer_balance_transaction = null;
    public int $discount_amount;
    public array $discount_amounts;
    public ?int $effective_at = null;
    public mixed $invoice;
    public array $lines;
    public bool $livemode;
    public ?string $memo = null;
    public ?array $metadata = null;
    public string $number;
    public string $object;
    public ?int $out_of_band_amount = null;
    public string $pdf;
    public int $post_payment_amount;
    public int $pre_payment_amount;
    public array $pretax_credit_amounts;
    public ?string $reason = null;
    public array $refunds;
    public mixed $shipping_cost = null;
    public string $status;
    public int $subtotal;
    public ?int $subtotal_excluding_tax = null;
    public int $total;
    public ?int $total_excluding_tax = null;
    public ?array $total_taxes = null;
    public string $type;
    public ?int $voided_at = null;
}

/** CreditNoteLine entity data model. */
class CreditNoteLine
{
    public int $amount;
    public ?string $description = null;
    public int $discount_amount;
    public array $discount_amounts;
    public string $id;
    public ?string $invoice_line_item = null;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public array $pretax_credit_amounts;
    public ?int $quantity = null;
    public array $tax_rates;
    public ?array $taxes = null;
    public string $type;
    public ?int $unit_amount = null;
    public ?string $unit_amount_decimal = null;
}

/** Request payload for CreditNoteLine#list. */
class CreditNoteLineListMatch
{
    public string $id;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** CreditReversal entity data model. */
class CreditReversal
{
    public int $amount;
    public int $created;
    public string $currency;
    public string $financial_account;
    public ?string $hosted_regulatory_receipt_url = null;
    public string $id;
    public bool $livemode;
    public array $metadata;
    public string $network;
    public string $object;
    public string $received_credit;
    public string $status;
    public array $status_transitions;
    public mixed $transaction = null;
}

/** Request payload for CreditReversal#load. */
class CreditReversalLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for CreditReversal#list. */
class CreditReversalListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public string $financial_account;
    public ?int $limit = null;
    public ?string $received_credit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for CreditReversal#create. */
class CreditReversalCreateData
{
    public int $amount;
    public int $created;
    public string $currency;
    public string $financial_account;
    public ?string $hosted_regulatory_receipt_url = null;
    public string $id;
    public bool $livemode;
    public array $metadata;
    public string $network;
    public string $object;
    public string $received_credit;
    public string $status;
    public array $status_transitions;
    public mixed $transaction = null;
}

/** Customer entity data model. */
class Customer
{
    public mixed $address = null;
    public ?int $balance = null;
    public ?string $business_name = null;
    public mixed $cash_balance = null;
    public int $created;
    public ?string $currency = null;
    public ?string $customer_account = null;
    public mixed $default_source = null;
    public ?bool $delinquent = null;
    public ?string $description = null;
    public mixed $discount = null;
    public ?string $email = null;
    public string $id;
    public ?string $individual_name = null;
    public ?array $invoice_credit_balance = null;
    public ?string $invoice_prefix = null;
    public ?array $invoice_settings = null;
    public bool $livemode;
    public ?array $metadata = null;
    public ?string $name = null;
    public ?int $next_invoice_sequence = null;
    public string $object;
    public ?string $phone = null;
    public ?array $preferred_locales = null;
    public mixed $shipping = null;
    public array $sources;
    public array $subscriptions;
    public array $tax;
    public ?string $tax_exempt = null;
    public array $tax_ids;
    public mixed $test_clock = null;
}

/** Request payload for Customer#load. */
class CustomerLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Customer#list. */
class CustomerListMatch
{
    public mixed $created = null;
    public ?string $email = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $test_clock = null;
}

/** Request payload for Customer#create. */
class CustomerCreateData
{
    public string $id;
    public mixed $address = null;
    public ?int $balance = null;
    public ?string $business_name = null;
    public mixed $cash_balance = null;
    public int $created;
    public ?string $currency = null;
    public ?string $customer_account = null;
    public mixed $default_source = null;
    public ?bool $delinquent = null;
    public ?string $description = null;
    public mixed $discount = null;
    public ?string $email = null;
    public ?string $individual_name = null;
    public ?array $invoice_credit_balance = null;
    public ?string $invoice_prefix = null;
    public ?array $invoice_settings = null;
    public bool $livemode;
    public ?array $metadata = null;
    public ?string $name = null;
    public ?int $next_invoice_sequence = null;
    public string $object;
    public ?string $phone = null;
    public ?array $preferred_locales = null;
    public mixed $shipping = null;
    public array $sources;
    public array $subscriptions;
    public array $tax;
    public ?string $tax_exempt = null;
    public array $tax_ids;
    public mixed $test_clock = null;
}

/** Request payload for Customer#remove. */
class CustomerRemoveMatch
{
    public string $id;
}

/** CustomerBalanceTransaction entity data model. */
class CustomerBalanceTransaction
{
    public int $amount;
    public mixed $checkout_session = null;
    public int $created;
    public mixed $credit_note = null;
    public string $currency;
    public mixed $customer;
    public ?string $customer_account = null;
    public ?string $description = null;
    public int $ending_balance;
    public string $id;
    public mixed $invoice = null;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public string $type;
}

/** Request payload for CustomerBalanceTransaction#load. */
class CustomerBalanceTransactionLoadMatch
{
    public string $customer_id;
    public string $id;
    public ?array $expand = null;
}

/** Request payload for CustomerBalanceTransaction#create. */
class CustomerBalanceTransactionCreateData
{
    public ?string $customer_id = null;
    public string $id;
    public int $amount;
    public mixed $checkout_session = null;
    public int $created;
    public mixed $credit_note = null;
    public string $currency;
    public mixed $customer;
    public ?string $customer_account = null;
    public ?string $description = null;
    public int $ending_balance;
    public mixed $invoice = null;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public string $type;
}

/** CustomerSession entity data model. */
class CustomerSession
{
    public string $client_secret;
    public array $components;
    public int $created;
    public mixed $customer;
    public ?string $customer_account = null;
    public int $expires_at;
    public bool $livemode;
    public string $object;
}

/** Request payload for CustomerSession#create. */
class CustomerSessionCreateData
{
    public string $client_secret;
    public array $components;
    public int $created;
    public mixed $customer;
    public ?string $customer_account = null;
    public int $expires_at;
    public bool $livemode;
    public string $object;
}

/** DebitReversal entity data model. */
class DebitReversal
{
    public int $amount;
    public int $created;
    public string $currency;
    public ?string $financial_account = null;
    public ?string $hosted_regulatory_receipt_url = null;
    public string $id;
    public mixed $linked_flows = null;
    public bool $livemode;
    public array $metadata;
    public string $network;
    public string $object;
    public string $received_debit;
    public string $status;
    public array $status_transitions;
    public mixed $transaction = null;
}

/** Request payload for DebitReversal#load. */
class DebitReversalLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for DebitReversal#list. */
class DebitReversalListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public string $financial_account;
    public ?int $limit = null;
    public ?string $received_debit = null;
    public ?string $resolution = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for DebitReversal#create. */
class DebitReversalCreateData
{
    public int $amount;
    public int $created;
    public string $currency;
    public ?string $financial_account = null;
    public ?string $hosted_regulatory_receipt_url = null;
    public string $id;
    public mixed $linked_flows = null;
    public bool $livemode;
    public array $metadata;
    public string $network;
    public string $object;
    public string $received_debit;
    public string $status;
    public array $status_transitions;
    public mixed $transaction = null;
}

/** DeletedAccount entity data model. */
class DeletedAccount
{
    public ?string $id = null;
}

/** Request payload for DeletedAccount#remove. */
class DeletedAccountRemoveMatch
{
    public string $id;
}

/** DeletedApplePayDomain entity data model. */
class DeletedApplePayDomain
{
    public ?string $id = null;
}

/** Request payload for DeletedApplePayDomain#remove. */
class DeletedApplePayDomainRemoveMatch
{
    public string $id;
}

/** DeletedCoupon entity data model. */
class DeletedCoupon
{
    public ?string $id = null;
}

/** Request payload for DeletedCoupon#remove. */
class DeletedCouponRemoveMatch
{
    public string $id;
}

/** DeletedExternalAccount entity data model. */
class DeletedExternalAccount
{
    public ?string $id = null;
}

/** Request payload for DeletedExternalAccount#remove. */
class DeletedExternalAccountRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** DeletedInvoiceitem entity data model. */
class DeletedInvoiceitem
{
    public ?string $id = null;
}

/** Request payload for DeletedInvoiceitem#remove. */
class DeletedInvoiceitemRemoveMatch
{
    public string $id;
}

/** DeletedPerson entity data model. */
class DeletedPerson
{
    public ?string $id = null;
}

/** Request payload for DeletedPerson#remove. */
class DeletedPersonRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** DeletedPlan entity data model. */
class DeletedPlan
{
    public ?string $id = null;
}

/** Request payload for DeletedPlan#remove. */
class DeletedPlanRemoveMatch
{
    public string $id;
}

/** DeletedProductFeature entity data model. */
class DeletedProductFeature
{
    public ?string $id = null;
}

/** Request payload for DeletedProductFeature#remove. */
class DeletedProductFeatureRemoveMatch
{
    public string $id;
    public string $product_id;
}

/** DeletedSubscriptionItem entity data model. */
class DeletedSubscriptionItem
{
    public ?string $id = null;
}

/** Request payload for DeletedSubscriptionItem#remove. */
class DeletedSubscriptionItemRemoveMatch
{
    public string $id;
}

/** DeletedWebhookEndpoint entity data model. */
class DeletedWebhookEndpoint
{
    public ?string $id = null;
}

/** Request payload for DeletedWebhookEndpoint#remove. */
class DeletedWebhookEndpointRemoveMatch
{
    public string $id;
}

/** Discount entity data model. */
class Discount
{
    public ?string $checkout_session = null;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?int $end = null;
    public string $id;
    public ?string $invoice = null;
    public ?string $invoice_item = null;
    public string $object;
    public mixed $promotion_code = null;
    public array $source;
    public int $start;
    public ?string $subscription = null;
    public ?string $subscription_item = null;
}

/** Request payload for Discount#load. */
class DiscountLoadMatch
{
    public string $customer_id;
    public ?string $subscription_id = null;
    public ?array $expand = null;
}

/** Request payload for Discount#remove. */
class DiscountRemoveMatch
{
    public string $customer_id;
}

/** Dispute entity data model. */
class Dispute
{
    public int $amount;
    public array $balance_transactions;
    public mixed $charge;
    public int $created;
    public string $currency;
    public array $enhanced_eligibility_types;
    public array $evidence;
    public array $evidence_details;
    public string $id;
    public bool $is_charge_refundable;
    public bool $livemode;
    public ?string $loss_reason = null;
    public array $metadata;
    public string $object;
    public mixed $payment_intent = null;
    public array $payment_method_details;
    public string $reason;
    public string $status;
    public mixed $transaction;
    public mixed $treasury = null;
}

/** Request payload for Dispute#load. */
class DisputeLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Dispute#list. */
class DisputeListMatch
{
    public ?string $charge = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $payment_intent = null;
    public ?string $starting_after = null;
}

/** Request payload for Dispute#create. */
class DisputeCreateData
{
    public string $id;
    public int $amount;
    public array $balance_transactions;
    public mixed $charge;
    public int $created;
    public string $currency;
    public array $enhanced_eligibility_types;
    public array $evidence;
    public array $evidence_details;
    public bool $is_charge_refundable;
    public bool $livemode;
    public ?string $loss_reason = null;
    public array $metadata;
    public string $object;
    public mixed $payment_intent = null;
    public array $payment_method_details;
    public string $reason;
    public string $status;
    public mixed $transaction;
    public mixed $treasury = null;
}

/** Domain entity data model. */
class Domain
{
    public int $created;
    public string $domain_name;
    public string $id;
    public bool $livemode;
    public string $object;
}

/** Request payload for Domain#list. */
class DomainListMatch
{
    public ?string $domain_name = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** EarlyFraudWarning entity data model. */
class EarlyFraudWarning
{
    public bool $actionable;
    public mixed $charge;
    public int $created;
    public string $fraud_type;
    public string $id;
    public bool $livemode;
    public string $object;
    public mixed $payment_intent = null;
}

/** Request payload for EarlyFraudWarning#load. */
class EarlyFraudWarningLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for EarlyFraudWarning#list. */
class EarlyFraudWarningListMatch
{
    public ?string $charge = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $payment_intent = null;
    public ?string $starting_after = null;
}

/** EphemeralKey entity data model. */
class EphemeralKey
{
    public int $created;
    public int $expires;
    public string $id;
    public bool $livemode;
    public string $object;
    public ?string $secret = null;
}

/** Request payload for EphemeralKey#create. */
class EphemeralKeyCreateData
{
    public int $created;
    public int $expires;
    public string $id;
    public bool $livemode;
    public string $object;
    public ?string $secret = null;
}

/** Request payload for EphemeralKey#remove. */
class EphemeralKeyRemoveMatch
{
    public string $id;
}

/** Event entity data model. */
class Event
{
    public ?string $account = null;
    public ?string $api_version = null;
    public ?string $context = null;
    public int $created;
    public array $data;
    public string $id;
    public bool $livemode;
    public string $object;
    public int $pending_webhooks;
    public mixed $request = null;
    public string $type;
}

/** Request payload for Event#load. */
class EventLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Event#list. */
class EventListMatch
{
    public mixed $created = null;
    public ?bool $delivery_success = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $type = null;
}

/** ExchangeRate entity data model. */
class ExchangeRate
{
    public string $id;
    public string $object;
    public array $rates;
}

/** Request payload for ExchangeRate#load. */
class ExchangeRateLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ExchangeRate#list. */
class ExchangeRateListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** ExternalAccount entity data model. */
class ExternalAccount
{
    public array $data;
    public bool $has_more;
    public ?string $id = null;
    public string $object;
    public string $url;
}

/** Request payload for ExternalAccount#load. */
class ExternalAccountLoadMatch
{
    public string $account_id;
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ExternalAccount#list. */
class ExternalAccountListMatch
{
    public string $account_id;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $object = null;
    public ?string $starting_after = null;
}

/** Request payload for ExternalAccount#create. */
class ExternalAccountCreateData
{
    public string $id;
    public array $data;
    public bool $has_more;
    public string $object;
    public string $url;
}

/** Feature entity data model. */
class Feature
{
    public bool $active;
    public array $entitlement_feature;
    public string $id;
    public bool $livemode;
    public string $lookup_key;
    public array $metadata;
    public string $name;
    public string $object;
}

/** Request payload for Feature#load. */
class FeatureLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Feature#list. */
class FeatureListMatch
{
    public ?bool $archived = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $lookup_key = null;
    public ?string $starting_after = null;
}

/** Request payload for Feature#create. */
class FeatureCreateData
{
    public string $id;
    public bool $active;
    public array $entitlement_feature;
    public bool $livemode;
    public string $lookup_key;
    public array $metadata;
    public string $name;
    public string $object;
}

/** FeedbackOption entity data model. */
class FeedbackOption
{
    public ?int $deactivated_at = null;
    public string $description;
    public string $id;
    public bool $livemode;
    public string $object;
    public string $status;
    public array $status_transitions;
}

/** Request payload for FeedbackOption#load. */
class FeedbackOptionLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for FeedbackOption#list. */
class FeedbackOptionListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for FeedbackOption#create. */
class FeedbackOptionCreateData
{
    public string $id;
    public ?int $deactivated_at = null;
    public string $description;
    public bool $livemode;
    public string $object;
    public string $status;
    public array $status_transitions;
}

/** File entity data model. */
class File
{
    public int $created;
    public array $data;
    public ?int $expires_at = null;
    public ?string $filename = null;
    public bool $has_more;
    public string $id;
    public array $links;
    public string $object;
    public string $purpose;
    public int $size;
    public ?string $title = null;
    public ?string $type = null;
    public string $url;
}

/** Request payload for File#load. */
class FileLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for File#list. */
class FileListMatch
{
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $purpose = null;
    public ?string $starting_after = null;
}

/** Request payload for File#create. */
class FileCreateData
{
    public int $created;
    public array $data;
    public ?int $expires_at = null;
    public ?string $filename = null;
    public bool $has_more;
    public string $id;
    public array $links;
    public string $object;
    public string $purpose;
    public int $size;
    public ?string $title = null;
    public ?string $type = null;
    public string $url;
}

/** FileLink entity data model. */
class FileLink
{
    public int $created;
    public bool $expired;
    public ?int $expires_at = null;
    public mixed $file;
    public string $id;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public ?string $url = null;
}

/** Request payload for FileLink#load. */
class FileLinkLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for FileLink#list. */
class FileLinkListMatch
{
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?bool $expired = null;
    public ?string $file = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for FileLink#create. */
class FileLinkCreateData
{
    public string $id;
    public int $created;
    public bool $expired;
    public ?int $expires_at = null;
    public mixed $file;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public ?string $url = null;
}

/** FinancialAccount entity data model. */
class FinancialAccount
{
    public ?array $active_features = null;
    public array $balance;
    public string $country;
    public int $created;
    public array $features;
    public array $financial_addresses;
    public string $id;
    public ?bool $is_default = null;
    public bool $livemode;
    public ?array $metadata = null;
    public ?string $nickname = null;
    public string $object;
    public ?array $pending_features = null;
    public mixed $platform_restrictions = null;
    public ?array $restricted_features = null;
    public string $status;
    public array $status_details;
    public array $supported_currencies;
}

/** Request payload for FinancialAccount#load. */
class FinancialAccountLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for FinancialAccount#list. */
class FinancialAccountListMatch
{
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for FinancialAccount#create. */
class FinancialAccountCreateData
{
    public string $id;
    public ?array $active_features = null;
    public array $balance;
    public string $country;
    public int $created;
    public array $features;
    public array $financial_addresses;
    public ?bool $is_default = null;
    public bool $livemode;
    public ?array $metadata = null;
    public ?string $nickname = null;
    public string $object;
    public ?array $pending_features = null;
    public mixed $platform_restrictions = null;
    public ?array $restricted_features = null;
    public string $status;
    public array $status_details;
    public array $supported_currencies;
}

/** FinancialAccountFeature entity data model. */
class FinancialAccountFeature
{
    public array $card_issuing;
    public array $deposit_insurance;
    public ?array $financial_addresses = null;
    public ?string $id = null;
    public ?array $inbound_transfers = null;
    public array $intra_stripe_flows;
    public string $object;
    public ?array $outbound_payments = null;
    public ?array $outbound_transfers = null;
}

/** Request payload for FinancialAccountFeature#load. */
class FinancialAccountFeatureLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for FinancialAccountFeature#create. */
class FinancialAccountFeatureCreateData
{
    public string $id;
    public array $card_issuing;
    public array $deposit_insurance;
    public ?array $financial_addresses = null;
    public ?array $inbound_transfers = null;
    public array $intra_stripe_flows;
    public string $object;
    public ?array $outbound_payments = null;
    public ?array $outbound_transfers = null;
}

/** FundCashBalance entity data model. */
class FundCashBalance
{
    public array $adjusted_for_overdraft;
    public array $applied_to_payment;
    public int $created;
    public string $currency;
    public mixed $customer;
    public ?string $customer_account = null;
    public int $ending_balance;
    public array $funded;
    public string $id;
    public bool $livemode;
    public int $net_amount;
    public string $object;
    public array $refunded_from_payment;
    public array $transferred_to_balance;
    public string $type;
    public array $unapplied_from_payment;
}

/** Request payload for FundCashBalance#create. */
class FundCashBalanceCreateData
{
    public string $customer_id;
    public array $adjusted_for_overdraft;
    public array $applied_to_payment;
    public int $created;
    public string $currency;
    public mixed $customer;
    public ?string $customer_account = null;
    public int $ending_balance;
    public array $funded;
    public string $id;
    public bool $livemode;
    public int $net_amount;
    public string $object;
    public array $refunded_from_payment;
    public array $transferred_to_balance;
    public string $type;
    public array $unapplied_from_payment;
}

/** FundingInstruction entity data model. */
class FundingInstruction
{
    public string $country;
    public array $financial_addresses;
    public string $type;
}

/** Request payload for FundingInstruction#create. */
class FundingInstructionCreateData
{
    public string $customer_id;
    public string $country;
    public array $financial_addresses;
    public string $type;
}

/** History entity data model. */
class History
{
    public int $amount;
    public int $available_on;
    public string $balance_type;
    public int $created;
    public string $currency;
    public ?string $description = null;
    public ?float $exchange_rate = null;
    public int $fee;
    public array $fee_details;
    public string $id;
    public int $net;
    public string $object;
    public string $reporting_category;
    public mixed $source = null;
    public string $status;
    public string $type;
}

/** Request payload for History#list. */
class HistoryListMatch
{
    public mixed $created = null;
    public ?string $currency = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $payout = null;
    public ?string $source = null;
    public ?string $starting_after = null;
    public ?string $type = null;
}

/** InboundTransfer entity data model. */
class InboundTransfer
{
    public int $amount;
    public bool $cancelable;
    public int $created;
    public string $currency;
    public ?string $description = null;
    public mixed $failure_details = null;
    public string $financial_account;
    public ?string $hosted_regulatory_receipt_url = null;
    public string $id;
    public array $linked_flows;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public ?string $origin_payment_method = null;
    public mixed $origin_payment_method_details = null;
    public ?bool $returned = null;
    public string $statement_descriptor;
    public string $status;
    public array $status_transitions;
    public mixed $transaction = null;
}

/** Request payload for InboundTransfer#load. */
class InboundTransferLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for InboundTransfer#list. */
class InboundTransferListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public string $financial_account;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for InboundTransfer#create. */
class InboundTransferCreateData
{
    public int $amount;
    public bool $cancelable;
    public int $created;
    public string $currency;
    public ?string $description = null;
    public mixed $failure_details = null;
    public string $financial_account;
    public ?string $hosted_regulatory_receipt_url = null;
    public string $id;
    public array $linked_flows;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public ?string $origin_payment_method = null;
    public mixed $origin_payment_method_details = null;
    public ?bool $returned = null;
    public string $statement_descriptor;
    public string $status;
    public array $status_transitions;
    public mixed $transaction = null;
}

/** Install entity data model. */
class Install
{
    public string $account;
    public string $app;
    public bool $approval_required;
    public ?string $auth_code = null;
    public string $channel;
    public array $content_security_policy_granted;
    public array $content_security_policy_pending;
    public int $created;
    public ?string $created_by = null;
    public array $endpoints_granted;
    public array $endpoints_pending;
    public string $id;
    public bool $livemode;
    public string $object;
    public array $permissions_granted;
    public array $permissions_pending;
    public string $status;
}

/** Request payload for Install#load. */
class InstallLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Install#list. */
class InstallListMatch
{
    public ?string $account = null;
    public ?string $app = null;
    public ?bool $approval_required = null;
    public ?string $channel = null;
    public mixed $created = null;
    public ?string $created_by = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for Install#create. */
class InstallCreateData
{
    public string $id;
    public string $account;
    public string $app;
    public bool $approval_required;
    public ?string $auth_code = null;
    public string $channel;
    public array $content_security_policy_granted;
    public array $content_security_policy_pending;
    public int $created;
    public ?string $created_by = null;
    public array $endpoints_granted;
    public array $endpoints_pending;
    public bool $livemode;
    public string $object;
    public array $permissions_granted;
    public array $permissions_pending;
    public string $status;
}

/** Invoice entity data model. */
class Invoice
{
    public ?string $account_country = null;
    public ?string $account_name = null;
    public ?array $account_tax_ids = null;
    public int $amount_due;
    public int $amount_overpaid;
    public int $amount_paid;
    public int $amount_paid_off_stripe;
    public int $amount_remaining;
    public int $amount_shipping;
    public mixed $application = null;
    public int $attempt_count;
    public bool $attempted;
    public bool $auto_advance;
    public array $automatic_tax;
    public ?int $automatically_finalizes_at = null;
    public ?string $billing_reason = null;
    public string $collection_method;
    public mixed $confirmation_secret = null;
    public int $created;
    public string $currency;
    public ?array $custom_fields = null;
    public mixed $customer;
    public ?string $customer_account = null;
    public mixed $customer_address = null;
    public ?string $customer_email = null;
    public ?string $customer_name = null;
    public ?string $customer_phone = null;
    public mixed $customer_shipping = null;
    public ?string $customer_tax_exempt = null;
    public ?array $customer_tax_ids = null;
    public mixed $default_payment_method = null;
    public mixed $default_source = null;
    public array $default_tax_rates;
    public ?string $description = null;
    public array $discounts;
    public ?int $due_date = null;
    public ?int $effective_at = null;
    public ?int $ending_balance = null;
    public ?string $footer = null;
    public mixed $from_invoice = null;
    public ?string $hosted_invoice_url = null;
    public string $id;
    public ?string $invoice_pdf = null;
    public array $issuer;
    public mixed $last_finalization_error = null;
    public mixed $latest_revision = null;
    public array $lines;
    public bool $livemode;
    public ?array $metadata = null;
    public ?int $next_payment_attempt = null;
    public ?string $number = null;
    public string $object;
    public mixed $on_behalf_of = null;
    public mixed $parent = null;
    public array $payment_settings;
    public array $payments;
    public int $period_end;
    public int $period_start;
    public int $post_payment_credit_notes_amount;
    public int $pre_payment_credit_notes_amount;
    public ?string $receipt_number = null;
    public mixed $rendering = null;
    public mixed $shipping_cost = null;
    public mixed $shipping_details = null;
    public int $starting_balance;
    public ?string $statement_descriptor = null;
    public ?string $status = null;
    public ?array $status_details = null;
    public array $status_transitions;
    public int $subtotal;
    public ?int $subtotal_excluding_tax = null;
    public mixed $test_clock = null;
    public array $threshold_reason;
    public int $total;
    public ?array $total_discount_amounts = null;
    public ?int $total_excluding_tax = null;
    public ?array $total_pretax_credit_amounts = null;
    public ?array $total_taxes = null;
    public ?int $webhooks_delivered_at = null;
}

/** Request payload for Invoice#load. */
class InvoiceLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Invoice#list. */
class InvoiceListMatch
{
    public ?string $collection_method = null;
    public mixed $created = null;
    public ?string $customer = null;
    public ?string $customer_account = null;
    public mixed $due_date = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
    public ?string $subscription = null;
}

/** Request payload for Invoice#create. */
class InvoiceCreateData
{
    public string $id;
    public ?string $account_country = null;
    public ?string $account_name = null;
    public ?array $account_tax_ids = null;
    public int $amount_due;
    public int $amount_overpaid;
    public int $amount_paid;
    public int $amount_paid_off_stripe;
    public int $amount_remaining;
    public int $amount_shipping;
    public mixed $application = null;
    public int $attempt_count;
    public bool $attempted;
    public bool $auto_advance;
    public array $automatic_tax;
    public ?int $automatically_finalizes_at = null;
    public ?string $billing_reason = null;
    public string $collection_method;
    public mixed $confirmation_secret = null;
    public int $created;
    public string $currency;
    public ?array $custom_fields = null;
    public mixed $customer;
    public ?string $customer_account = null;
    public mixed $customer_address = null;
    public ?string $customer_email = null;
    public ?string $customer_name = null;
    public ?string $customer_phone = null;
    public mixed $customer_shipping = null;
    public ?string $customer_tax_exempt = null;
    public ?array $customer_tax_ids = null;
    public mixed $default_payment_method = null;
    public mixed $default_source = null;
    public array $default_tax_rates;
    public ?string $description = null;
    public array $discounts;
    public ?int $due_date = null;
    public ?int $effective_at = null;
    public ?int $ending_balance = null;
    public ?string $footer = null;
    public mixed $from_invoice = null;
    public ?string $hosted_invoice_url = null;
    public ?string $invoice_pdf = null;
    public array $issuer;
    public mixed $last_finalization_error = null;
    public mixed $latest_revision = null;
    public array $lines;
    public bool $livemode;
    public ?array $metadata = null;
    public ?int $next_payment_attempt = null;
    public ?string $number = null;
    public string $object;
    public mixed $on_behalf_of = null;
    public mixed $parent = null;
    public array $payment_settings;
    public array $payments;
    public int $period_end;
    public int $period_start;
    public int $post_payment_credit_notes_amount;
    public int $pre_payment_credit_notes_amount;
    public ?string $receipt_number = null;
    public mixed $rendering = null;
    public mixed $shipping_cost = null;
    public mixed $shipping_details = null;
    public int $starting_balance;
    public ?string $statement_descriptor = null;
    public ?string $status = null;
    public ?array $status_details = null;
    public array $status_transitions;
    public int $subtotal;
    public ?int $subtotal_excluding_tax = null;
    public mixed $test_clock = null;
    public array $threshold_reason;
    public int $total;
    public ?array $total_discount_amounts = null;
    public ?int $total_excluding_tax = null;
    public ?array $total_pretax_credit_amounts = null;
    public ?array $total_taxes = null;
    public ?int $webhooks_delivered_at = null;
}

/** Request payload for Invoice#remove. */
class InvoiceRemoveMatch
{
    public string $id;
}

/** InvoicePayment entity data model. */
class InvoicePayment
{
    public ?int $amount_paid = null;
    public int $amount_requested;
    public int $created;
    public string $currency;
    public string $id;
    public mixed $invoice;
    public bool $is_default;
    public bool $livemode;
    public string $object;
    public array $payment;
    public string $status;
    public array $status_transitions;
}

/** Request payload for InvoicePayment#load. */
class InvoicePaymentLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for InvoicePayment#list. */
class InvoicePaymentListMatch
{
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?string $invoice = null;
    public ?int $limit = null;
    public ?array $payment = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** InvoiceRenderingTemplate entity data model. */
class InvoiceRenderingTemplate
{
    public int $created;
    public string $id;
    public bool $livemode;
    public ?array $metadata = null;
    public ?string $nickname = null;
    public string $object;
    public string $status;
    public int $version;
}

/** Request payload for InvoiceRenderingTemplate#load. */
class InvoiceRenderingTemplateLoadMatch
{
    public string $id;
    public ?array $expand = null;
    public ?int $version = null;
}

/** Request payload for InvoiceRenderingTemplate#list. */
class InvoiceRenderingTemplateListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for InvoiceRenderingTemplate#create. */
class InvoiceRenderingTemplateCreateData
{
    public string $template;
    public int $created;
    public string $id;
    public bool $livemode;
    public ?array $metadata = null;
    public ?string $nickname = null;
    public string $object;
    public string $status;
    public int $version;
}

/** Invoiceitem entity data model. */
class Invoiceitem
{
    public int $amount;
    public string $currency;
    public mixed $customer;
    public ?string $customer_account = null;
    public int $date;
    public ?string $description = null;
    public bool $discountable;
    public ?array $discounts = null;
    public ?array $frozen_fields = null;
    public string $id;
    public mixed $invoice = null;
    public ?array $invoicing_rules = null;
    public bool $livemode;
    public ?array $metadata = null;
    public ?int $net_amount = null;
    public string $object;
    public mixed $parent = null;
    public array $period;
    public mixed $pricing = null;
    public bool $proration;
    public array $proration_details;
    public int $quantity;
    public string $quantity_decimal;
    public ?array $tax_rates = null;
    public mixed $test_clock = null;
}

/** Request payload for Invoiceitem#load. */
class InvoiceitemLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Invoiceitem#list. */
class InvoiceitemListMatch
{
    public mixed $created = null;
    public ?string $customer = null;
    public ?string $customer_account = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?string $invoice = null;
    public ?int $limit = null;
    public ?bool $pending = null;
    public ?string $starting_after = null;
}

/** Request payload for Invoiceitem#create. */
class InvoiceitemCreateData
{
    public string $id;
    public int $amount;
    public string $currency;
    public mixed $customer;
    public ?string $customer_account = null;
    public int $date;
    public ?string $description = null;
    public bool $discountable;
    public ?array $discounts = null;
    public ?array $frozen_fields = null;
    public mixed $invoice = null;
    public ?array $invoicing_rules = null;
    public bool $livemode;
    public ?array $metadata = null;
    public ?int $net_amount = null;
    public string $object;
    public mixed $parent = null;
    public array $period;
    public mixed $pricing = null;
    public bool $proration;
    public array $proration_details;
    public int $quantity;
    public string $quantity_decimal;
    public ?array $tax_rates = null;
    public mixed $test_clock = null;
}

/** Line entity data model. */
class Line
{
    public int $amount;
    public string $currency;
    public ?string $description = null;
    public int $discount_amount;
    public ?array $discount_amounts = null;
    public bool $discountable;
    public array $discounts;
    public string $id;
    public ?string $invoice = null;
    public ?string $invoice_line_item = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $parent = null;
    public array $period;
    public ?array $pretax_credit_amounts = null;
    public mixed $pricing = null;
    public ?int $quantity = null;
    public ?string $quantity_decimal = null;
    public mixed $subscription = null;
    public int $subtotal;
    public array $tax_rates;
    public ?array $taxes = null;
    public string $type;
    public ?int $unit_amount = null;
    public ?string $unit_amount_decimal = null;
}

/** Request payload for Line#list. */
class LineListMatch
{
    public ?int $amount = null;
    public ?int $credit_amount = null;
    public ?int $effective_at = null;
    public ?string $email_type = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public string $invoice;
    public ?int $limit = null;
    public ?array $line = null;
    public ?string $memo = null;
    public ?array $metadata = null;
    public ?int $out_of_band_amount = null;
    public ?string $reason = null;
    public ?array $refund = null;
    public ?int $refund_amount = null;
    public ?array $shipping_cost = null;
    public ?string $starting_after = null;
}

/** Request payload for Line#create. */
class LineCreateData
{
    public string $id;
    public string $invoice_id;
    public int $amount;
    public string $currency;
    public ?string $description = null;
    public int $discount_amount;
    public ?array $discount_amounts = null;
    public bool $discountable;
    public array $discounts;
    public ?string $invoice = null;
    public ?string $invoice_line_item = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $parent = null;
    public array $period;
    public ?array $pretax_credit_amounts = null;
    public mixed $pricing = null;
    public ?int $quantity = null;
    public ?string $quantity_decimal = null;
    public mixed $subscription = null;
    public int $subtotal;
    public array $tax_rates;
    public ?array $taxes = null;
    public string $type;
    public ?int $unit_amount = null;
    public ?string $unit_amount_decimal = null;
}

/** LineItem entity data model. */
class LineItem
{
    public mixed $adjustable_quantity = null;
    public int $amount;
    public int $amount_discount;
    public int $amount_subtotal;
    public int $amount_tax;
    public int $amount_total;
    public string $currency;
    public ?string $description = null;
    public ?array $discounts = null;
    public string $id;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public ?string $performance_location = null;
    public ?float $price = null;
    public ?string $product = null;
    public int $quantity;
    public string $reference;
    public mixed $reversal = null;
    public string $tax_behavior;
    public ?array $tax_breakdown = null;
    public string $tax_code;
    public ?array $taxes = null;
    public string $type;
}

/** Request payload for LineItem#list. */
class LineItemListMatch
{
    public string $payment_link_id;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** LinkedAccount entity data model. */
class LinkedAccount
{
    public mixed $account_holder = null;
    public ?array $account_numbers = null;
    public mixed $balance = null;
    public mixed $balance_refresh = null;
    public string $category;
    public int $created;
    public ?string $display_name = null;
    public string $id;
    public string $institution_name;
    public ?string $last4 = null;
    public bool $livemode;
    public string $object;
    public mixed $ownership = null;
    public mixed $ownership_refresh = null;
    public ?array $permissions = null;
    public string $status;
    public ?array $status_details = null;
    public string $subcategory;
    public ?array $subscriptions = null;
    public array $supported_payment_method_types;
    public mixed $transaction_refresh = null;
}

/** Request payload for LinkedAccount#list. */
class LinkedAccountListMatch
{
    public ?array $account_holder = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $session = null;
    public ?string $starting_after = null;
}

/** LinkedAccountOwner entity data model. */
class LinkedAccountOwner
{
    public ?string $email = null;
    public string $id;
    public string $name;
    public string $object;
    public string $ownership;
    public ?string $phone = null;
    public ?string $raw_address = null;
    public ?int $refreshed_at = null;
}

/** Request payload for LinkedAccountOwner#list. */
class LinkedAccountOwnerListMatch
{
    public string $account;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public string $ownership;
    public ?string $starting_after = null;
}

/** Location entity data model. */
class Location
{
    public array $address;
    public ?array $address_kana = null;
    public ?array $address_kanji = null;
    public ?string $city = null;
    public ?string $configuration_overrides = null;
    public ?string $country = null;
    public ?string $description = null;
    public string $display_name;
    public ?string $display_name_kana = null;
    public ?string $display_name_kanji = null;
    public string $id;
    public ?string $line1 = null;
    public ?string $line2 = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public ?string $phone = null;
    public ?string $postal_code = null;
    public ?string $state = null;
    public string $type;
}

/** Request payload for Location#load. */
class LocationLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Location#list. */
class LocationListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public string $type;
}

/** Request payload for Location#create. */
class LocationCreateData
{
    public string $id;
    public array $address;
    public ?array $address_kana = null;
    public ?array $address_kanji = null;
    public ?string $city = null;
    public ?string $configuration_overrides = null;
    public ?string $country = null;
    public ?string $description = null;
    public string $display_name;
    public ?string $display_name_kana = null;
    public ?string $display_name_kanji = null;
    public ?string $line1 = null;
    public ?string $line2 = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public ?string $phone = null;
    public ?string $postal_code = null;
    public ?string $state = null;
    public string $type;
}

/** Request payload for Location#remove. */
class LocationRemoveMatch
{
    public string $id;
}

/** LoginLink entity data model. */
class LoginLink
{
    public int $created;
    public string $object;
    public string $url;
}

/** Request payload for LoginLink#create. */
class LoginLinkCreateData
{
    public string $account_id;
    public int $created;
    public string $object;
    public string $url;
}

/** Mandate entity data model. */
class Mandate
{
    public array $customer_acceptance;
    public string $id;
    public bool $livemode;
    public ?array $multi_use = null;
    public string $object;
    public ?string $on_behalf_of = null;
    public mixed $payment_method;
    public array $payment_method_details;
    public array $single_use;
    public string $status;
    public string $type;
}

/** Request payload for Mandate#load. */
class MandateLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Meter entity data model. */
class Meter
{
    public int $created;
    public array $customer_mapping;
    public array $default_aggregation;
    public string $display_name;
    public string $event_name;
    public ?string $event_time_window = null;
    public string $id;
    public bool $livemode;
    public string $object;
    public string $status;
    public array $status_transitions;
    public int $updated;
    public array $value_settings;
}

/** Request payload for Meter#load. */
class MeterLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Meter#list. */
class MeterListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for Meter#create. */
class MeterCreateData
{
    public string $id;
    public int $created;
    public array $customer_mapping;
    public array $default_aggregation;
    public string $display_name;
    public string $event_name;
    public ?string $event_time_window = null;
    public bool $livemode;
    public string $object;
    public string $status;
    public array $status_transitions;
    public int $updated;
    public array $value_settings;
}

/** MeterEvent entity data model. */
class MeterEvent
{
}

/** Request payload for MeterEvent#create. */
class MeterEventCreateData
{
}

/** MeterEventAdjustment entity data model. */
class MeterEventAdjustment
{
}

/** Request payload for MeterEventAdjustment#create. */
class MeterEventAdjustmentCreateData
{
}

/** MeterEventSummary entity data model. */
class MeterEventSummary
{
    public float $aggregated_value;
    public int $end_time;
    public string $id;
    public bool $livemode;
    public string $meter;
    public string $object;
    public int $start_time;
}

/** Request payload for MeterEventSummary#list. */
class MeterEventSummaryListMatch
{
    public string $id;
    public string $customer;
    public int $end_time;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public int $start_time;
    public ?string $starting_after = null;
    public ?string $value_grouping_window = null;
}

/** OnboardingLink entity data model. */
class OnboardingLink
{
    public mixed $apple_terms_and_conditions = null;
}

/** Request payload for OnboardingLink#create. */
class OnboardingLinkCreateData
{
    public mixed $apple_terms_and_conditions = null;
}

/** Order entity data model. */
class Order
{
    public int $amount_fees;
    public int $amount_subtotal;
    public int $amount_total;
    public array $beneficiary;
    public ?int $canceled_at = null;
    public ?string $cancellation_reason = null;
    public ?string $certificate = null;
    public ?int $confirmed_at = null;
    public int $created;
    public string $currency;
    public ?int $delayed_at = null;
    public ?int $delivered_at = null;
    public array $delivery_details;
    public int $expected_delivery_year;
    public string $id;
    public bool $livemode;
    public array $metadata;
    public string $metric_tons;
    public string $object;
    public mixed $product;
    public ?int $product_substituted_at = null;
    public string $status;
}

/** Request payload for Order#load. */
class OrderLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Order#list. */
class OrderListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for Order#create. */
class OrderCreateData
{
    public string $id;
    public int $amount_fees;
    public int $amount_subtotal;
    public int $amount_total;
    public array $beneficiary;
    public ?int $canceled_at = null;
    public ?string $cancellation_reason = null;
    public ?string $certificate = null;
    public ?int $confirmed_at = null;
    public int $created;
    public string $currency;
    public ?int $delayed_at = null;
    public ?int $delivered_at = null;
    public array $delivery_details;
    public int $expected_delivery_year;
    public bool $livemode;
    public array $metadata;
    public string $metric_tons;
    public string $object;
    public mixed $product;
    public ?int $product_substituted_at = null;
    public string $status;
}

/** OutboundPayment entity data model. */
class OutboundPayment
{
    public int $amount;
    public bool $cancelable;
    public int $created;
    public string $currency;
    public ?string $customer = null;
    public ?string $description = null;
    public ?string $destination_payment_method = null;
    public mixed $destination_payment_method_details = null;
    public mixed $end_user_details = null;
    public int $expected_arrival_date;
    public string $financial_account;
    public ?string $hosted_regulatory_receipt_url = null;
    public string $id;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $returned_details = null;
    public string $statement_descriptor;
    public string $status;
    public array $status_transitions;
    public mixed $tracking_details = null;
    public mixed $transaction;
}

/** Request payload for OutboundPayment#load. */
class OutboundPaymentLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for OutboundPayment#list. */
class OutboundPaymentListMatch
{
    public mixed $created = null;
    public ?string $customer = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public string $financial_account;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for OutboundPayment#create. */
class OutboundPaymentCreateData
{
    public string $id;
    public int $amount;
    public bool $cancelable;
    public int $created;
    public string $currency;
    public ?string $customer = null;
    public ?string $description = null;
    public ?string $destination_payment_method = null;
    public mixed $destination_payment_method_details = null;
    public mixed $end_user_details = null;
    public int $expected_arrival_date;
    public string $financial_account;
    public ?string $hosted_regulatory_receipt_url = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $returned_details = null;
    public string $statement_descriptor;
    public string $status;
    public array $status_transitions;
    public mixed $tracking_details = null;
    public mixed $transaction;
}

/** OutboundTransfer entity data model. */
class OutboundTransfer
{
    public int $amount;
    public bool $cancelable;
    public int $created;
    public string $currency;
    public ?string $description = null;
    public ?string $destination_payment_method = null;
    public array $destination_payment_method_details;
    public int $expected_arrival_date;
    public string $financial_account;
    public ?string $hosted_regulatory_receipt_url = null;
    public string $id;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $returned_details = null;
    public string $statement_descriptor;
    public string $status;
    public array $status_transitions;
    public mixed $tracking_details = null;
    public mixed $transaction;
}

/** Request payload for OutboundTransfer#load. */
class OutboundTransferLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for OutboundTransfer#list. */
class OutboundTransferListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public string $financial_account;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for OutboundTransfer#create. */
class OutboundTransferCreateData
{
    public string $id;
    public int $amount;
    public bool $cancelable;
    public int $created;
    public string $currency;
    public ?string $description = null;
    public ?string $destination_payment_method = null;
    public array $destination_payment_method_details;
    public int $expected_arrival_date;
    public string $financial_account;
    public ?string $hosted_regulatory_receipt_url = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $returned_details = null;
    public string $statement_descriptor;
    public string $status;
    public array $status_transitions;
    public mixed $tracking_details = null;
    public mixed $transaction;
}

/** PaymentAttemptRecord entity data model. */
class PaymentAttemptRecord
{
    public array $amount;
    public array $amount_authorized;
    public array $amount_canceled;
    public array $amount_failed;
    public array $amount_guaranteed;
    public array $amount_refunded;
    public array $amount_requested;
    public ?string $application = null;
    public int $created;
    public mixed $customer_details = null;
    public ?string $customer_presence = null;
    public ?string $description = null;
    public string $id;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $payment_method_details = null;
    public ?string $payment_record = null;
    public array $processor_details;
    public string $reported_by;
    public mixed $shipping_details = null;
}

/** Request payload for PaymentAttemptRecord#load. */
class PaymentAttemptRecordLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for PaymentAttemptRecord#list. */
class PaymentAttemptRecordListMatch
{
    public ?array $expand = null;
    public ?int $limit = null;
    public string $payment_record;
    public ?string $starting_after = null;
}

/** PaymentEvaluation entity data model. */
class PaymentEvaluation
{
    public array $client_device_metadata_details;
    public int $created_at;
    public ?array $customer_details = null;
    public array $events;
    public string $id;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public mixed $outcome = null;
    public array $payment_details;
    public string $recommended_action;
    public array $signals;
}

/** Request payload for PaymentEvaluation#create. */
class PaymentEvaluationCreateData
{
    public array $client_device_metadata_details;
    public int $created_at;
    public ?array $customer_details = null;
    public array $events;
    public string $id;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public mixed $outcome = null;
    public array $payment_details;
    public string $recommended_action;
    public array $signals;
}

/** PaymentIntent entity data model. */
class PaymentIntent
{
    public ?array $allowed_payment_method_types = null;
    public ?int $amount = null;
    public ?int $amount_capturable = null;
    public mixed $amount_details = null;
    public ?int $amount_received = null;
    public mixed $application = null;
    public ?int $application_fee_amount = null;
    public mixed $automatic_payment_methods = null;
    public ?int $canceled_at = null;
    public ?string $cancellation_reason = null;
    public ?string $capture_method = null;
    public ?string $client_secret = null;
    public ?string $confirmation_method = null;
    public int $created;
    public ?string $currency = null;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?string $description = null;
    public ?array $excluded_payment_method_types = null;
    public ?array $hooks = null;
    public string $id;
    public mixed $last_payment_error = null;
    public mixed $latest_charge = null;
    public bool $livemode;
    public mixed $managed_payments = null;
    public ?array $metadata = null;
    public mixed $next_action = null;
    public string $object;
    public mixed $on_behalf_of = null;
    public ?array $payment_details = null;
    public mixed $payment_method = null;
    public mixed $payment_method_configuration_details = null;
    public mixed $payment_method_options = null;
    public ?array $payment_method_types = null;
    public mixed $payment_record = null;
    public array $presentment_details;
    public mixed $processing = null;
    public ?string $receipt_email = null;
    public mixed $review = null;
    public ?string $setup_future_usage = null;
    public mixed $shipping = null;
    public ?string $statement_descriptor = null;
    public ?string $statement_descriptor_suffix = null;
    public string $status;
    public mixed $transfer_data = null;
    public ?string $transfer_group = null;
}

/** Request payload for PaymentIntent#load. */
class PaymentIntentLoadMatch
{
    public string $id;
    public ?string $client_secret = null;
    public ?array $expand = null;
}

/** Request payload for PaymentIntent#list. */
class PaymentIntentListMatch
{
    public mixed $created = null;
    public ?string $customer = null;
    public ?string $customer_account = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for PaymentIntent#create. */
class PaymentIntentCreateData
{
    public string $id;
    public ?array $allowed_payment_method_types = null;
    public ?int $amount = null;
    public ?int $amount_capturable = null;
    public mixed $amount_details = null;
    public ?int $amount_received = null;
    public mixed $application = null;
    public ?int $application_fee_amount = null;
    public mixed $automatic_payment_methods = null;
    public ?int $canceled_at = null;
    public ?string $cancellation_reason = null;
    public ?string $capture_method = null;
    public ?string $client_secret = null;
    public ?string $confirmation_method = null;
    public int $created;
    public ?string $currency = null;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?string $description = null;
    public ?array $excluded_payment_method_types = null;
    public ?array $hooks = null;
    public mixed $last_payment_error = null;
    public mixed $latest_charge = null;
    public bool $livemode;
    public mixed $managed_payments = null;
    public ?array $metadata = null;
    public mixed $next_action = null;
    public string $object;
    public mixed $on_behalf_of = null;
    public ?array $payment_details = null;
    public mixed $payment_method = null;
    public mixed $payment_method_configuration_details = null;
    public mixed $payment_method_options = null;
    public ?array $payment_method_types = null;
    public mixed $payment_record = null;
    public array $presentment_details;
    public mixed $processing = null;
    public ?string $receipt_email = null;
    public mixed $review = null;
    public ?string $setup_future_usage = null;
    public mixed $shipping = null;
    public ?string $statement_descriptor = null;
    public ?string $statement_descriptor_suffix = null;
    public string $status;
    public mixed $transfer_data = null;
    public ?string $transfer_group = null;
}

/** PaymentIntentAmountDetailsLineItem entity data model. */
class PaymentIntentAmountDetailsLineItem
{
    public ?int $discount_amount = null;
    public string $id;
    public string $object;
    public mixed $payment_method_options = null;
    public ?string $product_code = null;
    public string $product_name;
    public int $quantity;
    public mixed $tax = null;
    public int $unit_cost;
    public ?string $unit_of_measure = null;
}

/** Request payload for PaymentIntentAmountDetailsLineItem#list. */
class PaymentIntentAmountDetailsLineItemListMatch
{
    public string $intent;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** PaymentLink entity data model. */
class PaymentLink
{
    public bool $active;
    public array $after_completion;
    public bool $allow_promotion_codes;
    public mixed $application = null;
    public ?int $application_fee_amount = null;
    public ?float $application_fee_percent = null;
    public array $automatic_tax;
    public string $billing_address_collection;
    public mixed $consent_collection = null;
    public string $currency;
    public array $custom_fields;
    public array $custom_text;
    public string $customer_creation;
    public string $id;
    public ?string $inactive_message = null;
    public mixed $invoice_creation = null;
    public array $line_items;
    public bool $livemode;
    public mixed $managed_payments = null;
    public array $metadata;
    public ?array $name_collection = null;
    public string $object;
    public mixed $on_behalf_of = null;
    public ?array $optional_items = null;
    public mixed $payment_intent_data = null;
    public string $payment_method_collection;
    public mixed $payment_method_options = null;
    public ?array $payment_method_types = null;
    public array $phone_number_collection;
    public mixed $restrictions = null;
    public mixed $shipping_address_collection = null;
    public array $shipping_options;
    public string $submit_type;
    public mixed $subscription_data = null;
    public array $tax_id_collection;
    public mixed $transfer_data = null;
    public string $url;
}

/** Request payload for PaymentLink#load. */
class PaymentLinkLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for PaymentLink#list. */
class PaymentLinkListMatch
{
    public ?bool $active = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for PaymentLink#create. */
class PaymentLinkCreateData
{
    public string $id;
    public bool $active;
    public array $after_completion;
    public bool $allow_promotion_codes;
    public mixed $application = null;
    public ?int $application_fee_amount = null;
    public ?float $application_fee_percent = null;
    public array $automatic_tax;
    public string $billing_address_collection;
    public mixed $consent_collection = null;
    public string $currency;
    public array $custom_fields;
    public array $custom_text;
    public string $customer_creation;
    public ?string $inactive_message = null;
    public mixed $invoice_creation = null;
    public array $line_items;
    public bool $livemode;
    public mixed $managed_payments = null;
    public array $metadata;
    public ?array $name_collection = null;
    public string $object;
    public mixed $on_behalf_of = null;
    public ?array $optional_items = null;
    public mixed $payment_intent_data = null;
    public string $payment_method_collection;
    public mixed $payment_method_options = null;
    public ?array $payment_method_types = null;
    public array $phone_number_collection;
    public mixed $restrictions = null;
    public mixed $shipping_address_collection = null;
    public array $shipping_options;
    public string $submit_type;
    public mixed $subscription_data = null;
    public array $tax_id_collection;
    public mixed $transfer_data = null;
    public string $url;
}

/** PaymentMethod entity data model. */
class PaymentMethod
{
    public ?array $acss_debit = null;
    public ?array $affirm = null;
    public ?array $afterpay_clearpay = null;
    public ?array $alipay = null;
    public ?bool $allow_redisplay = null;
    public ?array $alma = null;
    public ?array $amazon_pay = null;
    public ?array $au_becs_debit = null;
    public ?array $bacs_debit = null;
    public ?array $bancontact = null;
    public ?array $billie = null;
    public array $billing_details;
    public ?array $bizum = null;
    public ?array $blik = null;
    public array $boleto;
    public array $card;
    public array $card_present;
    public ?array $cashapp = null;
    public int $created;
    public ?array $crypto = null;
    public array $custom;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?array $customer_balance = null;
    public ?array $eps = null;
    public array $fpx;
    public ?array $giropay = null;
    public ?array $grabpay = null;
    public string $id;
    public ?array $ideal = null;
    public array $interac_present;
    public ?array $kakao_pay = null;
    public ?array $klarna = null;
    public ?array $konbini = null;
    public ?array $kr_card = null;
    public ?array $link = null;
    public bool $livemode;
    public ?array $mb_way = null;
    public ?array $metadata = null;
    public ?array $mobilepay = null;
    public ?array $multibanco = null;
    public array $naver_pay;
    public array $nz_bank_account;
    public string $object;
    public ?array $oxxo = null;
    public ?array $p24 = null;
    public ?array $pay_by_bank = null;
    public ?array $payco = null;
    public ?array $paynow = null;
    public ?array $paypal = null;
    public ?array $paypay = null;
    public ?array $payto = null;
    public ?array $pix = null;
    public ?array $promptpay = null;
    public ?array $radar_options = null;
    public ?array $revolut_pay = null;
    public ?array $samsung_pay = null;
    public ?array $satispay = null;
    public ?array $scalapay = null;
    public ?array $sepa_debit = null;
    public ?array $sequra = null;
    public ?array $sofort = null;
    public ?array $sunbit = null;
    public ?array $swish = null;
    public ?array $twint = null;
    public string $type;
    public ?array $upi = null;
    public ?array $us_bank_account = null;
    public ?array $wechat_pay = null;
    public ?array $zip = null;
}

/** Request payload for PaymentMethod#load. */
class PaymentMethodLoadMatch
{
    public ?string $customer_id = null;
    public string $id;
    public ?array $expand = null;
}

/** Request payload for PaymentMethod#list. */
class PaymentMethodListMatch
{
    public ?bool $allow_redisplay = null;
    public ?string $customer = null;
    public ?string $customer_account = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $type = null;
}

/** Request payload for PaymentMethod#create. */
class PaymentMethodCreateData
{
    public string $id;
    public ?array $acss_debit = null;
    public ?array $affirm = null;
    public ?array $afterpay_clearpay = null;
    public ?array $alipay = null;
    public ?bool $allow_redisplay = null;
    public ?array $alma = null;
    public ?array $amazon_pay = null;
    public ?array $au_becs_debit = null;
    public ?array $bacs_debit = null;
    public ?array $bancontact = null;
    public ?array $billie = null;
    public array $billing_details;
    public ?array $bizum = null;
    public ?array $blik = null;
    public array $boleto;
    public array $card;
    public array $card_present;
    public ?array $cashapp = null;
    public int $created;
    public ?array $crypto = null;
    public array $custom;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?array $customer_balance = null;
    public ?array $eps = null;
    public array $fpx;
    public ?array $giropay = null;
    public ?array $grabpay = null;
    public ?array $ideal = null;
    public array $interac_present;
    public ?array $kakao_pay = null;
    public ?array $klarna = null;
    public ?array $konbini = null;
    public ?array $kr_card = null;
    public ?array $link = null;
    public bool $livemode;
    public ?array $mb_way = null;
    public ?array $metadata = null;
    public ?array $mobilepay = null;
    public ?array $multibanco = null;
    public array $naver_pay;
    public array $nz_bank_account;
    public string $object;
    public ?array $oxxo = null;
    public ?array $p24 = null;
    public ?array $pay_by_bank = null;
    public ?array $payco = null;
    public ?array $paynow = null;
    public ?array $paypal = null;
    public ?array $paypay = null;
    public ?array $payto = null;
    public ?array $pix = null;
    public ?array $promptpay = null;
    public ?array $radar_options = null;
    public ?array $revolut_pay = null;
    public ?array $samsung_pay = null;
    public ?array $satispay = null;
    public ?array $scalapay = null;
    public ?array $sepa_debit = null;
    public ?array $sequra = null;
    public ?array $sofort = null;
    public ?array $sunbit = null;
    public ?array $swish = null;
    public ?array $twint = null;
    public string $type;
    public ?array $upi = null;
    public ?array $us_bank_account = null;
    public ?array $wechat_pay = null;
    public ?array $zip = null;
}

/** PaymentMethodConfiguration entity data model. */
class PaymentMethodConfiguration
{
    public array $acss_debit;
    public bool $active;
    public array $affirm;
    public array $afterpay_clearpay;
    public array $alipay;
    public array $alma;
    public array $amazon_pay;
    public array $apple_pay;
    public ?string $application = null;
    public array $au_becs_debit;
    public array $bacs_debit;
    public array $bancontact;
    public array $billie;
    public array $bizum;
    public array $blik;
    public array $boleto;
    public array $card;
    public array $cartes_bancaires;
    public array $cashapp;
    public array $crypto;
    public array $customer_balance;
    public array $eps;
    public array $fpx;
    public array $giropay;
    public array $google_pay;
    public array $grabpay;
    public string $id;
    public array $ideal;
    public bool $is_default;
    public array $jcb;
    public array $kakao_pay;
    public array $klarna;
    public array $konbini;
    public array $kr_card;
    public array $link;
    public bool $livemode;
    public array $mb_way;
    public array $mobilepay;
    public array $multibanco;
    public string $name;
    public array $naver_pay;
    public array $nz_bank_account;
    public string $object;
    public array $oxxo;
    public array $p24;
    public ?string $parent = null;
    public array $pay_by_bank;
    public array $payco;
    public array $paynow;
    public array $paypal;
    public array $paypay;
    public array $payto;
    public array $pix;
    public array $promptpay;
    public array $revolut_pay;
    public array $samsung_pay;
    public array $satispay;
    public array $scalapay;
    public array $sepa_debit;
    public array $sequra;
    public array $sofort;
    public array $sunbit;
    public array $swish;
    public array $twint;
    public array $upi;
    public array $us_bank_account;
    public array $wechat_pay;
    public array $zip;
}

/** Request payload for PaymentMethodConfiguration#load. */
class PaymentMethodConfigurationLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for PaymentMethodConfiguration#list. */
class PaymentMethodConfigurationListMatch
{
    public ?bool $active = null;
    public mixed $application = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for PaymentMethodConfiguration#create. */
class PaymentMethodConfigurationCreateData
{
    public string $id;
    public array $acss_debit;
    public bool $active;
    public array $affirm;
    public array $afterpay_clearpay;
    public array $alipay;
    public array $alma;
    public array $amazon_pay;
    public array $apple_pay;
    public ?string $application = null;
    public array $au_becs_debit;
    public array $bacs_debit;
    public array $bancontact;
    public array $billie;
    public array $bizum;
    public array $blik;
    public array $boleto;
    public array $card;
    public array $cartes_bancaires;
    public array $cashapp;
    public array $crypto;
    public array $customer_balance;
    public array $eps;
    public array $fpx;
    public array $giropay;
    public array $google_pay;
    public array $grabpay;
    public array $ideal;
    public bool $is_default;
    public array $jcb;
    public array $kakao_pay;
    public array $klarna;
    public array $konbini;
    public array $kr_card;
    public array $link;
    public bool $livemode;
    public array $mb_way;
    public array $mobilepay;
    public array $multibanco;
    public string $name;
    public array $naver_pay;
    public array $nz_bank_account;
    public string $object;
    public array $oxxo;
    public array $p24;
    public ?string $parent = null;
    public array $pay_by_bank;
    public array $payco;
    public array $paynow;
    public array $paypal;
    public array $paypay;
    public array $payto;
    public array $pix;
    public array $promptpay;
    public array $revolut_pay;
    public array $samsung_pay;
    public array $satispay;
    public array $scalapay;
    public array $sepa_debit;
    public array $sequra;
    public array $sofort;
    public array $sunbit;
    public array $swish;
    public array $twint;
    public array $upi;
    public array $us_bank_account;
    public array $wechat_pay;
    public array $zip;
}

/** PaymentMethodDomain entity data model. */
class PaymentMethodDomain
{
    public array $amazon_pay;
    public array $apple_pay;
    public int $created;
    public string $domain_name;
    public bool $enabled;
    public array $google_pay;
    public string $id;
    public array $klarna;
    public array $link;
    public bool $livemode;
    public string $object;
    public array $paypal;
}

/** Request payload for PaymentMethodDomain#load. */
class PaymentMethodDomainLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for PaymentMethodDomain#list. */
class PaymentMethodDomainListMatch
{
    public ?string $domain_name = null;
    public ?bool $enabled = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for PaymentMethodDomain#create. */
class PaymentMethodDomainCreateData
{
    public string $id;
    public array $amazon_pay;
    public array $apple_pay;
    public int $created;
    public string $domain_name;
    public bool $enabled;
    public array $google_pay;
    public array $klarna;
    public array $link;
    public bool $livemode;
    public string $object;
    public array $paypal;
}

/** PaymentRecord entity data model. */
class PaymentRecord
{
    public array $amount;
    public array $amount_authorized;
    public array $amount_canceled;
    public array $amount_failed;
    public array $amount_guaranteed;
    public array $amount_refunded;
    public array $amount_requested;
    public ?string $application = null;
    public int $created;
    public mixed $customer_details = null;
    public ?string $customer_presence = null;
    public ?string $description = null;
    public string $id;
    public ?string $latest_payment_attempt_record = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $payment_method_details = null;
    public array $processor_details;
    public string $reported_by;
    public mixed $shipping_details = null;
}

/** Request payload for PaymentRecord#load. */
class PaymentRecordLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for PaymentRecord#list. */
class PaymentRecordListMatch
{
    public ?int $created_after = null;
    public ?int $created_before = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for PaymentRecord#create. */
class PaymentRecordCreateData
{
    public array $amount;
    public array $amount_authorized;
    public array $amount_canceled;
    public array $amount_failed;
    public array $amount_guaranteed;
    public array $amount_refunded;
    public array $amount_requested;
    public ?string $application = null;
    public int $created;
    public mixed $customer_details = null;
    public ?string $customer_presence = null;
    public ?string $description = null;
    public string $id;
    public ?string $latest_payment_attempt_record = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $payment_method_details = null;
    public array $processor_details;
    public string $reported_by;
    public mixed $shipping_details = null;
}

/** Payout entity data model. */
class Payout
{
    public int $amount;
    public mixed $application_fee = null;
    public ?int $application_fee_amount = null;
    public int $arrival_date;
    public bool $automatic;
    public mixed $balance_transaction = null;
    public int $created;
    public string $currency;
    public ?string $description = null;
    public mixed $destination = null;
    public mixed $failure_balance_transaction = null;
    public ?string $failure_code = null;
    public ?string $failure_message = null;
    public string $id;
    public bool $livemode;
    public ?array $metadata = null;
    public string $method;
    public string $object;
    public mixed $original_payout = null;
    public ?string $payout_method = null;
    public string $reconciliation_status;
    public mixed $reversed_by = null;
    public string $source_type;
    public ?string $statement_descriptor = null;
    public string $status;
    public ?string $trace_id = null;
    public string $type;
}

/** Request payload for Payout#load. */
class PayoutLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Payout#list. */
class PayoutListMatch
{
    public mixed $arrival_date = null;
    public mixed $created = null;
    public ?string $destination = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for Payout#create. */
class PayoutCreateData
{
    public string $id;
    public int $amount;
    public mixed $application_fee = null;
    public ?int $application_fee_amount = null;
    public int $arrival_date;
    public bool $automatic;
    public mixed $balance_transaction = null;
    public int $created;
    public string $currency;
    public ?string $description = null;
    public mixed $destination = null;
    public mixed $failure_balance_transaction = null;
    public ?string $failure_code = null;
    public ?string $failure_message = null;
    public bool $livemode;
    public ?array $metadata = null;
    public string $method;
    public string $object;
    public mixed $original_payout = null;
    public ?string $payout_method = null;
    public string $reconciliation_status;
    public mixed $reversed_by = null;
    public string $source_type;
    public ?string $statement_descriptor = null;
    public string $status;
    public ?string $trace_id = null;
    public string $type;
}

/** Person entity data model. */
class Person
{
    public string $account;
    public ?array $additional_tos_acceptances = null;
    public ?array $address = null;
    public mixed $address_kana = null;
    public mixed $address_kanji = null;
    public int $created;
    public ?array $dob = null;
    public ?string $email = null;
    public ?string $first_name = null;
    public ?string $first_name_kana = null;
    public ?string $first_name_kanji = null;
    public ?array $full_name_aliases = null;
    public mixed $future_requirements = null;
    public ?string $gender = null;
    public string $id;
    public ?bool $id_number_provided = null;
    public ?bool $id_number_secondary_provided = null;
    public ?string $last_name = null;
    public ?string $last_name_kana = null;
    public ?string $last_name_kanji = null;
    public ?string $maiden_name = null;
    public ?array $metadata = null;
    public ?string $nationality = null;
    public string $object;
    public ?string $phone = null;
    public ?string $political_exposure = null;
    public ?array $registered_address = null;
    public ?array $relationship = null;
    public mixed $requirements = null;
    public ?bool $ssn_last_4_provided = null;
    public mixed $us_cfpb_data = null;
    public array $verification;
}

/** Request payload for Person#load. */
class PersonLoadMatch
{
    public string $account_id;
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Person#list. */
class PersonListMatch
{
    public string $account_id;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?array $relationship = null;
    public ?string $starting_after = null;
}

/** Request payload for Person#create. */
class PersonCreateData
{
    public string $account_id;
    public ?string $id = null;
    public string $account;
    public ?array $additional_tos_acceptances = null;
    public ?array $address = null;
    public mixed $address_kana = null;
    public mixed $address_kanji = null;
    public int $created;
    public ?array $dob = null;
    public ?string $email = null;
    public ?string $first_name = null;
    public ?string $first_name_kana = null;
    public ?string $first_name_kanji = null;
    public ?array $full_name_aliases = null;
    public mixed $future_requirements = null;
    public ?string $gender = null;
    public ?bool $id_number_provided = null;
    public ?bool $id_number_secondary_provided = null;
    public ?string $last_name = null;
    public ?string $last_name_kana = null;
    public ?string $last_name_kanji = null;
    public ?string $maiden_name = null;
    public ?array $metadata = null;
    public ?string $nationality = null;
    public string $object;
    public ?string $phone = null;
    public ?string $political_exposure = null;
    public ?array $registered_address = null;
    public ?array $relationship = null;
    public mixed $requirements = null;
    public ?bool $ssn_last_4_provided = null;
    public mixed $us_cfpb_data = null;
    public array $verification;
}

/** PersonalizationDesign entity data model. */
class PersonalizationDesign
{
    public mixed $card_logo = null;
    public mixed $carrier_text = null;
    public int $created;
    public string $id;
    public bool $livemode;
    public ?string $lookup_key = null;
    public array $metadata;
    public ?string $name = null;
    public string $object;
    public mixed $physical_bundle;
    public array $preferences;
    public array $rejection_reasons;
    public string $status;
}

/** Request payload for PersonalizationDesign#load. */
class PersonalizationDesignLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for PersonalizationDesign#list. */
class PersonalizationDesignListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?array $lookup_key = null;
    public ?array $preference = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for PersonalizationDesign#create. */
class PersonalizationDesignCreateData
{
    public string $id;
    public mixed $card_logo = null;
    public mixed $carrier_text = null;
    public int $created;
    public bool $livemode;
    public ?string $lookup_key = null;
    public array $metadata;
    public ?string $name = null;
    public string $object;
    public mixed $physical_bundle;
    public array $preferences;
    public array $rejection_reasons;
    public string $status;
}

/** PhysicalBundle entity data model. */
class PhysicalBundle
{
    public string $card_logo;
    public string $carrier_text;
    public array $features;
    public string $id;
    public bool $livemode;
    public string $name;
    public string $object;
    public string $second_line;
    public string $status;
    public string $type;
}

/** Request payload for PhysicalBundle#load. */
class PhysicalBundleLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for PhysicalBundle#list. */
class PhysicalBundleListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
    public ?string $type = null;
}

/** Plan entity data model. */
class Plan
{
    public bool $active;
    public ?int $amount = null;
    public ?string $amount_decimal = null;
    public string $billing_scheme;
    public int $created;
    public string $currency;
    public string $id;
    public string $interval;
    public int $interval_count;
    public bool $livemode;
    public ?array $metadata = null;
    public ?string $meter = null;
    public ?string $nickname = null;
    public string $object;
    public mixed $product = null;
    public ?array $tiers = null;
    public ?string $tiers_mode = null;
    public mixed $transform_usage = null;
    public ?int $trial_period_days = null;
    public string $usage_type;
}

/** Request payload for Plan#load. */
class PlanLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Plan#list. */
class PlanListMatch
{
    public ?bool $active = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $product = null;
    public ?string $starting_after = null;
}

/** Request payload for Plan#create. */
class PlanCreateData
{
    public string $id;
    public bool $active;
    public ?int $amount = null;
    public ?string $amount_decimal = null;
    public string $billing_scheme;
    public int $created;
    public string $currency;
    public string $interval;
    public int $interval_count;
    public bool $livemode;
    public ?array $metadata = null;
    public ?string $meter = null;
    public ?string $nickname = null;
    public string $object;
    public mixed $product = null;
    public ?array $tiers = null;
    public ?string $tiers_mode = null;
    public mixed $transform_usage = null;
    public ?int $trial_period_days = null;
    public string $usage_type;
}

/** Price entity data model. */
class Price
{
    public bool $active;
    public string $billing_scheme;
    public int $created;
    public string $currency;
    public ?array $currency_options = null;
    public mixed $custom_unit_amount = null;
    public string $id;
    public bool $livemode;
    public ?string $lookup_key = null;
    public array $metadata;
    public ?string $nickname = null;
    public string $object;
    public mixed $product;
    public mixed $recurring = null;
    public ?string $tax_behavior = null;
    public ?array $tiers = null;
    public ?string $tiers_mode = null;
    public mixed $transform_quantity = null;
    public string $type;
    public ?int $unit_amount = null;
    public ?string $unit_amount_decimal = null;
}

/** Request payload for Price#load. */
class PriceLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Price#list. */
class PriceListMatch
{
    public ?bool $active = null;
    public mixed $created = null;
    public ?string $currency = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?array $lookup_key = null;
    public ?string $product = null;
    public ?array $recurring = null;
    public ?string $starting_after = null;
    public ?string $type = null;
}

/** Request payload for Price#create. */
class PriceCreateData
{
    public string $id;
    public bool $active;
    public string $billing_scheme;
    public int $created;
    public string $currency;
    public ?array $currency_options = null;
    public mixed $custom_unit_amount = null;
    public bool $livemode;
    public ?string $lookup_key = null;
    public array $metadata;
    public ?string $nickname = null;
    public string $object;
    public mixed $product;
    public mixed $recurring = null;
    public ?string $tax_behavior = null;
    public ?array $tiers = null;
    public ?string $tiers_mode = null;
    public mixed $transform_quantity = null;
    public string $type;
    public ?int $unit_amount = null;
    public ?string $unit_amount_decimal = null;
}

/** Product entity data model. */
class Product
{
    public bool $active;
    public int $created;
    public array $current_prices_per_metric_ton;
    public mixed $default_price = null;
    public ?int $delivery_year = null;
    public ?string $description = null;
    public string $id;
    public array $images;
    public bool $livemode;
    public array $marketing_features;
    public array $metadata;
    public string $metric_tons_available;
    public string $name;
    public string $object;
    public mixed $package_dimensions = null;
    public ?bool $shippable = null;
    public ?string $statement_descriptor = null;
    public array $suppliers;
    public mixed $tax_code = null;
    public mixed $tax_details = null;
    public ?string $unit_label = null;
    public int $updated;
    public ?string $url = null;
}

/** Request payload for Product#load. */
class ProductLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Product#list. */
class ProductListMatch
{
    public ?bool $active = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?array $ids = null;
    public ?int $limit = null;
    public ?bool $shippable = null;
    public ?string $starting_after = null;
    public ?string $url = null;
}

/** Request payload for Product#create. */
class ProductCreateData
{
    public string $id;
    public bool $active;
    public int $created;
    public array $current_prices_per_metric_ton;
    public mixed $default_price = null;
    public ?int $delivery_year = null;
    public ?string $description = null;
    public array $images;
    public bool $livemode;
    public array $marketing_features;
    public array $metadata;
    public string $metric_tons_available;
    public string $name;
    public string $object;
    public mixed $package_dimensions = null;
    public ?bool $shippable = null;
    public ?string $statement_descriptor = null;
    public array $suppliers;
    public mixed $tax_code = null;
    public mixed $tax_details = null;
    public ?string $unit_label = null;
    public int $updated;
    public ?string $url = null;
}

/** Request payload for Product#remove. */
class ProductRemoveMatch
{
    public string $id;
}

/** ProductFeature entity data model. */
class ProductFeature
{
    public bool $active;
    public string $id;
    public bool $livemode;
    public string $lookup_key;
    public array $metadata;
    public string $name;
    public string $object;
}

/** Request payload for ProductFeature#load. */
class ProductFeatureLoadMatch
{
    public string $id;
    public string $product_id;
    public ?array $expand = null;
}

/** Request payload for ProductFeature#create. */
class ProductFeatureCreateData
{
    public string $id;
    public bool $active;
    public bool $livemode;
    public string $lookup_key;
    public array $metadata;
    public string $name;
    public string $object;
}

/** PromotionCode entity data model. */
class PromotionCode
{
    public bool $active;
    public string $code;
    public int $created;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?int $expires_at = null;
    public string $id;
    public bool $livemode;
    public ?int $max_redemptions = null;
    public ?array $metadata = null;
    public string $object;
    public array $promotion;
    public array $restrictions;
    public int $times_redeemed;
}

/** Request payload for PromotionCode#load. */
class PromotionCodeLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for PromotionCode#list. */
class PromotionCodeListMatch
{
    public ?bool $active = null;
    public ?string $code = null;
    public ?string $coupon = null;
    public mixed $created = null;
    public ?string $customer = null;
    public ?string $customer_account = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for PromotionCode#create. */
class PromotionCodeCreateData
{
    public string $id;
    public bool $active;
    public string $code;
    public int $created;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?int $expires_at = null;
    public bool $livemode;
    public ?int $max_redemptions = null;
    public ?array $metadata = null;
    public string $object;
    public array $promotion;
    public array $restrictions;
    public int $times_redeemed;
}

/** Quote entity data model. */
class Quote
{
    public int $amount_subtotal;
    public int $amount_total;
    public mixed $application = null;
    public ?int $application_fee_amount = null;
    public ?float $application_fee_percent = null;
    public array $automatic_tax;
    public string $collection_method;
    public array $computed;
    public int $created;
    public ?string $currency = null;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?array $default_tax_rates = null;
    public ?string $description = null;
    public array $discounts;
    public int $expires_at;
    public ?string $footer = null;
    public mixed $from_quote = null;
    public ?string $header = null;
    public string $id;
    public mixed $invoice = null;
    public array $invoice_settings;
    public array $line_items;
    public bool $livemode;
    public array $metadata;
    public ?string $number = null;
    public string $object;
    public mixed $on_behalf_of = null;
    public string $status;
    public array $status_transitions;
    public mixed $subscription = null;
    public array $subscription_data;
    public mixed $subscription_schedule = null;
    public mixed $test_clock = null;
    public array $total_details;
    public mixed $transfer_data = null;
}

/** Request payload for Quote#load. */
class QuoteLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Quote#list. */
class QuoteListMatch
{
    public ?string $customer = null;
    public ?string $customer_account = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
    public ?string $test_clock = null;
}

/** Request payload for Quote#create. */
class QuoteCreateData
{
    public string $id;
    public int $amount_subtotal;
    public int $amount_total;
    public mixed $application = null;
    public ?int $application_fee_amount = null;
    public ?float $application_fee_percent = null;
    public array $automatic_tax;
    public string $collection_method;
    public array $computed;
    public int $created;
    public ?string $currency = null;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?array $default_tax_rates = null;
    public ?string $description = null;
    public array $discounts;
    public int $expires_at;
    public ?string $footer = null;
    public mixed $from_quote = null;
    public ?string $header = null;
    public mixed $invoice = null;
    public array $invoice_settings;
    public array $line_items;
    public bool $livemode;
    public array $metadata;
    public ?string $number = null;
    public string $object;
    public mixed $on_behalf_of = null;
    public string $status;
    public array $status_transitions;
    public mixed $subscription = null;
    public array $subscription_data;
    public mixed $subscription_schedule = null;
    public mixed $test_clock = null;
    public array $total_details;
    public mixed $transfer_data = null;
}

/** QuoteComputedUpfrontLineItem entity data model. */
class QuoteComputedUpfrontLineItem
{
    public mixed $adjustable_quantity = null;
    public int $amount_discount;
    public int $amount_subtotal;
    public int $amount_tax;
    public int $amount_total;
    public string $currency;
    public ?string $description = null;
    public ?array $discounts = null;
    public string $id;
    public ?array $metadata = null;
    public string $object;
    public ?float $price = null;
    public ?int $quantity = null;
    public ?array $taxes = null;
}

/** Request payload for QuoteComputedUpfrontLineItem#list. */
class QuoteComputedUpfrontLineItemListMatch
{
    public string $id;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** QuotePdf entity data model. */
class QuotePdf
{
    public ?string $id = null;
}

/** Request payload for QuotePdf#load. */
class QuotePdfLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Reader entity data model. */
class Reader
{
    public mixed $action = null;
    public ?string $device_sw_version = null;
    public string $device_type;
    public string $id;
    public ?string $ip_address = null;
    public string $label;
    public ?int $last_seen_at = null;
    public bool $livemode;
    public mixed $location = null;
    public array $metadata;
    public string $object;
    public string $serial_number;
    public ?string $status = null;
}

/** Request payload for Reader#load. */
class ReaderLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Reader#list. */
class ReaderListMatch
{
    public ?string $device_type = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $location = null;
    public ?string $serial_number = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for Reader#create. */
class ReaderCreateData
{
    public string $id;
    public mixed $action = null;
    public ?string $device_sw_version = null;
    public string $device_type;
    public ?string $ip_address = null;
    public string $label;
    public ?int $last_seen_at = null;
    public bool $livemode;
    public mixed $location = null;
    public array $metadata;
    public string $object;
    public string $serial_number;
    public ?string $status = null;
}

/** Request payload for Reader#remove. */
class ReaderRemoveMatch
{
    public string $id;
}

/** ReceivedCredit entity data model. */
class ReceivedCredit
{
    public int $amount;
    public int $created;
    public string $currency;
    public string $description;
    public ?string $failure_code = null;
    public ?string $financial_account = null;
    public ?string $hosted_regulatory_receipt_url = null;
    public string $id;
    public array $initiating_payment_method_details;
    public array $linked_flows;
    public bool $livemode;
    public string $network;
    public string $object;
    public mixed $reversal_details = null;
    public string $status;
    public mixed $transaction = null;
}

/** Request payload for ReceivedCredit#load. */
class ReceivedCreditLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ReceivedCredit#list. */
class ReceivedCreditListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public string $financial_account;
    public ?int $limit = null;
    public ?array $linked_flow = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for ReceivedCredit#create. */
class ReceivedCreditCreateData
{
    public int $amount;
    public int $created;
    public string $currency;
    public string $description;
    public ?string $failure_code = null;
    public ?string $financial_account = null;
    public ?string $hosted_regulatory_receipt_url = null;
    public string $id;
    public array $initiating_payment_method_details;
    public array $linked_flows;
    public bool $livemode;
    public string $network;
    public string $object;
    public mixed $reversal_details = null;
    public string $status;
    public mixed $transaction = null;
}

/** ReceivedDebit entity data model. */
class ReceivedDebit
{
    public int $amount;
    public int $created;
    public string $currency;
    public string $description;
    public ?string $failure_code = null;
    public ?string $financial_account = null;
    public ?string $hosted_regulatory_receipt_url = null;
    public string $id;
    public array $initiating_payment_method_details;
    public array $linked_flows;
    public bool $livemode;
    public string $network;
    public string $object;
    public mixed $reversal_details = null;
    public string $status;
    public mixed $transaction = null;
}

/** Request payload for ReceivedDebit#load. */
class ReceivedDebitLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ReceivedDebit#list. */
class ReceivedDebitListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public string $financial_account;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for ReceivedDebit#create. */
class ReceivedDebitCreateData
{
    public int $amount;
    public int $created;
    public string $currency;
    public string $description;
    public ?string $failure_code = null;
    public ?string $financial_account = null;
    public ?string $hosted_regulatory_receipt_url = null;
    public string $id;
    public array $initiating_payment_method_details;
    public array $linked_flows;
    public bool $livemode;
    public string $network;
    public string $object;
    public mixed $reversal_details = null;
    public string $status;
    public mixed $transaction = null;
}

/** Refund entity data model. */
class Refund
{
    public int $amount;
    public mixed $balance_transaction = null;
    public mixed $charge = null;
    public int $created;
    public string $currency;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?string $description = null;
    public array $destination_details;
    public mixed $failure_balance_transaction = null;
    public ?string $failure_reason = null;
    public mixed $fee;
    public string $id;
    public ?string $instructions_email = null;
    public ?array $metadata = null;
    public array $next_action;
    public string $object;
    public mixed $payment_intent = null;
    public mixed $payment_method = null;
    public ?string $pending_reason = null;
    public array $presentment_details;
    public ?string $reason = null;
    public ?string $receipt_number = null;
    public mixed $source_transfer_reversal = null;
    public ?string $status = null;
    public mixed $transfer_reversal = null;
}

/** Request payload for Refund#load. */
class RefundLoadMatch
{
    public ?string $application_fee_id = null;
    public string $id;
    public ?array $expand = null;
    public ?string $charge_id = null;
}

/** Request payload for Refund#list. */
class RefundListMatch
{
    public ?string $charge = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $payment_intent = null;
    public ?string $starting_after = null;
}

/** Request payload for Refund#create. */
class RefundCreateData
{
    public string $id;
    public int $amount;
    public mixed $balance_transaction = null;
    public mixed $charge = null;
    public int $created;
    public string $currency;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?string $description = null;
    public array $destination_details;
    public mixed $failure_balance_transaction = null;
    public ?string $failure_reason = null;
    public mixed $fee;
    public ?string $instructions_email = null;
    public ?array $metadata = null;
    public array $next_action;
    public string $object;
    public mixed $payment_intent = null;
    public mixed $payment_method = null;
    public ?string $pending_reason = null;
    public array $presentment_details;
    public ?string $reason = null;
    public ?string $receipt_number = null;
    public mixed $source_transfer_reversal = null;
    public ?string $status = null;
    public mixed $transfer_reversal = null;
}

/** Registration entity data model. */
class Registration
{
    public int $active_from;
    public array $ae;
    public array $al;
    public array $am;
    public array $ao;
    public array $at;
    public array $au;
    public array $aw;
    public array $az;
    public array $ba;
    public array $bb;
    public array $bd;
    public array $be;
    public array $bf;
    public array $bg;
    public array $bh;
    public array $bj;
    public array $bs;
    public array $by;
    public array $ca;
    public array $cd;
    public array $ch;
    public array $cl;
    public array $cm;
    public array $co;
    public string $country;
    public array $country_options;
    public array $cr;
    public int $created;
    public array $cv;
    public array $cy;
    public array $cz;
    public array $de;
    public array $dk;
    public array $ec;
    public array $ee;
    public array $eg;
    public array $es;
    public array $et;
    public ?int $expires_at = null;
    public array $fi;
    public array $fr;
    public array $gb;
    public array $ge;
    public array $gn;
    public array $gr;
    public array $hr;
    public array $hu;
    public array $id;
    public array $ie;
    public array $in;
    public array $is;
    public array $it;
    public array $jp;
    public array $ke;
    public array $kg;
    public array $kh;
    public array $kr;
    public array $kz;
    public array $la;
    public bool $livemode;
    public array $lk;
    public array $lt;
    public array $lu;
    public array $lv;
    public array $ma;
    public array $md;
    public array $me;
    public array $mk;
    public array $mr;
    public array $mt;
    public array $mx;
    public array $my;
    public array $ng;
    public array $nl;
    public array $no;
    public array $np;
    public array $nz;
    public string $object;
    public array $om;
    public array $pe;
    public array $ph;
    public array $pl;
    public array $pt;
    public array $ro;
    public array $rs;
    public array $ru;
    public array $sa;
    public array $se;
    public array $sg;
    public array $si;
    public array $sk;
    public array $sn;
    public array $sr;
    public string $status;
    public array $th;
    public array $tj;
    public array $tr;
    public array $tw;
    public array $tz;
    public array $ua;
    public array $ug;
    public array $us;
    public array $uy;
    public array $uz;
    public array $vn;
    public array $za;
    public array $zm;
    public array $zw;
}

/** Request payload for Registration#load. */
class RegistrationLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Registration#list. */
class RegistrationListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for Registration#create. */
class RegistrationCreateData
{
    public string $id;
    public int $active_from;
    public array $ae;
    public array $al;
    public array $am;
    public array $ao;
    public array $at;
    public array $au;
    public array $aw;
    public array $az;
    public array $ba;
    public array $bb;
    public array $bd;
    public array $be;
    public array $bf;
    public array $bg;
    public array $bh;
    public array $bj;
    public array $bs;
    public array $by;
    public array $ca;
    public array $cd;
    public array $ch;
    public array $cl;
    public array $cm;
    public array $co;
    public string $country;
    public array $country_options;
    public array $cr;
    public int $created;
    public array $cv;
    public array $cy;
    public array $cz;
    public array $de;
    public array $dk;
    public array $ec;
    public array $ee;
    public array $eg;
    public array $es;
    public array $et;
    public ?int $expires_at = null;
    public array $fi;
    public array $fr;
    public array $gb;
    public array $ge;
    public array $gn;
    public array $gr;
    public array $hr;
    public array $hu;
    public array $ie;
    public array $in;
    public array $is;
    public array $it;
    public array $jp;
    public array $ke;
    public array $kg;
    public array $kh;
    public array $kr;
    public array $kz;
    public array $la;
    public bool $livemode;
    public array $lk;
    public array $lt;
    public array $lu;
    public array $lv;
    public array $ma;
    public array $md;
    public array $me;
    public array $mk;
    public array $mr;
    public array $mt;
    public array $mx;
    public array $my;
    public array $ng;
    public array $nl;
    public array $no;
    public array $np;
    public array $nz;
    public string $object;
    public array $om;
    public array $pe;
    public array $ph;
    public array $pl;
    public array $pt;
    public array $ro;
    public array $rs;
    public array $ru;
    public array $sa;
    public array $se;
    public array $sg;
    public array $si;
    public array $sk;
    public array $sn;
    public array $sr;
    public string $status;
    public array $th;
    public array $tj;
    public array $tr;
    public array $tw;
    public array $tz;
    public array $ua;
    public array $ug;
    public array $us;
    public array $uy;
    public array $uz;
    public array $vn;
    public array $za;
    public array $zm;
    public array $zw;
}

/** ReportRun entity data model. */
class ReportRun
{
    public int $created;
    public ?string $error = null;
    public string $id;
    public bool $livemode;
    public string $object;
    public array $parameters;
    public string $report_type;
    public mixed $result = null;
    public string $status;
    public ?int $succeeded_at = null;
}

/** Request payload for ReportRun#load. */
class ReportRunLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ReportRun#list. */
class ReportRunListMatch
{
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for ReportRun#create. */
class ReportRunCreateData
{
    public int $created;
    public ?string $error = null;
    public string $id;
    public bool $livemode;
    public string $object;
    public array $parameters;
    public string $report_type;
    public mixed $result = null;
    public string $status;
    public ?int $succeeded_at = null;
}

/** ReportType entity data model. */
class ReportType
{
    public int $data_available_end;
    public int $data_available_start;
    public ?array $default_columns = null;
    public string $id;
    public bool $livemode;
    public string $name;
    public string $object;
    public int $updated;
    public int $version;
}

/** Request payload for ReportType#load. */
class ReportTypeLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ReportType#list. */
class ReportTypeListMatch
{
    public ?array $expand = null;
}

/** Request entity data model. */
class Request
{
    public int $created;
    public string $id;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public string $payment_method;
    public array $replacements;
    public mixed $request_context = null;
    public mixed $request_details = null;
    public mixed $response_details = null;
    public ?string $url = null;
}

/** Request payload for Request#load. */
class RequestLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Request#list. */
class RequestListMatch
{
    public ?array $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for Request#create. */
class RequestCreateData
{
    public int $created;
    public string $id;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public string $payment_method;
    public array $replacements;
    public mixed $request_context = null;
    public mixed $request_details = null;
    public mixed $response_details = null;
    public ?string $url = null;
}

/** Reversal entity data model. */
class Reversal
{
    public int $amount;
    public mixed $balance_transaction = null;
    public int $created;
    public string $currency;
    public mixed $destination_payment_refund = null;
    public string $id;
    public ?array $metadata = null;
    public string $object;
    public mixed $source_refund = null;
    public mixed $transfer;
}

/** Request payload for Reversal#load. */
class ReversalLoadMatch
{
    public string $id;
    public string $transfer_id;
    public ?array $expand = null;
}

/** Request payload for Reversal#list. */
class ReversalListMatch
{
    public string $transfer_id;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for Reversal#create. */
class ReversalCreateData
{
    public ?string $id = null;
    public string $transfer_id;
    public int $amount;
    public mixed $balance_transaction = null;
    public int $created;
    public string $currency;
    public mixed $destination_payment_refund = null;
    public ?array $metadata = null;
    public string $object;
    public mixed $source_refund = null;
    public mixed $transfer;
}

/** Review entity data model. */
class Review
{
    public ?string $billing_zip = null;
    public mixed $charge = null;
    public ?string $closed_reason = null;
    public int $created;
    public string $id;
    public ?string $ip_address = null;
    public mixed $ip_address_location = null;
    public bool $livemode;
    public string $object;
    public bool $open;
    public string $opened_reason;
    public mixed $payment_intent = null;
    public string $reason;
    public mixed $session = null;
}

/** Request payload for Review#load. */
class ReviewLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Review#list. */
class ReviewListMatch
{
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for Review#create. */
class ReviewCreateData
{
    public string $id;
    public ?string $billing_zip = null;
    public mixed $charge = null;
    public ?string $closed_reason = null;
    public int $created;
    public ?string $ip_address = null;
    public mixed $ip_address_location = null;
    public bool $livemode;
    public string $object;
    public bool $open;
    public string $opened_reason;
    public mixed $payment_intent = null;
    public string $reason;
    public mixed $session = null;
}

/** ScheduledQueryRun entity data model. */
class ScheduledQueryRun
{
    public int $created;
    public int $data_load_time;
    public array $error;
    public mixed $file = null;
    public string $id;
    public bool $livemode;
    public string $object;
    public int $result_available_until;
    public string $sql;
    public string $status;
    public string $title;
}

/** Request payload for ScheduledQueryRun#load. */
class ScheduledQueryRunLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ScheduledQueryRun#list. */
class ScheduledQueryRunListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Search entity data model. */
class Search
{
    public ?string $account_country = null;
    public ?string $account_name = null;
    public ?array $account_tax_ids = null;
    public bool $active;
    public mixed $address = null;
    public ?array $allowed_payment_method_types = null;
    public int $amount;
    public ?int $amount_capturable = null;
    public int $amount_captured;
    public mixed $amount_details = null;
    public int $amount_due;
    public int $amount_overpaid;
    public int $amount_paid;
    public int $amount_paid_off_stripe;
    public ?int $amount_received = null;
    public int $amount_refunded;
    public int $amount_remaining;
    public int $amount_shipping;
    public mixed $application = null;
    public mixed $application_fee = null;
    public ?int $application_fee_amount = null;
    public ?float $application_fee_percent = null;
    public int $attempt_count;
    public bool $attempted;
    public bool $auto_advance;
    public mixed $automatic_payment_methods = null;
    public array $automatic_tax;
    public ?int $automatically_finalizes_at = null;
    public ?int $balance = null;
    public mixed $balance_transaction = null;
    public int $billing_cycle_anchor;
    public mixed $billing_cycle_anchor_config = null;
    public array $billing_details;
    public array $billing_mode;
    public ?string $billing_reason = null;
    public array $billing_schedules;
    public string $billing_scheme;
    public mixed $billing_thresholds = null;
    public ?string $business_name = null;
    public ?string $calculated_statement_descriptor = null;
    public ?int $cancel_at = null;
    public bool $cancel_at_period_end;
    public ?int $canceled_at = null;
    public mixed $cancellation_details = null;
    public ?string $cancellation_reason = null;
    public ?string $capture_method = null;
    public bool $captured;
    public mixed $cash_balance = null;
    public ?string $client_secret = null;
    public string $collection_method;
    public ?string $confirmation_method = null;
    public mixed $confirmation_secret = null;
    public int $created;
    public string $currency;
    public ?array $currency_options = null;
    public ?array $custom_fields = null;
    public mixed $custom_unit_amount = null;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public mixed $customer_address = null;
    public ?string $customer_email = null;
    public ?string $customer_name = null;
    public ?string $customer_phone = null;
    public mixed $customer_shipping = null;
    public ?string $customer_tax_exempt = null;
    public ?array $customer_tax_ids = null;
    public ?int $days_until_due = null;
    public mixed $default_payment_method = null;
    public mixed $default_price = null;
    public mixed $default_source = null;
    public array $default_tax_rates;
    public ?bool $delinquent = null;
    public ?string $description = null;
    public mixed $discount = null;
    public array $discounts;
    public bool $disputed;
    public ?int $due_date = null;
    public ?int $effective_at = null;
    public ?string $email = null;
    public ?int $ended_at = null;
    public ?int $ending_balance = null;
    public ?array $excluded_payment_method_types = null;
    public mixed $failure_balance_transaction = null;
    public ?string $failure_code = null;
    public ?string $failure_message = null;
    public ?string $footer = null;
    public mixed $fraud_details = null;
    public mixed $from_invoice = null;
    public ?array $hooks = null;
    public ?string $hosted_invoice_url = null;
    public string $id;
    public array $images;
    public ?string $individual_name = null;
    public ?array $invoice_credit_balance = null;
    public ?string $invoice_pdf = null;
    public ?string $invoice_prefix = null;
    public ?array $invoice_settings = null;
    public array $issuer;
    public array $items;
    public mixed $last_finalization_error = null;
    public mixed $last_payment_error = null;
    public mixed $latest_charge = null;
    public mixed $latest_invoice = null;
    public mixed $latest_revision = null;
    public array $lines;
    public bool $livemode;
    public ?string $lookup_key = null;
    public mixed $managed_payments = null;
    public array $marketing_features;
    public array $metadata;
    public ?string $name = null;
    public mixed $next_action = null;
    public ?int $next_invoice_sequence = null;
    public ?int $next_payment_attempt = null;
    public ?int $next_pending_invoice_item_invoice = null;
    public ?string $nickname = null;
    public ?string $number = null;
    public string $object;
    public mixed $on_behalf_of = null;
    public mixed $outcome = null;
    public mixed $package_dimensions = null;
    public bool $paid;
    public mixed $parent = null;
    public mixed $pause_collection = null;
    public ?array $payment_details = null;
    public mixed $payment_intent = null;
    public ?string $payment_method = null;
    public mixed $payment_method_configuration_details = null;
    public mixed $payment_method_details = null;
    public mixed $payment_method_options = null;
    public ?array $payment_method_types = null;
    public mixed $payment_record = null;
    public array $payment_settings;
    public array $payments;
    public mixed $pending_invoice_item_interval = null;
    public mixed $pending_setup_intent = null;
    public mixed $pending_update = null;
    public int $period_end;
    public int $period_start;
    public ?string $phone = null;
    public int $post_payment_credit_notes_amount;
    public int $pre_payment_credit_notes_amount;
    public ?array $preferred_locales = null;
    public array $presentment_details;
    public mixed $processing = null;
    public mixed $product;
    public ?array $radar_options = null;
    public ?string $receipt_email = null;
    public ?string $receipt_number = null;
    public ?string $receipt_url = null;
    public mixed $recurring = null;
    public bool $refunded;
    public array $refunds;
    public mixed $rendering = null;
    public mixed $review = null;
    public mixed $schedule = null;
    public ?string $setup_future_usage = null;
    public ?bool $shippable = null;
    public mixed $shipping = null;
    public mixed $shipping_cost = null;
    public mixed $shipping_details = null;
    public mixed $source_transfer = null;
    public array $sources;
    public int $start_date;
    public int $starting_balance;
    public ?string $statement_descriptor = null;
    public ?string $statement_descriptor_suffix = null;
    public string $status;
    public ?array $status_details = null;
    public array $status_transitions;
    public array $subscriptions;
    public int $subtotal;
    public ?int $subtotal_excluding_tax = null;
    public array $tax;
    public ?string $tax_behavior = null;
    public mixed $tax_code = null;
    public mixed $tax_details = null;
    public ?string $tax_exempt = null;
    public array $tax_ids;
    public mixed $test_clock = null;
    public array $threshold_reason;
    public ?array $tiers = null;
    public ?string $tiers_mode = null;
    public int $total;
    public ?array $total_discount_amounts = null;
    public ?int $total_excluding_tax = null;
    public ?array $total_pretax_credit_amounts = null;
    public ?array $total_taxes = null;
    public mixed $transfer = null;
    public mixed $transfer_data = null;
    public ?string $transfer_group = null;
    public mixed $transform_quantity = null;
    public ?int $trial_end = null;
    public mixed $trial_settings = null;
    public ?int $trial_start = null;
    public string $type;
    public ?int $unit_amount = null;
    public ?string $unit_amount_decimal = null;
    public ?string $unit_label = null;
    public int $updated;
    public ?string $url = null;
    public ?int $webhooks_delivered_at = null;
}

/** Request payload for Search#list. */
class SearchListMatch
{
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $page = null;
    public string $query;
}

/** Secret entity data model. */
class Secret
{
    public int $created;
    public ?bool $deleted = null;
    public ?int $expires_at = null;
    public string $id;
    public bool $livemode;
    public string $name;
    public string $object;
    public ?string $payload = null;
    public array $scope;
    public string $type;
    public ?string $user = null;
}

/** Request payload for Secret#load. */
class SecretLoadMatch
{
    public ?array $expand = null;
    public string $name;
    public array $scope;
}

/** Request payload for Secret#list. */
class SecretListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public array $scope;
    public ?string $starting_after = null;
}

/** Request payload for Secret#create. */
class SecretCreateData
{
    public int $created;
    public ?bool $deleted = null;
    public ?int $expires_at = null;
    public string $id;
    public bool $livemode;
    public string $name;
    public string $object;
    public ?string $payload = null;
    public array $scope;
    public string $type;
    public ?string $user = null;
}

/** Session entity data model. */
class Session
{
    public mixed $account_holder = null;
    public array $accounts;
    public mixed $adaptive_pricing = null;
    public mixed $after_expiration = null;
    public ?bool $allow_promotion_codes = null;
    public ?array $allowed_payment_method_types = null;
    public ?int $amount_subtotal = null;
    public ?int $amount_total = null;
    public array $automatic_tax;
    public array $bank_account_token;
    public ?string $billing_address_collection = null;
    public array $branding_settings;
    public ?string $cancel_url = null;
    public ?string $client_reference_id = null;
    public ?string $client_secret = null;
    public mixed $collected_information = null;
    public mixed $configuration;
    public mixed $consent = null;
    public mixed $consent_collection = null;
    public int $created;
    public ?string $currency = null;
    public mixed $currency_conversion = null;
    public array $custom_fields;
    public array $custom_text;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?string $customer_creation = null;
    public mixed $customer_details = null;
    public ?string $customer_email = null;
    public ?array $discounts = null;
    public ?array $excluded_payment_method_types = null;
    public int $expires_at;
    public ?array $filters = null;
    public mixed $flow = null;
    public string $id;
    public ?string $integration_identifier = null;
    public mixed $invoice = null;
    public mixed $invoice_creation = null;
    public array $limits;
    public array $line_items;
    public bool $livemode;
    public ?string $locale = null;
    public mixed $managed_payments = null;
    public ?array $manual_entry = null;
    public ?array $metadata = null;
    public string $mode;
    public ?array $name_collection = null;
    public string $object;
    public ?string $on_behalf_of = null;
    public ?array $optional_items = null;
    public ?string $origin_context = null;
    public mixed $payment_intent = null;
    public mixed $payment_link = null;
    public ?string $payment_method_collection = null;
    public mixed $payment_method_configuration_details = null;
    public mixed $payment_method_options = null;
    public array $payment_method_types;
    public string $payment_status;
    public mixed $permissions = null;
    public array $phone_number_collection;
    public ?array $prefetch = null;
    public array $presentment_details;
    public ?string $recovered_from = null;
    public ?string $redirect_on_completion = null;
    public ?string $return_url = null;
    public mixed $saved_payment_method_options = null;
    public mixed $setup_intent = null;
    public mixed $shipping_address_collection = null;
    public mixed $shipping_cost = null;
    public array $shipping_options;
    public ?string $status = null;
    public ?string $submit_type = null;
    public mixed $subscription = null;
    public ?string $success_url = null;
    public array $tax_id_collection;
    public ?int $total_details = null;
    public ?string $ui_mode = null;
    public ?string $url = null;
    public mixed $wallet_options = null;
}

/** Request payload for Session#load. */
class SessionLoadMatch
{
    public string $session;
    public ?array $expand = null;
}

/** Request payload for Session#list. */
class SessionListMatch
{
    public mixed $created = null;
    public ?string $customer = null;
    public ?string $customer_account = null;
    public ?array $customer_detail = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $payment_intent = null;
    public ?string $payment_link = null;
    public ?string $starting_after = null;
    public ?string $status = null;
    public ?string $subscription = null;
}

/** Request payload for Session#create. */
class SessionCreateData
{
    public string $id;
    public mixed $account_holder = null;
    public array $accounts;
    public mixed $adaptive_pricing = null;
    public mixed $after_expiration = null;
    public ?bool $allow_promotion_codes = null;
    public ?array $allowed_payment_method_types = null;
    public ?int $amount_subtotal = null;
    public ?int $amount_total = null;
    public array $automatic_tax;
    public array $bank_account_token;
    public ?string $billing_address_collection = null;
    public array $branding_settings;
    public ?string $cancel_url = null;
    public ?string $client_reference_id = null;
    public ?string $client_secret = null;
    public mixed $collected_information = null;
    public mixed $configuration;
    public mixed $consent = null;
    public mixed $consent_collection = null;
    public int $created;
    public ?string $currency = null;
    public mixed $currency_conversion = null;
    public array $custom_fields;
    public array $custom_text;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?string $customer_creation = null;
    public mixed $customer_details = null;
    public ?string $customer_email = null;
    public ?array $discounts = null;
    public ?array $excluded_payment_method_types = null;
    public int $expires_at;
    public ?array $filters = null;
    public mixed $flow = null;
    public ?string $integration_identifier = null;
    public mixed $invoice = null;
    public mixed $invoice_creation = null;
    public array $limits;
    public array $line_items;
    public bool $livemode;
    public ?string $locale = null;
    public mixed $managed_payments = null;
    public ?array $manual_entry = null;
    public ?array $metadata = null;
    public string $mode;
    public ?array $name_collection = null;
    public string $object;
    public ?string $on_behalf_of = null;
    public ?array $optional_items = null;
    public ?string $origin_context = null;
    public mixed $payment_intent = null;
    public mixed $payment_link = null;
    public ?string $payment_method_collection = null;
    public mixed $payment_method_configuration_details = null;
    public mixed $payment_method_options = null;
    public array $payment_method_types;
    public string $payment_status;
    public mixed $permissions = null;
    public array $phone_number_collection;
    public ?array $prefetch = null;
    public array $presentment_details;
    public ?string $recovered_from = null;
    public ?string $redirect_on_completion = null;
    public ?string $return_url = null;
    public mixed $saved_payment_method_options = null;
    public mixed $setup_intent = null;
    public mixed $shipping_address_collection = null;
    public mixed $shipping_cost = null;
    public array $shipping_options;
    public ?string $status = null;
    public ?string $submit_type = null;
    public mixed $subscription = null;
    public ?string $success_url = null;
    public array $tax_id_collection;
    public ?int $total_details = null;
    public ?string $ui_mode = null;
    public ?string $url = null;
    public mixed $wallet_options = null;
}

/** Setting entity data model. */
class Setting
{
    public array $defaults;
    public mixed $head_office = null;
    public bool $livemode;
    public string $object;
    public string $status;
    public array $status_details;
}

/** Request payload for Setting#load. */
class SettingLoadMatch
{
    public ?array $expand = null;
}

/** Request payload for Setting#create. */
class SettingCreateData
{
    public array $defaults;
    public mixed $head_office = null;
    public bool $livemode;
    public string $object;
    public string $status;
    public array $status_details;
}

/** Settlement entity data model. */
class Settlement
{
    public ?string $id = null;
}

/** Request payload for Settlement#load. */
class SettlementLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Settlement#create. */
class SettlementCreateData
{
    public string $id;
}

/** SetupAttempt entity data model. */
class SetupAttempt
{
    public mixed $application = null;
    public ?bool $attach_to_self = null;
    public int $created;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?array $flow_directions = null;
    public string $id;
    public bool $livemode;
    public string $object;
    public mixed $on_behalf_of = null;
    public mixed $payment_method;
    public array $payment_method_details;
    public mixed $setup_error = null;
    public mixed $setup_intent;
    public string $status;
    public string $usage;
}

/** Request payload for SetupAttempt#list. */
class SetupAttemptListMatch
{
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public string $setup_intent;
    public ?string $starting_after = null;
}

/** SetupIntent entity data model. */
class SetupIntent
{
    public ?array $allowed_payment_method_types = null;
    public mixed $application = null;
    public ?bool $attach_to_self = null;
    public mixed $automatic_payment_methods = null;
    public ?string $cancellation_reason = null;
    public ?string $client_secret = null;
    public int $created;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?string $description = null;
    public ?array $excluded_payment_method_types = null;
    public ?array $flow_directions = null;
    public string $id;
    public mixed $last_setup_error = null;
    public mixed $latest_attempt = null;
    public bool $livemode;
    public mixed $managed_payments = null;
    public mixed $mandate = null;
    public ?array $metadata = null;
    public mixed $next_action = null;
    public string $object;
    public mixed $on_behalf_of = null;
    public mixed $payment_method = null;
    public mixed $payment_method_configuration_details = null;
    public mixed $payment_method_options = null;
    public array $payment_method_types;
    public mixed $single_use_mandate = null;
    public string $status;
    public string $usage;
}

/** Request payload for SetupIntent#load. */
class SetupIntentLoadMatch
{
    public string $id;
    public ?string $client_secret = null;
    public ?array $expand = null;
}

/** Request payload for SetupIntent#list. */
class SetupIntentListMatch
{
    public ?bool $attach_to_self = null;
    public mixed $created = null;
    public ?string $customer = null;
    public ?string $customer_account = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $payment_method = null;
    public ?string $starting_after = null;
}

/** Request payload for SetupIntent#create. */
class SetupIntentCreateData
{
    public string $id;
    public ?array $allowed_payment_method_types = null;
    public mixed $application = null;
    public ?bool $attach_to_self = null;
    public mixed $automatic_payment_methods = null;
    public ?string $cancellation_reason = null;
    public ?string $client_secret = null;
    public int $created;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public ?string $description = null;
    public ?array $excluded_payment_method_types = null;
    public ?array $flow_directions = null;
    public mixed $last_setup_error = null;
    public mixed $latest_attempt = null;
    public bool $livemode;
    public mixed $managed_payments = null;
    public mixed $mandate = null;
    public ?array $metadata = null;
    public mixed $next_action = null;
    public string $object;
    public mixed $on_behalf_of = null;
    public mixed $payment_method = null;
    public mixed $payment_method_configuration_details = null;
    public mixed $payment_method_options = null;
    public array $payment_method_types;
    public mixed $single_use_mandate = null;
    public string $status;
    public string $usage;
}

/** ShippingRate entity data model. */
class ShippingRate
{
    public bool $active;
    public int $created;
    public mixed $delivery_estimate = null;
    public ?string $display_name = null;
    public array $fixed_amount;
    public string $id;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public ?string $tax_behavior = null;
    public mixed $tax_code = null;
    public string $type;
}

/** Request payload for ShippingRate#load. */
class ShippingRateLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ShippingRate#list. */
class ShippingRateListMatch
{
    public ?bool $active = null;
    public mixed $created = null;
    public ?string $currency = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for ShippingRate#create. */
class ShippingRateCreateData
{
    public string $id;
    public bool $active;
    public int $created;
    public mixed $delivery_estimate = null;
    public ?string $display_name = null;
    public array $fixed_amount;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public ?string $tax_behavior = null;
    public mixed $tax_code = null;
    public string $type;
}

/** SigmaApiQuery entity data model. */
class SigmaApiQuery
{
    public int $created;
    public string $id;
    public bool $livemode;
    public string $name;
    public string $object;
    public string $sql;
}

/** Request payload for SigmaApiQuery#create. */
class SigmaApiQueryCreateData
{
    public string $id;
    public int $created;
    public bool $livemode;
    public string $name;
    public string $object;
    public string $sql;
}

/** Source entity data model. */
class Source
{
    public ?array $ach_credit_transfer = null;
    public ?array $ach_debit = null;
    public ?array $acss_debit = null;
    public ?array $alipay = null;
    public ?bool $allow_redisplay = null;
    public ?int $amount = null;
    public ?array $au_becs_debit = null;
    public ?array $bancontact = null;
    public ?array $card = null;
    public ?array $card_present = null;
    public string $client_secret;
    public array $code_verification;
    public int $created;
    public ?string $currency = null;
    public ?string $customer = null;
    public array $data;
    public ?array $eps = null;
    public string $flow;
    public ?array $giropay = null;
    public bool $has_more;
    public string $id;
    public ?array $ideal = null;
    public ?array $klarna = null;
    public bool $livemode;
    public ?array $metadata = null;
    public ?array $multibanco = null;
    public string $object;
    public mixed $owner = null;
    public ?array $p24 = null;
    public array $receiver;
    public array $redirect;
    public ?array $sepa_debit = null;
    public ?array $sofort = null;
    public array $source_order;
    public ?string $statement_descriptor = null;
    public string $status;
    public ?array $three_d_secure = null;
    public string $type;
    public string $url;
    public ?string $usage = null;
    public ?array $wechat = null;
}

/** Request payload for Source#load. */
class SourceLoadMatch
{
    public string $id;
    public ?string $client_secret = null;
    public ?array $expand = null;
    public ?string $customer_id = null;
}

/** Request payload for Source#list. */
class SourceListMatch
{
    public string $customer_id;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $object = null;
    public ?string $starting_after = null;
}

/** Request payload for Source#create. */
class SourceCreateData
{
    public string $id;
    public ?array $ach_credit_transfer = null;
    public ?array $ach_debit = null;
    public ?array $acss_debit = null;
    public ?array $alipay = null;
    public ?bool $allow_redisplay = null;
    public ?int $amount = null;
    public ?array $au_becs_debit = null;
    public ?array $bancontact = null;
    public ?array $card = null;
    public ?array $card_present = null;
    public string $client_secret;
    public array $code_verification;
    public int $created;
    public ?string $currency = null;
    public ?string $customer = null;
    public array $data;
    public ?array $eps = null;
    public string $flow;
    public ?array $giropay = null;
    public bool $has_more;
    public ?array $ideal = null;
    public ?array $klarna = null;
    public bool $livemode;
    public ?array $metadata = null;
    public ?array $multibanco = null;
    public string $object;
    public mixed $owner = null;
    public ?array $p24 = null;
    public array $receiver;
    public array $redirect;
    public ?array $sepa_debit = null;
    public ?array $sofort = null;
    public array $source_order;
    public ?string $statement_descriptor = null;
    public string $status;
    public ?array $three_d_secure = null;
    public string $type;
    public string $url;
    public ?string $usage = null;
    public ?array $wechat = null;
}

/** Request payload for Source#remove. */
class SourceRemoveMatch
{
    public string $customer_id;
    public string $id;
}

/** SourceMandateNotification entity data model. */
class SourceMandateNotification
{
    public ?array $acss_debit = null;
    public ?int $amount = null;
    public ?array $bacs_debit = null;
    public int $created;
    public string $id;
    public bool $livemode;
    public string $object;
    public string $reason;
    public ?array $sepa_debit = null;
    public array $source;
    public string $status;
    public string $type;
}

/** Request payload for SourceMandateNotification#load. */
class SourceMandateNotificationLoadMatch
{
    public string $id;
    public string $source_id;
    public ?array $expand = null;
}

/** SourceTransaction entity data model. */
class SourceTransaction
{
    public ?array $ach_credit_transfer = null;
    public int $amount;
    public ?array $chf_credit_transfer = null;
    public int $created;
    public string $currency;
    public ?array $gbp_credit_transfer = null;
    public string $id;
    public bool $livemode;
    public string $object;
    public ?array $paper_check = null;
    public ?array $sepa_credit_transfer = null;
    public string $source;
    public string $status;
    public string $type;
}

/** Request payload for SourceTransaction#load. */
class SourceTransactionLoadMatch
{
    public string $id;
    public string $source_id;
    public ?array $expand = null;
}

/** Request payload for SourceTransaction#list. */
class SourceTransactionListMatch
{
    public string $id;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Subscription entity data model. */
class Subscription
{
    public mixed $application = null;
    public ?float $application_fee_percent = null;
    public array $automatic_tax;
    public int $billing_cycle_anchor;
    public mixed $billing_cycle_anchor_config = null;
    public array $billing_mode;
    public array $billing_schedules;
    public mixed $billing_thresholds = null;
    public ?int $cancel_at = null;
    public bool $cancel_at_period_end;
    public ?int $canceled_at = null;
    public mixed $cancellation_details = null;
    public string $collection_method;
    public int $created;
    public string $currency;
    public mixed $customer;
    public ?string $customer_account = null;
    public ?int $days_until_due = null;
    public mixed $default_payment_method = null;
    public mixed $default_source = null;
    public ?array $default_tax_rates = null;
    public ?string $description = null;
    public array $discounts;
    public ?int $ended_at = null;
    public string $id;
    public array $invoice_settings;
    public array $items;
    public mixed $latest_invoice = null;
    public bool $livemode;
    public mixed $managed_payments = null;
    public array $metadata;
    public ?int $next_pending_invoice_item_invoice = null;
    public string $object;
    public mixed $on_behalf_of = null;
    public mixed $pause_collection = null;
    public mixed $payment_settings = null;
    public mixed $pending_invoice_item_interval = null;
    public mixed $pending_setup_intent = null;
    public mixed $pending_update = null;
    public array $presentment_details;
    public mixed $schedule = null;
    public int $start_date;
    public string $status;
    public array $status_details;
    public mixed $test_clock = null;
    public mixed $transfer_data = null;
    public ?int $trial_end = null;
    public mixed $trial_settings = null;
    public ?int $trial_start = null;
}

/** Request payload for Subscription#load. */
class SubscriptionLoadMatch
{
    public ?string $customer_id = null;
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Subscription#list. */
class SubscriptionListMatch
{
    public ?array $automatic_tax = null;
    public ?string $collection_method = null;
    public mixed $created = null;
    public mixed $current_period_end = null;
    public mixed $current_period_start = null;
    public ?string $customer = null;
    public ?string $customer_account = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $price = null;
    public ?string $starting_after = null;
    public ?string $status = null;
    public ?string $test_clock = null;
}

/** Request payload for Subscription#create. */
class SubscriptionCreateData
{
    public string $id;
    public mixed $application = null;
    public ?float $application_fee_percent = null;
    public array $automatic_tax;
    public int $billing_cycle_anchor;
    public mixed $billing_cycle_anchor_config = null;
    public array $billing_mode;
    public array $billing_schedules;
    public mixed $billing_thresholds = null;
    public ?int $cancel_at = null;
    public bool $cancel_at_period_end;
    public ?int $canceled_at = null;
    public mixed $cancellation_details = null;
    public string $collection_method;
    public int $created;
    public string $currency;
    public mixed $customer;
    public ?string $customer_account = null;
    public ?int $days_until_due = null;
    public mixed $default_payment_method = null;
    public mixed $default_source = null;
    public ?array $default_tax_rates = null;
    public ?string $description = null;
    public array $discounts;
    public ?int $ended_at = null;
    public array $invoice_settings;
    public array $items;
    public mixed $latest_invoice = null;
    public bool $livemode;
    public mixed $managed_payments = null;
    public array $metadata;
    public ?int $next_pending_invoice_item_invoice = null;
    public string $object;
    public mixed $on_behalf_of = null;
    public mixed $pause_collection = null;
    public mixed $payment_settings = null;
    public mixed $pending_invoice_item_interval = null;
    public mixed $pending_setup_intent = null;
    public mixed $pending_update = null;
    public array $presentment_details;
    public mixed $schedule = null;
    public int $start_date;
    public string $status;
    public array $status_details;
    public mixed $test_clock = null;
    public mixed $transfer_data = null;
    public ?int $trial_end = null;
    public mixed $trial_settings = null;
    public ?int $trial_start = null;
}

/** Request payload for Subscription#remove. */
class SubscriptionRemoveMatch
{
    public ?string $customer_id = null;
    public string $id;
}

/** SubscriptionItem entity data model. */
class SubscriptionItem
{
    public ?int $billed_until = null;
    public mixed $billing_thresholds = null;
    public int $created;
    public int $current_period_end;
    public int $current_period_start;
    public mixed $current_trial = null;
    public array $discounts;
    public string $id;
    public array $metadata;
    public string $object;
    public array $price;
    public ?int $quantity = null;
    public string $subscription;
    public ?array $tax_rates = null;
}

/** Request payload for SubscriptionItem#load. */
class SubscriptionItemLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for SubscriptionItem#list. */
class SubscriptionItemListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public string $subscription;
}

/** Request payload for SubscriptionItem#create. */
class SubscriptionItemCreateData
{
    public string $id;
    public ?int $billed_until = null;
    public mixed $billing_thresholds = null;
    public int $created;
    public int $current_period_end;
    public int $current_period_start;
    public mixed $current_trial = null;
    public array $discounts;
    public array $metadata;
    public string $object;
    public array $price;
    public ?int $quantity = null;
    public string $subscription;
    public ?array $tax_rates = null;
}

/** SubscriptionSchedule entity data model. */
class SubscriptionSchedule
{
    public mixed $application = null;
    public array $billing_mode;
    public ?int $canceled_at = null;
    public ?int $completed_at = null;
    public int $created;
    public mixed $current_phase = null;
    public mixed $customer;
    public ?string $customer_account = null;
    public array $default_settings;
    public string $end_behavior;
    public string $id;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public ?array $pause_schedules = null;
    public array $phases;
    public ?int $released_at = null;
    public ?string $released_subscription = null;
    public string $status;
    public mixed $subscription = null;
    public mixed $test_clock = null;
}

/** Request payload for SubscriptionSchedule#load. */
class SubscriptionScheduleLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for SubscriptionSchedule#list. */
class SubscriptionScheduleListMatch
{
    public mixed $canceled_at = null;
    public mixed $completed_at = null;
    public mixed $created = null;
    public ?string $customer = null;
    public ?string $customer_account = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public mixed $released_at = null;
    public ?bool $scheduled = null;
    public ?string $starting_after = null;
}

/** Request payload for SubscriptionSchedule#create. */
class SubscriptionScheduleCreateData
{
    public string $id;
    public mixed $application = null;
    public array $billing_mode;
    public ?int $canceled_at = null;
    public ?int $completed_at = null;
    public int $created;
    public mixed $current_phase = null;
    public mixed $customer;
    public ?string $customer_account = null;
    public array $default_settings;
    public string $end_behavior;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public ?array $pause_schedules = null;
    public array $phases;
    public ?int $released_at = null;
    public ?string $released_subscription = null;
    public string $status;
    public mixed $subscription = null;
    public mixed $test_clock = null;
}

/** Supplier entity data model. */
class Supplier
{
    public string $id;
    public string $info_url;
    public bool $livemode;
    public array $locations;
    public string $name;
    public string $object;
    public string $removal_pathway;
}

/** Request payload for Supplier#load. */
class SupplierLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Supplier#list. */
class SupplierListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** TaxCode entity data model. */
class TaxCode
{
    public string $description;
    public string $id;
    public string $name;
    public string $object;
    public mixed $requirements = null;
}

/** Request payload for TaxCode#load. */
class TaxCodeLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for TaxCode#list. */
class TaxCodeListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** TaxId entity data model. */
class TaxId
{
    public ?string $country = null;
    public int $created;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public string $id;
    public bool $livemode;
    public string $object;
    public mixed $owner = null;
    public string $type;
    public string $value;
    public mixed $verification = null;
}

/** Request payload for TaxId#load. */
class TaxIdLoadMatch
{
    public ?string $customer_id = null;
    public string $id;
    public ?array $expand = null;
}

/** Request payload for TaxId#list. */
class TaxIdListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?array $owner = null;
    public ?string $starting_after = null;
}

/** Request payload for TaxId#create. */
class TaxIdCreateData
{
    public ?string $country = null;
    public int $created;
    public mixed $customer = null;
    public ?string $customer_account = null;
    public string $id;
    public bool $livemode;
    public string $object;
    public mixed $owner = null;
    public string $type;
    public string $value;
    public mixed $verification = null;
}

/** Request payload for TaxId#remove. */
class TaxIdRemoveMatch
{
    public ?string $customer_id = null;
    public string $id;
}

/** TaxRate entity data model. */
class TaxRate
{
    public bool $active;
    public ?string $country = null;
    public int $created;
    public ?string $description = null;
    public string $display_name;
    public ?float $effective_percentage = null;
    public mixed $flat_amount = null;
    public string $id;
    public bool $inclusive;
    public ?string $jurisdiction = null;
    public ?string $jurisdiction_level = null;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public float $percentage;
    public ?string $rate_type = null;
    public ?string $state = null;
    public ?string $tax_type = null;
}

/** Request payload for TaxRate#load. */
class TaxRateLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for TaxRate#list. */
class TaxRateListMatch
{
    public ?bool $active = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?bool $inclusive = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for TaxRate#create. */
class TaxRateCreateData
{
    public string $id;
    public bool $active;
    public ?string $country = null;
    public int $created;
    public ?string $description = null;
    public string $display_name;
    public ?float $effective_percentage = null;
    public mixed $flat_amount = null;
    public bool $inclusive;
    public ?string $jurisdiction = null;
    public ?string $jurisdiction_level = null;
    public bool $livemode;
    public ?array $metadata = null;
    public string $object;
    public float $percentage;
    public ?string $rate_type = null;
    public ?string $state = null;
    public ?string $tax_type = null;
}

/** TestClock entity data model. */
class TestClock
{
    public array $advancing;
    public int $created;
    public int $deletes_after;
    public int $frozen_time;
    public string $id;
    public bool $livemode;
    public ?string $name = null;
    public string $object;
    public string $status;
    public array $status_details;
}

/** Request payload for TestClock#load. */
class TestClockLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for TestClock#list. */
class TestClockListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for TestClock#create. */
class TestClockCreateData
{
    public array $advancing;
    public int $created;
    public int $deletes_after;
    public int $frozen_time;
    public string $id;
    public bool $livemode;
    public ?string $name = null;
    public string $object;
    public string $status;
    public array $status_details;
}

/** Request payload for TestClock#remove. */
class TestClockRemoveMatch
{
    public string $id;
}

/** Token entity data model. */
class Token
{
    public array $bank_account;
    public mixed $card;
    public ?string $client_ip = null;
    public int $created;
    public ?string $device_fingerprint = null;
    public string $id;
    public ?string $last4 = null;
    public bool $livemode;
    public string $network;
    public array $network_data;
    public int $network_updated_at;
    public string $object;
    public string $status;
    public string $type;
    public bool $used;
    public ?string $wallet_provider = null;
}

/** Request payload for Token#load. */
class TokenLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Token#list. */
class TokenListMatch
{
    public string $card;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for Token#create. */
class TokenCreateData
{
    public string $id;
    public array $bank_account;
    public mixed $card;
    public ?string $client_ip = null;
    public int $created;
    public ?string $device_fingerprint = null;
    public ?string $last4 = null;
    public bool $livemode;
    public string $network;
    public array $network_data;
    public int $network_updated_at;
    public string $object;
    public string $status;
    public string $type;
    public bool $used;
    public ?string $wallet_provider = null;
}

/** Topup entity data model. */
class Topup
{
    public int $amount;
    public mixed $balance_transaction = null;
    public int $created;
    public string $currency;
    public ?string $description = null;
    public ?int $expected_availability_date = null;
    public ?string $failure_code = null;
    public ?string $failure_message = null;
    public string $id;
    public ?string $initiated_by = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $payment_method = null;
    public mixed $payment_method_options = null;
    public mixed $source = null;
    public ?string $statement_descriptor = null;
    public string $status;
    public ?string $transfer_group = null;
}

/** Request payload for Topup#load. */
class TopupLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Topup#list. */
class TopupListMatch
{
    public ?float $amount = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for Topup#create. */
class TopupCreateData
{
    public string $id;
    public int $amount;
    public mixed $balance_transaction = null;
    public int $created;
    public string $currency;
    public ?string $description = null;
    public ?int $expected_availability_date = null;
    public ?string $failure_code = null;
    public ?string $failure_message = null;
    public ?string $initiated_by = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $payment_method = null;
    public mixed $payment_method_options = null;
    public mixed $source = null;
    public ?string $statement_descriptor = null;
    public string $status;
    public ?string $transfer_group = null;
}

/** Transaction entity data model. */
class Transaction
{
    public string $account;
    public int $amount;
    public mixed $amount_details = null;
    public mixed $authorization = null;
    public array $balance_impact;
    public mixed $balance_transaction = null;
    public mixed $card;
    public mixed $cardholder = null;
    public int $created;
    public string $currency;
    public ?string $customer = null;
    public array $customer_details;
    public string $description;
    public mixed $dispute = null;
    public array $entries;
    public string $financial_account;
    public ?string $flow = null;
    public mixed $flow_details = null;
    public string $flow_type;
    public string $id;
    public array $line_items;
    public bool $livemode;
    public int $merchant_amount;
    public string $merchant_currency;
    public array $merchant_data;
    public array $metadata;
    public mixed $network_data = null;
    public string $object;
    public ?int $posted_at = null;
    public mixed $purchase_details = null;
    public string $reference;
    public mixed $reversal = null;
    public mixed $ship_from_details = null;
    public mixed $shipping_cost = null;
    public string $status;
    public array $status_transitions;
    public int $tax_date;
    public ?string $token = null;
    public int $transacted_at;
    public string $transaction_refresh;
    public mixed $treasury = null;
    public string $type;
    public int $updated;
    public ?int $void_at = null;
    public ?string $wallet = null;
}

/** Request payload for Transaction#load. */
class TransactionLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Transaction#list. */
class TransactionListMatch
{
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public string $financial_account;
    public ?int $limit = null;
    public ?string $order_by = null;
    public ?string $starting_after = null;
    public ?string $status = null;
    public ?array $status_transition = null;
}

/** Request payload for Transaction#create. */
class TransactionCreateData
{
    public string $id;
    public string $account;
    public int $amount;
    public mixed $amount_details = null;
    public mixed $authorization = null;
    public array $balance_impact;
    public mixed $balance_transaction = null;
    public mixed $card;
    public mixed $cardholder = null;
    public int $created;
    public string $currency;
    public ?string $customer = null;
    public array $customer_details;
    public string $description;
    public mixed $dispute = null;
    public array $entries;
    public string $financial_account;
    public ?string $flow = null;
    public mixed $flow_details = null;
    public string $flow_type;
    public array $line_items;
    public bool $livemode;
    public int $merchant_amount;
    public string $merchant_currency;
    public array $merchant_data;
    public array $metadata;
    public mixed $network_data = null;
    public string $object;
    public ?int $posted_at = null;
    public mixed $purchase_details = null;
    public string $reference;
    public mixed $reversal = null;
    public mixed $ship_from_details = null;
    public mixed $shipping_cost = null;
    public string $status;
    public array $status_transitions;
    public int $tax_date;
    public ?string $token = null;
    public int $transacted_at;
    public string $transaction_refresh;
    public mixed $treasury = null;
    public string $type;
    public int $updated;
    public ?int $void_at = null;
    public ?string $wallet = null;
}

/** TransactionEntry entity data model. */
class TransactionEntry
{
    public array $balance_impact;
    public int $created;
    public string $currency;
    public int $effective_at;
    public string $financial_account;
    public ?string $flow = null;
    public mixed $flow_details = null;
    public string $flow_type;
    public string $id;
    public bool $livemode;
    public string $object;
    public mixed $transaction;
    public string $type;
}

/** Request payload for TransactionEntry#load. */
class TransactionEntryLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for TransactionEntry#list. */
class TransactionEntryListMatch
{
    public mixed $created = null;
    public mixed $effective_at = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public string $financial_account;
    public ?int $limit = null;
    public ?string $order_by = null;
    public ?string $starting_after = null;
    public ?string $transaction = null;
}

/** Transfer entity data model. */
class Transfer
{
    public int $amount;
    public int $amount_reversed;
    public mixed $balance_transaction = null;
    public int $created;
    public string $currency;
    public ?string $description = null;
    public mixed $destination = null;
    public mixed $destination_payment = null;
    public string $id;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public array $reversals;
    public bool $reversed;
    public mixed $source_transaction = null;
    public ?string $source_type = null;
    public ?string $transfer_group = null;
}

/** Request payload for Transfer#load. */
class TransferLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for Transfer#list. */
class TransferListMatch
{
    public mixed $created = null;
    public ?string $destination = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $transfer_group = null;
}

/** Request payload for Transfer#create. */
class TransferCreateData
{
    public string $id;
    public int $amount;
    public int $amount_reversed;
    public mixed $balance_transaction = null;
    public int $created;
    public string $currency;
    public ?string $description = null;
    public mixed $destination = null;
    public mixed $destination_payment = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public array $reversals;
    public bool $reversed;
    public mixed $source_transaction = null;
    public ?string $source_type = null;
    public ?string $transfer_group = null;
}

/** TrialOffer entity data model. */
class TrialOffer
{
    public bool $active;
    public array $duration;
    public array $end_behavior;
    public string $id;
    public bool $livemode;
    public ?string $nickname = null;
    public string $object;
    public float $price;
}

/** Request payload for TrialOffer#load. */
class TrialOfferLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for TrialOffer#list. */
class TrialOfferListMatch
{
    public ?bool $active = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?array $price = null;
    public ?string $starting_after = null;
}

/** Request payload for TrialOffer#create. */
class TrialOfferCreateData
{
    public string $id;
    public bool $active;
    public array $duration;
    public array $end_behavior;
    public bool $livemode;
    public ?string $nickname = null;
    public string $object;
    public float $price;
}

/** ValueList entity data model. */
class ValueList
{
    public string $alias;
    public int $created;
    public string $created_by;
    public string $id;
    public string $item_type;
    public array $list_items;
    public bool $livemode;
    public array $metadata;
    public string $name;
    public string $object;
}

/** Request payload for ValueList#load. */
class ValueListLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ValueList#list. */
class ValueListListMatch
{
    public ?string $alia = null;
    public ?string $contain = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for ValueList#create. */
class ValueListCreateData
{
    public string $id;
    public string $alias;
    public int $created;
    public string $created_by;
    public string $item_type;
    public array $list_items;
    public bool $livemode;
    public array $metadata;
    public string $name;
    public string $object;
}

/** Request payload for ValueList#remove. */
class ValueListRemoveMatch
{
    public string $id;
}

/** ValueListItem entity data model. */
class ValueListItem
{
    public int $created;
    public string $created_by;
    public string $id;
    public bool $livemode;
    public string $object;
    public string $value;
    public string $value_list;
}

/** Request payload for ValueListItem#load. */
class ValueListItemLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for ValueListItem#list. */
class ValueListItemListMatch
{
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $value = null;
    public string $value_list;
}

/** Request payload for ValueListItem#create. */
class ValueListItemCreateData
{
    public int $created;
    public string $created_by;
    public string $id;
    public bool $livemode;
    public string $object;
    public string $value;
    public string $value_list;
}

/** Request payload for ValueListItem#remove. */
class ValueListItemRemoveMatch
{
    public string $id;
}

/** VerificationReport entity data model. */
class VerificationReport
{
    public ?string $client_reference_id = null;
    public int $created;
    public array $document;
    public array $email;
    public string $id;
    public array $id_number;
    public bool $livemode;
    public string $object;
    public ?array $options = null;
    public array $phone;
    public array $selfie;
    public string $type;
    public ?string $verification_flow = null;
    public ?string $verification_session = null;
}

/** Request payload for VerificationReport#load. */
class VerificationReportLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for VerificationReport#list. */
class VerificationReportListMatch
{
    public ?string $client_reference_id = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
    public ?string $type = null;
    public ?string $verification_session = null;
}

/** VerificationSession entity data model. */
class VerificationSession
{
    public ?string $client_reference_id = null;
    public ?string $client_secret = null;
    public int $created;
    public string $id;
    public mixed $last_error = null;
    public mixed $last_verification_report = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $options = null;
    public mixed $provided_details = null;
    public mixed $redaction = null;
    public ?string $related_customer = null;
    public ?string $related_customer_account = null;
    public array $related_person;
    public string $status;
    public string $type;
    public ?string $url = null;
    public ?string $verification_flow = null;
    public mixed $verified_outputs = null;
}

/** Request payload for VerificationSession#load. */
class VerificationSessionLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for VerificationSession#list. */
class VerificationSessionListMatch
{
    public ?string $client_reference_id = null;
    public mixed $created = null;
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $related_customer = null;
    public ?string $related_customer_account = null;
    public ?string $starting_after = null;
    public ?string $status = null;
}

/** Request payload for VerificationSession#create. */
class VerificationSessionCreateData
{
    public string $id;
    public ?string $client_reference_id = null;
    public ?string $client_secret = null;
    public int $created;
    public mixed $last_error = null;
    public mixed $last_verification_report = null;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public mixed $options = null;
    public mixed $provided_details = null;
    public mixed $redaction = null;
    public ?string $related_customer = null;
    public ?string $related_customer_account = null;
    public array $related_person;
    public string $status;
    public string $type;
    public ?string $url = null;
    public ?string $verification_flow = null;
    public mixed $verified_outputs = null;
}

/** WebhookEndpoint entity data model. */
class WebhookEndpoint
{
    public ?string $api_version = null;
    public ?string $application = null;
    public int $created;
    public ?string $description = null;
    public array $enabled_events;
    public string $id;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public ?string $secret = null;
    public string $status;
    public string $url;
}

/** Request payload for WebhookEndpoint#load. */
class WebhookEndpointLoadMatch
{
    public string $id;
    public ?array $expand = null;
}

/** Request payload for WebhookEndpoint#list. */
class WebhookEndpointListMatch
{
    public ?string $ending_before = null;
    public ?array $expand = null;
    public ?int $limit = null;
    public ?string $starting_after = null;
}

/** Request payload for WebhookEndpoint#create. */
class WebhookEndpointCreateData
{
    public string $id;
    public ?string $api_version = null;
    public ?string $application = null;
    public int $created;
    public ?string $description = null;
    public array $enabled_events;
    public bool $livemode;
    public array $metadata;
    public string $object;
    public ?string $secret = null;
    public string $status;
    public string $url;
}

