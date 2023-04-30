const fruits = ['apple', 'banana', 'orange', 'banana', 'grape', 'banana',
                'orange', 'pear', 'banana', 'orange', 'grape', 'apple'];

// { 'banana': 4, 'orange': 3, 'apple': 2, 'grape': 2, 'pear': 1 }

const counter = new Map();
for (const f of fruits) {
    if (counter.has(f)) {
        counter.set(f, counter.get(f) + 1);
    } else {
        counter.set(f, 1);
    }
}

for (let [name, count] of counter) {
    console.log(`${name}は${count}件`);
}
console.log('-----------');
Array.from(counter.keys()).forEach(k => console.log(`${k}は${counter.get(k)}件`));
console.log('-----------');
Array.from(counter.entries()).forEach(([name, count]) => console.log(`${name}は${count}件`));
