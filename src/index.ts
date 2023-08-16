
import pino, { type Logger, type LoggerOptions } from 'pino'


let logger: Logger<LoggerOptions>
if (process.env.NODE_ENV !== 'production') {
  if (process.env.VITEST) {
    (async function() {
      let browser = await import('pino/browser.js')
      logger = browser.default({
        browser: {
          asObject: true,
        },
        level: 'debug',
      })
    })()
  } else {
    logger = pino({
      level: 'debug',
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          singleLine: true,
        },
      },
    })
  }
} else {
  logger = pino()
}

export { logger }
