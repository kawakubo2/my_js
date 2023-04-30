let d1 = new Date();
console.log(d1.toLocaleString());
let d2 = new Date('2016/12/04 20:07:15');
console.log(d2.toLocaleString());
let d3 = new Date('2016-12-04 20:07:15');
console.log(d3.toLocaleString());
let d4 = new Date('2016.12.04 20:07:15');
console.log(d4.toLocaleString());
let d5 = new Date(2016, 11, 4, 20, 7, 15, 500);
console.log(d5.toLocaleString());
let d6 = new Date(2016, 11, 32, 20, 7, 15, 500);
console.log(d6.toLocaleString());
let d7 = new Date(1645100000000);
console.log(d7.toLocaleString());

function youbi(youbi_num) {
    const w = ['日', '月', '火', '水', '木', '金', '土'];
    return w[youbi_num];
}

console.log(`今日は${youbi(d1.getDay())}曜日です。`);

console.log(d1.getFullYear());
console.log(d1.getMonth() + 1);
console.log(d1.getDate());
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
console.log(d1.getMilliseconds());

console.log(Date.parse('2022/02/16 02:00:03.123'));
console.log(new Date(Date.parse('2022-02-16T02:00:03.123Z')).toLocaleString());

console.log(d2.toJSON());

const d8 = new Date();
d8.setMonth(d8.getMonth() + 3);
console.log(d8.toLocaleString());
const d9 = new Date(2021, 11, 31);
d9.setMonth(d9.getMonth() + 2);
console.log(d9.toLocaleDateString());

const d10 = new Date();
d10.setMonth(d10.getMonth() + 1);
d10.setDate(0);
console.log(d10.toLocaleDateString());

const d11 = new Date(2017, 4, 15);
const d12 = new Date(2017, 5, 20);

console.log((d12.getTime() - d11.getTime()) / (1000 * 60 * 60 * 24));
console.log((d11.getTime() - d12.getTime()) / (1000 * 60 * 60 * 24));

const d13 = new Date();
const d14 = new Date(d13.getTime());
d14.setMonth(d14.getMonth() + 3);
console.log(d13.toLocaleString());
console.log(d14.toLocaleString());