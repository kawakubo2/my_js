// 関数式, 関数リテラル, 無名関数, 匿名関数

const minus = function(val1, val2) {
    return val1 - val2;
}

let result = minus(10, 5);
console.log(result);

let subtract = minus;
console.log(subtract(10, 3));

let add = function(a, b) {
    return a + b;
}
let sub = function(a, b) {
    return a - b;
}

let mul = function(a, b) {
    return a * b;
}

let div = function(a, b) {
    return a / b;
}

function higher_func(func, num1, num2) {
    return func(num1, num2);
}

console.log(`加算: ${higher_func(add, 100, 50)}`);
console.log(`減算: ${higher_func(sub, 100, 50)}`);
console.log(`乗算: ${higher_func(mul, 100, 50)}`);
console.log(`除算: ${higher_func(div, 100, 50)}`);
console.log(`累乗: ${higher_func(Math.pow, 2, 10)}`);