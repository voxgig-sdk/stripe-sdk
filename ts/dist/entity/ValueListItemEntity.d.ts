import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ValueListItem, ValueListItemLoadMatch, ValueListItemListMatch, ValueListItemCreateData, ValueListItemRemoveMatch } from '../StripeTypes';
declare class ValueListItemEntity extends StripeEntityBase<ValueListItem> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ValueListItemEntity): ValueListItemEntity;
    load(this: any, reqmatch?: ValueListItemLoadMatch, ctrl?: Control): Promise<ValueListItemEntity>;
    list(this: any, reqmatch?: ValueListItemListMatch, ctrl?: Control): Promise<ValueListItemEntity[]>;
    create(this: any, reqdata?: ValueListItemCreateData, ctrl?: Control): Promise<ValueListItemEntity>;
    remove(this: any, reqmatch?: ValueListItemRemoveMatch, ctrl?: Control): Promise<ValueListItemEntity>;
}
export { ValueListItemEntity };
