import { test } from 'vitest'
import { foo } from './imported-test'
import { logger } from './index'

test('log messages', async () => {
  logger.debug('test debug')
  logger.debug('test debug 2')
  logger.info('test info')
  logger.warn('test warn')
  logger.error('test error')
  console.log('logger')
})

test('log async messages', async () => {
  await foo()
})
