import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { CashBalanceTransaction, CashBalanceTransactionLoadMatch, CashBalanceTransactionListMatch } from '../StripeTypes';
declare class CashBalanceTransactionEntity extends StripeEntityBase<CashBalanceTransaction> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CashBalanceTransactionEntity): CashBalanceTransactionEntity;
    load(this: any, reqmatch?: CashBalanceTransactionLoadMatch, ctrl?: Control): Promise<CashBalanceTransactionEntity>;
    list(this: any, reqmatch?: CashBalanceTransactionListMatch, ctrl?: Control): Promise<CashBalanceTransactionEntity[]>;
}
export { CashBalanceTransactionEntity };
