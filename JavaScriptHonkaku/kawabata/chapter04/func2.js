let param1 = 'radius';
let param2 = 'width,height';
let param3 = 'upperbase,lowerbase,height';

let exp1 = 'return Math.pow(radius, 2) * Math.PI';
let exp2 = 'return width * height';
let exp3 = 'return (upperbase * lowerbase) * height / 2';

let exp4 = 'return Math.PI * radius * 2'; 

const circle = new Function(param1, exp1);
let circumference = new Function(param1, exp4);
let rectangle = new Function(param2, exp2);
let trapezoid = new Function(param3, exp3);

console.log(circle(10));
console.log(circumference(10));
console.log(rectangle(10, 10));
console.log(trapezoid(8, 12, 10));

function add(x, y) {
    return x + y;
}
console.log(add(100, 200));

add = 100;

console.log(add(100, 200));
