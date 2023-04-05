
import log, { type LoggerOptions } from 'pino'


let cnf: LoggerOptions = {}
if (!process.env.VERSION) {
  cnf.transport = {
    target: 'pino-pretty',
    options: {
      colorize: true,
      singleLine: true,
    },
  }
}
export let logger = log(cnf)
