
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


describe('TokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Token()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bank_account":{"a":true,"h":"Bank Account","n":"bank_account","r":true,"sh":"These bank accounts are payment methods on `Customer` objects.","t":"`$OBJECT`","union":{"branches":17,"count":106907,"depth":64},"key$":"bank_account","index$":0},"card":{"a":true,"h":"Card","n":"card","r":true,"sh":"Card associated with this token.","t":"`$ANY`","union":{"branches":2,"count":35,"depth":29},"key$":"card","index$":1},"client_ip":{"a":true,"h":"Client Ip","n":"client_ip","r":false,"sh":"IP address of the client that generates the token.","t":"`$STRING`","key$":"client_ip","index$":2},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":3},"device_fingerprint":{"a":true,"h":"Device Fingerprint","n":"device_fingerprint","r":false,"sh":"The hashed ID derived from the device ID from the card network associated with the token.","t":"`$STRING`","key$":"device_fingerprint","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":5},"last4":{"a":true,"h":"Last4","n":"last4","r":false,"sh":"The last four digits of the token.","t":"`$STRING`","key$":"last4","index$":6},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":7},"network":{"a":true,"h":"Network","n":"network","r":true,"sh":"The token service provider / card network associated with the token.","t":"`$STRING`","key$":"network","index$":8},"network_data":{"a":true,"h":"Network Data","n":"network_data","r":true,"t":"`$OBJECT`","key$":"network_data","index$":9},"network_updated_at":{"a":true,"fo":"unix-time","h":"Network Updated At","n":"network_updated_at","r":true,"sh":"Time at which the token was last updated by the card network.","t":"`$INTEGER`","key$":"network_updated_at","index$":10},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":11},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The usage state of the token.","t":"`$STRING`","key$":"status","index$":12},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Type of the token: `account`, `bank_account`, `card`, or `pii`.","t":"`$STRING`","key$":"type","index$":13},"used":{"a":true,"h":"Used","n":"used","r":true,"sh":"Determines if you have already used this token (you can only use tokens once).","t":"`$BOOLEAN`","key$":"used","index$":14},"wallet_provider":{"a":true,"h":"Wallet Provider","n":"wallet_provider","r":false,"sh":"The digital wallet for this token, if one was used.","t":"`$STRING`","key$":"wallet_provider","index$":15}},"id":{"field":"id","name":"id"},"name":"token","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/issuing/tokens/{token}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"token","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/issuing/tokens/{token}","q":{"exist":["id"]},"r":{"param":{"token":"id"}},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/tokens","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/tokens","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"tokens"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/issuing/tokens","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"card","or":"card","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/v1/issuing/tokens","q":{"exist":["card","created","ending_before","expand","limit","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"tokens"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/issuing/tokens/{token}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"token","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/issuing/tokens/{token}","q":{"exist":["expand","id"]},"r":{"param":{"token":"id"}},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /v1/tokens/{token}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"token","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/tokens/{token}","q":{"exist":["expand","id"]},"r":{"param":{"token":"id"}},"s":[{"lit":"v1"},{"lit":"tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"token","name__orig":"token","Name":"Token","name_":"token","name-":"token","NAME":"TOKEN","index$":137}, {"active":true,"entity":"token","key$":"BasicTokenFlow","kind":"basic","name":"BasicTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"token_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"token_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"token_ref01","srcdatavar":"token_ref01_data","suffix":"_dt0"},"m":{"id":"token01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-token_ref01"}}],"index$":2}]}, 'Token', {"POST /v1/issuing/tokens/{token}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"status":{"description":"Specifies which status the token should be updated to.","enum":["active","deleted","suspended"],"type":"string"}},"required":["status"],"type":"object"}}},"required":true},"parameters":[{"in":"path","name":"token","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/tokens":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"account":{"explode":true,"style":"deepObject"},"bank_account":{"explode":true,"style":"deepObject"},"card":{"explode":true,"style":"deepObject"},"cvc_update":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"person":{"explode":true,"style":"deepObject"},"pii":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"account":{"description":"Information for the account this token represents.","properties":{"business_type":{"enum":["company","government_entity","individual","non_profit"],"type":"string","x-stripeBypassValidation":true},"company":{"properties":{"address":{},"address_kana":{},"address_kanji":{},"administrative_address":{},"directors_provided":{},"directorship_declaration":{},"executives_provided":{},"export_license_id":{},"export_purpose_code":{},"name":{},"name_kana":{},"name_kanji":{},"owners_provided":{},"ownership_declaration":{},"ownership_declaration_shown_and_signed":{},"ownership_exemption_reason":{},"phone":{},"principal_place_of_business":{},"registration_date":{},"registration_number":{},"representative_declaration":{},"structure":{},"tax_id":{},"tax_id_registrar":{},"vat_id":{},"verification":{}},"title":"connect_js_account_token_company_specs","type":"object"},"individual":{"properties":{"address":{},"address_kana":{},"address_kanji":{},"dob":{},"email":{},"first_name":{},"first_name_kana":{},"first_name_kanji":{},"full_name_aliases":{},"gender":{},"id_number":{},"id_number_secondary":{},"last_name":{},"last_name_kana":{},"last_name_kanji":{},"maiden_name":{},"metadata":{},"phone":{},"political_exposure":{},"registered_address":{},"relationship":{},"ssn_last_4":{},"verification":{}},"title":"individual_specs","type":"object"},"tos_shown_and_accepted":{"type":"boolean"}},"title":"connect_js_account_token_specs","type":"object"},"bank_account":{"description":"The bank account this token will represent.","properties":{"account_holder_name":{"maxLength":5000,"type":"string"},"account_holder_type":{"enum":["company","individual"],"maxLength":5000,"type":"string"},"account_number":{"maxLength":5000,"type":"string"},"account_type":{"enum":["checking","futsu","savings","toza"],"maxLength":5000,"type":"string"},"country":{"maxLength":5000,"type":"string"},"currency":{"format":"currency","type":"string"},"payment_method":{"maxLength":5000,"type":"string"},"routing_number":{"maxLength":5000,"type":"string"}},"required":["account_number","country"],"title":"token_create_bank_account","type":"object","x-stripeBypassValidation":true},"card":{"anyOf":[{"properties":{"address_city":{},"address_country":{},"address_line1":{},"address_line2":{},"address_state":{},"address_zip":{},"currency":{},"cvc":{},"exp_month":{},"exp_year":{},"name":{},"networks":{},"number":{}},"required":["exp_month","exp_year","number"],"title":"credit_card_specs","type":"object"},{"maxLength":5000,"type":"string"}],"description":"The card this token will represent. If you also pass in a customer, the card must be the ID of a card belonging to the customer. Otherwise, if you do not pass in a customer, this is a dictionary containing a user's credit card details, with the options described below.","x-stripeBypassValidation":true},"customer":{"description":"Create a token for the customer, which is owned by the application's account. You can only use this with an [OAuth access token](https://docs.stripe.com/connect/standard-accounts) or [Stripe-Account header](https://docs.stripe.com/connect/authentication). Learn more about [cloning saved payment methods](https://docs.stripe.com/connect/cloning-saved-payment-methods).","maxLength":5000,"type":"string"},"cvc_update":{"description":"The updated CVC value this token represents.","properties":{"cvc":{"maxLength":5000,"type":"string"}},"required":["cvc"],"title":"cvc_params","type":"object"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"person":{"description":"Information for the person this token represents.","properties":{"additional_tos_acceptances":{"properties":{"account":{}},"title":"person_additional_tos_acceptances_specs","type":"object"},"address":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{}},"title":"legal_entity_and_kyc_address_specs","type":"object"},"address_kana":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{},"town":{}},"title":"japan_address_kana_specs","type":"object"},"address_kanji":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{},"town":{}},"title":"japan_address_kanji_specs","type":"object"},"dob":{"anyOf":[{},{}]},"documents":{"properties":{"company_authorization":{},"passport":{},"visa":{}},"title":"person_documents_specs","type":"object"},"email":{"type":"string"},"first_name":{"maxLength":5000,"type":"string"},"first_name_kana":{"maxLength":5000,"type":"string"},"first_name_kanji":{"maxLength":5000,"type":"string"},"full_name_aliases":{"anyOf":[{},{}]},"gender":{"type":"string"},"id_number":{"maxLength":5000,"type":"string"},"id_number_secondary":{"maxLength":5000,"type":"string"},"last_name":{"maxLength":5000,"type":"string"},"last_name_kana":{"maxLength":5000,"type":"string"},"last_name_kanji":{"maxLength":5000,"type":"string"},"maiden_name":{"maxLength":5000,"type":"string"},"metadata":{"anyOf":[{},{}]},"nationality":{"maxLength":5000,"type":"string"},"phone":{"type":"string"},"political_exposure":{"enum":["existing","none"],"type":"string"},"registered_address":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{}},"title":"address_specs","type":"object"},"relationship":{"properties":{"authorizer":{},"director":{},"executive":{},"legal_guardian":{},"owner":{},"percent_ownership":{},"representative":{},"title":{}},"title":"relationship_specs","type":"object"},"ssn_last_4":{"type":"string"},"us_cfpb_data":{"properties":{"ethnicity_details":{},"race_details":{},"self_identified_gender":{}},"title":"us_cfpb_data_specs","type":"object"},"verification":{"properties":{"additional_document":{},"document":{}},"title":"person_verification_specs","type":"object"}},"title":"person_token_specs","type":"object"},"pii":{"description":"The PII this token represents.","properties":{"id_number":{"maxLength":5000,"type":"string"}},"title":"pii_token_specs","type":"object"}},"type":"object"}}},"required":false},"parameters":[]},"GET /v1/issuing/tokens":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"The Issuing card identifier to list tokens for.","in":"query","name":"card","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Only return Issuing tokens that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":1},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":3},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":4},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5},{"description":"Select Issuing tokens with the given status.","in":"query","name":"status","required":false,"schema":{"enum":["active","deleted","requested","suspended"],"type":"string"},"style":"form","index$":6}]},"GET /v1/issuing/tokens/{token}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"token","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]},"GET /v1/tokens/{token}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"token","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const token_ref01_ent = client.Token()
    let token_ref01_data = setup.data.new.token['token_ref01']

    token_ref01_data = (await token_ref01_ent.create(token_ref01_data)).data()
    assert(null != token_ref01_data.id)


    // LIST
    const token_ref01_match = {}

    const token_ref01_list = (await token_ref01_ent.list(token_ref01_match)).map((e) => e.data())

    assert(!isempty(select(token_ref01_list, { id: token_ref01_data.id })))


    // LOAD
    const token_ref01_match_dt0 = {}
    token_ref01_match_dt0.id = token_ref01_data.id
    const token_ref01_data_dt0 = (await token_ref01_ent.load(token_ref01_match_dt0)).data()
    assert(token_ref01_data_dt0.id === token_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/token/TokenTestData.json')

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
    ['token01','token02','token03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_TOKEN_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_TOKEN_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_TOKEN_ENTID']
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
  
