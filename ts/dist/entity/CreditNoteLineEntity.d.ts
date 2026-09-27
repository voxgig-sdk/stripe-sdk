import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { CreditNoteLine, CreditNoteLineListMatch } from '../StripeTypes';
declare class CreditNoteLineEntity extends StripeEntityBase<CreditNoteLine> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CreditNoteLineEntity): CreditNoteLineEntity;
    list(this: any, reqmatch?: CreditNoteLineListMatch, ctrl?: Control): Promise<CreditNoteLineEntity[]>;
}
export { CreditNoteLineEntity };
