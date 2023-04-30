let numbers = [12, 5, 2, 7, -3, 10, 4];

let positive_even = [];
for (let n of numbers) {
    if (n > 0 && n % 2 === 0) {
        positive_even.push(n);
    }
}

let circle_areas = [];
for (let r of positive_even) {
    circle_areas.push(Math.pow(r, 2) * Math.PI);
}

console.log(circle_areas);

let circle_areas2 = numbers
    .filter(n => n > 0 && n % 2 === 0)
    .map(r => Math.pow(r, 2) * Math.PI);

console.log(circle_areas2);

let total = numbers
    .filter(n => n > 0 && n % 2 === 0)
    .map(r => Math.pow(r, 2) * Math.PI)
    .reduce((t, a) => t + a);

console.log(`合計: ${total}`);