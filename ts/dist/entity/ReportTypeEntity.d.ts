import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ReportType, ReportTypeLoadMatch, ReportTypeListMatch } from '../StripeTypes';
declare class ReportTypeEntity extends StripeEntityBase<ReportType> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ReportTypeEntity): ReportTypeEntity;
    load(this: any, reqmatch?: ReportTypeLoadMatch, ctrl?: Control): Promise<ReportTypeEntity>;
    list(this: any, reqmatch?: ReportTypeListMatch, ctrl?: Control): Promise<ReportTypeEntity[]>;
}
export { ReportTypeEntity };
