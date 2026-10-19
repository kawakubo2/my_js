const dt = new Date(2022, 11, 4, 20, 7, 15, 368);
console.log(`${dt.getFullYear()}年`);
console.log(`${dt.getMonth() + 1}月`);
console.log(`${dt.getDate()}日`);
console.log(`${dt.getHours()}時`);
console.log(`${dt.getMinutes()}分`);
console.log(`${dt.getSeconds()}秒`);
console.log(`${dt.getMilliseconds()}ミリ秒`);
console.log(`タイムスタンプ値: ${dt.getTime()}`);

const today = new Date();
const day = today.getDay();

const japanese_day_name = ['日', '月', '火', '水', '木', '金', '土'];

console.log(japanese_day_name[day] + "曜日");