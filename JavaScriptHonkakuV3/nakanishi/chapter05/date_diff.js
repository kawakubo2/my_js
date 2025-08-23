function date_diff(d1, d2) {
    return (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24);
}

const dt1 = new Date(2025, 10, 15);
const dt2 = new Date(2025, 11, 20);

console.log(`${dt2.toLocaleDateString()}と${dt1.toLocaleDateString()}は${date_diff(dt1, dt2)}日の差があります。`);

const dt3 = new Date(2025, 10, 15);
dt3.setDate(dt3.getDate() + 35);
console.log(`${dt1.toLocaleDateString()}の35日後は${dt3.toLocaleDateString()}です。`);

console.log(`${new Date().toLocaleString()}`);
console.log(`${new Date().toISOString()}`);