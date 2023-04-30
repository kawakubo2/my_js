function factorial(n) {
    if (n != 0) {
        return n * factorial(n - 1);
    }
    return 1;
}

console.log(factorial(5));

function sumup(num) {
    if (num != 0) return num + sumup(num - 1);
    return 0;
}

console.log(sumup(10));