import { test, vi } from 'vitest'
import { foo } from './imported-test'
import { logger, $resetupLogger } from './index'

test('log messages', async () => {
  logger.debug('test debug')
  logger.debug('test debug 2')
  logger.info('test info')
  logger.warn('test warn')
  logger.error('test error')
})

test('log async messages', async () => {
  await foo()
})

test('log production messages', async () => {
  vi.stubEnv('NODE_ENV', 'production')
  await $resetupLogger()

  logger.debug('prod test debug')
  logger.info('prod test info')
  logger.warn('prod test warn')
  logger.error('prod test error')
})
