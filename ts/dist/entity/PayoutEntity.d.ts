import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Payout, PayoutLoadMatch, PayoutListMatch, PayoutCreateData } from '../StripeTypes';
declare class PayoutEntity extends StripeEntityBase<Payout> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PayoutEntity): PayoutEntity;
    load(this: any, reqmatch?: PayoutLoadMatch, ctrl?: Control): Promise<PayoutEntity>;
    list(this: any, reqmatch?: PayoutListMatch, ctrl?: Control): Promise<PayoutEntity[]>;
    create(this: any, reqdata?: PayoutCreateData, ctrl?: Control): Promise<PayoutEntity>;
}
export { PayoutEntity };
