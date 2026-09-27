import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { AccountLink, AccountLinkCreateData } from '../StripeTypes';
declare class AccountLinkEntity extends StripeEntityBase<AccountLink> {
    constructor(client: StripeSDK, entopts: any);
    make(this: AccountLinkEntity): AccountLinkEntity;
    create(this: any, reqdata?: AccountLinkCreateData, ctrl?: Control): Promise<AccountLinkEntity>;
}
export { AccountLinkEntity };
