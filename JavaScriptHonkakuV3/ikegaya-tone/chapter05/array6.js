const numbers = [3, 2, 6, 5, 7, 4, 1, 9, 10, 8];
const circle_areas = [];
for (const num of numbers) {
    if (num % 2 === 0) {
        circle_areas.push(num ** 2 * Math.PI); // 円周率はMath.PI
    }
}
console.log(circle_areas);