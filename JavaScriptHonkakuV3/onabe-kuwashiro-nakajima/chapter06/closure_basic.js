function func(init) {
    let counter = init;
    return function() {
        return ++counter;
    }
}

const myClosure1 = func(1);
const myClosure2 = func(100);
console.log(myClosure1());
console.log(myClosure2());
console.log(myClosure1());
console.log(myClosure2());
console.log(myClosure1());
console.log(myClosure2());