

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


describe('PersonalizationDesignEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.PersonalizationDesign()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'personalization_design.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"card_logo":{"a":true,"h":"Card Logo","n":"card_logo","r":false,"sh":"The file for the card logo to use with physical bundles that support card logos.","t":"`$ANY`","union":{"branches":2,"count":3,"depth":10},"key$":"card_logo","index$":0},"carrier_text":{"a":true,"h":"Carrier Text","n":"carrier_text","r":false,"sh":"Hash containing carrier text, for use with physical bundles that support carrier text.","t":"`$ANY`","key$":"carrier_text","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":3},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":4},"lookup_key":{"a":true,"h":"Lookup Key","n":"lookup_key","r":false,"sh":"A lookup key used to retrieve personalization designs dynamically from a static string.","t":"`$STRING`","key$":"lookup_key","index$":5},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":6},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Friendly display name.","t":"`$STRING`","key$":"name","index$":7},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":8},"physical_bundle":{"a":true,"h":"Physical Bundle","n":"physical_bundle","r":true,"sh":"The physical bundle object belonging to this personalization design.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"physical_bundle","index$":9},"preferences":{"a":true,"h":"Preferences","n":"preferences","r":true,"t":"`$OBJECT`","key$":"preferences","index$":10},"rejection_reasons":{"a":true,"h":"Rejection Reasons","n":"rejection_reasons","r":true,"t":"`$OBJECT`","key$":"rejection_reasons","index$":11},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Whether this personalization design can be used to create cards.","t":"`$STRING`","key$":"status","index$":12}},"id":{"field":"id","name":"id"},"name":"personalization_design","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/issuing/personalization_designs/{personalization_design}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"personalization_design","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/issuing/personalization_designs/{personalization_design}","q":{"exist":["id"]},"r":{"param":{"personalization_design":"id"}},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"personalization_designs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"personalization_design","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate","q":{"$action":"activate","exist":["id"]},"r":{"param":{"personalization_design":"id"}},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"issuing"},{"lit":"personalization_designs"},{"var":"id"},{"lit":"activate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"personalization_design","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate","q":{"$action":"deactivate","exist":["id"]},"r":{"param":{"personalization_design":"id"}},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"issuing"},{"lit":"personalization_designs"},{"var":"id"},{"lit":"deactivate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"personalization_design","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject","q":{"$action":"reject","exist":["id"]},"r":{"param":{"personalization_design":"id"}},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"issuing"},{"lit":"personalization_designs"},{"var":"id"},{"lit":"reject"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /v1/issuing/personalization_designs","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/issuing/personalization_designs","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"personalization_designs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/issuing/personalization_designs","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"lookup_key","or":"lookup_key","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"preference","or":"preference","r":false,"t":"`$OBJECT`","index$":4},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/v1/issuing/personalization_designs","q":{"exist":["ending_before","expand","limit","lookup_key","preference","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"personalization_designs"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/issuing/personalization_designs/{personalization_design}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"personalization_design","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/issuing/personalization_designs/{personalization_design}","q":{"exist":["expand","id"]},"r":{"param":{"personalization_design":"id"}},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"personalization_designs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"personalization_design","name__orig":"personalization_design","Name":"PersonalizationDesign","name_":"personalization_design","name-":"personalization-design","NAME":"PERSONALIZATION_DESIGN","index$":96}, {"active":true,"entity":"personalization_design","key$":"BasicPersonalizationDesignFlow","kind":"basic","name":"BasicPersonalizationDesignFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"personalization_design_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"personalization_design_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"personalization_design_ref01","srcdatavar":"personalization_design_ref01_data","suffix":"_dt0"},"m":{"id":"personalization_design01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-personalization_design_ref01"}}],"index$":2}]}, 'PersonalizationDesign', {"POST /v1/issuing/personalization_designs/{personalization_design}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"card_logo":{"explode":true,"style":"deepObject"},"carrier_text":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"lookup_key":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"name":{"explode":true,"style":"deepObject"},"preferences":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"card_logo":{"anyOf":[{"type":"string"},{"enum":[""],"type":"string"}],"description":"The file for the card logo, for use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`."},"carrier_text":{"anyOf":[{"properties":{"footer_body":{},"footer_title":{},"header_body":{},"header_title":{}},"title":"carrier_text_param","type":"object"},{"enum":[""],"type":"string"}],"description":"Hash containing carrier text, for use with physical bundles that support carrier text."},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"lookup_key":{"anyOf":[{"maxLength":200,"type":"string"},{"enum":[""],"type":"string"}],"description":"A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters."},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"name":{"anyOf":[{"maxLength":200,"type":"string"},{"enum":[""],"type":"string"}],"description":"Friendly display name. Providing an empty string will set the field to null."},"physical_bundle":{"description":"The physical bundle object belonging to this personalization design.","maxLength":5000,"type":"string"},"preferences":{"description":"Information on whether this personalization design is used to create cards when one is not specified.","properties":{"is_default":{"type":"boolean"}},"required":["is_default"],"title":"preferences_param","type":"object"},"transfer_lookup_key":{"description":"If set to true, will atomically remove the lookup key from the existing personalization design, and assign it to this personalization design.","type":"boolean"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"personalization_design","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"personalization_design","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"personalization_design","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"rejection_reasons":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"rejection_reasons":{"description":"The reason(s) the personalization design was rejected.","properties":{"card_logo":{"items":{"enum":[],"type":"string"},"type":"array"},"carrier_text":{"items":{"enum":[],"type":"string"},"type":"array"}},"title":"rejection_reasons_param","type":"object"}},"required":["rejection_reasons"],"type":"object"}}},"required":true},"parameters":[{"in":"path","name":"personalization_design","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/issuing/personalization_designs":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"carrier_text":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"preferences":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"card_logo":{"description":"The file for the card logo, for use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.","type":"string"},"carrier_text":{"description":"Hash containing carrier text, for use with physical bundles that support carrier text.","properties":{"footer_body":{"anyOf":[{},{}]},"footer_title":{"anyOf":[{},{}]},"header_body":{"anyOf":[{},{}]},"header_title":{"anyOf":[{},{}]}},"title":"carrier_text_param","type":"object"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"lookup_key":{"description":"A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.","maxLength":200,"type":"string"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"name":{"description":"Friendly display name.","maxLength":200,"type":"string"},"physical_bundle":{"description":"The physical bundle object belonging to this personalization design.","maxLength":5000,"type":"string"},"preferences":{"description":"Information on whether this personalization design is used to create cards when one is not specified.","properties":{"is_default":{"type":"boolean"}},"required":["is_default"],"title":"preferences_param","type":"object"},"transfer_lookup_key":{"description":"If set to true, will atomically remove the lookup key from the existing personalization design, and assign it to this personalization design.","type":"boolean"}},"required":["physical_bundle"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/issuing/personalization_designs":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"Only return personalization designs with the given lookup keys.","explode":true,"in":"query","name":"lookup_keys","required":false,"schema":{"items":{"maxLength":200,"type":"string"},"type":"array"},"style":"deepObject","index$":3},{"description":"Only return personalization designs with the given preferences.","explode":true,"in":"query","name":"preferences","required":false,"schema":{"properties":{"is_default":{"type":"boolean"},"is_platform_default":{"type":"boolean"}},"title":"preferences_list_param","type":"object"},"style":"deepObject","index$":4},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5},{"description":"Only return personalization designs with the given status.","in":"query","name":"status","required":false,"schema":{"enum":["active","inactive","rejected","review"],"type":"string"},"style":"form","index$":6}]},"GET /v1/issuing/personalization_designs/{personalization_design}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"personalization_design","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const personalization_design_ref01_ent = client.PersonalizationDesign()
    let personalization_design_ref01_data = setup.data.new.personalization_design['personalization_design_ref01']

    personalization_design_ref01_data = (await personalization_design_ref01_ent.create(personalization_design_ref01_data)).data()
    assert(null != personalization_design_ref01_data.id)


    // LIST
    const personalization_design_ref01_match: any = {}

    const personalization_design_ref01_list = (await personalization_design_ref01_ent.list(personalization_design_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(personalization_design_ref01_list, { id: personalization_design_ref01_data.id })))


    // LOAD
    const personalization_design_ref01_match_dt0: any = {}
    personalization_design_ref01_match_dt0.id = personalization_design_ref01_data.id
    const personalization_design_ref01_data_dt0 = (await personalization_design_ref01_ent.load(personalization_design_ref01_match_dt0)).data()
    assert(personalization_design_ref01_data_dt0.id === personalization_design_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/personalization_design/PersonalizationDesignTestData.json')

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
    ['personalization_design01','personalization_design02','personalization_design03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_PERSONALIZATION_DESIGN_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_PERSONALIZATION_DESIGN_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_PERSONALIZATION_DESIGN_ENTID']
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
  
