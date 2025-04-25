const param1 = 'base, height';
const param2_1 = 'width, height';
const param2_2 = 'width, height = width';
const param3 = 'upperbase, lowerbase, height';

const formula1 = 'return base * height / 2;';
const formula2 = 'return width * height;';
const formula3 = 'return (upperbase + lowerbase) * height / 2;';

const getTriangleArea  = new Function(param1, formula1);
const getRectangleArea = new Function(param2_1, formula2);
const getSquareArea = new Function(param2_2, formula2);
const getTrapezoidArea = new Function(param3, formula3);

// 三角形の面積
const triangleArea = getTriangleArea(10, 5);
console.log(`底辺が10、高さが5の長方形の面積は${triangleArea}`);

// 長方形の面積
const recganleArea = getRectangleArea(8, 7);
console.log(`幅が8、高さが7の長方形の面積は${recganleArea}`);

// 正方形の面積
const squareArea = getSquareArea(8);
console.log(`一辺が8の正方形の面積は${squareArea}`);

// 台形の面積
const trapezoidArea = getTrapezoidArea(12, 8, 10);
console.log(`上底が12、下底が8、高さが10の台形の面積は${trapezoidArea}`);

const param4 = 'x, y';

const addBody = 'return x + y;';
const subBody = 'return x - y;';
const mulBody = 'return x * y;';
const divBody = 'return x / y;';
const modBody = 'return x % y;';

const add = new Function(param4, addBody);
const sub = new Function(param4, subBody);
const mul = new Function(param4, mulBody);
const div = new Function(param4, divBody);
const mod = new Function(param4, modBody);

const x = 3;
const y = 4;
const z = 2;
const v = 24;
const w = 4;
// x + (y * z) - v / w
const a = sub(add(x, mul(y, z)), div(v, w));
console.log(`a = ${a}`);