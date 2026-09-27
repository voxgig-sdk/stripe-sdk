

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


describe('OrderEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Order()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'order.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount_fees":{"a":true,"h":"Amount Fees","n":"amount_fees","r":true,"sh":"Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit.","t":"`$INTEGER`","key$":"amount_fees","index$":0},"amount_subtotal":{"a":true,"h":"Amount Subtotal","n":"amount_subtotal","r":true,"sh":"Total amount of the carbon removal in the currency's smallest unit.","t":"`$INTEGER`","key$":"amount_subtotal","index$":1},"amount_total":{"a":true,"h":"Amount Total","n":"amount_total","r":true,"sh":"Total amount of the order including fees in the currency's smallest unit.","t":"`$INTEGER`","key$":"amount_total","index$":2},"beneficiary":{"a":true,"h":"Beneficiary","n":"beneficiary","r":true,"t":"`$OBJECT`","key$":"beneficiary","index$":3},"canceled_at":{"a":true,"fo":"unix-time","h":"Canceled At","n":"canceled_at","r":false,"sh":"Time at which the order was canceled.","t":"`$INTEGER`","key$":"canceled_at","index$":4},"cancellation_reason":{"a":true,"h":"Cancellation Reason","n":"cancellation_reason","r":false,"sh":"Reason for the cancellation of this order.","t":"`$STRING`","key$":"cancellation_reason","index$":5},"certificate":{"a":true,"h":"Certificate","n":"certificate","r":false,"sh":"For delivered orders, a URL to a delivery certificate for the order.","t":"`$STRING`","key$":"certificate","index$":6},"confirmed_at":{"a":true,"fo":"unix-time","h":"Confirmed At","n":"confirmed_at","r":false,"sh":"Time at which the order was confirmed.","t":"`$INTEGER`","key$":"confirmed_at","index$":7},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":8},"currency":{"a":true,"h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order.","t":"`$STRING`","key$":"currency","index$":9},"delayed_at":{"a":true,"fo":"unix-time","h":"Delayed At","n":"delayed_at","r":false,"sh":"Time at which the order's expected_delivery_year was delayed.","t":"`$INTEGER`","key$":"delayed_at","index$":10},"delivered_at":{"a":true,"fo":"unix-time","h":"Delivered At","n":"delivered_at","r":false,"sh":"Time at which the order was delivered.","t":"`$INTEGER`","key$":"delivered_at","index$":11},"delivery_details":{"a":true,"h":"Delivery Details","n":"delivery_details","r":true,"sh":"Details about the delivery of carbon removal for this order.","t":"`$ARRAY`","key$":"delivery_details","index$":12},"expected_delivery_year":{"a":true,"h":"Expected Delivery Year","n":"expected_delivery_year","r":true,"sh":"The year this order is expected to be delivered.","t":"`$INTEGER`","key$":"expected_delivery_year","index$":13},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":14},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.","t":"`$BOOLEAN`","key$":"livemode","index$":15},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":16},"metric_tons":{"a":true,"fo":"decimal","h":"Metric Tons","n":"metric_tons","r":true,"sh":"Quantity of carbon removal that is included in this order.","t":"`$STRING`","key$":"metric_tons","index$":17},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":18},"product":{"a":true,"h":"Product","n":"product","r":true,"sh":"Unique ID for the Climate `Product` this order is purchasing.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"product","index$":19},"product_substituted_at":{"a":true,"fo":"unix-time","h":"Product Substituted At","n":"product_substituted_at","r":false,"sh":"Time at which the order's product was substituted for a different product.","t":"`$INTEGER`","key$":"product_substituted_at","index$":20},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The current status of this order.","t":"`$STRING`","key$":"status","index$":21}},"id":{"field":"id","name":"id"},"name":"order","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/climate/orders/{order}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"order","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/climate/orders/{order}","q":{"exist":["id"]},"r":{"param":{"order":"id"}},"s":[{"lit":"v1"},{"lit":"climate"},{"lit":"orders"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/climate/orders/{order}/cancel","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"order","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/climate/orders/{order}/cancel","q":{"$action":"cancel","exist":["id"]},"r":{"param":{"order":"id"}},"s":[{"lit":"v1"},{"lit":"climate"},{"lit":"orders"},{"var":"id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/climate/orders","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/climate/orders","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"climate"},{"lit":"orders"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/climate/orders","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/climate/orders","q":{"exist":["ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"climate"},{"lit":"orders"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/climate/orders/{order}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"order","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/climate/orders/{order}","q":{"exist":["expand","id"]},"r":{"param":{"order":"id"}},"s":[{"lit":"v1"},{"lit":"climate"},{"lit":"orders"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"order","name__orig":"order","Name":"Order","name_":"order","name-":"order","NAME":"ORDER","index$":82}, {"active":true,"entity":"order","key$":"BasicOrderFlow","kind":"basic","name":"BasicOrderFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"order_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"order_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"order_ref01","srcdatavar":"order_ref01_data","suffix":"_dt0"},"m":{"id":"order01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-order_ref01"}}],"index$":2}]}, 'Order', {"POST /v1/climate/orders/{order}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"beneficiary":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"beneficiary":{"anyOf":[{"properties":{"public_name":{}},"required":["public_name"],"title":"beneficiary_params","type":"object"},{"enum":[""],"type":"string"}],"description":"Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set."},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"description":"Unique identifier of the order.","in":"path","name":"order","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/climate/orders/{order}/cancel":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"description":"Unique identifier of the order.","in":"path","name":"order","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/climate/orders":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"beneficiary":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"description":"Requested amount of carbon removal units. Either this or `metric_tons` must be specified.","type":"integer"},"beneficiary":{"description":"Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.","properties":{"public_name":{"maxLength":5000,"type":"string"}},"required":["public_name"],"title":"beneficiary_params","type":"object"},"currency":{"description":"Request currency for the order as a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a supported [settlement currency for your account](https://stripe.com/docs/currencies). If omitted, the account's default currency will be used.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"metric_tons":{"description":"Requested number of tons for the order. Either this or `amount` must be specified.","format":"decimal","type":"string"},"product":{"description":"Unique identifier of the Climate product.","maxLength":5000,"type":"string"}},"required":["product"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/climate/orders":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3}]},"GET /v1/climate/orders/{order}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"description":"Unique identifier of the order.","in":"path","name":"order","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const order_ref01_ent = client.Order()
    let order_ref01_data = setup.data.new.order['order_ref01']

    order_ref01_data = (await order_ref01_ent.create(order_ref01_data)).data()
    assert(null != order_ref01_data.id)


    // LIST
    const order_ref01_match: any = {}

    const order_ref01_list = (await order_ref01_ent.list(order_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(order_ref01_list, { id: order_ref01_data.id })))


    // LOAD
    const order_ref01_match_dt0: any = {}
    order_ref01_match_dt0.id = order_ref01_data.id
    const order_ref01_data_dt0 = (await order_ref01_ent.load(order_ref01_match_dt0)).data()
    assert(order_ref01_data_dt0.id === order_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/order/OrderTestData.json')

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
    ['order01','order02','order03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_ORDER_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_ORDER_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_ORDER_ENTID']
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
  
