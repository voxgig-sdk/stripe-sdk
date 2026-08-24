<?php
declare(strict_types=1);

// Stripe SDK utility: prepare_body

class StripePrepareBody
{
    public static function call(StripeContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
