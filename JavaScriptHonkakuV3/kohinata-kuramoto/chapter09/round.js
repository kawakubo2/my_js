
/*
MySQL
truncate(num, 3) ---> 123.456
rount(num, 3) ---> 123.457
*/

const num = 123.45678;
console.log('--- 小数点第3位まで ---');
const p = Math.pow(10, 3);
const ceil_num = Math.ceil(num * p) / p;
console.log(`${num}の小数点第4位を切り上げ: ${ceil_num}`);
const floor_num = Math.floor(num * p) / p;
console.log(`${num}の小数点第4位を切り下げ: ${floor_num}`);
const round_num = Math.round(num * p) / p;
console.log(`${num}の小数点第4位を四捨五入: ${round_num}`);