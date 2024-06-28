const param1 = 'base, height';
const param2 = 'radius';
const param3 = 'upperbase, lowerbase, height';
const formula1 = 'return base * height / 2;';
const formula2 = 'return radius ** 2 * Math.PI;';
const formula3 = 'return (upperbase + lowerbase) * height / 2;';

const getTriangleArea = new Function(param1, formula1);
const getCircleArea = new Function(param2, formula2);
const getTrapezoidArea = new Function(param3, formula3);

console.log(getTriangleArea(8, 5));
console.log(getCircleArea(5));
console.log(getTrapezoidArea(12, 8, 5));