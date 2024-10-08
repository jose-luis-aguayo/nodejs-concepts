const { EventEmitter } = require('events')
    const ee = new EventEmitter()

    ee.on('imprimir', x => { console.log(x)} )
    ee.emit('imprimir', 'hola')