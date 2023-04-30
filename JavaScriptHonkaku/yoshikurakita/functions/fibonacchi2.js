let map = new Map();

function fibonacci(n) {
    if (n == 0 || n == 1) return n;
    let n1 = null;
    let n2 = null;
    if (!map.has(n - 2)) {
        n1 = fibonacci(n - 2);
        map.set(n - 2, n1);
    } else {
        n1 = map.get(n - 2)
    }
    if (!map.has(n - 1)) {
        n2 = fibonacci(n - 1);
        map.set(n - 1, n2);
    } else {
        n2 = map.get(n - 1)
    }
    return n1 + n2;
}

let start = Date.now();

let answer = fibonacci(50);

let end = Date.now();
console.log((end - start) + 'ms');
console.log(answer);