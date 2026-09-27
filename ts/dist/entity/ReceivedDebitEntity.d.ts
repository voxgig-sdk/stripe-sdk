import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ReceivedDebit, ReceivedDebitLoadMatch, ReceivedDebitListMatch, ReceivedDebitCreateData } from '../StripeTypes';
declare class ReceivedDebitEntity extends StripeEntityBase<ReceivedDebit> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ReceivedDebitEntity): ReceivedDebitEntity;
    load(this: any, reqmatch?: ReceivedDebitLoadMatch, ctrl?: Control): Promise<ReceivedDebitEntity>;
    list(this: any, reqmatch?: ReceivedDebitListMatch, ctrl?: Control): Promise<ReceivedDebitEntity[]>;
    create(this: any, reqdata?: ReceivedDebitCreateData, ctrl?: Control): Promise<ReceivedDebitEntity>;
}
export { ReceivedDebitEntity };
