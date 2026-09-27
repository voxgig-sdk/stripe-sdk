import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { CreditGrant, CreditGrantLoadMatch, CreditGrantListMatch, CreditGrantCreateData } from '../StripeTypes';
declare class CreditGrantEntity extends StripeEntityBase<CreditGrant> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CreditGrantEntity): CreditGrantEntity;
    load(this: any, reqmatch?: CreditGrantLoadMatch, ctrl?: Control): Promise<CreditGrantEntity>;
    list(this: any, reqmatch?: CreditGrantListMatch, ctrl?: Control): Promise<CreditGrantEntity[]>;
    create(this: any, reqdata?: CreditGrantCreateData, ctrl?: Control): Promise<CreditGrantEntity>;
}
export { CreditGrantEntity };
