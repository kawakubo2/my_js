const dt = new Date();
console.log(`${dt.toLocaleDateString()}`);

dt.setMonth(dt.getMonth() + 3);
console.log(`${dt.toLocaleDateString()}`);
dt.setDate(dt.getDate() - 100);
console.log(`${dt.toLocaleDateString()}`);

const today = new Date();
today.setMonth(today.getMonth() + 1);
today.setDate(0);
console.log(`月末: ${today.toLocaleDateString()}`);