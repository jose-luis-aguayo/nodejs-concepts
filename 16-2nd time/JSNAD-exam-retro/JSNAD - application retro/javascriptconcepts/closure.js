// n return function c return n + c

function answer(n) {
    if (typeof n !== 'number') throw Error('input must be a number')
    return (c) => {
        if (typeof c !== 'number') throw Error('input must be a number')
        return n + c
    }
}


const firstfun = answer(3)
console.log(answer(3)) // -> 6
