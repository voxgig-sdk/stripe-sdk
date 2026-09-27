import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { SetupAttempt, SetupAttemptListMatch } from '../StripeTypes';
declare class SetupAttemptEntity extends StripeEntityBase<SetupAttempt> {
    constructor(client: StripeSDK, entopts: any);
    make(this: SetupAttemptEntity): SetupAttemptEntity;
    list(this: any, reqmatch?: SetupAttemptListMatch, ctrl?: Control): Promise<SetupAttemptEntity[]>;
}
export { SetupAttemptEntity };
