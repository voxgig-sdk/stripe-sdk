import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ExchangeRate, ExchangeRateLoadMatch, ExchangeRateListMatch } from '../StripeTypes';
declare class ExchangeRateEntity extends StripeEntityBase<ExchangeRate> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ExchangeRateEntity): ExchangeRateEntity;
    load(this: any, reqmatch?: ExchangeRateLoadMatch, ctrl?: Control): Promise<ExchangeRateEntity>;
    list(this: any, reqmatch?: ExchangeRateListMatch, ctrl?: Control): Promise<ExchangeRateEntity[]>;
}
export { ExchangeRateEntity };
