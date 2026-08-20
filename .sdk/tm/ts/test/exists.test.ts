
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { StripeSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await StripeSDK.test()
    equal(null !== testsdk, true)
  })

})
