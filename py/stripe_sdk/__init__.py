# Stripe SDK

from stripe_sdk.utility.voxgig_struct import voxgig_struct as vs
from stripe_sdk.core.utility_type import StripeUtility
from stripe_sdk.core.spec import StripeSpec
from stripe_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from stripe_sdk.utility import register

# Load features
from stripe_sdk.feature.base_feature import StripeBaseFeature
from stripe_sdk.features import _has_feature, _make_feature


class StripeSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = StripeUtility()
        self._utility = utility

        from stripe_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return StripeUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = StripeSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "StripeSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("StripeSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Account(self, data=None) -> "AccountEntity":
        """Entity factory: client.Account().list() / client.Account().load({"id": ...})."""
        from stripe_sdk.entity.account_entity import AccountEntity
        return AccountEntity(self, data)


    def AccountLink(self, data=None) -> "AccountLinkEntity":
        """Entity factory: client.AccountLink().list() / client.AccountLink().load({"id": ...})."""
        from stripe_sdk.entity.account_link_entity import AccountLinkEntity
        return AccountLinkEntity(self, data)


    def AccountOwner(self, data=None) -> "AccountOwnerEntity":
        """Entity factory: client.AccountOwner().list() / client.AccountOwner().load({"id": ...})."""
        from stripe_sdk.entity.account_owner_entity import AccountOwnerEntity
        return AccountOwnerEntity(self, data)


    def AccountSession(self, data=None) -> "AccountSessionEntity":
        """Entity factory: client.AccountSession().list() / client.AccountSession().load({"id": ...})."""
        from stripe_sdk.entity.account_session_entity import AccountSessionEntity
        return AccountSessionEntity(self, data)


    def ActiveEntitlement(self, data=None) -> "ActiveEntitlementEntity":
        """Entity factory: client.ActiveEntitlement().list() / client.ActiveEntitlement().load({"id": ...})."""
        from stripe_sdk.entity.active_entitlement_entity import ActiveEntitlementEntity
        return ActiveEntitlementEntity(self, data)


    def Alert(self, data=None) -> "AlertEntity":
        """Entity factory: client.Alert().list() / client.Alert().load({"id": ...})."""
        from stripe_sdk.entity.alert_entity import AlertEntity
        return AlertEntity(self, data)


    def ApplePayDomain(self, data=None) -> "ApplePayDomainEntity":
        """Entity factory: client.ApplePayDomain().list() / client.ApplePayDomain().load({"id": ...})."""
        from stripe_sdk.entity.apple_pay_domain_entity import ApplePayDomainEntity
        return ApplePayDomainEntity(self, data)


    def ApplicationFee(self, data=None) -> "ApplicationFeeEntity":
        """Entity factory: client.ApplicationFee().list() / client.ApplicationFee().load({"id": ...})."""
        from stripe_sdk.entity.application_fee_entity import ApplicationFeeEntity
        return ApplicationFeeEntity(self, data)


    def Association(self, data=None) -> "AssociationEntity":
        """Entity factory: client.Association().list() / client.Association().load({"id": ...})."""
        from stripe_sdk.entity.association_entity import AssociationEntity
        return AssociationEntity(self, data)


    def Authentication(self, data=None) -> "AuthenticationEntity":
        """Entity factory: client.Authentication().list() / client.Authentication().load({"id": ...})."""
        from stripe_sdk.entity.authentication_entity import AuthenticationEntity
        return AuthenticationEntity(self, data)


    def Authorization(self, data=None) -> "AuthorizationEntity":
        """Entity factory: client.Authorization().list() / client.Authorization().load({"id": ...})."""
        from stripe_sdk.entity.authorization_entity import AuthorizationEntity
        return AuthorizationEntity(self, data)


    def Balance(self, data=None) -> "BalanceEntity":
        """Entity factory: client.Balance().list() / client.Balance().load({"id": ...})."""
        from stripe_sdk.entity.balance_entity import BalanceEntity
        return BalanceEntity(self, data)


    def BalanceSetting(self, data=None) -> "BalanceSettingEntity":
        """Entity factory: client.BalanceSetting().list() / client.BalanceSetting().load({"id": ...})."""
        from stripe_sdk.entity.balance_setting_entity import BalanceSettingEntity
        return BalanceSettingEntity(self, data)


    def BalanceTransaction(self, data=None) -> "BalanceTransactionEntity":
        """Entity factory: client.BalanceTransaction().list() / client.BalanceTransaction().load({"id": ...})."""
        from stripe_sdk.entity.balance_transaction_entity import BalanceTransactionEntity
        return BalanceTransactionEntity(self, data)


    def BankAccount(self, data=None) -> "BankAccountEntity":
        """Entity factory: client.BankAccount().list() / client.BankAccount().load({"id": ...})."""
        from stripe_sdk.entity.bank_account_entity import BankAccountEntity
        return BankAccountEntity(self, data)


    def Calculation(self, data=None) -> "CalculationEntity":
        """Entity factory: client.Calculation().list() / client.Calculation().load({"id": ...})."""
        from stripe_sdk.entity.calculation_entity import CalculationEntity
        return CalculationEntity(self, data)


    def Capability(self, data=None) -> "CapabilityEntity":
        """Entity factory: client.Capability().list() / client.Capability().load({"id": ...})."""
        from stripe_sdk.entity.capability_entity import CapabilityEntity
        return CapabilityEntity(self, data)


    def Card(self, data=None) -> "CardEntity":
        """Entity factory: client.Card().list() / client.Card().load({"id": ...})."""
        from stripe_sdk.entity.card_entity import CardEntity
        return CardEntity(self, data)


    def Cardholder(self, data=None) -> "CardholderEntity":
        """Entity factory: client.Cardholder().list() / client.Cardholder().load({"id": ...})."""
        from stripe_sdk.entity.cardholder_entity import CardholderEntity
        return CardholderEntity(self, data)


    def CashBalance(self, data=None) -> "CashBalanceEntity":
        """Entity factory: client.CashBalance().list() / client.CashBalance().load({"id": ...})."""
        from stripe_sdk.entity.cash_balance_entity import CashBalanceEntity
        return CashBalanceEntity(self, data)


    def CashBalanceTransaction(self, data=None) -> "CashBalanceTransactionEntity":
        """Entity factory: client.CashBalanceTransaction().list() / client.CashBalanceTransaction().load({"id": ...})."""
        from stripe_sdk.entity.cash_balance_transaction_entity import CashBalanceTransactionEntity
        return CashBalanceTransactionEntity(self, data)


    def Charge(self, data=None) -> "ChargeEntity":
        """Entity factory: client.Charge().list() / client.Charge().load({"id": ...})."""
        from stripe_sdk.entity.charge_entity import ChargeEntity
        return ChargeEntity(self, data)


    def Configuration(self, data=None) -> "ConfigurationEntity":
        """Entity factory: client.Configuration().list() / client.Configuration().load({"id": ...})."""
        from stripe_sdk.entity.configuration_entity import ConfigurationEntity
        return ConfigurationEntity(self, data)


    def ConfirmationToken(self, data=None) -> "ConfirmationTokenEntity":
        """Entity factory: client.ConfirmationToken().list() / client.ConfirmationToken().load({"id": ...})."""
        from stripe_sdk.entity.confirmation_token_entity import ConfirmationTokenEntity
        return ConfirmationTokenEntity(self, data)


    def ConnectionToken(self, data=None) -> "ConnectionTokenEntity":
        """Entity factory: client.ConnectionToken().list() / client.ConnectionToken().load({"id": ...})."""
        from stripe_sdk.entity.connection_token_entity import ConnectionTokenEntity
        return ConnectionTokenEntity(self, data)


    def CountrySpec(self, data=None) -> "CountrySpecEntity":
        """Entity factory: client.CountrySpec().list() / client.CountrySpec().load({"id": ...})."""
        from stripe_sdk.entity.country_spec_entity import CountrySpecEntity
        return CountrySpecEntity(self, data)


    def Coupon(self, data=None) -> "CouponEntity":
        """Entity factory: client.Coupon().list() / client.Coupon().load({"id": ...})."""
        from stripe_sdk.entity.coupon_entity import CouponEntity
        return CouponEntity(self, data)


    def CreditBalanceSummary(self, data=None) -> "CreditBalanceSummaryEntity":
        """Entity factory: client.CreditBalanceSummary().list() / client.CreditBalanceSummary().load({"id": ...})."""
        from stripe_sdk.entity.credit_balance_summary_entity import CreditBalanceSummaryEntity
        return CreditBalanceSummaryEntity(self, data)


    def CreditBalanceTransaction(self, data=None) -> "CreditBalanceTransactionEntity":
        """Entity factory: client.CreditBalanceTransaction().list() / client.CreditBalanceTransaction().load({"id": ...})."""
        from stripe_sdk.entity.credit_balance_transaction_entity import CreditBalanceTransactionEntity
        return CreditBalanceTransactionEntity(self, data)


    def CreditGrant(self, data=None) -> "CreditGrantEntity":
        """Entity factory: client.CreditGrant().list() / client.CreditGrant().load({"id": ...})."""
        from stripe_sdk.entity.credit_grant_entity import CreditGrantEntity
        return CreditGrantEntity(self, data)


    def CreditNote(self, data=None) -> "CreditNoteEntity":
        """Entity factory: client.CreditNote().list() / client.CreditNote().load({"id": ...})."""
        from stripe_sdk.entity.credit_note_entity import CreditNoteEntity
        return CreditNoteEntity(self, data)


    def CreditNoteLine(self, data=None) -> "CreditNoteLineEntity":
        """Entity factory: client.CreditNoteLine().list() / client.CreditNoteLine().load({"id": ...})."""
        from stripe_sdk.entity.credit_note_line_entity import CreditNoteLineEntity
        return CreditNoteLineEntity(self, data)


    def CreditReversal(self, data=None) -> "CreditReversalEntity":
        """Entity factory: client.CreditReversal().list() / client.CreditReversal().load({"id": ...})."""
        from stripe_sdk.entity.credit_reversal_entity import CreditReversalEntity
        return CreditReversalEntity(self, data)


    def Customer(self, data=None) -> "CustomerEntity":
        """Entity factory: client.Customer().list() / client.Customer().load({"id": ...})."""
        from stripe_sdk.entity.customer_entity import CustomerEntity
        return CustomerEntity(self, data)


    def CustomerBalanceTransaction(self, data=None) -> "CustomerBalanceTransactionEntity":
        """Entity factory: client.CustomerBalanceTransaction().list() / client.CustomerBalanceTransaction().load({"id": ...})."""
        from stripe_sdk.entity.customer_balance_transaction_entity import CustomerBalanceTransactionEntity
        return CustomerBalanceTransactionEntity(self, data)


    def CustomerSession(self, data=None) -> "CustomerSessionEntity":
        """Entity factory: client.CustomerSession().list() / client.CustomerSession().load({"id": ...})."""
        from stripe_sdk.entity.customer_session_entity import CustomerSessionEntity
        return CustomerSessionEntity(self, data)


    def DebitReversal(self, data=None) -> "DebitReversalEntity":
        """Entity factory: client.DebitReversal().list() / client.DebitReversal().load({"id": ...})."""
        from stripe_sdk.entity.debit_reversal_entity import DebitReversalEntity
        return DebitReversalEntity(self, data)


    def DeletedAccount(self, data=None) -> "DeletedAccountEntity":
        """Entity factory: client.DeletedAccount().list() / client.DeletedAccount().load({"id": ...})."""
        from stripe_sdk.entity.deleted_account_entity import DeletedAccountEntity
        return DeletedAccountEntity(self, data)


    def DeletedApplePayDomain(self, data=None) -> "DeletedApplePayDomainEntity":
        """Entity factory: client.DeletedApplePayDomain().list() / client.DeletedApplePayDomain().load({"id": ...})."""
        from stripe_sdk.entity.deleted_apple_pay_domain_entity import DeletedApplePayDomainEntity
        return DeletedApplePayDomainEntity(self, data)


    def DeletedCoupon(self, data=None) -> "DeletedCouponEntity":
        """Entity factory: client.DeletedCoupon().list() / client.DeletedCoupon().load({"id": ...})."""
        from stripe_sdk.entity.deleted_coupon_entity import DeletedCouponEntity
        return DeletedCouponEntity(self, data)


    def DeletedExternalAccount(self, data=None) -> "DeletedExternalAccountEntity":
        """Entity factory: client.DeletedExternalAccount().list() / client.DeletedExternalAccount().load({"id": ...})."""
        from stripe_sdk.entity.deleted_external_account_entity import DeletedExternalAccountEntity
        return DeletedExternalAccountEntity(self, data)


    def DeletedInvoiceitem(self, data=None) -> "DeletedInvoiceitemEntity":
        """Entity factory: client.DeletedInvoiceitem().list() / client.DeletedInvoiceitem().load({"id": ...})."""
        from stripe_sdk.entity.deleted_invoiceitem_entity import DeletedInvoiceitemEntity
        return DeletedInvoiceitemEntity(self, data)


    def DeletedPerson(self, data=None) -> "DeletedPersonEntity":
        """Entity factory: client.DeletedPerson().list() / client.DeletedPerson().load({"id": ...})."""
        from stripe_sdk.entity.deleted_person_entity import DeletedPersonEntity
        return DeletedPersonEntity(self, data)


    def DeletedPlan(self, data=None) -> "DeletedPlanEntity":
        """Entity factory: client.DeletedPlan().list() / client.DeletedPlan().load({"id": ...})."""
        from stripe_sdk.entity.deleted_plan_entity import DeletedPlanEntity
        return DeletedPlanEntity(self, data)


    def DeletedProductFeature(self, data=None) -> "DeletedProductFeatureEntity":
        """Entity factory: client.DeletedProductFeature().list() / client.DeletedProductFeature().load({"id": ...})."""
        from stripe_sdk.entity.deleted_product_feature_entity import DeletedProductFeatureEntity
        return DeletedProductFeatureEntity(self, data)


    def DeletedSubscriptionItem(self, data=None) -> "DeletedSubscriptionItemEntity":
        """Entity factory: client.DeletedSubscriptionItem().list() / client.DeletedSubscriptionItem().load({"id": ...})."""
        from stripe_sdk.entity.deleted_subscription_item_entity import DeletedSubscriptionItemEntity
        return DeletedSubscriptionItemEntity(self, data)


    def DeletedWebhookEndpoint(self, data=None) -> "DeletedWebhookEndpointEntity":
        """Entity factory: client.DeletedWebhookEndpoint().list() / client.DeletedWebhookEndpoint().load({"id": ...})."""
        from stripe_sdk.entity.deleted_webhook_endpoint_entity import DeletedWebhookEndpointEntity
        return DeletedWebhookEndpointEntity(self, data)


    def Discount(self, data=None) -> "DiscountEntity":
        """Entity factory: client.Discount().list() / client.Discount().load({"id": ...})."""
        from stripe_sdk.entity.discount_entity import DiscountEntity
        return DiscountEntity(self, data)


    def Dispute(self, data=None) -> "DisputeEntity":
        """Entity factory: client.Dispute().list() / client.Dispute().load({"id": ...})."""
        from stripe_sdk.entity.dispute_entity import DisputeEntity
        return DisputeEntity(self, data)


    def Domain(self, data=None) -> "DomainEntity":
        """Entity factory: client.Domain().list() / client.Domain().load({"id": ...})."""
        from stripe_sdk.entity.domain_entity import DomainEntity
        return DomainEntity(self, data)


    def EarlyFraudWarning(self, data=None) -> "EarlyFraudWarningEntity":
        """Entity factory: client.EarlyFraudWarning().list() / client.EarlyFraudWarning().load({"id": ...})."""
        from stripe_sdk.entity.early_fraud_warning_entity import EarlyFraudWarningEntity
        return EarlyFraudWarningEntity(self, data)


    def EphemeralKey(self, data=None) -> "EphemeralKeyEntity":
        """Entity factory: client.EphemeralKey().list() / client.EphemeralKey().load({"id": ...})."""
        from stripe_sdk.entity.ephemeral_key_entity import EphemeralKeyEntity
        return EphemeralKeyEntity(self, data)


    def Event(self, data=None) -> "EventEntity":
        """Entity factory: client.Event().list() / client.Event().load({"id": ...})."""
        from stripe_sdk.entity.event_entity import EventEntity
        return EventEntity(self, data)


    def ExchangeRate(self, data=None) -> "ExchangeRateEntity":
        """Entity factory: client.ExchangeRate().list() / client.ExchangeRate().load({"id": ...})."""
        from stripe_sdk.entity.exchange_rate_entity import ExchangeRateEntity
        return ExchangeRateEntity(self, data)


    def ExternalAccount(self, data=None) -> "ExternalAccountEntity":
        """Entity factory: client.ExternalAccount().list() / client.ExternalAccount().load({"id": ...})."""
        from stripe_sdk.entity.external_account_entity import ExternalAccountEntity
        return ExternalAccountEntity(self, data)


    def Feature(self, data=None) -> "FeatureEntity":
        """Entity factory: client.Feature().list() / client.Feature().load({"id": ...})."""
        from stripe_sdk.entity.feature_entity import FeatureEntity
        return FeatureEntity(self, data)


    def FeedbackOption(self, data=None) -> "FeedbackOptionEntity":
        """Entity factory: client.FeedbackOption().list() / client.FeedbackOption().load({"id": ...})."""
        from stripe_sdk.entity.feedback_option_entity import FeedbackOptionEntity
        return FeedbackOptionEntity(self, data)


    def File(self, data=None) -> "FileEntity":
        """Entity factory: client.File().list() / client.File().load({"id": ...})."""
        from stripe_sdk.entity.file_entity import FileEntity
        return FileEntity(self, data)


    def FileLink(self, data=None) -> "FileLinkEntity":
        """Entity factory: client.FileLink().list() / client.FileLink().load({"id": ...})."""
        from stripe_sdk.entity.file_link_entity import FileLinkEntity
        return FileLinkEntity(self, data)


    def FinancialAccount(self, data=None) -> "FinancialAccountEntity":
        """Entity factory: client.FinancialAccount().list() / client.FinancialAccount().load({"id": ...})."""
        from stripe_sdk.entity.financial_account_entity import FinancialAccountEntity
        return FinancialAccountEntity(self, data)


    def FinancialAccountFeature(self, data=None) -> "FinancialAccountFeatureEntity":
        """Entity factory: client.FinancialAccountFeature().list() / client.FinancialAccountFeature().load({"id": ...})."""
        from stripe_sdk.entity.financial_account_feature_entity import FinancialAccountFeatureEntity
        return FinancialAccountFeatureEntity(self, data)


    def FundCashBalance(self, data=None) -> "FundCashBalanceEntity":
        """Entity factory: client.FundCashBalance().list() / client.FundCashBalance().load({"id": ...})."""
        from stripe_sdk.entity.fund_cash_balance_entity import FundCashBalanceEntity
        return FundCashBalanceEntity(self, data)


    def FundingInstruction(self, data=None) -> "FundingInstructionEntity":
        """Entity factory: client.FundingInstruction().list() / client.FundingInstruction().load({"id": ...})."""
        from stripe_sdk.entity.funding_instruction_entity import FundingInstructionEntity
        return FundingInstructionEntity(self, data)


    def History(self, data=None) -> "HistoryEntity":
        """Entity factory: client.History().list() / client.History().load({"id": ...})."""
        from stripe_sdk.entity.history_entity import HistoryEntity
        return HistoryEntity(self, data)


    def InboundTransfer(self, data=None) -> "InboundTransferEntity":
        """Entity factory: client.InboundTransfer().list() / client.InboundTransfer().load({"id": ...})."""
        from stripe_sdk.entity.inbound_transfer_entity import InboundTransferEntity
        return InboundTransferEntity(self, data)


    def Install(self, data=None) -> "InstallEntity":
        """Entity factory: client.Install().list() / client.Install().load({"id": ...})."""
        from stripe_sdk.entity.install_entity import InstallEntity
        return InstallEntity(self, data)


    def Invoice(self, data=None) -> "InvoiceEntity":
        """Entity factory: client.Invoice().list() / client.Invoice().load({"id": ...})."""
        from stripe_sdk.entity.invoice_entity import InvoiceEntity
        return InvoiceEntity(self, data)


    def InvoicePayment(self, data=None) -> "InvoicePaymentEntity":
        """Entity factory: client.InvoicePayment().list() / client.InvoicePayment().load({"id": ...})."""
        from stripe_sdk.entity.invoice_payment_entity import InvoicePaymentEntity
        return InvoicePaymentEntity(self, data)


    def InvoiceRenderingTemplate(self, data=None) -> "InvoiceRenderingTemplateEntity":
        """Entity factory: client.InvoiceRenderingTemplate().list() / client.InvoiceRenderingTemplate().load({"id": ...})."""
        from stripe_sdk.entity.invoice_rendering_template_entity import InvoiceRenderingTemplateEntity
        return InvoiceRenderingTemplateEntity(self, data)


    def Invoiceitem(self, data=None) -> "InvoiceitemEntity":
        """Entity factory: client.Invoiceitem().list() / client.Invoiceitem().load({"id": ...})."""
        from stripe_sdk.entity.invoiceitem_entity import InvoiceitemEntity
        return InvoiceitemEntity(self, data)


    def Line(self, data=None) -> "LineEntity":
        """Entity factory: client.Line().list() / client.Line().load({"id": ...})."""
        from stripe_sdk.entity.line_entity import LineEntity
        return LineEntity(self, data)


    def LineItem(self, data=None) -> "LineItemEntity":
        """Entity factory: client.LineItem().list() / client.LineItem().load({"id": ...})."""
        from stripe_sdk.entity.line_item_entity import LineItemEntity
        return LineItemEntity(self, data)


    def LinkedAccount(self, data=None) -> "LinkedAccountEntity":
        """Entity factory: client.LinkedAccount().list() / client.LinkedAccount().load({"id": ...})."""
        from stripe_sdk.entity.linked_account_entity import LinkedAccountEntity
        return LinkedAccountEntity(self, data)


    def LinkedAccountOwner(self, data=None) -> "LinkedAccountOwnerEntity":
        """Entity factory: client.LinkedAccountOwner().list() / client.LinkedAccountOwner().load({"id": ...})."""
        from stripe_sdk.entity.linked_account_owner_entity import LinkedAccountOwnerEntity
        return LinkedAccountOwnerEntity(self, data)


    def Location(self, data=None) -> "LocationEntity":
        """Entity factory: client.Location().list() / client.Location().load({"id": ...})."""
        from stripe_sdk.entity.location_entity import LocationEntity
        return LocationEntity(self, data)


    def LoginLink(self, data=None) -> "LoginLinkEntity":
        """Entity factory: client.LoginLink().list() / client.LoginLink().load({"id": ...})."""
        from stripe_sdk.entity.login_link_entity import LoginLinkEntity
        return LoginLinkEntity(self, data)


    def Mandate(self, data=None) -> "MandateEntity":
        """Entity factory: client.Mandate().list() / client.Mandate().load({"id": ...})."""
        from stripe_sdk.entity.mandate_entity import MandateEntity
        return MandateEntity(self, data)


    def Meter(self, data=None) -> "MeterEntity":
        """Entity factory: client.Meter().list() / client.Meter().load({"id": ...})."""
        from stripe_sdk.entity.meter_entity import MeterEntity
        return MeterEntity(self, data)


    def MeterEvent(self, data=None) -> "MeterEventEntity":
        """Entity factory: client.MeterEvent().list() / client.MeterEvent().load({"id": ...})."""
        from stripe_sdk.entity.meter_event_entity import MeterEventEntity
        return MeterEventEntity(self, data)


    def MeterEventAdjustment(self, data=None) -> "MeterEventAdjustmentEntity":
        """Entity factory: client.MeterEventAdjustment().list() / client.MeterEventAdjustment().load({"id": ...})."""
        from stripe_sdk.entity.meter_event_adjustment_entity import MeterEventAdjustmentEntity
        return MeterEventAdjustmentEntity(self, data)


    def MeterEventSummary(self, data=None) -> "MeterEventSummaryEntity":
        """Entity factory: client.MeterEventSummary().list() / client.MeterEventSummary().load({"id": ...})."""
        from stripe_sdk.entity.meter_event_summary_entity import MeterEventSummaryEntity
        return MeterEventSummaryEntity(self, data)


    def OnboardingLink(self, data=None) -> "OnboardingLinkEntity":
        """Entity factory: client.OnboardingLink().list() / client.OnboardingLink().load({"id": ...})."""
        from stripe_sdk.entity.onboarding_link_entity import OnboardingLinkEntity
        return OnboardingLinkEntity(self, data)


    def Order(self, data=None) -> "OrderEntity":
        """Entity factory: client.Order().list() / client.Order().load({"id": ...})."""
        from stripe_sdk.entity.order_entity import OrderEntity
        return OrderEntity(self, data)


    def OutboundPayment(self, data=None) -> "OutboundPaymentEntity":
        """Entity factory: client.OutboundPayment().list() / client.OutboundPayment().load({"id": ...})."""
        from stripe_sdk.entity.outbound_payment_entity import OutboundPaymentEntity
        return OutboundPaymentEntity(self, data)


    def OutboundTransfer(self, data=None) -> "OutboundTransferEntity":
        """Entity factory: client.OutboundTransfer().list() / client.OutboundTransfer().load({"id": ...})."""
        from stripe_sdk.entity.outbound_transfer_entity import OutboundTransferEntity
        return OutboundTransferEntity(self, data)


    def PaymentAttemptRecord(self, data=None) -> "PaymentAttemptRecordEntity":
        """Entity factory: client.PaymentAttemptRecord().list() / client.PaymentAttemptRecord().load({"id": ...})."""
        from stripe_sdk.entity.payment_attempt_record_entity import PaymentAttemptRecordEntity
        return PaymentAttemptRecordEntity(self, data)


    def PaymentEvaluation(self, data=None) -> "PaymentEvaluationEntity":
        """Entity factory: client.PaymentEvaluation().list() / client.PaymentEvaluation().load({"id": ...})."""
        from stripe_sdk.entity.payment_evaluation_entity import PaymentEvaluationEntity
        return PaymentEvaluationEntity(self, data)


    def PaymentIntent(self, data=None) -> "PaymentIntentEntity":
        """Entity factory: client.PaymentIntent().list() / client.PaymentIntent().load({"id": ...})."""
        from stripe_sdk.entity.payment_intent_entity import PaymentIntentEntity
        return PaymentIntentEntity(self, data)


    def PaymentIntentAmountDetailsLineItem(self, data=None) -> "PaymentIntentAmountDetailsLineItemEntity":
        """Entity factory: client.PaymentIntentAmountDetailsLineItem().list() / client.PaymentIntentAmountDetailsLineItem().load({"id": ...})."""
        from stripe_sdk.entity.payment_intent_amount_details_line_item_entity import PaymentIntentAmountDetailsLineItemEntity
        return PaymentIntentAmountDetailsLineItemEntity(self, data)


    def PaymentLink(self, data=None) -> "PaymentLinkEntity":
        """Entity factory: client.PaymentLink().list() / client.PaymentLink().load({"id": ...})."""
        from stripe_sdk.entity.payment_link_entity import PaymentLinkEntity
        return PaymentLinkEntity(self, data)


    def PaymentMethod(self, data=None) -> "PaymentMethodEntity":
        """Entity factory: client.PaymentMethod().list() / client.PaymentMethod().load({"id": ...})."""
        from stripe_sdk.entity.payment_method_entity import PaymentMethodEntity
        return PaymentMethodEntity(self, data)


    def PaymentMethodConfiguration(self, data=None) -> "PaymentMethodConfigurationEntity":
        """Entity factory: client.PaymentMethodConfiguration().list() / client.PaymentMethodConfiguration().load({"id": ...})."""
        from stripe_sdk.entity.payment_method_configuration_entity import PaymentMethodConfigurationEntity
        return PaymentMethodConfigurationEntity(self, data)


    def PaymentMethodDomain(self, data=None) -> "PaymentMethodDomainEntity":
        """Entity factory: client.PaymentMethodDomain().list() / client.PaymentMethodDomain().load({"id": ...})."""
        from stripe_sdk.entity.payment_method_domain_entity import PaymentMethodDomainEntity
        return PaymentMethodDomainEntity(self, data)


    def PaymentRecord(self, data=None) -> "PaymentRecordEntity":
        """Entity factory: client.PaymentRecord().list() / client.PaymentRecord().load({"id": ...})."""
        from stripe_sdk.entity.payment_record_entity import PaymentRecordEntity
        return PaymentRecordEntity(self, data)


    def Payout(self, data=None) -> "PayoutEntity":
        """Entity factory: client.Payout().list() / client.Payout().load({"id": ...})."""
        from stripe_sdk.entity.payout_entity import PayoutEntity
        return PayoutEntity(self, data)


    def Person(self, data=None) -> "PersonEntity":
        """Entity factory: client.Person().list() / client.Person().load({"id": ...})."""
        from stripe_sdk.entity.person_entity import PersonEntity
        return PersonEntity(self, data)


    def PersonalizationDesign(self, data=None) -> "PersonalizationDesignEntity":
        """Entity factory: client.PersonalizationDesign().list() / client.PersonalizationDesign().load({"id": ...})."""
        from stripe_sdk.entity.personalization_design_entity import PersonalizationDesignEntity
        return PersonalizationDesignEntity(self, data)


    def PhysicalBundle(self, data=None) -> "PhysicalBundleEntity":
        """Entity factory: client.PhysicalBundle().list() / client.PhysicalBundle().load({"id": ...})."""
        from stripe_sdk.entity.physical_bundle_entity import PhysicalBundleEntity
        return PhysicalBundleEntity(self, data)


    def Plan(self, data=None) -> "PlanEntity":
        """Entity factory: client.Plan().list() / client.Plan().load({"id": ...})."""
        from stripe_sdk.entity.plan_entity import PlanEntity
        return PlanEntity(self, data)


    def Price(self, data=None) -> "PriceEntity":
        """Entity factory: client.Price().list() / client.Price().load({"id": ...})."""
        from stripe_sdk.entity.price_entity import PriceEntity
        return PriceEntity(self, data)


    def Product(self, data=None) -> "ProductEntity":
        """Entity factory: client.Product().list() / client.Product().load({"id": ...})."""
        from stripe_sdk.entity.product_entity import ProductEntity
        return ProductEntity(self, data)


    def ProductFeature(self, data=None) -> "ProductFeatureEntity":
        """Entity factory: client.ProductFeature().list() / client.ProductFeature().load({"id": ...})."""
        from stripe_sdk.entity.product_feature_entity import ProductFeatureEntity
        return ProductFeatureEntity(self, data)


    def PromotionCode(self, data=None) -> "PromotionCodeEntity":
        """Entity factory: client.PromotionCode().list() / client.PromotionCode().load({"id": ...})."""
        from stripe_sdk.entity.promotion_code_entity import PromotionCodeEntity
        return PromotionCodeEntity(self, data)


    def Quote(self, data=None) -> "QuoteEntity":
        """Entity factory: client.Quote().list() / client.Quote().load({"id": ...})."""
        from stripe_sdk.entity.quote_entity import QuoteEntity
        return QuoteEntity(self, data)


    def QuoteComputedUpfrontLineItem(self, data=None) -> "QuoteComputedUpfrontLineItemEntity":
        """Entity factory: client.QuoteComputedUpfrontLineItem().list() / client.QuoteComputedUpfrontLineItem().load({"id": ...})."""
        from stripe_sdk.entity.quote_computed_upfront_line_item_entity import QuoteComputedUpfrontLineItemEntity
        return QuoteComputedUpfrontLineItemEntity(self, data)


    def QuotePdf(self, data=None) -> "QuotePdfEntity":
        """Entity factory: client.QuotePdf().list() / client.QuotePdf().load({"id": ...})."""
        from stripe_sdk.entity.quote_pdf_entity import QuotePdfEntity
        return QuotePdfEntity(self, data)


    def Reader(self, data=None) -> "ReaderEntity":
        """Entity factory: client.Reader().list() / client.Reader().load({"id": ...})."""
        from stripe_sdk.entity.reader_entity import ReaderEntity
        return ReaderEntity(self, data)


    def ReceivedCredit(self, data=None) -> "ReceivedCreditEntity":
        """Entity factory: client.ReceivedCredit().list() / client.ReceivedCredit().load({"id": ...})."""
        from stripe_sdk.entity.received_credit_entity import ReceivedCreditEntity
        return ReceivedCreditEntity(self, data)


    def ReceivedDebit(self, data=None) -> "ReceivedDebitEntity":
        """Entity factory: client.ReceivedDebit().list() / client.ReceivedDebit().load({"id": ...})."""
        from stripe_sdk.entity.received_debit_entity import ReceivedDebitEntity
        return ReceivedDebitEntity(self, data)


    def Refund(self, data=None) -> "RefundEntity":
        """Entity factory: client.Refund().list() / client.Refund().load({"id": ...})."""
        from stripe_sdk.entity.refund_entity import RefundEntity
        return RefundEntity(self, data)


    def Registration(self, data=None) -> "RegistrationEntity":
        """Entity factory: client.Registration().list() / client.Registration().load({"id": ...})."""
        from stripe_sdk.entity.registration_entity import RegistrationEntity
        return RegistrationEntity(self, data)


    def ReportRun(self, data=None) -> "ReportRunEntity":
        """Entity factory: client.ReportRun().list() / client.ReportRun().load({"id": ...})."""
        from stripe_sdk.entity.report_run_entity import ReportRunEntity
        return ReportRunEntity(self, data)


    def ReportType(self, data=None) -> "ReportTypeEntity":
        """Entity factory: client.ReportType().list() / client.ReportType().load({"id": ...})."""
        from stripe_sdk.entity.report_type_entity import ReportTypeEntity
        return ReportTypeEntity(self, data)


    def Request(self, data=None) -> "RequestEntity":
        """Entity factory: client.Request().list() / client.Request().load({"id": ...})."""
        from stripe_sdk.entity.request_entity import RequestEntity
        return RequestEntity(self, data)


    def Reversal(self, data=None) -> "ReversalEntity":
        """Entity factory: client.Reversal().list() / client.Reversal().load({"id": ...})."""
        from stripe_sdk.entity.reversal_entity import ReversalEntity
        return ReversalEntity(self, data)


    def Review(self, data=None) -> "ReviewEntity":
        """Entity factory: client.Review().list() / client.Review().load({"id": ...})."""
        from stripe_sdk.entity.review_entity import ReviewEntity
        return ReviewEntity(self, data)


    def ScheduledQueryRun(self, data=None) -> "ScheduledQueryRunEntity":
        """Entity factory: client.ScheduledQueryRun().list() / client.ScheduledQueryRun().load({"id": ...})."""
        from stripe_sdk.entity.scheduled_query_run_entity import ScheduledQueryRunEntity
        return ScheduledQueryRunEntity(self, data)


    def Search(self, data=None) -> "SearchEntity":
        """Entity factory: client.Search().list() / client.Search().load({"id": ...})."""
        from stripe_sdk.entity.search_entity import SearchEntity
        return SearchEntity(self, data)


    def Secret(self, data=None) -> "SecretEntity":
        """Entity factory: client.Secret().list() / client.Secret().load({"id": ...})."""
        from stripe_sdk.entity.secret_entity import SecretEntity
        return SecretEntity(self, data)


    def Session(self, data=None) -> "SessionEntity":
        """Entity factory: client.Session().list() / client.Session().load({"id": ...})."""
        from stripe_sdk.entity.session_entity import SessionEntity
        return SessionEntity(self, data)


    def Setting(self, data=None) -> "SettingEntity":
        """Entity factory: client.Setting().list() / client.Setting().load({"id": ...})."""
        from stripe_sdk.entity.setting_entity import SettingEntity
        return SettingEntity(self, data)


    def Settlement(self, data=None) -> "SettlementEntity":
        """Entity factory: client.Settlement().list() / client.Settlement().load({"id": ...})."""
        from stripe_sdk.entity.settlement_entity import SettlementEntity
        return SettlementEntity(self, data)


    def SetupAttempt(self, data=None) -> "SetupAttemptEntity":
        """Entity factory: client.SetupAttempt().list() / client.SetupAttempt().load({"id": ...})."""
        from stripe_sdk.entity.setup_attempt_entity import SetupAttemptEntity
        return SetupAttemptEntity(self, data)


    def SetupIntent(self, data=None) -> "SetupIntentEntity":
        """Entity factory: client.SetupIntent().list() / client.SetupIntent().load({"id": ...})."""
        from stripe_sdk.entity.setup_intent_entity import SetupIntentEntity
        return SetupIntentEntity(self, data)


    def ShippingRate(self, data=None) -> "ShippingRateEntity":
        """Entity factory: client.ShippingRate().list() / client.ShippingRate().load({"id": ...})."""
        from stripe_sdk.entity.shipping_rate_entity import ShippingRateEntity
        return ShippingRateEntity(self, data)


    def SigmaApiQuery(self, data=None) -> "SigmaApiQueryEntity":
        """Entity factory: client.SigmaApiQuery().list() / client.SigmaApiQuery().load({"id": ...})."""
        from stripe_sdk.entity.sigma_api_query_entity import SigmaApiQueryEntity
        return SigmaApiQueryEntity(self, data)


    def Source(self, data=None) -> "SourceEntity":
        """Entity factory: client.Source().list() / client.Source().load({"id": ...})."""
        from stripe_sdk.entity.source_entity import SourceEntity
        return SourceEntity(self, data)


    def SourceMandateNotification(self, data=None) -> "SourceMandateNotificationEntity":
        """Entity factory: client.SourceMandateNotification().list() / client.SourceMandateNotification().load({"id": ...})."""
        from stripe_sdk.entity.source_mandate_notification_entity import SourceMandateNotificationEntity
        return SourceMandateNotificationEntity(self, data)


    def SourceTransaction(self, data=None) -> "SourceTransactionEntity":
        """Entity factory: client.SourceTransaction().list() / client.SourceTransaction().load({"id": ...})."""
        from stripe_sdk.entity.source_transaction_entity import SourceTransactionEntity
        return SourceTransactionEntity(self, data)


    def Subscription(self, data=None) -> "SubscriptionEntity":
        """Entity factory: client.Subscription().list() / client.Subscription().load({"id": ...})."""
        from stripe_sdk.entity.subscription_entity import SubscriptionEntity
        return SubscriptionEntity(self, data)


    def SubscriptionItem(self, data=None) -> "SubscriptionItemEntity":
        """Entity factory: client.SubscriptionItem().list() / client.SubscriptionItem().load({"id": ...})."""
        from stripe_sdk.entity.subscription_item_entity import SubscriptionItemEntity
        return SubscriptionItemEntity(self, data)


    def SubscriptionSchedule(self, data=None) -> "SubscriptionScheduleEntity":
        """Entity factory: client.SubscriptionSchedule().list() / client.SubscriptionSchedule().load({"id": ...})."""
        from stripe_sdk.entity.subscription_schedule_entity import SubscriptionScheduleEntity
        return SubscriptionScheduleEntity(self, data)


    def Supplier(self, data=None) -> "SupplierEntity":
        """Entity factory: client.Supplier().list() / client.Supplier().load({"id": ...})."""
        from stripe_sdk.entity.supplier_entity import SupplierEntity
        return SupplierEntity(self, data)


    def TaxCode(self, data=None) -> "TaxCodeEntity":
        """Entity factory: client.TaxCode().list() / client.TaxCode().load({"id": ...})."""
        from stripe_sdk.entity.tax_code_entity import TaxCodeEntity
        return TaxCodeEntity(self, data)


    def TaxId(self, data=None) -> "TaxIdEntity":
        """Entity factory: client.TaxId().list() / client.TaxId().load({"id": ...})."""
        from stripe_sdk.entity.tax_id_entity import TaxIdEntity
        return TaxIdEntity(self, data)


    def TaxRate(self, data=None) -> "TaxRateEntity":
        """Entity factory: client.TaxRate().list() / client.TaxRate().load({"id": ...})."""
        from stripe_sdk.entity.tax_rate_entity import TaxRateEntity
        return TaxRateEntity(self, data)


    def TestClock(self, data=None) -> "TestClockEntity":
        """Entity factory: client.TestClock().list() / client.TestClock().load({"id": ...})."""
        from stripe_sdk.entity.test_clock_entity import TestClockEntity
        return TestClockEntity(self, data)


    def Token(self, data=None) -> "TokenEntity":
        """Entity factory: client.Token().list() / client.Token().load({"id": ...})."""
        from stripe_sdk.entity.token_entity import TokenEntity
        return TokenEntity(self, data)


    def Topup(self, data=None) -> "TopupEntity":
        """Entity factory: client.Topup().list() / client.Topup().load({"id": ...})."""
        from stripe_sdk.entity.topup_entity import TopupEntity
        return TopupEntity(self, data)


    def Transaction(self, data=None) -> "TransactionEntity":
        """Entity factory: client.Transaction().list() / client.Transaction().load({"id": ...})."""
        from stripe_sdk.entity.transaction_entity import TransactionEntity
        return TransactionEntity(self, data)


    def TransactionEntry(self, data=None) -> "TransactionEntryEntity":
        """Entity factory: client.TransactionEntry().list() / client.TransactionEntry().load({"id": ...})."""
        from stripe_sdk.entity.transaction_entry_entity import TransactionEntryEntity
        return TransactionEntryEntity(self, data)


    def Transfer(self, data=None) -> "TransferEntity":
        """Entity factory: client.Transfer().list() / client.Transfer().load({"id": ...})."""
        from stripe_sdk.entity.transfer_entity import TransferEntity
        return TransferEntity(self, data)


    def TrialOffer(self, data=None) -> "TrialOfferEntity":
        """Entity factory: client.TrialOffer().list() / client.TrialOffer().load({"id": ...})."""
        from stripe_sdk.entity.trial_offer_entity import TrialOfferEntity
        return TrialOfferEntity(self, data)


    def ValueList(self, data=None) -> "ValueListEntity":
        """Entity factory: client.ValueList().list() / client.ValueList().load({"id": ...})."""
        from stripe_sdk.entity.value_list_entity import ValueListEntity
        return ValueListEntity(self, data)


    def ValueListItem(self, data=None) -> "ValueListItemEntity":
        """Entity factory: client.ValueListItem().list() / client.ValueListItem().load({"id": ...})."""
        from stripe_sdk.entity.value_list_item_entity import ValueListItemEntity
        return ValueListItemEntity(self, data)


    def VerificationReport(self, data=None) -> "VerificationReportEntity":
        """Entity factory: client.VerificationReport().list() / client.VerificationReport().load({"id": ...})."""
        from stripe_sdk.entity.verification_report_entity import VerificationReportEntity
        return VerificationReportEntity(self, data)


    def VerificationSession(self, data=None) -> "VerificationSessionEntity":
        """Entity factory: client.VerificationSession().list() / client.VerificationSession().load({"id": ...})."""
        from stripe_sdk.entity.verification_session_entity import VerificationSessionEntity
        return VerificationSessionEntity(self, data)


    def WebhookEndpoint(self, data=None) -> "WebhookEndpointEntity":
        """Entity factory: client.WebhookEndpoint().list() / client.WebhookEndpoint().load({"id": ...})."""
        from stripe_sdk.entity.webhook_endpoint_entity import WebhookEndpointEntity
        return WebhookEndpointEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "StripeSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from stripe_sdk.entity.account_entity import AccountEntity
    from stripe_sdk.entity.account_link_entity import AccountLinkEntity
    from stripe_sdk.entity.account_owner_entity import AccountOwnerEntity
    from stripe_sdk.entity.account_session_entity import AccountSessionEntity
    from stripe_sdk.entity.active_entitlement_entity import ActiveEntitlementEntity
    from stripe_sdk.entity.alert_entity import AlertEntity
    from stripe_sdk.entity.apple_pay_domain_entity import ApplePayDomainEntity
    from stripe_sdk.entity.application_fee_entity import ApplicationFeeEntity
    from stripe_sdk.entity.association_entity import AssociationEntity
    from stripe_sdk.entity.authentication_entity import AuthenticationEntity
    from stripe_sdk.entity.authorization_entity import AuthorizationEntity
    from stripe_sdk.entity.balance_entity import BalanceEntity
    from stripe_sdk.entity.balance_setting_entity import BalanceSettingEntity
    from stripe_sdk.entity.balance_transaction_entity import BalanceTransactionEntity
    from stripe_sdk.entity.bank_account_entity import BankAccountEntity
    from stripe_sdk.entity.calculation_entity import CalculationEntity
    from stripe_sdk.entity.capability_entity import CapabilityEntity
    from stripe_sdk.entity.card_entity import CardEntity
    from stripe_sdk.entity.cardholder_entity import CardholderEntity
    from stripe_sdk.entity.cash_balance_entity import CashBalanceEntity
    from stripe_sdk.entity.cash_balance_transaction_entity import CashBalanceTransactionEntity
    from stripe_sdk.entity.charge_entity import ChargeEntity
    from stripe_sdk.entity.configuration_entity import ConfigurationEntity
    from stripe_sdk.entity.confirmation_token_entity import ConfirmationTokenEntity
    from stripe_sdk.entity.connection_token_entity import ConnectionTokenEntity
    from stripe_sdk.entity.country_spec_entity import CountrySpecEntity
    from stripe_sdk.entity.coupon_entity import CouponEntity
    from stripe_sdk.entity.credit_balance_summary_entity import CreditBalanceSummaryEntity
    from stripe_sdk.entity.credit_balance_transaction_entity import CreditBalanceTransactionEntity
    from stripe_sdk.entity.credit_grant_entity import CreditGrantEntity
    from stripe_sdk.entity.credit_note_entity import CreditNoteEntity
    from stripe_sdk.entity.credit_note_line_entity import CreditNoteLineEntity
    from stripe_sdk.entity.credit_reversal_entity import CreditReversalEntity
    from stripe_sdk.entity.customer_entity import CustomerEntity
    from stripe_sdk.entity.customer_balance_transaction_entity import CustomerBalanceTransactionEntity
    from stripe_sdk.entity.customer_session_entity import CustomerSessionEntity
    from stripe_sdk.entity.debit_reversal_entity import DebitReversalEntity
    from stripe_sdk.entity.deleted_account_entity import DeletedAccountEntity
    from stripe_sdk.entity.deleted_apple_pay_domain_entity import DeletedApplePayDomainEntity
    from stripe_sdk.entity.deleted_coupon_entity import DeletedCouponEntity
    from stripe_sdk.entity.deleted_external_account_entity import DeletedExternalAccountEntity
    from stripe_sdk.entity.deleted_invoiceitem_entity import DeletedInvoiceitemEntity
    from stripe_sdk.entity.deleted_person_entity import DeletedPersonEntity
    from stripe_sdk.entity.deleted_plan_entity import DeletedPlanEntity
    from stripe_sdk.entity.deleted_product_feature_entity import DeletedProductFeatureEntity
    from stripe_sdk.entity.deleted_subscription_item_entity import DeletedSubscriptionItemEntity
    from stripe_sdk.entity.deleted_webhook_endpoint_entity import DeletedWebhookEndpointEntity
    from stripe_sdk.entity.discount_entity import DiscountEntity
    from stripe_sdk.entity.dispute_entity import DisputeEntity
    from stripe_sdk.entity.domain_entity import DomainEntity
    from stripe_sdk.entity.early_fraud_warning_entity import EarlyFraudWarningEntity
    from stripe_sdk.entity.ephemeral_key_entity import EphemeralKeyEntity
    from stripe_sdk.entity.event_entity import EventEntity
    from stripe_sdk.entity.exchange_rate_entity import ExchangeRateEntity
    from stripe_sdk.entity.external_account_entity import ExternalAccountEntity
    from stripe_sdk.entity.feature_entity import FeatureEntity
    from stripe_sdk.entity.feedback_option_entity import FeedbackOptionEntity
    from stripe_sdk.entity.file_entity import FileEntity
    from stripe_sdk.entity.file_link_entity import FileLinkEntity
    from stripe_sdk.entity.financial_account_entity import FinancialAccountEntity
    from stripe_sdk.entity.financial_account_feature_entity import FinancialAccountFeatureEntity
    from stripe_sdk.entity.fund_cash_balance_entity import FundCashBalanceEntity
    from stripe_sdk.entity.funding_instruction_entity import FundingInstructionEntity
    from stripe_sdk.entity.history_entity import HistoryEntity
    from stripe_sdk.entity.inbound_transfer_entity import InboundTransferEntity
    from stripe_sdk.entity.install_entity import InstallEntity
    from stripe_sdk.entity.invoice_entity import InvoiceEntity
    from stripe_sdk.entity.invoice_payment_entity import InvoicePaymentEntity
    from stripe_sdk.entity.invoice_rendering_template_entity import InvoiceRenderingTemplateEntity
    from stripe_sdk.entity.invoiceitem_entity import InvoiceitemEntity
    from stripe_sdk.entity.line_entity import LineEntity
    from stripe_sdk.entity.line_item_entity import LineItemEntity
    from stripe_sdk.entity.linked_account_entity import LinkedAccountEntity
    from stripe_sdk.entity.linked_account_owner_entity import LinkedAccountOwnerEntity
    from stripe_sdk.entity.location_entity import LocationEntity
    from stripe_sdk.entity.login_link_entity import LoginLinkEntity
    from stripe_sdk.entity.mandate_entity import MandateEntity
    from stripe_sdk.entity.meter_entity import MeterEntity
    from stripe_sdk.entity.meter_event_entity import MeterEventEntity
    from stripe_sdk.entity.meter_event_adjustment_entity import MeterEventAdjustmentEntity
    from stripe_sdk.entity.meter_event_summary_entity import MeterEventSummaryEntity
    from stripe_sdk.entity.onboarding_link_entity import OnboardingLinkEntity
    from stripe_sdk.entity.order_entity import OrderEntity
    from stripe_sdk.entity.outbound_payment_entity import OutboundPaymentEntity
    from stripe_sdk.entity.outbound_transfer_entity import OutboundTransferEntity
    from stripe_sdk.entity.payment_attempt_record_entity import PaymentAttemptRecordEntity
    from stripe_sdk.entity.payment_evaluation_entity import PaymentEvaluationEntity
    from stripe_sdk.entity.payment_intent_entity import PaymentIntentEntity
    from stripe_sdk.entity.payment_intent_amount_details_line_item_entity import PaymentIntentAmountDetailsLineItemEntity
    from stripe_sdk.entity.payment_link_entity import PaymentLinkEntity
    from stripe_sdk.entity.payment_method_entity import PaymentMethodEntity
    from stripe_sdk.entity.payment_method_configuration_entity import PaymentMethodConfigurationEntity
    from stripe_sdk.entity.payment_method_domain_entity import PaymentMethodDomainEntity
    from stripe_sdk.entity.payment_record_entity import PaymentRecordEntity
    from stripe_sdk.entity.payout_entity import PayoutEntity
    from stripe_sdk.entity.person_entity import PersonEntity
    from stripe_sdk.entity.personalization_design_entity import PersonalizationDesignEntity
    from stripe_sdk.entity.physical_bundle_entity import PhysicalBundleEntity
    from stripe_sdk.entity.plan_entity import PlanEntity
    from stripe_sdk.entity.price_entity import PriceEntity
    from stripe_sdk.entity.product_entity import ProductEntity
    from stripe_sdk.entity.product_feature_entity import ProductFeatureEntity
    from stripe_sdk.entity.promotion_code_entity import PromotionCodeEntity
    from stripe_sdk.entity.quote_entity import QuoteEntity
    from stripe_sdk.entity.quote_computed_upfront_line_item_entity import QuoteComputedUpfrontLineItemEntity
    from stripe_sdk.entity.quote_pdf_entity import QuotePdfEntity
    from stripe_sdk.entity.reader_entity import ReaderEntity
    from stripe_sdk.entity.received_credit_entity import ReceivedCreditEntity
    from stripe_sdk.entity.received_debit_entity import ReceivedDebitEntity
    from stripe_sdk.entity.refund_entity import RefundEntity
    from stripe_sdk.entity.registration_entity import RegistrationEntity
    from stripe_sdk.entity.report_run_entity import ReportRunEntity
    from stripe_sdk.entity.report_type_entity import ReportTypeEntity
    from stripe_sdk.entity.request_entity import RequestEntity
    from stripe_sdk.entity.reversal_entity import ReversalEntity
    from stripe_sdk.entity.review_entity import ReviewEntity
    from stripe_sdk.entity.scheduled_query_run_entity import ScheduledQueryRunEntity
    from stripe_sdk.entity.search_entity import SearchEntity
    from stripe_sdk.entity.secret_entity import SecretEntity
    from stripe_sdk.entity.session_entity import SessionEntity
    from stripe_sdk.entity.setting_entity import SettingEntity
    from stripe_sdk.entity.settlement_entity import SettlementEntity
    from stripe_sdk.entity.setup_attempt_entity import SetupAttemptEntity
    from stripe_sdk.entity.setup_intent_entity import SetupIntentEntity
    from stripe_sdk.entity.shipping_rate_entity import ShippingRateEntity
    from stripe_sdk.entity.sigma_api_query_entity import SigmaApiQueryEntity
    from stripe_sdk.entity.source_entity import SourceEntity
    from stripe_sdk.entity.source_mandate_notification_entity import SourceMandateNotificationEntity
    from stripe_sdk.entity.source_transaction_entity import SourceTransactionEntity
    from stripe_sdk.entity.subscription_entity import SubscriptionEntity
    from stripe_sdk.entity.subscription_item_entity import SubscriptionItemEntity
    from stripe_sdk.entity.subscription_schedule_entity import SubscriptionScheduleEntity
    from stripe_sdk.entity.supplier_entity import SupplierEntity
    from stripe_sdk.entity.tax_code_entity import TaxCodeEntity
    from stripe_sdk.entity.tax_id_entity import TaxIdEntity
    from stripe_sdk.entity.tax_rate_entity import TaxRateEntity
    from stripe_sdk.entity.test_clock_entity import TestClockEntity
    from stripe_sdk.entity.token_entity import TokenEntity
    from stripe_sdk.entity.topup_entity import TopupEntity
    from stripe_sdk.entity.transaction_entity import TransactionEntity
    from stripe_sdk.entity.transaction_entry_entity import TransactionEntryEntity
    from stripe_sdk.entity.transfer_entity import TransferEntity
    from stripe_sdk.entity.trial_offer_entity import TrialOfferEntity
    from stripe_sdk.entity.value_list_entity import ValueListEntity
    from stripe_sdk.entity.value_list_item_entity import ValueListItemEntity
    from stripe_sdk.entity.verification_report_entity import VerificationReportEntity
    from stripe_sdk.entity.verification_session_entity import VerificationSessionEntity
    from stripe_sdk.entity.webhook_endpoint_entity import WebhookEndpointEntity
