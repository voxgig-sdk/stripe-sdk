
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


describe('FinancialAccountFeatureEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.FinancialAccountFeature()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"card_issuing":{"a":true,"h":"Card Issuing","n":"card_issuing","r":true,"sh":"Toggle settings for enabling/disabling a feature","t":"`$OBJECT`","key$":"card_issuing","index$":0},"deposit_insurance":{"a":true,"h":"Deposit Insurance","n":"deposit_insurance","r":true,"sh":"Toggle settings for enabling/disabling a feature","t":"`$OBJECT`","key$":"deposit_insurance","index$":1},"financial_addresses":{"a":true,"h":"Financial Addresses","n":"financial_addresses","r":false,"sh":"Settings related to Financial Addresses features on a Financial Account","t":"`$OBJECT`","key$":"financial_addresses","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"inbound_transfers":{"a":true,"h":"Inbound Transfers","n":"inbound_transfers","r":false,"sh":"InboundTransfers contains inbound transfers features for a FinancialAccount.","t":"`$OBJECT`","key$":"inbound_transfers","index$":4},"intra_stripe_flows":{"a":true,"h":"Intra Stripe Flows","n":"intra_stripe_flows","r":true,"sh":"Toggle settings for enabling/disabling a feature","t":"`$OBJECT`","key$":"intra_stripe_flows","index$":5},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":6},"outbound_payments":{"a":true,"h":"Outbound Payments","n":"outbound_payments","r":false,"sh":"Settings related to Outbound Payments features on a Financial Account","t":"`$OBJECT`","key$":"outbound_payments","index$":7},"outbound_transfers":{"a":true,"h":"Outbound Transfers","n":"outbound_transfers","r":false,"sh":"OutboundTransfers contains outbound transfers features for a FinancialAccount.","t":"`$OBJECT`","key$":"outbound_transfers","index$":8}},"id":{"field":"id","name":"id"},"name":"financial_account_feature","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/treasury/financial_accounts/{financial_account}/features","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"financial_account","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/treasury/financial_accounts/{financial_account}/features","q":{"exist":["id"]},"r":{"param":{"financial_account":"id"}},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"financial_accounts"},{"var":"id"},{"lit":"features"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/treasury/financial_accounts/{financial_account}/features","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"financial_account","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/treasury/financial_accounts/{financial_account}/features","q":{"exist":["expand","id"]},"r":{"param":{"financial_account":"id"}},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"financial_accounts"},{"var":"id"},{"lit":"features"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"financial_account_feature","name__orig":"financial_account_feature","Name":"FinancialAccountFeature","name_":"financial_account_feature","name-":"financial-account-feature","NAME":"FINANCIAL_ACCOUNT_FEATURE","index$":60}, {"active":true,"entity":"financial_account_feature","key$":"BasicFinancialAccountFeatureFlow","kind":"basic","name":"BasicFinancialAccountFeatureFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"financial_account_feature_ref01"},"m":{"financial_account":"financial_account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"financial_account_feature_ref01","srcdatavar":"financial_account_feature_ref01_data","suffix":"_dt0"},"m":{"id":"financial_account_feature01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-financial_account_feature_ref01"}}],"index$":1}]}, 'FinancialAccountFeature', {"POST /v1/treasury/financial_accounts/{financial_account}/features":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"card_issuing":{"explode":true,"style":"deepObject"},"deposit_insurance":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"financial_addresses":{"explode":true,"style":"deepObject"},"inbound_transfers":{"explode":true,"style":"deepObject"},"intra_stripe_flows":{"explode":true,"style":"deepObject"},"outbound_payments":{"explode":true,"style":"deepObject"},"outbound_transfers":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"card_issuing":{"description":"Encodes the FinancialAccount's ability to be used with the Issuing product, including attaching cards to and drawing funds from the FinancialAccount.","properties":{"requested":{"type":"boolean"}},"required":["requested"],"title":"access","type":"object"},"deposit_insurance":{"description":"Represents whether this FinancialAccount is eligible for deposit insurance. Various factors determine the insurance amount.","properties":{"requested":{"type":"boolean"}},"required":["requested"],"title":"access","type":"object"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"financial_addresses":{"description":"Contains Features that add FinancialAddresses to the FinancialAccount.","properties":{"aba":{"properties":{"requested":{}},"required":["requested"],"title":"aba_access","type":"object"}},"title":"financial_addresses","type":"object"},"inbound_transfers":{"description":"Contains settings related to adding funds to a FinancialAccount from another Account with the same owner.","properties":{"ach":{"properties":{"requested":{}},"required":["requested"],"title":"access_with_ach_details_inbound","type":"object"}},"title":"inbound_transfers","type":"object"},"intra_stripe_flows":{"description":"Represents the ability for the FinancialAccount to send money to, or receive money from other FinancialAccounts (for example, via OutboundPayment).","properties":{"requested":{"type":"boolean"}},"required":["requested"],"title":"access","type":"object"},"outbound_payments":{"description":"Includes Features related to initiating money movement out of the FinancialAccount to someone else's bucket of money.","properties":{"ach":{"properties":{"requested":{}},"required":["requested"],"title":"access_with_ach_details_outbound","type":"object"},"us_domestic_wire":{"properties":{"requested":{}},"required":["requested"],"title":"access","type":"object"}},"title":"outbound_payments","type":"object"},"outbound_transfers":{"description":"Contains a Feature and settings related to moving money out of the FinancialAccount into another Account with the same owner.","properties":{"ach":{"properties":{"requested":{}},"required":["requested"],"title":"access_with_ach_details_outbound","type":"object"},"us_domestic_wire":{"properties":{"requested":{}},"required":["requested"],"title":"access","type":"object"}},"title":"outbound_transfers","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"financial_account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"GET /v1/treasury/financial_accounts/{financial_account}/features":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"financial_account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const financial_account_feature_ref01_ent = client.FinancialAccountFeature()
    let financial_account_feature_ref01_data = setup.data.new.financial_account_feature['financial_account_feature_ref01']
    financial_account_feature_ref01_data['financial_account'] = setup.idmap['financial_account01']

    financial_account_feature_ref01_data = (await financial_account_feature_ref01_ent.create(financial_account_feature_ref01_data)).data()
    assert(null != financial_account_feature_ref01_data.id)


    // LOAD
    const financial_account_feature_ref01_match_dt0 = {}
    financial_account_feature_ref01_match_dt0.id = financial_account_feature_ref01_data.id
    const financial_account_feature_ref01_data_dt0 = (await financial_account_feature_ref01_ent.load(financial_account_feature_ref01_match_dt0)).data()
    assert(financial_account_feature_ref01_data_dt0.id === financial_account_feature_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/financial_account_feature/FinancialAccountFeatureTestData.json')

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
    ['financial_account_feature01','financial_account_feature02','financial_account_feature03','financial_account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_FINANCIAL_ACCOUNT_FEATURE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_FINANCIAL_ACCOUNT_FEATURE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_FINANCIAL_ACCOUNT_FEATURE_ENTID']
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
  
