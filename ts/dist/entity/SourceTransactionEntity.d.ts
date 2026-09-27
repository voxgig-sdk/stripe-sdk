import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { SourceTransaction, SourceTransactionLoadMatch, SourceTransactionListMatch } from '../StripeTypes';
declare class SourceTransactionEntity extends StripeEntityBase<SourceTransaction> {
    constructor(client: StripeSDK, entopts: any);
    make(this: SourceTransactionEntity): SourceTransactionEntity;
    load(this: any, reqmatch?: SourceTransactionLoadMatch, ctrl?: Control): Promise<SourceTransactionEntity>;
    list(this: any, reqmatch?: SourceTransactionListMatch, ctrl?: Control): Promise<SourceTransactionEntity[]>;
}
export { SourceTransactionEntity };
