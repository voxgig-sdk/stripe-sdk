import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ActiveEntitlement, ActiveEntitlementLoadMatch, ActiveEntitlementListMatch } from '../StripeTypes';
declare class ActiveEntitlementEntity extends StripeEntityBase<ActiveEntitlement> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ActiveEntitlementEntity): ActiveEntitlementEntity;
    load(this: any, reqmatch?: ActiveEntitlementLoadMatch, ctrl?: Control): Promise<ActiveEntitlementEntity>;
    list(this: any, reqmatch?: ActiveEntitlementListMatch, ctrl?: Control): Promise<ActiveEntitlementEntity[]>;
}
export { ActiveEntitlementEntity };
