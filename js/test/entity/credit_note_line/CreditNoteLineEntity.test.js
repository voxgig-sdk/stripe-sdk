
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


describe('CreditNoteLineEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.CreditNoteLine()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts.","t":"`$INTEGER`","key$":"amount","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Description of the item being credited.","t":"`$STRING`","key$":"description","index$":1},"discount_amount":{"a":true,"h":"Discount Amount","n":"discount_amount","r":true,"sh":"The integer amount in cents (or local equivalent) representing the discount being credited for this line item.","t":"`$INTEGER`","key$":"discount_amount","index$":2},"discount_amounts":{"a":true,"h":"Discount Amounts","n":"discount_amounts","r":true,"sh":"The amount of discount calculated per discount for this line item","t":"`$ARRAY`","union":{"branches":3,"count":42,"depth":15},"key$":"discount_amounts","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":4},"invoice_line_item":{"a":true,"h":"Invoice Line Item","n":"invoice_line_item","r":false,"sh":"ID of the invoice line item being credited","t":"`$STRING`","key$":"invoice_line_item","index$":5},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":6},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":7},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":8},"pretax_credit_amounts":{"a":true,"h":"Pretax Credit Amounts","n":"pretax_credit_amounts","r":true,"sh":"The pretax credit amounts (ex: discount, credit grants, etc) for this line item.","t":"`$ARRAY`","union":{"branches":3,"count":63,"depth":16},"key$":"pretax_credit_amounts","index$":9},"quantity":{"a":true,"h":"Quantity","n":"quantity","r":false,"sh":"The number of units of product being credited.","t":"`$INTEGER`","key$":"quantity","index$":10},"tax_rates":{"a":true,"h":"Tax Rates","n":"tax_rates","r":true,"sh":"The tax rates which apply to the line item.","t":"`$ARRAY`","key$":"tax_rates","index$":11},"taxes":{"a":true,"h":"Taxes","n":"taxes","r":false,"sh":"The tax information of the line item.","t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":7},"key$":"taxes","index$":12},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`.","t":"`$STRING`","key$":"type","index$":13},"unit_amount":{"a":true,"h":"Unit Amount","n":"unit_amount","r":false,"sh":"The cost of each unit of product being credited.","t":"`$INTEGER`","key$":"unit_amount","index$":14},"unit_amount_decimal":{"a":true,"fo":"decimal","h":"Unit Amount Decimal","n":"unit_amount_decimal","r":false,"sh":"Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.","t":"`$STRING`","key$":"unit_amount_decimal","index$":15}},"id":{"field":"id","name":"id"},"name":"credit_note_line","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/credit_notes/{credit_note}/lines","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"credit_note","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/credit_notes/{credit_note}/lines","q":{"exist":["ending_before","expand","id","limit","starting_after"]},"r":{"param":{"credit_note":"id"}},"s":[{"lit":"v1"},{"lit":"credit_notes"},{"var":"id"},{"lit":"lines"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"credit_note_line","name__orig":"credit_note_line","Name":"CreditNoteLine","name_":"credit_note_line","name-":"credit-note-line","NAME":"CREDIT_NOTE_LINE","index$":31}, {"active":true,"entity":"credit_note_line","key$":"BasicCreditNoteLineFlow","kind":"basic","name":"BasicCreditNoteLineFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"credit_note":"credit_note01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"credit_note_line_ref01"}}],"index$":0}]}, 'CreditNoteLine', {"GET /v1/credit_notes/{credit_note}/lines":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"credit_note","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let credit_note_line_ref01_data = Object.values(setup.data.existing.credit_note_line)[0]

    // LIST
    const credit_note_line_ref01_ent = client.CreditNoteLine()
    const credit_note_line_ref01_match = {}
    credit_note_line_ref01_match['credit_note'] = setup.idmap['credit_note01']

    const credit_note_line_ref01_list = (await credit_note_line_ref01_ent.list(credit_note_line_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/credit_note_line/CreditNoteLineTestData.json')

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
    ['credit_note_line01','credit_note_line02','credit_note_line03','credit_note01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_CREDIT_NOTE_LINE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_CREDIT_NOTE_LINE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_CREDIT_NOTE_LINE_ENTID']
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
  
