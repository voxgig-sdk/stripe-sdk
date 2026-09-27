
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


describe('SourceTransactionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.SourceTransaction()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"ach_credit_transfer":{"a":true,"h":"Ach Credit Transfer","n":"ach_credit_transfer","r":false,"t":"`$OBJECT`","key$":"ach_credit_transfer","index$":0},"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver.","t":"`$INTEGER`","key$":"amount","index$":1},"chf_credit_transfer":{"a":true,"h":"Chf Credit Transfer","n":"chf_credit_transfer","r":false,"t":"`$OBJECT`","key$":"chf_credit_transfer","index$":2},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":3},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.","t":"`$STRING`","key$":"currency","index$":4},"gbp_credit_transfer":{"a":true,"h":"Gbp Credit Transfer","n":"gbp_credit_transfer","r":false,"t":"`$OBJECT`","key$":"gbp_credit_transfer","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":6},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":7},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":8},"paper_check":{"a":true,"h":"Paper Check","n":"paper_check","r":false,"t":"`$OBJECT`","key$":"paper_check","index$":9},"sepa_credit_transfer":{"a":true,"h":"Sepa Credit Transfer","n":"sepa_credit_transfer","r":false,"t":"`$OBJECT`","key$":"sepa_credit_transfer","index$":10},"source":{"a":true,"h":"Source","n":"source","r":true,"sh":"The ID of the source this transaction is attached to.","t":"`$STRING`","key$":"source","index$":11},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the transaction, one of `succeeded`, `pending`, or `failed`.","t":"`$STRING`","key$":"status","index$":12},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of source this transaction is attached to.","t":"`$STRING`","key$":"type","index$":13}},"id":{"field":"id","name":"id"},"name":"source_transaction","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/sources/{source}/source_transactions","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"source","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/sources/{source}/source_transactions","q":{"exist":["ending_before","expand","id","limit","starting_after"]},"r":{"param":{"source":"id"}},"s":[{"lit":"v1"},{"lit":"sources"},{"var":"id"},{"lit":"source_transactions"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/sources/{source}/source_transactions/{source_transaction}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"source_transaction","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"source_id","or":"source","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/sources/{source}/source_transactions/{source_transaction}","q":{"exist":["expand","id","source_id"]},"r":{"param":{"source":"source_id","source_transaction":"id"}},"s":[{"lit":"v1"},{"lit":"sources"},{"var":"source_id"},{"lit":"source_transactions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.source"]]},"key$":"source_transaction","name__orig":"source_transaction","Name":"SourceTransaction","name_":"source_transaction","name-":"source-transaction","NAME":"SOURCE_TRANSACTION","index$":128}, {"active":true,"entity":"source_transaction","key$":"BasicSourceTransactionFlow","kind":"basic","name":"BasicSourceTransactionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"source":"source01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"source_transaction_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"source_transaction_ref01","srcdatavar":"source_transaction_ref01_data","suffix":"_dt0"},"m":{"id":"source_transaction01","source_id":"source01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-source_transaction_ref01"}}],"index$":1}]}, 'SourceTransaction', {"GET /v1/sources/{source}/source_transactions":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"in":"path","name":"source","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4}]},"GET /v1/sources/{source}/source_transactions/{source_transaction}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"source","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1},{"in":"path","name":"source_transaction","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let source_transaction_ref01_data = Object.values(setup.data.existing.source_transaction)[0]

    // LIST
    const source_transaction_ref01_ent = client.SourceTransaction()
    const source_transaction_ref01_match = {}
    source_transaction_ref01_match['source'] = setup.idmap['source01']

    const source_transaction_ref01_list = (await source_transaction_ref01_ent.list(source_transaction_ref01_match)).map((e) => e.data())


    // LOAD
    const source_transaction_ref01_match_dt0 = {}
    source_transaction_ref01_match_dt0.id = source_transaction_ref01_data.id
    const source_transaction_ref01_data_dt0 = (await source_transaction_ref01_ent.load(source_transaction_ref01_match_dt0)).data()
    assert(source_transaction_ref01_data_dt0.id === source_transaction_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/source_transaction/SourceTransactionTestData.json')

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
    ['source_transaction01','source_transaction02','source_transaction03','source01','source02','source03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_SOURCE_TRANSACTION_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_SOURCE_TRANSACTION_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_SOURCE_TRANSACTION_ENTID']
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
  
