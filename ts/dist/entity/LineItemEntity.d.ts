import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { LineItem, LineItemListMatch } from '../StripeTypes';
declare class LineItemEntity extends StripeEntityBase<LineItem> {
    constructor(client: StripeSDK, entopts: any);
    make(this: LineItemEntity): LineItemEntity;
    list(this: any, reqmatch?: LineItemListMatch, ctrl?: Control): Promise<LineItemEntity[]>;
}
export { LineItemEntity };
