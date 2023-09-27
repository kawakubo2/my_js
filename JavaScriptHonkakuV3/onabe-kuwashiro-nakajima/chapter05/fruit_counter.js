// fruit_counter.js
const fruits = ['banana', 'apple', 'orange', 'banana', 'orange', 'grape',
                'banana', 'pear', 'grape'];

const fruit_counter = new Map();
for (const f of fruits) {
    if (fruit_counter.has(f)) {
        fruit_counter.set(f, fruit_counter.get(f) + 1)
    } else {
        fruit_counter.set(f, 1);
    }
}
/*
    {'banana': 3, 'apple': 1, 'orange': 2, 'grape': 2, 'pear': 1}
*/
fruit_counter.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
console.log('-----------------------');
for (const [key, value] in fruit_counter.entries()) {
    console.log(`${key}: ${value}`);
}