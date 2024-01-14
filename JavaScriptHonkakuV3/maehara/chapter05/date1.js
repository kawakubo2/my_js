const timestamp = 1710000000000;
const d1 = new Date(timestamp);
console.log(d1.toLocaleString());

console.log(new Date().getTime());
const d2 = new Date(Math.pow(2, 32) * 1000);
console.log(d2.toLocaleString());