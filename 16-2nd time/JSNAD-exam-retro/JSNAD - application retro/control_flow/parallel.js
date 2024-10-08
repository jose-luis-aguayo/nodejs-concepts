const { readFile } = require('fs')

// run in parallel the readFile function for each file
// pass to the stderr if an error exist.


// console.error writes in to the stderr stream


function answer( fileA, fileB, fileC) {

    // Becuase of the callback based nature of readFile , it automatically runs in parallel 
    // the first in resolve the content will be printed

    readFile(fileA, (err, content) => {
        if(err) {
            console.error(err)
            return
        }

        console.log(content.toString())
    })

    readFile(fileB, (err, content) => {
        if(err) {
            console.error(err)
            return
        }

        console.log(content.toString())
    })

    readFile(fileC, (err, content) => {
        if(err) {
            console.error(err)
            return
        }

        console.log(content.toString())
    })
}


answer(__filename, __filename, __filename)