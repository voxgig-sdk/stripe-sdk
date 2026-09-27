# Typed models for the Stripe SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AccountRequired(TypedDict):
    category: str
    controller: dict
    created: int
    external_accounts: dict
    id: str
    individual: dict
    institution_name: str
    livemode: bool
    object: str
    status: str
    subcategory: str
    supported_payment_method_types: list


class Account(AccountRequired, total=False):
    account_holder: Any
    account_numbers: list
    balance: Any
    balance_refresh: Any
    business_profile: Any
    business_type: str
    capabilities: dict
    charges_enabled: bool
    company: dict
    country: str
    default_currency: str
    details_submitted: bool
    display_name: str
    email: str
    future_requirements: dict
    groups: Any
    last4: str
    metadata: dict
    ownership: Any
    ownership_refresh: Any
    payouts_enabled: bool
    permissions: list
    requirements: dict
    settings: Any
    status_details: dict
    subscriptions: list
    tos_acceptance: dict
    transaction_refresh: Any
    type: str


class AccountLoadMatchRequired(TypedDict):
    account: str


class AccountLoadMatch(AccountLoadMatchRequired, total=False):
    expand: list


class AccountListMatch(TypedDict, total=False):
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class AccountCreateDataRequired(TypedDict):
    id: str
    category: str
    controller: dict
    created: int
    external_accounts: dict
    individual: dict
    institution_name: str
    livemode: bool
    object: str
    status: str
    subcategory: str
    supported_payment_method_types: list


class AccountCreateData(AccountCreateDataRequired, total=False):
    account_holder: Any
    account_numbers: list
    balance: Any
    balance_refresh: Any
    business_profile: Any
    business_type: str
    capabilities: dict
    charges_enabled: bool
    company: dict
    country: str
    default_currency: str
    details_submitted: bool
    display_name: str
    email: str
    future_requirements: dict
    groups: Any
    last4: str
    metadata: dict
    ownership: Any
    ownership_refresh: Any
    payouts_enabled: bool
    permissions: list
    requirements: dict
    settings: Any
    status_details: dict
    subscriptions: list
    tos_acceptance: dict
    transaction_refresh: Any
    type: str


class AccountLink(TypedDict):
    created: int
    expires_at: int
    object: str
    url: str


class AccountLinkCreateData(TypedDict):
    created: int
    expires_at: int
    object: str
    url: str


class AccountOwnerRequired(TypedDict):
    id: str
    name: str
    object: str
    ownership: str


class AccountOwner(AccountOwnerRequired, total=False):
    email: str
    phone: str
    raw_address: str
    refreshed_at: int


class AccountOwnerListMatchRequired(TypedDict):
    id: str
    ownership: str


class AccountOwnerListMatch(AccountOwnerListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class AccountSession(TypedDict):
    account_management: dict
    account_onboarding: dict
    balance_report: dict
    balances: dict
    disputes_list: dict
    documents: dict
    financial_account: dict
    financial_account_transactions: dict
    instant_payouts_promotion: dict
    issuing_card: dict
    issuing_cards_list: dict
    notification_banner: dict
    payment_details: dict
    payment_disputes: dict
    payment_method_settings: dict
    payments: dict
    payout_details: dict
    payout_reconciliation_report: dict
    payouts: dict
    payouts_list: dict
    tax_registrations: dict
    tax_settings: dict


class AccountSessionCreateData(TypedDict):
    account_management: dict
    account_onboarding: dict
    balance_report: dict
    balances: dict
    disputes_list: dict
    documents: dict
    financial_account: dict
    financial_account_transactions: dict
    instant_payouts_promotion: dict
    issuing_card: dict
    issuing_cards_list: dict
    notification_banner: dict
    payment_details: dict
    payment_disputes: dict
    payment_method_settings: dict
    payments: dict
    payout_details: dict
    payout_reconciliation_report: dict
    payouts: dict
    payouts_list: dict
    tax_registrations: dict
    tax_settings: dict


class ActiveEntitlement(TypedDict):
    feature: Any
    id: str
    livemode: bool
    lookup_key: str
    object: str


class ActiveEntitlementLoadMatchRequired(TypedDict):
    id: str


class ActiveEntitlementLoadMatch(ActiveEntitlementLoadMatchRequired, total=False):
    expand: list


class ActiveEntitlementListMatchRequired(TypedDict):
    customer: str


class ActiveEntitlementListMatch(ActiveEntitlementListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class AlertRequired(TypedDict):
    alert_type: str
    id: str
    livemode: bool
    object: str
    title: str


class Alert(AlertRequired, total=False):
    status: str
    usage_threshold: Any


class AlertLoadMatchRequired(TypedDict):
    id: str


class AlertLoadMatch(AlertLoadMatchRequired, total=False):
    expand: list


class AlertListMatch(TypedDict, total=False):
    alert_type: str
    ending_before: str
    expand: list
    limit: int
    meter: str
    starting_after: str


class AlertCreateDataRequired(TypedDict):
    alert_type: str
    id: str
    livemode: bool
    object: str
    title: str


class AlertCreateData(AlertCreateDataRequired, total=False):
    status: str
    usage_threshold: Any


class ApplePayDomain(TypedDict):
    created: int
    domain_name: str
    id: str
    livemode: bool
    object: str


class ApplePayDomainLoadMatchRequired(TypedDict):
    id: str


class ApplePayDomainLoadMatch(ApplePayDomainLoadMatchRequired, total=False):
    expand: list


class ApplePayDomainCreateData(TypedDict):
    created: int
    domain_name: str
    id: str
    livemode: bool
    object: str


class ApplicationFeeRequired(TypedDict):
    account: Any
    amount: int
    amount_refunded: int
    application: Any
    charge: Any
    created: int
    currency: str
    id: str
    livemode: bool
    object: str
    refunded: bool
    refunds: dict


class ApplicationFee(ApplicationFeeRequired, total=False):
    balance_transaction: Any
    fee_source: Any
    originating_transaction: Any


class ApplicationFeeLoadMatchRequired(TypedDict):
    id: str


class ApplicationFeeLoadMatch(ApplicationFeeLoadMatchRequired, total=False):
    expand: list


class ApplicationFeeListMatch(TypedDict, total=False):
    charge: str
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class ApplicationFeeCreateDataRequired(TypedDict):
    id: str
    account: Any
    amount: int
    amount_refunded: int
    application: Any
    charge: Any
    created: int
    currency: str
    livemode: bool
    object: str
    refunded: bool
    refunds: dict


class ApplicationFeeCreateData(ApplicationFeeCreateDataRequired, total=False):
    balance_transaction: Any
    fee_source: Any
    originating_transaction: Any


class Association(TypedDict):
    pass


class AssociationListMatchRequired(TypedDict):
    payment_intent: str


class AssociationListMatch(AssociationListMatchRequired, total=False):
    expand: list


class AuthenticationRequired(TypedDict):
    channel: dict
    created: int
    directory_server: str
    flow_preference: dict
    future_usage: dict
    id: str
    livemode: bool
    message_category: str
    object: str
    outcome_details: dict
    payment_method: Any
    status: str


class Authentication(AuthenticationRequired, total=False):
    acquirer_details: dict
    amount: int
    challenge_url: str
    currency: str
    fingerprinting_url: str
    metadata: dict
    outcome: str
    reason: str
    shipping_address: dict


class AuthenticationLoadMatchRequired(TypedDict):
    id: str


class AuthenticationLoadMatch(AuthenticationLoadMatchRequired, total=False):
    expand: list


class AuthenticationListMatch(TypedDict, total=False):
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class AuthenticationCreateDataRequired(TypedDict):
    channel: dict
    created: int
    directory_server: str
    flow_preference: dict
    future_usage: dict
    id: str
    livemode: bool
    message_category: str
    object: str
    outcome_details: dict
    payment_method: Any
    status: str


class AuthenticationCreateData(AuthenticationCreateDataRequired, total=False):
    acquirer_details: dict
    amount: int
    challenge_url: str
    currency: str
    fingerprinting_url: str
    metadata: dict
    outcome: str
    reason: str
    shipping_address: dict


class AuthorizationRequired(TypedDict):
    amount: int
    approved: bool
    authorization_method: str
    balance_transactions: list
    card: dict
    created: int
    currency: str
    id: str
    livemode: bool
    merchant_amount: int
    merchant_currency: str
    merchant_data: dict
    metadata: dict
    object: str
    request_history: list
    status: str
    transactions: list
    verification_data: dict


class Authorization(AuthorizationRequired, total=False):
    amount_details: Any
    card_presence: str
    cardholder: Any
    fleet: Any
    fraud_challenges: list
    fuel: Any
    network_data: Any
    pending_request: Any
    token: str
    treasury: Any
    verified_by_fraud_challenge: bool
    wallet: str


class AuthorizationLoadMatchRequired(TypedDict):
    id: str


class AuthorizationLoadMatch(AuthorizationLoadMatchRequired, total=False):
    expand: list


class AuthorizationListMatch(TypedDict, total=False):
    card: str
    cardholder: str
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class AuthorizationCreateDataRequired(TypedDict):
    id: str
    amount: int
    approved: bool
    authorization_method: str
    balance_transactions: list
    card: dict
    created: int
    currency: str
    livemode: bool
    merchant_amount: int
    merchant_currency: str
    merchant_data: dict
    metadata: dict
    object: str
    request_history: list
    status: str
    transactions: list
    verification_data: dict


class AuthorizationCreateData(AuthorizationCreateDataRequired, total=False):
    amount_details: Any
    card_presence: str
    cardholder: Any
    fleet: Any
    fraud_challenges: list
    fuel: Any
    network_data: Any
    pending_request: Any
    token: str
    treasury: Any
    verified_by_fraud_challenge: bool
    wallet: str


class BalanceRequired(TypedDict):
    available: list
    issuing: dict
    livemode: bool
    object: str
    pending: list
    refund_and_dispute_prefunding: dict


class Balance(BalanceRequired, total=False):
    connect_reserved: list
    instant_available: list


class BalanceListMatch(TypedDict, total=False):
    expand: list


class BalanceSettingRequired(TypedDict):
    settlement_timing: dict


class BalanceSetting(BalanceSettingRequired, total=False):
    debit_negative_balances: bool
    payouts: Any


class BalanceSettingLoadMatch(TypedDict, total=False):
    expand: list


class BalanceSettingCreateDataRequired(TypedDict):
    settlement_timing: dict


class BalanceSettingCreateData(BalanceSettingCreateDataRequired, total=False):
    debit_negative_balances: bool
    payouts: Any


class BalanceTransactionRequired(TypedDict):
    amount: int
    available_on: int
    balance_type: str
    created: int
    currency: str
    customer: Any
    ending_balance: int
    fee: int
    fee_details: list
    id: str
    livemode: bool
    net: int
    object: str
    reporting_category: str
    status: str
    type: str


class BalanceTransaction(BalanceTransactionRequired, total=False):
    checkout_session: Any
    credit_note: Any
    customer_account: str
    description: str
    exchange_rate: float
    invoice: Any
    metadata: dict
    source: Any


class BalanceTransactionLoadMatchRequired(TypedDict):
    id: str


class BalanceTransactionLoadMatch(BalanceTransactionLoadMatchRequired, total=False):
    expand: list


class BalanceTransactionListMatch(TypedDict, total=False):
    created: Any
    currency: str
    ending_before: str
    expand: list
    limit: int
    payout: str
    source: str
    starting_after: str
    type: str


class BankAccountRequired(TypedDict):
    country: str
    currency: str
    id: str
    last4: str
    object: str
    status: str


class BankAccount(BankAccountRequired, total=False):
    account: Any
    account_holder_name: str
    account_holder_type: str
    account_type: str
    available_payout_methods: list
    bank_name: str
    customer: Any
    default_for_currency: bool
    fingerprint: str
    future_requirements: Any
    metadata: dict
    requirements: Any
    routing_number: str


class BankAccountLoadMatchRequired(TypedDict):
    customer_id: str
    id: str


class BankAccountLoadMatch(BankAccountLoadMatchRequired, total=False):
    expand: list


class BankAccountListMatchRequired(TypedDict):
    customer_id: str


class BankAccountListMatch(BankAccountListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class BankAccountCreateDataRequired(TypedDict):
    customer_id: str
    country: str
    currency: str
    last4: str
    object: str
    status: str


class BankAccountCreateData(BankAccountCreateDataRequired, total=False):
    id: str
    source_id: str
    account: Any
    account_holder_name: str
    account_holder_type: str
    account_type: str
    available_payout_methods: list
    bank_name: str
    customer: Any
    default_for_currency: bool
    fingerprint: str
    future_requirements: Any
    metadata: dict
    requirements: Any
    routing_number: str


class BankAccountRemoveMatch(TypedDict):
    customer_id: str
    id: str


class CalculationRequired(TypedDict):
    amount_total: int
    currency: str
    customer_details: dict
    line_items: dict
    livemode: bool
    object: str
    tax_amount_exclusive: int
    tax_amount_inclusive: int
    tax_breakdown: list
    tax_date: int


class Calculation(CalculationRequired, total=False):
    customer: str
    expires_at: int
    id: str
    ship_from_details: Any
    shipping_cost: Any


class CalculationLoadMatchRequired(TypedDict):
    id: str


class CalculationLoadMatch(CalculationLoadMatchRequired, total=False):
    expand: list


class CalculationCreateDataRequired(TypedDict):
    amount_total: int
    currency: str
    customer_details: dict
    line_items: dict
    livemode: bool
    object: str
    tax_amount_exclusive: int
    tax_amount_inclusive: int
    tax_breakdown: list
    tax_date: int


class CalculationCreateData(CalculationCreateDataRequired, total=False):
    customer: str
    expires_at: int
    id: str
    ship_from_details: Any
    shipping_cost: Any


class CapabilityRequired(TypedDict):
    account: Any
    future_requirements: dict
    id: str
    object: str
    requested: bool
    requirements: dict
    status: str


class Capability(CapabilityRequired, total=False):
    requested_at: int


class CapabilityLoadMatchRequired(TypedDict):
    account_id: str
    id: str


class CapabilityLoadMatch(CapabilityLoadMatchRequired, total=False):
    expand: list


class CapabilityListMatchRequired(TypedDict):
    account_id: str


class CapabilityListMatch(CapabilityListMatchRequired, total=False):
    expand: list


class CapabilityCreateDataRequired(TypedDict):
    account_id: str
    id: str
    account: Any
    future_requirements: dict
    object: str
    requested: bool
    requirements: dict
    status: str


class CapabilityCreateData(CapabilityCreateDataRequired, total=False):
    requested_at: int


class CardRequired(TypedDict):
    brand: str
    cardholder: dict
    created: int
    exp_month: int
    exp_year: int
    funding: str
    id: str
    last4: str
    livemode: bool
    object: str
    spending_controls: dict
    type: str


class Card(CardRequired, total=False):
    account: Any
    address_city: str
    address_country: str
    address_line1: str
    address_line1_check: str
    address_line2: str
    address_state: str
    address_zip: str
    address_zip_check: str
    allow_redisplay: bool
    available_payout_methods: list
    cancellation_reason: str
    country: str
    currency: str
    customer: Any
    cvc: str
    cvc_check: str
    default_for_currency: bool
    dynamic_last4: str
    financial_account: str
    fingerprint: str
    latest_fraud_warning: Any
    lifecycle_controls: Any
    metadata: dict
    name: str
    networks: dict
    number: str
    personalization_design: Any
    regulated_status: str
    replaced_by: Any
    replacement_for: Any
    replacement_reason: str
    second_line: str
    shipping: Any
    status: str
    tokenization_method: str
    wallets: Any


class CardLoadMatchRequired(TypedDict):
    id: str


class CardLoadMatch(CardLoadMatchRequired, total=False):
    customer_id: str
    expand: list


class CardListMatch(TypedDict, total=False):
    cardholder: str
    created: Any
    ending_before: str
    exp_month: int
    exp_year: int
    expand: list
    last4: str
    limit: int
    personalization_design: str
    starting_after: str
    status: str
    type: str


class CardCreateDataRequired(TypedDict):
    id: str
    brand: str
    cardholder: dict
    created: int
    exp_month: int
    exp_year: int
    funding: str
    last4: str
    livemode: bool
    object: str
    spending_controls: dict
    type: str


class CardCreateData(CardCreateDataRequired, total=False):
    account: Any
    address_city: str
    address_country: str
    address_line1: str
    address_line1_check: str
    address_line2: str
    address_state: str
    address_zip: str
    address_zip_check: str
    allow_redisplay: bool
    available_payout_methods: list
    cancellation_reason: str
    country: str
    currency: str
    customer: Any
    cvc: str
    cvc_check: str
    default_for_currency: bool
    dynamic_last4: str
    financial_account: str
    fingerprint: str
    latest_fraud_warning: Any
    lifecycle_controls: Any
    metadata: dict
    name: str
    networks: dict
    number: str
    personalization_design: Any
    regulated_status: str
    replaced_by: Any
    replacement_for: Any
    replacement_reason: str
    second_line: str
    shipping: Any
    status: str
    tokenization_method: str
    wallets: Any


class CardRemoveMatch(TypedDict):
    customer_id: str
    id: str


class CardholderRequired(TypedDict):
    billing: dict
    created: int
    id: str
    livemode: bool
    metadata: dict
    name: str
    object: str
    requirements: dict
    status: str
    type: str


class Cardholder(CardholderRequired, total=False):
    company: Any
    email: str
    individual: Any
    phone_number: str
    preferred_locales: list
    spending_controls: Any


class CardholderLoadMatchRequired(TypedDict):
    id: str


class CardholderLoadMatch(CardholderLoadMatchRequired, total=False):
    expand: list


class CardholderListMatch(TypedDict, total=False):
    created: Any
    email: str
    ending_before: str
    expand: list
    limit: int
    phone_number: str
    starting_after: str
    status: str
    type: str


class CardholderCreateDataRequired(TypedDict):
    id: str
    billing: dict
    created: int
    livemode: bool
    metadata: dict
    name: str
    object: str
    requirements: dict
    status: str
    type: str


class CardholderCreateData(CardholderCreateDataRequired, total=False):
    company: Any
    email: str
    individual: Any
    phone_number: str
    preferred_locales: list
    spending_controls: Any


class CashBalanceRequired(TypedDict):
    customer: str
    livemode: bool
    object: str
    settings: dict


class CashBalance(CashBalanceRequired, total=False):
    available: dict
    customer_account: str


class CashBalanceLoadMatchRequired(TypedDict):
    customer_id: str


class CashBalanceLoadMatch(CashBalanceLoadMatchRequired, total=False):
    expand: list


class CashBalanceCreateDataRequired(TypedDict):
    customer_id: str
    customer: str
    livemode: bool
    object: str
    settings: dict


class CashBalanceCreateData(CashBalanceCreateDataRequired, total=False):
    available: dict
    customer_account: str


class CashBalanceTransactionRequired(TypedDict):
    adjusted_for_overdraft: dict
    applied_to_payment: dict
    created: int
    currency: str
    customer: Any
    ending_balance: int
    funded: dict
    id: str
    livemode: bool
    net_amount: int
    object: str
    refunded_from_payment: dict
    transferred_to_balance: dict
    type: str
    unapplied_from_payment: dict


class CashBalanceTransaction(CashBalanceTransactionRequired, total=False):
    customer_account: str


class CashBalanceTransactionLoadMatchRequired(TypedDict):
    customer_id: str
    id: str


class CashBalanceTransactionLoadMatch(CashBalanceTransactionLoadMatchRequired, total=False):
    expand: list


class CashBalanceTransactionListMatchRequired(TypedDict):
    customer_id: str


class CashBalanceTransactionListMatch(CashBalanceTransactionListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class ChargeRequired(TypedDict):
    amount: int
    amount_captured: int
    amount_refunded: int
    billing_details: dict
    captured: bool
    created: int
    currency: str
    disputed: bool
    id: str
    livemode: bool
    metadata: dict
    object: str
    paid: bool
    presentment_details: dict
    refunded: bool
    refunds: dict
    status: str


class Charge(ChargeRequired, total=False):
    application: Any
    application_fee: Any
    application_fee_amount: int
    balance_transaction: Any
    calculated_statement_descriptor: str
    customer: Any
    description: str
    failure_balance_transaction: Any
    failure_code: str
    failure_message: str
    fraud_details: Any
    on_behalf_of: Any
    outcome: Any
    payment_intent: Any
    payment_method: str
    payment_method_details: Any
    radar_options: dict
    receipt_email: str
    receipt_number: str
    receipt_url: str
    review: Any
    shipping: Any
    source_transfer: Any
    statement_descriptor: str
    statement_descriptor_suffix: str
    transfer: Any
    transfer_data: Any
    transfer_group: str


class ChargeLoadMatchRequired(TypedDict):
    id: str


class ChargeLoadMatch(ChargeLoadMatchRequired, total=False):
    expand: list


class ChargeListMatch(TypedDict, total=False):
    created: Any
    customer: str
    ending_before: str
    expand: list
    limit: int
    payment_intent: str
    starting_after: str
    transfer_group: str


class ChargeCreateDataRequired(TypedDict):
    id: str
    amount: int
    amount_captured: int
    amount_refunded: int
    billing_details: dict
    captured: bool
    created: int
    currency: str
    disputed: bool
    livemode: bool
    metadata: dict
    object: str
    paid: bool
    presentment_details: dict
    refunded: bool
    refunds: dict
    status: str


class ChargeCreateData(ChargeCreateDataRequired, total=False):
    application: Any
    application_fee: Any
    application_fee_amount: int
    balance_transaction: Any
    calculated_statement_descriptor: str
    customer: Any
    description: str
    failure_balance_transaction: Any
    failure_code: str
    failure_message: str
    fraud_details: Any
    on_behalf_of: Any
    outcome: Any
    payment_intent: Any
    payment_method: str
    payment_method_details: Any
    radar_options: dict
    receipt_email: str
    receipt_number: str
    receipt_url: str
    review: Any
    shipping: Any
    source_transfer: Any
    statement_descriptor: str
    statement_descriptor_suffix: str
    transfer: Any
    transfer_data: Any
    transfer_group: str


class ConfigurationRequired(TypedDict):
    active: bool
    business_profile: dict
    cellular: dict
    created: int
    features: dict
    id: str
    is_default: bool
    livemode: bool
    login_page: dict
    object: str
    reboot_window: dict
    updated: int
    wifi: dict


class Configuration(ConfigurationRequired, total=False):
    application: Any
    bbpos_wisepad3: dict
    bbpos_wisepos_e: dict
    default_return_url: str
    is_account_default: bool
    metadata: dict
    name: str
    offline: dict
    stripe_s700: dict
    stripe_s710: dict
    tipping: dict
    verifone_m425: dict
    verifone_p400: dict
    verifone_p630: dict
    verifone_ux700: dict
    verifone_v660p: dict


class ConfigurationLoadMatchRequired(TypedDict):
    id: str


class ConfigurationLoadMatch(ConfigurationLoadMatchRequired, total=False):
    expand: list


class ConfigurationListMatch(TypedDict, total=False):
    active: bool
    ending_before: str
    expand: list
    is_default: bool
    limit: int
    starting_after: str


class ConfigurationCreateDataRequired(TypedDict):
    id: str
    active: bool
    business_profile: dict
    cellular: dict
    created: int
    features: dict
    is_default: bool
    livemode: bool
    login_page: dict
    object: str
    reboot_window: dict
    updated: int
    wifi: dict


class ConfigurationCreateData(ConfigurationCreateDataRequired, total=False):
    application: Any
    bbpos_wisepad3: dict
    bbpos_wisepos_e: dict
    default_return_url: str
    is_account_default: bool
    metadata: dict
    name: str
    offline: dict
    stripe_s700: dict
    stripe_s710: dict
    tipping: dict
    verifone_m425: dict
    verifone_p400: dict
    verifone_p630: dict
    verifone_ux700: dict
    verifone_v660p: dict


class ConfigurationRemoveMatch(TypedDict):
    id: str


class ConfirmationTokenRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    use_stripe_sdk: bool


class ConfirmationToken(ConfirmationTokenRequired, total=False):
    expires_at: int
    mandate_data: Any
    metadata: dict
    payment_intent: str
    payment_method_options: Any
    payment_method_preview: Any
    return_url: str
    setup_future_usage: str
    setup_intent: str
    shipping: Any


class ConfirmationTokenLoadMatchRequired(TypedDict):
    id: str


class ConfirmationTokenLoadMatch(ConfirmationTokenLoadMatchRequired, total=False):
    expand: list


class ConfirmationTokenCreateDataRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    use_stripe_sdk: bool


class ConfirmationTokenCreateData(ConfirmationTokenCreateDataRequired, total=False):
    expires_at: int
    mandate_data: Any
    metadata: dict
    payment_intent: str
    payment_method_options: Any
    payment_method_preview: Any
    return_url: str
    setup_future_usage: str
    setup_intent: str
    shipping: Any


class ConnectionTokenRequired(TypedDict):
    object: str
    secret: str


class ConnectionToken(ConnectionTokenRequired, total=False):
    location: str


class ConnectionTokenCreateDataRequired(TypedDict):
    object: str
    secret: str


class ConnectionTokenCreateData(ConnectionTokenCreateDataRequired, total=False):
    location: str


class CountrySpec(TypedDict):
    default_currency: str
    id: str
    object: str
    supported_bank_account_currencies: dict
    supported_payment_currencies: list
    supported_payment_methods: list
    supported_transfer_countries: list
    verification_fields: dict


class CountrySpecLoadMatchRequired(TypedDict):
    id: str


class CountrySpecLoadMatch(CountrySpecLoadMatchRequired, total=False):
    expand: list


class CountrySpecListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class CouponRequired(TypedDict):
    applies_to: dict
    created: int
    duration: str
    id: str
    livemode: bool
    object: str
    times_redeemed: int
    valid: bool


class Coupon(CouponRequired, total=False):
    amount_off: int
    currency: str
    currency_options: dict
    duration_in_months: int
    max_redemptions: int
    metadata: dict
    name: str
    percent_off: float
    redeem_by: int


class CouponLoadMatchRequired(TypedDict):
    id: str


class CouponLoadMatch(CouponLoadMatchRequired, total=False):
    expand: list


class CouponListMatch(TypedDict, total=False):
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class CouponCreateDataRequired(TypedDict):
    id: str
    applies_to: dict
    created: int
    duration: str
    livemode: bool
    object: str
    times_redeemed: int
    valid: bool


class CouponCreateData(CouponCreateDataRequired, total=False):
    amount_off: int
    currency: str
    currency_options: dict
    duration_in_months: int
    max_redemptions: int
    metadata: dict
    name: str
    percent_off: float
    redeem_by: int


class CreditBalanceSummary(TypedDict):
    available_balance: dict
    ledger_balance: dict


class CreditBalanceSummaryListMatchRequired(TypedDict):
    filter: dict


class CreditBalanceSummaryListMatch(CreditBalanceSummaryListMatchRequired, total=False):
    customer: str
    customer_account: str
    expand: list


class CreditBalanceTransactionRequired(TypedDict):
    created: int
    credit_grant: Any
    effective_at: int
    id: str
    livemode: bool
    object: str


class CreditBalanceTransaction(CreditBalanceTransactionRequired, total=False):
    credit: Any
    debit: Any
    test_clock: Any
    type: str


class CreditBalanceTransactionLoadMatchRequired(TypedDict):
    id: str


class CreditBalanceTransactionLoadMatch(CreditBalanceTransactionLoadMatchRequired, total=False):
    expand: list


class CreditBalanceTransactionListMatch(TypedDict, total=False):
    credit_grant: str
    customer: str
    customer_account: str
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class CreditGrantRequired(TypedDict):
    amount: dict
    applicability_config: dict
    category: str
    created: int
    customer: Any
    id: str
    livemode: bool
    metadata: dict
    object: str
    updated: int


class CreditGrant(CreditGrantRequired, total=False):
    customer_account: str
    effective_at: int
    expires_at: int
    name: str
    priority: int
    test_clock: Any
    voided_at: int


class CreditGrantLoadMatchRequired(TypedDict):
    id: str


class CreditGrantLoadMatch(CreditGrantLoadMatchRequired, total=False):
    expand: list


class CreditGrantListMatch(TypedDict, total=False):
    customer: str
    customer_account: str
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class CreditGrantCreateDataRequired(TypedDict):
    id: str
    amount: dict
    applicability_config: dict
    category: str
    created: int
    customer: Any
    livemode: bool
    metadata: dict
    object: str
    updated: int


class CreditGrantCreateData(CreditGrantCreateDataRequired, total=False):
    customer_account: str
    effective_at: int
    expires_at: int
    name: str
    priority: int
    test_clock: Any
    voided_at: int


class CreditNoteRequired(TypedDict):
    amount: int
    amount_shipping: int
    created: int
    currency: str
    customer: Any
    discount_amount: int
    discount_amounts: list
    id: str
    invoice: Any
    lines: dict
    livemode: bool
    number: str
    object: str
    pdf: str
    post_payment_amount: int
    pre_payment_amount: int
    pretax_credit_amounts: list
    refunds: list
    status: str
    subtotal: int
    total: int
    type: str


class CreditNote(CreditNoteRequired, total=False):
    customer_account: str
    customer_balance_transaction: Any
    effective_at: int
    memo: str
    metadata: dict
    out_of_band_amount: int
    reason: str
    shipping_cost: Any
    subtotal_excluding_tax: int
    total_excluding_tax: int
    total_taxes: list
    voided_at: int


class CreditNoteLoadMatchRequired(TypedDict):
    id: str


class CreditNoteLoadMatch(CreditNoteLoadMatchRequired, total=False):
    expand: list


class CreditNoteListMatch(TypedDict, total=False):
    created: Any
    customer: str
    customer_account: str
    ending_before: str
    expand: list
    invoice: str
    limit: int
    starting_after: str


class CreditNoteCreateDataRequired(TypedDict):
    id: str
    amount: int
    amount_shipping: int
    created: int
    currency: str
    customer: Any
    discount_amount: int
    discount_amounts: list
    invoice: Any
    lines: dict
    livemode: bool
    number: str
    object: str
    pdf: str
    post_payment_amount: int
    pre_payment_amount: int
    pretax_credit_amounts: list
    refunds: list
    status: str
    subtotal: int
    total: int
    type: str


class CreditNoteCreateData(CreditNoteCreateDataRequired, total=False):
    customer_account: str
    customer_balance_transaction: Any
    effective_at: int
    memo: str
    metadata: dict
    out_of_band_amount: int
    reason: str
    shipping_cost: Any
    subtotal_excluding_tax: int
    total_excluding_tax: int
    total_taxes: list
    voided_at: int


class CreditNoteLineRequired(TypedDict):
    amount: int
    discount_amount: int
    discount_amounts: list
    id: str
    livemode: bool
    object: str
    pretax_credit_amounts: list
    tax_rates: list
    type: str


class CreditNoteLine(CreditNoteLineRequired, total=False):
    description: str
    invoice_line_item: str
    metadata: dict
    quantity: int
    taxes: list
    unit_amount: int
    unit_amount_decimal: str


class CreditNoteLineListMatchRequired(TypedDict):
    id: str


class CreditNoteLineListMatch(CreditNoteLineListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class CreditReversalRequired(TypedDict):
    amount: int
    created: int
    currency: str
    financial_account: str
    id: str
    livemode: bool
    metadata: dict
    network: str
    object: str
    received_credit: str
    status: str
    status_transitions: dict


class CreditReversal(CreditReversalRequired, total=False):
    hosted_regulatory_receipt_url: str
    transaction: Any


class CreditReversalLoadMatchRequired(TypedDict):
    id: str


class CreditReversalLoadMatch(CreditReversalLoadMatchRequired, total=False):
    expand: list


class CreditReversalListMatchRequired(TypedDict):
    financial_account: str


class CreditReversalListMatch(CreditReversalListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    received_credit: str
    starting_after: str
    status: str


class CreditReversalCreateDataRequired(TypedDict):
    amount: int
    created: int
    currency: str
    financial_account: str
    id: str
    livemode: bool
    metadata: dict
    network: str
    object: str
    received_credit: str
    status: str
    status_transitions: dict


class CreditReversalCreateData(CreditReversalCreateDataRequired, total=False):
    hosted_regulatory_receipt_url: str
    transaction: Any


class CustomerRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    sources: dict
    subscriptions: dict
    tax: dict
    tax_ids: dict


class Customer(CustomerRequired, total=False):
    address: Any
    balance: int
    business_name: str
    cash_balance: Any
    currency: str
    customer_account: str
    default_source: Any
    delinquent: bool
    description: str
    discount: Any
    email: str
    individual_name: str
    invoice_credit_balance: dict
    invoice_prefix: str
    invoice_settings: dict
    metadata: dict
    name: str
    next_invoice_sequence: int
    phone: str
    preferred_locales: list
    shipping: Any
    tax_exempt: str
    test_clock: Any


class CustomerLoadMatchRequired(TypedDict):
    id: str


class CustomerLoadMatch(CustomerLoadMatchRequired, total=False):
    expand: list


class CustomerListMatch(TypedDict, total=False):
    created: Any
    email: str
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    test_clock: str


class CustomerCreateDataRequired(TypedDict):
    id: str
    created: int
    livemode: bool
    object: str
    sources: dict
    subscriptions: dict
    tax: dict
    tax_ids: dict


class CustomerCreateData(CustomerCreateDataRequired, total=False):
    address: Any
    balance: int
    business_name: str
    cash_balance: Any
    currency: str
    customer_account: str
    default_source: Any
    delinquent: bool
    description: str
    discount: Any
    email: str
    individual_name: str
    invoice_credit_balance: dict
    invoice_prefix: str
    invoice_settings: dict
    metadata: dict
    name: str
    next_invoice_sequence: int
    phone: str
    preferred_locales: list
    shipping: Any
    tax_exempt: str
    test_clock: Any


class CustomerRemoveMatch(TypedDict):
    id: str


class CustomerBalanceTransactionRequired(TypedDict):
    amount: int
    created: int
    currency: str
    customer: Any
    ending_balance: int
    id: str
    livemode: bool
    object: str
    type: str


class CustomerBalanceTransaction(CustomerBalanceTransactionRequired, total=False):
    checkout_session: Any
    credit_note: Any
    customer_account: str
    description: str
    invoice: Any
    metadata: dict


class CustomerBalanceTransactionLoadMatchRequired(TypedDict):
    customer_id: str
    id: str


class CustomerBalanceTransactionLoadMatch(CustomerBalanceTransactionLoadMatchRequired, total=False):
    expand: list


class CustomerBalanceTransactionCreateDataRequired(TypedDict):
    id: str
    amount: int
    created: int
    currency: str
    customer: Any
    ending_balance: int
    livemode: bool
    object: str
    type: str


class CustomerBalanceTransactionCreateData(CustomerBalanceTransactionCreateDataRequired, total=False):
    customer_id: str
    checkout_session: Any
    credit_note: Any
    customer_account: str
    description: str
    invoice: Any
    metadata: dict


class CustomerSessionRequired(TypedDict):
    client_secret: str
    components: dict
    created: int
    customer: Any
    expires_at: int
    livemode: bool
    object: str


class CustomerSession(CustomerSessionRequired, total=False):
    customer_account: str


class CustomerSessionCreateDataRequired(TypedDict):
    client_secret: str
    components: dict
    created: int
    customer: Any
    expires_at: int
    livemode: bool
    object: str


class CustomerSessionCreateData(CustomerSessionCreateDataRequired, total=False):
    customer_account: str


class DebitReversalRequired(TypedDict):
    amount: int
    created: int
    currency: str
    id: str
    livemode: bool
    metadata: dict
    network: str
    object: str
    received_debit: str
    status: str
    status_transitions: dict


class DebitReversal(DebitReversalRequired, total=False):
    financial_account: str
    hosted_regulatory_receipt_url: str
    linked_flows: Any
    transaction: Any


class DebitReversalLoadMatchRequired(TypedDict):
    id: str


class DebitReversalLoadMatch(DebitReversalLoadMatchRequired, total=False):
    expand: list


class DebitReversalListMatchRequired(TypedDict):
    financial_account: str


class DebitReversalListMatch(DebitReversalListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    received_debit: str
    resolution: str
    starting_after: str
    status: str


class DebitReversalCreateDataRequired(TypedDict):
    amount: int
    created: int
    currency: str
    id: str
    livemode: bool
    metadata: dict
    network: str
    object: str
    received_debit: str
    status: str
    status_transitions: dict


class DebitReversalCreateData(DebitReversalCreateDataRequired, total=False):
    financial_account: str
    hosted_regulatory_receipt_url: str
    linked_flows: Any
    transaction: Any


class DeletedAccount(TypedDict, total=False):
    id: str


class DeletedAccountRemoveMatch(TypedDict):
    id: str


class DeletedApplePayDomain(TypedDict, total=False):
    id: str


class DeletedApplePayDomainRemoveMatch(TypedDict):
    id: str


class DeletedCoupon(TypedDict, total=False):
    id: str


class DeletedCouponRemoveMatch(TypedDict):
    id: str


class DeletedExternalAccount(TypedDict, total=False):
    id: str


class DeletedExternalAccountRemoveMatch(TypedDict):
    account_id: str
    id: str


class DeletedInvoiceitem(TypedDict, total=False):
    id: str


class DeletedInvoiceitemRemoveMatch(TypedDict):
    id: str


class DeletedPerson(TypedDict, total=False):
    id: str


class DeletedPersonRemoveMatch(TypedDict):
    account_id: str
    id: str


class DeletedPlan(TypedDict, total=False):
    id: str


class DeletedPlanRemoveMatch(TypedDict):
    id: str


class DeletedProductFeature(TypedDict, total=False):
    id: str


class DeletedProductFeatureRemoveMatch(TypedDict):
    id: str
    product_id: str


class DeletedSubscriptionItem(TypedDict, total=False):
    id: str


class DeletedSubscriptionItemRemoveMatch(TypedDict):
    id: str


class DeletedWebhookEndpoint(TypedDict, total=False):
    id: str


class DeletedWebhookEndpointRemoveMatch(TypedDict):
    id: str


class DiscountRequired(TypedDict):
    id: str
    object: str
    source: dict
    start: int


class Discount(DiscountRequired, total=False):
    checkout_session: str
    customer: Any
    customer_account: str
    end: int
    invoice: str
    invoice_item: str
    promotion_code: Any
    subscription: str
    subscription_item: str


class DiscountLoadMatchRequired(TypedDict):
    customer_id: str


class DiscountLoadMatch(DiscountLoadMatchRequired, total=False):
    subscription_id: str
    expand: list


class DiscountRemoveMatch(TypedDict):
    customer_id: str


class DisputeRequired(TypedDict):
    amount: int
    balance_transactions: list
    charge: Any
    created: int
    currency: str
    enhanced_eligibility_types: list
    evidence: dict
    evidence_details: dict
    id: str
    is_charge_refundable: bool
    livemode: bool
    metadata: dict
    object: str
    payment_method_details: dict
    reason: str
    status: str
    transaction: Any


class Dispute(DisputeRequired, total=False):
    loss_reason: str
    payment_intent: Any
    treasury: Any


class DisputeLoadMatchRequired(TypedDict):
    id: str


class DisputeLoadMatch(DisputeLoadMatchRequired, total=False):
    expand: list


class DisputeListMatch(TypedDict, total=False):
    charge: str
    created: Any
    ending_before: str
    expand: list
    limit: int
    payment_intent: str
    starting_after: str


class DisputeCreateDataRequired(TypedDict):
    id: str
    amount: int
    balance_transactions: list
    charge: Any
    created: int
    currency: str
    enhanced_eligibility_types: list
    evidence: dict
    evidence_details: dict
    is_charge_refundable: bool
    livemode: bool
    metadata: dict
    object: str
    payment_method_details: dict
    reason: str
    status: str
    transaction: Any


class DisputeCreateData(DisputeCreateDataRequired, total=False):
    loss_reason: str
    payment_intent: Any
    treasury: Any


class Domain(TypedDict):
    created: int
    domain_name: str
    id: str
    livemode: bool
    object: str


class DomainListMatch(TypedDict, total=False):
    domain_name: str
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class EarlyFraudWarningRequired(TypedDict):
    actionable: bool
    charge: Any
    created: int
    fraud_type: str
    id: str
    livemode: bool
    object: str


class EarlyFraudWarning(EarlyFraudWarningRequired, total=False):
    payment_intent: Any


class EarlyFraudWarningLoadMatchRequired(TypedDict):
    id: str


class EarlyFraudWarningLoadMatch(EarlyFraudWarningLoadMatchRequired, total=False):
    expand: list


class EarlyFraudWarningListMatch(TypedDict, total=False):
    charge: str
    created: Any
    ending_before: str
    expand: list
    limit: int
    payment_intent: str
    starting_after: str


class EphemeralKeyRequired(TypedDict):
    created: int
    expires: int
    id: str
    livemode: bool
    object: str


class EphemeralKey(EphemeralKeyRequired, total=False):
    secret: str


class EphemeralKeyCreateDataRequired(TypedDict):
    created: int
    expires: int
    id: str
    livemode: bool
    object: str


class EphemeralKeyCreateData(EphemeralKeyCreateDataRequired, total=False):
    secret: str


class EphemeralKeyRemoveMatch(TypedDict):
    id: str


class EventRequired(TypedDict):
    created: int
    data: dict
    id: str
    livemode: bool
    object: str
    pending_webhooks: int
    type: str


class Event(EventRequired, total=False):
    account: str
    api_version: str
    context: str
    request: Any


class EventLoadMatchRequired(TypedDict):
    id: str


class EventLoadMatch(EventLoadMatchRequired, total=False):
    expand: list


class EventListMatch(TypedDict, total=False):
    created: Any
    delivery_success: bool
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    type: str


class ExchangeRate(TypedDict):
    id: str
    object: str
    rates: dict


class ExchangeRateLoadMatchRequired(TypedDict):
    id: str


class ExchangeRateLoadMatch(ExchangeRateLoadMatchRequired, total=False):
    expand: list


class ExchangeRateListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class ExternalAccountRequired(TypedDict):
    data: list
    has_more: bool
    object: str
    url: str


class ExternalAccount(ExternalAccountRequired, total=False):
    id: str


class ExternalAccountLoadMatchRequired(TypedDict):
    account_id: str
    id: str


class ExternalAccountLoadMatch(ExternalAccountLoadMatchRequired, total=False):
    expand: list


class ExternalAccountListMatchRequired(TypedDict):
    account_id: str


class ExternalAccountListMatch(ExternalAccountListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    object: str
    starting_after: str


class ExternalAccountCreateData(TypedDict):
    id: str
    data: list
    has_more: bool
    object: str
    url: str


class Feature(TypedDict):
    active: bool
    entitlement_feature: dict
    id: str
    livemode: bool
    lookup_key: str
    metadata: dict
    name: str
    object: str


class FeatureLoadMatchRequired(TypedDict):
    id: str


class FeatureLoadMatch(FeatureLoadMatchRequired, total=False):
    expand: list


class FeatureListMatch(TypedDict, total=False):
    archived: bool
    ending_before: str
    expand: list
    limit: int
    lookup_key: str
    starting_after: str


class FeatureCreateData(TypedDict):
    id: str
    active: bool
    entitlement_feature: dict
    livemode: bool
    lookup_key: str
    metadata: dict
    name: str
    object: str


class FeedbackOptionRequired(TypedDict):
    description: str
    id: str
    livemode: bool
    object: str
    status: str
    status_transitions: dict


class FeedbackOption(FeedbackOptionRequired, total=False):
    deactivated_at: int


class FeedbackOptionLoadMatchRequired(TypedDict):
    id: str


class FeedbackOptionLoadMatch(FeedbackOptionLoadMatchRequired, total=False):
    expand: list


class FeedbackOptionListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class FeedbackOptionCreateDataRequired(TypedDict):
    id: str
    description: str
    livemode: bool
    object: str
    status: str
    status_transitions: dict


class FeedbackOptionCreateData(FeedbackOptionCreateDataRequired, total=False):
    deactivated_at: int


class FileRequired(TypedDict):
    created: int
    data: list
    has_more: bool
    id: str
    links: dict
    object: str
    purpose: str
    size: int
    url: str


class File(FileRequired, total=False):
    expires_at: int
    filename: str
    title: str
    type: str


class FileLoadMatchRequired(TypedDict):
    id: str


class FileLoadMatch(FileLoadMatchRequired, total=False):
    expand: list


class FileListMatch(TypedDict, total=False):
    created: Any
    ending_before: str
    expand: list
    limit: int
    purpose: str
    starting_after: str


class FileCreateDataRequired(TypedDict):
    created: int
    data: list
    has_more: bool
    id: str
    links: dict
    object: str
    purpose: str
    size: int
    url: str


class FileCreateData(FileCreateDataRequired, total=False):
    expires_at: int
    filename: str
    title: str
    type: str


class FileLinkRequired(TypedDict):
    created: int
    expired: bool
    file: Any
    id: str
    livemode: bool
    metadata: dict
    object: str


class FileLink(FileLinkRequired, total=False):
    expires_at: int
    url: str


class FileLinkLoadMatchRequired(TypedDict):
    id: str


class FileLinkLoadMatch(FileLinkLoadMatchRequired, total=False):
    expand: list


class FileLinkListMatch(TypedDict, total=False):
    created: Any
    ending_before: str
    expand: list
    expired: bool
    file: str
    limit: int
    starting_after: str


class FileLinkCreateDataRequired(TypedDict):
    id: str
    created: int
    expired: bool
    file: Any
    livemode: bool
    metadata: dict
    object: str


class FileLinkCreateData(FileLinkCreateDataRequired, total=False):
    expires_at: int
    url: str


class FinancialAccountRequired(TypedDict):
    balance: dict
    country: str
    created: int
    features: dict
    financial_addresses: list
    id: str
    livemode: bool
    object: str
    status: str
    status_details: dict
    supported_currencies: list


class FinancialAccount(FinancialAccountRequired, total=False):
    active_features: list
    is_default: bool
    metadata: dict
    nickname: str
    pending_features: list
    platform_restrictions: Any
    restricted_features: list


class FinancialAccountLoadMatchRequired(TypedDict):
    id: str


class FinancialAccountLoadMatch(FinancialAccountLoadMatchRequired, total=False):
    expand: list


class FinancialAccountListMatch(TypedDict, total=False):
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class FinancialAccountCreateDataRequired(TypedDict):
    id: str
    balance: dict
    country: str
    created: int
    features: dict
    financial_addresses: list
    livemode: bool
    object: str
    status: str
    status_details: dict
    supported_currencies: list


class FinancialAccountCreateData(FinancialAccountCreateDataRequired, total=False):
    active_features: list
    is_default: bool
    metadata: dict
    nickname: str
    pending_features: list
    platform_restrictions: Any
    restricted_features: list


class FinancialAccountFeatureRequired(TypedDict):
    card_issuing: dict
    deposit_insurance: dict
    intra_stripe_flows: dict
    object: str


class FinancialAccountFeature(FinancialAccountFeatureRequired, total=False):
    financial_addresses: dict
    id: str
    inbound_transfers: dict
    outbound_payments: dict
    outbound_transfers: dict


class FinancialAccountFeatureLoadMatchRequired(TypedDict):
    id: str


class FinancialAccountFeatureLoadMatch(FinancialAccountFeatureLoadMatchRequired, total=False):
    expand: list


class FinancialAccountFeatureCreateDataRequired(TypedDict):
    id: str
    card_issuing: dict
    deposit_insurance: dict
    intra_stripe_flows: dict
    object: str


class FinancialAccountFeatureCreateData(FinancialAccountFeatureCreateDataRequired, total=False):
    financial_addresses: dict
    inbound_transfers: dict
    outbound_payments: dict
    outbound_transfers: dict


class FundCashBalanceRequired(TypedDict):
    adjusted_for_overdraft: dict
    applied_to_payment: dict
    created: int
    currency: str
    customer: Any
    ending_balance: int
    funded: dict
    id: str
    livemode: bool
    net_amount: int
    object: str
    refunded_from_payment: dict
    transferred_to_balance: dict
    type: str
    unapplied_from_payment: dict


class FundCashBalance(FundCashBalanceRequired, total=False):
    customer_account: str


class FundCashBalanceCreateDataRequired(TypedDict):
    customer_id: str
    adjusted_for_overdraft: dict
    applied_to_payment: dict
    created: int
    currency: str
    customer: Any
    ending_balance: int
    funded: dict
    id: str
    livemode: bool
    net_amount: int
    object: str
    refunded_from_payment: dict
    transferred_to_balance: dict
    type: str
    unapplied_from_payment: dict


class FundCashBalanceCreateData(FundCashBalanceCreateDataRequired, total=False):
    customer_account: str


class FundingInstruction(TypedDict):
    country: str
    financial_addresses: list
    type: str


class FundingInstructionCreateData(TypedDict):
    customer_id: str
    country: str
    financial_addresses: list
    type: str


class HistoryRequired(TypedDict):
    amount: int
    available_on: int
    balance_type: str
    created: int
    currency: str
    fee: int
    fee_details: list
    id: str
    net: int
    object: str
    reporting_category: str
    status: str
    type: str


class History(HistoryRequired, total=False):
    description: str
    exchange_rate: float
    source: Any


class HistoryListMatch(TypedDict, total=False):
    created: Any
    currency: str
    ending_before: str
    expand: list
    limit: int
    payout: str
    source: str
    starting_after: str
    type: str


class InboundTransferRequired(TypedDict):
    amount: int
    cancelable: bool
    created: int
    currency: str
    financial_account: str
    id: str
    linked_flows: dict
    livemode: bool
    metadata: dict
    object: str
    statement_descriptor: str
    status: str
    status_transitions: dict


class InboundTransfer(InboundTransferRequired, total=False):
    description: str
    failure_details: Any
    hosted_regulatory_receipt_url: str
    origin_payment_method: str
    origin_payment_method_details: Any
    returned: bool
    transaction: Any


class InboundTransferLoadMatchRequired(TypedDict):
    id: str


class InboundTransferLoadMatch(InboundTransferLoadMatchRequired, total=False):
    expand: list


class InboundTransferListMatchRequired(TypedDict):
    financial_account: str


class InboundTransferListMatch(InboundTransferListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class InboundTransferCreateDataRequired(TypedDict):
    amount: int
    cancelable: bool
    created: int
    currency: str
    financial_account: str
    id: str
    linked_flows: dict
    livemode: bool
    metadata: dict
    object: str
    statement_descriptor: str
    status: str
    status_transitions: dict


class InboundTransferCreateData(InboundTransferCreateDataRequired, total=False):
    description: str
    failure_details: Any
    hosted_regulatory_receipt_url: str
    origin_payment_method: str
    origin_payment_method_details: Any
    returned: bool
    transaction: Any


class InstallRequired(TypedDict):
    account: str
    app: str
    approval_required: bool
    channel: str
    content_security_policy_granted: dict
    content_security_policy_pending: dict
    created: int
    endpoints_granted: list
    endpoints_pending: list
    id: str
    livemode: bool
    object: str
    permissions_granted: list
    permissions_pending: list
    status: str


class Install(InstallRequired, total=False):
    auth_code: str
    created_by: str


class InstallLoadMatchRequired(TypedDict):
    id: str


class InstallLoadMatch(InstallLoadMatchRequired, total=False):
    expand: list


class InstallListMatch(TypedDict, total=False):
    account: str
    app: str
    approval_required: bool
    channel: str
    created: Any
    created_by: str
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class InstallCreateDataRequired(TypedDict):
    id: str
    account: str
    app: str
    approval_required: bool
    channel: str
    content_security_policy_granted: dict
    content_security_policy_pending: dict
    created: int
    endpoints_granted: list
    endpoints_pending: list
    livemode: bool
    object: str
    permissions_granted: list
    permissions_pending: list
    status: str


class InstallCreateData(InstallCreateDataRequired, total=False):
    auth_code: str
    created_by: str


class InvoiceRequired(TypedDict):
    amount_due: int
    amount_overpaid: int
    amount_paid: int
    amount_paid_off_stripe: int
    amount_remaining: int
    amount_shipping: int
    attempt_count: int
    attempted: bool
    auto_advance: bool
    automatic_tax: dict
    collection_method: str
    created: int
    currency: str
    customer: Any
    default_tax_rates: list
    discounts: list
    id: str
    issuer: dict
    lines: dict
    livemode: bool
    object: str
    payment_settings: dict
    payments: dict
    period_end: int
    period_start: int
    post_payment_credit_notes_amount: int
    pre_payment_credit_notes_amount: int
    starting_balance: int
    status_transitions: dict
    subtotal: int
    threshold_reason: dict
    total: int


class Invoice(InvoiceRequired, total=False):
    account_country: str
    account_name: str
    account_tax_ids: list
    application: Any
    automatically_finalizes_at: int
    billing_reason: str
    confirmation_secret: Any
    custom_fields: list
    customer_account: str
    customer_address: Any
    customer_email: str
    customer_name: str
    customer_phone: str
    customer_shipping: Any
    customer_tax_exempt: str
    customer_tax_ids: list
    default_payment_method: Any
    default_source: Any
    description: str
    due_date: int
    effective_at: int
    ending_balance: int
    footer: str
    from_invoice: Any
    hosted_invoice_url: str
    invoice_pdf: str
    last_finalization_error: Any
    latest_revision: Any
    metadata: dict
    next_payment_attempt: int
    number: str
    on_behalf_of: Any
    parent: Any
    receipt_number: str
    rendering: Any
    shipping_cost: Any
    shipping_details: Any
    statement_descriptor: str
    status: str
    status_details: dict
    subtotal_excluding_tax: int
    test_clock: Any
    total_discount_amounts: list
    total_excluding_tax: int
    total_pretax_credit_amounts: list
    total_taxes: list
    webhooks_delivered_at: int


class InvoiceLoadMatchRequired(TypedDict):
    id: str


class InvoiceLoadMatch(InvoiceLoadMatchRequired, total=False):
    expand: list


class InvoiceListMatch(TypedDict, total=False):
    collection_method: str
    created: Any
    customer: str
    customer_account: str
    due_date: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str
    subscription: str


class InvoiceCreateDataRequired(TypedDict):
    id: str
    amount_due: int
    amount_overpaid: int
    amount_paid: int
    amount_paid_off_stripe: int
    amount_remaining: int
    amount_shipping: int
    attempt_count: int
    attempted: bool
    auto_advance: bool
    automatic_tax: dict
    collection_method: str
    created: int
    currency: str
    customer: Any
    default_tax_rates: list
    discounts: list
    issuer: dict
    lines: dict
    livemode: bool
    object: str
    payment_settings: dict
    payments: dict
    period_end: int
    period_start: int
    post_payment_credit_notes_amount: int
    pre_payment_credit_notes_amount: int
    starting_balance: int
    status_transitions: dict
    subtotal: int
    threshold_reason: dict
    total: int


class InvoiceCreateData(InvoiceCreateDataRequired, total=False):
    account_country: str
    account_name: str
    account_tax_ids: list
    application: Any
    automatically_finalizes_at: int
    billing_reason: str
    confirmation_secret: Any
    custom_fields: list
    customer_account: str
    customer_address: Any
    customer_email: str
    customer_name: str
    customer_phone: str
    customer_shipping: Any
    customer_tax_exempt: str
    customer_tax_ids: list
    default_payment_method: Any
    default_source: Any
    description: str
    due_date: int
    effective_at: int
    ending_balance: int
    footer: str
    from_invoice: Any
    hosted_invoice_url: str
    invoice_pdf: str
    last_finalization_error: Any
    latest_revision: Any
    metadata: dict
    next_payment_attempt: int
    number: str
    on_behalf_of: Any
    parent: Any
    receipt_number: str
    rendering: Any
    shipping_cost: Any
    shipping_details: Any
    statement_descriptor: str
    status: str
    status_details: dict
    subtotal_excluding_tax: int
    test_clock: Any
    total_discount_amounts: list
    total_excluding_tax: int
    total_pretax_credit_amounts: list
    total_taxes: list
    webhooks_delivered_at: int


class InvoiceRemoveMatch(TypedDict):
    id: str


class InvoicePaymentRequired(TypedDict):
    amount_requested: int
    created: int
    currency: str
    id: str
    invoice: Any
    is_default: bool
    livemode: bool
    object: str
    payment: dict
    status: str
    status_transitions: dict


class InvoicePayment(InvoicePaymentRequired, total=False):
    amount_paid: int


class InvoicePaymentLoadMatchRequired(TypedDict):
    id: str


class InvoicePaymentLoadMatch(InvoicePaymentLoadMatchRequired, total=False):
    expand: list


class InvoicePaymentListMatch(TypedDict, total=False):
    created: Any
    ending_before: str
    expand: list
    invoice: str
    limit: int
    payment: dict
    starting_after: str
    status: str


class InvoiceRenderingTemplateRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    status: str
    version: int


class InvoiceRenderingTemplate(InvoiceRenderingTemplateRequired, total=False):
    metadata: dict
    nickname: str


class InvoiceRenderingTemplateLoadMatchRequired(TypedDict):
    id: str


class InvoiceRenderingTemplateLoadMatch(InvoiceRenderingTemplateLoadMatchRequired, total=False):
    expand: list
    version: int


class InvoiceRenderingTemplateListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class InvoiceRenderingTemplateCreateDataRequired(TypedDict):
    template: str
    created: int
    id: str
    livemode: bool
    object: str
    status: str
    version: int


class InvoiceRenderingTemplateCreateData(InvoiceRenderingTemplateCreateDataRequired, total=False):
    metadata: dict
    nickname: str


class InvoiceitemRequired(TypedDict):
    amount: int
    currency: str
    customer: Any
    date: int
    discountable: bool
    id: str
    livemode: bool
    object: str
    period: dict
    proration: bool
    proration_details: dict
    quantity: int
    quantity_decimal: str


class Invoiceitem(InvoiceitemRequired, total=False):
    customer_account: str
    description: str
    discounts: list
    frozen_fields: list
    invoice: Any
    invoicing_rules: list
    metadata: dict
    net_amount: int
    parent: Any
    pricing: Any
    tax_rates: list
    test_clock: Any


class InvoiceitemLoadMatchRequired(TypedDict):
    id: str


class InvoiceitemLoadMatch(InvoiceitemLoadMatchRequired, total=False):
    expand: list


class InvoiceitemListMatch(TypedDict, total=False):
    created: Any
    customer: str
    customer_account: str
    ending_before: str
    expand: list
    invoice: str
    limit: int
    pending: bool
    starting_after: str


class InvoiceitemCreateDataRequired(TypedDict):
    id: str
    amount: int
    currency: str
    customer: Any
    date: int
    discountable: bool
    livemode: bool
    object: str
    period: dict
    proration: bool
    proration_details: dict
    quantity: int
    quantity_decimal: str


class InvoiceitemCreateData(InvoiceitemCreateDataRequired, total=False):
    customer_account: str
    description: str
    discounts: list
    frozen_fields: list
    invoice: Any
    invoicing_rules: list
    metadata: dict
    net_amount: int
    parent: Any
    pricing: Any
    tax_rates: list
    test_clock: Any


class LineRequired(TypedDict):
    amount: int
    currency: str
    discount_amount: int
    discountable: bool
    discounts: list
    id: str
    livemode: bool
    metadata: dict
    object: str
    period: dict
    subtotal: int
    tax_rates: list
    type: str


class Line(LineRequired, total=False):
    description: str
    discount_amounts: list
    invoice: str
    invoice_line_item: str
    parent: Any
    pretax_credit_amounts: list
    pricing: Any
    quantity: int
    quantity_decimal: str
    subscription: Any
    taxes: list
    unit_amount: int
    unit_amount_decimal: str


class LineListMatchRequired(TypedDict):
    invoice: str


class LineListMatch(LineListMatchRequired, total=False):
    amount: int
    credit_amount: int
    effective_at: int
    email_type: str
    ending_before: str
    expand: list
    limit: int
    line: list
    memo: str
    metadata: dict
    out_of_band_amount: int
    reason: str
    refund: list
    refund_amount: int
    shipping_cost: dict
    starting_after: str


class LineCreateDataRequired(TypedDict):
    id: str
    invoice_id: str
    amount: int
    currency: str
    discount_amount: int
    discountable: bool
    discounts: list
    livemode: bool
    metadata: dict
    object: str
    period: dict
    subtotal: int
    tax_rates: list
    type: str


class LineCreateData(LineCreateDataRequired, total=False):
    description: str
    discount_amounts: list
    invoice: str
    invoice_line_item: str
    parent: Any
    pretax_credit_amounts: list
    pricing: Any
    quantity: int
    quantity_decimal: str
    subscription: Any
    taxes: list
    unit_amount: int
    unit_amount_decimal: str


class LineItemRequired(TypedDict):
    amount: int
    amount_discount: int
    amount_subtotal: int
    amount_tax: int
    amount_total: int
    currency: str
    id: str
    livemode: bool
    object: str
    quantity: int
    reference: str
    tax_behavior: str
    tax_code: str
    type: str


class LineItem(LineItemRequired, total=False):
    adjustable_quantity: Any
    description: str
    discounts: list
    metadata: dict
    performance_location: str
    price: float
    product: str
    reversal: Any
    tax_breakdown: list
    taxes: list


class LineItemListMatchRequired(TypedDict):
    payment_link_id: str


class LineItemListMatch(LineItemListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class LinkedAccountRequired(TypedDict):
    category: str
    created: int
    id: str
    institution_name: str
    livemode: bool
    object: str
    status: str
    subcategory: str
    supported_payment_method_types: list


class LinkedAccount(LinkedAccountRequired, total=False):
    account_holder: Any
    account_numbers: list
    balance: Any
    balance_refresh: Any
    display_name: str
    last4: str
    ownership: Any
    ownership_refresh: Any
    permissions: list
    status_details: dict
    subscriptions: list
    transaction_refresh: Any


class LinkedAccountListMatch(TypedDict, total=False):
    account_holder: dict
    ending_before: str
    expand: list
    limit: int
    session: str
    starting_after: str


class LinkedAccountOwnerRequired(TypedDict):
    id: str
    name: str
    object: str
    ownership: str


class LinkedAccountOwner(LinkedAccountOwnerRequired, total=False):
    email: str
    phone: str
    raw_address: str
    refreshed_at: int


class LinkedAccountOwnerListMatchRequired(TypedDict):
    account: str
    ownership: str


class LinkedAccountOwnerListMatch(LinkedAccountOwnerListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class LocationRequired(TypedDict):
    address: dict
    display_name: str
    id: str
    livemode: bool
    metadata: dict
    object: str
    type: str


class Location(LocationRequired, total=False):
    address_kana: dict
    address_kanji: dict
    city: str
    configuration_overrides: str
    country: str
    description: str
    display_name_kana: str
    display_name_kanji: str
    line1: str
    line2: str
    phone: str
    postal_code: str
    state: str


class LocationLoadMatchRequired(TypedDict):
    id: str


class LocationLoadMatch(LocationLoadMatchRequired, total=False):
    expand: list


class LocationListMatchRequired(TypedDict):
    type: str


class LocationListMatch(LocationListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class LocationCreateDataRequired(TypedDict):
    id: str
    address: dict
    display_name: str
    livemode: bool
    metadata: dict
    object: str
    type: str


class LocationCreateData(LocationCreateDataRequired, total=False):
    address_kana: dict
    address_kanji: dict
    city: str
    configuration_overrides: str
    country: str
    description: str
    display_name_kana: str
    display_name_kanji: str
    line1: str
    line2: str
    phone: str
    postal_code: str
    state: str


class LocationRemoveMatch(TypedDict):
    id: str


class LoginLink(TypedDict):
    created: int
    object: str
    url: str


class LoginLinkCreateData(TypedDict):
    account_id: str
    created: int
    object: str
    url: str


class MandateRequired(TypedDict):
    customer_acceptance: dict
    id: str
    livemode: bool
    object: str
    payment_method: Any
    payment_method_details: dict
    single_use: dict
    status: str
    type: str


class Mandate(MandateRequired, total=False):
    multi_use: dict
    on_behalf_of: str


class MandateLoadMatchRequired(TypedDict):
    id: str


class MandateLoadMatch(MandateLoadMatchRequired, total=False):
    expand: list


class MeterRequired(TypedDict):
    created: int
    customer_mapping: dict
    default_aggregation: dict
    display_name: str
    event_name: str
    id: str
    livemode: bool
    object: str
    status: str
    status_transitions: dict
    updated: int
    value_settings: dict


class Meter(MeterRequired, total=False):
    event_time_window: str


class MeterLoadMatchRequired(TypedDict):
    id: str


class MeterLoadMatch(MeterLoadMatchRequired, total=False):
    expand: list


class MeterListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class MeterCreateDataRequired(TypedDict):
    id: str
    created: int
    customer_mapping: dict
    default_aggregation: dict
    display_name: str
    event_name: str
    livemode: bool
    object: str
    status: str
    status_transitions: dict
    updated: int
    value_settings: dict


class MeterCreateData(MeterCreateDataRequired, total=False):
    event_time_window: str


class MeterEvent(TypedDict):
    pass


class MeterEventCreateData(TypedDict):
    pass


class MeterEventAdjustment(TypedDict):
    pass


class MeterEventAdjustmentCreateData(TypedDict):
    pass


class MeterEventSummary(TypedDict):
    aggregated_value: float
    end_time: int
    id: str
    livemode: bool
    meter: str
    object: str
    start_time: int


class MeterEventSummaryListMatchRequired(TypedDict):
    id: str
    customer: str
    end_time: int
    start_time: int


class MeterEventSummaryListMatch(MeterEventSummaryListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    value_grouping_window: str


class OnboardingLink(TypedDict, total=False):
    apple_terms_and_conditions: Any


class OnboardingLinkCreateData(TypedDict, total=False):
    apple_terms_and_conditions: Any


class OrderRequired(TypedDict):
    amount_fees: int
    amount_subtotal: int
    amount_total: int
    beneficiary: dict
    created: int
    currency: str
    delivery_details: list
    expected_delivery_year: int
    id: str
    livemode: bool
    metadata: dict
    metric_tons: str
    object: str
    product: Any
    status: str


class Order(OrderRequired, total=False):
    canceled_at: int
    cancellation_reason: str
    certificate: str
    confirmed_at: int
    delayed_at: int
    delivered_at: int
    product_substituted_at: int


class OrderLoadMatchRequired(TypedDict):
    id: str


class OrderLoadMatch(OrderLoadMatchRequired, total=False):
    expand: list


class OrderListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class OrderCreateDataRequired(TypedDict):
    id: str
    amount_fees: int
    amount_subtotal: int
    amount_total: int
    beneficiary: dict
    created: int
    currency: str
    delivery_details: list
    expected_delivery_year: int
    livemode: bool
    metadata: dict
    metric_tons: str
    object: str
    product: Any
    status: str


class OrderCreateData(OrderCreateDataRequired, total=False):
    canceled_at: int
    cancellation_reason: str
    certificate: str
    confirmed_at: int
    delayed_at: int
    delivered_at: int
    product_substituted_at: int


class OutboundPaymentRequired(TypedDict):
    amount: int
    cancelable: bool
    created: int
    currency: str
    expected_arrival_date: int
    financial_account: str
    id: str
    livemode: bool
    metadata: dict
    object: str
    statement_descriptor: str
    status: str
    status_transitions: dict
    transaction: Any


class OutboundPayment(OutboundPaymentRequired, total=False):
    customer: str
    description: str
    destination_payment_method: str
    destination_payment_method_details: Any
    end_user_details: Any
    hosted_regulatory_receipt_url: str
    returned_details: Any
    tracking_details: Any


class OutboundPaymentLoadMatchRequired(TypedDict):
    id: str


class OutboundPaymentLoadMatch(OutboundPaymentLoadMatchRequired, total=False):
    expand: list


class OutboundPaymentListMatchRequired(TypedDict):
    financial_account: str


class OutboundPaymentListMatch(OutboundPaymentListMatchRequired, total=False):
    created: Any
    customer: str
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class OutboundPaymentCreateDataRequired(TypedDict):
    id: str
    amount: int
    cancelable: bool
    created: int
    currency: str
    expected_arrival_date: int
    financial_account: str
    livemode: bool
    metadata: dict
    object: str
    statement_descriptor: str
    status: str
    status_transitions: dict
    transaction: Any


class OutboundPaymentCreateData(OutboundPaymentCreateDataRequired, total=False):
    customer: str
    description: str
    destination_payment_method: str
    destination_payment_method_details: Any
    end_user_details: Any
    hosted_regulatory_receipt_url: str
    returned_details: Any
    tracking_details: Any


class OutboundTransferRequired(TypedDict):
    amount: int
    cancelable: bool
    created: int
    currency: str
    destination_payment_method_details: dict
    expected_arrival_date: int
    financial_account: str
    id: str
    livemode: bool
    metadata: dict
    object: str
    statement_descriptor: str
    status: str
    status_transitions: dict
    transaction: Any


class OutboundTransfer(OutboundTransferRequired, total=False):
    description: str
    destination_payment_method: str
    hosted_regulatory_receipt_url: str
    returned_details: Any
    tracking_details: Any


class OutboundTransferLoadMatchRequired(TypedDict):
    id: str


class OutboundTransferLoadMatch(OutboundTransferLoadMatchRequired, total=False):
    expand: list


class OutboundTransferListMatchRequired(TypedDict):
    financial_account: str


class OutboundTransferListMatch(OutboundTransferListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class OutboundTransferCreateDataRequired(TypedDict):
    id: str
    amount: int
    cancelable: bool
    created: int
    currency: str
    destination_payment_method_details: dict
    expected_arrival_date: int
    financial_account: str
    livemode: bool
    metadata: dict
    object: str
    statement_descriptor: str
    status: str
    status_transitions: dict
    transaction: Any


class OutboundTransferCreateData(OutboundTransferCreateDataRequired, total=False):
    description: str
    destination_payment_method: str
    hosted_regulatory_receipt_url: str
    returned_details: Any
    tracking_details: Any


class PaymentAttemptRecordRequired(TypedDict):
    amount: dict
    amount_authorized: dict
    amount_canceled: dict
    amount_failed: dict
    amount_guaranteed: dict
    amount_refunded: dict
    amount_requested: dict
    created: int
    id: str
    livemode: bool
    metadata: dict
    object: str
    processor_details: dict
    reported_by: str


class PaymentAttemptRecord(PaymentAttemptRecordRequired, total=False):
    application: str
    customer_details: Any
    customer_presence: str
    description: str
    payment_method_details: Any
    payment_record: str
    shipping_details: Any


class PaymentAttemptRecordLoadMatchRequired(TypedDict):
    id: str


class PaymentAttemptRecordLoadMatch(PaymentAttemptRecordLoadMatchRequired, total=False):
    expand: list


class PaymentAttemptRecordListMatchRequired(TypedDict):
    payment_record: str


class PaymentAttemptRecordListMatch(PaymentAttemptRecordListMatchRequired, total=False):
    expand: list
    limit: int
    starting_after: str


class PaymentEvaluationRequired(TypedDict):
    client_device_metadata_details: dict
    created_at: int
    events: list
    id: str
    livemode: bool
    object: str
    payment_details: dict
    recommended_action: str
    signals: dict


class PaymentEvaluation(PaymentEvaluationRequired, total=False):
    customer_details: dict
    metadata: dict
    outcome: Any


class PaymentEvaluationCreateDataRequired(TypedDict):
    client_device_metadata_details: dict
    created_at: int
    events: list
    id: str
    livemode: bool
    object: str
    payment_details: dict
    recommended_action: str
    signals: dict


class PaymentEvaluationCreateData(PaymentEvaluationCreateDataRequired, total=False):
    customer_details: dict
    metadata: dict
    outcome: Any


class PaymentIntentRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    presentment_details: dict
    status: str


class PaymentIntent(PaymentIntentRequired, total=False):
    allowed_payment_method_types: list
    amount: int
    amount_capturable: int
    amount_details: Any
    amount_received: int
    application: Any
    application_fee_amount: int
    automatic_payment_methods: Any
    canceled_at: int
    cancellation_reason: str
    capture_method: str
    client_secret: str
    confirmation_method: str
    currency: str
    customer: Any
    customer_account: str
    description: str
    excluded_payment_method_types: list
    hooks: dict
    last_payment_error: Any
    latest_charge: Any
    managed_payments: Any
    metadata: dict
    next_action: Any
    on_behalf_of: Any
    payment_details: dict
    payment_method: Any
    payment_method_configuration_details: Any
    payment_method_options: Any
    payment_method_types: list
    payment_record: Any
    processing: Any
    receipt_email: str
    review: Any
    setup_future_usage: str
    shipping: Any
    statement_descriptor: str
    statement_descriptor_suffix: str
    transfer_data: Any
    transfer_group: str


class PaymentIntentLoadMatchRequired(TypedDict):
    id: str


class PaymentIntentLoadMatch(PaymentIntentLoadMatchRequired, total=False):
    client_secret: str
    expand: list


class PaymentIntentListMatch(TypedDict, total=False):
    created: Any
    customer: str
    customer_account: str
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class PaymentIntentCreateDataRequired(TypedDict):
    id: str
    created: int
    livemode: bool
    object: str
    presentment_details: dict
    status: str


class PaymentIntentCreateData(PaymentIntentCreateDataRequired, total=False):
    allowed_payment_method_types: list
    amount: int
    amount_capturable: int
    amount_details: Any
    amount_received: int
    application: Any
    application_fee_amount: int
    automatic_payment_methods: Any
    canceled_at: int
    cancellation_reason: str
    capture_method: str
    client_secret: str
    confirmation_method: str
    currency: str
    customer: Any
    customer_account: str
    description: str
    excluded_payment_method_types: list
    hooks: dict
    last_payment_error: Any
    latest_charge: Any
    managed_payments: Any
    metadata: dict
    next_action: Any
    on_behalf_of: Any
    payment_details: dict
    payment_method: Any
    payment_method_configuration_details: Any
    payment_method_options: Any
    payment_method_types: list
    payment_record: Any
    processing: Any
    receipt_email: str
    review: Any
    setup_future_usage: str
    shipping: Any
    statement_descriptor: str
    statement_descriptor_suffix: str
    transfer_data: Any
    transfer_group: str


class PaymentIntentAmountDetailsLineItemRequired(TypedDict):
    id: str
    object: str
    product_name: str
    quantity: int
    unit_cost: int


class PaymentIntentAmountDetailsLineItem(PaymentIntentAmountDetailsLineItemRequired, total=False):
    discount_amount: int
    payment_method_options: Any
    product_code: str
    tax: Any
    unit_of_measure: str


class PaymentIntentAmountDetailsLineItemListMatchRequired(TypedDict):
    intent: str


class PaymentIntentAmountDetailsLineItemListMatch(PaymentIntentAmountDetailsLineItemListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class PaymentLinkRequired(TypedDict):
    active: bool
    after_completion: dict
    allow_promotion_codes: bool
    automatic_tax: dict
    billing_address_collection: str
    currency: str
    custom_fields: list
    custom_text: dict
    customer_creation: str
    id: str
    line_items: dict
    livemode: bool
    metadata: dict
    object: str
    payment_method_collection: str
    phone_number_collection: dict
    shipping_options: list
    submit_type: str
    tax_id_collection: dict
    url: str


class PaymentLink(PaymentLinkRequired, total=False):
    application: Any
    application_fee_amount: int
    application_fee_percent: float
    consent_collection: Any
    inactive_message: str
    invoice_creation: Any
    managed_payments: Any
    name_collection: dict
    on_behalf_of: Any
    optional_items: list
    payment_intent_data: Any
    payment_method_options: Any
    payment_method_types: list
    restrictions: Any
    shipping_address_collection: Any
    subscription_data: Any
    transfer_data: Any


class PaymentLinkLoadMatchRequired(TypedDict):
    id: str


class PaymentLinkLoadMatch(PaymentLinkLoadMatchRequired, total=False):
    expand: list


class PaymentLinkListMatch(TypedDict, total=False):
    active: bool
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class PaymentLinkCreateDataRequired(TypedDict):
    id: str
    active: bool
    after_completion: dict
    allow_promotion_codes: bool
    automatic_tax: dict
    billing_address_collection: str
    currency: str
    custom_fields: list
    custom_text: dict
    customer_creation: str
    line_items: dict
    livemode: bool
    metadata: dict
    object: str
    payment_method_collection: str
    phone_number_collection: dict
    shipping_options: list
    submit_type: str
    tax_id_collection: dict
    url: str


class PaymentLinkCreateData(PaymentLinkCreateDataRequired, total=False):
    application: Any
    application_fee_amount: int
    application_fee_percent: float
    consent_collection: Any
    inactive_message: str
    invoice_creation: Any
    managed_payments: Any
    name_collection: dict
    on_behalf_of: Any
    optional_items: list
    payment_intent_data: Any
    payment_method_options: Any
    payment_method_types: list
    restrictions: Any
    shipping_address_collection: Any
    subscription_data: Any
    transfer_data: Any


class PaymentMethodRequired(TypedDict):
    billing_details: dict
    boleto: dict
    card: dict
    card_present: dict
    created: int
    custom: dict
    fpx: dict
    id: str
    interac_present: dict
    livemode: bool
    naver_pay: dict
    nz_bank_account: dict
    object: str
    type: str


class PaymentMethod(PaymentMethodRequired, total=False):
    acss_debit: dict
    affirm: dict
    afterpay_clearpay: dict
    alipay: dict
    allow_redisplay: bool
    alma: dict
    amazon_pay: dict
    au_becs_debit: dict
    bacs_debit: dict
    bancontact: dict
    billie: dict
    bizum: dict
    blik: dict
    cashapp: dict
    crypto: dict
    customer: Any
    customer_account: str
    customer_balance: dict
    eps: dict
    giropay: dict
    grabpay: dict
    ideal: dict
    kakao_pay: dict
    klarna: dict
    konbini: dict
    kr_card: dict
    link: dict
    mb_way: dict
    metadata: dict
    mobilepay: dict
    multibanco: dict
    oxxo: dict
    p24: dict
    pay_by_bank: dict
    payco: dict
    paynow: dict
    paypal: dict
    paypay: dict
    payto: dict
    pix: dict
    promptpay: dict
    radar_options: dict
    revolut_pay: dict
    samsung_pay: dict
    satispay: dict
    scalapay: dict
    sepa_debit: dict
    sequra: dict
    sofort: dict
    sunbit: dict
    swish: dict
    twint: dict
    upi: dict
    us_bank_account: dict
    wechat_pay: dict
    zip: dict


class PaymentMethodLoadMatchRequired(TypedDict):
    id: str


class PaymentMethodLoadMatch(PaymentMethodLoadMatchRequired, total=False):
    customer_id: str
    expand: list


class PaymentMethodListMatch(TypedDict, total=False):
    allow_redisplay: bool
    customer: str
    customer_account: str
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    type: str


class PaymentMethodCreateDataRequired(TypedDict):
    id: str
    billing_details: dict
    boleto: dict
    card: dict
    card_present: dict
    created: int
    custom: dict
    fpx: dict
    interac_present: dict
    livemode: bool
    naver_pay: dict
    nz_bank_account: dict
    object: str
    type: str


class PaymentMethodCreateData(PaymentMethodCreateDataRequired, total=False):
    acss_debit: dict
    affirm: dict
    afterpay_clearpay: dict
    alipay: dict
    allow_redisplay: bool
    alma: dict
    amazon_pay: dict
    au_becs_debit: dict
    bacs_debit: dict
    bancontact: dict
    billie: dict
    bizum: dict
    blik: dict
    cashapp: dict
    crypto: dict
    customer: Any
    customer_account: str
    customer_balance: dict
    eps: dict
    giropay: dict
    grabpay: dict
    ideal: dict
    kakao_pay: dict
    klarna: dict
    konbini: dict
    kr_card: dict
    link: dict
    mb_way: dict
    metadata: dict
    mobilepay: dict
    multibanco: dict
    oxxo: dict
    p24: dict
    pay_by_bank: dict
    payco: dict
    paynow: dict
    paypal: dict
    paypay: dict
    payto: dict
    pix: dict
    promptpay: dict
    radar_options: dict
    revolut_pay: dict
    samsung_pay: dict
    satispay: dict
    scalapay: dict
    sepa_debit: dict
    sequra: dict
    sofort: dict
    sunbit: dict
    swish: dict
    twint: dict
    upi: dict
    us_bank_account: dict
    wechat_pay: dict
    zip: dict


class PaymentMethodConfigurationRequired(TypedDict):
    acss_debit: dict
    active: bool
    affirm: dict
    afterpay_clearpay: dict
    alipay: dict
    alma: dict
    amazon_pay: dict
    apple_pay: dict
    au_becs_debit: dict
    bacs_debit: dict
    bancontact: dict
    billie: dict
    bizum: dict
    blik: dict
    boleto: dict
    card: dict
    cartes_bancaires: dict
    cashapp: dict
    crypto: dict
    customer_balance: dict
    eps: dict
    fpx: dict
    giropay: dict
    google_pay: dict
    grabpay: dict
    id: str
    ideal: dict
    is_default: bool
    jcb: dict
    kakao_pay: dict
    klarna: dict
    konbini: dict
    kr_card: dict
    link: dict
    livemode: bool
    mb_way: dict
    mobilepay: dict
    multibanco: dict
    name: str
    naver_pay: dict
    nz_bank_account: dict
    object: str
    oxxo: dict
    p24: dict
    pay_by_bank: dict
    payco: dict
    paynow: dict
    paypal: dict
    paypay: dict
    payto: dict
    pix: dict
    promptpay: dict
    revolut_pay: dict
    samsung_pay: dict
    satispay: dict
    scalapay: dict
    sepa_debit: dict
    sequra: dict
    sofort: dict
    sunbit: dict
    swish: dict
    twint: dict
    upi: dict
    us_bank_account: dict
    wechat_pay: dict
    zip: dict


class PaymentMethodConfiguration(PaymentMethodConfigurationRequired, total=False):
    application: str
    parent: str


class PaymentMethodConfigurationLoadMatchRequired(TypedDict):
    id: str


class PaymentMethodConfigurationLoadMatch(PaymentMethodConfigurationLoadMatchRequired, total=False):
    expand: list


class PaymentMethodConfigurationListMatch(TypedDict, total=False):
    active: bool
    application: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class PaymentMethodConfigurationCreateDataRequired(TypedDict):
    id: str
    acss_debit: dict
    active: bool
    affirm: dict
    afterpay_clearpay: dict
    alipay: dict
    alma: dict
    amazon_pay: dict
    apple_pay: dict
    au_becs_debit: dict
    bacs_debit: dict
    bancontact: dict
    billie: dict
    bizum: dict
    blik: dict
    boleto: dict
    card: dict
    cartes_bancaires: dict
    cashapp: dict
    crypto: dict
    customer_balance: dict
    eps: dict
    fpx: dict
    giropay: dict
    google_pay: dict
    grabpay: dict
    ideal: dict
    is_default: bool
    jcb: dict
    kakao_pay: dict
    klarna: dict
    konbini: dict
    kr_card: dict
    link: dict
    livemode: bool
    mb_way: dict
    mobilepay: dict
    multibanco: dict
    name: str
    naver_pay: dict
    nz_bank_account: dict
    object: str
    oxxo: dict
    p24: dict
    pay_by_bank: dict
    payco: dict
    paynow: dict
    paypal: dict
    paypay: dict
    payto: dict
    pix: dict
    promptpay: dict
    revolut_pay: dict
    samsung_pay: dict
    satispay: dict
    scalapay: dict
    sepa_debit: dict
    sequra: dict
    sofort: dict
    sunbit: dict
    swish: dict
    twint: dict
    upi: dict
    us_bank_account: dict
    wechat_pay: dict
    zip: dict


class PaymentMethodConfigurationCreateData(PaymentMethodConfigurationCreateDataRequired, total=False):
    application: str
    parent: str


class PaymentMethodDomain(TypedDict):
    amazon_pay: dict
    apple_pay: dict
    created: int
    domain_name: str
    enabled: bool
    google_pay: dict
    id: str
    klarna: dict
    link: dict
    livemode: bool
    object: str
    paypal: dict


class PaymentMethodDomainLoadMatchRequired(TypedDict):
    id: str


class PaymentMethodDomainLoadMatch(PaymentMethodDomainLoadMatchRequired, total=False):
    expand: list


class PaymentMethodDomainListMatch(TypedDict, total=False):
    domain_name: str
    enabled: bool
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class PaymentMethodDomainCreateData(TypedDict):
    id: str
    amazon_pay: dict
    apple_pay: dict
    created: int
    domain_name: str
    enabled: bool
    google_pay: dict
    klarna: dict
    link: dict
    livemode: bool
    object: str
    paypal: dict


class PaymentRecordRequired(TypedDict):
    amount: dict
    amount_authorized: dict
    amount_canceled: dict
    amount_failed: dict
    amount_guaranteed: dict
    amount_refunded: dict
    amount_requested: dict
    created: int
    id: str
    livemode: bool
    metadata: dict
    object: str
    processor_details: dict
    reported_by: str


class PaymentRecord(PaymentRecordRequired, total=False):
    application: str
    customer_details: Any
    customer_presence: str
    description: str
    latest_payment_attempt_record: str
    payment_method_details: Any
    shipping_details: Any


class PaymentRecordLoadMatchRequired(TypedDict):
    id: str


class PaymentRecordLoadMatch(PaymentRecordLoadMatchRequired, total=False):
    expand: list


class PaymentRecordListMatch(TypedDict, total=False):
    created_after: int
    created_before: int
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class PaymentRecordCreateDataRequired(TypedDict):
    amount: dict
    amount_authorized: dict
    amount_canceled: dict
    amount_failed: dict
    amount_guaranteed: dict
    amount_refunded: dict
    amount_requested: dict
    created: int
    id: str
    livemode: bool
    metadata: dict
    object: str
    processor_details: dict
    reported_by: str


class PaymentRecordCreateData(PaymentRecordCreateDataRequired, total=False):
    application: str
    customer_details: Any
    customer_presence: str
    description: str
    latest_payment_attempt_record: str
    payment_method_details: Any
    shipping_details: Any


class PayoutRequired(TypedDict):
    amount: int
    arrival_date: int
    automatic: bool
    created: int
    currency: str
    id: str
    livemode: bool
    method: str
    object: str
    reconciliation_status: str
    source_type: str
    status: str
    type: str


class Payout(PayoutRequired, total=False):
    application_fee: Any
    application_fee_amount: int
    balance_transaction: Any
    description: str
    destination: Any
    failure_balance_transaction: Any
    failure_code: str
    failure_message: str
    metadata: dict
    original_payout: Any
    payout_method: str
    reversed_by: Any
    statement_descriptor: str
    trace_id: str


class PayoutLoadMatchRequired(TypedDict):
    id: str


class PayoutLoadMatch(PayoutLoadMatchRequired, total=False):
    expand: list


class PayoutListMatch(TypedDict, total=False):
    arrival_date: Any
    created: Any
    destination: str
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class PayoutCreateDataRequired(TypedDict):
    id: str
    amount: int
    arrival_date: int
    automatic: bool
    created: int
    currency: str
    livemode: bool
    method: str
    object: str
    reconciliation_status: str
    source_type: str
    status: str
    type: str


class PayoutCreateData(PayoutCreateDataRequired, total=False):
    application_fee: Any
    application_fee_amount: int
    balance_transaction: Any
    description: str
    destination: Any
    failure_balance_transaction: Any
    failure_code: str
    failure_message: str
    metadata: dict
    original_payout: Any
    payout_method: str
    reversed_by: Any
    statement_descriptor: str
    trace_id: str


class PersonRequired(TypedDict):
    account: str
    created: int
    id: str
    object: str
    verification: dict


class Person(PersonRequired, total=False):
    additional_tos_acceptances: dict
    address: dict
    address_kana: Any
    address_kanji: Any
    dob: dict
    email: str
    first_name: str
    first_name_kana: str
    first_name_kanji: str
    full_name_aliases: list
    future_requirements: Any
    gender: str
    id_number_provided: bool
    id_number_secondary_provided: bool
    last_name: str
    last_name_kana: str
    last_name_kanji: str
    maiden_name: str
    metadata: dict
    nationality: str
    phone: str
    political_exposure: str
    registered_address: dict
    relationship: dict
    requirements: Any
    ssn_last_4_provided: bool
    us_cfpb_data: Any


class PersonLoadMatchRequired(TypedDict):
    account_id: str
    id: str


class PersonLoadMatch(PersonLoadMatchRequired, total=False):
    expand: list


class PersonListMatchRequired(TypedDict):
    account_id: str


class PersonListMatch(PersonListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    relationship: dict
    starting_after: str


class PersonCreateDataRequired(TypedDict):
    account_id: str
    account: str
    created: int
    object: str
    verification: dict


class PersonCreateData(PersonCreateDataRequired, total=False):
    id: str
    additional_tos_acceptances: dict
    address: dict
    address_kana: Any
    address_kanji: Any
    dob: dict
    email: str
    first_name: str
    first_name_kana: str
    first_name_kanji: str
    full_name_aliases: list
    future_requirements: Any
    gender: str
    id_number_provided: bool
    id_number_secondary_provided: bool
    last_name: str
    last_name_kana: str
    last_name_kanji: str
    maiden_name: str
    metadata: dict
    nationality: str
    phone: str
    political_exposure: str
    registered_address: dict
    relationship: dict
    requirements: Any
    ssn_last_4_provided: bool
    us_cfpb_data: Any


class PersonalizationDesignRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    metadata: dict
    object: str
    physical_bundle: Any
    preferences: dict
    rejection_reasons: dict
    status: str


class PersonalizationDesign(PersonalizationDesignRequired, total=False):
    card_logo: Any
    carrier_text: Any
    lookup_key: str
    name: str


class PersonalizationDesignLoadMatchRequired(TypedDict):
    id: str


class PersonalizationDesignLoadMatch(PersonalizationDesignLoadMatchRequired, total=False):
    expand: list


class PersonalizationDesignListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    lookup_key: list
    preference: dict
    starting_after: str
    status: str


class PersonalizationDesignCreateDataRequired(TypedDict):
    id: str
    created: int
    livemode: bool
    metadata: dict
    object: str
    physical_bundle: Any
    preferences: dict
    rejection_reasons: dict
    status: str


class PersonalizationDesignCreateData(PersonalizationDesignCreateDataRequired, total=False):
    card_logo: Any
    carrier_text: Any
    lookup_key: str
    name: str


class PhysicalBundle(TypedDict):
    card_logo: str
    carrier_text: str
    features: dict
    id: str
    livemode: bool
    name: str
    object: str
    second_line: str
    status: str
    type: str


class PhysicalBundleLoadMatchRequired(TypedDict):
    id: str


class PhysicalBundleLoadMatch(PhysicalBundleLoadMatchRequired, total=False):
    expand: list


class PhysicalBundleListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str
    type: str


class PlanRequired(TypedDict):
    active: bool
    billing_scheme: str
    created: int
    currency: str
    id: str
    interval: str
    interval_count: int
    livemode: bool
    object: str
    usage_type: str


class Plan(PlanRequired, total=False):
    amount: int
    amount_decimal: str
    metadata: dict
    meter: str
    nickname: str
    product: Any
    tiers: list
    tiers_mode: str
    transform_usage: Any
    trial_period_days: int


class PlanLoadMatchRequired(TypedDict):
    id: str


class PlanLoadMatch(PlanLoadMatchRequired, total=False):
    expand: list


class PlanListMatch(TypedDict, total=False):
    active: bool
    created: Any
    ending_before: str
    expand: list
    limit: int
    product: str
    starting_after: str


class PlanCreateDataRequired(TypedDict):
    id: str
    active: bool
    billing_scheme: str
    created: int
    currency: str
    interval: str
    interval_count: int
    livemode: bool
    object: str
    usage_type: str


class PlanCreateData(PlanCreateDataRequired, total=False):
    amount: int
    amount_decimal: str
    metadata: dict
    meter: str
    nickname: str
    product: Any
    tiers: list
    tiers_mode: str
    transform_usage: Any
    trial_period_days: int


class PriceRequired(TypedDict):
    active: bool
    billing_scheme: str
    created: int
    currency: str
    id: str
    livemode: bool
    metadata: dict
    object: str
    product: Any
    type: str


class Price(PriceRequired, total=False):
    currency_options: dict
    custom_unit_amount: Any
    lookup_key: str
    nickname: str
    recurring: Any
    tax_behavior: str
    tiers: list
    tiers_mode: str
    transform_quantity: Any
    unit_amount: int
    unit_amount_decimal: str


class PriceLoadMatchRequired(TypedDict):
    id: str


class PriceLoadMatch(PriceLoadMatchRequired, total=False):
    expand: list


class PriceListMatch(TypedDict, total=False):
    active: bool
    created: Any
    currency: str
    ending_before: str
    expand: list
    limit: int
    lookup_key: list
    product: str
    recurring: dict
    starting_after: str
    type: str


class PriceCreateDataRequired(TypedDict):
    id: str
    active: bool
    billing_scheme: str
    created: int
    currency: str
    livemode: bool
    metadata: dict
    object: str
    product: Any
    type: str


class PriceCreateData(PriceCreateDataRequired, total=False):
    currency_options: dict
    custom_unit_amount: Any
    lookup_key: str
    nickname: str
    recurring: Any
    tax_behavior: str
    tiers: list
    tiers_mode: str
    transform_quantity: Any
    unit_amount: int
    unit_amount_decimal: str


class ProductRequired(TypedDict):
    active: bool
    created: int
    current_prices_per_metric_ton: dict
    id: str
    images: list
    livemode: bool
    marketing_features: list
    metadata: dict
    metric_tons_available: str
    name: str
    object: str
    suppliers: list
    updated: int


class Product(ProductRequired, total=False):
    default_price: Any
    delivery_year: int
    description: str
    package_dimensions: Any
    shippable: bool
    statement_descriptor: str
    tax_code: Any
    tax_details: Any
    unit_label: str
    url: str


class ProductLoadMatchRequired(TypedDict):
    id: str


class ProductLoadMatch(ProductLoadMatchRequired, total=False):
    expand: list


class ProductListMatch(TypedDict, total=False):
    active: bool
    created: Any
    ending_before: str
    expand: list
    ids: list
    limit: int
    shippable: bool
    starting_after: str
    url: str


class ProductCreateDataRequired(TypedDict):
    id: str
    active: bool
    created: int
    current_prices_per_metric_ton: dict
    images: list
    livemode: bool
    marketing_features: list
    metadata: dict
    metric_tons_available: str
    name: str
    object: str
    suppliers: list
    updated: int


class ProductCreateData(ProductCreateDataRequired, total=False):
    default_price: Any
    delivery_year: int
    description: str
    package_dimensions: Any
    shippable: bool
    statement_descriptor: str
    tax_code: Any
    tax_details: Any
    unit_label: str
    url: str


class ProductRemoveMatch(TypedDict):
    id: str


class ProductFeature(TypedDict):
    active: bool
    id: str
    livemode: bool
    lookup_key: str
    metadata: dict
    name: str
    object: str


class ProductFeatureLoadMatchRequired(TypedDict):
    id: str
    product_id: str


class ProductFeatureLoadMatch(ProductFeatureLoadMatchRequired, total=False):
    expand: list


class ProductFeatureCreateData(TypedDict):
    id: str
    active: bool
    livemode: bool
    lookup_key: str
    metadata: dict
    name: str
    object: str


class PromotionCodeRequired(TypedDict):
    active: bool
    code: str
    created: int
    id: str
    livemode: bool
    object: str
    promotion: dict
    restrictions: dict
    times_redeemed: int


class PromotionCode(PromotionCodeRequired, total=False):
    customer: Any
    customer_account: str
    expires_at: int
    max_redemptions: int
    metadata: dict


class PromotionCodeLoadMatchRequired(TypedDict):
    id: str


class PromotionCodeLoadMatch(PromotionCodeLoadMatchRequired, total=False):
    expand: list


class PromotionCodeListMatch(TypedDict, total=False):
    active: bool
    code: str
    coupon: str
    created: Any
    customer: str
    customer_account: str
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class PromotionCodeCreateDataRequired(TypedDict):
    id: str
    active: bool
    code: str
    created: int
    livemode: bool
    object: str
    promotion: dict
    restrictions: dict
    times_redeemed: int


class PromotionCodeCreateData(PromotionCodeCreateDataRequired, total=False):
    customer: Any
    customer_account: str
    expires_at: int
    max_redemptions: int
    metadata: dict


class QuoteRequired(TypedDict):
    amount_subtotal: int
    amount_total: int
    automatic_tax: dict
    collection_method: str
    computed: dict
    created: int
    discounts: list
    expires_at: int
    id: str
    invoice_settings: dict
    line_items: dict
    livemode: bool
    metadata: dict
    object: str
    status: str
    status_transitions: dict
    subscription_data: dict
    total_details: dict


class Quote(QuoteRequired, total=False):
    application: Any
    application_fee_amount: int
    application_fee_percent: float
    currency: str
    customer: Any
    customer_account: str
    default_tax_rates: list
    description: str
    footer: str
    from_quote: Any
    header: str
    invoice: Any
    number: str
    on_behalf_of: Any
    subscription: Any
    subscription_schedule: Any
    test_clock: Any
    transfer_data: Any


class QuoteLoadMatchRequired(TypedDict):
    id: str


class QuoteLoadMatch(QuoteLoadMatchRequired, total=False):
    expand: list


class QuoteListMatch(TypedDict, total=False):
    customer: str
    customer_account: str
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str
    test_clock: str


class QuoteCreateDataRequired(TypedDict):
    id: str
    amount_subtotal: int
    amount_total: int
    automatic_tax: dict
    collection_method: str
    computed: dict
    created: int
    discounts: list
    expires_at: int
    invoice_settings: dict
    line_items: dict
    livemode: bool
    metadata: dict
    object: str
    status: str
    status_transitions: dict
    subscription_data: dict
    total_details: dict


class QuoteCreateData(QuoteCreateDataRequired, total=False):
    application: Any
    application_fee_amount: int
    application_fee_percent: float
    currency: str
    customer: Any
    customer_account: str
    default_tax_rates: list
    description: str
    footer: str
    from_quote: Any
    header: str
    invoice: Any
    number: str
    on_behalf_of: Any
    subscription: Any
    subscription_schedule: Any
    test_clock: Any
    transfer_data: Any


class QuoteComputedUpfrontLineItemRequired(TypedDict):
    amount_discount: int
    amount_subtotal: int
    amount_tax: int
    amount_total: int
    currency: str
    id: str
    object: str


class QuoteComputedUpfrontLineItem(QuoteComputedUpfrontLineItemRequired, total=False):
    adjustable_quantity: Any
    description: str
    discounts: list
    metadata: dict
    price: float
    quantity: int
    taxes: list


class QuoteComputedUpfrontLineItemListMatchRequired(TypedDict):
    id: str


class QuoteComputedUpfrontLineItemListMatch(QuoteComputedUpfrontLineItemListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class QuotePdf(TypedDict, total=False):
    id: str


class QuotePdfLoadMatchRequired(TypedDict):
    id: str


class QuotePdfLoadMatch(QuotePdfLoadMatchRequired, total=False):
    expand: list


class ReaderRequired(TypedDict):
    device_type: str
    id: str
    label: str
    livemode: bool
    metadata: dict
    object: str
    serial_number: str


class Reader(ReaderRequired, total=False):
    action: Any
    device_sw_version: str
    ip_address: str
    last_seen_at: int
    location: Any
    status: str


class ReaderLoadMatchRequired(TypedDict):
    id: str


class ReaderLoadMatch(ReaderLoadMatchRequired, total=False):
    expand: list


class ReaderListMatch(TypedDict, total=False):
    device_type: str
    ending_before: str
    expand: list
    limit: int
    location: str
    serial_number: str
    starting_after: str
    status: str


class ReaderCreateDataRequired(TypedDict):
    id: str
    device_type: str
    label: str
    livemode: bool
    metadata: dict
    object: str
    serial_number: str


class ReaderCreateData(ReaderCreateDataRequired, total=False):
    action: Any
    device_sw_version: str
    ip_address: str
    last_seen_at: int
    location: Any
    status: str


class ReaderRemoveMatch(TypedDict):
    id: str


class ReceivedCreditRequired(TypedDict):
    amount: int
    created: int
    currency: str
    description: str
    id: str
    initiating_payment_method_details: dict
    linked_flows: dict
    livemode: bool
    network: str
    object: str
    status: str


class ReceivedCredit(ReceivedCreditRequired, total=False):
    failure_code: str
    financial_account: str
    hosted_regulatory_receipt_url: str
    reversal_details: Any
    transaction: Any


class ReceivedCreditLoadMatchRequired(TypedDict):
    id: str


class ReceivedCreditLoadMatch(ReceivedCreditLoadMatchRequired, total=False):
    expand: list


class ReceivedCreditListMatchRequired(TypedDict):
    financial_account: str


class ReceivedCreditListMatch(ReceivedCreditListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    linked_flow: dict
    starting_after: str
    status: str


class ReceivedCreditCreateDataRequired(TypedDict):
    amount: int
    created: int
    currency: str
    description: str
    id: str
    initiating_payment_method_details: dict
    linked_flows: dict
    livemode: bool
    network: str
    object: str
    status: str


class ReceivedCreditCreateData(ReceivedCreditCreateDataRequired, total=False):
    failure_code: str
    financial_account: str
    hosted_regulatory_receipt_url: str
    reversal_details: Any
    transaction: Any


class ReceivedDebitRequired(TypedDict):
    amount: int
    created: int
    currency: str
    description: str
    id: str
    initiating_payment_method_details: dict
    linked_flows: dict
    livemode: bool
    network: str
    object: str
    status: str


class ReceivedDebit(ReceivedDebitRequired, total=False):
    failure_code: str
    financial_account: str
    hosted_regulatory_receipt_url: str
    reversal_details: Any
    transaction: Any


class ReceivedDebitLoadMatchRequired(TypedDict):
    id: str


class ReceivedDebitLoadMatch(ReceivedDebitLoadMatchRequired, total=False):
    expand: list


class ReceivedDebitListMatchRequired(TypedDict):
    financial_account: str


class ReceivedDebitListMatch(ReceivedDebitListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class ReceivedDebitCreateDataRequired(TypedDict):
    amount: int
    created: int
    currency: str
    description: str
    id: str
    initiating_payment_method_details: dict
    linked_flows: dict
    livemode: bool
    network: str
    object: str
    status: str


class ReceivedDebitCreateData(ReceivedDebitCreateDataRequired, total=False):
    failure_code: str
    financial_account: str
    hosted_regulatory_receipt_url: str
    reversal_details: Any
    transaction: Any


class RefundRequired(TypedDict):
    amount: int
    created: int
    currency: str
    destination_details: dict
    fee: Any
    id: str
    next_action: dict
    object: str
    presentment_details: dict


class Refund(RefundRequired, total=False):
    balance_transaction: Any
    charge: Any
    customer: Any
    customer_account: str
    description: str
    failure_balance_transaction: Any
    failure_reason: str
    instructions_email: str
    metadata: dict
    payment_intent: Any
    payment_method: Any
    pending_reason: str
    reason: str
    receipt_number: str
    source_transfer_reversal: Any
    status: str
    transfer_reversal: Any


class RefundLoadMatchRequired(TypedDict):
    id: str


class RefundLoadMatch(RefundLoadMatchRequired, total=False):
    application_fee_id: str
    expand: list
    charge_id: str


class RefundListMatch(TypedDict, total=False):
    charge: str
    created: Any
    ending_before: str
    expand: list
    limit: int
    payment_intent: str
    starting_after: str


class RefundCreateDataRequired(TypedDict):
    id: str
    amount: int
    created: int
    currency: str
    destination_details: dict
    fee: Any
    next_action: dict
    object: str
    presentment_details: dict


class RefundCreateData(RefundCreateDataRequired, total=False):
    balance_transaction: Any
    charge: Any
    customer: Any
    customer_account: str
    description: str
    failure_balance_transaction: Any
    failure_reason: str
    instructions_email: str
    metadata: dict
    payment_intent: Any
    payment_method: Any
    pending_reason: str
    reason: str
    receipt_number: str
    source_transfer_reversal: Any
    status: str
    transfer_reversal: Any


class RegistrationRequired(TypedDict):
    active_from: int
    ae: dict
    al: dict
    am: dict
    ao: dict
    at: dict
    au: dict
    aw: dict
    az: dict
    ba: dict
    bb: dict
    bd: dict
    be: dict
    bf: dict
    bg: dict
    bh: dict
    bj: dict
    bs: dict
    by: dict
    ca: dict
    cd: dict
    ch: dict
    cl: dict
    cm: dict
    co: dict
    country: str
    country_options: dict
    cr: dict
    created: int
    cv: dict
    cy: dict
    cz: dict
    de: dict
    dk: dict
    ec: dict
    ee: dict
    eg: dict
    es: dict
    et: dict
    fi: dict
    fr: dict
    gb: dict
    ge: dict
    gn: dict
    gr: dict
    hr: dict
    hu: dict
    id: dict
    ie: dict
    it: dict
    jp: dict
    ke: dict
    kg: dict
    kh: dict
    kr: dict
    kz: dict
    la: dict
    livemode: bool
    lk: dict
    lt: dict
    lu: dict
    lv: dict
    ma: dict
    md: dict
    me: dict
    mk: dict
    mr: dict
    mt: dict
    mx: dict
    my: dict
    ng: dict
    nl: dict
    no: dict
    np: dict
    nz: dict
    object: str
    om: dict
    pe: dict
    ph: dict
    pl: dict
    pt: dict
    ro: dict
    rs: dict
    ru: dict
    sa: dict
    se: dict
    sg: dict
    si: dict
    sk: dict
    sn: dict
    sr: dict
    status: str
    th: dict
    tj: dict
    tr: dict
    tw: dict
    tz: dict
    ua: dict
    ug: dict
    us: dict
    uy: dict
    uz: dict
    vn: dict
    za: dict
    zm: dict
    zw: dict


class Registration(RegistrationRequired, total=False):
    expires_at: int


class RegistrationLoadMatchRequired(TypedDict):
    id: str


class RegistrationLoadMatch(RegistrationLoadMatchRequired, total=False):
    expand: list


class RegistrationListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class RegistrationCreateDataRequired(TypedDict):
    id: str
    active_from: int
    ae: dict
    al: dict
    am: dict
    ao: dict
    at: dict
    au: dict
    aw: dict
    az: dict
    ba: dict
    bb: dict
    bd: dict
    be: dict
    bf: dict
    bg: dict
    bh: dict
    bj: dict
    bs: dict
    by: dict
    ca: dict
    cd: dict
    ch: dict
    cl: dict
    cm: dict
    co: dict
    country: str
    country_options: dict
    cr: dict
    created: int
    cv: dict
    cy: dict
    cz: dict
    de: dict
    dk: dict
    ec: dict
    ee: dict
    eg: dict
    es: dict
    et: dict
    fi: dict
    fr: dict
    gb: dict
    ge: dict
    gn: dict
    gr: dict
    hr: dict
    hu: dict
    ie: dict
    it: dict
    jp: dict
    ke: dict
    kg: dict
    kh: dict
    kr: dict
    kz: dict
    la: dict
    livemode: bool
    lk: dict
    lt: dict
    lu: dict
    lv: dict
    ma: dict
    md: dict
    me: dict
    mk: dict
    mr: dict
    mt: dict
    mx: dict
    my: dict
    ng: dict
    nl: dict
    no: dict
    np: dict
    nz: dict
    object: str
    om: dict
    pe: dict
    ph: dict
    pl: dict
    pt: dict
    ro: dict
    rs: dict
    ru: dict
    sa: dict
    se: dict
    sg: dict
    si: dict
    sk: dict
    sn: dict
    sr: dict
    status: str
    th: dict
    tj: dict
    tr: dict
    tw: dict
    tz: dict
    ua: dict
    ug: dict
    us: dict
    uy: dict
    uz: dict
    vn: dict
    za: dict
    zm: dict
    zw: dict


class RegistrationCreateData(RegistrationCreateDataRequired, total=False):
    expires_at: int


class ReportRunRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    parameters: dict
    report_type: str
    status: str


class ReportRun(ReportRunRequired, total=False):
    error: str
    result: Any
    succeeded_at: int


class ReportRunLoadMatchRequired(TypedDict):
    id: str


class ReportRunLoadMatch(ReportRunLoadMatchRequired, total=False):
    expand: list


class ReportRunListMatch(TypedDict, total=False):
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class ReportRunCreateDataRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    parameters: dict
    report_type: str
    status: str


class ReportRunCreateData(ReportRunCreateDataRequired, total=False):
    error: str
    result: Any
    succeeded_at: int


class ReportTypeRequired(TypedDict):
    data_available_end: int
    data_available_start: int
    id: str
    livemode: bool
    name: str
    object: str
    updated: int
    version: int


class ReportType(ReportTypeRequired, total=False):
    default_columns: list


class ReportTypeLoadMatchRequired(TypedDict):
    id: str


class ReportTypeLoadMatch(ReportTypeLoadMatchRequired, total=False):
    expand: list


class ReportTypeListMatch(TypedDict, total=False):
    expand: list


class RequestRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    payment_method: str
    replacements: list


class Request(RequestRequired, total=False):
    metadata: dict
    request_context: Any
    request_details: Any
    response_details: Any
    url: str


class RequestLoadMatchRequired(TypedDict):
    id: str


class RequestLoadMatch(RequestLoadMatchRequired, total=False):
    expand: list


class RequestListMatch(TypedDict, total=False):
    created: dict
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class RequestCreateDataRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    payment_method: str
    replacements: list


class RequestCreateData(RequestCreateDataRequired, total=False):
    metadata: dict
    request_context: Any
    request_details: Any
    response_details: Any
    url: str


class ReversalRequired(TypedDict):
    amount: int
    created: int
    currency: str
    id: str
    object: str
    transfer: Any


class Reversal(ReversalRequired, total=False):
    balance_transaction: Any
    destination_payment_refund: Any
    metadata: dict
    source_refund: Any


class ReversalLoadMatchRequired(TypedDict):
    id: str
    transfer_id: str


class ReversalLoadMatch(ReversalLoadMatchRequired, total=False):
    expand: list


class ReversalListMatchRequired(TypedDict):
    transfer_id: str


class ReversalListMatch(ReversalListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class ReversalCreateDataRequired(TypedDict):
    transfer_id: str
    amount: int
    created: int
    currency: str
    object: str
    transfer: Any


class ReversalCreateData(ReversalCreateDataRequired, total=False):
    id: str
    balance_transaction: Any
    destination_payment_refund: Any
    metadata: dict
    source_refund: Any


class ReviewRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    open: bool
    opened_reason: str
    reason: str


class Review(ReviewRequired, total=False):
    billing_zip: str
    charge: Any
    closed_reason: str
    ip_address: str
    ip_address_location: Any
    payment_intent: Any
    session: Any


class ReviewLoadMatchRequired(TypedDict):
    id: str


class ReviewLoadMatch(ReviewLoadMatchRequired, total=False):
    expand: list


class ReviewListMatch(TypedDict, total=False):
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class ReviewCreateDataRequired(TypedDict):
    id: str
    created: int
    livemode: bool
    object: str
    open: bool
    opened_reason: str
    reason: str


class ReviewCreateData(ReviewCreateDataRequired, total=False):
    billing_zip: str
    charge: Any
    closed_reason: str
    ip_address: str
    ip_address_location: Any
    payment_intent: Any
    session: Any


class ScheduledQueryRunRequired(TypedDict):
    created: int
    data_load_time: int
    error: dict
    id: str
    livemode: bool
    object: str
    result_available_until: int
    sql: str
    status: str
    title: str


class ScheduledQueryRun(ScheduledQueryRunRequired, total=False):
    file: Any


class ScheduledQueryRunLoadMatchRequired(TypedDict):
    id: str


class ScheduledQueryRunLoadMatch(ScheduledQueryRunLoadMatchRequired, total=False):
    expand: list


class ScheduledQueryRunListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class SearchRequired(TypedDict):
    active: bool
    amount: int
    amount_captured: int
    amount_due: int
    amount_overpaid: int
    amount_paid: int
    amount_paid_off_stripe: int
    amount_refunded: int
    amount_remaining: int
    amount_shipping: int
    attempt_count: int
    attempted: bool
    auto_advance: bool
    automatic_tax: dict
    billing_cycle_anchor: int
    billing_details: dict
    billing_mode: dict
    billing_schedules: list
    billing_scheme: str
    cancel_at_period_end: bool
    captured: bool
    collection_method: str
    created: int
    currency: str
    default_tax_rates: list
    discounts: list
    disputed: bool
    id: str
    images: list
    issuer: dict
    items: dict
    lines: dict
    livemode: bool
    marketing_features: list
    metadata: dict
    object: str
    paid: bool
    payment_settings: dict
    payments: dict
    period_end: int
    period_start: int
    post_payment_credit_notes_amount: int
    pre_payment_credit_notes_amount: int
    presentment_details: dict
    product: Any
    refunded: bool
    refunds: dict
    sources: dict
    start_date: int
    starting_balance: int
    status: str
    status_transitions: dict
    subscriptions: dict
    subtotal: int
    tax: dict
    tax_ids: dict
    threshold_reason: dict
    total: int
    type: str
    updated: int


class Search(SearchRequired, total=False):
    account_country: str
    account_name: str
    account_tax_ids: list
    address: Any
    allowed_payment_method_types: list
    amount_capturable: int
    amount_details: Any
    amount_received: int
    application: Any
    application_fee: Any
    application_fee_amount: int
    application_fee_percent: float
    automatic_payment_methods: Any
    automatically_finalizes_at: int
    balance: int
    balance_transaction: Any
    billing_cycle_anchor_config: Any
    billing_reason: str
    billing_thresholds: Any
    business_name: str
    calculated_statement_descriptor: str
    cancel_at: int
    canceled_at: int
    cancellation_details: Any
    cancellation_reason: str
    capture_method: str
    cash_balance: Any
    client_secret: str
    confirmation_method: str
    confirmation_secret: Any
    currency_options: dict
    custom_fields: list
    custom_unit_amount: Any
    customer: Any
    customer_account: str
    customer_address: Any
    customer_email: str
    customer_name: str
    customer_phone: str
    customer_shipping: Any
    customer_tax_exempt: str
    customer_tax_ids: list
    days_until_due: int
    default_payment_method: Any
    default_price: Any
    default_source: Any
    delinquent: bool
    description: str
    discount: Any
    due_date: int
    effective_at: int
    email: str
    ended_at: int
    ending_balance: int
    excluded_payment_method_types: list
    failure_balance_transaction: Any
    failure_code: str
    failure_message: str
    footer: str
    fraud_details: Any
    from_invoice: Any
    hooks: dict
    hosted_invoice_url: str
    individual_name: str
    invoice_credit_balance: dict
    invoice_pdf: str
    invoice_prefix: str
    invoice_settings: dict
    last_finalization_error: Any
    last_payment_error: Any
    latest_charge: Any
    latest_invoice: Any
    latest_revision: Any
    lookup_key: str
    managed_payments: Any
    name: str
    next_action: Any
    next_invoice_sequence: int
    next_payment_attempt: int
    next_pending_invoice_item_invoice: int
    nickname: str
    number: str
    on_behalf_of: Any
    outcome: Any
    package_dimensions: Any
    parent: Any
    pause_collection: Any
    payment_details: dict
    payment_intent: Any
    payment_method: str
    payment_method_configuration_details: Any
    payment_method_details: Any
    payment_method_options: Any
    payment_method_types: list
    payment_record: Any
    pending_invoice_item_interval: Any
    pending_setup_intent: Any
    pending_update: Any
    phone: str
    preferred_locales: list
    processing: Any
    radar_options: dict
    receipt_email: str
    receipt_number: str
    receipt_url: str
    recurring: Any
    rendering: Any
    review: Any
    schedule: Any
    setup_future_usage: str
    shippable: bool
    shipping: Any
    shipping_cost: Any
    shipping_details: Any
    source_transfer: Any
    statement_descriptor: str
    statement_descriptor_suffix: str
    status_details: dict
    subtotal_excluding_tax: int
    tax_behavior: str
    tax_code: Any
    tax_details: Any
    tax_exempt: str
    test_clock: Any
    tiers: list
    tiers_mode: str
    total_discount_amounts: list
    total_excluding_tax: int
    total_pretax_credit_amounts: list
    total_taxes: list
    transfer: Any
    transfer_data: Any
    transfer_group: str
    transform_quantity: Any
    trial_end: int
    trial_settings: Any
    trial_start: int
    unit_amount: int
    unit_amount_decimal: str
    unit_label: str
    url: str
    webhooks_delivered_at: int


class SearchListMatchRequired(TypedDict):
    query: str


class SearchListMatch(SearchListMatchRequired, total=False):
    expand: list
    limit: int
    page: str


class SecretRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    name: str
    object: str
    scope: dict
    type: str


class Secret(SecretRequired, total=False):
    deleted: bool
    expires_at: int
    payload: str
    user: str


class SecretLoadMatchRequired(TypedDict):
    name: str
    scope: dict


class SecretLoadMatch(SecretLoadMatchRequired, total=False):
    expand: list


class SecretListMatchRequired(TypedDict):
    scope: dict


class SecretListMatch(SecretListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class SecretCreateDataRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    name: str
    object: str
    scope: dict
    type: str


class SecretCreateData(SecretCreateDataRequired, total=False):
    deleted: bool
    expires_at: int
    payload: str
    user: str


class SessionRequired(TypedDict):
    accounts: dict
    automatic_tax: dict
    bank_account_token: dict
    branding_settings: dict
    configuration: Any
    created: int
    custom_fields: list
    custom_text: dict
    expires_at: int
    id: str
    limits: dict
    line_items: dict
    livemode: bool
    mode: str
    object: str
    payment_method_types: list
    payment_status: str
    phone_number_collection: dict
    presentment_details: dict
    shipping_options: list
    tax_id_collection: dict


class Session(SessionRequired, total=False):
    account_holder: Any
    adaptive_pricing: Any
    after_expiration: Any
    allow_promotion_codes: bool
    allowed_payment_method_types: list
    amount_subtotal: int
    amount_total: int
    billing_address_collection: str
    cancel_url: str
    client_reference_id: str
    client_secret: str
    collected_information: Any
    consent: Any
    consent_collection: Any
    currency: str
    currency_conversion: Any
    customer: Any
    customer_account: str
    customer_creation: str
    customer_details: Any
    customer_email: str
    discounts: list
    excluded_payment_method_types: list
    filters: dict
    flow: Any
    integration_identifier: str
    invoice: Any
    invoice_creation: Any
    locale: str
    managed_payments: Any
    manual_entry: dict
    metadata: dict
    name_collection: dict
    on_behalf_of: str
    optional_items: list
    origin_context: str
    payment_intent: Any
    payment_link: Any
    payment_method_collection: str
    payment_method_configuration_details: Any
    payment_method_options: Any
    permissions: Any
    prefetch: list
    recovered_from: str
    redirect_on_completion: str
    return_url: str
    saved_payment_method_options: Any
    setup_intent: Any
    shipping_address_collection: Any
    shipping_cost: Any
    status: str
    submit_type: str
    subscription: Any
    success_url: str
    total_details: int
    ui_mode: str
    url: str
    wallet_options: Any


class SessionLoadMatchRequired(TypedDict):
    session: str


class SessionLoadMatch(SessionLoadMatchRequired, total=False):
    expand: list


class SessionListMatch(TypedDict, total=False):
    created: Any
    customer: str
    customer_account: str
    customer_detail: dict
    ending_before: str
    expand: list
    limit: int
    payment_intent: str
    payment_link: str
    starting_after: str
    status: str
    subscription: str


class SessionCreateDataRequired(TypedDict):
    id: str
    accounts: dict
    automatic_tax: dict
    bank_account_token: dict
    branding_settings: dict
    configuration: Any
    created: int
    custom_fields: list
    custom_text: dict
    expires_at: int
    limits: dict
    line_items: dict
    livemode: bool
    mode: str
    object: str
    payment_method_types: list
    payment_status: str
    phone_number_collection: dict
    presentment_details: dict
    shipping_options: list
    tax_id_collection: dict


class SessionCreateData(SessionCreateDataRequired, total=False):
    account_holder: Any
    adaptive_pricing: Any
    after_expiration: Any
    allow_promotion_codes: bool
    allowed_payment_method_types: list
    amount_subtotal: int
    amount_total: int
    billing_address_collection: str
    cancel_url: str
    client_reference_id: str
    client_secret: str
    collected_information: Any
    consent: Any
    consent_collection: Any
    currency: str
    currency_conversion: Any
    customer: Any
    customer_account: str
    customer_creation: str
    customer_details: Any
    customer_email: str
    discounts: list
    excluded_payment_method_types: list
    filters: dict
    flow: Any
    integration_identifier: str
    invoice: Any
    invoice_creation: Any
    locale: str
    managed_payments: Any
    manual_entry: dict
    metadata: dict
    name_collection: dict
    on_behalf_of: str
    optional_items: list
    origin_context: str
    payment_intent: Any
    payment_link: Any
    payment_method_collection: str
    payment_method_configuration_details: Any
    payment_method_options: Any
    permissions: Any
    prefetch: list
    recovered_from: str
    redirect_on_completion: str
    return_url: str
    saved_payment_method_options: Any
    setup_intent: Any
    shipping_address_collection: Any
    shipping_cost: Any
    status: str
    submit_type: str
    subscription: Any
    success_url: str
    total_details: int
    ui_mode: str
    url: str
    wallet_options: Any


class SettingRequired(TypedDict):
    defaults: dict
    livemode: bool
    object: str
    status: str
    status_details: dict


class Setting(SettingRequired, total=False):
    head_office: Any


class SettingLoadMatch(TypedDict, total=False):
    expand: list


class SettingCreateDataRequired(TypedDict):
    defaults: dict
    livemode: bool
    object: str
    status: str
    status_details: dict


class SettingCreateData(SettingCreateDataRequired, total=False):
    head_office: Any


class Settlement(TypedDict, total=False):
    id: str


class SettlementLoadMatchRequired(TypedDict):
    id: str


class SettlementLoadMatch(SettlementLoadMatchRequired, total=False):
    expand: list


class SettlementCreateData(TypedDict):
    id: str


class SetupAttemptRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    payment_method: Any
    payment_method_details: dict
    setup_intent: Any
    status: str
    usage: str


class SetupAttempt(SetupAttemptRequired, total=False):
    application: Any
    attach_to_self: bool
    customer: Any
    customer_account: str
    flow_directions: list
    on_behalf_of: Any
    setup_error: Any


class SetupAttemptListMatchRequired(TypedDict):
    setup_intent: str


class SetupAttemptListMatch(SetupAttemptListMatchRequired, total=False):
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class SetupIntentRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    payment_method_types: list
    status: str
    usage: str


class SetupIntent(SetupIntentRequired, total=False):
    allowed_payment_method_types: list
    application: Any
    attach_to_self: bool
    automatic_payment_methods: Any
    cancellation_reason: str
    client_secret: str
    customer: Any
    customer_account: str
    description: str
    excluded_payment_method_types: list
    flow_directions: list
    last_setup_error: Any
    latest_attempt: Any
    managed_payments: Any
    mandate: Any
    metadata: dict
    next_action: Any
    on_behalf_of: Any
    payment_method: Any
    payment_method_configuration_details: Any
    payment_method_options: Any
    single_use_mandate: Any


class SetupIntentLoadMatchRequired(TypedDict):
    id: str


class SetupIntentLoadMatch(SetupIntentLoadMatchRequired, total=False):
    client_secret: str
    expand: list


class SetupIntentListMatch(TypedDict, total=False):
    attach_to_self: bool
    created: Any
    customer: str
    customer_account: str
    ending_before: str
    expand: list
    limit: int
    payment_method: str
    starting_after: str


class SetupIntentCreateDataRequired(TypedDict):
    id: str
    created: int
    livemode: bool
    object: str
    payment_method_types: list
    status: str
    usage: str


class SetupIntentCreateData(SetupIntentCreateDataRequired, total=False):
    allowed_payment_method_types: list
    application: Any
    attach_to_self: bool
    automatic_payment_methods: Any
    cancellation_reason: str
    client_secret: str
    customer: Any
    customer_account: str
    description: str
    excluded_payment_method_types: list
    flow_directions: list
    last_setup_error: Any
    latest_attempt: Any
    managed_payments: Any
    mandate: Any
    metadata: dict
    next_action: Any
    on_behalf_of: Any
    payment_method: Any
    payment_method_configuration_details: Any
    payment_method_options: Any
    single_use_mandate: Any


class ShippingRateRequired(TypedDict):
    active: bool
    created: int
    fixed_amount: dict
    id: str
    livemode: bool
    metadata: dict
    object: str
    type: str


class ShippingRate(ShippingRateRequired, total=False):
    delivery_estimate: Any
    display_name: str
    tax_behavior: str
    tax_code: Any


class ShippingRateLoadMatchRequired(TypedDict):
    id: str


class ShippingRateLoadMatch(ShippingRateLoadMatchRequired, total=False):
    expand: list


class ShippingRateListMatch(TypedDict, total=False):
    active: bool
    created: Any
    currency: str
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class ShippingRateCreateDataRequired(TypedDict):
    id: str
    active: bool
    created: int
    fixed_amount: dict
    livemode: bool
    metadata: dict
    object: str
    type: str


class ShippingRateCreateData(ShippingRateCreateDataRequired, total=False):
    delivery_estimate: Any
    display_name: str
    tax_behavior: str
    tax_code: Any


class SigmaApiQuery(TypedDict):
    created: int
    id: str
    livemode: bool
    name: str
    object: str
    sql: str


class SigmaApiQueryCreateData(TypedDict):
    id: str
    created: int
    livemode: bool
    name: str
    object: str
    sql: str


class SourceRequired(TypedDict):
    client_secret: str
    code_verification: dict
    created: int
    data: list
    flow: str
    has_more: bool
    id: str
    livemode: bool
    object: str
    receiver: dict
    redirect: dict
    source_order: dict
    status: str
    type: str
    url: str


class Source(SourceRequired, total=False):
    ach_credit_transfer: dict
    ach_debit: dict
    acss_debit: dict
    alipay: dict
    allow_redisplay: bool
    amount: int
    au_becs_debit: dict
    bancontact: dict
    card: dict
    card_present: dict
    currency: str
    customer: str
    eps: dict
    giropay: dict
    ideal: dict
    klarna: dict
    metadata: dict
    multibanco: dict
    owner: Any
    p24: dict
    sepa_debit: dict
    sofort: dict
    statement_descriptor: str
    three_d_secure: dict
    usage: str
    wechat: dict


class SourceLoadMatchRequired(TypedDict):
    id: str


class SourceLoadMatch(SourceLoadMatchRequired, total=False):
    client_secret: str
    expand: list
    customer_id: str


class SourceListMatchRequired(TypedDict):
    customer_id: str


class SourceListMatch(SourceListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    object: str
    starting_after: str


class SourceCreateDataRequired(TypedDict):
    id: str
    client_secret: str
    code_verification: dict
    created: int
    data: list
    flow: str
    has_more: bool
    livemode: bool
    object: str
    receiver: dict
    redirect: dict
    source_order: dict
    status: str
    type: str
    url: str


class SourceCreateData(SourceCreateDataRequired, total=False):
    ach_credit_transfer: dict
    ach_debit: dict
    acss_debit: dict
    alipay: dict
    allow_redisplay: bool
    amount: int
    au_becs_debit: dict
    bancontact: dict
    card: dict
    card_present: dict
    currency: str
    customer: str
    eps: dict
    giropay: dict
    ideal: dict
    klarna: dict
    metadata: dict
    multibanco: dict
    owner: Any
    p24: dict
    sepa_debit: dict
    sofort: dict
    statement_descriptor: str
    three_d_secure: dict
    usage: str
    wechat: dict


class SourceRemoveMatch(TypedDict):
    customer_id: str
    id: str


class SourceMandateNotificationRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    reason: str
    source: dict
    status: str
    type: str


class SourceMandateNotification(SourceMandateNotificationRequired, total=False):
    acss_debit: dict
    amount: int
    bacs_debit: dict
    sepa_debit: dict


class SourceMandateNotificationLoadMatchRequired(TypedDict):
    id: str
    source_id: str


class SourceMandateNotificationLoadMatch(SourceMandateNotificationLoadMatchRequired, total=False):
    expand: list


class SourceTransactionRequired(TypedDict):
    amount: int
    created: int
    currency: str
    id: str
    livemode: bool
    object: str
    source: str
    status: str
    type: str


class SourceTransaction(SourceTransactionRequired, total=False):
    ach_credit_transfer: dict
    chf_credit_transfer: dict
    gbp_credit_transfer: dict
    paper_check: dict
    sepa_credit_transfer: dict


class SourceTransactionLoadMatchRequired(TypedDict):
    id: str
    source_id: str


class SourceTransactionLoadMatch(SourceTransactionLoadMatchRequired, total=False):
    expand: list


class SourceTransactionListMatchRequired(TypedDict):
    id: str


class SourceTransactionListMatch(SourceTransactionListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class SubscriptionRequired(TypedDict):
    automatic_tax: dict
    billing_cycle_anchor: int
    billing_mode: dict
    billing_schedules: list
    cancel_at_period_end: bool
    collection_method: str
    created: int
    currency: str
    customer: Any
    discounts: list
    id: str
    invoice_settings: dict
    items: dict
    livemode: bool
    metadata: dict
    object: str
    presentment_details: dict
    start_date: int
    status: str
    status_details: dict


class Subscription(SubscriptionRequired, total=False):
    application: Any
    application_fee_percent: float
    billing_cycle_anchor_config: Any
    billing_thresholds: Any
    cancel_at: int
    canceled_at: int
    cancellation_details: Any
    customer_account: str
    days_until_due: int
    default_payment_method: Any
    default_source: Any
    default_tax_rates: list
    description: str
    ended_at: int
    latest_invoice: Any
    managed_payments: Any
    next_pending_invoice_item_invoice: int
    on_behalf_of: Any
    pause_collection: Any
    payment_settings: Any
    pending_invoice_item_interval: Any
    pending_setup_intent: Any
    pending_update: Any
    schedule: Any
    test_clock: Any
    transfer_data: Any
    trial_end: int
    trial_settings: Any
    trial_start: int


class SubscriptionLoadMatchRequired(TypedDict):
    id: str


class SubscriptionLoadMatch(SubscriptionLoadMatchRequired, total=False):
    customer_id: str
    expand: list


class SubscriptionListMatch(TypedDict, total=False):
    automatic_tax: dict
    collection_method: str
    created: Any
    current_period_end: Any
    current_period_start: Any
    customer: str
    customer_account: str
    ending_before: str
    expand: list
    limit: int
    price: str
    starting_after: str
    status: str
    test_clock: str


class SubscriptionCreateDataRequired(TypedDict):
    id: str
    automatic_tax: dict
    billing_cycle_anchor: int
    billing_mode: dict
    billing_schedules: list
    cancel_at_period_end: bool
    collection_method: str
    created: int
    currency: str
    customer: Any
    discounts: list
    invoice_settings: dict
    items: dict
    livemode: bool
    metadata: dict
    object: str
    presentment_details: dict
    start_date: int
    status: str
    status_details: dict


class SubscriptionCreateData(SubscriptionCreateDataRequired, total=False):
    application: Any
    application_fee_percent: float
    billing_cycle_anchor_config: Any
    billing_thresholds: Any
    cancel_at: int
    canceled_at: int
    cancellation_details: Any
    customer_account: str
    days_until_due: int
    default_payment_method: Any
    default_source: Any
    default_tax_rates: list
    description: str
    ended_at: int
    latest_invoice: Any
    managed_payments: Any
    next_pending_invoice_item_invoice: int
    on_behalf_of: Any
    pause_collection: Any
    payment_settings: Any
    pending_invoice_item_interval: Any
    pending_setup_intent: Any
    pending_update: Any
    schedule: Any
    test_clock: Any
    transfer_data: Any
    trial_end: int
    trial_settings: Any
    trial_start: int


class SubscriptionRemoveMatchRequired(TypedDict):
    id: str


class SubscriptionRemoveMatch(SubscriptionRemoveMatchRequired, total=False):
    customer_id: str


class SubscriptionItemRequired(TypedDict):
    created: int
    current_period_end: int
    current_period_start: int
    discounts: list
    id: str
    metadata: dict
    object: str
    price: dict
    subscription: str


class SubscriptionItem(SubscriptionItemRequired, total=False):
    billed_until: int
    billing_thresholds: Any
    current_trial: Any
    quantity: int
    tax_rates: list


class SubscriptionItemLoadMatchRequired(TypedDict):
    id: str


class SubscriptionItemLoadMatch(SubscriptionItemLoadMatchRequired, total=False):
    expand: list


class SubscriptionItemListMatchRequired(TypedDict):
    subscription: str


class SubscriptionItemListMatch(SubscriptionItemListMatchRequired, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class SubscriptionItemCreateDataRequired(TypedDict):
    id: str
    created: int
    current_period_end: int
    current_period_start: int
    discounts: list
    metadata: dict
    object: str
    price: dict
    subscription: str


class SubscriptionItemCreateData(SubscriptionItemCreateDataRequired, total=False):
    billed_until: int
    billing_thresholds: Any
    current_trial: Any
    quantity: int
    tax_rates: list


class SubscriptionScheduleRequired(TypedDict):
    billing_mode: dict
    created: int
    customer: Any
    default_settings: dict
    end_behavior: str
    id: str
    livemode: bool
    object: str
    phases: list
    status: str


class SubscriptionSchedule(SubscriptionScheduleRequired, total=False):
    application: Any
    canceled_at: int
    completed_at: int
    current_phase: Any
    customer_account: str
    metadata: dict
    pause_schedules: list
    released_at: int
    released_subscription: str
    subscription: Any
    test_clock: Any


class SubscriptionScheduleLoadMatchRequired(TypedDict):
    id: str


class SubscriptionScheduleLoadMatch(SubscriptionScheduleLoadMatchRequired, total=False):
    expand: list


class SubscriptionScheduleListMatch(TypedDict, total=False):
    canceled_at: Any
    completed_at: Any
    created: Any
    customer: str
    customer_account: str
    ending_before: str
    expand: list
    limit: int
    released_at: Any
    scheduled: bool
    starting_after: str


class SubscriptionScheduleCreateDataRequired(TypedDict):
    id: str
    billing_mode: dict
    created: int
    customer: Any
    default_settings: dict
    end_behavior: str
    livemode: bool
    object: str
    phases: list
    status: str


class SubscriptionScheduleCreateData(SubscriptionScheduleCreateDataRequired, total=False):
    application: Any
    canceled_at: int
    completed_at: int
    current_phase: Any
    customer_account: str
    metadata: dict
    pause_schedules: list
    released_at: int
    released_subscription: str
    subscription: Any
    test_clock: Any


class Supplier(TypedDict):
    id: str
    info_url: str
    livemode: bool
    locations: list
    name: str
    object: str
    removal_pathway: str


class SupplierLoadMatchRequired(TypedDict):
    id: str


class SupplierLoadMatch(SupplierLoadMatchRequired, total=False):
    expand: list


class SupplierListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class TaxCodeRequired(TypedDict):
    description: str
    id: str
    name: str
    object: str


class TaxCode(TaxCodeRequired, total=False):
    requirements: Any


class TaxCodeLoadMatchRequired(TypedDict):
    id: str


class TaxCodeLoadMatch(TaxCodeLoadMatchRequired, total=False):
    expand: list


class TaxCodeListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class TaxIdRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    type: str
    value: str


class TaxId(TaxIdRequired, total=False):
    country: str
    customer: Any
    customer_account: str
    owner: Any
    verification: Any


class TaxIdLoadMatchRequired(TypedDict):
    id: str


class TaxIdLoadMatch(TaxIdLoadMatchRequired, total=False):
    customer_id: str
    expand: list


class TaxIdListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    owner: dict
    starting_after: str


class TaxIdCreateDataRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    object: str
    type: str
    value: str


class TaxIdCreateData(TaxIdCreateDataRequired, total=False):
    country: str
    customer: Any
    customer_account: str
    owner: Any
    verification: Any


class TaxIdRemoveMatchRequired(TypedDict):
    id: str


class TaxIdRemoveMatch(TaxIdRemoveMatchRequired, total=False):
    customer_id: str


class TaxRateRequired(TypedDict):
    active: bool
    created: int
    display_name: str
    id: str
    inclusive: bool
    livemode: bool
    object: str
    percentage: float


class TaxRate(TaxRateRequired, total=False):
    country: str
    description: str
    effective_percentage: float
    flat_amount: Any
    jurisdiction: str
    jurisdiction_level: str
    metadata: dict
    rate_type: str
    state: str
    tax_type: str


class TaxRateLoadMatchRequired(TypedDict):
    id: str


class TaxRateLoadMatch(TaxRateLoadMatchRequired, total=False):
    expand: list


class TaxRateListMatch(TypedDict, total=False):
    active: bool
    created: Any
    ending_before: str
    expand: list
    inclusive: bool
    limit: int
    starting_after: str


class TaxRateCreateDataRequired(TypedDict):
    id: str
    active: bool
    created: int
    display_name: str
    inclusive: bool
    livemode: bool
    object: str
    percentage: float


class TaxRateCreateData(TaxRateCreateDataRequired, total=False):
    country: str
    description: str
    effective_percentage: float
    flat_amount: Any
    jurisdiction: str
    jurisdiction_level: str
    metadata: dict
    rate_type: str
    state: str
    tax_type: str


class TestClockRequired(TypedDict):
    advancing: dict
    created: int
    deletes_after: int
    frozen_time: int
    id: str
    livemode: bool
    object: str
    status: str
    status_details: dict


class TestClock(TestClockRequired, total=False):
    name: str


class TestClockLoadMatchRequired(TypedDict):
    id: str


class TestClockLoadMatch(TestClockLoadMatchRequired, total=False):
    expand: list


class TestClockListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class TestClockCreateDataRequired(TypedDict):
    advancing: dict
    created: int
    deletes_after: int
    frozen_time: int
    id: str
    livemode: bool
    object: str
    status: str
    status_details: dict


class TestClockCreateData(TestClockCreateDataRequired, total=False):
    name: str


class TestClockRemoveMatch(TypedDict):
    id: str


class TokenRequired(TypedDict):
    bank_account: dict
    card: Any
    created: int
    id: str
    livemode: bool
    network: str
    network_data: dict
    network_updated_at: int
    object: str
    status: str
    type: str
    used: bool


class Token(TokenRequired, total=False):
    client_ip: str
    device_fingerprint: str
    last4: str
    wallet_provider: str


class TokenLoadMatchRequired(TypedDict):
    id: str


class TokenLoadMatch(TokenLoadMatchRequired, total=False):
    expand: list


class TokenListMatchRequired(TypedDict):
    card: str


class TokenListMatch(TokenListMatchRequired, total=False):
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class TokenCreateDataRequired(TypedDict):
    id: str
    bank_account: dict
    card: Any
    created: int
    livemode: bool
    network: str
    network_data: dict
    network_updated_at: int
    object: str
    status: str
    type: str
    used: bool


class TokenCreateData(TokenCreateDataRequired, total=False):
    client_ip: str
    device_fingerprint: str
    last4: str
    wallet_provider: str


class TopupRequired(TypedDict):
    amount: int
    created: int
    currency: str
    id: str
    livemode: bool
    metadata: dict
    object: str
    status: str


class Topup(TopupRequired, total=False):
    balance_transaction: Any
    description: str
    expected_availability_date: int
    failure_code: str
    failure_message: str
    initiated_by: str
    payment_method: Any
    payment_method_options: Any
    source: Any
    statement_descriptor: str
    transfer_group: str


class TopupLoadMatchRequired(TypedDict):
    id: str


class TopupLoadMatch(TopupLoadMatchRequired, total=False):
    expand: list


class TopupListMatch(TypedDict, total=False):
    amount: float
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    status: str


class TopupCreateDataRequired(TypedDict):
    id: str
    amount: int
    created: int
    currency: str
    livemode: bool
    metadata: dict
    object: str
    status: str


class TopupCreateData(TopupCreateDataRequired, total=False):
    balance_transaction: Any
    description: str
    expected_availability_date: int
    failure_code: str
    failure_message: str
    initiated_by: str
    payment_method: Any
    payment_method_options: Any
    source: Any
    statement_descriptor: str
    transfer_group: str


class TransactionRequired(TypedDict):
    account: str
    amount: int
    balance_impact: dict
    card: Any
    created: int
    currency: str
    customer_details: dict
    description: str
    entries: dict
    financial_account: str
    flow_type: str
    id: str
    line_items: dict
    livemode: bool
    merchant_amount: int
    merchant_currency: str
    merchant_data: dict
    metadata: dict
    object: str
    reference: str
    status: str
    status_transitions: dict
    tax_date: int
    transacted_at: int
    transaction_refresh: str
    type: str
    updated: int


class Transaction(TransactionRequired, total=False):
    amount_details: Any
    authorization: Any
    balance_transaction: Any
    cardholder: Any
    customer: str
    dispute: Any
    flow: str
    flow_details: Any
    network_data: Any
    posted_at: int
    purchase_details: Any
    reversal: Any
    ship_from_details: Any
    shipping_cost: Any
    token: str
    treasury: Any
    void_at: int
    wallet: str


class TransactionLoadMatchRequired(TypedDict):
    id: str


class TransactionLoadMatch(TransactionLoadMatchRequired, total=False):
    expand: list


class TransactionListMatchRequired(TypedDict):
    financial_account: str


class TransactionListMatch(TransactionListMatchRequired, total=False):
    created: Any
    ending_before: str
    expand: list
    limit: int
    order_by: str
    starting_after: str
    status: str
    status_transition: dict


class TransactionCreateDataRequired(TypedDict):
    id: str
    account: str
    amount: int
    balance_impact: dict
    card: Any
    created: int
    currency: str
    customer_details: dict
    description: str
    entries: dict
    financial_account: str
    flow_type: str
    line_items: dict
    livemode: bool
    merchant_amount: int
    merchant_currency: str
    merchant_data: dict
    metadata: dict
    object: str
    reference: str
    status: str
    status_transitions: dict
    tax_date: int
    transacted_at: int
    transaction_refresh: str
    type: str
    updated: int


class TransactionCreateData(TransactionCreateDataRequired, total=False):
    amount_details: Any
    authorization: Any
    balance_transaction: Any
    cardholder: Any
    customer: str
    dispute: Any
    flow: str
    flow_details: Any
    network_data: Any
    posted_at: int
    purchase_details: Any
    reversal: Any
    ship_from_details: Any
    shipping_cost: Any
    token: str
    treasury: Any
    void_at: int
    wallet: str


class TransactionEntryRequired(TypedDict):
    balance_impact: dict
    created: int
    currency: str
    effective_at: int
    financial_account: str
    flow_type: str
    id: str
    livemode: bool
    object: str
    transaction: Any
    type: str


class TransactionEntry(TransactionEntryRequired, total=False):
    flow: str
    flow_details: Any


class TransactionEntryLoadMatchRequired(TypedDict):
    id: str


class TransactionEntryLoadMatch(TransactionEntryLoadMatchRequired, total=False):
    expand: list


class TransactionEntryListMatchRequired(TypedDict):
    financial_account: str


class TransactionEntryListMatch(TransactionEntryListMatchRequired, total=False):
    created: Any
    effective_at: Any
    ending_before: str
    expand: list
    limit: int
    order_by: str
    starting_after: str
    transaction: str


class TransferRequired(TypedDict):
    amount: int
    amount_reversed: int
    created: int
    currency: str
    id: str
    livemode: bool
    metadata: dict
    object: str
    reversals: dict
    reversed: bool


class Transfer(TransferRequired, total=False):
    balance_transaction: Any
    description: str
    destination: Any
    destination_payment: Any
    source_transaction: Any
    source_type: str
    transfer_group: str


class TransferLoadMatchRequired(TypedDict):
    id: str


class TransferLoadMatch(TransferLoadMatchRequired, total=False):
    expand: list


class TransferListMatch(TypedDict, total=False):
    created: Any
    destination: str
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    transfer_group: str


class TransferCreateDataRequired(TypedDict):
    id: str
    amount: int
    amount_reversed: int
    created: int
    currency: str
    livemode: bool
    metadata: dict
    object: str
    reversals: dict
    reversed: bool


class TransferCreateData(TransferCreateDataRequired, total=False):
    balance_transaction: Any
    description: str
    destination: Any
    destination_payment: Any
    source_transaction: Any
    source_type: str
    transfer_group: str


class TrialOfferRequired(TypedDict):
    active: bool
    duration: dict
    end_behavior: dict
    id: str
    livemode: bool
    object: str
    price: float


class TrialOffer(TrialOfferRequired, total=False):
    nickname: str


class TrialOfferLoadMatchRequired(TypedDict):
    id: str


class TrialOfferLoadMatch(TrialOfferLoadMatchRequired, total=False):
    expand: list


class TrialOfferListMatch(TypedDict, total=False):
    active: bool
    created: Any
    ending_before: str
    expand: list
    limit: int
    price: list
    starting_after: str


class TrialOfferCreateDataRequired(TypedDict):
    id: str
    active: bool
    duration: dict
    end_behavior: dict
    livemode: bool
    object: str
    price: float


class TrialOfferCreateData(TrialOfferCreateDataRequired, total=False):
    nickname: str


class ValueList(TypedDict):
    alias: str
    created: int
    created_by: str
    id: str
    item_type: str
    list_items: dict
    livemode: bool
    metadata: dict
    name: str
    object: str


class ValueListLoadMatchRequired(TypedDict):
    id: str


class ValueListLoadMatch(ValueListLoadMatchRequired, total=False):
    expand: list


class ValueListListMatch(TypedDict, total=False):
    alia: str
    contain: str
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class ValueListCreateData(TypedDict):
    id: str
    alias: str
    created: int
    created_by: str
    item_type: str
    list_items: dict
    livemode: bool
    metadata: dict
    name: str
    object: str


class ValueListRemoveMatch(TypedDict):
    id: str


class ValueListItem(TypedDict):
    created: int
    created_by: str
    id: str
    livemode: bool
    object: str
    value: str
    value_list: str


class ValueListItemLoadMatchRequired(TypedDict):
    id: str


class ValueListItemLoadMatch(ValueListItemLoadMatchRequired, total=False):
    expand: list


class ValueListItemListMatchRequired(TypedDict):
    value_list: str


class ValueListItemListMatch(ValueListItemListMatchRequired, total=False):
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    value: str


class ValueListItemCreateData(TypedDict):
    created: int
    created_by: str
    id: str
    livemode: bool
    object: str
    value: str
    value_list: str


class ValueListItemRemoveMatch(TypedDict):
    id: str


class VerificationReportRequired(TypedDict):
    created: int
    document: dict
    email: dict
    id: str
    id_number: dict
    livemode: bool
    object: str
    phone: dict
    selfie: dict
    type: str


class VerificationReport(VerificationReportRequired, total=False):
    client_reference_id: str
    options: dict
    verification_flow: str
    verification_session: str


class VerificationReportLoadMatchRequired(TypedDict):
    id: str


class VerificationReportLoadMatch(VerificationReportLoadMatchRequired, total=False):
    expand: list


class VerificationReportListMatch(TypedDict, total=False):
    client_reference_id: str
    created: Any
    ending_before: str
    expand: list
    limit: int
    starting_after: str
    type: str
    verification_session: str


class VerificationSessionRequired(TypedDict):
    created: int
    id: str
    livemode: bool
    metadata: dict
    object: str
    related_person: dict
    status: str
    type: str


class VerificationSession(VerificationSessionRequired, total=False):
    client_reference_id: str
    client_secret: str
    last_error: Any
    last_verification_report: Any
    options: Any
    provided_details: Any
    redaction: Any
    related_customer: str
    related_customer_account: str
    url: str
    verification_flow: str
    verified_outputs: Any


class VerificationSessionLoadMatchRequired(TypedDict):
    id: str


class VerificationSessionLoadMatch(VerificationSessionLoadMatchRequired, total=False):
    expand: list


class VerificationSessionListMatch(TypedDict, total=False):
    client_reference_id: str
    created: Any
    ending_before: str
    expand: list
    limit: int
    related_customer: str
    related_customer_account: str
    starting_after: str
    status: str


class VerificationSessionCreateDataRequired(TypedDict):
    id: str
    created: int
    livemode: bool
    metadata: dict
    object: str
    related_person: dict
    status: str
    type: str


class VerificationSessionCreateData(VerificationSessionCreateDataRequired, total=False):
    client_reference_id: str
    client_secret: str
    last_error: Any
    last_verification_report: Any
    options: Any
    provided_details: Any
    redaction: Any
    related_customer: str
    related_customer_account: str
    url: str
    verification_flow: str
    verified_outputs: Any


class WebhookEndpointRequired(TypedDict):
    created: int
    enabled_events: list
    id: str
    livemode: bool
    metadata: dict
    object: str
    status: str
    url: str


class WebhookEndpoint(WebhookEndpointRequired, total=False):
    api_version: str
    application: str
    description: str
    secret: str


class WebhookEndpointLoadMatchRequired(TypedDict):
    id: str


class WebhookEndpointLoadMatch(WebhookEndpointLoadMatchRequired, total=False):
    expand: list


class WebhookEndpointListMatch(TypedDict, total=False):
    ending_before: str
    expand: list
    limit: int
    starting_after: str


class WebhookEndpointCreateDataRequired(TypedDict):
    id: str
    created: int
    enabled_events: list
    livemode: bool
    metadata: dict
    object: str
    status: str
    url: str


class WebhookEndpointCreateData(WebhookEndpointCreateDataRequired, total=False):
    api_version: str
    application: str
    description: str
    secret: str
