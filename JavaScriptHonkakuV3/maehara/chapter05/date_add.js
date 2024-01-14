const d1 = new Date();
d1.setFullYear(d1.getFullYear() + 1);
d1.setMonth(d1.getMonth() + 2);
d1.setDate(d1.getDate() + 3);
d1.setHours(d1.getHours() + 4);
d1.setMinutes(d1.getMinutes() + 5);
d1.setSeconds(d1.getSeconds() + 6);
console.log(d1.toLocaleString());