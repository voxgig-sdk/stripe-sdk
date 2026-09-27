import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Transaction, TransactionLoadMatch, TransactionListMatch, TransactionCreateData } from '../StripeTypes';
declare class TransactionEntity extends StripeEntityBase<Transaction> {
    constructor(client: StripeSDK, entopts: any);
    make(this: TransactionEntity): TransactionEntity;
    load(this: any, reqmatch?: TransactionLoadMatch, ctrl?: Control): Promise<TransactionEntity>;
    list(this: any, reqmatch?: TransactionListMatch, ctrl?: Control): Promise<TransactionEntity[]>;
    create(this: any, reqdata?: TransactionCreateData, ctrl?: Control): Promise<TransactionEntity>;
}
export { TransactionEntity };
