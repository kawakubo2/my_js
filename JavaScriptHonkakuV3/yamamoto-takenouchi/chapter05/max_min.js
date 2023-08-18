const numbers = [7, 12, 28, 9, 2, 10, 6, 23];

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(`最大値: ${max}`);

let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log(`最小値: ${min}`);