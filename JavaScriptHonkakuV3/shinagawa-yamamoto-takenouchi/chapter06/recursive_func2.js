let total = 0;
for (let i = 1; i <= 10; i++) {
    total += i;
}
console.log(total);

function sumup(n) {
    if (n > 1) return n + sumup(n - 1);
    return 1;
}

console.log(sumup(10));