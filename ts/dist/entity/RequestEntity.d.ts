import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Request, RequestLoadMatch, RequestListMatch, RequestCreateData } from '../StripeTypes';
declare class RequestEntity extends StripeEntityBase<Request> {
    constructor(client: StripeSDK, entopts: any);
    make(this: RequestEntity): RequestEntity;
    load(this: any, reqmatch?: RequestLoadMatch, ctrl?: Control): Promise<RequestEntity>;
    list(this: any, reqmatch?: RequestListMatch, ctrl?: Control): Promise<RequestEntity[]>;
    create(this: any, reqdata?: RequestCreateData, ctrl?: Control): Promise<RequestEntity>;
}
export { RequestEntity };
