const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'grape',
                'banana', 'orange', 'pear', 'grape', 'apple', 'apple', 'banana']

const fruits_counter = {'apple': 0, 'banana': 0, 'orange': 0, 'grape': 0,
                        'pear': 0};

for (const fruit of fruits) {
    fruits_counter[fruit] = fruits_counter[fruit] + 1;
}

for (const fruit in fruits_counter) {
    console.log(`${fruit}: ${fruits_counter[fruit]}`)
}