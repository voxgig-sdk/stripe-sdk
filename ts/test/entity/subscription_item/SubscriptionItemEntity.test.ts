

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


describe('SubscriptionItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.SubscriptionItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'subscription_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"billed_until":{"a":true,"fo":"unix-time","h":"Billed Until","n":"billed_until","r":false,"sh":"The time period the subscription item has been billed for.","t":"`$INTEGER`","key$":"billed_until","index$":0},"billing_thresholds":{"a":true,"h":"Billing Thresholds","n":"billing_thresholds","r":false,"sh":"Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period","t":"`$ANY`","key$":"billing_thresholds","index$":1},"created":{"a":true,"h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"current_period_end":{"a":true,"fo":"unix-time","h":"Current Period End","n":"current_period_end","r":true,"sh":"The end time of this subscription item's current billing period.","t":"`$INTEGER`","key$":"current_period_end","index$":3},"current_period_start":{"a":true,"fo":"unix-time","h":"Current Period Start","n":"current_period_start","r":true,"sh":"The start time of this subscription item's current billing period.","t":"`$INTEGER`","key$":"current_period_start","index$":4},"current_trial":{"a":true,"h":"Current Trial","n":"current_trial","r":false,"sh":"The current trial that is applied to this subscription item.","t":"`$ANY`","key$":"current_trial","index$":5},"discounts":{"a":true,"h":"Discounts","n":"discounts","r":true,"sh":"The discounts applied to the subscription item.","t":"`$ARRAY`","union":{"branches":3,"count":21,"depth":13},"key$":"discounts","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":7},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":8},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":9},"price":{"a":true,"h":"Price","n":"price","r":true,"sh":"Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products.","t":"`$OBJECT`","union":{"branches":3,"count":6,"depth":7},"key$":"price","index$":10},"quantity":{"a":true,"h":"Quantity","n":"quantity","r":false,"sh":"The [quantity](https://docs.stripe.com/subscriptions/quantities) of the plan to which the customer should be subscribed.","t":"`$INTEGER`","key$":"quantity","index$":11},"subscription":{"a":true,"h":"Subscription","n":"subscription","r":true,"sh":"The `subscription` this `subscription_item` belongs to.","t":"`$STRING`","key$":"subscription","index$":12},"tax_rates":{"a":true,"h":"Tax Rates","n":"tax_rates","r":false,"sh":"The tax rates which apply to this `subscription_item`.","t":"`$ARRAY`","key$":"tax_rates","index$":13}},"id":{"field":"id","name":"id"},"name":"subscription_item","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/subscription_items/{item}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"item","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/subscription_items/{item}","q":{"exist":["id"]},"r":{"param":{"item":"id"}},"s":[{"lit":"v1"},{"lit":"subscription_items"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/subscription_items","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/subscription_items","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"subscription_items"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/subscription_items","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"subscription","or":"subscription","r":true,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v1/subscription_items","q":{"exist":["ending_before","expand","limit","starting_after","subscription"]},"r":{},"s":[{"lit":"v1"},{"lit":"subscription_items"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/subscription_items/{item}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"item","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/subscription_items/{item}","q":{"exist":["expand","id"]},"r":{"param":{"item":"id"}},"s":[{"lit":"v1"},{"lit":"subscription_items"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"subscription_item","name__orig":"subscription_item","Name":"SubscriptionItem","name_":"subscription_item","name-":"subscription-item","NAME":"SUBSCRIPTION_ITEM","index$":130}, {"active":true,"entity":"subscription_item","key$":"BasicSubscriptionItemFlow","kind":"basic","name":"BasicSubscriptionItemFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"subscription_item_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"subscription_item_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"subscription_item_ref01","srcdatavar":"subscription_item_ref01_data","suffix":"_dt0"},"m":{"id":"subscription_item01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-subscription_item_ref01"}}],"index$":2}]}, 'SubscriptionItem', {"POST /v1/subscription_items/{item}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"billing_thresholds":{"explode":true,"style":"deepObject"},"current_trial":{"explode":true,"style":"deepObject"},"discounts":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"price_data":{"explode":true,"style":"deepObject"},"tax_rates":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"billing_thresholds":{"anyOf":[{"properties":{"usage_gte":{}},"required":["usage_gte"],"title":"item_billing_thresholds_param","type":"object"},{"enum":[""],"type":"string"}],"description":"Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds."},"current_trial":{"description":"The trial offer to apply to this subscription item.","properties":{"trial_offer":{"maxLength":5000,"type":"string"}},"required":["trial_offer"],"title":"current_trial_param","type":"object"},"discounts":{"anyOf":[{"items":{"properties":{},"title":"discounts_data_param","type":"object"},"type":"array"},{"enum":[""],"type":"string"}],"description":"The coupons to redeem into discounts for the subscription item."},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"off_session":{"description":"Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `false` (on-session).","type":"boolean"},"payment_behavior":{"description":"Controls how Stripe handles payment when a subscription update requires payment and `collection_method=charge_automatically`.","enum":["allow_incomplete","default_incomplete","error_if_incomplete","pending_if_incomplete"],"type":"string"},"price":{"description":"The ID of the price object. You can use either `price` or `price_data`, but not both, to set or change this item's price. If you're updating an existing item without changing its price, omit both. When changing a subscription item's price, `quantity` is set to 1 unless a `quantity` parameter is provided.","maxLength":5000,"type":"string"},"price_data":{"description":"Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline. You can use either `price` or `price_data`, but not both, to set or change this item's price. If you're updating an existing item without changing its price, omit both.","properties":{"currency":{"format":"currency","type":"string"},"product":{"maxLength":5000,"type":"string"},"recurring":{"properties":{"interval":{},"interval_count":{}},"required":["interval"],"title":"recurring_adhoc","type":"object"},"tax_behavior":{"enum":["exclusive","inclusive","unspecified"],"type":"string"},"unit_amount":{"type":"integer"},"unit_amount_decimal":{"format":"decimal","type":"string"}},"required":["currency","product","recurring"],"title":"recurring_price_data","type":"object"},"proration_behavior":{"description":"Determines how to handle [prorations](https://docs.stripe.com/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.","enum":["always_invoice","create_prorations","none"],"type":"string"},"proration_date":{"description":"If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](/api/invoices/create_preview) endpoint.","format":"unix-time","type":"integer"},"quantity":{"description":"The quantity you'd like to apply to the subscription item you're creating.","type":"integer"},"tax_rates":{"anyOf":[{"items":{"maxLength":5000,"type":"string"},"type":"array"},{"enum":[""],"type":"string"}],"description":"A list of [Tax Rate](https://docs.stripe.com/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://docs.stripe.com/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates."}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"item","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/subscription_items":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"billing_thresholds":{"explode":true,"style":"deepObject"},"current_trial":{"explode":true,"style":"deepObject"},"discounts":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"price_data":{"explode":true,"style":"deepObject"},"tax_rates":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"billing_thresholds":{"anyOf":[{"properties":{"usage_gte":{}},"required":["usage_gte"],"title":"item_billing_thresholds_param","type":"object"},{"enum":[""],"type":"string"}],"description":"Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds."},"current_trial":{"description":"The trial offer to apply to this subscription item.","properties":{"trial_offer":{"maxLength":5000,"type":"string"}},"required":["trial_offer"],"title":"current_trial_param","type":"object"},"discounts":{"anyOf":[{"items":{"properties":{},"title":"discounts_data_param","type":"object"},"type":"array"},{"enum":[""],"type":"string"}],"description":"The coupons to redeem into discounts for the subscription item."},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"payment_behavior":{"description":"Controls how Stripe handles payment when a subscription update requires payment and `collection_method=charge_automatically`.","enum":["allow_incomplete","default_incomplete","error_if_incomplete","pending_if_incomplete"],"type":"string"},"price":{"description":"The ID of the price object.","maxLength":5000,"type":"string"},"price_data":{"description":"Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline.","properties":{"currency":{"format":"currency","type":"string"},"product":{"maxLength":5000,"type":"string"},"recurring":{"properties":{"interval":{},"interval_count":{}},"required":["interval"],"title":"recurring_adhoc","type":"object"},"tax_behavior":{"enum":["exclusive","inclusive","unspecified"],"type":"string"},"unit_amount":{"type":"integer"},"unit_amount_decimal":{"format":"decimal","type":"string"}},"required":["currency","product","recurring"],"title":"recurring_price_data","type":"object"},"proration_behavior":{"description":"Determines how to handle [prorations](https://docs.stripe.com/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.","enum":["always_invoice","create_prorations","none"],"type":"string"},"proration_date":{"description":"If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](/api/invoices/create_preview) endpoint.","format":"unix-time","type":"integer"},"quantity":{"description":"The quantity you'd like to apply to the subscription item you're creating.","type":"integer"},"subscription":{"description":"The identifier of the subscription to modify.","maxLength":5000,"type":"string"},"tax_rates":{"anyOf":[{"items":{"maxLength":5000,"type":"string"},"type":"array"},{"enum":[""],"type":"string"}],"description":"A list of [Tax Rate](https://docs.stripe.com/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://docs.stripe.com/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates."}},"required":["subscription"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/subscription_items":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"type":"string"},"style":"form","index$":3},{"description":"The ID of the subscription whose items will be retrieved.","in":"query","name":"subscription","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4}]},"GET /v1/subscription_items/{item}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"item","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const subscription_item_ref01_ent = client.SubscriptionItem()
    let subscription_item_ref01_data = setup.data.new.subscription_item['subscription_item_ref01']

    subscription_item_ref01_data = (await subscription_item_ref01_ent.create(subscription_item_ref01_data)).data()
    assert(null != subscription_item_ref01_data.id)


    // LIST
    const subscription_item_ref01_match: any = {}

    const subscription_item_ref01_list = (await subscription_item_ref01_ent.list(subscription_item_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(subscription_item_ref01_list, { id: subscription_item_ref01_data.id })))


    // LOAD
    const subscription_item_ref01_match_dt0: any = {}
    subscription_item_ref01_match_dt0.id = subscription_item_ref01_data.id
    const subscription_item_ref01_data_dt0 = (await subscription_item_ref01_ent.load(subscription_item_ref01_match_dt0)).data()
    assert(subscription_item_ref01_data_dt0.id === subscription_item_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/subscription_item/SubscriptionItemTestData.json')

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
    ['subscription_item01','subscription_item02','subscription_item03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_SUBSCRIPTION_ITEM_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_SUBSCRIPTION_ITEM_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_SUBSCRIPTION_ITEM_ENTID']
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
  
