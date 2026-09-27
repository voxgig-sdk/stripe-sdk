import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { CountrySpec, CountrySpecLoadMatch, CountrySpecListMatch } from '../StripeTypes';
declare class CountrySpecEntity extends StripeEntityBase<CountrySpec> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CountrySpecEntity): CountrySpecEntity;
    load(this: any, reqmatch?: CountrySpecLoadMatch, ctrl?: Control): Promise<CountrySpecEntity>;
    list(this: any, reqmatch?: CountrySpecListMatch, ctrl?: Control): Promise<CountrySpecEntity[]>;
}
export { CountrySpecEntity };
