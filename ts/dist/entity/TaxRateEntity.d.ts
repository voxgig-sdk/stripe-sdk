import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { TaxRate, TaxRateLoadMatch, TaxRateListMatch, TaxRateCreateData } from '../StripeTypes';
declare class TaxRateEntity extends StripeEntityBase<TaxRate> {
    constructor(client: StripeSDK, entopts: any);
    make(this: TaxRateEntity): TaxRateEntity;
    load(this: any, reqmatch?: TaxRateLoadMatch, ctrl?: Control): Promise<TaxRateEntity>;
    list(this: any, reqmatch?: TaxRateListMatch, ctrl?: Control): Promise<TaxRateEntity[]>;
    create(this: any, reqdata?: TaxRateCreateData, ctrl?: Control): Promise<TaxRateEntity>;
}
export { TaxRateEntity };
