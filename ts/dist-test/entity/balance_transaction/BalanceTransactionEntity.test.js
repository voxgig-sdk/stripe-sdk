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
(0, node_test_1.describe)('BalanceTransactionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.BalanceTransaction();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'balance_transaction.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "amount": { "a": true, "h": "Amount", "n": "amount", "r": true, "sh": "Gross amount of this transaction (in cents (or local equivalent)).", "t": "`$INTEGER`", "key$": "amount", "index$": 0 }, "available_on": { "a": true, "fo": "unix-time", "h": "Available On", "n": "available_on", "r": true, "sh": "The date that the transaction's net funds become available in the Stripe balance.", "t": "`$INTEGER`", "key$": "available_on", "index$": 1 }, "balance_type": { "a": true, "h": "Balance Type", "n": "balance_type", "r": true, "sh": "The balance that this transaction impacts.", "t": "`$STRING`", "key$": "balance_type", "index$": 2 }, "checkout_session": { "a": true, "h": "Checkout Session", "n": "checkout_session", "r": false, "sh": "The ID of the checkout session (if any) that created the transaction.", "t": "`$ANY`", "union": { "branches": 17, "count": 200864, "depth": 64 }, "key$": "checkout_session", "index$": 3 }, "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time at which the object was created.", "t": "`$INTEGER`", "key$": "created", "index$": 4 }, "credit_note": { "a": true, "h": "Credit Note", "n": "credit_note", "r": false, "sh": "The ID of the credit note (if any) related to the transaction.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "credit_note", "index$": 5 }, "currency": { "a": true, "fo": "currency", "h": "Currency", "n": "currency", "r": true, "sh": "Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.", "t": "`$STRING`", "key$": "currency", "index$": 6 }, "customer": { "a": true, "h": "Customer", "n": "customer", "r": true, "sh": "The ID of the customer the transaction belongs to.", "t": "`$ANY`", "union": { "branches": 17, "count": 107010, "depth": 64 }, "key$": "customer", "index$": 7 }, "customer_account": { "a": true, "h": "Customer Account", "n": "customer_account", "r": false, "sh": "The ID of an Account representing a customer that the transaction belongs to.", "t": "`$STRING`", "key$": "customer_account", "index$": 8 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "An arbitrary string attached to the object.", "t": "`$STRING`", "key$": "description", "index$": 9 }, "ending_balance": { "a": true, "h": "Ending Balance", "n": "ending_balance", "r": true, "sh": "The customer's `balance` after the transaction was applied.", "t": "`$INTEGER`", "key$": "ending_balance", "index$": 10 }, "exchange_rate": { "a": true, "h": "Exchange Rate", "n": "exchange_rate", "r": false, "sh": "If applicable, this transaction uses an exchange rate.", "t": "`$NUMBER`", "key$": "exchange_rate", "index$": 11 }, "fee": { "a": true, "h": "Fee", "n": "fee", "r": true, "sh": "Fees (in cents (or local equivalent)) paid for this transaction.", "t": "`$INTEGER`", "key$": "fee", "index$": 12 }, "fee_details": { "a": true, "h": "Fee Details", "n": "fee_details", "r": true, "sh": "Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction.", "t": "`$ARRAY`", "key$": "fee_details", "index$": 13 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 14 }, "invoice": { "a": true, "h": "Invoice", "n": "invoice", "r": false, "sh": "The ID of the invoice (if any) related to the transaction.", "t": "`$ANY`", "union": { "branches": 17, "count": 68509, "depth": 64 }, "key$": "invoice", "index$": 15 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 16 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "sh": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.", "t": "`$OBJECT`", "key$": "metadata", "index$": 17 }, "net": { "a": true, "h": "Net", "n": "net", "r": true, "sh": "Net impact to a Stripe balance (in cents (or local equivalent)).", "t": "`$INTEGER`", "key$": "net", "index$": 18 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 19 }, "reporting_category": { "a": true, "h": "Reporting Category", "n": "reporting_category", "r": true, "sh": "Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective.", "t": "`$STRING`", "key$": "reporting_category", "index$": 20 }, "source": { "a": true, "h": "Source", "n": "source", "r": false, "sh": "This transaction relates to the Stripe object.", "t": "`$ANY`", "union": { "branches": 17, "count": 1367, "depth": 37 }, "key$": "source", "index$": 21 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The transaction's net funds status in the Stripe balance, which are either `available` or `pending`.", "t": "`$STRING`", "key$": "status", "index$": 22 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co…", "t": "`$STRING`", "key$": "type", "index$": 23 } }, "id": { "field": "id", "name": "id" }, "name": "balance_transaction", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/balance_transactions", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "created", "or": "created", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "currency", "or": "currency", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "payout", "or": "payout", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "source", "or": "source", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": false, "t": "`$STRING`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/v1/balance_transactions", "q": { "exist": ["created", "currency", "ending_before", "expand", "limit", "payout", "source", "starting_after", "type"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "balance_transactions" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v1/customers/{customer}/balance_transactions", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "customer_id", "or": "customer", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "created", "or": "created", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "k": "query", "n": "invoice", "or": "invoice", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/v1/customers/{customer}/balance_transactions", "q": { "exist": ["created", "customer_id", "ending_before", "expand", "invoice", "limit", "starting_after"] }, "r": { "param": { "customer": "customer_id" } }, "s": [{ "lit": "v1" }, { "lit": "customers" }, { "var": "customer_id" }, { "lit": "balance_transactions" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/balance/history/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/balance/history/{id}", "q": { "exist": ["expand", "id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "balance" }, { "lit": "history" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v1/balance_transactions/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/balance_transactions/{id}", "q": { "exist": ["expand", "id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "balance_transactions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.customer"]] }, "key$": "balance_transaction", "name__orig": "balance_transaction", "Name": "BalanceTransaction", "name_": "balance_transaction", "name-": "balance-transaction", "NAME": "BALANCE_TRANSACTION", "index$": 13 }, { "active": true, "entity": "balance_transaction", "key$": "BasicBalanceTransactionFlow", "kind": "basic", "name": "BasicBalanceTransactionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "customer_id": "customer01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "balance_transaction_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "balance_transaction_ref01", "srcdatavar": "balance_transaction_ref01_data", "suffix": "_dt0" }, "m": { "id": "balance_transaction01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-balance_transaction_ref01" } }], "index$": 1 }] }, 'BalanceTransaction', { "GET /v1/balance_transactions": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Only return transactions that were created during the given date interval.", "explode": true, "in": "query", "name": "created", "required": false, "schema": { "anyOf": [{ "properties": { "gt": { "type": "integer" }, "gte": { "type": "integer" }, "lt": { "type": "integer" }, "lte": { "type": "integer" } }, "title": "range_query_specs", "type": "object" }, { "type": "integer" }] }, "style": "deepObject", "index$": 0 }, { "description": "Only return transactions in a certain currency. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).", "in": "query", "name": "currency", "required": false, "schema": { "format": "currency", "type": "string" }, "style": "form", "index$": 1 }, { "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 2 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 3 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 4 }, { "description": "For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID.", "in": "query", "name": "payout", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 5 }, { "description": "Only returns transactions associated with the given object.", "in": "query", "name": "source", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 6 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 7 }, { "description": "Only returns transactions of the given type. One of: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `contribution`, `inbound_transfer`, `inbound_transfer_reversal`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_dispute_provisional_credit`, `issuing_dispute_provisional_credit_reversal`, `issuing_transaction`, `obligation_outbound`, `obligation_reversal_inbound`, `payment`, `payment_failure_refund`, `payment_network_reserve_hold`, `payment_network_reserve_release`, `payment_refund`, `payment_reversal`, `payment_unreconciled`, `payout`, `payout_cancel`, `payout_failure`, `payout_minimum_balance_hold`, `payout_minimum_balance_release`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `reserve_hold`, `reserve_release`, `stripe_fee`, `stripe_fx_fee`, `stripe_balance_payment_debit`, `stripe_balance_payment_debit_reversal`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, `transfer_refund`, or `fee_credit_funding`.", "in": "query", "name": "type", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 8 }] }, "GET /v1/customers/{customer}/balance_transactions": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Only return customer balance transactions that were created during the given date interval.", "explode": true, "in": "query", "name": "created", "required": false, "schema": { "anyOf": [{ "properties": { "gt": { "type": "integer" }, "gte": { "type": "integer" }, "lt": { "type": "integer" }, "lte": { "type": "integer" } }, "title": "range_query_specs", "type": "object" }, { "type": "integer" }] }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "customer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }, { "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 2 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 3 }, { "description": "Only return transactions that are related to the specified invoice.", "in": "query", "name": "invoice", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 4 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 5 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 6 }] }, "GET /v1/balance/history/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] }, "GET /v1/balance_transactions/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let balance_transaction_ref01_data = Object.values(setup.data.existing.balance_transaction)[0];
        // LIST
        const balance_transaction_ref01_ent = client.BalanceTransaction();
        const balance_transaction_ref01_match = {};
        balance_transaction_ref01_match['customer_id'] = setup.idmap['customer01'];
        const balance_transaction_ref01_list = (await balance_transaction_ref01_ent.list(balance_transaction_ref01_match)).map((e) => e.data());
        // LOAD
        const balance_transaction_ref01_match_dt0 = {};
        balance_transaction_ref01_match_dt0.id = balance_transaction_ref01_data.id;
        const balance_transaction_ref01_data_dt0 = (await balance_transaction_ref01_ent.load(balance_transaction_ref01_match_dt0)).data();
        (0, node_assert_1.default)(balance_transaction_ref01_data_dt0.id === balance_transaction_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/balance_transaction/BalanceTransactionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['balance_transaction01', 'balance_transaction02', 'balance_transaction03', 'customer01', 'customer02', 'customer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_BALANCE_TRANSACTION_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_BALANCE_TRANSACTION_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_BALANCE_TRANSACTION_ENTID'];
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
//# sourceMappingURL=BalanceTransactionEntity.test.js.map