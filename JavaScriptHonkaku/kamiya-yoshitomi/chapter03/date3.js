const date1 = new Date(2017, 4, 15);
const date2 = new Date(2017, 5, 20);
const diff = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
console.log(`${diff}日の差があります。`);