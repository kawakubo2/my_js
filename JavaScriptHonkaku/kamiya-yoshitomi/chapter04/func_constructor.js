// func_constructor.js

const param1 = 'base,height';
const param2 = 'radius';
const param3 = 'upperbase,lowerbase,height';

const formula1 = 'return base * height / 2';
const formula2 = 'return Math.pow(radius, 2) * Math.PI';
const formula3 = 'return (upperbase + lowerbase) * height / 2';

const func1 = new Function(param1, formula1);
const func2 = new Function(param2, formula2);
const func3 = new Function(param3, formula3);

console.log(func1(10, 5));
console.log(func2(5));
console.log(func3(12, 8, 10));