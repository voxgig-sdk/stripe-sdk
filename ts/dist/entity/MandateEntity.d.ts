import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Mandate, MandateLoadMatch } from '../StripeTypes';
declare class MandateEntity extends StripeEntityBase<Mandate> {
    constructor(client: StripeSDK, entopts: any);
    make(this: MandateEntity): MandateEntity;
    load(this: any, reqmatch?: MandateLoadMatch, ctrl?: Control): Promise<MandateEntity>;
}
export { MandateEntity };
