

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


describe('MeterEventAdjustmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.MeterEventAdjustment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'meter_event_adjustment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"meter_event_adjustment","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/billing/meter_event_adjustments","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/billing/meter_event_adjustments","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"meter_event_adjustments"}],"t":{"req":"`reqdata`","res":"`body.cancel`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"meter_event_adjustment","name__orig":"meter_event_adjustment","Name":"MeterEventAdjustment","name_":"meter_event_adjustment","name-":"meter-event-adjustment","NAME":"METER_EVENT_ADJUSTMENT","index$":79}, {"active":true,"entity":"meter_event_adjustment","key$":"BasicMeterEventAdjustmentFlow","kind":"basic","name":"BasicMeterEventAdjustmentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"meter_event_adjustment_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'MeterEventAdjustment', {"POST /v1/billing/meter_event_adjustments":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"cancel":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"cancel":{"description":"Specifies which event to cancel.","properties":{"identifier":{"maxLength":100,"type":"string"}},"title":"event_adjustment_cancel_settings_param","type":"object"},"event_name":{"description":"The name of the meter event. Corresponds with the `event_name` field on a meter.","maxLength":100,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"type":{"description":"Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.","enum":["cancel"],"type":"string"}},"required":["event_name","type"],"type":"object"}}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const meter_event_adjustment_ref01_ent = client.MeterEventAdjustment()
    let meter_event_adjustment_ref01_data = setup.data.new.meter_event_adjustment['meter_event_adjustment_ref01']

    meter_event_adjustment_ref01_data = (await meter_event_adjustment_ref01_ent.create(meter_event_adjustment_ref01_data)).data()
    assert(null != meter_event_adjustment_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/meter_event_adjustment/MeterEventAdjustmentTestData.json')

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
    ['meter_event_adjustment01','meter_event_adjustment02','meter_event_adjustment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_METER_EVENT_ADJUSTMENT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_METER_EVENT_ADJUSTMENT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_METER_EVENT_ADJUSTMENT_ENTID']
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
  
