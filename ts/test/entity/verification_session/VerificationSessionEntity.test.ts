

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


describe('VerificationSessionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.VerificationSession()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'verification_session.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"client_reference_id":{"a":true,"h":"Client Reference Id","n":"client_reference_id","r":false,"sh":"A string to reference this user.","t":"`$STRING`","key$":"client_reference_id","index$":0},"client_secret":{"a":true,"h":"Client Secret","n":"client_secret","r":false,"sh":"The short-lived client secret used by Stripe.js to [show a verification modal](https://docs.stripe.com/js/identity/modal) inside your app.","t":"`$STRING`","key$":"client_secret","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":3},"last_error":{"a":true,"h":"Last Error","n":"last_error","r":false,"sh":"If present, this property tells you the last error encountered when processing the verification.","t":"`$ANY`","key$":"last_error","index$":4},"last_verification_report":{"a":true,"h":"Last Verification Report","n":"last_verification_report","r":false,"sh":"ID of the most recent VerificationReport.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"last_verification_report","index$":5},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":6},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":7},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":8},"options":{"a":true,"h":"Options","n":"options","r":false,"sh":"A set of options for the session’s verification checks.","t":"`$ANY`","key$":"options","index$":9},"provided_details":{"a":true,"h":"Provided Details","n":"provided_details","r":false,"sh":"Details provided about the user being verified.","t":"`$ANY`","key$":"provided_details","index$":10},"redaction":{"a":true,"h":"Redaction","n":"redaction","r":false,"sh":"Redaction status of this VerificationSession.","t":"`$ANY`","key$":"redaction","index$":11},"related_customer":{"a":true,"h":"Related Customer","n":"related_customer","r":false,"sh":"Customer ID","t":"`$STRING`","key$":"related_customer","index$":12},"related_customer_account":{"a":true,"h":"Related Customer Account","n":"related_customer_account","r":false,"sh":"The ID of the Account representing a customer.","t":"`$STRING`","key$":"related_customer_account","index$":13},"related_person":{"a":true,"h":"Related Person","n":"related_person","r":true,"t":"`$OBJECT`","key$":"related_person","index$":14},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Status of this VerificationSession.","t":"`$STRING`","key$":"status","index$":15},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of [verification check](https://docs.stripe.com/identity/verification-checks) to be performed.","t":"`$STRING`","key$":"type","index$":16},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"The short-lived URL that you use to redirect a user to Stripe to submit their identity information.","t":"`$STRING`","key$":"url","index$":17},"verification_flow":{"a":true,"h":"Verification Flow","n":"verification_flow","r":false,"sh":"The configuration token of a verification flow from the dashboard.","t":"`$STRING`","key$":"verification_flow","index$":18},"verified_outputs":{"a":true,"h":"Verified Outputs","n":"verified_outputs","r":false,"sh":"The user’s verified data.","t":"`$ANY`","key$":"verified_outputs","index$":19}},"id":{"field":"id","name":"id"},"name":"verification_session","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/identity/verification_sessions/{session}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"session","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/identity/verification_sessions/{session}","q":{"exist":["id"]},"r":{"param":{"session":"id"}},"s":[{"lit":"v1"},{"lit":"identity"},{"lit":"verification_sessions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/identity/verification_sessions/{session}/cancel","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"session","or":"session","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/identity/verification_sessions/{session}/cancel","q":{"$action":"cancel","exist":["session"]},"r":{},"s":[{"lit":"v1"},{"lit":"identity"},{"lit":"verification_sessions"},{"var":"session"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/identity/verification_sessions/{session}/redact","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"session","or":"session","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/identity/verification_sessions/{session}/redact","q":{"$action":"redact","exist":["session"]},"r":{},"s":[{"lit":"v1"},{"lit":"identity"},{"lit":"verification_sessions"},{"var":"session"},{"lit":"redact"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /v1/identity/verification_sessions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/identity/verification_sessions","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"identity"},{"lit":"verification_sessions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/identity/verification_sessions","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"client_reference_id","or":"client_reference_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"created","or":"created","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"related_customer","or":"related_customer","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"related_customer_account","or":"related_customer_account","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":8}]},"k":"http","m":"GET","o":"/v1/identity/verification_sessions","q":{"exist":["client_reference_id","created","ending_before","expand","limit","related_customer","related_customer_account","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"identity"},{"lit":"verification_sessions"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/identity/verification_sessions/{session}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"session","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/identity/verification_sessions/{session}","q":{"exist":["expand","id"]},"r":{"param":{"session":"id"}},"s":[{"lit":"v1"},{"lit":"identity"},{"lit":"verification_sessions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"verification_session","name__orig":"verification_session","Name":"VerificationSession","name_":"verification_session","name-":"verification-session","NAME":"VERIFICATION_SESSION","index$":146}, {"active":true,"entity":"verification_session","key$":"BasicVerificationSessionFlow","kind":"basic","name":"BasicVerificationSessionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"verification_session_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"verification_session_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"verification_session_ref01","srcdatavar":"verification_session_ref01_data","suffix":"_dt0"},"m":{"id":"verification_session01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-verification_session_ref01"}}],"index$":2}]}, 'VerificationSession', {"POST /v1/identity/verification_sessions/{session}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"options":{"explode":true,"style":"deepObject"},"provided_details":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"options":{"description":"A set of options for the session’s verification checks.","properties":{"document":{"anyOf":[{},{}]}},"title":"session_options_param","type":"object"},"provided_details":{"description":"Details provided about the user being verified. These details may be shown to the user.","properties":{"email":{"type":"string"},"phone":{"type":"string"}},"title":"provided_details_param","type":"object"},"type":{"description":"The type of [verification check](https://docs.stripe.com/identity/verification-checks) to be performed.","enum":["document","id_number"],"type":"string","x-stripeBypassValidation":true}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"session","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/identity/verification_sessions/{session}/cancel":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"session","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/identity/verification_sessions/{session}/redact":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"session","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/identity/verification_sessions":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"},"options":{"explode":true,"style":"deepObject"},"provided_details":{"explode":true,"style":"deepObject"},"related_person":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"client_reference_id":{"description":"A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.","maxLength":5000,"type":"string"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"additionalProperties":{"type":"string"},"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.","type":"object"},"options":{"description":"A set of options for the session’s verification checks.","properties":{"document":{"anyOf":[{},{}]}},"title":"session_options_param","type":"object"},"provided_details":{"description":"Details provided about the user being verified. These details might be shown to the user.","properties":{"email":{"type":"string"},"phone":{"type":"string"}},"title":"provided_details_param","type":"object"},"related_customer":{"description":"Customer ID","maxLength":5000,"type":"string"},"related_customer_account":{"description":"The ID of the Account representing a customer.","maxLength":5000,"type":"string"},"related_person":{"description":"Tokens referencing a Person resource and its associated account.","properties":{"account":{"maxLength":5000,"type":"string"},"person":{"maxLength":5000,"type":"string"}},"required":["account","person"],"title":"related_person_param","type":"object"},"return_url":{"description":"The URL that the user will be redirected to upon completing the verification flow.","type":"string"},"type":{"description":"The type of [verification check](https://docs.stripe.com/identity/verification-checks) to be performed. You must provide a `type` if not passing `verification_flow`.","enum":["document","id_number"],"type":"string","x-stripeBypassValidation":true},"verification_flow":{"description":"The ID of a verification flow from the Dashboard. See https://docs.stripe.com/identity/verification-flows.","maxLength":5000,"type":"string"}},"type":"object"}}},"required":false},"parameters":[]},"GET /v1/identity/verification_sessions":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.","in":"query","name":"client_reference_id","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Only return VerificationSessions that were created during the given date interval.","explode":true,"in":"query","name":"created","required":false,"schema":{"anyOf":[{"properties":{"gt":{"type":"integer"},"gte":{"type":"integer"},"lt":{"type":"integer"},"lte":{"type":"integer"}},"title":"range_query_specs","type":"object"},{"type":"integer"}]},"style":"deepObject","index$":1},{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":2},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":3},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":4},{"description":"Customer ID","in":"query","name":"related_customer","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":5},{"description":"The ID of the Account representing a customer.","in":"query","name":"related_customer_account","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":6},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":7},{"description":"Only return VerificationSessions with this status. [Learn more about the lifecycle of sessions](https://docs.stripe.com/identity/how-sessions-work).","in":"query","name":"status","required":false,"schema":{"enum":["canceled","processing","requires_input","verified"],"type":"string"},"style":"form","index$":8}]},"GET /v1/identity/verification_sessions/{session}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"session","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const verification_session_ref01_ent = client.VerificationSession()
    let verification_session_ref01_data = setup.data.new.verification_session['verification_session_ref01']

    verification_session_ref01_data = (await verification_session_ref01_ent.create(verification_session_ref01_data)).data()
    assert(null != verification_session_ref01_data.id)


    // LIST
    const verification_session_ref01_match: any = {}

    const verification_session_ref01_list = (await verification_session_ref01_ent.list(verification_session_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(verification_session_ref01_list, { id: verification_session_ref01_data.id })))


    // LOAD
    const verification_session_ref01_match_dt0: any = {}
    verification_session_ref01_match_dt0.id = verification_session_ref01_data.id
    const verification_session_ref01_data_dt0 = (await verification_session_ref01_ent.load(verification_session_ref01_match_dt0)).data()
    assert(verification_session_ref01_data_dt0.id === verification_session_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/verification_session/VerificationSessionTestData.json')

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
    ['verification_session01','verification_session02','verification_session03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_VERIFICATION_SESSION_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_VERIFICATION_SESSION_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_VERIFICATION_SESSION_ENTID']
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
  
