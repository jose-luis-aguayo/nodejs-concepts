
const fs = require('fs')
const path = require('path')

// Create a dir.json file with an array of absolute paths 
// if the extention is .js ignore them 
// if you run again the file must include the absolute path of dir.json

const not_allowed_ext = ['.js']
function answer() {
    
    // First get the file names and concat with the absolute path

    const files = fs.readdirSync(__dirname)
    const absolute_paths = []
    
    files.forEach(
        name => {
            const stat = fs.statSync(name)
            const { ext , base } = path.parse(name)
            if (!stat.isDirectory()  && !not_allowed_ext.includes(ext)) {
                absolute_paths.push(path.join(__dirname, base))
            } 
        }
    )
    // Once you are sure you have the paths in the right format
    console.log(absolute_paths)

    // Create the json file. -> remember JSON.stringify to write the array
    
    const out = path.join(__dirname, 'dir.json')
    fs.writeFileSync(out, JSON.stringify(absolute_paths))
}

answer()