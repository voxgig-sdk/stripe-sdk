import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { DeletedAccount, DeletedAccountRemoveMatch } from '../StripeTypes';
declare class DeletedAccountEntity extends StripeEntityBase<DeletedAccount> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DeletedAccountEntity): DeletedAccountEntity;
    remove(this: any, reqmatch?: DeletedAccountRemoveMatch, ctrl?: Control): Promise<DeletedAccountEntity>;
}
export { DeletedAccountEntity };
