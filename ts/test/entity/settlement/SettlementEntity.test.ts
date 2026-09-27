

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


describe('SettlementEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Settlement()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'settlement.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"settlement","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/issuing/settlements/{settlement}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"settlement","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/issuing/settlements/{settlement}","q":{"exist":["id"]},"r":{"param":{"settlement":"id"}},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"settlements"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.metadata`"},"index$":0},{"a":true,"co":{"id":"POST /v1/test_helpers/issuing/settlements/{settlement}/complete","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"settlement","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/test_helpers/issuing/settlements/{settlement}/complete","q":{"$action":"complete","exist":["id"]},"r":{"param":{"settlement":"id"}},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"issuing"},{"lit":"settlements"},{"var":"id"},{"lit":"complete"}],"t":{"req":"`reqdata`","res":"`body.metadata`"},"index$":1},{"a":true,"co":{"id":"POST /v1/test_helpers/issuing/settlements","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/test_helpers/issuing/settlements","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"issuing"},{"lit":"settlements"}],"t":{"req":"`reqdata`","res":"`body.metadata`"},"index$":2}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/issuing/settlements/{settlement}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"settlement","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/issuing/settlements/{settlement}","q":{"exist":["expand","id"]},"r":{"param":{"settlement":"id"}},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"settlements"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.metadata`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"settlement","name__orig":"settlement","Name":"Settlement","name_":"settlement","name-":"settlement","NAME":"SETTLEMENT","index$":121}, {"active":true,"entity":"settlement","key$":"BasicSettlementFlow","kind":"basic","name":"BasicSettlementFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"settlement_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"settlement_ref01","srcdatavar":"settlement_ref01_data","suffix":"_dt0"},"m":{"id":"settlement01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-settlement_ref01"}}],"index$":1}]}, 'Settlement', {"POST /v1/issuing/settlements/{settlement}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"settlement","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/test_helpers/issuing/settlements/{settlement}/complete":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"description":"The settlement token to mark as complete.","in":"path","name":"settlement","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/test_helpers/issuing/settlements":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"bin":{"description":"The Bank Identification Number reflecting this settlement record.","maxLength":5000,"type":"string"},"clearing_date":{"description":"The date that the transactions are cleared and posted to user's accounts.","type":"integer"},"currency":{"description":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).","format":"currency","type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"interchange_fees_amount":{"description":"The total interchange received as reimbursement for the transactions.","type":"integer"},"net_total_amount":{"description":"The total net amount required to settle with the network.","type":"integer"},"network":{"description":"The card network for this settlement. One of [\"visa\", \"maestro\", \"mastercard\"]","enum":["maestro","visa"],"type":"string","x-stripeBypassValidation":true},"network_settlement_identifier":{"description":"The Settlement Identification Number assigned by the network.","maxLength":5000,"type":"string"},"transaction_amount":{"description":"The total transaction amount reflected in this settlement.","type":"integer"},"transaction_count":{"description":"The total number of transactions reflected in this settlement.","type":"integer"}},"required":["bin","clearing_date","currency","net_total_amount"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/issuing/settlements/{settlement}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"settlement","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const settlement_ref01_ent = client.Settlement()
    let settlement_ref01_data = setup.data.new.settlement['settlement_ref01']

    settlement_ref01_data = (await settlement_ref01_ent.create(settlement_ref01_data)).data()
    assert(null != settlement_ref01_data.id)


    // LOAD
    const settlement_ref01_match_dt0: any = {}
    settlement_ref01_match_dt0.id = settlement_ref01_data.id
    const settlement_ref01_data_dt0 = (await settlement_ref01_ent.load(settlement_ref01_match_dt0)).data()
    assert(settlement_ref01_data_dt0.id === settlement_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/settlement/SettlementTestData.json')

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
    ['settlement01','settlement02','settlement03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_SETTLEMENT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_SETTLEMENT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_SETTLEMENT_ENTID']
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
  
