-- Stripe SDK error

local StripeError = {}
StripeError.__index = StripeError


function StripeError.new(code, msg, ctx)
  local self = setmetatable({}, StripeError)
  self.is_sdk_error = true
  self.sdk = "Stripe"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function StripeError:error()
  return self.msg
end


function StripeError:__tostring()
  return self.msg
end


return StripeError
