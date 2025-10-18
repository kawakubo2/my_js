const fruits = ['banana', 'apple', 'orange', 'banana', 'grape',
                'banana', 'melon', 'apple', 'banana', 'apple'];

const fruitCounter = new Map();
for (const fruit of fruits) {
    if (fruitCounter.has(fruit)) {
        fruitCounter.set(fruit, fruitCounter.get(fruit) + 1);
    } else {
        fruitCounter.set(fruit, 1);
    }
}

for (const [fruit, count] of fruitCounter.entries()) {
    console.log(`${fruit}: ${count}`);
}

console.log('1行で書くと...');
[...fruitCounter.entries()].forEach(entry => console.log(`${entry[0]}:${entry[1]}`));
console.log('さらに簡単に書くと...');
[...fruitCounter.entries()].forEach(([fruit, count]) => console.log(`${fruit}:${count}`));
