import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Topup, TopupLoadMatch, TopupListMatch, TopupCreateData } from '../StripeTypes';
declare class TopupEntity extends StripeEntityBase<Topup> {
    constructor(client: StripeSDK, entopts: any);
    make(this: TopupEntity): TopupEntity;
    load(this: any, reqmatch?: TopupLoadMatch, ctrl?: Control): Promise<TopupEntity>;
    list(this: any, reqmatch?: TopupListMatch, ctrl?: Control): Promise<TopupEntity[]>;
    create(this: any, reqdata?: TopupCreateData, ctrl?: Control): Promise<TopupEntity>;
}
export { TopupEntity };
