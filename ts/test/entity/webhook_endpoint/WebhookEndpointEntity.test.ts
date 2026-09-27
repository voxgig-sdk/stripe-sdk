

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


describe('WebhookEndpointEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STRIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('STRIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StripeSDK.test()
    const ent = testsdk.WebhookEndpoint()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STRIPE_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhook_endpoint.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"api_version":{"a":true,"h":"Api Version","n":"api_version","r":false,"sh":"The API version that events are rendered as for this webhook endpoint.","t":"`$STRING`","key$":"api_version","index$":0},"application":{"a":true,"h":"Application","n":"application","r":false,"sh":"The ID of the associated Connect application.","t":"`$STRING`","key$":"application","index$":1},"created":{"a":true,"fo":"unix-time","h":"Created","n":"created","r":true,"sh":"Time at which the object was created.","t":"`$INTEGER`","key$":"created","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"An optional description of what the webhook is used for.","t":"`$STRING`","key$":"description","index$":3},"enabled_events":{"a":true,"h":"Enabled Events","n":"enabled_events","r":true,"sh":"The list of events to enable for this endpoint.","t":"`$ARRAY`","key$":"enabled_events","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the object.","t":"`$STRING`","key$":"id","index$":5},"livemode":{"a":true,"h":"Livemode","n":"livemode","r":true,"sh":"If the object exists in live mode, the value is `true`.","t":"`$BOOLEAN`","key$":"livemode","index$":6},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":true,"sh":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object.","t":"`$OBJECT`","key$":"metadata","index$":7},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"String representing the object's type.","t":"`$STRING`","key$":"object","index$":8},"secret":{"a":true,"h":"Secret","n":"secret","r":false,"sh":"The endpoint's secret, used to generate [webhook signatures](https://docs.stripe.com/webhooks/signatures).","t":"`$STRING`","key$":"secret","index$":9},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the webhook.","t":"`$STRING`","key$":"status","index$":10},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The URL of the webhook endpoint.","t":"`$STRING`","key$":"url","index$":11}},"id":{"field":"id","name":"id"},"name":"webhook_endpoint","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/webhook_endpoints/{webhook_endpoint}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_endpoint","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/webhook_endpoints/{webhook_endpoint}","q":{"exist":["id"]},"r":{"param":{"webhook_endpoint":"id"}},"s":[{"lit":"v1"},{"lit":"webhook_endpoints"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/webhook_endpoints","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/webhook_endpoints","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"webhook_endpoints"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/webhook_endpoints","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ending_before","or":"ending_before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v1/webhook_endpoints","q":{"exist":["ending_before","expand","limit","starting_after"]},"r":{},"s":[{"lit":"v1"},{"lit":"webhook_endpoints"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/webhook_endpoints/{webhook_endpoint}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_endpoint","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expand","or":"expand","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/v1/webhook_endpoints/{webhook_endpoint}","q":{"exist":["expand","id"]},"r":{"param":{"webhook_endpoint":"id"}},"s":[{"lit":"v1"},{"lit":"webhook_endpoints"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"webhook_endpoint","name__orig":"webhook_endpoint","Name":"WebhookEndpoint","name_":"webhook_endpoint","name-":"webhook-endpoint","NAME":"WEBHOOK_ENDPOINT","index$":147}, {"active":true,"entity":"webhook_endpoint","key$":"BasicWebhookEndpointFlow","kind":"basic","name":"BasicWebhookEndpointFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"webhook_endpoint_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"webhook_endpoint_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"webhook_endpoint_ref01","srcdatavar":"webhook_endpoint_ref01_data","suffix":"_dt0"},"m":{"id":"webhook_endpoint01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhook_endpoint_ref01"}}],"index$":2}]}, 'WebhookEndpoint', {"POST /v1/webhook_endpoints/{webhook_endpoint}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"description":{"explode":true,"style":"deepObject"},"enabled_events":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"description":{"anyOf":[{"maxLength":5000,"type":"string"},{"enum":[""],"type":"string"}],"description":"An optional description of what the webhook is used for."},"disabled":{"description":"Disable the webhook endpoint if set to true.","type":"boolean"},"enabled_events":{"description":"The list of events to enable for this endpoint. You may specify `['*']` to enable all events, except those that require explicit selection.","items":{"enum":["*","account.application.authorized","account.application.deauthorized","account.external_account.created","account.external_account.deleted","account.external_account.updated","account.updated","application_fee.created","application_fee.refund.updated","application_fee.refunded","apps.install.created","apps.install.deleted","apps.install.updated","balance.available","balance_settings.updated","billing.alert.triggered","billing.credit_balance_transaction.created","billing.credit_grant.created","billing.credit_grant.updated","billing.meter.created","billing.meter.deactivated","billing.meter.reactivated","billing.meter.updated","billing_portal.configuration.created","billing_portal.configuration.updated","billing_portal.session.created","capability.updated","cash_balance.funds_available","charge.captured","charge.dispute.closed","charge.dispute.created","charge.dispute.funds_reinstated","charge.dispute.funds_withdrawn","charge.dispute.updated","charge.expired","charge.failed","charge.pending","charge.refund.updated","charge.refunded","charge.succeeded","charge.updated","checkout.session.async_payment_failed","checkout.session.async_payment_succeeded","checkout.session.completed","checkout.session.expired","climate.order.canceled","climate.order.created","climate.order.delayed","climate.order.delivered","climate.order.product_substituted","climate.product.created","climate.product.pricing_updated","coupon.created","coupon.deleted","coupon.updated","credit_note.created","credit_note.updated","credit_note.voided","customer.created","customer.deleted","customer.discount.created","customer.discount.deleted","customer.discount.updated","customer.source.created","customer.source.deleted","customer.source.expiring","customer.source.updated","customer.subscription.created","customer.subscription.deleted","customer.subscription.paused","customer.subscription.pending_update_applied","customer.subscription.pending_update_expired","customer.subscription.resumed","customer.subscription.trial_will_end","customer.subscription.updated","customer.tax_id.created","customer.tax_id.deleted","customer.tax_id.updated","customer.updated","customer_cash_balance_transaction.created","entitlements.active_entitlement_summary.updated","file.created","financial_connections.account.account_numbers_updated","financial_connections.account.created","financial_connections.account.deactivated","financial_connections.account.disconnected","financial_connections.account.expected_deactivation_date_updated","financial_connections.account.reactivated","financial_connections.account.refreshed_balance","financial_connections.account.refreshed_ownership","financial_connections.account.refreshed_transactions","financial_connections.account.supported_payment_method_types_updated","financial_connections.account.upcoming_account_number_expiry","financial_connections.account.upcoming_deactivation","financial_connections.authorization.expected_deactivation_date_updated","financial_connections.authorization.upcoming_deactivation","identity.verification_session.canceled","identity.verification_session.created","identity.verification_session.processing","identity.verification_session.redacted","identity.verification_session.requires_input","identity.verification_session.verified","invoice.created","invoice.deleted","invoice.finalization_failed","invoice.finalized","invoice.marked_uncollectible","invoice.overdue","invoice.overpaid","invoice.paid","invoice.payment_action_required","invoice.payment_attempt_required","invoice.payment_failed","invoice.payment_succeeded","invoice.sent","invoice.upcoming","invoice.updated","invoice.voided","invoice.will_be_due","invoice_payment.paid","invoiceitem.created","invoiceitem.deleted","issuing_authorization.created","issuing_authorization.request","issuing_authorization.updated","issuing_card.created","issuing_card.updated","issuing_cardholder.created","issuing_cardholder.updated","issuing_dispute.closed","issuing_dispute.created","issuing_dispute.funds_reinstated","issuing_dispute.funds_rescinded","issuing_dispute.submitted","issuing_dispute.updated","issuing_personalization_design.activated","issuing_personalization_design.deactivated","issuing_personalization_design.rejected","issuing_personalization_design.updated","issuing_token.created","issuing_token.updated","issuing_transaction.created","issuing_transaction.purchase_details_receipt_updated","issuing_transaction.updated","mandate.updated","payment_intent.amount_capturable_updated","payment_intent.canceled","payment_intent.created","payment_intent.partially_funded","payment_intent.payment_failed","payment_intent.processing","payment_intent.requires_action","payment_intent.succeeded","payment_link.created","payment_link.updated","payment_method.attached","payment_method.automatically_updated","payment_method.detached","payment_method.updated","payout.canceled","payout.created","payout.failed","payout.paid","payout.reconciliation_completed","payout.updated","person.created","person.deleted","person.updated","plan.created","plan.deleted","plan.updated","price.created","price.deleted","price.updated","product.created","product.deleted","product.updated","promotion_code.created","promotion_code.updated","quote.accepted","quote.canceled","quote.created","quote.finalized","radar.early_fraud_warning.created","radar.early_fraud_warning.updated","refund.created","refund.failed","refund.updated","reporting.report_run.failed","reporting.report_run.succeeded","reporting.report_type.updated","reserve.hold.created","reserve.hold.updated","reserve.plan.created","reserve.plan.disabled","reserve.plan.expired","reserve.plan.updated","reserve.release.created","review.closed","review.opened","setup_intent.canceled","setup_intent.created","setup_intent.requires_action","setup_intent.setup_failed","setup_intent.succeeded","sigma.scheduled_query_run.created","source.canceled","source.chargeable","source.failed","source.mandate_notification","source.refund_attributes_required","source.transaction.created","source.transaction.updated","subscription_schedule.aborted","subscription_schedule.canceled","subscription_schedule.completed","subscription_schedule.created","subscription_schedule.expiring","subscription_schedule.released","subscription_schedule.updated","tax.settings.updated","tax_rate.created","tax_rate.updated","terminal.reader.action_failed","terminal.reader.action_succeeded","terminal.reader.action_updated","test_helpers.test_clock.advancing","test_helpers.test_clock.created","test_helpers.test_clock.deleted","test_helpers.test_clock.internal_failure","test_helpers.test_clock.ready","topup.canceled","topup.created","topup.failed","topup.reversed","topup.succeeded","transfer.created","transfer.reversed","transfer.updated","treasury.credit_reversal.created","treasury.credit_reversal.posted","treasury.debit_reversal.completed","treasury.debit_reversal.created","treasury.debit_reversal.initial_credit_granted","treasury.financial_account.closed","treasury.financial_account.created","treasury.financial_account.features_status_updated","treasury.inbound_transfer.canceled","treasury.inbound_transfer.created","treasury.inbound_transfer.failed","treasury.inbound_transfer.succeeded","treasury.outbound_payment.canceled","treasury.outbound_payment.created","treasury.outbound_payment.expected_arrival_date_updated","treasury.outbound_payment.failed","treasury.outbound_payment.posted","treasury.outbound_payment.returned","treasury.outbound_payment.tracking_details_updated","treasury.outbound_transfer.canceled","treasury.outbound_transfer.created","treasury.outbound_transfer.expected_arrival_date_updated","treasury.outbound_transfer.failed","treasury.outbound_transfer.posted","treasury.outbound_transfer.returned","treasury.outbound_transfer.tracking_details_updated","treasury.received_credit.created","treasury.received_credit.failed","treasury.received_credit.succeeded","treasury.received_debit.created"],"type":"string","x-stripeBypassValidation":true},"type":"array"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"url":{"description":"The URL of the webhook endpoint.","type":"string"}},"type":"object"}}},"required":false},"parameters":[{"in":"path","name":"webhook_endpoint","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":0}]},"POST /v1/webhook_endpoints":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{"description":{"explode":true,"style":"deepObject"},"enabled_events":{"explode":true,"style":"deepObject"},"expand":{"explode":true,"style":"deepObject"},"metadata":{"explode":true,"style":"deepObject"}},"schema":{"additionalProperties":false,"properties":{"api_version":{"description":"Events sent to this endpoint will be generated with this Stripe Version instead of your account's default Stripe Version.","enum":["2011-01-01","2011-06-21","2011-06-28","2011-08-01","2011-09-15","2011-11-17","2012-02-23","2012-03-25","2012-06-18","2012-06-28","2012-07-09","2012-09-24","2012-10-26","2012-11-07","2013-02-11","2013-02-13","2013-07-05","2013-08-12","2013-08-13","2013-10-29","2013-12-03","2014-01-31","2014-03-13","2014-03-28","2014-05-19","2014-06-13","2014-06-17","2014-07-22","2014-07-26","2014-08-04","2014-08-20","2014-09-08","2014-10-07","2014-11-05","2014-11-20","2014-12-08","2014-12-17","2014-12-22","2015-01-11","2015-01-26","2015-02-10","2015-02-16","2015-02-18","2015-03-24","2015-04-07","2015-06-15","2015-07-07","2015-07-13","2015-07-28","2015-08-07","2015-08-19","2015-09-03","2015-09-08","2015-09-23","2015-10-01","2015-10-12","2015-10-16","2016-02-03","2016-02-19","2016-02-22","2016-02-23","2016-02-29","2016-03-07","2016-06-15","2016-07-06","2016-10-19","2017-01-27","2017-02-14","2017-04-06","2017-05-25","2017-06-05","2017-08-15","2017-12-14","2018-01-23","2018-02-05","2018-02-06","2018-02-28","2018-05-21","2018-07-27","2018-08-23","2018-09-06","2018-09-24","2018-10-31","2018-11-08","2019-02-11","2019-02-19","2019-03-14","2019-05-16","2019-08-14","2019-09-09","2019-10-08","2019-10-17","2019-11-05","2019-12-03","2020-03-02","2020-08-27","2022-08-01","2022-11-15","2023-08-16","2023-10-16","2024-04-10","2024-06-20","2024-09-30.acacia","2024-10-28.acacia","2024-11-20.acacia","2024-12-18.acacia","2025-01-27.acacia","2025-02-24.acacia","2025-03-01.dashboard","2025-03-31.basil","2025-04-30.basil","2025-05-28.basil","2025-06-30.basil","2025-07-30.basil","2025-08-27.basil","2025-09-30.clover","2025-10-29.clover","2025-11-17.clover","2025-12-15.clover","2026-01-28.clover","2026-02-25.clover","2026-03-25.dahlia","2026-04-22.dahlia","2026-05-27.dahlia","2026-06-24.dahlia","2026-07-29.dahlia","2026-08-26.dahlia","2026-09-30.endive"],"maxLength":5000,"type":"string","x-stripeBypassValidation":true},"connect":{"description":"Whether this endpoint should receive events from connected accounts (`true`), or from your account (`false`). Defaults to `false`.","type":"boolean"},"description":{"anyOf":[{"maxLength":5000,"type":"string"},{"enum":[""],"type":"string"}],"description":"An optional description of what the webhook is used for."},"enabled_events":{"description":"The list of events to enable for this endpoint. You may specify `['*']` to enable all events, except those that require explicit selection.","items":{"enum":["*","account.application.authorized","account.application.deauthorized","account.external_account.created","account.external_account.deleted","account.external_account.updated","account.updated","application_fee.created","application_fee.refund.updated","application_fee.refunded","apps.install.created","apps.install.deleted","apps.install.updated","balance.available","balance_settings.updated","billing.alert.triggered","billing.credit_balance_transaction.created","billing.credit_grant.created","billing.credit_grant.updated","billing.meter.created","billing.meter.deactivated","billing.meter.reactivated","billing.meter.updated","billing_portal.configuration.created","billing_portal.configuration.updated","billing_portal.session.created","capability.updated","cash_balance.funds_available","charge.captured","charge.dispute.closed","charge.dispute.created","charge.dispute.funds_reinstated","charge.dispute.funds_withdrawn","charge.dispute.updated","charge.expired","charge.failed","charge.pending","charge.refund.updated","charge.refunded","charge.succeeded","charge.updated","checkout.session.async_payment_failed","checkout.session.async_payment_succeeded","checkout.session.completed","checkout.session.expired","climate.order.canceled","climate.order.created","climate.order.delayed","climate.order.delivered","climate.order.product_substituted","climate.product.created","climate.product.pricing_updated","coupon.created","coupon.deleted","coupon.updated","credit_note.created","credit_note.updated","credit_note.voided","customer.created","customer.deleted","customer.discount.created","customer.discount.deleted","customer.discount.updated","customer.source.created","customer.source.deleted","customer.source.expiring","customer.source.updated","customer.subscription.created","customer.subscription.deleted","customer.subscription.paused","customer.subscription.pending_update_applied","customer.subscription.pending_update_expired","customer.subscription.resumed","customer.subscription.trial_will_end","customer.subscription.updated","customer.tax_id.created","customer.tax_id.deleted","customer.tax_id.updated","customer.updated","customer_cash_balance_transaction.created","entitlements.active_entitlement_summary.updated","file.created","financial_connections.account.account_numbers_updated","financial_connections.account.created","financial_connections.account.deactivated","financial_connections.account.disconnected","financial_connections.account.expected_deactivation_date_updated","financial_connections.account.reactivated","financial_connections.account.refreshed_balance","financial_connections.account.refreshed_ownership","financial_connections.account.refreshed_transactions","financial_connections.account.supported_payment_method_types_updated","financial_connections.account.upcoming_account_number_expiry","financial_connections.account.upcoming_deactivation","financial_connections.authorization.expected_deactivation_date_updated","financial_connections.authorization.upcoming_deactivation","identity.verification_session.canceled","identity.verification_session.created","identity.verification_session.processing","identity.verification_session.redacted","identity.verification_session.requires_input","identity.verification_session.verified","invoice.created","invoice.deleted","invoice.finalization_failed","invoice.finalized","invoice.marked_uncollectible","invoice.overdue","invoice.overpaid","invoice.paid","invoice.payment_action_required","invoice.payment_attempt_required","invoice.payment_failed","invoice.payment_succeeded","invoice.sent","invoice.upcoming","invoice.updated","invoice.voided","invoice.will_be_due","invoice_payment.paid","invoiceitem.created","invoiceitem.deleted","issuing_authorization.created","issuing_authorization.request","issuing_authorization.updated","issuing_card.created","issuing_card.updated","issuing_cardholder.created","issuing_cardholder.updated","issuing_dispute.closed","issuing_dispute.created","issuing_dispute.funds_reinstated","issuing_dispute.funds_rescinded","issuing_dispute.submitted","issuing_dispute.updated","issuing_personalization_design.activated","issuing_personalization_design.deactivated","issuing_personalization_design.rejected","issuing_personalization_design.updated","issuing_token.created","issuing_token.updated","issuing_transaction.created","issuing_transaction.purchase_details_receipt_updated","issuing_transaction.updated","mandate.updated","payment_intent.amount_capturable_updated","payment_intent.canceled","payment_intent.created","payment_intent.partially_funded","payment_intent.payment_failed","payment_intent.processing","payment_intent.requires_action","payment_intent.succeeded","payment_link.created","payment_link.updated","payment_method.attached","payment_method.automatically_updated","payment_method.detached","payment_method.updated","payout.canceled","payout.created","payout.failed","payout.paid","payout.reconciliation_completed","payout.updated","person.created","person.deleted","person.updated","plan.created","plan.deleted","plan.updated","price.created","price.deleted","price.updated","product.created","product.deleted","product.updated","promotion_code.created","promotion_code.updated","quote.accepted","quote.canceled","quote.created","quote.finalized","radar.early_fraud_warning.created","radar.early_fraud_warning.updated","refund.created","refund.failed","refund.updated","reporting.report_run.failed","reporting.report_run.succeeded","reporting.report_type.updated","reserve.hold.created","reserve.hold.updated","reserve.plan.created","reserve.plan.disabled","reserve.plan.expired","reserve.plan.updated","reserve.release.created","review.closed","review.opened","setup_intent.canceled","setup_intent.created","setup_intent.requires_action","setup_intent.setup_failed","setup_intent.succeeded","sigma.scheduled_query_run.created","source.canceled","source.chargeable","source.failed","source.mandate_notification","source.refund_attributes_required","source.transaction.created","source.transaction.updated","subscription_schedule.aborted","subscription_schedule.canceled","subscription_schedule.completed","subscription_schedule.created","subscription_schedule.expiring","subscription_schedule.released","subscription_schedule.updated","tax.settings.updated","tax_rate.created","tax_rate.updated","terminal.reader.action_failed","terminal.reader.action_succeeded","terminal.reader.action_updated","test_helpers.test_clock.advancing","test_helpers.test_clock.created","test_helpers.test_clock.deleted","test_helpers.test_clock.internal_failure","test_helpers.test_clock.ready","topup.canceled","topup.created","topup.failed","topup.reversed","topup.succeeded","transfer.created","transfer.reversed","transfer.updated","treasury.credit_reversal.created","treasury.credit_reversal.posted","treasury.debit_reversal.completed","treasury.debit_reversal.created","treasury.debit_reversal.initial_credit_granted","treasury.financial_account.closed","treasury.financial_account.created","treasury.financial_account.features_status_updated","treasury.inbound_transfer.canceled","treasury.inbound_transfer.created","treasury.inbound_transfer.failed","treasury.inbound_transfer.succeeded","treasury.outbound_payment.canceled","treasury.outbound_payment.created","treasury.outbound_payment.expected_arrival_date_updated","treasury.outbound_payment.failed","treasury.outbound_payment.posted","treasury.outbound_payment.returned","treasury.outbound_payment.tracking_details_updated","treasury.outbound_transfer.canceled","treasury.outbound_transfer.created","treasury.outbound_transfer.expected_arrival_date_updated","treasury.outbound_transfer.failed","treasury.outbound_transfer.posted","treasury.outbound_transfer.returned","treasury.outbound_transfer.tracking_details_updated","treasury.received_credit.created","treasury.received_credit.failed","treasury.received_credit.succeeded","treasury.received_debit.created"],"type":"string","x-stripeBypassValidation":true},"type":"array"},"expand":{"description":"Specifies which fields in the response should be expanded.","items":{"maxLength":5000,"type":"string"},"type":"array"},"metadata":{"anyOf":[{"additionalProperties":{"type":"string"},"type":"object"},{"enum":[""],"type":"string"}],"description":"Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`."},"url":{"description":"The URL of the webhook endpoint.","type":"string"}},"required":["enabled_events","url"],"type":"object"}}},"required":true},"parameters":[]},"GET /v1/webhook_endpoints":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.","in":"query","name":"ending_before","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":0},{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":1},{"description":"A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.","in":"query","name":"limit","required":false,"schema":{"type":"integer"},"style":"form","index$":2},{"description":"A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.","in":"query","name":"starting_after","required":false,"schema":{"maxLength":5000,"type":"string"},"style":"form","index$":3}]},"GET /v1/webhook_endpoints/{webhook_endpoint}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"encoding":{},"schema":{"additionalProperties":false,"properties":{},"type":"object"}}},"required":false},"parameters":[{"description":"Specifies which fields in the response should be expanded.","explode":true,"in":"query","name":"expand","required":false,"schema":{"items":{"maxLength":5000,"type":"string"},"type":"array"},"style":"deepObject","index$":0},{"in":"path","name":"webhook_endpoint","required":true,"schema":{"maxLength":5000,"type":"string"},"style":"simple","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhook_endpoint_ref01_ent = client.WebhookEndpoint()
    let webhook_endpoint_ref01_data = setup.data.new.webhook_endpoint['webhook_endpoint_ref01']

    webhook_endpoint_ref01_data = (await webhook_endpoint_ref01_ent.create(webhook_endpoint_ref01_data)).data()
    assert(null != webhook_endpoint_ref01_data.id)


    // LIST
    const webhook_endpoint_ref01_match: any = {}

    const webhook_endpoint_ref01_list = (await webhook_endpoint_ref01_ent.list(webhook_endpoint_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(webhook_endpoint_ref01_list, { id: webhook_endpoint_ref01_data.id })))


    // LOAD
    const webhook_endpoint_ref01_match_dt0: any = {}
    webhook_endpoint_ref01_match_dt0.id = webhook_endpoint_ref01_data.id
    const webhook_endpoint_ref01_data_dt0 = (await webhook_endpoint_ref01_ent.load(webhook_endpoint_ref01_match_dt0)).data()
    assert(webhook_endpoint_ref01_data_dt0.id === webhook_endpoint_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/webhook_endpoint/WebhookEndpointTestData.json')

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
    ['webhook_endpoint01','webhook_endpoint02','webhook_endpoint03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'STRIPE_TEST_WEBHOOK_ENDPOINT_ENTID': idmap,
    'STRIPE_TEST_LIVE': 'FALSE',
    'STRIPE_TEST_EXPLAIN': 'FALSE',
    'STRIPE_APIKEY': '',
    'STRIPE_SECRET': '',
  })

  idmap = env['STRIPE_TEST_WEBHOOK_ENDPOINT_ENTID']

  const live = 'TRUE' === env.STRIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['STRIPE_TEST_WEBHOOK_ENDPOINT_ENTID']
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
  
