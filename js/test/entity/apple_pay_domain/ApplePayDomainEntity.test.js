
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


describe('ApplePayDomainEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.ApplePayDomain()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":0},"domain_name":{"a":true,"h":"Domain Name","n":"domain_name","r":true,"t":"`$STRING`","key$":"domain_name","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":2},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":3},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":4}},"id":{"field":"id","name":"id"},"name":"apple_pay_domain","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/apple_pay/domains","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/apple_pay/domains","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"apple_pay"},{"lit":"domains"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/apple_pay/domains/{domain}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"domain","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/apple_pay/domains/{domain}","q":{"exist":["expand","id"]},"r":{"param":{"domain":"id"}},"s":[{"lit":"v1"},{"lit":"apple_pay"},{"lit":"domains"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"apple_pay_domain","name__orig":"apple_pay_domain","Name":"ApplePayDomain","name_":"apple_pay_domain","name-":"apple-pay-domain","NAME":"APPLE_PAY_DOMAIN","index$":6}, {"active":true,"entity":"apple_pay_domain","key$":"BasicApplePayDomainFlow","kind":"basic","name":"BasicApplePayDomainFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"apple_pay_domain_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"apple_pay_domain_ref01","srcdatavar":"apple_pay_domain_ref01_data","suffix":"_dt0"},"m":{"id":"apple_pay_domain01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-apple_pay_domain_ref01"}}],"index$":1}]}, 'ApplePayDomain', {"POST /v1/apple_pay/domains":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"domain_name":{"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"required":["domain_name"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/apple_pay/domains/{domain}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"domain","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const apple_pay_domain_ref01_ent = client.ApplePayDomain()
    let apple_pay_domain_ref01_data = setup.data.new.apple_pay_domain['apple_pay_domain_ref01']

    apple_pay_domain_ref01_data = (await apple_pay_domain_ref01_ent.create(apple_pay_domain_ref01_data)).data()
    assert(null != apple_pay_domain_ref01_data.id)


    // LOAD
    const apple_pay_domain_ref01_match_dt0 = {}
    apple_pay_domain_ref01_match_dt0.id = apple_pay_domain_ref01_data.id
    const apple_pay_domain_ref01_data_dt0 = (await apple_pay_domain_ref01_ent.load(apple_pay_domain_ref01_match_dt0)).data()
    assert(apple_pay_domain_ref01_data_dt0.id === apple_pay_domain_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/apple_pay_domain/ApplePayDomainTestData.json')

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
    ['apple_pay_domain01','apple_pay_domain02','apple_pay_domain03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_APPLE_PAY_DOMAIN_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_APPLE_PAY_DOMAIN_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_APPLE_PAY_DOMAIN_ENTID']
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
  
