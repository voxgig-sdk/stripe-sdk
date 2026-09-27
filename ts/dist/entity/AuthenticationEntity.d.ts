import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Authentication, AuthenticationLoadMatch, AuthenticationListMatch, AuthenticationCreateData } from '../StripeTypes';
declare class AuthenticationEntity extends StripeEntityBase<Authentication> {
    constructor(client: StripeSDK, entopts: any);
    make(this: AuthenticationEntity): AuthenticationEntity;
    load(this: any, reqmatch?: AuthenticationLoadMatch, ctrl?: Control): Promise<AuthenticationEntity>;
    list(this: any, reqmatch?: AuthenticationListMatch, ctrl?: Control): Promise<AuthenticationEntity[]>;
    create(this: any, reqdata?: AuthenticationCreateData, ctrl?: Control): Promise<AuthenticationEntity>;
}
export { AuthenticationEntity };
