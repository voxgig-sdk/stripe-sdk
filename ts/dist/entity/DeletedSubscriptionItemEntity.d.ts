import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { DeletedSubscriptionItem, DeletedSubscriptionItemRemoveMatch } from '../StripeTypes';
declare class DeletedSubscriptionItemEntity extends StripeEntityBase<DeletedSubscriptionItem> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DeletedSubscriptionItemEntity): DeletedSubscriptionItemEntity;
    remove(this: any, reqmatch?: DeletedSubscriptionItemRemoveMatch, ctrl?: Control): Promise<DeletedSubscriptionItemEntity>;
}
export { DeletedSubscriptionItemEntity };
