
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


describe('RegistrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.Registration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active_from":{"a":true,"fo":"unix-time","h":"Active From","n":"active_from","r":true,"sh":"Time at which the registration becomes active.","t":"`$INTEGER`","key$":"active_from","index$":0},"ae":{"a":true,"h":"Ae","n":"ae","r":true,"t":"`$OBJECT`","key$":"ae","index$":1},"al":{"a":true,"h":"Al","n":"al","r":true,"t":"`$OBJECT`","key$":"al","index$":2},"am":{"a":true,"h":"Am","n":"am","r":true,"t":"`$OBJECT`","key$":"am","index$":3},"ao":{"a":true,"h":"Ao","n":"ao","r":true,"t":"`$OBJECT`","key$":"ao","index$":4},"at":{"a":true,"h":"At","n":"at","r":true,"t":"`$OBJECT`","key$":"at","index$":5},"au":{"a":true,"h":"Au","n":"au","r":true,"t":"`$OBJECT`","key$":"au","index$":6},"aw":{"a":true,"h":"Aw","n":"aw","r":true,"t":"`$OBJECT`","key$":"aw","index$":7},"az":{"a":true,"h":"Az","n":"az","r":true,"t":"`$OBJECT`","key$":"az","index$":8},"ba":{"a":true,"h":"Ba","n":"ba","r":true,"t":"`$OBJECT`","key$":"ba","index$":9},"bb":{"a":true,"h":"Bb","n":"bb","r":true,"t":"`$OBJECT`","key$":"bb","index$":10},"bd":{"a":true,"h":"Bd","n":"bd","r":true,"t":"`$OBJECT`","key$":"bd","index$":11},"be":{"a":true,"h":"Be","n":"be","r":true,"t":"`$OBJECT`","key$":"be","index$":12},"bf":{"a":true,"h":"Bf","n":"bf","r":true,"t":"`$OBJECT`","key$":"bf","index$":13},"bg":{"a":true,"h":"Bg","n":"bg","r":true,"t":"`$OBJECT`","key$":"bg","index$":14},"bh":{"a":true,"h":"Bh","n":"bh","r":true,"t":"`$OBJECT`","key$":"bh","index$":15},"bj":{"a":true,"h":"Bj","n":"bj","r":true,"t":"`$OBJECT`","key$":"bj","index$":16},"bs":{"a":true,"h":"Bs","n":"bs","r":true,"t":"`$OBJECT`","key$":"bs","index$":17},"by":{"a":true,"h":"By","n":"by","r":true,"t":"`$OBJECT`","key$":"by","index$":18},"ca":{"a":true,"h":"Ca","n":"ca","r":true,"t":"`$OBJECT`","key$":"ca","index$":19},"cd":{"a":true,"h":"Cd","n":"cd","r":true,"t":"`$OBJECT`","key$":"cd","index$":20},"ch":{"a":true,"h":"Ch","n":"ch","r":true,"t":"`$OBJECT`","key$":"ch","index$":21},"cl":{"a":true,"h":"Cl","n":"cl","r":true,"t":"`$OBJECT`","key$":"cl","index$":22},"cm":{"a":true,"h":"Cm","n":"cm","r":true,"t":"`$OBJECT`","key$":"cm","index$":23},"co":{"a":true,"h":"Co","n":"co","r":true,"t":"`$OBJECT`","key$":"co","index$":24},"country":{"a":true,"h":"Country","n":"country","r":true,"sh":"Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).","t":"`$STRING`","key$":"country","index$":25},"country_options":{"a":true,"h":"Country Options","n":"country_options","r":true,"t":"`$OBJECT`","key$":"country_options","index$":26},"cr":{"a":true,"h":"Cr","n":"cr","r":true,"t":"`$OBJECT`","key$":"cr","index$":27},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":28},"cv":{"a":true,"h":"Cv","n":"cv","r":true,"t":"`$OBJECT`","key$":"cv","index$":29},"cy":{"a":true,"h":"Cy","n":"cy","r":true,"t":"`$OBJECT`","key$":"cy","index$":30},"cz":{"a":true,"h":"Cz","n":"cz","r":true,"t":"`$OBJECT`","key$":"cz","index$":31},"de":{"a":true,"h":"De","n":"de","r":true,"t":"`$OBJECT`","key$":"de","index$":32},"dk":{"a":true,"h":"Dk","n":"dk","r":true,"t":"`$OBJECT`","key$":"dk","index$":33},"ec":{"a":true,"h":"Ec","n":"ec","r":true,"t":"`$OBJECT`","key$":"ec","index$":34},"ee":{"a":true,"h":"Ee","n":"ee","r":true,"t":"`$OBJECT`","key$":"ee","index$":35},"eg":{"a":true,"h":"Eg","n":"eg","r":true,"t":"`$OBJECT`","key$":"eg","index$":36},"es":{"a":true,"h":"Es","n":"es","r":true,"t":"`$OBJECT`","key$":"es","index$":37},"et":{"a":true,"h":"Et","n":"et","r":true,"t":"`$OBJECT`","key$":"et","index$":38},"expires_at":{"a":true,"fo":"unix-time","h":"Expires At","n":"expires_at","r":false,"sh":"If set, the registration stops being active at this time.","t":"`$INTEGER`","key$":"expires_at","index$":39},"fi":{"a":true,"h":"Fi","n":"fi","r":true,"t":"`$OBJECT`","key$":"fi","index$":40},"fr":{"a":true,"h":"Fr","n":"fr","r":true,"t":"`$OBJECT`","key$":"fr","index$":41},"gb":{"a":true,"h":"Gb","n":"gb","r":true,"t":"`$OBJECT`","key$":"gb","index$":42},"ge":{"a":true,"h":"Ge","n":"ge","r":true,"t":"`$OBJECT`","key$":"ge","index$":43},"gn":{"a":true,"h":"Gn","n":"gn","r":true,"t":"`$OBJECT`","key$":"gn","index$":44},"gr":{"a":true,"h":"Gr","n":"gr","r":true,"t":"`$OBJECT`","key$":"gr","index$":45},"hr":{"a":true,"h":"Hr","n":"hr","r":true,"t":"`$OBJECT`","key$":"hr","index$":46},"hu":{"a":true,"h":"Hu","n":"hu","r":true,"t":"`$OBJECT`","key$":"hu","index$":47},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$OBJECT`","key$":"id","index$":48},"ie":{"a":true,"h":"Ie","n":"ie","r":true,"t":"`$OBJECT`","key$":"ie","index$":49},"in":{"a":true,"h":"In","n":"in","r":true,"t":"`$OBJECT`","key$":"in","index$":50},"is":{"a":true,"h":"Is","n":"is","r":true,"t":"`$OBJECT`","key$":"is","index$":51},"it":{"a":true,"h":"It","n":"it","r":true,"t":"`$OBJECT`","key$":"it","index$":52},"jp":{"a":true,"h":"Jp","n":"jp","r":true,"t":"`$OBJECT`","key$":"jp","index$":53},"ke":{"a":true,"h":"Ke","n":"ke","r":true,"t":"`$OBJECT`","key$":"ke","index$":54},"kg":{"a":true,"h":"Kg","n":"kg","r":true,"t":"`$OBJECT`","key$":"kg","index$":55},"kh":{"a":true,"h":"Kh","n":"kh","r":true,"t":"`$OBJECT`","key$":"kh","index$":56},"kr":{"a":true,"h":"Kr","n":"kr","r":true,"t":"`$OBJECT`","key$":"kr","index$":57},"kz":{"a":true,"h":"Kz","n":"kz","r":true,"t":"`$OBJECT`","key$":"kz","index$":58},"la":{"a":true,"h":"La","n":"la","r":true,"t":"`$OBJECT`","key$":"la","index$":59},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":60},"lk":{"a":true,"h":"Lk","n":"lk","r":true,"t":"`$OBJECT`","key$":"lk","index$":61},"lt":{"a":true,"h":"Lt","n":"lt","r":true,"t":"`$OBJECT`","key$":"lt","index$":62},"lu":{"a":true,"h":"Lu","n":"lu","r":true,"t":"`$OBJECT`","key$":"lu","index$":63},"lv":{"a":true,"h":"Lv","n":"lv","r":true,"t":"`$OBJECT`","key$":"lv","index$":64},"ma":{"a":true,"h":"Ma","n":"ma","r":true,"t":"`$OBJECT`","key$":"ma","index$":65},"md":{"a":true,"h":"Md","n":"md","r":true,"t":"`$OBJECT`","key$":"md","index$":66},"me":{"a":true,"h":"Me","n":"me","r":true,"t":"`$OBJECT`","key$":"me","index$":67},"mk":{"a":true,"h":"Mk","n":"mk","r":true,"t":"`$OBJECT`","key$":"mk","index$":68},"mr":{"a":true,"h":"Mr","n":"mr","r":true,"t":"`$OBJECT`","key$":"mr","index$":69},"mt":{"a":true,"h":"Mt","n":"mt","r":true,"t":"`$OBJECT`","key$":"mt","index$":70},"mx":{"a":true,"h":"Mx","n":"mx","r":true,"t":"`$OBJECT`","key$":"mx","index$":71},"my":{"a":true,"h":"My","n":"my","r":true,"t":"`$OBJECT`","key$":"my","index$":72},"ng":{"a":true,"h":"Ng","n":"ng","r":true,"t":"`$OBJECT`","key$":"ng","index$":73},"nl":{"a":true,"h":"Nl","n":"nl","r":true,"t":"`$OBJECT`","key$":"nl","index$":74},"no":{"a":true,"h":"No","n":"no","r":true,"t":"`$OBJECT`","key$":"no","index$":75},"np":{"a":true,"h":"Np","n":"np","r":true,"t":"`$OBJECT`","key$":"np","index$":76},"nz":{"a":true,"h":"Nz","n":"nz","r":true,"t":"`$OBJECT`","key$":"nz","index$":77},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":78},"om":{"a":true,"h":"Om","n":"om","r":true,"t":"`$OBJECT`","key$":"om","index$":79},"pe":{"a":true,"h":"Pe","n":"pe","r":true,"t":"`$OBJECT`","key$":"pe","index$":80},"ph":{"a":true,"h":"Ph","n":"ph","r":true,"t":"`$OBJECT`","key$":"ph","index$":81},"pl":{"a":true,"h":"Pl","n":"pl","r":true,"t":"`$OBJECT`","key$":"pl","index$":82},"pt":{"a":true,"h":"Pt","n":"pt","r":true,"t":"`$OBJECT`","key$":"pt","index$":83},"ro":{"a":true,"h":"Ro","n":"ro","r":true,"t":"`$OBJECT`","key$":"ro","index$":84},"rs":{"a":true,"h":"Rs","n":"rs","r":true,"t":"`$OBJECT`","key$":"rs","index$":85},"ru":{"a":true,"h":"Ru","n":"ru","r":true,"t":"`$OBJECT`","key$":"ru","index$":86},"sa":{"a":true,"h":"Sa","n":"sa","r":true,"t":"`$OBJECT`","key$":"sa","index$":87},"se":{"a":true,"h":"Se","n":"se","r":true,"t":"`$OBJECT`","key$":"se","index$":88},"sg":{"a":true,"h":"Sg","n":"sg","r":true,"t":"`$OBJECT`","key$":"sg","index$":89},"si":{"a":true,"h":"Si","n":"si","r":true,"t":"`$OBJECT`","key$":"si","index$":90},"sk":{"a":true,"h":"Sk","n":"sk","r":true,"t":"`$OBJECT`","key$":"sk","index$":91},"sn":{"a":true,"h":"Sn","n":"sn","r":true,"t":"`$OBJECT`","key$":"sn","index$":92},"sr":{"a":true,"h":"Sr","n":"sr","r":true,"t":"`$OBJECT`","key$":"sr","index$":93},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the registration.","t":"`$STRING`","key$":"status","index$":94},"th":{"a":true,"h":"Th","n":"th","r":true,"t":"`$OBJECT`","key$":"th","index$":95},"tj":{"a":true,"h":"Tj","n":"tj","r":true,"t":"`$OBJECT`","key$":"tj","index$":96},"tr":{"a":true,"h":"Tr","n":"tr","r":true,"t":"`$OBJECT`","key$":"tr","index$":97},"tw":{"a":true,"h":"Tw","n":"tw","r":true,"t":"`$OBJECT`","key$":"tw","index$":98},"tz":{"a":true,"h":"Tz","n":"tz","r":true,"t":"`$OBJECT`","key$":"tz","index$":99},"ua":{"a":true,"h":"Ua","n":"ua","r":true,"t":"`$OBJECT`","key$":"ua","index$":100},"ug":{"a":true,"h":"Ug","n":"ug","r":true,"t":"`$OBJECT`","key$":"ug","index$":101},"us":{"a":true,"h":"Us","n":"us","r":true,"t":"`$OBJECT`","key$":"us","index$":102},"uy":{"a":true,"h":"Uy","n":"uy","r":true,"t":"`$OBJECT`","key$":"uy","index$":103},"uz":{"a":true,"h":"Uz","n":"uz","r":true,"t":"`$OBJECT`","key$":"uz","index$":104},"vn":{"a":true,"h":"Vn","n":"vn","r":true,"t":"`$OBJECT`","key$":"vn","index$":105},"za":{"a":true,"h":"Za","n":"za","r":true,"t":"`$OBJECT`","key$":"za","index$":106},"zm":{"a":true,"h":"Zm","n":"zm","r":true,"t":"`$OBJECT`","key$":"zm","index$":107},"zw":{"a":true,"h":"Zw","n":"zw","r":true,"t":"`$OBJECT`","key$":"zw","index$":108}},"id":{"field":"id","name":"id"},"name":"registration","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/tax/registrations/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/tax/registrations/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"tax"},{"lit":"registrations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.country_options`"},"index$":0},{"a":true,"co":{"id":"POST /v1/tax/registrations","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/tax/registrations","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"tax"},{"lit":"registrations"}],"t":{"req":"`reqdata`","res":"`body.country_options`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/tax/registrations","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v1/tax/registrations","q":{"exist":["ending_before","expand","limit","starting_after","status"]},"r":{},"s":[{"lit":"v1"},{"lit":"tax"},{"lit":"registrations"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/tax/registrations/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/tax/registrations/{id}","q":{"exist":["expand","id"]},"r":{},"s":[{"lit":"v1"},{"lit":"tax"},{"lit":"registrations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.country_options`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"registration","name__orig":"registration","Name":"Registration","name_":"registration","name-":"registration","NAME":"REGISTRATION","index$":110}, {"active":true,"entity":"registration","key$":"BasicRegistrationFlow","kind":"basic","name":"BasicRegistrationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"registration_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"registration_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"registration_ref01","srcdatavar":"registration_ref01_data","suffix":"_dt0"},"m":{"id":"registration01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-registration_ref01"}}],"index$":2}]}, 'Registration', {"POST /v1/tax/registrations/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"active_from":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"expires_at":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"active_from":{"anyOf":[{"enum":["now"],"maxLength":5000,"type":"string"},{"format":"unix-time","type":"integer"}],"description":"Time at which the registration becomes active. It can be either `now` to indicate the current time, or a timestamp measured in seconds since the Unix epoch."},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"expires_at":{"anyOf":[{"enum":["now"],"maxLength":5000,"type":"string"},{"format":"unix-time","type":"integer"},{"enum":[""],"type":"string"}],"description":"If set, the registration stops being active at this time. If not set, the registration will be active indefinitely. It can be either `now` to indicate the current time, or a timestamp measured in seconds since the Unix epoch."}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/tax/registrations":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"active_from":{"explode":true,"style":"deepObject"},"country_options":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"active_from":{"anyOf":[{"enum":["now"],"maxLength":5000,"type":"string"},{"format":"unix-time","type":"integer"}],"description":"Time at which the Tax Registration becomes active. It can be either `now` to indicate the current time, or a future timestamp measured in seconds since the Unix epoch."},"country":{"description":"Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).","maxLength":5000,"type":"string"},"country_options":{"description":"Specific options for a registration in the specified `country`.","properties":{"ae":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"al":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"am":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"ao":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"at":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"au":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"aw":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"az":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"ba":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"bb":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"bd":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"be":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"bf":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"bg":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"bh":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"bj":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"bs":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"by":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"ca":{"properties":{"province_standard":{},"type":{}},"required":["type"],"title":"canada","type":"object"},"cd":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"ch":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"cl":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"cm":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"co":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"cr":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"cv":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"cy":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"cz":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"de":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"dk":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"ec":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"ee":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"eg":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"es":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"spain","type":"object"},"et":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"fi":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"fr":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"gb":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"ge":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"gn":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"gr":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"hr":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"hu":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"id":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"ie":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"in":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"is":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"it":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"jp":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"ke":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"kg":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"kh":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"kr":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"kz":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"la":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"lk":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"lt":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"lu":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"lv":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"ma":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"md":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"me":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"mk":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"mr":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"mt":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"mx":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"my":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"ng":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"nl":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"no":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"np":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"nz":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"om":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"pe":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"ph":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"pl":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"pt":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"ro":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"rs":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"ru":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"sa":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"se":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"sg":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"si":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"sk":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"europe","type":"object"},"sn":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"sr":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"th":{"properties":{"type":{}},"required":["type"],"title":"thailand","type":"object"},"tj":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"tr":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"tw":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"tz":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"ua":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"ug":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"us":{"properties":{"admissions_tax":{},"attendance_tax":{},"entertainment_tax":{},"gross_receipts_tax":{},"hospitality_tax":{},"local_amusement_tax":{},"local_lease_tax":{},"luxury_tax":{},"mass_transit_parking_tax":{},"parking_tax":{},"resort_tax":{},"state":{},"state_sales_tax":{},"tourism_tax":{},"type":{}},"required":["state","type"],"title":"united_states","type":"object"},"uy":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"uz":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"vn":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"za":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"},"zm":{"properties":{"type":{}},"required":["type"],"title":"simplified","type":"object"},"zw":{"properties":{"standard":{},"type":{}},"required":["type"],"title":"default","type":"object"}},"title":"country_options","type":"object"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"expires_at":{"description":"If set, the Tax Registration stops being active at this time. If not set, the Tax Registration will be active indefinitely. Timestamp measured in seconds since the Unix epoch.","format":"unix-time","type":"integer"}},"required":["active_from","country","country_options"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/tax/registrations":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3},{"description":"The status of the Tax Registration.","in":"query","name":"status","required":false,"schema":{"enum":["active","all","expired","scheduled"],"type":"string"},"style":"form","index$":4}]},"GET /v1/tax/registrations/{id}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"id","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const registration_ref01_ent = client.Registration()
    let registration_ref01_data = setup.data.new.registration['registration_ref01']

    registration_ref01_data = (await registration_ref01_ent.create(registration_ref01_data)).data()
    assert(null != registration_ref01_data.id)


    // LIST
    const registration_ref01_match = {}

    const registration_ref01_list = (await registration_ref01_ent.list(registration_ref01_match)).map((e) => e.data())

    assert(!isempty(select(registration_ref01_list, { id: registration_ref01_data.id })))


    // LOAD
    const registration_ref01_match_dt0 = {}
    registration_ref01_match_dt0.id = registration_ref01_data.id
    const registration_ref01_data_dt0 = (await registration_ref01_ent.load(registration_ref01_match_dt0)).data()
    assert(registration_ref01_data_dt0.id === registration_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/registration/RegistrationTestData.json')

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
    ['registration01','registration02','registration03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_REGISTRATION_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
  })

  idmap = env['STRIPE_TEST_REGISTRATION_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_REGISTRATION_ENTID']
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
  
