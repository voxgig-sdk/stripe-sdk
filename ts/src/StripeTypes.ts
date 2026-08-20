// Typed models for the Stripe SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Session {
  amount_total?: number
  cancel_url?: string
  created?: number
  currency?: string
  customer?: string
  id?: string
  mode?: string
  object?: string
  payment_status?: string
  status?: string
  success_url?: string
}

export interface SessionLoadMatch {
  id: string
}

export interface SessionListMatch {
  amount_total?: number
  cancel_url?: string
  created?: number
  currency?: string
  customer?: string
  id?: string
  mode?: string
  object?: string
  payment_status?: string
  status?: string
  success_url?: string
}

export interface SessionCreateData {
  amount_total?: number
  cancel_url?: string
  created?: number
  currency?: string
  customer?: string
  id?: string
  mode?: string
  object?: string
  payment_status?: string
  status?: string
  success_url?: string
}

