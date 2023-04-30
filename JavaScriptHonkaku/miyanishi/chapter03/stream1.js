let numbers = [-3, 5, 2, 4, 3, -2, 6, 7, 8];
// let circle_area = numbers.filter(n => n > 0).map(r => r ** 2 * Math.PI);
// console.log(circle_area);
let circle_area_total = numbers
                            .filter(n => n > 0)
                            .map(r => r ** 2 * Math.PI)
                            .reduce((total, n) => total + n);
console.log(circle_area_total);