
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


describe('MandateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Mandate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"customer_acceptance":{"a":true,"h":"Customer Acceptance","n":"customer_acceptance","r":true,"t":"`$OBJECT`","key$":"customer_acceptance","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":1},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":2},"multi_use":{"a":true,"h":"Multi Use","n":"multi_use","r":false,"t":"`$OBJECT`","key$":"multi_use","index$":3},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":4},"on_behalf_of":{"a":true,"h":"On Behalf Of","n":"on_behalf_of","r":false,"sh":"The account (if any) that the mandate is intended for.","t":"`$STRING`","key$":"on_behalf_of","index$":5},"payment_method":{"a":true,"h":"Payment Method","n":"payment_method","r":true,"sh":"ID of the payment method associated with this mandate.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"payment_method","index$":6},"payment_method_details":{"a":true,"h":"Payment Method Details","n":"payment_method_details","r":true,"t":"`$OBJECT`","key$":"payment_method_details","index$":7},"single_use":{"a":true,"h":"Single Use","n":"single_use","r":true,"t":"`$OBJECT`","key$":"single_use","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The mandate status indicates whether or not you can use it to initiate a payment.","t":"`$STRING`","key$":"status","index$":9},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of the mandate.","t":"`$STRING`","key$":"type","index$":10}},"id":{"field":"id","name":"id"},"name":"mandate","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/mandates/{mandate}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"mandate","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/mandates/{mandate}","q":{"exist":["expand","id"]},"r":{"param":{"mandate":"id"}},"s":[{"lit":"v1"},{"lit":"mandates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"mandate","name__orig":"mandate","Name":"Mandate","name_":"mandate","name-":"mandate","NAME":"MANDATE","index$":76}, {"active":true,"entity":"mandate","key$":"BasicMandateFlow","kind":"basic","name":"BasicMandateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"mandate_ref01","srcdatavar":"mandate_ref01_data","suffix":"_dt0"},"m":{"id":"mandate01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-mandate_ref01"}}],"index$":0}]}, 'Mandate', {"GET /v1/mandates/{mandate}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"mandate","required":true,"schema":{"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let mandate_ref01_data = Object.values(setup.data.existing.mandate)[0]

    // LOAD
    const mandate_ref01_ent = client.Mandate()
    const mandate_ref01_match_dt0 = {}
    mandate_ref01_match_dt0.id = mandate_ref01_data.id
    const mandate_ref01_data_dt0 = (await mandate_ref01_ent.load(mandate_ref01_match_dt0)).data()
    assert(mandate_ref01_data_dt0.id === mandate_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/mandate/MandateTestData.json')

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
    ['mandate01','mandate02','mandate03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_MANDATE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_MANDATE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_MANDATE_ENTID']
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
  
