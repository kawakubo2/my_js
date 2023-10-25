function f1(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(f1(10));

function sumup(n) {
    if (n !== 1) return n + sumup(n - 1);
    return 1;
}

console.log(sumup(10));
