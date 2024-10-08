
/*
const { execSync } = require('child_process')

const output = execSync (
    `node -e "console.log('subprocess std output')"`
)

console.log(output.toString())

*/


const { execSync } = require('child_process')
const cmd = process.platform === 'win32' ? 'dir' : `node -p "fs.readdirSync('.')"`
const output = execSync(cmd)
console.log(output.toString())