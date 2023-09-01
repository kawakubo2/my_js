let n = 10;
let total = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        total += i;
    }
}
console.log(`${n}までの総和: ${total}`);
