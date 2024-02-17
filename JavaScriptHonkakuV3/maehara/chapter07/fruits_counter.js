const fruits = ['banana', 'apple', 'banana', 'orange', 'apple', 'banana',
                'grape', 'apple', 'banana', 'orange', 'banana', 'apple'];

// const fruits_name = {banana: 'バナナ', apple: 'リンゴ', orange: 'オレンジ', grape: 'ブドウ'};
// for (const en_name in fruits_name) {
//     console.log(`${en_name}: ${fruits_name[en_name]}`);
// }
const fruits_counter = new Map();

for (const fruit of fruits) {
    if (fruits_counter.has(fruit)) {
        fruits_counter.set(fruit, fruits_counter.get(fruit) + 1);
    } else {
        fruits_counter.set(fruit, 1);
    }
}

console.log(fruits_counter);