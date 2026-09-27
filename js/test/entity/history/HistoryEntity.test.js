
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


describe('HistoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.History()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"Gross amount of this transaction (in cents (or local equivalent)).","t":"`$INTEGER`","key$":"amount","index$":0},"available_on":{"a":true,"fo":"unix-time","h":"Available On","n":"available_on","r":true,"sh":"The date that the transaction's net funds become available in the Stripe balance.","t":"`$INTEGER`","key$":"available_on","index$":1},"balance_type":{"a":true,"h":"Balance Type","n":"balance_type","r":true,"sh":"The balance that this transaction impacts.","t":"`$STRING`","key$":"balance_type","index$":2},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":3},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":4},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"An arbitrary string attached to the object.","t":"`$STRING`","key$":"description","index$":5},"exchange_rate":{"a":true,"h":"Exchange Rate","n":"exchange_rate","r":false,"sh":"If applicable, this transaction uses an exchange rate.","t":"`$NUMBER`","key$":"exchange_rate","index$":6},"fee":{"a":true,"h":"Fee","n":"fee","r":true,"sh":"Fees (in cents (or local equivalent)) paid for this transaction.","t":"`$INTEGER`","key$":"fee","index$":7},"fee_details":{"a":true,"h":"Fee Details","n":"fee_details","r":true,"sh":"Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction.","t":"`$ARRAY`","key$":"fee_details","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":9},"net":{"a":true,"h":"Net","n":"net","r":true,"sh":"Net impact to a Stripe balance (in cents (or local equivalent)).","t":"`$INTEGER`","key$":"net","index$":10},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":11},"reporting_category":{"a":true,"h":"Reporting Category","n":"reporting_category","r":true,"sh":"Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective.","t":"`$STRING`","key$":"reporting_category","index$":12},"source":{"a":true,"h":"Source","n":"source","r":false,"sh":"This transaction relates to the Stripe object.","t":"`$ANY`","union":{"branches":17,"count":1367,"depth":37},"key$":"source","index$":13},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The transaction's net funds status in the Stripe balance, which are either `available` or `pending`.","t":"`$STRING`","key$":"status","index$":14},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Transaction type: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `co…","t":"`$STRING`","key$":"type","index$":15}},"id":{"field":"id","name":"id"},"name":"history","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/balance/history","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"currency","or":"currency","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"payout","or":"payout","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"source","or":"source","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":8}]},"k":"http","m":"GET","o":"/v1/balance/history","q":{"exist":["created","currency","ending_before","expand","limit","payout","source","starting_after","type"]},"r":{},"s":[{"lit":"v1"},{"lit":"balance"},{"lit":"history"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"history","name__orig":"history","Name":"History","name_":"history","name-":"history","NAME":"HISTORY","index$":63}, {"active":true,"entity":"history","key$":"BasicHistoryFlow","kind":"basic","name":"BasicHistoryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"history_ref01"}}],"index$":0}]}, 'History', {"GET /v1/balance/history":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return transactions that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":0},{"description":"Only return transactions in a certain currency. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).","in":"query","name":"currency","required":false,"schema":{"format":"currency","type":"string"},"style":"form","index$":1},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":3},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":4},{"description":"For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID.","in":"query","name":"payout","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5},{"description":"Only returns transactions associated with the given object.","in":"query","name":"source","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":7},{"description":"Only returns transactions of the given type. One of: `tax_fund`, `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `contribution`, `inbound_transfer`, `inbound_transfer_reversal`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_dispute_provisional_credit`, `issuing_dispute_provisional_credit_reversal`, `issuing_transaction`, `obligation_outbound`, `obligation_reversal_inbound`, `payment`, `payment_failure_refund`, `payment_network_reserve_hold`, `payment_network_reserve_release`, `payment_refund`, `payment_reversal`, `payment_unreconciled`, `payout`, `payout_cancel`, `payout_failure`, `payout_minimum_balance_hold`, `payout_minimum_balance_release`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `reserve_hold`, `reserve_release`, `stripe_fee`, `stripe_fx_fee`, `stripe_balance_payment_debit`, `stripe_balance_payment_debit_reversal`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, `transfer_refund`, or `fee_credit_funding`.","in":"query","name":"type","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":8}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let history_ref01_data = Object.values(setup.data.existing.history)[0]

    // LIST
    const history_ref01_ent = client.History()
    const history_ref01_match = {}

    const history_ref01_list = (await history_ref01_ent.list(history_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/history/HistoryTestData.json')

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
    ['history01','history02','history03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_HISTORY_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_HISTORY_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_HISTORY_ENTID']
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
  
