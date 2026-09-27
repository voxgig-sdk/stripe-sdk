

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


describe('DeletedPersonEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.DeletedPerson()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'deleted_person.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"deleted_person","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/accounts/{account}/people/{person}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"person","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v1/accounts/{account}/people/{person}","q":{"exist":["account_id","id"]},"r":{"param":{"account":"account_id","person":"id"}},"s":[{"lit":"v1"},{"lit":"accounts"},{"var":"account_id"},{"lit":"people"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /v1/accounts/{account}/persons/{person}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"person","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v1/accounts/{account}/persons/{person}","q":{"exist":["account_id","id"]},"r":{"param":{"account":"account_id","person":"id"}},"s":[{"lit":"v1"},{"lit":"accounts"},{"var":"account_id"},{"lit":"persons"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"deleted_person","name__orig":"deleted_person","Name":"DeletedPerson","name_":"deleted_person","name-":"deleted-person","NAME":"DELETED_PERSON","index$":42}, {"active":true,"entity":"deleted_person","key$":"BasicDeletedPersonFlow","kind":"basic","name":"BasicDeletedPersonFlow","param":{},"step":[]}, 'DeletedPerson', {"DELETE /v1/accounts/{account}/people/{person}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"in":"path","name":"person","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]},"DELETE /v1/accounts/{account}/persons/{person}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"in":"path","name":"person","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let deleted_person_ref01_data = Object.values(setup.data.existing.deleted_person)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/deleted_person/DeletedPersonTestData.json')

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
    ['deleted_person01','deleted_person02','deleted_person03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_DELETED_PERSON_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_DELETED_PERSON_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_DELETED_PERSON_ENTID']
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
  
