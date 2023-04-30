const numbers = [5, 4, 6, 7, 3, 9, 8, 10, 1, 2]

if (numbers.every(n => n > 0)) {
    const area_total = numbers
        .filter(n => n % 2 === 0)
        .map(r => r ** 2 * Math.PI)
        .reduce((total, n) => total + n);

    console.log(area_total);
}

let area_total2 = 0;
for (const n of numbers) {
    if (n % 2 === 0) {
        area_total2 += (n ** 2 * Math.PI);
    }
}
console.log(area_total2);

const add = function(x, y) { return x + y; }
console.log(add(10, 20));
const xyz = add;
console.log(xyz(30, 40));

const alpha = ['A', 'B', 'C', 'D'];
alpha.forEach(n => console.log(n));

const numbers2 = [78, 67, 93, 88, 62, 98, 44];
console.log(numbers2.some(n => n >= 98) ? "おごって": "...");