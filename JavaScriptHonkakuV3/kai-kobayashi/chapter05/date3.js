const dt = new Date(2022, 11, 15, 15, 20, 40);
console.log(dt)
console.log(dt.setMonth(dt.getMonth() + 3));
console.log(dt);
console.log(dt.toLocaleString());
console.log(dt.setDate(dt.getDate() - 20));
console.log(dt);