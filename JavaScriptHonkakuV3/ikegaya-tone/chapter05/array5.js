const numbers = [3, 2, 6, 5, 7, 4, 1, 9, 10, 8];
const radius = [];
for (const num of numbers) {
    if (num % 2 === 0) {
        radius.push(num)
    }
}
console.log(radius);