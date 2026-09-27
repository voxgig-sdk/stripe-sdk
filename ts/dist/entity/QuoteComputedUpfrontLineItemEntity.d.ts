import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { QuoteComputedUpfrontLineItem, QuoteComputedUpfrontLineItemListMatch } from '../StripeTypes';
declare class QuoteComputedUpfrontLineItemEntity extends StripeEntityBase<QuoteComputedUpfrontLineItem> {
    constructor(client: StripeSDK, entopts: any);
    make(this: QuoteComputedUpfrontLineItemEntity): QuoteComputedUpfrontLineItemEntity;
    list(this: any, reqmatch?: QuoteComputedUpfrontLineItemListMatch, ctrl?: Control): Promise<QuoteComputedUpfrontLineItemEntity[]>;
}
export { QuoteComputedUpfrontLineItemEntity };
