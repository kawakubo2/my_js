// function_constructor.js

const param1 = 'base,height';
const param2 = 'radius';
const param3 = 'upperbase,lowerbase,height';

const expr1 = 'return base * height / 2';
const expr2 = 'return Math.pow(radius, 2) * Math.PI';
const expr3 = 'return (upperbase + lowerbase) * height / 2';

const getTriangleArea  = new Function(param1, expr1);
const getCircleArea    = new Function(param2, expr2);
const getTrapezoidArea = new Function(param3, expr3);

console.log(`三角形の面積: ${getTriangleArea(8, 5)}`);
console.log(`円の面積　　: ${getCircleArea(5)}`);
console.log(`台形の面積　: ${getTrapezoidArea(8, 12, 5)}`);
