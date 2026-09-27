import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { PaymentIntentAmountDetailsLineItem, PaymentIntentAmountDetailsLineItemListMatch } from '../StripeTypes';
declare class PaymentIntentAmountDetailsLineItemEntity extends StripeEntityBase<PaymentIntentAmountDetailsLineItem> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PaymentIntentAmountDetailsLineItemEntity): PaymentIntentAmountDetailsLineItemEntity;
    list(this: any, reqmatch?: PaymentIntentAmountDetailsLineItemListMatch, ctrl?: Control): Promise<PaymentIntentAmountDetailsLineItemEntity[]>;
}
export { PaymentIntentAmountDetailsLineItemEntity };
