const numbers = [7, 3, 4, 2, 9, 5, 1, 10, 6, 8];

const odd_numbers = numbers.filter((num) => num % 2 === 1);
console.log(odd_numbers);

const odd_square_numbers = odd_numbers.map((n) => n ** 2);
console.log(odd_square_numbers);

const total = odd_square_numbers.reduce((total, n) => total + n);
console.log(total);

// Stream API
// メソッドを.でつなげることをメソッドチェーン
const total2 = numbers
                  .filter((n) => n % 2 === 1)
                  .map((n) => n ** 2)
                  .reduce((total, n) => total + n);
console.log(total2);

let total3 = 0;
for (const num of numbers) {
  if (num % 2 === 1) {
    total3 += num ** 2;
  }
}
console.log(total3);
