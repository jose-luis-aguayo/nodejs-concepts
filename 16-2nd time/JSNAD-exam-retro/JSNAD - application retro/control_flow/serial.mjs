// Not sure if these one is an exercise but just in case
import { promisify } from 'util'


const optA = () => {
    setTimeout(() => console.log('A'), 550)
}

const optB = () => {
    setTimeout(() => console.log('B'), 250)
}

const optC = () => {
    setTimeout(() => console.log('C'), 150)
}

// And error is happenins im not sure 
// Run serial order. A, B , C

const optAprom = promisify(optA)
const optBprom = promisify(optB)
const optCprom = promisify(optC)

await optBprom()
await optAprom()
await optCprom()


