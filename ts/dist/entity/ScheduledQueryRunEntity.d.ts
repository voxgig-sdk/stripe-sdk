import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ScheduledQueryRun, ScheduledQueryRunLoadMatch, ScheduledQueryRunListMatch } from '../StripeTypes';
declare class ScheduledQueryRunEntity extends StripeEntityBase<ScheduledQueryRun> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ScheduledQueryRunEntity): ScheduledQueryRunEntity;
    load(this: any, reqmatch?: ScheduledQueryRunLoadMatch, ctrl?: Control): Promise<ScheduledQueryRunEntity>;
    list(this: any, reqmatch?: ScheduledQueryRunListMatch, ctrl?: Control): Promise<ScheduledQueryRunEntity[]>;
}
export { ScheduledQueryRunEntity };
