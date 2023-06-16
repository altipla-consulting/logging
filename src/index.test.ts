
import { test } from 'vitest'
import { logger } from './index'

test.runIf(false)('it should log messages in debug', () => {
  logger.debug('test')
  logger.info('test')
  logger.warn('test')
  logger.error('test')
})
