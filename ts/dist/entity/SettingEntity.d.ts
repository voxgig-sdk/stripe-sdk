import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Setting, SettingLoadMatch, SettingCreateData } from '../StripeTypes';
declare class SettingEntity extends StripeEntityBase<Setting> {
    constructor(client: StripeSDK, entopts: any);
    make(this: SettingEntity): SettingEntity;
    load(this: any, reqmatch?: SettingLoadMatch, ctrl?: Control): Promise<SettingEntity>;
    create(this: any, reqdata?: SettingCreateData, ctrl?: Control): Promise<SettingEntity>;
}
export { SettingEntity };
