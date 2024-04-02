const start = new Date();

const dt1 = new Date(2022, 10, 15);
const dt2 = new Date(2022, 12, 20);

const diff = (dt2.getTime() - dt1.getTime()) / (1000 * 60 * 60 * 24);
console.log(`${diff}日の差があります。`);
const end = new Date();
console.log(`処理時間: ${end - start}`);