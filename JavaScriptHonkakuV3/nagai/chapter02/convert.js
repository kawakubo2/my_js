const num_str = '12345';
const num = Number(num_str);
console.log(`typeof num = ${typeof num}`);
/*
const num = num_str - 0;
*/

const n = 123;
const s = String(n);
console.log(`typeof s = ${typeof s}`);
/*
const s = n + '';
*/

const n1 = 123;
const b1 = !!n1;
console.log(typeof b1);