import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { DebitReversal, DebitReversalLoadMatch, DebitReversalListMatch, DebitReversalCreateData } from '../StripeTypes';
declare class DebitReversalEntity extends StripeEntityBase<DebitReversal> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DebitReversalEntity): DebitReversalEntity;
    load(this: any, reqmatch?: DebitReversalLoadMatch, ctrl?: Control): Promise<DebitReversalEntity>;
    list(this: any, reqmatch?: DebitReversalListMatch, ctrl?: Control): Promise<DebitReversalEntity[]>;
    create(this: any, reqdata?: DebitReversalCreateData, ctrl?: Control): Promise<DebitReversalEntity>;
}
export { DebitReversalEntity };
