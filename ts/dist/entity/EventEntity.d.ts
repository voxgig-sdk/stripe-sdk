import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Event, EventLoadMatch, EventListMatch } from '../StripeTypes';
declare class EventEntity extends StripeEntityBase<Event> {
    constructor(client: StripeSDK, entopts: any);
    make(this: EventEntity): EventEntity;
    load(this: any, reqmatch?: EventLoadMatch, ctrl?: Control): Promise<EventEntity>;
    list(this: any, reqmatch?: EventListMatch, ctrl?: Control): Promise<EventEntity[]>;
}
export { EventEntity };
