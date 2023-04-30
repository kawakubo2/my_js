function foo(init) {
    let counter = init;
    return function() {
        return ++counter;
    };
}

const myClosure1 = foo(1);
const myClosure2 = foo(100);

console.log(myClosure1());
console.log(myClosure2());
console.log(myClosure1());
console.log(myClosure2());
console.log(myClosure1());
console.log(myClosure2());