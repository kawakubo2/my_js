function abc(init) {
    let counter = init;
    return function() {
        return ++counter;
    }
}

const closure1 = abc(100);
const closure2 = abc(200);
console.log(closure1());
console.log(closure2());
console.log(closure1());
console.log(closure2());
console.log(closure1());
console.log(closure2());