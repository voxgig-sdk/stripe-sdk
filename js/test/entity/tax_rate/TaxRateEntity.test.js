
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


describe('TaxRateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.TaxRate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":true,"sh":"Defaults to `true`.","t":"`$BOOLEAN`","key$":"active","index$":0},"country":{"a":true,"h":"Country","n":"country","r":false,"sh":"Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).","t":"`$STRING`","key$":"country","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"An arbitrary string attached to the tax rate for your internal use only.","t":"`$STRING`","key$":"description","index$":3},"display_name":{"a":true,"h":"Display Name","n":"display_name","r":true,"sh":"The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page.","t":"`$STRING`","key$":"display_name","index$":4},"effective_percentage":{"a":true,"h":"Effective Percentage","n":"effective_percentage","r":false,"sh":"Actual/effective tax rate percentage out of 100.","t":"`$NUMBER`","key$":"effective_percentage","index$":5},"flat_amount":{"a":true,"h":"Flat Amount","n":"flat_amount","r":false,"sh":"The amount of the tax rate when the `rate_type` is `flat_amount`.","t":"`$ANY`","key$":"flat_amount","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":7},"inclusive":{"a":true,"h":"Inclusive","n":"inclusive","r":true,"sh":"This specifies if the tax rate is inclusive or exclusive.","t":"`$BOOLEAN`","key$":"inclusive","index$":8},"jurisdiction":{"a":true,"h":"Jurisdiction","n":"jurisdiction","r":false,"sh":"The jurisdiction for the tax rate.","t":"`$STRING`","key$":"jurisdiction","index$":9},"jurisdiction_level":{"a":true,"h":"Jurisdiction Level","n":"jurisdiction_level","r":false,"sh":"The level of the jurisdiction that imposes this tax rate.","t":"`$STRING`","key$":"jurisdiction_level","index$":10},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":11},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":12},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":13},"percentage":{"a":true,"h":"Percentage","n":"percentage","r":true,"sh":"Tax rate percentage out of 100.","t":"`$NUMBER`","key$":"percentage","index$":14},"rate_type":{"a":true,"h":"Rate Type","n":"rate_type","r":false,"sh":"Indicates the type of tax rate applied to the taxable amount.","t":"`$STRING`","key$":"rate_type","index$":15},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"[ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix.","t":"`$STRING`","key$":"state","index$":16},"tax_type":{"a":true,"h":"Tax Type","n":"tax_type","r":false,"sh":"The high-level tax type, such as `vat` or `sales_tax`.","t":"`$STRING`","key$":"tax_type","index$":17}},"id":{"field":"id","name":"id"},"name":"tax_rate","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/tax_rates/{tax_rate}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"tax_rate","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/tax_rates/{tax_rate}","q":{"exist":["id"]},"r":{"param":{"tax_rate":"id"}},"s":[{"lit":"v1"},{"lit":"tax_rates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/tax_rates","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/tax_rates","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"tax_rates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/tax_rates","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"inclusive","or":"inclusive","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/v1/tax_rates","q":{"exist":["active","created","ending_before","expand","inclusive","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"tax_rates"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/tax_rates/{tax_rate}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"tax_rate","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/tax_rates/{tax_rate}","q":{"exist":["expand","id"]},"r":{"param":{"tax_rate":"id"}},"s":[{"lit":"v1"},{"lit":"tax_rates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"tax_rate","name__orig":"tax_rate","Name":"TaxRate","name_":"tax_rate","name-":"tax-rate","NAME":"TAX_RATE","index$":135}, {"active":true,"entity":"tax_rate","key$":"BasicTaxRateFlow","kind":"basic","name":"BasicTaxRateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tax_rate_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tax_rate_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"tax_rate_ref01","srcdatavar":"tax_rate_ref01_data","suffix":"_dt0"},"m":{"id":"tax_rate01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tax_rate_ref01"}}],"index$":2}]}, 'TaxRate', {"POST /v1/tax_rates/{tax_rate}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"active":{"description":"Flag determining whether the tax rate is active or inactive (archived). Inactive tax rates cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.","type":"boolean"},"country":{"description":"Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).","maxLength":5000,"type":"string"},"description":{"description":"An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.","maxLength":5000,"type":"string"},"display_name":{"description":"The display name of the tax rate, which will be shown to users.","maxLength":50,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"jurisdiction":{"description":"The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer’s invoice.","maxLength":50,"type":"string"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"state":{"description":"[ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. For example, \"NY\" for New York, United States.","maxLength":5000,"type":"string"},"tax_type":{"description":"The high-level tax type, such as `vat` or `sales_tax`.","enum":["amusement_tax","communications_tax","digital_excise_tax","gst","hst","igst","jct","lease_tax","mass_transit_parking_tax","parking_tax","pst","qst","retail_delivery_fee","rst","sales_tax","service_tax","utility_users_tax","vat"],"type":"string","x-stripeBypassValidation":true}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"tax_rate","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/tax_rates":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"active":{"description":"Flag determining whether the tax rate is active or inactive (archived). Inactive tax rates cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.","type":"boolean"},"country":{"description":"Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).","maxLength":5000,"type":"string"},"description":{"description":"An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.","maxLength":5000,"type":"string"},"display_name":{"description":"The display name of the tax rate, which will be shown to users.","maxLength":50,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"inclusive":{"description":"This specifies if the tax rate is inclusive or exclusive.","type":"boolean"},"jurisdiction":{"description":"The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer’s invoice.","maxLength":50,"type":"string"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"percentage":{"description":"This represents the tax rate percent out of 100.","type":"number"},"state":{"description":"[ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. For example, \"NY\" for New York, United States.","maxLength":5000,"type":"string"},"tax_type":{"description":"The high-level tax type, such as `vat` or `sales_tax`.","enum":["amusement_tax","communications_tax","digital_excise_tax","gst","hst","igst","jct","lease_tax","mass_transit_parking_tax","parking_tax","pst","qst","retail_delivery_fee","rst","sales_tax","service_tax","utility_users_tax","vat"],"type":"string","x-stripeBypassValidation":true}},"required":["display_name","inclusive","percentage"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/tax_rates":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Optional flag to filter by tax rates that are either active or inactive (archived).","in":"query","name":"active","required":false,"schema":{"type":"boolean"},"style":"form","index$":0},{"description":"Optional range for filtering created date.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":1},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":3},{"description":"Optional flag to filter by tax rates that are inclusive (or those that are not inclusive).","in":"query","name":"inclusive","required":false,"schema":{"type":"boolean"},"style":"form","index$":4},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":5},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6}]},"GET /v1/tax_rates/{tax_rate}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"tax_rate","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const tax_rate_ref01_ent = client.TaxRate()
    let tax_rate_ref01_data = setup.data.new.tax_rate['tax_rate_ref01']

    tax_rate_ref01_data = (await tax_rate_ref01_ent.create(tax_rate_ref01_data)).data()
    assert(null != tax_rate_ref01_data.id)


    // LIST
    const tax_rate_ref01_match = {}

    const tax_rate_ref01_list = (await tax_rate_ref01_ent.list(tax_rate_ref01_match)).map((e) => e.data())

    assert(!isempty(select(tax_rate_ref01_list, { id: tax_rate_ref01_data.id })))


    // LOAD
    const tax_rate_ref01_match_dt0 = {}
    tax_rate_ref01_match_dt0.id = tax_rate_ref01_data.id
    const tax_rate_ref01_data_dt0 = (await tax_rate_ref01_ent.load(tax_rate_ref01_match_dt0)).data()
    assert(tax_rate_ref01_data_dt0.id === tax_rate_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/tax_rate/TaxRateTestData.json')

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
    ['tax_rate01','tax_rate02','tax_rate03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_TAX_RATE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_TAX_RATE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_TAX_RATE_ENTID']
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
  
