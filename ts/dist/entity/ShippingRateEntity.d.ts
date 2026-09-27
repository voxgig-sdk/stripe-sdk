import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ShippingRate, ShippingRateLoadMatch, ShippingRateListMatch, ShippingRateCreateData } from '../StripeTypes';
declare class ShippingRateEntity extends StripeEntityBase<ShippingRate> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ShippingRateEntity): ShippingRateEntity;
    load(this: any, reqmatch?: ShippingRateLoadMatch, ctrl?: Control): Promise<ShippingRateEntity>;
    list(this: any, reqmatch?: ShippingRateListMatch, ctrl?: Control): Promise<ShippingRateEntity[]>;
    create(this: any, reqdata?: ShippingRateCreateData, ctrl?: Control): Promise<ShippingRateEntity>;
}
export { ShippingRateEntity };
