let dt = new Date(2022, 11, 25, 20, 40);
console.log(dt);
dt.setMonth(dt.getMonth() + 3);
console.log(dt);
dt.setDate(dt.getDate() - 20);
console.log(dt);

const dt2 = new Date('2024-01-31');
dt2.setMonth(dt2.getMonth() + 1);
console.log(dt2);