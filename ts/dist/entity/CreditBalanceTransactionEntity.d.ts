import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { CreditBalanceTransaction, CreditBalanceTransactionLoadMatch, CreditBalanceTransactionListMatch } from '../StripeTypes';
declare class CreditBalanceTransactionEntity extends StripeEntityBase<CreditBalanceTransaction> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CreditBalanceTransactionEntity): CreditBalanceTransactionEntity;
    load(this: any, reqmatch?: CreditBalanceTransactionLoadMatch, ctrl?: Control): Promise<CreditBalanceTransactionEntity>;
    list(this: any, reqmatch?: CreditBalanceTransactionListMatch, ctrl?: Control): Promise<CreditBalanceTransactionEntity[]>;
}
export { CreditBalanceTransactionEntity };
