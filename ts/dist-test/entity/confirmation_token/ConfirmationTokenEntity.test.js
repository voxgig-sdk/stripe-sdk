"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ConfirmationTokenEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.ConfirmationToken();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'confirmation_token.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time at which the object was created.", "t": "`$INTEGER`", "key$": "created", "index$": 0 }, "expires_at": { "a": true, "fo": "unix-time", "h": "Expires At", "n": "expires_at", "r": false, "sh": "Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent.", "t": "`$INTEGER`", "key$": "expires_at", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 3 }, "mandate_data": { "a": true, "h": "Mandate Data", "n": "mandate_data", "r": false, "sh": "Data used for generating a Mandate.", "t": "`$ANY`", "key$": "mandate_data", "index$": 4 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "sh": "Set of key-value pairs that you can attach to an object.", "t": "`$OBJECT`", "key$": "metadata", "index$": 5 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 6 }, "payment_intent": { "a": true, "h": "Payment Intent", "n": "payment_intent", "r": false, "sh": "ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.", "t": "`$STRING`", "key$": "payment_intent", "index$": 7 }, "payment_method_options": { "a": true, "h": "Payment Method Options", "n": "payment_method_options", "r": false, "sh": "Payment-method-specific configuration for this ConfirmationToken.", "t": "`$ANY`", "key$": "payment_method_options", "index$": 8 }, "payment_method_preview": { "a": true, "h": "Payment Method Preview", "n": "payment_method_preview", "r": false, "sh": "Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken.", "t": "`$ANY`", "union": { "branches": 17, "count": 105848, "depth": 64 }, "key$": "payment_method_preview", "index$": 9 }, "return_url": { "a": true, "h": "Return Url", "n": "return_url", "r": false, "sh": "Return URL used to confirm the Intent.", "t": "`$STRING`", "key$": "return_url", "index$": 10 }, "setup_future_usage": { "a": true, "h": "Setup Future Usage", "n": "setup_future_usage", "r": false, "sh": "Indicates that you intend to make future payments with this ConfirmationToken's payment method.", "t": "`$STRING`", "key$": "setup_future_usage", "index$": 11 }, "setup_intent": { "a": true, "h": "Setup Intent", "n": "setup_intent", "r": false, "sh": "ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.", "t": "`$STRING`", "key$": "setup_intent", "index$": 12 }, "shipping": { "a": true, "h": "Shipping", "n": "shipping", "r": false, "sh": "Shipping information collected on this ConfirmationToken.", "t": "`$ANY`", "key$": "shipping", "index$": 13 }, "use_stripe_sdk": { "a": true, "h": "Use Stripe Sdk", "n": "use_stripe_sdk", "r": true, "sh": "Indicates whether the Stripe SDK is used to handle confirmation flow.", "t": "`$BOOLEAN`", "key$": "use_stripe_sdk", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "confirmation_token", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/test_helpers/confirmation_tokens", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/test_helpers/confirmation_tokens", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "test_helpers" }, { "lit": "confirmation_tokens" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/confirmation_tokens/{confirmation_token}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "confirmation_token", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/confirmation_tokens/{confirmation_token}", "q": { "exist": ["expand", "id"] }, "r": { "param": { "confirmation_token": "id" } }, "s": [{ "lit": "v1" }, { "lit": "confirmation_tokens" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "confirmation_token", "name__orig": "confirmation_token", "Name": "ConfirmationToken", "name_": "confirmation_token", "name-": "confirmation-token", "NAME": "CONFIRMATION_TOKEN", "index$": 23 }, { "active": true, "entity": "confirmation_token", "key$": "BasicConfirmationTokenFlow", "kind": "basic", "name": "BasicConfirmationTokenFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "confirmation_token_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "confirmation_token_ref01", "srcdatavar": "confirmation_token_ref01_data", "suffix": "_dt0" }, "m": { "id": "confirmation_token01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-confirmation_token_ref01" } }], "index$": 1 }] }, 'ConfirmationToken', { "POST /v1/test_helpers/confirmation_tokens": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "payment_method_data": { "explode": true, "style": "deepObject" }, "payment_method_options": { "explode": true, "style": "deepObject" }, "shipping": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "payment_method": { "description": "ID of an existing PaymentMethod.", "maxLength": 5000, "type": "string" }, "payment_method_data": { "description": "If provided, this hash will be used to create a PaymentMethod.", "properties": { "acss_debit": { "properties": { "account_number": {}, "institution_number": {}, "transit_number": {} }, "required": ["account_number", "institution_number", "transit_number"], "title": "payment_method_param", "type": "object" }, "affirm": { "properties": {}, "title": "param", "type": "object" }, "afterpay_clearpay": { "properties": {}, "title": "param", "type": "object" }, "alipay": { "properties": {}, "title": "param", "type": "object" }, "allow_redisplay": { "enum": ["always", "limited", "unspecified"], "type": "string" }, "alma": { "properties": {}, "title": "param", "type": "object" }, "amazon_pay": { "properties": {}, "title": "param", "type": "object" }, "au_becs_debit": { "properties": { "account_number": {}, "bsb_number": {} }, "required": ["account_number", "bsb_number"], "title": "param", "type": "object" }, "bacs_debit": { "properties": { "account_number": {}, "sort_code": {} }, "title": "param", "type": "object" }, "bancontact": { "properties": {}, "title": "param", "type": "object" }, "billie": { "properties": {}, "title": "param", "type": "object" }, "billing_details": { "properties": { "address": {}, "email": {}, "name": {}, "phone": {}, "tax_id": {} }, "title": "billing_details_inner_params", "type": "object" }, "bizum": { "properties": {}, "title": "param", "type": "object" }, "blik": { "properties": {}, "title": "param", "type": "object" }, "boleto": { "properties": { "tax_id": {} }, "required": ["tax_id"], "title": "param", "type": "object" }, "cashapp": { "properties": {}, "title": "param", "type": "object" }, "crypto": { "properties": {}, "title": "param", "type": "object" }, "customer_balance": { "properties": {}, "title": "param", "type": "object" }, "eps": { "properties": { "bank": {} }, "title": "param", "type": "object" }, "fpx": { "properties": { "bank": {} }, "required": ["bank"], "title": "param", "type": "object" }, "giropay": { "properties": {}, "title": "param", "type": "object" }, "grabpay": { "properties": {}, "title": "param", "type": "object" }, "ideal": { "properties": { "bank": {} }, "title": "param", "type": "object" }, "interac_present": { "properties": {}, "title": "param", "type": "object" }, "kakao_pay": { "properties": {}, "title": "param", "type": "object" }, "klarna": { "properties": { "dob": {} }, "title": "param", "type": "object" }, "konbini": { "properties": {}, "title": "param", "type": "object" }, "kr_card": { "properties": {}, "title": "param", "type": "object" }, "link": { "properties": {}, "title": "param", "type": "object" }, "mb_way": { "properties": {}, "title": "param", "type": "object" }, "metadata": { "additionalProperties": { "type": "string" }, "type": "object" }, "mobilepay": { "properties": {}, "title": "param", "type": "object" }, "multibanco": { "properties": {}, "title": "param", "type": "object" }, "naver_pay": { "properties": { "funding": {} }, "title": "param", "type": "object" }, "nz_bank_account": { "properties": { "account_holder_name": {}, "account_number": {}, "bank_code": {}, "branch_code": {}, "reference": {}, "suffix": {} }, "required": ["account_number", "bank_code", "branch_code", "suffix"], "title": "param", "type": "object" }, "oxxo": { "properties": {}, "title": "param", "type": "object" }, "p24": { "properties": { "bank": {} }, "title": "param", "type": "object" }, "pay_by_bank": { "properties": {}, "title": "param", "type": "object" }, "payco": { "properties": {}, "title": "param", "type": "object" }, "paynow": { "properties": {}, "title": "param", "type": "object" }, "paypal": { "properties": {}, "title": "param", "type": "object" }, "paypay": { "properties": {}, "title": "param", "type": "object" }, "payto": { "properties": { "account_number": {}, "bsb_number": {}, "pay_id": {} }, "title": "param", "type": "object" }, "pix": { "properties": {}, "title": "param", "type": "object" }, "promptpay": { "properties": {}, "title": "param", "type": "object" }, "radar_options": { "properties": { "session": {} }, "title": "radar_options_with_hidden_options", "type": "object" }, "revolut_pay": { "properties": {}, "title": "param", "type": "object" }, "samsung_pay": { "properties": {}, "title": "param", "type": "object" }, "satispay": { "properties": {}, "title": "param", "type": "object" }, "scalapay": { "properties": {}, "title": "param", "type": "object" }, "sepa_debit": { "properties": { "iban": {} }, "required": ["iban"], "title": "param", "type": "object" }, "sequra": { "properties": {}, "title": "param", "type": "object" }, "sofort": { "properties": { "country": {} }, "required": ["country"], "title": "param", "type": "object" }, "sunbit": { "properties": {}, "title": "param", "type": "object" }, "swish": { "properties": {}, "title": "param", "type": "object" }, "twint": { "properties": {}, "title": "param", "type": "object" }, "type": { "enum": ["acss_debit", "affirm", "afterpay_clearpay", "alipay", "alma", "amazon_pay", "au_becs_debit", "bacs_debit", "bancontact", "billie", "bizum", "blik", "boleto", "cashapp", "crypto", "customer_balance", "eps", "fpx", "giropay", "grabpay", "ideal", "kakao_pay", "klarna", "konbini", "kr_card", "link", "mb_way", "mobilepay", "multibanco", "naver_pay", "nz_bank_account", "oxxo", "p24", "pay_by_bank", "payco", "paynow", "paypal", "paypay", "payto", "pix", "promptpay", "revolut_pay", "samsung_pay", "satispay", "scalapay", "sepa_debit", "sequra", "sofort", "sunbit", "swish", "twint", "upi", "us_bank_account", "wechat_pay", "zip"], "type": "string", "x-stripeBypassValidation": true }, "upi": { "properties": { "mandate_options": {} }, "title": "param", "type": "object" }, "us_bank_account": { "properties": { "account_holder_type": {}, "account_number": {}, "account_type": {}, "financial_connections_account": {}, "routing_number": {} }, "title": "payment_method_param", "type": "object" }, "wechat_pay": { "properties": {}, "title": "param", "type": "object" }, "zip": { "properties": {}, "title": "param", "type": "object" } }, "required": ["type"], "title": "payment_method_data_params", "type": "object" }, "payment_method_options": { "description": "Payment-method-specific configuration for this ConfirmationToken.", "properties": { "card": { "properties": { "installments": {} }, "title": "card_param", "type": "object" } }, "title": "test_payment_method_options_param", "type": "object" }, "return_url": { "description": "Return URL used to confirm the Intent.", "type": "string" }, "setup_future_usage": { "description": "Indicates that you intend to make future payments with this ConfirmationToken's payment method.\n\nThe presence of this property will [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete.", "enum": ["off_session", "on_session"], "type": "string" }, "shipping": { "description": "Shipping information for this ConfirmationToken.", "properties": { "address": { "properties": { "city": {}, "country": {}, "line1": {}, "line2": {}, "postal_code": {}, "state": {} }, "title": "optional_fields_address", "type": "object" }, "name": { "maxLength": 5000, "type": "string" }, "phone": { "anyOf": [{}, {}] } }, "required": ["address", "name"], "title": "recipient_shipping_with_optional_fields_address", "type": "object" } }, "type": "object" } } }, "required": false }, "parameters": [] }, "GET /v1/confirmation_tokens/{confirmation_token}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "confirmation_token", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const confirmation_token_ref01_ent = client.ConfirmationToken();
        let confirmation_token_ref01_data = setup.data.new.confirmation_token['confirmation_token_ref01'];
        confirmation_token_ref01_data = (await confirmation_token_ref01_ent.create(confirmation_token_ref01_data)).data();
        (0, node_assert_1.default)(null != confirmation_token_ref01_data.id);
        // LOAD
        const confirmation_token_ref01_match_dt0 = {};
        confirmation_token_ref01_match_dt0.id = confirmation_token_ref01_data.id;
        const confirmation_token_ref01_data_dt0 = (await confirmation_token_ref01_ent.load(confirmation_token_ref01_match_dt0)).data();
        (0, node_assert_1.default)(confirmation_token_ref01_data_dt0.id === confirmation_token_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/confirmation_token/ConfirmationTokenTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['confirmation_token01', 'confirmation_token02', 'confirmation_token03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_CONFIRMATION_TOKEN_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_CONFIRMATION_TOKEN_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_CONFIRMATION_TOKEN_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.StripeSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.STRIPE_APIKEY,
                secret: env.STRIPE_SECRET,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.STRIPE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ConfirmationTokenEntity.test.js.map