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
(0, node_test_1.describe)('ReversalEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.Reversal();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'reversal.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "amount": { "a": true, "h": "Amount", "n": "amount", "r": true, "sh": "Amount, in cents (or local equivalent).", "t": "`$INTEGER`", "key$": "amount", "index$": 0 }, "balance_transaction": { "a": true, "h": "Balance Transaction", "n": "balance_transaction", "r": false, "sh": "Balance transaction that describes the impact on your account balance.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "balance_transaction", "index$": 1 }, "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time at which the object was created.", "t": "`$INTEGER`", "key$": "created", "index$": 2 }, "currency": { "a": true, "fo": "currency", "h": "Currency", "n": "currency", "r": true, "sh": "Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.", "t": "`$STRING`", "key$": "currency", "index$": 3 }, "destination_payment_refund": { "a": true, "h": "Destination Payment Refund", "n": "destination_payment_refund", "r": false, "sh": "Linked payment refund for the transfer reversal.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "destination_payment_refund", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 5 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "sh": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.", "t": "`$OBJECT`", "key$": "metadata", "index$": 6 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 7 }, "source_refund": { "a": true, "h": "Source Refund", "n": "source_refund", "r": false, "sh": "ID of the refund responsible for the transfer reversal.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "source_refund", "index$": 8 }, "transfer": { "a": true, "h": "Transfer", "n": "transfer", "r": true, "sh": "ID of the transfer that was reversed.", "t": "`$ANY`", "union": { "branches": 2, "count": 9, "depth": 5 }, "key$": "transfer", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "reversal", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/transfers/{transfer}/reversals/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "transfer_id", "or": "transfer", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/v1/transfers/{transfer}/reversals/{id}", "q": { "exist": ["id", "transfer_id"] }, "r": { "param": { "transfer": "transfer_id" } }, "s": [{ "lit": "v1" }, { "lit": "transfers" }, { "var": "transfer_id" }, { "lit": "reversals" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/transfers/{id}/reversals", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "transfer_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/transfers/{id}/reversals", "q": { "exist": ["transfer_id"] }, "r": { "param": { "id": "transfer_id" } }, "s": [{ "lit": "v1" }, { "lit": "transfers" }, { "var": "transfer_id" }, { "lit": "reversals" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/transfers/{id}/reversals", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "transfer_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/v1/transfers/{id}/reversals", "q": { "exist": ["ending_before", "expand", "limit", "starting_after", "transfer_id"] }, "r": { "param": { "id": "transfer_id" } }, "s": [{ "lit": "v1" }, { "lit": "transfers" }, { "var": "transfer_id" }, { "lit": "reversals" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/transfers/{transfer}/reversals/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "transfer_id", "or": "transfer", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/transfers/{transfer}/reversals/{id}", "q": { "exist": ["expand", "id", "transfer_id"] }, "r": { "param": { "transfer": "transfer_id" } }, "s": [{ "lit": "v1" }, { "lit": "transfers" }, { "var": "transfer_id" }, { "lit": "reversals" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.transfer"]] }, "key$": "reversal", "name__orig": "reversal", "Name": "Reversal", "name_": "reversal", "name-": "reversal", "NAME": "REVERSAL", "index$": 114 }, { "active": true, "entity": "reversal", "key$": "BasicReversalFlow", "kind": "basic", "name": "BasicReversalFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "reversal_ref01" }, "m": { "transfer_id": "transfer01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "transfer_id": "transfer01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "reversal_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "reversal_ref01", "srcdatavar": "reversal_ref01_data", "suffix": "_dt0" }, "m": { "id": "reversal01", "transfer_id": "transfer01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-reversal_ref01" } }], "index$": 2 }] }, 'Reversal', { "POST /v1/transfers/{transfer}/reversals/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "metadata": { "anyOf": [{ "additionalProperties": { "type": "string" }, "type": "object" }, { "enum": [""], "type": "string" }], "description": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`." } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }, { "in": "path", "name": "transfer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] }, "POST /v1/transfers/{id}/reversals": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "amount": { "description": "A positive integer in cents (or local equivalent) representing how much of this transfer to reverse. Can only reverse up to the unreversed amount remaining of the transfer. Partial transfer reversals are only allowed for transfers to Stripe Accounts. Defaults to the entire transfer amount.", "type": "integer" }, "description": { "description": "An arbitrary string which you can attach to a reversal object. This will be unset if you POST an empty value.", "maxLength": 5000, "type": "string" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "metadata": { "anyOf": [{ "additionalProperties": { "type": "string" }, "type": "object" }, { "enum": [""], "type": "string" }], "description": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`." }, "refund_application_fee": { "description": "Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to the amount of the transfer reversed.", "type": "boolean" } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "GET /v1/transfers/{id}/reversals": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 0 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 1 }, { "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 2 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 3 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 4 }] }, "GET /v1/transfers/{transfer}/reversals/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }, { "in": "path", "name": "transfer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const reversal_ref01_ent = client.Reversal();
        let reversal_ref01_data = setup.data.new.reversal['reversal_ref01'];
        reversal_ref01_data['transfer_id'] = setup.idmap['transfer01'];
        reversal_ref01_data = (await reversal_ref01_ent.create(reversal_ref01_data)).data();
        (0, node_assert_1.default)(null != reversal_ref01_data.id);
        // LIST
        const reversal_ref01_match = {};
        reversal_ref01_match['transfer_id'] = setup.idmap['transfer01'];
        const reversal_ref01_list = (await reversal_ref01_ent.list(reversal_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(reversal_ref01_list, { id: reversal_ref01_data.id })));
        // LOAD
        const reversal_ref01_match_dt0 = {};
        reversal_ref01_match_dt0.id = reversal_ref01_data.id;
        const reversal_ref01_data_dt0 = (await reversal_ref01_ent.load(reversal_ref01_match_dt0)).data();
        (0, node_assert_1.default)(reversal_ref01_data_dt0.id === reversal_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/reversal/ReversalTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['reversal01', 'reversal02', 'reversal03', 'transfer01', 'transfer02', 'transfer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_REVERSAL_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_REVERSAL_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_REVERSAL_ENTID'];
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
//# sourceMappingURL=ReversalEntity.test.js.map