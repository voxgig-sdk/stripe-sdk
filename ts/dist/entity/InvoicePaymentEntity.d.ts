import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { InvoicePayment, InvoicePaymentLoadMatch, InvoicePaymentListMatch } from '../StripeTypes';
declare class InvoicePaymentEntity extends StripeEntityBase<InvoicePayment> {
    constructor(client: StripeSDK, entopts: any);
    make(this: InvoicePaymentEntity): InvoicePaymentEntity;
    load(this: any, reqmatch?: InvoicePaymentLoadMatch, ctrl?: Control): Promise<InvoicePaymentEntity>;
    list(this: any, reqmatch?: InvoicePaymentListMatch, ctrl?: Control): Promise<InvoicePaymentEntity[]>;
}
export { InvoicePaymentEntity };
