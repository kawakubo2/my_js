const fruits = ['banana', 'apple', 'orange', 'banana', 'pear', 'apple', 'banana'];
const vegetables = ['onion', 'pumpkin', 'mashroom', 'cucumber', 'pumpkin', 'onion', 'pumpkin'];

function arrayCounter(array) {
    const counter = new Map();
    for (const item of array) {
        if (!counter.has(item)) {
            counter.set(item, 0);
        }
        counter.set(item, counter.get(item) + 1);
    }
    return counter;
}

console.log('--- フルーツの個数を調べる ---');
const fruitsCounter = arrayCounter(fruits);
for (const [fruit_name, count] of fruitsCounter.entries()) {
    console.log(`${fruit_name}: ${count}`);
}
console.log('--- 野菜の個数を調べる ---');
const vegetableCounter = arrayCounter(vegetables);
for (const [vegetable_name, count] of vegetableCounter.entries()) {
    console.log(`${vegetable_name}: ${count}`);
}

