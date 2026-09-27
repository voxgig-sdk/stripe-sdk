import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Balance, BalanceListMatch } from '../StripeTypes';
declare class BalanceEntity extends StripeEntityBase<Balance> {
    constructor(client: StripeSDK, entopts: any);
    make(this: BalanceEntity): BalanceEntity;
    list(this: any, reqmatch?: BalanceListMatch, ctrl?: Control): Promise<BalanceEntity[]>;
}
export { BalanceEntity };
