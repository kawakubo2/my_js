let data = {
    apple: 150,
    orang: 100,
    banana: 120
};

for (const key in data) {
    console.log(`${key}: ${data[key]}`);
}

const fruits = ['apple', 'orange', 'grape', 'banana'];
for (const fruit of fruits) {
    console.log(fruit);
}
