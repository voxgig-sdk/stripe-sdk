
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { StripeSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('SourceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Source()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"ach_credit_transfer":{"a":true,"h":"Ach Credit Transfer","n":"ach_credit_transfer","r":false,"t":"`$OBJECT`","key$":"ach_credit_transfer","index$":0},"ach_debit":{"a":true,"h":"Ach Debit","n":"ach_debit","r":false,"t":"`$OBJECT`","key$":"ach_debit","index$":1},"acss_debit":{"a":true,"h":"Acss Debit","n":"acss_debit","r":false,"t":"`$OBJECT`","key$":"acss_debit","index$":2},"alipay":{"a":true,"h":"Alipay","n":"alipay","r":false,"t":"`$OBJECT`","key$":"alipay","index$":3},"allow_redisplay":{"a":true,"h":"Allow Redisplay","n":"allow_redisplay","r":false,"sh":"This field indicates whether this payment method can be shown again to its customer in a checkout flow.","t":"`$BOOLEAN`","key$":"allow_redisplay","index$":4},"amount":{"a":true,"h":"Amount","n":"amount","r":false,"sh":"A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source.","t":"`$INTEGER`","key$":"amount","index$":5},"au_becs_debit":{"a":true,"h":"Au Becs Debit","n":"au_becs_debit","r":false,"t":"`$OBJECT`","key$":"au_becs_debit","index$":6},"bancontact":{"a":true,"h":"Bancontact","n":"bancontact","r":false,"t":"`$OBJECT`","key$":"bancontact","index$":7},"card":{"a":true,"h":"Card","n":"card","r":false,"t":"`$OBJECT`","key$":"card","index$":8},"card_present":{"a":true,"h":"Card Present","n":"card_present","r":false,"t":"`$OBJECT`","key$":"card_present","index$":9},"client_secret":{"a":true,"h":"Client Secret","n":"client_secret","r":true,"sh":"The client secret of the source.","t":"`$STRING`","key$":"client_secret","index$":10},"code_verification":{"a":true,"h":"Code Verification","n":"code_verification","r":true,"t":"`$OBJECT`","key$":"code_verification","index$":11},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":12},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":false,"sh":"Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source.","t":"`$STRING`","key$":"currency","index$":13},"customer":{"a":true,"h":"Customer","n":"customer","r":false,"sh":"The ID of the customer to which this source is attached.","t":"`$STRING`","key$":"customer","index$":14},"data":{"a":true,"h":"Data","n":"data","r":true,"sh":"Details about each object.","t":"`$ARRAY`","union":{"branches":17,"count":106523,"depth":64},"key$":"data","index$":15},"eps":{"a":true,"h":"Eps","n":"eps","r":false,"t":"`$OBJECT`","key$":"eps","index$":16},"flow":{"a":true,"h":"Flow","n":"flow","r":true,"sh":"The authentication `flow` of the source.","t":"`$STRING`","key$":"flow","index$":17},"giropay":{"a":true,"h":"Giropay","n":"giropay","r":false,"t":"`$OBJECT`","key$":"giropay","index$":18},"has_more":{"a":true,"h":"Has More","n":"has_more","r":true,"sh":"True if this list has another page of items after this one that can be fetched.","t":"`$BOOLEAN`","key$":"has_more","index$":19},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":20},"ideal":{"a":true,"h":"Ideal","n":"ideal","r":false,"t":"`$OBJECT`","key$":"ideal","index$":21},"klarna":{"a":true,"h":"Klarna","n":"klarna","r":false,"t":"`$OBJECT`","key$":"klarna","index$":22},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":23},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":24},"multibanco":{"a":true,"h":"Multibanco","n":"multibanco","r":false,"t":"`$OBJECT`","key$":"multibanco","index$":25},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":26},"owner":{"a":true,"h":"Owner","n":"owner","r":false,"sh":"Information about the owner of the payment instrument that may be used or required by particular source types.","t":"`$ANY`","key$":"owner","index$":27},"p24":{"a":true,"h":"P24","n":"p24","r":false,"t":"`$OBJECT`","key$":"p24","index$":28},"receiver":{"a":true,"h":"Receiver","n":"receiver","r":true,"t":"`$OBJECT`","key$":"receiver","index$":29},"redirect":{"a":true,"h":"Redirect","n":"redirect","r":true,"t":"`$OBJECT`","key$":"redirect","index$":30},"sepa_debit":{"a":true,"h":"Sepa Debit","n":"sepa_debit","r":false,"t":"`$OBJECT`","key$":"sepa_debit","index$":31},"sofort":{"a":true,"h":"Sofort","n":"sofort","r":false,"t":"`$OBJECT`","key$":"sofort","index$":32},"source_order":{"a":true,"h":"Source Order","n":"source_order","r":true,"t":"`$OBJECT`","key$":"source_order","index$":33},"statement_descriptor":{"a":true,"h":"Statement Descriptor","n":"statement_descriptor","r":false,"sh":"Extra information about a source.","t":"`$STRING`","key$":"statement_descriptor","index$":34},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`.","t":"`$STRING`","key$":"status","index$":35},"three_d_secure":{"a":true,"h":"Three D Secure","n":"three_d_secure","r":false,"t":"`$OBJECT`","key$":"three_d_secure","index$":36},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The `type` of the source.","t":"`$STRING`","key$":"type","index$":37},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The URL where this list can be accessed.","t":"`$STRING`","key$":"url","index$":38},"usage":{"a":true,"h":"Usage","n":"usage","r":false,"sh":"Either `reusable` or `single_use`.","t":"`$STRING`","key$":"usage","index$":39},"wechat":{"a":true,"h":"Wechat","n":"wechat","r":false,"t":"`$OBJECT`","key$":"wechat","index$":40}},"id":{"field":"id","name":"id"},"name":"source","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/customers/{customer}/sources/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/customers/{customer}/sources/{id}","q":{"exist":["customer_id","id"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"sources"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/customers/{customer}/sources","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/customers/{customer}/sources","q":{"exist":["customer_id"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"sources"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/sources/{source}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"source","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/sources/{source}","q":{"exist":["id"]},"r":{"param":{"source":"id"}},"s":[{"lit":"v1"},{"lit":"sources"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/sources/{source}/verify","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"source","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/sources/{source}/verify","q":{"$action":"verify","exist":["id"]},"r":{"param":{"source":"id"}},"s":[{"lit":"v1"},{"lit":"sources"},{"var":"id"},{"lit":"verify"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /v1/sources","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/sources","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"sources"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/customers/{customer}/sources","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"object","or":"object","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v1/customers/{customer}/sources","q":{"exist":["customer_id","ending_before","expand","limit","object","starting_after"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"sources"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/sources/{source}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"source","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"client_secret","or":"client_secret","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1}]},"k":"http","m":"GET","o":"/v1/sources/{source}","q":{"exist":["client_secret","expand","id"]},"r":{"param":{"source":"id"}},"s":[{"lit":"v1"},{"lit":"sources"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /v1/customers/{customer}/sources/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/customers/{customer}/sources/{id}","q":{"exist":["customer_id","expand","id"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"sources"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/customers/{customer}/sources/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v1/customers/{customer}/sources/{id}","q":{"exist":["customer_id","id"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"sources"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.customer"]]},"key$":"source","name__orig":"source","Name":"Source","name_":"source","name-":"source","NAME":"SOURCE","index$":126}, {"active":true,"entity":"source","key$":"BasicSourceFlow","kind":"basic","name":"BasicSourceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"source_ref01"},"m":{"customer_id":"customer01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"customer_id":"customer01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"source_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"source_ref01","srcdatavar":"source_ref01_data","suffix":"_dt0"},"m":{"customer_id":"customer01","id":"source01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-source_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"source_ref01","suffix":"_rm0"},"m":{"customer_id":"customer01","id":"source01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"customer_id":"customer01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"source_ref01"}}],"index$":4}]}, 'Source', {"POST /v1/customers/{customer}/sources/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"owner":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"account_holder_name":{"description":"The name of the person or business that owns the bank account.","maxLength":5000,"type":"string"},"account_holder_type":{"description":"The type of entity that holds the account. This can be either `individual` or `company`.","enum":["company","individual"],"maxLength":5000,"type":"string"},"address_city":{"description":"City/District/Suburb/Town/Village.","maxLength":5000,"type":"string"},"address_country":{"description":"Billing address country, if provided when creating card.","maxLength":5000,"type":"string"},"address_line1":{"description":"Address line 1 (Street address/PO Box/Company name).","maxLength":5000,"type":"string"},"address_line2":{"description":"Address line 2 (Apartment/Suite/Unit/Building).","maxLength":5000,"type":"string"},"address_state":{"description":"State/County/Province/Region.","maxLength":5000,"type":"string"},"address_zip":{"description":"ZIP or postal code.","maxLength":5000,"type":"string"},"exp_month":{"description":"Two digit number representing the card’s expiration month.","maxLength":5000,"type":"string"},"exp_year":{"description":"Four digit number representing the card’s expiration year.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"name":{"description":"Cardholder name.","maxLength":5000,"type":"string"},"owner":{"properties":{"address":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{}},"title":"source_address","type":"object"},"email":{"type":"string"},"name":{"maxLength":5000,"type":"string"},"phone":{"maxLength":5000,"type":"string"}},"title":"owner","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]},"POST /v1/customers/{customer}/sources":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"bank_account":{"explode":true,"style":"deepObject"},"card":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"alipay_account":{"description":"A token returned by [Stripe.js](https://stripe.com/docs/js) representing the user’s Alipay account details.","maxLength":5000,"type":"string"},"bank_account":{"anyOf":[{"properties":{"account_holder_name":{},"account_holder_type":{},"account_number":{},"country":{},"currency":{},"object":{},"routing_number":{}},"required":["account_number","country"],"title":"customer_payment_source_bank_account","type":"object"},{"maxLength":5000,"type":"string"}],"description":"Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details."},"card":{"anyOf":[{"properties":{"address_city":{},"address_country":{},"address_line1":{},"address_line2":{},"address_state":{},"address_zip":{},"cvc":{},"encrypted":{},"exp_month":{},"exp_year":{},"metadata":{},"name":{},"network_token":{},"number":{},"object":{},"swipe_data":{}},"required":["exp_month","exp_year","number"],"title":"customer_payment_source_card","type":"object"},{"maxLength":5000,"type":"string"}],"description":"A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js).","x-stripeBypassValidation":true},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"source":{"description":"Please refer to full [documentation](https://api.stripe.com) instead.","maxLength":5000,"type":"string","x-stripeBypassValidation":true}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/sources/{source}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"mandate":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"owner":{"explode":true,"style":"deepObject"},"source_order":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"description":"Amount associated with the source.","type":"integer"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"mandate":{"description":"Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.","properties":{"acceptance":{"properties":{"date":{},"ip":{},"offline":{},"online":{},"status":{},"type":{},"user_agent":{}},"required":["status"],"title":"mandate_acceptance_params","type":"object"},"amount":{"anyOf":[{},{}]},"currency":{"format":"currency","type":"string"},"interval":{"enum":["one_time","scheduled","variable"],"maxLength":5000,"type":"string"},"notification_method":{"enum":["deprecated_none","email","manual","none","stripe_email"],"maxLength":5000,"type":"string"}},"title":"mandate_params","type":"object"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"owner":{"description":"Information about the owner of the payment instrument that may be used or required by particular source types.","properties":{"address":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{}},"title":"source_address","type":"object"},"email":{"type":"string"},"name":{"maxLength":5000,"type":"string"},"phone":{"maxLength":5000,"type":"string"}},"title":"owner","type":"object"},"source_order":{"description":"Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.","properties":{"items":{"items":{"properties":{},"title":"order_item_specs","type":"object"},"type":"array"},"shipping":{"properties":{"address":{},"carrier":{},"name":{},"phone":{},"tracking_number":{}},"required":["address"],"title":"order_shipping","type":"object"}},"title":"order_params","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"source","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/sources/{source}/verify":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"values":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"values":{"description":"The values needed to verify the source.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"required":["values"],"type":"object"}}},"required":true},"parameters":[{"in":"path","name":"source","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/sources":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"mandate":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"owner":{"explode":true,"style":"deepObject"},"receiver":{"explode":true,"style":"deepObject"},"redirect":{"explode":true,"style":"deepObject"},"source_order":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"description":"Amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources. Not supported for `receiver` type sources, where charge amount may not be specified until funds land.","type":"integer"},"currency":{"description":"Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready.","format":"currency","type":"string"},"customer":{"description":"The `Customer` to whom the original source is attached to. Must be set when the original source is not a `Source` (e.g., `Card`).","maxLength":500,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"flow":{"description":"The authentication `flow` of the source to create. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`. It is generally inferred unless a type supports multiple flows.","enum":["code_verification","none","receiver","redirect"],"maxLength":5000,"type":"string"},"mandate":{"description":"Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.","properties":{"acceptance":{"properties":{"date":{},"ip":{},"offline":{},"online":{},"status":{},"type":{},"user_agent":{}},"required":["status"],"title":"mandate_acceptance_params","type":"object"},"amount":{"anyOf":[{},{}]},"currency":{"format":"currency","type":"string"},"interval":{"enum":["one_time","scheduled","variable"],"maxLength":5000,"type":"string"},"notification_method":{"enum":["deprecated_none","email","manual","none","stripe_email"],"maxLength":5000,"type":"string"}},"title":"mandate_params","type":"object"},"metadata":{"additionalProperties":{"type":"string"},"type":"object"},"original_source":{"description":"The source to share.","maxLength":5000,"type":"string"},"owner":{"description":"Information about the owner of the payment instrument that may be used or required by particular source types.","properties":{"address":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{}},"title":"source_address","type":"object"},"email":{"type":"string"},"name":{"maxLength":5000,"type":"string"},"phone":{"maxLength":5000,"type":"string"}},"title":"owner","type":"object"},"receiver":{"description":"Optional parameters for the receiver flow. Can be set only if the source is a receiver (`flow` is `receiver`).","properties":{"refund_attributes_method":{"enum":["email","manual","none"],"maxLength":5000,"type":"string"}},"title":"receiver_params","type":"object"},"redirect":{"description":"Parameters required for the redirect flow. Required if the source is authenticated by a redirect (`flow` is `redirect`).","properties":{"return_url":{"type":"string"}},"required":["return_url"],"title":"redirect_params","type":"object"},"source_order":{"description":"Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.","properties":{"items":{"items":{"properties":{},"title":"order_item_specs","type":"object"},"type":"array"},"shipping":{"properties":{"address":{},"carrier":{},"name":{},"phone":{},"tracking_number":{}},"required":["address"],"title":"order_shipping","type":"object"}},"title":"shallow_order_specs","type":"object"},"statement_descriptor":{"description":"An arbitrary string to be displayed on your customer's statement. As an example, if your website is `RunClub` and the item you're charging for is a race ticket, you may want to specify a `statement_descriptor` of `RunClub 5K race ticket.` While many payment types will display this information, some may not display it at all.","maxLength":5000,"type":"string"},"token":{"description":"An optional token used to create the source. When passed, token properties will override source parameters.","maxLength":5000,"type":"string"},"type":{"description":"The `type` of the source to create. Required unless `customer` and `original_source` are specified (see the [Cloning card Sources](https://docs.stripe.com/sources/connect#cloning-card-sources) guide)","maxLength":5000,"type":"string"},"usage":{"enum":["reusable","single_use"],"maxLength":5000,"type":"string"}},"type":"object"}}},"required":false},"parameters":[]},"GET /v1/customers/{customer}/sources":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"Filter sources according to a particular object type.","in":"query","name":"object","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"type":"string"},"style":"form","index$":5}]},"GET /v1/sources/{source}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"The client secret of the source. Required if a publishable key is used to retrieve the source.","in":"query","name":"client_secret","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"in":"path","name":"source","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":2}]},"GET /v1/customers/{customer}/sources/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"in":"path","name":"id","required":true,"schema":{"maxLength":500,"type":"string"},"style":"simple","index$":2}]},"DELETE /v1/customers/{customer}/sources/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"in":"path","name":"id","required":true,"schema":{"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const source_ref01_ent = client.Source()
    let source_ref01_data = setup.data.new.source['source_ref01']
    source_ref01_data['customer_id'] = setup.idmap['customer01']

    source_ref01_data = (await source_ref01_ent.create(source_ref01_data)).data()
    assert(null != source_ref01_data.id)


    // LIST
    const source_ref01_match = {}
    source_ref01_match['customer_id'] = setup.idmap['customer01']

    const source_ref01_list = (await source_ref01_ent.list(source_ref01_match)).map((e) => e.data())

    assert(!isempty(select(source_ref01_list, { id: source_ref01_data.id })))


    // LOAD
    const source_ref01_match_dt0 = {}
    source_ref01_match_dt0.id = source_ref01_data.id
    const source_ref01_data_dt0 = (await source_ref01_ent.load(source_ref01_match_dt0)).data()
    assert(source_ref01_data_dt0.id === source_ref01_data.id)


    // REMOVE
    const source_ref01_match_rm0 = {}
    source_ref01_match_rm0.id = source_ref01_data.id
    await source_ref01_ent.remove(source_ref01_match_rm0)
  

    // LIST
    const source_ref01_match_rt0 = {}
    source_ref01_match_rt0['customer_id'] = setup.idmap['customer01']

    const source_ref01_list_rt0 = (await source_ref01_ent.list(source_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(source_ref01_list_rt0, { id: source_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/source/SourceTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = StripeSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['source01','source02','source03','customer01','customer02','customer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_SOURCE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_SOURCE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_SOURCE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new StripeSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.STRIPE_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
