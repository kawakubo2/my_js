const cache = new Map();
const fibonacci = (n) => {
    if (n == 0 || n == 1) return n;
    const getValue = (m) => {
        let result;
        if (cache.has(m)) {
            result =  cache.get(m);
        } else {
            result = fibonacci(m);
            cache.set(m, result);
        }
        return result;
    }
    return getValue(n - 2) + getValue(n - 1);
}

let start = Date.now();
console.log(fibonacci(60));
let end = Date.now();
console.log('処理時間:' + (end - start) + 'ms');