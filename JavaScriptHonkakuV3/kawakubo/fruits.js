const fruits = ['orange', 'banana', 'apple', 'banana', 'grape', 'watermelon',
                'pear', 'banana', 'apple', 'orange', 'apple', 'banana', 'grape']

console.log('---< 連想配列 >---');
const fruit_counter = {};
for (const f of fruits) {
    if (fruit_counter[f] !== undefined) {
        fruit_counter[f] += 1; // fruit_counter['banana'] = fruit_counter['banana'] + 1  ---> fruit_counter[f] = 1 + 1 ---> fruit_counter[f] = 2;
    } else {
        fruit_counter[f] = 1;
    }
}
/*
{ 'orange': 1, 'banana': 1, 'apple': 1 }
*/