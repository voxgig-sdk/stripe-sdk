import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Dispute, DisputeLoadMatch, DisputeListMatch, DisputeCreateData } from '../StripeTypes';
declare class DisputeEntity extends StripeEntityBase<Dispute> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DisputeEntity): DisputeEntity;
    load(this: any, reqmatch?: DisputeLoadMatch, ctrl?: Control): Promise<DisputeEntity>;
    list(this: any, reqmatch?: DisputeListMatch, ctrl?: Control): Promise<DisputeEntity[]>;
    create(this: any, reqdata?: DisputeCreateData, ctrl?: Control): Promise<DisputeEntity>;
}
export { DisputeEntity };
