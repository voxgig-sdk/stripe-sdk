
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


describe('OnboardingLinkEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.OnboardingLink()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"apple_terms_and_conditions":{"a":true,"h":"Apple Terms And Conditions","n":"apple_terms_and_conditions","r":false,"sh":"The options associated with the Apple Terms and Conditions link type.","t":"`$ANY`","key$":"apple_terms_and_conditions","index$":0}},"name":"onboarding_link","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/terminal/onboarding_links","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/terminal/onboarding_links","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"terminal"},{"lit":"onboarding_links"}],"t":{"req":"`reqdata`","res":"`body.link_options`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"onboarding_link","name__orig":"onboarding_link","Name":"OnboardingLink","name_":"onboarding_link","name-":"onboarding-link","NAME":"ONBOARDING_LINK","index$":81}, {"active":true,"entity":"onboarding_link","key$":"BasicOnboardingLinkFlow","kind":"basic","name":"BasicOnboardingLinkFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"onboarding_link_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'OnboardingLink', {"POST /v1/terminal/onboarding_links":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"expand":{"explode":true,"style":"deepObject"},"link_options":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"link_options":{"description":"Specific fields needed to generate the desired link type.","properties":{"apple_terms_and_conditions":{"properties":{"allow_relinking":{},"merchant_display_name":{}},"required":["merchant_display_name"],"title":"apple_terms_and_conditions_params","type":"object"}},"title":"link_options_params","type":"object"},"link_type":{"description":"The type of link being generated.","enum":["apple_terms_and_conditions"],"type":"string"},"on_behalf_of":{"description":"Stripe account ID to generate the link for.","maxLength":5000,"type":"string"}},"required":["link_options","link_type"],"type":"object"}}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const onboarding_link_ref01_ent = client.OnboardingLink()
    let onboarding_link_ref01_data = setup.data.new.onboarding_link['onboarding_link_ref01']

    onboarding_link_ref01_data = (await onboarding_link_ref01_ent.create(onboarding_link_ref01_data)).data()
    assert(null != onboarding_link_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/onboarding_link/OnboardingLinkTestData.json')

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
    ['onboarding_link01','onboarding_link02','onboarding_link03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_ONBOARDING_LINK_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_ONBOARDING_LINK_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_ONBOARDING_LINK_ENTID']
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
  
