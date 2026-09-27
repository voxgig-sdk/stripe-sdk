
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


describe('LinkedAccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.LinkedAccount()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_holder":{"a":true,"h":"Account Holder","n":"account_holder","r":false,"sh":"The account holder that this account belongs to.","t":"`$ANY`","union":{"branches":17,"count":107346,"depth":64},"key$":"account_holder","index$":0},"account_numbers":{"a":true,"h":"Account Numbers","n":"account_numbers","r":false,"sh":"Details about the account numbers.","t":"`$ARRAY`","key$":"account_numbers","index$":1},"balance":{"a":true,"h":"Balance","n":"balance","r":false,"sh":"The most recent information about the account's balance.","t":"`$ANY`","key$":"balance","index$":2},"balance_refresh":{"a":true,"h":"Balance Refresh","n":"balance_refresh","r":false,"sh":"The state of the most recent attempt to refresh the account balance.","t":"`$ANY`","key$":"balance_refresh","index$":3},"category":{"a":true,"h":"Category","n":"category","r":true,"sh":"The type of the account.","t":"`$STRING`","key$":"category","index$":4},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":5},"display_name":{"a":true,"h":"Display Name","n":"display_name","r":false,"sh":"A human-readable name that has been assigned to this account, either by the account holder or by the institution.","t":"`$STRING`","key$":"display_name","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":7},"institution_name":{"a":true,"h":"Institution Name","n":"institution_name","r":true,"sh":"The name of the institution that holds this account.","t":"`$STRING`","key$":"institution_name","index$":8},"last4":{"a":true,"h":"Last4","n":"last4","r":false,"sh":"The last 4 digits of the account number.","t":"`$STRING`","key$":"last4","index$":9},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":10},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":11},"ownership":{"a":true,"h":"Ownership","n":"ownership","r":false,"sh":"The most recent information about the account's owners.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"ownership","index$":12},"ownership_refresh":{"a":true,"h":"Ownership Refresh","n":"ownership_refresh","r":false,"sh":"The state of the most recent attempt to refresh the account owners.","t":"`$ANY`","key$":"ownership_refresh","index$":13},"permissions":{"a":true,"h":"Permissions","n":"permissions","r":false,"sh":"The list of permissions granted by this account.","t":"`$ARRAY`","key$":"permissions","index$":14},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the link to the account.","t":"`$STRING`","key$":"status","index$":15},"status_details":{"a":true,"h":"Status Details","n":"status_details","r":false,"t":"`$OBJECT`","key$":"status_details","index$":16},"subcategory":{"a":true,"h":"Subcategory","n":"subcategory","r":true,"sh":"If `category` is `cash`, one of: - `checking` - `savings` - `other` If `category` is `credit`, one of: - `mortgage` - `line_of_credit` - `credit_card` - `other` If `category` is `investment` or `other`, this will be `other`.","t":"`$STRING`","key$":"subcategory","index$":17},"subscriptions":{"a":true,"h":"Subscriptions","n":"subscriptions","r":false,"sh":"The list of data refresh subscriptions requested on this account.","t":"`$ARRAY`","key$":"subscriptions","index$":18},"supported_payment_method_types":{"a":true,"h":"Supported Payment Method Types","n":"supported_payment_method_types","r":true,"sh":"The [PaymentMethod type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account.","t":"`$ARRAY`","key$":"supported_payment_method_types","index$":19},"transaction_refresh":{"a":true,"h":"Transaction Refresh","n":"transaction_refresh","r":false,"sh":"The state of the most recent attempt to refresh the account transactions.","t":"`$ANY`","key$":"transaction_refresh","index$":20}},"id":{"field":"id","name":"id"},"name":"linked_account","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/linked_accounts","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"account_holder","or":"account_holder","r":false,"t":"`$OBJECT`","index$":0},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"session","or":"session","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/v1/linked_accounts","q":{"exist":["account_holder","ending_before","expand","limit","session","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"linked_accounts"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"linked_account","name__orig":"linked_account","Name":"LinkedAccount","name_":"linked_account","name-":"linked-account","NAME":"LINKED_ACCOUNT","index$":72}, {"active":true,"entity":"linked_account","key$":"BasicLinkedAccountFlow","kind":"basic","name":"BasicLinkedAccountFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"linked_account_ref01"}}],"index$":0}]}, 'LinkedAccount', {"GET /v1/linked_accounts":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"If present, only return accounts that belong to the specified account holder. `account_holder[customer]` and `account_holder[account]` are mutually exclusive.","explode":true,"in":"query","name":"account_holder","required":false,"schema":{"properties":{"account":{"maxLength":5000,"type":"string"},"customer":{"maxLength":5000,"type":"string"},"customer_account":{"maxLength":5000,"type":"string"}},"title":"accountholder_params","type":"object"},"style":"deepObject","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"If present, only return accounts that were collected as part of the given session.","in":"query","name":"session","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":4},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let linked_account_ref01_data = Object.values(setup.data.existing.linked_account)[0]

    // LIST
    const linked_account_ref01_ent = client.LinkedAccount()
    const linked_account_ref01_match = {}

    const linked_account_ref01_list = (await linked_account_ref01_ent.list(linked_account_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/linked_account/LinkedAccountTestData.json')

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
    ['linked_account01','linked_account02','linked_account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_LINKED_ACCOUNT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_LINKED_ACCOUNT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_LINKED_ACCOUNT_ENTID']
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
  
