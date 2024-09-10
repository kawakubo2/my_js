const fruits = ['banana', 'apple', 'grape', 'orange', 'pear', 'wartermelon'];

for (const fruit of fruits) {
    if (fruit.length >= 6) {
        console.log(fruit);
    }
}
console.log('------------------------');
for (const fruit of fruits) {
    if (fruit.includes('p')) {
        console.log(fruit);
    }
}

const nums = [5, 3, 1, 8, 4, 9, 7, 2, 10, 6];