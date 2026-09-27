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
(0, node_test_1.describe)('FeedbackOptionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.FeedbackOption();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'feedback_option.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "deactivated_at": { "a": true, "fo": "unix-time", "h": "Deactivated At", "n": "deactivated_at", "r": false, "sh": "The time the feedback option was deactivated, if any.", "t": "`$INTEGER`", "key$": "deactivated_at", "index$": 0 }, "description": { "a": true, "h": "Description", "n": "description", "r": true, "sh": "An arbitrary string attached to the object.", "t": "`$STRING`", "key$": "description", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 3 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 4 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The feedback option's status.", "t": "`$STRING`", "key$": "status", "index$": 5 }, "status_transitions": { "a": true, "h": "Status Transitions", "n": "status_transitions", "r": true, "t": "`$OBJECT`", "key$": "status_transitions", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "feedback_option", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/billing/feedback_options/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/billing/feedback_options/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "billing" }, { "lit": "feedback_options" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.status_transitions`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/billing/feedback_options/{id}/deactivate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/billing/feedback_options/{id}/deactivate", "q": { "$action": "deactivate", "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "billing" }, { "lit": "feedback_options" }, { "var": "id" }, { "lit": "deactivate" }], "t": { "req": "`reqdata`", "res": "`body.status_transitions`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /v1/billing/feedback_options", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/billing/feedback_options", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "billing" }, { "lit": "feedback_options" }], "t": { "req": "`reqdata`", "res": "`body.status_transitions`" }, "index$": 2 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/billing/feedback_options", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/v1/billing/feedback_options", "q": { "exist": ["ending_before", "expand", "limit", "starting_after", "status"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "billing" }, { "lit": "feedback_options" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/billing/feedback_options/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/billing/feedback_options/{id}", "q": { "exist": ["expand", "id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "billing" }, { "lit": "feedback_options" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.status_transitions`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "feedback_option", "name__orig": "feedback_option", "Name": "FeedbackOption", "name_": "feedback_option", "name-": "feedback-option", "NAME": "FEEDBACK_OPTION", "index$": 56 }, { "active": true, "entity": "feedback_option", "key$": "BasicFeedbackOptionFlow", "kind": "basic", "name": "BasicFeedbackOptionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "feedback_option_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "feedback_option_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "feedback_option_ref01", "srcdatavar": "feedback_option_ref01_data", "suffix": "_dt0" }, "m": { "id": "feedback_option01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-feedback_option_ref01" } }], "index$": 2 }] }, 'FeedbackOption', { "POST /v1/billing/feedback_options/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "description": { "description": "The text of the feedback option, which customers see when canceling. Maximum 100 characters.", "maxLength": 100, "type": "string" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "type": "object" } } }, "required": false }, "parameters": [{ "description": "The ID of the feedback option to update.", "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/billing/feedback_options/{id}/deactivate": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "type": "object" } } }, "required": false }, "parameters": [{ "description": "The ID of the feedback option to deactivate.", "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/billing/feedback_options": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "description": { "description": "The text of the feedback option, which customers see when canceling. Maximum 100 characters.", "maxLength": 100, "type": "string" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "required": ["description"], "type": "object" } } }, "required": true }, "parameters": [] }, "GET /v1/billing/feedback_options": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 0 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 1 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 2 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 3 }, { "description": "Filter results to only include feedback options with the given status.", "in": "query", "name": "status", "required": false, "schema": { "enum": ["active", "inactive"], "type": "string" }, "style": "form", "index$": 4 }] }, "GET /v1/billing/feedback_options/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "description": "The ID of the feedback option to retrieve.", "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const feedback_option_ref01_ent = client.FeedbackOption();
        let feedback_option_ref01_data = setup.data.new.feedback_option['feedback_option_ref01'];
        feedback_option_ref01_data = (await feedback_option_ref01_ent.create(feedback_option_ref01_data)).data();
        (0, node_assert_1.default)(null != feedback_option_ref01_data.id);
        // LIST
        const feedback_option_ref01_match = {};
        const feedback_option_ref01_list = (await feedback_option_ref01_ent.list(feedback_option_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(feedback_option_ref01_list, { id: feedback_option_ref01_data.id })));
        // LOAD
        const feedback_option_ref01_match_dt0 = {};
        feedback_option_ref01_match_dt0.id = feedback_option_ref01_data.id;
        const feedback_option_ref01_data_dt0 = (await feedback_option_ref01_ent.load(feedback_option_ref01_match_dt0)).data();
        (0, node_assert_1.default)(feedback_option_ref01_data_dt0.id === feedback_option_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/feedback_option/FeedbackOptionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['feedback_option01', 'feedback_option02', 'feedback_option03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_FEEDBACK_OPTION_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_FEEDBACK_OPTION_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_FEEDBACK_OPTION_ENTID'];
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
//# sourceMappingURL=FeedbackOptionEntity.test.js.map