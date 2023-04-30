function factorial(n) {
    if (n !== 0) return n * factorial(n - 1);
    return 1;
}

console.log(factorial(5));

let a = 1;
for (let i = 5; i >= 1; i--) {
    a *= i;
}
console.log(a);