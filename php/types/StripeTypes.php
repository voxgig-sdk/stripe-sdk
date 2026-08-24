<?php
declare(strict_types=1);

// Typed models for the Stripe SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Session entity data model. */
class Session
{
    public ?int $amount_total = null;
    public ?string $cancel_url = null;
    public ?int $created = null;
    public ?string $currency = null;
    public ?string $customer = null;
    public ?string $id = null;
    public ?string $mode = null;
    public ?string $object = null;
    public ?string $payment_status = null;
    public ?string $status = null;
    public ?string $success_url = null;
}

/** Request payload for Session#load. */
class SessionLoadMatch
{
    public string $id;
}

/** Request payload for Session#list. */
class SessionListMatch
{
    public ?int $amount_total = null;
    public ?string $cancel_url = null;
    public ?int $created = null;
    public ?string $currency = null;
    public ?string $customer = null;
    public ?string $id = null;
    public ?string $mode = null;
    public ?string $object = null;
    public ?string $payment_status = null;
    public ?string $status = null;
    public ?string $success_url = null;
}

/** Request payload for Session#create. */
class SessionCreateData
{
    public ?int $amount_total = null;
    public ?string $cancel_url = null;
    public ?int $created = null;
    public ?string $currency = null;
    public ?string $customer = null;
    public ?string $id = null;
    public ?string $mode = null;
    public ?string $object = null;
    public ?string $payment_status = null;
    public ?string $status = null;
    public ?string $success_url = null;
}

