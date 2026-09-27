import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Invoice, InvoiceLoadMatch, InvoiceListMatch, InvoiceCreateData, InvoiceRemoveMatch } from '../StripeTypes';
declare class InvoiceEntity extends StripeEntityBase<Invoice> {
    constructor(client: StripeSDK, entopts: any);
    make(this: InvoiceEntity): InvoiceEntity;
    load(this: any, reqmatch?: InvoiceLoadMatch, ctrl?: Control): Promise<InvoiceEntity>;
    list(this: any, reqmatch?: InvoiceListMatch, ctrl?: Control): Promise<InvoiceEntity[]>;
    create(this: any, reqdata?: InvoiceCreateData, ctrl?: Control): Promise<InvoiceEntity>;
    remove(this: any, reqmatch?: InvoiceRemoveMatch, ctrl?: Control): Promise<InvoiceEntity>;
}
export { InvoiceEntity };
