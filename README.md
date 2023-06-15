
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

### Logging common fields

```ts
import { logger } from '@altipla/logging'

let fooLogger = logger.child({ foo: 'foo value' })

fooLogger.info('my message')
fooLogger.error('other message')
```

### Changing the log level

```ts
import { logger } from '@altipla/logging'

let traceLogger = logger.child({ level: 'trace' })
traceLogger.trace('trace message')
```
