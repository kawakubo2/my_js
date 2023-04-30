const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

const today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());
console.log(dayOfWeek[today.getDay()]);

// const s1 = "1989/12/31 13:15:40";
const s1 = "2022/09/04";
const timestamp1 = Date.parse(s1);
console.log(timestamp1);

let current = new Date();
// 1年2か月3日後
current.setFullYear(current.getFullYear() + 1);
current.setMonth(current.getMonth() + 2);
current.setDate(current.getDate() + 3);
console.log(current);

// 月末の求め方
let date1 = new Date();
date1.setMonth(date1.getMonth() + 1);
date1.setDate(0);
console.log(date1);

// 2つの日付の差
const date2 = new Date(2022, 4, 15);
const date3 = new Date(2022, 5, 20);
const diff = (date3.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
console.log(diff + '日の差があります');