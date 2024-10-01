/*
Arrayオブジェクト
*/

const fruits = ['banana', 'apple', 'orange', 'grape', 'pear'];
console.log(Array.isArray(fruits));

console.log('---< 1 通常のfor文 >---');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('---< 2 for of >---');
for (const fruit of fruits) {
    console.log(fruit);
}

console.log('---< 3 forEach >---');
fruits.forEach(f => console.log(f));

console.log('---< 末尾に追加 push >---');
fruits.push('watermelon');
fruits.forEach(f => console.log(f));

console.log('---< 先頭に追加 unshift >---');
fruits.unshift('cherry');
fruits.forEach(f => console.log(f));

console.log('---< 末尾から削除 pop >---');
let removed = fruits.pop();
console.log(`末尾から削除したもの: ${removed}`);
fruits.forEach(f => console.log(f));

console.log('---< 先頭から削除 shift >---');
removed = fruits.shift();
console.log(`先頭から削除したもの: ${removed}`);
fruits.forEach(f => console.log(f));

console.log('---< 1番目から3個分削除 splice >---');
let removed_array = fruits.splice(1, 3);
console.log(`削除された要素: ${removed_array.toString()}`);
fruits.forEach(f => console.log(f));

console.log('---< 1番目にprune, apple, grapeを追加 >---');
fruits.splice(1, 0, 'prune', 'apple');
fruits.forEach(f => console.log(f));

console.log('---< prune, appleを削除してchestnut, walnut, almondを追加 splice >---');
fruits.splice(1, 2, 'chestnus', 'walnut', 'almond');
fruits.forEach(f => console.log(f));

console.log('---< 配列にある要素が含まれているか判定 includes >---');
console.log(fruits.includes('almond'));

console.log('---< 配列内にある要素が何番目に含まれているか indexOf >---');
console.log(fruits.indexOf('pear'));
console.log('---< 配列内にある要素が含まれていない場合-1が返る indexOf >---');
console.log(fruits.indexOf('apple'));
