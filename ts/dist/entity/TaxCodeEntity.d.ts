import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { TaxCode, TaxCodeLoadMatch, TaxCodeListMatch } from '../StripeTypes';
declare class TaxCodeEntity extends StripeEntityBase<TaxCode> {
    constructor(client: StripeSDK, entopts: any);
    make(this: TaxCodeEntity): TaxCodeEntity;
    load(this: any, reqmatch?: TaxCodeLoadMatch, ctrl?: Control): Promise<TaxCodeEntity>;
    list(this: any, reqmatch?: TaxCodeListMatch, ctrl?: Control): Promise<TaxCodeEntity[]>;
}
export { TaxCodeEntity };
