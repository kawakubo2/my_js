let numbers = [1, [2, 3, [4, 5], [6, [7, 8], 9], 10]];

numbers = numbers.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = 0;
for (const n of numbers) {
    total += n;
}
console.log(`合計: ${total}`);