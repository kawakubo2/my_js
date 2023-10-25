// 高階関数(higher order function)
const numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum1(nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

console.log(`全ての合計: ${sum1(numbers)}`);

function sum2(nums) {
    let total = 0;
    for (const num of nums) {
        if (num > 0) {
            total += num;
        }
    }
    return total;
}

console.log(`正数の合計: ${sum2(numbers)}`);

function sum3(nums) {
    let total = 0;
    for (const num of nums) {
        if (num > 0 && num % 2 !== 0) {
            total += num;
        }
    }
    return total;
}

console.log(`正の奇数の合計: ${sum3(numbers)}`);
