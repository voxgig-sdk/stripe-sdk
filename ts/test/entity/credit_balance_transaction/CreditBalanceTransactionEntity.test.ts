

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


describe('CreditBalanceTransactionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.CreditBalanceTransaction()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'credit_balance_transaction.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":0},"credit":{"a":true,"h":"Credit","n":"credit","r":false,"sh":"Credit details for this credit balance transaction.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":8},"key$":"credit","index$":1},"credit_grant":{"a":true,"h":"Credit Grant","n":"credit_grant","r":true,"sh":"The credit grant associated with this credit balance transaction.","t":"`$ANY`","union":{"branches":3,"count":7,"depth":6},"key$":"credit_grant","index$":2},"debit":{"a":true,"h":"Debit","n":"debit","r":false,"sh":"Debit details for this credit balance transaction.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":8},"key$":"debit","index$":3},"effective_at":{"a":true,"fo":"unix-time","h":"Effective At","n":"effective_at","r":true,"sh":"The effective time of this credit balance transaction.","t":"`$INTEGER`","key$":"effective_at","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":5},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":6},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":7},"test_clock":{"a":true,"h":"Test Clock","n":"test_clock","r":false,"sh":"ID of the test clock this credit balance transaction belongs to.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"test_clock","index$":8},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of credit balance transaction (credit or debit).","t":"`$STRING`","key$":"type","index$":9}},"id":{"field":"id","name":"id"},"name":"credit_balance_transaction","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/billing/credit_balance_transactions","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"credit_grant","or":"credit_grant","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"customer","or":"customer","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"customer_account","or":"customer_account","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/v1/billing/credit_balance_transactions","q":{"exist":["credit_grant","customer","customer_account","ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"credit_balance_transactions"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/billing/credit_balance_transactions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/billing/credit_balance_transactions/{id}","q":{"exist":["expand","id"]},"r":{},"s":[{"lit":"v1"},{"lit":"billing"},{"lit":"credit_balance_transactions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"credit_balance_transaction","name__orig":"credit_balance_transaction","Name":"CreditBalanceTransaction","name_":"credit_balance_transaction","name-":"credit-balance-transaction","NAME":"CREDIT_BALANCE_TRANSACTION","index$":28}, {"active":true,"entity":"credit_balance_transaction","key$":"BasicCreditBalanceTransactionFlow","kind":"basic","name":"BasicCreditBalanceTransactionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"credit_balance_transaction_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"credit_balance_transaction_ref01","srcdatavar":"credit_balance_transaction_ref01_data","suffix":"_dt0"},"m":{"id":"credit_balance_transaction01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-credit_balance_transaction_ref01"}}],"index$":1}]}, 'CreditBalanceTransaction', {"GET /v1/billing/credit_balance_transactions":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"The credit grant for which to fetch credit balance transactions.","in":"query","name":"credit_grant","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"The customer whose credit balance transactions you're retrieving.","in":"query","name":"customer","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"The account representing the customer whose credit balance transactions you're retrieving.","in":"query","name":"customer_account","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":4},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":5},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6}]},"GET /v1/billing/credit_balance_transactions/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"description":"Unique identifier for the object.","in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let credit_balance_transaction_ref01_data = Object.values(setup.data.existing.credit_balance_transaction)[0] as any

    // LIST
    const credit_balance_transaction_ref01_ent = client.CreditBalanceTransaction()
    const credit_balance_transaction_ref01_match: any = {}

    const credit_balance_transaction_ref01_list = (await credit_balance_transaction_ref01_ent.list(credit_balance_transaction_ref01_match)).map((e: any) => e.data())


    // LOAD
    const credit_balance_transaction_ref01_match_dt0: any = {}
    credit_balance_transaction_ref01_match_dt0.id = credit_balance_transaction_ref01_data.id
    const credit_balance_transaction_ref01_data_dt0 = (await credit_balance_transaction_ref01_ent.load(credit_balance_transaction_ref01_match_dt0)).data()
    assert(credit_balance_transaction_ref01_data_dt0.id === credit_balance_transaction_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/credit_balance_transaction/CreditBalanceTransactionTestData.json')

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
    ['credit_balance_transaction01','credit_balance_transaction02','credit_balance_transaction03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_CREDIT_BALANCE_TRANSACTION_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_CREDIT_BALANCE_TRANSACTION_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_CREDIT_BALANCE_TRANSACTION_ENTID']
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
  
