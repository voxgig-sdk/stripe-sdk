
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


describe('CreditNoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.CreditNote()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax.","t":"`$INTEGER`","key$":"amount","index$":0},"amount_shipping":{"a":true,"h":"Amount Shipping","n":"amount_shipping","r":true,"sh":"This is the sum of all the shipping amounts.","t":"`$INTEGER`","key$":"amount_shipping","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":3},"customer":{"a":true,"h":"Customer","n":"customer","r":true,"sh":"ID of the customer.","t":"`$ANY`","union":{"branches":17,"count":111742,"depth":64},"key$":"customer","index$":4},"customer_account":{"a":true,"h":"Customer Account","n":"customer_account","r":false,"sh":"ID of the account representing the customer.","t":"`$STRING`","key$":"customer_account","index$":5},"customer_balance_transaction":{"a":true,"h":"Customer Balance Transaction","n":"customer_balance_transaction","r":false,"sh":"Customer balance transaction related to this credit note.","t":"`$ANY`","union":{"branches":17,"count":237055,"depth":64},"key$":"customer_balance_transaction","index$":6},"discount_amount":{"a":true,"h":"Discount Amount","n":"discount_amount","r":true,"sh":"The integer amount in cents (or local equivalent) representing the total amount of discount that was credited.","t":"`$INTEGER`","key$":"discount_amount","index$":7},"discount_amounts":{"a":true,"h":"Discount Amounts","n":"discount_amounts","r":true,"sh":"The aggregate amounts calculated per discount for all line items.","t":"`$ARRAY`","union":{"branches":3,"count":42,"depth":15},"key$":"discount_amounts","index$":8},"effective_at":{"a":true,"fo":"unix-time","h":"Effective At","n":"effective_at","r":false,"sh":"The date when this credit note is in effect.","t":"`$INTEGER`","key$":"effective_at","index$":9},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":10},"invoice":{"a":true,"h":"Invoice","n":"invoice","r":true,"sh":"ID of the invoice.","t":"`$ANY`","union":{"branches":17,"count":66175,"depth":64},"key$":"invoice","index$":11},"lines":{"a":true,"h":"Lines","n":"lines","r":true,"sh":"Line items that make up the credit note","t":"`$OBJECT`","union":{"branches":3,"count":106,"depth":21},"key$":"lines","index$":12},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":13},"memo":{"a":true,"h":"Memo","n":"memo","r":false,"sh":"Customer-facing text that appears on the credit note PDF.","t":"`$STRING`","key$":"memo","index$":14},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":15},"number":{"a":true,"h":"Number","n":"number","r":true,"sh":"A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice.","t":"`$STRING`","key$":"number","index$":16},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":17},"out_of_band_amount":{"a":true,"h":"Out Of Band Amount","n":"out_of_band_amount","r":false,"sh":"Amount that was credited outside of Stripe.","t":"`$INTEGER`","key$":"out_of_band_amount","index$":18},"pdf":{"a":true,"h":"Pdf","n":"pdf","r":true,"sh":"The link to download the PDF of the credit note.","t":"`$STRING`","key$":"pdf","index$":19},"post_payment_amount":{"a":true,"h":"Post Payment Amount","n":"post_payment_amount","r":true,"sh":"The amount of the credit note that was refunded to the customer, credited to the customer's balance, credited outside of Stripe, or any combination thereof.","t":"`$INTEGER`","key$":"post_payment_amount","index$":20},"pre_payment_amount":{"a":true,"h":"Pre Payment Amount","n":"pre_payment_amount","r":true,"sh":"The amount of the credit note by which the invoice's `amount_remaining` and `amount_due` were reduced.","t":"`$INTEGER`","key$":"pre_payment_amount","index$":21},"pretax_credit_amounts":{"a":true,"h":"Pretax Credit Amounts","n":"pretax_credit_amounts","r":true,"sh":"The pretax credit amounts (ex: discount, credit grants, etc) for all line items.","t":"`$ARRAY`","union":{"branches":3,"count":63,"depth":16},"key$":"pretax_credit_amounts","index$":22},"reason":{"a":true,"h":"Reason","n":"reason","r":false,"sh":"Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`","t":"`$STRING`","key$":"reason","index$":23},"refunds":{"a":true,"h":"Refunds","n":"refunds","r":true,"sh":"Refunds related to this credit note.","t":"`$ARRAY`","union":{"branches":3,"count":115,"depth":18},"key$":"refunds","index$":24},"shipping_cost":{"a":true,"h":"Shipping Cost","n":"shipping_cost","r":false,"sh":"The details of the cost of shipping, including the ShippingRate applied to the invoice.","t":"`$ANY`","union":{"branches":2,"count":3,"depth":9},"key$":"shipping_cost","index$":25},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Status of this credit note, one of `issued` or `void`.","t":"`$STRING`","key$":"status","index$":26},"subtotal":{"a":true,"h":"Subtotal","n":"subtotal","r":true,"sh":"The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts.","t":"`$INTEGER`","key$":"subtotal","index$":27},"subtotal_excluding_tax":{"a":true,"h":"Subtotal Excluding Tax","n":"subtotal_excluding_tax","r":false,"sh":"The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts.","t":"`$INTEGER`","key$":"subtotal_excluding_tax","index$":28},"total":{"a":true,"h":"Total","n":"total","r":true,"sh":"The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount.","t":"`$INTEGER`","key$":"total","index$":29},"total_excluding_tax":{"a":true,"h":"Total Excluding Tax","n":"total_excluding_tax","r":false,"sh":"The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts.","t":"`$INTEGER`","key$":"total_excluding_tax","index$":30},"total_taxes":{"a":true,"h":"Total Taxes","n":"total_taxes","r":false,"sh":"The aggregate tax information for all line items.","t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":7},"key$":"total_taxes","index$":31},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Type of this credit note, one of `pre_payment` or `post_payment`.","t":"`$STRING`","key$":"type","index$":32},"voided_at":{"a":true,"fo":"unix-time","h":"Voided At","n":"voided_at","r":false,"sh":"The time that the credit note was voided.","t":"`$INTEGER`","key$":"voided_at","index$":33}},"id":{"field":"id","name":"id"},"name":"credit_note","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/credit_notes/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/credit_notes/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"credit_notes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/credit_notes/{id}/void","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/credit_notes/{id}/void","q":{"$action":"void","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"credit_notes"},{"var":"id"},{"lit":"void"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/credit_notes","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/credit_notes","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"credit_notes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/credit_notes/preview","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"amount","or":"amount","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"credit_amount","or":"credit_amount","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"effective_at","or":"effective_at","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"email_type","or":"email_type","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"invoice","or":"invoice","r":true,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"line","or":"line","r":false,"t":"`$ARRAY`","index$":6},{"a":true,"k":"query","n":"memo","or":"memo","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"metadata","or":"metadata","r":false,"t":"`$OBJECT`","index$":8},{"a":true,"k":"query","n":"out_of_band_amount","or":"out_of_band_amount","r":false,"t":"`$INTEGER`","index$":9},{"a":true,"k":"query","n":"reason","or":"reason","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"refund","or":"refund","r":false,"t":"`$ARRAY`","index$":11},{"a":true,"k":"query","n":"refund_amount","or":"refund_amount","r":false,"t":"`$INTEGER`","index$":12},{"a":true,"k":"query","n":"shipping_cost","or":"shipping_cost","r":false,"t":"`$OBJECT`","index$":13}]},"k":"http","m":"GET","o":"/v1/credit_notes/preview","q":{"$action":"preview","exist":["amount","credit_amount","effective_at","email_type","expand","invoice","line","memo","metadata","out_of_band_amount","reason","refund","refund_amount","shipping_cost"]},"r":{},"s":[{"lit":"v1"},{"lit":"credit_notes"},{"lit":"preview"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /v1/credit_notes","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"customer","or":"customer","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"customer_account","or":"customer_account","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"invoice","or":"invoice","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/v1/credit_notes","q":{"exist":["created","customer","customer_account","ending_before","expand","invoice","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"credit_notes"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/credit_notes/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/credit_notes/{id}","q":{"exist":["expand","id"]},"r":{},"s":[{"lit":"v1"},{"lit":"credit_notes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"credit_note","name__orig":"credit_note","Name":"CreditNote","name_":"credit_note","name-":"credit-note","NAME":"CREDIT_NOTE","index$":30}, {"active":true,"entity":"credit_note","key$":"BasicCreditNoteFlow","kind":"basic","name":"BasicCreditNoteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"credit_note_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"credit_note_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"credit_note_ref01","srcdatavar":"credit_note_ref01_data","suffix":"_dt0"},"m":{"id":"credit_note01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-credit_note_ref01"}}],"index$":2}]}, 'CreditNote', {"POST /v1/credit_notes/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"memo":{"description":"Credit note memo.","maxLength":5000,"type":"string"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/credit_notes/{id}/void":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/credit_notes":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"lines":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"refunds":{"explode":true,"style":"deepObject"},"shipping_cost":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"description":"The integer amount in cents (or local equivalent) representing the total amount of the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.","type":"integer"},"credit_amount":{"description":"The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.","type":"integer"},"effective_at":{"description":"The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.","format":"unix-time","type":"integer"},"email_type":{"description":"Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.","enum":["credit_note","none"],"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"invoice":{"description":"ID of the invoice.","maxLength":5000,"type":"string"},"lines":{"description":"Line items that make up the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.","items":{"properties":{"amount":{"type":"integer"},"description":{"maxLength":5000,"type":"string"},"invoice_line_item":{"maxLength":5000,"type":"string"},"metadata":{"additionalProperties":{},"type":"object"},"quantity":{"type":"integer"},"tax_amounts":{"anyOf":[]},"tax_rates":{"anyOf":[]},"type":{"enum":[],"type":"string"},"unit_amount":{"type":"integer"},"unit_amount_decimal":{"format":"decimal","type":"string"}},"required":["type"],"title":"credit_note_line_item_params","type":"object"},"type":"array"},"memo":{"description":"The credit note's memo appears on the credit note PDF.","maxLength":5000,"type":"string"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"out_of_band_amount":{"description":"The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.","type":"integer"},"reason":{"description":"Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`","enum":["duplicate","fraudulent","order_change","product_unsatisfactory"],"type":"string","x-stripeBypassValidation":true},"refund_amount":{"description":"The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.","type":"integer"},"refunds":{"description":"Refunds to link to this credit note.","items":{"properties":{"amount_refunded":{"type":"integer"},"payment_record_refund":{"properties":{},"required":[],"title":"payment_record_refund_params","type":"object"},"refund":{"type":"string"},"type":{"enum":[],"type":"string"}},"title":"credit_note_refund_params","type":"object"},"type":"array"},"shipping_cost":{"description":"When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.","properties":{"shipping_rate":{"maxLength":5000,"type":"string"}},"title":"credit_note_shipping_cost","type":"object"}},"required":["invoice"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/credit_notes/preview":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"The integer amount in cents (or local equivalent) representing the total amount of the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.","in":"query","name":"amount","required":false,"schema":{"type":"integer"},"style":"form","index$":0},{"description":"The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.","in":"query","name":"credit_amount","required":false,"schema":{"type":"integer"},"style":"form","index$":1},{"description":"The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.","in":"query","name":"effective_at","required":false,"schema":{"format":"unix-time","type":"integer"},"style":"form","index$":2},{"description":"Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.","in":"query","name":"email_type","required":false,"schema":{"enum":["credit_note","none"],"type":"string"},"style":"form","index$":3},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":4},{"description":"ID of the invoice.","in":"query","name":"invoice","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5},{"description":"Line items that make up the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.","explode":true,"in":"query","name":"lines","required":false,"schema":{"items":{"properties":{"amount":{"type":"integer"},"description":{"maxLength":5000,"type":"string"},"invoice_line_item":{"maxLength":5000,"type":"string"},"metadata":{"additionalProperties":{"type":"string"},"type":"object"},"quantity":{"type":"integer"},"tax_amounts":{"anyOf":[{"items":{"properties":{},"required":[],"title":"tax_amount_with_tax_rate_param","type":"object"},"type":"array"},{"enum":[""],"type":"string"}]},"tax_rates":{"anyOf":[{"items":{"maxLength":5000,"type":"string"},"type":"array"},{"enum":[""],"type":"string"}]},"type":{"enum":["custom_line_item","invoice_line_item"],"type":"string"},"unit_amount":{"type":"integer"},"unit_amount_decimal":{"format":"decimal","type":"string"}},"required":["type"],"title":"credit_note_line_item_params","type":"object"},"type":"array"},"style":"deepObject","index$":6},{"description":"The credit note's memo appears on the credit note PDF.","in":"query","name":"memo","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":7},{"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","explode":true,"in":"query","name":"metadata","required":false,"schema":{"additionalProperties":{"type":"string"},"type":"object"},"style":"deepObject","index$":8},{"description":"The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.","in":"query","name":"out_of_band_amount","required":false,"schema":{"type":"integer"},"style":"form","index$":9},{"description":"Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`","in":"query","name":"reason","required":false,"schema":{"enum":["duplicate","fraudulent","order_change","product_unsatisfactory"],"type":"string","x-stripeBypassValidation":true},"style":"form","index$":10},{"description":"The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.","in":"query","name":"refund_amount","required":false,"schema":{"type":"integer"},"style":"form","index$":11},{"description":"Refunds to link to this credit note.","explode":true,"in":"query","name":"refunds","required":false,"schema":{"items":{"properties":{"amount_refunded":{"type":"integer"},"payment_record_refund":{"properties":{"payment_record":{"maxLength":5000,"type":"string"},"refund_group":{"maxLength":5000,"type":"string"}},"required":["payment_record","refund_group"],"title":"payment_record_refund_params","type":"object"},"refund":{"type":"string"},"type":{"enum":["payment_record_refund","refund"],"type":"string"}},"title":"credit_note_refund_params","type":"object"},"type":"array"},"style":"deepObject","index$":12},{"description":"When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.","explode":true,"in":"query","name":"shipping_cost","required":false,"schema":{"properties":{"shipping_rate":{"maxLength":5000,"type":"string"}},"title":"credit_note_shipping_cost","type":"object"},"style":"deepObject","index$":13}]},"GET /v1/credit_notes":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return credit notes that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":0},{"description":"Only return credit notes for the customer specified by this customer ID.","in":"query","name":"customer","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Only return credit notes for the account representing the customer specified by this account ID.","in":"query","name":"customer_account","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":4},{"description":"Only return credit notes for the invoice specified by this invoice ID.","in":"query","name":"invoice","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":6},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":7}]},"GET /v1/credit_notes/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const credit_note_ref01_ent = client.CreditNote()
    let credit_note_ref01_data = setup.data.new.credit_note['credit_note_ref01']

    credit_note_ref01_data = (await credit_note_ref01_ent.create(credit_note_ref01_data)).data()
    assert(null != credit_note_ref01_data.id)


    // LIST
    const credit_note_ref01_match = {}

    const credit_note_ref01_list = (await credit_note_ref01_ent.list(credit_note_ref01_match)).map((e) => e.data())

    assert(!isempty(select(credit_note_ref01_list, { id: credit_note_ref01_data.id })))


    // LOAD
    const credit_note_ref01_match_dt0 = {}
    credit_note_ref01_match_dt0.id = credit_note_ref01_data.id
    const credit_note_ref01_data_dt0 = (await credit_note_ref01_ent.load(credit_note_ref01_match_dt0)).data()
    assert(credit_note_ref01_data_dt0.id === credit_note_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/credit_note/CreditNoteTestData.json')

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
    ['credit_note01','credit_note02','credit_note03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_CREDIT_NOTE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_CREDIT_NOTE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_CREDIT_NOTE_ENTID']
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
  
