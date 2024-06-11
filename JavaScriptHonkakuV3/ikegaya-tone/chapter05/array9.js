const numbers = [3, 2, 6, 5, 7, 4, 1, 9, 10, 8];
const even_circle_areas = numbers
    .filter((num) => num % 2 === 0)
    .map((r) => r ** 2 * Math.PI)

console.log(even_circle_areas);