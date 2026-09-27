import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ValueList, ValueListLoadMatch, ValueListListMatch, ValueListCreateData, ValueListRemoveMatch } from '../StripeTypes';
declare class ValueListEntity extends StripeEntityBase<ValueList> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ValueListEntity): ValueListEntity;
    load(this: any, reqmatch?: ValueListLoadMatch, ctrl?: Control): Promise<ValueListEntity>;
    list(this: any, reqmatch?: ValueListListMatch, ctrl?: Control): Promise<ValueListEntity[]>;
    create(this: any, reqdata?: ValueListCreateData, ctrl?: Control): Promise<ValueListEntity>;
    remove(this: any, reqmatch?: ValueListRemoveMatch, ctrl?: Control): Promise<ValueListEntity>;
}
export { ValueListEntity };
