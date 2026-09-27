
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


describe('LineItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.LineItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"adjustable_quantity":{"a":true,"h":"Adjustable Quantity","n":"adjustable_quantity","r":false,"t":"`$ANY`","key$":"adjustable_quantity","index$":0},"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"The line item amount in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).","t":"`$INTEGER`","key$":"amount","index$":1},"amount_discount":{"a":true,"h":"Amount Discount","n":"amount_discount","r":true,"sh":"Total discount amount applied.","t":"`$INTEGER`","key$":"amount_discount","index$":2},"amount_subtotal":{"a":true,"h":"Amount Subtotal","n":"amount_subtotal","r":true,"sh":"Total before any discounts or taxes are applied.","t":"`$INTEGER`","key$":"amount_subtotal","index$":3},"amount_tax":{"a":true,"h":"Amount Tax","n":"amount_tax","r":true,"sh":"The amount of tax calculated for this line item, in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).","t":"`$INTEGER`","key$":"amount_tax","index$":4},"amount_total":{"a":true,"h":"Amount Total","n":"amount_total","r":true,"sh":"Total after discounts and taxes.","t":"`$INTEGER`","key$":"amount_total","index$":5},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":6},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"An arbitrary string attached to the object.","t":"`$STRING`","key$":"description","index$":7},"discounts":{"a":true,"h":"Discounts","n":"discounts","r":false,"sh":"The discounts applied to the line item.","t":"`$ARRAY`","union":{"branches":3,"count":10,"depth":12},"key$":"discounts","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":9},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":10},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":11},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":12},"performance_location":{"a":true,"h":"Performance Location","n":"performance_location","r":false,"sh":"Indicates the line item represents a performance where the venue location might determine the tax, not the customer address.","t":"`$STRING`","key$":"performance_location","index$":13},"price":{"a":true,"h":"Price","n":"price","r":false,"sh":"The price used to generate the line item.","t":"`$NUMBER`","union":{"branches":3,"count":6,"depth":9},"key$":"price","index$":14},"product":{"a":true,"h":"Product","n":"product","r":false,"sh":"The ID of an existing [Product](https://docs.stripe.com/api/products/object).","t":"`$STRING`","key$":"product","index$":15},"quantity":{"a":true,"h":"Quantity","n":"quantity","op":{"list":{"req":false,"type":"`$INTEGER`"}},"r":true,"sh":"The number of units of the item being purchased.","t":"`$INTEGER`","key$":"quantity","index$":16},"reference":{"a":true,"h":"Reference","n":"reference","r":true,"sh":"A custom identifier for this line item.","t":"`$STRING`","key$":"reference","index$":17},"reversal":{"a":true,"h":"Reversal","n":"reversal","r":false,"sh":"If `type=reversal`, contains information about what was reversed.","t":"`$ANY`","key$":"reversal","index$":18},"tax_behavior":{"a":true,"h":"Tax Behavior","n":"tax_behavior","r":true,"sh":"Specifies whether the `amount` includes taxes.","t":"`$STRING`","key$":"tax_behavior","index$":19},"tax_breakdown":{"a":true,"h":"Tax Breakdown","n":"tax_breakdown","r":false,"sh":"Detailed account of taxes relevant to this line item.","t":"`$ARRAY`","key$":"tax_breakdown","index$":20},"tax_code":{"a":true,"h":"Tax Code","n":"tax_code","r":true,"sh":"The [tax code](https://docs.stripe.com/tax/tax-categories) ID used for this resource.","t":"`$STRING`","key$":"tax_code","index$":21},"taxes":{"a":true,"h":"Taxes","n":"taxes","r":false,"sh":"The taxes applied to the line item.","t":"`$ARRAY`","key$":"taxes","index$":22},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"If `reversal`, this line item reverses an earlier transaction.","t":"`$STRING`","key$":"type","index$":23}},"id":{"field":"id","name":"id"},"name":"line_item","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/tax/calculations/{calculation}/line_items","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"calculation_id","or":"calculation","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/tax/calculations/{calculation}/line_items","q":{"exist":["calculation_id","ending_before","expand","limit","starting_after"]},"r":{"param":{"calculation":"calculation_id"}},"s":[{"lit":"v1"},{"lit":"tax"},{"lit":"calculations"},{"var":"calculation_id"},{"lit":"line_items"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /v1/payment_links/{payment_link}/line_items","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"payment_link_id","or":"payment_link","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/payment_links/{payment_link}/line_items","q":{"exist":["ending_before","expand","limit","payment_link_id","starting_after"]},"r":{"param":{"payment_link":"payment_link_id"}},"s":[{"lit":"v1"},{"lit":"payment_links"},{"var":"payment_link_id"},{"lit":"line_items"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /v1/quotes/{quote}/line_items","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"quote_id","or":"quote","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/quotes/{quote}/line_items","q":{"exist":["ending_before","expand","limit","quote_id","starting_after"]},"r":{"param":{"quote":"quote_id"}},"s":[{"lit":"v1"},{"lit":"quotes"},{"var":"quote_id"},{"lit":"line_items"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":2},{"a":true,"co":{"id":"GET /v1/checkout/sessions/{session}/line_items","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"session_id","or":"session","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/checkout/sessions/{session}/line_items","q":{"exist":["ending_before","expand","limit","session_id","starting_after"]},"r":{"param":{"session":"session_id"}},"s":[{"lit":"v1"},{"lit":"checkout"},{"lit":"sessions"},{"var":"session_id"},{"lit":"line_items"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":3},{"a":true,"co":{"id":"GET /v1/tax/transactions/{transaction}/line_items","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"transaction_id","or":"transaction","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/tax/transactions/{transaction}/line_items","q":{"exist":["ending_before","expand","limit","starting_after","transaction_id"]},"r":{"param":{"transaction":"transaction_id"}},"s":[{"lit":"v1"},{"lit":"tax"},{"lit":"transactions"},{"var":"transaction_id"},{"lit":"line_items"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":4}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.session"],["$.main.kit.entity.payment_link"],["$.main.kit.entity.quote"],["$.main.kit.entity.calculation"],["$.main.kit.entity.transaction"]]},"key$":"line_item","name__orig":"line_item","Name":"LineItem","name_":"line_item","name-":"line-item","NAME":"LINE_ITEM","index$":71}, {"active":true,"entity":"line_item","key$":"BasicLineItemFlow","kind":"basic","name":"BasicLineItemFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"transaction_id":"transaction01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"line_item_ref01"}}],"index$":0}]}, 'LineItem', {"GET /v1/tax/calculations/{calculation}/line_items":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"calculation","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":500,"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":500,"type":"string"},"style":"form","index$":4}]},"GET /v1/payment_links/{payment_link}/line_items":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"in":"path","name":"payment_link","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4}]},"GET /v1/quotes/{quote}/line_items":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"in":"path","name":"quote","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4}]},"GET /v1/checkout/sessions/{session}/line_items":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"in":"path","name":"session","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4}]},"GET /v1/tax/transactions/{transaction}/line_items":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":500,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":500,"type":"string"},"style":"form","index$":3},{"in":"path","name":"transaction","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let line_item_ref01_data = Object.values(setup.data.existing.line_item)[0]

    // LIST
    const line_item_ref01_ent = client.LineItem()
    const line_item_ref01_match = {}
    line_item_ref01_match['transaction_id'] = setup.idmap['transaction01']

    const line_item_ref01_list = (await line_item_ref01_ent.list(line_item_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/line_item/LineItemTestData.json')

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
    ['line_item01','line_item02','line_item03','session01','session02','session03','payment_link01','payment_link02','payment_link03','quote01','quote02','quote03','calculation01','calculation02','calculation03','transaction01','transaction02','transaction03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_LINE_ITEM_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_LINE_ITEM_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_LINE_ITEM_ENTID']
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
  
