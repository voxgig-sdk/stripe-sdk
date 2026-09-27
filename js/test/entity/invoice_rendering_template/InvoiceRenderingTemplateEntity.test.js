
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


describe('InvoiceRenderingTemplateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.InvoiceRenderingTemplate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":1},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":2},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":3},"nickname":{"a":true,"h":"Nickname","n":"nickname","r":false,"sh":"A brief description of the template, hidden from customers","t":"`$STRING`","key$":"nickname","index$":4},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":5},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the template, one of `active` or `archived`.","t":"`$STRING`","key$":"status","index$":6},"version":{"a":true,"h":"Version","n":"version","r":true,"sh":"Version of this template; version increases by one when an update on the template changes any field that controls invoice rendering","t":"`$INTEGER`","key$":"version","index$":7}},"id":{"field":"id","name":"id"},"name":"invoice_rendering_template","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/invoice_rendering_templates/{template}/archive","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"template","or":"template","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/invoice_rendering_templates/{template}/archive","q":{"$action":"archive","exist":["template"]},"r":{},"s":[{"lit":"v1"},{"lit":"invoice_rendering_templates"},{"var":"template"},{"lit":"archive"}],"t":{"req":"`reqdata`","res":"`body.metadata`"},"index$":0},{"a":true,"co":{"id":"POST /v1/invoice_rendering_templates/{template}/unarchive","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"template","or":"template","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/invoice_rendering_templates/{template}/unarchive","q":{"$action":"unarchive","exist":["template"]},"r":{},"s":[{"lit":"v1"},{"lit":"invoice_rendering_templates"},{"var":"template"},{"lit":"unarchive"}],"t":{"req":"`reqdata`","res":"`body.metadata`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/invoice_rendering_templates","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v1/invoice_rendering_templates","q":{"exist":["ending_before","expand","limit","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"invoice_rendering_templates"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/invoice_rendering_templates/{template}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"template","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"k":"query","n":"version","or":"version","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/v1/invoice_rendering_templates/{template}","q":{"exist":["expand","id","version"]},"r":{"param":{"template":"id"}},"s":[{"lit":"v1"},{"lit":"invoice_rendering_templates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.metadata`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"invoice_rendering_template","name__orig":"invoice_rendering_template","Name":"InvoiceRenderingTemplate","name_":"invoice_rendering_template","name-":"invoice-rendering-template","NAME":"INVOICE_RENDERING_TEMPLATE","index$":68}, {"active":true,"entity":"invoice_rendering_template","key$":"BasicInvoiceRenderingTemplateFlow","kind":"basic","name":"BasicInvoiceRenderingTemplateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"invoice_rendering_template_ref01"},"m":{"template":"template01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"invoice_rendering_template_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"invoice_rendering_template_ref01","srcdatavar":"invoice_rendering_template_ref01_data","suffix":"_dt0"},"m":{"id":"invoice_rendering_template01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-invoice_rendering_template_ref01"}}],"index$":2}]}, 'InvoiceRenderingTemplate', {"POST /v1/invoice_rendering_templates/{template}/archive":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"template","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/invoice_rendering_templates/{template}/unarchive":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"template","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"GET /v1/invoice_rendering_templates":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3},{"in":"query","name":"status","required":false,"schema":{"enum":["active","archived"],"type":"string"},"style":"form","index$":4}]},"GET /v1/invoice_rendering_templates/{template}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"template","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1},{"in":"query","name":"version","required":false,"schema":{"type":"integer"},"style":"form","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const invoice_rendering_template_ref01_ent = client.InvoiceRenderingTemplate()
    let invoice_rendering_template_ref01_data = setup.data.new.invoice_rendering_template['invoice_rendering_template_ref01']
    invoice_rendering_template_ref01_data['template'] = setup.idmap['template01']

    invoice_rendering_template_ref01_data = (await invoice_rendering_template_ref01_ent.create(invoice_rendering_template_ref01_data)).data()
    assert(null != invoice_rendering_template_ref01_data.id)


    // LIST
    const invoice_rendering_template_ref01_match = {}

    const invoice_rendering_template_ref01_list = (await invoice_rendering_template_ref01_ent.list(invoice_rendering_template_ref01_match)).map((e) => e.data())

    assert(!isempty(select(invoice_rendering_template_ref01_list, { id: invoice_rendering_template_ref01_data.id })))


    // LOAD
    const invoice_rendering_template_ref01_match_dt0 = {}
    invoice_rendering_template_ref01_match_dt0.id = invoice_rendering_template_ref01_data.id
    const invoice_rendering_template_ref01_data_dt0 = (await invoice_rendering_template_ref01_ent.load(invoice_rendering_template_ref01_match_dt0)).data()
    assert(invoice_rendering_template_ref01_data_dt0.id === invoice_rendering_template_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/invoice_rendering_template/InvoiceRenderingTemplateTestData.json')

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
    ['invoice_rendering_template01','invoice_rendering_template02','invoice_rendering_template03','template01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_INVOICE_RENDERING_TEMPLATE_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_INVOICE_RENDERING_TEMPLATE_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_INVOICE_RENDERING_TEMPLATE_ENTID']
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
  
