import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { ApplicationFee, ApplicationFeeLoadMatch, ApplicationFeeListMatch, ApplicationFeeCreateData } from '../StripeTypes';
declare class ApplicationFeeEntity extends StripeEntityBase<ApplicationFee> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ApplicationFeeEntity): ApplicationFeeEntity;
    load(this: any, reqmatch?: ApplicationFeeLoadMatch, ctrl?: Control): Promise<ApplicationFeeEntity>;
    list(this: any, reqmatch?: ApplicationFeeListMatch, ctrl?: Control): Promise<ApplicationFeeEntity[]>;
    create(this: any, reqdata?: ApplicationFeeCreateData, ctrl?: Control): Promise<ApplicationFeeEntity>;
}
export { ApplicationFeeEntity };
