let d = new Date(2022, 11, 4, 20, 7, 15, 368);
const timestamp = d.getTime();
console.log(timestamp);
let d2 = new Date(timestamp);
console.log(d);
console.log(d2);
console.log(new Date(1689000000000));
const now = new Date();
console.log(now.getTime());