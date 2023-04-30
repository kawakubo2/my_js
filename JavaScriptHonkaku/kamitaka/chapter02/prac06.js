let start = new Date();

let total = 0;
for (let i = 1; i < 1000000000; i++) {
    if (i % 317 === 0) {
        total += i;
    }
}
console.log(`1～10億までに存在する317の倍数の合計: ${total}`);

let end = new Date();

console.log(`処理速度: ${end - start}ms`);