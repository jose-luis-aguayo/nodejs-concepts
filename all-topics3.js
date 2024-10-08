
//03 the node binary
{
    node --print '1+1'
    node --abort-on-uncaught-exception archivo.fs
}
//04 debugging and diagnostyics
{
    node --inspect archivo.js
    node --inspect-brk archivo.js
}
//05 key javascript concepts
{
    const Wolf = {
        howl: { value: function() { console.log(this.name + ':awoooooo')} }
    }

    const Dog = Object.create(Wolf, {
        woof: { value: function() { console.log(this.name + 'wooof')}}
    })

    class Wolf {
        constructor(name) {
            this.name = name 
        }

        howl() {console.log(this.name + ': awooooooo')}
    }

    class Dog extends Wolf {
        constructor(name) {
            super(name)
        }

        woof() { console.log(this.name + ': wooof')}
    }

    const dog1 = new Dog('perro')
    dog1.woof()
}
//06 packages and dependencies
{
    npm install chalk

    npm install chalk --save-dev

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

    timeout(300).then( res => {
        console.log(res)
    }).catch(err => {
        console.log(res)
    })
}
//09 event system
{
    const { EventEmitter } = require('events')
    const ee = new EventEmitter()

    ee.on('imprimir', (x) => { console.log(x)} )
    ee.emit('imprimir', 'hola mundo')
}
//10 handling error
{
    function validAge(age) {
        if(age < 18) throw new Error('must be older')
    }

    function validAge(age) {
        return new Promise((resolve, reject) => {
            if(age < 18) {
                reject(new Error('must be older'))
            } else {
                resolve('is ok')
            }
        }) 
    }
}
//11 buffers
{
    function answer(text) {
        return Buffer.from(text).fill('h')
    }

    function answer(text) {
        return Buffer.alloc(text)
    }

}
//12 streams
{
    const fs = require('fs')

    const readStream = fs.createReadStream('big.file')

    readStream.on('data', (chunk) => {
        
    })
}
//13 file system 
{

}
//14 process os
{

}
//15 child process
{
    let cp = require('child_process')

    let path = '/Users/joseluis/Documents/code'
    let command = 'ls'


    let out = cp.execSync(command, {
        cwd: path
    })

    console.log(out.toString())
    
}
//16 unit tests NO
{
    
}