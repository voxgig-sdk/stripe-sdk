import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { CreditBalanceSummary, CreditBalanceSummaryListMatch } from '../StripeTypes';
declare class CreditBalanceSummaryEntity extends StripeEntityBase<CreditBalanceSummary> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CreditBalanceSummaryEntity): CreditBalanceSummaryEntity;
    list(this: any, reqmatch?: CreditBalanceSummaryListMatch, ctrl?: Control): Promise<CreditBalanceSummaryEntity[]>;
}
export { CreditBalanceSummaryEntity };
