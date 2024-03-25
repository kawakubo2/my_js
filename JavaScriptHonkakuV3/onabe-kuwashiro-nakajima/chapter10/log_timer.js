function fibonacci(n) {
    if (n === 0 || n === 1) return n;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

console.time('fibonacci数の計算');
const n = 44;
console.log(`フィボナッチ数 ${n}: ${fibonacci(n)}`);
console.timeEnd('fibonacci数の計算');

const start = new Date();
console.log(`フィボナッチ数 ${n}: ${fibonacci(n)}`);
const end = new Date();
console.log(`fibonacci数の計算: ${end - start}`);