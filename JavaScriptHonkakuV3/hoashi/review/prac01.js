const start = new Date().getTime();
const kami = [];
const N = 100_000;
for (let i = 0; i < N; i++) {
    const num = Math.floor(Math.random() * 1_000);
    const index = kami.indexOf(num);
    if (index > -1) {
        kami.splice(index, 1);
    } else {
        kami.push(num);
    }
    // console.log(`数値: ${num}`);
    // console.log(kami);
}
console.log(`紙には${kami.length}個の数字が残っている。`);
const end = new Date().getTime();
console.log(`処理時間: ${end - start}ms`);