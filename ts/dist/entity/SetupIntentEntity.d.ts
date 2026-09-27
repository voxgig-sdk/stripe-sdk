import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { SetupIntent, SetupIntentLoadMatch, SetupIntentListMatch, SetupIntentCreateData } from '../StripeTypes';
declare class SetupIntentEntity extends StripeEntityBase<SetupIntent> {
    constructor(client: StripeSDK, entopts: any);
    make(this: SetupIntentEntity): SetupIntentEntity;
    load(this: any, reqmatch?: SetupIntentLoadMatch, ctrl?: Control): Promise<SetupIntentEntity>;
    list(this: any, reqmatch?: SetupIntentListMatch, ctrl?: Control): Promise<SetupIntentEntity[]>;
    create(this: any, reqdata?: SetupIntentCreateData, ctrl?: Control): Promise<SetupIntentEntity>;
}
export { SetupIntentEntity };
