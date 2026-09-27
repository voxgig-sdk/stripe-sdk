// Stripe Js SDK

const { AccountEntity } = require('./entity/AccountEntity')
const { AccountLinkEntity } = require('./entity/AccountLinkEntity')
const { AccountOwnerEntity } = require('./entity/AccountOwnerEntity')
const { AccountSessionEntity } = require('./entity/AccountSessionEntity')
const { ActiveEntitlementEntity } = require('./entity/ActiveEntitlementEntity')
const { AlertEntity } = require('./entity/AlertEntity')
const { ApplePayDomainEntity } = require('./entity/ApplePayDomainEntity')
const { ApplicationFeeEntity } = require('./entity/ApplicationFeeEntity')
const { AssociationEntity } = require('./entity/AssociationEntity')
const { AuthenticationEntity } = require('./entity/AuthenticationEntity')
const { AuthorizationEntity } = require('./entity/AuthorizationEntity')
const { BalanceEntity } = require('./entity/BalanceEntity')
const { BalanceSettingEntity } = require('./entity/BalanceSettingEntity')
const { BalanceTransactionEntity } = require('./entity/BalanceTransactionEntity')
const { BankAccountEntity } = require('./entity/BankAccountEntity')
const { CalculationEntity } = require('./entity/CalculationEntity')
const { CapabilityEntity } = require('./entity/CapabilityEntity')
const { CardEntity } = require('./entity/CardEntity')
const { CardholderEntity } = require('./entity/CardholderEntity')
const { CashBalanceEntity } = require('./entity/CashBalanceEntity')
const { CashBalanceTransactionEntity } = require('./entity/CashBalanceTransactionEntity')
const { ChargeEntity } = require('./entity/ChargeEntity')
const { ConfigurationEntity } = require('./entity/ConfigurationEntity')
const { ConfirmationTokenEntity } = require('./entity/ConfirmationTokenEntity')
const { ConnectionTokenEntity } = require('./entity/ConnectionTokenEntity')
const { CountrySpecEntity } = require('./entity/CountrySpecEntity')
const { CouponEntity } = require('./entity/CouponEntity')
const { CreditBalanceSummaryEntity } = require('./entity/CreditBalanceSummaryEntity')
const { CreditBalanceTransactionEntity } = require('./entity/CreditBalanceTransactionEntity')
const { CreditGrantEntity } = require('./entity/CreditGrantEntity')
const { CreditNoteEntity } = require('./entity/CreditNoteEntity')
const { CreditNoteLineEntity } = require('./entity/CreditNoteLineEntity')
const { CreditReversalEntity } = require('./entity/CreditReversalEntity')
const { CustomerEntity } = require('./entity/CustomerEntity')
const { CustomerBalanceTransactionEntity } = require('./entity/CustomerBalanceTransactionEntity')
const { CustomerSessionEntity } = require('./entity/CustomerSessionEntity')
const { DebitReversalEntity } = require('./entity/DebitReversalEntity')
const { DeletedAccountEntity } = require('./entity/DeletedAccountEntity')
const { DeletedApplePayDomainEntity } = require('./entity/DeletedApplePayDomainEntity')
const { DeletedCouponEntity } = require('./entity/DeletedCouponEntity')
const { DeletedExternalAccountEntity } = require('./entity/DeletedExternalAccountEntity')
const { DeletedInvoiceitemEntity } = require('./entity/DeletedInvoiceitemEntity')
const { DeletedPersonEntity } = require('./entity/DeletedPersonEntity')
const { DeletedPlanEntity } = require('./entity/DeletedPlanEntity')
const { DeletedProductFeatureEntity } = require('./entity/DeletedProductFeatureEntity')
const { DeletedSubscriptionItemEntity } = require('./entity/DeletedSubscriptionItemEntity')
const { DeletedWebhookEndpointEntity } = require('./entity/DeletedWebhookEndpointEntity')
const { DiscountEntity } = require('./entity/DiscountEntity')
const { DisputeEntity } = require('./entity/DisputeEntity')
const { DomainEntity } = require('./entity/DomainEntity')
const { EarlyFraudWarningEntity } = require('./entity/EarlyFraudWarningEntity')
const { EphemeralKeyEntity } = require('./entity/EphemeralKeyEntity')
const { EventEntity } = require('./entity/EventEntity')
const { ExchangeRateEntity } = require('./entity/ExchangeRateEntity')
const { ExternalAccountEntity } = require('./entity/ExternalAccountEntity')
const { FeatureEntity } = require('./entity/FeatureEntity')
const { FeedbackOptionEntity } = require('./entity/FeedbackOptionEntity')
const { FileEntity } = require('./entity/FileEntity')
const { FileLinkEntity } = require('./entity/FileLinkEntity')
const { FinancialAccountEntity } = require('./entity/FinancialAccountEntity')
const { FinancialAccountFeatureEntity } = require('./entity/FinancialAccountFeatureEntity')
const { FundCashBalanceEntity } = require('./entity/FundCashBalanceEntity')
const { FundingInstructionEntity } = require('./entity/FundingInstructionEntity')
const { HistoryEntity } = require('./entity/HistoryEntity')
const { InboundTransferEntity } = require('./entity/InboundTransferEntity')
const { InstallEntity } = require('./entity/InstallEntity')
const { InvoiceEntity } = require('./entity/InvoiceEntity')
const { InvoicePaymentEntity } = require('./entity/InvoicePaymentEntity')
const { InvoiceRenderingTemplateEntity } = require('./entity/InvoiceRenderingTemplateEntity')
const { InvoiceitemEntity } = require('./entity/InvoiceitemEntity')
const { LineEntity } = require('./entity/LineEntity')
const { LineItemEntity } = require('./entity/LineItemEntity')
const { LinkedAccountEntity } = require('./entity/LinkedAccountEntity')
const { LinkedAccountOwnerEntity } = require('./entity/LinkedAccountOwnerEntity')
const { LocationEntity } = require('./entity/LocationEntity')
const { LoginLinkEntity } = require('./entity/LoginLinkEntity')
const { MandateEntity } = require('./entity/MandateEntity')
const { MeterEntity } = require('./entity/MeterEntity')
const { MeterEventEntity } = require('./entity/MeterEventEntity')
const { MeterEventAdjustmentEntity } = require('./entity/MeterEventAdjustmentEntity')
const { MeterEventSummaryEntity } = require('./entity/MeterEventSummaryEntity')
const { OnboardingLinkEntity } = require('./entity/OnboardingLinkEntity')
const { OrderEntity } = require('./entity/OrderEntity')
const { OutboundPaymentEntity } = require('./entity/OutboundPaymentEntity')
const { OutboundTransferEntity } = require('./entity/OutboundTransferEntity')
const { PaymentAttemptRecordEntity } = require('./entity/PaymentAttemptRecordEntity')
const { PaymentEvaluationEntity } = require('./entity/PaymentEvaluationEntity')
const { PaymentIntentEntity } = require('./entity/PaymentIntentEntity')
const { PaymentIntentAmountDetailsLineItemEntity } = require('./entity/PaymentIntentAmountDetailsLineItemEntity')
const { PaymentLinkEntity } = require('./entity/PaymentLinkEntity')
const { PaymentMethodEntity } = require('./entity/PaymentMethodEntity')
const { PaymentMethodConfigurationEntity } = require('./entity/PaymentMethodConfigurationEntity')
const { PaymentMethodDomainEntity } = require('./entity/PaymentMethodDomainEntity')
const { PaymentRecordEntity } = require('./entity/PaymentRecordEntity')
const { PayoutEntity } = require('./entity/PayoutEntity')
const { PersonEntity } = require('./entity/PersonEntity')
const { PersonalizationDesignEntity } = require('./entity/PersonalizationDesignEntity')
const { PhysicalBundleEntity } = require('./entity/PhysicalBundleEntity')
const { PlanEntity } = require('./entity/PlanEntity')
const { PriceEntity } = require('./entity/PriceEntity')
const { ProductEntity } = require('./entity/ProductEntity')
const { ProductFeatureEntity } = require('./entity/ProductFeatureEntity')
const { PromotionCodeEntity } = require('./entity/PromotionCodeEntity')
const { QuoteEntity } = require('./entity/QuoteEntity')
const { QuoteComputedUpfrontLineItemEntity } = require('./entity/QuoteComputedUpfrontLineItemEntity')
const { QuotePdfEntity } = require('./entity/QuotePdfEntity')
const { ReaderEntity } = require('./entity/ReaderEntity')
const { ReceivedCreditEntity } = require('./entity/ReceivedCreditEntity')
const { ReceivedDebitEntity } = require('./entity/ReceivedDebitEntity')
const { RefundEntity } = require('./entity/RefundEntity')
const { RegistrationEntity } = require('./entity/RegistrationEntity')
const { ReportRunEntity } = require('./entity/ReportRunEntity')
const { ReportTypeEntity } = require('./entity/ReportTypeEntity')
const { RequestEntity } = require('./entity/RequestEntity')
const { ReversalEntity } = require('./entity/ReversalEntity')
const { ReviewEntity } = require('./entity/ReviewEntity')
const { ScheduledQueryRunEntity } = require('./entity/ScheduledQueryRunEntity')
const { SearchEntity } = require('./entity/SearchEntity')
const { SecretEntity } = require('./entity/SecretEntity')
const { SessionEntity } = require('./entity/SessionEntity')
const { SettingEntity } = require('./entity/SettingEntity')
const { SettlementEntity } = require('./entity/SettlementEntity')
const { SetupAttemptEntity } = require('./entity/SetupAttemptEntity')
const { SetupIntentEntity } = require('./entity/SetupIntentEntity')
const { ShippingRateEntity } = require('./entity/ShippingRateEntity')
const { SigmaApiQueryEntity } = require('./entity/SigmaApiQueryEntity')
const { SourceEntity } = require('./entity/SourceEntity')
const { SourceMandateNotificationEntity } = require('./entity/SourceMandateNotificationEntity')
const { SourceTransactionEntity } = require('./entity/SourceTransactionEntity')
const { SubscriptionEntity } = require('./entity/SubscriptionEntity')
const { SubscriptionItemEntity } = require('./entity/SubscriptionItemEntity')
const { SubscriptionScheduleEntity } = require('./entity/SubscriptionScheduleEntity')
const { SupplierEntity } = require('./entity/SupplierEntity')
const { TaxCodeEntity } = require('./entity/TaxCodeEntity')
const { TaxIdEntity } = require('./entity/TaxIdEntity')
const { TaxRateEntity } = require('./entity/TaxRateEntity')
const { TestClockEntity } = require('./entity/TestClockEntity')
const { TokenEntity } = require('./entity/TokenEntity')
const { TopupEntity } = require('./entity/TopupEntity')
const { TransactionEntity } = require('./entity/TransactionEntity')
const { TransactionEntryEntity } = require('./entity/TransactionEntryEntity')
const { TransferEntity } = require('./entity/TransferEntity')
const { TrialOfferEntity } = require('./entity/TrialOfferEntity')
const { ValueListEntity } = require('./entity/ValueListEntity')
const { ValueListItemEntity } = require('./entity/ValueListItemEntity')
const { VerificationReportEntity } = require('./entity/VerificationReportEntity')
const { VerificationSessionEntity } = require('./entity/VerificationSessionEntity')
const { WebhookEndpointEntity } = require('./entity/WebhookEndpointEntity')


const { inspect } = require('node:util')

const { config } = require('./Config')
const { Utility } = require('./utility/Utility')
const { StripeEntityBase } = require('./StripeEntityBase')


const { BaseFeature } = require('./feature/base/BaseFeature')



const stdutil = new Utility()


class StripeSDK {
  _mode = 'live'
  _options
  _utility = new Utility()
  _features
  _rootctx
  

  constructor(options) {

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
          extend.some((f) => fname === f.name)) {
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

  


  async prepare(fetchargs) {
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

    let ctx = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec = {
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

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs) {
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
  async _rawRequest(fetchargs) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx = makeContext({
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

      let json = undefined
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
    catch (err) {
      return { ok: false, err }
    }
  }



  // Raw GraphQL access: the pressure valve that makes the generated
  // surface's deliberate omissions (per-call selection sets, typed filter
  // builders, batching, subscriptions) livable — the whole schema stays
  // reachable.
  //
  // Thin wrapper over the same prepare/fetch path `direct` uses, with the
  // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
  // HTTP 200 as a top-level `errors` array, so status alone would report a
  // failed query as ok.
  //
  // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
  // ratelimit or paging features apply.
  async graphql(query, variables, ctrl) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('StripeSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res = await this._rawRequest({
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
      const err = new Error('StripeSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Account().list()` / `client.Account().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Account(entopts) {
    const self = this
    return new AccountEntity(self, entopts)
  }


  // Entity access: `client.AccountLink().list()` / `client.AccountLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountLink(entopts) {
    const self = this
    return new AccountLinkEntity(self, entopts)
  }


  // Entity access: `client.AccountOwner().list()` / `client.AccountOwner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountOwner(entopts) {
    const self = this
    return new AccountOwnerEntity(self, entopts)
  }


  // Entity access: `client.AccountSession().list()` / `client.AccountSession().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountSession(entopts) {
    const self = this
    return new AccountSessionEntity(self, entopts)
  }


  // Entity access: `client.ActiveEntitlement().list()` / `client.ActiveEntitlement().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActiveEntitlement(entopts) {
    const self = this
    return new ActiveEntitlementEntity(self, entopts)
  }


  // Entity access: `client.Alert().list()` / `client.Alert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Alert(entopts) {
    const self = this
    return new AlertEntity(self, entopts)
  }


  // Entity access: `client.ApplePayDomain().list()` / `client.ApplePayDomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApplePayDomain(entopts) {
    const self = this
    return new ApplePayDomainEntity(self, entopts)
  }


  // Entity access: `client.ApplicationFee().list()` / `client.ApplicationFee().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApplicationFee(entopts) {
    const self = this
    return new ApplicationFeeEntity(self, entopts)
  }


  // Entity access: `client.Association().list()` / `client.Association().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Association(entopts) {
    const self = this
    return new AssociationEntity(self, entopts)
  }


  // Entity access: `client.Authentication().list()` / `client.Authentication().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Authentication(entopts) {
    const self = this
    return new AuthenticationEntity(self, entopts)
  }


  // Entity access: `client.Authorization().list()` / `client.Authorization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Authorization(entopts) {
    const self = this
    return new AuthorizationEntity(self, entopts)
  }


  // Entity access: `client.Balance().list()` / `client.Balance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Balance(entopts) {
    const self = this
    return new BalanceEntity(self, entopts)
  }


  // Entity access: `client.BalanceSetting().list()` / `client.BalanceSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BalanceSetting(entopts) {
    const self = this
    return new BalanceSettingEntity(self, entopts)
  }


  // Entity access: `client.BalanceTransaction().list()` / `client.BalanceTransaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BalanceTransaction(entopts) {
    const self = this
    return new BalanceTransactionEntity(self, entopts)
  }


  // Entity access: `client.BankAccount().list()` / `client.BankAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BankAccount(entopts) {
    const self = this
    return new BankAccountEntity(self, entopts)
  }


  // Entity access: `client.Calculation().list()` / `client.Calculation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Calculation(entopts) {
    const self = this
    return new CalculationEntity(self, entopts)
  }


  // Entity access: `client.Capability().list()` / `client.Capability().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Capability(entopts) {
    const self = this
    return new CapabilityEntity(self, entopts)
  }


  // Entity access: `client.Card().list()` / `client.Card().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Card(entopts) {
    const self = this
    return new CardEntity(self, entopts)
  }


  // Entity access: `client.Cardholder().list()` / `client.Cardholder().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Cardholder(entopts) {
    const self = this
    return new CardholderEntity(self, entopts)
  }


  // Entity access: `client.CashBalance().list()` / `client.CashBalance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CashBalance(entopts) {
    const self = this
    return new CashBalanceEntity(self, entopts)
  }


  // Entity access: `client.CashBalanceTransaction().list()` / `client.CashBalanceTransaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CashBalanceTransaction(entopts) {
    const self = this
    return new CashBalanceTransactionEntity(self, entopts)
  }


  // Entity access: `client.Charge().list()` / `client.Charge().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Charge(entopts) {
    const self = this
    return new ChargeEntity(self, entopts)
  }


  // Entity access: `client.Configuration().list()` / `client.Configuration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Configuration(entopts) {
    const self = this
    return new ConfigurationEntity(self, entopts)
  }


  // Entity access: `client.ConfirmationToken().list()` / `client.ConfirmationToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConfirmationToken(entopts) {
    const self = this
    return new ConfirmationTokenEntity(self, entopts)
  }


  // Entity access: `client.ConnectionToken().list()` / `client.ConnectionToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConnectionToken(entopts) {
    const self = this
    return new ConnectionTokenEntity(self, entopts)
  }


  // Entity access: `client.CountrySpec().list()` / `client.CountrySpec().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CountrySpec(entopts) {
    const self = this
    return new CountrySpecEntity(self, entopts)
  }


  // Entity access: `client.Coupon().list()` / `client.Coupon().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Coupon(entopts) {
    const self = this
    return new CouponEntity(self, entopts)
  }


  // Entity access: `client.CreditBalanceSummary().list()` / `client.CreditBalanceSummary().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditBalanceSummary(entopts) {
    const self = this
    return new CreditBalanceSummaryEntity(self, entopts)
  }


  // Entity access: `client.CreditBalanceTransaction().list()` / `client.CreditBalanceTransaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditBalanceTransaction(entopts) {
    const self = this
    return new CreditBalanceTransactionEntity(self, entopts)
  }


  // Entity access: `client.CreditGrant().list()` / `client.CreditGrant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditGrant(entopts) {
    const self = this
    return new CreditGrantEntity(self, entopts)
  }


  // Entity access: `client.CreditNote().list()` / `client.CreditNote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditNote(entopts) {
    const self = this
    return new CreditNoteEntity(self, entopts)
  }


  // Entity access: `client.CreditNoteLine().list()` / `client.CreditNoteLine().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditNoteLine(entopts) {
    const self = this
    return new CreditNoteLineEntity(self, entopts)
  }


  // Entity access: `client.CreditReversal().list()` / `client.CreditReversal().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditReversal(entopts) {
    const self = this
    return new CreditReversalEntity(self, entopts)
  }


  // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Customer(entopts) {
    const self = this
    return new CustomerEntity(self, entopts)
  }


  // Entity access: `client.CustomerBalanceTransaction().list()` / `client.CustomerBalanceTransaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomerBalanceTransaction(entopts) {
    const self = this
    return new CustomerBalanceTransactionEntity(self, entopts)
  }


  // Entity access: `client.CustomerSession().list()` / `client.CustomerSession().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomerSession(entopts) {
    const self = this
    return new CustomerSessionEntity(self, entopts)
  }


  // Entity access: `client.DebitReversal().list()` / `client.DebitReversal().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DebitReversal(entopts) {
    const self = this
    return new DebitReversalEntity(self, entopts)
  }


  // Entity access: `client.DeletedAccount().list()` / `client.DeletedAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedAccount(entopts) {
    const self = this
    return new DeletedAccountEntity(self, entopts)
  }


  // Entity access: `client.DeletedApplePayDomain().list()` / `client.DeletedApplePayDomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedApplePayDomain(entopts) {
    const self = this
    return new DeletedApplePayDomainEntity(self, entopts)
  }


  // Entity access: `client.DeletedCoupon().list()` / `client.DeletedCoupon().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedCoupon(entopts) {
    const self = this
    return new DeletedCouponEntity(self, entopts)
  }


  // Entity access: `client.DeletedExternalAccount().list()` / `client.DeletedExternalAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedExternalAccount(entopts) {
    const self = this
    return new DeletedExternalAccountEntity(self, entopts)
  }


  // Entity access: `client.DeletedInvoiceitem().list()` / `client.DeletedInvoiceitem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedInvoiceitem(entopts) {
    const self = this
    return new DeletedInvoiceitemEntity(self, entopts)
  }


  // Entity access: `client.DeletedPerson().list()` / `client.DeletedPerson().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedPerson(entopts) {
    const self = this
    return new DeletedPersonEntity(self, entopts)
  }


  // Entity access: `client.DeletedPlan().list()` / `client.DeletedPlan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedPlan(entopts) {
    const self = this
    return new DeletedPlanEntity(self, entopts)
  }


  // Entity access: `client.DeletedProductFeature().list()` / `client.DeletedProductFeature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedProductFeature(entopts) {
    const self = this
    return new DeletedProductFeatureEntity(self, entopts)
  }


  // Entity access: `client.DeletedSubscriptionItem().list()` / `client.DeletedSubscriptionItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedSubscriptionItem(entopts) {
    const self = this
    return new DeletedSubscriptionItemEntity(self, entopts)
  }


  // Entity access: `client.DeletedWebhookEndpoint().list()` / `client.DeletedWebhookEndpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeletedWebhookEndpoint(entopts) {
    const self = this
    return new DeletedWebhookEndpointEntity(self, entopts)
  }


  // Entity access: `client.Discount().list()` / `client.Discount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Discount(entopts) {
    const self = this
    return new DiscountEntity(self, entopts)
  }


  // Entity access: `client.Dispute().list()` / `client.Dispute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Dispute(entopts) {
    const self = this
    return new DisputeEntity(self, entopts)
  }


  // Entity access: `client.Domain().list()` / `client.Domain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Domain(entopts) {
    const self = this
    return new DomainEntity(self, entopts)
  }


  // Entity access: `client.EarlyFraudWarning().list()` / `client.EarlyFraudWarning().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EarlyFraudWarning(entopts) {
    const self = this
    return new EarlyFraudWarningEntity(self, entopts)
  }


  // Entity access: `client.EphemeralKey().list()` / `client.EphemeralKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EphemeralKey(entopts) {
    const self = this
    return new EphemeralKeyEntity(self, entopts)
  }


  // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Event(entopts) {
    const self = this
    return new EventEntity(self, entopts)
  }


  // Entity access: `client.ExchangeRate().list()` / `client.ExchangeRate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ExchangeRate(entopts) {
    const self = this
    return new ExchangeRateEntity(self, entopts)
  }


  // Entity access: `client.ExternalAccount().list()` / `client.ExternalAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ExternalAccount(entopts) {
    const self = this
    return new ExternalAccountEntity(self, entopts)
  }


  // Entity access: `client.Feature().list()` / `client.Feature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Feature(entopts) {
    const self = this
    return new FeatureEntity(self, entopts)
  }


  // Entity access: `client.FeedbackOption().list()` / `client.FeedbackOption().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FeedbackOption(entopts) {
    const self = this
    return new FeedbackOptionEntity(self, entopts)
  }


  // Entity access: `client.File().list()` / `client.File().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  File(entopts) {
    const self = this
    return new FileEntity(self, entopts)
  }


  // Entity access: `client.FileLink().list()` / `client.FileLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FileLink(entopts) {
    const self = this
    return new FileLinkEntity(self, entopts)
  }


  // Entity access: `client.FinancialAccount().list()` / `client.FinancialAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FinancialAccount(entopts) {
    const self = this
    return new FinancialAccountEntity(self, entopts)
  }


  // Entity access: `client.FinancialAccountFeature().list()` / `client.FinancialAccountFeature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FinancialAccountFeature(entopts) {
    const self = this
    return new FinancialAccountFeatureEntity(self, entopts)
  }


  // Entity access: `client.FundCashBalance().list()` / `client.FundCashBalance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FundCashBalance(entopts) {
    const self = this
    return new FundCashBalanceEntity(self, entopts)
  }


  // Entity access: `client.FundingInstruction().list()` / `client.FundingInstruction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FundingInstruction(entopts) {
    const self = this
    return new FundingInstructionEntity(self, entopts)
  }


  // Entity access: `client.History().list()` / `client.History().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  History(entopts) {
    const self = this
    return new HistoryEntity(self, entopts)
  }


  // Entity access: `client.InboundTransfer().list()` / `client.InboundTransfer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InboundTransfer(entopts) {
    const self = this
    return new InboundTransferEntity(self, entopts)
  }


  // Entity access: `client.Install().list()` / `client.Install().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Install(entopts) {
    const self = this
    return new InstallEntity(self, entopts)
  }


  // Entity access: `client.Invoice().list()` / `client.Invoice().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Invoice(entopts) {
    const self = this
    return new InvoiceEntity(self, entopts)
  }


  // Entity access: `client.InvoicePayment().list()` / `client.InvoicePayment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InvoicePayment(entopts) {
    const self = this
    return new InvoicePaymentEntity(self, entopts)
  }


  // Entity access: `client.InvoiceRenderingTemplate().list()` / `client.InvoiceRenderingTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InvoiceRenderingTemplate(entopts) {
    const self = this
    return new InvoiceRenderingTemplateEntity(self, entopts)
  }


  // Entity access: `client.Invoiceitem().list()` / `client.Invoiceitem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Invoiceitem(entopts) {
    const self = this
    return new InvoiceitemEntity(self, entopts)
  }


  // Entity access: `client.Line().list()` / `client.Line().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Line(entopts) {
    const self = this
    return new LineEntity(self, entopts)
  }


  // Entity access: `client.LineItem().list()` / `client.LineItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LineItem(entopts) {
    const self = this
    return new LineItemEntity(self, entopts)
  }


  // Entity access: `client.LinkedAccount().list()` / `client.LinkedAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LinkedAccount(entopts) {
    const self = this
    return new LinkedAccountEntity(self, entopts)
  }


  // Entity access: `client.LinkedAccountOwner().list()` / `client.LinkedAccountOwner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LinkedAccountOwner(entopts) {
    const self = this
    return new LinkedAccountOwnerEntity(self, entopts)
  }


  // Entity access: `client.Location().list()` / `client.Location().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Location(entopts) {
    const self = this
    return new LocationEntity(self, entopts)
  }


  // Entity access: `client.LoginLink().list()` / `client.LoginLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LoginLink(entopts) {
    const self = this
    return new LoginLinkEntity(self, entopts)
  }


  // Entity access: `client.Mandate().list()` / `client.Mandate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Mandate(entopts) {
    const self = this
    return new MandateEntity(self, entopts)
  }


  // Entity access: `client.Meter().list()` / `client.Meter().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Meter(entopts) {
    const self = this
    return new MeterEntity(self, entopts)
  }


  // Entity access: `client.MeterEvent().list()` / `client.MeterEvent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MeterEvent(entopts) {
    const self = this
    return new MeterEventEntity(self, entopts)
  }


  // Entity access: `client.MeterEventAdjustment().list()` / `client.MeterEventAdjustment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MeterEventAdjustment(entopts) {
    const self = this
    return new MeterEventAdjustmentEntity(self, entopts)
  }


  // Entity access: `client.MeterEventSummary().list()` / `client.MeterEventSummary().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MeterEventSummary(entopts) {
    const self = this
    return new MeterEventSummaryEntity(self, entopts)
  }


  // Entity access: `client.OnboardingLink().list()` / `client.OnboardingLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OnboardingLink(entopts) {
    const self = this
    return new OnboardingLinkEntity(self, entopts)
  }


  // Entity access: `client.Order().list()` / `client.Order().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Order(entopts) {
    const self = this
    return new OrderEntity(self, entopts)
  }


  // Entity access: `client.OutboundPayment().list()` / `client.OutboundPayment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OutboundPayment(entopts) {
    const self = this
    return new OutboundPaymentEntity(self, entopts)
  }


  // Entity access: `client.OutboundTransfer().list()` / `client.OutboundTransfer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OutboundTransfer(entopts) {
    const self = this
    return new OutboundTransferEntity(self, entopts)
  }


  // Entity access: `client.PaymentAttemptRecord().list()` / `client.PaymentAttemptRecord().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentAttemptRecord(entopts) {
    const self = this
    return new PaymentAttemptRecordEntity(self, entopts)
  }


  // Entity access: `client.PaymentEvaluation().list()` / `client.PaymentEvaluation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentEvaluation(entopts) {
    const self = this
    return new PaymentEvaluationEntity(self, entopts)
  }


  // Entity access: `client.PaymentIntent().list()` / `client.PaymentIntent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentIntent(entopts) {
    const self = this
    return new PaymentIntentEntity(self, entopts)
  }


  // Entity access: `client.PaymentIntentAmountDetailsLineItem().list()` / `client.PaymentIntentAmountDetailsLineItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentIntentAmountDetailsLineItem(entopts) {
    const self = this
    return new PaymentIntentAmountDetailsLineItemEntity(self, entopts)
  }


  // Entity access: `client.PaymentLink().list()` / `client.PaymentLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentLink(entopts) {
    const self = this
    return new PaymentLinkEntity(self, entopts)
  }


  // Entity access: `client.PaymentMethod().list()` / `client.PaymentMethod().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentMethod(entopts) {
    const self = this
    return new PaymentMethodEntity(self, entopts)
  }


  // Entity access: `client.PaymentMethodConfiguration().list()` / `client.PaymentMethodConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentMethodConfiguration(entopts) {
    const self = this
    return new PaymentMethodConfigurationEntity(self, entopts)
  }


  // Entity access: `client.PaymentMethodDomain().list()` / `client.PaymentMethodDomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentMethodDomain(entopts) {
    const self = this
    return new PaymentMethodDomainEntity(self, entopts)
  }


  // Entity access: `client.PaymentRecord().list()` / `client.PaymentRecord().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentRecord(entopts) {
    const self = this
    return new PaymentRecordEntity(self, entopts)
  }


  // Entity access: `client.Payout().list()` / `client.Payout().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Payout(entopts) {
    const self = this
    return new PayoutEntity(self, entopts)
  }


  // Entity access: `client.Person().list()` / `client.Person().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Person(entopts) {
    const self = this
    return new PersonEntity(self, entopts)
  }


  // Entity access: `client.PersonalizationDesign().list()` / `client.PersonalizationDesign().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersonalizationDesign(entopts) {
    const self = this
    return new PersonalizationDesignEntity(self, entopts)
  }


  // Entity access: `client.PhysicalBundle().list()` / `client.PhysicalBundle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PhysicalBundle(entopts) {
    const self = this
    return new PhysicalBundleEntity(self, entopts)
  }


  // Entity access: `client.Plan().list()` / `client.Plan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Plan(entopts) {
    const self = this
    return new PlanEntity(self, entopts)
  }


  // Entity access: `client.Price().list()` / `client.Price().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Price(entopts) {
    const self = this
    return new PriceEntity(self, entopts)
  }


  // Entity access: `client.Product().list()` / `client.Product().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Product(entopts) {
    const self = this
    return new ProductEntity(self, entopts)
  }


  // Entity access: `client.ProductFeature().list()` / `client.ProductFeature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProductFeature(entopts) {
    const self = this
    return new ProductFeatureEntity(self, entopts)
  }


  // Entity access: `client.PromotionCode().list()` / `client.PromotionCode().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PromotionCode(entopts) {
    const self = this
    return new PromotionCodeEntity(self, entopts)
  }


  // Entity access: `client.Quote().list()` / `client.Quote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Quote(entopts) {
    const self = this
    return new QuoteEntity(self, entopts)
  }


  // Entity access: `client.QuoteComputedUpfrontLineItem().list()` / `client.QuoteComputedUpfrontLineItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  QuoteComputedUpfrontLineItem(entopts) {
    const self = this
    return new QuoteComputedUpfrontLineItemEntity(self, entopts)
  }


  // Entity access: `client.QuotePdf().list()` / `client.QuotePdf().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  QuotePdf(entopts) {
    const self = this
    return new QuotePdfEntity(self, entopts)
  }


  // Entity access: `client.Reader().list()` / `client.Reader().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Reader(entopts) {
    const self = this
    return new ReaderEntity(self, entopts)
  }


  // Entity access: `client.ReceivedCredit().list()` / `client.ReceivedCredit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReceivedCredit(entopts) {
    const self = this
    return new ReceivedCreditEntity(self, entopts)
  }


  // Entity access: `client.ReceivedDebit().list()` / `client.ReceivedDebit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReceivedDebit(entopts) {
    const self = this
    return new ReceivedDebitEntity(self, entopts)
  }


  // Entity access: `client.Refund().list()` / `client.Refund().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Refund(entopts) {
    const self = this
    return new RefundEntity(self, entopts)
  }


  // Entity access: `client.Registration().list()` / `client.Registration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Registration(entopts) {
    const self = this
    return new RegistrationEntity(self, entopts)
  }


  // Entity access: `client.ReportRun().list()` / `client.ReportRun().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReportRun(entopts) {
    const self = this
    return new ReportRunEntity(self, entopts)
  }


  // Entity access: `client.ReportType().list()` / `client.ReportType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReportType(entopts) {
    const self = this
    return new ReportTypeEntity(self, entopts)
  }


  // Entity access: `client.Request().list()` / `client.Request().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Request(entopts) {
    const self = this
    return new RequestEntity(self, entopts)
  }


  // Entity access: `client.Reversal().list()` / `client.Reversal().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Reversal(entopts) {
    const self = this
    return new ReversalEntity(self, entopts)
  }


  // Entity access: `client.Review().list()` / `client.Review().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Review(entopts) {
    const self = this
    return new ReviewEntity(self, entopts)
  }


  // Entity access: `client.ScheduledQueryRun().list()` / `client.ScheduledQueryRun().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ScheduledQueryRun(entopts) {
    const self = this
    return new ScheduledQueryRunEntity(self, entopts)
  }


  // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Search(entopts) {
    const self = this
    return new SearchEntity(self, entopts)
  }


  // Entity access: `client.Secret().list()` / `client.Secret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Secret(entopts) {
    const self = this
    return new SecretEntity(self, entopts)
  }


  // Entity access: `client.Session().list()` / `client.Session().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Session(entopts) {
    const self = this
    return new SessionEntity(self, entopts)
  }


  // Entity access: `client.Setting().list()` / `client.Setting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Setting(entopts) {
    const self = this
    return new SettingEntity(self, entopts)
  }


  // Entity access: `client.Settlement().list()` / `client.Settlement().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Settlement(entopts) {
    const self = this
    return new SettlementEntity(self, entopts)
  }


  // Entity access: `client.SetupAttempt().list()` / `client.SetupAttempt().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SetupAttempt(entopts) {
    const self = this
    return new SetupAttemptEntity(self, entopts)
  }


  // Entity access: `client.SetupIntent().list()` / `client.SetupIntent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SetupIntent(entopts) {
    const self = this
    return new SetupIntentEntity(self, entopts)
  }


  // Entity access: `client.ShippingRate().list()` / `client.ShippingRate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ShippingRate(entopts) {
    const self = this
    return new ShippingRateEntity(self, entopts)
  }


  // Entity access: `client.SigmaApiQuery().list()` / `client.SigmaApiQuery().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SigmaApiQuery(entopts) {
    const self = this
    return new SigmaApiQueryEntity(self, entopts)
  }


  // Entity access: `client.Source().list()` / `client.Source().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Source(entopts) {
    const self = this
    return new SourceEntity(self, entopts)
  }


  // Entity access: `client.SourceMandateNotification().list()` / `client.SourceMandateNotification().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SourceMandateNotification(entopts) {
    const self = this
    return new SourceMandateNotificationEntity(self, entopts)
  }


  // Entity access: `client.SourceTransaction().list()` / `client.SourceTransaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SourceTransaction(entopts) {
    const self = this
    return new SourceTransactionEntity(self, entopts)
  }


  // Entity access: `client.Subscription().list()` / `client.Subscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Subscription(entopts) {
    const self = this
    return new SubscriptionEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionItem().list()` / `client.SubscriptionItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionItem(entopts) {
    const self = this
    return new SubscriptionItemEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionSchedule().list()` / `client.SubscriptionSchedule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionSchedule(entopts) {
    const self = this
    return new SubscriptionScheduleEntity(self, entopts)
  }


  // Entity access: `client.Supplier().list()` / `client.Supplier().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Supplier(entopts) {
    const self = this
    return new SupplierEntity(self, entopts)
  }


  // Entity access: `client.TaxCode().list()` / `client.TaxCode().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TaxCode(entopts) {
    const self = this
    return new TaxCodeEntity(self, entopts)
  }


  // Entity access: `client.TaxId().list()` / `client.TaxId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TaxId(entopts) {
    const self = this
    return new TaxIdEntity(self, entopts)
  }


  // Entity access: `client.TaxRate().list()` / `client.TaxRate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TaxRate(entopts) {
    const self = this
    return new TaxRateEntity(self, entopts)
  }


  // Entity access: `client.TestClock().list()` / `client.TestClock().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TestClock(entopts) {
    const self = this
    return new TestClockEntity(self, entopts)
  }


  // Entity access: `client.Token().list()` / `client.Token().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Token(entopts) {
    const self = this
    return new TokenEntity(self, entopts)
  }


  // Entity access: `client.Topup().list()` / `client.Topup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Topup(entopts) {
    const self = this
    return new TopupEntity(self, entopts)
  }


  // Entity access: `client.Transaction().list()` / `client.Transaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Transaction(entopts) {
    const self = this
    return new TransactionEntity(self, entopts)
  }


  // Entity access: `client.TransactionEntry().list()` / `client.TransactionEntry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TransactionEntry(entopts) {
    const self = this
    return new TransactionEntryEntity(self, entopts)
  }


  // Entity access: `client.Transfer().list()` / `client.Transfer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Transfer(entopts) {
    const self = this
    return new TransferEntity(self, entopts)
  }


  // Entity access: `client.TrialOffer().list()` / `client.TrialOffer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TrialOffer(entopts) {
    const self = this
    return new TrialOfferEntity(self, entopts)
  }


  // Entity access: `client.ValueList().list()` / `client.ValueList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ValueList(entopts) {
    const self = this
    return new ValueListEntity(self, entopts)
  }


  // Entity access: `client.ValueListItem().list()` / `client.ValueListItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ValueListItem(entopts) {
    const self = this
    return new ValueListItemEntity(self, entopts)
  }


  // Entity access: `client.VerificationReport().list()` / `client.VerificationReport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VerificationReport(entopts) {
    const self = this
    return new VerificationReportEntity(self, entopts)
  }


  // Entity access: `client.VerificationSession().list()` / `client.VerificationSession().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VerificationSession(entopts) {
    const self = this
    return new VerificationSessionEntity(self, entopts)
  }


  // Entity access: `client.WebhookEndpoint().list()` / `client.WebhookEndpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WebhookEndpoint(entopts) {
    const self = this
    return new WebhookEndpointEntity(self, entopts)
  }




  static test(testoptsarg, sdkoptsarg) {
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


  tester(testopts, sdkopts) {
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


module.exports = {
  stdutil,
  config,
  

  BaseFeature,
  StripeEntityBase,

  StripeSDK,
  SDK,
}

