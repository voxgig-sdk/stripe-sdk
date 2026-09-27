import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { DeletedApplePayDomain, DeletedApplePayDomainRemoveMatch } from '../StripeTypes';
declare class DeletedApplePayDomainEntity extends StripeEntityBase<DeletedApplePayDomain> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DeletedApplePayDomainEntity): DeletedApplePayDomainEntity;
    remove(this: any, reqmatch?: DeletedApplePayDomainRemoveMatch, ctrl?: Control): Promise<DeletedApplePayDomainEntity>;
}
export { DeletedApplePayDomainEntity };
