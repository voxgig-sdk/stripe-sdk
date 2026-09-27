import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Authorization, AuthorizationLoadMatch, AuthorizationListMatch, AuthorizationCreateData } from '../StripeTypes';
declare class AuthorizationEntity extends StripeEntityBase<Authorization> {
    constructor(client: StripeSDK, entopts: any);
    make(this: AuthorizationEntity): AuthorizationEntity;
    load(this: any, reqmatch?: AuthorizationLoadMatch, ctrl?: Control): Promise<AuthorizationEntity>;
    list(this: any, reqmatch?: AuthorizationListMatch, ctrl?: Control): Promise<AuthorizationEntity[]>;
    create(this: any, reqdata?: AuthorizationCreateData, ctrl?: Control): Promise<AuthorizationEntity>;
}
export { AuthorizationEntity };
