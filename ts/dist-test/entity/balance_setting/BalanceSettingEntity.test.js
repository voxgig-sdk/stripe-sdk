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
(0, node_test_1.describe)('BalanceSettingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.BalanceSetting();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'balance_setting.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "debit_negative_balances": { "a": true, "h": "Debit Negative Balances", "n": "debit_negative_balances", "r": false, "sh": "A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account.", "t": "`$BOOLEAN`", "key$": "debit_negative_balances", "index$": 0 }, "payouts": { "a": true, "h": "Payouts", "n": "payouts", "r": false, "sh": "Settings specific to the account's payouts.", "t": "`$ANY`", "key$": "payouts", "index$": 1 }, "settlement_timing": { "a": true, "h": "Settlement Timing", "n": "settlement_timing", "r": true, "t": "`$OBJECT`", "key$": "settlement_timing", "index$": 2 } }, "name": "balance_setting", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/balance_settings", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/balance_settings", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "balance_settings" }], "t": { "req": "`reqdata`", "res": "`body.payments`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/balance_settings", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/balance_settings", "q": { "exist": ["expand"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "balance_settings" }], "t": { "req": "`reqdata`", "res": "`body.payments`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "balance_setting", "name__orig": "balance_setting", "Name": "BalanceSetting", "name_": "balance_setting", "name-": "balance-setting", "NAME": "BALANCE_SETTING", "index$": 12 }, { "active": true, "entity": "balance_setting", "key$": "BasicBalanceSettingFlow", "kind": "basic", "name": "BasicBalanceSettingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "balance_setting_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "balance_setting_ref01", "srcdatavar": "balance_setting_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-balance_setting_ref01" } }], "index$": 1 }] }, 'BalanceSetting', { "POST /v1/balance_settings": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "payments": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "payments": { "description": "Settings that apply to the [Payments Balance](https://docs.stripe.com/api/balance).", "properties": { "debit_negative_balances": { "type": "boolean" }, "payouts": { "properties": { "automatic_transfer_rules_by_currency": {}, "minimum_balance_by_currency": {}, "schedule": {}, "statement_descriptor": {} }, "title": "payouts", "type": "object" }, "settlement_timing": { "properties": { "delay_days_override": {}, "start_of_day": {} }, "title": "settlement_timing", "type": "object" } }, "title": "payments", "type": "object" } }, "type": "object" } } }, "required": false }, "parameters": [] }, "GET /v1/balance_settings": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const balance_setting_ref01_ent = client.BalanceSetting();
        let balance_setting_ref01_data = setup.data.new.balance_setting['balance_setting_ref01'];
        balance_setting_ref01_data = (await balance_setting_ref01_ent.create(balance_setting_ref01_data)).data();
        (0, node_assert_1.default)(null != balance_setting_ref01_data);
        // LOAD
        const balance_setting_ref01_match_dt0 = {};
        const balance_setting_ref01_data_dt0 = (await balance_setting_ref01_ent.load(balance_setting_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != balance_setting_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/balance_setting/BalanceSettingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['balance_setting01', 'balance_setting02', 'balance_setting03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_BALANCE_SETTING_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_BALANCE_SETTING_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_BALANCE_SETTING_ENTID'];
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
//# sourceMappingURL=BalanceSettingEntity.test.js.map