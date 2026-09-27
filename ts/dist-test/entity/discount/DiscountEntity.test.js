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
(0, node_test_1.describe)('DiscountEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.Discount();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'discount.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "checkout_session": { "a": true, "h": "Checkout Session", "n": "checkout_session", "r": false, "sh": "The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode.", "t": "`$STRING`", "key$": "checkout_session", "index$": 0 }, "customer": { "a": true, "h": "Customer", "n": "customer", "r": false, "sh": "The ID of the customer associated with this discount.", "t": "`$ANY`", "union": { "branches": 3, "count": 2, "depth": 1 }, "key$": "customer", "index$": 1 }, "customer_account": { "a": true, "h": "Customer Account", "n": "customer_account", "r": false, "sh": "The ID of the account representing the customer associated with this discount.", "t": "`$STRING`", "key$": "customer_account", "index$": 2 }, "end": { "a": true, "fo": "unix-time", "h": "End", "n": "end", "r": false, "sh": "If the coupon has a duration of `repeating`, the date that this discount will end.", "t": "`$INTEGER`", "key$": "end", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The ID of the discount object.", "t": "`$STRING`", "key$": "id", "index$": 4 }, "invoice": { "a": true, "h": "Invoice", "n": "invoice", "r": false, "sh": "The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice.", "t": "`$STRING`", "key$": "invoice", "index$": 5 }, "invoice_item": { "a": true, "h": "Invoice Item", "n": "invoice_item", "r": false, "sh": "The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item.", "t": "`$STRING`", "key$": "invoice_item", "index$": 6 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 7 }, "promotion_code": { "a": true, "h": "Promotion Code", "n": "promotion_code", "r": false, "sh": "The promotion code applied to create this discount.", "t": "`$ANY`", "union": { "branches": 3, "count": 7, "depth": 7 }, "key$": "promotion_code", "index$": 8 }, "source": { "a": true, "h": "Source", "n": "source", "r": true, "t": "`$OBJECT`", "union": { "branches": 2, "count": 1, "depth": 2 }, "key$": "source", "index$": 9 }, "start": { "a": true, "fo": "unix-time", "h": "Start", "n": "start", "r": true, "sh": "Date that the coupon was applied.", "t": "`$INTEGER`", "key$": "start", "index$": 10 }, "subscription": { "a": true, "h": "Subscription", "n": "subscription", "r": false, "sh": "The subscription that this coupon is applied to, if it is applied to a particular subscription.", "t": "`$STRING`", "key$": "subscription", "index$": 11 }, "subscription_item": { "a": true, "h": "Subscription Item", "n": "subscription_item", "r": false, "sh": "The subscription item that this coupon is applied to, if it is applied to a particular subscription item.", "t": "`$STRING`", "key$": "subscription_item", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "discount", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "customer_id", "or": "customer", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "subscription_id", "or": "subscription_exposed_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount", "q": { "exist": ["customer_id", "expand", "subscription_id"] }, "r": { "param": { "customer": "customer_id", "subscription_exposed_id": "subscription_id" } }, "s": [{ "lit": "v1" }, { "lit": "customers" }, { "var": "customer_id" }, { "lit": "subscriptions" }, { "var": "subscription_id" }, { "lit": "discount" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v1/customers/{customer}/discount", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "customer_id", "or": "customer", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/customers/{customer}/discount", "q": { "exist": ["customer_id", "expand"] }, "r": { "param": { "customer": "customer_id" } }, "s": [{ "lit": "v1" }, { "lit": "customers" }, { "var": "customer_id" }, { "lit": "discount" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "customer_id", "or": "customer", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "subscription_id", "or": "subscription_exposed_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount", "q": { "exist": ["customer_id", "subscription_id"] }, "r": { "param": { "customer": "customer_id", "subscription_exposed_id": "subscription_id" } }, "s": [{ "lit": "v1" }, { "lit": "customers" }, { "var": "customer_id" }, { "lit": "subscriptions" }, { "var": "subscription_id" }, { "lit": "discount" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /v1/customers/{customer}/discount", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "customer_id", "or": "customer", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v1/customers/{customer}/discount", "q": { "exist": ["customer_id"] }, "r": { "param": { "customer": "customer_id" } }, "s": [{ "lit": "v1" }, { "lit": "customers" }, { "var": "customer_id" }, { "lit": "discount" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /v1/subscriptions/{subscription_exposed_id}/discount", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "subscription_id", "or": "subscription_exposed_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v1/subscriptions/{subscription_exposed_id}/discount", "q": { "exist": ["subscription_id"] }, "r": { "param": { "subscription_exposed_id": "subscription_id" } }, "s": [{ "lit": "v1" }, { "lit": "subscriptions" }, { "var": "subscription_id" }, { "lit": "discount" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.customer"], ["$.main.kit.entity.customer", "$.main.kit.entity.subscription"]] }, "key$": "discount", "name__orig": "discount", "Name": "Discount", "name_": "discount", "name-": "discount", "NAME": "DISCOUNT", "index$": 47 }, { "active": true, "entity": "discount", "key$": "BasicDiscountFlow", "kind": "basic", "name": "BasicDiscountFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "discount_ref01", "srcdatavar": "discount_ref01_data", "suffix": "_dt0" }, "m": { "id": "discount01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-discount_ref01" } }], "index$": 0 }] }, 'Discount', { "GET /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "customer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 1 }, { "in": "path", "name": "subscription_exposed_id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 2 }] }, "GET /v1/customers/{customer}/discount": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "customer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 1 }] }, "DELETE /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "customer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }, { "in": "path", "name": "subscription_exposed_id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] }, "DELETE /v1/customers/{customer}/discount": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "customer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "DELETE /v1/subscriptions/{subscription_exposed_id}/discount": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "subscription_exposed_id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let discount_ref01_data = Object.values(setup.data.existing.discount)[0];
        // LOAD
        const discount_ref01_ent = client.Discount();
        const discount_ref01_match_dt0 = {};
        discount_ref01_match_dt0.id = discount_ref01_data.id;
        const discount_ref01_data_dt0 = (await discount_ref01_ent.load(discount_ref01_match_dt0)).data();
        (0, node_assert_1.default)(discount_ref01_data_dt0.id === discount_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/discount/DiscountTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['discount01', 'discount02', 'discount03', 'customer01', 'customer02', 'customer03', 'subscription01', 'subscription02', 'subscription03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_DISCOUNT_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_DISCOUNT_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_DISCOUNT_ENTID'];
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
//# sourceMappingURL=DiscountEntity.test.js.map