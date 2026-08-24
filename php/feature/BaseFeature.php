<?php
declare(strict_types=1);

// Stripe SDK base feature

class StripeBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(StripeContext $ctx, array $options): void {}
    public function PostConstruct(StripeContext $ctx): void {}
    public function PostConstructEntity(StripeContext $ctx): void {}
    public function SetData(StripeContext $ctx): void {}
    public function GetData(StripeContext $ctx): void {}
    public function GetMatch(StripeContext $ctx): void {}
    public function SetMatch(StripeContext $ctx): void {}
    public function PrePoint(StripeContext $ctx): void {}
    public function PreSpec(StripeContext $ctx): void {}
    public function PreRequest(StripeContext $ctx): void {}
    public function PreResponse(StripeContext $ctx): void {}
    public function PreResult(StripeContext $ctx): void {}
    public function PreDone(StripeContext $ctx): void {}
    public function PreUnexpected(StripeContext $ctx): void {}
}
