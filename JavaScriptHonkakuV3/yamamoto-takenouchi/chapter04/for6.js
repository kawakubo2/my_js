// 1億までに存在する317の倍数の合計
const start = new Date();
const n = 1_000_000_000;
const x = 317;
let total = 0;
for (let i = x; i <= n; i += x) {
    total += i;
}
const end = new Date();
console.log(`${n}までに存在する${x}の倍数の合計: ${total}`);
console.log(`処理時間: ${end - start}`);
