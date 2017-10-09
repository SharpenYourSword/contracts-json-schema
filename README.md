# CONTRACTS.json JSON Schema

a [JSON Schema](http://json-schema.org/) for `CONTRACTS.json` files that
describe service contracts available with project contributors

This npm package exports a single module, a JSON Schema.

```javascript
var ajv = new (require('ajv'))()
var schema = require('contracts-json-schema')
var assert = require('assert')

assert(
  ajv.validate(schema, [
    {
      name: 'Kyle E. Mitchell',
      email: 'kyle@kemitchell.com',
      where: 'California, USA',
      services: {
        support: 'https://github.com/kemitchell/switchmode/releases/tag/1e1c'
      }
    }
  ])
)
```
