
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


describe('AccountLinkEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.AccountLink()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":0},"expires_at":{"a":true,"fo":"unix-time","h":"Expires At","n":"expires_at","r":true,"sh":"The timestamp at which this account link will expire.","t":"`$INTEGER`","key$":"expires_at","index$":1},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":2},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The URL for the account link.","t":"`$STRING`","key$":"url","index$":3}},"name":"account_link","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/account_links","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/account_links","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"account_links"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"account_link","name__orig":"account_link","Name":"AccountLink","name_":"account_link","name-":"account-link","NAME":"ACCOUNT_LINK","index$":1}, {"active":true,"entity":"account_link","key$":"BasicAccountLinkFlow","kind":"basic","name":"BasicAccountLinkFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"account_link_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'AccountLink', {"POST /v1/account_links":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"collection_options":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"account":{"description":"The identifier of the account to create an account link for.","maxLength":5000,"type":"string"},"collect":{"description":"The collect parameter is deprecated. Use `collection_options` instead.","enum":["currently_due","eventually_due"],"type":"string"},"collection_options":{"description":"Specifies the requirements that Stripe collects from connected accounts in the Connect Onboarding flow.","properties":{"fields":{"enum":["currently_due","eventually_due"],"type":"string"},"future_requirements":{"enum":["include","omit"],"type":"string"}},"title":"collection_options_params","type":"object"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"refresh_url":{"description":"The URL the user will be redirected to if the account link is expired, has been previously-visited, or is otherwise invalid. The URL you specify should attempt to generate a new account link with the same parameters used to create the original account link, then redirect the user to the new account link's URL so they can continue with Connect Onboarding. If a new account link cannot be generated or the redirect fails you should display a useful error to the user.","type":"string"},"return_url":{"description":"The URL that the user will be redirected to upon leaving or completing the linked flow.","type":"string"},"type":{"description":"The type of account link the user is requesting.\n\nYou can create Account Links of type `account_update` only for connected accounts where your platform is responsible for collecting requirements, including Custom accounts. You can't create them for accounts that have access to a Stripe-hosted Dashboard. If you use [Connect embedded components](/connect/get-started-connect-embedded-components), you can include components that allow your connected accounts to update their own information. For an account without Stripe-hosted Dashboard access where Stripe is liable for negative balances, you must use embedded components.","enum":["account_onboarding","account_update"],"type":"string","x-stripeBypassValidation":true}},"required":["account","type"],"type":"object"}}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const account_link_ref01_ent = client.AccountLink()
    let account_link_ref01_data = setup.data.new.account_link['account_link_ref01']

    account_link_ref01_data = (await account_link_ref01_ent.create(account_link_ref01_data)).data()
    assert(null != account_link_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/account_link/AccountLinkTestData.json')

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
    ['account_link01','account_link02','account_link03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_ACCOUNT_LINK_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_ACCOUNT_LINK_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_ACCOUNT_LINK_ENTID']
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
  
