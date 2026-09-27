import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { LoginLink, LoginLinkCreateData } from '../StripeTypes';
declare class LoginLinkEntity extends StripeEntityBase<LoginLink> {
    constructor(client: StripeSDK, entopts: any);
    make(this: LoginLinkEntity): LoginLinkEntity;
    create(this: any, reqdata?: LoginLinkCreateData, ctrl?: Control): Promise<LoginLinkEntity>;
}
export { LoginLinkEntity };
