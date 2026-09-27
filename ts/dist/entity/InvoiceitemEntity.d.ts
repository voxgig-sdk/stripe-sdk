import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Invoiceitem, InvoiceitemLoadMatch, InvoiceitemListMatch, InvoiceitemCreateData } from '../StripeTypes';
declare class InvoiceitemEntity extends StripeEntityBase<Invoiceitem> {
    constructor(client: StripeSDK, entopts: any);
    make(this: InvoiceitemEntity): InvoiceitemEntity;
    load(this: any, reqmatch?: InvoiceitemLoadMatch, ctrl?: Control): Promise<InvoiceitemEntity>;
    list(this: any, reqmatch?: InvoiceitemListMatch, ctrl?: Control): Promise<InvoiceitemEntity[]>;
    create(this: any, reqdata?: InvoiceitemCreateData, ctrl?: Control): Promise<InvoiceitemEntity>;
}
export { InvoiceitemEntity };
