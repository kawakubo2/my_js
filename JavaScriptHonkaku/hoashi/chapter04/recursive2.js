function sumup(n) {
    if (n !== 1) {
        return n + sumup(n - 1);
    }
    return 1;
}

console.log(sumup(10));