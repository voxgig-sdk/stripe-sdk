<?php
declare(strict_types=1);

// Stripe SDK utility: result_body

class StripeResultBody
{
    public static function call(StripeContext $ctx): ?StripeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
