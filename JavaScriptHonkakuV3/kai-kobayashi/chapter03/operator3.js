/*
小数点を含む10進数を2進数では表現できない場合がある
*/
const x = 0.2;
const y = 0.6;
console.log(x * 3 === y);

console.log(x * 10 * 3 === y * 10); // 左結合
console.log(x * 3 * 10 === y * 10);

if (Math.abs(x * 3 - y) < Number.EPSILON) {
    console.log('等しい');
} else {
    console.log('等しくない');
}
console.log(Number.EPSILON);

let a 
= 10;
let b;
let c;
let d;

d = c = b = a; // 代入演算子は右結合
console.log(`a=${a} b=${b} c=${c} d=${d}`);

let xxx = true;
xxx = !!xxx; // 右結合
console.log(`xxx=${xxx}`);

