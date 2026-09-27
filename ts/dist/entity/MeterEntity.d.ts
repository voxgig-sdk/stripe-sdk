import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Meter, MeterLoadMatch, MeterListMatch, MeterCreateData } from '../StripeTypes';
declare class MeterEntity extends StripeEntityBase<Meter> {
    constructor(client: StripeSDK, entopts: any);
    make(this: MeterEntity): MeterEntity;
    load(this: any, reqmatch?: MeterLoadMatch, ctrl?: Control): Promise<MeterEntity>;
    list(this: any, reqmatch?: MeterListMatch, ctrl?: Control): Promise<MeterEntity[]>;
    create(this: any, reqdata?: MeterCreateData, ctrl?: Control): Promise<MeterEntity>;
}
export { MeterEntity };
