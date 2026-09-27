import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { TrialOffer, TrialOfferLoadMatch, TrialOfferListMatch, TrialOfferCreateData } from '../StripeTypes';
declare class TrialOfferEntity extends StripeEntityBase<TrialOffer> {
    constructor(client: StripeSDK, entopts: any);
    make(this: TrialOfferEntity): TrialOfferEntity;
    load(this: any, reqmatch?: TrialOfferLoadMatch, ctrl?: Control): Promise<TrialOfferEntity>;
    list(this: any, reqmatch?: TrialOfferListMatch, ctrl?: Control): Promise<TrialOfferEntity[]>;
    create(this: any, reqdata?: TrialOfferCreateData, ctrl?: Control): Promise<TrialOfferEntity>;
}
export { TrialOfferEntity };
