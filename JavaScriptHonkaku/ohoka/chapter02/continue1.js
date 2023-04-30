/*
1～100未満の奇数の合計を求める
*/
let result = 0;
for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    }
    result += i;
}
console.log('合計: ' + result);

/*
1～10億までに存在する317の倍数の合計を求める
317 + 634 + 951 + ....
*/
let start = Date.now();
let total = 0;
for (let i = 1; i <= 1_000_000_000; i++) {
    if (i % 317 == 0) {
        total += i;
    }
}
let end = Date.now();
console.log('合計: ' + total);
console.log('処理時間: ' + (end - start));

let start2 = Date.now();
let total2 = 0;
for (let i = 317; i <= 1_000_000_000; i += 317) {
    total2 += i;
}
let end2 = Date.now();
console.log('合計: ' + total2);
console.log('処理時間: ' + (end2 - start2));