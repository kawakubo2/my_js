const param1 = 'base,height'; // 底辺,高さ
const param2 = 'radius'; // 半径
const param3 = 'upperbase,lowerbase,height'; // 上底,下底,高さ

const expr1 = 'return base * height / 2;';
const expr2 = 'return Math.pow(radius, 2) * Math.PI';
const expr3 = 'return (upperbase + lowerbase) * height / 2';

const func1 = new Function(param1, expr1); // 三角形の面積を求める関数
const func2 = new Function(param2, expr2); // 円の面積を求める関数
const func3 = new Function(param3, expr3); // 台形の面積を求める関数

console.log(func1(10, 8));
console.log(func2(5));
console.log(func3(6.4, 3.6, 5.0));