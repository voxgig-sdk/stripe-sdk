# API definition provenance

## stripe-openapi.json

- **Source:** https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json
- **Publisher:** Stripe (stripe/openapi, the official Stripe-maintained repository — this is the specification Stripe generates its own libraries from)
- **Retrieved:** 2026-09-26
- **Format:** OpenAPI 3.0.0
- **Size:** 8316935 bytes
- **Coverage:** 431 paths, 612 operations, 1538 component schemas, API version 2026-09-30.endive — the whole Stripe REST API.

Unmodified vendor file. Do not hand-edit it: refresh it from the source URL
above and re-record the retrieval date.

## Replaces `stripe-checkout-sessions-only.json`

That file was hand-authored and covered two paths, `/checkout/sessions` and
`/checkout/sessions/{id}`, out of 431 — one entity, `session`. It declared
`version: 1.0.0`, which is not a Stripe API version. It was removed on
2026-09-26 under the policy that an SDK covers its API in full.
