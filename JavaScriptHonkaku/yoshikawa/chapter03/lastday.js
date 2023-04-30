const d = new Date();
d.setMonth(d.getMonth() + 1);
d.setDate(0);
console.log(d.toLocaleDateString());