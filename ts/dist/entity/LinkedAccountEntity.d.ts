import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { LinkedAccount, LinkedAccountListMatch } from '../StripeTypes';
declare class LinkedAccountEntity extends StripeEntityBase<LinkedAccount> {
    constructor(client: StripeSDK, entopts: any);
    make(this: LinkedAccountEntity): LinkedAccountEntity;
    list(this: any, reqmatch?: LinkedAccountListMatch, ctrl?: Control): Promise<LinkedAccountEntity[]>;
}
export { LinkedAccountEntity };
