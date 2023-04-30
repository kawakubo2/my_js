const fruits = ['banana', 'apple', 'pear', 'grape', 'banana',
                'orange', 'banana', 'apple', 'orange', 'banana'];

const counter = new Map();
for (const f of fruits) {
    if (counter.has(f)) {
        counter.set(f, counter.get(f) + 1);
    } else {
        counter.set(f, 1);
    }
}
console.log(counter);