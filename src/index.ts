
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
let logger = log(cnf)
if (process.env.NODE_ENV !== 'production') {
  logger.level = 'debug'
}
export { logger }
