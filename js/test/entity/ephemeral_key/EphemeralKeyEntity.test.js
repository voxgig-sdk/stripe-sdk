
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


describe('EphemeralKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.EphemeralKey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":0},"expires":{"a":true,"fo":"unix-time","h":"Expires","n":"expires","r":true,"sh":"Time at which the key will expire.","t":"`$INTEGER`","key$":"expires","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":2},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":3},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":4},"secret":{"a":true,"h":"Secret","n":"secret","r":false,"sh":"The key's secret.","t":"`$STRING`","key$":"secret","index$":5}},"id":{"field":"id","name":"id"},"name":"ephemeral_key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/ephemeral_keys","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/ephemeral_keys","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"ephemeral_keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/ephemeral_keys/{key}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/ephemeral_keys/{key}","q":{"exist":["id"]},"r":{"param":{"key":"id"}},"s":[{"lit":"v1"},{"lit":"ephemeral_keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"ephemeral_key","name__orig":"ephemeral_key","Name":"EphemeralKey","name_":"ephemeral_key","name-":"ephemeral-key","NAME":"EPHEMERAL_KEY","index$":51}, {"active":true,"entity":"ephemeral_key","key$":"BasicEphemeralKeyFlow","kind":"basic","name":"BasicEphemeralKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ephemeral_key_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"ephemeral_key_ref01","suffix":"_rm0"},"m":{"id":"ephemeral_key01"},"o":"remove","s":[],"v":[],"index$":1}]}, 'EphemeralKey', {"POST /v1/ephemeral_keys":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"customer":{"description":"The ID of the Customer you'd like to modify using the resulting ephemeral key.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"issuing_card":{"description":"The ID of the Issuing Card you'd like to access using the resulting ephemeral key.","maxLength":5000,"type":"string"},"nonce":{"description":"A single-use token, created by Stripe.js, used for creating ephemeral keys for Issuing Cards without exchanging sensitive information.","maxLength":5000,"type":"string"},"verification_session":{"description":"The ID of the Identity VerificationSession you'd like to access using the resulting ephemeral key","maxLength":5000,"type":"string"}},"type":"object"}}},"required":false},"parameters":[]},"DELETE /v1/ephemeral_keys/{key}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"key","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ephemeral_key_ref01_ent = client.EphemeralKey()
    let ephemeral_key_ref01_data = setup.data.new.ephemeral_key['ephemeral_key_ref01']

    ephemeral_key_ref01_data = (await ephemeral_key_ref01_ent.create(ephemeral_key_ref01_data)).data()
    assert(null != ephemeral_key_ref01_data.id)


    // REMOVE
    const ephemeral_key_ref01_match_rm0 = {}
    ephemeral_key_ref01_match_rm0.id = ephemeral_key_ref01_data.id
    await ephemeral_key_ref01_ent.remove(ephemeral_key_ref01_match_rm0)
  

  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/ephemeral_key/EphemeralKeyTestData.json')

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
    ['ephemeral_key01','ephemeral_key02','ephemeral_key03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_EPHEMERAL_KEY_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_EPHEMERAL_KEY_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_EPHEMERAL_KEY_ENTID']
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
  
