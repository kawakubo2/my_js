function sumup(n) {
    if (typeof n !== 'number' || n <= 0) {
        throw new Error(`引数が0以下になっています: ${n}`);
    }
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

const num = 10;
try {
    console.log(`1～${num}までの総和は${sumup(num)}`);
} catch (e) {
    console.error(e.message);
}

function sumup2(n) {
    if (n == 1) return 1;
    return sumup(n - 1) + n;
}
console.log(`1～${num}までの総和は${sumup2(num)}`);