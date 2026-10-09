const numbers = [1, 2, 3, 4];
// 末尾に追加
numbers.push(5);
console.log(numbers);
// 先頭に追加
numbers.unshift(-1, 0);
console.log(numbers);
// console.log(Array.isArray(numbers));

const now = new Date();
console.log(now.toLocaleString());

const ng_words = new Set(['A', 'B', 'C']);

const words = ['旅行', '鞄', 'ラジオ', 'A', '電信柱', 'B', 'A', '岸辺', 'テレビ', 'C', 'B', '時計'];

for (const word of words) {
  if (ng_words.has(word)) continue;
  console.log(word);
}

let num = 10;
console.log(typeof num);
let float1 = 123.45678;
console.log(typeof float1);
console.log(float1.toFixed(2));
console.log(typeof float1);