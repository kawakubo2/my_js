const radius = [2, 3, 1, 5, 4, 6];

const even_radius = [];
for (const r of radius) {
    if (r % 2 === 0) {
        even_radius.push(r);
    }
}
const circle_area = [];
for (const r of even_radius) {
    circle_area.push(r ** 2 * Math.PI);
}
let total = 0;
for (const a of circle_area) {
    total += a;
}

console.log(`合計: ${total}`);