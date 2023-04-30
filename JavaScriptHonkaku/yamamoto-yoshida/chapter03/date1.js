const current = new Date(); // Date.now()
console.log(current.getFullYear());
console.log(current.getMonth() + 1);
console.log(current.getDate());
console.log(current.getHours());
console.log(current.getMinutes());
console.log(current.getSeconds());
console.log(current.getMilliseconds());
console.log(current.getDay());

const date1 = new Date();
date1.setFullYear(date1.getFullYear() + 1);
date1.setMonth(date1.getMonth() + 2);
date1.setDate(date1.getDate() + 3);
date1.setHours(date1.getHours() + 4);
date1.setMinutes(date1.getMinutes() + 5);
date1.setSeconds(date1.getSeconds() + 6);
date1.setMilliseconds(date1.getMilliseconds() + 7);
console.log(date1); // ISO形式
console.log(date1.toLocaleString());

// 月末の求め方
const date2 = new Date();
date2.setMonth(date2.getMonth() + 1);
date2.setDate(0);
console.log(date2.toLocaleDateString());

const date3 = new Date(2017, 4, 15);
const date4 = new Date(2017, 5, 20);
const diff = (date4.getTime() - date3.getTime()) / (1000 * 60 * 60 * 24);
console.log(`${diff}日の差があります`);