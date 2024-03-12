let total = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        total += i;
    }
}
console.log(`1～10までに存在する偶数の合計: ${total}`);