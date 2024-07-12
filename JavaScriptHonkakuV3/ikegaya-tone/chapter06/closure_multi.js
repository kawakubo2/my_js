function closure(init) {
    let counter = init;
    return function() {
        return ++counter;
    }
}

const myclosure1 = closure(1);
const myclosure2 = closure(100);

console.log(myclosure1());
console.log(myclosure2());
console.log(myclosure1());
console.log(myclosure2());
console.log(myclosure1());
console.log(myclosure2());