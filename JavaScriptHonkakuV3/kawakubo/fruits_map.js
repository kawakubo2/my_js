const fruits = ['orange', 'banana', 'apple', 'banana', 'grape', 'watermelon',
                'pear', 'banana', 'apple', 'orange', 'apple', 'banana', 'grape']

console.log('---< Map >---');
const fruit_counter = new Map();
for (const f of fruits) {
    if (fruit_counter.has(f)) {
        fruit_counter.set(f, fruit_counter.get(f) + 1);
    } else {
        fruit_counter.set(f, 1);
    }
}
/*
{ 'orange': 1, 'banana': 1, 'apple': 1 }
*/
for (const [fruit_name, num] of fruit_counter.entries()) {
    console.log(`${fruit_name}: ${num}`);
} 