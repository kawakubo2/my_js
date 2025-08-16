const d1 = new Date();
console.log(d1.toLocaleString());

const d2 = new Date(2025, 11, 24, 23, 59, 59);
console.log(d2.toLocaleString());

const d3 = new Date('2025-12-24T23:59:59'); // ISO形式
console.log(d3.toLocaleString());

const d4 = new Date('2025-12-24 23:59:59'); // ISO形式
console.log(d4.toLocaleString());

const d5 = new Date('December 24, 2025 23:59:59');
console.log(d5.toLocaleString());

console.log(`UNIXタイムスタンプ: ${new Date().getTime()}`);