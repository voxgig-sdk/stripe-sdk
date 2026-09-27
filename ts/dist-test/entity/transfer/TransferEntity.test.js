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
(0, node_test_1.describe)('TransferEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.Transfer();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'transfer.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "amount": { "a": true, "h": "Amount", "n": "amount", "r": true, "sh": "Amount in cents (or local equivalent) to be transferred.", "t": "`$INTEGER`", "key$": "amount", "index$": 0 }, "amount_reversed": { "a": true, "h": "Amount Reversed", "n": "amount_reversed", "r": true, "sh": "Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).", "t": "`$INTEGER`", "key$": "amount_reversed", "index$": 1 }, "balance_transaction": { "a": true, "h": "Balance Transaction", "n": "balance_transaction", "r": false, "sh": "Balance transaction that describes the impact of this transfer on your account balance.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "balance_transaction", "index$": 2 }, "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time that this record of the transfer was first created.", "t": "`$INTEGER`", "key$": "created", "index$": 3 }, "currency": { "a": true, "fo": "currency", "h": "Currency", "n": "currency", "r": true, "sh": "Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.", "t": "`$STRING`", "key$": "currency", "index$": 4 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "An arbitrary string attached to the object.", "t": "`$STRING`", "key$": "description", "index$": 5 }, "destination": { "a": true, "h": "Destination", "n": "destination", "r": false, "sh": "ID of the Stripe account the transfer was sent to.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "destination", "index$": 6 }, "destination_payment": { "a": true, "h": "Destination Payment", "n": "destination_payment", "r": false, "sh": "If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "destination_payment", "index$": 7 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 8 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 9 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": true, "sh": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.", "t": "`$OBJECT`", "key$": "metadata", "index$": 10 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 11 }, "reversals": { "a": true, "h": "Reversals", "n": "reversals", "r": true, "sh": "A list of reversals that have been applied to the transfer.", "t": "`$OBJECT`", "key$": "reversals", "index$": 12 }, "reversed": { "a": true, "h": "Reversed", "n": "reversed", "r": true, "sh": "Whether the transfer has been fully reversed.", "t": "`$BOOLEAN`", "key$": "reversed", "index$": 13 }, "source_transaction": { "a": true, "h": "Source Transaction", "n": "source_transaction", "r": false, "sh": "ID of the charge that was used to fund the transfer.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "source_transaction", "index$": 14 }, "source_type": { "a": true, "h": "Source Type", "n": "source_type", "r": false, "sh": "The source balance this transfer came from.", "t": "`$STRING`", "key$": "source_type", "index$": 15 }, "transfer_group": { "a": true, "h": "Transfer Group", "n": "transfer_group", "r": false, "sh": "A string that identifies this transaction as part of a group.", "t": "`$STRING`", "key$": "transfer_group", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "transfer", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/transfers/{transfer}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "transfer", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/transfers/{transfer}", "q": { "exist": ["id"] }, "r": { "param": { "transfer": "id" } }, "s": [{ "lit": "v1" }, { "lit": "transfers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/transfers", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/transfers", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "transfers" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/transfers", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "created", "or": "created", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "destination", "or": "destination", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "transfer_group", "or": "transfer_group", "r": false, "t": "`$STRING`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/v1/transfers", "q": { "exist": ["created", "destination", "ending_before", "expand", "limit", "starting_after", "transfer_group"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "transfers" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/transfers/{transfer}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "transfer", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/transfers/{transfer}", "q": { "exist": ["expand", "id"] }, "r": { "param": { "transfer": "id" } }, "s": [{ "lit": "v1" }, { "lit": "transfers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "transfer", "name__orig": "transfer", "Name": "Transfer", "name_": "transfer", "name-": "transfer", "NAME": "TRANSFER", "index$": 141 }, { "active": true, "entity": "transfer", "key$": "BasicTransferFlow", "kind": "basic", "name": "BasicTransferFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "transfer_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "transfer_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "transfer_ref01", "srcdatavar": "transfer_ref01_data", "suffix": "_dt0" }, "m": { "id": "transfer01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-transfer_ref01" } }], "index$": 2 }] }, 'Transfer', { "POST /v1/transfers/{transfer}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "description": { "description": "An arbitrary string attached to the object. Often useful for displaying to users.", "maxLength": 5000, "type": "string" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "metadata": { "anyOf": [{ "additionalProperties": { "type": "string" }, "type": "object" }, { "enum": [""], "type": "string" }], "description": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`." } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "transfer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/transfers": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "amount": { "description": "A positive integer in cents (or local equivalent) representing how much to transfer.", "type": "integer" }, "currency": { "description": "Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. Must be a [supported currency](https://docs.stripe.com/currencies).", "format": "currency", "type": "string" }, "description": { "description": "An arbitrary string attached to the object. Often useful for displaying to users.", "maxLength": 5000, "type": "string" }, "destination": { "description": "The ID of a connected Stripe account. <a href=\"/docs/connect/separate-charges-and-transfers\">See the Connect documentation</a> for details.", "type": "string" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "metadata": { "additionalProperties": { "type": "string" }, "description": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.", "type": "object" }, "source_transaction": { "description": "You can use this parameter to transfer funds from a charge before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available. [See the Connect documentation](https://docs.stripe.com/connect/separate-charges-and-transfers#transfer-availability) for details.", "type": "string" }, "source_type": { "description": "The source balance to use for this transfer. One of `bank_account`, `card`, or `fpx`. For most users, this will default to `card`.", "enum": ["bank_account", "card", "fpx"], "maxLength": 5000, "type": "string", "x-stripeBypassValidation": true }, "transfer_group": { "description": "A string that identifies this transaction as part of a group. See the [Connect documentation](https://docs.stripe.com/connect/separate-charges-and-transfers#transfer-options) for details.", "type": "string" } }, "required": ["currency", "destination"], "type": "object" } } }, "required": true }, "parameters": [] }, "GET /v1/transfers": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Only return transfers that were created during the given date interval.", "explode": true, "in": "query", "name": "created", "required": false, "schema": { "anyOf": [{ "properties": { "gt": { "type": "integer" }, "gte": { "type": "integer" }, "lt": { "type": "integer" }, "lte": { "type": "integer" } }, "title": "range_query_specs", "type": "object" }, { "type": "integer" }] }, "style": "deepObject", "index$": 0 }, { "description": "Only return transfers for the destination specified by this account ID.", "in": "query", "name": "destination", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 1 }, { "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 2 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 3 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 4 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 5 }, { "description": "Only return transfers with the specified transfer group.", "in": "query", "name": "transfer_group", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 6 }] }, "GET /v1/transfers/{transfer}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "transfer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const transfer_ref01_ent = client.Transfer();
        let transfer_ref01_data = setup.data.new.transfer['transfer_ref01'];
        transfer_ref01_data = (await transfer_ref01_ent.create(transfer_ref01_data)).data();
        (0, node_assert_1.default)(null != transfer_ref01_data.id);
        // LIST
        const transfer_ref01_match = {};
        const transfer_ref01_list = (await transfer_ref01_ent.list(transfer_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(transfer_ref01_list, { id: transfer_ref01_data.id })));
        // LOAD
        const transfer_ref01_match_dt0 = {};
        transfer_ref01_match_dt0.id = transfer_ref01_data.id;
        const transfer_ref01_data_dt0 = (await transfer_ref01_ent.load(transfer_ref01_match_dt0)).data();
        (0, node_assert_1.default)(transfer_ref01_data_dt0.id === transfer_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/transfer/TransferTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['transfer01', 'transfer02', 'transfer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_TRANSFER_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_TRANSFER_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_TRANSFER_ENTID'];
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
//# sourceMappingURL=TransferEntity.test.js.map