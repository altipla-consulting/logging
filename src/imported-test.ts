import { logger } from './index'

export async function foo() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  logger.debug('async test1')
  logger.debug('async test2')
  await new Promise((resolve) => setTimeout(resolve, 1000))
  logger.debug('async test3')
}
