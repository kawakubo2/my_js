const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);

for (const num of numbers) {
    console.log(num ** 2 * Math.PI);
}