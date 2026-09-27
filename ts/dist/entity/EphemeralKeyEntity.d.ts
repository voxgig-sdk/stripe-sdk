import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { EphemeralKey, EphemeralKeyCreateData, EphemeralKeyRemoveMatch } from '../StripeTypes';
declare class EphemeralKeyEntity extends StripeEntityBase<EphemeralKey> {
    constructor(client: StripeSDK, entopts: any);
    make(this: EphemeralKeyEntity): EphemeralKeyEntity;
    create(this: any, reqdata?: EphemeralKeyCreateData, ctrl?: Control): Promise<EphemeralKeyEntity>;
    remove(this: any, reqmatch?: EphemeralKeyRemoveMatch, ctrl?: Control): Promise<EphemeralKeyEntity>;
}
export { EphemeralKeyEntity };
