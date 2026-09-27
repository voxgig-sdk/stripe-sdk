import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { BalanceTransaction, BalanceTransactionLoadMatch, BalanceTransactionListMatch } from '../StripeTypes';
declare class BalanceTransactionEntity extends StripeEntityBase<BalanceTransaction> {
    constructor(client: StripeSDK, entopts: any);
    make(this: BalanceTransactionEntity): BalanceTransactionEntity;
    load(this: any, reqmatch?: BalanceTransactionLoadMatch, ctrl?: Control): Promise<BalanceTransactionEntity>;
    list(this: any, reqmatch?: BalanceTransactionListMatch, ctrl?: Control): Promise<BalanceTransactionEntity[]>;
}
export { BalanceTransactionEntity };
