
module.exports = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('inputs must be a number')
    }   
    
    return a + b

}