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
(0, node_test_1.describe)('TaxIdEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('STRIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.StripeSDK.test();
        const ent = testsdk.TaxId();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.STRIPE_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tax_id.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "country": { "a": true, "h": "Country", "n": "country", "r": false, "sh": "Two-letter ISO code representing the country of the tax ID.", "t": "`$STRING`", "key$": "country", "index$": 0 }, "created": { "a": true, "fo": "unix-time", "h": "Created", "n": "created", "r": true, "sh": "Time at which the object was created.", "t": "`$INTEGER`", "key$": "created", "index$": 1 }, "customer": { "a": true, "h": "Customer", "n": "customer", "r": false, "sh": "ID of the customer.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "customer", "index$": 2 }, "customer_account": { "a": true, "h": "Customer Account", "n": "customer_account", "r": false, "sh": "ID of the Account representing the customer.", "t": "`$STRING`", "key$": "customer_account", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the object.", "t": "`$STRING`", "key$": "id", "index$": 4 }, "livemode": { "a": true, "h": "Livemode", "n": "livemode", "r": true, "sh": "If the object exists in live mode, the value is `true`.", "t": "`$BOOLEAN`", "key$": "livemode", "index$": 5 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "object", "index$": 6 }, "owner": { "a": true, "h": "Owner", "n": "owner", "r": false, "sh": "The account or customer the tax ID belongs to.", "t": "`$ANY`", "union": { "branches": 2, "count": 3, "depth": 4 }, "key$": "owner", "index$": 7 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`,…", "t": "`$STRING`", "key$": "type", "index$": 8 }, "value": { "a": true, "h": "Value", "n": "value", "r": true, "sh": "Value of the tax ID.", "t": "`$STRING`", "key$": "value", "index$": 9 }, "verification": { "a": true, "h": "Verification", "n": "verification", "r": false, "sh": "Tax ID verification information.", "t": "`$ANY`", "key$": "verification", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "tax_id", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/customers/{customer}/tax_ids", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "customer_id", "or": "customer", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/customers/{customer}/tax_ids", "q": { "exist": ["customer_id"] }, "r": { "param": { "customer": "customer_id" } }, "s": [{ "lit": "v1" }, { "lit": "customers" }, { "var": "customer_id" }, { "lit": "tax_ids" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/tax_ids", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/tax_ids", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "tax_ids" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/customers/{customer}/tax_ids", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "customer_id", "or": "customer", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/v1/customers/{customer}/tax_ids", "q": { "exist": ["customer_id", "ending_before", "expand", "limit", "starting_after"] }, "r": { "param": { "customer": "customer_id" } }, "s": [{ "lit": "v1" }, { "lit": "customers" }, { "var": "customer_id" }, { "lit": "tax_ids" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v1/tax_ids", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "ending_before", "or": "ending_before", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "owner", "or": "owner", "r": false, "t": "`$OBJECT`", "index$": 3 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/v1/tax_ids", "q": { "exist": ["ending_before", "expand", "limit", "owner", "starting_after"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "tax_ids" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/customers/{customer}/tax_ids/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "customer_id", "or": "customer", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/customers/{customer}/tax_ids/{id}", "q": { "exist": ["customer_id", "expand", "id"] }, "r": { "param": { "customer": "customer_id" } }, "s": [{ "lit": "v1" }, { "lit": "customers" }, { "var": "customer_id" }, { "lit": "tax_ids" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v1/tax_ids/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/tax_ids/{id}", "q": { "exist": ["expand", "id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "tax_ids" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v1/customers/{customer}/tax_ids/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "customer_id", "or": "customer", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/v1/customers/{customer}/tax_ids/{id}", "q": { "exist": ["customer_id", "id"] }, "r": { "param": { "customer": "customer_id" } }, "s": [{ "lit": "v1" }, { "lit": "customers" }, { "var": "customer_id" }, { "lit": "tax_ids" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /v1/tax_ids/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v1/tax_ids/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "tax_ids" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.customer"]] }, "key$": "tax_id", "name__orig": "tax_id", "Name": "TaxId", "name_": "tax_id", "name-": "tax-id", "NAME": "TAX_ID", "index$": 134 }, { "active": true, "entity": "tax_id", "key$": "BasicTaxIdFlow", "kind": "basic", "name": "BasicTaxIdFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "tax_id_ref01" }, "m": { "customer_id": "customer01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "tax_id_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "tax_id_ref01", "srcdatavar": "tax_id_ref01_data", "suffix": "_dt0" }, "m": { "id": "tax_id01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tax_id_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "tax_id_ref01", "suffix": "_rm0" }, "m": { "id": "tax_id01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "tax_id_ref01" } }], "index$": 4 }] }, 'TaxId', { "POST /v1/customers/{customer}/tax_ids": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "type": { "description": "Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `fo_vat`, `gb_vat`, `ge_vat`, `gi_tin`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `ic_nif`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `it_cf`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `lk_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `pl_nip`, `py_ruc`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`", "enum": ["ad_nrt", "ae_trn", "al_tin", "am_tin", "ao_tin", "ar_cuit", "au_abn", "au_arn", "aw_tin", "az_tin", "ba_tin", "bb_tin", "bd_bin", "bf_ifu", "bg_uic", "bh_vat", "bj_ifu", "bo_tin", "br_cnpj", "br_cpf", "bs_tin", "by_tin", "ca_bn", "ca_gst_hst", "ca_pst_bc", "ca_pst_mb", "ca_pst_sk", "ca_qst", "cd_nif", "ch_uid", "ch_vat", "cl_tin", "cm_niu", "cn_tin", "co_nit", "cr_tin", "cv_nif", "de_stn", "do_rcn", "ec_ruc", "eg_tin", "es_cif", "et_tin", "eu_oss_vat", "eu_vat", "fo_vat", "gb_vat", "ge_vat", "gi_tin", "gn_nif", "hk_br", "hr_oib", "hu_tin", "ic_nif", "id_npwp", "il_vat", "in_gst", "is_vat", "it_cf", "jp_cn", "jp_rn", "jp_trn", "ke_pin", "kg_tin", "kh_tin", "kr_brn", "kz_bin", "la_tin", "li_uid", "li_vat", "lk_vat", "ma_vat", "md_vat", "me_pib", "mk_vat", "mr_nif", "mx_rfc", "my_frp", "my_itn", "my_sst", "ng_tin", "no_vat", "no_voec", "np_pan", "nz_gst", "om_vat", "pe_ruc", "ph_tin", "pl_nip", "py_ruc", "ro_tin", "rs_pib", "ru_inn", "ru_kpp", "sa_vat", "sg_gst", "sg_uen", "si_tin", "sn_ninea", "sr_fin", "sv_nit", "th_vat", "tj_tin", "tr_tin", "tw_vat", "tz_vat", "ua_vat", "ug_tin", "us_ein", "uy_ruc", "uz_tin", "uz_vat", "ve_rif", "vn_tin", "za_vat", "zm_tin", "zw_tin"], "maxLength": 5000, "type": "string", "x-stripeBypassValidation": true }, "value": { "description": "Value of the tax ID.", "type": "string" } }, "required": ["type", "value"], "type": "object" } } }, "required": true }, "parameters": [{ "in": "path", "name": "customer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] }, "POST /v1/tax_ids": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": { "expand": { "explode": true, "style": "deepObject" }, "owner": { "explode": true, "style": "deepObject" } }, "schema": { "additionalProperties": false, "properties": { "expand": { "description": "Specifies which fields in the response should be expanded.", "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "owner": { "description": "The account or customer the tax ID belongs to. Defaults to `owner[type]=self`.", "properties": { "account": { "type": "string" }, "customer": { "maxLength": 5000, "type": "string" }, "customer_account": { "maxLength": 5000, "type": "string" }, "type": { "enum": ["account", "application", "customer", "self"], "type": "string" } }, "required": ["type"], "title": "owner_params", "type": "object" }, "type": { "description": "Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `aw_tin`, `az_tin`, `ba_tin`, `bb_tin`, `bd_bin`, `bf_ifu`, `bg_uic`, `bh_vat`, `bj_ifu`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cm_niu`, `cn_tin`, `co_nit`, `cr_tin`, `cv_nif`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `et_tin`, `eu_oss_vat`, `eu_vat`, `fo_vat`, `gb_vat`, `ge_vat`, `gi_tin`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `ic_nif`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `it_cf`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kg_tin`, `kh_tin`, `kr_brn`, `kz_bin`, `la_tin`, `li_uid`, `li_vat`, `lk_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `pl_nip`, `py_ruc`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`", "enum": ["ad_nrt", "ae_trn", "al_tin", "am_tin", "ao_tin", "ar_cuit", "au_abn", "au_arn", "aw_tin", "az_tin", "ba_tin", "bb_tin", "bd_bin", "bf_ifu", "bg_uic", "bh_vat", "bj_ifu", "bo_tin", "br_cnpj", "br_cpf", "bs_tin", "by_tin", "ca_bn", "ca_gst_hst", "ca_pst_bc", "ca_pst_mb", "ca_pst_sk", "ca_qst", "cd_nif", "ch_uid", "ch_vat", "cl_tin", "cm_niu", "cn_tin", "co_nit", "cr_tin", "cv_nif", "de_stn", "do_rcn", "ec_ruc", "eg_tin", "es_cif", "et_tin", "eu_oss_vat", "eu_vat", "fo_vat", "gb_vat", "ge_vat", "gi_tin", "gn_nif", "hk_br", "hr_oib", "hu_tin", "ic_nif", "id_npwp", "il_vat", "in_gst", "is_vat", "it_cf", "jp_cn", "jp_rn", "jp_trn", "ke_pin", "kg_tin", "kh_tin", "kr_brn", "kz_bin", "la_tin", "li_uid", "li_vat", "lk_vat", "ma_vat", "md_vat", "me_pib", "mk_vat", "mr_nif", "mx_rfc", "my_frp", "my_itn", "my_sst", "ng_tin", "no_vat", "no_voec", "np_pan", "nz_gst", "om_vat", "pe_ruc", "ph_tin", "pl_nip", "py_ruc", "ro_tin", "rs_pib", "ru_inn", "ru_kpp", "sa_vat", "sg_gst", "sg_uen", "si_tin", "sn_ninea", "sr_fin", "sv_nit", "th_vat", "tj_tin", "tr_tin", "tw_vat", "tz_vat", "ua_vat", "ug_tin", "us_ein", "uy_ruc", "uz_tin", "uz_vat", "ve_rif", "vn_tin", "za_vat", "zm_tin", "zw_tin"], "maxLength": 5000, "type": "string", "x-stripeBypassValidation": true }, "value": { "description": "Value of the tax ID.", "type": "string" } }, "required": ["type", "value"], "type": "object" } } }, "required": true }, "parameters": [] }, "GET /v1/customers/{customer}/tax_ids": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "customer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }, { "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 1 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 2 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 3 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 4 }] }, "GET /v1/tax_ids": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.", "in": "query", "name": "ending_before", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 0 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 1 }, { "description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.", "in": "query", "name": "limit", "required": false, "schema": { "type": "integer" }, "style": "form", "index$": 2 }, { "description": "The account or customer the tax ID belongs to. Defaults to `owner[type]=self`.", "explode": true, "in": "query", "name": "owner", "required": false, "schema": { "properties": { "account": { "type": "string" }, "customer": { "maxLength": 5000, "type": "string" }, "customer_account": { "maxLength": 5000, "type": "string" }, "type": { "enum": ["account", "application", "customer", "self"], "type": "string" } }, "required": ["type"], "title": "owner_params", "type": "object" }, "style": "deepObject", "index$": 3 }, { "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.", "in": "query", "name": "starting_after", "required": false, "schema": { "maxLength": 5000, "type": "string" }, "style": "form", "index$": 4 }] }, "GET /v1/customers/{customer}/tax_ids/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "customer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }, { "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 1 }, { "in": "path", "name": "id", "required": true, "schema": { "type": "string" }, "style": "simple", "index$": 2 }] }, "GET /v1/tax_ids/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "description": "Specifies which fields in the response should be expanded.", "explode": true, "in": "query", "name": "expand", "required": false, "schema": { "items": { "maxLength": 5000, "type": "string" }, "type": "array" }, "style": "deepObject", "index$": 0 }, { "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 1 }] }, "DELETE /v1/customers/{customer}/tax_ids/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "customer", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }, { "in": "path", "name": "id", "required": true, "schema": { "type": "string" }, "style": "simple", "index$": 1 }] }, "DELETE /v1/tax_ids/{id}": { "protocol": "http", "requestBody": { "content": { "application/x-www-form-urlencoded": { "encoding": {}, "schema": { "additionalProperties": false, "properties": {}, "type": "object" } } }, "required": false }, "parameters": [{ "in": "path", "name": "id", "required": true, "schema": { "maxLength": 5000, "type": "string" }, "style": "simple", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const tax_id_ref01_ent = client.TaxId();
        let tax_id_ref01_data = setup.data.new.tax_id['tax_id_ref01'];
        tax_id_ref01_data['customer_id'] = setup.idmap['customer01'];
        tax_id_ref01_data = (await tax_id_ref01_ent.create(tax_id_ref01_data)).data();
        (0, node_assert_1.default)(null != tax_id_ref01_data.id);
        // LIST
        const tax_id_ref01_match = {};
        const tax_id_ref01_list = (await tax_id_ref01_ent.list(tax_id_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(tax_id_ref01_list, { id: tax_id_ref01_data.id })));
        // LOAD
        const tax_id_ref01_match_dt0 = {};
        tax_id_ref01_match_dt0.id = tax_id_ref01_data.id;
        const tax_id_ref01_data_dt0 = (await tax_id_ref01_ent.load(tax_id_ref01_match_dt0)).data();
        (0, node_assert_1.default)(tax_id_ref01_data_dt0.id === tax_id_ref01_data.id);
        // REMOVE
        const tax_id_ref01_match_rm0 = { id: tax_id_ref01_data.id };
        await tax_id_ref01_ent.remove(tax_id_ref01_match_rm0);
        // LIST
        const tax_id_ref01_match_rt0 = {};
        const tax_id_ref01_list_rt0 = (await tax_id_ref01_ent.list(tax_id_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(tax_id_ref01_list_rt0, { id: tax_id_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tax_id/TaxIdTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.StripeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tax_id01', 'tax_id02', 'tax_id03', 'customer01', 'customer02', 'customer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'STRIPE_TEST_TAX_ID_ENTID': idmap,
        'STRIPE_TEST_LIVE': 'FALSE',
        'STRIPE_TEST_EXPLAIN': 'FALSE',
        'STRIPE_APIKEY': '',
        'STRIPE_SECRET': '',
    });
    idmap = env['STRIPE_TEST_TAX_ID_ENTID'];
    const live = 'TRUE' === env.STRIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['STRIPE_TEST_TAX_ID_ENTID'];
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
//# sourceMappingURL=TaxIdEntity.test.js.map