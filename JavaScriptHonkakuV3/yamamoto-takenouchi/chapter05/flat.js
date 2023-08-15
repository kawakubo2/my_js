const numbers = [1, [2, 3], [4, [5, 6], 7, [8, [9]], 10]];

const numbers2 = numbers.flat(Infinity);

let total = 0;
for (const num of numbers2) {
    total += num;
}
console.log(`合計: ${total}`);

function array_sum(nums) {
    let total = 0;
    for (const n of nums) {
        if (Array.isArray(n)) {
            total += array_sum(n);
        } else {
            total += n;
        }
    }
    return total;
}
console.log(`合計(再帰関数版): ${array_sum(numbers)}`);