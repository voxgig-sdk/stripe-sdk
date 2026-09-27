
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


describe('CashBalanceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.CashBalance()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"available":{"a":true,"h":"Available","n":"available","r":false,"sh":"A hash of all cash balances available to this customer.","t":"`$OBJECT`","key$":"available","index$":0},"customer":{"a":true,"h":"Customer","n":"customer","r":true,"sh":"The ID of the customer whose cash balance this object represents.","t":"`$STRING`","key$":"customer","index$":1},"customer_account":{"a":true,"h":"Customer Account","n":"customer_account","r":false,"sh":"The ID of an Account representing a customer whose cash balance this object represents.","t":"`$STRING`","key$":"customer_account","index$":2},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":3},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":4},"settings":{"a":true,"h":"Settings","n":"settings","r":true,"t":"`$OBJECT`","key$":"settings","index$":5}},"name":"cash_balance","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/customers/{customer}/cash_balance","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/customers/{customer}/cash_balance","q":{"exist":["customer_id"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"cash_balance"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/customers/{customer}/cash_balance","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/customers/{customer}/cash_balance","q":{"exist":["customer_id","expand"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"cash_balance"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.customer"]]},"key$":"cash_balance","name__orig":"cash_balance","Name":"CashBalance","name_":"cash_balance","name-":"cash-balance","NAME":"CASH_BALANCE","index$":19}, {"active":true,"entity":"cash_balance","key$":"BasicCashBalanceFlow","kind":"basic","name":"BasicCashBalanceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"cash_balance_ref01"},"m":{"customer_id":"customer01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"cash_balance_ref01","srcdatavar":"cash_balance_ref01_data","suffix":"_dt0"},"m":{"id":"cash_balance01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cash_balance_ref01"}}],"index$":1}]}, 'CashBalance', {"POST /v1/customers/{customer}/cash_balance":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"settings":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"settings":{"description":"A hash of settings for this cash balance.","properties":{"reconciliation_mode":{"enum":["automatic","manual","merchant_default"],"type":"string"}},"title":"balance_settings_param","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"GET /v1/customers/{customer}/cash_balance":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const cash_balance_ref01_ent = client.CashBalance()
    let cash_balance_ref01_data = setup.data.new.cash_balance['cash_balance_ref01']
    cash_balance_ref01_data['customer_id'] = setup.idmap['customer01']

    cash_balance_ref01_data = (await cash_balance_ref01_ent.create(cash_balance_ref01_data)).data()
    assert(null != cash_balance_ref01_data)


    // LOAD
    const cash_balance_ref01_match_dt0 = {}
    const cash_balance_ref01_data_dt0 = (await cash_balance_ref01_ent.load(cash_balance_ref01_match_dt0)).data()
    assert(null != cash_balance_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/cash_balance/CashBalanceTestData.json')

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
    ['cash_balance01','cash_balance02','cash_balance03','customer01','customer02','customer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_CASH_BALANCE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_CASH_BALANCE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_CASH_BALANCE_ENTID']
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
  
