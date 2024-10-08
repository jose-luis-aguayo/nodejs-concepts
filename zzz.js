function answer (n) {
    if(typeof n == 'number') {
        return (c) => {
            if(typeof c == 'number') {
                return n + c
            }
        }
    }
}

let funct = answer(2)

console.log(funct(1))
