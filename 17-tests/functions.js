function add (a, b) {

    console.log(__filename)
    if (typeof a !== 'number') {
        throw new Error('must be a number')
    }
    return a + b
}

module.exports.add = add