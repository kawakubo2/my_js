const localTime = new Date('2021-05-04T02:35:00');
console.log(localTime.toISOString());
console.log(localTime.toLocaleString());

const utcTime = new Date('2021-05-04T02:35:00Z');
console.log(utcTime.toISOString());

const hawaiiTime = new Date('2021-05-04T02:35:00-10:00')
console.log(hawaiiTime.toISOString());

let now = new Date();
console.log(`年: ${now.getFullYear()}`);
console.log(`月: ${now.getMonth() + 1}`);
console.log(`日: ${now.getDate()}`);
console.log(`時: ${now.getHours()}`);
console.log(`分: ${now.getMinutes()}`);
console.log(`秒: ${now.getSeconds()}`);

const someday = new Date(1646700000000);
console.log(someday.toLocaleString());

now.setDate(now.getDate() + 100);
console.log(now.toLocaleString());


now = new Date();
now.setMonth(now.getMonth() - 4);
console.log(now.toLocaleString());