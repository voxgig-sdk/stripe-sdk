import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Calculation, CalculationLoadMatch, CalculationCreateData } from '../StripeTypes';
declare class CalculationEntity extends StripeEntityBase<Calculation> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CalculationEntity): CalculationEntity;
    load(this: any, reqmatch?: CalculationLoadMatch, ctrl?: Control): Promise<CalculationEntity>;
    create(this: any, reqdata?: CalculationCreateData, ctrl?: Control): Promise<CalculationEntity>;
}
export { CalculationEntity };
