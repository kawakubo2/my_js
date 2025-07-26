let x = 0.2;
let y = 0.6;

console.log(x * 3 === y);
console.log(x * 10 * 3 === y * 10);
console.log(x * 3 * 10 === y * 10);

// 加減乗除は左結合

let a;
let b;
let c;

// 右結合
a = b = c = 5;

console.log(a, b, c);

let s2 = ''; // faltyな値
console.log(!!s2); // から文字列をboolean型のfalseに変換する方法
console.log(typeof(!!s2));

let s3 = 'abc'
let b1 = Boolean(s3);
console.log(typeof(b1), b1);

let n3 = 123;
let s4 = String(n3);
console.log(typeof(s4), s4);

let s5 = "1.2345";
let f1 = Number(s5);
console.log(typeof(f1), f1);
