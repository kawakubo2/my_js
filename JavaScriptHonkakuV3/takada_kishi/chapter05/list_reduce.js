const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const total = numbers.filter((n) => n % 2 === 0).reduce((total, n) => total + n);

console.log(`偶数の合計: ${total}`);