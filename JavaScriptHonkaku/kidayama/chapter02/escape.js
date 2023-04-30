console.log('Caf\u00E9');
console.log('\u09a8\u09ae\u09b8\u09cd\u0995\u09be\u09f0');

const name = '山田太郎';
let age = 29;

console.log(`${name}さんの年齢は${age}歳です。`);
console.log(name + 'さんの年齢は' + age + '歳です。');

languages = ['JavaScript', 'Python', 'Java', 'Go', 'Rust'];
console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);
console.log(languages[3]);
console.log(languages[4]);

for (const lang of languages) {
    console.log(lang);
}

const fruits = {banana: 10, grape: 7, strawberry: 12, pear: 3}
console.log(fruits['banana']);
console.log(fruits.banana);

let x = 10;
console.log(x++);

let y = 100;
y += 10; // y = y + 10
console.log(`y=${y}`);
y -= 30; // y = y - 30;
console.log(`y=${y}`);
y *= 2; // y = y * 2;
console.log(`y=${y}`);
y /= 4; // y = y / 4;
console.log(`y=${y}`);

function get_day_of_week(year, month, day)
{
    if( month < 3 ) {
        year--;
        month += 12;
    }
    return (year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400) +
		 Math.floor((13 * month + 8) / 5) + day) % 7;
}

const w = ['日', '月', '火', '水', '木', '金', '土'];
let day_of_week = get_day_of_week(2022, 6, 10);
console.log(w[day_of_week]);

const a = 10;
const b = '10';

console.log(a == b);  // 等価演算子
console.log(0 == false);
console.log(a === b); // 同値演算子

console.log(typeof a);
console.log(typeof b);

age = 17;
console.log((age >= 18) ? "成人": "未成年");

if (age >= 18) {
    console.log("成人");
} else {
    console.log("未成年");
}

let answer = 1 + (2 * 4) - 3;
