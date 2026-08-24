# Stripe SDK utility: make_context

from projectname_sdk.core.context import StripeContext


def make_context_util(ctxmap, basectx):
    return StripeContext(ctxmap, basectx)
