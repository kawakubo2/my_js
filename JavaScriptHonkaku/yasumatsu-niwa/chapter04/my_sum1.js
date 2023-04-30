const numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function even_sum(nums) {
    let result = 0;
    for (const n of nums) {
        if (n % 2 === 0) {
            result += n;
        }
    }
    return result;
}
console.log(`偶数の合計: ${even_sum(numbers)}`);

function positive_sum(nums) {
    let result = 0;
    for (const n of nums) {
        if (n > 0) {
            result += n;
        }
    }
    return result;
}
console.log(`正数の合計: ${positive_sum(numbers)}`);

function positive_odd_sum(nums) {
    let result = 0;
    for (const n of nums) {
        if (n > 0 && n % 2 !== 0) {
            result += n;
        }
    }
    return result;
}
console.log(`正の奇数の合計: ${positive_odd_sum(numbers)}`);

function higher_order_sum(func, nums) {
    let result = 0;
    for (const n of nums) {
        if (func(n)) {
            result += n;
        }
    }
    return result;
}
console.log(`偶数の合計: ${higher_order_sum(n => n % 2 === 0, numbers)}`);
console.log(`正数の合計: ${higher_order_sum(n => n > 0, numbers)}`);
console.log(`正の奇数の合計: ${higher_order_sum(n => n > 0 && n % 2 !== 0, numbers)}`);