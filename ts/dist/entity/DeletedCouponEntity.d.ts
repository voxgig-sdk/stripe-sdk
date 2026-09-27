import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { DeletedCoupon, DeletedCouponRemoveMatch } from '../StripeTypes';
declare class DeletedCouponEntity extends StripeEntityBase<DeletedCoupon> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DeletedCouponEntity): DeletedCouponEntity;
    remove(this: any, reqmatch?: DeletedCouponRemoveMatch, ctrl?: Control): Promise<DeletedCouponEntity>;
}
export { DeletedCouponEntity };
