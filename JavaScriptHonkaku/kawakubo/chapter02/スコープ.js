let total = 0;

for (let i = 1; i <= 1000; i++) {
    total += i;
    if (total > 1000) {
        break;
    }
}

// console.log('i=' + i);

function add(x, y) {
    return x + y;
}

let a = add;
console.log(a(100, 200));