const readline  = require('readline-sync');

function fibonacci(n) {
    if (n === 0 || n === 1) return n;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log('フィボナッチ数を求めます');
const num = Number.parseInt(readline.question('正の整数値を入力してください: '));

console.time('fib');
const result = fibonacci(num);
console.timeEnd('fib');
console.log(`フィボナッチ数${num}は${result}です`);