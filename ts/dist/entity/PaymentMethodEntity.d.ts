import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { PaymentMethod, PaymentMethodLoadMatch, PaymentMethodListMatch, PaymentMethodCreateData } from '../StripeTypes';
declare class PaymentMethodEntity extends StripeEntityBase<PaymentMethod> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PaymentMethodEntity): PaymentMethodEntity;
    load(this: any, reqmatch?: PaymentMethodLoadMatch, ctrl?: Control): Promise<PaymentMethodEntity>;
    list(this: any, reqmatch?: PaymentMethodListMatch, ctrl?: Control): Promise<PaymentMethodEntity[]>;
    create(this: any, reqdata?: PaymentMethodCreateData, ctrl?: Control): Promise<PaymentMethodEntity>;
}
export { PaymentMethodEntity };
