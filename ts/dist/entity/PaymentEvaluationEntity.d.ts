import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { PaymentEvaluation, PaymentEvaluationCreateData } from '../StripeTypes';
declare class PaymentEvaluationEntity extends StripeEntityBase<PaymentEvaluation> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PaymentEvaluationEntity): PaymentEvaluationEntity;
    create(this: any, reqdata?: PaymentEvaluationCreateData, ctrl?: Control): Promise<PaymentEvaluationEntity>;
}
export { PaymentEvaluationEntity };
