
import pino, { type LoggerOptions } from 'pino'


let cnf: LoggerOptions = {}
if (process.env.NODE_ENV !== 'production') {
  cnf.transport = {
    target: 'pino-pretty',
    options: {
      colorize: true,
      singleLine: true,
    },
  }
  cnf.level = 'debug'
}

export let logger = pino(cnf)
