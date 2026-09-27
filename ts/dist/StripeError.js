"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeError = void 0;
class StripeError extends Error {
    isStripeError = true;
    sdk = 'Stripe';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.StripeError = StripeError;
//# sourceMappingURL=StripeError.js.map