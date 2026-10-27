// 1～100までにに存在する3の倍数の合計
let total = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    total += i;
  }
}
console.log(`${total === (3 + 99) * Math.floor(100 / 3) / 2}`, total);

// 1～100万までに存在する317の倍数の合計

const start = performance.now();
total = 0;
for (let i = 317; i <= 1_000_000; i += 317) {
  total += i;
}

const end = performance.now();
console.log(`処理時間: ${end - start}ミリ秒`);
console.log(`合計: ${total}`);
const cnt = Math.floor(1_000_000 / 317);
console.log(`検算: ${(317 + 317 * cnt) * cnt / 2}`);
