
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


describe('BankAccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.BankAccount()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account":{"a":true,"h":"Account","n":"account","r":false,"sh":"The account this bank account belongs to.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"account","index$":0},"account_holder_name":{"a":true,"h":"Account Holder Name","n":"account_holder_name","r":false,"sh":"The name of the person or business that owns the bank account.","t":"`$STRING`","key$":"account_holder_name","index$":1},"account_holder_type":{"a":true,"h":"Account Holder Type","n":"account_holder_type","r":false,"sh":"The type of entity that holds the account.","t":"`$STRING`","key$":"account_holder_type","index$":2},"account_type":{"a":true,"h":"Account Type","n":"account_type","r":false,"sh":"The bank account type.","t":"`$STRING`","key$":"account_type","index$":3},"available_payout_methods":{"a":true,"h":"Available Payout Methods","n":"available_payout_methods","r":false,"sh":"A set of available payout methods for this bank account.","t":"`$ARRAY`","key$":"available_payout_methods","index$":4},"bank_name":{"a":true,"h":"Bank Name","n":"bank_name","r":false,"sh":"Name of the bank associated with the routing number (e.g., `WELLS FARGO`).","t":"`$STRING`","key$":"bank_name","index$":5},"country":{"a":true,"h":"Country","n":"country","r":true,"sh":"Two-letter ISO code representing the country the bank account is located in.","t":"`$STRING`","key$":"country","index$":6},"currency":{"a":true,"fo":"currency","h":"Currency","n":"currency","r":true,"sh":"Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.","t":"`$STRING`","key$":"currency","index$":7},"customer":{"a":true,"h":"Customer","n":"customer","r":false,"sh":"The ID of the customer that the bank account is associated with.","t":"`$ANY`","union":{"branches":17,"count":107011,"depth":64},"key$":"customer","index$":8},"default_for_currency":{"a":true,"h":"Default For Currency","n":"default_for_currency","r":false,"sh":"Whether this bank account is the default external account for its currency.","t":"`$BOOLEAN`","key$":"default_for_currency","index$":9},"fingerprint":{"a":true,"h":"Fingerprint","n":"fingerprint","r":false,"sh":"Uniquely identifies this particular bank account.","t":"`$STRING`","key$":"fingerprint","index$":10},"future_requirements":{"a":true,"h":"Future Requirements","n":"future_requirements","r":false,"sh":"Information about the [upcoming new requirements for the bank account](https://docs.stripe.com/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when.","t":"`$ANY`","key$":"future_requirements","index$":11},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":12},"last4":{"a":true,"h":"Last4","n":"last4","r":true,"sh":"The last four digits of the bank account number.","t":"`$STRING`","key$":"last4","index$":13},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":14},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":15},"requirements":{"a":true,"h":"Requirements","n":"requirements","r":false,"sh":"Information about the requirements for the bank account, including what information needs to be collected.","t":"`$ANY`","key$":"requirements","index$":16},"routing_number":{"a":true,"h":"Routing Number","n":"routing_number","r":false,"sh":"The routing transit number for the bank account.","t":"`$STRING`","key$":"routing_number","index$":17},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, `tokenized_account_number_deactivated` or `errored`.","t":"`$STRING`","key$":"status","index$":18}},"id":{"field":"id","name":"id"},"name":"bank_account","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/customers/{customer}/bank_accounts/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/customers/{customer}/bank_accounts/{id}","q":{"exist":["customer_id","id"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"bank_accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/customers/{customer}/bank_accounts/{id}/verify","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/customers/{customer}/bank_accounts/{id}/verify","q":{"$action":"verify","exist":["customer_id","id"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"bank_accounts"},{"var":"id"},{"lit":"verify"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/customers/{customer}/sources/{id}/verify","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"source_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/customers/{customer}/sources/{id}/verify","q":{"exist":["customer_id","source_id"]},"r":{"param":{"customer":"customer_id","id":"source_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"sources"},{"var":"source_id"},{"lit":"verify"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /v1/customers/{customer}/bank_accounts","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/customers/{customer}/bank_accounts","q":{"exist":["customer_id"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"bank_accounts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/customers/{customer}/bank_accounts","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/customers/{customer}/bank_accounts","q":{"exist":["customer_id","ending_before","expand","limit","starting_after"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"bank_accounts"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/customers/{customer}/bank_accounts/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/customers/{customer}/bank_accounts/{id}","q":{"exist":["customer_id","expand","id"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"bank_accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/customers/{customer}/bank_accounts/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v1/customers/{customer}/bank_accounts/{id}","q":{"exist":["customer_id","id"]},"r":{"param":{"customer":"customer_id"}},"s":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"bank_accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.customer"],["$.main.kit.entity.customer","$.main.kit.entity.source"]]},"key$":"bank_account","name__orig":"bank_account","Name":"BankAccount","name_":"bank_account","name-":"bank-account","NAME":"BANK_ACCOUNT","index$":14}, {"active":true,"entity":"bank_account","key$":"BasicBankAccountFlow","kind":"basic","name":"BasicBankAccountFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"bank_account_ref01"},"m":{"customer_id":"customer01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"customer_id":"customer01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"bank_account_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"bank_account_ref01","srcdatavar":"bank_account_ref01_data","suffix":"_dt0"},"m":{"customer_id":"customer01","id":"bank_account01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-bank_account_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"bank_account_ref01","suffix":"_rm0"},"m":{"customer_id":"customer01","id":"bank_account01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"customer_id":"customer01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"bank_account_ref01"}}],"index$":4}]}, 'BankAccount', {"POST /v1/customers/{customer}/bank_accounts/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"owner":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"account_holder_name":{"description":"The name of the person or business that owns the bank account.","maxLength":5000,"type":"string"},"account_holder_type":{"description":"The type of entity that holds the account. This can be either `individual` or `company`.","enum":["company","individual"],"maxLength":5000,"type":"string"},"address_city":{"description":"City/District/Suburb/Town/Village.","maxLength":5000,"type":"string"},"address_country":{"description":"Billing address country, if provided when creating card.","maxLength":5000,"type":"string"},"address_line1":{"description":"Address line 1 (Street address/PO Box/Company name).","maxLength":5000,"type":"string"},"address_line2":{"description":"Address line 2 (Apartment/Suite/Unit/Building).","maxLength":5000,"type":"string"},"address_state":{"description":"State/County/Province/Region.","maxLength":5000,"type":"string"},"address_zip":{"description":"ZIP or postal code.","maxLength":5000,"type":"string"},"exp_month":{"description":"Two digit number representing the card’s expiration month.","maxLength":5000,"type":"string"},"exp_year":{"description":"Four digit number representing the card’s expiration year.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"name":{"description":"Cardholder name.","maxLength":5000,"type":"string"},"owner":{"properties":{"address":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{}},"title":"source_address","type":"object"},"email":{"type":"string"},"name":{"maxLength":5000,"type":"string"},"phone":{"maxLength":5000,"type":"string"}},"title":"owner","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]},"POST /v1/customers/{customer}/bank_accounts/{id}/verify":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"amounts":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amounts":{"description":"Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.","items":{"type":"integer"},"type":"array"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]},"POST /v1/customers/{customer}/sources/{id}/verify":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"amounts":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"amounts":{"description":"Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.","items":{"type":"integer"},"type":"array"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]},"POST /v1/customers/{customer}/bank_accounts":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"bank_account":{"explode":true,"style":"deepObject"},"card":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"alipay_account":{"description":"A token returned by [Stripe.js](https://stripe.com/docs/js) representing the user’s Alipay account details.","maxLength":5000,"type":"string"},"bank_account":{"anyOf":[{"properties":{"account_holder_name":{},"account_holder_type":{},"account_number":{},"country":{},"currency":{},"object":{},"routing_number":{}},"required":["account_number","country"],"title":"customer_payment_source_bank_account","type":"object"},{"maxLength":5000,"type":"string"}],"description":"Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details."},"card":{"anyOf":[{"properties":{"address_city":{},"address_country":{},"address_line1":{},"address_line2":{},"address_state":{},"address_zip":{},"cvc":{},"encrypted":{},"exp_month":{},"exp_year":{},"metadata":{},"name":{},"network_token":{},"number":{},"object":{},"swipe_data":{}},"required":["exp_month","exp_year","number"],"title":"customer_payment_source_card","type":"object"},{"maxLength":5000,"type":"string"}],"description":"A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js).","x-stripeBypassValidation":true},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"source":{"description":"Please refer to full [documentation](https://api.stripe.com) instead.","maxLength":5000,"type":"string","x-stripeBypassValidation":true}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"GET /v1/customers/{customer}/bank_accounts":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"type":"string"},"style":"form","index$":4}]},"GET /v1/customers/{customer}/bank_accounts/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":2}]},"DELETE /v1/customers/{customer}/bank_accounts/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"customer","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"in":"path","name":"id","required":true,"schema":{"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const bank_account_ref01_ent = client.BankAccount()
    let bank_account_ref01_data = setup.data.new.bank_account['bank_account_ref01']
    bank_account_ref01_data['customer_id'] = setup.idmap['customer01']

    bank_account_ref01_data = (await bank_account_ref01_ent.create(bank_account_ref01_data)).data()
    assert(null != bank_account_ref01_data.id)


    // LIST
    const bank_account_ref01_match = {}
    bank_account_ref01_match['customer_id'] = setup.idmap['customer01']

    const bank_account_ref01_list = (await bank_account_ref01_ent.list(bank_account_ref01_match)).map((e) => e.data())

    assert(!isempty(select(bank_account_ref01_list, { id: bank_account_ref01_data.id })))


    // LOAD
    const bank_account_ref01_match_dt0 = {}
    bank_account_ref01_match_dt0.id = bank_account_ref01_data.id
    const bank_account_ref01_data_dt0 = (await bank_account_ref01_ent.load(bank_account_ref01_match_dt0)).data()
    assert(bank_account_ref01_data_dt0.id === bank_account_ref01_data.id)


    // REMOVE
    const bank_account_ref01_match_rm0 = {}
    bank_account_ref01_match_rm0.id = bank_account_ref01_data.id
    await bank_account_ref01_ent.remove(bank_account_ref01_match_rm0)
  

    // LIST
    const bank_account_ref01_match_rt0 = {}
    bank_account_ref01_match_rt0['customer_id'] = setup.idmap['customer01']

    const bank_account_ref01_list_rt0 = (await bank_account_ref01_ent.list(bank_account_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(bank_account_ref01_list_rt0, { id: bank_account_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/bank_account/BankAccountTestData.json')

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
    ['bank_account01','bank_account02','bank_account03','customer01','customer02','customer03','source01','source02','source03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_BANK_ACCOUNT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_BANK_ACCOUNT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_BANK_ACCOUNT_ENTID']
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
  
