/*
class Wolf {
    constructor ( name ) {
        this.name = name
    }
    howl () { console.log(this.name + ' : awoooooooooo3') }
}

class Dog extends Wolf {
    constructor ( name ) {
        super(name + ' the dog')
    }
    woof () { console.log(this.name + ' : woof ') }
}
*/
/******************** */

class Padre {
    constructor ( nombre, apellido ) {
        this.nombre = nombre
        this.apellido = apellido
    }

    hablar () {
        console.log(this.nombre + this.apellido + ' : habla')
    }
}

class Hijo extends Padre {
    constructor ( nombre, apellido ) {
        super ( nombre, apellido )
    }
}

const OBJ_1 = new Hijo('Pepe', 'aguilar')

OBJ_1.hablar()