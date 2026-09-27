import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { PaymentRecord, PaymentRecordLoadMatch, PaymentRecordListMatch, PaymentRecordCreateData } from '../StripeTypes';
declare class PaymentRecordEntity extends StripeEntityBase<PaymentRecord> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PaymentRecordEntity): PaymentRecordEntity;
    load(this: any, reqmatch?: PaymentRecordLoadMatch, ctrl?: Control): Promise<PaymentRecordEntity>;
    list(this: any, reqmatch?: PaymentRecordListMatch, ctrl?: Control): Promise<PaymentRecordEntity[]>;
    create(this: any, reqdata?: PaymentRecordCreateData, ctrl?: Control): Promise<PaymentRecordEntity>;
}
export { PaymentRecordEntity };
