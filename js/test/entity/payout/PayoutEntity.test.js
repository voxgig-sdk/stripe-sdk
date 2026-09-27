
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


describe('PayoutEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Payout()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"The amount (in cents (or local equivalent)) that transfers to your bank account or debit card.","t":"`$INTEGER`","key$":"amount","index$":0},"application_fee":{"a":true,"h":"Application Fee","n":"application_fee","r":false,"sh":"The application fee (if any) for the payout.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"application_fee","index$":1},"application_fee_amount":{"a":true,"h":"Application Fee Amount","n":"application_fee_amount","r":false,"sh":"The amount of the application fee (if any) requested for the payout.","t":"`$INTEGER`","key$":"application_fee_amount","index$":2},"arrival_date":{"a":true,"fo":"unix-time","h":"Arrival Date","n":"arrival_date","r":true,"sh":"Date that you can expect the payout to arrive in the bank.","t":"`$INTEGER`","key$":"arrival_date","index$":3},"automatic":{"a":true,"h":"Automatic","n":"automatic","r":true,"sh":"Returns `true` if the payout is created by an [automated payout schedule](https://docs.stripe.com/payouts#payout-schedule) and `false` if it's [requested manually](https://stripe.com/docs/payouts#manual-payouts).","t":"`$BOOLEAN`","key$":"automatic","index$":4},"balance_transaction":{"a":true,"h":"Balance Transaction","n":"balance_transaction","r":false,"sh":"ID of the balance transaction that describes the impact of this payout on your account balance.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"balance_transaction","index$":5},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":6},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":7},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"An arbitrary string attached to the object.","t":"`$STRING`","key$":"description","index$":8},"destination":{"a":true,"h":"Destination","n":"destination","r":false,"sh":"ID of the bank account or card the payout is sent to.","t":"`$ANY`","union":{"branches":5,"count":8,"depth":6},"key$":"destination","index$":9},"failure_balance_transaction":{"a":true,"h":"Failure Balance Transaction","n":"failure_balance_transaction","r":false,"sh":"If the payout fails or cancels, this is the ID of the balance transaction that reverses the initial balance transaction and returns the funds from the failed payout back in your balance.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"failure_balance_transaction","index$":10},"failure_code":{"a":true,"h":"Failure Code","n":"failure_code","r":false,"sh":"Error code that provides a reason for a payout failure, if available.","t":"`$STRING`","key$":"failure_code","index$":11},"failure_message":{"a":true,"h":"Failure Message","n":"failure_message","r":false,"sh":"Message that provides the reason for a payout failure, if available.","t":"`$STRING`","key$":"failure_message","index$":12},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":13},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":14},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":15},"method":{"a":true,"h":"Method","n":"method","r":true,"sh":"The method used to send this payout, which can be `standard` or `instant`.","t":"`$STRING`","key$":"method","index$":16},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":17},"original_payout":{"a":true,"h":"Original Payout","n":"original_payout","r":false,"sh":"If the payout reverses another, this is the ID of the original payout.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"original_payout","index$":18},"payout_method":{"a":true,"h":"Payout Method","n":"payout_method","r":false,"sh":"ID of the v2 FinancialAccount the funds are sent to.","t":"`$STRING`","key$":"payout_method","index$":19},"reconciliation_status":{"a":true,"h":"Reconciliation Status","n":"reconciliation_status","r":true,"sh":"If `completed`, you can use the [Balance Transactions API](https://docs.stripe.com/api/balance_transactions/list#balance_transaction_list-payout) to list all balance transactions that are paid out in this payout.","t":"`$STRING`","key$":"reconciliation_status","index$":20},"reversed_by":{"a":true,"h":"Reversed By","n":"reversed_by","r":false,"sh":"If the payout reverses, this is the ID of the payout that reverses this payout.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"reversed_by","index$":21},"source_type":{"a":true,"h":"Source Type","n":"source_type","r":true,"sh":"The source balance this payout came from, which can be one of the following: `card`, `fpx`, or `bank_account`.","t":"`$STRING`","key$":"source_type","index$":22},"statement_descriptor":{"a":true,"h":"Statement Descriptor","n":"statement_descriptor","r":false,"sh":"Extra information about a payout that displays on the user's bank statement.","t":"`$STRING`","key$":"statement_descriptor","index$":23},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`.","t":"`$STRING`","key$":"status","index$":24},"trace_id":{"a":true,"h":"Trace Id","n":"trace_id","r":false,"sh":"A value that generates from the beneficiary's bank that allows users to track payouts with their bank.","t":"`$STRING`","key$":"trace_id","index$":25},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Can be `bank_account` or `card`.","t":"`$STRING`","key$":"type","index$":26}},"id":{"field":"id","name":"id"},"name":"payout","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/payouts/{payout}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"payout","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/payouts/{payout}","q":{"exist":["id"]},"r":{"param":{"payout":"id"}},"s":[{"lit":"v1"},{"lit":"payouts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/payouts/{payout}/cancel","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"payout","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/payouts/{payout}/cancel","q":{"$action":"cancel","exist":["id"]},"r":{"param":{"payout":"id"}},"s":[{"lit":"v1"},{"lit":"payouts"},{"var":"id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/payouts/{payout}/reverse","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"payout","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/payouts/{payout}/reverse","q":{"$action":"reverse","exist":["id"]},"r":{"param":{"payout":"id"}},"s":[{"lit":"v1"},{"lit":"payouts"},{"var":"id"},{"lit":"reverse"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /v1/payouts","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/payouts","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"payouts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/payouts","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"arrival_date","or":"arrival_date","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"destination","or":"destination","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/v1/payouts","q":{"exist":["arrival_date","created","destination","ending_before","expand","limit","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"payouts"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/payouts/{payout}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"payout","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/payouts/{payout}","q":{"exist":["expand","id"]},"r":{"param":{"payout":"id"}},"s":[{"lit":"v1"},{"lit":"payouts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"payout","name__orig":"payout","Name":"Payout","name_":"payout","name-":"payout","NAME":"PAYOUT","index$":94}, {"active":true,"entity":"payout","key$":"BasicPayoutFlow","kind":"basic","name":"BasicPayoutFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"payout_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"payout_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"payout_ref01","srcdatavar":"payout_ref01_data","suffix":"_dt0"},"m":{"id":"payout01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-payout_ref01"}}],"index$":2}]}, 'Payout', {"POST /v1/payouts/{payout}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"payout","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/payouts/{payout}/cancel":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"payout","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/payouts/{payout}/reverse":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"payout","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/payouts":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"description":"A positive integer in cents representing how much to pay out.","type":"integer"},"currency":{"description":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).","format":"currency","type":"string"},"description":{"description":"An arbitrary string attached to the object. Often useful for displaying to users.","maxLength":5000,"type":"string"},"destination":{"description":"The ID of a bank account or a card to send the payout to. If you don't provide a destination, we use the default external account for the specified currency.","type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"method":{"description":"The method used to send this payout, which is `standard` or `instant`. We support `instant` for payouts to debit cards and bank accounts in certain countries. Learn more about [bank support for Instant Payouts](https://stripe.com/docs/payouts/instant-payouts-banks).","enum":["instant","standard"],"maxLength":5000,"type":"string","x-stripeBypassValidation":true},"payout_method":{"description":"The ID of a v2 FinancialAccount to send funds to.","type":"string"},"source_type":{"description":"The balance type of your Stripe balance to draw this payout from. Balances for different payment sources are kept separately. You can find the amounts with the Balances API. One of `bank_account`, `card`, or `fpx`.","enum":["bank_account","card","fpx"],"maxLength":5000,"type":"string","x-stripeBypassValidation":true},"statement_descriptor":{"description":"A string that displays on the recipient's bank or card statement (up to 22 characters). A `statement_descriptor` that's longer than 22 characters return an error. Most banks truncate this information and display it inconsistently. Some banks might not display it at all. For US ACH payouts, this maps to the ACH Company Entry Description field, which the NACHA standard limits to 10 characters. Stripe truncates descriptors longer than 10 characters for US ACH payouts.","maxLength":22,"type":"string","x-stripeBypassValidation":true}},"required":["amount","currency"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/payouts":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return payouts that are expected to arrive during the given date interval.","explode":true,"in":"query","name":"arrival_date","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":0},{"description":"Only return payouts that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":1},{"description":"The ID of an external account - only return payouts sent to this external account.","in":"query","name":"destination","required":false,"schema":{"type":"string"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":4},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":5},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6},{"description":"Only return payouts that have the given status: `pending`, `paid`, `failed`, or `canceled`.","in":"query","name":"status","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":7}]},"GET /v1/payouts/{payout}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"payout","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const payout_ref01_ent = client.Payout()
    let payout_ref01_data = setup.data.new.payout['payout_ref01']

    payout_ref01_data = (await payout_ref01_ent.create(payout_ref01_data)).data()
    assert(null != payout_ref01_data.id)


    // LIST
    const payout_ref01_match = {}

    const payout_ref01_list = (await payout_ref01_ent.list(payout_ref01_match)).map((e) => e.data())

    assert(!isempty(select(payout_ref01_list, { id: payout_ref01_data.id })))


    // LOAD
    const payout_ref01_match_dt0 = {}
    payout_ref01_match_dt0.id = payout_ref01_data.id
    const payout_ref01_data_dt0 = (await payout_ref01_ent.load(payout_ref01_match_dt0)).data()
    assert(payout_ref01_data_dt0.id === payout_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/payout/PayoutTestData.json')

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
    ['payout01','payout02','payout03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_PAYOUT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_PAYOUT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_PAYOUT_ENTID']
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
  
