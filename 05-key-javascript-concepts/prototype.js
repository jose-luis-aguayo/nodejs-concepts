let wolf = {} //creation of the object which has a prototype 

wolf = {  //assigning a value to the object
    howl: function () { console.log(this.name + ' : awoooooooo') },
    feature: 'just a feature'
}


let dog = Object.create(wolf, { //creating a object using wolf as a prototype so it will inherit the attributes of wolf like howl
    woof: {value : function() { console.log(this.name + ' : woof') }}
})

let rufus = Object.create(dog, {
    name: {value: 'rufus the dog'}
})

rufus.woof()
console.log(rufus.feature)
console.log(Object.getPrototypeOf(wolf));