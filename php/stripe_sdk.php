<?php
declare(strict_types=1);

// Stripe SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class StripeSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new StripeUtility();
        $this->_utility = $utility;

        $config = StripeConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = StripeHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = StripeHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!StripeFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, StripeFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return StripeUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = StripeHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = StripeHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = StripeHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new StripeSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new StripeError($op . "_allow",
                "StripeSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = StripeHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = StripeHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new StripeError("graphql_error",
                "StripeSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_account = null;

    // Canonical facade: $client->Account()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account()
    // resolves here too.
    public function Account($data = null)
    {
        require_once __DIR__ . '/entity/account_entity.php';
        if ($data === null) {
            if ($this->_account === null) {
                $this->_account = new AccountEntity($this, null);
            }
            return $this->_account;
        }
        return new AccountEntity($this, $data);
    }


    private $_account_link = null;

    // Canonical facade: $client->AccountLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account_link()
    // resolves here too.
    public function AccountLink($data = null)
    {
        require_once __DIR__ . '/entity/account_link_entity.php';
        if ($data === null) {
            if ($this->_account_link === null) {
                $this->_account_link = new AccountLinkEntity($this, null);
            }
            return $this->_account_link;
        }
        return new AccountLinkEntity($this, $data);
    }


    private $_account_owner = null;

    // Canonical facade: $client->AccountOwner()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account_owner()
    // resolves here too.
    public function AccountOwner($data = null)
    {
        require_once __DIR__ . '/entity/account_owner_entity.php';
        if ($data === null) {
            if ($this->_account_owner === null) {
                $this->_account_owner = new AccountOwnerEntity($this, null);
            }
            return $this->_account_owner;
        }
        return new AccountOwnerEntity($this, $data);
    }


    private $_account_session = null;

    // Canonical facade: $client->AccountSession()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account_session()
    // resolves here too.
    public function AccountSession($data = null)
    {
        require_once __DIR__ . '/entity/account_session_entity.php';
        if ($data === null) {
            if ($this->_account_session === null) {
                $this->_account_session = new AccountSessionEntity($this, null);
            }
            return $this->_account_session;
        }
        return new AccountSessionEntity($this, $data);
    }


    private $_active_entitlement = null;

    // Canonical facade: $client->ActiveEntitlement()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->active_entitlement()
    // resolves here too.
    public function ActiveEntitlement($data = null)
    {
        require_once __DIR__ . '/entity/active_entitlement_entity.php';
        if ($data === null) {
            if ($this->_active_entitlement === null) {
                $this->_active_entitlement = new ActiveEntitlementEntity($this, null);
            }
            return $this->_active_entitlement;
        }
        return new ActiveEntitlementEntity($this, $data);
    }


    private $_alert = null;

    // Canonical facade: $client->Alert()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->alert()
    // resolves here too.
    public function Alert($data = null)
    {
        require_once __DIR__ . '/entity/alert_entity.php';
        if ($data === null) {
            if ($this->_alert === null) {
                $this->_alert = new AlertEntity($this, null);
            }
            return $this->_alert;
        }
        return new AlertEntity($this, $data);
    }


    private $_apple_pay_domain = null;

    // Canonical facade: $client->ApplePayDomain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->apple_pay_domain()
    // resolves here too.
    public function ApplePayDomain($data = null)
    {
        require_once __DIR__ . '/entity/apple_pay_domain_entity.php';
        if ($data === null) {
            if ($this->_apple_pay_domain === null) {
                $this->_apple_pay_domain = new ApplePayDomainEntity($this, null);
            }
            return $this->_apple_pay_domain;
        }
        return new ApplePayDomainEntity($this, $data);
    }


    private $_application_fee = null;

    // Canonical facade: $client->ApplicationFee()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->application_fee()
    // resolves here too.
    public function ApplicationFee($data = null)
    {
        require_once __DIR__ . '/entity/application_fee_entity.php';
        if ($data === null) {
            if ($this->_application_fee === null) {
                $this->_application_fee = new ApplicationFeeEntity($this, null);
            }
            return $this->_application_fee;
        }
        return new ApplicationFeeEntity($this, $data);
    }


    private $_association = null;

    // Canonical facade: $client->Association()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->association()
    // resolves here too.
    public function Association($data = null)
    {
        require_once __DIR__ . '/entity/association_entity.php';
        if ($data === null) {
            if ($this->_association === null) {
                $this->_association = new AssociationEntity($this, null);
            }
            return $this->_association;
        }
        return new AssociationEntity($this, $data);
    }


    private $_authentication = null;

    // Canonical facade: $client->Authentication()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->authentication()
    // resolves here too.
    public function Authentication($data = null)
    {
        require_once __DIR__ . '/entity/authentication_entity.php';
        if ($data === null) {
            if ($this->_authentication === null) {
                $this->_authentication = new AuthenticationEntity($this, null);
            }
            return $this->_authentication;
        }
        return new AuthenticationEntity($this, $data);
    }


    private $_authorization = null;

    // Canonical facade: $client->Authorization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->authorization()
    // resolves here too.
    public function Authorization($data = null)
    {
        require_once __DIR__ . '/entity/authorization_entity.php';
        if ($data === null) {
            if ($this->_authorization === null) {
                $this->_authorization = new AuthorizationEntity($this, null);
            }
            return $this->_authorization;
        }
        return new AuthorizationEntity($this, $data);
    }


    private $_balance = null;

    // Canonical facade: $client->Balance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->balance()
    // resolves here too.
    public function Balance($data = null)
    {
        require_once __DIR__ . '/entity/balance_entity.php';
        if ($data === null) {
            if ($this->_balance === null) {
                $this->_balance = new BalanceEntity($this, null);
            }
            return $this->_balance;
        }
        return new BalanceEntity($this, $data);
    }


    private $_balance_setting = null;

    // Canonical facade: $client->BalanceSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->balance_setting()
    // resolves here too.
    public function BalanceSetting($data = null)
    {
        require_once __DIR__ . '/entity/balance_setting_entity.php';
        if ($data === null) {
            if ($this->_balance_setting === null) {
                $this->_balance_setting = new BalanceSettingEntity($this, null);
            }
            return $this->_balance_setting;
        }
        return new BalanceSettingEntity($this, $data);
    }


    private $_balance_transaction = null;

    // Canonical facade: $client->BalanceTransaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->balance_transaction()
    // resolves here too.
    public function BalanceTransaction($data = null)
    {
        require_once __DIR__ . '/entity/balance_transaction_entity.php';
        if ($data === null) {
            if ($this->_balance_transaction === null) {
                $this->_balance_transaction = new BalanceTransactionEntity($this, null);
            }
            return $this->_balance_transaction;
        }
        return new BalanceTransactionEntity($this, $data);
    }


    private $_bank_account = null;

    // Canonical facade: $client->BankAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bank_account()
    // resolves here too.
    public function BankAccount($data = null)
    {
        require_once __DIR__ . '/entity/bank_account_entity.php';
        if ($data === null) {
            if ($this->_bank_account === null) {
                $this->_bank_account = new BankAccountEntity($this, null);
            }
            return $this->_bank_account;
        }
        return new BankAccountEntity($this, $data);
    }


    private $_calculation = null;

    // Canonical facade: $client->Calculation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->calculation()
    // resolves here too.
    public function Calculation($data = null)
    {
        require_once __DIR__ . '/entity/calculation_entity.php';
        if ($data === null) {
            if ($this->_calculation === null) {
                $this->_calculation = new CalculationEntity($this, null);
            }
            return $this->_calculation;
        }
        return new CalculationEntity($this, $data);
    }


    private $_capability = null;

    // Canonical facade: $client->Capability()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->capability()
    // resolves here too.
    public function Capability($data = null)
    {
        require_once __DIR__ . '/entity/capability_entity.php';
        if ($data === null) {
            if ($this->_capability === null) {
                $this->_capability = new CapabilityEntity($this, null);
            }
            return $this->_capability;
        }
        return new CapabilityEntity($this, $data);
    }


    private $_card = null;

    // Canonical facade: $client->Card()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->card()
    // resolves here too.
    public function Card($data = null)
    {
        require_once __DIR__ . '/entity/card_entity.php';
        if ($data === null) {
            if ($this->_card === null) {
                $this->_card = new CardEntity($this, null);
            }
            return $this->_card;
        }
        return new CardEntity($this, $data);
    }


    private $_cardholder = null;

    // Canonical facade: $client->Cardholder()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cardholder()
    // resolves here too.
    public function Cardholder($data = null)
    {
        require_once __DIR__ . '/entity/cardholder_entity.php';
        if ($data === null) {
            if ($this->_cardholder === null) {
                $this->_cardholder = new CardholderEntity($this, null);
            }
            return $this->_cardholder;
        }
        return new CardholderEntity($this, $data);
    }


    private $_cash_balance = null;

    // Canonical facade: $client->CashBalance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cash_balance()
    // resolves here too.
    public function CashBalance($data = null)
    {
        require_once __DIR__ . '/entity/cash_balance_entity.php';
        if ($data === null) {
            if ($this->_cash_balance === null) {
                $this->_cash_balance = new CashBalanceEntity($this, null);
            }
            return $this->_cash_balance;
        }
        return new CashBalanceEntity($this, $data);
    }


    private $_cash_balance_transaction = null;

    // Canonical facade: $client->CashBalanceTransaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cash_balance_transaction()
    // resolves here too.
    public function CashBalanceTransaction($data = null)
    {
        require_once __DIR__ . '/entity/cash_balance_transaction_entity.php';
        if ($data === null) {
            if ($this->_cash_balance_transaction === null) {
                $this->_cash_balance_transaction = new CashBalanceTransactionEntity($this, null);
            }
            return $this->_cash_balance_transaction;
        }
        return new CashBalanceTransactionEntity($this, $data);
    }


    private $_charge = null;

    // Canonical facade: $client->Charge()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->charge()
    // resolves here too.
    public function Charge($data = null)
    {
        require_once __DIR__ . '/entity/charge_entity.php';
        if ($data === null) {
            if ($this->_charge === null) {
                $this->_charge = new ChargeEntity($this, null);
            }
            return $this->_charge;
        }
        return new ChargeEntity($this, $data);
    }


    private $_configuration = null;

    // Canonical facade: $client->Configuration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->configuration()
    // resolves here too.
    public function Configuration($data = null)
    {
        require_once __DIR__ . '/entity/configuration_entity.php';
        if ($data === null) {
            if ($this->_configuration === null) {
                $this->_configuration = new ConfigurationEntity($this, null);
            }
            return $this->_configuration;
        }
        return new ConfigurationEntity($this, $data);
    }


    private $_confirmation_token = null;

    // Canonical facade: $client->ConfirmationToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->confirmation_token()
    // resolves here too.
    public function ConfirmationToken($data = null)
    {
        require_once __DIR__ . '/entity/confirmation_token_entity.php';
        if ($data === null) {
            if ($this->_confirmation_token === null) {
                $this->_confirmation_token = new ConfirmationTokenEntity($this, null);
            }
            return $this->_confirmation_token;
        }
        return new ConfirmationTokenEntity($this, $data);
    }


    private $_connection_token = null;

    // Canonical facade: $client->ConnectionToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->connection_token()
    // resolves here too.
    public function ConnectionToken($data = null)
    {
        require_once __DIR__ . '/entity/connection_token_entity.php';
        if ($data === null) {
            if ($this->_connection_token === null) {
                $this->_connection_token = new ConnectionTokenEntity($this, null);
            }
            return $this->_connection_token;
        }
        return new ConnectionTokenEntity($this, $data);
    }


    private $_country_spec = null;

    // Canonical facade: $client->CountrySpec()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->country_spec()
    // resolves here too.
    public function CountrySpec($data = null)
    {
        require_once __DIR__ . '/entity/country_spec_entity.php';
        if ($data === null) {
            if ($this->_country_spec === null) {
                $this->_country_spec = new CountrySpecEntity($this, null);
            }
            return $this->_country_spec;
        }
        return new CountrySpecEntity($this, $data);
    }


    private $_coupon = null;

    // Canonical facade: $client->Coupon()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->coupon()
    // resolves here too.
    public function Coupon($data = null)
    {
        require_once __DIR__ . '/entity/coupon_entity.php';
        if ($data === null) {
            if ($this->_coupon === null) {
                $this->_coupon = new CouponEntity($this, null);
            }
            return $this->_coupon;
        }
        return new CouponEntity($this, $data);
    }


    private $_credit_balance_summary = null;

    // Canonical facade: $client->CreditBalanceSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->credit_balance_summary()
    // resolves here too.
    public function CreditBalanceSummary($data = null)
    {
        require_once __DIR__ . '/entity/credit_balance_summary_entity.php';
        if ($data === null) {
            if ($this->_credit_balance_summary === null) {
                $this->_credit_balance_summary = new CreditBalanceSummaryEntity($this, null);
            }
            return $this->_credit_balance_summary;
        }
        return new CreditBalanceSummaryEntity($this, $data);
    }


    private $_credit_balance_transaction = null;

    // Canonical facade: $client->CreditBalanceTransaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->credit_balance_transaction()
    // resolves here too.
    public function CreditBalanceTransaction($data = null)
    {
        require_once __DIR__ . '/entity/credit_balance_transaction_entity.php';
        if ($data === null) {
            if ($this->_credit_balance_transaction === null) {
                $this->_credit_balance_transaction = new CreditBalanceTransactionEntity($this, null);
            }
            return $this->_credit_balance_transaction;
        }
        return new CreditBalanceTransactionEntity($this, $data);
    }


    private $_credit_grant = null;

    // Canonical facade: $client->CreditGrant()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->credit_grant()
    // resolves here too.
    public function CreditGrant($data = null)
    {
        require_once __DIR__ . '/entity/credit_grant_entity.php';
        if ($data === null) {
            if ($this->_credit_grant === null) {
                $this->_credit_grant = new CreditGrantEntity($this, null);
            }
            return $this->_credit_grant;
        }
        return new CreditGrantEntity($this, $data);
    }


    private $_credit_note = null;

    // Canonical facade: $client->CreditNote()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->credit_note()
    // resolves here too.
    public function CreditNote($data = null)
    {
        require_once __DIR__ . '/entity/credit_note_entity.php';
        if ($data === null) {
            if ($this->_credit_note === null) {
                $this->_credit_note = new CreditNoteEntity($this, null);
            }
            return $this->_credit_note;
        }
        return new CreditNoteEntity($this, $data);
    }


    private $_credit_note_line = null;

    // Canonical facade: $client->CreditNoteLine()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->credit_note_line()
    // resolves here too.
    public function CreditNoteLine($data = null)
    {
        require_once __DIR__ . '/entity/credit_note_line_entity.php';
        if ($data === null) {
            if ($this->_credit_note_line === null) {
                $this->_credit_note_line = new CreditNoteLineEntity($this, null);
            }
            return $this->_credit_note_line;
        }
        return new CreditNoteLineEntity($this, $data);
    }


    private $_credit_reversal = null;

    // Canonical facade: $client->CreditReversal()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->credit_reversal()
    // resolves here too.
    public function CreditReversal($data = null)
    {
        require_once __DIR__ . '/entity/credit_reversal_entity.php';
        if ($data === null) {
            if ($this->_credit_reversal === null) {
                $this->_credit_reversal = new CreditReversalEntity($this, null);
            }
            return $this->_credit_reversal;
        }
        return new CreditReversalEntity($this, $data);
    }


    private $_customer = null;

    // Canonical facade: $client->Customer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer()
    // resolves here too.
    public function Customer($data = null)
    {
        require_once __DIR__ . '/entity/customer_entity.php';
        if ($data === null) {
            if ($this->_customer === null) {
                $this->_customer = new CustomerEntity($this, null);
            }
            return $this->_customer;
        }
        return new CustomerEntity($this, $data);
    }


    private $_customer_balance_transaction = null;

    // Canonical facade: $client->CustomerBalanceTransaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer_balance_transaction()
    // resolves here too.
    public function CustomerBalanceTransaction($data = null)
    {
        require_once __DIR__ . '/entity/customer_balance_transaction_entity.php';
        if ($data === null) {
            if ($this->_customer_balance_transaction === null) {
                $this->_customer_balance_transaction = new CustomerBalanceTransactionEntity($this, null);
            }
            return $this->_customer_balance_transaction;
        }
        return new CustomerBalanceTransactionEntity($this, $data);
    }


    private $_customer_session = null;

    // Canonical facade: $client->CustomerSession()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer_session()
    // resolves here too.
    public function CustomerSession($data = null)
    {
        require_once __DIR__ . '/entity/customer_session_entity.php';
        if ($data === null) {
            if ($this->_customer_session === null) {
                $this->_customer_session = new CustomerSessionEntity($this, null);
            }
            return $this->_customer_session;
        }
        return new CustomerSessionEntity($this, $data);
    }


    private $_debit_reversal = null;

    // Canonical facade: $client->DebitReversal()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->debit_reversal()
    // resolves here too.
    public function DebitReversal($data = null)
    {
        require_once __DIR__ . '/entity/debit_reversal_entity.php';
        if ($data === null) {
            if ($this->_debit_reversal === null) {
                $this->_debit_reversal = new DebitReversalEntity($this, null);
            }
            return $this->_debit_reversal;
        }
        return new DebitReversalEntity($this, $data);
    }


    private $_deleted_account = null;

    // Canonical facade: $client->DeletedAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_account()
    // resolves here too.
    public function DeletedAccount($data = null)
    {
        require_once __DIR__ . '/entity/deleted_account_entity.php';
        if ($data === null) {
            if ($this->_deleted_account === null) {
                $this->_deleted_account = new DeletedAccountEntity($this, null);
            }
            return $this->_deleted_account;
        }
        return new DeletedAccountEntity($this, $data);
    }


    private $_deleted_apple_pay_domain = null;

    // Canonical facade: $client->DeletedApplePayDomain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_apple_pay_domain()
    // resolves here too.
    public function DeletedApplePayDomain($data = null)
    {
        require_once __DIR__ . '/entity/deleted_apple_pay_domain_entity.php';
        if ($data === null) {
            if ($this->_deleted_apple_pay_domain === null) {
                $this->_deleted_apple_pay_domain = new DeletedApplePayDomainEntity($this, null);
            }
            return $this->_deleted_apple_pay_domain;
        }
        return new DeletedApplePayDomainEntity($this, $data);
    }


    private $_deleted_coupon = null;

    // Canonical facade: $client->DeletedCoupon()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_coupon()
    // resolves here too.
    public function DeletedCoupon($data = null)
    {
        require_once __DIR__ . '/entity/deleted_coupon_entity.php';
        if ($data === null) {
            if ($this->_deleted_coupon === null) {
                $this->_deleted_coupon = new DeletedCouponEntity($this, null);
            }
            return $this->_deleted_coupon;
        }
        return new DeletedCouponEntity($this, $data);
    }


    private $_deleted_external_account = null;

    // Canonical facade: $client->DeletedExternalAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_external_account()
    // resolves here too.
    public function DeletedExternalAccount($data = null)
    {
        require_once __DIR__ . '/entity/deleted_external_account_entity.php';
        if ($data === null) {
            if ($this->_deleted_external_account === null) {
                $this->_deleted_external_account = new DeletedExternalAccountEntity($this, null);
            }
            return $this->_deleted_external_account;
        }
        return new DeletedExternalAccountEntity($this, $data);
    }


    private $_deleted_invoiceitem = null;

    // Canonical facade: $client->DeletedInvoiceitem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_invoiceitem()
    // resolves here too.
    public function DeletedInvoiceitem($data = null)
    {
        require_once __DIR__ . '/entity/deleted_invoiceitem_entity.php';
        if ($data === null) {
            if ($this->_deleted_invoiceitem === null) {
                $this->_deleted_invoiceitem = new DeletedInvoiceitemEntity($this, null);
            }
            return $this->_deleted_invoiceitem;
        }
        return new DeletedInvoiceitemEntity($this, $data);
    }


    private $_deleted_person = null;

    // Canonical facade: $client->DeletedPerson()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_person()
    // resolves here too.
    public function DeletedPerson($data = null)
    {
        require_once __DIR__ . '/entity/deleted_person_entity.php';
        if ($data === null) {
            if ($this->_deleted_person === null) {
                $this->_deleted_person = new DeletedPersonEntity($this, null);
            }
            return $this->_deleted_person;
        }
        return new DeletedPersonEntity($this, $data);
    }


    private $_deleted_plan = null;

    // Canonical facade: $client->DeletedPlan()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_plan()
    // resolves here too.
    public function DeletedPlan($data = null)
    {
        require_once __DIR__ . '/entity/deleted_plan_entity.php';
        if ($data === null) {
            if ($this->_deleted_plan === null) {
                $this->_deleted_plan = new DeletedPlanEntity($this, null);
            }
            return $this->_deleted_plan;
        }
        return new DeletedPlanEntity($this, $data);
    }


    private $_deleted_product_feature = null;

    // Canonical facade: $client->DeletedProductFeature()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_product_feature()
    // resolves here too.
    public function DeletedProductFeature($data = null)
    {
        require_once __DIR__ . '/entity/deleted_product_feature_entity.php';
        if ($data === null) {
            if ($this->_deleted_product_feature === null) {
                $this->_deleted_product_feature = new DeletedProductFeatureEntity($this, null);
            }
            return $this->_deleted_product_feature;
        }
        return new DeletedProductFeatureEntity($this, $data);
    }


    private $_deleted_subscription_item = null;

    // Canonical facade: $client->DeletedSubscriptionItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_subscription_item()
    // resolves here too.
    public function DeletedSubscriptionItem($data = null)
    {
        require_once __DIR__ . '/entity/deleted_subscription_item_entity.php';
        if ($data === null) {
            if ($this->_deleted_subscription_item === null) {
                $this->_deleted_subscription_item = new DeletedSubscriptionItemEntity($this, null);
            }
            return $this->_deleted_subscription_item;
        }
        return new DeletedSubscriptionItemEntity($this, $data);
    }


    private $_deleted_webhook_endpoint = null;

    // Canonical facade: $client->DeletedWebhookEndpoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deleted_webhook_endpoint()
    // resolves here too.
    public function DeletedWebhookEndpoint($data = null)
    {
        require_once __DIR__ . '/entity/deleted_webhook_endpoint_entity.php';
        if ($data === null) {
            if ($this->_deleted_webhook_endpoint === null) {
                $this->_deleted_webhook_endpoint = new DeletedWebhookEndpointEntity($this, null);
            }
            return $this->_deleted_webhook_endpoint;
        }
        return new DeletedWebhookEndpointEntity($this, $data);
    }


    private $_discount = null;

    // Canonical facade: $client->Discount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->discount()
    // resolves here too.
    public function Discount($data = null)
    {
        require_once __DIR__ . '/entity/discount_entity.php';
        if ($data === null) {
            if ($this->_discount === null) {
                $this->_discount = new DiscountEntity($this, null);
            }
            return $this->_discount;
        }
        return new DiscountEntity($this, $data);
    }


    private $_dispute = null;

    // Canonical facade: $client->Dispute()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dispute()
    // resolves here too.
    public function Dispute($data = null)
    {
        require_once __DIR__ . '/entity/dispute_entity.php';
        if ($data === null) {
            if ($this->_dispute === null) {
                $this->_dispute = new DisputeEntity($this, null);
            }
            return $this->_dispute;
        }
        return new DisputeEntity($this, $data);
    }


    private $_domain = null;

    // Canonical facade: $client->Domain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->domain()
    // resolves here too.
    public function Domain($data = null)
    {
        require_once __DIR__ . '/entity/domain_entity.php';
        if ($data === null) {
            if ($this->_domain === null) {
                $this->_domain = new DomainEntity($this, null);
            }
            return $this->_domain;
        }
        return new DomainEntity($this, $data);
    }


    private $_early_fraud_warning = null;

    // Canonical facade: $client->EarlyFraudWarning()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->early_fraud_warning()
    // resolves here too.
    public function EarlyFraudWarning($data = null)
    {
        require_once __DIR__ . '/entity/early_fraud_warning_entity.php';
        if ($data === null) {
            if ($this->_early_fraud_warning === null) {
                $this->_early_fraud_warning = new EarlyFraudWarningEntity($this, null);
            }
            return $this->_early_fraud_warning;
        }
        return new EarlyFraudWarningEntity($this, $data);
    }


    private $_ephemeral_key = null;

    // Canonical facade: $client->EphemeralKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ephemeral_key()
    // resolves here too.
    public function EphemeralKey($data = null)
    {
        require_once __DIR__ . '/entity/ephemeral_key_entity.php';
        if ($data === null) {
            if ($this->_ephemeral_key === null) {
                $this->_ephemeral_key = new EphemeralKeyEntity($this, null);
            }
            return $this->_ephemeral_key;
        }
        return new EphemeralKeyEntity($this, $data);
    }


    private $_event = null;

    // Canonical facade: $client->Event()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->event()
    // resolves here too.
    public function Event($data = null)
    {
        require_once __DIR__ . '/entity/event_entity.php';
        if ($data === null) {
            if ($this->_event === null) {
                $this->_event = new EventEntity($this, null);
            }
            return $this->_event;
        }
        return new EventEntity($this, $data);
    }


    private $_exchange_rate = null;

    // Canonical facade: $client->ExchangeRate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->exchange_rate()
    // resolves here too.
    public function ExchangeRate($data = null)
    {
        require_once __DIR__ . '/entity/exchange_rate_entity.php';
        if ($data === null) {
            if ($this->_exchange_rate === null) {
                $this->_exchange_rate = new ExchangeRateEntity($this, null);
            }
            return $this->_exchange_rate;
        }
        return new ExchangeRateEntity($this, $data);
    }


    private $_external_account = null;

    // Canonical facade: $client->ExternalAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->external_account()
    // resolves here too.
    public function ExternalAccount($data = null)
    {
        require_once __DIR__ . '/entity/external_account_entity.php';
        if ($data === null) {
            if ($this->_external_account === null) {
                $this->_external_account = new ExternalAccountEntity($this, null);
            }
            return $this->_external_account;
        }
        return new ExternalAccountEntity($this, $data);
    }


    private $_feature = null;

    // Canonical facade: $client->Feature()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->feature()
    // resolves here too.
    public function Feature($data = null)
    {
        require_once __DIR__ . '/entity/feature_entity.php';
        if ($data === null) {
            if ($this->_feature === null) {
                $this->_feature = new FeatureEntity($this, null);
            }
            return $this->_feature;
        }
        return new FeatureEntity($this, $data);
    }


    private $_feedback_option = null;

    // Canonical facade: $client->FeedbackOption()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->feedback_option()
    // resolves here too.
    public function FeedbackOption($data = null)
    {
        require_once __DIR__ . '/entity/feedback_option_entity.php';
        if ($data === null) {
            if ($this->_feedback_option === null) {
                $this->_feedback_option = new FeedbackOptionEntity($this, null);
            }
            return $this->_feedback_option;
        }
        return new FeedbackOptionEntity($this, $data);
    }


    private $_file = null;

    // Canonical facade: $client->File()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->file()
    // resolves here too.
    public function File($data = null)
    {
        require_once __DIR__ . '/entity/file_entity.php';
        if ($data === null) {
            if ($this->_file === null) {
                $this->_file = new FileEntity($this, null);
            }
            return $this->_file;
        }
        return new FileEntity($this, $data);
    }


    private $_file_link = null;

    // Canonical facade: $client->FileLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->file_link()
    // resolves here too.
    public function FileLink($data = null)
    {
        require_once __DIR__ . '/entity/file_link_entity.php';
        if ($data === null) {
            if ($this->_file_link === null) {
                $this->_file_link = new FileLinkEntity($this, null);
            }
            return $this->_file_link;
        }
        return new FileLinkEntity($this, $data);
    }


    private $_financial_account = null;

    // Canonical facade: $client->FinancialAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->financial_account()
    // resolves here too.
    public function FinancialAccount($data = null)
    {
        require_once __DIR__ . '/entity/financial_account_entity.php';
        if ($data === null) {
            if ($this->_financial_account === null) {
                $this->_financial_account = new FinancialAccountEntity($this, null);
            }
            return $this->_financial_account;
        }
        return new FinancialAccountEntity($this, $data);
    }


    private $_financial_account_feature = null;

    // Canonical facade: $client->FinancialAccountFeature()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->financial_account_feature()
    // resolves here too.
    public function FinancialAccountFeature($data = null)
    {
        require_once __DIR__ . '/entity/financial_account_feature_entity.php';
        if ($data === null) {
            if ($this->_financial_account_feature === null) {
                $this->_financial_account_feature = new FinancialAccountFeatureEntity($this, null);
            }
            return $this->_financial_account_feature;
        }
        return new FinancialAccountFeatureEntity($this, $data);
    }


    private $_fund_cash_balance = null;

    // Canonical facade: $client->FundCashBalance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->fund_cash_balance()
    // resolves here too.
    public function FundCashBalance($data = null)
    {
        require_once __DIR__ . '/entity/fund_cash_balance_entity.php';
        if ($data === null) {
            if ($this->_fund_cash_balance === null) {
                $this->_fund_cash_balance = new FundCashBalanceEntity($this, null);
            }
            return $this->_fund_cash_balance;
        }
        return new FundCashBalanceEntity($this, $data);
    }


    private $_funding_instruction = null;

    // Canonical facade: $client->FundingInstruction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->funding_instruction()
    // resolves here too.
    public function FundingInstruction($data = null)
    {
        require_once __DIR__ . '/entity/funding_instruction_entity.php';
        if ($data === null) {
            if ($this->_funding_instruction === null) {
                $this->_funding_instruction = new FundingInstructionEntity($this, null);
            }
            return $this->_funding_instruction;
        }
        return new FundingInstructionEntity($this, $data);
    }


    private $_history = null;

    // Canonical facade: $client->History()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->history()
    // resolves here too.
    public function History($data = null)
    {
        require_once __DIR__ . '/entity/history_entity.php';
        if ($data === null) {
            if ($this->_history === null) {
                $this->_history = new HistoryEntity($this, null);
            }
            return $this->_history;
        }
        return new HistoryEntity($this, $data);
    }


    private $_inbound_transfer = null;

    // Canonical facade: $client->InboundTransfer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->inbound_transfer()
    // resolves here too.
    public function InboundTransfer($data = null)
    {
        require_once __DIR__ . '/entity/inbound_transfer_entity.php';
        if ($data === null) {
            if ($this->_inbound_transfer === null) {
                $this->_inbound_transfer = new InboundTransferEntity($this, null);
            }
            return $this->_inbound_transfer;
        }
        return new InboundTransferEntity($this, $data);
    }


    private $_install = null;

    // Canonical facade: $client->Install()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->install()
    // resolves here too.
    public function Install($data = null)
    {
        require_once __DIR__ . '/entity/install_entity.php';
        if ($data === null) {
            if ($this->_install === null) {
                $this->_install = new InstallEntity($this, null);
            }
            return $this->_install;
        }
        return new InstallEntity($this, $data);
    }


    private $_invoice = null;

    // Canonical facade: $client->Invoice()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->invoice()
    // resolves here too.
    public function Invoice($data = null)
    {
        require_once __DIR__ . '/entity/invoice_entity.php';
        if ($data === null) {
            if ($this->_invoice === null) {
                $this->_invoice = new InvoiceEntity($this, null);
            }
            return $this->_invoice;
        }
        return new InvoiceEntity($this, $data);
    }


    private $_invoice_payment = null;

    // Canonical facade: $client->InvoicePayment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->invoice_payment()
    // resolves here too.
    public function InvoicePayment($data = null)
    {
        require_once __DIR__ . '/entity/invoice_payment_entity.php';
        if ($data === null) {
            if ($this->_invoice_payment === null) {
                $this->_invoice_payment = new InvoicePaymentEntity($this, null);
            }
            return $this->_invoice_payment;
        }
        return new InvoicePaymentEntity($this, $data);
    }


    private $_invoice_rendering_template = null;

    // Canonical facade: $client->InvoiceRenderingTemplate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->invoice_rendering_template()
    // resolves here too.
    public function InvoiceRenderingTemplate($data = null)
    {
        require_once __DIR__ . '/entity/invoice_rendering_template_entity.php';
        if ($data === null) {
            if ($this->_invoice_rendering_template === null) {
                $this->_invoice_rendering_template = new InvoiceRenderingTemplateEntity($this, null);
            }
            return $this->_invoice_rendering_template;
        }
        return new InvoiceRenderingTemplateEntity($this, $data);
    }


    private $_invoiceitem = null;

    // Canonical facade: $client->Invoiceitem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->invoiceitem()
    // resolves here too.
    public function Invoiceitem($data = null)
    {
        require_once __DIR__ . '/entity/invoiceitem_entity.php';
        if ($data === null) {
            if ($this->_invoiceitem === null) {
                $this->_invoiceitem = new InvoiceitemEntity($this, null);
            }
            return $this->_invoiceitem;
        }
        return new InvoiceitemEntity($this, $data);
    }


    private $_line = null;

    // Canonical facade: $client->Line()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->line()
    // resolves here too.
    public function Line($data = null)
    {
        require_once __DIR__ . '/entity/line_entity.php';
        if ($data === null) {
            if ($this->_line === null) {
                $this->_line = new LineEntity($this, null);
            }
            return $this->_line;
        }
        return new LineEntity($this, $data);
    }


    private $_line_item = null;

    // Canonical facade: $client->LineItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->line_item()
    // resolves here too.
    public function LineItem($data = null)
    {
        require_once __DIR__ . '/entity/line_item_entity.php';
        if ($data === null) {
            if ($this->_line_item === null) {
                $this->_line_item = new LineItemEntity($this, null);
            }
            return $this->_line_item;
        }
        return new LineItemEntity($this, $data);
    }


    private $_linked_account = null;

    // Canonical facade: $client->LinkedAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->linked_account()
    // resolves here too.
    public function LinkedAccount($data = null)
    {
        require_once __DIR__ . '/entity/linked_account_entity.php';
        if ($data === null) {
            if ($this->_linked_account === null) {
                $this->_linked_account = new LinkedAccountEntity($this, null);
            }
            return $this->_linked_account;
        }
        return new LinkedAccountEntity($this, $data);
    }


    private $_linked_account_owner = null;

    // Canonical facade: $client->LinkedAccountOwner()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->linked_account_owner()
    // resolves here too.
    public function LinkedAccountOwner($data = null)
    {
        require_once __DIR__ . '/entity/linked_account_owner_entity.php';
        if ($data === null) {
            if ($this->_linked_account_owner === null) {
                $this->_linked_account_owner = new LinkedAccountOwnerEntity($this, null);
            }
            return $this->_linked_account_owner;
        }
        return new LinkedAccountOwnerEntity($this, $data);
    }


    private $_location = null;

    // Canonical facade: $client->Location()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->location()
    // resolves here too.
    public function Location($data = null)
    {
        require_once __DIR__ . '/entity/location_entity.php';
        if ($data === null) {
            if ($this->_location === null) {
                $this->_location = new LocationEntity($this, null);
            }
            return $this->_location;
        }
        return new LocationEntity($this, $data);
    }


    private $_login_link = null;

    // Canonical facade: $client->LoginLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->login_link()
    // resolves here too.
    public function LoginLink($data = null)
    {
        require_once __DIR__ . '/entity/login_link_entity.php';
        if ($data === null) {
            if ($this->_login_link === null) {
                $this->_login_link = new LoginLinkEntity($this, null);
            }
            return $this->_login_link;
        }
        return new LoginLinkEntity($this, $data);
    }


    private $_mandate = null;

    // Canonical facade: $client->Mandate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->mandate()
    // resolves here too.
    public function Mandate($data = null)
    {
        require_once __DIR__ . '/entity/mandate_entity.php';
        if ($data === null) {
            if ($this->_mandate === null) {
                $this->_mandate = new MandateEntity($this, null);
            }
            return $this->_mandate;
        }
        return new MandateEntity($this, $data);
    }


    private $_meter = null;

    // Canonical facade: $client->Meter()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->meter()
    // resolves here too.
    public function Meter($data = null)
    {
        require_once __DIR__ . '/entity/meter_entity.php';
        if ($data === null) {
            if ($this->_meter === null) {
                $this->_meter = new MeterEntity($this, null);
            }
            return $this->_meter;
        }
        return new MeterEntity($this, $data);
    }


    private $_meter_event = null;

    // Canonical facade: $client->MeterEvent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->meter_event()
    // resolves here too.
    public function MeterEvent($data = null)
    {
        require_once __DIR__ . '/entity/meter_event_entity.php';
        if ($data === null) {
            if ($this->_meter_event === null) {
                $this->_meter_event = new MeterEventEntity($this, null);
            }
            return $this->_meter_event;
        }
        return new MeterEventEntity($this, $data);
    }


    private $_meter_event_adjustment = null;

    // Canonical facade: $client->MeterEventAdjustment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->meter_event_adjustment()
    // resolves here too.
    public function MeterEventAdjustment($data = null)
    {
        require_once __DIR__ . '/entity/meter_event_adjustment_entity.php';
        if ($data === null) {
            if ($this->_meter_event_adjustment === null) {
                $this->_meter_event_adjustment = new MeterEventAdjustmentEntity($this, null);
            }
            return $this->_meter_event_adjustment;
        }
        return new MeterEventAdjustmentEntity($this, $data);
    }


    private $_meter_event_summary = null;

    // Canonical facade: $client->MeterEventSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->meter_event_summary()
    // resolves here too.
    public function MeterEventSummary($data = null)
    {
        require_once __DIR__ . '/entity/meter_event_summary_entity.php';
        if ($data === null) {
            if ($this->_meter_event_summary === null) {
                $this->_meter_event_summary = new MeterEventSummaryEntity($this, null);
            }
            return $this->_meter_event_summary;
        }
        return new MeterEventSummaryEntity($this, $data);
    }


    private $_onboarding_link = null;

    // Canonical facade: $client->OnboardingLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->onboarding_link()
    // resolves here too.
    public function OnboardingLink($data = null)
    {
        require_once __DIR__ . '/entity/onboarding_link_entity.php';
        if ($data === null) {
            if ($this->_onboarding_link === null) {
                $this->_onboarding_link = new OnboardingLinkEntity($this, null);
            }
            return $this->_onboarding_link;
        }
        return new OnboardingLinkEntity($this, $data);
    }


    private $_order = null;

    // Canonical facade: $client->Order()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->order()
    // resolves here too.
    public function Order($data = null)
    {
        require_once __DIR__ . '/entity/order_entity.php';
        if ($data === null) {
            if ($this->_order === null) {
                $this->_order = new OrderEntity($this, null);
            }
            return $this->_order;
        }
        return new OrderEntity($this, $data);
    }


    private $_outbound_payment = null;

    // Canonical facade: $client->OutboundPayment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->outbound_payment()
    // resolves here too.
    public function OutboundPayment($data = null)
    {
        require_once __DIR__ . '/entity/outbound_payment_entity.php';
        if ($data === null) {
            if ($this->_outbound_payment === null) {
                $this->_outbound_payment = new OutboundPaymentEntity($this, null);
            }
            return $this->_outbound_payment;
        }
        return new OutboundPaymentEntity($this, $data);
    }


    private $_outbound_transfer = null;

    // Canonical facade: $client->OutboundTransfer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->outbound_transfer()
    // resolves here too.
    public function OutboundTransfer($data = null)
    {
        require_once __DIR__ . '/entity/outbound_transfer_entity.php';
        if ($data === null) {
            if ($this->_outbound_transfer === null) {
                $this->_outbound_transfer = new OutboundTransferEntity($this, null);
            }
            return $this->_outbound_transfer;
        }
        return new OutboundTransferEntity($this, $data);
    }


    private $_payment_attempt_record = null;

    // Canonical facade: $client->PaymentAttemptRecord()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payment_attempt_record()
    // resolves here too.
    public function PaymentAttemptRecord($data = null)
    {
        require_once __DIR__ . '/entity/payment_attempt_record_entity.php';
        if ($data === null) {
            if ($this->_payment_attempt_record === null) {
                $this->_payment_attempt_record = new PaymentAttemptRecordEntity($this, null);
            }
            return $this->_payment_attempt_record;
        }
        return new PaymentAttemptRecordEntity($this, $data);
    }


    private $_payment_evaluation = null;

    // Canonical facade: $client->PaymentEvaluation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payment_evaluation()
    // resolves here too.
    public function PaymentEvaluation($data = null)
    {
        require_once __DIR__ . '/entity/payment_evaluation_entity.php';
        if ($data === null) {
            if ($this->_payment_evaluation === null) {
                $this->_payment_evaluation = new PaymentEvaluationEntity($this, null);
            }
            return $this->_payment_evaluation;
        }
        return new PaymentEvaluationEntity($this, $data);
    }


    private $_payment_intent = null;

    // Canonical facade: $client->PaymentIntent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payment_intent()
    // resolves here too.
    public function PaymentIntent($data = null)
    {
        require_once __DIR__ . '/entity/payment_intent_entity.php';
        if ($data === null) {
            if ($this->_payment_intent === null) {
                $this->_payment_intent = new PaymentIntentEntity($this, null);
            }
            return $this->_payment_intent;
        }
        return new PaymentIntentEntity($this, $data);
    }


    private $_payment_intent_amount_details_line_item = null;

    // Canonical facade: $client->PaymentIntentAmountDetailsLineItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payment_intent_amount_details_line_item()
    // resolves here too.
    public function PaymentIntentAmountDetailsLineItem($data = null)
    {
        require_once __DIR__ . '/entity/payment_intent_amount_details_line_item_entity.php';
        if ($data === null) {
            if ($this->_payment_intent_amount_details_line_item === null) {
                $this->_payment_intent_amount_details_line_item = new PaymentIntentAmountDetailsLineItemEntity($this, null);
            }
            return $this->_payment_intent_amount_details_line_item;
        }
        return new PaymentIntentAmountDetailsLineItemEntity($this, $data);
    }


    private $_payment_link = null;

    // Canonical facade: $client->PaymentLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payment_link()
    // resolves here too.
    public function PaymentLink($data = null)
    {
        require_once __DIR__ . '/entity/payment_link_entity.php';
        if ($data === null) {
            if ($this->_payment_link === null) {
                $this->_payment_link = new PaymentLinkEntity($this, null);
            }
            return $this->_payment_link;
        }
        return new PaymentLinkEntity($this, $data);
    }


    private $_payment_method = null;

    // Canonical facade: $client->PaymentMethod()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payment_method()
    // resolves here too.
    public function PaymentMethod($data = null)
    {
        require_once __DIR__ . '/entity/payment_method_entity.php';
        if ($data === null) {
            if ($this->_payment_method === null) {
                $this->_payment_method = new PaymentMethodEntity($this, null);
            }
            return $this->_payment_method;
        }
        return new PaymentMethodEntity($this, $data);
    }


    private $_payment_method_configuration = null;

    // Canonical facade: $client->PaymentMethodConfiguration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payment_method_configuration()
    // resolves here too.
    public function PaymentMethodConfiguration($data = null)
    {
        require_once __DIR__ . '/entity/payment_method_configuration_entity.php';
        if ($data === null) {
            if ($this->_payment_method_configuration === null) {
                $this->_payment_method_configuration = new PaymentMethodConfigurationEntity($this, null);
            }
            return $this->_payment_method_configuration;
        }
        return new PaymentMethodConfigurationEntity($this, $data);
    }


    private $_payment_method_domain = null;

    // Canonical facade: $client->PaymentMethodDomain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payment_method_domain()
    // resolves here too.
    public function PaymentMethodDomain($data = null)
    {
        require_once __DIR__ . '/entity/payment_method_domain_entity.php';
        if ($data === null) {
            if ($this->_payment_method_domain === null) {
                $this->_payment_method_domain = new PaymentMethodDomainEntity($this, null);
            }
            return $this->_payment_method_domain;
        }
        return new PaymentMethodDomainEntity($this, $data);
    }


    private $_payment_record = null;

    // Canonical facade: $client->PaymentRecord()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payment_record()
    // resolves here too.
    public function PaymentRecord($data = null)
    {
        require_once __DIR__ . '/entity/payment_record_entity.php';
        if ($data === null) {
            if ($this->_payment_record === null) {
                $this->_payment_record = new PaymentRecordEntity($this, null);
            }
            return $this->_payment_record;
        }
        return new PaymentRecordEntity($this, $data);
    }


    private $_payout = null;

    // Canonical facade: $client->Payout()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payout()
    // resolves here too.
    public function Payout($data = null)
    {
        require_once __DIR__ . '/entity/payout_entity.php';
        if ($data === null) {
            if ($this->_payout === null) {
                $this->_payout = new PayoutEntity($this, null);
            }
            return $this->_payout;
        }
        return new PayoutEntity($this, $data);
    }


    private $_person = null;

    // Canonical facade: $client->Person()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->person()
    // resolves here too.
    public function Person($data = null)
    {
        require_once __DIR__ . '/entity/person_entity.php';
        if ($data === null) {
            if ($this->_person === null) {
                $this->_person = new PersonEntity($this, null);
            }
            return $this->_person;
        }
        return new PersonEntity($this, $data);
    }


    private $_personalization_design = null;

    // Canonical facade: $client->PersonalizationDesign()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->personalization_design()
    // resolves here too.
    public function PersonalizationDesign($data = null)
    {
        require_once __DIR__ . '/entity/personalization_design_entity.php';
        if ($data === null) {
            if ($this->_personalization_design === null) {
                $this->_personalization_design = new PersonalizationDesignEntity($this, null);
            }
            return $this->_personalization_design;
        }
        return new PersonalizationDesignEntity($this, $data);
    }


    private $_physical_bundle = null;

    // Canonical facade: $client->PhysicalBundle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->physical_bundle()
    // resolves here too.
    public function PhysicalBundle($data = null)
    {
        require_once __DIR__ . '/entity/physical_bundle_entity.php';
        if ($data === null) {
            if ($this->_physical_bundle === null) {
                $this->_physical_bundle = new PhysicalBundleEntity($this, null);
            }
            return $this->_physical_bundle;
        }
        return new PhysicalBundleEntity($this, $data);
    }


    private $_plan = null;

    // Canonical facade: $client->Plan()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->plan()
    // resolves here too.
    public function Plan($data = null)
    {
        require_once __DIR__ . '/entity/plan_entity.php';
        if ($data === null) {
            if ($this->_plan === null) {
                $this->_plan = new PlanEntity($this, null);
            }
            return $this->_plan;
        }
        return new PlanEntity($this, $data);
    }


    private $_price = null;

    // Canonical facade: $client->Price()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->price()
    // resolves here too.
    public function Price($data = null)
    {
        require_once __DIR__ . '/entity/price_entity.php';
        if ($data === null) {
            if ($this->_price === null) {
                $this->_price = new PriceEntity($this, null);
            }
            return $this->_price;
        }
        return new PriceEntity($this, $data);
    }


    private $_product = null;

    // Canonical facade: $client->Product()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product()
    // resolves here too.
    public function Product($data = null)
    {
        require_once __DIR__ . '/entity/product_entity.php';
        if ($data === null) {
            if ($this->_product === null) {
                $this->_product = new ProductEntity($this, null);
            }
            return $this->_product;
        }
        return new ProductEntity($this, $data);
    }


    private $_product_feature = null;

    // Canonical facade: $client->ProductFeature()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product_feature()
    // resolves here too.
    public function ProductFeature($data = null)
    {
        require_once __DIR__ . '/entity/product_feature_entity.php';
        if ($data === null) {
            if ($this->_product_feature === null) {
                $this->_product_feature = new ProductFeatureEntity($this, null);
            }
            return $this->_product_feature;
        }
        return new ProductFeatureEntity($this, $data);
    }


    private $_promotion_code = null;

    // Canonical facade: $client->PromotionCode()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->promotion_code()
    // resolves here too.
    public function PromotionCode($data = null)
    {
        require_once __DIR__ . '/entity/promotion_code_entity.php';
        if ($data === null) {
            if ($this->_promotion_code === null) {
                $this->_promotion_code = new PromotionCodeEntity($this, null);
            }
            return $this->_promotion_code;
        }
        return new PromotionCodeEntity($this, $data);
    }


    private $_quote = null;

    // Canonical facade: $client->Quote()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->quote()
    // resolves here too.
    public function Quote($data = null)
    {
        require_once __DIR__ . '/entity/quote_entity.php';
        if ($data === null) {
            if ($this->_quote === null) {
                $this->_quote = new QuoteEntity($this, null);
            }
            return $this->_quote;
        }
        return new QuoteEntity($this, $data);
    }


    private $_quote_computed_upfront_line_item = null;

    // Canonical facade: $client->QuoteComputedUpfrontLineItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->quote_computed_upfront_line_item()
    // resolves here too.
    public function QuoteComputedUpfrontLineItem($data = null)
    {
        require_once __DIR__ . '/entity/quote_computed_upfront_line_item_entity.php';
        if ($data === null) {
            if ($this->_quote_computed_upfront_line_item === null) {
                $this->_quote_computed_upfront_line_item = new QuoteComputedUpfrontLineItemEntity($this, null);
            }
            return $this->_quote_computed_upfront_line_item;
        }
        return new QuoteComputedUpfrontLineItemEntity($this, $data);
    }


    private $_quote_pdf = null;

    // Canonical facade: $client->QuotePdf()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->quote_pdf()
    // resolves here too.
    public function QuotePdf($data = null)
    {
        require_once __DIR__ . '/entity/quote_pdf_entity.php';
        if ($data === null) {
            if ($this->_quote_pdf === null) {
                $this->_quote_pdf = new QuotePdfEntity($this, null);
            }
            return $this->_quote_pdf;
        }
        return new QuotePdfEntity($this, $data);
    }


    private $_reader = null;

    // Canonical facade: $client->Reader()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reader()
    // resolves here too.
    public function Reader($data = null)
    {
        require_once __DIR__ . '/entity/reader_entity.php';
        if ($data === null) {
            if ($this->_reader === null) {
                $this->_reader = new ReaderEntity($this, null);
            }
            return $this->_reader;
        }
        return new ReaderEntity($this, $data);
    }


    private $_received_credit = null;

    // Canonical facade: $client->ReceivedCredit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->received_credit()
    // resolves here too.
    public function ReceivedCredit($data = null)
    {
        require_once __DIR__ . '/entity/received_credit_entity.php';
        if ($data === null) {
            if ($this->_received_credit === null) {
                $this->_received_credit = new ReceivedCreditEntity($this, null);
            }
            return $this->_received_credit;
        }
        return new ReceivedCreditEntity($this, $data);
    }


    private $_received_debit = null;

    // Canonical facade: $client->ReceivedDebit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->received_debit()
    // resolves here too.
    public function ReceivedDebit($data = null)
    {
        require_once __DIR__ . '/entity/received_debit_entity.php';
        if ($data === null) {
            if ($this->_received_debit === null) {
                $this->_received_debit = new ReceivedDebitEntity($this, null);
            }
            return $this->_received_debit;
        }
        return new ReceivedDebitEntity($this, $data);
    }


    private $_refund = null;

    // Canonical facade: $client->Refund()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->refund()
    // resolves here too.
    public function Refund($data = null)
    {
        require_once __DIR__ . '/entity/refund_entity.php';
        if ($data === null) {
            if ($this->_refund === null) {
                $this->_refund = new RefundEntity($this, null);
            }
            return $this->_refund;
        }
        return new RefundEntity($this, $data);
    }


    private $_registration = null;

    // Canonical facade: $client->Registration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->registration()
    // resolves here too.
    public function Registration($data = null)
    {
        require_once __DIR__ . '/entity/registration_entity.php';
        if ($data === null) {
            if ($this->_registration === null) {
                $this->_registration = new RegistrationEntity($this, null);
            }
            return $this->_registration;
        }
        return new RegistrationEntity($this, $data);
    }


    private $_report_run = null;

    // Canonical facade: $client->ReportRun()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->report_run()
    // resolves here too.
    public function ReportRun($data = null)
    {
        require_once __DIR__ . '/entity/report_run_entity.php';
        if ($data === null) {
            if ($this->_report_run === null) {
                $this->_report_run = new ReportRunEntity($this, null);
            }
            return $this->_report_run;
        }
        return new ReportRunEntity($this, $data);
    }


    private $_report_type = null;

    // Canonical facade: $client->ReportType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->report_type()
    // resolves here too.
    public function ReportType($data = null)
    {
        require_once __DIR__ . '/entity/report_type_entity.php';
        if ($data === null) {
            if ($this->_report_type === null) {
                $this->_report_type = new ReportTypeEntity($this, null);
            }
            return $this->_report_type;
        }
        return new ReportTypeEntity($this, $data);
    }


    private $_request = null;

    // Canonical facade: $client->Request()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->request()
    // resolves here too.
    public function Request($data = null)
    {
        require_once __DIR__ . '/entity/request_entity.php';
        if ($data === null) {
            if ($this->_request === null) {
                $this->_request = new RequestEntity($this, null);
            }
            return $this->_request;
        }
        return new RequestEntity($this, $data);
    }


    private $_reversal = null;

    // Canonical facade: $client->Reversal()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reversal()
    // resolves here too.
    public function Reversal($data = null)
    {
        require_once __DIR__ . '/entity/reversal_entity.php';
        if ($data === null) {
            if ($this->_reversal === null) {
                $this->_reversal = new ReversalEntity($this, null);
            }
            return $this->_reversal;
        }
        return new ReversalEntity($this, $data);
    }


    private $_review = null;

    // Canonical facade: $client->Review()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->review()
    // resolves here too.
    public function Review($data = null)
    {
        require_once __DIR__ . '/entity/review_entity.php';
        if ($data === null) {
            if ($this->_review === null) {
                $this->_review = new ReviewEntity($this, null);
            }
            return $this->_review;
        }
        return new ReviewEntity($this, $data);
    }


    private $_scheduled_query_run = null;

    // Canonical facade: $client->ScheduledQueryRun()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->scheduled_query_run()
    // resolves here too.
    public function ScheduledQueryRun($data = null)
    {
        require_once __DIR__ . '/entity/scheduled_query_run_entity.php';
        if ($data === null) {
            if ($this->_scheduled_query_run === null) {
                $this->_scheduled_query_run = new ScheduledQueryRunEntity($this, null);
            }
            return $this->_scheduled_query_run;
        }
        return new ScheduledQueryRunEntity($this, $data);
    }


    private $_search = null;

    // Canonical facade: $client->Search()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->search()
    // resolves here too.
    public function Search($data = null)
    {
        require_once __DIR__ . '/entity/search_entity.php';
        if ($data === null) {
            if ($this->_search === null) {
                $this->_search = new SearchEntity($this, null);
            }
            return $this->_search;
        }
        return new SearchEntity($this, $data);
    }


    private $_secret = null;

    // Canonical facade: $client->Secret()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secret()
    // resolves here too.
    public function Secret($data = null)
    {
        require_once __DIR__ . '/entity/secret_entity.php';
        if ($data === null) {
            if ($this->_secret === null) {
                $this->_secret = new SecretEntity($this, null);
            }
            return $this->_secret;
        }
        return new SecretEntity($this, $data);
    }


    private $_session = null;

    // Canonical facade: $client->Session()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->session()
    // resolves here too.
    public function Session($data = null)
    {
        require_once __DIR__ . '/entity/session_entity.php';
        if ($data === null) {
            if ($this->_session === null) {
                $this->_session = new SessionEntity($this, null);
            }
            return $this->_session;
        }
        return new SessionEntity($this, $data);
    }


    private $_setting = null;

    // Canonical facade: $client->Setting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->setting()
    // resolves here too.
    public function Setting($data = null)
    {
        require_once __DIR__ . '/entity/setting_entity.php';
        if ($data === null) {
            if ($this->_setting === null) {
                $this->_setting = new SettingEntity($this, null);
            }
            return $this->_setting;
        }
        return new SettingEntity($this, $data);
    }


    private $_settlement = null;

    // Canonical facade: $client->Settlement()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->settlement()
    // resolves here too.
    public function Settlement($data = null)
    {
        require_once __DIR__ . '/entity/settlement_entity.php';
        if ($data === null) {
            if ($this->_settlement === null) {
                $this->_settlement = new SettlementEntity($this, null);
            }
            return $this->_settlement;
        }
        return new SettlementEntity($this, $data);
    }


    private $_setup_attempt = null;

    // Canonical facade: $client->SetupAttempt()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->setup_attempt()
    // resolves here too.
    public function SetupAttempt($data = null)
    {
        require_once __DIR__ . '/entity/setup_attempt_entity.php';
        if ($data === null) {
            if ($this->_setup_attempt === null) {
                $this->_setup_attempt = new SetupAttemptEntity($this, null);
            }
            return $this->_setup_attempt;
        }
        return new SetupAttemptEntity($this, $data);
    }


    private $_setup_intent = null;

    // Canonical facade: $client->SetupIntent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->setup_intent()
    // resolves here too.
    public function SetupIntent($data = null)
    {
        require_once __DIR__ . '/entity/setup_intent_entity.php';
        if ($data === null) {
            if ($this->_setup_intent === null) {
                $this->_setup_intent = new SetupIntentEntity($this, null);
            }
            return $this->_setup_intent;
        }
        return new SetupIntentEntity($this, $data);
    }


    private $_shipping_rate = null;

    // Canonical facade: $client->ShippingRate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->shipping_rate()
    // resolves here too.
    public function ShippingRate($data = null)
    {
        require_once __DIR__ . '/entity/shipping_rate_entity.php';
        if ($data === null) {
            if ($this->_shipping_rate === null) {
                $this->_shipping_rate = new ShippingRateEntity($this, null);
            }
            return $this->_shipping_rate;
        }
        return new ShippingRateEntity($this, $data);
    }


    private $_sigma_api_query = null;

    // Canonical facade: $client->SigmaApiQuery()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sigma_api_query()
    // resolves here too.
    public function SigmaApiQuery($data = null)
    {
        require_once __DIR__ . '/entity/sigma_api_query_entity.php';
        if ($data === null) {
            if ($this->_sigma_api_query === null) {
                $this->_sigma_api_query = new SigmaApiQueryEntity($this, null);
            }
            return $this->_sigma_api_query;
        }
        return new SigmaApiQueryEntity($this, $data);
    }


    private $_source = null;

    // Canonical facade: $client->Source()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->source()
    // resolves here too.
    public function Source($data = null)
    {
        require_once __DIR__ . '/entity/source_entity.php';
        if ($data === null) {
            if ($this->_source === null) {
                $this->_source = new SourceEntity($this, null);
            }
            return $this->_source;
        }
        return new SourceEntity($this, $data);
    }


    private $_source_mandate_notification = null;

    // Canonical facade: $client->SourceMandateNotification()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->source_mandate_notification()
    // resolves here too.
    public function SourceMandateNotification($data = null)
    {
        require_once __DIR__ . '/entity/source_mandate_notification_entity.php';
        if ($data === null) {
            if ($this->_source_mandate_notification === null) {
                $this->_source_mandate_notification = new SourceMandateNotificationEntity($this, null);
            }
            return $this->_source_mandate_notification;
        }
        return new SourceMandateNotificationEntity($this, $data);
    }


    private $_source_transaction = null;

    // Canonical facade: $client->SourceTransaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->source_transaction()
    // resolves here too.
    public function SourceTransaction($data = null)
    {
        require_once __DIR__ . '/entity/source_transaction_entity.php';
        if ($data === null) {
            if ($this->_source_transaction === null) {
                $this->_source_transaction = new SourceTransactionEntity($this, null);
            }
            return $this->_source_transaction;
        }
        return new SourceTransactionEntity($this, $data);
    }


    private $_subscription = null;

    // Canonical facade: $client->Subscription()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription()
    // resolves here too.
    public function Subscription($data = null)
    {
        require_once __DIR__ . '/entity/subscription_entity.php';
        if ($data === null) {
            if ($this->_subscription === null) {
                $this->_subscription = new SubscriptionEntity($this, null);
            }
            return $this->_subscription;
        }
        return new SubscriptionEntity($this, $data);
    }


    private $_subscription_item = null;

    // Canonical facade: $client->SubscriptionItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_item()
    // resolves here too.
    public function SubscriptionItem($data = null)
    {
        require_once __DIR__ . '/entity/subscription_item_entity.php';
        if ($data === null) {
            if ($this->_subscription_item === null) {
                $this->_subscription_item = new SubscriptionItemEntity($this, null);
            }
            return $this->_subscription_item;
        }
        return new SubscriptionItemEntity($this, $data);
    }


    private $_subscription_schedule = null;

    // Canonical facade: $client->SubscriptionSchedule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_schedule()
    // resolves here too.
    public function SubscriptionSchedule($data = null)
    {
        require_once __DIR__ . '/entity/subscription_schedule_entity.php';
        if ($data === null) {
            if ($this->_subscription_schedule === null) {
                $this->_subscription_schedule = new SubscriptionScheduleEntity($this, null);
            }
            return $this->_subscription_schedule;
        }
        return new SubscriptionScheduleEntity($this, $data);
    }


    private $_supplier = null;

    // Canonical facade: $client->Supplier()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->supplier()
    // resolves here too.
    public function Supplier($data = null)
    {
        require_once __DIR__ . '/entity/supplier_entity.php';
        if ($data === null) {
            if ($this->_supplier === null) {
                $this->_supplier = new SupplierEntity($this, null);
            }
            return $this->_supplier;
        }
        return new SupplierEntity($this, $data);
    }


    private $_tax_code = null;

    // Canonical facade: $client->TaxCode()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tax_code()
    // resolves here too.
    public function TaxCode($data = null)
    {
        require_once __DIR__ . '/entity/tax_code_entity.php';
        if ($data === null) {
            if ($this->_tax_code === null) {
                $this->_tax_code = new TaxCodeEntity($this, null);
            }
            return $this->_tax_code;
        }
        return new TaxCodeEntity($this, $data);
    }


    private $_tax_id = null;

    // Canonical facade: $client->TaxId()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tax_id()
    // resolves here too.
    public function TaxId($data = null)
    {
        require_once __DIR__ . '/entity/tax_id_entity.php';
        if ($data === null) {
            if ($this->_tax_id === null) {
                $this->_tax_id = new TaxIdEntity($this, null);
            }
            return $this->_tax_id;
        }
        return new TaxIdEntity($this, $data);
    }


    private $_tax_rate = null;

    // Canonical facade: $client->TaxRate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tax_rate()
    // resolves here too.
    public function TaxRate($data = null)
    {
        require_once __DIR__ . '/entity/tax_rate_entity.php';
        if ($data === null) {
            if ($this->_tax_rate === null) {
                $this->_tax_rate = new TaxRateEntity($this, null);
            }
            return $this->_tax_rate;
        }
        return new TaxRateEntity($this, $data);
    }


    private $_test_clock = null;

    // Canonical facade: $client->TestClock()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->test_clock()
    // resolves here too.
    public function TestClock($data = null)
    {
        require_once __DIR__ . '/entity/test_clock_entity.php';
        if ($data === null) {
            if ($this->_test_clock === null) {
                $this->_test_clock = new TestClockEntity($this, null);
            }
            return $this->_test_clock;
        }
        return new TestClockEntity($this, $data);
    }


    private $_token = null;

    // Canonical facade: $client->Token()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->token()
    // resolves here too.
    public function Token($data = null)
    {
        require_once __DIR__ . '/entity/token_entity.php';
        if ($data === null) {
            if ($this->_token === null) {
                $this->_token = new TokenEntity($this, null);
            }
            return $this->_token;
        }
        return new TokenEntity($this, $data);
    }


    private $_topup = null;

    // Canonical facade: $client->Topup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->topup()
    // resolves here too.
    public function Topup($data = null)
    {
        require_once __DIR__ . '/entity/topup_entity.php';
        if ($data === null) {
            if ($this->_topup === null) {
                $this->_topup = new TopupEntity($this, null);
            }
            return $this->_topup;
        }
        return new TopupEntity($this, $data);
    }


    private $_transaction = null;

    // Canonical facade: $client->Transaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->transaction()
    // resolves here too.
    public function Transaction($data = null)
    {
        require_once __DIR__ . '/entity/transaction_entity.php';
        if ($data === null) {
            if ($this->_transaction === null) {
                $this->_transaction = new TransactionEntity($this, null);
            }
            return $this->_transaction;
        }
        return new TransactionEntity($this, $data);
    }


    private $_transaction_entry = null;

    // Canonical facade: $client->TransactionEntry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->transaction_entry()
    // resolves here too.
    public function TransactionEntry($data = null)
    {
        require_once __DIR__ . '/entity/transaction_entry_entity.php';
        if ($data === null) {
            if ($this->_transaction_entry === null) {
                $this->_transaction_entry = new TransactionEntryEntity($this, null);
            }
            return $this->_transaction_entry;
        }
        return new TransactionEntryEntity($this, $data);
    }


    private $_transfer = null;

    // Canonical facade: $client->Transfer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->transfer()
    // resolves here too.
    public function Transfer($data = null)
    {
        require_once __DIR__ . '/entity/transfer_entity.php';
        if ($data === null) {
            if ($this->_transfer === null) {
                $this->_transfer = new TransferEntity($this, null);
            }
            return $this->_transfer;
        }
        return new TransferEntity($this, $data);
    }


    private $_trial_offer = null;

    // Canonical facade: $client->TrialOffer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->trial_offer()
    // resolves here too.
    public function TrialOffer($data = null)
    {
        require_once __DIR__ . '/entity/trial_offer_entity.php';
        if ($data === null) {
            if ($this->_trial_offer === null) {
                $this->_trial_offer = new TrialOfferEntity($this, null);
            }
            return $this->_trial_offer;
        }
        return new TrialOfferEntity($this, $data);
    }


    private $_value_list = null;

    // Canonical facade: $client->ValueList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->value_list()
    // resolves here too.
    public function ValueList($data = null)
    {
        require_once __DIR__ . '/entity/value_list_entity.php';
        if ($data === null) {
            if ($this->_value_list === null) {
                $this->_value_list = new ValueListEntity($this, null);
            }
            return $this->_value_list;
        }
        return new ValueListEntity($this, $data);
    }


    private $_value_list_item = null;

    // Canonical facade: $client->ValueListItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->value_list_item()
    // resolves here too.
    public function ValueListItem($data = null)
    {
        require_once __DIR__ . '/entity/value_list_item_entity.php';
        if ($data === null) {
            if ($this->_value_list_item === null) {
                $this->_value_list_item = new ValueListItemEntity($this, null);
            }
            return $this->_value_list_item;
        }
        return new ValueListItemEntity($this, $data);
    }


    private $_verification_report = null;

    // Canonical facade: $client->VerificationReport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->verification_report()
    // resolves here too.
    public function VerificationReport($data = null)
    {
        require_once __DIR__ . '/entity/verification_report_entity.php';
        if ($data === null) {
            if ($this->_verification_report === null) {
                $this->_verification_report = new VerificationReportEntity($this, null);
            }
            return $this->_verification_report;
        }
        return new VerificationReportEntity($this, $data);
    }


    private $_verification_session = null;

    // Canonical facade: $client->VerificationSession()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->verification_session()
    // resolves here too.
    public function VerificationSession($data = null)
    {
        require_once __DIR__ . '/entity/verification_session_entity.php';
        if ($data === null) {
            if ($this->_verification_session === null) {
                $this->_verification_session = new VerificationSessionEntity($this, null);
            }
            return $this->_verification_session;
        }
        return new VerificationSessionEntity($this, $data);
    }


    private $_webhook_endpoint = null;

    // Canonical facade: $client->WebhookEndpoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook_endpoint()
    // resolves here too.
    public function WebhookEndpoint($data = null)
    {
        require_once __DIR__ . '/entity/webhook_endpoint_entity.php';
        if ($data === null) {
            if ($this->_webhook_endpoint === null) {
                $this->_webhook_endpoint = new WebhookEndpointEntity($this, null);
            }
            return $this->_webhook_endpoint;
        }
        return new WebhookEndpointEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new StripeSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
