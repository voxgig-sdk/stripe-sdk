import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { VerificationReport, VerificationReportLoadMatch, VerificationReportListMatch } from '../StripeTypes';
declare class VerificationReportEntity extends StripeEntityBase<VerificationReport> {
    constructor(client: StripeSDK, entopts: any);
    make(this: VerificationReportEntity): VerificationReportEntity;
    load(this: any, reqmatch?: VerificationReportLoadMatch, ctrl?: Control): Promise<VerificationReportEntity>;
    list(this: any, reqmatch?: VerificationReportListMatch, ctrl?: Control): Promise<VerificationReportEntity[]>;
}
export { VerificationReportEntity };
