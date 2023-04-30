let numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

let area_total = numbers.filter(n => n > 0 && n % 2 === 0).map(r => Math.pow(r, 2) * Math.PI).reduce((total, n) => total + n);

console.log(area_total);