
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


describe('InvoicePaymentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.InvoicePayment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount_paid":{"a":true,"h":"Amount Paid","n":"amount_paid","r":false,"sh":"Amount that was actually paid for this invoice, in cents (or local equivalent).","t":"`$INTEGER`","key$":"amount_paid","index$":0},"amount_requested":{"a":true,"h":"Amount Requested","n":"amount_requested","r":true,"sh":"Amount intended to be paid toward this invoice, in cents (or local equivalent)","t":"`$INTEGER`","key$":"amount_requested","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"currency":{"a":true,"h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":4},"invoice":{"a":true,"h":"Invoice","n":"invoice","r":true,"sh":"The invoice that was paid.","t":"`$ANY`","union":{"branches":3,"count":2,"depth":1},"key$":"invoice","index$":5},"is_default":{"a":true,"h":"Is Default","n":"is_default","r":true,"sh":"Stripe automatically creates a default InvoicePayment when the invoice is finalized, and keeps it synchronized with the invoice’s `amount_remaining`.","t":"`$BOOLEAN`","key$":"is_default","index$":6},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":7},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":8},"payment":{"a":true,"h":"Payment","n":"payment","r":true,"t":"`$OBJECT`","union":{"branches":17,"count":27992,"depth":51},"key$":"payment","index$":9},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the payment, one of `open`, `paid`, or `canceled`.","t":"`$STRING`","key$":"status","index$":10},"status_transitions":{"a":true,"h":"Status Transitions","n":"status_transitions","r":true,"t":"`$OBJECT`","key$":"status_transitions","index$":11}},"id":{"field":"id","name":"id"},"name":"invoice_payment","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/invoice_payments","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"invoice","or":"invoice","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"payment","or":"payment","r":false,"t":"`$OBJECT`","index$":5},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/v1/invoice_payments","q":{"exist":["created","ending_before","expand","invoice","limit","payment","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"invoice_payments"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/invoice_payments/{invoice_payment}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"invoice_payment","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/invoice_payments/{invoice_payment}","q":{"exist":["expand","id"]},"r":{"param":{"invoice_payment":"id"}},"s":[{"lit":"v1"},{"lit":"invoice_payments"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"invoice_payment","name__orig":"invoice_payment","Name":"InvoicePayment","name_":"invoice_payment","name-":"invoice-payment","NAME":"INVOICE_PAYMENT","index$":67}, {"active":true,"entity":"invoice_payment","key$":"BasicInvoicePaymentFlow","kind":"basic","name":"BasicInvoicePaymentFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"invoice_payment_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"invoice_payment_ref01","srcdatavar":"invoice_payment_ref01_data","suffix":"_dt0"},"m":{"id":"invoice_payment01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-invoice_payment_ref01"}}],"index$":1}]}, 'InvoicePayment', {"GET /v1/invoice_payments":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return invoice payments that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"The identifier of the invoice whose payments to return.","in":"query","name":"invoice","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":4},{"description":"The payment details of the invoice payments to return.","explode":true,"in":"query","name":"payment","required":false,"schema":{"properties":{"payment_intent":{"maxLength":5000,"type":"string"},"payment_record":{"maxLength":5000,"type":"string"},"type":{"enum":["payment_intent","payment_record"],"type":"string"}},"required":["type"],"title":"payment_param","type":"object"},"style":"deepObject","index$":5},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6},{"description":"The status of the invoice payments to return.","in":"query","name":"status","required":false,"schema":{"enum":["canceled","open","paid"],"type":"string"},"style":"form","index$":7}]},"GET /v1/invoice_payments/{invoice_payment}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"invoice_payment","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let invoice_payment_ref01_data = Object.values(setup.data.existing.invoice_payment)[0]

    // LIST
    const invoice_payment_ref01_ent = client.InvoicePayment()
    const invoice_payment_ref01_match = {}

    const invoice_payment_ref01_list = (await invoice_payment_ref01_ent.list(invoice_payment_ref01_match)).map((e) => e.data())


    // LOAD
    const invoice_payment_ref01_match_dt0 = {}
    invoice_payment_ref01_match_dt0.id = invoice_payment_ref01_data.id
    const invoice_payment_ref01_data_dt0 = (await invoice_payment_ref01_ent.load(invoice_payment_ref01_match_dt0)).data()
    assert(invoice_payment_ref01_data_dt0.id === invoice_payment_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/invoice_payment/InvoicePaymentTestData.json')

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
    ['invoice_payment01','invoice_payment02','invoice_payment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_INVOICE_PAYMENT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_INVOICE_PAYMENT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_INVOICE_PAYMENT_ENTID']
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
  
