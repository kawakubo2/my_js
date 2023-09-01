// 現在日時
const now = new Date();
console.log(now.toLocaleString());

const d1 = new Date(2023, 7, 4);
console.log(d1.toLocaleString());

const d2 = new Date(2023, 7, 4, 19, 21, 35);
console.log(d2.toLocaleString());

const d3 = new Date('2023-08-04T19:22:35');
console.log(d3.toLocaleString());

const d4 = new Date('2023/08/04 19:23:50');
console.log(d4.toLocaleString());

const d5 = new Date(1691150000000);
console.log(d5.toLocaleString());

const d6 = Date.now();
const d7 = Date.UTC(2023, 7, 4, 19, 31, 30);
console.log(d6);
console.log(d7);

const diff = (d7 - d6) / (1000 * 60 * 60);
console.log(diff);