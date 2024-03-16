const numbers = [9, 4, 7, 6, 3, 10, 1, 5, 8, 2];
let max = numbers[0];
for (const num of numbers) {
    if (num > max) {
        max = num;
    }
}
console.log(`最大値: ${max}`);

let min = numbers[0];
for (const num of numbers) {
    if (num < min) {
        min = num;
    }
}
console.log(`最小値: ${min}`);