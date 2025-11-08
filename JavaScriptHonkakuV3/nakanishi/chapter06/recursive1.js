// 1～nの総和を求める
function sumup(n) {
    if (n === 1) return 1;
    return sumup(n - 1) + n;
}

console.log(sumup(10));