/*
 5! = 5 * 4 * 3 * 2 * 1
*/

function factorial1(n) {
    if (n != 0) {
        return n * factorial1(n - 1);
    }
    return 1;
}

console.log(factorial1(5));

function mysum(n) {
    if (n > 1) {
        return n + mysum(n - 1);
    }
    return 1
}
console.log(mysum(100));

let cache = new Map();

function getValue(n) {
    if (cache.has(n)) {
        return cache.get(n);
    } else {
        return null;
    }
}

function fibonacci(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    let temp1 = getValue(n - 1) ? getValue(n - 1) : fibonacci(n - 1);
    let temp2 = getValue(n - 2) ? getValue(n - 2) : fibonacci(n - 2);
    cache.set(n, temp1 + temp2);
    return temp1 + temp2;
}

let start = Date.now();
console.log(fibonacci(50));
let end = Date.now();
console.log(`処理時間: ${end - start}`)