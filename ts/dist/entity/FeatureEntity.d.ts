import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Feature, FeatureLoadMatch, FeatureListMatch, FeatureCreateData } from '../StripeTypes';
declare class FeatureEntity extends StripeEntityBase<Feature> {
    constructor(client: StripeSDK, entopts: any);
    make(this: FeatureEntity): FeatureEntity;
    load(this: any, reqmatch?: FeatureLoadMatch, ctrl?: Control): Promise<FeatureEntity>;
    list(this: any, reqmatch?: FeatureListMatch, ctrl?: Control): Promise<FeatureEntity[]>;
    create(this: any, reqdata?: FeatureCreateData, ctrl?: Control): Promise<FeatureEntity>;
}
export { FeatureEntity };
