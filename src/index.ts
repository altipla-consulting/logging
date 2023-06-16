
import pino, { type LoggerOptions } from 'pino'


let cnf: LoggerOptions = {}
if (process.env.NODE_ENV !== 'production') {
  cnf.level = 'debug'
  if (!process.env.VITEST) {
    cnf.transport = {
      target: 'pino-pretty',
      options: {
        colorize: true,
        singleLine: true,
      },
    }
  }
}

export let logger = pino(cnf)
