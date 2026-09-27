import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Reversal, ReversalLoadMatch, ReversalListMatch, ReversalCreateData } from '../StripeTypes';
declare class ReversalEntity extends StripeEntityBase<Reversal> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ReversalEntity): ReversalEntity;
    load(this: any, reqmatch?: ReversalLoadMatch, ctrl?: Control): Promise<ReversalEntity>;
    list(this: any, reqmatch?: ReversalListMatch, ctrl?: Control): Promise<ReversalEntity[]>;
    create(this: any, reqdata?: ReversalCreateData, ctrl?: Control): Promise<ReversalEntity>;
}
export { ReversalEntity };
