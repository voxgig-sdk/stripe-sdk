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
(0, node_test_1.describe)('LocationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.Location();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'location.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "address": { "a": true, "h": "Address", "n": "address", "r": true, "t": "`$OBJECT`", "key$": "address", "index$": 0 }, "address_kana": { "a": true, "h": "Address Kana", "n": "address_kana", "r": false, "t": "`$OBJECT`", "key$": "address_kana", "index$": 1 }, "address_kanji": { "a": true, "h": "Address Kanji", "n": "address_kanji", "r": false, "t": "`$OBJECT`", "key$": "address_kanji", "index$": 2 }, "city": { "a": true, "h": "City", "n": "city", "r": false, "sh": "City, district, suburb, town, or village.", "t": "`$STRING`", "key$": "city", "index$": 3 }, "configuration_overrides": { "a": true, "h": "Configuration Overrides", "n": "configuration_overrides", "r": false, "sh": "The ID of a configuration that will be used to customize all readers in this location.", "t": "`$STRING`", "key$": "configuration_overrides", "index$": 4 }, "country": { "a": true, "h": "Country", "n": "country", "r": false, "sh": "Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).", "t": "`$STRING`", "key$": "country", "index$": 5 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "A descriptive text providing additional context about the tax location.", "t": "`$STRING`", "key$": "description", "index$": 6 }, "display_name": { "a": true, "h": "Display Name", "n": "display_name", "r": true, "sh": "The display name of the location.", "t": "`$STRING`", "key$": "display_name", "index$": 7 }, "display_name_kana": { "a": true, "h": "Display Name Kana", "n": "display_name_kana", "r": false, "sh": "The Kana variation of the display name of the location.", "t": "`$STRING`", "key$": "display_name_kana", "index$": 8 }, "display_name_kanji": { "a": true, "h": "Display Name Kanji", "n": "display_name_kanji", "r": false, "sh": "The Kanji variation of the display name of the location.", "t": "`$STRING`", "key$": "display_name_kanji", "index$": 9 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 10 }, "line1": { "a": true, "h": "Line1", "n": "line1", "r": false, "sh": "Address line 1, such as the street, PO Box, or company name.", "t": "`$STRING`", "key$": "line1", "index$": 11 }, "line2": { "a": true, "h": "Line2", "n": "line2", "r": false, "sh": "Address line 2, such as the apartment, suite, unit, or building.", "t": "`$STRING`", "key$": "line2", "index$": 12 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 13 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": true, "sh": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.", "t": "`$OBJECT`", "key$": "metadata", "index$": 14 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 15 }, "phone": { "a": true, "h": "Phone", "n": "phone", "r": false, "sh": "The phone number of the location.", "t": "`$STRING`", "key$": "phone", "index$": 16 }, "postal_code": { "a": true, "h": "Postal Code", "n": "postal_code", "r": false, "sh": "ZIP or postal code.", "t": "`$STRING`", "key$": "postal_code", "index$": 17 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "sh": "State, county, province, or region ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).", "t": "`$STRING`", "key$": "state", "index$": 18 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "The type of tax location to be defined.", "t": "`$STRING`", "key$": "type", "index$": 19 } }, "id": { "field": "id", "name": "id" }, "name": "location", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/terminal/locations/{location}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "location", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/terminal/locations/{location}", "q": { "exist": ["id"] }, "r": { "param": { "location": "id" } }, "s": [{ "lit": "v1" }, { "lit": "terminal" }, { "lit": "locations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/tax/locations", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/tax/locations", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "tax" }, { "lit": "locations" }], "t": { "req": "`reqdata`", "res": "`body.address`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /v1/terminal/locations", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/terminal/locations", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "terminal" }, { "lit": "locations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/tax/locations", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": true, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/v1/tax/locations", "q": { "exist": ["ending_before", "expand", "limit", "starting_after", "type"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "tax" }, { "lit": "locations" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v1/terminal/locations", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/v1/terminal/locations", "q": { "exist": ["ending_before", "expand", "limit", "starting_after"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "terminal" }, { "lit": "locations" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/tax/locations/{location}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "location", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/tax/locations/{location}", "q": { "exist": ["expand", "id"] }, "r": { "param": { "location": "id" } }, "s": [{ "lit": "v1" }, { "lit": "tax" }, { "lit": "locations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.address`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v1/terminal/locations/{location}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "location", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/terminal/locations/{location}", "q": { "exist": ["expand", "id"] }, "r": { "param": { "location": "id" } }, "s": [{ "lit": "v1" }, { "lit": "terminal" }, { "lit": "locations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v1/terminal/locations/{location}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "location", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v1/terminal/locations/{location}", "q": { "exist": ["id"] }, "r": { "param": { "location": "id" } }, "s": [{ "lit": "v1" }, { "lit": "terminal" }, { "lit": "locations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "location", "name__orig": "location", "Name": "Location", "name_": "location", "name-": "location", "NAME": "LOCATION", "index$": 74 }, { "active": true, "entity": "location", "key$": "BasicLocationFlow", "kind": "basic", "name": "BasicLocationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "location_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "location_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "location_ref01", "srcdatavar": "location_ref01_data", "suffix": "_dt0" }, "m": { "id": "location01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-location_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "location_ref01", "suffix": "_rm0" }, "m": { "id": "location01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "location_ref01" } }], "index$": 4 }] }, 'Location', { "POST /v1/terminal/locations/{location}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "address": { "explode": true, "style": "deepObject" }, "address_kana": { "explode": true, "style": "deepObject" }, "address_kanji": { "explode": true, "style": "deepObject" }, "configuration_overrides": { "explode": true, "style": "deepObject" }, "display_name": { "explode": true, "style": "deepObject" }, "display_name_kana": { "explode": true, "style": "deepObject" }, "display_name_kanji": { "explode": true, "style": "deepObject" }, "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" }, "phone": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "address": { "description": "The full address of the location. You can't change the location's `country`. If you need to modify the `country` field, create a new `Location` object and re-register any existing readers to that location.", "properties": { "city": { "maxLength": 5000, "type": "string" }, "country": { "maxLength": 5000, "type": "string" }, "line1": { "maxLength": 5000, "type": "string" }, "line2": { "maxLength": 5000, "type": "string" }, "postal_code": { "maxLength": 5000, "type": "string" }, "state": { "maxLength": 5000, "type": "string" } }, "title": "update_location_address_param", "type": "object" }, "address_kana": { "description": "The Kana variation of the full address of the location (Japan only).", "properties": { "city": { "maxLength": 5000, "type": "string" }, "country": { "maxLength": 5000, "type": "string" }, "line1": { "maxLength": 5000, "type": "string" }, "line2": { "maxLength": 5000, "type": "string" }, "postal_code": { "maxLength": 5000, "type": "string" }, "state": { "maxLength": 5000, "type": "string" }, "town": { "maxLength": 5000, "type": "string" } }, "title": "japan_address_kana_specs", "type": "object" }, "address_kanji": { "description": "The Kanji variation of the full address of the location (Japan only).", "properties": { "city": { "maxLength": 5000, "type": "string" }, "country": { "maxLength": 5000, "type": "string" }, "line1": { "maxLength": 5000, "type": "string" }, "line2": { "maxLength": 5000, "type": "string" }, "postal_code": { "maxLength": 5000, "type": "string" }, "state": { "maxLength": 5000, "type": "string" }, "town": { "maxLength": 5000, "type": "string" } }, "title": "japan_address_kanji_specs", "type": "object" }, "configuration_overrides": { "anyOf": [{ "maxLength": 1000, "type": "string" }, { "enum": [""], "type": "string" }], "description": "The ID of a configuration that will be used to customize all readers in this location." }, "display_name": { "anyOf": [{ "maxLength": 1000, "type": "string" }, { "enum": [""], "type": "string" }], "description": "A name for the location." }, "display_name_kana": { "anyOf": [{ "maxLength": 1000, "type": "string" }, { "enum": [""], "type": "string" }], "description": "The Kana variation of the name for the location (Japan only)." }, "display_name_kanji": { "anyOf": [{ "maxLength": 1000, "type": "string" }, { "enum": [""], "type": "string" }], "description": "The Kanji variation of the name for the location (Japan only)." }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "metadata": { "anyOf": [{ "additionalProperties": { "type": "string" }, "type": "object" }, { "enum": [""], "type": "string" }], "description": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`." }, "phone": { "anyOf": [{ "type": "string" }, { "enum": [""], "type": "string" }], "description": "The phone number for the location." } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "location", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/tax/locations": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "address": { "explode": true, "style": "deepObject" }, "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "address": { "description": "The physical address of the tax location.", "properties": { "city": { "anyOf": [{}, {}] }, "country": { "maxLength": 5000, "type": "string" }, "line1": { "anyOf": [{}, {}] }, "line2": { "anyOf": [{}, {}] }, "postal_code": { "anyOf": [{}, {}] }, "state": { "anyOf": [{}, {}] } }, "required": ["country"], "title": "tax_location_address", "type": "object" }, "description": { "description": "Details to identify the tax location by its venue, types of events held, or available services, such as \"A spacious auditorium suitable for large concerts and events.\".", "maxLength": 5000, "type": "string" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "type": { "description": "The type of tax location. The only supported value is \"performance\".", "enum": ["performance"], "type": "string" } }, "required": ["address", "type"], "type": "object" } } }, "required": true }, "parameters": [] }, "POST /v1/terminal/locations": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "address": { "explode": true, "style": "deepObject" }, "address_kana": { "explode": true, "style": "deepObject" }, "address_kanji": { "explode": true, "style": "deepObject" }, "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "address": { "description": "The full address of the location.", "properties": { "city": { "maxLength": 5000, "type": "string" }, "country": { "maxLength": 5000, "type": "string" }, "line1": { "maxLength": 5000, "type": "string" }, "line2": { "maxLength": 5000, "type": "string" }, "postal_code": { "maxLength": 5000, "type": "string" }, "state": { "maxLength": 5000, "type": "string" } }, "required": ["country"], "title": "create_location_address_param", "type": "object" }, "address_kana": { "description": "The Kana variation of the full address of the location (Japan only).", "properties": { "city": { "maxLength": 5000, "type": "string" }, "country": { "maxLength": 5000, "type": "string" }, "line1": { "maxLength": 5000, "type": "string" }, "line2": { "maxLength": 5000, "type": "string" }, "postal_code": { "maxLength": 5000, "type": "string" }, "state": { "maxLength": 5000, "type": "string" }, "town": { "maxLength": 5000, "type": "string" } }, "title": "japan_address_kana_specs", "type": "object" }, "address_kanji": { "description": "The Kanji variation of the full address of the location (Japan only).", "properties": { "city": { "maxLength": 5000, "type": "string" }, "country": { "maxLength": 5000, "type": "string" }, "line1": { "maxLength": 5000, "type": "string" }, "line2": { "maxLength": 5000, "type": "string" }, "postal_code": { "maxLength": 5000, "type": "string" }, "state": { "maxLength": 5000, "type": "string" }, "town": { "maxLength": 5000, "type": "string" } }, "title": "japan_address_kanji_specs", "type": "object" }, "configuration_overrides": { "description": "The ID of a configuration that will be used to customize all readers in this location.", "maxLength": 500, "type": "string" }, "display_name": { "description": "A name for the location. Maximum length is 1000 characters.", "maxLength": 1000, "type": "string" }, "display_name_kana": { "description": "The Kana variation of the name for the location (Japan only). Maximum length is 1000 characters.", "maxLength": 1000, "type": "string" }, "display_name_kanji": { "description": "The Kanji variation of the name for the location (Japan only). Maximum length is 1000 characters.", "maxLength": 1000, "type": "string" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "metadata": { "anyOf": [{ "additionalProperties": { "type": "string" }, "type": "object" }, { "enum": [""], "type": "string" }], "description": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`." }, "phone": { "description": "The phone number for the location.", "type": "string" } }, "type": "object" } } }, "required": false }, "parameters": [] }, "GET /v1/tax/locations": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 0 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 1 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 2 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 3 }, { "description": "Type of the tax location. Currently the only option is `performance`.", "in": "query", "name": "type", "required": true, "schema": { "enum": ["performance"], "type": "string" }, "style": "form", "index$": 4 }] }, "GET /v1/terminal/locations": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 0 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 1 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 2 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 3 }] }, "GET /v1/tax/locations/{location}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "location", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] }, "GET /v1/terminal/locations/{location}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "location", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] }, "DELETE /v1/terminal/locations/{location}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "location", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const location_ref01_ent = client.Location();
        let location_ref01_data = setup.data.new.location['location_ref01'];
        location_ref01_data = (await location_ref01_ent.create(location_ref01_data)).data();
        (0, node_assert_1.default)(null != location_ref01_data.id);
        // LIST
        const location_ref01_match = {};
        const location_ref01_list = (await location_ref01_ent.list(location_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(location_ref01_list, { id: location_ref01_data.id })));
        // LOAD
        const location_ref01_match_dt0 = {};
        location_ref01_match_dt0.id = location_ref01_data.id;
        const location_ref01_data_dt0 = (await location_ref01_ent.load(location_ref01_match_dt0)).data();
        (0, node_assert_1.default)(location_ref01_data_dt0.id === location_ref01_data.id);
        // REMOVE
        const location_ref01_match_rm0 = { id: location_ref01_data.id };
        await location_ref01_ent.remove(location_ref01_match_rm0);
        // LIST
        const location_ref01_match_rt0 = {};
        const location_ref01_list_rt0 = (await location_ref01_ent.list(location_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(location_ref01_list_rt0, { id: location_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/location/LocationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['location01', 'location02', 'location03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_LOCATION_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_LOCATION_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_LOCATION_ENTID'];
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
//# sourceMappingURL=LocationEntity.test.js.map