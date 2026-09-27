import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { PhysicalBundle, PhysicalBundleLoadMatch, PhysicalBundleListMatch } from '../StripeTypes';
declare class PhysicalBundleEntity extends StripeEntityBase<PhysicalBundle> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PhysicalBundleEntity): PhysicalBundleEntity;
    load(this: any, reqmatch?: PhysicalBundleLoadMatch, ctrl?: Control): Promise<PhysicalBundleEntity>;
    list(this: any, reqmatch?: PhysicalBundleListMatch, ctrl?: Control): Promise<PhysicalBundleEntity[]>;
}
export { PhysicalBundleEntity };
