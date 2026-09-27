import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ConfirmationToken, ConfirmationTokenLoadMatch, ConfirmationTokenCreateData } from '../StripeTypes';
declare class ConfirmationTokenEntity extends StripeEntityBase<ConfirmationToken> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ConfirmationTokenEntity): ConfirmationTokenEntity;
    load(this: any, reqmatch?: ConfirmationTokenLoadMatch, ctrl?: Control): Promise<ConfirmationTokenEntity>;
    create(this: any, reqdata?: ConfirmationTokenCreateData, ctrl?: Control): Promise<ConfirmationTokenEntity>;
}
export { ConfirmationTokenEntity };
