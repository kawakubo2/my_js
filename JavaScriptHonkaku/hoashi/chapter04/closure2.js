const closure = init => {
    let counter = init;
    return () => ++counter;
}

const myClosure1 = closure(1);
const myClosure2 = closure(100);
console.log(myClosure1());
console.log(myClosure2());
console.log(myClosure1());
console.log(myClosure2());