# CONTRACTS.json JSON Schema

a [JSON Schema](http://json-schema.org/) for `CONTRACTS.json` files that
describe service contracts available with project contributors

This npm package exports a single module, a JSON Schema.

```javascript
var ajv = new (require('ajv'))()
var schema = require('contracts-json-schema')
var assert = require('assert')

assert(
  ajv.validate(schema, {
    who: [
      {
        name: 'Kyle E. Mitchell',
        email: 'kyle@kemitchell.com',
        where: 'California, USA'
      }
    ],
    what: {
      support: 'https://commonform.org/publications/switchmode/project-summary-open-support/1e1c'
    }
  })
)
```
