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
(0, node_test_1.describe)('PaymentMethodDomainEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.PaymentMethodDomain();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'payment_method_domain.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "amazon_pay": { "a": true, "h": "Amazon Pay", "n": "amazon_pay", "r": true, "sh": "Indicates the status of a specific payment method on a payment method domain.", "t": "`$OBJECT`", "key$": "amazon_pay", "index$": 0 }, "apple_pay": { "a": true, "h": "Apple Pay", "n": "apple_pay", "r": true, "sh": "Indicates the status of a specific payment method on a payment method domain.", "t": "`$OBJECT`", "key$": "apple_pay", "index$": 1 }, "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time at which the object was created.", "t": "`$INTEGER`", "key$": "created", "index$": 2 }, "domain_name": { "a": true, "h": "Domain Name", "n": "domain_name", "r": true, "sh": "The domain name that this payment method domain object represents.", "t": "`$STRING`", "key$": "domain_name", "index$": 3 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": true, "sh": "Whether this payment method domain is enabled.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 4 }, "google_pay": { "a": true, "h": "Google Pay", "n": "google_pay", "r": true, "sh": "Indicates the status of a specific payment method on a payment method domain.", "t": "`$OBJECT`", "key$": "google_pay", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "klarna": { "a": true, "h": "Klarna", "n": "klarna", "r": true, "sh": "Indicates the status of a specific payment method on a payment method domain.", "t": "`$OBJECT`", "key$": "klarna", "index$": 7 }, "link": { "a": true, "h": "Link", "n": "link", "r": true, "sh": "Indicates the status of a specific payment method on a payment method domain.", "t": "`$OBJECT`", "key$": "link", "index$": 8 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 9 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 10 }, "paypal": { "a": true, "h": "Paypal", "n": "paypal", "r": true, "sh": "Indicates the status of a specific payment method on a payment method domain.", "t": "`$OBJECT`", "key$": "paypal", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "payment_method_domain", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/payment_method_domains/{payment_method_domain}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "payment_method_domain", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/payment_method_domains/{payment_method_domain}", "q": { "exist": ["id"] }, "r": { "param": { "payment_method_domain": "id" } }, "s": [{ "lit": "v1" }, { "lit": "payment_method_domains" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/payment_method_domains/{payment_method_domain}/validate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "payment_method_domain", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/payment_method_domains/{payment_method_domain}/validate", "q": { "$action": "validate", "exist": ["id"] }, "r": { "param": { "payment_method_domain": "id" } }, "s": [{ "lit": "v1" }, { "lit": "payment_method_domains" }, { "var": "id" }, { "lit": "validate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /v1/payment_method_domains", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/payment_method_domains", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "payment_method_domains" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/payment_method_domains", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "domain_name", "or": "domain_name", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "enabled", "or": "enabled", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/v1/payment_method_domains", "q": { "exist": ["domain_name", "enabled", "ending_before", "expand", "limit", "starting_after"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "payment_method_domains" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/payment_method_domains/{payment_method_domain}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "payment_method_domain", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/payment_method_domains/{payment_method_domain}", "q": { "exist": ["expand", "id"] }, "r": { "param": { "payment_method_domain": "id" } }, "s": [{ "lit": "v1" }, { "lit": "payment_method_domains" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "payment_method_domain", "name__orig": "payment_method_domain", "Name": "PaymentMethodDomain", "name_": "payment_method_domain", "name-": "payment-method-domain", "NAME": "PAYMENT_METHOD_DOMAIN", "index$": 92 }, { "active": true, "entity": "payment_method_domain", "key$": "BasicPaymentMethodDomainFlow", "kind": "basic", "name": "BasicPaymentMethodDomainFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "payment_method_domain_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "payment_method_domain_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "payment_method_domain_ref01", "srcdatavar": "payment_method_domain_ref01_data", "suffix": "_dt0" }, "m": { "id": "payment_method_domain01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-payment_method_domain_ref01" } }], "index$": 2 }] }, 'PaymentMethodDomain', { "POST /v1/payment_method_domains/{payment_method_domain}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "enabled": { "description": "Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements or Embedded Checkout.", "type": "boolean" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "payment_method_domain", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/payment_method_domains/{payment_method_domain}/validate": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "payment_method_domain", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/payment_method_domains": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "domain_name": { "description": "The domain name that this payment method domain object represents.", "maxLength": 5000, "type": "string" }, "enabled": { "description": "Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements or Embedded Checkout.", "type": "boolean" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "required": ["domain_name"], "type": "object" } } }, "required": true }, "parameters": [] }, "GET /v1/payment_method_domains": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "The domain name that this payment method domain object represents.", "in": "query", "name": "domain_name", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 0 }, { "description": "Whether this payment method domain is enabled. If the domain is not enabled, payment methods will not appear in Elements or Embedded Checkout", "in": "query", "name": "enabled", "required": false, "schema": { "type": "boolean" }, "style": "form", "index$": 1 }, { "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 2 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 3 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 4 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 5 }] }, "GET /v1/payment_method_domains/{payment_method_domain}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "payment_method_domain", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const payment_method_domain_ref01_ent = client.PaymentMethodDomain();
        let payment_method_domain_ref01_data = setup.data.new.payment_method_domain['payment_method_domain_ref01'];
        payment_method_domain_ref01_data = (await payment_method_domain_ref01_ent.create(payment_method_domain_ref01_data)).data();
        (0, node_assert_1.default)(null != payment_method_domain_ref01_data.id);
        // LIST
        const payment_method_domain_ref01_match = {};
        const payment_method_domain_ref01_list = (await payment_method_domain_ref01_ent.list(payment_method_domain_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(payment_method_domain_ref01_list, { id: payment_method_domain_ref01_data.id })));
        // LOAD
        const payment_method_domain_ref01_match_dt0 = {};
        payment_method_domain_ref01_match_dt0.id = payment_method_domain_ref01_data.id;
        const payment_method_domain_ref01_data_dt0 = (await payment_method_domain_ref01_ent.load(payment_method_domain_ref01_match_dt0)).data();
        (0, node_assert_1.default)(payment_method_domain_ref01_data_dt0.id === payment_method_domain_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/payment_method_domain/PaymentMethodDomainTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['payment_method_domain01', 'payment_method_domain02', 'payment_method_domain03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_PAYMENT_METHOD_DOMAIN_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_PAYMENT_METHOD_DOMAIN_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_PAYMENT_METHOD_DOMAIN_ENTID'];
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
//# sourceMappingURL=PaymentMethodDomainEntity.test.js.map