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
(0, node_test_1.describe)('PlanEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.Plan();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'plan.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active": { "a": true, "h": "Active", "n": "active", "r": true, "sh": "Whether the plan can be used for new purchases.", "t": "`$BOOLEAN`", "key$": "active", "index$": 0 }, "amount": { "a": true, "h": "Amount", "n": "amount", "r": false, "sh": "The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible.", "t": "`$INTEGER`", "key$": "amount", "index$": 1 }, "amount_decimal": { "a": true, "fo": "decimal", "h": "Amount Decimal", "n": "amount_decimal", "r": false, "sh": "The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places.", "t": "`$STRING`", "key$": "amount_decimal", "index$": 2 }, "billing_scheme": { "a": true, "h": "Billing Scheme", "n": "billing_scheme", "r": true, "sh": "Describes how to compute the price per period.", "t": "`$STRING`", "key$": "billing_scheme", "index$": 3 }, "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time at which the object was created.", "t": "`$INTEGER`", "key$": "created", "index$": 4 }, "currency": { "a": true, "fo": "currency", "h": "Currency", "n": "currency", "r": true, "sh": "Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.", "t": "`$STRING`", "key$": "currency", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "interval": { "a": true, "h": "Interval", "n": "interval", "r": true, "sh": "The frequency at which a subscription is billed.", "t": "`$STRING`", "key$": "interval", "index$": 7 }, "interval_count": { "a": true, "h": "Interval Count", "n": "interval_count", "r": true, "sh": "The number of intervals (specified in the `interval` attribute) between subscription billings.", "t": "`$INTEGER`", "key$": "interval_count", "index$": 8 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 9 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "sh": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.", "t": "`$OBJECT`", "key$": "metadata", "index$": 10 }, "meter": { "a": true, "h": "Meter", "n": "meter", "r": false, "sh": "The meter tracking the usage of a metered price", "t": "`$STRING`", "key$": "meter", "index$": 11 }, "nickname": { "a": true, "h": "Nickname", "n": "nickname", "r": false, "sh": "A brief description of the plan, hidden from customers.", "t": "`$STRING`", "key$": "nickname", "index$": 12 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 13 }, "product": { "a": true, "h": "Product", "n": "product", "r": false, "sh": "The product whose pricing this plan determines.", "t": "`$ANY`", "union": { "branches": 3, "count": 6, "depth": 5 }, "key$": "product", "index$": 14 }, "tiers": { "a": true, "h": "Tiers", "n": "tiers", "r": false, "sh": "Each element represents a pricing tier.", "t": "`$ARRAY`", "key$": "tiers", "index$": 15 }, "tiers_mode": { "a": true, "h": "Tiers Mode", "n": "tiers_mode", "r": false, "sh": "Defines if the tiering price should be `graduated` or `volume` based.", "t": "`$STRING`", "key$": "tiers_mode", "index$": 16 }, "transform_usage": { "a": true, "h": "Transform Usage", "n": "transform_usage", "r": false, "sh": "Apply a transformation to the reported usage or set quantity before computing the amount billed.", "t": "`$ANY`", "key$": "transform_usage", "index$": 17 }, "trial_period_days": { "a": true, "h": "Trial Period Days", "n": "trial_period_days", "r": false, "sh": "Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://docs.stripe.com/api#create_subscription-trial_from_plan).", "t": "`$INTEGER`", "key$": "trial_period_days", "index$": 18 }, "usage_type": { "a": true, "h": "Usage Type", "n": "usage_type", "r": true, "sh": "Configures how the quantity per period should be determined.", "t": "`$STRING`", "key$": "usage_type", "index$": 19 } }, "id": { "field": "id", "name": "id" }, "name": "plan", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/plans/{plan}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "plan", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/plans/{plan}", "q": { "exist": ["id"] }, "r": { "param": { "plan": "id" } }, "s": [{ "lit": "v1" }, { "lit": "plans" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/plans", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/plans", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "plans" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/plans", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "active", "or": "active", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "query", "n": "created", "or": "created", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "product", "or": "product", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/v1/plans", "q": { "exist": ["active", "created", "ending_before", "expand", "limit", "product", "starting_after"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "plans" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/plans/{plan}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "plan", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/plans/{plan}", "q": { "exist": ["expand", "id"] }, "r": { "param": { "plan": "id" } }, "s": [{ "lit": "v1" }, { "lit": "plans" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "plan", "name__orig": "plan", "Name": "Plan", "name_": "plan", "name-": "plan", "NAME": "PLAN", "index$": 98 }, { "active": true, "entity": "plan", "key$": "BasicPlanFlow", "kind": "basic", "name": "BasicPlanFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "plan_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "plan_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "plan_ref01", "srcdatavar": "plan_ref01_data", "suffix": "_dt0" }, "m": { "id": "plan01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-plan_ref01" } }], "index$": 2 }] }, 'Plan', { "POST /v1/plans/{plan}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "active": { "description": "Whether the plan is currently available for new subscriptions.", "type": "boolean" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "metadata": { "anyOf": [{ "additionalProperties": { "type": "string" }, "type": "object" }, { "enum": [""], "type": "string" }], "description": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`." }, "nickname": { "description": "A brief description of the plan, hidden from customers.", "maxLength": 5000, "type": "string" }, "product": { "description": "The product the plan belongs to. This cannot be changed once it has been used in a subscription or subscription schedule.", "maxLength": 5000, "type": "string" }, "trial_period_days": { "description": "Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://docs.stripe.com/api#create_subscription-trial_from_plan).", "type": "integer" } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "plan", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/plans": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" }, "product": { "explode": true, "style": "deepObject" }, "tiers": { "explode": true, "style": "deepObject" }, "transform_usage": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "active": { "description": "Whether the plan is currently available for new subscriptions. Defaults to `true`.", "type": "boolean" }, "amount": { "description": "A positive integer in cents (or local equivalent) (or 0 for a free plan) representing how much to charge on a recurring basis.", "type": "integer" }, "amount_decimal": { "description": "Same as `amount`, but accepts a decimal value with at most 12 decimal places. Only one of `amount` and `amount_decimal` can be set.", "format": "decimal", "type": "string" }, "billing_scheme": { "description": "Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.", "enum": ["per_unit", "tiered"], "type": "string" }, "currency": { "description": "Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).", "format": "currency", "type": "string" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "id": { "description": "An identifier randomly generated by Stripe. Used to identify this plan when subscribing a customer. You can optionally override this ID, but the ID must be unique across all plans in your Stripe account. You can, however, use the same plan ID in both live and test modes.", "maxLength": 5000, "type": "string" }, "interval": { "description": "Specifies billing frequency. Either `day`, `week`, `month` or `year`.", "enum": ["day", "month", "week", "year"], "type": "string" }, "interval_count": { "description": "The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).", "type": "integer" }, "metadata": { "anyOf": [{ "additionalProperties": { "type": "string" }, "type": "object" }, { "enum": [""], "type": "string" }], "description": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`." }, "meter": { "description": "The meter tracking the usage of a metered price", "maxLength": 5000, "type": "string" }, "nickname": { "description": "A brief description of the plan, hidden from customers.", "maxLength": 5000, "type": "string" }, "product": { "anyOf": [{ "description": "The product whose pricing the created plan will represent. This can either be the ID of an existing product, or a dictionary containing fields used to create a [service product](https://docs.stripe.com/api#product_object-type).", "properties": { "active": {}, "id": {}, "metadata": {}, "name": {}, "statement_descriptor": {}, "tax_code": {}, "tax_details": {}, "unit_label": {} }, "required": ["name"], "title": "inline_product_params", "type": "object" }, { "description": "The ID of the product whose pricing the created plan will represent.", "maxLength": 5000, "type": "string" }] }, "tiers": { "description": "Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.", "items": { "properties": { "flat_amount": { "type": "integer" }, "flat_amount_decimal": { "format": "decimal", "type": "string" }, "unit_amount": { "type": "integer" }, "unit_amount_decimal": { "format": "decimal", "type": "string" }, "up_to": { "anyOf": [] } }, "required": ["up_to"], "title": "tier", "type": "object" }, "type": "array" }, "tiers_mode": { "description": "Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.", "enum": ["graduated", "volume"], "type": "string" }, "transform_usage": { "description": "Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.", "properties": { "divide_by": { "type": "integer" }, "round": { "enum": ["down", "up"], "type": "string" } }, "required": ["divide_by", "round"], "title": "transform_usage_param", "type": "object" }, "trial_period_days": { "description": "Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://docs.stripe.com/api#create_subscription-trial_from_plan).", "type": "integer" }, "usage_type": { "description": "Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.", "enum": ["licensed", "metered"], "type": "string" } }, "required": ["currency", "interval"], "type": "object" } } }, "required": true }, "parameters": [] }, "GET /v1/plans": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Only return plans that are active or inactive (e.g., pass `false` to list all inactive plans).", "in": "query", "name": "active", "required": false, "schema": { "type": "boolean" }, "style": "form", "index$": 0 }, { "description": "A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.", "explode": true, "in": "query", "name": "created", "required": false, "schema": { "anyOf": [{ "properties": { "gt": { "type": "integer" }, "gte": { "type": "integer" }, "lt": { "type": "integer" }, "lte": { "type": "integer" } }, "title": "range_query_specs", "type": "object" }, { "type": "integer" }] }, "style": "deepObject", "index$": 1 }, { "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 2 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 3 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 4 }, { "description": "Only return plans for the given product.", "in": "query", "name": "product", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 5 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 6 }] }, "GET /v1/plans/{plan}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "plan", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const plan_ref01_ent = client.Plan();
        let plan_ref01_data = setup.data.new.plan['plan_ref01'];
        plan_ref01_data = (await plan_ref01_ent.create(plan_ref01_data)).data();
        (0, node_assert_1.default)(null != plan_ref01_data.id);
        // LIST
        const plan_ref01_match = {};
        const plan_ref01_list = (await plan_ref01_ent.list(plan_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(plan_ref01_list, { id: plan_ref01_data.id })));
        // LOAD
        const plan_ref01_match_dt0 = {};
        plan_ref01_match_dt0.id = plan_ref01_data.id;
        const plan_ref01_data_dt0 = (await plan_ref01_ent.load(plan_ref01_match_dt0)).data();
        (0, node_assert_1.default)(plan_ref01_data_dt0.id === plan_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/plan/PlanTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['plan01', 'plan02', 'plan03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_PLAN_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_PLAN_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_PLAN_ENTID'];
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
//# sourceMappingURL=PlanEntity.test.js.map