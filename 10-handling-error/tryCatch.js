

/*
function doTask (amount) {
    if (typeof amount !== 'number') throw new TypeError('amount must be a number')
    if (amount <= 0) throw new RangeError('amount must be greater than zero')
    if (amount % 2) {
      const err = Error('amount must be even')
      err.code = 'ERR_MUST_BE_EVEN'
      throw err
    }
    return amount / 2
  }
  
  try {
    const result = doTask(-1)
    console.log('result', result)
  } catch (err) {
    if (err instanceof TypeError) {
      console.error('wrong type')
    } else if (err instanceof RangeError) {
      console.error(err.message)
    } else if (err instanceof OddError) {
      console.error('cannot be odd')
    } else {
      console.error('Unknown error', err)
    }
  }

  */