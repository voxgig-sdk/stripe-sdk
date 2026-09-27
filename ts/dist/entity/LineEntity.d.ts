import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Line, LineListMatch, LineCreateData } from '../StripeTypes';
declare class LineEntity extends StripeEntityBase<Line> {
    constructor(client: StripeSDK, entopts: any);
    make(this: LineEntity): LineEntity;
    list(this: any, reqmatch?: LineListMatch, ctrl?: Control): Promise<LineEntity[]>;
    create(this: any, reqdata?: LineCreateData, ctrl?: Control): Promise<LineEntity>;
}
export { LineEntity };
