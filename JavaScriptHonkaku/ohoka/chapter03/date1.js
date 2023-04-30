// Dateオブジェクトの生成
let d1 = new Date(); // 現在日時
let d2 = new Date('2022/12/31 23:59:59')
let d3 = new Date(2022, 11, 31, 23, 59, 59)
let d4 = new Date(1634000000000)

console.log(d1.toLocaleString())
console.log(d1.toLocaleTimeString())
console.log(d2.toLocaleString())
console.log(d3.toLocaleString())
console.log(d4.toLocaleString())

console.log(d1.getFullYear());
console.log(d1.getMonth());
console.log(d1.getDate());
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
console.log(d1.getMilliseconds());

console.log(d1.getUTCFullYear());
console.log(d1.getUTCMonth());
console.log(d1.getUTCDate());
console.log(d1.getUTCHours());
console.log(d1.getUTCMinutes());
console.log(d1.getUTCSeconds());
console.log(d1.getUTCMilliseconds());

console.log(Date.now());

let day_of_week = ['日', '月', '火', '水', '木', '金', '土']

console.log(day_of_week[d1.getDay()]);
console.log(d1.toJSON());

d1.setFullYear(d1.getFullYear() + 1)
console.log(d1.toLocaleDateString())
d1.setMonth(d1.getMonth() + 3)
console.log(d1.toLocaleDateString())
d1.setDate(d1.getDate() + 10);
console.log(d1.toLocaleDateString())

d1 = new Date();

d1.setFullYear(d1.getFullYear() - 1)
console.log(d1.toLocaleDateString())
d1.setMonth(d1.getMonth() - 3)
console.log(d1.toLocaleDateString())
d1.setDate(d1.getDate() - 10);
console.log(d1.toLocaleDateString())

d1 = new Date();
d1.setMonth(d1.getMonth() + 1)
d1.setDate(0);
console.log(d1.toLocaleDateString())

let d5 = new Date('2001/1/1')
let d6 = new Date('2021/10/08')
console.log((d6.getTime() - d5.getTime()) / (24 * 60 * 60 * 1000));