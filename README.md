
## logging

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
