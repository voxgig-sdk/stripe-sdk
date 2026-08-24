<?php
declare(strict_types=1);

// Stripe SDK utility: result_headers

class StripeResultHeaders
{
    public static function call(StripeContext $ctx): ?StripeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
