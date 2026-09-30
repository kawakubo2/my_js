/*
1～100億までに存在する317の倍数の合計
*/

const start = performance.now();

const MAX = 1_000_000;
const DENOMI = 317;
let total = 0;
for (let i = DENOMI; i <= MAX; i += DENOMI) {
  total += i;
}


// console.log(`1～${MAX / 10 ** 8}億までに存在する${DENOMI}の倍数の合計: ${total}`);
console.log(total);

const end = performance.now();

console.log(`処理時間: ${end - start}`);