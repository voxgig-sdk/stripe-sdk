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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SessionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.Session();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'session.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "amount_total", "req": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "cancel_url", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "created", "req": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "currency", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "customer", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "mode", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "object", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "payment_status", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "status", "req": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "success_url", "req": false, "type": "`$STRING`", "index$": 10 }], "id": { "field": "id", "name": "id" }, "name": "session", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /checkout/sessions", "json": "{\"operationId\":\"createCheckoutSession\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/x-www-form-urlencoded\":{\"schema\":{\"properties\":{\"cancel_url\":{\"type\":\"string\"},\"currency\":{\"type\":\"string\"},\"customer\":{\"type\":\"string\"},\"mode\":{\"type\":\"string\"},\"success_url\":{\"type\":\"string\"}},\"required\":[\"mode\",\"success_url\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"amount_total\":{\"type\":\"integer\"},\"cancel_url\":{\"type\":\"string\"},\"created\":{\"type\":\"integer\"},\"currency\":{\"type\":\"string\"},\"customer\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"mode\":{\"type\":\"string\"},\"object\":{\"type\":\"string\"},\"payment_status\":{\"type\":\"string\"},\"status\":{\"type\":\"string\"},\"success_url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"The created checkout session\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/checkout/sessions", "segments": [{ "lit": "checkout" }, { "lit": "sessions" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "customer", "orig": "customer", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /checkout/sessions", "json": "{\"operationId\":\"listCheckoutSessions\",\"parameters\":[{\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"customer\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"amount_total\":{\"type\":\"integer\"},\"cancel_url\":{\"type\":\"string\"},\"created\":{\"type\":\"integer\"},\"currency\":{\"type\":\"string\"},\"customer\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"mode\":{\"type\":\"string\"},\"object\":{\"type\":\"string\"},\"payment_status\":{\"type\":\"string\"},\"status\":{\"type\":\"string\"},\"success_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"A page of checkout sessions\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/checkout/sessions", "segments": [{ "lit": "checkout" }, { "lit": "sessions" }], "select": { "exist": ["customer", "limit"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /checkout/sessions/{id}", "json": "{\"operationId\":\"getCheckoutSession\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"amount_total\":{\"type\":\"integer\"},\"cancel_url\":{\"type\":\"string\"},\"created\":{\"type\":\"integer\"},\"currency\":{\"type\":\"string\"},\"customer\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"mode\":{\"type\":\"string\"},\"object\":{\"type\":\"string\"},\"payment_status\":{\"type\":\"string\"},\"status\":{\"type\":\"string\"},\"success_url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"The requested checkout session\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/checkout/sessions/{id}", "segments": [{ "lit": "checkout" }, { "lit": "sessions" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "session", "name__orig": "session", "Name": "Session", "name_": "session", "name-": "session", "NAME": "SESSION", "index$": 0 }, { "active": true, "entity": "session", "key$": "BasicSessionFlow", "kind": "basic", "name": "BasicSessionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "session_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "session_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "session_ref01", "srcdatavar": "session_ref01_data", "suffix": "_dt0" }, "match": { "id": "session01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-session_ref01" } }], "index$": 2 }] }, 'Session');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const session_ref01_ent = client.Session();
        let session_ref01_data = setup.data.new.session['session_ref01'];
        session_ref01_data = (await session_ref01_ent.create(session_ref01_data)).data();
        (0, node_assert_1.default)(null != session_ref01_data.id);
        // LIST
        const session_ref01_match = {};
        const session_ref01_list = (await session_ref01_ent.list(session_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(session_ref01_list, { id: session_ref01_data.id })));
        // LOAD
        const session_ref01_match_dt0 = {};
        session_ref01_match_dt0.id = session_ref01_data.id;
        const session_ref01_data_dt0 = (await session_ref01_ent.load(session_ref01_match_dt0)).data();
        (0, node_assert_1.default)(session_ref01_data_dt0.id === session_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/session/SessionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['session01', 'session02', 'session03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_SESSION_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
    });
    idmap = env['STRIPE_TEST_SESSION_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_SESSION_ENTID'];
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
//# sourceMappingURL=SessionEntity.test.js.map