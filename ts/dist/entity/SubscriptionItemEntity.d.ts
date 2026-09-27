import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { SubscriptionItem, SubscriptionItemLoadMatch, SubscriptionItemListMatch, SubscriptionItemCreateData } from '../StripeTypes';
declare class SubscriptionItemEntity extends StripeEntityBase<SubscriptionItem> {
    constructor(client: StripeSDK, entopts: any);
    make(this: SubscriptionItemEntity): SubscriptionItemEntity;
    load(this: any, reqmatch?: SubscriptionItemLoadMatch, ctrl?: Control): Promise<SubscriptionItemEntity>;
    list(this: any, reqmatch?: SubscriptionItemListMatch, ctrl?: Control): Promise<SubscriptionItemEntity[]>;
    create(this: any, reqdata?: SubscriptionItemCreateData, ctrl?: Control): Promise<SubscriptionItemEntity>;
}
export { SubscriptionItemEntity };
