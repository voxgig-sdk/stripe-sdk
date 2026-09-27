import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { MeterEventAdjustment, MeterEventAdjustmentCreateData } from '../StripeTypes';
declare class MeterEventAdjustmentEntity extends StripeEntityBase<MeterEventAdjustment> {
    constructor(client: StripeSDK, entopts: any);
    make(this: MeterEventAdjustmentEntity): MeterEventAdjustmentEntity;
    create(this: any, reqdata?: MeterEventAdjustmentCreateData, ctrl?: Control): Promise<MeterEventAdjustmentEntity>;
}
export { MeterEventAdjustmentEntity };
