

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


describe('LineEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Line()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'line.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"The amount, in cents (or local equivalent).","t":"`$INTEGER`","key$":"amount","index$":0},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"An arbitrary string attached to the object.","t":"`$STRING`","key$":"description","index$":2},"discount_amount":{"a":true,"h":"Discount Amount","n":"discount_amount","r":true,"sh":"The integer amount in cents (or local equivalent) representing the discount being credited for this line item.","t":"`$INTEGER`","key$":"discount_amount","index$":3},"discount_amounts":{"a":true,"h":"Discount Amounts","n":"discount_amounts","op":{"list":{"req":true,"type":"`$ARRAY`"}},"r":false,"sh":"The amount of discount calculated per discount for this line item.","t":"`$ARRAY`","union":{"branches":3,"count":42,"depth":15},"key$":"discount_amounts","index$":4},"discountable":{"a":true,"h":"Discountable","n":"discountable","r":true,"sh":"If true, discounts will apply to this line item.","t":"`$BOOLEAN`","key$":"discountable","index$":5},"discounts":{"a":true,"h":"Discounts","n":"discounts","r":true,"sh":"The discounts applied to the invoice line item.","t":"`$ARRAY`","union":{"branches":3,"count":21,"depth":13},"key$":"discounts","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":7},"invoice":{"a":true,"h":"Invoice","n":"invoice","r":false,"sh":"The ID of the invoice that contains this line item.","t":"`$STRING`","key$":"invoice","index$":8},"invoice_line_item":{"a":true,"h":"Invoice Line Item","n":"invoice_line_item","r":false,"sh":"ID of the invoice line item being credited","t":"`$STRING`","key$":"invoice_line_item","index$":9},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":10},"metadata":{"a":true,"h":"Metadata","n":"metadata","op":{"list":{"req":false,"type":"`$OBJECT`"}},"r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":11},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":12},"parent":{"a":true,"h":"Parent","n":"parent","r":false,"sh":"The parent that generated this line item.","t":"`$ANY`","key$":"parent","index$":13},"period":{"a":true,"h":"Period","n":"period","r":true,"t":"`$OBJECT`","key$":"period","index$":14},"pretax_credit_amounts":{"a":true,"h":"Pretax Credit Amounts","n":"pretax_credit_amounts","op":{"list":{"req":true,"type":"`$ARRAY`"}},"r":false,"sh":"Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item.","t":"`$ARRAY`","union":{"branches":3,"count":63,"depth":16},"key$":"pretax_credit_amounts","index$":15},"pricing":{"a":true,"h":"Pricing","n":"pricing","r":false,"sh":"The pricing information of the line item.","t":"`$ANY`","union":{"branches":3,"count":13,"depth":16},"key$":"pricing","index$":16},"quantity":{"a":true,"h":"Quantity","n":"quantity","r":false,"sh":"Quantity of units for the invoice line item in integer format, with any decimal precision truncated.","t":"`$INTEGER`","key$":"quantity","index$":17},"quantity_decimal":{"a":true,"fo":"decimal","h":"Quantity Decimal","n":"quantity_decimal","r":false,"sh":"Non-negative decimal with at most 12 decimal places.","t":"`$STRING`","key$":"quantity_decimal","index$":18},"subscription":{"a":true,"h":"Subscription","n":"subscription","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"subscription","index$":19},"subtotal":{"a":true,"h":"Subtotal","n":"subtotal","r":true,"sh":"The subtotal of the line item, in cents (or local equivalent), before any discounts or taxes.","t":"`$INTEGER`","key$":"subtotal","index$":20},"tax_rates":{"a":true,"h":"Tax Rates","n":"tax_rates","r":true,"sh":"The tax rates which apply to the line item.","t":"`$ARRAY`","key$":"tax_rates","index$":21},"taxes":{"a":true,"h":"Taxes","n":"taxes","r":false,"sh":"The tax information of the line item.","t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":7},"key$":"taxes","index$":22},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`.","t":"`$STRING`","key$":"type","index$":23},"unit_amount":{"a":true,"h":"Unit Amount","n":"unit_amount","r":false,"sh":"The cost of each unit of product being credited.","t":"`$INTEGER`","key$":"unit_amount","index$":24},"unit_amount_decimal":{"a":true,"fo":"decimal","h":"Unit Amount Decimal","n":"unit_amount_decimal","r":false,"sh":"Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.","t":"`$STRING`","key$":"unit_amount_decimal","index$":25}},"id":{"field":"id","name":"id"},"name":"line","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/invoices/{invoice}/lines/{line_item_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"line_item_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"invoice_id","or":"invoice","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/invoices/{invoice}/lines/{line_item_id}","q":{"exist":["id","invoice_id"]},"r":{"param":{"invoice":"invoice_id","line_item_id":"id"}},"s":[{"lit":"v1"},{"lit":"invoices"},{"var":"invoice_id"},{"lit":"lines"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/credit_notes/preview/lines","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"amount","or":"amount","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"credit_amount","or":"credit_amount","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"effective_at","or":"effective_at","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"email_type","or":"email_type","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":5},{"a":true,"k":"query","n":"invoice","or":"invoice","r":true,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":7},{"a":true,"k":"query","n":"line","or":"line","r":false,"t":"`$ARRAY`","index$":8},{"a":true,"k":"query","n":"memo","or":"memo","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"metadata","or":"metadata","r":false,"t":"`$OBJECT`","index$":10},{"a":true,"k":"query","n":"out_of_band_amount","or":"out_of_band_amount","r":false,"t":"`$INTEGER`","index$":11},{"a":true,"k":"query","n":"reason","or":"reason","r":false,"t":"`$STRING`","index$":12},{"a":true,"k":"query","n":"refund","or":"refund","r":false,"t":"`$ARRAY`","index$":13},{"a":true,"k":"query","n":"refund_amount","or":"refund_amount","r":false,"t":"`$INTEGER`","index$":14},{"a":true,"k":"query","n":"shipping_cost","or":"shipping_cost","r":false,"t":"`$OBJECT`","index$":15},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":16}]},"k":"http","m":"GET","o":"/v1/credit_notes/preview/lines","q":{"exist":["amount","credit_amount","effective_at","email_type","ending_before","expand","invoice","limit","line","memo","metadata","out_of_band_amount","reason","refund","refund_amount","shipping_cost","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"credit_notes"},{"lit":"preview"},{"lit":"lines"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /v1/invoices/{invoice}/lines","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"invoice_id","or":"invoice","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/invoices/{invoice}/lines","q":{"exist":["ending_before","expand","invoice_id","limit","starting_after"]},"r":{"param":{"invoice":"invoice_id"}},"s":[{"lit":"v1"},{"lit":"invoices"},{"var":"invoice_id"},{"lit":"lines"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.invoice"]]},"key$":"line","name__orig":"line","Name":"Line","name_":"line","name-":"line","NAME":"LINE","index$":70}, {"active":true,"entity":"line","key$":"BasicLineFlow","kind":"basic","name":"BasicLineFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"line_ref01"},"m":{"invoice_id":"invoice01","line_item_id":"line_item01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"invoice_id":"invoice01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"line_ref01"}}],"index$":1}]}, 'Line', {"POST /v1/invoices/{invoice}/lines/{line_item_id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"discounts":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"period":{"explode":true,"style":"deepObject"},"price_data":{"explode":true,"style":"deepObject"},"pricing":{"explode":true,"style":"deepObject"},"tax_amounts":{"explode":true,"style":"deepObject"},"tax_rates":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"description":"The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.","type":"integer"},"description":{"description":"An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.","maxLength":5000,"type":"string"},"discountable":{"description":"Controls whether discounts apply to this line item. Defaults to false for prorations or negative line items, and true for all other line items. Cannot be set to true for prorations.","type":"boolean"},"discounts":{"anyOf":[{"items":{"properties":{},"title":"discounts_data_param","type":"object"},"type":"array"},{"enum":[""],"type":"string"}],"description":"The coupons, promotion codes & existing discounts which apply to the line item. Item discounts are applied before invoice discounts. Pass an empty string to remove previously-defined discounts."},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. For [type=subscription](/api/invoices/line_item) line items, the incoming metadata specified on the request is directly used to set this value, in contrast to [type=invoiceitem](/api/invoices/line_item) line items, where any existing metadata on the invoice line is merged with the incoming data."},"period":{"description":"The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://docs.stripe.com/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://docs.stripe.com/revenue-recognition/methodology/subscriptions-and-invoicing) for details.","properties":{"end":{"format":"unix-time","type":"integer"},"start":{"format":"unix-time","type":"integer"}},"required":["end","start"],"title":"period","type":"object"},"price_data":{"description":"Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline.","properties":{"currency":{"format":"currency","type":"string"},"product":{"maxLength":5000,"type":"string"},"product_data":{"properties":{"description":{},"images":{},"metadata":{},"name":{},"tax_code":{},"tax_details":{},"unit_label":{}},"required":["name"],"title":"product_data","type":"object"},"tax_behavior":{"enum":["exclusive","inclusive","unspecified"],"type":"string"},"unit_amount":{"type":"integer"},"unit_amount_decimal":{"format":"decimal","type":"string"}},"required":["currency"],"title":"one_time_price_data_with_product_data","type":"object"},"pricing":{"description":"The pricing information for the invoice item.","properties":{"price":{"maxLength":5000,"type":"string"}},"title":"pricing_param","type":"object"},"quantity":{"description":"Non-negative integer. The quantity of units for the line item. Use `quantity_decimal` instead to provide decimal precision. This field will be deprecated in favor of `quantity_decimal` in a future version.","type":"integer"},"quantity_decimal":{"description":"Non-negative decimal with at most 12 decimal places. The quantity of units for the line item.","format":"decimal","type":"string"},"tax_amounts":{"anyOf":[{"items":{"properties":{},"required":[],"title":"tax_amount_param","type":"object"},"type":"array"},{"enum":[""],"type":"string"}],"description":"A list of up to 20 tax amounts for this line item. This can be useful if you calculate taxes on your own or use a third-party to calculate them. You cannot set tax amounts if any line item has [tax_rates](https://docs.stripe.com/api/invoices/line_item#invoice_line_item_object-tax_rates) or if the invoice has [default_tax_rates](https://docs.stripe.com/api/invoices/object#invoice_object-default_tax_rates) or uses [automatic tax](https://docs.stripe.com/tax/invoicing). Pass an empty string to remove previously defined tax amounts."},"tax_rates":{"anyOf":[{"items":{"maxLength":5000,"type":"string"},"type":"array"},{"enum":[""],"type":"string"}],"description":"The tax rates which apply to the line item. When set, the `default_tax_rates` on the invoice do not apply to this line item. Pass an empty string to remove previously-defined tax rates."}},"type":"object"}}},"required":false},"parameters":[{"description":"Invoice ID of line item","in":"path","name":"invoice","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Invoice line item ID","in":"path","name":"line_item_id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]},"GET /v1/credit_notes/preview/lines":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"The integer amount in cents (or local equivalent) representing the total amount of the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.","in":"query","name":"amount","required":false,"schema":{"type":"integer"},"style":"form","index$":0},{"description":"The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.","in":"query","name":"credit_amount","required":false,"schema":{"type":"integer"},"style":"form","index$":1},{"description":"The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.","in":"query","name":"effective_at","required":false,"schema":{"format":"unix-time","type":"integer"},"style":"form","index$":2},{"description":"Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.","in":"query","name":"email_type","required":false,"schema":{"enum":["credit_note","none"],"type":"string"},"style":"form","index$":3},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":5},{"description":"ID of the invoice.","in":"query","name":"invoice","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":7},{"description":"Line items that make up the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.","explode":true,"in":"query","name":"lines","required":false,"schema":{"items":{"properties":{"amount":{"type":"integer"},"description":{"maxLength":5000,"type":"string"},"invoice_line_item":{"maxLength":5000,"type":"string"},"metadata":{"additionalProperties":{"type":"string"},"type":"object"},"quantity":{"type":"integer"},"tax_amounts":{"anyOf":[{"items":{"properties":{},"required":[],"title":"tax_amount_with_tax_rate_param","type":"object"},"type":"array"},{"enum":[""],"type":"string"}]},"tax_rates":{"anyOf":[{"items":{"maxLength":5000,"type":"string"},"type":"array"},{"enum":[""],"type":"string"}]},"type":{"enum":["custom_line_item","invoice_line_item"],"type":"string"},"unit_amount":{"type":"integer"},"unit_amount_decimal":{"format":"decimal","type":"string"}},"required":["type"],"title":"credit_note_line_item_params","type":"object"},"type":"array"},"style":"deepObject","index$":8},{"description":"The credit note's memo appears on the credit note PDF.","in":"query","name":"memo","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":9},{"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","explode":true,"in":"query","name":"metadata","required":false,"schema":{"additionalProperties":{"type":"string"},"type":"object"},"style":"deepObject","index$":10},{"description":"The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.","in":"query","name":"out_of_band_amount","required":false,"schema":{"type":"integer"},"style":"form","index$":11},{"description":"Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`","in":"query","name":"reason","required":false,"schema":{"enum":["duplicate","fraudulent","order_change","product_unsatisfactory"],"type":"string","x-stripeBypassValidation":true},"style":"form","index$":12},{"description":"The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.","in":"query","name":"refund_amount","required":false,"schema":{"type":"integer"},"style":"form","index$":13},{"description":"Refunds to link to this credit note.","explode":true,"in":"query","name":"refunds","required":false,"schema":{"items":{"properties":{"amount_refunded":{"type":"integer"},"payment_record_refund":{"properties":{"payment_record":{"maxLength":5000,"type":"string"},"refund_group":{"maxLength":5000,"type":"string"}},"required":["payment_record","refund_group"],"title":"payment_record_refund_params","type":"object"},"refund":{"type":"string"},"type":{"enum":["payment_record_refund","refund"],"type":"string"}},"title":"credit_note_refund_params","type":"object"},"type":"array"},"style":"deepObject","index$":14},{"description":"When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.","explode":true,"in":"query","name":"shipping_cost","required":false,"schema":{"properties":{"shipping_rate":{"maxLength":5000,"type":"string"}},"title":"credit_note_shipping_cost","type":"object"},"style":"deepObject","index$":15},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":16}]},"GET /v1/invoices/{invoice}/lines":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"in":"path","name":"invoice","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const line_ref01_ent = client.Line()
    let line_ref01_data = setup.data.new.line['line_ref01']
    line_ref01_data['invoice_id'] = setup.idmap['invoice01']
    line_ref01_data['line_item_id'] = setup.idmap['line_item01']

    line_ref01_data = (await line_ref01_ent.create(line_ref01_data)).data()
    assert(null != line_ref01_data.id)


    // LIST
    const line_ref01_match: any = {}
    line_ref01_match['invoice_id'] = setup.idmap['invoice01']

    const line_ref01_list = (await line_ref01_ent.list(line_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(line_ref01_list, { id: line_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/line/LineTestData.json')

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
    ['line01','line02','line03','invoice01','invoice02','invoice03','line_item01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_LINE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_LINE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_LINE_ENTID']
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
  
