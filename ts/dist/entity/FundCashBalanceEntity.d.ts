import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { FundCashBalance, FundCashBalanceCreateData } from '../StripeTypes';
declare class FundCashBalanceEntity extends StripeEntityBase<FundCashBalance> {
    constructor(client: StripeSDK, entopts: any);
    make(this: FundCashBalanceEntity): FundCashBalanceEntity;
    create(this: any, reqdata?: FundCashBalanceCreateData, ctrl?: Control): Promise<FundCashBalanceEntity>;
}
export { FundCashBalanceEntity };
