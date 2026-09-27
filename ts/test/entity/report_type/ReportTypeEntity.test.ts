

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


describe('ReportTypeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.ReportType()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'report_type.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data_available_end":{"a":true,"fo":"unix-time","h":"Data Available End","n":"data_available_end","r":true,"sh":"Most recent time for which this Report Type is available.","t":"`$INTEGER`","key$":"data_available_end","index$":0},"data_available_start":{"a":true,"fo":"unix-time","h":"Data Available Start","n":"data_available_start","r":true,"sh":"Earliest time for which this Report Type is available.","t":"`$INTEGER`","key$":"data_available_start","index$":1},"default_columns":{"a":true,"h":"Default Columns","n":"default_columns","r":false,"sh":"List of column names that are included by default when this Report Type gets run.","t":"`$ARRAY`","key$":"default_columns","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The [ID of the Report Type](https://docs.stripe.com/reporting/statements/api#available-report-types), such as `balance.summary.1`.","t":"`$STRING`","key$":"id","index$":3},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Human-readable name of the Report Type","t":"`$STRING`","key$":"name","index$":5},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":6},"updated":{"a":true,"fo":"unix-time","h":"Updated","n":"updated","r":true,"sh":"When this Report Type was latest updated.","t":"`$INTEGER`","key$":"updated","index$":7},"version":{"a":true,"h":"Version","n":"version","r":true,"sh":"Version of the Report Type.","t":"`$INTEGER`","key$":"version","index$":8}},"id":{"field":"id","name":"id"},"name":"report_type","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/reporting/report_types","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/reporting/report_types","q":{"exist":["expand"]},"r":{},"s":[{"lit":"v1"},{"lit":"reporting"},{"lit":"report_types"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/reporting/report_types/{report_type}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"report_type","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/reporting/report_types/{report_type}","q":{"exist":["expand","id"]},"r":{"param":{"report_type":"id"}},"s":[{"lit":"v1"},{"lit":"reporting"},{"lit":"report_types"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"report_type","name__orig":"report_type","Name":"ReportType","name_":"report_type","name-":"report-type","NAME":"REPORT_TYPE","index$":112}, {"active":true,"entity":"report_type","key$":"BasicReportTypeFlow","kind":"basic","name":"BasicReportTypeFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"report_type_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"report_type_ref01","srcdatavar":"report_type_ref01_data","suffix":"_dt0"},"m":{"id":"report_type01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-report_type_ref01"}}],"index$":1}]}, 'ReportType', {"GET /v1/reporting/report_types":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0}]},"GET /v1/reporting/report_types/{report_type}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"report_type","required":true,"schema":{"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let report_type_ref01_data = Object.values(setup.data.existing.report_type)[0] as any

    // LIST
    const report_type_ref01_ent = client.ReportType()
    const report_type_ref01_match: any = {}

    const report_type_ref01_list = (await report_type_ref01_ent.list(report_type_ref01_match)).map((e: any) => e.data())


    // LOAD
    const report_type_ref01_match_dt0: any = {}
    report_type_ref01_match_dt0.id = report_type_ref01_data.id
    const report_type_ref01_data_dt0 = (await report_type_ref01_ent.load(report_type_ref01_match_dt0)).data()
    assert(report_type_ref01_data_dt0.id === report_type_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/report_type/ReportTypeTestData.json')

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
    ['report_type01','report_type02','report_type03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_REPORT_TYPE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_REPORT_TYPE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_REPORT_TYPE_ENTID']
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
  
