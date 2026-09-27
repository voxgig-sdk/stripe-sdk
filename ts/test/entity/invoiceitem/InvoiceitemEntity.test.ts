

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


describe('InvoiceitemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Invoiceitem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'invoiceitem.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"Amount (in the `currency` specified) of the invoice item.","t":"`$INTEGER`","key$":"amount","index$":0},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":1},"customer":{"a":true,"h":"Customer","n":"customer","r":true,"sh":"The ID of the customer to bill for this invoice item.","t":"`$ANY`","union":{"branches":17,"count":105131,"depth":64},"key$":"customer","index$":2},"customer_account":{"a":true,"h":"Customer Account","n":"customer_account","r":false,"sh":"The ID of the account to bill for this invoice item.","t":"`$STRING`","key$":"customer_account","index$":3},"date":{"a":true,"fo":"unix-time","h":"Date","n":"date","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"date","index$":4},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"An arbitrary string attached to the object.","t":"`$STRING`","key$":"description","index$":5},"discountable":{"a":true,"h":"Discountable","n":"discountable","r":true,"sh":"If true, discounts will apply to this invoice item.","t":"`$BOOLEAN`","key$":"discountable","index$":6},"discounts":{"a":true,"h":"Discounts","n":"discounts","r":false,"sh":"The discounts which apply to the invoice item.","t":"`$ARRAY`","union":{"branches":3,"count":21,"depth":13},"key$":"discounts","index$":7},"frozen_fields":{"a":true,"h":"Frozen Fields","n":"frozen_fields","r":false,"sh":"Array of field names that can't be modified.","t":"`$ARRAY`","key$":"frozen_fields","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":9},"invoice":{"a":true,"h":"Invoice","n":"invoice","r":false,"sh":"The ID of the invoice this invoice item belongs to.","t":"`$ANY`","union":{"branches":17,"count":56716,"depth":64},"key$":"invoice","index$":10},"invoicing_rules":{"a":true,"h":"Invoicing Rules","n":"invoicing_rules","r":false,"sh":"The rules that control when this invoice item is eligible for invoicing.","t":"`$ARRAY`","key$":"invoicing_rules","index$":11},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":12},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":13},"net_amount":{"a":true,"h":"Net Amount","n":"net_amount","r":false,"sh":"The amount after discounts, but before credits and taxes.","t":"`$INTEGER`","key$":"net_amount","index$":14},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":15},"parent":{"a":true,"h":"Parent","n":"parent","r":false,"sh":"The parent that generated this invoice item.","t":"`$ANY`","key$":"parent","index$":16},"period":{"a":true,"h":"Period","n":"period","r":true,"t":"`$OBJECT`","key$":"period","index$":17},"pricing":{"a":true,"h":"Pricing","n":"pricing","r":false,"sh":"The pricing information of the invoice item.","t":"`$ANY`","union":{"branches":3,"count":13,"depth":16},"key$":"pricing","index$":18},"proration":{"a":true,"h":"Proration","n":"proration","r":true,"sh":"Whether the invoice item was created automatically as a proration adjustment when the customer switched plans.","t":"`$BOOLEAN`","key$":"proration","index$":19},"proration_details":{"a":true,"h":"Proration Details","n":"proration_details","r":true,"t":"`$OBJECT`","union":{"branches":3,"count":42,"depth":17},"key$":"proration_details","index$":20},"quantity":{"a":true,"h":"Quantity","n":"quantity","r":true,"sh":"Quantity of units for the invoice item in integer format, with any decimal precision truncated.","t":"`$INTEGER`","key$":"quantity","index$":21},"quantity_decimal":{"a":true,"fo":"decimal","h":"Quantity Decimal","n":"quantity_decimal","r":true,"sh":"Non-negative decimal with at most 12 decimal places.","t":"`$STRING`","key$":"quantity_decimal","index$":22},"tax_rates":{"a":true,"h":"Tax Rates","n":"tax_rates","r":false,"sh":"The tax rates which apply to the invoice item.","t":"`$ARRAY`","key$":"tax_rates","index$":23},"test_clock":{"a":true,"h":"Test Clock","n":"test_clock","r":false,"sh":"ID of the test clock this invoice item belongs to.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"test_clock","index$":24}},"id":{"field":"id","name":"id"},"name":"invoiceitem","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/invoiceitems/{invoiceitem}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"invoiceitem","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/invoiceitems/{invoiceitem}","q":{"exist":["id"]},"r":{"param":{"invoiceitem":"id"}},"s":[{"lit":"v1"},{"lit":"invoiceitems"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/invoiceitems","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/invoiceitems","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"invoiceitems"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/invoiceitems","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"customer","or":"customer","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"customer_account","or":"customer_account","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"invoice","or":"invoice","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"k":"query","n":"pending","or":"pending","r":false,"t":"`$BOOLEAN`","index$":7},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":8}]},"k":"http","m":"GET","o":"/v1/invoiceitems","q":{"exist":["created","customer","customer_account","ending_before","expand","invoice","limit","pending","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"invoiceitems"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/invoiceitems/{invoiceitem}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"invoiceitem","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/invoiceitems/{invoiceitem}","q":{"exist":["expand","id"]},"r":{"param":{"invoiceitem":"id"}},"s":[{"lit":"v1"},{"lit":"invoiceitems"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"invoiceitem","name__orig":"invoiceitem","Name":"Invoiceitem","name_":"invoiceitem","name-":"invoiceitem","NAME":"INVOICEITEM","index$":69}, {"active":true,"entity":"invoiceitem","key$":"BasicInvoiceitemFlow","kind":"basic","name":"BasicInvoiceitemFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"invoiceitem_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"invoiceitem_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"invoiceitem_ref01","srcdatavar":"invoiceitem_ref01_data","suffix":"_dt0"},"m":{"id":"invoiceitem01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-invoiceitem_ref01"}}],"index$":2}]}, 'Invoiceitem', {"POST /v1/invoiceitems/{invoiceitem}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"discounts":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"period":{"explode":true,"style":"deepObject"},"price_data":{"explode":true,"style":"deepObject"},"pricing":{"explode":true,"style":"deepObject"},"tax_code":{"explode":true,"style":"deepObject"},"tax_rates":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"description":"The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.","type":"integer"},"description":{"description":"An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.","maxLength":5000,"type":"string"},"discountable":{"description":"Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items. Cannot be set to true for prorations.","type":"boolean"},"discounts":{"anyOf":[{"items":{"properties":{},"title":"discounts_data_param","type":"object"},"type":"array"},{"enum":[""],"type":"string"}],"description":"The coupons, promotion codes & existing discounts which apply to the invoice item or invoice line item. Item discounts are applied before invoice discounts. Pass an empty string to remove previously-defined discounts."},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"invoicing_rules":{"description":"Pass an empty string to remove previously-defined invoicing rules. Setting invoicing rules is not supported.","enum":[""],"type":"string"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"period":{"description":"The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://docs.stripe.com/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://docs.stripe.com/revenue-recognition/methodology/subscriptions-and-invoicing) for details.","properties":{"end":{"format":"unix-time","type":"integer"},"start":{"format":"unix-time","type":"integer"}},"required":["end","start"],"title":"period","type":"object"},"price_data":{"description":"Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline.","properties":{"currency":{"format":"currency","type":"string"},"product":{"maxLength":5000,"type":"string"},"tax_behavior":{"enum":["exclusive","inclusive","unspecified"],"type":"string"},"unit_amount":{"type":"integer"},"unit_amount_decimal":{"format":"decimal","type":"string"}},"required":["currency","product"],"title":"one_time_price_data","type":"object"},"pricing":{"description":"The pricing information for the invoice item.","properties":{"price":{"maxLength":5000,"type":"string"}},"title":"pricing_param","type":"object"},"quantity":{"description":"Non-negative integer. The quantity of units for the invoice item. Use `quantity_decimal` instead to provide decimal precision. This field will be deprecated in favor of `quantity_decimal` in a future version.","type":"integer"},"quantity_decimal":{"description":"Non-negative decimal with at most 12 decimal places. The quantity of units for the line item.","format":"decimal","type":"string"},"tax_behavior":{"description":"Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.","enum":["exclusive","inclusive","unspecified"],"type":"string"},"tax_code":{"anyOf":[{"type":"string"},{"enum":[""],"type":"string"}],"description":"A [tax code](https://docs.stripe.com/tax/tax-categories) ID."},"tax_rates":{"anyOf":[{"items":{"maxLength":5000,"type":"string"},"type":"array"},{"enum":[""],"type":"string"}],"description":"The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item. Pass an empty string to remove previously-defined tax rates."},"unit_amount_decimal":{"description":"The decimal unit amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. This `unit_amount_decimal` will be multiplied by the quantity to get the full amount. Passing in a negative `unit_amount_decimal` will reduce the `amount_due` on the invoice. Accepts at most 12 decimal places.","format":"decimal","type":"string"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"invoiceitem","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/invoiceitems":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"discounts":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"period":{"explode":true,"style":"deepObject"},"price_data":{"explode":true,"style":"deepObject"},"pricing":{"explode":true,"style":"deepObject"},"tax_code":{"explode":true,"style":"deepObject"},"tax_rates":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"description":"The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. Passing in a negative `amount` will reduce the `amount_due` on the invoice.","type":"integer"},"currency":{"description":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).","format":"currency","type":"string"},"customer":{"description":"The ID of the customer to bill for this invoice item.","maxLength":5000,"type":"string"},"customer_account":{"description":"The ID of the account representing the customer to bill for this invoice item.","maxLength":5000,"type":"string"},"description":{"description":"An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.","maxLength":5000,"type":"string"},"discountable":{"description":"Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items.","type":"boolean"},"discounts":{"anyOf":[{"items":{"properties":{},"title":"discounts_data_param","type":"object"},"type":"array"},{"enum":[""],"type":"string"}],"description":"The coupons and promotion codes to redeem into discounts for the invoice item or invoice line item."},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"invoice":{"description":"The ID of an existing invoice to add this invoice item to. For subscription invoices, when left blank, the invoice item will be added to the next upcoming scheduled invoice. For standalone invoices, the invoice item won't be automatically added unless you pass `pending_invoice_item_behavior: 'include'` when creating the invoice. This is useful when adding invoice items in response to an invoice.created webhook. You can only add invoice items to draft invoices and there is a maximum of 250 items per invoice.","maxLength":5000,"type":"string"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"period":{"description":"The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://docs.stripe.com/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://docs.stripe.com/revenue-recognition/methodology/subscriptions-and-invoicing) for details.","properties":{"end":{"format":"unix-time","type":"integer"},"start":{"format":"unix-time","type":"integer"}},"required":["end","start"],"title":"period","type":"object"},"price_data":{"description":"Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline.","properties":{"currency":{"format":"currency","type":"string"},"product":{"maxLength":5000,"type":"string"},"tax_behavior":{"enum":["exclusive","inclusive","unspecified"],"type":"string"},"unit_amount":{"type":"integer"},"unit_amount_decimal":{"format":"decimal","type":"string"}},"required":["currency","product"],"title":"one_time_price_data","type":"object"},"pricing":{"description":"The pricing information for the invoice item.","properties":{"price":{"maxLength":5000,"type":"string"}},"title":"pricing_param","type":"object"},"quantity":{"description":"Non-negative integer. The quantity of units for the invoice item. Use `quantity_decimal` instead to provide decimal precision. This field will be deprecated in favor of `quantity_decimal` in a future version.","type":"integer"},"quantity_decimal":{"description":"Non-negative decimal with at most 12 decimal places. The quantity of units for the invoice item.","format":"decimal","type":"string"},"subscription":{"description":"The ID of a subscription to add this invoice item to. When left blank, the invoice item is added to the next upcoming scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription.","maxLength":5000,"type":"string"},"tax_behavior":{"description":"Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.","enum":["exclusive","inclusive","unspecified"],"type":"string"},"tax_code":{"anyOf":[{"type":"string"},{"enum":[""],"type":"string"}],"description":"A [tax code](https://docs.stripe.com/tax/tax-categories) ID."},"tax_rates":{"description":"The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.","items":{"maxLength":5000,"type":"string"},"type":"array"},"unit_amount_decimal":{"description":"The decimal unit amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. This `unit_amount_decimal` will be multiplied by the quantity to get the full amount. Passing in a negative `unit_amount_decimal` will reduce the `amount_due` on the invoice. Accepts at most 12 decimal places.","format":"decimal","type":"string"}},"type":"object"}}},"required":false},"parameters":[]},"GET /v1/invoiceitems":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return invoice items that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":0},{"description":"The identifier of the customer whose invoice items to return. If none is provided, returns all invoice items.","in":"query","name":"customer","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"The identifier of the account representing the customer whose invoice items to return. If none is provided, returns all invoice items.","in":"query","name":"customer_account","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":4},{"description":"Only return invoice items belonging to this invoice. If none is provided, all invoice items will be returned. If specifying an invoice, no customer identifier is needed.","in":"query","name":"invoice","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":6},{"description":"Set to `true` to only show pending invoice items, which are not yet attached to any invoices. Set to `false` to only show invoice items already attached to invoices. If unspecified, no filter is applied.","in":"query","name":"pending","required":false,"schema":{"type":"boolean"},"style":"form","index$":7},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":8}]},"GET /v1/invoiceitems/{invoiceitem}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"invoiceitem","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const invoiceitem_ref01_ent = client.Invoiceitem()
    let invoiceitem_ref01_data = setup.data.new.invoiceitem['invoiceitem_ref01']

    invoiceitem_ref01_data = (await invoiceitem_ref01_ent.create(invoiceitem_ref01_data)).data()
    assert(null != invoiceitem_ref01_data.id)


    // LIST
    const invoiceitem_ref01_match: any = {}

    const invoiceitem_ref01_list = (await invoiceitem_ref01_ent.list(invoiceitem_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(invoiceitem_ref01_list, { id: invoiceitem_ref01_data.id })))


    // LOAD
    const invoiceitem_ref01_match_dt0: any = {}
    invoiceitem_ref01_match_dt0.id = invoiceitem_ref01_data.id
    const invoiceitem_ref01_data_dt0 = (await invoiceitem_ref01_ent.load(invoiceitem_ref01_match_dt0)).data()
    assert(invoiceitem_ref01_data_dt0.id === invoiceitem_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/invoiceitem/InvoiceitemTestData.json')

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
    ['invoiceitem01','invoiceitem02','invoiceitem03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_INVOICEITEM_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_INVOICEITEM_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_INVOICEITEM_ENTID']
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
  
