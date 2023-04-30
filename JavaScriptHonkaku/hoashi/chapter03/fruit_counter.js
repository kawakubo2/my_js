const fruits = ['banana', 'apple', 'grape', 'banana', 'apple', 'banana',
                'orange', 'pear', 'banana', 'orange'];

const fruit_map = new Map();
for (const f of fruits) {
    if (!fruit_map.has(f)) {
        fruit_map.set(f, 0);
    }
    fruit_map.set(f, fruit_map.get(f) + 1);
}

const fruit_array = [];
for (let [fruit, num] of fruit_map.entries()) {
    fruit_array.push([fruit, num]);
}
fruit_array.sort((x, y) => y[1] - x[1]);
for (const [f, n] of fruit_array) {
    console.log(`${f}: ${n}`);
}
