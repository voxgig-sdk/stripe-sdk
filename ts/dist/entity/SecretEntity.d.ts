import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Secret, SecretLoadMatch, SecretListMatch, SecretCreateData } from '../StripeTypes';
declare class SecretEntity extends StripeEntityBase<Secret> {
    constructor(client: StripeSDK, entopts: any);
    make(this: SecretEntity): SecretEntity;
    load(this: any, reqmatch?: SecretLoadMatch, ctrl?: Control): Promise<SecretEntity>;
    list(this: any, reqmatch?: SecretListMatch, ctrl?: Control): Promise<SecretEntity[]>;
    create(this: any, reqdata?: SecretCreateData, ctrl?: Control): Promise<SecretEntity>;
}
export { SecretEntity };
