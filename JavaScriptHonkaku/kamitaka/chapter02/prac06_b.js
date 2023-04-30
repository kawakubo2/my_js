const start = new Date();
let total = 0;
for (let i = 317; i <= 1000000000; i += 317) {
    total += i;
}
console.log(`合計: ${total}`);
const end = new Date();
console.log(`処理時間: ${end - start}ms`);