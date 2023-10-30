/*
高階関数(higher order function)
引数として関数を受け取ったり、戻り値として関数を返す
関数のことを高階関数と呼ぶ
*/
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

function sum4(nums) {
    let total = 0;
    for (const num of nums) {
        if (num % 3 === 0) {
            total += num;
        }
    }
    return total;
}

console.log(`3の倍数の合計: ${sum4(numbers)}`);

function higher_sum(nums, filter) {
    let total = 0;
    for (const num of nums) {
        if (filter(num)) {
            total += num;
        }
    }
    return total;
}

console.log(`正数の合計: ${higher_sum(numbers, num => num > 0)}`);
console.log(`正の奇数の合計: ${higher_sum(numbers, num => num > 0 && num % 2 !== 0)}`);
console.log(`3の倍数の合計: ${higher_sum(numbers, num => num % 3 === 0)}`);
