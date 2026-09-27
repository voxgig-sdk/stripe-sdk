import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { CreditReversal, CreditReversalLoadMatch, CreditReversalListMatch, CreditReversalCreateData } from '../StripeTypes';
declare class CreditReversalEntity extends StripeEntityBase<CreditReversal> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CreditReversalEntity): CreditReversalEntity;
    load(this: any, reqmatch?: CreditReversalLoadMatch, ctrl?: Control): Promise<CreditReversalEntity>;
    list(this: any, reqmatch?: CreditReversalListMatch, ctrl?: Control): Promise<CreditReversalEntity[]>;
    create(this: any, reqdata?: CreditReversalCreateData, ctrl?: Control): Promise<CreditReversalEntity>;
}
export { CreditReversalEntity };
