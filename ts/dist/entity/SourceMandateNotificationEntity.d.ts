import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { SourceMandateNotification, SourceMandateNotificationLoadMatch } from '../StripeTypes';
declare class SourceMandateNotificationEntity extends StripeEntityBase<SourceMandateNotification> {
    constructor(client: StripeSDK, entopts: any);
    make(this: SourceMandateNotificationEntity): SourceMandateNotificationEntity;
    load(this: any, reqmatch?: SourceMandateNotificationLoadMatch, ctrl?: Control): Promise<SourceMandateNotificationEntity>;
}
export { SourceMandateNotificationEntity };
