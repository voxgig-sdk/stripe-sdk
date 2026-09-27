import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { EarlyFraudWarning, EarlyFraudWarningLoadMatch, EarlyFraudWarningListMatch } from '../StripeTypes';
declare class EarlyFraudWarningEntity extends StripeEntityBase<EarlyFraudWarning> {
    constructor(client: StripeSDK, entopts: any);
    make(this: EarlyFraudWarningEntity): EarlyFraudWarningEntity;
    load(this: any, reqmatch?: EarlyFraudWarningLoadMatch, ctrl?: Control): Promise<EarlyFraudWarningEntity>;
    list(this: any, reqmatch?: EarlyFraudWarningListMatch, ctrl?: Control): Promise<EarlyFraudWarningEntity[]>;
}
export { EarlyFraudWarningEntity };
