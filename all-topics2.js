//03 the node binary
{
    node --abort-on-uncaught-exception file.js
}
//04 debugging and diagnostyics
{
    node --inspect-brk file.js
    node --inspect file.js
}
//05 key javascript concepts
{
    //Functions first class citizens
    const f1 = function () {console.log('hola')}

    //prototypes
    const wolf = {
        howl: { value: function() { console.log(this.name + ':awoooooooo')} }
    }

    const dog = Object.create(wolf, {
        woof: { value: function () { console.log(this.name + ':wooof') }}
    })

    //class syntax

    class Wolf {
        constructor(name) {
            this.name = name
        }

        howl () { console.log(this.name + ':awooooooo') }
    }

    class Dog extends Wolf {
        constructor(name){
            super(name)
        }
        woof () { console.log(this.name + ': woof') }
    }

    const dog1 = new Dog('rufus')
    dog1.howl()
}
//06 packages and dependencies
{
    npm install chalk //saves in dependencies
    npm install --save-dev chalk //devDependencies

    //npm install github:<githubname>/<githubrepo>[#<commit-ish>]:
    npm install github:chalk/chalk#semver:3.0.0
}
//07 module system
{

}
//08 async
{
    const { promisify } = require('util')

    const timeout = promisify(setTimeout)

    timeout(300).then(res=>{
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

    const res = await timeout(300)
    
}
//09 event system
{
    const { EventEmitter } = require('events')
    const ee = new EventEmitter()

    ee.on('imprimir', x => { console.log(x)} )
    ee.emit('imprimir', 'hola')

}
//10 handling error
{
    //sync
    function validAge (age) {
        if(age < 18) throw new Error('Not now')
    }

    //Async
    function validAge (age) {
        return new Promise( (resolve, reject) => {
            if(age < 18) {
                reject(new Error('not now'))
            } else {
                resolve('ok')
            }
        } )
    }

}
//11 buffers
{
    const buffer1 = Buffer.alloc('hola').fill('j')
    console.log(buffer1.toString())

    const buffer = Buffer.from('hola').fill('h')
    console.log(buffer1.toString())

}
//12 streams
{
    const fs = require('fs')

    const readStream = fs.createReadStream('big.file')
    const writeStream = fs.createWriteStream('out.txt')

    readStream.on('data', (chunk) => {

    })

    readStream.pipe(process.stdout)
}
//13 file system 
{
    const fs = require('fs')

    function answer (file, text) {
        fs.appendFileSync(file, text)  
    }
}
//14 process os
{
    const os = require('os')

    function answer ( htmlParagraph ) {
        return htmlParagraph.replace('<br>', os.EOL)
    }
}
//15 child process
{
    //spawn
    
}
//16 unit tests NO