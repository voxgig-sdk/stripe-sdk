import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ApplePayDomain, ApplePayDomainLoadMatch, ApplePayDomainCreateData } from '../StripeTypes';
declare class ApplePayDomainEntity extends StripeEntityBase<ApplePayDomain> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ApplePayDomainEntity): ApplePayDomainEntity;
    load(this: any, reqmatch?: ApplePayDomainLoadMatch, ctrl?: Control): Promise<ApplePayDomainEntity>;
    create(this: any, reqdata?: ApplePayDomainCreateData, ctrl?: Control): Promise<ApplePayDomainEntity>;
}
export { ApplePayDomainEntity };
