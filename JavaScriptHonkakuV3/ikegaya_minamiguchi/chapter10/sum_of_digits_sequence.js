const input = require('readline-sync');

const map = new Map();
map.set(0, 1);
map.set(1, 1);



function A(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let a;
    if (map.has(n - 1)) {
        a = map.get(n - 1);
    } else {
        a = A(n - 1);
        map.set(n - 1, a);
    }
    return a + f(a);
}

function f(num) {
    let total = 0;
    while (num > 0) {
        total += num % 10
        num = Math.floor(num / 10);
    }
    return total;
}

const n = Number.parseInt(input.question(''))

console.log(A(n));