import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Association, AssociationListMatch } from '../StripeTypes';
declare class AssociationEntity extends StripeEntityBase<Association> {
    constructor(client: StripeSDK, entopts: any);
    make(this: AssociationEntity): AssociationEntity;
    list(this: any, reqmatch?: AssociationListMatch, ctrl?: Control): Promise<AssociationEntity[]>;
}
export { AssociationEntity };
