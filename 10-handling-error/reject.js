/*

function validAge ( age ) {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error('Must be greater than 18'))
    } else {
      resolve ('its ok')
    }
  })
}

validAge(17)
.then((result) => {
  console.log(result)
})
.catch((error) => {
  console.log(error)
})




/*function doTask ( amount ) {
  return new Promise ((resolve, reject) => {
    if (typeof amount !== 'number') {
      reject(new Error('Amount must be a number'))
    } else {
      resolve (amount/2)
    }
  })
}

doTask(4)
.then((result) => {
  console.log(result)
})
.catch((error) => {
  console.log(error)
}) 



/*
function doTask ( amount ) {
  return new Promise((resolve, reject) => {
    if (typeof amount !== 'number'){
      reject(new Error('Amount must be a numbr'))
    }
    resolve(amount/4)
  })
}

doTask('y')
.then((result) => {
  console.log(result)
})
.catch((error) => {
  console.log(error)
})

/*
function doTask (amount) {
    return new Promise((resolve, reject) => {
      if (typeof amount !== 'number') {
        reject(new TypeError('amount must be a number'))
        return
      }
      if (amount <= 0) {
        reject(new RangeError('amount must be greater than zero'))
        return
      }
      if (amount % 2) {
        reject(new OddError('amount'))
        return
      }
      resolve(amount/2)
    })
  }
  
  doTask(3)
  .then((result) => {
    console.log('result', result)
  })
  .catch((err) => {
    if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER') {
      console.error('wrong type')
    } else if (err.code === 'ERRO_AMOUNT_MUST_EXCEED_ZERO') {
      console.error('out of range')
    } else if (err.code === 'ERR_MUST_BE_EVEN') {
      console.error('cannot be odd')
    } else {
      console.error('Unknown error')
    }

  })
*/
/*
  function doTask ( amount ) {
    return new Promise((resolve, reject) => {
      if (typeof amount !== 'number') {
        reject(new TypeError('Amount must be a number'))
        return
      }
      resolve(amount/2)
    })
  }

  doTask('r')
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
*/

/*
  function doTask ( amount ) {
    return new Promise((resolve, reject) => {
      if (typeof amount !== 'number') {
        reject(new Error('Amount must be a number'))
      }
      resolve(amount)
    })
  }

  doTask('r')
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })

  */