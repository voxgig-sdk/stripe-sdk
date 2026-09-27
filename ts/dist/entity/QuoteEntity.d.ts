import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Quote, QuoteLoadMatch, QuoteListMatch, QuoteCreateData } from '../StripeTypes';
declare class QuoteEntity extends StripeEntityBase<Quote> {
    constructor(client: StripeSDK, entopts: any);
    make(this: QuoteEntity): QuoteEntity;
    load(this: any, reqmatch?: QuoteLoadMatch, ctrl?: Control): Promise<QuoteEntity>;
    list(this: any, reqmatch?: QuoteListMatch, ctrl?: Control): Promise<QuoteEntity[]>;
    create(this: any, reqdata?: QuoteCreateData, ctrl?: Control): Promise<QuoteEntity>;
}
export { QuoteEntity };
