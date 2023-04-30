function addByStep(init, step) {
    let num = init;

    function inner() {
        num += step;
        return num;
    }
    return inner;
}

const add2 = addByStep(100, 2);
const add5 = addByStep(200, 5);

console.log(add2());
console.log(add2());
console.log(add2());

console.log(add5());
console.log(add5());
console.log(add5());