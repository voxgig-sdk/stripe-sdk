import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { AccountOwner, AccountOwnerListMatch } from '../StripeTypes';
declare class AccountOwnerEntity extends StripeEntityBase<AccountOwner> {
    constructor(client: StripeSDK, entopts: any);
    make(this: AccountOwnerEntity): AccountOwnerEntity;
    list(this: any, reqmatch?: AccountOwnerListMatch, ctrl?: Control): Promise<AccountOwnerEntity[]>;
}
export { AccountOwnerEntity };
