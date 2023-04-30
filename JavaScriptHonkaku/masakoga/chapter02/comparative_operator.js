let n = 10;
let m = '10';

console.log(n == m);
console.log(n === m);

// falseとみなす値
let a = 0;
console.log(a == false);
let b = '';
console.log(b == false);
let c = [];
console.log(c == false);

let message = '';
message = message || '特になし'; 
console.log(message);

function even(n) {
    return n % 2 == 0;
}

even(10) || console.log('奇数です。');

let a1 = 10;
let b1 = 8;
let c1 = 9;
if (a1 > 5 && (b1 *= 2)) {
    c1 += 100;
}
console.log('a1=' + a1);
console.log('b1=' + b1);
console.log('c1=' + c1);

let num1 = 10; // 1010
let num2 = 12; // 1100

// ビット演算
console.log(num1 & num2);
console.log(num1 | num2);
console.log(num1 ^ num2);

// シフト演算
let num3 = 3; // 000000011;
num3 <<= 3;   // 000011000;

let array1 = [1, 2, 3, 4, 5];
if (typeof array1 === 'object' && array1 instanceof Array) {
    console.log('配列である');
}

if (Array.isArray(array1)) {
    console.log('配列である');
}

for (let n of array1) {
    console.log(n);
}

let array2 = { x: 1, y: 2, z: 3};

for (let k in array2) {
    console.log('key=' + k + ', value=' + array2[k]);
}
