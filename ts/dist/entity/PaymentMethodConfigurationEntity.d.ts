import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { PaymentMethodConfiguration, PaymentMethodConfigurationLoadMatch, PaymentMethodConfigurationListMatch, PaymentMethodConfigurationCreateData } from '../StripeTypes';
declare class PaymentMethodConfigurationEntity extends StripeEntityBase<PaymentMethodConfiguration> {
    constructor(client: StripeSDK, entopts: any);
    make(this: PaymentMethodConfigurationEntity): PaymentMethodConfigurationEntity;
    load(this: any, reqmatch?: PaymentMethodConfigurationLoadMatch, ctrl?: Control): Promise<PaymentMethodConfigurationEntity>;
    list(this: any, reqmatch?: PaymentMethodConfigurationListMatch, ctrl?: Control): Promise<PaymentMethodConfigurationEntity[]>;
    create(this: any, reqdata?: PaymentMethodConfigurationCreateData, ctrl?: Control): Promise<PaymentMethodConfigurationEntity>;
}
export { PaymentMethodConfigurationEntity };
