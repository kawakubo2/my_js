/*
for of
は配列から要素を取り出すために使用される
*/

const fruits = ['banana', 'apple', 'orange', 'grape', 'banana', 'apple'];

console.log('--- for文で取り出す ---');
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log('--- for of文で取り出す ---');
for (const fruit_name of fruits) {
  console.log(fruit_name);
}

console.log('--- forEachメソッドで取り出す ---');
fruits.forEach((f, i) => console.log(`インデックス: ${i} 値: ${f}`));