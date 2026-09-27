

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


describe('CustomerSessionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.CustomerSession()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'customer_session.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"client_secret":{"a":true,"h":"Client Secret","n":"client_secret","r":true,"sh":"The client secret of this Customer Session.","t":"`$STRING`","key$":"client_secret","index$":0},"components":{"a":true,"h":"Components","n":"components","r":true,"sh":"Configuration for the components supported by this Customer Session.","t":"`$OBJECT`","key$":"components","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"customer":{"a":true,"h":"Customer","n":"customer","r":true,"sh":"The Customer the Customer Session was created for.","t":"`$ANY`","union":{"branches":17,"count":105029,"depth":64},"key$":"customer","index$":3},"customer_account":{"a":true,"h":"Customer Account","n":"customer_account","r":false,"sh":"The Account that the Customer Session was created for.","t":"`$STRING`","key$":"customer_account","index$":4},"expires_at":{"a":true,"fo":"unix-time","h":"Expires At","n":"expires_at","r":true,"sh":"The timestamp at which this Customer Session will expire.","t":"`$INTEGER`","key$":"expires_at","index$":5},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":6},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":7}},"name":"customer_session","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/customer_sessions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/customer_sessions","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"customer_sessions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"customer_session","name__orig":"customer_session","Name":"CustomerSession","name_":"customer_session","name-":"customer-session","NAME":"CUSTOMER_SESSION","index$":35}, {"active":true,"entity":"customer_session","key$":"BasicCustomerSessionFlow","kind":"basic","name":"BasicCustomerSessionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"customer_session_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'CustomerSession', {"POST /v1/customer_sessions":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"components":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"components":{"description":"Configuration for each component. At least 1 component must be enabled.","properties":{"active_entitlements":{"properties":{"enabled":{}},"required":["enabled"],"title":"active_entitlements_param","type":"object"},"buy_button":{"properties":{"enabled":{}},"required":["enabled"],"title":"buy_button_param","type":"object"},"customer_portal":{"properties":{"enabled":{}},"required":["enabled"],"title":"customer_portal_param","type":"object"},"customer_sheet":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"customer_sheet_param","type":"object"},"mobile_payment_element":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"mobile_payment_element_param","type":"object"},"payment_element":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"payment_element_param","type":"object"},"pricing_table":{"properties":{"enabled":{}},"required":["enabled"],"title":"pricing_table_param","type":"object"}},"title":"components","type":"object"},"customer":{"description":"The ID of an existing customer for which to create the Customer Session.","maxLength":5000,"type":"string"},"customer_account":{"description":"The ID of an existing Account for which to create the Customer Session.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"required":["components"],"type":"object"}}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const customer_session_ref01_ent = client.CustomerSession()
    let customer_session_ref01_data = setup.data.new.customer_session['customer_session_ref01']

    customer_session_ref01_data = (await customer_session_ref01_ent.create(customer_session_ref01_data)).data()
    assert(null != customer_session_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/customer_session/CustomerSessionTestData.json')

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
    ['customer_session01','customer_session02','customer_session03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_CUSTOMER_SESSION_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_CUSTOMER_SESSION_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_CUSTOMER_SESSION_ENTID']
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
  
