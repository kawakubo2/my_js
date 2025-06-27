/*
banana: 3
apple: 2
grape: 1
orange: 1
pear: 2
watermelon: 1
*/
const fruits = ['banana', 'apple', 'grape', 'banana', 'apple', 'orange',
                'banana', 'pear', 'watermelon', 'pear'];

const counter = new Map();
for (const f of fruits) {
    if (!counter.has(f)) {
        counter.set(f, 0);
    }
    counter.set(f, counter.get(f) + 1);
}

counter.forEach((count, fruit) => console.log(`${fruit}: ${count}`));