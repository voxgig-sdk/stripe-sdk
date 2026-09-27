import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Configuration, ConfigurationLoadMatch, ConfigurationListMatch, ConfigurationCreateData, ConfigurationRemoveMatch } from '../StripeTypes';
declare class ConfigurationEntity extends StripeEntityBase<Configuration> {
    constructor(client: StripeSDK, entopts: any);
    make(this: ConfigurationEntity): ConfigurationEntity;
    load(this: any, reqmatch?: ConfigurationLoadMatch, ctrl?: Control): Promise<ConfigurationEntity>;
    list(this: any, reqmatch?: ConfigurationListMatch, ctrl?: Control): Promise<ConfigurationEntity[]>;
    create(this: any, reqdata?: ConfigurationCreateData, ctrl?: Control): Promise<ConfigurationEntity>;
    remove(this: any, reqmatch?: ConfigurationRemoveMatch, ctrl?: Control): Promise<ConfigurationEntity>;
}
export { ConfigurationEntity };
