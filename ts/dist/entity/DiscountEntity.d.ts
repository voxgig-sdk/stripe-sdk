import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Discount, DiscountLoadMatch, DiscountRemoveMatch } from '../StripeTypes';
declare class DiscountEntity extends StripeEntityBase<Discount> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DiscountEntity): DiscountEntity;
    load(this: any, reqmatch?: DiscountLoadMatch, ctrl?: Control): Promise<DiscountEntity>;
    remove(this: any, reqmatch?: DiscountRemoveMatch, ctrl?: Control): Promise<DiscountEntity>;
}
export { DiscountEntity };
