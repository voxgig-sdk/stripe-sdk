import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Charge, ChargeLoadMatch, ChargeListMatch, ChargeCreateData } from '../StripeTypes';
declare class ChargeEntity extends StripeEntityBase<Charge> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ChargeEntity): ChargeEntity;
    load(this: any, reqmatch?: ChargeLoadMatch, ctrl?: Control): Promise<ChargeEntity>;
    list(this: any, reqmatch?: ChargeListMatch, ctrl?: Control): Promise<ChargeEntity[]>;
    create(this: any, reqdata?: ChargeCreateData, ctrl?: Control): Promise<ChargeEntity>;
}
export { ChargeEntity };
