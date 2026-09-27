import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { WebhookEndpoint, WebhookEndpointLoadMatch, WebhookEndpointListMatch, WebhookEndpointCreateData } from '../StripeTypes';
declare class WebhookEndpointEntity extends StripeEntityBase<WebhookEndpoint> {
    constructor(client: StripeSDK, entopts: any);
    make(this: WebhookEndpointEntity): WebhookEndpointEntity;
    load(this: any, reqmatch?: WebhookEndpointLoadMatch, ctrl?: Control): Promise<WebhookEndpointEntity>;
    list(this: any, reqmatch?: WebhookEndpointListMatch, ctrl?: Control): Promise<WebhookEndpointEntity[]>;
    create(this: any, reqdata?: WebhookEndpointCreateData, ctrl?: Control): Promise<WebhookEndpointEntity>;
}
export { WebhookEndpointEntity };
