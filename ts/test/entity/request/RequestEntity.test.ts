

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


describe('RequestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Request()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'request.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":1},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":2},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":3},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":4},"payment_method":{"a":true,"h":"Payment Method","n":"payment_method","r":true,"sh":"The PaymentMethod to insert into the forwarded request.","t":"`$STRING`","key$":"payment_method","index$":5},"replacements":{"a":true,"h":"Replacements","n":"replacements","r":true,"sh":"The field kinds to be replaced in the forwarded request.","t":"`$ARRAY`","key$":"replacements","index$":6},"request_context":{"a":true,"h":"Request Context","n":"request_context","r":false,"sh":"Context about the request from Stripe's servers to the destination endpoint.","t":"`$ANY`","key$":"request_context","index$":7},"request_details":{"a":true,"h":"Request Details","n":"request_details","r":false,"sh":"The request that was sent to the destination endpoint.","t":"`$ANY`","key$":"request_details","index$":8},"response_details":{"a":true,"h":"Response Details","n":"response_details","r":false,"sh":"The response that the destination endpoint returned to us.","t":"`$ANY`","key$":"response_details","index$":9},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"The destination URL for the forwarded request.","t":"`$STRING`","key$":"url","index$":10}},"id":{"field":"id","name":"id"},"name":"request","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/forwarding/requests","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/forwarding/requests","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"forwarding"},{"lit":"requests"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/forwarding/requests","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$OBJECT`","index$":0},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v1/forwarding/requests","q":{"exist":["created","ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"forwarding"},{"lit":"requests"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/forwarding/requests/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/forwarding/requests/{id}","q":{"exist":["expand","id"]},"r":{},"s":[{"lit":"v1"},{"lit":"forwarding"},{"lit":"requests"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"request","name__orig":"request","Name":"Request","name_":"request","name-":"request","NAME":"REQUEST","index$":113}, {"active":true,"entity":"request","key$":"BasicRequestFlow","kind":"basic","name":"BasicRequestFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"request_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"request_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"request_ref01","srcdatavar":"request_ref01_data","suffix":"_dt0"},"m":{"id":"request01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-request_ref01"}}],"index$":2}]}, 'Request', {"POST /v1/forwarding/requests":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"replacements":{"explode":true,"style":"deepObject"},"request":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"payment_method":{"description":"The PaymentMethod to insert into the forwarded request. Forwarding previously consumed PaymentMethods is allowed.","maxLength":5000,"type":"string"},"replacements":{"description":"The field kinds to be replaced in the forwarded request.","items":{"enum":["card_cvc","card_expiry","card_number","cardholder_name","request_signature"],"type":"string","x-stripeBypassValidation":true},"type":"array"},"request":{"description":"The request body and headers to be sent to the destination endpoint.","properties":{"body":{"maxLength":5000,"type":"string"},"headers":{"items":{"properties":{},"required":[],"title":"header_param","type":"object"},"type":"array"}},"title":"request_param","type":"object"},"url":{"description":"The destination URL for the forwarded request. Must be supported by the config.","maxLength":5000,"type":"string"}},"required":["payment_method","replacements","url"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/forwarding/requests":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Similar to other List endpoints, filters results based on created timestamp. You can pass gt, gte, lt, and lte timestamp values.","explode":true,"in":"query","name":"created","required":false,"schema":{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"created_param","type":"object"},"style":"deepObject","index$":0},{"description":"A pagination cursor to fetch the previous page of the list. The value must be a ForwardingRequest ID.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"A pagination cursor to fetch the next page of the list. The value must be a ForwardingRequest ID.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4}]},"GET /v1/forwarding/requests/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const request_ref01_ent = client.Request()
    let request_ref01_data = setup.data.new.request['request_ref01']

    request_ref01_data = (await request_ref01_ent.create(request_ref01_data)).data()
    assert(null != request_ref01_data.id)


    // LIST
    const request_ref01_match: any = {}

    const request_ref01_list = (await request_ref01_ent.list(request_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(request_ref01_list, { id: request_ref01_data.id })))


    // LOAD
    const request_ref01_match_dt0: any = {}
    request_ref01_match_dt0.id = request_ref01_data.id
    const request_ref01_data_dt0 = (await request_ref01_ent.load(request_ref01_match_dt0)).data()
    assert(request_ref01_data_dt0.id === request_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/request/RequestTestData.json')

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
    ['request01','request02','request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_REQUEST_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_REQUEST_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_REQUEST_ENTID']
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
  
