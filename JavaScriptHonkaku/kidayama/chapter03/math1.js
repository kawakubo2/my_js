const num1 = 1.000000001;
const num2 = 1.999999999;

console.log(Math.ceil(num1));
console.log(Math.floor(num2));

const num3 = 1.234567;
console.log(Math.round(num3));

let num4 = 1.234567;
num4 *= Math.pow(10, 4);
num4 = Math.round(num4);
num4 /= Math.pow(10, 4);
console.log(num4);

console.log(2 ** (1/2));
console.log(Math.sqrt(2));
console.log(Math.cbrt(8));
console.log(8 ** (1/3));
console.log(1024 ** (1/10));

const x = 3;
const y = 4;
console.log(Math.sqrt(x ** 2 + y ** 2));
console.log(Math.hypot(x, y));