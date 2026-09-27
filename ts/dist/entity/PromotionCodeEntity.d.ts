import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { PromotionCode, PromotionCodeLoadMatch, PromotionCodeListMatch, PromotionCodeCreateData } from '../StripeTypes';
declare class PromotionCodeEntity extends StripeEntityBase<PromotionCode> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PromotionCodeEntity): PromotionCodeEntity;
    load(this: any, reqmatch?: PromotionCodeLoadMatch, ctrl?: Control): Promise<PromotionCodeEntity>;
    list(this: any, reqmatch?: PromotionCodeListMatch, ctrl?: Control): Promise<PromotionCodeEntity[]>;
    create(this: any, reqdata?: PromotionCodeCreateData, ctrl?: Control): Promise<PromotionCodeEntity>;
}
export { PromotionCodeEntity };
