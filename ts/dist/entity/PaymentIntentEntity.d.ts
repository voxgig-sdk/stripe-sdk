import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { PaymentIntent, PaymentIntentLoadMatch, PaymentIntentListMatch, PaymentIntentCreateData } from '../StripeTypes';
declare class PaymentIntentEntity extends StripeEntityBase<PaymentIntent> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PaymentIntentEntity): PaymentIntentEntity;
    load(this: any, reqmatch?: PaymentIntentLoadMatch, ctrl?: Control): Promise<PaymentIntentEntity>;
    list(this: any, reqmatch?: PaymentIntentListMatch, ctrl?: Control): Promise<PaymentIntentEntity[]>;
    create(this: any, reqdata?: PaymentIntentCreateData, ctrl?: Control): Promise<PaymentIntentEntity>;
}
export { PaymentIntentEntity };
