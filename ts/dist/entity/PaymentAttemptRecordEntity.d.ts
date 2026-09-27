import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { PaymentAttemptRecord, PaymentAttemptRecordLoadMatch, PaymentAttemptRecordListMatch } from '../StripeTypes';
declare class PaymentAttemptRecordEntity extends StripeEntityBase<PaymentAttemptRecord> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PaymentAttemptRecordEntity): PaymentAttemptRecordEntity;
    load(this: any, reqmatch?: PaymentAttemptRecordLoadMatch, ctrl?: Control): Promise<PaymentAttemptRecordEntity>;
    list(this: any, reqmatch?: PaymentAttemptRecordListMatch, ctrl?: Control): Promise<PaymentAttemptRecordEntity[]>;
}
export { PaymentAttemptRecordEntity };
