import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { FeedbackOption, FeedbackOptionLoadMatch, FeedbackOptionListMatch, FeedbackOptionCreateData } from '../StripeTypes';
declare class FeedbackOptionEntity extends StripeEntityBase<FeedbackOption> {
    constructor(client: StripeSDK, entopts: any);
    make(this: FeedbackOptionEntity): FeedbackOptionEntity;
    load(this: any, reqmatch?: FeedbackOptionLoadMatch, ctrl?: Control): Promise<FeedbackOptionEntity>;
    list(this: any, reqmatch?: FeedbackOptionListMatch, ctrl?: Control): Promise<FeedbackOptionEntity[]>;
    create(this: any, reqdata?: FeedbackOptionCreateData, ctrl?: Control): Promise<FeedbackOptionEntity>;
}
export { FeedbackOptionEntity };
