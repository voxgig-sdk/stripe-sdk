# Stripe SDK exists test

import pytest
from stripe_sdk import StripeSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = StripeSDK.test(None, None)
        assert testsdk is not None
