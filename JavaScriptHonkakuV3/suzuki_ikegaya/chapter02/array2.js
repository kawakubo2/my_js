const numbers = [8, 4, 5, 1, 10, 3, 7, 9, 6, 2];

let total = 0;
for (const num of numbers) {
    total += num; // total = total + num
}
console.log(`合計: ${total}`); // テンプレート文字列