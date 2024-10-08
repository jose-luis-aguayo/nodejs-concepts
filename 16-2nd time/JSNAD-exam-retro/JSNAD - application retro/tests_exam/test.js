// You need to write all the test you can use a library such as jest or tap 
// or the core assert library from node.js

// import the function
const assert = require('assert')
const add = require('./testme')

// 7 ,8 -> 15
assert.strict.equal(add(7, 8), 15, "Sum between 7 + 8 expected to be 15")

// '7' , 8 -> Error
//                    ↓ dont forget () => add()
assert.strict.throws(() => add('7', 8), Error('inputs must be a number'))

// 10, 8 !== string
assert.strict.notEqual(typeof add(10, 8), 'string')

console.log('passed!')