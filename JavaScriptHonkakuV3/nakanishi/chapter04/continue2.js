let total = 0;

// 2の倍数と3の倍数は加算しない
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) continue;
    total += i;
}

console.log(`合計: ${total}`);