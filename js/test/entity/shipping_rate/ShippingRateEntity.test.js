
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


describe('ShippingRateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.ShippingRate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":true,"sh":"Whether the shipping rate can be used for new purchases.","t":"`$BOOLEAN`","key$":"active","index$":0},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":1},"delivery_estimate":{"a":true,"h":"Delivery Estimate","n":"delivery_estimate","r":false,"sh":"The estimated range for how long shipping will take, meant to be displayable to the customer.","t":"`$ANY`","key$":"delivery_estimate","index$":2},"display_name":{"a":true,"h":"Display Name","n":"display_name","r":false,"sh":"The name of the shipping rate, meant to be displayable to the customer.","t":"`$STRING`","key$":"display_name","index$":3},"fixed_amount":{"a":true,"h":"Fixed Amount","n":"fixed_amount","r":true,"t":"`$OBJECT`","key$":"fixed_amount","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":5},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":6},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":7},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":8},"tax_behavior":{"a":true,"h":"Tax Behavior","n":"tax_behavior","r":false,"sh":"Specifies whether the rate is considered inclusive of taxes or exclusive of taxes.","t":"`$STRING`","key$":"tax_behavior","index$":9},"tax_code":{"a":true,"h":"Tax Code","n":"tax_code","r":false,"sh":"A [tax code](https://docs.stripe.com/tax/tax-categories) ID.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"tax_code","index$":10},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of calculation to use on the shipping rate.","t":"`$STRING`","key$":"type","index$":11}},"id":{"field":"id","name":"id"},"name":"shipping_rate","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/shipping_rates/{shipping_rate_token}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"shipping_rate_token","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/shipping_rates/{shipping_rate_token}","q":{"exist":["id"]},"r":{"param":{"shipping_rate_token":"id"}},"s":[{"lit":"v1"},{"lit":"shipping_rates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/shipping_rates","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/shipping_rates","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"shipping_rates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/shipping_rates","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"currency","or":"currency","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/v1/shipping_rates","q":{"exist":["active","created","currency","ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"shipping_rates"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/shipping_rates/{shipping_rate_token}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"shipping_rate_token","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/shipping_rates/{shipping_rate_token}","q":{"exist":["expand","id"]},"r":{"param":{"shipping_rate_token":"id"}},"s":[{"lit":"v1"},{"lit":"shipping_rates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"shipping_rate","name__orig":"shipping_rate","Name":"ShippingRate","name_":"shipping_rate","name-":"shipping-rate","NAME":"SHIPPING_RATE","index$":124}, {"active":true,"entity":"shipping_rate","key$":"BasicShippingRateFlow","kind":"basic","name":"BasicShippingRateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"shipping_rate_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"shipping_rate_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"shipping_rate_ref01","srcdatavar":"shipping_rate_ref01_data","suffix":"_dt0"},"m":{"id":"shipping_rate01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-shipping_rate_ref01"}}],"index$":2}]}, 'ShippingRate', {"POST /v1/shipping_rates/{shipping_rate_token}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"fixed_amount":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"active":{"description":"Whether the shipping rate can be used for new purchases. Defaults to `true`.","type":"boolean"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"fixed_amount":{"description":"Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.","properties":{"currency_options":{"additionalProperties":{"properties":{},"title":"currency_option_update","type":"object"},"type":"object"}},"title":"fixed_amount_update","type":"object"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"tax_behavior":{"description":"Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.","enum":["exclusive","inclusive","unspecified"],"type":"string"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"shipping_rate_token","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/shipping_rates":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"delivery_estimate":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"fixed_amount":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"delivery_estimate":{"description":"The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.","properties":{"maximum":{"properties":{"unit":{},"value":{}},"required":["unit","value"],"title":"delivery_estimate_bound","type":"object"},"minimum":{"properties":{"unit":{},"value":{}},"required":["unit","value"],"title":"delivery_estimate_bound","type":"object"}},"title":"delivery_estimate","type":"object"},"display_name":{"description":"The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.","maxLength":100,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"fixed_amount":{"description":"Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.","properties":{"amount":{"type":"integer"},"currency":{"format":"currency","type":"string"},"currency_options":{"additionalProperties":{"properties":{},"required":[],"title":"currency_option","type":"object"},"type":"object"}},"required":["amount","currency"],"title":"fixed_amount","type":"object"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"tax_behavior":{"description":"Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.","enum":["exclusive","inclusive","unspecified"],"type":"string"},"tax_code":{"description":"A [tax code](https://docs.stripe.com/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.","type":"string"},"type":{"description":"The type of calculation to use on the shipping rate.","enum":["fixed_amount"],"type":"string"}},"required":["display_name"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/shipping_rates":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return shipping rates that are active or inactive.","in":"query","name":"active","required":false,"schema":{"type":"boolean"},"style":"form","index$":0},{"description":"A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":1},{"description":"Only return shipping rates for the given currency.","in":"query","name":"currency","required":false,"schema":{"format":"currency","type":"string"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":4},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":5},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6}]},"GET /v1/shipping_rates/{shipping_rate_token}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"shipping_rate_token","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const shipping_rate_ref01_ent = client.ShippingRate()
    let shipping_rate_ref01_data = setup.data.new.shipping_rate['shipping_rate_ref01']

    shipping_rate_ref01_data = (await shipping_rate_ref01_ent.create(shipping_rate_ref01_data)).data()
    assert(null != shipping_rate_ref01_data.id)


    // LIST
    const shipping_rate_ref01_match = {}

    const shipping_rate_ref01_list = (await shipping_rate_ref01_ent.list(shipping_rate_ref01_match)).map((e) => e.data())

    assert(!isempty(select(shipping_rate_ref01_list, { id: shipping_rate_ref01_data.id })))


    // LOAD
    const shipping_rate_ref01_match_dt0 = {}
    shipping_rate_ref01_match_dt0.id = shipping_rate_ref01_data.id
    const shipping_rate_ref01_data_dt0 = (await shipping_rate_ref01_ent.load(shipping_rate_ref01_match_dt0)).data()
    assert(shipping_rate_ref01_data_dt0.id === shipping_rate_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/shipping_rate/ShippingRateTestData.json')

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
    ['shipping_rate01','shipping_rate02','shipping_rate03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_SHIPPING_RATE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_SHIPPING_RATE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_SHIPPING_RATE_ENTID']
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
  
