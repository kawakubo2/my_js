// arithmetic.js

// 後置インクリメント
let x = 10;
console.log(`x = ${x}`);
let y = x++;
console.log(`x = ${x}, y = ${y}`);

// 前置インクリメント
let u = 10;
let v = ++u;
console.log(`u = ${u}, v = ${v}`);

let w = 0.2;
let z = 0.6;

console.log(w * 3);
console.log(w * 10 * 3 == z * 10);
// console.log(w * 3 * 10 == z * 10);

w = 0.25;
z = 0.5;
console.log(w * 2 == z);