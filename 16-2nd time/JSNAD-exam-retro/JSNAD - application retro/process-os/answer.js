'use strict'
const os = require('os')

// If the os is linux print 1, darwin 2 and windows 3

if(os.platform() === 'linux') {
    process.exit(1)
}
if(os.platform() === 'darwin') {
    process.exit(2)
}

if(os.platform() === 'win32') {
    process.exit(3)
}
