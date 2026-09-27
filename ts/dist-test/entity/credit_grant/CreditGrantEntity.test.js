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
(0, node_test_1.describe)('CreditGrantEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.CreditGrant();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'credit_grant.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "amount": { "a": true, "h": "Amount", "n": "amount", "r": true, "t": "`$OBJECT`", "key$": "amount", "index$": 0 }, "applicability_config": { "a": true, "h": "Applicability Config", "n": "applicability_config", "r": true, "t": "`$OBJECT`", "key$": "applicability_config", "index$": 1 }, "category": { "a": true, "h": "Category", "n": "category", "r": true, "sh": "The category of this credit grant.", "t": "`$STRING`", "key$": "category", "index$": 2 }, "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time at which the object was created.", "t": "`$INTEGER`", "key$": "created", "index$": 3 }, "customer": { "a": true, "h": "Customer", "n": "customer", "r": true, "sh": "ID of the customer receiving the billing credits.", "t": "`$ANY`", "union": { "branches": 3, "count": 2, "depth": 1 }, "key$": "customer", "index$": 4 }, "customer_account": { "a": true, "h": "Customer Account", "n": "customer_account", "r": false, "sh": "ID of the account representing the customer receiving the billing credits", "t": "`$STRING`", "key$": "customer_account", "index$": 5 }, "effective_at": { "a": true, "fo": "unix-time", "h": "Effective At", "n": "effective_at", "r": false, "sh": "The time when the billing credits become effective-when they're eligible for use.", "t": "`$INTEGER`", "key$": "effective_at", "index$": 6 }, "expires_at": { "a": true, "fo": "unix-time", "h": "Expires At", "n": "expires_at", "r": false, "sh": "The time when the billing credits expire.", "t": "`$INTEGER`", "key$": "expires_at", "index$": 7 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 8 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 9 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": true, "sh": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.", "t": "`$OBJECT`", "key$": "metadata", "index$": 10 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "A descriptive name shown in dashboard.", "t": "`$STRING`", "key$": "name", "index$": 11 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 12 }, "priority": { "a": true, "h": "Priority", "n": "priority", "r": false, "sh": "The priority for applying this credit grant.", "t": "`$INTEGER`", "key$": "priority", "index$": 13 }, "test_clock": { "a": true, "h": "Test Clock", "n": "test_clock", "r": false, "sh": "ID of the test clock this credit grant belongs to.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "test_clock", "index$": 14 }, "updated": { "a": true, "fo": "unix-time", "h": "Updated", "n": "updated", "r": true, "sh": "Time at which the object was last updated.", "t": "`$INTEGER`", "key$": "updated", "index$": 15 }, "voided_at": { "a": true, "fo": "unix-time", "h": "Voided At", "n": "voided_at", "r": false, "sh": "The time when this credit grant was voided.", "t": "`$INTEGER`", "key$": "voided_at", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "credit_grant", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/billing/credit_grants/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/billing/credit_grants/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "billing" }, { "lit": "credit_grants" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/billing/credit_grants/{id}/expire", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/billing/credit_grants/{id}/expire", "q": { "$action": "expire", "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "billing" }, { "lit": "credit_grants" }, { "var": "id" }, { "lit": "expire" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /v1/billing/credit_grants/{id}/void", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/billing/credit_grants/{id}/void", "q": { "$action": "void", "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "billing" }, { "lit": "credit_grants" }, { "var": "id" }, { "lit": "void" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /v1/billing/credit_grants", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/billing/credit_grants", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "billing" }, { "lit": "credit_grants" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/billing/credit_grants", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "customer", "or": "customer", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "customer_account", "or": "customer_account", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/v1/billing/credit_grants", "q": { "exist": ["customer", "customer_account", "ending_before", "expand", "limit", "starting_after"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "billing" }, { "lit": "credit_grants" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/billing/credit_grants/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/billing/credit_grants/{id}", "q": { "exist": ["expand", "id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "billing" }, { "lit": "credit_grants" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "credit_grant", "name__orig": "credit_grant", "Name": "CreditGrant", "name_": "credit_grant", "name-": "credit-grant", "NAME": "CREDIT_GRANT", "index$": 29 }, { "active": true, "entity": "credit_grant", "key$": "BasicCreditGrantFlow", "kind": "basic", "name": "BasicCreditGrantFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "credit_grant_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "credit_grant_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "credit_grant_ref01", "srcdatavar": "credit_grant_ref01_data", "suffix": "_dt0" }, "m": { "id": "credit_grant01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-credit_grant_ref01" } }], "index$": 2 }] }, 'CreditGrant', { "POST /v1/billing/credit_grants/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "expires_at": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "expires_at": { "anyOf": [{ "format": "unix-time", "type": "integer" }, { "enum": [""], "type": "string" }], "description": "The time when the billing credits created by this credit grant expire. If set to empty, the billing credits never expire." }, "metadata": { "additionalProperties": { "type": "string" }, "description": "Set of key-value pairs you can attach to an object. You can use this to store additional information about the object (for example, cost basis) in a structured format.", "type": "object" } }, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Unique identifier for the object.", "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/billing/credit_grants/{id}/expire": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Unique identifier for the object.", "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/billing/credit_grants/{id}/void": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Unique identifier for the object.", "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/billing/credit_grants": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "amount": { "explode": true, "style": "deepObject" }, "applicability_config": { "explode": true, "style": "deepObject" }, "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "amount": { "description": "Amount of this credit grant.", "properties": { "monetary": { "properties": { "currency": {}, "value": {} }, "required": ["currency", "value"], "title": "monetary_amount_param", "type": "object" }, "type": { "enum": ["monetary"], "type": "string", "x-stripeBypassValidation": true } }, "required": ["type"], "title": "amount_param", "type": "object" }, "applicability_config": { "description": "Configuration specifying what this credit grant applies to. We currently only support `metered` prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them.", "properties": { "scope": { "properties": { "price_type": {}, "prices": {} }, "title": "scope_param", "type": "object" } }, "required": ["scope"], "title": "applicability_config_param", "type": "object" }, "category": { "description": "The category of this credit grant. It defaults to `paid` if not specified.", "enum": ["paid", "promotional"], "type": "string" }, "customer": { "description": "ID of the customer receiving the billing credits.", "maxLength": 5000, "type": "string" }, "customer_account": { "description": "ID of the account representing the customer receiving the billing credits.", "maxLength": 5000, "type": "string" }, "effective_at": { "description": "The time when the billing credits become effective-when they're eligible for use. It defaults to the current timestamp if not specified.", "format": "unix-time", "type": "integer" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "expires_at": { "description": "The time when the billing credits expire. If not specified, the billing credits don't expire.", "format": "unix-time", "type": "integer" }, "metadata": { "additionalProperties": { "type": "string" }, "description": "Set of key-value pairs that you can attach to an object. You can use this to store additional information about the object (for example, cost basis) in a structured format.", "type": "object" }, "name": { "description": "A descriptive name shown in the Dashboard.", "maxLength": 100, "type": "string" }, "priority": { "description": "The desired priority for applying this credit grant. If not specified, it will be set to the default value of 50. The highest priority is 0 and the lowest is 100.", "type": "integer" } }, "required": ["amount", "applicability_config"], "type": "object" } } }, "required": true }, "parameters": [] }, "GET /v1/billing/credit_grants": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Only return credit grants for this customer.", "in": "query", "name": "customer", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 0 }, { "description": "Only return credit grants for this account representing the customer.", "in": "query", "name": "customer_account", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 1 }, { "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 2 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 3 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 4 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 5 }] }, "GET /v1/billing/credit_grants/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "description": "Unique identifier for the object.", "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const credit_grant_ref01_ent = client.CreditGrant();
        let credit_grant_ref01_data = setup.data.new.credit_grant['credit_grant_ref01'];
        credit_grant_ref01_data = (await credit_grant_ref01_ent.create(credit_grant_ref01_data)).data();
        (0, node_assert_1.default)(null != credit_grant_ref01_data.id);
        // LIST
        const credit_grant_ref01_match = {};
        const credit_grant_ref01_list = (await credit_grant_ref01_ent.list(credit_grant_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(credit_grant_ref01_list, { id: credit_grant_ref01_data.id })));
        // LOAD
        const credit_grant_ref01_match_dt0 = {};
        credit_grant_ref01_match_dt0.id = credit_grant_ref01_data.id;
        const credit_grant_ref01_data_dt0 = (await credit_grant_ref01_ent.load(credit_grant_ref01_match_dt0)).data();
        (0, node_assert_1.default)(credit_grant_ref01_data_dt0.id === credit_grant_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/credit_grant/CreditGrantTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['credit_grant01', 'credit_grant02', 'credit_grant03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_CREDIT_GRANT_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_CREDIT_GRANT_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_CREDIT_GRANT_ENTID'];
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
//# sourceMappingURL=CreditGrantEntity.test.js.map