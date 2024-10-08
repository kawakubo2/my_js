const fruits = ['banana', 'apple', 'orange', 'banana', 'pear',
                'cherry', 'banana', 'apple', 'pear', 'apple', 'banana'];

/*
banana 4
apple  3
orange 1
pear   2
cherry 1
*/

const fruitCounter = new Map();
for (const f of fruits) {
    if (fruitCounter.has(f)) {
        fruitCounter.set(f, fruitCounter.get(f) + 1);
    } else {
        fruitCounter.set(f, 1);
    }
}

[...fruitCounter.entries()].forEach(([en, ja]) => {
    console.log(`${en} ${ja}`);
});
console.log('---< まずkeysメソッドでキーを取り出し、getで値を取り出す >---');
for (const en of fruitCounter.keys()) {
    console.log(`${en} ${fruitCounter.get(en)}`);
}

console.log('---< entriesメソッドのキーと値を配列で取り出して表示 >---');
for (const [en, ja] of fruitCounter.entries()) {
    console.log(`${en} ${ja}`);
}

console.log('---< valuesで値だけを取り出せる >---');
for (const num of fruitCounter.values()) {
    console.log(num);
}
