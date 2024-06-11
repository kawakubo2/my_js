const x1 = 1.0000001;
const x2 = 1.9999999;
const x3 = 1.23456;

console.log(Math.ceil(x1));
console.log(Math.floor(x2));
console.log(Math.round(x3));

const x4 = Math.round(x3 * (10 ** 3)) / 10 ** 3;
console.log(x4);
