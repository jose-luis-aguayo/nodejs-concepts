function f (n = 99) {
    if (n === 0) throw Error()
    f(n-1)
}

f()

//a flag goes always after node keyword


// Dynamic evaluatio

// node --check app.js throws output when error, otherwise empty output
// node --check app.js
// node --check app.js
// node --check app.js throws output when there's an error
// node --check app.js throws output when there's an error
// node --check app.js


// node --print "1+1" will evaluate code and print the output in command line
// node --eval "1+1" will evaluate code and will not print any output
// node --eval "1+1" will evaluate code and will not print any output

//For example, the following would print all the files with a .js extension in the current working directory in which the command is run:


//node -p "fs.readdirSync('.').filter((f) => /.js$/.test(f))"
//node -p "fs.readdirSync('.').filter((f) => /.js$/.test(f))"
//node -p "fs.readdirSync('.').filter((f) => /.js$/.test(f))"
