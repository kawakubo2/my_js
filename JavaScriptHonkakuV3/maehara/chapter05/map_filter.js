const numbers = [10, 20, -5, 15, 5, -10, 30];

const circle_area_array = numbers
    .filter((n) => n > 0)
    .map(radius => radius ** 2 * Math.PI);

console.log(circle_area_array);

const circle_area_total = numbers
    .filter((n) => n > 0)                   /* 中間操作 */
    .map(radius => radius ** 2 * Math.PI)   /* 中間操作 */
    .reduce((total, area) => total + area); /* 終端操作 */

console.log(`半径が正数の円の面積の合計: ${circle_area_total}`);

console.log('--- forEachによる表示 ---');
 numbers
    .filter((n) => n > 0)
    .map(radius => radius ** 2 * Math.PI)
    .forEach(area => console.log(area)); /* 終端操作 */