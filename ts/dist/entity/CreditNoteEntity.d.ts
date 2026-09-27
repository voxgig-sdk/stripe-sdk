import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { CreditNote, CreditNoteLoadMatch, CreditNoteListMatch, CreditNoteCreateData } from '../StripeTypes';
declare class CreditNoteEntity extends StripeEntityBase<CreditNote> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CreditNoteEntity): CreditNoteEntity;
    load(this: any, reqmatch?: CreditNoteLoadMatch, ctrl?: Control): Promise<CreditNoteEntity>;
    list(this: any, reqmatch?: CreditNoteListMatch, ctrl?: Control): Promise<CreditNoteEntity[]>;
    create(this: any, reqdata?: CreditNoteCreateData, ctrl?: Control): Promise<CreditNoteEntity>;
}
export { CreditNoteEntity };
