const d1 = new Date();
const d2 = new Date('2022/05/13 14:30:40');
const d3 = new Date(2022, 4, 13, 14, 30, 15, 500);
const d4 = new Date(1652450000000);

console.log(d1.toLocaleString());
console.log(d2.toLocaleString());
console.log(d3.toLocaleString());
console.log(d4.toLocaleString());

console.log(d1.getFullYear());
console.log(d1.getMonth() + 1);
console.log(d1.getDate());
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());

d1.setMonth(d1.getMonth() + 3);
console.log(d1.toLocaleString());
d1.setDate(d1.getDate() - 100);
console.log(d1.toLocaleString());

const d5 = new Date();
d5.setMonth(d5.getMonth() + 1);
d5.setDate(0);
console.log(d5.toLocaleString());