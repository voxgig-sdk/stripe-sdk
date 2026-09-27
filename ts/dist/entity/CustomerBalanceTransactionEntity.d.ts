import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { CustomerBalanceTransaction, CustomerBalanceTransactionLoadMatch, CustomerBalanceTransactionCreateData } from '../StripeTypes';
declare class CustomerBalanceTransactionEntity extends StripeEntityBase<CustomerBalanceTransaction> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CustomerBalanceTransactionEntity): CustomerBalanceTransactionEntity;
    load(this: any, reqmatch?: CustomerBalanceTransactionLoadMatch, ctrl?: Control): Promise<CustomerBalanceTransactionEntity>;
    create(this: any, reqdata?: CustomerBalanceTransactionCreateData, ctrl?: Control): Promise<CustomerBalanceTransactionEntity>;
}
export { CustomerBalanceTransactionEntity };
