import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { OutboundPayment, OutboundPaymentLoadMatch, OutboundPaymentListMatch, OutboundPaymentCreateData } from '../StripeTypes';
declare class OutboundPaymentEntity extends StripeEntityBase<OutboundPayment> {
    constructor(client: StripeSDK, entopts: any);
    make(this: OutboundPaymentEntity): OutboundPaymentEntity;
    load(this: any, reqmatch?: OutboundPaymentLoadMatch, ctrl?: Control): Promise<OutboundPaymentEntity>;
    list(this: any, reqmatch?: OutboundPaymentListMatch, ctrl?: Control): Promise<OutboundPaymentEntity[]>;
    create(this: any, reqdata?: OutboundPaymentCreateData, ctrl?: Control): Promise<OutboundPaymentEntity>;
}
export { OutboundPaymentEntity };
