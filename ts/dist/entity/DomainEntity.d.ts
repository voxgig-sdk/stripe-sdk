import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Domain, DomainListMatch } from '../StripeTypes';
declare class DomainEntity extends StripeEntityBase<Domain> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DomainEntity): DomainEntity;
    list(this: any, reqmatch?: DomainListMatch, ctrl?: Control): Promise<DomainEntity[]>;
}
export { DomainEntity };
