export interface Account {
    account_holder?: any;
    account_numbers?: any[];
    balance?: any;
    balance_refresh?: any;
    business_profile?: any;
    business_type?: string;
    capabilities?: Record<string, any>;
    category: string;
    charges_enabled?: boolean;
    company?: Record<string, any>;
    controller: Record<string, any>;
    country?: string;
    created: number;
    default_currency?: string;
    details_submitted?: boolean;
    display_name?: string;
    email?: string;
    external_accounts: Record<string, any>;
    future_requirements?: Record<string, any>;
    groups?: any;
    id: string;
    individual: Record<string, any>;
    institution_name: string;
    last4?: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    ownership?: any;
    ownership_refresh?: any;
    payouts_enabled?: boolean;
    permissions?: any[];
    requirements?: Record<string, any>;
    settings?: any;
    status: string;
    status_details?: Record<string, any>;
    subcategory: string;
    subscriptions?: any[];
    supported_payment_method_types: any[];
    tos_acceptance?: Record<string, any>;
    transaction_refresh?: any;
    type?: string;
}
export interface AccountLoadMatch {
    account: string;
    expand?: any[];
}
export interface AccountListMatch {
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface AccountCreateData {
    id: string;
    account_holder?: any;
    account_numbers?: any[];
    balance?: any;
    balance_refresh?: any;
    business_profile?: any;
    business_type?: string;
    capabilities?: Record<string, any>;
    category: string;
    charges_enabled?: boolean;
    company?: Record<string, any>;
    controller: Record<string, any>;
    country?: string;
    created: number;
    default_currency?: string;
    details_submitted?: boolean;
    display_name?: string;
    email?: string;
    external_accounts: Record<string, any>;
    future_requirements?: Record<string, any>;
    groups?: any;
    individual: Record<string, any>;
    institution_name: string;
    last4?: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    ownership?: any;
    ownership_refresh?: any;
    payouts_enabled?: boolean;
    permissions?: any[];
    requirements?: Record<string, any>;
    settings?: any;
    status: string;
    status_details?: Record<string, any>;
    subcategory: string;
    subscriptions?: any[];
    supported_payment_method_types: any[];
    tos_acceptance?: Record<string, any>;
    transaction_refresh?: any;
    type?: string;
    $action?: string;
    [action: string]: any;
}
export interface AccountLink {
    created: number;
    expires_at: number;
    object: string;
    url: string;
}
export interface AccountLinkCreateData {
    created: number;
    expires_at: number;
    object: string;
    url: string;
}
export interface AccountOwner {
    email?: string;
    id: string;
    name: string;
    object: string;
    ownership: string;
    phone?: string;
    raw_address?: string;
    refreshed_at?: number;
}
export interface AccountOwnerListMatch {
    id: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    ownership: string;
    starting_after?: string;
}
export interface AccountSession {
    account_management: Record<string, any>;
    account_onboarding: Record<string, any>;
    balance_report: Record<string, any>;
    balances: Record<string, any>;
    disputes_list: Record<string, any>;
    documents: Record<string, any>;
    financial_account: Record<string, any>;
    financial_account_transactions: Record<string, any>;
    instant_payouts_promotion: Record<string, any>;
    issuing_card: Record<string, any>;
    issuing_cards_list: Record<string, any>;
    notification_banner: Record<string, any>;
    payment_details: Record<string, any>;
    payment_disputes: Record<string, any>;
    payment_method_settings: Record<string, any>;
    payments: Record<string, any>;
    payout_details: Record<string, any>;
    payout_reconciliation_report: Record<string, any>;
    payouts: Record<string, any>;
    payouts_list: Record<string, any>;
    tax_registrations: Record<string, any>;
    tax_settings: Record<string, any>;
}
export interface AccountSessionCreateData {
    account_management: Record<string, any>;
    account_onboarding: Record<string, any>;
    balance_report: Record<string, any>;
    balances: Record<string, any>;
    disputes_list: Record<string, any>;
    documents: Record<string, any>;
    financial_account: Record<string, any>;
    financial_account_transactions: Record<string, any>;
    instant_payouts_promotion: Record<string, any>;
    issuing_card: Record<string, any>;
    issuing_cards_list: Record<string, any>;
    notification_banner: Record<string, any>;
    payment_details: Record<string, any>;
    payment_disputes: Record<string, any>;
    payment_method_settings: Record<string, any>;
    payments: Record<string, any>;
    payout_details: Record<string, any>;
    payout_reconciliation_report: Record<string, any>;
    payouts: Record<string, any>;
    payouts_list: Record<string, any>;
    tax_registrations: Record<string, any>;
    tax_settings: Record<string, any>;
}
export interface ActiveEntitlement {
    feature: any;
    id: string;
    livemode: boolean;
    lookup_key: string;
    object: string;
}
export interface ActiveEntitlementLoadMatch {
    id: string;
    expand?: any[];
}
export interface ActiveEntitlementListMatch {
    customer: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface Alert {
    alert_type: string;
    id: string;
    livemode: boolean;
    object: string;
    status?: string;
    title: string;
    usage_threshold?: any;
}
export interface AlertLoadMatch {
    id: string;
    expand?: any[];
}
export interface AlertListMatch {
    alert_type?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    meter?: string;
    starting_after?: string;
}
export interface AlertCreateData {
    alert_type: string;
    id: string;
    livemode: boolean;
    object: string;
    status?: string;
    title: string;
    usage_threshold?: any;
    $action?: string;
    [action: string]: any;
}
export interface ApplePayDomain {
    created: number;
    domain_name: string;
    id: string;
    livemode: boolean;
    object: string;
}
export interface ApplePayDomainLoadMatch {
    id: string;
    expand?: any[];
}
export interface ApplePayDomainCreateData {
    created: number;
    domain_name: string;
    id: string;
    livemode: boolean;
    object: string;
}
export interface ApplicationFee {
    account: any;
    amount: number;
    amount_refunded: number;
    application: any;
    balance_transaction?: any;
    charge: any;
    created: number;
    currency: string;
    fee_source?: any;
    id: string;
    livemode: boolean;
    object: string;
    originating_transaction?: any;
    refunded: boolean;
    refunds: Record<string, any>;
}
export interface ApplicationFeeLoadMatch {
    id: string;
    expand?: any[];
}
export interface ApplicationFeeListMatch {
    charge?: string;
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface ApplicationFeeCreateData {
    id: string;
    account: any;
    amount: number;
    amount_refunded: number;
    application: any;
    balance_transaction?: any;
    charge: any;
    created: number;
    currency: string;
    fee_source?: any;
    livemode: boolean;
    object: string;
    originating_transaction?: any;
    refunded: boolean;
    refunds: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface Association {
}
export interface AssociationListMatch {
    expand?: any[];
    payment_intent: string;
    $action?: string;
    [action: string]: any;
}
export interface Authentication {
    acquirer_details?: Record<string, any>;
    amount?: number;
    challenge_url?: string;
    channel: Record<string, any>;
    created: number;
    currency?: string;
    directory_server: string;
    fingerprinting_url?: string;
    flow_preference: Record<string, any>;
    future_usage: Record<string, any>;
    id: string;
    livemode: boolean;
    message_category: string;
    metadata?: Record<string, any>;
    object: string;
    outcome?: string;
    outcome_details: Record<string, any>;
    payment_method: any;
    reason?: string;
    shipping_address?: Record<string, any>;
    status: string;
}
export interface AuthenticationLoadMatch {
    id: string;
    expand?: any[];
}
export interface AuthenticationListMatch {
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface AuthenticationCreateData {
    acquirer_details?: Record<string, any>;
    amount?: number;
    challenge_url?: string;
    channel: Record<string, any>;
    created: number;
    currency?: string;
    directory_server: string;
    fingerprinting_url?: string;
    flow_preference: Record<string, any>;
    future_usage: Record<string, any>;
    id: string;
    livemode: boolean;
    message_category: string;
    metadata?: Record<string, any>;
    object: string;
    outcome?: string;
    outcome_details: Record<string, any>;
    payment_method: any;
    reason?: string;
    shipping_address?: Record<string, any>;
    status: string;
    $action?: string;
    [action: string]: any;
}
export interface Authorization {
    amount: number;
    amount_details?: any;
    approved: boolean;
    authorization_method: string;
    balance_transactions: any[];
    card: Record<string, any>;
    card_presence?: string;
    cardholder?: any;
    created: number;
    currency: string;
    fleet?: any;
    fraud_challenges?: any[];
    fuel?: any;
    id: string;
    livemode: boolean;
    merchant_amount: number;
    merchant_currency: string;
    merchant_data: Record<string, any>;
    metadata: Record<string, any>;
    network_data?: any;
    object: string;
    pending_request?: any;
    request_history: any[];
    status: string;
    token?: string;
    transactions: any[];
    treasury?: any;
    verification_data: Record<string, any>;
    verified_by_fraud_challenge?: boolean;
    wallet?: string;
}
export interface AuthorizationLoadMatch {
    id: string;
    expand?: any[];
}
export interface AuthorizationListMatch {
    card?: string;
    cardholder?: string;
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface AuthorizationCreateData {
    id: string;
    amount: number;
    amount_details?: any;
    approved: boolean;
    authorization_method: string;
    balance_transactions: any[];
    card: Record<string, any>;
    card_presence?: string;
    cardholder?: any;
    created: number;
    currency: string;
    fleet?: any;
    fraud_challenges?: any[];
    fuel?: any;
    livemode: boolean;
    merchant_amount: number;
    merchant_currency: string;
    merchant_data: Record<string, any>;
    metadata: Record<string, any>;
    network_data?: any;
    object: string;
    pending_request?: any;
    request_history: any[];
    status: string;
    token?: string;
    transactions: any[];
    treasury?: any;
    verification_data: Record<string, any>;
    verified_by_fraud_challenge?: boolean;
    wallet?: string;
    $action?: string;
    [action: string]: any;
}
export interface Balance {
    available: any[];
    connect_reserved?: any[];
    instant_available?: any[];
    issuing: Record<string, any>;
    livemode: boolean;
    object: string;
    pending: any[];
    refund_and_dispute_prefunding: Record<string, any>;
}
export interface BalanceListMatch {
    expand?: any[];
}
export interface BalanceSetting {
    debit_negative_balances?: boolean;
    payouts?: any;
    settlement_timing: Record<string, any>;
}
export interface BalanceSettingLoadMatch {
    expand?: any[];
}
export interface BalanceSettingCreateData {
    debit_negative_balances?: boolean;
    payouts?: any;
    settlement_timing: Record<string, any>;
}
export interface BalanceTransaction {
    amount: number;
    available_on: number;
    balance_type: string;
    checkout_session?: any;
    created: number;
    credit_note?: any;
    currency: string;
    customer: any;
    customer_account?: string;
    description?: string;
    ending_balance: number;
    exchange_rate?: number;
    fee: number;
    fee_details: any[];
    id: string;
    invoice?: any;
    livemode: boolean;
    metadata?: Record<string, any>;
    net: number;
    object: string;
    reporting_category: string;
    source?: any;
    status: string;
    type: string;
}
export interface BalanceTransactionLoadMatch {
    id: string;
    expand?: any[];
}
export interface BalanceTransactionListMatch {
    created?: any;
    currency?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    payout?: string;
    source?: string;
    starting_after?: string;
    type?: string;
}
export interface BankAccount {
    account?: any;
    account_holder_name?: string;
    account_holder_type?: string;
    account_type?: string;
    available_payout_methods?: any[];
    bank_name?: string;
    country: string;
    currency: string;
    customer?: any;
    default_for_currency?: boolean;
    fingerprint?: string;
    future_requirements?: any;
    id: string;
    last4: string;
    metadata?: Record<string, any>;
    object: string;
    requirements?: any;
    routing_number?: string;
    status: string;
}
export interface BankAccountLoadMatch {
    customer_id: string;
    id: string;
    expand?: any[];
}
export interface BankAccountListMatch {
    customer_id: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface BankAccountCreateData {
    customer_id: string;
    id?: string;
    source_id?: string;
    account?: any;
    account_holder_name?: string;
    account_holder_type?: string;
    account_type?: string;
    available_payout_methods?: any[];
    bank_name?: string;
    country: string;
    currency: string;
    customer?: any;
    default_for_currency?: boolean;
    fingerprint?: string;
    future_requirements?: any;
    last4: string;
    metadata?: Record<string, any>;
    object: string;
    requirements?: any;
    routing_number?: string;
    status: string;
    $action?: string;
    [action: string]: any;
}
export interface BankAccountRemoveMatch {
    customer_id: string;
    id: string;
}
export interface Calculation {
    amount_total: number;
    currency: string;
    customer?: string;
    customer_details: Record<string, any>;
    expires_at?: number;
    id?: string;
    line_items: Record<string, any>;
    livemode: boolean;
    object: string;
    ship_from_details?: any;
    shipping_cost?: any;
    tax_amount_exclusive: number;
    tax_amount_inclusive: number;
    tax_breakdown: any[];
    tax_date: number;
}
export interface CalculationLoadMatch {
    id: string;
    expand?: any[];
}
export interface CalculationCreateData {
    amount_total: number;
    currency: string;
    customer?: string;
    customer_details: Record<string, any>;
    expires_at?: number;
    id?: string;
    line_items: Record<string, any>;
    livemode: boolean;
    object: string;
    ship_from_details?: any;
    shipping_cost?: any;
    tax_amount_exclusive: number;
    tax_amount_inclusive: number;
    tax_breakdown: any[];
    tax_date: number;
}
export interface Capability {
    account: any;
    future_requirements: Record<string, any>;
    id: string;
    object: string;
    requested: boolean;
    requested_at?: number;
    requirements: Record<string, any>;
    status: string;
}
export interface CapabilityLoadMatch {
    account_id: string;
    id: string;
    expand?: any[];
}
export interface CapabilityListMatch {
    account_id: string;
    expand?: any[];
}
export interface CapabilityCreateData {
    account_id: string;
    id: string;
    account: any;
    future_requirements: Record<string, any>;
    object: string;
    requested: boolean;
    requested_at?: number;
    requirements: Record<string, any>;
    status: string;
}
export interface Card {
    account?: any;
    address_city?: string;
    address_country?: string;
    address_line1?: string;
    address_line1_check?: string;
    address_line2?: string;
    address_state?: string;
    address_zip?: string;
    address_zip_check?: string;
    allow_redisplay?: boolean;
    available_payout_methods?: any[];
    brand: string;
    cancellation_reason?: string;
    cardholder: Record<string, any>;
    country?: string;
    created: number;
    currency?: string;
    customer?: any;
    cvc?: string;
    cvc_check?: string;
    default_for_currency?: boolean;
    dynamic_last4?: string;
    exp_month: number;
    exp_year: number;
    financial_account?: string;
    fingerprint?: string;
    funding: string;
    id: string;
    last4: string;
    latest_fraud_warning?: any;
    lifecycle_controls?: any;
    livemode: boolean;
    metadata?: Record<string, any>;
    name?: string;
    networks?: Record<string, any>;
    number?: string;
    object: string;
    personalization_design?: any;
    regulated_status?: string;
    replaced_by?: any;
    replacement_for?: any;
    replacement_reason?: string;
    second_line?: string;
    shipping?: any;
    spending_controls: Record<string, any>;
    status?: string;
    tokenization_method?: string;
    type: string;
    wallets?: any;
}
export interface CardLoadMatch {
    customer_id?: string;
    id: string;
    expand?: any[];
}
export interface CardListMatch {
    cardholder?: string;
    created?: any;
    ending_before?: string;
    exp_month?: number;
    exp_year?: number;
    expand?: any[];
    last4?: string;
    limit?: number;
    personalization_design?: string;
    starting_after?: string;
    status?: string;
    type?: string;
}
export interface CardCreateData {
    id: string;
    account?: any;
    address_city?: string;
    address_country?: string;
    address_line1?: string;
    address_line1_check?: string;
    address_line2?: string;
    address_state?: string;
    address_zip?: string;
    address_zip_check?: string;
    allow_redisplay?: boolean;
    available_payout_methods?: any[];
    brand: string;
    cancellation_reason?: string;
    cardholder: Record<string, any>;
    country?: string;
    created: number;
    currency?: string;
    customer?: any;
    cvc?: string;
    cvc_check?: string;
    default_for_currency?: boolean;
    dynamic_last4?: string;
    exp_month: number;
    exp_year: number;
    financial_account?: string;
    fingerprint?: string;
    funding: string;
    last4: string;
    latest_fraud_warning?: any;
    lifecycle_controls?: any;
    livemode: boolean;
    metadata?: Record<string, any>;
    name?: string;
    networks?: Record<string, any>;
    number?: string;
    object: string;
    personalization_design?: any;
    regulated_status?: string;
    replaced_by?: any;
    replacement_for?: any;
    replacement_reason?: string;
    second_line?: string;
    shipping?: any;
    spending_controls: Record<string, any>;
    status?: string;
    tokenization_method?: string;
    type: string;
    wallets?: any;
}
export interface CardRemoveMatch {
    customer_id: string;
    id: string;
}
export interface Cardholder {
    billing: Record<string, any>;
    company?: any;
    created: number;
    email?: string;
    id: string;
    individual?: any;
    livemode: boolean;
    metadata: Record<string, any>;
    name: string;
    object: string;
    phone_number?: string;
    preferred_locales?: any[];
    requirements: Record<string, any>;
    spending_controls?: any;
    status: string;
    type: string;
}
export interface CardholderLoadMatch {
    id: string;
    expand?: any[];
}
export interface CardholderListMatch {
    created?: any;
    email?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    phone_number?: string;
    starting_after?: string;
    status?: string;
    type?: string;
}
export interface CardholderCreateData {
    id: string;
    billing: Record<string, any>;
    company?: any;
    created: number;
    email?: string;
    individual?: any;
    livemode: boolean;
    metadata: Record<string, any>;
    name: string;
    object: string;
    phone_number?: string;
    preferred_locales?: any[];
    requirements: Record<string, any>;
    spending_controls?: any;
    status: string;
    type: string;
}
export interface CashBalance {
    available?: Record<string, any>;
    customer: string;
    customer_account?: string;
    livemode: boolean;
    object: string;
    settings: Record<string, any>;
}
export interface CashBalanceLoadMatch {
    customer_id: string;
    expand?: any[];
}
export interface CashBalanceCreateData {
    customer_id: string;
    available?: Record<string, any>;
    customer: string;
    customer_account?: string;
    livemode: boolean;
    object: string;
    settings: Record<string, any>;
}
export interface CashBalanceTransaction {
    adjusted_for_overdraft: Record<string, any>;
    applied_to_payment: Record<string, any>;
    created: number;
    currency: string;
    customer: any;
    customer_account?: string;
    ending_balance: number;
    funded: Record<string, any>;
    id: string;
    livemode: boolean;
    net_amount: number;
    object: string;
    refunded_from_payment: Record<string, any>;
    transferred_to_balance: Record<string, any>;
    type: string;
    unapplied_from_payment: Record<string, any>;
}
export interface CashBalanceTransactionLoadMatch {
    customer_id: string;
    id: string;
    expand?: any[];
}
export interface CashBalanceTransactionListMatch {
    customer_id: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface Charge {
    amount: number;
    amount_captured: number;
    amount_refunded: number;
    application?: any;
    application_fee?: any;
    application_fee_amount?: number;
    balance_transaction?: any;
    billing_details: Record<string, any>;
    calculated_statement_descriptor?: string;
    captured: boolean;
    created: number;
    currency: string;
    customer?: any;
    description?: string;
    disputed: boolean;
    failure_balance_transaction?: any;
    failure_code?: string;
    failure_message?: string;
    fraud_details?: any;
    id: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    on_behalf_of?: any;
    outcome?: any;
    paid: boolean;
    payment_intent?: any;
    payment_method?: string;
    payment_method_details?: any;
    presentment_details: Record<string, any>;
    radar_options?: Record<string, any>;
    receipt_email?: string;
    receipt_number?: string;
    receipt_url?: string;
    refunded: boolean;
    refunds: Record<string, any>;
    review?: any;
    shipping?: any;
    source_transfer?: any;
    statement_descriptor?: string;
    statement_descriptor_suffix?: string;
    status: string;
    transfer?: any;
    transfer_data?: any;
    transfer_group?: string;
}
export interface ChargeLoadMatch {
    id: string;
    expand?: any[];
}
export interface ChargeListMatch {
    created?: any;
    customer?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    payment_intent?: string;
    starting_after?: string;
    transfer_group?: string;
}
export interface ChargeCreateData {
    id: string;
    amount: number;
    amount_captured: number;
    amount_refunded: number;
    application?: any;
    application_fee?: any;
    application_fee_amount?: number;
    balance_transaction?: any;
    billing_details: Record<string, any>;
    calculated_statement_descriptor?: string;
    captured: boolean;
    created: number;
    currency: string;
    customer?: any;
    description?: string;
    disputed: boolean;
    failure_balance_transaction?: any;
    failure_code?: string;
    failure_message?: string;
    fraud_details?: any;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    on_behalf_of?: any;
    outcome?: any;
    paid: boolean;
    payment_intent?: any;
    payment_method?: string;
    payment_method_details?: any;
    presentment_details: Record<string, any>;
    radar_options?: Record<string, any>;
    receipt_email?: string;
    receipt_number?: string;
    receipt_url?: string;
    refunded: boolean;
    refunds: Record<string, any>;
    review?: any;
    shipping?: any;
    source_transfer?: any;
    statement_descriptor?: string;
    statement_descriptor_suffix?: string;
    status: string;
    transfer?: any;
    transfer_data?: any;
    transfer_group?: string;
    $action?: string;
    [action: string]: any;
}
export interface Configuration {
    active: boolean;
    application?: any;
    bbpos_wisepad3?: Record<string, any>;
    bbpos_wisepos_e?: Record<string, any>;
    business_profile: Record<string, any>;
    cellular: Record<string, any>;
    created: number;
    default_return_url?: string;
    features: Record<string, any>;
    id: string;
    is_account_default?: boolean;
    is_default: boolean;
    livemode: boolean;
    login_page: Record<string, any>;
    metadata?: Record<string, any>;
    name?: string;
    object: string;
    offline?: Record<string, any>;
    reboot_window: Record<string, any>;
    stripe_s700?: Record<string, any>;
    stripe_s710?: Record<string, any>;
    tipping?: Record<string, any>;
    updated: number;
    verifone_m425?: Record<string, any>;
    verifone_p400?: Record<string, any>;
    verifone_p630?: Record<string, any>;
    verifone_ux700?: Record<string, any>;
    verifone_v660p?: Record<string, any>;
    wifi: Record<string, any>;
}
export interface ConfigurationLoadMatch {
    id: string;
    expand?: any[];
}
export interface ConfigurationListMatch {
    active?: boolean;
    ending_before?: string;
    expand?: any[];
    is_default?: boolean;
    limit?: number;
    starting_after?: string;
}
export interface ConfigurationCreateData {
    id: string;
    active: boolean;
    application?: any;
    bbpos_wisepad3?: Record<string, any>;
    bbpos_wisepos_e?: Record<string, any>;
    business_profile: Record<string, any>;
    cellular: Record<string, any>;
    created: number;
    default_return_url?: string;
    features: Record<string, any>;
    is_account_default?: boolean;
    is_default: boolean;
    livemode: boolean;
    login_page: Record<string, any>;
    metadata?: Record<string, any>;
    name?: string;
    object: string;
    offline?: Record<string, any>;
    reboot_window: Record<string, any>;
    stripe_s700?: Record<string, any>;
    stripe_s710?: Record<string, any>;
    tipping?: Record<string, any>;
    updated: number;
    verifone_m425?: Record<string, any>;
    verifone_p400?: Record<string, any>;
    verifone_p630?: Record<string, any>;
    verifone_ux700?: Record<string, any>;
    verifone_v660p?: Record<string, any>;
    wifi: Record<string, any>;
}
export interface ConfigurationRemoveMatch {
    id: string;
}
export interface ConfirmationToken {
    created: number;
    expires_at?: number;
    id: string;
    livemode: boolean;
    mandate_data?: any;
    metadata?: Record<string, any>;
    object: string;
    payment_intent?: string;
    payment_method_options?: any;
    payment_method_preview?: any;
    return_url?: string;
    setup_future_usage?: string;
    setup_intent?: string;
    shipping?: any;
    use_stripe_sdk: boolean;
}
export interface ConfirmationTokenLoadMatch {
    id: string;
    expand?: any[];
}
export interface ConfirmationTokenCreateData {
    created: number;
    expires_at?: number;
    id: string;
    livemode: boolean;
    mandate_data?: any;
    metadata?: Record<string, any>;
    object: string;
    payment_intent?: string;
    payment_method_options?: any;
    payment_method_preview?: any;
    return_url?: string;
    setup_future_usage?: string;
    setup_intent?: string;
    shipping?: any;
    use_stripe_sdk: boolean;
}
export interface ConnectionToken {
    location?: string;
    object: string;
    secret: string;
}
export interface ConnectionTokenCreateData {
    location?: string;
    object: string;
    secret: string;
}
export interface CountrySpec {
    default_currency: string;
    id: string;
    object: string;
    supported_bank_account_currencies: Record<string, any>;
    supported_payment_currencies: any[];
    supported_payment_methods: any[];
    supported_transfer_countries: any[];
    verification_fields: Record<string, any>;
}
export interface CountrySpecLoadMatch {
    id: string;
    expand?: any[];
}
export interface CountrySpecListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface Coupon {
    amount_off?: number;
    applies_to: Record<string, any>;
    created: number;
    currency?: string;
    currency_options?: Record<string, any>;
    duration: string;
    duration_in_months?: number;
    id: string;
    livemode: boolean;
    max_redemptions?: number;
    metadata?: Record<string, any>;
    name?: string;
    object: string;
    percent_off?: number;
    redeem_by?: number;
    times_redeemed: number;
    valid: boolean;
}
export interface CouponLoadMatch {
    id: string;
    expand?: any[];
}
export interface CouponListMatch {
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface CouponCreateData {
    id: string;
    amount_off?: number;
    applies_to: Record<string, any>;
    created: number;
    currency?: string;
    currency_options?: Record<string, any>;
    duration: string;
    duration_in_months?: number;
    livemode: boolean;
    max_redemptions?: number;
    metadata?: Record<string, any>;
    name?: string;
    object: string;
    percent_off?: number;
    redeem_by?: number;
    times_redeemed: number;
    valid: boolean;
}
export interface CreditBalanceSummary {
    available_balance: Record<string, any>;
    ledger_balance: Record<string, any>;
}
export interface CreditBalanceSummaryListMatch {
    customer?: string;
    customer_account?: string;
    expand?: any[];
    filter: Record<string, any>;
}
export interface CreditBalanceTransaction {
    created: number;
    credit?: any;
    credit_grant: any;
    debit?: any;
    effective_at: number;
    id: string;
    livemode: boolean;
    object: string;
    test_clock?: any;
    type?: string;
}
export interface CreditBalanceTransactionLoadMatch {
    id: string;
    expand?: any[];
}
export interface CreditBalanceTransactionListMatch {
    credit_grant?: string;
    customer?: string;
    customer_account?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface CreditGrant {
    amount: Record<string, any>;
    applicability_config: Record<string, any>;
    category: string;
    created: number;
    customer: any;
    customer_account?: string;
    effective_at?: number;
    expires_at?: number;
    id: string;
    livemode: boolean;
    metadata: Record<string, any>;
    name?: string;
    object: string;
    priority?: number;
    test_clock?: any;
    updated: number;
    voided_at?: number;
}
export interface CreditGrantLoadMatch {
    id: string;
    expand?: any[];
}
export interface CreditGrantListMatch {
    customer?: string;
    customer_account?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface CreditGrantCreateData {
    id: string;
    amount: Record<string, any>;
    applicability_config: Record<string, any>;
    category: string;
    created: number;
    customer: any;
    customer_account?: string;
    effective_at?: number;
    expires_at?: number;
    livemode: boolean;
    metadata: Record<string, any>;
    name?: string;
    object: string;
    priority?: number;
    test_clock?: any;
    updated: number;
    voided_at?: number;
    $action?: string;
    [action: string]: any;
}
export interface CreditNote {
    amount: number;
    amount_shipping: number;
    created: number;
    currency: string;
    customer: any;
    customer_account?: string;
    customer_balance_transaction?: any;
    discount_amount: number;
    discount_amounts: any[];
    effective_at?: number;
    id: string;
    invoice: any;
    lines: Record<string, any>;
    livemode: boolean;
    memo?: string;
    metadata?: Record<string, any>;
    number: string;
    object: string;
    out_of_band_amount?: number;
    pdf: string;
    post_payment_amount: number;
    pre_payment_amount: number;
    pretax_credit_amounts: any[];
    reason?: string;
    refunds: any[];
    shipping_cost?: any;
    status: string;
    subtotal: number;
    subtotal_excluding_tax?: number;
    total: number;
    total_excluding_tax?: number;
    total_taxes?: any[];
    type: string;
    voided_at?: number;
}
export interface CreditNoteLoadMatch {
    id: string;
    expand?: any[];
}
export interface CreditNoteListMatch {
    created?: any;
    customer?: string;
    customer_account?: string;
    ending_before?: string;
    expand?: any[];
    invoice?: string;
    limit?: number;
    starting_after?: string;
    $action?: string;
    [action: string]: any;
}
export interface CreditNoteCreateData {
    id: string;
    amount: number;
    amount_shipping: number;
    created: number;
    currency: string;
    customer: any;
    customer_account?: string;
    customer_balance_transaction?: any;
    discount_amount: number;
    discount_amounts: any[];
    effective_at?: number;
    invoice: any;
    lines: Record<string, any>;
    livemode: boolean;
    memo?: string;
    metadata?: Record<string, any>;
    number: string;
    object: string;
    out_of_band_amount?: number;
    pdf: string;
    post_payment_amount: number;
    pre_payment_amount: number;
    pretax_credit_amounts: any[];
    reason?: string;
    refunds: any[];
    shipping_cost?: any;
    status: string;
    subtotal: number;
    subtotal_excluding_tax?: number;
    total: number;
    total_excluding_tax?: number;
    total_taxes?: any[];
    type: string;
    voided_at?: number;
    $action?: string;
    [action: string]: any;
}
export interface CreditNoteLine {
    amount: number;
    description?: string;
    discount_amount: number;
    discount_amounts: any[];
    id: string;
    invoice_line_item?: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    pretax_credit_amounts: any[];
    quantity?: number;
    tax_rates: any[];
    taxes?: any[];
    type: string;
    unit_amount?: number;
    unit_amount_decimal?: string;
}
export interface CreditNoteLineListMatch {
    id: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface CreditReversal {
    amount: number;
    created: number;
    currency: string;
    financial_account: string;
    hosted_regulatory_receipt_url?: string;
    id: string;
    livemode: boolean;
    metadata: Record<string, any>;
    network: string;
    object: string;
    received_credit: string;
    status: string;
    status_transitions: Record<string, any>;
    transaction?: any;
}
export interface CreditReversalLoadMatch {
    id: string;
    expand?: any[];
}
export interface CreditReversalListMatch {
    ending_before?: string;
    expand?: any[];
    financial_account: string;
    limit?: number;
    received_credit?: string;
    starting_after?: string;
    status?: string;
}
export interface CreditReversalCreateData {
    amount: number;
    created: number;
    currency: string;
    financial_account: string;
    hosted_regulatory_receipt_url?: string;
    id: string;
    livemode: boolean;
    metadata: Record<string, any>;
    network: string;
    object: string;
    received_credit: string;
    status: string;
    status_transitions: Record<string, any>;
    transaction?: any;
}
export interface Customer {
    address?: any;
    balance?: number;
    business_name?: string;
    cash_balance?: any;
    created: number;
    currency?: string;
    customer_account?: string;
    default_source?: any;
    delinquent?: boolean;
    description?: string;
    discount?: any;
    email?: string;
    id: string;
    individual_name?: string;
    invoice_credit_balance?: Record<string, any>;
    invoice_prefix?: string;
    invoice_settings?: Record<string, any>;
    livemode: boolean;
    metadata?: Record<string, any>;
    name?: string;
    next_invoice_sequence?: number;
    object: string;
    phone?: string;
    preferred_locales?: any[];
    shipping?: any;
    sources: Record<string, any>;
    subscriptions: Record<string, any>;
    tax: Record<string, any>;
    tax_exempt?: string;
    tax_ids: Record<string, any>;
    test_clock?: any;
}
export interface CustomerLoadMatch {
    id: string;
    expand?: any[];
}
export interface CustomerListMatch {
    created?: any;
    email?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    test_clock?: string;
}
export interface CustomerCreateData {
    id: string;
    address?: any;
    balance?: number;
    business_name?: string;
    cash_balance?: any;
    created: number;
    currency?: string;
    customer_account?: string;
    default_source?: any;
    delinquent?: boolean;
    description?: string;
    discount?: any;
    email?: string;
    individual_name?: string;
    invoice_credit_balance?: Record<string, any>;
    invoice_prefix?: string;
    invoice_settings?: Record<string, any>;
    livemode: boolean;
    metadata?: Record<string, any>;
    name?: string;
    next_invoice_sequence?: number;
    object: string;
    phone?: string;
    preferred_locales?: any[];
    shipping?: any;
    sources: Record<string, any>;
    subscriptions: Record<string, any>;
    tax: Record<string, any>;
    tax_exempt?: string;
    tax_ids: Record<string, any>;
    test_clock?: any;
}
export interface CustomerRemoveMatch {
    id: string;
}
export interface CustomerBalanceTransaction {
    amount: number;
    checkout_session?: any;
    created: number;
    credit_note?: any;
    currency: string;
    customer: any;
    customer_account?: string;
    description?: string;
    ending_balance: number;
    id: string;
    invoice?: any;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    type: string;
}
export interface CustomerBalanceTransactionLoadMatch {
    customer_id: string;
    id: string;
    expand?: any[];
}
export interface CustomerBalanceTransactionCreateData {
    customer_id?: string;
    id: string;
    amount: number;
    checkout_session?: any;
    created: number;
    credit_note?: any;
    currency: string;
    customer: any;
    customer_account?: string;
    description?: string;
    ending_balance: number;
    invoice?: any;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    type: string;
}
export interface CustomerSession {
    client_secret: string;
    components: Record<string, any>;
    created: number;
    customer: any;
    customer_account?: string;
    expires_at: number;
    livemode: boolean;
    object: string;
}
export interface CustomerSessionCreateData {
    client_secret: string;
    components: Record<string, any>;
    created: number;
    customer: any;
    customer_account?: string;
    expires_at: number;
    livemode: boolean;
    object: string;
}
export interface DebitReversal {
    amount: number;
    created: number;
    currency: string;
    financial_account?: string;
    hosted_regulatory_receipt_url?: string;
    id: string;
    linked_flows?: any;
    livemode: boolean;
    metadata: Record<string, any>;
    network: string;
    object: string;
    received_debit: string;
    status: string;
    status_transitions: Record<string, any>;
    transaction?: any;
}
export interface DebitReversalLoadMatch {
    id: string;
    expand?: any[];
}
export interface DebitReversalListMatch {
    ending_before?: string;
    expand?: any[];
    financial_account: string;
    limit?: number;
    received_debit?: string;
    resolution?: string;
    starting_after?: string;
    status?: string;
}
export interface DebitReversalCreateData {
    amount: number;
    created: number;
    currency: string;
    financial_account?: string;
    hosted_regulatory_receipt_url?: string;
    id: string;
    linked_flows?: any;
    livemode: boolean;
    metadata: Record<string, any>;
    network: string;
    object: string;
    received_debit: string;
    status: string;
    status_transitions: Record<string, any>;
    transaction?: any;
}
export interface DeletedAccount {
    id?: string;
}
export interface DeletedAccountRemoveMatch {
    id: string;
}
export interface DeletedApplePayDomain {
    id?: string;
}
export interface DeletedApplePayDomainRemoveMatch {
    id: string;
}
export interface DeletedCoupon {
    id?: string;
}
export interface DeletedCouponRemoveMatch {
    id: string;
}
export interface DeletedExternalAccount {
    id?: string;
}
export interface DeletedExternalAccountRemoveMatch {
    account_id: string;
    id: string;
}
export interface DeletedInvoiceitem {
    id?: string;
}
export interface DeletedInvoiceitemRemoveMatch {
    id: string;
}
export interface DeletedPerson {
    id?: string;
}
export interface DeletedPersonRemoveMatch {
    account_id: string;
    id: string;
}
export interface DeletedPlan {
    id?: string;
}
export interface DeletedPlanRemoveMatch {
    id: string;
}
export interface DeletedProductFeature {
    id?: string;
}
export interface DeletedProductFeatureRemoveMatch {
    id: string;
    product_id: string;
}
export interface DeletedSubscriptionItem {
    id?: string;
}
export interface DeletedSubscriptionItemRemoveMatch {
    id: string;
}
export interface DeletedWebhookEndpoint {
    id?: string;
}
export interface DeletedWebhookEndpointRemoveMatch {
    id: string;
}
export interface Discount {
    checkout_session?: string;
    customer?: any;
    customer_account?: string;
    end?: number;
    id: string;
    invoice?: string;
    invoice_item?: string;
    object: string;
    promotion_code?: any;
    source: Record<string, any>;
    start: number;
    subscription?: string;
    subscription_item?: string;
}
export interface DiscountLoadMatch {
    customer_id: string;
    subscription_id?: string;
    expand?: any[];
}
export interface DiscountRemoveMatch {
    customer_id: string;
}
export interface Dispute {
    amount: number;
    balance_transactions: any[];
    charge: any;
    created: number;
    currency: string;
    enhanced_eligibility_types: any[];
    evidence: Record<string, any>;
    evidence_details: Record<string, any>;
    id: string;
    is_charge_refundable: boolean;
    livemode: boolean;
    loss_reason?: string;
    metadata: Record<string, any>;
    object: string;
    payment_intent?: any;
    payment_method_details: Record<string, any>;
    reason: string;
    status: string;
    transaction: any;
    treasury?: any;
}
export interface DisputeLoadMatch {
    id: string;
    expand?: any[];
}
export interface DisputeListMatch {
    charge?: string;
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    payment_intent?: string;
    starting_after?: string;
}
export interface DisputeCreateData {
    id: string;
    amount: number;
    balance_transactions: any[];
    charge: any;
    created: number;
    currency: string;
    enhanced_eligibility_types: any[];
    evidence: Record<string, any>;
    evidence_details: Record<string, any>;
    is_charge_refundable: boolean;
    livemode: boolean;
    loss_reason?: string;
    metadata: Record<string, any>;
    object: string;
    payment_intent?: any;
    payment_method_details: Record<string, any>;
    reason: string;
    status: string;
    transaction: any;
    treasury?: any;
    $action?: string;
    [action: string]: any;
}
export interface Domain {
    created: number;
    domain_name: string;
    id: string;
    livemode: boolean;
    object: string;
}
export interface DomainListMatch {
    domain_name?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface EarlyFraudWarning {
    actionable: boolean;
    charge: any;
    created: number;
    fraud_type: string;
    id: string;
    livemode: boolean;
    object: string;
    payment_intent?: any;
}
export interface EarlyFraudWarningLoadMatch {
    id: string;
    expand?: any[];
}
export interface EarlyFraudWarningListMatch {
    charge?: string;
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    payment_intent?: string;
    starting_after?: string;
}
export interface EphemeralKey {
    created: number;
    expires: number;
    id: string;
    livemode: boolean;
    object: string;
    secret?: string;
}
export interface EphemeralKeyCreateData {
    created: number;
    expires: number;
    id: string;
    livemode: boolean;
    object: string;
    secret?: string;
}
export interface EphemeralKeyRemoveMatch {
    id: string;
}
export interface Event {
    account?: string;
    api_version?: string;
    context?: string;
    created: number;
    data: Record<string, any>;
    id: string;
    livemode: boolean;
    object: string;
    pending_webhooks: number;
    request?: any;
    type: string;
}
export interface EventLoadMatch {
    id: string;
    expand?: any[];
}
export interface EventListMatch {
    created?: any;
    delivery_success?: boolean;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    type?: string;
}
export interface ExchangeRate {
    id: string;
    object: string;
    rates: Record<string, any>;
}
export interface ExchangeRateLoadMatch {
    id: string;
    expand?: any[];
}
export interface ExchangeRateListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface ExternalAccount {
    data: any[];
    has_more: boolean;
    id?: string;
    object: string;
    url: string;
}
export interface ExternalAccountLoadMatch {
    account_id: string;
    id: string;
    expand?: any[];
}
export interface ExternalAccountListMatch {
    account_id: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    object?: string;
    starting_after?: string;
}
export interface ExternalAccountCreateData {
    id: string;
    data: any[];
    has_more: boolean;
    object: string;
    url: string;
}
export interface Feature {
    active: boolean;
    entitlement_feature: Record<string, any>;
    id: string;
    livemode: boolean;
    lookup_key: string;
    metadata: Record<string, any>;
    name: string;
    object: string;
}
export interface FeatureLoadMatch {
    id: string;
    expand?: any[];
}
export interface FeatureListMatch {
    archived?: boolean;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    lookup_key?: string;
    starting_after?: string;
}
export interface FeatureCreateData {
    id: string;
    active: boolean;
    entitlement_feature: Record<string, any>;
    livemode: boolean;
    lookup_key: string;
    metadata: Record<string, any>;
    name: string;
    object: string;
}
export interface FeedbackOption {
    deactivated_at?: number;
    description: string;
    id: string;
    livemode: boolean;
    object: string;
    status: string;
    status_transitions: Record<string, any>;
}
export interface FeedbackOptionLoadMatch {
    id: string;
    expand?: any[];
}
export interface FeedbackOptionListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface FeedbackOptionCreateData {
    id: string;
    deactivated_at?: number;
    description: string;
    livemode: boolean;
    object: string;
    status: string;
    status_transitions: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface File {
    created: number;
    data: any[];
    expires_at?: number;
    filename?: string;
    has_more: boolean;
    id: string;
    links: Record<string, any>;
    object: string;
    purpose: string;
    size: number;
    title?: string;
    type?: string;
    url: string;
}
export interface FileLoadMatch {
    id: string;
    expand?: any[];
}
export interface FileListMatch {
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    purpose?: string;
    starting_after?: string;
}
export interface FileCreateData {
    created: number;
    data: any[];
    expires_at?: number;
    filename?: string;
    has_more: boolean;
    id: string;
    links: Record<string, any>;
    object: string;
    purpose: string;
    size: number;
    title?: string;
    type?: string;
    url: string;
}
export interface FileLink {
    created: number;
    expired: boolean;
    expires_at?: number;
    file: any;
    id: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    url?: string;
}
export interface FileLinkLoadMatch {
    id: string;
    expand?: any[];
}
export interface FileLinkListMatch {
    created?: any;
    ending_before?: string;
    expand?: any[];
    expired?: boolean;
    file?: string;
    limit?: number;
    starting_after?: string;
}
export interface FileLinkCreateData {
    id: string;
    created: number;
    expired: boolean;
    expires_at?: number;
    file: any;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    url?: string;
}
export interface FinancialAccount {
    active_features?: any[];
    balance: Record<string, any>;
    country: string;
    created: number;
    features: Record<string, any>;
    financial_addresses: any[];
    id: string;
    is_default?: boolean;
    livemode: boolean;
    metadata?: Record<string, any>;
    nickname?: string;
    object: string;
    pending_features?: any[];
    platform_restrictions?: any;
    restricted_features?: any[];
    status: string;
    status_details: Record<string, any>;
    supported_currencies: any[];
}
export interface FinancialAccountLoadMatch {
    id: string;
    expand?: any[];
}
export interface FinancialAccountListMatch {
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface FinancialAccountCreateData {
    id: string;
    active_features?: any[];
    balance: Record<string, any>;
    country: string;
    created: number;
    features: Record<string, any>;
    financial_addresses: any[];
    is_default?: boolean;
    livemode: boolean;
    metadata?: Record<string, any>;
    nickname?: string;
    object: string;
    pending_features?: any[];
    platform_restrictions?: any;
    restricted_features?: any[];
    status: string;
    status_details: Record<string, any>;
    supported_currencies: any[];
    $action?: string;
    [action: string]: any;
}
export interface FinancialAccountFeature {
    card_issuing: Record<string, any>;
    deposit_insurance: Record<string, any>;
    financial_addresses?: Record<string, any>;
    id?: string;
    inbound_transfers?: Record<string, any>;
    intra_stripe_flows: Record<string, any>;
    object: string;
    outbound_payments?: Record<string, any>;
    outbound_transfers?: Record<string, any>;
}
export interface FinancialAccountFeatureLoadMatch {
    id: string;
    expand?: any[];
}
export interface FinancialAccountFeatureCreateData {
    id: string;
    card_issuing: Record<string, any>;
    deposit_insurance: Record<string, any>;
    financial_addresses?: Record<string, any>;
    inbound_transfers?: Record<string, any>;
    intra_stripe_flows: Record<string, any>;
    object: string;
    outbound_payments?: Record<string, any>;
    outbound_transfers?: Record<string, any>;
}
export interface FundCashBalance {
    adjusted_for_overdraft: Record<string, any>;
    applied_to_payment: Record<string, any>;
    created: number;
    currency: string;
    customer: any;
    customer_account?: string;
    ending_balance: number;
    funded: Record<string, any>;
    id: string;
    livemode: boolean;
    net_amount: number;
    object: string;
    refunded_from_payment: Record<string, any>;
    transferred_to_balance: Record<string, any>;
    type: string;
    unapplied_from_payment: Record<string, any>;
}
export interface FundCashBalanceCreateData {
    customer_id: string;
    adjusted_for_overdraft: Record<string, any>;
    applied_to_payment: Record<string, any>;
    created: number;
    currency: string;
    customer: any;
    customer_account?: string;
    ending_balance: number;
    funded: Record<string, any>;
    id: string;
    livemode: boolean;
    net_amount: number;
    object: string;
    refunded_from_payment: Record<string, any>;
    transferred_to_balance: Record<string, any>;
    type: string;
    unapplied_from_payment: Record<string, any>;
}
export interface FundingInstruction {
    country: string;
    financial_addresses: any[];
    type: string;
}
export interface FundingInstructionCreateData {
    customer_id: string;
    country: string;
    financial_addresses: any[];
    type: string;
}
export interface History {
    amount: number;
    available_on: number;
    balance_type: string;
    created: number;
    currency: string;
    description?: string;
    exchange_rate?: number;
    fee: number;
    fee_details: any[];
    id: string;
    net: number;
    object: string;
    reporting_category: string;
    source?: any;
    status: string;
    type: string;
}
export interface HistoryListMatch {
    created?: any;
    currency?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    payout?: string;
    source?: string;
    starting_after?: string;
    type?: string;
}
export interface InboundTransfer {
    amount: number;
    cancelable: boolean;
    created: number;
    currency: string;
    description?: string;
    failure_details?: any;
    financial_account: string;
    hosted_regulatory_receipt_url?: string;
    id: string;
    linked_flows: Record<string, any>;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    origin_payment_method?: string;
    origin_payment_method_details?: any;
    returned?: boolean;
    statement_descriptor: string;
    status: string;
    status_transitions: Record<string, any>;
    transaction?: any;
}
export interface InboundTransferLoadMatch {
    id: string;
    expand?: any[];
}
export interface InboundTransferListMatch {
    ending_before?: string;
    expand?: any[];
    financial_account: string;
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface InboundTransferCreateData {
    amount: number;
    cancelable: boolean;
    created: number;
    currency: string;
    description?: string;
    failure_details?: any;
    financial_account: string;
    hosted_regulatory_receipt_url?: string;
    id: string;
    linked_flows: Record<string, any>;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    origin_payment_method?: string;
    origin_payment_method_details?: any;
    returned?: boolean;
    statement_descriptor: string;
    status: string;
    status_transitions: Record<string, any>;
    transaction?: any;
    $action?: string;
    [action: string]: any;
}
export interface Install {
    account: string;
    app: string;
    approval_required: boolean;
    auth_code?: string;
    channel: string;
    content_security_policy_granted: Record<string, any>;
    content_security_policy_pending: Record<string, any>;
    created: number;
    created_by?: string;
    endpoints_granted: any[];
    endpoints_pending: any[];
    id: string;
    livemode: boolean;
    object: string;
    permissions_granted: any[];
    permissions_pending: any[];
    status: string;
}
export interface InstallLoadMatch {
    id: string;
    expand?: any[];
}
export interface InstallListMatch {
    account?: string;
    app?: string;
    approval_required?: boolean;
    channel?: string;
    created?: any;
    created_by?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface InstallCreateData {
    id: string;
    account: string;
    app: string;
    approval_required: boolean;
    auth_code?: string;
    channel: string;
    content_security_policy_granted: Record<string, any>;
    content_security_policy_pending: Record<string, any>;
    created: number;
    created_by?: string;
    endpoints_granted: any[];
    endpoints_pending: any[];
    livemode: boolean;
    object: string;
    permissions_granted: any[];
    permissions_pending: any[];
    status: string;
    $action?: string;
    [action: string]: any;
}
export interface Invoice {
    account_country?: string;
    account_name?: string;
    account_tax_ids?: any[];
    amount_due: number;
    amount_overpaid: number;
    amount_paid: number;
    amount_paid_off_stripe: number;
    amount_remaining: number;
    amount_shipping: number;
    application?: any;
    attempt_count: number;
    attempted: boolean;
    auto_advance: boolean;
    automatic_tax: Record<string, any>;
    automatically_finalizes_at?: number;
    billing_reason?: string;
    collection_method: string;
    confirmation_secret?: any;
    created: number;
    currency: string;
    custom_fields?: any[];
    customer: any;
    customer_account?: string;
    customer_address?: any;
    customer_email?: string;
    customer_name?: string;
    customer_phone?: string;
    customer_shipping?: any;
    customer_tax_exempt?: string;
    customer_tax_ids?: any[];
    default_payment_method?: any;
    default_source?: any;
    default_tax_rates: any[];
    description?: string;
    discounts: any[];
    due_date?: number;
    effective_at?: number;
    ending_balance?: number;
    footer?: string;
    from_invoice?: any;
    hosted_invoice_url?: string;
    id: string;
    invoice_pdf?: string;
    issuer: Record<string, any>;
    last_finalization_error?: any;
    latest_revision?: any;
    lines: Record<string, any>;
    livemode: boolean;
    metadata?: Record<string, any>;
    next_payment_attempt?: number;
    number?: string;
    object: string;
    on_behalf_of?: any;
    parent?: any;
    payment_settings: Record<string, any>;
    payments: Record<string, any>;
    period_end: number;
    period_start: number;
    post_payment_credit_notes_amount: number;
    pre_payment_credit_notes_amount: number;
    receipt_number?: string;
    rendering?: any;
    shipping_cost?: any;
    shipping_details?: any;
    starting_balance: number;
    statement_descriptor?: string;
    status?: string;
    status_details?: Record<string, any>;
    status_transitions: Record<string, any>;
    subtotal: number;
    subtotal_excluding_tax?: number;
    test_clock?: any;
    threshold_reason: Record<string, any>;
    total: number;
    total_discount_amounts?: any[];
    total_excluding_tax?: number;
    total_pretax_credit_amounts?: any[];
    total_taxes?: any[];
    webhooks_delivered_at?: number;
}
export interface InvoiceLoadMatch {
    id: string;
    expand?: any[];
}
export interface InvoiceListMatch {
    collection_method?: string;
    created?: any;
    customer?: string;
    customer_account?: string;
    due_date?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
    subscription?: string;
}
export interface InvoiceCreateData {
    id: string;
    account_country?: string;
    account_name?: string;
    account_tax_ids?: any[];
    amount_due: number;
    amount_overpaid: number;
    amount_paid: number;
    amount_paid_off_stripe: number;
    amount_remaining: number;
    amount_shipping: number;
    application?: any;
    attempt_count: number;
    attempted: boolean;
    auto_advance: boolean;
    automatic_tax: Record<string, any>;
    automatically_finalizes_at?: number;
    billing_reason?: string;
    collection_method: string;
    confirmation_secret?: any;
    created: number;
    currency: string;
    custom_fields?: any[];
    customer: any;
    customer_account?: string;
    customer_address?: any;
    customer_email?: string;
    customer_name?: string;
    customer_phone?: string;
    customer_shipping?: any;
    customer_tax_exempt?: string;
    customer_tax_ids?: any[];
    default_payment_method?: any;
    default_source?: any;
    default_tax_rates: any[];
    description?: string;
    discounts: any[];
    due_date?: number;
    effective_at?: number;
    ending_balance?: number;
    footer?: string;
    from_invoice?: any;
    hosted_invoice_url?: string;
    invoice_pdf?: string;
    issuer: Record<string, any>;
    last_finalization_error?: any;
    latest_revision?: any;
    lines: Record<string, any>;
    livemode: boolean;
    metadata?: Record<string, any>;
    next_payment_attempt?: number;
    number?: string;
    object: string;
    on_behalf_of?: any;
    parent?: any;
    payment_settings: Record<string, any>;
    payments: Record<string, any>;
    period_end: number;
    period_start: number;
    post_payment_credit_notes_amount: number;
    pre_payment_credit_notes_amount: number;
    receipt_number?: string;
    rendering?: any;
    shipping_cost?: any;
    shipping_details?: any;
    starting_balance: number;
    statement_descriptor?: string;
    status?: string;
    status_details?: Record<string, any>;
    status_transitions: Record<string, any>;
    subtotal: number;
    subtotal_excluding_tax?: number;
    test_clock?: any;
    threshold_reason: Record<string, any>;
    total: number;
    total_discount_amounts?: any[];
    total_excluding_tax?: number;
    total_pretax_credit_amounts?: any[];
    total_taxes?: any[];
    webhooks_delivered_at?: number;
    $action?: string;
    [action: string]: any;
}
export interface InvoiceRemoveMatch {
    id: string;
}
export interface InvoicePayment {
    amount_paid?: number;
    amount_requested: number;
    created: number;
    currency: string;
    id: string;
    invoice: any;
    is_default: boolean;
    livemode: boolean;
    object: string;
    payment: Record<string, any>;
    status: string;
    status_transitions: Record<string, any>;
}
export interface InvoicePaymentLoadMatch {
    id: string;
    expand?: any[];
}
export interface InvoicePaymentListMatch {
    created?: any;
    ending_before?: string;
    expand?: any[];
    invoice?: string;
    limit?: number;
    payment?: Record<string, any>;
    starting_after?: string;
    status?: string;
}
export interface InvoiceRenderingTemplate {
    created: number;
    id: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    nickname?: string;
    object: string;
    status: string;
    version: number;
}
export interface InvoiceRenderingTemplateLoadMatch {
    id: string;
    expand?: any[];
    version?: number;
}
export interface InvoiceRenderingTemplateListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface InvoiceRenderingTemplateCreateData {
    template: string;
    created: number;
    id: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    nickname?: string;
    object: string;
    status: string;
    version: number;
    $action?: string;
    [action: string]: any;
}
export interface Invoiceitem {
    amount: number;
    currency: string;
    customer: any;
    customer_account?: string;
    date: number;
    description?: string;
    discountable: boolean;
    discounts?: any[];
    frozen_fields?: any[];
    id: string;
    invoice?: any;
    invoicing_rules?: any[];
    livemode: boolean;
    metadata?: Record<string, any>;
    net_amount?: number;
    object: string;
    parent?: any;
    period: Record<string, any>;
    pricing?: any;
    proration: boolean;
    proration_details: Record<string, any>;
    quantity: number;
    quantity_decimal: string;
    tax_rates?: any[];
    test_clock?: any;
}
export interface InvoiceitemLoadMatch {
    id: string;
    expand?: any[];
}
export interface InvoiceitemListMatch {
    created?: any;
    customer?: string;
    customer_account?: string;
    ending_before?: string;
    expand?: any[];
    invoice?: string;
    limit?: number;
    pending?: boolean;
    starting_after?: string;
}
export interface InvoiceitemCreateData {
    id: string;
    amount: number;
    currency: string;
    customer: any;
    customer_account?: string;
    date: number;
    description?: string;
    discountable: boolean;
    discounts?: any[];
    frozen_fields?: any[];
    invoice?: any;
    invoicing_rules?: any[];
    livemode: boolean;
    metadata?: Record<string, any>;
    net_amount?: number;
    object: string;
    parent?: any;
    period: Record<string, any>;
    pricing?: any;
    proration: boolean;
    proration_details: Record<string, any>;
    quantity: number;
    quantity_decimal: string;
    tax_rates?: any[];
    test_clock?: any;
}
export interface Line {
    amount: number;
    currency: string;
    description?: string;
    discount_amount: number;
    discount_amounts?: any[];
    discountable: boolean;
    discounts: any[];
    id: string;
    invoice?: string;
    invoice_line_item?: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    parent?: any;
    period: Record<string, any>;
    pretax_credit_amounts?: any[];
    pricing?: any;
    quantity?: number;
    quantity_decimal?: string;
    subscription?: any;
    subtotal: number;
    tax_rates: any[];
    taxes?: any[];
    type: string;
    unit_amount?: number;
    unit_amount_decimal?: string;
}
export interface LineListMatch {
    amount?: number;
    credit_amount?: number;
    effective_at?: number;
    email_type?: string;
    ending_before?: string;
    expand?: any[];
    invoice: string;
    limit?: number;
    line?: any[];
    memo?: string;
    metadata?: Record<string, any>;
    out_of_band_amount?: number;
    reason?: string;
    refund?: any[];
    refund_amount?: number;
    shipping_cost?: Record<string, any>;
    starting_after?: string;
}
export interface LineCreateData {
    id: string;
    invoice_id: string;
    amount: number;
    currency: string;
    description?: string;
    discount_amount: number;
    discount_amounts?: any[];
    discountable: boolean;
    discounts: any[];
    invoice?: string;
    invoice_line_item?: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    parent?: any;
    period: Record<string, any>;
    pretax_credit_amounts?: any[];
    pricing?: any;
    quantity?: number;
    quantity_decimal?: string;
    subscription?: any;
    subtotal: number;
    tax_rates: any[];
    taxes?: any[];
    type: string;
    unit_amount?: number;
    unit_amount_decimal?: string;
}
export interface LineItem {
    adjustable_quantity?: any;
    amount: number;
    amount_discount: number;
    amount_subtotal: number;
    amount_tax: number;
    amount_total: number;
    currency: string;
    description?: string;
    discounts?: any[];
    id: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    performance_location?: string;
    price?: number;
    product?: string;
    quantity: number;
    reference: string;
    reversal?: any;
    tax_behavior: string;
    tax_breakdown?: any[];
    tax_code: string;
    taxes?: any[];
    type: string;
}
export interface LineItemListMatch {
    payment_link_id: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface LinkedAccount {
    account_holder?: any;
    account_numbers?: any[];
    balance?: any;
    balance_refresh?: any;
    category: string;
    created: number;
    display_name?: string;
    id: string;
    institution_name: string;
    last4?: string;
    livemode: boolean;
    object: string;
    ownership?: any;
    ownership_refresh?: any;
    permissions?: any[];
    status: string;
    status_details?: Record<string, any>;
    subcategory: string;
    subscriptions?: any[];
    supported_payment_method_types: any[];
    transaction_refresh?: any;
}
export interface LinkedAccountListMatch {
    account_holder?: Record<string, any>;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    session?: string;
    starting_after?: string;
}
export interface LinkedAccountOwner {
    email?: string;
    id: string;
    name: string;
    object: string;
    ownership: string;
    phone?: string;
    raw_address?: string;
    refreshed_at?: number;
}
export interface LinkedAccountOwnerListMatch {
    account: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    ownership: string;
    starting_after?: string;
}
export interface Location {
    address: Record<string, any>;
    address_kana?: Record<string, any>;
    address_kanji?: Record<string, any>;
    city?: string;
    configuration_overrides?: string;
    country?: string;
    description?: string;
    display_name: string;
    display_name_kana?: string;
    display_name_kanji?: string;
    id: string;
    line1?: string;
    line2?: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    phone?: string;
    postal_code?: string;
    state?: string;
    type: string;
}
export interface LocationLoadMatch {
    id: string;
    expand?: any[];
}
export interface LocationListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    type: string;
}
export interface LocationCreateData {
    id: string;
    address: Record<string, any>;
    address_kana?: Record<string, any>;
    address_kanji?: Record<string, any>;
    city?: string;
    configuration_overrides?: string;
    country?: string;
    description?: string;
    display_name: string;
    display_name_kana?: string;
    display_name_kanji?: string;
    line1?: string;
    line2?: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    phone?: string;
    postal_code?: string;
    state?: string;
    type: string;
}
export interface LocationRemoveMatch {
    id: string;
}
export interface LoginLink {
    created: number;
    object: string;
    url: string;
}
export interface LoginLinkCreateData {
    account_id: string;
    created: number;
    object: string;
    url: string;
}
export interface Mandate {
    customer_acceptance: Record<string, any>;
    id: string;
    livemode: boolean;
    multi_use?: Record<string, any>;
    object: string;
    on_behalf_of?: string;
    payment_method: any;
    payment_method_details: Record<string, any>;
    single_use: Record<string, any>;
    status: string;
    type: string;
}
export interface MandateLoadMatch {
    id: string;
    expand?: any[];
}
export interface Meter {
    created: number;
    customer_mapping: Record<string, any>;
    default_aggregation: Record<string, any>;
    display_name: string;
    event_name: string;
    event_time_window?: string;
    id: string;
    livemode: boolean;
    object: string;
    status: string;
    status_transitions: Record<string, any>;
    updated: number;
    value_settings: Record<string, any>;
}
export interface MeterLoadMatch {
    id: string;
    expand?: any[];
}
export interface MeterListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface MeterCreateData {
    id: string;
    created: number;
    customer_mapping: Record<string, any>;
    default_aggregation: Record<string, any>;
    display_name: string;
    event_name: string;
    event_time_window?: string;
    livemode: boolean;
    object: string;
    status: string;
    status_transitions: Record<string, any>;
    updated: number;
    value_settings: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface MeterEvent {
}
export interface MeterEventCreateData {
}
export interface MeterEventAdjustment {
}
export interface MeterEventAdjustmentCreateData {
}
export interface MeterEventSummary {
    aggregated_value: number;
    end_time: number;
    id: string;
    livemode: boolean;
    meter: string;
    object: string;
    start_time: number;
}
export interface MeterEventSummaryListMatch {
    id: string;
    customer: string;
    end_time: number;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    start_time: number;
    starting_after?: string;
    value_grouping_window?: string;
}
export interface OnboardingLink {
    apple_terms_and_conditions?: any;
}
export interface OnboardingLinkCreateData {
    apple_terms_and_conditions?: any;
}
export interface Order {
    amount_fees: number;
    amount_subtotal: number;
    amount_total: number;
    beneficiary: Record<string, any>;
    canceled_at?: number;
    cancellation_reason?: string;
    certificate?: string;
    confirmed_at?: number;
    created: number;
    currency: string;
    delayed_at?: number;
    delivered_at?: number;
    delivery_details: any[];
    expected_delivery_year: number;
    id: string;
    livemode: boolean;
    metadata: Record<string, any>;
    metric_tons: string;
    object: string;
    product: any;
    product_substituted_at?: number;
    status: string;
}
export interface OrderLoadMatch {
    id: string;
    expand?: any[];
}
export interface OrderListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface OrderCreateData {
    id: string;
    amount_fees: number;
    amount_subtotal: number;
    amount_total: number;
    beneficiary: Record<string, any>;
    canceled_at?: number;
    cancellation_reason?: string;
    certificate?: string;
    confirmed_at?: number;
    created: number;
    currency: string;
    delayed_at?: number;
    delivered_at?: number;
    delivery_details: any[];
    expected_delivery_year: number;
    livemode: boolean;
    metadata: Record<string, any>;
    metric_tons: string;
    object: string;
    product: any;
    product_substituted_at?: number;
    status: string;
    $action?: string;
    [action: string]: any;
}
export interface OutboundPayment {
    amount: number;
    cancelable: boolean;
    created: number;
    currency: string;
    customer?: string;
    description?: string;
    destination_payment_method?: string;
    destination_payment_method_details?: any;
    end_user_details?: any;
    expected_arrival_date: number;
    financial_account: string;
    hosted_regulatory_receipt_url?: string;
    id: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    returned_details?: any;
    statement_descriptor: string;
    status: string;
    status_transitions: Record<string, any>;
    tracking_details?: any;
    transaction: any;
}
export interface OutboundPaymentLoadMatch {
    id: string;
    expand?: any[];
}
export interface OutboundPaymentListMatch {
    created?: any;
    customer?: string;
    ending_before?: string;
    expand?: any[];
    financial_account: string;
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface OutboundPaymentCreateData {
    id: string;
    amount: number;
    cancelable: boolean;
    created: number;
    currency: string;
    customer?: string;
    description?: string;
    destination_payment_method?: string;
    destination_payment_method_details?: any;
    end_user_details?: any;
    expected_arrival_date: number;
    financial_account: string;
    hosted_regulatory_receipt_url?: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    returned_details?: any;
    statement_descriptor: string;
    status: string;
    status_transitions: Record<string, any>;
    tracking_details?: any;
    transaction: any;
    $action?: string;
    [action: string]: any;
}
export interface OutboundTransfer {
    amount: number;
    cancelable: boolean;
    created: number;
    currency: string;
    description?: string;
    destination_payment_method?: string;
    destination_payment_method_details: Record<string, any>;
    expected_arrival_date: number;
    financial_account: string;
    hosted_regulatory_receipt_url?: string;
    id: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    returned_details?: any;
    statement_descriptor: string;
    status: string;
    status_transitions: Record<string, any>;
    tracking_details?: any;
    transaction: any;
}
export interface OutboundTransferLoadMatch {
    id: string;
    expand?: any[];
}
export interface OutboundTransferListMatch {
    ending_before?: string;
    expand?: any[];
    financial_account: string;
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface OutboundTransferCreateData {
    id: string;
    amount: number;
    cancelable: boolean;
    created: number;
    currency: string;
    description?: string;
    destination_payment_method?: string;
    destination_payment_method_details: Record<string, any>;
    expected_arrival_date: number;
    financial_account: string;
    hosted_regulatory_receipt_url?: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    returned_details?: any;
    statement_descriptor: string;
    status: string;
    status_transitions: Record<string, any>;
    tracking_details?: any;
    transaction: any;
    $action?: string;
    [action: string]: any;
}
export interface PaymentAttemptRecord {
    amount: Record<string, any>;
    amount_authorized: Record<string, any>;
    amount_canceled: Record<string, any>;
    amount_failed: Record<string, any>;
    amount_guaranteed: Record<string, any>;
    amount_refunded: Record<string, any>;
    amount_requested: Record<string, any>;
    application?: string;
    created: number;
    customer_details?: any;
    customer_presence?: string;
    description?: string;
    id: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    payment_method_details?: any;
    payment_record?: string;
    processor_details: Record<string, any>;
    reported_by: string;
    shipping_details?: any;
}
export interface PaymentAttemptRecordLoadMatch {
    id: string;
    expand?: any[];
}
export interface PaymentAttemptRecordListMatch {
    expand?: any[];
    limit?: number;
    payment_record: string;
    starting_after?: string;
}
export interface PaymentEvaluation {
    client_device_metadata_details: Record<string, any>;
    created_at: number;
    customer_details?: Record<string, any>;
    events: any[];
    id: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    outcome?: any;
    payment_details: Record<string, any>;
    recommended_action: string;
    signals: Record<string, any>;
}
export interface PaymentEvaluationCreateData {
    client_device_metadata_details: Record<string, any>;
    created_at: number;
    customer_details?: Record<string, any>;
    events: any[];
    id: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    outcome?: any;
    payment_details: Record<string, any>;
    recommended_action: string;
    signals: Record<string, any>;
}
export interface PaymentIntent {
    allowed_payment_method_types?: any[];
    amount?: number;
    amount_capturable?: number;
    amount_details?: any;
    amount_received?: number;
    application?: any;
    application_fee_amount?: number;
    automatic_payment_methods?: any;
    canceled_at?: number;
    cancellation_reason?: string;
    capture_method?: string;
    client_secret?: string;
    confirmation_method?: string;
    created: number;
    currency?: string;
    customer?: any;
    customer_account?: string;
    description?: string;
    excluded_payment_method_types?: any[];
    hooks?: Record<string, any>;
    id: string;
    last_payment_error?: any;
    latest_charge?: any;
    livemode: boolean;
    managed_payments?: any;
    metadata?: Record<string, any>;
    next_action?: any;
    object: string;
    on_behalf_of?: any;
    payment_details?: Record<string, any>;
    payment_method?: any;
    payment_method_configuration_details?: any;
    payment_method_options?: any;
    payment_method_types?: any[];
    payment_record?: any;
    presentment_details: Record<string, any>;
    processing?: any;
    receipt_email?: string;
    review?: any;
    setup_future_usage?: string;
    shipping?: any;
    statement_descriptor?: string;
    statement_descriptor_suffix?: string;
    status: string;
    transfer_data?: any;
    transfer_group?: string;
}
export interface PaymentIntentLoadMatch {
    id: string;
    client_secret?: string;
    expand?: any[];
}
export interface PaymentIntentListMatch {
    created?: any;
    customer?: string;
    customer_account?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface PaymentIntentCreateData {
    id: string;
    allowed_payment_method_types?: any[];
    amount?: number;
    amount_capturable?: number;
    amount_details?: any;
    amount_received?: number;
    application?: any;
    application_fee_amount?: number;
    automatic_payment_methods?: any;
    canceled_at?: number;
    cancellation_reason?: string;
    capture_method?: string;
    client_secret?: string;
    confirmation_method?: string;
    created: number;
    currency?: string;
    customer?: any;
    customer_account?: string;
    description?: string;
    excluded_payment_method_types?: any[];
    hooks?: Record<string, any>;
    last_payment_error?: any;
    latest_charge?: any;
    livemode: boolean;
    managed_payments?: any;
    metadata?: Record<string, any>;
    next_action?: any;
    object: string;
    on_behalf_of?: any;
    payment_details?: Record<string, any>;
    payment_method?: any;
    payment_method_configuration_details?: any;
    payment_method_options?: any;
    payment_method_types?: any[];
    payment_record?: any;
    presentment_details: Record<string, any>;
    processing?: any;
    receipt_email?: string;
    review?: any;
    setup_future_usage?: string;
    shipping?: any;
    statement_descriptor?: string;
    statement_descriptor_suffix?: string;
    status: string;
    transfer_data?: any;
    transfer_group?: string;
    $action?: string;
    [action: string]: any;
}
export interface PaymentIntentAmountDetailsLineItem {
    discount_amount?: number;
    id: string;
    object: string;
    payment_method_options?: any;
    product_code?: string;
    product_name: string;
    quantity: number;
    tax?: any;
    unit_cost: number;
    unit_of_measure?: string;
}
export interface PaymentIntentAmountDetailsLineItemListMatch {
    intent: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface PaymentLink {
    active: boolean;
    after_completion: Record<string, any>;
    allow_promotion_codes: boolean;
    application?: any;
    application_fee_amount?: number;
    application_fee_percent?: number;
    automatic_tax: Record<string, any>;
    billing_address_collection: string;
    consent_collection?: any;
    currency: string;
    custom_fields: any[];
    custom_text: Record<string, any>;
    customer_creation: string;
    id: string;
    inactive_message?: string;
    invoice_creation?: any;
    line_items: Record<string, any>;
    livemode: boolean;
    managed_payments?: any;
    metadata: Record<string, any>;
    name_collection?: Record<string, any>;
    object: string;
    on_behalf_of?: any;
    optional_items?: any[];
    payment_intent_data?: any;
    payment_method_collection: string;
    payment_method_options?: any;
    payment_method_types?: any[];
    phone_number_collection: Record<string, any>;
    restrictions?: any;
    shipping_address_collection?: any;
    shipping_options: any[];
    submit_type: string;
    subscription_data?: any;
    tax_id_collection: Record<string, any>;
    transfer_data?: any;
    url: string;
}
export interface PaymentLinkLoadMatch {
    id: string;
    expand?: any[];
}
export interface PaymentLinkListMatch {
    active?: boolean;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface PaymentLinkCreateData {
    id: string;
    active: boolean;
    after_completion: Record<string, any>;
    allow_promotion_codes: boolean;
    application?: any;
    application_fee_amount?: number;
    application_fee_percent?: number;
    automatic_tax: Record<string, any>;
    billing_address_collection: string;
    consent_collection?: any;
    currency: string;
    custom_fields: any[];
    custom_text: Record<string, any>;
    customer_creation: string;
    inactive_message?: string;
    invoice_creation?: any;
    line_items: Record<string, any>;
    livemode: boolean;
    managed_payments?: any;
    metadata: Record<string, any>;
    name_collection?: Record<string, any>;
    object: string;
    on_behalf_of?: any;
    optional_items?: any[];
    payment_intent_data?: any;
    payment_method_collection: string;
    payment_method_options?: any;
    payment_method_types?: any[];
    phone_number_collection: Record<string, any>;
    restrictions?: any;
    shipping_address_collection?: any;
    shipping_options: any[];
    submit_type: string;
    subscription_data?: any;
    tax_id_collection: Record<string, any>;
    transfer_data?: any;
    url: string;
}
export interface PaymentMethod {
    acss_debit?: Record<string, any>;
    affirm?: Record<string, any>;
    afterpay_clearpay?: Record<string, any>;
    alipay?: Record<string, any>;
    allow_redisplay?: boolean;
    alma?: Record<string, any>;
    amazon_pay?: Record<string, any>;
    au_becs_debit?: Record<string, any>;
    bacs_debit?: Record<string, any>;
    bancontact?: Record<string, any>;
    billie?: Record<string, any>;
    billing_details: Record<string, any>;
    bizum?: Record<string, any>;
    blik?: Record<string, any>;
    boleto: Record<string, any>;
    card: Record<string, any>;
    card_present: Record<string, any>;
    cashapp?: Record<string, any>;
    created: number;
    crypto?: Record<string, any>;
    custom: Record<string, any>;
    customer?: any;
    customer_account?: string;
    customer_balance?: Record<string, any>;
    eps?: Record<string, any>;
    fpx: Record<string, any>;
    giropay?: Record<string, any>;
    grabpay?: Record<string, any>;
    id: string;
    ideal?: Record<string, any>;
    interac_present: Record<string, any>;
    kakao_pay?: Record<string, any>;
    klarna?: Record<string, any>;
    konbini?: Record<string, any>;
    kr_card?: Record<string, any>;
    link?: Record<string, any>;
    livemode: boolean;
    mb_way?: Record<string, any>;
    metadata?: Record<string, any>;
    mobilepay?: Record<string, any>;
    multibanco?: Record<string, any>;
    naver_pay: Record<string, any>;
    nz_bank_account: Record<string, any>;
    object: string;
    oxxo?: Record<string, any>;
    p24?: Record<string, any>;
    pay_by_bank?: Record<string, any>;
    payco?: Record<string, any>;
    paynow?: Record<string, any>;
    paypal?: Record<string, any>;
    paypay?: Record<string, any>;
    payto?: Record<string, any>;
    pix?: Record<string, any>;
    promptpay?: Record<string, any>;
    radar_options?: Record<string, any>;
    revolut_pay?: Record<string, any>;
    samsung_pay?: Record<string, any>;
    satispay?: Record<string, any>;
    scalapay?: Record<string, any>;
    sepa_debit?: Record<string, any>;
    sequra?: Record<string, any>;
    sofort?: Record<string, any>;
    sunbit?: Record<string, any>;
    swish?: Record<string, any>;
    twint?: Record<string, any>;
    type: string;
    upi?: Record<string, any>;
    us_bank_account?: Record<string, any>;
    wechat_pay?: Record<string, any>;
    zip?: Record<string, any>;
}
export interface PaymentMethodLoadMatch {
    customer_id?: string;
    id: string;
    expand?: any[];
}
export interface PaymentMethodListMatch {
    allow_redisplay?: boolean;
    customer?: string;
    customer_account?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    type?: string;
}
export interface PaymentMethodCreateData {
    id: string;
    acss_debit?: Record<string, any>;
    affirm?: Record<string, any>;
    afterpay_clearpay?: Record<string, any>;
    alipay?: Record<string, any>;
    allow_redisplay?: boolean;
    alma?: Record<string, any>;
    amazon_pay?: Record<string, any>;
    au_becs_debit?: Record<string, any>;
    bacs_debit?: Record<string, any>;
    bancontact?: Record<string, any>;
    billie?: Record<string, any>;
    billing_details: Record<string, any>;
    bizum?: Record<string, any>;
    blik?: Record<string, any>;
    boleto: Record<string, any>;
    card: Record<string, any>;
    card_present: Record<string, any>;
    cashapp?: Record<string, any>;
    created: number;
    crypto?: Record<string, any>;
    custom: Record<string, any>;
    customer?: any;
    customer_account?: string;
    customer_balance?: Record<string, any>;
    eps?: Record<string, any>;
    fpx: Record<string, any>;
    giropay?: Record<string, any>;
    grabpay?: Record<string, any>;
    ideal?: Record<string, any>;
    interac_present: Record<string, any>;
    kakao_pay?: Record<string, any>;
    klarna?: Record<string, any>;
    konbini?: Record<string, any>;
    kr_card?: Record<string, any>;
    link?: Record<string, any>;
    livemode: boolean;
    mb_way?: Record<string, any>;
    metadata?: Record<string, any>;
    mobilepay?: Record<string, any>;
    multibanco?: Record<string, any>;
    naver_pay: Record<string, any>;
    nz_bank_account: Record<string, any>;
    object: string;
    oxxo?: Record<string, any>;
    p24?: Record<string, any>;
    pay_by_bank?: Record<string, any>;
    payco?: Record<string, any>;
    paynow?: Record<string, any>;
    paypal?: Record<string, any>;
    paypay?: Record<string, any>;
    payto?: Record<string, any>;
    pix?: Record<string, any>;
    promptpay?: Record<string, any>;
    radar_options?: Record<string, any>;
    revolut_pay?: Record<string, any>;
    samsung_pay?: Record<string, any>;
    satispay?: Record<string, any>;
    scalapay?: Record<string, any>;
    sepa_debit?: Record<string, any>;
    sequra?: Record<string, any>;
    sofort?: Record<string, any>;
    sunbit?: Record<string, any>;
    swish?: Record<string, any>;
    twint?: Record<string, any>;
    type: string;
    upi?: Record<string, any>;
    us_bank_account?: Record<string, any>;
    wechat_pay?: Record<string, any>;
    zip?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface PaymentMethodConfiguration {
    acss_debit: Record<string, any>;
    active: boolean;
    affirm: Record<string, any>;
    afterpay_clearpay: Record<string, any>;
    alipay: Record<string, any>;
    alma: Record<string, any>;
    amazon_pay: Record<string, any>;
    apple_pay: Record<string, any>;
    application?: string;
    au_becs_debit: Record<string, any>;
    bacs_debit: Record<string, any>;
    bancontact: Record<string, any>;
    billie: Record<string, any>;
    bizum: Record<string, any>;
    blik: Record<string, any>;
    boleto: Record<string, any>;
    card: Record<string, any>;
    cartes_bancaires: Record<string, any>;
    cashapp: Record<string, any>;
    crypto: Record<string, any>;
    customer_balance: Record<string, any>;
    eps: Record<string, any>;
    fpx: Record<string, any>;
    giropay: Record<string, any>;
    google_pay: Record<string, any>;
    grabpay: Record<string, any>;
    id: string;
    ideal: Record<string, any>;
    is_default: boolean;
    jcb: Record<string, any>;
    kakao_pay: Record<string, any>;
    klarna: Record<string, any>;
    konbini: Record<string, any>;
    kr_card: Record<string, any>;
    link: Record<string, any>;
    livemode: boolean;
    mb_way: Record<string, any>;
    mobilepay: Record<string, any>;
    multibanco: Record<string, any>;
    name: string;
    naver_pay: Record<string, any>;
    nz_bank_account: Record<string, any>;
    object: string;
    oxxo: Record<string, any>;
    p24: Record<string, any>;
    parent?: string;
    pay_by_bank: Record<string, any>;
    payco: Record<string, any>;
    paynow: Record<string, any>;
    paypal: Record<string, any>;
    paypay: Record<string, any>;
    payto: Record<string, any>;
    pix: Record<string, any>;
    promptpay: Record<string, any>;
    revolut_pay: Record<string, any>;
    samsung_pay: Record<string, any>;
    satispay: Record<string, any>;
    scalapay: Record<string, any>;
    sepa_debit: Record<string, any>;
    sequra: Record<string, any>;
    sofort: Record<string, any>;
    sunbit: Record<string, any>;
    swish: Record<string, any>;
    twint: Record<string, any>;
    upi: Record<string, any>;
    us_bank_account: Record<string, any>;
    wechat_pay: Record<string, any>;
    zip: Record<string, any>;
}
export interface PaymentMethodConfigurationLoadMatch {
    id: string;
    expand?: any[];
}
export interface PaymentMethodConfigurationListMatch {
    active?: boolean;
    application?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface PaymentMethodConfigurationCreateData {
    id: string;
    acss_debit: Record<string, any>;
    active: boolean;
    affirm: Record<string, any>;
    afterpay_clearpay: Record<string, any>;
    alipay: Record<string, any>;
    alma: Record<string, any>;
    amazon_pay: Record<string, any>;
    apple_pay: Record<string, any>;
    application?: string;
    au_becs_debit: Record<string, any>;
    bacs_debit: Record<string, any>;
    bancontact: Record<string, any>;
    billie: Record<string, any>;
    bizum: Record<string, any>;
    blik: Record<string, any>;
    boleto: Record<string, any>;
    card: Record<string, any>;
    cartes_bancaires: Record<string, any>;
    cashapp: Record<string, any>;
    crypto: Record<string, any>;
    customer_balance: Record<string, any>;
    eps: Record<string, any>;
    fpx: Record<string, any>;
    giropay: Record<string, any>;
    google_pay: Record<string, any>;
    grabpay: Record<string, any>;
    ideal: Record<string, any>;
    is_default: boolean;
    jcb: Record<string, any>;
    kakao_pay: Record<string, any>;
    klarna: Record<string, any>;
    konbini: Record<string, any>;
    kr_card: Record<string, any>;
    link: Record<string, any>;
    livemode: boolean;
    mb_way: Record<string, any>;
    mobilepay: Record<string, any>;
    multibanco: Record<string, any>;
    name: string;
    naver_pay: Record<string, any>;
    nz_bank_account: Record<string, any>;
    object: string;
    oxxo: Record<string, any>;
    p24: Record<string, any>;
    parent?: string;
    pay_by_bank: Record<string, any>;
    payco: Record<string, any>;
    paynow: Record<string, any>;
    paypal: Record<string, any>;
    paypay: Record<string, any>;
    payto: Record<string, any>;
    pix: Record<string, any>;
    promptpay: Record<string, any>;
    revolut_pay: Record<string, any>;
    samsung_pay: Record<string, any>;
    satispay: Record<string, any>;
    scalapay: Record<string, any>;
    sepa_debit: Record<string, any>;
    sequra: Record<string, any>;
    sofort: Record<string, any>;
    sunbit: Record<string, any>;
    swish: Record<string, any>;
    twint: Record<string, any>;
    upi: Record<string, any>;
    us_bank_account: Record<string, any>;
    wechat_pay: Record<string, any>;
    zip: Record<string, any>;
}
export interface PaymentMethodDomain {
    amazon_pay: Record<string, any>;
    apple_pay: Record<string, any>;
    created: number;
    domain_name: string;
    enabled: boolean;
    google_pay: Record<string, any>;
    id: string;
    klarna: Record<string, any>;
    link: Record<string, any>;
    livemode: boolean;
    object: string;
    paypal: Record<string, any>;
}
export interface PaymentMethodDomainLoadMatch {
    id: string;
    expand?: any[];
}
export interface PaymentMethodDomainListMatch {
    domain_name?: string;
    enabled?: boolean;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface PaymentMethodDomainCreateData {
    id: string;
    amazon_pay: Record<string, any>;
    apple_pay: Record<string, any>;
    created: number;
    domain_name: string;
    enabled: boolean;
    google_pay: Record<string, any>;
    klarna: Record<string, any>;
    link: Record<string, any>;
    livemode: boolean;
    object: string;
    paypal: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface PaymentRecord {
    amount: Record<string, any>;
    amount_authorized: Record<string, any>;
    amount_canceled: Record<string, any>;
    amount_failed: Record<string, any>;
    amount_guaranteed: Record<string, any>;
    amount_refunded: Record<string, any>;
    amount_requested: Record<string, any>;
    application?: string;
    created: number;
    customer_details?: any;
    customer_presence?: string;
    description?: string;
    id: string;
    latest_payment_attempt_record?: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    payment_method_details?: any;
    processor_details: Record<string, any>;
    reported_by: string;
    shipping_details?: any;
}
export interface PaymentRecordLoadMatch {
    id: string;
    expand?: any[];
}
export interface PaymentRecordListMatch {
    created_after?: number;
    created_before?: number;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface PaymentRecordCreateData {
    amount: Record<string, any>;
    amount_authorized: Record<string, any>;
    amount_canceled: Record<string, any>;
    amount_failed: Record<string, any>;
    amount_guaranteed: Record<string, any>;
    amount_refunded: Record<string, any>;
    amount_requested: Record<string, any>;
    application?: string;
    created: number;
    customer_details?: any;
    customer_presence?: string;
    description?: string;
    id: string;
    latest_payment_attempt_record?: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    payment_method_details?: any;
    processor_details: Record<string, any>;
    reported_by: string;
    shipping_details?: any;
    $action?: string;
    [action: string]: any;
}
export interface Payout {
    amount: number;
    application_fee?: any;
    application_fee_amount?: number;
    arrival_date: number;
    automatic: boolean;
    balance_transaction?: any;
    created: number;
    currency: string;
    description?: string;
    destination?: any;
    failure_balance_transaction?: any;
    failure_code?: string;
    failure_message?: string;
    id: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    method: string;
    object: string;
    original_payout?: any;
    payout_method?: string;
    reconciliation_status: string;
    reversed_by?: any;
    source_type: string;
    statement_descriptor?: string;
    status: string;
    trace_id?: string;
    type: string;
}
export interface PayoutLoadMatch {
    id: string;
    expand?: any[];
}
export interface PayoutListMatch {
    arrival_date?: any;
    created?: any;
    destination?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface PayoutCreateData {
    id: string;
    amount: number;
    application_fee?: any;
    application_fee_amount?: number;
    arrival_date: number;
    automatic: boolean;
    balance_transaction?: any;
    created: number;
    currency: string;
    description?: string;
    destination?: any;
    failure_balance_transaction?: any;
    failure_code?: string;
    failure_message?: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    method: string;
    object: string;
    original_payout?: any;
    payout_method?: string;
    reconciliation_status: string;
    reversed_by?: any;
    source_type: string;
    statement_descriptor?: string;
    status: string;
    trace_id?: string;
    type: string;
    $action?: string;
    [action: string]: any;
}
export interface Person {
    account: string;
    additional_tos_acceptances?: Record<string, any>;
    address?: Record<string, any>;
    address_kana?: any;
    address_kanji?: any;
    created: number;
    dob?: Record<string, any>;
    email?: string;
    first_name?: string;
    first_name_kana?: string;
    first_name_kanji?: string;
    full_name_aliases?: any[];
    future_requirements?: any;
    gender?: string;
    id: string;
    id_number_provided?: boolean;
    id_number_secondary_provided?: boolean;
    last_name?: string;
    last_name_kana?: string;
    last_name_kanji?: string;
    maiden_name?: string;
    metadata?: Record<string, any>;
    nationality?: string;
    object: string;
    phone?: string;
    political_exposure?: string;
    registered_address?: Record<string, any>;
    relationship?: Record<string, any>;
    requirements?: any;
    ssn_last_4_provided?: boolean;
    us_cfpb_data?: any;
    verification: Record<string, any>;
}
export interface PersonLoadMatch {
    account_id: string;
    id: string;
    expand?: any[];
}
export interface PersonListMatch {
    account_id: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    relationship?: Record<string, any>;
    starting_after?: string;
}
export interface PersonCreateData {
    account_id: string;
    id?: string;
    account: string;
    additional_tos_acceptances?: Record<string, any>;
    address?: Record<string, any>;
    address_kana?: any;
    address_kanji?: any;
    created: number;
    dob?: Record<string, any>;
    email?: string;
    first_name?: string;
    first_name_kana?: string;
    first_name_kanji?: string;
    full_name_aliases?: any[];
    future_requirements?: any;
    gender?: string;
    id_number_provided?: boolean;
    id_number_secondary_provided?: boolean;
    last_name?: string;
    last_name_kana?: string;
    last_name_kanji?: string;
    maiden_name?: string;
    metadata?: Record<string, any>;
    nationality?: string;
    object: string;
    phone?: string;
    political_exposure?: string;
    registered_address?: Record<string, any>;
    relationship?: Record<string, any>;
    requirements?: any;
    ssn_last_4_provided?: boolean;
    us_cfpb_data?: any;
    verification: Record<string, any>;
}
export interface PersonalizationDesign {
    card_logo?: any;
    carrier_text?: any;
    created: number;
    id: string;
    livemode: boolean;
    lookup_key?: string;
    metadata: Record<string, any>;
    name?: string;
    object: string;
    physical_bundle: any;
    preferences: Record<string, any>;
    rejection_reasons: Record<string, any>;
    status: string;
}
export interface PersonalizationDesignLoadMatch {
    id: string;
    expand?: any[];
}
export interface PersonalizationDesignListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    lookup_key?: any[];
    preference?: Record<string, any>;
    starting_after?: string;
    status?: string;
}
export interface PersonalizationDesignCreateData {
    id: string;
    card_logo?: any;
    carrier_text?: any;
    created: number;
    livemode: boolean;
    lookup_key?: string;
    metadata: Record<string, any>;
    name?: string;
    object: string;
    physical_bundle: any;
    preferences: Record<string, any>;
    rejection_reasons: Record<string, any>;
    status: string;
    $action?: string;
    [action: string]: any;
}
export interface PhysicalBundle {
    card_logo: string;
    carrier_text: string;
    features: Record<string, any>;
    id: string;
    livemode: boolean;
    name: string;
    object: string;
    second_line: string;
    status: string;
    type: string;
}
export interface PhysicalBundleLoadMatch {
    id: string;
    expand?: any[];
}
export interface PhysicalBundleListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
    type?: string;
}
export interface Plan {
    active: boolean;
    amount?: number;
    amount_decimal?: string;
    billing_scheme: string;
    created: number;
    currency: string;
    id: string;
    interval: string;
    interval_count: number;
    livemode: boolean;
    metadata?: Record<string, any>;
    meter?: string;
    nickname?: string;
    object: string;
    product?: any;
    tiers?: any[];
    tiers_mode?: string;
    transform_usage?: any;
    trial_period_days?: number;
    usage_type: string;
}
export interface PlanLoadMatch {
    id: string;
    expand?: any[];
}
export interface PlanListMatch {
    active?: boolean;
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    product?: string;
    starting_after?: string;
}
export interface PlanCreateData {
    id: string;
    active: boolean;
    amount?: number;
    amount_decimal?: string;
    billing_scheme: string;
    created: number;
    currency: string;
    interval: string;
    interval_count: number;
    livemode: boolean;
    metadata?: Record<string, any>;
    meter?: string;
    nickname?: string;
    object: string;
    product?: any;
    tiers?: any[];
    tiers_mode?: string;
    transform_usage?: any;
    trial_period_days?: number;
    usage_type: string;
}
export interface Price {
    active: boolean;
    billing_scheme: string;
    created: number;
    currency: string;
    currency_options?: Record<string, any>;
    custom_unit_amount?: any;
    id: string;
    livemode: boolean;
    lookup_key?: string;
    metadata: Record<string, any>;
    nickname?: string;
    object: string;
    product: any;
    recurring?: any;
    tax_behavior?: string;
    tiers?: any[];
    tiers_mode?: string;
    transform_quantity?: any;
    type: string;
    unit_amount?: number;
    unit_amount_decimal?: string;
}
export interface PriceLoadMatch {
    id: string;
    expand?: any[];
}
export interface PriceListMatch {
    active?: boolean;
    created?: any;
    currency?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    lookup_key?: any[];
    product?: string;
    recurring?: Record<string, any>;
    starting_after?: string;
    type?: string;
}
export interface PriceCreateData {
    id: string;
    active: boolean;
    billing_scheme: string;
    created: number;
    currency: string;
    currency_options?: Record<string, any>;
    custom_unit_amount?: any;
    livemode: boolean;
    lookup_key?: string;
    metadata: Record<string, any>;
    nickname?: string;
    object: string;
    product: any;
    recurring?: any;
    tax_behavior?: string;
    tiers?: any[];
    tiers_mode?: string;
    transform_quantity?: any;
    type: string;
    unit_amount?: number;
    unit_amount_decimal?: string;
}
export interface Product {
    active: boolean;
    created: number;
    current_prices_per_metric_ton: Record<string, any>;
    default_price?: any;
    delivery_year?: number;
    description?: string;
    id: string;
    images: any[];
    livemode: boolean;
    marketing_features: any[];
    metadata: Record<string, any>;
    metric_tons_available: string;
    name: string;
    object: string;
    package_dimensions?: any;
    shippable?: boolean;
    statement_descriptor?: string;
    suppliers: any[];
    tax_code?: any;
    tax_details?: any;
    unit_label?: string;
    updated: number;
    url?: string;
}
export interface ProductLoadMatch {
    id: string;
    expand?: any[];
}
export interface ProductListMatch {
    active?: boolean;
    created?: any;
    ending_before?: string;
    expand?: any[];
    ids?: any[];
    limit?: number;
    shippable?: boolean;
    starting_after?: string;
    url?: string;
}
export interface ProductCreateData {
    id: string;
    active: boolean;
    created: number;
    current_prices_per_metric_ton: Record<string, any>;
    default_price?: any;
    delivery_year?: number;
    description?: string;
    images: any[];
    livemode: boolean;
    marketing_features: any[];
    metadata: Record<string, any>;
    metric_tons_available: string;
    name: string;
    object: string;
    package_dimensions?: any;
    shippable?: boolean;
    statement_descriptor?: string;
    suppliers: any[];
    tax_code?: any;
    tax_details?: any;
    unit_label?: string;
    updated: number;
    url?: string;
}
export interface ProductRemoveMatch {
    id: string;
}
export interface ProductFeature {
    active: boolean;
    id: string;
    livemode: boolean;
    lookup_key: string;
    metadata: Record<string, any>;
    name: string;
    object: string;
}
export interface ProductFeatureLoadMatch {
    id: string;
    product_id: string;
    expand?: any[];
}
export interface ProductFeatureCreateData {
    id: string;
    active: boolean;
    livemode: boolean;
    lookup_key: string;
    metadata: Record<string, any>;
    name: string;
    object: string;
}
export interface PromotionCode {
    active: boolean;
    code: string;
    created: number;
    customer?: any;
    customer_account?: string;
    expires_at?: number;
    id: string;
    livemode: boolean;
    max_redemptions?: number;
    metadata?: Record<string, any>;
    object: string;
    promotion: Record<string, any>;
    restrictions: Record<string, any>;
    times_redeemed: number;
}
export interface PromotionCodeLoadMatch {
    id: string;
    expand?: any[];
}
export interface PromotionCodeListMatch {
    active?: boolean;
    code?: string;
    coupon?: string;
    created?: any;
    customer?: string;
    customer_account?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface PromotionCodeCreateData {
    id: string;
    active: boolean;
    code: string;
    created: number;
    customer?: any;
    customer_account?: string;
    expires_at?: number;
    livemode: boolean;
    max_redemptions?: number;
    metadata?: Record<string, any>;
    object: string;
    promotion: Record<string, any>;
    restrictions: Record<string, any>;
    times_redeemed: number;
}
export interface Quote {
    amount_subtotal: number;
    amount_total: number;
    application?: any;
    application_fee_amount?: number;
    application_fee_percent?: number;
    automatic_tax: Record<string, any>;
    collection_method: string;
    computed: Record<string, any>;
    created: number;
    currency?: string;
    customer?: any;
    customer_account?: string;
    default_tax_rates?: any[];
    description?: string;
    discounts: any[];
    expires_at: number;
    footer?: string;
    from_quote?: any;
    header?: string;
    id: string;
    invoice?: any;
    invoice_settings: Record<string, any>;
    line_items: Record<string, any>;
    livemode: boolean;
    metadata: Record<string, any>;
    number?: string;
    object: string;
    on_behalf_of?: any;
    status: string;
    status_transitions: Record<string, any>;
    subscription?: any;
    subscription_data: Record<string, any>;
    subscription_schedule?: any;
    test_clock?: any;
    total_details: Record<string, any>;
    transfer_data?: any;
}
export interface QuoteLoadMatch {
    id: string;
    expand?: any[];
}
export interface QuoteListMatch {
    customer?: string;
    customer_account?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
    test_clock?: string;
}
export interface QuoteCreateData {
    id: string;
    amount_subtotal: number;
    amount_total: number;
    application?: any;
    application_fee_amount?: number;
    application_fee_percent?: number;
    automatic_tax: Record<string, any>;
    collection_method: string;
    computed: Record<string, any>;
    created: number;
    currency?: string;
    customer?: any;
    customer_account?: string;
    default_tax_rates?: any[];
    description?: string;
    discounts: any[];
    expires_at: number;
    footer?: string;
    from_quote?: any;
    header?: string;
    invoice?: any;
    invoice_settings: Record<string, any>;
    line_items: Record<string, any>;
    livemode: boolean;
    metadata: Record<string, any>;
    number?: string;
    object: string;
    on_behalf_of?: any;
    status: string;
    status_transitions: Record<string, any>;
    subscription?: any;
    subscription_data: Record<string, any>;
    subscription_schedule?: any;
    test_clock?: any;
    total_details: Record<string, any>;
    transfer_data?: any;
    $action?: string;
    [action: string]: any;
}
export interface QuoteComputedUpfrontLineItem {
    adjustable_quantity?: any;
    amount_discount: number;
    amount_subtotal: number;
    amount_tax: number;
    amount_total: number;
    currency: string;
    description?: string;
    discounts?: any[];
    id: string;
    metadata?: Record<string, any>;
    object: string;
    price?: number;
    quantity?: number;
    taxes?: any[];
}
export interface QuoteComputedUpfrontLineItemListMatch {
    id: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface QuotePdf {
    id?: string;
}
export interface QuotePdfLoadMatch {
    id: string;
    expand?: any[];
}
export interface Reader {
    action?: any;
    device_sw_version?: string;
    device_type: string;
    id: string;
    ip_address?: string;
    label: string;
    last_seen_at?: number;
    livemode: boolean;
    location?: any;
    metadata: Record<string, any>;
    object: string;
    serial_number: string;
    status?: string;
}
export interface ReaderLoadMatch {
    id: string;
    expand?: any[];
}
export interface ReaderListMatch {
    device_type?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    location?: string;
    serial_number?: string;
    starting_after?: string;
    status?: string;
}
export interface ReaderCreateData {
    id: string;
    action?: any;
    device_sw_version?: string;
    device_type: string;
    ip_address?: string;
    label: string;
    last_seen_at?: number;
    livemode: boolean;
    location?: any;
    metadata: Record<string, any>;
    object: string;
    serial_number: string;
    status?: string;
    $action?: string;
    [action: string]: any;
}
export interface ReaderRemoveMatch {
    id: string;
}
export interface ReceivedCredit {
    amount: number;
    created: number;
    currency: string;
    description: string;
    failure_code?: string;
    financial_account?: string;
    hosted_regulatory_receipt_url?: string;
    id: string;
    initiating_payment_method_details: Record<string, any>;
    linked_flows: Record<string, any>;
    livemode: boolean;
    network: string;
    object: string;
    reversal_details?: any;
    status: string;
    transaction?: any;
}
export interface ReceivedCreditLoadMatch {
    id: string;
    expand?: any[];
}
export interface ReceivedCreditListMatch {
    ending_before?: string;
    expand?: any[];
    financial_account: string;
    limit?: number;
    linked_flow?: Record<string, any>;
    starting_after?: string;
    status?: string;
}
export interface ReceivedCreditCreateData {
    amount: number;
    created: number;
    currency: string;
    description: string;
    failure_code?: string;
    financial_account?: string;
    hosted_regulatory_receipt_url?: string;
    id: string;
    initiating_payment_method_details: Record<string, any>;
    linked_flows: Record<string, any>;
    livemode: boolean;
    network: string;
    object: string;
    reversal_details?: any;
    status: string;
    transaction?: any;
}
export interface ReceivedDebit {
    amount: number;
    created: number;
    currency: string;
    description: string;
    failure_code?: string;
    financial_account?: string;
    hosted_regulatory_receipt_url?: string;
    id: string;
    initiating_payment_method_details: Record<string, any>;
    linked_flows: Record<string, any>;
    livemode: boolean;
    network: string;
    object: string;
    reversal_details?: any;
    status: string;
    transaction?: any;
}
export interface ReceivedDebitLoadMatch {
    id: string;
    expand?: any[];
}
export interface ReceivedDebitListMatch {
    ending_before?: string;
    expand?: any[];
    financial_account: string;
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface ReceivedDebitCreateData {
    amount: number;
    created: number;
    currency: string;
    description: string;
    failure_code?: string;
    financial_account?: string;
    hosted_regulatory_receipt_url?: string;
    id: string;
    initiating_payment_method_details: Record<string, any>;
    linked_flows: Record<string, any>;
    livemode: boolean;
    network: string;
    object: string;
    reversal_details?: any;
    status: string;
    transaction?: any;
}
export interface Refund {
    amount: number;
    balance_transaction?: any;
    charge?: any;
    created: number;
    currency: string;
    customer?: any;
    customer_account?: string;
    description?: string;
    destination_details: Record<string, any>;
    failure_balance_transaction?: any;
    failure_reason?: string;
    fee: any;
    id: string;
    instructions_email?: string;
    metadata?: Record<string, any>;
    next_action: Record<string, any>;
    object: string;
    payment_intent?: any;
    payment_method?: any;
    pending_reason?: string;
    presentment_details: Record<string, any>;
    reason?: string;
    receipt_number?: string;
    source_transfer_reversal?: any;
    status?: string;
    transfer_reversal?: any;
}
export interface RefundLoadMatch {
    application_fee_id?: string;
    id: string;
    expand?: any[];
    charge_id?: string;
}
export interface RefundListMatch {
    charge?: string;
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    payment_intent?: string;
    starting_after?: string;
}
export interface RefundCreateData {
    id: string;
    amount: number;
    balance_transaction?: any;
    charge?: any;
    created: number;
    currency: string;
    customer?: any;
    customer_account?: string;
    description?: string;
    destination_details: Record<string, any>;
    failure_balance_transaction?: any;
    failure_reason?: string;
    fee: any;
    instructions_email?: string;
    metadata?: Record<string, any>;
    next_action: Record<string, any>;
    object: string;
    payment_intent?: any;
    payment_method?: any;
    pending_reason?: string;
    presentment_details: Record<string, any>;
    reason?: string;
    receipt_number?: string;
    source_transfer_reversal?: any;
    status?: string;
    transfer_reversal?: any;
    $action?: string;
    [action: string]: any;
}
export interface Registration {
    active_from: number;
    ae: Record<string, any>;
    al: Record<string, any>;
    am: Record<string, any>;
    ao: Record<string, any>;
    at: Record<string, any>;
    au: Record<string, any>;
    aw: Record<string, any>;
    az: Record<string, any>;
    ba: Record<string, any>;
    bb: Record<string, any>;
    bd: Record<string, any>;
    be: Record<string, any>;
    bf: Record<string, any>;
    bg: Record<string, any>;
    bh: Record<string, any>;
    bj: Record<string, any>;
    bs: Record<string, any>;
    by: Record<string, any>;
    ca: Record<string, any>;
    cd: Record<string, any>;
    ch: Record<string, any>;
    cl: Record<string, any>;
    cm: Record<string, any>;
    co: Record<string, any>;
    country: string;
    country_options: Record<string, any>;
    cr: Record<string, any>;
    created: number;
    cv: Record<string, any>;
    cy: Record<string, any>;
    cz: Record<string, any>;
    de: Record<string, any>;
    dk: Record<string, any>;
    ec: Record<string, any>;
    ee: Record<string, any>;
    eg: Record<string, any>;
    es: Record<string, any>;
    et: Record<string, any>;
    expires_at?: number;
    fi: Record<string, any>;
    fr: Record<string, any>;
    gb: Record<string, any>;
    ge: Record<string, any>;
    gn: Record<string, any>;
    gr: Record<string, any>;
    hr: Record<string, any>;
    hu: Record<string, any>;
    id: Record<string, any>;
    ie: Record<string, any>;
    in: Record<string, any>;
    is: Record<string, any>;
    it: Record<string, any>;
    jp: Record<string, any>;
    ke: Record<string, any>;
    kg: Record<string, any>;
    kh: Record<string, any>;
    kr: Record<string, any>;
    kz: Record<string, any>;
    la: Record<string, any>;
    livemode: boolean;
    lk: Record<string, any>;
    lt: Record<string, any>;
    lu: Record<string, any>;
    lv: Record<string, any>;
    ma: Record<string, any>;
    md: Record<string, any>;
    me: Record<string, any>;
    mk: Record<string, any>;
    mr: Record<string, any>;
    mt: Record<string, any>;
    mx: Record<string, any>;
    my: Record<string, any>;
    ng: Record<string, any>;
    nl: Record<string, any>;
    no: Record<string, any>;
    np: Record<string, any>;
    nz: Record<string, any>;
    object: string;
    om: Record<string, any>;
    pe: Record<string, any>;
    ph: Record<string, any>;
    pl: Record<string, any>;
    pt: Record<string, any>;
    ro: Record<string, any>;
    rs: Record<string, any>;
    ru: Record<string, any>;
    sa: Record<string, any>;
    se: Record<string, any>;
    sg: Record<string, any>;
    si: Record<string, any>;
    sk: Record<string, any>;
    sn: Record<string, any>;
    sr: Record<string, any>;
    status: string;
    th: Record<string, any>;
    tj: Record<string, any>;
    tr: Record<string, any>;
    tw: Record<string, any>;
    tz: Record<string, any>;
    ua: Record<string, any>;
    ug: Record<string, any>;
    us: Record<string, any>;
    uy: Record<string, any>;
    uz: Record<string, any>;
    vn: Record<string, any>;
    za: Record<string, any>;
    zm: Record<string, any>;
    zw: Record<string, any>;
}
export interface RegistrationLoadMatch {
    id: string;
    expand?: any[];
}
export interface RegistrationListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface RegistrationCreateData {
    id: string;
    active_from: number;
    ae: Record<string, any>;
    al: Record<string, any>;
    am: Record<string, any>;
    ao: Record<string, any>;
    at: Record<string, any>;
    au: Record<string, any>;
    aw: Record<string, any>;
    az: Record<string, any>;
    ba: Record<string, any>;
    bb: Record<string, any>;
    bd: Record<string, any>;
    be: Record<string, any>;
    bf: Record<string, any>;
    bg: Record<string, any>;
    bh: Record<string, any>;
    bj: Record<string, any>;
    bs: Record<string, any>;
    by: Record<string, any>;
    ca: Record<string, any>;
    cd: Record<string, any>;
    ch: Record<string, any>;
    cl: Record<string, any>;
    cm: Record<string, any>;
    co: Record<string, any>;
    country: string;
    country_options: Record<string, any>;
    cr: Record<string, any>;
    created: number;
    cv: Record<string, any>;
    cy: Record<string, any>;
    cz: Record<string, any>;
    de: Record<string, any>;
    dk: Record<string, any>;
    ec: Record<string, any>;
    ee: Record<string, any>;
    eg: Record<string, any>;
    es: Record<string, any>;
    et: Record<string, any>;
    expires_at?: number;
    fi: Record<string, any>;
    fr: Record<string, any>;
    gb: Record<string, any>;
    ge: Record<string, any>;
    gn: Record<string, any>;
    gr: Record<string, any>;
    hr: Record<string, any>;
    hu: Record<string, any>;
    ie: Record<string, any>;
    in: Record<string, any>;
    is: Record<string, any>;
    it: Record<string, any>;
    jp: Record<string, any>;
    ke: Record<string, any>;
    kg: Record<string, any>;
    kh: Record<string, any>;
    kr: Record<string, any>;
    kz: Record<string, any>;
    la: Record<string, any>;
    livemode: boolean;
    lk: Record<string, any>;
    lt: Record<string, any>;
    lu: Record<string, any>;
    lv: Record<string, any>;
    ma: Record<string, any>;
    md: Record<string, any>;
    me: Record<string, any>;
    mk: Record<string, any>;
    mr: Record<string, any>;
    mt: Record<string, any>;
    mx: Record<string, any>;
    my: Record<string, any>;
    ng: Record<string, any>;
    nl: Record<string, any>;
    no: Record<string, any>;
    np: Record<string, any>;
    nz: Record<string, any>;
    object: string;
    om: Record<string, any>;
    pe: Record<string, any>;
    ph: Record<string, any>;
    pl: Record<string, any>;
    pt: Record<string, any>;
    ro: Record<string, any>;
    rs: Record<string, any>;
    ru: Record<string, any>;
    sa: Record<string, any>;
    se: Record<string, any>;
    sg: Record<string, any>;
    si: Record<string, any>;
    sk: Record<string, any>;
    sn: Record<string, any>;
    sr: Record<string, any>;
    status: string;
    th: Record<string, any>;
    tj: Record<string, any>;
    tr: Record<string, any>;
    tw: Record<string, any>;
    tz: Record<string, any>;
    ua: Record<string, any>;
    ug: Record<string, any>;
    us: Record<string, any>;
    uy: Record<string, any>;
    uz: Record<string, any>;
    vn: Record<string, any>;
    za: Record<string, any>;
    zm: Record<string, any>;
    zw: Record<string, any>;
}
export interface ReportRun {
    created: number;
    error?: string;
    id: string;
    livemode: boolean;
    object: string;
    parameters: Record<string, any>;
    report_type: string;
    result?: any;
    status: string;
    succeeded_at?: number;
}
export interface ReportRunLoadMatch {
    id: string;
    expand?: any[];
}
export interface ReportRunListMatch {
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface ReportRunCreateData {
    created: number;
    error?: string;
    id: string;
    livemode: boolean;
    object: string;
    parameters: Record<string, any>;
    report_type: string;
    result?: any;
    status: string;
    succeeded_at?: number;
}
export interface ReportType {
    data_available_end: number;
    data_available_start: number;
    default_columns?: any[];
    id: string;
    livemode: boolean;
    name: string;
    object: string;
    updated: number;
    version: number;
}
export interface ReportTypeLoadMatch {
    id: string;
    expand?: any[];
}
export interface ReportTypeListMatch {
    expand?: any[];
}
export interface Request {
    created: number;
    id: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    payment_method: string;
    replacements: any[];
    request_context?: any;
    request_details?: any;
    response_details?: any;
    url?: string;
}
export interface RequestLoadMatch {
    id: string;
    expand?: any[];
}
export interface RequestListMatch {
    created?: Record<string, any>;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface RequestCreateData {
    created: number;
    id: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    payment_method: string;
    replacements: any[];
    request_context?: any;
    request_details?: any;
    response_details?: any;
    url?: string;
}
export interface Reversal {
    amount: number;
    balance_transaction?: any;
    created: number;
    currency: string;
    destination_payment_refund?: any;
    id: string;
    metadata?: Record<string, any>;
    object: string;
    source_refund?: any;
    transfer: any;
}
export interface ReversalLoadMatch {
    id: string;
    transfer_id: string;
    expand?: any[];
}
export interface ReversalListMatch {
    transfer_id: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface ReversalCreateData {
    id?: string;
    transfer_id: string;
    amount: number;
    balance_transaction?: any;
    created: number;
    currency: string;
    destination_payment_refund?: any;
    metadata?: Record<string, any>;
    object: string;
    source_refund?: any;
    transfer: any;
}
export interface Review {
    billing_zip?: string;
    charge?: any;
    closed_reason?: string;
    created: number;
    id: string;
    ip_address?: string;
    ip_address_location?: any;
    livemode: boolean;
    object: string;
    open: boolean;
    opened_reason: string;
    payment_intent?: any;
    reason: string;
    session?: any;
}
export interface ReviewLoadMatch {
    id: string;
    expand?: any[];
}
export interface ReviewListMatch {
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface ReviewCreateData {
    id: string;
    billing_zip?: string;
    charge?: any;
    closed_reason?: string;
    created: number;
    ip_address?: string;
    ip_address_location?: any;
    livemode: boolean;
    object: string;
    open: boolean;
    opened_reason: string;
    payment_intent?: any;
    reason: string;
    session?: any;
    $action?: string;
    [action: string]: any;
}
export interface ScheduledQueryRun {
    created: number;
    data_load_time: number;
    error: Record<string, any>;
    file?: any;
    id: string;
    livemode: boolean;
    object: string;
    result_available_until: number;
    sql: string;
    status: string;
    title: string;
}
export interface ScheduledQueryRunLoadMatch {
    id: string;
    expand?: any[];
}
export interface ScheduledQueryRunListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface Search {
    account_country?: string;
    account_name?: string;
    account_tax_ids?: any[];
    active: boolean;
    address?: any;
    allowed_payment_method_types?: any[];
    amount: number;
    amount_capturable?: number;
    amount_captured: number;
    amount_details?: any;
    amount_due: number;
    amount_overpaid: number;
    amount_paid: number;
    amount_paid_off_stripe: number;
    amount_received?: number;
    amount_refunded: number;
    amount_remaining: number;
    amount_shipping: number;
    application?: any;
    application_fee?: any;
    application_fee_amount?: number;
    application_fee_percent?: number;
    attempt_count: number;
    attempted: boolean;
    auto_advance: boolean;
    automatic_payment_methods?: any;
    automatic_tax: Record<string, any>;
    automatically_finalizes_at?: number;
    balance?: number;
    balance_transaction?: any;
    billing_cycle_anchor: number;
    billing_cycle_anchor_config?: any;
    billing_details: Record<string, any>;
    billing_mode: Record<string, any>;
    billing_reason?: string;
    billing_schedules: any[];
    billing_scheme: string;
    billing_thresholds?: any;
    business_name?: string;
    calculated_statement_descriptor?: string;
    cancel_at?: number;
    cancel_at_period_end: boolean;
    canceled_at?: number;
    cancellation_details?: any;
    cancellation_reason?: string;
    capture_method?: string;
    captured: boolean;
    cash_balance?: any;
    client_secret?: string;
    collection_method: string;
    confirmation_method?: string;
    confirmation_secret?: any;
    created: number;
    currency: string;
    currency_options?: Record<string, any>;
    custom_fields?: any[];
    custom_unit_amount?: any;
    customer?: any;
    customer_account?: string;
    customer_address?: any;
    customer_email?: string;
    customer_name?: string;
    customer_phone?: string;
    customer_shipping?: any;
    customer_tax_exempt?: string;
    customer_tax_ids?: any[];
    days_until_due?: number;
    default_payment_method?: any;
    default_price?: any;
    default_source?: any;
    default_tax_rates: any[];
    delinquent?: boolean;
    description?: string;
    discount?: any;
    discounts: any[];
    disputed: boolean;
    due_date?: number;
    effective_at?: number;
    email?: string;
    ended_at?: number;
    ending_balance?: number;
    excluded_payment_method_types?: any[];
    failure_balance_transaction?: any;
    failure_code?: string;
    failure_message?: string;
    footer?: string;
    fraud_details?: any;
    from_invoice?: any;
    hooks?: Record<string, any>;
    hosted_invoice_url?: string;
    id: string;
    images: any[];
    individual_name?: string;
    invoice_credit_balance?: Record<string, any>;
    invoice_pdf?: string;
    invoice_prefix?: string;
    invoice_settings?: Record<string, any>;
    issuer: Record<string, any>;
    items: Record<string, any>;
    last_finalization_error?: any;
    last_payment_error?: any;
    latest_charge?: any;
    latest_invoice?: any;
    latest_revision?: any;
    lines: Record<string, any>;
    livemode: boolean;
    lookup_key?: string;
    managed_payments?: any;
    marketing_features: any[];
    metadata: Record<string, any>;
    name?: string;
    next_action?: any;
    next_invoice_sequence?: number;
    next_payment_attempt?: number;
    next_pending_invoice_item_invoice?: number;
    nickname?: string;
    number?: string;
    object: string;
    on_behalf_of?: any;
    outcome?: any;
    package_dimensions?: any;
    paid: boolean;
    parent?: any;
    pause_collection?: any;
    payment_details?: Record<string, any>;
    payment_intent?: any;
    payment_method?: string;
    payment_method_configuration_details?: any;
    payment_method_details?: any;
    payment_method_options?: any;
    payment_method_types?: any[];
    payment_record?: any;
    payment_settings: Record<string, any>;
    payments: Record<string, any>;
    pending_invoice_item_interval?: any;
    pending_setup_intent?: any;
    pending_update?: any;
    period_end: number;
    period_start: number;
    phone?: string;
    post_payment_credit_notes_amount: number;
    pre_payment_credit_notes_amount: number;
    preferred_locales?: any[];
    presentment_details: Record<string, any>;
    processing?: any;
    product: any;
    radar_options?: Record<string, any>;
    receipt_email?: string;
    receipt_number?: string;
    receipt_url?: string;
    recurring?: any;
    refunded: boolean;
    refunds: Record<string, any>;
    rendering?: any;
    review?: any;
    schedule?: any;
    setup_future_usage?: string;
    shippable?: boolean;
    shipping?: any;
    shipping_cost?: any;
    shipping_details?: any;
    source_transfer?: any;
    sources: Record<string, any>;
    start_date: number;
    starting_balance: number;
    statement_descriptor?: string;
    statement_descriptor_suffix?: string;
    status: string;
    status_details?: Record<string, any>;
    status_transitions: Record<string, any>;
    subscriptions: Record<string, any>;
    subtotal: number;
    subtotal_excluding_tax?: number;
    tax: Record<string, any>;
    tax_behavior?: string;
    tax_code?: any;
    tax_details?: any;
    tax_exempt?: string;
    tax_ids: Record<string, any>;
    test_clock?: any;
    threshold_reason: Record<string, any>;
    tiers?: any[];
    tiers_mode?: string;
    total: number;
    total_discount_amounts?: any[];
    total_excluding_tax?: number;
    total_pretax_credit_amounts?: any[];
    total_taxes?: any[];
    transfer?: any;
    transfer_data?: any;
    transfer_group?: string;
    transform_quantity?: any;
    trial_end?: number;
    trial_settings?: any;
    trial_start?: number;
    type: string;
    unit_amount?: number;
    unit_amount_decimal?: string;
    unit_label?: string;
    updated: number;
    url?: string;
    webhooks_delivered_at?: number;
}
export interface SearchListMatch {
    expand?: any[];
    limit?: number;
    page?: string;
    query: string;
}
export interface Secret {
    created: number;
    deleted?: boolean;
    expires_at?: number;
    id: string;
    livemode: boolean;
    name: string;
    object: string;
    payload?: string;
    scope: Record<string, any>;
    type: string;
    user?: string;
}
export interface SecretLoadMatch {
    expand?: any[];
    name: string;
    scope: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface SecretListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    scope: Record<string, any>;
    starting_after?: string;
}
export interface SecretCreateData {
    created: number;
    deleted?: boolean;
    expires_at?: number;
    id: string;
    livemode: boolean;
    name: string;
    object: string;
    payload?: string;
    scope: Record<string, any>;
    type: string;
    user?: string;
    $action?: string;
    [action: string]: any;
}
export interface Session {
    account_holder?: any;
    accounts: Record<string, any>;
    adaptive_pricing?: any;
    after_expiration?: any;
    allow_promotion_codes?: boolean;
    allowed_payment_method_types?: any[];
    amount_subtotal?: number;
    amount_total?: number;
    automatic_tax: Record<string, any>;
    bank_account_token: Record<string, any>;
    billing_address_collection?: string;
    branding_settings: Record<string, any>;
    cancel_url?: string;
    client_reference_id?: string;
    client_secret?: string;
    collected_information?: any;
    configuration: any;
    consent?: any;
    consent_collection?: any;
    created: number;
    currency?: string;
    currency_conversion?: any;
    custom_fields: any[];
    custom_text: Record<string, any>;
    customer?: any;
    customer_account?: string;
    customer_creation?: string;
    customer_details?: any;
    customer_email?: string;
    discounts?: any[];
    excluded_payment_method_types?: any[];
    expires_at: number;
    filters?: Record<string, any>;
    flow?: any;
    id: string;
    integration_identifier?: string;
    invoice?: any;
    invoice_creation?: any;
    limits: Record<string, any>;
    line_items: Record<string, any>;
    livemode: boolean;
    locale?: string;
    managed_payments?: any;
    manual_entry?: Record<string, any>;
    metadata?: Record<string, any>;
    mode: string;
    name_collection?: Record<string, any>;
    object: string;
    on_behalf_of?: string;
    optional_items?: any[];
    origin_context?: string;
    payment_intent?: any;
    payment_link?: any;
    payment_method_collection?: string;
    payment_method_configuration_details?: any;
    payment_method_options?: any;
    payment_method_types: any[];
    payment_status: string;
    permissions?: any;
    phone_number_collection: Record<string, any>;
    prefetch?: any[];
    presentment_details: Record<string, any>;
    recovered_from?: string;
    redirect_on_completion?: string;
    return_url?: string;
    saved_payment_method_options?: any;
    setup_intent?: any;
    shipping_address_collection?: any;
    shipping_cost?: any;
    shipping_options: any[];
    status?: string;
    submit_type?: string;
    subscription?: any;
    success_url?: string;
    tax_id_collection: Record<string, any>;
    total_details?: number;
    ui_mode?: string;
    url?: string;
    wallet_options?: any;
}
export interface SessionLoadMatch {
    session: string;
    expand?: any[];
}
export interface SessionListMatch {
    created?: any;
    customer?: string;
    customer_account?: string;
    customer_detail?: Record<string, any>;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    payment_intent?: string;
    payment_link?: string;
    starting_after?: string;
    status?: string;
    subscription?: string;
}
export interface SessionCreateData {
    id: string;
    account_holder?: any;
    accounts: Record<string, any>;
    adaptive_pricing?: any;
    after_expiration?: any;
    allow_promotion_codes?: boolean;
    allowed_payment_method_types?: any[];
    amount_subtotal?: number;
    amount_total?: number;
    automatic_tax: Record<string, any>;
    bank_account_token: Record<string, any>;
    billing_address_collection?: string;
    branding_settings: Record<string, any>;
    cancel_url?: string;
    client_reference_id?: string;
    client_secret?: string;
    collected_information?: any;
    configuration: any;
    consent?: any;
    consent_collection?: any;
    created: number;
    currency?: string;
    currency_conversion?: any;
    custom_fields: any[];
    custom_text: Record<string, any>;
    customer?: any;
    customer_account?: string;
    customer_creation?: string;
    customer_details?: any;
    customer_email?: string;
    discounts?: any[];
    excluded_payment_method_types?: any[];
    expires_at: number;
    filters?: Record<string, any>;
    flow?: any;
    integration_identifier?: string;
    invoice?: any;
    invoice_creation?: any;
    limits: Record<string, any>;
    line_items: Record<string, any>;
    livemode: boolean;
    locale?: string;
    managed_payments?: any;
    manual_entry?: Record<string, any>;
    metadata?: Record<string, any>;
    mode: string;
    name_collection?: Record<string, any>;
    object: string;
    on_behalf_of?: string;
    optional_items?: any[];
    origin_context?: string;
    payment_intent?: any;
    payment_link?: any;
    payment_method_collection?: string;
    payment_method_configuration_details?: any;
    payment_method_options?: any;
    payment_method_types: any[];
    payment_status: string;
    permissions?: any;
    phone_number_collection: Record<string, any>;
    prefetch?: any[];
    presentment_details: Record<string, any>;
    recovered_from?: string;
    redirect_on_completion?: string;
    return_url?: string;
    saved_payment_method_options?: any;
    setup_intent?: any;
    shipping_address_collection?: any;
    shipping_cost?: any;
    shipping_options: any[];
    status?: string;
    submit_type?: string;
    subscription?: any;
    success_url?: string;
    tax_id_collection: Record<string, any>;
    total_details?: number;
    ui_mode?: string;
    url?: string;
    wallet_options?: any;
    $action?: string;
    [action: string]: any;
}
export interface Setting {
    defaults: Record<string, any>;
    head_office?: any;
    livemode: boolean;
    object: string;
    status: string;
    status_details: Record<string, any>;
}
export interface SettingLoadMatch {
    expand?: any[];
}
export interface SettingCreateData {
    defaults: Record<string, any>;
    head_office?: any;
    livemode: boolean;
    object: string;
    status: string;
    status_details: Record<string, any>;
}
export interface Settlement {
    id?: string;
}
export interface SettlementLoadMatch {
    id: string;
    expand?: any[];
}
export interface SettlementCreateData {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface SetupAttempt {
    application?: any;
    attach_to_self?: boolean;
    created: number;
    customer?: any;
    customer_account?: string;
    flow_directions?: any[];
    id: string;
    livemode: boolean;
    object: string;
    on_behalf_of?: any;
    payment_method: any;
    payment_method_details: Record<string, any>;
    setup_error?: any;
    setup_intent: any;
    status: string;
    usage: string;
}
export interface SetupAttemptListMatch {
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    setup_intent: string;
    starting_after?: string;
}
export interface SetupIntent {
    allowed_payment_method_types?: any[];
    application?: any;
    attach_to_self?: boolean;
    automatic_payment_methods?: any;
    cancellation_reason?: string;
    client_secret?: string;
    created: number;
    customer?: any;
    customer_account?: string;
    description?: string;
    excluded_payment_method_types?: any[];
    flow_directions?: any[];
    id: string;
    last_setup_error?: any;
    latest_attempt?: any;
    livemode: boolean;
    managed_payments?: any;
    mandate?: any;
    metadata?: Record<string, any>;
    next_action?: any;
    object: string;
    on_behalf_of?: any;
    payment_method?: any;
    payment_method_configuration_details?: any;
    payment_method_options?: any;
    payment_method_types: any[];
    single_use_mandate?: any;
    status: string;
    usage: string;
}
export interface SetupIntentLoadMatch {
    id: string;
    client_secret?: string;
    expand?: any[];
}
export interface SetupIntentListMatch {
    attach_to_self?: boolean;
    created?: any;
    customer?: string;
    customer_account?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    payment_method?: string;
    starting_after?: string;
}
export interface SetupIntentCreateData {
    id: string;
    allowed_payment_method_types?: any[];
    application?: any;
    attach_to_self?: boolean;
    automatic_payment_methods?: any;
    cancellation_reason?: string;
    client_secret?: string;
    created: number;
    customer?: any;
    customer_account?: string;
    description?: string;
    excluded_payment_method_types?: any[];
    flow_directions?: any[];
    last_setup_error?: any;
    latest_attempt?: any;
    livemode: boolean;
    managed_payments?: any;
    mandate?: any;
    metadata?: Record<string, any>;
    next_action?: any;
    object: string;
    on_behalf_of?: any;
    payment_method?: any;
    payment_method_configuration_details?: any;
    payment_method_options?: any;
    payment_method_types: any[];
    single_use_mandate?: any;
    status: string;
    usage: string;
    $action?: string;
    [action: string]: any;
}
export interface ShippingRate {
    active: boolean;
    created: number;
    delivery_estimate?: any;
    display_name?: string;
    fixed_amount: Record<string, any>;
    id: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    tax_behavior?: string;
    tax_code?: any;
    type: string;
}
export interface ShippingRateLoadMatch {
    id: string;
    expand?: any[];
}
export interface ShippingRateListMatch {
    active?: boolean;
    created?: any;
    currency?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface ShippingRateCreateData {
    id: string;
    active: boolean;
    created: number;
    delivery_estimate?: any;
    display_name?: string;
    fixed_amount: Record<string, any>;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    tax_behavior?: string;
    tax_code?: any;
    type: string;
}
export interface SigmaApiQuery {
    created: number;
    id: string;
    livemode: boolean;
    name: string;
    object: string;
    sql: string;
}
export interface SigmaApiQueryCreateData {
    id: string;
    created: number;
    livemode: boolean;
    name: string;
    object: string;
    sql: string;
}
export interface Source {
    ach_credit_transfer?: Record<string, any>;
    ach_debit?: Record<string, any>;
    acss_debit?: Record<string, any>;
    alipay?: Record<string, any>;
    allow_redisplay?: boolean;
    amount?: number;
    au_becs_debit?: Record<string, any>;
    bancontact?: Record<string, any>;
    card?: Record<string, any>;
    card_present?: Record<string, any>;
    client_secret: string;
    code_verification: Record<string, any>;
    created: number;
    currency?: string;
    customer?: string;
    data: any[];
    eps?: Record<string, any>;
    flow: string;
    giropay?: Record<string, any>;
    has_more: boolean;
    id: string;
    ideal?: Record<string, any>;
    klarna?: Record<string, any>;
    livemode: boolean;
    metadata?: Record<string, any>;
    multibanco?: Record<string, any>;
    object: string;
    owner?: any;
    p24?: Record<string, any>;
    receiver: Record<string, any>;
    redirect: Record<string, any>;
    sepa_debit?: Record<string, any>;
    sofort?: Record<string, any>;
    source_order: Record<string, any>;
    statement_descriptor?: string;
    status: string;
    three_d_secure?: Record<string, any>;
    type: string;
    url: string;
    usage?: string;
    wechat?: Record<string, any>;
}
export interface SourceLoadMatch {
    id: string;
    client_secret?: string;
    expand?: any[];
    customer_id?: string;
}
export interface SourceListMatch {
    customer_id: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    object?: string;
    starting_after?: string;
}
export interface SourceCreateData {
    id: string;
    ach_credit_transfer?: Record<string, any>;
    ach_debit?: Record<string, any>;
    acss_debit?: Record<string, any>;
    alipay?: Record<string, any>;
    allow_redisplay?: boolean;
    amount?: number;
    au_becs_debit?: Record<string, any>;
    bancontact?: Record<string, any>;
    card?: Record<string, any>;
    card_present?: Record<string, any>;
    client_secret: string;
    code_verification: Record<string, any>;
    created: number;
    currency?: string;
    customer?: string;
    data: any[];
    eps?: Record<string, any>;
    flow: string;
    giropay?: Record<string, any>;
    has_more: boolean;
    ideal?: Record<string, any>;
    klarna?: Record<string, any>;
    livemode: boolean;
    metadata?: Record<string, any>;
    multibanco?: Record<string, any>;
    object: string;
    owner?: any;
    p24?: Record<string, any>;
    receiver: Record<string, any>;
    redirect: Record<string, any>;
    sepa_debit?: Record<string, any>;
    sofort?: Record<string, any>;
    source_order: Record<string, any>;
    statement_descriptor?: string;
    status: string;
    three_d_secure?: Record<string, any>;
    type: string;
    url: string;
    usage?: string;
    wechat?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface SourceRemoveMatch {
    customer_id: string;
    id: string;
}
export interface SourceMandateNotification {
    acss_debit?: Record<string, any>;
    amount?: number;
    bacs_debit?: Record<string, any>;
    created: number;
    id: string;
    livemode: boolean;
    object: string;
    reason: string;
    sepa_debit?: Record<string, any>;
    source: Record<string, any>;
    status: string;
    type: string;
}
export interface SourceMandateNotificationLoadMatch {
    id: string;
    source_id: string;
    expand?: any[];
}
export interface SourceTransaction {
    ach_credit_transfer?: Record<string, any>;
    amount: number;
    chf_credit_transfer?: Record<string, any>;
    created: number;
    currency: string;
    gbp_credit_transfer?: Record<string, any>;
    id: string;
    livemode: boolean;
    object: string;
    paper_check?: Record<string, any>;
    sepa_credit_transfer?: Record<string, any>;
    source: string;
    status: string;
    type: string;
}
export interface SourceTransactionLoadMatch {
    id: string;
    source_id: string;
    expand?: any[];
}
export interface SourceTransactionListMatch {
    id: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface Subscription {
    application?: any;
    application_fee_percent?: number;
    automatic_tax: Record<string, any>;
    billing_cycle_anchor: number;
    billing_cycle_anchor_config?: any;
    billing_mode: Record<string, any>;
    billing_schedules: any[];
    billing_thresholds?: any;
    cancel_at?: number;
    cancel_at_period_end: boolean;
    canceled_at?: number;
    cancellation_details?: any;
    collection_method: string;
    created: number;
    currency: string;
    customer: any;
    customer_account?: string;
    days_until_due?: number;
    default_payment_method?: any;
    default_source?: any;
    default_tax_rates?: any[];
    description?: string;
    discounts: any[];
    ended_at?: number;
    id: string;
    invoice_settings: Record<string, any>;
    items: Record<string, any>;
    latest_invoice?: any;
    livemode: boolean;
    managed_payments?: any;
    metadata: Record<string, any>;
    next_pending_invoice_item_invoice?: number;
    object: string;
    on_behalf_of?: any;
    pause_collection?: any;
    payment_settings?: any;
    pending_invoice_item_interval?: any;
    pending_setup_intent?: any;
    pending_update?: any;
    presentment_details: Record<string, any>;
    schedule?: any;
    start_date: number;
    status: string;
    status_details: Record<string, any>;
    test_clock?: any;
    transfer_data?: any;
    trial_end?: number;
    trial_settings?: any;
    trial_start?: number;
}
export interface SubscriptionLoadMatch {
    customer_id?: string;
    id: string;
    expand?: any[];
}
export interface SubscriptionListMatch {
    automatic_tax?: Record<string, any>;
    collection_method?: string;
    created?: any;
    current_period_end?: any;
    current_period_start?: any;
    customer?: string;
    customer_account?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    price?: string;
    starting_after?: string;
    status?: string;
    test_clock?: string;
}
export interface SubscriptionCreateData {
    id: string;
    application?: any;
    application_fee_percent?: number;
    automatic_tax: Record<string, any>;
    billing_cycle_anchor: number;
    billing_cycle_anchor_config?: any;
    billing_mode: Record<string, any>;
    billing_schedules: any[];
    billing_thresholds?: any;
    cancel_at?: number;
    cancel_at_period_end: boolean;
    canceled_at?: number;
    cancellation_details?: any;
    collection_method: string;
    created: number;
    currency: string;
    customer: any;
    customer_account?: string;
    days_until_due?: number;
    default_payment_method?: any;
    default_source?: any;
    default_tax_rates?: any[];
    description?: string;
    discounts: any[];
    ended_at?: number;
    invoice_settings: Record<string, any>;
    items: Record<string, any>;
    latest_invoice?: any;
    livemode: boolean;
    managed_payments?: any;
    metadata: Record<string, any>;
    next_pending_invoice_item_invoice?: number;
    object: string;
    on_behalf_of?: any;
    pause_collection?: any;
    payment_settings?: any;
    pending_invoice_item_interval?: any;
    pending_setup_intent?: any;
    pending_update?: any;
    presentment_details: Record<string, any>;
    schedule?: any;
    start_date: number;
    status: string;
    status_details: Record<string, any>;
    test_clock?: any;
    transfer_data?: any;
    trial_end?: number;
    trial_settings?: any;
    trial_start?: number;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionRemoveMatch {
    customer_id?: string;
    id: string;
}
export interface SubscriptionItem {
    billed_until?: number;
    billing_thresholds?: any;
    created: number;
    current_period_end: number;
    current_period_start: number;
    current_trial?: any;
    discounts: any[];
    id: string;
    metadata: Record<string, any>;
    object: string;
    price: Record<string, any>;
    quantity?: number;
    subscription: string;
    tax_rates?: any[];
}
export interface SubscriptionItemLoadMatch {
    id: string;
    expand?: any[];
}
export interface SubscriptionItemListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    subscription: string;
}
export interface SubscriptionItemCreateData {
    id: string;
    billed_until?: number;
    billing_thresholds?: any;
    created: number;
    current_period_end: number;
    current_period_start: number;
    current_trial?: any;
    discounts: any[];
    metadata: Record<string, any>;
    object: string;
    price: Record<string, any>;
    quantity?: number;
    subscription: string;
    tax_rates?: any[];
}
export interface SubscriptionSchedule {
    application?: any;
    billing_mode: Record<string, any>;
    canceled_at?: number;
    completed_at?: number;
    created: number;
    current_phase?: any;
    customer: any;
    customer_account?: string;
    default_settings: Record<string, any>;
    end_behavior: string;
    id: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    pause_schedules?: any[];
    phases: any[];
    released_at?: number;
    released_subscription?: string;
    status: string;
    subscription?: any;
    test_clock?: any;
}
export interface SubscriptionScheduleLoadMatch {
    id: string;
    expand?: any[];
}
export interface SubscriptionScheduleListMatch {
    canceled_at?: any;
    completed_at?: any;
    created?: any;
    customer?: string;
    customer_account?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    released_at?: any;
    scheduled?: boolean;
    starting_after?: string;
}
export interface SubscriptionScheduleCreateData {
    id: string;
    application?: any;
    billing_mode: Record<string, any>;
    canceled_at?: number;
    completed_at?: number;
    created: number;
    current_phase?: any;
    customer: any;
    customer_account?: string;
    default_settings: Record<string, any>;
    end_behavior: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    pause_schedules?: any[];
    phases: any[];
    released_at?: number;
    released_subscription?: string;
    status: string;
    subscription?: any;
    test_clock?: any;
    $action?: string;
    [action: string]: any;
}
export interface Supplier {
    id: string;
    info_url: string;
    livemode: boolean;
    locations: any[];
    name: string;
    object: string;
    removal_pathway: string;
}
export interface SupplierLoadMatch {
    id: string;
    expand?: any[];
}
export interface SupplierListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface TaxCode {
    description: string;
    id: string;
    name: string;
    object: string;
    requirements?: any;
}
export interface TaxCodeLoadMatch {
    id: string;
    expand?: any[];
}
export interface TaxCodeListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface TaxId {
    country?: string;
    created: number;
    customer?: any;
    customer_account?: string;
    id: string;
    livemode: boolean;
    object: string;
    owner?: any;
    type: string;
    value: string;
    verification?: any;
}
export interface TaxIdLoadMatch {
    customer_id?: string;
    id: string;
    expand?: any[];
}
export interface TaxIdListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    owner?: Record<string, any>;
    starting_after?: string;
}
export interface TaxIdCreateData {
    country?: string;
    created: number;
    customer?: any;
    customer_account?: string;
    id: string;
    livemode: boolean;
    object: string;
    owner?: any;
    type: string;
    value: string;
    verification?: any;
}
export interface TaxIdRemoveMatch {
    customer_id?: string;
    id: string;
}
export interface TaxRate {
    active: boolean;
    country?: string;
    created: number;
    description?: string;
    display_name: string;
    effective_percentage?: number;
    flat_amount?: any;
    id: string;
    inclusive: boolean;
    jurisdiction?: string;
    jurisdiction_level?: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    percentage: number;
    rate_type?: string;
    state?: string;
    tax_type?: string;
}
export interface TaxRateLoadMatch {
    id: string;
    expand?: any[];
}
export interface TaxRateListMatch {
    active?: boolean;
    created?: any;
    ending_before?: string;
    expand?: any[];
    inclusive?: boolean;
    limit?: number;
    starting_after?: string;
}
export interface TaxRateCreateData {
    id: string;
    active: boolean;
    country?: string;
    created: number;
    description?: string;
    display_name: string;
    effective_percentage?: number;
    flat_amount?: any;
    inclusive: boolean;
    jurisdiction?: string;
    jurisdiction_level?: string;
    livemode: boolean;
    metadata?: Record<string, any>;
    object: string;
    percentage: number;
    rate_type?: string;
    state?: string;
    tax_type?: string;
}
export interface TestClock {
    advancing: Record<string, any>;
    created: number;
    deletes_after: number;
    frozen_time: number;
    id: string;
    livemode: boolean;
    name?: string;
    object: string;
    status: string;
    status_details: Record<string, any>;
}
export interface TestClockLoadMatch {
    id: string;
    expand?: any[];
}
export interface TestClockListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface TestClockCreateData {
    advancing: Record<string, any>;
    created: number;
    deletes_after: number;
    frozen_time: number;
    id: string;
    livemode: boolean;
    name?: string;
    object: string;
    status: string;
    status_details: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface TestClockRemoveMatch {
    id: string;
}
export interface Token {
    bank_account: Record<string, any>;
    card: any;
    client_ip?: string;
    created: number;
    device_fingerprint?: string;
    id: string;
    last4?: string;
    livemode: boolean;
    network: string;
    network_data: Record<string, any>;
    network_updated_at: number;
    object: string;
    status: string;
    type: string;
    used: boolean;
    wallet_provider?: string;
}
export interface TokenLoadMatch {
    id: string;
    expand?: any[];
}
export interface TokenListMatch {
    card: string;
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface TokenCreateData {
    id: string;
    bank_account: Record<string, any>;
    card: any;
    client_ip?: string;
    created: number;
    device_fingerprint?: string;
    last4?: string;
    livemode: boolean;
    network: string;
    network_data: Record<string, any>;
    network_updated_at: number;
    object: string;
    status: string;
    type: string;
    used: boolean;
    wallet_provider?: string;
}
export interface Topup {
    amount: number;
    balance_transaction?: any;
    created: number;
    currency: string;
    description?: string;
    expected_availability_date?: number;
    failure_code?: string;
    failure_message?: string;
    id: string;
    initiated_by?: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    payment_method?: any;
    payment_method_options?: any;
    source?: any;
    statement_descriptor?: string;
    status: string;
    transfer_group?: string;
}
export interface TopupLoadMatch {
    id: string;
    expand?: any[];
}
export interface TopupListMatch {
    amount?: number;
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    status?: string;
}
export interface TopupCreateData {
    id: string;
    amount: number;
    balance_transaction?: any;
    created: number;
    currency: string;
    description?: string;
    expected_availability_date?: number;
    failure_code?: string;
    failure_message?: string;
    initiated_by?: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    payment_method?: any;
    payment_method_options?: any;
    source?: any;
    statement_descriptor?: string;
    status: string;
    transfer_group?: string;
    $action?: string;
    [action: string]: any;
}
export interface Transaction {
    account: string;
    amount: number;
    amount_details?: any;
    authorization?: any;
    balance_impact: Record<string, any>;
    balance_transaction?: any;
    card: any;
    cardholder?: any;
    created: number;
    currency: string;
    customer?: string;
    customer_details: Record<string, any>;
    description: string;
    dispute?: any;
    entries: Record<string, any>;
    financial_account: string;
    flow?: string;
    flow_details?: any;
    flow_type: string;
    id: string;
    line_items: Record<string, any>;
    livemode: boolean;
    merchant_amount: number;
    merchant_currency: string;
    merchant_data: Record<string, any>;
    metadata: Record<string, any>;
    network_data?: any;
    object: string;
    posted_at?: number;
    purchase_details?: any;
    reference: string;
    reversal?: any;
    ship_from_details?: any;
    shipping_cost?: any;
    status: string;
    status_transitions: Record<string, any>;
    tax_date: number;
    token?: string;
    transacted_at: number;
    transaction_refresh: string;
    treasury?: any;
    type: string;
    updated: number;
    void_at?: number;
    wallet?: string;
}
export interface TransactionLoadMatch {
    id: string;
    expand?: any[];
}
export interface TransactionListMatch {
    created?: any;
    ending_before?: string;
    expand?: any[];
    financial_account: string;
    limit?: number;
    order_by?: string;
    starting_after?: string;
    status?: string;
    status_transition?: Record<string, any>;
}
export interface TransactionCreateData {
    id: string;
    account: string;
    amount: number;
    amount_details?: any;
    authorization?: any;
    balance_impact: Record<string, any>;
    balance_transaction?: any;
    card: any;
    cardholder?: any;
    created: number;
    currency: string;
    customer?: string;
    customer_details: Record<string, any>;
    description: string;
    dispute?: any;
    entries: Record<string, any>;
    financial_account: string;
    flow?: string;
    flow_details?: any;
    flow_type: string;
    line_items: Record<string, any>;
    livemode: boolean;
    merchant_amount: number;
    merchant_currency: string;
    merchant_data: Record<string, any>;
    metadata: Record<string, any>;
    network_data?: any;
    object: string;
    posted_at?: number;
    purchase_details?: any;
    reference: string;
    reversal?: any;
    ship_from_details?: any;
    shipping_cost?: any;
    status: string;
    status_transitions: Record<string, any>;
    tax_date: number;
    token?: string;
    transacted_at: number;
    transaction_refresh: string;
    treasury?: any;
    type: string;
    updated: number;
    void_at?: number;
    wallet?: string;
    $action?: string;
    [action: string]: any;
}
export interface TransactionEntry {
    balance_impact: Record<string, any>;
    created: number;
    currency: string;
    effective_at: number;
    financial_account: string;
    flow?: string;
    flow_details?: any;
    flow_type: string;
    id: string;
    livemode: boolean;
    object: string;
    transaction: any;
    type: string;
}
export interface TransactionEntryLoadMatch {
    id: string;
    expand?: any[];
}
export interface TransactionEntryListMatch {
    created?: any;
    effective_at?: any;
    ending_before?: string;
    expand?: any[];
    financial_account: string;
    limit?: number;
    order_by?: string;
    starting_after?: string;
    transaction?: string;
}
export interface Transfer {
    amount: number;
    amount_reversed: number;
    balance_transaction?: any;
    created: number;
    currency: string;
    description?: string;
    destination?: any;
    destination_payment?: any;
    id: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    reversals: Record<string, any>;
    reversed: boolean;
    source_transaction?: any;
    source_type?: string;
    transfer_group?: string;
}
export interface TransferLoadMatch {
    id: string;
    expand?: any[];
}
export interface TransferListMatch {
    created?: any;
    destination?: string;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    transfer_group?: string;
}
export interface TransferCreateData {
    id: string;
    amount: number;
    amount_reversed: number;
    balance_transaction?: any;
    created: number;
    currency: string;
    description?: string;
    destination?: any;
    destination_payment?: any;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    reversals: Record<string, any>;
    reversed: boolean;
    source_transaction?: any;
    source_type?: string;
    transfer_group?: string;
}
export interface TrialOffer {
    active: boolean;
    duration: Record<string, any>;
    end_behavior: Record<string, any>;
    id: string;
    livemode: boolean;
    nickname?: string;
    object: string;
    price: number;
}
export interface TrialOfferLoadMatch {
    id: string;
    expand?: any[];
}
export interface TrialOfferListMatch {
    active?: boolean;
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    price?: any[];
    starting_after?: string;
}
export interface TrialOfferCreateData {
    id: string;
    active: boolean;
    duration: Record<string, any>;
    end_behavior: Record<string, any>;
    livemode: boolean;
    nickname?: string;
    object: string;
    price: number;
}
export interface ValueList {
    alias: string;
    created: number;
    created_by: string;
    id: string;
    item_type: string;
    list_items: Record<string, any>;
    livemode: boolean;
    metadata: Record<string, any>;
    name: string;
    object: string;
}
export interface ValueListLoadMatch {
    id: string;
    expand?: any[];
}
export interface ValueListListMatch {
    alia?: string;
    contain?: string;
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface ValueListCreateData {
    id: string;
    alias: string;
    created: number;
    created_by: string;
    item_type: string;
    list_items: Record<string, any>;
    livemode: boolean;
    metadata: Record<string, any>;
    name: string;
    object: string;
}
export interface ValueListRemoveMatch {
    id: string;
}
export interface ValueListItem {
    created: number;
    created_by: string;
    id: string;
    livemode: boolean;
    object: string;
    value: string;
    value_list: string;
}
export interface ValueListItemLoadMatch {
    id: string;
    expand?: any[];
}
export interface ValueListItemListMatch {
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    value?: string;
    value_list: string;
}
export interface ValueListItemCreateData {
    created: number;
    created_by: string;
    id: string;
    livemode: boolean;
    object: string;
    value: string;
    value_list: string;
}
export interface ValueListItemRemoveMatch {
    id: string;
}
export interface VerificationReport {
    client_reference_id?: string;
    created: number;
    document: Record<string, any>;
    email: Record<string, any>;
    id: string;
    id_number: Record<string, any>;
    livemode: boolean;
    object: string;
    options?: Record<string, any>;
    phone: Record<string, any>;
    selfie: Record<string, any>;
    type: string;
    verification_flow?: string;
    verification_session?: string;
}
export interface VerificationReportLoadMatch {
    id: string;
    expand?: any[];
}
export interface VerificationReportListMatch {
    client_reference_id?: string;
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
    type?: string;
    verification_session?: string;
}
export interface VerificationSession {
    client_reference_id?: string;
    client_secret?: string;
    created: number;
    id: string;
    last_error?: any;
    last_verification_report?: any;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    options?: any;
    provided_details?: any;
    redaction?: any;
    related_customer?: string;
    related_customer_account?: string;
    related_person: Record<string, any>;
    status: string;
    type: string;
    url?: string;
    verification_flow?: string;
    verified_outputs?: any;
}
export interface VerificationSessionLoadMatch {
    id: string;
    expand?: any[];
}
export interface VerificationSessionListMatch {
    client_reference_id?: string;
    created?: any;
    ending_before?: string;
    expand?: any[];
    limit?: number;
    related_customer?: string;
    related_customer_account?: string;
    starting_after?: string;
    status?: string;
}
export interface VerificationSessionCreateData {
    id: string;
    client_reference_id?: string;
    client_secret?: string;
    created: number;
    last_error?: any;
    last_verification_report?: any;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    options?: any;
    provided_details?: any;
    redaction?: any;
    related_customer?: string;
    related_customer_account?: string;
    related_person: Record<string, any>;
    status: string;
    type: string;
    url?: string;
    verification_flow?: string;
    verified_outputs?: any;
    $action?: string;
    [action: string]: any;
}
export interface WebhookEndpoint {
    api_version?: string;
    application?: string;
    created: number;
    description?: string;
    enabled_events: any[];
    id: string;
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    secret?: string;
    status: string;
    url: string;
}
export interface WebhookEndpointLoadMatch {
    id: string;
    expand?: any[];
}
export interface WebhookEndpointListMatch {
    ending_before?: string;
    expand?: any[];
    limit?: number;
    starting_after?: string;
}
export interface WebhookEndpointCreateData {
    id: string;
    api_version?: string;
    application?: string;
    created: number;
    description?: string;
    enabled_events: any[];
    livemode: boolean;
    metadata: Record<string, any>;
    object: string;
    secret?: string;
    status: string;
    url: string;
}
