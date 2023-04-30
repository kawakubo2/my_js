const fibonacci = n => {
    if (n === 0 || n === 1) return n;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

console.time('MyTimer');
console.log(`fibonacchi(45)=${fibonacci(45)}`);
console.timeEnd('MyTimer');