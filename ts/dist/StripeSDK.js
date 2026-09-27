"use strict";
// Stripe Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.StripeSDK = exports.StripeEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AccountEntity_1 = require("./entity/AccountEntity");
const AccountLinkEntity_1 = require("./entity/AccountLinkEntity");
const AccountOwnerEntity_1 = require("./entity/AccountOwnerEntity");
const AccountSessionEntity_1 = require("./entity/AccountSessionEntity");
const ActiveEntitlementEntity_1 = require("./entity/ActiveEntitlementEntity");
const AlertEntity_1 = require("./entity/AlertEntity");
const ApplePayDomainEntity_1 = require("./entity/ApplePayDomainEntity");
const ApplicationFeeEntity_1 = require("./entity/ApplicationFeeEntity");
const AssociationEntity_1 = require("./entity/AssociationEntity");
const AuthenticationEntity_1 = require("./entity/AuthenticationEntity");
const AuthorizationEntity_1 = require("./entity/AuthorizationEntity");
const BalanceEntity_1 = require("./entity/BalanceEntity");
const BalanceSettingEntity_1 = require("./entity/BalanceSettingEntity");
const BalanceTransactionEntity_1 = require("./entity/BalanceTransactionEntity");
const BankAccountEntity_1 = require("./entity/BankAccountEntity");
const CalculationEntity_1 = require("./entity/CalculationEntity");
const CapabilityEntity_1 = require("./entity/CapabilityEntity");
const CardEntity_1 = require("./entity/CardEntity");
const CardholderEntity_1 = require("./entity/CardholderEntity");
const CashBalanceEntity_1 = require("./entity/CashBalanceEntity");
const CashBalanceTransactionEntity_1 = require("./entity/CashBalanceTransactionEntity");
const ChargeEntity_1 = require("./entity/ChargeEntity");
const ConfigurationEntity_1 = require("./entity/ConfigurationEntity");
const ConfirmationTokenEntity_1 = require("./entity/ConfirmationTokenEntity");
const ConnectionTokenEntity_1 = require("./entity/ConnectionTokenEntity");
const CountrySpecEntity_1 = require("./entity/CountrySpecEntity");
const CouponEntity_1 = require("./entity/CouponEntity");
const CreditBalanceSummaryEntity_1 = require("./entity/CreditBalanceSummaryEntity");
const CreditBalanceTransactionEntity_1 = require("./entity/CreditBalanceTransactionEntity");
const CreditGrantEntity_1 = require("./entity/CreditGrantEntity");
const CreditNoteEntity_1 = require("./entity/CreditNoteEntity");
const CreditNoteLineEntity_1 = require("./entity/CreditNoteLineEntity");
const CreditReversalEntity_1 = require("./entity/CreditReversalEntity");
const CustomerEntity_1 = require("./entity/CustomerEntity");
const CustomerBalanceTransactionEntity_1 = require("./entity/CustomerBalanceTransactionEntity");
const CustomerSessionEntity_1 = require("./entity/CustomerSessionEntity");
const DebitReversalEntity_1 = require("./entity/DebitReversalEntity");
const DeletedAccountEntity_1 = require("./entity/DeletedAccountEntity");
const DeletedApplePayDomainEntity_1 = require("./entity/DeletedApplePayDomainEntity");
const DeletedCouponEntity_1 = require("./entity/DeletedCouponEntity");
const DeletedExternalAccountEntity_1 = require("./entity/DeletedExternalAccountEntity");
const DeletedInvoiceitemEntity_1 = require("./entity/DeletedInvoiceitemEntity");
const DeletedPersonEntity_1 = require("./entity/DeletedPersonEntity");
const DeletedPlanEntity_1 = require("./entity/DeletedPlanEntity");
const DeletedProductFeatureEntity_1 = require("./entity/DeletedProductFeatureEntity");
const DeletedSubscriptionItemEntity_1 = require("./entity/DeletedSubscriptionItemEntity");
const DeletedWebhookEndpointEntity_1 = require("./entity/DeletedWebhookEndpointEntity");
const DiscountEntity_1 = require("./entity/DiscountEntity");
const DisputeEntity_1 = require("./entity/DisputeEntity");
const DomainEntity_1 = require("./entity/DomainEntity");
const EarlyFraudWarningEntity_1 = require("./entity/EarlyFraudWarningEntity");
const EphemeralKeyEntity_1 = require("./entity/EphemeralKeyEntity");
const EventEntity_1 = require("./entity/EventEntity");
const ExchangeRateEntity_1 = require("./entity/ExchangeRateEntity");
const ExternalAccountEntity_1 = require("./entity/ExternalAccountEntity");
const FeatureEntity_1 = require("./entity/FeatureEntity");
const FeedbackOptionEntity_1 = require("./entity/FeedbackOptionEntity");
const FileEntity_1 = require("./entity/FileEntity");
const FileLinkEntity_1 = require("./entity/FileLinkEntity");
const FinancialAccountEntity_1 = require("./entity/FinancialAccountEntity");
const FinancialAccountFeatureEntity_1 = require("./entity/FinancialAccountFeatureEntity");
const FundCashBalanceEntity_1 = require("./entity/FundCashBalanceEntity");
const FundingInstructionEntity_1 = require("./entity/FundingInstructionEntity");
const HistoryEntity_1 = require("./entity/HistoryEntity");
const InboundTransferEntity_1 = require("./entity/InboundTransferEntity");
const InstallEntity_1 = require("./entity/InstallEntity");
const InvoiceEntity_1 = require("./entity/InvoiceEntity");
const InvoicePaymentEntity_1 = require("./entity/InvoicePaymentEntity");
const InvoiceRenderingTemplateEntity_1 = require("./entity/InvoiceRenderingTemplateEntity");
const InvoiceitemEntity_1 = require("./entity/InvoiceitemEntity");
const LineEntity_1 = require("./entity/LineEntity");
const LineItemEntity_1 = require("./entity/LineItemEntity");
const LinkedAccountEntity_1 = require("./entity/LinkedAccountEntity");
const LinkedAccountOwnerEntity_1 = require("./entity/LinkedAccountOwnerEntity");
const LocationEntity_1 = require("./entity/LocationEntity");
const LoginLinkEntity_1 = require("./entity/LoginLinkEntity");
const MandateEntity_1 = require("./entity/MandateEntity");
const MeterEntity_1 = require("./entity/MeterEntity");
const MeterEventEntity_1 = require("./entity/MeterEventEntity");
const MeterEventAdjustmentEntity_1 = require("./entity/MeterEventAdjustmentEntity");
const MeterEventSummaryEntity_1 = require("./entity/MeterEventSummaryEntity");
const OnboardingLinkEntity_1 = require("./entity/OnboardingLinkEntity");
const OrderEntity_1 = require("./entity/OrderEntity");
const OutboundPaymentEntity_1 = require("./entity/OutboundPaymentEntity");
const OutboundTransferEntity_1 = require("./entity/OutboundTransferEntity");
const PaymentAttemptRecordEntity_1 = require("./entity/PaymentAttemptRecordEntity");
const PaymentEvaluationEntity_1 = require("./entity/PaymentEvaluationEntity");
const PaymentIntentEntity_1 = require("./entity/PaymentIntentEntity");
const PaymentIntentAmountDetailsLineItemEntity_1 = require("./entity/PaymentIntentAmountDetailsLineItemEntity");
const PaymentLinkEntity_1 = require("./entity/PaymentLinkEntity");
const PaymentMethodEntity_1 = require("./entity/PaymentMethodEntity");
const PaymentMethodConfigurationEntity_1 = require("./entity/PaymentMethodConfigurationEntity");
const PaymentMethodDomainEntity_1 = require("./entity/PaymentMethodDomainEntity");
const PaymentRecordEntity_1 = require("./entity/PaymentRecordEntity");
const PayoutEntity_1 = require("./entity/PayoutEntity");
const PersonEntity_1 = require("./entity/PersonEntity");
const PersonalizationDesignEntity_1 = require("./entity/PersonalizationDesignEntity");
const PhysicalBundleEntity_1 = require("./entity/PhysicalBundleEntity");
const PlanEntity_1 = require("./entity/PlanEntity");
const PriceEntity_1 = require("./entity/PriceEntity");
const ProductEntity_1 = require("./entity/ProductEntity");
const ProductFeatureEntity_1 = require("./entity/ProductFeatureEntity");
const PromotionCodeEntity_1 = require("./entity/PromotionCodeEntity");
const QuoteEntity_1 = require("./entity/QuoteEntity");
const QuoteComputedUpfrontLineItemEntity_1 = require("./entity/QuoteComputedUpfrontLineItemEntity");
const QuotePdfEntity_1 = require("./entity/QuotePdfEntity");
const ReaderEntity_1 = require("./entity/ReaderEntity");
const ReceivedCreditEntity_1 = require("./entity/ReceivedCreditEntity");
const ReceivedDebitEntity_1 = require("./entity/ReceivedDebitEntity");
const RefundEntity_1 = require("./entity/RefundEntity");
const RegistrationEntity_1 = require("./entity/RegistrationEntity");
const ReportRunEntity_1 = require("./entity/ReportRunEntity");
const ReportTypeEntity_1 = require("./entity/ReportTypeEntity");
const RequestEntity_1 = require("./entity/RequestEntity");
const ReversalEntity_1 = require("./entity/ReversalEntity");
const ReviewEntity_1 = require("./entity/ReviewEntity");
const ScheduledQueryRunEntity_1 = require("./entity/ScheduledQueryRunEntity");
const SearchEntity_1 = require("./entity/SearchEntity");
const SecretEntity_1 = require("./entity/SecretEntity");
const SessionEntity_1 = require("./entity/SessionEntity");
const SettingEntity_1 = require("./entity/SettingEntity");
const SettlementEntity_1 = require("./entity/SettlementEntity");
const SetupAttemptEntity_1 = require("./entity/SetupAttemptEntity");
const SetupIntentEntity_1 = require("./entity/SetupIntentEntity");
const ShippingRateEntity_1 = require("./entity/ShippingRateEntity");
const SigmaApiQueryEntity_1 = require("./entity/SigmaApiQueryEntity");
const SourceEntity_1 = require("./entity/SourceEntity");
const SourceMandateNotificationEntity_1 = require("./entity/SourceMandateNotificationEntity");
const SourceTransactionEntity_1 = require("./entity/SourceTransactionEntity");
const SubscriptionEntity_1 = require("./entity/SubscriptionEntity");
const SubscriptionItemEntity_1 = require("./entity/SubscriptionItemEntity");
const SubscriptionScheduleEntity_1 = require("./entity/SubscriptionScheduleEntity");
const SupplierEntity_1 = require("./entity/SupplierEntity");
const TaxCodeEntity_1 = require("./entity/TaxCodeEntity");
const TaxIdEntity_1 = require("./entity/TaxIdEntity");
const TaxRateEntity_1 = require("./entity/TaxRateEntity");
const TestClockEntity_1 = require("./entity/TestClockEntity");
const TokenEntity_1 = require("./entity/TokenEntity");
const TopupEntity_1 = require("./entity/TopupEntity");
const TransactionEntity_1 = require("./entity/TransactionEntity");
const TransactionEntryEntity_1 = require("./entity/TransactionEntryEntity");
const TransferEntity_1 = require("./entity/TransferEntity");
const TrialOfferEntity_1 = require("./entity/TrialOfferEntity");
const ValueListEntity_1 = require("./entity/ValueListEntity");
const ValueListItemEntity_1 = require("./entity/ValueListItemEntity");
const VerificationReportEntity_1 = require("./entity/VerificationReportEntity");
const VerificationSessionEntity_1 = require("./entity/VerificationSessionEntity");
const WebhookEndpointEntity_1 = require("./entity/WebhookEndpointEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const StripeEntityBase_1 = require("./StripeEntityBase");
Object.defineProperty(exports, "StripeEntityBase", { enumerable: true, get: function () { return StripeEntityBase_1.StripeEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class StripeSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
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
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
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
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('StripeSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('StripeSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Account().list()` / `client.Account().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Account(entopts) {
        const self = this;
        return new AccountEntity_1.AccountEntity(self, entopts);
    }
    // Entity access: `client.AccountLink().list()` / `client.AccountLink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountLink(entopts) {
        const self = this;
        return new AccountLinkEntity_1.AccountLinkEntity(self, entopts);
    }
    // Entity access: `client.AccountOwner().list()` / `client.AccountOwner().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountOwner(entopts) {
        const self = this;
        return new AccountOwnerEntity_1.AccountOwnerEntity(self, entopts);
    }
    // Entity access: `client.AccountSession().list()` / `client.AccountSession().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountSession(entopts) {
        const self = this;
        return new AccountSessionEntity_1.AccountSessionEntity(self, entopts);
    }
    // Entity access: `client.ActiveEntitlement().list()` / `client.ActiveEntitlement().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActiveEntitlement(entopts) {
        const self = this;
        return new ActiveEntitlementEntity_1.ActiveEntitlementEntity(self, entopts);
    }
    // Entity access: `client.Alert().list()` / `client.Alert().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Alert(entopts) {
        const self = this;
        return new AlertEntity_1.AlertEntity(self, entopts);
    }
    // Entity access: `client.ApplePayDomain().list()` / `client.ApplePayDomain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApplePayDomain(entopts) {
        const self = this;
        return new ApplePayDomainEntity_1.ApplePayDomainEntity(self, entopts);
    }
    // Entity access: `client.ApplicationFee().list()` / `client.ApplicationFee().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApplicationFee(entopts) {
        const self = this;
        return new ApplicationFeeEntity_1.ApplicationFeeEntity(self, entopts);
    }
    // Entity access: `client.Association().list()` / `client.Association().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Association(entopts) {
        const self = this;
        return new AssociationEntity_1.AssociationEntity(self, entopts);
    }
    // Entity access: `client.Authentication().list()` / `client.Authentication().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Authentication(entopts) {
        const self = this;
        return new AuthenticationEntity_1.AuthenticationEntity(self, entopts);
    }
    // Entity access: `client.Authorization().list()` / `client.Authorization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Authorization(entopts) {
        const self = this;
        return new AuthorizationEntity_1.AuthorizationEntity(self, entopts);
    }
    // Entity access: `client.Balance().list()` / `client.Balance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Balance(entopts) {
        const self = this;
        return new BalanceEntity_1.BalanceEntity(self, entopts);
    }
    // Entity access: `client.BalanceSetting().list()` / `client.BalanceSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BalanceSetting(entopts) {
        const self = this;
        return new BalanceSettingEntity_1.BalanceSettingEntity(self, entopts);
    }
    // Entity access: `client.BalanceTransaction().list()` / `client.BalanceTransaction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BalanceTransaction(entopts) {
        const self = this;
        return new BalanceTransactionEntity_1.BalanceTransactionEntity(self, entopts);
    }
    // Entity access: `client.BankAccount().list()` / `client.BankAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BankAccount(entopts) {
        const self = this;
        return new BankAccountEntity_1.BankAccountEntity(self, entopts);
    }
    // Entity access: `client.Calculation().list()` / `client.Calculation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Calculation(entopts) {
        const self = this;
        return new CalculationEntity_1.CalculationEntity(self, entopts);
    }
    // Entity access: `client.Capability().list()` / `client.Capability().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Capability(entopts) {
        const self = this;
        return new CapabilityEntity_1.CapabilityEntity(self, entopts);
    }
    // Entity access: `client.Card().list()` / `client.Card().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Card(entopts) {
        const self = this;
        return new CardEntity_1.CardEntity(self, entopts);
    }
    // Entity access: `client.Cardholder().list()` / `client.Cardholder().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Cardholder(entopts) {
        const self = this;
        return new CardholderEntity_1.CardholderEntity(self, entopts);
    }
    // Entity access: `client.CashBalance().list()` / `client.CashBalance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CashBalance(entopts) {
        const self = this;
        return new CashBalanceEntity_1.CashBalanceEntity(self, entopts);
    }
    // Entity access: `client.CashBalanceTransaction().list()` / `client.CashBalanceTransaction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CashBalanceTransaction(entopts) {
        const self = this;
        return new CashBalanceTransactionEntity_1.CashBalanceTransactionEntity(self, entopts);
    }
    // Entity access: `client.Charge().list()` / `client.Charge().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Charge(entopts) {
        const self = this;
        return new ChargeEntity_1.ChargeEntity(self, entopts);
    }
    // Entity access: `client.Configuration().list()` / `client.Configuration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Configuration(entopts) {
        const self = this;
        return new ConfigurationEntity_1.ConfigurationEntity(self, entopts);
    }
    // Entity access: `client.ConfirmationToken().list()` / `client.ConfirmationToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConfirmationToken(entopts) {
        const self = this;
        return new ConfirmationTokenEntity_1.ConfirmationTokenEntity(self, entopts);
    }
    // Entity access: `client.ConnectionToken().list()` / `client.ConnectionToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConnectionToken(entopts) {
        const self = this;
        return new ConnectionTokenEntity_1.ConnectionTokenEntity(self, entopts);
    }
    // Entity access: `client.CountrySpec().list()` / `client.CountrySpec().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CountrySpec(entopts) {
        const self = this;
        return new CountrySpecEntity_1.CountrySpecEntity(self, entopts);
    }
    // Entity access: `client.Coupon().list()` / `client.Coupon().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Coupon(entopts) {
        const self = this;
        return new CouponEntity_1.CouponEntity(self, entopts);
    }
    // Entity access: `client.CreditBalanceSummary().list()` / `client.CreditBalanceSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreditBalanceSummary(entopts) {
        const self = this;
        return new CreditBalanceSummaryEntity_1.CreditBalanceSummaryEntity(self, entopts);
    }
    // Entity access: `client.CreditBalanceTransaction().list()` / `client.CreditBalanceTransaction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreditBalanceTransaction(entopts) {
        const self = this;
        return new CreditBalanceTransactionEntity_1.CreditBalanceTransactionEntity(self, entopts);
    }
    // Entity access: `client.CreditGrant().list()` / `client.CreditGrant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreditGrant(entopts) {
        const self = this;
        return new CreditGrantEntity_1.CreditGrantEntity(self, entopts);
    }
    // Entity access: `client.CreditNote().list()` / `client.CreditNote().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreditNote(entopts) {
        const self = this;
        return new CreditNoteEntity_1.CreditNoteEntity(self, entopts);
    }
    // Entity access: `client.CreditNoteLine().list()` / `client.CreditNoteLine().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreditNoteLine(entopts) {
        const self = this;
        return new CreditNoteLineEntity_1.CreditNoteLineEntity(self, entopts);
    }
    // Entity access: `client.CreditReversal().list()` / `client.CreditReversal().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreditReversal(entopts) {
        const self = this;
        return new CreditReversalEntity_1.CreditReversalEntity(self, entopts);
    }
    // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Customer(entopts) {
        const self = this;
        return new CustomerEntity_1.CustomerEntity(self, entopts);
    }
    // Entity access: `client.CustomerBalanceTransaction().list()` / `client.CustomerBalanceTransaction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomerBalanceTransaction(entopts) {
        const self = this;
        return new CustomerBalanceTransactionEntity_1.CustomerBalanceTransactionEntity(self, entopts);
    }
    // Entity access: `client.CustomerSession().list()` / `client.CustomerSession().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomerSession(entopts) {
        const self = this;
        return new CustomerSessionEntity_1.CustomerSessionEntity(self, entopts);
    }
    // Entity access: `client.DebitReversal().list()` / `client.DebitReversal().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DebitReversal(entopts) {
        const self = this;
        return new DebitReversalEntity_1.DebitReversalEntity(self, entopts);
    }
    // Entity access: `client.DeletedAccount().list()` / `client.DeletedAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedAccount(entopts) {
        const self = this;
        return new DeletedAccountEntity_1.DeletedAccountEntity(self, entopts);
    }
    // Entity access: `client.DeletedApplePayDomain().list()` / `client.DeletedApplePayDomain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedApplePayDomain(entopts) {
        const self = this;
        return new DeletedApplePayDomainEntity_1.DeletedApplePayDomainEntity(self, entopts);
    }
    // Entity access: `client.DeletedCoupon().list()` / `client.DeletedCoupon().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedCoupon(entopts) {
        const self = this;
        return new DeletedCouponEntity_1.DeletedCouponEntity(self, entopts);
    }
    // Entity access: `client.DeletedExternalAccount().list()` / `client.DeletedExternalAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedExternalAccount(entopts) {
        const self = this;
        return new DeletedExternalAccountEntity_1.DeletedExternalAccountEntity(self, entopts);
    }
    // Entity access: `client.DeletedInvoiceitem().list()` / `client.DeletedInvoiceitem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedInvoiceitem(entopts) {
        const self = this;
        return new DeletedInvoiceitemEntity_1.DeletedInvoiceitemEntity(self, entopts);
    }
    // Entity access: `client.DeletedPerson().list()` / `client.DeletedPerson().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedPerson(entopts) {
        const self = this;
        return new DeletedPersonEntity_1.DeletedPersonEntity(self, entopts);
    }
    // Entity access: `client.DeletedPlan().list()` / `client.DeletedPlan().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedPlan(entopts) {
        const self = this;
        return new DeletedPlanEntity_1.DeletedPlanEntity(self, entopts);
    }
    // Entity access: `client.DeletedProductFeature().list()` / `client.DeletedProductFeature().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedProductFeature(entopts) {
        const self = this;
        return new DeletedProductFeatureEntity_1.DeletedProductFeatureEntity(self, entopts);
    }
    // Entity access: `client.DeletedSubscriptionItem().list()` / `client.DeletedSubscriptionItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedSubscriptionItem(entopts) {
        const self = this;
        return new DeletedSubscriptionItemEntity_1.DeletedSubscriptionItemEntity(self, entopts);
    }
    // Entity access: `client.DeletedWebhookEndpoint().list()` / `client.DeletedWebhookEndpoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedWebhookEndpoint(entopts) {
        const self = this;
        return new DeletedWebhookEndpointEntity_1.DeletedWebhookEndpointEntity(self, entopts);
    }
    // Entity access: `client.Discount().list()` / `client.Discount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Discount(entopts) {
        const self = this;
        return new DiscountEntity_1.DiscountEntity(self, entopts);
    }
    // Entity access: `client.Dispute().list()` / `client.Dispute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Dispute(entopts) {
        const self = this;
        return new DisputeEntity_1.DisputeEntity(self, entopts);
    }
    // Entity access: `client.Domain().list()` / `client.Domain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Domain(entopts) {
        const self = this;
        return new DomainEntity_1.DomainEntity(self, entopts);
    }
    // Entity access: `client.EarlyFraudWarning().list()` / `client.EarlyFraudWarning().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EarlyFraudWarning(entopts) {
        const self = this;
        return new EarlyFraudWarningEntity_1.EarlyFraudWarningEntity(self, entopts);
    }
    // Entity access: `client.EphemeralKey().list()` / `client.EphemeralKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EphemeralKey(entopts) {
        const self = this;
        return new EphemeralKeyEntity_1.EphemeralKeyEntity(self, entopts);
    }
    // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Event(entopts) {
        const self = this;
        return new EventEntity_1.EventEntity(self, entopts);
    }
    // Entity access: `client.ExchangeRate().list()` / `client.ExchangeRate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExchangeRate(entopts) {
        const self = this;
        return new ExchangeRateEntity_1.ExchangeRateEntity(self, entopts);
    }
    // Entity access: `client.ExternalAccount().list()` / `client.ExternalAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExternalAccount(entopts) {
        const self = this;
        return new ExternalAccountEntity_1.ExternalAccountEntity(self, entopts);
    }
    // Entity access: `client.Feature().list()` / `client.Feature().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Feature(entopts) {
        const self = this;
        return new FeatureEntity_1.FeatureEntity(self, entopts);
    }
    // Entity access: `client.FeedbackOption().list()` / `client.FeedbackOption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FeedbackOption(entopts) {
        const self = this;
        return new FeedbackOptionEntity_1.FeedbackOptionEntity(self, entopts);
    }
    // Entity access: `client.File().list()` / `client.File().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    File(entopts) {
        const self = this;
        return new FileEntity_1.FileEntity(self, entopts);
    }
    // Entity access: `client.FileLink().list()` / `client.FileLink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FileLink(entopts) {
        const self = this;
        return new FileLinkEntity_1.FileLinkEntity(self, entopts);
    }
    // Entity access: `client.FinancialAccount().list()` / `client.FinancialAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FinancialAccount(entopts) {
        const self = this;
        return new FinancialAccountEntity_1.FinancialAccountEntity(self, entopts);
    }
    // Entity access: `client.FinancialAccountFeature().list()` / `client.FinancialAccountFeature().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FinancialAccountFeature(entopts) {
        const self = this;
        return new FinancialAccountFeatureEntity_1.FinancialAccountFeatureEntity(self, entopts);
    }
    // Entity access: `client.FundCashBalance().list()` / `client.FundCashBalance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FundCashBalance(entopts) {
        const self = this;
        return new FundCashBalanceEntity_1.FundCashBalanceEntity(self, entopts);
    }
    // Entity access: `client.FundingInstruction().list()` / `client.FundingInstruction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FundingInstruction(entopts) {
        const self = this;
        return new FundingInstructionEntity_1.FundingInstructionEntity(self, entopts);
    }
    // Entity access: `client.History().list()` / `client.History().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    History(entopts) {
        const self = this;
        return new HistoryEntity_1.HistoryEntity(self, entopts);
    }
    // Entity access: `client.InboundTransfer().list()` / `client.InboundTransfer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InboundTransfer(entopts) {
        const self = this;
        return new InboundTransferEntity_1.InboundTransferEntity(self, entopts);
    }
    // Entity access: `client.Install().list()` / `client.Install().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Install(entopts) {
        const self = this;
        return new InstallEntity_1.InstallEntity(self, entopts);
    }
    // Entity access: `client.Invoice().list()` / `client.Invoice().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Invoice(entopts) {
        const self = this;
        return new InvoiceEntity_1.InvoiceEntity(self, entopts);
    }
    // Entity access: `client.InvoicePayment().list()` / `client.InvoicePayment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InvoicePayment(entopts) {
        const self = this;
        return new InvoicePaymentEntity_1.InvoicePaymentEntity(self, entopts);
    }
    // Entity access: `client.InvoiceRenderingTemplate().list()` / `client.InvoiceRenderingTemplate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InvoiceRenderingTemplate(entopts) {
        const self = this;
        return new InvoiceRenderingTemplateEntity_1.InvoiceRenderingTemplateEntity(self, entopts);
    }
    // Entity access: `client.Invoiceitem().list()` / `client.Invoiceitem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Invoiceitem(entopts) {
        const self = this;
        return new InvoiceitemEntity_1.InvoiceitemEntity(self, entopts);
    }
    // Entity access: `client.Line().list()` / `client.Line().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Line(entopts) {
        const self = this;
        return new LineEntity_1.LineEntity(self, entopts);
    }
    // Entity access: `client.LineItem().list()` / `client.LineItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LineItem(entopts) {
        const self = this;
        return new LineItemEntity_1.LineItemEntity(self, entopts);
    }
    // Entity access: `client.LinkedAccount().list()` / `client.LinkedAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LinkedAccount(entopts) {
        const self = this;
        return new LinkedAccountEntity_1.LinkedAccountEntity(self, entopts);
    }
    // Entity access: `client.LinkedAccountOwner().list()` / `client.LinkedAccountOwner().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LinkedAccountOwner(entopts) {
        const self = this;
        return new LinkedAccountOwnerEntity_1.LinkedAccountOwnerEntity(self, entopts);
    }
    // Entity access: `client.Location().list()` / `client.Location().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Location(entopts) {
        const self = this;
        return new LocationEntity_1.LocationEntity(self, entopts);
    }
    // Entity access: `client.LoginLink().list()` / `client.LoginLink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LoginLink(entopts) {
        const self = this;
        return new LoginLinkEntity_1.LoginLinkEntity(self, entopts);
    }
    // Entity access: `client.Mandate().list()` / `client.Mandate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Mandate(entopts) {
        const self = this;
        return new MandateEntity_1.MandateEntity(self, entopts);
    }
    // Entity access: `client.Meter().list()` / `client.Meter().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Meter(entopts) {
        const self = this;
        return new MeterEntity_1.MeterEntity(self, entopts);
    }
    // Entity access: `client.MeterEvent().list()` / `client.MeterEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MeterEvent(entopts) {
        const self = this;
        return new MeterEventEntity_1.MeterEventEntity(self, entopts);
    }
    // Entity access: `client.MeterEventAdjustment().list()` / `client.MeterEventAdjustment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MeterEventAdjustment(entopts) {
        const self = this;
        return new MeterEventAdjustmentEntity_1.MeterEventAdjustmentEntity(self, entopts);
    }
    // Entity access: `client.MeterEventSummary().list()` / `client.MeterEventSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MeterEventSummary(entopts) {
        const self = this;
        return new MeterEventSummaryEntity_1.MeterEventSummaryEntity(self, entopts);
    }
    // Entity access: `client.OnboardingLink().list()` / `client.OnboardingLink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OnboardingLink(entopts) {
        const self = this;
        return new OnboardingLinkEntity_1.OnboardingLinkEntity(self, entopts);
    }
    // Entity access: `client.Order().list()` / `client.Order().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Order(entopts) {
        const self = this;
        return new OrderEntity_1.OrderEntity(self, entopts);
    }
    // Entity access: `client.OutboundPayment().list()` / `client.OutboundPayment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OutboundPayment(entopts) {
        const self = this;
        return new OutboundPaymentEntity_1.OutboundPaymentEntity(self, entopts);
    }
    // Entity access: `client.OutboundTransfer().list()` / `client.OutboundTransfer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OutboundTransfer(entopts) {
        const self = this;
        return new OutboundTransferEntity_1.OutboundTransferEntity(self, entopts);
    }
    // Entity access: `client.PaymentAttemptRecord().list()` / `client.PaymentAttemptRecord().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaymentAttemptRecord(entopts) {
        const self = this;
        return new PaymentAttemptRecordEntity_1.PaymentAttemptRecordEntity(self, entopts);
    }
    // Entity access: `client.PaymentEvaluation().list()` / `client.PaymentEvaluation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaymentEvaluation(entopts) {
        const self = this;
        return new PaymentEvaluationEntity_1.PaymentEvaluationEntity(self, entopts);
    }
    // Entity access: `client.PaymentIntent().list()` / `client.PaymentIntent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaymentIntent(entopts) {
        const self = this;
        return new PaymentIntentEntity_1.PaymentIntentEntity(self, entopts);
    }
    // Entity access: `client.PaymentIntentAmountDetailsLineItem().list()` / `client.PaymentIntentAmountDetailsLineItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaymentIntentAmountDetailsLineItem(entopts) {
        const self = this;
        return new PaymentIntentAmountDetailsLineItemEntity_1.PaymentIntentAmountDetailsLineItemEntity(self, entopts);
    }
    // Entity access: `client.PaymentLink().list()` / `client.PaymentLink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaymentLink(entopts) {
        const self = this;
        return new PaymentLinkEntity_1.PaymentLinkEntity(self, entopts);
    }
    // Entity access: `client.PaymentMethod().list()` / `client.PaymentMethod().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaymentMethod(entopts) {
        const self = this;
        return new PaymentMethodEntity_1.PaymentMethodEntity(self, entopts);
    }
    // Entity access: `client.PaymentMethodConfiguration().list()` / `client.PaymentMethodConfiguration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaymentMethodConfiguration(entopts) {
        const self = this;
        return new PaymentMethodConfigurationEntity_1.PaymentMethodConfigurationEntity(self, entopts);
    }
    // Entity access: `client.PaymentMethodDomain().list()` / `client.PaymentMethodDomain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaymentMethodDomain(entopts) {
        const self = this;
        return new PaymentMethodDomainEntity_1.PaymentMethodDomainEntity(self, entopts);
    }
    // Entity access: `client.PaymentRecord().list()` / `client.PaymentRecord().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaymentRecord(entopts) {
        const self = this;
        return new PaymentRecordEntity_1.PaymentRecordEntity(self, entopts);
    }
    // Entity access: `client.Payout().list()` / `client.Payout().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Payout(entopts) {
        const self = this;
        return new PayoutEntity_1.PayoutEntity(self, entopts);
    }
    // Entity access: `client.Person().list()` / `client.Person().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Person(entopts) {
        const self = this;
        return new PersonEntity_1.PersonEntity(self, entopts);
    }
    // Entity access: `client.PersonalizationDesign().list()` / `client.PersonalizationDesign().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PersonalizationDesign(entopts) {
        const self = this;
        return new PersonalizationDesignEntity_1.PersonalizationDesignEntity(self, entopts);
    }
    // Entity access: `client.PhysicalBundle().list()` / `client.PhysicalBundle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PhysicalBundle(entopts) {
        const self = this;
        return new PhysicalBundleEntity_1.PhysicalBundleEntity(self, entopts);
    }
    // Entity access: `client.Plan().list()` / `client.Plan().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Plan(entopts) {
        const self = this;
        return new PlanEntity_1.PlanEntity(self, entopts);
    }
    // Entity access: `client.Price().list()` / `client.Price().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Price(entopts) {
        const self = this;
        return new PriceEntity_1.PriceEntity(self, entopts);
    }
    // Entity access: `client.Product().list()` / `client.Product().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Product(entopts) {
        const self = this;
        return new ProductEntity_1.ProductEntity(self, entopts);
    }
    // Entity access: `client.ProductFeature().list()` / `client.ProductFeature().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProductFeature(entopts) {
        const self = this;
        return new ProductFeatureEntity_1.ProductFeatureEntity(self, entopts);
    }
    // Entity access: `client.PromotionCode().list()` / `client.PromotionCode().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PromotionCode(entopts) {
        const self = this;
        return new PromotionCodeEntity_1.PromotionCodeEntity(self, entopts);
    }
    // Entity access: `client.Quote().list()` / `client.Quote().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Quote(entopts) {
        const self = this;
        return new QuoteEntity_1.QuoteEntity(self, entopts);
    }
    // Entity access: `client.QuoteComputedUpfrontLineItem().list()` / `client.QuoteComputedUpfrontLineItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    QuoteComputedUpfrontLineItem(entopts) {
        const self = this;
        return new QuoteComputedUpfrontLineItemEntity_1.QuoteComputedUpfrontLineItemEntity(self, entopts);
    }
    // Entity access: `client.QuotePdf().list()` / `client.QuotePdf().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    QuotePdf(entopts) {
        const self = this;
        return new QuotePdfEntity_1.QuotePdfEntity(self, entopts);
    }
    // Entity access: `client.Reader().list()` / `client.Reader().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Reader(entopts) {
        const self = this;
        return new ReaderEntity_1.ReaderEntity(self, entopts);
    }
    // Entity access: `client.ReceivedCredit().list()` / `client.ReceivedCredit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReceivedCredit(entopts) {
        const self = this;
        return new ReceivedCreditEntity_1.ReceivedCreditEntity(self, entopts);
    }
    // Entity access: `client.ReceivedDebit().list()` / `client.ReceivedDebit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReceivedDebit(entopts) {
        const self = this;
        return new ReceivedDebitEntity_1.ReceivedDebitEntity(self, entopts);
    }
    // Entity access: `client.Refund().list()` / `client.Refund().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Refund(entopts) {
        const self = this;
        return new RefundEntity_1.RefundEntity(self, entopts);
    }
    // Entity access: `client.Registration().list()` / `client.Registration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Registration(entopts) {
        const self = this;
        return new RegistrationEntity_1.RegistrationEntity(self, entopts);
    }
    // Entity access: `client.ReportRun().list()` / `client.ReportRun().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReportRun(entopts) {
        const self = this;
        return new ReportRunEntity_1.ReportRunEntity(self, entopts);
    }
    // Entity access: `client.ReportType().list()` / `client.ReportType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReportType(entopts) {
        const self = this;
        return new ReportTypeEntity_1.ReportTypeEntity(self, entopts);
    }
    // Entity access: `client.Request().list()` / `client.Request().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Request(entopts) {
        const self = this;
        return new RequestEntity_1.RequestEntity(self, entopts);
    }
    // Entity access: `client.Reversal().list()` / `client.Reversal().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Reversal(entopts) {
        const self = this;
        return new ReversalEntity_1.ReversalEntity(self, entopts);
    }
    // Entity access: `client.Review().list()` / `client.Review().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Review(entopts) {
        const self = this;
        return new ReviewEntity_1.ReviewEntity(self, entopts);
    }
    // Entity access: `client.ScheduledQueryRun().list()` / `client.ScheduledQueryRun().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScheduledQueryRun(entopts) {
        const self = this;
        return new ScheduledQueryRunEntity_1.ScheduledQueryRunEntity(self, entopts);
    }
    // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Search(entopts) {
        const self = this;
        return new SearchEntity_1.SearchEntity(self, entopts);
    }
    // Entity access: `client.Secret().list()` / `client.Secret().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Secret(entopts) {
        const self = this;
        return new SecretEntity_1.SecretEntity(self, entopts);
    }
    // Entity access: `client.Session().list()` / `client.Session().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Session(entopts) {
        const self = this;
        return new SessionEntity_1.SessionEntity(self, entopts);
    }
    // Entity access: `client.Setting().list()` / `client.Setting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Setting(entopts) {
        const self = this;
        return new SettingEntity_1.SettingEntity(self, entopts);
    }
    // Entity access: `client.Settlement().list()` / `client.Settlement().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Settlement(entopts) {
        const self = this;
        return new SettlementEntity_1.SettlementEntity(self, entopts);
    }
    // Entity access: `client.SetupAttempt().list()` / `client.SetupAttempt().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SetupAttempt(entopts) {
        const self = this;
        return new SetupAttemptEntity_1.SetupAttemptEntity(self, entopts);
    }
    // Entity access: `client.SetupIntent().list()` / `client.SetupIntent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SetupIntent(entopts) {
        const self = this;
        return new SetupIntentEntity_1.SetupIntentEntity(self, entopts);
    }
    // Entity access: `client.ShippingRate().list()` / `client.ShippingRate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ShippingRate(entopts) {
        const self = this;
        return new ShippingRateEntity_1.ShippingRateEntity(self, entopts);
    }
    // Entity access: `client.SigmaApiQuery().list()` / `client.SigmaApiQuery().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SigmaApiQuery(entopts) {
        const self = this;
        return new SigmaApiQueryEntity_1.SigmaApiQueryEntity(self, entopts);
    }
    // Entity access: `client.Source().list()` / `client.Source().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Source(entopts) {
        const self = this;
        return new SourceEntity_1.SourceEntity(self, entopts);
    }
    // Entity access: `client.SourceMandateNotification().list()` / `client.SourceMandateNotification().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SourceMandateNotification(entopts) {
        const self = this;
        return new SourceMandateNotificationEntity_1.SourceMandateNotificationEntity(self, entopts);
    }
    // Entity access: `client.SourceTransaction().list()` / `client.SourceTransaction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SourceTransaction(entopts) {
        const self = this;
        return new SourceTransactionEntity_1.SourceTransactionEntity(self, entopts);
    }
    // Entity access: `client.Subscription().list()` / `client.Subscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Subscription(entopts) {
        const self = this;
        return new SubscriptionEntity_1.SubscriptionEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionItem().list()` / `client.SubscriptionItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionItem(entopts) {
        const self = this;
        return new SubscriptionItemEntity_1.SubscriptionItemEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionSchedule().list()` / `client.SubscriptionSchedule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionSchedule(entopts) {
        const self = this;
        return new SubscriptionScheduleEntity_1.SubscriptionScheduleEntity(self, entopts);
    }
    // Entity access: `client.Supplier().list()` / `client.Supplier().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Supplier(entopts) {
        const self = this;
        return new SupplierEntity_1.SupplierEntity(self, entopts);
    }
    // Entity access: `client.TaxCode().list()` / `client.TaxCode().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TaxCode(entopts) {
        const self = this;
        return new TaxCodeEntity_1.TaxCodeEntity(self, entopts);
    }
    // Entity access: `client.TaxId().list()` / `client.TaxId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TaxId(entopts) {
        const self = this;
        return new TaxIdEntity_1.TaxIdEntity(self, entopts);
    }
    // Entity access: `client.TaxRate().list()` / `client.TaxRate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TaxRate(entopts) {
        const self = this;
        return new TaxRateEntity_1.TaxRateEntity(self, entopts);
    }
    // Entity access: `client.TestClock().list()` / `client.TestClock().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TestClock(entopts) {
        const self = this;
        return new TestClockEntity_1.TestClockEntity(self, entopts);
    }
    // Entity access: `client.Token().list()` / `client.Token().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Token(entopts) {
        const self = this;
        return new TokenEntity_1.TokenEntity(self, entopts);
    }
    // Entity access: `client.Topup().list()` / `client.Topup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Topup(entopts) {
        const self = this;
        return new TopupEntity_1.TopupEntity(self, entopts);
    }
    // Entity access: `client.Transaction().list()` / `client.Transaction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Transaction(entopts) {
        const self = this;
        return new TransactionEntity_1.TransactionEntity(self, entopts);
    }
    // Entity access: `client.TransactionEntry().list()` / `client.TransactionEntry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TransactionEntry(entopts) {
        const self = this;
        return new TransactionEntryEntity_1.TransactionEntryEntity(self, entopts);
    }
    // Entity access: `client.Transfer().list()` / `client.Transfer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Transfer(entopts) {
        const self = this;
        return new TransferEntity_1.TransferEntity(self, entopts);
    }
    // Entity access: `client.TrialOffer().list()` / `client.TrialOffer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TrialOffer(entopts) {
        const self = this;
        return new TrialOfferEntity_1.TrialOfferEntity(self, entopts);
    }
    // Entity access: `client.ValueList().list()` / `client.ValueList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ValueList(entopts) {
        const self = this;
        return new ValueListEntity_1.ValueListEntity(self, entopts);
    }
    // Entity access: `client.ValueListItem().list()` / `client.ValueListItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ValueListItem(entopts) {
        const self = this;
        return new ValueListItemEntity_1.ValueListItemEntity(self, entopts);
    }
    // Entity access: `client.VerificationReport().list()` / `client.VerificationReport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VerificationReport(entopts) {
        const self = this;
        return new VerificationReportEntity_1.VerificationReportEntity(self, entopts);
    }
    // Entity access: `client.VerificationSession().list()` / `client.VerificationSession().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VerificationSession(entopts) {
        const self = this;
        return new VerificationSessionEntity_1.VerificationSessionEntity(self, entopts);
    }
    // Entity access: `client.WebhookEndpoint().list()` / `client.WebhookEndpoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WebhookEndpoint(entopts) {
        const self = this;
        return new WebhookEndpointEntity_1.WebhookEndpointEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new StripeSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return StripeSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Stripe' };
    }
    toString() {
        return 'Stripe ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.StripeSDK = StripeSDK;
const SDK = StripeSDK;
exports.SDK = SDK;
//# sourceMappingURL=StripeSDK.js.map