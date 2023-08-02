let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(`1～100まで偶数の合計: ${sum}`);

let sum2 = 0;
for (let i = 2; i <= 100; i += 2) {
    sum2 += i;
}
console.log(`1～100まで偶数の合計: ${sum2}`);
