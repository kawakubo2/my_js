let total = 0;
for (let i = 0; i < 5; i++) {
    total += i;
}
console.log("合計:" + total);

function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}

function h_func(x, y, func) {
    return func(x, y);
}
/* 高階関数 */
console.log(h_func(10, 20, add));

function nibai(n) {
    n *= 2; // n = n * 2
}

let n1 = 5;
nibai(n1);
console.log("n1:" + n1);

function array_nibai(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= 2;
    }
}

let numbers = [1, 2, 3, 4, 5];
array_nibai(numbers);
console.log(numbers);

console.log("Caf\u00E9");

let name = '山田太郎';
let height = 180;
let weight = 88;

function bmi(weigth, height) {
    return weight / (height / 100) ** 2;
}

console.log(`${name}さんのBMI値は${bmi(weight, height)}です。`);

/*
連想配列・・・・PHP, JavaScript
辞書・・・・・・C#, Python
Map ・・・・・・Java, JavaScript
ハッシュ・・・・Ruby
*/

