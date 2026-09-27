

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


describe('ValueListItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.ValueListItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'value_list_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":0},"created_by":{"a":true,"h":"Created By","n":"created_by","r":true,"sh":"The name or email address of the user who added this item to the value list.","t":"`$STRING`","key$":"created_by","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":2},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":3},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":4},"value":{"a":true,"h":"Value","n":"value","r":true,"sh":"The value of the item.","t":"`$STRING`","key$":"value","index$":5},"value_list":{"a":true,"h":"Value List","n":"value_list","r":true,"sh":"The identifier of the value list this item belongs to.","t":"`$STRING`","key$":"value_list","index$":6}},"id":{"field":"id","name":"id"},"name":"value_list_item","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/radar/value_list_items","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/radar/value_list_items","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"radar"},{"lit":"value_list_items"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/radar/value_list_items","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"value","or":"value","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"value_list","or":"value_list","r":true,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/v1/radar/value_list_items","q":{"exist":["created","ending_before","expand","limit","starting_after","value","value_list"]},"r":{},"s":[{"lit":"v1"},{"lit":"radar"},{"lit":"value_list_items"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/radar/value_list_items/{item}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"item","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/radar/value_list_items/{item}","q":{"exist":["expand","id"]},"r":{"param":{"item":"id"}},"s":[{"lit":"v1"},{"lit":"radar"},{"lit":"value_list_items"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/radar/value_list_items/{item}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"item","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/radar/value_list_items/{item}","q":{"exist":["id"]},"r":{"param":{"item":"id"}},"s":[{"lit":"v1"},{"lit":"radar"},{"lit":"value_list_items"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"value_list_item","name__orig":"value_list_item","Name":"ValueListItem","name_":"value_list_item","name-":"value-list-item","NAME":"VALUE_LIST_ITEM","index$":144}, {"active":true,"entity":"value_list_item","key$":"BasicValueListItemFlow","kind":"basic","name":"BasicValueListItemFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"value_list_item_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"value_list_item_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"value_list_item_ref01","srcdatavar":"value_list_item_ref01_data","suffix":"_dt0"},"m":{"id":"value_list_item01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-value_list_item_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"value_list_item_ref01","suffix":"_rm0"},"m":{"id":"value_list_item01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"value_list_item_ref01"}}],"index$":4}]}, 'ValueListItem', {"POST /v1/radar/value_list_items":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"value":{"description":"The value of the item (whose type must match the type of the parent value list).","maxLength":800,"type":"string"},"value_list":{"description":"The identifier of the value list which the created item will be added to.","maxLength":5000,"type":"string"}},"required":["value","value_list"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/radar/value_list_items":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return items that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4},{"description":"Return items belonging to the parent list whose value matches the specified value (using an \"is like\" match).","in":"query","name":"value","required":false,"schema":{"maxLength":800,"type":"string"},"style":"form","index$":5},{"description":"Identifier for the parent value list this item belongs to.","in":"query","name":"value_list","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6}]},"GET /v1/radar/value_list_items/{item}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"item","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]},"DELETE /v1/radar/value_list_items/{item}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"item","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const value_list_item_ref01_ent = client.ValueListItem()
    let value_list_item_ref01_data = setup.data.new.value_list_item['value_list_item_ref01']

    value_list_item_ref01_data = (await value_list_item_ref01_ent.create(value_list_item_ref01_data)).data()
    assert(null != value_list_item_ref01_data.id)


    // LIST
    const value_list_item_ref01_match: any = {}

    const value_list_item_ref01_list = (await value_list_item_ref01_ent.list(value_list_item_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(value_list_item_ref01_list, { id: value_list_item_ref01_data.id })))


    // LOAD
    const value_list_item_ref01_match_dt0: any = {}
    value_list_item_ref01_match_dt0.id = value_list_item_ref01_data.id
    const value_list_item_ref01_data_dt0 = (await value_list_item_ref01_ent.load(value_list_item_ref01_match_dt0)).data()
    assert(value_list_item_ref01_data_dt0.id === value_list_item_ref01_data.id)


    // REMOVE
    const value_list_item_ref01_match_rm0: any = { id: value_list_item_ref01_data.id }
    await value_list_item_ref01_ent.remove(value_list_item_ref01_match_rm0)
  

    // LIST
    const value_list_item_ref01_match_rt0: any = {}

    const value_list_item_ref01_list_rt0 = (await value_list_item_ref01_ent.list(value_list_item_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(value_list_item_ref01_list_rt0, { id: value_list_item_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/value_list_item/ValueListItemTestData.json')

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
    ['value_list_item01','value_list_item02','value_list_item03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_VALUE_LIST_ITEM_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_VALUE_LIST_ITEM_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_VALUE_LIST_ITEM_ENTID']
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
  
