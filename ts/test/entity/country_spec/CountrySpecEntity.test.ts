

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


describe('CountrySpecEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.CountrySpec()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'country_spec.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"default_currency":{"a":true,"h":"Default Currency","n":"default_currency","r":true,"sh":"The default currency for this country.","t":"`$STRING`","key$":"default_currency","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":1},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":2},"supported_bank_account_currencies":{"a":true,"h":"Supported Bank Account Currencies","n":"supported_bank_account_currencies","r":true,"sh":"Currencies that can be accepted in the specific country (for transfers).","t":"`$OBJECT`","key$":"supported_bank_account_currencies","index$":3},"supported_payment_currencies":{"a":true,"h":"Supported Payment Currencies","n":"supported_payment_currencies","r":true,"sh":"Currencies that can be accepted in the specified country (for payments).","t":"`$ARRAY`","key$":"supported_payment_currencies","index$":4},"supported_payment_methods":{"a":true,"h":"Supported Payment Methods","n":"supported_payment_methods","r":true,"sh":"Payment methods available in the specified country.","t":"`$ARRAY`","key$":"supported_payment_methods","index$":5},"supported_transfer_countries":{"a":true,"h":"Supported Transfer Countries","n":"supported_transfer_countries","r":true,"sh":"Countries that can accept transfers from the specified country.","t":"`$ARRAY`","key$":"supported_transfer_countries","index$":6},"verification_fields":{"a":true,"h":"Verification Fields","n":"verification_fields","r":true,"t":"`$OBJECT`","key$":"verification_fields","index$":7}},"id":{"field":"id","name":"id"},"name":"country_spec","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/country_specs","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/country_specs","q":{"exist":["ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"country_specs"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/country_specs/{country}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"country","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/country_specs/{country}","q":{"exist":["expand","id"]},"r":{"param":{"country":"id"}},"s":[{"lit":"v1"},{"lit":"country_specs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"country_spec","name__orig":"country_spec","Name":"CountrySpec","name_":"country_spec","name-":"country-spec","NAME":"COUNTRY_SPEC","index$":25}, {"active":true,"entity":"country_spec","key$":"BasicCountrySpecFlow","kind":"basic","name":"BasicCountrySpecFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"country_spec_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"country_spec_ref01","srcdatavar":"country_spec_ref01_data","suffix":"_dt0"},"m":{"id":"country_spec01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-country_spec_ref01"}}],"index$":1}]}, 'CountrySpec', {"GET /v1/country_specs":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3}]},"GET /v1/country_specs/{country}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"country","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let country_spec_ref01_data = Object.values(setup.data.existing.country_spec)[0] as any

    // LIST
    const country_spec_ref01_ent = client.CountrySpec()
    const country_spec_ref01_match: any = {}

    const country_spec_ref01_list = (await country_spec_ref01_ent.list(country_spec_ref01_match)).map((e: any) => e.data())


    // LOAD
    const country_spec_ref01_match_dt0: any = {}
    country_spec_ref01_match_dt0.id = country_spec_ref01_data.id
    const country_spec_ref01_data_dt0 = (await country_spec_ref01_ent.load(country_spec_ref01_match_dt0)).data()
    assert(country_spec_ref01_data_dt0.id === country_spec_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/country_spec/CountrySpecTestData.json')

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
    ['country_spec01','country_spec02','country_spec03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_COUNTRY_SPEC_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_COUNTRY_SPEC_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_COUNTRY_SPEC_ENTID']
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
  
