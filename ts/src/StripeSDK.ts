// Stripe Ts SDK

import { AccountEntity } from './entity/AccountEntity'
import { AccountLinkEntity } from './entity/AccountLinkEntity'
import { AccountOwnerEntity } from './entity/AccountOwnerEntity'
import { AccountSessionEntity } from './entity/AccountSessionEntity'
import { ActiveEntitlementEntity } from './entity/ActiveEntitlementEntity'
import { AlertEntity } from './entity/AlertEntity'
import { ApplePayDomainEntity } from './entity/ApplePayDomainEntity'
import { ApplicationFeeEntity } from './entity/ApplicationFeeEntity'
import { AssociationEntity } from './entity/AssociationEntity'
import { AuthenticationEntity } from './entity/AuthenticationEntity'
import { AuthorizationEntity } from './entity/AuthorizationEntity'
import { BalanceEntity } from './entity/BalanceEntity'
import { BalanceSettingEntity } from './entity/BalanceSettingEntity'
import { BalanceTransactionEntity } from './entity/BalanceTransactionEntity'
import { BankAccountEntity } from './entity/BankAccountEntity'
import { CalculationEntity } from './entity/CalculationEntity'
import { CapabilityEntity } from './entity/CapabilityEntity'
import { CardEntity } from './entity/CardEntity'
import { CardholderEntity } from './entity/CardholderEntity'
import { CashBalanceEntity } from './entity/CashBalanceEntity'
import { CashBalanceTransactionEntity } from './entity/CashBalanceTransactionEntity'
import { ChargeEntity } from './entity/ChargeEntity'
import { ConfigurationEntity } from './entity/ConfigurationEntity'
import { ConfirmationTokenEntity } from './entity/ConfirmationTokenEntity'
import { ConnectionTokenEntity } from './entity/ConnectionTokenEntity'
import { CountrySpecEntity } from './entity/CountrySpecEntity'
import { CouponEntity } from './entity/CouponEntity'
import { CreditBalanceSummaryEntity } from './entity/CreditBalanceSummaryEntity'
import { CreditBalanceTransactionEntity } from './entity/CreditBalanceTransactionEntity'
import { CreditGrantEntity } from './entity/CreditGrantEntity'
import { CreditNoteEntity } from './entity/CreditNoteEntity'
import { CreditNoteLineEntity } from './entity/CreditNoteLineEntity'
import { CreditReversalEntity } from './entity/CreditReversalEntity'
import { CustomerEntity } from './entity/CustomerEntity'
import { CustomerBalanceTransactionEntity } from './entity/CustomerBalanceTransactionEntity'
import { CustomerSessionEntity } from './entity/CustomerSessionEntity'
import { DebitReversalEntity } from './entity/DebitReversalEntity'
import { DeletedAccountEntity } from './entity/DeletedAccountEntity'
import { DeletedApplePayDomainEntity } from './entity/DeletedApplePayDomainEntity'
import { DeletedCouponEntity } from './entity/DeletedCouponEntity'
import { DeletedExternalAccountEntity } from './entity/DeletedExternalAccountEntity'
import { DeletedInvoiceitemEntity } from './entity/DeletedInvoiceitemEntity'
import { DeletedPersonEntity } from './entity/DeletedPersonEntity'
import { DeletedPlanEntity } from './entity/DeletedPlanEntity'
import { DeletedProductFeatureEntity } from './entity/DeletedProductFeatureEntity'
import { DeletedSubscriptionItemEntity } from './entity/DeletedSubscriptionItemEntity'
import { DeletedWebhookEndpointEntity } from './entity/DeletedWebhookEndpointEntity'
import { DiscountEntity } from './entity/DiscountEntity'
import { DisputeEntity } from './entity/DisputeEntity'
import { DomainEntity } from './entity/DomainEntity'
import { EarlyFraudWarningEntity } from './entity/EarlyFraudWarningEntity'
import { EphemeralKeyEntity } from './entity/EphemeralKeyEntity'
import { EventEntity } from './entity/EventEntity'
import { ExchangeRateEntity } from './entity/ExchangeRateEntity'
import { ExternalAccountEntity } from './entity/ExternalAccountEntity'
import { FeatureEntity } from './entity/FeatureEntity'
import { FeedbackOptionEntity } from './entity/FeedbackOptionEntity'
import { FileEntity } from './entity/FileEntity'
import { FileLinkEntity } from './entity/FileLinkEntity'
import { FinancialAccountEntity } from './entity/FinancialAccountEntity'
import { FinancialAccountFeatureEntity } from './entity/FinancialAccountFeatureEntity'
import { FundCashBalanceEntity } from './entity/FundCashBalanceEntity'
import { FundingInstructionEntity } from './entity/FundingInstructionEntity'
import { HistoryEntity } from './entity/HistoryEntity'
import { InboundTransferEntity } from './entity/InboundTransferEntity'
import { InstallEntity } from './entity/InstallEntity'
import { InvoiceEntity } from './entity/InvoiceEntity'
import { InvoicePaymentEntity } from './entity/InvoicePaymentEntity'
import { InvoiceRenderingTemplateEntity } from './entity/InvoiceRenderingTemplateEntity'
import { InvoiceitemEntity } from './entity/InvoiceitemEntity'
import { LineEntity } from './entity/LineEntity'
import { LineItemEntity } from './entity/LineItemEntity'
import { LinkedAccountEntity } from './entity/LinkedAccountEntity'
import { LinkedAccountOwnerEntity } from './entity/LinkedAccountOwnerEntity'
import { LocationEntity } from './entity/LocationEntity'
import { LoginLinkEntity } from './entity/LoginLinkEntity'
import { MandateEntity } from './entity/MandateEntity'
import { MeterEntity } from './entity/MeterEntity'
import { MeterEventEntity } from './entity/MeterEventEntity'
import { MeterEventAdjustmentEntity } from './entity/MeterEventAdjustmentEntity'
import { MeterEventSummaryEntity } from './entity/MeterEventSummaryEntity'
import { OnboardingLinkEntity } from './entity/OnboardingLinkEntity'
import { OrderEntity } from './entity/OrderEntity'
import { OutboundPaymentEntity } from './entity/OutboundPaymentEntity'
import { OutboundTransferEntity } from './entity/OutboundTransferEntity'
import { PaymentAttemptRecordEntity } from './entity/PaymentAttemptRecordEntity'
import { PaymentEvaluationEntity } from './entity/PaymentEvaluationEntity'
import { PaymentIntentEntity } from './entity/PaymentIntentEntity'
import { PaymentIntentAmountDetailsLineItemEntity } from './entity/PaymentIntentAmountDetailsLineItemEntity'
import { PaymentLinkEntity } from './entity/PaymentLinkEntity'
import { PaymentMethodEntity } from './entity/PaymentMethodEntity'
import { PaymentMethodConfigurationEntity } from './entity/PaymentMethodConfigurationEntity'
import { PaymentMethodDomainEntity } from './entity/PaymentMethodDomainEntity'
import { PaymentRecordEntity } from './entity/PaymentRecordEntity'
import { PayoutEntity } from './entity/PayoutEntity'
import { PersonEntity } from './entity/PersonEntity'
import { PersonalizationDesignEntity } from './entity/PersonalizationDesignEntity'
import { PhysicalBundleEntity } from './entity/PhysicalBundleEntity'
import { PlanEntity } from './entity/PlanEntity'
import { PriceEntity } from './entity/PriceEntity'
import { ProductEntity } from './entity/ProductEntity'
import { ProductFeatureEntity } from './entity/ProductFeatureEntity'
import { PromotionCodeEntity } from './entity/PromotionCodeEntity'
import { QuoteEntity } from './entity/QuoteEntity'
import { QuoteComputedUpfrontLineItemEntity } from './entity/QuoteComputedUpfrontLineItemEntity'
import { QuotePdfEntity } from './entity/QuotePdfEntity'
import { ReaderEntity } from './entity/ReaderEntity'
import { ReceivedCreditEntity } from './entity/ReceivedCreditEntity'
import { ReceivedDebitEntity } from './entity/ReceivedDebitEntity'
import { RefundEntity } from './entity/RefundEntity'
import { RegistrationEntity } from './entity/RegistrationEntity'
import { ReportRunEntity } from './entity/ReportRunEntity'
import { ReportTypeEntity } from './entity/ReportTypeEntity'
import { RequestEntity } from './entity/RequestEntity'
import { ReversalEntity } from './entity/ReversalEntity'
import { ReviewEntity } from './entity/ReviewEntity'
import { ScheduledQueryRunEntity } from './entity/ScheduledQueryRunEntity'
import { SearchEntity } from './entity/SearchEntity'
import { SecretEntity } from './entity/SecretEntity'
import { SessionEntity } from './entity/SessionEntity'
import { SettingEntity } from './entity/SettingEntity'
import { SettlementEntity } from './entity/SettlementEntity'
import { SetupAttemptEntity } from './entity/SetupAttemptEntity'
import { SetupIntentEntity } from './entity/SetupIntentEntity'
import { ShippingRateEntity } from './entity/ShippingRateEntity'
import { SigmaApiQueryEntity } from './entity/SigmaApiQueryEntity'
import { SourceEntity } from './entity/SourceEntity'
import { SourceMandateNotificationEntity } from './entity/SourceMandateNotificationEntity'
import { SourceTransactionEntity } from './entity/SourceTransactionEntity'
import { SubscriptionEntity } from './entity/SubscriptionEntity'
import { SubscriptionItemEntity } from './entity/SubscriptionItemEntity'
import { SubscriptionScheduleEntity } from './entity/SubscriptionScheduleEntity'
import { SupplierEntity } from './entity/SupplierEntity'
import { TaxCodeEntity } from './entity/TaxCodeEntity'
import { TaxIdEntity } from './entity/TaxIdEntity'
import { TaxRateEntity } from './entity/TaxRateEntity'
import { TestClockEntity } from './entity/TestClockEntity'
import { TokenEntity } from './entity/TokenEntity'
import { TopupEntity } from './entity/TopupEntity'
import { TransactionEntity } from './entity/TransactionEntity'
import { TransactionEntryEntity } from './entity/TransactionEntryEntity'
import { TransferEntity } from './entity/TransferEntity'
import { TrialOfferEntity } from './entity/TrialOfferEntity'
import { ValueListEntity } from './entity/ValueListEntity'
import { ValueListItemEntity } from './entity/ValueListItemEntity'
import { VerificationReportEntity } from './entity/VerificationReportEntity'
import { VerificationSessionEntity } from './entity/VerificationSessionEntity'
import { WebhookEndpointEntity } from './entity/WebhookEndpointEntity'

export type * from './StripeTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { StripeEntityBase } from './StripeEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class StripeSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('StripeSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('StripeSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('StripeSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Account().list()` / `client.Account().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Account(entopts?: Record<string, any>) {
    const self = this
    return new AccountEntity(self, entopts)
  }


  // Entity access: `client.AccountLink().list()` / `client.AccountLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountLink(entopts?: Record<string, any>) {
    const self = this
    return new AccountLinkEntity(self, entopts)
  }


  // Entity access: `client.AccountOwner().list()` / `client.AccountOwner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountOwner(entopts?: Record<string, any>) {
    const self = this
    return new AccountOwnerEntity(self, entopts)
  }


  // Entity access: `client.AccountSession().list()` / `client.AccountSession().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountSession(entopts?: Record<string, any>) {
    const self = this
    return new AccountSessionEntity(self, entopts)
  }


  // Entity access: `client.ActiveEntitlement().list()` / `client.ActiveEntitlement().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActiveEntitlement(entopts?: Record<string, any>) {
    const self = this
    return new ActiveEntitlementEntity(self, entopts)
  }


  // Entity access: `client.Alert().list()` / `client.Alert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Alert(entopts?: Record<string, any>) {
    const self = this
    return new AlertEntity(self, entopts)
  }


  // Entity access: `client.ApplePayDomain().list()` / `client.ApplePayDomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApplePayDomain(entopts?: Record<string, any>) {
    const self = this
    return new ApplePayDomainEntity(self, entopts)
  }


  // Entity access: `client.ApplicationFee().list()` / `client.ApplicationFee().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApplicationFee(entopts?: Record<string, any>) {
    const self = this
    return new ApplicationFeeEntity(self, entopts)
  }


  // Entity access: `client.Association().list()` / `client.Association().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Association(entopts?: Record<string, any>) {
    const self = this
    return new AssociationEntity(self, entopts)
  }


  // Entity access: `client.Authentication().list()` / `client.Authentication().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Authentication(entopts?: Record<string, any>) {
    const self = this
    return new AuthenticationEntity(self, entopts)
  }


  // Entity access: `client.Authorization().list()` / `client.Authorization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Authorization(entopts?: Record<string, any>) {
    const self = this
    return new AuthorizationEntity(self, entopts)
  }


  // Entity access: `client.Balance().list()` / `client.Balance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Balance(entopts?: Record<string, any>) {
    const self = this
    return new BalanceEntity(self, entopts)
  }


  // Entity access: `client.BalanceSetting().list()` / `client.BalanceSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BalanceSetting(entopts?: Record<string, any>) {
    const self = this
    return new BalanceSettingEntity(self, entopts)
  }


  // Entity access: `client.BalanceTransaction().list()` / `client.BalanceTransaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BalanceTransaction(entopts?: Record<string, any>) {
    const self = this
    return new BalanceTransactionEntity(self, entopts)
  }


  // Entity access: `client.BankAccount().list()` / `client.BankAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BankAccount(entopts?: Record<string, any>) {
    const self = this
    return new BankAccountEntity(self, entopts)
  }


  // Entity access: `client.Calculation().list()` / `client.Calculation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Calculation(entopts?: Record<string, any>) {
    const self = this
    return new CalculationEntity(self, entopts)
  }


  // Entity access: `client.Capability().list()` / `client.Capability().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Capability(entopts?: Record<string, any>) {
    const self = this
    return new CapabilityEntity(self, entopts)
  }


  // Entity access: `client.Card().list()` / `client.Card().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Card(entopts?: Record<string, any>) {
    const self = this
    return new CardEntity(self, entopts)
  }


  // Entity access: `client.Cardholder().list()` / `client.Cardholder().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Cardholder(entopts?: Record<string, any>) {
    const self = this
    return new CardholderEntity(self, entopts)
  }


  // Entity access: `client.CashBalance().list()` / `client.CashBalance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CashBalance(entopts?: Record<string, any>) {
    const self = this
    return new CashBalanceEntity(self, entopts)
  }


  // Entity access: `client.CashBalanceTransaction().list()` / `client.CashBalanceTransaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CashBalanceTransaction(entopts?: Record<string, any>) {
    const self = this
    return new CashBalanceTransactionEntity(self, entopts)
  }


  // Entity access: `client.Charge().list()` / `client.Charge().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Charge(entopts?: Record<string, any>) {
    const self = this
    return new ChargeEntity(self, entopts)
  }


  // Entity access: `client.Configuration().list()` / `client.Configuration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Configuration(entopts?: Record<string, any>) {
    const self = this
    return new ConfigurationEntity(self, entopts)
  }


  // Entity access: `client.ConfirmationToken().list()` / `client.ConfirmationToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConfirmationToken(entopts?: Record<string, any>) {
    const self = this
    return new ConfirmationTokenEntity(self, entopts)
  }


  // Entity access: `client.ConnectionToken().list()` / `client.ConnectionToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConnectionToken(entopts?: Record<string, any>) {
    const self = this
    return new ConnectionTokenEntity(self, entopts)
  }


  // Entity access: `client.CountrySpec().list()` / `client.CountrySpec().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CountrySpec(entopts?: Record<string, any>) {
    const self = this
    return new CountrySpecEntity(self, entopts)
  }


  // Entity access: `client.Coupon().list()` / `client.Coupon().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Coupon(entopts?: Record<string, any>) {
    const self = this
    return new CouponEntity(self, entopts)
  }


  // Entity access: `client.CreditBalanceSummary().list()` / `client.CreditBalanceSummary().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditBalanceSummary(entopts?: Record<string, any>) {
    const self = this
    return new CreditBalanceSummaryEntity(self, entopts)
  }


  // Entity access: `client.CreditBalanceTransaction().list()` / `client.CreditBalanceTransaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditBalanceTransaction(entopts?: Record<string, any>) {
    const self = this
    return new CreditBalanceTransactionEntity(self, entopts)
  }


  // Entity access: `client.CreditGrant().list()` / `client.CreditGrant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditGrant(entopts?: Record<string, any>) {
    const self = this
    return new CreditGrantEntity(self, entopts)
  }


  // Entity access: `client.CreditNote().list()` / `client.CreditNote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditNote(entopts?: Record<string, any>) {
    const self = this
    return new CreditNoteEntity(self, entopts)
  }


  // Entity access: `client.CreditNoteLine().list()` / `client.CreditNoteLine().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditNoteLine(entopts?: Record<string, any>) {
    const self = this
    return new CreditNoteLineEntity(self, entopts)
  }


  // Entity access: `client.CreditReversal().list()` / `client.CreditReversal().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditReversal(entopts?: Record<string, any>) {
    const self = this
    return new CreditReversalEntity(self, entopts)
  }


  // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Customer(entopts?: Record<string, any>) {
    const self = this
    return new CustomerEntity(self, entopts)
  }


  // Entity access: `client.CustomerBalanceTransaction().list()` / `client.CustomerBalanceTransaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomerBalanceTransaction(entopts?: Record<string, any>) {
    const self = this
    return new CustomerBalanceTransactionEntity(self, entopts)
  }


  // Entity access: `client.CustomerSession().list()` / `client.CustomerSession().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomerSession(entopts?: Record<string, any>) {
    const self = this
    return new CustomerSessionEntity(self, entopts)
  }


  // Entity access: `client.DebitReversal().list()` / `client.DebitReversal().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DebitReversal(entopts?: Record<string, any>) {
    const self = this
    return new DebitReversalEntity(self, entopts)
  }


  // Entity access: `client.DeletedAccount().list()` / `client.DeletedAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedAccount(entopts?: Record<string, any>) {
    const self = this
    return new DeletedAccountEntity(self, entopts)
  }


  // Entity access: `client.DeletedApplePayDomain().list()` / `client.DeletedApplePayDomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedApplePayDomain(entopts?: Record<string, any>) {
    const self = this
    return new DeletedApplePayDomainEntity(self, entopts)
  }


  // Entity access: `client.DeletedCoupon().list()` / `client.DeletedCoupon().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedCoupon(entopts?: Record<string, any>) {
    const self = this
    return new DeletedCouponEntity(self, entopts)
  }


  // Entity access: `client.DeletedExternalAccount().list()` / `client.DeletedExternalAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedExternalAccount(entopts?: Record<string, any>) {
    const self = this
    return new DeletedExternalAccountEntity(self, entopts)
  }


  // Entity access: `client.DeletedInvoiceitem().list()` / `client.DeletedInvoiceitem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedInvoiceitem(entopts?: Record<string, any>) {
    const self = this
    return new DeletedInvoiceitemEntity(self, entopts)
  }


  // Entity access: `client.DeletedPerson().list()` / `client.DeletedPerson().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedPerson(entopts?: Record<string, any>) {
    const self = this
    return new DeletedPersonEntity(self, entopts)
  }


  // Entity access: `client.DeletedPlan().list()` / `client.DeletedPlan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedPlan(entopts?: Record<string, any>) {
    const self = this
    return new DeletedPlanEntity(self, entopts)
  }


  // Entity access: `client.DeletedProductFeature().list()` / `client.DeletedProductFeature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedProductFeature(entopts?: Record<string, any>) {
    const self = this
    return new DeletedProductFeatureEntity(self, entopts)
  }


  // Entity access: `client.DeletedSubscriptionItem().list()` / `client.DeletedSubscriptionItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedSubscriptionItem(entopts?: Record<string, any>) {
    const self = this
    return new DeletedSubscriptionItemEntity(self, entopts)
  }


  // Entity access: `client.DeletedWebhookEndpoint().list()` / `client.DeletedWebhookEndpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedWebhookEndpoint(entopts?: Record<string, any>) {
    const self = this
    return new DeletedWebhookEndpointEntity(self, entopts)
  }


  // Entity access: `client.Discount().list()` / `client.Discount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Discount(entopts?: Record<string, any>) {
    const self = this
    return new DiscountEntity(self, entopts)
  }


  // Entity access: `client.Dispute().list()` / `client.Dispute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Dispute(entopts?: Record<string, any>) {
    const self = this
    return new DisputeEntity(self, entopts)
  }


  // Entity access: `client.Domain().list()` / `client.Domain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Domain(entopts?: Record<string, any>) {
    const self = this
    return new DomainEntity(self, entopts)
  }


  // Entity access: `client.EarlyFraudWarning().list()` / `client.EarlyFraudWarning().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EarlyFraudWarning(entopts?: Record<string, any>) {
    const self = this
    return new EarlyFraudWarningEntity(self, entopts)
  }


  // Entity access: `client.EphemeralKey().list()` / `client.EphemeralKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EphemeralKey(entopts?: Record<string, any>) {
    const self = this
    return new EphemeralKeyEntity(self, entopts)
  }


  // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Event(entopts?: Record<string, any>) {
    const self = this
    return new EventEntity(self, entopts)
  }


  // Entity access: `client.ExchangeRate().list()` / `client.ExchangeRate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ExchangeRate(entopts?: Record<string, any>) {
    const self = this
    return new ExchangeRateEntity(self, entopts)
  }


  // Entity access: `client.ExternalAccount().list()` / `client.ExternalAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ExternalAccount(entopts?: Record<string, any>) {
    const self = this
    return new ExternalAccountEntity(self, entopts)
  }


  // Entity access: `client.Feature().list()` / `client.Feature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Feature(entopts?: Record<string, any>) {
    const self = this
    return new FeatureEntity(self, entopts)
  }


  // Entity access: `client.FeedbackOption().list()` / `client.FeedbackOption().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FeedbackOption(entopts?: Record<string, any>) {
    const self = this
    return new FeedbackOptionEntity(self, entopts)
  }


  // Entity access: `client.File().list()` / `client.File().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  File(entopts?: Record<string, any>) {
    const self = this
    return new FileEntity(self, entopts)
  }


  // Entity access: `client.FileLink().list()` / `client.FileLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FileLink(entopts?: Record<string, any>) {
    const self = this
    return new FileLinkEntity(self, entopts)
  }


  // Entity access: `client.FinancialAccount().list()` / `client.FinancialAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FinancialAccount(entopts?: Record<string, any>) {
    const self = this
    return new FinancialAccountEntity(self, entopts)
  }


  // Entity access: `client.FinancialAccountFeature().list()` / `client.FinancialAccountFeature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FinancialAccountFeature(entopts?: Record<string, any>) {
    const self = this
    return new FinancialAccountFeatureEntity(self, entopts)
  }


  // Entity access: `client.FundCashBalance().list()` / `client.FundCashBalance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FundCashBalance(entopts?: Record<string, any>) {
    const self = this
    return new FundCashBalanceEntity(self, entopts)
  }


  // Entity access: `client.FundingInstruction().list()` / `client.FundingInstruction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FundingInstruction(entopts?: Record<string, any>) {
    const self = this
    return new FundingInstructionEntity(self, entopts)
  }


  // Entity access: `client.History().list()` / `client.History().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  History(entopts?: Record<string, any>) {
    const self = this
    return new HistoryEntity(self, entopts)
  }


  // Entity access: `client.InboundTransfer().list()` / `client.InboundTransfer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InboundTransfer(entopts?: Record<string, any>) {
    const self = this
    return new InboundTransferEntity(self, entopts)
  }


  // Entity access: `client.Install().list()` / `client.Install().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Install(entopts?: Record<string, any>) {
    const self = this
    return new InstallEntity(self, entopts)
  }


  // Entity access: `client.Invoice().list()` / `client.Invoice().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Invoice(entopts?: Record<string, any>) {
    const self = this
    return new InvoiceEntity(self, entopts)
  }


  // Entity access: `client.InvoicePayment().list()` / `client.InvoicePayment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InvoicePayment(entopts?: Record<string, any>) {
    const self = this
    return new InvoicePaymentEntity(self, entopts)
  }


  // Entity access: `client.InvoiceRenderingTemplate().list()` / `client.InvoiceRenderingTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InvoiceRenderingTemplate(entopts?: Record<string, any>) {
    const self = this
    return new InvoiceRenderingTemplateEntity(self, entopts)
  }


  // Entity access: `client.Invoiceitem().list()` / `client.Invoiceitem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Invoiceitem(entopts?: Record<string, any>) {
    const self = this
    return new InvoiceitemEntity(self, entopts)
  }


  // Entity access: `client.Line().list()` / `client.Line().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Line(entopts?: Record<string, any>) {
    const self = this
    return new LineEntity(self, entopts)
  }


  // Entity access: `client.LineItem().list()` / `client.LineItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LineItem(entopts?: Record<string, any>) {
    const self = this
    return new LineItemEntity(self, entopts)
  }


  // Entity access: `client.LinkedAccount().list()` / `client.LinkedAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LinkedAccount(entopts?: Record<string, any>) {
    const self = this
    return new LinkedAccountEntity(self, entopts)
  }


  // Entity access: `client.LinkedAccountOwner().list()` / `client.LinkedAccountOwner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LinkedAccountOwner(entopts?: Record<string, any>) {
    const self = this
    return new LinkedAccountOwnerEntity(self, entopts)
  }


  // Entity access: `client.Location().list()` / `client.Location().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Location(entopts?: Record<string, any>) {
    const self = this
    return new LocationEntity(self, entopts)
  }


  // Entity access: `client.LoginLink().list()` / `client.LoginLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LoginLink(entopts?: Record<string, any>) {
    const self = this
    return new LoginLinkEntity(self, entopts)
  }


  // Entity access: `client.Mandate().list()` / `client.Mandate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Mandate(entopts?: Record<string, any>) {
    const self = this
    return new MandateEntity(self, entopts)
  }


  // Entity access: `client.Meter().list()` / `client.Meter().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Meter(entopts?: Record<string, any>) {
    const self = this
    return new MeterEntity(self, entopts)
  }


  // Entity access: `client.MeterEvent().list()` / `client.MeterEvent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MeterEvent(entopts?: Record<string, any>) {
    const self = this
    return new MeterEventEntity(self, entopts)
  }


  // Entity access: `client.MeterEventAdjustment().list()` / `client.MeterEventAdjustment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MeterEventAdjustment(entopts?: Record<string, any>) {
    const self = this
    return new MeterEventAdjustmentEntity(self, entopts)
  }


  // Entity access: `client.MeterEventSummary().list()` / `client.MeterEventSummary().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MeterEventSummary(entopts?: Record<string, any>) {
    const self = this
    return new MeterEventSummaryEntity(self, entopts)
  }


  // Entity access: `client.OnboardingLink().list()` / `client.OnboardingLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OnboardingLink(entopts?: Record<string, any>) {
    const self = this
    return new OnboardingLinkEntity(self, entopts)
  }


  // Entity access: `client.Order().list()` / `client.Order().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Order(entopts?: Record<string, any>) {
    const self = this
    return new OrderEntity(self, entopts)
  }


  // Entity access: `client.OutboundPayment().list()` / `client.OutboundPayment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OutboundPayment(entopts?: Record<string, any>) {
    const self = this
    return new OutboundPaymentEntity(self, entopts)
  }


  // Entity access: `client.OutboundTransfer().list()` / `client.OutboundTransfer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OutboundTransfer(entopts?: Record<string, any>) {
    const self = this
    return new OutboundTransferEntity(self, entopts)
  }


  // Entity access: `client.PaymentAttemptRecord().list()` / `client.PaymentAttemptRecord().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentAttemptRecord(entopts?: Record<string, any>) {
    const self = this
    return new PaymentAttemptRecordEntity(self, entopts)
  }


  // Entity access: `client.PaymentEvaluation().list()` / `client.PaymentEvaluation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentEvaluation(entopts?: Record<string, any>) {
    const self = this
    return new PaymentEvaluationEntity(self, entopts)
  }


  // Entity access: `client.PaymentIntent().list()` / `client.PaymentIntent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentIntent(entopts?: Record<string, any>) {
    const self = this
    return new PaymentIntentEntity(self, entopts)
  }


  // Entity access: `client.PaymentIntentAmountDetailsLineItem().list()` / `client.PaymentIntentAmountDetailsLineItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentIntentAmountDetailsLineItem(entopts?: Record<string, any>) {
    const self = this
    return new PaymentIntentAmountDetailsLineItemEntity(self, entopts)
  }


  // Entity access: `client.PaymentLink().list()` / `client.PaymentLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentLink(entopts?: Record<string, any>) {
    const self = this
    return new PaymentLinkEntity(self, entopts)
  }


  // Entity access: `client.PaymentMethod().list()` / `client.PaymentMethod().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentMethod(entopts?: Record<string, any>) {
    const self = this
    return new PaymentMethodEntity(self, entopts)
  }


  // Entity access: `client.PaymentMethodConfiguration().list()` / `client.PaymentMethodConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentMethodConfiguration(entopts?: Record<string, any>) {
    const self = this
    return new PaymentMethodConfigurationEntity(self, entopts)
  }


  // Entity access: `client.PaymentMethodDomain().list()` / `client.PaymentMethodDomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentMethodDomain(entopts?: Record<string, any>) {
    const self = this
    return new PaymentMethodDomainEntity(self, entopts)
  }


  // Entity access: `client.PaymentRecord().list()` / `client.PaymentRecord().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentRecord(entopts?: Record<string, any>) {
    const self = this
    return new PaymentRecordEntity(self, entopts)
  }


  // Entity access: `client.Payout().list()` / `client.Payout().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Payout(entopts?: Record<string, any>) {
    const self = this
    return new PayoutEntity(self, entopts)
  }


  // Entity access: `client.Person().list()` / `client.Person().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Person(entopts?: Record<string, any>) {
    const self = this
    return new PersonEntity(self, entopts)
  }


  // Entity access: `client.PersonalizationDesign().list()` / `client.PersonalizationDesign().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersonalizationDesign(entopts?: Record<string, any>) {
    const self = this
    return new PersonalizationDesignEntity(self, entopts)
  }


  // Entity access: `client.PhysicalBundle().list()` / `client.PhysicalBundle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PhysicalBundle(entopts?: Record<string, any>) {
    const self = this
    return new PhysicalBundleEntity(self, entopts)
  }


  // Entity access: `client.Plan().list()` / `client.Plan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Plan(entopts?: Record<string, any>) {
    const self = this
    return new PlanEntity(self, entopts)
  }


  // Entity access: `client.Price().list()` / `client.Price().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Price(entopts?: Record<string, any>) {
    const self = this
    return new PriceEntity(self, entopts)
  }


  // Entity access: `client.Product().list()` / `client.Product().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Product(entopts?: Record<string, any>) {
    const self = this
    return new ProductEntity(self, entopts)
  }


  // Entity access: `client.ProductFeature().list()` / `client.ProductFeature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProductFeature(entopts?: Record<string, any>) {
    const self = this
    return new ProductFeatureEntity(self, entopts)
  }


  // Entity access: `client.PromotionCode().list()` / `client.PromotionCode().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PromotionCode(entopts?: Record<string, any>) {
    const self = this
    return new PromotionCodeEntity(self, entopts)
  }


  // Entity access: `client.Quote().list()` / `client.Quote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Quote(entopts?: Record<string, any>) {
    const self = this
    return new QuoteEntity(self, entopts)
  }


  // Entity access: `client.QuoteComputedUpfrontLineItem().list()` / `client.QuoteComputedUpfrontLineItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  QuoteComputedUpfrontLineItem(entopts?: Record<string, any>) {
    const self = this
    return new QuoteComputedUpfrontLineItemEntity(self, entopts)
  }


  // Entity access: `client.QuotePdf().list()` / `client.QuotePdf().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  QuotePdf(entopts?: Record<string, any>) {
    const self = this
    return new QuotePdfEntity(self, entopts)
  }


  // Entity access: `client.Reader().list()` / `client.Reader().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Reader(entopts?: Record<string, any>) {
    const self = this
    return new ReaderEntity(self, entopts)
  }


  // Entity access: `client.ReceivedCredit().list()` / `client.ReceivedCredit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReceivedCredit(entopts?: Record<string, any>) {
    const self = this
    return new ReceivedCreditEntity(self, entopts)
  }


  // Entity access: `client.ReceivedDebit().list()` / `client.ReceivedDebit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReceivedDebit(entopts?: Record<string, any>) {
    const self = this
    return new ReceivedDebitEntity(self, entopts)
  }


  // Entity access: `client.Refund().list()` / `client.Refund().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Refund(entopts?: Record<string, any>) {
    const self = this
    return new RefundEntity(self, entopts)
  }


  // Entity access: `client.Registration().list()` / `client.Registration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Registration(entopts?: Record<string, any>) {
    const self = this
    return new RegistrationEntity(self, entopts)
  }


  // Entity access: `client.ReportRun().list()` / `client.ReportRun().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReportRun(entopts?: Record<string, any>) {
    const self = this
    return new ReportRunEntity(self, entopts)
  }


  // Entity access: `client.ReportType().list()` / `client.ReportType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReportType(entopts?: Record<string, any>) {
    const self = this
    return new ReportTypeEntity(self, entopts)
  }


  // Entity access: `client.Request().list()` / `client.Request().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Request(entopts?: Record<string, any>) {
    const self = this
    return new RequestEntity(self, entopts)
  }


  // Entity access: `client.Reversal().list()` / `client.Reversal().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Reversal(entopts?: Record<string, any>) {
    const self = this
    return new ReversalEntity(self, entopts)
  }


  // Entity access: `client.Review().list()` / `client.Review().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Review(entopts?: Record<string, any>) {
    const self = this
    return new ReviewEntity(self, entopts)
  }


  // Entity access: `client.ScheduledQueryRun().list()` / `client.ScheduledQueryRun().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ScheduledQueryRun(entopts?: Record<string, any>) {
    const self = this
    return new ScheduledQueryRunEntity(self, entopts)
  }


  // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Search(entopts?: Record<string, any>) {
    const self = this
    return new SearchEntity(self, entopts)
  }


  // Entity access: `client.Secret().list()` / `client.Secret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Secret(entopts?: Record<string, any>) {
    const self = this
    return new SecretEntity(self, entopts)
  }


  // Entity access: `client.Session().list()` / `client.Session().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Session(entopts?: Record<string, any>) {
    const self = this
    return new SessionEntity(self, entopts)
  }


  // Entity access: `client.Setting().list()` / `client.Setting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Setting(entopts?: Record<string, any>) {
    const self = this
    return new SettingEntity(self, entopts)
  }


  // Entity access: `client.Settlement().list()` / `client.Settlement().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Settlement(entopts?: Record<string, any>) {
    const self = this
    return new SettlementEntity(self, entopts)
  }


  // Entity access: `client.SetupAttempt().list()` / `client.SetupAttempt().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SetupAttempt(entopts?: Record<string, any>) {
    const self = this
    return new SetupAttemptEntity(self, entopts)
  }


  // Entity access: `client.SetupIntent().list()` / `client.SetupIntent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SetupIntent(entopts?: Record<string, any>) {
    const self = this
    return new SetupIntentEntity(self, entopts)
  }


  // Entity access: `client.ShippingRate().list()` / `client.ShippingRate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ShippingRate(entopts?: Record<string, any>) {
    const self = this
    return new ShippingRateEntity(self, entopts)
  }


  // Entity access: `client.SigmaApiQuery().list()` / `client.SigmaApiQuery().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SigmaApiQuery(entopts?: Record<string, any>) {
    const self = this
    return new SigmaApiQueryEntity(self, entopts)
  }


  // Entity access: `client.Source().list()` / `client.Source().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Source(entopts?: Record<string, any>) {
    const self = this
    return new SourceEntity(self, entopts)
  }


  // Entity access: `client.SourceMandateNotification().list()` / `client.SourceMandateNotification().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SourceMandateNotification(entopts?: Record<string, any>) {
    const self = this
    return new SourceMandateNotificationEntity(self, entopts)
  }


  // Entity access: `client.SourceTransaction().list()` / `client.SourceTransaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SourceTransaction(entopts?: Record<string, any>) {
    const self = this
    return new SourceTransactionEntity(self, entopts)
  }


  // Entity access: `client.Subscription().list()` / `client.Subscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Subscription(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionItem().list()` / `client.SubscriptionItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionItem(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionItemEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionSchedule().list()` / `client.SubscriptionSchedule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionSchedule(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionScheduleEntity(self, entopts)
  }


  // Entity access: `client.Supplier().list()` / `client.Supplier().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Supplier(entopts?: Record<string, any>) {
    const self = this
    return new SupplierEntity(self, entopts)
  }


  // Entity access: `client.TaxCode().list()` / `client.TaxCode().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TaxCode(entopts?: Record<string, any>) {
    const self = this
    return new TaxCodeEntity(self, entopts)
  }


  // Entity access: `client.TaxId().list()` / `client.TaxId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TaxId(entopts?: Record<string, any>) {
    const self = this
    return new TaxIdEntity(self, entopts)
  }


  // Entity access: `client.TaxRate().list()` / `client.TaxRate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TaxRate(entopts?: Record<string, any>) {
    const self = this
    return new TaxRateEntity(self, entopts)
  }


  // Entity access: `client.TestClock().list()` / `client.TestClock().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TestClock(entopts?: Record<string, any>) {
    const self = this
    return new TestClockEntity(self, entopts)
  }


  // Entity access: `client.Token().list()` / `client.Token().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Token(entopts?: Record<string, any>) {
    const self = this
    return new TokenEntity(self, entopts)
  }


  // Entity access: `client.Topup().list()` / `client.Topup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Topup(entopts?: Record<string, any>) {
    const self = this
    return new TopupEntity(self, entopts)
  }


  // Entity access: `client.Transaction().list()` / `client.Transaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Transaction(entopts?: Record<string, any>) {
    const self = this
    return new TransactionEntity(self, entopts)
  }


  // Entity access: `client.TransactionEntry().list()` / `client.TransactionEntry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TransactionEntry(entopts?: Record<string, any>) {
    const self = this
    return new TransactionEntryEntity(self, entopts)
  }


  // Entity access: `client.Transfer().list()` / `client.Transfer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Transfer(entopts?: Record<string, any>) {
    const self = this
    return new TransferEntity(self, entopts)
  }


  // Entity access: `client.TrialOffer().list()` / `client.TrialOffer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TrialOffer(entopts?: Record<string, any>) {
    const self = this
    return new TrialOfferEntity(self, entopts)
  }


  // Entity access: `client.ValueList().list()` / `client.ValueList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ValueList(entopts?: Record<string, any>) {
    const self = this
    return new ValueListEntity(self, entopts)
  }


  // Entity access: `client.ValueListItem().list()` / `client.ValueListItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ValueListItem(entopts?: Record<string, any>) {
    const self = this
    return new ValueListItemEntity(self, entopts)
  }


  // Entity access: `client.VerificationReport().list()` / `client.VerificationReport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VerificationReport(entopts?: Record<string, any>) {
    const self = this
    return new VerificationReportEntity(self, entopts)
  }


  // Entity access: `client.VerificationSession().list()` / `client.VerificationSession().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VerificationSession(entopts?: Record<string, any>) {
    const self = this
    return new VerificationSessionEntity(self, entopts)
  }


  // Entity access: `client.WebhookEndpoint().list()` / `client.WebhookEndpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WebhookEndpoint(entopts?: Record<string, any>) {
    const self = this
    return new WebhookEndpointEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new StripeSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return StripeSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Stripe' }
  }

  toString() {
    return 'Stripe ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = StripeSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  StripeEntityBase,

  StripeSDK,
  SDK,
}


