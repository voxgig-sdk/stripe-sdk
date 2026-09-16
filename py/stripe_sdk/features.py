# Stripe SDK feature factory

from stripe_sdk.feature.base_feature import StripeBaseFeature
from stripe_sdk.feature.debug_feature import StripeDebugFeature
from stripe_sdk.feature.idempotency_feature import StripeIdempotencyFeature
from stripe_sdk.feature.metrics_feature import StripeMetricsFeature
from stripe_sdk.feature.paging_feature import StripePagingFeature
from stripe_sdk.feature.ratelimit_feature import StripeRatelimitFeature
from stripe_sdk.feature.retry_feature import StripeRetryFeature
from stripe_sdk.feature.test_feature import StripeTestFeature
from stripe_sdk.feature.timeout_feature import StripeTimeoutFeature


_FEATURES = {
    "base": lambda: StripeBaseFeature(),
    "debug": lambda: StripeDebugFeature(),
    "idempotency": lambda: StripeIdempotencyFeature(),
    "metrics": lambda: StripeMetricsFeature(),
    "paging": lambda: StripePagingFeature(),
    "ratelimit": lambda: StripeRatelimitFeature(),
    "retry": lambda: StripeRetryFeature(),
    "test": lambda: StripeTestFeature(),
    "timeout": lambda: StripeTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
