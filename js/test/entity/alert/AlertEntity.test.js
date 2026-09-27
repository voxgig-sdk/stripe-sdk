
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


describe('AlertEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Alert()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alert_type":{"a":true,"h":"Alert Type","n":"alert_type","r":true,"sh":"Defines the type of the alert.","t":"`$STRING`","key$":"alert_type","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":1},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":2},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":3},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Status of the alert.","t":"`$STRING`","key$":"status","index$":4},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"Title of the alert.","t":"`$STRING`","key$":"title","index$":5},"usage_threshold":{"a":true,"h":"Usage Threshold","n":"usage_threshold","r":false,"sh":"Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://docs.stripe.com/api/billing/meter).","t":"`$ANY`","union":{"branches":17,"count":105012,"depth":64},"key$":"usage_threshold","index$":6}},"id":{"field":"id","name":"id"},"name":"alert","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/billing/alerts/{id}/activate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/billing/alerts/{id}/activate","q":{"$action":"activate","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"alerts"},{"var":"id"},{"lit":"activate"}],"t":{"req":"`reqdata`","res":"`body.usage_threshold`"},"index$":0},{"a":true,"co":{"id":"POST /v1/billing/alerts/{id}/archive","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/billing/alerts/{id}/archive","q":{"$action":"archive","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"alerts"},{"var":"id"},{"lit":"archive"}],"t":{"req":"`reqdata`","res":"`body.usage_threshold`"},"index$":1},{"a":true,"co":{"id":"POST /v1/billing/alerts/{id}/deactivate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/billing/alerts/{id}/deactivate","q":{"$action":"deactivate","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"alerts"},{"var":"id"},{"lit":"deactivate"}],"t":{"req":"`reqdata`","res":"`body.usage_threshold`"},"index$":2},{"a":true,"co":{"id":"POST /v1/billing/alerts","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/billing/alerts","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"alerts"}],"t":{"req":"`reqdata`","res":"`body.usage_threshold`"},"index$":3}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/billing/alerts","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"alert_type","or":"alert_type","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"meter","or":"meter","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/v1/billing/alerts","q":{"exist":["alert_type","ending_before","expand","limit","meter","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"alerts"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/billing/alerts/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/billing/alerts/{id}","q":{"exist":["expand","id"]},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"alerts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.usage_threshold`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"alert","name__orig":"alert","Name":"Alert","name_":"alert","name-":"alert","NAME":"ALERT","index$":5}, {"active":true,"entity":"alert","key$":"BasicAlertFlow","kind":"basic","name":"BasicAlertFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"alert_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"alert_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"alert_ref01","srcdatavar":"alert_ref01_data","suffix":"_dt0"},"m":{"id":"alert01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-alert_ref01"}}],"index$":2}]}, 'Alert', {"POST /v1/billing/alerts/{id}/activate":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/billing/alerts/{id}/archive":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/billing/alerts/{id}/deactivate":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/billing/alerts":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"usage_threshold":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"alert_type":{"description":"The type of alert to create.","enum":["usage_threshold"],"type":"string","x-stripeBypassValidation":true},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"title":{"description":"The title of the alert.","maxLength":256,"type":"string"},"usage_threshold":{"description":"The configuration of the usage threshold.","properties":{"filters":{"items":{"properties":{},"required":[],"title":"usage_alert_filter","type":"object"},"type":"array"},"gte":{"type":"integer"},"meter":{"maxLength":5000,"type":"string"},"recurrence":{"enum":["one_time"],"type":"string","x-stripeBypassValidation":true}},"required":["gte","meter","recurrence"],"title":"usage_threshold_config","type":"object"}},"required":["alert_type","title"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/billing/alerts":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Filter results to only include this type of alert.","in":"query","name":"alert_type","required":false,"schema":{"enum":["usage_threshold"],"type":"string","x-stripeBypassValidation":true},"style":"form","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"Filter results to only include alerts with the given meter.","in":"query","name":"meter","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5}]},"GET /v1/billing/alerts/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const alert_ref01_ent = client.Alert()
    let alert_ref01_data = setup.data.new.alert['alert_ref01']

    alert_ref01_data = (await alert_ref01_ent.create(alert_ref01_data)).data()
    assert(null != alert_ref01_data.id)


    // LIST
    const alert_ref01_match = {}

    const alert_ref01_list = (await alert_ref01_ent.list(alert_ref01_match)).map((e) => e.data())

    assert(!isempty(select(alert_ref01_list, { id: alert_ref01_data.id })))


    // LOAD
    const alert_ref01_match_dt0 = {}
    alert_ref01_match_dt0.id = alert_ref01_data.id
    const alert_ref01_data_dt0 = (await alert_ref01_ent.load(alert_ref01_match_dt0)).data()
    assert(alert_ref01_data_dt0.id === alert_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/alert/AlertTestData.json')

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
    ['alert01','alert02','alert03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_ALERT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_ALERT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_ALERT_ENTID']
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
  
