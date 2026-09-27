import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Refund, RefundLoadMatch, RefundListMatch, RefundCreateData } from '../StripeTypes';
declare class RefundEntity extends StripeEntityBase<Refund> {
    constructor(client: StripeSDK, entopts: any);
    make(this: RefundEntity): RefundEntity;
    load(this: any, reqmatch?: RefundLoadMatch, ctrl?: Control): Promise<RefundEntity>;
    list(this: any, reqmatch?: RefundListMatch, ctrl?: Control): Promise<RefundEntity[]>;
    create(this: any, reqdata?: RefundCreateData, ctrl?: Control): Promise<RefundEntity>;
}
export { RefundEntity };
