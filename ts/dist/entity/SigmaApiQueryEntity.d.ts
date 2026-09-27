import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { SigmaApiQuery, SigmaApiQueryCreateData } from '../StripeTypes';
declare class SigmaApiQueryEntity extends StripeEntityBase<SigmaApiQuery> {
    constructor(client: StripeSDK, entopts: any);
    make(this: SigmaApiQueryEntity): SigmaApiQueryEntity;
    create(this: any, reqdata?: SigmaApiQueryCreateData, ctrl?: Control): Promise<SigmaApiQueryEntity>;
}
export { SigmaApiQueryEntity };
