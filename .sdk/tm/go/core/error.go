package core

type StripeError struct {
	IsStripeError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewStripeError(code string, msg string, ctx *Context) *StripeError {
	return &StripeError{
		IsStripeError: true,
		Sdk:              "Stripe",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *StripeError) Error() string {
	return e.Msg
}
