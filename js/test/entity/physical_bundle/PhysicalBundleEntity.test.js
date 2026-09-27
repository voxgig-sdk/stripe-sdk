
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { StripeSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('PhysicalBundleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.PhysicalBundle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"card_logo":{"a":true,"h":"Card Logo","n":"card_logo","r":true,"sh":"The policy for how to use card logo images in a card design with this physical bundle.","t":"`$STRING`","key$":"card_logo","index$":0},"carrier_text":{"a":true,"h":"Carrier Text","n":"carrier_text","r":true,"sh":"The policy for how to use carrier letter text in a card design with this physical bundle.","t":"`$STRING`","key$":"carrier_text","index$":1},"features":{"a":true,"h":"Features","n":"features","r":true,"t":"`$OBJECT`","key$":"features","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":3},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Friendly display name.","t":"`$STRING`","key$":"name","index$":5},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":6},"second_line":{"a":true,"h":"Second Line","n":"second_line","r":true,"sh":"The policy for how to use a second line on a card with this physical bundle.","t":"`$STRING`","key$":"second_line","index$":7},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Whether this physical bundle can be used to create cards.","t":"`$STRING`","key$":"status","index$":8},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Whether this physical bundle is a standard Stripe offering or custom-made for you.","t":"`$STRING`","key$":"type","index$":9}},"id":{"field":"id","name":"id"},"name":"physical_bundle","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/issuing/physical_bundles","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/v1/issuing/physical_bundles","q":{"exist":["ending_before","expand","limit","starting_after","status","type"]},"r":{},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"physical_bundles"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/issuing/physical_bundles/{physical_bundle}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"physical_bundle","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/issuing/physical_bundles/{physical_bundle}","q":{"exist":["expand","id"]},"r":{"param":{"physical_bundle":"id"}},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"physical_bundles"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.features`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"physical_bundle","name__orig":"physical_bundle","Name":"PhysicalBundle","name_":"physical_bundle","name-":"physical-bundle","NAME":"PHYSICAL_BUNDLE","index$":97}, {"active":true,"entity":"physical_bundle","key$":"BasicPhysicalBundleFlow","kind":"basic","name":"BasicPhysicalBundleFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"physical_bundle_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"physical_bundle_ref01","srcdatavar":"physical_bundle_ref01_data","suffix":"_dt0"},"m":{"id":"physical_bundle01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-physical_bundle_ref01"}}],"index$":1}]}, 'PhysicalBundle', {"GET /v1/issuing/physical_bundles":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3},{"description":"Only return physical bundles with the given status.","in":"query","name":"status","required":false,"schema":{"enum":["active","inactive","review"],"type":"string"},"style":"form","index$":4},{"description":"Only return physical bundles with the given type.","in":"query","name":"type","required":false,"schema":{"enum":["custom","standard"],"type":"string"},"style":"form","index$":5}]},"GET /v1/issuing/physical_bundles/{physical_bundle}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"physical_bundle","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let physical_bundle_ref01_data = Object.values(setup.data.existing.physical_bundle)[0]

    // LIST
    const physical_bundle_ref01_ent = client.PhysicalBundle()
    const physical_bundle_ref01_match = {}

    const physical_bundle_ref01_list = (await physical_bundle_ref01_ent.list(physical_bundle_ref01_match)).map((e) => e.data())


    // LOAD
    const physical_bundle_ref01_match_dt0 = {}
    physical_bundle_ref01_match_dt0.id = physical_bundle_ref01_data.id
    const physical_bundle_ref01_data_dt0 = (await physical_bundle_ref01_ent.load(physical_bundle_ref01_match_dt0)).data()
    assert(physical_bundle_ref01_data_dt0.id === physical_bundle_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/physical_bundle/PhysicalBundleTestData.json')

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
    ['physical_bundle01','physical_bundle02','physical_bundle03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_PHYSICAL_BUNDLE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_PHYSICAL_BUNDLE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_PHYSICAL_BUNDLE_ENTID']
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
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  
