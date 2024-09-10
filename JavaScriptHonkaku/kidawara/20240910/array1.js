const numbers = [1, 2, 3, 4, 5, 6];
const names = ['Yamada', 'Yokoyama', 'Tanaka'];
console.log(names[2]);

console.log('---< 最初からある繰返し構文 >---');
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log('---< for of (配列専用の繰り返し構文)[ES2015以降] >---');
for (const name of names) {
    console.log(name);
}
console.log('---< ArrayオブジェクトのforEachを使用 >---');
names.forEach((name) => console.log(name));