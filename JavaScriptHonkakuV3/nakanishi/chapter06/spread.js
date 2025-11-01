console.log(Math.max(15, -3, 78, 1));
/*
 JavaScriptは可変長引数と取る関数に配列を渡すことはできない。
 渡したい場合はスプレッド演算子を使う

console.log(Math.max([15, -3, 78, 1]));
*/
console.log(Math.max(...[15, -3, 78, 1]));

const numbers1 = [1, 3, 5, 9];
const numbers2 = [8, 4, 6];
const numbers3 = [...numbers1, ...numbers2];
console.log(numbers3);

const numbers4 = [...numbers1, 10, 11, 12];
console.log(numbers4);
