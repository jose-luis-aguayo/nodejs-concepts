let { add } = require('./functions')
let assert = require('assert')


assert.strict.equal(add(1, 2), 3, "Sum between 1 + 2 expected to be 3")

assert.strict.throws(() => add('1', 2), Error('must be a number')) //same message returned in function

assert.strict.notEqual(typeof add(1, 2), 'string')


console.log('passed!')