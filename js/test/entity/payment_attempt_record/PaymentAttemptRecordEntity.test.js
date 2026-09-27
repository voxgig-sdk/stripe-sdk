
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


describe('PaymentAttemptRecordEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.PaymentAttemptRecord()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount","index$":0},"amount_authorized":{"a":true,"h":"Amount Authorized","n":"amount_authorized","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount_authorized","index$":1},"amount_canceled":{"a":true,"h":"Amount Canceled","n":"amount_canceled","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount_canceled","index$":2},"amount_failed":{"a":true,"h":"Amount Failed","n":"amount_failed","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount_failed","index$":3},"amount_guaranteed":{"a":true,"h":"Amount Guaranteed","n":"amount_guaranteed","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount_guaranteed","index$":4},"amount_refunded":{"a":true,"h":"Amount Refunded","n":"amount_refunded","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount_refunded","index$":5},"amount_requested":{"a":true,"h":"Amount Requested","n":"amount_requested","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount_requested","index$":6},"application":{"a":true,"h":"Application","n":"application","r":false,"sh":"ID of the Connect application that created the PaymentAttemptRecord.","t":"`$STRING`","key$":"application","index$":7},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":8},"customer_details":{"a":true,"h":"Customer Details","n":"customer_details","r":false,"sh":"Customer information for this payment.","t":"`$ANY`","key$":"customer_details","index$":9},"customer_presence":{"a":true,"h":"Customer Presence","n":"customer_presence","r":false,"sh":"Indicates whether the customer was present in your checkout flow during this payment.","t":"`$STRING`","key$":"customer_presence","index$":10},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"An arbitrary string attached to the object.","t":"`$STRING`","key$":"description","index$":11},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":12},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":13},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":14},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":15},"payment_method_details":{"a":true,"h":"Payment Method Details","n":"payment_method_details","r":false,"sh":"Information about the Payment Method debited for this payment.","t":"`$ANY`","union":{"branches":2,"count":15,"depth":11},"key$":"payment_method_details","index$":16},"payment_record":{"a":true,"h":"Payment Record","n":"payment_record","r":false,"sh":"ID of the Payment Record this Payment Attempt Record belongs to.","t":"`$STRING`","key$":"payment_record","index$":17},"processor_details":{"a":true,"h":"Processor Details","n":"processor_details","r":true,"sh":"Processor information associated with this payment.","t":"`$OBJECT`","key$":"processor_details","index$":18},"reported_by":{"a":true,"h":"Reported By","n":"reported_by","r":true,"sh":"Indicates who reported the payment.","t":"`$STRING`","key$":"reported_by","index$":19},"shipping_details":{"a":true,"h":"Shipping Details","n":"shipping_details","r":false,"sh":"Shipping information for this payment.","t":"`$ANY`","key$":"shipping_details","index$":20}},"id":{"field":"id","name":"id"},"name":"payment_attempt_record","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/payment_attempt_records","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"payment_record","or":"payment_record","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/payment_attempt_records","q":{"exist":["expand","limit","payment_record","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"payment_attempt_records"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/payment_attempt_records/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/payment_attempt_records/{id}","q":{"exist":["expand","id"]},"r":{},"s":[{"lit":"v1"},{"lit":"payment_attempt_records"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"payment_attempt_record","name__orig":"payment_attempt_record","Name":"PaymentAttemptRecord","name_":"payment_attempt_record","name-":"payment-attempt-record","NAME":"PAYMENT_ATTEMPT_RECORD","index$":85}, {"active":true,"entity":"payment_attempt_record","key$":"BasicPaymentAttemptRecordFlow","kind":"basic","name":"BasicPaymentAttemptRecordFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"payment_attempt_record_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"payment_attempt_record_ref01","srcdatavar":"payment_attempt_record_ref01_data","suffix":"_dt0"},"m":{"id":"payment_attempt_record01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-payment_attempt_record_ref01"}}],"index$":1}]}, 'PaymentAttemptRecord', {"GET /v1/payment_attempt_records":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":1},{"description":"The ID of the Payment Record.","in":"query","name":"payment_record","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3}]},"GET /v1/payment_attempt_records/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"description":"The ID of the Payment Attempt Record.","in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let payment_attempt_record_ref01_data = Object.values(setup.data.existing.payment_attempt_record)[0]

    // LIST
    const payment_attempt_record_ref01_ent = client.PaymentAttemptRecord()
    const payment_attempt_record_ref01_match = {}

    const payment_attempt_record_ref01_list = (await payment_attempt_record_ref01_ent.list(payment_attempt_record_ref01_match)).map((e) => e.data())


    // LOAD
    const payment_attempt_record_ref01_match_dt0 = {}
    payment_attempt_record_ref01_match_dt0.id = payment_attempt_record_ref01_data.id
    const payment_attempt_record_ref01_data_dt0 = (await payment_attempt_record_ref01_ent.load(payment_attempt_record_ref01_match_dt0)).data()
    assert(payment_attempt_record_ref01_data_dt0.id === payment_attempt_record_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/payment_attempt_record/PaymentAttemptRecordTestData.json')

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
    ['payment_attempt_record01','payment_attempt_record02','payment_attempt_record03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_PAYMENT_ATTEMPT_RECORD_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_PAYMENT_ATTEMPT_RECORD_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_PAYMENT_ATTEMPT_RECORD_ENTID']
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
  
