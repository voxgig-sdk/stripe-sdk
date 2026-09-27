
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


describe('CashBalanceTransactionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.CashBalanceTransaction()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"adjusted_for_overdraft":{"a":true,"h":"Adjusted For Overdraft","n":"adjusted_for_overdraft","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":2,"depth":2},"key$":"adjusted_for_overdraft","index$":0},"applied_to_payment":{"a":true,"h":"Applied To Payment","n":"applied_to_payment","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":2},"key$":"applied_to_payment","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"currency":{"a":true,"h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":3},"customer":{"a":true,"h":"Customer","n":"customer","r":true,"sh":"The customer whose available cash balance changed as a result of this transaction.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"customer","index$":4},"customer_account":{"a":true,"h":"Customer Account","n":"customer_account","r":false,"sh":"The ID of an Account representing a customer whose available cash balance changed as a result of this transaction.","t":"`$STRING`","key$":"customer_account","index$":5},"ending_balance":{"a":true,"h":"Ending Balance","n":"ending_balance","r":true,"sh":"The total available cash balance for the specified currency after this transaction was applied.","t":"`$INTEGER`","key$":"ending_balance","index$":6},"funded":{"a":true,"h":"Funded","n":"funded","r":true,"t":"`$OBJECT`","key$":"funded","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":8},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":9},"net_amount":{"a":true,"h":"Net Amount","n":"net_amount","r":true,"sh":"The amount by which the cash balance changed, represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).","t":"`$INTEGER`","key$":"net_amount","index$":10},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":11},"refunded_from_payment":{"a":true,"h":"Refunded From Payment","n":"refunded_from_payment","r":true,"t":"`$OBJECT`","union":{"branches":3,"count":115,"depth":17},"key$":"refunded_from_payment","index$":12},"transferred_to_balance":{"a":true,"h":"Transferred To Balance","n":"transferred_to_balance","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":2},"key$":"transferred_to_balance","index$":13},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of the cash balance transaction.","t":"`$STRING`","key$":"type","index$":14},"unapplied_from_payment":{"a":true,"h":"Unapplied From Payment","n":"unapplied_from_payment","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":2},"key$":"unapplied_from_payment","index$":15}},"id":{"field":"id","name":"id"},"name":"cash_balance_transaction","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/customers/{customer}/cash_balance_transactions","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/customers/{customer}/cash_balance_transactions","q":{"exist":["customer_id","ending_before","expand","limit","starting_after"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"cash_balance_transactions"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/customers/{customer}/cash_balance_transactions/{transaction}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"transaction","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/customers/{customer}/cash_balance_transactions/{transaction}","q":{"exist":["customer_id","expand","id"]},"r":{"param":{"customer":"customer_id","transaction":"id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"cash_balance_transactions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.customer"]]},"key$":"cash_balance_transaction","name__orig":"cash_balance_transaction","Name":"CashBalanceTransaction","name_":"cash_balance_transaction","name-":"cash-balance-transaction","NAME":"CASH_BALANCE_TRANSACTION","index$":20}, {"active":true,"entity":"cash_balance_transaction","key$":"BasicCashBalanceTransactionFlow","kind":"basic","name":"BasicCashBalanceTransactionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"customer_id":"customer01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"cash_balance_transaction_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"cash_balance_transaction_ref01","srcdatavar":"cash_balance_transaction_ref01_data","suffix":"_dt0"},"m":{"customer_id":"customer01","id":"cash_balance_transaction01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cash_balance_transaction_ref01"}}],"index$":1}]}, 'CashBalanceTransaction', {"GET /v1/customers/{customer}/cash_balance_transactions":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4}]},"GET /v1/customers/{customer}/cash_balance_transactions/{transaction}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"in":"path","name":"transaction","required":true,"schema":{"type":"string"},"style":"simple","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cash_balance_transaction_ref01_data = Object.values(setup.data.existing.cash_balance_transaction)[0]

    // LIST
    const cash_balance_transaction_ref01_ent = client.CashBalanceTransaction()
    const cash_balance_transaction_ref01_match = {}
    cash_balance_transaction_ref01_match['customer_id'] = setup.idmap['customer01']

    const cash_balance_transaction_ref01_list = (await cash_balance_transaction_ref01_ent.list(cash_balance_transaction_ref01_match)).map((e) => e.data())


    // LOAD
    const cash_balance_transaction_ref01_match_dt0 = {}
    cash_balance_transaction_ref01_match_dt0.id = cash_balance_transaction_ref01_data.id
    const cash_balance_transaction_ref01_data_dt0 = (await cash_balance_transaction_ref01_ent.load(cash_balance_transaction_ref01_match_dt0)).data()
    assert(cash_balance_transaction_ref01_data_dt0.id === cash_balance_transaction_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/cash_balance_transaction/CashBalanceTransactionTestData.json')

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
    ['cash_balance_transaction01','cash_balance_transaction02','cash_balance_transaction03','customer01','customer02','customer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_CASH_BALANCE_TRANSACTION_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_CASH_BALANCE_TRANSACTION_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_CASH_BALANCE_TRANSACTION_ENTID']
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
  
