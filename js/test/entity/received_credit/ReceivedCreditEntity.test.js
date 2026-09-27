
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


describe('ReceivedCreditEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.ReceivedCredit()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"Amount (in cents) transferred.","t":"`$INTEGER`","key$":"amount","index$":0},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":1},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":2},"description":{"a":true,"h":"Description","n":"description","r":true,"sh":"An arbitrary string attached to the object.","t":"`$STRING`","key$":"description","index$":3},"failure_code":{"a":true,"h":"Failure Code","n":"failure_code","r":false,"sh":"Reason for the failure.","t":"`$STRING`","key$":"failure_code","index$":4},"financial_account":{"a":true,"h":"Financial Account","n":"financial_account","r":false,"sh":"The FinancialAccount that received the funds.","t":"`$STRING`","key$":"financial_account","index$":5},"hosted_regulatory_receipt_url":{"a":true,"h":"Hosted Regulatory Receipt Url","n":"hosted_regulatory_receipt_url","r":false,"sh":"A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.","t":"`$STRING`","key$":"hosted_regulatory_receipt_url","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":7},"initiating_payment_method_details":{"a":true,"h":"Initiating Payment Method Details","n":"initiating_payment_method_details","r":true,"t":"`$OBJECT`","key$":"initiating_payment_method_details","index$":8},"linked_flows":{"a":true,"h":"Linked Flows","n":"linked_flows","r":true,"t":"`$OBJECT`","union":{"branches":5,"count":23,"depth":19},"key$":"linked_flows","index$":9},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":10},"network":{"a":true,"h":"Network","n":"network","r":true,"sh":"The rails used to send the funds.","t":"`$STRING`","key$":"network","index$":11},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":12},"reversal_details":{"a":true,"h":"Reversal Details","n":"reversal_details","r":false,"sh":"Details describing when a ReceivedCredit may be reversed.","t":"`$ANY`","key$":"reversal_details","index$":13},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Status of the ReceivedCredit.","t":"`$STRING`","key$":"status","index$":14},"transaction":{"a":true,"h":"Transaction","n":"transaction","r":false,"sh":"The Transaction associated with this object.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"transaction","index$":15}},"id":{"field":"id","name":"id"},"name":"received_credit","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/test_helpers/treasury/received_credits","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/test_helpers/treasury/received_credits","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"treasury"},{"lit":"received_credits"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/treasury/received_credits","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"financial_account","or":"financial_account","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"linked_flow","or":"linked_flow","r":false,"t":"`$OBJECT`","index$":4},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/v1/treasury/received_credits","q":{"exist":["ending_before","expand","financial_account","limit","linked_flow","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"received_credits"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/treasury/received_credits/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/treasury/received_credits/{id}","q":{"exist":["expand","id"]},"r":{},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"received_credits"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"received_credit","name__orig":"received_credit","Name":"ReceivedCredit","name_":"received_credit","name-":"received-credit","NAME":"RECEIVED_CREDIT","index$":107}, {"active":true,"entity":"received_credit","key$":"BasicReceivedCreditFlow","kind":"basic","name":"BasicReceivedCreditFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"received_credit_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"received_credit_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"received_credit_ref01","srcdatavar":"received_credit_ref01_data","suffix":"_dt0"},"m":{"id":"received_credit01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-received_credit_ref01"}}],"index$":2}]}, 'ReceivedCredit', {"POST /v1/test_helpers/treasury/received_credits":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"initiating_payment_method_details":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"description":"Amount (in cents) to be transferred.","type":"integer"},"currency":{"description":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).","format":"currency","type":"string"},"description":{"description":"An arbitrary string attached to the object. Often useful for displaying to users.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"financial_account":{"description":"The FinancialAccount to send funds to.","type":"string"},"initiating_payment_method_details":{"description":"Initiating payment method details for the object.","properties":{"type":{"enum":["us_bank_account"],"type":"string"},"us_bank_account":{"properties":{"account_holder_name":{},"account_number":{},"routing_number":{}},"title":"us_bank_account_source_params","type":"object"}},"required":["type"],"title":"source_params","type":"object"},"network":{"description":"Specifies the network rails to be used. If not set, will default to the PaymentMethod's preferred network. See the [docs](https://docs.stripe.com/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.","enum":["ach","rtp","us_domestic_wire"],"type":"string"}},"required":["amount","currency","financial_account","network"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/treasury/received_credits":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"The FinancialAccount that received the funds.","in":"query","name":"financial_account","required":true,"schema":{"type":"string"},"style":"form","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"Only return ReceivedCredits described by the flow.","explode":true,"in":"query","name":"linked_flows","required":false,"schema":{"properties":{"source_flow_type":{"enum":["credit_reversal","other","outbound_payment","outbound_transfer","payout"],"type":"string"}},"required":["source_flow_type"],"title":"linked_flows_param","type":"object"},"style":"deepObject","index$":4},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5},{"description":"Only return ReceivedCredits that have the given status: `succeeded` or `failed`.","in":"query","name":"status","required":false,"schema":{"enum":["failed","succeeded"],"type":"string","x-stripeBypassValidation":true},"style":"form","index$":6}]},"GET /v1/treasury/received_credits/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const received_credit_ref01_ent = client.ReceivedCredit()
    let received_credit_ref01_data = setup.data.new.received_credit['received_credit_ref01']

    received_credit_ref01_data = (await received_credit_ref01_ent.create(received_credit_ref01_data)).data()
    assert(null != received_credit_ref01_data.id)


    // LIST
    const received_credit_ref01_match = {}

    const received_credit_ref01_list = (await received_credit_ref01_ent.list(received_credit_ref01_match)).map((e) => e.data())

    assert(!isempty(select(received_credit_ref01_list, { id: received_credit_ref01_data.id })))


    // LOAD
    const received_credit_ref01_match_dt0 = {}
    received_credit_ref01_match_dt0.id = received_credit_ref01_data.id
    const received_credit_ref01_data_dt0 = (await received_credit_ref01_ent.load(received_credit_ref01_match_dt0)).data()
    assert(received_credit_ref01_data_dt0.id === received_credit_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/received_credit/ReceivedCreditTestData.json')

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
    ['received_credit01','received_credit02','received_credit03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_RECEIVED_CREDIT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_RECEIVED_CREDIT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_RECEIVED_CREDIT_ENTID']
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
  
