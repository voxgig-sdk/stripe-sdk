import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { MeterEventSummary, MeterEventSummaryListMatch } from '../StripeTypes';
declare class MeterEventSummaryEntity extends StripeEntityBase<MeterEventSummary> {
    constructor(client: StripeSDK, entopts: any);
    make(this: MeterEventSummaryEntity): MeterEventSummaryEntity;
    list(this: any, reqmatch?: MeterEventSummaryListMatch, ctrl?: Control): Promise<MeterEventSummaryEntity[]>;
}
export { MeterEventSummaryEntity };
