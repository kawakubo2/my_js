function group_func(nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (let n of nums) {
        total += n;
        cnt++;
        if (n > max) {
            max = n;
        }
        if (n < min) {
            min = n;
        }
    }
    return [total, total/cnt, max, min, cnt];
}

let numbers = [1, 7, 5, 2, 4, 9, 6, 3, 8];
let result = group_func(numbers);
console.log(`合計: ${result[0]}`);
console.log(`平均: ${result[1]}`);
console.log(`最大: ${result[2]}`);
console.log(`最小: ${result[3]}`);
console.log(`回数: ${result[4]}`);

let [sum, avg, max, min, count] = group_func(numbers);
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}}`);
console.log(`最大: ${max}`);
console.log(`最小: ${min}`);
console.log(`回数: ${count}`);

let p = 8;
let q = 5;
console.log(`入れ替え前: p = ${p}, q = ${q}`);
let temp = p;
p = q;
q = temp;
console.log(`入れ替え後: p = ${p}, q = ${q}`);

p = 8;
q = 5;
console.log(`入れ替え前: p = ${p}, q = ${q}`);
[q, p] = [p, q];
console.log(`入れ替え後: p = ${p}, q = ${q}`);

let x1 = '10';
let x2 = 10;

// == 等価演算子
if (x1 == x2) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

// === 同値演算子
if (x1 === x2) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

let x3 = 3;
let x4 = [1];
console.log(x3 + x4);

/*
 falseとみなす値
    0, '', []
*/

let x5 = 0;
console.log(x5 == false);

let s1 = '';
console.log(s1 == false);

let a1 = [];
console.log(a1 == false);

let s2 = '123';
let n2 = Number.parseInt(s2);
console.log(typeof n2 === 'number');

/*
 暗黙的な変換は使用しない。
 ただし、暗黙的な変換の結果どうなるか
 を理解しておくこと
*/
let s3 = '123';
let n3 = s3 - 0; // 暗黙的な型変換
console.log(typeof n3 === 'number');

let n4 = 0;
let b1 = !!n4; // 暗黙的な型変換
console.log(b1)

let age = 20;
console.log(age >= 20 ? '成人' : '未成年');

let score = 80;
console.log((score >= 80) ? '合格': '不合格');

let d = 10;
let e = 5;
let f = 8;

if (d > 5 || (e *= 2)) {
    f += 2;
}
console.log(`d=${d}, e=${e}, f=${f}`);

let msg = '';
msg = msg || 'こんにちは、世界！';
console.log(msg);

// 動的型付け言語
let abc = 1000;
console.log(typeof abc);
abc = 'abc';
console.log(typeof abc);
abc = true;
console.log(typeof abc);
function add(x, y) {
    return x + y;
}
abc = add;
console.log(abc(13, 7));
console.log(typeof abc);

x = 0.2;
y = 0.6;
/*
    x * 10 * 3
    と
    x * 3 * 10
    は数学的には同じ意味だが、コンピュータの世界では違う
    なぜ、違いが発生するのか
*/
console.log(x);
console.log(x * 3);
console.log(x * 10 * 3 === y * 10); // true
console.log(x * 3 * 10 === y * 10); // false

if (Math.abs(x * 3 - y) < Number.EPSILON) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

console.log(Number.EPSILON);