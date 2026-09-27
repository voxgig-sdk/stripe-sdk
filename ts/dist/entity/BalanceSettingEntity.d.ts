import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { BalanceSetting, BalanceSettingLoadMatch, BalanceSettingCreateData } from '../StripeTypes';
declare class BalanceSettingEntity extends StripeEntityBase<BalanceSetting> {
    constructor(client: StripeSDK, entopts: any);
    make(this: BalanceSettingEntity): BalanceSettingEntity;
    load(this: any, reqmatch?: BalanceSettingLoadMatch, ctrl?: Control): Promise<BalanceSettingEntity>;
    create(this: any, reqdata?: BalanceSettingCreateData, ctrl?: Control): Promise<BalanceSettingEntity>;
}
export { BalanceSettingEntity };
