// 円の半径の配列
const data = [7, 2, 10, 8, 4, 5, 6, 1, 9];
/*
 奇数の半径のみ取り出し、円の面積を計算し、合計する
*/
const totalArea = data
                  .filter(n => n % 2 === 1)
                  .map(r => r ** 2 * Math.PI)
                  .reduce((total, area) => total + area);
console.log(`奇数の半径を持つ円の面積の合計: ${totalArea}`);

let totalArea2 = 0;
for (const n of data) {
  if (n % 2 === 1) {
    totalArea2 += n ** 2 * Math.PI;
  }
}
console.log(`奇数の半径を持つ円の面積の合計: ${totalArea2}`);