import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Review, ReviewLoadMatch, ReviewListMatch, ReviewCreateData } from '../StripeTypes';
declare class ReviewEntity extends StripeEntityBase<Review> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ReviewEntity): ReviewEntity;
    load(this: any, reqmatch?: ReviewLoadMatch, ctrl?: Control): Promise<ReviewEntity>;
    list(this: any, reqmatch?: ReviewListMatch, ctrl?: Control): Promise<ReviewEntity[]>;
    create(this: any, reqdata?: ReviewCreateData, ctrl?: Control): Promise<ReviewEntity>;
}
export { ReviewEntity };
