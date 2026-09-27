import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { OutboundTransfer, OutboundTransferLoadMatch, OutboundTransferListMatch, OutboundTransferCreateData } from '../StripeTypes';
declare class OutboundTransferEntity extends StripeEntityBase<OutboundTransfer> {
    constructor(client: StripeSDK, entopts: any);
    make(this: OutboundTransferEntity): OutboundTransferEntity;
    load(this: any, reqmatch?: OutboundTransferLoadMatch, ctrl?: Control): Promise<OutboundTransferEntity>;
    list(this: any, reqmatch?: OutboundTransferListMatch, ctrl?: Control): Promise<OutboundTransferEntity[]>;
    create(this: any, reqdata?: OutboundTransferCreateData, ctrl?: Control): Promise<OutboundTransferEntity>;
}
export { OutboundTransferEntity };
