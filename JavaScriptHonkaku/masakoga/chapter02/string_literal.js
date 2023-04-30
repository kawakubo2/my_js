console.log('He\'s "GREAT" \n teacher.');
console.log("caf\u00E9");

let name = '山田太郎';
let age = 28;
let weight = 88;
let height = 180;

function bmi(weight, height) {
    return weight / (height/100) ** 2;
}

console.log(`${name}さんの年齢は${age}歳です。`);
console.log(`${name}さんの年齢の${bmi(weight, height)}歳です。`);

let data = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(data[3]);

let numbers = [1, [2, 3, [4, 5], [6, [7, 8]], 9], 10];

function array_sum(nums) {
    if (!Array.isArray(nums)) throw new Error("配列ではない。");
    let total = 0;
    for (let n of nums) {
        if (Array.isArray(n)) {
            total += array_sum(n)
        } else {
            total += n;
        }
    }
    return total;
}

console.log(array_sum(numbers));

let lang = {JavaScript: 23, PHP: 10, Python: 38, Java: 25, Ruby: 4, JavaScript: 49}; // 連想配列
console.log(lang['JavaScript']);

let pref = { '01': '北海道', '02': '青森', '46': '沖縄県'};

let items = {みかん: 200, りんご: 300, 牛乳: 150 };

let obj = { name: '山田太郎', sex: '男', birth: '1950/12/04', mail: 'tyamada@example.com', get_name: function() { return this.name; }};　// オブジェクトリテラル

console.log(obj.get_name());

/*
 連想配列・・JavaScript, PHP
 Map ・・・・Java, JavaScript
 辞書・・・・C#, Python
 ハッシュ・・Ruby
*/

let price;
console.log(price);

let x = 10;
let y = 3;
console.log(x / y);

let obj2 = {name: '山田太郎', age: 28};
console.log(obj2.weight);

let num1 = 15098190;

console.log(num1 % 100 == 90);

let weekdays = ['日', '月', '火', '水', '木', '金', '土'];

// let cnt = 0;
// for (let i = 0; i < 35; i++) {
//     if (i % 7 === 0) console.log('-------');
//     console.log(weekdays[cnt]);
//     cnt = (cnt + 1) % 7
// }

let m = 10;
console.log(m++);

let x1 = 0.2;
let x2 = 0.6;

console.log(x1 * 3);
if (x1 * 10 * 3 === x2 * 10) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

let delta = 1.0e-15;

if (Math.abs(x1 * 3 - x2) < delta) {
    console.log('等しい');
} else {
    console.log('等しくない');
}

let num4 = 10;
num4 += 8;
console.log(num4);
num4 /= 4;
console.log(num4);

num4 = 3;
num4 <<= 3;
console.log(num4);

let num5 = 10;
let num6 = 7;
console.log(num5 & num6);
console.log(num5 | num6);

const CONSUMPTION_TAX = 1.08;
let price = 1000;
console.log(price * CONSUMPTION_TAX);

const DISCOUNT_FOR_SALE
price *= DISCOUNT_FOR_SALE;