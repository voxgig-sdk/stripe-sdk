import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ReceivedCredit, ReceivedCreditLoadMatch, ReceivedCreditListMatch, ReceivedCreditCreateData } from '../StripeTypes';
declare class ReceivedCreditEntity extends StripeEntityBase<ReceivedCredit> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ReceivedCreditEntity): ReceivedCreditEntity;
    load(this: any, reqmatch?: ReceivedCreditLoadMatch, ctrl?: Control): Promise<ReceivedCreditEntity>;
    list(this: any, reqmatch?: ReceivedCreditListMatch, ctrl?: Control): Promise<ReceivedCreditEntity[]>;
    create(this: any, reqdata?: ReceivedCreditCreateData, ctrl?: Control): Promise<ReceivedCreditEntity>;
}
export { ReceivedCreditEntity };
