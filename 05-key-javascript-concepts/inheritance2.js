class Objeto {
    constructor(nombre){
        this.nombre = nombre
    }

    queSoy () { console.log('Soy un: ' + this.nombre) }
}


class Lapiz extends Objeto {
    constructor(nombre) {
        super(nombre)
    }

    escribir () { console.log(this.nombre) }
}

class Color extends Lapiz {
    constructor(nombre) {
        super(nombre)
    }

    colorear () { console.log('coloreo con ' + this.nombre)}
}




const objeto1 = new Color('Color')

objeto1.colorear()