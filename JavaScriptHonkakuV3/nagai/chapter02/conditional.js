const score = 80;
console.log(score >= 70 ? '合格': '不合格');

const square = x => x ** 2;
const add = (x, y) => x + y;
const sqrt = x => x ** 0.5;

console.log(sqrt(add(square(6), square(8))));