import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Registration, RegistrationLoadMatch, RegistrationListMatch, RegistrationCreateData } from '../StripeTypes';
declare class RegistrationEntity extends StripeEntityBase<Registration> {
    constructor(client: StripeSDK, entopts: any);
    make(this: RegistrationEntity): RegistrationEntity;
    load(this: any, reqmatch?: RegistrationLoadMatch, ctrl?: Control): Promise<RegistrationEntity>;
    list(this: any, reqmatch?: RegistrationListMatch, ctrl?: Control): Promise<RegistrationEntity[]>;
    create(this: any, reqdata?: RegistrationCreateData, ctrl?: Control): Promise<RegistrationEntity>;
}
export { RegistrationEntity };
