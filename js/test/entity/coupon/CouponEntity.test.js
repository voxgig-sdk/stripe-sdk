
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


describe('CouponEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Coupon()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount_off":{"a":true,"h":"Amount Off","n":"amount_off","r":false,"sh":"Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.","t":"`$INTEGER`","key$":"amount_off","index$":0},"applies_to":{"a":true,"h":"Applies To","n":"applies_to","r":true,"t":"`$OBJECT`","key$":"applies_to","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":false,"sh":"If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off.","t":"`$STRING`","key$":"currency","index$":3},"currency_options":{"a":true,"h":"Currency Options","n":"currency_options","r":false,"sh":"Coupons defined in each available currency option.","t":"`$OBJECT`","key$":"currency_options","index$":4},"duration":{"a":true,"h":"Duration","n":"duration","r":true,"sh":"One of `forever`, `once`, or `repeating`.","t":"`$STRING`","key$":"duration","index$":5},"duration_in_months":{"a":true,"h":"Duration In Months","n":"duration_in_months","r":false,"sh":"If `duration` is `repeating`, the number of months the coupon applies.","t":"`$INTEGER`","key$":"duration_in_months","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":7},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":8},"max_redemptions":{"a":true,"h":"Max Redemptions","n":"max_redemptions","r":false,"sh":"Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid.","t":"`$INTEGER`","key$":"max_redemptions","index$":9},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":10},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the coupon displayed to customers on for instance invoices or receipts.","t":"`$STRING`","key$":"name","index$":11},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":12},"percent_off":{"a":true,"h":"Percent Off","n":"percent_off","r":false,"sh":"Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon.","t":"`$NUMBER`","key$":"percent_off","index$":13},"redeem_by":{"a":true,"fo":"unix-time","h":"Redeem By","n":"redeem_by","r":false,"sh":"Date after which the coupon can no longer be redeemed.","t":"`$INTEGER`","key$":"redeem_by","index$":14},"times_redeemed":{"a":true,"h":"Times Redeemed","n":"times_redeemed","r":true,"sh":"Number of times this coupon has been applied to a customer.","t":"`$INTEGER`","key$":"times_redeemed","index$":15},"valid":{"a":true,"h":"Valid","n":"valid","r":true,"sh":"Taking account of the above properties, whether this coupon can still be applied to a customer.","t":"`$BOOLEAN`","key$":"valid","index$":16}},"id":{"field":"id","name":"id"},"name":"coupon","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/coupons/{coupon}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"coupon","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/coupons/{coupon}","q":{"exist":["id"]},"r":{"param":{"coupon":"id"}},"s":[{"lit":"v1"},{"lit":"coupons"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/coupons","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/coupons","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"coupons"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/coupons","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v1/coupons","q":{"exist":["created","ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"coupons"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/coupons/{coupon}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"coupon","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/coupons/{coupon}","q":{"exist":["expand","id"]},"r":{"param":{"coupon":"id"}},"s":[{"lit":"v1"},{"lit":"coupons"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"coupon","name__orig":"coupon","Name":"Coupon","name_":"coupon","name-":"coupon","NAME":"COUPON","index$":26}, {"active":true,"entity":"coupon","key$":"BasicCouponFlow","kind":"basic","name":"BasicCouponFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"coupon_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"coupon_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"coupon_ref01","srcdatavar":"coupon_ref01_data","suffix":"_dt0"},"m":{"id":"coupon01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-coupon_ref01"}}],"index$":2}]}, 'Coupon', {"POST /v1/coupons/{coupon}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"currency_options":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"currency_options":{"additionalProperties":{"properties":{"amount_off":{"type":"integer"}},"required":["amount_off"],"title":"currency_option","type":"object"},"description":"Coupons defined in each available currency option (only supported if the coupon is amount-based). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).","type":"object"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"name":{"description":"Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.","maxLength":40,"type":"string"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"coupon","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/coupons":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"applies_to":{"explode":true,"style":"deepObject"},"currency_options":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount_off":{"description":"A positive integer representing the amount to subtract from an invoice total (required if `percent_off` is not passed).","type":"integer"},"applies_to":{"description":"A hash containing directions for what this Coupon will apply discounts to.","properties":{"products":{"items":{"maxLength":5000,"type":"string"},"type":"array"}},"title":"applies_to_params","type":"object"},"currency":{"description":"Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the `amount_off` parameter (required if `amount_off` is passed).","format":"currency","type":"string"},"currency_options":{"additionalProperties":{"properties":{"amount_off":{"type":"integer"}},"required":["amount_off"],"title":"currency_option","type":"object"},"description":"Coupons defined in each available currency option (only supported if `amount_off` is passed). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).","type":"object"},"duration":{"description":"Specifies how long the discount will be in effect if used on a subscription. Defaults to `once`.","enum":["forever","once","repeating"],"type":"string","x-stripeBypassValidation":true},"duration_in_months":{"description":"Required only if `duration` is `repeating`, in which case it must be a positive integer that specifies the number of months the discount will be in effect.","type":"integer"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"id":{"description":"Unique string of your choice that will be used to identify this coupon when applying it to a customer. If you don't want to specify a particular code, you can leave the ID blank and we'll generate a random code for you.","maxLength":5000,"type":"string"},"max_redemptions":{"description":"A positive integer specifying the number of times the coupon can be redeemed before it's no longer valid. For example, you might have a 50% off coupon that the first 20 readers of your blog can use.","type":"integer"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"name":{"description":"Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.","maxLength":40,"type":"string"},"percent_off":{"description":"A positive float larger than 0, and smaller or equal to 100, that represents the discount the coupon will apply (required if `amount_off` is not passed).","type":"number"},"redeem_by":{"description":"Unix timestamp specifying the last time at which the coupon can be redeemed (cannot be set to more than 5 years in the future). After the redeem_by date, the coupon can no longer be applied to new customers.","format":"unix-time","type":"integer"}},"type":"object"}}},"required":false},"parameters":[]},"GET /v1/coupons":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4}]},"GET /v1/coupons/{coupon}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"coupon","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const coupon_ref01_ent = client.Coupon()
    let coupon_ref01_data = setup.data.new.coupon['coupon_ref01']

    coupon_ref01_data = (await coupon_ref01_ent.create(coupon_ref01_data)).data()
    assert(null != coupon_ref01_data.id)


    // LIST
    const coupon_ref01_match = {}

    const coupon_ref01_list = (await coupon_ref01_ent.list(coupon_ref01_match)).map((e) => e.data())

    assert(!isempty(select(coupon_ref01_list, { id: coupon_ref01_data.id })))


    // LOAD
    const coupon_ref01_match_dt0 = {}
    coupon_ref01_match_dt0.id = coupon_ref01_data.id
    const coupon_ref01_data_dt0 = (await coupon_ref01_ent.load(coupon_ref01_match_dt0)).data()
    assert(coupon_ref01_data_dt0.id === coupon_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/coupon/CouponTestData.json')

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
    ['coupon01','coupon02','coupon03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_COUPON_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_COUPON_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_COUPON_ENTID']
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
  
