import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Account, AccountLoadMatch, AccountListMatch, AccountCreateData } from '../StripeTypes';
declare class AccountEntity extends StripeEntityBase<Account> {
    constructor(client: StripeSDK, entopts: any);
    make(this: AccountEntity): AccountEntity;
    load(this: any, reqmatch?: AccountLoadMatch, ctrl?: Control): Promise<AccountEntity>;
    list(this: any, reqmatch?: AccountListMatch, ctrl?: Control): Promise<AccountEntity[]>;
    create(this: any, reqdata?: AccountCreateData, ctrl?: Control): Promise<AccountEntity>;
}
export { AccountEntity };
