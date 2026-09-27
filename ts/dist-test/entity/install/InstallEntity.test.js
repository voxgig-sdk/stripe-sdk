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
(0, node_test_1.describe)('InstallEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.Install();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'install.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "account": { "a": true, "h": "Account", "n": "account", "r": true, "sh": "The ID of the account that the app install belongs to.", "t": "`$STRING`", "key$": "account", "index$": 0 }, "app": { "a": true, "h": "App", "n": "app", "r": true, "sh": "The ID of the app installed.", "t": "`$STRING`", "key$": "app", "index$": 1 }, "approval_required": { "a": true, "h": "Approval Required", "n": "approval_required", "r": true, "sh": "Whether the installer must authorize pending permissions, content security policy entries, or endpoints.", "t": "`$BOOLEAN`", "key$": "approval_required", "index$": 2 }, "auth_code": { "a": true, "h": "Auth Code", "n": "auth_code", "r": false, "sh": "The authorization code for an oauth app install.", "t": "`$STRING`", "key$": "auth_code", "index$": 3 }, "channel": { "a": true, "h": "Channel", "n": "channel", "r": true, "sh": "The distribution channel associated with the app install.", "t": "`$STRING`", "key$": "channel", "index$": 4 }, "content_security_policy_granted": { "a": true, "h": "Content Security Policy Granted", "n": "content_security_policy_granted", "r": true, "t": "`$OBJECT`", "key$": "content_security_policy_granted", "index$": 5 }, "content_security_policy_pending": { "a": true, "h": "Content Security Policy Pending", "n": "content_security_policy_pending", "r": true, "t": "`$OBJECT`", "key$": "content_security_policy_pending", "index$": 6 }, "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time at which the object was created.", "t": "`$INTEGER`", "key$": "created", "index$": 7 }, "created_by": { "a": true, "h": "Created By", "n": "created_by", "r": false, "sh": "The ID of the embedding platform that created the install, if applicable.", "t": "`$STRING`", "key$": "created_by", "index$": 8 }, "endpoints_granted": { "a": true, "h": "Endpoints Granted", "n": "endpoints_granted", "r": true, "sh": "The endpoint URLs authorized by the installer.", "t": "`$ARRAY`", "key$": "endpoints_granted", "index$": 9 }, "endpoints_pending": { "a": true, "h": "Endpoints Pending", "n": "endpoints_pending", "r": true, "sh": "The endpoint URLs requested by the latest app version that the installer has not authorized.", "t": "`$ARRAY`", "key$": "endpoints_pending", "index$": 10 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 11 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 12 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 13 }, "permissions_granted": { "a": true, "h": "Permissions Granted", "n": "permissions_granted", "r": true, "sh": "The permissions authorized by the installer.", "t": "`$ARRAY`", "key$": "permissions_granted", "index$": 14 }, "permissions_pending": { "a": true, "h": "Permissions Pending", "n": "permissions_pending", "r": true, "sh": "The permissions requested by the latest app version that the installer has not authorized.", "t": "`$ARRAY`", "key$": "permissions_pending", "index$": 15 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The status of the app install.", "t": "`$STRING`", "key$": "status", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "install", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/apps/installs/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/apps/installs/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "apps" }, { "lit": "installs" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/apps/installs/{id}/uninstall", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/apps/installs/{id}/uninstall", "q": { "$action": "uninstall", "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "apps" }, { "lit": "installs" }, { "var": "id" }, { "lit": "uninstall" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /v1/apps/installs", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/apps/installs", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "apps" }, { "lit": "installs" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/apps/installs", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "account", "or": "account", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "app", "or": "app", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "approval_required", "or": "approval_required", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "k": "query", "n": "channel", "or": "channel", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "created", "or": "created", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "k": "query", "n": "created_by", "or": "created_by", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 7 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 8 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 10 }] }, "k": "http", "m": "GET", "o": "/v1/apps/installs", "q": { "exist": ["account", "app", "approval_required", "channel", "created", "created_by", "ending_before", "expand", "limit", "starting_after", "status"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "apps" }, { "lit": "installs" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/apps/installs/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/apps/installs/{id}", "q": { "exist": ["expand", "id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "apps" }, { "lit": "installs" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "install", "name__orig": "install", "Name": "Install", "name_": "install", "name-": "install", "NAME": "INSTALL", "index$": 65 }, { "active": true, "entity": "install", "key$": "BasicInstallFlow", "kind": "basic", "name": "BasicInstallFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "install_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "install_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "install_ref01", "srcdatavar": "install_ref01_data", "suffix": "_dt0" }, "m": { "id": "install01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-install_ref01" } }], "index$": 2 }] }, 'Install', { "POST /v1/apps/installs/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/apps/installs/{id}/uninstall": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/apps/installs": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "app": { "description": "The ID of the app to install.", "maxLength": 5000, "type": "string" }, "channel": { "description": "The distribution channel to install from. Defaults to `public`. A private app must be installed on `private_test` or `private_live`, matching the mode of the API key.", "enum": ["private_live", "private_test", "public", "testing"], "type": "string" }, "code_challenge": { "description": "For OAuth apps, the PKCE code challenge used to issue the `auth_code` returned on the install. Must be 43 to 128 characters and contain only letters, numbers, `-`, `.`, `_`, and `~`. Only applies to installs made by the app developer or an embedding platform; ignored when an account installs its own private app.", "maxLength": 5000, "type": "string" }, "code_challenge_method": { "description": "The method used to derive `code_challenge`. Required when `code_challenge` is provided, and must be `S256`.", "maxLength": 5000, "type": "string" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "required": ["app"], "type": "object" } } }, "required": true }, "parameters": [] }, "GET /v1/apps/installs": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Only return installs made by this account. Only useful to app developers and embedding platforms, whose lists span the accounts that installed their app.", "in": "query", "name": "account", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 0 }, { "description": "Only return installs for the app specified by this app ID.", "in": "query", "name": "app", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 1 }, { "description": "Only return installs whose installer must authorize pending permissions, content security policy entries, or endpoints.", "in": "query", "name": "approval_required", "required": false, "schema": { "type": "boolean" }, "style": "form", "index$": 2 }, { "description": "Only return installs in the distribution channel specified by this channel name.", "in": "query", "name": "channel", "required": false, "schema": { "enum": ["private_live", "private_test", "public", "testing"], "type": "string" }, "style": "form", "index$": 3 }, { "description": "Only return app installs that were created during the given date interval.", "explode": true, "in": "query", "name": "created", "required": false, "schema": { "anyOf": [{ "properties": { "gt": { "type": "integer" }, "gte": { "type": "integer" }, "lt": { "type": "integer" }, "lte": { "type": "integer" } }, "title": "range_query_specs", "type": "object" }, { "type": "integer" }] }, "style": "deepObject", "index$": 4 }, { "description": "Only return installs created by the embedding platform specified by this account ID.", "in": "query", "name": "created_by", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 5 }, { "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 6 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 7 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 8 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 9 }, { "description": "Only return installs with the given status.", "in": "query", "name": "status", "required": false, "schema": { "enum": ["install_failed", "installed", "installing", "uninstall_failed", "uninstalling"], "maxLength": 5000, "type": "string" }, "style": "form", "index$": 10 }] }, "GET /v1/apps/installs/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const install_ref01_ent = client.Install();
        let install_ref01_data = setup.data.new.install['install_ref01'];
        install_ref01_data = (await install_ref01_ent.create(install_ref01_data)).data();
        (0, node_assert_1.default)(null != install_ref01_data.id);
        // LIST
        const install_ref01_match = {};
        const install_ref01_list = (await install_ref01_ent.list(install_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(install_ref01_list, { id: install_ref01_data.id })));
        // LOAD
        const install_ref01_match_dt0 = {};
        install_ref01_match_dt0.id = install_ref01_data.id;
        const install_ref01_data_dt0 = (await install_ref01_ent.load(install_ref01_match_dt0)).data();
        (0, node_assert_1.default)(install_ref01_data_dt0.id === install_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/install/InstallTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['install01', 'install02', 'install03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_INSTALL_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_INSTALL_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_INSTALL_ENTID'];
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
//# sourceMappingURL=InstallEntity.test.js.map