const { exec } = require('child_process')
const path = require('path')

// Create a subprocess, no matter what sbprocess 
// like spawn, exec, execSync, and change the current
// working directory to be ./root


function answer(command) {
    exec(command, 
        {
            cwd : path.join(__dirname, 'f1')
        }
    , (e, s, se) => {
        console.log('error' + e)
        console.log('stout' + s)
        console.log('stderr' + se)
        console.log(process.cwd())
    })

}

answer()