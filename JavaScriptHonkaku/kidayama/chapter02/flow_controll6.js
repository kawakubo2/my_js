MAX = 1_000_000_000;
let start_time = performance.now();
let total = 0;
for (let i = 317; i <= MAX; i += 317) {
    total += i;
}
let end_time = performance.now();
console.log(`1～10億までに存在する317の倍数の合計: ${total}`);
console.log(`処理時間: ${end_time - start_time}ms`);