

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


describe('CalculationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Calculation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'calculation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount_total":{"a":true,"h":"Amount Total","n":"amount_total","r":true,"sh":"Total amount after taxes in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).","t":"`$INTEGER`","key$":"amount_total","index$":0},"currency":{"a":true,"h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":1},"customer":{"a":true,"h":"Customer","n":"customer","r":false,"sh":"The ID of an existing [Customer](https://docs.stripe.com/api/customers/object) used for the resource.","t":"`$STRING`","key$":"customer","index$":2},"customer_details":{"a":true,"h":"Customer Details","n":"customer_details","r":true,"t":"`$OBJECT`","key$":"customer_details","index$":3},"expires_at":{"a":true,"fo":"unix-time","h":"Expires At","n":"expires_at","r":false,"sh":"Timestamp of date at which the tax calculation will expire.","t":"`$INTEGER`","key$":"expires_at","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the calculation.","t":"`$STRING`","key$":"id","index$":5},"line_items":{"a":true,"h":"Line Items","n":"line_items","r":true,"sh":"The list of items the customer is purchasing.","t":"`$OBJECT`","key$":"line_items","index$":6},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":7},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":8},"ship_from_details":{"a":true,"h":"Ship From Details","n":"ship_from_details","r":false,"sh":"The details of the ship from location, such as the address.","t":"`$ANY`","key$":"ship_from_details","index$":9},"shipping_cost":{"a":true,"h":"Shipping Cost","n":"shipping_cost","r":false,"sh":"The shipping cost details for the calculation.","t":"`$ANY`","key$":"shipping_cost","index$":10},"tax_amount_exclusive":{"a":true,"h":"Tax Amount Exclusive","n":"tax_amount_exclusive","r":true,"sh":"The amount of tax to be collected on top of the line item prices.","t":"`$INTEGER`","key$":"tax_amount_exclusive","index$":11},"tax_amount_inclusive":{"a":true,"h":"Tax Amount Inclusive","n":"tax_amount_inclusive","r":true,"sh":"The amount of tax already included in the line item prices.","t":"`$INTEGER`","key$":"tax_amount_inclusive","index$":12},"tax_breakdown":{"a":true,"h":"Tax Breakdown","n":"tax_breakdown","r":true,"sh":"Breakdown of individual tax amounts that add up to the total.","t":"`$ARRAY`","key$":"tax_breakdown","index$":13},"tax_date":{"a":true,"fo":"unix-time","h":"Tax Date","n":"tax_date","r":true,"sh":"The calculation uses the tax rules and rates that are in effect at this timestamp.","t":"`$INTEGER`","key$":"tax_date","index$":14}},"id":{"field":"id","name":"id"},"name":"calculation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/tax/calculations","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/tax/calculations","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"tax"},{"lit":"calculations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/tax/calculations/{calculation}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"calculation","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/tax/calculations/{calculation}","q":{"exist":["expand","id"]},"r":{"param":{"calculation":"id"}},"s":[{"lit":"v1"},{"lit":"tax"},{"lit":"calculations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"calculation","name__orig":"calculation","Name":"Calculation","name_":"calculation","name-":"calculation","NAME":"CALCULATION","index$":15}, {"active":true,"entity":"calculation","key$":"BasicCalculationFlow","kind":"basic","name":"BasicCalculationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"calculation_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"calculation_ref01","srcdatavar":"calculation_ref01_data","suffix":"_dt0"},"m":{"id":"calculation01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-calculation_ref01"}}],"index$":1}]}, 'Calculation', {"POST /v1/tax/calculations":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"customer_details":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"line_items":{"explode":true,"style":"deepObject"},"ship_from_details":{"explode":true,"style":"deepObject"},"shipping_cost":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"currency":{"description":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).","format":"currency","type":"string"},"customer":{"description":"The ID of an existing customer to use for this calculation. If provided, the customer's address and tax IDs are copied to `customer_details`.","maxLength":5000,"type":"string"},"customer_details":{"description":"Details about the customer, including address and tax IDs.","properties":{"address":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{}},"required":["country"],"title":"postal_address","type":"object"},"address_source":{"enum":["billing","shipping"],"type":"string"},"ip_address":{"type":"string"},"tax_ids":{"items":{"properties":{},"required":[],"title":"data_params","type":"object"},"type":"array"},"taxability_override":{"enum":["customer_exempt","none","reverse_charge"],"type":"string"}},"title":"customer_details","type":"object"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"line_items":{"description":"A list of items the customer is purchasing. You can pass up to 100 line items, or 1,000 if your account has an increased limit.","items":{"properties":{"amount":{"type":"integer"},"metadata":{"additionalProperties":{},"type":"object"},"performance_location":{"maxLength":5000,"type":"string"},"product":{"maxLength":5000,"type":"string"},"quantity":{"type":"integer"},"reference":{"maxLength":500,"type":"string"},"tax_behavior":{"enum":[],"type":"string"},"tax_code":{"type":"string"}},"required":["amount"],"title":"calculation_line_item","type":"object"},"type":"array"},"ship_from_details":{"description":"Details about the address from which the goods are being shipped.","properties":{"address":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{}},"required":["country"],"title":"merchant_postal_address","type":"object"}},"required":["address"],"title":"ship_from_details","type":"object"},"shipping_cost":{"description":"Shipping cost details to be used for the calculation.","properties":{"amount":{"type":"integer"},"shipping_rate":{"maxLength":5000,"type":"string"},"tax_behavior":{"enum":["exclusive","inclusive"],"type":"string"},"tax_code":{"type":"string"}},"title":"shipping_cost","type":"object"},"tax_date":{"description":"The calculation uses the tax rules and rates that are in effect at this timestamp. You can use a date up to 31 days in the past or up to 31 days in the future. If you use a future date, Stripe doesn't guarantee that the expected tax rules and rate being used match the actual rules and rate that will be in effect on that date. We deploy tax changes before their effective date, but not within a fixed window.","type":"integer"}},"required":["currency","line_items"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/tax/calculations/{calculation}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"calculation","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const calculation_ref01_ent = client.Calculation()
    let calculation_ref01_data = setup.data.new.calculation['calculation_ref01']

    calculation_ref01_data = (await calculation_ref01_ent.create(calculation_ref01_data)).data()
    assert(null != calculation_ref01_data.id)


    // LOAD
    const calculation_ref01_match_dt0: any = {}
    calculation_ref01_match_dt0.id = calculation_ref01_data.id
    const calculation_ref01_data_dt0 = (await calculation_ref01_ent.load(calculation_ref01_match_dt0)).data()
    assert(calculation_ref01_data_dt0.id === calculation_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/calculation/CalculationTestData.json')

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
    ['calculation01','calculation02','calculation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_CALCULATION_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_CALCULATION_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_CALCULATION_ENTID']
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
  
