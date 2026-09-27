

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


describe('FinancialAccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.FinancialAccount()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'financial_account.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active_features":{"a":true,"h":"Active Features","n":"active_features","r":false,"sh":"The array of paths to active Features in the Features hash.","t":"`$ARRAY`","key$":"active_features","index$":0},"balance":{"a":true,"h":"Balance","n":"balance","r":true,"sh":"Balance information for the FinancialAccount","t":"`$OBJECT`","key$":"balance","index$":1},"country":{"a":true,"h":"Country","n":"country","r":true,"sh":"Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).","t":"`$STRING`","key$":"country","index$":2},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":3},"features":{"a":true,"h":"Features","n":"features","r":true,"sh":"Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`.","t":"`$OBJECT`","key$":"features","index$":4},"financial_addresses":{"a":true,"h":"Financial Addresses","n":"financial_addresses","r":true,"sh":"The set of credentials that resolve to a FinancialAccount.","t":"`$ARRAY`","key$":"financial_addresses","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":6},"is_default":{"a":true,"h":"Is Default","n":"is_default","r":false,"t":"`$BOOLEAN`","key$":"is_default","index$":7},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":8},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":9},"nickname":{"a":true,"h":"Nickname","n":"nickname","r":false,"sh":"The nickname for the FinancialAccount.","t":"`$STRING`","key$":"nickname","index$":10},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":11},"pending_features":{"a":true,"h":"Pending Features","n":"pending_features","r":false,"sh":"The array of paths to pending Features in the Features hash.","t":"`$ARRAY`","key$":"pending_features","index$":12},"platform_restrictions":{"a":true,"h":"Platform Restrictions","n":"platform_restrictions","r":false,"sh":"The set of functionalities that the platform can restrict on the FinancialAccount.","t":"`$ANY`","key$":"platform_restrictions","index$":13},"restricted_features":{"a":true,"h":"Restricted Features","n":"restricted_features","r":false,"sh":"The array of paths to restricted Features in the Features hash.","t":"`$ARRAY`","key$":"restricted_features","index$":14},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Status of this FinancialAccount.","t":"`$STRING`","key$":"status","index$":15},"status_details":{"a":true,"h":"Status Details","n":"status_details","r":true,"t":"`$OBJECT`","key$":"status_details","index$":16},"supported_currencies":{"a":true,"h":"Supported Currencies","n":"supported_currencies","r":true,"sh":"The currencies the FinancialAccount can hold a balance in.","t":"`$ARRAY`","key$":"supported_currencies","index$":17}},"id":{"field":"id","name":"id"},"name":"financial_account","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/treasury/financial_accounts/{financial_account}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"financial_account","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/treasury/financial_accounts/{financial_account}","q":{"exist":["id"]},"r":{"param":{"financial_account":"id"}},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"financial_accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/treasury/financial_accounts/{financial_account}/close","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"financial_account","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/treasury/financial_accounts/{financial_account}/close","q":{"$action":"close","exist":["id"]},"r":{"param":{"financial_account":"id"}},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"financial_accounts"},{"var":"id"},{"lit":"close"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/treasury/financial_accounts","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/treasury/financial_accounts","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"financial_accounts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/treasury/financial_accounts","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/v1/treasury/financial_accounts","q":{"exist":["created","ending_before","expand","limit","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"financial_accounts"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/treasury/financial_accounts/{financial_account}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"financial_account","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/treasury/financial_accounts/{financial_account}","q":{"exist":["expand","id"]},"r":{"param":{"financial_account":"id"}},"s":[{"lit":"v1"},{"lit":"treasury"},{"lit":"financial_accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"financial_account","name__orig":"financial_account","Name":"FinancialAccount","name_":"financial_account","name-":"financial-account","NAME":"FINANCIAL_ACCOUNT","index$":59}, {"active":true,"entity":"financial_account","key$":"BasicFinancialAccountFlow","kind":"basic","name":"BasicFinancialAccountFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"financial_account_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"financial_account_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"financial_account_ref01","srcdatavar":"financial_account_ref01_data","suffix":"_dt0"},"m":{"id":"financial_account01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-financial_account_ref01"}}],"index$":2}]}, 'FinancialAccount', {"POST /v1/treasury/financial_accounts/{financial_account}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"features":{"explode":true,"style":"deepObject"},"forwarding_settings":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"nickname":{"explode":true,"style":"deepObject"},"platform_restrictions":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"features":{"description":"Encodes whether a FinancialAccount has access to a particular feature, with a status enum and associated `status_details`. Stripe or the platform may control features via the requested field.","properties":{"card_issuing":{"properties":{"requested":{}},"required":["requested"],"title":"access","type":"object"},"deposit_insurance":{"properties":{"requested":{}},"required":["requested"],"title":"access","type":"object"},"financial_addresses":{"properties":{"aba":{}},"title":"financial_addresses","type":"object"},"inbound_transfers":{"properties":{"ach":{}},"title":"inbound_transfers","type":"object"},"intra_stripe_flows":{"properties":{"requested":{}},"required":["requested"],"title":"access","type":"object"},"outbound_payments":{"properties":{"ach":{},"us_domestic_wire":{}},"title":"outbound_payments","type":"object"},"outbound_transfers":{"properties":{"ach":{},"us_domestic_wire":{}},"title":"outbound_transfers","type":"object"}},"title":"feature_access","type":"object"},"forwarding_settings":{"description":"A different bank account where funds can be deposited/debited in order to get the closing FA's balance to $0","properties":{"financial_account":{"type":"string"},"payment_method":{"maxLength":5000,"type":"string"},"type":{"enum":["financial_account","payment_method"],"type":"string"}},"required":["type"],"title":"forwarding_settings","type":"object"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"nickname":{"anyOf":[{"maxLength":5000,"type":"string"},{"enum":[""],"type":"string"}],"description":"The nickname for the FinancialAccount."},"platform_restrictions":{"description":"The set of functionalities that the platform can restrict on the FinancialAccount.","properties":{"inbound_flows":{"enum":["restricted","unrestricted"],"type":"string"},"outbound_flows":{"enum":["restricted","unrestricted"],"type":"string"}},"title":"platform_restrictions","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"financial_account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/treasury/financial_accounts/{financial_account}/close":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"forwarding_settings":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"forwarding_settings":{"description":"A different bank account where funds can be deposited/debited in order to get the closing FA's balance to $0","properties":{"financial_account":{"type":"string"},"payment_method":{"maxLength":5000,"type":"string"},"type":{"enum":["financial_account","payment_method"],"type":"string"}},"required":["type"],"title":"forwarding_settings","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"financial_account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/treasury/financial_accounts":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"features":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"nickname":{"explode":true,"style":"deepObject"},"platform_restrictions":{"explode":true,"style":"deepObject"},"supported_currencies":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"features":{"description":"Encodes whether a FinancialAccount has access to a particular feature. Stripe or the platform can control features via the requested field.","properties":{"card_issuing":{"properties":{"requested":{}},"required":["requested"],"title":"access","type":"object"},"deposit_insurance":{"properties":{"requested":{}},"required":["requested"],"title":"access","type":"object"},"financial_addresses":{"properties":{"aba":{}},"title":"financial_addresses","type":"object"},"inbound_transfers":{"properties":{"ach":{}},"title":"inbound_transfers","type":"object"},"intra_stripe_flows":{"properties":{"requested":{}},"required":["requested"],"title":"access","type":"object"},"outbound_payments":{"properties":{"ach":{},"us_domestic_wire":{}},"title":"outbound_payments","type":"object"},"outbound_transfers":{"properties":{"ach":{},"us_domestic_wire":{}},"title":"outbound_transfers","type":"object"}},"title":"feature_access","type":"object"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"nickname":{"anyOf":[{"maxLength":5000,"type":"string"},{"enum":[""],"type":"string"}],"description":"The nickname for the FinancialAccount."},"platform_restrictions":{"description":"The set of functionalities that the platform can restrict on the FinancialAccount.","properties":{"inbound_flows":{"enum":["restricted","unrestricted"],"type":"string"},"outbound_flows":{"enum":["restricted","unrestricted"],"type":"string"}},"title":"platform_restrictions","type":"object"},"supported_currencies":{"description":"The currencies the FinancialAccount can hold a balance in.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"required":["supported_currencies"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/treasury/financial_accounts":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return FinancialAccounts that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":0},{"description":"An object ID cursor for use in pagination.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit ranging from 1 to 100 (defaults to 10).","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"An object ID cursor for use in pagination.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4},{"description":"Only return FinancialAccounts that have the given status: `open` or `closed`","in":"query","name":"status","required":false,"schema":{"enum":["closed","open"],"type":"string","x-stripeBypassValidation":true},"style":"form","index$":5}]},"GET /v1/treasury/financial_accounts/{financial_account}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"financial_account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const financial_account_ref01_ent = client.FinancialAccount()
    let financial_account_ref01_data = setup.data.new.financial_account['financial_account_ref01']

    financial_account_ref01_data = (await financial_account_ref01_ent.create(financial_account_ref01_data)).data()
    assert(null != financial_account_ref01_data.id)


    // LIST
    const financial_account_ref01_match: any = {}

    const financial_account_ref01_list = (await financial_account_ref01_ent.list(financial_account_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(financial_account_ref01_list, { id: financial_account_ref01_data.id })))


    // LOAD
    const financial_account_ref01_match_dt0: any = {}
    financial_account_ref01_match_dt0.id = financial_account_ref01_data.id
    const financial_account_ref01_data_dt0 = (await financial_account_ref01_ent.load(financial_account_ref01_match_dt0)).data()
    assert(financial_account_ref01_data_dt0.id === financial_account_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/financial_account/FinancialAccountTestData.json')

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
    ['financial_account01','financial_account02','financial_account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_FINANCIAL_ACCOUNT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_FINANCIAL_ACCOUNT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_FINANCIAL_ACCOUNT_ENTID']
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
  
