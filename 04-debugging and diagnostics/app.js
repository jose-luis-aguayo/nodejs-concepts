function f (n = 99) {
    if (n === 0) throw Error() 
    debugger
    f(n - 1)
}

f()


//in order to start an app in debug mode and break on first line


//node --inspect-brk app.js
//node --inspect-brk app.js
//node --inspect-brk app.js
//node --inspedt-brk app.js
//node --inspect-brk app.js
//node --inspect-brk app.js
//node --inspect-brk app.js
//node --inspect-brk app.js
//node --inspect-brk app.js