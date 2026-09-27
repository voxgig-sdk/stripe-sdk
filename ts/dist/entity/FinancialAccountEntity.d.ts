import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { FinancialAccount, FinancialAccountLoadMatch, FinancialAccountListMatch, FinancialAccountCreateData } from '../StripeTypes';
declare class FinancialAccountEntity extends StripeEntityBase<FinancialAccount> {
    constructor(client: StripeSDK, entopts: any);
    make(this: FinancialAccountEntity): FinancialAccountEntity;
    load(this: any, reqmatch?: FinancialAccountLoadMatch, ctrl?: Control): Promise<FinancialAccountEntity>;
    list(this: any, reqmatch?: FinancialAccountListMatch, ctrl?: Control): Promise<FinancialAccountEntity[]>;
    create(this: any, reqdata?: FinancialAccountCreateData, ctrl?: Control): Promise<FinancialAccountEntity>;
}
export { FinancialAccountEntity };
