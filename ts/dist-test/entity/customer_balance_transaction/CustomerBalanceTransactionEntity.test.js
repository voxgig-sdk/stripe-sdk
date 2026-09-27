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
(0, node_test_1.describe)('CustomerBalanceTransactionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.CustomerBalanceTransaction();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'customer_balance_transaction.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "amount": { "a": true, "h": "Amount", "n": "amount", "r": true, "sh": "The amount of the transaction.", "t": "`$INTEGER`", "key$": "amount", "index$": 0 }, "checkout_session": { "a": true, "h": "Checkout Session", "n": "checkout_session", "r": false, "sh": "The ID of the checkout session (if any) that created the transaction.", "t": "`$ANY`", "union": { "branches": 17, "count": 200864, "depth": 64 }, "key$": "checkout_session", "index$": 1 }, "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time at which the object was created.", "t": "`$INTEGER`", "key$": "created", "index$": 2 }, "credit_note": { "a": true, "h": "Credit Note", "n": "credit_note", "r": false, "sh": "The ID of the credit note (if any) related to the transaction.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "credit_note", "index$": 3 }, "currency": { "a": true, "fo": "currency", "h": "Currency", "n": "currency", "r": true, "sh": "Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.", "t": "`$STRING`", "key$": "currency", "index$": 4 }, "customer": { "a": true, "h": "Customer", "n": "customer", "r": true, "sh": "The ID of the customer the transaction belongs to.", "t": "`$ANY`", "union": { "branches": 17, "count": 107010, "depth": 64 }, "key$": "customer", "index$": 5 }, "customer_account": { "a": true, "h": "Customer Account", "n": "customer_account", "r": false, "sh": "The ID of an Account representing a customer that the transaction belongs to.", "t": "`$STRING`", "key$": "customer_account", "index$": 6 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "An arbitrary string attached to the object.", "t": "`$STRING`", "key$": "description", "index$": 7 }, "ending_balance": { "a": true, "h": "Ending Balance", "n": "ending_balance", "r": true, "sh": "The customer's `balance` after the transaction was applied.", "t": "`$INTEGER`", "key$": "ending_balance", "index$": 8 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 9 }, "invoice": { "a": true, "h": "Invoice", "n": "invoice", "r": false, "sh": "The ID of the invoice (if any) related to the transaction.", "t": "`$ANY`", "union": { "branches": 17, "count": 68509, "depth": 64 }, "key$": "invoice", "index$": 10 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 11 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "sh": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.", "t": "`$OBJECT`", "key$": "metadata", "index$": 12 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 13 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or…", "t": "`$STRING`", "key$": "type", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "customer_balance_transaction", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/customers/{customer}/balance_transactions/{transaction}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "customer_id", "or": "customer", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "transaction", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/v1/customers/{customer}/balance_transactions/{transaction}", "q": { "exist": ["customer_id", "id"] }, "r": { "param": { "customer": "customer_id", "transaction": "id" } }, "s": [{ "lit": "v1" }, { "lit": "customers" }, { "var": "customer_id" }, { "lit": "balance_transactions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/customers/{customer}/balance_transactions", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "customer", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/customers/{customer}/balance_transactions", "q": { "exist": ["id"] }, "r": { "param": { "customer": "id" } }, "s": [{ "lit": "v1" }, { "lit": "customers" }, { "var": "id" }, { "lit": "balance_transactions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/customers/{customer}/balance_transactions/{transaction}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "customer_id", "or": "customer", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "transaction", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/customers/{customer}/balance_transactions/{transaction}", "q": { "exist": ["customer_id", "expand", "id"] }, "r": { "param": { "customer": "customer_id", "transaction": "id" } }, "s": [{ "lit": "v1" }, { "lit": "customers" }, { "var": "customer_id" }, { "lit": "balance_transactions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.customer"]] }, "key$": "customer_balance_transaction", "name__orig": "customer_balance_transaction", "Name": "CustomerBalanceTransaction", "name_": "customer_balance_transaction", "name-": "customer-balance-transaction", "NAME": "CUSTOMER_BALANCE_TRANSACTION", "index$": 34 }, { "active": true, "entity": "customer_balance_transaction", "key$": "BasicCustomerBalanceTransactionFlow", "kind": "basic", "name": "BasicCustomerBalanceTransactionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "customer_balance_transaction_ref01" }, "m": { "customer": "customer01", "customer_id": "customer01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "customer_balance_transaction_ref01", "srcdatavar": "customer_balance_transaction_ref01_data", "suffix": "_dt0" }, "m": { "customer_id": "customer01", "id": "customer_balance_transaction01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-customer_balance_transaction_ref01" } }], "index$": 1 }] }, 'CustomerBalanceTransaction', { "POST /v1/customers/{customer}/balance_transactions/{transaction}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "description": { "description": "An arbitrary string attached to the object. Often useful for displaying to users.", "maxLength": 350, "type": "string" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "metadata": { "anyOf": [{ "additionalProperties": { "type": "string" }, "type": "object" }, { "enum": [""], "type": "string" }], "description": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`." } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "customer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }, { "in": "path", "name": "transaction", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] }, "POST /v1/customers/{customer}/balance_transactions": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "amount": { "description": "The integer amount in **cents (or local equivalent)** to apply to the customer's credit balance.", "type": "integer" }, "currency": { "description": "Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Specifies the [`invoice_credit_balance`](https://docs.stripe.com/api/customers/object#customer_object-invoice_credit_balance) that this transaction will apply to. If the customer's `currency` is not set, it will be updated to this value.", "format": "currency", "type": "string" }, "description": { "description": "An arbitrary string attached to the object. Often useful for displaying to users.", "maxLength": 350, "type": "string" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "metadata": { "anyOf": [{ "additionalProperties": { "type": "string" }, "type": "object" }, { "enum": [""], "type": "string" }], "description": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`." } }, "required": ["amount", "currency"], "type": "object" } } }, "required": true }, "parameters": [{ "in": "path", "name": "customer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "GET /v1/customers/{customer}/balance_transactions/{transaction}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "customer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 1 }, { "in": "path", "name": "transaction", "required": true, "schema": { "type": "string" }, "style": "simple", "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const customer_balance_transaction_ref01_ent = client.CustomerBalanceTransaction();
        let customer_balance_transaction_ref01_data = setup.data.new.customer_balance_transaction['customer_balance_transaction_ref01'];
        customer_balance_transaction_ref01_data['customer'] = setup.idmap['customer01'];
        customer_balance_transaction_ref01_data['customer_id'] = setup.idmap['customer01'];
        customer_balance_transaction_ref01_data = (await customer_balance_transaction_ref01_ent.create(customer_balance_transaction_ref01_data)).data();
        (0, node_assert_1.default)(null != customer_balance_transaction_ref01_data.id);
        // LOAD
        const customer_balance_transaction_ref01_match_dt0 = {};
        customer_balance_transaction_ref01_match_dt0.id = customer_balance_transaction_ref01_data.id;
        const customer_balance_transaction_ref01_data_dt0 = (await customer_balance_transaction_ref01_ent.load(customer_balance_transaction_ref01_match_dt0)).data();
        (0, node_assert_1.default)(customer_balance_transaction_ref01_data_dt0.id === customer_balance_transaction_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/customer_balance_transaction/CustomerBalanceTransactionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['customer_balance_transaction01', 'customer_balance_transaction02', 'customer_balance_transaction03', 'customer01', 'customer02', 'customer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_CUSTOMER_BALANCE_TRANSACTION_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_CUSTOMER_BALANCE_TRANSACTION_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_CUSTOMER_BALANCE_TRANSACTION_ENTID'];
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
//# sourceMappingURL=CustomerBalanceTransactionEntity.test.js.map