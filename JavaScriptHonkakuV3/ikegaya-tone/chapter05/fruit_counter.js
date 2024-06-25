const fruits = ['banana', 'apple', 'orange', 'banana', 'grape',
                'banana', 'grape', 'apple', 'pear', 'banana',
                'apple', 'orange'
];

const fruitMap = new Map();

for (const f of fruits) {
    if (fruitMap.has(f)) {
        fruitMap.set(f, fruitMap.get(f) + 1);
    } else {
        fruitMap.set(f, 1);
    }
}

for (const [f, count] of fruitMap.entries()) {
    console.log(`${f}: ${count}`);
}

/*
banana: 4
apple: 3
orage: 2
grape: 2
pear: 1
*/