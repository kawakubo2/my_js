let d1 = new Date();

console.log(d1.getFullYear());
console.log(d1.getMonth());
console.log(d1.getDate());
console.log(d1.getDay()); // 0 ---> 日, 1 ---> 月 ... 6 ---> 土
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
console.log(d1.getMilliseconds());
console.log(d1.getTime()); // タイムスタンプ値

console.log((new Date()).toLocaleString());