import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { FinancialAccountFeature, FinancialAccountFeatureLoadMatch, FinancialAccountFeatureCreateData } from '../StripeTypes';
declare class FinancialAccountFeatureEntity extends StripeEntityBase<FinancialAccountFeature> {
    constructor(client: StripeSDK, entopts: any);
    make(this: FinancialAccountFeatureEntity): FinancialAccountFeatureEntity;
    load(this: any, reqmatch?: FinancialAccountFeatureLoadMatch, ctrl?: Control): Promise<FinancialAccountFeatureEntity>;
    create(this: any, reqdata?: FinancialAccountFeatureCreateData, ctrl?: Control): Promise<FinancialAccountFeatureEntity>;
}
export { FinancialAccountFeatureEntity };
