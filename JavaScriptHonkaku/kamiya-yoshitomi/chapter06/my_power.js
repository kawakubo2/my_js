function my_pow(a, n) {
    if (n === 0) return 1;
    return a * my_pow(a, n - 1);
}

const answer = my_pow(5, 3);
console.log(answer);