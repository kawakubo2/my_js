let total = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        total += i;
    }
}
console.log(`1～100までに存在する3の倍数の合計: ${total}`);