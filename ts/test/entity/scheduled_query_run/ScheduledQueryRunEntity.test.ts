

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


describe('ScheduledQueryRunEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.ScheduledQueryRun()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'scheduled_query_run.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":0},"data_load_time":{"a":true,"fo":"unix-time","h":"Data Load Time","n":"data_load_time","r":true,"sh":"When the query was run, Sigma contained a snapshot of your Stripe data at this time.","t":"`$INTEGER`","key$":"data_load_time","index$":1},"error":{"a":true,"h":"Error","n":"error","r":true,"t":"`$OBJECT`","key$":"error","index$":2},"file":{"a":true,"h":"File","n":"file","r":false,"sh":"The file object representing the results of the query.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":9},"key$":"file","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":4},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":5},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":6},"result_available_until":{"a":true,"fo":"unix-time","h":"Result Available Until","n":"result_available_until","r":true,"sh":"Time at which the result expires and is no longer available for download.","t":"`$INTEGER`","key$":"result_available_until","index$":7},"sql":{"a":true,"h":"Sql","n":"sql","r":true,"sh":"SQL for the query.","t":"`$STRING`","key$":"sql","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise.","t":"`$STRING`","key$":"status","index$":9},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"Title of the query.","t":"`$STRING`","key$":"title","index$":10}},"id":{"field":"id","name":"id"},"name":"scheduled_query_run","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/sigma/scheduled_query_runs","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/sigma/scheduled_query_runs","q":{"exist":["ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"sigma"},{"lit":"scheduled_query_runs"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/sigma/scheduled_query_runs/{scheduled_query_run}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"scheduled_query_run","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/sigma/scheduled_query_runs/{scheduled_query_run}","q":{"exist":["expand","id"]},"r":{"param":{"scheduled_query_run":"id"}},"s":[{"lit":"v1"},{"lit":"sigma"},{"lit":"scheduled_query_runs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"scheduled_query_run","name__orig":"scheduled_query_run","Name":"ScheduledQueryRun","name_":"scheduled_query_run","name-":"scheduled-query-run","NAME":"SCHEDULED_QUERY_RUN","index$":116}, {"active":true,"entity":"scheduled_query_run","key$":"BasicScheduledQueryRunFlow","kind":"basic","name":"BasicScheduledQueryRunFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"scheduled_query_run_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"scheduled_query_run_ref01","srcdatavar":"scheduled_query_run_ref01_data","suffix":"_dt0"},"m":{"id":"scheduled_query_run01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-scheduled_query_run_ref01"}}],"index$":1}]}, 'ScheduledQueryRun', {"GET /v1/sigma/scheduled_query_runs":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3}]},"GET /v1/sigma/scheduled_query_runs/{scheduled_query_run}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"scheduled_query_run","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let scheduled_query_run_ref01_data = Object.values(setup.data.existing.scheduled_query_run)[0] as any

    // LIST
    const scheduled_query_run_ref01_ent = client.ScheduledQueryRun()
    const scheduled_query_run_ref01_match: any = {}

    const scheduled_query_run_ref01_list = (await scheduled_query_run_ref01_ent.list(scheduled_query_run_ref01_match)).map((e: any) => e.data())


    // LOAD
    const scheduled_query_run_ref01_match_dt0: any = {}
    scheduled_query_run_ref01_match_dt0.id = scheduled_query_run_ref01_data.id
    const scheduled_query_run_ref01_data_dt0 = (await scheduled_query_run_ref01_ent.load(scheduled_query_run_ref01_match_dt0)).data()
    assert(scheduled_query_run_ref01_data_dt0.id === scheduled_query_run_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/scheduled_query_run/ScheduledQueryRunTestData.json')

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
    ['scheduled_query_run01','scheduled_query_run02','scheduled_query_run03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_SCHEDULED_QUERY_RUN_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_SCHEDULED_QUERY_RUN_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_SCHEDULED_QUERY_RUN_ENTID']
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
  
