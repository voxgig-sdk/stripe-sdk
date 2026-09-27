import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Coupon, CouponLoadMatch, CouponListMatch, CouponCreateData } from '../StripeTypes';
declare class CouponEntity extends StripeEntityBase<Coupon> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CouponEntity): CouponEntity;
    load(this: any, reqmatch?: CouponLoadMatch, ctrl?: Control): Promise<CouponEntity>;
    list(this: any, reqmatch?: CouponListMatch, ctrl?: Control): Promise<CouponEntity[]>;
    create(this: any, reqdata?: CouponCreateData, ctrl?: Control): Promise<CouponEntity>;
}
export { CouponEntity };
