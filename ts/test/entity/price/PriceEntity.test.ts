

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { StripeSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('PriceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Price()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'price.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":true,"sh":"Whether the price can be used for new purchases.","t":"`$BOOLEAN`","key$":"active","index$":0},"billing_scheme":{"a":true,"h":"Billing Scheme","n":"billing_scheme","r":true,"sh":"Describes how to compute the price per period.","t":"`$STRING`","key$":"billing_scheme","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":3},"currency_options":{"a":true,"h":"Currency Options","n":"currency_options","r":false,"sh":"Prices defined in each available currency option.","t":"`$OBJECT`","key$":"currency_options","index$":4},"custom_unit_amount":{"a":true,"h":"Custom Unit Amount","n":"custom_unit_amount","r":false,"sh":"When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.","t":"`$ANY`","key$":"custom_unit_amount","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":6},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":7},"lookup_key":{"a":true,"h":"Lookup Key","n":"lookup_key","r":false,"sh":"A lookup key used to retrieve prices dynamically from a static string.","t":"`$STRING`","key$":"lookup_key","index$":8},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":9},"nickname":{"a":true,"h":"Nickname","n":"nickname","r":false,"sh":"A brief description of the price, hidden from customers.","t":"`$STRING`","key$":"nickname","index$":10},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":11},"product":{"a":true,"h":"Product","n":"product","r":true,"sh":"The ID of the product this price is associated with.","t":"`$ANY`","union":{"branches":3,"count":6,"depth":5},"key$":"product","index$":12},"recurring":{"a":true,"h":"Recurring","n":"recurring","r":false,"sh":"The recurring components of a price such as `interval` and `usage_type`.","t":"`$ANY`","key$":"recurring","index$":13},"tax_behavior":{"a":true,"h":"Tax Behavior","n":"tax_behavior","r":false,"sh":"Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings.","t":"`$STRING`","key$":"tax_behavior","index$":14},"tiers":{"a":true,"h":"Tiers","n":"tiers","r":false,"sh":"Each element represents a pricing tier.","t":"`$ARRAY`","key$":"tiers","index$":15},"tiers_mode":{"a":true,"h":"Tiers Mode","n":"tiers_mode","r":false,"sh":"Defines if the tiering price should be `graduated` or `volume` based.","t":"`$STRING`","key$":"tiers_mode","index$":16},"transform_quantity":{"a":true,"h":"Transform Quantity","n":"transform_quantity","r":false,"sh":"Apply a transformation to the reported usage or set quantity before computing the amount billed.","t":"`$ANY`","key$":"transform_quantity","index$":17},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase.","t":"`$STRING`","key$":"type","index$":18},"unit_amount":{"a":true,"h":"Unit Amount","n":"unit_amount","r":false,"sh":"The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible.","t":"`$INTEGER`","key$":"unit_amount","index$":19},"unit_amount_decimal":{"a":true,"fo":"decimal","h":"Unit Amount Decimal","n":"unit_amount_decimal","r":false,"sh":"The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places.","t":"`$STRING`","key$":"unit_amount_decimal","index$":20}},"id":{"field":"id","name":"id"},"name":"price","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/prices/{price}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"price","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/prices/{price}","q":{"exist":["id"]},"r":{"param":{"price":"id"}},"s":[{"lit":"v1"},{"lit":"prices"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/prices","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/prices","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"prices"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/prices","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"currency","or":"currency","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"lookup_key","or":"lookup_key","r":false,"t":"`$ARRAY`","index$":6},{"a":true,"k":"query","n":"product","or":"product","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"recurring","or":"recurring","r":false,"t":"`$OBJECT`","index$":8},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":10}]},"k":"http","m":"GET","o":"/v1/prices","q":{"exist":["active","created","currency","ending_before","expand","limit","lookup_key","product","recurring","starting_after","type"]},"r":{},"s":[{"lit":"v1"},{"lit":"prices"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/prices/{price}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"price","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/prices/{price}","q":{"exist":["expand","id"]},"r":{"param":{"price":"id"}},"s":[{"lit":"v1"},{"lit":"prices"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"price","name__orig":"price","Name":"Price","name_":"price","name-":"price","NAME":"PRICE","index$":99}, {"active":true,"entity":"price","key$":"BasicPriceFlow","kind":"basic","name":"BasicPriceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"price_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"price_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"price_ref01","srcdatavar":"price_ref01_data","suffix":"_dt0"},"m":{"id":"price01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-price_ref01"}}],"index$":2}]}, 'Price', {"POST /v1/prices/{price}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"currency_options":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"active":{"description":"Whether the price can be used for new purchases. Defaults to `true`.","type":"boolean"},"currency_options":{"anyOf":[{"additionalProperties":{"properties":{},"title":"currency_option","type":"object"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies)."},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"lookup_key":{"description":"A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.","maxLength":200,"type":"string"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"nickname":{"description":"A brief description of the price, hidden from customers.","maxLength":5000,"type":"string"},"tax_behavior":{"description":"Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.","enum":["exclusive","inclusive","unspecified"],"type":"string"},"transfer_lookup_key":{"description":"If set to true, will atomically remove the lookup key from the existing price, and assign it to this price.","type":"boolean"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"price","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/prices":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"currency_options":{"explode":true,"style":"deepObject"},"custom_unit_amount":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"product_data":{"explode":true,"style":"deepObject"},"recurring":{"explode":true,"style":"deepObject"},"tiers":{"explode":true,"style":"deepObject"},"transform_quantity":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"active":{"description":"Whether the price can be used for new purchases. Defaults to `true`.","type":"boolean"},"billing_scheme":{"description":"Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.","enum":["per_unit","tiered"],"type":"string"},"currency":{"description":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).","format":"currency","type":"string"},"currency_options":{"additionalProperties":{"properties":{"custom_unit_amount":{"properties":{},"required":[],"title":"custom_unit_amount","type":"object"},"tax_behavior":{"enum":[],"type":"string"},"tiers":{"items":{},"type":"array"},"unit_amount":{"type":"integer"},"unit_amount_decimal":{"format":"decimal","type":"string"}},"title":"currency_option","type":"object"},"description":"Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).","type":"object"},"custom_unit_amount":{"description":"When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.","properties":{"enabled":{"type":"boolean"},"maximum":{"type":"integer"},"minimum":{"type":"integer"},"preset":{"type":"integer"}},"required":["enabled"],"title":"custom_unit_amount","type":"object"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"lookup_key":{"description":"A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.","maxLength":200,"type":"string"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"nickname":{"description":"A brief description of the price, hidden from customers.","maxLength":5000,"type":"string"},"product":{"description":"The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.","maxLength":5000,"type":"string"},"product_data":{"description":"These fields can be used to create a new product that this price will belong to.","properties":{"active":{"type":"boolean"},"id":{"deprecated":true,"maxLength":5000,"type":"string"},"metadata":{"additionalProperties":{"type":"string"},"type":"object"},"name":{"maxLength":5000,"type":"string"},"statement_descriptor":{"maxLength":22,"type":"string"},"tax_code":{"maxLength":5000,"type":"string"},"tax_details":{"properties":{"performance_location":{},"tax_code":{}},"title":"tax_details","type":"object"},"unit_label":{"maxLength":12,"type":"string"}},"required":["name"],"title":"inline_product_params","type":"object"},"recurring":{"description":"The recurring components of a price such as `interval` and `usage_type`.","properties":{"interval":{"enum":["day","month","week","year"],"type":"string"},"interval_count":{"type":"integer"},"meter":{"maxLength":5000,"type":"string"},"usage_type":{"enum":["licensed","metered"],"type":"string"}},"required":["interval"],"title":"recurring","type":"object"},"tax_behavior":{"description":"Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.","enum":["exclusive","inclusive","unspecified"],"type":"string"},"tiers":{"description":"Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.","items":{"properties":{"flat_amount":{"type":"integer"},"flat_amount_decimal":{"format":"decimal","type":"string"},"unit_amount":{"type":"integer"},"unit_amount_decimal":{"format":"decimal","type":"string"},"up_to":{"anyOf":[]}},"required":["up_to"],"title":"tier","type":"object"},"type":"array"},"tiers_mode":{"description":"Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.","enum":["graduated","volume"],"type":"string"},"transfer_lookup_key":{"description":"If set to true, will atomically remove the lookup key from the existing price, and assign it to this price.","type":"boolean"},"transform_quantity":{"description":"Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.","properties":{"divide_by":{"type":"integer"},"round":{"enum":["down","up"],"type":"string"}},"required":["divide_by","round"],"title":"transform_usage_param","type":"object"},"unit_amount":{"description":"A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge. One of `unit_amount`, `unit_amount_decimal`, or `custom_unit_amount` is required, unless `billing_scheme=tiered`.","type":"integer"},"unit_amount_decimal":{"description":"Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.","format":"decimal","type":"string"}},"required":["currency"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/prices":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return prices that are active or inactive (e.g., pass `false` to list all inactive prices).","in":"query","name":"active","required":false,"schema":{"type":"boolean"},"style":"form","index$":0},{"description":"A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":1},{"description":"Only return prices for the given currency.","in":"query","name":"currency","required":false,"schema":{"format":"currency","type":"string"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":4},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":5},{"description":"Only return the price with these lookup_keys, if any exist. You can specify up to 10 lookup_keys.","explode":true,"in":"query","name":"lookup_keys","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":6},{"description":"Only return prices for the given product.","in":"query","name":"product","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":7},{"description":"Only return prices with these recurring fields.","explode":true,"in":"query","name":"recurring","required":false,"schema":{"properties":{"interval":{"enum":["day","month","week","year"],"type":"string"},"meter":{"maxLength":5000,"type":"string"},"usage_type":{"enum":["licensed","metered"],"type":"string"}},"title":"all_prices_recurring_params","type":"object"},"style":"deepObject","index$":8},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":9},{"description":"Only return prices of type `recurring` or `one_time`.","in":"query","name":"type","required":false,"schema":{"enum":["one_time","recurring"],"type":"string"},"style":"form","index$":10}]},"GET /v1/prices/{price}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"price","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const price_ref01_ent = client.Price()
    let price_ref01_data = setup.data.new.price['price_ref01']

    price_ref01_data = (await price_ref01_ent.create(price_ref01_data)).data()
    assert(null != price_ref01_data.id)


    // LIST
    const price_ref01_match: any = {}

    const price_ref01_list = (await price_ref01_ent.list(price_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(price_ref01_list, { id: price_ref01_data.id })))


    // LOAD
    const price_ref01_match_dt0: any = {}
    price_ref01_match_dt0.id = price_ref01_data.id
    const price_ref01_data_dt0 = (await price_ref01_ent.load(price_ref01_match_dt0)).data()
    assert(price_ref01_data_dt0.id === price_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/price/PriceTestData.json')

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
    ['price01','price02','price03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_PRICE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_PRICE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_PRICE_ENTID']
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
        secret: env.STRIPE_SECRET,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
