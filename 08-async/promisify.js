
/*const { readFile } = require('fs').promises
const files = [__filename, 'not a file', __filename]
const print = (results) => {
  results
    .filter(({status}) => status === 'rejected')
    .forEach(({reason}) => console.error(reason))
  const data = results
    .filter(({status}) => status === 'fulfilled')
    .map(({value}) => value)
  const contents = Buffer.concat(data)
  console.log(contents.toString())
}

const readers = files.map((file) => readFile(file))

Promise.allSettled(readers)
  .then(print)
  .catch(console.error)


  */


  var promisify = require('util').promisify

  //async function
  function slow(cb) {   
      setTimeout(function () { 
          console.log('Running slow')
      }, 1000)

      cb(null, 'Success')
  }

  //using promisify
  var promise = promisify(slow)

  //now it has promise form
  promise().then(res => {
      console.log(res)
  }).catch(err => {
      console.log(err)
  })

  //converting to async function sugar syntax
  async function main() {
    try{
      var res = await promise()
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  
  main()