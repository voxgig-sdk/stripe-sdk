

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


describe('SettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Setting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"defaults":{"a":true,"h":"Defaults","n":"defaults","r":true,"t":"`$OBJECT`","key$":"defaults","index$":0},"head_office":{"a":true,"h":"Head Office","n":"head_office","r":false,"sh":"The place where your business is located.","t":"`$ANY`","key$":"head_office","index$":1},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":2},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":3},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the Tax `Settings`.","t":"`$STRING`","key$":"status","index$":4},"status_details":{"a":true,"h":"Status Details","n":"status_details","r":true,"t":"`$OBJECT`","key$":"status_details","index$":5}},"name":"setting","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/tax/settings","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/tax/settings","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"tax"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/tax/settings","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/tax/settings","q":{"exist":["expand"]},"r":{},"s":[{"lit":"v1"},{"lit":"tax"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"setting","name__orig":"setting","Name":"Setting","name_":"setting","name-":"setting","NAME":"SETTING","index$":120}, {"active":true,"entity":"setting","key$":"BasicSettingFlow","kind":"basic","name":"BasicSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"setting_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"setting_ref01","srcdatavar":"setting_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-setting_ref01"}}],"index$":1}]}, 'Setting', {"POST /v1/tax/settings":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"defaults":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"head_office":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"defaults":{"description":"Default configuration to be used on Stripe Tax calculations.","properties":{"tax_behavior":{"enum":["exclusive","inclusive","inferred_by_currency"],"type":"string"},"tax_code":{"type":"string"}},"title":"defaults_param","type":"object"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"head_office":{"description":"The place where your business is located.","properties":{"address":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{}},"title":"validated_country_address","type":"object"}},"required":["address"],"title":"head_office_param","type":"object"}},"type":"object"}}},"required":false},"parameters":[]},"GET /v1/tax/settings":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const setting_ref01_ent = client.Setting()
    let setting_ref01_data = setup.data.new.setting['setting_ref01']

    setting_ref01_data = (await setting_ref01_ent.create(setting_ref01_data)).data()
    assert(null != setting_ref01_data)


    // LOAD
    const setting_ref01_match_dt0: any = {}
    const setting_ref01_data_dt0 = (await setting_ref01_ent.load(setting_ref01_match_dt0)).data()
    assert(null != setting_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/setting/SettingTestData.json')

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
    ['setting01','setting02','setting03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_SETTING_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_SETTING_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_SETTING_ENTID']
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
  
