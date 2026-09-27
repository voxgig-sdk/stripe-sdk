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
(0, node_test_1.describe)('FileEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.File();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'file.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time at which the object was created.", "t": "`$INTEGER`", "key$": "created", "index$": 0 }, "data": { "a": true, "h": "Data", "n": "data", "r": true, "sh": "Details about each object.", "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 3 }, "key$": "data", "index$": 1 }, "expires_at": { "a": true, "fo": "unix-time", "h": "Expires At", "n": "expires_at", "r": false, "sh": "The file expires and isn't available at this time in epoch seconds.", "t": "`$INTEGER`", "key$": "expires_at", "index$": 2 }, "filename": { "a": true, "h": "Filename", "n": "filename", "r": false, "sh": "The suitable name for saving the file to a filesystem.", "t": "`$STRING`", "key$": "filename", "index$": 3 }, "has_more": { "a": true, "h": "Has More", "n": "has_more", "r": true, "sh": "True if this list has another page of items after this one that can be fetched.", "t": "`$BOOLEAN`", "key$": "has_more", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 5 }, "links": { "a": true, "h": "Links", "n": "links", "r": true, "sh": "A list of [file links](https://docs.stripe.com/api#file_links) that point at this file.", "t": "`$OBJECT`", "union": { "branches": 2, "count": 1, "depth": 5 }, "key$": "links", "index$": 6 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 7 }, "purpose": { "a": true, "h": "Purpose", "n": "purpose", "r": true, "sh": "The [purpose](https://docs.stripe.com/file-upload#uploading-a-file) of the uploaded file.", "t": "`$STRING`", "key$": "purpose", "index$": 8 }, "size": { "a": true, "h": "Size", "n": "size", "r": true, "sh": "The size of the file object in bytes.", "t": "`$INTEGER`", "key$": "size", "index$": 9 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "A suitable title for the document.", "t": "`$STRING`", "key$": "title", "index$": 10 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The returned file type (for example, `csv`, `pdf`, `jpg`, or `png`).", "t": "`$STRING`", "key$": "type", "index$": 11 }, "url": { "a": true, "h": "Url", "n": "url", "op": { "list": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The URL where this list can be accessed.", "t": "`$STRING`", "key$": "url", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "file", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/files", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/files", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "files" }], "t": { "req": "`reqdata`", "res": "`body.links`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/files", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "created", "or": "created", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "purpose", "or": "purpose", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/v1/files", "q": { "exist": ["created", "ending_before", "expand", "limit", "purpose", "starting_after"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "files" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/files/{file}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "file", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/files/{file}", "q": { "exist": ["expand", "id"] }, "r": { "param": { "file": "id" } }, "s": [{ "lit": "v1" }, { "lit": "files" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.links`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "file", "name__orig": "file", "Name": "File", "name_": "file", "name-": "file", "NAME": "FILE", "index$": 57 }, { "active": true, "entity": "file", "key$": "BasicFileFlow", "kind": "basic", "name": "BasicFileFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "file_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "file_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "file_ref01", "srcdatavar": "file_ref01_data", "suffix": "_dt0" }, "m": { "id": "file01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-file_ref01" } }], "index$": 2 }] }, 'File', { "POST /v1/files": { "protocol": "http", "requestBody": { "content": { "multipart/form-data": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "file_link_data": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "file": { "description": "A file to upload. Make sure that the specifications follow RFC 2388, which defines file transfers for the `multipart/form-data` protocol.", "format": "binary", "type": "string" }, "file_link_data": { "description": "Optional parameters that automatically create a [file link](https://docs.stripe.com/api#file_links) for the newly created file.", "properties": { "create": { "type": "boolean" }, "expires_at": { "format": "unix-time", "type": "integer" }, "metadata": { "anyOf": [{}, {}] } }, "required": ["create"], "title": "file_link_creation_params", "type": "object" }, "purpose": { "description": "The [purpose](https://docs.stripe.com/file-upload#uploading-a-file) of the uploaded file.", "enum": ["account_requirement", "additional_verification", "business_icon", "business_logo", "customer_signature", "dispute_evidence", "identity_document", "issuing_regulatory_reporting", "pci_document", "platform_terms_of_service", "tax_document_user_upload", "terminal_android_apk", "terminal_reader_splashscreen", "terminal_wifi_certificate", "terminal_wifi_private_key"], "type": "string", "x-stripeBypassValidation": true } }, "required": ["file", "purpose"], "type": "object" } } }, "required": true }, "parameters": [] }, "GET /v1/files": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Only return files that were created during the given date interval.", "explode": true, "in": "query", "name": "created", "required": false, "schema": { "anyOf": [{ "properties": { "gt": { "type": "integer" }, "gte": { "type": "integer" }, "lt": { "type": "integer" }, "lte": { "type": "integer" } }, "title": "range_query_specs", "type": "object" }, { "type": "integer" }] }, "style": "deepObject", "index$": 0 }, { "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 1 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 2 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 3 }, { "description": "Filter queries by the file purpose. If you don't provide a purpose, the queries return unfiltered files.", "in": "query", "name": "purpose", "required": false, "schema": { "enum": ["account_requirement", "additional_verification", "business_icon", "business_logo", "customer_signature", "dispute_evidence", "document_provider_identity_document", "finance_report_run", "financial_account_statement", "identity_document", "identity_document_downloadable", "issuing_regulatory_reporting", "pci_document", "platform_terms_of_service", "selfie", "sigma_scheduled_query", "tax_document_user_upload", "terminal_android_apk", "terminal_reader_splashscreen", "terminal_wifi_certificate", "terminal_wifi_private_key"], "maxLength": 5000, "type": "string", "x-stripeBypassValidation": true }, "style": "form", "index$": 4 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 5 }] }, "GET /v1/files/{file}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "file", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const file_ref01_ent = client.File();
        let file_ref01_data = setup.data.new.file['file_ref01'];
        file_ref01_data = (await file_ref01_ent.create(file_ref01_data)).data();
        (0, node_assert_1.default)(null != file_ref01_data.id);
        // LIST
        const file_ref01_match = {};
        const file_ref01_list = (await file_ref01_ent.list(file_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(file_ref01_list, { id: file_ref01_data.id })));
        // LOAD
        const file_ref01_match_dt0 = {};
        file_ref01_match_dt0.id = file_ref01_data.id;
        const file_ref01_data_dt0 = (await file_ref01_ent.load(file_ref01_match_dt0)).data();
        (0, node_assert_1.default)(file_ref01_data_dt0.id === file_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/file/FileTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['file01', 'file02', 'file03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_FILE_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_FILE_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_FILE_ENTID'];
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
//# sourceMappingURL=FileEntity.test.js.map