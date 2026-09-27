
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


describe('SupplierEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Supplier()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":0},"info_url":{"a":true,"h":"Info Url","n":"info_url","r":true,"sh":"Link to a webpage to learn more about the supplier.","t":"`$STRING`","key$":"info_url","index$":1},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.","t":"`$BOOLEAN`","key$":"livemode","index$":2},"locations":{"a":true,"h":"Locations","n":"locations","r":true,"sh":"The locations in which this supplier operates.","t":"`$ARRAY`","key$":"locations","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of this carbon removal supplier.","t":"`$STRING`","key$":"name","index$":4},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object’s type.","t":"`$STRING`","key$":"object","index$":5},"removal_pathway":{"a":true,"h":"Removal Pathway","n":"removal_pathway","r":true,"sh":"The scientific pathway used for carbon removal.","t":"`$STRING`","key$":"removal_pathway","index$":6}},"id":{"field":"id","name":"id"},"name":"supplier","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/climate/suppliers","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/climate/suppliers","q":{"exist":["ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"climate"},{"lit":"suppliers"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/climate/suppliers/{supplier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"supplier","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/climate/suppliers/{supplier}","q":{"exist":["expand","id"]},"r":{"param":{"supplier":"id"}},"s":[{"lit":"v1"},{"lit":"climate"},{"lit":"suppliers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"supplier","name__orig":"supplier","Name":"Supplier","name_":"supplier","name-":"supplier","NAME":"SUPPLIER","index$":132}, {"active":true,"entity":"supplier","key$":"BasicSupplierFlow","kind":"basic","name":"BasicSupplierFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"supplier_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"supplier_ref01","srcdatavar":"supplier_ref01_data","suffix":"_dt0"},"m":{"id":"supplier01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-supplier_ref01"}}],"index$":1}]}, 'Supplier', {"GET /v1/climate/suppliers":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3}]},"GET /v1/climate/suppliers/{supplier}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"supplier","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let supplier_ref01_data = Object.values(setup.data.existing.supplier)[0]

    // LIST
    const supplier_ref01_ent = client.Supplier()
    const supplier_ref01_match = {}

    const supplier_ref01_list = (await supplier_ref01_ent.list(supplier_ref01_match)).map((e) => e.data())


    // LOAD
    const supplier_ref01_match_dt0 = {}
    supplier_ref01_match_dt0.id = supplier_ref01_data.id
    const supplier_ref01_data_dt0 = (await supplier_ref01_ent.load(supplier_ref01_match_dt0)).data()
    assert(supplier_ref01_data_dt0.id === supplier_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/supplier/SupplierTestData.json')

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
    ['supplier01','supplier02','supplier03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_SUPPLIER_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_SUPPLIER_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_SUPPLIER_ENTID']
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
  
