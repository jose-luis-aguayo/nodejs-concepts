const fs = require('fs')      //used to read directories and files in a directory
const path = require('path')  //Provides utilities for working with files and directories
let not_allowed_ext = ['.js']

function answer() {

    
    const files = fs.readdirSync(__dirname)  //array with the list of files in specified path
    let absolute_paths = []

    files.forEach( fileName => {
        let { base, ext } =  path.parse(fileName)
        let stat = fs.statSync(fileName)
        
        if( !stat.isDirectory() && !not_allowed_ext.includes(ext)) {
            absolute_paths.push(path.join(__dirname, base))
        }

    })

    

    let out = path.join(__dirname, 'dir.json') //creating filename to be stored
    fs.writeFileSync(out, JSON.stringify(absolute_paths))

    console.log(require.resolve('fs'))
}

answer()