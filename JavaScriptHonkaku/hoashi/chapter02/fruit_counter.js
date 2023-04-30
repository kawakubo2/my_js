const fruits = ['banana', 'orange', 'banana', 'apple', 'grape', 'orange', 'banana',
                'apple', 'pear', 'banana'];

fruits.push('apple');
fruits.push('banana');
fruits.push('pineapple');
fruits.pop();
const fruit_counter = new Map();
for (const fruit of fruits) {
    if (fruit_counter.has(fruit)) {
        fruit_counter.set(fruit, fruit_counter.get(fruit) + 1);
    } else {
        fruit_counter.set(fruit, 1);
    }
}

for (let [fruit_name, count] of fruit_counter) {
    console.log(`${fruit_name}: ${count}`);
}