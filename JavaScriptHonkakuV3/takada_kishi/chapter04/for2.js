/*
1～100までに存在する偶数の合計を求める
*/


/*
1～1_000_000までに存在する３の倍数の合計
*/

console.time('問題2');

let total2 = 0;
for (let i = 0; i <= 1_000_000; i++) {
  if (i % 3 === 0) {
    total2 += i;
  }
}
console.log(`1～100万までに存在する3の倍数の合計: ${total2}`);


console.timeEnd('問題2');