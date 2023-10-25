function factorial(n) {
    if (n != 0) return n * factorial(n - 1);
    return 1;
}

console.log(factorial(5));

function f2(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(f2(5));