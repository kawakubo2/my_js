function sumup(n) {
    if (n === 1) return 1;
    return n + sumup(n - 1); // 10 + sumup(9)
}
console.log(sumup(10));