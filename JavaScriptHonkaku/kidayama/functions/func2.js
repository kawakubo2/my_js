/*
 2つの数値の加減乗除を行い、
 その結果を返す関数。
 引数1: 数値
 引数2: 数値
 引数3: 演算子(+,-,*,/)
 例) four_operations(5, 3, '*') ---> 15
 */
function four_operations(a, b, operator) {
    let result;
    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            throw new Error("サポートされていない演算子: " + operator);
    }
    return result;
}

const x = 8;
const y = 5;

console.log(four_operations(x, y, '+'));
console.log(four_operations(x, y, '-'));
console.log(four_operations(x, y, '*'));
console.log(four_operations(x, y, '/'));
try {
    console.log(four_operations(x, y, '$'));
} catch (e) {
    console.log(e.message);
}