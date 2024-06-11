const numbers = [3, 2, 6, 5, 7, 4, 1, 9, 10, 8];
const circle_area_total = numbers
    .filter((num) => num % 2 === 0)
    .map((r) => r ** 2 * Math.PI)
    .reduce((total, area) => total + area);

console.log(circle_area_total);