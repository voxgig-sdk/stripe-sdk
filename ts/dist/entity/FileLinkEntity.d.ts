import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { FileLink, FileLinkLoadMatch, FileLinkListMatch, FileLinkCreateData } from '../StripeTypes';
declare class FileLinkEntity extends StripeEntityBase<FileLink> {
    constructor(client: StripeSDK, entopts: any);
    make(this: FileLinkEntity): FileLinkEntity;
    load(this: any, reqmatch?: FileLinkLoadMatch, ctrl?: Control): Promise<FileLinkEntity>;
    list(this: any, reqmatch?: FileLinkListMatch, ctrl?: Control): Promise<FileLinkEntity[]>;
    create(this: any, reqdata?: FileLinkCreateData, ctrl?: Control): Promise<FileLinkEntity>;
}
export { FileLinkEntity };
