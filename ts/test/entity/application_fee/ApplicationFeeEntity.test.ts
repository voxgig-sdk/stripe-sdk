

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


describe('ApplicationFeeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.ApplicationFee()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'application_fee.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account":{"a":true,"h":"Account","n":"account","r":true,"sh":"ID of the Stripe account this fee was taken from.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"account","index$":0},"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"Amount earned, in cents (or local equivalent).","t":"`$INTEGER`","key$":"amount","index$":1},"amount_refunded":{"a":true,"h":"Amount Refunded","n":"amount_refunded","r":true,"sh":"Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued)","t":"`$INTEGER`","key$":"amount_refunded","index$":2},"application":{"a":true,"h":"Application","n":"application","r":true,"sh":"ID of the Connect application that earned the fee.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"application","index$":3},"balance_transaction":{"a":true,"h":"Balance Transaction","n":"balance_transaction","r":false,"sh":"Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).","t":"`$ANY`","union":{"branches":17,"count":2371,"depth":41},"key$":"balance_transaction","index$":4},"charge":{"a":true,"h":"Charge","n":"charge","r":true,"sh":"ID of the charge that the application fee was taken from.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"charge","index$":5},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":6},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":7},"fee_source":{"a":true,"h":"Fee Source","n":"fee_source","r":false,"sh":"Polymorphic source of the application fee.","t":"`$ANY`","key$":"fee_source","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":9},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":10},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":11},"originating_transaction":{"a":true,"h":"Originating Transaction","n":"originating_transaction","r":false,"sh":"ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"originating_transaction","index$":12},"refunded":{"a":true,"h":"Refunded","n":"refunded","r":true,"sh":"Whether the fee has been fully refunded.","t":"`$BOOLEAN`","key$":"refunded","index$":13},"refunds":{"a":true,"h":"Refunds","n":"refunds","r":true,"sh":"A list of refunds that have been applied to the fee.","t":"`$OBJECT`","union":{"branches":2,"count":2,"depth":5},"key$":"refunds","index$":14}},"id":{"field":"id","name":"id"},"name":"application_fee","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/application_fees/{id}/refund","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/application_fees/{id}/refund","q":{"$action":"refund","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"application_fees"},{"var":"id"},{"lit":"refund"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/application_fees","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"charge","or":"charge","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/v1/application_fees","q":{"exist":["charge","created","ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"application_fees"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/application_fees/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/application_fees/{id}","q":{"exist":["expand","id"]},"r":{},"s":[{"lit":"v1"},{"lit":"application_fees"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"application_fee","name__orig":"application_fee","Name":"ApplicationFee","name_":"application_fee","name-":"application-fee","NAME":"APPLICATION_FEE","index$":7}, {"active":true,"entity":"application_fee","key$":"BasicApplicationFeeFlow","kind":"basic","name":"BasicApplicationFeeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"application_fee_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"application_fee_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"application_fee_ref01","srcdatavar":"application_fee_ref01_data","suffix":"_dt0"},"m":{"id":"application_fee01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-application_fee_ref01"}}],"index$":2}]}, 'ApplicationFee', {"POST /v1/application_fees/{id}/refund":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"type":"integer"},"directive":{"maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"GET /v1/application_fees":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return application fees for the charge specified by this charge ID.","in":"query","name":"charge","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Only return applications fees that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":1},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":3},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":4},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5}]},"GET /v1/application_fees/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const application_fee_ref01_ent = client.ApplicationFee()
    let application_fee_ref01_data = setup.data.new.application_fee['application_fee_ref01']

    application_fee_ref01_data = (await application_fee_ref01_ent.create(application_fee_ref01_data)).data()
    assert(null != application_fee_ref01_data.id)


    // LIST
    const application_fee_ref01_match: any = {}

    const application_fee_ref01_list = (await application_fee_ref01_ent.list(application_fee_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(application_fee_ref01_list, { id: application_fee_ref01_data.id })))


    // LOAD
    const application_fee_ref01_match_dt0: any = {}
    application_fee_ref01_match_dt0.id = application_fee_ref01_data.id
    const application_fee_ref01_data_dt0 = (await application_fee_ref01_ent.load(application_fee_ref01_match_dt0)).data()
    assert(application_fee_ref01_data_dt0.id === application_fee_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/application_fee/ApplicationFeeTestData.json')

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
    ['application_fee01','application_fee02','application_fee03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_APPLICATION_FEE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_APPLICATION_FEE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_APPLICATION_FEE_ENTID']
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
  
