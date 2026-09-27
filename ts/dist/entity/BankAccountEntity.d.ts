import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { BankAccount, BankAccountLoadMatch, BankAccountListMatch, BankAccountCreateData, BankAccountRemoveMatch } from '../StripeTypes';
declare class BankAccountEntity extends StripeEntityBase<BankAccount> {
    constructor(client: StripeSDK, entopts: any);
    make(this: BankAccountEntity): BankAccountEntity;
    load(this: any, reqmatch?: BankAccountLoadMatch, ctrl?: Control): Promise<BankAccountEntity>;
    list(this: any, reqmatch?: BankAccountListMatch, ctrl?: Control): Promise<BankAccountEntity[]>;
    create(this: any, reqdata?: BankAccountCreateData, ctrl?: Control): Promise<BankAccountEntity>;
    remove(this: any, reqmatch?: BankAccountRemoveMatch, ctrl?: Control): Promise<BankAccountEntity>;
}
export { BankAccountEntity };
