
import log, { type LoggerOptions } from 'pino'


let cnf: LoggerOptions = {}
if (process.env.NODE_ENV !== 'production') {
  cnf.transport = {
    target: 'pino-pretty',
    options: {
      colorize: true,
      singleLine: true,
    },
  }
}
export let logger = log(cnf)
