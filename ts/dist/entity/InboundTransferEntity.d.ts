import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { InboundTransfer, InboundTransferLoadMatch, InboundTransferListMatch, InboundTransferCreateData } from '../StripeTypes';
declare class InboundTransferEntity extends StripeEntityBase<InboundTransfer> {
    constructor(client: StripeSDK, entopts: any);
    make(this: InboundTransferEntity): InboundTransferEntity;
    load(this: any, reqmatch?: InboundTransferLoadMatch, ctrl?: Control): Promise<InboundTransferEntity>;
    list(this: any, reqmatch?: InboundTransferListMatch, ctrl?: Control): Promise<InboundTransferEntity[]>;
    create(this: any, reqdata?: InboundTransferCreateData, ctrl?: Control): Promise<InboundTransferEntity>;
}
export { InboundTransferEntity };
