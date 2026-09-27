
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


describe('FundingInstructionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.FundingInstruction()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"country":{"a":true,"h":"Country","n":"country","r":true,"sh":"The country of the bank account to fund","t":"`$STRING`","key$":"country","index$":0},"financial_addresses":{"a":true,"h":"Financial Addresses","n":"financial_addresses","r":true,"sh":"A list of financial addresses that can be used to fund a particular balance","t":"`$ARRAY`","key$":"financial_addresses","index$":1},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The bank_transfer type","t":"`$STRING`","key$":"type","index$":2}},"name":"funding_instruction","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/customers/{customer}/funding_instructions","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/customers/{customer}/funding_instructions","q":{"exist":["customer_id"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"funding_instructions"}],"t":{"req":"`reqdata`","res":"`body.bank_transfer`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.customer"]]},"key$":"funding_instruction","name__orig":"funding_instruction","Name":"FundingInstruction","name_":"funding_instruction","name-":"funding-instruction","NAME":"FUNDING_INSTRUCTION","index$":62}, {"active":true,"entity":"funding_instruction","key$":"BasicFundingInstructionFlow","kind":"basic","name":"BasicFundingInstructionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"funding_instruction_ref01"},"m":{"customer_id":"customer01"},"o":"create","s":[],"v":[],"index$":0}]}, 'FundingInstruction', {"POST /v1/customers/{customer}/funding_instructions":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"bank_transfer":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"bank_transfer":{"description":"Additional parameters for `bank_transfer` funding types","properties":{"eu_bank_transfer":{"properties":{"country":{}},"required":["country"],"title":"eu_bank_account_params","type":"object"},"requested_address_types":{"items":{"enum":[],"type":"string","x-stripeBypassValidation":true},"type":"array"},"type":{"enum":["eu_bank_transfer","gb_bank_transfer","jp_bank_transfer","mx_bank_transfer","us_bank_transfer"],"type":"string","x-stripeBypassValidation":true}},"required":["type"],"title":"bank_transfer_params","type":"object"},"currency":{"description":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).","format":"currency","type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"funding_type":{"description":"The `funding_type` to get the instructions for.","enum":["bank_transfer"],"type":"string"}},"required":["bank_transfer","currency","funding_type"],"type":"object"}}},"required":true},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const funding_instruction_ref01_ent = client.FundingInstruction()
    let funding_instruction_ref01_data = setup.data.new.funding_instruction['funding_instruction_ref01']
    funding_instruction_ref01_data['customer_id'] = setup.idmap['customer01']

    funding_instruction_ref01_data = (await funding_instruction_ref01_ent.create(funding_instruction_ref01_data)).data()
    assert(null != funding_instruction_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/funding_instruction/FundingInstructionTestData.json')

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
    ['funding_instruction01','funding_instruction02','funding_instruction03','customer01','customer02','customer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_FUNDING_INSTRUCTION_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_FUNDING_INSTRUCTION_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_FUNDING_INSTRUCTION_ENTID']
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
  
