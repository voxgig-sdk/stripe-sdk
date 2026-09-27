import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Customer, CustomerLoadMatch, CustomerListMatch, CustomerCreateData, CustomerRemoveMatch } from '../StripeTypes';
declare class CustomerEntity extends StripeEntityBase<Customer> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CustomerEntity): CustomerEntity;
    load(this: any, reqmatch?: CustomerLoadMatch, ctrl?: Control): Promise<CustomerEntity>;
    list(this: any, reqmatch?: CustomerListMatch, ctrl?: Control): Promise<CustomerEntity[]>;
    create(this: any, reqdata?: CustomerCreateData, ctrl?: Control): Promise<CustomerEntity>;
    remove(this: any, reqmatch?: CustomerRemoveMatch, ctrl?: Control): Promise<CustomerEntity>;
}
export { CustomerEntity };
