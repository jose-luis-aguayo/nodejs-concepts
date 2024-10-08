const assert = require('assert')


function add (n1, n2){
    return n1+n2
}

assert.equal(add(2, 2), 4)


console.log('passed!')