import { StripeEntityBase } from '../StripeEntityBase';
import type { StripeSDK } from '../StripeSDK';
import type { Control } from '../types';
import type { Token, TokenLoadMatch, TokenListMatch, TokenCreateData } from '../StripeTypes';
declare class TokenEntity extends StripeEntityBase<Token> {
    constructor(client: StripeSDK, entopts: any);
    make(this: TokenEntity): TokenEntity;
    load(this: any, reqmatch?: TokenLoadMatch, ctrl?: Control): Promise<TokenEntity>;
    list(this: any, reqmatch?: TokenListMatch, ctrl?: Control): Promise<TokenEntity[]>;
    create(this: any, reqdata?: TokenCreateData, ctrl?: Control): Promise<TokenEntity>;
}
export { TokenEntity };
