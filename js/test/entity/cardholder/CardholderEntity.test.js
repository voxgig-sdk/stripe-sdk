
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


describe('CardholderEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Cardholder()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"billing":{"a":true,"h":"Billing","n":"billing","r":true,"t":"`$OBJECT`","key$":"billing","index$":0},"company":{"a":true,"h":"Company","n":"company","r":false,"sh":"Additional information about a `company` cardholder.","t":"`$ANY`","key$":"company","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"email":{"a":true,"h":"Email","n":"email","r":false,"sh":"The cardholder's email address.","t":"`$STRING`","key$":"email","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":4},"individual":{"a":true,"h":"Individual","n":"individual","r":false,"sh":"Additional information about an `individual` cardholder.","t":"`$ANY`","union":{"branches":2,"count":6,"depth":22},"key$":"individual","index$":5},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":6},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":7},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The cardholder's name.","t":"`$STRING`","key$":"name","index$":8},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":9},"phone_number":{"a":true,"h":"Phone Number","n":"phone_number","r":false,"sh":"The cardholder's phone number.","t":"`$STRING`","key$":"phone_number","index$":10},"preferred_locales":{"a":true,"h":"Preferred Locales","n":"preferred_locales","r":false,"sh":"The cardholder’s preferred locales (languages), ordered by preference.","t":"`$ARRAY`","key$":"preferred_locales","index$":11},"requirements":{"a":true,"h":"Requirements","n":"requirements","r":true,"t":"`$OBJECT`","key$":"requirements","index$":12},"spending_controls":{"a":true,"h":"Spending Controls","n":"spending_controls","r":false,"sh":"Rules that control spending across this cardholder's cards.","t":"`$ANY`","key$":"spending_controls","index$":13},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Specifies whether to permit authorizations on this cardholder's cards.","t":"`$STRING`","key$":"status","index$":14},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"One of `individual` or `company`.","t":"`$STRING`","key$":"type","index$":15}},"id":{"field":"id","name":"id"},"name":"cardholder","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/issuing/cardholders/{cardholder}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"cardholder","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/issuing/cardholders/{cardholder}","q":{"exist":["id"]},"r":{"param":{"cardholder":"id"}},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"cardholders"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/issuing/cardholders","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/issuing/cardholders","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"cardholders"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/issuing/cardholders","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"email","or":"email","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"phone_number","or":"phone_number","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":8}]},"k":"http","m":"GET","o":"/v1/issuing/cardholders","q":{"exist":["created","email","ending_before","expand","limit","phone_number","starting_after","status","type"]},"r":{},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"cardholders"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/issuing/cardholders/{cardholder}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"cardholder","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/issuing/cardholders/{cardholder}","q":{"exist":["expand","id"]},"r":{"param":{"cardholder":"id"}},"s":[{"lit":"v1"},{"lit":"issuing"},{"lit":"cardholders"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"cardholder","name__orig":"cardholder","Name":"Cardholder","name_":"cardholder","name-":"cardholder","NAME":"CARDHOLDER","index$":18}, {"active":true,"entity":"cardholder","key$":"BasicCardholderFlow","kind":"basic","name":"BasicCardholderFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"cardholder_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"cardholder_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"cardholder_ref01","srcdatavar":"cardholder_ref01_data","suffix":"_dt0"},"m":{"id":"cardholder01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cardholder_ref01"}}],"index$":2}]}, 'Cardholder', {"POST /v1/issuing/cardholders/{cardholder}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"billing":{"explode":true,"style":"deepObject"},"company":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"individual":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"preferred_locales":{"explode":true,"style":"deepObject"},"spending_controls":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"billing":{"description":"The cardholder's billing address.","properties":{"address":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{}},"required":["city","country","line1","postal_code"],"title":"required_address","type":"object"}},"required":["address"],"title":"billing_specs","type":"object"},"company":{"description":"Additional information about a `company` cardholder.","properties":{"tax_id":{"maxLength":5000,"type":"string"}},"title":"company_param","type":"object"},"email":{"description":"The cardholder's email address.","type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"individual":{"description":"Additional information about an `individual` cardholder.","properties":{"card_issuing":{"properties":{"user_terms_acceptance":{}},"title":"card_issuing_param","type":"object"},"dob":{"properties":{"day":{},"month":{},"year":{}},"required":["day","month","year"],"title":"date_of_birth_specs","type":"object"},"first_name":{"type":"string"},"last_name":{"type":"string"},"verification":{"properties":{"document":{}},"title":"person_verification_param","type":"object"}},"title":"individual_param","type":"object"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"phone_number":{"description":"The cardholder's phone number. This is required for all cardholders who will be creating EU cards. See the [3D Secure documentation](https://docs.stripe.com/issuing/3d-secure) for more details.","type":"string"},"preferred_locales":{"description":"The cardholder’s preferred locales (languages), ordered by preference. Locales can be `de`, `en`, `es`, `fr`, or `it`.\n This changes the language of the [3D Secure flow](https://docs.stripe.com/issuing/3d-secure) and one-time password messages sent to the cardholder.","items":{"enum":["de","en","es","fr","it"],"type":"string","x-stripeBypassValidation":true},"type":"array"},"spending_controls":{"description":"Rules that control spending across this cardholder's cards. Refer to our [documentation](https://docs.stripe.com/issuing/controls/spending-controls) for more details.","properties":{"allowed_card_presences":{"items":{"enum":[],"maxLength":5000,"type":"string"},"type":"array"},"allowed_categories":{"items":{"enum":[],"maxLength":5000,"type":"string"},"type":"array"},"allowed_merchant_countries":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"blocked_card_presences":{"items":{"enum":[],"maxLength":5000,"type":"string"},"type":"array"},"blocked_categories":{"items":{"enum":[],"maxLength":5000,"type":"string"},"type":"array"},"blocked_merchant_countries":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"spending_limits":{"items":{"properties":{},"required":[],"title":"spending_limits_param","type":"object"},"type":"array"},"spending_limits_currency":{"type":"string"}},"title":"authorization_controls_param_v2","type":"object"},"status":{"description":"Specifies whether to permit authorizations on this cardholder's cards.","enum":["active","inactive"],"type":"string"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"cardholder","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/issuing/cardholders":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"billing":{"explode":true,"style":"deepObject"},"company":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"individual":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"preferred_locales":{"explode":true,"style":"deepObject"},"spending_controls":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"billing":{"description":"The cardholder's billing address.","properties":{"address":{"properties":{"city":{},"country":{},"line1":{},"line2":{},"postal_code":{},"state":{}},"required":["city","country","line1","postal_code"],"title":"required_address","type":"object"}},"required":["address"],"title":"billing_specs","type":"object"},"company":{"description":"Additional information about a `company` cardholder.","properties":{"tax_id":{"maxLength":5000,"type":"string"}},"title":"company_param","type":"object"},"email":{"description":"The cardholder's email address.","type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"individual":{"description":"Additional information about an `individual` cardholder.","properties":{"card_issuing":{"properties":{"user_terms_acceptance":{}},"title":"card_issuing_param","type":"object"},"dob":{"properties":{"day":{},"month":{},"year":{}},"required":["day","month","year"],"title":"date_of_birth_specs","type":"object"},"first_name":{"type":"string"},"last_name":{"type":"string"},"verification":{"properties":{"document":{}},"title":"person_verification_param","type":"object"}},"title":"individual_param","type":"object"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"name":{"description":"The cardholder's name. This will be printed on cards issued to them. The maximum length of this field is 24 characters. This field cannot contain any special characters or numbers.","type":"string"},"phone_number":{"description":"The cardholder's phone number. This will be transformed to [E.164](https://en.wikipedia.org/wiki/E.164) if it is not provided in that format already. This is required for all cardholders who will be creating EU cards. See the [3D Secure documentation](https://docs.stripe.com/issuing/3d-secure#when-is-3d-secure-applied) for more details.","type":"string"},"preferred_locales":{"description":"The cardholder’s preferred locales (languages), ordered by preference. Locales can be `de`, `en`, `es`, `fr`, or `it`.\n This changes the language of the [3D Secure flow](https://docs.stripe.com/issuing/3d-secure) and one-time password messages sent to the cardholder.","items":{"enum":["de","en","es","fr","it"],"type":"string","x-stripeBypassValidation":true},"type":"array"},"spending_controls":{"description":"Rules that control spending across this cardholder's cards. Refer to our [documentation](https://docs.stripe.com/issuing/controls/spending-controls) for more details.","properties":{"allowed_card_presences":{"items":{"enum":[],"maxLength":5000,"type":"string"},"type":"array"},"allowed_categories":{"items":{"enum":[],"maxLength":5000,"type":"string"},"type":"array"},"allowed_merchant_countries":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"blocked_card_presences":{"items":{"enum":[],"maxLength":5000,"type":"string"},"type":"array"},"blocked_categories":{"items":{"enum":[],"maxLength":5000,"type":"string"},"type":"array"},"blocked_merchant_countries":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"spending_limits":{"items":{"properties":{},"required":[],"title":"spending_limits_param","type":"object"},"type":"array"},"spending_limits_currency":{"type":"string"}},"title":"authorization_controls_param_v2","type":"object"},"status":{"description":"Specifies whether to permit authorizations on this cardholder's cards. Defaults to `active`.","enum":["active","inactive"],"type":"string"},"type":{"description":"One of `individual` or `company`. See [Choose a cardholder type](https://docs.stripe.com/issuing/other/choose-cardholder) for more details.","enum":["company","individual"],"type":"string","x-stripeBypassValidation":true}},"required":["billing","name"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/issuing/cardholders":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Only return cardholders that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":0},{"description":"Only return cardholders that have the given email address.","in":"query","name":"email","required":false,"schema":{"type":"string"},"style":"form","index$":1},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":3},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":4},{"description":"Only return cardholders that have the given phone number.","in":"query","name":"phone_number","required":false,"schema":{"type":"string"},"style":"form","index$":5},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6},{"description":"Only return cardholders that have the given status. One of `active`, `inactive`, or `blocked`.","in":"query","name":"status","required":false,"schema":{"enum":["active","blocked","inactive"],"type":"string"},"style":"form","index$":7},{"description":"Only return cardholders that have the given type. One of `individual` or `company`.","in":"query","name":"type","required":false,"schema":{"enum":["company","individual"],"type":"string","x-stripeBypassValidation":true},"style":"form","index$":8}]},"GET /v1/issuing/cardholders/{cardholder}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"cardholder","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const cardholder_ref01_ent = client.Cardholder()
    let cardholder_ref01_data = setup.data.new.cardholder['cardholder_ref01']

    cardholder_ref01_data = (await cardholder_ref01_ent.create(cardholder_ref01_data)).data()
    assert(null != cardholder_ref01_data.id)


    // LIST
    const cardholder_ref01_match = {}

    const cardholder_ref01_list = (await cardholder_ref01_ent.list(cardholder_ref01_match)).map((e) => e.data())

    assert(!isempty(select(cardholder_ref01_list, { id: cardholder_ref01_data.id })))


    // LOAD
    const cardholder_ref01_match_dt0 = {}
    cardholder_ref01_match_dt0.id = cardholder_ref01_data.id
    const cardholder_ref01_data_dt0 = (await cardholder_ref01_ent.load(cardholder_ref01_match_dt0)).data()
    assert(cardholder_ref01_data_dt0.id === cardholder_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/cardholder/CardholderTestData.json')

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
    ['cardholder01','cardholder02','cardholder03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_CARDHOLDER_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_CARDHOLDER_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_CARDHOLDER_ENTID']
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
  
