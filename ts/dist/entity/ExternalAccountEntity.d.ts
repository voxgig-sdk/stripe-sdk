import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ExternalAccount, ExternalAccountLoadMatch, ExternalAccountListMatch, ExternalAccountCreateData } from '../StripeTypes';
declare class ExternalAccountEntity extends StripeEntityBase<ExternalAccount> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ExternalAccountEntity): ExternalAccountEntity;
    load(this: any, reqmatch?: ExternalAccountLoadMatch, ctrl?: Control): Promise<ExternalAccountEntity>;
    list(this: any, reqmatch?: ExternalAccountListMatch, ctrl?: Control): Promise<ExternalAccountEntity[]>;
    create(this: any, reqdata?: ExternalAccountCreateData, ctrl?: Control): Promise<ExternalAccountEntity>;
}
export { ExternalAccountEntity };
