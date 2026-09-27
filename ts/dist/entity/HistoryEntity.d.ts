import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { History, HistoryListMatch } from '../StripeTypes';
declare class HistoryEntity extends StripeEntityBase<History> {
    constructor(client: StripeSDK, entopts: any);
    make(this: HistoryEntity): HistoryEntity;
    list(this: any, reqmatch?: HistoryListMatch, ctrl?: Control): Promise<HistoryEntity[]>;
}
export { HistoryEntity };
