import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { DeletedInvoiceitem, DeletedInvoiceitemRemoveMatch } from '../StripeTypes';
declare class DeletedInvoiceitemEntity extends StripeEntityBase<DeletedInvoiceitem> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DeletedInvoiceitemEntity): DeletedInvoiceitemEntity;
    remove(this: any, reqmatch?: DeletedInvoiceitemRemoveMatch, ctrl?: Control): Promise<DeletedInvoiceitemEntity>;
}
export { DeletedInvoiceitemEntity };
