
// take and cook ✅
// prototype -> draw and erase ✅
// prototype of prototype -> paint and watch 

const powers = {
    draw : function() {console.log('draw')},
    erase: function() {console.log('erase')}
}

const answer = Object.create(powers, {
    take : {
        value : function() {console.log('🦖')}
    },
    cook : {
        value : function() {console.log('🥘')}
    }
})

answer.prototype = Object.create({
    paint: function() { console.log('🖌')},
    watch: function() { console.log('👀')}
})

console.log(Object.getPrototypeOf(answer.prototype))