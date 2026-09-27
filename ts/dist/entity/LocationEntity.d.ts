import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Location, LocationLoadMatch, LocationListMatch, LocationCreateData, LocationRemoveMatch } from '../StripeTypes';
declare class LocationEntity extends StripeEntityBase<Location> {
    constructor(client: StripeSDK, entopts: any);
    make(this: LocationEntity): LocationEntity;
    load(this: any, reqmatch?: LocationLoadMatch, ctrl?: Control): Promise<LocationEntity>;
    list(this: any, reqmatch?: LocationListMatch, ctrl?: Control): Promise<LocationEntity[]>;
    create(this: any, reqdata?: LocationCreateData, ctrl?: Control): Promise<LocationEntity>;
    remove(this: any, reqmatch?: LocationRemoveMatch, ctrl?: Control): Promise<LocationEntity>;
}
export { LocationEntity };
