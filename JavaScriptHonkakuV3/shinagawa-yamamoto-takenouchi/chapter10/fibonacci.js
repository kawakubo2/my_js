function fibonacci(n) {
    if (n === 0 || n === 1) return n;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

let num = 45;
console.time('Fibonacci');
console.log(`フィボナッチ数${num}は${fibonacci(num)}`);
console.timeEnd('Fibonacci');