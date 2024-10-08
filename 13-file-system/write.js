const { join } = require('path')
const { readFileSync, writeFileSync, write } = require('fs')

const contents = readFileSync(__filename, {encoding: 'utf8'})

writeFileSync(join(__dirname, 'out.txt'), contents.toUpperCase())

