import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ProductFeature, ProductFeatureLoadMatch, ProductFeatureCreateData } from '../StripeTypes';
declare class ProductFeatureEntity extends StripeEntityBase<ProductFeature> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ProductFeatureEntity): ProductFeatureEntity;
    load(this: any, reqmatch?: ProductFeatureLoadMatch, ctrl?: Control): Promise<ProductFeatureEntity>;
    create(this: any, reqdata?: ProductFeatureCreateData, ctrl?: Control): Promise<ProductFeatureEntity>;
}
export { ProductFeatureEntity };
