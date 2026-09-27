import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { DeletedWebhookEndpoint, DeletedWebhookEndpointRemoveMatch } from '../StripeTypes';
declare class DeletedWebhookEndpointEntity extends StripeEntityBase<DeletedWebhookEndpoint> {
    constructor(client: StripeSDK, entopts: any);
    make(this: DeletedWebhookEndpointEntity): DeletedWebhookEndpointEntity;
    remove(this: any, reqmatch?: DeletedWebhookEndpointRemoveMatch, ctrl?: Control): Promise<DeletedWebhookEndpointEntity>;
}
export { DeletedWebhookEndpointEntity };
