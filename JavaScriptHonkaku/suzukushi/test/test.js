let x = 10;
let y = 20;

const add = (a, b) => a + b;

console.log(add(x, y));

let name = '山田太郎';

{
    let name = 'abc';
    console.log(name);
}
let i = 100;
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let 名前 = '横山花子';
console.log(名前);
console.log(i);
console.log(name + 'さん、こんにちは！');

function 足し算(あ, い) {
    return あ + い;
}

console.log(足し算(100, 300));

足し算 = 10;

const add2 = (x, y) => {
    return x + y;
}

console.log(add2(20, 5));


function nibai(num) {
    num *= 2;
}

let num1 = 100;
nibai(num1);
console.log(num1);

let numbers = [1, 2, 3, 4, 5, 6]

function sanbai(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= 3;
    }
    // for (let n of nums) {
    //     n *= 3;
    // }
}

sanbai(numbers);
console.log(numbers);

function bmi({weight, height}) {
    return weight / (height / 100) ** 2;
}

let member = {name: '山田太郎', height: 170, weight: 62}

console.log(bmi(member));

let name2 = '横山花子';
let age = 38;

console.log(`${name}さんの年齢は${age}歳です。`);

function greet(name) {
    console.log(name + 'さん、こんにちは！');
}

console.log(greet('田中'));

let n1 = 10;
let n2 = 3;

console.log(n1 / n2);

let numbers3 = [9, 2, 8, 3, 5, 6, 1, 0, 7, 4];

function group_func(nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (let n of nums) {
        total += n;
        cnt++;
        if (n > max) max = n;
        if (n < min) min = n;
    }
    return [total, total / cnt, max, min, cnt];
}

let result = group_func(numbers3);
console.log(`合計: ${result[0]}`);
console.log(`平均: ${result[1]}`);
console.log(`最大: ${result[2]}`);
console.log(`最小: ${result[3]}`);
console.log(`件数: ${result[4]}`);

let [sum, avg, max, min, count] = group_func(numbers3);
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);
console.log(`件数: ${count}`);

let m1 = 8;
let m2 = 5;

[m2, m1] = [m1, m2];

console.log(`m1=${m1}`);
console.log(`m2=${m2}`);

let x1 = 10;
console.log(typeof x1 === 'number');
let s1 ='abc';
console.log(typeof s1 === 'string');
let b1 = true;
console.log(typeof b1 === 'boolean');

console.log(typeof numbers3 === 'object');
console.log(typeof numbers3 === 'object' && numbers3 instanceof Array);
console.log(Array.isArray(numbers3));

let x3 = 0.2;
let x4 = 0.6;

console.log(x3 * 3);
console.log(x3 * 10 * 3 === x4 * 10);

console.log(Math.abs(x3 * 3 - x4) < 1.0e-9);
console.log(Number.EPSILON);

for (let i = 0; i < numbers3.length; i++) {
    console.log(numbers3[i]);
}

for (let n of numbers3) {
    console.log(n);
}

console.log(member);

for (let k in member) {
    console.log(k + ':' + member[k]);
}

let name3 = '山田太郎';

for (let i = 0; i < name3.length; i++) {
    console.log(`${name3.charAt(i)}: ${name3.codePointAt(i)}`);
}

let x7 = 0;
console.log((!!x7) === false);