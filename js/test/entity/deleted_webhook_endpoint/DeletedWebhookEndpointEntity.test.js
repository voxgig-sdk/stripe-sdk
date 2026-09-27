
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


describe('DeletedWebhookEndpointEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.DeletedWebhookEndpoint()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"deleted_webhook_endpoint","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/webhook_endpoints/{webhook_endpoint}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_endpoint","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/webhook_endpoints/{webhook_endpoint}","q":{"exist":["id"]},"r":{"param":{"webhook_endpoint":"id"}},"s":[{"lit":"v1"},{"lit":"webhook_endpoints"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"deleted_webhook_endpoint","name__orig":"deleted_webhook_endpoint","Name":"DeletedWebhookEndpoint","name_":"deleted_webhook_endpoint","name-":"deleted-webhook-endpoint","NAME":"DELETED_WEBHOOK_ENDPOINT","index$":46}, {"active":true,"entity":"deleted_webhook_endpoint","key$":"BasicDeletedWebhookEndpointFlow","kind":"basic","name":"BasicDeletedWebhookEndpointFlow","param":{},"step":[]}, 'DeletedWebhookEndpoint', {"DELETE /v1/webhook_endpoints/{webhook_endpoint}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"webhook_endpoint","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let deleted_webhook_endpoint_ref01_data = Object.values(setup.data.existing.deleted_webhook_endpoint)[0]

  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/deleted_webhook_endpoint/DeletedWebhookEndpointTestData.json')

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
    ['deleted_webhook_endpoint01','deleted_webhook_endpoint02','deleted_webhook_endpoint03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_DELETED_WEBHOOK_ENDPOINT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_DELETED_WEBHOOK_ENDPOINT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_DELETED_WEBHOOK_ENDPOINT_ENTID']
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
  
