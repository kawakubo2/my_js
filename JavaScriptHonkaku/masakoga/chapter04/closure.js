function outer_func(init) {
    let counter = init;
    return function() {
        return ++counter;
    };
}

let myclosure = outer_func(1);
console.log(myclosure());
console.log(myclosure());
console.log(myclosure());
