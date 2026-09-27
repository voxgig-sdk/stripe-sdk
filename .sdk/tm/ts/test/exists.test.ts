
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { StripeSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = StripeSDK.test()
    equal(testsdk instanceof StripeSDK, true,
      'StripeSDK.test() must return a client synchronously')
  })

})
