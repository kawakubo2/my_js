const numbers = [3, 2, 6, 5, 7, 4, 1, 9, 10, 8];
const circle_areas = [];
for (const num of numbers) {
    if (num % 2 === 0) {
        circle_areas.push(num ** 2 * Math.PI); // 円周率はMath.PI
    }
}
let circle_total = 0;
for (const area of circle_areas) {
    circle_total += area;
}
console.log(`半径が偶数の円の面積合計: ${circle_total}`);
