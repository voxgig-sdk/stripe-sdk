

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


describe('PaymentIntentAmountDetailsLineItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.PaymentIntentAmountDetailsLineItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'payment_intent_amount_details_line_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"discount_amount":{"a":true,"h":"Discount Amount","n":"discount_amount","r":false,"sh":"The discount applied on this line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).","t":"`$INTEGER`","key$":"discount_amount","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":1},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":2},"payment_method_options":{"a":true,"h":"Payment Method Options","n":"payment_method_options","r":false,"sh":"Payment method-specific information for line items.","t":"`$ANY`","key$":"payment_method_options","index$":3},"product_code":{"a":true,"h":"Product Code","n":"product_code","r":false,"sh":"The product code of the line item, such as an SKU.","t":"`$STRING`","key$":"product_code","index$":4},"product_name":{"a":true,"h":"Product Name","n":"product_name","r":true,"sh":"The product name of the line item.","t":"`$STRING`","key$":"product_name","index$":5},"quantity":{"a":true,"h":"Quantity","n":"quantity","r":true,"sh":"The quantity of items.","t":"`$INTEGER`","key$":"quantity","index$":6},"tax":{"a":true,"h":"Tax","n":"tax","r":false,"sh":"Contains information about the tax on the item.","t":"`$ANY`","key$":"tax","index$":7},"unit_cost":{"a":true,"h":"Unit Cost","n":"unit_cost","r":true,"sh":"The unit cost of the line item represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).","t":"`$INTEGER`","key$":"unit_cost","index$":8},"unit_of_measure":{"a":true,"h":"Unit Of Measure","n":"unit_of_measure","r":false,"sh":"A unit of measure for the line item, such as gallons, feet, meters, etc.","t":"`$STRING`","key$":"unit_of_measure","index$":9}},"id":{"field":"id","name":"id"},"name":"payment_intent_amount_details_line_item","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/payment_intents/{intent}/amount_details_line_items","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"intent","or":"intent","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/payment_intents/{intent}/amount_details_line_items","q":{"exist":["ending_before","expand","intent","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"payment_intents"},{"var":"intent"},{"lit":"amount_details_line_items"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.payment_intent"]]},"key$":"payment_intent_amount_details_line_item","name__orig":"payment_intent_amount_details_line_item","Name":"PaymentIntentAmountDetailsLineItem","name_":"payment_intent_amount_details_line_item","name-":"payment-intent-amount-details-line-item","NAME":"PAYMENT_INTENT_AMOUNT_DETAILS_LINE_ITEM","index$":88}, {"active":true,"entity":"payment_intent_amount_details_line_item","key$":"BasicPaymentIntentAmountDetailsLineItemFlow","kind":"basic","name":"BasicPaymentIntentAmountDetailsLineItemFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"intent":"intent01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"payment_intent_amount_details_line_item_ref01"}}],"index$":0}]}, 'PaymentIntentAmountDetailsLineItem', {"GET /v1/payment_intents/{intent}/amount_details_line_items":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"in":"path","name":"intent","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let payment_intent_amount_details_line_item_ref01_data = Object.values(setup.data.existing.payment_intent_amount_details_line_item)[0] as any

    // LIST
    const payment_intent_amount_details_line_item_ref01_ent = client.PaymentIntentAmountDetailsLineItem()
    const payment_intent_amount_details_line_item_ref01_match: any = {}
    payment_intent_amount_details_line_item_ref01_match['intent'] = setup.idmap['intent01']

    const payment_intent_amount_details_line_item_ref01_list = (await payment_intent_amount_details_line_item_ref01_ent.list(payment_intent_amount_details_line_item_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/payment_intent_amount_details_line_item/PaymentIntentAmountDetailsLineItemTestData.json')

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
    ['payment_intent_amount_details_line_item01','payment_intent_amount_details_line_item02','payment_intent_amount_details_line_item03','payment_intent01','payment_intent02','payment_intent03','intent01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_PAYMENT_INTENT_AMOUNT_DETAILS_LINE_ITEM_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_PAYMENT_INTENT_AMOUNT_DETAILS_LINE_ITEM_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_PAYMENT_INTENT_AMOUNT_DETAILS_LINE_ITEM_ENTID']
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
  
