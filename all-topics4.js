//03 the node binary
{
    node --print '1+1'
    node --abort-on-uncaught-exception archivo.js // 
}
//04 debugging and diagnostyics
{
    node --inspect archivo.js //runs the file in debuggeable mode
    node --inspect-brk archivo.js // runs the file and stops in the first line
}
//05 key javascript concepts
{
    //hierarchy
    const Wolf = {
        howl: function() { console.log(this.name + ':awooooo') }
    }

    const Dog = Object.create(Wolf, {
        woof: { value: function() { console.log(this.name + 'woof')}}
    })

    //class format

    class Wolf {
        constructor(name){
            this.name = name
        }

        howl() {
            console.log(this.name + ' howl')
        }
    }

    class Dog extends Wolf {
        constructor(name) {
            super(name)
        }

        ladrar() {
            console.log(this.name + ' ladrar')
        }
    }

    let obj = new Dog('perro 1')
    obj.ladrar()
    obj.howl()

}
//06 packages and dependencies
{
    npm install chalk
    npm install chalk --save-dev


}
//07 module system
{
    console.log(require.resolve('assert'))

    //commonjs import is require
    //ecma import is import from
}
//08 async
{
       const { promisify } = require('util')

       const timeout = promisify(setTimeout)

       timeout(300).then(res => {
           console.log('time lapsed')
       }).catch(err => {
           console.log('error issued')
       })
}
//09 event system
{
    const { EventEmitter } = require('events')

    const ee = new EventEmitter()

    ee.on('test1', (x) => {console.log(x)})

    ee.emit('test1', 'works')
}
//10 handling error
{
    //sync error

    function add(n1, n2) {
        if(typeof n1 !== 'number') throw new Error('N1 must be a number')
        return n1 + n2
    }

    //async error
    function add(n1, n2) {
        return new Promise((resolve, reject) => {
            if(typeof n1 !== 'number') reject(new Error('Must be a number'))
            resolve(n1+n2)
        })
    }
}
//11 buffers
{
    function answer() {
        return new Buffer.alloc(128)
    }
}
//12 streams
{
    process.stdin.pipe(process.stdout)
}
//13 file system 
{
    const fs = require('fs')
    const path = require('path')


    let listOfFiles = fs.readdirSync(__dirname)



    listOfFiles.forEach(file => {
        if (!fs.statSync(file).isDirectory()){
            console.log(path.parse(file).base)
            
        }
        
    })
}
//14 process os
{
    const process = require('process')
    console.log(process.memoryUsage.rss())

    const os = require('os')
    console.log(os.platform() == 'darwin')
}
//15 child process
{
    //spawn
    
}
//16 unit tests 
{

}