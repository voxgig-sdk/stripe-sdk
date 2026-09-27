import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { InvoiceRenderingTemplate, InvoiceRenderingTemplateLoadMatch, InvoiceRenderingTemplateListMatch, InvoiceRenderingTemplateCreateData } from '../StripeTypes';
declare class InvoiceRenderingTemplateEntity extends StripeEntityBase<InvoiceRenderingTemplate> {
    constructor(client: StripeSDK, entopts: any);
    make(this: InvoiceRenderingTemplateEntity): InvoiceRenderingTemplateEntity;
    load(this: any, reqmatch?: InvoiceRenderingTemplateLoadMatch, ctrl?: Control): Promise<InvoiceRenderingTemplateEntity>;
    list(this: any, reqmatch?: InvoiceRenderingTemplateListMatch, ctrl?: Control): Promise<InvoiceRenderingTemplateEntity[]>;
    create(this: any, reqdata?: InvoiceRenderingTemplateCreateData, ctrl?: Control): Promise<InvoiceRenderingTemplateEntity>;
}
export { InvoiceRenderingTemplateEntity };
