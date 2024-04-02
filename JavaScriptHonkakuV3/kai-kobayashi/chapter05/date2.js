const now = new Date();

console.log(`年: ${now.getFullYear()}`);
console.log(`月: ${now.getMonth()}`);
console.log(`日: ${now.getDate()}`);
console.log(`時: ${now.getHours()}`);
console.log(`分: ${now.getMinutes()}`);
console.log(`秒: ${now.getSeconds()}`);
console.log(`ミリ秒: ${now.getMilliseconds()}`);

// タイムスタンプ値 1970/1/1 0:0:0.000から経過ミリ秒
console.log(now.getTime());