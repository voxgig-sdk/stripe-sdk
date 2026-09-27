
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


describe('SourceMandateNotificationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.SourceMandateNotification()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"acss_debit":{"a":true,"h":"Acss Debit","n":"acss_debit","r":false,"t":"`$OBJECT`","key$":"acss_debit","index$":0},"amount":{"a":true,"h":"Amount","n":"amount","r":false,"sh":"A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification.","t":"`$INTEGER`","key$":"amount","index$":1},"bacs_debit":{"a":true,"h":"Bacs Debit","n":"bacs_debit","r":false,"t":"`$OBJECT`","key$":"bacs_debit","index$":2},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":4},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":5},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":6},"reason":{"a":true,"h":"Reason","n":"reason","r":true,"sh":"The reason of the mandate notification.","t":"`$STRING`","key$":"reason","index$":7},"sepa_debit":{"a":true,"h":"Sepa Debit","n":"sepa_debit","r":false,"t":"`$OBJECT`","key$":"sepa_debit","index$":8},"source":{"a":true,"h":"Source","n":"source","r":true,"sh":"`Source` objects allow you to accept a variety of payment methods.","t":"`$OBJECT`","key$":"source","index$":9},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the mandate notification.","t":"`$STRING`","key$":"status","index$":10},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of source this mandate notification is attached to.","t":"`$STRING`","key$":"type","index$":11}},"id":{"field":"id","name":"id"},"name":"source_mandate_notification","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/sources/{source}/mandate_notifications/{mandate_notification}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"mandate_notification","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"source_id","or":"source","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/sources/{source}/mandate_notifications/{mandate_notification}","q":{"exist":["expand","id","source_id"]},"r":{"param":{"mandate_notification":"id","source":"source_id"}},"s":[{"lit":"v1"},{"lit":"sources"},{"var":"source_id"},{"lit":"mandate_notifications"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.source"]]},"key$":"source_mandate_notification","name__orig":"source_mandate_notification","Name":"SourceMandateNotification","name_":"source_mandate_notification","name-":"source-mandate-notification","NAME":"SOURCE_MANDATE_NOTIFICATION","index$":127}, {"active":true,"entity":"source_mandate_notification","key$":"BasicSourceMandateNotificationFlow","kind":"basic","name":"BasicSourceMandateNotificationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"source_mandate_notification_ref01","srcdatavar":"source_mandate_notification_ref01_data","suffix":"_dt0"},"m":{"id":"source_mandate_notification01","source_id":"source01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-source_mandate_notification_ref01"}}],"index$":0}]}, 'SourceMandateNotification', {"GET /v1/sources/{source}/mandate_notifications/{mandate_notification}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"mandate_notification","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1},{"in":"path","name":"source","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let source_mandate_notification_ref01_data = Object.values(setup.data.existing.source_mandate_notification)[0]

    // LOAD
    const source_mandate_notification_ref01_ent = client.SourceMandateNotification()
    const source_mandate_notification_ref01_match_dt0 = {}
    source_mandate_notification_ref01_match_dt0.id = source_mandate_notification_ref01_data.id
    const source_mandate_notification_ref01_data_dt0 = (await source_mandate_notification_ref01_ent.load(source_mandate_notification_ref01_match_dt0)).data()
    assert(source_mandate_notification_ref01_data_dt0.id === source_mandate_notification_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/source_mandate_notification/SourceMandateNotificationTestData.json')

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
    ['source_mandate_notification01','source_mandate_notification02','source_mandate_notification03','source01','source02','source03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_SOURCE_MANDATE_NOTIFICATION_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_SOURCE_MANDATE_NOTIFICATION_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_SOURCE_MANDATE_NOTIFICATION_ENTID']
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
  
