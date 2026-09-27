// Typed models for the Stripe SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Account
 * @property {*} [account_holder]
 * @property {Array} [account_numbers]
 * @property {*} [balance]
 * @property {*} [balance_refresh]
 * @property {*} [business_profile]
 * @property {string} [business_type]
 * @property {Object} [capabilities]
 * @property {string} category
 * @property {boolean} [charges_enabled]
 * @property {Object} [company]
 * @property {Object} controller
 * @property {string} [country]
 * @property {number} created
 * @property {string} [default_currency]
 * @property {boolean} [details_submitted]
 * @property {string} [display_name]
 * @property {string} [email]
 * @property {Object} external_accounts
 * @property {Object} [future_requirements]
 * @property {*} [groups]
 * @property {string} id
 * @property {Object} individual
 * @property {string} institution_name
 * @property {string} [last4]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {*} [ownership]
 * @property {*} [ownership_refresh]
 * @property {boolean} [payouts_enabled]
 * @property {Array} [permissions]
 * @property {Object} [requirements]
 * @property {*} [settings]
 * @property {string} status
 * @property {Object} [status_details]
 * @property {string} subcategory
 * @property {Array} [subscriptions]
 * @property {Array} supported_payment_method_types
 * @property {Object} [tos_acceptance]
 * @property {*} [transaction_refresh]
 * @property {string} [type]
 */

/**
 * @typedef {Object} AccountLoadMatch
 * @property {string} account
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} AccountListMatch
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} AccountCreateData
 * @property {string} id
 * @property {*} [account_holder]
 * @property {Array} [account_numbers]
 * @property {*} [balance]
 * @property {*} [balance_refresh]
 * @property {*} [business_profile]
 * @property {string} [business_type]
 * @property {Object} [capabilities]
 * @property {string} category
 * @property {boolean} [charges_enabled]
 * @property {Object} [company]
 * @property {Object} controller
 * @property {string} [country]
 * @property {number} created
 * @property {string} [default_currency]
 * @property {boolean} [details_submitted]
 * @property {string} [display_name]
 * @property {string} [email]
 * @property {Object} external_accounts
 * @property {Object} [future_requirements]
 * @property {*} [groups]
 * @property {Object} individual
 * @property {string} institution_name
 * @property {string} [last4]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {*} [ownership]
 * @property {*} [ownership_refresh]
 * @property {boolean} [payouts_enabled]
 * @property {Array} [permissions]
 * @property {Object} [requirements]
 * @property {*} [settings]
 * @property {string} status
 * @property {Object} [status_details]
 * @property {string} subcategory
 * @property {Array} [subscriptions]
 * @property {Array} supported_payment_method_types
 * @property {Object} [tos_acceptance]
 * @property {*} [transaction_refresh]
 * @property {string} [type]
 */

/**
 * @typedef {Object} AccountLink
 * @property {number} created
 * @property {number} expires_at
 * @property {string} object
 * @property {string} url
 */

/**
 * @typedef {Object} AccountLinkCreateData
 * @property {number} created
 * @property {number} expires_at
 * @property {string} object
 * @property {string} url
 */

/**
 * @typedef {Object} AccountOwner
 * @property {string} [email]
 * @property {string} id
 * @property {string} name
 * @property {string} object
 * @property {string} ownership
 * @property {string} [phone]
 * @property {string} [raw_address]
 * @property {number} [refreshed_at]
 */

/**
 * @typedef {Object} AccountOwnerListMatch
 * @property {string} id
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} ownership
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} AccountSession
 * @property {Object} account_management
 * @property {Object} account_onboarding
 * @property {Object} balance_report
 * @property {Object} balances
 * @property {Object} disputes_list
 * @property {Object} documents
 * @property {Object} financial_account
 * @property {Object} financial_account_transactions
 * @property {Object} instant_payouts_promotion
 * @property {Object} issuing_card
 * @property {Object} issuing_cards_list
 * @property {Object} notification_banner
 * @property {Object} payment_details
 * @property {Object} payment_disputes
 * @property {Object} payment_method_settings
 * @property {Object} payments
 * @property {Object} payout_details
 * @property {Object} payout_reconciliation_report
 * @property {Object} payouts
 * @property {Object} payouts_list
 * @property {Object} tax_registrations
 * @property {Object} tax_settings
 */

/**
 * @typedef {Object} AccountSessionCreateData
 * @property {Object} account_management
 * @property {Object} account_onboarding
 * @property {Object} balance_report
 * @property {Object} balances
 * @property {Object} disputes_list
 * @property {Object} documents
 * @property {Object} financial_account
 * @property {Object} financial_account_transactions
 * @property {Object} instant_payouts_promotion
 * @property {Object} issuing_card
 * @property {Object} issuing_cards_list
 * @property {Object} notification_banner
 * @property {Object} payment_details
 * @property {Object} payment_disputes
 * @property {Object} payment_method_settings
 * @property {Object} payments
 * @property {Object} payout_details
 * @property {Object} payout_reconciliation_report
 * @property {Object} payouts
 * @property {Object} payouts_list
 * @property {Object} tax_registrations
 * @property {Object} tax_settings
 */

/**
 * @typedef {Object} ActiveEntitlement
 * @property {*} feature
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} lookup_key
 * @property {string} object
 */

/**
 * @typedef {Object} ActiveEntitlementLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ActiveEntitlementListMatch
 * @property {string} customer
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} Alert
 * @property {string} alert_type
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {string} [status]
 * @property {string} title
 * @property {*} [usage_threshold]
 */

/**
 * @typedef {Object} AlertLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} AlertListMatch
 * @property {string} [alert_type]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [meter]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} AlertCreateData
 * @property {string} alert_type
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {string} [status]
 * @property {string} title
 * @property {*} [usage_threshold]
 */

/**
 * @typedef {Object} ApplePayDomain
 * @property {number} created
 * @property {string} domain_name
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 */

/**
 * @typedef {Object} ApplePayDomainLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ApplePayDomainCreateData
 * @property {number} created
 * @property {string} domain_name
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 */

/**
 * @typedef {Object} ApplicationFee
 * @property {*} account
 * @property {number} amount
 * @property {number} amount_refunded
 * @property {*} application
 * @property {*} [balance_transaction]
 * @property {*} charge
 * @property {number} created
 * @property {string} currency
 * @property {*} [fee_source]
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {*} [originating_transaction]
 * @property {boolean} refunded
 * @property {Object} refunds
 */

/**
 * @typedef {Object} ApplicationFeeLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ApplicationFeeListMatch
 * @property {string} [charge]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} ApplicationFeeCreateData
 * @property {string} id
 * @property {*} account
 * @property {number} amount
 * @property {number} amount_refunded
 * @property {*} application
 * @property {*} [balance_transaction]
 * @property {*} charge
 * @property {number} created
 * @property {string} currency
 * @property {*} [fee_source]
 * @property {boolean} livemode
 * @property {string} object
 * @property {*} [originating_transaction]
 * @property {boolean} refunded
 * @property {Object} refunds
 */

/**
 * @typedef {Object} Association
 */

/**
 * @typedef {Object} AssociationListMatch
 * @property {Array} [expand]
 * @property {string} payment_intent
 */

/**
 * @typedef {Object} Authentication
 * @property {Object} [acquirer_details]
 * @property {number} [amount]
 * @property {string} [challenge_url]
 * @property {Object} channel
 * @property {number} created
 * @property {string} [currency]
 * @property {string} directory_server
 * @property {string} [fingerprinting_url]
 * @property {Object} flow_preference
 * @property {Object} future_usage
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} message_category
 * @property {Object} [metadata]
 * @property {string} object
 * @property {string} [outcome]
 * @property {Object} outcome_details
 * @property {*} payment_method
 * @property {string} [reason]
 * @property {Object} [shipping_address]
 * @property {string} status
 */

/**
 * @typedef {Object} AuthenticationLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} AuthenticationListMatch
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} AuthenticationCreateData
 * @property {Object} [acquirer_details]
 * @property {number} [amount]
 * @property {string} [challenge_url]
 * @property {Object} channel
 * @property {number} created
 * @property {string} [currency]
 * @property {string} directory_server
 * @property {string} [fingerprinting_url]
 * @property {Object} flow_preference
 * @property {Object} future_usage
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} message_category
 * @property {Object} [metadata]
 * @property {string} object
 * @property {string} [outcome]
 * @property {Object} outcome_details
 * @property {*} payment_method
 * @property {string} [reason]
 * @property {Object} [shipping_address]
 * @property {string} status
 */

/**
 * @typedef {Object} Authorization
 * @property {number} amount
 * @property {*} [amount_details]
 * @property {boolean} approved
 * @property {string} authorization_method
 * @property {Array} balance_transactions
 * @property {Object} card
 * @property {string} [card_presence]
 * @property {*} [cardholder]
 * @property {number} created
 * @property {string} currency
 * @property {*} [fleet]
 * @property {Array} [fraud_challenges]
 * @property {*} [fuel]
 * @property {string} id
 * @property {boolean} livemode
 * @property {number} merchant_amount
 * @property {string} merchant_currency
 * @property {Object} merchant_data
 * @property {Object} metadata
 * @property {*} [network_data]
 * @property {string} object
 * @property {*} [pending_request]
 * @property {Array} request_history
 * @property {string} status
 * @property {string} [token]
 * @property {Array} transactions
 * @property {*} [treasury]
 * @property {Object} verification_data
 * @property {boolean} [verified_by_fraud_challenge]
 * @property {string} [wallet]
 */

/**
 * @typedef {Object} AuthorizationLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} AuthorizationListMatch
 * @property {string} [card]
 * @property {string} [cardholder]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} AuthorizationCreateData
 * @property {string} id
 * @property {number} amount
 * @property {*} [amount_details]
 * @property {boolean} approved
 * @property {string} authorization_method
 * @property {Array} balance_transactions
 * @property {Object} card
 * @property {string} [card_presence]
 * @property {*} [cardholder]
 * @property {number} created
 * @property {string} currency
 * @property {*} [fleet]
 * @property {Array} [fraud_challenges]
 * @property {*} [fuel]
 * @property {boolean} livemode
 * @property {number} merchant_amount
 * @property {string} merchant_currency
 * @property {Object} merchant_data
 * @property {Object} metadata
 * @property {*} [network_data]
 * @property {string} object
 * @property {*} [pending_request]
 * @property {Array} request_history
 * @property {string} status
 * @property {string} [token]
 * @property {Array} transactions
 * @property {*} [treasury]
 * @property {Object} verification_data
 * @property {boolean} [verified_by_fraud_challenge]
 * @property {string} [wallet]
 */

/**
 * @typedef {Object} Balance
 * @property {Array} available
 * @property {Array} [connect_reserved]
 * @property {Array} [instant_available]
 * @property {Object} issuing
 * @property {boolean} livemode
 * @property {string} object
 * @property {Array} pending
 * @property {Object} refund_and_dispute_prefunding
 */

/**
 * @typedef {Object} BalanceListMatch
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} BalanceSetting
 * @property {boolean} [debit_negative_balances]
 * @property {*} [payouts]
 * @property {Object} settlement_timing
 */

/**
 * @typedef {Object} BalanceSettingLoadMatch
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} BalanceSettingCreateData
 * @property {boolean} [debit_negative_balances]
 * @property {*} [payouts]
 * @property {Object} settlement_timing
 */

/**
 * @typedef {Object} BalanceTransaction
 * @property {number} amount
 * @property {number} available_on
 * @property {string} balance_type
 * @property {*} [checkout_session]
 * @property {number} created
 * @property {*} [credit_note]
 * @property {string} currency
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {string} [description]
 * @property {number} ending_balance
 * @property {number} [exchange_rate]
 * @property {number} fee
 * @property {Array} fee_details
 * @property {string} id
 * @property {*} [invoice]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {number} net
 * @property {string} object
 * @property {string} reporting_category
 * @property {*} [source]
 * @property {string} status
 * @property {string} type
 */

/**
 * @typedef {Object} BalanceTransactionLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} BalanceTransactionListMatch
 * @property {*} [created]
 * @property {string} [currency]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [payout]
 * @property {string} [source]
 * @property {string} [starting_after]
 * @property {string} [type]
 */

/**
 * @typedef {Object} BankAccount
 * @property {*} [account]
 * @property {string} [account_holder_name]
 * @property {string} [account_holder_type]
 * @property {string} [account_type]
 * @property {Array} [available_payout_methods]
 * @property {string} [bank_name]
 * @property {string} country
 * @property {string} currency
 * @property {*} [customer]
 * @property {boolean} [default_for_currency]
 * @property {string} [fingerprint]
 * @property {*} [future_requirements]
 * @property {string} id
 * @property {string} last4
 * @property {Object} [metadata]
 * @property {string} object
 * @property {*} [requirements]
 * @property {string} [routing_number]
 * @property {string} status
 */

/**
 * @typedef {Object} BankAccountLoadMatch
 * @property {string} customer_id
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} BankAccountListMatch
 * @property {string} customer_id
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} BankAccountCreateData
 * @property {string} customer_id
 * @property {string} [id]
 * @property {string} [source_id]
 * @property {*} [account]
 * @property {string} [account_holder_name]
 * @property {string} [account_holder_type]
 * @property {string} [account_type]
 * @property {Array} [available_payout_methods]
 * @property {string} [bank_name]
 * @property {string} country
 * @property {string} currency
 * @property {*} [customer]
 * @property {boolean} [default_for_currency]
 * @property {string} [fingerprint]
 * @property {*} [future_requirements]
 * @property {string} last4
 * @property {Object} [metadata]
 * @property {string} object
 * @property {*} [requirements]
 * @property {string} [routing_number]
 * @property {string} status
 */

/**
 * @typedef {Object} BankAccountRemoveMatch
 * @property {string} customer_id
 * @property {string} id
 */

/**
 * @typedef {Object} Calculation
 * @property {number} amount_total
 * @property {string} currency
 * @property {string} [customer]
 * @property {Object} customer_details
 * @property {number} [expires_at]
 * @property {string} [id]
 * @property {Object} line_items
 * @property {boolean} livemode
 * @property {string} object
 * @property {*} [ship_from_details]
 * @property {*} [shipping_cost]
 * @property {number} tax_amount_exclusive
 * @property {number} tax_amount_inclusive
 * @property {Array} tax_breakdown
 * @property {number} tax_date
 */

/**
 * @typedef {Object} CalculationLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CalculationCreateData
 * @property {number} amount_total
 * @property {string} currency
 * @property {string} [customer]
 * @property {Object} customer_details
 * @property {number} [expires_at]
 * @property {string} [id]
 * @property {Object} line_items
 * @property {boolean} livemode
 * @property {string} object
 * @property {*} [ship_from_details]
 * @property {*} [shipping_cost]
 * @property {number} tax_amount_exclusive
 * @property {number} tax_amount_inclusive
 * @property {Array} tax_breakdown
 * @property {number} tax_date
 */

/**
 * @typedef {Object} Capability
 * @property {*} account
 * @property {Object} future_requirements
 * @property {string} id
 * @property {string} object
 * @property {boolean} requested
 * @property {number} [requested_at]
 * @property {Object} requirements
 * @property {string} status
 */

/**
 * @typedef {Object} CapabilityLoadMatch
 * @property {string} account_id
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CapabilityListMatch
 * @property {string} account_id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CapabilityCreateData
 * @property {string} account_id
 * @property {string} id
 * @property {*} account
 * @property {Object} future_requirements
 * @property {string} object
 * @property {boolean} requested
 * @property {number} [requested_at]
 * @property {Object} requirements
 * @property {string} status
 */

/**
 * @typedef {Object} Card
 * @property {*} [account]
 * @property {string} [address_city]
 * @property {string} [address_country]
 * @property {string} [address_line1]
 * @property {string} [address_line1_check]
 * @property {string} [address_line2]
 * @property {string} [address_state]
 * @property {string} [address_zip]
 * @property {string} [address_zip_check]
 * @property {boolean} [allow_redisplay]
 * @property {Array} [available_payout_methods]
 * @property {string} brand
 * @property {string} [cancellation_reason]
 * @property {Object} cardholder
 * @property {string} [country]
 * @property {number} created
 * @property {string} [currency]
 * @property {*} [customer]
 * @property {string} [cvc]
 * @property {string} [cvc_check]
 * @property {boolean} [default_for_currency]
 * @property {string} [dynamic_last4]
 * @property {number} exp_month
 * @property {number} exp_year
 * @property {string} [financial_account]
 * @property {string} [fingerprint]
 * @property {string} funding
 * @property {string} id
 * @property {string} last4
 * @property {*} [latest_fraud_warning]
 * @property {*} [lifecycle_controls]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {Object} [networks]
 * @property {string} [number]
 * @property {string} object
 * @property {*} [personalization_design]
 * @property {string} [regulated_status]
 * @property {*} [replaced_by]
 * @property {*} [replacement_for]
 * @property {string} [replacement_reason]
 * @property {string} [second_line]
 * @property {*} [shipping]
 * @property {Object} spending_controls
 * @property {string} [status]
 * @property {string} [tokenization_method]
 * @property {string} type
 * @property {*} [wallets]
 */

/**
 * @typedef {Object} CardLoadMatch
 * @property {string} [customer_id]
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CardListMatch
 * @property {string} [cardholder]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {number} [exp_month]
 * @property {number} [exp_year]
 * @property {Array} [expand]
 * @property {string} [last4]
 * @property {number} [limit]
 * @property {string} [personalization_design]
 * @property {string} [starting_after]
 * @property {string} [status]
 * @property {string} [type]
 */

/**
 * @typedef {Object} CardCreateData
 * @property {string} id
 * @property {*} [account]
 * @property {string} [address_city]
 * @property {string} [address_country]
 * @property {string} [address_line1]
 * @property {string} [address_line1_check]
 * @property {string} [address_line2]
 * @property {string} [address_state]
 * @property {string} [address_zip]
 * @property {string} [address_zip_check]
 * @property {boolean} [allow_redisplay]
 * @property {Array} [available_payout_methods]
 * @property {string} brand
 * @property {string} [cancellation_reason]
 * @property {Object} cardholder
 * @property {string} [country]
 * @property {number} created
 * @property {string} [currency]
 * @property {*} [customer]
 * @property {string} [cvc]
 * @property {string} [cvc_check]
 * @property {boolean} [default_for_currency]
 * @property {string} [dynamic_last4]
 * @property {number} exp_month
 * @property {number} exp_year
 * @property {string} [financial_account]
 * @property {string} [fingerprint]
 * @property {string} funding
 * @property {string} last4
 * @property {*} [latest_fraud_warning]
 * @property {*} [lifecycle_controls]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {Object} [networks]
 * @property {string} [number]
 * @property {string} object
 * @property {*} [personalization_design]
 * @property {string} [regulated_status]
 * @property {*} [replaced_by]
 * @property {*} [replacement_for]
 * @property {string} [replacement_reason]
 * @property {string} [second_line]
 * @property {*} [shipping]
 * @property {Object} spending_controls
 * @property {string} [status]
 * @property {string} [tokenization_method]
 * @property {string} type
 * @property {*} [wallets]
 */

/**
 * @typedef {Object} CardRemoveMatch
 * @property {string} customer_id
 * @property {string} id
 */

/**
 * @typedef {Object} Cardholder
 * @property {Object} billing
 * @property {*} [company]
 * @property {number} created
 * @property {string} [email]
 * @property {string} id
 * @property {*} [individual]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} name
 * @property {string} object
 * @property {string} [phone_number]
 * @property {Array} [preferred_locales]
 * @property {Object} requirements
 * @property {*} [spending_controls]
 * @property {string} status
 * @property {string} type
 */

/**
 * @typedef {Object} CardholderLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CardholderListMatch
 * @property {*} [created]
 * @property {string} [email]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [phone_number]
 * @property {string} [starting_after]
 * @property {string} [status]
 * @property {string} [type]
 */

/**
 * @typedef {Object} CardholderCreateData
 * @property {string} id
 * @property {Object} billing
 * @property {*} [company]
 * @property {number} created
 * @property {string} [email]
 * @property {*} [individual]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} name
 * @property {string} object
 * @property {string} [phone_number]
 * @property {Array} [preferred_locales]
 * @property {Object} requirements
 * @property {*} [spending_controls]
 * @property {string} status
 * @property {string} type
 */

/**
 * @typedef {Object} CashBalance
 * @property {Object} [available]
 * @property {string} customer
 * @property {string} [customer_account]
 * @property {boolean} livemode
 * @property {string} object
 * @property {Object} settings
 */

/**
 * @typedef {Object} CashBalanceLoadMatch
 * @property {string} customer_id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CashBalanceCreateData
 * @property {string} customer_id
 * @property {Object} [available]
 * @property {string} customer
 * @property {string} [customer_account]
 * @property {boolean} livemode
 * @property {string} object
 * @property {Object} settings
 */

/**
 * @typedef {Object} CashBalanceTransaction
 * @property {Object} adjusted_for_overdraft
 * @property {Object} applied_to_payment
 * @property {number} created
 * @property {string} currency
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {number} ending_balance
 * @property {Object} funded
 * @property {string} id
 * @property {boolean} livemode
 * @property {number} net_amount
 * @property {string} object
 * @property {Object} refunded_from_payment
 * @property {Object} transferred_to_balance
 * @property {string} type
 * @property {Object} unapplied_from_payment
 */

/**
 * @typedef {Object} CashBalanceTransactionLoadMatch
 * @property {string} customer_id
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CashBalanceTransactionListMatch
 * @property {string} customer_id
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} Charge
 * @property {number} amount
 * @property {number} amount_captured
 * @property {number} amount_refunded
 * @property {*} [application]
 * @property {*} [application_fee]
 * @property {number} [application_fee_amount]
 * @property {*} [balance_transaction]
 * @property {Object} billing_details
 * @property {string} [calculated_statement_descriptor]
 * @property {boolean} captured
 * @property {number} created
 * @property {string} currency
 * @property {*} [customer]
 * @property {string} [description]
 * @property {boolean} disputed
 * @property {*} [failure_balance_transaction]
 * @property {string} [failure_code]
 * @property {string} [failure_message]
 * @property {*} [fraud_details]
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {*} [outcome]
 * @property {boolean} paid
 * @property {*} [payment_intent]
 * @property {string} [payment_method]
 * @property {*} [payment_method_details]
 * @property {Object} presentment_details
 * @property {Object} [radar_options]
 * @property {string} [receipt_email]
 * @property {string} [receipt_number]
 * @property {string} [receipt_url]
 * @property {boolean} refunded
 * @property {Object} refunds
 * @property {*} [review]
 * @property {*} [shipping]
 * @property {*} [source_transfer]
 * @property {string} [statement_descriptor]
 * @property {string} [statement_descriptor_suffix]
 * @property {string} status
 * @property {*} [transfer]
 * @property {*} [transfer_data]
 * @property {string} [transfer_group]
 */

/**
 * @typedef {Object} ChargeLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ChargeListMatch
 * @property {*} [created]
 * @property {string} [customer]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [payment_intent]
 * @property {string} [starting_after]
 * @property {string} [transfer_group]
 */

/**
 * @typedef {Object} ChargeCreateData
 * @property {string} id
 * @property {number} amount
 * @property {number} amount_captured
 * @property {number} amount_refunded
 * @property {*} [application]
 * @property {*} [application_fee]
 * @property {number} [application_fee_amount]
 * @property {*} [balance_transaction]
 * @property {Object} billing_details
 * @property {string} [calculated_statement_descriptor]
 * @property {boolean} captured
 * @property {number} created
 * @property {string} currency
 * @property {*} [customer]
 * @property {string} [description]
 * @property {boolean} disputed
 * @property {*} [failure_balance_transaction]
 * @property {string} [failure_code]
 * @property {string} [failure_message]
 * @property {*} [fraud_details]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {*} [outcome]
 * @property {boolean} paid
 * @property {*} [payment_intent]
 * @property {string} [payment_method]
 * @property {*} [payment_method_details]
 * @property {Object} presentment_details
 * @property {Object} [radar_options]
 * @property {string} [receipt_email]
 * @property {string} [receipt_number]
 * @property {string} [receipt_url]
 * @property {boolean} refunded
 * @property {Object} refunds
 * @property {*} [review]
 * @property {*} [shipping]
 * @property {*} [source_transfer]
 * @property {string} [statement_descriptor]
 * @property {string} [statement_descriptor_suffix]
 * @property {string} status
 * @property {*} [transfer]
 * @property {*} [transfer_data]
 * @property {string} [transfer_group]
 */

/**
 * @typedef {Object} Configuration
 * @property {boolean} active
 * @property {*} [application]
 * @property {Object} [bbpos_wisepad3]
 * @property {Object} [bbpos_wisepos_e]
 * @property {Object} business_profile
 * @property {Object} cellular
 * @property {number} created
 * @property {string} [default_return_url]
 * @property {Object} features
 * @property {string} id
 * @property {boolean} [is_account_default]
 * @property {boolean} is_default
 * @property {boolean} livemode
 * @property {Object} login_page
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {string} object
 * @property {Object} [offline]
 * @property {Object} reboot_window
 * @property {Object} [stripe_s700]
 * @property {Object} [stripe_s710]
 * @property {Object} [tipping]
 * @property {number} updated
 * @property {Object} [verifone_m425]
 * @property {Object} [verifone_p400]
 * @property {Object} [verifone_p630]
 * @property {Object} [verifone_ux700]
 * @property {Object} [verifone_v660p]
 * @property {Object} wifi
 */

/**
 * @typedef {Object} ConfigurationLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ConfigurationListMatch
 * @property {boolean} [active]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {boolean} [is_default]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} ConfigurationCreateData
 * @property {string} id
 * @property {boolean} active
 * @property {*} [application]
 * @property {Object} [bbpos_wisepad3]
 * @property {Object} [bbpos_wisepos_e]
 * @property {Object} business_profile
 * @property {Object} cellular
 * @property {number} created
 * @property {string} [default_return_url]
 * @property {Object} features
 * @property {boolean} [is_account_default]
 * @property {boolean} is_default
 * @property {boolean} livemode
 * @property {Object} login_page
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {string} object
 * @property {Object} [offline]
 * @property {Object} reboot_window
 * @property {Object} [stripe_s700]
 * @property {Object} [stripe_s710]
 * @property {Object} [tipping]
 * @property {number} updated
 * @property {Object} [verifone_m425]
 * @property {Object} [verifone_p400]
 * @property {Object} [verifone_p630]
 * @property {Object} [verifone_ux700]
 * @property {Object} [verifone_v660p]
 * @property {Object} wifi
 */

/**
 * @typedef {Object} ConfigurationRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ConfirmationToken
 * @property {number} created
 * @property {number} [expires_at]
 * @property {string} id
 * @property {boolean} livemode
 * @property {*} [mandate_data]
 * @property {Object} [metadata]
 * @property {string} object
 * @property {string} [payment_intent]
 * @property {*} [payment_method_options]
 * @property {*} [payment_method_preview]
 * @property {string} [return_url]
 * @property {string} [setup_future_usage]
 * @property {string} [setup_intent]
 * @property {*} [shipping]
 * @property {boolean} use_stripe_sdk
 */

/**
 * @typedef {Object} ConfirmationTokenLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ConfirmationTokenCreateData
 * @property {number} created
 * @property {number} [expires_at]
 * @property {string} id
 * @property {boolean} livemode
 * @property {*} [mandate_data]
 * @property {Object} [metadata]
 * @property {string} object
 * @property {string} [payment_intent]
 * @property {*} [payment_method_options]
 * @property {*} [payment_method_preview]
 * @property {string} [return_url]
 * @property {string} [setup_future_usage]
 * @property {string} [setup_intent]
 * @property {*} [shipping]
 * @property {boolean} use_stripe_sdk
 */

/**
 * @typedef {Object} ConnectionToken
 * @property {string} [location]
 * @property {string} object
 * @property {string} secret
 */

/**
 * @typedef {Object} ConnectionTokenCreateData
 * @property {string} [location]
 * @property {string} object
 * @property {string} secret
 */

/**
 * @typedef {Object} CountrySpec
 * @property {string} default_currency
 * @property {string} id
 * @property {string} object
 * @property {Object} supported_bank_account_currencies
 * @property {Array} supported_payment_currencies
 * @property {Array} supported_payment_methods
 * @property {Array} supported_transfer_countries
 * @property {Object} verification_fields
 */

/**
 * @typedef {Object} CountrySpecLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CountrySpecListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} Coupon
 * @property {number} [amount_off]
 * @property {Object} applies_to
 * @property {number} created
 * @property {string} [currency]
 * @property {Object} [currency_options]
 * @property {string} duration
 * @property {number} [duration_in_months]
 * @property {string} id
 * @property {boolean} livemode
 * @property {number} [max_redemptions]
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {string} object
 * @property {number} [percent_off]
 * @property {number} [redeem_by]
 * @property {number} times_redeemed
 * @property {boolean} valid
 */

/**
 * @typedef {Object} CouponLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CouponListMatch
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} CouponCreateData
 * @property {string} id
 * @property {number} [amount_off]
 * @property {Object} applies_to
 * @property {number} created
 * @property {string} [currency]
 * @property {Object} [currency_options]
 * @property {string} duration
 * @property {number} [duration_in_months]
 * @property {boolean} livemode
 * @property {number} [max_redemptions]
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {string} object
 * @property {number} [percent_off]
 * @property {number} [redeem_by]
 * @property {number} times_redeemed
 * @property {boolean} valid
 */

/**
 * @typedef {Object} CreditBalanceSummary
 * @property {Object} available_balance
 * @property {Object} ledger_balance
 */

/**
 * @typedef {Object} CreditBalanceSummaryListMatch
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {Array} [expand]
 * @property {Object} filter
 */

/**
 * @typedef {Object} CreditBalanceTransaction
 * @property {number} created
 * @property {*} [credit]
 * @property {*} credit_grant
 * @property {*} [debit]
 * @property {number} effective_at
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {*} [test_clock]
 * @property {string} [type]
 */

/**
 * @typedef {Object} CreditBalanceTransactionLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CreditBalanceTransactionListMatch
 * @property {string} [credit_grant]
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} CreditGrant
 * @property {Object} amount
 * @property {Object} applicability_config
 * @property {string} category
 * @property {number} created
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {number} [effective_at]
 * @property {number} [expires_at]
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} [name]
 * @property {string} object
 * @property {number} [priority]
 * @property {*} [test_clock]
 * @property {number} updated
 * @property {number} [voided_at]
 */

/**
 * @typedef {Object} CreditGrantLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CreditGrantListMatch
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} CreditGrantCreateData
 * @property {string} id
 * @property {Object} amount
 * @property {Object} applicability_config
 * @property {string} category
 * @property {number} created
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {number} [effective_at]
 * @property {number} [expires_at]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} [name]
 * @property {string} object
 * @property {number} [priority]
 * @property {*} [test_clock]
 * @property {number} updated
 * @property {number} [voided_at]
 */

/**
 * @typedef {Object} CreditNote
 * @property {number} amount
 * @property {number} amount_shipping
 * @property {number} created
 * @property {string} currency
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {*} [customer_balance_transaction]
 * @property {number} discount_amount
 * @property {Array} discount_amounts
 * @property {number} [effective_at]
 * @property {string} id
 * @property {*} invoice
 * @property {Object} lines
 * @property {boolean} livemode
 * @property {string} [memo]
 * @property {Object} [metadata]
 * @property {string} number
 * @property {string} object
 * @property {number} [out_of_band_amount]
 * @property {string} pdf
 * @property {number} post_payment_amount
 * @property {number} pre_payment_amount
 * @property {Array} pretax_credit_amounts
 * @property {string} [reason]
 * @property {Array} refunds
 * @property {*} [shipping_cost]
 * @property {string} status
 * @property {number} subtotal
 * @property {number} [subtotal_excluding_tax]
 * @property {number} total
 * @property {number} [total_excluding_tax]
 * @property {Array} [total_taxes]
 * @property {string} type
 * @property {number} [voided_at]
 */

/**
 * @typedef {Object} CreditNoteLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CreditNoteListMatch
 * @property {*} [created]
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {string} [invoice]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} CreditNoteCreateData
 * @property {string} id
 * @property {number} amount
 * @property {number} amount_shipping
 * @property {number} created
 * @property {string} currency
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {*} [customer_balance_transaction]
 * @property {number} discount_amount
 * @property {Array} discount_amounts
 * @property {number} [effective_at]
 * @property {*} invoice
 * @property {Object} lines
 * @property {boolean} livemode
 * @property {string} [memo]
 * @property {Object} [metadata]
 * @property {string} number
 * @property {string} object
 * @property {number} [out_of_band_amount]
 * @property {string} pdf
 * @property {number} post_payment_amount
 * @property {number} pre_payment_amount
 * @property {Array} pretax_credit_amounts
 * @property {string} [reason]
 * @property {Array} refunds
 * @property {*} [shipping_cost]
 * @property {string} status
 * @property {number} subtotal
 * @property {number} [subtotal_excluding_tax]
 * @property {number} total
 * @property {number} [total_excluding_tax]
 * @property {Array} [total_taxes]
 * @property {string} type
 * @property {number} [voided_at]
 */

/**
 * @typedef {Object} CreditNoteLine
 * @property {number} amount
 * @property {string} [description]
 * @property {number} discount_amount
 * @property {Array} discount_amounts
 * @property {string} id
 * @property {string} [invoice_line_item]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {Array} pretax_credit_amounts
 * @property {number} [quantity]
 * @property {Array} tax_rates
 * @property {Array} [taxes]
 * @property {string} type
 * @property {number} [unit_amount]
 * @property {string} [unit_amount_decimal]
 */

/**
 * @typedef {Object} CreditNoteLineListMatch
 * @property {string} id
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} CreditReversal
 * @property {number} amount
 * @property {number} created
 * @property {string} currency
 * @property {string} financial_account
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} network
 * @property {string} object
 * @property {string} received_credit
 * @property {string} status
 * @property {Object} status_transitions
 * @property {*} [transaction]
 */

/**
 * @typedef {Object} CreditReversalLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CreditReversalListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {string} financial_account
 * @property {number} [limit]
 * @property {string} [received_credit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} CreditReversalCreateData
 * @property {number} amount
 * @property {number} created
 * @property {string} currency
 * @property {string} financial_account
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} network
 * @property {string} object
 * @property {string} received_credit
 * @property {string} status
 * @property {Object} status_transitions
 * @property {*} [transaction]
 */

/**
 * @typedef {Object} Customer
 * @property {*} [address]
 * @property {number} [balance]
 * @property {string} [business_name]
 * @property {*} [cash_balance]
 * @property {number} created
 * @property {string} [currency]
 * @property {string} [customer_account]
 * @property {*} [default_source]
 * @property {boolean} [delinquent]
 * @property {string} [description]
 * @property {*} [discount]
 * @property {string} [email]
 * @property {string} id
 * @property {string} [individual_name]
 * @property {Object} [invoice_credit_balance]
 * @property {string} [invoice_prefix]
 * @property {Object} [invoice_settings]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {number} [next_invoice_sequence]
 * @property {string} object
 * @property {string} [phone]
 * @property {Array} [preferred_locales]
 * @property {*} [shipping]
 * @property {Object} sources
 * @property {Object} subscriptions
 * @property {Object} tax
 * @property {string} [tax_exempt]
 * @property {Object} tax_ids
 * @property {*} [test_clock]
 */

/**
 * @typedef {Object} CustomerLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CustomerListMatch
 * @property {*} [created]
 * @property {string} [email]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [test_clock]
 */

/**
 * @typedef {Object} CustomerCreateData
 * @property {string} id
 * @property {*} [address]
 * @property {number} [balance]
 * @property {string} [business_name]
 * @property {*} [cash_balance]
 * @property {number} created
 * @property {string} [currency]
 * @property {string} [customer_account]
 * @property {*} [default_source]
 * @property {boolean} [delinquent]
 * @property {string} [description]
 * @property {*} [discount]
 * @property {string} [email]
 * @property {string} [individual_name]
 * @property {Object} [invoice_credit_balance]
 * @property {string} [invoice_prefix]
 * @property {Object} [invoice_settings]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {number} [next_invoice_sequence]
 * @property {string} object
 * @property {string} [phone]
 * @property {Array} [preferred_locales]
 * @property {*} [shipping]
 * @property {Object} sources
 * @property {Object} subscriptions
 * @property {Object} tax
 * @property {string} [tax_exempt]
 * @property {Object} tax_ids
 * @property {*} [test_clock]
 */

/**
 * @typedef {Object} CustomerRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CustomerBalanceTransaction
 * @property {number} amount
 * @property {*} [checkout_session]
 * @property {number} created
 * @property {*} [credit_note]
 * @property {string} currency
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {string} [description]
 * @property {number} ending_balance
 * @property {string} id
 * @property {*} [invoice]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {string} type
 */

/**
 * @typedef {Object} CustomerBalanceTransactionLoadMatch
 * @property {string} customer_id
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} CustomerBalanceTransactionCreateData
 * @property {string} [customer_id]
 * @property {string} id
 * @property {number} amount
 * @property {*} [checkout_session]
 * @property {number} created
 * @property {*} [credit_note]
 * @property {string} currency
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {string} [description]
 * @property {number} ending_balance
 * @property {*} [invoice]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {string} type
 */

/**
 * @typedef {Object} CustomerSession
 * @property {string} client_secret
 * @property {Object} components
 * @property {number} created
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {number} expires_at
 * @property {boolean} livemode
 * @property {string} object
 */

/**
 * @typedef {Object} CustomerSessionCreateData
 * @property {string} client_secret
 * @property {Object} components
 * @property {number} created
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {number} expires_at
 * @property {boolean} livemode
 * @property {string} object
 */

/**
 * @typedef {Object} DebitReversal
 * @property {number} amount
 * @property {number} created
 * @property {string} currency
 * @property {string} [financial_account]
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {string} id
 * @property {*} [linked_flows]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} network
 * @property {string} object
 * @property {string} received_debit
 * @property {string} status
 * @property {Object} status_transitions
 * @property {*} [transaction]
 */

/**
 * @typedef {Object} DebitReversalLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} DebitReversalListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {string} financial_account
 * @property {number} [limit]
 * @property {string} [received_debit]
 * @property {string} [resolution]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} DebitReversalCreateData
 * @property {number} amount
 * @property {number} created
 * @property {string} currency
 * @property {string} [financial_account]
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {string} id
 * @property {*} [linked_flows]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} network
 * @property {string} object
 * @property {string} received_debit
 * @property {string} status
 * @property {Object} status_transitions
 * @property {*} [transaction]
 */

/**
 * @typedef {Object} DeletedAccount
 * @property {string} [id]
 */

/**
 * @typedef {Object} DeletedAccountRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} DeletedApplePayDomain
 * @property {string} [id]
 */

/**
 * @typedef {Object} DeletedApplePayDomainRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} DeletedCoupon
 * @property {string} [id]
 */

/**
 * @typedef {Object} DeletedCouponRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} DeletedExternalAccount
 * @property {string} [id]
 */

/**
 * @typedef {Object} DeletedExternalAccountRemoveMatch
 * @property {string} account_id
 * @property {string} id
 */

/**
 * @typedef {Object} DeletedInvoiceitem
 * @property {string} [id]
 */

/**
 * @typedef {Object} DeletedInvoiceitemRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} DeletedPerson
 * @property {string} [id]
 */

/**
 * @typedef {Object} DeletedPersonRemoveMatch
 * @property {string} account_id
 * @property {string} id
 */

/**
 * @typedef {Object} DeletedPlan
 * @property {string} [id]
 */

/**
 * @typedef {Object} DeletedPlanRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} DeletedProductFeature
 * @property {string} [id]
 */

/**
 * @typedef {Object} DeletedProductFeatureRemoveMatch
 * @property {string} id
 * @property {string} product_id
 */

/**
 * @typedef {Object} DeletedSubscriptionItem
 * @property {string} [id]
 */

/**
 * @typedef {Object} DeletedSubscriptionItemRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} DeletedWebhookEndpoint
 * @property {string} [id]
 */

/**
 * @typedef {Object} DeletedWebhookEndpointRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Discount
 * @property {string} [checkout_session]
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {number} [end]
 * @property {string} id
 * @property {string} [invoice]
 * @property {string} [invoice_item]
 * @property {string} object
 * @property {*} [promotion_code]
 * @property {Object} source
 * @property {number} start
 * @property {string} [subscription]
 * @property {string} [subscription_item]
 */

/**
 * @typedef {Object} DiscountLoadMatch
 * @property {string} customer_id
 * @property {string} [subscription_id]
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} DiscountRemoveMatch
 * @property {string} customer_id
 */

/**
 * @typedef {Object} Dispute
 * @property {number} amount
 * @property {Array} balance_transactions
 * @property {*} charge
 * @property {number} created
 * @property {string} currency
 * @property {Array} enhanced_eligibility_types
 * @property {Object} evidence
 * @property {Object} evidence_details
 * @property {string} id
 * @property {boolean} is_charge_refundable
 * @property {boolean} livemode
 * @property {string} [loss_reason]
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [payment_intent]
 * @property {Object} payment_method_details
 * @property {string} reason
 * @property {string} status
 * @property {*} transaction
 * @property {*} [treasury]
 */

/**
 * @typedef {Object} DisputeLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} DisputeListMatch
 * @property {string} [charge]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [payment_intent]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} DisputeCreateData
 * @property {string} id
 * @property {number} amount
 * @property {Array} balance_transactions
 * @property {*} charge
 * @property {number} created
 * @property {string} currency
 * @property {Array} enhanced_eligibility_types
 * @property {Object} evidence
 * @property {Object} evidence_details
 * @property {boolean} is_charge_refundable
 * @property {boolean} livemode
 * @property {string} [loss_reason]
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [payment_intent]
 * @property {Object} payment_method_details
 * @property {string} reason
 * @property {string} status
 * @property {*} transaction
 * @property {*} [treasury]
 */

/**
 * @typedef {Object} Domain
 * @property {number} created
 * @property {string} domain_name
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 */

/**
 * @typedef {Object} DomainListMatch
 * @property {string} [domain_name]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} EarlyFraudWarning
 * @property {boolean} actionable
 * @property {*} charge
 * @property {number} created
 * @property {string} fraud_type
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {*} [payment_intent]
 */

/**
 * @typedef {Object} EarlyFraudWarningLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} EarlyFraudWarningListMatch
 * @property {string} [charge]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [payment_intent]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} EphemeralKey
 * @property {number} created
 * @property {number} expires
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {string} [secret]
 */

/**
 * @typedef {Object} EphemeralKeyCreateData
 * @property {number} created
 * @property {number} expires
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {string} [secret]
 */

/**
 * @typedef {Object} EphemeralKeyRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Event
 * @property {string} [account]
 * @property {string} [api_version]
 * @property {string} [context]
 * @property {number} created
 * @property {Object} data
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {number} pending_webhooks
 * @property {*} [request]
 * @property {string} type
 */

/**
 * @typedef {Object} EventLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} EventListMatch
 * @property {*} [created]
 * @property {boolean} [delivery_success]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ExchangeRate
 * @property {string} id
 * @property {string} object
 * @property {Object} rates
 */

/**
 * @typedef {Object} ExchangeRateLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ExchangeRateListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} ExternalAccount
 * @property {Array} data
 * @property {boolean} has_more
 * @property {string} [id]
 * @property {string} object
 * @property {string} url
 */

/**
 * @typedef {Object} ExternalAccountLoadMatch
 * @property {string} account_id
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ExternalAccountListMatch
 * @property {string} account_id
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [object]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} ExternalAccountCreateData
 * @property {string} id
 * @property {Array} data
 * @property {boolean} has_more
 * @property {string} object
 * @property {string} url
 */

/**
 * @typedef {Object} Feature
 * @property {boolean} active
 * @property {Object} entitlement_feature
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} lookup_key
 * @property {Object} metadata
 * @property {string} name
 * @property {string} object
 */

/**
 * @typedef {Object} FeatureLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} FeatureListMatch
 * @property {boolean} [archived]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [lookup_key]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} FeatureCreateData
 * @property {string} id
 * @property {boolean} active
 * @property {Object} entitlement_feature
 * @property {boolean} livemode
 * @property {string} lookup_key
 * @property {Object} metadata
 * @property {string} name
 * @property {string} object
 */

/**
 * @typedef {Object} FeedbackOption
 * @property {number} [deactivated_at]
 * @property {string} description
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {string} status
 * @property {Object} status_transitions
 */

/**
 * @typedef {Object} FeedbackOptionLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} FeedbackOptionListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} FeedbackOptionCreateData
 * @property {string} id
 * @property {number} [deactivated_at]
 * @property {string} description
 * @property {boolean} livemode
 * @property {string} object
 * @property {string} status
 * @property {Object} status_transitions
 */

/**
 * @typedef {Object} File
 * @property {number} created
 * @property {Array} data
 * @property {number} [expires_at]
 * @property {string} [filename]
 * @property {boolean} has_more
 * @property {string} id
 * @property {Object} links
 * @property {string} object
 * @property {string} purpose
 * @property {number} size
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} url
 */

/**
 * @typedef {Object} FileLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} FileListMatch
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [purpose]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} FileCreateData
 * @property {number} created
 * @property {Array} data
 * @property {number} [expires_at]
 * @property {string} [filename]
 * @property {boolean} has_more
 * @property {string} id
 * @property {Object} links
 * @property {string} object
 * @property {string} purpose
 * @property {number} size
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} url
 */

/**
 * @typedef {Object} FileLink
 * @property {number} created
 * @property {boolean} expired
 * @property {number} [expires_at]
 * @property {*} file
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {string} [url]
 */

/**
 * @typedef {Object} FileLinkLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} FileLinkListMatch
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {boolean} [expired]
 * @property {string} [file]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} FileLinkCreateData
 * @property {string} id
 * @property {number} created
 * @property {boolean} expired
 * @property {number} [expires_at]
 * @property {*} file
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {string} [url]
 */

/**
 * @typedef {Object} FinancialAccount
 * @property {Array} [active_features]
 * @property {Object} balance
 * @property {string} country
 * @property {number} created
 * @property {Object} features
 * @property {Array} financial_addresses
 * @property {string} id
 * @property {boolean} [is_default]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} [nickname]
 * @property {string} object
 * @property {Array} [pending_features]
 * @property {*} [platform_restrictions]
 * @property {Array} [restricted_features]
 * @property {string} status
 * @property {Object} status_details
 * @property {Array} supported_currencies
 */

/**
 * @typedef {Object} FinancialAccountLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} FinancialAccountListMatch
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} FinancialAccountCreateData
 * @property {string} id
 * @property {Array} [active_features]
 * @property {Object} balance
 * @property {string} country
 * @property {number} created
 * @property {Object} features
 * @property {Array} financial_addresses
 * @property {boolean} [is_default]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} [nickname]
 * @property {string} object
 * @property {Array} [pending_features]
 * @property {*} [platform_restrictions]
 * @property {Array} [restricted_features]
 * @property {string} status
 * @property {Object} status_details
 * @property {Array} supported_currencies
 */

/**
 * @typedef {Object} FinancialAccountFeature
 * @property {Object} card_issuing
 * @property {Object} deposit_insurance
 * @property {Object} [financial_addresses]
 * @property {string} [id]
 * @property {Object} [inbound_transfers]
 * @property {Object} intra_stripe_flows
 * @property {string} object
 * @property {Object} [outbound_payments]
 * @property {Object} [outbound_transfers]
 */

/**
 * @typedef {Object} FinancialAccountFeatureLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} FinancialAccountFeatureCreateData
 * @property {string} id
 * @property {Object} card_issuing
 * @property {Object} deposit_insurance
 * @property {Object} [financial_addresses]
 * @property {Object} [inbound_transfers]
 * @property {Object} intra_stripe_flows
 * @property {string} object
 * @property {Object} [outbound_payments]
 * @property {Object} [outbound_transfers]
 */

/**
 * @typedef {Object} FundCashBalance
 * @property {Object} adjusted_for_overdraft
 * @property {Object} applied_to_payment
 * @property {number} created
 * @property {string} currency
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {number} ending_balance
 * @property {Object} funded
 * @property {string} id
 * @property {boolean} livemode
 * @property {number} net_amount
 * @property {string} object
 * @property {Object} refunded_from_payment
 * @property {Object} transferred_to_balance
 * @property {string} type
 * @property {Object} unapplied_from_payment
 */

/**
 * @typedef {Object} FundCashBalanceCreateData
 * @property {string} customer_id
 * @property {Object} adjusted_for_overdraft
 * @property {Object} applied_to_payment
 * @property {number} created
 * @property {string} currency
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {number} ending_balance
 * @property {Object} funded
 * @property {string} id
 * @property {boolean} livemode
 * @property {number} net_amount
 * @property {string} object
 * @property {Object} refunded_from_payment
 * @property {Object} transferred_to_balance
 * @property {string} type
 * @property {Object} unapplied_from_payment
 */

/**
 * @typedef {Object} FundingInstruction
 * @property {string} country
 * @property {Array} financial_addresses
 * @property {string} type
 */

/**
 * @typedef {Object} FundingInstructionCreateData
 * @property {string} customer_id
 * @property {string} country
 * @property {Array} financial_addresses
 * @property {string} type
 */

/**
 * @typedef {Object} History
 * @property {number} amount
 * @property {number} available_on
 * @property {string} balance_type
 * @property {number} created
 * @property {string} currency
 * @property {string} [description]
 * @property {number} [exchange_rate]
 * @property {number} fee
 * @property {Array} fee_details
 * @property {string} id
 * @property {number} net
 * @property {string} object
 * @property {string} reporting_category
 * @property {*} [source]
 * @property {string} status
 * @property {string} type
 */

/**
 * @typedef {Object} HistoryListMatch
 * @property {*} [created]
 * @property {string} [currency]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [payout]
 * @property {string} [source]
 * @property {string} [starting_after]
 * @property {string} [type]
 */

/**
 * @typedef {Object} InboundTransfer
 * @property {number} amount
 * @property {boolean} cancelable
 * @property {number} created
 * @property {string} currency
 * @property {string} [description]
 * @property {*} [failure_details]
 * @property {string} financial_account
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {string} id
 * @property {Object} linked_flows
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {string} [origin_payment_method]
 * @property {*} [origin_payment_method_details]
 * @property {boolean} [returned]
 * @property {string} statement_descriptor
 * @property {string} status
 * @property {Object} status_transitions
 * @property {*} [transaction]
 */

/**
 * @typedef {Object} InboundTransferLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} InboundTransferListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {string} financial_account
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} InboundTransferCreateData
 * @property {number} amount
 * @property {boolean} cancelable
 * @property {number} created
 * @property {string} currency
 * @property {string} [description]
 * @property {*} [failure_details]
 * @property {string} financial_account
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {string} id
 * @property {Object} linked_flows
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {string} [origin_payment_method]
 * @property {*} [origin_payment_method_details]
 * @property {boolean} [returned]
 * @property {string} statement_descriptor
 * @property {string} status
 * @property {Object} status_transitions
 * @property {*} [transaction]
 */

/**
 * @typedef {Object} Install
 * @property {string} account
 * @property {string} app
 * @property {boolean} approval_required
 * @property {string} [auth_code]
 * @property {string} channel
 * @property {Object} content_security_policy_granted
 * @property {Object} content_security_policy_pending
 * @property {number} created
 * @property {string} [created_by]
 * @property {Array} endpoints_granted
 * @property {Array} endpoints_pending
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {Array} permissions_granted
 * @property {Array} permissions_pending
 * @property {string} status
 */

/**
 * @typedef {Object} InstallLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} InstallListMatch
 * @property {string} [account]
 * @property {string} [app]
 * @property {boolean} [approval_required]
 * @property {string} [channel]
 * @property {*} [created]
 * @property {string} [created_by]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} InstallCreateData
 * @property {string} id
 * @property {string} account
 * @property {string} app
 * @property {boolean} approval_required
 * @property {string} [auth_code]
 * @property {string} channel
 * @property {Object} content_security_policy_granted
 * @property {Object} content_security_policy_pending
 * @property {number} created
 * @property {string} [created_by]
 * @property {Array} endpoints_granted
 * @property {Array} endpoints_pending
 * @property {boolean} livemode
 * @property {string} object
 * @property {Array} permissions_granted
 * @property {Array} permissions_pending
 * @property {string} status
 */

/**
 * @typedef {Object} Invoice
 * @property {string} [account_country]
 * @property {string} [account_name]
 * @property {Array} [account_tax_ids]
 * @property {number} amount_due
 * @property {number} amount_overpaid
 * @property {number} amount_paid
 * @property {number} amount_paid_off_stripe
 * @property {number} amount_remaining
 * @property {number} amount_shipping
 * @property {*} [application]
 * @property {number} attempt_count
 * @property {boolean} attempted
 * @property {boolean} auto_advance
 * @property {Object} automatic_tax
 * @property {number} [automatically_finalizes_at]
 * @property {string} [billing_reason]
 * @property {string} collection_method
 * @property {*} [confirmation_secret]
 * @property {number} created
 * @property {string} currency
 * @property {Array} [custom_fields]
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {*} [customer_address]
 * @property {string} [customer_email]
 * @property {string} [customer_name]
 * @property {string} [customer_phone]
 * @property {*} [customer_shipping]
 * @property {string} [customer_tax_exempt]
 * @property {Array} [customer_tax_ids]
 * @property {*} [default_payment_method]
 * @property {*} [default_source]
 * @property {Array} default_tax_rates
 * @property {string} [description]
 * @property {Array} discounts
 * @property {number} [due_date]
 * @property {number} [effective_at]
 * @property {number} [ending_balance]
 * @property {string} [footer]
 * @property {*} [from_invoice]
 * @property {string} [hosted_invoice_url]
 * @property {string} id
 * @property {string} [invoice_pdf]
 * @property {Object} issuer
 * @property {*} [last_finalization_error]
 * @property {*} [latest_revision]
 * @property {Object} lines
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {number} [next_payment_attempt]
 * @property {string} [number]
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {*} [parent]
 * @property {Object} payment_settings
 * @property {Object} payments
 * @property {number} period_end
 * @property {number} period_start
 * @property {number} post_payment_credit_notes_amount
 * @property {number} pre_payment_credit_notes_amount
 * @property {string} [receipt_number]
 * @property {*} [rendering]
 * @property {*} [shipping_cost]
 * @property {*} [shipping_details]
 * @property {number} starting_balance
 * @property {string} [statement_descriptor]
 * @property {string} [status]
 * @property {Object} [status_details]
 * @property {Object} status_transitions
 * @property {number} subtotal
 * @property {number} [subtotal_excluding_tax]
 * @property {*} [test_clock]
 * @property {Object} threshold_reason
 * @property {number} total
 * @property {Array} [total_discount_amounts]
 * @property {number} [total_excluding_tax]
 * @property {Array} [total_pretax_credit_amounts]
 * @property {Array} [total_taxes]
 * @property {number} [webhooks_delivered_at]
 */

/**
 * @typedef {Object} InvoiceLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} InvoiceListMatch
 * @property {string} [collection_method]
 * @property {*} [created]
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {*} [due_date]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 * @property {string} [subscription]
 */

/**
 * @typedef {Object} InvoiceCreateData
 * @property {string} id
 * @property {string} [account_country]
 * @property {string} [account_name]
 * @property {Array} [account_tax_ids]
 * @property {number} amount_due
 * @property {number} amount_overpaid
 * @property {number} amount_paid
 * @property {number} amount_paid_off_stripe
 * @property {number} amount_remaining
 * @property {number} amount_shipping
 * @property {*} [application]
 * @property {number} attempt_count
 * @property {boolean} attempted
 * @property {boolean} auto_advance
 * @property {Object} automatic_tax
 * @property {number} [automatically_finalizes_at]
 * @property {string} [billing_reason]
 * @property {string} collection_method
 * @property {*} [confirmation_secret]
 * @property {number} created
 * @property {string} currency
 * @property {Array} [custom_fields]
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {*} [customer_address]
 * @property {string} [customer_email]
 * @property {string} [customer_name]
 * @property {string} [customer_phone]
 * @property {*} [customer_shipping]
 * @property {string} [customer_tax_exempt]
 * @property {Array} [customer_tax_ids]
 * @property {*} [default_payment_method]
 * @property {*} [default_source]
 * @property {Array} default_tax_rates
 * @property {string} [description]
 * @property {Array} discounts
 * @property {number} [due_date]
 * @property {number} [effective_at]
 * @property {number} [ending_balance]
 * @property {string} [footer]
 * @property {*} [from_invoice]
 * @property {string} [hosted_invoice_url]
 * @property {string} [invoice_pdf]
 * @property {Object} issuer
 * @property {*} [last_finalization_error]
 * @property {*} [latest_revision]
 * @property {Object} lines
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {number} [next_payment_attempt]
 * @property {string} [number]
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {*} [parent]
 * @property {Object} payment_settings
 * @property {Object} payments
 * @property {number} period_end
 * @property {number} period_start
 * @property {number} post_payment_credit_notes_amount
 * @property {number} pre_payment_credit_notes_amount
 * @property {string} [receipt_number]
 * @property {*} [rendering]
 * @property {*} [shipping_cost]
 * @property {*} [shipping_details]
 * @property {number} starting_balance
 * @property {string} [statement_descriptor]
 * @property {string} [status]
 * @property {Object} [status_details]
 * @property {Object} status_transitions
 * @property {number} subtotal
 * @property {number} [subtotal_excluding_tax]
 * @property {*} [test_clock]
 * @property {Object} threshold_reason
 * @property {number} total
 * @property {Array} [total_discount_amounts]
 * @property {number} [total_excluding_tax]
 * @property {Array} [total_pretax_credit_amounts]
 * @property {Array} [total_taxes]
 * @property {number} [webhooks_delivered_at]
 */

/**
 * @typedef {Object} InvoiceRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} InvoicePayment
 * @property {number} [amount_paid]
 * @property {number} amount_requested
 * @property {number} created
 * @property {string} currency
 * @property {string} id
 * @property {*} invoice
 * @property {boolean} is_default
 * @property {boolean} livemode
 * @property {string} object
 * @property {Object} payment
 * @property {string} status
 * @property {Object} status_transitions
 */

/**
 * @typedef {Object} InvoicePaymentLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} InvoicePaymentListMatch
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {string} [invoice]
 * @property {number} [limit]
 * @property {Object} [payment]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} InvoiceRenderingTemplate
 * @property {number} created
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} [nickname]
 * @property {string} object
 * @property {string} status
 * @property {number} version
 */

/**
 * @typedef {Object} InvoiceRenderingTemplateLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 * @property {number} [version]
 */

/**
 * @typedef {Object} InvoiceRenderingTemplateListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} InvoiceRenderingTemplateCreateData
 * @property {string} template
 * @property {number} created
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} [nickname]
 * @property {string} object
 * @property {string} status
 * @property {number} version
 */

/**
 * @typedef {Object} Invoiceitem
 * @property {number} amount
 * @property {string} currency
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {number} date
 * @property {string} [description]
 * @property {boolean} discountable
 * @property {Array} [discounts]
 * @property {Array} [frozen_fields]
 * @property {string} id
 * @property {*} [invoice]
 * @property {Array} [invoicing_rules]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {number} [net_amount]
 * @property {string} object
 * @property {*} [parent]
 * @property {Object} period
 * @property {*} [pricing]
 * @property {boolean} proration
 * @property {Object} proration_details
 * @property {number} quantity
 * @property {string} quantity_decimal
 * @property {Array} [tax_rates]
 * @property {*} [test_clock]
 */

/**
 * @typedef {Object} InvoiceitemLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} InvoiceitemListMatch
 * @property {*} [created]
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {string} [invoice]
 * @property {number} [limit]
 * @property {boolean} [pending]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} InvoiceitemCreateData
 * @property {string} id
 * @property {number} amount
 * @property {string} currency
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {number} date
 * @property {string} [description]
 * @property {boolean} discountable
 * @property {Array} [discounts]
 * @property {Array} [frozen_fields]
 * @property {*} [invoice]
 * @property {Array} [invoicing_rules]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {number} [net_amount]
 * @property {string} object
 * @property {*} [parent]
 * @property {Object} period
 * @property {*} [pricing]
 * @property {boolean} proration
 * @property {Object} proration_details
 * @property {number} quantity
 * @property {string} quantity_decimal
 * @property {Array} [tax_rates]
 * @property {*} [test_clock]
 */

/**
 * @typedef {Object} Line
 * @property {number} amount
 * @property {string} currency
 * @property {string} [description]
 * @property {number} discount_amount
 * @property {Array} [discount_amounts]
 * @property {boolean} discountable
 * @property {Array} discounts
 * @property {string} id
 * @property {string} [invoice]
 * @property {string} [invoice_line_item]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [parent]
 * @property {Object} period
 * @property {Array} [pretax_credit_amounts]
 * @property {*} [pricing]
 * @property {number} [quantity]
 * @property {string} [quantity_decimal]
 * @property {*} [subscription]
 * @property {number} subtotal
 * @property {Array} tax_rates
 * @property {Array} [taxes]
 * @property {string} type
 * @property {number} [unit_amount]
 * @property {string} [unit_amount_decimal]
 */

/**
 * @typedef {Object} LineListMatch
 * @property {number} [amount]
 * @property {number} [credit_amount]
 * @property {number} [effective_at]
 * @property {string} [email_type]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {string} invoice
 * @property {number} [limit]
 * @property {Array} [line]
 * @property {string} [memo]
 * @property {Object} [metadata]
 * @property {number} [out_of_band_amount]
 * @property {string} [reason]
 * @property {Array} [refund]
 * @property {number} [refund_amount]
 * @property {Object} [shipping_cost]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} LineCreateData
 * @property {string} id
 * @property {string} invoice_id
 * @property {number} amount
 * @property {string} currency
 * @property {string} [description]
 * @property {number} discount_amount
 * @property {Array} [discount_amounts]
 * @property {boolean} discountable
 * @property {Array} discounts
 * @property {string} [invoice]
 * @property {string} [invoice_line_item]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [parent]
 * @property {Object} period
 * @property {Array} [pretax_credit_amounts]
 * @property {*} [pricing]
 * @property {number} [quantity]
 * @property {string} [quantity_decimal]
 * @property {*} [subscription]
 * @property {number} subtotal
 * @property {Array} tax_rates
 * @property {Array} [taxes]
 * @property {string} type
 * @property {number} [unit_amount]
 * @property {string} [unit_amount_decimal]
 */

/**
 * @typedef {Object} LineItem
 * @property {*} [adjustable_quantity]
 * @property {number} amount
 * @property {number} amount_discount
 * @property {number} amount_subtotal
 * @property {number} amount_tax
 * @property {number} amount_total
 * @property {string} currency
 * @property {string} [description]
 * @property {Array} [discounts]
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {string} [performance_location]
 * @property {number} [price]
 * @property {string} [product]
 * @property {number} quantity
 * @property {string} reference
 * @property {*} [reversal]
 * @property {string} tax_behavior
 * @property {Array} [tax_breakdown]
 * @property {string} tax_code
 * @property {Array} [taxes]
 * @property {string} type
 */

/**
 * @typedef {Object} LineItemListMatch
 * @property {string} payment_link_id
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} LinkedAccount
 * @property {*} [account_holder]
 * @property {Array} [account_numbers]
 * @property {*} [balance]
 * @property {*} [balance_refresh]
 * @property {string} category
 * @property {number} created
 * @property {string} [display_name]
 * @property {string} id
 * @property {string} institution_name
 * @property {string} [last4]
 * @property {boolean} livemode
 * @property {string} object
 * @property {*} [ownership]
 * @property {*} [ownership_refresh]
 * @property {Array} [permissions]
 * @property {string} status
 * @property {Object} [status_details]
 * @property {string} subcategory
 * @property {Array} [subscriptions]
 * @property {Array} supported_payment_method_types
 * @property {*} [transaction_refresh]
 */

/**
 * @typedef {Object} LinkedAccountListMatch
 * @property {Object} [account_holder]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [session]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} LinkedAccountOwner
 * @property {string} [email]
 * @property {string} id
 * @property {string} name
 * @property {string} object
 * @property {string} ownership
 * @property {string} [phone]
 * @property {string} [raw_address]
 * @property {number} [refreshed_at]
 */

/**
 * @typedef {Object} LinkedAccountOwnerListMatch
 * @property {string} account
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} ownership
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} Location
 * @property {Object} address
 * @property {Object} [address_kana]
 * @property {Object} [address_kanji]
 * @property {string} [city]
 * @property {string} [configuration_overrides]
 * @property {string} [country]
 * @property {string} [description]
 * @property {string} display_name
 * @property {string} [display_name_kana]
 * @property {string} [display_name_kanji]
 * @property {string} id
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {string} [phone]
 * @property {string} [postal_code]
 * @property {string} [state]
 * @property {string} type
 */

/**
 * @typedef {Object} LocationLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} LocationListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} type
 */

/**
 * @typedef {Object} LocationCreateData
 * @property {string} id
 * @property {Object} address
 * @property {Object} [address_kana]
 * @property {Object} [address_kanji]
 * @property {string} [city]
 * @property {string} [configuration_overrides]
 * @property {string} [country]
 * @property {string} [description]
 * @property {string} display_name
 * @property {string} [display_name_kana]
 * @property {string} [display_name_kanji]
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {string} [phone]
 * @property {string} [postal_code]
 * @property {string} [state]
 * @property {string} type
 */

/**
 * @typedef {Object} LocationRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} LoginLink
 * @property {number} created
 * @property {string} object
 * @property {string} url
 */

/**
 * @typedef {Object} LoginLinkCreateData
 * @property {string} account_id
 * @property {number} created
 * @property {string} object
 * @property {string} url
 */

/**
 * @typedef {Object} Mandate
 * @property {Object} customer_acceptance
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} [multi_use]
 * @property {string} object
 * @property {string} [on_behalf_of]
 * @property {*} payment_method
 * @property {Object} payment_method_details
 * @property {Object} single_use
 * @property {string} status
 * @property {string} type
 */

/**
 * @typedef {Object} MandateLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} Meter
 * @property {number} created
 * @property {Object} customer_mapping
 * @property {Object} default_aggregation
 * @property {string} display_name
 * @property {string} event_name
 * @property {string} [event_time_window]
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {string} status
 * @property {Object} status_transitions
 * @property {number} updated
 * @property {Object} value_settings
 */

/**
 * @typedef {Object} MeterLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} MeterListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} MeterCreateData
 * @property {string} id
 * @property {number} created
 * @property {Object} customer_mapping
 * @property {Object} default_aggregation
 * @property {string} display_name
 * @property {string} event_name
 * @property {string} [event_time_window]
 * @property {boolean} livemode
 * @property {string} object
 * @property {string} status
 * @property {Object} status_transitions
 * @property {number} updated
 * @property {Object} value_settings
 */

/**
 * @typedef {Object} MeterEvent
 */

/**
 * @typedef {Object} MeterEventCreateData
 */

/**
 * @typedef {Object} MeterEventAdjustment
 */

/**
 * @typedef {Object} MeterEventAdjustmentCreateData
 */

/**
 * @typedef {Object} MeterEventSummary
 * @property {number} aggregated_value
 * @property {number} end_time
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} meter
 * @property {string} object
 * @property {number} start_time
 */

/**
 * @typedef {Object} MeterEventSummaryListMatch
 * @property {string} id
 * @property {string} customer
 * @property {number} end_time
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {number} start_time
 * @property {string} [starting_after]
 * @property {string} [value_grouping_window]
 */

/**
 * @typedef {Object} OnboardingLink
 * @property {*} [apple_terms_and_conditions]
 */

/**
 * @typedef {Object} OnboardingLinkCreateData
 * @property {*} [apple_terms_and_conditions]
 */

/**
 * @typedef {Object} Order
 * @property {number} amount_fees
 * @property {number} amount_subtotal
 * @property {number} amount_total
 * @property {Object} beneficiary
 * @property {number} [canceled_at]
 * @property {string} [cancellation_reason]
 * @property {string} [certificate]
 * @property {number} [confirmed_at]
 * @property {number} created
 * @property {string} currency
 * @property {number} [delayed_at]
 * @property {number} [delivered_at]
 * @property {Array} delivery_details
 * @property {number} expected_delivery_year
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} metric_tons
 * @property {string} object
 * @property {*} product
 * @property {number} [product_substituted_at]
 * @property {string} status
 */

/**
 * @typedef {Object} OrderLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} OrderListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} OrderCreateData
 * @property {string} id
 * @property {number} amount_fees
 * @property {number} amount_subtotal
 * @property {number} amount_total
 * @property {Object} beneficiary
 * @property {number} [canceled_at]
 * @property {string} [cancellation_reason]
 * @property {string} [certificate]
 * @property {number} [confirmed_at]
 * @property {number} created
 * @property {string} currency
 * @property {number} [delayed_at]
 * @property {number} [delivered_at]
 * @property {Array} delivery_details
 * @property {number} expected_delivery_year
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} metric_tons
 * @property {string} object
 * @property {*} product
 * @property {number} [product_substituted_at]
 * @property {string} status
 */

/**
 * @typedef {Object} OutboundPayment
 * @property {number} amount
 * @property {boolean} cancelable
 * @property {number} created
 * @property {string} currency
 * @property {string} [customer]
 * @property {string} [description]
 * @property {string} [destination_payment_method]
 * @property {*} [destination_payment_method_details]
 * @property {*} [end_user_details]
 * @property {number} expected_arrival_date
 * @property {string} financial_account
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [returned_details]
 * @property {string} statement_descriptor
 * @property {string} status
 * @property {Object} status_transitions
 * @property {*} [tracking_details]
 * @property {*} transaction
 */

/**
 * @typedef {Object} OutboundPaymentLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} OutboundPaymentListMatch
 * @property {*} [created]
 * @property {string} [customer]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {string} financial_account
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} OutboundPaymentCreateData
 * @property {string} id
 * @property {number} amount
 * @property {boolean} cancelable
 * @property {number} created
 * @property {string} currency
 * @property {string} [customer]
 * @property {string} [description]
 * @property {string} [destination_payment_method]
 * @property {*} [destination_payment_method_details]
 * @property {*} [end_user_details]
 * @property {number} expected_arrival_date
 * @property {string} financial_account
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [returned_details]
 * @property {string} statement_descriptor
 * @property {string} status
 * @property {Object} status_transitions
 * @property {*} [tracking_details]
 * @property {*} transaction
 */

/**
 * @typedef {Object} OutboundTransfer
 * @property {number} amount
 * @property {boolean} cancelable
 * @property {number} created
 * @property {string} currency
 * @property {string} [description]
 * @property {string} [destination_payment_method]
 * @property {Object} destination_payment_method_details
 * @property {number} expected_arrival_date
 * @property {string} financial_account
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [returned_details]
 * @property {string} statement_descriptor
 * @property {string} status
 * @property {Object} status_transitions
 * @property {*} [tracking_details]
 * @property {*} transaction
 */

/**
 * @typedef {Object} OutboundTransferLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} OutboundTransferListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {string} financial_account
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} OutboundTransferCreateData
 * @property {string} id
 * @property {number} amount
 * @property {boolean} cancelable
 * @property {number} created
 * @property {string} currency
 * @property {string} [description]
 * @property {string} [destination_payment_method]
 * @property {Object} destination_payment_method_details
 * @property {number} expected_arrival_date
 * @property {string} financial_account
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [returned_details]
 * @property {string} statement_descriptor
 * @property {string} status
 * @property {Object} status_transitions
 * @property {*} [tracking_details]
 * @property {*} transaction
 */

/**
 * @typedef {Object} PaymentAttemptRecord
 * @property {Object} amount
 * @property {Object} amount_authorized
 * @property {Object} amount_canceled
 * @property {Object} amount_failed
 * @property {Object} amount_guaranteed
 * @property {Object} amount_refunded
 * @property {Object} amount_requested
 * @property {string} [application]
 * @property {number} created
 * @property {*} [customer_details]
 * @property {string} [customer_presence]
 * @property {string} [description]
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [payment_method_details]
 * @property {string} [payment_record]
 * @property {Object} processor_details
 * @property {string} reported_by
 * @property {*} [shipping_details]
 */

/**
 * @typedef {Object} PaymentAttemptRecordLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PaymentAttemptRecordListMatch
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} payment_record
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} PaymentEvaluation
 * @property {Object} client_device_metadata_details
 * @property {number} created_at
 * @property {Object} [customer_details]
 * @property {Array} events
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {*} [outcome]
 * @property {Object} payment_details
 * @property {string} recommended_action
 * @property {Object} signals
 */

/**
 * @typedef {Object} PaymentEvaluationCreateData
 * @property {Object} client_device_metadata_details
 * @property {number} created_at
 * @property {Object} [customer_details]
 * @property {Array} events
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {*} [outcome]
 * @property {Object} payment_details
 * @property {string} recommended_action
 * @property {Object} signals
 */

/**
 * @typedef {Object} PaymentIntent
 * @property {Array} [allowed_payment_method_types]
 * @property {number} [amount]
 * @property {number} [amount_capturable]
 * @property {*} [amount_details]
 * @property {number} [amount_received]
 * @property {*} [application]
 * @property {number} [application_fee_amount]
 * @property {*} [automatic_payment_methods]
 * @property {number} [canceled_at]
 * @property {string} [cancellation_reason]
 * @property {string} [capture_method]
 * @property {string} [client_secret]
 * @property {string} [confirmation_method]
 * @property {number} created
 * @property {string} [currency]
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {string} [description]
 * @property {Array} [excluded_payment_method_types]
 * @property {Object} [hooks]
 * @property {string} id
 * @property {*} [last_payment_error]
 * @property {*} [latest_charge]
 * @property {boolean} livemode
 * @property {*} [managed_payments]
 * @property {Object} [metadata]
 * @property {*} [next_action]
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {Object} [payment_details]
 * @property {*} [payment_method]
 * @property {*} [payment_method_configuration_details]
 * @property {*} [payment_method_options]
 * @property {Array} [payment_method_types]
 * @property {*} [payment_record]
 * @property {Object} presentment_details
 * @property {*} [processing]
 * @property {string} [receipt_email]
 * @property {*} [review]
 * @property {string} [setup_future_usage]
 * @property {*} [shipping]
 * @property {string} [statement_descriptor]
 * @property {string} [statement_descriptor_suffix]
 * @property {string} status
 * @property {*} [transfer_data]
 * @property {string} [transfer_group]
 */

/**
 * @typedef {Object} PaymentIntentLoadMatch
 * @property {string} id
 * @property {string} [client_secret]
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PaymentIntentListMatch
 * @property {*} [created]
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} PaymentIntentCreateData
 * @property {string} id
 * @property {Array} [allowed_payment_method_types]
 * @property {number} [amount]
 * @property {number} [amount_capturable]
 * @property {*} [amount_details]
 * @property {number} [amount_received]
 * @property {*} [application]
 * @property {number} [application_fee_amount]
 * @property {*} [automatic_payment_methods]
 * @property {number} [canceled_at]
 * @property {string} [cancellation_reason]
 * @property {string} [capture_method]
 * @property {string} [client_secret]
 * @property {string} [confirmation_method]
 * @property {number} created
 * @property {string} [currency]
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {string} [description]
 * @property {Array} [excluded_payment_method_types]
 * @property {Object} [hooks]
 * @property {*} [last_payment_error]
 * @property {*} [latest_charge]
 * @property {boolean} livemode
 * @property {*} [managed_payments]
 * @property {Object} [metadata]
 * @property {*} [next_action]
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {Object} [payment_details]
 * @property {*} [payment_method]
 * @property {*} [payment_method_configuration_details]
 * @property {*} [payment_method_options]
 * @property {Array} [payment_method_types]
 * @property {*} [payment_record]
 * @property {Object} presentment_details
 * @property {*} [processing]
 * @property {string} [receipt_email]
 * @property {*} [review]
 * @property {string} [setup_future_usage]
 * @property {*} [shipping]
 * @property {string} [statement_descriptor]
 * @property {string} [statement_descriptor_suffix]
 * @property {string} status
 * @property {*} [transfer_data]
 * @property {string} [transfer_group]
 */

/**
 * @typedef {Object} PaymentIntentAmountDetailsLineItem
 * @property {number} [discount_amount]
 * @property {string} id
 * @property {string} object
 * @property {*} [payment_method_options]
 * @property {string} [product_code]
 * @property {string} product_name
 * @property {number} quantity
 * @property {*} [tax]
 * @property {number} unit_cost
 * @property {string} [unit_of_measure]
 */

/**
 * @typedef {Object} PaymentIntentAmountDetailsLineItemListMatch
 * @property {string} intent
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} PaymentLink
 * @property {boolean} active
 * @property {Object} after_completion
 * @property {boolean} allow_promotion_codes
 * @property {*} [application]
 * @property {number} [application_fee_amount]
 * @property {number} [application_fee_percent]
 * @property {Object} automatic_tax
 * @property {string} billing_address_collection
 * @property {*} [consent_collection]
 * @property {string} currency
 * @property {Array} custom_fields
 * @property {Object} custom_text
 * @property {string} customer_creation
 * @property {string} id
 * @property {string} [inactive_message]
 * @property {*} [invoice_creation]
 * @property {Object} line_items
 * @property {boolean} livemode
 * @property {*} [managed_payments]
 * @property {Object} metadata
 * @property {Object} [name_collection]
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {Array} [optional_items]
 * @property {*} [payment_intent_data]
 * @property {string} payment_method_collection
 * @property {*} [payment_method_options]
 * @property {Array} [payment_method_types]
 * @property {Object} phone_number_collection
 * @property {*} [restrictions]
 * @property {*} [shipping_address_collection]
 * @property {Array} shipping_options
 * @property {string} submit_type
 * @property {*} [subscription_data]
 * @property {Object} tax_id_collection
 * @property {*} [transfer_data]
 * @property {string} url
 */

/**
 * @typedef {Object} PaymentLinkLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PaymentLinkListMatch
 * @property {boolean} [active]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} PaymentLinkCreateData
 * @property {string} id
 * @property {boolean} active
 * @property {Object} after_completion
 * @property {boolean} allow_promotion_codes
 * @property {*} [application]
 * @property {number} [application_fee_amount]
 * @property {number} [application_fee_percent]
 * @property {Object} automatic_tax
 * @property {string} billing_address_collection
 * @property {*} [consent_collection]
 * @property {string} currency
 * @property {Array} custom_fields
 * @property {Object} custom_text
 * @property {string} customer_creation
 * @property {string} [inactive_message]
 * @property {*} [invoice_creation]
 * @property {Object} line_items
 * @property {boolean} livemode
 * @property {*} [managed_payments]
 * @property {Object} metadata
 * @property {Object} [name_collection]
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {Array} [optional_items]
 * @property {*} [payment_intent_data]
 * @property {string} payment_method_collection
 * @property {*} [payment_method_options]
 * @property {Array} [payment_method_types]
 * @property {Object} phone_number_collection
 * @property {*} [restrictions]
 * @property {*} [shipping_address_collection]
 * @property {Array} shipping_options
 * @property {string} submit_type
 * @property {*} [subscription_data]
 * @property {Object} tax_id_collection
 * @property {*} [transfer_data]
 * @property {string} url
 */

/**
 * @typedef {Object} PaymentMethod
 * @property {Object} [acss_debit]
 * @property {Object} [affirm]
 * @property {Object} [afterpay_clearpay]
 * @property {Object} [alipay]
 * @property {boolean} [allow_redisplay]
 * @property {Object} [alma]
 * @property {Object} [amazon_pay]
 * @property {Object} [au_becs_debit]
 * @property {Object} [bacs_debit]
 * @property {Object} [bancontact]
 * @property {Object} [billie]
 * @property {Object} billing_details
 * @property {Object} [bizum]
 * @property {Object} [blik]
 * @property {Object} boleto
 * @property {Object} card
 * @property {Object} card_present
 * @property {Object} [cashapp]
 * @property {number} created
 * @property {Object} [crypto]
 * @property {Object} custom
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {Object} [customer_balance]
 * @property {Object} [eps]
 * @property {Object} fpx
 * @property {Object} [giropay]
 * @property {Object} [grabpay]
 * @property {string} id
 * @property {Object} [ideal]
 * @property {Object} interac_present
 * @property {Object} [kakao_pay]
 * @property {Object} [klarna]
 * @property {Object} [konbini]
 * @property {Object} [kr_card]
 * @property {Object} [link]
 * @property {boolean} livemode
 * @property {Object} [mb_way]
 * @property {Object} [metadata]
 * @property {Object} [mobilepay]
 * @property {Object} [multibanco]
 * @property {Object} naver_pay
 * @property {Object} nz_bank_account
 * @property {string} object
 * @property {Object} [oxxo]
 * @property {Object} [p24]
 * @property {Object} [pay_by_bank]
 * @property {Object} [payco]
 * @property {Object} [paynow]
 * @property {Object} [paypal]
 * @property {Object} [paypay]
 * @property {Object} [payto]
 * @property {Object} [pix]
 * @property {Object} [promptpay]
 * @property {Object} [radar_options]
 * @property {Object} [revolut_pay]
 * @property {Object} [samsung_pay]
 * @property {Object} [satispay]
 * @property {Object} [scalapay]
 * @property {Object} [sepa_debit]
 * @property {Object} [sequra]
 * @property {Object} [sofort]
 * @property {Object} [sunbit]
 * @property {Object} [swish]
 * @property {Object} [twint]
 * @property {string} type
 * @property {Object} [upi]
 * @property {Object} [us_bank_account]
 * @property {Object} [wechat_pay]
 * @property {Object} [zip]
 */

/**
 * @typedef {Object} PaymentMethodLoadMatch
 * @property {string} [customer_id]
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PaymentMethodListMatch
 * @property {boolean} [allow_redisplay]
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [type]
 */

/**
 * @typedef {Object} PaymentMethodCreateData
 * @property {string} id
 * @property {Object} [acss_debit]
 * @property {Object} [affirm]
 * @property {Object} [afterpay_clearpay]
 * @property {Object} [alipay]
 * @property {boolean} [allow_redisplay]
 * @property {Object} [alma]
 * @property {Object} [amazon_pay]
 * @property {Object} [au_becs_debit]
 * @property {Object} [bacs_debit]
 * @property {Object} [bancontact]
 * @property {Object} [billie]
 * @property {Object} billing_details
 * @property {Object} [bizum]
 * @property {Object} [blik]
 * @property {Object} boleto
 * @property {Object} card
 * @property {Object} card_present
 * @property {Object} [cashapp]
 * @property {number} created
 * @property {Object} [crypto]
 * @property {Object} custom
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {Object} [customer_balance]
 * @property {Object} [eps]
 * @property {Object} fpx
 * @property {Object} [giropay]
 * @property {Object} [grabpay]
 * @property {Object} [ideal]
 * @property {Object} interac_present
 * @property {Object} [kakao_pay]
 * @property {Object} [klarna]
 * @property {Object} [konbini]
 * @property {Object} [kr_card]
 * @property {Object} [link]
 * @property {boolean} livemode
 * @property {Object} [mb_way]
 * @property {Object} [metadata]
 * @property {Object} [mobilepay]
 * @property {Object} [multibanco]
 * @property {Object} naver_pay
 * @property {Object} nz_bank_account
 * @property {string} object
 * @property {Object} [oxxo]
 * @property {Object} [p24]
 * @property {Object} [pay_by_bank]
 * @property {Object} [payco]
 * @property {Object} [paynow]
 * @property {Object} [paypal]
 * @property {Object} [paypay]
 * @property {Object} [payto]
 * @property {Object} [pix]
 * @property {Object} [promptpay]
 * @property {Object} [radar_options]
 * @property {Object} [revolut_pay]
 * @property {Object} [samsung_pay]
 * @property {Object} [satispay]
 * @property {Object} [scalapay]
 * @property {Object} [sepa_debit]
 * @property {Object} [sequra]
 * @property {Object} [sofort]
 * @property {Object} [sunbit]
 * @property {Object} [swish]
 * @property {Object} [twint]
 * @property {string} type
 * @property {Object} [upi]
 * @property {Object} [us_bank_account]
 * @property {Object} [wechat_pay]
 * @property {Object} [zip]
 */

/**
 * @typedef {Object} PaymentMethodConfiguration
 * @property {Object} acss_debit
 * @property {boolean} active
 * @property {Object} affirm
 * @property {Object} afterpay_clearpay
 * @property {Object} alipay
 * @property {Object} alma
 * @property {Object} amazon_pay
 * @property {Object} apple_pay
 * @property {string} [application]
 * @property {Object} au_becs_debit
 * @property {Object} bacs_debit
 * @property {Object} bancontact
 * @property {Object} billie
 * @property {Object} bizum
 * @property {Object} blik
 * @property {Object} boleto
 * @property {Object} card
 * @property {Object} cartes_bancaires
 * @property {Object} cashapp
 * @property {Object} crypto
 * @property {Object} customer_balance
 * @property {Object} eps
 * @property {Object} fpx
 * @property {Object} giropay
 * @property {Object} google_pay
 * @property {Object} grabpay
 * @property {string} id
 * @property {Object} ideal
 * @property {boolean} is_default
 * @property {Object} jcb
 * @property {Object} kakao_pay
 * @property {Object} klarna
 * @property {Object} konbini
 * @property {Object} kr_card
 * @property {Object} link
 * @property {boolean} livemode
 * @property {Object} mb_way
 * @property {Object} mobilepay
 * @property {Object} multibanco
 * @property {string} name
 * @property {Object} naver_pay
 * @property {Object} nz_bank_account
 * @property {string} object
 * @property {Object} oxxo
 * @property {Object} p24
 * @property {string} [parent]
 * @property {Object} pay_by_bank
 * @property {Object} payco
 * @property {Object} paynow
 * @property {Object} paypal
 * @property {Object} paypay
 * @property {Object} payto
 * @property {Object} pix
 * @property {Object} promptpay
 * @property {Object} revolut_pay
 * @property {Object} samsung_pay
 * @property {Object} satispay
 * @property {Object} scalapay
 * @property {Object} sepa_debit
 * @property {Object} sequra
 * @property {Object} sofort
 * @property {Object} sunbit
 * @property {Object} swish
 * @property {Object} twint
 * @property {Object} upi
 * @property {Object} us_bank_account
 * @property {Object} wechat_pay
 * @property {Object} zip
 */

/**
 * @typedef {Object} PaymentMethodConfigurationLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PaymentMethodConfigurationListMatch
 * @property {boolean} [active]
 * @property {*} [application]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} PaymentMethodConfigurationCreateData
 * @property {string} id
 * @property {Object} acss_debit
 * @property {boolean} active
 * @property {Object} affirm
 * @property {Object} afterpay_clearpay
 * @property {Object} alipay
 * @property {Object} alma
 * @property {Object} amazon_pay
 * @property {Object} apple_pay
 * @property {string} [application]
 * @property {Object} au_becs_debit
 * @property {Object} bacs_debit
 * @property {Object} bancontact
 * @property {Object} billie
 * @property {Object} bizum
 * @property {Object} blik
 * @property {Object} boleto
 * @property {Object} card
 * @property {Object} cartes_bancaires
 * @property {Object} cashapp
 * @property {Object} crypto
 * @property {Object} customer_balance
 * @property {Object} eps
 * @property {Object} fpx
 * @property {Object} giropay
 * @property {Object} google_pay
 * @property {Object} grabpay
 * @property {Object} ideal
 * @property {boolean} is_default
 * @property {Object} jcb
 * @property {Object} kakao_pay
 * @property {Object} klarna
 * @property {Object} konbini
 * @property {Object} kr_card
 * @property {Object} link
 * @property {boolean} livemode
 * @property {Object} mb_way
 * @property {Object} mobilepay
 * @property {Object} multibanco
 * @property {string} name
 * @property {Object} naver_pay
 * @property {Object} nz_bank_account
 * @property {string} object
 * @property {Object} oxxo
 * @property {Object} p24
 * @property {string} [parent]
 * @property {Object} pay_by_bank
 * @property {Object} payco
 * @property {Object} paynow
 * @property {Object} paypal
 * @property {Object} paypay
 * @property {Object} payto
 * @property {Object} pix
 * @property {Object} promptpay
 * @property {Object} revolut_pay
 * @property {Object} samsung_pay
 * @property {Object} satispay
 * @property {Object} scalapay
 * @property {Object} sepa_debit
 * @property {Object} sequra
 * @property {Object} sofort
 * @property {Object} sunbit
 * @property {Object} swish
 * @property {Object} twint
 * @property {Object} upi
 * @property {Object} us_bank_account
 * @property {Object} wechat_pay
 * @property {Object} zip
 */

/**
 * @typedef {Object} PaymentMethodDomain
 * @property {Object} amazon_pay
 * @property {Object} apple_pay
 * @property {number} created
 * @property {string} domain_name
 * @property {boolean} enabled
 * @property {Object} google_pay
 * @property {string} id
 * @property {Object} klarna
 * @property {Object} link
 * @property {boolean} livemode
 * @property {string} object
 * @property {Object} paypal
 */

/**
 * @typedef {Object} PaymentMethodDomainLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PaymentMethodDomainListMatch
 * @property {string} [domain_name]
 * @property {boolean} [enabled]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} PaymentMethodDomainCreateData
 * @property {string} id
 * @property {Object} amazon_pay
 * @property {Object} apple_pay
 * @property {number} created
 * @property {string} domain_name
 * @property {boolean} enabled
 * @property {Object} google_pay
 * @property {Object} klarna
 * @property {Object} link
 * @property {boolean} livemode
 * @property {string} object
 * @property {Object} paypal
 */

/**
 * @typedef {Object} PaymentRecord
 * @property {Object} amount
 * @property {Object} amount_authorized
 * @property {Object} amount_canceled
 * @property {Object} amount_failed
 * @property {Object} amount_guaranteed
 * @property {Object} amount_refunded
 * @property {Object} amount_requested
 * @property {string} [application]
 * @property {number} created
 * @property {*} [customer_details]
 * @property {string} [customer_presence]
 * @property {string} [description]
 * @property {string} id
 * @property {string} [latest_payment_attempt_record]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [payment_method_details]
 * @property {Object} processor_details
 * @property {string} reported_by
 * @property {*} [shipping_details]
 */

/**
 * @typedef {Object} PaymentRecordLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PaymentRecordListMatch
 * @property {number} [created_after]
 * @property {number} [created_before]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} PaymentRecordCreateData
 * @property {Object} amount
 * @property {Object} amount_authorized
 * @property {Object} amount_canceled
 * @property {Object} amount_failed
 * @property {Object} amount_guaranteed
 * @property {Object} amount_refunded
 * @property {Object} amount_requested
 * @property {string} [application]
 * @property {number} created
 * @property {*} [customer_details]
 * @property {string} [customer_presence]
 * @property {string} [description]
 * @property {string} id
 * @property {string} [latest_payment_attempt_record]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [payment_method_details]
 * @property {Object} processor_details
 * @property {string} reported_by
 * @property {*} [shipping_details]
 */

/**
 * @typedef {Object} Payout
 * @property {number} amount
 * @property {*} [application_fee]
 * @property {number} [application_fee_amount]
 * @property {number} arrival_date
 * @property {boolean} automatic
 * @property {*} [balance_transaction]
 * @property {number} created
 * @property {string} currency
 * @property {string} [description]
 * @property {*} [destination]
 * @property {*} [failure_balance_transaction]
 * @property {string} [failure_code]
 * @property {string} [failure_message]
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} method
 * @property {string} object
 * @property {*} [original_payout]
 * @property {string} [payout_method]
 * @property {string} reconciliation_status
 * @property {*} [reversed_by]
 * @property {string} source_type
 * @property {string} [statement_descriptor]
 * @property {string} status
 * @property {string} [trace_id]
 * @property {string} type
 */

/**
 * @typedef {Object} PayoutLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PayoutListMatch
 * @property {*} [arrival_date]
 * @property {*} [created]
 * @property {string} [destination]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} PayoutCreateData
 * @property {string} id
 * @property {number} amount
 * @property {*} [application_fee]
 * @property {number} [application_fee_amount]
 * @property {number} arrival_date
 * @property {boolean} automatic
 * @property {*} [balance_transaction]
 * @property {number} created
 * @property {string} currency
 * @property {string} [description]
 * @property {*} [destination]
 * @property {*} [failure_balance_transaction]
 * @property {string} [failure_code]
 * @property {string} [failure_message]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} method
 * @property {string} object
 * @property {*} [original_payout]
 * @property {string} [payout_method]
 * @property {string} reconciliation_status
 * @property {*} [reversed_by]
 * @property {string} source_type
 * @property {string} [statement_descriptor]
 * @property {string} status
 * @property {string} [trace_id]
 * @property {string} type
 */

/**
 * @typedef {Object} Person
 * @property {string} account
 * @property {Object} [additional_tos_acceptances]
 * @property {Object} [address]
 * @property {*} [address_kana]
 * @property {*} [address_kanji]
 * @property {number} created
 * @property {Object} [dob]
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [first_name_kana]
 * @property {string} [first_name_kanji]
 * @property {Array} [full_name_aliases]
 * @property {*} [future_requirements]
 * @property {string} [gender]
 * @property {string} id
 * @property {boolean} [id_number_provided]
 * @property {boolean} [id_number_secondary_provided]
 * @property {string} [last_name]
 * @property {string} [last_name_kana]
 * @property {string} [last_name_kanji]
 * @property {string} [maiden_name]
 * @property {Object} [metadata]
 * @property {string} [nationality]
 * @property {string} object
 * @property {string} [phone]
 * @property {string} [political_exposure]
 * @property {Object} [registered_address]
 * @property {Object} [relationship]
 * @property {*} [requirements]
 * @property {boolean} [ssn_last_4_provided]
 * @property {*} [us_cfpb_data]
 * @property {Object} verification
 */

/**
 * @typedef {Object} PersonLoadMatch
 * @property {string} account_id
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PersonListMatch
 * @property {string} account_id
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {Object} [relationship]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} PersonCreateData
 * @property {string} account_id
 * @property {string} [id]
 * @property {string} account
 * @property {Object} [additional_tos_acceptances]
 * @property {Object} [address]
 * @property {*} [address_kana]
 * @property {*} [address_kanji]
 * @property {number} created
 * @property {Object} [dob]
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [first_name_kana]
 * @property {string} [first_name_kanji]
 * @property {Array} [full_name_aliases]
 * @property {*} [future_requirements]
 * @property {string} [gender]
 * @property {boolean} [id_number_provided]
 * @property {boolean} [id_number_secondary_provided]
 * @property {string} [last_name]
 * @property {string} [last_name_kana]
 * @property {string} [last_name_kanji]
 * @property {string} [maiden_name]
 * @property {Object} [metadata]
 * @property {string} [nationality]
 * @property {string} object
 * @property {string} [phone]
 * @property {string} [political_exposure]
 * @property {Object} [registered_address]
 * @property {Object} [relationship]
 * @property {*} [requirements]
 * @property {boolean} [ssn_last_4_provided]
 * @property {*} [us_cfpb_data]
 * @property {Object} verification
 */

/**
 * @typedef {Object} PersonalizationDesign
 * @property {*} [card_logo]
 * @property {*} [carrier_text]
 * @property {number} created
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} [lookup_key]
 * @property {Object} metadata
 * @property {string} [name]
 * @property {string} object
 * @property {*} physical_bundle
 * @property {Object} preferences
 * @property {Object} rejection_reasons
 * @property {string} status
 */

/**
 * @typedef {Object} PersonalizationDesignLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PersonalizationDesignListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {Array} [lookup_key]
 * @property {Object} [preference]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} PersonalizationDesignCreateData
 * @property {string} id
 * @property {*} [card_logo]
 * @property {*} [carrier_text]
 * @property {number} created
 * @property {boolean} livemode
 * @property {string} [lookup_key]
 * @property {Object} metadata
 * @property {string} [name]
 * @property {string} object
 * @property {*} physical_bundle
 * @property {Object} preferences
 * @property {Object} rejection_reasons
 * @property {string} status
 */

/**
 * @typedef {Object} PhysicalBundle
 * @property {string} card_logo
 * @property {string} carrier_text
 * @property {Object} features
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} name
 * @property {string} object
 * @property {string} second_line
 * @property {string} status
 * @property {string} type
 */

/**
 * @typedef {Object} PhysicalBundleLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PhysicalBundleListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 * @property {string} [type]
 */

/**
 * @typedef {Object} Plan
 * @property {boolean} active
 * @property {number} [amount]
 * @property {string} [amount_decimal]
 * @property {string} billing_scheme
 * @property {number} created
 * @property {string} currency
 * @property {string} id
 * @property {string} interval
 * @property {number} interval_count
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} [meter]
 * @property {string} [nickname]
 * @property {string} object
 * @property {*} [product]
 * @property {Array} [tiers]
 * @property {string} [tiers_mode]
 * @property {*} [transform_usage]
 * @property {number} [trial_period_days]
 * @property {string} usage_type
 */

/**
 * @typedef {Object} PlanLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PlanListMatch
 * @property {boolean} [active]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [product]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} PlanCreateData
 * @property {string} id
 * @property {boolean} active
 * @property {number} [amount]
 * @property {string} [amount_decimal]
 * @property {string} billing_scheme
 * @property {number} created
 * @property {string} currency
 * @property {string} interval
 * @property {number} interval_count
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} [meter]
 * @property {string} [nickname]
 * @property {string} object
 * @property {*} [product]
 * @property {Array} [tiers]
 * @property {string} [tiers_mode]
 * @property {*} [transform_usage]
 * @property {number} [trial_period_days]
 * @property {string} usage_type
 */

/**
 * @typedef {Object} Price
 * @property {boolean} active
 * @property {string} billing_scheme
 * @property {number} created
 * @property {string} currency
 * @property {Object} [currency_options]
 * @property {*} [custom_unit_amount]
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} [lookup_key]
 * @property {Object} metadata
 * @property {string} [nickname]
 * @property {string} object
 * @property {*} product
 * @property {*} [recurring]
 * @property {string} [tax_behavior]
 * @property {Array} [tiers]
 * @property {string} [tiers_mode]
 * @property {*} [transform_quantity]
 * @property {string} type
 * @property {number} [unit_amount]
 * @property {string} [unit_amount_decimal]
 */

/**
 * @typedef {Object} PriceLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PriceListMatch
 * @property {boolean} [active]
 * @property {*} [created]
 * @property {string} [currency]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {Array} [lookup_key]
 * @property {string} [product]
 * @property {Object} [recurring]
 * @property {string} [starting_after]
 * @property {string} [type]
 */

/**
 * @typedef {Object} PriceCreateData
 * @property {string} id
 * @property {boolean} active
 * @property {string} billing_scheme
 * @property {number} created
 * @property {string} currency
 * @property {Object} [currency_options]
 * @property {*} [custom_unit_amount]
 * @property {boolean} livemode
 * @property {string} [lookup_key]
 * @property {Object} metadata
 * @property {string} [nickname]
 * @property {string} object
 * @property {*} product
 * @property {*} [recurring]
 * @property {string} [tax_behavior]
 * @property {Array} [tiers]
 * @property {string} [tiers_mode]
 * @property {*} [transform_quantity]
 * @property {string} type
 * @property {number} [unit_amount]
 * @property {string} [unit_amount_decimal]
 */

/**
 * @typedef {Object} Product
 * @property {boolean} active
 * @property {number} created
 * @property {Object} current_prices_per_metric_ton
 * @property {*} [default_price]
 * @property {number} [delivery_year]
 * @property {string} [description]
 * @property {string} id
 * @property {Array} images
 * @property {boolean} livemode
 * @property {Array} marketing_features
 * @property {Object} metadata
 * @property {string} metric_tons_available
 * @property {string} name
 * @property {string} object
 * @property {*} [package_dimensions]
 * @property {boolean} [shippable]
 * @property {string} [statement_descriptor]
 * @property {Array} suppliers
 * @property {*} [tax_code]
 * @property {*} [tax_details]
 * @property {string} [unit_label]
 * @property {number} updated
 * @property {string} [url]
 */

/**
 * @typedef {Object} ProductLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ProductListMatch
 * @property {boolean} [active]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {Array} [ids]
 * @property {number} [limit]
 * @property {boolean} [shippable]
 * @property {string} [starting_after]
 * @property {string} [url]
 */

/**
 * @typedef {Object} ProductCreateData
 * @property {string} id
 * @property {boolean} active
 * @property {number} created
 * @property {Object} current_prices_per_metric_ton
 * @property {*} [default_price]
 * @property {number} [delivery_year]
 * @property {string} [description]
 * @property {Array} images
 * @property {boolean} livemode
 * @property {Array} marketing_features
 * @property {Object} metadata
 * @property {string} metric_tons_available
 * @property {string} name
 * @property {string} object
 * @property {*} [package_dimensions]
 * @property {boolean} [shippable]
 * @property {string} [statement_descriptor]
 * @property {Array} suppliers
 * @property {*} [tax_code]
 * @property {*} [tax_details]
 * @property {string} [unit_label]
 * @property {number} updated
 * @property {string} [url]
 */

/**
 * @typedef {Object} ProductRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ProductFeature
 * @property {boolean} active
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} lookup_key
 * @property {Object} metadata
 * @property {string} name
 * @property {string} object
 */

/**
 * @typedef {Object} ProductFeatureLoadMatch
 * @property {string} id
 * @property {string} product_id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ProductFeatureCreateData
 * @property {string} id
 * @property {boolean} active
 * @property {boolean} livemode
 * @property {string} lookup_key
 * @property {Object} metadata
 * @property {string} name
 * @property {string} object
 */

/**
 * @typedef {Object} PromotionCode
 * @property {boolean} active
 * @property {string} code
 * @property {number} created
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {number} [expires_at]
 * @property {string} id
 * @property {boolean} livemode
 * @property {number} [max_redemptions]
 * @property {Object} [metadata]
 * @property {string} object
 * @property {Object} promotion
 * @property {Object} restrictions
 * @property {number} times_redeemed
 */

/**
 * @typedef {Object} PromotionCodeLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} PromotionCodeListMatch
 * @property {boolean} [active]
 * @property {string} [code]
 * @property {string} [coupon]
 * @property {*} [created]
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} PromotionCodeCreateData
 * @property {string} id
 * @property {boolean} active
 * @property {string} code
 * @property {number} created
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {number} [expires_at]
 * @property {boolean} livemode
 * @property {number} [max_redemptions]
 * @property {Object} [metadata]
 * @property {string} object
 * @property {Object} promotion
 * @property {Object} restrictions
 * @property {number} times_redeemed
 */

/**
 * @typedef {Object} Quote
 * @property {number} amount_subtotal
 * @property {number} amount_total
 * @property {*} [application]
 * @property {number} [application_fee_amount]
 * @property {number} [application_fee_percent]
 * @property {Object} automatic_tax
 * @property {string} collection_method
 * @property {Object} computed
 * @property {number} created
 * @property {string} [currency]
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {Array} [default_tax_rates]
 * @property {string} [description]
 * @property {Array} discounts
 * @property {number} expires_at
 * @property {string} [footer]
 * @property {*} [from_quote]
 * @property {string} [header]
 * @property {string} id
 * @property {*} [invoice]
 * @property {Object} invoice_settings
 * @property {Object} line_items
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} [number]
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {string} status
 * @property {Object} status_transitions
 * @property {*} [subscription]
 * @property {Object} subscription_data
 * @property {*} [subscription_schedule]
 * @property {*} [test_clock]
 * @property {Object} total_details
 * @property {*} [transfer_data]
 */

/**
 * @typedef {Object} QuoteLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} QuoteListMatch
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 * @property {string} [test_clock]
 */

/**
 * @typedef {Object} QuoteCreateData
 * @property {string} id
 * @property {number} amount_subtotal
 * @property {number} amount_total
 * @property {*} [application]
 * @property {number} [application_fee_amount]
 * @property {number} [application_fee_percent]
 * @property {Object} automatic_tax
 * @property {string} collection_method
 * @property {Object} computed
 * @property {number} created
 * @property {string} [currency]
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {Array} [default_tax_rates]
 * @property {string} [description]
 * @property {Array} discounts
 * @property {number} expires_at
 * @property {string} [footer]
 * @property {*} [from_quote]
 * @property {string} [header]
 * @property {*} [invoice]
 * @property {Object} invoice_settings
 * @property {Object} line_items
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} [number]
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {string} status
 * @property {Object} status_transitions
 * @property {*} [subscription]
 * @property {Object} subscription_data
 * @property {*} [subscription_schedule]
 * @property {*} [test_clock]
 * @property {Object} total_details
 * @property {*} [transfer_data]
 */

/**
 * @typedef {Object} QuoteComputedUpfrontLineItem
 * @property {*} [adjustable_quantity]
 * @property {number} amount_discount
 * @property {number} amount_subtotal
 * @property {number} amount_tax
 * @property {number} amount_total
 * @property {string} currency
 * @property {string} [description]
 * @property {Array} [discounts]
 * @property {string} id
 * @property {Object} [metadata]
 * @property {string} object
 * @property {number} [price]
 * @property {number} [quantity]
 * @property {Array} [taxes]
 */

/**
 * @typedef {Object} QuoteComputedUpfrontLineItemListMatch
 * @property {string} id
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} QuotePdf
 * @property {string} [id]
 */

/**
 * @typedef {Object} QuotePdfLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} Reader
 * @property {*} [action]
 * @property {string} [device_sw_version]
 * @property {string} device_type
 * @property {string} id
 * @property {string} [ip_address]
 * @property {string} label
 * @property {number} [last_seen_at]
 * @property {boolean} livemode
 * @property {*} [location]
 * @property {Object} metadata
 * @property {string} object
 * @property {string} serial_number
 * @property {string} [status]
 */

/**
 * @typedef {Object} ReaderLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ReaderListMatch
 * @property {string} [device_type]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [location]
 * @property {string} [serial_number]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} ReaderCreateData
 * @property {string} id
 * @property {*} [action]
 * @property {string} [device_sw_version]
 * @property {string} device_type
 * @property {string} [ip_address]
 * @property {string} label
 * @property {number} [last_seen_at]
 * @property {boolean} livemode
 * @property {*} [location]
 * @property {Object} metadata
 * @property {string} object
 * @property {string} serial_number
 * @property {string} [status]
 */

/**
 * @typedef {Object} ReaderRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ReceivedCredit
 * @property {number} amount
 * @property {number} created
 * @property {string} currency
 * @property {string} description
 * @property {string} [failure_code]
 * @property {string} [financial_account]
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {string} id
 * @property {Object} initiating_payment_method_details
 * @property {Object} linked_flows
 * @property {boolean} livemode
 * @property {string} network
 * @property {string} object
 * @property {*} [reversal_details]
 * @property {string} status
 * @property {*} [transaction]
 */

/**
 * @typedef {Object} ReceivedCreditLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ReceivedCreditListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {string} financial_account
 * @property {number} [limit]
 * @property {Object} [linked_flow]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} ReceivedCreditCreateData
 * @property {number} amount
 * @property {number} created
 * @property {string} currency
 * @property {string} description
 * @property {string} [failure_code]
 * @property {string} [financial_account]
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {string} id
 * @property {Object} initiating_payment_method_details
 * @property {Object} linked_flows
 * @property {boolean} livemode
 * @property {string} network
 * @property {string} object
 * @property {*} [reversal_details]
 * @property {string} status
 * @property {*} [transaction]
 */

/**
 * @typedef {Object} ReceivedDebit
 * @property {number} amount
 * @property {number} created
 * @property {string} currency
 * @property {string} description
 * @property {string} [failure_code]
 * @property {string} [financial_account]
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {string} id
 * @property {Object} initiating_payment_method_details
 * @property {Object} linked_flows
 * @property {boolean} livemode
 * @property {string} network
 * @property {string} object
 * @property {*} [reversal_details]
 * @property {string} status
 * @property {*} [transaction]
 */

/**
 * @typedef {Object} ReceivedDebitLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ReceivedDebitListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {string} financial_account
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} ReceivedDebitCreateData
 * @property {number} amount
 * @property {number} created
 * @property {string} currency
 * @property {string} description
 * @property {string} [failure_code]
 * @property {string} [financial_account]
 * @property {string} [hosted_regulatory_receipt_url]
 * @property {string} id
 * @property {Object} initiating_payment_method_details
 * @property {Object} linked_flows
 * @property {boolean} livemode
 * @property {string} network
 * @property {string} object
 * @property {*} [reversal_details]
 * @property {string} status
 * @property {*} [transaction]
 */

/**
 * @typedef {Object} Refund
 * @property {number} amount
 * @property {*} [balance_transaction]
 * @property {*} [charge]
 * @property {number} created
 * @property {string} currency
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {string} [description]
 * @property {Object} destination_details
 * @property {*} [failure_balance_transaction]
 * @property {string} [failure_reason]
 * @property {*} fee
 * @property {string} id
 * @property {string} [instructions_email]
 * @property {Object} [metadata]
 * @property {Object} next_action
 * @property {string} object
 * @property {*} [payment_intent]
 * @property {*} [payment_method]
 * @property {string} [pending_reason]
 * @property {Object} presentment_details
 * @property {string} [reason]
 * @property {string} [receipt_number]
 * @property {*} [source_transfer_reversal]
 * @property {string} [status]
 * @property {*} [transfer_reversal]
 */

/**
 * @typedef {Object} RefundLoadMatch
 * @property {string} [application_fee_id]
 * @property {string} id
 * @property {Array} [expand]
 * @property {string} [charge_id]
 */

/**
 * @typedef {Object} RefundListMatch
 * @property {string} [charge]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [payment_intent]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} RefundCreateData
 * @property {string} id
 * @property {number} amount
 * @property {*} [balance_transaction]
 * @property {*} [charge]
 * @property {number} created
 * @property {string} currency
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {string} [description]
 * @property {Object} destination_details
 * @property {*} [failure_balance_transaction]
 * @property {string} [failure_reason]
 * @property {*} fee
 * @property {string} [instructions_email]
 * @property {Object} [metadata]
 * @property {Object} next_action
 * @property {string} object
 * @property {*} [payment_intent]
 * @property {*} [payment_method]
 * @property {string} [pending_reason]
 * @property {Object} presentment_details
 * @property {string} [reason]
 * @property {string} [receipt_number]
 * @property {*} [source_transfer_reversal]
 * @property {string} [status]
 * @property {*} [transfer_reversal]
 */

/**
 * @typedef {Object} Registration
 * @property {number} active_from
 * @property {Object} ae
 * @property {Object} al
 * @property {Object} am
 * @property {Object} ao
 * @property {Object} at
 * @property {Object} au
 * @property {Object} aw
 * @property {Object} az
 * @property {Object} ba
 * @property {Object} bb
 * @property {Object} bd
 * @property {Object} be
 * @property {Object} bf
 * @property {Object} bg
 * @property {Object} bh
 * @property {Object} bj
 * @property {Object} bs
 * @property {Object} by
 * @property {Object} ca
 * @property {Object} cd
 * @property {Object} ch
 * @property {Object} cl
 * @property {Object} cm
 * @property {Object} co
 * @property {string} country
 * @property {Object} country_options
 * @property {Object} cr
 * @property {number} created
 * @property {Object} cv
 * @property {Object} cy
 * @property {Object} cz
 * @property {Object} de
 * @property {Object} dk
 * @property {Object} ec
 * @property {Object} ee
 * @property {Object} eg
 * @property {Object} es
 * @property {Object} et
 * @property {number} [expires_at]
 * @property {Object} fi
 * @property {Object} fr
 * @property {Object} gb
 * @property {Object} ge
 * @property {Object} gn
 * @property {Object} gr
 * @property {Object} hr
 * @property {Object} hu
 * @property {Object} id
 * @property {Object} ie
 * @property {Object} in
 * @property {Object} is
 * @property {Object} it
 * @property {Object} jp
 * @property {Object} ke
 * @property {Object} kg
 * @property {Object} kh
 * @property {Object} kr
 * @property {Object} kz
 * @property {Object} la
 * @property {boolean} livemode
 * @property {Object} lk
 * @property {Object} lt
 * @property {Object} lu
 * @property {Object} lv
 * @property {Object} ma
 * @property {Object} md
 * @property {Object} me
 * @property {Object} mk
 * @property {Object} mr
 * @property {Object} mt
 * @property {Object} mx
 * @property {Object} my
 * @property {Object} ng
 * @property {Object} nl
 * @property {Object} no
 * @property {Object} np
 * @property {Object} nz
 * @property {string} object
 * @property {Object} om
 * @property {Object} pe
 * @property {Object} ph
 * @property {Object} pl
 * @property {Object} pt
 * @property {Object} ro
 * @property {Object} rs
 * @property {Object} ru
 * @property {Object} sa
 * @property {Object} se
 * @property {Object} sg
 * @property {Object} si
 * @property {Object} sk
 * @property {Object} sn
 * @property {Object} sr
 * @property {string} status
 * @property {Object} th
 * @property {Object} tj
 * @property {Object} tr
 * @property {Object} tw
 * @property {Object} tz
 * @property {Object} ua
 * @property {Object} ug
 * @property {Object} us
 * @property {Object} uy
 * @property {Object} uz
 * @property {Object} vn
 * @property {Object} za
 * @property {Object} zm
 * @property {Object} zw
 */

/**
 * @typedef {Object} RegistrationLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} RegistrationListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} RegistrationCreateData
 * @property {string} id
 * @property {number} active_from
 * @property {Object} ae
 * @property {Object} al
 * @property {Object} am
 * @property {Object} ao
 * @property {Object} at
 * @property {Object} au
 * @property {Object} aw
 * @property {Object} az
 * @property {Object} ba
 * @property {Object} bb
 * @property {Object} bd
 * @property {Object} be
 * @property {Object} bf
 * @property {Object} bg
 * @property {Object} bh
 * @property {Object} bj
 * @property {Object} bs
 * @property {Object} by
 * @property {Object} ca
 * @property {Object} cd
 * @property {Object} ch
 * @property {Object} cl
 * @property {Object} cm
 * @property {Object} co
 * @property {string} country
 * @property {Object} country_options
 * @property {Object} cr
 * @property {number} created
 * @property {Object} cv
 * @property {Object} cy
 * @property {Object} cz
 * @property {Object} de
 * @property {Object} dk
 * @property {Object} ec
 * @property {Object} ee
 * @property {Object} eg
 * @property {Object} es
 * @property {Object} et
 * @property {number} [expires_at]
 * @property {Object} fi
 * @property {Object} fr
 * @property {Object} gb
 * @property {Object} ge
 * @property {Object} gn
 * @property {Object} gr
 * @property {Object} hr
 * @property {Object} hu
 * @property {Object} ie
 * @property {Object} in
 * @property {Object} is
 * @property {Object} it
 * @property {Object} jp
 * @property {Object} ke
 * @property {Object} kg
 * @property {Object} kh
 * @property {Object} kr
 * @property {Object} kz
 * @property {Object} la
 * @property {boolean} livemode
 * @property {Object} lk
 * @property {Object} lt
 * @property {Object} lu
 * @property {Object} lv
 * @property {Object} ma
 * @property {Object} md
 * @property {Object} me
 * @property {Object} mk
 * @property {Object} mr
 * @property {Object} mt
 * @property {Object} mx
 * @property {Object} my
 * @property {Object} ng
 * @property {Object} nl
 * @property {Object} no
 * @property {Object} np
 * @property {Object} nz
 * @property {string} object
 * @property {Object} om
 * @property {Object} pe
 * @property {Object} ph
 * @property {Object} pl
 * @property {Object} pt
 * @property {Object} ro
 * @property {Object} rs
 * @property {Object} ru
 * @property {Object} sa
 * @property {Object} se
 * @property {Object} sg
 * @property {Object} si
 * @property {Object} sk
 * @property {Object} sn
 * @property {Object} sr
 * @property {string} status
 * @property {Object} th
 * @property {Object} tj
 * @property {Object} tr
 * @property {Object} tw
 * @property {Object} tz
 * @property {Object} ua
 * @property {Object} ug
 * @property {Object} us
 * @property {Object} uy
 * @property {Object} uz
 * @property {Object} vn
 * @property {Object} za
 * @property {Object} zm
 * @property {Object} zw
 */

/**
 * @typedef {Object} ReportRun
 * @property {number} created
 * @property {string} [error]
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {Object} parameters
 * @property {string} report_type
 * @property {*} [result]
 * @property {string} status
 * @property {number} [succeeded_at]
 */

/**
 * @typedef {Object} ReportRunLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ReportRunListMatch
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} ReportRunCreateData
 * @property {number} created
 * @property {string} [error]
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {Object} parameters
 * @property {string} report_type
 * @property {*} [result]
 * @property {string} status
 * @property {number} [succeeded_at]
 */

/**
 * @typedef {Object} ReportType
 * @property {number} data_available_end
 * @property {number} data_available_start
 * @property {Array} [default_columns]
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} name
 * @property {string} object
 * @property {number} updated
 * @property {number} version
 */

/**
 * @typedef {Object} ReportTypeLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ReportTypeListMatch
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} Request
 * @property {number} created
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {string} payment_method
 * @property {Array} replacements
 * @property {*} [request_context]
 * @property {*} [request_details]
 * @property {*} [response_details]
 * @property {string} [url]
 */

/**
 * @typedef {Object} RequestLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} RequestListMatch
 * @property {Object} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} RequestCreateData
 * @property {number} created
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {string} payment_method
 * @property {Array} replacements
 * @property {*} [request_context]
 * @property {*} [request_details]
 * @property {*} [response_details]
 * @property {string} [url]
 */

/**
 * @typedef {Object} Reversal
 * @property {number} amount
 * @property {*} [balance_transaction]
 * @property {number} created
 * @property {string} currency
 * @property {*} [destination_payment_refund]
 * @property {string} id
 * @property {Object} [metadata]
 * @property {string} object
 * @property {*} [source_refund]
 * @property {*} transfer
 */

/**
 * @typedef {Object} ReversalLoadMatch
 * @property {string} id
 * @property {string} transfer_id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ReversalListMatch
 * @property {string} transfer_id
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} ReversalCreateData
 * @property {string} [id]
 * @property {string} transfer_id
 * @property {number} amount
 * @property {*} [balance_transaction]
 * @property {number} created
 * @property {string} currency
 * @property {*} [destination_payment_refund]
 * @property {Object} [metadata]
 * @property {string} object
 * @property {*} [source_refund]
 * @property {*} transfer
 */

/**
 * @typedef {Object} Review
 * @property {string} [billing_zip]
 * @property {*} [charge]
 * @property {string} [closed_reason]
 * @property {number} created
 * @property {string} id
 * @property {string} [ip_address]
 * @property {*} [ip_address_location]
 * @property {boolean} livemode
 * @property {string} object
 * @property {boolean} open
 * @property {string} opened_reason
 * @property {*} [payment_intent]
 * @property {string} reason
 * @property {*} [session]
 */

/**
 * @typedef {Object} ReviewLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ReviewListMatch
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} ReviewCreateData
 * @property {string} id
 * @property {string} [billing_zip]
 * @property {*} [charge]
 * @property {string} [closed_reason]
 * @property {number} created
 * @property {string} [ip_address]
 * @property {*} [ip_address_location]
 * @property {boolean} livemode
 * @property {string} object
 * @property {boolean} open
 * @property {string} opened_reason
 * @property {*} [payment_intent]
 * @property {string} reason
 * @property {*} [session]
 */

/**
 * @typedef {Object} ScheduledQueryRun
 * @property {number} created
 * @property {number} data_load_time
 * @property {Object} error
 * @property {*} [file]
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {number} result_available_until
 * @property {string} sql
 * @property {string} status
 * @property {string} title
 */

/**
 * @typedef {Object} ScheduledQueryRunLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ScheduledQueryRunListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} Search
 * @property {string} [account_country]
 * @property {string} [account_name]
 * @property {Array} [account_tax_ids]
 * @property {boolean} active
 * @property {*} [address]
 * @property {Array} [allowed_payment_method_types]
 * @property {number} amount
 * @property {number} [amount_capturable]
 * @property {number} amount_captured
 * @property {*} [amount_details]
 * @property {number} amount_due
 * @property {number} amount_overpaid
 * @property {number} amount_paid
 * @property {number} amount_paid_off_stripe
 * @property {number} [amount_received]
 * @property {number} amount_refunded
 * @property {number} amount_remaining
 * @property {number} amount_shipping
 * @property {*} [application]
 * @property {*} [application_fee]
 * @property {number} [application_fee_amount]
 * @property {number} [application_fee_percent]
 * @property {number} attempt_count
 * @property {boolean} attempted
 * @property {boolean} auto_advance
 * @property {*} [automatic_payment_methods]
 * @property {Object} automatic_tax
 * @property {number} [automatically_finalizes_at]
 * @property {number} [balance]
 * @property {*} [balance_transaction]
 * @property {number} billing_cycle_anchor
 * @property {*} [billing_cycle_anchor_config]
 * @property {Object} billing_details
 * @property {Object} billing_mode
 * @property {string} [billing_reason]
 * @property {Array} billing_schedules
 * @property {string} billing_scheme
 * @property {*} [billing_thresholds]
 * @property {string} [business_name]
 * @property {string} [calculated_statement_descriptor]
 * @property {number} [cancel_at]
 * @property {boolean} cancel_at_period_end
 * @property {number} [canceled_at]
 * @property {*} [cancellation_details]
 * @property {string} [cancellation_reason]
 * @property {string} [capture_method]
 * @property {boolean} captured
 * @property {*} [cash_balance]
 * @property {string} [client_secret]
 * @property {string} collection_method
 * @property {string} [confirmation_method]
 * @property {*} [confirmation_secret]
 * @property {number} created
 * @property {string} currency
 * @property {Object} [currency_options]
 * @property {Array} [custom_fields]
 * @property {*} [custom_unit_amount]
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {*} [customer_address]
 * @property {string} [customer_email]
 * @property {string} [customer_name]
 * @property {string} [customer_phone]
 * @property {*} [customer_shipping]
 * @property {string} [customer_tax_exempt]
 * @property {Array} [customer_tax_ids]
 * @property {number} [days_until_due]
 * @property {*} [default_payment_method]
 * @property {*} [default_price]
 * @property {*} [default_source]
 * @property {Array} default_tax_rates
 * @property {boolean} [delinquent]
 * @property {string} [description]
 * @property {*} [discount]
 * @property {Array} discounts
 * @property {boolean} disputed
 * @property {number} [due_date]
 * @property {number} [effective_at]
 * @property {string} [email]
 * @property {number} [ended_at]
 * @property {number} [ending_balance]
 * @property {Array} [excluded_payment_method_types]
 * @property {*} [failure_balance_transaction]
 * @property {string} [failure_code]
 * @property {string} [failure_message]
 * @property {string} [footer]
 * @property {*} [fraud_details]
 * @property {*} [from_invoice]
 * @property {Object} [hooks]
 * @property {string} [hosted_invoice_url]
 * @property {string} id
 * @property {Array} images
 * @property {string} [individual_name]
 * @property {Object} [invoice_credit_balance]
 * @property {string} [invoice_pdf]
 * @property {string} [invoice_prefix]
 * @property {Object} [invoice_settings]
 * @property {Object} issuer
 * @property {Object} items
 * @property {*} [last_finalization_error]
 * @property {*} [last_payment_error]
 * @property {*} [latest_charge]
 * @property {*} [latest_invoice]
 * @property {*} [latest_revision]
 * @property {Object} lines
 * @property {boolean} livemode
 * @property {string} [lookup_key]
 * @property {*} [managed_payments]
 * @property {Array} marketing_features
 * @property {Object} metadata
 * @property {string} [name]
 * @property {*} [next_action]
 * @property {number} [next_invoice_sequence]
 * @property {number} [next_payment_attempt]
 * @property {number} [next_pending_invoice_item_invoice]
 * @property {string} [nickname]
 * @property {string} [number]
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {*} [outcome]
 * @property {*} [package_dimensions]
 * @property {boolean} paid
 * @property {*} [parent]
 * @property {*} [pause_collection]
 * @property {Object} [payment_details]
 * @property {*} [payment_intent]
 * @property {string} [payment_method]
 * @property {*} [payment_method_configuration_details]
 * @property {*} [payment_method_details]
 * @property {*} [payment_method_options]
 * @property {Array} [payment_method_types]
 * @property {*} [payment_record]
 * @property {Object} payment_settings
 * @property {Object} payments
 * @property {*} [pending_invoice_item_interval]
 * @property {*} [pending_setup_intent]
 * @property {*} [pending_update]
 * @property {number} period_end
 * @property {number} period_start
 * @property {string} [phone]
 * @property {number} post_payment_credit_notes_amount
 * @property {number} pre_payment_credit_notes_amount
 * @property {Array} [preferred_locales]
 * @property {Object} presentment_details
 * @property {*} [processing]
 * @property {*} product
 * @property {Object} [radar_options]
 * @property {string} [receipt_email]
 * @property {string} [receipt_number]
 * @property {string} [receipt_url]
 * @property {*} [recurring]
 * @property {boolean} refunded
 * @property {Object} refunds
 * @property {*} [rendering]
 * @property {*} [review]
 * @property {*} [schedule]
 * @property {string} [setup_future_usage]
 * @property {boolean} [shippable]
 * @property {*} [shipping]
 * @property {*} [shipping_cost]
 * @property {*} [shipping_details]
 * @property {*} [source_transfer]
 * @property {Object} sources
 * @property {number} start_date
 * @property {number} starting_balance
 * @property {string} [statement_descriptor]
 * @property {string} [statement_descriptor_suffix]
 * @property {string} status
 * @property {Object} [status_details]
 * @property {Object} status_transitions
 * @property {Object} subscriptions
 * @property {number} subtotal
 * @property {number} [subtotal_excluding_tax]
 * @property {Object} tax
 * @property {string} [tax_behavior]
 * @property {*} [tax_code]
 * @property {*} [tax_details]
 * @property {string} [tax_exempt]
 * @property {Object} tax_ids
 * @property {*} [test_clock]
 * @property {Object} threshold_reason
 * @property {Array} [tiers]
 * @property {string} [tiers_mode]
 * @property {number} total
 * @property {Array} [total_discount_amounts]
 * @property {number} [total_excluding_tax]
 * @property {Array} [total_pretax_credit_amounts]
 * @property {Array} [total_taxes]
 * @property {*} [transfer]
 * @property {*} [transfer_data]
 * @property {string} [transfer_group]
 * @property {*} [transform_quantity]
 * @property {number} [trial_end]
 * @property {*} [trial_settings]
 * @property {number} [trial_start]
 * @property {string} type
 * @property {number} [unit_amount]
 * @property {string} [unit_amount_decimal]
 * @property {string} [unit_label]
 * @property {number} updated
 * @property {string} [url]
 * @property {number} [webhooks_delivered_at]
 */

/**
 * @typedef {Object} SearchListMatch
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [page]
 * @property {string} query
 */

/**
 * @typedef {Object} Secret
 * @property {number} created
 * @property {boolean} [deleted]
 * @property {number} [expires_at]
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} name
 * @property {string} object
 * @property {string} [payload]
 * @property {Object} scope
 * @property {string} type
 * @property {string} [user]
 */

/**
 * @typedef {Object} SecretLoadMatch
 * @property {Array} [expand]
 * @property {string} name
 * @property {Object} scope
 */

/**
 * @typedef {Object} SecretListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {Object} scope
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} SecretCreateData
 * @property {number} created
 * @property {boolean} [deleted]
 * @property {number} [expires_at]
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} name
 * @property {string} object
 * @property {string} [payload]
 * @property {Object} scope
 * @property {string} type
 * @property {string} [user]
 */

/**
 * @typedef {Object} Session
 * @property {*} [account_holder]
 * @property {Object} accounts
 * @property {*} [adaptive_pricing]
 * @property {*} [after_expiration]
 * @property {boolean} [allow_promotion_codes]
 * @property {Array} [allowed_payment_method_types]
 * @property {number} [amount_subtotal]
 * @property {number} [amount_total]
 * @property {Object} automatic_tax
 * @property {Object} bank_account_token
 * @property {string} [billing_address_collection]
 * @property {Object} branding_settings
 * @property {string} [cancel_url]
 * @property {string} [client_reference_id]
 * @property {string} [client_secret]
 * @property {*} [collected_information]
 * @property {*} configuration
 * @property {*} [consent]
 * @property {*} [consent_collection]
 * @property {number} created
 * @property {string} [currency]
 * @property {*} [currency_conversion]
 * @property {Array} custom_fields
 * @property {Object} custom_text
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {string} [customer_creation]
 * @property {*} [customer_details]
 * @property {string} [customer_email]
 * @property {Array} [discounts]
 * @property {Array} [excluded_payment_method_types]
 * @property {number} expires_at
 * @property {Object} [filters]
 * @property {*} [flow]
 * @property {string} id
 * @property {string} [integration_identifier]
 * @property {*} [invoice]
 * @property {*} [invoice_creation]
 * @property {Object} limits
 * @property {Object} line_items
 * @property {boolean} livemode
 * @property {string} [locale]
 * @property {*} [managed_payments]
 * @property {Object} [manual_entry]
 * @property {Object} [metadata]
 * @property {string} mode
 * @property {Object} [name_collection]
 * @property {string} object
 * @property {string} [on_behalf_of]
 * @property {Array} [optional_items]
 * @property {string} [origin_context]
 * @property {*} [payment_intent]
 * @property {*} [payment_link]
 * @property {string} [payment_method_collection]
 * @property {*} [payment_method_configuration_details]
 * @property {*} [payment_method_options]
 * @property {Array} payment_method_types
 * @property {string} payment_status
 * @property {*} [permissions]
 * @property {Object} phone_number_collection
 * @property {Array} [prefetch]
 * @property {Object} presentment_details
 * @property {string} [recovered_from]
 * @property {string} [redirect_on_completion]
 * @property {string} [return_url]
 * @property {*} [saved_payment_method_options]
 * @property {*} [setup_intent]
 * @property {*} [shipping_address_collection]
 * @property {*} [shipping_cost]
 * @property {Array} shipping_options
 * @property {string} [status]
 * @property {string} [submit_type]
 * @property {*} [subscription]
 * @property {string} [success_url]
 * @property {Object} tax_id_collection
 * @property {number} [total_details]
 * @property {string} [ui_mode]
 * @property {string} [url]
 * @property {*} [wallet_options]
 */

/**
 * @typedef {Object} SessionLoadMatch
 * @property {string} session
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} SessionListMatch
 * @property {*} [created]
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {Object} [customer_detail]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [payment_intent]
 * @property {string} [payment_link]
 * @property {string} [starting_after]
 * @property {string} [status]
 * @property {string} [subscription]
 */

/**
 * @typedef {Object} SessionCreateData
 * @property {string} id
 * @property {*} [account_holder]
 * @property {Object} accounts
 * @property {*} [adaptive_pricing]
 * @property {*} [after_expiration]
 * @property {boolean} [allow_promotion_codes]
 * @property {Array} [allowed_payment_method_types]
 * @property {number} [amount_subtotal]
 * @property {number} [amount_total]
 * @property {Object} automatic_tax
 * @property {Object} bank_account_token
 * @property {string} [billing_address_collection]
 * @property {Object} branding_settings
 * @property {string} [cancel_url]
 * @property {string} [client_reference_id]
 * @property {string} [client_secret]
 * @property {*} [collected_information]
 * @property {*} configuration
 * @property {*} [consent]
 * @property {*} [consent_collection]
 * @property {number} created
 * @property {string} [currency]
 * @property {*} [currency_conversion]
 * @property {Array} custom_fields
 * @property {Object} custom_text
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {string} [customer_creation]
 * @property {*} [customer_details]
 * @property {string} [customer_email]
 * @property {Array} [discounts]
 * @property {Array} [excluded_payment_method_types]
 * @property {number} expires_at
 * @property {Object} [filters]
 * @property {*} [flow]
 * @property {string} [integration_identifier]
 * @property {*} [invoice]
 * @property {*} [invoice_creation]
 * @property {Object} limits
 * @property {Object} line_items
 * @property {boolean} livemode
 * @property {string} [locale]
 * @property {*} [managed_payments]
 * @property {Object} [manual_entry]
 * @property {Object} [metadata]
 * @property {string} mode
 * @property {Object} [name_collection]
 * @property {string} object
 * @property {string} [on_behalf_of]
 * @property {Array} [optional_items]
 * @property {string} [origin_context]
 * @property {*} [payment_intent]
 * @property {*} [payment_link]
 * @property {string} [payment_method_collection]
 * @property {*} [payment_method_configuration_details]
 * @property {*} [payment_method_options]
 * @property {Array} payment_method_types
 * @property {string} payment_status
 * @property {*} [permissions]
 * @property {Object} phone_number_collection
 * @property {Array} [prefetch]
 * @property {Object} presentment_details
 * @property {string} [recovered_from]
 * @property {string} [redirect_on_completion]
 * @property {string} [return_url]
 * @property {*} [saved_payment_method_options]
 * @property {*} [setup_intent]
 * @property {*} [shipping_address_collection]
 * @property {*} [shipping_cost]
 * @property {Array} shipping_options
 * @property {string} [status]
 * @property {string} [submit_type]
 * @property {*} [subscription]
 * @property {string} [success_url]
 * @property {Object} tax_id_collection
 * @property {number} [total_details]
 * @property {string} [ui_mode]
 * @property {string} [url]
 * @property {*} [wallet_options]
 */

/**
 * @typedef {Object} Setting
 * @property {Object} defaults
 * @property {*} [head_office]
 * @property {boolean} livemode
 * @property {string} object
 * @property {string} status
 * @property {Object} status_details
 */

/**
 * @typedef {Object} SettingLoadMatch
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} SettingCreateData
 * @property {Object} defaults
 * @property {*} [head_office]
 * @property {boolean} livemode
 * @property {string} object
 * @property {string} status
 * @property {Object} status_details
 */

/**
 * @typedef {Object} Settlement
 * @property {string} [id]
 */

/**
 * @typedef {Object} SettlementLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} SettlementCreateData
 * @property {string} id
 */

/**
 * @typedef {Object} SetupAttempt
 * @property {*} [application]
 * @property {boolean} [attach_to_self]
 * @property {number} created
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {Array} [flow_directions]
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {*} payment_method
 * @property {Object} payment_method_details
 * @property {*} [setup_error]
 * @property {*} setup_intent
 * @property {string} status
 * @property {string} usage
 */

/**
 * @typedef {Object} SetupAttemptListMatch
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} setup_intent
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} SetupIntent
 * @property {Array} [allowed_payment_method_types]
 * @property {*} [application]
 * @property {boolean} [attach_to_self]
 * @property {*} [automatic_payment_methods]
 * @property {string} [cancellation_reason]
 * @property {string} [client_secret]
 * @property {number} created
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {string} [description]
 * @property {Array} [excluded_payment_method_types]
 * @property {Array} [flow_directions]
 * @property {string} id
 * @property {*} [last_setup_error]
 * @property {*} [latest_attempt]
 * @property {boolean} livemode
 * @property {*} [managed_payments]
 * @property {*} [mandate]
 * @property {Object} [metadata]
 * @property {*} [next_action]
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {*} [payment_method]
 * @property {*} [payment_method_configuration_details]
 * @property {*} [payment_method_options]
 * @property {Array} payment_method_types
 * @property {*} [single_use_mandate]
 * @property {string} status
 * @property {string} usage
 */

/**
 * @typedef {Object} SetupIntentLoadMatch
 * @property {string} id
 * @property {string} [client_secret]
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} SetupIntentListMatch
 * @property {boolean} [attach_to_self]
 * @property {*} [created]
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [payment_method]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} SetupIntentCreateData
 * @property {string} id
 * @property {Array} [allowed_payment_method_types]
 * @property {*} [application]
 * @property {boolean} [attach_to_self]
 * @property {*} [automatic_payment_methods]
 * @property {string} [cancellation_reason]
 * @property {string} [client_secret]
 * @property {number} created
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {string} [description]
 * @property {Array} [excluded_payment_method_types]
 * @property {Array} [flow_directions]
 * @property {*} [last_setup_error]
 * @property {*} [latest_attempt]
 * @property {boolean} livemode
 * @property {*} [managed_payments]
 * @property {*} [mandate]
 * @property {Object} [metadata]
 * @property {*} [next_action]
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {*} [payment_method]
 * @property {*} [payment_method_configuration_details]
 * @property {*} [payment_method_options]
 * @property {Array} payment_method_types
 * @property {*} [single_use_mandate]
 * @property {string} status
 * @property {string} usage
 */

/**
 * @typedef {Object} ShippingRate
 * @property {boolean} active
 * @property {number} created
 * @property {*} [delivery_estimate]
 * @property {string} [display_name]
 * @property {Object} fixed_amount
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {string} [tax_behavior]
 * @property {*} [tax_code]
 * @property {string} type
 */

/**
 * @typedef {Object} ShippingRateLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ShippingRateListMatch
 * @property {boolean} [active]
 * @property {*} [created]
 * @property {string} [currency]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} ShippingRateCreateData
 * @property {string} id
 * @property {boolean} active
 * @property {number} created
 * @property {*} [delivery_estimate]
 * @property {string} [display_name]
 * @property {Object} fixed_amount
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {string} [tax_behavior]
 * @property {*} [tax_code]
 * @property {string} type
 */

/**
 * @typedef {Object} SigmaApiQuery
 * @property {number} created
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} name
 * @property {string} object
 * @property {string} sql
 */

/**
 * @typedef {Object} SigmaApiQueryCreateData
 * @property {string} id
 * @property {number} created
 * @property {boolean} livemode
 * @property {string} name
 * @property {string} object
 * @property {string} sql
 */

/**
 * @typedef {Object} Source
 * @property {Object} [ach_credit_transfer]
 * @property {Object} [ach_debit]
 * @property {Object} [acss_debit]
 * @property {Object} [alipay]
 * @property {boolean} [allow_redisplay]
 * @property {number} [amount]
 * @property {Object} [au_becs_debit]
 * @property {Object} [bancontact]
 * @property {Object} [card]
 * @property {Object} [card_present]
 * @property {string} client_secret
 * @property {Object} code_verification
 * @property {number} created
 * @property {string} [currency]
 * @property {string} [customer]
 * @property {Array} data
 * @property {Object} [eps]
 * @property {string} flow
 * @property {Object} [giropay]
 * @property {boolean} has_more
 * @property {string} id
 * @property {Object} [ideal]
 * @property {Object} [klarna]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {Object} [multibanco]
 * @property {string} object
 * @property {*} [owner]
 * @property {Object} [p24]
 * @property {Object} receiver
 * @property {Object} redirect
 * @property {Object} [sepa_debit]
 * @property {Object} [sofort]
 * @property {Object} source_order
 * @property {string} [statement_descriptor]
 * @property {string} status
 * @property {Object} [three_d_secure]
 * @property {string} type
 * @property {string} url
 * @property {string} [usage]
 * @property {Object} [wechat]
 */

/**
 * @typedef {Object} SourceLoadMatch
 * @property {string} id
 * @property {string} [client_secret]
 * @property {Array} [expand]
 * @property {string} [customer_id]
 */

/**
 * @typedef {Object} SourceListMatch
 * @property {string} customer_id
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [object]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} SourceCreateData
 * @property {string} id
 * @property {Object} [ach_credit_transfer]
 * @property {Object} [ach_debit]
 * @property {Object} [acss_debit]
 * @property {Object} [alipay]
 * @property {boolean} [allow_redisplay]
 * @property {number} [amount]
 * @property {Object} [au_becs_debit]
 * @property {Object} [bancontact]
 * @property {Object} [card]
 * @property {Object} [card_present]
 * @property {string} client_secret
 * @property {Object} code_verification
 * @property {number} created
 * @property {string} [currency]
 * @property {string} [customer]
 * @property {Array} data
 * @property {Object} [eps]
 * @property {string} flow
 * @property {Object} [giropay]
 * @property {boolean} has_more
 * @property {Object} [ideal]
 * @property {Object} [klarna]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {Object} [multibanco]
 * @property {string} object
 * @property {*} [owner]
 * @property {Object} [p24]
 * @property {Object} receiver
 * @property {Object} redirect
 * @property {Object} [sepa_debit]
 * @property {Object} [sofort]
 * @property {Object} source_order
 * @property {string} [statement_descriptor]
 * @property {string} status
 * @property {Object} [three_d_secure]
 * @property {string} type
 * @property {string} url
 * @property {string} [usage]
 * @property {Object} [wechat]
 */

/**
 * @typedef {Object} SourceRemoveMatch
 * @property {string} customer_id
 * @property {string} id
 */

/**
 * @typedef {Object} SourceMandateNotification
 * @property {Object} [acss_debit]
 * @property {number} [amount]
 * @property {Object} [bacs_debit]
 * @property {number} created
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {string} reason
 * @property {Object} [sepa_debit]
 * @property {Object} source
 * @property {string} status
 * @property {string} type
 */

/**
 * @typedef {Object} SourceMandateNotificationLoadMatch
 * @property {string} id
 * @property {string} source_id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} SourceTransaction
 * @property {Object} [ach_credit_transfer]
 * @property {number} amount
 * @property {Object} [chf_credit_transfer]
 * @property {number} created
 * @property {string} currency
 * @property {Object} [gbp_credit_transfer]
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {Object} [paper_check]
 * @property {Object} [sepa_credit_transfer]
 * @property {string} source
 * @property {string} status
 * @property {string} type
 */

/**
 * @typedef {Object} SourceTransactionLoadMatch
 * @property {string} id
 * @property {string} source_id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} SourceTransactionListMatch
 * @property {string} id
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} Subscription
 * @property {*} [application]
 * @property {number} [application_fee_percent]
 * @property {Object} automatic_tax
 * @property {number} billing_cycle_anchor
 * @property {*} [billing_cycle_anchor_config]
 * @property {Object} billing_mode
 * @property {Array} billing_schedules
 * @property {*} [billing_thresholds]
 * @property {number} [cancel_at]
 * @property {boolean} cancel_at_period_end
 * @property {number} [canceled_at]
 * @property {*} [cancellation_details]
 * @property {string} collection_method
 * @property {number} created
 * @property {string} currency
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {number} [days_until_due]
 * @property {*} [default_payment_method]
 * @property {*} [default_source]
 * @property {Array} [default_tax_rates]
 * @property {string} [description]
 * @property {Array} discounts
 * @property {number} [ended_at]
 * @property {string} id
 * @property {Object} invoice_settings
 * @property {Object} items
 * @property {*} [latest_invoice]
 * @property {boolean} livemode
 * @property {*} [managed_payments]
 * @property {Object} metadata
 * @property {number} [next_pending_invoice_item_invoice]
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {*} [pause_collection]
 * @property {*} [payment_settings]
 * @property {*} [pending_invoice_item_interval]
 * @property {*} [pending_setup_intent]
 * @property {*} [pending_update]
 * @property {Object} presentment_details
 * @property {*} [schedule]
 * @property {number} start_date
 * @property {string} status
 * @property {Object} status_details
 * @property {*} [test_clock]
 * @property {*} [transfer_data]
 * @property {number} [trial_end]
 * @property {*} [trial_settings]
 * @property {number} [trial_start]
 */

/**
 * @typedef {Object} SubscriptionLoadMatch
 * @property {string} [customer_id]
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} SubscriptionListMatch
 * @property {Object} [automatic_tax]
 * @property {string} [collection_method]
 * @property {*} [created]
 * @property {*} [current_period_end]
 * @property {*} [current_period_start]
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [price]
 * @property {string} [starting_after]
 * @property {string} [status]
 * @property {string} [test_clock]
 */

/**
 * @typedef {Object} SubscriptionCreateData
 * @property {string} id
 * @property {*} [application]
 * @property {number} [application_fee_percent]
 * @property {Object} automatic_tax
 * @property {number} billing_cycle_anchor
 * @property {*} [billing_cycle_anchor_config]
 * @property {Object} billing_mode
 * @property {Array} billing_schedules
 * @property {*} [billing_thresholds]
 * @property {number} [cancel_at]
 * @property {boolean} cancel_at_period_end
 * @property {number} [canceled_at]
 * @property {*} [cancellation_details]
 * @property {string} collection_method
 * @property {number} created
 * @property {string} currency
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {number} [days_until_due]
 * @property {*} [default_payment_method]
 * @property {*} [default_source]
 * @property {Array} [default_tax_rates]
 * @property {string} [description]
 * @property {Array} discounts
 * @property {number} [ended_at]
 * @property {Object} invoice_settings
 * @property {Object} items
 * @property {*} [latest_invoice]
 * @property {boolean} livemode
 * @property {*} [managed_payments]
 * @property {Object} metadata
 * @property {number} [next_pending_invoice_item_invoice]
 * @property {string} object
 * @property {*} [on_behalf_of]
 * @property {*} [pause_collection]
 * @property {*} [payment_settings]
 * @property {*} [pending_invoice_item_interval]
 * @property {*} [pending_setup_intent]
 * @property {*} [pending_update]
 * @property {Object} presentment_details
 * @property {*} [schedule]
 * @property {number} start_date
 * @property {string} status
 * @property {Object} status_details
 * @property {*} [test_clock]
 * @property {*} [transfer_data]
 * @property {number} [trial_end]
 * @property {*} [trial_settings]
 * @property {number} [trial_start]
 */

/**
 * @typedef {Object} SubscriptionRemoveMatch
 * @property {string} [customer_id]
 * @property {string} id
 */

/**
 * @typedef {Object} SubscriptionItem
 * @property {number} [billed_until]
 * @property {*} [billing_thresholds]
 * @property {number} created
 * @property {number} current_period_end
 * @property {number} current_period_start
 * @property {*} [current_trial]
 * @property {Array} discounts
 * @property {string} id
 * @property {Object} metadata
 * @property {string} object
 * @property {Object} price
 * @property {number} [quantity]
 * @property {string} subscription
 * @property {Array} [tax_rates]
 */

/**
 * @typedef {Object} SubscriptionItemLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} SubscriptionItemListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} subscription
 */

/**
 * @typedef {Object} SubscriptionItemCreateData
 * @property {string} id
 * @property {number} [billed_until]
 * @property {*} [billing_thresholds]
 * @property {number} created
 * @property {number} current_period_end
 * @property {number} current_period_start
 * @property {*} [current_trial]
 * @property {Array} discounts
 * @property {Object} metadata
 * @property {string} object
 * @property {Object} price
 * @property {number} [quantity]
 * @property {string} subscription
 * @property {Array} [tax_rates]
 */

/**
 * @typedef {Object} SubscriptionSchedule
 * @property {*} [application]
 * @property {Object} billing_mode
 * @property {number} [canceled_at]
 * @property {number} [completed_at]
 * @property {number} created
 * @property {*} [current_phase]
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {Object} default_settings
 * @property {string} end_behavior
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {Array} [pause_schedules]
 * @property {Array} phases
 * @property {number} [released_at]
 * @property {string} [released_subscription]
 * @property {string} status
 * @property {*} [subscription]
 * @property {*} [test_clock]
 */

/**
 * @typedef {Object} SubscriptionScheduleLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} SubscriptionScheduleListMatch
 * @property {*} [canceled_at]
 * @property {*} [completed_at]
 * @property {*} [created]
 * @property {string} [customer]
 * @property {string} [customer_account]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {*} [released_at]
 * @property {boolean} [scheduled]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} SubscriptionScheduleCreateData
 * @property {string} id
 * @property {*} [application]
 * @property {Object} billing_mode
 * @property {number} [canceled_at]
 * @property {number} [completed_at]
 * @property {number} created
 * @property {*} [current_phase]
 * @property {*} customer
 * @property {string} [customer_account]
 * @property {Object} default_settings
 * @property {string} end_behavior
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {Array} [pause_schedules]
 * @property {Array} phases
 * @property {number} [released_at]
 * @property {string} [released_subscription]
 * @property {string} status
 * @property {*} [subscription]
 * @property {*} [test_clock]
 */

/**
 * @typedef {Object} Supplier
 * @property {string} id
 * @property {string} info_url
 * @property {boolean} livemode
 * @property {Array} locations
 * @property {string} name
 * @property {string} object
 * @property {string} removal_pathway
 */

/**
 * @typedef {Object} SupplierLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} SupplierListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} TaxCode
 * @property {string} description
 * @property {string} id
 * @property {string} name
 * @property {string} object
 * @property {*} [requirements]
 */

/**
 * @typedef {Object} TaxCodeLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} TaxCodeListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} TaxId
 * @property {string} [country]
 * @property {number} created
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {*} [owner]
 * @property {string} type
 * @property {string} value
 * @property {*} [verification]
 */

/**
 * @typedef {Object} TaxIdLoadMatch
 * @property {string} [customer_id]
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} TaxIdListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {Object} [owner]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} TaxIdCreateData
 * @property {string} [country]
 * @property {number} created
 * @property {*} [customer]
 * @property {string} [customer_account]
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {*} [owner]
 * @property {string} type
 * @property {string} value
 * @property {*} [verification]
 */

/**
 * @typedef {Object} TaxIdRemoveMatch
 * @property {string} [customer_id]
 * @property {string} id
 */

/**
 * @typedef {Object} TaxRate
 * @property {boolean} active
 * @property {string} [country]
 * @property {number} created
 * @property {string} [description]
 * @property {string} display_name
 * @property {number} [effective_percentage]
 * @property {*} [flat_amount]
 * @property {string} id
 * @property {boolean} inclusive
 * @property {string} [jurisdiction]
 * @property {string} [jurisdiction_level]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {number} percentage
 * @property {string} [rate_type]
 * @property {string} [state]
 * @property {string} [tax_type]
 */

/**
 * @typedef {Object} TaxRateLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} TaxRateListMatch
 * @property {boolean} [active]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {boolean} [inclusive]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} TaxRateCreateData
 * @property {string} id
 * @property {boolean} active
 * @property {string} [country]
 * @property {number} created
 * @property {string} [description]
 * @property {string} display_name
 * @property {number} [effective_percentage]
 * @property {*} [flat_amount]
 * @property {boolean} inclusive
 * @property {string} [jurisdiction]
 * @property {string} [jurisdiction_level]
 * @property {boolean} livemode
 * @property {Object} [metadata]
 * @property {string} object
 * @property {number} percentage
 * @property {string} [rate_type]
 * @property {string} [state]
 * @property {string} [tax_type]
 */

/**
 * @typedef {Object} TestClock
 * @property {Object} advancing
 * @property {number} created
 * @property {number} deletes_after
 * @property {number} frozen_time
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} [name]
 * @property {string} object
 * @property {string} status
 * @property {Object} status_details
 */

/**
 * @typedef {Object} TestClockLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} TestClockListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} TestClockCreateData
 * @property {Object} advancing
 * @property {number} created
 * @property {number} deletes_after
 * @property {number} frozen_time
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} [name]
 * @property {string} object
 * @property {string} status
 * @property {Object} status_details
 */

/**
 * @typedef {Object} TestClockRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Token
 * @property {Object} bank_account
 * @property {*} card
 * @property {string} [client_ip]
 * @property {number} created
 * @property {string} [device_fingerprint]
 * @property {string} id
 * @property {string} [last4]
 * @property {boolean} livemode
 * @property {string} network
 * @property {Object} network_data
 * @property {number} network_updated_at
 * @property {string} object
 * @property {string} status
 * @property {string} type
 * @property {boolean} used
 * @property {string} [wallet_provider]
 */

/**
 * @typedef {Object} TokenLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} TokenListMatch
 * @property {string} card
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} TokenCreateData
 * @property {string} id
 * @property {Object} bank_account
 * @property {*} card
 * @property {string} [client_ip]
 * @property {number} created
 * @property {string} [device_fingerprint]
 * @property {string} [last4]
 * @property {boolean} livemode
 * @property {string} network
 * @property {Object} network_data
 * @property {number} network_updated_at
 * @property {string} object
 * @property {string} status
 * @property {string} type
 * @property {boolean} used
 * @property {string} [wallet_provider]
 */

/**
 * @typedef {Object} Topup
 * @property {number} amount
 * @property {*} [balance_transaction]
 * @property {number} created
 * @property {string} currency
 * @property {string} [description]
 * @property {number} [expected_availability_date]
 * @property {string} [failure_code]
 * @property {string} [failure_message]
 * @property {string} id
 * @property {string} [initiated_by]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [payment_method]
 * @property {*} [payment_method_options]
 * @property {*} [source]
 * @property {string} [statement_descriptor]
 * @property {string} status
 * @property {string} [transfer_group]
 */

/**
 * @typedef {Object} TopupLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} TopupListMatch
 * @property {number} [amount]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} TopupCreateData
 * @property {string} id
 * @property {number} amount
 * @property {*} [balance_transaction]
 * @property {number} created
 * @property {string} currency
 * @property {string} [description]
 * @property {number} [expected_availability_date]
 * @property {string} [failure_code]
 * @property {string} [failure_message]
 * @property {string} [initiated_by]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [payment_method]
 * @property {*} [payment_method_options]
 * @property {*} [source]
 * @property {string} [statement_descriptor]
 * @property {string} status
 * @property {string} [transfer_group]
 */

/**
 * @typedef {Object} Transaction
 * @property {string} account
 * @property {number} amount
 * @property {*} [amount_details]
 * @property {*} [authorization]
 * @property {Object} balance_impact
 * @property {*} [balance_transaction]
 * @property {*} card
 * @property {*} [cardholder]
 * @property {number} created
 * @property {string} currency
 * @property {string} [customer]
 * @property {Object} customer_details
 * @property {string} description
 * @property {*} [dispute]
 * @property {Object} entries
 * @property {string} financial_account
 * @property {string} [flow]
 * @property {*} [flow_details]
 * @property {string} flow_type
 * @property {string} id
 * @property {Object} line_items
 * @property {boolean} livemode
 * @property {number} merchant_amount
 * @property {string} merchant_currency
 * @property {Object} merchant_data
 * @property {Object} metadata
 * @property {*} [network_data]
 * @property {string} object
 * @property {number} [posted_at]
 * @property {*} [purchase_details]
 * @property {string} reference
 * @property {*} [reversal]
 * @property {*} [ship_from_details]
 * @property {*} [shipping_cost]
 * @property {string} status
 * @property {Object} status_transitions
 * @property {number} tax_date
 * @property {string} [token]
 * @property {number} transacted_at
 * @property {string} transaction_refresh
 * @property {*} [treasury]
 * @property {string} type
 * @property {number} updated
 * @property {number} [void_at]
 * @property {string} [wallet]
 */

/**
 * @typedef {Object} TransactionLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} TransactionListMatch
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {string} financial_account
 * @property {number} [limit]
 * @property {string} [order_by]
 * @property {string} [starting_after]
 * @property {string} [status]
 * @property {Object} [status_transition]
 */

/**
 * @typedef {Object} TransactionCreateData
 * @property {string} id
 * @property {string} account
 * @property {number} amount
 * @property {*} [amount_details]
 * @property {*} [authorization]
 * @property {Object} balance_impact
 * @property {*} [balance_transaction]
 * @property {*} card
 * @property {*} [cardholder]
 * @property {number} created
 * @property {string} currency
 * @property {string} [customer]
 * @property {Object} customer_details
 * @property {string} description
 * @property {*} [dispute]
 * @property {Object} entries
 * @property {string} financial_account
 * @property {string} [flow]
 * @property {*} [flow_details]
 * @property {string} flow_type
 * @property {Object} line_items
 * @property {boolean} livemode
 * @property {number} merchant_amount
 * @property {string} merchant_currency
 * @property {Object} merchant_data
 * @property {Object} metadata
 * @property {*} [network_data]
 * @property {string} object
 * @property {number} [posted_at]
 * @property {*} [purchase_details]
 * @property {string} reference
 * @property {*} [reversal]
 * @property {*} [ship_from_details]
 * @property {*} [shipping_cost]
 * @property {string} status
 * @property {Object} status_transitions
 * @property {number} tax_date
 * @property {string} [token]
 * @property {number} transacted_at
 * @property {string} transaction_refresh
 * @property {*} [treasury]
 * @property {string} type
 * @property {number} updated
 * @property {number} [void_at]
 * @property {string} [wallet]
 */

/**
 * @typedef {Object} TransactionEntry
 * @property {Object} balance_impact
 * @property {number} created
 * @property {string} currency
 * @property {number} effective_at
 * @property {string} financial_account
 * @property {string} [flow]
 * @property {*} [flow_details]
 * @property {string} flow_type
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {*} transaction
 * @property {string} type
 */

/**
 * @typedef {Object} TransactionEntryLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} TransactionEntryListMatch
 * @property {*} [created]
 * @property {*} [effective_at]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {string} financial_account
 * @property {number} [limit]
 * @property {string} [order_by]
 * @property {string} [starting_after]
 * @property {string} [transaction]
 */

/**
 * @typedef {Object} Transfer
 * @property {number} amount
 * @property {number} amount_reversed
 * @property {*} [balance_transaction]
 * @property {number} created
 * @property {string} currency
 * @property {string} [description]
 * @property {*} [destination]
 * @property {*} [destination_payment]
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {Object} reversals
 * @property {boolean} reversed
 * @property {*} [source_transaction]
 * @property {string} [source_type]
 * @property {string} [transfer_group]
 */

/**
 * @typedef {Object} TransferLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} TransferListMatch
 * @property {*} [created]
 * @property {string} [destination]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [transfer_group]
 */

/**
 * @typedef {Object} TransferCreateData
 * @property {string} id
 * @property {number} amount
 * @property {number} amount_reversed
 * @property {*} [balance_transaction]
 * @property {number} created
 * @property {string} currency
 * @property {string} [description]
 * @property {*} [destination]
 * @property {*} [destination_payment]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {Object} reversals
 * @property {boolean} reversed
 * @property {*} [source_transaction]
 * @property {string} [source_type]
 * @property {string} [transfer_group]
 */

/**
 * @typedef {Object} TrialOffer
 * @property {boolean} active
 * @property {Object} duration
 * @property {Object} end_behavior
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} [nickname]
 * @property {string} object
 * @property {number} price
 */

/**
 * @typedef {Object} TrialOfferLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} TrialOfferListMatch
 * @property {boolean} [active]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {Array} [price]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} TrialOfferCreateData
 * @property {string} id
 * @property {boolean} active
 * @property {Object} duration
 * @property {Object} end_behavior
 * @property {boolean} livemode
 * @property {string} [nickname]
 * @property {string} object
 * @property {number} price
 */

/**
 * @typedef {Object} ValueList
 * @property {string} alias
 * @property {number} created
 * @property {string} created_by
 * @property {string} id
 * @property {string} item_type
 * @property {Object} list_items
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} name
 * @property {string} object
 */

/**
 * @typedef {Object} ValueListLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ValueListListMatch
 * @property {string} [alia]
 * @property {string} [contain]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} ValueListCreateData
 * @property {string} id
 * @property {string} alias
 * @property {number} created
 * @property {string} created_by
 * @property {string} item_type
 * @property {Object} list_items
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} name
 * @property {string} object
 */

/**
 * @typedef {Object} ValueListRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ValueListItem
 * @property {number} created
 * @property {string} created_by
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {string} value
 * @property {string} value_list
 */

/**
 * @typedef {Object} ValueListItemLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} ValueListItemListMatch
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [value]
 * @property {string} value_list
 */

/**
 * @typedef {Object} ValueListItemCreateData
 * @property {number} created
 * @property {string} created_by
 * @property {string} id
 * @property {boolean} livemode
 * @property {string} object
 * @property {string} value
 * @property {string} value_list
 */

/**
 * @typedef {Object} ValueListItemRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} VerificationReport
 * @property {string} [client_reference_id]
 * @property {number} created
 * @property {Object} document
 * @property {Object} email
 * @property {string} id
 * @property {Object} id_number
 * @property {boolean} livemode
 * @property {string} object
 * @property {Object} [options]
 * @property {Object} phone
 * @property {Object} selfie
 * @property {string} type
 * @property {string} [verification_flow]
 * @property {string} [verification_session]
 */

/**
 * @typedef {Object} VerificationReportLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} VerificationReportListMatch
 * @property {string} [client_reference_id]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 * @property {string} [type]
 * @property {string} [verification_session]
 */

/**
 * @typedef {Object} VerificationSession
 * @property {string} [client_reference_id]
 * @property {string} [client_secret]
 * @property {number} created
 * @property {string} id
 * @property {*} [last_error]
 * @property {*} [last_verification_report]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [options]
 * @property {*} [provided_details]
 * @property {*} [redaction]
 * @property {string} [related_customer]
 * @property {string} [related_customer_account]
 * @property {Object} related_person
 * @property {string} status
 * @property {string} type
 * @property {string} [url]
 * @property {string} [verification_flow]
 * @property {*} [verified_outputs]
 */

/**
 * @typedef {Object} VerificationSessionLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} VerificationSessionListMatch
 * @property {string} [client_reference_id]
 * @property {*} [created]
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [related_customer]
 * @property {string} [related_customer_account]
 * @property {string} [starting_after]
 * @property {string} [status]
 */

/**
 * @typedef {Object} VerificationSessionCreateData
 * @property {string} id
 * @property {string} [client_reference_id]
 * @property {string} [client_secret]
 * @property {number} created
 * @property {*} [last_error]
 * @property {*} [last_verification_report]
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {*} [options]
 * @property {*} [provided_details]
 * @property {*} [redaction]
 * @property {string} [related_customer]
 * @property {string} [related_customer_account]
 * @property {Object} related_person
 * @property {string} status
 * @property {string} type
 * @property {string} [url]
 * @property {string} [verification_flow]
 * @property {*} [verified_outputs]
 */

/**
 * @typedef {Object} WebhookEndpoint
 * @property {string} [api_version]
 * @property {string} [application]
 * @property {number} created
 * @property {string} [description]
 * @property {Array} enabled_events
 * @property {string} id
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {string} [secret]
 * @property {string} status
 * @property {string} url
 */

/**
 * @typedef {Object} WebhookEndpointLoadMatch
 * @property {string} id
 * @property {Array} [expand]
 */

/**
 * @typedef {Object} WebhookEndpointListMatch
 * @property {string} [ending_before]
 * @property {Array} [expand]
 * @property {number} [limit]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} WebhookEndpointCreateData
 * @property {string} id
 * @property {string} [api_version]
 * @property {string} [application]
 * @property {number} created
 * @property {string} [description]
 * @property {Array} enabled_events
 * @property {boolean} livemode
 * @property {Object} metadata
 * @property {string} object
 * @property {string} [secret]
 * @property {string} status
 * @property {string} url
 */

