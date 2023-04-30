let x = 8;
let y = 3;
console.log(x / y);

x = 10;
y = 4;
console.log(10 % 4);

let numbers = [5, 4, 8, 13, 6, 9];
for (let n of numbers) {
    if (n % 2 === 0) {
        console.log(`${n}は偶数です。`);
    } else {
        console.log(`${n}は奇数です。`);
    }
}

const lot_3 = 8212

let num1 = 18318212;
let num2 = 12871942;

if (num1 % 10000 === lot_3) {
    console.log(`${num1}は3等賞です！`);
}
if (num2 % 10000 === lot_3) {
    console.log(`${num1}は3等賞です！`);
}

let num3 = 10;
num3 = num3 + 1;
console.log(num3);
num3 += 1;
console.log(num3);
num3++;
console.log(num3);

let num4 = 10;
console.log(++num4);

let num5 = 10;
console.log(num5++);
console.log(num5);

let a = 0.2;
let b = 0.6;

console.log(a * 3);
console.log(a * 3 === b);
console.log(a * 10 * 3 === b * 10); // 左結合
console.log(a * 3 * 10 === b * 10);

let m = 1;
let c = !!m; // 右結合

console.log(Number.EPSILON);
console.log(Math.abs(a * 3 - b) < Number.EPSILON);

let num6 = 10;
num6 += 5; // num6 = num6 + 5
console.log(num6);