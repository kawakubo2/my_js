const nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(`合計: ${sum(nums)}`);

function even_sum(numbers) {
    let total = 0;
    for (const num of numbers) {
        if (num % 2 === 0) {
            total += num;
        }
    }
    return total;
}

console.log(`偶数の合計: ${even_sum(nums)}`);

function positive_sum(numbers) {
    let total = 0;
    for (const num of numbers) {
        if (num > 0) {
            total += num;
        }
    }
    return total;
}

console.log(`正の整数の合計: ${positive_sum(nums)}`);

function positive_odd_sum(numbers) {
    let total = 0;
    for (const num of numbers) {
        if (num > 0 && num % 2 !== 0) {
            total += num;
        }
    }
    return total;
}

console.log(`正の奇数の合計: ${positive_odd_sum(nums)}`);

// filter(名前は自由につけることができる)のことをコールバック関数と呼ぶ
function higher_order_sum(filter, numbers) {
    let total = 0;
    for (const num of numbers) {
        if (filter(num)) {
            total += num;
        }
    }
    return total;
}

console.log(`偶数の合計: ${higher_order_sum((n) => n % 2 === 0, nums)}`);
console.log(`正の整数の合計: ${higher_order_sum((n) => n > 0, nums)}`);
console.log(`正の奇数の合計: ${higher_order_sum((n) => n > 0 && n % 2 !== 0, nums)}`);