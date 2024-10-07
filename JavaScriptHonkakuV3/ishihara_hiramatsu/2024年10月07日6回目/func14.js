const fibMap = new Map();
function fibonacci(n) {
    if (n < 0) throw new TypeError(`引数エラー: ${n}`);
    if (n === 0) return 0;
    if (n === 1) return 1;
    const fib1 = getFib(n - 1);
    const fib2 = getFib(n - 2);
    return fib1 + fib2;
}
function getFib(n) {
    if (fibMap.has(n)) {
        return fibMap.get(n);
    } else {
        const f = fibonacci(n);
        fibMap.set(n, f);
        return f;
    }
}

const start = Date.now();
console.log(fibonacci(60));
console.log(`処理時間: ${Date.now() - start}`);