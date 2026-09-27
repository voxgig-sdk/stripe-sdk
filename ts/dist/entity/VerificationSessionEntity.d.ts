import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { VerificationSession, VerificationSessionLoadMatch, VerificationSessionListMatch, VerificationSessionCreateData } from '../StripeTypes';
declare class VerificationSessionEntity extends StripeEntityBase<VerificationSession> {
    constructor(client: StripeSDK, entopts: any);
    make(this: VerificationSessionEntity): VerificationSessionEntity;
    load(this: any, reqmatch?: VerificationSessionLoadMatch, ctrl?: Control): Promise<VerificationSessionEntity>;
    list(this: any, reqmatch?: VerificationSessionListMatch, ctrl?: Control): Promise<VerificationSessionEntity[]>;
    create(this: any, reqdata?: VerificationSessionCreateData, ctrl?: Control): Promise<VerificationSessionEntity>;
}
export { VerificationSessionEntity };
