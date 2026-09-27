

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


describe('SetupAttemptEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.SetupAttempt()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'setup_attempt.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"application":{"a":true,"h":"Application","n":"application","r":false,"sh":"The value of [application](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"application","index$":0},"attach_to_self":{"a":true,"h":"Attach To Self","n":"attach_to_self","r":false,"sh":"If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.","t":"`$BOOLEAN`","key$":"attach_to_self","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"customer":{"a":true,"h":"Customer","n":"customer","r":false,"sh":"The value of [customer](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation.","t":"`$ANY`","union":{"branches":3,"count":2,"depth":1},"key$":"customer","index$":3},"customer_account":{"a":true,"h":"Customer Account","n":"customer_account","r":false,"sh":"The value of [customer_account](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-customer_account) on the SetupIntent at the time of this confirmation.","t":"`$STRING`","key$":"customer_account","index$":4},"flow_directions":{"a":true,"h":"Flow Directions","n":"flow_directions","r":false,"sh":"Indicates the directions of money movement for which this payment method is intended to be used.","t":"`$ARRAY`","key$":"flow_directions","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":6},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":7},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":8},"on_behalf_of":{"a":true,"h":"On Behalf Of","n":"on_behalf_of","r":false,"sh":"The value of [on_behalf_of](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"on_behalf_of","index$":9},"payment_method":{"a":true,"h":"Payment Method","n":"payment_method","r":true,"sh":"ID of the payment method used with this SetupAttempt.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"payment_method","index$":10},"payment_method_details":{"a":true,"h":"Payment Method Details","n":"payment_method_details","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":13,"depth":9},"key$":"payment_method_details","index$":11},"setup_error":{"a":true,"h":"Setup Error","n":"setup_error","r":false,"sh":"The error encountered during this attempt to confirm the SetupIntent, if any.","t":"`$ANY`","union":{"branches":17,"count":16375,"depth":55},"key$":"setup_error","index$":12},"setup_intent":{"a":true,"h":"Setup Intent","n":"setup_intent","r":true,"sh":"ID of the SetupIntent that this attempt belongs to.","t":"`$ANY`","union":{"branches":3,"count":55,"depth":10},"key$":"setup_intent","index$":13},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`.","t":"`$STRING`","key$":"status","index$":14},"usage":{"a":true,"h":"Usage","n":"usage","r":true,"sh":"The value of [usage](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`.","t":"`$STRING`","key$":"usage","index$":15}},"id":{"field":"id","name":"id"},"name":"setup_attempt","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/setup_attempts","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"setup_intent","or":"setup_intent","r":true,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/v1/setup_attempts","q":{"exist":["created","ending_before","expand","limit","setup_intent","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"setup_attempts"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"setup_attempt","name__orig":"setup_attempt","Name":"SetupAttempt","name_":"setup_attempt","name-":"setup-attempt","NAME":"SETUP_ATTEMPT","index$":122}, {"active":true,"entity":"setup_attempt","key$":"BasicSetupAttemptFlow","kind":"basic","name":"BasicSetupAttemptFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"setup_attempt_ref01"}}],"index$":0}]}, 'SetupAttempt', {"GET /v1/setup_attempts":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A filter on the list, based on the object `created` field. The value\ncan be a string with an integer Unix timestamp or a\ndictionary with a number of different query options.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"Only return SetupAttempts created by the SetupIntent specified by\nthis ID.","in":"query","name":"setup_intent","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let setup_attempt_ref01_data = Object.values(setup.data.existing.setup_attempt)[0] as any

    // LIST
    const setup_attempt_ref01_ent = client.SetupAttempt()
    const setup_attempt_ref01_match: any = {}

    const setup_attempt_ref01_list = (await setup_attempt_ref01_ent.list(setup_attempt_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/setup_attempt/SetupAttemptTestData.json')

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
    ['setup_attempt01','setup_attempt02','setup_attempt03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_SETUP_ATTEMPT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_SETUP_ATTEMPT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_SETUP_ATTEMPT_ENTID']
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
  
