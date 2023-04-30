// callback_func1.js

let numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let even_list = [];
for (let n of numbers) {
    if (n > 0 && n % 2 == 0) {
        even_list.push(n);
    }
}

let circle_area_list = [];
for (let r of even_list) {
    circle_area_list.push(Math.pow(r, 2) * Math.PI);
}

let circle_area_total = 0;
for (let a of circle_area_list) {
    circle_area_total += a;
}
console.log('円の面積の合計:' + circle_area_total);

// Stream API
let circle_area_total2 = numbers.filter(n => n > 0 && n % 2 == 0)
                               .map(r => Math.pow(r, 2) * Math.PI)
                               .reduce( (total, area) => total + area);

console.log('円の面積の合計:' + circle_area_total2);

                               