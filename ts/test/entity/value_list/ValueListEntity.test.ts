

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


describe('ValueListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.ValueList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'value_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alias":{"a":true,"h":"Alias","n":"alias","r":true,"sh":"The name of the value list for use in rules.","t":"`$STRING`","key$":"alias","index$":0},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":1},"created_by":{"a":true,"h":"Created By","n":"created_by","r":true,"sh":"The name or email address of the user who created this value list.","t":"`$STRING`","key$":"created_by","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":3},"item_type":{"a":true,"h":"Item Type","n":"item_type","r":true,"sh":"The type of items in the value list.","t":"`$STRING`","key$":"item_type","index$":4},"list_items":{"a":true,"h":"List Items","n":"list_items","r":true,"sh":"List of items contained within this value list.","t":"`$OBJECT`","key$":"list_items","index$":5},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":6},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":7},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the value list.","t":"`$STRING`","key$":"name","index$":8},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":9}},"id":{"field":"id","name":"id"},"name":"value_list","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/radar/value_lists/{value_list}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"value_list","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/radar/value_lists/{value_list}","q":{"exist":["id"]},"r":{"param":{"value_list":"id"}},"s":[{"lit":"v1"},{"lit":"radar"},{"lit":"value_lists"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/radar/value_lists","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/radar/value_lists","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"radar"},{"lit":"value_lists"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/radar/value_lists","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"alia","or":"alia","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"contain","or":"contain","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/v1/radar/value_lists","q":{"exist":["alia","contain","created","ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"radar"},{"lit":"value_lists"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/radar/value_lists/{value_list}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"value_list","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/radar/value_lists/{value_list}","q":{"exist":["expand","id"]},"r":{"param":{"value_list":"id"}},"s":[{"lit":"v1"},{"lit":"radar"},{"lit":"value_lists"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/radar/value_lists/{value_list}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"value_list","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/radar/value_lists/{value_list}","q":{"exist":["id"]},"r":{"param":{"value_list":"id"}},"s":[{"lit":"v1"},{"lit":"radar"},{"lit":"value_lists"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"value_list","name__orig":"value_list","Name":"ValueList","name_":"value_list","name-":"value-list","NAME":"VALUE_LIST","index$":143}, {"active":true,"entity":"value_list","key$":"BasicValueListFlow","kind":"basic","name":"BasicValueListFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"value_list_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"value_list_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"value_list_ref01","srcdatavar":"value_list_ref01_data","suffix":"_dt0"},"m":{"id":"value_list01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-value_list_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"value_list_ref01","suffix":"_rm0"},"m":{"id":"value_list01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"value_list_ref01"}}],"index$":4}]}, 'ValueList', {"POST /v1/radar/value_lists/{value_list}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"alias":{"description":"The name of the value list for use in rules.","maxLength":100,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"name":{"description":"The human-readable name of the value list.","maxLength":100,"type":"string"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"value_list","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/radar/value_lists":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"alias":{"description":"The name of the value list for use in rules.","maxLength":100,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"item_type":{"description":"Type of the items in the value list. One of `card_fingerprint`, `card_bin`, `crypto_fingerprint`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, `customer_id`, `account`, `sepa_debit_fingerprint`, or `us_bank_account_fingerprint`. Use `string` if the item type is unknown or mixed.","enum":["account","card_bin","card_fingerprint","case_sensitive_string","country","crypto_fingerprint","customer_id","email","ip_address","sepa_debit_fingerprint","string","us_bank_account_fingerprint"],"maxLength":5000,"type":"string"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"name":{"description":"The human-readable name of the value list.","maxLength":100,"type":"string"}},"required":["alias","name"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/radar/value_lists":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"The alias used to reference the value list when writing rules.","in":"query","name":"alias","required":false,"schema":{"maxLength":100,"type":"string"},"style":"form","index$":0},{"description":"A value contained within a value list - returns all value lists containing this value.","in":"query","name":"contains","required":false,"schema":{"maxLength":800,"type":"string"},"style":"form","index$":1},{"description":"Only return value lists that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":2},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":4},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":5},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6}]},"GET /v1/radar/value_lists/{value_list}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"value_list","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]},"DELETE /v1/radar/value_lists/{value_list}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"value_list","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const value_list_ref01_ent = client.ValueList()
    let value_list_ref01_data = setup.data.new.value_list['value_list_ref01']

    value_list_ref01_data = (await value_list_ref01_ent.create(value_list_ref01_data)).data()
    assert(null != value_list_ref01_data.id)


    // LIST
    const value_list_ref01_match: any = {}

    const value_list_ref01_list = (await value_list_ref01_ent.list(value_list_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(value_list_ref01_list, { id: value_list_ref01_data.id })))


    // LOAD
    const value_list_ref01_match_dt0: any = {}
    value_list_ref01_match_dt0.id = value_list_ref01_data.id
    const value_list_ref01_data_dt0 = (await value_list_ref01_ent.load(value_list_ref01_match_dt0)).data()
    assert(value_list_ref01_data_dt0.id === value_list_ref01_data.id)


    // REMOVE
    const value_list_ref01_match_rm0: any = { id: value_list_ref01_data.id }
    await value_list_ref01_ent.remove(value_list_ref01_match_rm0)
  

    // LIST
    const value_list_ref01_match_rt0: any = {}

    const value_list_ref01_list_rt0 = (await value_list_ref01_ent.list(value_list_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(value_list_ref01_list_rt0, { id: value_list_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/value_list/ValueListTestData.json')

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
    ['value_list01','value_list02','value_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_VALUE_LIST_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_VALUE_LIST_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_VALUE_LIST_ENTID']
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
  
