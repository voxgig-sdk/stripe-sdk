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
(0, node_test_1.describe)('FeatureEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.Feature();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'feature.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active": { "a": true, "h": "Active", "n": "active", "r": true, "sh": "Inactive features cannot be attached to new products and will not be returned from the features list endpoint.", "t": "`$BOOLEAN`", "key$": "active", "index$": 0 }, "entitlement_feature": { "a": true, "h": "Entitlement Feature", "n": "entitlement_feature", "r": true, "sh": "A feature represents a monetizable ability or functionality in your system.", "t": "`$OBJECT`", "key$": "entitlement_feature", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 3 }, "lookup_key": { "a": true, "h": "Lookup Key", "n": "lookup_key", "r": true, "sh": "A unique key you provide as your own system identifier.", "t": "`$STRING`", "key$": "lookup_key", "index$": 4 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": true, "sh": "Set of key-value pairs that you can attach to an object.", "t": "`$OBJECT`", "key$": "metadata", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The feature's name, for your own purpose, not meant to be displayable to the customer.", "t": "`$STRING`", "key$": "name", "index$": 6 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "feature", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/entitlements/features/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/entitlements/features/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "entitlements" }, { "lit": "features" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.metadata`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/entitlements/features", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/entitlements/features", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "entitlements" }, { "lit": "features" }], "t": { "req": "`reqdata`", "res": "`body.metadata`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/entitlements/features", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "archived", "or": "archived", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "lookup_key", "or": "lookup_key", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/v1/entitlements/features", "q": { "exist": ["archived", "ending_before", "expand", "limit", "lookup_key", "starting_after"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "entitlements" }, { "lit": "features" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v1/products/{product}/features", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "product_id", "or": "product", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/v1/products/{product}/features", "q": { "exist": ["ending_before", "expand", "limit", "product_id", "starting_after"] }, "r": { "param": { "product": "product_id" } }, "s": [{ "lit": "v1" }, { "lit": "products" }, { "var": "product_id" }, { "lit": "features" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/entitlements/features/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/entitlements/features/{id}", "q": { "exist": ["expand", "id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "entitlements" }, { "lit": "features" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.metadata`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.product"]] }, "key$": "feature", "name__orig": "feature", "Name": "Feature", "name_": "feature", "name-": "feature", "NAME": "FEATURE", "index$": 55 }, { "active": true, "entity": "feature", "key$": "BasicFeatureFlow", "kind": "basic", "name": "BasicFeatureFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "feature_ref01" }, "m": { "product_id": "product01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "product_id": "product01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "feature_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "feature_ref01", "srcdatavar": "feature_ref01_data", "suffix": "_dt0" }, "m": { "id": "feature01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-feature_ref01" } }], "index$": 2 }] }, 'Feature', { "POST /v1/entitlements/features/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "active": { "description": "Inactive features cannot be attached to new products and will not be returned from the features list endpoint.", "type": "boolean" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "metadata": { "anyOf": [{ "additionalProperties": { "type": "string" }, "type": "object" }, { "enum": [""], "type": "string" }], "description": "Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format." }, "name": { "description": "The feature's name, for your own purpose, not meant to be displayable to the customer.", "maxLength": 80, "type": "string" } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/entitlements/features": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "lookup_key": { "description": "A unique key you provide as your own system identifier. This may be up to 80 characters.", "maxLength": 80, "type": "string" }, "metadata": { "additionalProperties": { "type": "string" }, "description": "Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.", "type": "object" }, "name": { "description": "The feature's name, for your own purpose, not meant to be displayable to the customer.", "maxLength": 80, "type": "string" } }, "required": ["lookup_key", "name"], "type": "object" } } }, "required": true }, "parameters": [] }, "GET /v1/entitlements/features": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "If set, filter results to only include features with the given archive status.", "in": "query", "name": "archived", "required": false, "schema": { "type": "boolean" }, "style": "form", "index$": 0 }, { "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 1 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 2 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 3 }, { "description": "If set, filter results to only include features with the given lookup_key.", "in": "query", "name": "lookup_key", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 4 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 5 }] }, "GET /v1/products/{product}/features": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 0 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 1 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 2 }, { "in": "path", "name": "product", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 3 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 4 }] }, "GET /v1/entitlements/features/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "description": "The ID of the feature.", "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const feature_ref01_ent = client.Feature();
        let feature_ref01_data = setup.data.new.feature['feature_ref01'];
        feature_ref01_data['product_id'] = setup.idmap['product01'];
        feature_ref01_data = (await feature_ref01_ent.create(feature_ref01_data)).data();
        (0, node_assert_1.default)(null != feature_ref01_data.id);
        // LIST
        const feature_ref01_match = {};
        feature_ref01_match['product_id'] = setup.idmap['product01'];
        const feature_ref01_list = (await feature_ref01_ent.list(feature_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(feature_ref01_list, { id: feature_ref01_data.id })));
        // LOAD
        const feature_ref01_match_dt0 = {};
        feature_ref01_match_dt0.id = feature_ref01_data.id;
        const feature_ref01_data_dt0 = (await feature_ref01_ent.load(feature_ref01_match_dt0)).data();
        (0, node_assert_1.default)(feature_ref01_data_dt0.id === feature_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/feature/FeatureTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['feature01', 'feature02', 'feature03', 'product01', 'product02', 'product03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_FEATURE_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_FEATURE_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_FEATURE_ENTID'];
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
//# sourceMappingURL=FeatureEntity.test.js.map