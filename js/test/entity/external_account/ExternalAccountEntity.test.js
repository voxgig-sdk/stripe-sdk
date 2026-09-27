
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


describe('ExternalAccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.ExternalAccount()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":true,"sh":"The list contains all external accounts that have been attached to the Stripe account.","t":"`$ARRAY`","union":{"branches":17,"count":106523,"depth":64},"key$":"data","index$":0},"has_more":{"a":true,"h":"Has More","n":"has_more","r":true,"sh":"True if this list has another page of items after this one that can be fetched.","t":"`$BOOLEAN`","key$":"has_more","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":3},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The URL where this list can be accessed.","t":"`$STRING`","key$":"url","index$":4}},"id":{"field":"id","name":"id"},"name":"external_account","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/accounts/{account}/bank_accounts/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/accounts/{account}/bank_accounts/{id}","q":{"exist":["account_id","id"]},"r":{"param":{"account":"account_id"}},"s":[{"lit":"v1"},{"lit":"accounts"},{"var":"account_id"},{"lit":"bank_accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/accounts/{account}/external_accounts/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/accounts/{account}/external_accounts/{id}","q":{"exist":["account_id","id"]},"r":{"param":{"account":"account_id"}},"s":[{"lit":"v1"},{"lit":"accounts"},{"var":"account_id"},{"lit":"external_accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/accounts/{account}/bank_accounts","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/accounts/{account}/bank_accounts","q":{"exist":["account_id"]},"r":{"param":{"account":"account_id"}},"s":[{"lit":"v1"},{"lit":"accounts"},{"var":"account_id"},{"lit":"bank_accounts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /v1/accounts/{account}/external_accounts","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/accounts/{account}/external_accounts","q":{"exist":["account_id"]},"r":{"param":{"account":"account_id"}},"s":[{"lit":"v1"},{"lit":"accounts"},{"var":"account_id"},{"lit":"external_accounts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /v1/external_accounts/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/external_accounts/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"external_accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/accounts/{account}/external_accounts","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"object","or":"object","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v1/accounts/{account}/external_accounts","q":{"exist":["account_id","ending_before","expand","limit","object","starting_after"]},"r":{"param":{"account":"account_id"}},"s":[{"lit":"v1"},{"lit":"accounts"},{"var":"account_id"},{"lit":"external_accounts"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/accounts/{account}/bank_accounts/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/accounts/{account}/bank_accounts/{id}","q":{"exist":["account_id","expand","id"]},"r":{"param":{"account":"account_id"}},"s":[{"lit":"v1"},{"lit":"accounts"},{"var":"account_id"},{"lit":"bank_accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /v1/accounts/{account}/external_accounts/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/accounts/{account}/external_accounts/{id}","q":{"exist":["account_id","expand","id"]},"r":{"param":{"account":"account_id"}},"s":[{"lit":"v1"},{"lit":"accounts"},{"var":"account_id"},{"lit":"external_accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"external_account","name__orig":"external_account","Name":"ExternalAccount","name_":"external_account","name-":"external-account","NAME":"EXTERNAL_ACCOUNT","index$":54}, {"active":true,"entity":"external_account","key$":"BasicExternalAccountFlow","kind":"basic","name":"BasicExternalAccountFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"external_account_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"external_account_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"external_account_ref01","srcdatavar":"external_account_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"external_account01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-external_account_ref01"}}],"index$":2}]}, 'ExternalAccount', {"POST /v1/accounts/{account}/bank_accounts/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"documents":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"account_holder_name":{"description":"The name of the person or business that owns the bank account.","maxLength":5000,"type":"string"},"account_holder_type":{"description":"The type of entity that holds the account. This can be either `individual` or `company`.","enum":["","company","individual"],"maxLength":5000,"type":"string"},"account_type":{"description":"The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.","enum":["checking","futsu","savings","toza"],"maxLength":5000,"type":"string"},"address_city":{"description":"City/District/Suburb/Town/Village.","maxLength":5000,"type":"string"},"address_country":{"description":"Billing address country, if provided when creating card.","maxLength":5000,"type":"string"},"address_line1":{"description":"Address line 1 (Street address/PO Box/Company name).","maxLength":5000,"type":"string"},"address_line2":{"description":"Address line 2 (Apartment/Suite/Unit/Building).","maxLength":5000,"type":"string"},"address_state":{"description":"State/County/Province/Region.","maxLength":5000,"type":"string"},"address_zip":{"description":"ZIP or postal code.","maxLength":5000,"type":"string"},"default_for_currency":{"description":"When set to true, this becomes the default external account for its currency.","type":"boolean"},"documents":{"description":"Documents that may be submitted to satisfy various informational requests.","properties":{"bank_account_ownership_verification":{"properties":{"files":{}},"title":"documents_param","type":"object"}},"title":"external_account_documents_param","type":"object"},"exp_month":{"description":"Two digit number representing the card’s expiration month.","maxLength":5000,"type":"string"},"exp_year":{"description":"Four digit number representing the card’s expiration year.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"name":{"description":"Cardholder name.","maxLength":5000,"type":"string"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"in":"path","name":"id","required":true,"schema":{"type":"string"},"style":"simple","index$":1}]},"POST /v1/accounts/{account}/external_accounts/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"documents":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"account_holder_name":{"description":"The name of the person or business that owns the bank account.","maxLength":5000,"type":"string"},"account_holder_type":{"description":"The type of entity that holds the account. This can be either `individual` or `company`.","enum":["","company","individual"],"maxLength":5000,"type":"string"},"account_type":{"description":"The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.","enum":["checking","futsu","savings","toza"],"maxLength":5000,"type":"string"},"address_city":{"description":"City/District/Suburb/Town/Village.","maxLength":5000,"type":"string"},"address_country":{"description":"Billing address country, if provided when creating card.","maxLength":5000,"type":"string"},"address_line1":{"description":"Address line 1 (Street address/PO Box/Company name).","maxLength":5000,"type":"string"},"address_line2":{"description":"Address line 2 (Apartment/Suite/Unit/Building).","maxLength":5000,"type":"string"},"address_state":{"description":"State/County/Province/Region.","maxLength":5000,"type":"string"},"address_zip":{"description":"ZIP or postal code.","maxLength":5000,"type":"string"},"default_for_currency":{"description":"When set to true, this becomes the default external account for its currency.","type":"boolean"},"documents":{"description":"Documents that may be submitted to satisfy various informational requests.","properties":{"bank_account_ownership_verification":{"properties":{"files":{}},"title":"documents_param","type":"object"}},"title":"external_account_documents_param","type":"object"},"exp_month":{"description":"Two digit number representing the card’s expiration month.","maxLength":5000,"type":"string"},"exp_year":{"description":"Four digit number representing the card’s expiration year.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"name":{"description":"Cardholder name.","maxLength":5000,"type":"string"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"in":"path","name":"id","required":true,"schema":{"type":"string"},"style":"simple","index$":1}]},"POST /v1/accounts/{account}/bank_accounts":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"bank_account":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"bank_account":{"anyOf":[{"properties":{"account_holder_name":{},"account_holder_type":{},"account_number":{},"account_type":{},"country":{},"currency":{},"documents":{},"object":{},"routing_number":{}},"required":["account_number","country"],"title":"external_account_payout_bank_account","type":"object"},{"maxLength":5000,"type":"string"}],"description":"Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details."},"default_for_currency":{"description":"When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.","type":"boolean"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"external_account":{"description":"A token, like the ones returned by [Stripe.js](https://docs.stripe.com/js) or a dictionary containing a user's external account details (with the options shown below). Please refer to full [documentation](https://stripe.com/docs/api/external_accounts) instead.","maxLength":5000,"type":"string","x-stripeBypassValidation":true},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/accounts/{account}/external_accounts":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"bank_account":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"bank_account":{"anyOf":[{"properties":{"account_holder_name":{},"account_holder_type":{},"account_number":{},"account_type":{},"country":{},"currency":{},"documents":{},"object":{},"routing_number":{}},"required":["account_number","country"],"title":"external_account_payout_bank_account","type":"object"},{"maxLength":5000,"type":"string"}],"description":"Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details."},"default_for_currency":{"description":"When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.","type":"boolean"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"external_account":{"description":"A token, like the ones returned by [Stripe.js](https://docs.stripe.com/js) or a dictionary containing a user's external account details (with the options shown below). Please refer to full [documentation](https://stripe.com/docs/api/external_accounts) instead.","maxLength":5000,"type":"string","x-stripeBypassValidation":true},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/external_accounts/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"documents":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"account_holder_name":{"description":"The name of the person or business that owns the bank account.","maxLength":5000,"type":"string"},"account_holder_type":{"description":"The type of entity that holds the account. This can be either `individual` or `company`.","enum":["","company","individual"],"maxLength":5000,"type":"string"},"account_type":{"description":"The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.","enum":["checking","futsu","savings","toza"],"maxLength":5000,"type":"string"},"address_city":{"description":"City/District/Suburb/Town/Village.","maxLength":5000,"type":"string"},"address_country":{"description":"Billing address country, if provided when creating card.","maxLength":5000,"type":"string"},"address_line1":{"description":"Address line 1 (Street address/PO Box/Company name).","maxLength":5000,"type":"string"},"address_line2":{"description":"Address line 2 (Apartment/Suite/Unit/Building).","maxLength":5000,"type":"string"},"address_state":{"description":"State/County/Province/Region.","maxLength":5000,"type":"string"},"address_zip":{"description":"ZIP or postal code.","maxLength":5000,"type":"string"},"default_for_currency":{"description":"When set to true, this becomes the default external account for its currency.","type":"boolean"},"documents":{"description":"Documents that may be submitted to satisfy various informational requests.","properties":{"bank_account_ownership_verification":{"properties":{"files":{}},"title":"documents_param","type":"object"}},"title":"external_account_documents_param","type":"object"},"exp_month":{"description":"Two digit number representing the card’s expiration month.","maxLength":5000,"type":"string"},"exp_year":{"description":"Four digit number representing the card’s expiration year.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"name":{"description":"Cardholder name.","maxLength":5000,"type":"string"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"type":"string"},"style":"simple","index$":0}]},"GET /v1/accounts/{account}/external_accounts":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"type":"string"},"style":"form","index$":1},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":2},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":3},{"description":"Filter external accounts according to a particular object type.","in":"query","name":"object","required":false,"schema":{"enum":["bank_account","card"],"maxLength":5000,"type":"string","x-stripeBypassValidation":true},"style":"form","index$":4},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"type":"string"},"style":"form","index$":5}]},"GET /v1/accounts/{account}/bank_accounts/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"Unique identifier for the external account to be retrieved.","in":"path","name":"id","required":true,"schema":{"type":"string"},"style":"simple","index$":2}]},"GET /v1/accounts/{account}/external_accounts/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"account","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"Unique identifier for the external account to be retrieved.","in":"path","name":"id","required":true,"schema":{"type":"string"},"style":"simple","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const external_account_ref01_ent = client.ExternalAccount()
    let external_account_ref01_data = setup.data.new.external_account['external_account_ref01']
    external_account_ref01_data['account_id'] = setup.idmap['account01']

    external_account_ref01_data = (await external_account_ref01_ent.create(external_account_ref01_data)).data()
    assert(null != external_account_ref01_data.id)


    // LIST
    const external_account_ref01_match = {}
    external_account_ref01_match['account_id'] = setup.idmap['account01']

    const external_account_ref01_list = (await external_account_ref01_ent.list(external_account_ref01_match)).map((e) => e.data())

    assert(!isempty(select(external_account_ref01_list, { id: external_account_ref01_data.id })))


    // LOAD
    const external_account_ref01_match_dt0 = {}
    external_account_ref01_match_dt0.id = external_account_ref01_data.id
    const external_account_ref01_data_dt0 = (await external_account_ref01_ent.load(external_account_ref01_match_dt0)).data()
    assert(external_account_ref01_data_dt0.id === external_account_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/external_account/ExternalAccountTestData.json')

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
    ['external_account01','external_account02','external_account03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_EXTERNAL_ACCOUNT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_EXTERNAL_ACCOUNT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_EXTERNAL_ACCOUNT_ENTID']
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
  
