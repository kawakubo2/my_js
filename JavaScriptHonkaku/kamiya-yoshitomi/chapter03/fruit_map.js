// fruit_map.js
fruits = ['banana', 'apple', 'orange', 'banana', 'banana', 'grape',
          'apple', 'banana', 'pear', 'orange', 'apple', 'grape', 'banana'];

const fruits_counter = new Map();

for (const fruit of fruits) {
    if (fruits_counter.has(fruit)) {
        fruits_counter.set(fruit, fruits_counter.get(fruit) + 1);
    } else {
        fruits_counter.set(fruit, 1);
    }
}

for (let [fruit, count] of fruits_counter.entries()) {
    console.log(`${fruit}: ${count}`);
}

console.log(fruits_counter);