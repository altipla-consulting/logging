
# logging

JSON logger with an opinionated default configuration.


## Install

```sh
npm install @altipla/logging
```


## Usage

```ts
import { logger } from '@altipla/logging'

logger.info('Log this')
logger.error('Log an error')
logger.info({
  msg: 'foo',
  field1: 'bar',
  field2: 3,
})
```

### Log common fields

Create a custom logger to group fields common to all log messages. It can be useful for example to add the current user inside all messages.

```ts
import { logger } from '@altipla/logging'

let userLogger = logger.child({ user: 'user' })

userLogger.info('my message')
userLogger.error('other message')
```

### Changing the log level

By default the log level is `debug`. You can change it by passing a `level` field to a new child logger.

```ts
import { logger } from '@altipla/logging'

let traceLogger = logger.child({ level: 'trace' })
traceLogger.trace('trace message')
```
