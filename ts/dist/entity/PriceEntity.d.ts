import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Price, PriceLoadMatch, PriceListMatch, PriceCreateData } from '../StripeTypes';
declare class PriceEntity extends StripeEntityBase<Price> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PriceEntity): PriceEntity;
    load(this: any, reqmatch?: PriceLoadMatch, ctrl?: Control): Promise<PriceEntity>;
    list(this: any, reqmatch?: PriceListMatch, ctrl?: Control): Promise<PriceEntity[]>;
    create(this: any, reqdata?: PriceCreateData, ctrl?: Control): Promise<PriceEntity>;
}
export { PriceEntity };
