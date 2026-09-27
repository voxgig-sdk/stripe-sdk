

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


describe('PaymentEvaluationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.PaymentEvaluation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'payment_evaluation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"client_device_metadata_details":{"a":true,"h":"Client Device Metadata Details","n":"client_device_metadata_details","r":true,"sh":"Client device metadata attached to this payment evaluation.","t":"`$OBJECT`","key$":"client_device_metadata_details","index$":0},"created_at":{"a":true,"fo":"unix-time","h":"Created At","n":"created_at","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created_at","index$":1},"customer_details":{"a":true,"h":"Customer Details","n":"customer_details","r":false,"sh":"Customer details attached to this payment evaluation.","t":"`$OBJECT`","key$":"customer_details","index$":2},"events":{"a":true,"h":"Events","n":"events","r":true,"sh":"Event information associated with the payment evaluation, such as refunds, dispute, early fraud warnings, or user interventions.","t":"`$ARRAY`","key$":"events","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":4},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":5},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":6},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":7},"outcome":{"a":true,"h":"Outcome","n":"outcome","r":false,"sh":"Indicates the final outcome for the payment evaluation.","t":"`$ANY`","key$":"outcome","index$":8},"payment_details":{"a":true,"h":"Payment Details","n":"payment_details","r":true,"sh":"Payment details attached to this payment evaluation.","t":"`$OBJECT`","union":{"branches":17,"count":25227,"depth":64},"key$":"payment_details","index$":9},"recommended_action":{"a":true,"h":"Recommended Action","n":"recommended_action","r":true,"sh":"Recommended action based on the score of the `fraudulent_payment` signal.","t":"`$STRING`","key$":"recommended_action","index$":10},"signals":{"a":true,"h":"Signals","n":"signals","r":true,"sh":"Collection of signals for this payment evaluation.","t":"`$OBJECT`","key$":"signals","index$":11}},"id":{"field":"id","name":"id"},"name":"payment_evaluation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/radar/payment_evaluations","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/radar/payment_evaluations","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"radar"},{"lit":"payment_evaluations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"payment_evaluation","name__orig":"payment_evaluation","Name":"PaymentEvaluation","name_":"payment_evaluation","name-":"payment-evaluation","NAME":"PAYMENT_EVALUATION","index$":86}, {"active":true,"entity":"payment_evaluation","key$":"BasicPaymentEvaluationFlow","kind":"basic","name":"BasicPaymentEvaluationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"payment_evaluation_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'PaymentEvaluation', {"POST /v1/radar/payment_evaluations":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"client_device_metadata_details":{"explode":true,"style":"deepObject"},"customer_details":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"payment_details":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"client_device_metadata_details":{"description":"Details about the Client Device Metadata to associate with the payment evaluation.","properties":{"radar_session":{"maxLength":5000,"type":"string"}},"required":["radar_session"],"title":"client_device_metadata_wrapper","type":"object"},"customer_details":{"description":"Details about the customer associated with the payment evaluation.","properties":{"customer":{"maxLength":5000,"type":"string"},"customer_account":{"maxLength":5000,"type":"string"},"email":{"type":"string"},"name":{"maxLength":5000,"type":"string"},"phone":{"type":"string"}},"title":"customer_details","type":"object"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"payment_details":{"description":"Details about the payment.","properties":{"amount":{"type":"integer"},"currency":{"format":"currency","type":"string"},"description":{"maxLength":5000,"type":"string"},"money_movement_details":{"properties":{"card":{},"money_movement_type":{}},"required":["money_movement_type"],"title":"money_movement_details","type":"object"},"payment_method_details":{"properties":{"billing_details":{},"payment_method":{}},"required":["payment_method"],"title":"payment_method_details","type":"object"},"shipping_details":{"properties":{"address":{},"name":{},"phone":{}},"title":"shipping_details","type":"object"},"statement_descriptor":{"maxLength":5000,"type":"string"}},"required":["amount","currency","payment_method_details"],"title":"payment_details","type":"object"}},"required":["customer_details","payment_details"],"type":"object"}}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const payment_evaluation_ref01_ent = client.PaymentEvaluation()
    let payment_evaluation_ref01_data = setup.data.new.payment_evaluation['payment_evaluation_ref01']

    payment_evaluation_ref01_data = (await payment_evaluation_ref01_ent.create(payment_evaluation_ref01_data)).data()
    assert(null != payment_evaluation_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/payment_evaluation/PaymentEvaluationTestData.json')

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
    ['payment_evaluation01','payment_evaluation02','payment_evaluation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_PAYMENT_EVALUATION_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_PAYMENT_EVALUATION_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_PAYMENT_EVALUATION_ENTID']
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
  
