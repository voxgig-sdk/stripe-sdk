import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { TestClock, TestClockLoadMatch, TestClockListMatch, TestClockCreateData, TestClockRemoveMatch } from '../StripeTypes';
declare class TestClockEntity extends StripeEntityBase<TestClock> {
    constructor(client: StripeSDK, entopts: any);
    make(this: TestClockEntity): TestClockEntity;
    load(this: any, reqmatch?: TestClockLoadMatch, ctrl?: Control): Promise<TestClockEntity>;
    list(this: any, reqmatch?: TestClockListMatch, ctrl?: Control): Promise<TestClockEntity[]>;
    create(this: any, reqdata?: TestClockCreateData, ctrl?: Control): Promise<TestClockEntity>;
    remove(this: any, reqmatch?: TestClockRemoveMatch, ctrl?: Control): Promise<TestClockEntity>;
}
export { TestClockEntity };
