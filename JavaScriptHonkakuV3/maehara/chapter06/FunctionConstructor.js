const param1 = "base, height";
const param2 = "radius";
const param3 = "upperbase, lowerbase, height";

const expr1 = "return base * height / 2;";
const expr2 = "return radius ** 2 * Math.PI;";
const expr3 = "return (upperbase + lowerbase) * height / 2;";

const getTriangleArea = new Function(param1, expr1);
console.log(getTriangleArea(10, 4));
const getCircleArea = new Function(param2, expr2);
console.log(getCircleArea(10));
const getTrapezoidArea = new Function(param3, expr3);
console.log(getTrapezoidArea(8, 12, 10));

function add(x, y) {
    return x + y;
}
console.log(add(10, 20));
console.log(typeof add);