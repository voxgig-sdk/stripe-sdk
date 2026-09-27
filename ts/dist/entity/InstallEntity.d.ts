import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Install, InstallLoadMatch, InstallListMatch, InstallCreateData } from '../StripeTypes';
declare class InstallEntity extends StripeEntityBase<Install> {
    constructor(client: StripeSDK, entopts: any);
    make(this: InstallEntity): InstallEntity;
    load(this: any, reqmatch?: InstallLoadMatch, ctrl?: Control): Promise<InstallEntity>;
    list(this: any, reqmatch?: InstallListMatch, ctrl?: Control): Promise<InstallEntity[]>;
    create(this: any, reqdata?: InstallCreateData, ctrl?: Control): Promise<InstallEntity>;
}
export { InstallEntity };
