import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { SubscriptionSchedule, SubscriptionScheduleLoadMatch, SubscriptionScheduleListMatch, SubscriptionScheduleCreateData } from '../StripeTypes';
declare class SubscriptionScheduleEntity extends StripeEntityBase<SubscriptionSchedule> {
    constructor(client: StripeSDK, entopts: any);
    make(this: SubscriptionScheduleEntity): SubscriptionScheduleEntity;
    load(this: any, reqmatch?: SubscriptionScheduleLoadMatch, ctrl?: Control): Promise<SubscriptionScheduleEntity>;
    list(this: any, reqmatch?: SubscriptionScheduleListMatch, ctrl?: Control): Promise<SubscriptionScheduleEntity[]>;
    create(this: any, reqdata?: SubscriptionScheduleCreateData, ctrl?: Control): Promise<SubscriptionScheduleEntity>;
}
export { SubscriptionScheduleEntity };
