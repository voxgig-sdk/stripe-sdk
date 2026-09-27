

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


describe('DiscountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Discount()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'discount.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"checkout_session":{"a":true,"h":"Checkout Session","n":"checkout_session","r":false,"sh":"The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode.","t":"`$STRING`","key$":"checkout_session","index$":0},"customer":{"a":true,"h":"Customer","n":"customer","r":false,"sh":"The ID of the customer associated with this discount.","t":"`$ANY`","union":{"branches":3,"count":2,"depth":1},"key$":"customer","index$":1},"customer_account":{"a":true,"h":"Customer Account","n":"customer_account","r":false,"sh":"The ID of the account representing the customer associated with this discount.","t":"`$STRING`","key$":"customer_account","index$":2},"end":{"a":true,"fo":"unix-time","h":"End","n":"end","r":false,"sh":"If the coupon has a duration of `repeating`, the date that this discount will end.","t":"`$INTEGER`","key$":"end","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The ID of the discount object.","t":"`$STRING`","key$":"id","index$":4},"invoice":{"a":true,"h":"Invoice","n":"invoice","r":false,"sh":"The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice.","t":"`$STRING`","key$":"invoice","index$":5},"invoice_item":{"a":true,"h":"Invoice Item","n":"invoice_item","r":false,"sh":"The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item.","t":"`$STRING`","key$":"invoice_item","index$":6},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":7},"promotion_code":{"a":true,"h":"Promotion Code","n":"promotion_code","r":false,"sh":"The promotion code applied to create this discount.","t":"`$ANY`","union":{"branches":3,"count":7,"depth":7},"key$":"promotion_code","index$":8},"source":{"a":true,"h":"Source","n":"source","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":2},"key$":"source","index$":9},"start":{"a":true,"fo":"unix-time","h":"Start","n":"start","r":true,"sh":"Date that the coupon was applied.","t":"`$INTEGER`","key$":"start","index$":10},"subscription":{"a":true,"h":"Subscription","n":"subscription","r":false,"sh":"The subscription that this coupon is applied to, if it is applied to a particular subscription.","t":"`$STRING`","key$":"subscription","index$":11},"subscription_item":{"a":true,"h":"Subscription Item","n":"subscription_item","r":false,"sh":"The subscription item that this coupon is applied to, if it is applied to a particular subscription item.","t":"`$STRING`","key$":"subscription_item","index$":12}},"id":{"field":"id","name":"id"},"name":"discount","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"subscription_id","or":"subscription_exposed_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount","q":{"exist":["customer_id","expand","subscription_id"]},"r":{"param":{"customer":"customer_id","subscription_exposed_id":"subscription_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"subscriptions"},{"var":"subscription_id"},{"lit":"discount"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /v1/customers/{customer}/discount","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/customers/{customer}/discount","q":{"exist":["customer_id","expand"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"discount"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"subscription_id","or":"subscription_exposed_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount","q":{"exist":["customer_id","subscription_id"]},"r":{"param":{"customer":"customer_id","subscription_exposed_id":"subscription_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"subscriptions"},{"var":"subscription_id"},{"lit":"discount"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /v1/customers/{customer}/discount","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/customers/{customer}/discount","q":{"exist":["customer_id"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"discount"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /v1/subscriptions/{subscription_exposed_id}/discount","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"subscription_id","or":"subscription_exposed_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/subscriptions/{subscription_exposed_id}/discount","q":{"exist":["subscription_id"]},"r":{"param":{"subscription_exposed_id":"subscription_id"}},"s":[{"lit":"v1"},{"lit":"subscriptions"},{"var":"subscription_id"},{"lit":"discount"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.customer"],["$.main.kit.entity.customer","$.main.kit.entity.subscription"]]},"key$":"discount","name__orig":"discount","Name":"Discount","name_":"discount","name-":"discount","NAME":"DISCOUNT","index$":47}, {"active":true,"entity":"discount","key$":"BasicDiscountFlow","kind":"basic","name":"BasicDiscountFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"discount_ref01","srcdatavar":"discount_ref01_data","suffix":"_dt0"},"m":{"id":"discount01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-discount_ref01"}}],"index$":0}]}, 'Discount', {"GET /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"in":"path","name":"subscription_exposed_id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":2}]},"GET /v1/customers/{customer}/discount":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1}]},"DELETE /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"in":"path","name":"subscription_exposed_id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]},"DELETE /v1/customers/{customer}/discount":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"DELETE /v1/subscriptions/{subscription_exposed_id}/discount":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"subscription_exposed_id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let discount_ref01_data = Object.values(setup.data.existing.discount)[0] as any

    // LOAD
    const discount_ref01_ent = client.Discount()
    const discount_ref01_match_dt0: any = {}
    discount_ref01_match_dt0.id = discount_ref01_data.id
    const discount_ref01_data_dt0 = (await discount_ref01_ent.load(discount_ref01_match_dt0)).data()
    assert(discount_ref01_data_dt0.id === discount_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/discount/DiscountTestData.json')

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
    ['discount01','discount02','discount03','customer01','customer02','customer03','subscription01','subscription02','subscription03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_DISCOUNT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_DISCOUNT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_DISCOUNT_ENTID']
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
  
