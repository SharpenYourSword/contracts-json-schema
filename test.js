var AJV = require('ajv')
var assert = require('assert')
var schema = require('./')

var ajv = new AJV({allErrors: true})

assert(ajv.validateSchema(schema), 'invalid schema')

var validate = ajv.compile(schema)

assert(
  validate([
    {
      name: 'Kyle E. Mitchell',
      email: 'kyle@kemitchell.com',
      where: 'California, USA',
      services: {
        support: 'https://commonform.org/publications/switchmode/project-summary-open-support/1e1c'
      }
    }
  ])
)
