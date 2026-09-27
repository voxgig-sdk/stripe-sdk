

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


describe('ProductFeatureEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.ProductFeature()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'product_feature.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":true,"sh":"Inactive features cannot be attached to new products and will not be returned from the features list endpoint.","t":"`$BOOLEAN`","key$":"active","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":1},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":2},"lookup_key":{"a":true,"h":"Lookup Key","n":"lookup_key","r":true,"sh":"A unique key you provide as your own system identifier.","t":"`$STRING`","key$":"lookup_key","index$":3},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of key-value pairs that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The feature's name, for your own purpose, not meant to be displayable to the customer.","t":"`$STRING`","key$":"name","index$":5},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":6}},"id":{"field":"id","name":"id"},"name":"product_feature","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/products/{product}/features","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"product","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/products/{product}/features","q":{"exist":["id"]},"r":{"param":{"product":"id"}},"s":[{"lit":"v1"},{"lit":"products"},{"var":"id"},{"lit":"features"}],"t":{"req":"`reqdata`","res":"`body.entitlement_feature`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/products/{product}/features/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"product_id","or":"product","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/products/{product}/features/{id}","q":{"exist":["expand","id","product_id"]},"r":{"param":{"product":"product_id"}},"s":[{"lit":"v1"},{"lit":"products"},{"var":"product_id"},{"lit":"features"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.entitlement_feature`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.product"]]},"key$":"product_feature","name__orig":"product_feature","Name":"ProductFeature","name_":"product_feature","name-":"product-feature","NAME":"PRODUCT_FEATURE","index$":101}, {"active":true,"entity":"product_feature","key$":"BasicProductFeatureFlow","kind":"basic","name":"BasicProductFeatureFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"product_feature_ref01"},"m":{"product":"product01","product_id":"product01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"product_feature_ref01","srcdatavar":"product_feature_ref01_data","suffix":"_dt0"},"m":{"id":"product_feature01","product_id":"product01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-product_feature_ref01"}}],"index$":1}]}, 'ProductFeature', {"POST /v1/products/{product}/features":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"entitlement_feature":{"description":"The ID of the [Feature](https://docs.stripe.com/api/entitlements/feature) object attached to this product.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"required":["entitlement_feature"],"type":"object"}}},"required":true},"parameters":[{"in":"path","name":"product","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"GET /v1/products/{product}/features/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"description":"The ID of the product_feature.","in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1},{"description":"The ID of the product.","in":"path","name":"product","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const product_feature_ref01_ent = client.ProductFeature()
    let product_feature_ref01_data = setup.data.new.product_feature['product_feature_ref01']
    product_feature_ref01_data['product'] = setup.idmap['product01']
    product_feature_ref01_data['product_id'] = setup.idmap['product01']

    product_feature_ref01_data = (await product_feature_ref01_ent.create(product_feature_ref01_data)).data()
    assert(null != product_feature_ref01_data.id)


    // LOAD
    const product_feature_ref01_match_dt0: any = {}
    product_feature_ref01_match_dt0.id = product_feature_ref01_data.id
    const product_feature_ref01_data_dt0 = (await product_feature_ref01_ent.load(product_feature_ref01_match_dt0)).data()
    assert(product_feature_ref01_data_dt0.id === product_feature_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/product_feature/ProductFeatureTestData.json')

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
    ['product_feature01','product_feature02','product_feature03','product01','product02','product03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_PRODUCT_FEATURE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_PRODUCT_FEATURE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_PRODUCT_FEATURE_ENTID']
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
  
