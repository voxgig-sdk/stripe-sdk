

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


describe('InboundTransferEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.InboundTransfer()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'inbound_transfer.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"Amount (in cents) transferred.","t":"`$INTEGER`","key$":"amount","index$":0},"cancelable":{"a":true,"h":"Cancelable","n":"cancelable","r":true,"sh":"Returns `true` if the InboundTransfer is able to be canceled.","t":"`$BOOLEAN`","key$":"cancelable","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":3},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"An arbitrary string attached to the object.","t":"`$STRING`","key$":"description","index$":4},"failure_details":{"a":true,"h":"Failure Details","n":"failure_details","r":false,"sh":"Details about this InboundTransfer's failure.","t":"`$ANY`","key$":"failure_details","index$":5},"financial_account":{"a":true,"h":"Financial Account","n":"financial_account","r":true,"sh":"The FinancialAccount that received the funds.","t":"`$STRING`","key$":"financial_account","index$":6},"hosted_regulatory_receipt_url":{"a":true,"h":"Hosted Regulatory Receipt Url","n":"hosted_regulatory_receipt_url","r":false,"sh":"A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.","t":"`$STRING`","key$":"hosted_regulatory_receipt_url","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":8},"linked_flows":{"a":true,"h":"Linked Flows","n":"linked_flows","r":true,"t":"`$OBJECT`","key$":"linked_flows","index$":9},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":10},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":11},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":12},"origin_payment_method":{"a":true,"h":"Origin Payment Method","n":"origin_payment_method","r":false,"sh":"The origin payment method to be debited for an InboundTransfer.","t":"`$STRING`","key$":"origin_payment_method","index$":13},"origin_payment_method_details":{"a":true,"h":"Origin Payment Method Details","n":"origin_payment_method_details","r":false,"sh":"Details about the PaymentMethod for an InboundTransfer.","t":"`$ANY`","union":{"branches":2,"count":3,"depth":11},"key$":"origin_payment_method_details","index$":14},"returned":{"a":true,"h":"Returned","n":"returned","r":false,"sh":"Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state.","t":"`$BOOLEAN`","key$":"returned","index$":15},"statement_descriptor":{"a":true,"h":"Statement Descriptor","n":"statement_descriptor","r":true,"sh":"Statement descriptor shown when funds are debited from the source.","t":"`$STRING`","key$":"statement_descriptor","index$":16},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`.","t":"`$STRING`","key$":"status","index$":17},"status_transitions":{"a":true,"h":"Status Transitions","n":"status_transitions","r":true,"t":"`$OBJECT`","key$":"status_transitions","index$":18},"transaction":{"a":true,"h":"Transaction","n":"transaction","r":false,"sh":"The Transaction associated with this object.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"transaction","index$":19}},"id":{"field":"id","name":"id"},"name":"inbound_transfer","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/treasury/inbound_transfers/{inbound_transfer}/cancel","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"inbound_transfer","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/treasury/inbound_transfers/{inbound_transfer}/cancel","q":{"$action":"cancel","exist":["id"]},"r":{"param":{"inbound_transfer":"id"}},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"inbound_transfers"},{"var":"id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/test_helpers/treasury/inbound_transfers/{id}/fail","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/test_helpers/treasury/inbound_transfers/{id}/fail","q":{"$action":"fail","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"treasury"},{"lit":"inbound_transfers"},{"var":"id"},{"lit":"fail"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/test_helpers/treasury/inbound_transfers/{id}/return","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/test_helpers/treasury/inbound_transfers/{id}/return","q":{"$action":"return","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"treasury"},{"lit":"inbound_transfers"},{"var":"id"},{"lit":"return"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /v1/test_helpers/treasury/inbound_transfers/{id}/succeed","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/test_helpers/treasury/inbound_transfers/{id}/succeed","q":{"$action":"succeed","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"test_helpers"},{"lit":"treasury"},{"lit":"inbound_transfers"},{"var":"id"},{"lit":"succeed"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /v1/treasury/inbound_transfers","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/treasury/inbound_transfers","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"inbound_transfers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/treasury/inbound_transfers","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"financial_account","or":"financial_account","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/v1/treasury/inbound_transfers","q":{"exist":["ending_before","expand","financial_account","limit","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"inbound_transfers"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/treasury/inbound_transfers/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/treasury/inbound_transfers/{id}","q":{"exist":["expand","id"]},"r":{},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"inbound_transfers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"inbound_transfer","name__orig":"inbound_transfer","Name":"InboundTransfer","name_":"inbound_transfer","name-":"inbound-transfer","NAME":"INBOUND_TRANSFER","index$":64}, {"active":true,"entity":"inbound_transfer","key$":"BasicInboundTransferFlow","kind":"basic","name":"BasicInboundTransferFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"inbound_transfer_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"inbound_transfer_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"inbound_transfer_ref01","srcdatavar":"inbound_transfer_ref01_data","suffix":"_dt0"},"m":{"id":"inbound_transfer01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-inbound_transfer_ref01"}}],"index$":2}]}, 'InboundTransfer', {"POST /v1/treasury/inbound_transfers/{inbound_transfer}/cancel":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"inbound_transfer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/test_helpers/treasury/inbound_transfers/{id}/fail":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"failure_details":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"failure_details":{"description":"Details about a failed InboundTransfer.","properties":{"code":{"enum":["account_closed","account_frozen","bank_account_restricted","bank_ownership_changed","debit_not_authorized","incorrect_account_holder_address","incorrect_account_holder_name","incorrect_account_holder_tax_id","insufficient_funds","invalid_account_number","invalid_currency","no_account","other"],"type":"string"}},"title":"failure_details_param","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/test_helpers/treasury/inbound_transfers/{id}/return":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/test_helpers/treasury/inbound_transfers/{id}/succeed":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/treasury/inbound_transfers":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"description":"Amount (in cents) to be transferred.","type":"integer"},"currency":{"description":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).","format":"currency","type":"string"},"description":{"description":"An arbitrary string attached to the object. Often useful for displaying to users.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"financial_account":{"description":"The FinancialAccount to send funds to.","type":"string"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"origin_payment_method":{"description":"The origin payment method to be debited for the InboundTransfer.","maxLength":5000,"type":"string"},"statement_descriptor":{"description":"The complete description that appears on your customers' statements. Maximum 10 characters. Can only include -#.$&*, spaces, and alphanumeric characters.","maxLength":10,"type":"string"}},"required":["amount","currency","financial_account","origin_payment_method"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/treasury/inbound_transfers":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"Returns objects associated with this FinancialAccount.","in":"query","name":"financial_account","required":true,"schema":{"type":"string"},"style":"form","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4},{"description":"Only return InboundTransfers that have the given status: `processing`, `succeeded`, `failed` or `canceled`.","in":"query","name":"status","required":false,"schema":{"enum":["canceled","failed","processing","succeeded"],"type":"string","x-stripeBypassValidation":true},"style":"form","index$":5}]},"GET /v1/treasury/inbound_transfers/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const inbound_transfer_ref01_ent = client.InboundTransfer()
    let inbound_transfer_ref01_data = setup.data.new.inbound_transfer['inbound_transfer_ref01']

    inbound_transfer_ref01_data = (await inbound_transfer_ref01_ent.create(inbound_transfer_ref01_data)).data()
    assert(null != inbound_transfer_ref01_data.id)


    // LIST
    const inbound_transfer_ref01_match: any = {}

    const inbound_transfer_ref01_list = (await inbound_transfer_ref01_ent.list(inbound_transfer_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(inbound_transfer_ref01_list, { id: inbound_transfer_ref01_data.id })))


    // LOAD
    const inbound_transfer_ref01_match_dt0: any = {}
    inbound_transfer_ref01_match_dt0.id = inbound_transfer_ref01_data.id
    const inbound_transfer_ref01_data_dt0 = (await inbound_transfer_ref01_ent.load(inbound_transfer_ref01_match_dt0)).data()
    assert(inbound_transfer_ref01_data_dt0.id === inbound_transfer_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/inbound_transfer/InboundTransferTestData.json')

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
    ['inbound_transfer01','inbound_transfer02','inbound_transfer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_INBOUND_TRANSFER_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_INBOUND_TRANSFER_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_INBOUND_TRANSFER_ENTID']
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
  
