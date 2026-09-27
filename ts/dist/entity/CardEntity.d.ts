import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Card, CardLoadMatch, CardListMatch, CardCreateData, CardRemoveMatch } from '../StripeTypes';
declare class CardEntity extends StripeEntityBase<Card> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CardEntity): CardEntity;
    load(this: any, reqmatch?: CardLoadMatch, ctrl?: Control): Promise<CardEntity>;
    list(this: any, reqmatch?: CardListMatch, ctrl?: Control): Promise<CardEntity[]>;
    create(this: any, reqdata?: CardCreateData, ctrl?: Control): Promise<CardEntity>;
    remove(this: any, reqmatch?: CardRemoveMatch, ctrl?: Control): Promise<CardEntity>;
}
export { CardEntity };
