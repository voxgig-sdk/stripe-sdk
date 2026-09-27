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
(0, node_test_1.describe)('OutboundPaymentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.OutboundPayment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'outbound_payment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "amount": { "a": true, "h": "Amount", "n": "amount", "r": true, "sh": "Amount (in cents) transferred.", "t": "`$INTEGER`", "key$": "amount", "index$": 0 }, "cancelable": { "a": true, "h": "Cancelable", "n": "cancelable", "r": true, "sh": "Returns `true` if the object can be canceled, and `false` otherwise.", "t": "`$BOOLEAN`", "key$": "cancelable", "index$": 1 }, "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time at which the object was created.", "t": "`$INTEGER`", "key$": "created", "index$": 2 }, "currency": { "a": true, "fo": "currency", "h": "Currency", "n": "currency", "r": true, "sh": "Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.", "t": "`$STRING`", "key$": "currency", "index$": 3 }, "customer": { "a": true, "h": "Customer", "n": "customer", "r": false, "sh": "ID of the [customer](https://docs.stripe.com/api/customers) to whom an OutboundPayment is sent.", "t": "`$STRING`", "key$": "customer", "index$": 4 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "An arbitrary string attached to the object.", "t": "`$STRING`", "key$": "description", "index$": 5 }, "destination_payment_method": { "a": true, "h": "Destination Payment Method", "n": "destination_payment_method", "r": false, "sh": "The PaymentMethod via which an OutboundPayment is sent.", "t": "`$STRING`", "key$": "destination_payment_method", "index$": 6 }, "destination_payment_method_details": { "a": true, "h": "Destination Payment Method Details", "n": "destination_payment_method_details", "r": false, "sh": "Details about the PaymentMethod for an OutboundPayment.", "t": "`$ANY`", "union": { "branches": 2, "count": 3, "depth": 11 }, "key$": "destination_payment_method_details", "index$": 7 }, "end_user_details": { "a": true, "h": "End User Details", "n": "end_user_details", "r": false, "sh": "Details about the end user.", "t": "`$ANY`", "key$": "end_user_details", "index$": 8 }, "expected_arrival_date": { "a": true, "fo": "unix-time", "h": "Expected Arrival Date", "n": "expected_arrival_date", "r": true, "sh": "The date when funds are expected to arrive in the destination account.", "t": "`$INTEGER`", "key$": "expected_arrival_date", "index$": 9 }, "financial_account": { "a": true, "h": "Financial Account", "n": "financial_account", "r": true, "sh": "The FinancialAccount that funds were pulled from.", "t": "`$STRING`", "key$": "financial_account", "index$": 10 }, "hosted_regulatory_receipt_url": { "a": true, "h": "Hosted Regulatory Receipt Url", "n": "hosted_regulatory_receipt_url", "r": false, "sh": "A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.", "t": "`$STRING`", "key$": "hosted_regulatory_receipt_url", "index$": 11 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 12 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 13 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": true, "sh": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.", "t": "`$OBJECT`", "key$": "metadata", "index$": 14 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 15 }, "returned_details": { "a": true, "h": "Returned Details", "n": "returned_details", "r": false, "sh": "Details about a returned OutboundPayment.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 4 }, "key$": "returned_details", "index$": 16 }, "statement_descriptor": { "a": true, "h": "Statement Descriptor", "n": "statement_descriptor", "r": true, "sh": "The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer).", "t": "`$STRING`", "key$": "statement_descriptor", "index$": 17 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`.", "t": "`$STRING`", "key$": "status", "index$": 18 }, "status_transitions": { "a": true, "h": "Status Transitions", "n": "status_transitions", "r": true, "t": "`$OBJECT`", "key$": "status_transitions", "index$": 19 }, "tracking_details": { "a": true, "h": "Tracking Details", "n": "tracking_details", "r": false, "sh": "Details about network-specific tracking information if available.", "t": "`$ANY`", "key$": "tracking_details", "index$": 20 }, "transaction": { "a": true, "h": "Transaction", "n": "transaction", "r": true, "sh": "The Transaction associated with this object.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "transaction", "index$": 21 } }, "id": { "field": "id", "name": "id" }, "name": "outbound_payment", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/test_helpers/treasury/outbound_payments/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/test_helpers/treasury/outbound_payments/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "test_helpers" }, { "lit": "treasury" }, { "lit": "outbound_payments" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/treasury/outbound_payments/{id}/cancel", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/treasury/outbound_payments/{id}/cancel", "q": { "$action": "cancel", "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "treasury" }, { "lit": "outbound_payments" }, { "var": "id" }, { "lit": "cancel" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /v1/test_helpers/treasury/outbound_payments/{id}/fail", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/test_helpers/treasury/outbound_payments/{id}/fail", "q": { "$action": "fail", "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "test_helpers" }, { "lit": "treasury" }, { "lit": "outbound_payments" }, { "var": "id" }, { "lit": "fail" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /v1/test_helpers/treasury/outbound_payments/{id}/post", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/test_helpers/treasury/outbound_payments/{id}/post", "q": { "$action": "post", "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "test_helpers" }, { "lit": "treasury" }, { "lit": "outbound_payments" }, { "var": "id" }, { "lit": "post" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "POST /v1/test_helpers/treasury/outbound_payments/{id}/return", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/test_helpers/treasury/outbound_payments/{id}/return", "q": { "$action": "return", "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "test_helpers" }, { "lit": "treasury" }, { "lit": "outbound_payments" }, { "var": "id" }, { "lit": "return" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "a": true, "co": { "id": "POST /v1/treasury/outbound_payments", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/treasury/outbound_payments", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "treasury" }, { "lit": "outbound_payments" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 5 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/treasury/outbound_payments", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "created", "or": "created", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "customer", "or": "customer", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "k": "query", "n": "financial_account", "or": "financial_account", "r": true, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/v1/treasury/outbound_payments", "q": { "exist": ["created", "customer", "ending_before", "expand", "financial_account", "limit", "starting_after", "status"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "treasury" }, { "lit": "outbound_payments" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/treasury/outbound_payments/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/treasury/outbound_payments/{id}", "q": { "exist": ["expand", "id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "treasury" }, { "lit": "outbound_payments" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "outbound_payment", "name__orig": "outbound_payment", "Name": "OutboundPayment", "name_": "outbound_payment", "name-": "outbound-payment", "NAME": "OUTBOUND_PAYMENT", "index$": 83 }, { "active": true, "entity": "outbound_payment", "key$": "BasicOutboundPaymentFlow", "kind": "basic", "name": "BasicOutboundPaymentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "outbound_payment_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "outbound_payment_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "outbound_payment_ref01", "srcdatavar": "outbound_payment_ref01_data", "suffix": "_dt0" }, "m": { "id": "outbound_payment01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-outbound_payment_ref01" } }], "index$": 2 }] }, 'OutboundPayment', { "POST /v1/test_helpers/treasury/outbound_payments/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "tracking_details": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "tracking_details": { "description": "Details about network-specific tracking information.", "properties": { "ach": { "properties": { "trace_id": {} }, "required": ["trace_id"], "title": "ach_tracking_details_params", "type": "object" }, "type": { "enum": ["ach", "us_domestic_wire"], "type": "string" }, "us_domestic_wire": { "properties": { "chips": {}, "imad": {}, "omad": {} }, "title": "us_domestic_wire_tracking_details_params", "type": "object" } }, "required": ["type"], "title": "tracking_details_params", "type": "object" } }, "required": ["tracking_details"], "type": "object" } } }, "required": true }, "parameters": [{ "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/treasury/outbound_payments/{id}/cancel": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/test_helpers/treasury/outbound_payments/{id}/fail": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/test_helpers/treasury/outbound_payments/{id}/post": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/test_helpers/treasury/outbound_payments/{id}/return": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "returned_details": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "returned_details": { "description": "Optional hash to set the return code.", "properties": { "code": { "enum": ["account_closed", "account_frozen", "bank_account_restricted", "bank_ownership_changed", "declined", "incorrect_account_holder_name", "invalid_account_number", "invalid_currency", "no_account", "other"], "type": "string" } }, "title": "returned_details_params", "type": "object" } }, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/treasury/outbound_payments": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "destination_payment_method_data": { "explode": true, "style": "deepObject" }, "destination_payment_method_options": { "explode": true, "style": "deepObject" }, "end_user_details": { "explode": true, "style": "deepObject" }, "expand": { "explode": true, "style": "deepObject" }, "metadata": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "amount": { "description": "Amount (in cents) to be transferred.", "type": "integer" }, "currency": { "description": "Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).", "format": "currency", "type": "string" }, "customer": { "description": "ID of the customer to whom the OutboundPayment is sent. Must match the Customer attached to the `destination_payment_method` passed in.", "maxLength": 5000, "type": "string" }, "description": { "description": "An arbitrary string attached to the object. Often useful for displaying to users.", "maxLength": 5000, "type": "string" }, "destination_payment_method": { "description": "The PaymentMethod to use as the payment instrument for the OutboundPayment. Exclusive with `destination_payment_method_data`.", "maxLength": 5000, "type": "string" }, "destination_payment_method_data": { "description": "Hash used to generate the PaymentMethod to be used for this OutboundPayment. Exclusive with `destination_payment_method`.", "properties": { "billing_details": { "properties": { "address": {}, "email": {}, "name": {}, "phone": {} }, "title": "billing_details_inner_params", "type": "object" }, "financial_account": { "type": "string" }, "metadata": { "additionalProperties": { "type": "string" }, "type": "object" }, "type": { "enum": ["financial_account", "us_bank_account"], "type": "string", "x-stripeBypassValidation": true }, "us_bank_account": { "properties": { "account_holder_type": {}, "account_number": {}, "account_type": {}, "financial_connections_account": {}, "routing_number": {} }, "title": "payment_method_param", "type": "object" } }, "required": ["type"], "title": "payment_method_data", "type": "object" }, "destination_payment_method_options": { "description": "Payment method-specific configuration for this OutboundPayment.", "properties": { "us_bank_account": { "anyOf": [{}, {}] } }, "title": "payment_method_options", "type": "object" }, "end_user_details": { "description": "End user details.", "properties": { "ip_address": { "type": "string" }, "present": { "type": "boolean" } }, "required": ["present"], "title": "end_user_details_params", "type": "object" }, "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "financial_account": { "description": "The FinancialAccount to pull funds from.", "type": "string" }, "metadata": { "additionalProperties": { "type": "string" }, "description": "Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.", "type": "object" }, "statement_descriptor": { "description": "The description that appears on the receiving end for this OutboundPayment (for example, bank statement for external bank transfer). Maximum 10 characters for `ach` payments, 140 characters for `us_domestic_wire` payments, or 500 characters for `stripe` network transfers. Can only include -#.$&*, spaces, and alphanumeric characters. The default value is \"payment\".", "maxLength": 5000, "type": "string" } }, "required": ["amount", "currency", "financial_account"], "type": "object" } } }, "required": true }, "parameters": [] }, "GET /v1/treasury/outbound_payments": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Only return OutboundPayments that were created during the given date interval.", "explode": true, "in": "query", "name": "created", "required": false, "schema": { "anyOf": [{ "properties": { "gt": { "type": "integer" }, "gte": { "type": "integer" }, "lt": { "type": "integer" }, "lte": { "type": "integer" } }, "title": "range_query_specs", "type": "object" }, { "type": "integer" }] }, "style": "deepObject", "index$": 0 }, { "description": "Only return OutboundPayments sent to this customer.", "in": "query", "name": "customer", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 1 }, { "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 2 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 3 }, { "description": "Returns objects associated with this FinancialAccount.", "in": "query", "name": "financial_account", "required": true, "schema": { "type": "string" }, "style": "form", "index$": 4 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 5 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 6 }, { "description": "Only return OutboundPayments that have the given status: `processing`, `failed`, `posted`, `returned`, or `canceled`.", "in": "query", "name": "status", "required": false, "schema": { "enum": ["canceled", "failed", "posted", "processing", "returned"], "type": "string" }, "style": "form", "index$": 7 }] }, "GET /v1/treasury/outbound_payments/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const outbound_payment_ref01_ent = client.OutboundPayment();
        let outbound_payment_ref01_data = setup.data.new.outbound_payment['outbound_payment_ref01'];
        outbound_payment_ref01_data = (await outbound_payment_ref01_ent.create(outbound_payment_ref01_data)).data();
        (0, node_assert_1.default)(null != outbound_payment_ref01_data.id);
        // LIST
        const outbound_payment_ref01_match = {};
        const outbound_payment_ref01_list = (await outbound_payment_ref01_ent.list(outbound_payment_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(outbound_payment_ref01_list, { id: outbound_payment_ref01_data.id })));
        // LOAD
        const outbound_payment_ref01_match_dt0 = {};
        outbound_payment_ref01_match_dt0.id = outbound_payment_ref01_data.id;
        const outbound_payment_ref01_data_dt0 = (await outbound_payment_ref01_ent.load(outbound_payment_ref01_match_dt0)).data();
        (0, node_assert_1.default)(outbound_payment_ref01_data_dt0.id === outbound_payment_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/outbound_payment/OutboundPaymentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['outbound_payment01', 'outbound_payment02', 'outbound_payment03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_OUTBOUND_PAYMENT_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_OUTBOUND_PAYMENT_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_OUTBOUND_PAYMENT_ENTID'];
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
//# sourceMappingURL=OutboundPaymentEntity.test.js.map