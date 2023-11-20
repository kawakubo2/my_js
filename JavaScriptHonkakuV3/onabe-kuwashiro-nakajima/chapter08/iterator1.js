const fruits = ["banana", "grape", "apple", "orage", "pear"];

console.log('--- iteratorを使用した場合 ---');
const itr = fruits[Symbol.iterator]();
let d;
while (d = itr.next()) {
    if (d.done) break;
    console.log(d.value);
}

console.log('--- for of 命令の場合 ---');
// 糖衣構文(Syntax Sugar)
for (const f of fruits) {
    console.log(f);
}