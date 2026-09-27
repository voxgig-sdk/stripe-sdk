import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ReportRun, ReportRunLoadMatch, ReportRunListMatch, ReportRunCreateData } from '../StripeTypes';
declare class ReportRunEntity extends StripeEntityBase<ReportRun> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ReportRunEntity): ReportRunEntity;
    load(this: any, reqmatch?: ReportRunLoadMatch, ctrl?: Control): Promise<ReportRunEntity>;
    list(this: any, reqmatch?: ReportRunListMatch, ctrl?: Control): Promise<ReportRunEntity[]>;
    create(this: any, reqdata?: ReportRunCreateData, ctrl?: Control): Promise<ReportRunEntity>;
}
export { ReportRunEntity };
