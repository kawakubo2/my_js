const start = new Date().getTime();
const kami = new Set();
const N = 100_000;
for (let i = 0; i < N; i++) {
    const num = Math.floor(Math.random() * 500_000);
    if (kami.has(num)) {
        kami.delete(num)
    } else {
        kami.add(num);
    }
    // console.log(`数値: ${num}`);
    // console.log(kami);
}
console.log(`紙には${kami.size}個の数字が残っている。`);
const end = new Date().getTime();
console.log(`処理時間: ${end - start}ms`);