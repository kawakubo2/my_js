console.log('He\'s "GREAT" teacher.'); // エスケープシーケンス
console.log('He is\t\t\t teacher.');
console.log('He is\n teacher.');
console.log('Caf\u00E9');
console.log('\u06de');

let name = '山田太郎';
let age = 38;
let height = 167;
let weight = 72;

function bmi(weight, height) {
    return weight / (height / 100) ** 2; 
}

console.log(name + 'さんの年齢は' + age + '歳です。');
console.log(`${name}さんの年齢は${age}歳です。`);
console.log(`${name}さんのBMI値は${bmi(weight, height)}です。`);

let numbers = [ 2, 8, 4, 12, 5, 9, 1 ];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(numbers[7]);

// 連想配列
let employees = { 1001: '山田太郎', 1002: '横山花子', 1003: '田中一郎'};
console.log(employees[1003]);

// オブジェクトリテラル
let employee = { name: '山田太郎', age: 38, bloodtype: 'B', email: 'taro@yamada.com'};
console.log(employee['email']);
console.log(employee.email);

/*
 配列配列・・・JavaScript、PHP
 マップ・・・・Java、JavaScript
 辞書・・・・・C#, Python
 ハッシュ・・・Ruby
 */

let a = 10;
let b = 3;
console.log(a / b);

let n = 12345678;
console.log(n % 100);

let week = ['日', '月', '火', '水', '木', '金', '土'];

let cnt = 0;
for (let i = 0; i  < 35; i++) {
    console.log(week[cnt]);
    cnt = (cnt + 1) % 7;
}

let w = 10;
w = w + 1;
console.log(w);
w += 1;
console.log(w);
w++;
console.log(w);
w = w - 1;
console.log(w);
w -= 1;
console.log(w);
w--;
console.log(w);

let n1 = 10;
console.log(++n1); // 前置インクリメント
n1 = 10;
console.log('-----');
console.log(n1++);
console.log(n1);

let x1 = 0.2;
let x2 = 0.6;

if (x1 * 10 * 3 == x2 * 10) {
    console.log('等しい');
} else {
    console.log('等しくない');
}
if (x1 * 3 * 10 == x2 * 10) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

console.log(!!true);

// 複合代入演算子
let c = 4;
c *= 2; // c = c * 2;
console.log(c);

const CONSUMPTION_TAX = 1.08;
let price = 1000;
console.log(price * CONSUMPTION_TAX);

let e = 10;
let f = '10'
console.log(e == f);
console.log(e === f);

console.log(true === 1);

let g = 10;
let h = 8;

console.log(g == 10 && h == 8);
console.log(g == 1 && h == 8);
console.log(g == 10 && h == 5);
console.log(g == 3 && h == 12);
console.log('--------------');
console.log(g == 10 || h == 8);
console.log(g == 1 || h == 8);
console.log(g == 10 || h == 5);
console.log(g == 3 || h == 12);

let i = 10;
let j = 8;
let k = 5;

if (i > 5 || (j *= 2) > 100) {
    k *= 10;
}
console.log('i=' + i);
console.log('j=' + j);
console.log('k=' + k);

i == 2 || console.log('×');
i == 10 && console.log('○');

if (i == 10) {
    console.log('○');
}

let msg = '';
msg = msg || 'こんにちは、世界！';

let array = [];

array = array || ['a'];
console.log(array);

