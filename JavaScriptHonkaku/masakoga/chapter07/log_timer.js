let map = new Map();

function fibonacci(n) {
    if (n == 0 || n == 1) return n;
    let r1;
    if (map.has(n - 2)) {
        r1 = map.get(n - 2);
    } else {
        r1 = fibonacci(n - 2);
        map.set(n - 2, r1);
    }
    let r2;
    if (map.has(n - 1)) {
        r2 = map.get(n - 1);
    } else {
        r2 = fibonacci(n - 1);
        map.set(n - 1, r2);
    }
    return r1 + r2;
}
console.time('MyTimer');
for (let i = 0; i < 43; i++) {
    console.log(`${i}: ${fibonacci(i)}`);
}
console.timeEnd('MyTimer');