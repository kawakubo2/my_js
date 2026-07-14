const param1 = "radius";
const param2 = "base,height";
const param3 = "upperBase,lowerBase,height";

const body1 = "return radius ** 2 * Math.PI";
const body2 = "return base * height / 2";
const body3 = "return (upperBase + lowerBase) * height / 2";

// FUnctionコンストラクタ経由での関数定義
const getCircleArea = new Function(param1, body1);
const getTriangleArea = new Function(param2, body2);
const getTrapeZoidArea = new Function(param3, body3);

console.log(getCircleArea(10));
console.log(getTriangleArea(8, 5));
console.log(getTrapeZoidArea(8, 12, 10));

console.log(typeof getCircleArea);