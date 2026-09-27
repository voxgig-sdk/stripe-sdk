import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { DeletedProductFeature, DeletedProductFeatureRemoveMatch } from '../StripeTypes';
declare class DeletedProductFeatureEntity extends StripeEntityBase<DeletedProductFeature> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DeletedProductFeatureEntity): DeletedProductFeatureEntity;
    remove(this: any, reqmatch?: DeletedProductFeatureRemoveMatch, ctrl?: Control): Promise<DeletedProductFeatureEntity>;
}
export { DeletedProductFeatureEntity };
