package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewSessionEntityFunc func(client *StripeSDK, entopts map[string]any) StripeEntity

