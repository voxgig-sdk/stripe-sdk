import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Reader, ReaderLoadMatch, ReaderListMatch, ReaderCreateData, ReaderRemoveMatch } from '../StripeTypes';
declare class ReaderEntity extends StripeEntityBase<Reader> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ReaderEntity): ReaderEntity;
    load(this: any, reqmatch?: ReaderLoadMatch, ctrl?: Control): Promise<ReaderEntity>;
    list(this: any, reqmatch?: ReaderListMatch, ctrl?: Control): Promise<ReaderEntity[]>;
    create(this: any, reqdata?: ReaderCreateData, ctrl?: Control): Promise<ReaderEntity>;
    remove(this: any, reqmatch?: ReaderRemoveMatch, ctrl?: Control): Promise<ReaderEntity>;
}
export { ReaderEntity };
