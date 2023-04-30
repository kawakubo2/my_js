let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let circle_area_total = numbers
                            .filter(n => n % 2 == 0)
                            .map(r => Math.pow(r, 2) * Math.PI)
                            .reduce((total, x) => total + x);

console.log('偶数の半径を持つ円の面器合計:' + circle_area_total);

numbers
    .filter(n => n % 2 == 0)
    .map(r => Math.pow(r, 2) * Math.PI)
    .forEach(area => console.log(area));