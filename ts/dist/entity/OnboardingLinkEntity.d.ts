import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { OnboardingLink, OnboardingLinkCreateData } from '../StripeTypes';
declare class OnboardingLinkEntity extends StripeEntityBase<OnboardingLink> {
    constructor(client: StripeSDK, entopts: any);
    make(this: OnboardingLinkEntity): OnboardingLinkEntity;
    create(this: any, reqdata?: OnboardingLinkCreateData, ctrl?: Control): Promise<OnboardingLinkEntity>;
}
export { OnboardingLinkEntity };
