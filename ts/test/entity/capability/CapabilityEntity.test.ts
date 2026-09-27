

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


describe('CapabilityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Capability()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'capability.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account":{"a":true,"h":"Account","n":"account","r":true,"sh":"The account for which the capability enables functionality.","t":"`$ANY`","union":{"branches":17,"count":102714,"depth":64},"key$":"account","index$":0},"future_requirements":{"a":true,"h":"Future Requirements","n":"future_requirements","r":true,"t":"`$OBJECT`","key$":"future_requirements","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The identifier for the capability.","t":"`$STRING`","key$":"id","index$":2},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":3},"requested":{"a":true,"h":"Requested","n":"requested","r":true,"sh":"Whether the capability has been requested.","t":"`$BOOLEAN`","key$":"requested","index$":4},"requested_at":{"a":true,"fo":"unix-time","h":"Requested At","n":"requested_at","r":false,"sh":"Time at which the capability was requested.","t":"`$INTEGER`","key$":"requested_at","index$":5},"requirements":{"a":true,"h":"Requirements","n":"requirements","r":true,"t":"`$OBJECT`","key$":"requirements","index$":6},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the capability.","t":"`$STRING`","key$":"status","index$":7}},"id":{"field":"id","name":"id"},"name":"capability","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/accounts/{account}/capabilities/{capability}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"capability","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/accounts/{account}/capabilities/{capability}","q":{"exist":["account_id","id"]},"r":{"param":{"account":"account_id","capability":"id"}},"s":[{"lit":"v1"},{"lit":"accounts"},{"var":"account_id"},{"lit":"capabilities"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/accounts/{account}/capabilities","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/accounts/{account}/capabilities","q":{"exist":["account_id","expand"]},"r":{"param":{"account":"account_id"}},"s":[{"lit":"v1"},{"lit":"accounts"},{"var":"account_id"},{"lit":"capabilities"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/accounts/{account}/capabilities/{capability}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"capability","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/accounts/{account}/capabilities/{capability}","q":{"exist":["account_id","expand","id"]},"r":{"param":{"account":"account_id","capability":"id"}},"s":[{"lit":"v1"},{"lit":"accounts"},{"var":"account_id"},{"lit":"capabilities"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"capability","name__orig":"capability","Name":"Capability","name_":"capability","name-":"capability","NAME":"CAPABILITY","index$":16}, {"active":true,"entity":"capability","key$":"BasicCapabilityFlow","kind":"basic","name":"BasicCapabilityFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"capability_ref01"},"m":{"account_id":"account01","capability":"capability01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"capability_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"capability_ref01","srcdatavar":"capability_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"capability01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-capability_ref01"}}],"index$":2}]}, 'Capability', {"POST /v1/accounts/{account}/capabilities/{capability}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"requested":{"description":"To request a new capability for an account, pass true. There can be a delay before the requested capability becomes active. If the capability has any activation requirements, the response includes them in the `requirements` arrays.\n\nIf a capability isn't permanent, you can remove it from the account by passing false. Some capabilities are permanent after they've been requested. Attempting to remove a permanent capability returns an error.","type":"boolean"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"in":"path","name":"capability","required":true,"schema":{"type":"string"},"style":"simple","index$":1}]},"GET /v1/accounts/{account}/capabilities":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1}]},"GET /v1/accounts/{account}/capabilities/{capability}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"in":"path","name":"capability","required":true,"schema":{"type":"string"},"style":"simple","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const capability_ref01_ent = client.Capability()
    let capability_ref01_data = setup.data.new.capability['capability_ref01']
    capability_ref01_data['account_id'] = setup.idmap['account01']
    capability_ref01_data['capability'] = setup.idmap['capability01']

    capability_ref01_data = (await capability_ref01_ent.create(capability_ref01_data)).data()
    assert(null != capability_ref01_data.id)


    // LIST
    const capability_ref01_match: any = {}
    capability_ref01_match['account_id'] = setup.idmap['account01']

    const capability_ref01_list = (await capability_ref01_ent.list(capability_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(capability_ref01_list, { id: capability_ref01_data.id })))


    // LOAD
    const capability_ref01_match_dt0: any = {}
    capability_ref01_match_dt0.id = capability_ref01_data.id
    const capability_ref01_data_dt0 = (await capability_ref01_ent.load(capability_ref01_match_dt0)).data()
    assert(capability_ref01_data_dt0.id === capability_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/capability/CapabilityTestData.json')

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
    ['capability01','capability02','capability03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_CAPABILITY_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_CAPABILITY_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_CAPABILITY_ENTID']
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
  
