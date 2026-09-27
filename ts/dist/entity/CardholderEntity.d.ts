import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Cardholder, CardholderLoadMatch, CardholderListMatch, CardholderCreateData } from '../StripeTypes';
declare class CardholderEntity extends StripeEntityBase<Cardholder> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CardholderEntity): CardholderEntity;
    load(this: any, reqmatch?: CardholderLoadMatch, ctrl?: Control): Promise<CardholderEntity>;
    list(this: any, reqmatch?: CardholderListMatch, ctrl?: Control): Promise<CardholderEntity[]>;
    create(this: any, reqdata?: CardholderCreateData, ctrl?: Control): Promise<CardholderEntity>;
}
export { CardholderEntity };
