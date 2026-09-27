import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { CashBalance, CashBalanceLoadMatch, CashBalanceCreateData } from '../StripeTypes';
declare class CashBalanceEntity extends StripeEntityBase<CashBalance> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CashBalanceEntity): CashBalanceEntity;
    load(this: any, reqmatch?: CashBalanceLoadMatch, ctrl?: Control): Promise<CashBalanceEntity>;
    create(this: any, reqdata?: CashBalanceCreateData, ctrl?: Control): Promise<CashBalanceEntity>;
}
export { CashBalanceEntity };
