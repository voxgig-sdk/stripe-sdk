import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Source, SourceLoadMatch, SourceListMatch, SourceCreateData, SourceRemoveMatch } from '../StripeTypes';
declare class SourceEntity extends StripeEntityBase<Source> {
    constructor(client: StripeSDK, entopts: any);
    make(this: SourceEntity): SourceEntity;
    load(this: any, reqmatch?: SourceLoadMatch, ctrl?: Control): Promise<SourceEntity>;
    list(this: any, reqmatch?: SourceListMatch, ctrl?: Control): Promise<SourceEntity[]>;
    create(this: any, reqdata?: SourceCreateData, ctrl?: Control): Promise<SourceEntity>;
    remove(this: any, reqmatch?: SourceRemoveMatch, ctrl?: Control): Promise<SourceEntity>;
}
export { SourceEntity };
