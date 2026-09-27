import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { DeletedExternalAccount, DeletedExternalAccountRemoveMatch } from '../StripeTypes';
declare class DeletedExternalAccountEntity extends StripeEntityBase<DeletedExternalAccount> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DeletedExternalAccountEntity): DeletedExternalAccountEntity;
    remove(this: any, reqmatch?: DeletedExternalAccountRemoveMatch, ctrl?: Control): Promise<DeletedExternalAccountEntity>;
}
export { DeletedExternalAccountEntity };
