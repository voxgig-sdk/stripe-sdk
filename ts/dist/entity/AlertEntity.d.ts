import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Alert, AlertLoadMatch, AlertListMatch, AlertCreateData } from '../StripeTypes';
declare class AlertEntity extends StripeEntityBase<Alert> {
    constructor(client: StripeSDK, entopts: any);
    make(this: AlertEntity): AlertEntity;
    load(this: any, reqmatch?: AlertLoadMatch, ctrl?: Control): Promise<AlertEntity>;
    list(this: any, reqmatch?: AlertListMatch, ctrl?: Control): Promise<AlertEntity[]>;
    create(this: any, reqdata?: AlertCreateData, ctrl?: Control): Promise<AlertEntity>;
}
export { AlertEntity };
