/*
Dateのコンストラクタ
new Date(year, month); // 日は1日となる
new Date(year, month, day);
new Date(year, month, day, hour, munite);
new Date(year, month, day, hour, munite, second);
new Date(year, month, day, hour, munite, second, millisecond);
*/

const d1 = new Date(2024, 11, 24);
console.log(d1);
const d2 = new Date(2024, 11, 24, 18, 20);
console.log(d2);
const d3 = new Date(2024, 11, 24, 18, 20, 35);
console.log(d3);
const d4 = new Date(2024, 11, 24, 18, 20, 35, 234);
console.log(d4);

const now = new Date();
console.log(now.toLocaleString());

const d5 = new Date('2024-12-24T18:28:38.789'); // ISO形式
console.log(d5.toLocaleString());

const timestamp = new Date().getTime();
console.log(timestamp);