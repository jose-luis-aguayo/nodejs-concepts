/*

const { spawnSync } = require('child_process')

const result = spawnSync(
    "node",
    ['--print',
    "fs.readdirSync('.')"]
)

console.log(result.output[1].toString())


*/


'use strict'

const { spawn } = require('child_process')


//process.env.A_VAR_WE = 'JUST SET'

console.log(process.env)
const sp = spawn(process.execPath, ['-p', 'process.env'], {
  env: {VAR: 'ENV VAR'}
})


sp.stdout.pipe(process.stdout)