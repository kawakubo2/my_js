/*
1～n(正の整数)の合計を求める
*/

function sumup1(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(sumup1(10));

/*
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9) + 10
((1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) + 9) + 10
...
(...(1) + 2)...)
*/

function sumup2(n) {
    if (n === 1) return 1;
    return n + sumup2(n - 1);
}

console.log(sumup2(100));