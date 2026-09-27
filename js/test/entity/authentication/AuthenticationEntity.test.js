
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


describe('AuthenticationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Authentication()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"acquirer_details":{"a":true,"h":"Acquirer Details","n":"acquirer_details","r":false,"sh":"Contains additional details about the acquirer for a 3DS Authentication.","t":"`$OBJECT`","key$":"acquirer_details","index$":0},"amount":{"a":true,"h":"Amount","n":"amount","r":false,"sh":"The amount for this 3DS Authentication.","t":"`$INTEGER`","key$":"amount","index$":1},"challenge_url":{"a":true,"h":"Challenge Url","n":"challenge_url","r":false,"sh":"The URL for presenting a challenge to your cardholder, present if status is requires_challenge.","t":"`$STRING`","key$":"challenge_url","index$":2},"channel":{"a":true,"h":"Channel","n":"channel","r":true,"sh":"Contains details on the channel used (browser, 3RI) for a standalone 3DS Authentication.","t":"`$OBJECT`","key$":"channel","index$":3},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":4},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":false,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":5},"directory_server":{"a":true,"h":"Directory Server","n":"directory_server","r":true,"sh":"The 3DS directory server with which this 3DS Authentication was processed.","t":"`$STRING`","key$":"directory_server","index$":6},"fingerprinting_url":{"a":true,"h":"Fingerprinting Url","n":"fingerprinting_url","r":false,"sh":"The URL for performing issuer fingerprinting, present if fingerprinting is supported for the given payment method.","t":"`$STRING`","key$":"fingerprinting_url","index$":7},"flow_preference":{"a":true,"h":"Flow Preference","n":"flow_preference","r":true,"sh":"Contains details of the flow preference used for a standalone 3DS Authentication.","t":"`$OBJECT`","key$":"flow_preference","index$":8},"future_usage":{"a":true,"h":"Future Usage","n":"future_usage","r":true,"sh":"Contains information about the future authorisations related to this authentication","t":"`$OBJECT`","key$":"future_usage","index$":9},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":10},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":11},"message_category":{"a":true,"h":"Message Category","n":"message_category","r":true,"sh":"Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case.","t":"`$STRING`","key$":"message_category","index$":12},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":13},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":14},"outcome":{"a":true,"h":"Outcome","n":"outcome","r":false,"sh":"The outcome of this 3DS Authentication.","t":"`$STRING`","key$":"outcome","index$":15},"outcome_details":{"a":true,"h":"Outcome Details","n":"outcome_details","r":true,"sh":"Contains details on the result for a standalone 3DS Authentication.","t":"`$OBJECT`","key$":"outcome_details","index$":16},"payment_method":{"a":true,"h":"Payment Method","n":"payment_method","r":true,"sh":"ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication.","t":"`$ANY`","union":{"branches":17,"count":25255,"depth":64},"key$":"payment_method","index$":17},"reason":{"a":true,"h":"Reason","n":"reason","r":false,"sh":"The reason for invoking this 3DS Authentication.","t":"`$STRING`","key$":"reason","index$":18},"shipping_address":{"a":true,"h":"Shipping Address","n":"shipping_address","r":false,"sh":"Contains details about the shipping address for a 3DS Authentication.","t":"`$OBJECT`","key$":"shipping_address","index$":19},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Status of this Authentication.","t":"`$STRING`","key$":"status","index$":20}},"id":{"field":"id","name":"id"},"name":"authentication","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/three_d_secure/authentications/{authentication}/cancel","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"authentication","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/three_d_secure/authentications/{authentication}/cancel","q":{"$action":"cancel","exist":["id"]},"r":{"param":{"authentication":"id"}},"s":[{"lit":"v1"},{"lit":"three_d_secure"},{"lit":"authentications"},{"var":"id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/three_d_secure/authentications/{authentication}/submit","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"authentication","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/three_d_secure/authentications/{authentication}/submit","q":{"$action":"submit","exist":["id"]},"r":{"param":{"authentication":"id"}},"s":[{"lit":"v1"},{"lit":"three_d_secure"},{"lit":"authentications"},{"var":"id"},{"lit":"submit"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/three_d_secure/authentications","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/three_d_secure/authentications","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"three_d_secure"},{"lit":"authentications"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/three_d_secure/authentications","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/v1/three_d_secure/authentications","q":{"exist":["created","ending_before","expand","limit","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"three_d_secure"},{"lit":"authentications"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/three_d_secure/authentications/{authentication}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"authentication","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/three_d_secure/authentications/{authentication}","q":{"exist":["expand","id"]},"r":{"param":{"authentication":"id"}},"s":[{"lit":"v1"},{"lit":"three_d_secure"},{"lit":"authentications"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"authentication","name__orig":"authentication","Name":"Authentication","name_":"authentication","name-":"authentication","NAME":"AUTHENTICATION","index$":9}, {"active":true,"entity":"authentication","key$":"BasicAuthenticationFlow","kind":"basic","name":"BasicAuthenticationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"authentication_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"authentication_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"authentication_ref01","srcdatavar":"authentication_ref01_data","suffix":"_dt0"},"m":{"id":"authentication01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-authentication_ref01"}}],"index$":2}]}, 'Authentication', {"POST /v1/three_d_secure/authentications/{authentication}/cancel":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"authentication","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/three_d_secure/authentications/{authentication}/submit":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"fingerprinting_result":{"description":"The fingerprinting result of the issuer fingerprinting step.\n\nRefer to the [Issuer fingerprinting section of the Standalone 3DS guide](/payments/3d-secure/standalone-3d-secure#issuer-fingerprinting) for more information.","maxLength":5000,"type":"string"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"authentication","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/three_d_secure/authentications":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"acquirer_details":{"explode":true,"style":"deepObject"},"channel":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"flow_preference":{"explode":true,"style":"deepObject"},"future_usage":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"payment_method_data":{"explode":true,"style":"deepObject"},"shipping_address":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"acquirer_details":{"description":"Contains additional details about the acquirer for this 3DS Authentication.\n\nRefer to the [Pass acquirer details and directory server section of the standalone 3DS guide](/payments/3d-secure/standalone-3d-secure#pass-acquirer-details-and-directory-server) for more information.","properties":{"acquirer_bin":{"maxLength":11,"type":"string"},"acquirer_country":{"maxLength":5000,"type":"string"},"acquirer_merchant_id":{"maxLength":35,"type":"string"},"mcc":{"maxLength":5000,"type":"string"},"merchant_name":{"maxLength":40,"type":"string"},"requestor_id":{"maxLength":35,"type":"string"}},"required":["acquirer_bin","acquirer_country","acquirer_merchant_id"],"title":"acquirer_details","type":"object"},"amount":{"description":"A non-negative integer representing the amount in the [smallest currency unit](/currencies#zero-decimal). You can't include this parameter if `message_category` is `non_payment_authentication`","type":"integer"},"channel":{"description":"Contains additional details on the channel used for this 3DS Authentication.","properties":{"browser":{"properties":{"accept_header":{},"color_depth":{},"device_id":{},"ip_address":{},"java_enabled":{},"javascript_enabled":{},"language":{},"screen_height":{},"screen_width":{},"timezone_offset":{},"user_agent":{}},"required":["accept_header","ip_address","javascript_enabled","language","user_agent"],"title":"browser","type":"object"},"three_r_i":{"properties":{"previous_authentication":{},"type":{}},"required":["previous_authentication","type"],"title":"three_ri","type":"object"},"type":{"enum":["browser","three_r_i"],"type":"string"}},"required":["type"],"title":"channel","type":"object"},"currency":{"description":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).","format":"currency","type":"string"},"directory_server":{"description":"The 3DS directory server with which this 3DS Authentication was processed.","enum":["american_express","cartes_bancaires","discover","mastercard","visa"],"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"flow_preference":{"description":"Contains additional details on your flow preference for this 3DS Authentication.\n\nRefer to the [Specify a flow preference section of the standalone 3DS guide](/payments/3d-secure/standalone-3d-secure#specify-a-flow-preference) for more information.","properties":{"challenge":{"properties":{"type":{}},"required":["type"],"title":"challenge","type":"object"},"data_share":{"properties":{"type":{}},"required":["type"],"title":"data_share","type":"object"},"frictionless":{"properties":{"type":{}},"required":["type"],"title":"frictionless","type":"object"},"type":{"enum":["challenge","data_share","frictionless"],"type":"string"}},"required":["type"],"title":"flow_preference","type":"object"},"future_usage":{"description":"Contains information about future usage of this 3DS Authentication","properties":{"installment":{"properties":{"amount":{},"expiry":{},"interval":{},"interval_count":{},"number":{}},"required":["amount","expiry","number"],"title":"installment","type":"object"},"recurring":{"properties":{"amount":{},"expiry":{},"interval":{},"interval_count":{}},"required":["amount","expiry"],"title":"recurring","type":"object"},"type":{"enum":["card_on_file","installment","recurring"],"type":"string"}},"required":["type"],"title":"future_usage","type":"object"},"message_category":{"description":"Indicates whether this 3DS Authentication is being performed for a payment or non-payment use case.","enum":["non_payment_authentication","payment_authentication"],"type":"string"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"payment_method":{"description":"ID of the payment method (a PaymentMethod object) to attach to this 3DS Authentication.","maxLength":255,"type":"string"},"payment_method_data":{"description":"Hash used to generate the PaymentMethod to be used for this Authentication. This is mutually exclusive with the `payment_method` parameter.","properties":{"billing_details":{"properties":{"address":{},"email":{},"name":{},"phone":{}},"title":"billing_details","type":"object"},"card":{"anyOf":[{},{}]},"type":{"enum":["card"],"type":"string"}},"required":["card","type"],"title":"payment_method_data","type":"object"},"reason":{"description":"The reason for invoking standalone 3DS. This is tailored specifically for cases when you want Stripe to help determine the standalone 3DS flow to fit your use case instead of needing to select a specific 3DS flow.\n\nThis parameter is exclusive with `flow_preference`. You can either use `reason` for controlling 3DS according to your business requirements, or use `flow_preference` for having fine-grained control over your 3DS flow preference.","enum":["cardholder_authentication","issuer_requested","liability_shift","processing_costs","regulatory_compliance"],"type":"string"},"shipping_address":{"description":"The shipping address requested by the cardholder. You should try to include as complete address information as possible.","properties":{"city":{"maxLength":50,"type":"string"},"country":{"maxLength":5000,"type":"string"},"line1":{"maxLength":50,"type":"string"},"line2":{"maxLength":50,"type":"string"},"postal_code":{"maxLength":16,"type":"string"},"state":{"maxLength":3,"type":"string"}},"title":"address","type":"object"},"submit":{"description":"Set to `always` to skip the fingerprinting step and submit this Authentication immediately or `if_fingerprinting_not_supported` to submit this Authentication only if fingerprinting is not available. This parameter defaults to `never`.\n\nRefer to the [Submit at creation section of the standalone 3DS guide](/payments/3d-secure/standalone-3d-secure#submit-at-creation) for more information.","enum":["always","if_fingerprinting_not_supported","never"],"type":"string"}},"required":["channel","message_category"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/three_d_secure/authentications":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp or a dictionary with a number of different query options.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4},{"description":"Only return 3D Secure Authentications for specified status.","in":"query","name":"status","required":false,"schema":{"enum":["canceled","error","failed","requires_challenge","requires_submission","succeeded"],"type":"string","x-stripeBypassValidation":true},"style":"form","index$":5}]},"GET /v1/three_d_secure/authentications/{authentication}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"authentication","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const authentication_ref01_ent = client.Authentication()
    let authentication_ref01_data = setup.data.new.authentication['authentication_ref01']

    authentication_ref01_data = (await authentication_ref01_ent.create(authentication_ref01_data)).data()
    assert(null != authentication_ref01_data.id)


    // LIST
    const authentication_ref01_match = {}

    const authentication_ref01_list = (await authentication_ref01_ent.list(authentication_ref01_match)).map((e) => e.data())

    assert(!isempty(select(authentication_ref01_list, { id: authentication_ref01_data.id })))


    // LOAD
    const authentication_ref01_match_dt0 = {}
    authentication_ref01_match_dt0.id = authentication_ref01_data.id
    const authentication_ref01_data_dt0 = (await authentication_ref01_ent.load(authentication_ref01_match_dt0)).data()
    assert(authentication_ref01_data_dt0.id === authentication_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/authentication/AuthenticationTestData.json')

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
    ['authentication01','authentication02','authentication03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_AUTHENTICATION_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_AUTHENTICATION_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_AUTHENTICATION_ENTID']
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
  
