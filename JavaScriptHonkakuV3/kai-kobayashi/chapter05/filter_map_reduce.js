/*
整数値の配列から正の要素を取り出し、円の面積を求める。
面積の合計を返す。
*/

const numbers = [2, -1, 3, 1, 4, -3];

const total = numbers.filter(function(num) { return num > 0; })
                     .map(function(radius) { return radius * radius * Math.PI; })
                     .reduce(function(total, area) { return total + area});

console.log(total);

const positiveNumber = [];
for (const n of numbers) {
    if (n > 0) {
        positiveNumber.push(n);
    }
}
const circleArea = [];
for (const n of positiveNumber) {
    circleArea.push(n * n * Math.PI);
}
let totalArea = 0;
for (const area of circleArea) {
    totalArea += area;
}
console.log(totalArea);