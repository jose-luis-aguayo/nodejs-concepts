const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const out = path.join(__dirname, 'all.txt')

// Read the content of an array of files names
// and write all the content concatenated
// in the out path (all.txt).

// You cannot modify the read and write functions and all should 
// be promise based

function read(filename) {
    return promisify(fs.readFile)(filename)
}

function write(filename, content) {
    return promisify(fs.writeFile)(filename, content)
}

async function answer(filenames) {
    
    // Create an array of promises with the read function
    const readers = filenames.map(read)

    // await until all the promises return the content of each filename
    const contents = await Promise.all(readers)

    // Create a list of buffers so you can concat the 
    // the content and write out in a file.

    const buffers = contents.map(content => Buffer.from(content))

    // use the funciton write() to writeout  the content into the out path
    // use .toString() to convert the buffer.
    write(out, Buffer.concat(buffers).toString())

}


// The fancy way to create an array of filenames
// const filenames = Array.from(Array(3).fill(__filename))

// The simplest one though
const filenames = [__filename, __filename, __filename]

answer(filenames)