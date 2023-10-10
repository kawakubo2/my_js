const x = 1.23456;

console.log(Math.ceil(x));  // 切上げ関数
console.log(Math.floor(x)); // 切り捨て関数
console.log(Math.round(x)); // 四捨五入関数

// 小数点第3位を切り捨て第2位まで求める方法
const a1 = Math.floor(x * 100) / 100;

let n = 3;
// let answer = Math.floor(x * Math.pow(10, n)) / Math.pow(10, n);
let answer = Math.floor(x * 10 ** n) / 10 ** n;
console.log(`${n}を小数点第3位で切り捨て第2位まで求めると${answer}`);

function myround(num, prec, func) {
    return func(num * 10 ** prec) / 10 ** prec;
}
console.log(myround(x, 2, Math.floor));
console.log(myround(x, 2, Math.ceil));
console.log(myround(x, 2, Math.round));

