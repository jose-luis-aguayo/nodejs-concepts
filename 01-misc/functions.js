/*
const obj = {
    fn1 : function fn1 (param1) {console.log(param1)},
    fn2 : function fn2 (param1) {console.log(this.id)},
    id : 1
}

obj.fn2();

const obj2 = {
    id : 'hola',
    fn1 : obj.fn2
}

obj2.fn1()
*/


/*
function context() { console.log(this.id)}

//Invoca la funcion context y el metodo call asigna su contexto "THIS"
//de manera que dentro de la funcion puedo usar this.example con el contexto que le pase a call
context.call({id: 'hola'})
*/


//Fat arrow functions o LAMBDA no tienen contexto THIS toman el que está mas cercano.

////////////////////////////////////////////////////////

function normalFunction () {}
const fatArrowFunction = () => {}


//Fat arrow functions no tienen una propiedad Prototype 
console.log(typeof normalFunction.prototype)
console.log(typeof fatArrowFunction.prototype)

