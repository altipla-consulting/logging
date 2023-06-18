
import { test } from 'vitest'
import { logger } from './index'
import { foo } from './imported-test'


test.runIf(false)('it should log messages', () => {
  logger.debug('test debug')
  logger.debug('test debug 2')
  logger.info('test info')
  logger.warn('test warn')
  logger.error('test error')
})

test.runIf(false)('it should log async messages', async () => {
  await foo()
})
