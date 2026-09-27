import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { TaxId, TaxIdLoadMatch, TaxIdListMatch, TaxIdCreateData, TaxIdRemoveMatch } from '../StripeTypes';
declare class TaxIdEntity extends StripeEntityBase<TaxId> {
    constructor(client: StripeSDK, entopts: any);
    make(this: TaxIdEntity): TaxIdEntity;
    load(this: any, reqmatch?: TaxIdLoadMatch, ctrl?: Control): Promise<TaxIdEntity>;
    list(this: any, reqmatch?: TaxIdListMatch, ctrl?: Control): Promise<TaxIdEntity[]>;
    create(this: any, reqdata?: TaxIdCreateData, ctrl?: Control): Promise<TaxIdEntity>;
    remove(this: any, reqmatch?: TaxIdRemoveMatch, ctrl?: Control): Promise<TaxIdEntity>;
}
export { TaxIdEntity };
