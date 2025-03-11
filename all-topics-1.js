//03 the node binary
{
    node --print "fs.readdirSync('.')"
    node --abort-on-uncaught-exception file.js
}
//04 debugging and diagnostyics
{
    We need to set debug word in some area of the text
    In order to break in the first line 

    node --inspect-brk file.js

    node --inspect file.js //to run in inspect mode
}
//05 key javascript concepts
{
    //functions, first class citizens

    function f1 () { }
    const function1 = { id: 222, fn: function () { } }    

    //prototipos

    const wolf = {
        howl: function () { console.log(this.name + ': awoooooo') }
    }

    const dog = Object.create(wolf, {
        woof: {value: function() { console.log(this.name + ':woof') }}
    })  //Dog will also have howl function

    //class syntax

    class Wolf {
        constructor (name) {
            this.name = name
        } 
        howl () { console.log(this.name + ': awoooo') }
    }

    class Dog extends Wolf {
        constructor ( name ) {
            super ( name + ' the dog')
        }
        woof () { console.log(this.name + ': woof') }
    }

    const rufus = new Dog('hola')
    rufus.woof()
    rufus.howl()
}
//06 packages and dependencies
{
    npm install chalk //saves file to dependencies
    npm install --save-dev chalk //saves the file to devDependencies

    npm install --production // will save only dependencies packages
    npm install              // will install all packages

    //docs
    //https://docs.npmjs.com/cli/v7/commands/npm-install
    //npm install from repo example chalk
    //https://github.com/chalk/chalk 

    //npm install github:<githubname>/<githubrepo>[#<commit-ish>]:
    npm install github:chalk/chalk#semver:3.0.0-beta.2    
}
//07 module system
{

}
//08 async
{
    var promisify = require('util').promisify

    //async function
    function slow(cb) {   
        setTimeout(function () { 
            console.log('Running slow')
        }, 1000)
  
        cb(null, 'Success')
    }
  
    //using promisify
    var promise = promisify(slow)
  
    //now it has promise form
    promise().then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
  
    //converting to async function sugar syntax
    async function main() {
      try{
        var res = await promise()
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
    
    main()
    
}
//09 event system
{
    const { EventEmitter } = require('events')

    const ee = new EventEmitter()

    ee.once('imprimir', (a,b,c) => {console.log(c)})

    ee.emit('imprimir', 'A','b','c')
}
//10 handling error
{
    //sync
    function validAge ( age ) {
        if ( age < 10 ) {
            throw new Error('Must be older than 18')
        } else {
            return 'its ok'
        }
    }
    console.log(validAge(17))

    //async
    function validAge ( age ) {
        return new Promise((resolve, reject) => {
          if (age < 18) {
            reject(new Error('Must be greater than 18'))
          } else {
            resolve ('its ok')
          }
        })
      }
      
      validAge(17)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
}
//11 buffers
{
    //Buffer from string
    const s1 = new Buffer.from('hola mundo')
    console.log(s1.toString())
}
//12 streams
{

    const fs = require('fs');

    const readStream = fs.createReadStream('small.file');
    const writeStream = fs.createWriteStream('file.out');

    readStream.on('data', (chunk) => {
        
    });

    readStream.pipe(process.stdout);
}
//13 file system 
{
    const fs = require('fs')

    function answer(file, text) {
        fs.appendFileSync(file, text)
    }
}
//14 process os
{
    const os = require('os')
    function answer( htmlParagraph ) {
        return htmlParagraph.replace('<br>', os.EOL)
    }
}
//15 child process
{
    //spawn
    
}
//16 unit tests NO
