import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Order, OrderLoadMatch, OrderListMatch, OrderCreateData } from '../StripeTypes';
declare class OrderEntity extends StripeEntityBase<Order> {
    constructor(client: StripeSDK, entopts: any);
    make(this: OrderEntity): OrderEntity;
    load(this: any, reqmatch?: OrderLoadMatch, ctrl?: Control): Promise<OrderEntity>;
    list(this: any, reqmatch?: OrderListMatch, ctrl?: Control): Promise<OrderEntity[]>;
    create(this: any, reqdata?: OrderCreateData, ctrl?: Control): Promise<OrderEntity>;
}
export { OrderEntity };
