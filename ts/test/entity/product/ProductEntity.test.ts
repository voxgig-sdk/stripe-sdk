

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


describe('ProductEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Product()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'product.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":true,"sh":"Whether the product is currently available for purchase.","t":"`$BOOLEAN`","key$":"active","index$":0},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":1},"current_prices_per_metric_ton":{"a":true,"h":"Current Prices Per Metric Ton","n":"current_prices_per_metric_ton","r":true,"sh":"Current prices for a metric ton of carbon removal in a currency's smallest unit.","t":"`$OBJECT`","key$":"current_prices_per_metric_ton","index$":2},"default_price":{"a":true,"h":"Default Price","n":"default_price","r":false,"sh":"The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"default_price","index$":3},"delivery_year":{"a":true,"h":"Delivery Year","n":"delivery_year","r":false,"sh":"The year in which the carbon removal is expected to be delivered.","t":"`$INTEGER`","key$":"delivery_year","index$":4},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The product's description, meant to be displayable to the customer.","t":"`$STRING`","key$":"description","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":6},"images":{"a":true,"h":"Images","n":"images","r":true,"sh":"A list of up to 8 URLs of images for this product, meant to be displayable to the customer.","t":"`$ARRAY`","key$":"images","index$":7},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.","t":"`$BOOLEAN`","key$":"livemode","index$":8},"marketing_features":{"a":true,"h":"Marketing Features","n":"marketing_features","r":true,"sh":"A list of up to 15 marketing features for this product.","t":"`$ARRAY`","key$":"marketing_features","index$":9},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":10},"metric_tons_available":{"a":true,"fo":"decimal","h":"Metric Tons Available","n":"metric_tons_available","r":true,"sh":"The quantity of metric tons available for reservation.","t":"`$STRING`","key$":"metric_tons_available","index$":11},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The Climate product's name.","t":"`$STRING`","key$":"name","index$":12},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":13},"package_dimensions":{"a":true,"h":"Package Dimensions","n":"package_dimensions","r":false,"sh":"The dimensions of this product for shipping purposes.","t":"`$ANY`","key$":"package_dimensions","index$":14},"shippable":{"a":true,"h":"Shippable","n":"shippable","r":false,"sh":"Whether this product is shipped (i.e., physical goods).","t":"`$BOOLEAN`","key$":"shippable","index$":15},"statement_descriptor":{"a":true,"h":"Statement Descriptor","n":"statement_descriptor","r":false,"sh":"Extra information about a product which will appear on your customer's credit card statement.","t":"`$STRING`","key$":"statement_descriptor","index$":16},"suppliers":{"a":true,"h":"Suppliers","n":"suppliers","r":true,"sh":"The carbon removal suppliers that fulfill orders for this Climate product.","t":"`$ARRAY`","key$":"suppliers","index$":17},"tax_code":{"a":true,"h":"Tax Code","n":"tax_code","r":false,"sh":"A [tax code](https://docs.stripe.com/tax/tax-categories) ID.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"tax_code","index$":18},"tax_details":{"a":true,"h":"Tax Details","n":"tax_details","r":false,"sh":"Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location.","t":"`$ANY`","key$":"tax_details","index$":19},"unit_label":{"a":true,"h":"Unit Label","n":"unit_label","r":false,"sh":"A label that represents units of this product.","t":"`$STRING`","key$":"unit_label","index$":20},"updated":{"a":true,"fo":"unix-time","h":"Updated","n":"updated","r":true,"sh":"Time at which the object was last updated.","t":"`$INTEGER`","key$":"updated","index$":21},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"A URL of a publicly-accessible webpage for this product.","t":"`$STRING`","key$":"url","index$":22}},"id":{"field":"id","name":"id"},"name":"product","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/products/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/products/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"products"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/products","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/products","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"products"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/products","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"ids","or":"ids","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"shippable","or":"shippable","r":false,"t":"`$BOOLEAN`","index$":6},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"url","or":"url","r":false,"t":"`$STRING`","index$":8}]},"k":"http","m":"GET","o":"/v1/products","q":{"exist":["active","created","ending_before","expand","ids","limit","shippable","starting_after","url"]},"r":{},"s":[{"lit":"v1"},{"lit":"products"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /v1/climate/products","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/climate/products","q":{"exist":["ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"climate"},{"lit":"products"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/climate/products/{product}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"product","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/climate/products/{product}","q":{"exist":["expand","id"]},"r":{"param":{"product":"id"}},"s":[{"lit":"v1"},{"lit":"climate"},{"lit":"products"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /v1/products/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/products/{id}","q":{"exist":["expand","id"]},"r":{},"s":[{"lit":"v1"},{"lit":"products"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/products/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/products/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"products"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"product","name__orig":"product","Name":"Product","name_":"product","name-":"product","NAME":"PRODUCT","index$":100}, {"active":true,"entity":"product","key$":"BasicProductFlow","kind":"basic","name":"BasicProductFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"product_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"product_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"product_ref01","srcdatavar":"product_ref01_data","suffix":"_dt0"},"m":{"id":"product01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-product_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"product_ref01","suffix":"_rm0"},"m":{"id":"product01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"product_ref01"}}],"index$":4}]}, 'Product', {"POST /v1/products/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"description":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"images":{"explode":true,"style":"deepObject"},"marketing_features":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"package_dimensions":{"explode":true,"style":"deepObject"},"tax_code":{"explode":true,"style":"deepObject"},"tax_details":{"explode":true,"style":"deepObject"},"unit_label":{"explode":true,"style":"deepObject"},"url":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"active":{"description":"Whether the product is available for purchase.","type":"boolean"},"default_price":{"description":"The ID of the [Price](https://docs.stripe.com/api/prices) object that is the default price for this product.","maxLength":5000,"type":"string"},"description":{"anyOf":[{"maxLength":40000,"type":"string"},{"enum":[""],"type":"string"}],"description":"The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes."},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"images":{"anyOf":[{"items":{"type":"string"},"type":"array"},{"enum":[""],"type":"string"}],"description":"A list of up to 8 URLs of images for this product, meant to be displayable to the customer."},"marketing_features":{"anyOf":[{"items":{"properties":{},"required":[],"title":"features","type":"object"},"type":"array"},{"enum":[""],"type":"string"}],"description":"A list of up to 15 marketing features for this product. These are displayed in [pricing tables](https://docs.stripe.com/payments/checkout/pricing-table)."},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"name":{"description":"The product's name, meant to be displayable to the customer.","maxLength":5000,"type":"string"},"package_dimensions":{"anyOf":[{"properties":{"height":{},"length":{},"weight":{},"width":{}},"required":["height","length","weight","width"],"title":"package_dimensions_specs","type":"object"},{"enum":[""],"type":"string"}],"description":"The dimensions of this product for shipping purposes."},"shippable":{"description":"Whether this product is shipped (i.e., physical goods).","type":"boolean"},"statement_descriptor":{"description":"An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.\n\nThis may be up to 22 characters. The statement description may not include `<`, `>`, `\\`, `\"`, `'` characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped.\n It must contain at least one letter. May only be set if `type=service`. Only used for subscription payments.","maxLength":22,"type":"string"},"tax_code":{"anyOf":[{"type":"string"},{"enum":[""],"type":"string"}],"description":"A [tax code](https://docs.stripe.com/tax/tax-categories) ID."},"tax_details":{"anyOf":[{"properties":{"performance_location":{},"tax_code":{}},"title":"tax_details","type":"object"},{"enum":[""],"type":"string"}],"description":"Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location."},"unit_label":{"anyOf":[{"maxLength":12,"type":"string"},{"enum":[""],"type":"string"}],"description":"A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal. May only be set if `type=service`."},"url":{"anyOf":[{"type":"string"},{"enum":[""],"type":"string"}],"description":"A URL of a publicly-accessible webpage for this product."}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/products":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"default_price_data":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"images":{"explode":true,"style":"deepObject"},"marketing_features":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"package_dimensions":{"explode":true,"style":"deepObject"},"tax_details":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"active":{"description":"Whether the product is currently available for purchase. Defaults to `true`.","type":"boolean"},"default_price_data":{"description":"Data used to generate a new [Price](https://docs.stripe.com/api/prices) object. This Price will be set as the default price for this product.","properties":{"currency":{"format":"currency","type":"string"},"currency_options":{"additionalProperties":{"properties":{},"title":"currency_option","type":"object"},"type":"object"},"custom_unit_amount":{"properties":{"enabled":{},"maximum":{},"minimum":{},"preset":{}},"required":["enabled"],"title":"custom_unit_amount","type":"object"},"metadata":{"additionalProperties":{"type":"string"},"type":"object"},"recurring":{"properties":{"interval":{},"interval_count":{}},"required":["interval"],"title":"recurring_adhoc","type":"object"},"tax_behavior":{"enum":["exclusive","inclusive","unspecified"],"type":"string"},"unit_amount":{"type":"integer"},"unit_amount_decimal":{"format":"decimal","type":"string"}},"required":["currency"],"title":"price_data_without_product_with_metadata","type":"object"},"description":{"description":"The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.","maxLength":40000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"id":{"description":"An identifier will be randomly generated by Stripe. You can optionally override this ID, but the ID must be unique across all products in your Stripe account.","maxLength":5000,"type":"string"},"images":{"description":"A list of up to 8 URLs of images for this product, meant to be displayable to the customer.","items":{"type":"string"},"type":"array"},"marketing_features":{"description":"A list of up to 15 marketing features for this product. These are displayed in [pricing tables](https://docs.stripe.com/payments/checkout/pricing-table).","items":{"properties":{"name":{"maxLength":5000,"type":"string"}},"required":["name"],"title":"features","type":"object"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"name":{"description":"The product's name, meant to be displayable to the customer.","maxLength":5000,"type":"string"},"package_dimensions":{"description":"The dimensions of this product for shipping purposes.","properties":{"height":{"type":"number"},"length":{"type":"number"},"weight":{"type":"number"},"width":{"type":"number"}},"required":["height","length","weight","width"],"title":"package_dimensions_specs","type":"object"},"shippable":{"description":"Whether this product is shipped (i.e., physical goods).","type":"boolean"},"statement_descriptor":{"description":"An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.\n\nThis may be up to 22 characters. The statement description may not include `<`, `>`, `\\`, `\"`, `'` characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped.\n It must contain at least one letter. Only used for subscription payments.","maxLength":22,"type":"string"},"tax_code":{"description":"A [tax code](https://docs.stripe.com/tax/tax-categories) ID.","type":"string"},"tax_details":{"description":"Tax details for this product, including the [tax code](/tax/tax-codes) and an optional performance location.","properties":{"performance_location":{"maxLength":5000,"type":"string"},"tax_code":{"anyOf":[{},{}]}},"title":"tax_details","type":"object"},"unit_label":{"description":"A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal.","maxLength":12,"type":"string"},"url":{"description":"A URL of a publicly-accessible webpage for this product.","maxLength":5000,"type":"string"}},"required":["name"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/products":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return products that are active or inactive (e.g., pass `false` to list all inactive products).","in":"query","name":"active","required":false,"schema":{"type":"boolean"},"style":"form","index$":0},{"description":"Only return products that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":1},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":3},{"description":"Only return products with the given IDs. Cannot be used with [starting_after](https://docs.stripe.com/api#list_products-starting_after) or [ending_before](https://docs.stripe.com/api#list_products-ending_before).","explode":true,"in":"query","name":"ids","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":4},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":5},{"description":"Only return products that can be shipped (i.e., physical, not digital products).","in":"query","name":"shippable","required":false,"schema":{"type":"boolean"},"style":"form","index$":6},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":7},{"description":"Only return products with the given url.","in":"query","name":"url","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":8}]},"GET /v1/climate/products":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3}]},"GET /v1/climate/products/{product}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"product","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]},"GET /v1/products/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]},"DELETE /v1/products/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const product_ref01_ent = client.Product()
    let product_ref01_data = setup.data.new.product['product_ref01']

    product_ref01_data = (await product_ref01_ent.create(product_ref01_data)).data()
    assert(null != product_ref01_data.id)


    // LIST
    const product_ref01_match: any = {}

    const product_ref01_list = (await product_ref01_ent.list(product_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(product_ref01_list, { id: product_ref01_data.id })))


    // LOAD
    const product_ref01_match_dt0: any = {}
    product_ref01_match_dt0.id = product_ref01_data.id
    const product_ref01_data_dt0 = (await product_ref01_ent.load(product_ref01_match_dt0)).data()
    assert(product_ref01_data_dt0.id === product_ref01_data.id)


    // REMOVE
    const product_ref01_match_rm0: any = { id: product_ref01_data.id }
    await product_ref01_ent.remove(product_ref01_match_rm0)
  

    // LIST
    const product_ref01_match_rt0: any = {}

    const product_ref01_list_rt0 = (await product_ref01_ent.list(product_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(product_ref01_list_rt0, { id: product_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/product/ProductTestData.json')

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
    ['product01','product02','product03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_PRODUCT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_PRODUCT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_PRODUCT_ENTID']
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
  
