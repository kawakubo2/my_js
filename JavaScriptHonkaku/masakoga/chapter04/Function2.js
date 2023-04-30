let param1 = 'width,height';
let param2 = 'radius';
let param3 = 'upperbase,lowerbase,height';

let formula1 = 'return width * height';
let formula2 = 'return radius ** 2 * Math.PI';
let formula3 = 'return (upperbase + lowerbase) * height / 2';

let rectangle = new Function(param1, formula1);
let circle = new Function(param2, formula2);
let trapezoid = new Function(param3, formula3);

console.log(rectangle(8, 25));
console.log(circle(5));
console.log(trapezoid(12, 8, 10));

let diamond = function(diagonal1, diagonal2) {
    return diagonal1 * diagonal2 / 2;
}

console.log(diamond(5, 4));

const diamond2 = (diagonal1, diagonal2) => diagonal1 * diagonal2 / 2;
console.log(diamond2(5, 4));

const circle2 = radius => radius ** 2 * Math.PI;
console.log(circle2(5));

let numbers = [ -3, 1, 12, 3, 4, 8, 24, 2 ];
numbers.sort((x, y) => x - y);
console.log(numbers);

let kakuritsu = (numbers, n) => {
    let count = 0;
    for (let num of numbers) {
        if (num == n) {
            count++;
        }
    }
    return count / numbers.length * 100;
};

let nums1 = [0, 1, 1, 2, 1, 1, 0, 1, 2, 0];
let nums2 = [1, 2, 2, 2, 1, 0, 0, 1, 2, 1];

console.log(`確率: ${kakuritsu(nums1, 0)}%`);
console.log(`確率: ${kakuritsu(nums1, 1)}%`);
console.log(`確率: ${kakuritsu(nums1, 2)}%`);

console.log(`確率: ${kakuritsu(nums2, 0)}%`);
console.log(`確率: ${kakuritsu(nums2, 1)}%`);
console.log(`確率: ${kakuritsu(nums2, 2)}%`);

function add(x, y) {
    return
        x + y;
}

console.log(add(10, 20));

let n1 = 10;
function nibai() {
    n1 = 100;
}

nibai(n1);
console.log(n1);

let scope = 'Global Variable';

function getValue() {
    var scope;
    console.log(scope);
    scope = 'Local Variable';
    return scope;
}

console.log(getValue());
console.log(scope);

function sanbai(n) {
    n *= 3;
}

let a = 10;
sanbai(a);
console.log(a);

function sanbai2(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= 3;
    }
}

function sanbai3(nums) {
    for (let n of nums) {
        n *= 3;
    }
}

let numbers2 = [1, 2, 3];

sanbai2(numbers2);

console.log(numbers2);

let numbers3 = [1, 2, 3];

console.log(numbers3);
sanbai3(numbers3);
console.log(numbers3);

