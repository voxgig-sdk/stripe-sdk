

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


describe('PromotionCodeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.PromotionCode()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'promotion_code.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":true,"sh":"Whether the promotion code is currently active.","t":"`$BOOLEAN`","key$":"active","index$":0},"code":{"a":true,"h":"Code","n":"code","r":true,"sh":"The customer-facing code.","t":"`$STRING`","key$":"code","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"customer":{"a":true,"h":"Customer","n":"customer","r":false,"sh":"The customer who can use this promotion code.","t":"`$ANY`","union":{"branches":3,"count":2,"depth":1},"key$":"customer","index$":3},"customer_account":{"a":true,"h":"Customer Account","n":"customer_account","r":false,"sh":"The account representing the customer who can use this promotion code.","t":"`$STRING`","key$":"customer_account","index$":4},"expires_at":{"a":true,"fo":"unix-time","h":"Expires At","n":"expires_at","r":false,"sh":"Date at which the promotion code can no longer be redeemed.","t":"`$INTEGER`","key$":"expires_at","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":6},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":7},"max_redemptions":{"a":true,"h":"Max Redemptions","n":"max_redemptions","r":false,"sh":"Maximum number of times this promotion code can be redeemed.","t":"`$INTEGER`","key$":"max_redemptions","index$":8},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":9},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":10},"promotion":{"a":true,"h":"Promotion","n":"promotion","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":2},"key$":"promotion","index$":11},"restrictions":{"a":true,"h":"Restrictions","n":"restrictions","r":true,"t":"`$OBJECT`","key$":"restrictions","index$":12},"times_redeemed":{"a":true,"h":"Times Redeemed","n":"times_redeemed","r":true,"sh":"Number of times this promotion code has been used.","t":"`$INTEGER`","key$":"times_redeemed","index$":13}},"id":{"field":"id","name":"id"},"name":"promotion_code","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/promotion_codes/{promotion_code}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"promotion_code","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/promotion_codes/{promotion_code}","q":{"exist":["id"]},"r":{"param":{"promotion_code":"id"}},"s":[{"lit":"v1"},{"lit":"promotion_codes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/promotion_codes","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/promotion_codes","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"promotion_codes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/promotion_codes","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"code","or":"code","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"coupon","or":"coupon","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"customer","or":"customer","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"customer_account","or":"customer_account","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":7},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":8},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":9}]},"k":"http","m":"GET","o":"/v1/promotion_codes","q":{"exist":["active","code","coupon","created","customer","customer_account","ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"promotion_codes"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/promotion_codes/{promotion_code}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"promotion_code","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/promotion_codes/{promotion_code}","q":{"exist":["expand","id"]},"r":{"param":{"promotion_code":"id"}},"s":[{"lit":"v1"},{"lit":"promotion_codes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"promotion_code","name__orig":"promotion_code","Name":"PromotionCode","name_":"promotion_code","name-":"promotion-code","NAME":"PROMOTION_CODE","index$":102}, {"active":true,"entity":"promotion_code","key$":"BasicPromotionCodeFlow","kind":"basic","name":"BasicPromotionCodeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"promotion_code_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"promotion_code_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"promotion_code_ref01","srcdatavar":"promotion_code_ref01_data","suffix":"_dt0"},"m":{"id":"promotion_code01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-promotion_code_ref01"}}],"index$":2}]}, 'PromotionCode', {"POST /v1/promotion_codes/{promotion_code}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"restrictions":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"active":{"description":"Whether the promotion code is currently active. A promotion code can only be reactivated when the coupon is still valid and the promotion code is otherwise redeemable.","type":"boolean"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"restrictions":{"description":"Settings that restrict the redemption of the promotion code.","properties":{"currency_options":{"additionalProperties":{"properties":{},"title":"currency_option","type":"object"},"type":"object"}},"title":"restrictions_params","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"promotion_code","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/promotion_codes":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"promotion":{"explode":true,"style":"deepObject"},"restrictions":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"active":{"description":"Whether the promotion code is currently active.","type":"boolean"},"code":{"description":"The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for a specific customer. Valid characters are lower case letters (a-z), upper case letters (A-Z), digits (0-9), and dashes (-).\n\nIf left blank, we will generate one automatically.","maxLength":500,"type":"string"},"customer":{"description":"The customer who can use this promotion code. If not set, all customers can use the promotion code.","maxLength":5000,"type":"string"},"customer_account":{"description":"The account representing the customer who can use this promotion code. If not set, all customers can use the promotion code.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"expires_at":{"description":"The timestamp at which this promotion code will expire. If the coupon has specified a `redeems_by`, then this value cannot be after the coupon's `redeems_by`.","format":"unix-time","type":"integer"},"max_redemptions":{"description":"A positive integer specifying the number of times the promotion code can be redeemed. If the coupon has specified a `max_redemptions`, then this value cannot be greater than the coupon's `max_redemptions`.","type":"integer"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"promotion":{"description":"The promotion referenced by this promotion code.","properties":{"coupon":{"maxLength":5000,"type":"string"},"type":{"enum":["coupon"],"type":"string"}},"required":["type"],"title":"promotion","type":"object"},"restrictions":{"description":"Settings that restrict the redemption of the promotion code.","properties":{"currency_options":{"additionalProperties":{"properties":{},"title":"currency_option","type":"object"},"type":"object"},"first_time_transaction":{"type":"boolean"},"minimum_amount":{"type":"integer"},"minimum_amount_currency":{"format":"currency","type":"string"}},"title":"restrictions_params","type":"object"}},"required":["promotion"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/promotion_codes":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Filter promotion codes by whether they are active.","in":"query","name":"active","required":false,"schema":{"type":"boolean"},"style":"form","index$":0},{"description":"Only return promotion codes that have this case-insensitive code.","in":"query","name":"code","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Only return promotion codes for this coupon.","in":"query","name":"coupon","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":3},{"description":"Only return promotion codes that are restricted to this customer.","in":"query","name":"customer","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4},{"description":"Only return promotion codes that are restricted to this account representing the customer.","in":"query","name":"customer_account","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":7},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":8},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":9}]},"GET /v1/promotion_codes/{promotion_code}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"promotion_code","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const promotion_code_ref01_ent = client.PromotionCode()
    let promotion_code_ref01_data = setup.data.new.promotion_code['promotion_code_ref01']

    promotion_code_ref01_data = (await promotion_code_ref01_ent.create(promotion_code_ref01_data)).data()
    assert(null != promotion_code_ref01_data.id)


    // LIST
    const promotion_code_ref01_match: any = {}

    const promotion_code_ref01_list = (await promotion_code_ref01_ent.list(promotion_code_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(promotion_code_ref01_list, { id: promotion_code_ref01_data.id })))


    // LOAD
    const promotion_code_ref01_match_dt0: any = {}
    promotion_code_ref01_match_dt0.id = promotion_code_ref01_data.id
    const promotion_code_ref01_data_dt0 = (await promotion_code_ref01_ent.load(promotion_code_ref01_match_dt0)).data()
    assert(promotion_code_ref01_data_dt0.id === promotion_code_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/promotion_code/PromotionCodeTestData.json')

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
    ['promotion_code01','promotion_code02','promotion_code03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_PROMOTION_CODE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_PROMOTION_CODE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_PROMOTION_CODE_ENTID']
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
  
