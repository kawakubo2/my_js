const numbers = [5, 9, 2, 4, 7, 1, 10, 6, 3, 8];

let total = 0;
for (const num of numbers) {
  total += num;
}
console.log(total);

console.log(numbers.reduce((total2, num) => total2 + num));

// 奇数の2乗の合計
console.log(
  numbers
        .filter((n) => n % 2 === 1)
        .map((n) => n ** 2)
        .reduce((total3, n) => total3 + n)
);