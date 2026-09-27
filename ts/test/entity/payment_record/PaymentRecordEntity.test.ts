

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


describe('PaymentRecordEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.PaymentRecord()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'payment_record.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount","index$":0},"amount_authorized":{"a":true,"h":"Amount Authorized","n":"amount_authorized","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount_authorized","index$":1},"amount_canceled":{"a":true,"h":"Amount Canceled","n":"amount_canceled","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount_canceled","index$":2},"amount_failed":{"a":true,"h":"Amount Failed","n":"amount_failed","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount_failed","index$":3},"amount_guaranteed":{"a":true,"h":"Amount Guaranteed","n":"amount_guaranteed","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount_guaranteed","index$":4},"amount_refunded":{"a":true,"h":"Amount Refunded","n":"amount_refunded","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount_refunded","index$":5},"amount_requested":{"a":true,"h":"Amount Requested","n":"amount_requested","r":true,"sh":"A representation of an amount of money, consisting of an amount and a currency.","t":"`$OBJECT`","key$":"amount_requested","index$":6},"application":{"a":true,"h":"Application","n":"application","r":false,"sh":"ID of the Connect application that created the PaymentRecord.","t":"`$STRING`","key$":"application","index$":7},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":8},"customer_details":{"a":true,"h":"Customer Details","n":"customer_details","r":false,"sh":"Customer information for this payment.","t":"`$ANY`","key$":"customer_details","index$":9},"customer_presence":{"a":true,"h":"Customer Presence","n":"customer_presence","r":false,"sh":"Indicates whether the customer was present in your checkout flow during this payment.","t":"`$STRING`","key$":"customer_presence","index$":10},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"An arbitrary string attached to the object.","t":"`$STRING`","key$":"description","index$":11},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":12},"latest_payment_attempt_record":{"a":true,"h":"Latest Payment Attempt Record","n":"latest_payment_attempt_record","r":false,"sh":"ID of the latest Payment Attempt Record attached to this Payment Record.","t":"`$STRING`","key$":"latest_payment_attempt_record","index$":13},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":14},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":15},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":16},"payment_method_details":{"a":true,"h":"Payment Method Details","n":"payment_method_details","r":false,"sh":"Information about the Payment Method debited for this payment.","t":"`$ANY`","union":{"branches":2,"count":15,"depth":11},"key$":"payment_method_details","index$":17},"processor_details":{"a":true,"h":"Processor Details","n":"processor_details","r":true,"sh":"Processor information associated with this payment.","t":"`$OBJECT`","key$":"processor_details","index$":18},"reported_by":{"a":true,"h":"Reported By","n":"reported_by","r":true,"sh":"Indicates who reported the payment.","t":"`$STRING`","key$":"reported_by","index$":19},"shipping_details":{"a":true,"h":"Shipping Details","n":"shipping_details","r":false,"sh":"Shipping information for this payment.","t":"`$ANY`","key$":"shipping_details","index$":20}},"id":{"field":"id","name":"id"},"name":"payment_record","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/payment_records/{id}/report_payment_attempt","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/payment_records/{id}/report_payment_attempt","q":{"$action":"report_payment_attempt","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"payment_records"},{"var":"id"},{"lit":"report_payment_attempt"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/payment_records/{id}/report_payment_attempt_canceled","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/payment_records/{id}/report_payment_attempt_canceled","q":{"$action":"report_payment_attempt_canceled","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"payment_records"},{"var":"id"},{"lit":"report_payment_attempt_canceled"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/payment_records/{id}/report_payment_attempt_failed","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/payment_records/{id}/report_payment_attempt_failed","q":{"$action":"report_payment_attempt_failed","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"payment_records"},{"var":"id"},{"lit":"report_payment_attempt_failed"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /v1/payment_records/{id}/report_payment_attempt_guaranteed","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/payment_records/{id}/report_payment_attempt_guaranteed","q":{"$action":"report_payment_attempt_guaranteed","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"payment_records"},{"var":"id"},{"lit":"report_payment_attempt_guaranteed"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /v1/payment_records/{id}/report_payment_attempt_informational","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/payment_records/{id}/report_payment_attempt_informational","q":{"$action":"report_payment_attempt_informational","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"payment_records"},{"var":"id"},{"lit":"report_payment_attempt_informational"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"POST /v1/payment_records/{id}/report_refund","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/payment_records/{id}/report_refund","q":{"$action":"report_refund","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"payment_records"},{"var":"id"},{"lit":"report_refund"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"POST /v1/payment_records/report_payment","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/payment_records/report_payment","q":{"$action":"report_payment"},"r":{},"s":[{"lit":"v1"},{"lit":"payment_records"},{"lit":"report_payment"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/payment_records","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created_after","or":"created_after","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"created_before","or":"created_before","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/v1/payment_records","q":{"exist":["created_after","created_before","ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"payment_records"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/payment_records/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/payment_records/{id}","q":{"exist":["expand","id"]},"r":{},"s":[{"lit":"v1"},{"lit":"payment_records"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"payment_record","name__orig":"payment_record","Name":"PaymentRecord","name_":"payment_record","name-":"payment-record","NAME":"PAYMENT_RECORD","index$":93}, {"active":true,"entity":"payment_record","key$":"BasicPaymentRecordFlow","kind":"basic","name":"BasicPaymentRecordFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"payment_record_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"payment_record_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"payment_record_ref01","srcdatavar":"payment_record_ref01_data","suffix":"_dt0"},"m":{"id":"payment_record01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-payment_record_ref01"}}],"index$":2}]}, 'PaymentRecord', {"POST /v1/payment_records/{id}/report_payment_attempt":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"canceled":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"failed":{"explode":true,"style":"deepObject"},"guaranteed":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"payment_method_details":{"explode":true,"style":"deepObject"},"shipping_details":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"canceled":{"description":"Information about the payment attempt cancelation.","properties":{"canceled_at":{"format":"unix-time","type":"integer"}},"required":["canceled_at"],"title":"canceled","type":"object"},"description":{"description":"An arbitrary string attached to the object. Often useful for displaying to users.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"failed":{"description":"Information about the payment attempt failure.","properties":{"failed_at":{"format":"unix-time","type":"integer"}},"required":["failed_at"],"title":"failed","type":"object"},"guaranteed":{"description":"Information about the payment attempt guarantee.","properties":{"guaranteed_at":{"format":"unix-time","type":"integer"}},"required":["guaranteed_at"],"title":"guaranteed","type":"object"},"initiated_at":{"description":"When the reported payment was initiated. Measured in seconds since the Unix epoch.","format":"unix-time","type":"integer"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"outcome":{"description":"The outcome of the reported payment.","enum":["canceled","failed","guaranteed"],"type":"string"},"payment_method_details":{"description":"Information about the Payment Method debited for this payment.","properties":{"billing_details":{"properties":{"address":{},"email":{},"name":{},"phone":{}},"title":"billing_details","type":"object"},"custom":{"properties":{"display_name":{},"type":{}},"title":"custom","type":"object"},"payment_method":{"maxLength":5000,"type":"string"},"type":{"enum":["custom"],"type":"string","x-stripeBypassValidation":true}},"title":"payment_method_details","type":"object"},"shipping_details":{"description":"Shipping information for this payment.","properties":{"address":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{}},"title":"address","type":"object"},"name":{"maxLength":5000,"type":"string"},"phone":{"type":"string"}},"title":"shipping_details","type":"object"}},"required":["initiated_at"],"type":"object"}}},"required":true},"parameters":[{"description":"The ID of the Payment Record.","in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/payment_records/{id}/report_payment_attempt_canceled":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"canceled_at":{"description":"When the reported payment was canceled. Measured in seconds since the Unix epoch.","format":"unix-time","type":"integer"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."}},"required":["canceled_at"],"type":"object"}}},"required":true},"parameters":[{"description":"The ID of the Payment Record.","in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/payment_records/{id}/report_payment_attempt_failed":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"failed_at":{"description":"When the reported payment failed. Measured in seconds since the Unix epoch.","format":"unix-time","type":"integer"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."}},"required":["failed_at"],"type":"object"}}},"required":true},"parameters":[{"description":"The ID of the Payment Record.","in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/payment_records/{id}/report_payment_attempt_guaranteed":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"guaranteed_at":{"description":"When the reported payment was guaranteed. Measured in seconds since the Unix epoch.","format":"unix-time","type":"integer"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."}},"required":["guaranteed_at"],"type":"object"}}},"required":true},"parameters":[{"description":"The ID of the Payment Record.","in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/payment_records/{id}/report_payment_attempt_informational":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"customer_details":{"explode":true,"style":"deepObject"},"description":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"shipping_details":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"customer_details":{"description":"Customer information for this payment.","properties":{"customer":{"maxLength":5000,"type":"string"},"email":{"type":"string"},"name":{"maxLength":5000,"type":"string"},"phone":{"type":"string"}},"title":"customer_details","type":"object"},"description":{"anyOf":[{"maxLength":5000,"type":"string"},{"enum":[""],"type":"string"}],"description":"An arbitrary string attached to the object. Often useful for displaying to users."},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"shipping_details":{"anyOf":[{"properties":{"address":{},"name":{},"phone":{}},"title":"shipping_details","type":"object"},{"enum":[""],"type":"string"}],"description":"Shipping information for this payment."}},"type":"object"}}},"required":false},"parameters":[{"description":"The ID of the Payment Record.","in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/payment_records/{id}/report_refund":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"amount":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"processor_details":{"explode":true,"style":"deepObject"},"refunded":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount":{"description":"A positive integer in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) representing how much of this payment to refund. Can refund only up to the remaining, unrefunded amount of the payment.","properties":{"currency":{"format":"currency","type":"string"},"value":{"type":"integer"}},"required":["currency","value"],"title":"amount","type":"object"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"initiated_at":{"description":"When the reported refund was initiated. Measured in seconds since the Unix epoch.","format":"unix-time","type":"integer"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"outcome":{"description":"The outcome of the reported refund.","enum":["refunded"],"type":"string","x-stripeBypassValidation":true},"processor_details":{"description":"Processor information for this refund.","properties":{"custom":{"properties":{"refund_reference":{}},"required":["refund_reference"],"title":"custom","type":"object"},"type":{"enum":["custom"],"type":"string"}},"required":["type"],"title":"processor_details","type":"object"},"refunded":{"description":"Information about the payment attempt refund.","properties":{"refunded_at":{"format":"unix-time","type":"integer"}},"required":["refunded_at"],"title":"refunded","type":"object"}},"required":["outcome","processor_details"],"type":"object"}}},"required":true},"parameters":[{"description":"The ID of the Payment Record.","in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/payment_records/report_payment":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"amount_requested":{"explode":true,"style":"deepObject"},"canceled":{"explode":true,"style":"deepObject"},"customer_details":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"failed":{"explode":true,"style":"deepObject"},"guaranteed":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"payment_method_details":{"explode":true,"style":"deepObject"},"processor_details":{"explode":true,"style":"deepObject"},"shipping_details":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amount_requested":{"description":"The amount you initially requested for this payment.","properties":{"currency":{"format":"currency","type":"string"},"value":{"type":"integer"}},"required":["currency","value"],"title":"amount","type":"object"},"canceled":{"description":"Information about the payment attempt cancelation.","properties":{"canceled_at":{"format":"unix-time","type":"integer"}},"required":["canceled_at"],"title":"canceled","type":"object"},"customer_details":{"description":"Customer information for this payment.","properties":{"customer":{"maxLength":5000,"type":"string"},"email":{"type":"string"},"name":{"maxLength":5000,"type":"string"},"phone":{"type":"string"}},"title":"customer_details","type":"object"},"customer_presence":{"description":"Indicates whether the customer was present in your checkout flow during this payment.","enum":["off_session","on_session"],"type":"string"},"description":{"description":"An arbitrary string attached to the object. Often useful for displaying to users.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"failed":{"description":"Information about the payment attempt failure.","properties":{"failed_at":{"format":"unix-time","type":"integer"}},"required":["failed_at"],"title":"failed","type":"object"},"guaranteed":{"description":"Information about the payment attempt guarantee.","properties":{"guaranteed_at":{"format":"unix-time","type":"integer"}},"required":["guaranteed_at"],"title":"guaranteed","type":"object"},"initiated_at":{"description":"When the reported payment was initiated. Measured in seconds since the Unix epoch.","format":"unix-time","type":"integer"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"outcome":{"description":"The outcome of the reported payment.","enum":["canceled","failed","guaranteed"],"type":"string"},"payment_method_details":{"description":"Information about the Payment Method debited for this payment.","properties":{"billing_details":{"properties":{"address":{},"email":{},"name":{},"phone":{}},"title":"billing_details","type":"object"},"custom":{"properties":{"display_name":{},"type":{}},"title":"custom","type":"object"},"payment_method":{"maxLength":5000,"type":"string"},"type":{"enum":["custom"],"type":"string","x-stripeBypassValidation":true}},"title":"payment_method_details","type":"object"},"processor_details":{"description":"Processor information for this payment.","properties":{"custom":{"properties":{"payment_reference":{}},"required":["payment_reference"],"title":"custom","type":"object"},"type":{"enum":["custom"],"type":"string"}},"required":["type"],"title":"processor_details","type":"object"},"shipping_details":{"description":"Shipping information for this payment.","properties":{"address":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{}},"title":"address","type":"object"},"name":{"maxLength":5000,"type":"string"},"phone":{"type":"string"}},"title":"shipping_details","type":"object"}},"required":["amount_requested","initiated_at","payment_method_details"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/payment_records":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return Payment Records that were created after this unix timestamp.","in":"query","name":"created_after","required":false,"schema":{"format":"unix-time","type":"integer"},"style":"form","index$":0},{"description":"Only return Payment Records that were created before this unix timestamp.","in":"query","name":"created_before","required":false,"schema":{"format":"unix-time","type":"integer"},"style":"form","index$":1},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":3},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":4},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5}]},"GET /v1/payment_records/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"description":"The ID of the Payment Record.","in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const payment_record_ref01_ent = client.PaymentRecord()
    let payment_record_ref01_data = setup.data.new.payment_record['payment_record_ref01']

    payment_record_ref01_data = (await payment_record_ref01_ent.create(payment_record_ref01_data)).data()
    assert(null != payment_record_ref01_data.id)


    // LIST
    const payment_record_ref01_match: any = {}

    const payment_record_ref01_list = (await payment_record_ref01_ent.list(payment_record_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(payment_record_ref01_list, { id: payment_record_ref01_data.id })))


    // LOAD
    const payment_record_ref01_match_dt0: any = {}
    payment_record_ref01_match_dt0.id = payment_record_ref01_data.id
    const payment_record_ref01_data_dt0 = (await payment_record_ref01_ent.load(payment_record_ref01_match_dt0)).data()
    assert(payment_record_ref01_data_dt0.id === payment_record_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/payment_record/PaymentRecordTestData.json')

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
    ['payment_record01','payment_record02','payment_record03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_PAYMENT_RECORD_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_PAYMENT_RECORD_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_PAYMENT_RECORD_ENTID']
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
  
