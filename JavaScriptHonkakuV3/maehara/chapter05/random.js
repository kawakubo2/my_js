// 0から100までの乱数を生成
let count100 = 0;
for (let i = 0; i < 1000000; i++) {
    let r = Math.floor(Math.random() * 101);
    if (r < 0 || r > 100) {
        console.log(`${r}は想定外`);
        break;
    }

    if (r === 100) {
        count100++;
    }
}
console.log(`100は${count100}回発生しました。`);

/*
 (0～10までの乱数を生成して小数点を切り捨てる) + 10
*/
const s1 = new Set([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
const s2 = new Set();
for (let i = 0; i < 10000; i++) {
    let r = Math.floor(Math.random() * 11) + 10;
    s2.add(r);
}
const a1 = Array.from(s2);
a1.sort((a, b) => a - b);
for (const n of a1) {
    console.log(n);
}