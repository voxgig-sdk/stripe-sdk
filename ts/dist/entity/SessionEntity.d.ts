import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Session, SessionLoadMatch, SessionListMatch, SessionCreateData } from '../StripeTypes';
declare class SessionEntity extends StripeEntityBase<Session> {
    constructor(client: StripeSDK, entopts: any);
    make(this: SessionEntity): SessionEntity;
    load(this: any, reqmatch?: SessionLoadMatch, ctrl?: Control): Promise<SessionEntity>;
    list(this: any, reqmatch?: SessionListMatch, ctrl?: Control): Promise<SessionEntity[]>;
    create(this: any, reqdata?: SessionCreateData, ctrl?: Control): Promise<SessionEntity>;
}
export { SessionEntity };
