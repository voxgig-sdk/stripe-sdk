<?php
declare(strict_types=1);

// Stripe SDK utility: clean

class StripeClean
{
    public static function call(StripeContext $ctx, mixed $val): mixed
    {
        return $val;
    }
}
