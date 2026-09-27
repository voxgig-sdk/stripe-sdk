

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


describe('EarlyFraudWarningEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.EarlyFraudWarning()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'early_fraud_warning.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"actionable":{"a":true,"h":"Actionable","n":"actionable","r":true,"sh":"An EFW is actionable if it has not received a dispute and has not been fully refunded.","t":"`$BOOLEAN`","key$":"actionable","index$":0},"charge":{"a":true,"h":"Charge","n":"charge","r":true,"sh":"ID of the charge this early fraud warning is for, optionally expanded.","t":"`$ANY`","union":{"branches":17,"count":9097,"depth":49},"key$":"charge","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"fraud_type":{"a":true,"h":"Fraud Type","n":"fraud_type","r":true,"sh":"The type of fraud labelled by the issuer.","t":"`$STRING`","key$":"fraud_type","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":4},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":5},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":6},"payment_intent":{"a":true,"h":"Payment Intent","n":"payment_intent","r":false,"sh":"ID of the Payment Intent this early fraud warning is for, optionally expanded.","t":"`$ANY`","union":{"branches":17,"count":16842,"depth":53},"key$":"payment_intent","index$":7}},"id":{"field":"id","name":"id"},"name":"early_fraud_warning","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/radar/early_fraud_warnings","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"charge","or":"charge","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"payment_intent","or":"payment_intent","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/v1/radar/early_fraud_warnings","q":{"exist":["charge","created","ending_before","expand","limit","payment_intent","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"radar"},{"lit":"early_fraud_warnings"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/radar/early_fraud_warnings/{early_fraud_warning}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"early_fraud_warning","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/radar/early_fraud_warnings/{early_fraud_warning}","q":{"exist":["expand","id"]},"r":{"param":{"early_fraud_warning":"id"}},"s":[{"lit":"v1"},{"lit":"radar"},{"lit":"early_fraud_warnings"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"early_fraud_warning","name__orig":"early_fraud_warning","Name":"EarlyFraudWarning","name_":"early_fraud_warning","name-":"early-fraud-warning","NAME":"EARLY_FRAUD_WARNING","index$":50}, {"active":true,"entity":"early_fraud_warning","key$":"BasicEarlyFraudWarningFlow","kind":"basic","name":"BasicEarlyFraudWarningFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"early_fraud_warning_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"early_fraud_warning_ref01","srcdatavar":"early_fraud_warning_ref01_data","suffix":"_dt0"},"m":{"id":"early_fraud_warning01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-early_fraud_warning_ref01"}}],"index$":1}]}, 'EarlyFraudWarning', {"GET /v1/radar/early_fraud_warnings":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return early fraud warnings for the charge specified by this charge ID.","in":"query","name":"charge","required":false,"schema":{"type":"string"},"style":"form","index$":0},{"description":"Only return early fraud warnings that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":1},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":3},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":4},{"description":"Only return early fraud warnings for charges that were created by the PaymentIntent specified by this PaymentIntent ID.","in":"query","name":"payment_intent","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6}]},"GET /v1/radar/early_fraud_warnings/{early_fraud_warning}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"early_fraud_warning","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let early_fraud_warning_ref01_data = Object.values(setup.data.existing.early_fraud_warning)[0] as any

    // LIST
    const early_fraud_warning_ref01_ent = client.EarlyFraudWarning()
    const early_fraud_warning_ref01_match: any = {}

    const early_fraud_warning_ref01_list = (await early_fraud_warning_ref01_ent.list(early_fraud_warning_ref01_match)).map((e: any) => e.data())


    // LOAD
    const early_fraud_warning_ref01_match_dt0: any = {}
    early_fraud_warning_ref01_match_dt0.id = early_fraud_warning_ref01_data.id
    const early_fraud_warning_ref01_data_dt0 = (await early_fraud_warning_ref01_ent.load(early_fraud_warning_ref01_match_dt0)).data()
    assert(early_fraud_warning_ref01_data_dt0.id === early_fraud_warning_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/early_fraud_warning/EarlyFraudWarningTestData.json')

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
    ['early_fraud_warning01','early_fraud_warning02','early_fraud_warning03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_EARLY_FRAUD_WARNING_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_EARLY_FRAUD_WARNING_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_EARLY_FRAUD_WARNING_ENTID']
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
  
