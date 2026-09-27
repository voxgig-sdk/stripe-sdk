import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { MeterEvent, MeterEventCreateData } from '../StripeTypes';
declare class MeterEventEntity extends StripeEntityBase<MeterEvent> {
    constructor(client: StripeSDK, entopts: any);
    make(this: MeterEventEntity): MeterEventEntity;
    create(this: any, reqdata?: MeterEventCreateData, ctrl?: Control): Promise<MeterEventEntity>;
}
export { MeterEventEntity };
