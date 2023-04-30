// 動的型付け言語
let name = "山田太郎";

name = "横山花子";

name = 12345;
name = 1.234;
name = true;




console.log(name + "さん、こんにちは！");

name = name + "さん、こんにちは！";
console.log(name);

let x1 = 12.34;
if (x1 > 10) {
    let x2 = 100;
}

let veryLongName; // CamelCase記法
let VeryLongName; // Pascal記法
let very_long_name; // アンダースコア記法、スネーク記法

let price = 1000;
const TAX = 1.03;
console.log(1000 * TAX);

console.log(10 / 0);

function add(x, y) {
    return x + y;
}

console.log(add(10, 20));

let z = add;
console.log(z(100, 200));

function nibai(n) {
    n = n * 2;
}

let m = 10;
nibai(m);
console.log(m);

let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

function nibai2(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= 2;
    }
}

let numbers2= [10, 20, 30, 40, 50];
nibai2(numbers2);

console.log(numbers2);