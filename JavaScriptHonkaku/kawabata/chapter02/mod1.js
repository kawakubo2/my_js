let members = ['山田', '横山', '田中', '山本', '鈴木'];

for (let i = 0; i < members.length * 3; i++) {
    console.log(members[i % (members.length)]);
}

let lot = 13878871;

if (lot % 100 == 71) {
    console.log('4等賞3000円です。');
}

let x = 0.2;
let y = 0.6;

if (x * 3 == y) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

if (x * 10 * 3 === y * 10) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

const DELTA = 10e-6;

if (Math.abs(x * 3 - y) < DELTA) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

const data = [1, 2, 3];

data[1] = 10;

console.log(data);

let nums = [-8, -1, 2, 1, 18, -5, 9, 4, 10, 7];

function group_function(numbers) {
    let total = 0;
    let cnt = 0;
    let max = numbers[0];
    let min = numbers[0];
    for (let n of numbers) {
        total += n;
        cnt++;
        if (n > max) max = n;
        if (n < min) min = n;
    }
    return [total, total / cnt, max, min, cnt];
}

let [sum, avg, max, min, count]= group_function(nums);
console.log('合計:' + sum); 
console.log('平均:' + avg);
console.log('最大:' + max);
console.log('最小:' + min);
console.log('件数:' + count);

let a = 10;
let b = 5;
[b, a] = [a, b];
console.log('a=' + a + ', b=' + b);

let member = { name: '山田太郎', height: 180, weight: 88};

function bmi({weight, height}) {
    return weight / Math.pow(height / 100, 2);
}

console.log(member.name + 'さんのBMI値は' + bmi(member));

let m = 10;
let n = '10';

console.log(m == n ? '○': 'x');
console.log(m === n ? '○': 'x');

let w = 0;
console.log(!!w);
console.log(typeof (n - 0));

console.log(3.14e2 === 314 ? '○': '×');
console.log('3.14e2' == 314 ? '○': '×');

let n1 = 10;
let n2 = 8;
let n3 = 5;
if (n1 > 5 || (n2 *= 2) > 10) {
    n3 *= 2;
}

console.log('n1=' + n1 + ', n2=' + n2 + ', n3=' + n3);

let z = 10;
console.log(delete z);

c = 5;
console.log(delete c);

let ary2 = [1, 2, 3];
if (Array.isArray(ary2)) {
    console.log('Array!');
} else {
    console.log('Not a array...');
}

let d = 10;
console.log(typeof d === 'number');

console.log(typeof group_function);

for (let i = 0; i < 10; console.log(i * i), i++);
