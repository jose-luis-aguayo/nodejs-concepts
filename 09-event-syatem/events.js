'use strict'

const { EventEmitter } = require('events')

const ee = new EventEmitter()

ee.once('imprimir', (a,b,c) => {console.log(c)})

ee.emit('imprimir', 'A','b','c')
ee.emit('imprimir', 'A','b','c')
ee.emit('imprimir', 'A','b','c')
ee.emit('imprimir', 'A','b','c')