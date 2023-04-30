total = 0;
for (let i = 1; i <= 10; i++) {
    total += i;
}
console.log(total);

function my_sum(n) {
    if (n === 1) return 1;
    return n + my_sum(n - 1);
}

console.log(`再帰関数で解いた場合: ${my_sum(10)}`);