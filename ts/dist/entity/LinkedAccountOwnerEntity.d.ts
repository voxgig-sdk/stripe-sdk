import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { LinkedAccountOwner, LinkedAccountOwnerListMatch } from '../StripeTypes';
declare class LinkedAccountOwnerEntity extends StripeEntityBase<LinkedAccountOwner> {
    constructor(client: StripeSDK, entopts: any);
    make(this: LinkedAccountOwnerEntity): LinkedAccountOwnerEntity;
    list(this: any, reqmatch?: LinkedAccountOwnerListMatch, ctrl?: Control): Promise<LinkedAccountOwnerEntity[]>;
}
export { LinkedAccountOwnerEntity };
