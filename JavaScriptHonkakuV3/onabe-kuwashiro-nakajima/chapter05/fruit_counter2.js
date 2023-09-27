const fruits = ['banana', 'orange', 'banana', 'apple', 'orange', 'grape',
                'banana', 'apple', 'orange', 'pear', 'banana'];

const fruit_counter = new Map();
for (const f of fruits) {
    if (fruit_counter.has(f)) {
        fruit_counter.set(f, fruit_counter.get(f) + 1);
    } else {
        fruit_counter.set(f, 1); // { banana: 4, orange: 3, apple: 2, grape: 1 pear: 1}
    }
}

for (const [fruit, count] of fruit_counter) {
    console.log(`${fruit}: ${count}`);
}