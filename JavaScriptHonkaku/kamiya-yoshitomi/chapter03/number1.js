// number1.js
let x = 0.2;
let y = 0.6;

if (x * 10 * 3 === y * 10) {
    console.log('等しい');
}

if (Math.abs(x * 3 - y) < Number.EPSILON) {
    console.log('等しい');
}

const number = 12345;
console.log(number.toString(2));
console.log(number.toString(8));
console.log(number.toString(16));

const number2 = 10 / 3;
console.log(number2.toFixed(3));

const str2 = "123";
const int1 = Number.parseInt(str2);
console.log(int1 * 100);

const str3 = "123.456";
const float1 = Number.parseFloat(str3);
console.log(float1 / 3);

const str4 = "10";
const int2 = str4 - 0; // 文字列型 - 数値型 ---> 数値型
console.log(int2 * 2);