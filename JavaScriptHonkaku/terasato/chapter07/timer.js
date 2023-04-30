const map = new Map();
const fibonacci = n => {
    if (n === 0 || n === 1) return n;
    let f2;
    if (map.has(n - 2)) {
        f2 = map.get(n - 2);
    } else {
        f2 = fibonacci(n - 2);
    }
    let f1;
    if (map.has(n - 1)) {
        f1 = map.get(n - 1);
    } else {
        f1 = fibonacci(n - 1);
    }
    return f2 + f1;
}
let n = 20;
//console.time('fibonacci');
let answer = fibonacci(n);
//console.timeEnd('fibonacci');
console.log(`fibonacci(${n}=${answer})`)
