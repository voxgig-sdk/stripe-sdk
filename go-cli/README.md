# stripe-cli

boru-driven command-line client **and** interactive REPL for the Stripe
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/stripe-cli)
make build

# 2. See usage (words, entities, env vars)
./stripe-cli --help

# 3. Provide credentials once, via the environment
export STRIPE_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./stripe-cli list account
./stripe-cli load 1 account            # {id:1} shorthand
./stripe-cli load '{id:1}' account       # explicit match map
./stripe-cli list account_link

# 5. Override the API base URL for a single call
STRIPE_BASE=https://api.example.com ./stripe-cli list account

# 6. No arguments -> interactive REPL
./stripe-cli
stripe> list account
stripe> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/stripe-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export STRIPE_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/stripe-cli list account
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./stripe-cli list account
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Load a single record

```sh
./stripe-cli load 1 account          # scalar shorthand for {id:1}
./stripe-cli load '{id:1}' account     # explicit match map
```

The query is either a **scalar** (`1`, treated as `{id:1}`) or a **match map**
(`{id:1}`, `{slug:"acme"}`). Quote the map so your shell passes it through intact.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export STRIPE_APIKEY=sk_live_xxx            # API key
export STRIPE_BASE=https://api.example.com  # optional: override the API base URL
./stripe-cli list account
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `stripe>`). Each line is
evaluated as its own boru expression:

```text
$ ./stripe-cli
stripe> list account
stripe> /help
stripe> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 148 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `account`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `STRIPE_APIKEY` | API key sent with every request. |
| `STRIPE_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/stripe-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 148 entities this SDK exposes (any is valid as `<entity>`):

account account_link account_owner account_session active_entitlement alert apple_pay_domain application_fee association authentication authorization balance balance_setting balance_transaction bank_account calculation capability card cardholder cash_balance cash_balance_transaction charge configuration confirmation_token connection_token country_spec coupon credit_balance_summary credit_balance_transaction credit_grant credit_note credit_note_line credit_reversal customer customer_balance_transaction customer_session debit_reversal deleted_account deleted_apple_pay_domain deleted_coupon deleted_external_account deleted_invoiceitem deleted_person deleted_plan deleted_product_feature deleted_subscription_item deleted_webhook_endpoint discount dispute domain early_fraud_warning ephemeral_key event exchange_rate external_account feature feedback_option file file_link financial_account financial_account_feature fund_cash_balance funding_instruction history inbound_transfer install invoice invoice_payment invoice_rendering_template invoiceitem line line_item linked_account linked_account_owner location login_link mandate meter meter_event meter_event_adjustment meter_event_summary onboarding_link order outbound_payment outbound_transfer payment_attempt_record payment_evaluation payment_intent payment_intent_amount_details_line_item payment_link payment_method payment_method_configuration payment_method_domain payment_record payout person personalization_design physical_bundle plan price product product_feature promotion_code quote quote_computed_upfront_line_item quote_pdf reader received_credit received_debit refund registration report_run report_type request reversal review scheduled_query_run search secret session setting settlement setup_attempt setup_intent shipping_rate sigma_api_query source source_mandate_notification source_transaction subscription subscription_item subscription_schedule supplier tax_code tax_id tax_rate test_clock token topup transaction transaction_entry transfer trial_offer value_list value_list_item verification_report verification_session webhook_endpoint

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./stripe-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
