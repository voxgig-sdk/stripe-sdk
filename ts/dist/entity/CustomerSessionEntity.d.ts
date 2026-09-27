import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { CustomerSession, CustomerSessionCreateData } from '../StripeTypes';
declare class CustomerSessionEntity extends StripeEntityBase<CustomerSession> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CustomerSessionEntity): CustomerSessionEntity;
    create(this: any, reqdata?: CustomerSessionCreateData, ctrl?: Control): Promise<CustomerSessionEntity>;
}
export { CustomerSessionEntity };
