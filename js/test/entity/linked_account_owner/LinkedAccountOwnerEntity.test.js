
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


describe('LinkedAccountOwnerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.LinkedAccountOwner()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"email":{"a":true,"h":"Email","n":"email","r":false,"sh":"The email address of the owner.","t":"`$STRING`","key$":"email","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The full name of the owner.","t":"`$STRING`","key$":"name","index$":2},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":3},"ownership":{"a":true,"h":"Ownership","n":"ownership","r":true,"sh":"The ownership object that this owner belongs to.","t":"`$STRING`","key$":"ownership","index$":4},"phone":{"a":true,"h":"Phone","n":"phone","r":false,"sh":"The raw phone number of the owner.","t":"`$STRING`","key$":"phone","index$":5},"raw_address":{"a":true,"h":"Raw Address","n":"raw_address","r":false,"sh":"The raw physical address of the owner.","t":"`$STRING`","key$":"raw_address","index$":6},"refreshed_at":{"a":true,"fo":"unix-time","h":"Refreshed At","n":"refreshed_at","r":false,"sh":"The timestamp of the refresh that updated this owner.","t":"`$INTEGER`","key$":"refreshed_at","index$":7}},"id":{"field":"id","name":"id"},"name":"linked_account_owner","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/linked_accounts/{account}/owners","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account","or":"account","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"ownership","or":"ownership","r":true,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v1/linked_accounts/{account}/owners","q":{"exist":["account","ending_before","expand","limit","ownership","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"linked_accounts"},{"var":"account"},{"lit":"owners"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.linked_account"]]},"key$":"linked_account_owner","name__orig":"linked_account_owner","Name":"LinkedAccountOwner","name_":"linked_account_owner","name-":"linked-account-owner","NAME":"LINKED_ACCOUNT_OWNER","index$":73}, {"active":true,"entity":"linked_account_owner","key$":"BasicLinkedAccountOwnerFlow","kind":"basic","name":"BasicLinkedAccountOwnerFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"linked_account_owner_ref01"}}],"index$":0}]}, 'LinkedAccountOwner', {"GET /v1/linked_accounts/{account}/owners":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"The ID of the ownership object to fetch owners from.","in":"query","name":"ownership","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let linked_account_owner_ref01_data = Object.values(setup.data.existing.linked_account_owner)[0]

    // LIST
    const linked_account_owner_ref01_ent = client.LinkedAccountOwner()
    const linked_account_owner_ref01_match = {}
    linked_account_owner_ref01_match['account'] = setup.idmap['account01']

    const linked_account_owner_ref01_list = (await linked_account_owner_ref01_ent.list(linked_account_owner_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/linked_account_owner/LinkedAccountOwnerTestData.json')

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
    ['linked_account_owner01','linked_account_owner02','linked_account_owner03','linked_account01','linked_account02','linked_account03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_LINKED_ACCOUNT_OWNER_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_LINKED_ACCOUNT_OWNER_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_LINKED_ACCOUNT_OWNER_ENTID']
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
  
