import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Product, ProductLoadMatch, ProductListMatch, ProductCreateData, ProductRemoveMatch } from '../StripeTypes';
declare class ProductEntity extends StripeEntityBase<Product> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ProductEntity): ProductEntity;
    load(this: any, reqmatch?: ProductLoadMatch, ctrl?: Control): Promise<ProductEntity>;
    list(this: any, reqmatch?: ProductListMatch, ctrl?: Control): Promise<ProductEntity[]>;
    create(this: any, reqdata?: ProductCreateData, ctrl?: Control): Promise<ProductEntity>;
    remove(this: any, reqmatch?: ProductRemoveMatch, ctrl?: Control): Promise<ProductEntity>;
}
export { ProductEntity };
