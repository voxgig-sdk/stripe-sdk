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
(0, node_test_1.describe)('SecretEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.Secret();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'secret.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time at which the object was created.", "t": "`$INTEGER`", "key$": "created", "index$": 0 }, "deleted": { "a": true, "h": "Deleted", "n": "deleted", "r": false, "sh": "If true, indicates that this secret has been deleted", "t": "`$BOOLEAN`", "key$": "deleted", "index$": 1 }, "expires_at": { "a": true, "fo": "unix-time", "h": "Expires At", "n": "expires_at", "r": false, "sh": "The Unix timestamp for the expiry time of the secret, after which the secret deletes.", "t": "`$INTEGER`", "key$": "expires_at", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "A name for the secret that's unique within the scope.", "t": "`$STRING`", "key$": "name", "index$": 5 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 6 }, "payload": { "a": true, "h": "Payload", "n": "payload", "r": false, "sh": "The plaintext secret value to be stored.", "t": "`$STRING`", "key$": "payload", "index$": 7 }, "scope": { "a": true, "h": "Scope", "n": "scope", "r": true, "t": "`$OBJECT`", "key$": "scope", "index$": 8 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "The secret scope type.", "t": "`$STRING`", "key$": "type", "index$": 9 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "sh": "The user ID, if type is set to \"user\"", "t": "`$STRING`", "key$": "user", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "secret", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/apps/secrets", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/apps/secrets", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "apps" }, { "lit": "secrets" }], "t": { "req": "`reqdata`", "res": "`body.scope`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/apps/secrets/delete", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/apps/secrets/delete", "q": { "$action": "delete" }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "apps" }, { "lit": "secrets" }, { "lit": "delete" }], "t": { "req": "`reqdata`", "res": "`body.scope`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/apps/secrets", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "scope", "or": "scope", "r": true, "t": "`$OBJECT`", "index$": 3 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/v1/apps/secrets", "q": { "exist": ["ending_before", "expand", "limit", "scope", "starting_after"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "apps" }, { "lit": "secrets" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/apps/secrets/find", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }, { "a": true, "k": "query", "n": "name", "or": "name", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "scope", "or": "scope", "r": true, "t": "`$OBJECT`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/v1/apps/secrets/find", "q": { "$action": "find", "exist": ["expand", "name", "scope"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "apps" }, { "lit": "secrets" }, { "lit": "find" }], "t": { "req": "`reqdata`", "res": "`body.scope`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "secret", "name__orig": "secret", "Name": "Secret", "name_": "secret", "name-": "secret", "NAME": "SECRET", "index$": 118 }, { "active": true, "entity": "secret", "key$": "BasicSecretFlow", "kind": "basic", "name": "BasicSecretFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "secret_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "secret_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "secret_ref01", "srcdatavar": "secret_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-secret_ref01" } }], "index$": 2 }] }, 'Secret', { "POST /v1/apps/secrets": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "scope": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "expires_at": { "description": "The Unix timestamp for the expiry time of the secret, after which the secret deletes.", "format": "unix-time", "type": "integer" }, "name": { "description": "A name for the secret that's unique within the scope.", "maxLength": 5000, "type": "string" }, "payload": { "description": "The plaintext secret value to be stored.", "maxLength": 5000, "type": "string" }, "scope": { "description": "Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.", "properties": { "type": { "enum": ["account", "user"], "type": "string" }, "user": { "maxLength": 5000, "type": "string" } }, "required": ["type"], "title": "scope_param", "type": "object" } }, "required": ["name", "payload", "scope"], "type": "object" } } }, "required": true }, "parameters": [] }, "POST /v1/apps/secrets/delete": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "scope": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "name": { "description": "A name for the secret that's unique within the scope.", "maxLength": 5000, "type": "string" }, "scope": { "description": "Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.", "properties": { "type": { "enum": ["account", "user"], "type": "string" }, "user": { "maxLength": 5000, "type": "string" } }, "required": ["type"], "title": "scope_param", "type": "object" } }, "required": ["name", "scope"], "type": "object" } } }, "required": true }, "parameters": [] }, "GET /v1/apps/secrets": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 0 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 1 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 2 }, { "description": "Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.", "explode": true, "in": "query", "name": "scope", "required": true, "schema": { "properties": { "type": { "enum": ["account", "user"], "type": "string" }, "user": { "maxLength": 5000, "type": "string" } }, "required": ["type"], "title": "scope_param", "type": "object" }, "style": "deepObject", "index$": 3 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 4 }] }, "GET /v1/apps/secrets/find": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "description": "A name for the secret that's unique within the scope.", "in": "query", "name": "name", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 1 }, { "description": "Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.", "explode": true, "in": "query", "name": "scope", "required": true, "schema": { "properties": { "type": { "enum": ["account", "user"], "type": "string" }, "user": { "maxLength": 5000, "type": "string" } }, "required": ["type"], "title": "scope_param", "type": "object" }, "style": "deepObject", "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const secret_ref01_ent = client.Secret();
        let secret_ref01_data = setup.data.new.secret['secret_ref01'];
        secret_ref01_data = (await secret_ref01_ent.create(secret_ref01_data)).data();
        (0, node_assert_1.default)(null != secret_ref01_data.id);
        // LIST
        const secret_ref01_match = {};
        const secret_ref01_list = (await secret_ref01_ent.list(secret_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(secret_ref01_list, { id: secret_ref01_data.id })));
        // LOAD
        const secret_ref01_match_dt0 = {};
        secret_ref01_match_dt0.id = secret_ref01_data.id;
        const secret_ref01_data_dt0 = (await secret_ref01_ent.load(secret_ref01_match_dt0)).data();
        (0, node_assert_1.default)(secret_ref01_data_dt0.id === secret_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/secret/SecretTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['secret01', 'secret02', 'secret03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_SECRET_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_SECRET_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_SECRET_ENTID'];
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
//# sourceMappingURL=SecretEntity.test.js.map