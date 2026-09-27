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
(0, node_test_1.describe)('SettlementEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.Settlement();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'settlement.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "settlement", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/issuing/settlements/{settlement}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "settlement", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/issuing/settlements/{settlement}", "q": { "exist": ["id"] }, "r": { "param": { "settlement": "id" } }, "s": [{ "lit": "v1" }, { "lit": "issuing" }, { "lit": "settlements" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.metadata`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/test_helpers/issuing/settlements/{settlement}/complete", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "settlement", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/test_helpers/issuing/settlements/{settlement}/complete", "q": { "$action": "complete", "exist": ["id"] }, "r": { "param": { "settlement": "id" } }, "s": [{ "lit": "v1" }, { "lit": "test_helpers" }, { "lit": "issuing" }, { "lit": "settlements" }, { "var": "id" }, { "lit": "complete" }], "t": { "req": "`reqdata`", "res": "`body.metadata`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /v1/test_helpers/issuing/settlements", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/test_helpers/issuing/settlements", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "test_helpers" }, { "lit": "issuing" }, { "lit": "settlements" }], "t": { "req": "`reqdata`", "res": "`body.metadata`" }, "index$": 2 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/issuing/settlements/{settlement}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "settlement", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/issuing/settlements/{settlement}", "q": { "exist": ["expand", "id"] }, "r": { "param": { "settlement": "id" } }, "s": [{ "lit": "v1" }, { "lit": "issuing" }, { "lit": "settlements" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.metadata`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "settlement", "name__orig": "settlement", "Name": "Settlement", "name_": "settlement", "name-": "settlement", "NAME": "SETTLEMENT", "index$": 121 }, { "active": true, "entity": "settlement", "key$": "BasicSettlementFlow", "kind": "basic", "name": "BasicSettlementFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "settlement_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "settlement_ref01", "srcdatavar": "settlement_ref01_data", "suffix": "_dt0" }, "m": { "id": "settlement01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-settlement_ref01" } }], "index$": 1 }] }, 'Settlement', { "POST /v1/issuing/settlements/{settlement}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "metadata": { "additionalProperties": { "type": "string" }, "description": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.", "type": "object" } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "settlement", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/test_helpers/issuing/settlements/{settlement}/complete": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "type": "object" } } }, "required": false }, "parameters": [{ "description": "The settlement token to mark as complete.", "in": "path", "name": "settlement", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/test_helpers/issuing/settlements": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "bin": { "description": "The Bank Identification Number reflecting this settlement record.", "maxLength": 5000, "type": "string" }, "clearing_date": { "description": "The date that the transactions are cleared and posted to user's accounts.", "type": "integer" }, "currency": { "description": "Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).", "format": "currency", "type": "string" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "interchange_fees_amount": { "description": "The total interchange received as reimbursement for the transactions.", "type": "integer" }, "net_total_amount": { "description": "The total net amount required to settle with the network.", "type": "integer" }, "network": { "description": "The card network for this settlement. One of [\"visa\", \"maestro\", \"mastercard\"]", "enum": ["maestro", "visa"], "type": "string", "x-stripeBypassValidation": true }, "network_settlement_identifier": { "description": "The Settlement Identification Number assigned by the network.", "maxLength": 5000, "type": "string" }, "transaction_amount": { "description": "The total transaction amount reflected in this settlement.", "type": "integer" }, "transaction_count": { "description": "The total number of transactions reflected in this settlement.", "type": "integer" } }, "required": ["bin", "clearing_date", "currency", "net_total_amount"], "type": "object" } } }, "required": true }, "parameters": [] }, "GET /v1/issuing/settlements/{settlement}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "settlement", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const settlement_ref01_ent = client.Settlement();
        let settlement_ref01_data = setup.data.new.settlement['settlement_ref01'];
        settlement_ref01_data = (await settlement_ref01_ent.create(settlement_ref01_data)).data();
        (0, node_assert_1.default)(null != settlement_ref01_data.id);
        // LOAD
        const settlement_ref01_match_dt0 = {};
        settlement_ref01_match_dt0.id = settlement_ref01_data.id;
        const settlement_ref01_data_dt0 = (await settlement_ref01_ent.load(settlement_ref01_match_dt0)).data();
        (0, node_assert_1.default)(settlement_ref01_data_dt0.id === settlement_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/settlement/SettlementTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['settlement01', 'settlement02', 'settlement03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_SETTLEMENT_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_SETTLEMENT_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_SETTLEMENT_ENTID'];
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
//# sourceMappingURL=SettlementEntity.test.js.map