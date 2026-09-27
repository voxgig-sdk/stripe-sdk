import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { TransactionEntry, TransactionEntryLoadMatch, TransactionEntryListMatch } from '../StripeTypes';
declare class TransactionEntryEntity extends StripeEntityBase<TransactionEntry> {
    constructor(client: StripeSDK, entopts: any);
    make(this: TransactionEntryEntity): TransactionEntryEntity;
    load(this: any, reqmatch?: TransactionEntryLoadMatch, ctrl?: Control): Promise<TransactionEntryEntity>;
    list(this: any, reqmatch?: TransactionEntryListMatch, ctrl?: Control): Promise<TransactionEntryEntity[]>;
}
export { TransactionEntryEntity };
