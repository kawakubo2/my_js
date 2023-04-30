// ユークリッドの互除法
function gcd(x, y) {
    if (y > x) {
        let tmp = x;
        x = y;
        y = tmp;
    }
    let m = x % y;
    if (m === 0) return y;
    return gcd(y, m);
}

console.log(gcd(1024, 768));
console.log(gcd(30, 18));
console.log(gcd(32, 18));
console.log(gcd(32, 15));