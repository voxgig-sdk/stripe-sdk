import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { AccountSession, AccountSessionCreateData } from '../StripeTypes';
declare class AccountSessionEntity extends StripeEntityBase<AccountSession> {
    constructor(client: StripeSDK, entopts: any);
    make(this: AccountSessionEntity): AccountSessionEntity;
    create(this: any, reqdata?: AccountSessionCreateData, ctrl?: Control): Promise<AccountSessionEntity>;
}
export { AccountSessionEntity };
