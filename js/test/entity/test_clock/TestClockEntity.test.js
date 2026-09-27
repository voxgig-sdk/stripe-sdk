
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


describe('TestClockEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.TestClock()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"advancing":{"a":true,"h":"Advancing","n":"advancing","r":true,"t":"`$OBJECT`","key$":"advancing","index$":0},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":1},"deletes_after":{"a":true,"fo":"unix-time","h":"Deletes After","n":"deletes_after","r":true,"sh":"Time at which this clock is scheduled to auto delete.","t":"`$INTEGER`","key$":"deletes_after","index$":2},"frozen_time":{"a":true,"fo":"unix-time","h":"Frozen Time","n":"frozen_time","r":true,"sh":"Time at which all objects belonging to this clock are frozen.","t":"`$INTEGER`","key$":"frozen_time","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":4},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":5},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The custom name supplied at creation.","t":"`$STRING`","key$":"name","index$":6},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":7},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the Test Clock.","t":"`$STRING`","key$":"status","index$":8},"status_details":{"a":true,"h":"Status Details","n":"status_details","r":true,"t":"`$OBJECT`","key$":"status_details","index$":9}},"id":{"field":"id","name":"id"},"name":"test_clock","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/test_helpers/test_clocks/{test_clock}/advance","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"test_clock","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/test_helpers/test_clocks/{test_clock}/advance","q":{"$action":"advance","exist":["id"]},"r":{"param":{"test_clock":"id"}},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"test_clocks"},{"var":"id"},{"lit":"advance"}],"t":{"req":"`reqdata`","res":"`body.status_details`"},"index$":0},{"a":true,"co":{"id":"POST /v1/test_helpers/test_clocks","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/test_helpers/test_clocks","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"test_clocks"}],"t":{"req":"`reqdata`","res":"`body.status_details`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/test_helpers/test_clocks","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/test_helpers/test_clocks","q":{"exist":["ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"test_clocks"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/test_helpers/test_clocks/{test_clock}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"test_clock","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/test_helpers/test_clocks/{test_clock}","q":{"exist":["expand","id"]},"r":{"param":{"test_clock":"id"}},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"test_clocks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.status_details`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/test_helpers/test_clocks/{test_clock}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"test_clock","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/test_helpers/test_clocks/{test_clock}","q":{"exist":["id"]},"r":{"param":{"test_clock":"id"}},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"test_clocks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"test_clock","name__orig":"test_clock","Name":"TestClock","name_":"test_clock","name-":"test-clock","NAME":"TEST_CLOCK","index$":136}, {"active":true,"entity":"test_clock","key$":"BasicTestClockFlow","kind":"basic","name":"BasicTestClockFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"test_clock_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"test_clock_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"test_clock_ref01","srcdatavar":"test_clock_ref01_data","suffix":"_dt0"},"m":{"id":"test_clock01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-test_clock_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"test_clock_ref01","suffix":"_rm0"},"m":{"id":"test_clock01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"test_clock_ref01"}}],"index$":4}]}, 'TestClock', {"POST /v1/test_helpers/test_clocks/{test_clock}/advance":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"frozen_time":{"description":"The time to advance the test clock. Must be after the test clock's current frozen time. Cannot be more than two intervals in the future from the shortest subscription in this test clock. If there are no subscriptions in this test clock, it cannot be more than two years in the future.","format":"unix-time","type":"integer"}},"required":["frozen_time"],"type":"object"}}},"required":true},"parameters":[{"in":"path","name":"test_clock","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/test_helpers/test_clocks":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"customer":{"description":"Existing customer this test clock will be attached to. Once attached, customers can't be removed from a test clock.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"frozen_time":{"description":"The initial frozen time for this test clock.","format":"unix-time","type":"integer"},"name":{"description":"The name for this test clock.","maxLength":300,"type":"string"}},"required":["frozen_time"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/test_helpers/test_clocks":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3}]},"GET /v1/test_helpers/test_clocks/{test_clock}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"test_clock","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]},"DELETE /v1/test_helpers/test_clocks/{test_clock}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"test_clock","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const test_clock_ref01_ent = client.TestClock()
    let test_clock_ref01_data = setup.data.new.test_clock['test_clock_ref01']

    test_clock_ref01_data = (await test_clock_ref01_ent.create(test_clock_ref01_data)).data()
    assert(null != test_clock_ref01_data.id)


    // LIST
    const test_clock_ref01_match = {}

    const test_clock_ref01_list = (await test_clock_ref01_ent.list(test_clock_ref01_match)).map((e) => e.data())

    assert(!isempty(select(test_clock_ref01_list, { id: test_clock_ref01_data.id })))


    // LOAD
    const test_clock_ref01_match_dt0 = {}
    test_clock_ref01_match_dt0.id = test_clock_ref01_data.id
    const test_clock_ref01_data_dt0 = (await test_clock_ref01_ent.load(test_clock_ref01_match_dt0)).data()
    assert(test_clock_ref01_data_dt0.id === test_clock_ref01_data.id)


    // REMOVE
    const test_clock_ref01_match_rm0 = {}
    test_clock_ref01_match_rm0.id = test_clock_ref01_data.id
    await test_clock_ref01_ent.remove(test_clock_ref01_match_rm0)
  

    // LIST
    const test_clock_ref01_match_rt0 = {}

    const test_clock_ref01_list_rt0 = (await test_clock_ref01_ent.list(test_clock_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(test_clock_ref01_list_rt0, { id: test_clock_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/test_clock/TestClockTestData.json')

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
    ['test_clock01','test_clock02','test_clock03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_TEST_CLOCK_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_TEST_CLOCK_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_TEST_CLOCK_ENTID']
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
  
