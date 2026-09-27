import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { PaymentMethodDomain, PaymentMethodDomainLoadMatch, PaymentMethodDomainListMatch, PaymentMethodDomainCreateData } from '../StripeTypes';
declare class PaymentMethodDomainEntity extends StripeEntityBase<PaymentMethodDomain> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PaymentMethodDomainEntity): PaymentMethodDomainEntity;
    load(this: any, reqmatch?: PaymentMethodDomainLoadMatch, ctrl?: Control): Promise<PaymentMethodDomainEntity>;
    list(this: any, reqmatch?: PaymentMethodDomainListMatch, ctrl?: Control): Promise<PaymentMethodDomainEntity[]>;
    create(this: any, reqdata?: PaymentMethodDomainCreateData, ctrl?: Control): Promise<PaymentMethodDomainEntity>;
}
export { PaymentMethodDomainEntity };
