

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


describe('DebitReversalEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.DebitReversal()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'debit_reversal.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"Amount (in cents) transferred.","t":"`$INTEGER`","key$":"amount","index$":0},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":1},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":2},"financial_account":{"a":true,"h":"Financial Account","n":"financial_account","r":false,"sh":"The FinancialAccount to reverse funds from.","t":"`$STRING`","key$":"financial_account","index$":3},"hosted_regulatory_receipt_url":{"a":true,"h":"Hosted Regulatory Receipt Url","n":"hosted_regulatory_receipt_url","r":false,"sh":"A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.","t":"`$STRING`","key$":"hosted_regulatory_receipt_url","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":5},"linked_flows":{"a":true,"h":"Linked Flows","n":"linked_flows","r":false,"sh":"Other flows linked to a DebitReversal.","t":"`$ANY`","key$":"linked_flows","index$":6},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":7},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":8},"network":{"a":true,"h":"Network","n":"network","r":true,"sh":"The rails used to reverse the funds.","t":"`$STRING`","key$":"network","index$":9},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":10},"received_debit":{"a":true,"h":"Received Debit","n":"received_debit","r":true,"sh":"The ReceivedDebit being reversed.","t":"`$STRING`","key$":"received_debit","index$":11},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Status of the DebitReversal","t":"`$STRING`","key$":"status","index$":12},"status_transitions":{"a":true,"h":"Status Transitions","n":"status_transitions","r":true,"t":"`$OBJECT`","key$":"status_transitions","index$":13},"transaction":{"a":true,"h":"Transaction","n":"transaction","r":false,"sh":"The Transaction associated with this object.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"transaction","index$":14}},"id":{"field":"id","name":"id"},"name":"debit_reversal","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/treasury/debit_reversals","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/treasury/debit_reversals","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"debit_reversals"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/treasury/debit_reversals","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"financial_account","or":"financial_account","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"received_debit","or":"received_debit","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"resolution","or":"resolution","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/v1/treasury/debit_reversals","q":{"exist":["ending_before","expand","financial_account","limit","received_debit","resolution","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"debit_reversals"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/treasury/debit_reversals/{debit_reversal}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"debit_reversal","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/treasury/debit_reversals/{debit_reversal}","q":{"exist":["expand","id"]},"r":{"param":{"debit_reversal":"id"}},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"debit_reversals"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"debit_reversal","name__orig":"debit_reversal","Name":"DebitReversal","name_":"debit_reversal","name-":"debit-reversal","NAME":"DEBIT_REVERSAL","index$":36}, {"active":true,"entity":"debit_reversal","key$":"BasicDebitReversalFlow","kind":"basic","name":"BasicDebitReversalFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"debit_reversal_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"debit_reversal_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"debit_reversal_ref01","srcdatavar":"debit_reversal_ref01_data","suffix":"_dt0"},"m":{"id":"debit_reversal01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-debit_reversal_ref01"}}],"index$":2}]}, 'DebitReversal', {"POST /v1/treasury/debit_reversals":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"received_debit":{"description":"The ReceivedDebit to reverse.","maxLength":5000,"type":"string"}},"required":["received_debit"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/treasury/debit_reversals":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"Returns objects associated with this FinancialAccount.","in":"query","name":"financial_account","required":true,"schema":{"type":"string"},"style":"form","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"Only return DebitReversals for the ReceivedDebit ID.","in":"query","name":"received_debit","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4},{"description":"Only return DebitReversals for a given resolution.","in":"query","name":"resolution","required":false,"schema":{"enum":["lost","won"],"type":"string"},"style":"form","index$":5},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6},{"description":"Only return DebitReversals for a given status.","in":"query","name":"status","required":false,"schema":{"enum":["canceled","completed","processing"],"type":"string"},"style":"form","index$":7}]},"GET /v1/treasury/debit_reversals/{debit_reversal}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"debit_reversal","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const debit_reversal_ref01_ent = client.DebitReversal()
    let debit_reversal_ref01_data = setup.data.new.debit_reversal['debit_reversal_ref01']

    debit_reversal_ref01_data = (await debit_reversal_ref01_ent.create(debit_reversal_ref01_data)).data()
    assert(null != debit_reversal_ref01_data.id)


    // LIST
    const debit_reversal_ref01_match: any = {}

    const debit_reversal_ref01_list = (await debit_reversal_ref01_ent.list(debit_reversal_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(debit_reversal_ref01_list, { id: debit_reversal_ref01_data.id })))


    // LOAD
    const debit_reversal_ref01_match_dt0: any = {}
    debit_reversal_ref01_match_dt0.id = debit_reversal_ref01_data.id
    const debit_reversal_ref01_data_dt0 = (await debit_reversal_ref01_ent.load(debit_reversal_ref01_match_dt0)).data()
    assert(debit_reversal_ref01_data_dt0.id === debit_reversal_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/debit_reversal/DebitReversalTestData.json')

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
    ['debit_reversal01','debit_reversal02','debit_reversal03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_DEBIT_REVERSAL_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_DEBIT_REVERSAL_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_DEBIT_REVERSAL_ENTID']
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
  
