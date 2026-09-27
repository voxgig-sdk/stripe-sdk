import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { PersonalizationDesign, PersonalizationDesignLoadMatch, PersonalizationDesignListMatch, PersonalizationDesignCreateData } from '../StripeTypes';
declare class PersonalizationDesignEntity extends StripeEntityBase<PersonalizationDesign> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PersonalizationDesignEntity): PersonalizationDesignEntity;
    load(this: any, reqmatch?: PersonalizationDesignLoadMatch, ctrl?: Control): Promise<PersonalizationDesignEntity>;
    list(this: any, reqmatch?: PersonalizationDesignListMatch, ctrl?: Control): Promise<PersonalizationDesignEntity[]>;
    create(this: any, reqdata?: PersonalizationDesignCreateData, ctrl?: Control): Promise<PersonalizationDesignEntity>;
}
export { PersonalizationDesignEntity };
