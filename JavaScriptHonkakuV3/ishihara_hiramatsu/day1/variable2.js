// 半径の2乗 * 円周率
// radius ** 2 * Math.PI;
const radius = [1, 2, 3, 4, 5];
console.log(radius[0]);
console.log(radius[1]);
console.log(radius[2]);
console.log(radius[3]);
console.log(radius[4]);
// console.log(radius[5]);

// 繰返し構文
console.log('for of命令で要素を取り出す')
for (const r of radius) {
    console.log('半径' + r + 'cm' + 'の円の面積は' + (r ** 2 * Math.PI) + '平方cmです。');
}
console.log('インデクスを使った取り出し方')
for (let i = 0; i < radius.length; i++) {
    console.log('半径' + radius[i] + 'cm' + 'の円の面積は' + (radius[i] ** 2 * Math.PI) + '平方cmです。');
}
console.log('forEachを使った取り出し方');
radius.forEach((r) => {
    console.log('半径' + r + 'cm' + 'の円の面積は' + (r ** 2 * Math.PI) + '平方cmです。');
});
radius.forEach(function(r) {
    console.log('半径' + r + 'cm' + 'の円の面積は' + (r ** 2 * Math.PI) + '平方cmです。');
});