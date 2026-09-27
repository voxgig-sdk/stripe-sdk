

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


describe('QuoteComputedUpfrontLineItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.QuoteComputedUpfrontLineItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'quote_computed_upfront_line_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"adjustable_quantity":{"a":true,"h":"Adjustable Quantity","n":"adjustable_quantity","r":false,"t":"`$ANY`","key$":"adjustable_quantity","index$":0},"amount_discount":{"a":true,"h":"Amount Discount","n":"amount_discount","r":true,"sh":"Total discount amount applied.","t":"`$INTEGER`","key$":"amount_discount","index$":1},"amount_subtotal":{"a":true,"h":"Amount Subtotal","n":"amount_subtotal","r":true,"sh":"Total before any discounts or taxes are applied.","t":"`$INTEGER`","key$":"amount_subtotal","index$":2},"amount_tax":{"a":true,"h":"Amount Tax","n":"amount_tax","r":true,"sh":"Total tax amount applied.","t":"`$INTEGER`","key$":"amount_tax","index$":3},"amount_total":{"a":true,"h":"Amount Total","n":"amount_total","r":true,"sh":"Total after discounts and taxes.","t":"`$INTEGER`","key$":"amount_total","index$":4},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":5},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"An arbitrary string attached to the object.","t":"`$STRING`","key$":"description","index$":6},"discounts":{"a":true,"h":"Discounts","n":"discounts","r":false,"sh":"The discounts applied to the line item.","t":"`$ARRAY`","union":{"branches":3,"count":10,"depth":12},"key$":"discounts","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":8},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":9},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":10},"price":{"a":true,"h":"Price","n":"price","r":false,"sh":"The price used to generate the line item.","t":"`$NUMBER`","union":{"branches":3,"count":6,"depth":9},"key$":"price","index$":11},"quantity":{"a":true,"h":"Quantity","n":"quantity","r":false,"sh":"The quantity of products being purchased.","t":"`$INTEGER`","key$":"quantity","index$":12},"taxes":{"a":true,"h":"Taxes","n":"taxes","r":false,"sh":"The taxes applied to the line item.","t":"`$ARRAY`","key$":"taxes","index$":13}},"id":{"field":"id","name":"id"},"name":"quote_computed_upfront_line_item","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/quotes/{quote}/computed_upfront_line_items","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"quote","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/quotes/{quote}/computed_upfront_line_items","q":{"exist":["ending_before","expand","id","limit","starting_after"]},"r":{"param":{"quote":"id"}},"s":[{"lit":"v1"},{"lit":"quotes"},{"var":"id"},{"lit":"computed_upfront_line_items"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"quote_computed_upfront_line_item","name__orig":"quote_computed_upfront_line_item","Name":"QuoteComputedUpfrontLineItem","name_":"quote_computed_upfront_line_item","name-":"quote-computed-upfront-line-item","NAME":"QUOTE_COMPUTED_UPFRONT_LINE_ITEM","index$":104}, {"active":true,"entity":"quote_computed_upfront_line_item","key$":"BasicQuoteComputedUpfrontLineItemFlow","kind":"basic","name":"BasicQuoteComputedUpfrontLineItemFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"quote":"quote01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"quote_computed_upfront_line_item_ref01"}}],"index$":0}]}, 'QuoteComputedUpfrontLineItem', {"GET /v1/quotes/{quote}/computed_upfront_line_items":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"in":"path","name":"quote","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let quote_computed_upfront_line_item_ref01_data = Object.values(setup.data.existing.quote_computed_upfront_line_item)[0] as any

    // LIST
    const quote_computed_upfront_line_item_ref01_ent = client.QuoteComputedUpfrontLineItem()
    const quote_computed_upfront_line_item_ref01_match: any = {}
    quote_computed_upfront_line_item_ref01_match['quote'] = setup.idmap['quote01']

    const quote_computed_upfront_line_item_ref01_list = (await quote_computed_upfront_line_item_ref01_ent.list(quote_computed_upfront_line_item_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/quote_computed_upfront_line_item/QuoteComputedUpfrontLineItemTestData.json')

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
    ['quote_computed_upfront_line_item01','quote_computed_upfront_line_item02','quote_computed_upfront_line_item03','quote01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_QUOTE_COMPUTED_UPFRONT_LINE_ITEM_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_QUOTE_COMPUTED_UPFRONT_LINE_ITEM_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_QUOTE_COMPUTED_UPFRONT_LINE_ITEM_ENTID']
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
  
