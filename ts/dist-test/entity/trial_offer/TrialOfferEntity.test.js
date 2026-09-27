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
(0, node_test_1.describe)('TrialOfferEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.TrialOffer();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'trial_offer.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active": { "a": true, "h": "Active", "n": "active", "r": true, "sh": "Whether the trial offer is active.", "t": "`$BOOLEAN`", "key$": "active", "index$": 0 }, "duration": { "a": true, "h": "Duration", "n": "duration", "r": true, "t": "`$OBJECT`", "key$": "duration", "index$": 1 }, "end_behavior": { "a": true, "h": "End Behavior", "n": "end_behavior", "r": true, "t": "`$OBJECT`", "union": { "branches": 3, "count": 14, "depth": 14 }, "key$": "end_behavior", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 4 }, "nickname": { "a": true, "h": "Nickname", "n": "nickname", "r": false, "sh": "A brief description of the trial offer, hidden from customers.", "t": "`$STRING`", "key$": "nickname", "index$": 5 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 6 }, "price": { "a": true, "h": "Price", "n": "price", "r": true, "sh": "The price during the trial offer.", "t": "`$NUMBER`", "union": { "branches": 3, "count": 12, "depth": 9 }, "key$": "price", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "trial_offer", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/product_catalog/trial_offers/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/product_catalog/trial_offers/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "product_catalog" }, { "lit": "trial_offers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/product_catalog/trial_offers", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/product_catalog/trial_offers", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "product_catalog" }, { "lit": "trial_offers" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/product_catalog/trial_offers", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "active", "or": "active", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "query", "n": "created", "or": "created", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "price", "or": "price", "r": false, "t": "`$ARRAY`", "index$": 5 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/v1/product_catalog/trial_offers", "q": { "exist": ["active", "created", "ending_before", "expand", "limit", "price", "starting_after"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "product_catalog" }, { "lit": "trial_offers" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/product_catalog/trial_offers/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/product_catalog/trial_offers/{id}", "q": { "exist": ["expand", "id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "product_catalog" }, { "lit": "trial_offers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "trial_offer", "name__orig": "trial_offer", "Name": "TrialOffer", "name_": "trial_offer", "name-": "trial-offer", "NAME": "TRIAL_OFFER", "index$": 142 }, { "active": true, "entity": "trial_offer", "key$": "BasicTrialOfferFlow", "kind": "basic", "name": "BasicTrialOfferFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "trial_offer_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "trial_offer_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "trial_offer_ref01", "srcdatavar": "trial_offer_ref01_data", "suffix": "_dt0" }, "m": { "id": "trial_offer01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-trial_offer_ref01" } }], "index$": 2 }] }, 'TrialOffer', { "POST /v1/product_catalog/trial_offers/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "active": { "description": "Whether the trial offer can be used for new purchases.", "type": "boolean" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/product_catalog/trial_offers": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "duration": { "explode": true, "style": "deepObject" }, "end_behavior": { "explode": true, "style": "deepObject" }, "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "active": { "description": "Whether the trial offer can be used for new subscriptions. Defaults to true.", "type": "boolean" }, "duration": { "description": "Duration of one service period of the trial.", "properties": { "relative": { "properties": { "iterations": {} }, "required": ["iterations"], "title": "trial_offer_duration_relative_param", "type": "object" }, "type": { "enum": ["relative"], "type": "string", "x-stripeBypassValidation": true } }, "required": ["type"], "title": "trial_offer_duration_param", "type": "object" }, "end_behavior": { "description": "Define behavior that occurs at the end of the trial.", "properties": { "transition": { "properties": { "price": {} }, "required": ["price"], "title": "trial_offer_end_behavior_transition_param", "type": "object" } }, "required": ["transition"], "title": "trial_offer_end_behavior_param", "type": "object" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "nickname": { "description": "A brief description of the trial offer, hidden from customers.", "maxLength": 255, "type": "string" }, "price": { "description": "Price configuration during the trial period (amount, billing scheme, etc).", "maxLength": 5000, "type": "string" } }, "required": ["duration", "end_behavior", "price"], "type": "object" } } }, "required": true }, "parameters": [] }, "GET /v1/product_catalog/trial_offers": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Only return trial offers that are active (`true`) or archived (`false`). If omitted, both active and archived trial offers are returned.", "in": "query", "name": "active", "required": false, "schema": { "type": "boolean" }, "style": "form", "index$": 0 }, { "description": "Only return trial offers that were created during the given date interval.", "explode": true, "in": "query", "name": "created", "required": false, "schema": { "anyOf": [{ "properties": { "gt": { "type": "integer" }, "gte": { "type": "integer" }, "lt": { "type": "integer" }, "lte": { "type": "integer" } }, "title": "range_query_specs", "type": "object" }, { "type": "integer" }] }, "style": "deepObject", "index$": 1 }, { "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 2 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 3 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 4 }, { "description": "Only return trial offers that reference these prices (during the trial period).", "explode": true, "in": "query", "name": "prices", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 5 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 6 }] }, "GET /v1/product_catalog/trial_offers/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const trial_offer_ref01_ent = client.TrialOffer();
        let trial_offer_ref01_data = setup.data.new.trial_offer['trial_offer_ref01'];
        trial_offer_ref01_data = (await trial_offer_ref01_ent.create(trial_offer_ref01_data)).data();
        (0, node_assert_1.default)(null != trial_offer_ref01_data.id);
        // LIST
        const trial_offer_ref01_match = {};
        const trial_offer_ref01_list = (await trial_offer_ref01_ent.list(trial_offer_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(trial_offer_ref01_list, { id: trial_offer_ref01_data.id })));
        // LOAD
        const trial_offer_ref01_match_dt0 = {};
        trial_offer_ref01_match_dt0.id = trial_offer_ref01_data.id;
        const trial_offer_ref01_data_dt0 = (await trial_offer_ref01_ent.load(trial_offer_ref01_match_dt0)).data();
        (0, node_assert_1.default)(trial_offer_ref01_data_dt0.id === trial_offer_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/trial_offer/TrialOfferTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['trial_offer01', 'trial_offer02', 'trial_offer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_TRIAL_OFFER_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_TRIAL_OFFER_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_TRIAL_OFFER_ENTID'];
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
//# sourceMappingURL=TrialOfferEntity.test.js.map