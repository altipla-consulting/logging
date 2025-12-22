import pino, { type Logger } from 'pino'

let logger: Logger<string>

if (process.env.NODE_ENV === 'production') {
  logger = pino()
} else if (process.env.NODE_ENV === 'test') {
  logger = pino({
    level: 'debug',
    hooks: {
      streamWrite(s) {
        console.log(s.trim())
        return ''
      },
    },
  })
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

export { logger }
