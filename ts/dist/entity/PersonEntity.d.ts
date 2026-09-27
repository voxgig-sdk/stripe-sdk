import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Person, PersonLoadMatch, PersonListMatch, PersonCreateData } from '../StripeTypes';
declare class PersonEntity extends StripeEntityBase<Person> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PersonEntity): PersonEntity;
    load(this: any, reqmatch?: PersonLoadMatch, ctrl?: Control): Promise<PersonEntity>;
    list(this: any, reqmatch?: PersonListMatch, ctrl?: Control): Promise<PersonEntity[]>;
    create(this: any, reqdata?: PersonCreateData, ctrl?: Control): Promise<PersonEntity>;
}
export { PersonEntity };
