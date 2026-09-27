import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Capability, CapabilityLoadMatch, CapabilityListMatch, CapabilityCreateData } from '../StripeTypes';
declare class CapabilityEntity extends StripeEntityBase<Capability> {
    constructor(client: StripeSDK, entopts: any);
    make(this: CapabilityEntity): CapabilityEntity;
    load(this: any, reqmatch?: CapabilityLoadMatch, ctrl?: Control): Promise<CapabilityEntity>;
    list(this: any, reqmatch?: CapabilityListMatch, ctrl?: Control): Promise<CapabilityEntity[]>;
    create(this: any, reqdata?: CapabilityCreateData, ctrl?: Control): Promise<CapabilityEntity>;
}
export { CapabilityEntity };
