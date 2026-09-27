

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


describe('MeterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Meter()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'meter.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":0},"customer_mapping":{"a":true,"h":"Customer Mapping","n":"customer_mapping","r":true,"t":"`$OBJECT`","key$":"customer_mapping","index$":1},"default_aggregation":{"a":true,"h":"Default Aggregation","n":"default_aggregation","r":true,"t":"`$OBJECT`","key$":"default_aggregation","index$":2},"display_name":{"a":true,"h":"Display Name","n":"display_name","r":true,"sh":"The meter's name.","t":"`$STRING`","key$":"display_name","index$":3},"event_name":{"a":true,"h":"Event Name","n":"event_name","r":true,"sh":"The name of the meter event to record usage for.","t":"`$STRING`","key$":"event_name","index$":4},"event_time_window":{"a":true,"h":"Event Time Window","n":"event_time_window","r":false,"sh":"The time window which meter events have been pre-aggregated for, if any.","t":"`$STRING`","key$":"event_time_window","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":6},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":7},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The meter's status.","t":"`$STRING`","key$":"status","index$":9},"status_transitions":{"a":true,"h":"Status Transitions","n":"status_transitions","r":true,"t":"`$OBJECT`","key$":"status_transitions","index$":10},"updated":{"a":true,"fo":"unix-time","h":"Updated","n":"updated","r":true,"sh":"Time at which the object was last updated.","t":"`$INTEGER`","key$":"updated","index$":11},"value_settings":{"a":true,"h":"Value Settings","n":"value_settings","r":true,"t":"`$OBJECT`","key$":"value_settings","index$":12}},"id":{"field":"id","name":"id"},"name":"meter","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/billing/meters/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/billing/meters/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"meters"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/billing/meters/{id}/deactivate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/billing/meters/{id}/deactivate","q":{"$action":"deactivate","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"meters"},{"var":"id"},{"lit":"deactivate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/billing/meters/{id}/reactivate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/billing/meters/{id}/reactivate","q":{"$action":"reactivate","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"meters"},{"var":"id"},{"lit":"reactivate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /v1/billing/meters","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/billing/meters","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"meters"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/billing/meters","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v1/billing/meters","q":{"exist":["ending_before","expand","limit","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"meters"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/billing/meters/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/billing/meters/{id}","q":{"exist":["expand","id"]},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"meters"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"meter","name__orig":"meter","Name":"Meter","name_":"meter","name-":"meter","NAME":"METER","index$":77}, {"active":true,"entity":"meter","key$":"BasicMeterFlow","kind":"basic","name":"BasicMeterFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"meter_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"meter_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"meter_ref01","srcdatavar":"meter_ref01_data","suffix":"_dt0"},"m":{"id":"meter01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-meter_ref01"}}],"index$":2}]}, 'Meter', {"POST /v1/billing/meters/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"display_name":{"description":"The meter’s name. Not visible to the customer.","maxLength":250,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/billing/meters/{id}/deactivate":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/billing/meters/{id}/reactivate":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/billing/meters":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"customer_mapping":{"explode":true,"style":"deepObject"},"default_aggregation":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"value_settings":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"customer_mapping":{"description":"Fields that specify how to map a meter event to a customer.","properties":{"event_payload_key":{"maxLength":100,"type":"string"},"type":{"enum":["by_id"],"type":"string"}},"required":["event_payload_key","type"],"title":"customer_mapping_param","type":"object"},"default_aggregation":{"description":"The default settings to aggregate a meter's events with.","properties":{"formula":{"enum":["count","last","sum"],"type":"string","x-stripeBypassValidation":true}},"required":["formula"],"title":"aggregation_settings_param","type":"object"},"display_name":{"description":"The meter’s name. Not visible to the customer.","maxLength":250,"type":"string"},"event_name":{"description":"The name of the meter event to record usage for. Corresponds with the `event_name` field on meter events.","maxLength":100,"type":"string"},"event_time_window":{"description":"The time window which meter events have been pre-aggregated for, if any.","enum":["day","hour"],"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"value_settings":{"description":"Fields that specify how to calculate a meter event's value.","properties":{"event_payload_key":{"maxLength":100,"type":"string"}},"required":["event_payload_key"],"title":"meter_value_settings_param","type":"object"}},"required":["default_aggregation","display_name","event_name"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/billing/meters":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3},{"description":"Filter results to only include meters with the given status.","in":"query","name":"status","required":false,"schema":{"enum":["active","inactive"],"type":"string"},"style":"form","index$":4}]},"GET /v1/billing/meters/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const meter_ref01_ent = client.Meter()
    let meter_ref01_data = setup.data.new.meter['meter_ref01']

    meter_ref01_data = (await meter_ref01_ent.create(meter_ref01_data)).data()
    assert(null != meter_ref01_data.id)


    // LIST
    const meter_ref01_match: any = {}

    const meter_ref01_list = (await meter_ref01_ent.list(meter_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(meter_ref01_list, { id: meter_ref01_data.id })))


    // LOAD
    const meter_ref01_match_dt0: any = {}
    meter_ref01_match_dt0.id = meter_ref01_data.id
    const meter_ref01_data_dt0 = (await meter_ref01_ent.load(meter_ref01_match_dt0)).data()
    assert(meter_ref01_data_dt0.id === meter_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/meter/MeterTestData.json')

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
    ['meter01','meter02','meter03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_METER_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_METER_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_METER_ENTID']
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
  
