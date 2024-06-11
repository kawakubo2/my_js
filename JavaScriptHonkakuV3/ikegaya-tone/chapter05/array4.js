const numbers = [3, 2, 6, 5, 7, 4, 1, 9, 10, 8];
let total = 0;
for (const num of numbers) {
    if (num % 2 === 0) {
        total += num;
    }
}

console.log(`合計=${total}`);