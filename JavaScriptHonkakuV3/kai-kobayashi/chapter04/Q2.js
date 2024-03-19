const fruits = ["apple", "banana", "apple", "orange", "banana", "grape", "banana", "orange", "pear", "grape", "apple", "apple", "banana"]
const fruits_counter = {};
for (const fruit of fruits) {
    if (fruits_counter[fruit]) {
        fruits_counter[fruit] = fruits_counter[fruit] + 1;
    } else {
        fruits_counter[fruit] = 1;
    }
}

for (const fruit in fruits_counter) {
    console.log(`${fruit}: ${fruits_counter[fruit]}`)
}

const vegetables = {}
vegetables['pumpkin'] = 150;
vegetables['cucumber'] = 130;
vegetables['pumpkin'] = 200;
console.log(vegetables);

