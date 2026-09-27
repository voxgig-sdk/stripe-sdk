import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { DeletedPlan, DeletedPlanRemoveMatch } from '../StripeTypes';
declare class DeletedPlanEntity extends StripeEntityBase<DeletedPlan> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DeletedPlanEntity): DeletedPlanEntity;
    remove(this: any, reqmatch?: DeletedPlanRemoveMatch, ctrl?: Control): Promise<DeletedPlanEntity>;
}
export { DeletedPlanEntity };
