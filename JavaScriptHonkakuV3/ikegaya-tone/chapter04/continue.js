let result = 0;

for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    result += i;
}

console.log(`奇数の合計: ${result}`);