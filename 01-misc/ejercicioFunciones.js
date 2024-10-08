function fn(n) {
    return (c) => { return console.log(this.n * c)}
}

fn(3)