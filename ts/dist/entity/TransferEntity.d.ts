import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Transfer, TransferLoadMatch, TransferListMatch, TransferCreateData } from '../StripeTypes';
declare class TransferEntity extends StripeEntityBase<Transfer> {
    constructor(client: StripeSDK, entopts: any);
    make(this: TransferEntity): TransferEntity;
    load(this: any, reqmatch?: TransferLoadMatch, ctrl?: Control): Promise<TransferEntity>;
    list(this: any, reqmatch?: TransferListMatch, ctrl?: Control): Promise<TransferEntity[]>;
    create(this: any, reqdata?: TransferCreateData, ctrl?: Control): Promise<TransferEntity>;
}
export { TransferEntity };
