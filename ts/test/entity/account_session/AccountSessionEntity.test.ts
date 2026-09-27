

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


describe('AccountSessionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.AccountSession()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'account_session.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_management":{"a":true,"h":"Account Management","n":"account_management","r":true,"t":"`$OBJECT`","key$":"account_management","index$":0},"account_onboarding":{"a":true,"h":"Account Onboarding","n":"account_onboarding","r":true,"t":"`$OBJECT`","key$":"account_onboarding","index$":1},"balance_report":{"a":true,"h":"Balance Report","n":"balance_report","r":true,"t":"`$OBJECT`","key$":"balance_report","index$":2},"balances":{"a":true,"h":"Balances","n":"balances","r":true,"t":"`$OBJECT`","key$":"balances","index$":3},"disputes_list":{"a":true,"h":"Disputes List","n":"disputes_list","r":true,"t":"`$OBJECT`","key$":"disputes_list","index$":4},"documents":{"a":true,"h":"Documents","n":"documents","r":true,"t":"`$OBJECT`","key$":"documents","index$":5},"financial_account":{"a":true,"h":"Financial Account","n":"financial_account","r":true,"t":"`$OBJECT`","key$":"financial_account","index$":6},"financial_account_transactions":{"a":true,"h":"Financial Account Transactions","n":"financial_account_transactions","r":true,"t":"`$OBJECT`","key$":"financial_account_transactions","index$":7},"instant_payouts_promotion":{"a":true,"h":"Instant Payouts Promotion","n":"instant_payouts_promotion","r":true,"t":"`$OBJECT`","key$":"instant_payouts_promotion","index$":8},"issuing_card":{"a":true,"h":"Issuing Card","n":"issuing_card","r":true,"t":"`$OBJECT`","key$":"issuing_card","index$":9},"issuing_cards_list":{"a":true,"h":"Issuing Cards List","n":"issuing_cards_list","r":true,"t":"`$OBJECT`","key$":"issuing_cards_list","index$":10},"notification_banner":{"a":true,"h":"Notification Banner","n":"notification_banner","r":true,"t":"`$OBJECT`","key$":"notification_banner","index$":11},"payment_details":{"a":true,"h":"Payment Details","n":"payment_details","r":true,"t":"`$OBJECT`","key$":"payment_details","index$":12},"payment_disputes":{"a":true,"h":"Payment Disputes","n":"payment_disputes","r":true,"t":"`$OBJECT`","key$":"payment_disputes","index$":13},"payment_method_settings":{"a":true,"h":"Payment Method Settings","n":"payment_method_settings","r":true,"t":"`$OBJECT`","key$":"payment_method_settings","index$":14},"payments":{"a":true,"h":"Payments","n":"payments","r":true,"t":"`$OBJECT`","key$":"payments","index$":15},"payout_details":{"a":true,"h":"Payout Details","n":"payout_details","r":true,"t":"`$OBJECT`","key$":"payout_details","index$":16},"payout_reconciliation_report":{"a":true,"h":"Payout Reconciliation Report","n":"payout_reconciliation_report","r":true,"t":"`$OBJECT`","key$":"payout_reconciliation_report","index$":17},"payouts":{"a":true,"h":"Payouts","n":"payouts","r":true,"t":"`$OBJECT`","key$":"payouts","index$":18},"payouts_list":{"a":true,"h":"Payouts List","n":"payouts_list","r":true,"t":"`$OBJECT`","key$":"payouts_list","index$":19},"tax_registrations":{"a":true,"h":"Tax Registrations","n":"tax_registrations","r":true,"t":"`$OBJECT`","key$":"tax_registrations","index$":20},"tax_settings":{"a":true,"h":"Tax Settings","n":"tax_settings","r":true,"t":"`$OBJECT`","key$":"tax_settings","index$":21}},"name":"account_session","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/account_sessions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/account_sessions","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"account_sessions"}],"t":{"req":"`reqdata`","res":"`body.components`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"account_session","name__orig":"account_session","Name":"AccountSession","name_":"account_session","name-":"account-session","NAME":"ACCOUNT_SESSION","index$":3}, {"active":true,"entity":"account_session","key$":"BasicAccountSessionFlow","kind":"basic","name":"BasicAccountSessionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"account_session_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'AccountSession', {"POST /v1/account_sessions":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"components":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"account":{"description":"The identifier of the account to create an Account Session for.","type":"string"},"components":{"description":"Each key of the dictionary represents an embedded component, and each embedded component maps to its configuration (e.g. whether it has been enabled or not).","properties":{"account_management":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"account_config_param","type":"object"},"account_onboarding":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"account_config_param","type":"object"},"balance_report":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"base_config_param","type":"object"},"balances":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"payouts_config_param","type":"object"},"disputes_list":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"disputes_list_config_param","type":"object"},"documents":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"base_config_param","type":"object"},"financial_account":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"financial_account_config_param","type":"object"},"financial_account_transactions":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"financial_account_transactions_config_param","type":"object"},"instant_payouts_promotion":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"instant_payouts_promotion_config_param","type":"object"},"issuing_card":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"issuing_card_config_param","type":"object"},"issuing_cards_list":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"issuing_cards_list_config_param","type":"object"},"notification_banner":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"account_config_param","type":"object"},"payment_details":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"payments_config_param","type":"object"},"payment_disputes":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"payment_disputes_config_param","type":"object"},"payment_method_settings":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"payment_method_settings_config_param","type":"object"},"payments":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"payments_config_param","type":"object"},"payout_details":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"base_config_param","type":"object"},"payout_reconciliation_report":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"base_config_param","type":"object"},"payouts":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"payouts_config_param","type":"object"},"payouts_list":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"base_config_param","type":"object"},"tax_registrations":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"base_config_param","type":"object"},"tax_settings":{"properties":{"enabled":{},"features":{}},"required":["enabled"],"title":"base_config_param","type":"object"}},"title":"account_session_create_components_param","type":"object"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"required":["account","components"],"type":"object"}}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const account_session_ref01_ent = client.AccountSession()
    let account_session_ref01_data = setup.data.new.account_session['account_session_ref01']

    account_session_ref01_data = (await account_session_ref01_ent.create(account_session_ref01_data)).data()
    assert(null != account_session_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/account_session/AccountSessionTestData.json')

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
    ['account_session01','account_session02','account_session03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_ACCOUNT_SESSION_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_ACCOUNT_SESSION_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_ACCOUNT_SESSION_ENTID']
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
  
