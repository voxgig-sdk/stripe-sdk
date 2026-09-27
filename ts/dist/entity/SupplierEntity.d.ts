import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Supplier, SupplierLoadMatch, SupplierListMatch } from '../StripeTypes';
declare class SupplierEntity extends StripeEntityBase<Supplier> {
    constructor(client: StripeSDK, entopts: any);
    make(this: SupplierEntity): SupplierEntity;
    load(this: any, reqmatch?: SupplierLoadMatch, ctrl?: Control): Promise<SupplierEntity>;
    list(this: any, reqmatch?: SupplierListMatch, ctrl?: Control): Promise<SupplierEntity[]>;
}
export { SupplierEntity };
