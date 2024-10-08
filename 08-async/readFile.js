const { readFile } = require('fs')

readFile(__filename, (err, contents) => {
    console.log(__filename)
  if (err) {
    console.error(err)
    return
  }
  console.log(contents.toString())
})