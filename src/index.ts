import pino, { type Logger } from 'pino'

let logger: Logger<string>

async function $resetupLogger() {
  if (process.env.NODE_ENV !== 'production') {
    if (process.env.VITEST) {
      const { prettyFactory } = await import('pino-pretty')
      const pretty = prettyFactory({
        colorize: true,
        singleLine: true,
      })
      logger = pino(
        { level: 'debug' },
        {
          write(msg) {
            console.log(pretty(msg).trim())
          },
        }
      )
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
}
await $resetupLogger()

export { logger, $resetupLogger }
