import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ConnectionToken, ConnectionTokenCreateData } from '../StripeTypes';
declare class ConnectionTokenEntity extends StripeEntityBase<ConnectionToken> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ConnectionTokenEntity): ConnectionTokenEntity;
    create(this: any, reqdata?: ConnectionTokenCreateData, ctrl?: Control): Promise<ConnectionTokenEntity>;
}
export { ConnectionTokenEntity };
