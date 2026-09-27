import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { FundingInstruction, FundingInstructionCreateData } from '../StripeTypes';
declare class FundingInstructionEntity extends StripeEntityBase<FundingInstruction> {
    constructor(client: StripeSDK, entopts: any);
    make(this: FundingInstructionEntity): FundingInstructionEntity;
    create(this: any, reqdata?: FundingInstructionCreateData, ctrl?: Control): Promise<FundingInstructionEntity>;
}
export { FundingInstructionEntity };
