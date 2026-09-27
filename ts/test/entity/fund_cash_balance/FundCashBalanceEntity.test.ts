

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { StripeSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('FundCashBalanceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.FundCashBalance()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'fund_cash_balance.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"adjusted_for_overdraft":{"a":true,"h":"Adjusted For Overdraft","n":"adjusted_for_overdraft","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":2,"depth":2},"key$":"adjusted_for_overdraft","index$":0},"applied_to_payment":{"a":true,"h":"Applied To Payment","n":"applied_to_payment","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":2},"key$":"applied_to_payment","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"currency":{"a":true,"h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":3},"customer":{"a":true,"h":"Customer","n":"customer","r":true,"sh":"The customer whose available cash balance changed as a result of this transaction.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"customer","index$":4},"customer_account":{"a":true,"h":"Customer Account","n":"customer_account","r":false,"sh":"The ID of an Account representing a customer whose available cash balance changed as a result of this transaction.","t":"`$STRING`","key$":"customer_account","index$":5},"ending_balance":{"a":true,"h":"Ending Balance","n":"ending_balance","r":true,"sh":"The total available cash balance for the specified currency after this transaction was applied.","t":"`$INTEGER`","key$":"ending_balance","index$":6},"funded":{"a":true,"h":"Funded","n":"funded","r":true,"t":"`$OBJECT`","key$":"funded","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":8},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":9},"net_amount":{"a":true,"h":"Net Amount","n":"net_amount","r":true,"sh":"The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).","t":"`$INTEGER`","key$":"net_amount","index$":10},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":11},"refunded_from_payment":{"a":true,"h":"Refunded From Payment","n":"refunded_from_payment","r":true,"t":"`$OBJECT`","union":{"branches":3,"count":115,"depth":17},"key$":"refunded_from_payment","index$":12},"transferred_to_balance":{"a":true,"h":"Transferred To Balance","n":"transferred_to_balance","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":2},"key$":"transferred_to_balance","index$":13},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of the cash balance transaction.","t":"`$STRING`","key$":"type","index$":14},"unapplied_from_payment":{"a":true,"h":"Unapplied From Payment","n":"unapplied_from_payment","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":2},"key$":"unapplied_from_payment","index$":15}},"id":{"field":"id","name":"id"},"name":"fund_cash_balance","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/test_helpers/customers/{customer}/fund_cash_balance","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/test_helpers/customers/{customer}/fund_cash_balance","q":{"exist":["customer_id"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"customers"},{"var":"customer_id"},{"lit":"fund_cash_balance"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.customer"]]},"key$":"fund_cash_balance","name__orig":"fund_cash_balance","Name":"FundCashBalance","name_":"fund_cash_balance","name-":"fund-cash-balance","NAME":"FUND_CASH_BALANCE","index$":61}, {"active":true,"entity":"fund_cash_balance","key$":"BasicFundCashBalanceFlow","kind":"basic","name":"BasicFundCashBalanceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"fund_cash_balance_ref01"},"m":{"customer_id":"customer01"},"o":"create","s":[],"v":[],"index$":0}]}, 'FundCashBalance', {"POST /v1/test_helpers/customers/{customer}/fund_cash_balance":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"description":"Amount to be used for this test cash balance transaction. A positive integer representing how much to fund in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) (e.g., 100 cents to fund $1.00 or 100 to fund ¥100, a zero-decimal currency).","type":"integer"},"currency":{"description":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).","format":"currency","type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"reference":{"description":"A description of the test funding. This simulates free-text references supplied by customers when making bank transfers to their cash balance. You can use this to test how Stripe's [reconciliation algorithm](https://docs.stripe.com/payments/customer-balance/reconciliation) applies to different user inputs.","maxLength":5000,"type":"string"}},"required":["amount","currency"],"type":"object"}}},"required":true},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const fund_cash_balance_ref01_ent = client.FundCashBalance()
    let fund_cash_balance_ref01_data = setup.data.new.fund_cash_balance['fund_cash_balance_ref01']
    fund_cash_balance_ref01_data['customer_id'] = setup.idmap['customer01']

    fund_cash_balance_ref01_data = (await fund_cash_balance_ref01_ent.create(fund_cash_balance_ref01_data)).data()
    assert(null != fund_cash_balance_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/fund_cash_balance/FundCashBalanceTestData.json')

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
    ['fund_cash_balance01','fund_cash_balance02','fund_cash_balance03','customer01','customer02','customer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_FUND_CASH_BALANCE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_FUND_CASH_BALANCE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_FUND_CASH_BALANCE_ENTID']
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
        secret: env.STRIPE_SECRET,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
