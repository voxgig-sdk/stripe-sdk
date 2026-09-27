import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { QuotePdf, QuotePdfLoadMatch } from '../StripeTypes';
declare class QuotePdfEntity extends StripeEntityBase<QuotePdf> {
    constructor(client: StripeSDK, entopts: any);
    make(this: QuotePdfEntity): QuotePdfEntity;
    load(this: any, reqmatch?: QuotePdfLoadMatch, ctrl?: Control): Promise<QuotePdfEntity>;
}
export { QuotePdfEntity };
