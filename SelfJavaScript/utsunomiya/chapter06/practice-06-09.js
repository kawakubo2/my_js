const plus = function(a, b) {
    return a + b;
};
const minus = function(a, b) {
    return a - b;
}

const calc = function(val1, val2, callback) {
    return callback(val1, val2);
}

console.log(calc(1, 2, plus));
console.log(calc(10, 2, plus));
console.log(calc(10, 2, minus));