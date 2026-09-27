import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { DeletedPerson, DeletedPersonRemoveMatch } from '../StripeTypes';
declare class DeletedPersonEntity extends StripeEntityBase<DeletedPerson> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DeletedPersonEntity): DeletedPersonEntity;
    remove(this: any, reqmatch?: DeletedPersonRemoveMatch, ctrl?: Control): Promise<DeletedPersonEntity>;
}
export { DeletedPersonEntity };
