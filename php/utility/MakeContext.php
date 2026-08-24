<?php
declare(strict_types=1);

// Stripe SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class StripeMakeContext
{
    public static function call(array $ctxmap, ?StripeContext $basectx): StripeContext
    {
        return new StripeContext($ctxmap, $basectx);
    }
}
