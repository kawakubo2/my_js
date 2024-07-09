const start = new Date().getTime();
const map = new Map();
function fibonacci(n) {
    if (map.has(n)) return map.get(n)
    if (n === 0 || n === 1) return n;
    const result = fibonacci(n - 2) + fibonacci(n - 1);
    map.set(n, result);
    return result;
}

const end = new Date().getTime();
console.log(fibonacci(45));
console.log(`処理時間: ${end - start}`);