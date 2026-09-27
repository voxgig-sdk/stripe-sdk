

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


describe('OutboundTransferEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.OutboundTransfer()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'outbound_transfer.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"Amount (in cents) transferred.","t":"`$INTEGER`","key$":"amount","index$":0},"cancelable":{"a":true,"h":"Cancelable","n":"cancelable","r":true,"sh":"Returns `true` if the object can be canceled, and `false` otherwise.","t":"`$BOOLEAN`","key$":"cancelable","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":3},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"An arbitrary string attached to the object.","t":"`$STRING`","key$":"description","index$":4},"destination_payment_method":{"a":true,"h":"Destination Payment Method","n":"destination_payment_method","r":false,"sh":"The PaymentMethod used as the payment instrument for an OutboundTransfer.","t":"`$STRING`","key$":"destination_payment_method","index$":5},"destination_payment_method_details":{"a":true,"h":"Destination Payment Method Details","n":"destination_payment_method_details","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":3,"depth":9},"key$":"destination_payment_method_details","index$":6},"expected_arrival_date":{"a":true,"fo":"unix-time","h":"Expected Arrival Date","n":"expected_arrival_date","r":true,"sh":"The date when funds are expected to arrive in the destination account.","t":"`$INTEGER`","key$":"expected_arrival_date","index$":7},"financial_account":{"a":true,"h":"Financial Account","n":"financial_account","r":true,"sh":"The FinancialAccount that funds were pulled from.","t":"`$STRING`","key$":"financial_account","index$":8},"hosted_regulatory_receipt_url":{"a":true,"h":"Hosted Regulatory Receipt Url","n":"hosted_regulatory_receipt_url","r":false,"sh":"A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.","t":"`$STRING`","key$":"hosted_regulatory_receipt_url","index$":9},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":10},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":11},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":12},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":13},"returned_details":{"a":true,"h":"Returned Details","n":"returned_details","r":false,"sh":"Details about a returned OutboundTransfer.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":4},"key$":"returned_details","index$":14},"statement_descriptor":{"a":true,"h":"Statement Descriptor","n":"statement_descriptor","r":true,"sh":"Information about the OutboundTransfer to be sent to the recipient account.","t":"`$STRING`","key$":"statement_descriptor","index$":15},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`.","t":"`$STRING`","key$":"status","index$":16},"status_transitions":{"a":true,"h":"Status Transitions","n":"status_transitions","r":true,"t":"`$OBJECT`","key$":"status_transitions","index$":17},"tracking_details":{"a":true,"h":"Tracking Details","n":"tracking_details","r":false,"sh":"Details about network-specific tracking information if available.","t":"`$ANY`","key$":"tracking_details","index$":18},"transaction":{"a":true,"h":"Transaction","n":"transaction","r":true,"sh":"The Transaction associated with this object.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"transaction","index$":19}},"id":{"field":"id","name":"id"},"name":"outbound_transfer","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"outbound_transfer","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}","q":{"exist":["id"]},"r":{"param":{"outbound_transfer":"id"}},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"treasury"},{"lit":"outbound_transfers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/treasury/outbound_transfers/{outbound_transfer}/cancel","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"outbound_transfer","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/treasury/outbound_transfers/{outbound_transfer}/cancel","q":{"$action":"cancel","exist":["id"]},"r":{"param":{"outbound_transfer":"id"}},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"outbound_transfers"},{"var":"id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"outbound_transfer","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail","q":{"$action":"fail","exist":["id"]},"r":{"param":{"outbound_transfer":"id"}},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"treasury"},{"lit":"outbound_transfers"},{"var":"id"},{"lit":"fail"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"outbound_transfer","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post","q":{"$action":"post","exist":["id"]},"r":{"param":{"outbound_transfer":"id"}},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"treasury"},{"lit":"outbound_transfers"},{"var":"id"},{"lit":"post"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"outbound_transfer","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return","q":{"$action":"return","exist":["id"]},"r":{"param":{"outbound_transfer":"id"}},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"treasury"},{"lit":"outbound_transfers"},{"var":"id"},{"lit":"return"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"POST /v1/treasury/outbound_transfers","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/treasury/outbound_transfers","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"outbound_transfers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/treasury/outbound_transfers","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"financial_account","or":"financial_account","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/v1/treasury/outbound_transfers","q":{"exist":["ending_before","expand","financial_account","limit","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"outbound_transfers"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/treasury/outbound_transfers/{outbound_transfer}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"outbound_transfer","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/treasury/outbound_transfers/{outbound_transfer}","q":{"exist":["expand","id"]},"r":{"param":{"outbound_transfer":"id"}},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"outbound_transfers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"outbound_transfer","name__orig":"outbound_transfer","Name":"OutboundTransfer","name_":"outbound_transfer","name-":"outbound-transfer","NAME":"OUTBOUND_TRANSFER","index$":84}, {"active":true,"entity":"outbound_transfer","key$":"BasicOutboundTransferFlow","kind":"basic","name":"BasicOutboundTransferFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"outbound_transfer_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"outbound_transfer_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"outbound_transfer_ref01","srcdatavar":"outbound_transfer_ref01_data","suffix":"_dt0"},"m":{"id":"outbound_transfer01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-outbound_transfer_ref01"}}],"index$":2}]}, 'OutboundTransfer', {"POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"tracking_details":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"tracking_details":{"description":"Details about network-specific tracking information.","properties":{"ach":{"properties":{"trace_id":{}},"required":["trace_id"],"title":"ach_tracking_details_params","type":"object"},"type":{"enum":["ach","us_domestic_wire"],"type":"string"},"us_domestic_wire":{"properties":{"chips":{},"imad":{},"omad":{}},"title":"us_domestic_wire_tracking_details_params","type":"object"}},"required":["type"],"title":"tracking_details_params","type":"object"}},"required":["tracking_details"],"type":"object"}}},"required":true},"parameters":[{"in":"path","name":"outbound_transfer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/treasury/outbound_transfers/{outbound_transfer}/cancel":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"outbound_transfer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"outbound_transfer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"outbound_transfer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"returned_details":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"returned_details":{"description":"Details about a returned OutboundTransfer.","properties":{"code":{"enum":["account_closed","account_frozen","bank_account_restricted","bank_ownership_changed","declined","incorrect_account_holder_name","invalid_account_number","invalid_currency","no_account","other"],"type":"string"}},"title":"returned_details_params","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"outbound_transfer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/treasury/outbound_transfers":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"destination_payment_method_data":{"explode":true,"style":"deepObject"},"destination_payment_method_options":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"description":"Amount (in cents) to be transferred.","type":"integer"},"currency":{"description":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).","format":"currency","type":"string"},"description":{"description":"An arbitrary string attached to the object. Often useful for displaying to users.","maxLength":5000,"type":"string"},"destination_payment_method":{"description":"The PaymentMethod to use as the payment instrument for the OutboundTransfer.","maxLength":5000,"type":"string"},"destination_payment_method_data":{"description":"Hash used to generate the PaymentMethod to be used for this OutboundTransfer. Exclusive with `destination_payment_method`.","properties":{"financial_account":{"type":"string"},"type":{"enum":["financial_account"],"type":"string"}},"required":["type"],"title":"payment_method_data","type":"object"},"destination_payment_method_options":{"description":"Hash describing payment method configuration details.","properties":{"us_bank_account":{"anyOf":[{},{}]}},"title":"payment_method_options","type":"object"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"financial_account":{"description":"The FinancialAccount to pull funds from.","type":"string"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"statement_descriptor":{"description":"Statement descriptor to be shown on the receiving end of an OutboundTransfer. Maximum 10 characters for `ach` transfers or 140 characters for `us_domestic_wire` transfers. The default value is \"transfer\". Can only include -#.$&*, spaces, and alphanumeric characters.","maxLength":5000,"type":"string"}},"required":["amount","currency","financial_account"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/treasury/outbound_transfers":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"Returns objects associated with this FinancialAccount.","in":"query","name":"financial_account","required":true,"schema":{"type":"string"},"style":"form","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4},{"description":"Only return OutboundTransfers that have the given status: `processing`, `canceled`, `failed`, `posted`, or `returned`.","in":"query","name":"status","required":false,"schema":{"enum":["canceled","failed","posted","processing","returned"],"type":"string"},"style":"form","index$":5}]},"GET /v1/treasury/outbound_transfers/{outbound_transfer}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"outbound_transfer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const outbound_transfer_ref01_ent = client.OutboundTransfer()
    let outbound_transfer_ref01_data = setup.data.new.outbound_transfer['outbound_transfer_ref01']

    outbound_transfer_ref01_data = (await outbound_transfer_ref01_ent.create(outbound_transfer_ref01_data)).data()
    assert(null != outbound_transfer_ref01_data.id)


    // LIST
    const outbound_transfer_ref01_match: any = {}

    const outbound_transfer_ref01_list = (await outbound_transfer_ref01_ent.list(outbound_transfer_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(outbound_transfer_ref01_list, { id: outbound_transfer_ref01_data.id })))


    // LOAD
    const outbound_transfer_ref01_match_dt0: any = {}
    outbound_transfer_ref01_match_dt0.id = outbound_transfer_ref01_data.id
    const outbound_transfer_ref01_data_dt0 = (await outbound_transfer_ref01_ent.load(outbound_transfer_ref01_match_dt0)).data()
    assert(outbound_transfer_ref01_data_dt0.id === outbound_transfer_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/outbound_transfer/OutboundTransferTestData.json')

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
    ['outbound_transfer01','outbound_transfer02','outbound_transfer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_OUTBOUND_TRANSFER_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_OUTBOUND_TRANSFER_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_OUTBOUND_TRANSFER_ENTID']
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
  
