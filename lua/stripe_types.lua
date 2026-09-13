-- Typed models for the Stripe SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Session
---@field amount_total? number
---@field cancel_url? string
---@field created? number
---@field currency? string
---@field customer? string
---@field id? string
---@field mode? string
---@field object? string
---@field payment_status? string
---@field status? string
---@field success_url? string

---@class SessionLoadMatch
---@field id string

---@class SessionListMatch
---@field customer? string
---@field limit? number

---@class SessionCreateData
---@field amount_total? number
---@field cancel_url? string
---@field created? number
---@field currency? string
---@field customer? string
---@field id? string
---@field mode? string
---@field object? string
---@field payment_status? string
---@field status? string
---@field success_url? string

local M = {}

return M
