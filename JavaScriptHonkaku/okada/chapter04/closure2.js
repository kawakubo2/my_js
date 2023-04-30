function abc(init) {
    let counter = init;

    return function() {
        return ++counter;
    }
}

let myClosure1 = abc(1);
let myClosure2 = abc(100);

console.log(myClosure1());
console.log(myClosure2());
console.log(myClosure1());
console.log(myClosure2());