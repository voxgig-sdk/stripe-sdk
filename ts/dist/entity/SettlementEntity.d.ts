import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Settlement, SettlementLoadMatch, SettlementCreateData } from '../StripeTypes';
declare class SettlementEntity extends StripeEntityBase<Settlement> {
    constructor(client: StripeSDK, entopts: any);
    make(this: SettlementEntity): SettlementEntity;
    load(this: any, reqmatch?: SettlementLoadMatch, ctrl?: Control): Promise<SettlementEntity>;
    create(this: any, reqdata?: SettlementCreateData, ctrl?: Control): Promise<SettlementEntity>;
}
export { SettlementEntity };
