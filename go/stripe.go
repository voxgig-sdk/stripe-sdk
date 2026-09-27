package voxgigstripesdk

import (
	"github.com/voxgig-sdk/stripe-sdk/go/core"
	"github.com/voxgig-sdk/stripe-sdk/go/entity"
	"github.com/voxgig-sdk/stripe-sdk/go/feature"
	_ "github.com/voxgig-sdk/stripe-sdk/go/utility"
)

// Type aliases preserve external API.
type StripeSDK = core.StripeSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type StripeEntity = core.StripeEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type StripeError = core.StripeError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAccountEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewAccountEntity(client, entopts)
	}
	core.NewAccountLinkEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewAccountLinkEntity(client, entopts)
	}
	core.NewAccountOwnerEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewAccountOwnerEntity(client, entopts)
	}
	core.NewAccountSessionEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewAccountSessionEntity(client, entopts)
	}
	core.NewActiveEntitlementEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewActiveEntitlementEntity(client, entopts)
	}
	core.NewAlertEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewAlertEntity(client, entopts)
	}
	core.NewApplePayDomainEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewApplePayDomainEntity(client, entopts)
	}
	core.NewApplicationFeeEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewApplicationFeeEntity(client, entopts)
	}
	core.NewAssociationEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewAssociationEntity(client, entopts)
	}
	core.NewAuthenticationEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewAuthenticationEntity(client, entopts)
	}
	core.NewAuthorizationEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewAuthorizationEntity(client, entopts)
	}
	core.NewBalanceEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewBalanceEntity(client, entopts)
	}
	core.NewBalanceSettingEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewBalanceSettingEntity(client, entopts)
	}
	core.NewBalanceTransactionEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewBalanceTransactionEntity(client, entopts)
	}
	core.NewBankAccountEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewBankAccountEntity(client, entopts)
	}
	core.NewCalculationEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCalculationEntity(client, entopts)
	}
	core.NewCapabilityEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCapabilityEntity(client, entopts)
	}
	core.NewCardEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCardEntity(client, entopts)
	}
	core.NewCardholderEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCardholderEntity(client, entopts)
	}
	core.NewCashBalanceEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCashBalanceEntity(client, entopts)
	}
	core.NewCashBalanceTransactionEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCashBalanceTransactionEntity(client, entopts)
	}
	core.NewChargeEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewChargeEntity(client, entopts)
	}
	core.NewConfigurationEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewConfigurationEntity(client, entopts)
	}
	core.NewConfirmationTokenEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewConfirmationTokenEntity(client, entopts)
	}
	core.NewConnectionTokenEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewConnectionTokenEntity(client, entopts)
	}
	core.NewCountrySpecEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCountrySpecEntity(client, entopts)
	}
	core.NewCouponEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCouponEntity(client, entopts)
	}
	core.NewCreditBalanceSummaryEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCreditBalanceSummaryEntity(client, entopts)
	}
	core.NewCreditBalanceTransactionEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCreditBalanceTransactionEntity(client, entopts)
	}
	core.NewCreditGrantEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCreditGrantEntity(client, entopts)
	}
	core.NewCreditNoteEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCreditNoteEntity(client, entopts)
	}
	core.NewCreditNoteLineEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCreditNoteLineEntity(client, entopts)
	}
	core.NewCreditReversalEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCreditReversalEntity(client, entopts)
	}
	core.NewCustomerEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCustomerEntity(client, entopts)
	}
	core.NewCustomerBalanceTransactionEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCustomerBalanceTransactionEntity(client, entopts)
	}
	core.NewCustomerSessionEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewCustomerSessionEntity(client, entopts)
	}
	core.NewDebitReversalEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDebitReversalEntity(client, entopts)
	}
	core.NewDeletedAccountEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDeletedAccountEntity(client, entopts)
	}
	core.NewDeletedApplePayDomainEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDeletedApplePayDomainEntity(client, entopts)
	}
	core.NewDeletedCouponEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDeletedCouponEntity(client, entopts)
	}
	core.NewDeletedExternalAccountEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDeletedExternalAccountEntity(client, entopts)
	}
	core.NewDeletedInvoiceitemEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDeletedInvoiceitemEntity(client, entopts)
	}
	core.NewDeletedPersonEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDeletedPersonEntity(client, entopts)
	}
	core.NewDeletedPlanEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDeletedPlanEntity(client, entopts)
	}
	core.NewDeletedProductFeatureEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDeletedProductFeatureEntity(client, entopts)
	}
	core.NewDeletedSubscriptionItemEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDeletedSubscriptionItemEntity(client, entopts)
	}
	core.NewDeletedWebhookEndpointEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDeletedWebhookEndpointEntity(client, entopts)
	}
	core.NewDiscountEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDiscountEntity(client, entopts)
	}
	core.NewDisputeEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDisputeEntity(client, entopts)
	}
	core.NewDomainEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewDomainEntity(client, entopts)
	}
	core.NewEarlyFraudWarningEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewEarlyFraudWarningEntity(client, entopts)
	}
	core.NewEphemeralKeyEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewEphemeralKeyEntity(client, entopts)
	}
	core.NewEventEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewEventEntity(client, entopts)
	}
	core.NewExchangeRateEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewExchangeRateEntity(client, entopts)
	}
	core.NewExternalAccountEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewExternalAccountEntity(client, entopts)
	}
	core.NewFeatureEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewFeatureEntity(client, entopts)
	}
	core.NewFeedbackOptionEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewFeedbackOptionEntity(client, entopts)
	}
	core.NewFileEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewFileEntity(client, entopts)
	}
	core.NewFileLinkEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewFileLinkEntity(client, entopts)
	}
	core.NewFinancialAccountEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewFinancialAccountEntity(client, entopts)
	}
	core.NewFinancialAccountFeatureEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewFinancialAccountFeatureEntity(client, entopts)
	}
	core.NewFundCashBalanceEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewFundCashBalanceEntity(client, entopts)
	}
	core.NewFundingInstructionEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewFundingInstructionEntity(client, entopts)
	}
	core.NewHistoryEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewHistoryEntity(client, entopts)
	}
	core.NewInboundTransferEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewInboundTransferEntity(client, entopts)
	}
	core.NewInstallEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewInstallEntity(client, entopts)
	}
	core.NewInvoiceEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewInvoiceEntity(client, entopts)
	}
	core.NewInvoicePaymentEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewInvoicePaymentEntity(client, entopts)
	}
	core.NewInvoiceRenderingTemplateEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewInvoiceRenderingTemplateEntity(client, entopts)
	}
	core.NewInvoiceitemEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewInvoiceitemEntity(client, entopts)
	}
	core.NewLineEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewLineEntity(client, entopts)
	}
	core.NewLineItemEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewLineItemEntity(client, entopts)
	}
	core.NewLinkedAccountEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewLinkedAccountEntity(client, entopts)
	}
	core.NewLinkedAccountOwnerEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewLinkedAccountOwnerEntity(client, entopts)
	}
	core.NewLocationEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewLocationEntity(client, entopts)
	}
	core.NewLoginLinkEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewLoginLinkEntity(client, entopts)
	}
	core.NewMandateEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewMandateEntity(client, entopts)
	}
	core.NewMeterEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewMeterEntity(client, entopts)
	}
	core.NewMeterEventEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewMeterEventEntity(client, entopts)
	}
	core.NewMeterEventAdjustmentEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewMeterEventAdjustmentEntity(client, entopts)
	}
	core.NewMeterEventSummaryEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewMeterEventSummaryEntity(client, entopts)
	}
	core.NewOnboardingLinkEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewOnboardingLinkEntity(client, entopts)
	}
	core.NewOrderEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewOrderEntity(client, entopts)
	}
	core.NewOutboundPaymentEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewOutboundPaymentEntity(client, entopts)
	}
	core.NewOutboundTransferEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewOutboundTransferEntity(client, entopts)
	}
	core.NewPaymentAttemptRecordEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPaymentAttemptRecordEntity(client, entopts)
	}
	core.NewPaymentEvaluationEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPaymentEvaluationEntity(client, entopts)
	}
	core.NewPaymentIntentEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPaymentIntentEntity(client, entopts)
	}
	core.NewPaymentIntentAmountDetailsLineItemEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPaymentIntentAmountDetailsLineItemEntity(client, entopts)
	}
	core.NewPaymentLinkEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPaymentLinkEntity(client, entopts)
	}
	core.NewPaymentMethodEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPaymentMethodEntity(client, entopts)
	}
	core.NewPaymentMethodConfigurationEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPaymentMethodConfigurationEntity(client, entopts)
	}
	core.NewPaymentMethodDomainEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPaymentMethodDomainEntity(client, entopts)
	}
	core.NewPaymentRecordEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPaymentRecordEntity(client, entopts)
	}
	core.NewPayoutEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPayoutEntity(client, entopts)
	}
	core.NewPersonEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPersonEntity(client, entopts)
	}
	core.NewPersonalizationDesignEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPersonalizationDesignEntity(client, entopts)
	}
	core.NewPhysicalBundleEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPhysicalBundleEntity(client, entopts)
	}
	core.NewPlanEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPlanEntity(client, entopts)
	}
	core.NewPriceEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPriceEntity(client, entopts)
	}
	core.NewProductEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewProductEntity(client, entopts)
	}
	core.NewProductFeatureEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewProductFeatureEntity(client, entopts)
	}
	core.NewPromotionCodeEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewPromotionCodeEntity(client, entopts)
	}
	core.NewQuoteEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewQuoteEntity(client, entopts)
	}
	core.NewQuoteComputedUpfrontLineItemEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewQuoteComputedUpfrontLineItemEntity(client, entopts)
	}
	core.NewQuotePdfEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewQuotePdfEntity(client, entopts)
	}
	core.NewReaderEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewReaderEntity(client, entopts)
	}
	core.NewReceivedCreditEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewReceivedCreditEntity(client, entopts)
	}
	core.NewReceivedDebitEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewReceivedDebitEntity(client, entopts)
	}
	core.NewRefundEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewRefundEntity(client, entopts)
	}
	core.NewRegistrationEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewRegistrationEntity(client, entopts)
	}
	core.NewReportRunEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewReportRunEntity(client, entopts)
	}
	core.NewReportTypeEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewReportTypeEntity(client, entopts)
	}
	core.NewRequestEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewRequestEntity(client, entopts)
	}
	core.NewReversalEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewReversalEntity(client, entopts)
	}
	core.NewReviewEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewReviewEntity(client, entopts)
	}
	core.NewScheduledQueryRunEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewScheduledQueryRunEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSearchEntity(client, entopts)
	}
	core.NewSecretEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSecretEntity(client, entopts)
	}
	core.NewSessionEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSessionEntity(client, entopts)
	}
	core.NewSettingEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSettingEntity(client, entopts)
	}
	core.NewSettlementEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSettlementEntity(client, entopts)
	}
	core.NewSetupAttemptEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSetupAttemptEntity(client, entopts)
	}
	core.NewSetupIntentEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSetupIntentEntity(client, entopts)
	}
	core.NewShippingRateEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewShippingRateEntity(client, entopts)
	}
	core.NewSigmaApiQueryEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSigmaApiQueryEntity(client, entopts)
	}
	core.NewSourceEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSourceEntity(client, entopts)
	}
	core.NewSourceMandateNotificationEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSourceMandateNotificationEntity(client, entopts)
	}
	core.NewSourceTransactionEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSourceTransactionEntity(client, entopts)
	}
	core.NewSubscriptionEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSubscriptionEntity(client, entopts)
	}
	core.NewSubscriptionItemEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSubscriptionItemEntity(client, entopts)
	}
	core.NewSubscriptionScheduleEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSubscriptionScheduleEntity(client, entopts)
	}
	core.NewSupplierEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewSupplierEntity(client, entopts)
	}
	core.NewTaxCodeEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewTaxCodeEntity(client, entopts)
	}
	core.NewTaxIdEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewTaxIdEntity(client, entopts)
	}
	core.NewTaxRateEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewTaxRateEntity(client, entopts)
	}
	core.NewTestClockEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewTestClockEntity(client, entopts)
	}
	core.NewTokenEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewTokenEntity(client, entopts)
	}
	core.NewTopupEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewTopupEntity(client, entopts)
	}
	core.NewTransactionEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewTransactionEntity(client, entopts)
	}
	core.NewTransactionEntryEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewTransactionEntryEntity(client, entopts)
	}
	core.NewTransferEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewTransferEntity(client, entopts)
	}
	core.NewTrialOfferEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewTrialOfferEntity(client, entopts)
	}
	core.NewValueListEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewValueListEntity(client, entopts)
	}
	core.NewValueListItemEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewValueListItemEntity(client, entopts)
	}
	core.NewVerificationReportEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewVerificationReportEntity(client, entopts)
	}
	core.NewVerificationSessionEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewVerificationSessionEntity(client, entopts)
	}
	core.NewWebhookEndpointEntityFunc = func(client *core.StripeSDK, entopts map[string]any) core.StripeEntity {
		return entity.NewWebhookEndpointEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewStripeSDK = core.NewStripeSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewStripeSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *StripeSDK  { return NewStripeSDK(nil) }
func Test() *StripeSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
