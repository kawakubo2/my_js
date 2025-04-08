let data = [56, 40, 26, 82, 19, 17, 73, 99];
let [x0, x1, x2, x3] = data;
let [y0, y1, y2, y3, y4, y5, y6, y7, y8] = data;
let [,,,,,,z6, z7] = data;

console.log(`x0=${x0}`);
console.log(`x1=${x1}`);
console.log(`x2=${x2}`);
console.log(`x3=${x3}`);

console.log(`y8=${y8}`);

console.log(`z6=${z6}`);
console.log(`z7=${z7}`);

const [sum, avg, , , count] = [55, 5.5, 10, 1, 10];
console.log(`合計: ${sum}`);
console.log(`平均: ${avg}`);
console.log(`件数: ${count}`);