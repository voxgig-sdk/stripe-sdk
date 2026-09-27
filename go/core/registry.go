package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAccountEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewAccountLinkEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewAccountOwnerEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewAccountSessionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewActiveEntitlementEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewAlertEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewApplePayDomainEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewApplicationFeeEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewAssociationEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewAuthenticationEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewAuthorizationEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewBalanceEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewBalanceSettingEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewBalanceTransactionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewBankAccountEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCalculationEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCapabilityEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCardEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCardholderEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCashBalanceEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCashBalanceTransactionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewChargeEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewConfigurationEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewConfirmationTokenEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewConnectionTokenEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCountrySpecEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCouponEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCreditBalanceSummaryEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCreditBalanceTransactionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCreditGrantEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCreditNoteEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCreditNoteLineEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCreditReversalEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCustomerEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCustomerBalanceTransactionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewCustomerSessionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDebitReversalEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDeletedAccountEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDeletedApplePayDomainEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDeletedCouponEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDeletedExternalAccountEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDeletedInvoiceitemEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDeletedPersonEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDeletedPlanEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDeletedProductFeatureEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDeletedSubscriptionItemEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDeletedWebhookEndpointEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDiscountEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDisputeEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewDomainEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewEarlyFraudWarningEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewEphemeralKeyEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewEventEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewExchangeRateEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewExternalAccountEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewFeatureEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewFeedbackOptionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewFileEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewFileLinkEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewFinancialAccountEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewFinancialAccountFeatureEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewFundCashBalanceEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewFundingInstructionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewHistoryEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewInboundTransferEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewInstallEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewInvoiceEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewInvoicePaymentEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewInvoiceRenderingTemplateEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewInvoiceitemEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewLineEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewLineItemEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewLinkedAccountEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewLinkedAccountOwnerEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewLocationEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewLoginLinkEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewMandateEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewMeterEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewMeterEventEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewMeterEventAdjustmentEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewMeterEventSummaryEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewOnboardingLinkEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewOrderEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewOutboundPaymentEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewOutboundTransferEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPaymentAttemptRecordEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPaymentEvaluationEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPaymentIntentEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPaymentIntentAmountDetailsLineItemEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPaymentLinkEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPaymentMethodEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPaymentMethodConfigurationEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPaymentMethodDomainEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPaymentRecordEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPayoutEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPersonEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPersonalizationDesignEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPhysicalBundleEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPlanEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPriceEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewProductEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewProductFeatureEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewPromotionCodeEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewQuoteEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewQuoteComputedUpfrontLineItemEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewQuotePdfEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewReaderEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewReceivedCreditEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewReceivedDebitEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewRefundEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewRegistrationEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewReportRunEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewReportTypeEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewRequestEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewReversalEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewReviewEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewScheduledQueryRunEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSearchEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSecretEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSessionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSettingEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSettlementEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSetupAttemptEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSetupIntentEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewShippingRateEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSigmaApiQueryEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSourceEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSourceMandateNotificationEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSourceTransactionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSubscriptionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSubscriptionItemEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSubscriptionScheduleEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewSupplierEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewTaxCodeEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewTaxIdEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewTaxRateEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewTestClockEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewTokenEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewTopupEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewTransactionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewTransactionEntryEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewTransferEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewTrialOfferEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewValueListEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewValueListItemEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewVerificationReportEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewVerificationSessionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

var NewWebhookEndpointEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

