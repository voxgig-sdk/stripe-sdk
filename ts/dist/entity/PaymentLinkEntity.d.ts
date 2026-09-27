import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { PaymentLink, PaymentLinkLoadMatch, PaymentLinkListMatch, PaymentLinkCreateData } from '../StripeTypes';
declare class PaymentLinkEntity extends StripeEntityBase<PaymentLink> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PaymentLinkEntity): PaymentLinkEntity;
    load(this: any, reqmatch?: PaymentLinkLoadMatch, ctrl?: Control): Promise<PaymentLinkEntity>;
    list(this: any, reqmatch?: PaymentLinkListMatch, ctrl?: Control): Promise<PaymentLinkEntity[]>;
    create(this: any, reqdata?: PaymentLinkCreateData, ctrl?: Control): Promise<PaymentLinkEntity>;
}
export { PaymentLinkEntity };
