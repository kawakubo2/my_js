let x = 0.2;
let y = 0.6;

const epsilon = 1.0E-12
console.log((Math.abs(x * 3 - y) < epsilon) ? '等しい' : '等しくない');

console.log(100 / 'a');
console.log(typeof NaN);

let numbers = [-32, -5, -18, -28, -123, -35, -6];

let max = Number.NEGATIVE_INFINITY;

for (let n of numbers) {
    if (n > 0 && n > max) {
        max = n;
    }
}
if (max !== Number.NEGATIVE_INFINITY) {
    console.log(`正の最大値は${max}`);
} else {
    console.log('正の数が存在しません。');
}

console.log(10 / 0);
console.log(-10 / 0);

let number = 65535;
console.log(number.toString(2));
console.log(number.toString(8));
console.log(number.toString(16));
console.log(number.toString(31));

let number2 = 2.5;
console.log((number2 === Math.floor(number2)));
console.log(Number.isInteger(number2));
let number3 = 3;
console.log((number3 === Math.floor(number3)));
console.log(Number.isInteger(number3));