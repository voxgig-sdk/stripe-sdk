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
(0, node_test_1.describe)('VerificationReportEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.VerificationReport();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'verification_report.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "client_reference_id": { "a": true, "h": "Client Reference Id", "n": "client_reference_id", "r": false, "sh": "A string to reference this user.", "t": "`$STRING`", "key$": "client_reference_id", "index$": 0 }, "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time at which the object was created.", "t": "`$INTEGER`", "key$": "created", "index$": 1 }, "document": { "a": true, "h": "Document", "n": "document", "r": true, "sh": "Result from a document check", "t": "`$OBJECT`", "key$": "document", "index$": 2 }, "email": { "a": true, "h": "Email", "n": "email", "r": true, "sh": "Result from a email check", "t": "`$OBJECT`", "key$": "email", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 4 }, "id_number": { "a": true, "h": "Id Number", "n": "id_number", "r": true, "sh": "Result from an id_number check", "t": "`$OBJECT`", "key$": "id_number", "index$": 5 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 6 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 7 }, "options": { "a": true, "h": "Options", "n": "options", "r": false, "t": "`$OBJECT`", "key$": "options", "index$": 8 }, "phone": { "a": true, "h": "Phone", "n": "phone", "r": true, "sh": "Result from a phone check", "t": "`$OBJECT`", "key$": "phone", "index$": 9 }, "selfie": { "a": true, "h": "Selfie", "n": "selfie", "r": true, "sh": "Result from a selfie check", "t": "`$OBJECT`", "key$": "selfie", "index$": 10 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "Type of report.", "t": "`$STRING`", "key$": "type", "index$": 11 }, "verification_flow": { "a": true, "h": "Verification Flow", "n": "verification_flow", "r": false, "sh": "The configuration token of a verification flow from the dashboard.", "t": "`$STRING`", "key$": "verification_flow", "index$": 12 }, "verification_session": { "a": true, "h": "Verification Session", "n": "verification_session", "r": false, "sh": "ID of the VerificationSession that created this report.", "t": "`$STRING`", "key$": "verification_session", "index$": 13 } }, "id": { "field": "id", "name": "id" }, "name": "verification_report", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/identity/verification_reports", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "client_reference_id", "or": "client_reference_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "created", "or": "created", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "verification_session", "or": "verification_session", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/v1/identity/verification_reports", "q": { "exist": ["client_reference_id", "created", "ending_before", "expand", "limit", "starting_after", "type", "verification_session"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "identity" }, { "lit": "verification_reports" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/identity/verification_reports/{report}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "report", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/identity/verification_reports/{report}", "q": { "exist": ["expand", "id"] }, "r": { "param": { "report": "id" } }, "s": [{ "lit": "v1" }, { "lit": "identity" }, { "lit": "verification_reports" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "verification_report", "name__orig": "verification_report", "Name": "VerificationReport", "name_": "verification_report", "name-": "verification-report", "NAME": "VERIFICATION_REPORT", "index$": 145 }, { "active": true, "entity": "verification_report", "key$": "BasicVerificationReportFlow", "kind": "basic", "name": "BasicVerificationReportFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "verification_report_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "verification_report_ref01", "srcdatavar": "verification_report_ref01_data", "suffix": "_dt0" }, "m": { "id": "verification_report01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-verification_report_ref01" } }], "index$": 1 }] }, 'VerificationReport', { "GET /v1/identity/verification_reports": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.", "in": "query", "name": "client_reference_id", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 0 }, { "description": "Only return VerificationReports that were created during the given date interval.", "explode": true, "in": "query", "name": "created", "required": false, "schema": { "anyOf": [{ "properties": { "gt": { "type": "integer" }, "gte": { "type": "integer" }, "lt": { "type": "integer" }, "lte": { "type": "integer" } }, "title": "range_query_specs", "type": "object" }, { "type": "integer" }] }, "style": "deepObject", "index$": 1 }, { "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 2 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 3 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 4 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 5 }, { "description": "Only return VerificationReports of this type", "in": "query", "name": "type", "required": false, "schema": { "enum": ["document", "id_number"], "type": "string", "x-stripeBypassValidation": true }, "style": "form", "index$": 6 }, { "description": "Only return VerificationReports created by this VerificationSession ID. It is allowed to provide a VerificationIntent ID.", "in": "query", "name": "verification_session", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 7 }] }, "GET /v1/identity/verification_reports/{report}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "report", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let verification_report_ref01_data = Object.values(setup.data.existing.verification_report)[0];
        // LIST
        const verification_report_ref01_ent = client.VerificationReport();
        const verification_report_ref01_match = {};
        const verification_report_ref01_list = (await verification_report_ref01_ent.list(verification_report_ref01_match)).map((e) => e.data());
        // LOAD
        const verification_report_ref01_match_dt0 = {};
        verification_report_ref01_match_dt0.id = verification_report_ref01_data.id;
        const verification_report_ref01_data_dt0 = (await verification_report_ref01_ent.load(verification_report_ref01_match_dt0)).data();
        (0, node_assert_1.default)(verification_report_ref01_data_dt0.id === verification_report_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/verification_report/VerificationReportTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['verification_report01', 'verification_report02', 'verification_report03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_VERIFICATION_REPORT_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_VERIFICATION_REPORT_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_VERIFICATION_REPORT_ENTID'];
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
//# sourceMappingURL=VerificationReportEntity.test.js.map