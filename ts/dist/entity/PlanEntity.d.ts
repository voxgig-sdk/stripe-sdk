import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Plan, PlanLoadMatch, PlanListMatch, PlanCreateData } from '../StripeTypes';
declare class PlanEntity extends StripeEntityBase<Plan> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PlanEntity): PlanEntity;
    load(this: any, reqmatch?: PlanLoadMatch, ctrl?: Control): Promise<PlanEntity>;
    list(this: any, reqmatch?: PlanListMatch, ctrl?: Control): Promise<PlanEntity[]>;
    create(this: any, reqdata?: PlanCreateData, ctrl?: Control): Promise<PlanEntity>;
}
export { PlanEntity };
