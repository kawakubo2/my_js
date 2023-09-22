const arg1 = 'base,height';
const arg2 = 'width,height';
const arg3 = 'radius'; // 半径

const expr1 = 'return base * height / 2';
const expr2 = 'return width * height / 2';
const expr3 = 'return Math.pow(radius, 2) * Math.PI';

const func1 = new Function(arg1, expr1);
const func2 = new Function(arg2, expr2);
const func3 = new Function(arg3, expr3);

console.log(func1(10, 20));
console.log(func2(10, 10));
console.log(func3(10));
